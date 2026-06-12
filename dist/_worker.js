var Ot=Object.defineProperty;var Ue=e=>{throw TypeError(e)};var Ct=(e,t,r)=>t in e?Ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var u=(e,t,r)=>Ct(e,typeof t!="symbol"?t+"":t,r),Ne=(e,t,r)=>t.has(e)||Ue("Cannot "+r);var o=(e,t,r)=>(Ne(e,t,"read from private field"),r?r.call(e):t.get(e)),h=(e,t,r)=>t.has(e)?Ue("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),m=(e,t,r,a)=>(Ne(e,t,"write to private field"),a?a.call(e,r):t.set(e,r),r),v=(e,t,r)=>(Ne(e,t,"access private method"),r);var Ve=(e,t,r,a)=>({set _(s){m(e,t,s,r)},get _(){return o(e,t,a)}});var Ke=(e,t,r)=>(a,s)=>{let i=-1;return n(0);async function n(l){if(l<=i)throw new Error("next() called multiple times");i=l;let c,d=!1,p;if(e[l]?(p=e[l][0][0],a.req.routeIndex=l):p=l===e.length&&s||void 0,p)try{c=await p(a,()=>n(l+1))}catch(f){if(f instanceof Error&&t)a.error=f,c=await t(f,a),d=!0;else throw f}else a.finalized===!1&&r&&(c=await r(a));return c&&(a.finalized===!1||d)&&(a.res=c),a}},At=Symbol(),Tt=async(e,t=Object.create(null))=>{const{all:r=!1,dot:a=!1}=t,i=(e instanceof ft?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?Rt(e,{all:r,dot:a}):{}};async function Rt(e,t){const r=await e.formData();return r?zt(r,t):{}}function zt(e,t){const r=Object.create(null);return e.forEach((a,s)=>{t.all||s.endsWith("[]")?Pt(r,s,a):r[s]=a}),t.dot&&Object.entries(r).forEach(([a,s])=>{a.includes(".")&&(Ft(r,a,s),delete r[a])}),r}var Pt=(e,t,r)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(r):e[t]=[e[t],r]:t.endsWith("[]")?e[t]=[r]:e[t]=r},Ft=(e,t,r)=>{if(/(?:^|\.)__proto__\./.test(t))return;let a=e;const s=t.split(".");s.forEach((i,n)=>{n===s.length-1?a[i]=r:((!a[i]||typeof a[i]!="object"||Array.isArray(a[i])||a[i]instanceof File)&&(a[i]=Object.create(null)),a=a[i])})},ot=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Lt=e=>{const{groups:t,path:r}=It(e),a=ot(r);return Dt(a,t)},It=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(r,a)=>{const s=`@${a}`;return t.push([s,r]),s}),{groups:t,path:e}},Dt=(e,t)=>{for(let r=t.length-1;r>=0;r--){const[a]=t[r];for(let s=e.length-1;s>=0;s--)if(e[s].includes(a)){e[s]=e[s].replace(a,t[r][1]);break}}return e},Re={},Ht=(e,t)=>{if(e==="*")return"*";const r=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(r){const a=`${e}#${t}`;return Re[a]||(r[2]?Re[a]=t&&t[0]!==":"&&t[0]!=="*"?[a,r[1],new RegExp(`^${r[2]}(?=/${t})`)]:[e,r[1],new RegExp(`^${r[2]}$`)]:Re[a]=[e,r[1],!0]),Re[a]}return null},qe=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,r=>{try{return t(r)}catch{return r}})}},nt=e=>qe(e,decodeURI),lt=e=>{const t=e.url,r=t.indexOf("/",t.indexOf(":")+4);let a=r;for(;a<t.length;a++){const s=t.charCodeAt(a);if(s===37){const i=t.indexOf("?",a),n=t.indexOf("#",a),l=i===-1?n===-1?void 0:n:n===-1?i:Math.min(i,n),c=t.slice(r,l);return nt(c.includes("%25")?c.replace(/%25/g,"%2525"):c)}else if(s===63||s===35)break}return t.slice(r,a)},Mt=e=>{const t=lt(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},V=(e,t,...r)=>(r.length&&(t=V(t,...r)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),ct=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),r=[];let a="";return t.forEach(s=>{if(s!==""&&!/\:/.test(s))a+="/"+s;else if(/\:/.test(s))if(/\?/.test(s)){r.length===0&&a===""?r.push("/"):r.push(a);const i=s.replace("?","");a+="/"+i,r.push(a)}else a+="/"+s}),r.filter((s,i,n)=>n.indexOf(s)===i)},$e=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?qe(e,pt):e):e,dt=(e,t,r)=>{let a;if(!r&&t&&!/[%+]/.test(t)){let n=e.indexOf("?",8);if(n===-1)return;for(e.startsWith(t,n+1)||(n=e.indexOf(`&${t}`,n+1));n!==-1;){const l=e.charCodeAt(n+t.length+1);if(l===61){const c=n+t.length+2,d=e.indexOf("&",c);return $e(e.slice(c,d===-1?void 0:d))}else if(l==38||isNaN(l))return"";n=e.indexOf(`&${t}`,n+1)}if(a=/[%+]/.test(e),!a)return}const s={};a??(a=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const n=e.indexOf("&",i+1);let l=e.indexOf("=",i);l>n&&n!==-1&&(l=-1);let c=e.slice(i+1,l===-1?n===-1?void 0:n:l);if(a&&(c=$e(c)),i=n,c==="")continue;let d;l===-1?d="":(d=e.slice(l+1,n===-1?void 0:n),a&&(d=$e(d))),r?(s[c]&&Array.isArray(s[c])||(s[c]=[]),s[c].push(d)):s[c]??(s[c]=d)}return t?s[t]:s},Nt=dt,$t=(e,t)=>dt(e,t,!0),pt=decodeURIComponent,Je=e=>qe(e,pt),le,A,N,mt,ut,Ge,L,et,ft=(et=class{constructor(e,t="/",r=[[]]){h(this,N);u(this,"raw");h(this,le);h(this,A);u(this,"routeIndex",0);u(this,"path");u(this,"bodyCache",{});h(this,L,e=>{const{bodyCache:t,raw:r}=this,a=t[e];if(a)return a;const s=Object.keys(t)[0];return s?t[s].then(i=>(s==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=r[e]()});this.raw=e,this.path=t,m(this,A,r),m(this,le,{})}param(e){return e?v(this,N,mt).call(this,e):v(this,N,ut).call(this)}query(e){return Nt(this.url,e)}queries(e){return $t(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((r,a)=>{t[a]=r}),t}async parseBody(e){return Tt(this,e)}json(){return o(this,L).call(this,"text").then(e=>JSON.parse(e))}text(){return o(this,L).call(this,"text")}arrayBuffer(){return o(this,L).call(this,"arrayBuffer")}bytes(){return o(this,L).call(this,"arrayBuffer").then(e=>new Uint8Array(e))}blob(){return o(this,L).call(this,"blob")}formData(){return o(this,L).call(this,"formData")}addValidatedData(e,t){o(this,le)[e]=t}valid(e){return o(this,le)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[At](){return o(this,A)}get matchedRoutes(){return o(this,A)[0].map(([[,e]])=>e)}get routePath(){return o(this,A)[0].map(([[,e]])=>e)[this.routeIndex].path}},le=new WeakMap,A=new WeakMap,N=new WeakSet,mt=function(e){const t=o(this,A)[0][this.routeIndex][1][e],r=v(this,N,Ge).call(this,t);return r&&/\%/.test(r)?Je(r):r},ut=function(){const e={},t=Object.keys(o(this,A)[0][this.routeIndex][1]);for(const r of t){const a=v(this,N,Ge).call(this,o(this,A)[0][this.routeIndex][1][r]);a!==void 0&&(e[r]=/\%/.test(a)?Je(a):a)}return e},Ge=function(e){return o(this,A)[1]?o(this,A)[1][e]:e},L=new WeakMap,et),Wt={Stringify:1},ht=async(e,t,r,a,s)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(s?s[0]+=e:s=[e],Promise.all(i.map(l=>l({phase:t,buffer:s,context:a}))).then(l=>Promise.all(l.filter(Boolean).map(c=>ht(c,t,!1,a,s))).then(()=>s[0]))):Promise.resolve(e)},Gt="text/plain; charset=UTF-8",We=(e,t)=>({"Content-Type":e,...t}),be=(e,t)=>new Response(e,t),ke,je,I,ce,D,O,Ee,de,pe,X,Se,Be,W,oe,tt,qt=(tt=class{constructor(e,t){h(this,W);h(this,ke);h(this,je);u(this,"env",{});h(this,I);u(this,"finalized",!1);u(this,"error");h(this,ce);h(this,D);h(this,O);h(this,Ee);h(this,de);h(this,pe);h(this,X);h(this,Se);h(this,Be);u(this,"render",(...e)=>(o(this,de)??m(this,de,t=>this.html(t)),o(this,de).call(this,...e)));u(this,"setLayout",e=>m(this,Ee,e));u(this,"getLayout",()=>o(this,Ee));u(this,"setRenderer",e=>{m(this,de,e)});u(this,"header",(e,t,r)=>{this.finalized&&m(this,O,be(o(this,O).body,o(this,O)));const a=o(this,O)?o(this,O).headers:o(this,X)??m(this,X,new Headers);t===void 0?a.delete(e):r!=null&&r.append?a.append(e,t):a.set(e,t)});u(this,"status",e=>{m(this,ce,e)});u(this,"set",(e,t)=>{o(this,I)??m(this,I,new Map),o(this,I).set(e,t)});u(this,"get",e=>o(this,I)?o(this,I).get(e):void 0);u(this,"newResponse",(...e)=>v(this,W,oe).call(this,...e));u(this,"body",(e,t,r)=>v(this,W,oe).call(this,e,t,r));u(this,"text",(e,t,r)=>!o(this,X)&&!o(this,ce)&&!t&&!r&&!this.finalized?new Response(e):v(this,W,oe).call(this,e,t,We(Gt,r)));u(this,"json",(e,t,r)=>v(this,W,oe).call(this,JSON.stringify(e),t,We("application/json",r)));u(this,"html",(e,t,r)=>{const a=s=>v(this,W,oe).call(this,s,t,We("text/html; charset=UTF-8",r));return typeof e=="object"?ht(e,Wt.Stringify,!1,{}).then(a):a(e)});u(this,"redirect",(e,t)=>{const r=String(e);return this.header("Location",/[^\x00-\xFF]/.test(r)?encodeURI(r):r),this.newResponse(null,t??302)});u(this,"notFound",()=>(o(this,pe)??m(this,pe,()=>be()),o(this,pe).call(this,this)));m(this,ke,e),t&&(m(this,D,t.executionCtx),this.env=t.env,m(this,pe,t.notFoundHandler),m(this,Be,t.path),m(this,Se,t.matchResult))}get req(){return o(this,je)??m(this,je,new ft(o(this,ke),o(this,Be),o(this,Se))),o(this,je)}get event(){if(o(this,D)&&"respondWith"in o(this,D))return o(this,D);throw Error("This context has no FetchEvent")}get executionCtx(){if(o(this,D))return o(this,D);throw Error("This context has no ExecutionContext")}get res(){return o(this,O)||m(this,O,be(null,{headers:o(this,X)??m(this,X,new Headers)}))}set res(e){if(o(this,O)&&e){e=be(e.body,e);for(const[t,r]of o(this,O).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const a=o(this,O).headers.getSetCookie();e.headers.delete("set-cookie");for(const s of a)e.headers.append("set-cookie",s)}else e.headers.set(t,r)}m(this,O,e),this.finalized=!0}get var(){return o(this,I)?Object.fromEntries(o(this,I)):{}}},ke=new WeakMap,je=new WeakMap,I=new WeakMap,ce=new WeakMap,D=new WeakMap,O=new WeakMap,Ee=new WeakMap,de=new WeakMap,pe=new WeakMap,X=new WeakMap,Se=new WeakMap,Be=new WeakMap,W=new WeakSet,oe=function(e,t,r){const a=o(this,O)?new Headers(o(this,O).headers):o(this,X)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[n,l]of i)n.toLowerCase()==="set-cookie"?a.append(n,l):a.set(n,l)}if(r)for(const[i,n]of Object.entries(r))if(typeof n=="string")a.set(i,n);else{a.delete(i);for(const l of n)a.append(i,l)}const s=typeof t=="number"?t:(t==null?void 0:t.status)??o(this,ce);return be(e,{status:s,headers:a})},tt),w="ALL",_t="all",Yt=["get","post","put","delete","options","patch"],gt="Can not add a route since the matcher is already built.",vt=class extends Error{},Ut="__COMPOSED_HANDLER",Vt=e=>e.text("404 Not Found",404),Xe=(e,t)=>{if("getResponse"in e){const r=e.getResponse();return t.newResponse(r.body,r)}return console.error(e),t.text("Internal Server Error",500)},T,k,bt,R,K,ze,Pe,fe,Kt=(fe=class{constructor(t={}){h(this,k);u(this,"get");u(this,"post");u(this,"put");u(this,"delete");u(this,"options");u(this,"patch");u(this,"all");u(this,"on");u(this,"use");u(this,"router");u(this,"getPath");u(this,"_basePath","/");h(this,T,"/");u(this,"routes",[]);h(this,R,Vt);u(this,"errorHandler",Xe);u(this,"onError",t=>(this.errorHandler=t,this));u(this,"notFound",t=>(m(this,R,t),this));u(this,"fetch",(t,...r)=>v(this,k,Pe).call(this,t,r[1],r[0],t.method));u(this,"request",(t,r,a,s)=>t instanceof Request?this.fetch(r?new Request(t,r):t,a,s):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${V("/",t)}`,r),a,s)));u(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(v(this,k,Pe).call(this,t.request,t,void 0,t.request.method))})});[...Yt,_t].forEach(i=>{this[i]=(n,...l)=>(typeof n=="string"?m(this,T,n):v(this,k,K).call(this,i,o(this,T),n),l.forEach(c=>{v(this,k,K).call(this,i,o(this,T),c)}),this)}),this.on=(i,n,...l)=>{for(const c of[n].flat()){m(this,T,c);for(const d of[i].flat())l.map(p=>{v(this,k,K).call(this,d.toUpperCase(),o(this,T),p)})}return this},this.use=(i,...n)=>(typeof i=="string"?m(this,T,i):(m(this,T,"*"),n.unshift(i)),n.forEach(l=>{v(this,k,K).call(this,w,o(this,T),l)}),this);const{strict:a,...s}=t;Object.assign(this,s),this.getPath=a??!0?t.getPath??lt:Mt}route(t,r){const a=this.basePath(t);return r.routes.map(s=>{var n;let i;r.errorHandler===Xe?i=s.handler:(i=async(l,c)=>(await Ke([],r.errorHandler)(l,()=>s.handler(l,c))).res,i[Ut]=s.handler),v(n=a,k,K).call(n,s.method,s.path,i,s.basePath)}),this}basePath(t){const r=v(this,k,bt).call(this);return r._basePath=V(this._basePath,t),r}mount(t,r,a){let s,i;a&&(typeof a=="function"?i=a:(i=a.optionHandler,a.replaceRequest===!1?s=c=>c:s=a.replaceRequest));const n=i?c=>{const d=i(c);return Array.isArray(d)?d:[d]}:c=>{let d;try{d=c.executionCtx}catch{}return[c.env,d]};s||(s=(()=>{const c=V(this._basePath,t),d=c==="/"?0:c.length;return p=>{const f=new URL(p.url);return f.pathname=this.getPath(p).slice(d)||"/",new Request(f,p)}})());const l=async(c,d)=>{const p=await r(s(c.req.raw),...n(c));if(p)return p;await d()};return v(this,k,K).call(this,w,V(t,"*"),l),this}},T=new WeakMap,k=new WeakSet,bt=function(){const t=new fe({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,m(t,R,o(this,R)),t.routes=this.routes,t},R=new WeakMap,K=function(t,r,a,s){t=t.toUpperCase(),r=V(this._basePath,r);const i={basePath:s!==void 0?V(this._basePath,s):this._basePath,path:r,method:t,handler:a};this.router.add(t,r,[a,i]),this.routes.push(i)},ze=function(t,r){if(t instanceof Error)return this.errorHandler(t,r);throw t},Pe=function(t,r,a,s){if(s==="HEAD")return(async()=>new Response(null,await v(this,k,Pe).call(this,t,r,a,"GET")))();const i=this.getPath(t,{env:a}),n=this.router.match(s,i),l=new qt(t,{path:i,matchResult:n,env:a,executionCtx:r,notFoundHandler:o(this,R)});if(n[0].length===1){let d;try{d=n[0][0][0][0](l,async()=>{l.res=await o(this,R).call(this,l)})}catch(p){return v(this,k,ze).call(this,p,l)}return d instanceof Promise?d.then(p=>p||(l.finalized?l.res:o(this,R).call(this,l))).catch(p=>v(this,k,ze).call(this,p,l)):d??o(this,R).call(this,l)}const c=Ke(n[0],this.errorHandler,o(this,R));return(async()=>{try{const d=await c(l);if(!d.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return d.res}catch(d){return v(this,k,ze).call(this,d,l)}})()},fe),xt=[];function Jt(e,t){const r=this.buildAllMatchers(),a=((s,i)=>{const n=r[s]||r[w],l=n[2][i];if(l)return l;const c=i.match(n[0]);if(!c)return[[],xt];const d=c.indexOf("",1);return[n[1][d],c]});return this.match=a,a(e,t)}var Le="[^/]+",ye=".*",we="(?:|/.*)",ne=Symbol(),Xt=new Set(".\\+*[^]$()");function Qt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===ye||e===we?1:t===ye||t===we?-1:e===Le?1:t===Le?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Q,Z,z,re,Zt=(re=class{constructor(){h(this,Q);h(this,Z);h(this,z,Object.create(null))}insert(t,r,a,s,i){if(t.length===0){if(o(this,Q)!==void 0)throw ne;if(i)return;m(this,Q,r);return}const[n,...l]=t,c=n==="*"?l.length===0?["","",ye]:["","",Le]:n==="/*"?["","",we]:n.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let d;if(c){const p=c[1];let f=c[2]||Le;if(p&&c[2]&&(f===".*"||(f=f.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(f))))throw ne;if(d=o(this,z)[f],!d){if(Object.keys(o(this,z)).some(g=>g!==ye&&g!==we))throw ne;if(i)return;d=o(this,z)[f]=new re,p!==""&&m(d,Z,s.varIndex++)}!i&&p!==""&&a.push([p,o(d,Z)])}else if(d=o(this,z)[n],!d){if(Object.keys(o(this,z)).some(p=>p.length>1&&p!==ye&&p!==we))throw ne;if(i)return;d=o(this,z)[n]=new re}d.insert(l,r,a,s,i)}buildRegExpStr(){const r=Object.keys(o(this,z)).sort(Qt).map(a=>{const s=o(this,z)[a];return(typeof o(s,Z)=="number"?`(${a})@${o(s,Z)}`:Xt.has(a)?`\\${a}`:a)+s.buildRegExpStr()});return typeof o(this,Q)=="number"&&r.unshift(`#${o(this,Q)}`),r.length===0?"":r.length===1?r[0]:"(?:"+r.join("|")+")"}},Q=new WeakMap,Z=new WeakMap,z=new WeakMap,re),Ie,Oe,rt,er=(rt=class{constructor(){h(this,Ie,{varIndex:0});h(this,Oe,new Zt)}insert(e,t,r){const a=[],s=[];for(let n=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{const d=`@\\${n}`;return s[n]=[d,c],n++,l=!0,d}),!l)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let n=s.length-1;n>=0;n--){const[l]=s[n];for(let c=i.length-1;c>=0;c--)if(i[c].indexOf(l)!==-1){i[c]=i[c].replace(l,s[n][1]);break}}return o(this,Oe).insert(i,t,a,o(this,Ie),r),a}buildRegExp(){let e=o(this,Oe).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const r=[],a=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(s,i,n)=>i!==void 0?(r[++t]=Number(i),"$()"):(n!==void 0&&(a[Number(n)]=++t),"")),[new RegExp(`^${e}`),r,a]}},Ie=new WeakMap,Oe=new WeakMap,rt),tr=[/^$/,[],Object.create(null)],Fe=Object.create(null);function yt(e){return Fe[e]??(Fe[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,r)=>r?`\\${r}`:"(?:|/.*)")}$`))}function rr(){Fe=Object.create(null)}function ar(e){var d;const t=new er,r=[];if(e.length===0)return tr;const a=e.map(p=>[!/\*|\/:/.test(p[0]),...p]).sort(([p,f],[g,x])=>p?1:g?-1:f.length-x.length),s=Object.create(null);for(let p=0,f=-1,g=a.length;p<g;p++){const[x,b,j]=a[p];x?s[b]=[j.map(([C])=>[C,Object.create(null)]),xt]:f++;let E;try{E=t.insert(b,f,x)}catch(C){throw C===ne?new vt(b):C}x||(r[f]=j.map(([C,y])=>{const P=Object.create(null);for(y-=1;y>=0;y--){const[he,He]=E[y];P[he]=He}return[C,P]}))}const[i,n,l]=t.buildRegExp();for(let p=0,f=r.length;p<f;p++)for(let g=0,x=r[p].length;g<x;g++){const b=(d=r[p][g])==null?void 0:d[1];if(!b)continue;const j=Object.keys(b);for(let E=0,C=j.length;E<C;E++)b[j[E]]=l[b[j[E]]]}const c=[];for(const p in n)c[p]=r[n[p]];return[i,c,s]}function ie(e,t){if(e){for(const r of Object.keys(e).sort((a,s)=>s.length-a.length))if(yt(r).test(t))return[...e[r]]}}var G,q,De,wt,at,sr=(at=class{constructor(){h(this,De);u(this,"name","RegExpRouter");h(this,G);h(this,q);u(this,"match",Jt);m(this,G,{[w]:Object.create(null)}),m(this,q,{[w]:Object.create(null)})}add(e,t,r){var l;const a=o(this,G),s=o(this,q);if(!a||!s)throw new Error(gt);a[e]||[a,s].forEach(c=>{c[e]=Object.create(null),Object.keys(c[w]).forEach(d=>{c[e][d]=[...c[w][d]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const c=yt(t);e===w?Object.keys(a).forEach(d=>{var p;(p=a[d])[t]||(p[t]=ie(a[d],t)||ie(a[w],t)||[])}):(l=a[e])[t]||(l[t]=ie(a[e],t)||ie(a[w],t)||[]),Object.keys(a).forEach(d=>{(e===w||e===d)&&Object.keys(a[d]).forEach(p=>{c.test(p)&&a[d][p].push([r,i])})}),Object.keys(s).forEach(d=>{(e===w||e===d)&&Object.keys(s[d]).forEach(p=>c.test(p)&&s[d][p].push([r,i]))});return}const n=ct(t)||[t];for(let c=0,d=n.length;c<d;c++){const p=n[c];Object.keys(s).forEach(f=>{var g;(e===w||e===f)&&((g=s[f])[p]||(g[p]=[...ie(a[f],p)||ie(a[w],p)||[]]),s[f][p].push([r,i-d+c+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(o(this,q)).concat(Object.keys(o(this,G))).forEach(t=>{e[t]||(e[t]=v(this,De,wt).call(this,t))}),m(this,G,m(this,q,void 0)),rr(),e}},G=new WeakMap,q=new WeakMap,De=new WeakSet,wt=function(e){const t=[];let r=e===w;return[o(this,G),o(this,q)].forEach(a=>{const s=a[e]?Object.keys(a[e]).map(i=>[i,a[e][i]]):[];s.length!==0?(r||(r=!0),t.push(...s)):e!==w&&t.push(...Object.keys(a[w]).map(i=>[i,a[w][i]]))}),r?ar(t):null},at),_,H,st,ir=(st=class{constructor(e){u(this,"name","SmartRouter");h(this,_,[]);h(this,H,[]);m(this,_,e.routers)}add(e,t,r){if(!o(this,H))throw new Error(gt);o(this,H).push([e,t,r])}match(e,t){if(!o(this,H))throw new Error("Fatal error");const r=o(this,_),a=o(this,H),s=r.length;let i=0,n;for(;i<s;i++){const l=r[i];try{for(let c=0,d=a.length;c<d;c++)l.add(...a[c]);n=l.match(e,t)}catch(c){if(c instanceof vt)continue;throw c}this.match=l.match.bind(l),m(this,_,[l]),m(this,H,void 0);break}if(i===s)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,n}get activeRouter(){if(o(this,H)||o(this,_).length!==1)throw new Error("No active router has been determined yet.");return o(this,_)[0]}},_=new WeakMap,H=new WeakMap,st),xe=Object.create(null),or=e=>{for(const t in e)return!0;return!1},Y,B,ee,me,S,M,J,ue,nr=(ue=class{constructor(t,r,a){h(this,M);h(this,Y);h(this,B);h(this,ee);h(this,me,0);h(this,S,xe);if(m(this,B,a||Object.create(null)),m(this,Y,[]),t&&r){const s=Object.create(null);s[t]={handler:r,possibleKeys:[],score:0},m(this,Y,[s])}m(this,ee,[])}insert(t,r,a){m(this,me,++Ve(this,me)._);let s=this;const i=Lt(r),n=[];for(let l=0,c=i.length;l<c;l++){const d=i[l],p=i[l+1],f=Ht(d,p),g=Array.isArray(f)?f[0]:d;if(g in o(s,B)){s=o(s,B)[g],f&&n.push(f[1]);continue}o(s,B)[g]=new ue,f&&(o(s,ee).push(f),n.push(f[1])),s=o(s,B)[g]}return o(s,Y).push({[t]:{handler:a,possibleKeys:n.filter((l,c,d)=>d.indexOf(l)===c),score:o(this,me)}}),s}search(t,r){var p;const a=[];m(this,S,xe);let i=[this];const n=ot(r),l=[],c=n.length;let d=null;for(let f=0;f<c;f++){const g=n[f],x=f===c-1,b=[];for(let E=0,C=i.length;E<C;E++){const y=i[E],P=o(y,B)[g];P&&(m(P,S,o(y,S)),x?(o(P,B)["*"]&&v(this,M,J).call(this,a,o(P,B)["*"],t,o(y,S)),v(this,M,J).call(this,a,P,t,o(y,S))):b.push(P));for(let he=0,He=o(y,ee).length;he<He;he++){const _e=o(y,ee)[he],$=o(y,S)===xe?{}:{...o(y,S)};if(_e==="*"){const ae=o(y,B)["*"];ae&&(v(this,M,J).call(this,a,ae,t,o(y,S)),m(ae,S,$),b.push(ae));continue}const[Bt,Ye,ge]=_e;if(!g&&!(ge instanceof RegExp))continue;const F=o(y,B)[Bt];if(ge instanceof RegExp){if(d===null){d=new Array(c);let se=r[0]==="/"?1:0;for(let ve=0;ve<c;ve++)d[ve]=se,se+=n[ve].length+1}const ae=r.substring(d[f]),Me=ge.exec(ae);if(Me){if($[Ye]=Me[0],v(this,M,J).call(this,a,F,t,o(y,S),$),or(o(F,B))){m(F,S,$);const se=((p=Me[0].match(/\//))==null?void 0:p.length)??0;(l[se]||(l[se]=[])).push(F)}continue}}(ge===!0||ge.test(g))&&($[Ye]=g,x?(v(this,M,J).call(this,a,F,t,$,o(y,S)),o(F,B)["*"]&&v(this,M,J).call(this,a,o(F,B)["*"],t,$,o(y,S))):(m(F,S,$),b.push(F)))}}const j=l.shift();i=j?b.concat(j):b}return a.length>1&&a.sort((f,g)=>f.score-g.score),[a.map(({handler:f,params:g})=>[f,g])]}},Y=new WeakMap,B=new WeakMap,ee=new WeakMap,me=new WeakMap,S=new WeakMap,M=new WeakSet,J=function(t,r,a,s,i){for(let n=0,l=o(r,Y).length;n<l;n++){const c=o(r,Y)[n],d=c[a]||c[w],p={};if(d!==void 0&&(d.params=Object.create(null),t.push(d),s!==xe||i&&i!==xe))for(let f=0,g=d.possibleKeys.length;f<g;f++){const x=d.possibleKeys[f],b=p[d.score];d.params[x]=i!=null&&i[x]&&!b?i[x]:s[x]??(i==null?void 0:i[x]),p[d.score]=!0}}},ue),te,it,lr=(it=class{constructor(){u(this,"name","TrieRouter");h(this,te);m(this,te,new nr)}add(e,t,r){const a=ct(t);if(a){for(let s=0,i=a.length;s<i;s++)o(this,te).insert(e,a[s],r);return}o(this,te).insert(e,t,r)}match(e,t){return o(this,te).search(e,t)}},te=new WeakMap,it),kt=class extends Kt{constructor(e={}){super(e),this.router=e.router??new ir({routers:[new sr,new lr]})}},cr=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|msgpack|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|vnd\.msgpack|wasm|x-httpd-php|x-javascript|x-msgpack|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml|msgpack))(?:[;\s]|$)/i,Qe=(e,t=pr)=>{const r=/\.([a-zA-Z0-9]+?)$/,a=e.match(r);if(a)return t[a[1].toLowerCase()]},dr={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css; charset=utf-8",csv:"text/csv; charset=utf-8",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html; charset=utf-8",html:"text/html; charset=utf-8",ico:"image/x-icon",ics:"text/calendar; charset=utf-8",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript; charset=utf-8",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript; charset=utf-8",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml; charset=utf-8",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain; charset=utf-8",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml; charset=utf-8",xml:"application/xml; charset=utf-8",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},pr=dr,fr=(...e)=>{let t=e.filter(s=>s!=="").join("/");t=t.replace(new RegExp("(?<=\\/)\\/+","g"),"");const r=t.split("/"),a=[];for(const s of r)s===".."&&a.length>0&&a.at(-1)!==".."?a.pop():s!=="."&&a.push(s);return a.join("/")||"."},jt={br:".br",zstd:".zst",gzip:".gz"},mr=Object.keys(jt),ur="index.html",hr=e=>{const t=e.root??"./",r=e.path,a=e.join??fr;return async(s,i)=>{var p,f,g,x;if(s.finalized)return i();let n;if(e.path)n=e.path;else try{if(n=nt(s.req.path),/(?:^|[\/\\])\.{1,2}(?:$|[\/\\])|[\/\\]{2,}/.test(n))throw new Error}catch{return await((p=e.onNotFound)==null?void 0:p.call(e,s.req.path,s)),i()}let l=a(t,!r&&e.rewriteRequestPath?e.rewriteRequestPath(n):n);e.isDir&&await e.isDir(l)&&(l=a(l,ur));const c=e.getContent;let d=await c(l,s);if(d instanceof Response)return s.newResponse(d.body,d);if(d){const b=e.mimes&&Qe(l,e.mimes)||Qe(l);if(s.header("Content-Type",b||"application/octet-stream"),e.precompressed&&(!b||cr.test(b))){const j=new Set((f=s.req.header("Accept-Encoding"))==null?void 0:f.split(",").map(E=>E.trim()));for(const E of mr){if(!j.has(E))continue;const C=await c(l+jt[E],s);if(C){d=C,s.header("Content-Encoding",E),s.header("Vary","Accept-Encoding",{append:!0});break}}}return await((g=e.onFound)==null?void 0:g.call(e,l,s)),s.body(d)}await((x=e.onNotFound)==null?void 0:x.call(e,l,s)),await i()}},gr=async(e,t)=>{let r;t&&t.manifest?typeof t.manifest=="string"?r=JSON.parse(t.manifest):r=t.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?r=JSON.parse(__STATIC_CONTENT_MANIFEST):r=__STATIC_CONTENT_MANIFEST;let a;t&&t.namespace?a=t.namespace:a=__STATIC_CONTENT;const s=r[e];if(!s)return null;const i=await a.get(s,{type:"stream"});return i||null},vr=(e={})=>async function(r,a){return hr({...e,getContent:async i=>gr(i,{manifest:e.manifest,namespace:e.namespace?e.namespace:r.env?r.env.__STATIC_CONTENT:void 0})})(r,a)},br=e=>vr(e);const U=new kt;U.use("/static/*",br({root:"./public"}));U.get("/",e=>e.html(xr()));U.get("/about",e=>e.html(yr()));U.get("/projects",e=>e.html(Et()));U.get("/projects/:slug",e=>{const t=e.req.param("slug"),r=kr(t);return r?e.html(r):e.html(Et())});U.get("/contact",e=>e.html(jr()));U.post("/api/contact",async e=>{const t=await e.req.json();return console.log("Contact form submission:",t),e.json({success:!0,message:"Thank you for your enquiry. We will be in touch shortly."})});function Ce(e){return`
  <nav id="main-nav" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500" style="background: transparent;">
    <div class="nav-inner max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
      <a href="/" class="logo-link flex flex-col items-start group">
        <span class="logo-arte text-2xl font-light tracking-[0.25em] uppercase transition-colors duration-300" style="color: #7B8EB9; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.6rem; letter-spacing: 0.3em;">ARTé</span>
        <span class="logo-tagline text-xs tracking-[0.35em] uppercase transition-colors duration-300" style="color: #7B8EB9; font-size: 0.6rem; letter-spacing: 0.4em; margin-top: -2px;">THE LIVING STANDARD</span>
      </a>
      
      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-12">
        <a href="/" class="nav-link text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${e==="home"?"nav-active":""}" style="font-family: 'Inter', sans-serif;">Home</a>
        <a href="/about" class="nav-link text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${e==="about"?"nav-active":""}" style="font-family: 'Inter', sans-serif;">About</a>
        <a href="/projects" class="nav-link text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${e==="projects"?"nav-active":""}" style="font-family: 'Inter', sans-serif;">Projects</a>
        <a href="/contact" class="nav-cta text-xs tracking-[0.2em] uppercase px-6 py-3 border transition-all duration-300 hover:scale-105" style="font-family: 'Inter', sans-serif; border-color: #7B8EB9; color: #7B8EB9;">Enquire</a>
      </div>
      
      <!-- Mobile Menu Button -->
      <button id="mobile-menu-btn" class="md:hidden flex flex-col gap-1.5 p-2" aria-label="Open menu">
        <span class="menu-bar block w-6 h-px transition-all duration-300" style="background: #7B8EB9;"></span>
        <span class="menu-bar block w-4 h-px transition-all duration-300" style="background: #7B8EB9;"></span>
        <span class="menu-bar block w-6 h-px transition-all duration-300" style="background: #7B8EB9;"></span>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden" style="background: rgba(255,255,255,0.98); border-top: 1px solid #e8e4df;">
      <div class="px-8 py-6 flex flex-col gap-6">
        <a href="/" class="text-xs tracking-[0.25em] uppercase" style="color: #2C2C2C; font-family: 'Inter', sans-serif;">Home</a>
        <a href="/about" class="text-xs tracking-[0.25em] uppercase" style="color: #2C2C2C; font-family: 'Inter', sans-serif;">About</a>
        <a href="/projects" class="text-xs tracking-[0.25em] uppercase" style="color: #2C2C2C; font-family: 'Inter', sans-serif;">Projects</a>
        <a href="/contact" class="text-xs tracking-[0.25em] uppercase" style="color: #7B8EB9; font-family: 'Inter', sans-serif;">Enquire</a>
      </div>
    </div>
  </nav>
  `}function Ae(e,t){return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${e} — ARTé | The Living Standard</title>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' fill='%237B8EB9'>A</text></svg>">
    <meta name="description" content="${t}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <style>
      :root {
        --arte-blue: #7B8EB9;
        --arte-blue-light: #A8B5D1;
        --arte-blue-dark: #5A6E99;
        --arte-cream: #FAF9F7;
        --arte-warm: #F5F0EA;
        --arte-charcoal: #2C2C2C;
        --arte-mid: #6B6B6B;
        --arte-border: #E8E4DF;
      }
      
      * { margin: 0; padding: 0; box-sizing: border-box; }
      
      html { scroll-behavior: smooth; }
      
      body {
        background: var(--arte-cream);
        color: var(--arte-charcoal);
        font-family: 'Inter', sans-serif;
        font-weight: 300;
        line-height: 1.7;
        -webkit-font-smoothing: antialiased;
      }
      
      /* ── Navigation ── */
      #main-nav.scrolled {
        background: rgba(250, 249, 247, 0.97) !important;
        border-bottom: 1px solid var(--arte-border);
        box-shadow: 0 2px 30px rgba(0,0,0,0.05);
      }
      #main-nav.scrolled .nav-link,
      #main-nav.scrolled .logo-arte,
      #main-nav.scrolled .logo-tagline {
        color: var(--arte-charcoal) !important;
      }
      #main-nav.scrolled .nav-link:hover { color: var(--arte-blue) !important; }
      #main-nav.scrolled .nav-cta { border-color: var(--arte-charcoal) !important; color: var(--arte-charcoal) !important; }
      #main-nav.scrolled .nav-cta:hover { border-color: var(--arte-blue) !important; color: var(--arte-blue) !important; background: transparent !important; }
      #main-nav.scrolled .menu-bar { background: var(--arte-charcoal) !important; }
      
      /* On dark hero bg, links are light; after scroll, links are dark */
      .hero-nav .nav-link { color: rgba(255,255,255,0.85); }
      .hero-nav .nav-link:hover { color: #fff; }
      .hero-nav .logo-arte,
      .hero-nav .logo-tagline { color: #fff !important; }
      .hero-nav .nav-cta { border-color: rgba(255,255,255,0.7) !important; color: rgba(255,255,255,0.85) !important; }
      .hero-nav .nav-cta:hover { border-color: #fff !important; color: #fff !important; }
      .hero-nav .menu-bar { background: #fff !important; }
      
      .nav-link { color: var(--arte-mid); }
      .nav-link:hover { color: var(--arte-blue); }
      .nav-active { color: var(--arte-blue) !important; }
      
      /* ── Typography ── */
      .heading-serif {
        font-family: 'Cormorant Garamond', Georgia, serif;
        font-weight: 300;
        line-height: 1.15;
        letter-spacing: -0.01em;
      }
      
      .section-label {
        font-size: 0.65rem;
        letter-spacing: 0.35em;
        text-transform: uppercase;
        color: var(--arte-blue);
        font-weight: 400;
      }
      
      /* ── Buttons ── */
      .btn-primary {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        background: var(--arte-blue);
        color: #fff;
        padding: 14px 36px;
        font-size: 0.7rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        font-weight: 400;
        transition: all 0.3s ease;
        text-decoration: none;
      }
      .btn-primary:hover { background: var(--arte-blue-dark); transform: translateY(-1px); }
      
      .btn-outline {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        border: 1px solid var(--arte-charcoal);
        color: var(--arte-charcoal);
        padding: 14px 36px;
        font-size: 0.7rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        font-weight: 400;
        transition: all 0.3s ease;
        text-decoration: none;
      }
      .btn-outline:hover { border-color: var(--arte-blue); color: var(--arte-blue); }
      
      .btn-outline-white {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        border: 1px solid rgba(255,255,255,0.6);
        color: rgba(255,255,255,0.9);
        padding: 14px 36px;
        font-size: 0.7rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        font-weight: 400;
        transition: all 0.3s ease;
        text-decoration: none;
      }
      .btn-outline-white:hover { border-color: #fff; color: #fff; }
      
      /* ── Hero ── */
      .hero-section {
        height: 100vh;
        min-height: 700px;
        position: relative;
        display: flex;
        align-items: flex-end;
        overflow: hidden;
      }
      
      .hero-bg {
        position: absolute;
        inset: 0;
        background-image: url('https://sspark.genspark.ai/cfimages?u1=GNWa9lB3h0kOONsP0VmaoO8R058LWMIeAEeJLur%2FoLhO%2B%2BbA7n4RlYuGntyMjFBaK%2FGc%2BGXITwvMLzoPlhXYwWPv5xnOR2Kj%2Fi%2FgoWrwJBpst2dlsMhuR9Y0YQ7%2BJdoW398C&u2=02wQXjxM51Kal9b4&width=2560');
        background-size: cover;
        background-position: center 30%;
        transform: scale(1.05);
        transition: transform 8s ease;
      }
      .hero-bg::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to bottom,
          rgba(0,0,0,0.2) 0%,
          rgba(0,0,0,0.1) 40%,
          rgba(0,0,0,0.55) 100%
        );
      }
      
      /* ── Cards ── */
      .project-card {
        overflow: hidden;
        position: relative;
        cursor: pointer;
      }
      .project-card img {
        transition: transform 0.7s ease;
        width: 100%;
        object-fit: cover;
      }
      .project-card:hover img { transform: scale(1.04); }
      
      .project-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%);
        opacity: 0;
        transition: opacity 0.4s ease;
      }
      .project-card:hover .project-overlay { opacity: 1; }
      
      /* ── Stats ── */
      .stat-number {
        font-family: 'Cormorant Garamond', Georgia, serif;
        font-weight: 300;
        font-size: 4rem;
        line-height: 1;
        color: var(--arte-blue);
      }
      
      /* ── Sector Cards ── */
      .sector-card {
        border: 1px solid var(--arte-border);
        transition: all 0.4s ease;
        background: #fff;
      }
      .sector-card:hover {
        border-color: var(--arte-blue-light);
        box-shadow: 0 8px 40px rgba(123,142,185,0.12);
        transform: translateY(-4px);
      }
      
      /* ── Divider ── */
      .arte-divider {
        width: 40px;
        height: 1px;
        background: var(--arte-blue);
        margin: 16px 0;
      }
      
      /* ── Form ── */
      .form-input {
        width: 100%;
        border: none;
        border-bottom: 1px solid var(--arte-border);
        background: transparent;
        padding: 12px 0;
        font-family: 'Inter', sans-serif;
        font-size: 0.85rem;
        font-weight: 300;
        color: var(--arte-charcoal);
        outline: none;
        transition: border-color 0.3s;
      }
      .form-input:focus { border-color: var(--arte-blue); }
      .form-input::placeholder { color: #B0ACA8; font-size: 0.8rem; letter-spacing: 0.05em; }
      
      .form-label {
        font-size: 0.65rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--arte-mid);
        font-weight: 400;
      }
      
      /* ── Testimonial ── */
      .quote-mark {
        font-family: 'Cormorant Garamond', serif;
        font-size: 6rem;
        line-height: 0.5;
        color: var(--arte-blue-light);
        font-style: italic;
      }
      
      /* ── Process steps ── */
      .process-step-num {
        font-family: 'Cormorant Garamond', serif;
        font-size: 3.5rem;
        font-weight: 300;
        color: var(--arte-border);
        line-height: 1;
      }
      
      /* ── Footer ── */
      footer {
        background: var(--arte-charcoal);
        color: rgba(255,255,255,0.6);
      }
      
      /* ── Scroll animation ── */
      .fade-in {
        opacity: 0;
        transform: translateY(24px);
        transition: opacity 0.7s ease, transform 0.7s ease;
      }
      .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* ── Image aspect ratios ── */
      .aspect-4-3 { aspect-ratio: 4/3; }
      .aspect-3-4 { aspect-ratio: 3/4; }
      .aspect-16-9 { aspect-ratio: 16/9; }
      .aspect-1-1 { aspect-ratio: 1/1; }
      
      /* ── Horizontal rule ── */
      hr.arte { border: none; border-top: 1px solid var(--arte-border); }
      
      /* ── Filter buttons ── */
      .filter-active {
        border-color: #7B8EB9 !important;
        color: #7B8EB9 !important;
        background: rgba(123,142,185,0.10) !important;
      }
      .filter-inactive {
        border-color: #E8E4DF !important;
        color: #6B6B6B !important;
        background: transparent !important;
      }
      .filter-inactive:hover {
        border-color: #7B8EB9 !important;
        color: #7B8EB9 !important;
      }
      
      /* Mobile adjustments */
      @media (max-width: 768px) {
        .stat-number { font-size: 2.8rem; }
        .hero-section { min-height: 600px; }
      }
    </style>
  </head>
  <body>`}function Te(){return`
  <footer>
    <div class="max-w-7xl mx-auto px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        <!-- Brand -->
        <div class="md:col-span-1">
          <div class="mb-4">
            <div class="text-2xl font-light tracking-widest" style="color: #7B8EB9; font-family: 'Cormorant Garamond', serif; letter-spacing: 0.3em;">ARTé</div>
            <div class="text-xs tracking-widest" style="color: rgba(123,142,185,0.7); letter-spacing: 0.4em; font-size: 0.55rem;">THE LIVING STANDARD</div>
          </div>
          <p class="text-xs leading-relaxed" style="color: rgba(255,255,255,0.4); max-width: 200px;">
            Bespoke furniture solutions for the world's most distinguished spaces.
          </p>
        </div>
        
        <!-- Navigation -->
        <div>
          <h4 class="text-xs tracking-widest uppercase mb-6" style="color: rgba(255,255,255,0.3); letter-spacing: 0.25em;">Navigation</h4>
          <ul class="space-y-3">
            <li><a href="/" class="text-xs tracking-wide hover:text-white transition-colors" style="color: rgba(255,255,255,0.55);">Home</a></li>
            <li><a href="/about" class="text-xs tracking-wide hover:text-white transition-colors" style="color: rgba(255,255,255,0.55);">About Us</a></li>
            <li><a href="/projects" class="text-xs tracking-wide hover:text-white transition-colors" style="color: rgba(255,255,255,0.55);">Projects</a></li>
            <li><a href="/contact" class="text-xs tracking-wide hover:text-white transition-colors" style="color: rgba(255,255,255,0.55);">Contact</a></li>
          </ul>
        </div>
        
        <!-- Sectors -->
        <div>
          <h4 class="text-xs tracking-widest uppercase mb-6" style="color: rgba(255,255,255,0.3); letter-spacing: 0.25em;">Sectors</h4>
          <ul class="space-y-3">
            <li class="text-xs tracking-wide" style="color: rgba(255,255,255,0.55);">Luxury Hotels</li>
            <li class="text-xs tracking-wide" style="color: rgba(255,255,255,0.55);">Serviced Apartments</li>
            <li class="text-xs tracking-wide" style="color: rgba(255,255,255,0.55);">Corporate Offices</li>
            <li class="text-xs tracking-wide" style="color: rgba(255,255,255,0.55);">Student Housing</li>
            <li class="text-xs tracking-wide" style="color: rgba(255,255,255,0.55);">Senior Living</li>
          </ul>
        </div>
        
        <!-- Contact -->
        <div>
          <h4 class="text-xs tracking-widest uppercase mb-6" style="color: rgba(255,255,255,0.3); letter-spacing: 0.25em;">Get In Touch</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <i class="fas fa-envelope text-xs mt-1" style="color: #7B8EB9;"></i>
              <a href="mailto:enquiries@arte-living.com" class="text-xs hover:text-white transition-colors" style="color: rgba(255,255,255,0.55);">enquiries@arte-living.com</a>
            </li>
            <li class="flex items-start gap-3">
              <i class="fas fa-phone text-xs mt-1" style="color: #7B8EB9;"></i>
              <a href="tel:+85256061921" class="text-xs hover:text-white transition-colors" style="color: rgba(255,255,255,0.55);">+852 5606 1921</a>
            </li>
            <li class="flex items-start gap-3">
              <i class="fab fa-whatsapp text-xs mt-1" style="color: #7B8EB9;"></i>
              <a href="https://wa.me/85256061921" target="_blank" rel="noopener" class="text-xs hover:text-white transition-colors" style="color: rgba(255,255,255,0.55);">WhatsApp Us</a>
            </li>

          </ul>
          <div class="flex gap-4 mt-8">
            <a href="#" class="w-8 h-8 border flex items-center justify-center transition-all hover:border-white" style="border-color: rgba(255,255,255,0.2);">
              <i class="fab fa-linkedin-in text-xs" style="color: rgba(255,255,255,0.55);"></i>
            </a>
            <a href="#" class="w-8 h-8 border flex items-center justify-center transition-all hover:border-white" style="border-color: rgba(255,255,255,0.2);">
              <i class="fab fa-instagram text-xs" style="color: rgba(255,255,255,0.55);"></i>
            </a>
          </div>
        </div>
      </div>
      
      <hr style="border-color: rgba(255,255,255,0.08);" class="mb-8">
      
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-xs" style="color: rgba(255,255,255,0.3);">© 2026 ARTé. All rights reserved. The Living Standard.</p>
        <p class="text-xs" style="color: rgba(255,255,255,0.2);">Bespoke Furniture | Contract Interiors | B2B Specialists</p>
      </div>
    </div>
  </footer>
  
  <script>
    // Scroll-based nav
    const nav = document.getElementById('main-nav');
    const isHeroPage = document.querySelector('.hero-section');
    
    function updateNav() {
      if (isHeroPage) {
        if (window.scrollY > 80) {
          nav.classList.add('scrolled');
          nav.classList.remove('hero-nav');
        } else {
          nav.classList.remove('scrolled');
          nav.classList.add('hero-nav');
        }
      } else {
        nav.classList.add('scrolled');
      }
    }
    
    updateNav();
    window.addEventListener('scroll', updateNav);
    
    // Hero bg parallax
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
      window.addEventListener('scroll', () => {
        heroBg.style.transform = 'scale(1.05) translateY(' + (window.scrollY * 0.15) + 'px)';
      });
      setTimeout(() => { heroBg.style.transform = 'scale(1) translateY(0)'; }, 100);
    }
    
    // Mobile menu
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
    
    // Scroll fade-in
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    
    // Counter animation
    function animateCounter(el) {
      const target = parseInt(el.getAttribute('data-target'));
      const duration = 1800;
      const start = performance.now();
      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    }
    
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));
  <\/script>
  </body>
  </html>
  `}function xr(){return Ae("Home","ARTé crafts bespoke furniture for luxury hotels, serviced apartments, offices, and student housing. The Living Standard.")+`

${Ce("home")}

<!-- ══════════════════════════════════════════════
     HERO
══════════════════════════════════════════════ -->
<section class="hero-section">
  <div class="hero-bg"></div>
  
  <div class="relative z-10 max-w-7xl mx-auto px-8 pb-20 w-full">
    <div class="max-w-2xl">
      <p class="section-label mb-6" style="color: rgba(255,255,255,0.65);">Bespoke Contract Furniture</p>
      <h1 class="heading-serif text-white mb-6" style="font-size: clamp(3rem, 6vw, 5.5rem);">
        Where Every<br>
        <em style="color: #A8B5D1;">Space Tells</em><br>
        a Story
      </h1>
      <p class="text-sm leading-relaxed mb-10" style="color: rgba(255,255,255,0.7); max-width: 420px; font-weight: 300;">
        From five-star hotel groups to a family designing their forever home, we partner with people who care deeply about the places they create. Developers, hospitality leaders, institutions, homeowners — different briefs, one shared standard. Furniture made to last, made to be lived with, made to feel like it always belonged there.
      </p>
      <div class="flex flex-wrap gap-4">
        <a href="/projects" class="btn-primary">
          View Our Work <i class="fas fa-arrow-right text-xs"></i>
        </a>
        <a href="/contact" class="btn-outline-white">
          Start a Project
        </a>
      </div>
    </div>
  </div>
  
  <!-- Scroll indicator -->
  <div class="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2">
    <div class="text-xs tracking-widest" style="color: rgba(255,255,255,0.4); writing-mode: vertical-rl; font-size: 0.6rem; letter-spacing: 0.25em;">SCROLL</div>
    <div class="w-px h-12" style="background: rgba(255,255,255,0.25);"></div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     INTRO STRIP
══════════════════════════════════════════════ -->
<section style="background: var(--arte-charcoal);" class="py-8">
  <div class="max-w-7xl mx-auto px-8">
    <!-- Mobile: vertical left-aligned list, no orphan dots -->
    <!-- Desktop: single horizontal centred row with dot separators -->
    <div class="hidden md:flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Luxury Hotels</span>
      <span style="color: rgba(255,255,255,0.15);">·</span>
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Serviced Apartments</span>
      <span style="color: rgba(255,255,255,0.15);">·</span>
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Corporate Offices</span>
      <span style="color: rgba(255,255,255,0.15);">·</span>
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Student Housing</span>
      <span style="color: rgba(255,255,255,0.15);">·</span>
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Senior Living</span>
    </div>
    <div class="flex md:hidden flex-col items-start gap-y-4">
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Luxury Hotels</span>
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Serviced Apartments</span>
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Corporate Offices</span>
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Student Housing</span>
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Senior Living</span>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     SECTORS
══════════════════════════════════════════════ -->
<section class="py-24 md:py-32" style="background: var(--arte-cream);">
  <div class="max-w-7xl mx-auto px-8">
    
    <div class="max-w-2xl mb-16 fade-in">
      <p class="section-label mb-4">Our Expertise</p>
      <h2 class="heading-serif mb-6" style="font-size: clamp(2.2rem, 4vw, 3.5rem); color: var(--arte-charcoal);">
        Tailored for Every<br><em style="color: var(--arte-blue);">Sector's Standard</em>
      </h2>
      <p class="text-sm leading-relaxed" style="color: var(--arte-mid);">
        We understand that a five-star hotel lobby and a student common room demand entirely different solutions. ARTé's expertise spans the full spectrum — delivering appropriate quality, at the right value, every time.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style="background: var(--arte-border);">
      
      <!-- Luxury Hotels -->
      <div class="sector-card p-8 fade-in" style="background: var(--arte-cream);">
        <div class="mb-6">
          <img src="https://sspark.genspark.ai/cfimages?u1=GNWa9lB3h0kOONsP0VmaoO8R058LWMIeAEeJLur%2FoLhO%2B%2BbA7n4RlYuGntyMjFBaK%2FGc%2BGXITwvMLzoPlhXYwWPv5xnOR2Kj%2Fi%2FgoWrwJBpst2dlsMhuR9Y0YQ7%2BJdoW398C&u2=02wQXjxM51Kal9b4&width=2560" 
               alt="Luxury Hotel Furniture" class="w-full object-cover aspect-16-9">
        </div>
        <div class="w-8 h-px mb-4" style="background: var(--arte-blue);"></div>
        <p class="section-label mb-2">Tier 01</p>
        <h3 class="heading-serif text-xl mb-3">Luxury Hotels &<br>Resorts</h3>
        <p class="text-xs leading-relaxed mb-4" style="color: var(--arte-mid);">
          Mandarin Oriental, Four Seasons and peers demand furniture that embodies their brand. We deliver heirloom-quality pieces that elevate the guest experience and stand the test of time.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">5-Star Grade</span>
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">FF&E Packages</span>
        </div>
      </div>
      
      <!-- Serviced Apartments -->
      <div class="sector-card p-8 fade-in" style="background: var(--arte-cream);">
        <div class="mb-6">
          <img src="https://sspark.genspark.ai/cfimages?u1=vDoYq9DYLf7TZ5SaO4Aa0Dj%2FOy3Bw6lRMl029trWMCmKXrTgKLWze7RiY%2FcPv2RF4mBD3s63%2FeLwra464hccrayfsNfq6GBQJWmoVNTz1tUw0sX65aEOlAbyfVcZSkx10zcrcW46qwy83IQl9%2FvWnhr6wrBr8l4%3D&u2=vqoHJXUlMlIYOvnm&width=2560" 
               alt="Serviced Apartment Furniture" class="w-full object-cover aspect-16-9">
        </div>
        <div class="w-8 h-px mb-4" style="background: var(--arte-blue);"></div>
        <p class="section-label mb-2">Tier 01</p>
        <h3 class="heading-serif text-xl mb-3">Serviced<br>Apartments</h3>
        <p class="text-xs leading-relaxed mb-4" style="color: var(--arte-mid);">
          The discerning long-stay traveller expects hotel comfort with residential warmth. We furnish serviced apartments and branded residences with pieces that feel both curated and liveable.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">Residential Feel</span>
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">Durability Focus</span>
        </div>
      </div>
      
      <!-- Corporate Offices -->
      <div class="sector-card p-8 fade-in" style="background: var(--arte-cream);">
        <div class="mb-6">
          <img src="https://sspark.genspark.ai/cfimages?u1=D%2BjO5IRrFzm726ACprdTAD3Ji8aoDy8%2F61TyTm56CcsP%2Byxh26ySw0E0j4%2B%2BKPw7HwWRznR%2BxZxGcb8ThRERqQXg3%2B43mG9GIVhps%2B9Hzsv0cLDezUQIugPS0tfUm243z3lPT4vARbjIG8Ey77ifQ1LKzGXyTw%3D%3D&u2=C9Sq6Z2fByU1MvH4&width=2560" 
               alt="Office Furniture" class="w-full object-cover aspect-16-9">
        </div>
        <div class="w-8 h-px mb-4" style="background: var(--arte-blue);"></div>
        <p class="section-label mb-2">Tier 01 – 02</p>
        <h3 class="heading-serif text-xl mb-3">Corporate<br>Offices</h3>
        <p class="text-xs leading-relaxed mb-4" style="color: var(--arte-mid);">
          From boardrooms to breakout spaces, we create working environments that reflect brand identity and support productivity — elegant, functional, and built to last.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">Ergonomic</span>
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">Brand-Aligned</span>
        </div>
      </div>
      
      <!-- Student Housing -->
      <div class="sector-card p-8 fade-in" style="background: var(--arte-cream);">
        <div class="mb-6">
          <img src="https://sspark.genspark.ai/cfimages?u1=CpGy7xPPebVr8EbiUwe2hGPXpdFOVpe2NmQlrbJLsHt0Busbbsanip6E6g2dzxxll0994N%2BdwCNHnfRKkROXx0hYnlvASIKForDei1f%2F%2FMheeII0t1H4j2iFlVcZZJbWJetg52SXtY62gTY6E9mTv9BM5zBheXCX73ekTTUeG3UD7kMszJe6cMXMAC3ZluaWgfvlNAaw%2F94%3D&u2=QnIstrDIyYV%2F0oew&width=2560" 
               alt="Student Housing Furniture" class="w-full object-cover aspect-16-9">
        </div>
        <div class="w-8 h-px mb-4" style="background: var(--arte-blue);"></div>
        <p class="section-label mb-2">Tier 02</p>
        <h3 class="heading-serif text-xl mb-3">Student<br>Housing</h3>
        <p class="text-xs leading-relaxed mb-4" style="color: var(--arte-mid);">
          Value and durability without compromising on design. We help student housing developers maximise ROI with smart, cost-efficient furniture packs that still look and feel genuinely good.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">Value-Led</span>
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">High Volume</span>
        </div>
      </div>
      
      <!-- Senior Living -->
      <div class="sector-card p-8 fade-in" style="background: var(--arte-cream);">
        <div class="mb-6">
          <img src="https://sspark.genspark.ai/cfimages?u1=lk3ATvy9Xa9%2BG2POrLF%2BbhrI3CjI%2B1OA9qEfby40Fqg1%2F2HSe5korg84vVDhaiZgZVCTDbnNbVxlsLRdyScursV38C8zl%2BbbboHJsKz9m4C33cPveEGfnq%2BiS%2FGPtj2uJowcoppGrURXd7xdkwU5Vppt4QrL0Bfaw6QkF2vxwnEXaH4%3D&u2=Y5nU771aqxuMMOEQ&width=2560" 
               alt="Senior Living Furniture" class="w-full object-cover aspect-16-9">
        </div>
        <div class="w-8 h-px mb-4" style="background: var(--arte-blue);"></div>
        <p class="section-label mb-2">Tier 02</p>
        <h3 class="heading-serif text-xl mb-3">Senior &<br>Care Living</h3>
        <p class="text-xs leading-relaxed mb-4" style="color: var(--arte-mid);">
          Thoughtfully designed for wellbeing, safety, and dignity. Our senior living collections balance practicality with warmth, creating homes where residents feel truly at ease.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">Safety Spec</span>
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">Comfort Focus</span>
        </div>
      </div>
      
      <!-- HNW Residential -->
      <div class="sector-card p-8 fade-in" style="background: linear-gradient(135deg, rgba(123,142,185,0.06) 0%, #fff 100%);">
        <div class="mb-6">
          <img src="https://sspark.genspark.ai/cfimages?u1=9CFsU6OrOGuEZ3ssLFewKB%2BHrG7SREMtMASkVtKOK8%2BJZRRAt7FtwOp46mJKqTv6tV9SVoZOOBTqv%2B8MPAFrzL7vVF26b5w9d38gEgKlYllhOhDw5X6poczp3TtJT%2BicONMtTTHnf1qLi661KbkAYnTbWjRrK9VBGeFhZ%2Fypo%2FhsP1TiaQ7ivH5ai6DniWpc30CRkU44%2F3u02RlxqroHTQfyE1%2BM5By9CtNWQgYtD%2BxN9kMm%2FALhJBrJOF5H85U5vL6OBmI8NoGmrl2%2B6wA%3D&u2=HedbCUn%2FhBx3RwBF&width=2560" 
               alt="Private Residence Furniture" class="w-full object-cover aspect-16-9">
        </div>
        <div class="w-8 h-px mb-4" style="background: var(--arte-blue);"></div>
        <p class="section-label mb-2">Private Clients</p>
        <h3 class="heading-serif text-xl mb-3">Private<br>Residences</h3>
        <p class="text-xs leading-relaxed mb-4" style="color: var(--arte-mid);">
          For high-net-worth individuals who expect nothing less than five-star hotel standards at home. Fully bespoke, deeply personal, uncompromisingly excellent.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.1); color: var(--arte-blue);">Fully Bespoke</span>
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.1); color: var(--arte-blue);">White Glove</span>
        </div>
      </div>
      
    </div>
    
  </div>
</section>

<!-- ══════════════════════════════════════════════
     STATS BANNER
══════════════════════════════════════════════ -->
<section class="py-20" style="background: var(--arte-charcoal);">
  <div class="max-w-7xl mx-auto px-8">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      
      <div class="fade-in">
        <div class="stat-number mb-2"><span data-target="1000">0</span>+</div>
        <div class="arte-divider mx-auto"></div>
        <p class="text-xs tracking-widest uppercase mt-3" style="color: rgba(255,255,255,0.4); letter-spacing: 0.2em;">Projects Globally</p>
      </div>
      
      <div class="fade-in">
        <div class="stat-number mb-2"><span data-target="350">0</span></div>
        <div class="arte-divider mx-auto"></div>
        <p class="text-xs tracking-widest uppercase mt-3" style="color: rgba(255,255,255,0.4); letter-spacing: 0.2em;">Skilled Employees</p>
      </div>
      
      <div class="fade-in">
        <div class="stat-number mb-2"><span data-target="4">0</span></div>
        <div class="arte-divider mx-auto"></div>
        <p class="text-xs tracking-widest uppercase mt-3" style="color: rgba(255,255,255,0.4); letter-spacing: 0.2em;">Hotel Brands Served</p>
      </div>
      
      <div class="fade-in">
        <div class="stat-number mb-2"><span data-target="10">0</span>+</div>
        <div class="arte-divider mx-auto"></div>
        <p class="text-xs tracking-widest uppercase mt-3" style="color: rgba(255,255,255,0.4); letter-spacing: 0.2em;">Years of Experience</p>
      </div>
      
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     FEATURED PROJECTS
══════════════════════════════════════════════ -->
<section class="py-24 md:py-32" style="background: var(--arte-warm);">
  <div class="max-w-7xl mx-auto px-8">
    
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 fade-in">
      <div>
        <p class="section-label mb-4">Portfolio</p>
        <h2 class="heading-serif" style="font-size: clamp(2.2rem, 4vw, 3.5rem); color: var(--arte-charcoal);">
          Selected<br><em style="color: var(--arte-blue);">Projects</em>
        </h2>
      </div>
      <a href="/projects" class="btn-outline self-start md:self-auto">
        View All Projects <i class="fas fa-arrow-right text-xs"></i>
      </a>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
      
      <!-- Large featured -->
      <div class="project-card md:col-span-7 fade-in">
        <div class="aspect-4-3 overflow-hidden relative">
          <img src="https://sspark.genspark.ai/cfimages?u1=AaAgbX1DdalH6YaJ%2BJS51XAx5nKb4ygbX7J8lAVYQcJxpZgMHd6Cdio0cAo%2B2Pg29JNaBnAzjpX5DrclcO60bmijR45XCPv7CPMrOrP%2F3ghO7fmFf6YMF%2FBD1zmUjJrc6e27zF2C9EvNxWR0HnY%2BEzLXqG6yesKF%2Fw%3D%3D&u2=zkxm1jJH7xMOgwyG&width=2560" 
               alt="Luxury Hotel Lobby Project" class="w-full h-full object-cover">
          <div class="project-overlay"></div>
          <div class="absolute bottom-0 left-0 right-0 p-6 z-10 opacity-0 transition-opacity duration-300" style="opacity: 0;" id="overlay1">
            <a href="/projects" class="text-xs tracking-widest uppercase text-white border-b pb-1" style="border-color: rgba(255,255,255,0.4);">View Project</a>
          </div>
        </div>
        <div class="p-6" style="background: #fff; border: 1px solid var(--arte-border); border-top: none;">
          <div class="flex items-center justify-between">
            <div>
              <p class="section-label mb-1">Luxury Hotel</p>
              <h3 class="heading-serif text-xl">The Meridian Grand — London</h3>
            </div>
            <a href="/projects" class="w-10 h-10 border flex items-center justify-center transition-all hover:border-arte-blue" style="border-color: var(--arte-border);">
              <i class="fas fa-arrow-right text-xs" style="color: var(--arte-blue);"></i>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Two stacked -->
      <div class="md:col-span-5 flex flex-col gap-4">
        
        <div class="project-card fade-in">
          <div style="height: 200px; overflow: hidden; position: relative;">
            <img src="https://sspark.genspark.ai/cfimages?u1=QcuwwmaEvzJP52UCQUHlhnMszdSp4A1v6%2FOOjR9G0jcwKfntn%2FePtoZVowjt87UZWD5OQlTY75oSTj0%2F3I%2F7Pvk4jT5Mz7xfOlXuCvTPaMODfR%2F%2FhnY07s7AGPjpAWn2ODw84FXUpHyX7QHcdhr2O0CNEADAQBRzfvVGGcQ9tWw%2FlJh1wUsP4YTemem3eEsYoD4%3D&u2=TufLGqi5vGC8MGk2&width=2560" 
                 alt="Office Project" class="w-full h-full object-cover">
            <div class="project-overlay"></div>
          </div>
          <div class="p-5" style="background: #fff; border: 1px solid var(--arte-border); border-top: none;">
            <p class="section-label mb-1">Corporate Office</p>
            <h3 class="heading-serif text-lg">Apex Capital HQ — Singapore</h3>
          </div>
        </div>
        
        <div class="project-card fade-in">
          <div style="height: 200px; overflow: hidden; position: relative;">
            <img src="https://sspark.genspark.ai/cfimages?u1=%2FqBTjNtnJ%2Bsc5V15aESGpO03%2Bal3R8Pz%2FqAEXJgze9PIlbvIhziSn6ftuEI3FUxME5w4G%2Bqk0XjRgy1i0iEzzGZK%2Bvb68zJyMc%2BLef3q6Q%3D%3D&u2=1IflmvVyVUdkhOJo&width=2560" 
                 alt="Student Housing Project" class="w-full h-full object-cover">
            <div class="project-overlay"></div>
          </div>
          <div class="p-5" style="background: #fff; border: 1px solid var(--arte-border); border-top: none;">
            <p class="section-label mb-1">Student Housing</p>
            <h3 class="heading-serif text-lg">Collegiate Quarter — Manchester</h3>
          </div>
        </div>
        
      </div>
      
    </div>
    
  </div>
</section>

<!-- ══════════════════════════════════════════════
     TESTIMONIAL
══════════════════════════════════════════════ -->
<section class="py-24 md:py-28" style="background: var(--arte-cream);">
  <div class="max-w-4xl mx-auto px-8 text-center fade-in">
    <div class="quote-mark mb-4">"</div>
    <blockquote class="heading-serif mb-8" style="font-size: clamp(1.6rem, 3vw, 2.4rem); color: var(--arte-charcoal); font-style: italic; line-height: 1.4;">
      ARTé understood our brand language from day one. The pieces they delivered for our flagship property exceeded every expectation — both in craftsmanship and their ability to manage a project of this scale.
    </blockquote>
    <div class="arte-divider mx-auto mb-6"></div>
    <p class="text-xs tracking-widest uppercase" style="color: var(--arte-mid);">Director of Design — Five Star Hotel Group</p>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     CTA BAND
══════════════════════════════════════════════ -->
<section class="py-20" style="background: var(--arte-blue);">
  <div class="max-w-7xl mx-auto px-8">
    <div class="flex flex-col md:flex-row items-center justify-between gap-8 fade-in">
      <div>
        <p class="text-xs tracking-widest uppercase mb-3" style="color: rgba(255,255,255,0.6);">Begin Your Project</p>
        <h2 class="heading-serif text-white" style="font-size: clamp(2rem, 3.5vw, 3rem);">
          Let's Create Something<br>Extraordinary Together
        </h2>
      </div>
      <a href="/contact" class="btn-outline-white flex-shrink-0">
        Start a Conversation <i class="fas fa-arrow-right text-xs"></i>
      </a>
    </div>
  </div>
</section>

${Te()}`}function yr(){return Ae("About Us","ARTé is a bespoke contract furniture specialist with 15 years of experience supplying luxury hotels, serviced apartments, offices and student housing.")+`

${Ce("about")}

<!-- ══════════════════════════════════════════════
     ABOUT HERO
══════════════════════════════════════════════ -->
<section class="pt-32 pb-20 md:pt-40 md:pb-28" style="background: var(--arte-warm);">
  <div class="max-w-7xl mx-auto px-8">
    <div class="max-w-3xl">
      <p class="section-label mb-5 fade-in">Our Story</p>
      <h1 class="heading-serif mb-8 fade-in" style="font-size: clamp(2.8rem, 5vw, 5rem); color: var(--arte-charcoal);">
        Crafting Spaces That<br><em style="color: var(--arte-blue);">Set the Standard</em>
      </h1>
      <p class="text-sm leading-relaxed fade-in" style="color: var(--arte-mid); max-width: 560px; font-size: 0.95rem;">
        ARTé is a full-service furniture manufacturer offering a true 'one-stop shop' — from in-house design and manufacturing through to warehousing, freight, and installation. With over a decade of experience and more than 1,000 projects completed globally, we are trusted by some of the world's most demanding clients.
      </p>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     BRAND STORY
══════════════════════════════════════════════ -->
<section class="py-24 md:py-32" style="background: var(--arte-cream);">
  <div class="max-w-7xl mx-auto px-8">
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <div class="fade-in">
        <img src="https://sspark.genspark.ai/cfimages?u1=JLPt2F7Jg2WCFVLkFWJjpfzXavqXnfrvfW55I1sCXHtNQiPPMyL39gstAAWxZCL6fQLob9zKq1%2FMOAbW89kqn3rciCz8KVKQEA%3D%3D&u2=WPqh8SZQvF8BMUs6&width=2560" 
             alt="ARTé Elegant Furniture" class="w-full object-cover" style="aspect-ratio: 4/5;">
      </div>
      
      <div class="fade-in">
        <p class="section-label mb-5">Who We Are</p>
        <h2 class="heading-serif mb-6" style="font-size: clamp(2rem, 3.5vw, 3rem); color: var(--arte-charcoal);">
          Where Artisanship Meets<br><em style="color: var(--arte-blue);">Commercial Precision</em>
        </h2>
        <div class="arte-divider"></div>
        <div class="mt-6 space-y-5 text-sm leading-relaxed" style="color: var(--arte-mid);">
          <p>
            ARTé is a full-service furniture manufacturer that delivers a comprehensive 'one-stop shop' experience — covering in-house design, manufacturing, warehousing, freight, and installation under one roof.
          </p>
          <p>
            Based in Foshan with a team of 350 skilled employees, we combine manufacturing strength with rigorous quality control to ensure every project is delivered on time, on spec, and to the highest standard.
          </p>
          <p>
            What sets us apart is our ability to calibrate. A flagship five-star hotel demands one standard; a purpose-built student accommodation block requires a different, equally considered, approach. We serve both — and everything in between.
          </p>
        </div>
        
        <div class="grid grid-cols-3 gap-6 mt-10">
          <div>
            <div class="stat-number mb-1" style="font-size: 2.2rem;"><span data-target="1000">0</span>+</div>
            <p class="text-xs tracking-wide uppercase" style="color: var(--arte-mid);">Projects Globally</p>
          </div>
          <div>
            <div class="stat-number mb-1" style="font-size: 2.2rem;"><span data-target="350">0</span></div>
            <p class="text-xs tracking-wide uppercase" style="color: var(--arte-mid);">Skilled Employees</p>
          </div>
          <div>
            <div class="stat-number mb-1" style="font-size: 2.2rem;"><span data-target="10">0</span>+</div>
            <p class="text-xs tracking-wide uppercase" style="color: var(--arte-mid);">Years Experience</p>
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
</section>

<!-- ══════════════════════════════════════════════
     TRACK RECORD
══════════════════════════════════════════════ -->
<section class="py-16" style="background: var(--arte-warm); border-top: 1px solid #E8E4DF; border-bottom: 1px solid #E8E4DF;">
  <div class="max-w-7xl mx-auto px-8">
    <div class="max-w-xl mb-10 fade-in">
      <p class="section-label mb-4">Track Record</p>
      <h2 class="heading-serif" style="font-size: clamp(1.8rem, 3vw, 2.5rem); color: var(--arte-charcoal);">
        Trusted by Leading<br><em style="color: var(--arte-blue);">Brands Worldwide</em>
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
      
      <div class="p-8" style="background: #fff; border: 1px solid #E8E4DF;">
        <div class="w-8 h-px mb-5" style="background: var(--arte-blue);"></div>
        <h3 class="heading-serif text-lg mb-3" style="color: var(--arte-charcoal);">Global Hotel Partners</h3>
        <p class="text-xs leading-relaxed" style="color: #6B6B6B;">
          Partnered with leading international hotel brands including Hilton, Hyatt Regency, DoubleTree, and Sheraton — delivering FF&E solutions that meet the exacting standards of global hospitality operators.
        </p>
      </div>
      
      <div class="p-8" style="background: #fff; border: 1px solid #E8E4DF;">
        <div class="w-8 h-px mb-5" style="background: var(--arte-blue);"></div>
        <h3 class="heading-serif text-lg mb-3" style="color: var(--arte-charcoal);">Landmark Overseas Projects</h3>
        <p class="text-xs leading-relaxed" style="color: #6B6B6B;">
          Involved in significant international developments including Thames City in London and Malaysia's Opera House — demonstrating our capability to deliver complex, large-scale projects across borders.
        </p>
      </div>
      
      <div class="p-8" style="background: #fff; border: 1px solid #E8E4DF;">
        <div class="w-8 h-px mb-5" style="background: var(--arte-blue);"></div>
        <h3 class="heading-serif text-lg mb-3" style="color: var(--arte-charcoal);">Manufacturing Excellence</h3>
        <p class="text-xs leading-relaxed" style="color: #6B6B6B;">
          Based in Foshan — China's furniture manufacturing heartland — with 350 skilled employees and full in-house capabilities: design, production, QA, warehousing, freight, and installation.
        </p>
      </div>
      
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     VALUES
══════════════════════════════════════════════ -->
<section class="py-24 md:py-32" style="background: var(--arte-charcoal);">
  <div class="max-w-7xl mx-auto px-8">
    
    <div class="max-w-xl mb-16 fade-in">
      <p class="section-label mb-4" style="color: rgba(123,142,185,0.8);">Our Principles</p>
      <h2 class="heading-serif text-white" style="font-size: clamp(2.2rem, 4vw, 3.2rem);">
        The Values That<br><em style="color: var(--arte-blue-light);">Guide Every Project</em>
      </h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style="background: rgba(255,255,255,0.06);">
      
      <div class="p-8 fade-in" style="background: var(--arte-charcoal);">
        <div class="w-10 h-10 border flex items-center justify-center mb-6" style="border-color: rgba(123,142,185,0.3);">
          <i class="fas fa-gem text-xs" style="color: var(--arte-blue);"></i>
        </div>
        <h3 class="heading-serif text-lg text-white mb-3">Calibrated<br>Quality</h3>
        <p class="text-xs leading-relaxed" style="color: rgba(255,255,255,0.45);">
          We match material specification and craft to the project's purpose. Every brief receives exactly the right quality level — neither over-engineered nor under-served.
        </p>
      </div>
      
      <div class="p-8 fade-in" style="background: var(--arte-charcoal);">
        <div class="w-10 h-10 border flex items-center justify-center mb-6" style="border-color: rgba(123,142,185,0.3);">
          <i class="fas fa-pencil-ruler text-xs" style="color: var(--arte-blue);"></i>
        </div>
        <h3 class="heading-serif text-lg text-white mb-3">True<br>Bespoke</h3>
        <p class="text-xs leading-relaxed" style="color: rgba(255,255,255,0.45);">
          We don't start from a catalogue. We start from your brand guidelines, your floor plans, and your vision. Every piece is designed specifically for its environment.
        </p>
      </div>
      
      <div class="p-8 fade-in" style="background: var(--arte-charcoal);">
        <div class="w-10 h-10 border flex items-center justify-center mb-6" style="border-color: rgba(123,142,185,0.3);">
          <i class="fas fa-clock text-xs" style="color: var(--arte-blue);"></i>
        </div>
        <h3 class="heading-serif text-lg text-white mb-3">Programme<br>Certainty</h3>
        <p class="text-xs leading-relaxed" style="color: rgba(255,255,255,0.45);">
          Opening dates are non-negotiable. Our project management infrastructure ensures on-time, on-spec, on-budget delivery — every time.
        </p>
      </div>
      
      <div class="p-8 fade-in" style="background: var(--arte-charcoal);">
        <div class="w-10 h-10 border flex items-center justify-center mb-6" style="border-color: rgba(123,142,185,0.3);">
          <i class="fas fa-handshake text-xs" style="color: var(--arte-blue);"></i>
        </div>
        <h3 class="heading-serif text-lg text-white mb-3">Long-Term<br>Partnership</h3>
        <p class="text-xs leading-relaxed" style="color: rgba(255,255,255,0.45);">
          Our best relationships span multiple projects and many years. We invest in understanding your business, so every subsequent project is faster and sharper.
        </p>
      </div>
      
    </div>
    
  </div>
</section>

<!-- ══════════════════════════════════════════════
     DESIGN PHILOSOPHY
══════════════════════════════════════════════ -->
<section class="py-24 md:py-32" style="background: #ffffff;">
  <div class="max-w-7xl mx-auto px-8">
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      
      <!-- Image Column -->
      <div class="fade-in relative">
        <div style="position: relative; overflow: hidden; aspect-ratio: 4/5;">
          <img 
            src="https://sspark.genspark.ai/cfimages?u1=g0sKAoa%2B04FZpsWEMxvSSgrWgQbALS%2B%2FLNLwltCo%2Bj8iWL%2BTMe4n3ggjT%2BTgPRUePY8QJ7ydnH1vywXZsdV%2BopWXQnrPrGwA%2Fny7Fq3MbUuKil%2BafWiF6Dm6lYymV2zv4WJ38eEkXt73RjbKMCh6DZuUogrJJYMmp2kfCUok71sdXKxZ39GBvOEIcBlaH0k%3D&u2=HmFUJ7d8BqoZ0R3v&width=2560"
            alt="ARTé interior design philosophy — minimalist living space in cream tones"
            style="width: 100%; height: 100%; object-fit: cover; display: block;"
          />
          <div style="position: absolute; left: 0; top: 0; width: 4px; height: 100%; background: var(--arte-blue);"></div>
        </div>
        <div style="position: absolute; bottom: -1.5rem; right: 0; background: var(--arte-charcoal); padding: 1.5rem 2rem;">
          <p class="section-label" style="color: var(--arte-blue); margin-bottom: 0.25rem;">Our Craft</p>
          <p class="heading-serif text-white" style="font-size: 1.1rem;">Built to<br><em>Deliver</em></p>
        </div>
      </div>
      
      <!-- Text Column -->
      <div class="fade-in">
        <p class="section-label mb-4">Our Craft</p>
        <h2 class="mb-5" style="font-size: clamp(1.6rem, 2.8vw, 2.2rem); color: var(--arte-charcoal); line-height: 1.2; font-weight: 700; font-family: 'Inter', sans-serif;">
          Built to Deliver — <em style="font-style: italic;">Every Detail, Every Time</em>
        </h2>

        <hr style="border: none; border-top: 1px solid #e0dbd4; margin-bottom: 1.75rem;" />

        <div style="display: flex; flex-direction: column; gap: 1.5rem;">

          <div style="display: flex; gap: 1.25rem; align-items: flex-start;">
            <div style="width: 2px; background: var(--arte-blue); flex-shrink: 0; margin-top: 0.3rem; height: 3rem;"></div>
            <p style="font-size: 0.95rem; line-height: 1.85; color: var(--arte-charcoal);">
              We are, at heart, a furniture manufacturer. Design is part of what we do, but our real craft is turning our clients' designs into reality — built with precision, finished with care, delivered on time.
            </p>
          </div>

          <div style="display: flex; gap: 1.25rem; align-items: flex-start;">
            <div style="width: 2px; background: var(--arte-blue); flex-shrink: 0; margin-top: 0.3rem; height: 3rem;"></div>
            <p style="font-size: 0.95rem; line-height: 1.85; color: var(--arte-charcoal);">
              Behind every piece is a factory, a team, and decades of know-how. Skilled people who take pride in their work. Engineers and project managers who understand that a great product is only half the promise — the other half is execution.
            </p>
          </div>

          <div style="display: flex; gap: 1.25rem; align-items: flex-start;">
            <div style="width: 2px; background: var(--arte-blue); flex-shrink: 0; margin-top: 0.3rem; height: 3rem;"></div>
            <p style="font-size: 0.95rem; line-height: 1.85; color: var(--arte-charcoal);">
              That's where we stand apart. We don't just produce furniture. We deliver projects. Large, complex, multi-site projects — across cities, across continents — completed on schedule and to specification. From the first prototype to the final installation, we manage every stage so our clients don't have to worry.
            </p>
          </div>

          <div style="display: flex; gap: 1.25rem; align-items: flex-start;">
            <div style="width: 2px; background: var(--arte-blue); flex-shrink: 0; margin-top: 0.3rem; height: 3rem;"></div>
            <p style="font-size: 0.95rem; line-height: 1.85; color: var(--arte-charcoal);">
              Wherever the project is in the world, we are ready. Same standards. Same discipline. Same result.
            </p>
          </div>

        </div>

        <div style="margin-top: 1.75rem; padding: 1.5rem 1.5rem; border-left: 3px solid var(--arte-blue); background: var(--arte-cream);">
          <p style="font-size: 0.95rem; line-height: 1.75; color: var(--arte-charcoal); font-style: italic;">
            "A beautiful design deserves a flawless build. Our job is to make sure it arrives — on time, on spec, and exactly as imagined."
          </p>
        </div>

      </div>
      
    </div>
    
  </div>
</section>

<!-- ══════════════════════════════════════════════
     PROCESS
══════════════════════════════════════════════ -->
<section class="py-24 md:py-32" style="background: var(--arte-cream);">
  <div class="max-w-7xl mx-auto px-8">

    <!-- Header -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 fade-in" style="align-items: end;">
      <div>
        <p class="section-label mb-4">How We Work</p>
        <h2 class="heading-serif" style="font-size: clamp(2.2rem, 4vw, 3.2rem); color: var(--arte-charcoal); line-height: 1.15;">
          From Brief to<br><em style="color: var(--arte-blue);">Built</em>
        </h2>
      </div>
      <div>
        <p style="font-size: 0.9rem; line-height: 1.85; color: var(--arte-mid); max-width: 520px;">
          We are a manufacturer. Most of our work is large B2B projects, and we respect the original designer's vision. Our job is to make it real — on time, on spec, anywhere in the world.
        </p>
        <p style="font-size: 0.9rem; line-height: 1.85; color: var(--arte-mid); max-width: 520px; margin-top: 1rem;">
          What makes that possible is communication. We sit between the sponsor and the contractor, and we keep everyone aligned from day one to handover. That is the role ARTé plays best — <strong style="color: var(--arte-charcoal); font-weight: 600;">the project manager who turns concept into reality.</strong>
        </p>
      </div>
    </div>

    <!-- Arrow Ribbon — Desktop -->
    <div class="hidden md:block mb-16 fade-in">
      <!-- Connecting line -->
      <div style="position: relative; display: flex; align-items: flex-start;">
        <!-- The continuous line sits behind the nodes -->
        <div style="position: absolute; top: 1.75rem; left: calc(10% + 1rem); right: calc(10% + 1rem); height: 1px; background: linear-gradient(to right, var(--arte-blue) 0%, rgba(123,142,185,0.25) 100%); z-index: 0;"></div>

        <!-- Step 1 -->
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 1;">
          <div style="width: 3.5rem; height: 3.5rem; border-radius: 50%; background: var(--arte-blue); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: #fff; font-weight: 500; letter-spacing: 0.05em;">01</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.75rem;">Listen</h3>
          <p style="font-size: 0.78rem; line-height: 1.7; color: var(--arte-mid); max-width: 140px;">Meet the property owner and designer. Understand the brief, budget, timeline, and standard expected. No assumptions.</p>
        </div>

        <!-- Arrow -->
        <div style="padding-top: 1.4rem; color: rgba(123,142,185,0.5); font-size: 1rem; flex-shrink: 0;">›</div>

        <!-- Step 2 -->
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 1;">
          <div style="width: 3.5rem; height: 3.5rem; border-radius: 50%; background: #fff; border: 1.5px solid var(--arte-blue); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: var(--arte-blue); font-weight: 500; letter-spacing: 0.05em;">02</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.75rem;">Plan</h3>
          <p style="font-size: 0.78rem; line-height: 1.7; color: var(--arte-mid); max-width: 140px;">Translate design intent into a production plan. Drawings reviewed, materials sourced, samples approved before we cut a single piece.</p>
        </div>

        <!-- Arrow -->
        <div style="padding-top: 1.4rem; color: rgba(123,142,185,0.5); font-size: 1rem; flex-shrink: 0;">›</div>

        <!-- Step 3 -->
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 1;">
          <div style="width: 3.5rem; height: 3.5rem; border-radius: 50%; background: #fff; border: 1.5px solid var(--arte-blue); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: var(--arte-blue); font-weight: 500; letter-spacing: 0.05em;">03</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.75rem;">Make</h3>
          <p style="font-size: 0.78rem; line-height: 1.7; color: var(--arte-mid); max-width: 140px;">Skilled craftspeople, tight QA at every stage, regular updates back to the design and project team.</p>
        </div>

        <!-- Arrow -->
        <div style="padding-top: 1.4rem; color: rgba(123,142,185,0.5); font-size: 1rem; flex-shrink: 0;">›</div>

        <!-- Step 4 -->
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 1;">
          <div style="width: 3.5rem; height: 3.5rem; border-radius: 50%; background: #fff; border: 1.5px solid var(--arte-blue); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: var(--arte-blue); font-weight: 500; letter-spacing: 0.05em;">04</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.75rem;">Deliver</h3>
          <p style="font-size: 0.78rem; line-height: 1.7; color: var(--arte-mid); max-width: 140px;">Packing, shipping, customs, schedule — we handle the logistics. Wherever the site, the pieces arrive ready to install.</p>
        </div>

        <!-- Arrow -->
        <div style="padding-top: 1.4rem; color: rgba(123,142,185,0.5); font-size: 1rem; flex-shrink: 0;">›</div>

        <!-- Step 5 -->
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 1;">
          <div style="width: 3.5rem; height: 3.5rem; border-radius: 50%; background: #fff; border: 1.5px solid var(--arte-blue); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: var(--arte-blue); font-weight: 500; letter-spacing: 0.05em;">05</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.75rem;">Install</h3>
          <p style="font-size: 0.78rem; line-height: 1.7; color: var(--arte-mid); max-width: 140px;">Our local team joins yours on the ground. Phased installation, snagging resolved. Handover only when you are satisfied.</p>
        </div>

      </div>
    </div>

    <!-- Vertical Timeline — Mobile -->
    <div class="md:hidden mb-12 fade-in">
      <div style="position: relative; padding-left: 3rem;">
        <!-- Vertical line -->
        <div style="position: absolute; left: 1.6rem; top: 0.5rem; bottom: 0.5rem; width: 1px; background: linear-gradient(to bottom, var(--arte-blue), rgba(123,142,185,0.15));"></div>

        <!-- Step -->
        <div style="position: relative; margin-bottom: 2.25rem;">
          <div style="position: absolute; left: -1.85rem; top: 0; width: 2rem; height: 2rem; border-radius: 50%; background: var(--arte-blue); display: flex; align-items: center; justify-content: center;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 0.75rem; color: #fff;">01</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.4rem;">Listen</h3>
          <p style="font-size: 0.8rem; line-height: 1.7; color: var(--arte-mid);">Meet the property owner and designer. Understand the brief, budget, timeline, and standard expected. No assumptions.</p>
        </div>

        <div style="position: relative; margin-bottom: 2.25rem;">
          <div style="position: absolute; left: -1.85rem; top: 0; width: 2rem; height: 2rem; border-radius: 50%; background: #fff; border: 1.5px solid var(--arte-blue); display: flex; align-items: center; justify-content: center;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 0.75rem; color: var(--arte-blue);">02</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.4rem;">Plan</h3>
          <p style="font-size: 0.8rem; line-height: 1.7; color: var(--arte-mid);">Translate design intent into a production plan. Drawings reviewed, materials sourced, samples approved before we cut a single piece.</p>
        </div>

        <div style="position: relative; margin-bottom: 2.25rem;">
          <div style="position: absolute; left: -1.85rem; top: 0; width: 2rem; height: 2rem; border-radius: 50%; background: #fff; border: 1.5px solid var(--arte-blue); display: flex; align-items: center; justify-content: center;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 0.75rem; color: var(--arte-blue);">03</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.4rem;">Make</h3>
          <p style="font-size: 0.8rem; line-height: 1.7; color: var(--arte-mid);">Skilled craftspeople, tight QA at every stage, regular updates back to the design and project team.</p>
        </div>

        <div style="position: relative; margin-bottom: 2.25rem;">
          <div style="position: absolute; left: -1.85rem; top: 0; width: 2rem; height: 2rem; border-radius: 50%; background: #fff; border: 1.5px solid var(--arte-blue); display: flex; align-items: center; justify-content: center;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 0.75rem; color: var(--arte-blue);">04</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.4rem;">Deliver</h3>
          <p style="font-size: 0.8rem; line-height: 1.7; color: var(--arte-mid);">Packing, shipping, customs, schedule — we handle the logistics. Wherever the site, the pieces arrive ready to install.</p>
        </div>

        <div style="position: relative;">
          <div style="position: absolute; left: -1.85rem; top: 0; width: 2rem; height: 2rem; border-radius: 50%; background: #fff; border: 1.5px solid var(--arte-blue); display: flex; align-items: center; justify-content: center;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 0.75rem; color: var(--arte-blue);">05</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.4rem;">Install</h3>
          <p style="font-size: 0.8rem; line-height: 1.7; color: var(--arte-mid);">Our local team joins yours on the ground. Phased installation, snagging resolved. Handover only when you are satisfied.</p>
        </div>

      </div>
    </div>

    <!-- Closing quote -->
    <div class="fade-in" style="max-width: 680px; margin: 0 auto; text-align: center; padding-top: 2rem; border-top: 1px solid rgba(123,142,185,0.2);">
      <p class="heading-serif" style="font-size: clamp(1rem, 1.8vw, 1.25rem); color: var(--arte-charcoal); font-style: italic; line-height: 1.7;">
        "We don't just build furniture. We carry the project —<br>from the first conversation to the day the doors open."
      </p>
    </div>
    
  </div>
</section>

<!-- ══════════════════════════════════════════════
     CTA
══════════════════════════════════════════════ -->
<section class="py-20" style="background: var(--arte-blue);">
  <div class="max-w-7xl mx-auto px-8 text-center fade-in">
    <p class="text-xs tracking-widest uppercase mb-4" style="color: rgba(255,255,255,0.6);">From Property Owners to Designers — Trusted by Our Partners</p>
    <h2 class="heading-serif text-white mb-8" style="font-size: clamp(2rem, 3.5vw, 3rem);">
      Let's Build Something Together
    </h2>
    <a href="/contact" class="btn-outline-white">
      Get In Touch <i class="fas fa-arrow-right text-xs"></i>
    </a>
  </div>
</section>

${Te()}`}function Et(){const e=[{title:"Guangzhou Financial Tower",location:"Guangzhou, China",locationKey:"china",sector:"Corporate Office",tier:"Premium Office",scope:"Reception lobby, executive offices & full-floor fit-out",slug:"guangzhou-financial-tower",img:"/static/gz-office-cover.jpg",gallery:[{src:"/static/gz-office-cover.jpg",caption:"Reception Lobby — marble joinery counter with brass trim"}]},{title:"Shenzhen Corporate Centre",location:"Shenzhen, China",locationKey:"china",sector:"Corporate Office",tier:"Premium Office",scope:"Conference suites, executive offices & open-plan floors",slug:"shenzhen-corporate-centre",img:"/static/china-office-cover.jpg",gallery:[{src:"/static/china-office-cover.jpg",caption:"Conference Suite — glass-walled meeting rooms with city views"},{src:"/static/china-office-lounge.jpg",caption:"Reception & Lounge — curved joinery counter, breakout seating"},{src:"/static/china-office-exec.jpg",caption:"Executive Office — bespoke desk, shelving & visitor seating"},{src:"/static/china-office-openplan.jpg",caption:"Open-Plan Floor — full workstation fit-out, night view"},{src:"/static/china-office-workstations.jpg",caption:"Workstation Area — ergonomic benching with amber-panel screens"}]},{title:"Harbour View Executive Suite",location:"Hong Kong",locationKey:"hk",sector:"Corporate Office",tier:"Premium Office",scope:"Executive suite, boardroom, lounge & open-plan floors",slug:"harbour-view-executive-suite",img:"/static/FveZLY8q.jpg",gallery:[{src:"/static/FveZLY8q.jpg",caption:"Executive Office — Victoria Harbour view"},{src:"/static/hk-office-boardroom.jpg",caption:"Boardroom — 12-seat conference table, harbour aspect"},{src:"/static/hk-office-exec-room.jpg",caption:"Director's Office — bespoke desk & executive seating"},{src:"/static/hk-office-bar.jpg",caption:"Hospitality Bar — walnut joinery, marble countertop"},{src:"/static/hk-office-lounge.jpg",caption:"Client Lounge — panoramic harbour & skyline views"},{src:"/static/hk-office-openplan.jpg",caption:"Open-Plan Working Floor — full workstation fit-out"}]}],t={"Luxury Hotel":"hotel","Corporate Office":"office","Student Housing":"student","Serviced Apartments":"residential","Senior Living":"residential"},r=e.map((a,s)=>{const i=t[a.sector]||"other",n=a.locationKey||"other",l=a.slug,c=!!l,d=c?`a href="/projects/${l}"`:"div",p=c?"a":"div";return`
    <article class="project-card fade-in" data-sector="${i}" data-location="${n}" style="animation-delay: ${s*.1}s;">
      <${d} style="display:block; text-decoration:none; color:inherit;">
      <div class="aspect-4-3 overflow-hidden relative">
        <img src="${a.img}" alt="${a.title}" class="w-full h-full object-cover">
        <div class="project-overlay"></div>
        <div class="absolute top-4 left-4 z-10">
          <span class="text-xs px-3 py-1 tracking-wider uppercase" style="background: rgba(123,142,185,0.85); color: #fff; font-size: 0.6rem; letter-spacing: 0.2em;">${a.sector}</span>
        </div>
        ${c?'<div class="absolute bottom-4 right-4 z-10" style="background: rgba(0,0,0,0.45); padding: 0.35rem 0.75rem; display:flex; align-items:center; gap:0.4rem;"><span style="font-size:0.6rem; letter-spacing:0.15em; color:#fff; text-transform:uppercase;">View Project</span><span style="color:#fff; font-size:0.75rem;">→</span></div>':""}
      </div>
      <div class="p-6" style="background: #fff; border: 1px solid #E8E4DF; border-top: none;">
        <div class="arte-divider mb-4"></div>
        <h3 class="heading-serif text-xl mb-1">${a.title}</h3>
        <p class="text-xs mb-4" style="color: #6B6B6B;">
          <i class="fas fa-map-marker-alt text-xs mr-1" style="color: #7B8EB9;"></i> ${a.location}
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: #7B8EB9;">${a.tier}</span>
        </div>
        <p class="text-xs" style="color: #6B6B6B;">${a.scope}</p>
      </div>
      </${p}>
    </article>
  `}).join("");return Ae("Projects","Browse ARTé's portfolio of bespoke furniture projects spanning luxury hotels, serviced apartments, offices, student housing and more.")+`

${Ce("projects")}

<!-- ══════════════════════════════════════════════
     PROJECTS HERO
══════════════════════════════════════════════ -->
<section class="pt-32 pb-16 md:pt-40 md:pb-20" style="background: var(--arte-warm);">
  <div class="max-w-7xl mx-auto px-8">
    <div class="max-w-2xl">
      <p class="section-label mb-5 fade-in">Our Portfolio</p>
      <h1 class="heading-serif mb-6 fade-in" style="font-size: clamp(2.8rem, 5vw, 5rem); color: var(--arte-charcoal);">
        Projects That<br><em style="color: var(--arte-blue);">Speak for Themselves</em>
      </h1>

      <!-- Selected projects notice -->
      <div class="fade-in mb-5" style="display: inline-flex; align-items: center; gap: 0.6rem; background: rgba(123,142,185,0.1); border: 1px solid rgba(123,142,185,0.3); padding: 0.45rem 0.9rem;">
        <span style="width: 6px; height: 6px; border-radius: 50%; background: var(--arte-blue); flex-shrink: 0; display: inline-block;"></span>
        <span style="font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--arte-blue); font-family: 'Inter', sans-serif; font-weight: 500;">Selected Projects Only</span>
      </div>

      <p class="text-sm leading-relaxed fade-in" style="color: var(--arte-mid); max-width: 480px;">
        What you see here is a curated sample — not the full picture. We have completed over 1,000 projects across luxury hospitality, commercial, residential and social sectors, spanning multiple continents. We show selected work on this site; if you'd like to see more relevant to your brief, just ask.
      </p>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     FILTER BAR
══════════════════════════════════════════════ -->
<section style="background: #FAF9F7; border-bottom: 1px solid #E8E4DF;" class="sticky top-[72px] z-40">
  <div class="max-w-7xl mx-auto px-8 pt-4 pb-3">
    <!-- Sector row -->
    <div class="flex flex-wrap gap-3 items-center mb-3">
      <span class="text-xs tracking-widest uppercase" style="color: #6B6B6B; min-width: 4.5rem;">Sector:</span>
      <button onclick="setSector('all')" class="filter-btn filter-sector text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-active" data-sector-filter="all">All</button>
      <button onclick="setSector('hotel')" class="filter-btn filter-sector text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-inactive" data-sector-filter="hotel">Hotels</button>
      <button onclick="setSector('office')" class="filter-btn filter-sector text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-inactive" data-sector-filter="office">Offices</button>
      <button onclick="setSector('residential')" class="filter-btn filter-sector text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-inactive" data-sector-filter="residential">Residential</button>
      <button onclick="setSector('student')" class="filter-btn filter-sector text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-inactive" data-sector-filter="student">Student</button>
    </div>
    <!-- Divider -->
    <div style="height: 1px; background: #E8E4DF; margin-bottom: 0.65rem;"></div>
    <!-- Location row -->
    <div class="flex flex-wrap gap-3 items-center pb-1">
      <span class="text-xs tracking-widest uppercase" style="color: #6B6B6B; min-width: 4.5rem;">Location:</span>
      <button onclick="setLocation('all')" class="filter-btn filter-location text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-active" data-location-filter="all">All</button>
      <button onclick="setLocation('china')" class="filter-btn filter-location text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-inactive" data-location-filter="china">China</button>
      <button onclick="setLocation('hk')" class="filter-btn filter-location text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-inactive" data-location-filter="hk">Hong Kong</button>
      <button onclick="setLocation('uk')" class="filter-btn filter-location text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-inactive" data-location-filter="uk">UK</button>
      <button onclick="setLocation('canada')" class="filter-btn filter-location text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-inactive" data-location-filter="canada">Canada</button>
      <button onclick="setLocation('malaysia')" class="filter-btn filter-location text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-inactive" data-location-filter="malaysia">Malaysia</button>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     PROJECTS GRID
══════════════════════════════════════════════ -->
<section class="py-16 md:py-24" style="background: var(--arte-cream);">
  <div class="max-w-7xl mx-auto px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects-grid">
      ${r}
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     CTA
══════════════════════════════════════════════ -->
<section class="py-20" style="background: var(--arte-blue);">
  <div class="max-w-7xl mx-auto px-8 text-center fade-in">
    <p class="text-xs tracking-widest uppercase mb-4" style="color: rgba(255,255,255,0.6);">Your Project Could Be Next</p>
    <h2 class="heading-serif text-white mb-8" style="font-size: clamp(2rem, 3.5vw, 3rem);">
      Discuss Your Brief with Us
    </h2>
    <a href="/contact" class="btn-outline-white">
      Contact Our Team <i class="fas fa-arrow-right text-xs"></i>
    </a>
  </div>
</section>

<script>
let activeSector = 'all';
let activeLocation = 'all';

function applyFilters() {
  const cards = document.querySelectorAll('#projects-grid article');
  let visibleCount = 0;
  cards.forEach(card => {
    const sector = card.getAttribute('data-sector');
    const location = card.getAttribute('data-location');
    const sectorMatch = activeSector === 'all' || sector === activeSector;
    const locationMatch = activeLocation === 'all' || location === activeLocation;
    const show = sectorMatch && locationMatch;
    card.style.display = show ? '' : 'none';
    if (show) visibleCount++;
  });
  let emptyMsg = document.getElementById('no-projects-msg');
  if (!emptyMsg) {
    emptyMsg = document.createElement('p');
    emptyMsg.id = 'no-projects-msg';
    emptyMsg.style.cssText = 'color:#6B6B6B; font-size:0.85rem; grid-column:1/-1; padding:40px 0; text-align:center;';
    emptyMsg.textContent = 'No projects match this combination. More coming soon.';
    document.getElementById('projects-grid').appendChild(emptyMsg);
  }
  emptyMsg.style.display = visibleCount === 0 ? '' : 'none';
}

function setSector(filter) {
  activeSector = filter;
  document.querySelectorAll('.filter-sector').forEach(btn => {
    const isActive = btn.getAttribute('data-sector-filter') === filter;
    btn.classList.toggle('filter-active', isActive);
    btn.classList.toggle('filter-inactive', !isActive);
  });
  applyFilters();
}

function setLocation(filter) {
  activeLocation = filter;
  document.querySelectorAll('.filter-location').forEach(btn => {
    const isActive = btn.getAttribute('data-location-filter') === filter;
    btn.classList.toggle('filter-active', isActive);
    btn.classList.toggle('filter-inactive', !isActive);
  });
  applyFilters();
}
<\/script>

${Te()}`}const wr={"guangzhou-financial-tower":{title:"Guangzhou Financial Tower",location:"Guangzhou, China",sector:"Corporate Office",tier:"Premium Office",scope:"Reception lobby, executive offices & full-floor fit-out",year:"2024",description:`A prestige office fit-out in Guangzhou's financial district, designed to project quiet authority from the moment a visitor steps off the lift. ARTé delivered the complete furniture and joinery package across the reception lobby and executive floors.

The centrepiece is a full-width reception counter in book-matched stone with brushed brass trim — flanked by a floor-to-ceiling Calacatta marble feature wall and flanking illuminated reeded-glass panels. The stone, brass and soft-white palette runs through every zone, from the partner offices to the client meeting suites.

Every piece was manufactured to bespoke dimensions and detailed drawings, ensuring the furniture reads as architecture rather than an afterthought.`,gallery:[{src:"/static/gz-office-cover.jpg",caption:"Reception Lobby — marble joinery counter with brass trim"}]},"shenzhen-corporate-centre":{title:"Shenzhen Corporate Centre",location:"Shenzhen, China",sector:"Corporate Office",tier:"Premium Office",scope:"Conference suites, executive offices & open-plan floors",year:"2024",description:`A full-floor office fit-out in one of Shenzhen's landmark commercial towers, delivered for a financial services client requiring both high-volume open-plan capacity and a premium executive environment under the same roof.

ARTé designed and manufactured the complete furniture package across multiple floors: curved white Corian reception counters with integrated lighting, full workstation benching with amber acoustic screens, ergonomic task seating, and a glazed-wall conference suite furnished with a bespoke meeting table and upholstered side seating.

The executive floor was fitted separately to a higher specification — dark walnut L-shaped desk with integrated shelving wall, white leather visitor chairs, and a private lounge area behind glass. The two-tone palette of warm white and amber runs consistently through every zone, creating a coherent identity across the entire fit-out.`,gallery:[{src:"/static/china-office-cover.jpg",caption:"Conference Suite — glass-walled meeting rooms with city views"},{src:"/static/china-office-lounge.jpg",caption:"Reception & Lounge — curved joinery counter, breakout seating"},{src:"/static/china-office-exec.jpg",caption:"Executive Office — bespoke desk, shelving & visitor seating"},{src:"/static/china-office-openplan.jpg",caption:"Open-Plan Floor — full workstation fit-out, night view"},{src:"/static/china-office-workstations.jpg",caption:"Workstation Area — ergonomic benching with amber-panel screens"}]},"harbour-view-executive-suite":{title:"Harbour View Executive Suite",location:"Hong Kong",sector:"Corporate Office",tier:"Premium Office",scope:"Executive suite, boardroom, lounge & open-plan floors",year:"2025",description:`A landmark office fit-out occupying a high floor in one of Hong Kong's most prestigious commercial towers, with uninterrupted views across Victoria Harbour. ARTé was engaged to deliver the complete furniture and joinery package — from the executive suite and private director offices, through the 12-seat boardroom and hospitality bar, to the open-plan working floors.

Every piece was designed and manufactured to brief: bespoke executive desks finished in stone grey lacquer, hand-stitched leather executive seating, walnut joinery throughout the bar and reception walls, and a marble-topped hospitality counter. The boardroom table — solid walnut with integrated cable management — seats twelve, anchored by leather-and-timber chairs matched to the harbour-facing window wall.

The result is an environment that projects authority and confidence while remaining genuinely comfortable for the people who work in it every day.`,gallery:[{src:"/static/FveZLY8q.jpg",caption:"Executive Office — Victoria Harbour view"},{src:"/static/hk-office-boardroom.jpg",caption:"Boardroom — 12-seat conference table, harbour aspect"},{src:"/static/hk-office-exec-room.jpg",caption:"Director's Office — bespoke desk & executive seating"},{src:"/static/hk-office-bar.jpg",caption:"Hospitality Bar — walnut joinery, marble countertop"},{src:"/static/hk-office-lounge.jpg",caption:"Client Lounge — panoramic harbour & skyline views"},{src:"/static/hk-office-openplan.jpg",caption:"Open-Plan Working Floor — full workstation fit-out"}]}};function kr(e){var x;const t=wr[e];if(!t)return null;const{title:r,location:a,sector:s,tier:i,scope:n,year:l,description:c,gallery:d}=t,p=((x=d[0])==null?void 0:x.src)??"",f=d.map((b,j)=>`
    <figure class="gallery-item fade-in" style="animation-delay: ${.1+j*.08}s; cursor:pointer;" onclick="openLightbox(${j})">
      <div class="gallery-img-wrap" style="aspect-ratio:4/3; overflow:hidden; position:relative;">
        <img src="${b.src}" alt="${b.caption}"
             style="width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease;"
             class="gallery-img">
        <div class="gallery-overlay" style="position:absolute; inset:0; background:rgba(44,44,44,0); transition:background 0.3s ease; display:flex; align-items:flex-end; padding:1rem;">
          <span class="overlay-caption" style="font-size:0.6rem; letter-spacing:0.15em; text-transform:uppercase; color:#fff; opacity:0; transition:opacity 0.3s ease; font-family:'Inter',sans-serif;">${b.caption}</span>
        </div>
      </div>
      <figcaption style="padding: 0.75rem 0 0; font-size:0.7rem; color:#6B6B6B; letter-spacing:0.05em; font-family:'Inter',sans-serif;">${b.caption}</figcaption>
    </figure>
  `).join(""),g=d.map((b,j)=>`
    <div class="lb-slide" id="lb-slide-${j}" style="display:${j===0?"flex":"none"}; flex-direction:column; align-items:center; justify-content:center; height:100%;">
      <img src="${b.src}" alt="${b.caption}" style="max-height:80vh; max-width:90vw; object-fit:contain;">
      <p style="margin-top:1rem; font-size:0.7rem; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.7); font-family:'Inter',sans-serif;">${b.caption}</p>
    </div>
  `).join("");return Ae(r,`${r} — ${s} project in ${a} by ARTé. ${n}.`)+`

${Ce("projects")}

<!-- ══════════════════════════════════════════════
     BACK LINK
══════════════════════════════════════════════ -->
<div style="background: var(--arte-warm); padding-top: 6rem; padding-bottom: 1.25rem;">
  <div class="max-w-7xl mx-auto px-8">
    <a href="/projects" style="display:inline-flex; align-items:center; gap:0.5rem; font-size:0.65rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--arte-blue); text-decoration:none; font-family:'Inter',sans-serif; transition:opacity 0.2s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">
      <span style="font-size:0.8rem;">←</span> All Projects
    </a>
  </div>
</div>

<!-- ══════════════════════════════════════════════
     PROJECT HERO — COVER + TITLE
══════════════════════════════════════════════ -->
<section style="background: var(--arte-warm); padding-bottom: 0; overflow:hidden;">
  <!-- Cover image — full bleed -->
  <div style="width:100%; height: clamp(320px, 55vw, 680px); overflow:hidden; position:relative;">
    <img src="${p}" alt="${r}"
         style="width:100%; height:100%; object-fit:cover; object-position:center;">
    <div style="position:absolute; inset:0; background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%);"></div>
    <!-- Title overlay on hero -->
    <div style="position:absolute; bottom:0; left:0; right:0; padding: clamp(2rem,5vw,4rem) clamp(1.5rem,5vw,5rem);">
      <span style="font-size:0.6rem; letter-spacing:0.25em; text-transform:uppercase; color:rgba(255,255,255,0.7); font-family:'Inter',sans-serif;">${s}</span>
      <h1 class="heading-serif" style="font-size: clamp(2rem,5vw,4rem); color:#fff; margin-top:0.4rem; line-height:1.1; text-shadow: 0 2px 20px rgba(0,0,0,0.3);">${r}</h1>
      <p style="font-size:0.75rem; color:rgba(255,255,255,0.75); margin-top:0.6rem; font-family:'Inter',sans-serif; letter-spacing:0.05em;">
        <i class="fas fa-map-marker-alt" style="margin-right:0.4rem; color:#A8B5D1;"></i>${a}
        ${l?`<span style="margin:0 0.75rem; opacity:0.4;">|</span><i class="fas fa-calendar-alt" style="margin-right:0.4rem; color:#A8B5D1;"></i>${l}`:""}
      </p>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     PROJECT INFO + DESCRIPTION
══════════════════════════════════════════════ -->
<section style="background: #fff; padding: clamp(3rem,6vw,6rem) 0;">
  <div class="max-w-7xl mx-auto px-8">
    <div style="display:grid; grid-template-columns: 1fr; gap: 3rem;" class="md-grid-2col">
      
      <!-- Description -->
      <div style="max-width: 660px;">
        <p class="section-label mb-5">Project Overview</p>
        <div style="border-left: 3px solid var(--arte-blue); padding-left: 1.5rem; margin-bottom: 2rem;">
          <p class="text-sm leading-relaxed" style="color: var(--arte-mid); white-space: pre-line;">${c}</p>
        </div>
      </div>

      <!-- Specs sidebar -->
      <aside style="background: var(--arte-warm); padding: 2rem 2.5rem; align-self:start; border: 1px solid var(--arte-border);">
        <p class="section-label mb-5">Project Specifications</p>
        <div style="display:flex; flex-direction:column; gap:1.4rem;">
          <div>
            <p style="font-size:0.6rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--arte-blue); margin-bottom:0.35rem; font-family:'Inter',sans-serif;">Sector</p>
            <p class="text-sm" style="color:var(--arte-charcoal);">${s}</p>
          </div>
          <div>
            <p style="font-size:0.6rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--arte-blue); margin-bottom:0.35rem; font-family:'Inter',sans-serif;">Specification Tier</p>
            <p class="text-sm" style="color:var(--arte-charcoal);">${i}</p>
          </div>
          <div>
            <p style="font-size:0.6rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--arte-blue); margin-bottom:0.35rem; font-family:'Inter',sans-serif;">Location</p>
            <p class="text-sm" style="color:var(--arte-charcoal);">${a}</p>
          </div>
          ${l?`<div>
            <p style="font-size:0.6rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--arte-blue); margin-bottom:0.35rem; font-family:'Inter',sans-serif;">Year</p>
            <p class="text-sm" style="color:var(--arte-charcoal);">${l}</p>
          </div>`:""}
          <div>
            <p style="font-size:0.6rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--arte-blue); margin-bottom:0.35rem; font-family:'Inter',sans-serif;">Scope of Work</p>
            <p class="text-sm" style="color:var(--arte-charcoal);">${n}</p>
          </div>
          <div style="padding-top:1rem; border-top: 1px solid var(--arte-border);">
            <a href="/contact" style="display:inline-flex; align-items:center; gap:0.5rem; font-size:0.65rem; letter-spacing:0.2em; text-transform:uppercase; color:#fff; background:var(--arte-blue); padding:0.75rem 1.5rem; text-decoration:none; transition:opacity 0.2s; font-family:'Inter',sans-serif;" onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
              Discuss a Similar Project <span>→</span>
            </a>
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     PHOTO GALLERY
══════════════════════════════════════════════ -->
<section style="background: var(--arte-cream); padding: clamp(3rem,6vw,6rem) 0;">
  <div class="max-w-7xl mx-auto px-8">
    <p class="section-label mb-3 fade-in">Photo Gallery</p>
    <h2 class="heading-serif mb-10 fade-in" style="font-size: clamp(1.8rem,3vw,2.8rem); color: var(--arte-charcoal);">
      The Full Picture
    </h2>
    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr)); gap: 1.5rem;">
      ${f}
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     CTA BANNER
══════════════════════════════════════════════ -->
<section style="background: var(--arte-charcoal); padding: clamp(3rem,6vw,5rem) 0;">
  <div class="max-w-7xl mx-auto px-8 text-center">
    <p class="section-label mb-4 fade-in" style="color: rgba(255,255,255,0.5);">Work With ARTé</p>
    <h2 class="heading-serif mb-6 fade-in" style="font-size: clamp(1.8rem,3vw,3rem); color: #fff;">
      Ready to Brief Us on Your Project?
    </h2>
    <p class="text-sm mb-8 fade-in" style="color: rgba(255,255,255,0.65); max-width:480px; margin-left:auto; margin-right:auto; line-height:1.8;">
      From concept to installation — tell us what you're building and we'll tell you how we can make it exceptional.
    </p>
    <div class="fade-in" style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
      <a href="/contact" style="display:inline-flex; align-items:center; gap:0.5rem; font-size:0.65rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--arte-charcoal); background:#fff; padding:1rem 2.5rem; text-decoration:none; font-family:'Inter',sans-serif; transition:opacity 0.2s;" onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
        Start a Conversation →
      </a>
      <a href="/projects" style="display:inline-flex; align-items:center; gap:0.5rem; font-size:0.65rem; letter-spacing:0.2em; text-transform:uppercase; color:rgba(255,255,255,0.8); border:1px solid rgba(255,255,255,0.3); padding:1rem 2.5rem; text-decoration:none; font-family:'Inter',sans-serif; transition:opacity 0.2s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">
        ← All Projects
      </a>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     LIGHTBOX
══════════════════════════════════════════════ -->
<div id="lightbox" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.92); z-index:1000; align-items:center; justify-content:center;">
  <button onclick="closeLightbox()" style="position:absolute; top:1.5rem; right:2rem; background:none; border:none; color:#fff; font-size:2rem; cursor:pointer; opacity:0.7; line-height:1;" aria-label="Close">&times;</button>
  <button onclick="prevSlide()" style="position:absolute; left:1.5rem; top:50%; transform:translateY(-50%); background:none; border:none; color:#fff; font-size:2rem; cursor:pointer; opacity:0.6; padding:1rem;" aria-label="Previous">&#8249;</button>
  <button onclick="nextSlide()" style="position:absolute; right:1.5rem; top:50%; transform:translateY(-50%); background:none; border:none; color:#fff; font-size:2rem; cursor:pointer; opacity:0.6; padding:1rem;" aria-label="Next">&#8250;</button>
  <div style="width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:4rem 5rem;">
    ${g}
  </div>
  <div id="lb-counter" style="position:absolute; bottom:1.5rem; left:50%; transform:translateX(-50%); font-size:0.65rem; letter-spacing:0.2em; text-transform:uppercase; color:rgba(255,255,255,0.5); font-family:'Inter',sans-serif;">1 / ${d.length}</div>
</div>

<style>
  .gallery-item:hover .gallery-img { transform: scale(1.04); }
  .gallery-item:hover .gallery-overlay { background: rgba(44,44,44,0.35) !important; }
  .gallery-item:hover .overlay-caption { opacity: 1 !important; }
  @media (min-width: 768px) {
    .md-grid-2col { grid-template-columns: 1fr 360px !important; }
  }
</style>

<script>
  // ── Lightbox ──
  let currentSlide = 0;
  const totalSlides = ${d.length};
  function openLightbox(idx) {
    currentSlide = idx;
    showSlide(currentSlide);
    document.getElementById('lightbox').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = '';
  }
  function showSlide(idx) {
    for (let i = 0; i < totalSlides; i++) {
      const el = document.getElementById('lb-slide-' + i);
      if (el) el.style.display = i === idx ? 'flex' : 'none';
    }
    document.getElementById('lb-counter').textContent = (idx + 1) + ' / ' + totalSlides;
  }
  function nextSlide() { currentSlide = (currentSlide + 1) % totalSlides; showSlide(currentSlide); }
  function prevSlide() { currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; showSlide(currentSlide); }
  document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (lb && lb.style.display !== 'none') {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') closeLightbox();
    }
  });
  document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
  });

  // ── Fade-in on scroll ──
  const fadeEls = document.querySelectorAll('.fade-in');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target); }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => obs.observe(el));

  // ── Nav scroll ──
  const detailNav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      detailNav.style.background = 'rgba(255,255,255,0.97)';
      detailNav.style.borderBottom = '1px solid #E8E4DF';
      detailNav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)';
    } else {
      detailNav.style.background = 'transparent';
      detailNav.style.borderBottom = 'none';
      detailNav.style.boxShadow = 'none';
    }
  });
<\/script>

${Te()}`}function jr(){return Ae("Contact","Get in touch with ARTé to discuss your B2B furniture project — hotels, offices, student housing and more.")+`

${Ce("contact")}

<!-- ══════════════════════════════════════════════
     CONTACT HERO
══════════════════════════════════════════════ -->
<section style="background: var(--arte-warm); overflow: hidden;">
  <div style="display: grid; grid-template-columns: 1fr 1fr; min-height: 480px;">
    
    <!-- Left: Text -->
    <div style="padding: clamp(4rem, 8vw, 7rem) clamp(2rem, 5vw, 4rem) clamp(3rem, 5vw, 5rem) clamp(2rem, 6vw, 5rem); display: flex; flex-direction: column; justify-content: center;">
      <p class="section-label mb-5 fade-in">Get In Touch</p>
      <h1 class="heading-serif mb-6 fade-in" style="font-size: clamp(2.4rem, 4vw, 4.2rem); color: var(--arte-charcoal); line-height: 1.1;">
        Let's Build<br><em style="color: var(--arte-blue);">Something</em><br>Together
      </h1>
      <p class="text-sm leading-relaxed fade-in" style="color: var(--arte-mid); max-width: 420px;">
        Whether you're a hotel group with a new opening, a developer planning a large residential scheme, or an individual seeking truly exceptional furniture — we'd love to hear from you.
      </p>
    </div>
    
    <!-- Right: Photo -->
    <div style="position: relative; overflow: hidden; min-height: 420px;">
      <img 
        src="https://sspark.genspark.ai/cfimages?u1=R3UY4ENbwTmy2hRh78BK2ZMhJf0iirp9I6aGepDXVh2dXIl%2Fcgj8GIu9snJ8WXTXzZH927U%2F1ABQI6VJt0sZCfoCqttxP1qj%2B5Kcrm8vXVq4OdWrTBq70pQ%2FPk%2FcakcDOR%2BLmbsgd2AvwKDq3AXDgw%3D%3D&u2=tLGz5GVswlVdey0x&width=2560"
        alt="Bespoke luxury bedroom interior — ARTé Living"
        style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center;"
      />
      <!-- Subtle gradient blending left edge into cream -->
      <div style="position: absolute; inset: 0; background: linear-gradient(to right, var(--arte-warm) 0%, transparent 18%); pointer-events: none;"></div>
    </div>
    
  </div>
</section>

<!-- ══════════════════════════════════════════════
     CONTACT LAYOUT
══════════════════════════════════════════════ -->
<section class="py-16 md:py-24" style="background: var(--arte-cream);">
  <div class="max-w-7xl mx-auto px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      
      <!-- Contact Form -->
      <div class="fade-in">
        <p class="section-label mb-6">Send an Enquiry</p>
        
        <form id="contact-form" class="space-y-8">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label class="form-label block mb-2">First Name *</label>
              <input type="text" name="firstName" placeholder="Your first name" class="form-input" required>
            </div>
            <div>
              <label class="form-label block mb-2">Last Name *</label>
              <input type="text" name="lastName" placeholder="Your last name" class="form-input" required>
            </div>
          </div>
          
          <div>
            <label class="form-label block mb-2">Company / Organisation *</label>
            <input type="text" name="company" placeholder="Hotel group, developer, or company name" class="form-input" required>
          </div>
          
          <div>
            <label class="form-label block mb-2">Email Address *</label>
            <input type="email" name="email" placeholder="your@company.com" class="form-input" required>
          </div>
          
          <div>
            <label class="form-label block mb-2">Phone Number</label>
            <input type="tel" name="phone" placeholder="+44 (0) 20..." class="form-input">
          </div>
          
          <div>
            <label class="form-label block mb-2">Project Type *</label>
            <select name="projectType" class="form-input" required style="cursor: pointer;">
              <option value="" disabled selected>Select sector...</option>
              <option value="luxury-hotel">Luxury Hotel / Resort</option>
              <option value="serviced-apartment">Serviced Apartments</option>
              <option value="office">Corporate Office</option>
              <option value="student-housing">Student Housing</option>
              <option value="senior-living">Senior / Care Living</option>
              <option value="private-residence">Private Residence</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label class="form-label block mb-2">Estimated Number of Units / Rooms</label>
            <input type="text" name="scale" placeholder="e.g. 200 bedrooms, 5 floors..." class="form-input">
          </div>
          
          <div>
            <label class="form-label block mb-2">Tell Us About Your Project *</label>
            <textarea name="message" rows="5" placeholder="Share your vision, timeline, and any specific requirements..." class="form-input resize-none" required style="border-bottom: 1px solid var(--arte-border);"></textarea>
          </div>
          
          <div>
            <button type="submit" class="btn-primary w-full justify-center" id="submit-btn">
              Send Enquiry <i class="fas fa-arrow-right text-xs"></i>
            </button>
          </div>
          
          <p class="text-xs" style="color: var(--arte-mid);">We respond to all enquiries within one business day.</p>
          
        </form>
        
        <!-- Success message -->
        <div id="success-msg" class="hidden p-6 border mt-4" style="border-color: var(--arte-blue); background: rgba(123,142,185,0.06);">
          <div class="flex items-start gap-3">
            <i class="fas fa-check-circle mt-0.5" style="color: var(--arte-blue);"></i>
            <div>
              <p class="text-sm font-medium mb-1" style="color: var(--arte-charcoal);">Enquiry Received</p>
              <p class="text-xs leading-relaxed" style="color: var(--arte-mid);">Thank you for getting in touch. A member of our team will contact you within one business day.</p>
            </div>
          </div>
        </div>
        
      </div>
      
      <!-- Info Sidebar -->
      <div class="fade-in">
        
        <!-- Direct Contact -->
        <div class="p-8 mb-6" style="background: var(--arte-warm); border: 1px solid var(--arte-border);">
          <p class="section-label mb-6">Direct Contact</p>
          
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 border flex items-center justify-center flex-shrink-0" style="border-color: var(--arte-blue);">
                <i class="fas fa-envelope text-xs" style="color: var(--arte-blue);"></i>
              </div>
              <div>
                <p class="form-label mb-1">Email</p>
                <a href="mailto:enquiries@arte-living.com" class="text-sm hover:underline" style="color: var(--arte-charcoal);">enquiries@arte-living.com</a>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 border flex items-center justify-center flex-shrink-0" style="border-color: var(--arte-blue);">
                <i class="fas fa-phone text-xs" style="color: var(--arte-blue);"></i>
              </div>
              <div>
                <p class="form-label mb-1">Phone / WhatsApp</p>
                <a href="tel:+85256061921" class="text-sm hover:underline" style="color: var(--arte-charcoal);">+852 5606 1921</a>
                <div class="mt-1">
                  <a href="https://wa.me/85256061921" target="_blank" rel="noopener"
                     class="inline-flex items-center gap-1.5 text-xs px-3 py-1 transition-all"
                     style="background: rgba(37,211,102,0.1); color: #25D366; border: 1px solid rgba(37,211,102,0.3); border-radius: 2px;">
                    <i class="fab fa-whatsapp text-sm"></i> Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            

          </div>
        </div>
        
        <!-- What to Expect -->
        <div class="p-8" style="border: 1px solid var(--arte-border);">
          <p class="section-label mb-6">What Happens Next</p>
          <div class="space-y-5">
            <div class="flex gap-4">
              <span class="heading-serif text-xl flex-shrink-0" style="color: var(--arte-blue);">01</span>
              <div>
                <p class="text-xs font-medium tracking-wide mb-1" style="color: var(--arte-charcoal);">Initial Response</p>
                <p class="text-xs leading-relaxed" style="color: var(--arte-mid);">We review your brief and respond within one business day to confirm receipt and next steps.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <span class="heading-serif text-xl flex-shrink-0" style="color: var(--arte-blue);">02</span>
              <div>
                <p class="text-xs font-medium tracking-wide mb-1" style="color: var(--arte-charcoal);">Discovery Call</p>
                <p class="text-xs leading-relaxed" style="color: var(--arte-mid);">A 30-minute call with our project team to understand your vision, budget, and timeline in depth.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <span class="heading-serif text-xl flex-shrink-0" style="color: var(--arte-blue);">03</span>
              <div>
                <p class="text-xs font-medium tracking-wide mb-1" style="color: var(--arte-charcoal);">Proposal</p>
                <p class="text-xs leading-relaxed" style="color: var(--arte-mid);">A tailored proposal including concept direction, programme outline, and indicative investment range.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  </div>
</section>

<script>
document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin text-xs mr-2"></i> Sending...';
  btn.disabled = true;
  
  const data = {};
  new FormData(this).forEach((v, k) => data[k] = v);
  
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    if (result.success) {
      document.getElementById('contact-form').style.display = 'none';
      document.getElementById('success-msg').classList.remove('hidden');
    }
  } catch(err) {
    btn.innerHTML = 'Send Enquiry <i class="fas fa-arrow-right text-xs"></i>';
    btn.disabled = false;
  }
});
<\/script>

${Te()}`}const Ze=new kt,Er=Object.assign({"/src/index.tsx":U});let St=!1;for(const[,e]of Object.entries(Er))e&&(Ze.all("*",t=>{let r;try{r=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,r)}),Ze.notFound(t=>{let r;try{r=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,r)}),St=!0);if(!St)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ze as default};
