import{S as q,i as G,s as H,T as S,k as m,a as k,l as p,m as R,c as C,h as g,_ as E,n as u,$ as I,N as T,b,K as d,W as L,C as U,Q as y,U as N}from"./index.e0f388dd.js";/* empty css                                                  */function M(c){let e,i;return{c(){e=m("source"),this.h()},l(t){e=p(t,"SOURCE",{srcset:!0,type:!0}),this.h()},h(){u(e,"srcset",i=c[0].avif),u(e,"type","image/avif")},m(t,l){b(t,e,l)},p(t,l){l&1&&i!==(i=t[0].avif)&&u(e,"srcset",i)},d(t){t&&g(e)}}}function O(c){let e,i;return{c(){e=m("source"),this.h()},l(t){e=p(t,"SOURCE",{srcset:!0,type:!0}),this.h()},h(){u(e,"srcset",i=c[0].webp),u(e,"type","image/webp")},m(t,l){b(t,e,l)},p(t,l){l&1&&i!==(i=t[0].webp)&&u(e,"srcset",i)},d(t){t&&g(e)}}}function P(c){let e;return{c(){e=m("figcaption")},l(i){e=p(i,"FIGCAPTION",{});var t=R(e);t.forEach(g)},m(i,t){b(i,e,t),e.innerHTML=c[2]},p(i,t){t&4&&(e.innerHTML=i[2])},d(i){i&&g(e)}}}function z(c){let e,i,t,l,o,_,r=c[0].avif&&M(c),s=c[0].webp&&O(c),n=c[2]&&P(c),v=[c[3]],h={};for(let a=0;a<v.length;a+=1)h=S(h,v[a]);return{c(){e=m("picture"),r&&r.c(),i=k(),s&&s.c(),t=k(),l=m("img"),_=k(),n&&n.c(),this.h()},l(a){e=p(a,"PICTURE",{});var f=R(e);r&&r.l(f),i=C(f),s&&s.l(f),t=C(f),l=p(f,"IMG",{src:!0,alt:!0,loading:!0,decoding:!0,class:!0}),_=C(f),n&&n.l(f),f.forEach(g),this.h()},h(){E(l.src,o=c[0].png)||u(l,"src",o),u(l,"alt",c[1]),u(l,"loading","lazy"),u(l,"decoding","async"),u(l,"class","svelte-1i298g1"),I(e,h),T(e,"svelte-1i298g1",!0)},m(a,f){b(a,e,f),r&&r.m(e,null),d(e,i),s&&s.m(e,null),d(e,t),d(e,l),d(e,_),n&&n.m(e,null)},p(a,[f]){a[0].avif?r?r.p(a,f):(r=M(a),r.c(),r.m(e,i)):r&&(r.d(1),r=null),a[0].webp?s?s.p(a,f):(s=O(a),s.c(),s.m(e,t)):s&&(s.d(1),s=null),f&1&&!E(l.src,o=a[0].png)&&u(l,"src",o),f&2&&u(l,"alt",a[1]),a[2]?n?n.p(a,f):(n=P(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null),I(e,h=L(v,[f&8&&a[3]])),T(e,"svelte-1i298g1",!0)},i:U,o:U,d(a){a&&g(e),r&&r.d(),s&&s.d(),n&&n.d()}}}function A(c,e,i){const t=["srcset","alt","figcaption"];let l=y(e,t),{srcset:o}=e,{alt:_}=e,{figcaption:r=void 0}=e;return c.$$set=s=>{e=S(S({},e),N(s)),i(3,l=y(e,t)),"srcset"in s&&i(0,o=s.srcset),"alt"in s&&i(1,_=s.alt),"figcaption"in s&&i(2,r=s.figcaption)},[o,_,r,l]}class Q extends q{constructor(e){super(),G(this,e,A,z,H,{srcset:0,alt:1,figcaption:2})}}export{Q as S};
