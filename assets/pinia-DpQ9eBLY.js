import{e as M,r as q,m as B,f as $,i as T,w as tt,j as et,k as E,l as W,t as D,n as st,q as nt,u as ot,v as ct,x as rt,c as ut}from"./@vue-Byjcq-FP.js";var at=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let J;const k=t=>J=t,K=Symbol();function L(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var R;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(R||(R={}));function St(){const t=M(!0),o=t.run(()=>q({}));let s=[],e=[];const r=B({install(u){k(r),r._a=u,u.provide(K,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!at?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return r}const z=()=>{};function A(t,o,s,e=z){t.push(o);const r=()=>{const u=t.indexOf(o);u>-1&&(t.splice(u,1),e())};return!s&&nt()&&ot(r),r}function P(t,...o){t.slice().forEach(s=>{s(...o)})}const ft=t=>t(),H=Symbol(),I=Symbol();function O(t,o){t instanceof Map&&o instanceof Map?o.forEach((s,e)=>t.set(e,s)):t instanceof Set&&o instanceof Set&&o.forEach(t.add,t);for(const s in o){if(!o.hasOwnProperty(s))continue;const e=o[s],r=t[s];L(r)&&L(e)&&t.hasOwnProperty(s)&&!E(e)&&!W(e)?t[s]=O(r,e):t[s]=e}return t}const it=Symbol();function lt(t){return!L(t)||!t.hasOwnProperty(it)}const{assign:y}=Object;function ht(t){return!!(E(t)&&t.effect)}function bt(t,o,s,e){const{state:r,actions:u,getters:f}=o,a=s.state.value[t];let C;function b(){a||(s.state.value[t]=r?r():{});const v=rt(s.state.value[t]);return y(v,u,Object.keys(f||{}).reduce((S,m)=>(S[m]=B(ut(()=>{k(s);const _=s._s.get(t);return f[m].call(_,_)})),S),{}))}return C=Q(t,b,o,s,e,!0),C}function Q(t,o,s={},e,r,u){let f;const a=y({actions:{}},s),C={deep:!0};let b,v,S=[],m=[],_;const d=e.state.value[t];!u&&!d&&(e.state.value[t]={}),q({});let N;function F(c){let n;b=v=!1,typeof c=="function"?(c(e.state.value[t]),n={type:R.patchFunction,storeId:t,events:_}):(O(e.state.value[t],c),n={type:R.patchObject,payload:c,storeId:t,events:_});const i=N=Symbol();ct().then(()=>{N===i&&(b=!0)}),v=!0,P(S,n,e.state.value[t])}const U=u?function(){const{state:n}=s,i=n?n():{};this.$patch(j=>{y(j,i)})}:z;function X(){f.stop(),S=[],m=[],e._s.delete(t)}const V=(c,n="")=>{if(H in c)return c[I]=n,c;const i=function(){k(e);const j=Array.from(arguments),w=[],p=[];function Z(l){w.push(l)}function G(l){p.push(l)}P(m,{args:j,name:i[I],store:h,after:Z,onError:G});let x;try{x=c.apply(this&&this.$id===t?this:h,j)}catch(l){throw P(p,l),l}return x instanceof Promise?x.then(l=>(P(w,l),l)).catch(l=>(P(p,l),Promise.reject(l))):(P(w,x),x)};return i[H]=!0,i[I]=n,i},Y={_p:e,$id:t,$onAction:A.bind(null,m),$patch:F,$reset:U,$subscribe(c,n={}){const i=A(S,c,n.detached,()=>j()),j=f.run(()=>tt(()=>e.state.value[t],w=>{(n.flush==="sync"?v:b)&&c({storeId:t,type:R.direct,events:_},w)},y({},C,n)));return i},$dispose:X},h=et(Y);e._s.set(t,h);const g=(e._a&&e._a.runWithContext||ft)(()=>e._e.run(()=>(f=M()).run(()=>o({action:V}))));for(const c in g){const n=g[c];if(E(n)&&!ht(n)||W(n))u||(d&&lt(n)&&(E(n)?n.value=d[c]:O(n,d[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const i=V(n,c);g[c]=i,a.actions[c]=n}}return y(h,g),y(D(h),g),Object.defineProperty(h,"$state",{get:()=>e.state.value[t],set:c=>{F(n=>{y(n,c)})}}),e._p.forEach(c=>{y(h,f.run(()=>c({store:h,app:e._a,pinia:e,options:a})))}),d&&u&&s.hydrate&&s.hydrate(h.$state,d),b=!0,v=!0,h}function mt(t,o,s){let e,r;const u=typeof o=="function";typeof t=="string"?(e=t,r=u?s:o):(r=t,e=t.id);function f(a,C){const b=$();return a=a||(b?T(K,null):null),a&&k(a),a=J,a._s.has(e)||(u?Q(e,o,r,a):bt(e,r,a)),a._s.get(e)}return f.$id=e,f}function _t(t){{t=D(t);const o={};for(const s in t){const e=t[s];(E(e)||W(e))&&(o[s]=st(t,s))}return o}}export{St as c,mt as d,_t as s};
