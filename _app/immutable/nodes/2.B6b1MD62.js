var At=Object.defineProperty;var Rt=(l,e,s)=>e in l?At(l,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[e]=s;var T=(l,e,s)=>(Rt(l,typeof e!="symbol"?e+"":e,s),s);import{A as y,s as pe,f as h,a as k,l as L,g as m,h as w,y as qe,c as B,d as g,m as j,j as f,i as $,B as u,C as x,D as ie,z as W,E as Nt,F as ge,G as Se,H as ft,I as Tt,e as ee,n as Y,J as he,K as Je,L as dt,M as rt,o as yt}from"../chunks/scheduler.ZiWP_m9T.js";import{S as _e,i as ve,a as C,g as He,t as q,c as Fe,b as Ne,d as Pe,m as Ie,e as $e,f as at}from"../chunks/index.BOSSQrwg.js";import{w as S,r as Te}from"../chunks/index.DspTxLxP.js";import{b as me}from"../chunks/paths.D0RlhfIL.js";function te(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}const Ot=Te({major:0,minor:5,build:0,class:"Version"});Te({0:"Disabled",1:"Enabled",2:"Goal",6:"Auto",7:"Enabled + Auto"});const ht=S(null),it=S(null),Pt=S(null),It=S([]),Lt=S({}),jt=S({}),Dt=S({}),qt=Te(38281),be=S(null),Xe=S(!1),Ze=S(null),xe=S([]),Mt=Te(10),We=S(!1),et=S(0),Me=S(null),Ge=S(null),Ae=S([]),Re=S([]),Gt=Te({CLIENT_UNKNOWN:0,CLIENT_READY:10,CLIENT_PLAYING:20,CLIENT_GOAL:30}),X=S([]);class Ut{constructor(){T(this,"isBomb",!1);T(this,"adjacentBombs",0);T(this,"clicked",!1);T(this,"flagged",!1)}}class Wt{constructor(){T(this,"serverRows",5);T(this,"currentRows",5);T(this,"serverColumns",5);T(this,"currentColumns",5);T(this,"serverBombs",5);T(this,"currentBombs",5);T(this,"placedBombs",0);T(this,"playing",!1);T(this,"grid",[]);T(this,"checked",0);T(this,"missing",0);tt.subscribe(e=>this.serverBombs=e),nt.subscribe(e=>this.serverRows=e),st.subscribe(e=>this.serverColumns=e),Ae.subscribe(e=>this.checked=e.length),Re.subscribe(e=>this.missing=e.length)}availableChecks(){return Math.max(Math.min(this.currentBombs+this.currentRows+this.currentColumns-10-this.checked,this.missing),0)}check(e){e&&(this.availableChecks()?Kt(81e3+this.checked):this.currentBombs===20&&this.currentRows===10&&this.currentColumns===10&&Yt(),oe.set(this))}increaseConnectedBombs(e,s){0<=e&&e<this.currentColumns&&0<=s&&s<this.currentRows&&this.grid[s][e].isBomb!==!0&&(this.grid[s][e].adjacentBombs+=1)}handleClick(e,s,n){n===0&&this.digSpot(e,s,!1),n===2&&this.flagSpot(e,s),oe.set(this)}flagSpot(e,s){if(0<=e&&e<this.currentColumns&&0<=s&&s<this.currentRows&&!this.grid[s][e].clicked){let n=this.grid[s][e];n.flagged=!n.flagged,this.grid[s][e]=n}}async digSpot(e,s,n=!0){if(0<=e&&e<this.currentColumns&&0<=s&&s<this.currentRows&&!this.grid[s][e].clicked&&!this.grid[s][e].flagged){let r=this.grid[s][e];r.clicked=!0,this.placedBombs===0&&(this.playing=!0,this.placeBombs({x:e,y:s})),!r.isBomb&&r.adjacentBombs==0&&(this.digSpot(e-1,s-1),this.digSpot(e,s-1),this.digSpot(e+1,s-1),this.digSpot(e-1,s),this.digSpot(e+1,s),this.digSpot(e-1,s+1),this.digSpot(e,s+1),this.digSpot(e+1,s+1)),r.isBomb&&(this.showBoard(),setTimeout(()=>{this.playing=!1,this.getNewBoard()},2500)),this.grid[s][e]=r}this.hasWon()&&(this.showBoard(),setTimeout(()=>{this.playing=!1,this.getNewBoard()},2500))}spawnBomb(){}showBoard(){this.grid.forEach((e,s)=>{e.forEach((n,r)=>{n.clicked=!0,this.grid[s][r]=n})})}getNewBoard(){this.playing||(this.placedBombs=0,this.currentBombs=this.serverBombs,this.currentColumns=this.serverColumns,this.currentRows=this.serverRows,this.grid=Array.from({length:this.currentRows},()=>Array.from({length:this.currentColumns},()=>new Ut))),oe.set(this)}adjacentToStart(e,s,n){return e.x>=s-1&&e.x<=s+1&&e.y>=n-1&&e.y<=n+1}placeBombs(e){for(;this.placedBombs<this.currentBombs;){const s=Math.round(Math.random()*this.currentColumns*this.currentBombs)%this.currentColumns,n=Math.round(Math.random()*this.currentRows*this.currentBombs)%this.currentRows;if(this.adjacentToStart(e,s,n))continue;const r=this.grid[n][s];r.isBomb!==!0&&(this.increaseConnectedBombs(s-1,n-1),this.increaseConnectedBombs(s,n-1),this.increaseConnectedBombs(s+1,n-1),this.increaseConnectedBombs(s-1,n),r.isBomb=!0,this.increaseConnectedBombs(s+1,n),this.increaseConnectedBombs(s-1,n+1),this.increaseConnectedBombs(s,n+1),this.increaseConnectedBombs(s+1,n+1),this.placedBombs++)}}hasWon(){return this.placedBombs===this.getUndugSpots()&&!this.getTiles().some(e=>e.clicked&&e.isBomb)}getTiles(){return this.grid.flatMap(e=>e)}getUndugSpots(){return this.currentColumns*this.currentRows-this.getTiles().filter(e=>e.clicked).length}}const oe=S(null),tt=S(5),st=S(5),nt=S(5);let Ue=0,lt=10,b=null;Ae.subscribe(l=>l);Re.subscribe(l=>l);it.subscribe(l=>l);Pt.subscribe(l=>l);It.subscribe(l=>l);et.subscribe(l=>Ue=l);be.subscribe(l=>b=l);X.subscribe(l=>l);xe.subscribe(l=>l);Mt.subscribe(l=>lt=l);const $t=async(l,e,s)=>{if((b==null?void 0:b.readyState)===WebSocket.OPEN&&(b.close(),be.set(null)),!l||!e)return;Xe.set(!1);let n=l;n.search(/^\/connect /)>-1&&(n=n.substring(9)),n.search(/:\d+$/)===-1&&(n=`${n}:${y(qt)}`);const r=/^ws:\/\//.test(n)?"ws":"wss";n=n.replace(/^.*\/\//,""),Ze.set(s??null),xe.set([]),be.set(new WebSocket(`${r}://${n}`)),b&&(b.onopen=()=>{},b.onmessage=t=>{const i=JSON.parse(t.data);for(const a of i){const o=document.getElementById("server-status");switch(a.cmd){case"RoomInfo":!localStorage.getItem("dataPackageVersion")||!localStorage.getItem("dataPackage")||a.datapackage_version!==localStorage.getItem("dataPackageVersion")?Ht():mt(JSON.parse(localStorage.getItem("dataPackage")||"")),ht.set(e),b==null||b.send(JSON.stringify([{cmd:"Connect",game:"ChecksFinder",name:y(ht),uuid:Jt(),tags:["AP","BK_Sudoku"],password:y(Ze),version:y(Ot),items_handling:7,slot_data:!0}]));break;case"Connected":et.set(0),Ae.set(a.checked_locations),Re.set(a.missing_locations),xe.set([]),tt.set(5),nt.set(5),st.set(5),o==null||o.classList.remove("red"),o&&(o.innerText="Connected"),o==null||o.classList.add("green"),It.set(a.players),Pt.set(a.team),it.set(a.slot);break;case"ConnectionRefused":o==null||o.classList.remove("connected"),o&&(o.innerText="Not Connected"),o==null||o.classList.add("disconnected"),b&&b.readyState===WebSocket.OPEN&&(a.errors.includes("InvalidPassword")?X.update(c=>[...c,Ze===null?"This server requires a password. Please use /connect [server] [password] to connect.":"Your provided password is incorrect. Please try again."]):X.update(c=>[...c,`Error while connecting to AP server: ${a.errors.join(", ")}.`]),Xe.set(!0),b==null||b.close());break;case"ReceivedItems":a.items.forEach(c=>{switch(c.item){case 8e4:st.update(d=>d+1);break;case 80001:nt.update(d=>d+1);break;case 80002:tt.update(d=>d+1);break}});break;case"RoomUpdate":break;case"Print":X.update(c=>[...c,a.text]);break;case"PrintJSON":X.update(c=>[...c,...a.data]);break;case"DataPackage":a.data.version!==0&&(localStorage.setItem("dataPackageVersion",a.data.version),localStorage.setItem("dataPackage",JSON.stringify(a.data))),mt(a.data);break}}},b.onclose=()=>{const t=y(Ge);We||!t||(Me&&(window.clearTimeout(y(Me)??0),Me.set(null)),Me.set(window.setTimeout(()=>{if((b==null?void 0:b.readyState)!==WebSocket.OPEN&&!y(Xe)&&!y(We)){if(et.set(Ue+1),Ue>lt){X.update(i=>[...i,"Archipelago server connection lost. The connection closed unexpectedly. Please try to reconnect, or restart the client."]);return}X.update(i=>[...i,`Connection to AP server lost. Attempting to reconnect (${Ue} of ${lt})`]),$t(l)}},5e3)))},b.onerror=()=>{(b==null?void 0:b.readyState)===WebSocket.OPEN&&(X.update(t=>[...t,"Archipelago server connection lost. The connection closed unexpectedly. Please try to reconnect, or restart the client."]),b.close())})},Jt=()=>{let l=localStorage.getItem("clientId");return l||(l=(Math.random()*1e16).toString(),localStorage.setItem("clientId",l)),l},Ht=()=>{!b||b.readyState!==WebSocket.OPEN||b.send(JSON.stringify([{cmd:"GetDataPackage"}]))},Ft=l=>{(b==null?void 0:b.readyState)===WebSocket.OPEN&&b.send(JSON.stringify([{cmd:"Say",text:l}]))},Kt=l=>{let e=y(Ae);e.push(l),Ae.set(e);let s=y(Re);s.shift(),Re.set(s),b==null||b.send(JSON.stringify([{cmd:"LocationChecks",locations:[l]}]))},Yt=()=>{b==null||b.send(JSON.stringify([{cmd:"StatusUpdate",status:y(Gt).CLIENT_GOAL}]))},mt=l=>{Object.values(l.games).forEach(e=>{Object.keys(e.item_name_to_id).forEach(s=>{y(Lt)[e.item_name_to_id[s]]=s}),Object.keys(e.location_name_to_id).forEach(s=>{y(jt)[e.location_name_to_id[s]]=s})}),Dt.set(l.games.ChecksFinder.location_name_to_id)};function zt(l){let e,s,n="Digging Game",r,t,i,a,o="Server address:",c,d,p,v,E,z="Player name:",J,A,se,M,R,ke="Password:",ne,P,Q,G,ce=be?"Connect":"Disconnect",Z,le,ue;return{c(){e=h("section"),s=h("h1"),s.textContent=n,r=k(),t=h("form"),i=h("div"),a=h("label"),a.textContent=o,c=k(),d=h("input"),p=k(),v=h("div"),E=h("label"),E.textContent=z,J=k(),A=h("input"),se=k(),M=h("div"),R=h("label"),R.textContent=ke,ne=k(),P=h("input"),Q=k(),G=h("button"),Z=L(ce),this.h()},l(I){e=m(I,"SECTION",{class:!0});var D=w(e);s=m(D,"H1",{class:!0,"data-svelte-h":!0}),qe(s)!=="svelte-584zkb"&&(s.textContent=n),r=B(D),t=m(D,"FORM",{class:!0});var U=w(t);i=m(U,"DIV",{class:!0});var O=w(i);a=m(O,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),qe(a)!=="svelte-1x6qc9h"&&(a.textContent=o),c=B(O),d=m(O,"INPUT",{name:!0,id:!0,class:!0}),O.forEach(g),p=B(U),v=m(U,"DIV",{class:!0});var H=w(v);E=m(H,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),qe(E)!=="svelte-7ul9v9"&&(E.textContent=z),J=B(H),A=m(H,"INPUT",{name:!0,id:!0,class:!0}),H.forEach(g),se=B(U),M=m(U,"DIV",{class:!0});var V=w(M);R=m(V,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),qe(R)!=="svelte-bhu94"&&(R.textContent=ke),ne=B(V),P=m(V,"INPUT",{name:!0,id:!0,class:!0}),V.forEach(g),Q=B(U),G=m(U,"BUTTON",{class:!0});var fe=w(G);Z=j(fe,ce),fe.forEach(g),U.forEach(g),D.forEach(g),this.h()},h(){f(s,"class","svelte-grff0s"),f(a,"for","address"),f(a,"class","svelte-grff0s"),f(d,"name","address"),f(d,"id","server-address"),f(d,"class","svelte-grff0s"),f(i,"class","svelte-grff0s"),f(E,"for","player"),f(E,"class","svelte-grff0s"),f(A,"name","player"),f(A,"id","player"),f(A,"class","svelte-grff0s"),f(v,"class","svelte-grff0s"),f(R,"for","password"),f(R,"class","svelte-grff0s"),f(P,"name","password"),f(P,"id","password"),f(P,"class","svelte-grff0s"),f(M,"class","svelte-grff0s"),f(G,"class","svelte-grff0s"),f(t,"class","svelte-grff0s"),f(e,"class","svelte-grff0s")},m(I,D){$(I,e,D),u(e,s),u(e,r),u(e,t),u(t,i),u(i,a),u(i,c),u(i,d),x(d,l[0]),u(t,p),u(t,v),u(v,E),u(v,J),u(v,A),x(A,l[1]),u(t,se),u(t,M),u(M,R),u(M,ne),u(M,P),x(P,l[2]),u(t,Q),u(t,G),u(G,Z),le||(ue=[ie(d,"input",l[4]),ie(A,"input",l[5]),ie(P,"input",l[6]),ie(G,"click",l[3])],le=!0)},p(I,[D]){D&1&&d.value!==I[0]&&x(d,I[0]),D&2&&A.value!==I[1]&&x(A,I[1]),D&4&&P.value!==I[2]&&x(P,I[2])},i:W,o:W,d(I){I&&g(e),le=!1,Nt(ue)}}}function Qt(l,e,s){let n,r,t;ge(l,be,E=>s(7,n=E)),ge(l,Ge,E=>s(8,r=E)),ge(l,We,E=>s(9,t=E));let i=y(Ge),a=y(it),o="";async function c(E){if(!i){Se(We,t=!0,t),Se(Ge,r=null,r),n&&n.readyState===WebSocket.OPEN&&(n.close(),Se(be,n=null,n));return}await $t(i,a,o)}function d(){i=this.value,s(0,i)}function p(){a=this.value,s(1,a)}function v(){o=this.value,s(2,o)}return[i,a,o,c,d,p,v]}class Vt extends _e{constructor(e){super(),ve(this,e,Qt,zt,pe,{})}}function gt(l){let e;function s(t,i){if(t[2]===!0)return Zt;if(t[3]>0)return Xt}let n=s(l),r=n&&n(l);return{c(){r&&r.c(),e=ee()},l(t){r&&r.l(t),e=ee()},m(t,i){r&&r.m(t,i),$(t,e,i)},p(t,i){n===(n=s(t))&&r?r.p(t,i):(r&&r.d(1),r=n&&n(t),r&&(r.c(),r.m(e.parentNode,e)))},d(t){t&&g(e),r&&r.d(t)}}}function Xt(l){let e;return{c(){e=L(l[3])},l(s){e=j(s,l[3])},m(s,n){$(s,e,n)},p(s,n){n&8&&Y(e,s[3])},d(s){s&&g(e)}}}function Zt(l){let e,s;return{c(){e=h("img"),this.h()},l(n){e=m(n,"IMG",{alt:!0,src:!0}),this.h()},h(){f(e,"alt","bomb"),he(e.src,s=me+"/bomb-large.png")||f(e,"src",s)},m(n,r){$(n,e,r)},p:W,d(n){n&&g(e)}}}function xt(l){let e,s,n,r,t=l[0]&&gt(l);return{c(){e=h("td"),t&&t.c(),this.h()},l(i){e=m(i,"TD",{class:!0});var a=w(e);t&&t.l(a),a.forEach(g),this.h()},h(){f(e,"class",s=ft(l[0]?"dug":l[1]?"flag":"")+" svelte-10n1hly")},m(i,a){$(i,e,a),t&&t.m(e,null),n||(r=ie(e,"mousedown",l[5]),n=!0)},p(i,[a]){i[0]?t?t.p(i,a):(t=gt(i),t.c(),t.m(e,null)):t&&(t.d(1),t=null),a&3&&s!==(s=ft(i[0]?"dug":i[1]?"flag":"")+" svelte-10n1hly")&&f(e,"class",s)},i:W,o:W,d(i){i&&g(e),t&&t.d(),n=!1,r()}}}function es(l,e,s){const n=Tt();let{clicked:r=!1}=e,{flagged:t=!1}=e,{isBomb:i=!1}=e,{adjacentBombs:a=0}=e;function o(d){n("tile-clicked",d.button)}const c=d=>o(d);return l.$$set=d=>{"clicked"in d&&s(0,r=d.clicked),"flagged"in d&&s(1,t=d.flagged),"isBomb"in d&&s(2,i=d.isBomb),"adjacentBombs"in d&&s(3,a=d.adjacentBombs)},[r,t,i,a,o,c]}class ts extends _e{constructor(e){super(),ve(this,e,es,xt,pe,{clicked:0,flagged:1,isBomb:2,adjacentBombs:3})}}function bt(l,e,s){const n=l.slice();return n[2]=e[s],n[4]=s,n}function pt(l,e,s){const n=l.slice();return n[5]=e[s],n[7]=s,n}function _t(l){let e,s,n,r=te(l[0].grid),t=[];for(let a=0;a<r.length;a+=1)t[a]=kt(bt(l,r,a));const i=a=>q(t[a],1,1,()=>{t[a]=null});return{c(){e=h("table"),s=h("tbody");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=m(a,"TABLE",{class:!0});var o=w(e);s=m(o,"TBODY",{class:!0});var c=w(s);for(let d=0;d<t.length;d+=1)t[d].l(c);c.forEach(g),o.forEach(g),this.h()},h(){f(s,"class","grid svelte-4jsriw"),f(e,"class","svelte-4jsriw")},m(a,o){$(a,e,o),u(e,s);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(s,null);n=!0},p(a,o){if(o&1){r=te(a[0].grid);let c;for(c=0;c<r.length;c+=1){const d=bt(a,r,c);t[c]?(t[c].p(d,o),C(t[c],1)):(t[c]=kt(d),t[c].c(),C(t[c],1),t[c].m(s,null))}for(He(),c=r.length;c<t.length;c+=1)i(c);Fe()}},i(a){if(!n){for(let o=0;o<r.length;o+=1)C(t[o]);n=!0}},o(a){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)q(t[o]);n=!1},d(a){a&&g(e),Je(t,a)}}}function vt(l){let e,s;function n(...r){return l[1](l[7],l[4],...r)}return e=new ts({props:{clicked:l[0].grid[l[4]][l[7]].clicked,flagged:l[0].grid[l[4]][l[7]].flagged,isBomb:l[0].grid[l[4]][l[7]].isBomb,adjacentBombs:l[0].grid[l[4]][l[7]].adjacentBombs}}),e.$on("tile-clicked",n),{c(){Ne(e.$$.fragment)},l(r){Pe(e.$$.fragment,r)},m(r,t){Ie(e,r,t),s=!0},p(r,t){l=r;const i={};t&1&&(i.clicked=l[0].grid[l[4]][l[7]].clicked),t&1&&(i.flagged=l[0].grid[l[4]][l[7]].flagged),t&1&&(i.isBomb=l[0].grid[l[4]][l[7]].isBomb),t&1&&(i.adjacentBombs=l[0].grid[l[4]][l[7]].adjacentBombs),e.$set(i)},i(r){s||(C(e.$$.fragment,r),s=!0)},o(r){q(e.$$.fragment,r),s=!1},d(r){$e(e,r)}}}function kt(l){let e,s,n,r=te(l[2]),t=[];for(let a=0;a<r.length;a+=1)t[a]=vt(pt(l,r,a));const i=a=>q(t[a],1,1,()=>{t[a]=null});return{c(){e=h("tr");for(let a=0;a<t.length;a+=1)t[a].c();s=k(),this.h()},l(a){e=m(a,"TR",{class:!0});var o=w(e);for(let c=0;c<t.length;c+=1)t[c].l(o);s=B(o),o.forEach(g),this.h()},h(){f(e,"class","rows svelte-4jsriw")},m(a,o){$(a,e,o);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);u(e,s),n=!0},p(a,o){if(o&1){r=te(a[2]);let c;for(c=0;c<r.length;c+=1){const d=pt(a,r,c);t[c]?(t[c].p(d,o),C(t[c],1)):(t[c]=vt(d),t[c].c(),C(t[c],1),t[c].m(e,s))}for(He(),c=r.length;c<t.length;c+=1)i(c);Fe()}},i(a){if(!n){for(let o=0;o<r.length;o+=1)C(t[o]);n=!0}},o(a){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)q(t[o]);n=!1},d(a){a&&g(e),Je(t,a)}}}function ss(l){let e,s,n=l[0]!==null&&_t(l);return{c(){n&&n.c(),e=ee()},l(r){n&&n.l(r),e=ee()},m(r,t){n&&n.m(r,t),$(r,e,t),s=!0},p(r,[t]){r[0]!==null?n?(n.p(r,t),t&1&&C(n,1)):(n=_t(r),n.c(),C(n,1),n.m(e.parentNode,e)):n&&(He(),q(n,1,1,()=>{n=null}),Fe())},i(r){s||(C(n),s=!0)},o(r){q(n),s=!1},d(r){r&&g(e),n&&n.d(r)}}}function ns(l,e,s){let n;return ge(l,oe,t=>s(0,n=t)),[n,(t,i,a)=>n.handleClick(t,i,a.detail)]}class ls extends _e{constructor(e){super(),ve(this,e,ns,ss,pe,{})}}function Bt(l){let e,s,n,r,t,i=l[0].availableChecks+"",a,o,c,d,p,v,E=l[0].currentBombs+"",z,J,A,se,M,R,ke,ne,P,Q=l[0].currentRows+"",G,ce,Z,le,ue,I,D,U,O,H=l[0].currentColumns+"",V,fe,ye,Ke,Ye,re,ct,ze,F,Oe,Qe,Le,Ve,Be=l[0].currentBombs+"",je,De,ae,K;return ae=new ls({}),{c(){e=h("div"),s=h("img"),r=k(),t=h("span"),a=L(i),o=k(),c=h("img"),p=k(),v=h("span"),z=L(E),J=k(),A=h("hr"),se=L(`
					20`),M=k(),R=h("img"),ne=k(),P=h("span"),G=L(Q),ce=k(),Z=h("hr"),le=L(`
					10`),ue=k(),I=h("img"),U=k(),O=h("span"),V=L(H),fe=k(),ye=h("hr"),Ke=L(`
					10`),Ye=k(),re=h("img"),ze=k(),F=h("span"),Oe=L(l[1]),Qe=k(),Le=h("hr"),Ve=k(),je=L(Be),De=k(),Ne(ae.$$.fragment),this.h()},l(N){e=m(N,"DIV",{class:!0});var _=w(e);s=m(_,"IMG",{alt:!0,src:!0,class:!0}),r=B(_),t=m(_,"SPAN",{class:!0});var ut=w(t);a=j(ut,i),ut.forEach(g),o=B(_),c=m(_,"IMG",{alt:!0,src:!0,class:!0}),p=B(_),v=m(_,"SPAN",{class:!0});var Ce=w(v);z=j(Ce,E),J=B(Ce),A=m(Ce,"HR",{class:!0}),se=j(Ce,`
					20`),Ce.forEach(g),M=B(_),R=m(_,"IMG",{alt:!0,src:!0,class:!0}),ne=B(_),P=m(_,"SPAN",{class:!0});var we=w(P);G=j(we,Q),ce=B(we),Z=m(we,"HR",{class:!0}),le=j(we,`
					10`),we.forEach(g),ue=B(_),I=m(_,"IMG",{alt:!0,src:!0,class:!0}),U=B(_),O=m(_,"SPAN",{class:!0});var Ee=w(O);V=j(Ee,H),fe=B(Ee),ye=m(Ee,"HR",{class:!0}),Ke=j(Ee,`
					10`),Ee.forEach(g),Ye=B(_),re=m(_,"IMG",{alt:!0,src:!0,class:!0}),ze=B(_),F=m(_,"SPAN",{class:!0});var de=w(F);Oe=j(de,l[1]),Qe=B(de),Le=m(de,"HR",{class:!0}),Ve=B(de),je=j(de,Be),de.forEach(g),_.forEach(g),De=B(N),Pe(ae.$$.fragment,N),this.h()},h(){f(s,"alt","available checks"),he(s.src,n=me+"/ap-icon-large.png")||f(s,"src",n),f(s,"class","svelte-9b9k3q"),f(t,"class","svelte-9b9k3q"),f(c,"alt","placed bombs"),he(c.src,d=me+"/bomb-large.png")||f(c,"src",d),f(c,"class","svelte-9b9k3q"),f(A,"class","svelte-9b9k3q"),f(v,"class","svelte-9b9k3q"),f(R,"alt","map height"),he(R.src,ke=me+"/up-down-arrow-big.png")||f(R,"src",ke),f(R,"class","svelte-9b9k3q"),f(Z,"class","svelte-9b9k3q"),f(P,"class","svelte-9b9k3q"),f(I,"alt","map width"),he(I.src,D=me+"/left-right-arrow-big.png")||f(I,"src",D),f(I,"class","svelte-9b9k3q"),f(ye,"class","svelte-9b9k3q"),f(O,"class","svelte-9b9k3q"),f(re,"alt","flagged spots"),he(re.src,ct=me+"/heavy-rock-big.png")||f(re,"src",ct),f(re,"class","svelte-9b9k3q"),f(Le,"class","svelte-9b9k3q"),f(F,"class","svelte-9b9k3q"),f(e,"class","game-status svelte-9b9k3q")},m(N,_){$(N,e,_),u(e,s),u(e,r),u(e,t),u(t,a),u(e,o),u(e,c),u(e,p),u(e,v),u(v,z),u(v,J),u(v,A),u(v,se),u(e,M),u(e,R),u(e,ne),u(e,P),u(P,G),u(P,ce),u(P,Z),u(P,le),u(e,ue),u(e,I),u(e,U),u(e,O),u(O,V),u(O,fe),u(O,ye),u(O,Ke),u(e,Ye),u(e,re),u(e,ze),u(e,F),u(F,Oe),u(F,Qe),u(F,Le),u(F,Ve),u(F,je),$(N,De,_),Ie(ae,N,_),K=!0},p(N,_){(!K||_&1)&&i!==(i=N[0].availableChecks+"")&&Y(a,i),(!K||_&1)&&E!==(E=N[0].currentBombs+"")&&Y(z,E),(!K||_&1)&&Q!==(Q=N[0].currentRows+"")&&Y(G,Q),(!K||_&1)&&H!==(H=N[0].currentColumns+"")&&Y(V,H),(!K||_&2)&&Y(Oe,N[1]),(!K||_&1)&&Be!==(Be=N[0].currentBombs+"")&&Y(je,Be)},i(N){K||(C(ae.$$.fragment,N),K=!0)},o(N){q(ae.$$.fragment,N),K=!1},d(N){N&&(g(e),g(De)),$e(ae,N)}}}function rs(l){let e,s,n,r=l[0]!==null&&Bt(l);return{c(){e=h("section"),s=h("div"),r&&r.c(),this.h()},l(t){e=m(t,"SECTION",{class:!0});var i=w(e);s=m(i,"DIV",{class:!0});var a=w(s);r&&r.l(a),a.forEach(g),i.forEach(g),this.h()},h(){f(s,"class","island svelte-9b9k3q"),f(e,"class","svelte-9b9k3q")},m(t,i){$(t,e,i),u(e,s),r&&r.m(s,null),n=!0},p(t,[i]){t[0]!==null?r?(r.p(t,i),i&1&&C(r,1)):(r=Bt(t),r.c(),C(r,1),r.m(s,null)):r&&(He(),q(r,1,1,()=>{r=null}),Fe())},i(t){n||(C(r),n=!0)},o(t){q(r),n=!1},d(t){t&&g(e),r&&r.d()}}}function as(l,e,s){let n,r,t;return ge(l,oe,i=>s(0,t=i)),Se(oe,t=new Wt,t),l.$$.update=()=>{l.$$.dirty&1&&(t.currentBombs,t.currentRows,t.currentColumns,t.checked,t.missing,Se(oe,t.availableChecks=Math.max(Math.min(t.currentBombs+t.currentRows+t.currentColumns-10-t.checked,t.missing),0),t)),l.$$.dirty&1&&(t.serverBombs,t.serverColumns,t.serverRows,t.playing,t.getNewBoard()),l.$$.dirty&1&&s(2,n=t.grid.flatMap(i=>i)),l.$$.dirty&4&&s(1,r=n.filter(i=>i.flagged).length)},[t,r,n]}class is extends _e{constructor(e){super(),ve(this,e,as,rs,pe,{})}}function os(l){const e=l-1;return e*e*e+1}function ot(l,{delay:e=0,duration:s=400,easing:n=os,x:r=0,y:t=0,opacity:i=0}={}){const a=getComputedStyle(l),o=+a.opacity,c=a.transform==="none"?"":a.transform,d=o*(1-i),[p,v]=dt(r),[E,z]=dt(t);return{delay:e,duration:s,easing:n,css:(J,A)=>`
			transform: ${c} translate(${(1-J)*p}${v}, ${(1-J)*E}${z});
			opacity: ${o-d*A}`}}function Ct(l,e,s){const n=l.slice();return n[4]=e[s],n}function wt(l,e,s){const n=l.slice();return n[7]=e[s].text,n[8]=e[s].type,n}function cs(l){let e,s=l[4]+"",n,r;return{c(){e=h("p"),n=L(s)},l(t){e=m(t,"P",{});var i=w(e);n=j(i,s),i.forEach(g)},m(t,i){$(t,e,i),u(e,n)},p(t,i){i&2&&s!==(s=t[4]+"")&&Y(n,s)},i(t){r||rt(()=>{r=at(e,ot,{y:1200,duration:1e3}),r.start()})},o:W,d(t){t&&g(e)}}}function us(l){let e,s=l[4].text+"",n,r;return{c(){e=h("p"),n=L(s)},l(t){e=m(t,"P",{});var i=w(e);n=j(i,s),i.forEach(g)},m(t,i){$(t,e,i),u(e,n)},p(t,i){i&2&&s!==(s=t[4].text+"")&&Y(n,s)},i(t){r||rt(()=>{r=at(e,ot,{y:1200,duration:1e3}),r.start()})},o:W,d(t){t&&g(e)}}}function fs(l){var r;let e,s=te(((r=l[4])==null?void 0:r.messageParts)&&l[4].messageParts),n=[];for(let t=0;t<s.length;t+=1)n[t]=Et(wt(l,s,t));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=ee()},l(t){for(let i=0;i<n.length;i+=1)n[i].l(t);e=ee()},m(t,i){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(t,i);$(t,e,i)},p(t,i){var a;if(i&2){s=te(((a=t[4])==null?void 0:a.messageParts)&&t[4].messageParts);let o;for(o=0;o<s.length;o+=1){const c=wt(t,s,o);n[o]?(n[o].p(c,i),C(n[o],1)):(n[o]=Et(c),n[o].c(),C(n[o],1),n[o].m(e.parentNode,e))}for(;o<n.length;o+=1)n[o].d(1);n.length=s.length}},i(t){for(let i=0;i<s.length;i+=1)C(n[i])},o:W,d(t){t&&g(e),Je(n,t)}}}function Et(l){let e,s=l[7]+"",n,r;return{c(){e=h("p"),n=L(s)},l(t){e=m(t,"P",{});var i=w(e);n=j(i,s),i.forEach(g)},m(t,i){$(t,e,i),u(e,n)},p(t,i){i&2&&s!==(s=t[7]+"")&&Y(n,s)},i(t){r||rt(()=>{r=at(e,ot,{y:1200,duration:1e3}),r.start()})},o:W,d(t){t&&g(e)}}}function St(l){let e,s,n;function r(a,o){return o&2&&(e=null),o&2&&(s=null),e==null&&(e=!!Object.hasOwn(a[4],"messageParts")),e?fs:(s==null&&(s=!!Object.hasOwn(a[4],"text")),s?us:cs)}let t=r(l,-1),i=t(l);return{c(){i.c(),n=ee()},l(a){i.l(a),n=ee()},m(a,o){i.m(a,o),$(a,n,o)},p(a,o){t===(t=r(a,o))&&i?i.p(a,o):(i.d(1),i=t(a),i&&(i.c(),C(i,1),i.m(n.parentNode,n)))},i(a){C(i)},o:W,d(a){a&&g(n),i.d(a)}}}function ds(l){let e,s,n,r,t,i,a=te(l[1]),o=[];for(let c=0;c<a.length;c+=1)o[c]=St(Ct(l,a,c));return{c(){e=h("section"),s=h("span");for(let c=0;c<o.length;c+=1)o[c].c();n=k(),r=h("input"),this.h()},l(c){e=m(c,"SECTION",{class:!0});var d=w(e);s=m(d,"SPAN",{id:!0,class:!0});var p=w(s);for(let v=0;v<o.length;v+=1)o[v].l(p);p.forEach(g),n=B(d),r=m(d,"INPUT",{class:!0,type:!0}),d.forEach(g),this.h()},h(){f(s,"id","console"),f(s,"class","svelte-1miskre"),f(r,"class","console-input svelte-1miskre"),f(r,"type","text"),f(e,"class","svelte-1miskre")},m(c,d){$(c,e,d),u(e,s);for(let p=0;p<o.length;p+=1)o[p]&&o[p].m(s,null);u(e,n),u(e,r),x(r,l[0]),t||(i=[ie(r,"input",l[3]),ie(r,"keydown",l[2])],t=!0)},p(c,[d]){if(d&2){a=te(c[1]);let p;for(p=0;p<a.length;p+=1){const v=Ct(c,a,p);o[p]?(o[p].p(v,d),C(o[p],1)):(o[p]=St(v),o[p].c(),C(o[p],1),o[p].m(s,null))}for(;p<o.length;p+=1)o[p].d(1);o.length=a.length}d&1&&r.value!==c[0]&&x(r,c[0])},i(c){for(let d=0;d<a.length;d+=1)C(o[d])},o:W,d(c){c&&g(e),Je(o,c),t=!1,Nt(i)}}}function hs(l,e,s){let n;ge(l,X,a=>s(1,n=a));let r="";function t(a){a.key==="Enter"&&Ft(r)}function i(){r=this.value,s(0,r)}return[r,n,t,i]}class ms extends _e{constructor(e){super(),ve(this,e,hs,ds,pe,{})}}function gs(l){let e,s,n,r,t,i,a;return s=new Vt({}),r=new is({}),i=new ms({}),{c(){e=h("main"),Ne(s.$$.fragment),n=k(),Ne(r.$$.fragment),t=k(),Ne(i.$$.fragment),this.h()},l(o){e=m(o,"MAIN",{class:!0});var c=w(e);Pe(s.$$.fragment,c),n=B(c),Pe(r.$$.fragment,c),t=B(c),Pe(i.$$.fragment,c),c.forEach(g),this.h()},h(){f(e,"class","svelte-15j489c")},m(o,c){$(o,e,c),Ie(s,e,null),u(e,n),Ie(r,e,null),u(e,t),Ie(i,e,null),a=!0},p:W,i(o){a||(C(s.$$.fragment,o),C(r.$$.fragment,o),C(i.$$.fragment,o),a=!0)},o(o){q(s.$$.fragment,o),q(r.$$.fragment,o),q(i.$$.fragment,o),a=!1},d(o){o&&g(e),$e(s),$e(r),$e(i)}}}function bs(l){return yt(()=>{document.addEventListener("contextmenu",e=>e.preventDefault())}),[]}class Cs extends _e{constructor(e){super(),ve(this,e,bs,gs,pe,{})}}export{Cs as component};
