var ss=Object.defineProperty;var ns=(t,e,l)=>e in t?ss(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l;var Be=(t,e,l)=>(ns(t,typeof e!="symbol"?e+"":e,l),l);import{A as k,s as we,f as p,a as C,g as _,h as P,y as be,c as N,d as b,j as m,i as A,B as f,z as V,C as L,l as M,m as R,D as ne,E as x,F as qt,G as dt,H as ls,I as Bt,J as pt,K as as,e as ve,n as K,L as _e,M as nt,N as Ee,b as rs,p as os,o as cs}from"../chunks/scheduler.BXUoaqq0.js";import{S as ye,i as Ce,a as B,g as Ze,c as xe,t as U,b as Oe,d as $e,m as Ae,e as je,f as ke,h as wt}from"../chunks/index.Dc3hJP2P.js";import{r as We,d as re,w as y}from"../chunks/index.dccUVMPl.js";import{b as le}from"../chunks/paths.CPnlDDNf.js";function ae(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}class is{constructor(){Be(this,"isBomb",!1);Be(this,"adjacentBombs",0);Be(this,"clicked",!1);Be(this,"flagged",!1)}}const us=We({major:0,minor:5,build:0,class:"Version"});We({0:"Disabled",1:"Enabled",2:"Goal",6:"Auto",7:"Enabled + Auto"});const mt=y(null),Et=y(null),Yt=y(null),yt=y([]),fs=re(yt,t=>{let e={};return t==null||t.forEach(l=>e[l.slot]=l.name),e}),zt=y({}),Kt=y({}),ds=y({}),ms=We(38281),Se=y(null),ht=y(!1),gt=y(null),_t=y([]),hs=We(10),et=y(!1),bt=y(0),Ve=y(null),Qe=y(null),Le=y([]),De=y([]),gs=We({CLIENT_UNKNOWN:0,CLIENT_READY:10,CLIENT_PLAYING:20,CLIENT_GOAL:30}),J=y([]),Te=y(""),Me=y(5),Re=y(5),Ge=y(5);let fe=y(5),de=y(5),lt=y(5),Ue=y(0),ue=y(!1),Q=y([]),Vt=re([Le],([t])=>t.length),ps=re([De],([t])=>t.length);const Qt=re([Vt,ps,lt,de,fe],([t,e,l,n,r])=>Math.max(Math.min(l+r+n-10-t,e),0)),Ct=re([Q],([t])=>t.flatMap(e=>e)),_s=re([Ct],([t])=>t.filter(e=>e.flagged).length),bs=re([de,fe,Ct],([t,e,l])=>t*e-l.filter(n=>n.clicked).length),Xt=re([Ue,bs,Ct],([t,e,l])=>t===e&&!l.some(n=>n.clicked&&n.isBomb)),vt=y(!1);let Zt=null,Xe=1,kt=10,v=null,Nt={},xt=!1;Le.subscribe(t=>t);De.subscribe(t=>t);Et.subscribe(t=>Zt=t);Yt.subscribe(t=>t);yt.subscribe(t=>t);bt.subscribe(t=>Xe=t);Se.subscribe(t=>v=t);J.subscribe(t=>t);_t.subscribe(t=>t);hs.subscribe(t=>kt=t);fs.subscribe(t=>Nt=t);Te.subscribe(t=>t);ue.subscribe(t=>xt=t);function vs(t){if(t){const e=k(Vt);k(Qt)?Ps(81e3+e):k(Xt)&&Bs()}}function se(t,e){const l=k(Q);0<=t&&t<k(de)&&0<=e&&e<k(fe)&&l[e][t].isBomb!==!0&&(l[e][t].adjacentBombs+=1)}function ks(t,e,l){l===0&&Z(t,e,!1),l===2&&Ss(t,e),Q.update(n=>n)}function Ss(t,e){const l=k(Q);if(0<=t&&t<k(de)&&0<=e&&e<k(fe)&&!l[e][t].clicked){let n=l[e][t];n.flagged=!n.flagged,l[e][t]=n}}async function Z(t,e,l=!0){const n=k(Q);if(0<=t&&t<k(de)&&0<=e&&e<k(fe)&&!n[e][t].clicked&&!n[e][t].flagged){let r=n[e][t];r.clicked=!0,k(Ue)===0&&(ue.set(!0),Es({x:t,y:e})),!r.isBomb&&r.adjacentBombs==0&&(Z(t-1,e-1),Z(t,e-1),Z(t+1,e-1),Z(t-1,e),Z(t+1,e),Z(t-1,e+1),Z(t,e+1),Z(t+1,e+1)),r.isBomb&&(St(),Ts(),setTimeout(()=>{ue.set(!1),tt()},2500)),n[e][t]=r}k(Xt)&&(St(),vs(!0),setTimeout(()=>{ue.set(!1),tt()},2500))}function St(){const t=k(Q);t.forEach((e,l)=>{e.forEach((n,r)=>{n.clicked=!0,t[l][r]=n})})}function tt(){if(!k(ue)){Ue.set(0);const t=k(Me),e=k(Re),l=k(Ge);lt.set(t),de.set(e),fe.set(l),Q.set(Array.from({length:l},()=>Array.from({length:e},()=>new is)))}}function ws(t,e,l){return t.x>=e-1&&t.x<=e+1&&t.y>=l-1&&t.y<=l+1}function Es(t){const e=k(Me),l=k(Re),n=k(Ge),r=k(Q);for(;k(Ue)<k(lt);){const s=Math.round(Math.random()*l*e)%l,o=Math.round(Math.random()*n*e)%n;if(ws(t,s,o))continue;const a=r[o][s];a.isBomb!==!0&&(se(s-1,o-1),se(s,o-1),se(s+1,o-1),se(s-1,o),a.isBomb=!0,se(s+1,o),se(s-1,o+1),se(s,o+1),se(s+1,o+1),Ue.update(c=>c+1))}}function ys(){St(),setTimeout(()=>{ue.set(!1),tt()},2500),Q.update(t=>t)}const es=async(t,e,l)=>{if((v==null?void 0:v.readyState)===WebSocket.OPEN&&(v.close(),Se.set(null)),!t||!e)return;ht.set(!1);let n=t;n.search(/^\/connect /)>-1&&(n=n.substring(9)),n.search(/:\d+$/)===-1&&(n=`${n}:${k(ms)}`);const r=/^ws:\/\//.test(n)?"ws":"wss";n=n.replace(/^.*\/\//,""),gt.set(l??null),_t.set([]),Se.set(new WebSocket(`${r}://${n}`)),v&&(v.onopen=()=>{},v.onmessage=s=>{const o=JSON.parse(s.data);for(const a of o)switch(a.cmd){case"RoomInfo":!localStorage.getItem("dataPackageVersion")||!localStorage.getItem("dataPackage")||a.datapackage_version!==localStorage.getItem("dataPackageVersion")?Ns():Tt(JSON.parse(localStorage.getItem("dataPackage")||"")),mt.set(e),v==null||v.send(JSON.stringify([{cmd:"Connect",game:"ChecksFinder",name:k(mt),uuid:Cs(),tags:["AP","DeathLink"],password:k(gt),version:k(us),items_handling:7,slot_data:!0}]));break;case"Connected":bt.set(0),Le.set(a.checked_locations),De.set(a.missing_locations),_t.set([]),Me.set(5),Ge.set(5),Re.set(5),Te.set("Connected"),yt.set(a.players),Yt.set(a.team),Et.set(a.slot);break;case"ConnectionRefused":Te.set("Not Connected"),v&&v.readyState===WebSocket.OPEN&&(a.errors.includes("InvalidPassword")?J.update(c=>[...c,gt===null?"This server requires a password. Please use /connect [server] [password] to connect.":"Your provided password is incorrect. Please try again."]):J.update(c=>[...c,`Error while connecting to AP server: ${a.errors.join(", ")}.`]),ht.set(!0),v==null||v.close());break;case"ReceivedItems":a.items.forEach(c=>{switch(c.item){case 8e4:Re.update(i=>i+1);break;case 80001:Ge.update(i=>i+1);break;case 80002:Me.update(i=>i+1);break}});break;case"RoomUpdate":break;case"Print":J.update(c=>[...c,a.text]);break;case"PrintJSON":switch(a.type){case"ItemSend":J.update(c=>[...c,Os(a.data)]);break;default:J.update(c=>[...c,...a.data]);break}break;case"DataPackage":a.data.version!==0&&(localStorage.setItem("dataPackageVersion",a.data.version),localStorage.setItem("dataPackage",JSON.stringify(a.data))),Tt(a.data);break;case"Bounced":a.tags.includes("DeathLink")&&a.data.source!==k(mt)&&xt&&ys(),J.update(c=>[...c,a.data.source+" "+a.data.cause]);break}},v.onclose=()=>{Te.set("Not Connected");const s=k(Qe);et||!s||(Ve&&(window.clearTimeout(k(Ve)??0),Ve.set(null)),Ve.set(window.setTimeout(()=>{if((v==null?void 0:v.readyState)!==WebSocket.OPEN&&!k(ht)&&!k(et)){if(bt.set(Xe+1),Xe>kt){J.update(o=>[...o,"Archipelago server connection lost. The connection closed unexpectedly. Please try to reconnect, or restart the client."]);return}J.update(o=>[...o,`Connection to AP server lost. Attempting to reconnect (${Xe} of ${kt})`]),es(t)}},5e3)))},v.onerror=()=>{(v==null?void 0:v.readyState)===WebSocket.OPEN&&(J.update(s=>[...s,"Archipelago server connection lost. The connection closed unexpectedly. Please try to reconnect, or restart the client."]),v.close())})},Cs=()=>{let t=localStorage.getItem("clientId");return t||(t=(Math.random()*1e16).toString(),localStorage.setItem("clientId",t)),t},Ns=()=>{!v||v.readyState!==WebSocket.OPEN||v.send(JSON.stringify([{cmd:"GetDataPackage"}]))},Is=t=>{(v==null?void 0:v.readyState)===WebSocket.OPEN&&v.send(JSON.stringify([{cmd:"Say",text:t}]))},Ps=t=>{let e=k(Le);e.push(t),Le.set(e);let l=k(De);l.shift(),De.set(l),v==null||v.send(JSON.stringify([{cmd:"LocationChecks",locations:[t]}]))},Bs=()=>{v==null||v.send(JSON.stringify([{cmd:"StatusUpdate",status:k(gs).CLIENT_GOAL}]))},Ts=()=>{v==null||v.send(JSON.stringify([{cmd:"Bounce",tags:["DeathLink"],data:{time:Date.now(),source:Nt[Zt||0],cause:"blew it"}}]))},Tt=t=>{let e={},l={};Object.values(t.games).forEach(n=>{Object.keys(n.item_name_to_id).forEach(r=>{e[n.item_name_to_id[r]]=r}),Object.keys(n.location_name_to_id).forEach(r=>{l[n.location_name_to_id[r]]=r})}),zt.set(e),Kt.set(l),ds.set(t.games.ChecksFinder.location_name_to_id)},Os=t=>{const e=k(zt),l=k(Kt);return t.map(n=>{switch(n.type){case"player_id":return Nt[parseInt(n.text)];case"item_id":return e[+n.text];case"location_id":return l[+n.text];default:return n.text}}).join("")};function Ot(t){let e,l,n,r="Server address:",s,o,a,c,i,u="Player name:",S,d,g,h,w,E="Password:",I,D,W,q,me=Se?"Connect":"Disconnect",G,ee,he;return{c(){e=p("form"),l=p("div"),n=p("label"),n.textContent=r,s=C(),o=p("input"),a=C(),c=p("div"),i=p("label"),i.textContent=u,S=C(),d=p("input"),g=C(),h=p("div"),w=p("label"),w.textContent=E,I=C(),D=p("input"),W=C(),q=p("button"),G=M(me),this.h()},l($){e=_($,"FORM",{class:!0});var O=P(e);l=_(O,"DIV",{class:!0});var te=P(l);n=_(te,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),be(n)!=="svelte-1x6qc9h"&&(n.textContent=r),s=N(te),o=_(te,"INPUT",{name:!0,id:!0,class:!0}),te.forEach(b),a=N(O),c=_(O,"DIV",{class:!0});var H=P(c);i=_(H,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),be(i)!=="svelte-7ul9v9"&&(i.textContent=u),S=N(H),d=_(H,"INPUT",{name:!0,id:!0,class:!0}),H.forEach(b),g=N(O),h=_(O,"DIV",{class:!0});var oe=P(h);w=_(oe,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),be(w)!=="svelte-bhu94"&&(w.textContent=E),I=N(oe),D=_(oe,"INPUT",{name:!0,id:!0,class:!0}),oe.forEach(b),W=N(O),q=_(O,"BUTTON",{class:!0});var ge=P(q);G=R(ge,me),ge.forEach(b),O.forEach(b),this.h()},h(){m(n,"for","address"),m(n,"class","svelte-grff0s"),m(o,"name","address"),m(o,"id","server-address"),m(o,"class","svelte-grff0s"),m(l,"class","svelte-grff0s"),m(i,"for","player"),m(i,"class","svelte-grff0s"),m(d,"name","player"),m(d,"id","player"),m(d,"class","svelte-grff0s"),m(c,"class","svelte-grff0s"),m(w,"for","password"),m(w,"class","svelte-grff0s"),m(D,"name","password"),m(D,"id","password"),m(D,"class","svelte-grff0s"),m(h,"class","svelte-grff0s"),m(q,"class","svelte-grff0s"),m(e,"class","svelte-grff0s")},m($,O){A($,e,O),f(e,l),f(l,n),f(l,s),f(l,o),ne(o,t[0]),f(e,a),f(e,c),f(c,i),f(c,S),f(c,d),ne(d,t[1]),f(e,g),f(e,h),f(h,w),f(h,I),f(h,D),ne(D,t[2]),f(e,W),f(e,q),f(q,G),ee||(he=[x(o,"input",t[5]),x(d,"input",t[6]),x(D,"input",t[7]),x(q,"click",t[4])],ee=!0)},p($,O){O&1&&o.value!==$[0]&&ne(o,$[0]),O&2&&d.value!==$[1]&&ne(d,$[1]),O&4&&D.value!==$[2]&&ne(D,$[2])},d($){$&&b(e),ee=!1,qt(he)}}}function $s(t){let e,l,n="Digging Game",r,s=t[3]!=="Connected"&&Ot(t);return{c(){e=p("section"),l=p("h1"),l.textContent=n,r=C(),s&&s.c(),this.h()},l(o){e=_(o,"SECTION",{class:!0});var a=P(e);l=_(a,"H1",{class:!0,"data-svelte-h":!0}),be(l)!=="svelte-584zkb"&&(l.textContent=n),r=N(a),s&&s.l(a),a.forEach(b),this.h()},h(){m(l,"class","svelte-grff0s"),m(e,"class","svelte-grff0s")},m(o,a){A(o,e,a),f(e,l),f(e,r),s&&s.m(e,null)},p(o,[a]){o[3]!=="Connected"?s?s.p(o,a):(s=Ot(o),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:V,o:V,d(o){o&&b(e),s&&s.d()}}}function As(t,e,l){let n,r,s,o;L(t,Se,h=>l(8,n=h)),L(t,Qe,h=>l(9,r=h)),L(t,et,h=>l(10,s=h)),L(t,Te,h=>l(3,o=h));let a=k(Qe),c=k(Et),i="";async function u(h){if(!a){dt(et,s=!0,s),dt(Qe,r=null,r),n&&n.readyState===WebSocket.OPEN&&(n.close(),dt(Se,n=null,n));return}await es(a,c,i)}function S(){a=this.value,l(0,a)}function d(){c=this.value,l(1,c)}function g(){i=this.value,l(2,i)}return[a,c,i,o,u,S,d,g]}class js extends ye{constructor(e){super(),Ce(this,e,As,$s,we,{})}}function ts(t){const e=t-1;return e*e*e+1}function st(t){return t/=.5,t<1?.5*t*t:(t--,-.5*(t*(t-2)-1))}function $t(t,{delay:e=0,duration:l=400,easing:n=ls}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:l,easing:n,css:s=>`opacity: ${s*r}`}}function He(t,{delay:e=0,duration:l=400,easing:n=ts,x:r=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(t),c=+a.opacity,i=a.transform==="none"?"":a.transform,u=c*(1-o),[S,d]=Bt(r),[g,h]=Bt(s);return{delay:e,duration:l,easing:n,css:(w,E)=>`
			transform: ${i} translate(${(1-w)*S}${d}, ${(1-w)*g}${h});
			opacity: ${c-u*E}`}}function At(t,{delay:e=0,duration:l=400,easing:n=ts,axis:r="y"}={}){const s=getComputedStyle(t),o=+s.opacity,a=r==="y"?"height":"width",c=parseFloat(s[a]),i=r==="y"?["top","bottom"]:["left","right"],u=i.map(I=>`${I[0].toUpperCase()}${I.slice(1)}`),S=parseFloat(s[`padding${u[0]}`]),d=parseFloat(s[`padding${u[1]}`]),g=parseFloat(s[`margin${u[0]}`]),h=parseFloat(s[`margin${u[1]}`]),w=parseFloat(s[`border${u[0]}Width`]),E=parseFloat(s[`border${u[1]}Width`]);return{delay:e,duration:l,easing:n,css:I=>`overflow: hidden;opacity: ${Math.min(I*20,1)*o};${a}: ${I*c}px;padding-${i[0]}: ${I*S}px;padding-${i[1]}: ${I*d}px;margin-${i[0]}: ${I*g}px;margin-${i[1]}: ${I*h}px;border-${i[0]}-width: ${I*w}px;border-${i[1]}-width: ${I*E}px;`}}function jt(t){let e;function l(s,o){if(s[2]===!0)return Ds;if(s[3]>0)return Ls}let n=l(t),r=n&&n(t);return{c(){r&&r.c(),e=ve()},l(s){r&&r.l(s),e=ve()},m(s,o){r&&r.m(s,o),A(s,e,o)},p(s,o){n===(n=l(s))&&r?r.p(s,o):(r&&r.d(1),r=n&&n(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){s&&b(e),r&&r.d(s)}}}function Ls(t){let e;return{c(){e=M(t[3])},l(l){e=R(l,t[3])},m(l,n){A(l,e,n)},p(l,n){n&8&&K(e,l[3])},d(l){l&&b(e)}}}function Ds(t){let e,l;return{c(){e=p("img"),this.h()},l(n){e=_(n,"IMG",{alt:!0,src:!0}),this.h()},h(){m(e,"alt","bomb"),_e(e.src,l=le+"/bomb-large.png")||m(e,"src",l)},m(n,r){A(n,e,r)},p:V,d(n){n&&b(e)}}}function Ms(t){let e,l,n,r,s=t[0]&&jt(t);return{c(){e=p("td"),s&&s.c(),this.h()},l(o){e=_(o,"TD",{class:!0});var a=P(e);s&&s.l(a),a.forEach(b),this.h()},h(){m(e,"class",l=pt(t[0]?"dug":t[1]?"flag":"")+" svelte-10n1hly")},m(o,a){A(o,e,a),s&&s.m(e,null),n||(r=x(e,"mousedown",t[5]),n=!0)},p(o,[a]){o[0]?s?s.p(o,a):(s=jt(o),s.c(),s.m(e,null)):s&&(s.d(1),s=null),a&3&&l!==(l=pt(o[0]?"dug":o[1]?"flag":"")+" svelte-10n1hly")&&m(e,"class",l)},i:V,o:V,d(o){o&&b(e),s&&s.d(),n=!1,r()}}}function Rs(t,e,l){const n=as();let{clicked:r=!1}=e,{flagged:s=!1}=e,{isBomb:o=!1}=e,{adjacentBombs:a=0}=e;function c(u){n("tile-clicked",u.button)}const i=u=>c(u);return t.$$set=u=>{"clicked"in u&&l(0,r=u.clicked),"flagged"in u&&l(1,s=u.flagged),"isBomb"in u&&l(2,o=u.isBomb),"adjacentBombs"in u&&l(3,a=u.adjacentBombs)},[r,s,o,a,c,i]}class Gs extends ye{constructor(e){super(),Ce(this,e,Rs,Ms,we,{clicked:0,flagged:1,isBomb:2,adjacentBombs:3})}}function Lt(t,e,l){const n=t.slice();return n[2]=e[l],n[4]=l,n}function Dt(t,e,l){const n=t.slice();return n[5]=e[l],n[7]=l,n}function Mt(t){let e,l;function n(...r){return t[1](t[7],t[4],...r)}return e=new Gs({props:{clicked:t[0][t[4]][t[7]].clicked,flagged:t[0][t[4]][t[7]].flagged,isBomb:t[0][t[4]][t[7]].isBomb,adjacentBombs:t[0][t[4]][t[7]].adjacentBombs}}),e.$on("tile-clicked",n),{c(){Oe(e.$$.fragment)},l(r){$e(e.$$.fragment,r)},m(r,s){Ae(e,r,s),l=!0},p(r,s){t=r;const o={};s&1&&(o.clicked=t[0][t[4]][t[7]].clicked),s&1&&(o.flagged=t[0][t[4]][t[7]].flagged),s&1&&(o.isBomb=t[0][t[4]][t[7]].isBomb),s&1&&(o.adjacentBombs=t[0][t[4]][t[7]].adjacentBombs),e.$set(o)},i(r){l||(B(e.$$.fragment,r),l=!0)},o(r){U(e.$$.fragment,r),l=!1},d(r){je(e,r)}}}function Rt(t){let e,l,n,r=ae(t[2]),s=[];for(let a=0;a<r.length;a+=1)s[a]=Mt(Dt(t,r,a));const o=a=>U(s[a],1,1,()=>{s[a]=null});return{c(){e=p("tr");for(let a=0;a<s.length;a+=1)s[a].c();l=C(),this.h()},l(a){e=_(a,"TR",{class:!0});var c=P(e);for(let i=0;i<s.length;i+=1)s[i].l(c);l=N(c),c.forEach(b),this.h()},h(){m(e,"class","rows svelte-4jsriw")},m(a,c){A(a,e,c);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(e,null);f(e,l),n=!0},p(a,c){if(c&1){r=ae(a[2]);let i;for(i=0;i<r.length;i+=1){const u=Dt(a,r,i);s[i]?(s[i].p(u,c),B(s[i],1)):(s[i]=Mt(u),s[i].c(),B(s[i],1),s[i].m(e,l))}for(Ze(),i=r.length;i<s.length;i+=1)o(i);xe()}},i(a){if(!n){for(let c=0;c<r.length;c+=1)B(s[c]);n=!0}},o(a){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)U(s[c]);n=!1},d(a){a&&b(e),nt(s,a)}}}function Us(t){let e,l,n,r=ae(t[0]),s=[];for(let a=0;a<r.length;a+=1)s[a]=Rt(Lt(t,r,a));const o=a=>U(s[a],1,1,()=>{s[a]=null});return{c(){e=p("table"),l=p("tbody");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=_(a,"TABLE",{class:!0});var c=P(e);l=_(c,"TBODY",{class:!0});var i=P(l);for(let u=0;u<s.length;u+=1)s[u].l(i);i.forEach(b),c.forEach(b),this.h()},h(){m(l,"class","grid svelte-4jsriw"),m(e,"class","svelte-4jsriw")},m(a,c){A(a,e,c),f(e,l);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(l,null);n=!0},p(a,[c]){if(c&1){r=ae(a[0]);let i;for(i=0;i<r.length;i+=1){const u=Lt(a,r,i);s[i]?(s[i].p(u,c),B(s[i],1)):(s[i]=Rt(u),s[i].c(),B(s[i],1),s[i].m(l,null))}for(Ze(),i=r.length;i<s.length;i+=1)o(i);xe()}},i(a){if(!n){for(let c=0;c<r.length;c+=1)B(s[c]);n=!0}},o(a){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)U(s[c]);n=!1},d(a){a&&b(e),nt(s,a)}}}function Hs(t,e,l){let n;return L(t,Q,s=>l(0,n=s)),[n,(s,o,a)=>ks(s,o,a.detail)]}class Ws extends ye{constructor(e){super(),Ce(this,e,Hs,Us,we,{})}}function Fs(t){let e,l,n,r,s,o,a,c,i,u,S,d,g,h,w,E,I,D,W,q,me,G,ee,he,$,O,te,H,oe,ge,X,Fe,at,Je,rt,ot,ce,It,ct,Y,qe,it,Ye,ut,ze,ft,ie,z;return ie=new Ws({}),{c(){e=p("section"),l=p("div"),n=p("div"),r=p("img"),o=C(),a=p("span"),c=M(t[0]),i=C(),u=p("img"),d=C(),g=p("span"),h=M(t[1]),w=C(),E=p("hr"),I=M(`
				20`),D=C(),W=p("img"),me=C(),G=p("span"),ee=M(t[2]),he=C(),$=p("hr"),O=M(`
				10`),te=C(),H=p("img"),ge=C(),X=p("span"),Fe=M(t[3]),at=C(),Je=p("hr"),rt=M(`
				10`),ot=C(),ce=p("img"),ct=C(),Y=p("span"),qe=M(t[4]),it=C(),Ye=p("hr"),ut=C(),ze=M(t[1]),ft=C(),Oe(ie.$$.fragment),this.h()},l(j){e=_(j,"SECTION",{class:!0});var F=P(e);l=_(F,"DIV",{class:!0});var Ke=P(l);n=_(Ke,"DIV",{class:!0});var T=P(n);r=_(T,"IMG",{alt:!0,src:!0,class:!0}),o=N(T),a=_(T,"SPAN",{class:!0});var Pt=P(a);c=R(Pt,t[0]),Pt.forEach(b),i=N(T),u=_(T,"IMG",{alt:!0,src:!0,class:!0}),d=N(T),g=_(T,"SPAN",{class:!0});var Ne=P(g);h=R(Ne,t[1]),w=N(Ne),E=_(Ne,"HR",{class:!0}),I=R(Ne,`
				20`),Ne.forEach(b),D=N(T),W=_(T,"IMG",{alt:!0,src:!0,class:!0}),me=N(T),G=_(T,"SPAN",{class:!0});var Ie=P(G);ee=R(Ie,t[2]),he=N(Ie),$=_(Ie,"HR",{class:!0}),O=R(Ie,`
				10`),Ie.forEach(b),te=N(T),H=_(T,"IMG",{alt:!0,src:!0,class:!0}),ge=N(T),X=_(T,"SPAN",{class:!0});var Pe=P(X);Fe=R(Pe,t[3]),at=N(Pe),Je=_(Pe,"HR",{class:!0}),rt=R(Pe,`
				10`),Pe.forEach(b),ot=N(T),ce=_(T,"IMG",{alt:!0,src:!0,class:!0}),ct=N(T),Y=_(T,"SPAN",{class:!0});var pe=P(Y);qe=R(pe,t[4]),it=N(pe),Ye=_(pe,"HR",{class:!0}),ut=N(pe),ze=R(pe,t[1]),pe.forEach(b),T.forEach(b),ft=N(Ke),$e(ie.$$.fragment,Ke),Ke.forEach(b),F.forEach(b),this.h()},h(){m(r,"alt","available checks"),_e(r.src,s=le+"/ap-icon-large.png")||m(r,"src",s),m(r,"class","svelte-1o5v9kj"),m(a,"class","svelte-1o5v9kj"),m(u,"alt","placed bombs"),_e(u.src,S=le+"/bomb-large.png")||m(u,"src",S),m(u,"class","svelte-1o5v9kj"),m(E,"class","svelte-1o5v9kj"),m(g,"class","svelte-1o5v9kj"),m(W,"alt","map height"),_e(W.src,q=le+"/up-down-arrow-big.png")||m(W,"src",q),m(W,"class","svelte-1o5v9kj"),m($,"class","svelte-1o5v9kj"),m(G,"class","svelte-1o5v9kj"),m(H,"alt","map width"),_e(H.src,oe=le+"/left-right-arrow-big.png")||m(H,"src",oe),m(H,"class","svelte-1o5v9kj"),m(Je,"class","svelte-1o5v9kj"),m(X,"class","svelte-1o5v9kj"),m(ce,"alt","flagged spots"),_e(ce.src,It=le+"/heavy-rock-big.png")||m(ce,"src",It),m(ce,"class","svelte-1o5v9kj"),m(Ye,"class","svelte-1o5v9kj"),m(Y,"class","svelte-1o5v9kj"),m(n,"class","game-status svelte-1o5v9kj"),m(l,"class","island svelte-1o5v9kj"),m(e,"class","svelte-1o5v9kj")},m(j,F){A(j,e,F),f(e,l),f(l,n),f(n,r),f(n,o),f(n,a),f(a,c),f(n,i),f(n,u),f(n,d),f(n,g),f(g,h),f(g,w),f(g,E),f(g,I),f(n,D),f(n,W),f(n,me),f(n,G),f(G,ee),f(G,he),f(G,$),f(G,O),f(n,te),f(n,H),f(n,ge),f(n,X),f(X,Fe),f(X,at),f(X,Je),f(X,rt),f(n,ot),f(n,ce),f(n,ct),f(n,Y),f(Y,qe),f(Y,it),f(Y,Ye),f(Y,ut),f(Y,ze),f(l,ft),Ae(ie,l,null),z=!0},p(j,[F]){(!z||F&1)&&K(c,j[0]),(!z||F&2)&&K(h,j[1]),(!z||F&4)&&K(ee,j[2]),(!z||F&8)&&K(Fe,j[3]),(!z||F&16)&&K(qe,j[4]),(!z||F&2)&&K(ze,j[1])},i(j){z||(B(ie.$$.fragment,j),z=!0)},o(j){U(ie.$$.fragment,j),z=!1},d(j){j&&b(e),je(ie)}}}function Js(t,e,l){let n,r,s,o,a,c,i,u,S;return L(t,ue,d=>l(5,n=d)),L(t,Ge,d=>l(6,r=d)),L(t,Re,d=>l(7,s=d)),L(t,Me,d=>l(8,o=d)),L(t,Qt,d=>l(0,a=d)),L(t,lt,d=>l(1,c=d)),L(t,fe,d=>l(2,i=d)),L(t,de,d=>l(3,u=d)),L(t,_s,d=>l(4,S=d)),t.$$.update=()=>{t.$$.dirty&480&&tt()},[a,c,i,u,S,n,r,s,o]}class qs extends ye{constructor(e){super(),Ce(this,e,Js,Fs,we,{})}}function Gt(t,e,l){const n=t.slice();return n[7]=e[l],n}function Ut(t,e,l){const n=t.slice();return n[10]=e[l].text,n[11]=e[l].type,n}function Ys(t){let e,l=t[7]+"",n,r;return{c(){e=p("p"),n=M(l)},l(s){e=_(s,"P",{});var o=P(e);n=R(o,l),o.forEach(b)},m(s,o){A(s,e,o),f(e,n)},p(s,o){o&4&&l!==(l=s[7]+"")&&K(n,l)},i(s){r||Ee(()=>{r=wt(e,He,{y:1200,duration:1e3}),r.start()})},o:V,d(s){s&&b(e)}}}function zs(t){let e,l=t[7].text+"",n,r;return{c(){e=p("p"),n=M(l)},l(s){e=_(s,"P",{});var o=P(e);n=R(o,l),o.forEach(b)},m(s,o){A(s,e,o),f(e,n)},p(s,o){o&4&&l!==(l=s[7].text+"")&&K(n,l)},i(s){r||Ee(()=>{r=wt(e,He,{y:1200,duration:1e3}),r.start()})},o:V,d(s){s&&b(e)}}}function Ks(t){var r;let e,l=ae(((r=t[7])==null?void 0:r.messageParts)&&t[7].messageParts),n=[];for(let s=0;s<l.length;s+=1)n[s]=Ht(Ut(t,l,s));return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=ve()},l(s){for(let o=0;o<n.length;o+=1)n[o].l(s);e=ve()},m(s,o){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(s,o);A(s,e,o)},p(s,o){var a;if(o&4){l=ae(((a=s[7])==null?void 0:a.messageParts)&&s[7].messageParts);let c;for(c=0;c<l.length;c+=1){const i=Ut(s,l,c);n[c]?(n[c].p(i,o),B(n[c],1)):(n[c]=Ht(i),n[c].c(),B(n[c],1),n[c].m(e.parentNode,e))}for(;c<n.length;c+=1)n[c].d(1);n.length=l.length}},i(s){for(let o=0;o<l.length;o+=1)B(n[o])},o:V,d(s){s&&b(e),nt(n,s)}}}function Ht(t){let e,l=t[10]+"",n,r;return{c(){e=p("p"),n=M(l)},l(s){e=_(s,"P",{});var o=P(e);n=R(o,l),o.forEach(b)},m(s,o){A(s,e,o),f(e,n)},p(s,o){o&4&&l!==(l=s[10]+"")&&K(n,l)},i(s){r||Ee(()=>{r=wt(e,He,{y:1200,duration:1e3}),r.start()})},o:V,d(s){s&&b(e)}}}function Wt(t){let e,l,n;function r(a,c){return c&4&&(e=null),c&4&&(l=null),e==null&&(e=!!Object.hasOwn(a[7],"messageParts")),e?Ks:(l==null&&(l=!!Object.hasOwn(a[7],"text")),l?zs:Ys)}let s=r(t,-1),o=s(t);return{c(){o.c(),n=ve()},l(a){o.l(a),n=ve()},m(a,c){o.m(a,c),A(a,n,c)},p(a,c){s===(s=r(a,c))&&o?o.p(a,c):(o.d(1),o=s(a),o&&(o.c(),B(o,1),o.m(n.parentNode,n)))},i(a){B(o)},o:V,d(a){a&&b(n),o.d(a)}}}function Vs(t){let e,l,n=`<img alt="close-console" src="${le+"/cross.png"}"/>`,r,s,o,a,c,i,u,S,d=ae(t[2]),g=[];for(let h=0;h<d.length;h+=1)g[h]=Wt(Gt(t,d,h));return{c(){e=p("section"),l=p("button"),l.innerHTML=n,r=C(),s=p("span");for(let h=0;h<g.length;h+=1)g[h].c();o=C(),a=p("input"),this.h()},l(h){e=_(h,"SECTION",{class:!0});var w=P(e);l=_(w,"BUTTON",{class:!0,"data-svelte-h":!0}),be(l)!=="svelte-4nwcgv"&&(l.innerHTML=n),r=N(w),s=_(w,"SPAN",{class:!0});var E=P(s);for(let I=0;I<g.length;I+=1)g[I].l(E);E.forEach(b),o=N(w),a=_(w,"INPUT",{class:!0,type:!0,placeholder:!0}),w.forEach(b),this.h()},h(){m(l,"class","close-console svelte-l5ir4e"),m(s,"class","console svelte-l5ir4e"),m(a,"class","console-input svelte-l5ir4e"),m(a,"type","text"),m(a,"placeholder","Message or !command to send to server"),m(e,"class","svelte-l5ir4e")},m(h,w){A(h,e,w),f(e,l),f(e,r),f(e,s);for(let E=0;E<g.length;E+=1)g[E]&&g[E].m(s,null);t[5](s),f(e,o),f(e,a),ne(a,t[1]),i=!0,u||(S=[x(l,"click",t[4]),x(a,"input",t[6]),x(a,"keydown",t[3])],u=!0)},p(h,[w]){if(w&4){d=ae(h[2]);let E;for(E=0;E<d.length;E+=1){const I=Gt(h,d,E);g[E]?(g[E].p(I,w),B(g[E],1)):(g[E]=Wt(I),g[E].c(),B(g[E],1),g[E].m(s,null))}for(;E<g.length;E+=1)g[E].d(1);g.length=d.length}w&2&&a.value!==h[1]&&ne(a,h[1])},i(h){if(!i){for(let w=0;w<d.length;w+=1)B(g[w]);h&&Ee(()=>{i&&(c||(c=ke(e,He,{duration:1e3,easing:st,x:-400},!0)),c.run(1))}),i=!0}},o(h){h&&(c||(c=ke(e,He,{duration:1e3,easing:st,x:-400},!1)),c.run(0)),i=!1},d(h){h&&b(e),nt(g,h),t[5](null),h&&c&&c.end(),u=!1,qt(S)}}}function Qs(t,e,l){let n;L(t,J,u=>l(2,n=u));let r=null,s="";rs(()=>{r==null||r.scroll({top:r.scrollHeight,behavior:"smooth"})});function o(u){u.key==="Enter"&&Is(s)}const a=()=>vt.set(!1);function c(u){os[u?"unshift":"push"](()=>{r=u,l(0,r)})}function i(){s=this.value,l(1,s)}return[r,s,n,o,a,c,i]}class Xs extends ye{constructor(e){super(),Ce(this,e,Qs,Vs,we,{})}}function Ft(t){let e,l;return e=new Xs({}),{c(){Oe(e.$$.fragment)},l(n){$e(e.$$.fragment,n)},m(n,r){Ae(e,n,r),l=!0},i(n){l||(B(e.$$.fragment,n),l=!0)},o(n){U(e.$$.fragment,n),l=!1},d(n){je(e,n)}}}function Jt(t){let e,l=`<img src="${le+"/map.png"}" class="svelte-yfqrgf"/>`,n,r,s,o;return{c(){e=p("button"),e.innerHTML=l,this.h()},l(a){e=_(a,"BUTTON",{class:!0,"data-svelte-h":!0}),be(e)!=="svelte-1caahil"&&(e.innerHTML=l),this.h()},h(){m(e,"class",pt("floating-chat__open-chat--closed")+" svelte-yfqrgf")},m(a,c){A(a,e,c),r=!0,s||(o=x(e,"click",t[1]),s=!0)},i(a){r||(a&&Ee(()=>{r&&(n||(n=ke(e,$t,{duration:1e3,easing:st},!0)),n.run(1))}),r=!0)},o(a){a&&(n||(n=ke(e,$t,{duration:1e3,easing:st},!1)),n.run(0)),r=!1},d(a){a&&b(e),a&&n&&n.end(),s=!1,o()}}}function Zs(t){let e,l,n,r,s,o,a,c,i;l=new js({});let u=t[0]&&Ft();o=new qs({});let S=!t[0]&&Jt(t);return{c(){e=p("main"),Oe(l.$$.fragment),n=C(),r=p("div"),u&&u.c(),s=C(),Oe(o.$$.fragment),c=C(),S&&S.c(),this.h()},l(d){e=_(d,"MAIN",{class:!0});var g=P(e);$e(l.$$.fragment,g),n=N(g),r=_(g,"DIV",{class:!0});var h=P(r);u&&u.l(h),s=N(h),$e(o.$$.fragment,h),h.forEach(b),c=N(g),S&&S.l(g),g.forEach(b),this.h()},h(){m(r,"class","content-area svelte-yfqrgf"),m(e,"class","svelte-yfqrgf")},m(d,g){A(d,e,g),Ae(l,e,null),f(e,n),f(e,r),u&&u.m(r,null),f(r,s),Ae(o,r,null),f(e,c),S&&S.m(e,null),i=!0},p(d,[g]){d[0]?u?g&1&&B(u,1):(u=Ft(),u.c(),B(u,1),u.m(r,s)):u&&(Ze(),U(u,1,1,()=>{u=null}),xe()),d[0]?S&&(Ze(),U(S,1,1,()=>{S=null}),xe()):S?g&1&&B(S,1):(S=Jt(d),S.c(),B(S,1),S.m(e,null))},i(d){i||(B(l.$$.fragment,d),B(u),B(o.$$.fragment,d),d&&Ee(()=>{i&&(a||(a=ke(r,At,{},!0)),a.run(1))}),B(S),i=!0)},o(d){U(l.$$.fragment,d),U(u),U(o.$$.fragment,d),d&&(a||(a=ke(r,At,{},!1)),a.run(0)),U(S),i=!1},d(d){d&&b(e),je(l),u&&u.d(),je(o),d&&a&&a.end(),S&&S.d()}}}function xs(t,e,l){let n;return L(t,vt,s=>l(0,n=s)),cs(()=>{document.addEventListener("contextmenu",s=>s.preventDefault())}),[n,()=>vt.set(!0)]}class an extends ye{constructor(e){super(),Ce(this,e,xs,Zs,we,{})}}export{an as component};
