import{S as U,i as A,s as M,x as O,e as $,a as b,b as E,f as m,g,h as x,v,y as R,z as J,A as K,t as C,j as k,C as Q,o as D,c as N,q as P,d as G,u as y,m as H,k as F,l as z,B as W,D as X,n as L,p as S,r as V,w as Y}from"./chunks/Carousel.b5d456ae.js";/* empty css                        */function Z(o){let e,n,r,t;const c=o[2].default,a=O(c,o,o[1],null);return{c(){e=$("button"),n=$("span"),a&&a.c(),this.h()},l(l){e=b(l,"BUTTON",{class:!0});var s=E(e);n=b(s,"SPAN",{class:!0});var p=E(n);a&&a.l(p),p.forEach(m),s.forEach(m),this.h()},h(){g(n,"class","text-gray-900"),g(e,"class",r="px-8 py-4 rounded-md bg-amber-300 font-semibold w-max "+o[0])},m(l,s){x(l,e,s),v(e,n),a&&a.m(n,null),t=!0},p(l,[s]){a&&a.p&&(!t||s&2)&&R(a,c,l,l[1],t?K(c,l[1],s,null):J(l[1]),null),(!t||s&1&&r!==(r="px-8 py-4 rounded-md bg-amber-300 font-semibold w-max "+l[0]))&&g(e,"class",r)},i(l){t||(C(a,l),t=!0)},o(l){k(a,l),t=!1},d(l){l&&m(e),a&&a.d(l)}}}function ee(o,e,n){let{$$slots:r={},$$scope:t}=e,{wrapperClasses:c=""}=e;return o.$$set=a=>{"wrapperClasses"in a&&n(0,c=a.wrapperClasses),"$$scope"in a&&n(1,t=a.$$scope)},[c,t,r]}class ae extends U{constructor(e){super(),A(this,e,ee,Z,M,{wrapperClasses:0})}}var te="/pablocalvosanchezguia/assets/01.4c6492f3.jpg",se="/pablocalvosanchezguia/assets/02.6629ba98.jpg",le="/pablocalvosanchezguia/assets/03.f69d4a17.jpg";function I(o,e,n){const r=o.slice();return r[3]=e[n],r}function q(o,e,n){const r=o.slice();return r[6]=e[n],r}function B(o){let e,n=o[6]+"",r;return{c(){e=$("p"),r=S(n)},l(t){e=b(t,"P",{});var c=E(e);r=V(c,n),c.forEach(m)},m(t,c){x(t,e,c),v(e,r)},p:Y,d(t){t&&m(e)}}}function re(o){let e;return{c(){e=S("M\xE1s informaci\xF3n")},l(n){e=V(n,"M\xE1s informaci\xF3n")},m(n,r){x(n,e,r)},d(n){n&&m(e)}}}function T(o){let e,n,r=o[3].title+"",t,c,a,l,s,p,d,f=o[3].description,u=[];for(let i=0;i<f.length;i+=1)u[i]=B(q(o,f,i));return s=new ae({props:{$$slots:{default:[re]},$$scope:{ctx:o}}}),{c(){e=$("div"),n=$("h2"),t=S(r),c=D(),a=$("div");for(let i=0;i<u.length;i+=1)u[i].c();l=D(),N(s.$$.fragment),p=D(),this.h()},l(i){e=b(i,"DIV",{class:!0});var _=E(e);n=b(_,"H2",{class:!0});var w=E(n);t=V(w,r),w.forEach(m),c=P(_),a=b(_,"DIV",{class:!0});var h=E(a);for(let j=0;j<u.length;j+=1)u[j].l(h);h.forEach(m),l=P(_),G(s.$$.fragment,_),p=P(_),_.forEach(m),this.h()},h(){g(n,"class","text-2xl"),g(a,"class","flex-1 mb-8"),g(e,"class","ps--slide flex flex-col gap-4 p-8 w-20 text-white")},m(i,_){x(i,e,_),v(e,n),v(n,t),v(e,c),v(e,a);for(let w=0;w<u.length;w+=1)u[w].m(a,null);v(e,l),H(s,e,null),v(e,p),d=!0},p(i,_){if(_&2){f=i[3].description;let h;for(h=0;h<f.length;h+=1){const j=q(i,f,h);u[h]?u[h].p(j,_):(u[h]=B(j),u[h].c(),u[h].m(a,null))}for(;h<u.length;h+=1)u[h].d(1);u.length=f.length}const w={};_&512&&(w.$$scope={dirty:_,ctx:i}),s.$set(w)},i(i){d||(C(s.$$.fragment,i),d=!0)},o(i){k(s.$$.fragment,i),d=!1},d(i){i&&m(e),L(u,i),F(s)}}}function ne(o){let e,n,r=o[1],t=[];for(let a=0;a<r.length;a+=1)t[a]=T(I(o,r,a));const c=a=>k(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=z()},l(a){for(let l=0;l<t.length;l+=1)t[l].l(a);e=z()},m(a,l){for(let s=0;s<t.length;s+=1)t[s].m(a,l);x(a,e,l),n=!0},p(a,l){if(l&2){r=a[1];let s;for(s=0;s<r.length;s+=1){const p=I(a,r,s);t[s]?(t[s].p(p,l),C(t[s],1)):(t[s]=T(p),t[s].c(),C(t[s],1),t[s].m(e.parentNode,e))}for(W(),s=r.length;s<t.length;s+=1)c(s);X()}},i(a){if(!n){for(let l=0;l<r.length;l+=1)C(t[l]);n=!0}},o(a){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)k(t[l]);n=!1},d(a){L(t,a),a&&m(e)}}}function oe(o){let e,n,r,t,c,a,l,s,p;return s=new Q({props:{arrows:!1,$$slots:{default:[ne]},$$scope:{ctx:o}}}),s.$on("pageChange",o[2]),{c(){e=$("div"),n=$("div"),r=$("img"),a=D(),l=$("div"),N(s.$$.fragment),this.h()},l(d){e=b(d,"DIV",{class:!0});var f=E(e);n=b(f,"DIV",{class:!0});var u=E(n);r=b(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(m),a=P(f),l=b(f,"DIV",{class:!0});var i=E(l);G(s.$$.fragment,i),i.forEach(m),f.forEach(m),this.h()},h(){g(r,"class","w-full h-full object-cover"),y(r.src,t=o[0].image)||g(r,"src",t),g(r,"alt",c=o[0].title),g(n,"class","ps--image shrink-0 w-1/2 h-128 overflow-hidden rounded-2xl"),g(l,"class","ps--carousel-wrapper w-1/2 mt-36"),g(e,"class","ps--wrapper flex relative z-10 svelte-1r7vspp")},m(d,f){x(d,e,f),v(e,n),v(n,r),v(e,a),v(e,l),H(s,l,null),p=!0},p(d,[f]){(!p||f&1&&!y(r.src,t=d[0].image))&&g(r,"src",t),(!p||f&1&&c!==(c=d[0].title))&&g(r,"alt",c);const u={};f&512&&(u.$$scope={dirty:f,ctx:d}),s.$set(u)},i(d){p||(C(s.$$.fragment,d),p=!0)},o(d){k(s.$$.fragment,d),p=!1},d(d){d&&m(e),F(s)}}}function ie(o,e,n){const r=[{title:"Picos de Europa 2.0",description:["Todo comienza cogiendo el Telecabina de Fuente D\xE9, a partir de ah\xED la imaginaci\xF3n:","Horcados Rojos, Punta Santa Ana, Pe\xF1a Vieja, Tiro Llago-Madejuno, El Urriellu.","El mejor de los escenarios para vivir una aventura. Seis d\xEDas de m\xE1xima libertad."],image:te},{title:"El lado m\xE1s salvaje de Cavallers",description:["Entre paredes y aristas escribir\xE1s tu historia. Cinco d\xEDas donde perderemos el norte, nos asilvestraremos en busca de la m\xE1xima expresi\xF3n de libertad. Bajo nuestros pies los stanys de este incre\xEDble Parque Nacional."],image:se},{title:"Galayos: un mundo aparte",description:["Escarpadas agujas de granito como vig\xEDas del refugio Victory, velan por la seguridad de los escaladores que entre sus cumbres se enrolan en esta gran aventura. Escalar en los galayos es sin duda sin\xF3nimo de la liberaci\xF3n de la persona, una recreaci\xF3n al para\xEDso al alcance de solo unos pocos."],image:le}];let t=r.at(0);return[t,r,a=>n(0,t=r.at(a.detail))]}class de extends U{constructor(e){super(),A(this,e,ie,oe,M,{})}}export{de as default};
