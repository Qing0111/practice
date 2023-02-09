import{l as _,r as h,x as Y,y as Z,z as ee,w as J,A as te,B as ne,C as re,s as ae,_ as oe,D as ie,a as F,c as I,b as v,E as $,d as x,v as se,e as le,F as ue,g as de,G as fe,t as ce,n as pe}from"./index-08b39dde.js";var V;const b=typeof window<"u",ve=e=>typeof e=="function",_e=e=>typeof e=="string",ye=()=>{};b&&((V=window==null?void 0:window.navigator)!=null&&V.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function L(e){return typeof e=="function"?e():_(e)}function we(e,t){function n(...r){return new Promise((l,u)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(l).catch(u)})}return n}const U=e=>e();function Oe(e=U){const t=h(!0);function n(){t.value=!1}function r(){t.value=!0}const l=(...u)=>{t.value&&e(...u)};return{isActive:Y(t),pause:n,resume:r,eventFilter:l}}function me(e){return e}function ge(e){return Z()?(ee(e),!0):!1}var D=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,Se=(e,t)=>{var n={};for(var r in e)he.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&D)for(var r of D(e))t.indexOf(r)<0&&be.call(e,r)&&(n[r]=e[r]);return n};function Pe(e,t,n={}){const r=n,{eventFilter:l=U}=r,u=Se(r,["eventFilter"]);return J(e,we(l,t),u)}var Fe=Object.defineProperty,Ie=Object.defineProperties,$e=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,B=(e,t,n)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Te=(e,t)=>{for(var n in t||(t={}))G.call(t,n)&&B(e,n,t[n]);if(P)for(var n of P(t))H.call(t,n)&&B(e,n,t[n]);return e},Ee=(e,t)=>Ie(e,$e(t)),Ne=(e,t)=>{var n={};for(var r in e)G.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&P)for(var r of P(e))t.indexOf(r)<0&&H.call(e,r)&&(n[r]=e[r]);return n};function je(e,t,n={}){const r=n,{eventFilter:l}=r,u=Ne(r,["eventFilter"]),{eventFilter:y,pause:o,resume:p,isActive:d}=Oe(l);return{stop:Pe(e,t,Ee(Te({},u),{eventFilter:y})),pause:o,resume:p,isActive:d}}function Ae(e){var t;const n=L(e);return(t=n==null?void 0:n.$el)!=null?t:n}const T=b?window:void 0;b&&window.document;b&&window.navigator;b&&window.location;function Ce(...e){let t,n,r,l;if(_e(e[0])||Array.isArray(e[0])?([n,r,l]=e,t=T):[t,n,r,l]=e,!t)return ye;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const u=[],y=()=>{u.forEach(f=>f()),u.length=0},o=(f,a,s)=>(f.addEventListener(a,s,l),()=>f.removeEventListener(a,s,l)),p=J(()=>Ae(t),f=>{y(),f&&u.push(...n.flatMap(a=>r.map(s=>o(f,a,s))))},{immediate:!0,flush:"post"}),d=()=>{p(),y()};return ge(d),d}const E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N="__vueuse_ssr_handlers__";E[N]=E[N]||{};const xe=E[N];function Ve(e,t){return xe[e]||t}function De(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Be=Object.defineProperty,Q=Object.getOwnPropertySymbols,Qe=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,z=(e,t,n)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W=(e,t)=>{for(var n in t||(t={}))Qe.call(t,n)&&z(e,n,t[n]);if(Q)for(var n of Q(t))ze.call(t,n)&&z(e,n,t[n]);return e};const We={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function ke(e,t,n,r={}){var l;const{flush:u="pre",deep:y=!0,listenToStorageChanges:o=!0,writeDefaults:p=!0,mergeDefaults:d=!1,shallow:f,window:a=T,eventFilter:s,onError:w=i=>{console.error(i)}}=r,g=(f?te:h)(t);if(!n)try{n=Ve("getDefaultStorage",()=>{var i;return(i=T)==null?void 0:i.localStorage})()}catch(i){w(i)}if(!n)return g;const O=L(t),j=De(O),S=(l=r.serializer)!=null?l:We[j],{pause:K,resume:A}=je(g,()=>q(g.value),{flush:u,deep:y,eventFilter:s});return a&&o&&Ce(a,"storage",C),C(),g;function q(i){try{if(i==null)n.removeItem(e);else{const c=S.write(i),m=n.getItem(e);m!==c&&(n.setItem(e,c),a&&(a==null||a.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:m,newValue:c,storageArea:n}))))}}catch(c){w(c)}}function X(i){const c=i?i.newValue:n.getItem(e);if(c==null)return p&&O!==null&&n.setItem(e,S.write(O)),O;if(!i&&d){const m=S.read(c);return ve(d)?d(m,O):j==="object"&&!Array.isArray(m)?W(W({},O),m):m}else return typeof c!="string"?c:S.read(c)}function C(i){if(!(i&&i.storageArea!==n)){if(i&&i.key==null){g.value=O;return}if(!(i&&i.key!==e)){K();try{g.value=X(i)}catch(c){w(c)}finally{i?ne(A):A()}}}}}var k;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(k||(k={}));var Me=Object.defineProperty,M=Object.getOwnPropertySymbols,Re=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,R=(e,t,n)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Le=(e,t)=>{for(var n in t||(t={}))Re.call(t,n)&&R(e,n,t[n]);if(M)for(var n of M(t))Je.call(t,n)&&R(e,n,t[n]);return e};const Ue={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Le({linear:me},Ue);const Ge=re("todos",()=>{const e=ke("todos",h([])),t=h("all"),n=ae(()=>t.value==="finished"?e.value.filter(o=>o.isFinished):t.value==="unFinished"?e.value.filter(o=>!o.isFinished):e.value);return{todos:e,filter:t,addTodo:o=>{o&&e.value.push({id:Math.floor(Math.random()*1e8),text:o,isFinished:!1})},toggleTodo:o=>{const p=e.value.findIndex(d=>d.id===o);e.value[p].isFinished=!e.value[p].isFinished},updateFilter:o=>{t.value=o},filterTodo:n,delBtn:o=>{e.value.splice(e.value.indexOf(o),1)}}});const He={class:"btn-group"},Ke={class:"input"},qe=["onClick","onUpdate:modelValue"],Xe=["onClick"],Ye={__name:"TodosView",setup(e){const t=h(""),n=Ge(),{filterTodo:r,filter:l}=ie(n),{addTodo:u,toggleTodo:y,updateFilter:o,delBtn:p}=n,d=f=>{u(f),t.value=""};return(f,a)=>(F(),I("main",null,[v("div",He,[v("button",{onClick:a[0]||(a[0]=s=>_(o)("all")),class:$({active:_(l)=="all"})}," all ",2),v("button",{onClick:a[1]||(a[1]=s=>_(o)("finished")),class:$({active:_(l)=="finished"})}," finished ",2),v("button",{onClick:a[2]||(a[2]=s=>_(o)("unFinished")),class:$({active:_(l)=="unFinished"})}," unFinished ",2)]),v("div",Ke,[x(v("input",{type:"text",class:"newTodo","onUpdate:modelValue":a[3]||(a[3]=s=>t.value=s),onKeyup:a[4]||(a[4]=le(s=>d(t.value),["enter"]))},null,544),[[se,t.value]]),v("button",{class:"addBtn",onClick:a[5]||(a[5]=s=>d(t.value))},"Add")]),(F(!0),I(ue,null,de(_(r),s=>(F(),I("article",{key:s.id},[x(v("input",{type:"checkbox",onClick:w=>_(y)(s.id),"onUpdate:modelValue":w=>s.isFinished=w},null,8,qe),[[fe,s.isFinished]]),v("h1",{style:pe(s.isFinished&&{textDecoration:"line-through"})},ce(s.text),5),v("button",{type:"button",onClick:w=>_(p)(s)},"delete",8,Xe)]))),128))]))}},et=oe(Ye,[["__scopeId","data-v-62a05223"]]);export{et as default};