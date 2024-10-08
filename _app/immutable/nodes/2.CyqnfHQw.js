var cs=Object.defineProperty;var us=(t,e,n)=>e in t?cs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Re=(t,e,n)=>(us(t,typeof e!="symbol"?e+"":e,n),n);import{A as w,s as we,f as b,a as C,g as v,h as I,y as ie,c as N,d as k,j as p,i as T,B as d,C as U,z as se,D as P,l as $,m as D,E as V,F as it,G as pt,H as fs,I as At,J as We,K as ds,e as Ae,n as x,L as Te,M as ct,N as ce,b as hs,p as ms,O as Pe,o as ps}from"../chunks/scheduler.BHswhdML.js";import{S as Ce,i as Ne,a as L,g as je,c as Ue,t as j,b as Oe,d as $e,m as De,e as Me,f as te,h as Ct}from"../chunks/index.DtRExUo1.js";import{b as ee}from"../chunks/paths.Bbe37Ixu.js";import{r as qe,d as fe,w as B}from"../chunks/index.CukmP7XG.js";function ue(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}class _s{constructor(){Re(this,"isBomb",!1);Re(this,"adjacentBombs",0);Re(this,"clicked",!1);Re(this,"flagged",!1)}}const gs=qe({major:0,minor:5,build:0,class:"Version"});qe({0:"Disabled",1:"Enabled",2:"Goal",6:"Auto",7:"Enabled + Auto"});const _t=B(null),Nt=B(null),Zt=B(null),yt=B([]),bs=fe(yt,t=>{let e={};return t==null||t.forEach(n=>e[n.slot]=n.name),e}),xt=B({}),es=B({}),vs=B({}),ks=qe(38281),He=B(null),gt=B(!1),bt=B(null),vt=B([]),Ss=qe(10),nt=B(!1),kt=B(0),et=B(null),tt=B(null),Ge=B([]),Fe=B([]),Es=qe({CLIENT_UNKNOWN:0,CLIENT_READY:10,CLIENT_PLAYING:20,CLIENT_GOAL:30}),Q=B([]),ge=B(""),St=B(!1),Ot=B(!1),ve=B(5),ke=B(5),Se=B(5);let ye=B(5),Ie=B(5),ut=B(5),Je=B(0),be=B(!1),ne=B([]),ts=fe([Ge],([t])=>t.length),ws=fe([Fe],([t])=>t.length);const ss=fe([ts,ws,ut,Ie,ye],([t,e,n,s,r])=>Math.max(Math.min(n+r+s-10-t,e),0)),It=fe([ne],([t])=>t.flatMap(e=>e)),Cs=fe([It],([t])=>t.filter(e=>e.flagged).length),Ns=fe([Ie,ye,It],([t,e,n])=>t*e-n.filter(s=>s.clicked).length),ns=fe([Je,Ns,It],([t,e,n])=>t===e&&!n.some(s=>s.clicked&&s.isBomb)),lt=B(!1),Bt=B(!1);let ls=null,st=1,Et=10,E=null,Lt={},as=!1,rs=!1;Ge.subscribe(t=>t);Fe.subscribe(t=>t);Nt.subscribe(t=>ls=t);Zt.subscribe(t=>t);yt.subscribe(t=>t);kt.subscribe(t=>st=t);He.subscribe(t=>E=t);Q.subscribe(t=>t);vt.subscribe(t=>t);Ss.subscribe(t=>Et=t);bs.subscribe(t=>Lt=t);ge.subscribe(t=>t);be.subscribe(t=>as=t);St.subscribe(t=>rs=t);function ys(t){if(t){const e=w(ts);w(ss)?Ds(81e3+e):w(ns)&&Ms()}}function oe(t,e){const n=w(ne);0<=t&&t<w(Ie)&&0<=e&&e<w(ye)&&n[e][t].isBomb!==!0&&(n[e][t].adjacentBombs+=1)}function Is(t,e,n){n===0&&ae(t,e,!1),n===2&&Bs(t,e),ne.update(s=>s)}function Bs(t,e){const n=w(ne);if(0<=t&&t<w(Ie)&&0<=e&&e<w(ye)&&!n[e][t].clicked){let s=n[e][t];s.flagged=!s.flagged,n[e][t]=s}}async function ae(t,e,n=!0){const s=w(ne);if(0<=t&&t<w(Ie)&&0<=e&&e<w(ye)&&!s[e][t].clicked&&!s[e][t].flagged){let r=s[e][t];r.clicked=!0,w(Je)===0&&(be.set(!0),Ts({x:t,y:e})),!r.isBomb&&r.adjacentBombs==0&&(ae(t-1,e-1),ae(t,e-1),ae(t+1,e-1),ae(t-1,e),ae(t+1,e),ae(t-1,e+1),ae(t,e+1),ae(t+1,e+1)),r.isBomb&&(wt(),Hs(),setTimeout(()=>{be.set(!1),at()},2500)),s[e][t]=r}w(ns)&&(wt(),ys(!0),setTimeout(()=>{be.set(!1),at()},2500))}function wt(){const t=w(ne);t.forEach((e,n)=>{e.forEach((s,r)=>{s.clicked=!0,t[n][r]=s})})}function at(){if(!w(be)){Je.set(0);const t=w(ve),e=w(ke),n=w(Se);ut.set(t),Ie.set(e),ye.set(n),ne.set(Array.from({length:n},()=>Array.from({length:e},()=>new _s)))}}function Ls(t,e,n){return t.x>=e-1&&t.x<=e+1&&t.y>=n-1&&t.y<=n+1}function Ts(t){const e=w(ve),n=w(ke),s=w(Se),r=w(ne);for(;w(Je)<w(ut);){const l=Math.round(Math.random()*n*e)%n,o=Math.round(Math.random()*s*e)%s;if(Ls(t,l,o))continue;const a=r[o][l];a.isBomb!==!0&&(oe(l-1,o-1),oe(l,o-1),oe(l+1,o-1),oe(l-1,o),a.isBomb=!0,oe(l+1,o),oe(l-1,o+1),oe(l,o+1),oe(l+1,o+1),Je.update(i=>i+1))}}function Ps(){wt(),setTimeout(()=>{be.set(!1),at()},2500),ne.update(t=>t)}const os=async(t,e,n)=>{if((E==null?void 0:E.readyState)===WebSocket.OPEN&&(E.close(),He.set(null)),!t||!e)return;gt.set(!1);let s=t;s.search(/^\/connect /)>-1&&(s=s.substring(9)),s.search(/:\d+$/)===-1&&(s=`${s}:${w(ks)}`);const r=/^ws:\/\//.test(s)?"ws":"wss";s=s.replace(/^.*\/\//,""),bt.set(n??null),vt.set([]),He.set(new WebSocket(`${r}://${s}`)),E&&(E.onopen=()=>{},E.onmessage=l=>{const o=JSON.parse(l.data);for(const a of o)switch(a.cmd){case"RoomInfo":!localStorage.getItem("dataPackageVersion")||!localStorage.getItem("dataPackage")||a.datapackage_version!==localStorage.getItem("dataPackageVersion")?Os():$t(JSON.parse(localStorage.getItem("dataPackage")||"")),_t.set(e),E==null||E.send(JSON.stringify([{cmd:"Connect",game:"ChecksFinder",name:w(_t),uuid:As(),tags:["AP","DeathLink"],password:w(bt),version:w(gs),items_handling:7,slot_data:!0}]));break;case"Connected":kt.set(0),Ge.set(a.checked_locations),Fe.set(a.missing_locations),vt.set([]),ve.set(5),Se.set(5),ke.set(5),ge.set("Connected"),yt.set(a.players),Zt.set(a.team),Nt.set(a.slot);break;case"ConnectionRefused":ge.set("Not Connected"),E&&E.readyState===WebSocket.OPEN&&(a.errors.includes("InvalidPassword")?Q.update(i=>[...i,bt===null?"This server requires a password. Please use /connect [server] [password] to connect.":"Your provided password is incorrect. Please try again."]):Q.update(i=>[...i,`Error while connecting to AP server: ${a.errors.join(", ")}.`]),gt.set(!0),E==null||E.close());break;case"ReceivedItems":a.items.forEach(i=>{switch(i.item){case 8e4:ke.update(c=>c+1);break;case 80001:Se.update(c=>c+1);break;case 80002:ve.update(c=>c+1);break}});break;case"RoomUpdate":break;case"Print":Q.update(i=>[...i,a.text]);break;case"PrintJSON":switch(a.type){case"ItemSend":Q.update(i=>[...i,Rs(a.data)]);break;default:Q.update(i=>[...i,...a.data]);break}break;case"DataPackage":a.data.version!==0&&(localStorage.setItem("dataPackageVersion",a.data.version),localStorage.setItem("dataPackage",JSON.stringify(a.data))),$t(a.data);break;case"Bounced":a.tags.includes("DeathLink")&&a.data.source!==w(_t)&&as&&Ps(),Q.update(i=>[...i,a.data.source+" "+a.data.cause]);break}},E.onclose=()=>{ge.set("Not Connected");const l=w(tt);nt||!l||(et&&(window.clearTimeout(w(et)??0),et.set(null)),et.set(window.setTimeout(()=>{if((E==null?void 0:E.readyState)!==WebSocket.OPEN&&!w(gt)&&!w(nt)){if(kt.set(st+1),st>Et){Q.update(o=>[...o,"Archipelago server connection lost. The connection closed unexpectedly. Please try to reconnect, or restart the client."]);return}Q.update(o=>[...o,`Connection to AP server lost. Attempting to reconnect (${st} of ${Et})`]),os(t)}},5e3)))},E.onerror=()=>{(E==null?void 0:E.readyState)===WebSocket.OPEN&&(Q.update(l=>[...l,"Archipelago server connection lost. The connection closed unexpectedly. Please try to reconnect, or restart the client."]),E.close())})},As=()=>{let t=localStorage.getItem("clientId");return t||(t=(Math.random()*1e16).toString(),localStorage.setItem("clientId",t)),t},Os=()=>{!E||E.readyState!==WebSocket.OPEN||E.send(JSON.stringify([{cmd:"GetDataPackage"}]))},$s=t=>{(E==null?void 0:E.readyState)===WebSocket.OPEN&&E.send(JSON.stringify([{cmd:"Say",text:t}]))},Ds=t=>{let e=w(Ge);e.push(t),Ge.set(e);let n=w(Fe);n.shift(),Fe.set(n),E==null||E.send(JSON.stringify([{cmd:"LocationChecks",locations:[t]}]))},Ms=()=>{E==null||E.send(JSON.stringify([{cmd:"StatusUpdate",status:w(Es).CLIENT_GOAL}]))},Hs=()=>{rs&&(E==null||E.send(JSON.stringify([{cmd:"Bounce",tags:["DeathLink"],data:{time:Date.now(),source:Lt[ls||0],cause:"blew it"}}])))},$t=t=>{let e={},n={};Object.values(t.games).forEach(s=>{Object.keys(s.item_name_to_id).forEach(r=>{e[s.item_name_to_id[r]]=r}),Object.keys(s.location_name_to_id).forEach(r=>{n[s.location_name_to_id[r]]=r})}),xt.set(e),es.set(n),vs.set(t.games.ChecksFinder.location_name_to_id)},Rs=t=>{const e=w(xt),n=w(es);return t.map(s=>{switch(s.type){case"player_id":return Lt[parseInt(s.text)];case"item_id":return e[+s.text];case"location_id":return n[+s.text];default:return s.text}}).join("")};function Dt(t){let e,n,s,r="Server address:",l,o,a,i,c,f="Player name:",g,m,_,u,h,S="Password:",y,H,z,R,de=He?"Connect":"Disconnect",he,me,X;return{c(){e=b("form"),n=b("div"),s=b("label"),s.textContent=r,l=C(),o=b("input"),a=C(),i=b("div"),c=b("label"),c.textContent=f,g=C(),m=b("input"),_=C(),u=b("div"),h=b("label"),h.textContent=S,y=C(),H=b("input"),z=C(),R=b("button"),he=$(de),this.h()},l(W){e=v(W,"FORM",{class:!0});var M=I(e);n=v(M,"DIV",{class:!0});var q=I(n);s=v(q,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),ie(s)!=="svelte-1x6qc9h"&&(s.textContent=r),l=N(q),o=v(q,"INPUT",{name:!0,id:!0,class:!0}),q.forEach(k),a=N(M),i=v(M,"DIV",{class:!0});var le=I(i);c=v(le,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),ie(c)!=="svelte-7ul9v9"&&(c.textContent=f),g=N(le),m=v(le,"INPUT",{name:!0,id:!0,class:!0}),le.forEach(k),_=N(M),u=v(M,"DIV",{class:!0});var re=I(u);h=v(re,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),ie(h)!=="svelte-bhu94"&&(h.textContent=S),y=N(re),H=v(re,"INPUT",{name:!0,id:!0,class:!0}),re.forEach(k),z=N(M),R=v(M,"BUTTON",{class:!0});var Be=I(R);he=D(Be,de),Be.forEach(k),M.forEach(k),this.h()},h(){p(s,"for","address"),p(s,"class","svelte-pihp29"),p(o,"name","address"),p(o,"id","server-address"),p(o,"class","svelte-pihp29"),p(n,"class","svelte-pihp29"),p(c,"for","player"),p(c,"class","svelte-pihp29"),p(m,"name","player"),p(m,"id","player"),p(m,"class","svelte-pihp29"),p(i,"class","svelte-pihp29"),p(h,"for","password"),p(h,"class","svelte-pihp29"),p(H,"name","password"),p(H,"id","password"),p(H,"class","svelte-pihp29"),p(u,"class","svelte-pihp29"),p(R,"class","svelte-pihp29"),p(e,"class","svelte-pihp29")},m(W,M){T(W,e,M),d(e,n),d(n,s),d(n,l),d(n,o),V(o,t[0]),d(e,a),d(e,i),d(i,c),d(i,g),d(i,m),V(m,t[1]),d(e,_),d(e,u),d(u,h),d(u,y),d(u,H),V(H,t[2]),d(e,z),d(e,R),d(R,he),me||(X=[U(o,"input",t[5]),U(m,"input",t[6]),U(H,"input",t[7]),U(R,"click",t[4])],me=!0)},p(W,M){M&1&&o.value!==W[0]&&V(o,W[0]),M&2&&m.value!==W[1]&&V(m,W[1]),M&4&&H.value!==W[2]&&V(H,W[2])},d(W){W&&k(e),me=!1,it(X)}}}function js(t){let e,n,s="Digging Game",r,l,o,a=`<img alt="setting" src="${ee+"/book.png"}" class="svelte-pihp29"/>`,i,c,f=t[3]!=="Connected"&&Dt(t);return{c(){e=b("section"),n=b("h1"),n.textContent=s,r=C(),f&&f.c(),l=C(),o=b("button"),o.innerHTML=a,this.h()},l(g){e=v(g,"SECTION",{class:!0});var m=I(e);n=v(m,"H1",{class:!0,"data-svelte-h":!0}),ie(n)!=="svelte-584zkb"&&(n.textContent=s),r=N(m),f&&f.l(m),l=N(m),o=v(m,"BUTTON",{class:!0,"data-svelte-h":!0}),ie(o)!=="svelte-1ogwns4"&&(o.innerHTML=a),m.forEach(k),this.h()},h(){p(n,"class","svelte-pihp29"),p(o,"class","settings svelte-pihp29"),p(e,"class","svelte-pihp29")},m(g,m){T(g,e,m),d(e,n),d(e,r),f&&f.m(e,null),d(e,l),d(e,o),i||(c=U(o,"click",t[8]),i=!0)},p(g,[m]){g[3]!=="Connected"?f?f.p(g,m):(f=Dt(g),f.c(),f.m(e,l)):f&&(f.d(1),f=null)},i:se,o:se,d(g){g&&k(e),f&&f.d(),i=!1,c()}}}function Us(t,e,n){let s,r,l,o;P(t,He,h=>n(9,s=h)),P(t,tt,h=>n(10,r=h)),P(t,nt,h=>n(11,l=h)),P(t,ge,h=>n(3,o=h));let a=w(tt),i=w(Nt),c="";async function f(h){if(!a){pt(nt,l=!0,l),pt(tt,r=null,r),s&&s.readyState===WebSocket.OPEN&&(s.close(),pt(He,s=null,s));return}await os(a,i,c)}function g(){a=this.value,n(0,a)}function m(){i=this.value,n(1,i)}function _(){c=this.value,n(2,c)}return[a,i,c,o,f,g,m,_,()=>Bt.set(!0)]}class Ws extends Ce{constructor(e){super(),Ne(this,e,Us,js,we,{})}}function is(t){const e=t-1;return e*e*e+1}function rt(t){return t/=.5,t<1?.5*t*t:(t--,-.5*(t*(t-2)-1))}function Ee(t,{delay:e=0,duration:n=400,easing:s=fs}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:l=>`opacity: ${l*r}`}}function ot(t,{delay:e=0,duration:n=400,easing:s=is,x:r=0,y:l=0,opacity:o=0}={}){const a=getComputedStyle(t),i=+a.opacity,c=a.transform==="none"?"":a.transform,f=i*(1-o),[g,m]=At(r),[_,u]=At(l);return{delay:e,duration:n,easing:s,css:(h,S)=>`
			transform: ${c} translate(${(1-h)*g}${m}, ${(1-h)*_}${u});
			opacity: ${i-f*S}`}}function Mt(t,{delay:e=0,duration:n=400,easing:s=is,axis:r="y"}={}){const l=getComputedStyle(t),o=+l.opacity,a=r==="y"?"height":"width",i=parseFloat(l[a]),c=r==="y"?["top","bottom"]:["left","right"],f=c.map(y=>`${y[0].toUpperCase()}${y.slice(1)}`),g=parseFloat(l[`padding${f[0]}`]),m=parseFloat(l[`padding${f[1]}`]),_=parseFloat(l[`margin${f[0]}`]),u=parseFloat(l[`margin${f[1]}`]),h=parseFloat(l[`border${f[0]}Width`]),S=parseFloat(l[`border${f[1]}Width`]);return{delay:e,duration:n,easing:s,css:y=>`overflow: hidden;opacity: ${Math.min(y*20,1)*o};${a}: ${y*i}px;padding-${c[0]}: ${y*g}px;padding-${c[1]}: ${y*m}px;margin-${c[0]}: ${y*_}px;margin-${c[1]}: ${y*u}px;border-${c[0]}-width: ${y*h}px;border-${c[1]}-width: ${y*S}px;`}}function Ht(t){let e;function n(l,o){if(l[2]===!0)return Fs;if(l[3]>0)return Gs}let s=n(t),r=s&&s(t);return{c(){r&&r.c(),e=Ae()},l(l){r&&r.l(l),e=Ae()},m(l,o){r&&r.m(l,o),T(l,e,o)},p(l,o){s===(s=n(l))&&r?r.p(l,o):(r&&r.d(1),r=s&&s(l),r&&(r.c(),r.m(e.parentNode,e)))},d(l){l&&k(e),r&&r.d(l)}}}function Gs(t){let e;return{c(){e=$(t[3])},l(n){e=D(n,t[3])},m(n,s){T(n,e,s)},p(n,s){s&8&&x(e,n[3])},d(n){n&&k(e)}}}function Fs(t){let e,n;return{c(){e=b("img"),this.h()},l(s){e=v(s,"IMG",{alt:!0,src:!0}),this.h()},h(){p(e,"alt","bomb"),Te(e.src,n=ee+"/bomb-large.png")||p(e,"src",n)},m(s,r){T(s,e,r)},p:se,d(s){s&&k(e)}}}function Js(t){let e,n,s,r,l=t[0]&&Ht(t);return{c(){e=b("td"),l&&l.c(),this.h()},l(o){e=v(o,"TD",{class:!0});var a=I(e);l&&l.l(a),a.forEach(k),this.h()},h(){p(e,"class",n=We(t[0]?"dug":t[1]?"flag":"")+" svelte-10n1hly")},m(o,a){T(o,e,a),l&&l.m(e,null),s||(r=U(e,"mousedown",t[5]),s=!0)},p(o,[a]){o[0]?l?l.p(o,a):(l=Ht(o),l.c(),l.m(e,null)):l&&(l.d(1),l=null),a&3&&n!==(n=We(o[0]?"dug":o[1]?"flag":"")+" svelte-10n1hly")&&p(e,"class",n)},i:se,o:se,d(o){o&&k(e),l&&l.d(),s=!1,r()}}}function qs(t,e,n){const s=ds();let{clicked:r=!1}=e,{flagged:l=!1}=e,{isBomb:o=!1}=e,{adjacentBombs:a=0}=e;function i(f){s("tile-clicked",f.button)}const c=f=>i(f);return t.$$set=f=>{"clicked"in f&&n(0,r=f.clicked),"flagged"in f&&n(1,l=f.flagged),"isBomb"in f&&n(2,o=f.isBomb),"adjacentBombs"in f&&n(3,a=f.adjacentBombs)},[r,l,o,a,i,c]}class Vs extends Ce{constructor(e){super(),Ne(this,e,qs,Js,we,{clicked:0,flagged:1,isBomb:2,adjacentBombs:3})}}function Rt(t,e,n){const s=t.slice();return s[2]=e[n],s[4]=n,s}function jt(t,e,n){const s=t.slice();return s[5]=e[n],s[7]=n,s}function Ut(t){let e,n;function s(...r){return t[1](t[7],t[4],...r)}return e=new Vs({props:{clicked:t[0][t[4]][t[7]].clicked,flagged:t[0][t[4]][t[7]].flagged,isBomb:t[0][t[4]][t[7]].isBomb,adjacentBombs:t[0][t[4]][t[7]].adjacentBombs}}),e.$on("tile-clicked",s),{c(){Oe(e.$$.fragment)},l(r){$e(e.$$.fragment,r)},m(r,l){De(e,r,l),n=!0},p(r,l){t=r;const o={};l&1&&(o.clicked=t[0][t[4]][t[7]].clicked),l&1&&(o.flagged=t[0][t[4]][t[7]].flagged),l&1&&(o.isBomb=t[0][t[4]][t[7]].isBomb),l&1&&(o.adjacentBombs=t[0][t[4]][t[7]].adjacentBombs),e.$set(o)},i(r){n||(L(e.$$.fragment,r),n=!0)},o(r){j(e.$$.fragment,r),n=!1},d(r){Me(e,r)}}}function Wt(t){let e,n,s,r=ue(t[2]),l=[];for(let a=0;a<r.length;a+=1)l[a]=Ut(jt(t,r,a));const o=a=>j(l[a],1,1,()=>{l[a]=null});return{c(){e=b("tr");for(let a=0;a<l.length;a+=1)l[a].c();n=C(),this.h()},l(a){e=v(a,"TR",{class:!0});var i=I(e);for(let c=0;c<l.length;c+=1)l[c].l(i);n=N(i),i.forEach(k),this.h()},h(){p(e,"class","rows svelte-4jsriw")},m(a,i){T(a,e,i);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(e,null);d(e,n),s=!0},p(a,i){if(i&1){r=ue(a[2]);let c;for(c=0;c<r.length;c+=1){const f=jt(a,r,c);l[c]?(l[c].p(f,i),L(l[c],1)):(l[c]=Ut(f),l[c].c(),L(l[c],1),l[c].m(e,n))}for(je(),c=r.length;c<l.length;c+=1)o(c);Ue()}},i(a){if(!s){for(let i=0;i<r.length;i+=1)L(l[i]);s=!0}},o(a){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)j(l[i]);s=!1},d(a){a&&k(e),ct(l,a)}}}function Ys(t){let e,n,s,r=ue(t[0]),l=[];for(let a=0;a<r.length;a+=1)l[a]=Wt(Rt(t,r,a));const o=a=>j(l[a],1,1,()=>{l[a]=null});return{c(){e=b("table"),n=b("tbody");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=v(a,"TABLE",{class:!0});var i=I(e);n=v(i,"TBODY",{class:!0});var c=I(n);for(let f=0;f<l.length;f+=1)l[f].l(c);c.forEach(k),i.forEach(k),this.h()},h(){p(n,"class","grid svelte-4jsriw"),p(e,"class","svelte-4jsriw")},m(a,i){T(a,e,i),d(e,n);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(n,null);s=!0},p(a,[i]){if(i&1){r=ue(a[0]);let c;for(c=0;c<r.length;c+=1){const f=Rt(a,r,c);l[c]?(l[c].p(f,i),L(l[c],1)):(l[c]=Wt(f),l[c].c(),L(l[c],1),l[c].m(n,null))}for(je(),c=r.length;c<l.length;c+=1)o(c);Ue()}},i(a){if(!s){for(let i=0;i<r.length;i+=1)L(l[i]);s=!0}},o(a){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)j(l[i]);s=!1},d(a){a&&k(e),ct(l,a)}}}function zs(t,e,n){let s;return P(t,ne,l=>n(0,s=l)),[s,(l,o,a)=>Is(l,o,a.detail)]}class Ks extends Ce{constructor(e){super(),Ne(this,e,zs,Ys,we,{})}}function Gt(t){let e,n;return{c(){e=b("hr"),n=$(`
					20`),this.h()},l(s){e=v(s,"HR",{class:!0}),n=D(s,`
					20`),this.h()},h(){p(e,"class","svelte-c5be5n")},m(s,r){T(s,e,r),T(s,n,r)},d(s){s&&(k(e),k(n))}}}function Ft(t){let e,n;return{c(){e=b("hr"),n=$(`
					10`),this.h()},l(s){e=v(s,"HR",{class:!0}),n=D(s,`
					10`),this.h()},h(){p(e,"class","svelte-c5be5n")},m(s,r){T(s,e,r),T(s,n,r)},d(s){s&&(k(e),k(n))}}}function Jt(t){let e,n;return{c(){e=b("hr"),n=$(`
					10`),this.h()},l(s){e=v(s,"HR",{class:!0}),n=D(s,`
					10`),this.h()},h(){p(e,"class","svelte-c5be5n")},m(s,r){T(s,e,r),T(s,n,r)},d(s){s&&(k(e),k(n))}}}function Qs(t){let e,n,s,r,l,o,a,i,c,f,g,m,_,u,h,S,y,H,z,R,de,he,me,X,W,M,q,le,re,Be,pe,Tt,ft,Z,Ve,dt,Ye,ht,ze,mt,_e,Ke,K,G=t[3]==="Connected"&&Gt(),F=t[3]==="Connected"&&Ft(),J=t[3]==="Connected"&&Jt();return _e=new Ks({}),{c(){e=b("section"),n=b("div"),s=b("div"),r=b("img"),o=C(),a=b("span"),i=$(t[1]),c=C(),f=b("img"),m=C(),_=b("span"),u=$(t[2]),h=C(),G&&G.c(),S=C(),y=b("img"),z=C(),R=b("span"),de=$(t[4]),he=C(),F&&F.c(),me=C(),X=b("img"),M=C(),q=b("span"),le=$(t[5]),re=C(),J&&J.c(),Be=C(),pe=b("img"),ft=C(),Z=b("span"),Ve=$(t[6]),dt=C(),Ye=b("hr"),ht=C(),ze=$(t[2]),mt=C(),Oe(_e.$$.fragment),this.h()},l(A){e=v(A,"SECTION",{class:!0});var Y=I(e);n=v(Y,"DIV",{class:!0});var Qe=I(n);s=v(Qe,"DIV",{class:!0});var O=I(s);r=v(O,"IMG",{alt:!0,src:!0,class:!0}),o=N(O),a=v(O,"SPAN",{class:!0});var Pt=I(a);i=D(Pt,t[1]),Pt.forEach(k),c=N(O),f=v(O,"IMG",{alt:!0,src:!0,class:!0}),m=N(O),_=v(O,"SPAN",{class:!0});var Xe=I(_);u=D(Xe,t[2]),h=N(Xe),G&&G.l(Xe),Xe.forEach(k),S=N(O),y=v(O,"IMG",{alt:!0,src:!0,class:!0}),z=N(O),R=v(O,"SPAN",{class:!0});var Ze=I(R);de=D(Ze,t[4]),he=N(Ze),F&&F.l(Ze),Ze.forEach(k),me=N(O),X=v(O,"IMG",{alt:!0,src:!0,class:!0}),M=N(O),q=v(O,"SPAN",{class:!0});var xe=I(q);le=D(xe,t[5]),re=N(xe),J&&J.l(xe),xe.forEach(k),Be=N(O),pe=v(O,"IMG",{alt:!0,src:!0,class:!0}),ft=N(O),Z=v(O,"SPAN",{class:!0});var Le=I(Z);Ve=D(Le,t[6]),dt=N(Le),Ye=v(Le,"HR",{class:!0}),ht=N(Le),ze=D(Le,t[2]),Le.forEach(k),O.forEach(k),mt=N(Qe),$e(_e.$$.fragment,Qe),Qe.forEach(k),Y.forEach(k),this.h()},h(){p(r,"alt","available checks"),Te(r.src,l=ee+"/ap-icon-large.png")||p(r,"src",l),p(r,"class","svelte-c5be5n"),p(a,"class","svelte-c5be5n"),p(f,"alt","placed bombs"),Te(f.src,g=ee+"/bomb-large.png")||p(f,"src",g),p(f,"class","svelte-c5be5n"),p(_,"class","svelte-c5be5n"),p(y,"alt","map height"),Te(y.src,H=ee+"/up-down-arrow-big.png")||p(y,"src",H),p(y,"class","svelte-c5be5n"),p(R,"class","svelte-c5be5n"),p(X,"alt","map width"),Te(X.src,W=ee+"/left-right-arrow-big.png")||p(X,"src",W),p(X,"class","svelte-c5be5n"),p(q,"class","svelte-c5be5n"),p(pe,"alt","flagged spots"),Te(pe.src,Tt=ee+"/heavy-rock-big.png")||p(pe,"src",Tt),p(pe,"class","svelte-c5be5n"),p(Ye,"class","svelte-c5be5n"),p(Z,"class","svelte-c5be5n"),p(s,"class","game-status svelte-c5be5n"),p(n,"class","island svelte-c5be5n"),p(e,"class",Ke=We(t[0]?"section-split":"")+" svelte-c5be5n")},m(A,Y){T(A,e,Y),d(e,n),d(n,s),d(s,r),d(s,o),d(s,a),d(a,i),d(s,c),d(s,f),d(s,m),d(s,_),d(_,u),d(_,h),G&&G.m(_,null),d(s,S),d(s,y),d(s,z),d(s,R),d(R,de),d(R,he),F&&F.m(R,null),d(s,me),d(s,X),d(s,M),d(s,q),d(q,le),d(q,re),J&&J.m(q,null),d(s,Be),d(s,pe),d(s,ft),d(s,Z),d(Z,Ve),d(Z,dt),d(Z,Ye),d(Z,ht),d(Z,ze),d(n,mt),De(_e,n,null),K=!0},p(A,[Y]){(!K||Y&2)&&x(i,A[1]),(!K||Y&4)&&x(u,A[2]),A[3]==="Connected"?G||(G=Gt(),G.c(),G.m(_,null)):G&&(G.d(1),G=null),(!K||Y&16)&&x(de,A[4]),A[3]==="Connected"?F||(F=Ft(),F.c(),F.m(R,null)):F&&(F.d(1),F=null),(!K||Y&32)&&x(le,A[5]),A[3]==="Connected"?J||(J=Jt(),J.c(),J.m(q,null)):J&&(J.d(1),J=null),(!K||Y&64)&&x(Ve,A[6]),(!K||Y&4)&&x(ze,A[2]),(!K||Y&1&&Ke!==(Ke=We(A[0]?"section-split":"")+" svelte-c5be5n"))&&p(e,"class",Ke)},i(A){K||(L(_e.$$.fragment,A),K=!0)},o(A){j(_e.$$.fragment,A),K=!1},d(A){A&&k(e),G&&G.d(),F&&F.d(),J&&J.d(),Me(_e)}}}function Xs(t,e,n){let s,r,l,o,a,i,c,f,g,m,_;return P(t,be,u=>n(7,s=u)),P(t,Se,u=>n(8,r=u)),P(t,ke,u=>n(9,l=u)),P(t,ve,u=>n(10,o=u)),P(t,lt,u=>n(0,a=u)),P(t,ss,u=>n(1,i=u)),P(t,ut,u=>n(2,c=u)),P(t,ge,u=>n(3,f=u)),P(t,ye,u=>n(4,g=u)),P(t,Ie,u=>n(5,m=u)),P(t,Cs,u=>n(6,_=u)),t.$$.update=()=>{t.$$.dirty&1920&&at()},[a,i,c,f,g,m,_,s,r,l,o]}class Zs extends Ce{constructor(e){super(),Ne(this,e,Xs,Qs,we,{})}}function qt(t,e,n){const s=t.slice();return s[7]=e[n],s}function Vt(t,e,n){const s=t.slice();return s[10]=e[n].text,s[11]=e[n].type,s}function xs(t){let e,n=t[7]+"",s,r,l;return{c(){e=b("p"),s=$(n),r=C()},l(o){e=v(o,"P",{});var a=I(e);s=D(a,n),r=N(a),a.forEach(k)},m(o,a){T(o,e,a),d(e,s),d(e,r)},p(o,a){a&4&&n!==(n=o[7]+"")&&x(s,n)},i(o){l||ce(()=>{l=Ct(e,Ee,{duration:1e3}),l.start()})},o:se,d(o){o&&k(e)}}}function en(t){let e,n=t[7].text+"",s,r,l;return{c(){e=b("p"),s=$(n),r=C()},l(o){e=v(o,"P",{});var a=I(e);s=D(a,n),r=N(a),a.forEach(k)},m(o,a){T(o,e,a),d(e,s),d(e,r)},p(o,a){a&4&&n!==(n=o[7].text+"")&&x(s,n)},i(o){l||ce(()=>{l=Ct(e,Ee,{duration:1e3}),l.start()})},o:se,d(o){o&&k(e)}}}function tn(t){var r;let e,n=ue(((r=t[7])==null?void 0:r.messageParts)&&t[7].messageParts),s=[];for(let l=0;l<n.length;l+=1)s[l]=Yt(Vt(t,n,l));return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=Ae()},l(l){for(let o=0;o<s.length;o+=1)s[o].l(l);e=Ae()},m(l,o){for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(l,o);T(l,e,o)},p(l,o){var a;if(o&4){n=ue(((a=l[7])==null?void 0:a.messageParts)&&l[7].messageParts);let i;for(i=0;i<n.length;i+=1){const c=Vt(l,n,i);s[i]?(s[i].p(c,o),L(s[i],1)):(s[i]=Yt(c),s[i].c(),L(s[i],1),s[i].m(e.parentNode,e))}for(;i<s.length;i+=1)s[i].d(1);s.length=n.length}},i(l){for(let o=0;o<n.length;o+=1)L(s[o])},o:se,d(l){l&&k(e),ct(s,l)}}}function Yt(t){let e,n=t[10]+"",s,r,l;return{c(){e=b("p"),s=$(n),r=C()},l(o){e=v(o,"P",{});var a=I(e);s=D(a,n),r=N(a),a.forEach(k)},m(o,a){T(o,e,a),d(e,s),d(e,r)},p(o,a){a&4&&n!==(n=o[10]+"")&&x(s,n)},i(o){l||ce(()=>{l=Ct(e,Ee,{duration:1e3}),l.start()})},o:se,d(o){o&&k(e)}}}function zt(t){let e,n,s;function r(a,i){return i&4&&(e=null),i&4&&(n=null),e==null&&(e=!!Object.hasOwn(a[7],"messageParts")),e?tn:(n==null&&(n=!!Object.hasOwn(a[7],"text")),n?en:xs)}let l=r(t,-1),o=l(t);return{c(){o.c(),s=Ae()},l(a){o.l(a),s=Ae()},m(a,i){o.m(a,i),T(a,s,i)},p(a,i){l===(l=r(a,i))&&o?o.p(a,i):(o.d(1),o=l(a),o&&(o.c(),L(o,1),o.m(s.parentNode,s)))},i(a){L(o)},o:se,d(a){a&&k(s),o.d(a)}}}function sn(t){let e,n,s=`<img alt="close-console" src="${ee+"/cross.png"}"/>`,r,l,o,a,i,c,f,g,m=ue(t[2]),_=[];for(let u=0;u<m.length;u+=1)_[u]=zt(qt(t,m,u));return{c(){e=b("section"),n=b("button"),n.innerHTML=s,r=C(),l=b("span");for(let u=0;u<_.length;u+=1)_[u].c();o=C(),a=b("input"),this.h()},l(u){e=v(u,"SECTION",{class:!0});var h=I(e);n=v(h,"BUTTON",{class:!0,"data-svelte-h":!0}),ie(n)!=="svelte-4nwcgv"&&(n.innerHTML=s),r=N(h),l=v(h,"SPAN",{class:!0});var S=I(l);for(let y=0;y<_.length;y+=1)_[y].l(S);S.forEach(k),o=N(h),a=v(h,"INPUT",{class:!0,type:!0,placeholder:!0}),h.forEach(k),this.h()},h(){p(n,"class","close-console svelte-mgvati"),p(l,"class","console svelte-mgvati"),p(a,"class","console-input svelte-mgvati"),p(a,"type","text"),p(a,"placeholder","Message or !command to send to server"),p(e,"class","svelte-mgvati")},m(u,h){T(u,e,h),d(e,n),d(e,r),d(e,l);for(let S=0;S<_.length;S+=1)_[S]&&_[S].m(l,null);t[5](l),d(e,o),d(e,a),V(a,t[1]),c=!0,f||(g=[U(n,"click",t[4]),U(a,"input",t[6]),U(a,"keydown",t[3])],f=!0)},p(u,[h]){if(h&4){m=ue(u[2]);let S;for(S=0;S<m.length;S+=1){const y=qt(u,m,S);_[S]?(_[S].p(y,h),L(_[S],1)):(_[S]=zt(y),_[S].c(),L(_[S],1),_[S].m(l,null))}for(;S<_.length;S+=1)_[S].d(1);_.length=m.length}h&2&&a.value!==u[1]&&V(a,u[1])},i(u){if(!c){for(let h=0;h<m.length;h+=1)L(_[h]);u&&ce(()=>{c&&(i||(i=te(e,ot,{duration:1e3,easing:rt,x:-400},!0)),i.run(1))}),c=!0}},o(u){u&&(i||(i=te(e,ot,{duration:1e3,easing:rt,x:-400},!1)),i.run(0)),c=!1},d(u){u&&k(e),ct(_,u),t[5](null),u&&i&&i.end(),f=!1,it(g)}}}function nn(t,e,n){let s;P(t,Q,f=>n(2,s=f));let r=null,l="";hs(()=>{r==null||r.scroll({top:r.scrollHeight,behavior:"smooth"})});function o(f){f.key==="Enter"&&$s(l)}const a=()=>lt.set(!1);function i(f){ms[f?"unshift":"push"](()=>{r=f,n(0,r)})}function c(){l=this.value,n(1,l)}return[r,l,s,o,a,i,c]}class ln extends Ce{constructor(e){super(),Ne(this,e,nn,sn,we,{})}}function an(t){let e,n,s,r,l,o,a,i,c,f,g,m,_,u;return{c(){e=b("form"),n=b("label"),s=$(`Bombs:
					`),r=b("input"),l=C(),o=b("label"),a=$(`Height:
					`),i=b("input"),c=C(),f=b("label"),g=$(`Width:
					`),m=b("input"),this.h()},l(h){e=v(h,"FORM",{id:!0,class:!0});var S=I(e);n=v(S,"LABEL",{for:!0});var y=I(n);s=D(y,`Bombs:
					`),r=v(y,"INPUT",{type:!0,name:!0}),y.forEach(k),l=N(S),o=v(S,"LABEL",{for:!0});var H=I(o);a=D(H,`Height:
					`),i=v(H,"INPUT",{type:!0,name:!0}),H.forEach(k),c=N(S),f=v(S,"LABEL",{for:!0});var z=I(f);g=D(z,`Width:
					`),m=v(z,"INPUT",{type:!0,name:!0}),z.forEach(k),S.forEach(k),this.h()},h(){p(r,"type","number"),p(r,"name","bombs"),p(n,"for","bombs"),p(i,"type","number"),p(i,"name","height"),p(o,"for","height"),p(m,"type","number"),p(m,"name","width"),p(f,"for","width"),p(e,"id","offline"),p(e,"class","svelte-xk9gv1")},m(h,S){T(h,e,S),d(e,n),d(n,s),d(n,r),V(r,t[3]),d(e,l),d(e,o),d(o,a),d(o,i),V(i,t[4]),d(e,c),d(e,f),d(f,g),d(f,m),V(m,t[5]),_||(u=[U(r,"input",t[9]),U(i,"input",t[10]),U(m,"input",t[11])],_=!0)},p(h,S){S&8&&Pe(r.value)!==h[3]&&V(r,h[3]),S&16&&Pe(i.value)!==h[4]&&V(i,h[4]),S&32&&Pe(m.value)!==h[5]&&V(m,h[5])},d(h){h&&k(e),_=!1,it(u)}}}function rn(t){let e,n,s,r,l,o,a,i,c,f;return{c(){e=b("form"),n=b("label"),s=$(`Death Link:
					`),r=b("input"),l=C(),o=b("label"),a=$(`Assisting Hand:
					`),i=b("input"),this.h()},l(g){e=v(g,"FORM",{id:!0,class:!0});var m=I(e);n=v(m,"LABEL",{for:!0});var _=I(n);s=D(_,`Death Link:
					`),r=v(_,"INPUT",{type:!0,name:!0}),_.forEach(k),l=N(m),o=v(m,"LABEL",{for:!0});var u=I(o);a=D(u,`Assisting Hand:
					`),i=v(u,"INPUT",{type:!0,name:!0}),u.forEach(k),m.forEach(k),this.h()},h(){p(r,"type","checkbox"),p(r,"name","deathLink"),p(n,"for","deathLink"),p(i,"type","checkbox"),p(i,"name","assistingHand"),i.disabled=!0,p(o,"for","assistingHand"),p(e,"id","archipelago"),p(e,"class","svelte-xk9gv1")},m(g,m){T(g,e,m),d(e,n),d(n,s),d(n,r),r.checked=t[1],d(e,l),d(e,o),d(o,a),d(o,i),i.checked=t[2],c||(f=[U(r,"change",t[7]),U(i,"change",t[8])],c=!0)},p(g,m){m&2&&(r.checked=g[1]),m&4&&(i.checked=g[2])},d(g){g&&k(e),c=!1,it(f)}}}function on(t){let e,n,s,r=`<img alt="close-console" src="${ee+"/cross.png"}"/>`,l,o,a,i,c,f;function g(u,h){return u[0]==="Connected"?rn:an}let m=g(t),_=m(t);return{c(){e=b("div"),n=b("div"),s=b("button"),s.innerHTML=r,l=C(),_.c(),this.h()},l(u){e=v(u,"DIV",{class:!0});var h=I(e);n=v(h,"DIV",{class:!0});var S=I(n);s=v(S,"BUTTON",{class:!0,"data-svelte-h":!0}),ie(s)!=="svelte-197p8c3"&&(s.innerHTML=r),l=N(S),_.l(S),S.forEach(k),h.forEach(k),this.h()},h(){p(s,"class","close-console svelte-xk9gv1"),p(n,"class","options svelte-xk9gv1"),p(e,"class","overlay svelte-xk9gv1")},m(u,h){T(u,e,h),d(e,n),d(n,s),d(n,l),_.m(n,null),i=!0,c||(f=U(s,"click",t[6]),c=!0)},p(u,[h]){m===(m=g(u))&&_?_.p(u,h):(_.d(1),_=m(u),_&&(_.c(),_.m(n,null)))},i(u){i||(u&&ce(()=>{i&&(o||(o=te(n,ot,{x:200,delay:200,duration:500},!0)),o.run(1))}),u&&ce(()=>{i&&(a||(a=te(e,Ee,{},!0)),a.run(1))}),i=!0)},o(u){u&&(o||(o=te(n,ot,{x:200,delay:200,duration:500},!1)),o.run(0)),u&&(a||(a=te(e,Ee,{},!1)),a.run(0)),i=!1},d(u){u&&k(e),_.d(),u&&o&&o.end(),u&&a&&a.end(),c=!1,f()}}}function cn(t,e,n){let s,r,l,o,a,i;P(t,ge,h=>n(0,s=h)),P(t,St,h=>n(1,r=h)),P(t,Ot,h=>n(2,l=h)),P(t,ve,h=>n(3,o=h)),P(t,Se,h=>n(4,a=h)),P(t,ke,h=>n(5,i=h));const c=()=>Bt.set(!1);function f(){r=this.checked,St.set(r)}function g(){l=this.checked,Ot.set(l)}function m(){o=Pe(this.value),ve.set(o)}function _(){a=Pe(this.value),Se.set(a)}function u(){i=Pe(this.value),ke.set(i)}return[s,r,l,o,a,i,c,f,g,m,_,u]}class un extends Ce{constructor(e){super(),Ne(this,e,cn,on,we,{})}}function Kt(t){let e,n;return e=new ln({}),{c(){Oe(e.$$.fragment)},l(s){$e(e.$$.fragment,s)},m(s,r){De(e,s,r),n=!0},i(s){n||(L(e.$$.fragment,s),n=!0)},o(s){j(e.$$.fragment,s),n=!1},d(s){Me(e,s)}}}function Qt(t){let e,n;return e=new un({}),{c(){Oe(e.$$.fragment)},l(s){$e(e.$$.fragment,s)},m(s,r){De(e,s,r),n=!0},i(s){n||(L(e.$$.fragment,s),n=!0)},o(s){j(e.$$.fragment,s),n=!1},d(s){Me(e,s)}}}function Xt(t){let e,n=`<img alt="console" src="${ee+"/map.png"}" class="svelte-1i5vp3s"/>`,s,r,l,o;return{c(){e=b("button"),e.innerHTML=n,this.h()},l(a){e=v(a,"BUTTON",{class:!0,"data-svelte-h":!0}),ie(e)!=="svelte-4fllls"&&(e.innerHTML=n),this.h()},h(){p(e,"class",We("floating-chat__open-chat--closed")+" svelte-1i5vp3s")},m(a,i){T(a,e,i),r=!0,l||(o=U(e,"click",t[2]),l=!0)},i(a){r||(a&&ce(()=>{r&&(s||(s=te(e,Ee,{duration:1e3,easing:rt},!0)),s.run(1))}),r=!0)},o(a){a&&(s||(s=te(e,Ee,{duration:1e3,easing:rt},!1)),s.run(0)),r=!1},d(a){a&&k(e),a&&s&&s.end(),l=!1,o()}}}function fn(t){let e,n,s,r,l,o,a,i,c,f;n=new Ws({});let g=t[0]&&Kt();o=new Zs({});let m=t[1]&&Qt(),_=!t[0]&&Xt(t);return{c(){e=b("main"),Oe(n.$$.fragment),s=C(),r=b("div"),g&&g.c(),l=C(),Oe(o.$$.fragment),i=C(),m&&m.c(),c=C(),_&&_.c(),this.h()},l(u){e=v(u,"MAIN",{class:!0});var h=I(e);$e(n.$$.fragment,h),s=N(h),r=v(h,"DIV",{class:!0});var S=I(r);g&&g.l(S),l=N(S),$e(o.$$.fragment,S),S.forEach(k),i=N(h),m&&m.l(h),c=N(h),_&&_.l(h),h.forEach(k),this.h()},h(){p(r,"class","content-area svelte-1i5vp3s"),p(e,"class","svelte-1i5vp3s")},m(u,h){T(u,e,h),De(n,e,null),d(e,s),d(e,r),g&&g.m(r,null),d(r,l),De(o,r,null),d(e,i),m&&m.m(e,null),d(e,c),_&&_.m(e,null),f=!0},p(u,[h]){u[0]?g?h&1&&L(g,1):(g=Kt(),g.c(),L(g,1),g.m(r,l)):g&&(je(),j(g,1,1,()=>{g=null}),Ue()),u[1]?m?h&2&&L(m,1):(m=Qt(),m.c(),L(m,1),m.m(e,c)):m&&(je(),j(m,1,1,()=>{m=null}),Ue()),u[0]?_&&(je(),j(_,1,1,()=>{_=null}),Ue()):_?h&1&&L(_,1):(_=Xt(u),_.c(),L(_,1),_.m(e,null))},i(u){f||(L(n.$$.fragment,u),L(g),L(o.$$.fragment,u),u&&ce(()=>{f&&(a||(a=te(r,Mt,{},!0)),a.run(1))}),L(m),L(_),f=!0)},o(u){j(n.$$.fragment,u),j(g),j(o.$$.fragment,u),u&&(a||(a=te(r,Mt,{},!1)),a.run(0)),j(m),j(_),f=!1},d(u){u&&k(e),Me(n),g&&g.d(),Me(o),u&&a&&a.end(),m&&m.d(),_&&_.d()}}}function dn(t,e,n){let s,r;return P(t,lt,o=>n(0,s=o)),P(t,Bt,o=>n(1,r=o)),ps(()=>{document.addEventListener("contextmenu",o=>o.preventDefault())}),[s,r,()=>lt.set(!0)]}class bn extends Ce{constructor(e){super(),Ne(this,e,dn,fn,we,{})}}export{bn as component};
