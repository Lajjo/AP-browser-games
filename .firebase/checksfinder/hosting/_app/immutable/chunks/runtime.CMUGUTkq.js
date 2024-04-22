var St=Array.isArray,Ht=Array.from,Bt=Object.isFrozen,Vt=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,Ot=Object.getOwnPropertyDescriptors,Kt=Object.prototype,Wt=Array.prototype,kt=Object.getPrototypeOf;const L=2,b=4,N=8,rt=16,y=32,Z=64,w=128,T=256,m=512,P=1024,q=2048,x=4096,Nt=8192,st=16384,X=Symbol("$state");function ot(t){return t===this.v}function wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Dt(t){return!wt(t,this.v)}const Zt=1,Gt=2,$t=4,Jt=8,Qt=1,Xt=2,tn="[",Ft="]",nn=`${Ft}!`,It=Symbol(),en=["touchstart","touchmove","touchend"];function ut(t){return{f:0,reactions:null,equals:ot,v:t,version:0}}function rn(t){const n=ut(t);return n.equals=Dt,a&&(a.d??(a.d=[])).push(n),n}function sn(t,n){var e=t.v!==It;if(!S&&e&&v!==null&&K()&&v.f&L)throw new Error("ERR_SVELTE_UNSAFE_MUTATION");return t.equals(n)||(t.v=n,t.version++,K()&&e&&i!==null&&i.f&T&&!(i.f&y)&&(_!==null&&_.includes(t)?(E(i,m),B(i)):R===null?jt([t]):R.push(t)),Q(t,m,!0)),n}function on(t){var n=document.createElement("template");return n.innerHTML=t,n.content}function Pt(t){if(St(t))for(var n=0;n<t.length;n++){var e=t[n];e.isConnected&&e.remove()}else t.isConnected&&t.remove()}function lt(t,n){if(t===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");if($)throw new Error("ERR_SVELTE_EFFECT_IN_TEARDOWN")}function qt(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function C(t,n,e){var r=(t&Z)!==0,s={ctx:a,deps:null,dom:null,f:t|m,first:null,fn:n,last:null,next:null,parent:r?null:i,prev:null,teardown:null,transitions:null};if(v!==null&&!r&&qt(s,v),e){var o=I;try{tt(!0),H(s),s.f|=Nt}finally{tt(o)}}else B(s);return s}function un(t){if(lt(i),i.f&N&&a!==null&&!a.m){const e=a;(e.e??(e.e=[])).push(t)}else ft(t)}function ln(t){return lt(i),xt(t)}function fn(t){const n=C(Z,t,!0);return()=>{G(n)}}function ft(t){return C(b,t,!1)}function xt(t){return C(N,t,!0)}function cn(t){return C(N|rt,t,!0)}function an(t){return C(N|y,t,!0)}function it(t){var n=t.teardown;if(n!==null){const e=$;nt(!0);try{n.call(null)}finally{nt(e)}}}function G(t){var n=t.dom;if(n!==null&&Pt(n),J(t),Y(t,0),E(t,x),t.transitions)for(const o of t.transitions)o.stop();it(t);var e=t.parent;if(e!==null&&t.f&y&&e.first!==null){var r=t.prev,s=t.next;r!==null?s!==null?(r.next=s,s.prev=r):(r.next=null,e.last=r):s!==null?(s.prev=null,e.first=s):(e.first=null,e.last=null)}t.next=t.prev=t.teardown=t.ctx=t.dom=t.deps=t.parent=t.fn=null}function _n(t,n){var e=[];ct(t,e,!0),Lt(e,()=>{G(t),n&&n()})}function Lt(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var s of t)s.out(r)}else n()}function ct(t,n,e){if(!(t.f&q)){if(t.f^=q,t.transitions!==null)for(const l of t.transitions)(l.is_global||e)&&n.push(l);for(var r=t.first;r!==null;){var s=r.next,o=(r.f&st)!==0||(r.f&y)!==0;ct(r,n,o?e:!1),r=s}}}function pn(t){at(t,!0)}function at(t,n){if(t.f&q){t.f^=q,M(t)&&H(t);for(var e=t.first;e!==null;){var r=e.next,s=(e.f&st)!==0||(e.f&y)!==0;at(e,s?n:!1),e=r}if(t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&o.in()}}const vn=()=>{};function dn(t){return t()}function Ct(t){for(var n=0;n<t.length;n++)t[n]()}let j=!1,z=[];function _t(){j=!1;const t=z.slice();z=[],Ct(t)}function hn(t){j||(j=!0,queueMicrotask(_t)),z.push(t)}function Mt(){j&&_t()}function En(t){let n=L|m;i===null&&(n|=w);const e={deps:null,deriveds:null,equals:ot,f:n,first:null,fn:t,last:null,reactions:null,v:null,version:0};if(v!==null&&v.f&L){var r=v;r.deriveds===null?r.deriveds=[e]:r.deriveds.push(e)}return e}function pt(t){J(t);var n=t.deriveds;if(n!==null){t.deriveds=null;for(var e=0;e<n.length;e+=1)gt(n[e])}}function vt(t,n){pt(t);var e=ht(t),r=(F||t.f&w)&&t.deps!==null?P:T;E(t,r),t.equals(e)||(t.v=e,Q(t,m,n))}function gt(t){pt(t),Y(t,0),E(t,x),t.first=t.last=t.deps=t.reactions=t.fn=null}const dt=0,bt=1;let g=dt,U=!1,I=!1,$=!1;function tt(t){I=t}function nt(t){$=t}let O=[],k=0,v=null,i=null,_=null,c=0,R=null;function jt(t){R=t}let S=!1,F=!1,a=null;function K(){return a!==null&&a.r}function M(t){var f;var n=t.f;if(n&m)return!0;if(n&P){var e=t.deps,r=(n&w)!==0;if(e!==null)for(var s=e.length,o=0;o<s;o++){var l=e[o];if(M(l)&&(vt(l,!0),t.f&m))return!0;var d=l.version;if(r){if(d>t.version)return t.version=d,!0;if(!F&&!((f=l==null?void 0:l.reactions)!=null&&f.includes(t))){var u=l.reactions;u===null?l.reactions=[t]:u.push(t)}}}r||E(t,T)}return!1}function ht(t){const n=_,e=c,r=R,s=v,o=F,l=S;_=null,c=0,R=null,v=t,F=!I&&(t.f&w)!==0,S=!1;try{let d=t.fn(),u=t.deps;if(_!==null){let f;if(u!==null){const p=u.length,h=c===0?_:u.slice(0,c).concat(_),D=h.length>16&&p-c>1?new Set(h):null;for(f=c;f<p;f++){const A=u[f];(D!==null?!D.has(A):!h.includes(A))&&Et(t,A)}}if(u!==null&&c>0)for(u.length=c+_.length,f=0;f<_.length;f++)u[c+f]=_[f];else t.deps=u=_;if(!F)for(f=c;f<u.length;f++){const p=u[f],h=p.reactions;h===null?p.reactions=[t]:h[h.length-1]!==t&&h.push(t)}}else u!==null&&c<u.length&&(Y(t,c),u.length=c);return d}finally{_=n,c=e,R=r,v=s,F=o,S=l}}function Et(t,n){const e=n.reactions;let r=0;if(e!==null){r=e.length-1;const s=e.indexOf(t);s!==-1&&(r===0?n.reactions=null:(e[s]=e[r],e.pop()))}r===0&&n.f&w&&(E(n,m),Y(n,0))}function Y(t,n){const e=t.deps;if(e!==null){const r=n===0?null:e.slice(0,n);let s;for(s=n;s<e.length;s++){const o=e[s];(r===null||!r.includes(o))&&Et(t,o)}}}function J(t){let n=t.first;t.first=null,t.last=null;for(var e;n!==null;)e=n.next,G(n),n=e}function H(t){var n=t.f;if(!(n&x)){E(t,T);var e=t.ctx,r=i,s=a;i=t,a=e;try{n&rt||J(t),it(t);var o=ht(t);t.teardown=typeof o=="function"?o:null}finally{i=r,a=s}}}function yt(){if(k>1e3)throw k=0,new Error("ERR_SVELTE_TOO_MANY_UPDATES");k++}function Tt(t){for(var n=0;n<t.length;n++){var e=t[n];At(e,N|b)}}function et(t){var n=t.length;if(n!==0){yt();for(var e=0;e<n;e++){var r=t[e];!(r.f&(x|q))&&M(r)&&H(r)}}}function Ut(){if(U=!1,k>101)return;const t=O;O=[],Tt(t),U||(k=0)}function B(t){g===dt&&(U||(U=!0,queueMicrotask(Ut)));for(var n=t;n.parent!==null;){n=n.parent;var e=n.f;if(e&y){if(!(e&T))return;E(n,P)}}O.push(n)}function mt(t,n,e,r){var s=t.first,o=[];t:for(;s!==null;){var l=s.f,d=(l&(x|q))===0,u=l&y,f=(l&T)!==0,p=s.first;if(d&&(!u||!f)){if(u&&E(s,T),l&N){if(u){if(!e&&p!==null){s=p;continue}}else if(M(s)&&(H(s),p=s.first),!e&&p!==null){s=p;continue}}else if(l&b)if(u||f){if(!e&&p!==null){s=p;continue}}else o.push(s)}var h=s.next;if(h===null){let A=s.parent;for(;A!==null;){if(t===A)break t;var V=A.next;if(V!==null){s=V;continue t}A=A.parent}}s=h}if(o.length>0&&(n&b&&r.push(...o),!e))for(var D=0;D<o.length;D++)mt(o[D],n,!1,r)}function At(t,n,e=!1){var r=[],s=I;I=!0;try{t.first===null&&!(t.f&y)?et([t]):(mt(t,n,e,r),et(r))}finally{I=s}}function yn(t){k=0,At(t,N,!0)}function Rt(t,n=!0){var e=g,r=O;try{yt();const o=[];g=bt,O=o,n&&Tt(r);var s=t==null?void 0:t();return Mt(),(O.length>0||o.length>0)&&Rt(),k=0,s}finally{g=e,O=r}}async function Tn(){await Promise.resolve(),Rt()}function mn(t){const n=t.f;if(n&x)return t.v;if(v!==null&&!(v.f&(y|Z))&&!S){const e=(v.f&w)!==0,r=v.deps;_===null&&r!==null&&r[c]===t&&!(e&&i!==null)?c++:(r===null||c===0||r[c-1]!==t)&&(_===null?_=[t]:_.push(t)),R!==null&&i!==null&&i.f&T&&!(i.f&y)&&R.includes(t)&&(E(i,m),B(i))}return n&L&&M(t)&&vt(t,!1),t.v}function Q(t,n,e){var r=t.reactions;if(r!==null)for(var s=K(),o=r.length,l=0;l<o;l++){var d=r[l];if(!((!e||!s)&&d===i)){var u=d.f;E(d,n);var f=(u&P)!==0,p=(u&w)!==0;(u&T||f&&p)&&(d.f&L?Q(d,P,e):B(d))}}}function An(t){const n=S;try{return S=!0,t()}finally{S=n}}const Yt=~(m|P|T);function E(t,n){t.f=t.f&Yt|n}function Rn(t,n=!1,e){a={x:null,c:null,e:null,m:!1,p:a,d:null,s:t,r:n,l1:[],l2:ut(!1),u:null}}function Sn(t){const n=a;if(n!==null){const e=n.e;if(e!==null){n.e=null;for(let r=0;r<e.length;r++)ft(e[r])}a=n.p,n.m=!0}return{}}function On(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(X in t)W(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&X in e&&W(e)}}}function W(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t);for(let r in t)try{W(t[r],n)}catch{}const e=kt(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=Ot(e);for(let s in r){const o=r[s].get;if(o)try{o.call(t)}catch{}}}}}export{Xt as A,Bt as B,T as C,Kt as D,Wt as E,ut as F,kt as G,tn as H,cn as I,st as J,nn as K,Pt as L,pn as M,_n as N,hn as O,en as P,$t as Q,Dt as R,X as S,Qt as T,It as U,Zt as V,Gt as W,En as X,Jt as Y,Tn as Z,Rn as a,un as b,a as c,An as d,Ct as e,On as f,mn as g,i as h,yn as i,Vt as j,St as k,Rt as l,Ht as m,fn as n,an as o,Sn as p,vn as q,dn as r,ft as s,sn as t,ln as u,rn as v,xt as w,Ft as x,zt as y,on as z};
