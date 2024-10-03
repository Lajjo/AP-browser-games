import { get } from "svelte/store";
import { messagesValue, reconnectAttemptsValue, serverSocketValue } from "./data";
import { ARCHIPELAGO_PROTOCOL_VERSION, CLIENT_STATUS, DEFAULT_SERVER_PORT, apItemsById, apLocationsById, apLocationsByName, checkedLocations, itemsReceived, messages, missingLocations, playerSlot, playerTeam, players, preventReconnect, reconnectAttempts, reconnectTimeout, serverAuthError, serverPassword, serverSocket, slotName } from "$lib/stores/archipelago";
import { bombs, boardHeight, boardWidth } from '$lib/stores/digging-game';


export const connectToServer = async (address: string, player: string | null, password: string | null) => {
  if (serverSocketValue?.readyState === WebSocket.OPEN) {
    serverSocketValue.close();
    serverSocket.set(null);
  }

  // If an empty string is passed as the address, do not attempt to connect
  if (!address || !player) { return; }

  // This is a new connection attempt, no auth error has occurred yet
  serverAuthError.set(false);

  // Determine the server address
  let serverAddress = address;
  if (serverAddress.search(/^\/connect /) > -1) { serverAddress = serverAddress.substring(9); }
  if (serverAddress.search(/:\d+$/) === -1) { serverAddress = `${serverAddress}:${get(DEFAULT_SERVER_PORT)}`; }

  // Determine connection protocol, default to secure websocket
  const protocol = /^ws:\/\//.test(serverAddress) ? 'ws' : 'wss';

  // Strip protocol from server address if present
  serverAddress = serverAddress.replace(/^.*\/\//, '');

  // Store the last given password
  serverPassword.set(password);

  // Reset the array of items received on every connection. This prevents the client from accepting cheat items
  // multiple times in the case of an AP server reconnection.
  itemsReceived.set([]);

  // Attempt to connect to the server
  serverSocket.set(new WebSocket(`${protocol}://${serverAddress}`));

  if (serverSocketValue) {
    serverSocketValue.onopen = () => { };


    // Handle incoming messages
    serverSocketValue.onmessage = (event) => {
      const commands = JSON.parse(event.data);
      for (const command of commands) {
        const serverStatus = document.getElementById('server-status');
        switch (command.cmd) {
          case 'RoomInfo':
            // Update the local cache of location and item maps if necessary
            if (!localStorage.getItem('dataPackageVersion') || !localStorage.getItem('dataPackage') ||
              command.datapackage_version !== localStorage.getItem('dataPackageVersion')) {
              requestDataPackage();
            } else {
              // Load the location and item maps into memory
              buildItemAndLocationData(JSON.parse(localStorage.getItem('dataPackage') || ""));
            }

            slotName.set(player);

            // Authenticate with the server
            serverSocketValue?.send(JSON.stringify([{
              cmd: 'Connect',
              game: 'ChecksFinder',
              name: get(slotName),
              uuid: getClientId(),
              tags: ['AP', 'BK_Sudoku'],
              password: get(serverPassword),
              version: get(ARCHIPELAGO_PROTOCOL_VERSION),
              items_handling: 0b111,
              slot_data: true,
            }]));
            break;

          case 'Connected':
            // Reset reconnection info
            reconnectAttempts.set(0);

            // Store the reported location check data from the server. They are arrays of locationIds
            checkedLocations.set(command.checked_locations);
            missingLocations.set(command.missing_locations);
            itemsReceived.set([]);
            bombs.set(0);
            boardHeight.set(0);
            boardWidth.set(0);

            // Update header text
            serverStatus?.classList.remove('red');
            serverStatus && (serverStatus.innerText = 'Connected');
            serverStatus?.classList.add('green');

            // Save the list of players provided by the server
            players.set(command.players);

            // Save information about the current player
            playerTeam.set(command.team);
            playerSlot.set(command.slot);

            // Enable the "Begin" button
            document?.getElementById('control-button')?.removeAttribute('disabled');
            break;

          case 'ConnectionRefused':
            serverStatus?.classList.remove('connected');
            serverStatus && (serverStatus.innerText = 'Not Connected');
            serverStatus?.classList.add('disconnected');
            if (serverSocketValue && serverSocketValue.readyState === WebSocket.OPEN) {
              if (command.errors.includes('InvalidPassword')) {
                messages.update(items => ([...items, serverPassword === null ?
                  'This server requires a password. Please use /connect [server] [password] to connect.' :
                  'Your provided password is incorrect. Please try again.'
                ]));
              } else {
                messages.update(items => ([...items, `Error while connecting to AP server: ${command.errors.join(', ')}.`]));
              }
              serverAuthError.set(true);
              serverSocketValue?.close();
            }
            break;

          case 'ReceivedItems':
            // Handle received items
            command.items.forEach((item) => {
              // Ignore items in this packet if it is the result of a reconnection, unless the item
              // is the GeoCities item, because the user deserves to revisit the year 2001.

              switch (item.item) {
                // Handle GeoCities Website
                case 80000:
                  boardWidth.update((value) => value + 1);
                  console.log("boardWidth: ", get(boardWidth));
                  break;

                // Handle joke API calls
                case 80001:
                  boardHeight.update((value) => value + 1);
                  break;

                // Handle motivational videos
                case 80002:
                  bombs.update((value) => value + 1);
                  break;
              }
            });
            break;

          case 'RoomUpdate':
            // Nothing to see here, move along
            break;

          case 'Print':
            messages.update((items) => ([...items, command.text]));
            break;

          case 'PrintJSON':
            messages.update((items) => ([...items, ...command.data]));
            break;

          case 'DataPackage':
            // Save updated location and item maps into localStorage
            if (command.data.version !== 0) { // Unless this is a custom package, denoted by version zero
              localStorage.setItem('dataPackageVersion', command.data.version);
              localStorage.setItem('dataPackage', JSON.stringify(command.data));
            }
            buildItemAndLocationData(command.data);
            break;

          case 'Bounced':
            // This command can be used for a variety of things. Currently, it is used for keep-alive and DeathLink.
            // keep-alive packets can be safely ignored
            break;

          default:
            // Unhandled events are ignored
            break;
        }
      }
    };

    serverSocketValue.onclose = () => {
      const serverStatus = document.getElementById('server-status');
      serverStatus?.classList.remove('green');
      serverStatus && (serverStatus.innerText = 'Not Connected');
      serverStatus?.classList.add('red');

      // If the user cleared the server address, do nothing
      const serverAddress = document?.getElementById('server-address')?.value;
      if (preventReconnect || !serverAddress) { return; }

      if (reconnectTimeout) {
        clearTimeout(get(reconnectTimeout));
        reconnectTimeout.set(null);
      }

      reconnectTimeout.set(setTimeout(() => {
        // Do not attempt to reconnect if a server connection exists already. This can happen if a user attempts
        // to connect to a new server after connecting to a previous one
        if (serverSocketValue?.readyState === WebSocket.OPEN) { return; }

        // If the socket was closed in response to an auth error, do not reconnect
        if (get(serverAuthError)) { return; }

        // If reconnection is currently prohibited for any other reason, do not attempt to reconnect
        if (get(preventReconnect)) { return; }

        // Do not exceed the limit of reconnection attempts
        reconnectAttempts.set(reconnectAttemptsValue + 1);
        if (reconnectAttemptsValue > maxReconnectAttemptsValue) {
          messages.update(items => ([...items, 'Archipelago server connection lost. The connection closed unexpectedly. ' +
            'Please try to reconnect, or restart the client.']));
          return;
        }

        messages.update(items => ([...items, `Connection to AP server lost. Attempting to reconnect ` +
          `(${reconnectAttemptsValue} of ${maxReconnectAttemptsValue})`]));
        connectToServer(address);
      }, 5000));
    };

    serverSocketValue.onerror = () => {
      if (serverSocketValue?.readyState === WebSocket.OPEN) {
        messages.update(items => ([...items, 'Archipelago server connection lost. The connection closed unexpectedly. ' +
          'Please try to reconnect, or restart the client.']));
        serverSocketValue.close();
      }
    };
  }

};

const getClientId = () => {
  let clientId = localStorage.getItem('clientId');
  if (!clientId) {
    clientId = (Math.random() * 10000000000000000).toString();
    localStorage.setItem('clientId', clientId);
  }
  return clientId;
};

const requestDataPackage = () => {
  if (!serverSocketValue || serverSocketValue.readyState !== WebSocket.OPEN) { return; }
  serverSocketValue.send(JSON.stringify([{
    cmd: 'GetDataPackage',
  }]));
};

export const sendMessageToServer = (message) => {
  if (serverSocketValue?.readyState === WebSocket.OPEN) {
    serverSocketValue.send(JSON.stringify([{
      cmd: 'Say',
      text: message,
    }]));
  }
};

export const serverSync = () => {
  if (serverSocketValue?.readyState === WebSocket.OPEN) {
    serverSocketValue.send(JSON.stringify([{ cmd: 'Sync' }]));
  }
};

export const sendLocationCheck = (locationId) => {
  let cl = get(checkedLocations);
  cl.push(locationId);
  checkedLocations.set(cl);
  let ml = get(missingLocations);
  ml.splice(ml.indexOf(locationId));
  missingLocations.set(ml);
  serverSocketValue?.send(JSON.stringify([{
    cmd: 'LocationChecks',
    locations: [locationId],
  }]));
};

export const sendGoalComplete = () => {
  serverSocketValue?.send(JSON.stringify([{ cmd: 'StatusUpdate', status: get(CLIENT_STATUS).CLIENT_GOAL }]));
};

const buildItemAndLocationData = (dataPackage) => {
  Object.values(dataPackage.games).forEach((game) => {
    Object.keys(game.item_name_to_id).forEach((item) => {
      get(apItemsById)[game.item_name_to_id[item]] = item;
    });

    Object.keys(game.location_name_to_id).forEach((location) => {
      get(apLocationsById)[game.location_name_to_id[location]] = location;
    });

  });

  apLocationsByName.set(dataPackage.games['ChecksFinder'].location_name_to_id);
  console.log(dataPackage.games['ChecksFinder']);

};
