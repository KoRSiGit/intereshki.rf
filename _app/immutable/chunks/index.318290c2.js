function N(){}const Y=t=>t;function Nt(t,e){for(const n in e)t[n]=e[n];return t}function At(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function _t(t){return t()}function lt(){return Object.create(null)}function A(t){t.forEach(_t)}function T(t){return typeof t=="function"}function ee(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let W;function ne(t,e){return W||(W=document.createElement("a")),W.href=e,t===W.href}function St(t){return Object.keys(t).length===0}function dt(t,...e){if(t==null)return N;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ie(t){let e;return dt(t,n=>e=n)(),e}function se(t,e,n){t.$$.on_destroy.push(dt(e,n))}function re(t,e,n,i){if(t){const s=ht(t,e,n,i);return t[0](s)}}function ht(t,e,n,i){return t[1]&&i?Nt(n.ctx.slice(),t[1](i(e))):n.ctx}function ce(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function oe(t,e,n,i,s,c){if(s){const r=ht(e,n,i,c);t.p(r,s)}}function ae(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function le(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ue(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function fe(t){const e={};for(const n in t)e[n]=!0;return e}function _e(t){return t??""}function de(t,e,n){return t.set(n),e}function he(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const mt=typeof window<"u";let Z=mt?()=>window.performance.now():()=>Date.now(),tt=mt?t=>requestAnimationFrame(t):N;const M=new Set;function pt(t){M.forEach(e=>{e.c(t)||(M.delete(e),e.f())}),M.size!==0&&tt(pt)}function et(t){let e;return M.size===0&&tt(pt),{promise:new Promise(n=>{M.add(e={c:t,f:n})}),abort(){M.delete(e)}}}let K=!1;function jt(){K=!0}function Ct(){K=!1}function Mt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Dt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const a=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&a.push(_)}e=a}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let a=0;a<e.length;a++){const l=e[a].claim_order,_=(s>0&&e[n[s]].claim_order<=l?s+1:Mt(1,s,d=>e[n[d]].claim_order,l))-1;i[a]=n[_]+1;const f=_+1;n[f]=a,s=Math.max(f,s)}const c=[],r=[];let o=e.length-1;for(let a=n[s]+1;a!=0;a=i[a-1]){for(c.push(e[a-1]);o>=a;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((a,l)=>a.claim_order-l.claim_order);for(let a=0,l=0;a<r.length;a++){for(;l<c.length&&r[a].claim_order>=c[l].claim_order;)l++;const _=l<c.length?c[l]:null;t.insertBefore(r[a],_)}}function yt(t,e){t.appendChild(e)}function gt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ot(t){const e=it("style");return zt(gt(t),e),e.sheet}function zt(t,e){return yt(t.head||t,e),e.sheet}function Pt(t,e){if(K){for(Dt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function me(t,e,n){K&&!n?Pt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function nt(t){t.parentNode&&t.parentNode.removeChild(t)}function pe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function it(t){return document.createElement(t)}function Tt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function st(t){return document.createTextNode(t)}function ye(){return st(" ")}function ge(){return st("")}function ut(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Rt=["width","height"];function qt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Rt.indexOf(i)===-1?t[i]=e[i]:bt(t,i,e[i])}function Lt(t,e){Object.keys(e).forEach(n=>{Wt(t,n,e[n])})}function Wt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:bt(t,e,n)}function be(t){return/-/.test(t)?Lt:qt}function we(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function Bt(t){return Array.from(t.childNodes)}function Ft(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function wt(t,e,n,i,s=!1){Ft(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const a=n(o);return a===void 0?t.splice(r,1):t[r]=a,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const a=n(o);return a===void 0?t.splice(r,1):t[r]=a,s?a===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function $t(t,e,n,i){return wt(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function $e(t,e,n){return $t(t,e,n,it)}function xe(t,e,n){return $t(t,e,n,Tt)}function Ht(t,e){return wt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>st(e),!0)}function ke(t){return Ht(t," ")}function ve(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ee(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let B;function It(){if(B===void 0){B=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{B=!0}}return B}function Ne(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=it("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=It();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=ut(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=ut(i.contentWindow,"resize",e),e()}),yt(t,i),()=>{(s||c&&i.contentWindow)&&c(),nt(i)}}function Ae(t,e,n){t.classList[n?"add":"remove"](e)}function xt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Se(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function je(t,e){return new t(e)}const H=new Map;let I=0;function Gt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Jt(t,e){const n={stylesheet:Ot(e),rules:{}};return H.set(t,n),n}function G(t,e,n,i,s,c,r,o=0){const a=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=a){const g=e+(n-e)*c(m);l+=m*100+`%{${r(g,1-g)}}
`}const _=l+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Gt(_)}_${o}`,d=gt(t),{stylesheet:u,rules:h}=H.get(d)||Jt(d,t);h[f]||(h[f]=!0,u.insertRule(`@keyframes ${f} ${_}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,I+=1,f}function J(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),I-=s,I||Kt())}function Kt(){tt(()=>{I||(H.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&nt(e)}),H.clear())})}let P;function E(t){P=t}function R(){if(!P)throw new Error("Function called outside component initialization");return P}function Ce(t){R().$$.on_mount.push(t)}function Me(t){R().$$.after_update.push(t)}function De(t){R().$$.on_destroy.push(t)}function Oe(){const t=R();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=xt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function ze(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const C=[],ft=[];let D=[];const V=[],kt=Promise.resolve();let X=!1;function vt(){X||(X=!0,kt.then(rt))}function Pe(){return vt(),kt}function O(t){D.push(t)}function Te(t){V.push(t)}const U=new Set;let j=0;function rt(){if(j!==0)return;const t=P;do{try{for(;j<C.length;){const e=C[j];j++,E(e),Qt(e.$$)}}catch(e){throw C.length=0,j=0,e}for(E(null),C.length=0,j=0;ft.length;)ft.pop()();for(let e=0;e<D.length;e+=1){const n=D[e];U.has(n)||(U.add(n),n())}D.length=0}while(C.length);for(;V.length;)V.pop()();X=!1,U.clear(),E(t)}function Qt(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}function Ut(t){const e=[],n=[];D.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),D=e}let z;function ct(){return z||(z=Promise.resolve(),z.then(()=>{z=null})),z}function S(t,e,n){t.dispatchEvent(xt(`${e?"intro":"outro"}${n}`))}const F=new Set;let k;function Vt(){k={r:0,c:[],p:k}}function Xt(){k.r||A(k.c),k=k.p}function ot(t,e){t&&t.i&&(F.delete(t),t.i(e))}function Et(t,e,n,i){if(t&&t.o){if(F.has(t))return;F.add(t),k.c.push(()=>{F.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const at={duration:0};function Re(t,e,n){const i={direction:"in"};let s=e(t,n,i),c=!1,r,o,a=0;function l(){r&&J(t,r)}function _(){const{delay:d=0,duration:u=300,easing:h=Y,tick:p=N,css:m}=s||at;m&&(r=G(t,0,1,u,d,h,m,a++)),p(0,1);const g=Z()+d,v=g+u;o&&o.abort(),c=!0,O(()=>S(t,!0,"start")),o=et(b=>{if(c){if(b>=v)return p(1,0),S(t,!0,"end"),l(),c=!1;if(b>=g){const w=h((b-g)/u);p(w,1-w)}}return c})}let f=!1;return{start(){f||(f=!0,J(t),T(s)?(s=s(i),ct().then(_)):_())},invalidate(){f=!1},end(){c&&(l(),c=!1)}}}function qe(t,e,n){const i={direction:"out"};let s=e(t,n,i),c=!0,r;const o=k;o.r+=1;function a(){const{delay:l=0,duration:_=300,easing:f=Y,tick:d=N,css:u}=s||at;u&&(r=G(t,1,0,_,l,f,u));const h=Z()+l,p=h+_;O(()=>S(t,!1,"start")),et(m=>{if(c){if(m>=p)return d(0,1),S(t,!1,"end"),--o.r||A(o.c),!1;if(m>=h){const g=f((m-h)/_);d(1-g,g)}}return c})}return T(s)?ct().then(()=>{s=s(i),a()}):a(),{end(l){l&&s.tick&&s.tick(1,0),c&&(r&&J(t,r),c=!1)}}}function Le(t,e,n,i){const s={direction:"both"};let c=e(t,n,s),r=i?0:1,o=null,a=null,l=null;function _(){l&&J(t,l)}function f(u,h){const p=u.b-r;return h*=Math.abs(p),{a:r,b:u.b,d:p,duration:h,start:u.start,end:u.start+h,group:u.group}}function d(u){const{delay:h=0,duration:p=300,easing:m=Y,tick:g=N,css:v}=c||at,b={start:Z()+h,b:u};u||(b.group=k,k.r+=1),o||a?a=b:(v&&(_(),l=G(t,r,u,p,h,m,v)),u&&g(0,1),o=f(b,p),O(()=>S(t,u,"start")),et(w=>{if(a&&w>a.start&&(o=f(a,p),a=null,S(t,o.b,"start"),v&&(_(),l=G(t,r,o.b,o.duration,0,m,c.css))),o){if(w>=o.end)g(r=o.b,1-r),S(t,o.b,"end"),a||(o.b?_():--o.group.r||A(o.group.c)),o=null;else if(w>=o.start){const q=w-o.start;r=o.a+o.d*m(q/o.duration),g(r,1-r)}}return!!(o||a)}))}return{run(u){T(c)?ct().then(()=>{c=c(s),d(u)}):d(u)},end(){_(),o=a=null}}}function We(t,e){const n=e.token={};function i(s,c,r,o){if(e.token!==n)return;e.resolved=o;let a=e.ctx;r!==void 0&&(a=a.slice(),a[r]=o);const l=s&&(e.current=s)(a);let _=!1;e.block&&(e.blocks?e.blocks.forEach((f,d)=>{d!==c&&f&&(Vt(),Et(f,1,1,()=>{e.blocks[d]===f&&(e.blocks[d]=null)}),Xt())}):e.block.d(1),l.c(),ot(l,1),l.m(e.mount(),e.anchor),_=!0),e.block=l,e.blocks&&(e.blocks[c]=l),_&&rt()}if(At(t)){const s=R();if(t.then(c=>{E(s),i(e.then,1,e.value,c),E(null)},c=>{if(E(s),i(e.catch,2,e.error,c),E(null),!e.hasCatch)throw c}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Be(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}function Fe(t,e){Et(t,1,1,()=>{e.delete(t.key)})}function He(t,e,n,i,s,c,r,o,a,l,_,f){let d=t.length,u=c.length,h=d;const p={};for(;h--;)p[t[h].key]=h;const m=[],g=new Map,v=new Map,b=[];for(h=u;h--;){const y=f(s,c,h),$=n(y);let x=r.get($);x?i&&b.push(()=>x.p(y,e)):(x=l($,y),x.c()),g.set($,m[h]=x),$ in p&&v.set($,Math.abs(h-p[$]))}const w=new Set,q=new Set;function Q(y){ot(y,1),y.m(o,_),r.set(y.key,y),_=y.first,u--}for(;d&&u;){const y=m[u-1],$=t[d-1],x=y.key,L=$.key;y===$?(_=y.first,d--,u--):g.has(L)?!r.has(x)||w.has(x)?Q(y):q.has(L)?d--:v.get(x)>v.get(L)?(q.add(x),Q(y)):(w.add(L),d--):(a($,r),d--)}for(;d--;){const y=t[d];g.has(y.key)||a(y,r)}for(;u;)Q(m[u-1]);return A(b),m}function Ie(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],o=e[c];if(o){for(const a in r)a in o||(i[a]=1);for(const a in o)s[a]||(n[a]=o[a],s[a]=1);t[c]=o}else for(const a in r)s[a]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ge(t){return typeof t=="object"&&t!==null?t:{}}function Je(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ke(t){t&&t.c()}function Qe(t,e){t&&t.l(e)}function Yt(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||O(()=>{const r=t.$$.on_mount.map(_t).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...r):A(r),t.$$.on_mount=[]}),c.forEach(O)}function Zt(t,e){const n=t.$$;n.fragment!==null&&(Ut(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function te(t,e){t.$$.dirty[0]===-1&&(C.push(t),vt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ue(t,e,n,i,s,c,r,o=[-1]){const a=P;E(t);const l=t.$$={fragment:null,ctx:[],props:c,update:N,not_equal:s,bound:lt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:lt(),dirty:o,skip_bound:!1,root:e.target||a.$$.root};r&&r(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(f,d,...u)=>{const h=u.length?u[0]:d;return l.ctx&&s(l.ctx[f],l.ctx[f]=h)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](h),_&&te(t,f)),d}):[],l.update(),_=!0,A(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){jt();const f=Bt(e.target);l.fragment&&l.fragment.l(f),f.forEach(nt)}else l.fragment&&l.fragment.c();e.intro&&ot(t.$$.fragment),Yt(t,e.target,e.anchor,e.customElement),Ct(),rt()}E(a)}class Ve{$destroy(){Zt(this,1),this.$destroy=N}$on(e,n){if(!T(n))return N;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!St(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ze as $,Yt as A,Zt as B,re as C,oe as D,ae as E,ce as F,Pt as G,Se as H,pe as I,Tt as J,xe as K,we as L,N as M,Ae as N,ut as O,se as P,ne as Q,dt as R,Ve as S,A as T,T as U,ue as V,fe as W,Nt as X,le as Y,be as Z,Ie as _,ye as a,qt as a0,_e as a1,He as a2,De as a3,Fe as a4,P as a5,Je as a6,Ge as a7,Te as a8,Oe as a9,de as aa,Z as ab,et as ac,Y as ad,he as ae,ie as af,O as ag,Le as ah,Ne as ai,Re as aj,qe as ak,We as al,Be as am,me as b,ke as c,Et as d,ge as e,Xt as f,ot as g,nt as h,Ue as i,Me as j,it as k,$e as l,Bt as m,bt as n,Ce as o,Ee as p,st as q,Ht as r,ee as s,Pe as t,ve as u,Vt as v,ft as w,je as x,Ke as y,Qe as z};
