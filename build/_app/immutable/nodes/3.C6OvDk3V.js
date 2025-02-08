import{t as x,a as b,c as L}from"../chunks/BboG7kwl.js";import{p as F,k as l,m as d,s as v,t as y,o as M,q as A,ay as N,g as i,f as w,an as D,n as U}from"../chunks/DwHFy8MZ.js";import{d as E,s as q}from"../chunks/BUuy5B3o.js";import{i as O}from"../chunks/F3QwS6lm.js";import{M as S,e as B,i as G}from"../chunks/HL8Md41L.js";const I=!0,pe=Object.freeze(Object.defineProperty({__proto__:null,prerender:I},Symbol.toStringTag,{value:"Module"}));var R=(t,e)=>A(e,!i(e)),V=x('<div class="content svelte-v9qp8x"><button class="content svelte-v9qp8x"><!></button></div>'),H=x('<div class="content svelte-v9qp8x"><!></div>'),J=x('<div class="post svelte-v9qp8x"><div class="post-header svelte-v9qp8x"><div class="title svelte-v9qp8x"> </div> <div class="date svelte-v9qp8x"> </div></div> <!></div>');function K(t,e){F(e,!0);let o=N(!0);var c=J(),a=l(c),u=l(a),p=l(u,!0);d(u);var _=v(u,2),P=l(_,!0);d(_),d(a);var f=v(a,2);{var m=r=>{var s=V(),n=l(s);n.__click=[R,o];var h=l(n);const T=w(()=>i(o)?e.post.shortContent:e.post.content);S(h,{get source(){return i(T)}}),d(n),d(s),b(r,s)},g=r=>{var s=H(),n=l(s);S(n,{get source(){return e.post.content}}),d(s),b(r,s)};O(f,r=>{var s,n;((s=e.post.content)==null?void 0:s.length)!=((n=e.post.shortContent)==null?void 0:n.length)?r(m):r(g,!1)})}d(c),y(r=>{q(p,e.post.title),q(P,r)},[()=>e.post.date.toDateString()]),b(t,c),M()}E(["click"]);const Q=`# First Test Post

First post for development purposes. Not a bit more exciting.
`,W=`# Second Test Post

Second post for development purposes. Not a bit more exciting.
`,X=`# Third Test Post

Third post for development purposes. Not a bit more exciting.
`,Y=`# Fourth Test Post

Fourth post for development purposes. Not a bit more exciting.
`,Z=`# Fifth Test Post

Fifth post for development purposes. Not a bit more exciting.
`,$=`# Sixth Test post

This is a post for development purposes. Lorem ipsum or such.
`,ee=`# Seventh Test Post

Seventh post for development purposes. Not a bit more exciting.
`,te=`# Eighth Test Post

Eighth post for development purposes. This is a really long post.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.


Second part
`,k=300,se=Object.assign({"/src/lib/models/blog/posts/2025-02-01.md":Q,"/src/lib/models/blog/posts/2025-02-02.md":W,"/src/lib/models/blog/posts/2025-02-03.md":X,"/src/lib/models/blog/posts/2025-02-04.md":Y,"/src/lib/models/blog/posts/2025-02-05.md":Z,"/src/lib/models/blog/posts/2025-02-06.md":$,"/src/lib/models/blog/posts/2025-02-07.md":ee,"/src/lib/models/blog/posts/2025-02-08.md":te}),C=Object.entries(se).map(([t,e])=>({path:t,title:oe(e),date:ie(t),content:e,shortContent:ne(e)})).sort((t,e)=>e.date.getTime()-t.date.getTime());function oe(t){const e=t.match(/^#\s*(.*)/);return e?e[1]:"Untitled"}function ie(t){const e=t.match(/(\d{4}-\d{2}-\d{2})/);if(!e)throw new Error(`Invalid filename: ${t}`);return new Date(e[1])}function ne(t){let e=t.slice(0,k);for(let o=k;o<t.length;o++)if([",",".","!","?"].includes(t[o])){e=t.slice(0,o);break}return e.length<t.length&&(e+="..."),e}function ae(t,e,o){i(e)<o&&D(e)}function re(t,e){i(e)>1&&D(e,-1)}var le=x('<div><h1>Blog</h1> <!> <div class="pagination svelte-2yzuga"><button class="svelte-2yzuga"></button> <span> </span> <button class="svelte-2yzuga"></button></div></div>');function _e(t,e){F(e,!0);const o=5,c=Math.ceil(C.length/o);let a=N(1),u=w(()=>C.slice((i(a)-1)*o,i(a)*o));var p=le(),_=v(l(p),2);{var P=n=>{var h=L(),T=U(h);B(T,17,()=>i(u),G,(j,z)=>{K(j,{get post(){return i(z)}})}),b(n,h)};O(_,n=>{i(u).length>0&&n(P)})}var f=v(_,2),m=l(f);m.__click=[re,a],m.textContent="<";var g=v(m,2),r=l(g);d(g);var s=v(g,2);s.__click=[ae,a,c],s.textContent=">",d(f),d(p),y(()=>{m.disabled=i(a)===1,q(r,`Page ${i(a)??""} of ${c??""}`),s.disabled=i(a)===c}),b(t,p),M()}E(["click"]);export{_e as component,pe as universal};
