import{t as P,a as b,c as I}from"../chunks/BboG7kwl.js";import{p as M,k as l,m as c,s as v,t as T,o as w,q as L,ay as q,g as i,f as N,an as D,n as A}from"../chunks/DwHFy8MZ.js";import{d as E,s as S}from"../chunks/BUuy5B3o.js";import{i as O}from"../chunks/F3QwS6lm.js";import{M as C,a as U,e as B,i as G}from"../chunks/HL8Md41L.js";const J=!0,ge=Object.freeze(Object.defineProperty({__proto__:null,prerender:J},Symbol.toStringTag,{value:"Module"}));var R=(t,e)=>L(e,!i(e)),V=P('<div><button class="content svelte-c5mdsk"><!></button></div>'),H=P('<div class="content svelte-c5mdsk"><!></div>'),K=P('<div class="post svelte-c5mdsk"><div class="post-header svelte-c5mdsk"><div class="title svelte-c5mdsk"> </div> <div class="date svelte-c5mdsk"> </div></div> <!></div>');function Q(t,e){M(e,!0);let s=q(!0);var d=K(),n=l(d),m=l(n),p=l(m,!0);c(m);var g=v(m,2),x=l(g,!0);c(g),c(n);var h=v(n,2);{var u=r=>{var o=V(),a=l(o);a.__click=[R,s];var f=l(a);const k=N(()=>i(s)?e.post.shortContent:e.post.content);C(f,{get source(){return i(k)}}),c(a),c(o),T(()=>U(o,`content ${(i(s)?"remove-images":"")??""} svelte-c5mdsk`)),b(r,o)},_=r=>{var o=H(),a=l(o);C(a,{get source(){return e.post.content}}),c(o),b(r,o)};O(h,r=>{var o,a;((o=e.post.content)==null?void 0:o.length)!=((a=e.post.shortContent)==null?void 0:a.length)||e.post.containsImage?r(u):r(_,!1)})}c(d),T(r=>{S(p,e.post.title),S(x,r)},[()=>e.post.date.toDateString()]),b(t,d),w()}E(["click"]);const W=`# First Test Post

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

| Month    | Savings |
| :------- | ------: |
| January  |    $250 |
| February |     $80 |
| March    |    $420 |
`,te=`# Seventh Test Post

Seventh post for development purposes. Not a bit more exciting.

[<img src="http://www.google.com.au/images/nav_logo7.png">](http://google.com.au/)

blablba
`,se=`# Eighth Test Post

Eighth post for development purposes. This is a really long post.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.


Second part
`,y=300,oe=Object.assign({"/src/lib/models/blog/posts/2025-02-01.md":W,"/src/lib/models/blog/posts/2025-02-02.md":X,"/src/lib/models/blog/posts/2025-02-03.md":Y,"/src/lib/models/blog/posts/2025-02-04.md":Z,"/src/lib/models/blog/posts/2025-02-05.md":$,"/src/lib/models/blog/posts/2025-02-06.md":ee,"/src/lib/models/blog/posts/2025-02-07.md":te,"/src/lib/models/blog/posts/2025-02-08.md":se}),F=Object.entries(oe).map(([t,e])=>{var n;e=e;const s=e.includes("![")||e.includes("<img"),d=(((n=e.match(/^\|.*\|\n\|\s*[:-]+[\s\S]*\|.*\|$/gm))==null?void 0:n.length)||0)>0;return{path:t,title:ne(e),date:ie(t),content:e,shortContent:ae(e),containsImage:s||d}}).sort((t,e)=>e.date.getTime()-t.date.getTime());function ne(t){const e=t.match(/^#\s*(.*)/);return e?e[1]:"Untitled"}function ie(t){const e=t.match(/(\d{4}-\d{2}-\d{2})/);if(!e)throw new Error(`Invalid filename: ${t}`);return new Date(e[1])}function ae(t){let e=t.slice(0,y);for(let s=y;s<t.length;s++)if([",",".","!","?"].includes(t[s])){e=t.slice(0,s);break}return e.length<t.length&&(e+="..."),e}function re(t,e,s){i(e)<s&&D(e)}function le(t,e){i(e)>1&&D(e,-1)}var ce=P('<div><h1>Blog</h1> <!> <div class="pagination svelte-2yzuga"><button class="svelte-2yzuga"></button> <span> </span> <button class="svelte-2yzuga"></button></div></div>');function _e(t,e){M(e,!0);const s=5,d=Math.ceil(F.length/s);let n=q(1),m=N(()=>F.slice((i(n)-1)*s,i(n)*s));var p=ce(),g=v(l(p),2);{var x=a=>{var f=I(),k=A(f);B(k,17,()=>i(m),G,(j,z)=>{Q(j,{get post(){return i(z)}})}),b(a,f)};O(g,a=>{i(m).length>0&&a(x)})}var h=v(g,2),u=l(h);u.__click=[le,n],u.textContent="<";var _=v(u,2),r=l(_);c(_);var o=v(_,2);o.__click=[re,n,d],o.textContent=">",c(h),c(p),T(()=>{u.disabled=i(n)===1,S(r,`Page ${i(n)??""} of ${d??""}`),o.disabled=i(n)===d}),b(t,p),w()}E(["click"]);export{_e as component,ge as universal};
