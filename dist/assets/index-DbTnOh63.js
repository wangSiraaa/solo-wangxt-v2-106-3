(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yu(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Ne={},Rr=[],gi=()=>{},_d=()=>!1,$o=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),qo=n=>n.startsWith("onUpdate:"),on=Object.assign,bu=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},jm=Object.prototype.hasOwnProperty,Te=(n,t)=>jm.call(n,t),ae=Array.isArray,cr=n=>ga(n)==="[object Map]",hs=n=>ga(n)==="[object Set]",fh=n=>ga(n)==="[object Date]",ue=n=>typeof n=="function",We=n=>typeof n=="string",vi=n=>typeof n=="symbol",Ie=n=>n!==null&&typeof n=="object",vd=n=>(Ie(n)||ue(n))&&ue(n.then)&&ue(n.catch),xd=Object.prototype.toString,ga=n=>xd.call(n),Qm=n=>ga(n).slice(8,-1),Sd=n=>ga(n)==="[object Object]",Eu=n=>We(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Xs=yu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yo=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},tg=/-\w/g,Qn=Yo(n=>n.replace(tg,t=>t.slice(1).toUpperCase())),eg=/\B([A-Z])/g,Vr=Yo(n=>n.replace(eg,"-$1").toLowerCase()),Md=Yo(n=>n.charAt(0).toUpperCase()+n.slice(1)),xl=Yo(n=>n?`on${Md(n)}`:""),fi=(n,t)=>!Object.is(n,t),go=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},yd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Tu=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let dh;const Ko=()=>dh||(dh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zo(n){if(ae(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=We(i)?sg(i):Zo(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(We(n)||Ie(n))return n}const ng=/;(?![^(]*\))/g,ig=/:([^]+)/,rg=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function sg(n){const t={};return n.replace(rg,e=>e.startsWith("/*")?"":e).split(ng).forEach(e=>{if(e){const i=e.split(ig);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Zn(n){let t="";if(We(n))t=n;else if(ae(n))for(let e=0;e<n.length;e++){const i=Zn(n[e]);i&&(t+=i+" ")}else if(Ie(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const ag="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",og=yu(ag);function bd(n){return!!n||n===""}function lg(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let r=0;i&&r<n.length;r++)i=_s(n[r],t[r],e);return i}function ph(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),r=new Uint8Array(i.length);for(const s of n){let a=-1;for(let o=0;o<i.length;o++)if(!r[o]&&_s(s,i[o],e)){a=o;break}if(a<0)return!1;r[a]=1}return!0}function cg(n,t,e){let i=cr(n),r=cr(t);if(i||r||(i=hs(n),r=hs(t),i||r))return i&&r?ph(n,t,e):!1;const s=Object.keys(n).length,a=Object.keys(t).length;if(s!==a)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=t.hasOwnProperty(o);if(l&&!c||!l&&c||!_s(n[o],t[o],e))return!1}return String(n)===String(t)}function mh(n,t,e,i){e||(e=[new Map,new Map]);const[r,s]=e;if(r.has(n)||s.has(t))return r.get(n)===t&&s.get(t)===n;r.set(n,t),s.set(t,n);const a=i(n,t,e);return r.delete(n),s.delete(t),a}function _s(n,t,e){if(n===t)return!0;let i=fh(n),r=fh(t);return i||r?i&&r?n.getTime()===t.getTime():!1:(i=vi(n),r=vi(t),i||r?n===t:(i=ae(n),r=ae(t),i||r?i&&r?mh(n,t,e,lg):!1:(i=Ie(n),r=Ie(t),i||r?!i||!r?!1:mh(n,t,e,cg):String(n)===String(t))))}function Ed(n,t){return n.findIndex(e=>_s(e,t))}const Td=n=>!!(n&&n.__v_isRef===!0),Wt=n=>We(n)?n:n==null?"":ae(n)||Ie(n)&&(n.toString===xd||!ue(n.toString))?Td(n)?Wt(n.value):JSON.stringify(n,Ad,2):String(n),Ad=(n,t)=>Td(t)?Ad(n,t.value):cr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[Sl(i,s)+" =>"]=r,e),{})}:hs(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Sl(e))}:vi(t)?Sl(t):Ie(t)&&!ae(t)&&!Sd(t)?String(t):t,Sl=(n,t="")=>{var e;return vi(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rn;class ug{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&rn&&(rn.active?(this.parent=rn,this.index=(rn.scopes||(rn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const r=this.scopes.slice();for(t=0,e=r.length;t<e;t++)r[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=rn;try{return rn=this,t()}finally{rn=e}}}on(){++this._on===1&&(this.prevScope=rn,rn=this)}off(){if(this._on>0&&--this._on===0){if(rn===this)rn=this.prevScope;else{let t=rn;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(e=0,i=r.length;e<i;e++)r[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function hg(){return rn}let Fe;const Ml=new WeakSet;class wd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rn&&(rn.active?rn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ml.has(this)&&(Ml.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gh(this),Pd(this);const t=Fe,e=ti;Fe=this,ti=!0;try{return this.fn()}finally{Dd(this),Fe=t,ti=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Cu(t);this.deps=this.depsTail=void 0,gh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ml.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_c(this)&&this.run()}get dirty(){return _c(this)}}let Cd=0,$s,qs;function Rd(n,t=!1){if(n.flags|=8,t){n.next=qs,qs=n;return}n.next=$s,$s=n}function Au(){Cd++}function wu(){if(--Cd>0)return;if(qs){let t=qs;for(qs=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;$s;){let t=$s;for($s=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Pd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Dd(n){let t,e=n.depsTail,i=e;for(;i;){const r=i.prevDep;i.version===-1?(i===e&&(e=r),Cu(i),fg(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=t,n.depsTail=e}function _c(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ld(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Ld(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===na)||(n.globalVersion=na,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!_c(n))))return;n.flags|=2;const t=n.dep,e=Fe,i=ti;Fe=n,ti=!0;try{Pd(n);const r=n.fn(n._value);(t.version===0||fi(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{Fe=e,ti=i,Dd(n),n.flags&=-3}}function Cu(n,t=!1){const{dep:e,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)Cu(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function fg(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let ti=!0;const Id=[];function $i(){Id.push(ti),ti=!1}function qi(){const n=Id.pop();ti=n===void 0?!0:n}function gh(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Fe;Fe=void 0;try{t()}finally{Fe=e}}}let na=0;class dg{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ru{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Fe||!ti||Fe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Fe)e=this.activeLink=new dg(Fe,this),Fe.deps?(e.prevDep=Fe.depsTail,Fe.depsTail.nextDep=e,Fe.depsTail=e):Fe.deps=Fe.depsTail=e,Ud(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Fe.depsTail,e.nextDep=void 0,Fe.depsTail.nextDep=e,Fe.depsTail=e,Fe.deps===e&&(Fe.deps=i)}return e}trigger(t){this.version++,na++,this.notify(t)}notify(t){Au();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{wu()}}}function Ud(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Ud(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const vc=new WeakMap,Ur=Symbol(""),xc=Symbol(""),ia=Symbol("");function un(n,t,e){if(ti&&Fe){let i=vc.get(n);i||vc.set(n,i=new Map);let r=i.get(e);r||(i.set(e,r=new Ru),r.map=i,r.key=e),r.track()}}function Oi(n,t,e,i,r,s){const a=vc.get(n);if(!a){na++;return}const o=l=>{l&&l.trigger()};if(Au(),t==="clear")a.forEach(o);else{const l=ae(n),c=l&&Eu(e);if(l&&e==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===ia||!vi(h)&&h>=u)&&o(f)})}else switch((e!==void 0||a.has(void 0))&&o(a.get(e)),c&&o(a.get(ia)),t){case"add":l?c&&o(a.get("length")):(o(a.get(Ur)),cr(n)&&o(a.get(xc)));break;case"delete":l||(o(a.get(Ur)),cr(n)&&o(a.get(xc)));break;case"set":cr(n)&&o(a.get(Ur));break}}wu()}function kr(n){const t=Ee(n);return t===n||(un(t,"iterate",ia),Gn(n))?t:xi(n)?ur(n)?t.map(e=>hr(Wn(e))):t.map(hr):t.map(Wn)}function Jo(n){return un(n=Ee(n),"iterate",ia),n}function ci(n,t){return xi(n)?hr(ur(n)?Wn(t):t):Wn(t)}const pg={__proto__:null,[Symbol.iterator](){return yl(this,Symbol.iterator,n=>ci(this,n))},concat(...n){return kr(this).concat(...n.map(t=>ae(t)?kr(t):t))},entries(){return yl(this,"entries",n=>(n[1]=ci(this,n[1]),n))},every(n,t){return wi(this,"every",n,t,void 0,arguments)},filter(n,t){return wi(this,"filter",n,t,e=>e.map(i=>ci(this,i)),arguments)},find(n,t){return wi(this,"find",n,t,e=>ci(this,e),arguments)},findIndex(n,t){return wi(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return wi(this,"findLast",n,t,e=>ci(this,e),arguments)},findLastIndex(n,t){return wi(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return wi(this,"forEach",n,t,void 0,arguments)},includes(...n){return bl(this,"includes",n)},indexOf(...n){return bl(this,"indexOf",n)},join(n){return kr(this).join(n)},lastIndexOf(...n){return bl(this,"lastIndexOf",n)},map(n,t){return wi(this,"map",n,t,void 0,arguments)},pop(){return Cs(this,"pop")},push(...n){return Cs(this,"push",n)},reduce(n,...t){return _h(this,"reduce",n,t)},reduceRight(n,...t){return _h(this,"reduceRight",n,t)},shift(){return Cs(this,"shift")},some(n,t){return wi(this,"some",n,t,void 0,arguments)},splice(...n){return Cs(this,"splice",n)},toReversed(){return kr(this).toReversed()},toSorted(n){return kr(this).toSorted(n)},toSpliced(...n){return kr(this).toSpliced(...n)},unshift(...n){return Cs(this,"unshift",n)},values(){return yl(this,"values",n=>ci(this,n))}};function yl(n,t,e){const i=Jo(n),r=i[t]();return i!==n&&!Gn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=e(s.value)),s}),r}const mg=Array.prototype;function wi(n,t,e,i,r,s){const a=Jo(n),o=a!==n&&!Gn(n),l=a[t];if(l!==mg[t]){const f=l.apply(n,s);return o?Wn(f):f}let c=e;a!==n&&(o?c=function(f,h){return e.call(this,ci(n,f),h,n)}:e.length>2&&(c=function(f,h){return e.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function _h(n,t,e,i){const r=Jo(n),s=r!==n&&!Gn(n);let a=e,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=ci(n,c)),e.call(this,c,ci(n,u),f,n)}):e.length>3&&(a=function(c,u,f){return e.call(this,c,u,f,n)}));const l=r[t](a,...i);return o?ci(n,l):l}function bl(n,t,e){const i=Ee(n);un(i,"iterate",ia);const r=i[t](...e);return(r===-1||r===!1)&&Lu(e[0])?(e[0]=Ee(e[0]),i[t](...e)):r}function Cs(n,t,e=[]){$i(),Au();const i=Ee(n)[t].apply(n,e);return wu(),qi(),i}const gg=yu("__proto__,__v_isRef,__isVue"),Nd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(vi));function _g(n){vi(n)||(n=String(n));const t=Ee(this);return un(t,"has",n),t.hasOwnProperty(n)}class Fd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?wg:Vd:s?zd:Bd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const a=ae(t);if(!r){let l;if(a&&(l=pg[e]))return l;if(e==="hasOwnProperty")return _g}const o=Reflect.get(t,e,fn(t)?t:i);if((vi(e)?Nd.has(e):gg(e))||(r||un(t,"get",e),s))return o;if(fn(o)){const l=a&&Eu(e)?o:o.value;return r&&Ie(l)?Mc(l):l}return Ie(o)?r?Mc(o):or(o):o}}class Od extends Fd{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];const a=ae(t)&&Eu(e);if(!this._isShallow){const c=xi(s);if(!Gn(i)&&!xi(i)&&(s=Ee(s),i=Ee(i)),!a&&fn(s)&&!fn(i))return c||(s.value=i),!0}const o=a?Number(e)<t.length:Te(t,e),l=Reflect.set(t,e,i,fn(t)?t:r);return t===Ee(r)&&l&&(o?fi(i,s)&&Oi(t,"set",e,i):Oi(t,"add",e,i)),l}deleteProperty(t,e){const i=Te(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&Oi(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!vi(e)||!Nd.has(e))&&un(t,"has",e),i}ownKeys(t){return un(t,"iterate",ae(t)?"length":Ur),Reflect.ownKeys(t)}}class vg extends Fd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const xg=new Od,Sg=new vg,Mg=new Od(!0);const Sc=n=>n,Pa=n=>Reflect.getPrototypeOf(n);function yg(n,t,e){return function(...i){const r=this.__v_raw,s=Ee(r),a=cr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=e?Sc:t?hr:Wn;return!t&&un(s,"iterate",l?xc:Ur),on(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Da(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function bg(n,t){const e={get(r){const s=this.__v_raw,a=Ee(s),o=Ee(r);n||(fi(r,o)&&un(a,"get",r),un(a,"get",o));const{has:l}=Pa(a),c=t?Sc:n?hr:Wn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&un(Ee(r),"iterate",Ur),r.size},has(r){const s=this.__v_raw,a=Ee(s),o=Ee(r);return n||(fi(r,o)&&un(a,"has",r),un(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Ee(o),c=t?Sc:n?hr:Wn;return!n&&un(l,"iterate",Ur),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return on(e,n?{add:Da("add"),set:Da("set"),delete:Da("delete"),clear:Da("clear")}:{add(r){const s=Ee(this),a=Pa(s),o=Ee(r),l=!t&&!Gn(r)&&!xi(r)?o:r;return a.has.call(s,l)||fi(r,l)&&a.has.call(s,r)||fi(o,l)&&a.has.call(s,o)||(s.add(l),Oi(s,"add",l,l)),this},set(r,s){!t&&!Gn(s)&&!xi(s)&&(s=Ee(s));const a=Ee(this),{has:o,get:l}=Pa(a);let c=o.call(a,r);c||(r=Ee(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?fi(s,u)&&Oi(a,"set",r,s):Oi(a,"add",r,s),this},delete(r){const s=Ee(this),{has:a,get:o}=Pa(s);let l=a.call(s,r);l||(r=Ee(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Oi(s,"delete",r,void 0),c},clear(){const r=Ee(this),s=r.size!==0,a=r.clear();return s&&Oi(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=yg(r,n,t)}),e}function Pu(n,t){const e=bg(n,t);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Te(e,r)&&r in i?e:i,r,s)}const Eg={get:Pu(!1,!1)},Tg={get:Pu(!1,!0)},Ag={get:Pu(!0,!1)};const Bd=new WeakMap,zd=new WeakMap,Vd=new WeakMap,wg=new WeakMap;function Cg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function or(n){return xi(n)?n:Du(n,!1,xg,Eg,Bd)}function Rg(n){return Du(n,!1,Mg,Tg,zd)}function Mc(n){return Du(n,!0,Sg,Ag,Vd)}function Du(n,t,e,i,r){if(!Ie(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const a=Cg(Qm(n));if(a===0)return n;const o=new Proxy(n,a===2?i:e);return r.set(n,o),o}function ur(n){return xi(n)?ur(n.__v_raw):!!(n&&n.__v_isReactive)}function xi(n){return!!(n&&n.__v_isReadonly)}function Gn(n){return!!(n&&n.__v_isShallow)}function Lu(n){return n?!!n.__v_raw:!1}function Ee(n){const t=n&&n.__v_raw;return t?Ee(t):n}function Pg(n){return!Te(n,"__v_skip")&&Object.isExtensible(n)&&yd(n,"__v_skip",!0),n}const Wn=n=>Ie(n)?or(n):n,hr=n=>Ie(n)?Mc(n):n;function fn(n){return n?n.__v_isRef===!0:!1}function gn(n){return Hd(n,!1)}function La(n){return Hd(n,!0)}function Hd(n,t){return fn(n)?n:new Dg(n,t)}class Dg{constructor(t,e){this.dep=new Ru,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Ee(t),this._value=e?t:Wn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Gn(t)||xi(t);t=i?t:Ee(t),fi(t,e)&&(this._rawValue=t,this._value=i?t:Wn(t),this.dep.trigger())}}function Dn(n){return fn(n)?n.value:n}const Lg={get:(n,t,e)=>t==="__v_raw"?n:Dn(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return fn(r)&&!fn(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function kd(n){return ur(n)?n:new Proxy(n,Lg)}class Ig{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Ru(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=na-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Fe!==this)return Rd(this,!0),!0}get value(){const t=this.dep.track();return Ld(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ug(n,t,e=!1){let i,r;return ue(n)?i=n:(i=n.get,r=n.set),new Ig(i,r,e)}const Ia={},wo=new WeakMap;let wr;function Ng(n,t=!1,e=wr){if(e){let i=wo.get(e);i||wo.set(e,i=[]),i.push(n)}}function Fg(n,t,e=Ne){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=e,c=M=>r?M:Gn(M)||r===!1||r===0?Bi(M,1):Bi(M);let u,f,h,d,_=!1,y=!1;if(fn(n)?(f=()=>n.value,_=Gn(n)):ur(n)?(f=()=>c(n),_=!0):ae(n)?(y=!0,_=n.some(M=>ur(M)||Gn(M)),f=()=>n.map(M=>{if(fn(M))return M.value;if(ur(M))return c(M);if(ue(M))return l?l(M,2):M()})):ue(n)?t?f=l?()=>l(n,2):n:f=()=>{if(h){$i();try{h()}finally{qi()}}const M=wr;wr=u;try{return l?l(n,3,[d]):n(d)}finally{wr=M}}:f=gi,t&&r){const M=f,w=r===!0?1/0:r;f=()=>Bi(M(),w)}const m=hg(),p=()=>{u.stop(),m&&m.active&&bu(m.effects,u)};if(s&&t){const M=t;t=(...w)=>{const C=M(...w);return p(),C}}let A=y?new Array(n.length).fill(Ia):Ia;const D=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(t){const w=u.run();if(M||r||_||(y?w.some((C,z)=>fi(C,A[z])):fi(w,A))){h&&h();const C=wr;wr=u;try{const z=[w,A===Ia?void 0:y&&A[0]===Ia?[]:A,d];A=w,l?l(t,3,z):t(...z)}finally{wr=C}}}else u.run()};return o&&o(D),u=new wd(f),u.scheduler=a?()=>a(D,!1):D,d=M=>Ng(M,!1,u),h=u.onStop=()=>{const M=wo.get(u);if(M){if(l)l(M,4);else for(const w of M)w();wo.delete(u)}},t?i?D(!0):A=u.run():a?a(D.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Bi(n,t=1/0,e){if(t<=0||!Ie(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,fn(n))Bi(n.value,t,e);else if(ae(n))for(let i=0;i<n.length;i++)Bi(n[i],t,e);else if(hs(n)||cr(n))n.forEach(i=>{Bi(i,t,e)});else if(Sd(n)){for(const i in n)Bi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Bi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _a(n,t,e,i){try{return i?n(...i):n()}catch(r){jo(r,t,e)}}function ni(n,t,e,i){if(ue(n)){const r=_a(n,t,e,i);return r&&vd(r)&&r.catch(s=>{jo(s,t,e)}),r}if(ae(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ni(n[s],t,e,i));return r}}function jo(n,t,e,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Ne;if(t){let o=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){$i(),_a(s,null,10,[n,l,c]),qi();return}}Og(n,e,r,i,a)}function Og(n,t,e,i=!0,r=!1){if(r)throw n;console.error(n)}const xn=[];let li=-1;const os=[];let ar=null,ns=0;const Gd=Promise.resolve();let Co=null;function Wd(n){const t=Co||Gd;return n?t.then(this?n.bind(this):n):t}function Bg(n){let t=li+1,e=xn.length;for(;t<e;){const i=t+e>>>1,r=xn[i],s=ra(r);s<n||s===n&&r.flags&2?t=i+1:e=i}return t}function Iu(n){if(!(n.flags&1)){const t=ra(n),e=xn[xn.length-1];!e||!(n.flags&2)&&t>=ra(e)?xn.push(n):xn.splice(Bg(t),0,n),n.flags|=1,Xd()}}function Xd(){Co||(Co=Gd.then(qd))}function zg(n){if(!ae(n))ar&&n.id===-1?ar.splice(ns+1,0,n):n.flags&1||(os.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)os.push(n[t]);Xd()}function vh(n,t,e=li+1){for(;e<xn.length;e++){const i=xn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;xn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function $d(n){if(os.length){const t=[...new Set(os)].sort((e,i)=>ra(e)-ra(i));if(os.length=0,ar){for(let e=0;e<t.length;e++)ar.push(t[e]);return}for(ar=t,ns=0;ns<ar.length;ns++){const e=ar[ns];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}ar=null,ns=0}}const ra=n=>n.id==null?n.flags&2?-1:1/0:n.id;function qd(n){try{for(li=0;li<xn.length;li++){const t=xn[li];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),_a(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;li<xn.length;li++){const t=xn[li];t&&(t.flags&=-2)}li=-1,xn.length=0,$d(),Co=null,(xn.length||os.length)&&qd()}}let kn=null,Yd=null;function Ro(n){const t=kn;return kn=n,Yd=n&&n.type.__scopeId||null,t}function Vg(n,t=kn,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&Rh(-1);const s=Ro(t),a=Nr.length;let o;try{o=n(...r)}finally{for(let l=Nr.length;l>a;l--)vp();Ro(s),i._d&&Rh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function qe(n,t){if(kn===null)return n;const e=il(kn),i=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[s,a,o,l=Ne]=t[r];s&&(ue(s)&&(s={mounted:s,updated:s}),s.deep&&Bi(a),i.push({dir:s,instance:e,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function xr(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&($i(),ni(l,e,8,[n.el,o,n,t]),qi())}}function Hg(n,t){if(Mn){let e=Mn.provides;const i=Mn.parent&&Mn.parent.provides;i===e&&(e=Mn.provides=Object.create(i)),e[n]=t}}function _o(n,t,e=!1){const i=z_();if(i||ls){let r=ls?ls._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&ue(t)?t.call(i&&i.proxy):t}}const kg=Symbol.for("v-scx"),Gg=()=>_o(kg);function Pr(n,t,e){return Kd(n,t,e)}function Kd(n,t,e=Ne){const{immediate:i,deep:r,flush:s,once:a}=e,o=on({},e),l=t&&i||!t&&s!=="post";let c;if(oa){if(s==="sync"){const d=Gg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=gi,d.resume=gi,d.pause=gi,d}}const u=Mn;o.call=(d,_,y)=>ni(d,u,_,y);let f=!1;s==="post"?o.scheduler=d=>{wn(d,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(d,_)=>{_?d():Iu(d)}),o.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Fg(n,t,o);return oa&&(c?c.push(h):l&&h()),h}function Wg(n,t,e){const i=this.proxy,r=We(n)?n.includes(".")?Zd(i,n):()=>i[n]:n.bind(i,i);let s;ue(t)?s=t:(s=t.handler,e=t);const a=va(this),o=Kd(r,s.bind(i),e);return a(),o}function Zd(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}const Xg=Symbol("_vte"),Qo=n=>n.__isTeleport,El=Symbol("_leaveCb");function $g(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Yi){t=e;break}}return t}function Jd(n){if(!Nu(n))return Qo(n.type)&&n.children?$g(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&ue(e.default))return e.default()}}function Uu(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;Uu(Qo(e.type)&&Jd(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function qg(n,t){return ue(n)?on({name:n.name},t,{setup:n}):n}function jd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function xh(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Po=new WeakMap;function Ys(n,t,e,i,r=!1){if(ae(n)){n.forEach((y,m)=>Ys(y,t&&(ae(t)?t[m]:t),e,i,r));return}if(Ks(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ys(n,t,e,i.component.subTree);return}const s=i.shapeFlag&4?il(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=t&&t.r,u=o.refs===Ne?o.refs={}:o.refs,f=o.setupState,h=Ee(f),d=f===Ne?_d:y=>xh(u,y)?!1:Te(h,y),_=(y,m)=>!(m&&xh(u,m));if(c!=null&&c!==l){if(Sh(t),We(c))u[c]=null,d(c)&&(f[c]=null);else if(fn(c)){const y=t;_(c,y.k)&&(c.value=null),y.k&&(u[y.k]=null)}}if(ue(l))_a(l,o,12,[a,u]);else{const y=We(l),m=fn(l);if(y||m){const p=()=>{if(n.f){const A=y?d(l)?f[l]:u[l]:_()||!n.k?l.value:u[n.k];if(r)ae(A)&&bu(A,s);else if(ae(A))A.includes(s)||A.push(s);else if(y)u[l]=[s],d(l)&&(f[l]=u[l]);else{const D=[s];_(l,n.k)&&(l.value=D),n.k&&(u[n.k]=D)}}else y?(u[l]=a,d(l)&&(f[l]=a)):m&&(_(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const A=()=>{p(),Po.delete(n)};A.id=-1,Po.set(n,A),wn(A,e)}else Sh(n),p()}}}function Sh(n){const t=Po.get(n);t&&(t.flags|=8,Po.delete(n))}Ko().requestIdleCallback;Ko().cancelIdleCallback;const Ks=n=>!!n.type.__asyncLoader,Nu=n=>n.type.__isKeepAlive;function Yg(n,t){Qd(n,"a",t)}function Kg(n,t){Qd(n,"da",t)}function Qd(n,t,e=Mn){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(tl(t,i,e),e){let r=e.parent;for(;r&&r.parent;)Nu(r.parent.vnode)&&Zg(i,t,e,r),r=r.parent}}function Zg(n,t,e,i){const r=tl(t,n,i,!0);tp(()=>{bu(i[t],r)},e)}function tl(n,t,e=Mn,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...a)=>{$i();const o=va(e),l=ni(t,e,n,a);return o(),qi(),l});return i?r.unshift(s):r.push(s),s}}const Zi=n=>(t,e=Mn)=>{(!oa||n==="sp")&&tl(n,(...i)=>t(...i),e)},Jg=Zi("bm"),yc=Zi("m"),jg=Zi("bu"),Qg=Zi("u"),t_=Zi("bum"),tp=Zi("um"),e_=Zi("sp"),n_=Zi("rtg"),i_=Zi("rtc");function r_(n,t=Mn){tl("ec",n,t)}const s_=Symbol.for("v-ndc");function Ua(n,t,e,i){let r;const s=e,a=ae(n);if(a||We(n)){const o=a&&ur(n);let l=!1,c=!1;o&&(l=!Gn(n),c=xi(n),n=Jo(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=t(l?c?hr(Wn(n[u])):Wn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=t(o+1,o,void 0,s)}else if(Ie(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>t(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=t(n[u],u,l,s)}}else r=[];return r}const bc=n=>n?yp(n)?il(n):bc(n.parent):null,Zs=on(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>bc(n.parent),$root:n=>bc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>np(n),$forceUpdate:n=>n.f||(n.f=()=>{Iu(n.update)}),$nextTick:n=>n.n||(n.n=Wd.bind(n.proxy)),$watch:n=>Wg.bind(n)}),Tl=(n,t)=>n!==Ne&&!n.__isScriptSetup&&Te(n,t),a_={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(t[0]!=="$"){const h=a[t];if(h!==void 0)switch(h){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(Tl(i,t))return a[t]=1,i[t];if(r!==Ne&&Te(r,t))return a[t]=2,r[t];if(Te(s,t))return a[t]=3,s[t];if(e!==Ne&&Te(e,t))return a[t]=4,e[t];Ec&&(a[t]=0)}}const c=Zs[t];let u,f;if(c)return t==="$attrs"&&un(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[t]))return u;if(e!==Ne&&Te(e,t))return a[t]=4,e[t];if(f=l.config.globalProperties,Te(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return Tl(r,t)?(r[t]=e,!0):i!==Ne&&Te(i,t)?(i[t]=e,!0):Te(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(e[o]||n!==Ne&&o[0]!=="$"&&Te(n,o)||Tl(t,o)||Te(s,o)||Te(i,o)||Te(Zs,o)||Te(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Te(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Mh(n){return ae(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Ec=!0;function o_(n){const t=np(n),e=n.proxy,i=n.ctx;Ec=!1,t.beforeCreate&&yh(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:y,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:D,unmounted:M,render:w,renderTracked:C,renderTriggered:z,errorCaptured:S,serverPrefetch:I,expose:V,inheritAttrs:X,components:Z,directives:at,filters:N}=t;if(c&&l_(c,i,null),a)for(const et in a){const mt=a[et];ue(mt)&&(i[et]=mt.bind(e))}if(r){const et=r.call(e,e);Ie(et)&&(n.data=or(et))}if(Ec=!0,s)for(const et in s){const mt=s[et],ht=ue(mt)?mt.bind(e,e):ue(mt.get)?mt.get.bind(e,e):gi,vt=!ue(mt)&&ue(mt.set)?mt.set.bind(e):gi,gt=Ii({get:ht,set:vt});Object.defineProperty(i,et,{enumerable:!0,configurable:!0,get:()=>gt.value,set:Lt=>gt.value=Lt})}if(o)for(const et in o)ep(o[et],i,e,et);if(l){const et=ue(l)?l.call(e):l;Reflect.ownKeys(et).forEach(mt=>{Hg(mt,et[mt])})}u&&yh(u,n,"c");function st(et,mt){ae(mt)?mt.forEach(ht=>et(ht.bind(e))):mt&&et(mt.bind(e))}if(st(Jg,f),st(yc,h),st(jg,d),st(Qg,_),st(Yg,y),st(Kg,m),st(r_,S),st(i_,C),st(n_,z),st(t_,A),st(tp,M),st(e_,I),ae(V))if(V.length){const et=n.exposed||(n.exposed={});V.forEach(mt=>{Object.defineProperty(et,mt,{get:()=>e[mt],set:ht=>e[mt]=ht,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===gi&&(n.render=w),X!=null&&(n.inheritAttrs=X),Z&&(n.components=Z),at&&(n.directives=at),I&&jd(n)}function l_(n,t,e=gi){ae(n)&&(n=Tc(n));for(const i in n){const r=n[i];let s;Ie(r)?"default"in r?s=_o(r.from||i,r.default,!0):s=_o(r.from||i):s=_o(r),fn(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[i]=s}}function yh(n,t,e){ni(ae(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function ep(n,t,e,i){let r=i.includes(".")?Zd(e,i):()=>e[i];if(We(n)){const s=t[n];ue(s)&&Pr(r,s)}else if(ue(n))Pr(r,n.bind(e));else if(Ie(n))if(ae(n))n.forEach(s=>ep(s,t,e,i));else{const s=ue(n.handler)?n.handler.bind(e):t[n.handler];ue(s)&&Pr(r,s,n)}}function np(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(t);let l;return o?l=o:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(c=>Do(l,c,a,!0)),Do(l,t,a)),Ie(t)&&s.set(t,l),l}function Do(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&Do(n,s,e,!0),r&&r.forEach(a=>Do(n,a,e,!0));for(const a in t)if(!(i&&a==="expose")){const o=c_[a]||e&&e[a];n[a]=o?o(n[a],t[a]):t[a]}return n}const c_={data:bh,props:Eh,emits:Eh,methods:Bs,computed:Bs,beforeCreate:_n,created:_n,beforeMount:_n,mounted:_n,beforeUpdate:_n,updated:_n,beforeDestroy:_n,beforeUnmount:_n,destroyed:_n,unmounted:_n,activated:_n,deactivated:_n,errorCaptured:_n,serverPrefetch:_n,components:Bs,directives:Bs,watch:h_,provide:bh,inject:u_};function bh(n,t){return t?n?function(){return on(ue(n)?n.call(this,this):n,ue(t)?t.call(this,this):t)}:t:n}function u_(n,t){return Bs(Tc(n),Tc(t))}function Tc(n){if(ae(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function _n(n,t){return n?[...new Set([].concat(n,t))]:t}function Bs(n,t){return n?on(Object.create(null),n,t):t}function Eh(n,t){return n?ae(n)&&ae(t)?[...new Set([...n,...t])]:on(Object.create(null),Mh(n),Mh(t??{})):t}function h_(n,t){if(!n)return t;if(!t)return n;const e=on(Object.create(null),n);for(const i in t)e[i]=_n(n[i],t[i]);return e}function ip(){return{app:null,config:{isNativeTag:_d,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let f_=0;function d_(n,t){return function(i,r=null){ue(i)||(i=on({},i)),r!=null&&!Ie(r)&&(r=null);const s=ip(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:f_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:X_,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&ue(u.install)?(a.add(u),u.install(c,...f)):ue(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Hi(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,il(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(ni(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ls;ls=c;try{return u()}finally{ls=f}}};return c}}let ls=null;const p_=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Qn(t)}Modifiers`]||n[`${Vr(t)}Modifiers`];function m_(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Ne;let r=e;const s=t.startsWith("update:"),a=s&&p_(i,t.slice(7));a&&(a.trim&&(r=e.map(u=>We(u)?u.trim():u)),a.number&&(r=r.map(Tu)));let o,l=i[o=xl(t)]||i[o=xl(Qn(t))];!l&&s&&(l=i[o=xl(Vr(t))]),l&&ni(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,ni(c,n,6,r)}}const g_=new WeakMap;function rp(n,t,e=!1){const i=e?g_:t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!ue(n)){const l=c=>{const u=rp(c,t,!0);u&&(o=!0,on(a,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(Ie(n)&&i.set(n,null),null):(ae(s)?s.forEach(l=>a[l]=null):on(a,s),Ie(n)&&i.set(n,a),a)}function el(n,t){return!n||!$o(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),Te(n,t[0].toLowerCase()+t.slice(1))||Te(n,Vr(t))||Te(n,t))}function Th(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:y}=n,m=Ro(n);let p,A;try{if(e.shapeFlag&4){const M=r||i,w=M;p=ui(c.call(w,M,u,f,d,h,_)),A=o}else{const M=t;p=ui(M.length>1?M(f,{attrs:o,slots:a,emit:l}):M(f,null)),A=t.props?o:__(o)}}catch(M){Nr.length=0,jo(M,n,1),p=Hi(Yi)}let D=p;if(A&&y!==!1){const M=Object.keys(A),{shapeFlag:w}=D;M.length&&w&7&&(s&&M.some(qo)&&(A=v_(A,s)),D=fs(D,A,!1,!0))}if(e.dirs&&(D=fs(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(e.dirs):e.dirs),e.transition){const M=Qo(D.type)&&Jd(D)||D;Uu(M,e.transition)}return p=D,Ro(m),p}const __=n=>{let t;for(const e in n)(e==="class"||e==="style"||$o(e))&&((t||(t={}))[e]=n[e]);return t},v_=(n,t)=>{const e={};for(const i in n)(!qo(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function x_(n,t,e){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Ah(i,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(sp(a,i,h)&&!el(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Ah(i,a,c):!0:!!a;return!1}function Ah(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(sp(t,n,s)&&!el(e,s))return!0}return!1}function sp(n,t,e){const i=n[e],r=t[e];return e==="style"&&Ie(i)&&Ie(r)?!_s(i,r):i!==r}function S_({vnode:n,parent:t,suspense:e},i){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const ap={},op=()=>Object.create(ap),lp=n=>Object.getPrototypeOf(n)===ap;function M_(n,t,e,i=!1){const r={},s=op();n.propsDefaults=Object.create(null),cp(n,t,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);e?n.props=i?r:Rg(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function y_(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Ee(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(el(n.emitsOptions,h))continue;const d=t[h];if(l)if(Te(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=Qn(h);r[_]=Ac(l,o,_,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{cp(n,t,r,s)&&(c=!0);let u;for(const f in o)(!t||!Te(t,f)&&((u=Vr(f))===f||!Te(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(r[f]=Ac(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!t||!Te(t,f))&&(delete s[f],c=!0)}c&&Oi(n.attrs,"set","")}function cp(n,t,e,i){const[r,s]=n.propsOptions;let a=!1,o;if(t)for(let l in t){if(Xs(l))continue;const c=t[l];let u;r&&Te(r,u=Qn(l))?!s||!s.includes(u)?e[u]=c:(o||(o={}))[u]=c:el(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Ee(e),c=o||Ne;for(let u=0;u<s.length;u++){const f=s[u];e[f]=Ac(r,l,f,c[f],n,!Te(c,f))}}return a}function Ac(n,t,e,i,r,s){const a=n[e];if(a!=null){const o=Te(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ue(l)){const{propsDefaults:c}=r;if(e in c)i=c[e];else{const u=va(r);i=c[e]=l.call(null,t),u()}}else i=l;r.ce&&r.ce._setProp(e,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Vr(e))&&(i=!0))}return i}const b_=new WeakMap;function up(n,t,e=!1){const i=e?b_:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!ue(n)){const u=f=>{l=!0;const[h,d]=up(f,t,!0);on(a,h),d&&o.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Ie(n)&&i.set(n,Rr),Rr;if(ae(s))for(let u=0;u<s.length;u++){const f=Qn(s[u]);wh(f)&&(a[f]=Ne)}else if(s)for(const u in s){const f=Qn(u);if(wh(f)){const h=s[u],d=a[f]=ae(h)||ue(h)?{type:h}:on({},h),_=d.type;let y=!1,m=!0;if(ae(_))for(let p=0;p<_.length;++p){const A=_[p],D=ue(A)&&A.name;if(D==="Boolean"){y=!0;break}else D==="String"&&(m=!1)}else y=ue(_)&&_.name==="Boolean";d[0]=y,d[1]=m,(y||Te(d,"default"))&&o.push(f)}}const c=[a,o];return Ie(n)&&i.set(n,c),c}function wh(n){return n[0]!=="$"&&!Xs(n)}const Fu=n=>n==="_"||n==="_ctx"||n==="$stable",Ou=n=>ae(n)?n.map(ui):[ui(n)],E_=(n,t,e)=>{if(t._n)return t;const i=Vg((...r)=>Ou(t(...r)),e);return i._c=!1,i},hp=(n,t,e)=>{const i=n._ctx;for(const r in n){if(Fu(r))continue;const s=n[r];if(ue(s))t[r]=E_(r,s,i);else if(s!=null){const a=Ou(s);t[r]=()=>a}}},fp=(n,t)=>{const e=Ou(t);n.slots.default=()=>e},dp=(n,t,e)=>{for(const i in t)(e||!Fu(i))&&(n[i]=t[i])},T_=(n,t,e)=>{const i=n.slots=op();if(n.vnode.shapeFlag&32){const r=t._;r?(dp(i,t,e),e&&yd(i,"_",r,!0)):hp(t,i)}else t&&fp(n,t)},A_=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,a=Ne;if(i.shapeFlag&32){const o=t._;o?e&&o===1?s=!1:dp(r,t,e):(s=!t.$stable,hp(t,r)),a=t}else t&&(fp(n,t),a={default:1});if(s)for(const o in r)!Fu(o)&&a[o]==null&&delete r[o]},wn=D_;function w_(n){return C_(n)}function C_(n,t){const e=Ko();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=gi,insertStaticContent:_}=n,y=(R,B,F,W=null,G=null,k=null,nt=void 0,ft=null,ut=!!B.dynamicChildren)=>{if(R===B)return;R&&!Rs(R,B)&&(W=pt(R),Lt(R,G,k,!0),R=null),B.patchFlag===-2&&(ut=!1,B.dynamicChildren=null),B.dynamicChildren&&R&&R.dynamicChildren&&R.dynamicChildren.hasOnce&&(B.dynamicChildren===Rr&&(B.dynamicChildren=[]),B.dynamicChildren.hasOnce=!0);const{type:rt,ref:Tt,shapeFlag:P}=B;switch(rt){case nl:m(R,B,F,W);break;case Yi:p(R,B,F,W);break;case wl:R==null&&A(B,F,W,nt);break;case Sn:Z(R,B,F,W,G,k,nt,ft,ut);break;default:P&1?w(R,B,F,W,G,k,nt,ft,ut):P&6?at(R,B,F,W,G,k,nt,ft,ut):(P&64||P&128)&&rt.process(R,B,F,W,G,k,nt,ft,ut,zt)}Tt!=null&&G?Ys(Tt,R&&R.ref,k,B||R,!B):Tt==null&&R&&R.ref!=null&&Ys(R.ref,null,k,R,!0)},m=(R,B,F,W)=>{if(R==null)i(B.el=o(B.children),F,W);else{const G=B.el=R.el;B.children!==R.children&&c(G,B.children)}},p=(R,B,F,W)=>{R==null?i(B.el=l(B.children||""),F,W):B.el=R.el},A=(R,B,F,W)=>{[R.el,R.anchor]=_(R.children,B,F,W,R.el,R.anchor)},D=({el:R,anchor:B},F,W)=>{let G;for(;R&&R!==B;)G=h(R),i(R,F,W),R=G;i(B,F,W)},M=({el:R,anchor:B})=>{let F;for(;R&&R!==B;)F=h(R),r(R),R=F;r(B)},w=(R,B,F,W,G,k,nt,ft,ut)=>{if(B.type==="svg"?nt="svg":B.type==="math"&&(nt="mathml"),R==null)C(B,F,W,G,k,nt,ft,ut);else{const rt=R.el&&R.el._isVueCE?R.el:null;try{rt&&rt._beginPatch(),I(R,B,G,k,nt,ft,ut)}finally{rt&&rt._endPatch()}}},C=(R,B,F,W,G,k,nt,ft)=>{let ut,rt;const{props:Tt,shapeFlag:P,transition:wt,dirs:Ct}=R;if(ut=R.el=a(R.type,k,Tt&&Tt.is,Tt),P&8?u(ut,R.children):P&16&&S(R.children,ut,null,W,G,Al(R,k),nt,ft),Ct&&xr(R,null,W,"created"),z(ut,R,R.scopeId,nt,W),Tt){for(const g in Tt)g!=="value"&&!Xs(g)&&s(ut,g,null,Tt[g],k,W);"value"in Tt&&s(ut,"value",null,Tt.value,k),(rt=Tt.onVnodeBeforeMount)&&si(rt,W,R)}Ct&&xr(R,null,W,"beforeMount");const T=R_(G,wt);T&&wt.beforeEnter(ut),i(ut,B,F),((rt=Tt&&Tt.onVnodeMounted)||T||Ct)&&wn(()=>{try{rt&&si(rt,W,R),T&&wt.enter(ut),Ct&&xr(R,null,W,"mounted")}finally{}},G)},z=(R,B,F,W,G)=>{if(F&&d(R,F),W)for(let k=0;k<W.length;k++)d(R,W[k]);if(G){let k=G.subTree;if(B===k||_p(k.type)&&(k.ssContent===B||k.ssFallback===B)){const nt=G.vnode;z(R,nt,nt.scopeId,nt.slotScopeIds,G.parent)}}},S=(R,B,F,W,G,k,nt,ft,ut=0)=>{for(let rt=ut;rt<R.length;rt++){const Tt=R[rt]=ft?Ni(R[rt]):ui(R[rt]);y(null,Tt,B,F,W,G,k,nt,ft)}},I=(R,B,F,W,G,k,nt)=>{const ft=B.el=R.el;let{patchFlag:ut,dynamicChildren:rt,dirs:Tt}=B;ut|=R.patchFlag&16;const P=R.props||Ne,wt=B.props||Ne;let Ct;if(F&&Sr(F,!1),(Ct=wt.onVnodeBeforeUpdate)&&si(Ct,F,B,R),Tt&&xr(B,R,F,"beforeUpdate"),F&&Sr(F,!0),rt&&(!R.dynamicChildren||R.dynamicChildren.length!==rt.length)&&(ut=0,nt=!1,rt=null),(P.innerHTML&&wt.innerHTML==null||P.textContent&&wt.textContent==null)&&u(ft,""),rt?V(R.dynamicChildren,rt,ft,F,W,Al(B,G),k):nt||mt(R,B,ft,null,F,W,Al(B,G),k,!1),ut>0){if(ut&16)X(ft,P,wt,F,G);else if(ut&2&&P.class!==wt.class&&s(ft,"class",null,wt.class,G),ut&4&&s(ft,"style",P.style,wt.style,G),ut&8){const T=B.dynamicProps;for(let g=0;g<T.length;g++){const L=T[g],J=P[L],K=wt[L];(K!==J||L==="value")&&s(ft,L,J,K,G,F)}}ut&1&&R.children!==B.children&&u(ft,B.children)}else!nt&&rt==null&&X(ft,P,wt,F,G);((Ct=wt.onVnodeUpdated)||Tt)&&wn(()=>{Ct&&si(Ct,F,B,R),Tt&&xr(B,R,F,"updated")},W)},V=(R,B,F,W,G,k,nt)=>{for(let ft=0;ft<B.length;ft++){const ut=R[ft],rt=B[ft],Tt=ut.el&&(ut.type===Sn||!Rs(ut,rt)||ut.shapeFlag&198)?f(ut.el):F;y(ut,rt,Tt,null,W,G,k,nt,!0)}},X=(R,B,F,W,G)=>{if(B!==F){if(B!==Ne)for(const k in B)!Xs(k)&&!(k in F)&&s(R,k,B[k],null,G,W);for(const k in F){if(Xs(k))continue;const nt=F[k],ft=B[k];nt!==ft&&k!=="value"&&s(R,k,ft,nt,G,W)}"value"in F&&s(R,"value",B.value,F.value,G)}},Z=(R,B,F,W,G,k,nt,ft,ut)=>{const rt=B.el=R?R.el:o(""),Tt=B.anchor=R?R.anchor:o("");let{patchFlag:P,dynamicChildren:wt,slotScopeIds:Ct}=B;Ct&&(ft=ft?ft.concat(Ct):Ct),R==null?(i(rt,F,W),i(Tt,F,W),S(B.children||[],F,Tt,G,k,nt,ft,ut)):P>0&&P&64&&wt&&R.dynamicChildren&&R.dynamicChildren.length===wt.length?(V(R.dynamicChildren,wt,F,G,k,nt,ft),(B.key!=null||G&&B===G.subTree)&&pp(R,B,!0)):mt(R,B,F,Tt,G,k,nt,ft,ut)},at=(R,B,F,W,G,k,nt,ft,ut)=>{B.slotScopeIds=ft,R==null?B.shapeFlag&512?G.ctx.activate(B,F,W,nt,ut):N(B,F,W,G,k,nt,ut):it(R,B,ut)},N=(R,B,F,W,G,k,nt)=>{const ft=R.component=B_(R,W,G);if(Nu(R)&&(ft.ctx.renderer=zt),V_(ft,!1,nt),ft.asyncDep){if(G&&G.registerDep(ft,st,nt),!R.el){const ut=ft.subTree=Hi(Yi);p(null,ut,B,F),R.placeholder=ut.el}}else st(ft,R,B,F,G,k,nt)},it=(R,B,F)=>{const W=B.component=R.component;if(x_(R,B,F))if(W.asyncDep&&!W.asyncResolved){B.el=R.el,et(W,B,F);return}else W.next=B,W.update();else B.el=R.el,W.vnode=B},st=(R,B,F,W,G,k,nt)=>{const ft=()=>{if(R.isMounted){let{next:P,bu:wt,u:Ct,parent:T,vnode:g}=R;{const Q=mp(R);if(Q){P&&(P.el=g.el,et(R,P,nt)),Q.asyncDep.then(()=>{wn(()=>{R.isUnmounted||rt()},G)});return}}let L=P,J;Sr(R,!1),P?(P.el=g.el,et(R,P,nt)):P=g,wt&&go(wt),(J=P.props&&P.props.onVnodeBeforeUpdate)&&si(J,T,P,g),Sr(R,!0);const K=Th(R),Et=R.subTree;R.subTree=K,y(Et,K,f(Et.el),pt(Et),R,G,k),P.el=K.el,L===null&&S_(R,K.el),Ct&&wn(Ct,G),(J=P.props&&P.props.onVnodeUpdated)&&wn(()=>si(J,T,P,g),G)}else{let P;const{el:wt,props:Ct}=B,{bm:T,m:g,parent:L,root:J,type:K}=R,Et=Ks(B);Sr(R,!1),T&&go(T),!Et&&(P=Ct&&Ct.onVnodeBeforeMount)&&si(P,L,B),Sr(R,!0);{J.ce&&J.ce._hasShadowRoot()&&J.ce._injectChildStyle(K,R.parent?R.parent.type:void 0);const Q=R.subTree=Th(R);y(null,Q,F,W,R,G,k),B.el=Q.el}if(g&&wn(g,G),!Et&&(P=Ct&&Ct.onVnodeMounted)){const Q=B;wn(()=>si(P,L,Q),G)}(B.shapeFlag&256||L&&Ks(L.vnode)&&L.vnode.shapeFlag&256)&&R.a&&wn(R.a,G),R.isMounted=!0,B=F=W=null}};R.scope.on();const ut=R.effect=new wd(ft);R.scope.off();const rt=R.update=ut.run.bind(ut),Tt=R.job=ut.runIfDirty.bind(ut);Tt.i=R,Tt.id=R.uid,ut.scheduler=()=>Iu(Tt),Sr(R,!0),rt()},et=(R,B,F)=>{B.component=R;const W=R.vnode.props;R.vnode=B,R.next=null,y_(R,B.props,W,F),A_(R,B.children,F),$i(),vh(R),qi()},mt=(R,B,F,W,G,k,nt,ft,ut=!1)=>{const rt=R&&R.children,Tt=R?R.shapeFlag:0,P=B.children,{patchFlag:wt,shapeFlag:Ct}=B;if(wt>0){if(wt&128){vt(rt,P,F,W,G,k,nt,ft,ut);return}else if(wt&256){ht(rt,P,F,W,G,k,nt,ft,ut);return}}Ct&8?(Tt&16&&ie(rt,G,k),P!==rt&&u(F,P)):Tt&16?Ct&16?vt(rt,P,F,W,G,k,nt,ft,ut):ie(rt,G,k,!0):(Tt&8&&u(F,""),Ct&16&&S(P,F,W,G,k,nt,ft,ut))},ht=(R,B,F,W,G,k,nt,ft,ut)=>{R=R||Rr,B=B||Rr;const rt=R.length,Tt=B.length,P=Math.min(rt,Tt);let wt;for(wt=0;wt<P;wt++){const Ct=B[wt]=ut?Ni(B[wt]):ui(B[wt]);y(R[wt],Ct,F,null,G,k,nt,ft,ut)}rt>Tt?ie(R,G,k,!0,!1,P):S(B,F,W,G,k,nt,ft,ut,P)},vt=(R,B,F,W,G,k,nt,ft,ut)=>{let rt=0;const Tt=B.length;let P=R.length-1,wt=Tt-1;for(;rt<=P&&rt<=wt;){const Ct=R[rt],T=B[rt]=ut?Ni(B[rt]):ui(B[rt]);if(Rs(Ct,T))y(Ct,T,F,null,G,k,nt,ft,ut);else break;rt++}for(;rt<=P&&rt<=wt;){const Ct=R[P],T=B[wt]=ut?Ni(B[wt]):ui(B[wt]);if(Rs(Ct,T))y(Ct,T,F,null,G,k,nt,ft,ut);else break;P--,wt--}if(rt>P){if(rt<=wt){const Ct=wt+1,T=Ct<Tt?B[Ct].el:W;for(;rt<=wt;)y(null,B[rt]=ut?Ni(B[rt]):ui(B[rt]),F,T,G,k,nt,ft,ut),rt++}}else if(rt>wt)for(;rt<=P;)Lt(R[rt],G,k,!0),rt++;else{const Ct=rt,T=rt,g=new Map;for(rt=T;rt<=wt;rt++){const _t=B[rt]=ut?Ni(B[rt]):ui(B[rt]);_t.key!=null&&g.set(_t.key,rt)}let L,J=0;const K=wt-T+1;let Et=!1,Q=0;const E=new Array(K);for(rt=0;rt<K;rt++)E[rt]=0;for(rt=Ct;rt<=P;rt++){const _t=R[rt];if(J>=K){Lt(_t,G,k,!0);continue}let Pt;if(_t.key!=null)Pt=g.get(_t.key);else for(L=T;L<=wt;L++)if(E[L-T]===0&&Rs(_t,B[L])){Pt=L;break}Pt===void 0?Lt(_t,G,k,!0):(E[Pt-T]=rt+1,Pt>=Q?Q=Pt:Et=!0,y(_t,B[Pt],F,null,G,k,nt,ft,ut),J++)}const O=Et?P_(E):Rr;for(L=O.length-1,rt=K-1;rt>=0;rt--){const _t=T+rt,Pt=B[_t],It=B[_t+1],Dt=_t+1<Tt?It.el||gp(It):W;E[rt]===0?y(null,Pt,F,Dt,G,k,nt,ft,ut):Et&&(L<0||rt!==O[L]?gt(Pt,F,Dt,2):L--)}}},gt=(R,B,F,W,G=null)=>{const{el:k,type:nt,transition:ft,children:ut,shapeFlag:rt}=R;if(rt&6){gt(R.component.subTree,B,F,W);return}if(rt&128){R.suspense.move(B,F,W);return}if(rt&64){nt.move(R,B,F,zt);return}if(nt===Sn){i(k,B,F);for(let P=0;P<ut.length;P++)gt(ut[P],B,F,W);i(R.anchor,B,F);return}if(nt===wl){D(R,B,F);return}if(W!==2&&rt&1&&ft)if(W===0)ft.persisted&&!k[El]?i(k,B,F):(ft.beforeEnter(k),i(k,B,F),wn(()=>ft.enter(k),G));else{const{leave:P,delayLeave:wt,afterLeave:Ct}=ft,T=()=>{R.ctx.isUnmounted?r(k):i(k,B,F)},g=()=>{const L=k._isLeaving||!!k[El];k._isLeaving&&k[El](!0),ft.persisted&&!L?T():P(k,()=>{T(),Ct&&Ct()})};wt?wt(k,T,g):g()}else i(k,B,F)},Lt=(R,B,F,W=!1,G=!1)=>{const{type:k,props:nt,ref:ft,children:ut,dynamicChildren:rt,shapeFlag:Tt,patchFlag:P,dirs:wt,cacheIndex:Ct,memo:T}=R;if((P===-2||rt&&rt.hasOnce)&&(G=!1),ft!=null&&($i(),Ys(ft,null,F,R,!0),qi()),Ct!=null&&(!R.ctx||R.ctx===B)&&(B.renderCache[Ct]=void 0),Tt&256){B.ctx.deactivate(R);return}const g=Tt&1&&wt,L=!Ks(R);let J;if(L&&(J=nt&&nt.onVnodeBeforeUnmount)&&si(J,B,R),Tt&6)re(R.component,F,W);else{if(Tt&128){R.suspense.unmount(F,W);return}g&&xr(R,null,B,"beforeUnmount"),Tt&64?R.type.remove(R,B,F,zt,W):rt&&!rt.hasOnce&&(k!==Sn||P>0&&P&64)?ie(rt,B,F,!1,!0):(k===Sn&&P&384||!G&&Tt&16)&&ie(ut,B,F),W&&Vt(R)}const K=T!=null&&Ct==null;(L&&(J=nt&&nt.onVnodeUnmounted)||g||K)&&wn(()=>{J&&si(J,B,R),g&&xr(R,null,B,"unmounted"),K&&(R.el=null)},F)},Vt=R=>{const{type:B,el:F,anchor:W,transition:G}=R;if(B===Sn){ne(F,W);return}if(B===wl){M(R),G&&!G.persisted&&G.afterLeave&&G.afterLeave();return}const k=()=>{r(F),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(R.shapeFlag&1&&G&&!G.persisted){const{leave:nt,delayLeave:ft}=G,ut=()=>nt(F,k);ft?ft(R.el,k,ut):ut()}else k()},ne=(R,B)=>{let F;for(;R!==B;)F=h(R),r(R),R=F;r(B)},re=(R,B,F)=>{const{bum:W,scope:G,job:k,subTree:nt,um:ft,m:ut,a:rt}=R;Ch(ut),Ch(rt),W&&go(W),G.stop(),k?(k.flags|=8,Lt(nt,R,B,F)):R.vnode.el&&nt&&(nt.transition=R.vnode.transition,Lt(nt,R,B,F)),ft&&wn(ft,B),wn(()=>{R.isUnmounted=!0},B)},ie=(R,B,F,W=!1,G=!1,k=0)=>{for(let nt=k;nt<R.length;nt++)Lt(R[nt],B,F,W,G)},pt=R=>{if(R.shapeFlag&6)return pt(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const B=h(R.anchor||R.el),F=B&&B[Xg];return F?h(F):B};let ct=!1;const At=(R,B,F)=>{let W;R==null?B._vnode&&(Lt(B._vnode,null,null,!0),W=B._vnode.component):y(B._vnode||null,R,B,null,null,null,F),B._vnode=R,ct||(ct=!0,vh(W),$d(),ct=!1)},zt={p:y,um:Lt,m:gt,r:Vt,mt:N,mc:S,pc:mt,pbc:V,n:pt,o:n};return{render:At,hydrate:void 0,createApp:d_(At)}}function Al({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Sr({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function R_(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function pp(n,t,e=!1){const i=n.children,r=t.children;if(ae(i)&&ae(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Ni(r[s]),o.el=a.el),!e&&o.patchFlag!==-2&&pp(a,o)),o.type===nl&&(o.patchFlag===-1&&(o=r[s]=Ni(o)),o.el=a.el),o.type===Yi&&!o.el&&(o.el=a.el)}}function P_(n){const t=n.slice(),e=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=e[e.length-1],n[r]<c){t[i]=r,e.push(i);continue}for(s=0,a=e.length-1;s<a;)o=s+a>>1,n[e[o]]<c?s=o+1:a=o;c<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,a=e[s-1];s-- >0;)e[s]=a,a=t[a];return e}function mp(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:mp(t)}function Ch(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function gp(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?gp(t.subTree):null}const _p=n=>n.__isSuspense;function D_(n,t){t&&t.pendingBranch?ae(n)?t.effects.push(...n):t.effects.push(n):zg(n)}const Sn=Symbol.for("v-fgt"),nl=Symbol.for("v-txt"),Yi=Symbol.for("v-cmt"),wl=Symbol.for("v-stc"),Nr=[];let In=null;function we(n=!1){Nr.push(In=n?null:[])}function vp(){Nr.pop(),In=Nr[Nr.length-1]||null}let sa=1;function Rh(n,t=!1){sa+=n,n<0&&In&&t&&(In.hasOnce=!0)}function xp(n){return n.dynamicChildren=sa>0?In||Rr:null,vp(),sa>0&&In&&In.push(n),n}function Le(n,t,e,i,r,s){return xp(j(n,t,e,i,r,s,!0))}function L_(n,t,e,i,r){return xp(Hi(n,t,e,i,r,!0))}function Sp(n){return n?n.__v_isVNode===!0:!1}function Rs(n,t){return n.type===t.type&&n.key===t.key}const Mp=({key:n})=>n??null,vo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?We(n)||fn(n)||ue(n)?{i:kn,r:n,k:t,f:!!e}:n:null);function j(n,t=null,e=null,i=0,r=null,s=n===Sn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Mp(t),ref:t&&vo(t),scopeId:Yd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:kn};return o?(Lo(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=We(e)?8:16),sa>0&&!a&&In&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&In.push(l),l}const Hi=I_;function I_(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===s_)&&(n=Yi),Sp(n)){const o=fs(n,t,!0);return e&&Lo(o,e),sa>0&&!s&&In&&(o.shapeFlag&6?In[In.indexOf(n)]=o:In.push(o)),o.patchFlag=-2,o}if(W_(n)&&(n=n.__vccOpts),t){t=U_(t);let{class:o,style:l}=t;o&&!We(o)&&(t.class=Zn(o)),Ie(l)&&(Lu(l)&&!ae(l)&&(l=on({},l)),t.style=Zo(l))}const a=We(n)?1:_p(n)?128:Qo(n)?64:Ie(n)?4:ue(n)?2:0;return j(n,t,e,i,r,a,s,!0)}function U_(n){return n?Lu(n)||lp(n)?on({},n):n:null}function fs(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=t?N_(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Mp(c),ref:t&&t.ref?e&&s?ae(s)?s.concat(vo(t)):[s,vo(t)]:vo(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Sn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fs(n.ssContent),ssFallback:n.ssFallback&&fs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Uu(u,l.clone(u)),u}function le(n=" ",t=0){return Hi(nl,null,n,t)}function nn(n="",t=!1){return t?(we(),L_(Yi,null,n)):Hi(Yi,null,n)}function ui(n){return n==null||typeof n=="boolean"?Hi(Yi):ae(n)?Hi(Sn,null,n.slice()):Sp(n)?Ni(n):Hi(nl,null,String(n))}function Ni(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:fs(n)}function Lo(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(ae(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Lo(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!lp(t)?t._ctx=kn:r===3&&kn&&(kn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(ue(t)){if(i&65){Lo(n,{default:t});return}t={default:t,_ctx:kn},e=32}else t=String(t),i&64?(e=16,t=[le(t)]):e=8;n.children=t,n.shapeFlag|=e}function N_(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=Zn([t.class,i.class]));else if(r==="style")t.style=Zo([t.style,i.style]);else if($o(r)){const s=t[r],a=i[r];a&&s!==a&&!(ae(s)&&s.includes(a))?t[r]=s?[].concat(s,a):a:a==null&&s==null&&!qo(r)&&(t[r]=a)}else r!==""&&(t[r]=i[r])}return t}function si(n,t,e,i=null){ni(n,t,7,[e,i])}const F_=ip();let O_=0;function B_(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||F_,s={uid:O_++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ug(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:up(i,r),emitsOptions:rp(i,r),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:i.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=m_.bind(null,s),n.ce&&n.ce(s),s}let Mn=null;const z_=()=>Mn||kn;let Io,aa;{const n=Ko(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Io=t("__VUE_INSTANCE_SETTERS__",e=>Mn=e),aa=t("__VUE_SSR_SETTERS__",e=>oa=e)}const va=n=>{const t=Mn;return Io(n),n.scope.on(),()=>{n.scope.off(),Io(t)}},Ph=()=>{Mn&&Mn.scope.off(),Io(null)};function yp(n){return n.vnode.shapeFlag&4}let oa=!1;function V_(n,t=!1,e=!1){t&&aa(t);const{props:i,children:r}=n.vnode,s=yp(n);M_(n,i,s,t),T_(n,r,e||t);const a=s?H_(n,t):void 0;return t&&aa(!1),a}function H_(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,a_);const{setup:i}=e;if(i){$i();const r=n.setupContext=i.length>1?G_(n):null,s=va(n),a=_a(i,n,0,[n.props,r]),o=vd(a);if(qi(),s(),(o||n.sp)&&!Ks(n)&&jd(n),o){if(a.then(Ph,Ph),t)return a.then(l=>{aa(!0);try{Dh(n,l,t)}finally{aa(!1)}}).catch(l=>{jo(l,n,0)});n.asyncDep=a}else Dh(n,a)}else bp(n)}function Dh(n,t,e){ue(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Ie(t)&&(n.setupState=kd(t)),bp(n)}function bp(n,t,e){const i=n.type;n.render||(n.render=i.render||gi);{const r=va(n);$i();try{o_(n)}finally{qi(),r()}}}const k_={get(n,t){return un(n,"get",""),n[t]}};function G_(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,k_),slots:n.slots,emit:n.emit,expose:t}}function il(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(kd(Pg(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Zs)return Zs[e](n)},has(t,e){return e in t||e in Zs}})):n.proxy}function W_(n){return ue(n)&&"__vccOpts"in n}const Ii=(n,t)=>Ug(n,t,oa),X_="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wc;const Lh=typeof window<"u"&&window.trustedTypes;if(Lh)try{wc=Lh.createPolicy("vue",{createHTML:n=>n})}catch{}const Ep=wc?n=>wc.createHTML(n):n=>n,$_="http://www.w3.org/2000/svg",q_="http://www.w3.org/1998/Math/MathML",Ui=typeof document<"u"?document:null,Ih=Ui&&Ui.createElement("template"),Y_={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?Ui.createElementNS($_,n):t==="mathml"?Ui.createElementNS(q_,n):e?Ui.createElement(n,{is:e}):Ui.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Ui.createTextNode(n),createComment:n=>Ui.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ui.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const a=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Ih.innerHTML=Ep(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Ih.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},K_=Symbol("_vtc");function Z_(n,t,e){const i=n[K_];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Uh=Symbol("_vod"),J_=Symbol("_vsh"),j_=Symbol(""),Q_=/(?:^|;)\s*display\s*:/;function tv(n,t,e){const i=n.style,r=We(e);let s=!1;if(e&&!r){if(t)if(We(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();e[o]==null&&zs(i,o,"")}else for(const a in t)e[a]==null&&zs(i,a,"");for(const a in e){a==="display"&&(s=!0);const o=e[a];o!=null?nv(n,a,!We(t)&&t?t[a]:void 0,o)||zs(i,a,o):zs(i,a,"")}}else if(r){if(t!==e){const a=i[j_];a&&(e+=";"+a),i.cssText=e,s=Q_.test(e)}}else t&&n.removeAttribute("style");Uh in n&&(n[Uh]=s?i.display:"",n[J_]&&(i.display="none"))}const Na=/\s*!important$/;function zs(n,t,e){if(ae(e))e.forEach(i=>zs(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))Na.test(e)?n.setProperty(t,e.replace(Na,""),"important"):n.setProperty(t,e);else{const i=ev(n,t);Na.test(e)?n.setProperty(Vr(i),e.replace(Na,""),"important"):n[i]=e}}const Nh=["Webkit","Moz","ms"],Cl={};function ev(n,t){const e=Cl[t];if(e)return e;let i=Qn(t);if(i!=="filter"&&i in n)return Cl[t]=i;i=Md(i);for(let r=0;r<Nh.length;r++){const s=Nh[r]+i;if(s in n)return Cl[t]=s}return t}function nv(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&We(i)&&e===i}const Fh="http://www.w3.org/1999/xlink";function Oh(n,t,e,i,r,s=og(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Fh,t.slice(6,t.length)):n.setAttributeNS(Fh,t,e):e==null||s&&!bd(e)?n.removeAttribute(t):n.setAttribute(t,s?"":vi(e)?String(e):e)}function Bh(n,t,e,i,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Ep(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(o!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let a=!1;if(e===""||e==null){const o=typeof n[t];o==="boolean"?e=bd(e):e==null&&o==="string"?(e="",a=!0):o==="number"&&(e=0,a=!0)}try{n[t]=e}catch{}a&&n.removeAttribute(r||t)}function Cr(n,t,e,i){n.addEventListener(t,e,i)}function iv(n,t,e,i){n.removeEventListener(t,e,i)}const zh=Symbol("_vei");function rv(n,t,e,i,r=null){const s=n[zh]||(n[zh]={}),a=s[t];if(i&&a)a.value=i;else{const[o,l]=ov(t);if(i){const c=s[t]=uv(i,r);Cr(n,o,c,l)}else a&&(iv(n,o,a,l),s[t]=void 0)}}const sv=/(Once|Passive|Capture)$/,av=/^on:?(?:Once|Passive|Capture)$/;function ov(n){let t,e;for(;(e=n.match(sv))&&!av.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Vr(n.slice(2)),t]}let Rl=0;const lv=Promise.resolve(),cv=()=>Rl||(lv.then(()=>Rl=0),Rl=Date.now());function uv(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const r=e.value;if(ae(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const a=r.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&ni(c,t,5,o)}}else ni(r,t,5,[i])};return e.value=n,e.attached=cv(),e}const Vh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,hv=(n,t,e,i,r,s)=>{const a=r==="svg";t==="class"?Z_(n,i,a):t==="style"?tv(n,e,i):$o(t)?qo(t)||rv(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):fv(n,t,i,a))?(Bh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Oh(n,t,i,a,s,t!=="value")):n._isVueCE&&(dv(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!We(i)))?Bh(n,Qn(t),i,s,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Oh(n,t,i,a))};function fv(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Vh(t)&&ue(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Vh(t)&&We(e)?!1:t in n}function dv(n,t){const e=n._def.props;if(!e)return!1;const i=Qn(t);return Array.isArray(e)?e.some(r=>Qn(r)===i):Object.keys(e).some(r=>Qn(r)===i)}const Uo=n=>{const t=n.props["onUpdate:modelValue"]||!1;return ae(t)?e=>go(t,e):t};function pv(n){n.target.composing=!0}function Hh(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Dr=Symbol("_assign"),Fa=Symbol("_initialValue");function Pl(n,t,e){return t&&(n=n.trim()),e&&(n=Tu(n)),n}const On={created(n,{modifiers:{lazy:t,trim:e,number:i}},r){n.parentNode&&(n.type==="text"?n[Fa]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Fa]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Dr]=Uo(r);const s=i||r.props&&r.props.type==="number";Cr(n,t?"change":"input",a=>{a.target.composing||n[Dr](Pl(n.value,e,s))}),(e||s)&&Cr(n,"change",()=>{n.value=Pl(n.value,e,s)}),t||(Cr(n,"compositionstart",pv),Cr(n,"compositionend",Hh),Cr(n,"change",Hh))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const r=t??"",s=n[Fa];delete n[Fa],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[Dr](Pl(n.value,e,i)):n.value=r},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:r,number:s}},a){if(n[Dr]=Uo(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?Tu(n.value):n.value,l=t??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||r&&n.value.trim()===l)||(n.value=l)}},Mr={deep:!0,created(n,t,e){n[Dr]=Uo(e),Cr(n,"change",()=>{const i=n._modelValue,r=mv(n),s=n.checked,a=n[Dr];if(ae(i)){const o=Ed(i,r),l=o!==-1;if(s&&!l)a(i.concat(r));else if(!s&&l){const c=[...i];c.splice(o,1),a(c)}}else if(hs(i)){const o=new Set(i);s?o.add(r):o.delete(r),a(o)}else a(Tp(n,s))})},mounted:kh,beforeUpdate(n,t,e){n[Dr]=Uo(e),kh(n,t,e)}};function kh(n,{value:t,oldValue:e},i){n._modelValue=t;let r;if(ae(t))r=Ed(t,i.props.value)>-1;else if(hs(t))r=t.has(i.props.value);else{if(t===e)return;r=_s(t,Tp(n,!0))}n.checked!==r&&(n.checked=r)}function mv(n){return"_value"in n?n._value:n.value}function Tp(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const gv=on({patchProp:hv},Y_);let Gh;function _v(){return Gh||(Gh=w_(gv))}const vv=((...n)=>{const t=_v().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=Sv(i);if(!r)return;const s=t._component;!ue(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=e(r,!1,xv(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},t});function xv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Sv(n){return We(n)?document.querySelector(n):n}const tr=Math.PI/180,Oa={haStar:1,cStar:.25,rhoFStar:.38};function Mv(n,t){return{x:n*(Math.sin(t)-t*Math.cos(t)),y:n*(Math.cos(t)+t*Math.sin(t))}}function yv(n){return Math.tan(n)-n}function Wh(n,t){const e=n/t;return Math.sqrt(Math.max(0,e*e-1))}function Xh(n,t){const e=Math.cos(t),i=Math.sin(t);return{x:n.x*e-n.y*i,y:n.x*i+n.y*e}}function Vs(n,t){return{x:n*Math.cos(t),y:n*Math.sin(t)}}function bv(n,t,e,i){const r=[];for(let s=0;s<=i;s++){const a=t+(e-t)*s/i;r.push(Vs(n,a))}return r}function $h(n,t=16){const{z:e,module:i,alpha:r}=n,s=i*e/2,a=s*Math.cos(r),o=s+Oa.haStar*i,l=s-(Oa.haStar+Oa.cStar)*i,c=Math.PI*i,u=c*Math.cos(r),f=Math.PI*i/2,h=2*Math.PI/e,d=a>l,_=yv(r),y=Math.PI/(2*e)+_,m=Wh(o,a),p=Math.atan(m),A=m-Math.atan(m),D=Math.PI/(2*e)+_-A,M=2*o*D,w=D<=0,C=2/(Math.sin(r)*Math.sin(r)),z=e<C,S=ct=>({x:-ct.x,y:ct.y}),I=d?0:Wh(l,a),V=(ct,At,zt,Nt)=>{const R=[];for(let B=0;B<=Nt;B++){const F=At+(zt-At)*B/Nt,W=Xh(Mv(a,F),y);R.push(ct===1?S(W):W)}return R},X=6,Z=ct=>{const At=-ct,zt=Math.PI/2+At*y,Nt=V(ct,I,I,1);if(!d)return{j:Nt[0],jAngle:Math.atan2(Nt[0].y,Nt[0].x),fillet:[],flankLo:null};const R=Math.PI/2+At*(h/2),B=(a*a-l*l)/(2*l),F=Math.abs(zt-R),W=Math.sin(F),G=W<1?l*W/(1-W):1/0,k=Math.max(0,Math.min(Oa.rhoFStar*i,B*.999,G*.999)),nt=l+k,ft=Math.asin(Math.min(1,k/nt)),ut=ct===1?zt-ft:zt+ft,rt=Vs(nt,ut),Tt=Vs(l,ut),P=Math.sqrt(Math.max(0,nt*nt-k*k)),wt=Vs(P,zt),Ct=Math.atan2(Tt.y-rt.y,Tt.x-rt.x);let g=Math.atan2(wt.y-rt.y,wt.x-rt.x)-Ct;for(;g>Math.PI;)g-=2*Math.PI;for(;g<-Math.PI;)g+=2*Math.PI;g=Math.abs(g)*-ct;const L=[];for(let J=0;J<=X;J++){const K=Ct+g*J/X;L.push({x:rt.x+k*Math.cos(K),y:rt.y+k*Math.sin(K)})}return{j:Tt,jAngle:ut,fillet:L,flankLo:Nt[0]}},at=Z(1),N=Z(-1),it=V(1,I,m,t),st=V(-1,I,m,t),et=it[t],mt=st[t],ht=Math.atan2(et.y,et.x),vt=Math.atan2(mt.y,mt.x),gt=[];gt.push(...at.fillet),at.flankLo&&gt.push(at.flankLo),gt.push(...it.slice(1));let Lt=vt-ht;for(;Lt>Math.PI;)Lt-=2*Math.PI;for(;Lt<-Math.PI;)Lt+=2*Math.PI;const Vt=Math.max(4,Math.ceil(Math.abs(Lt)/h*24));gt.push(...bv(o,ht,ht+Lt,Vt).slice(1));for(let ct=t-1;ct>=0;ct--)gt.push(st[ct]);N.flankLo&&(gt.push(N.flankLo),gt.push(N.fillet[N.fillet.length-1])),gt.push(...N.fillet.slice(0,-1).reverse());const ne=[],re=6,ie=ct=>{const At=ne[ne.length-1];(!At||Math.hypot(ct.x-At.x,ct.y-At.y)>1e-10)&&ne.push(ct)};for(let ct=0;ct<e;ct++){const At=ct*h,zt=gt.map(B=>Xh(B,At)),Nt=N.jAngle+At,R=at.jAngle+(ct+1)*h;for(const B of zt.slice(0,-1))ie(B);for(let B=1;B<=re;B++){const F=Nt+(R-Nt)*B/re;ie(Vs(l,F))}}if(ne.length>1){const ct=ne[0],At=ne[ne.length-1];Math.hypot(ct.x-At.x,ct.y-At.y)<1e-10&&ne.pop()}const pt=Array.from({length:e},(ct,At)=>Math.PI/2+At*h);return{input:n,pitchR:s,baseR:a,addendumR:o,dedendumR:l,baseAboveRoot:d,circularPitch:c,basePitch:u,toothThickness:f,beta:y,taTip:m,zMinValue:C,undercut:z,alphaTip:p,tipThickness:M,pointed:w,toothProfile:gt,outline:ne,toothCenterAngles:pt,jAngleRight:at.jAngle,jAngleLeft:N.jAngle}}function No(n,t,e,i){const r=Math.cos(i),s=Math.sin(i);return n.map(a=>({x:t+a.x*r-a.y*s,y:e+a.x*s+a.y*r}))}function qh(n){const t=[];return(!Number.isFinite(n.z)||n.z<4||Math.abs(n.z-Math.round(n.z))>1e-9)&&t.push("齿数必须为 ≥4 的整数"),(!(n.module>0)||!Number.isFinite(n.module))&&t.push("模数必须 > 0"),(!(n.alpha>0)||n.alpha>=Math.PI/2)&&t.push("压力角必须在 (0°, 90°) 内"),n.faceWidth>0||t.push("齿宽必须 > 0"),t}function Ev(n){const{g1:t,g2:e,centerDistance:i}=n,r=t.pitchR+e.pitchR,s=t.input.alpha,a=Math.min(1,Math.max(-1,r*Math.cos(s)/i)),o=Math.acos(a),l=t.baseR/Math.cos(o),c=e.baseR/Math.cos(o),u=i-r,f=Lt=>Math.tan(Lt)-Lt,h=2*i*(f(o)-f(s)),d=h*Math.cos(o),_=i-t.addendumR-e.dedendumR,y=i-e.addendumR-t.dedendumR,m=Math.abs(t.basePitch-e.basePitch),p=m<1e-6,A=[],D=i<t.addendumR+e.addendumR;D&&A.push("中心距小于两齿顶圆半径之和，齿顶圆交叉，必然实体干涉"),(_<0||y<0)&&A.push("存在齿顶与对方齿根圆交叉（顶隙为负）"),Math.abs(u)>1e-9&&(u>0?A.push(`非标准中心距（+${u.toFixed(3)} mm）：有侧隙安装，啮合角增大，不再是无侧隙啮合`):A.push("中心距小于标准值：无侧隙空间，齿面相互挤压（仅教学演示干涉）")),p||A.push(`两轮基节不等（差 ${m.toFixed(4)} mm），不能正确啮合`);const M={x:l,y:0},w=Math.sin(o),C=Math.cos(o),z=-l*w,S={x:M.x+z*w,y:M.y+z*C},I=c*w,V={x:M.x+I*w,y:M.y+I*C},X=(Lt,Vt)=>{const ne=M.x-Lt,re=M.y,ie=2*(ne*w+re*C),pt=ne*ne+re*re-Vt*Vt,ct=ie*ie-4*pt;if(ct<0)return[];const At=Math.sqrt(ct);return[(-ie-At)/2,(-ie+At)/2]},Z=X(0,t.addendumR),N=X(i,e.addendumR).filter(Lt=>Lt<=1e-9),it=Z.filter(Lt=>Lt>=-1e-9),st=N.length?Math.max(...N):z,et=it.length?Math.min(...it):I,mt={x:M.x+st*w,y:M.y+st*C},ht={x:M.x+et*w,y:M.y+et*C},vt=Math.max(0,et-st),gt=vt/t.basePitch;return{a0:r,a:i,alphaPrime:o,pitchR1:l,pitchR2:c,deltaA:u,backlashTangential:Math.max(0,h),backlashNormal:Math.max(0,d),clearance12:_,clearance21:y,basePitchMatch:p,basePitchDiff:m,addendumOverlap:D,actionLine:{p0:mt,p1:ht},tangentLine:{p0:S,p1:V},pitchPoint:M,pathOfContact:vt,contactRatio:gt,ok:p&&!D,warnings:A}}function Cc(n,t,e,i){const r=n.alphaPrime,s=Math.sin(r),a=Math.cos(r),o=Math.tan(r)+i/t.baseR,l=Math.tan(r)-i/e.baseR,c=o-Math.atan(o),u=l-Math.atan(l),f=Math.PI/2+t.beta-c,h=Math.PI/2+e.beta-u,d=Math.atan2(i*a,n.pitchR1+i*s),_=Math.atan2(i*a,-n.pitchR2+i*s),y=d-f,m=_-h;return{phi1:y,phi2:m,t1:o,t2:l}}function Yh(n,t,e,i){const r=e.alphaPrime,s=Math.sin(r),a=Math.cos(r);let o=0;for(let h=0;h<30;h++){const d=Math.tan(r)+o/n.baseR,_=d-Math.atan(d),y=Math.PI/2+n.beta-_,p=Math.atan2(o*a,e.pitchR1+o*s)-y-i;if(o-=p/(1/n.baseR),Math.abs(p)<1e-12)break}const l=Math.tan(r)-o/t.baseR,c=l-Math.atan(l),u=Math.PI/2+t.beta-c;return Math.atan2(o*a,-e.pitchR2+o*s)-u}function Tv(n,t){const e=n.alphaPrime,i=Math.sin(e),r=Math.cos(e);return{x:n.pitchPoint.x+t*i,y:n.pitchPoint.y+t*r}}function Av(n,t){for(n=Math.abs(Math.round(n)),t=Math.abs(Math.round(t));t;){const e=n%t;n=t,t=e}return n||1}function Ap(n,t){const e=Av(n,t),i=n/e*t,r=t/e,s=n/e;return{gcd:e,pairsPerCycle:i,rev1:r,rev2:s,periodPhi1:2*Math.PI*r,periodPhi2:2*Math.PI*s}}function wp(n){const t=Math.sin(n.alphaPrime),e=Math.cos(n.alphaPrime),i=(n.actionLine.p0.x-n.pitchPoint.x)*t+(n.actionLine.p0.y-n.pitchPoint.y)*e,r=(n.actionLine.p1.x-n.pitchPoint.x)*t+(n.actionLine.p1.y-n.pitchPoint.y)*e;return[i,r]}function Kh(n,t,e,i){const r=i.x-t,s=i.y,a=Math.cos(-e),o=Math.sin(-e),l=r*a-s*o,c=r*o+s*a,u=Math.atan2(c,l),f=n.input.z,h=(u-Math.PI/2)/(2*Math.PI/f);return(Math.round(h)%f+f)%f}function Zh(n,t,e,i,r){const[s,a]=wp(e),o=s+(a-s)*r,l=Cc(e,n,t,o),c=2*Math.PI/n.input.z,u=2*Math.PI/t.input.z,f=l.phi1+i*c,h=l.phi2+(o<0?2*Math.PI:0)-i*u,d=Tv(e,o);return{i:-1,engagement:i,frac:r,k1:Kh(n,0,f,d),k2:Kh(t,e.a,h,d),phi1:f,phi2:h,s:o,cx:d.x,cy:d.y}}function wv(n,t,e,i){const r=Math.max(1,Math.round(i)),s=Ap(n.input.z,t.input.z),a=[];for(let o=0;o<s.pairsPerCycle;o++)for(let l=0;l<=r;l++)a.push(Zh(n,t,e,o,l/r));return a.push(Zh(n,t,e,s.pairsPerCycle,0)),a.sort((o,l)=>o.phi1-l.phi1||o.engagement-l.engagement),a.forEach((o,l)=>o.i=l),a}const Cv="modulepreload",Rv=function(n,t){return new URL(n,t).href},Jh={},Pv=function(t,e,i){let r=Promise.resolve();if(e&&e.length>0){let a=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");r=a(e.map(u=>{if(u=Rv(u,i),u in Jh)return;Jh[u]=!0;const f=u.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(!!i)for(let y=o.length-1;y>=0;y--){const m=o[y];if(m.href===u&&(!f||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":Cv,f||(_.as="script"),_.crossOrigin="",_.href=u,c&&_.setAttribute("nonce",c),document.head.appendChild(_),f)return new Promise((y,m)=>{_.addEventListener("load",y),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};async function Dv(n={}){var t,e=n,i=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,s=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";if(s){const{createRequire:x}=await Pv(()=>import("./__vite-browser-external-BIHI7g3E.js"),[],import.meta.url);var a=x(import.meta.url)}var o=import.meta.url,l="";function c(x){return e.locateFile?e.locateFile(x,l):l+x}var u,f;if(s){var h=a("fs");o.startsWith("file:")&&(l=a("path").dirname(a("url").fileURLToPath(o))+"/"),f=x=>{x=m(x)?new URL(x):x;var v=h.readFileSync(x);return v},u=async(x,v=!0)=>{x=m(x)?new URL(x):x;var U=h.readFileSync(x,v?void 0:"utf8");return U},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else if(i||r){try{l=new URL(".",o).href}catch{}r&&(f=x=>{var v=new XMLHttpRequest;return v.open("GET",x,!1),v.responseType="arraybuffer",v.send(null),new Uint8Array(v.response)}),u=async x=>{if(m(x))return new Promise((U,H)=>{var tt=new XMLHttpRequest;tt.open("GET",x,!0),tt.responseType="arraybuffer",tt.onload=()=>{if(tt.status==200||tt.status==0&&tt.response){U(tt.response);return}H(tt.status)},tt.onerror=H,tt.send(null)});var v=await fetch(x,{credentials:"same-origin"});if(v.ok)return v.arrayBuffer();throw new Error(v.status+" : "+v.url)}}console.log.bind(console);var d=console.error.bind(console),_,y=!1,m=x=>x.startsWith("file://"),p,A,D,M,w,C,z,S,I,V,X,Z,at=!1;function N(){var x=Ca.buffer;D=new Int8Array(x),w=new Int16Array(x),e.HEAPU8=M=new Uint8Array(x),C=new Uint16Array(x),z=new Int32Array(x),S=new Uint32Array(x),I=new Float32Array(x),V=new Float64Array(x),X=new BigInt64Array(x),Z=new BigUint64Array(x)}function it(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)Nt(e.preRun.shift());pt(zt)}function st(){at=!0,ws.E()}function et(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)At(e.postRun.shift());pt(ct)}function mt(x){e.onAbort?.(x),x="Aborted("+x+")",d(x),y=!0,x+=". Build with -sASSERTIONS for more info.";var v=new WebAssembly.RuntimeError(x);throw A?.(v),v}var ht;function vt(){return e.locateFile?c("clipper2z.wasm"):new URL(""+new URL("clipper2z-Cj78y2Ub.wasm",import.meta.url).href,import.meta.url).href}function gt(x){if(x==ht&&_)return new Uint8Array(_);if(f)return f(x);throw"both async and sync fetching of the wasm failed"}async function Lt(x){if(!_)try{var v=await u(x);return new Uint8Array(v)}catch{}return gt(x)}async function Vt(x,v){try{var U=await Lt(x),H=await WebAssembly.instantiate(U,v);return H}catch(tt){d(`failed to asynchronously prepare wasm: ${tt}`),mt(tt)}}async function ne(x,v,U){if(!x&&!m(v)&&!s)try{var H=fetch(v,{credentials:"same-origin"}),tt=await WebAssembly.instantiateStreaming(H,U);return tt}catch(xt){d(`wasm streaming compile failed: ${xt}`),d("falling back to ArrayBuffer instantiation")}return Vt(v,U)}function re(){var x={a:Wm};return x}async function ie(){function x(xt,Mt){return ws=xt.exports,Gm(ws),N(),ws}function v(xt){return x(xt.instance)}var U=re();if(e.instantiateWasm)return new Promise((xt,Mt)=>{e.instantiateWasm(U,(yt,Rt)=>{xt(x(yt))})});ht??=vt();var H=await ne(_,ht,U),tt=v(H);return tt}var pt=x=>{for(;x.length>0;)x.shift()(e)},ct=[],At=x=>ct.push(x),zt=[],Nt=x=>zt.push(x);class R{constructor(v){this.excPtr=v,this.ptr=v-24}set_type(v){S[this.ptr+4>>2]=v}get_type(){return S[this.ptr+4>>2]}set_destructor(v){S[this.ptr+8>>2]=v}get_destructor(){return S[this.ptr+8>>2]}set_caught(v){v=v?1:0,D[this.ptr+12]=v}get_caught(){return D[this.ptr+12]!=0}set_rethrown(v){v=v?1:0,D[this.ptr+13]=v}get_rethrown(){return D[this.ptr+13]!=0}init(v,U){this.set_adjusted_ptr(0),this.set_type(v),this.set_destructor(U)}set_adjusted_ptr(v){S[this.ptr+16>>2]=v}get_adjusted_ptr(){return S[this.ptr+16>>2]}}var B=0,F=(x,v,U)=>{var H=new R(x);throw H.init(v,U),B=x,B},W=()=>mt(""),G={},k=x=>{for(;x.length;){var v=x.pop(),U=x.pop();U(v)}};function nt(x){return this.fromWireType(S[x>>2])}var ft={},ut={},rt={},Tt=class extends Error{constructor(v){super(v),this.name="InternalError"}},P=x=>{throw new Tt(x)},wt=(x,v,U)=>{x.forEach(yt=>rt[yt]=v);function H(yt){var Rt=U(yt);Rt.length!==x.length&&P("Mismatched type converter count");for(var ee=0;ee<x.length;++ee)K(x[ee],Rt[ee])}var tt=new Array(v.length),xt=[],Mt=0;v.forEach((yt,Rt)=>{ut.hasOwnProperty(yt)?tt[Rt]=ut[yt]:(xt.push(yt),ft.hasOwnProperty(yt)||(ft[yt]=[]),ft[yt].push(()=>{tt[Rt]=ut[yt],++Mt,Mt===xt.length&&H(tt)}))}),xt.length===0&&H(tt)},Ct=x=>{var v=G[x];delete G[x];var U=v.rawConstructor,H=v.rawDestructor,tt=v.fields,xt=tt.map(Mt=>Mt.getterReturnType).concat(tt.map(Mt=>Mt.setterArgumentType));wt([x],xt,Mt=>{var yt={};return tt.forEach((Rt,ee)=>{var te=Rt.fieldName,be=Mt[ee],ke=Mt[ee].optional,Se=Rt.getter,Ge=Rt.getterContext,en=Mt[ee+tt.length],$n=Rt.setter,En=Rt.setterContext;yt[te]={read:Ai=>be.fromWireType(Se(Ge,Ai)),write:(Ai,mn)=>{var Ra=[];$n(En,Ai,en.toWireType(Ra,mn)),k(Ra)},optional:ke}}),[{name:v.name,fromWireType:Rt=>{var ee={};for(var te in yt)ee[te]=yt[te].read(Rt);return H(Rt),ee},toWireType:(Rt,ee)=>{for(var te in yt)if(!(te in ee)&&!yt[te].optional)throw new TypeError(`Missing field: "${te}"`);var be=U();for(te in yt)yt[te].write(be,ee[te]);return Rt!==null&&Rt.push(H,be),be},readValueFromPointer:nt,destructorFunction:H}]})},T=x=>{for(var v="";;){var U=M[x++];if(!U)return v;v+=String.fromCharCode(U)}},g=class extends Error{constructor(v){super(v),this.name="BindingError"}},L=x=>{throw new g(x)};function J(x,v,U={}){var H=v.name;if(x||L(`type "${H}" must have a positive integer typeid pointer`),ut.hasOwnProperty(x)){if(U.ignoreDuplicateRegistrations)return;L(`Cannot register type '${H}' twice`)}if(ut[x]=v,delete rt[x],ft.hasOwnProperty(x)){var tt=ft[x];delete ft[x],tt.forEach(xt=>xt())}}function K(x,v,U={}){return J(x,v,U)}var Et=(x,v,U)=>{switch(v){case 1:return U?H=>D[H]:H=>M[H];case 2:return U?H=>w[H>>1]:H=>C[H>>1];case 4:return U?H=>z[H>>2]:H=>S[H>>2];case 8:return U?H=>X[H>>3]:H=>Z[H>>3];default:throw new TypeError(`invalid integer width (${v}): ${x}`)}},Q=(x,v,U,H,tt)=>{v=T(v);const xt=H===0n;let Mt=yt=>yt;if(xt){const yt=U*8;Mt=Rt=>BigInt.asUintN(yt,Rt),tt=Mt(tt)}K(x,{name:v,fromWireType:Mt,toWireType:(yt,Rt)=>(typeof Rt=="number"&&(Rt=BigInt(Rt)),Rt),readValueFromPointer:Et(v,U,!xt),destructorFunction:null})},E=(x,v,U,H)=>{v=T(v),K(x,{name:v,fromWireType:function(tt){return!!tt},toWireType:function(tt,xt){return xt?U:H},readValueFromPointer:function(tt){return this.fromWireType(M[tt])},destructorFunction:null})},O=x=>({count:x.count,deleteScheduled:x.deleteScheduled,preservePointerOnDelete:x.preservePointerOnDelete,ptr:x.ptr,ptrType:x.ptrType,smartPtr:x.smartPtr,smartPtrType:x.smartPtrType}),_t=x=>{function v(U){return U.$$.ptrType.registeredClass.name}L(v(x)+" instance already deleted")},Pt=!1,It=x=>{},Dt=x=>{x.smartPtr?x.smartPtrType.rawDestructor(x.smartPtr):x.ptrType.registeredClass.rawDestructor(x.ptr)},Jt=x=>{x.count.value-=1;var v=x.count.value===0;v&&Dt(x)},Qt=x=>globalThis.FinalizationRegistry?(Pt=new FinalizationRegistry(v=>{Jt(v.$$)}),Qt=v=>{var U=v.$$,H=!!U.smartPtr;if(H){var tt={$$:U};Pt.register(v,tt,v)}return v},It=v=>Pt.unregister(v),Qt(x)):(Qt=v=>v,x),oe=()=>{let x=Y.prototype;Object.assign(x,{isAliasOf(U){if(!(this instanceof Y)||!(U instanceof Y))return!1;var H=this.$$.ptrType.registeredClass,tt=this.$$.ptr;U.$$=U.$$;for(var xt=U.$$.ptrType.registeredClass,Mt=U.$$.ptr;H.baseClass;)tt=H.upcast(tt),H=H.baseClass;for(;xt.baseClass;)Mt=xt.upcast(Mt),xt=xt.baseClass;return H===xt&&tt===Mt},clone(){if(this.$$.ptr||_t(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var U=Qt(Object.create(Object.getPrototypeOf(this),{$$:{value:O(this.$$)}}));return U.$$.count.value+=1,U.$$.deleteScheduled=!1,U},delete(){this.$$.ptr||_t(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&L("Object already scheduled for deletion"),It(this),Jt(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||_t(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&L("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const v=Symbol.dispose;v&&(x[v]=x.delete)};function Y(){}var Ft=(x,v)=>Object.defineProperty(v,"name",{value:x}),St={},Bt=(x,v,U)=>{if(x[v].overloadTable===void 0){var H=x[v];x[v]=function(...tt){return x[v].overloadTable.hasOwnProperty(tt.length)||L(`Function '${U}' called with an invalid number of arguments (${tt.length}) - expects one of (${x[v].overloadTable})!`),x[v].overloadTable[tt.length].apply(this,tt)},x[v].overloadTable=[],x[v].overloadTable[H.argCount]=H}},Ht=(x,v,U)=>{e.hasOwnProperty(x)?((U===void 0||e[x].overloadTable!==void 0&&e[x].overloadTable[U]!==void 0)&&L(`Cannot register public name '${x}' twice`),Bt(e,x,x),e[x].overloadTable.hasOwnProperty(U)&&L(`Cannot register multiple overloads of a function with the same number of arguments (${U})!`),e[x].overloadTable[U]=v):(e[x]=v,e[x].argCount=U)},bt=48,jt=57,Zt=x=>{x=x.replace(/[^a-zA-Z0-9_]/g,"$");var v=x.charCodeAt(0);return v>=bt&&v<=jt?`_${x}`:x};function Pe(x,v,U,H,tt,xt,Mt,yt){this.name=x,this.constructor=v,this.instancePrototype=U,this.rawDestructor=H,this.baseClass=tt,this.getActualType=xt,this.upcast=Mt,this.downcast=yt,this.pureVirtualFunctions=[]}var me=(x,v,U)=>{for(;v!==U;)v.upcast||L(`Expected null or instance of ${U.name}, got an instance of ${v.name}`),x=v.upcast(x),v=v.baseClass;return x},pn=x=>{if(x===null)return"null";var v=typeof x;return v==="object"||v==="array"||v==="function"?x.toString():""+x};function Nn(x,v){if(v===null)return this.isReference&&L(`null is not a valid ${this.name}`),0;v.$$||L(`Cannot pass "${pn(v)}" as a ${this.name}`),v.$$.ptr||L(`Cannot pass deleted object as a pointer of type ${this.name}`);var U=v.$$.ptrType.registeredClass,H=me(v.$$.ptr,U,this.registeredClass);return H}function fl(x,v){var U;if(v===null)return this.isReference&&L(`null is not a valid ${this.name}`),this.isSmartPointer?(U=this.rawConstructor(),x!==null&&x.push(this.rawDestructor,U),U):0;(!v||!v.$$)&&L(`Cannot pass "${pn(v)}" as a ${this.name}`),v.$$.ptr||L(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&v.$$.ptrType.isConst&&L(`Cannot convert argument of type ${v.$$.smartPtrType?v.$$.smartPtrType.name:v.$$.ptrType.name} to parameter type ${this.name}`);var H=v.$$.ptrType.registeredClass;if(U=me(v.$$.ptr,H,this.registeredClass),this.isSmartPointer)switch(v.$$.smartPtr===void 0&&L("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:v.$$.smartPtrType===this?U=v.$$.smartPtr:L(`Cannot convert argument of type ${v.$$.smartPtrType?v.$$.smartPtrType.name:v.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:U=v.$$.smartPtr;break;case 2:if(v.$$.smartPtrType===this)U=v.$$.smartPtr;else{var tt=v.clone();U=this.rawShare(U,Xt.toHandle(()=>tt.delete())),x!==null&&x.push(this.rawDestructor,U)}break;default:L("Unsupporting sharing policy")}return U}function dl(x,v){if(v===null)return this.isReference&&L(`null is not a valid ${this.name}`),0;v.$$||L(`Cannot pass "${pn(v)}" as a ${this.name}`),v.$$.ptr||L(`Cannot pass deleted object as a pointer of type ${this.name}`),v.$$.ptrType.isConst&&L(`Cannot convert argument of type ${v.$$.ptrType.name} to parameter type ${this.name}`);var U=v.$$.ptrType.registeredClass,H=me(v.$$.ptr,U,this.registeredClass);return H}var Ms=(x,v,U)=>{if(v===U)return x;if(U.baseClass===void 0)return null;var H=Ms(x,v,U.baseClass);return H===null?null:U.downcast(H)},ys={},pl=(x,v)=>{for(v===void 0&&L("ptr should not be undefined");x.baseClass;)v=x.upcast(v),x=x.baseClass;return v},ya=(x,v)=>(v=pl(x,v),ys[v]),gr=(x,v)=>{(!v.ptrType||!v.ptr)&&P("makeClassHandle requires ptr and ptrType");var U=!!v.smartPtrType,H=!!v.smartPtr;return U!==H&&P("Both smartPtrType and smartPtr must be specified"),v.count={value:1},Qt(Object.create(x,{$$:{value:v,writable:!0}}))};function Ei(x){var v=this.getPointee(x);if(!v)return this.destructor(x),null;var U=ya(this.registeredClass,v);if(U!==void 0){if(U.$$.count.value===0)return U.$$.ptr=v,U.$$.smartPtr=x,U.clone();var H=U.clone();return this.destructor(x),H}function tt(){return this.isSmartPointer?gr(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:v,smartPtrType:this,smartPtr:x}):gr(this.registeredClass.instancePrototype,{ptrType:this,ptr:x})}var xt=this.registeredClass.getActualType(v),Mt=St[xt];if(!Mt)return tt.call(this);var yt;this.isConst?yt=Mt.constPointerType:yt=Mt.pointerType;var Rt=Ms(v,this.registeredClass,yt.registeredClass);return Rt===null?tt.call(this):this.isSmartPointer?gr(yt.registeredClass.instancePrototype,{ptrType:yt,ptr:Rt,smartPtrType:this,smartPtr:x}):gr(yt.registeredClass.instancePrototype,{ptrType:yt,ptr:Rt})}var bs=()=>{Object.assign(_r.prototype,{getPointee(x){return this.rawGetPointee&&(x=this.rawGetPointee(x)),x},destructor(x){this.rawDestructor?.(x)},readValueFromPointer:nt,fromWireType:Ei})};function _r(x,v,U,H,tt,xt,Mt,yt,Rt,ee,te){this.name=x,this.registeredClass=v,this.isReference=U,this.isConst=H,this.isSmartPointer=tt,this.pointeeType=xt,this.sharingPolicy=Mt,this.rawGetPointee=yt,this.rawConstructor=Rt,this.rawShare=ee,this.rawDestructor=te,!tt&&v.baseClass===void 0?H?(this.toWireType=Nn,this.destructorFunction=null):(this.toWireType=dl,this.destructorFunction=null):this.toWireType=fl}var Es=(x,v,U)=>{e.hasOwnProperty(x)||P("Replacing nonexistent public symbol"),e[x].overloadTable!==void 0&&U!==void 0?e[x].overloadTable[U]=v:(e[x]=v,e[x].argCount=U)},vr=[],ba=x=>{var v=vr[x];return v||(vr[x]=v=ah.get(x)),v},Je=(x,v,U=!1)=>{x=T(x);function H(){var xt=ba(v);return xt}var tt=H();return typeof tt!="function"&&L(`unknown function pointer with signature ${x}: ${v}`),tt};class Ea extends Error{}var Ts=x=>{var v=sh(x),U=T(v);return Qi(v),U},Ji=(x,v)=>{var U=[],H={};function tt(xt){if(!H[xt]&&!ut[xt]){if(rt[xt]){rt[xt].forEach(tt);return}U.push(xt),H[xt]=!0}}throw v.forEach(tt),new Ea(`${x}: `+U.map(Ts).join([", "]))},ml=(x,v,U,H,tt,xt,Mt,yt,Rt,ee,te,be,ke)=>{te=T(te),xt=Je(tt,xt),yt&&=Je(Mt,yt),ee&&=Je(Rt,ee),ke=Je(be,ke);var Se=Zt(te);Ht(Se,function(){Ji(`Cannot construct ${te} due to unbound types`,[H])}),wt([x,v,U],H?[H]:[],Ge=>{Ge=Ge[0];var en,$n;H?(en=Ge.registeredClass,$n=en.instancePrototype):$n=Y.prototype;var En=Ft(te,function(...vl){if(Object.getPrototypeOf(this)!==Ai)throw new g(`Use 'new' to construct ${te}`);if(mn.constructor_body===void 0)throw new g(`${te} has no accessible constructor`);var hh=mn.constructor_body[vl.length];if(hh===void 0)throw new g(`Tried to invoke ctor of ${te} with invalid number of parameters (${vl.length}) - expected (${Object.keys(mn.constructor_body).toString()}) parameters instead!`);return hh.apply(this,vl)}),Ai=Object.create($n,{constructor:{value:En}});En.prototype=Ai;var mn=new Pe(te,En,Ai,ke,en,xt,yt,ee);mn.baseClass&&(mn.baseClass.__derivedClasses??=[],mn.baseClass.__derivedClasses.push(mn));var Ra=new _r(te,mn,!0,!1,!1),ch=new _r(te+"*",mn,!1,!1,!1),uh=new _r(te+" const*",mn,!1,!0,!1);return St[x]={pointerType:ch,constPointerType:uh},Es(Se,En),[Ra,ch,uh]})},As=(x,v)=>{for(var U=[],H=0;H<x;H++)U.push(S[v+H*4>>2]);return U};function Ta(x){for(var v=1;v<x.length;++v)if(x[v]!==null&&x[v].destructorFunction===void 0)return!0;return!1}function Aa(x,v,U,H){var tt=Ta(x),xt=x.length-2,Mt=[],yt=["fn"];v&&yt.push("thisWired");for(var Rt=0;Rt<xt;++Rt)Mt.push(`arg${Rt}`),yt.push(`arg${Rt}Wired`);Mt=Mt.join(","),yt=yt.join(",");var ee=`return function (${Mt}) {
`;tt&&(ee+=`var destructors = [];
`);var te=tt?"destructors":"null",be=["humanName","throwBindingError","invoker","fn","runDestructors","fromRetWire","toClassParamWire"];v&&(ee+=`var thisWired = toClassParamWire(${te}, this);
`);for(var Rt=0;Rt<xt;++Rt){var ke=`toArg${Rt}Wire`;ee+=`var arg${Rt}Wired = ${ke}(${te}, arg${Rt});
`,be.push(ke)}if(ee+=(U||H?"var rv = ":"")+`invoker(${yt});
`,tt)ee+=`runDestructors(destructors);
`;else for(var Rt=v?1:2;Rt<x.length;++Rt){var Se=Rt===1?"thisWired":"arg"+(Rt-2)+"Wired";x[Rt].destructorFunction!==null&&(ee+=`${Se}_dtor(${Se});
`,be.push(`${Se}_dtor`))}return U&&(ee+=`var ret = fromRetWire(rv);
return ret;
`),ee+=`}
`,new Function(be,ee)}function b(x,v,U,H,tt,xt){var Mt=v.length;Mt<2&&L("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var yt=v[1]!==null&&U!==null,Rt=Ta(v),ee=!v[0].isVoid,te=v[0],be=v[1],ke=[x,L,H,tt,k,te.fromWireType.bind(te),be?.toWireType.bind(be)],Se=2;Se<Mt;++Se){var Ge=v[Se];ke.push(Ge.toWireType.bind(Ge))}if(!Rt)for(var Se=yt?1:2;Se<v.length;++Se)v[Se].destructorFunction!==null&&ke.push(v[Se].destructorFunction);var $n=Aa(v,yt,ee,xt)(...ke);return Ft(x,$n)}var $=(x,v,U,H,tt,xt)=>{var Mt=As(v,U);tt=Je(H,tt),wt([],[x],yt=>{yt=yt[0];var Rt=`constructor ${yt.name}`;if(yt.registeredClass.constructor_body===void 0&&(yt.registeredClass.constructor_body=[]),yt.registeredClass.constructor_body[v-1]!==void 0)throw new g(`Cannot register multiple constructors with identical number of parameters (${v-1}) for class '${yt.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return yt.registeredClass.constructor_body[v-1]=()=>{Ji(`Cannot construct ${yt.name} due to unbound types`,Mt)},wt([],Mt,ee=>(ee.splice(1,0,null),yt.registeredClass.constructor_body[v-1]=b(Rt,ee,null,tt,xt),[])),[]})},dt=x=>{x=x.trim();const v=x.indexOf("(");return v===-1?x:x.slice(0,v)},lt=(x,v,U,H,tt,xt,Mt,yt,Rt,ee)=>{var te=As(U,H);v=T(v),v=dt(v),xt=Je(tt,xt,Rt),wt([],[x],be=>{be=be[0];var ke=`${be.name}.${v}`;v.startsWith("@@")&&(v=Symbol[v.substring(2)]),yt&&be.registeredClass.pureVirtualFunctions.push(v);function Se(){Ji(`Cannot call ${ke} due to unbound types`,te)}var Ge=be.registeredClass.instancePrototype,en=Ge[v];return en===void 0||en.overloadTable===void 0&&en.className!==be.name&&en.argCount===U-2?(Se.argCount=U-2,Se.className=be.name,Ge[v]=Se):(Bt(Ge,v,ke),Ge[v].overloadTable[U-2]=Se),wt([],te,$n=>{var En=b(ke,$n,be,xt,Mt,Rt);return Ge[v].overloadTable===void 0?(En.argCount=U-2,Ge[v]=En):Ge[v].overloadTable[U-2]=En,[]}),[]})},ot=(x,v,U)=>(x instanceof Object||L(`${U} with invalid "this": ${x}`),x instanceof v.registeredClass.constructor||L(`${U} incompatible with "this" of type ${x.constructor.name}`),x.$$.ptr||L(`cannot call emscripten binding method ${U} on deleted object`),me(x.$$.ptr,x.$$.ptrType.registeredClass,v.registeredClass)),kt=(x,v,U,H,tt,xt,Mt,yt,Rt,ee)=>{v=T(v),tt=Je(H,tt),wt([],[x],te=>{te=te[0];var be=`${te.name}.${v}`,ke={get(){Ji(`Cannot access ${be} due to unbound types`,[U,Mt])},enumerable:!0,configurable:!0};return Rt?ke.set=()=>Ji(`Cannot access ${be} due to unbound types`,[U,Mt]):ke.set=Se=>L(be+" is a read-only property"),Object.defineProperty(te.registeredClass.instancePrototype,v,ke),wt([],Rt?[U,Mt]:[U],Se=>{var Ge=Se[0],en={get(){var En=ot(this,te,be+" getter");return Ge.fromWireType(tt(xt,En))},enumerable:!0};if(Rt){Rt=Je(yt,Rt);var $n=Se[1];en.set=function(En){var Ai=ot(this,te,be+" setter"),mn=[];Rt(ee,Ai,$n.toWireType(mn,En)),k(mn)}}return Object.defineProperty(te.registeredClass.instancePrototype,v,en),[]}),[]})},$t=[],Ot=[0,1,,1,null,1,!0,1,!1,1],Yt=x=>{x>9&&--Ot[x+1]===0&&(Ot[x]=void 0,$t.push(x))},Xt={toValue:x=>(x||L(`Cannot use deleted val. handle = ${x}`),Ot[x]),toHandle:x=>{switch(x){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const v=$t.pop()||Ot.length;return Ot[v]=x,Ot[v+1]=1,v}}}},he={name:"emscripten::val",fromWireType:x=>{var v=Xt.toValue(x);return Yt(x),v},toWireType:(x,v)=>Xt.toHandle(v),readValueFromPointer:nt,destructorFunction:null},de=x=>K(x,he),Kt=(x,v,U)=>{switch(v){case 1:return U?function(H){return this.fromWireType(D[H])}:function(H){return this.fromWireType(M[H])};case 2:return U?function(H){return this.fromWireType(w[H>>1])}:function(H){return this.fromWireType(C[H>>1])};case 4:return U?function(H){return this.fromWireType(z[H>>2])}:function(H){return this.fromWireType(S[H>>2])};default:throw new TypeError(`invalid integer width (${v}): ${x}`)}},Me=(x,v,U,H)=>{v=T(v);function tt(){}tt.values={},K(x,{name:v,constructor:tt,fromWireType:function(xt){return this.constructor.values[xt]},toWireType:(xt,Mt)=>Mt.value,readValueFromPointer:Kt(v,U,H),destructorFunction:null}),Ht(v,tt)},Be=(x,v)=>{var U=ut[x];return U===void 0&&L(`${v} has unknown type ${Ts(x)}`),U},Ue=(x,v,U)=>{var H=Be(x,"enum");v=T(v);var tt=H.constructor,xt=Object.create(H.constructor.prototype,{value:{value:U},constructor:{value:Ft(`${H.name}_${v}`,function(){})}});tt.values[U]=xt,tt[v]=xt},Ae=(x,v)=>{switch(v){case 4:return function(U){return this.fromWireType(I[U>>2])};case 8:return function(U){return this.fromWireType(V[U>>3])};default:throw new TypeError(`invalid float width (${v}): ${x}`)}},je=(x,v,U)=>{v=T(v),K(x,{name:v,fromWireType:H=>H,toWireType:(H,tt)=>tt,readValueFromPointer:Ae(v,U),destructorFunction:null})},qt=(x,v,U,H,tt,xt,Mt,yt)=>{var Rt=As(v,U);x=T(x),x=dt(x),tt=Je(H,tt,Mt),Ht(x,function(){Ji(`Cannot call ${x} due to unbound types`,Rt)},v-1),wt([],Rt,ee=>{var te=[ee[0],null].concat(ee.slice(1));return Es(x,b(x,te,null,tt,xt,Mt),v-1),[]})},tn=(x,v,U,H,tt)=>{v=T(v);const xt=H===0;let Mt=Rt=>Rt;if(xt){var yt=32-8*U;Mt=Rt=>Rt<<yt>>>yt,tt=Mt(tt)}K(x,{name:v,fromWireType:Mt,toWireType:(Rt,ee)=>ee,readValueFromPointer:Et(v,U,H!==0),destructorFunction:null})},ge=(x,v,U)=>{var H=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],tt=H[v];function xt(Mt){var yt=S[Mt>>2],Rt=S[Mt+4>>2];return new tt(D.buffer,Rt,yt)}U=T(U),K(x,{name:U,fromWireType:xt,readValueFromPointer:xt},{ignoreDuplicateRegistrations:!0})},bn=(x,v,U,H)=>{if(!(H>0))return 0;for(var tt=U,xt=U+H-1,Mt=0;Mt<x.length;++Mt){var yt=x.codePointAt(Mt);if(yt<=127){if(U>=xt)break;v[U++]=yt}else if(yt<=2047){if(U+1>=xt)break;v[U++]=192|yt>>6,v[U++]=128|yt&63}else if(yt<=65535){if(U+2>=xt)break;v[U++]=224|yt>>12,v[U++]=128|yt>>6&63,v[U++]=128|yt&63}else{if(U+3>=xt)break;v[U++]=240|yt>>18,v[U++]=128|yt>>12&63,v[U++]=128|yt>>6&63,v[U++]=128|yt&63,Mt++}}return v[U]=0,U-tt},Fn=(x,v,U)=>bn(x,M,v,U),ii=x=>{for(var v=0,U=0;U<x.length;++U){var H=x.charCodeAt(U);H<=127?v++:H<=2047?v+=2:H>=55296&&H<=57343?(v+=4,++U):v+=3}return v},Ti=globalThis.TextDecoder&&new TextDecoder,ye=(x,v,U,H)=>{var tt=v+U;if(H)return tt;for(;x[v]&&!(v>=tt);)++v;return v},ze=(x,v=0,U,H)=>{var tt=ye(x,v,U,H);if(tt-v>16&&x.buffer&&Ti)return Ti.decode(x.subarray(v,tt));for(var xt="";v<tt;){var Mt=x[v++];if(!(Mt&128)){xt+=String.fromCharCode(Mt);continue}var yt=x[v++]&63;if((Mt&224)==192){xt+=String.fromCharCode((Mt&31)<<6|yt);continue}var Rt=x[v++]&63;if((Mt&240)==224?Mt=(Mt&15)<<12|yt<<6|Rt:Mt=(Mt&7)<<18|yt<<12|Rt<<6|x[v++]&63,Mt<65536)xt+=String.fromCharCode(Mt);else{var ee=Mt-65536;xt+=String.fromCharCode(55296|ee>>10,56320|ee&1023)}}return xt},ri=(x,v,U)=>x?ze(M,x,v,U):"",De=(x,v)=>{v=T(v),K(x,{name:v,fromWireType(U){var H=S[U>>2],tt=U+4,xt;return xt=ri(tt,H,!0),Qi(U),xt},toWireType(U,H){H instanceof ArrayBuffer&&(H=new Uint8Array(H));var tt,xt=typeof H=="string";xt||ArrayBuffer.isView(H)&&H.BYTES_PER_ELEMENT==1||L("Cannot pass non-string to std::string"),xt?tt=ii(H):tt=H.length;var Mt=_l(4+tt+1),yt=Mt+4;return S[Mt>>2]=tt,xt?Fn(H,yt,tt+1):M.set(H,yt),U!==null&&U.push(Qi,Mt),Mt},readValueFromPointer:nt,destructorFunction(U){Qi(U)}})},Xn=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,ji=(x,v,U)=>{var H=x>>1,tt=ye(C,H,v/2,U);if(tt-H>16&&Xn)return Xn.decode(C.subarray(H,tt));for(var xt="",Mt=H;Mt<tt;++Mt){var yt=C[Mt];xt+=String.fromCharCode(yt)}return xt},wa=(x,v,U)=>{if(U??=2147483647,U<2)return 0;U-=2;for(var H=v,tt=U<x.length*2?U/2:x.length,xt=0;xt<tt;++xt){var Mt=x.charCodeAt(xt);w[v>>1]=Mt,v+=2}return w[v>>1]=0,v-H},Mm=x=>x.length*2,ym=(x,v,U)=>{for(var H="",tt=x>>2,xt=0;!(xt>=v/4);xt++){var Mt=S[tt+xt];if(!Mt&&!U)break;H+=String.fromCodePoint(Mt)}return H},bm=(x,v,U)=>{if(U??=2147483647,U<4)return 0;for(var H=v,tt=H+U-4,xt=0;xt<x.length;++xt){var Mt=x.codePointAt(xt);if(Mt>65535&&xt++,z[v>>2]=Mt,v+=4,v+4>tt)break}return z[v>>2]=0,v-H},Em=x=>{for(var v=0,U=0;U<x.length;++U){var H=x.codePointAt(U);H>65535&&U++,v+=4}return v},Tm=(x,v,U)=>{U=T(U);var H,tt,xt;v===2?(H=ji,tt=wa,xt=Mm):(H=ym,tt=bm,xt=Em),K(x,{name:U,fromWireType:Mt=>{var yt=S[Mt>>2],Rt=H(Mt+4,yt*v,!0);return Qi(Mt),Rt},toWireType:(Mt,yt)=>{typeof yt!="string"&&L(`Cannot pass non-string to C++ string type ${U}`);var Rt=xt(yt),ee=_l(4+Rt+v);return S[ee>>2]=Rt/v,tt(yt,ee+4,Rt+v),Mt!==null&&Mt.push(Qi,ee),ee},readValueFromPointer:nt,destructorFunction(Mt){Qi(Mt)}})},Am=(x,v,U,H,tt,xt)=>{G[x]={name:T(v),rawConstructor:Je(U,H),rawDestructor:Je(tt,xt),fields:[]}},wm=(x,v,U,H,tt,xt,Mt,yt,Rt,ee)=>{G[x].fields.push({fieldName:T(v),getterReturnType:U,getter:Je(H,tt),getterContext:xt,setterArgumentType:Mt,setter:Je(yt,Rt),setterContext:ee})},Cm=(x,v)=>{v=T(v),K(x,{isVoid:!0,name:v,fromWireType:()=>{},toWireType:(U,H)=>{}})},gl=[],Rm=x=>{var v=gl.length;return gl.push(x),v},Pm=(x,v)=>{for(var U=new Array(x),H=0;H<x;++H)U[H]=Be(S[v+H*4>>2],`parameter ${H}`);return U},Dm=(x,v,U)=>{var H=[],tt=x(H,U);return H.length&&(S[v>>2]=Xt.toHandle(H)),tt},Lm={},rh=x=>{var v=Lm[x];return v===void 0?T(x):v},Im=(x,v,U)=>{var H=8,[tt,...xt]=Pm(x,v),Mt=tt.toWireType.bind(tt),yt=xt.map(Se=>Se.readValueFromPointer.bind(Se));x--;var Rt={toValue:Xt.toValue},ee=yt.map((Se,Ge)=>{var en=`argFromPtr${Ge}`;return Rt[en]=Se,`${en}(args${Ge?"+"+Ge*H:""})`}),te;switch(U){case 0:te="toValue(handle)";break;case 2:te="new (toValue(handle))";break;case 3:te="";break;case 1:Rt.getStringOrSymbol=rh,te="toValue(handle)[getStringOrSymbol(methodName)]";break}te+=`(${ee})`,tt.isVoid||(Rt.toReturnWire=Mt,Rt.emval_returnValue=Dm,te=`return emval_returnValue(toReturnWire, destructorsRef, ${te})`),te=`return function (handle, methodName, destructorsRef, args) {
  ${te}
  }`;var be=new Function(Object.keys(Rt),te)(...Object.values(Rt)),ke=`methodCaller<(${xt.map(Se=>Se.name)}) => ${tt.name}>`;return Rm(Ft(ke,be))},Um=(x,v)=>(x=Xt.toValue(x),v=Xt.toValue(v),Xt.toHandle(x[v])),Nm=x=>{x>9&&(Ot[x+1]+=1)},Fm=(x,v,U,H,tt)=>gl[x](v,U,H,tt),Om=x=>Xt.toHandle(rh(x)),Bm=x=>{var v=Xt.toValue(x);k(v),Yt(x)},zm=()=>2147483648,Vm=(x,v)=>Math.ceil(x/v)*v,Hm=x=>{var v=Ca.buffer.byteLength,U=(x-v+65535)/65536|0;try{return Ca.grow(U),N(),1}catch{}},km=x=>{var v=M.length;x>>>=0;var U=zm();if(x>U)return!1;for(var H=1;H<=4;H*=2){var tt=v*(1+.2/H);tt=Math.min(tt,x+100663296);var xt=Math.min(U,Vm(Math.max(x,tt),65536)),Mt=Hm(xt);if(Mt)return!0}return!1};if(oe(),bs(),e.noExitRuntime&&e.noExitRuntime,e.print&&e.print,e.printErr&&(d=e.printErr),e.wasmBinary&&(_=e.wasmBinary),e.arguments&&e.arguments,e.thisProgram&&e.thisProgram,e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.shift()();var sh,_l,Qi,Ca,ah;function Gm(x){sh=x.F,_l=x.H,Qi=x.I,Ca=x.D,ah=x.G}var Wm={h:F,x:W,v:Ct,u:Q,B:E,e:ml,g:$,a:lt,f:kt,z:de,n:Me,c:Ue,t:je,b:qt,i:tn,d:ge,A:De,q:Tm,w:Am,p:wm,C:Cm,l:Im,m:Yt,r:Um,o:Nm,k:Fm,s:Om,j:Bm,y:km};function Xm(){it();function x(){e.calledRun=!0,!y&&(st(),p?.(e),e.onRuntimeInitialized?.(),et())}e.setStatus?(e.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>e.setStatus(""),1),x()},1)):x()}var ws;ws=await ie(),Xm();function $m(x){if(x.length%2!=0)throw"MakePath64: intArray.length must be even";const v=x.length/2,U=new BigInt64Array(v*3);for(let tt=0,xt=0;tt<x.length;tt+=2,xt+=3){const Mt=x[tt],yt=x[tt+1];U[xt]=typeof Mt=="bigint"?Mt:BigInt(Mt),U[xt+1]=typeof yt=="bigint"?yt:BigInt(yt)}let H=new e.Path64;return H.assign(U),H}e.MakePath64=$m;function qm(x){if(x.length%3!=0)throw"MakePathZ64: intArray.length must be multiple of 3";const v=new BigInt64Array(x.length);for(let H=0;H<x.length;H++){const tt=x[H];v[H]=typeof tt=="bigint"?tt:BigInt(tt)}let U=new e.Path64;return U.assign(v),U}e.MakePathZ64=qm;function Ym(x){if(x.length%2!=0)throw"MakePathD: intArray.length must be even";const v=x.length/2,U=new Float64Array(v*3);for(let tt=0,xt=0;tt<x.length;tt+=2,xt+=3)U[xt]=x[tt],U[xt+1]=x[tt+1];let H=new e.PathD;return H.assign(U),H}e.MakePathD=Ym;function Km(x){if(x.length%3!=0)throw"MakePathZD: intArray.length must be multiple of 3";const v=x instanceof Float64Array?x:Float64Array.from(x);let U=new e.PathD;return U.assign(v),U}e.MakePathZD=Km;function oh(x){const v=x.view(),U=new BigInt64Array(v.length);for(let tt=0;tt<v.length;tt++)U[tt]=BigInt(Math.round(v[tt]));let H=new e.Path64;return H.assign(U),H}e.PathDToPath64=oh;function lh(x){const v=x.view(),U=new Float64Array(v.length);for(let tt=0;tt<v.length;tt++)U[tt]=Number(v[tt]);let H=new e.PathD;return H.assign(U),H}e.Path64ToPathD=lh;function Zm(x){let v=new e.PathsD;for(let U=0;U<x.size();U++){const H=x.get(U);let tt=lh(H);v.push_back(tt),tt.delete(),H.delete()}return v}e.Paths64ToPathsD=Zm;function Jm(x){let v=new e.Paths64;for(let U=0;U<x.size();U++){const H=x.get(U);let tt=oh(H);v.push_back(tt),tt.delete(),H.delete()}return v}return e.PathsDToPaths64=Jm,at?t=e:t=new Promise((x,v)=>{p=x,A=v}),t}let Dl=null;function Lv(){return Dl||(Dl=Dv()),Dl}function Iv(n,t){const e=[];for(const i of t)e.push(i.x,i.y);return n.MakePathD(e)}function jh(n,t){const e=n.PathsD,i=new e;for(const r of t)r.length>=3&&i.push_back(Iv(n,r));return i}function Uv(n){const t=n.size(),e=[];for(let i=0;i<t;i++){const r=n.get(i);e.push({x:r.x,y:r.y})}return e}function Nv(n){const t=[],e=n.size();for(let i=0;i<e;i++)t.push(Uv(n.get(i)));return t}async function Cp(n,t){const e=await Lv(),i=jh(e,n),r=jh(e,t),a=e.IntersectD(i,r,e.FillRule.NonZero,6),o=Math.abs(e.AreaPathsD(a));return{regions:Nv(a),area:o,intersects:o>1e-8}}const Fv=1e-6;async function Ov(n){const t=wv(n.g1,n.g2,n.mesh,n.framesPerEngagement),e=t.length,i=await n.sink.existingIndices(),r=t.filter(l=>!i.has(l.i));let s=e-r.length;const a=Math.max(1,n.chunkSize??16),o=n.withInterference!==!1;n.onProgress?.(s,e);for(let l=0;l<r.length;l+=a){if(n.shouldCancel?.())return"cancelled";const c=[];for(const u of r.slice(l,l+a)){let f=0,h=[];if(o){const d=[No(n.g1.outline,0,0,u.phi1)],_=[No(n.g2.outline,n.mesh.a,0,u.phi2)],y=await Cp(d,_);f=y.area,y.intersects&&(h=y.regions)}c.push({...u,trajId:n.trajId,interferenceArea:f,interferes:f>Fv,regions:h})}await n.sink.putMany(c),s+=c.length,n.onProgress?.(s,e),n.yieldControl&&await n.yieldControl()}return"completed"}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bu="186",ki={ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bv=0,Qh=1,zv=2,xo=1,Vv=2,Hs=3,Fr=0,Cn=1,di=2,Gi=0,Js=1,tf=2,ef=3,nf=4,Hv=5,is=100,kv=101,Gv=102,Wv=103,Xv=104,$v=200,qv=201,Yv=202,Kv=203,Rp=204,Pp=205,Zv=206,Jv=207,jv=208,Qv=209,t0=210,e0=211,n0=212,i0=213,r0=214,Rc=0,Pc=1,Dc=2,la=3,Lc=4,Ic=5,Uc=6,Nc=7,Dp=0,s0=1,a0=2,_i=0,Lp=1,Ip=2,Up=3,Np=4,Fp=5,Op=6,Bp=7,zp=300,Or=301,ds=302,Ll=303,Il=304,rl=306,Fc=1e3,zi=1001,Oc=1002,sn=1003,o0=1004,Ba=1005,hn=1006,Ul=1007,Lr=1008,Ln=1009,Vp=1010,Hp=1011,ca=1012,zu=1013,Si=1014,pi=1015,Mi=1016,Vu=1017,Hu=1018,ua=1020,kp=35902,Gp=35899,Wp=1021,Xp=1022,jn=1023,Ki=1026,Ir=1027,$p=1028,ku=1029,Br=1030,Gu=1031,Wu=1033,So=33776,Mo=33777,yo=33778,bo=33779,Bc=35840,zc=35841,Vc=35842,Hc=35843,kc=36196,Gc=37492,Wc=37496,Xc=37488,$c=37489,Fo=37490,qc=37491,Yc=37808,Kc=37809,Zc=37810,Jc=37811,jc=37812,Qc=37813,tu=37814,eu=37815,nu=37816,iu=37817,ru=37818,su=37819,au=37820,ou=37821,lu=36492,cu=36494,uu=36495,hu=36283,fu=36284,Oo=36285,du=36286,l0=3200,pu=0,c0=1,lr="",Vn="srgb",Bo="srgb-linear",zo="linear",Ce="srgb",Nl=7680,u0=519,h0=512,f0=513,d0=514,Xu=515,p0=516,m0=517,$u=518,g0=519,_0=35044,rf="300 es",mi=2e3,ha=2001;function v0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Vo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function x0(){const n=Vo("canvas");return n.style.display="block",n}const sf={};function af(...n){const t="THREE."+n.shift();console.log(t,...n)}function qp(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function se(...n){n=qp(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function xe(...n){n=qp(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function cs(...n){const t=n.join(" ");t in sf||(sf[t]=!0,se(...n))}function S0(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const M0={[Rc]:Pc,[Dc]:Uc,[Lc]:Nc,[la]:Ic,[Pc]:Rc,[Uc]:Dc,[Nc]:Lc,[Ic]:la};class mr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],js=Math.PI/180,mu=180/Math.PI;function vs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function pe(n,t,e){return Math.max(t,Math.min(e,n))}function y0(n,t){return(n%t+t)%t}function Fl(n,t,e){return(1-e)*n+e*t}function Ps(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Tn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const b0={DEG2RAD:js};class Ut{static{Ut.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],d=s[a+1],_=s[a+2],y=s[a+3];if(f!==y||l!==h||c!==d||u!==_){let m=l*h+c*d+u*_+f*y;m<0&&(h=-h,d=-d,_=-_,y=-y,m=-m);let p=1-o;if(m<.9995){const A=Math.acos(m),D=Math.sin(A);p=Math.sin(p*A)/D,o=Math.sin(o*A)/D,l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+y*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+y*o;const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],_=s[a+3];return t[e]=o*_+u*f+l*d-c*h,t[e+1]=l*_+u*h+c*f-o*d,t[e+2]=c*_+u*d+o*h-l*f,t[e+3]=u*_-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{static{q.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(of.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(of.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),u=2*(o*e-s*r),f=2*(s*i-a*e);return this.x=e+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ol.copy(this).projectOnVector(t),this.sub(Ol)}reflect(t){return this.sub(Ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ol=new q,of=new fr;class ce{static{ce.prototype.isMatrix3=!0}constructor(t,e,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],y=r[0],m=r[3],p=r[6],A=r[1],D=r[4],M=r[7],w=r[2],C=r[5],z=r[8];return s[0]=a*y+o*A+l*w,s[3]=a*m+o*D+l*C,s[6]=a*p+o*M+l*z,s[1]=c*y+u*A+f*w,s[4]=c*m+u*D+f*C,s[7]=c*p+u*M+f*z,s[2]=h*y+d*A+_*w,s[5]=h*m+d*D+_*C,s[8]=h*p+d*M+_*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,_=e*f+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return t[0]=f*y,t[1]=(r*c-u*i)*y,t[2]=(o*i-r*a)*y,t[3]=h*y,t[4]=(u*e-r*l)*y,t[5]=(r*s-o*e)*y,t[6]=d*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bl.makeScale(t,e)),this}rotate(t){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bl.makeRotation(-t)),this}translate(t,e){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bl=new ce,lf=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cf=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E0(){const n={enabled:!0,workingColorSpace:Bo,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ce&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ce&&(r.r=us(r.r),r.g=us(r.g),r.b=us(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===lr?zo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Bo]:{primaries:t,whitePoint:i,transfer:zo,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:t,whitePoint:i,transfer:Ce,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),n}const _e=E0();function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function us(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gr;class T0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Gr===void 0&&(Gr=Vo("canvas")),Gr.width=t.width,Gr.height=t.height;const r=Gr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Gr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wi(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Wi(e[i]/255)*255):e[i]=Wi(e[i]);return{data:e,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let A0=0;class qu{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=vs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(zl(r[a].image)):s.push(zl(r[a]))}else s=zl(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function zl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?T0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let w0=0;const Vl=new q;class yn extends mr{constructor(t=yn.DEFAULT_IMAGE,e=yn.DEFAULT_MAPPING,i=zi,r=zi,s=hn,a=Lr,o=jn,l=Ln,c=yn.DEFAULT_ANISOTROPY,u=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=vs(),this.name="",this.source=new qu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vl).x}get height(){return this.source.getSize(Vl).y}get depth(){return this.source.getSize(Vl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){se(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){se(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fc:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case Oc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fc:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case Oc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=zp;yn.DEFAULT_ANISOTROPY=1;class Ve{static{Ve.prototype.isVector4=!0}constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const D=(c+1)/2,M=(d+1)/2,w=(p+1)/2,C=(u+h)/4,z=(f+y)/4,S=(_+m)/4;return D>M&&D>w?D<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(D),r=C/i,s=z/i):M>w?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=S/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=z/s,r=S/s),this.set(i,r,s,e),this}let A=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(f-y)/A,this.z=(h-u)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C0 extends mr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new yn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new qu(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends C0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Yp extends yn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class R0 extends yn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class Oe{static{Oe.prototype.isMatrix4=!0}constructor(t,e,i,r,s,a,o,l,c,u,f,h,d,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,u,f,h,d,_,y,m)}set(t,e,i,r,s,a,o,l,c,u,f,h,d,_,y,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,r=1/Wr.setFromMatrixColumn(t,0).length(),s=1/Wr.setFromMatrixColumn(t,1).length(),a=1/Wr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=a*u,d=a*f,_=o*u,y=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+_*c,e[5]=h-y*c,e[9]=-o*l,e[2]=y-h*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,_=c*u,y=c*f;e[0]=h+y*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-_,e[6]=y+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,_=c*u,y=c*f;e[0]=h-y*o,e[4]=-a*f,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*u,e[9]=y-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,d=a*f,_=o*u,y=o*f;e[0]=l*u,e[4]=_*c-d,e[8]=h*c+y,e[1]=l*f,e[5]=y*c+h,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,d=a*c,_=o*l,y=o*c;e[0]=l*u,e[4]=y-h*f,e[8]=_*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+_,e[10]=h-y*f}else if(t.order==="XZY"){const h=a*l,d=a*c,_=o*l,y=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+y,e[5]=a*u,e[9]=d*f-_,e[2]=_*f-d,e[6]=o*u,e[10]=y*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(P0,t,D0)}lookAt(t,e,i){const r=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),er.crossVectors(i,Rn),er.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),er.crossVectors(i,Rn)),er.normalize(),za.crossVectors(Rn,er),r[0]=er.x,r[4]=za.x,r[8]=Rn.x,r[1]=er.y,r[5]=za.y,r[9]=Rn.y,r[2]=er.z,r[6]=za.z,r[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],y=i[6],m=i[10],p=i[14],A=i[3],D=i[7],M=i[11],w=i[15],C=r[0],z=r[4],S=r[8],I=r[12],V=r[1],X=r[5],Z=r[9],at=r[13],N=r[2],it=r[6],st=r[10],et=r[14],mt=r[3],ht=r[7],vt=r[11],gt=r[15];return s[0]=a*C+o*V+l*N+c*mt,s[4]=a*z+o*X+l*it+c*ht,s[8]=a*S+o*Z+l*st+c*vt,s[12]=a*I+o*at+l*et+c*gt,s[1]=u*C+f*V+h*N+d*mt,s[5]=u*z+f*X+h*it+d*ht,s[9]=u*S+f*Z+h*st+d*vt,s[13]=u*I+f*at+h*et+d*gt,s[2]=_*C+y*V+m*N+p*mt,s[6]=_*z+y*X+m*it+p*ht,s[10]=_*S+y*Z+m*st+p*vt,s[14]=_*I+y*at+m*et+p*gt,s[3]=A*C+D*V+M*N+w*mt,s[7]=A*z+D*X+M*it+w*ht,s[11]=A*S+D*Z+M*st+w*vt,s[15]=A*I+D*at+M*et+w*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],_=t[3],y=t[7],m=t[11],p=t[15],A=l*d-c*h,D=o*d-c*f,M=o*h-l*f,w=a*d-c*u,C=a*h-l*u,z=a*f-o*u;return e*(y*A-m*D+p*M)-i*(_*A-m*w+p*C)+r*(_*D-y*w+p*z)-s*(_*M-y*C+m*z)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],_=t[12],y=t[13],m=t[14],p=t[15],A=e*o-i*a,D=e*l-r*a,M=e*c-s*a,w=i*l-r*o,C=i*c-s*o,z=r*c-s*l,S=u*y-f*_,I=u*m-h*_,V=u*p-d*_,X=f*m-h*y,Z=f*p-d*y,at=h*p-d*m,N=A*at-D*Z+M*X+w*V-C*I+z*S;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const it=1/N;return t[0]=(o*at-l*Z+c*X)*it,t[1]=(r*Z-i*at-s*X)*it,t[2]=(y*z-m*C+p*w)*it,t[3]=(h*C-f*z-d*w)*it,t[4]=(l*V-a*at-c*I)*it,t[5]=(e*at-r*V+s*I)*it,t[6]=(m*M-_*z-p*D)*it,t[7]=(u*z-h*M+d*D)*it,t[8]=(a*Z-o*V+c*S)*it,t[9]=(i*V-e*Z-s*S)*it,t[10]=(_*C-y*M+p*A)*it,t[11]=(f*M-u*C-d*A)*it,t[12]=(o*I-a*X-l*S)*it,t[13]=(e*X-i*I+r*S)*it,t[14]=(y*D-_*w-m*A)*it,t[15]=(u*w-f*D+h*A)*it,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,_=s*f,y=a*u,m=a*f,p=o*f,A=l*c,D=l*u,M=l*f,w=i.x,C=i.y,z=i.z;return r[0]=(1-(y+p))*w,r[1]=(d+M)*w,r[2]=(_-D)*w,r[3]=0,r[4]=(d-M)*C,r[5]=(1-(h+p))*C,r[6]=(m+A)*C,r[7]=0,r[8]=(_+D)*z,r[9]=(m-A)*z,r[10]=(1-(h+y))*z,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let a=Wr.set(r[0],r[1],r[2]).length();const o=Wr.set(r[4],r[5],r[6]).length(),l=Wr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),qn.copy(this);const c=1/a,u=1/o,f=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,e.setFromRotationMatrix(qn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,r,s,a,o=mi,l=!1){const c=this.elements,u=2*s/(e-t),f=2*s/(i-r),h=(e+t)/(e-t),d=(i+r)/(i-r);let _,y;if(l)_=s/(a-s),y=a*s/(a-s);else if(o===mi)_=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===ha)_=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=mi,l=!1){const c=this.elements,u=2/(e-t),f=2/(i-r),h=-(e+t)/(e-t),d=-(i+r)/(i-r);let _,y;if(l)_=1/(a-s),y=a/(a-s);else if(o===mi)_=-2/(a-s),y=-(a+s)/(a-s);else if(o===ha)_=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wr=new q,qn=new Oe,P0=new q(0,0,0),D0=new q(1,1,1),er=new q,za=new q,Rn=new q,uf=new Oe,hf=new fr;class dr{constructor(t=0,e=0,i=0,r=dr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return uf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hf.setFromEuler(this),this.setFromQuaternion(hf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dr.DEFAULT_ORDER="XYZ";class Yu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let L0=0;const ff=new q,Xr=new fr,Ci=new Oe,Va=new q,Ds=new q,I0=new q,U0=new fr,df=new q(1,0,0),pf=new q(0,1,0),mf=new q(0,0,1),gf={type:"added"},N0={type:"removed"},$r={type:"childadded",child:null},Hl={type:"childremoved",child:null};class an extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const t=new q,e=new dr,i=new fr,r=new q(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Oe},normalMatrix:{value:new ce}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xr.setFromAxisAngle(t,e),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(t,e){return Xr.setFromAxisAngle(t,e),this.quaternion.premultiply(Xr),this}rotateX(t){return this.rotateOnAxis(df,t)}rotateY(t){return this.rotateOnAxis(pf,t)}rotateZ(t){return this.rotateOnAxis(mf,t)}translateOnAxis(t,e){return ff.copy(t).applyQuaternion(this.quaternion),this.position.add(ff.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(df,t)}translateY(t){return this.translateOnAxis(pf,t)}translateZ(t){return this.translateOnAxis(mf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Va.copy(t):Va.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Ds,Va,this.up):Ci.lookAt(Va,Ds,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(Ci),this.quaternion.premultiply(Xr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(xe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gf),$r.child=t,this.dispatchEvent($r),$r.child=null):xe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(N0),Hl.child=t,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gf),$r.child=t,this.dispatchEvent($r),$r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,I0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,U0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}an.DEFAULT_UP=new q(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ss extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F0={type:"move"};class kl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ss;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function Gl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ve{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=_e.workingColorSpace){return this.r=t,this.g=e,this.b=i,_e.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=_e.workingColorSpace){if(t=y0(t,1),e=pe(e,0,1),i=pe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Gl(a,s,t+1/3),this.g=Gl(a,s,t),this.b=Gl(a,s,t-1/3)}return _e.colorSpaceToWorking(this,r),this}setStyle(t,e=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:se("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Vn){const i=Kp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Vn){return _e.workingToColorSpace(cn.copy(this),t),Math.round(pe(cn.r*255,0,255))*65536+Math.round(pe(cn.g*255,0,255))*256+Math.round(pe(cn.b*255,0,255))}getHexString(t=Vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(cn.copy(this),e);const i=cn.r,r=cn.g,s=cn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=Vn){_e.workingToColorSpace(cn.copy(this),t);const e=cn.r,i=cn.g,r=cn.b;return t!==Vn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(nr),this.setHSL(nr.h+t,nr.s+e,nr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(nr),t.getHSL(Ha);const i=Fl(nr.h,Ha.h,e),r=Fl(nr.s,Ha.s,e),s=Fl(nr.l,Ha.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new ve;ve.NAMES=Kp;class O0 extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dr,this.environmentIntensity=1,this.environmentRotation=new dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Yn=new q,Ri=new q,Wl=new q,Pi=new q,qr=new q,Yr=new q,_f=new q,Xl=new q,$l=new q,ql=new q,Yl=new Ve,Kl=new Ve,Zl=new Ve;class Hn{constructor(t=new q,e=new q,i=new q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Yn.subVectors(t,e),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Yn.subVectors(r,e),Ri.subVectors(i,e),Wl.subVectors(t,e);const a=Yn.dot(Yn),o=Yn.dot(Ri),l=Yn.dot(Wl),c=Ri.dot(Ri),u=Ri.dot(Wl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-d-_,_,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return Yl.setScalar(0),Kl.setScalar(0),Zl.setScalar(0),Yl.fromBufferAttribute(t,e),Kl.fromBufferAttribute(t,i),Zl.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Yl,s.x),a.addScaledVector(Kl,s.y),a.addScaledVector(Zl,s.z),a}static isFrontFacing(t,e,i,r){return Yn.subVectors(i,e),Ri.subVectors(t,e),Yn.cross(Ri).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Yn.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Hn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;qr.subVectors(r,i),Yr.subVectors(s,i),Xl.subVectors(t,i);const l=qr.dot(Xl),c=Yr.dot(Xl);if(l<=0&&c<=0)return e.copy(i);$l.subVectors(t,r);const u=qr.dot($l),f=Yr.dot($l);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(qr,a);ql.subVectors(t,s);const d=qr.dot(ql),_=Yr.dot(ql);if(_>=0&&d<=_)return e.copy(s);const y=d*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(Yr,o);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return _f.subVectors(s,r),o=(f-u)/(f-u+(d-_)),e.copy(r).addScaledVector(_f,o);const p=1/(m+y+h);return a=y*p,o=h*p,e.copy(i).addScaledVector(qr,a).addScaledVector(Yr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class xa{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Kn):Kn.fromBufferAttribute(s,a),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ka.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ka.copy(i.boundingBox)),ka.applyMatrix4(t.matrixWorld),this.union(ka)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),Ga.subVectors(this.max,Ls),Kr.subVectors(t.a,Ls),Zr.subVectors(t.b,Ls),Jr.subVectors(t.c,Ls),ir.subVectors(Zr,Kr),rr.subVectors(Jr,Zr),yr.subVectors(Kr,Jr);let e=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-yr.z,yr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,yr.z,0,-yr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-yr.y,yr.x,0];return!Jl(e,Kr,Zr,Jr,Ga)||(e=[1,0,0,0,1,0,0,0,1],!Jl(e,Kr,Zr,Jr,Ga))?!1:(Wa.crossVectors(ir,rr),e=[Wa.x,Wa.y,Wa.z],Jl(e,Kr,Zr,Jr,Ga))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Di=[new q,new q,new q,new q,new q,new q,new q,new q],Kn=new q,ka=new xa,Kr=new q,Zr=new q,Jr=new q,ir=new q,rr=new q,yr=new q,Ls=new q,Ga=new q,Wa=new q,br=new q;function Jl(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){br.fromArray(n,s);const o=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),l=t.dot(br),c=e.dot(br),u=i.dot(br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Xe=new q,Xa=new Ut;let B0=0;class Xi extends mr{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=_0,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Xa.fromBufferAttribute(this,e),Xa.applyMatrix3(t),this.setXY(e,Xa.x,Xa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Tn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),i=Tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),i=Tn(i,this.array),r=Tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),i=Tn(i,this.array),r=Tn(r,this.array),s=Tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Zp extends Xi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Jp extends Xi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class $e extends Xi{constructor(t,e,i){super(new Float32Array(t),e,i)}}const z0=new xa,Is=new q,jl=new q;class sl{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):z0.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);const e=Is.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Is,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(jl)),this.expandByPoint(Is.copy(t.center).sub(jl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let V0=0;const Bn=new Oe,Ql=new an,jr=new q,Pn=new xa,Us=new xa,Qe=new q;class dn extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(v0(t)?Jp:Zp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ce().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Bn.makeRotationFromQuaternion(t),this.applyMatrix4(Bn),this}rotateX(t){return Bn.makeRotationX(t),this.applyMatrix4(Bn),this}rotateY(t){return Bn.makeRotationY(t),this.applyMatrix4(Bn),this}rotateZ(t){return Bn.makeRotationZ(t),this.applyMatrix4(Bn),this}translate(t,e,i){return Bn.makeTranslation(t,e,i),this.applyMatrix4(Bn),this}scale(t,e,i){return Bn.makeScale(t,e,i),this.applyMatrix4(Bn),this}lookAt(t){return Ql.lookAt(t),Ql.updateMatrix(),this.applyMatrix4(Ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(Pn.min,Us.min),Pn.expandByPoint(Qe),Qe.addVectors(Pn.max,Us.max),Pn.expandByPoint(Qe)):(Pn.expandByPoint(Us.min),Pn.expandByPoint(Us.max))}Pn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Qe.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Qe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Qe.fromBufferAttribute(o,c),l&&(jr.fromBufferAttribute(t,c),Qe.add(jr)),r=Math.max(r,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Xi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new q,l[S]=new q;const c=new q,u=new q,f=new q,h=new Ut,d=new Ut,_=new Ut,y=new q,m=new q;function p(S,I,V){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,I),f.fromBufferAttribute(i,V),h.fromBufferAttribute(s,S),d.fromBufferAttribute(s,I),_.fromBufferAttribute(s,V),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const X=1/(d.x*_.y-_.x*d.y);isFinite(X)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(X),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(X),o[S].add(y),o[I].add(y),o[V].add(y),l[S].add(m),l[I].add(m),l[V].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let S=0,I=A.length;S<I;++S){const V=A[S],X=V.start,Z=V.count;for(let at=X,N=X+Z;at<N;at+=3)p(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const D=new q,M=new q,w=new q,C=new q;function z(S){w.fromBufferAttribute(r,S),C.copy(w);const I=o[S];D.copy(I),D.sub(w.multiplyScalar(w.dot(I))).normalize(),M.crossVectors(C,I);const X=M.dot(l[S])<0?-1:1;a.setXYZW(S,D.x,D.y,D.z,X)}for(let S=0,I=A.length;S<I;++S){const V=A[S],X=V.start,Z=V.count;for(let at=X,N=X+Z;at<N;at+=3)z(t.getX(at+0)),z(t.getX(at+1)),z(t.getX(at+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Xi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new q,s=new q,a=new q,o=new q,l=new q,c=new q,u=new q,f=new q;if(t)for(let h=0,d=t.count;h<d;h+=3){const _=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new Xi(h,u,f)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new dn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tc=new q,H0=new q,k0=new ce;class Fi{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=tc.subVectors(i,e).cross(H0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const r=t.delta(tc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||k0.getNormalMatrix(t),r=this.coplanarPoint(tc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let G0=0;class xs extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=Js,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rp,this.blendDst=Pp,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nl,this.stencilZFail=Nl,this.stencilZPass=Nl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){se(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){se(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ve().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Fi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ut().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Li=new q,ec=new q,$a=new q,qa=new q;class al{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){ec.copy(t).add(e).multiplyScalar(.5),$a.copy(e).sub(t).normalize(),qa.copy(this.origin).sub(ec);const s=t.distanceTo(e)*.5,a=-this.direction.dot($a),o=qa.dot(this.direction),l=-qa.dot($a),c=qa.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const y=1/u;f*=y,h*=y,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ec).addScaledVector($a,h),d}intersectSphere(t,e){if(t.radius<0)return null;Li.subVectors(t.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,_=e.x-a.x,y=e.y-a.y,m=e.z-a.z,p=i.x-a.x,A=i.y-a.y,D=i.z-a.z,M=Math.abs(l),w=Math.abs(c),C=Math.abs(u);let z,S,I,V,X,Z,at,N,it,st,et,mt;if(M>=w&&M>=C?(I=l,Z=f,it=_,mt=p,l>=0?(z=c,S=u,V=h,X=d,at=y,N=m,st=A,et=D):(z=u,S=c,V=d,X=h,at=m,N=y,st=D,et=A)):w>=C?(I=c,Z=h,it=y,mt=A,c>=0?(z=u,S=l,V=d,X=f,at=m,N=_,st=D,et=p):(z=l,S=u,V=f,X=d,at=_,N=m,st=p,et=D)):(I=u,Z=d,it=m,mt=D,u>=0?(z=l,S=c,V=f,X=h,at=_,N=y,st=p,et=A):(z=c,S=l,V=h,X=f,at=y,N=_,st=A,et=p)),I===0)return null;const ht=z/I,vt=S/I,gt=1/I,Lt=V-ht*Z,Vt=X-vt*Z,ne=at-ht*it,re=N-vt*it,ie=st-ht*mt,pt=et-vt*mt,ct=ie*re-pt*ne,At=Lt*pt-Vt*ie,zt=ne*Vt-re*Lt;if(r){if(ct<0||At<0||zt<0)return null}else if((ct<0||At<0||zt<0)&&(ct>0||At>0||zt>0))return null;const Nt=ct+At+zt;if(Nt===0)return null;const R=gt*(ct*Z+At*it+zt*mt);return(Nt>0?R<0:R>0)?null:this.at(R/Nt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qs extends xs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.combine=Dp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const vf=new Oe,Er=new al,Ya=new sl,xf=new q,Ka=new q,Za=new q,Ja=new q,nc=new q,ja=new q,Sf=new q,Qa=new q;class Un extends an{constructor(t=new dn,e=new Qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){ja.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(nc.fromBufferAttribute(f,t),a?ja.addScaledVector(nc,u):ja.addScaledVector(nc.sub(e),u))}e.add(ja)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(s),Er.copy(t.ray).recast(t.near),!(Ya.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Ya,xf)===null||Er.origin.distanceToSquared(xf)>(t.far-t.near)**2))&&(vf.copy(s).invert(),Er.copy(t.ray).applyMatrix4(vf),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Er)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],p=a[m.materialIndex],A=Math.max(m.start,d.start),D=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=A,w=D;M<w;M+=3){const C=o.getX(M),z=o.getX(M+1),S=o.getX(M+2);r=to(this,p,t,i,c,u,f,C,z,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let m=_,p=y;m<p;m+=3){const A=o.getX(m),D=o.getX(m+1),M=o.getX(m+2);r=to(this,a,t,i,c,u,f,A,D,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],p=a[m.materialIndex],A=Math.max(m.start,d.start),D=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=A,w=D;M<w;M+=3){const C=M,z=M+1,S=M+2;r=to(this,p,t,i,c,u,f,C,z,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=_,p=y;m<p;m+=3){const A=m,D=m+1,M=m+2;r=to(this,a,t,i,c,u,f,A,D,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function W0(n,t,e,i,r,s,a,o){let l;if(t.side===Cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Fr,o),l===null)return null;Qa.copy(o),Qa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Qa);return c<e.near||c>e.far?null:{distance:c,point:Qa.clone(),object:n}}function to(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,Ka),n.getVertexPosition(l,Za),n.getVertexPosition(c,Ja);const u=W0(n,t,e,i,Ka,Za,Ja,Sf);if(u){const f=new q;Hn.getBarycoord(Sf,Ka,Za,Ja,f),r&&(u.uv=Hn.getInterpolatedAttribute(r,o,l,c,f,new Ut)),s&&(u.uv1=Hn.getInterpolatedAttribute(s,o,l,c,f,new Ut)),a&&(u.normal=Hn.getInterpolatedAttribute(a,o,l,c,f,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new q,materialIndex:0};Hn.getNormal(Ka,Za,Ja,h.normal),u.face=h,u.barycoord=f}return u}class X0 extends yn{constructor(t=null,e=1,i=1,r,s,a,o,l,c=sn,u=sn,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tr=new sl,$0=new Ut(.5,.5),eo=new q;class Ku{constructor(t=new Fi,e=new Fi,i=new Fi,r=new Fi,s=new Fi,a=new Fi){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=mi,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],_=s[8],y=s[9],m=s[10],p=s[11],A=s[12],D=s[13],M=s[14],w=s[15];if(r[0].setComponents(c-a,d-u,p-_,w-A).normalize(),r[1].setComponents(c+a,d+u,p+_,w+A).normalize(),r[2].setComponents(c+o,d+f,p+y,w+D).normalize(),r[3].setComponents(c-o,d-f,p-y,w-D).normalize(),i)r[4].setComponents(l,h,m,M).normalize(),r[5].setComponents(c-l,d-h,p-m,w-M).normalize();else if(r[4].setComponents(c-l,d-h,p-m,w-M).normalize(),e===mi)r[5].setComponents(c+l,d+h,p+m,w+M).normalize();else if(e===ha)r[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(t){Tr.center.set(0,0,0);const e=$0.distanceTo(t.center);return Tr.radius=.7071067811865476+e,Tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(eo.x=r.normal.x>0?t.max.x:t.min.x,eo.y=r.normal.y>0?t.max.y:t.min.y,eo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(eo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Eo extends xs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ho=new q,ko=new q,Mf=new Oe,Ns=new al,no=new sl,ic=new q,yf=new q;class Zu extends an{constructor(t=new dn,e=new Eo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Ho.fromBufferAttribute(e,r-1),ko.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Ho.distanceTo(ko);t.setAttribute("lineDistance",new $e(i,1))}else se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(r),no.radius+=s,t.ray.intersectsSphere(no)===!1)return;Mf.copy(r).invert(),Ns.copy(t.ray).applyMatrix4(Mf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let y=d,m=_-1;y<m;y+=c){const p=u.getX(y),A=u.getX(y+1),D=io(this,t,Ns,l,p,A,y);D&&e.push(D)}if(this.isLineLoop){const y=u.getX(_-1),m=u.getX(d),p=io(this,t,Ns,l,y,m,_-1);p&&e.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let y=d,m=_-1;y<m;y+=c){const p=io(this,t,Ns,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){const y=io(this,t,Ns,l,_-1,d,_-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function io(n,t,e,i,r,s,a){const o=n.geometry.attributes.position;if(Ho.fromBufferAttribute(o,r),ko.fromBufferAttribute(o,s),e.distanceSqToSegment(Ho,ko,ic,yf)>i)return;ic.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ic);if(!(c<t.near||c>t.far))return{distance:c,point:yf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const bf=new q,Ef=new q;class q0 extends Zu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)bf.fromBufferAttribute(e,r),Ef.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+bf.distanceTo(Ef);t.setAttribute("lineDistance",new $e(i,1))}else se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Y0 extends Zu{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class jp extends yn{constructor(t=[],e=Or,i,r,s,a,o,l,c,u){super(t,e,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fa extends yn{constructor(t,e,i=Si,r,s,a,o=sn,l=sn,c,u=Ki,f=1){if(u!==Ki&&u!==Ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class K0 extends fa{constructor(t,e=Si,i=Or,r,s,a=sn,o=sn,l,c=Ki){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Qp extends yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Sa extends dn{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,r,a,2),_("x","z","y",1,-1,t,i,-e,r,a,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(f,2));function _(y,m,p,A,D,M,w,C,z,S,I){const V=M/z,X=w/S,Z=M/2,at=w/2,N=C/2,it=z+1,st=S+1;let et=0,mt=0;const ht=new q;for(let vt=0;vt<st;vt++){const gt=vt*X-at;for(let Lt=0;Lt<it;Lt++){const Vt=Lt*V-Z;ht[y]=Vt*A,ht[m]=gt*D,ht[p]=N,c.push(ht.x,ht.y,ht.z),ht[y]=0,ht[m]=0,ht[p]=C>0?1:-1,u.push(ht.x,ht.y,ht.z),f.push(Lt/z),f.push(1-vt/S),et+=1}}for(let vt=0;vt<S;vt++)for(let gt=0;gt<z;gt++){const Lt=h+gt+it*vt,Vt=h+gt+it*(vt+1),ne=h+(gt+1)+it*(vt+1),re=h+(gt+1)+it*vt;l.push(Lt,Vt,re),l.push(Vt,ne,re),mt+=6}o.addGroup(d,mt,I),d+=mt,h+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}const ro=new q,so=new q,rc=new q,ao=new Hn;class Z0 extends dn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(js*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:y,b:m,c:p}=ao;if(y.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),ao.getNormal(rc),f[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let A=0;A<3;A++){const D=(A+1)%3,M=f[A],w=f[D],C=ao[u[A]],z=ao[u[D]],S=`${M}_${w}`,I=`${w}_${M}`;I in h&&h[I]?(rc.dot(h[I].normal)<=s&&(d.push(C.x,C.y,C.z),d.push(z.x,z.y,z.z)),h[I]=null):S in h||(h[S]={index0:c[A],index1:c[D],normal:rc.clone()})}}for(const _ in h)if(h[_]){const{index0:y,index1:m}=h[_];ro.fromBufferAttribute(o,y),so.fromBufferAttribute(o,m),d.push(ro.x,ro.y,ro.z),d.push(so.x,so.y,so.z)}this.setAttribute("position",new $e(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){se("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let r=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(a-u)/h;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new Ut:new q);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new q,r=[],s=[],a=[],o=new q,l=new Oe;for(let d=0;d<=t;d++){const _=d/t;r[d]=this.getTangentAt(_,new q)}s[0]=new q,a[0]=new q;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(pe(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(pe(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ju extends bi{constructor(t=0,e=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Ut){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class J0 extends Ju{constructor(t,e,i,r,s,a){super(t,e,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ju(){let n=0,t=0,e=0,i=0;function r(s,a,o,l){n=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,f){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,r(a,o,h,d)},calc:function(s){const a=s*s,o=a*s;return n+t*s+e*a+i*o}}}const Tf=new q,Af=new q,sc=new ju,ac=new ju,oc=new ju;class j0 extends bi{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new q){const i=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Af.subVectors(r[0],r[1]).add(r[0]),c=Af);const f=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Tf.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Tf),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),sc.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,y,m),ac.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,y,m),oc.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,y,m)}else this.curveType==="catmullrom"&&(sc.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),ac.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),oc.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(sc.calc(l),ac.calc(l),oc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new q().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function wf(n,t,e,i,r){const s=(i-t)*.5,a=(r-e)*.5,o=n*n,l=n*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*n+e}function Q0(n,t){const e=1-n;return e*e*t}function tx(n,t){return 2*(1-n)*n*t}function ex(n,t){return n*n*t}function ta(n,t,e,i){return Q0(n,t)+tx(n,e)+ex(n,i)}function nx(n,t){const e=1-n;return e*e*e*t}function ix(n,t){const e=1-n;return 3*e*e*n*t}function rx(n,t){return 3*(1-n)*n*n*t}function sx(n,t){return n*n*n*t}function ea(n,t,e,i,r){return nx(n,t)+ix(n,e)+rx(n,i)+sx(n,r)}class tm extends bi{constructor(t=new Ut,e=new Ut,i=new Ut,r=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new Ut){const i=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ea(t,r.x,s.x,a.x,o.x),ea(t,r.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ax extends bi{constructor(t=new q,e=new q,i=new q,r=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new q){const i=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ea(t,r.x,s.x,a.x,o.x),ea(t,r.y,s.y,a.y,o.y),ea(t,r.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class em extends bi{constructor(t=new Ut,e=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ut){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ox extends bi{constructor(t=new q,e=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new q){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nm extends bi{constructor(t=new Ut,e=new Ut,i=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ut){const i=e,r=this.v0,s=this.v1,a=this.v2;return i.set(ta(t,r.x,s.x,a.x),ta(t,r.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lx extends bi{constructor(t=new q,e=new q,i=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new q){const i=e,r=this.v0,s=this.v1,a=this.v2;return i.set(ta(t,r.x,s.x,a.x),ta(t,r.y,s.y,a.y),ta(t,r.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class im extends bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ut){const i=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return i.set(wf(o,l.x,c.x,u.x,f.x),wf(o,l.y,c.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new Ut().fromArray(r))}return this}}var gu=Object.freeze({__proto__:null,ArcCurve:J0,CatmullRomCurve3:j0,CubicBezierCurve:tm,CubicBezierCurve3:ax,EllipseCurve:Ju,LineCurve:em,LineCurve3:ox,QuadraticBezierCurve:nm,QuadraticBezierCurve3:lx,SplineCurve:im});class cx extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gu[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new gu[r.type]().fromJSON(r))}return this}}class Cf extends cx{constructor(t){super(),this.type="Path",this.currentPoint=new Ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new em(this.currentPoint.clone(),new Ut(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new nm(this.currentPoint.clone(),new Ut(t,e),new Ut(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,a){const o=new tm(this.currentPoint.clone(),new Ut(t,e),new Ut(i,r),new Ut(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new im(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,r,s,a),this}absarc(t,e,i,r,s,a){return this.absellipse(t,e,i,i,r,s,a),this}ellipse(t,e,i,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,r,s,a,o,l),this}absellipse(t,e,i,r,s,a,o,l){const c=new Ju(t,e,i,r,s,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Go extends Cf{constructor(t){super(t),this.uuid=vs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new Cf().fromJSON(r))}return this}}function ux(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=rm(n,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=mx(n,t,s,e)),n.length>80*e){o=n[0],l=n[1];let u=o,f=l;for(let h=e;h<r;h+=e){const d=n[h],_=n[h+1];d<o&&(o=d),_<l&&(l=_),d>u&&(u=d),_>f&&(f=_)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return da(s,a,e,o,l,c,0),a}function rm(n,t,e,i,r){let s;if(r===Ax(n,t,e,i)>0)for(let a=t;a<e;a+=i)s=Rf(a/i|0,n[a],n[a+1],s);else for(let a=e-i;a>=t;a-=i)s=Rf(a/i|0,n[a],n[a+1],s);return s&&ps(s,s.next)&&(ma(s),s=s.next),s}function zr(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ps(e,e.next)||He(e.prev,e,e.next)===0)){if(ma(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function da(n,t,e,i,r,s,a){if(!n)return;!a&&s&&Sx(n,i,r,s);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?fx(n,i,r,s):hx(n)){t.push(l.i,n.i,c.i),ma(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=dx(zr(n),t),da(n,t,e,i,r,s,2)):a===2&&px(n,t,e,i,r,s):da(zr(n),t,e,i,r,s,1);break}}}function hx(n){const t=n.prev,e=n,i=n.next;if(He(t,e,i)>=0)return!1;const r=t.x,s=e.x,a=i.x,o=t.y,l=e.y,c=i.y,u=Math.min(r,s,a),f=Math.min(o,l,c),h=Math.max(r,s,a),d=Math.max(o,l,c);let _=i.next;for(;_!==t;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=d&&ks(r,o,s,l,a,c,_.x,_.y)&&He(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function fx(n,t,e,i){const r=n.prev,s=n,a=n.next;if(He(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,f=s.y,h=a.y,d=Math.min(o,l,c),_=Math.min(u,f,h),y=Math.max(o,l,c),m=Math.max(u,f,h),p=_u(d,_,t,e,i),A=_u(y,m,t,e,i);let D=n.prevZ,M=n.nextZ;for(;D&&D.z>=p&&M&&M.z<=A;){if(D.x>=d&&D.x<=y&&D.y>=_&&D.y<=m&&D!==r&&D!==a&&ks(o,u,l,f,c,h,D.x,D.y)&&He(D.prev,D,D.next)>=0||(D=D.prevZ,M.x>=d&&M.x<=y&&M.y>=_&&M.y<=m&&M!==r&&M!==a&&ks(o,u,l,f,c,h,M.x,M.y)&&He(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;D&&D.z>=p;){if(D.x>=d&&D.x<=y&&D.y>=_&&D.y<=m&&D!==r&&D!==a&&ks(o,u,l,f,c,h,D.x,D.y)&&He(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;M&&M.z<=A;){if(M.x>=d&&M.x<=y&&M.y>=_&&M.y<=m&&M!==r&&M!==a&&ks(o,u,l,f,c,h,M.x,M.y)&&He(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function dx(n,t){let e=n;do{const i=e.prev,r=e.next.next;!ps(i,r)&&am(i,e,e.next,r)&&pa(i,r)&&pa(r,i)&&(t.push(i.i,e.i,r.i),ma(e),ma(e.next),e=n=r),e=e.next}while(e!==n);return zr(e)}function px(n,t,e,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&bx(a,o)){let l=om(a,o);a=zr(a,a.next),l=zr(l,l.next),da(a,t,e,i,r,s,0),da(l,t,e,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function mx(n,t,e,i){const r=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*i,l=s<a-1?t[s+1]*i:n.length,c=rm(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(yx(c))}r.sort(gx);for(let s=0;s<r.length;s++)e=_x(r[s],e);return e}function gx(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=i-r}return e}function _x(n,t){const e=vx(n,t);if(!e)return t;const i=om(e,n);return zr(i,i.next),zr(e,e.next)}function vx(n,t){let e=t;const i=n.x,r=n.y;let s=-1/0,a;if(ps(n,e))return e;do{if(ps(n,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>s&&(s=f,a=e.x<e.next.x?e:e.next,f===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&sm(r<c?i:s,r,l,c,r<c?s:i,r,e.x,e.y)){const f=Math.abs(r-e.y)/(i-e.x);pa(e,n)&&(f<u||f===u&&(e.x>a.x||e.x===a.x&&xx(a,e)))&&(a=e,u=f)}e=e.next}while(e!==o);return a}function xx(n,t){return He(n.prev,n,t.prev)<0&&He(t.next,n,n.next)<0}function Sx(n,t,e,i){let r=n;do r.z===0&&(r.z=_u(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Mx(r)}function Mx(n){let t,e=1;do{let i=n,r;n=null;let s=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,e*=2}while(t>1);return n}function _u(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function yx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function sm(n,t,e,i,r,s,a,o){return(r-a)*(t-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(i-o)}function ks(n,t,e,i,r,s,a,o){return!(n===a&&t===o)&&sm(n,t,e,i,r,s,a,o)}function bx(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Ex(n,t)&&(pa(n,t)&&pa(t,n)&&Tx(n,t)&&(He(n.prev,n,t.prev)||He(n,t.prev,t))||ps(n,t)&&He(n.prev,n,n.next)>0&&He(t.prev,t,t.next)>0)}function He(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ps(n,t){return n.x===t.x&&n.y===t.y}function am(n,t,e,i){const r=lo(He(n,t,e)),s=lo(He(n,t,i)),a=lo(He(e,i,n)),o=lo(He(e,i,t));return!!(r!==s&&a!==o||r===0&&oo(n,e,t)||s===0&&oo(n,i,t)||a===0&&oo(e,n,i)||o===0&&oo(e,t,i))}function oo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function lo(n){return n>0?1:n<0?-1:0}function Ex(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&am(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function pa(n,t){return He(n.prev,n,n.next)<0?He(n,t,n.next)>=0&&He(n,n.prev,t)>=0:He(n,t,n.prev)<0||He(n,n.next,t)<0}function Tx(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function om(n,t){const e=vu(n.i,n.x,n.y),i=vu(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Rf(n,t,e,i){const r=vu(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ma(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function vu(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ax(n,t,e,i){let r=0;for(let s=t,a=e-i;s<e;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class wx{static triangulate(t,e,i=2){return ux(t,e,i)}}class Vi{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return Vi.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];Pf(t),Df(i,t);let a=t.length;e.forEach(Pf);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,Df(i,e[l]);const o=wx.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Pf(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Df(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Qu extends dn{constructor(t=new Go([new Ut(.5,.5),new Ut(-.5,.5),new Ut(-.5,-.5),new Ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new $e(r,3)),this.setAttribute("uv",new $e(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:Cx;let D,M=!1,w,C,z,S;if(p){D=p.getSpacedPoints(u),M=!0,h=!1;const F=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(u,F),C=new q,z=new q,S=new q}h||(m=0,d=0,_=0,y=0);const I=o.extractPoints(c);let V=I.shape;const X=I.holes;if(!Vi.isClockWise(V)){V=V.reverse();for(let F=0,W=X.length;F<W;F++){const G=X[F];Vi.isClockWise(G)&&(X[F]=G.reverse())}}function at(F){const G=10000000000000001e-36;let k=F[0];for(let nt=1;nt<=F.length;nt++){const ft=nt%F.length,ut=F[ft],rt=ut.x-k.x,Tt=ut.y-k.y,P=rt*rt+Tt*Tt,wt=Math.max(Math.abs(ut.x),Math.abs(ut.y),Math.abs(k.x),Math.abs(k.y)),Ct=G*wt*wt;if(P<=Ct){F.splice(ft,1),nt--;continue}k=ut}}at(V),X.forEach(at);const N=X.length,it=V;for(let F=0;F<N;F++){const W=X[F];V=V.concat(W)}function st(F,W,G){return W||xe("ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(W,G)}const et=V.length;function mt(F,W,G){let k,nt,ft;const ut=F.x-W.x,rt=F.y-W.y,Tt=G.x-F.x,P=G.y-F.y,wt=ut*ut+rt*rt,Ct=ut*P-rt*Tt;if(Math.abs(Ct)>Number.EPSILON){const T=Math.sqrt(wt),g=Math.sqrt(Tt*Tt+P*P),L=W.x-rt/T,J=W.y+ut/T,K=G.x-P/g,Et=G.y+Tt/g,Q=((K-L)*P-(Et-J)*Tt)/(ut*P-rt*Tt);k=L+ut*Q-F.x,nt=J+rt*Q-F.y;const E=k*k+nt*nt;if(E<=2)return new Ut(k,nt);ft=Math.sqrt(E/2)}else{let T=!1;ut>Number.EPSILON?Tt>Number.EPSILON&&(T=!0):ut<-Number.EPSILON?Tt<-Number.EPSILON&&(T=!0):Math.sign(rt)===Math.sign(P)&&(T=!0),T?(k=-rt,nt=ut,ft=Math.sqrt(wt)):(k=ut,nt=rt,ft=Math.sqrt(wt/2))}return new Ut(k/ft,nt/ft)}const ht=[];for(let F=0,W=it.length,G=W-1,k=F+1;F<W;F++,G++,k++)G===W&&(G=0),k===W&&(k=0),ht[F]=mt(it[F],it[G],it[k]);const vt=[];let gt,Lt=ht.concat();for(let F=0,W=N;F<W;F++){const G=X[F];gt=[];for(let k=0,nt=G.length,ft=nt-1,ut=k+1;k<nt;k++,ft++,ut++)ft===nt&&(ft=0),ut===nt&&(ut=0),gt[k]=mt(G[k],G[ft],G[ut]);vt.push(gt),Lt=Lt.concat(gt)}let Vt;if(m===0)Vt=Vi.triangulateShape(it,X);else{const F=[],W=[];for(let G=0;G<m;G++){const k=G/m,nt=d*Math.cos(k*Math.PI/2),ft=_*Math.sin(k*Math.PI/2)+y;for(let ut=0,rt=it.length;ut<rt;ut++){const Tt=st(it[ut],ht[ut],ft);At(Tt.x,Tt.y,-nt),k===0&&F.push(Tt)}for(let ut=0,rt=N;ut<rt;ut++){const Tt=X[ut];gt=vt[ut];const P=[];for(let wt=0,Ct=Tt.length;wt<Ct;wt++){const T=st(Tt[wt],gt[wt],ft);At(T.x,T.y,-nt),k===0&&P.push(T)}k===0&&W.push(P)}}Vt=Vi.triangulateShape(F,W)}const ne=Vt.length,re=_+y;for(let F=0;F<et;F++){const W=h?st(V[F],Lt[F],re):V[F];M?(z.copy(w.normals[0]).multiplyScalar(W.x),C.copy(w.binormals[0]).multiplyScalar(W.y),S.copy(D[0]).add(z).add(C),At(S.x,S.y,S.z)):At(W.x,W.y,0)}for(let F=1;F<=u;F++)for(let W=0;W<et;W++){const G=h?st(V[W],Lt[W],re):V[W];M?(z.copy(w.normals[F]).multiplyScalar(G.x),C.copy(w.binormals[F]).multiplyScalar(G.y),S.copy(D[F]).add(z).add(C),At(S.x,S.y,S.z)):At(G.x,G.y,f/u*F)}for(let F=m-1;F>=0;F--){const W=F/m,G=d*Math.cos(W*Math.PI/2),k=_*Math.sin(W*Math.PI/2)+y;for(let nt=0,ft=it.length;nt<ft;nt++){const ut=st(it[nt],ht[nt],k);At(ut.x,ut.y,f+G)}for(let nt=0,ft=X.length;nt<ft;nt++){const ut=X[nt];gt=vt[nt];for(let rt=0,Tt=ut.length;rt<Tt;rt++){const P=st(ut[rt],gt[rt],k);M?At(P.x,P.y+D[u-1].y,D[u-1].x+G):At(P.x,P.y,f+G)}}}ie(),pt();function ie(){const F=r.length/3;if(h){let W=0,G=et*W;for(let k=0;k<ne;k++){const nt=Vt[k];zt(nt[2]+G,nt[1]+G,nt[0]+G)}W=u+m*2,G=et*W;for(let k=0;k<ne;k++){const nt=Vt[k];zt(nt[0]+G,nt[1]+G,nt[2]+G)}}else{for(let W=0;W<ne;W++){const G=Vt[W];zt(G[2],G[1],G[0])}for(let W=0;W<ne;W++){const G=Vt[W];zt(G[0]+et*u,G[1]+et*u,G[2]+et*u)}}i.addGroup(F,r.length/3-F,0)}function pt(){const F=r.length/3;let W=0;ct(it,W),W+=it.length;for(let G=0,k=X.length;G<k;G++){const nt=X[G];ct(nt,W),W+=nt.length}i.addGroup(F,r.length/3-F,1)}function ct(F,W){let G=F.length;for(;--G>=0;){const k=G;let nt=G-1;nt<0&&(nt=F.length-1);for(let ft=0,ut=u+m*2;ft<ut;ft++){const rt=et*ft,Tt=et*(ft+1),P=W+k+rt,wt=W+nt+rt,Ct=W+nt+Tt,T=W+k+Tt;Nt(P,wt,Ct,T)}}}function At(F,W,G){l.push(F),l.push(W),l.push(G)}function zt(F,W,G){R(F),R(W),R(G);const k=r.length/3,nt=A.generateTopUV(i,r,k-3,k-2,k-1);B(nt[0]),B(nt[1]),B(nt[2])}function Nt(F,W,G,k){R(F),R(W),R(k),R(W),R(G),R(k);const nt=r.length/3,ft=A.generateSideWallUV(i,r,nt-6,nt-3,nt-2,nt-1);B(ft[0]),B(ft[1]),B(ft[3]),B(ft[1]),B(ft[2]),B(ft[3])}function R(F){r.push(l[F*3+0]),r.push(l[F*3+1]),r.push(l[F*3+2])}function B(F){s.push(F.x),s.push(F.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Rx(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];i.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new gu[r.type]().fromJSON(r)),new Qu(i,t.options)}}const Cx={generateTopUV:function(n,t,e,i,r){const s=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[r*3],u=t[r*3+1];return[new Ut(s,a),new Ut(o,l),new Ut(c,u)]},generateSideWallUV:function(n,t,e,i,r,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],f=t[i*3+2],h=t[r*3],d=t[r*3+1],_=t[r*3+2],y=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Ut(a,1-l),new Ut(c,1-f),new Ut(h,1-_),new Ut(y,1-p)]:[new Ut(o,1-l),new Ut(u,1-f),new Ut(d,1-_),new Ut(m,1-p)]}};function Rx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ol extends dn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=t/o,h=e/l,d=[],_=[],y=[],m=[];for(let p=0;p<u;p++){const A=p*h-a;for(let D=0;D<c;D++){const M=D*f-s;_.push(M,-A,0),y.push(0,0,1),m.push(D/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){const D=A+c*p,M=A+c*(p+1),w=A+1+c*(p+1),C=A+1+c*p;d.push(D,M,C),d.push(M,w,C)}this.setIndex(d),this.setAttribute("position",new $e(_,3)),this.setAttribute("normal",new $e(y,3)),this.setAttribute("uv",new $e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.width,t.height,t.widthSegments,t.heightSegments)}}class th extends dn{constructor(t=new Go([new Ut(0,.5),new Ut(-.5,-.5),new Ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(s,3)),this.setAttribute("uv",new $e(a,2));function c(u){const f=r.length/3,h=u.extractPoints(e);let d=h.shape;const _=h.holes;Vi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=_.length;m<p;m++){const A=_[m];Vi.isClockWise(A)===!0&&(_[m]=A.reverse())}const y=Vi.triangulateShape(d,_);for(let m=0,p=_.length;m<p;m++){const A=_[m];d=d.concat(A)}for(let m=0,p=d.length;m<p;m++){const A=d[m];r.push(A.x,A.y,0),s.push(0,0,1),a.push(A.x,A.y)}for(let m=0,p=y.length;m<p;m++){const A=y[m],D=A[0]+f,M=A[1]+f,w=A[2]+f;i.push(D,M,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Px(e,t)}static fromJSON(t,e){const i=[];for(let r=0,s=t.shapes.length;r<s;r++){const a=e[t.shapes[r]];i.push(a)}return new th(i,t.curveSegments)}}function Px(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const r=n[e];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t}class Wo extends dn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new q,h=new q,d=[],_=[],y=[],m=[];for(let p=0;p<=i;p++){const A=[],D=p/i,M=a+D*o,w=t*Math.cos(M),C=Math.sqrt(t*t-w*w);let z=0;p===0&&a===0?z=.5/e:p===i&&l===Math.PI&&(z=-.5/e);for(let S=0;S<=e;S++){const I=S/e,V=r+I*s;f.x=-C*Math.cos(V),f.y=w,f.z=C*Math.sin(V),_.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(I+z,1-D),A.push(c++)}u.push(A)}for(let p=0;p<i;p++)for(let A=0;A<e;A++){const D=u[p][A+1],M=u[p][A],w=u[p+1][A],C=u[p+1][A+1];(p!==0||a>0)&&d.push(D,M,C),(p!==i-1||l<Math.PI)&&d.push(M,w,C)}this.setIndex(d),this.setAttribute("position",new $e(_,3)),this.setAttribute("normal",new $e(y,3)),this.setAttribute("uv",new $e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function ms(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];if(Lf(r))r.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(Lf(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[e][i]=s}else t[e][i]=r.slice();else t[e][i]=r}}return t}function vn(n){const t={};for(let e=0;e<n.length;e++){const i=ms(n[e]);for(const r in i)t[r]=i[r]}return t}function Lf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Dx(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function lm(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}const Lx={clone:ms,merge:vn};var Ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ux=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends xs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ix,this.fragmentShader=Ux,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=Dx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new ve().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ut().fromArray(r.value);break;case"v3":this.uniforms[i].value=new q().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ve().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ce().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Oe().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Nx extends yi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fx extends xs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pu,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ox extends xs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bx extends xs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class cm extends an{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const lc=new Oe,If=new q,Uf=new q;class zx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ku,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;If.setFromMatrixPosition(t.matrixWorld),e.position.copy(If),Uf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(lc,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;t.coordinateSystem===ha||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(lc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const co=new q,uo=new fr,ai=new q;class um extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(co,uo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(co,uo,ai.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(co,uo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(co,uo,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const sr=new q,Nf=new Ut,Ff=new Ut;class Jn extends um{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=mu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mu*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(sr.x,sr.y).multiplyScalar(-t/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-t/sr.z)}getViewSize(t,e){return this.getViewBounds(t,Nf,Ff),e.subVectors(Ff,Nf)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(js*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ll extends um{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Vx extends zx{constructor(){super(new ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hx extends cm{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new Vx}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class kx extends cm{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Qr=-90,ts=1;class Gx extends an{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jn(Qr,ts,t,e);r.layers=this.layers,this.add(r);const s=new Jn(Qr,ts,t,e);s.layers=this.layers,this.add(s);const a=new Jn(Qr,ts,t,e);a.layers=this.layers,this.add(a);const o=new Jn(Qr,ts,t,e);o.layers=this.layers,this.add(o);const l=new Jn(Qr,ts,t,e);l.layers=this.layers,this.add(l);const c=new Jn(Qr,ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Wx extends Jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Of=new Oe;class Xx{constructor(t,e,i=0,r=1/0){this.ray=new al(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Yu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):xe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Of.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Of),this}intersectObject(t,e=!0,i=[]){return xu(t,this,i,e),i.sort(Bf),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)xu(t[r],this,i,e);return i.sort(Bf),i}}function Bf(n,t){return n.distance-t.distance}function xu(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)xu(s[a],t,e,!0)}}class zf{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=pe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(pe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hm{static{hm.prototype.isMatrix2=!0}constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=r,this}}class $x extends mr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Vf(n,t,e,i){const r=qx(i);switch(e){case Wp:return n*t;case $p:return n*t/r.components*r.byteLength;case ku:return n*t/r.components*r.byteLength;case Br:return n*t*2/r.components*r.byteLength;case Gu:return n*t*2/r.components*r.byteLength;case Xp:return n*t*3/r.components*r.byteLength;case jn:return n*t*4/r.components*r.byteLength;case Wu:return n*t*4/r.components*r.byteLength;case So:case Mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case yo:case bo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zc:case Hc:return Math.max(n,16)*Math.max(t,8)/4;case Bc:case Vc:return Math.max(n,8)*Math.max(t,8)/2;case kc:case Gc:case Xc:case $c:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wc:case Fo:case qc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Kc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Zc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case jc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case tu:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case eu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case nu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case iu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ru:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case su:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case au:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ou:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case lu:case cu:case uu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case hu:case fu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Oo:case du:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qx(n){switch(n){case Ln:case Vp:return{byteLength:1,components:1};case ca:case Hp:case Mi:return{byteLength:2,components:1};case Vu:case Hu:return{byteLength:2,components:4};case Si:case zu:case pi:return{byteLength:4,components:1};case kp:case Gp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bu}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fm(){let n=null,t=!1,e=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),e(s,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Yx(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],y=f[d];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,f[h]=y)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const y=f[d];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Kx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zx=`#ifdef USE_ALPHAHASH
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
#endif`,Jx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eS=`#ifdef USE_AOMAP
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
#endif`,nS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iS=`#ifdef USE_BATCHING
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
#endif`,rS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lS=`#ifdef USE_IRIDESCENCE
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
#endif`,cS=`#ifdef USE_BUMPMAP
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
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_S=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vS=`#define PI 3.141592653589793
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
} // validated`,xS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,SS=`vec3 transformedNormal = objectNormal;
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
#endif`,MS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ES=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TS="gl_FragColor = linearToOutputTexel( gl_FragColor );",AS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wS=`#ifdef USE_ENVMAP
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
#endif`,CS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,RS=`#ifdef USE_ENVMAP
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
#endif`,PS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
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
#endif`,LS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,US=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FS=`#ifdef USE_GRADIENTMAP
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
}`,OS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,HS=`#ifdef USE_ENVMAP
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
#endif`,kS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$S=`PhysicalMaterial material;
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
#endif`,qS=`uniform sampler2D dfgLUT;
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
}`,YS=`
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
#endif`,KS=`#if defined( RE_IndirectDiffuse )
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
#endif`,ZS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,jS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sM=`#if defined( USE_POINTS_UV )
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
#endif`,aM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hM=`#ifdef USE_MORPHTARGETS
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
#endif`,fM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vM=`#ifdef USE_NORMALMAP
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
#endif`,xM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,TM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,UM=`float getShadowMask() {
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
}`,NM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FM=`#ifdef USE_SKINNING
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
#endif`,OM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BM=`#ifdef USE_SKINNING
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
#endif`,zM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GM=`#ifdef USE_TRANSMISSION
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
#endif`,WM=`#ifdef USE_TRANSMISSION
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
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZM=`uniform sampler2D t2D;
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
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`#include <common>
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
}`,ny=`#if DEPTH_PACKING == 3200
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
}`,iy=`#define DISTANCE
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
}`,ry=`#define DISTANCE
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
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ay=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oy=`uniform float scale;
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
}`,ly=`uniform vec3 diffuse;
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
}`,cy=`#include <common>
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
}`,uy=`uniform vec3 diffuse;
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
}`,hy=`#define LAMBERT
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
}`,fy=`#define LAMBERT
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
}`,dy=`#define MATCAP
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
}`,py=`#define MATCAP
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
}`,my=`#define NORMAL
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
}`,gy=`#define NORMAL
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
}`,_y=`#define PHONG
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
}`,vy=`#define PHONG
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
}`,xy=`#define STANDARD
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
}`,Sy=`#define STANDARD
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
}`,My=`#define TOON
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
}`,yy=`#define TOON
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
}`,by=`uniform float size;
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
}`,Ey=`uniform vec3 diffuse;
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
}`,Ty=`#include <common>
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
}`,Ay=`uniform vec3 color;
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
}`,wy=`uniform float rotation;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:Kx,alphahash_pars_fragment:Zx,alphamap_fragment:Jx,alphamap_pars_fragment:jx,alphatest_fragment:Qx,alphatest_pars_fragment:tS,aomap_fragment:eS,aomap_pars_fragment:nS,batching_pars_vertex:iS,batching_vertex:rS,begin_vertex:sS,beginnormal_vertex:aS,bsdfs:oS,iridescence_fragment:lS,bumpmap_pars_fragment:cS,clipping_planes_fragment:uS,clipping_planes_pars_fragment:hS,clipping_planes_pars_vertex:fS,clipping_planes_vertex:dS,color_fragment:pS,color_pars_fragment:mS,color_pars_vertex:gS,color_vertex:_S,common:vS,cube_uv_reflection_fragment:xS,defaultnormal_vertex:SS,displacementmap_pars_vertex:MS,displacementmap_vertex:yS,emissivemap_fragment:bS,emissivemap_pars_fragment:ES,colorspace_fragment:TS,colorspace_pars_fragment:AS,envmap_fragment:wS,envmap_common_pars_fragment:CS,envmap_pars_fragment:RS,envmap_pars_vertex:PS,envmap_physical_pars_fragment:HS,envmap_vertex:DS,fog_vertex:LS,fog_pars_vertex:IS,fog_fragment:US,fog_pars_fragment:NS,gradientmap_pars_fragment:FS,lightmap_pars_fragment:OS,lights_lambert_fragment:BS,lights_lambert_pars_fragment:zS,lights_pars_begin:VS,lights_toon_fragment:kS,lights_toon_pars_fragment:GS,lights_phong_fragment:WS,lights_phong_pars_fragment:XS,lights_physical_fragment:$S,lights_physical_pars_fragment:qS,lights_fragment_begin:YS,lights_fragment_maps:KS,lights_fragment_end:ZS,lightprobes_pars_fragment:JS,logdepthbuf_fragment:jS,logdepthbuf_pars_fragment:QS,logdepthbuf_pars_vertex:tM,logdepthbuf_vertex:eM,map_fragment:nM,map_pars_fragment:iM,map_particle_fragment:rM,map_particle_pars_fragment:sM,metalnessmap_fragment:aM,metalnessmap_pars_fragment:oM,morphinstance_vertex:lM,morphcolor_vertex:cM,morphnormal_vertex:uM,morphtarget_pars_vertex:hM,morphtarget_vertex:fM,normal_fragment_begin:dM,normal_fragment_maps:pM,normal_pars_fragment:mM,normal_pars_vertex:gM,normal_vertex:_M,normalmap_pars_fragment:vM,clearcoat_normal_fragment_begin:xM,clearcoat_normal_fragment_maps:SM,clearcoat_pars_fragment:MM,iridescence_pars_fragment:yM,opaque_fragment:bM,packing:EM,premultiplied_alpha_fragment:TM,project_vertex:AM,dithering_fragment:wM,dithering_pars_fragment:CM,roughnessmap_fragment:RM,roughnessmap_pars_fragment:PM,shadowmap_pars_fragment:DM,shadowmap_pars_vertex:LM,shadowmap_vertex:IM,shadowmask_pars_fragment:UM,skinbase_vertex:NM,skinning_pars_vertex:FM,skinning_vertex:OM,skinnormal_vertex:BM,specularmap_fragment:zM,specularmap_pars_fragment:VM,tonemapping_fragment:HM,tonemapping_pars_fragment:kM,transmission_fragment:GM,transmission_pars_fragment:WM,uv_pars_fragment:XM,uv_pars_vertex:$M,uv_vertex:qM,worldpos_vertex:YM,background_vert:KM,background_frag:ZM,backgroundCube_vert:JM,backgroundCube_frag:jM,cube_vert:QM,cube_frag:ty,depth_vert:ey,depth_frag:ny,distance_vert:iy,distance_frag:ry,equirect_vert:sy,equirect_frag:ay,linedashed_vert:oy,linedashed_frag:ly,meshbasic_vert:cy,meshbasic_frag:uy,meshlambert_vert:hy,meshlambert_frag:fy,meshmatcap_vert:dy,meshmatcap_frag:py,meshnormal_vert:my,meshnormal_frag:gy,meshphong_vert:_y,meshphong_frag:vy,meshphysical_vert:xy,meshphysical_frag:Sy,meshtoon_vert:My,meshtoon_frag:yy,points_vert:by,points_frag:Ey,shadow_vert:Ty,shadow_frag:Ay,sprite_vert:wy,sprite_frag:Cy},Gt={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},hi={basic:{uniforms:vn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:vn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ve(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:vn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:vn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:vn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new ve(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:vn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:vn([Gt.points,Gt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:vn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:vn([Gt.common,Gt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:vn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:vn([Gt.sprite,Gt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:vn([Gt.common,Gt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:vn([Gt.lights,Gt.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};hi.physical={uniforms:vn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const ho={r:0,b:0,g:0},Ry=new Oe,dm=new ce;dm.set(-1,0,0,0,1,0,0,0,1);function Py(n,t,e,i,r,s){const a=new ve(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function d(A){let D=A.isScene===!0?A.background:null;if(D&&D.isTexture){const M=A.backgroundBlurriness>0;D=t.get(D,M)}return D}function _(A){let D=!1;const M=d(A);M===null?m(a,o):M&&M.isColor&&(m(M,1),D=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||D)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(A,D){const M=d(D);M&&(M.isCubeTexture||M.mapping===rl)?(c===void 0&&(c=new Un(new Sa(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:ms(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,C,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ry.makeRotationFromEuler(D.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(dm),c.material.toneMapped=_e.getTransfer(M.colorSpace)!==Ce,(u!==M||f!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Un(new ol(2,2),new yi({name:"BackgroundMaterial",uniforms:ms(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.toneMapped=_e.getTransfer(M.colorSpace)!==Ce,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function m(A,D){A.getRGB(ho,lm(n)),e.buffers.color.setClear(ho.r,ho.g,ho.b,D,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,D=1){a.set(A),o=D,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,m(a,o)},render:_,addToRenderList:y,dispose:p}}function Dy(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(X,Z,at,N,it){let st=!1;const et=f(X,N,at,Z);s!==et&&(s=et,c(s.object)),st=d(X,N,at,it),st&&_(X,N,at,it),it!==null&&t.update(it,n.ELEMENT_ARRAY_BUFFER),(st||a)&&(a=!1,M(X,Z,at,N),it!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function l(){return n.createVertexArray()}function c(X){return n.bindVertexArray(X)}function u(X){return n.deleteVertexArray(X)}function f(X,Z,at,N){const it=N.wireframe===!0;let st=i[Z.id];st===void 0&&(st={},i[Z.id]=st);const et=X.isInstancedMesh===!0?X.id:0;let mt=st[et];mt===void 0&&(mt={},st[et]=mt);let ht=mt[at.id];ht===void 0&&(ht={},mt[at.id]=ht);let vt=ht[it];return vt===void 0&&(vt=h(l()),ht[it]=vt),vt}function h(X){const Z=[],at=[],N=[];for(let it=0;it<e;it++)Z[it]=0,at[it]=0,N[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:at,attributeDivisors:N,object:X,attributes:{},index:null}}function d(X,Z,at,N){const it=s.attributes,st=Z.attributes;let et=0;const mt=at.getAttributes();for(const ht in mt)if(mt[ht].location>=0){const gt=it[ht];let Lt=st[ht];if(Lt===void 0&&(ht==="instanceMatrix"&&X.instanceMatrix&&(Lt=X.instanceMatrix),ht==="instanceColor"&&X.instanceColor&&(Lt=X.instanceColor)),gt===void 0||gt.attribute!==Lt||Lt&&gt.data!==Lt.data)return!0;et++}return s.attributesNum!==et||s.index!==N}function _(X,Z,at,N){const it={},st=Z.attributes;let et=0;const mt=at.getAttributes();for(const ht in mt)if(mt[ht].location>=0){let gt=st[ht];gt===void 0&&(ht==="instanceMatrix"&&X.instanceMatrix&&(gt=X.instanceMatrix),ht==="instanceColor"&&X.instanceColor&&(gt=X.instanceColor));const Lt={};Lt.attribute=gt,gt&&gt.data&&(Lt.data=gt.data),it[ht]=Lt,et++}s.attributes=it,s.attributesNum=et,s.index=N}function y(){const X=s.newAttributes;for(let Z=0,at=X.length;Z<at;Z++)X[Z]=0}function m(X){p(X,0)}function p(X,Z){const at=s.newAttributes,N=s.enabledAttributes,it=s.attributeDivisors;at[X]=1,N[X]===0&&(n.enableVertexAttribArray(X),N[X]=1),it[X]!==Z&&(n.vertexAttribDivisor(X,Z),it[X]=Z)}function A(){const X=s.newAttributes,Z=s.enabledAttributes;for(let at=0,N=Z.length;at<N;at++)Z[at]!==X[at]&&(n.disableVertexAttribArray(at),Z[at]=0)}function D(X,Z,at,N,it,st,et){et===!0?n.vertexAttribIPointer(X,Z,at,it,st):n.vertexAttribPointer(X,Z,at,N,it,st)}function M(X,Z,at,N){y();const it=N.attributes,st=at.getAttributes(),et=Z.defaultAttributeValues;for(const mt in st){const ht=st[mt];if(ht.location>=0){let vt=it[mt];if(vt===void 0&&(mt==="instanceMatrix"&&X.instanceMatrix&&(vt=X.instanceMatrix),mt==="instanceColor"&&X.instanceColor&&(vt=X.instanceColor)),vt!==void 0){const gt=vt.normalized,Lt=vt.itemSize,Vt=t.get(vt);if(Vt===void 0)continue;const ne=Vt.buffer,re=Vt.type,ie=Vt.bytesPerElement,pt=re===n.INT||re===n.UNSIGNED_INT||vt.gpuType===zu;if(vt.isInterleavedBufferAttribute){const ct=vt.data,At=ct.stride,zt=vt.offset;if(ct.isInstancedInterleavedBuffer){for(let Nt=0;Nt<ht.locationSize;Nt++)p(ht.location+Nt,ct.meshPerAttribute);X.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Nt=0;Nt<ht.locationSize;Nt++)m(ht.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let Nt=0;Nt<ht.locationSize;Nt++)D(ht.location+Nt,Lt/ht.locationSize,re,gt,At*ie,(zt+Lt/ht.locationSize*Nt)*ie,pt)}else{if(vt.isInstancedBufferAttribute){for(let ct=0;ct<ht.locationSize;ct++)p(ht.location+ct,vt.meshPerAttribute);X.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ct=0;ct<ht.locationSize;ct++)m(ht.location+ct);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let ct=0;ct<ht.locationSize;ct++)D(ht.location+ct,Lt/ht.locationSize,re,gt,Lt*ie,Lt/ht.locationSize*ct*ie,pt)}}else if(et!==void 0){const gt=et[mt];if(gt!==void 0)switch(gt.length){case 2:n.vertexAttrib2fv(ht.location,gt);break;case 3:n.vertexAttrib3fv(ht.location,gt);break;case 4:n.vertexAttrib4fv(ht.location,gt);break;default:n.vertexAttrib1fv(ht.location,gt)}}}}A()}function w(){I();for(const X in i){const Z=i[X];for(const at in Z){const N=Z[at];for(const it in N){const st=N[it];for(const et in st)u(st[et].object),delete st[et];delete N[it]}}delete i[X]}}function C(X){if(i[X.id]===void 0)return;const Z=i[X.id];for(const at in Z){const N=Z[at];for(const it in N){const st=N[it];for(const et in st)u(st[et].object),delete st[et];delete N[it]}}delete i[X.id]}function z(X){for(const Z in i){const at=i[Z];for(const N in at){const it=at[N];if(it[X.id]===void 0)continue;const st=it[X.id];for(const et in st)u(st[et].object),delete st[et];delete it[X.id]}}}function S(X){for(const Z in i){const at=i[Z],N=X.isInstancedMesh===!0?X.id:0,it=at[N];if(it!==void 0){for(const st in it){const et=it[st];for(const mt in et)u(et[mt].object),delete et[mt];delete it[st]}delete at[N],Object.keys(at).length===0&&delete i[Z]}}}function I(){V(),a=!0,s!==r&&(s=r,c(s.object))}function V(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:V,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfObject:S,releaseStatesOfProgram:z,initAttributes:y,enableAttribute:m,disableUnusedAttributes:A}}function Ly(n,t,e){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Iy(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(z){return!(z!==jn&&i.convert(z)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(z){const S=z===Mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Ln&&z!==pi&&!S&&i.convert(z)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(z){if(z==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(se("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:D,maxFragmentUniforms:M,maxSamples:w,samples:C}}function Uy(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Fi,o=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,D=A*4;let M=p.clippingState||null;l.value=M,M=u(_,h,D,d);for(let w=0;w!==D;++w)M[w]=e[w];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const p=d+y*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let D=0,M=d;D!==y;++D,M+=4)a.copy(f[D]).applyMatrix4(A,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}const as=4,Ny=6,Fy=20,Oy=256,Fs=new ll,Hf=new ve;let cc=null,uc=0,hc=0,fc=!1;const By=new q,Ar=new q;class kf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=By}=s;cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(cc,uc,hc),this._renderer.xr.enabled=fc,t.scissorTest=!1,es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Or||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Mi,format:jn,colorSpace:Bo,depthBuffer:!1},r=Gf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gf(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=zy(s)),this._blurMaterial=Hy(s,t,e),this._ggxMaterial=Vy(s,t,e)}return r}_compileMaterial(t){const e=new Un(new dn,t);this._renderer.compile(e,Fs)}_sceneToCubeUV(t,e,i,r,s){const l=new Jn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Hf),f.toneMapping=_i,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Un(new Sa,new Qs({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const A=t.background;A?A.isColor&&(m.color.copy(A),t.background=null,p=!0):(m.color.copy(Hf),p=!0);for(let D=0;D<6;D++){const M=D%3;M===0?(l.up.set(0,c[D],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[D],s.y,s.z)):M===1?(l.up.set(0,0,c[D]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[D],s.z)):(l.up.set(0,c[D],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[D]));const w=this._cubeSize;es(r,M*w,D>2?w:0,w,w),f.setRenderTarget(r),p&&f.render(y,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=A}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Or||t.mapping===ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;es(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Fs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:_}=this,y=this._sizeLods[i],m=3*y*(i>_-as?i-_+as:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=_-e,es(s,m,p,3*y,2*y),r.setRenderTarget(s),r.render(o,Fs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,es(t,m,p,3*y,2*y),r.setRenderTarget(t),r.render(o,Fs)}_blur(t,e,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,a),this._blurPass(s,t,i,i,a)}_blurPass(t,e,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],f=3*u*(r>this._lodMax-as?r-this._lodMax+as:0),h=4*(this._cubeSize-u);es(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Fs)}}function zy(n){const t=[],e=[];let i=n;const r=n-as+1+Ny;for(let s=0;s<r;s++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,_=new Float32Array(d*h*f),y=new Float32Array(d*h*f);for(let p=0;p<f;p++){const A=p%3*2/3-1,D=p>2?0:-1,M=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];_.set(M,d*h*p);for(let w=0;w<h;w++){const C=u[w*2]*2-1,z=u[w*2+1]*2-1;p===0?Ar.set(1,z,C):p===1?Ar.set(-C,1,-z):p===2?Ar.set(-C,z,1):p===3?Ar.set(-1,z,-C):p===4?Ar.set(-C,-1,z):Ar.set(C,z,-1),Ar.toArray(y,(p*h+w)*d)}}const m=new dn;m.setAttribute("position",new Xi(_,d)),m.setAttribute("outputDirection",new Xi(y,d)),e.push(new Un(m,null)),i>as&&i--}return{lodMeshes:e,sizeLods:t}}function Gf(n,t,e){const i=new ei(n,t,e);return i.texture.mapping=rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function es(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Vy(n,t,e){return new yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Oy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Hy(n,t,e){return new yi({name:"SphericalGaussianBlur",defines:{SAMPLES:Fy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Wf(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Xf(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function cl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class pm extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new jp(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Sa(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Gi});s.uniforms.tEquirect.value=e;const a=new Un(r,s),o=e.minFilter;return e.minFilter===Lr&&(e.minFilter=hn),new Gx(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}function ky(n){let t=new WeakMap,e=new WeakMap,i=null;function r(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ll||d===Il)if(t.has(h)){const _=t.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const y=new pm(_.height);return y.fromEquirectangularTexture(n,h),t.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,_=d===Ll||d===Il,y=d===Or||d===ds;if(_||y){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new kf(n)),m=_?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const A=h.image;return _&&A&&A.height>0||y&&A&&l(A)?(i===null&&(i=new kf(n)),m=_?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===Ll?h.mapping=Or:d===Il&&(h.mapping=ds),h}function l(h){let d=0;const _=6;for(let y=0;y<_;y++)h[y]!==void 0&&d++;return d===_}function c(h){const d=h.target;d.removeEventListener("dispose",c);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Gy(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&cs("WebGLRenderer: "+i+" extension not supported."),r}}}function Wy(n,t,e,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let y=0;if(_===void 0)return;if(d!==null){const A=d.array;y=d.version;for(let D=0,M=A.length;D<M;D+=3){const w=A[D+0],C=A[D+1],z=A[D+2];h.push(w,C,C,z,z,w)}}else{const A=_.array;y=_.version;for(let D=0,M=A.length/3-1;D<M;D+=3){const w=D+0,C=D+1,z=D+2;h.push(w,C,C,z,z,w)}}const m=new(_.count>=65535?Jp:Zp)(h,1);m.version=y;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Xy(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*a),e.update(h,i,1)}function c(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,s,f*a,d),e.update(h,i,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,d);let y=0;for(let m=0;m<d;m++)y+=h[m];e.update(y,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function $y(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:xe("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function qy(n,t,e){const i=new WeakMap,r=new Ve;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let I=function(){z.dispose(),i.delete(o),o.removeEventListener("dispose",I)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let D=0;d===!0&&(D=1),_===!0&&(D=2),y===!0&&(D=3);let M=o.attributes.position.count*D,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const C=new Float32Array(M*w*4*f),z=new Yp(C,M,w,f);z.type=pi,z.needsUpdate=!0;const S=D*4;for(let V=0;V<f;V++){const X=m[V],Z=p[V],at=A[V],N=M*w*4*V;for(let it=0;it<X.count;it++){const st=it*S;d===!0&&(r.fromBufferAttribute(X,it),C[N+st+0]=r.x,C[N+st+1]=r.y,C[N+st+2]=r.z,C[N+st+3]=0),_===!0&&(r.fromBufferAttribute(Z,it),C[N+st+4]=r.x,C[N+st+5]=r.y,C[N+st+6]=r.z,C[N+st+7]=0),y===!0&&(r.fromBufferAttribute(at,it),C[N+st+8]=r.x,C[N+st+9]=r.y,C[N+st+10]=r.z,C[N+st+11]=at.itemSize===4?r.w:1)}}h={count:f,texture:z,size:new Ut(M,w)},i.set(o,h),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];const _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Yy(n,t,e,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,h=t.get(c,f);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const Ky={[Lp]:"LINEAR_TONE_MAPPING",[Ip]:"REINHARD_TONE_MAPPING",[Up]:"CINEON_TONE_MAPPING",[Np]:"ACES_FILMIC_TONE_MAPPING",[Op]:"AGX_TONE_MAPPING",[Bp]:"NEUTRAL_TONE_MAPPING",[Fp]:"CUSTOM_TONE_MAPPING"};function Zy(n,t,e,i,r,s){const a=new ei(t,e,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new dn;c.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new $e([0,2,0,0,2,0],2));const u=new Nx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Un(c,u),h=new ll(-1,1,1,-1,0,1);let d=null,_=null,y=!1,m,p=null,A=[],D=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),l!==null&&l.setSize(M,w);for(let C=0;C<A.length;C++){const z=A[C];z.setSize&&z.setSize(M,w)}},this.setEffects=function(M){A=M,D=A.length>0&&A[0].isRenderPass===!0;const w=a.width,C=a.height;A.length>0&&o===null&&(o=new ei(w,C,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),l=new ei(w,C,{type:Mi,depthBuffer:!1,stencilBuffer:!1}));for(let z=0;z<A.length;z++){const S=A[z];S.setSize&&S.setSize(w,C)}},this.begin=function(M,w){if(y||M.toneMapping===_i&&A.length===0)return!1;if(p=w,w!==null){const C=w.width,z=w.height;(a.width!==C||a.height!==z)&&this.setSize(C,z)}return D===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=_i,!0},this.hasRenderPass=function(){return D},this.end=function(M,w){M.toneMapping=m,y=!0;let C=a,z=o;for(let S=0;S<A.length;S++){const I=A[S];I.enabled!==!1&&(I.render(M,z,C,w),I.needsSwap!==!1&&(C=z,z=z===o?l:o))}if(d!==M.outputColorSpace||_!==M.toneMapping){d=M.outputColorSpace,_=M.toneMapping,u.defines={},_e.getTransfer(d)===Ce&&(u.defines.SRGB_TRANSFER="");const S=Ky[_];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=C.texture,M.setRenderTarget(p),M.render(f,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const mm=new yn,Su=new fa(1,1),gm=new Yp,_m=new R0,vm=new jp,$f=[],qf=[],Yf=new Float32Array(16),Kf=new Float32Array(9),Zf=new Float32Array(4);function Ss(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=$f[r];if(s===void 0&&(s=new Float32Array(r),$f[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ul(n,t){let e=qf[t];e===void 0&&(e=new Int32Array(t),qf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Jy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function jy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2fv(this.addr,t),Ze(e,t)}}function Qy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;n.uniform3fv(this.addr,t),Ze(e,t)}}function tb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4fv(this.addr,t),Ze(e,t)}}function eb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,i))return;Zf.set(i),n.uniformMatrix2fv(this.addr,!1,Zf),Ze(e,i)}}function nb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,i))return;Kf.set(i),n.uniformMatrix3fv(this.addr,!1,Kf),Ze(e,i)}}function ib(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,i))return;Yf.set(i),n.uniformMatrix4fv(this.addr,!1,Yf),Ze(e,i)}}function rb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function sb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2iv(this.addr,t),Ze(e,t)}}function ab(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3iv(this.addr,t),Ze(e,t)}}function ob(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4iv(this.addr,t),Ze(e,t)}}function lb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function cb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2uiv(this.addr,t),Ze(e,t)}}function ub(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3uiv(this.addr,t),Ze(e,t)}}function hb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4uiv(this.addr,t),Ze(e,t)}}function fb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Su.compareFunction=e.isReversedDepthBuffer()?$u:Xu,s=Su):s=mm,e.setTexture2D(t||s,r)}function db(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||_m,r)}function pb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||vm,r)}function mb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||gm,r)}function gb(n){switch(n){case 5126:return Jy;case 35664:return jy;case 35665:return Qy;case 35666:return tb;case 35674:return eb;case 35675:return nb;case 35676:return ib;case 5124:case 35670:return rb;case 35667:case 35671:return sb;case 35668:case 35672:return ab;case 35669:case 35673:return ob;case 5125:return lb;case 36294:return cb;case 36295:return ub;case 36296:return hb;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return pb;case 36289:case 36303:case 36311:case 36292:return mb}}function _b(n,t){n.uniform1fv(this.addr,t)}function vb(n,t){const e=Ss(t,this.size,2);n.uniform2fv(this.addr,e)}function xb(n,t){const e=Ss(t,this.size,3);n.uniform3fv(this.addr,e)}function Sb(n,t){const e=Ss(t,this.size,4);n.uniform4fv(this.addr,e)}function Mb(n,t){const e=Ss(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function yb(n,t){const e=Ss(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function bb(n,t){const e=Ss(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Eb(n,t){n.uniform1iv(this.addr,t)}function Tb(n,t){n.uniform2iv(this.addr,t)}function Ab(n,t){n.uniform3iv(this.addr,t)}function wb(n,t){n.uniform4iv(this.addr,t)}function Cb(n,t){n.uniform1uiv(this.addr,t)}function Rb(n,t){n.uniform2uiv(this.addr,t)}function Pb(n,t){n.uniform3uiv(this.addr,t)}function Db(n,t){n.uniform4uiv(this.addr,t)}function Lb(n,t,e){const i=this.cache,r=t.length,s=ul(e,r);Ke(i,s)||(n.uniform1iv(this.addr,s),Ze(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Su:a=mm;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function Ib(n,t,e){const i=this.cache,r=t.length,s=ul(e,r);Ke(i,s)||(n.uniform1iv(this.addr,s),Ze(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||_m,s[a])}function Ub(n,t,e){const i=this.cache,r=t.length,s=ul(e,r);Ke(i,s)||(n.uniform1iv(this.addr,s),Ze(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||vm,s[a])}function Nb(n,t,e){const i=this.cache,r=t.length,s=ul(e,r);Ke(i,s)||(n.uniform1iv(this.addr,s),Ze(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||gm,s[a])}function Fb(n){switch(n){case 5126:return _b;case 35664:return vb;case 35665:return xb;case 35666:return Sb;case 35674:return Mb;case 35675:return yb;case 35676:return bb;case 5124:case 35670:return Eb;case 35667:case 35671:return Tb;case 35668:case 35672:return Ab;case 35669:case 35673:return wb;case 5125:return Cb;case 36294:return Rb;case 36295:return Pb;case 36296:return Db;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return Ub;case 36289:case 36303:case 36311:case 36292:return Nb}}class Ob{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=gb(e.type)}}class Bb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fb(e.type)}}class zb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const dc=/(\w+)(\])?(\[|\.)?/g;function Jf(n,t){n.seq.push(t),n.map[t.id]=t}function Vb(n,t,e){const i=n.name,r=i.length;for(dc.lastIndex=0;;){const s=dc.exec(i),a=dc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Jf(e,c===void 0?new Ob(o,n,t):new Bb(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new zb(o),Jf(e,f)),e=f}}}class To{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Vb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function jf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Hb=37297;let kb=0;function Gb(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Qf=new ce;function Wb(n){_e._getMatrix(Qf,_e.workingColorSpace,n);const t=`mat3( ${Qf.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(n)){case zo:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function td(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Gb(n.getShaderSource(t),o)}else return s}function Xb(n,t){const e=Wb(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const $b={[Lp]:"Linear",[Ip]:"Reinhard",[Up]:"Cineon",[Np]:"ACESFilmic",[Op]:"AgX",[Bp]:"Neutral",[Fp]:"Custom"};function qb(n,t){const e=$b[t];return e===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fo=new q;function Yb(){_e.getLuminanceCoefficients(fo);const n=fo.x.toFixed(4),t=fo.y.toFixed(4),e=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function Zb(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Jb(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Gs(n){return n!==""}function ed(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(n){return n.replace(jb,tE)}const Qb=new Map;function tE(n,t){let e=fe[t];if(e===void 0){const i=Qb.get(t);if(i!==void 0)e=fe[i],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Mu(e)}const eE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(n){return n.replace(eE,nE)}function nE(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rd(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const iE={[xo]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function rE(n){return iE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sE={[Or]:"ENVMAP_TYPE_CUBE",[ds]:"ENVMAP_TYPE_CUBE",[rl]:"ENVMAP_TYPE_CUBE_UV"};function aE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":sE[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const oE={[ds]:"ENVMAP_MODE_REFRACTION"};function lE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":oE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cE={[Dp]:"ENVMAP_BLENDING_MULTIPLY",[s0]:"ENVMAP_BLENDING_MIX",[a0]:"ENVMAP_BLENDING_ADD"};function uE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":cE[n.combine]||"ENVMAP_BLENDING_NONE"}function hE(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function fE(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=rE(e),c=aE(e),u=lE(e),f=uE(e),h=hE(e),d=Kb(e),_=Zb(s),y=r.createProgram();let m,p,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Gs).join(`
`),p.length>0&&(p+=`
`)):(m=[rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),p=[rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?fe.tonemapping_pars_fragment:"",e.toneMapping!==_i?qb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,Xb("linearToOutputTexel",e.outputColorSpace),Yb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),a=Mu(a),a=ed(a,e),a=nd(a,e),o=Mu(o),o=ed(o,e),o=nd(o,e),a=id(a),o=id(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const D=A+m+a,M=A+p+o,w=jf(r,r.VERTEX_SHADER,D),C=jf(r,r.FRAGMENT_SHADER,M);r.attachShader(y,w),r.attachShader(y,C),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function z(X){if(n.debug.checkShaderErrors){const Z=r.getProgramInfoLog(y)||"",at=r.getShaderInfoLog(w)||"",N=r.getShaderInfoLog(C)||"",it=Z.trim(),st=at.trim(),et=N.trim();let mt=!0,ht=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(mt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,w,C);else{const vt=td(r,w,"vertex"),gt=td(r,C,"fragment");xe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+it+`
`+vt+`
`+gt)}else it!==""?se("WebGLProgram: Program Info Log:",it):(st===""||et==="")&&(ht=!1);ht&&(X.diagnostics={runnable:mt,programLog:it,vertexShader:{log:st,prefix:m},fragmentShader:{log:et,prefix:p}})}r.deleteShader(w),r.deleteShader(C),S=new To(r,y),I=Jb(r,y)}let S;this.getUniforms=function(){return S===void 0&&z(this),S};let I;this.getAttributes=function(){return I===void 0&&z(this),I};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(y,Hb)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kb++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=C,this}let dE=0;class pE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new mE(t),e.set(t,i)),i}}class mE{constructor(t){this.id=dE++,this.code=t,this.usedTimes=0}}function gE(n){return n===Br||n===Fo||n===Oo}function _E(n,t,e,i,r,s){const a=new Yu,o=new pE,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function y(S,I,V,X,Z,at){const N=X.fog,it=Z.geometry,st=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?X.environment:null,et=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,mt=t.get(S.envMap||st,et),ht=mt&&mt.mapping===rl?mt.image.height:null,vt=d[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&se("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const gt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Lt=gt!==void 0?gt.length:0;let Vt=0;it.morphAttributes.position!==void 0&&(Vt=1),it.morphAttributes.normal!==void 0&&(Vt=2),it.morphAttributes.color!==void 0&&(Vt=3);let ne,re,ie,pt;if(vt){const Pe=hi[vt];ne=Pe.vertexShader,re=Pe.fragmentShader}else{ne=S.vertexShader,re=S.fragmentShader;const Pe=o.getVertexShaderStage(S),me=o.getFragmentShaderStage(S);o.update(S,Pe,me),ie=Pe.id,pt=me.id}const ct=n.getRenderTarget(),At=n.state.buffers.depth.getReversed(),zt=Z.isInstancedMesh===!0,Nt=Z.isBatchedMesh===!0,R=!!S.map,B=!!S.matcap,F=!!mt,W=!!S.aoMap,G=!!S.lightMap,k=!!S.bumpMap&&S.wireframe===!1,nt=!!S.normalMap,ft=!!S.displacementMap,ut=!!S.emissiveMap,rt=!!S.metalnessMap,Tt=!!S.roughnessMap,P=S.anisotropy>0,wt=S.clearcoat>0,Ct=S.dispersion>0,T=S.retroreflectivity>0,g=S.iridescence>0,L=S.sheen>0,J=S.transmission>0,K=P&&!!S.anisotropyMap,Et=wt&&!!S.clearcoatMap,Q=wt&&!!S.clearcoatNormalMap,E=wt&&!!S.clearcoatRoughnessMap,O=g&&!!S.iridescenceMap,_t=g&&!!S.iridescenceThicknessMap,Pt=L&&!!S.sheenColorMap,It=L&&!!S.sheenRoughnessMap,Dt=!!S.specularMap,Jt=!!S.specularColorMap,Qt=!!S.specularIntensityMap,oe=J&&!!S.transmissionMap,Y=J&&!!S.thicknessMap,Ft=!!S.gradientMap,St=!!S.alphaMap,Bt=S.alphaTest>0,Ht=!!S.alphaHash,bt=!!S.extensions;let jt=_i;S.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(jt=n.toneMapping);const Zt={shaderID:vt,shaderType:S.type,shaderName:S.name,vertexShader:ne,fragmentShader:re,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:pt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Nt,batchingColor:Nt&&Z._colorsTexture!==null,instancing:zt,instancingColor:zt&&Z.instanceColor!==null,instancingMorph:zt&&Z.morphTexture!==null,outputColorSpace:ct===null?n.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:R,matcap:B,envMap:F,envMapMode:F&&mt.mapping,envMapCubeUVHeight:ht,aoMap:W,lightMap:G,bumpMap:k,normalMap:nt,displacementMap:ft,emissiveMap:ut,normalMapObjectSpace:nt&&S.normalMapType===c0,normalMapTangentSpace:nt&&S.normalMapType===pu,packedNormalMap:nt&&S.normalMapType===pu&&gE(S.normalMap.format),metalnessMap:rt,roughnessMap:Tt,anisotropy:P,anisotropyMap:K,clearcoat:wt,clearcoatMap:Et,clearcoatNormalMap:Q,clearcoatRoughnessMap:E,dispersion:Ct,retroreflection:T,iridescence:g,iridescenceMap:O,iridescenceThicknessMap:_t,sheen:L,sheenColorMap:Pt,sheenRoughnessMap:It,specularMap:Dt,specularColorMap:Jt,specularIntensityMap:Qt,transmission:J,transmissionMap:oe,thicknessMap:Y,gradientMap:Ft,opaque:S.transparent===!1&&S.blending===Js&&S.alphaToCoverage===!1,alphaMap:St,alphaTest:Bt,alphaHash:Ht,combine:S.combine,mapUv:R&&_(S.map.channel),aoMapUv:W&&_(S.aoMap.channel),lightMapUv:G&&_(S.lightMap.channel),bumpMapUv:k&&_(S.bumpMap.channel),normalMapUv:nt&&_(S.normalMap.channel),displacementMapUv:ft&&_(S.displacementMap.channel),emissiveMapUv:ut&&_(S.emissiveMap.channel),metalnessMapUv:rt&&_(S.metalnessMap.channel),roughnessMapUv:Tt&&_(S.roughnessMap.channel),anisotropyMapUv:K&&_(S.anisotropyMap.channel),clearcoatMapUv:Et&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Q&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:E&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:O&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:It&&_(S.sheenRoughnessMap.channel),specularMapUv:Dt&&_(S.specularMap.channel),specularColorMapUv:Jt&&_(S.specularColorMap.channel),specularIntensityMapUv:Qt&&_(S.specularIntensityMap.channel),transmissionMapUv:oe&&_(S.transmissionMap.channel),thicknessMapUv:Y&&_(S.thicknessMap.channel),alphaMapUv:St&&_(S.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(nt||P),vertexNormals:!!it.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!it.attributes.uv&&(R||St),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||it.attributes.normal===void 0&&nt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:At,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:it.attributes.position!==void 0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Vt,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:at.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:jt,decodeVideoTexture:R&&S.map.isVideoTexture===!0&&_e.getTransfer(S.map.colorSpace)===Ce,decodeVideoTextureEmissive:ut&&S.emissiveMap.isVideoTexture===!0&&_e.getTransfer(S.emissiveMap.colorSpace)===Ce,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===di,flipSided:S.side===Cn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:bt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&S.extensions.multiDraw===!0||Nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function m(S){const I=[];if(S.shaderID?I.push(S.shaderID):(I.push(S.customVertexShaderID),I.push(S.customFragmentShaderID)),S.defines!==void 0)for(const V in S.defines)I.push(V),I.push(S.defines[V]);return S.isRawShaderMaterial===!1&&(p(I,S),A(I,S),I.push(n.outputColorSpace)),I.push(S.customProgramCacheKey),I.join()}function p(S,I){S.push(I.precision),S.push(I.outputColorSpace),S.push(I.envMapMode),S.push(I.envMapCubeUVHeight),S.push(I.mapUv),S.push(I.alphaMapUv),S.push(I.lightMapUv),S.push(I.aoMapUv),S.push(I.bumpMapUv),S.push(I.normalMapUv),S.push(I.displacementMapUv),S.push(I.emissiveMapUv),S.push(I.metalnessMapUv),S.push(I.roughnessMapUv),S.push(I.anisotropyMapUv),S.push(I.clearcoatMapUv),S.push(I.clearcoatNormalMapUv),S.push(I.clearcoatRoughnessMapUv),S.push(I.iridescenceMapUv),S.push(I.iridescenceThicknessMapUv),S.push(I.sheenColorMapUv),S.push(I.sheenRoughnessMapUv),S.push(I.specularMapUv),S.push(I.specularColorMapUv),S.push(I.specularIntensityMapUv),S.push(I.transmissionMapUv),S.push(I.thicknessMapUv),S.push(I.combine),S.push(I.fogExp2),S.push(I.sizeAttenuation),S.push(I.morphTargetsCount),S.push(I.morphAttributeCount),S.push(I.numSunLights),S.push(I.numDirLights),S.push(I.numPointLights),S.push(I.numSpotLights),S.push(I.numSpotLightMaps),S.push(I.numHemiLights),S.push(I.numRectAreaLights),S.push(I.numSunLightShadows),S.push(I.numDirLightShadows),S.push(I.numPointLightShadows),S.push(I.numSpotLightShadows),S.push(I.numSpotLightShadowsWithMaps),S.push(I.numLightProbes),S.push(I.shadowMapType),S.push(I.toneMapping),S.push(I.numClippingPlanes),S.push(I.numClipIntersection),S.push(I.depthPacking)}function A(S,I){a.disableAll(),I.instancing&&a.enable(0),I.instancingColor&&a.enable(1),I.instancingMorph&&a.enable(2),I.matcap&&a.enable(3),I.envMap&&a.enable(4),I.normalMapObjectSpace&&a.enable(5),I.normalMapTangentSpace&&a.enable(6),I.clearcoat&&a.enable(7),I.iridescence&&a.enable(8),I.alphaTest&&a.enable(9),I.vertexColors&&a.enable(10),I.vertexAlphas&&a.enable(11),I.vertexUv1s&&a.enable(12),I.vertexUv2s&&a.enable(13),I.vertexUv3s&&a.enable(14),I.vertexTangents&&a.enable(15),I.anisotropy&&a.enable(16),I.alphaHash&&a.enable(17),I.batching&&a.enable(18),I.dispersion&&a.enable(19),I.retroreflection&&a.enable(24),I.batchingColor&&a.enable(20),I.gradientMap&&a.enable(21),I.packedNormalMap&&a.enable(22),I.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),I.fog&&a.enable(0),I.useFog&&a.enable(1),I.flatShading&&a.enable(2),I.logarithmicDepthBuffer&&a.enable(3),I.reversedDepthBuffer&&a.enable(4),I.skinning&&a.enable(5),I.morphTargets&&a.enable(6),I.morphNormals&&a.enable(7),I.morphColors&&a.enable(8),I.premultipliedAlpha&&a.enable(9),I.shadowMapEnabled&&a.enable(10),I.doubleSided&&a.enable(11),I.flipSided&&a.enable(12),I.useDepthPacking&&a.enable(13),I.dithering&&a.enable(14),I.transmission&&a.enable(15),I.sheen&&a.enable(16),I.opaque&&a.enable(17),I.pointsUvs&&a.enable(18),I.decodeVideoTexture&&a.enable(19),I.decodeVideoTextureEmissive&&a.enable(20),I.alphaToCoverage&&a.enable(21),I.numLightProbeGrids>0&&a.enable(22),I.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function D(S){const I=d[S.type];let V;if(I){const X=hi[I];V=Lx.clone(X.uniforms)}else V=S.uniforms;return V}function M(S,I){let V=u.get(I);return V!==void 0?++V.usedTimes:(V=new fE(n,I,S,r),c.push(V),u.set(I,V)),V}function w(S){if(--S.usedTimes===0){const I=c.indexOf(S);c[I]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function C(S){o.remove(S)}function z(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:D,acquireProgram:M,releaseProgram:w,releaseShaderCache:C,programs:c,dispose:z}}function vE(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function xE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function sd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ad(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,_,y,m,p){let A=n[t];return A===void 0?(A={id:h.id,object:h,geometry:d,material:_,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},n[t]=A):(A.id=h.id,A.object=h,A.geometry=d,A.material=_,A.materialVariant=a(h),A.groupOrder=y,A.renderOrder=h.renderOrder,A.z=m,A.group=p),t++,A}function l(h,d,_,y,m,p,A){A.reversedDepth===!0&&(m=-m);const D=o(h,d,_,y,m,p);_.transmission>0?i.push(D):_.transparent===!0?r.push(D):e.push(D)}function c(h,d,_,y,m,p){const A=o(h,d,_,y,m,p);_.transmission>0?i.unshift(A):_.transparent===!0?r.unshift(A):e.unshift(A)}function u(h,d){e.length>1&&e.sort(h||xE),i.length>1&&i.sort(d||sd),r.length>1&&r.sort(d||sd)}function f(){for(let h=t,d=n.length;h<d;h++){const _=n[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function SE(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new ad,n.set(i,[a])):r>=s.length?(a=new ad,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function ME(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new ve};break;case"SpotLight":e={position:new q,direction:new q,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new ve,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":e={color:new ve,position:new q,halfWidth:new q,halfHeight:new q};break}return n[t.id]=e,e}}}function yE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let bE=0;function EE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function TE(n){const t=new ME,e=yE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new Oe,a=new Oe;function o(c){let u=0,f=0,h=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let d=0,_=0,y=0,m=0,p=0,A=0,D=0,M=0,w=0,C=0,z=0,S=0,I=0,V=0;c.sort(EE);for(let Z=0,at=c.length;Z<at;Z++){const N=c[Z],it=N.color,st=N.intensity,et=N.distance;let mt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Br?mt=N.shadow.map.texture:mt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=it.r*st,f+=it.g*st,h+=it.b*st;else if(N.isLightProbe){for(let ht=0;ht<9;ht++)i.probe[ht].addScaledVector(N.sh.coefficients[ht],st);V++}else if(N.isSunLight){const ht=t.get(N);if(ht.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const vt=N.shadow,gt=e.get(N);gt.shadowIntensity=vt.intensity,gt.shadowBias=vt.bias,gt.shadowNormalBias=vt.normalBias,gt.shadowRadius=vt.radius,gt.shadowMapSize.copy(vt.mapSize).multiply(vt.getFrameExtents()),i.sunShadow[_]=gt,i.sunShadowMap[_]=mt;const Lt=vt.getViewportCount();for(let Vt=0;Vt<Lt;Vt++)i.sunShadowMatrix[y+Vt]=vt.getMatrix(Vt),i.sunShadowCascade[y+Vt]=vt._cascadeData[Vt];y+=Lt,_++}i.sun[d]=ht,d++}else if(N.isDirectionalLight){const ht=t.get(N);if(ht.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const vt=N.shadow,gt=e.get(N);gt.shadowIntensity=vt.intensity,gt.shadowBias=vt.bias,gt.shadowNormalBias=vt.normalBias,gt.shadowRadius=vt.radius,gt.shadowMapSize=vt.mapSize,i.directionalShadow[m]=gt,i.directionalShadowMap[m]=mt,i.directionalShadowMatrix[m]=N.shadow.matrix,w++}i.directional[m]=ht,m++}else if(N.isSpotLight){const ht=t.get(N);ht.position.setFromMatrixPosition(N.matrixWorld),ht.color.copy(it).multiplyScalar(st),ht.distance=et,ht.coneCos=Math.cos(N.angle),ht.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),ht.decay=N.decay,i.spot[A]=ht;const vt=N.shadow;if(N.map&&(i.spotLightMap[S]=N.map,S++,vt.updateMatrices(N),N.castShadow&&I++),i.spotLightMatrix[A]=vt.matrix,N.castShadow){const gt=e.get(N);gt.shadowIntensity=vt.intensity,gt.shadowBias=vt.bias,gt.shadowNormalBias=vt.normalBias,gt.shadowRadius=vt.radius,gt.shadowMapSize=vt.mapSize,i.spotShadow[A]=gt,i.spotShadowMap[A]=mt,z++}A++}else if(N.isRectAreaLight){const ht=t.get(N);ht.color.copy(it).multiplyScalar(st),ht.halfWidth.set(N.width*.5,0,0),ht.halfHeight.set(0,N.height*.5,0),i.rectArea[D]=ht,D++}else if(N.isPointLight){const ht=t.get(N);if(ht.color.copy(N.color).multiplyScalar(N.intensity),ht.distance=N.distance,ht.decay=N.decay,N.castShadow){const vt=N.shadow,gt=e.get(N);gt.shadowIntensity=vt.intensity,gt.shadowBias=vt.bias,gt.shadowNormalBias=vt.normalBias,gt.shadowRadius=vt.radius,gt.shadowMapSize=vt.mapSize,gt.shadowCameraNear=vt.camera.near,gt.shadowCameraFar=vt.camera.far,i.pointShadow[p]=gt,i.pointShadowMap[p]=mt,i.pointShadowMatrix[p]=N.shadow.matrix,C++}i.point[p]=ht,p++}else if(N.isHemisphereLight){const ht=t.get(N);ht.skyColor.copy(N.color).multiplyScalar(st),ht.groundColor.copy(N.groundColor).multiplyScalar(st),i.hemi[M]=ht,M++}}D>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Gt.LTC_FLOAT_1,i.rectAreaLTC2=Gt.LTC_FLOAT_2):(i.rectAreaLTC1=Gt.LTC_HALF_1,i.rectAreaLTC2=Gt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const X=i.hash;(X.sunLength!==d||X.directionalLength!==m||X.pointLength!==p||X.spotLength!==A||X.rectAreaLength!==D||X.hemiLength!==M||X.numSunShadows!==_||X.numDirectionalShadows!==w||X.numPointShadows!==C||X.numSpotShadows!==z||X.numSpotMaps!==S||X.numLightProbes!==V)&&(i.sun.length=d,i.directional.length=m,i.spot.length=A,i.rectArea.length=D,i.point.length=p,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=C,i.pointShadowMap.length=C,i.pointShadowMatrix.length=C,i.spotShadow.length=z,i.spotShadowMap.length=z,i.spotLightMatrix.length=z+S-I,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=V,X.sunLength=d,X.directionalLength=m,X.pointLength=p,X.spotLength=A,X.rectAreaLength=D,X.hemiLength=M,X.numSunShadows=_,X.numDirectionalShadows=w,X.numPointShadows=C,X.numSpotShadows=z,X.numSpotMaps=S,X.numLightProbes=V,i.version=bE++)}function l(c,u){let f=0,h=0,d=0,_=0,y=0,m=0;const p=u.matrixWorldInverse;for(let A=0,D=c.length;A<D;A++){const M=c[A];if(M.isSunLight){const w=i.sun[f];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),f++}else if(M.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),h++}else if(M.isSpotLight){const w=i.spot[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const w=i.rectArea[y];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function od(n){const t=new TE(n),e=[],i=[],r=[];function s(h){f.camera=h,e.length=0,i.length=0,r.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function l(h){r.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function AE(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new od(n),t.set(r,[o])):s>=a.length?(o=new od(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const wE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CE=`uniform sampler2D shadow_pass;
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
}`,RE=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],PE=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],ld=new Oe,Os=new q,pc=new q;function DE(n,t,e){let i=new Ku;const r=new Ut,s=new Ut,a=new Ve,o=new Ox,l=new Bx,c={},u=e.maxTextureSize,f={[Fr]:Cn,[Cn]:Fr,[di]:di},h=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:wE,fragmentShader:CE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new dn;_.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Un(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xo;let p=this.type;this.render=function(C,z,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;this.type===Vv&&(se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xo);const I=n.getRenderTarget(),V=n.getActiveCubeFace(),X=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(Gi),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const at=p!==this.type;at&&z.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(it=>it.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,it=C.length;N<it;N++){const st=C[N],et=st.shadow;if(et===void 0){se("WebGLShadowMap:",st,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;r.copy(et.mapSize);const mt=et.getFrameExtents();r.multiply(mt),s.copy(et.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/mt.x),r.x=s.x*mt.x,et.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/mt.y),r.y=s.y*mt.y,et.mapSize.y=s.y));const ht=n.state.buffers.depth.getReversed();if(et.camera._reversedDepth=ht,et.map===null||at===!0){if(et.map!==null&&(et.map.depthTexture!==null&&(et.map.depthTexture.dispose(),et.map.depthTexture=null),et.map.dispose()),this.type===Hs){if(st.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}et.map=new ei(r.x,r.y,{format:Br,type:Mi,minFilter:hn,magFilter:hn,generateMipmaps:!1}),et.map.texture.name=st.name+".shadowMap",et.map.depthTexture=new fa(r.x,r.y,pi),et.map.depthTexture.name=st.name+".shadowMapDepth",et.map.depthTexture.format=Ki,et.map.depthTexture.compareFunction=null,et.map.depthTexture.minFilter=sn,et.map.depthTexture.magFilter=sn}else st.isPointLight?(et.map=new pm(r.x),et.map.depthTexture=new K0(r.x,Si)):(et.map=new ei(r.x,r.y),et.map.depthTexture=new fa(r.x,r.y,Si)),et.map.depthTexture.name=st.name+".shadowMap",et.map.depthTexture.format=Ki,this.type===xo?(et.map.depthTexture.compareFunction=ht?$u:Xu,et.map.depthTexture.minFilter=hn,et.map.depthTexture.magFilter=hn):(et.map.depthTexture.compareFunction=null,et.map.depthTexture.minFilter=sn,et.map.depthTexture.magFilter=sn);et.camera.updateProjectionMatrix()}et.map.isWebGLCubeRenderTarget!==!0&&(et.map.width!==r.x||et.map.height!==r.y)&&et.map.setSize(r.x,r.y);const vt=et.map.isWebGLCubeRenderTarget?6:et.getViewportCount();st.isPointLight!==!0&&et.updateMatrices(st,S);for(let gt=0;gt<vt;gt++){const Lt=et.getCamera(gt);if(st.isPointLight){const Vt=et.camera,ne=et.matrix,re=st.distance||Vt.far;re!==Vt.far&&(Vt.far=re,Vt.updateProjectionMatrix()),Os.setFromMatrixPosition(st.matrixWorld),Vt.position.copy(Os),pc.copy(Vt.position),pc.add(RE[gt]),Vt.up.copy(PE[gt]),Vt.lookAt(pc),Vt.updateMatrixWorld(),ne.makeTranslation(-Os.x,-Os.y,-Os.z),ld.multiplyMatrices(Vt.projectionMatrix,Vt.matrixWorldInverse),et._frustum.setFromProjectionMatrix(ld,Vt.coordinateSystem,Vt.reversedDepth)}if(et.map.isWebGLCubeRenderTarget)n.setRenderTarget(et.map,gt),n.clear();else{gt===0&&(n.setRenderTarget(et.map),n.clear());const Vt=et.getViewport(gt);a.set(s.x*Vt.x,s.y*Vt.y,s.x*Vt.z,s.y*Vt.w),Z.viewport(a)}i=et.getFrustum(gt),M(z,S,Lt,st,this.type)}et.isPointLightShadow!==!0&&this.type===Hs&&A(et,S),et.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(I,V,X)};function A(C,z){const S=t.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null?C.mapPass=new ei(r.x,r.y,{format:Br,type:Mi}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value.set(C.map.width,C.map.height),h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(z,null,S,h,y,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(z,null,S,d,y,null)}function D(C,z,S,I){let V=null;const X=S.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(X!==void 0)V=X;else if(V=S.isPointLight===!0?l:o,n.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Z=V.uuid,at=z.uuid;let N=c[Z];N===void 0&&(N={},c[Z]=N);let it=N[at];it===void 0&&(it=V.clone(),N[at]=it,z.addEventListener("dispose",w)),V=it}if(V.visible=z.visible,V.wireframe=z.wireframe,I===Hs?V.side=z.shadowSide!==null?z.shadowSide:z.side:V.side=z.shadowSide!==null?z.shadowSide:f[z.side],V.alphaMap=z.alphaMap,V.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,V.map=z.map,V.clipShadows=z.clipShadows,V.clippingPlanes=z.clippingPlanes,V.clipIntersection=z.clipIntersection,V.displacementMap=z.displacementMap,V.displacementScale=z.displacementScale,V.displacementBias=z.displacementBias,V.wireframeLinewidth=z.wireframeLinewidth,V.linewidth=z.linewidth,S.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const Z=n.properties.get(V);Z.light=S}return V}function M(C,z,S,I,V){if(C.visible===!1)return;if(C.layers.test(z.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&V===Hs)&&(!C.frustumCulled||C.intersectsFrustum(i))){C.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,C.matrixWorld);const at=t.update(C),N=C.material;if(Array.isArray(N)){const it=at.groups;for(let st=0,et=it.length;st<et;st++){const mt=it[st],ht=N[mt.materialIndex];if(ht&&ht.visible){const vt=D(C,ht,I,V);C.onBeforeShadow(n,C,z,S,at,vt,mt),n.renderBufferDirect(S,null,at,vt,C,mt),C.onAfterShadow(n,C,z,S,at,vt,mt)}}}else if(N.visible){const it=D(C,N,I,V);C.onBeforeShadow(n,C,z,S,at,it,null),n.renderBufferDirect(S,null,at,it,C,null),C.onAfterShadow(n,C,z,S,at,it,null)}}const Z=C.children;for(let at=0,N=Z.length;at<N;at++)M(Z[at],z,S,I,V)}function w(C){C.target.removeEventListener("dispose",w);for(const S in c){const I=c[S],V=C.target.uuid;V in I&&(I[V].dispose(),delete I[V])}}}function LE(n,t){function e(){let Y=!1;const Ft=new Ve;let St=null;const Bt=new Ve(0,0,0,0);return{setMask:function(Ht){St!==Ht&&!Y&&(n.colorMask(Ht,Ht,Ht,Ht),St=Ht)},setLocked:function(Ht){Y=Ht},setClear:function(Ht,bt,jt,Zt,Pe){Pe===!0&&(Ht*=Zt,bt*=Zt,jt*=Zt),Ft.set(Ht,bt,jt,Zt),Bt.equals(Ft)===!1&&(n.clearColor(Ht,bt,jt,Zt),Bt.copy(Ft))},reset:function(){Y=!1,St=null,Bt.set(-1,0,0,0)}}}function i(){let Y=!1,Ft=!1,St=null,Bt=null,Ht=null;return{setReversed:function(bt){if(Ft!==bt){const jt=t.get("EXT_clip_control");bt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),Ft=bt;const Zt=Ht;Ht=null,this.setClear(Zt)}},getReversed:function(){return Ft},setTest:function(bt){bt?ct(n.DEPTH_TEST):At(n.DEPTH_TEST)},setMask:function(bt){St!==bt&&!Y&&(n.depthMask(bt),St=bt)},setFunc:function(bt){if(Ft&&(bt=M0[bt]),Bt!==bt){switch(bt){case Rc:n.depthFunc(n.NEVER);break;case Pc:n.depthFunc(n.ALWAYS);break;case Dc:n.depthFunc(n.LESS);break;case la:n.depthFunc(n.LEQUAL);break;case Lc:n.depthFunc(n.EQUAL);break;case Ic:n.depthFunc(n.GEQUAL);break;case Uc:n.depthFunc(n.GREATER);break;case Nc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Bt=bt}},setLocked:function(bt){Y=bt},setClear:function(bt){Ht!==bt&&(Ht=bt,Ft&&(bt=1-bt),n.clearDepth(bt))},reset:function(){Y=!1,St=null,Bt=null,Ht=null,Ft=!1}}}function r(){let Y=!1,Ft=null,St=null,Bt=null,Ht=null,bt=null,jt=null,Zt=null,Pe=null;return{setTest:function(me){Y||(me?ct(n.STENCIL_TEST):At(n.STENCIL_TEST))},setMask:function(me){Ft!==me&&!Y&&(n.stencilMask(me),Ft=me)},setFunc:function(me,pn,Nn){(St!==me||Bt!==pn||Ht!==Nn)&&(n.stencilFunc(me,pn,Nn),St=me,Bt=pn,Ht=Nn)},setOp:function(me,pn,Nn){(bt!==me||jt!==pn||Zt!==Nn)&&(n.stencilOp(me,pn,Nn),bt=me,jt=pn,Zt=Nn)},setLocked:function(me){Y=me},setClear:function(me){Pe!==me&&(n.clearStencil(me),Pe=me)},reset:function(){Y=!1,Ft=null,St=null,Bt=null,Ht=null,bt=null,jt=null,Zt=null,Pe=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,_=[],y=null,m=!1,p=null,A=null,D=null,M=null,w=null,C=null,z=null,S=new ve(0,0,0),I=0,V=!1,X=null,Z=null,at=null,N=null,it=null;const st=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,mt=0;const ht=n.getParameter(n.VERSION);ht.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(ht)[1]),et=mt>=1):ht.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),et=mt>=2);let vt=null,gt={};const Lt=n.getParameter(n.SCISSOR_BOX),Vt=n.getParameter(n.VIEWPORT),ne=new Ve().fromArray(Lt),re=new Ve().fromArray(Vt);function ie(Y,Ft,St,Bt){const Ht=new Uint8Array(4),bt=n.createTexture();n.bindTexture(Y,bt),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let jt=0;jt<St;jt++)Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?n.texImage3D(Ft,0,n.RGBA,1,1,Bt,0,n.RGBA,n.UNSIGNED_BYTE,Ht):n.texImage2D(Ft+jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ht);return bt}const pt={};pt[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),pt[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pt[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(n.DEPTH_TEST),a.setFunc(la),k(!1),nt(Qh),ct(n.CULL_FACE),W(Gi);function ct(Y){u[Y]!==!0&&(n.enable(Y),u[Y]=!0)}function At(Y){u[Y]!==!1&&(n.disable(Y),u[Y]=!1)}function zt(Y,Ft){return h[Y]!==Ft?(n.bindFramebuffer(Y,Ft),h[Y]=Ft,Y===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ft),Y===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ft),!0):!1}function Nt(Y,Ft){let St=_,Bt=!1;if(Y){St=d.get(Ft),St===void 0&&(St=[],d.set(Ft,St));const Ht=Y.textures;if(St.length!==Ht.length||St[0]!==n.COLOR_ATTACHMENT0){for(let bt=0,jt=Ht.length;bt<jt;bt++)St[bt]=n.COLOR_ATTACHMENT0+bt;St.length=Ht.length,Bt=!0}}else St[0]!==n.BACK&&(St[0]=n.BACK,Bt=!0);Bt&&n.drawBuffers(St)}function R(Y){return y!==Y?(n.useProgram(Y),y=Y,!0):!1}const B={[is]:n.FUNC_ADD,[kv]:n.FUNC_SUBTRACT,[Gv]:n.FUNC_REVERSE_SUBTRACT};B[Wv]=n.MIN,B[Xv]=n.MAX;const F={[$v]:n.ZERO,[qv]:n.ONE,[Yv]:n.SRC_COLOR,[Rp]:n.SRC_ALPHA,[t0]:n.SRC_ALPHA_SATURATE,[jv]:n.DST_COLOR,[Zv]:n.DST_ALPHA,[Kv]:n.ONE_MINUS_SRC_COLOR,[Pp]:n.ONE_MINUS_SRC_ALPHA,[Qv]:n.ONE_MINUS_DST_COLOR,[Jv]:n.ONE_MINUS_DST_ALPHA,[e0]:n.CONSTANT_COLOR,[n0]:n.ONE_MINUS_CONSTANT_COLOR,[i0]:n.CONSTANT_ALPHA,[r0]:n.ONE_MINUS_CONSTANT_ALPHA};function W(Y,Ft,St,Bt,Ht,bt,jt,Zt,Pe,me){if(Y===Gi){m===!0&&(At(n.BLEND),m=!1);return}if(m===!1&&(ct(n.BLEND),m=!0),Y!==Hv){if(Y!==p||me!==V){if((A!==is||w!==is)&&(n.blendEquation(n.FUNC_ADD),A=is,w=is),me)switch(Y){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tf:n.blendFunc(n.ONE,n.ONE);break;case ef:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:xe("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ef:xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nf:xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xe("WebGLState: Invalid blending: ",Y);break}D=null,M=null,C=null,z=null,S.set(0,0,0),I=0,p=Y,V=me}return}Ht=Ht||Ft,bt=bt||St,jt=jt||Bt,(Ft!==A||Ht!==w)&&(n.blendEquationSeparate(B[Ft],B[Ht]),A=Ft,w=Ht),(St!==D||Bt!==M||bt!==C||jt!==z)&&(n.blendFuncSeparate(F[St],F[Bt],F[bt],F[jt]),D=St,M=Bt,C=bt,z=jt),(Zt.equals(S)===!1||Pe!==I)&&(n.blendColor(Zt.r,Zt.g,Zt.b,Pe),S.copy(Zt),I=Pe),p=Y,V=!1}function G(Y,Ft){Y.side===di?At(n.CULL_FACE):ct(n.CULL_FACE);let St=Y.side===Cn;Ft&&(St=!St),k(St),Y.blending===Js&&Y.transparent===!1?W(Gi):W(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),a.setFunc(Y.depthFunc),a.setTest(Y.depthTest),a.setMask(Y.depthWrite),s.setMask(Y.colorWrite);const Bt=Y.stencilWrite;o.setTest(Bt),Bt&&(o.setMask(Y.stencilWriteMask),o.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),o.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ut(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ct(n.SAMPLE_ALPHA_TO_COVERAGE):At(n.SAMPLE_ALPHA_TO_COVERAGE)}function k(Y){X!==Y&&(Y?n.frontFace(n.CW):n.frontFace(n.CCW),X=Y)}function nt(Y){Y!==Bv?(ct(n.CULL_FACE),Y!==Z&&(Y===Qh?n.cullFace(n.BACK):Y===zv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):At(n.CULL_FACE),Z=Y}function ft(Y){Y!==at&&(et&&n.lineWidth(Y),at=Y)}function ut(Y,Ft,St){Y?(ct(n.POLYGON_OFFSET_FILL),(N!==Ft||it!==St)&&(N=Ft,it=St,a.getReversed()&&(Ft=-Ft),n.polygonOffset(Ft,St))):At(n.POLYGON_OFFSET_FILL)}function rt(Y){Y?ct(n.SCISSOR_TEST):At(n.SCISSOR_TEST)}function Tt(Y){Y===void 0&&(Y=n.TEXTURE0+st-1),vt!==Y&&(n.activeTexture(Y),vt=Y)}function P(Y,Ft,St){St===void 0&&(vt===null?St=n.TEXTURE0+st-1:St=vt);let Bt=gt[St];Bt===void 0&&(Bt={type:void 0,texture:void 0},gt[St]=Bt),(Bt.type!==Y||Bt.texture!==Ft)&&(vt!==St&&(n.activeTexture(St),vt=St),n.bindTexture(Y,Ft||pt[Y]),Bt.type=Y,Bt.texture=Ft)}function wt(){const Y=gt[vt];Y!==void 0&&Y.type!==void 0&&(n.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Ct(){try{n.compressedTexImage2D(...arguments)}catch(Y){xe("WebGLState:",Y)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(Y){xe("WebGLState:",Y)}}function g(){try{n.texSubImage2D(...arguments)}catch(Y){xe("WebGLState:",Y)}}function L(){try{n.texSubImage3D(...arguments)}catch(Y){xe("WebGLState:",Y)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(Y){xe("WebGLState:",Y)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(Y){xe("WebGLState:",Y)}}function Et(){try{n.texStorage2D(...arguments)}catch(Y){xe("WebGLState:",Y)}}function Q(){try{n.texStorage3D(...arguments)}catch(Y){xe("WebGLState:",Y)}}function E(){try{n.texImage2D(...arguments)}catch(Y){xe("WebGLState:",Y)}}function O(){try{n.texImage3D(...arguments)}catch(Y){xe("WebGLState:",Y)}}function _t(Y){return f[Y]!==void 0?f[Y]:n.getParameter(Y)}function Pt(Y,Ft){f[Y]!==Ft&&(n.pixelStorei(Y,Ft),f[Y]=Ft)}function It(Y){ne.equals(Y)===!1&&(n.scissor(Y.x,Y.y,Y.z,Y.w),ne.copy(Y))}function Dt(Y){re.equals(Y)===!1&&(n.viewport(Y.x,Y.y,Y.z,Y.w),re.copy(Y))}function Jt(Y,Ft){let St=c.get(Ft);St===void 0&&(St=new WeakMap,c.set(Ft,St));let Bt=St.get(Y);Bt===void 0&&(Bt=n.getUniformBlockIndex(Ft,Y.name),St.set(Y,Bt))}function Qt(Y,Ft){const Bt=c.get(Ft).get(Y);l.get(Ft)!==Bt&&(n.uniformBlockBinding(Ft,Bt,Y.__bindingPointIndex),l.set(Ft,Bt))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},vt=null,gt={},h={},d=new WeakMap,_=[],y=null,m=!1,p=null,A=null,D=null,M=null,w=null,C=null,z=null,S=new ve(0,0,0),I=0,V=!1,X=null,Z=null,at=null,N=null,it=null,ne.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ct,disable:At,bindFramebuffer:zt,drawBuffers:Nt,useProgram:R,setBlending:W,setMaterial:G,setFlipSided:k,setCullFace:nt,setLineWidth:ft,setPolygonOffset:ut,setScissorTest:rt,activeTexture:Tt,bindTexture:P,unbindTexture:wt,compressedTexImage2D:Ct,compressedTexImage3D:T,texImage2D:E,texImage3D:O,pixelStorei:Pt,getParameter:_t,updateUBOMapping:Jt,uniformBlockBinding:Qt,texStorage2D:Et,texStorage3D:Q,texSubImage2D:g,texSubImage3D:L,compressedTexSubImage2D:J,compressedTexSubImage3D:K,scissor:It,viewport:Dt,reset:oe}}function IE(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,g){return _?new OffscreenCanvas(T,g):Vo("canvas")}function m(T,g,L){let J=1;const K=Ct(T);if((K.width>L||K.height>L)&&(J=L/Math.max(K.width,K.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Et=Math.floor(J*K.width),Q=Math.floor(J*K.height);h===void 0&&(h=y(Et,Q));const E=g?y(Et,Q):h;return E.width=Et,E.height=Q,E.getContext("2d").drawImage(T,0,0,Et,Q),se("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Et+"x"+Q+")."),E}else return"data"in T&&se("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function p(T){return T.generateMipmaps}function A(T){n.generateMipmap(T)}function D(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,g,L,J,K,Et=!1){if(T!==null){if(n[T]!==void 0)return n[T];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q;J&&(Q=t.get("EXT_texture_norm16"),Q||se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let E=g;if(g===n.RED&&(L===n.FLOAT&&(E=n.R32F),L===n.HALF_FLOAT&&(E=n.R16F),L===n.UNSIGNED_BYTE&&(E=n.R8),L===n.UNSIGNED_SHORT&&Q&&(E=Q.R16_EXT),L===n.SHORT&&Q&&(E=Q.R16_SNORM_EXT)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(E=n.R8UI),L===n.UNSIGNED_SHORT&&(E=n.R16UI),L===n.UNSIGNED_INT&&(E=n.R32UI),L===n.BYTE&&(E=n.R8I),L===n.SHORT&&(E=n.R16I),L===n.INT&&(E=n.R32I)),g===n.RG&&(L===n.FLOAT&&(E=n.RG32F),L===n.HALF_FLOAT&&(E=n.RG16F),L===n.UNSIGNED_BYTE&&(E=n.RG8),L===n.UNSIGNED_SHORT&&Q&&(E=Q.RG16_EXT),L===n.SHORT&&Q&&(E=Q.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(E=n.RG8UI),L===n.UNSIGNED_SHORT&&(E=n.RG16UI),L===n.UNSIGNED_INT&&(E=n.RG32UI),L===n.BYTE&&(E=n.RG8I),L===n.SHORT&&(E=n.RG16I),L===n.INT&&(E=n.RG32I)),g===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(E=n.RGB8UI),L===n.UNSIGNED_SHORT&&(E=n.RGB16UI),L===n.UNSIGNED_INT&&(E=n.RGB32UI),L===n.BYTE&&(E=n.RGB8I),L===n.SHORT&&(E=n.RGB16I),L===n.INT&&(E=n.RGB32I)),g===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(E=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(E=n.RGBA16UI),L===n.UNSIGNED_INT&&(E=n.RGBA32UI),L===n.BYTE&&(E=n.RGBA8I),L===n.SHORT&&(E=n.RGBA16I),L===n.INT&&(E=n.RGBA32I)),g===n.RGB&&(L===n.UNSIGNED_SHORT&&Q&&(E=Q.RGB16_EXT),L===n.SHORT&&Q&&(E=Q.RGB16_SNORM_EXT),L===n.UNSIGNED_INT_5_9_9_9_REV&&(E=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(E=n.R11F_G11F_B10F)),g===n.RGBA){const O=Et?zo:_e.getTransfer(K);L===n.FLOAT&&(E=n.RGBA32F),L===n.HALF_FLOAT&&(E=n.RGBA16F),L===n.UNSIGNED_BYTE&&(E=O===Ce?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT&&Q&&(E=Q.RGBA16_EXT),L===n.SHORT&&Q&&(E=Q.RGBA16_SNORM_EXT),L===n.UNSIGNED_SHORT_4_4_4_4&&(E=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(E=n.RGB5_A1)}return(E===n.R16F||E===n.R32F||E===n.RG16F||E===n.RG32F||E===n.RGBA16F||E===n.RGBA32F)&&t.get("EXT_color_buffer_float"),E}function w(T,g){let L;return T?g===null||g===Si||g===ua?L=n.DEPTH24_STENCIL8:g===pi?L=n.DEPTH32F_STENCIL8:g===ca&&(L=n.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Si||g===ua?L=n.DEPTH_COMPONENT24:g===pi?L=n.DEPTH_COMPONENT32F:g===ca&&(L=n.DEPTH_COMPONENT16),L}function C(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==sn&&T.minFilter!==hn?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function z(T){const g=T.target;g.removeEventListener("dispose",z),I(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function S(T){const g=T.target;g.removeEventListener("dispose",S),X(g)}function I(T){const g=i.get(T);if(g.__webglInit===void 0)return;const L=T.source,J=d.get(L);if(J){const K=J[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&V(T),Object.keys(J).length===0&&d.delete(L)}i.remove(T)}function V(T){const g=i.get(T);n.deleteTexture(g.__webglTexture);const L=T.source,J=d.get(L);delete J[g.__cacheKey],a.memory.textures--}function X(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(g.__webglFramebuffer[J]))for(let K=0;K<g.__webglFramebuffer[J].length;K++)n.deleteFramebuffer(g.__webglFramebuffer[J][K]);else n.deleteFramebuffer(g.__webglFramebuffer[J]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[J])}else{if(Array.isArray(g.__webglFramebuffer))for(let J=0;J<g.__webglFramebuffer.length;J++)n.deleteFramebuffer(g.__webglFramebuffer[J]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let J=0;J<g.__webglColorRenderbuffer.length;J++)g.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[J]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=T.textures;for(let J=0,K=L.length;J<K;J++){const Et=i.get(L[J]);Et.__webglTexture&&(n.deleteTexture(Et.__webglTexture),a.memory.textures--),i.remove(L[J])}i.remove(T)}let Z=0;function at(){Z=0}function N(){return Z}function it(T){Z=T}function st(){const T=Z;return T>=r.maxTextures&&se("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+r.maxTextures),Z+=1,T}function et(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function mt(T,g){const L=i.get(T);if(T.isVideoTexture&&P(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&L.__version!==T.version){const J=T.image;if(J===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{At(L,T,g);return}}else T.isExternalTexture&&(L.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function ht(T,g){const L=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){At(L,T,g);return}else T.isExternalTexture&&(L.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function vt(T,g){const L=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){At(L,T,g);return}e.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function gt(T,g){const L=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&L.__version!==T.version){zt(L,T,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const Lt={[Fc]:n.REPEAT,[zi]:n.CLAMP_TO_EDGE,[Oc]:n.MIRRORED_REPEAT},Vt={[sn]:n.NEAREST,[o0]:n.NEAREST_MIPMAP_NEAREST,[Ba]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[Ul]:n.LINEAR_MIPMAP_NEAREST,[Lr]:n.LINEAR_MIPMAP_LINEAR},ne={[h0]:n.NEVER,[g0]:n.ALWAYS,[f0]:n.LESS,[Xu]:n.LEQUAL,[d0]:n.EQUAL,[$u]:n.GEQUAL,[p0]:n.GREATER,[m0]:n.NOTEQUAL};function re(T,g){if(g.type===pi&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===hn||g.magFilter===Ul||g.magFilter===Ba||g.magFilter===Lr||g.minFilter===hn||g.minFilter===Ul||g.minFilter===Ba||g.minFilter===Lr)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Lt[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Lt[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Lt[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Vt[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Vt[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ne[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===sn||g.minFilter!==Ba&&g.minFilter!==Lr||g.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function ie(T,g){let L=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",z));const J=g.source;let K=d.get(J);K===void 0&&(K={},d.set(J,K));const Et=et(g);if(Et!==T.__cacheKey){K[Et]===void 0&&(K[Et]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),K[Et].usedTimes++;const Q=K[T.__cacheKey];Q!==void 0&&(K[T.__cacheKey].usedTimes--,Q.usedTimes===0&&V(g)),T.__cacheKey=Et,T.__webglTexture=K[Et].texture}return L}function pt(T,g,L){return Math.floor(Math.floor(T/L)/g)}function ct(T,g,L,J){const Et=T.updateRanges;if(Et.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,L,J,g.data);else{Et.sort((Pt,It)=>Pt.start-It.start);let Q=0;for(let Pt=1;Pt<Et.length;Pt++){const It=Et[Q],Dt=Et[Pt],Jt=It.start+It.count,Qt=pt(Dt.start,g.width,4),oe=pt(It.start,g.width,4);Dt.start<=Jt+1&&Qt===oe&&pt(Dt.start+Dt.count-1,g.width,4)===Qt?It.count=Math.max(It.count,Dt.start+Dt.count-It.start):(++Q,Et[Q]=Dt)}Et.length=Q+1;const E=e.getParameter(n.UNPACK_ROW_LENGTH),O=e.getParameter(n.UNPACK_SKIP_PIXELS),_t=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Pt=0,It=Et.length;Pt<It;Pt++){const Dt=Et[Pt],Jt=Math.floor(Dt.start/4),Qt=Math.ceil(Dt.count/4),oe=Jt%g.width,Y=Math.floor(Jt/g.width),Ft=Qt,St=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),e.pixelStorei(n.UNPACK_SKIP_ROWS,Y),e.texSubImage2D(n.TEXTURE_2D,0,oe,Y,Ft,St,L,J,g.data)}T.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,E),e.pixelStorei(n.UNPACK_SKIP_PIXELS,O),e.pixelStorei(n.UNPACK_SKIP_ROWS,_t)}}function At(T,g,L){let J=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(J=n.TEXTURE_3D);const K=ie(T,g),Et=g.source;e.bindTexture(J,T.__webglTexture,n.TEXTURE0+L);const Q=i.get(Et);if(Et.version!==Q.__version||K===!0){if(e.activeTexture(n.TEXTURE0+L),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const St=_e.getPrimaries(_e.workingColorSpace),Bt=g.colorSpace===lr?null:_e.getPrimaries(g.colorSpace),Ht=g.colorSpace===lr||St===Bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht)}e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let O=m(g.image,!1,r.maxTextureSize);O=wt(g,O);const _t=s.convert(g.format,g.colorSpace),Pt=s.convert(g.type);let It=M(g.internalFormat,_t,Pt,g.normalized,g.colorSpace,g.isVideoTexture);re(J,g);let Dt;const Jt=g.mipmaps,Qt=g.isVideoTexture!==!0,oe=Q.__version===void 0||K===!0,Y=Et.dataReady,Ft=C(g,O);if(g.isDepthTexture)It=w(g.format===Ir,g.type),oe&&(Qt?e.texStorage2D(n.TEXTURE_2D,1,It,O.width,O.height):e.texImage2D(n.TEXTURE_2D,0,It,O.width,O.height,0,_t,Pt,null));else if(g.isDataTexture)if(Jt.length>0){Qt&&oe&&e.texStorage2D(n.TEXTURE_2D,Ft,It,Jt[0].width,Jt[0].height);for(let St=0,Bt=Jt.length;St<Bt;St++)Dt=Jt[St],Qt?Y&&e.texSubImage2D(n.TEXTURE_2D,St,0,0,Dt.width,Dt.height,_t,Pt,Dt.data):e.texImage2D(n.TEXTURE_2D,St,It,Dt.width,Dt.height,0,_t,Pt,Dt.data);g.generateMipmaps=!1}else Qt?(oe&&e.texStorage2D(n.TEXTURE_2D,Ft,It,O.width,O.height),Y&&ct(g,O,_t,Pt)):e.texImage2D(n.TEXTURE_2D,0,It,O.width,O.height,0,_t,Pt,O.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Qt&&oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ft,It,Jt[0].width,Jt[0].height,O.depth);for(let St=0,Bt=Jt.length;St<Bt;St++)if(Dt=Jt[St],g.format!==jn)if(_t!==null)if(Qt){if(Y)if(g.layerUpdates.size>0){const Ht=Vf(Dt.width,Dt.height,g.format,g.type);for(const bt of g.layerUpdates){const jt=Dt.data.subarray(bt*Ht/Dt.data.BYTES_PER_ELEMENT,(bt+1)*Ht/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,St,0,0,bt,Dt.width,Dt.height,1,_t,jt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,St,0,0,0,Dt.width,Dt.height,O.depth,_t,Dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,St,It,Dt.width,Dt.height,O.depth,0,Dt.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?Y&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,St,0,0,0,Dt.width,Dt.height,O.depth,_t,Pt,Dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,St,It,Dt.width,Dt.height,O.depth,0,_t,Pt,Dt.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Qt&&oe&&e.texStorage2D(n.TEXTURE_2D,Ft,It,Jt[0].width,Jt[0].height);for(let St=0,Bt=Jt.length;St<Bt;St++)Dt=Jt[St],g.format!==jn?_t!==null?Qt?Y&&e.compressedTexSubImage2D(n.TEXTURE_2D,St,0,0,Dt.width,Dt.height,_t,Dt.data):e.compressedTexImage2D(n.TEXTURE_2D,St,It,Dt.width,Dt.height,0,Dt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?Y&&e.texSubImage2D(n.TEXTURE_2D,St,0,0,Dt.width,Dt.height,_t,Pt,Dt.data):e.texImage2D(n.TEXTURE_2D,St,It,Dt.width,Dt.height,0,_t,Pt,Dt.data)}else if(g.isDataArrayTexture)if(Qt){if(oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ft,It,O.width,O.height,O.depth),Y)if(g.layerUpdates.size>0){const St=Vf(O.width,O.height,g.format,g.type);for(const Bt of g.layerUpdates){const Ht=O.data.subarray(Bt*St/O.data.BYTES_PER_ELEMENT,(Bt+1)*St/O.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Bt,O.width,O.height,1,_t,Pt,Ht)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,_t,Pt,O.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,O.width,O.height,O.depth,0,_t,Pt,O.data);else if(g.isData3DTexture)Qt?(oe&&e.texStorage3D(n.TEXTURE_3D,Ft,It,O.width,O.height,O.depth),Y&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,_t,Pt,O.data)):e.texImage3D(n.TEXTURE_3D,0,It,O.width,O.height,O.depth,0,_t,Pt,O.data);else if(g.isFramebufferTexture){if(oe)if(Qt)e.texStorage2D(n.TEXTURE_2D,Ft,It,O.width,O.height);else{let St=O.width,Bt=O.height;for(let Ht=0;Ht<Ft;Ht++)e.texImage2D(n.TEXTURE_2D,Ht,It,St,Bt,0,_t,Pt,null),St>>=1,Bt>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const St=n.canvas;if(St.hasAttribute("layoutsubtree")||St.setAttribute("layoutsubtree","true"),O.parentNode!==St){St.appendChild(O),f.add(g),St.onpaint=Bt=>{const Ht=Bt.changedElements;for(const bt of f)Ht.includes(bt.image)&&(bt.needsUpdate=!0)},St.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,O);else{const Ht=n.RGBA,bt=n.RGBA,jt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ht,bt,jt,O)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Jt.length>0){if(Qt&&oe){const St=Ct(Jt[0]);e.texStorage2D(n.TEXTURE_2D,Ft,It,St.width,St.height)}for(let St=0,Bt=Jt.length;St<Bt;St++)Dt=Jt[St],Qt?Y&&e.texSubImage2D(n.TEXTURE_2D,St,0,0,_t,Pt,Dt):e.texImage2D(n.TEXTURE_2D,St,It,_t,Pt,Dt);g.generateMipmaps=!1}else if(Qt){if(oe){const St=Ct(O);e.texStorage2D(n.TEXTURE_2D,Ft,It,St.width,St.height)}Y&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Pt,O)}else e.texImage2D(n.TEXTURE_2D,0,It,_t,Pt,O);p(g)&&A(J),Q.__version=Et.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function zt(T,g,L){if(g.image.length!==6)return;const J=ie(T,g),K=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+L);const Et=i.get(K);if(K.version!==Et.__version||J===!0){e.activeTexture(n.TEXTURE0+L);const Q=_e.getPrimaries(_e.workingColorSpace),E=g.colorSpace===lr?null:_e.getPrimaries(g.colorSpace),O=g.colorSpace===lr||Q===E?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);const _t=g.isCompressedTexture||g.image[0].isCompressedTexture,Pt=g.image[0]&&g.image[0].isDataTexture,It=[];for(let bt=0;bt<6;bt++)!_t&&!Pt?It[bt]=m(g.image[bt],!0,r.maxCubemapSize):It[bt]=Pt?g.image[bt].image:g.image[bt],It[bt]=wt(g,It[bt]);const Dt=It[0],Jt=s.convert(g.format,g.colorSpace),Qt=s.convert(g.type),oe=M(g.internalFormat,Jt,Qt,g.normalized,g.colorSpace),Y=g.isVideoTexture!==!0,Ft=Et.__version===void 0||J===!0,St=K.dataReady;let Bt=C(g,Dt);re(n.TEXTURE_CUBE_MAP,g);let Ht;if(_t){Y&&Ft&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Bt,oe,Dt.width,Dt.height);for(let bt=0;bt<6;bt++){Ht=It[bt].mipmaps;for(let jt=0;jt<Ht.length;jt++){const Zt=Ht[jt];g.format!==jn?Jt!==null?Y?St&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,jt,0,0,Zt.width,Zt.height,Jt,Zt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,jt,oe,Zt.width,Zt.height,0,Zt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,jt,0,0,Zt.width,Zt.height,Jt,Qt,Zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,jt,oe,Zt.width,Zt.height,0,Jt,Qt,Zt.data)}}}else{if(Ht=g.mipmaps,Y&&Ft){Ht.length>0&&Bt++;const bt=Ct(It[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Bt,oe,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Pt){Y?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,It[bt].width,It[bt].height,Jt,Qt,It[bt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,oe,It[bt].width,It[bt].height,0,Jt,Qt,It[bt].data);for(let jt=0;jt<Ht.length;jt++){const Pe=Ht[jt].image[bt].image;Y?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,jt+1,0,0,Pe.width,Pe.height,Jt,Qt,Pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,jt+1,oe,Pe.width,Pe.height,0,Jt,Qt,Pe.data)}}else{Y?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Jt,Qt,It[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,oe,Jt,Qt,It[bt]);for(let jt=0;jt<Ht.length;jt++){const Zt=Ht[jt];Y?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,jt+1,0,0,Jt,Qt,Zt.image[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,jt+1,oe,Jt,Qt,Zt.image[bt])}}}p(g)&&A(n.TEXTURE_CUBE_MAP),Et.__version=K.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Nt(T,g,L,J,K,Et){const Q=s.convert(L.format,L.colorSpace),E=s.convert(L.type),O=M(L.internalFormat,Q,E,L.normalized,L.colorSpace),_t=i.get(g),Pt=i.get(L);if(Pt.__renderTarget=g,!_t.__hasExternalTextures){const It=Math.max(1,g.width>>Et),Dt=Math.max(1,g.height>>Et);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,Et,O,It,Dt,g.depth,0,Q,E,null):e.texImage2D(K,Et,O,It,Dt,0,Q,E,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),Tt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,K,Pt.__webglTexture,0,rt(g)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,K,Pt.__webglTexture,Et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function R(T,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){const J=g.depthTexture,K=J&&J.isDepthTexture?J.type:null,Et=w(g.stencilBuffer,K),Q=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Tt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt(g),Et,g.width,g.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt(g),Et,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Et,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,T)}else{const J=g.textures;for(let K=0;K<J.length;K++){const Et=J[K],Q=s.convert(Et.format,Et.colorSpace),E=s.convert(Et.type),O=M(Et.internalFormat,Q,E,Et.normalized,Et.colorSpace);Tt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt(g),O,g.width,g.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt(g),O,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,O,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function B(T,g,L){const J=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(g.depthTexture);if(K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),J){if(K.__webglInit===void 0&&(K.__webglInit=!0,g.depthTexture.addEventListener("dispose",z)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),re(n.TEXTURE_CUBE_MAP,g.depthTexture);const _t=s.convert(g.depthTexture.format),Pt=s.convert(g.depthTexture.type);let It;g.depthTexture.format===Ki?It=n.DEPTH_COMPONENT24:g.depthTexture.format===Ir&&(It=n.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,It,g.width,g.height,0,_t,Pt,null)}}else mt(g.depthTexture,0);const Et=K.__webglTexture,Q=rt(g),E=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+L:n.TEXTURE_2D,O=g.depthTexture.format===Ir?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Ki)Tt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,E,Et,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,O,E,Et,0);else if(g.depthTexture.format===Ir)Tt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,E,Et,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,O,E,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function F(T){const g=i.get(T),L=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const J=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),J){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,J.removeEventListener("dispose",K)};J.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=J}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(L)for(let J=0;J<6;J++)B(g.__webglFramebuffer[J],T,J);else{const J=T.texture.mipmaps;J&&J.length>0?B(g.__webglFramebuffer[0],T,0):B(g.__webglFramebuffer,T,0)}else if(L){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]===void 0)g.__webglDepthbuffer[J]=n.createRenderbuffer(),R(g.__webglDepthbuffer[J],T,!1);else{const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=g.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Et),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Et)}}else{const J=T.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),R(g.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Et),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Et)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function W(T,g,L){const J=i.get(T);g!==void 0&&Nt(J.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&F(T)}function G(T){const g=T.texture,L=i.get(T),J=i.get(g);T.addEventListener("dispose",S);const K=T.textures,Et=T.isWebGLCubeRenderTarget===!0,Q=K.length>1;if(Q||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=g.version,a.memory.textures++),Et){L.__webglFramebuffer=[];for(let E=0;E<6;E++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[E]=[];for(let O=0;O<g.mipmaps.length;O++)L.__webglFramebuffer[E][O]=n.createFramebuffer()}else L.__webglFramebuffer[E]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let E=0;E<g.mipmaps.length;E++)L.__webglFramebuffer[E]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(Q)for(let E=0,O=K.length;E<O;E++){const _t=i.get(K[E]);_t.__webglTexture===void 0&&(_t.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Tt(T)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let E=0;E<K.length;E++){const O=K[E];L.__webglColorRenderbuffer[E]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[E]);const _t=s.convert(O.format,O.colorSpace),Pt=s.convert(O.type),It=M(O.internalFormat,_t,Pt,O.normalized,O.colorSpace,T.isXRRenderTarget===!0),Dt=rt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,It,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+E,n.RENDERBUFFER,L.__webglColorRenderbuffer[E])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),R(L.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Et){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),re(n.TEXTURE_CUBE_MAP,g);for(let E=0;E<6;E++)if(g.mipmaps&&g.mipmaps.length>0)for(let O=0;O<g.mipmaps.length;O++)Nt(L.__webglFramebuffer[E][O],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+E,O);else Nt(L.__webglFramebuffer[E],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+E,0);p(g)&&A(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){for(let E=0,O=K.length;E<O;E++){const _t=K[E],Pt=i.get(_t);let It=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(It=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(It,Pt.__webglTexture),re(It,_t),Nt(L.__webglFramebuffer,T,_t,n.COLOR_ATTACHMENT0+E,It,0),p(_t)&&A(It)}e.unbindTexture()}else{let E=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(E=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(E,J.__webglTexture),re(E,g),g.mipmaps&&g.mipmaps.length>0)for(let O=0;O<g.mipmaps.length;O++)Nt(L.__webglFramebuffer[O],T,g,n.COLOR_ATTACHMENT0,E,O);else Nt(L.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,E,0);p(g)&&A(E),e.unbindTexture()}T.depthBuffer&&F(T)}function k(T){const g=T.textures;for(let L=0,J=g.length;L<J;L++){const K=g[L];if(p(K)){const Et=D(T),Q=i.get(K).__webglTexture;e.bindTexture(Et,Q),A(Et),e.unbindTexture()}}}const nt=[],ft=[];function ut(T){if(T.samples>0){if(Tt(T)===!1){const g=T.textures,L=T.width,J=T.height;let K=n.COLOR_BUFFER_BIT;const Et=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=i.get(T),E=g.length>1;if(E)for(let _t=0;_t<g.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer);const O=T.texture.mipmaps;O&&O.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let _t=0;_t<g.length;_t++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),E){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Q.__webglColorRenderbuffer[_t]);const Pt=i.get(g[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pt,0)}n.blitFramebuffer(0,0,L,J,0,0,L,J,K,n.NEAREST),l===!0&&(nt.length=0,ft.length=0,nt.push(n.COLOR_ATTACHMENT0+_t),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(nt.push(Et),ft.push(Et),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ft)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),E)for(let _t=0;_t<g.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,Q.__webglColorRenderbuffer[_t]);const Pt=i.get(g[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function rt(T){return Math.min(r.maxSamples,T.samples)}function Tt(T){const g=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function P(T){const g=a.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function wt(T,g){const L=T.colorSpace,J=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||L!==Bo&&L!==lr&&(_e.getTransfer(L)===Ce?(J!==jn||K!==Ln)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xe("WebGLTextures: Unsupported texture color space:",L)),g}function Ct(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=st,this.resetTextureUnits=at,this.getTextureUnits=N,this.setTextureUnits=it,this.setTexture2D=mt,this.setTexture2DArray=ht,this.setTexture3D=vt,this.setTextureCube=gt,this.rebindTextures=W,this.setupRenderTarget=G,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function UE(n,t){function e(i,r=lr){let s;const a=_e.getTransfer(r);if(i===Ln)return n.UNSIGNED_BYTE;if(i===Vu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vp)return n.BYTE;if(i===Hp)return n.SHORT;if(i===ca)return n.UNSIGNED_SHORT;if(i===zu)return n.INT;if(i===Si)return n.UNSIGNED_INT;if(i===pi)return n.FLOAT;if(i===Mi)return n.HALF_FLOAT;if(i===Wp)return n.ALPHA;if(i===Xp)return n.RGB;if(i===jn)return n.RGBA;if(i===Ki)return n.DEPTH_COMPONENT;if(i===Ir)return n.DEPTH_STENCIL;if(i===$p)return n.RED;if(i===ku)return n.RED_INTEGER;if(i===Br)return n.RG;if(i===Gu)return n.RG_INTEGER;if(i===Wu)return n.RGBA_INTEGER;if(i===So||i===Mo||i===yo||i===bo)if(a===Ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===So)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===So)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bc||i===zc||i===Vc||i===Hc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kc||i===Gc||i===Wc||i===Xc||i===$c||i===Fo||i===qc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===kc||i===Gc)return a===Ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wc)return a===Ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xc)return s.COMPRESSED_R11_EAC;if(i===$c)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Fo)return s.COMPRESSED_RG11_EAC;if(i===qc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yc||i===Kc||i===Zc||i===Jc||i===jc||i===Qc||i===tu||i===eu||i===nu||i===iu||i===ru||i===su||i===au||i===ou)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yc)return a===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kc)return a===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zc)return a===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jc)return a===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jc)return a===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qc)return a===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tu)return a===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eu)return a===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nu)return a===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===iu)return a===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ru)return a===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===su)return a===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===au)return a===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ou)return a===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lu||i===cu||i===uu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===lu)return a===Ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hu||i===fu||i===Oo||i===du)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===hu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===du)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ua?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const NE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FE=`
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

}`;class OE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Qp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new yi({vertexShader:NE,fragmentShader:FE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Un(new ol(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BE extends mr{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const y=typeof XRWebGLBinding<"u",m=new OE,p={},A=e.getContextAttributes();let D=null,M=null;const w=[],C=[],z=new Ut;let S=null,I=null;const V=new Jn;V.viewport=new Ve;const X=new Jn;X.viewport=new Ve;const Z=[V,X],at=new Wx;let N=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pt){let ct=w[pt];return ct===void 0&&(ct=new kl,w[pt]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(pt){let ct=w[pt];return ct===void 0&&(ct=new kl,w[pt]=ct),ct.getGripSpace()},this.getHand=function(pt){let ct=w[pt];return ct===void 0&&(ct=new kl,w[pt]=ct),ct.getHandSpace()};function st(pt){const ct=C.indexOf(pt.inputSource);if(ct===-1)return;const At=w[ct];At!==void 0&&(At.update(pt.inputSource,pt.frame,c||a),At.dispatchEvent({type:pt.type,data:pt.inputSource}))}function et(){r.removeEventListener("select",st),r.removeEventListener("selectstart",st),r.removeEventListener("selectend",st),r.removeEventListener("squeeze",st),r.removeEventListener("squeezestart",st),r.removeEventListener("squeezeend",st),r.removeEventListener("end",et),r.removeEventListener("inputsourceschange",mt);for(let pt=0;pt<w.length;pt++){const ct=C[pt];ct!==null&&(C[pt]=null,w[pt].disconnect(ct))}N=null,it=null,m.reset();for(const pt in p)delete p[pt];if(t.setRenderTarget(D),d=null,h=null,f=null,r=null,M=null,ie.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(z.width,z.height,!1),I!==null){const pt=I.camera;pt.fov=I.fov,pt.zoom=I.zoom,pt.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pt){s=pt,i.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pt){o=pt,i.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(pt){c=pt},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(pt){if(r=pt,r!==null){if(D=t.getRenderTarget(),r.addEventListener("select",st),r.addEventListener("selectstart",st),r.addEventListener("selectend",st),r.addEventListener("squeeze",st),r.addEventListener("squeezestart",st),r.addEventListener("squeezeend",st),r.addEventListener("end",et),r.addEventListener("inputsourceschange",mt),A.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(z),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,zt=null,Nt=null;A.depth&&(Nt=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=A.stencil?Ir:Ki,zt=A.stencil?ua:Si);const R={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(R),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new ei(h.textureWidth,h.textureHeight,{format:jn,type:Ln,depthTexture:new fa(h.textureWidth,h.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const At={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,At),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ei(d.framebufferWidth,d.framebufferHeight,{format:jn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function mt(pt){for(let ct=0;ct<pt.removed.length;ct++){const At=pt.removed[ct],zt=C.indexOf(At);zt>=0&&(C[zt]=null,w[zt].disconnect(At))}for(let ct=0;ct<pt.added.length;ct++){const At=pt.added[ct];let zt=C.indexOf(At);if(zt===-1){for(let R=0;R<w.length;R++)if(R>=C.length){C.push(At),zt=R;break}else if(C[R]===null){C[R]=At,zt=R;break}if(zt===-1)break}const Nt=w[zt];Nt&&Nt.connect(At)}}const ht=new q,vt=new q;function gt(pt,ct,At){ht.setFromMatrixPosition(ct.matrixWorld),vt.setFromMatrixPosition(At.matrixWorld);const zt=ht.distanceTo(vt),Nt=ct.projectionMatrix.elements,R=At.projectionMatrix.elements,B=Nt[14]/(Nt[10]-1),F=Nt[14]/(Nt[10]+1),W=(Nt[9]+1)/Nt[5],G=(Nt[9]-1)/Nt[5],k=(Nt[8]-1)/Nt[0],nt=(R[8]+1)/R[0],ft=B*k,ut=B*nt,rt=zt/(-k+nt),Tt=rt*-k;if(ct.matrixWorld.decompose(pt.position,pt.quaternion,pt.scale),pt.translateX(Tt),pt.translateZ(rt),pt.matrixWorld.compose(pt.position,pt.quaternion,pt.scale),pt.matrixWorldInverse.copy(pt.matrixWorld).invert(),Nt[10]===-1)pt.projectionMatrix.copy(ct.projectionMatrix),pt.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const P=B+rt,wt=F+rt,Ct=ft-Tt,T=ut+(zt-Tt),g=W*F/wt*P,L=G*F/wt*P;pt.projectionMatrix.makePerspective(Ct,T,g,L,P,wt),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert()}}function Lt(pt,ct){ct===null?pt.matrixWorld.copy(pt.matrix):pt.matrixWorld.multiplyMatrices(ct.matrixWorld,pt.matrix),pt.matrixWorldInverse.copy(pt.matrixWorld).invert()}this.updateCamera=function(pt){if(r===null)return;let ct=pt.near,At=pt.far;m.texture!==null&&(m.depthNear>0&&(ct=m.depthNear),m.depthFar>0&&(At=m.depthFar)),at.near=X.near=V.near=ct,at.far=X.far=V.far=At,(N!==at.near||it!==at.far)&&(r.updateRenderState({depthNear:at.near,depthFar:at.far}),N=at.near,it=at.far),at.layers.mask=pt.layers.mask|6,V.layers.mask=at.layers.mask&-5,X.layers.mask=at.layers.mask&-3;const zt=pt.parent,Nt=at.cameras;Lt(at,zt);for(let R=0;R<Nt.length;R++)Lt(Nt[R],zt);Nt.length===2?gt(at,V,X):at.projectionMatrix.copy(V.projectionMatrix),I===null&&pt.isPerspectiveCamera&&(I={camera:pt,fov:pt.fov,zoom:pt.zoom}),Vt(pt,at,zt)};function Vt(pt,ct,At){At===null?pt.matrix.copy(ct.matrixWorld):(pt.matrix.copy(At.matrixWorld),pt.matrix.invert(),pt.matrix.multiply(ct.matrixWorld)),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.updateMatrixWorld(!0),pt.projectionMatrix.copy(ct.projectionMatrix),pt.projectionMatrixInverse.copy(ct.projectionMatrixInverse),pt.isPerspectiveCamera&&(pt.fov=mu*2*Math.atan(1/pt.projectionMatrix.elements[5]),pt.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(pt){l=pt,h!==null&&(h.fixedFoveation=pt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=pt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(at)},this.getCameraTexture=function(pt){return p[pt]};let ne=null;function re(pt,ct){if(u=ct.getViewerPose(c||a),_=ct,u!==null){const At=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let zt=!1;At.length!==at.cameras.length&&(at.cameras.length=0,zt=!0);for(let F=0;F<At.length;F++){const W=At[F];let G=null;if(d!==null)G=d.getViewport(W);else{const nt=f.getViewSubImage(h,W);G=nt.viewport,F===0&&(t.setRenderTargetTextures(M,nt.colorTexture,nt.depthStencilTexture),t.setRenderTarget(M))}let k=Z[F];k===void 0&&(k=new Jn,k.layers.enable(F),k.viewport=new Ve,Z[F]=k),k.matrix.fromArray(W.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(W.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(G.x,G.y,G.width,G.height),F===0&&(at.matrix.copy(k.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),zt===!0&&at.cameras.push(k)}const Nt=r.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const F=f.getDepthInformation(At[0]);F&&F.isValid&&F.texture&&m.init(F,r.renderState)}if(Nt&&Nt.includes("camera-access")&&y){t.state.unbindTexture(),f=i.getBinding();for(let F=0;F<At.length;F++){const W=At[F].camera;if(W){let G=p[W];G||(G=new Qp,p[W]=G);const k=f.getCameraImage(W);G.sourceTexture=k}}}}for(let At=0;At<w.length;At++){const zt=C[At],Nt=w[At];zt!==null&&Nt!==void 0&&Nt.update(zt,ct,c||a)}ne&&ne(pt,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),_=null}const ie=new fm;ie.setAnimationLoop(re),this.setAnimationLoop=function(pt){ne=pt},this.dispose=function(){}}}const zE=new Oe,xm=new ce;xm.set(-1,0,0,0,1,0,0,0,1);function VE(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,lm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,D,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,A,D):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=t.get(p),D=A.envMap,M=A.envMapRotation;D&&(m.envMap.value=D,m.envMapRotation.value.setFromMatrix4(zE.makeRotationFromEuler(M)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(xm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,D){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=D*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const A=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function HE(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){const C=w.program;i.uniformBlockBinding(M,C)}function c(M,w){let C=r[M.id];C===void 0&&(m(M),C=u(M),r[M.id]=C,M.addEventListener("dispose",A));const z=w.program;i.updateUBOMapping(M,z);const S=t.render.frame;s[M.id]!==S&&(h(M),s[M.id]=S)}function u(M){const w=f();M.__bindingPointIndex=w;const C=n.createBuffer(),z=M.__size,S=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,z,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,C),C}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const w=r[M.id],C=M.uniforms,z=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let S=0,I=C.length;S<I;S++){const V=C[S];if(Array.isArray(V))for(let X=0,Z=V.length;X<Z;X++)d(V[X],S,X,z);else d(V,S,0,z)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,w,C,z){if(y(M,w,C,z)===!0){const S=M.__offset,I=M.value;if(Array.isArray(I)){let V=0;for(let X=0;X<I.length;X++){const Z=I[X],at=p(Z);_(Z,M.__data,V),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(V+=at.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(I,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,M.__data)}}function _(M,w,C){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,C)}function y(M,w,C,z){const S=M.value,I=w+"_"+C;if(z[I]===void 0)return typeof S=="number"||typeof S=="boolean"?z[I]=S:ArrayBuffer.isView(S)?z[I]=S.slice():z[I]=S.clone(),!0;{const V=z[I];if(typeof S=="number"||typeof S=="boolean"){if(V!==S)return z[I]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(V.equals(S)===!1)return V.copy(S),!0}}return!1}function m(M){const w=M.uniforms;let C=0;const z=16;for(let I=0,V=w.length;I<V;I++){const X=Array.isArray(w[I])?w[I]:[w[I]];for(let Z=0,at=X.length;Z<at;Z++){const N=X[Z],it=Array.isArray(N.value)?N.value:[N.value];for(let st=0,et=it.length;st<et;st++){const mt=it[st],ht=p(mt),vt=C%z,gt=vt%ht.boundary,Lt=vt+gt;C+=gt,Lt!==0&&z-Lt<ht.storage&&(C+=z-Lt),N.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=C,C+=ht.storage}}}const S=C%z;return S>0&&(C+=z-S),M.__size=C,M.__cache={},this}function p(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):se("WebGLRenderer: Unsupported uniform value type.",M),w}function A(M){const w=M.target;w.removeEventListener("dispose",A);const C=a.indexOf(w.__bindingPointIndex);a.splice(C,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function D(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:D}}const kE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function GE(){return oi===null&&(oi=new X0(kE,16,16,Br,Mi),oi.name="DFG_LUT",oi.minFilter=hn,oi.magFilter=hn,oi.wrapS=zi,oi.wrapT=zi,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class WE{constructor(t={}){const{canvas:e=x0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Ln}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const y=d,m=new Set([Wu,Gu,ku]),p=new Set([Ln,Si,ca,ua,Vu,Hu]),A=new Uint32Array(4),D=new Int32Array(4),M=new q;let w=null,C=null;const z=[],S=[];let I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let X=!1,Z=null,at=null,N=null,it=null;this._outputColorSpace=Vn;let st=0,et=0,mt=null,ht=-1,vt=null;const gt=new Ve,Lt=new Ve;let Vt=null;const ne=new ve(0);let re=0,ie=e.width,pt=e.height,ct=1,At=null,zt=null;const Nt=new Ve(0,0,ie,pt),R=new Ve(0,0,ie,pt);let B=!1;const F=new Ku;let W=!1,G=!1;const k=new Oe,nt=new q,ft=new Ve,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Tt(){return mt===null?ct:1}let P=i;function wt(b,$){return e.getContext(b,$)}let Ct,T,g,L,J,K,Et,Q,E,O,_t,Pt,It,Dt,Jt,Qt,oe,Y,Ft,St,Bt,Ht,bt;try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bu}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",pn,!1),P===null){const $="webgl2";if(P=wt($,b),P===null)throw wt($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}jt()}catch(b){throw e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),xe("WebGLRenderer: "+b.message),b}function jt(){Ct=new Gy(P),Ct.init(),Bt=new UE(P,Ct),T=new Iy(P,Ct,t,Bt),g=new LE(P,Ct),T.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),at=P.createFramebuffer(),N=P.createFramebuffer(),it=P.createFramebuffer(),L=new $y(P),J=new vE,K=new IE(P,Ct,g,J,T,Bt,L),Et=new ky(V),Q=new Yx(P),Ht=new Dy(P,Q),E=new Wy(P,Q,L,Ht),O=new Yy(P,E,Q,Ht,L),Y=new qy(P,T,K),Jt=new Uy(J),_t=new _E(V,Et,Ct,T,Ht,Jt),Pt=new VE(V,J),It=new SE,Dt=new AE(Ct),oe=new Py(V,Et,g,O,_,l),Qt=new DE(V,O,T),bt=new HE(P,L,T,g),Ft=new Ly(P,Ct,L),St=new Xy(P,Ct,L),L.programs=_t.programs,V.capabilities=T,V.extensions=Ct,V.properties=J,V.renderLists=It,V.shadowMap=Qt,V.state=g,V.info=L}y!==Ln&&(I=new Zy(y,e.width,e.height,o,r,s));const Zt=new BE(V,P);this.xr=Zt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=Ct.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ct.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(b){b!==void 0&&(ct=b,this.setSize(ie,pt,!1))},this.getSize=function(b){return b.set(ie,pt)},this.setSize=function(b,$,dt=!0){if(Zt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=b,pt=$,e.width=Math.floor(b*ct),e.height=Math.floor($*ct),dt===!0&&(e.style.width=b+"px",e.style.height=$+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,b,$)},this.getDrawingBufferSize=function(b){return b.set(ie*ct,pt*ct).floor()},this.setDrawingBufferSize=function(b,$,dt){ie=b,pt=$,ct=dt,e.width=Math.floor(b*dt),e.height=Math.floor($*dt),this.setViewport(0,0,b,$)},this.setEffects=function(b){if(y===Ln){xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let $=0;$<b.length;$++)if(b[$].isOutputPass===!0){se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(gt)},this.getViewport=function(b){return b.copy(Nt)},this.setViewport=function(b,$,dt,lt){b.isVector4?Nt.set(b.x,b.y,b.z,b.w):Nt.set(b,$,dt,lt),g.viewport(gt.copy(Nt).multiplyScalar(ct).round())},this.getScissor=function(b){return b.copy(R)},this.setScissor=function(b,$,dt,lt){b.isVector4?R.set(b.x,b.y,b.z,b.w):R.set(b,$,dt,lt),g.scissor(Lt.copy(R).multiplyScalar(ct).round())},this.getScissorTest=function(){return B},this.setScissorTest=function(b){g.setScissorTest(B=b)},this.setOpaqueSort=function(b){At=b},this.setTransparentSort=function(b){zt=b},this.getClearColor=function(b){return b.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(b=!0,$=!0,dt=!0){let lt=0;if(b){let ot=!1;if(mt!==null){const kt=mt.texture.format;ot=m.has(kt)}if(ot){const kt=mt.texture.type,$t=p.has(kt),Ot=oe.getClearColor(),Yt=oe.getClearAlpha(),Xt=Ot.r,he=Ot.g,de=Ot.b;$t?(A[0]=Xt,A[1]=he,A[2]=de,A[3]=Yt,P.clearBufferuiv(P.COLOR,0,A)):(D[0]=Xt,D[1]=he,D[2]=de,D[3]=Yt,P.clearBufferiv(P.COLOR,0,D))}else lt|=P.COLOR_BUFFER_BIT}$&&(lt|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),dt&&(lt|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),lt!==0&&P.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),Z=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),oe.dispose(),It.dispose(),Dt.dispose(),J.dispose(),Et.dispose(),O.dispose(),Ht.dispose(),bt.dispose(),_t.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",ya),Zt.removeEventListener("sessionend",gr),Ei.stop()};function Pe(b){b.preventDefault(),af("WebGLRenderer: Context Lost."),X=!0}function me(){af("WebGLRenderer: Context Restored."),X=!1;const b=L.autoReset,$=Qt.enabled,dt=Qt.autoUpdate,lt=Qt.needsUpdate,ot=Qt.type;jt(),L.autoReset=b,Qt.enabled=$,Qt.autoUpdate=dt,Qt.needsUpdate=lt,Qt.type=ot}function pn(b){xe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Nn(b){const $=b.target;$.removeEventListener("dispose",Nn),fl($)}function fl(b){dl(b),J.remove(b)}function dl(b){const $=J.get(b).programs;$!==void 0&&($.forEach(function(dt){_t.releaseProgram(dt)}),b.isShaderMaterial&&_t.releaseShaderCache(b))}this.renderBufferDirect=function(b,$,dt,lt,ot,kt){$===null&&($=ut);const $t=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Ot=ml(b,$,dt,lt,ot);g.setMaterial(lt,$t);let Yt=dt.index,Xt=1;if(lt.wireframe===!0){if(Yt=E.getWireframeAttribute(dt),Yt===void 0)return;Xt=2}const he=dt.drawRange,de=dt.attributes.position;let Kt=he.start*Xt,Me=(he.start+he.count)*Xt;kt!==null&&(Kt=Math.max(Kt,kt.start*Xt),Me=Math.min(Me,(kt.start+kt.count)*Xt)),Yt!==null?(Kt=Math.max(Kt,0),Me=Math.min(Me,Yt.count)):de!=null&&(Kt=Math.max(Kt,0),Me=Math.min(Me,de.count));const Be=Me-Kt;if(Be<0||Be===1/0)return;Ht.setup(ot,lt,Ot,dt,Yt);let Ue,Ae=Ft;if(Yt!==null&&(Ue=Q.get(Yt),Ae=St,Ae.setIndex(Ue)),ot.isMesh)lt.wireframe===!0?(g.setLineWidth(lt.wireframeLinewidth*Tt()),Ae.setMode(P.LINES)):Ae.setMode(P.TRIANGLES);else if(ot.isLine){let je=lt.linewidth;je===void 0&&(je=1),g.setLineWidth(je*Tt()),ot.isLineSegments?Ae.setMode(P.LINES):ot.isLineLoop?Ae.setMode(P.LINE_LOOP):Ae.setMode(P.LINE_STRIP)}else ot.isPoints?Ae.setMode(P.POINTS):ot.isSprite&&Ae.setMode(P.TRIANGLES);if(ot.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Ae.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{const je=ot._multiDrawStarts,qt=ot._multiDrawCounts,tn=ot._multiDrawCount,ge=Yt?Q.get(Yt).bytesPerElement:1,bn=J.get(lt).currentProgram.getUniforms();for(let Fn=0;Fn<tn;Fn++)bn.setValue(P,"_gl_DrawID",Fn),Ae.render(je[Fn]/ge,qt[Fn])}else if(ot.isInstancedMesh)Ae.renderInstances(Kt,Be,ot.count);else if(dt.isInstancedBufferGeometry){const je=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,qt=Math.min(dt.instanceCount,je);Ae.renderInstances(Kt,Be,qt)}else Ae.render(Kt,Be)};function Ms(b,$,dt,lt){Z!==null&&b.isNodeMaterial&&Z.setObject(lt,b),W===!0&&Jt.setState(b,dt,!1),b.transparent===!0&&b.side===di&&b.forceSinglePass===!1?(b.side=Cn,b.needsUpdate=!0,Je(b,$,lt),b.side=Fr,b.needsUpdate=!0,Je(b,$,lt),b.side=di):Je(b,$,lt)}this.compile=function(b,$,dt=null){dt===null&&(dt=b),Z!==null&&Z.renderStart(b,$,dt),C=Dt.get(dt),C.init($),S.push(C),dt.traverseVisible(function(ot){ot.isLight&&ot.layers.test($.layers)&&(C.pushLight(ot),ot.castShadow&&C.pushShadow(ot))}),b!==dt&&b.traverseVisible(function(ot){ot.isLight&&ot.layers.test($.layers)&&(C.pushLight(ot),ot.castShadow&&C.pushShadow(ot))}),C.setupLights(),Z!==null&&Z.updateLights(C.state.lightsArray),G=this.localClippingEnabled,W=Jt.init(this.clippingPlanes,G),W===!0&&Jt.setGlobalState(this.clippingPlanes,$),Z!==null&&Qt.render(C.state.shadowsArray,dt,$);const lt=new Set;return b.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;const kt=ot.material;if(kt)if(Array.isArray(kt))for(let $t=0;$t<kt.length;$t++){const Ot=kt[$t];Ms(Ot,dt,$,ot),lt.add(Ot)}else Ms(kt,dt,$,ot),lt.add(kt)}),C=S.pop(),Z!==null&&Z.renderEnd(),lt},this.compileAsync=function(b,$,dt=null){const lt=this.compile(b,$,dt);return new Promise(ot=>{function kt(){if(lt.forEach(function($t){const Yt=J.get($t).currentProgram;(Yt===void 0||Yt.isReady())&&lt.delete($t)}),lt.size===0){ot(b);return}setTimeout(kt,10)}Ct.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let ys=null;function pl(b){ys&&ys(b)}function ya(){Ei.stop()}function gr(){Ei.start()}const Ei=new fm;Ei.setAnimationLoop(pl),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(b){ys=b,Zt.setAnimationLoop(b),b===null?Ei.stop():Ei.start()},Zt.addEventListener("sessionstart",ya),Zt.addEventListener("sessionend",gr),this.render=function(b,$){if($!==void 0&&$.isCamera!==!0){xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;Z!==null&&Z.renderStart(b,$);const dt=Zt.enabled===!0&&Zt.isPresenting===!0,lt=I!==null&&(mt===null||dt)&&I.begin(V,mt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera($),$=Zt.getCamera()),b.isScene===!0&&b.onBeforeRender(V,b,$,mt),C=Dt.get(b,S.length),C.init($),C.state.textureUnits=K.getTextureUnits(),S.push(C),k.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),F.setFromProjectionMatrix(k,mi,$.reversedDepth),G=this.localClippingEnabled,W=Jt.init(this.clippingPlanes,G),w=It.get(b,z.length),w.init(),z.push(w),Zt.enabled===!0&&Zt.isPresenting===!0){const $t=V.xr.getDepthSensingMesh();$t!==null&&bs($t,$,-1/0,V.sortObjects)}bs(b,$,0,V.sortObjects),w.finish(),Z!==null&&Z.updateLights(C.state.lightsArray),V.sortObjects===!0&&w.sort(At,zt),rt=Zt.enabled===!1||Zt.isPresenting===!1||Zt.hasDepthSensing()===!1,rt&&oe.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),W===!0&&Jt.beginShadows();const ot=C.state.shadowsArray;if(Qt.render(ot,b,$),W===!0&&Jt.endShadows(),(lt&&I.hasRenderPass())===!1){const $t=w.opaque,Ot=w.transmissive;if(C.setupLights(),$.isArrayCamera){const Yt=$.cameras;if(Ot.length>0)for(let Xt=0,he=Yt.length;Xt<he;Xt++){const de=Yt[Xt];Es($t,Ot,b,de)}rt&&oe.render(b);for(let Xt=0,he=Yt.length;Xt<he;Xt++){const de=Yt[Xt];_r(w,b,de,de.viewport)}}else Ot.length>0&&Es($t,Ot,b,$),rt&&oe.render(b),_r(w,b,$)}mt!==null&&et===0&&(K.updateMultisampleRenderTarget(mt),K.updateRenderTargetMipmap(mt)),lt&&I.end(V),b.isScene===!0&&b.onAfterRender(V,b,$),Ht.resetDefaultState(),ht=-1,vt=null,S.pop(),S.length>0?(C=S[S.length-1],K.setTextureUnits(C.state.textureUnits),W===!0&&Jt.setGlobalState(V.clippingPlanes,C.state.camera)):C=null,z.pop(),z.length>0?w=z[z.length-1]:w=null,Z!==null&&Z.renderEnd()};function bs(b,$,dt,lt){if(b.visible===!1)return;if(b.layers.test($.layers)){if(b.isGroup)dt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update($);else if(b.isLightProbeGrid)C.pushLightProbeGrid(b);else if(b.isLight)C.pushLight(b),b.castShadow&&C.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(F)){lt&&ft.setFromMatrixPosition(b.matrixWorld).applyMatrix4(k);const $t=O.update(b),Ot=b.material;Ot.visible&&w.push(b,$t,Ot,dt,ft.z,null,$)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(F))){const $t=O.update(b),Ot=b.material;if(lt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ft.copy(b.boundingSphere.center)):($t.boundingSphere===null&&$t.computeBoundingSphere(),ft.copy($t.boundingSphere.center)),ft.applyMatrix4(b.matrixWorld).applyMatrix4(k)),Array.isArray(Ot)){const Yt=$t.groups;for(let Xt=0,he=Yt.length;Xt<he;Xt++){const de=Yt[Xt],Kt=Ot[de.materialIndex];Kt&&Kt.visible&&w.push(b,$t,Kt,dt,ft.z,de,$)}}else Ot.visible&&w.push(b,$t,Ot,dt,ft.z,null,$)}}const kt=b.children;for(let $t=0,Ot=kt.length;$t<Ot;$t++)bs(kt[$t],$,dt,lt)}function _r(b,$,dt,lt){const{opaque:ot,transmissive:kt,transparent:$t}=b;C.setupLightsView(dt),W===!0&&Jt.setGlobalState(V.clippingPlanes,dt),lt&&g.viewport(gt.copy(lt)),ot.length>0&&vr(ot,$,dt),kt.length>0&&vr(kt,$,dt),$t.length>0&&vr($t,$,dt),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Es(b,$,dt,lt){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[lt.id]===void 0){const Kt=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[lt.id]=new ei(1,1,{generateMipmaps:!0,type:Kt?Mi:Ln,minFilter:Lr,samples:Math.max(4,T.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}const kt=C.state.transmissionRenderTarget[lt.id],$t=lt.viewport||gt;kt.setSize($t.z*V.transmissionResolutionScale,$t.w*V.transmissionResolutionScale);const Ot=V.getRenderTarget(),Yt=V.getActiveCubeFace(),Xt=V.getActiveMipmapLevel();V.setRenderTarget(kt),V.getClearColor(ne),re=V.getClearAlpha(),re<1&&V.setClearColor(16777215,.5),V.clear(),rt&&oe.render(dt);const he=V.toneMapping;V.toneMapping=_i;const de=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),C.setupLightsView(lt),W===!0&&Jt.setGlobalState(V.clippingPlanes,lt),vr(b,dt,lt),K.updateMultisampleRenderTarget(kt),K.updateRenderTargetMipmap(kt),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Me=0,Be=$.length;Me<Be;Me++){const Ue=$[Me],{object:Ae,geometry:je,material:qt,group:tn}=Ue;if(qt.side===di&&Ae.layers.test(lt.layers)){const ge=qt.side;qt.side=Cn,qt.needsUpdate=!0,ba(Ae,dt,lt,je,qt,tn),qt.side=ge,qt.needsUpdate=!0,Kt=!0}}Kt===!0&&(K.updateMultisampleRenderTarget(kt),K.updateRenderTargetMipmap(kt))}V.setRenderTarget(Ot,Yt,Xt),V.setClearColor(ne,re),de!==void 0&&(lt.viewport=de),V.toneMapping=he}function vr(b,$,dt){const lt=$.isScene===!0?$.overrideMaterial:null;for(let ot=0,kt=b.length;ot<kt;ot++){const $t=b[ot],{object:Ot,geometry:Yt,group:Xt}=$t;let he=$t.material;he.allowOverride===!0&&lt!==null&&(he=lt),Ot.layers.test(dt.layers)&&ba(Ot,$,dt,Yt,he,Xt)}}function ba(b,$,dt,lt,ot,kt){Z!==null&&ot.isNodeMaterial&&Z.setObject(b,ot),b.onBeforeRender(V,$,dt,lt,ot,kt),b.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ot.onBeforeRender(V,$,dt,lt,b,kt),ot.transparent===!0&&ot.side===di&&ot.forceSinglePass===!1?(ot.side=Cn,ot.needsUpdate=!0,V.renderBufferDirect(dt,$,lt,ot,b,kt),ot.side=Fr,ot.needsUpdate=!0,V.renderBufferDirect(dt,$,lt,ot,b,kt),ot.side=di):V.renderBufferDirect(dt,$,lt,ot,b,kt),b.onAfterRender(V,$,dt,lt,ot,kt)}function Je(b,$,dt){$.isScene!==!0&&($=ut);const lt=J.get(b),ot=C.state.lights,kt=C.state.shadowsArray,$t=ot.state.version,Ot=_t.getParameters(b,ot.state,kt,$,dt,C.state.lightProbeGridArray),Yt=_t.getProgramCacheKey(Ot);let Xt=lt.programs;lt.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?$.environment:null,lt.fog=$.fog;const he=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;lt.envMap=Et.get(b.envMap||lt.environment,he),lt.envMapRotation=lt.environment!==null&&b.envMap===null?$.environmentRotation:b.envMapRotation,Xt===void 0&&(b.addEventListener("dispose",Nn),Xt=new Map,lt.programs=Xt);let de=Xt.get(Yt);if(de!==void 0){if(lt.currentProgram===de&&lt.lightsStateVersion===$t)return Ts(b,Ot),de}else Ot.uniforms=_t.getUniforms(b),Z!==null&&b.isNodeMaterial&&Z.build(b,dt,Ot),b.onBeforeCompile(Ot,V),de=_t.acquireProgram(Ot,Yt),Xt.set(Yt,de),lt.uniforms=Ot.uniforms;const Kt=lt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Kt.clippingPlanes=Jt.uniform),Ts(b,Ot),lt.needsLights=Ta(b),lt.lightsStateVersion=$t,lt.needsLights&&(Kt.ambientLightColor.value=ot.state.ambient,Kt.lightProbe.value=ot.state.probe,Kt.sunLights.value=ot.state.sun,Kt.sunLightShadows.value=ot.state.sunShadow,Kt.directionalLights.value=ot.state.directional,Kt.directionalLightShadows.value=ot.state.directionalShadow,Kt.spotLights.value=ot.state.spot,Kt.spotLightShadows.value=ot.state.spotShadow,Kt.rectAreaLights.value=ot.state.rectArea,Kt.ltc_1.value=ot.state.rectAreaLTC1,Kt.ltc_2.value=ot.state.rectAreaLTC2,Kt.pointLights.value=ot.state.point,Kt.pointLightShadows.value=ot.state.pointShadow,Kt.hemisphereLights.value=ot.state.hemi,Kt.sunShadowMatrix.value=ot.state.sunShadowMatrix,Kt.sunShadowCascade.value=ot.state.sunShadowCascade,Kt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Kt.spotLightMatrix.value=ot.state.spotLightMatrix,Kt.spotLightMap.value=ot.state.spotLightMap,Kt.pointShadowMatrix.value=ot.state.pointShadowMatrix),lt.lightProbeGrid=C.state.lightProbeGridArray.length>0,lt.currentProgram=de,lt.uniformsList=null,de}function Ea(b){if(b.uniformsList===null){const $=b.currentProgram.getUniforms();b.uniformsList=To.seqWithValue($.seq,b.uniforms)}return b.uniformsList}function Ts(b,$){const dt=J.get(b);dt.outputColorSpace=$.outputColorSpace,dt.batching=$.batching,dt.batchingColor=$.batchingColor,dt.instancing=$.instancing,dt.instancingColor=$.instancingColor,dt.instancingMorph=$.instancingMorph,dt.skinning=$.skinning,dt.morphTargets=$.morphTargets,dt.morphNormals=$.morphNormals,dt.morphColors=$.morphColors,dt.morphTargetsCount=$.morphTargetsCount,dt.numClippingPlanes=$.numClippingPlanes,dt.numIntersection=$.numClipIntersection,dt.vertexAlphas=$.vertexAlphas,dt.vertexTangents=$.vertexTangents,dt.toneMapping=$.toneMapping}function Ji(b,$){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition($.matrixWorld);for(let dt=0,lt=b.length;dt<lt;dt++){const ot=b[dt];if(ot.texture!==null&&ot.boundingBox.containsPoint(M))return ot}return null}function ml(b,$,dt,lt,ot){$.isScene!==!0&&($=ut),K.resetTextureUnits();const kt=$.fog,$t=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial?$.environment:null,Ot=mt===null?V.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:_e.workingColorSpace,Yt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial&&!lt.envMap||lt.isMeshPhongMaterial&&!lt.envMap,Xt=Et.get(lt.envMap||$t,Yt),he=lt.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,de=!!dt.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Kt=!!dt.morphAttributes.position,Me=!!dt.morphAttributes.normal,Be=!!dt.morphAttributes.color;let Ue=_i;lt.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Ue=V.toneMapping);const Ae=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,je=Ae!==void 0?Ae.length:0,qt=J.get(lt),tn=C.state.lights;if(W===!0&&(G===!0||b!==vt)){const De=b===vt&&lt.id===ht;Jt.setState(lt,b,De)}let ge=!1;lt.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==tn.state.version||qt.outputColorSpace!==Ot||ot.isBatchedMesh&&qt.batching===!1||!ot.isBatchedMesh&&qt.batching===!0||ot.isBatchedMesh&&qt.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&qt.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&qt.instancing===!1||!ot.isInstancedMesh&&qt.instancing===!0||ot.isSkinnedMesh&&qt.skinning===!1||!ot.isSkinnedMesh&&qt.skinning===!0||ot.isInstancedMesh&&qt.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&qt.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&qt.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&qt.instancingMorph===!1&&ot.morphTexture!==null||qt.envMap!==Xt||lt.fog===!0&&qt.fog!==kt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Jt.numPlanes||qt.numIntersection!==Jt.numIntersection)||qt.vertexAlphas!==he||qt.vertexTangents!==de||qt.morphTargets!==Kt||qt.morphNormals!==Me||qt.morphColors!==Be||qt.toneMapping!==Ue||qt.morphTargetsCount!==je||!!qt.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,qt.__version=lt.version);let bn=qt.currentProgram;ge===!0&&(bn=Je(lt,$,ot),Z&&lt.isNodeMaterial&&Z.onUpdateProgram(lt,bn,qt));let Fn=!1,ii=!1,Ti=!1;const ye=bn.getUniforms(),ze=qt.uniforms;if(g.useProgram(bn.program)&&(Fn=!0,ii=!0,Ti=!0),lt.id!==ht&&(ht=lt.id,ii=!0),qt.needsLights){const De=Ji(C.state.lightProbeGridArray,ot);qt.lightProbeGrid!==De&&(qt.lightProbeGrid=De,ii=!0)}if(Fn||vt!==b){g.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ye.setValue(P,"projectionMatrix",b.projectionMatrix),ye.setValue(P,"viewMatrix",b.matrixWorldInverse);const Xn=ye.map.cameraPosition;Xn!==void 0&&Xn.setValue(P,nt.setFromMatrixPosition(b.matrixWorld)),T.logarithmicDepthBuffer&&ye.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&ye.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),vt!==b&&(vt=b,ii=!0,Ti=!0)}if(qt.needsLights&&(tn.state.sunShadowMap.length>0&&ye.setValue(P,"sunShadowMap",tn.state.sunShadowMap,K),tn.state.directionalShadowMap.length>0&&ye.setValue(P,"directionalShadowMap",tn.state.directionalShadowMap,K),tn.state.spotShadowMap.length>0&&ye.setValue(P,"spotShadowMap",tn.state.spotShadowMap,K),tn.state.pointShadowMap.length>0&&ye.setValue(P,"pointShadowMap",tn.state.pointShadowMap,K)),ot.isSkinnedMesh){ye.setOptional(P,ot,"bindMatrix"),ye.setOptional(P,ot,"bindMatrixInverse");const De=ot.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),ye.setValue(P,"boneTexture",De.boneTexture,K))}ot.isBatchedMesh&&(ye.setOptional(P,ot,"batchingTexture"),ye.setValue(P,"batchingTexture",ot._matricesTexture,K),ye.setOptional(P,ot,"batchingIdTexture"),ye.setValue(P,"batchingIdTexture",ot._indirectTexture,K),ye.setOptional(P,ot,"batchingColorTexture"),ot._colorsTexture!==null&&ye.setValue(P,"batchingColorTexture",ot._colorsTexture,K));const ri=dt.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&Y.update(ot,dt,bn),(ii||qt.receiveShadow!==ot.receiveShadow)&&(qt.receiveShadow=ot.receiveShadow,ye.setValue(P,"receiveShadow",ot.receiveShadow)),(lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial)&&lt.envMap===null&&$.environment!==null&&(ze.envMapIntensity.value=$.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=GE()),ii){if(ye.setValue(P,"toneMappingExposure",V.toneMappingExposure),qt.needsLights&&As(ze,Ti),kt&&lt.fog===!0&&Pt.refreshFogUniforms(ze,kt),Pt.refreshMaterialUniforms(ze,lt,ct,pt,C.state.transmissionRenderTarget[b.id]),qt.needsLights&&qt.lightProbeGrid){const De=qt.lightProbeGrid;ze.probesSH.value=De.texture,ze.probesMin.value.copy(De.boundingBox.min),ze.probesMax.value.copy(De.boundingBox.max),ze.probesResolution.value.copy(De.resolution)}To.upload(P,Ea(qt),ze,K)}if(lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(To.upload(P,Ea(qt),ze,K),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&ye.setValue(P,"center",ot.center),ye.setValue(P,"modelViewMatrix",ot.modelViewMatrix),ye.setValue(P,"normalMatrix",ot.normalMatrix),ye.setValue(P,"modelMatrix",ot.matrixWorld),lt.uniformsGroups!==void 0){const De=lt.uniformsGroups;for(let Xn=0,ji=De.length;Xn<ji;Xn++){const wa=De[Xn];bt.update(wa,bn),bt.bind(wa,bn)}}return bn}function As(b,$){b.ambientLightColor.needsUpdate=$,b.lightProbe.needsUpdate=$,b.sunLights.needsUpdate=$,b.sunLightShadows.needsUpdate=$,b.directionalLights.needsUpdate=$,b.directionalLightShadows.needsUpdate=$,b.pointLights.needsUpdate=$,b.pointLightShadows.needsUpdate=$,b.spotLights.needsUpdate=$,b.spotLightShadows.needsUpdate=$,b.rectAreaLights.needsUpdate=$,b.hemisphereLights.needsUpdate=$}function Ta(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return st},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return mt},this.setRenderTargetTextures=function(b,$,dt){const lt=J.get(b);lt.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),J.get(b.texture).__webglTexture=$,J.get(b.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:dt,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,$){const dt=J.get(b);dt.__webglFramebuffer=$,dt.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(b,$=0,dt=0){mt=b,st=$,et=dt;let lt=null,ot=!1,kt=!1;if(b){const Ot=J.get(b);if(Ot.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(P.FRAMEBUFFER,Ot.__webglFramebuffer),gt.copy(b.viewport),Lt.copy(b.scissor),Vt=b.scissorTest,g.viewport(gt),g.scissor(Lt),g.setScissorTest(Vt),ht=-1;return}else if(Ot.__webglFramebuffer===void 0)K.setupRenderTarget(b);else if(Ot.__hasExternalTextures)K.rebindTextures(b,J.get(b.texture).__webglTexture,J.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const he=b.depthTexture;if(Ot.__boundDepthTexture!==he){if(he!==null&&J.has(he)&&(b.width!==he.image.width||b.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(b)}}const Yt=b.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(kt=!0);const Xt=J.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xt[$])?lt=Xt[$][dt]:lt=Xt[$],ot=!0):b.samples>0&&K.useMultisampledRTT(b)===!1?lt=J.get(b).__webglMultisampledFramebuffer:Array.isArray(Xt)?lt=Xt[dt]:lt=Xt,gt.copy(b.viewport),Lt.copy(b.scissor),Vt=b.scissorTest}else gt.copy(Nt).multiplyScalar(ct).floor(),Lt.copy(R).multiplyScalar(ct).floor(),Vt=B;if(dt!==0&&(lt=at),g.bindFramebuffer(P.FRAMEBUFFER,lt)&&g.drawBuffers(b,lt),g.viewport(gt),g.scissor(Lt),g.setScissorTest(Vt),ot){const Ot=J.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ot.__webglTexture,dt)}else if(kt){const Ot=$;for(let Yt=0;Yt<b.textures.length;Yt++){const Xt=J.get(b.textures[Yt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Yt,Xt.__webglTexture,dt,Ot)}}else if(b!==null&&dt!==0){const Ot=J.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ot.__webglTexture,dt)}ht=-1};function Aa(b){const $=J.get(b);return($.__readFormat!==b.format||$.__readType!==b.type)&&($.__readFormat=b.format,$.__readType=b.type,$.__formatReadable=T.textureFormatReadable(b.format),$.__typeReadable=T.textureTypeReadable(b.type)),$}this.readRenderTargetPixels=function(b,$,dt,lt,ot,kt,$t,Ot=0){if(!(b&&b.isWebGLRenderTarget)){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=J.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&$t!==void 0&&(Yt=Yt[$t]),Yt){g.bindFramebuffer(P.FRAMEBUFFER,Yt);try{const Xt=b.textures[Ot],he=Xt.format,de=Xt.type;b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ot);const Kt=Aa(Xt);if(Kt.__formatReadable===!1){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=b.width-lt&&dt>=0&&dt<=b.height-ot&&P.readPixels($,dt,lt,ot,Bt.convert(he),Bt.convert(de),kt)}finally{const Xt=mt!==null?J.get(mt).__webglFramebuffer:null;g.bindFramebuffer(P.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(b,$,dt,lt,ot,kt,$t,Ot=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=J.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&$t!==void 0&&(Yt=Yt[$t]),Yt)if($>=0&&$<=b.width-lt&&dt>=0&&dt<=b.height-ot){g.bindFramebuffer(P.FRAMEBUFFER,Yt);const Xt=b.textures[Ot],he=Xt.format,de=Xt.type;b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ot);const Kt=Aa(Xt);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Me),P.bufferData(P.PIXEL_PACK_BUFFER,kt.byteLength,P.STREAM_READ),P.readPixels($,dt,lt,ot,Bt.convert(he),Bt.convert(de),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);const Be=mt!==null?J.get(mt).__webglFramebuffer:null;g.bindFramebuffer(P.FRAMEBUFFER,Be);const Ue=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await S0(P,Ue,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Me),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,kt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(Me),P.deleteSync(Ue),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,$=null,dt=0){const lt=Math.pow(2,-dt),ot=Math.floor(b.image.width*lt),kt=Math.floor(b.image.height*lt),$t=$!==null?$.x:0,Ot=$!==null?$.y:0;K.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,dt,0,0,$t,Ot,ot,kt),g.unbindTexture()},this.copyTextureToTexture=function(b,$,dt=null,lt=null,ot=0,kt=0){let $t,Ot,Yt,Xt,he,de,Kt,Me,Be;const Ue=b.isCompressedTexture?b.mipmaps[kt]:b.image;if(dt!==null)$t=dt.max.x-dt.min.x,Ot=dt.max.y-dt.min.y,Yt=dt.isBox3?dt.max.z-dt.min.z:1,Xt=dt.min.x,he=dt.min.y,de=dt.isBox3?dt.min.z:0;else{const ze=Math.pow(2,-ot);$t=Math.floor(Ue.width*ze),Ot=Math.floor(Ue.height*ze),b.isDataArrayTexture?Yt=Ue.depth:b.isData3DTexture?Yt=Math.floor(Ue.depth*ze):Yt=1,Xt=0,he=0,de=0}lt!==null?(Kt=lt.x,Me=lt.y,Be=lt.z):(Kt=0,Me=0,Be=0);const Ae=Bt.convert($.format),je=Bt.convert($.type);let qt;$.isData3DTexture?(K.setTexture3D($,0),qt=P.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(K.setTexture2DArray($,0),qt=P.TEXTURE_2D_ARRAY):(K.setTexture2D($,0),qt=P.TEXTURE_2D),g.activeTexture(P.TEXTURE0),g.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,$.flipY),g.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),g.pixelStorei(P.UNPACK_ALIGNMENT,$.unpackAlignment);const tn=g.getParameter(P.UNPACK_ROW_LENGTH),ge=g.getParameter(P.UNPACK_IMAGE_HEIGHT),bn=g.getParameter(P.UNPACK_SKIP_PIXELS),Fn=g.getParameter(P.UNPACK_SKIP_ROWS),ii=g.getParameter(P.UNPACK_SKIP_IMAGES);g.pixelStorei(P.UNPACK_ROW_LENGTH,Ue.width),g.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ue.height),g.pixelStorei(P.UNPACK_SKIP_PIXELS,Xt),g.pixelStorei(P.UNPACK_SKIP_ROWS,he),g.pixelStorei(P.UNPACK_SKIP_IMAGES,de);const Ti=b.isDataArrayTexture||b.isData3DTexture,ye=$.isDataArrayTexture||$.isData3DTexture;if(b.isDepthTexture){const ze=J.get(b),ri=J.get($),De=J.get(ze.__renderTarget),Xn=J.get(ri.__renderTarget);g.bindFramebuffer(P.READ_FRAMEBUFFER,De.__webglFramebuffer),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let ji=0;ji<Yt;ji++)Ti&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,J.get(b).__webglTexture,ot,de+ji),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,J.get($).__webglTexture,kt,Be+ji)),P.blitFramebuffer(Xt,he,$t,Ot,Kt,Me,$t,Ot,P.DEPTH_BUFFER_BIT,P.NEAREST);g.bindFramebuffer(P.READ_FRAMEBUFFER,null),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(ot!==0||b.isRenderTargetTexture||J.has(b)){const ze=J.get(b),ri=J.get($);g.bindFramebuffer(P.READ_FRAMEBUFFER,N),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,it);for(let De=0;De<Yt;De++)Ti?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ze.__webglTexture,ot,de+De):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ze.__webglTexture,ot),ye?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ri.__webglTexture,kt,Be+De):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ri.__webglTexture,kt),ot!==0?P.blitFramebuffer(Xt,he,$t,Ot,Kt,Me,$t,Ot,P.COLOR_BUFFER_BIT,P.NEAREST):ye?P.copyTexSubImage3D(qt,kt,Kt,Me,Be+De,Xt,he,$t,Ot):P.copyTexSubImage2D(qt,kt,Kt,Me,Xt,he,$t,Ot);g.bindFramebuffer(P.READ_FRAMEBUFFER,null),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ye?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(qt,kt,Kt,Me,Be,$t,Ot,Yt,Ae,je,Ue.data):$.isCompressedArrayTexture?P.compressedTexSubImage3D(qt,kt,Kt,Me,Be,$t,Ot,Yt,Ae,Ue.data):P.texSubImage3D(qt,kt,Kt,Me,Be,$t,Ot,Yt,Ae,je,Ue):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,kt,Kt,Me,$t,Ot,Ae,je,Ue.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,kt,Kt,Me,Ue.width,Ue.height,Ae,Ue.data):P.texSubImage2D(P.TEXTURE_2D,kt,Kt,Me,$t,Ot,Ae,je,Ue);g.pixelStorei(P.UNPACK_ROW_LENGTH,tn),g.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ge),g.pixelStorei(P.UNPACK_SKIP_PIXELS,bn),g.pixelStorei(P.UNPACK_SKIP_ROWS,Fn),g.pixelStorei(P.UNPACK_SKIP_IMAGES,ii),kt===0&&$.generateMipmaps&&P.generateMipmap(qt),g.unbindTexture()},this.initRenderTarget=function(b){J.get(b).__webglFramebuffer===void 0&&K.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?K.setTextureCube(b,0):b.isData3DTexture?K.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?K.setTexture2DArray(b,0):K.setTexture2D(b,0),g.unbindTexture()},this.resetState=function(){st=0,et=0,mt=null,g.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}}const cd={type:"change"},eh={type:"start"},Sm={type:"end"},po=new al,ud=new Fi,XE=Math.cos(70*b0.DEG2RAD),Ye=new q,An=2*Math.PI,Re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},mc=1e-6;class $E extends $x{constructor(t,e=null){super(t,e),this.state=Re.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new fr,this._lastTargetPosition=new q,this._quat=new fr().setFromUnitVectors(t.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zf,this._sphericalDelta=new zf,this._scale=1,this._panOffset=new q,this._rotateStart=new Ut,this._rotateEnd=new Ut,this._rotateDelta=new Ut,this._panStart=new Ut,this._panEnd=new Ut,this._panDelta=new Ut,this._dollyStart=new Ut,this._dollyEnd=new Ut,this._dollyDelta=new Ut,this._dollyDirection=new q,this._mouse=new Ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=YE.bind(this),this._onPointerDown=qE.bind(this),this._onPointerUp=KE.bind(this),this._onContextMenu=nT.bind(this),this._onMouseWheel=jE.bind(this),this._onKeyDown=QE.bind(this),this._onTouchStart=tT.bind(this),this._onTouchMove=eT.bind(this),this._onMouseDown=ZE.bind(this),this._onMouseMove=JE.bind(this),this._interceptControlDown=iT.bind(this),this._interceptControlUp=rT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Re.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cd),this.update(),this.state=Re.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ye.copy(e).sub(this.target),Ye.applyQuaternion(this._quat),this._spherical.setFromVector3(Ye),this.autoRotate&&this.state===Re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=An:i>Math.PI&&(i-=An),r<-Math.PI?r+=An:r>Math.PI&&(r-=An),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ye.setFromSpherical(this._spherical),Ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ye.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new q(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(po.origin.copy(this.object.position),po.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(po.direction))<XE?this.object.lookAt(this.target):(ud.setFromNormalAndCoplanarPoint(this.object.up,this.target),po.intersectPlane(ud,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>mc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>mc||this._lastTargetPosition.distanceToSquared(this.target)>mc?(this.dispatchEvent(cd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?An/60*this.autoRotateSpeed*t:An/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ye.setFromMatrixColumn(e,0),Ye.multiplyScalar(-t),this._panOffset.add(Ye)}_panUp(t,e){this.screenSpacePanning===!0?Ye.setFromMatrixColumn(e,1):(Ye.setFromMatrixColumn(e,0),Ye.crossVectors(this.object.up,Ye)),Ye.multiplyScalar(t),this._panOffset.add(Ye)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ye.copy(r).sub(this.target);let s=Ye.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(An*this._rotateDelta.x/e.clientHeight),this._rotateUp(An*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(An*this._rotateDelta.x/e.clientHeight),this._rotateUp(An*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function qE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function YE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function KE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sm),this.state=Re.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ZE(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Re.DOLLY;break;case ki.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Re.ROTATE}break;case ki.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Re.PAN}break;default:this.state=Re.NONE}this.state!==Re.NONE&&this.dispatchEvent(eh)}function JE(n){switch(this.state){case Re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function jE(n){this.enabled===!1||this.enableZoom===!1||this.state!==Re.NONE||(n.preventDefault(),this.dispatchEvent(eh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Sm))}function QE(n){this.enabled!==!1&&this._handleKeyDown(n)}function tT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Re.TOUCH_ROTATE;break;case rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Re.TOUCH_PAN;break;default:this.state=Re.NONE}break;case 2:switch(this.touches.TWO){case rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Re.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Re.TOUCH_DOLLY_ROTATE;break;default:this.state=Re.NONE}break;default:this.state=Re.NONE}this.state!==Re.NONE&&this.dispatchEvent(eh)}function eT(n){switch(this._trackPointer(n),this.state){case Re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Re.NONE}}function nT(n){this.enabled!==!1&&n.preventDefault()}function iT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class sT{renderer;scene;camera;controls;gear1=null;gear2=null;actionLine=null;tangentLine=null;pitchPoint=null;contactMarker=null;interferenceGroup;raycaster=new Xx;container;resizeObs;constructor(t){this.container=t;const e=t.clientWidth||800,i=t.clientHeight||600;this.renderer=new WE({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e,i),t.appendChild(this.renderer.domElement),this.scene=new O0,this.scene.background=new ve(1053464);const r=e/i,s=80;this.camera=new ll(-s*r/2,s*r/2,s/2,-s/2,.1,2e3),this.camera.position.set(0,0,120),this.camera.lookAt(0,0,0),this.controls=new $E(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN};const a=new kx(16777215,.65),o=new Hx(16777215,.9);o.position.set(40,60,100),this.scene.add(a,o),this.interferenceGroup=new ss,this.scene.add(this.interferenceGroup),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(t),this.animate()}makeCircleLine(t,e,i=.02,r=160){const s=[];for(let l=0;l<=r;l++){const c=l/r*Math.PI*2;s.push(new q(t*Math.cos(c),t*Math.sin(c),i))}const a=new dn().setFromPoints(s),o=new Eo({color:e,transparent:!0,opacity:.8});return new Y0(a,o)}buildGearMesh(t,e){const i=new ss,r=new Go,s=t.outline;r.moveTo(s[0].x,s[0].y);for(let h=1;h<s.length;h++)r.lineTo(s[h].x,s[h].y);r.closePath();const a=t.input.faceWidth,o=new Qu(r,{depth:a,bevelEnabled:!1,curveSegments:1});o.translate(0,0,-a/2),o.computeVertexNormals();const l=new Fx({color:e,metalness:.35,roughness:.55}),c=new Un(o,l);i.add(c);const u=new q0(new Z0(o,12),new Eo({color:2239027,transparent:!0,opacity:.5}));i.add(u);const f={pitch:this.makeCircleLine(t.pitchR,4891647,a/2+.02),base:this.makeCircleLine(t.baseR,2605194,a/2+.02),addendum:this.makeCircleLine(t.addendumR,16765286,a/2+.02),dedendum:this.makeCircleLine(t.dedendumR,16748451,a/2+.02)};return Object.values(f).forEach(h=>i.add(h)),{group:i,body:c,refs:f}}setGears(t,e,i){this.gear1&&this.scene.remove(this.gear1.group),this.gear2&&this.scene.remove(this.gear2.group),this.gear1=this.buildGearMesh(t,7252222),this.gear2=this.buildGearMesh(e,16758894),this.scene.add(this.gear1.group,this.gear2.group),this.gear2.group.position.x=i,this.targetCenter(i/2,Math.max(t.addendumR,e.addendumR))}targetCenter(t,e){const i=(this.container.clientWidth||800)/(this.container.clientHeight||600),r=(e*2+40)/2,s=Math.max(r*2,80);this.camera.left=-s*i/2,this.camera.right=s*i/2,this.camera.top=s/2,this.camera.bottom=-s/2,this.camera.updateProjectionMatrix(),this.controls.target.set(t,0,0),this.camera.position.set(t,0,140)}setAngles(t,e){this.gear1&&(this.gear1.group.rotation.z=t),this.gear2&&(this.gear2.group.rotation.z=e)}setMeshOverlay(t,e){if(this.clearOverlay(),!t||!this.gear1||!this.gear2)return;const i=o=>e[o],r=o=>{o.geometry.computeBoundingBox();const l=o.geometry.boundingBox;return l?l.max.z-l.min.z:0},s=r(this.gear1.body),a=r(this.gear2.body);if(this.gear1.refs.pitch.visible=!!i("showPitchCircle"),this.gear2.refs.pitch.visible=!!i("showPitchCircle"),this.gear1.refs.base.visible=!!i("showBaseCircle"),this.gear2.refs.base.visible=!!i("showBaseCircle"),this.gear1.refs.addendum.visible=!!i("showAddendumCircle"),this.gear2.refs.addendum.visible=!!i("showAddendumCircle"),this.gear1.refs.dedendum.visible=!!i("showDedendumCircle"),this.gear2.refs.dedendum.visible=!!i("showDedendumCircle"),i("showActionLine")){const o=Math.max(s,a)/2+1,l=(u,f,h)=>{const d=new dn().setFromPoints([new q(u.x,u.y,o),new q(f.x,f.y,o)]);return new Zu(d,new Eo({color:h,transparent:!0,opacity:.9,depthTest:!1}))};this.tangentLine=l(t.tangentLine.p0,t.tangentLine.p1,8950691),this.tangentLine.renderOrder=50,this.actionLine=l(t.actionLine.p0,t.actionLine.p1,3794539),this.actionLine.renderOrder=51,this.scene.add(this.tangentLine,this.actionLine);const c=new Wo(.7,16,16);this.pitchPoint=new Un(c,new Qs({color:16777215,depthTest:!1})),this.pitchPoint.position.set(t.pitchPoint.x,t.pitchPoint.y,o),this.pitchPoint.renderOrder=52,this.scene.add(this.pitchPoint)}if(i("showContact")){const o=t.alphaPrime,l=Math.sin(o),c=Math.cos(o),u={x:t.pitchPoint.x+e.contactS*l,y:t.pitchPoint.y+e.contactS*c},f=Math.max(s,a)/2+1.5,h=new Wo(1,20,20);this.contactMarker=new Un(h,new Qs({color:16726891,depthTest:!1})),this.contactMarker.position.set(u.x,u.y,f),this.contactMarker.renderOrder=60,this.scene.add(this.contactMarker)}if(e.contactRegions)for(const o of e.contactRegions)for(const l of o){if(l.length<3)continue;const c=new Go;c.moveTo(l[0].x,l[0].y);for(let d=1;d<l.length;d++)c.lineTo(l[d].x,l[d].y);c.closePath();const u=new th(c),f=new Qs({color:16723285,transparent:!0,opacity:.5,side:di,depthTest:!1}),h=new Un(u,f);h.position.z=Math.max(s,a)/2+2,h.renderOrder=999,this.interferenceGroup.add(h)}}clearOverlay(){for(this.actionLine&&(this.scene.remove(this.actionLine),this.actionLine.geometry.dispose(),this.actionLine=null),this.tangentLine&&(this.scene.remove(this.tangentLine),this.tangentLine.geometry.dispose(),this.tangentLine=null),this.pitchPoint&&(this.scene.remove(this.pitchPoint),this.pitchPoint=null),this.contactMarker&&(this.scene.remove(this.contactMarker),this.contactMarker=null);this.interferenceGroup.children.length;)this.interferenceGroup.children.pop().geometry?.dispose()}pick(t,e){return this.raycaster,null}resize(){const t=this.container.clientWidth,e=this.container.clientHeight;if(!t||!e)return;this.renderer.setSize(t,e);const i=t/e,s=(this.camera.top-this.camera.bottom)/1/2;this.camera.left=-s*i,this.camera.right=s*i,this.camera.updateProjectionMatrix()}animate=()=>{requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)};dispose(){this.resizeObs.disconnect(),this.controls.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}const zn={mm:{id:"mm",label:"mm",factor:1,step:.1,decimals:3},cm:{id:"cm",label:"cm",factor:.1,step:.01,decimals:4},m:{id:"m",label:"m",factor:.001,step:.001,decimals:5},in:{id:"in",label:"in",factor:1/25.4,step:.01,decimals:4}};function Ao(n,t){return n*zn[t].factor}function gc(n,t){return n/zn[t].factor}function aT(n,t){return`${Ao(n,t).toFixed(zn[t].decimals)} ${zn[t].label}`}const hd=1,oT="spur-gear-lab",lT=2,Xo="cases",gs="trajectories",pr="trajFrames";let mo=null;function Ma(){return mo||(mo=new Promise((n,t)=>{const e=indexedDB.open(oT,lT);e.onupgradeneeded=()=>{const i=e.result;if(i.objectStoreNames.contains(Xo)||i.createObjectStore(Xo,{keyPath:"id"}).createIndex("updatedAt","updatedAt"),!i.objectStoreNames.contains(gs)){const r=i.createObjectStore(gs,{keyPath:"id"});r.createIndex("caseId","caseId"),r.createIndex("updatedAt","updatedAt")}i.objectStoreNames.contains(pr)||i.createObjectStore(pr,{keyPath:["trajId","i"]}).createIndex("trajId","trajId")},e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),mo)}function nh(n,t){return Ma().then(e=>new Promise((i,r)=>{const s=e.transaction(Xo,n),a=t(s.objectStore(Xo));a.onsuccess=()=>i(a.result),a.onerror=()=>r(a.error)}))}async function fd(n){await nh("readwrite",t=>t.put({...n,updatedAt:Date.now()}))}async function cT(n){await nh("readwrite",t=>t.delete(n))}async function uT(){return[...await nh("readonly",t=>t.getAll())].sort((t,e)=>e.updatedAt-t.updatedAt)}function hT(){return`case-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function fT(n){return JSON.stringify(n,null,2)}function dT(n){const t=JSON.parse(n);if(!t||t.schemaVersion!==hd)throw new Error(`不支持的案例版本（需要 schemaVersion=${hd}）`);if(!t.gear1||!t.gear2)throw new Error("案例缺少齿轮参数");for(const e of[t.gear1,t.gear2])if(!(e.z>=4)||!(e.module>0)||!(e.alphaDeg>0))throw new Error("案例参数不合法（z≥4, m>0, α>0）");return t}function pT(n){const t=new Blob([fT(n)],{type:"application/json"}),e=URL.createObjectURL(t),i=document.createElement("a");i.href=e;const r=(n.name||"gear-case").replace(/[^\w一-龥-]+/g,"_");i.download=`${r}.json`,i.click(),URL.revokeObjectURL(e)}function mT(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0).toString(16).padStart(8,"0")}function gT(n){return mT(JSON.stringify(n))}function _T(n,t){let e=2166136261;const i=r=>{e^=r|0,e=Math.imul(e,16777619)};for(const r of[n,t]){i(r.length);for(const s of r)i(Math.round(s.x*1e6)),i(Math.round(s.y*1e6))}return(e>>>0).toString(16).padStart(8,"0")}function vT(n,t,e){return`${gT(n)}-${_T(t,e)}`}function xT(n,t){return t&&n.fingerprint!==t?"expired":n.status}function Hr(n){return new Promise((t,e)=>{n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)})}async function hl(n){return(await Ma()).transaction(gs,n).objectStore(gs)}function ST(){return`traj-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}async function Ws(n){const t=await hl("readwrite");await Hr(t.put({...n,updatedAt:Date.now()}))}async function dd(n){const t=await hl("readonly");return Hr(t.get(n))}async function pd(n){const t=await hl("readonly");return[...await Hr(t.index("caseId").getAll(IDBKeyRange.only(n)))].sort((i,r)=>r.updatedAt-i.updatedAt)}async function MT(){const n=await hl("readonly");return Hr(n.getAll())}async function md(n){const t=await Ma();await new Promise((e,i)=>{const r=t.transaction([gs,pr],"readwrite");r.objectStore(gs).delete(n);const a=r.objectStore(pr).index("trajId").openCursor(IDBKeyRange.only(n));a.onsuccess=()=>{const o=a.result;o&&(o.delete(),o.continue())},r.oncomplete=()=>e(),r.onerror=()=>i(r.error)})}async function yT(){const n=await MT();let t=0;for(const e of n)e.status==="running"&&(await Ws({...e,status:"cancelled"}),t++);return t}async function ih(n){return(await Ma()).transaction(pr,n).objectStore(pr)}async function bT(n){const t=await ih("readonly");return(await Hr(t.index("trajId").getAllKeys(IDBKeyRange.only(n)))).map(i=>i[1])}async function gd(n){const t=await ih("readonly");return Hr(t.index("trajId").count(IDBKeyRange.only(n)))}async function ET(n){const t=await ih("readonly");return[...await Hr(t.index("trajId").getAll(IDBKeyRange.only(n)))].sort((i,r)=>i.i-r.i)}function TT(n){return{async putMany(t){if(!t.length)return;const e=await Ma();await new Promise((i,r)=>{const s=e.transaction(pr,"readwrite"),a=s.objectStore(pr);for(const o of t)a.put(o);s.oncomplete=()=>i(),s.onerror=()=>r(s.error)})},async existingIndices(){return new Set(await bT(n))}}}const AT={class:"app"},wT={class:"panel"},CT={class:"units"},RT=["onClick"],PT=["step"],DT=["step"],LT={class:"two"},IT={key:0,class:"err"},UT={key:1,class:"err"},NT={class:"row"},FT={key:0},OT=["step"],BT={class:"row"},zT=["disabled"],VT=["disabled"],HT=["disabled"],kT=["disabled","min","max"],GT=["disabled"],WT={key:0,class:"report"},XT={key:0,class:"report"},$T={key:0,class:"dim"},qT=["disabled"],YT={class:"dim"},KT={class:"row"},ZT=["disabled"],JT={key:1,class:"progress"},jT={class:"caselist trajlist"},QT={class:"ci"},tA={key:0,class:"bad"},eA={class:"ca"},nA=["onClick","disabled"],iA=["onClick","disabled"],rA=["onClick","disabled"],sA={key:0,class:"empty"},aA={key:2,class:"replay"},oA={class:"row"},lA=["disabled"],cA=["disabled"],uA=["max"],hA={class:"row"},fA={key:0,class:"report"},dA={key:1,class:"warns"},pA={class:"row"},mA={class:"row"},gA={class:"row"},_A={class:"row"},vA={class:"row"},xA={class:"row"},SA={class:"samples"},MA={class:"viewport"},yA={class:"readouts"},bA={key:0,class:"dim-grid"},EA={class:"mesh-report"},TA={key:0,class:"warns"},AA={class:"panel right"},wA={class:"row"},CA={class:"row"},RA={class:"wide filebtn"},PA={class:"caselist"},DA={class:"ci"},LA={class:"ca"},IA=["onClick"],UA=["onClick"],NA={key:0,class:"empty"},FA=qg({__name:"App",setup(n){const t=gn("mm"),e=or({z1:20,z2:40,m:2,alphaDeg:20,faceWidth:10,centerDistance:60,useStandardCenter:!0}),i=La(),r=La(),s=La(),a=gn("");function o(){return{z1:Math.round(e.z1),z2:Math.round(e.z2),module:e.m,alphaDeg:e.alphaDeg,faceWidth:e.faceWidth,centerDistance:e.useStandardCenter?null:e.centerDistance}}const l=or({g1:[],g2:[]});function c(){const Q={z:Math.round(e.z1),module:e.m,alpha:e.alphaDeg*tr,faceWidth:e.faceWidth},E={z:Math.round(e.z2),module:e.m,alpha:e.alphaDeg*tr,faceWidth:e.faceWidth};if(l.g1=qh(Q),l.g2=qh(E),l.g1.length||l.g2.length)return;i.value=$h(Q),r.value=$h(E);const O=e.useStandardCenter?i.value.pitchR+r.value.pitchR:e.centerDistance;s.value=Ev({g1:i.value,g2:r.value,centerDistance:O}),a.value=vT(o(),i.value.outline,r.value.outline)}const u=Ii({get:()=>Ao(e.m,t.value),set:Q=>e.m=gc(Q,t.value)}),f=Ii({get:()=>Ao(e.faceWidth,t.value),set:Q=>e.faceWidth=gc(Q,t.value)}),h=Ii({get:()=>Ao(e.centerDistance,t.value),set:Q=>e.centerDistance=gc(Q,t.value)});Pr(t,()=>{});const d=gn(!0),_=gn(0),y=gn(.25);let m=0;const p=gn(0),A=or({showPitchCircle:!0,showBaseCircle:!0,showAddendumCircle:!1,showDedendumCircle:!1,showActionLine:!0,showContact:!0,contactS:0}),D=gn(null),M=La([]),w=gn(!1);let C=0;async function z(Q){if(!i.value||!r.value||!s.value)return;const E=Q,O=Yh(i.value,r.value,s.value,E),_t=[No(i.value.outline,0,0,E)],Pt=[No(r.value.outline,s.value.a,0,O)],It=++C;w.value=!0;try{const Dt=await Cp(_t,Pt);if(It!==C)return;D.value=Dt.area,M.value=Dt.regions}finally{It===C&&(w.value=!1)}}const S=Ii(()=>i.value&&r.value?Ap(i.value.input.z,r.value.input.z):null),I=gn(6),V=Ii(()=>S.value?S.value.pairsPerCycle*(Math.max(1,I.value)+1)+1:0),X=gn([]),Z=or({running:!1,done:0,total:0,id:""});let at=!1;const N=or({active:!1,trajId:"",frames:[],index:0,playing:!1,fps:30,expired:!1,pairsPerCycle:0});let it=0;const st=Ii(()=>N.active&&N.frames.length?N.frames[N.index]:null);async function et(){X.value=ft.value?await pd(ft.value):[]}function mt(Q){return xT(Q,a.value||null)}const ht={running:"生成中…",cancelled:"已取消（可继续）",failed:"失败",completed:"完成 ✅（当前有效）",expired:"已过期（历史，仅供查看）"};function vt(Q){return ht[Q]}async function gt(Q){if(!(!i.value||!r.value||!s.value)){Z.running=!0,Z.id=Q.id,at=!1;try{const E=await Ov({g1:i.value,g2:r.value,mesh:s.value,trajId:Q.id,framesPerEngagement:Q.framesPerEngagement,sink:TT(Q.id),shouldCancel:()=>at,onProgress:(_t,Pt)=>{Z.done=_t,Z.total=Pt},yieldControl:()=>new Promise(_t=>setTimeout(_t,0))}),O=await dd(Q.id);O&&(O.status=E==="completed"?"completed":"cancelled",O.framesDone=await gd(Q.id),await Ws(O))}catch(E){const O=await dd(Q.id);O&&(O.status="failed",O.error=String(E?.message??E),O.framesDone=await gd(Q.id),await Ws(O))}finally{Z.running=!1,await et()}}}async function Lt(){if(!i.value||!r.value||!s.value||Z.running)return;(!ft.value||ut)&&await P(!1);const Q=ft.value,E=S.value,[O,_t]=wp(s.value),Pt={id:ST(),caseId:Q,name:`${k.value||"案例"} · ${new Date().toLocaleString()}`,fingerprint:a.value,params:o(),cycle:E,sEnter:O,sExit:_t,framesPerEngagement:Math.max(1,Math.round(I.value)),frameCount:E.pairsPerCycle*(Math.max(1,Math.round(I.value))+1)+1,framesDone:0,status:"running",createdAt:Date.now(),updatedAt:Date.now()};await Ws(Pt),await et(),await gt(Pt)}function Vt(){at=!0}async function ne(Q){Z.running||Q.fingerprint===a.value&&(await Ws({...Q,status:"running"}),await et(),await gt(Q))}async function re(Q){N.trajId===Q&&pt(),await md(Q),await et()}async function ie(Q){const E=await ET(Q.id);E.length&&(d.value=!1,N.active=!0,N.trajId=Q.id,N.frames=E,N.index=0,N.playing=!1,N.expired=mt(Q)==="expired",N.pairsPerCycle=Q.cycle.pairsPerCycle,it=0)}function pt(){N.active=!1,N.playing=!1,N.trajId="",N.frames=[],D.value=null,M.value=[]}function ct(Q){const E=N.frames.length;if(E)for(let O=1;O<=E;O++){const _t=(N.index+Q*O+E*O)%E;if(N.frames[_t].interferes){N.index=_t,N.playing=!1;return}}}const At=gn();let zt=null;function Nt(){!zt||!s.value||zt.setMeshOverlay(s.value,{...A,contactS:p.value,contactRegions:[M.value]})}yc(()=>{c(),zt=new sT(At.value),i.value&&r.value&&s.value&&zt.setGears(i.value,r.value,s.value.a);const Q=E=>{const O=Math.min(.05,(E-m)/1e3||0);if(m=E,N.active&&N.frames.length){if(N.playing)for(it+=O*N.fps;it>=1;)if(it-=1,N.index<N.frames.length-1)N.index++;else{N.playing=!1;break}const _t=N.frames[N.index];zt.setAngles(_t.phi1,_t.phi2),p.value=_t.s,D.value=_t.interferenceArea,M.value=_t.regions,A.contactS=_t.s,Nt()}else{if(d.value&&i.value&&r.value&&s.value){_.value+=y.value*O;const _t=2*Math.PI/i.value.input.z;_.value=(_.value%_t+_t)%_t;const Pt=(_.value-Cc(s.value,i.value,r.value,0).phi1)*i.value.baseR;p.value=R(Pt)}if(i.value&&r.value&&s.value){const _t=Yh(i.value,r.value,s.value,_.value);zt.setAngles(_.value,_t),A.contactS=p.value,Nt()}}requestAnimationFrame(Q)};requestAnimationFrame(Q)});function R(Q){if(!s.value)return 0;const E=s.value.actionLine,O=s.value.alphaPrime,_t=Math.sin(O),Pt=Math.cos(O),It=(E.p0.x-s.value.pitchPoint.x)*_t+(E.p0.y-s.value.pitchPoint.y)*Pt,Dt=(E.p1.x-s.value.pitchPoint.x)*_t+(E.p1.y-s.value.pitchPoint.y)*Pt;return Q<It?Dt-(It-Q)%(Dt-It):Q>Dt?It+(Q-Dt)%(Dt-It):Q}Pr(()=>[e.z1,e.z2,e.m,e.alphaDeg,e.faceWidth,e.useStandardCenter,e.centerDistance],()=>{ut=!0,at=!0,N.active&&pt(),c(),zt&&i.value&&r.value&&s.value&&zt.setGears(i.value,r.value,s.value.a),_.value=0,p.value=0,D.value=null,M.value=[]}),Pr(A,Nt),Pr(p,()=>A.contactS=p.value);function B(){d.value=!1}function F(){d.value=!0}function W(){d.value||!i.value||!r.value||!s.value||(_.value=Cc(s.value,i.value,r.value,p.value).phi1)}const G=gn([]),k=gn("未命名案例"),nt=gn(""),ft=gn(null);let ut=!0;async function rt(){G.value=await uT()}yc(async()=>{await yT(),await rt(),await et()});function Tt(Q){const E=s.value?.a??e.centerDistance;return{schemaVersion:1,id:hT(),name:k.value,createdAt:Date.now(),updatedAt:Date.now(),note:nt.value,gear1:{z:e.z1,module:e.m,alpha:e.alphaDeg*tr,alphaDeg:e.alphaDeg,faceWidth:e.faceWidth},gear2:{z:e.z2,module:e.m,alpha:e.alphaDeg*tr,alphaDeg:e.alphaDeg,faceWidth:e.faceWidth},centerDistance:e.useStandardCenter?null:E,unit:t.value,outlines:Q&&i.value&&r.value?{gear1:i.value.outline,gear2:r.value.outline}:void 0}}async function P(Q){const E=Tt(Q);await fd(E),ft.value=E.id,ut=!1,await rt(),await et()}function wt(Q){pT(Tt(Q))}async function Ct(Q){N.active&&pt(),e.z1=Q.gear1.z,e.z2=Q.gear2.z,e.m=Q.gear1.module,e.alphaDeg=Q.gear1.alphaDeg,e.faceWidth=Q.gear1.faceWidth,Q.centerDistance==null?e.useStandardCenter=!0:(e.useStandardCenter=!1,e.centerDistance=Q.centerDistance),t.value=Q.unit||"mm",k.value=Q.name,nt.value=Q.note,c(),zt&&i.value&&r.value&&s.value&&zt.setGears(i.value,r.value,s.value.a),await Wd(),ft.value=Q.id,ut=!1,await et()}async function T(Q){for(const E of await pd(Q))await md(E.id);ft.value===Q&&(ft.value=null,X.value=[]),await cT(Q),await rt()}function g(Q){const E=Q.target,O=E.files?.[0];if(!O)return;const _t=new FileReader;_t.onload=async()=>{try{const Pt=dT(String(_t.result));await fd(Pt),await Ct(Pt),await rt()}catch(Pt){alert("导入失败："+Pt.message)}},_t.readAsText(O),E.value=""}const L=Ii(()=>!i.value||!r.value||!s.value?null:{g1:i.value,g2:r.value,mesh:s.value}),J=Ii(()=>{if(!s.value)return[-30,30];const Q=s.value,E=Math.sin(Q.alphaPrime),O=Math.cos(Q.alphaPrime),_t=(Q.actionLine.p0.x-Q.pitchPoint.x)*E+(Q.actionLine.p0.y-Q.pitchPoint.y)*O,Pt=(Q.actionLine.p1.x-Q.pitchPoint.x)*E+(Q.actionLine.p1.y-Q.pitchPoint.y)*O;return[Math.floor(_t*10)/10,Math.ceil(Pt*10)/10]});function K(Q){return aT(Q,t.value)}function Et(Q,E,O=2,_t=20){e.z1=Q,e.z2=E,e.m=O,e.alphaDeg=_t,e.useStandardCenter=!0}return(Q,E)=>(we(),Le("div",AT,[E[86]||(E[86]=j("header",null,[j("h1",null,"直齿圆柱齿轮参数化实验室"),j("div",{class:"sub"},"外啮合 · 无变位 · 理想刚性 · 渐开线齿廓（教学模型）")],-1)),j("main",null,[j("aside",wT,[j("section",null,[E[33]||(E[33]=j("h2",null,"显示单位（不改变实际尺寸）",-1)),j("div",CT,[(we(!0),Le(Sn,null,Ua(Object.keys(Dn(zn)),O=>(we(),Le("button",{key:O,class:Zn({active:t.value===O}),onClick:_t=>t.value=O},Wt(Dn(zn)[O].label),11,RT))),128))])]),j("section",null,[E[37]||(E[37]=j("h2",null,"齿轮参数",-1)),j("label",null,[E[34]||(E[34]=le("压力角 α（度） ",-1)),qe(j("input",{type:"number","onUpdate:modelValue":E[0]||(E[0]=O=>e.alphaDeg=O),min:"1",max:"45",step:"0.5"},null,512),[[On,e.alphaDeg,void 0,{number:!0}]])]),j("label",null,[le("模数 m（"+Wt(Dn(zn)[t.value].label)+"） ",1),qe(j("input",{type:"number","onUpdate:modelValue":E[1]||(E[1]=O=>u.value=O),step:Dn(zn)[t.value].step},null,8,PT),[[On,u.value,void 0,{number:!0}]])]),j("label",null,[le("齿宽 b（"+Wt(Dn(zn)[t.value].label)+"） ",1),qe(j("input",{type:"number","onUpdate:modelValue":E[2]||(E[2]=O=>f.value=O),step:Dn(zn)[t.value].step},null,8,DT),[[On,f.value,void 0,{number:!0}]])]),j("div",LT,[j("label",null,[E[35]||(E[35]=le("齿数 z₁ ",-1)),qe(j("input",{type:"number","onUpdate:modelValue":E[3]||(E[3]=O=>e.z1=O),min:"4",step:"1"},null,512),[[On,e.z1,void 0,{number:!0}]])]),j("label",null,[E[36]||(E[36]=le("齿数 z₂ ",-1)),qe(j("input",{type:"number","onUpdate:modelValue":E[4]||(E[4]=O=>e.z2=O),min:"4",step:"1"},null,512),[[On,e.z2,void 0,{number:!0}]])])]),l.g1.length?(we(),Le("div",IT,Wt(l.g1.join("；")),1)):nn("",!0),l.g2.length?(we(),Le("div",UT,Wt(l.g2.join("；")),1)):nn("",!0)]),j("section",null,[E[39]||(E[39]=j("h2",null,"中心距",-1)),j("label",NT,[qe(j("input",{type:"checkbox","onUpdate:modelValue":E[5]||(E[5]=O=>e.useStandardCenter=O)},null,512),[[Mr,e.useStandardCenter]]),E[38]||(E[38]=le(" 使用标准中心距 a₀ = m(z₁+z₂)/2 ",-1))]),e.useStandardCenter?nn("",!0):(we(),Le("label",FT,[le("实际中心距 a（"+Wt(Dn(zn)[t.value].label)+"） ",1),qe(j("input",{type:"number","onUpdate:modelValue":E[6]||(E[6]=O=>h.value=O),step:Dn(zn)[t.value].step},null,8,OT),[[On,h.value,void 0,{number:!0}]])]))]),j("section",null,[E[42]||(E[42]=j("h2",null,"运动 / 检查",-1)),j("div",BT,[j("button",{onClick:B,disabled:!d.value||N.active},"暂停",8,zT),j("button",{onClick:F,disabled:d.value||N.active},"继续",8,VT)]),j("label",null,[E[40]||(E[40]=le("轮1 角速度（rad/s） ",-1)),qe(j("input",{type:"range","onUpdate:modelValue":E[7]||(E[7]=O=>y.value=O),min:"0",max:"1.5",step:"0.01",disabled:N.active},null,8,HT),[[On,y.value,void 0,{number:!0}]])]),j("label",null,[E[41]||(E[41]=le("接触点沿啮合线 s（mm，暂停可拖动） ",-1)),qe(j("input",{type:"range",disabled:d.value||N.active,"onUpdate:modelValue":E[8]||(E[8]=O=>p.value=O),min:J.value[0],max:J.value[1],step:"0.05",onInput:W},null,40,kT),[[On,p.value,void 0,{number:!0}]])]),j("button",{class:"wide",onClick:E[9]||(E[9]=O=>z(_.value)),disabled:d.value||w.value||N.active},Wt(w.value?"Clipper 求交中…":"在当前帧做局部干涉求交（Clipper2 WASM）"),9,GT),D.value!==null&&!N.active?(we(),Le("div",WT,[le(" 重叠面积 = "+Wt(D.value.toExponential(3))+" mm² ",1),j("b",{class:Zn(D.value>1e-6?"bad":"good")},Wt(D.value>1e-6?"存在实体干涉 ❗":"当前帧无干涉 ✅"),3)])):nn("",!0)]),j("section",null,[E[55]||(E[55]=j("h2",null,"啮合周期回放",-1)),S.value?(we(),Le("div",XT,[j("div",null,[E[43]||(E[43]=le("每周期啮合次数 lcm(z₁,z₂)：",-1)),j("b",null,Wt(S.value.pairsPerCycle),1),le("（gcd = "+Wt(S.value.gcd)+"）",1)]),j("div",null,[E[44]||(E[44]=le("重复周期：轮1 转 ",-1)),j("b",null,Wt(S.value.rev1),1),E[45]||(E[45]=le(" 周 / 轮2 转 ",-1)),j("b",null,Wt(S.value.rev2),1),E[46]||(E[46]=le(" 周",-1))]),j("div",null,[E[47]||(E[47]=le("周期转角 φ₁：",-1)),j("b",null,Wt(S.value.periodPhi1.toFixed(3)),1),le(" rad（"+Wt((S.value.periodPhi1/Dn(tr)).toFixed(1))+"°）",1)]),S.value.gcd===1?(we(),Le("div",$T,"z₁、z₂ 互质：每颗齿都要与对方全部齿各啮合一次才重复，周期最长。")):nn("",!0)])):nn("",!0),j("label",null,[E[48]||(E[48]=le("每次啮合采样帧数（含两端） ",-1)),qe(j("input",{type:"number","onUpdate:modelValue":E[10]||(E[10]=O=>I.value=O),min:"1",max:"40",step:"1",disabled:Z.running},null,8,qT),[[On,I.value,void 0,{number:!0}]])]),j("div",YT,"预计 "+Wt(V.value)+" 帧，逐帧 Clipper 求交；帧数大时耗时较长，可随时取消、稍后继续。",1),j("div",KT,[j("button",{onClick:Lt,disabled:Z.running||!!l.g1.length||!!l.g2.length||N.active},Wt(Z.running?`生成中 ${Z.done}/${Z.total}…`:"生成周期轨迹"),9,ZT),Z.running?(we(),Le("button",{key:0,onClick:Vt},"取消")):nn("",!0)]),Z.running?(we(),Le("div",JT,[j("div",{class:"bar",style:Zo({width:100*Z.done/Math.max(1,Z.total)+"%"})},null,4)])):nn("",!0),j("ul",jT,[(we(!0),Le(Sn,null,Ua(X.value,O=>(we(),Le("li",{key:O.id,class:Zn({expired:mt(O)==="expired"})},[j("div",QT,[j("b",null,Wt(O.name),1),j("span",null,Wt(O.framesDone)+"/"+Wt(O.frameCount)+" 帧 · "+Wt(vt(mt(O))),1),O.status==="failed"&&O.error?(we(),Le("span",tA,Wt(O.error),1)):nn("",!0)]),j("div",eA,[j("button",{onClick:_t=>ie(O),disabled:O.framesDone===0||Z.running},"回放",8,nA),(O.status==="cancelled"||O.status==="failed")&&mt(O)!=="expired"?(we(),Le("button",{key:0,onClick:_t=>ne(O),disabled:Z.running},"继续",8,iA)):nn("",!0),j("button",{class:"del",onClick:_t=>re(O.id),disabled:Z.running&&Z.id===O.id},"删",8,rA)])],2))),128)),X.value.length?nn("",!0):(we(),Le("li",sA,"当前案例暂无轨迹（生成时自动保存案例快照）"))]),N.active?(we(),Le("div",aA,[j("div",oA,[j("button",{onClick:E[11]||(E[11]=O=>N.playing=!0),disabled:N.playing},"播放",8,lA),j("button",{onClick:E[12]||(E[12]=O=>N.playing=!1),disabled:!N.playing},"暂停",8,cA),j("button",{onClick:pt},"退出回放")]),j("label",null,[le("帧 "+Wt(N.index+1)+" / "+Wt(N.frames.length)+"（可精确跳转） ",1),qe(j("input",{type:"range",min:"0",max:Math.max(0,N.frames.length-1),step:"1","onUpdate:modelValue":E[13]||(E[13]=O=>N.index=O),onInput:E[14]||(E[14]=O=>N.playing=!1)},null,40,uA),[[On,N.index,void 0,{number:!0}]])]),j("div",hA,[j("button",{onClick:E[15]||(E[15]=O=>ct(-1))},"← 上一干涉帧"),j("button",{onClick:E[16]||(E[16]=O=>ct(1))},"下一干涉帧 →")]),st.value?(we(),Le("div",fA,[j("div",null,[st.value.engagement>=N.pairsPerCycle?(we(),Le(Sn,{key:0},[E[49]||(E[49]=j("b",null,"重复位置",-1)),E[50]||(E[50]=le("（与首帧同一对齿、同一接触相位）·",-1))],64)):(we(),Le(Sn,{key:1},[E[51]||(E[51]=le("啮合序号 ",-1)),j("b",null,Wt(st.value.engagement+1),1),le("/"+Wt(N.pairsPerCycle)+" ·",1)],64)),E[52]||(E[52]=le(" 齿对：轮1 第 ",-1)),j("b",null,Wt(st.value.k1),1),E[53]||(E[53]=le(" 齿 × 轮2 第 ",-1)),j("b",null,Wt(st.value.k2),1),E[54]||(E[54]=le(" 齿 ",-1))]),j("div",null,"s = "+Wt(st.value.s.toFixed(3))+" mm · 接触点 ("+Wt(st.value.cx.toFixed(2))+", "+Wt(st.value.cy.toFixed(2))+")",1),j("div",null,"φ₁ = "+Wt(st.value.phi1.toFixed(4))+" rad · φ₂ = "+Wt(st.value.phi2.toFixed(4))+" rad",1),j("div",null,[le("局部干涉面积 = "+Wt(st.value.interferenceArea.toExponential(3))+" mm² ",1),j("b",{class:Zn(st.value.interferes?"bad":"good")},Wt(st.value.interferes?"干涉 ❗":"无干涉 ✅"),3)])])):nn("",!0),N.expired?(we(),Le("div",dA,"⚠️ 历史轨迹：案例参数已修改，仅供回看，不代表当前参数的有效结果。")):nn("",!0)])):nn("",!0)]),j("section",null,[E[62]||(E[62]=j("h2",null,"显示选项",-1)),j("label",pA,[qe(j("input",{type:"checkbox","onUpdate:modelValue":E[17]||(E[17]=O=>A.showPitchCircle=O)},null,512),[[Mr,A.showPitchCircle]]),E[56]||(E[56]=le(" 节圆/分度圆",-1))]),j("label",mA,[qe(j("input",{type:"checkbox","onUpdate:modelValue":E[18]||(E[18]=O=>A.showBaseCircle=O)},null,512),[[Mr,A.showBaseCircle]]),E[57]||(E[57]=le(" 基圆",-1))]),j("label",gA,[qe(j("input",{type:"checkbox","onUpdate:modelValue":E[19]||(E[19]=O=>A.showAddendumCircle=O)},null,512),[[Mr,A.showAddendumCircle]]),E[58]||(E[58]=le(" 齿顶圆",-1))]),j("label",_A,[qe(j("input",{type:"checkbox","onUpdate:modelValue":E[20]||(E[20]=O=>A.showDedendumCircle=O)},null,512),[[Mr,A.showDedendumCircle]]),E[59]||(E[59]=le(" 齿根圆",-1))]),j("label",vA,[qe(j("input",{type:"checkbox","onUpdate:modelValue":E[21]||(E[21]=O=>A.showActionLine=O)},null,512),[[Mr,A.showActionLine]]),E[60]||(E[60]=le(" 啮合线（理论/实际）",-1))]),j("label",xA,[qe(j("input",{type:"checkbox","onUpdate:modelValue":E[22]||(E[22]=O=>A.showContact=O)},null,512),[[Mr,A.showContact]]),E[61]||(E[61]=le(" 接触点",-1))])]),j("section",null,[E[63]||(E[63]=j("h2",null,"核对样本",-1)),j("div",SA,[j("button",{onClick:E[23]||(E[23]=O=>Et(20,40))},"20/40 标准"),j("button",{onClick:E[24]||(E[24]=O=>Et(17,17))},"17/17 临界"),j("button",{onClick:E[25]||(E[25]=O=>Et(16,40))},"16/40 根切"),j("button",{onClick:E[26]||(E[26]=O=>Et(12,40))},"12/40 极少齿")])])]),j("section",MA,[j("div",{ref_key:"host",ref:At,class:"canvas-host"},null,512),j("div",yA,[L.value?(we(),Le("div",bA,[j("table",null,[j("thead",null,[j("tr",null,[E[64]||(E[64]=j("th",null,null,-1)),j("th",null,"齿轮 1（z₁="+Wt(e.z1)+"）",1),j("th",null,"齿轮 2（z₂="+Wt(e.z2)+"）",1)])]),j("tbody",null,[j("tr",null,[E[65]||(E[65]=j("td",null,"分度圆直径 d",-1)),j("td",null,Wt(K(L.value.g1.pitchR*2)),1),j("td",null,Wt(K(L.value.g2.pitchR*2)),1)]),j("tr",null,[E[66]||(E[66]=j("td",null,"基圆直径 d_b",-1)),j("td",null,Wt(K(L.value.g1.baseR*2)),1),j("td",null,Wt(K(L.value.g2.baseR*2)),1)]),j("tr",null,[E[67]||(E[67]=j("td",null,"齿顶圆 d_a",-1)),j("td",null,Wt(K(L.value.g1.addendumR*2)),1),j("td",null,Wt(K(L.value.g2.addendumR*2)),1)]),j("tr",null,[E[68]||(E[68]=j("td",null,"齿根圆 d_f",-1)),j("td",null,Wt(K(L.value.g1.dedendumR*2)),1),j("td",null,Wt(K(L.value.g2.dedendumR*2)),1)]),j("tr",null,[E[69]||(E[69]=j("td",null,"齿距 p = πm",-1)),j("td",null,Wt(K(L.value.g1.circularPitch)),1),j("td",null,Wt(K(L.value.g2.circularPitch)),1)]),j("tr",null,[E[70]||(E[70]=j("td",null,"基节 p_b",-1)),j("td",null,Wt(K(L.value.g1.basePitch)),1),j("td",null,Wt(K(L.value.g2.basePitch)),1)]),j("tr",null,[E[71]||(E[71]=j("td",null,"齿顶压力角 α_a",-1)),j("td",null,Wt((L.value.g1.alphaTip/Dn(tr)).toFixed(2))+"°",1),j("td",null,Wt((L.value.g2.alphaTip/Dn(tr)).toFixed(2))+"°",1)]),j("tr",null,[j("td",null,"根切风险 (z<"+Wt(L.value.g1.zMinValue.toFixed(1))+")",1),j("td",{class:Zn(L.value.g1.undercut?"bad":"good")},Wt(L.value.g1.undercut?"根切 ❗":"安全"),3),j("td",{class:Zn(L.value.g2.undercut?"bad":"good")},Wt(L.value.g2.undercut?"根切 ❗":"安全"),3)])])]),j("div",EA,[E[81]||(E[81]=j("h3",null,"啮合检查",-1)),j("div",null,[E[72]||(E[72]=le("标准中心距 a₀：",-1)),j("b",null,Wt(K(L.value.mesh.a0)),1)]),j("div",null,[E[73]||(E[73]=le("实际中心距 a：",-1)),j("b",null,Wt(K(L.value.mesh.a)),1),le("（Δa = "+Wt(K(L.value.mesh.deltaA))+"）",1)]),j("div",null,[E[74]||(E[74]=le("啮合角 α′：",-1)),j("b",null,Wt((L.value.mesh.alphaPrime/Dn(tr)).toFixed(3))+"°",1)]),j("div",null,[E[75]||(E[75]=le("节圆半径 r₁′/r₂′：",-1)),j("b",null,Wt(K(L.value.mesh.pitchR1))+" / "+Wt(K(L.value.mesh.pitchR2)),1)]),j("div",null,[E[76]||(E[76]=le("实际啮合线长度 g_α：",-1)),j("b",null,Wt(K(L.value.mesh.pathOfContact)),1)]),j("div",null,[E[77]||(E[77]=le("重合度 ε_α = g_α/p_b：",-1)),j("b",{class:Zn(L.value.mesh.contactRatio<1?"bad":"good")},Wt(L.value.mesh.contactRatio.toFixed(3)),3)]),j("div",null,[E[78]||(E[78]=le("圆周/法向侧隙：",-1)),j("b",null,Wt(K(L.value.mesh.backlashTangential))+" / "+Wt(K(L.value.mesh.backlashNormal)),1)]),j("div",null,[E[79]||(E[79]=le("顶隙 c：",-1)),j("b",null,Wt(K(L.value.mesh.clearance12)),1)]),j("div",null,[E[80]||(E[80]=le("基节一致：",-1)),j("b",{class:Zn(L.value.mesh.basePitchMatch?"good":"bad")},Wt(L.value.mesh.basePitchMatch?"是 ✅":"否 ❌"),3)]),L.value.mesh.warnings.length?(we(),Le("ul",TA,[(we(!0),Le(Sn,null,Ua(L.value.mesh.warnings,(O,_t)=>(we(),Le("li",{key:_t},"⚠️ "+Wt(O),1))),128))])):nn("",!0),E[82]||(E[82]=j("div",{class:"formula"}," 渐开线：x=r_b(sin t−t cos t)，y=r_b(cos t+t sin t)；inv(α)=tanα−α； 啮合要求基节相等 + 相位共法线，且 r_b1·Δφ₁ = −r_b2·Δφ₂（不是只按转速比旋转）。 ",-1))])])):nn("",!0)])]),j("aside",AA,[j("section",null,[E[84]||(E[84]=j("h2",null,"案例（IndexedDB）",-1)),qe(j("input",{"onUpdate:modelValue":E[27]||(E[27]=O=>k.value=O),placeholder:"案例名称"},null,512),[[On,k.value]]),qe(j("textarea",{"onUpdate:modelValue":E[28]||(E[28]=O=>nt.value=O),placeholder:"备注（可选）",rows:"2"},null,512),[[On,nt.value]]),j("div",wA,[j("button",{onClick:E[29]||(E[29]=O=>P(!0))},"保存（含轮廓）"),j("button",{onClick:E[30]||(E[30]=O=>P(!1))},"仅参数")]),j("div",CA,[j("button",{onClick:E[31]||(E[31]=O=>wt(!0))},"导出 JSON+轮廓"),j("button",{onClick:E[32]||(E[32]=O=>wt(!1))},"导出参数")]),j("label",RA,[E[83]||(E[83]=le("导入 JSON ",-1)),j("input",{type:"file",accept:"application/json,.json",onChange:g,hidden:""},null,32)])]),j("section",null,[E[85]||(E[85]=j("h2",null,"已存案例",-1)),j("ul",PA,[(we(!0),Le(Sn,null,Ua(G.value,O=>(we(),Le("li",{key:O.id},[j("div",DA,[j("b",null,Wt(O.name),1),j("span",null,Wt(O.gear1.z)+"/"+Wt(O.gear2.z)+" · m="+Wt(O.gear1.module)+" · α="+Wt(O.gear1.alphaDeg)+"°"+Wt(O.outlines?" · 含轮廓":""),1)]),j("div",LA,[j("button",{onClick:_t=>Ct(O)},"载入",8,IA),j("button",{class:"del",onClick:_t=>T(O.id)},"删",8,UA)])]))),128)),G.value.length?nn("",!0):(we(),Le("li",NA,"暂无案例"))])])])])]))}});vv(FA).mount("#app");
