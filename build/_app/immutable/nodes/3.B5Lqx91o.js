import{t as P,a as b,c as I}from"../chunks/BboG7kwl.js";import{p as w,k as l,m as c,s as v,t as S,o as y,q as L,ay as q,g as i,f as M,an as N,n as A}from"../chunks/DwHFy8MZ.js";import{d as D,s as k}from"../chunks/BUuy5B3o.js";import{i as E}from"../chunks/F3QwS6lm.js";import{M as z,a as U,e as B,i as G}from"../chunks/HL8Md41L.js";const R=!0,ge=Object.freeze(Object.defineProperty({__proto__:null,prerender:R},Symbol.toStringTag,{value:"Module"}));var V=(t,e)=>L(e,!i(e)),H=P('<div><button class="content svelte-45z0s0"><!></button></div>'),J=P('<div class="content svelte-45z0s0"><!></div>'),K=P('<div class="post svelte-45z0s0"><div class="post-header svelte-45z0s0"><div class="title svelte-45z0s0"> </div> <div class="date svelte-45z0s0"> </div></div> <!></div>');function Q(t,e){w(e,!0);let o=q(!0);var d=K(),a=l(d),m=l(a),p=l(m,!0);c(m);var g=v(m,2),x=l(g,!0);c(g),c(a);var h=v(a,2);{var u=r=>{var s=H(),n=l(s);n.__click=[V,o];var f=l(n);const T=M(()=>i(o)?e.post.shortContent:e.post.content);z(f,{get source(){return i(T)}}),c(n),c(s),S(()=>U(s,`content ${(i(o)?"remove-images":"")??""} svelte-45z0s0`)),b(r,s)},_=r=>{var s=J(),n=l(s);z(n,{get source(){return e.post.content}}),c(s),b(r,s)};E(h,r=>{var s,n;((s=e.post.content)==null?void 0:s.length)!=((n=e.post.shortContent)==null?void 0:n.length)||e.post.containsImage?r(u):r(_,!1)})}c(d),S(r=>{k(p,e.post.title),k(x,r)},[()=>e.post.date.toDateString()]),b(t,d),y()}D(["click"]);const W=`# First Test Post

First post for development purposes. Not a bit more exciting.
`,X=`# Second Test Post

Second post for development purposes. Not a bit more exciting.
`,Y=`# Third Test Post

Third post for development purposes. Not a bit more exciting.
`,Z=`# Fourth Test Post

Fourth post for development purposes. Not a bit more exciting.
`,$=`# Fifth Test Post

Fifth post for development purposes. Not a bit more exciting.
`,ee=`# Sixth Test post

This is a post for development purposes. Lorem ipsum or such.
`,te=`# Seventh Test Post

Seventh post for development purposes. Not a bit more exciting.

[<img src="http://www.google.com.au/images/nav_logo7.png">](http://google.com.au/)

blablba
`,se=`# Eighth Test Post

Eighth post for development purposes. This is a really long post.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.


Second part
`,C=300,oe=Object.assign({"/src/lib/models/blog/posts/2025-02-01.md":W,"/src/lib/models/blog/posts/2025-02-02.md":X,"/src/lib/models/blog/posts/2025-02-03.md":Y,"/src/lib/models/blog/posts/2025-02-04.md":Z,"/src/lib/models/blog/posts/2025-02-05.md":$,"/src/lib/models/blog/posts/2025-02-06.md":ee,"/src/lib/models/blog/posts/2025-02-07.md":te,"/src/lib/models/blog/posts/2025-02-08.md":se}),F=Object.entries(oe).map(([t,e])=>(e=e,{path:t,title:ie(e),date:ne(t),content:e,shortContent:ae(e),containsImage:e.includes("![")||e.includes("<img")})).sort((t,e)=>e.date.getTime()-t.date.getTime());function ie(t){const e=t.match(/^#\s*(.*)/);return e?e[1]:"Untitled"}function ne(t){const e=t.match(/(\d{4}-\d{2}-\d{2})/);if(!e)throw new Error(`Invalid filename: ${t}`);return new Date(e[1])}function ae(t){let e=t.slice(0,C);for(let o=C;o<t.length;o++)if([",",".","!","?"].includes(t[o])){e=t.slice(0,o);break}return e.length<t.length&&(e+="..."),e}function re(t,e,o){i(e)<o&&N(e)}function le(t,e){i(e)>1&&N(e,-1)}var ce=P('<div><h1>Blog</h1> <!> <div class="pagination svelte-2yzuga"><button class="svelte-2yzuga"></button> <span> </span> <button class="svelte-2yzuga"></button></div></div>');function _e(t,e){w(e,!0);const o=5,d=Math.ceil(F.length/o);let a=q(1),m=M(()=>F.slice((i(a)-1)*o,i(a)*o));var p=ce(),g=v(l(p),2);{var x=n=>{var f=I(),T=A(f);B(T,17,()=>i(m),G,(O,j)=>{Q(O,{get post(){return i(j)}})}),b(n,f)};E(g,n=>{i(m).length>0&&n(x)})}var h=v(g,2),u=l(h);u.__click=[le,a],u.textContent="<";var _=v(u,2),r=l(_);c(_);var s=v(_,2);s.__click=[re,a,d],s.textContent=">",c(h),c(p),S(()=>{u.disabled=i(a)===1,k(r,`Page ${i(a)??""} of ${d??""}`),s.disabled=i(a)===d}),b(t,p),y()}D(["click"]);export{_e as component,ge as universal};
