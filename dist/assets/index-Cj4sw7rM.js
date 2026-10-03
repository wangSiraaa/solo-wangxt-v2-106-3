(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ru(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Vt={},Br=[],Mi=()=>{},xd=()=>!1,jo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Qo=n=>n.startsWith("onUpdate:"),dn=Object.assign,Cu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},eg=Object.prototype.hasOwnProperty,Dt=(n,e)=>eg.call(n,e),ct=Array.isArray,Mr=n=>Ra(n)==="[object Map]",er=n=>Ra(n)==="[object Set]",mh=n=>Ra(n)==="[object Date]",mt=n=>typeof n=="function",Zt=n=>typeof n=="string",Ei=n=>typeof n=="symbol",Bt=n=>n!==null&&typeof n=="object",Sd=n=>(Bt(n)||mt(n))&&mt(n.then)&&mt(n.catch),yd=Object.prototype.toString,Ra=n=>yd.call(n),tg=n=>Ra(n).slice(8,-1),Md=n=>Ra(n)==="[object Object]",Pu=n=>Zt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Qs=Ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),el=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},ng=/-\w/g,ri=el(n=>n.replace(ng,e=>e.slice(1).toUpperCase())),ig=/\B([A-Z])/g,Kr=el(n=>n.replace(ig,"-$1").toLowerCase()),bd=el(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ml=el(n=>n?`on${bd(n)}`:""),vi=(n,e)=>!Object.is(n,e),To=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ed=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},tl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let gh;const nl=()=>gh||(gh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Lu(n){if(ct(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Zt(i)?og(i):Lu(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Zt(n)||Bt(n))return n}const rg=/;(?![^(]*\))/g,sg=/:([^]+)/,ag=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function og(n){const e={};return n.replace(ag,t=>t.startsWith("/*")?"":t).split(rg).forEach(t=>{if(t){const i=t.split(sg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Nn(n){let e="";if(Zt(n))e=n;else if(ct(n))for(let t=0;t<n.length;t++){const i=Nn(n[t]);i&&(e+=i+" ")}else if(Bt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const lg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cg=Ru(lg);function Td(n){return!!n||n===""}function ug(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let r=0;i&&r<n.length;r++)i=tr(n[r],e[r],t);return i}function _h(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),r=new Uint8Array(i.length);for(const s of n){let a=-1;for(let o=0;o<i.length;o++)if(!r[o]&&tr(s,i[o],t)){a=o;break}if(a<0)return!1;r[a]=1}return!0}function hg(n,e,t){let i=Mr(n),r=Mr(e);if(i||r||(i=er(n),r=er(e),i||r))return i&&r?_h(n,e,t):!1;const s=Object.keys(n).length,a=Object.keys(e).length;if(s!==a)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!tr(n[o],e[o],t))return!1}return String(n)===String(e)}function vh(n,e,t,i){t||(t=[new Map,new Map]);const[r,s]=t;if(r.has(n)||s.has(e))return r.get(n)===e&&s.get(e)===n;r.set(n,e),s.set(e,n);const a=i(n,e,t);return r.delete(n),s.delete(e),a}function tr(n,e,t){if(n===e)return!0;let i=mh(n),r=mh(e);return i||r?i&&r?n.getTime()===e.getTime():!1:(i=Ei(n),r=Ei(e),i||r?n===e:(i=ct(n),r=ct(e),i||r?i&&r?vh(n,e,t,ug):!1:(i=Bt(n),r=Bt(e),i||r?!i||!r?!1:vh(n,e,t,hg):String(n)===String(e))))}function Du(n,e){return n.findIndex(t=>tr(t,e))}const Ad=n=>!!(n&&n.__v_isRef===!0),We=n=>Zt(n)?n:n==null?"":ct(n)||Bt(n)&&(n.toString===yd||!mt(n.toString))?Ad(n)?We(n.value):JSON.stringify(n,wd,2):String(n),wd=(n,e)=>Ad(e)?wd(n,e.value):Mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[bl(i,s)+" =>"]=r,t),{})}:er(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>bl(t))}:Ei(e)?bl(e):Bt(e)&&!ct(e)&&!Md(e)?String(e):e,bl=(n,e="")=>{var t;return Ei(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cn;class fg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&cn&&(cn.active?(this.parent=cn,this.index=(cn.scopes||(cn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=cn;try{return cn=this,e()}finally{cn=t}}}on(){++this._on===1&&(this.prevScope=cn,cn=this)}off(){if(this._on>0&&--this._on===0){if(cn===this)cn=this.prevScope;else{let e=cn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function dg(){return cn}let Ht;const El=new WeakSet;class Rd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,cn&&(cn.active?cn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,El.has(this)&&(El.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,xh(this),Ld(this);const e=Ht,t=si;Ht=this,si=!0;try{return this.fn()}finally{Dd(this),Ht=e,si=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Nu(e);this.deps=this.depsTail=void 0,xh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?El.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yc(this)&&this.run()}get dirty(){return yc(this)}}let Cd=0,ea,ta;function Pd(n,e=!1){if(n.flags|=8,e){n.next=ta,ta=n;return}n.next=ea,ea=n}function Iu(){Cd++}function Uu(){if(--Cd>0)return;if(ta){let e=ta;for(ta=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ea;){let e=ea;for(ea=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Ld(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Dd(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Nu(i),pg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function yc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Id(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Id(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ua)||(n.globalVersion=ua,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!yc(n))))return;n.flags|=2;const e=n.dep,t=Ht,i=si;Ht=n,si=!0;try{Ld(n);const r=n.fn(n._value);(e.version===0||vi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ht=t,si=i,Dd(n),n.flags&=-3}}function Nu(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Nu(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function pg(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let si=!0;const Ud=[];function nr(){Ud.push(si),si=!1}function ir(){const n=Ud.pop();si=n===void 0?!0:n}function xh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ht;Ht=void 0;try{e()}finally{Ht=t}}}let ua=0;class mg{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ht||!si||Ht===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ht)t=this.activeLink=new mg(Ht,this),Ht.deps?(t.prevDep=Ht.depsTail,Ht.depsTail.nextDep=t,Ht.depsTail=t):Ht.deps=Ht.depsTail=t,Nd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ht.depsTail,t.nextDep=void 0,Ht.depsTail.nextDep=t,Ht.depsTail=t,Ht.deps===t&&(Ht.deps=i)}return t}trigger(e){this.version++,ua++,this.notify(e)}notify(e){Iu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Uu()}}}function Nd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Nd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Mc=new WeakMap,Gr=Symbol(""),bc=Symbol(""),ha=Symbol("");function xn(n,e,t){if(si&&Ht){let i=Mc.get(n);i||Mc.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Fu),r.map=i,r.key=t),r.track()}}function Xi(n,e,t,i,r,s){const a=Mc.get(n);if(!a){ua++;return}const o=l=>{l&&l.trigger()};if(Iu(),e==="clear")a.forEach(o);else{const l=ct(n),c=l&&Pu(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===ha||!Ei(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(ha)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Gr)),Mr(n)&&o(a.get(bc)));break;case"delete":l||(o(a.get(Gr)),Mr(n)&&o(a.get(bc)));break;case"set":Mr(n)&&o(a.get(Gr));break}}Uu()}function Zr(n){const e=Lt(n);return e===n||(xn(e,"iterate",ha),qn(n))?e:Ti(n)?br(n)?e.map(t=>Er(Yn(t))):e.map(Er):e.map(Yn)}function il(n){return xn(n=Lt(n),"iterate",ha),n}function pi(n,e){return Ti(n)?Er(br(n)?Yn(e):e):Yn(e)}const gg={__proto__:null,[Symbol.iterator](){return Tl(this,Symbol.iterator,n=>pi(this,n))},concat(...n){return Zr(this).concat(...n.map(e=>ct(e)?Zr(e):e))},entries(){return Tl(this,"entries",n=>(n[1]=pi(this,n[1]),n))},every(n,e){return Ni(this,"every",n,e,void 0,arguments)},filter(n,e){return Ni(this,"filter",n,e,t=>t.map(i=>pi(this,i)),arguments)},find(n,e){return Ni(this,"find",n,e,t=>pi(this,t),arguments)},findIndex(n,e){return Ni(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ni(this,"findLast",n,e,t=>pi(this,t),arguments)},findLastIndex(n,e){return Ni(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ni(this,"forEach",n,e,void 0,arguments)},includes(...n){return Al(this,"includes",n)},indexOf(...n){return Al(this,"indexOf",n)},join(n){return Zr(this).join(n)},lastIndexOf(...n){return Al(this,"lastIndexOf",n)},map(n,e){return Ni(this,"map",n,e,void 0,arguments)},pop(){return Ns(this,"pop")},push(...n){return Ns(this,"push",n)},reduce(n,...e){return Sh(this,"reduce",n,e)},reduceRight(n,...e){return Sh(this,"reduceRight",n,e)},shift(){return Ns(this,"shift")},some(n,e){return Ni(this,"some",n,e,void 0,arguments)},splice(...n){return Ns(this,"splice",n)},toReversed(){return Zr(this).toReversed()},toSorted(n){return Zr(this).toSorted(n)},toSpliced(...n){return Zr(this).toSpliced(...n)},unshift(...n){return Ns(this,"unshift",n)},values(){return Tl(this,"values",n=>pi(this,n))}};function Tl(n,e,t){const i=il(n),r=i[e]();return i!==n&&!qn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const _g=Array.prototype;function Ni(n,e,t,i,r,s){const a=il(n),o=a!==n&&!qn(n),l=a[e];if(l!==_g[e]){const f=l.apply(n,s);return o?Yn(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,pi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Sh(n,e,t,i){const r=il(n),s=r!==n&&!qn(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=pi(n,c)),t.call(this,c,pi(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](a,...i);return o?pi(n,l):l}function Al(n,e,t){const i=Lt(n);xn(i,"iterate",ha);const r=i[e](...t);return(r===-1||r===!1)&&zu(t[0])?(t[0]=Lt(t[0]),i[e](...t)):r}function Ns(n,e,t=[]){nr(),Iu();const i=Lt(n)[e].apply(n,t);return Uu(),ir(),i}const vg=Ru("__proto__,__v_isRef,__isVue"),Fd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ei));function xg(n){Ei(n)||(n=String(n));const e=Lt(this);return xn(e,"has",n),e.hasOwnProperty(n)}class Od{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Cg:Hd:s?Vd:zd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=ct(e);if(!r){let l;if(a&&(l=gg[t]))return l;if(t==="hasOwnProperty")return xg}const o=Reflect.get(e,t,yn(e)?e:i);if((Ei(t)?Fd.has(t):vg(t))||(r||xn(e,"get",t),s))return o;if(yn(o)){const l=a&&Pu(t)?o:o.value;return r&&Bt(l)?Tc(l):l}return Bt(o)?r?Tc(o):gs(o):o}}class Bd extends Od{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=ct(e)&&Pu(t);if(!this._isShallow){const c=Ti(s);if(!qn(i)&&!Ti(i)&&(s=Lt(s),i=Lt(i)),!a&&yn(s)&&!yn(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:Dt(e,t),l=Reflect.set(e,t,i,yn(e)?e:r);return e===Lt(r)&&l&&(o?vi(i,s)&&Xi(e,"set",t,i):Xi(e,"add",t,i)),l}deleteProperty(e,t){const i=Dt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Xi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Ei(t)||!Fd.has(t))&&xn(e,"has",t),i}ownKeys(e){return xn(e,"iterate",ct(e)?"length":Gr),Reflect.ownKeys(e)}}class Sg extends Od{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const yg=new Bd,Mg=new Sg,bg=new Bd(!0);const Ec=n=>n,Va=n=>Reflect.getPrototypeOf(n);function Eg(n,e,t){return function(...i){const r=this.__v_raw,s=Lt(r),a=Mr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Ec:e?Er:Yn;return!e&&xn(s,"iterate",l?bc:Gr),dn(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Ha(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Tg(n,e){const t={get(r){const s=this.__v_raw,a=Lt(s),o=Lt(r);n||(vi(r,o)&&xn(a,"get",r),xn(a,"get",o));const{has:l}=Va(a),c=e?Ec:n?Er:Yn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&xn(Lt(r),"iterate",Gr),r.size},has(r){const s=this.__v_raw,a=Lt(s),o=Lt(r);return n||(vi(r,o)&&xn(a,"has",r),xn(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Lt(o),c=e?Ec:n?Er:Yn;return!n&&xn(l,"iterate",Gr),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return dn(t,n?{add:Ha("add"),set:Ha("set"),delete:Ha("delete"),clear:Ha("clear")}:{add(r){const s=Lt(this),a=Va(s),o=Lt(r),l=!e&&!qn(r)&&!Ti(r)?o:r;return a.has.call(s,l)||vi(r,l)&&a.has.call(s,r)||vi(o,l)&&a.has.call(s,o)||(s.add(l),Xi(s,"add",l,l)),this},set(r,s){!e&&!qn(s)&&!Ti(s)&&(s=Lt(s));const a=Lt(this),{has:o,get:l}=Va(a);let c=o.call(a,r);c||(r=Lt(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?vi(s,u)&&Xi(a,"set",r,s):Xi(a,"add",r,s),this},delete(r){const s=Lt(this),{has:a,get:o}=Va(s);let l=a.call(s,r);l||(r=Lt(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Xi(s,"delete",r,void 0),c},clear(){const r=Lt(this),s=r.size!==0,a=r.clear();return s&&Xi(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Eg(r,n,e)}),t}function Ou(n,e){const t=Tg(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Dt(t,r)&&r in i?t:i,r,s)}const Ag={get:Ou(!1,!1)},wg={get:Ou(!1,!0)},Rg={get:Ou(!0,!1)};const zd=new WeakMap,Vd=new WeakMap,Hd=new WeakMap,Cg=new WeakMap;function Pg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gs(n){return Ti(n)?n:Bu(n,!1,yg,Ag,zd)}function Lg(n){return Bu(n,!1,bg,wg,Vd)}function Tc(n){return Bu(n,!0,Mg,Rg,Hd)}function Bu(n,e,t,i,r){if(!Bt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const a=Pg(tg(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function br(n){return Ti(n)?br(n.__v_raw):!!(n&&n.__v_isReactive)}function Ti(n){return!!(n&&n.__v_isReadonly)}function qn(n){return!!(n&&n.__v_isShallow)}function zu(n){return n?!!n.__v_raw:!1}function Lt(n){const e=n&&n.__v_raw;return e?Lt(e):n}function Dg(n){return!Dt(n,"__v_skip")&&Object.isExtensible(n)&&Ed(n,"__v_skip",!0),n}const Yn=n=>Bt(n)?gs(n):n,Er=n=>Bt(n)?Tc(n):n;function yn(n){return n?n.__v_isRef===!0:!1}function Kt(n){return kd(n,!1)}function Jr(n){return kd(n,!0)}function kd(n,e){return yn(n)?n:new Ig(n,e)}class Ig{constructor(e,t){this.dep=new Fu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Lt(e),this._value=t?e:Yn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||qn(e)||Ti(e);e=i?e:Lt(e),vi(e,t)&&(this._rawValue=e,this._value=i?e:Yn(e),this.dep.trigger())}}function In(n){return yn(n)?n.value:n}const Ug={get:(n,e,t)=>e==="__v_raw"?n:In(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return yn(r)&&!yn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Gd(n){return br(n)?n:new Proxy(n,Ug)}class Ng{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Fu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ua-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ht!==this)return Pd(this,!0),!0}get value(){const e=this.dep.track();return Id(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Fg(n,e,t=!1){let i,r;return mt(n)?i=n:(i=n.get,r=n.set),new Ng(i,r,t)}const ka={},No=new WeakMap;let Or;function Og(n,e=!1,t=Or){if(t){let i=No.get(t);i||No.set(t,i=[]),i.push(n)}}function Bg(n,e,t=Vt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=y=>r?y:qn(y)||r===!1||r===0?$i(y,1):$i(y);let u,f,h,d,_=!1,M=!1;if(yn(n)?(f=()=>n.value,_=qn(n)):br(n)?(f=()=>c(n),_=!0):ct(n)?(M=!0,_=n.some(y=>br(y)||qn(y)),f=()=>n.map(y=>{if(yn(y))return y.value;if(br(y))return c(y);if(mt(y))return l?l(y,2):y()})):mt(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){nr();try{h()}finally{ir()}}const y=Or;Or=u;try{return l?l(n,3,[d]):n(d)}finally{Or=y}}:f=Mi,e&&r){const y=f,A=r===!0?1/0:r;f=()=>$i(y(),A)}const m=dg(),p=()=>{u.stop(),m&&m.active&&Cu(m.effects,u)};if(s&&e){const y=e;e=(...A)=>{const R=y(...A);return p(),R}}let T=M?new Array(n.length).fill(ka):ka;const L=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const A=u.run();if(y||r||_||(M?A.some((R,U)=>vi(R,T[U])):vi(A,T))){h&&h();const R=Or;Or=u;try{const U=[A,T===ka?void 0:M&&T[0]===ka?[]:T,d];T=A,l?l(e,3,U):e(...U)}finally{Or=R}}}else u.run()};return o&&o(L),u=new Rd(f),u.scheduler=a?()=>a(L,!1):L,d=y=>Og(y,!1,u),h=u.onStop=()=>{const y=No.get(u);if(y){if(l)l(y,4);else for(const A of y)A();No.delete(u)}},e?i?L(!0):T=u.run():a?a(L.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function $i(n,e=1/0,t){if(e<=0||!Bt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,yn(n))$i(n.value,e,t);else if(ct(n))for(let i=0;i<n.length;i++)$i(n[i],e,t);else if(er(n)||Mr(n))n.forEach(i=>{$i(i,e,t)});else if(Md(n)){for(const i in n)$i(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&$i(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ca(n,e,t,i){try{return i?n(...i):n()}catch(r){rl(r,e,t)}}function oi(n,e,t,i){if(mt(n)){const r=Ca(n,e,t,i);return r&&Sd(r)&&r.catch(s=>{rl(s,e,t)}),r}if(ct(n)){const r=[];for(let s=0;s<n.length;s++)r.push(oi(n[s],e,t,i));return r}}function rl(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Vt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){nr(),Ca(s,null,10,[n,l,c]),ir();return}}zg(n,t,r,i,a)}function zg(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Tn=[];let di=-1;const _s=[];let _r=null,hs=0;const Wd=Promise.resolve();let Fo=null;function Xd(n){const e=Fo||Wd;return n?e.then(this?n.bind(this):n):e}function Vg(n){let e=di+1,t=Tn.length;for(;e<t;){const i=e+t>>>1,r=Tn[i],s=fa(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Vu(n){if(!(n.flags&1)){const e=fa(n),t=Tn[Tn.length-1];!t||!(n.flags&2)&&e>=fa(t)?Tn.push(n):Tn.splice(Vg(e),0,n),n.flags|=1,$d()}}function $d(){Fo||(Fo=Wd.then(Yd))}function Hg(n){if(!ct(n))_r&&n.id===-1?_r.splice(hs+1,0,n):n.flags&1||(_s.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)_s.push(n[e]);$d()}function yh(n,e,t=di+1){for(;t<Tn.length;t++){const i=Tn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Tn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function qd(n){if(_s.length){const e=[...new Set(_s)].sort((t,i)=>fa(t)-fa(i));if(_s.length=0,_r){for(let t=0;t<e.length;t++)_r.push(e[t]);return}for(_r=e,hs=0;hs<_r.length;hs++){const t=_r[hs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}_r=null,hs=0}}const fa=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Yd(n){try{for(di=0;di<Tn.length;di++){const e=Tn[di];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ca(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;di<Tn.length;di++){const e=Tn[di];e&&(e.flags&=-2)}di=-1,Tn.length=0,qd(),Fo=null,(Tn.length||_s.length)&&Yd()}}let $n=null,Kd=null;function Oo(n){const e=$n;return $n=n,Kd=n&&n.type.__scopeId||null,e}function kg(n,e=$n,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Dh(-1);const s=Oo(e),a=Wr.length;let o;try{o=n(...r)}finally{for(let l=Wr.length;l>a;l--)xp();Oo(s),i._d&&Dh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Jt(n,e){if($n===null)return n;const t=cl($n),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=Vt]=e[r];s&&(mt(s)&&(s={mounted:s,updated:s}),s.deep&&$i(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Pr(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(nr(),oi(l,t,8,[n.el,o,n,e]),ir())}}function Gg(n,e){if(An){let t=An.provides;const i=An.parent&&An.parent.provides;i===t&&(t=An.provides=Object.create(i)),t[n]=e}}function Ao(n,e,t=!1){const i=H_();if(i||vs){let r=vs?vs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&mt(e)?e.call(i&&i.proxy):e}}const Wg=Symbol.for("v-scx"),Xg=()=>Ao(Wg);function zr(n,e,t){return Zd(n,e,t)}function Zd(n,e,t=Vt){const{immediate:i,deep:r,flush:s,once:a}=t,o=dn({},t),l=e&&i||!e&&s!=="post";let c;if(ma){if(s==="sync"){const d=Xg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Mi,d.resume=Mi,d.pause=Mi,d}}const u=An;o.call=(d,_,M)=>oi(d,u,_,M);let f=!1;s==="post"?o.scheduler=d=>{Un(d,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(d,_)=>{_?d():Vu(d)}),o.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Bg(n,e,o);return ma&&(c?c.push(h):l&&h()),h}function $g(n,e,t){const i=this.proxy,r=Zt(n)?n.includes(".")?Jd(i,n):()=>i[n]:n.bind(i,i);let s;mt(e)?s=e:(s=e.handler,t=e);const a=Pa(this),o=Zd(r,s.bind(i),t);return a(),o}function Jd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const qg=Symbol("_vte"),sl=n=>n.__isTeleport,wl=Symbol("_leaveCb");function Yg(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==rr){e=t;break}}return e}function jd(n){if(!ku(n))return sl(n.type)&&n.children?Yg(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&mt(t.default))return t.default()}}function Hu(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Hu(sl(t.type)&&jd(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Kg(n,e){return mt(n)?dn({name:n.name},e,{setup:n}):n}function Qd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Mh(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Bo=new WeakMap;function na(n,e,t,i,r=!1){if(ct(n)){n.forEach((M,m)=>na(M,e&&(ct(e)?e[m]:e),t,i,r));return}if(ia(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&na(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?cl(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Vt?o.refs={}:o.refs,f=o.setupState,h=Lt(f),d=f===Vt?xd:M=>Mh(u,M)?!1:Dt(h,M),_=(M,m)=>!(m&&Mh(u,m));if(c!=null&&c!==l){if(bh(e),Zt(c))u[c]=null,d(c)&&(f[c]=null);else if(yn(c)){const M=e;_(c,M.k)&&(c.value=null),M.k&&(u[M.k]=null)}}if(mt(l))Ca(l,o,12,[a,u]);else{const M=Zt(l),m=yn(l);if(M||m){const p=()=>{if(n.f){const T=M?d(l)?f[l]:u[l]:_()||!n.k?l.value:u[n.k];if(r)ct(T)&&Cu(T,s);else if(ct(T))T.includes(s)||T.push(s);else if(M)u[l]=[s],d(l)&&(f[l]=u[l]);else{const L=[s];_(l,n.k)&&(l.value=L),n.k&&(u[n.k]=L)}}else M?(u[l]=a,d(l)&&(f[l]=a)):m&&(_(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const T=()=>{p(),Bo.delete(n)};T.id=-1,Bo.set(n,T),Un(T,t)}else bh(n),p()}}}function bh(n){const e=Bo.get(n);e&&(e.flags|=8,Bo.delete(n))}nl().requestIdleCallback;nl().cancelIdleCallback;const ia=n=>!!n.type.__asyncLoader,ku=n=>n.type.__isKeepAlive;function Zg(n,e){ep(n,"a",e)}function Jg(n,e){ep(n,"da",e)}function ep(n,e,t=An){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(al(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ku(r.parent.vnode)&&jg(i,e,t,r),r=r.parent}}function jg(n,e,t,i){const r=al(e,n,i,!0);tp(()=>{Cu(i[e],r)},t)}function al(n,e,t=An,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{nr();const o=Pa(t),l=oi(e,t,n,a);return o(),ir(),l});return i?r.unshift(s):r.push(s),s}}const ar=n=>(e,t=An)=>{(!ma||n==="sp")&&al(n,(...i)=>e(...i),t)},Qg=ar("bm"),Ac=ar("m"),e_=ar("bu"),t_=ar("u"),n_=ar("bum"),tp=ar("um"),i_=ar("sp"),r_=ar("rtg"),s_=ar("rtc");function a_(n,e=An){al("ec",n,e)}const o_=Symbol.for("v-ndc");function Fs(n,e,t,i){let r;const s=t,a=ct(n);if(a||Zt(n)){const o=a&&br(n);let l=!1,c=!1;o&&(l=!qn(n),c=Ti(n),n=il(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?Er(Yn(n[u])):Yn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(Bt(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const wc=n=>n?bp(n)?cl(n):wc(n.parent):null,ra=dn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>wc(n.parent),$root:n=>wc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ip(n),$forceUpdate:n=>n.f||(n.f=()=>{Vu(n.update)}),$nextTick:n=>n.n||(n.n=Xd.bind(n.proxy)),$watch:n=>$g.bind(n)}),Rl=(n,e)=>n!==Vt&&!n.__isScriptSetup&&Dt(n,e),l_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Rl(i,e))return a[e]=1,i[e];if(r!==Vt&&Dt(r,e))return a[e]=2,r[e];if(Dt(s,e))return a[e]=3,s[e];if(t!==Vt&&Dt(t,e))return a[e]=4,t[e];Rc&&(a[e]=0)}}const c=ra[e];let u,f;if(c)return e==="$attrs"&&xn(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==Vt&&Dt(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Dt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Rl(r,e)?(r[e]=t,!0):i!==Vt&&Dt(i,e)?(i[e]=t,!0):Dt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==Vt&&o[0]!=="$"&&Dt(n,o)||Rl(e,o)||Dt(s,o)||Dt(i,o)||Dt(ra,o)||Dt(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Dt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Eh(n){return ct(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Rc=!0;function c_(n){const e=ip(n),t=n.proxy,i=n.ctx;Rc=!1,e.beforeCreate&&Th(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:M,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:L,unmounted:y,render:A,renderTracked:R,renderTriggered:U,errorCaptured:S,serverPrefetch:D,expose:B,inheritAttrs:G,components:K,directives:ne,filters:z}=e;if(c&&u_(c,i,null),a)for(const ee in a){const de=a[ee];mt(de)&&(i[ee]=de.bind(t))}if(r){const ee=r.call(t,t);Bt(ee)&&(n.data=gs(ee))}if(Rc=!0,s)for(const ee in s){const de=s[ee],ue=mt(de)?de.bind(t,t):mt(de.get)?de.get.bind(t,t):Mi,ve=!mt(de)&&mt(de.set)?de.set.bind(t):Mi,_e=gr({get:ue,set:ve});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>_e.value,set:Pe=>_e.value=Pe})}if(o)for(const ee in o)np(o[ee],i,t,ee);if(l){const ee=mt(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(de=>{Gg(de,ee[de])})}u&&Th(u,n,"c");function le(ee,de){ct(de)?de.forEach(ue=>ee(ue.bind(t))):de&&ee(de.bind(t))}if(le(Qg,f),le(Ac,h),le(e_,d),le(t_,_),le(Zg,M),le(Jg,m),le(a_,S),le(s_,R),le(r_,U),le(n_,T),le(tp,y),le(i_,D),ct(B))if(B.length){const ee=n.exposed||(n.exposed={});B.forEach(de=>{Object.defineProperty(ee,de,{get:()=>t[de],set:ue=>t[de]=ue,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===Mi&&(n.render=A),G!=null&&(n.inheritAttrs=G),K&&(n.components=K),ne&&(n.directives=ne),D&&Qd(n)}function u_(n,e,t=Mi){ct(n)&&(n=Cc(n));for(const i in n){const r=n[i];let s;Bt(r)?"default"in r?s=Ao(r.from||i,r.default,!0):s=Ao(r.from||i):s=Ao(r),yn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Th(n,e,t){oi(ct(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function np(n,e,t,i){let r=i.includes(".")?Jd(t,i):()=>t[i];if(Zt(n)){const s=e[n];mt(s)&&zr(r,s)}else if(mt(n))zr(r,n.bind(t));else if(Bt(n))if(ct(n))n.forEach(s=>np(s,e,t,i));else{const s=mt(n.handler)?n.handler.bind(t):e[n.handler];mt(s)&&zr(r,s,n)}}function ip(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>zo(l,c,a,!0)),zo(l,e,a)),Bt(e)&&s.set(e,l),l}function zo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&zo(n,s,t,!0),r&&r.forEach(a=>zo(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=h_[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const h_={data:Ah,props:wh,emits:wh,methods:$s,computed:$s,beforeCreate:bn,created:bn,beforeMount:bn,mounted:bn,beforeUpdate:bn,updated:bn,beforeDestroy:bn,beforeUnmount:bn,destroyed:bn,unmounted:bn,activated:bn,deactivated:bn,errorCaptured:bn,serverPrefetch:bn,components:$s,directives:$s,watch:d_,provide:Ah,inject:f_};function Ah(n,e){return e?n?function(){return dn(mt(n)?n.call(this,this):n,mt(e)?e.call(this,this):e)}:e:n}function f_(n,e){return $s(Cc(n),Cc(e))}function Cc(n){if(ct(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function bn(n,e){return n?[...new Set([].concat(n,e))]:e}function $s(n,e){return n?dn(Object.create(null),n,e):e}function wh(n,e){return n?ct(n)&&ct(e)?[...new Set([...n,...e])]:dn(Object.create(null),Eh(n),Eh(e??{})):e}function d_(n,e){if(!n)return e;if(!e)return n;const t=dn(Object.create(null),n);for(const i in e)t[i]=bn(n[i],e[i]);return t}function rp(){return{app:null,config:{isNativeTag:xd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let p_=0;function m_(n,e){return function(i,r=null){mt(i)||(i=dn({},i)),r!=null&&!Bt(r)&&(r=null);const s=rp(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:p_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:q_,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&mt(u.install)?(a.add(u),u.install(c,...f)):mt(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Ki(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,cl(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(oi(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=vs;vs=c;try{return u()}finally{vs=f}}};return c}}let vs=null;const g_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ri(e)}Modifiers`]||n[`${Kr(e)}Modifiers`];function __(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Vt;let r=t;const s=e.startsWith("update:"),a=s&&g_(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>Zt(u)?u.trim():u)),a.number&&(r=r.map(tl)));let o,l=i[o=Ml(e)]||i[o=Ml(ri(e))];!l&&s&&(l=i[o=Ml(Kr(e))]),l&&oi(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,oi(c,n,6,r)}}const v_=new WeakMap;function sp(n,e,t=!1){const i=t?v_:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!mt(n)){const l=c=>{const u=sp(c,e,!0);u&&(o=!0,dn(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(Bt(n)&&i.set(n,null),null):(ct(s)?s.forEach(l=>a[l]=null):dn(a,s),Bt(n)&&i.set(n,a),a)}function ol(n,e){return!n||!jo(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Dt(n,e[0].toLowerCase()+e.slice(1))||Dt(n,Kr(e))||Dt(n,e))}function Rh(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:M}=n,m=Oo(n);let p,T;try{if(t.shapeFlag&4){const y=r||i,A=y;p=mi(c.call(A,y,u,f,d,h,_)),T=o}else{const y=e;p=mi(y.length>1?y(f,{attrs:o,slots:a,emit:l}):y(f,null)),T=e.props?o:x_(o)}}catch(y){Wr.length=0,rl(y,n,1),p=Ki(rr)}let L=p;if(T&&M!==!1){const y=Object.keys(T),{shapeFlag:A}=L;y.length&&A&7&&(s&&y.some(Qo)&&(T=S_(T,s)),L=ys(L,T,!1,!0))}if(t.dirs&&(L=ys(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(t.dirs):t.dirs),t.transition){const y=sl(L.type)&&jd(L)||L;Hu(y,t.transition)}return p=L,Oo(m),p}const x_=n=>{let e;for(const t in n)(t==="class"||t==="style"||jo(t))&&((e||(e={}))[t]=n[t]);return e},S_=(n,e)=>{const t={};for(const i in n)(!Qo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function y_(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ch(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(ap(a,i,h)&&!ol(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Ch(i,a,c):!0:!!a;return!1}function Ch(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(ap(e,n,s)&&!ol(t,s))return!0}return!1}function ap(n,e,t){const i=n[t],r=e[t];return t==="style"&&Bt(i)&&Bt(r)?!tr(i,r):i!==r}function M_({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const op={},lp=()=>Object.create(op),cp=n=>Object.getPrototypeOf(n)===op;function b_(n,e,t,i=!1){const r={},s=lp();n.propsDefaults=Object.create(null),up(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Lg(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function E_(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Lt(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ol(n.emitsOptions,h))continue;const d=e[h];if(l)if(Dt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=ri(h);r[_]=Pc(l,o,_,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{up(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Dt(e,f)&&((u=Kr(f))===f||!Dt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Pc(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Dt(e,f))&&(delete s[f],c=!0)}c&&Xi(n.attrs,"set","")}function up(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Qs(l))continue;const c=e[l];let u;r&&Dt(r,u=ri(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:ol(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Lt(t),c=o||Vt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Pc(r,l,f,c[f],n,!Dt(c,f))}}return a}function Pc(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Dt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&mt(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Pa(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Kr(t))&&(i=!0))}return i}const T_=new WeakMap;function hp(n,e,t=!1){const i=t?T_:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!mt(n)){const u=f=>{l=!0;const[h,d]=hp(f,e,!0);dn(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Bt(n)&&i.set(n,Br),Br;if(ct(s))for(let u=0;u<s.length;u++){const f=ri(s[u]);Ph(f)&&(a[f]=Vt)}else if(s)for(const u in s){const f=ri(u);if(Ph(f)){const h=s[u],d=a[f]=ct(h)||mt(h)?{type:h}:dn({},h),_=d.type;let M=!1,m=!0;if(ct(_))for(let p=0;p<_.length;++p){const T=_[p],L=mt(T)&&T.name;if(L==="Boolean"){M=!0;break}else L==="String"&&(m=!1)}else M=mt(_)&&_.name==="Boolean";d[0]=M,d[1]=m,(M||Dt(d,"default"))&&o.push(f)}}const c=[a,o];return Bt(n)&&i.set(n,c),c}function Ph(n){return n[0]!=="$"&&!Qs(n)}const Gu=n=>n==="_"||n==="_ctx"||n==="$stable",Wu=n=>ct(n)?n.map(mi):[mi(n)],A_=(n,e,t)=>{if(e._n)return e;const i=kg((...r)=>Wu(e(...r)),t);return i._c=!1,i},fp=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Gu(r))continue;const s=n[r];if(mt(s))e[r]=A_(r,s,i);else if(s!=null){const a=Wu(s);e[r]=()=>a}}},dp=(n,e)=>{const t=Wu(e);n.slots.default=()=>t},pp=(n,e,t)=>{for(const i in e)(t||!Gu(i))&&(n[i]=e[i])},w_=(n,e,t)=>{const i=n.slots=lp();if(n.vnode.shapeFlag&32){const r=e._;r?(pp(i,e,t),t&&Ed(i,"_",r,!0)):fp(e,i)}else e&&dp(n,e)},R_=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Vt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:pp(r,e,t):(s=!e.$stable,fp(e,r)),a=e}else e&&(dp(n,e),a={default:1});if(s)for(const o in r)!Gu(o)&&a[o]==null&&delete r[o]},Un=I_;function C_(n){return P_(n)}function P_(n,e){const t=nl();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Mi,insertStaticContent:_}=n,M=(C,O,N,W=null,H=null,k=null,te=void 0,pe=null,he=!!O.dynamicChildren)=>{if(C===O)return;C&&!Os(C,O)&&(W=me(C),Pe(C,H,k,!0),C=null),O.patchFlag===-2&&(he=!1,O.dynamicChildren=null),O.dynamicChildren&&C&&C.dynamicChildren&&C.dynamicChildren.hasOnce&&(O.dynamicChildren===Br&&(O.dynamicChildren=[]),O.dynamicChildren.hasOnce=!0);const{type:re,ref:Me,shapeFlag:P}=O;switch(re){case ll:m(C,O,N,W);break;case rr:p(C,O,N,W);break;case Pl:C==null&&T(O,N,W,te);break;case _n:K(C,O,N,W,H,k,te,pe,he);break;default:P&1?A(C,O,N,W,H,k,te,pe,he):P&6?ne(C,O,N,W,H,k,te,pe,he):(P&64||P&128)&&re.process(C,O,N,W,H,k,te,pe,he,Ke)}Me!=null&&H?na(Me,C&&C.ref,k,O||C,!O):Me==null&&C&&C.ref!=null&&na(C.ref,null,k,C,!0)},m=(C,O,N,W)=>{if(C==null)i(O.el=o(O.children),N,W);else{const H=O.el=C.el;O.children!==C.children&&c(H,O.children)}},p=(C,O,N,W)=>{C==null?i(O.el=l(O.children||""),N,W):O.el=C.el},T=(C,O,N,W)=>{[C.el,C.anchor]=_(C.children,O,N,W,C.el,C.anchor)},L=({el:C,anchor:O},N,W)=>{let H;for(;C&&C!==O;)H=h(C),i(C,N,W),C=H;i(O,N,W)},y=({el:C,anchor:O})=>{let N;for(;C&&C!==O;)N=h(C),r(C),C=N;r(O)},A=(C,O,N,W,H,k,te,pe,he)=>{if(O.type==="svg"?te="svg":O.type==="math"&&(te="mathml"),C==null)R(O,N,W,H,k,te,pe,he);else{const re=C.el&&C.el._isVueCE?C.el:null;try{re&&re._beginPatch(),D(C,O,H,k,te,pe,he)}finally{re&&re._endPatch()}}},R=(C,O,N,W,H,k,te,pe)=>{let he,re;const{props:Me,shapeFlag:P,transition:Le,dirs:Ie}=C;if(he=C.el=a(C.type,k,Me&&Me.is,Me),P&8?u(he,C.children):P&16&&S(C.children,he,null,W,H,Cl(C,k),te,pe),Ie&&Pr(C,null,W,"created"),U(he,C,C.scopeId,te,W),Me){for(const g in Me)g!=="value"&&!Qs(g)&&s(he,g,null,Me[g],k,W);"value"in Me&&s(he,"value",null,Me.value,k),(re=Me.onVnodeBeforeMount)&&ui(re,W,C)}Ie&&Pr(C,null,W,"beforeMount");const E=L_(H,Le);E&&Le.beforeEnter(he),i(he,O,N),((re=Me&&Me.onVnodeMounted)||E||Ie)&&Un(()=>{try{re&&ui(re,W,C),E&&Le.enter(he),Ie&&Pr(C,null,W,"mounted")}finally{}},H)},U=(C,O,N,W,H)=>{if(N&&d(C,N),W)for(let k=0;k<W.length;k++)d(C,W[k]);if(H){let k=H.subTree;if(O===k||vp(k.type)&&(k.ssContent===O||k.ssFallback===O)){const te=H.vnode;U(C,te,te.scopeId,te.slotScopeIds,H.parent)}}},S=(C,O,N,W,H,k,te,pe,he=0)=>{for(let re=he;re<C.length;re++){const Me=C[re]=pe?Gi(C[re]):mi(C[re]);M(null,Me,O,N,W,H,k,te,pe)}},D=(C,O,N,W,H,k,te)=>{const pe=O.el=C.el;let{patchFlag:he,dynamicChildren:re,dirs:Me}=O;he|=C.patchFlag&16;const P=C.props||Vt,Le=O.props||Vt;let Ie;if(N&&Lr(N,!1),(Ie=Le.onVnodeBeforeUpdate)&&ui(Ie,N,O,C),Me&&Pr(O,C,N,"beforeUpdate"),N&&Lr(N,!0),re&&(!C.dynamicChildren||C.dynamicChildren.length!==re.length)&&(he=0,te=!1,re=null),(P.innerHTML&&Le.innerHTML==null||P.textContent&&Le.textContent==null)&&u(pe,""),re?B(C.dynamicChildren,re,pe,N,W,Cl(O,H),k):te||de(C,O,pe,null,N,W,Cl(O,H),k,!1),he>0){if(he&16)G(pe,P,Le,N,H);else if(he&2&&P.class!==Le.class&&s(pe,"class",null,Le.class,H),he&4&&s(pe,"style",P.style,Le.style,H),he&8){const E=O.dynamicProps;for(let g=0;g<E.length;g++){const F=E[g],J=P[F],ie=Le[F];(ie!==J||F==="value")&&s(pe,F,J,ie,H,N)}}he&1&&C.children!==O.children&&u(pe,O.children)}else!te&&re==null&&G(pe,P,Le,N,H);((Ie=Le.onVnodeUpdated)||Me)&&Un(()=>{Ie&&ui(Ie,N,O,C),Me&&Pr(O,C,N,"updated")},W)},B=(C,O,N,W,H,k,te)=>{for(let pe=0;pe<O.length;pe++){const he=C[pe],re=O[pe],Me=he.el&&(he.type===_n||!Os(he,re)||he.shapeFlag&198)?f(he.el):N;M(he,re,Me,null,W,H,k,te,!0)}},G=(C,O,N,W,H)=>{if(O!==N){if(O!==Vt)for(const k in O)!Qs(k)&&!(k in N)&&s(C,k,O[k],null,H,W);for(const k in N){if(Qs(k))continue;const te=N[k],pe=O[k];te!==pe&&k!=="value"&&s(C,k,pe,te,H,W)}"value"in N&&s(C,"value",O.value,N.value,H)}},K=(C,O,N,W,H,k,te,pe,he)=>{const re=O.el=C?C.el:o(""),Me=O.anchor=C?C.anchor:o("");let{patchFlag:P,dynamicChildren:Le,slotScopeIds:Ie}=O;Ie&&(pe=pe?pe.concat(Ie):Ie),C==null?(i(re,N,W),i(Me,N,W),S(O.children||[],N,Me,H,k,te,pe,he)):P>0&&P&64&&Le&&C.dynamicChildren&&C.dynamicChildren.length===Le.length?(B(C.dynamicChildren,Le,N,H,k,te,pe),(O.key!=null||H&&O===H.subTree)&&mp(C,O,!0)):de(C,O,N,Me,H,k,te,pe,he)},ne=(C,O,N,W,H,k,te,pe,he)=>{O.slotScopeIds=pe,C==null?O.shapeFlag&512?H.ctx.activate(O,N,W,te,he):z(O,N,W,H,k,te,he):Z(C,O,he)},z=(C,O,N,W,H,k,te)=>{const pe=C.component=V_(C,W,H);if(ku(C)&&(pe.ctx.renderer=Ke),k_(pe,!1,te),pe.asyncDep){if(H&&H.registerDep(pe,le,te),!C.el){const he=pe.subTree=Ki(rr);p(null,he,O,N),C.placeholder=he.el}}else le(pe,C,O,N,H,k,te)},Z=(C,O,N)=>{const W=O.component=C.component;if(y_(C,O,N))if(W.asyncDep&&!W.asyncResolved){O.el=C.el,ee(W,O,N);return}else W.next=O,W.update();else O.el=C.el,W.vnode=O},le=(C,O,N,W,H,k,te)=>{const pe=()=>{if(C.isMounted){let{next:P,bu:Le,u:Ie,parent:E,vnode:g}=C;{const De=gp(C);if(De){P&&(P.el=g.el,ee(C,P,te)),De.asyncDep.then(()=>{Un(()=>{C.isUnmounted||re()},H)});return}}let F=P,J;Lr(C,!1),P?(P.el=g.el,ee(C,P,te)):P=g,Le&&To(Le),(J=P.props&&P.props.onVnodeBeforeUpdate)&&ui(J,E,P,g),Lr(C,!0);const ie=Rh(C),Re=C.subTree;C.subTree=ie,M(Re,ie,f(Re.el),me(Re),C,H,k),P.el=ie.el,F===null&&M_(C,ie.el),Ie&&Un(Ie,H),(J=P.props&&P.props.onVnodeUpdated)&&Un(()=>ui(J,E,P,g),H)}else{let P;const{el:Le,props:Ie}=O,{bm:E,m:g,parent:F,root:J,type:ie}=C,Re=ia(O);Lr(C,!1),E&&To(E),!Re&&(P=Ie&&Ie.onVnodeBeforeMount)&&ui(P,F,O),Lr(C,!0);{J.ce&&J.ce._hasShadowRoot()&&J.ce._injectChildStyle(ie,C.parent?C.parent.type:void 0);const De=C.subTree=Rh(C);M(null,De,N,W,C,H,k),O.el=De.el}if(g&&Un(g,H),!Re&&(P=Ie&&Ie.onVnodeMounted)){const De=O;Un(()=>ui(P,F,De),H)}(O.shapeFlag&256||F&&ia(F.vnode)&&F.vnode.shapeFlag&256)&&C.a&&Un(C.a,H),C.isMounted=!0,O=N=W=null}};C.scope.on();const he=C.effect=new Rd(pe);C.scope.off();const re=C.update=he.run.bind(he),Me=C.job=he.runIfDirty.bind(he);Me.i=C,Me.id=C.uid,he.scheduler=()=>Vu(Me),Lr(C,!0),re()},ee=(C,O,N)=>{O.component=C;const W=C.vnode.props;C.vnode=O,C.next=null,E_(C,O.props,W,N),R_(C,O.children,N),nr(),yh(C),ir()},de=(C,O,N,W,H,k,te,pe,he=!1)=>{const re=C&&C.children,Me=C?C.shapeFlag:0,P=O.children,{patchFlag:Le,shapeFlag:Ie}=O;if(Le>0){if(Le&128){ve(re,P,N,W,H,k,te,pe,he);return}else if(Le&256){ue(re,P,N,W,H,k,te,pe,he);return}}Ie&8?(Me&16&&lt(re,H,k),P!==re&&u(N,P)):Me&16?Ie&16?ve(re,P,N,W,H,k,te,pe,he):lt(re,H,k,!0):(Me&8&&u(N,""),Ie&16&&S(P,N,W,H,k,te,pe,he))},ue=(C,O,N,W,H,k,te,pe,he)=>{C=C||Br,O=O||Br;const re=C.length,Me=O.length,P=Math.min(re,Me);let Le;for(Le=0;Le<P;Le++){const Ie=O[Le]=he?Gi(O[Le]):mi(O[Le]);M(C[Le],Ie,N,null,H,k,te,pe,he)}re>Me?lt(C,H,k,!0,!1,P):S(O,N,W,H,k,te,pe,he,P)},ve=(C,O,N,W,H,k,te,pe,he)=>{let re=0;const Me=O.length;let P=C.length-1,Le=Me-1;for(;re<=P&&re<=Le;){const Ie=C[re],E=O[re]=he?Gi(O[re]):mi(O[re]);if(Os(Ie,E))M(Ie,E,N,null,H,k,te,pe,he);else break;re++}for(;re<=P&&re<=Le;){const Ie=C[P],E=O[Le]=he?Gi(O[Le]):mi(O[Le]);if(Os(Ie,E))M(Ie,E,N,null,H,k,te,pe,he);else break;P--,Le--}if(re>P){if(re<=Le){const Ie=Le+1,E=Ie<Me?O[Ie].el:W;for(;re<=Le;)M(null,O[re]=he?Gi(O[re]):mi(O[re]),N,E,H,k,te,pe,he),re++}}else if(re>Le)for(;re<=P;)Pe(C[re],H,k,!0),re++;else{const Ie=re,E=re,g=new Map;for(re=E;re<=Le;re++){const Ce=O[re]=he?Gi(O[re]):mi(O[re]);Ce.key!=null&&g.set(Ce.key,re)}let F,J=0;const ie=Le-E+1;let Re=!1,De=0;const ge=new Array(ie);for(re=0;re<ie;re++)ge[re]=0;for(re=Ie;re<=P;re++){const Ce=C[re];if(J>=ie){Pe(Ce,H,k,!0);continue}let Ne;if(Ce.key!=null)Ne=g.get(Ce.key);else for(F=E;F<=Le;F++)if(ge[F-E]===0&&Os(Ce,O[F])){Ne=F;break}Ne===void 0?Pe(Ce,H,k,!0):(ge[Ne-E]=re+1,Ne>=De?De=Ne:Re=!0,M(Ce,O[Ne],N,null,H,k,te,pe,he),J++)}const xe=Re?D_(ge):Br;for(F=xe.length-1,re=ie-1;re>=0;re--){const Ce=E+re,Ne=O[Ce],Be=O[Ce+1],ze=Ce+1<Me?Be.el||_p(Be):W;ge[re]===0?M(null,Ne,N,ze,H,k,te,pe,he):Re&&(F<0||re!==xe[F]?_e(Ne,N,ze,2):F--)}}},_e=(C,O,N,W,H=null)=>{const{el:k,type:te,transition:pe,children:he,shapeFlag:re}=C;if(re&6){_e(C.component.subTree,O,N,W);return}if(re&128){C.suspense.move(O,N,W);return}if(re&64){te.move(C,O,N,Ke);return}if(te===_n){i(k,O,N);for(let P=0;P<he.length;P++)_e(he[P],O,N,W);i(C.anchor,O,N);return}if(te===Pl){L(C,O,N);return}if(W!==2&&re&1&&pe)if(W===0)pe.persisted&&!k[wl]?i(k,O,N):(pe.beforeEnter(k),i(k,O,N),Un(()=>pe.enter(k),H));else{const{leave:P,delayLeave:Le,afterLeave:Ie}=pe,E=()=>{C.ctx.isUnmounted?r(k):i(k,O,N)},g=()=>{const F=k._isLeaving||!!k[wl];k._isLeaving&&k[wl](!0),pe.persisted&&!F?E():P(k,()=>{E(),Ie&&Ie()})};Le?Le(k,E,g):g()}else i(k,O,N)},Pe=(C,O,N,W=!1,H=!1)=>{const{type:k,props:te,ref:pe,children:he,dynamicChildren:re,shapeFlag:Me,patchFlag:P,dirs:Le,cacheIndex:Ie,memo:E}=C;if((P===-2||re&&re.hasOnce)&&(H=!1),pe!=null&&(nr(),na(pe,null,N,C,!0),ir()),Ie!=null&&(!C.ctx||C.ctx===O)&&(O.renderCache[Ie]=void 0),Me&256){O.ctx.deactivate(C);return}const g=Me&1&&Le,F=!ia(C);let J;if(F&&(J=te&&te.onVnodeBeforeUnmount)&&ui(J,O,C),Me&6)ot(C.component,N,W);else{if(Me&128){C.suspense.unmount(N,W);return}g&&Pr(C,null,O,"beforeUnmount"),Me&64?C.type.remove(C,O,N,Ke,W):re&&!re.hasOnce&&(k!==_n||P>0&&P&64)?lt(re,O,N,!1,!0):(k===_n&&P&384||!H&&Me&16)&&lt(he,O,N),W&&Xe(C)}const ie=E!=null&&Ie==null;(F&&(J=te&&te.onVnodeUnmounted)||g||ie)&&Un(()=>{J&&ui(J,O,C),g&&Pr(C,null,O,"unmounted"),ie&&(C.el=null)},N)},Xe=C=>{const{type:O,el:N,anchor:W,transition:H}=C;if(O===_n){rt(N,W);return}if(O===Pl){y(C),H&&!H.persisted&&H.afterLeave&&H.afterLeave();return}const k=()=>{r(N),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(C.shapeFlag&1&&H&&!H.persisted){const{leave:te,delayLeave:pe}=H,he=()=>te(N,k);pe?pe(C.el,k,he):he()}else k()},rt=(C,O)=>{let N;for(;C!==O;)N=h(C),r(C),C=N;r(O)},ot=(C,O,N)=>{const{bum:W,scope:H,job:k,subTree:te,um:pe,m:he,a:re}=C;Lh(he),Lh(re),W&&To(W),H.stop(),k?(k.flags|=8,Pe(te,C,O,N)):C.vnode.el&&te&&(te.transition=C.vnode.transition,Pe(te,C,O,N)),pe&&Un(pe,O),Un(()=>{C.isUnmounted=!0},O)},lt=(C,O,N,W=!1,H=!1,k=0)=>{for(let te=k;te<C.length;te++)Pe(C[te],O,N,W,H)},me=C=>{if(C.shapeFlag&6)return me(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const O=h(C.anchor||C.el),N=O&&O[qg];return N?h(N):O};let ce=!1;const we=(C,O,N)=>{let W;C==null?O._vnode&&(Pe(O._vnode,null,null,!0),W=O._vnode.component):M(O._vnode||null,C,O,null,null,null,N),O._vnode=C,ce||(ce=!0,yh(W),qd(),ce=!1)},Ke={p:M,um:Pe,m:_e,r:Xe,mt:z,mc:S,pc:de,pbc:B,n:me,o:n};return{render:we,hydrate:void 0,createApp:m_(we)}}function Cl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Lr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function L_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function mp(n,e,t=!1){const i=n.children,r=e.children;if(ct(i)&&ct(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Gi(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&mp(a,o)),o.type===ll&&(o.patchFlag===-1&&(o=r[s]=Gi(o)),o.el=a.el),o.type===rr&&!o.el&&(o.el=a.el)}}function D_(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function gp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:gp(e)}function Lh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function _p(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?_p(e.subTree):null}const vp=n=>n.__isSuspense;function I_(n,e){e&&e.pendingBranch?ct(n)?e.effects.push(...n):e.effects.push(n):Hg(n)}const _n=Symbol.for("v-fgt"),ll=Symbol.for("v-txt"),rr=Symbol.for("v-cmt"),Pl=Symbol.for("v-stc"),Wr=[];let Vn=null;function Pt(n=!1){Wr.push(Vn=n?null:[])}function xp(){Wr.pop(),Vn=Wr[Wr.length-1]||null}let da=1;function Dh(n,e=!1){da+=n,n<0&&Vn&&e&&(Vn.hasOnce=!0)}function Sp(n){return n.dynamicChildren=da>0?Vn||Br:null,xp(),da>0&&Vn&&Vn.push(n),n}function Ut(n,e,t,i,r,s){return Sp(q(n,e,t,i,r,s,!0))}function U_(n,e,t,i,r){return Sp(Ki(n,e,t,i,r,!0))}function yp(n){return n?n.__v_isVNode===!0:!1}function Os(n,e){return n.type===e.type&&n.key===e.key}const Mp=({key:n})=>n??null,wo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Zt(n)||yn(n)||mt(n)?{i:$n,r:n,k:e,f:!!t}:n:null);function q(n,e=null,t=null,i=0,r=null,s=n===_n?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Mp(e),ref:e&&wo(e),scopeId:Kd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$n};return o?(Vo(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Zt(t)?8:16),da>0&&!a&&Vn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Vn.push(l),l}const Ki=N_;function N_(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===o_)&&(n=rr),yp(n)){const o=ys(n,e,!0);return t&&Vo(o,t),da>0&&!s&&Vn&&(o.shapeFlag&6?Vn[Vn.indexOf(n)]=o:Vn.push(o)),o.patchFlag=-2,o}if($_(n)&&(n=n.__vccOpts),e){e=F_(e);let{class:o,style:l}=e;o&&!Zt(o)&&(e.class=Nn(o)),Bt(l)&&(zu(l)&&!ct(l)&&(l=dn({},l)),e.style=Lu(l))}const a=Zt(n)?1:vp(n)?128:sl(n)?64:Bt(n)?4:mt(n)?2:0;return q(n,e,t,i,r,a,s,!0)}function F_(n){return n?zu(n)||cp(n)?dn({},n):n:null}function ys(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?O_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Mp(c),ref:e&&e.ref?t&&s?ct(s)?s.concat(wo(e)):[s,wo(e)]:wo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==_n?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ys(n.ssContent),ssFallback:n.ssFallback&&ys(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Hu(u,l.clone(u)),u}function dt(n=" ",e=0){return Ki(ll,null,n,e)}function Pn(n="",e=!1){return e?(Pt(),U_(rr,null,n)):Ki(rr,null,n)}function mi(n){return n==null||typeof n=="boolean"?Ki(rr):ct(n)?Ki(_n,null,n.slice()):yp(n)?Gi(n):Ki(ll,null,String(n))}function Gi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ys(n)}function Vo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ct(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Vo(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!cp(e)?e._ctx=$n:r===3&&$n&&($n.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(mt(e)){if(i&65){Vo(n,{default:e});return}e={default:e,_ctx:$n},t=32}else e=String(e),i&64?(t=16,e=[dt(e)]):t=8;n.children=e,n.shapeFlag|=t}function O_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Nn([e.class,i.class]));else if(r==="style")e.style=Lu([e.style,i.style]);else if(jo(r)){const s=e[r],a=i[r];a&&s!==a&&!(ct(s)&&s.includes(a))?e[r]=s?[].concat(s,a):a:a==null&&s==null&&!Qo(r)&&(e[r]=a)}else r!==""&&(e[r]=i[r])}return e}function ui(n,e,t,i=null){oi(n,e,7,[t,i])}const B_=rp();let z_=0;function V_(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||B_,s={uid:z_++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hp(i,r),emitsOptions:sp(i,r),emit:null,emitted:null,propsDefaults:Vt,inheritAttrs:i.inheritAttrs,ctx:Vt,data:Vt,props:Vt,attrs:Vt,slots:Vt,refs:Vt,setupState:Vt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=__.bind(null,s),n.ce&&n.ce(s),s}let An=null;const H_=()=>An||$n;let Ho,pa;{const n=nl(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Ho=e("__VUE_INSTANCE_SETTERS__",t=>An=t),pa=e("__VUE_SSR_SETTERS__",t=>ma=t)}const Pa=n=>{const e=An;return Ho(n),n.scope.on(),()=>{n.scope.off(),Ho(e)}},Ih=()=>{An&&An.scope.off(),Ho(null)};function bp(n){return n.vnode.shapeFlag&4}let ma=!1;function k_(n,e=!1,t=!1){e&&pa(e);const{props:i,children:r}=n.vnode,s=bp(n);b_(n,i,s,e),w_(n,r,t||e);const a=s?G_(n,e):void 0;return e&&pa(!1),a}function G_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,l_);const{setup:i}=t;if(i){nr();const r=n.setupContext=i.length>1?X_(n):null,s=Pa(n),a=Ca(i,n,0,[n.props,r]),o=Sd(a);if(ir(),s(),(o||n.sp)&&!ia(n)&&Qd(n),o){if(a.then(Ih,Ih),e)return a.then(l=>{pa(!0);try{Uh(n,l,e)}finally{pa(!1)}}).catch(l=>{rl(l,n,0)});n.asyncDep=a}else Uh(n,a)}else Ep(n)}function Uh(n,e,t){mt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Bt(e)&&(n.setupState=Gd(e)),Ep(n)}function Ep(n,e,t){const i=n.type;n.render||(n.render=i.render||Mi);{const r=Pa(n);nr();try{c_(n)}finally{ir(),r()}}}const W_={get(n,e){return xn(n,"get",""),n[e]}};function X_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,W_),slots:n.slots,emit:n.emit,expose:e}}function cl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Gd(Dg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ra)return ra[t](n)},has(e,t){return t in e||t in ra}})):n.proxy}function $_(n){return mt(n)&&"__vccOpts"in n}const gr=(n,e)=>Fg(n,e,ma),q_="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lc;const Nh=typeof window<"u"&&window.trustedTypes;if(Nh)try{Lc=Nh.createPolicy("vue",{createHTML:n=>n})}catch{}const Tp=Lc?n=>Lc.createHTML(n):n=>n,Y_="http://www.w3.org/2000/svg",K_="http://www.w3.org/1998/Math/MathML",ki=typeof document<"u"?document:null,Fh=ki&&ki.createElement("template"),Z_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?ki.createElementNS(Y_,n):e==="mathml"?ki.createElementNS(K_,n):t?ki.createElement(n,{is:t}):ki.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ki.createTextNode(n),createComment:n=>ki.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ki.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Fh.innerHTML=Tp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Fh.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},J_=Symbol("_vtc");function j_(n,e,t){const i=n[J_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Oh=Symbol("_vod"),Q_=Symbol("_vsh"),ev=Symbol(""),tv=/(?:^|;)\s*display\s*:/;function nv(n,e,t){const i=n.style,r=Zt(t);let s=!1;if(t&&!r){if(e)if(Zt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&qs(i,o,"")}else for(const a in e)t[a]==null&&qs(i,a,"");for(const a in t){a==="display"&&(s=!0);const o=t[a];o!=null?rv(n,a,!Zt(e)&&e?e[a]:void 0,o)||qs(i,a,o):qs(i,a,"")}}else if(r){if(e!==t){const a=i[ev];a&&(t+=";"+a),i.cssText=t,s=tv.test(t)}}else e&&n.removeAttribute("style");Oh in n&&(n[Oh]=s?i.display:"",n[Q_]&&(i.display="none"))}const Ga=/\s*!important$/;function qs(n,e,t){if(ct(t))t.forEach(i=>qs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))Ga.test(t)?n.setProperty(e,t.replace(Ga,""),"important"):n.setProperty(e,t);else{const i=iv(n,e);Ga.test(t)?n.setProperty(Kr(i),t.replace(Ga,""),"important"):n[i]=t}}const Bh=["Webkit","Moz","ms"],Ll={};function iv(n,e){const t=Ll[e];if(t)return t;let i=ri(e);if(i!=="filter"&&i in n)return Ll[e]=i;i=bd(i);for(let r=0;r<Bh.length;r++){const s=Bh[r]+i;if(s in n)return Ll[e]=s}return e}function rv(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Zt(i)&&t===i}const zh="http://www.w3.org/1999/xlink";function Vh(n,e,t,i,r,s=cg(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(zh,e.slice(6,e.length)):n.setAttributeNS(zh,e,t):t==null||s&&!Td(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Ei(t)?String(t):t)}function Hh(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Tp(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Td(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function xr(n,e,t,i){n.addEventListener(e,t,i)}function sv(n,e,t,i){n.removeEventListener(e,t,i)}const kh=Symbol("_vei");function av(n,e,t,i,r=null){const s=n[kh]||(n[kh]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=cv(e);if(i){const c=s[e]=fv(i,r);xr(n,o,c,l)}else a&&(sv(n,o,a,l),s[e]=void 0)}}const ov=/(Once|Passive|Capture)$/,lv=/^on:?(?:Once|Passive|Capture)$/;function cv(n){let e,t;for(;(t=n.match(ov))&&!lv.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Kr(n.slice(2)),e]}let Dl=0;const uv=Promise.resolve(),hv=()=>Dl||(uv.then(()=>Dl=0),Dl=Date.now());function fv(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(ct(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const a=r.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&oi(c,e,5,o)}}else oi(r,e,5,[i])};return t.value=n,t.attached=hv(),t}const Gh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,dv=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?j_(n,i,a):e==="style"?nv(n,t,i):jo(e)?Qo(e)||av(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pv(n,e,i,a))?(Hh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vh(n,e,i,a,s,e!=="value")):n._isVueCE&&(mv(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Zt(i)))?Hh(n,ri(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Vh(n,e,i,a))};function pv(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Gh(e)&&mt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Gh(e)&&Zt(t)?!1:e in n}function mv(n,e){const t=n._def.props;if(!t)return!1;const i=ri(e);return Array.isArray(t)?t.some(r=>ri(r)===i):Object.keys(t).some(r=>ri(r)===i)}const Ms=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ct(e)?t=>To(e,t):e};function gv(n){n.target.composing=!0}function Wh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xi=Symbol("_assign"),Wa=Symbol("_initialValue");function Il(n,e,t){return e&&(n=n.trim()),t&&(n=tl(n)),n}const Jn={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[Wa]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Wa]=n.defaultValue.replace(/\r\n?/g,`
`))),n[xi]=Ms(r);const s=i||r.props&&r.props.type==="number";xr(n,e?"change":"input",a=>{a.target.composing||n[xi](Il(n.value,t,s))}),(t||s)&&xr(n,"change",()=>{n.value=Il(n.value,t,s)}),e||(xr(n,"compositionstart",gv),xr(n,"compositionend",Wh),xr(n,"change",Wh))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[Wa];delete n[Wa],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[xi](Il(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[xi]=Ms(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?tl(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},ur={deep:!0,created(n,e,t){n[xi]=Ms(t),xr(n,"change",()=>{const i=n._modelValue,r=ga(n),s=n.checked,a=n[xi];if(ct(i)){const o=Du(i,r),l=o!==-1;if(s&&!l)a(i.concat(r));else if(!s&&l){const c=[...i];c.splice(o,1),a(c)}}else if(er(i)){const o=new Set(i);s?o.add(r):o.delete(r),a(o)}else a(Ap(n,s))})},mounted:Xh,beforeUpdate(n,e,t){n[xi]=Ms(t),Xh(n,e,t)}};function Xh(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(ct(e))r=Du(e,i.props.value)>-1;else if(er(e))r=e.has(i.props.value);else{if(e===t)return;r=tr(e,Ap(n,!0))}n.checked!==r&&(n.checked=r)}const _v={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,xr(n,"change",()=>{const r=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>t?tl(ga(l)):ga(l)),s=n.multiple,a=s?er(n._modelValue)?new Set(r):r:r[0],o=n._pendingValue=[s,s?ct(a)?r.slice():r:a];try{n[xi](a)}finally{Xd(()=>{n._pendingValue===o&&(n._pendingValue=void 0)})}}),n[xi]=Ms(i)},mounted(n,{value:e}){$h(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[xi]=Ms(t)},updated(n,{value:e}){const t=n._pendingValue;n._pendingValue=void 0,(!t||t[0]!==n.multiple||!vv(e,t[1],t[0]))&&$h(n,e)}};function vv(n,e,t){if(!t||ct(n))return tr(n,e);if(er(n)){if(n.size!==e.length)return!1;for(const i of e)if(!n.has(i))return!1;return!0}return!1}function $h(n,e){const t=n.multiple,i=ct(e);if(!(t&&!i&&!er(e))){for(let r=0,s=n.options.length;r<s;r++){const a=n.options[r],o=ga(a);if(t)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=e.some(c=>String(c)===String(o)):a.selected=Du(e,o)>-1}else a.selected=e.has(o);else if(tr(ga(a),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function ga(n){return"_value"in n?n._value:n.value}function Ap(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const xv=dn({patchProp:dv},Z_);let qh;function Sv(){return qh||(qh=C_(xv))}const yv=((...n)=>{const e=Sv().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=bv(i);if(!r)return;const s=e._component;!mt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Mv(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function Mv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function bv(n){return Zt(n)?document.querySelector(n):n}const Fi=Math.PI/180,Xa={haStar:1,cStar:.25,rhoFStar:.38};function Ev(n,e){return{x:n*(Math.sin(e)-e*Math.cos(e)),y:n*(Math.cos(e)+e*Math.sin(e))}}function Tv(n){return Math.tan(n)-n}function Yh(n,e){const t=n/e;return Math.sqrt(Math.max(0,t*t-1))}function Kh(n,e){const t=Math.cos(e),i=Math.sin(e);return{x:n.x*t-n.y*i,y:n.x*i+n.y*t}}function Ys(n,e){return{x:n*Math.cos(e),y:n*Math.sin(e)}}function Av(n,e,t,i){const r=[];for(let s=0;s<=i;s++){const a=e+(t-e)*s/i;r.push(Ys(n,a))}return r}function Zh(n,e=16){const{z:t,module:i,alpha:r}=n,s=i*t/2,a=s*Math.cos(r),o=s+Xa.haStar*i,l=s-(Xa.haStar+Xa.cStar)*i,c=Math.PI*i,u=c*Math.cos(r),f=Math.PI*i/2,h=2*Math.PI/t,d=a>l,_=Tv(r),M=Math.PI/(2*t)+_,m=Yh(o,a),p=Math.atan(m),T=m-Math.atan(m),L=Math.PI/(2*t)+_-T,y=2*o*L,A=L<=0,R=2/(Math.sin(r)*Math.sin(r)),U=t<R,S=ce=>({x:-ce.x,y:ce.y}),D=d?0:Yh(l,a),B=(ce,we,Ke,Oe)=>{const C=[];for(let O=0;O<=Oe;O++){const N=we+(Ke-we)*O/Oe,W=Kh(Ev(a,N),M);C.push(ce===1?S(W):W)}return C},G=6,K=ce=>{const we=-ce,Ke=Math.PI/2+we*M,Oe=B(ce,D,D,1);if(!d)return{j:Oe[0],jAngle:Math.atan2(Oe[0].y,Oe[0].x),fillet:[],flankLo:null};const C=Math.PI/2+we*(h/2),O=(a*a-l*l)/(2*l),N=Math.abs(Ke-C),W=Math.sin(N),H=W<1?l*W/(1-W):1/0,k=Math.max(0,Math.min(Xa.rhoFStar*i,O*.999,H*.999)),te=l+k,pe=Math.asin(Math.min(1,k/te)),he=ce===1?Ke-pe:Ke+pe,re=Ys(te,he),Me=Ys(l,he),P=Math.sqrt(Math.max(0,te*te-k*k)),Le=Ys(P,Ke),Ie=Math.atan2(Me.y-re.y,Me.x-re.x);let g=Math.atan2(Le.y-re.y,Le.x-re.x)-Ie;for(;g>Math.PI;)g-=2*Math.PI;for(;g<-Math.PI;)g+=2*Math.PI;g=Math.abs(g)*-ce;const F=[];for(let J=0;J<=G;J++){const ie=Ie+g*J/G;F.push({x:re.x+k*Math.cos(ie),y:re.y+k*Math.sin(ie)})}return{j:Me,jAngle:he,fillet:F,flankLo:Oe[0]}},ne=K(1),z=K(-1),Z=B(1,D,m,e),le=B(-1,D,m,e),ee=Z[e],de=le[e],ue=Math.atan2(ee.y,ee.x),ve=Math.atan2(de.y,de.x),_e=[];_e.push(...ne.fillet),ne.flankLo&&_e.push(ne.flankLo),_e.push(...Z.slice(1));let Pe=ve-ue;for(;Pe>Math.PI;)Pe-=2*Math.PI;for(;Pe<-Math.PI;)Pe+=2*Math.PI;const Xe=Math.max(4,Math.ceil(Math.abs(Pe)/h*24));_e.push(...Av(o,ue,ue+Pe,Xe).slice(1));for(let ce=e-1;ce>=0;ce--)_e.push(le[ce]);z.flankLo&&(_e.push(z.flankLo),_e.push(z.fillet[z.fillet.length-1])),_e.push(...z.fillet.slice(0,-1).reverse());const rt=[],ot=6,lt=ce=>{const we=rt[rt.length-1];(!we||Math.hypot(ce.x-we.x,ce.y-we.y)>1e-10)&&rt.push(ce)};for(let ce=0;ce<t;ce++){const we=ce*h,Ke=_e.map(O=>Kh(O,we)),Oe=z.jAngle+we,C=ne.jAngle+(ce+1)*h;for(const O of Ke.slice(0,-1))lt(O);for(let O=1;O<=ot;O++){const N=Oe+(C-Oe)*O/ot;lt(Ys(l,N))}}if(rt.length>1){const ce=rt[0],we=rt[rt.length-1];Math.hypot(ce.x-we.x,ce.y-we.y)<1e-10&&rt.pop()}const me=Array.from({length:t},(ce,we)=>Math.PI/2+we*h);return{input:n,pitchR:s,baseR:a,addendumR:o,dedendumR:l,baseAboveRoot:d,circularPitch:c,basePitch:u,toothThickness:f,beta:M,taTip:m,zMinValue:R,undercut:U,alphaTip:p,tipThickness:y,pointed:A,toothProfile:_e,outline:rt,toothCenterAngles:me,jAngleRight:ne.jAngle,jAngleLeft:z.jAngle}}function ko(n,e,t,i){const r=Math.cos(i),s=Math.sin(i);return n.map(a=>({x:e+a.x*r-a.y*s,y:t+a.x*s+a.y*r}))}function Jh(n){const e=[];return(!Number.isFinite(n.z)||n.z<4||Math.abs(n.z-Math.round(n.z))>1e-9)&&e.push("齿数必须为 ≥4 的整数"),(!(n.module>0)||!Number.isFinite(n.module))&&e.push("模数必须 > 0"),(!(n.alpha>0)||n.alpha>=Math.PI/2)&&e.push("压力角必须在 (0°, 90°) 内"),n.faceWidth>0||e.push("齿宽必须 > 0"),e}function wv(n){const{g1:e,g2:t,centerDistance:i}=n,r=e.pitchR+t.pitchR,s=e.input.alpha,a=Math.min(1,Math.max(-1,r*Math.cos(s)/i)),o=Math.acos(a),l=e.baseR/Math.cos(o),c=t.baseR/Math.cos(o),u=i-r,f=Pe=>Math.tan(Pe)-Pe,h=2*i*(f(o)-f(s)),d=h*Math.cos(o),_=i-e.addendumR-t.dedendumR,M=i-t.addendumR-e.dedendumR,m=Math.abs(e.basePitch-t.basePitch),p=m<1e-6,T=[],L=i<e.addendumR+t.addendumR;L&&T.push("中心距小于两齿顶圆半径之和，齿顶圆交叉，必然实体干涉"),(_<0||M<0)&&T.push("存在齿顶与对方齿根圆交叉（顶隙为负）"),Math.abs(u)>1e-9&&(u>0?T.push(`非标准中心距（+${u.toFixed(3)} mm）：有侧隙安装，啮合角增大，不再是无侧隙啮合`):T.push("中心距小于标准值：无侧隙空间，齿面相互挤压（仅教学演示干涉）")),p||T.push(`两轮基节不等（差 ${m.toFixed(4)} mm），不能正确啮合`);const y={x:l,y:0},A=Math.sin(o),R=Math.cos(o),U=-l*A,S={x:y.x+U*A,y:y.y+U*R},D=c*A,B={x:y.x+D*A,y:y.y+D*R},G=(Pe,Xe)=>{const rt=y.x-Pe,ot=y.y,lt=2*(rt*A+ot*R),me=rt*rt+ot*ot-Xe*Xe,ce=lt*lt-4*me;if(ce<0)return[];const we=Math.sqrt(ce);return[(-lt-we)/2,(-lt+we)/2]},K=G(0,e.addendumR),z=G(i,t.addendumR).filter(Pe=>Pe<=1e-9),Z=K.filter(Pe=>Pe>=-1e-9),le=z.length?Math.max(...z):U,ee=Z.length?Math.min(...Z):D,de={x:y.x+le*A,y:y.y+le*R},ue={x:y.x+ee*A,y:y.y+ee*R},ve=Math.max(0,ee-le),_e=ve/e.basePitch;return{a0:r,a:i,alphaPrime:o,pitchR1:l,pitchR2:c,deltaA:u,backlashTangential:Math.max(0,h),backlashNormal:Math.max(0,d),clearance12:_,clearance21:M,basePitchMatch:p,basePitchDiff:m,addendumOverlap:L,actionLine:{p0:de,p1:ue},tangentLine:{p0:S,p1:B},pitchPoint:y,pathOfContact:ve,contactRatio:_e,ok:p&&!L,warnings:T}}function Dc(n,e,t,i){const r=n.alphaPrime,s=Math.sin(r),a=Math.cos(r),o=Math.tan(r)+i/e.baseR,l=Math.tan(r)-i/t.baseR,c=o-Math.atan(o),u=l-Math.atan(l),f=Math.PI/2+e.beta-c,h=Math.PI/2+t.beta-u,d=Math.atan2(i*a,n.pitchR1+i*s),_=Math.atan2(i*a,-n.pitchR2+i*s),M=d-f,m=_-h;return{phi1:M,phi2:m,t1:o,t2:l}}function jh(n,e,t,i){const r=t.alphaPrime,s=Math.sin(r),a=Math.cos(r);let o=0;for(let h=0;h<30;h++){const d=Math.tan(r)+o/n.baseR,_=d-Math.atan(d),M=Math.PI/2+n.beta-_,p=Math.atan2(o*a,t.pitchR1+o*s)-M-i;if(o-=p/(1/n.baseR),Math.abs(p)<1e-12)break}const l=Math.tan(r)-o/e.baseR,c=l-Math.atan(l),u=Math.PI/2+e.beta-c;return Math.atan2(o*a,-t.pitchR2+o*s)-u}function Qh(n,e){const t=n.alphaPrime,i=Math.sin(t),r=Math.cos(t);return{x:n.pitchPoint.x+e*i,y:n.pitchPoint.y+e*r}}const Rv="modulepreload",Cv=function(n,e){return new URL(n,e).href},ef={},Pv=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let a=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");r=a(t.map(u=>{if(u=Cv(u,i),u in ef)return;ef[u]=!0;const f=u.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(!!i)for(let M=o.length-1;M>=0;M--){const m=o[M];if(m.href===u&&(!f||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":Rv,f||(_.as="script"),_.crossOrigin="",_.href=u,c&&_.setAttribute("nonce",c),document.head.appendChild(_),f)return new Promise((M,m)=>{_.addEventListener("load",M),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};async function Lv(n={}){var e,t=n,i=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,s=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";if(s){const{createRequire:x}=await Pv(()=>import("./__vite-browser-external-BIHI7g3E.js"),[],import.meta.url);var a=x(import.meta.url)}var o=import.meta.url,l="";function c(x){return t.locateFile?t.locateFile(x,l):l+x}var u,f;if(s){var h=a("fs");o.startsWith("file:")&&(l=a("path").dirname(a("url").fileURLToPath(o))+"/"),f=x=>{x=m(x)?new URL(x):x;var v=h.readFileSync(x);return v},u=async(x,v=!0)=>{x=m(x)?new URL(x):x;var I=h.readFileSync(x,v?void 0:"utf8");return I},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else if(i||r){try{l=new URL(".",o).href}catch{}r&&(f=x=>{var v=new XMLHttpRequest;return v.open("GET",x,!1),v.responseType="arraybuffer",v.send(null),new Uint8Array(v.response)}),u=async x=>{if(m(x))return new Promise((I,V)=>{var Q=new XMLHttpRequest;Q.open("GET",x,!0),Q.responseType="arraybuffer",Q.onload=()=>{if(Q.status==200||Q.status==0&&Q.response){I(Q.response);return}V(Q.status)},Q.onerror=V,Q.send(null)});var v=await fetch(x,{credentials:"same-origin"});if(v.ok)return v.arrayBuffer();throw new Error(v.status+" : "+v.url)}}console.log.bind(console);var d=console.error.bind(console),_,M=!1,m=x=>x.startsWith("file://"),p,T,L,y,A,R,U,S,D,B,G,K,ne=!1;function z(){var x=Ba.buffer;L=new Int8Array(x),A=new Int16Array(x),t.HEAPU8=y=new Uint8Array(x),R=new Uint16Array(x),U=new Int32Array(x),S=new Uint32Array(x),D=new Float32Array(x),B=new Float64Array(x),G=new BigInt64Array(x),K=new BigUint64Array(x)}function Z(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Oe(t.preRun.shift());me(Ke)}function le(){ne=!0,Us.E()}function ee(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)we(t.postRun.shift());me(ce)}function de(x){t.onAbort?.(x),x="Aborted("+x+")",d(x),M=!0,x+=". Build with -sASSERTIONS for more info.";var v=new WebAssembly.RuntimeError(x);throw T?.(v),v}var ue;function ve(){return t.locateFile?c("clipper2z.wasm"):new URL(""+new URL("clipper2z-Cj78y2Ub.wasm",import.meta.url).href,import.meta.url).href}function _e(x){if(x==ue&&_)return new Uint8Array(_);if(f)return f(x);throw"both async and sync fetching of the wasm failed"}async function Pe(x){if(!_)try{var v=await u(x);return new Uint8Array(v)}catch{}return _e(x)}async function Xe(x,v){try{var I=await Pe(x),V=await WebAssembly.instantiate(I,v);return V}catch(Q){d(`failed to asynchronously prepare wasm: ${Q}`),de(Q)}}async function rt(x,v,I){if(!x&&!m(v)&&!s)try{var V=fetch(v,{credentials:"same-origin"}),Q=await WebAssembly.instantiateStreaming(V,I);return Q}catch(Se){d(`wasm streaming compile failed: ${Se}`),d("falling back to ArrayBuffer instantiation")}return Xe(v,I)}function ot(){var x={a:$m};return x}async function lt(){function x(Se,Ee){return Us=Se.exports,Xm(Us),z(),Us}function v(Se){return x(Se.instance)}var I=ot();if(t.instantiateWasm)return new Promise((Se,Ee)=>{t.instantiateWasm(I,(Ae,Ue)=>{Se(x(Ae))})});ue??=ve();var V=await rt(_,ue,I),Q=v(V);return Q}var me=x=>{for(;x.length>0;)x.shift()(t)},ce=[],we=x=>ce.push(x),Ke=[],Oe=x=>Ke.push(x);class C{constructor(v){this.excPtr=v,this.ptr=v-24}set_type(v){S[this.ptr+4>>2]=v}get_type(){return S[this.ptr+4>>2]}set_destructor(v){S[this.ptr+8>>2]=v}get_destructor(){return S[this.ptr+8>>2]}set_caught(v){v=v?1:0,L[this.ptr+12]=v}get_caught(){return L[this.ptr+12]!=0}set_rethrown(v){v=v?1:0,L[this.ptr+13]=v}get_rethrown(){return L[this.ptr+13]!=0}init(v,I){this.set_adjusted_ptr(0),this.set_type(v),this.set_destructor(I)}set_adjusted_ptr(v){S[this.ptr+16>>2]=v}get_adjusted_ptr(){return S[this.ptr+16>>2]}}var O=0,N=(x,v,I)=>{var V=new C(x);throw V.init(v,I),O=x,O},W=()=>de(""),H={},k=x=>{for(;x.length;){var v=x.pop(),I=x.pop();I(v)}};function te(x){return this.fromWireType(S[x>>2])}var pe={},he={},re={},Me=class extends Error{constructor(v){super(v),this.name="InternalError"}},P=x=>{throw new Me(x)},Le=(x,v,I)=>{x.forEach(Ae=>re[Ae]=v);function V(Ae){var Ue=I(Ae);Ue.length!==x.length&&P("Mismatched type converter count");for(var at=0;at<x.length;++at)ie(x[at],Ue[at])}var Q=new Array(v.length),Se=[],Ee=0;v.forEach((Ae,Ue)=>{he.hasOwnProperty(Ae)?Q[Ue]=he[Ae]:(Se.push(Ae),pe.hasOwnProperty(Ae)||(pe[Ae]=[]),pe[Ae].push(()=>{Q[Ue]=he[Ae],++Ee,Ee===Se.length&&V(Q)}))}),Se.length===0&&V(Q)},Ie=x=>{var v=H[x];delete H[x];var I=v.rawConstructor,V=v.rawDestructor,Q=v.fields,Se=Q.map(Ee=>Ee.getterReturnType).concat(Q.map(Ee=>Ee.setterArgumentType));Le([x],Se,Ee=>{var Ae={};return Q.forEach((Ue,at)=>{var st=Ue.fieldName,Ct=Ee[at],qt=Ee[at].optional,At=Ue.getter,Yt=Ue.getterContext,ln=Ee[at+Q.length],Zn=Ue.setter,Cn=Ue.setterContext;Ae[st]={read:Ui=>Ct.fromWireType(At(Yt,Ui)),write:(Ui,Mn)=>{var za=[];Zn(Cn,Ui,ln.toWireType(za,Mn)),k(za)},optional:qt}}),[{name:v.name,fromWireType:Ue=>{var at={};for(var st in Ae)at[st]=Ae[st].read(Ue);return V(Ue),at},toWireType:(Ue,at)=>{for(var st in Ae)if(!(st in at)&&!Ae[st].optional)throw new TypeError(`Missing field: "${st}"`);var Ct=I();for(st in Ae)Ae[st].write(Ct,at[st]);return Ue!==null&&Ue.push(V,Ct),Ct},readValueFromPointer:te,destructorFunction:V}]})},E=x=>{for(var v="";;){var I=y[x++];if(!I)return v;v+=String.fromCharCode(I)}},g=class extends Error{constructor(v){super(v),this.name="BindingError"}},F=x=>{throw new g(x)};function J(x,v,I={}){var V=v.name;if(x||F(`type "${V}" must have a positive integer typeid pointer`),he.hasOwnProperty(x)){if(I.ignoreDuplicateRegistrations)return;F(`Cannot register type '${V}' twice`)}if(he[x]=v,delete re[x],pe.hasOwnProperty(x)){var Q=pe[x];delete pe[x],Q.forEach(Se=>Se())}}function ie(x,v,I={}){return J(x,v,I)}var Re=(x,v,I)=>{switch(v){case 1:return I?V=>L[V]:V=>y[V];case 2:return I?V=>A[V>>1]:V=>R[V>>1];case 4:return I?V=>U[V>>2]:V=>S[V>>2];case 8:return I?V=>G[V>>3]:V=>K[V>>3];default:throw new TypeError(`invalid integer width (${v}): ${x}`)}},De=(x,v,I,V,Q)=>{v=E(v);const Se=V===0n;let Ee=Ae=>Ae;if(Se){const Ae=I*8;Ee=Ue=>BigInt.asUintN(Ae,Ue),Q=Ee(Q)}ie(x,{name:v,fromWireType:Ee,toWireType:(Ae,Ue)=>(typeof Ue=="number"&&(Ue=BigInt(Ue)),Ue),readValueFromPointer:Re(v,I,!Se),destructorFunction:null})},ge=(x,v,I,V)=>{v=E(v),ie(x,{name:v,fromWireType:function(Q){return!!Q},toWireType:function(Q,Se){return Se?I:V},readValueFromPointer:function(Q){return this.fromWireType(y[Q])},destructorFunction:null})},xe=x=>({count:x.count,deleteScheduled:x.deleteScheduled,preservePointerOnDelete:x.preservePointerOnDelete,ptr:x.ptr,ptrType:x.ptrType,smartPtr:x.smartPtr,smartPtrType:x.smartPtrType}),Ce=x=>{function v(I){return I.$$.ptrType.registeredClass.name}F(v(x)+" instance already deleted")},Ne=!1,Be=x=>{},ze=x=>{x.smartPtr?x.smartPtrType.rawDestructor(x.smartPtr):x.ptrType.registeredClass.rawDestructor(x.ptr)},nt=x=>{x.count.value-=1;var v=x.count.value===0;v&&ze(x)},it=x=>globalThis.FinalizationRegistry?(Ne=new FinalizationRegistry(v=>{nt(v.$$)}),it=v=>{var I=v.$$,V=!!I.smartPtr;if(V){var Q={$$:I};Ne.register(v,Q,v)}return v},Be=v=>Ne.unregister(v),it(x)):(it=v=>v,x),ht=()=>{let x=X.prototype;Object.assign(x,{isAliasOf(I){if(!(this instanceof X)||!(I instanceof X))return!1;var V=this.$$.ptrType.registeredClass,Q=this.$$.ptr;I.$$=I.$$;for(var Se=I.$$.ptrType.registeredClass,Ee=I.$$.ptr;V.baseClass;)Q=V.upcast(Q),V=V.baseClass;for(;Se.baseClass;)Ee=Se.upcast(Ee),Se=Se.baseClass;return V===Se&&Q===Ee},clone(){if(this.$$.ptr||Ce(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var I=it(Object.create(Object.getPrototypeOf(this),{$$:{value:xe(this.$$)}}));return I.$$.count.value+=1,I.$$.deleteScheduled=!1,I},delete(){this.$$.ptr||Ce(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&F("Object already scheduled for deletion"),Be(this),nt(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Ce(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&F("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const v=Symbol.dispose;v&&(x[v]=x.delete)};function X(){}var Ve=(x,v)=>Object.defineProperty(v,"name",{value:x}),ye={},He=(x,v,I)=>{if(x[v].overloadTable===void 0){var V=x[v];x[v]=function(...Q){return x[v].overloadTable.hasOwnProperty(Q.length)||F(`Function '${I}' called with an invalid number of arguments (${Q.length}) - expects one of (${x[v].overloadTable})!`),x[v].overloadTable[Q.length].apply(this,Q)},x[v].overloadTable=[],x[v].overloadTable[V.argCount]=V}},be=(x,v,I)=>{t.hasOwnProperty(x)?((I===void 0||t[x].overloadTable!==void 0&&t[x].overloadTable[I]!==void 0)&&F(`Cannot register public name '${x}' twice`),He(t,x,x),t[x].overloadTable.hasOwnProperty(I)&&F(`Cannot register multiple overloads of a function with the same number of arguments (${I})!`),t[x].overloadTable[I]=v):(t[x]=v,t[x].argCount=I)},Te=48,Ge=57,je=x=>{x=x.replace(/[^a-zA-Z0-9_]/g,"$");var v=x.charCodeAt(0);return v>=Te&&v<=Ge?`_${x}`:x};function j(x,v,I,V,Q,Se,Ee,Ae){this.name=x,this.constructor=v,this.instancePrototype=I,this.rawDestructor=V,this.baseClass=Q,this.getActualType=Se,this.upcast=Ee,this.downcast=Ae,this.pureVirtualFunctions=[]}var w=(x,v,I)=>{for(;v!==I;)v.upcast||F(`Expected null or instance of ${I.name}, got an instance of ${v.name}`),x=v.upcast(x),v=v.baseClass;return x},se=x=>{if(x===null)return"null";var v=typeof x;return v==="object"||v==="array"||v==="function"?x.toString():""+x};function et(x,v){if(v===null)return this.isReference&&F(`null is not a valid ${this.name}`),0;v.$$||F(`Cannot pass "${se(v)}" as a ${this.name}`),v.$$.ptr||F(`Cannot pass deleted object as a pointer of type ${this.name}`);var I=v.$$.ptrType.registeredClass,V=w(v.$$.ptr,I,this.registeredClass);return V}function ft(x,v){var I;if(v===null)return this.isReference&&F(`null is not a valid ${this.name}`),this.isSmartPointer?(I=this.rawConstructor(),x!==null&&x.push(this.rawDestructor,I),I):0;(!v||!v.$$)&&F(`Cannot pass "${se(v)}" as a ${this.name}`),v.$$.ptr||F(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&v.$$.ptrType.isConst&&F(`Cannot convert argument of type ${v.$$.smartPtrType?v.$$.smartPtrType.name:v.$$.ptrType.name} to parameter type ${this.name}`);var V=v.$$.ptrType.registeredClass;if(I=w(v.$$.ptr,V,this.registeredClass),this.isSmartPointer)switch(v.$$.smartPtr===void 0&&F("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:v.$$.smartPtrType===this?I=v.$$.smartPtr:F(`Cannot convert argument of type ${v.$$.smartPtrType?v.$$.smartPtrType.name:v.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:I=v.$$.smartPtr;break;case 2:if(v.$$.smartPtrType===this)I=v.$$.smartPtr;else{var Q=v.clone();I=this.rawShare(I,Ye.toHandle(()=>Q.delete())),x!==null&&x.push(this.rawDestructor,I)}break;default:F("Unsupporting sharing policy")}return I}function Tt(x,v){if(v===null)return this.isReference&&F(`null is not a valid ${this.name}`),0;v.$$||F(`Cannot pass "${se(v)}" as a ${this.name}`),v.$$.ptr||F(`Cannot pass deleted object as a pointer of type ${this.name}`),v.$$.ptrType.isConst&&F(`Cannot convert argument of type ${v.$$.ptrType.name} to parameter type ${this.name}`);var I=v.$$.ptrType.registeredClass,V=w(v.$$.ptr,I,this.registeredClass);return V}var St=(x,v,I)=>{if(v===I)return x;if(I.baseClass===void 0)return null;var V=St(x,v,I.baseClass);return V===null?null:I.downcast(V)},pn={},Pi=(x,v)=>{for(v===void 0&&F("ptr should not be undefined");x.baseClass;)v=x.upcast(v),x=x.baseClass;return v},Cs=(x,v)=>(v=Pi(x,v),pn[v]),Li=(x,v)=>{(!v.ptrType||!v.ptr)&&P("makeClassHandle requires ptr and ptrType");var I=!!v.smartPtrType,V=!!v.smartPtr;return I!==V&&P("Both smartPtrType and smartPtr must be specified"),v.count={value:1},it(Object.create(x,{$$:{value:v,writable:!0}}))};function Di(x){var v=this.getPointee(x);if(!v)return this.destructor(x),null;var I=Cs(this.registeredClass,v);if(I!==void 0){if(I.$$.count.value===0)return I.$$.ptr=v,I.$$.smartPtr=x,I.clone();var V=I.clone();return this.destructor(x),V}function Q(){return this.isSmartPointer?Li(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:v,smartPtrType:this,smartPtr:x}):Li(this.registeredClass.instancePrototype,{ptrType:this,ptr:x})}var Se=this.registeredClass.getActualType(v),Ee=ye[Se];if(!Ee)return Q.call(this);var Ae;this.isConst?Ae=Ee.constPointerType:Ae=Ee.pointerType;var Ue=St(v,this.registeredClass,Ae.registeredClass);return Ue===null?Q.call(this):this.isSmartPointer?Li(Ae.registeredClass.instancePrototype,{ptrType:Ae,ptr:Ue,smartPtrType:this,smartPtr:x}):Li(Ae.registeredClass.instancePrototype,{ptrType:Ae,ptr:Ue})}var Ps=()=>{Object.assign(Rr.prototype,{getPointee(x){return this.rawGetPointee&&(x=this.rawGetPointee(x)),x},destructor(x){this.rawDestructor?.(x)},readValueFromPointer:te,fromWireType:Di})};function Rr(x,v,I,V,Q,Se,Ee,Ae,Ue,at,st){this.name=x,this.registeredClass=v,this.isReference=I,this.isConst=V,this.isSmartPointer=Q,this.pointeeType=Se,this.sharingPolicy=Ee,this.rawGetPointee=Ae,this.rawConstructor=Ue,this.rawShare=at,this.rawDestructor=st,!Q&&v.baseClass===void 0?V?(this.toWireType=et,this.destructorFunction=null):(this.toWireType=Tt,this.destructorFunction=null):this.toWireType=ft}var Ls=(x,v,I)=>{t.hasOwnProperty(x)||P("Replacing nonexistent public symbol"),t[x].overloadTable!==void 0&&I!==void 0?t[x].overloadTable[I]=v:(t[x]=v,t[x].argCount=I)},Cr=[],Ia=x=>{var v=Cr[x];return v||(Cr[x]=v=ch.get(x)),v},rn=(x,v,I=!1)=>{x=E(x);function V(){var Se=Ia(v);return Se}var Q=V();return typeof Q!="function"&&F(`unknown function pointer with signature ${x}: ${v}`),Q};class Ua extends Error{}var Ds=x=>{var v=lh(x),I=E(v);return cr(v),I},or=(x,v)=>{var I=[],V={};function Q(Se){if(!V[Se]&&!he[Se]){if(re[Se]){re[Se].forEach(Q);return}I.push(Se),V[Se]=!0}}throw v.forEach(Q),new Ua(`${x}: `+I.map(Ds).join([", "]))},vl=(x,v,I,V,Q,Se,Ee,Ae,Ue,at,st,Ct,qt)=>{st=E(st),Se=rn(Q,Se),Ae&&=rn(Ee,Ae),at&&=rn(Ue,at),qt=rn(Ct,qt);var At=je(st);be(At,function(){or(`Cannot construct ${st} due to unbound types`,[V])}),Le([x,v,I],V?[V]:[],Yt=>{Yt=Yt[0];var ln,Zn;V?(ln=Yt.registeredClass,Zn=ln.instancePrototype):Zn=X.prototype;var Cn=Ve(st,function(...yl){if(Object.getPrototypeOf(this)!==Ui)throw new g(`Use 'new' to construct ${st}`);if(Mn.constructor_body===void 0)throw new g(`${st} has no accessible constructor`);var ph=Mn.constructor_body[yl.length];if(ph===void 0)throw new g(`Tried to invoke ctor of ${st} with invalid number of parameters (${yl.length}) - expected (${Object.keys(Mn.constructor_body).toString()}) parameters instead!`);return ph.apply(this,yl)}),Ui=Object.create(Zn,{constructor:{value:Cn}});Cn.prototype=Ui;var Mn=new j(st,Cn,Ui,qt,ln,Se,Ae,at);Mn.baseClass&&(Mn.baseClass.__derivedClasses??=[],Mn.baseClass.__derivedClasses.push(Mn));var za=new Rr(st,Mn,!0,!1,!1),fh=new Rr(st+"*",Mn,!1,!1,!1),dh=new Rr(st+" const*",Mn,!1,!0,!1);return ye[x]={pointerType:fh,constPointerType:dh},Ls(At,Cn),[za,fh,dh]})},Is=(x,v)=>{for(var I=[],V=0;V<x;V++)I.push(S[v+V*4>>2]);return I};function Na(x){for(var v=1;v<x.length;++v)if(x[v]!==null&&x[v].destructorFunction===void 0)return!0;return!1}function Fa(x,v,I,V){var Q=Na(x),Se=x.length-2,Ee=[],Ae=["fn"];v&&Ae.push("thisWired");for(var Ue=0;Ue<Se;++Ue)Ee.push(`arg${Ue}`),Ae.push(`arg${Ue}Wired`);Ee=Ee.join(","),Ae=Ae.join(",");var at=`return function (${Ee}) {
`;Q&&(at+=`var destructors = [];
`);var st=Q?"destructors":"null",Ct=["humanName","throwBindingError","invoker","fn","runDestructors","fromRetWire","toClassParamWire"];v&&(at+=`var thisWired = toClassParamWire(${st}, this);
`);for(var Ue=0;Ue<Se;++Ue){var qt=`toArg${Ue}Wire`;at+=`var arg${Ue}Wired = ${qt}(${st}, arg${Ue});
`,Ct.push(qt)}if(at+=(I||V?"var rv = ":"")+`invoker(${Ae});
`,Q)at+=`runDestructors(destructors);
`;else for(var Ue=v?1:2;Ue<x.length;++Ue){var At=Ue===1?"thisWired":"arg"+(Ue-2)+"Wired";x[Ue].destructorFunction!==null&&(at+=`${At}_dtor(${At});
`,Ct.push(`${At}_dtor`))}return I&&(at+=`var ret = fromRetWire(rv);
return ret;
`),at+=`}
`,new Function(Ct,at)}function b(x,v,I,V,Q,Se){var Ee=v.length;Ee<2&&F("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Ae=v[1]!==null&&I!==null,Ue=Na(v),at=!v[0].isVoid,st=v[0],Ct=v[1],qt=[x,F,V,Q,k,st.fromWireType.bind(st),Ct?.toWireType.bind(Ct)],At=2;At<Ee;++At){var Yt=v[At];qt.push(Yt.toWireType.bind(Yt))}if(!Ue)for(var At=Ae?1:2;At<v.length;++At)v[At].destructorFunction!==null&&qt.push(v[At].destructorFunction);var Zn=Fa(v,Ae,at,Se)(...qt);return Ve(x,Zn)}var $=(x,v,I,V,Q,Se)=>{var Ee=Is(v,I);Q=rn(V,Q),Le([],[x],Ae=>{Ae=Ae[0];var Ue=`constructor ${Ae.name}`;if(Ae.registeredClass.constructor_body===void 0&&(Ae.registeredClass.constructor_body=[]),Ae.registeredClass.constructor_body[v-1]!==void 0)throw new g(`Cannot register multiple constructors with identical number of parameters (${v-1}) for class '${Ae.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return Ae.registeredClass.constructor_body[v-1]=()=>{or(`Cannot construct ${Ae.name} due to unbound types`,Ee)},Le([],Ee,at=>(at.splice(1,0,null),Ae.registeredClass.constructor_body[v-1]=b(Ue,at,null,Q,Se),[])),[]})},fe=x=>{x=x.trim();const v=x.indexOf("(");return v===-1?x:x.slice(0,v)},oe=(x,v,I,V,Q,Se,Ee,Ae,Ue,at)=>{var st=Is(I,V);v=E(v),v=fe(v),Se=rn(Q,Se,Ue),Le([],[x],Ct=>{Ct=Ct[0];var qt=`${Ct.name}.${v}`;v.startsWith("@@")&&(v=Symbol[v.substring(2)]),Ae&&Ct.registeredClass.pureVirtualFunctions.push(v);function At(){or(`Cannot call ${qt} due to unbound types`,st)}var Yt=Ct.registeredClass.instancePrototype,ln=Yt[v];return ln===void 0||ln.overloadTable===void 0&&ln.className!==Ct.name&&ln.argCount===I-2?(At.argCount=I-2,At.className=Ct.name,Yt[v]=At):(He(Yt,v,qt),Yt[v].overloadTable[I-2]=At),Le([],st,Zn=>{var Cn=b(qt,Zn,Ct,Se,Ee,Ue);return Yt[v].overloadTable===void 0?(Cn.argCount=I-2,Yt[v]=Cn):Yt[v].overloadTable[I-2]=Cn,[]}),[]})},ae=(x,v,I)=>(x instanceof Object||F(`${I} with invalid "this": ${x}`),x instanceof v.registeredClass.constructor||F(`${I} incompatible with "this" of type ${x.constructor.name}`),x.$$.ptr||F(`cannot call emscripten binding method ${I} on deleted object`),w(x.$$.ptr,x.$$.ptrType.registeredClass,v.registeredClass)),$e=(x,v,I,V,Q,Se,Ee,Ae,Ue,at)=>{v=E(v),Q=rn(V,Q),Le([],[x],st=>{st=st[0];var Ct=`${st.name}.${v}`,qt={get(){or(`Cannot access ${Ct} due to unbound types`,[I,Ee])},enumerable:!0,configurable:!0};return Ue?qt.set=()=>or(`Cannot access ${Ct} due to unbound types`,[I,Ee]):qt.set=At=>F(Ct+" is a read-only property"),Object.defineProperty(st.registeredClass.instancePrototype,v,qt),Le([],Ue?[I,Ee]:[I],At=>{var Yt=At[0],ln={get(){var Cn=ae(this,st,Ct+" getter");return Yt.fromWireType(Q(Se,Cn))},enumerable:!0};if(Ue){Ue=rn(Ae,Ue);var Zn=At[1];ln.set=function(Cn){var Ui=ae(this,st,Ct+" setter"),Mn=[];Ue(at,Ui,Zn.toWireType(Mn,Cn)),k(Mn)}}return Object.defineProperty(st.registeredClass.instancePrototype,v,ln),[]}),[]})},Ze=[],ke=[0,1,,1,null,1,!0,1,!1,1],Qe=x=>{x>9&&--ke[x+1]===0&&(ke[x]=void 0,Ze.push(x))},Ye={toValue:x=>(x||F(`Cannot use deleted val. handle = ${x}`),ke[x]),toHandle:x=>{switch(x){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const v=Ze.pop()||ke.length;return ke[v]=x,ke[v+1]=1,v}}}},gt={name:"emscripten::val",fromWireType:x=>{var v=Ye.toValue(x);return Qe(x),v},toWireType:(x,v)=>Ye.toHandle(v),readValueFromPointer:te,destructorFunction:null},vt=x=>ie(x,gt),tt=(x,v,I)=>{switch(v){case 1:return I?function(V){return this.fromWireType(L[V])}:function(V){return this.fromWireType(y[V])};case 2:return I?function(V){return this.fromWireType(A[V>>1])}:function(V){return this.fromWireType(R[V>>1])};case 4:return I?function(V){return this.fromWireType(U[V>>2])}:function(V){return this.fromWireType(S[V>>2])};default:throw new TypeError(`invalid integer width (${v}): ${x}`)}},wt=(x,v,I,V)=>{v=E(v);function Q(){}Q.values={},ie(x,{name:v,constructor:Q,fromWireType:function(Se){return this.constructor.values[Se]},toWireType:(Se,Ee)=>Ee.value,readValueFromPointer:tt(v,I,V),destructorFunction:null}),be(v,Q)},Gt=(x,v)=>{var I=he[x];return I===void 0&&F(`${v} has unknown type ${Ds(x)}`),I},zt=(x,v,I)=>{var V=Gt(x,"enum");v=E(v);var Q=V.constructor,Se=Object.create(V.constructor.prototype,{value:{value:I},constructor:{value:Ve(`${V.name}_${v}`,function(){})}});Q.values[I]=Se,Q[v]=Se},It=(x,v)=>{switch(v){case 4:return function(I){return this.fromWireType(D[I>>2])};case 8:return function(I){return this.fromWireType(B[I>>3])};default:throw new TypeError(`invalid float width (${v}): ${x}`)}},sn=(x,v,I)=>{v=E(v),ie(x,{name:v,fromWireType:V=>V,toWireType:(V,Q)=>Q,readValueFromPointer:It(v,I),destructorFunction:null})},Je=(x,v,I,V,Q,Se,Ee,Ae)=>{var Ue=Is(v,I);x=E(x),x=fe(x),Q=rn(V,Q,Ee),be(x,function(){or(`Cannot call ${x} due to unbound types`,Ue)},v-1),Le([],Ue,at=>{var st=[at[0],null].concat(at.slice(1));return Ls(x,b(x,st,null,Q,Se,Ee),v-1),[]})},on=(x,v,I,V,Q)=>{v=E(v);const Se=V===0;let Ee=Ue=>Ue;if(Se){var Ae=32-8*I;Ee=Ue=>Ue<<Ae>>>Ae,Q=Ee(Q)}ie(x,{name:v,fromWireType:Ee,toWireType:(Ue,at)=>at,readValueFromPointer:Re(v,I,V!==0),destructorFunction:null})},yt=(x,v,I)=>{var V=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],Q=V[v];function Se(Ee){var Ae=S[Ee>>2],Ue=S[Ee+4>>2];return new Q(L.buffer,Ue,Ae)}I=E(I),ie(x,{name:I,fromWireType:Se,readValueFromPointer:Se},{ignoreDuplicateRegistrations:!0})},Rn=(x,v,I,V)=>{if(!(V>0))return 0;for(var Q=I,Se=I+V-1,Ee=0;Ee<x.length;++Ee){var Ae=x.codePointAt(Ee);if(Ae<=127){if(I>=Se)break;v[I++]=Ae}else if(Ae<=2047){if(I+1>=Se)break;v[I++]=192|Ae>>6,v[I++]=128|Ae&63}else if(Ae<=65535){if(I+2>=Se)break;v[I++]=224|Ae>>12,v[I++]=128|Ae>>6&63,v[I++]=128|Ae&63}else{if(I+3>=Se)break;v[I++]=240|Ae>>18,v[I++]=128|Ae>>12&63,v[I++]=128|Ae>>6&63,v[I++]=128|Ae&63,Ee++}}return v[I]=0,I-Q},Hn=(x,v,I)=>Rn(x,y,v,I),li=x=>{for(var v=0,I=0;I<x.length;++I){var V=x.charCodeAt(I);V<=127?v++:V<=2047?v+=2:V>=55296&&V<=57343?(v+=4,++I):v+=3}return v},Ii=globalThis.TextDecoder&&new TextDecoder,Rt=(x,v,I,V)=>{var Q=v+I;if(V)return Q;for(;x[v]&&!(v>=Q);)++v;return v},Wt=(x,v=0,I,V)=>{var Q=Rt(x,v,I,V);if(Q-v>16&&x.buffer&&Ii)return Ii.decode(x.subarray(v,Q));for(var Se="";v<Q;){var Ee=x[v++];if(!(Ee&128)){Se+=String.fromCharCode(Ee);continue}var Ae=x[v++]&63;if((Ee&224)==192){Se+=String.fromCharCode((Ee&31)<<6|Ae);continue}var Ue=x[v++]&63;if((Ee&240)==224?Ee=(Ee&15)<<12|Ae<<6|Ue:Ee=(Ee&7)<<18|Ae<<12|Ue<<6|x[v++]&63,Ee<65536)Se+=String.fromCharCode(Ee);else{var at=Ee-65536;Se+=String.fromCharCode(55296|at>>10,56320|at&1023)}}return Se},ci=(x,v,I)=>x?Wt(y,x,v,I):"",Ot=(x,v)=>{v=E(v),ie(x,{name:v,fromWireType(I){var V=S[I>>2],Q=I+4,Se;return Se=ci(Q,V,!0),cr(I),Se},toWireType(I,V){V instanceof ArrayBuffer&&(V=new Uint8Array(V));var Q,Se=typeof V=="string";Se||ArrayBuffer.isView(V)&&V.BYTES_PER_ELEMENT==1||F("Cannot pass non-string to std::string"),Se?Q=li(V):Q=V.length;var Ee=Sl(4+Q+1),Ae=Ee+4;return S[Ee>>2]=Q,Se?Hn(V,Ae,Q+1):y.set(V,Ae),I!==null&&I.push(cr,Ee),Ee},readValueFromPointer:te,destructorFunction(I){cr(I)}})},Kn=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,lr=(x,v,I)=>{var V=x>>1,Q=Rt(R,V,v/2,I);if(Q-V>16&&Kn)return Kn.decode(R.subarray(V,Q));for(var Se="",Ee=V;Ee<Q;++Ee){var Ae=R[Ee];Se+=String.fromCharCode(Ae)}return Se},Oa=(x,v,I)=>{if(I??=2147483647,I<2)return 0;I-=2;for(var V=v,Q=I<x.length*2?I/2:x.length,Se=0;Se<Q;++Se){var Ee=x.charCodeAt(Se);A[v>>1]=Ee,v+=2}return A[v>>1]=0,v-V},bm=x=>x.length*2,Em=(x,v,I)=>{for(var V="",Q=x>>2,Se=0;!(Se>=v/4);Se++){var Ee=S[Q+Se];if(!Ee&&!I)break;V+=String.fromCodePoint(Ee)}return V},Tm=(x,v,I)=>{if(I??=2147483647,I<4)return 0;for(var V=v,Q=V+I-4,Se=0;Se<x.length;++Se){var Ee=x.codePointAt(Se);if(Ee>65535&&Se++,U[v>>2]=Ee,v+=4,v+4>Q)break}return U[v>>2]=0,v-V},Am=x=>{for(var v=0,I=0;I<x.length;++I){var V=x.codePointAt(I);V>65535&&I++,v+=4}return v},wm=(x,v,I)=>{I=E(I);var V,Q,Se;v===2?(V=lr,Q=Oa,Se=bm):(V=Em,Q=Tm,Se=Am),ie(x,{name:I,fromWireType:Ee=>{var Ae=S[Ee>>2],Ue=V(Ee+4,Ae*v,!0);return cr(Ee),Ue},toWireType:(Ee,Ae)=>{typeof Ae!="string"&&F(`Cannot pass non-string to C++ string type ${I}`);var Ue=Se(Ae),at=Sl(4+Ue+v);return S[at>>2]=Ue/v,Q(Ae,at+4,Ue+v),Ee!==null&&Ee.push(cr,at),at},readValueFromPointer:te,destructorFunction(Ee){cr(Ee)}})},Rm=(x,v,I,V,Q,Se)=>{H[x]={name:E(v),rawConstructor:rn(I,V),rawDestructor:rn(Q,Se),fields:[]}},Cm=(x,v,I,V,Q,Se,Ee,Ae,Ue,at)=>{H[x].fields.push({fieldName:E(v),getterReturnType:I,getter:rn(V,Q),getterContext:Se,setterArgumentType:Ee,setter:rn(Ae,Ue),setterContext:at})},Pm=(x,v)=>{v=E(v),ie(x,{isVoid:!0,name:v,fromWireType:()=>{},toWireType:(I,V)=>{}})},xl=[],Lm=x=>{var v=xl.length;return xl.push(x),v},Dm=(x,v)=>{for(var I=new Array(x),V=0;V<x;++V)I[V]=Gt(S[v+V*4>>2],`parameter ${V}`);return I},Im=(x,v,I)=>{var V=[],Q=x(V,I);return V.length&&(S[v>>2]=Ye.toHandle(V)),Q},Um={},oh=x=>{var v=Um[x];return v===void 0?E(x):v},Nm=(x,v,I)=>{var V=8,[Q,...Se]=Dm(x,v),Ee=Q.toWireType.bind(Q),Ae=Se.map(At=>At.readValueFromPointer.bind(At));x--;var Ue={toValue:Ye.toValue},at=Ae.map((At,Yt)=>{var ln=`argFromPtr${Yt}`;return Ue[ln]=At,`${ln}(args${Yt?"+"+Yt*V:""})`}),st;switch(I){case 0:st="toValue(handle)";break;case 2:st="new (toValue(handle))";break;case 3:st="";break;case 1:Ue.getStringOrSymbol=oh,st="toValue(handle)[getStringOrSymbol(methodName)]";break}st+=`(${at})`,Q.isVoid||(Ue.toReturnWire=Ee,Ue.emval_returnValue=Im,st=`return emval_returnValue(toReturnWire, destructorsRef, ${st})`),st=`return function (handle, methodName, destructorsRef, args) {
  ${st}
  }`;var Ct=new Function(Object.keys(Ue),st)(...Object.values(Ue)),qt=`methodCaller<(${Se.map(At=>At.name)}) => ${Q.name}>`;return Lm(Ve(qt,Ct))},Fm=(x,v)=>(x=Ye.toValue(x),v=Ye.toValue(v),Ye.toHandle(x[v])),Om=x=>{x>9&&(ke[x+1]+=1)},Bm=(x,v,I,V,Q)=>xl[x](v,I,V,Q),zm=x=>Ye.toHandle(oh(x)),Vm=x=>{var v=Ye.toValue(x);k(v),Qe(x)},Hm=()=>2147483648,km=(x,v)=>Math.ceil(x/v)*v,Gm=x=>{var v=Ba.buffer.byteLength,I=(x-v+65535)/65536|0;try{return Ba.grow(I),z(),1}catch{}},Wm=x=>{var v=y.length;x>>>=0;var I=Hm();if(x>I)return!1;for(var V=1;V<=4;V*=2){var Q=v*(1+.2/V);Q=Math.min(Q,x+100663296);var Se=Math.min(I,km(Math.max(x,Q),65536)),Ee=Gm(Se);if(Ee)return!0}return!1};if(ht(),Ps(),t.noExitRuntime&&t.noExitRuntime,t.print&&t.print,t.printErr&&(d=t.printErr),t.wasmBinary&&(_=t.wasmBinary),t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();var lh,Sl,cr,Ba,ch;function Xm(x){lh=x.F,Sl=x.H,cr=x.I,Ba=x.D,ch=x.G}var $m={h:N,x:W,v:Ie,u:De,B:ge,e:vl,g:$,a:oe,f:$e,z:vt,n:wt,c:zt,t:sn,b:Je,i:on,d:yt,A:Ot,q:wm,w:Rm,p:Cm,C:Pm,l:Nm,m:Qe,r:Fm,o:Om,k:Bm,s:zm,j:Vm,y:Wm};function qm(){Z();function x(){t.calledRun=!0,!M&&(le(),p?.(t),t.onRuntimeInitialized?.(),ee())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),x()},1)):x()}var Us;Us=await lt(),qm();function Ym(x){if(x.length%2!=0)throw"MakePath64: intArray.length must be even";const v=x.length/2,I=new BigInt64Array(v*3);for(let Q=0,Se=0;Q<x.length;Q+=2,Se+=3){const Ee=x[Q],Ae=x[Q+1];I[Se]=typeof Ee=="bigint"?Ee:BigInt(Ee),I[Se+1]=typeof Ae=="bigint"?Ae:BigInt(Ae)}let V=new t.Path64;return V.assign(I),V}t.MakePath64=Ym;function Km(x){if(x.length%3!=0)throw"MakePathZ64: intArray.length must be multiple of 3";const v=new BigInt64Array(x.length);for(let V=0;V<x.length;V++){const Q=x[V];v[V]=typeof Q=="bigint"?Q:BigInt(Q)}let I=new t.Path64;return I.assign(v),I}t.MakePathZ64=Km;function Zm(x){if(x.length%2!=0)throw"MakePathD: intArray.length must be even";const v=x.length/2,I=new Float64Array(v*3);for(let Q=0,Se=0;Q<x.length;Q+=2,Se+=3)I[Se]=x[Q],I[Se+1]=x[Q+1];let V=new t.PathD;return V.assign(I),V}t.MakePathD=Zm;function Jm(x){if(x.length%3!=0)throw"MakePathZD: intArray.length must be multiple of 3";const v=x instanceof Float64Array?x:Float64Array.from(x);let I=new t.PathD;return I.assign(v),I}t.MakePathZD=Jm;function uh(x){const v=x.view(),I=new BigInt64Array(v.length);for(let Q=0;Q<v.length;Q++)I[Q]=BigInt(Math.round(v[Q]));let V=new t.Path64;return V.assign(I),V}t.PathDToPath64=uh;function hh(x){const v=x.view(),I=new Float64Array(v.length);for(let Q=0;Q<v.length;Q++)I[Q]=Number(v[Q]);let V=new t.PathD;return V.assign(I),V}t.Path64ToPathD=hh;function jm(x){let v=new t.PathsD;for(let I=0;I<x.size();I++){const V=x.get(I);let Q=hh(V);v.push_back(Q),Q.delete(),V.delete()}return v}t.Paths64ToPathsD=jm;function Qm(x){let v=new t.Paths64;for(let I=0;I<x.size();I++){const V=x.get(I);let Q=uh(V);v.push_back(Q),Q.delete(),V.delete()}return v}return t.PathsDToPaths64=Qm,ne?e=t:e=new Promise((x,v)=>{p=x,T=v}),e}let Ul=null;function Dv(){return Ul||(Ul=Lv()),Ul}function Iv(n,e){const t=[];for(const i of e)t.push(i.x,i.y);return n.MakePathD(t)}function tf(n,e){const t=n.PathsD,i=new t;for(const r of e)r.length>=3&&i.push_back(Iv(n,r));return i}function Uv(n){const e=n.size(),t=[];for(let i=0;i<e;i++){const r=n.get(i);t.push({x:r.x,y:r.y})}return t}function Nv(n){const e=[],t=n.size();for(let i=0;i<t;i++)e.push(Uv(n.get(i)));return e}async function nf(n,e){const t=await Dv(),i=tf(t,n),r=tf(t,e),a=t.IntersectD(i,r,t.FillRule.NonZero,6),o=Math.abs(t.AreaPathsD(a));return{regions:Nv(a),area:o,intersects:o>1e-8}}function wp(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0).toString(16).padStart(8,"0")}function Rp(n){const e=JSON.stringify(["spur-gear-lab/case/v1",n.z1,n.z2,gi(n.module,9),gi(n.alphaDeg,9),gi(n.faceWidth,9),gi(n.centerDistance,9)]);return wp(e)}function Fv(n,e){const t=i=>{const r=i.outline.length,s=48,a=[];for(let o=0;o<s;o++){const l=i.outline[Math.floor(o*r/s)%r];a.push(`${gi(l.x,5)},${gi(l.y,5)}`)}return[i.input.z,gi(i.pitchR,8),gi(i.baseR,8),gi(i.addendumR,8),gi(i.dedendumR,8),i.outline.length,a.join("|")]};return wp(JSON.stringify(["spur-gear-lab/outline/v1",t(n),t(e)]))}function gi(n,e){const t=10**e;return Math.round(n*t)/t}function Ov(n,e){for(n=Math.abs(Math.round(n)),e=Math.abs(Math.round(e));e;)[n,e]=[e,n%e];return n}function Bv(n,e){return Math.abs(Math.round(n)*Math.round(e))/Ov(n,e)}function Ic(n,e){const t=n%e;return t<0?t+e:t}function $a(n,e){return Math.round(Ic(n,e))%e}function zv(n){const e=Math.sin(n.alphaPrime),t=Math.cos(n.alphaPrime),i=r=>(r.x-n.pitchPoint.x)*e+(r.y-n.pitchPoint.y)*t;return{sEnter:i(n.actionLine.p0),sExit:i(n.actionLine.p1)}}function rf(n){const{g1:e,g2:t,mesh:i,params:r}=n,s=Bv(e.input.z,t.input.z),{sEnter:a,sExit:o}=zv(i),l=e.basePitch,c=Math.max(2,Math.round(r.stepsPerPitch)),u=s*c+1,f=n.now??Date.now();return{trajId:n.trajId,caseId:n.caseId,createdAt:f,updatedAt:f,params:{...r},signature:{...n.signature},paramFingerprint:Rp(n.signature),outlineFingerprint:Fv(e,t),periodPairs:s,periodPhi1:-s*2*Math.PI/e.input.z,periodPhi2:s*2*Math.PI/t.input.z,basePitch:l,sEnter:a,sExit:o,pathOfContact:i.pathOfContact,contactRatio:i.contactRatio,stepsPerPitch:c,frameCount:u,framesDone:0,status:"running",interferenceFrames:0}}function Vv(n,e,t){const{phi1:i,phi2:r}=Dc(t,n,e,0);return{phi10:i,phi20:r}}function Hv(n,e,t,i,r,s){const{phi10:a,phi20:o}=Vv(t,i,r),l=a-e/t.baseR,c=o+e/i.baseR,u=s.basePitch,{sEnter:f,sExit:h}=s,d=Math.floor((e+f)/u)-1,_=Math.ceil((e+h)/u)+1,M=[];for(let p=d;p<=_;p++){const T=p*u-e;T<f-1e-9||T>h+1e-9||M.push({pairId:p,tooth1:$a(p,t.input.z),tooth2:$a(-p,i.input.z),s:T,point:Qh(r,T)})}M.sort((p,T)=>p.s-T.s);let m=null;for(const p of M)(!m||Math.abs(p.s)<Math.abs(m.s))&&(m=p);if(!m){const p=Math.round(e/u);m={pairId:p,tooth1:$a(p,t.input.z),tooth2:$a(-p,i.input.z),s:p*u-e,point:Qh(r,p*u-e)}}return{index:n,q:e,phi1:l,phi2:c,phi1Mod:Ic(l,2*Math.PI),phi2Mod:Ic(c,2*Math.PI),primary:m,activePairs:M,contactS:m.s,contactPoint:m.point}}function kv(n,e=64){return n.map(t=>{if(t.length<=e)return t;const i=t.length/e,r=[];for(let s=0;s<e;s++)r.push(t[Math.floor(s*i)]);return r})}function Gv(n){const{g1:e,g2:t,mesh:i,meta:r,intersector:s}=n,a=n.chunkSize,o=n.yieldMs,l=n.areaEps??1e-8,c=new Array(r.frameCount);if(n.existingFrames)for(const U of n.existingFrames)U&&U.index>=0&&U.index<r.frameCount&&(c[U.index]=U);let u=!1,f=!1,h=!1;const d=new Set,_=new Set;let M;const m=new Promise(U=>M=U),p=U=>{for(const S of _)S(U)},T=U=>new Promise(S=>setTimeout(S,U)),L=(U,S)=>{h||(h=!0,r.status=U,r.updatedAt=Date.now(),r.framesDone=y(),r.interferenceFrames=A(),p(S),M(U))},y=()=>{let U=0;for(const S of c)S&&U++;return U},A=()=>{let U=0;for(const S of c)S?.interferes&&U++;return U};async function R(){try{let U=0;for(let S=0;S<r.frameCount;S++){if(f){L("expired",{type:"expired"});return}if(u){L("cancelled",{type:"cancelled"});return}if(c[S])continue;const D=S*r.periodPairs*r.basePitch/(r.frameCount-1),B=Hv(S,D,e,t,i,r),G=[ko(e.outline,0,0,B.phi1)],K=[ko(t.outline,i.a,0,B.phi2)];let ne;try{ne=await s(G,K)}catch(Z){if(f){L("expired",{type:"expired"});return}if(u){L("cancelled",{type:"cancelled"});return}throw Z}if(f){L("expired",{type:"expired"});return}if(u){L("cancelled",{type:"cancelled"});return}const z={...B,interferenceArea:ne.area,interferes:ne.intersects||ne.area>l,regions:r.params.includeRegions?kv(ne.regions):[]};c[S]=z;for(const Z of d)Z(S,z);U++,U>=a&&(U=0,r.framesDone=y(),r.interferenceFrames=A(),p({type:"progress",framesDone:r.framesDone}),await T(o))}r.framesDone=y(),r.interferenceFrames=A(),L("completed",{type:"completed"})}catch(U){r.error=U?.message||String(U),L("failed",{type:"failed",error:r.error})}}return R(),{meta:r,frames:c,cancel(){u=!0},expire(){f=!0,u=!0},onFrame(U){d.add(U)},onEvent(U){_.add(U)},get done(){return m}}}const sf=1,Wv="spur-gear-lab",Xv=2,Uc="cases",_a="trajectories";let qa=null;function Cp(){return qa||(qa=new Promise((n,e)=>{const t=indexedDB.open(Wv,Xv);t.onupgradeneeded=()=>{const i=t.result;if(i.objectStoreNames.contains(Uc)||i.createObjectStore(Uc,{keyPath:"id"}).createIndex("updatedAt","updatedAt"),!i.objectStoreNames.contains(_a)){const r=i.createObjectStore(_a,{keyPath:"trajId"});r.createIndex("caseId","caseId"),r.createIndex("updatedAt","updatedAt")}},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)}),qa)}function ul(n,e,t=Uc){return Cp().then(i=>new Promise((r,s)=>{const a=i.transaction(t,n),o=e(a.objectStore(t));o.onsuccess=()=>r(o.result),o.onerror=()=>s(o.error)}))}async function af(n){await ul("readwrite",e=>e.put({...n,updatedAt:Date.now()}))}async function $v(n){await ul("readwrite",e=>e.delete(n))}async function qv(){return[...await ul("readonly",e=>e.getAll())].sort((e,t)=>t.updatedAt-e.updatedAt)}function Nl(){return`case-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function Yv(n){return JSON.stringify(n,null,2)}function Kv(n){const e=JSON.parse(n);if(!e||e.schemaVersion!==sf)throw new Error(`不支持的案例版本（需要 schemaVersion=${sf}）`);if(!e.gear1||!e.gear2)throw new Error("案例缺少齿轮参数");for(const t of[e.gear1,e.gear2])if(!(t.z>=4)||!(t.module>0)||!(t.alphaDeg>0))throw new Error("案例参数不合法（z≥4, m>0, α>0）");return e}function Zv(n){const e=new Blob([Yv(n)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t;const r=(n.name||"gear-case").replace(/[^\w一-龥-]+/g,"_");i.download=`${r}.json`,i.click(),URL.revokeObjectURL(t)}function Jv(n){const e=[],t=[];for(let i=0;i<n.length;i++){const r=n[i];r&&(e.push(r),t.push(i))}return{frames:e,frameIndices:t}}function jv(n,e,t){const i=new Array(n);if(t&&t.length===e.length)for(let r=0;r<e.length;r++){const s=t[r];s>=0&&s<n&&(i[s]=e[r])}else for(const r of e)r.index>=0&&r.index<n&&(i[r.index]=r);return i}function va(n,e){return ul(n,e,_a)}async function xa(n){const e={...n,updatedAt:Date.now()};await va("readwrite",t=>t.put(e))}async function of(n){return va("readonly",e=>e.get(n))}async function yr(n){if(n!=null){const t=await Cp();return[...await new Promise((r,s)=>{const o=t.transaction(_a,"readonly").objectStore(_a).index("caseId").getAll(n);o.onsuccess=()=>r(o.result),o.onerror=()=>s(o.error)})].sort((r,s)=>s.updatedAt-r.updatedAt)}return n===null?(await va("readonly",i=>i.getAll())).filter(i=>!i.caseId).sort((i,r)=>r.updatedAt-i.updatedAt):[...await va("readonly",t=>t.getAll())].sort((t,i)=>i.updatedAt-t.updatedAt)}async function Pp(n){await va("readwrite",e=>e.delete(n))}async function Qv(n){const e=await yr(n);for(const t of e)await Pp(t.trajId);return e.length}async function e0(n,e){const t=await yr(n);let i=0;for(const r of t)e.includes(r.paramFingerprint)||r.status!=="expired"&&(await xa({...r,status:"expired"}),i++);return i}async function t0(){const n=await yr();let e=0;for(const t of n)t.status==="running"&&(await xa({...t,status:"cancelled"}),e++);return e}function n0(){return`traj-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}async function i0(n,e,t){if(!Array.isArray(e))return 0;let i=0;for(const r of e){const s=s0(r);s&&s.paramFingerprint===t&&(s.framesDone!==s.frameCount||s.status!=="completed"||s.frames.length===s.frameCount&&(s.frameIndices&&s.frameIndices.length!==s.frameCount||(s.caseId=n,await xa(s),i++)))}return i}async function r0(n){return(await yr(n)).filter(t=>t.status==="completed"&&t.framesDone===t.frameCount)}function s0(n){if(!n||typeof n!="object")return null;const e=n;return typeof e.trajId!="string"||typeof e.paramFingerprint!="string"||typeof e.outlineFingerprint!="string"||!Array.isArray(e.frames)||typeof e.frameCount!="number"||typeof e.framesDone!="number"||e.frameIndices!==void 0&&!Array.isArray(e.frameIndices)?null:n}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xu="186",Zi={ROTATE:0,DOLLY:1,PAN:2},ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},a0=0,lf=1,o0=2,Ro=1,l0=2,Ks=3,Xr=0,Fn=1,ni=2,Ji=0,sa=1,cf=2,uf=3,hf=4,c0=5,fs=100,u0=101,h0=102,f0=103,d0=104,p0=200,m0=201,g0=202,_0=203,Lp=204,Dp=205,v0=206,x0=207,S0=208,y0=209,M0=210,b0=211,E0=212,T0=213,A0=214,Nc=0,Fc=1,Oc=2,Sa=3,Bc=4,zc=5,Vc=6,Hc=7,Ip=0,w0=1,R0=2,bi=0,Up=1,Np=2,Fp=3,Op=4,Bp=5,zp=6,Vp=7,Hp=300,$r=301,bs=302,Fl=303,Ol=304,hl=306,kc=1e3,qi=1001,Gc=1002,un=1003,C0=1004,Ya=1005,Sn=1006,Bl=1007,Vr=1008,zn=1009,kp=1010,Gp=1011,ya=1012,$u=1013,Ai=1014,Si=1015,wi=1016,qu=1017,Yu=1018,Ma=1020,Wp=35902,Xp=35899,$p=1021,qp=1022,ii=1023,sr=1026,Hr=1027,Yp=1028,Ku=1029,qr=1030,Zu=1031,Ju=1033,Co=33776,Po=33777,Lo=33778,Do=33779,Wc=35840,Xc=35841,$c=35842,qc=35843,Yc=36196,Kc=37492,Zc=37496,Jc=37488,jc=37489,Go=37490,Qc=37491,eu=37808,tu=37809,nu=37810,iu=37811,ru=37812,su=37813,au=37814,ou=37815,lu=37816,cu=37817,uu=37818,hu=37819,fu=37820,du=37821,pu=36492,mu=36494,gu=36495,_u=36283,vu=36284,Wo=36285,xu=36286,P0=3200,Su=0,L0=1,Sr="",Wn="srgb",Xo="srgb-linear",$o="linear",Nt="srgb",zl=7680,D0=519,I0=512,U0=513,N0=514,ju=515,F0=516,O0=517,Qu=518,B0=519,z0=35044,ff="300 es",yi=2e3,ba=2001;function V0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function H0(){const n=qo("canvas");return n.style.display="block",n}const df={};function pf(...n){const e="THREE."+n.shift();console.log(e,...n)}function Kp(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ut(...n){n=Kp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Et(...n){n=Kp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function xs(...n){const e=n.join(" ");e in df||(df[e]=!0,ut(...n))}function k0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const G0={[Nc]:Fc,[Oc]:Vc,[Bc]:Hc,[Sa]:zc,[Fc]:Nc,[Vc]:Oc,[Hc]:Bc,[zc]:Sa};class wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],aa=Math.PI/180,yu=180/Math.PI;function As(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function xt(n,e,t){return Math.max(e,Math.min(t,n))}function W0(n,e){return(n%e+e)%e}function Vl(n,e,t){return(1-t)*n+t*e}function Bs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ln(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const X0={DEG2RAD:aa};class Fe{static{Fe.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],d=s[a+1],_=s[a+2],M=s[a+3];if(f!==M||l!==h||c!==d||u!==_){let m=l*h+c*d+u*_+f*M;m<0&&(h=-h,d=-d,_=-_,M=-M,m=-m);let p=1-o;if(m<.9995){const T=Math.acos(m),L=Math.sin(T);p=Math.sin(p*T)/L,o=Math.sin(o*T)/L,l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+M*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+M*o;const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-o*d,e[t+2]=c*_+u*d+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{static{Y.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hl.copy(this).projectOnVector(e),this.sub(Hl)}reflect(e){return this.sub(Hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hl=new Y,mf=new Tr;class pt{static{pt.prototype.isMatrix3=!0}constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],M=r[0],m=r[3],p=r[6],T=r[1],L=r[4],y=r[7],A=r[2],R=r[5],U=r[8];return s[0]=a*M+o*T+l*A,s[3]=a*m+o*L+l*R,s[6]=a*p+o*y+l*U,s[1]=c*M+u*T+f*A,s[4]=c*m+u*L+f*R,s[7]=c*p+u*y+f*U,s[2]=h*M+d*T+_*A,s[5]=h*m+d*L+_*R,s[8]=h*p+d*y+_*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,_=t*f+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=f*M,e[1]=(r*c-u*i)*M,e[2]=(o*i-r*a)*M,e[3]=h*M,e[4]=(u*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=d*M,e[7]=(i*l-c*t)*M,e[8]=(a*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kl.makeScale(e,t)),this}rotate(e){return xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kl.makeRotation(-e)),this}translate(e,t){return xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kl=new pt,gf=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_f=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $0(){const n={enabled:!0,workingColorSpace:Xo,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Nt&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Nt&&(r.r=Ss(r.r),r.g=Ss(r.g),r.b=Ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Sr?$o:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xo]:{primaries:e,whitePoint:i,transfer:$o,toXYZ:gf,fromXYZ:_f,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:i,transfer:Nt,toXYZ:gf,fromXYZ:_f,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),n}const Mt=$0();function ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ss(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let jr;class q0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{jr===void 0&&(jr=qo("canvas")),jr.width=e.width,jr.height=e.height;const r=jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=jr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ji(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ji(t[i]/255)*255):t[i]=ji(t[i]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Y0=0;class eh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=As(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Gl(r[a].image)):s.push(Gl(r[a]))}else s=Gl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Gl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?q0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let K0=0;const Wl=new Y;class wn extends wr{constructor(e=wn.DEFAULT_IMAGE,t=wn.DEFAULT_MAPPING,i=qi,r=qi,s=Sn,a=Vr,o=ii,l=zn,c=wn.DEFAULT_ANISOTROPY,u=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=As(),this.name="",this.source=new eh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wl).x}get height(){return this.source.getSize(Wl).y}get depth(){return this.source.getSize(Wl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kc:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case Gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kc:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case Gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Hp;wn.DEFAULT_ANISOTROPY=1;class Xt{static{Xt.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(c+1)/2,y=(d+1)/2,A=(p+1)/2,R=(u+h)/4,U=(f+M)/4,S=(_+m)/4;return L>y&&L>A?L<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(L),r=R/i,s=U/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=S/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=U/s,r=S/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-_)*(m-_)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(f-M)/T,this.z=(h-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Z0 extends wr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new wn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new eh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Z0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Zp extends wn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class J0 extends wn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class kt{static{kt.prototype.isMatrix4=!0}constructor(e,t,i,r,s,a,o,l,c,u,f,h,d,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,d,_,M,m)}set(e,t,i,r,s,a,o,l,c,u,f,h,d,_,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),a=1/Qr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,_=o*u,M=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-M*c,t[9]=-o*l,t[2]=M-h*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,M=c*f;t[0]=h+M*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=M+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,M=c*f;t[0]=h-M*o,t[4]=-a*f,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,_=o*u,M=o*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+M,t[1]=l*f,t[5]=M*c+h,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=M-h*f,t[8]=_*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-M*f}else if(e.order==="XZY"){const h=a*l,d=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+M,t[5]=a*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=o*u,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j0,e,Q0)}lookAt(e,t,i){const r=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),hr.crossVectors(i,On),hr.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),hr.crossVectors(i,On)),hr.normalize(),Ka.crossVectors(On,hr),r[0]=hr.x,r[4]=Ka.x,r[8]=On.x,r[1]=hr.y,r[5]=Ka.y,r[9]=On.y,r[2]=hr.z,r[6]=Ka.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],M=i[6],m=i[10],p=i[14],T=i[3],L=i[7],y=i[11],A=i[15],R=r[0],U=r[4],S=r[8],D=r[12],B=r[1],G=r[5],K=r[9],ne=r[13],z=r[2],Z=r[6],le=r[10],ee=r[14],de=r[3],ue=r[7],ve=r[11],_e=r[15];return s[0]=a*R+o*B+l*z+c*de,s[4]=a*U+o*G+l*Z+c*ue,s[8]=a*S+o*K+l*le+c*ve,s[12]=a*D+o*ne+l*ee+c*_e,s[1]=u*R+f*B+h*z+d*de,s[5]=u*U+f*G+h*Z+d*ue,s[9]=u*S+f*K+h*le+d*ve,s[13]=u*D+f*ne+h*ee+d*_e,s[2]=_*R+M*B+m*z+p*de,s[6]=_*U+M*G+m*Z+p*ue,s[10]=_*S+M*K+m*le+p*ve,s[14]=_*D+M*ne+m*ee+p*_e,s[3]=T*R+L*B+y*z+A*de,s[7]=T*U+L*G+y*Z+A*ue,s[11]=T*S+L*K+y*le+A*ve,s[15]=T*D+L*ne+y*ee+A*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],M=e[7],m=e[11],p=e[15],T=l*d-c*h,L=o*d-c*f,y=o*h-l*f,A=a*d-c*u,R=a*h-l*u,U=a*f-o*u;return t*(M*T-m*L+p*y)-i*(_*T-m*A+p*R)+r*(_*L-M*A+p*U)-s*(_*y-M*R+m*U)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],M=e[13],m=e[14],p=e[15],T=t*o-i*a,L=t*l-r*a,y=t*c-s*a,A=i*l-r*o,R=i*c-s*o,U=r*c-s*l,S=u*M-f*_,D=u*m-h*_,B=u*p-d*_,G=f*m-h*M,K=f*p-d*M,ne=h*p-d*m,z=T*ne-L*K+y*G+A*B-R*D+U*S;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/z;return e[0]=(o*ne-l*K+c*G)*Z,e[1]=(r*K-i*ne-s*G)*Z,e[2]=(M*U-m*R+p*A)*Z,e[3]=(h*R-f*U-d*A)*Z,e[4]=(l*B-a*ne-c*D)*Z,e[5]=(t*ne-r*B+s*D)*Z,e[6]=(m*y-_*U-p*L)*Z,e[7]=(u*U-h*y+d*L)*Z,e[8]=(a*K-o*B+c*S)*Z,e[9]=(i*B-t*K-s*S)*Z,e[10]=(_*R-M*y+p*T)*Z,e[11]=(f*y-u*R-d*T)*Z,e[12]=(o*D-a*G-l*S)*Z,e[13]=(t*G-i*D+r*S)*Z,e[14]=(M*L-_*A-m*T)*Z,e[15]=(u*A-f*L+h*T)*Z,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,_=s*f,M=a*u,m=a*f,p=o*f,T=l*c,L=l*u,y=l*f,A=i.x,R=i.y,U=i.z;return r[0]=(1-(M+p))*A,r[1]=(d+y)*A,r[2]=(_-L)*A,r[3]=0,r[4]=(d-y)*R,r[5]=(1-(h+p))*R,r[6]=(m+T)*R,r[7]=0,r[8]=(_+L)*U,r[9]=(m-T)*U,r[10]=(1-(h+M))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Qr.set(r[0],r[1],r[2]).length();const o=Qr.set(r[4],r[5],r[6]).length(),l=Qr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),jn.copy(this);const c=1/a,u=1/o,f=1/l;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=f,jn.elements[9]*=f,jn.elements[10]*=f,t.setFromRotationMatrix(jn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=yi,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let _,M;if(l)_=s/(a-s),M=a*s/(a-s);else if(o===yi)_=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===ba)_=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=yi,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),d=-(i+r)/(i-r);let _,M;if(l)_=1/(a-s),M=a/(a-s);else if(o===yi)_=-2/(a-s),M=-(a+s)/(a-s);else if(o===ba)_=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qr=new Y,jn=new kt,j0=new Y(0,0,0),Q0=new Y(1,1,1),hr=new Y,Ka=new Y,On=new Y,vf=new kt,xf=new Tr;class Ar{constructor(e=0,t=0,i=0,r=Ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xf.setFromEuler(this),this.setFromQuaternion(xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ar.DEFAULT_ORDER="XYZ";class th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ex=0;const Sf=new Y,es=new Tr,Oi=new kt,Za=new Y,zs=new Y,tx=new Y,nx=new Tr,yf=new Y(1,0,0),Mf=new Y(0,1,0),bf=new Y(0,0,1),Ef={type:"added"},ix={type:"removed"},ts={type:"childadded",child:null},Xl={type:"childremoved",child:null};class hn extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new Y,t=new Ar,i=new Tr,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kt},normalMatrix:{value:new pt}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(yf,e)}rotateY(e){return this.rotateOnAxis(Mf,e)}rotateZ(e){return this.rotateOnAxis(bf,e)}translateOnAxis(e,t){return Sf.copy(e).applyQuaternion(this.quaternion),this.position.add(Sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yf,e)}translateY(e){return this.translateOnAxis(Mf,e)}translateZ(e){return this.translateOnAxis(bf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Za.copy(e):Za.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(zs,Za,this.up):Oi.lookAt(Za,zs,this.up),this.quaternion.setFromRotationMatrix(Oi),r&&(Oi.extractRotation(r.matrixWorld),es.setFromRotationMatrix(Oi),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ef),ts.child=e,this.dispatchEvent(ts),ts.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ix),Xl.child=e,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ef),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,tx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,nx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}hn.DEFAULT_UP=new Y(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class kr extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rx={type:"move"};class $l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,i),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new kr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function ql(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class bt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Mt.workingColorSpace){if(e=W0(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ql(a,s,e+1/3),this.g=ql(a,s,e),this.b=ql(a,s,e-1/3)}return Mt.colorSpaceToWorking(this,r),this}setStyle(e,t=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wn){const i=Jp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return Mt.workingToColorSpace(gn.copy(this),e),Math.round(xt(gn.r*255,0,255))*65536+Math.round(xt(gn.g*255,0,255))*256+Math.round(xt(gn.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(gn.copy(this),t);const i=gn.r,r=gn.g,s=gn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Wn){Mt.workingToColorSpace(gn.copy(this),e);const t=gn.r,i=gn.g,r=gn.b;return e!==Wn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+t,fr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fr),e.getHSL(Ja);const i=Vl(fr.h,Ja.h,t),r=Vl(fr.s,Ja.s,t),s=Vl(fr.l,Ja.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new bt;bt.NAMES=Jp;class sx extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ar,this.environmentIntensity=1,this.environmentRotation=new Ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Qn=new Y,Bi=new Y,Yl=new Y,zi=new Y,ns=new Y,is=new Y,Tf=new Y,Kl=new Y,Zl=new Y,Jl=new Y,jl=new Xt,Ql=new Xt,ec=new Xt;class Xn{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qn.subVectors(e,t),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qn.subVectors(r,t),Bi.subVectors(i,t),Yl.subVectors(e,t);const a=Qn.dot(Qn),o=Qn.dot(Bi),l=Qn.dot(Yl),c=Bi.dot(Bi),u=Bi.dot(Yl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zi.x),l.addScaledVector(a,zi.y),l.addScaledVector(o,zi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return jl.setScalar(0),Ql.setScalar(0),ec.setScalar(0),jl.fromBufferAttribute(e,t),Ql.fromBufferAttribute(e,i),ec.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(jl,s.x),a.addScaledVector(Ql,s.y),a.addScaledVector(ec,s.z),a}static isFrontFacing(e,t,i,r){return Qn.subVectors(i,t),Bi.subVectors(e,t),Qn.cross(Bi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),Qn.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ns.subVectors(r,i),is.subVectors(s,i),Kl.subVectors(e,i);const l=ns.dot(Kl),c=is.dot(Kl);if(l<=0&&c<=0)return t.copy(i);Zl.subVectors(e,r);const u=ns.dot(Zl),f=is.dot(Zl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ns,a);Jl.subVectors(e,s);const d=ns.dot(Jl),_=is.dot(Jl);if(_>=0&&d<=_)return t.copy(s);const M=d*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(is,o);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Tf.subVectors(s,r),o=(f-u)/(f-u+(d-_)),t.copy(r).addScaledVector(Tf,o);const p=1/(m+M+h);return a=M*p,o=h*p,t.copy(i).addScaledVector(ns,a).addScaledVector(is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class La{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ei):ei.fromBufferAttribute(s,a),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Qa.subVectors(this.max,Vs),rs.subVectors(e.a,Vs),ss.subVectors(e.b,Vs),as.subVectors(e.c,Vs),dr.subVectors(ss,rs),pr.subVectors(as,ss),Dr.subVectors(rs,as);let t=[0,-dr.z,dr.y,0,-pr.z,pr.y,0,-Dr.z,Dr.y,dr.z,0,-dr.x,pr.z,0,-pr.x,Dr.z,0,-Dr.x,-dr.y,dr.x,0,-pr.y,pr.x,0,-Dr.y,Dr.x,0];return!tc(t,rs,ss,as,Qa)||(t=[1,0,0,0,1,0,0,0,1],!tc(t,rs,ss,as,Qa))?!1:(eo.crossVectors(dr,pr),t=[eo.x,eo.y,eo.z],tc(t,rs,ss,as,Qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ei=new Y,ja=new La,rs=new Y,ss=new Y,as=new Y,dr=new Y,pr=new Y,Dr=new Y,Vs=new Y,Qa=new Y,eo=new Y,Ir=new Y;function tc(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ir.fromArray(n,s);const o=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),l=e.dot(Ir),c=t.dot(Ir),u=i.dot(Ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const jt=new Y,to=new Fe;let ax=0;class Qi extends wr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ax++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=z0,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),i=Ln(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),i=Ln(i,this.array),r=Ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),i=Ln(i,this.array),r=Ln(r,this.array),s=Ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class jp extends Qi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qp extends Qi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qt extends Qi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const ox=new La,Hs=new Y,nc=new Y;class fl{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ox.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const t=Hs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Hs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(nc)),this.expandByPoint(Hs.copy(e.center).sub(nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lx=0;const kn=new kt,ic=new hn,os=new Y,Bn=new La,ks=new La,an=new Y;class fn extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(V0(e)?Qp:jp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new pt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return ic.lookAt(e),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new La);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Bn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Bn.min,ks.min),Bn.expandByPoint(an),an.addVectors(Bn.max,ks.max),Bn.expandByPoint(an)):(Bn.expandByPoint(ks.min),Bn.expandByPoint(ks.max))}Bn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)an.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(an));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)an.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(e,c),an.add(os)),r=Math.max(r,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Qi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new Y,l[S]=new Y;const c=new Y,u=new Y,f=new Y,h=new Fe,d=new Fe,_=new Fe,M=new Y,m=new Y;function p(S,D,B){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,D),f.fromBufferAttribute(i,B),h.fromBufferAttribute(s,S),d.fromBufferAttribute(s,D),_.fromBufferAttribute(s,B),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const G=1/(d.x*_.y-_.x*d.y);isFinite(G)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(G),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(G),o[S].add(M),o[D].add(M),o[B].add(M),l[S].add(m),l[D].add(m),l[B].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let S=0,D=T.length;S<D;++S){const B=T[S],G=B.start,K=B.count;for(let ne=G,z=G+K;ne<z;ne+=3)p(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const L=new Y,y=new Y,A=new Y,R=new Y;function U(S){A.fromBufferAttribute(r,S),R.copy(A);const D=o[S];L.copy(D),L.sub(A.multiplyScalar(A.dot(D))).normalize(),y.crossVectors(R,D);const G=y.dot(l[S])<0?-1:1;a.setXYZW(S,L.x,L.y,L.z,G)}for(let S=0,D=T.length;S<D;++S){const B=T[S],G=B.start,K=B.count;for(let ne=G,z=G+K;ne<z;ne+=3)U(e.getX(ne+0)),U(e.getX(ne+1)),U(e.getX(ne+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Qi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new Y,s=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),M=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new Qi(h,u,f)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rc=new Y,cx=new Y,ux=new pt;class Wi{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=rc.subVectors(i,t).cross(cx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(rc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ux.getNormalMatrix(e),r=this.coplanarPoint(rc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let hx=0;class ws extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=As(),this.name="",this.type="Material",this.blending=sa,this.side=Xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lp,this.blendDst=Dp,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zl,this.stencilZFail=zl,this.stencilZPass=zl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Wi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Fe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hi=new Y,sc=new Y,no=new Y,io=new Y;class dl{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){sc.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),io.copy(this.origin).sub(sc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(no),o=io.dot(this.direction),l=-io.dot(no),c=io.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const M=1/u;f*=M,h*=M,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(sc).addScaledVector(no,h),d}intersectSphere(e,t){if(e.radius<0)return null;Hi.subVectors(e.center,this.origin);const i=Hi.dot(this.direction),r=Hi.dot(Hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,_=t.x-a.x,M=t.y-a.y,m=t.z-a.z,p=i.x-a.x,T=i.y-a.y,L=i.z-a.z,y=Math.abs(l),A=Math.abs(c),R=Math.abs(u);let U,S,D,B,G,K,ne,z,Z,le,ee,de;if(y>=A&&y>=R?(D=l,K=f,Z=_,de=p,l>=0?(U=c,S=u,B=h,G=d,ne=M,z=m,le=T,ee=L):(U=u,S=c,B=d,G=h,ne=m,z=M,le=L,ee=T)):A>=R?(D=c,K=h,Z=M,de=T,c>=0?(U=u,S=l,B=d,G=f,ne=m,z=_,le=L,ee=p):(U=l,S=u,B=f,G=d,ne=_,z=m,le=p,ee=L)):(D=u,K=d,Z=m,de=L,u>=0?(U=l,S=c,B=f,G=h,ne=_,z=M,le=p,ee=T):(U=c,S=l,B=h,G=f,ne=M,z=_,le=T,ee=p)),D===0)return null;const ue=U/D,ve=S/D,_e=1/D,Pe=B-ue*K,Xe=G-ve*K,rt=ne-ue*Z,ot=z-ve*Z,lt=le-ue*de,me=ee-ve*de,ce=lt*ot-me*rt,we=Pe*me-Xe*lt,Ke=rt*Xe-ot*Pe;if(r){if(ce<0||we<0||Ke<0)return null}else if((ce<0||we<0||Ke<0)&&(ce>0||we>0||Ke>0))return null;const Oe=ce+we+Ke;if(Oe===0)return null;const C=_e*(ce*K+we*Z+Ke*de);return(Oe>0?C<0:C>0)?null:this.at(C/Oe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vr extends ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ar,this.combine=Ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Af=new kt,Ur=new dl,ro=new fl,wf=new Y,so=new Y,ao=new Y,oo=new Y,ac=new Y,lo=new Y,Rf=new Y,co=new Y;class vn extends hn{constructor(e=new fn,t=new vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){lo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(ac.fromBufferAttribute(f,e),a?lo.addScaledVector(ac,u):lo.addScaledVector(ac.sub(t),u))}t.add(lo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(s),Ur.copy(e.ray).recast(e.near),!(ro.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(ro,wf)===null||Ur.origin.distanceToSquared(wf)>(e.far-e.near)**2))&&(Af.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(Af),!(i.boundingBox!==null&&Ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ur)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){const m=h[_],p=a[m.materialIndex],T=Math.max(m.start,d.start),L=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=T,A=L;y<A;y+=3){const R=o.getX(y),U=o.getX(y+1),S=o.getX(y+2);r=uo(this,p,e,i,c,u,f,R,U,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let m=_,p=M;m<p;m+=3){const T=o.getX(m),L=o.getX(m+1),y=o.getX(m+2);r=uo(this,a,e,i,c,u,f,T,L,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){const m=h[_],p=a[m.materialIndex],T=Math.max(m.start,d.start),L=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=T,A=L;y<A;y+=3){const R=y,U=y+1,S=y+2;r=uo(this,p,e,i,c,u,f,R,U,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=_,p=M;m<p;m+=3){const T=m,L=m+1,y=m+2;r=uo(this,a,e,i,c,u,f,T,L,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function fx(n,e,t,i,r,s,a,o){let l;if(e.side===Fn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Xr,o),l===null)return null;co.copy(o),co.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(co);return c<t.near||c>t.far?null:{distance:c,point:co.clone(),object:n}}function uo(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,so),n.getVertexPosition(l,ao),n.getVertexPosition(c,oo);const u=fx(n,e,t,i,so,ao,oo,Rf);if(u){const f=new Y;Xn.getBarycoord(Rf,so,ao,oo,f),r&&(u.uv=Xn.getInterpolatedAttribute(r,o,l,c,f,new Fe)),s&&(u.uv1=Xn.getInterpolatedAttribute(s,o,l,c,f,new Fe)),a&&(u.normal=Xn.getInterpolatedAttribute(a,o,l,c,f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new Y,materialIndex:0};Xn.getNormal(so,ao,oo,h.normal),u.face=h,u.barycoord=f}return u}class dx extends wn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=un,u=un,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nr=new fl,px=new Fe(.5,.5),ho=new Y;class nh{constructor(e=new Wi,t=new Wi,i=new Wi,r=new Wi,s=new Wi,a=new Wi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],_=s[8],M=s[9],m=s[10],p=s[11],T=s[12],L=s[13],y=s[14],A=s[15];if(r[0].setComponents(c-a,d-u,p-_,A-T).normalize(),r[1].setComponents(c+a,d+u,p+_,A+T).normalize(),r[2].setComponents(c+o,d+f,p+M,A+L).normalize(),r[3].setComponents(c-o,d-f,p-M,A-L).normalize(),i)r[4].setComponents(l,h,m,y).normalize(),r[5].setComponents(c-l,d-h,p-m,A-y).normalize();else if(r[4].setComponents(c-l,d-h,p-m,A-y).normalize(),t===yi)r[5].setComponents(c+l,d+h,p+m,A+y).normalize();else if(t===ba)r[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);const t=px.distanceTo(e.center);return Nr.radius=.7071067811865476+t,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ho.x=r.normal.x>0?e.max.x:e.min.x,ho.y=r.normal.y>0?e.max.y:e.min.y,ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zs extends ws{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yo=new Y,Ko=new Y,Cf=new kt,Gs=new dl,fo=new fl,oc=new Y,Pf=new Y;class Zo extends hn{constructor(e=new fn,t=new Zs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Yo.fromBufferAttribute(t,r-1),Ko.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Yo.distanceTo(Ko);e.setAttribute("lineDistance",new Qt(i,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(r),fo.radius+=s,e.ray.intersectsSphere(fo)===!1)return;Cf.copy(r).invert(),Gs.copy(e.ray).applyMatrix4(Cf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let M=d,m=_-1;M<m;M+=c){const p=u.getX(M),T=u.getX(M+1),L=po(this,e,Gs,l,p,T,M);L&&t.push(L)}if(this.isLineLoop){const M=u.getX(_-1),m=u.getX(d),p=po(this,e,Gs,l,M,m,_-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let M=d,m=_-1;M<m;M+=c){const p=po(this,e,Gs,l,M,M+1,M);p&&t.push(p)}if(this.isLineLoop){const M=po(this,e,Gs,l,_-1,d,_-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function po(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Yo.fromBufferAttribute(o,r),Ko.fromBufferAttribute(o,s),t.distanceSqToSegment(Yo,Ko,oc,Pf)>i)return;oc.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(oc);if(!(c<e.near||c>e.far))return{distance:c,point:Pf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Lf=new Y,Df=new Y;class mx extends Zo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Lf.fromBufferAttribute(t,r),Df.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Lf.distanceTo(Df);e.setAttribute("lineDistance",new Qt(i,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gx extends Zo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class em extends wn{constructor(e=[],t=$r,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ea extends wn{constructor(e,t,i=Ai,r,s,a,o=un,l=un,c,u=sr,f=1){if(u!==sr&&u!==Hr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new eh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class _x extends Ea{constructor(e,t=Ai,i=$r,r,s,a=un,o=un,l,c=sr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tm extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Da extends fn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function _(M,m,p,T,L,y,A,R,U,S,D){const B=y/U,G=A/S,K=y/2,ne=A/2,z=R/2,Z=U+1,le=S+1;let ee=0,de=0;const ue=new Y;for(let ve=0;ve<le;ve++){const _e=ve*G-ne;for(let Pe=0;Pe<Z;Pe++){const Xe=Pe*B-K;ue[M]=Xe*T,ue[m]=_e*L,ue[p]=z,c.push(ue.x,ue.y,ue.z),ue[M]=0,ue[m]=0,ue[p]=R>0?1:-1,u.push(ue.x,ue.y,ue.z),f.push(Pe/U),f.push(1-ve/S),ee+=1}}for(let ve=0;ve<S;ve++)for(let _e=0;_e<U;_e++){const Pe=h+_e+Z*ve,Xe=h+_e+Z*(ve+1),rt=h+(_e+1)+Z*(ve+1),ot=h+(_e+1)+Z*ve;l.push(Pe,Xe,ot),l.push(Xe,rt,ot),de+=6}o.addGroup(d,de,D),d+=de,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const mo=new Y,go=new Y,lc=new Y,_o=new Xn;class vx extends fn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(aa*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:M,b:m,c:p}=_o;if(M.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),_o.getNormal(lc),f[0]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let T=0;T<3;T++){const L=(T+1)%3,y=f[T],A=f[L],R=_o[u[T]],U=_o[u[L]],S=`${y}_${A}`,D=`${A}_${y}`;D in h&&h[D]?(lc.dot(h[D].normal)<=s&&(d.push(R.x,R.y,R.z),d.push(U.x,U.y,U.z)),h[D]=null):S in h||(h[S]={index0:c[T],index1:c[L],normal:lc.clone()})}}for(const _ in h)if(h[_]){const{index0:M,index1:m}=h[_];mo.fromBufferAttribute(o,M),go.fromBufferAttribute(o,m),d.push(mo.x,mo.y,mo.z),d.push(go.x,go.y,go.z)}this.setAttribute("position",new Qt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ci{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ut("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(a-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new Fe:new Y);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new Y,r=[],s=[],a=[],o=new Y,l=new kt;for(let d=0;d<=e;d++){const _=d/e;r[d]=this.getTangentAt(_,new Y)}s[0]=new Y,a[0]=new Y;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(xt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(xt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ih extends Ci{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Fe){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class xx extends ih{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function rh(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,f){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,r(a,o,h,d)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const If=new Y,Uf=new Y,cc=new rh,uc=new rh,hc=new rh;class Sx extends Ci{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new Y){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Uf.subVectors(r[0],r[1]).add(r[0]),c=Uf);const f=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(If.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=If),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);M<1e-4&&(M=1),_<1e-4&&(_=M),m<1e-4&&(m=M),cc.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,M,m),uc.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,M,m),hc.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,M,m)}else this.curveType==="catmullrom"&&(cc.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),uc.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),hc.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(cc.calc(l),uc.calc(l),hc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Y().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Nf(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function yx(n,e){const t=1-n;return t*t*e}function Mx(n,e){return 2*(1-n)*n*e}function bx(n,e){return n*n*e}function oa(n,e,t,i){return yx(n,e)+Mx(n,t)+bx(n,i)}function Ex(n,e){const t=1-n;return t*t*t*e}function Tx(n,e){const t=1-n;return 3*t*t*n*e}function Ax(n,e){return 3*(1-n)*n*n*e}function wx(n,e){return n*n*n*e}function la(n,e,t,i,r){return Ex(n,e)+Tx(n,t)+Ax(n,i)+wx(n,r)}class nm extends Ci{constructor(e=new Fe,t=new Fe,i=new Fe,r=new Fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Fe){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(la(e,r.x,s.x,a.x,o.x),la(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rx extends Ci{constructor(e=new Y,t=new Y,i=new Y,r=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Y){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(la(e,r.x,s.x,a.x,o.x),la(e,r.y,s.y,a.y,o.y),la(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class im extends Ci{constructor(e=new Fe,t=new Fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Fe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cx extends Ci{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rm extends Ci{constructor(e=new Fe,t=new Fe,i=new Fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Fe){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(oa(e,r.x,s.x,a.x),oa(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Px extends Ci{constructor(e=new Y,t=new Y,i=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Y){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(oa(e,r.x,s.x,a.x),oa(e,r.y,s.y,a.y),oa(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sm extends Ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Fe){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return i.set(Nf(o,l.x,c.x,u.x,f.x),Nf(o,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Fe().fromArray(r))}return this}}var Mu=Object.freeze({__proto__:null,ArcCurve:xx,CatmullRomCurve3:Sx,CubicBezierCurve:nm,CubicBezierCurve3:Rx,EllipseCurve:ih,LineCurve:im,LineCurve3:Cx,QuadraticBezierCurve:rm,QuadraticBezierCurve3:Px,SplineCurve:sm});class Lx extends Ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mu[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Mu[r.type]().fromJSON(r))}return this}}class Ff extends Lx{constructor(e){super(),this.type="Path",this.currentPoint=new Fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new im(this.currentPoint.clone(),new Fe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new rm(this.currentPoint.clone(),new Fe(e,t),new Fe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const o=new nm(this.currentPoint.clone(),new Fe(e,t),new Fe(i,r),new Fe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new sm(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){const c=new ih(e,t,i,r,s,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ca extends Ff{constructor(e){super(e),this.uuid=As(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Ff().fromJSON(r))}return this}}function Dx(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=am(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=Ox(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let u=o,f=l;for(let h=t;h<r;h+=t){const d=n[h],_=n[h+1];d<o&&(o=d),_<l&&(l=_),d>u&&(u=d),_>f&&(f=_)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return Ta(s,a,t,o,l,c,0),a}function am(n,e,t,i,r){let s;if(r===Yx(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=Of(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=Of(a/i|0,n[a],n[a+1],s);return s&&Es(s,s.next)&&(wa(s),s=s.next),s}function Yr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Es(t,t.next)||$t(t.prev,t,t.next)===0)){if(wa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ta(n,e,t,i,r,s,a){if(!n)return;!a&&s&&kx(n,i,r,s);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?Ux(n,i,r,s):Ix(n)){e.push(l.i,n.i,c.i),wa(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Nx(Yr(n),e),Ta(n,e,t,i,r,s,2)):a===2&&Fx(n,e,t,i,r,s):Ta(Yr(n),e,t,i,r,s,1);break}}}function Ix(n){const e=n.prev,t=n,i=n.next;if($t(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(r,s,a),f=Math.min(o,l,c),h=Math.max(r,s,a),d=Math.max(o,l,c);let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=d&&Js(r,o,s,l,a,c,_.x,_.y)&&$t(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Ux(n,e,t,i){const r=n.prev,s=n,a=n.next;if($t(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,f=s.y,h=a.y,d=Math.min(o,l,c),_=Math.min(u,f,h),M=Math.max(o,l,c),m=Math.max(u,f,h),p=bu(d,_,e,t,i),T=bu(M,m,e,t,i);let L=n.prevZ,y=n.nextZ;for(;L&&L.z>=p&&y&&y.z<=T;){if(L.x>=d&&L.x<=M&&L.y>=_&&L.y<=m&&L!==r&&L!==a&&Js(o,u,l,f,c,h,L.x,L.y)&&$t(L.prev,L,L.next)>=0||(L=L.prevZ,y.x>=d&&y.x<=M&&y.y>=_&&y.y<=m&&y!==r&&y!==a&&Js(o,u,l,f,c,h,y.x,y.y)&&$t(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;L&&L.z>=p;){if(L.x>=d&&L.x<=M&&L.y>=_&&L.y<=m&&L!==r&&L!==a&&Js(o,u,l,f,c,h,L.x,L.y)&&$t(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;y&&y.z<=T;){if(y.x>=d&&y.x<=M&&y.y>=_&&y.y<=m&&y!==r&&y!==a&&Js(o,u,l,f,c,h,y.x,y.y)&&$t(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Nx(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Es(i,r)&&lm(i,t,t.next,r)&&Aa(i,r)&&Aa(r,i)&&(e.push(i.i,t.i,r.i),wa(t),wa(t.next),t=n=r),t=t.next}while(t!==n);return Yr(t)}function Fx(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Xx(a,o)){let l=cm(a,o);a=Yr(a,a.next),l=Yr(l,l.next),Ta(a,e,t,i,r,s,0),Ta(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function Ox(n,e,t,i){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=am(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(Wx(c))}r.sort(Bx);for(let s=0;s<r.length;s++)t=zx(r[s],t);return t}function Bx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function zx(n,e){const t=Vx(n,e);if(!t)return e;const i=cm(t,n);return Yr(i,i.next),Yr(t,t.next)}function Vx(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,a;if(Es(n,t))return t;do{if(Es(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,a=t.x<t.next.x?t:t.next,f===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&om(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);Aa(t,n)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&Hx(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function Hx(n,e){return $t(n.prev,n,e.prev)<0&&$t(e.next,n,n.next)<0}function kx(n,e,t,i){let r=n;do r.z===0&&(r.z=bu(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Gx(r)}function Gx(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,t*=2}while(e>1);return n}function bu(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Wx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function om(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Js(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&om(n,e,t,i,r,s,a,o)}function Xx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!$x(n,e)&&(Aa(n,e)&&Aa(e,n)&&qx(n,e)&&($t(n.prev,n,e.prev)||$t(n,e.prev,e))||Es(n,e)&&$t(n.prev,n,n.next)>0&&$t(e.prev,e,e.next)>0)}function $t(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Es(n,e){return n.x===e.x&&n.y===e.y}function lm(n,e,t,i){const r=xo($t(n,e,t)),s=xo($t(n,e,i)),a=xo($t(t,i,n)),o=xo($t(t,i,e));return!!(r!==s&&a!==o||r===0&&vo(n,t,e)||s===0&&vo(n,i,e)||a===0&&vo(t,n,i)||o===0&&vo(t,e,i))}function vo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function xo(n){return n>0?1:n<0?-1:0}function $x(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&lm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Aa(n,e){return $t(n.prev,n,n.next)<0?$t(n,e,n.next)>=0&&$t(n,n.prev,e)>=0:$t(n,e,n.prev)<0||$t(n,n.next,e)<0}function qx(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function cm(n,e){const t=Eu(n.i,n.x,n.y),i=Eu(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Of(n,e,t,i){const r=Eu(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function wa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Eu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Yx(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class Kx{static triangulate(e,t,i=2){return Dx(e,t,i)}}class Yi{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Yi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Bf(e),zf(i,e);let a=e.length;t.forEach(Bf);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,zf(i,t[l]);const o=Kx.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Bf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function zf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class sh extends fn{constructor(e=new ca([new Fe(.5,.5),new Fe(-.5,.5),new Fe(-.5,-.5),new Fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Qt(r,3)),this.setAttribute("uv",new Qt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:Zx;let L,y=!1,A,R,U,S;if(p){L=p.getSpacedPoints(u),y=!0,h=!1;const N=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(u,N),R=new Y,U=new Y,S=new Y}h||(m=0,d=0,_=0,M=0);const D=o.extractPoints(c);let B=D.shape;const G=D.holes;if(!Yi.isClockWise(B)){B=B.reverse();for(let N=0,W=G.length;N<W;N++){const H=G[N];Yi.isClockWise(H)&&(G[N]=H.reverse())}}function ne(N){const H=10000000000000001e-36;let k=N[0];for(let te=1;te<=N.length;te++){const pe=te%N.length,he=N[pe],re=he.x-k.x,Me=he.y-k.y,P=re*re+Me*Me,Le=Math.max(Math.abs(he.x),Math.abs(he.y),Math.abs(k.x),Math.abs(k.y)),Ie=H*Le*Le;if(P<=Ie){N.splice(pe,1),te--;continue}k=he}}ne(B),G.forEach(ne);const z=G.length,Z=B;for(let N=0;N<z;N++){const W=G[N];B=B.concat(W)}function le(N,W,H){return W||Et("ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(W,H)}const ee=B.length;function de(N,W,H){let k,te,pe;const he=N.x-W.x,re=N.y-W.y,Me=H.x-N.x,P=H.y-N.y,Le=he*he+re*re,Ie=he*P-re*Me;if(Math.abs(Ie)>Number.EPSILON){const E=Math.sqrt(Le),g=Math.sqrt(Me*Me+P*P),F=W.x-re/E,J=W.y+he/E,ie=H.x-P/g,Re=H.y+Me/g,De=((ie-F)*P-(Re-J)*Me)/(he*P-re*Me);k=F+he*De-N.x,te=J+re*De-N.y;const ge=k*k+te*te;if(ge<=2)return new Fe(k,te);pe=Math.sqrt(ge/2)}else{let E=!1;he>Number.EPSILON?Me>Number.EPSILON&&(E=!0):he<-Number.EPSILON?Me<-Number.EPSILON&&(E=!0):Math.sign(re)===Math.sign(P)&&(E=!0),E?(k=-re,te=he,pe=Math.sqrt(Le)):(k=he,te=re,pe=Math.sqrt(Le/2))}return new Fe(k/pe,te/pe)}const ue=[];for(let N=0,W=Z.length,H=W-1,k=N+1;N<W;N++,H++,k++)H===W&&(H=0),k===W&&(k=0),ue[N]=de(Z[N],Z[H],Z[k]);const ve=[];let _e,Pe=ue.concat();for(let N=0,W=z;N<W;N++){const H=G[N];_e=[];for(let k=0,te=H.length,pe=te-1,he=k+1;k<te;k++,pe++,he++)pe===te&&(pe=0),he===te&&(he=0),_e[k]=de(H[k],H[pe],H[he]);ve.push(_e),Pe=Pe.concat(_e)}let Xe;if(m===0)Xe=Yi.triangulateShape(Z,G);else{const N=[],W=[];for(let H=0;H<m;H++){const k=H/m,te=d*Math.cos(k*Math.PI/2),pe=_*Math.sin(k*Math.PI/2)+M;for(let he=0,re=Z.length;he<re;he++){const Me=le(Z[he],ue[he],pe);we(Me.x,Me.y,-te),k===0&&N.push(Me)}for(let he=0,re=z;he<re;he++){const Me=G[he];_e=ve[he];const P=[];for(let Le=0,Ie=Me.length;Le<Ie;Le++){const E=le(Me[Le],_e[Le],pe);we(E.x,E.y,-te),k===0&&P.push(E)}k===0&&W.push(P)}}Xe=Yi.triangulateShape(N,W)}const rt=Xe.length,ot=_+M;for(let N=0;N<ee;N++){const W=h?le(B[N],Pe[N],ot):B[N];y?(U.copy(A.normals[0]).multiplyScalar(W.x),R.copy(A.binormals[0]).multiplyScalar(W.y),S.copy(L[0]).add(U).add(R),we(S.x,S.y,S.z)):we(W.x,W.y,0)}for(let N=1;N<=u;N++)for(let W=0;W<ee;W++){const H=h?le(B[W],Pe[W],ot):B[W];y?(U.copy(A.normals[N]).multiplyScalar(H.x),R.copy(A.binormals[N]).multiplyScalar(H.y),S.copy(L[N]).add(U).add(R),we(S.x,S.y,S.z)):we(H.x,H.y,f/u*N)}for(let N=m-1;N>=0;N--){const W=N/m,H=d*Math.cos(W*Math.PI/2),k=_*Math.sin(W*Math.PI/2)+M;for(let te=0,pe=Z.length;te<pe;te++){const he=le(Z[te],ue[te],k);we(he.x,he.y,f+H)}for(let te=0,pe=G.length;te<pe;te++){const he=G[te];_e=ve[te];for(let re=0,Me=he.length;re<Me;re++){const P=le(he[re],_e[re],k);y?we(P.x,P.y+L[u-1].y,L[u-1].x+H):we(P.x,P.y,f+H)}}}lt(),me();function lt(){const N=r.length/3;if(h){let W=0,H=ee*W;for(let k=0;k<rt;k++){const te=Xe[k];Ke(te[2]+H,te[1]+H,te[0]+H)}W=u+m*2,H=ee*W;for(let k=0;k<rt;k++){const te=Xe[k];Ke(te[0]+H,te[1]+H,te[2]+H)}}else{for(let W=0;W<rt;W++){const H=Xe[W];Ke(H[2],H[1],H[0])}for(let W=0;W<rt;W++){const H=Xe[W];Ke(H[0]+ee*u,H[1]+ee*u,H[2]+ee*u)}}i.addGroup(N,r.length/3-N,0)}function me(){const N=r.length/3;let W=0;ce(Z,W),W+=Z.length;for(let H=0,k=G.length;H<k;H++){const te=G[H];ce(te,W),W+=te.length}i.addGroup(N,r.length/3-N,1)}function ce(N,W){let H=N.length;for(;--H>=0;){const k=H;let te=H-1;te<0&&(te=N.length-1);for(let pe=0,he=u+m*2;pe<he;pe++){const re=ee*pe,Me=ee*(pe+1),P=W+k+re,Le=W+te+re,Ie=W+te+Me,E=W+k+Me;Oe(P,Le,Ie,E)}}}function we(N,W,H){l.push(N),l.push(W),l.push(H)}function Ke(N,W,H){C(N),C(W),C(H);const k=r.length/3,te=T.generateTopUV(i,r,k-3,k-2,k-1);O(te[0]),O(te[1]),O(te[2])}function Oe(N,W,H,k){C(N),C(W),C(k),C(W),C(H),C(k);const te=r.length/3,pe=T.generateSideWallUV(i,r,te-6,te-3,te-2,te-1);O(pe[0]),O(pe[1]),O(pe[3]),O(pe[1]),O(pe[2]),O(pe[3])}function C(N){r.push(l[N*3+0]),r.push(l[N*3+1]),r.push(l[N*3+2])}function O(N){s.push(N.x),s.push(N.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Jx(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Mu[r.type]().fromJSON(r)),new sh(i,e.options)}}const Zx={generateTopUV:function(n,e,t,i,r){const s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Fe(s,a),new Fe(o,l),new Fe(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],d=e[r*3+1],_=e[r*3+2],M=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Fe(a,1-l),new Fe(c,1-f),new Fe(h,1-_),new Fe(M,1-p)]:[new Fe(o,1-l),new Fe(u,1-f),new Fe(d,1-_),new Fe(m,1-p)]}};function Jx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class pl extends fn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],_=[],M=[],m=[];for(let p=0;p<u;p++){const T=p*h-a;for(let L=0;L<c;L++){const y=L*f-s;_.push(y,-T,0),M.push(0,0,1),m.push(L/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const L=T+c*p,y=T+c*(p+1),A=T+1+c*(p+1),R=T+1+c*p;d.push(L,y,R),d.push(y,A,R)}this.setIndex(d),this.setAttribute("position",new Qt(_,3)),this.setAttribute("normal",new Qt(M,3)),this.setAttribute("uv",new Qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jo extends fn{constructor(e=new ca([new Fe(0,.5),new Fe(-.5,-.5),new Fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(s,3)),this.setAttribute("uv",new Qt(a,2));function c(u){const f=r.length/3,h=u.extractPoints(t);let d=h.shape;const _=h.holes;Yi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=_.length;m<p;m++){const T=_[m];Yi.isClockWise(T)===!0&&(_[m]=T.reverse())}const M=Yi.triangulateShape(d,_);for(let m=0,p=_.length;m<p;m++){const T=_[m];d=d.concat(T)}for(let m=0,p=d.length;m<p;m++){const T=d[m];r.push(T.x,T.y,0),s.push(0,0,1),a.push(T.x,T.y)}for(let m=0,p=M.length;m<p;m++){const T=M[m],L=T[0]+f,y=T[1]+f,A=T[2]+f;i.push(L,y,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return jx(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];i.push(a)}return new Jo(i,e.curveSegments)}}function jx(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class ps extends fn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new Y,h=new Y,d=[],_=[],M=[],m=[];for(let p=0;p<=i;p++){const T=[],L=p/i,y=a+L*o,A=e*Math.cos(y),R=Math.sqrt(e*e-A*A);let U=0;p===0&&a===0?U=.5/t:p===i&&l===Math.PI&&(U=-.5/t);for(let S=0;S<=t;S++){const D=S/t,B=r+D*s;f.x=-R*Math.cos(B),f.y=A,f.z=R*Math.sin(B),_.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),m.push(D+U,1-L),T.push(c++)}u.push(T)}for(let p=0;p<i;p++)for(let T=0;T<t;T++){const L=u[p][T+1],y=u[p][T],A=u[p+1][T],R=u[p+1][T+1];(p!==0||a>0)&&d.push(L,y,R),(p!==i-1||l<Math.PI)&&d.push(y,A,R)}this.setIndex(d),this.setAttribute("position",new Qt(_,3)),this.setAttribute("normal",new Qt(M,3)),this.setAttribute("uv",new Qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ts(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Vf(r))r.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Vf(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function En(n){const e={};for(let t=0;t<n.length;t++){const i=Ts(n[t]);for(const r in i)e[r]=i[r]}return e}function Vf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Qx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function um(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const eS={clone:Ts,merge:En};var tS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tS,this.fragmentShader=nS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=Qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new bt().setHex(r.value);break;case"v2":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Xt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new pt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new kt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class iS extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rS extends ws{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ar,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sS extends ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=P0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aS extends ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hm extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const fc=new kt,Hf=new Y,kf=new Y;class oS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nh,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Hf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hf),kf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(fc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===ba||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const So=new Y,yo=new Tr,hi=new Y;class fm extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(So,yo,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,yo,hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(So,yo,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,yo,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mr=new Y,Gf=new Fe,Wf=new Fe;class ti extends fm{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yu*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,t){return this.getViewBounds(e,Gf,Wf),t.subVectors(Wf,Gf)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(aa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ml extends fm{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class lS extends oS{constructor(){super(new ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cS extends hm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new lS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class uS extends hm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ls=-90,cs=1;class hS extends hn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ti(ls,cs,e,t);r.layers=this.layers,this.add(r);const s=new ti(ls,cs,e,t);s.layers=this.layers,this.add(s);const a=new ti(ls,cs,e,t);a.layers=this.layers,this.add(a);const o=new ti(ls,cs,e,t);o.layers=this.layers,this.add(o);const l=new ti(ls,cs,e,t);l.layers=this.layers,this.add(l);const c=new ti(ls,cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class fS extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Xf=new kt;class dS{constructor(e,t,i=0,r=1/0){this.ray=new dl(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new th,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xf),this}intersectObject(e,t=!0,i=[]){return Tu(e,this,i,t),i.sort($f),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Tu(e[r],this,i,t);return i.sort($f),i}}function $f(n,e){return n.distance-e.distance}function Tu(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Tu(s[a],e,t,!0)}}class qf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class dm{static{dm.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}}class pS extends wr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Yf(n,e,t,i){const r=mS(i);switch(t){case $p:return n*e;case Yp:return n*e/r.components*r.byteLength;case Ku:return n*e/r.components*r.byteLength;case qr:return n*e*2/r.components*r.byteLength;case Zu:return n*e*2/r.components*r.byteLength;case qp:return n*e*3/r.components*r.byteLength;case ii:return n*e*4/r.components*r.byteLength;case Ju:return n*e*4/r.components*r.byteLength;case Co:case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Lo:case Do:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xc:case qc:return Math.max(n,16)*Math.max(e,8)/4;case Wc:case $c:return Math.max(n,8)*Math.max(e,8)/2;case Yc:case Kc:case Jc:case jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zc:case Go:case Qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case nu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case iu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ru:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case su:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case au:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ou:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case lu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case cu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case uu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case du:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case pu:case mu:case gu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case _u:case vu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wo:case xu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mS(n){switch(n){case zn:case kp:return{byteLength:1,components:1};case ya:case Gp:case wi:return{byteLength:2,components:1};case qu:case Yu:return{byteLength:2,components:4};case Ai:case $u:case Si:return{byteLength:4,components:1};case Wp:case Xp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xu}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pm(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function gS(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],M=f[d];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++h,f[h]=M)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const M=f[d];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var _S=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ES=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,AS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,PS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,OS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,BS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,VS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,HS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,GS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$S=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qS="gl_FragColor = linearToOutputTexel( gl_FragColor );",YS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ZS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,JS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ey=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ny=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ry=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ay=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ly=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,cy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,uy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,py=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,my=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_y=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Sy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,My=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,by=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ey=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ty=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Py=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ly=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Uy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,By=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ky=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$y=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,qy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ky=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,eM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _M=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,EM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$M=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:_S,alphahash_pars_fragment:vS,alphamap_fragment:xS,alphamap_pars_fragment:SS,alphatest_fragment:yS,alphatest_pars_fragment:MS,aomap_fragment:bS,aomap_pars_fragment:ES,batching_pars_vertex:TS,batching_vertex:AS,begin_vertex:wS,beginnormal_vertex:RS,bsdfs:CS,iridescence_fragment:PS,bumpmap_pars_fragment:LS,clipping_planes_fragment:DS,clipping_planes_pars_fragment:IS,clipping_planes_pars_vertex:US,clipping_planes_vertex:NS,color_fragment:FS,color_pars_fragment:OS,color_pars_vertex:BS,color_vertex:zS,common:VS,cube_uv_reflection_fragment:HS,defaultnormal_vertex:kS,displacementmap_pars_vertex:GS,displacementmap_vertex:WS,emissivemap_fragment:XS,emissivemap_pars_fragment:$S,colorspace_fragment:qS,colorspace_pars_fragment:YS,envmap_fragment:KS,envmap_common_pars_fragment:ZS,envmap_pars_fragment:JS,envmap_pars_vertex:jS,envmap_physical_pars_fragment:cy,envmap_vertex:QS,fog_vertex:ey,fog_pars_vertex:ty,fog_fragment:ny,fog_pars_fragment:iy,gradientmap_pars_fragment:ry,lightmap_pars_fragment:sy,lights_lambert_fragment:ay,lights_lambert_pars_fragment:oy,lights_pars_begin:ly,lights_toon_fragment:uy,lights_toon_pars_fragment:hy,lights_phong_fragment:fy,lights_phong_pars_fragment:dy,lights_physical_fragment:py,lights_physical_pars_fragment:my,lights_fragment_begin:gy,lights_fragment_maps:_y,lights_fragment_end:vy,lightprobes_pars_fragment:xy,logdepthbuf_fragment:Sy,logdepthbuf_pars_fragment:yy,logdepthbuf_pars_vertex:My,logdepthbuf_vertex:by,map_fragment:Ey,map_pars_fragment:Ty,map_particle_fragment:Ay,map_particle_pars_fragment:wy,metalnessmap_fragment:Ry,metalnessmap_pars_fragment:Cy,morphinstance_vertex:Py,morphcolor_vertex:Ly,morphnormal_vertex:Dy,morphtarget_pars_vertex:Iy,morphtarget_vertex:Uy,normal_fragment_begin:Ny,normal_fragment_maps:Fy,normal_pars_fragment:Oy,normal_pars_vertex:By,normal_vertex:zy,normalmap_pars_fragment:Vy,clearcoat_normal_fragment_begin:Hy,clearcoat_normal_fragment_maps:ky,clearcoat_pars_fragment:Gy,iridescence_pars_fragment:Wy,opaque_fragment:Xy,packing:$y,premultiplied_alpha_fragment:qy,project_vertex:Yy,dithering_fragment:Ky,dithering_pars_fragment:Zy,roughnessmap_fragment:Jy,roughnessmap_pars_fragment:jy,shadowmap_pars_fragment:Qy,shadowmap_pars_vertex:eM,shadowmap_vertex:tM,shadowmask_pars_fragment:nM,skinbase_vertex:iM,skinning_pars_vertex:rM,skinning_vertex:sM,skinnormal_vertex:aM,specularmap_fragment:oM,specularmap_pars_fragment:lM,tonemapping_fragment:cM,tonemapping_pars_fragment:uM,transmission_fragment:hM,transmission_pars_fragment:fM,uv_pars_fragment:dM,uv_pars_vertex:pM,uv_vertex:mM,worldpos_vertex:gM,background_vert:_M,background_frag:vM,backgroundCube_vert:xM,backgroundCube_frag:SM,cube_vert:yM,cube_frag:MM,depth_vert:bM,depth_frag:EM,distance_vert:TM,distance_frag:AM,equirect_vert:wM,equirect_frag:RM,linedashed_vert:CM,linedashed_frag:PM,meshbasic_vert:LM,meshbasic_frag:DM,meshlambert_vert:IM,meshlambert_frag:UM,meshmatcap_vert:NM,meshmatcap_frag:FM,meshnormal_vert:OM,meshnormal_frag:BM,meshphong_vert:zM,meshphong_frag:VM,meshphysical_vert:HM,meshphysical_frag:kM,meshtoon_vert:GM,meshtoon_frag:WM,points_vert:XM,points_frag:$M,shadow_vert:qM,shadow_frag:YM,sprite_vert:KM,sprite_frag:ZM},qe={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},_i={basic:{uniforms:En([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:En([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:En([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:En([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:En([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new bt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:En([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:En([qe.points,qe.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:En([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:En([qe.common,qe.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:En([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:En([qe.sprite,qe.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:En([qe.common,qe.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:En([qe.lights,qe.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};_i.physical={uniforms:En([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Mo={r:0,b:0,g:0},JM=new kt,mm=new pt;mm.set(-1,0,0,0,1,0,0,0,1);function jM(n,e,t,i,r,s){const a=new bt(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function d(T){let L=T.isScene===!0?T.background:null;if(L&&L.isTexture){const y=T.backgroundBlurriness>0;L=e.get(L,y)}return L}function _(T){let L=!1;const y=d(T);y===null?m(a,o):y&&y.isColor&&(m(y,1),L=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(T,L){const y=d(L);y&&(y.isCubeTexture||y.mapping===hl)?(c===void 0&&(c=new vn(new Da(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Ts(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(JM.makeRotationFromEuler(L.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mm),c.material.toneMapped=Mt.getTransfer(y.colorSpace)!==Nt,(u!==y||f!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new vn(new pl(2,2),new Ri({name:"BackgroundMaterial",uniforms:Ts(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=Mt.getTransfer(y.colorSpace)!==Nt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,L){T.getRGB(Mo,um(n)),t.buffers.color.setClear(Mo.r,Mo.g,Mo.b,L,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,L=1){a.set(T),o=L,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:_,addToRenderList:M,dispose:p}}function QM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(G,K,ne,z,Z){let le=!1;const ee=f(G,z,ne,K);s!==ee&&(s=ee,c(s.object)),le=d(G,z,ne,Z),le&&_(G,z,ne,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(le||a)&&(a=!1,y(G,K,ne,z),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(G){return n.bindVertexArray(G)}function u(G){return n.deleteVertexArray(G)}function f(G,K,ne,z){const Z=z.wireframe===!0;let le=i[K.id];le===void 0&&(le={},i[K.id]=le);const ee=G.isInstancedMesh===!0?G.id:0;let de=le[ee];de===void 0&&(de={},le[ee]=de);let ue=de[ne.id];ue===void 0&&(ue={},de[ne.id]=ue);let ve=ue[Z];return ve===void 0&&(ve=h(l()),ue[Z]=ve),ve}function h(G){const K=[],ne=[],z=[];for(let Z=0;Z<t;Z++)K[Z]=0,ne[Z]=0,z[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ne,attributeDivisors:z,object:G,attributes:{},index:null}}function d(G,K,ne,z){const Z=s.attributes,le=K.attributes;let ee=0;const de=ne.getAttributes();for(const ue in de)if(de[ue].location>=0){const _e=Z[ue];let Pe=le[ue];if(Pe===void 0&&(ue==="instanceMatrix"&&G.instanceMatrix&&(Pe=G.instanceMatrix),ue==="instanceColor"&&G.instanceColor&&(Pe=G.instanceColor)),_e===void 0||_e.attribute!==Pe||Pe&&_e.data!==Pe.data)return!0;ee++}return s.attributesNum!==ee||s.index!==z}function _(G,K,ne,z){const Z={},le=K.attributes;let ee=0;const de=ne.getAttributes();for(const ue in de)if(de[ue].location>=0){let _e=le[ue];_e===void 0&&(ue==="instanceMatrix"&&G.instanceMatrix&&(_e=G.instanceMatrix),ue==="instanceColor"&&G.instanceColor&&(_e=G.instanceColor));const Pe={};Pe.attribute=_e,_e&&_e.data&&(Pe.data=_e.data),Z[ue]=Pe,ee++}s.attributes=Z,s.attributesNum=ee,s.index=z}function M(){const G=s.newAttributes;for(let K=0,ne=G.length;K<ne;K++)G[K]=0}function m(G){p(G,0)}function p(G,K){const ne=s.newAttributes,z=s.enabledAttributes,Z=s.attributeDivisors;ne[G]=1,z[G]===0&&(n.enableVertexAttribArray(G),z[G]=1),Z[G]!==K&&(n.vertexAttribDivisor(G,K),Z[G]=K)}function T(){const G=s.newAttributes,K=s.enabledAttributes;for(let ne=0,z=K.length;ne<z;ne++)K[ne]!==G[ne]&&(n.disableVertexAttribArray(ne),K[ne]=0)}function L(G,K,ne,z,Z,le,ee){ee===!0?n.vertexAttribIPointer(G,K,ne,Z,le):n.vertexAttribPointer(G,K,ne,z,Z,le)}function y(G,K,ne,z){M();const Z=z.attributes,le=ne.getAttributes(),ee=K.defaultAttributeValues;for(const de in le){const ue=le[de];if(ue.location>=0){let ve=Z[de];if(ve===void 0&&(de==="instanceMatrix"&&G.instanceMatrix&&(ve=G.instanceMatrix),de==="instanceColor"&&G.instanceColor&&(ve=G.instanceColor)),ve!==void 0){const _e=ve.normalized,Pe=ve.itemSize,Xe=e.get(ve);if(Xe===void 0)continue;const rt=Xe.buffer,ot=Xe.type,lt=Xe.bytesPerElement,me=ot===n.INT||ot===n.UNSIGNED_INT||ve.gpuType===$u;if(ve.isInterleavedBufferAttribute){const ce=ve.data,we=ce.stride,Ke=ve.offset;if(ce.isInstancedInterleavedBuffer){for(let Oe=0;Oe<ue.locationSize;Oe++)p(ue.location+Oe,ce.meshPerAttribute);G.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Oe=0;Oe<ue.locationSize;Oe++)m(ue.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let Oe=0;Oe<ue.locationSize;Oe++)L(ue.location+Oe,Pe/ue.locationSize,ot,_e,we*lt,(Ke+Pe/ue.locationSize*Oe)*lt,me)}else{if(ve.isInstancedBufferAttribute){for(let ce=0;ce<ue.locationSize;ce++)p(ue.location+ce,ve.meshPerAttribute);G.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ce=0;ce<ue.locationSize;ce++)m(ue.location+ce);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let ce=0;ce<ue.locationSize;ce++)L(ue.location+ce,Pe/ue.locationSize,ot,_e,Pe*lt,Pe/ue.locationSize*ce*lt,me)}}else if(ee!==void 0){const _e=ee[de];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(ue.location,_e);break;case 3:n.vertexAttrib3fv(ue.location,_e);break;case 4:n.vertexAttrib4fv(ue.location,_e);break;default:n.vertexAttrib1fv(ue.location,_e)}}}}T()}function A(){D();for(const G in i){const K=i[G];for(const ne in K){const z=K[ne];for(const Z in z){const le=z[Z];for(const ee in le)u(le[ee].object),delete le[ee];delete z[Z]}}delete i[G]}}function R(G){if(i[G.id]===void 0)return;const K=i[G.id];for(const ne in K){const z=K[ne];for(const Z in z){const le=z[Z];for(const ee in le)u(le[ee].object),delete le[ee];delete z[Z]}}delete i[G.id]}function U(G){for(const K in i){const ne=i[K];for(const z in ne){const Z=ne[z];if(Z[G.id]===void 0)continue;const le=Z[G.id];for(const ee in le)u(le[ee].object),delete le[ee];delete Z[G.id]}}}function S(G){for(const K in i){const ne=i[K],z=G.isInstancedMesh===!0?G.id:0,Z=ne[z];if(Z!==void 0){for(const le in Z){const ee=Z[le];for(const de in ee)u(ee[de].object),delete ee[de];delete Z[le]}delete ne[z],Object.keys(ne).length===0&&delete i[K]}}}function D(){B(),a=!0,s!==r&&(s=r,c(s.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:B,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:S,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:m,disableUnusedAttributes:T}}function eb(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function tb(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(U){return!(U!==ii&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const S=U===wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==zn&&U!==Si&&!S&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ut("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:L,maxFragmentUniforms:y,maxSamples:A,samples:R}}function nb(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Wi,o=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const T=s?0:i,L=T*4;let y=p.clippingState||null;l.value=y,y=u(_,h,L,d);for(let A=0;A!==L;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const M=f!==null?f.length:0;let m=null;if(M!==0){if(m=l.value,_!==!0||m===null){const p=d+M*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let L=0,y=d;L!==M;++L,y+=4)a.copy(f[L]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const ms=4,ib=6,rb=20,sb=256,Ws=new ml,Kf=new bt;let dc=null,pc=0,mc=0,gc=!1;const ab=new Y,Fr=new Y;class Zf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=ab}=s;dc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dc,pc,mc),this._renderer.xr.enabled=gc,e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$r||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:wi,format:ii,colorSpace:Xo,depthBuffer:!1},r=Jf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jf(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ob(s)),this._blurMaterial=cb(s,e,t),this._ggxMaterial=lb(s,e,t)}return r}_compileMaterial(e){const t=new vn(new fn,e);this._renderer.compile(t,Ws)}_sceneToCubeUV(e,t,i,r,s){const l=new ti(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Kf),f.toneMapping=bi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vn(new Da,new vr({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,p=!0):(m.color.copy(Kf),p=!0);for(let L=0;L<6;L++){const y=L%3;y===0?(l.up.set(0,c[L],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[L],s.y,s.z)):y===1?(l.up.set(0,0,c[L]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[L],s.z)):(l.up.set(0,c[L],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[L]));const A=this._cubeSize;us(r,y*A,L>2?A:0,A,A),f.setRenderTarget(r),p&&f.render(M,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===$r||e.mapping===bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;us(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ws)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:_}=this,M=this._sizeLods[i],m=3*M*(i>_-ms?i-_+ms:0),p=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,us(s,m,p,3*M,2*M),r.setRenderTarget(s),r.render(o,Ws),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,us(e,m,p,3*M,2*M),r.setRenderTarget(e),r.render(o,Ws)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],f=3*u*(r>this._lodMax-ms?r-this._lodMax+ms:0),h=4*(this._cubeSize-u);us(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,Ws)}}function ob(n){const e=[],t=[];let i=n;const r=n-ms+1+ib;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,_=new Float32Array(d*h*f),M=new Float32Array(d*h*f);for(let p=0;p<f;p++){const T=p%3*2/3-1,L=p>2?0:-1,y=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];_.set(y,d*h*p);for(let A=0;A<h;A++){const R=u[A*2]*2-1,U=u[A*2+1]*2-1;p===0?Fr.set(1,U,R):p===1?Fr.set(-R,1,-U):p===2?Fr.set(-R,U,1):p===3?Fr.set(-1,U,-R):p===4?Fr.set(-R,-1,U):Fr.set(R,U,-1),Fr.toArray(M,(p*h+A)*d)}}const m=new fn;m.setAttribute("position",new Qi(_,d)),m.setAttribute("outputDirection",new Qi(M,d)),t.push(new vn(m,null)),i>ms&&i--}return{lodMeshes:t,sizeLods:e}}function Jf(n,e,t){const i=new ai(n,e,t);return i.texture.mapping=hl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function us(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function lb(n,e,t){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function cb(n,e,t){return new Ri({name:"SphericalGaussianBlur",defines:{SAMPLES:rb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function jf(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Qf(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function gl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class gm extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new em(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Da(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fn,blending:Ji});s.uniforms.tEquirect.value=t;const a=new vn(r,s),o=t.minFilter;return t.minFilter===Vr&&(t.minFilter=Sn),new hS(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function ub(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Fl||d===Ol)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const M=new gm(_.height);return M.fromEquirectangularTexture(n,h),e.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,_=d===Fl||d===Ol,M=d===$r||d===bs;if(_||M){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Zf(n)),m=_?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const T=h.image;return _&&T&&T.height>0||M&&T&&l(T)?(i===null&&(i=new Zf(n)),m=_?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===Fl?h.mapping=$r:d===Ol&&(h.mapping=bs),h}function l(h){let d=0;const _=6;for(let M=0;M<_;M++)h[M]!==void 0&&d++;return d===_}function c(h){const d=h.target;d.removeEventListener("dispose",c);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function hb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&xs("WebGLRenderer: "+i+" extension not supported."),r}}}function fb(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let M=0;if(_===void 0)return;if(d!==null){const T=d.array;M=d.version;for(let L=0,y=T.length;L<y;L+=3){const A=T[L+0],R=T[L+1],U=T[L+2];h.push(A,R,R,U,U,A)}}else{const T=_.array;M=_.version;for(let L=0,y=T.length/3-1;L<y;L+=3){const A=L+0,R=L+1,U=L+2;h.push(A,R,R,U,U,A)}}const m=new(_.count>=65535?Qp:jp)(h,1);m.version=M;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function db(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*a),t.update(h,i,1)}function c(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,s,f*a,d),t.update(h,i,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,d);let M=0;for(let m=0;m<d;m++)M+=h[m];t.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function pb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Et("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function mb(n,e,t){const i=new WeakMap,r=new Xt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let D=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",D)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let L=0;d===!0&&(L=1),_===!0&&(L=2),M===!0&&(L=3);let y=o.attributes.position.count*L,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const R=new Float32Array(y*A*4*f),U=new Zp(R,y,A,f);U.type=Si,U.needsUpdate=!0;const S=L*4;for(let B=0;B<f;B++){const G=m[B],K=p[B],ne=T[B],z=y*A*4*B;for(let Z=0;Z<G.count;Z++){const le=Z*S;d===!0&&(r.fromBufferAttribute(G,Z),R[z+le+0]=r.x,R[z+le+1]=r.y,R[z+le+2]=r.z,R[z+le+3]=0),_===!0&&(r.fromBufferAttribute(K,Z),R[z+le+4]=r.x,R[z+le+5]=r.y,R[z+le+6]=r.z,R[z+le+7]=0),M===!0&&(r.fromBufferAttribute(ne,Z),R[z+le+8]=r.x,R[z+le+9]=r.y,R[z+le+10]=r.z,R[z+le+11]=ne.itemSize===4?r.w:1)}}h={count:f,texture:U,size:new Fe(y,A)},i.set(o,h),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];const _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function gb(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const _b={[Up]:"LINEAR_TONE_MAPPING",[Np]:"REINHARD_TONE_MAPPING",[Fp]:"CINEON_TONE_MAPPING",[Op]:"ACES_FILMIC_TONE_MAPPING",[zp]:"AGX_TONE_MAPPING",[Vp]:"NEUTRAL_TONE_MAPPING",[Bp]:"CUSTOM_TONE_MAPPING"};function vb(n,e,t,i,r,s){const a=new ai(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new fn;c.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const u=new iS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new vn(c,u),h=new ml(-1,1,1,-1,0,1);let d=null,_=null,M=!1,m,p=null,T=[],L=!1;this.setSize=function(y,A){a.setSize(y,A),o!==null&&o.setSize(y,A),l!==null&&l.setSize(y,A);for(let R=0;R<T.length;R++){const U=T[R];U.setSize&&U.setSize(y,A)}},this.setEffects=function(y){T=y,L=T.length>0&&T[0].isRenderPass===!0;const A=a.width,R=a.height;T.length>0&&o===null&&(o=new ai(A,R,{type:wi,depthBuffer:!1,stencilBuffer:!1}),l=new ai(A,R,{type:wi,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<T.length;U++){const S=T[U];S.setSize&&S.setSize(A,R)}},this.begin=function(y,A){if(M||y.toneMapping===bi&&T.length===0)return!1;if(p=A,A!==null){const R=A.width,U=A.height;(a.width!==R||a.height!==U)&&this.setSize(R,U)}return L===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=bi,!0},this.hasRenderPass=function(){return L},this.end=function(y,A){y.toneMapping=m,M=!0;let R=a,U=o;for(let S=0;S<T.length;S++){const D=T[S];D.enabled!==!1&&(D.render(y,U,R,A),D.needsSwap!==!1&&(R=U,U=U===o?l:o))}if(d!==y.outputColorSpace||_!==y.toneMapping){d=y.outputColorSpace,_=y.toneMapping,u.defines={},Mt.getTransfer(d)===Nt&&(u.defines.SRGB_TRANSFER="");const S=_b[_];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=R.texture,y.setRenderTarget(p),y.render(f,h),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const _m=new wn,Au=new Ea(1,1),vm=new Zp,xm=new J0,Sm=new em,ed=[],td=[],nd=new Float32Array(16),id=new Float32Array(9),rd=new Float32Array(4);function Rs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ed[r];if(s===void 0&&(s=new Float32Array(r),ed[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function tn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function nn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _l(n,e){let t=td[e];t===void 0&&(t=new Int32Array(e),td[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Sb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2fv(this.addr,e),nn(t,e)}}function yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;n.uniform3fv(this.addr,e),nn(t,e)}}function Mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4fv(this.addr,e),nn(t,e)}}function bb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;rd.set(i),n.uniformMatrix2fv(this.addr,!1,rd),nn(t,i)}}function Eb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;id.set(i),n.uniformMatrix3fv(this.addr,!1,id),nn(t,i)}}function Tb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;nd.set(i),n.uniformMatrix4fv(this.addr,!1,nd),nn(t,i)}}function Ab(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2iv(this.addr,e),nn(t,e)}}function Rb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3iv(this.addr,e),nn(t,e)}}function Cb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4iv(this.addr,e),nn(t,e)}}function Pb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Lb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2uiv(this.addr,e),nn(t,e)}}function Db(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3uiv(this.addr,e),nn(t,e)}}function Ib(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4uiv(this.addr,e),nn(t,e)}}function Ub(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Au.compareFunction=t.isReversedDepthBuffer()?Qu:ju,s=Au):s=_m,t.setTexture2D(e||s,r)}function Nb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||xm,r)}function Fb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Sm,r)}function Ob(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||vm,r)}function Bb(n){switch(n){case 5126:return xb;case 35664:return Sb;case 35665:return yb;case 35666:return Mb;case 35674:return bb;case 35675:return Eb;case 35676:return Tb;case 5124:case 35670:return Ab;case 35667:case 35671:return wb;case 35668:case 35672:return Rb;case 35669:case 35673:return Cb;case 5125:return Pb;case 36294:return Lb;case 36295:return Db;case 36296:return Ib;case 35678:case 36198:case 36298:case 36306:case 35682:return Ub;case 35679:case 36299:case 36307:return Nb;case 35680:case 36300:case 36308:case 36293:return Fb;case 36289:case 36303:case 36311:case 36292:return Ob}}function zb(n,e){n.uniform1fv(this.addr,e)}function Vb(n,e){const t=Rs(e,this.size,2);n.uniform2fv(this.addr,t)}function Hb(n,e){const t=Rs(e,this.size,3);n.uniform3fv(this.addr,t)}function kb(n,e){const t=Rs(e,this.size,4);n.uniform4fv(this.addr,t)}function Gb(n,e){const t=Rs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Wb(n,e){const t=Rs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Xb(n,e){const t=Rs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $b(n,e){n.uniform1iv(this.addr,e)}function qb(n,e){n.uniform2iv(this.addr,e)}function Yb(n,e){n.uniform3iv(this.addr,e)}function Kb(n,e){n.uniform4iv(this.addr,e)}function Zb(n,e){n.uniform1uiv(this.addr,e)}function Jb(n,e){n.uniform2uiv(this.addr,e)}function jb(n,e){n.uniform3uiv(this.addr,e)}function Qb(n,e){n.uniform4uiv(this.addr,e)}function eE(n,e,t){const i=this.cache,r=e.length,s=_l(t,r);tn(i,s)||(n.uniform1iv(this.addr,s),nn(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Au:a=_m;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function tE(n,e,t){const i=this.cache,r=e.length,s=_l(t,r);tn(i,s)||(n.uniform1iv(this.addr,s),nn(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||xm,s[a])}function nE(n,e,t){const i=this.cache,r=e.length,s=_l(t,r);tn(i,s)||(n.uniform1iv(this.addr,s),nn(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Sm,s[a])}function iE(n,e,t){const i=this.cache,r=e.length,s=_l(t,r);tn(i,s)||(n.uniform1iv(this.addr,s),nn(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||vm,s[a])}function rE(n){switch(n){case 5126:return zb;case 35664:return Vb;case 35665:return Hb;case 35666:return kb;case 35674:return Gb;case 35675:return Wb;case 35676:return Xb;case 5124:case 35670:return $b;case 35667:case 35671:return qb;case 35668:case 35672:return Yb;case 35669:case 35673:return Kb;case 5125:return Zb;case 36294:return Jb;case 36295:return jb;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return eE;case 35679:case 36299:case 36307:return tE;case 35680:case 36300:case 36308:case 36293:return nE;case 36289:case 36303:case 36311:case 36292:return iE}}class sE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Bb(t.type)}}class aE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rE(t.type)}}class oE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const _c=/(\w+)(\])?(\[|\.)?/g;function sd(n,e){n.seq.push(e),n.map[e.id]=e}function lE(n,e,t){const i=n.name,r=i.length;for(_c.lastIndex=0;;){const s=_c.exec(i),a=_c.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){sd(t,c===void 0?new sE(o,n,e):new aE(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new oE(o),sd(t,f)),t=f}}}class Io{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);lE(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ad(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const cE=37297;let uE=0;function hE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const od=new pt;function fE(n){Mt._getMatrix(od,Mt.workingColorSpace,n);const e=`mat3( ${od.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(n)){case $o:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ld(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+hE(n.getShaderSource(e),o)}else return s}function dE(n,e){const t=fE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const pE={[Up]:"Linear",[Np]:"Reinhard",[Fp]:"Cineon",[Op]:"ACESFilmic",[zp]:"AgX",[Vp]:"Neutral",[Bp]:"Custom"};function mE(n,e){const t=pE[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bo=new Y;function gE(){Mt.getLuminanceCoefficients(bo);const n=bo.x.toFixed(4),e=bo.y.toFixed(4),t=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _E(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function vE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function js(n){return n!==""}function cd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ud(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SE=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(n){return n.replace(SE,ME)}const yE=new Map;function ME(n,e){let t=_t[e];if(t===void 0){const i=yE.get(e);if(i!==void 0)t=_t[i],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return wu(t)}const bE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(n){return n.replace(bE,EE)}function EE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const TE={[Ro]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function AE(n){return TE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wE={[$r]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[hl]:"ENVMAP_TYPE_CUBE_UV"};function RE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":wE[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const CE={[bs]:"ENVMAP_MODE_REFRACTION"};function PE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":CE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LE={[Ip]:"ENVMAP_BLENDING_MULTIPLY",[w0]:"ENVMAP_BLENDING_MIX",[R0]:"ENVMAP_BLENDING_ADD"};function DE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":LE[n.combine]||"ENVMAP_BLENDING_NONE"}function IE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function UE(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=AE(t),c=RE(t),u=PE(t),f=DE(t),h=IE(t),d=_E(t),_=vE(s),M=r.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?_t.tonemapping_pars_fragment:"",t.toneMapping!==bi?mE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,dE("linearToOutputTexel",t.outputColorSpace),gE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),a=wu(a),a=cd(a,t),a=ud(a,t),o=wu(o),o=cd(o,t),o=ud(o,t),a=hd(a),o=hd(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const L=T+m+a,y=T+p+o,A=ad(r,r.VERTEX_SHADER,L),R=ad(r,r.FRAGMENT_SHADER,y);r.attachShader(M,A),r.attachShader(M,R),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function U(G){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(M)||"",ne=r.getShaderInfoLog(A)||"",z=r.getShaderInfoLog(R)||"",Z=K.trim(),le=ne.trim(),ee=z.trim();let de=!0,ue=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(de=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,A,R);else{const ve=ld(r,A,"vertex"),_e=ld(r,R,"fragment");Et("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Z+`
`+ve+`
`+_e)}else Z!==""?ut("WebGLProgram: Program Info Log:",Z):(le===""||ee==="")&&(ue=!1);ue&&(G.diagnostics={runnable:de,programLog:Z,vertexShader:{log:le,prefix:m},fragmentShader:{log:ee,prefix:p}})}r.deleteShader(A),r.deleteShader(R),S=new Io(r,M),D=xE(r,M)}let S;this.getUniforms=function(){return S===void 0&&U(this),S};let D;this.getAttributes=function(){return D===void 0&&U(this),D};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(M,cE)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uE++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=R,this}let NE=0;class FE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new OE(e),t.set(e,i)),i}}class OE{constructor(e){this.id=NE++,this.code=e,this.usedTimes=0}}function BE(n){return n===qr||n===Go||n===Wo}function zE(n,e,t,i,r,s){const a=new th,o=new FE,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function M(S,D,B,G,K,ne){const z=G.fog,Z=K.geometry,le=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?G.environment:null,ee=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,de=e.get(S.envMap||le,ee),ue=de&&de.mapping===hl?de.image.height:null,ve=d[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&ut("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const _e=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Pe=_e!==void 0?_e.length:0;let Xe=0;Z.morphAttributes.position!==void 0&&(Xe=1),Z.morphAttributes.normal!==void 0&&(Xe=2),Z.morphAttributes.color!==void 0&&(Xe=3);let rt,ot,lt,me;if(ve){const j=_i[ve];rt=j.vertexShader,ot=j.fragmentShader}else{rt=S.vertexShader,ot=S.fragmentShader;const j=o.getVertexShaderStage(S),w=o.getFragmentShaderStage(S);o.update(S,j,w),lt=j.id,me=w.id}const ce=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),Ke=K.isInstancedMesh===!0,Oe=K.isBatchedMesh===!0,C=!!S.map,O=!!S.matcap,N=!!de,W=!!S.aoMap,H=!!S.lightMap,k=!!S.bumpMap&&S.wireframe===!1,te=!!S.normalMap,pe=!!S.displacementMap,he=!!S.emissiveMap,re=!!S.metalnessMap,Me=!!S.roughnessMap,P=S.anisotropy>0,Le=S.clearcoat>0,Ie=S.dispersion>0,E=S.retroreflectivity>0,g=S.iridescence>0,F=S.sheen>0,J=S.transmission>0,ie=P&&!!S.anisotropyMap,Re=Le&&!!S.clearcoatMap,De=Le&&!!S.clearcoatNormalMap,ge=Le&&!!S.clearcoatRoughnessMap,xe=g&&!!S.iridescenceMap,Ce=g&&!!S.iridescenceThicknessMap,Ne=F&&!!S.sheenColorMap,Be=F&&!!S.sheenRoughnessMap,ze=!!S.specularMap,nt=!!S.specularColorMap,it=!!S.specularIntensityMap,ht=J&&!!S.transmissionMap,X=J&&!!S.thicknessMap,Ve=!!S.gradientMap,ye=!!S.alphaMap,He=S.alphaTest>0,be=!!S.alphaHash,Te=!!S.extensions;let Ge=bi;S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const je={shaderID:ve,shaderType:S.type,shaderName:S.name,vertexShader:rt,fragmentShader:ot,defines:S.defines,customVertexShaderID:lt,customFragmentShaderID:me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Oe,batchingColor:Oe&&K._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&K.instanceColor!==null,instancingMorph:Ke&&K.morphTexture!==null,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:C,matcap:O,envMap:N,envMapMode:N&&de.mapping,envMapCubeUVHeight:ue,aoMap:W,lightMap:H,bumpMap:k,normalMap:te,displacementMap:pe,emissiveMap:he,normalMapObjectSpace:te&&S.normalMapType===L0,normalMapTangentSpace:te&&S.normalMapType===Su,packedNormalMap:te&&S.normalMapType===Su&&BE(S.normalMap.format),metalnessMap:re,roughnessMap:Me,anisotropy:P,anisotropyMap:ie,clearcoat:Le,clearcoatMap:Re,clearcoatNormalMap:De,clearcoatRoughnessMap:ge,dispersion:Ie,retroreflection:E,iridescence:g,iridescenceMap:xe,iridescenceThicknessMap:Ce,sheen:F,sheenColorMap:Ne,sheenRoughnessMap:Be,specularMap:ze,specularColorMap:nt,specularIntensityMap:it,transmission:J,transmissionMap:ht,thicknessMap:X,gradientMap:Ve,opaque:S.transparent===!1&&S.blending===sa&&S.alphaToCoverage===!1,alphaMap:ye,alphaTest:He,alphaHash:be,combine:S.combine,mapUv:C&&_(S.map.channel),aoMapUv:W&&_(S.aoMap.channel),lightMapUv:H&&_(S.lightMap.channel),bumpMapUv:k&&_(S.bumpMap.channel),normalMapUv:te&&_(S.normalMap.channel),displacementMapUv:pe&&_(S.displacementMap.channel),emissiveMapUv:he&&_(S.emissiveMap.channel),metalnessMapUv:re&&_(S.metalnessMap.channel),roughnessMapUv:Me&&_(S.roughnessMap.channel),anisotropyMapUv:ie&&_(S.anisotropyMap.channel),clearcoatMapUv:Re&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:De&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Be&&_(S.sheenRoughnessMap.channel),specularMapUv:ze&&_(S.specularMap.channel),specularColorMapUv:nt&&_(S.specularColorMap.channel),specularIntensityMapUv:it&&_(S.specularIntensityMap.channel),transmissionMapUv:ht&&_(S.transmissionMap.channel),thicknessMapUv:X&&_(S.thicknessMap.channel),alphaMapUv:ye&&_(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(te||P),vertexNormals:!!Z.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!Z.attributes.uv&&(C||ye),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||Z.attributes.normal===void 0&&te===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:we,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Xe,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ne.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:C&&S.map.isVideoTexture===!0&&Mt.getTransfer(S.map.colorSpace)===Nt,decodeVideoTextureEmissive:he&&S.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(S.emissiveMap.colorSpace)===Nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ni,flipSided:S.side===Fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Te&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&S.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function m(S){const D=[];if(S.shaderID?D.push(S.shaderID):(D.push(S.customVertexShaderID),D.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)D.push(B),D.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(p(D,S),T(D,S),D.push(n.outputColorSpace)),D.push(S.customProgramCacheKey),D.join()}function p(S,D){S.push(D.precision),S.push(D.outputColorSpace),S.push(D.envMapMode),S.push(D.envMapCubeUVHeight),S.push(D.mapUv),S.push(D.alphaMapUv),S.push(D.lightMapUv),S.push(D.aoMapUv),S.push(D.bumpMapUv),S.push(D.normalMapUv),S.push(D.displacementMapUv),S.push(D.emissiveMapUv),S.push(D.metalnessMapUv),S.push(D.roughnessMapUv),S.push(D.anisotropyMapUv),S.push(D.clearcoatMapUv),S.push(D.clearcoatNormalMapUv),S.push(D.clearcoatRoughnessMapUv),S.push(D.iridescenceMapUv),S.push(D.iridescenceThicknessMapUv),S.push(D.sheenColorMapUv),S.push(D.sheenRoughnessMapUv),S.push(D.specularMapUv),S.push(D.specularColorMapUv),S.push(D.specularIntensityMapUv),S.push(D.transmissionMapUv),S.push(D.thicknessMapUv),S.push(D.combine),S.push(D.fogExp2),S.push(D.sizeAttenuation),S.push(D.morphTargetsCount),S.push(D.morphAttributeCount),S.push(D.numSunLights),S.push(D.numDirLights),S.push(D.numPointLights),S.push(D.numSpotLights),S.push(D.numSpotLightMaps),S.push(D.numHemiLights),S.push(D.numRectAreaLights),S.push(D.numSunLightShadows),S.push(D.numDirLightShadows),S.push(D.numPointLightShadows),S.push(D.numSpotLightShadows),S.push(D.numSpotLightShadowsWithMaps),S.push(D.numLightProbes),S.push(D.shadowMapType),S.push(D.toneMapping),S.push(D.numClippingPlanes),S.push(D.numClipIntersection),S.push(D.depthPacking)}function T(S,D){a.disableAll(),D.instancing&&a.enable(0),D.instancingColor&&a.enable(1),D.instancingMorph&&a.enable(2),D.matcap&&a.enable(3),D.envMap&&a.enable(4),D.normalMapObjectSpace&&a.enable(5),D.normalMapTangentSpace&&a.enable(6),D.clearcoat&&a.enable(7),D.iridescence&&a.enable(8),D.alphaTest&&a.enable(9),D.vertexColors&&a.enable(10),D.vertexAlphas&&a.enable(11),D.vertexUv1s&&a.enable(12),D.vertexUv2s&&a.enable(13),D.vertexUv3s&&a.enable(14),D.vertexTangents&&a.enable(15),D.anisotropy&&a.enable(16),D.alphaHash&&a.enable(17),D.batching&&a.enable(18),D.dispersion&&a.enable(19),D.retroreflection&&a.enable(24),D.batchingColor&&a.enable(20),D.gradientMap&&a.enable(21),D.packedNormalMap&&a.enable(22),D.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),D.fog&&a.enable(0),D.useFog&&a.enable(1),D.flatShading&&a.enable(2),D.logarithmicDepthBuffer&&a.enable(3),D.reversedDepthBuffer&&a.enable(4),D.skinning&&a.enable(5),D.morphTargets&&a.enable(6),D.morphNormals&&a.enable(7),D.morphColors&&a.enable(8),D.premultipliedAlpha&&a.enable(9),D.shadowMapEnabled&&a.enable(10),D.doubleSided&&a.enable(11),D.flipSided&&a.enable(12),D.useDepthPacking&&a.enable(13),D.dithering&&a.enable(14),D.transmission&&a.enable(15),D.sheen&&a.enable(16),D.opaque&&a.enable(17),D.pointsUvs&&a.enable(18),D.decodeVideoTexture&&a.enable(19),D.decodeVideoTextureEmissive&&a.enable(20),D.alphaToCoverage&&a.enable(21),D.numLightProbeGrids>0&&a.enable(22),D.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function L(S){const D=d[S.type];let B;if(D){const G=_i[D];B=eS.clone(G.uniforms)}else B=S.uniforms;return B}function y(S,D){let B=u.get(D);return B!==void 0?++B.usedTimes:(B=new UE(n,D,S,r),c.push(B),u.set(D,B)),B}function A(S){if(--S.usedTimes===0){const D=c.indexOf(S);c[D]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function R(S){o.remove(S)}function U(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:L,acquireProgram:y,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:U}}function VE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function HE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function dd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,_,M,m,p){let T=n[e];return T===void 0?(T={id:h.id,object:h,geometry:d,material:_,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:p},n[e]=T):(T.id=h.id,T.object=h,T.geometry=d,T.material=_,T.materialVariant=a(h),T.groupOrder=M,T.renderOrder=h.renderOrder,T.z=m,T.group=p),e++,T}function l(h,d,_,M,m,p,T){T.reversedDepth===!0&&(m=-m);const L=o(h,d,_,M,m,p);_.transmission>0?i.push(L):_.transparent===!0?r.push(L):t.push(L)}function c(h,d,_,M,m,p){const T=o(h,d,_,M,m,p);_.transmission>0?i.unshift(T):_.transparent===!0?r.unshift(T):t.unshift(T)}function u(h,d){t.length>1&&t.sort(h||HE),i.length>1&&i.sort(d||dd),r.length>1&&r.sort(d||dd)}function f(){for(let h=e,d=n.length;h<d;h++){const _=n[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function kE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new pd,n.set(i,[a])):r>=s.length?(a=new pd,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function GE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Y,color:new bt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function WE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let XE=0;function $E(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function qE(n){const e=new GE,t=WE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new kt,a=new kt;function o(c){let u=0,f=0,h=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let d=0,_=0,M=0,m=0,p=0,T=0,L=0,y=0,A=0,R=0,U=0,S=0,D=0,B=0;c.sort($E);for(let K=0,ne=c.length;K<ne;K++){const z=c[K],Z=z.color,le=z.intensity,ee=z.distance;let de=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===qr?de=z.shadow.map.texture:de=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)u+=Z.r*le,f+=Z.g*le,h+=Z.b*le;else if(z.isLightProbe){for(let ue=0;ue<9;ue++)i.probe[ue].addScaledVector(z.sh.coefficients[ue],le);B++}else if(z.isSunLight){const ue=e.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ve=z.shadow,_e=t.get(z);_e.shadowIntensity=ve.intensity,_e.shadowBias=ve.bias,_e.shadowNormalBias=ve.normalBias,_e.shadowRadius=ve.radius,_e.shadowMapSize.copy(ve.mapSize).multiply(ve.getFrameExtents()),i.sunShadow[_]=_e,i.sunShadowMap[_]=de;const Pe=ve.getViewportCount();for(let Xe=0;Xe<Pe;Xe++)i.sunShadowMatrix[M+Xe]=ve.getMatrix(Xe),i.sunShadowCascade[M+Xe]=ve._cascadeData[Xe];M+=Pe,_++}i.sun[d]=ue,d++}else if(z.isDirectionalLight){const ue=e.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ve=z.shadow,_e=t.get(z);_e.shadowIntensity=ve.intensity,_e.shadowBias=ve.bias,_e.shadowNormalBias=ve.normalBias,_e.shadowRadius=ve.radius,_e.shadowMapSize=ve.mapSize,i.directionalShadow[m]=_e,i.directionalShadowMap[m]=de,i.directionalShadowMatrix[m]=z.shadow.matrix,A++}i.directional[m]=ue,m++}else if(z.isSpotLight){const ue=e.get(z);ue.position.setFromMatrixPosition(z.matrixWorld),ue.color.copy(Z).multiplyScalar(le),ue.distance=ee,ue.coneCos=Math.cos(z.angle),ue.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ue.decay=z.decay,i.spot[T]=ue;const ve=z.shadow;if(z.map&&(i.spotLightMap[S]=z.map,S++,ve.updateMatrices(z),z.castShadow&&D++),i.spotLightMatrix[T]=ve.matrix,z.castShadow){const _e=t.get(z);_e.shadowIntensity=ve.intensity,_e.shadowBias=ve.bias,_e.shadowNormalBias=ve.normalBias,_e.shadowRadius=ve.radius,_e.shadowMapSize=ve.mapSize,i.spotShadow[T]=_e,i.spotShadowMap[T]=de,U++}T++}else if(z.isRectAreaLight){const ue=e.get(z);ue.color.copy(Z).multiplyScalar(le),ue.halfWidth.set(z.width*.5,0,0),ue.halfHeight.set(0,z.height*.5,0),i.rectArea[L]=ue,L++}else if(z.isPointLight){const ue=e.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity),ue.distance=z.distance,ue.decay=z.decay,z.castShadow){const ve=z.shadow,_e=t.get(z);_e.shadowIntensity=ve.intensity,_e.shadowBias=ve.bias,_e.shadowNormalBias=ve.normalBias,_e.shadowRadius=ve.radius,_e.shadowMapSize=ve.mapSize,_e.shadowCameraNear=ve.camera.near,_e.shadowCameraFar=ve.camera.far,i.pointShadow[p]=_e,i.pointShadowMap[p]=de,i.pointShadowMatrix[p]=z.shadow.matrix,R++}i.point[p]=ue,p++}else if(z.isHemisphereLight){const ue=e.get(z);ue.skyColor.copy(z.color).multiplyScalar(le),ue.groundColor.copy(z.groundColor).multiplyScalar(le),i.hemi[y]=ue,y++}}L>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=qe.LTC_FLOAT_1,i.rectAreaLTC2=qe.LTC_FLOAT_2):(i.rectAreaLTC1=qe.LTC_HALF_1,i.rectAreaLTC2=qe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const G=i.hash;(G.sunLength!==d||G.directionalLength!==m||G.pointLength!==p||G.spotLength!==T||G.rectAreaLength!==L||G.hemiLength!==y||G.numSunShadows!==_||G.numDirectionalShadows!==A||G.numPointShadows!==R||G.numSpotShadows!==U||G.numSpotMaps!==S||G.numLightProbes!==B)&&(i.sun.length=d,i.directional.length=m,i.spot.length=T,i.rectArea.length=L,i.point.length=p,i.hemi.length=y,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=U,i.spotShadowMap.length=U,i.spotLightMatrix.length=U+S-D,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=B,G.sunLength=d,G.directionalLength=m,G.pointLength=p,G.spotLength=T,G.rectAreaLength=L,G.hemiLength=y,G.numSunShadows=_,G.numDirectionalShadows=A,G.numPointShadows=R,G.numSpotShadows=U,G.numSpotMaps=S,G.numLightProbes=B,i.version=XE++)}function l(c,u){let f=0,h=0,d=0,_=0,M=0,m=0;const p=u.matrixWorldInverse;for(let T=0,L=c.length;T<L;T++){const y=c[T];if(y.isSunLight){const A=i.sun[f];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),f++}else if(y.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),h++}else if(y.isSpotLight){const A=i.spot[_];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),_++}else if(y.isRectAreaLight){const A=i.rectArea[M];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){const A=i.point[d];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const A=i.hemi[m];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function md(n){const e=new qE(n),t=[],i=[],r=[];function s(h){f.camera=h,t.length=0,i.length=0,r.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function YE(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new md(n),e.set(r,[o])):s>=a.length?(o=new md(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const KE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,JE=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],jE=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],gd=new kt,Xs=new Y,vc=new Y;function QE(n,e,t){let i=new nh;const r=new Fe,s=new Fe,a=new Xt,o=new sS,l=new aS,c={},u=t.maxTextureSize,f={[Xr]:Fn,[Fn]:Xr,[ni]:ni},h=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:KE,fragmentShader:ZE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new fn;_.setAttribute("position",new Qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new vn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ro;let p=this.type;this.render=function(R,U,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===l0&&(ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ro);const D=n.getRenderTarget(),B=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),K=n.state;K.setBlending(Ji),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ne=p!==this.type;ne&&U.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(Z=>Z.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,Z=R.length;z<Z;z++){const le=R[z],ee=le.shadow;if(ee===void 0){ut("WebGLShadowMap:",le,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;r.copy(ee.mapSize);const de=ee.getFrameExtents();r.multiply(de),s.copy(ee.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,ee.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,ee.mapSize.y=s.y));const ue=n.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=ue,ee.map===null||ne===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===Ks){if(le.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new ai(r.x,r.y,{format:qr,type:wi,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),ee.map.texture.name=le.name+".shadowMap",ee.map.depthTexture=new Ea(r.x,r.y,Si),ee.map.depthTexture.name=le.name+".shadowMapDepth",ee.map.depthTexture.format=sr,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=un,ee.map.depthTexture.magFilter=un}else le.isPointLight?(ee.map=new gm(r.x),ee.map.depthTexture=new _x(r.x,Ai)):(ee.map=new ai(r.x,r.y),ee.map.depthTexture=new Ea(r.x,r.y,Ai)),ee.map.depthTexture.name=le.name+".shadowMap",ee.map.depthTexture.format=sr,this.type===Ro?(ee.map.depthTexture.compareFunction=ue?Qu:ju,ee.map.depthTexture.minFilter=Sn,ee.map.depthTexture.magFilter=Sn):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=un,ee.map.depthTexture.magFilter=un);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==r.x||ee.map.height!==r.y)&&ee.map.setSize(r.x,r.y);const ve=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();le.isPointLight!==!0&&ee.updateMatrices(le,S);for(let _e=0;_e<ve;_e++){const Pe=ee.getCamera(_e);if(le.isPointLight){const Xe=ee.camera,rt=ee.matrix,ot=le.distance||Xe.far;ot!==Xe.far&&(Xe.far=ot,Xe.updateProjectionMatrix()),Xs.setFromMatrixPosition(le.matrixWorld),Xe.position.copy(Xs),vc.copy(Xe.position),vc.add(JE[_e]),Xe.up.copy(jE[_e]),Xe.lookAt(vc),Xe.updateMatrixWorld(),rt.makeTranslation(-Xs.x,-Xs.y,-Xs.z),gd.multiplyMatrices(Xe.projectionMatrix,Xe.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(gd,Xe.coordinateSystem,Xe.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)n.setRenderTarget(ee.map,_e),n.clear();else{_e===0&&(n.setRenderTarget(ee.map),n.clear());const Xe=ee.getViewport(_e);a.set(s.x*Xe.x,s.y*Xe.y,s.x*Xe.z,s.y*Xe.w),K.viewport(a)}i=ee.getFrustum(_e),y(U,S,Pe,le,this.type)}ee.isPointLightShadow!==!0&&this.type===Ks&&T(ee,S),ee.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(D,B,G)};function T(R,U){const S=e.update(M);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null?R.mapPass=new ai(r.x,r.y,{format:qr,type:wi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value.set(R.map.width,R.map.height),h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(U,null,S,h,M,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(U,null,S,d,M,null)}function L(R,U,S,D){let B=null;const G=S.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(G!==void 0)B=G;else if(B=S.isPointLight===!0?l:o,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const K=B.uuid,ne=U.uuid;let z=c[K];z===void 0&&(z={},c[K]=z);let Z=z[ne];Z===void 0&&(Z=B.clone(),z[ne]=Z,U.addEventListener("dispose",A)),B=Z}if(B.visible=U.visible,B.wireframe=U.wireframe,D===Ks?B.side=U.shadowSide!==null?U.shadowSide:U.side:B.side=U.shadowSide!==null?U.shadowSide:f[U.side],B.alphaMap=U.alphaMap,B.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,B.map=U.map,B.clipShadows=U.clipShadows,B.clippingPlanes=U.clippingPlanes,B.clipIntersection=U.clipIntersection,B.displacementMap=U.displacementMap,B.displacementScale=U.displacementScale,B.displacementBias=U.displacementBias,B.wireframeLinewidth=U.wireframeLinewidth,B.linewidth=U.linewidth,S.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const K=n.properties.get(B);K.light=S}return B}function y(R,U,S,D,B){if(R.visible===!1)return;if(R.layers.test(U.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&B===Ks)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,R.matrixWorld);const ne=e.update(R),z=R.material;if(Array.isArray(z)){const Z=ne.groups;for(let le=0,ee=Z.length;le<ee;le++){const de=Z[le],ue=z[de.materialIndex];if(ue&&ue.visible){const ve=L(R,ue,D,B);R.onBeforeShadow(n,R,U,S,ne,ve,de),n.renderBufferDirect(S,null,ne,ve,R,de),R.onAfterShadow(n,R,U,S,ne,ve,de)}}}else if(z.visible){const Z=L(R,z,D,B);R.onBeforeShadow(n,R,U,S,ne,Z,null),n.renderBufferDirect(S,null,ne,Z,R,null),R.onAfterShadow(n,R,U,S,ne,Z,null)}}const K=R.children;for(let ne=0,z=K.length;ne<z;ne++)y(K[ne],U,S,D,B)}function A(R){R.target.removeEventListener("dispose",A);for(const S in c){const D=c[S],B=R.target.uuid;B in D&&(D[B].dispose(),delete D[B])}}}function eT(n,e){function t(){let X=!1;const Ve=new Xt;let ye=null;const He=new Xt(0,0,0,0);return{setMask:function(be){ye!==be&&!X&&(n.colorMask(be,be,be,be),ye=be)},setLocked:function(be){X=be},setClear:function(be,Te,Ge,je,j){j===!0&&(be*=je,Te*=je,Ge*=je),Ve.set(be,Te,Ge,je),He.equals(Ve)===!1&&(n.clearColor(be,Te,Ge,je),He.copy(Ve))},reset:function(){X=!1,ye=null,He.set(-1,0,0,0)}}}function i(){let X=!1,Ve=!1,ye=null,He=null,be=null;return{setReversed:function(Te){if(Ve!==Te){const Ge=e.get("EXT_clip_control");Te?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ve=Te;const je=be;be=null,this.setClear(je)}},getReversed:function(){return Ve},setTest:function(Te){Te?ce(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(Te){ye!==Te&&!X&&(n.depthMask(Te),ye=Te)},setFunc:function(Te){if(Ve&&(Te=G0[Te]),He!==Te){switch(Te){case Nc:n.depthFunc(n.NEVER);break;case Fc:n.depthFunc(n.ALWAYS);break;case Oc:n.depthFunc(n.LESS);break;case Sa:n.depthFunc(n.LEQUAL);break;case Bc:n.depthFunc(n.EQUAL);break;case zc:n.depthFunc(n.GEQUAL);break;case Vc:n.depthFunc(n.GREATER);break;case Hc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}He=Te}},setLocked:function(Te){X=Te},setClear:function(Te){be!==Te&&(be=Te,Ve&&(Te=1-Te),n.clearDepth(Te))},reset:function(){X=!1,ye=null,He=null,be=null,Ve=!1}}}function r(){let X=!1,Ve=null,ye=null,He=null,be=null,Te=null,Ge=null,je=null,j=null;return{setTest:function(w){X||(w?ce(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(w){Ve!==w&&!X&&(n.stencilMask(w),Ve=w)},setFunc:function(w,se,et){(ye!==w||He!==se||be!==et)&&(n.stencilFunc(w,se,et),ye=w,He=se,be=et)},setOp:function(w,se,et){(Te!==w||Ge!==se||je!==et)&&(n.stencilOp(w,se,et),Te=w,Ge=se,je=et)},setLocked:function(w){X=w},setClear:function(w){j!==w&&(n.clearStencil(w),j=w)},reset:function(){X=!1,Ve=null,ye=null,He=null,be=null,Te=null,Ge=null,je=null,j=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,_=[],M=null,m=!1,p=null,T=null,L=null,y=null,A=null,R=null,U=null,S=new bt(0,0,0),D=0,B=!1,G=null,K=null,ne=null,z=null,Z=null;const le=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,de=0;const ue=n.getParameter(n.VERSION);ue.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(ue)[1]),ee=de>=1):ue.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),ee=de>=2);let ve=null,_e={};const Pe=n.getParameter(n.SCISSOR_BOX),Xe=n.getParameter(n.VIEWPORT),rt=new Xt().fromArray(Pe),ot=new Xt().fromArray(Xe);function lt(X,Ve,ye,He){const be=new Uint8Array(4),Te=n.createTexture();n.bindTexture(X,Te),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<ye;Ge++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Ve,0,n.RGBA,1,1,He,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Ve+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return Te}const me={};me[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(n.DEPTH_TEST),a.setFunc(Sa),k(!1),te(lf),ce(n.CULL_FACE),W(Ji);function ce(X){u[X]!==!0&&(n.enable(X),u[X]=!0)}function we(X){u[X]!==!1&&(n.disable(X),u[X]=!1)}function Ke(X,Ve){return h[X]!==Ve?(n.bindFramebuffer(X,Ve),h[X]=Ve,X===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ve),X===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ve),!0):!1}function Oe(X,Ve){let ye=_,He=!1;if(X){ye=d.get(Ve),ye===void 0&&(ye=[],d.set(Ve,ye));const be=X.textures;if(ye.length!==be.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,Ge=be.length;Te<Ge;Te++)ye[Te]=n.COLOR_ATTACHMENT0+Te;ye.length=be.length,He=!0}}else ye[0]!==n.BACK&&(ye[0]=n.BACK,He=!0);He&&n.drawBuffers(ye)}function C(X){return M!==X?(n.useProgram(X),M=X,!0):!1}const O={[fs]:n.FUNC_ADD,[u0]:n.FUNC_SUBTRACT,[h0]:n.FUNC_REVERSE_SUBTRACT};O[f0]=n.MIN,O[d0]=n.MAX;const N={[p0]:n.ZERO,[m0]:n.ONE,[g0]:n.SRC_COLOR,[Lp]:n.SRC_ALPHA,[M0]:n.SRC_ALPHA_SATURATE,[S0]:n.DST_COLOR,[v0]:n.DST_ALPHA,[_0]:n.ONE_MINUS_SRC_COLOR,[Dp]:n.ONE_MINUS_SRC_ALPHA,[y0]:n.ONE_MINUS_DST_COLOR,[x0]:n.ONE_MINUS_DST_ALPHA,[b0]:n.CONSTANT_COLOR,[E0]:n.ONE_MINUS_CONSTANT_COLOR,[T0]:n.CONSTANT_ALPHA,[A0]:n.ONE_MINUS_CONSTANT_ALPHA};function W(X,Ve,ye,He,be,Te,Ge,je,j,w){if(X===Ji){m===!0&&(we(n.BLEND),m=!1);return}if(m===!1&&(ce(n.BLEND),m=!0),X!==c0){if(X!==p||w!==B){if((T!==fs||A!==fs)&&(n.blendEquation(n.FUNC_ADD),T=fs,A=fs),w)switch(X){case sa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cf:n.blendFunc(n.ONE,n.ONE);break;case uf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",X);break}else switch(X){case sa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case uf:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hf:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",X);break}L=null,y=null,R=null,U=null,S.set(0,0,0),D=0,p=X,B=w}return}be=be||Ve,Te=Te||ye,Ge=Ge||He,(Ve!==T||be!==A)&&(n.blendEquationSeparate(O[Ve],O[be]),T=Ve,A=be),(ye!==L||He!==y||Te!==R||Ge!==U)&&(n.blendFuncSeparate(N[ye],N[He],N[Te],N[Ge]),L=ye,y=He,R=Te,U=Ge),(je.equals(S)===!1||j!==D)&&(n.blendColor(je.r,je.g,je.b,j),S.copy(je),D=j),p=X,B=!1}function H(X,Ve){X.side===ni?we(n.CULL_FACE):ce(n.CULL_FACE);let ye=X.side===Fn;Ve&&(ye=!ye),k(ye),X.blending===sa&&X.transparent===!1?W(Ji):W(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),s.setMask(X.colorWrite);const He=X.stencilWrite;o.setTest(He),He&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),he(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function k(X){G!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),G=X)}function te(X){X!==a0?(ce(n.CULL_FACE),X!==K&&(X===lf?n.cullFace(n.BACK):X===o0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),K=X}function pe(X){X!==ne&&(ee&&n.lineWidth(X),ne=X)}function he(X,Ve,ye){X?(ce(n.POLYGON_OFFSET_FILL),(z!==Ve||Z!==ye)&&(z=Ve,Z=ye,a.getReversed()&&(Ve=-Ve),n.polygonOffset(Ve,ye))):we(n.POLYGON_OFFSET_FILL)}function re(X){X?ce(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function Me(X){X===void 0&&(X=n.TEXTURE0+le-1),ve!==X&&(n.activeTexture(X),ve=X)}function P(X,Ve,ye){ye===void 0&&(ve===null?ye=n.TEXTURE0+le-1:ye=ve);let He=_e[ye];He===void 0&&(He={type:void 0,texture:void 0},_e[ye]=He),(He.type!==X||He.texture!==Ve)&&(ve!==ye&&(n.activeTexture(ye),ve=ye),n.bindTexture(X,Ve||me[X]),He.type=X,He.texture=Ve)}function Le(){const X=_e[ve];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Ie(){try{n.compressedTexImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function g(){try{n.texSubImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function F(){try{n.texSubImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function ie(){try{n.compressedTexSubImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function Re(){try{n.texStorage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function De(){try{n.texStorage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function ge(){try{n.texImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function xe(){try{n.texImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function Ce(X){return f[X]!==void 0?f[X]:n.getParameter(X)}function Ne(X,Ve){f[X]!==Ve&&(n.pixelStorei(X,Ve),f[X]=Ve)}function Be(X){rt.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),rt.copy(X))}function ze(X){ot.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),ot.copy(X))}function nt(X,Ve){let ye=c.get(Ve);ye===void 0&&(ye=new WeakMap,c.set(Ve,ye));let He=ye.get(X);He===void 0&&(He=n.getUniformBlockIndex(Ve,X.name),ye.set(X,He))}function it(X,Ve){const He=c.get(Ve).get(X);l.get(Ve)!==He&&(n.uniformBlockBinding(Ve,He,X.__bindingPointIndex),l.set(Ve,He))}function ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},ve=null,_e={},h={},d=new WeakMap,_=[],M=null,m=!1,p=null,T=null,L=null,y=null,A=null,R=null,U=null,S=new bt(0,0,0),D=0,B=!1,G=null,K=null,ne=null,z=null,Z=null,rt.set(0,0,n.canvas.width,n.canvas.height),ot.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ce,disable:we,bindFramebuffer:Ke,drawBuffers:Oe,useProgram:C,setBlending:W,setMaterial:H,setFlipSided:k,setCullFace:te,setLineWidth:pe,setPolygonOffset:he,setScissorTest:re,activeTexture:Me,bindTexture:P,unbindTexture:Le,compressedTexImage2D:Ie,compressedTexImage3D:E,texImage2D:ge,texImage3D:xe,pixelStorei:Ne,getParameter:Ce,updateUBOMapping:nt,uniformBlockBinding:it,texStorage2D:Re,texStorage3D:De,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:J,compressedTexSubImage3D:ie,scissor:Be,viewport:ze,reset:ht}}function tT(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,g){return _?new OffscreenCanvas(E,g):qo("canvas")}function m(E,g,F){let J=1;const ie=Ie(E);if((ie.width>F||ie.height>F)&&(J=F/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Re=Math.floor(J*ie.width),De=Math.floor(J*ie.height);h===void 0&&(h=M(Re,De));const ge=g?M(Re,De):h;return ge.width=Re,ge.height=De,ge.getContext("2d").drawImage(E,0,0,Re,De),ut("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Re+"x"+De+")."),ge}else return"data"in E&&ut("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),E;return E}function p(E){return E.generateMipmaps}function T(E){n.generateMipmap(E)}function L(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(E,g,F,J,ie,Re=!1){if(E!==null){if(n[E]!==void 0)return n[E];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let De;J&&(De=e.get("EXT_texture_norm16"),De||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=g;if(g===n.RED&&(F===n.FLOAT&&(ge=n.R32F),F===n.HALF_FLOAT&&(ge=n.R16F),F===n.UNSIGNED_BYTE&&(ge=n.R8),F===n.UNSIGNED_SHORT&&De&&(ge=De.R16_EXT),F===n.SHORT&&De&&(ge=De.R16_SNORM_EXT)),g===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(ge=n.R8UI),F===n.UNSIGNED_SHORT&&(ge=n.R16UI),F===n.UNSIGNED_INT&&(ge=n.R32UI),F===n.BYTE&&(ge=n.R8I),F===n.SHORT&&(ge=n.R16I),F===n.INT&&(ge=n.R32I)),g===n.RG&&(F===n.FLOAT&&(ge=n.RG32F),F===n.HALF_FLOAT&&(ge=n.RG16F),F===n.UNSIGNED_BYTE&&(ge=n.RG8),F===n.UNSIGNED_SHORT&&De&&(ge=De.RG16_EXT),F===n.SHORT&&De&&(ge=De.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(ge=n.RG8UI),F===n.UNSIGNED_SHORT&&(ge=n.RG16UI),F===n.UNSIGNED_INT&&(ge=n.RG32UI),F===n.BYTE&&(ge=n.RG8I),F===n.SHORT&&(ge=n.RG16I),F===n.INT&&(ge=n.RG32I)),g===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(ge=n.RGB8UI),F===n.UNSIGNED_SHORT&&(ge=n.RGB16UI),F===n.UNSIGNED_INT&&(ge=n.RGB32UI),F===n.BYTE&&(ge=n.RGB8I),F===n.SHORT&&(ge=n.RGB16I),F===n.INT&&(ge=n.RGB32I)),g===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(ge=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(ge=n.RGBA16UI),F===n.UNSIGNED_INT&&(ge=n.RGBA32UI),F===n.BYTE&&(ge=n.RGBA8I),F===n.SHORT&&(ge=n.RGBA16I),F===n.INT&&(ge=n.RGBA32I)),g===n.RGB&&(F===n.UNSIGNED_SHORT&&De&&(ge=De.RGB16_EXT),F===n.SHORT&&De&&(ge=De.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(ge=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(ge=n.R11F_G11F_B10F)),g===n.RGBA){const xe=Re?$o:Mt.getTransfer(ie);F===n.FLOAT&&(ge=n.RGBA32F),F===n.HALF_FLOAT&&(ge=n.RGBA16F),F===n.UNSIGNED_BYTE&&(ge=xe===Nt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&De&&(ge=De.RGBA16_EXT),F===n.SHORT&&De&&(ge=De.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(ge=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(ge=n.RGB5_A1)}return(ge===n.R16F||ge===n.R32F||ge===n.RG16F||ge===n.RG32F||ge===n.RGBA16F||ge===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function A(E,g){let F;return E?g===null||g===Ai||g===Ma?F=n.DEPTH24_STENCIL8:g===Si?F=n.DEPTH32F_STENCIL8:g===ya&&(F=n.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ai||g===Ma?F=n.DEPTH_COMPONENT24:g===Si?F=n.DEPTH_COMPONENT32F:g===ya&&(F=n.DEPTH_COMPONENT16),F}function R(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==un&&E.minFilter!==Sn?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function U(E){const g=E.target;g.removeEventListener("dispose",U),D(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function S(E){const g=E.target;g.removeEventListener("dispose",S),G(g)}function D(E){const g=i.get(E);if(g.__webglInit===void 0)return;const F=E.source,J=d.get(F);if(J){const ie=J[g.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&B(E),Object.keys(J).length===0&&d.delete(F)}i.remove(E)}function B(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const F=E.source,J=d.get(F);delete J[g.__cacheKey],a.memory.textures--}function G(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(g.__webglFramebuffer[J]))for(let ie=0;ie<g.__webglFramebuffer[J].length;ie++)n.deleteFramebuffer(g.__webglFramebuffer[J][ie]);else n.deleteFramebuffer(g.__webglFramebuffer[J]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[J])}else{if(Array.isArray(g.__webglFramebuffer))for(let J=0;J<g.__webglFramebuffer.length;J++)n.deleteFramebuffer(g.__webglFramebuffer[J]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let J=0;J<g.__webglColorRenderbuffer.length;J++)g.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[J]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=E.textures;for(let J=0,ie=F.length;J<ie;J++){const Re=i.get(F[J]);Re.__webglTexture&&(n.deleteTexture(Re.__webglTexture),a.memory.textures--),i.remove(F[J])}i.remove(E)}let K=0;function ne(){K=0}function z(){return K}function Z(E){K=E}function le(){const E=K;return E>=r.maxTextures&&ut("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+r.maxTextures),K+=1,E}function ee(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function de(E,g){const F=i.get(E);if(E.isVideoTexture&&P(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){const J=E.image;if(J===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{we(F,E,g);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+g)}function ue(E,g){const F=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){we(F,E,g);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+g)}function ve(E,g){const F=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){we(F,E,g);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+g)}function _e(E,g){const F=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&F.__version!==E.version){Ke(F,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+g)}const Pe={[kc]:n.REPEAT,[qi]:n.CLAMP_TO_EDGE,[Gc]:n.MIRRORED_REPEAT},Xe={[un]:n.NEAREST,[C0]:n.NEAREST_MIPMAP_NEAREST,[Ya]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Bl]:n.LINEAR_MIPMAP_NEAREST,[Vr]:n.LINEAR_MIPMAP_LINEAR},rt={[I0]:n.NEVER,[B0]:n.ALWAYS,[U0]:n.LESS,[ju]:n.LEQUAL,[N0]:n.EQUAL,[Qu]:n.GEQUAL,[F0]:n.GREATER,[O0]:n.NOTEQUAL};function ot(E,g){if(g.type===Si&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Sn||g.magFilter===Bl||g.magFilter===Ya||g.magFilter===Vr||g.minFilter===Sn||g.minFilter===Bl||g.minFilter===Ya||g.minFilter===Vr)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Pe[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Pe[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Pe[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Xe[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Xe[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,rt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===un||g.minFilter!==Ya&&g.minFilter!==Vr||g.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function lt(E,g){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",U));const J=g.source;let ie=d.get(J);ie===void 0&&(ie={},d.set(J,ie));const Re=ee(g);if(Re!==E.__cacheKey){ie[Re]===void 0&&(ie[Re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ie[Re].usedTimes++;const De=ie[E.__cacheKey];De!==void 0&&(ie[E.__cacheKey].usedTimes--,De.usedTimes===0&&B(g)),E.__cacheKey=Re,E.__webglTexture=ie[Re].texture}return F}function me(E,g,F){return Math.floor(Math.floor(E/F)/g)}function ce(E,g,F,J){const Re=E.updateRanges;if(Re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,F,J,g.data);else{Re.sort((Ne,Be)=>Ne.start-Be.start);let De=0;for(let Ne=1;Ne<Re.length;Ne++){const Be=Re[De],ze=Re[Ne],nt=Be.start+Be.count,it=me(ze.start,g.width,4),ht=me(Be.start,g.width,4);ze.start<=nt+1&&it===ht&&me(ze.start+ze.count-1,g.width,4)===it?Be.count=Math.max(Be.count,ze.start+ze.count-Be.start):(++De,Re[De]=ze)}Re.length=De+1;const ge=t.getParameter(n.UNPACK_ROW_LENGTH),xe=t.getParameter(n.UNPACK_SKIP_PIXELS),Ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Ne=0,Be=Re.length;Ne<Be;Ne++){const ze=Re[Ne],nt=Math.floor(ze.start/4),it=Math.ceil(ze.count/4),ht=nt%g.width,X=Math.floor(nt/g.width),Ve=it,ye=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ht),t.pixelStorei(n.UNPACK_SKIP_ROWS,X),t.texSubImage2D(n.TEXTURE_2D,0,ht,X,Ve,ye,F,J,g.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ge),t.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function we(E,g,F){let J=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(J=n.TEXTURE_3D);const ie=lt(E,g),Re=g.source;t.bindTexture(J,E.__webglTexture,n.TEXTURE0+F);const De=i.get(Re);if(Re.version!==De.__version||ie===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const ye=Mt.getPrimaries(Mt.workingColorSpace),He=g.colorSpace===Sr?null:Mt.getPrimaries(g.colorSpace),be=g.colorSpace===Sr||ye===He?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let xe=m(g.image,!1,r.maxTextureSize);xe=Le(g,xe);const Ce=s.convert(g.format,g.colorSpace),Ne=s.convert(g.type);let Be=y(g.internalFormat,Ce,Ne,g.normalized,g.colorSpace,g.isVideoTexture);ot(J,g);let ze;const nt=g.mipmaps,it=g.isVideoTexture!==!0,ht=De.__version===void 0||ie===!0,X=Re.dataReady,Ve=R(g,xe);if(g.isDepthTexture)Be=A(g.format===Hr,g.type),ht&&(it?t.texStorage2D(n.TEXTURE_2D,1,Be,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,Be,xe.width,xe.height,0,Ce,Ne,null));else if(g.isDataTexture)if(nt.length>0){it&&ht&&t.texStorage2D(n.TEXTURE_2D,Ve,Be,nt[0].width,nt[0].height);for(let ye=0,He=nt.length;ye<He;ye++)ze=nt[ye],it?X&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,ze.width,ze.height,Ce,Ne,ze.data):t.texImage2D(n.TEXTURE_2D,ye,Be,ze.width,ze.height,0,Ce,Ne,ze.data);g.generateMipmaps=!1}else it?(ht&&t.texStorage2D(n.TEXTURE_2D,Ve,Be,xe.width,xe.height),X&&ce(g,xe,Ce,Ne)):t.texImage2D(n.TEXTURE_2D,0,Be,xe.width,xe.height,0,Ce,Ne,xe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){it&&ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,Be,nt[0].width,nt[0].height,xe.depth);for(let ye=0,He=nt.length;ye<He;ye++)if(ze=nt[ye],g.format!==ii)if(Ce!==null)if(it){if(X)if(g.layerUpdates.size>0){const be=Yf(ze.width,ze.height,g.format,g.type);for(const Te of g.layerUpdates){const Ge=ze.data.subarray(Te*be/ze.data.BYTES_PER_ELEMENT,(Te+1)*be/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,Te,ze.width,ze.height,1,Ce,Ge)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,ze.width,ze.height,xe.depth,Ce,ze.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,Be,ze.width,ze.height,xe.depth,0,ze.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,ze.width,ze.height,xe.depth,Ce,Ne,ze.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,Be,ze.width,ze.height,xe.depth,0,Ce,Ne,ze.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{it&&ht&&t.texStorage2D(n.TEXTURE_2D,Ve,Be,nt[0].width,nt[0].height);for(let ye=0,He=nt.length;ye<He;ye++)ze=nt[ye],g.format!==ii?Ce!==null?it?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,ze.width,ze.height,Ce,ze.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,Be,ze.width,ze.height,0,ze.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?X&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,ze.width,ze.height,Ce,Ne,ze.data):t.texImage2D(n.TEXTURE_2D,ye,Be,ze.width,ze.height,0,Ce,Ne,ze.data)}else if(g.isDataArrayTexture)if(it){if(ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,Be,xe.width,xe.height,xe.depth),X)if(g.layerUpdates.size>0){const ye=Yf(xe.width,xe.height,g.format,g.type);for(const He of g.layerUpdates){const be=xe.data.subarray(He*ye/xe.data.BYTES_PER_ELEMENT,(He+1)*ye/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,He,xe.width,xe.height,1,Ce,Ne,be)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ce,Ne,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,xe.width,xe.height,xe.depth,0,Ce,Ne,xe.data);else if(g.isData3DTexture)it?(ht&&t.texStorage3D(n.TEXTURE_3D,Ve,Be,xe.width,xe.height,xe.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ce,Ne,xe.data)):t.texImage3D(n.TEXTURE_3D,0,Be,xe.width,xe.height,xe.depth,0,Ce,Ne,xe.data);else if(g.isFramebufferTexture){if(ht)if(it)t.texStorage2D(n.TEXTURE_2D,Ve,Be,xe.width,xe.height);else{let ye=xe.width,He=xe.height;for(let be=0;be<Ve;be++)t.texImage2D(n.TEXTURE_2D,be,Be,ye,He,0,Ce,Ne,null),ye>>=1,He>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const ye=n.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),xe.parentNode!==ye){ye.appendChild(xe),f.add(g),ye.onpaint=He=>{const be=He.changedElements;for(const Te of f)be.includes(Te.image)&&(Te.needsUpdate=!0)},ye.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,xe);else{const be=n.RGBA,Te=n.RGBA,Ge=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,be,Te,Ge,xe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(nt.length>0){if(it&&ht){const ye=Ie(nt[0]);t.texStorage2D(n.TEXTURE_2D,Ve,Be,ye.width,ye.height)}for(let ye=0,He=nt.length;ye<He;ye++)ze=nt[ye],it?X&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Ce,Ne,ze):t.texImage2D(n.TEXTURE_2D,ye,Be,Ce,Ne,ze);g.generateMipmaps=!1}else if(it){if(ht){const ye=Ie(xe);t.texStorage2D(n.TEXTURE_2D,Ve,Be,ye.width,ye.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,Ne,xe)}else t.texImage2D(n.TEXTURE_2D,0,Be,Ce,Ne,xe);p(g)&&T(J),De.__version=Re.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Ke(E,g,F){if(g.image.length!==6)return;const J=lt(E,g),ie=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);const Re=i.get(ie);if(ie.version!==Re.__version||J===!0){t.activeTexture(n.TEXTURE0+F);const De=Mt.getPrimaries(Mt.workingColorSpace),ge=g.colorSpace===Sr?null:Mt.getPrimaries(g.colorSpace),xe=g.colorSpace===Sr||De===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ce=g.isCompressedTexture||g.image[0].isCompressedTexture,Ne=g.image[0]&&g.image[0].isDataTexture,Be=[];for(let Te=0;Te<6;Te++)!Ce&&!Ne?Be[Te]=m(g.image[Te],!0,r.maxCubemapSize):Be[Te]=Ne?g.image[Te].image:g.image[Te],Be[Te]=Le(g,Be[Te]);const ze=Be[0],nt=s.convert(g.format,g.colorSpace),it=s.convert(g.type),ht=y(g.internalFormat,nt,it,g.normalized,g.colorSpace),X=g.isVideoTexture!==!0,Ve=Re.__version===void 0||J===!0,ye=ie.dataReady;let He=R(g,ze);ot(n.TEXTURE_CUBE_MAP,g);let be;if(Ce){X&&Ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,He,ht,ze.width,ze.height);for(let Te=0;Te<6;Te++){be=Be[Te].mipmaps;for(let Ge=0;Ge<be.length;Ge++){const je=be[Ge];g.format!==ii?nt!==null?X?ye&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ge,0,0,je.width,je.height,nt,je.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ge,ht,je.width,je.height,0,je.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ge,0,0,je.width,je.height,nt,it,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ge,ht,je.width,je.height,0,nt,it,je.data)}}}else{if(be=g.mipmaps,X&&Ve){be.length>0&&He++;const Te=Ie(Be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,He,ht,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(Ne){X?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Be[Te].width,Be[Te].height,nt,it,Be[Te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ht,Be[Te].width,Be[Te].height,0,nt,it,Be[Te].data);for(let Ge=0;Ge<be.length;Ge++){const j=be[Ge].image[Te].image;X?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ge+1,0,0,j.width,j.height,nt,it,j.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ge+1,ht,j.width,j.height,0,nt,it,j.data)}}else{X?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,nt,it,Be[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ht,nt,it,Be[Te]);for(let Ge=0;Ge<be.length;Ge++){const je=be[Ge];X?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ge+1,0,0,nt,it,je.image[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ge+1,ht,nt,it,je.image[Te])}}}p(g)&&T(n.TEXTURE_CUBE_MAP),Re.__version=ie.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Oe(E,g,F,J,ie,Re){const De=s.convert(F.format,F.colorSpace),ge=s.convert(F.type),xe=y(F.internalFormat,De,ge,F.normalized,F.colorSpace),Ce=i.get(g),Ne=i.get(F);if(Ne.__renderTarget=g,!Ce.__hasExternalTextures){const Be=Math.max(1,g.width>>Re),ze=Math.max(1,g.height>>Re);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,Re,xe,Be,ze,g.depth,0,De,ge,null):t.texImage2D(ie,Re,xe,Be,ze,0,De,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Me(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ie,Ne.__webglTexture,0,re(g)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ie,Ne.__webglTexture,Re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(E,g,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const J=g.depthTexture,ie=J&&J.isDepthTexture?J.type:null,Re=A(g.stencilBuffer,ie),De=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Me(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re(g),Re,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,re(g),Re,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Re,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,E)}else{const J=g.textures;for(let ie=0;ie<J.length;ie++){const Re=J[ie],De=s.convert(Re.format,Re.colorSpace),ge=s.convert(Re.type),xe=y(Re.internalFormat,De,ge,Re.normalized,Re.colorSpace);Me(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re(g),xe,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,re(g),xe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,xe,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function O(E,g,F){const J=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ie=i.get(g.depthTexture);if(ie.__renderTarget=g,(!ie.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),J){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,g.depthTexture.addEventListener("dispose",U)),ie.__webglTexture===void 0){ie.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),ot(n.TEXTURE_CUBE_MAP,g.depthTexture);const Ce=s.convert(g.depthTexture.format),Ne=s.convert(g.depthTexture.type);let Be;g.depthTexture.format===sr?Be=n.DEPTH_COMPONENT24:g.depthTexture.format===Hr&&(Be=n.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Be,g.width,g.height,0,Ce,Ne,null)}}else de(g.depthTexture,0);const Re=ie.__webglTexture,De=re(g),ge=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,xe=g.depthTexture.format===Hr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===sr)Me(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ge,Re,0,De):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ge,Re,0);else if(g.depthTexture.format===Hr)Me(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ge,Re,0,De):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ge,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function N(E){const g=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const J=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),J){const ie=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,J.removeEventListener("dispose",ie)};J.addEventListener("dispose",ie),g.__depthDisposeCallback=ie}g.__boundDepthTexture=J}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let J=0;J<6;J++)O(g.__webglFramebuffer[J],E,J);else{const J=E.texture.mipmaps;J&&J.length>0?O(g.__webglFramebuffer[0],E,0):O(g.__webglFramebuffer,E,0)}else if(F){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]===void 0)g.__webglDepthbuffer[J]=n.createRenderbuffer(),C(g.__webglDepthbuffer[J],E,!1);else{const ie=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=g.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Re),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Re)}}else{const J=E.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),C(g.__webglDepthbuffer,E,!1);else{const ie=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Re),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function W(E,g,F){const J=i.get(E);g!==void 0&&Oe(J.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&N(E)}function H(E){const g=E.texture,F=i.get(E),J=i.get(g);E.addEventListener("dispose",S);const ie=E.textures,Re=E.isWebGLCubeRenderTarget===!0,De=ie.length>1;if(De||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=g.version,a.memory.textures++),Re){F.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[ge]=[];for(let xe=0;xe<g.mipmaps.length;xe++)F.__webglFramebuffer[ge][xe]=n.createFramebuffer()}else F.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let ge=0;ge<g.mipmaps.length;ge++)F.__webglFramebuffer[ge]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(De)for(let ge=0,xe=ie.length;ge<xe;ge++){const Ce=i.get(ie[ge]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Me(E)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ge=0;ge<ie.length;ge++){const xe=ie[ge];F.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ge]);const Ce=s.convert(xe.format,xe.colorSpace),Ne=s.convert(xe.type),Be=y(xe.internalFormat,Ce,Ne,xe.normalized,xe.colorSpace,E.isXRRenderTarget===!0),ze=re(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Be,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,F.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),C(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Re){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ot(n.TEXTURE_CUBE_MAP,g);for(let ge=0;ge<6;ge++)if(g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)Oe(F.__webglFramebuffer[ge][xe],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,xe);else Oe(F.__webglFramebuffer[ge],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);p(g)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let ge=0,xe=ie.length;ge<xe;ge++){const Ce=ie[ge],Ne=i.get(Ce);let Be=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Be=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Be,Ne.__webglTexture),ot(Be,Ce),Oe(F.__webglFramebuffer,E,Ce,n.COLOR_ATTACHMENT0+ge,Be,0),p(Ce)&&T(Be)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ge=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,J.__webglTexture),ot(ge,g),g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)Oe(F.__webglFramebuffer[xe],E,g,n.COLOR_ATTACHMENT0,ge,xe);else Oe(F.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,ge,0);p(g)&&T(ge),t.unbindTexture()}E.depthBuffer&&N(E)}function k(E){const g=E.textures;for(let F=0,J=g.length;F<J;F++){const ie=g[F];if(p(ie)){const Re=L(E),De=i.get(ie).__webglTexture;t.bindTexture(Re,De),T(Re),t.unbindTexture()}}}const te=[],pe=[];function he(E){if(E.samples>0){if(Me(E)===!1){const g=E.textures,F=E.width,J=E.height;let ie=n.COLOR_BUFFER_BIT;const Re=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(E),ge=g.length>1;if(ge)for(let Ce=0;Ce<g.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const xe=E.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ce=0;Ce<g.length;Ce++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ce]);const Ne=i.get(g[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,F,J,0,0,F,J,ie,n.NEAREST),l===!0&&(te.length=0,pe.length=0,te.push(n.COLOR_ATTACHMENT0+Ce),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(te.push(Re),pe.push(Re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,pe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Ce=0;Ce<g.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ce]);const Ne=i.get(g[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function re(E){return Math.min(r.maxSamples,E.samples)}function Me(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function P(E){const g=a.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function Le(E,g){const F=E.colorSpace,J=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Xo&&F!==Sr&&(Mt.getTransfer(F)===Nt?(J!==ii||ie!==zn)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",F)),g}function Ie(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=le,this.resetTextureUnits=ne,this.getTextureUnits=z,this.setTextureUnits=Z,this.setTexture2D=de,this.setTexture2DArray=ue,this.setTexture3D=ve,this.setTextureCube=_e,this.rebindTextures=W,this.setupRenderTarget=H,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=N,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function nT(n,e){function t(i,r=Sr){let s;const a=Mt.getTransfer(r);if(i===zn)return n.UNSIGNED_BYTE;if(i===qu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===kp)return n.BYTE;if(i===Gp)return n.SHORT;if(i===ya)return n.UNSIGNED_SHORT;if(i===$u)return n.INT;if(i===Ai)return n.UNSIGNED_INT;if(i===Si)return n.FLOAT;if(i===wi)return n.HALF_FLOAT;if(i===$p)return n.ALPHA;if(i===qp)return n.RGB;if(i===ii)return n.RGBA;if(i===sr)return n.DEPTH_COMPONENT;if(i===Hr)return n.DEPTH_STENCIL;if(i===Yp)return n.RED;if(i===Ku)return n.RED_INTEGER;if(i===qr)return n.RG;if(i===Zu)return n.RG_INTEGER;if(i===Ju)return n.RGBA_INTEGER;if(i===Co||i===Po||i===Lo||i===Do)if(a===Nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Co)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Co)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Po)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Do)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wc||i===Xc||i===$c||i===qc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$c)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yc||i===Kc||i===Zc||i===Jc||i===jc||i===Go||i===Qc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yc||i===Kc)return a===Nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zc)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Jc)return s.COMPRESSED_R11_EAC;if(i===jc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Go)return s.COMPRESSED_RG11_EAC;if(i===Qc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===eu||i===tu||i===nu||i===iu||i===ru||i===su||i===au||i===ou||i===lu||i===cu||i===uu||i===hu||i===fu||i===du)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===eu)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tu)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nu)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===iu)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ru)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===su)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===au)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ou)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lu)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cu)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uu)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hu)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fu)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===du)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pu||i===mu||i===gu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===pu)return a===Nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_u||i===vu||i===Wo||i===xu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_u)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ma?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const iT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new tm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ri({vertexShader:iT,fragmentShader:rT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vn(new pl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aT extends wr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const M=typeof XRWebGLBinding<"u",m=new sT,p={},T=t.getContextAttributes();let L=null,y=null;const A=[],R=[],U=new Fe;let S=null,D=null;const B=new ti;B.viewport=new Xt;const G=new ti;G.viewport=new Xt;const K=[B,G],ne=new fS;let z=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(me){let ce=A[me];return ce===void 0&&(ce=new $l,A[me]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(me){let ce=A[me];return ce===void 0&&(ce=new $l,A[me]=ce),ce.getGripSpace()},this.getHand=function(me){let ce=A[me];return ce===void 0&&(ce=new $l,A[me]=ce),ce.getHandSpace()};function le(me){const ce=R.indexOf(me.inputSource);if(ce===-1)return;const we=A[ce];we!==void 0&&(we.update(me.inputSource,me.frame,c||a),we.dispatchEvent({type:me.type,data:me.inputSource}))}function ee(){r.removeEventListener("select",le),r.removeEventListener("selectstart",le),r.removeEventListener("selectend",le),r.removeEventListener("squeeze",le),r.removeEventListener("squeezestart",le),r.removeEventListener("squeezeend",le),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",de);for(let me=0;me<A.length;me++){const ce=R[me];ce!==null&&(R[me]=null,A[me].disconnect(ce))}z=null,Z=null,m.reset();for(const me in p)delete p[me];if(e.setRenderTarget(L),d=null,h=null,f=null,r=null,y=null,lt.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(U.width,U.height,!1),D!==null){const me=D.camera;me.fov=D.fov,me.zoom=D.zoom,me.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(me){s=me,i.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(me){o=me,i.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(me){c=me},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(me){if(r=me,r!==null){if(L=e.getRenderTarget(),r.addEventListener("select",le),r.addEventListener("selectstart",le),r.addEventListener("selectend",le),r.addEventListener("squeeze",le),r.addEventListener("squeezestart",le),r.addEventListener("squeezeend",le),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",de),T.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(U),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ke=null,Oe=null;T.depth&&(Oe=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=T.stencil?Hr:sr,Ke=T.stencil?Ma:Ai);const C={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(C),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new ai(h.textureWidth,h.textureHeight,{format:ii,type:zn,depthTexture:new Ea(h.textureWidth,h.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const we={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ai(d.framebufferWidth,d.framebufferHeight,{format:ii,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),lt.setContext(r),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function de(me){for(let ce=0;ce<me.removed.length;ce++){const we=me.removed[ce],Ke=R.indexOf(we);Ke>=0&&(R[Ke]=null,A[Ke].disconnect(we))}for(let ce=0;ce<me.added.length;ce++){const we=me.added[ce];let Ke=R.indexOf(we);if(Ke===-1){for(let C=0;C<A.length;C++)if(C>=R.length){R.push(we),Ke=C;break}else if(R[C]===null){R[C]=we,Ke=C;break}if(Ke===-1)break}const Oe=A[Ke];Oe&&Oe.connect(we)}}const ue=new Y,ve=new Y;function _e(me,ce,we){ue.setFromMatrixPosition(ce.matrixWorld),ve.setFromMatrixPosition(we.matrixWorld);const Ke=ue.distanceTo(ve),Oe=ce.projectionMatrix.elements,C=we.projectionMatrix.elements,O=Oe[14]/(Oe[10]-1),N=Oe[14]/(Oe[10]+1),W=(Oe[9]+1)/Oe[5],H=(Oe[9]-1)/Oe[5],k=(Oe[8]-1)/Oe[0],te=(C[8]+1)/C[0],pe=O*k,he=O*te,re=Ke/(-k+te),Me=re*-k;if(ce.matrixWorld.decompose(me.position,me.quaternion,me.scale),me.translateX(Me),me.translateZ(re),me.matrixWorld.compose(me.position,me.quaternion,me.scale),me.matrixWorldInverse.copy(me.matrixWorld).invert(),Oe[10]===-1)me.projectionMatrix.copy(ce.projectionMatrix),me.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const P=O+re,Le=N+re,Ie=pe-Me,E=he+(Ke-Me),g=W*N/Le*P,F=H*N/Le*P;me.projectionMatrix.makePerspective(Ie,E,g,F,P,Le),me.projectionMatrixInverse.copy(me.projectionMatrix).invert()}}function Pe(me,ce){ce===null?me.matrixWorld.copy(me.matrix):me.matrixWorld.multiplyMatrices(ce.matrixWorld,me.matrix),me.matrixWorldInverse.copy(me.matrixWorld).invert()}this.updateCamera=function(me){if(r===null)return;let ce=me.near,we=me.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(we=m.depthFar)),ne.near=G.near=B.near=ce,ne.far=G.far=B.far=we,(z!==ne.near||Z!==ne.far)&&(r.updateRenderState({depthNear:ne.near,depthFar:ne.far}),z=ne.near,Z=ne.far),ne.layers.mask=me.layers.mask|6,B.layers.mask=ne.layers.mask&-5,G.layers.mask=ne.layers.mask&-3;const Ke=me.parent,Oe=ne.cameras;Pe(ne,Ke);for(let C=0;C<Oe.length;C++)Pe(Oe[C],Ke);Oe.length===2?_e(ne,B,G):ne.projectionMatrix.copy(B.projectionMatrix),D===null&&me.isPerspectiveCamera&&(D={camera:me,fov:me.fov,zoom:me.zoom}),Xe(me,ne,Ke)};function Xe(me,ce,we){we===null?me.matrix.copy(ce.matrixWorld):(me.matrix.copy(we.matrixWorld),me.matrix.invert(),me.matrix.multiply(ce.matrixWorld)),me.matrix.decompose(me.position,me.quaternion,me.scale),me.updateMatrixWorld(!0),me.projectionMatrix.copy(ce.projectionMatrix),me.projectionMatrixInverse.copy(ce.projectionMatrixInverse),me.isPerspectiveCamera&&(me.fov=yu*2*Math.atan(1/me.projectionMatrix.elements[5]),me.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(me){l=me,h!==null&&(h.fixedFoveation=me),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=me)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(ne)},this.getCameraTexture=function(me){return p[me]};let rt=null;function ot(me,ce){if(u=ce.getViewerPose(c||a),_=ce,u!==null){const we=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Ke=!1;we.length!==ne.cameras.length&&(ne.cameras.length=0,Ke=!0);for(let N=0;N<we.length;N++){const W=we[N];let H=null;if(d!==null)H=d.getViewport(W);else{const te=f.getViewSubImage(h,W);H=te.viewport,N===0&&(e.setRenderTargetTextures(y,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(y))}let k=K[N];k===void 0&&(k=new ti,k.layers.enable(N),k.viewport=new Xt,K[N]=k),k.matrix.fromArray(W.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(W.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(H.x,H.y,H.width,H.height),N===0&&(ne.matrix.copy(k.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Ke===!0&&ne.cameras.push(k)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){f=i.getBinding();const N=f.getDepthInformation(we[0]);N&&N.isValid&&N.texture&&m.init(N,r.renderState)}if(Oe&&Oe.includes("camera-access")&&M){e.state.unbindTexture(),f=i.getBinding();for(let N=0;N<we.length;N++){const W=we[N].camera;if(W){let H=p[W];H||(H=new tm,p[W]=H);const k=f.getCameraImage(W);H.sourceTexture=k}}}}for(let we=0;we<A.length;we++){const Ke=R[we],Oe=A[we];Ke!==null&&Oe!==void 0&&Oe.update(Ke,ce,c||a)}rt&&rt(me,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),_=null}const lt=new pm;lt.setAnimationLoop(ot),this.setAnimationLoop=function(me){rt=me},this.dispose=function(){}}}const oT=new kt,ym=new pt;ym.set(-1,0,0,0,1,0,0,0,1);function lT(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,um(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,L,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),M(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,L):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),L=T.envMap,y=T.envMapRotation;L&&(m.envMap.value=L,m.envMapRotation.value.setFromMatrix4(oT.makeRotationFromEuler(y)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ym),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,L){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=L*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cT(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,A){const R=A.program;i.uniformBlockBinding(y,R)}function c(y,A){let R=r[y.id];R===void 0&&(m(y),R=u(y),r[y.id]=R,y.addEventListener("dispose",T));const U=A.program;i.updateUBOMapping(y,U);const S=e.render.frame;s[y.id]!==S&&(h(y),s[y.id]=S)}function u(y){const A=f();y.__bindingPointIndex=A;const R=n.createBuffer(),U=y.__size,S=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,U,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,R),R}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const A=r[y.id],R=y.uniforms,U=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let S=0,D=R.length;S<D;S++){const B=R[S];if(Array.isArray(B))for(let G=0,K=B.length;G<K;G++)d(B[G],S,G,U);else d(B,S,0,U)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,A,R,U){if(M(y,A,R,U)===!0){const S=y.__offset,D=y.value;if(Array.isArray(D)){let B=0;for(let G=0;G<D.length;G++){const K=D[G],ne=p(K);_(K,y.__data,B),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(B+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(D,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,y.__data)}}function _(y,A,R){typeof y=="number"||typeof y=="boolean"?A[0]=y:y.isMatrix3?(A[0]=y.elements[0],A[1]=y.elements[1],A[2]=y.elements[2],A[3]=0,A[4]=y.elements[3],A[5]=y.elements[4],A[6]=y.elements[5],A[7]=0,A[8]=y.elements[6],A[9]=y.elements[7],A[10]=y.elements[8],A[11]=0):ArrayBuffer.isView(y)?A.set(new y.constructor(y.buffer,y.byteOffset,A.length)):y.toArray(A,R)}function M(y,A,R,U){const S=y.value,D=A+"_"+R;if(U[D]===void 0)return typeof S=="number"||typeof S=="boolean"?U[D]=S:ArrayBuffer.isView(S)?U[D]=S.slice():U[D]=S.clone(),!0;{const B=U[D];if(typeof S=="number"||typeof S=="boolean"){if(B!==S)return U[D]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(B.equals(S)===!1)return B.copy(S),!0}}return!1}function m(y){const A=y.uniforms;let R=0;const U=16;for(let D=0,B=A.length;D<B;D++){const G=Array.isArray(A[D])?A[D]:[A[D]];for(let K=0,ne=G.length;K<ne;K++){const z=G[K],Z=Array.isArray(z.value)?z.value:[z.value];for(let le=0,ee=Z.length;le<ee;le++){const de=Z[le],ue=p(de),ve=R%U,_e=ve%ue.boundary,Pe=ve+_e;R+=_e,Pe!==0&&U-Pe<ue.storage&&(R+=U-Pe),z.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=R,R+=ue.storage}}}const S=R%U;return S>0&&(R+=U-S),y.__size=R,y.__cache={},this}function p(y){const A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(A.boundary=16,A.storage=y.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",y),A}function T(y){const A=y.target;A.removeEventListener("dispose",T);const R=a.indexOf(A.__bindingPointIndex);a.splice(R,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function L(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:L}}const uT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function hT(){return fi===null&&(fi=new dx(uT,16,16,qr,wi),fi.name="DFG_LUT",fi.minFilter=Sn,fi.magFilter=Sn,fi.wrapS=qi,fi.wrapT=qi,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class fT{constructor(e={}){const{canvas:t=H0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=zn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const M=d,m=new Set([Ju,Zu,Ku]),p=new Set([zn,Ai,ya,Ma,qu,Yu]),T=new Uint32Array(4),L=new Int32Array(4),y=new Y;let A=null,R=null;const U=[],S=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let G=!1,K=null,ne=null,z=null,Z=null;this._outputColorSpace=Wn;let le=0,ee=0,de=null,ue=-1,ve=null;const _e=new Xt,Pe=new Xt;let Xe=null;const rt=new bt(0);let ot=0,lt=t.width,me=t.height,ce=1,we=null,Ke=null;const Oe=new Xt(0,0,lt,me),C=new Xt(0,0,lt,me);let O=!1;const N=new nh;let W=!1,H=!1;const k=new kt,te=new Y,pe=new Xt,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Me(){return de===null?ce:1}let P=i;function Le(b,$){return t.getContext(b,$)}let Ie,E,g,F,J,ie,Re,De,ge,xe,Ce,Ne,Be,ze,nt,it,ht,X,Ve,ye,He,be,Te;try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xu}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",w,!1),t.addEventListener("webglcontextcreationerror",se,!1),P===null){const $="webgl2";if(P=Le($,b),P===null)throw Le($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(b){throw t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",w,!1),t.removeEventListener("webglcontextcreationerror",se,!1),Et("WebGLRenderer: "+b.message),b}function Ge(){Ie=new hb(P),Ie.init(),He=new nT(P,Ie),E=new tb(P,Ie,e,He),g=new eT(P,Ie),E.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),ne=P.createFramebuffer(),z=P.createFramebuffer(),Z=P.createFramebuffer(),F=new pb(P),J=new VE,ie=new tT(P,Ie,g,J,E,He,F),Re=new ub(B),De=new gS(P),be=new QM(P,De),ge=new fb(P,De,F,be),xe=new gb(P,ge,De,be,F),X=new mb(P,E,ie),nt=new nb(J),Ce=new zE(B,Re,Ie,E,be,nt),Ne=new lT(B,J),Be=new kE,ze=new YE(Ie),ht=new jM(B,Re,g,xe,_,l),it=new QE(B,xe,E),Te=new cT(P,F,E,g),Ve=new eb(P,Ie,F),ye=new db(P,Ie,F),F.programs=Ce.programs,B.capabilities=E,B.extensions=Ie,B.properties=J,B.renderLists=Be,B.shadowMap=it,B.state=g,B.info=F}M!==zn&&(D=new vb(M,t.width,t.height,o,r,s));const je=new aT(B,P);this.xr=je,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=Ie.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ie.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(b){b!==void 0&&(ce=b,this.setSize(lt,me,!1))},this.getSize=function(b){return b.set(lt,me)},this.setSize=function(b,$,fe=!0){if(je.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=b,me=$,t.width=Math.floor(b*ce),t.height=Math.floor($*ce),fe===!0&&(t.style.width=b+"px",t.style.height=$+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,b,$)},this.getDrawingBufferSize=function(b){return b.set(lt*ce,me*ce).floor()},this.setDrawingBufferSize=function(b,$,fe){lt=b,me=$,ce=fe,t.width=Math.floor(b*fe),t.height=Math.floor($*fe),this.setViewport(0,0,b,$)},this.setEffects=function(b){if(M===zn){Et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let $=0;$<b.length;$++)if(b[$].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(_e)},this.getViewport=function(b){return b.copy(Oe)},this.setViewport=function(b,$,fe,oe){b.isVector4?Oe.set(b.x,b.y,b.z,b.w):Oe.set(b,$,fe,oe),g.viewport(_e.copy(Oe).multiplyScalar(ce).round())},this.getScissor=function(b){return b.copy(C)},this.setScissor=function(b,$,fe,oe){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,$,fe,oe),g.scissor(Pe.copy(C).multiplyScalar(ce).round())},this.getScissorTest=function(){return O},this.setScissorTest=function(b){g.setScissorTest(O=b)},this.setOpaqueSort=function(b){we=b},this.setTransparentSort=function(b){Ke=b},this.getClearColor=function(b){return b.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor(...arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha(...arguments)},this.clear=function(b=!0,$=!0,fe=!0){let oe=0;if(b){let ae=!1;if(de!==null){const $e=de.texture.format;ae=m.has($e)}if(ae){const $e=de.texture.type,Ze=p.has($e),ke=ht.getClearColor(),Qe=ht.getClearAlpha(),Ye=ke.r,gt=ke.g,vt=ke.b;Ze?(T[0]=Ye,T[1]=gt,T[2]=vt,T[3]=Qe,P.clearBufferuiv(P.COLOR,0,T)):(L[0]=Ye,L[1]=gt,L[2]=vt,L[3]=Qe,P.clearBufferiv(P.COLOR,0,L))}else oe|=P.COLOR_BUFFER_BIT}$&&(oe|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(oe|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&P.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),K=b},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",w,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ht.dispose(),Be.dispose(),ze.dispose(),J.dispose(),Re.dispose(),xe.dispose(),be.dispose(),Te.dispose(),Ce.dispose(),je.dispose(),je.removeEventListener("sessionstart",Cs),je.removeEventListener("sessionend",Li),Di.stop()};function j(b){b.preventDefault(),pf("WebGLRenderer: Context Lost."),G=!0}function w(){pf("WebGLRenderer: Context Restored."),G=!1;const b=F.autoReset,$=it.enabled,fe=it.autoUpdate,oe=it.needsUpdate,ae=it.type;Ge(),F.autoReset=b,it.enabled=$,it.autoUpdate=fe,it.needsUpdate=oe,it.type=ae}function se(b){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function et(b){const $=b.target;$.removeEventListener("dispose",et),ft($)}function ft(b){Tt(b),J.remove(b)}function Tt(b){const $=J.get(b).programs;$!==void 0&&($.forEach(function(fe){Ce.releaseProgram(fe)}),b.isShaderMaterial&&Ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,$,fe,oe,ae,$e){$===null&&($=he);const Ze=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,ke=vl(b,$,fe,oe,ae);g.setMaterial(oe,Ze);let Qe=fe.index,Ye=1;if(oe.wireframe===!0){if(Qe=ge.getWireframeAttribute(fe),Qe===void 0)return;Ye=2}const gt=fe.drawRange,vt=fe.attributes.position;let tt=gt.start*Ye,wt=(gt.start+gt.count)*Ye;$e!==null&&(tt=Math.max(tt,$e.start*Ye),wt=Math.min(wt,($e.start+$e.count)*Ye)),Qe!==null?(tt=Math.max(tt,0),wt=Math.min(wt,Qe.count)):vt!=null&&(tt=Math.max(tt,0),wt=Math.min(wt,vt.count));const Gt=wt-tt;if(Gt<0||Gt===1/0)return;be.setup(ae,oe,ke,fe,Qe);let zt,It=Ve;if(Qe!==null&&(zt=De.get(Qe),It=ye,It.setIndex(zt)),ae.isMesh)oe.wireframe===!0?(g.setLineWidth(oe.wireframeLinewidth*Me()),It.setMode(P.LINES)):It.setMode(P.TRIANGLES);else if(ae.isLine){let sn=oe.linewidth;sn===void 0&&(sn=1),g.setLineWidth(sn*Me()),ae.isLineSegments?It.setMode(P.LINES):ae.isLineLoop?It.setMode(P.LINE_LOOP):It.setMode(P.LINE_STRIP)}else ae.isPoints?It.setMode(P.POINTS):ae.isSprite&&It.setMode(P.TRIANGLES);if(ae.isBatchedMesh)if(Ie.get("WEBGL_multi_draw"))It.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const sn=ae._multiDrawStarts,Je=ae._multiDrawCounts,on=ae._multiDrawCount,yt=Qe?De.get(Qe).bytesPerElement:1,Rn=J.get(oe).currentProgram.getUniforms();for(let Hn=0;Hn<on;Hn++)Rn.setValue(P,"_gl_DrawID",Hn),It.render(sn[Hn]/yt,Je[Hn])}else if(ae.isInstancedMesh)It.renderInstances(tt,Gt,ae.count);else if(fe.isInstancedBufferGeometry){const sn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Je=Math.min(fe.instanceCount,sn);It.renderInstances(tt,Gt,Je)}else It.render(tt,Gt)};function St(b,$,fe,oe){K!==null&&b.isNodeMaterial&&K.setObject(oe,b),W===!0&&nt.setState(b,fe,!1),b.transparent===!0&&b.side===ni&&b.forceSinglePass===!1?(b.side=Fn,b.needsUpdate=!0,rn(b,$,oe),b.side=Xr,b.needsUpdate=!0,rn(b,$,oe),b.side=ni):rn(b,$,oe)}this.compile=function(b,$,fe=null){fe===null&&(fe=b),K!==null&&K.renderStart(b,$,fe),R=ze.get(fe),R.init($),S.push(R),fe.traverseVisible(function(ae){ae.isLight&&ae.layers.test($.layers)&&(R.pushLight(ae),ae.castShadow&&R.pushShadow(ae))}),b!==fe&&b.traverseVisible(function(ae){ae.isLight&&ae.layers.test($.layers)&&(R.pushLight(ae),ae.castShadow&&R.pushShadow(ae))}),R.setupLights(),K!==null&&K.updateLights(R.state.lightsArray),H=this.localClippingEnabled,W=nt.init(this.clippingPlanes,H),W===!0&&nt.setGlobalState(this.clippingPlanes,$),K!==null&&it.render(R.state.shadowsArray,fe,$);const oe=new Set;return b.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const $e=ae.material;if($e)if(Array.isArray($e))for(let Ze=0;Ze<$e.length;Ze++){const ke=$e[Ze];St(ke,fe,$,ae),oe.add(ke)}else St($e,fe,$,ae),oe.add($e)}),R=S.pop(),K!==null&&K.renderEnd(),oe},this.compileAsync=function(b,$,fe=null){const oe=this.compile(b,$,fe);return new Promise(ae=>{function $e(){if(oe.forEach(function(Ze){const Qe=J.get(Ze).currentProgram;(Qe===void 0||Qe.isReady())&&oe.delete(Ze)}),oe.size===0){ae(b);return}setTimeout($e,10)}Ie.get("KHR_parallel_shader_compile")!==null?$e():setTimeout($e,10)})};let pn=null;function Pi(b){pn&&pn(b)}function Cs(){Di.stop()}function Li(){Di.start()}const Di=new pm;Di.setAnimationLoop(Pi),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(b){pn=b,je.setAnimationLoop(b),b===null?Di.stop():Di.start()},je.addEventListener("sessionstart",Cs),je.addEventListener("sessionend",Li),this.render=function(b,$){if($!==void 0&&$.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;K!==null&&K.renderStart(b,$);const fe=je.enabled===!0&&je.isPresenting===!0,oe=D!==null&&(de===null||fe)&&D.begin(B,de);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera($),$=je.getCamera()),b.isScene===!0&&b.onBeforeRender(B,b,$,de),R=ze.get(b,S.length),R.init($),R.state.textureUnits=ie.getTextureUnits(),S.push(R),k.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),N.setFromProjectionMatrix(k,yi,$.reversedDepth),H=this.localClippingEnabled,W=nt.init(this.clippingPlanes,H),A=Be.get(b,U.length),A.init(),U.push(A),je.enabled===!0&&je.isPresenting===!0){const Ze=B.xr.getDepthSensingMesh();Ze!==null&&Ps(Ze,$,-1/0,B.sortObjects)}Ps(b,$,0,B.sortObjects),A.finish(),K!==null&&K.updateLights(R.state.lightsArray),B.sortObjects===!0&&A.sort(we,Ke),re=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,re&&ht.addToRenderList(A,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),W===!0&&nt.beginShadows();const ae=R.state.shadowsArray;if(it.render(ae,b,$),W===!0&&nt.endShadows(),(oe&&D.hasRenderPass())===!1){const Ze=A.opaque,ke=A.transmissive;if(R.setupLights(),$.isArrayCamera){const Qe=$.cameras;if(ke.length>0)for(let Ye=0,gt=Qe.length;Ye<gt;Ye++){const vt=Qe[Ye];Ls(Ze,ke,b,vt)}re&&ht.render(b);for(let Ye=0,gt=Qe.length;Ye<gt;Ye++){const vt=Qe[Ye];Rr(A,b,vt,vt.viewport)}}else ke.length>0&&Ls(Ze,ke,b,$),re&&ht.render(b),Rr(A,b,$)}de!==null&&ee===0&&(ie.updateMultisampleRenderTarget(de),ie.updateRenderTargetMipmap(de)),oe&&D.end(B),b.isScene===!0&&b.onAfterRender(B,b,$),be.resetDefaultState(),ue=-1,ve=null,S.pop(),S.length>0?(R=S[S.length-1],ie.setTextureUnits(R.state.textureUnits),W===!0&&nt.setGlobalState(B.clippingPlanes,R.state.camera)):R=null,U.pop(),U.length>0?A=U[U.length-1]:A=null,K!==null&&K.renderEnd()};function Ps(b,$,fe,oe){if(b.visible===!1)return;if(b.layers.test($.layers)){if(b.isGroup)fe=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update($);else if(b.isLightProbeGrid)R.pushLightProbeGrid(b);else if(b.isLight)R.pushLight(b),b.castShadow&&R.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(N)){oe&&pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(k);const Ze=xe.update(b),ke=b.material;ke.visible&&A.push(b,Ze,ke,fe,pe.z,null,$)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(N))){const Ze=xe.update(b),ke=b.material;if(oe&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),pe.copy(b.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),pe.copy(Ze.boundingSphere.center)),pe.applyMatrix4(b.matrixWorld).applyMatrix4(k)),Array.isArray(ke)){const Qe=Ze.groups;for(let Ye=0,gt=Qe.length;Ye<gt;Ye++){const vt=Qe[Ye],tt=ke[vt.materialIndex];tt&&tt.visible&&A.push(b,Ze,tt,fe,pe.z,vt,$)}}else ke.visible&&A.push(b,Ze,ke,fe,pe.z,null,$)}}const $e=b.children;for(let Ze=0,ke=$e.length;Ze<ke;Ze++)Ps($e[Ze],$,fe,oe)}function Rr(b,$,fe,oe){const{opaque:ae,transmissive:$e,transparent:Ze}=b;R.setupLightsView(fe),W===!0&&nt.setGlobalState(B.clippingPlanes,fe),oe&&g.viewport(_e.copy(oe)),ae.length>0&&Cr(ae,$,fe),$e.length>0&&Cr($e,$,fe),Ze.length>0&&Cr(Ze,$,fe),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Ls(b,$,fe,oe){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[oe.id]===void 0){const tt=Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[oe.id]=new ai(1,1,{generateMipmaps:!0,type:tt?wi:zn,minFilter:Vr,samples:Math.max(4,E.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const $e=R.state.transmissionRenderTarget[oe.id],Ze=oe.viewport||_e;$e.setSize(Ze.z*B.transmissionResolutionScale,Ze.w*B.transmissionResolutionScale);const ke=B.getRenderTarget(),Qe=B.getActiveCubeFace(),Ye=B.getActiveMipmapLevel();B.setRenderTarget($e),B.getClearColor(rt),ot=B.getClearAlpha(),ot<1&&B.setClearColor(16777215,.5),B.clear(),re&&ht.render(fe);const gt=B.toneMapping;B.toneMapping=bi;const vt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),R.setupLightsView(oe),W===!0&&nt.setGlobalState(B.clippingPlanes,oe),Cr(b,fe,oe),ie.updateMultisampleRenderTarget($e),ie.updateRenderTargetMipmap($e),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let wt=0,Gt=$.length;wt<Gt;wt++){const zt=$[wt],{object:It,geometry:sn,material:Je,group:on}=zt;if(Je.side===ni&&It.layers.test(oe.layers)){const yt=Je.side;Je.side=Fn,Je.needsUpdate=!0,Ia(It,fe,oe,sn,Je,on),Je.side=yt,Je.needsUpdate=!0,tt=!0}}tt===!0&&(ie.updateMultisampleRenderTarget($e),ie.updateRenderTargetMipmap($e))}B.setRenderTarget(ke,Qe,Ye),B.setClearColor(rt,ot),vt!==void 0&&(oe.viewport=vt),B.toneMapping=gt}function Cr(b,$,fe){const oe=$.isScene===!0?$.overrideMaterial:null;for(let ae=0,$e=b.length;ae<$e;ae++){const Ze=b[ae],{object:ke,geometry:Qe,group:Ye}=Ze;let gt=Ze.material;gt.allowOverride===!0&&oe!==null&&(gt=oe),ke.layers.test(fe.layers)&&Ia(ke,$,fe,Qe,gt,Ye)}}function Ia(b,$,fe,oe,ae,$e){K!==null&&ae.isNodeMaterial&&K.setObject(b,ae),b.onBeforeRender(B,$,fe,oe,ae,$e),b.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ae.onBeforeRender(B,$,fe,oe,b,$e),ae.transparent===!0&&ae.side===ni&&ae.forceSinglePass===!1?(ae.side=Fn,ae.needsUpdate=!0,B.renderBufferDirect(fe,$,oe,ae,b,$e),ae.side=Xr,ae.needsUpdate=!0,B.renderBufferDirect(fe,$,oe,ae,b,$e),ae.side=ni):B.renderBufferDirect(fe,$,oe,ae,b,$e),b.onAfterRender(B,$,fe,oe,ae,$e)}function rn(b,$,fe){$.isScene!==!0&&($=he);const oe=J.get(b),ae=R.state.lights,$e=R.state.shadowsArray,Ze=ae.state.version,ke=Ce.getParameters(b,ae.state,$e,$,fe,R.state.lightProbeGridArray),Qe=Ce.getProgramCacheKey(ke);let Ye=oe.programs;oe.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?$.environment:null,oe.fog=$.fog;const gt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;oe.envMap=Re.get(b.envMap||oe.environment,gt),oe.envMapRotation=oe.environment!==null&&b.envMap===null?$.environmentRotation:b.envMapRotation,Ye===void 0&&(b.addEventListener("dispose",et),Ye=new Map,oe.programs=Ye);let vt=Ye.get(Qe);if(vt!==void 0){if(oe.currentProgram===vt&&oe.lightsStateVersion===Ze)return Ds(b,ke),vt}else ke.uniforms=Ce.getUniforms(b),K!==null&&b.isNodeMaterial&&K.build(b,fe,ke),b.onBeforeCompile(ke,B),vt=Ce.acquireProgram(ke,Qe),Ye.set(Qe,vt),oe.uniforms=ke.uniforms;const tt=oe.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(tt.clippingPlanes=nt.uniform),Ds(b,ke),oe.needsLights=Na(b),oe.lightsStateVersion=Ze,oe.needsLights&&(tt.ambientLightColor.value=ae.state.ambient,tt.lightProbe.value=ae.state.probe,tt.sunLights.value=ae.state.sun,tt.sunLightShadows.value=ae.state.sunShadow,tt.directionalLights.value=ae.state.directional,tt.directionalLightShadows.value=ae.state.directionalShadow,tt.spotLights.value=ae.state.spot,tt.spotLightShadows.value=ae.state.spotShadow,tt.rectAreaLights.value=ae.state.rectArea,tt.ltc_1.value=ae.state.rectAreaLTC1,tt.ltc_2.value=ae.state.rectAreaLTC2,tt.pointLights.value=ae.state.point,tt.pointLightShadows.value=ae.state.pointShadow,tt.hemisphereLights.value=ae.state.hemi,tt.sunShadowMatrix.value=ae.state.sunShadowMatrix,tt.sunShadowCascade.value=ae.state.sunShadowCascade,tt.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,tt.spotLightMatrix.value=ae.state.spotLightMatrix,tt.spotLightMap.value=ae.state.spotLightMap,tt.pointShadowMatrix.value=ae.state.pointShadowMatrix),oe.lightProbeGrid=R.state.lightProbeGridArray.length>0,oe.currentProgram=vt,oe.uniformsList=null,vt}function Ua(b){if(b.uniformsList===null){const $=b.currentProgram.getUniforms();b.uniformsList=Io.seqWithValue($.seq,b.uniforms)}return b.uniformsList}function Ds(b,$){const fe=J.get(b);fe.outputColorSpace=$.outputColorSpace,fe.batching=$.batching,fe.batchingColor=$.batchingColor,fe.instancing=$.instancing,fe.instancingColor=$.instancingColor,fe.instancingMorph=$.instancingMorph,fe.skinning=$.skinning,fe.morphTargets=$.morphTargets,fe.morphNormals=$.morphNormals,fe.morphColors=$.morphColors,fe.morphTargetsCount=$.morphTargetsCount,fe.numClippingPlanes=$.numClippingPlanes,fe.numIntersection=$.numClipIntersection,fe.vertexAlphas=$.vertexAlphas,fe.vertexTangents=$.vertexTangents,fe.toneMapping=$.toneMapping}function or(b,$){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition($.matrixWorld);for(let fe=0,oe=b.length;fe<oe;fe++){const ae=b[fe];if(ae.texture!==null&&ae.boundingBox.containsPoint(y))return ae}return null}function vl(b,$,fe,oe,ae){$.isScene!==!0&&($=he),ie.resetTextureUnits();const $e=$.fog,Ze=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?$.environment:null,ke=de===null?B.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Mt.workingColorSpace,Qe=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,Ye=Re.get(oe.envMap||Ze,Qe),gt=oe.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,vt=!!fe.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),tt=!!fe.morphAttributes.position,wt=!!fe.morphAttributes.normal,Gt=!!fe.morphAttributes.color;let zt=bi;oe.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(zt=B.toneMapping);const It=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,sn=It!==void 0?It.length:0,Je=J.get(oe),on=R.state.lights;if(W===!0&&(H===!0||b!==ve)){const Ot=b===ve&&oe.id===ue;nt.setState(oe,b,Ot)}let yt=!1;oe.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==on.state.version||Je.outputColorSpace!==ke||ae.isBatchedMesh&&Je.batching===!1||!ae.isBatchedMesh&&Je.batching===!0||ae.isBatchedMesh&&Je.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&Je.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&Je.instancing===!1||!ae.isInstancedMesh&&Je.instancing===!0||ae.isSkinnedMesh&&Je.skinning===!1||!ae.isSkinnedMesh&&Je.skinning===!0||ae.isInstancedMesh&&Je.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Je.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Je.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Je.instancingMorph===!1&&ae.morphTexture!==null||Je.envMap!==Ye||oe.fog===!0&&Je.fog!==$e||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==nt.numPlanes||Je.numIntersection!==nt.numIntersection)||Je.vertexAlphas!==gt||Je.vertexTangents!==vt||Je.morphTargets!==tt||Je.morphNormals!==wt||Je.morphColors!==Gt||Je.toneMapping!==zt||Je.morphTargetsCount!==sn||!!Je.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Je.__version=oe.version);let Rn=Je.currentProgram;yt===!0&&(Rn=rn(oe,$,ae),K&&oe.isNodeMaterial&&K.onUpdateProgram(oe,Rn,Je));let Hn=!1,li=!1,Ii=!1;const Rt=Rn.getUniforms(),Wt=Je.uniforms;if(g.useProgram(Rn.program)&&(Hn=!0,li=!0,Ii=!0),oe.id!==ue&&(ue=oe.id,li=!0),Je.needsLights){const Ot=or(R.state.lightProbeGridArray,ae);Je.lightProbeGrid!==Ot&&(Je.lightProbeGrid=Ot,li=!0)}if(Hn||ve!==b){g.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Rt.setValue(P,"projectionMatrix",b.projectionMatrix),Rt.setValue(P,"viewMatrix",b.matrixWorldInverse);const Kn=Rt.map.cameraPosition;Kn!==void 0&&Kn.setValue(P,te.setFromMatrixPosition(b.matrixWorld)),E.logarithmicDepthBuffer&&Rt.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Rt.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),ve!==b&&(ve=b,li=!0,Ii=!0)}if(Je.needsLights&&(on.state.sunShadowMap.length>0&&Rt.setValue(P,"sunShadowMap",on.state.sunShadowMap,ie),on.state.directionalShadowMap.length>0&&Rt.setValue(P,"directionalShadowMap",on.state.directionalShadowMap,ie),on.state.spotShadowMap.length>0&&Rt.setValue(P,"spotShadowMap",on.state.spotShadowMap,ie),on.state.pointShadowMap.length>0&&Rt.setValue(P,"pointShadowMap",on.state.pointShadowMap,ie)),ae.isSkinnedMesh){Rt.setOptional(P,ae,"bindMatrix"),Rt.setOptional(P,ae,"bindMatrixInverse");const Ot=ae.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Rt.setValue(P,"boneTexture",Ot.boneTexture,ie))}ae.isBatchedMesh&&(Rt.setOptional(P,ae,"batchingTexture"),Rt.setValue(P,"batchingTexture",ae._matricesTexture,ie),Rt.setOptional(P,ae,"batchingIdTexture"),Rt.setValue(P,"batchingIdTexture",ae._indirectTexture,ie),Rt.setOptional(P,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Rt.setValue(P,"batchingColorTexture",ae._colorsTexture,ie));const ci=fe.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&X.update(ae,fe,Rn),(li||Je.receiveShadow!==ae.receiveShadow)&&(Je.receiveShadow=ae.receiveShadow,Rt.setValue(P,"receiveShadow",ae.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&$.environment!==null&&(Wt.envMapIntensity.value=$.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=hT()),li){if(Rt.setValue(P,"toneMappingExposure",B.toneMappingExposure),Je.needsLights&&Is(Wt,Ii),$e&&oe.fog===!0&&Ne.refreshFogUniforms(Wt,$e),Ne.refreshMaterialUniforms(Wt,oe,ce,me,R.state.transmissionRenderTarget[b.id]),Je.needsLights&&Je.lightProbeGrid){const Ot=Je.lightProbeGrid;Wt.probesSH.value=Ot.texture,Wt.probesMin.value.copy(Ot.boundingBox.min),Wt.probesMax.value.copy(Ot.boundingBox.max),Wt.probesResolution.value.copy(Ot.resolution)}Io.upload(P,Ua(Je),Wt,ie)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Io.upload(P,Ua(Je),Wt,ie),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Rt.setValue(P,"center",ae.center),Rt.setValue(P,"modelViewMatrix",ae.modelViewMatrix),Rt.setValue(P,"normalMatrix",ae.normalMatrix),Rt.setValue(P,"modelMatrix",ae.matrixWorld),oe.uniformsGroups!==void 0){const Ot=oe.uniformsGroups;for(let Kn=0,lr=Ot.length;Kn<lr;Kn++){const Oa=Ot[Kn];Te.update(Oa,Rn),Te.bind(Oa,Rn)}}return Rn}function Is(b,$){b.ambientLightColor.needsUpdate=$,b.lightProbe.needsUpdate=$,b.sunLights.needsUpdate=$,b.sunLightShadows.needsUpdate=$,b.directionalLights.needsUpdate=$,b.directionalLightShadows.needsUpdate=$,b.pointLights.needsUpdate=$,b.pointLightShadows.needsUpdate=$,b.spotLights.needsUpdate=$,b.spotLightShadows.needsUpdate=$,b.rectAreaLights.needsUpdate=$,b.hemisphereLights.needsUpdate=$}function Na(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return de},this.setRenderTargetTextures=function(b,$,fe){const oe=J.get(b);oe.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),J.get(b.texture).__webglTexture=$,J.get(b.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:fe,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,$){const fe=J.get(b);fe.__webglFramebuffer=$,fe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(b,$=0,fe=0){de=b,le=$,ee=fe;let oe=null,ae=!1,$e=!1;if(b){const ke=J.get(b);if(ke.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(P.FRAMEBUFFER,ke.__webglFramebuffer),_e.copy(b.viewport),Pe.copy(b.scissor),Xe=b.scissorTest,g.viewport(_e),g.scissor(Pe),g.setScissorTest(Xe),ue=-1;return}else if(ke.__webglFramebuffer===void 0)ie.setupRenderTarget(b);else if(ke.__hasExternalTextures)ie.rebindTextures(b,J.get(b.texture).__webglTexture,J.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const gt=b.depthTexture;if(ke.__boundDepthTexture!==gt){if(gt!==null&&J.has(gt)&&(b.width!==gt.image.width||b.height!==gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(b)}}const Qe=b.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&($e=!0);const Ye=J.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ye[$])?oe=Ye[$][fe]:oe=Ye[$],ae=!0):b.samples>0&&ie.useMultisampledRTT(b)===!1?oe=J.get(b).__webglMultisampledFramebuffer:Array.isArray(Ye)?oe=Ye[fe]:oe=Ye,_e.copy(b.viewport),Pe.copy(b.scissor),Xe=b.scissorTest}else _e.copy(Oe).multiplyScalar(ce).floor(),Pe.copy(C).multiplyScalar(ce).floor(),Xe=O;if(fe!==0&&(oe=ne),g.bindFramebuffer(P.FRAMEBUFFER,oe)&&g.drawBuffers(b,oe),g.viewport(_e),g.scissor(Pe),g.setScissorTest(Xe),ae){const ke=J.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+$,ke.__webglTexture,fe)}else if($e){const ke=$;for(let Qe=0;Qe<b.textures.length;Qe++){const Ye=J.get(b.textures[Qe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Qe,Ye.__webglTexture,fe,ke)}}else if(b!==null&&fe!==0){const ke=J.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ke.__webglTexture,fe)}ue=-1};function Fa(b){const $=J.get(b);return($.__readFormat!==b.format||$.__readType!==b.type)&&($.__readFormat=b.format,$.__readType=b.type,$.__formatReadable=E.textureFormatReadable(b.format),$.__typeReadable=E.textureTypeReadable(b.type)),$}this.readRenderTargetPixels=function(b,$,fe,oe,ae,$e,Ze,ke=0){if(!(b&&b.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=J.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ze!==void 0&&(Qe=Qe[Ze]),Qe){g.bindFramebuffer(P.FRAMEBUFFER,Qe);try{const Ye=b.textures[ke],gt=Ye.format,vt=Ye.type;b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ke);const tt=Fa(Ye);if(tt.__formatReadable===!1){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(tt.__typeReadable===!1){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=b.width-oe&&fe>=0&&fe<=b.height-ae&&P.readPixels($,fe,oe,ae,He.convert(gt),He.convert(vt),$e)}finally{const Ye=de!==null?J.get(de).__webglFramebuffer:null;g.bindFramebuffer(P.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(b,$,fe,oe,ae,$e,Ze,ke=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=J.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ze!==void 0&&(Qe=Qe[Ze]),Qe)if($>=0&&$<=b.width-oe&&fe>=0&&fe<=b.height-ae){g.bindFramebuffer(P.FRAMEBUFFER,Qe);const Ye=b.textures[ke],gt=Ye.format,vt=Ye.type;b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ke);const tt=Fa(Ye);if(tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const wt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,wt),P.bufferData(P.PIXEL_PACK_BUFFER,$e.byteLength,P.STREAM_READ),P.readPixels($,fe,oe,ae,He.convert(gt),He.convert(vt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);const Gt=de!==null?J.get(de).__webglFramebuffer:null;g.bindFramebuffer(P.FRAMEBUFFER,Gt);const zt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await k0(P,zt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,wt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,$e),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(wt),P.deleteSync(zt),$e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,$=null,fe=0){const oe=Math.pow(2,-fe),ae=Math.floor(b.image.width*oe),$e=Math.floor(b.image.height*oe),Ze=$!==null?$.x:0,ke=$!==null?$.y:0;ie.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,fe,0,0,Ze,ke,ae,$e),g.unbindTexture()},this.copyTextureToTexture=function(b,$,fe=null,oe=null,ae=0,$e=0){let Ze,ke,Qe,Ye,gt,vt,tt,wt,Gt;const zt=b.isCompressedTexture?b.mipmaps[$e]:b.image;if(fe!==null)Ze=fe.max.x-fe.min.x,ke=fe.max.y-fe.min.y,Qe=fe.isBox3?fe.max.z-fe.min.z:1,Ye=fe.min.x,gt=fe.min.y,vt=fe.isBox3?fe.min.z:0;else{const Wt=Math.pow(2,-ae);Ze=Math.floor(zt.width*Wt),ke=Math.floor(zt.height*Wt),b.isDataArrayTexture?Qe=zt.depth:b.isData3DTexture?Qe=Math.floor(zt.depth*Wt):Qe=1,Ye=0,gt=0,vt=0}oe!==null?(tt=oe.x,wt=oe.y,Gt=oe.z):(tt=0,wt=0,Gt=0);const It=He.convert($.format),sn=He.convert($.type);let Je;$.isData3DTexture?(ie.setTexture3D($,0),Je=P.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ie.setTexture2DArray($,0),Je=P.TEXTURE_2D_ARRAY):(ie.setTexture2D($,0),Je=P.TEXTURE_2D),g.activeTexture(P.TEXTURE0),g.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,$.flipY),g.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),g.pixelStorei(P.UNPACK_ALIGNMENT,$.unpackAlignment);const on=g.getParameter(P.UNPACK_ROW_LENGTH),yt=g.getParameter(P.UNPACK_IMAGE_HEIGHT),Rn=g.getParameter(P.UNPACK_SKIP_PIXELS),Hn=g.getParameter(P.UNPACK_SKIP_ROWS),li=g.getParameter(P.UNPACK_SKIP_IMAGES);g.pixelStorei(P.UNPACK_ROW_LENGTH,zt.width),g.pixelStorei(P.UNPACK_IMAGE_HEIGHT,zt.height),g.pixelStorei(P.UNPACK_SKIP_PIXELS,Ye),g.pixelStorei(P.UNPACK_SKIP_ROWS,gt),g.pixelStorei(P.UNPACK_SKIP_IMAGES,vt);const Ii=b.isDataArrayTexture||b.isData3DTexture,Rt=$.isDataArrayTexture||$.isData3DTexture;if(b.isDepthTexture){const Wt=J.get(b),ci=J.get($),Ot=J.get(Wt.__renderTarget),Kn=J.get(ci.__renderTarget);g.bindFramebuffer(P.READ_FRAMEBUFFER,Ot.__webglFramebuffer),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let lr=0;lr<Qe;lr++)Ii&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,J.get(b).__webglTexture,ae,vt+lr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,J.get($).__webglTexture,$e,Gt+lr)),P.blitFramebuffer(Ye,gt,Ze,ke,tt,wt,Ze,ke,P.DEPTH_BUFFER_BIT,P.NEAREST);g.bindFramebuffer(P.READ_FRAMEBUFFER,null),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(ae!==0||b.isRenderTargetTexture||J.has(b)){const Wt=J.get(b),ci=J.get($);g.bindFramebuffer(P.READ_FRAMEBUFFER,z),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,Z);for(let Ot=0;Ot<Qe;Ot++)Ii?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Wt.__webglTexture,ae,vt+Ot):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Wt.__webglTexture,ae),Rt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ci.__webglTexture,$e,Gt+Ot):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ci.__webglTexture,$e),ae!==0?P.blitFramebuffer(Ye,gt,Ze,ke,tt,wt,Ze,ke,P.COLOR_BUFFER_BIT,P.NEAREST):Rt?P.copyTexSubImage3D(Je,$e,tt,wt,Gt+Ot,Ye,gt,Ze,ke):P.copyTexSubImage2D(Je,$e,tt,wt,Ye,gt,Ze,ke);g.bindFramebuffer(P.READ_FRAMEBUFFER,null),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Rt?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Je,$e,tt,wt,Gt,Ze,ke,Qe,It,sn,zt.data):$.isCompressedArrayTexture?P.compressedTexSubImage3D(Je,$e,tt,wt,Gt,Ze,ke,Qe,It,zt.data):P.texSubImage3D(Je,$e,tt,wt,Gt,Ze,ke,Qe,It,sn,zt):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,$e,tt,wt,Ze,ke,It,sn,zt.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,$e,tt,wt,zt.width,zt.height,It,zt.data):P.texSubImage2D(P.TEXTURE_2D,$e,tt,wt,Ze,ke,It,sn,zt);g.pixelStorei(P.UNPACK_ROW_LENGTH,on),g.pixelStorei(P.UNPACK_IMAGE_HEIGHT,yt),g.pixelStorei(P.UNPACK_SKIP_PIXELS,Rn),g.pixelStorei(P.UNPACK_SKIP_ROWS,Hn),g.pixelStorei(P.UNPACK_SKIP_IMAGES,li),$e===0&&$.generateMipmaps&&P.generateMipmap(Je),g.unbindTexture()},this.initRenderTarget=function(b){J.get(b).__webglFramebuffer===void 0&&ie.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ie.setTextureCube(b,0):b.isData3DTexture?ie.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ie.setTexture2DArray(b,0):ie.setTexture2D(b,0),g.unbindTexture()},this.resetState=function(){le=0,ee=0,de=null,g.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const _d={type:"change"},ah={type:"start"},Mm={type:"end"},Eo=new dl,vd=new Wi,dT=Math.cos(70*X0.DEG2RAD),en=new Y,Dn=2*Math.PI,Ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xc=1e-6;class pT extends pS{constructor(e,t=null){super(e,t),this.state=Ft.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:ds.ROTATE,TWO:ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new Tr,this._lastTargetPosition=new Y,this._quat=new Tr().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qf,this._sphericalDelta=new qf,this._scale=1,this._panOffset=new Y,this._rotateStart=new Fe,this._rotateEnd=new Fe,this._rotateDelta=new Fe,this._panStart=new Fe,this._panEnd=new Fe,this._panDelta=new Fe,this._dollyStart=new Fe,this._dollyEnd=new Fe,this._dollyDelta=new Fe,this._dollyDirection=new Y,this._mouse=new Fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gT.bind(this),this._onPointerDown=mT.bind(this),this._onPointerUp=_T.bind(this),this._onContextMenu=ET.bind(this),this._onMouseWheel=ST.bind(this),this._onKeyDown=yT.bind(this),this._onTouchStart=MT.bind(this),this._onTouchMove=bT.bind(this),this._onMouseDown=vT.bind(this),this._onMouseMove=xT.bind(this),this._interceptControlDown=TT.bind(this),this._interceptControlUp=AT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ft.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_d),this.update(),this.state=Ft.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;en.copy(t).sub(this.target),en.applyQuaternion(this._quat),this._spherical.setFromVector3(en),this.autoRotate&&this.state===Ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Dn:i>Math.PI&&(i-=Dn),r<-Math.PI?r+=Dn:r>Math.PI&&(r-=Dn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(en.setFromSpherical(this._spherical),en.applyQuaternion(this._quatInverse),t.copy(this.target).add(en),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=en.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new Y(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new Y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=en.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Eo.origin.copy(this.object.position),Eo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Eo.direction))<dT?this.object.lookAt(this.target):(vd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Eo.intersectPlane(vd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>xc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xc||this._lastTargetPosition.distanceToSquared(this.target)>xc?(this.dispatchEvent(_d),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Dn/60*this.autoRotateSpeed*e:Dn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){en.setFromMatrixColumn(t,0),en.multiplyScalar(-e),this._panOffset.add(en)}_panUp(e,t){this.screenSpacePanning===!0?en.setFromMatrixColumn(t,1):(en.setFromMatrixColumn(t,0),en.crossVectors(this.object.up,en)),en.multiplyScalar(e),this._panOffset.add(en)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;en.copy(r).sub(this.target);let s=en.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function mT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function gT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function _T(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mm),this.state=Ft.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function vT(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ft.DOLLY;break;case Zi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ft.ROTATE}break;case Zi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ft.PAN}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(ah)}function xT(n){switch(this.state){case Ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ST(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ft.NONE||(n.preventDefault(),this.dispatchEvent(ah),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Mm))}function yT(n){this.enabled!==!1&&this._handleKeyDown(n)}function MT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ds.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ft.TOUCH_ROTATE;break;case ds.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ft.TOUCH_PAN;break;default:this.state=Ft.NONE}break;case 2:switch(this.touches.TWO){case ds.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ft.TOUCH_DOLLY_PAN;break;case ds.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ft.TOUCH_DOLLY_ROTATE;break;default:this.state=Ft.NONE}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(ah)}function bT(n){switch(this._trackPointer(n),this.state){case Ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ft.NONE}}function ET(n){this.enabled!==!1&&n.preventDefault()}function TT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function AT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class wT{renderer;scene;camera;controls;gear1=null;gear2=null;actionLine=null;tangentLine=null;pitchPoint=null;contactMarker=null;interferenceGroup;replayGroup;raycaster=new dS;container;resizeObs;constructor(e){this.container=e;const t=e.clientWidth||800,i=e.clientHeight||600;this.renderer=new fT({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,i),e.appendChild(this.renderer.domElement),this.scene=new sx,this.scene.background=new bt(1053464);const r=t/i,s=80;this.camera=new ml(-s*r/2,s*r/2,s/2,-s/2,.1,2e3),this.camera.position.set(0,0,120),this.camera.lookAt(0,0,0),this.controls=new pT(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN};const a=new uS(16777215,.65),o=new cS(16777215,.9);o.position.set(40,60,100),this.scene.add(a,o),this.interferenceGroup=new kr,this.scene.add(this.interferenceGroup),this.replayGroup=new kr,this.scene.add(this.replayGroup),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e),this.animate()}makeCircleLine(e,t,i=.02,r=160){const s=[];for(let l=0;l<=r;l++){const c=l/r*Math.PI*2;s.push(new Y(e*Math.cos(c),e*Math.sin(c),i))}const a=new fn().setFromPoints(s),o=new Zs({color:t,transparent:!0,opacity:.8});return new gx(a,o)}buildGearMesh(e,t){const i=new kr,r=new ca,s=e.outline;r.moveTo(s[0].x,s[0].y);for(let h=1;h<s.length;h++)r.lineTo(s[h].x,s[h].y);r.closePath();const a=e.input.faceWidth,o=new sh(r,{depth:a,bevelEnabled:!1,curveSegments:1});o.translate(0,0,-a/2),o.computeVertexNormals();const l=new rS({color:t,metalness:.35,roughness:.55}),c=new vn(o,l);i.add(c);const u=new mx(new vx(o,12),new Zs({color:2239027,transparent:!0,opacity:.5}));i.add(u);const f={pitch:this.makeCircleLine(e.pitchR,4891647,a/2+.02),base:this.makeCircleLine(e.baseR,2605194,a/2+.02),addendum:this.makeCircleLine(e.addendumR,16765286,a/2+.02),dedendum:this.makeCircleLine(e.dedendumR,16748451,a/2+.02)};return Object.values(f).forEach(h=>i.add(h)),{group:i,body:c,refs:f}}setGears(e,t,i){this.gear1&&this.scene.remove(this.gear1.group),this.gear2&&this.scene.remove(this.gear2.group),this.gear1=this.buildGearMesh(e,7252222),this.gear2=this.buildGearMesh(t,16758894),this.scene.add(this.gear1.group,this.gear2.group),this.gear2.group.position.x=i,this.targetCenter(i/2,Math.max(e.addendumR,t.addendumR))}targetCenter(e,t){const i=(this.container.clientWidth||800)/(this.container.clientHeight||600),r=(t*2+40)/2,s=Math.max(r*2,80);this.camera.left=-s*i/2,this.camera.right=s*i/2,this.camera.top=s/2,this.camera.bottom=-s/2,this.camera.updateProjectionMatrix(),this.controls.target.set(e,0,0),this.camera.position.set(e,0,140)}setAngles(e,t){this.gear1&&(this.gear1.group.rotation.z=e),this.gear2&&(this.gear2.group.rotation.z=t)}setMeshOverlay(e,t){if(this.clearOverlay(),!e||!this.gear1||!this.gear2)return;const i=o=>t[o],r=o=>{o.geometry.computeBoundingBox();const l=o.geometry.boundingBox;return l?l.max.z-l.min.z:0},s=r(this.gear1.body),a=r(this.gear2.body);if(this.gear1.refs.pitch.visible=!!i("showPitchCircle"),this.gear2.refs.pitch.visible=!!i("showPitchCircle"),this.gear1.refs.base.visible=!!i("showBaseCircle"),this.gear2.refs.base.visible=!!i("showBaseCircle"),this.gear1.refs.addendum.visible=!!i("showAddendumCircle"),this.gear2.refs.addendum.visible=!!i("showAddendumCircle"),this.gear1.refs.dedendum.visible=!!i("showDedendumCircle"),this.gear2.refs.dedendum.visible=!!i("showDedendumCircle"),i("showActionLine")){const o=Math.max(s,a)/2+1,l=(u,f,h)=>{const d=new fn().setFromPoints([new Y(u.x,u.y,o),new Y(f.x,f.y,o)]);return new Zo(d,new Zs({color:h,transparent:!0,opacity:.9,depthTest:!1}))};this.tangentLine=l(e.tangentLine.p0,e.tangentLine.p1,8950691),this.tangentLine.renderOrder=50,this.actionLine=l(e.actionLine.p0,e.actionLine.p1,3794539),this.actionLine.renderOrder=51,this.scene.add(this.tangentLine,this.actionLine);const c=new ps(.7,16,16);this.pitchPoint=new vn(c,new vr({color:16777215,depthTest:!1})),this.pitchPoint.position.set(e.pitchPoint.x,e.pitchPoint.y,o),this.pitchPoint.renderOrder=52,this.scene.add(this.pitchPoint)}if(i("showContact")){const o=e.alphaPrime,l=Math.sin(o),c=Math.cos(o),u={x:e.pitchPoint.x+t.contactS*l,y:e.pitchPoint.y+t.contactS*c},f=Math.max(s,a)/2+1.5,h=new ps(1,20,20);this.contactMarker=new vn(h,new vr({color:16726891,depthTest:!1})),this.contactMarker.position.set(u.x,u.y,f),this.contactMarker.renderOrder=60,this.scene.add(this.contactMarker)}if(t.contactRegions)for(const o of t.contactRegions)for(const l of o){if(l.length<3)continue;const c=new ca;c.moveTo(l[0].x,l[0].y);for(let d=1;d<l.length;d++)c.lineTo(l[d].x,l[d].y);c.closePath();const u=new Jo(c),f=new vr({color:16723285,transparent:!0,opacity:.5,side:ni,depthTest:!1}),h=new vn(u,f);h.position.z=Math.max(s,a)/2+2,h.renderOrder=999,this.interferenceGroup.add(h)}}clearOverlay(){for(this.actionLine&&(this.scene.remove(this.actionLine),this.actionLine.geometry.dispose(),this.actionLine=null),this.tangentLine&&(this.scene.remove(this.tangentLine),this.tangentLine.geometry.dispose(),this.tangentLine=null),this.pitchPoint&&(this.scene.remove(this.pitchPoint),this.pitchPoint=null),this.contactMarker&&(this.scene.remove(this.contactMarker),this.contactMarker=null);this.interferenceGroup.children.length;)this.interferenceGroup.children.pop().geometry?.dispose()}setReplayLocus(e){if(this.clearReplayLocus(),e.visible===!1)return;const t=2.4;if(e.contactLocus&&e.contactLocus.length>1){const i=e.contactLocus.map(a=>new Y(a.x,a.y,t)),r=new fn().setFromPoints(i),s=new Zo(r,new Zs({color:3794539,transparent:!0,opacity:.35,depthTest:!1}));s.renderOrder=40,s.name="replay-locus",this.replayGroup.add(s)}if(e.riskPoints?.length){const i=new ps(.9,12,12),r=new vr({color:16733491,depthTest:!1});for(const s of e.riskPoints){const a=new vn(i,r);a.position.set(s.x,s.y,t+.2),a.renderOrder=70,a.name="replay-risk",this.replayGroup.add(a)}}}setReplayFrame(e){if(this.clearReplayFrame(),!!e){if(e.regions.length)for(const t of e.regions){if(t.length<3)continue;const i=new ca;i.moveTo(t[0].x,t[0].y);for(let o=1;o<t.length;o++)i.lineTo(t[o].x,t[o].y);i.closePath();const r=new Jo(i),s=new vr({color:16723285,transparent:!0,opacity:.55,side:ni,depthTest:!1}),a=new vn(r,s);a.position.z=2.2,a.renderOrder=90,a.name="replay-frame-region",this.replayGroup.add(a)}if(e.contactPoint){const t=new vn(new ps(1.2,20,20),new vr({color:e.interferes?16733491:3531007,depthTest:!1}));t.position.set(e.contactPoint.x,e.contactPoint.y,2.8),t.renderOrder=95,t.name="replay-frame-marker",this.replayGroup.add(t)}}}clearReplayLocus(){for(const e of[...this.replayGroup.children])e.name==="replay-frame-marker"||e.name==="replay-frame-region"||(e.geometry?.dispose(),this.replayGroup.remove(e))}clearReplayFrame(){for(const e of[...this.replayGroup.children])(e.name==="replay-frame-marker"||e.name==="replay-frame-region")&&(e.geometry?.dispose(),this.replayGroup.remove(e))}clearReplay(){for(const e of[...this.replayGroup.children])e.geometry?.dispose(),this.replayGroup.remove(e)}pick(e,t){return this.raycaster,null}resize(){const e=this.container.clientWidth,t=this.container.clientHeight;if(!e||!t)return;this.renderer.setSize(e,t);const i=e/t,s=(this.camera.top-this.camera.bottom)/1/2;this.camera.left=-s*i,this.camera.right=s*i,this.camera.updateProjectionMatrix()}animate=()=>{requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)};dispose(){this.resizeObs.disconnect(),this.controls.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}const Gn={mm:{id:"mm",label:"mm",factor:1,step:.1,decimals:3},cm:{id:"cm",label:"cm",factor:.1,step:.01,decimals:4},m:{id:"m",label:"m",factor:.001,step:.001,decimals:5},in:{id:"in",label:"in",factor:1/25.4,step:.01,decimals:4}};function Uo(n,e){return n*Gn[e].factor}function Sc(n,e){return n/Gn[e].factor}function RT(n,e){return`${Uo(n,e).toFixed(Gn[e].decimals)} ${Gn[e].label}`}const CT={class:"app"},PT={class:"panel"},LT={class:"units"},DT=["onClick"],IT=["step"],UT=["step"],NT={class:"two"},FT={key:0,class:"err"},OT={key:1,class:"err"},BT={class:"row"},zT={key:0},VT=["step"],HT={class:"row"},kT=["disabled"],GT=["disabled"],WT=["disabled","min","max"],XT=["disabled"],$T={key:0,class:"report"},qT={class:"row"},YT={class:"row"},KT={class:"row"},ZT={class:"row"},JT={class:"row"},jT={class:"row"},QT={class:"samples"},eA={class:"replay-panel"},tA={key:0,class:"replay-meta"},nA={class:"sub"},iA={class:"row"},rA=["disabled"],sA={class:"row"},aA=["disabled"],oA={class:"row"},lA=["disabled"],cA=["disabled"],uA=["value"],hA={key:3,class:"player"},fA={key:0,class:"badge stale"},dA={key:1,class:"badge current"},pA={class:"row"},mA=["disabled"],gA=["disabled"],_A={class:"row"},vA=["value","max"],xA=["value","max"],SA={key:0,class:"frameinfo"},yA={key:1},MA={class:"replay-history"},bA={class:"trajlist"},EA={class:"ci"},TA={class:"ca"},AA=["onClick"],wA=["onClick"],RA={key:0,class:"empty"},CA={class:"viewport"},PA={class:"readouts"},LA={key:0,class:"dim-grid"},DA={class:"mesh-report"},IA={key:0,class:"warns"},UA={class:"panel right"},NA={class:"row"},FA={class:"row"},OA={class:"wide filebtn"},BA={class:"caselist"},zA={class:"ci"},VA={class:"ca"},HA=["onClick"],kA=["onClick"],GA={key:0,class:"empty"},WA=Kg({__name:"App",setup(n){const e=Kt("mm"),t=gs({z1:20,z2:40,m:2,alphaDeg:20,faceWidth:10,centerDistance:60,useStandardCenter:!0}),i=Jr(),r=Jr(),s=Jr(),a=gs({g1:[],g2:[]});function o(){const j={z:Math.round(t.z1),module:t.m,alpha:t.alphaDeg*Fi,faceWidth:t.faceWidth},w={z:Math.round(t.z2),module:t.m,alpha:t.alphaDeg*Fi,faceWidth:t.faceWidth};if(a.g1=Jh(j),a.g2=Jh(w),a.g1.length||a.g2.length)return;i.value=Zh(j),r.value=Zh(w);const se=t.useStandardCenter?i.value.pitchR+r.value.pitchR:t.centerDistance;s.value=wv({g1:i.value,g2:r.value,centerDistance:se})}const l=gr({get:()=>Uo(t.m,e.value),set:j=>t.m=Sc(j,e.value)}),c=gr({get:()=>Uo(t.faceWidth,e.value),set:j=>t.faceWidth=Sc(j,e.value)}),u=gr({get:()=>Uo(t.centerDistance,e.value),set:j=>t.centerDistance=Sc(j,e.value)});zr(e,()=>{});const f=Kt(!0),h=Kt(0),d=Kt(.25);let _=0;const M=Kt(0),m=gs({showPitchCircle:!0,showBaseCircle:!0,showAddendumCircle:!1,showDedendumCircle:!1,showActionLine:!0,showContact:!0,contactS:0}),p=Kt(null),T=Jr([]),L=Kt(!1);let y=0;async function A(j){if(!i.value||!r.value||!s.value)return;const w=j,se=jh(i.value,r.value,s.value,w),et=[ko(i.value.outline,0,0,w)],ft=[ko(r.value.outline,s.value.a,0,se)],Tt=++y;L.value=!0;try{const St=await nf(et,ft);if(Tt!==y)return;p.value=St.area,T.value=St.regions}finally{Tt===y&&(L.value=!1)}}const R=Kt(16),U=Kt(!0),S=Kt(!1),D=Kt(""),B=Kt(0),G=Jr(null),K=Jr(null),ne=Kt([]),z=Kt(0),Z=Kt(!1),le=Kt(24);let ee=0;const de=gr(()=>{if(!i.value||!r.value||!s.value)return null;const j=ue(i.value.input.z,r.value.input.z);return{N:j,frames:j*R.value+1,sEnter:ve().sEnter,sExit:ve().sExit}});function ue(j,w){const se=(et,ft)=>ft===0?et:se(ft,et%ft);return Math.abs(j*w)/se(j,w)}function ve(){const j=s.value,w=Math.sin(j.alphaPrime),se=Math.cos(j.alphaPrime);return{sEnter:(j.actionLine.p0.x-j.pitchPoint.x)*w+(j.actionLine.p0.y-j.pitchPoint.y)*se,sExit:(j.actionLine.p1.x-j.pitchPoint.x)*w+(j.actionLine.p1.y-j.pitchPoint.y)*se}}function _e(){const j=s.value?.a??t.centerDistance;return{z1:Math.round(t.z1),z2:Math.round(t.z2),module:t.m,alphaDeg:t.alphaDeg,faceWidth:t.faceWidth,centerDistance:j}}function Pe(){return Rp(_e())}let Xe=null;async function rt(){if(!Ne.value){ne.value=await yr(null);return}ne.value=await yr(Ne.value)}function ot(){const j=G.value;j&&j.expire(),G.value=null,S.value=!1,K.value=null,Z.value=!1,E?.clearReplay()}async function lt(j){if(!i.value||!r.value||!s.value)return;ot();let w=null,se=[];if(j&&j.paramFingerprint===Pe()&&j.status!=="completed"){const St=rf({trajId:j.trajId,caseId:Ne.value,g1:i.value,g2:r.value,mesh:s.value,params:j.params,signature:_e()});if(St.frameCount===j.frameCount&&St.outlineFingerprint===j.outlineFingerprint){St.createdAt=j.createdAt;const Pi=await of(j.trajId)??j;se=jv(St.frameCount,Pi.frames,Pi.frameIndices).filter(Li=>!!Li),w=St}}w||(w=rf({trajId:n0(),caseId:Ne.value,g1:i.value,g2:r.value,mesh:s.value,params:{stepsPerPitch:R.value,includeRegions:U.value},signature:_e()}));const et=Gv({g1:i.value,g2:r.value,mesh:s.value,meta:w,intersector:nf,chunkSize:24,yieldMs:0,existingFrames:se});G.value=et,K.value=null,S.value=!0,D.value=`生成中 0/${w.frameCount}`,B.value=0;let ft=0;const Tt=async(St=!1)=>{const pn=performance.now();if(!St&&pn-ft<800)return;ft=pn;const Pi=Jv(et.frames);await xa({...et.meta,frames:Pi.frames,frameIndices:Pi.frameIndices}),await rt()};et.onEvent(async St=>{if(St.type==="progress")B.value=St.framesDone/w.frameCount,D.value=`生成中 ${St.framesDone}/${w.frameCount}`,await Tt();else if(St.type!=="expired"&&await Tt(!0),S.value=!1,B.value=St.type==="completed"?1:B.value,D.value=St.type==="completed"?`完成：${w.frameCount} 帧，干涉帧 ${w.interferenceFrames}`:St.type==="cancelled"?`已取消（保留 ${w.framesDone}/${w.frameCount} 帧，可继续）`:St.type==="expired"?"已过期：参数在生成期间被修改，结果不作为当前有效":`失败：${"error"in St?St.error:""}`,G.value=null,await rt(),St.type==="completed"){const pn=await of(w.trajId);pn&&ce(pn,!0)}})}function me(){G.value?.cancel()}async function ce(j,w=!1){K.value=j,z.value=0,Z.value=w,Oe(0);const se=j.frames,et=se.filter(Tt=>!!Tt.contactPoint).map(Tt=>Tt.contactPoint),ft=se.filter(Tt=>Tt.interferes&&!!Tt.contactPoint).map(Tt=>Tt.contactPoint);E?.setReplayLocus({contactLocus:et,riskPoints:ft,visible:m.showContact})}function we(j,w){if(j.frameIndices&&j.frameIndices.length===j.frames.length){let se=0,et=j.frameIndices.length-1;for(;se<=et;){const ft=se+et>>1;if(j.frameIndices[ft]===w)return j.frames[ft];j.frameIndices[ft]<w?se=ft+1:et=ft-1}return null}return j.frames[w]??null}function Ke(){const j=K.value;return j?we(j,z.value):null}function Oe(j){const w=K.value;if(!w||!E)return;const se=we(w,j);se&&(E.setAngles(se.phi1Mod,se.phi2Mod),E.setReplayFrame({contactPoint:se.contactPoint,regions:se.regions,interferes:se.interferes}),m.contactS=se.contactS,M.value=se.contactS)}function C(){const j=K.value;!j||j.framesDone<j.frameCount||(z.value>=j.frameCount-1&&(z.value=0),Z.value=!0,ee=0)}function O(){Z.value=!1}function N(){Z.value=!1,z.value=0,Oe(0)}function W(){Z.value=!1,K.value=null,g=-1,E?.clearReplay()}function H(j){const w=K.value;w&&(z.value=Math.max(0,Math.min(w.frameCount-1,Math.round(j))),Oe(z.value))}function k(j){H(z.value+j)}function te(j){const w=K.value;if(!w)return;const se=w.frameCount;for(let et=1;et<=se;et++){const ft=(z.value+j*et+se)%se;if(we(w,ft)?.interferes){H(ft);return}}}function pe(j){return j.status==="completed"&&j.paramFingerprint===Pe()}async function he(j){if(j.status==="completed"){await ce(j);return}if(j.paramFingerprint!==Pe()){await ce(j);return}!i.value||!r.value||!s.value||await lt(j)}async function re(j){K.value?.trajId===j.trajId&&(K.value=null,Z.value=!1,E?.clearReplay()),await Pp(j.trajId),await rt()}const Me=gr(()=>Ke());function P(j){if(j.paramFingerprint!==Pe()&&j.status==="completed")return"过期（旧参数）";switch(j.status){case"running":return"运行中";case"cancelled":return"已取消（可续算）";case"failed":return"失败";case"expired":return"过期";case"completed":return"完成 · 当前有效"}}function Le(j){return j.paramFingerprint!==Pe()?"stale":j.status==="completed"?"good":j.status==="failed"?"bad":""}const Ie=Kt();let E=null,g=-1;function F(){!E||!s.value||E.setMeshOverlay(s.value,{...m,contactS:M.value,contactRegions:[T.value]})}Ac(async()=>{o(),Xe=Pe(),E=new wT(Ie.value),i.value&&r.value&&s.value&&E.setGears(i.value,r.value,s.value.a),await t0(),await rt();const j=w=>{const se=Math.min(.05,(w-_)/1e3||0);_=w;const et=K.value;if(et){const ft=et.framesDone>=et.frameCount;if(Z.value&&ft){ee||(ee=w);const St=(w-ee)/1e3*le.value;ee=w;let pn=z.value+St;pn>=et.frameCount-1&&(pn=et.frameCount-1,Z.value=!1),z.value=pn}else ee=0;const Tt=Math.round(z.value);Tt!==g&&(g=Tt,we(et,Tt)&&Oe(Tt)),requestAnimationFrame(j);return}if(g=-1,f.value&&i.value&&r.value&&s.value){h.value+=d.value*se;const ft=2*Math.PI/i.value.input.z;h.value=(h.value%ft+ft)%ft;const Tt=(h.value-Dc(s.value,i.value,r.value,0).phi1)*i.value.baseR;M.value=J(Tt)}if(i.value&&r.value&&s.value){const ft=jh(i.value,r.value,s.value,h.value);E.setAngles(h.value,ft),m.contactS=M.value,F()}requestAnimationFrame(j)};requestAnimationFrame(j)});function J(j){if(!s.value)return 0;const w=s.value.actionLine,se=s.value.alphaPrime,et=Math.sin(se),ft=Math.cos(se),Tt=(w.p0.x-s.value.pitchPoint.x)*et+(w.p0.y-s.value.pitchPoint.y)*ft,St=(w.p1.x-s.value.pitchPoint.x)*et+(w.p1.y-s.value.pitchPoint.y)*ft;return j<Tt?St-(Tt-j)%(St-Tt):j>St?Tt+(j-St)%(St-Tt):j}zr(()=>[t.z1,t.z2,t.m,t.alphaDeg,t.faceWidth,t.useStandardCenter,t.centerDistance],async()=>{const j=Ne.value,w=Xe;ot(),o(),E&&i.value&&r.value&&s.value&&E.setGears(i.value,r.value,s.value.a),h.value=0,M.value=0,p.value=null,T.value=[],j&&w!==null&&w!==Pe()&&(await e0(j,[]),Ne.value=null),Xe=Pe(),await rt()}),zr(m,()=>{if(F(),K.value){const j=K.value;E?.setReplayLocus({visible:m.showContact,contactLocus:j.frames.filter(w=>!!w.contactPoint).map(w=>w.contactPoint),riskPoints:j.frames.filter(w=>w.interferes&&!!w.contactPoint).map(w=>w.contactPoint)})}}),zr(M,()=>m.contactS=M.value);function ie(){f.value=!1}function Re(){f.value=!0}function De(){f.value||!i.value||!r.value||!s.value||(h.value=Dc(s.value,i.value,r.value,M.value).phi1)}const ge=Kt([]),xe=Kt("未命名案例"),Ce=Kt(""),Ne=Kt(null);async function Be(){ge.value=await qv(),await nt()}Ac(Be);const ze=Kt({});async function nt(){const j={};for(const w of ge.value){const se=await yr(w.id);j[w.id]=se.filter(et=>et.status==="completed").length}ze.value=j}function it(j,w=!1){const se=s.value?.a??t.centerDistance;return{schemaVersion:1,id:Ne.value??Nl(),name:xe.value,createdAt:Date.now(),updatedAt:Date.now(),note:Ce.value,gear1:{z:t.z1,module:t.m,alpha:t.alphaDeg*Fi,alphaDeg:t.alphaDeg,faceWidth:t.faceWidth},gear2:{z:t.z2,module:t.m,alpha:t.alphaDeg*Fi,alphaDeg:t.alphaDeg,faceWidth:t.faceWidth},centerDistance:t.useStandardCenter?null:se,unit:e.value,outlines:j&&i.value&&r.value?{gear1:i.value.outline,gear2:r.value.outline}:void 0}}async function ht(j){const w=!Ne.value;w&&(Ne.value=Nl());const se=Ne.value,et=it(j);if(await af(et),w){const ft=await yr(null);for(const Tt of ft)await xa({...Tt,caseId:se})}await Be(),await rt()}async function X(j,w=!1){const se=!!Ne.value,et=Ne.value??Nl();se||(Ne.value=et);const ft=it(j);w&&(ft.trajectories=await r0(et)),Zv(ft),se||(Ne.value=null)}async function Ve(j){ot(),t.z1=j.gear1.z,t.z2=j.gear2.z,t.m=j.gear1.module,t.alphaDeg=j.gear1.alphaDeg,t.faceWidth=j.gear1.faceWidth,j.centerDistance==null?t.useStandardCenter=!0:(t.useStandardCenter=!1,t.centerDistance=j.centerDistance),e.value=j.unit||"mm",xe.value=j.name,Ce.value=j.note,Ne.value=j.id,o(),Xe=Pe(),E&&i.value&&r.value&&s.value&&E.setGears(i.value,r.value,s.value.a),h.value=0,M.value=0,j.trajectories?.length&&await i0(j.id,j.trajectories,Pe()),await rt()}async function ye(j){Ne.value===j&&ot(),await Qv(j),await $v(j),await Be(),await rt()}function He(j){const w=j.target,se=w.files?.[0];if(!se)return;const et=new FileReader;et.onload=async()=>{try{const ft=Kv(String(et.result));await af(ft),await Ve(ft),await Be()}catch(ft){alert("导入失败："+ft.message)}},et.readAsText(se),w.value=""}const be=gr(()=>!i.value||!r.value||!s.value?null:{g1:i.value,g2:r.value,mesh:s.value}),Te=gr(()=>{if(!s.value)return[-30,30];const j=s.value,w=Math.sin(j.alphaPrime),se=Math.cos(j.alphaPrime),et=(j.actionLine.p0.x-j.pitchPoint.x)*w+(j.actionLine.p0.y-j.pitchPoint.y)*se,ft=(j.actionLine.p1.x-j.pitchPoint.x)*w+(j.actionLine.p1.y-j.pitchPoint.y)*se;return[Math.floor(et*10)/10,Math.ceil(ft*10)/10]});function Ge(j){return RT(j,e.value)}function je(j,w,se=2,et=20){t.z1=j,t.z2=w,t.m=se,t.alphaDeg=et,t.useStandardCenter=!0}return(j,w)=>(Pt(),Ut("div",CT,[w[92]||(w[92]=q("header",null,[q("h1",null,"直齿圆柱齿轮参数化实验室"),q("div",{class:"sub"},"外啮合 · 无变位 · 理想刚性 · 渐开线齿廓（教学模型）")],-1)),q("main",null,[q("aside",PT,[q("section",null,[w[37]||(w[37]=q("h2",null,"显示单位（不改变实际尺寸）",-1)),q("div",LT,[(Pt(!0),Ut(_n,null,Fs(Object.keys(In(Gn)),se=>(Pt(),Ut("button",{key:se,class:Nn({active:e.value===se}),onClick:et=>e.value=se},We(In(Gn)[se].label),11,DT))),128))])]),q("section",null,[w[41]||(w[41]=q("h2",null,"齿轮参数",-1)),q("label",null,[w[38]||(w[38]=dt("压力角 α（度） ",-1)),Jt(q("input",{type:"number","onUpdate:modelValue":w[0]||(w[0]=se=>t.alphaDeg=se),min:"1",max:"45",step:"0.5"},null,512),[[Jn,t.alphaDeg,void 0,{number:!0}]])]),q("label",null,[dt("模数 m（"+We(In(Gn)[e.value].label)+"） ",1),Jt(q("input",{type:"number","onUpdate:modelValue":w[1]||(w[1]=se=>l.value=se),step:In(Gn)[e.value].step},null,8,IT),[[Jn,l.value,void 0,{number:!0}]])]),q("label",null,[dt("齿宽 b（"+We(In(Gn)[e.value].label)+"） ",1),Jt(q("input",{type:"number","onUpdate:modelValue":w[2]||(w[2]=se=>c.value=se),step:In(Gn)[e.value].step},null,8,UT),[[Jn,c.value,void 0,{number:!0}]])]),q("div",NT,[q("label",null,[w[39]||(w[39]=dt("齿数 z₁ ",-1)),Jt(q("input",{type:"number","onUpdate:modelValue":w[3]||(w[3]=se=>t.z1=se),min:"4",step:"1"},null,512),[[Jn,t.z1,void 0,{number:!0}]])]),q("label",null,[w[40]||(w[40]=dt("齿数 z₂ ",-1)),Jt(q("input",{type:"number","onUpdate:modelValue":w[4]||(w[4]=se=>t.z2=se),min:"4",step:"1"},null,512),[[Jn,t.z2,void 0,{number:!0}]])])]),a.g1.length?(Pt(),Ut("div",FT,We(a.g1.join("；")),1)):Pn("",!0),a.g2.length?(Pt(),Ut("div",OT,We(a.g2.join("；")),1)):Pn("",!0)]),q("section",null,[w[43]||(w[43]=q("h2",null,"中心距",-1)),q("label",BT,[Jt(q("input",{type:"checkbox","onUpdate:modelValue":w[5]||(w[5]=se=>t.useStandardCenter=se)},null,512),[[ur,t.useStandardCenter]]),w[42]||(w[42]=dt(" 使用标准中心距 a₀ = m(z₁+z₂)/2 ",-1))]),t.useStandardCenter?Pn("",!0):(Pt(),Ut("label",zT,[dt("实际中心距 a（"+We(In(Gn)[e.value].label)+"） ",1),Jt(q("input",{type:"number","onUpdate:modelValue":w[6]||(w[6]=se=>u.value=se),step:In(Gn)[e.value].step},null,8,VT),[[Jn,u.value,void 0,{number:!0}]])]))]),q("section",null,[w[46]||(w[46]=q("h2",null,"运动 / 检查",-1)),q("div",HT,[q("button",{onClick:ie,disabled:!f.value},"暂停",8,kT),q("button",{onClick:Re,disabled:f.value},"继续",8,GT)]),q("label",null,[w[44]||(w[44]=dt("轮1 角速度（rad/s） ",-1)),Jt(q("input",{type:"range","onUpdate:modelValue":w[7]||(w[7]=se=>d.value=se),min:"0",max:"1.5",step:"0.01"},null,512),[[Jn,d.value,void 0,{number:!0}]])]),q("label",null,[w[45]||(w[45]=dt("接触点沿啮合线 s（mm，暂停可拖动） ",-1)),Jt(q("input",{type:"range",disabled:f.value,"onUpdate:modelValue":w[8]||(w[8]=se=>M.value=se),min:Te.value[0],max:Te.value[1],step:"0.05",onInput:De},null,40,WT),[[Jn,M.value,void 0,{number:!0}]])]),q("button",{class:"wide",onClick:w[9]||(w[9]=se=>A(h.value)),disabled:f.value||L.value},We(L.value?"Clipper 求交中…":"在当前帧做局部干涉求交（Clipper2 WASM）"),9,XT),p.value!==null?(Pt(),Ut("div",$T,[dt(" 重叠面积 = "+We(p.value.toExponential(3))+" mm² ",1),q("b",{class:Nn(p.value>1e-6?"bad":"good")},We(p.value>1e-6?"存在实体干涉 ❗":"当前帧无干涉 ✅"),3)])):Pn("",!0)]),q("section",null,[w[53]||(w[53]=q("h2",null,"显示选项",-1)),q("label",qT,[Jt(q("input",{type:"checkbox","onUpdate:modelValue":w[10]||(w[10]=se=>m.showPitchCircle=se)},null,512),[[ur,m.showPitchCircle]]),w[47]||(w[47]=dt(" 节圆/分度圆",-1))]),q("label",YT,[Jt(q("input",{type:"checkbox","onUpdate:modelValue":w[11]||(w[11]=se=>m.showBaseCircle=se)},null,512),[[ur,m.showBaseCircle]]),w[48]||(w[48]=dt(" 基圆",-1))]),q("label",KT,[Jt(q("input",{type:"checkbox","onUpdate:modelValue":w[12]||(w[12]=se=>m.showAddendumCircle=se)},null,512),[[ur,m.showAddendumCircle]]),w[49]||(w[49]=dt(" 齿顶圆",-1))]),q("label",ZT,[Jt(q("input",{type:"checkbox","onUpdate:modelValue":w[13]||(w[13]=se=>m.showDedendumCircle=se)},null,512),[[ur,m.showDedendumCircle]]),w[50]||(w[50]=dt(" 齿根圆",-1))]),q("label",JT,[Jt(q("input",{type:"checkbox","onUpdate:modelValue":w[14]||(w[14]=se=>m.showActionLine=se)},null,512),[[ur,m.showActionLine]]),w[51]||(w[51]=dt(" 啮合线（理论/实际）",-1))]),q("label",jT,[Jt(q("input",{type:"checkbox","onUpdate:modelValue":w[15]||(w[15]=se=>m.showContact=se)},null,512),[[ur,m.showContact]]),w[52]||(w[52]=dt(" 接触点",-1))])]),q("section",null,[w[54]||(w[54]=q("h2",null,"核对样本",-1)),q("div",QT,[q("button",{onClick:w[16]||(w[16]=se=>je(20,40))},"20/40 标准"),q("button",{onClick:w[17]||(w[17]=se=>je(17,17))},"17/17 临界"),q("button",{onClick:w[18]||(w[18]=se=>je(16,40))},"16/40 根切"),q("button",{onClick:w[19]||(w[19]=se=>je(12,40))},"12/40 极少齿")])]),q("section",eA,[w[68]||(w[68]=q("h2",null,"啮合周期回放",-1)),de.value?(Pt(),Ut("div",tA,[q("div",null,[w[55]||(w[55]=dt("真正重复周期 N = lcm(z₁,z₂) = ",-1)),q("b",null,We(de.value.N),1),w[56]||(w[56]=dt(" 个齿对步",-1))]),q("div",nA,"周期末轮1 转 "+We(de.value.N/t.z1)+" 圈、轮2 转 "+We(de.value.N/t.z2)+" 圈后同一齿对回到原位",1),q("div",null,"有效接触段 s：["+We(de.value.sEnter.toFixed(2))+", "+We(de.value.sExit.toFixed(2))+"] mm",1),q("div",iA,[q("label",null,[w[58]||(w[58]=dt("每齿对步采样 ",-1)),Jt(q("select",{"onUpdate:modelValue":w[20]||(w[20]=se=>R.value=se),disabled:S.value},[...w[57]||(w[57]=[q("option",{value:8},"8 帧（粗）",-1),q("option",{value:16},"16 帧（标准）",-1),q("option",{value:32},"32 帧（细）",-1)])],8,rA),[[_v,R.value,void 0,{number:!0}]])]),q("label",sA,[Jt(q("input",{type:"checkbox","onUpdate:modelValue":w[21]||(w[21]=se=>U.value=se),disabled:S.value},null,8,aA),[[ur,U.value]]),w[59]||(w[59]=dt(" 保存干涉区域",-1))])]),q("div",null,[w[60]||(w[60]=dt("总帧数 ≈ ",-1)),q("b",null,We(de.value.frames),1),w[61]||(w[61]=dt("（每帧一次 Clipper 求交）",-1))])])):Pn("",!0),q("div",oA,[q("button",{class:"wide",onClick:w[22]||(w[22]=se=>lt()),disabled:S.value||!be.value},We(S.value?"生成中…":"生成整个啮合周期轨迹"),9,lA),q("button",{onClick:me,disabled:!S.value},"取消",8,cA)]),D.value?(Pt(),Ut("div",{key:1,class:Nn(["report",{"replay-done":B.value>=1&&!S.value}])},We(D.value),3)):Pn("",!0),S.value||B.value>0?(Pt(),Ut("progress",{key:2,value:B.value,max:"1",style:{width:"100%"}},null,8,uA)):Pn("",!0),K.value?(Pt(),Ut("div",hA,[q("h3",null,[w[62]||(w[62]=dt("播放器",-1)),pe(K.value)?(Pt(),Ut("span",dA,"当前参数有效")):(Pt(),Ut("span",fA,"过期轨迹 · 旧参数"))]),q("div",{class:"row"},[q("button",{onClick:W,class:"del"},"✕ 退出回放")]),q("div",pA,[q("button",{onClick:C,disabled:Z.value||K.value.framesDone<K.value.frameCount},"▶ 播放",8,mA),q("button",{onClick:O,disabled:!Z.value},"⏸ 暂停",8,gA),q("button",{onClick:N},"⏹ 回到首帧")]),q("div",_A,[q("button",{onClick:w[23]||(w[23]=se=>k(-1))},"◀ 帧"),q("button",{onClick:w[24]||(w[24]=se=>k(1))},"帧 ▶"),q("button",{onClick:w[25]||(w[25]=se=>te(-1))},"↑ 上一干涉帧"),q("button",{onClick:w[26]||(w[26]=se=>te(1))},"下一干涉帧 ↓")]),q("label",null,[w[63]||(w[63]=dt("精确跳转：帧 ",-1)),q("input",{type:"number",value:Math.round(z.value),min:"0",max:K.value.frameCount-1,step:"1",onInput:w[27]||(w[27]=se=>H(Number(se.target.value)))},null,40,vA),dt(" / "+We(K.value.frameCount-1),1)]),q("input",{type:"range",value:Math.round(z.value),min:"0",max:K.value.frameCount-1,step:"1",onInput:w[28]||(w[28]=se=>H(Number(se.target.value)))},null,40,xA),q("label",null,[w[64]||(w[64]=dt("播放速度（帧/秒） ",-1)),Jt(q("input",{type:"range","onUpdate:modelValue":w[29]||(w[29]=se=>le.value=se),min:"2",max:"120",step:"1"},null,512),[[Jn,le.value,void 0,{number:!0}]])]),Me.value?(Pt(),Ut("div",SA,[q("div",null,"帧 "+We(Me.value.index)+" / "+We(K.value.frameCount-1)+"（q = "+We(Me.value.q.toFixed(3))+" mm）",1),q("div",null,"φ₁ = "+We((Me.value.phi1Mod/In(Fi)).toFixed(2))+"°，φ₂ = "+We((Me.value.phi2Mod/In(Fi)).toFixed(2))+"°（连续："+We(Me.value.phi1.toFixed(3))+" / "+We(Me.value.phi2.toFixed(3))+" rad）",1),q("div",null,[w[67]||(w[67]=dt(" 主齿对： ",-1)),Me.value.primary?(Pt(),Ut(_n,{key:0},[w[65]||(w[65]=dt(" （轮1 齿 ",-1)),q("b",null,We(Me.value.primary.tooth1),1),w[66]||(w[66]=dt("，轮2 齿 ",-1)),q("b",null,We(Me.value.primary.tooth2),1),dt("） · s = "+We(Me.value.contactS.toFixed(3))+" mm ",1),q("span",{class:Nn(["phase-tag",Me.value.contactS<-.02?"enter":Me.value.contactS>.02?"exit":"pitch"])},We(Me.value.contactS<-.02?"啮入":Me.value.contactS>.02?"啮出":"过节点"),3)],64)):(Pt(),Ut("span",yA,"无接触（εα<1 空程）"))]),q("div",null,[dt("同时接触齿对数："+We(Me.value.activePairs.length)+" ",1),(Pt(!0),Ut(_n,null,Fs(Me.value.activePairs,se=>(Pt(),Ut("span",{key:se.pairId,class:"pairchip"},"("+We(se.tooth1)+","+We(se.tooth2)+")@"+We(se.s.toFixed(2)),1))),128))]),q("div",{class:Nn(Me.value.interferes?"bad":"good")}," 局部干涉："+We(Me.value.interferes?`重叠 ${Me.value.interferenceArea.toExponential(2)} mm² ❗`:"无 ✅"),3)])):Pn("",!0)])):Pn("",!0)]),q("section",MA,[w[69]||(w[69]=q("h2",null,"本案例轨迹历史",-1)),q("ul",bA,[(Pt(!0),Ut(_n,null,Fs(ne.value,se=>(Pt(),Ut("li",{key:se.trajId,class:Nn({stale:!pe(se)})},[q("div",EA,[q("b",null,"N="+We(se.periodPairs)+" · "+We(se.framesDone)+"/"+We(se.frameCount)+" 帧",1),q("span",null,[q("i",{class:Nn(Le(se))},We(P(se)),3),dt(" · 干涉帧 "+We(se.interferenceFrames),1)])]),q("div",TA,[q("button",{onClick:et=>he(se)},We(se.status==="completed"?"回放":"继续/回放"),9,AA),q("button",{class:"del",onClick:et=>re(se)},"删",8,wA)])],2))),128)),ne.value.length?Pn("",!0):(Pt(),Ut("li",RA,"暂无轨迹（未生成不会被标记为已验证）"))])])]),q("section",CA,[q("div",{ref_key:"host",ref:Ie,class:"canvas-host"},null,512),q("div",PA,[be.value?(Pt(),Ut("div",LA,[q("table",null,[q("thead",null,[q("tr",null,[w[70]||(w[70]=q("th",null,null,-1)),q("th",null,"齿轮 1（z₁="+We(t.z1)+"）",1),q("th",null,"齿轮 2（z₂="+We(t.z2)+"）",1)])]),q("tbody",null,[q("tr",null,[w[71]||(w[71]=q("td",null,"分度圆直径 d",-1)),q("td",null,We(Ge(be.value.g1.pitchR*2)),1),q("td",null,We(Ge(be.value.g2.pitchR*2)),1)]),q("tr",null,[w[72]||(w[72]=q("td",null,"基圆直径 d_b",-1)),q("td",null,We(Ge(be.value.g1.baseR*2)),1),q("td",null,We(Ge(be.value.g2.baseR*2)),1)]),q("tr",null,[w[73]||(w[73]=q("td",null,"齿顶圆 d_a",-1)),q("td",null,We(Ge(be.value.g1.addendumR*2)),1),q("td",null,We(Ge(be.value.g2.addendumR*2)),1)]),q("tr",null,[w[74]||(w[74]=q("td",null,"齿根圆 d_f",-1)),q("td",null,We(Ge(be.value.g1.dedendumR*2)),1),q("td",null,We(Ge(be.value.g2.dedendumR*2)),1)]),q("tr",null,[w[75]||(w[75]=q("td",null,"齿距 p = πm",-1)),q("td",null,We(Ge(be.value.g1.circularPitch)),1),q("td",null,We(Ge(be.value.g2.circularPitch)),1)]),q("tr",null,[w[76]||(w[76]=q("td",null,"基节 p_b",-1)),q("td",null,We(Ge(be.value.g1.basePitch)),1),q("td",null,We(Ge(be.value.g2.basePitch)),1)]),q("tr",null,[w[77]||(w[77]=q("td",null,"齿顶压力角 α_a",-1)),q("td",null,We((be.value.g1.alphaTip/In(Fi)).toFixed(2))+"°",1),q("td",null,We((be.value.g2.alphaTip/In(Fi)).toFixed(2))+"°",1)]),q("tr",null,[q("td",null,"根切风险 (z<"+We(be.value.g1.zMinValue.toFixed(1))+")",1),q("td",{class:Nn(be.value.g1.undercut?"bad":"good")},We(be.value.g1.undercut?"根切 ❗":"安全"),3),q("td",{class:Nn(be.value.g2.undercut?"bad":"good")},We(be.value.g2.undercut?"根切 ❗":"安全"),3)])])]),q("div",DA,[w[87]||(w[87]=q("h3",null,"啮合检查",-1)),q("div",null,[w[78]||(w[78]=dt("标准中心距 a₀：",-1)),q("b",null,We(Ge(be.value.mesh.a0)),1)]),q("div",null,[w[79]||(w[79]=dt("实际中心距 a：",-1)),q("b",null,We(Ge(be.value.mesh.a)),1),dt("（Δa = "+We(Ge(be.value.mesh.deltaA))+"）",1)]),q("div",null,[w[80]||(w[80]=dt("啮合角 α′：",-1)),q("b",null,We((be.value.mesh.alphaPrime/In(Fi)).toFixed(3))+"°",1)]),q("div",null,[w[81]||(w[81]=dt("节圆半径 r₁′/r₂′：",-1)),q("b",null,We(Ge(be.value.mesh.pitchR1))+" / "+We(Ge(be.value.mesh.pitchR2)),1)]),q("div",null,[w[82]||(w[82]=dt("实际啮合线长度 g_α：",-1)),q("b",null,We(Ge(be.value.mesh.pathOfContact)),1)]),q("div",null,[w[83]||(w[83]=dt("重合度 ε_α = g_α/p_b：",-1)),q("b",{class:Nn(be.value.mesh.contactRatio<1?"bad":"good")},We(be.value.mesh.contactRatio.toFixed(3)),3)]),q("div",null,[w[84]||(w[84]=dt("圆周/法向侧隙：",-1)),q("b",null,We(Ge(be.value.mesh.backlashTangential))+" / "+We(Ge(be.value.mesh.backlashNormal)),1)]),q("div",null,[w[85]||(w[85]=dt("顶隙 c：",-1)),q("b",null,We(Ge(be.value.mesh.clearance12)),1)]),q("div",null,[w[86]||(w[86]=dt("基节一致：",-1)),q("b",{class:Nn(be.value.mesh.basePitchMatch?"good":"bad")},We(be.value.mesh.basePitchMatch?"是 ✅":"否 ❌"),3)]),be.value.mesh.warnings.length?(Pt(),Ut("ul",IA,[(Pt(!0),Ut(_n,null,Fs(be.value.mesh.warnings,(se,et)=>(Pt(),Ut("li",{key:et},"⚠️ "+We(se),1))),128))])):Pn("",!0),w[88]||(w[88]=q("div",{class:"formula"}," 渐开线：x=r_b(sin t−t cos t)，y=r_b(cos t+t sin t)；inv(α)=tanα−α； 啮合要求基节相等 + 相位共法线，且 r_b1·Δφ₁ = −r_b2·Δφ₂（不是只按转速比旋转）。 ",-1))])])):Pn("",!0)])]),q("aside",UA,[q("section",null,[w[90]||(w[90]=q("h2",null,"案例（IndexedDB）",-1)),Jt(q("input",{"onUpdate:modelValue":w[30]||(w[30]=se=>xe.value=se),placeholder:"案例名称"},null,512),[[Jn,xe.value]]),Jt(q("textarea",{"onUpdate:modelValue":w[31]||(w[31]=se=>Ce.value=se),placeholder:"备注（可选）",rows:"2"},null,512),[[Jn,Ce.value]]),q("div",NA,[q("button",{onClick:w[32]||(w[32]=se=>ht(!0))},"保存（含轮廓）"),q("button",{onClick:w[33]||(w[33]=se=>ht(!1))},"仅参数")]),q("div",FA,[q("button",{onClick:w[34]||(w[34]=se=>X(!0))},"导出 JSON+轮廓"),q("button",{onClick:w[35]||(w[35]=se=>X(!1))},"导出参数")]),q("button",{class:"wide",onClick:w[36]||(w[36]=se=>X(!0,!0))},"导出 JSON（含轮廓 + 已完成轨迹）"),q("label",OA,[w[89]||(w[89]=dt("导入 JSON ",-1)),q("input",{type:"file",accept:"application/json,.json",onChange:He,hidden:""},null,32)])]),q("section",null,[w[91]||(w[91]=q("h2",null,"已存案例",-1)),q("ul",BA,[(Pt(!0),Ut(_n,null,Fs(ge.value,se=>(Pt(),Ut("li",{key:se.id},[q("div",zA,[q("b",null,We(se.name),1),q("span",null,[dt(We(se.gear1.z)+"/"+We(se.gear2.z)+" · m="+We(se.gear1.module)+" · α="+We(se.gear1.alphaDeg)+"°"+We(se.outlines?" · 含轮廓":""),1),ze.value[se.id]?(Pt(),Ut(_n,{key:0},[dt(" · ✅ "+We(ze.value[se.id])+" 条周期轨迹",1)],64)):Pn("",!0)])]),q("div",VA,[q("button",{onClick:et=>Ve(se)},"载入",8,HA),q("button",{class:"del",onClick:et=>ye(se.id)},"删",8,kA)])]))),128)),ge.value.length?Pn("",!0):(Pt(),Ut("li",GA,"暂无案例"))])])])])]))}});yv(WA).mount("#app");
