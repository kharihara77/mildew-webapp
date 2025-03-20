function Vh(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(r,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function Uh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lp={exports:{}},Vi={},sp={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qa=Symbol.for("react.element"),Hh=Symbol.for("react.portal"),Bh=Symbol.for("react.fragment"),qh=Symbol.for("react.strict_mode"),Wh=Symbol.for("react.profiler"),Gh=Symbol.for("react.provider"),Kh=Symbol.for("react.context"),Yh=Symbol.for("react.forward_ref"),Qh=Symbol.for("react.suspense"),Xh=Symbol.for("react.memo"),Zh=Symbol.for("react.lazy"),Yc=Symbol.iterator;function Jh(e){return e===null||typeof e!="object"?null:(e=Yc&&e[Yc]||e["@@iterator"],typeof e=="function"?e:null)}var up={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cp=Object.assign,dp={};function Lr(e,n,t){this.props=e,this.context=n,this.refs=dp,this.updater=t||up}Lr.prototype.isReactComponent={};Lr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fp(){}fp.prototype=Lr.prototype;function Du(e,n,t){this.props=e,this.context=n,this.refs=dp,this.updater=t||up}var ju=Du.prototype=new fp;ju.constructor=Du;cp(ju,Lr.prototype);ju.isPureReactComponent=!0;var Qc=Array.isArray,pp=Object.prototype.hasOwnProperty,Nu={current:null},mp={key:!0,ref:!0,__self:!0,__source:!0};function hp(e,n,t){var r,a={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)pp.call(n,r)&&!mp.hasOwnProperty(r)&&(a[r]=n[r]);var s=arguments.length-2;if(s===1)a.children=t;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:qa,type:e,key:o,ref:i,props:a,_owner:Nu.current}}function eg(e,n){return{$$typeof:qa,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ru(e){return typeof e=="object"&&e!==null&&e.$$typeof===qa}function ng(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Xc=/\/+/g;function kl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?ng(""+e.key):n.toString(36)}function Lo(e,n,t,r,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case qa:case Hh:i=!0}}if(i)return i=e,a=a(i),e=r===""?"."+kl(i,0):r,Qc(a)?(t="",e!=null&&(t=e.replace(Xc,"$&/")+"/"),Lo(a,n,t,"",function(u){return u})):a!=null&&(Ru(a)&&(a=eg(a,t+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Xc,"$&/")+"/")+e)),n.push(a)),1;if(i=0,r=r===""?".":r+":",Qc(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+kl(o,s);i+=Lo(o,n,t,l,a)}else if(l=Jh(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+kl(o,s++),i+=Lo(o,n,t,l,a);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function ao(e,n,t){if(e==null)return e;var r=[],a=0;return Lo(e,r,"","",function(o){return n.call(t,o,a++)}),r}function tg(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var qe={current:null},$o={transition:null},rg={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:$o,ReactCurrentOwner:Nu};function gp(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:ao,forEach:function(e,n,t){ao(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ao(e,function(){n++}),n},toArray:function(e){return ao(e,function(n){return n})||[]},only:function(e){if(!Ru(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Lr;H.Fragment=Bh;H.Profiler=Wh;H.PureComponent=Du;H.StrictMode=qh;H.Suspense=Qh;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rg;H.act=gp;H.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=cp({},e.props),a=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=Nu.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in n)pp.call(n,l)&&!mp.hasOwnProperty(l)&&(r[l]=n[l]===void 0&&s!==void 0?s[l]:n[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:qa,type:e.type,key:a,ref:o,props:r,_owner:i}};H.createContext=function(e){return e={$$typeof:Kh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gh,_context:e},e.Consumer=e};H.createElement=hp;H.createFactory=function(e){var n=hp.bind(null,e);return n.type=e,n};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Yh,render:e}};H.isValidElement=Ru;H.lazy=function(e){return{$$typeof:Zh,_payload:{_status:-1,_result:e},_init:tg}};H.memo=function(e,n){return{$$typeof:Xh,type:e,compare:n===void 0?null:n}};H.startTransition=function(e){var n=$o.transition;$o.transition={};try{e()}finally{$o.transition=n}};H.unstable_act=gp;H.useCallback=function(e,n){return qe.current.useCallback(e,n)};H.useContext=function(e){return qe.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return qe.current.useDeferredValue(e)};H.useEffect=function(e,n){return qe.current.useEffect(e,n)};H.useId=function(){return qe.current.useId()};H.useImperativeHandle=function(e,n,t){return qe.current.useImperativeHandle(e,n,t)};H.useInsertionEffect=function(e,n){return qe.current.useInsertionEffect(e,n)};H.useLayoutEffect=function(e,n){return qe.current.useLayoutEffect(e,n)};H.useMemo=function(e,n){return qe.current.useMemo(e,n)};H.useReducer=function(e,n,t){return qe.current.useReducer(e,n,t)};H.useRef=function(e){return qe.current.useRef(e)};H.useState=function(e){return qe.current.useState(e)};H.useSyncExternalStore=function(e,n,t){return qe.current.useSyncExternalStore(e,n,t)};H.useTransition=function(){return qe.current.useTransition()};H.version="18.3.1";sp.exports=H;var S=sp.exports;const X=Uh(S),Zc=Vh({__proto__:null,default:X},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag=S,og=Symbol.for("react.element"),ig=Symbol.for("react.fragment"),lg=Object.prototype.hasOwnProperty,sg=ag.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ug={key:!0,ref:!0,__self:!0,__source:!0};function vp(e,n,t){var r,a={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)lg.call(n,r)&&!ug.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:og,type:e,key:o,ref:i,props:a,_owner:sg.current}}Vi.Fragment=ig;Vi.jsx=vp;Vi.jsxs=vp;lp.exports=Vi;var E=lp.exports,ms={},yp={exports:{}},un={},bp={exports:{}},kp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(T,I){var N=T.length;T.push(I);e:for(;0<N;){var B=N-1>>>1,V=T[B];if(0<a(V,I))T[B]=I,T[N]=V,N=B;else break e}}function t(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var I=T[0],N=T.pop();if(N!==I){T[0]=N;e:for(var B=0,V=T.length,Se=V>>>1;B<Se;){var Ae=2*(B+1)-1,fn=T[Ae],ye=Ae+1,en=T[ye];if(0>a(fn,N))ye<V&&0>a(en,fn)?(T[B]=en,T[ye]=N,B=ye):(T[B]=fn,T[Ae]=N,B=Ae);else if(ye<V&&0>a(en,N))T[B]=en,T[ye]=N,B=ye;else break e}}return I}function a(T,I){var N=T.sortIndex-I.sortIndex;return N!==0?N:T.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],u=[],c=1,d=null,h=3,y=!1,g=!1,m=!1,b=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(T){for(var I=t(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=T)r(u),I.sortIndex=I.expirationTime,n(l,I);else break;I=t(u)}}function k(T){if(m=!1,v(T),!g)if(t(l)!==null)g=!0,ee(x);else{var I=t(u);I!==null&&Me(k,I.startTime-T)}}function x(T,I){g=!1,m&&(m=!1,f(O),O=-1),y=!0;var N=h;try{for(v(I),d=t(l);d!==null&&(!(d.expirationTime>I)||T&&!Y());){var B=d.callback;if(typeof B=="function"){d.callback=null,h=d.priorityLevel;var V=B(d.expirationTime<=I);I=e.unstable_now(),typeof V=="function"?d.callback=V:d===t(l)&&r(l),v(I)}else r(l);d=t(l)}if(d!==null)var Se=!0;else{var Ae=t(u);Ae!==null&&Me(k,Ae.startTime-I),Se=!1}return Se}finally{d=null,h=N,y=!1}}var C=!1,w=null,O=-1,A=5,_=-1;function Y(){return!(e.unstable_now()-_<A)}function L(){if(w!==null){var T=e.unstable_now();_=T;var I=!0;try{I=w(!0,T)}finally{I?xe():(C=!1,w=null)}}else C=!1}var xe;if(typeof p=="function")xe=function(){p(L)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,le=ze.port2;ze.port1.onmessage=L,xe=function(){le.postMessage(null)}}else xe=function(){b(L,0)};function ee(T){w=T,C||(C=!0,xe())}function Me(T,I){O=b(function(){T(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,ee(x))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var N=h;h=I;try{return T()}finally{h=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,I){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var N=h;h=T;try{return I()}finally{h=N}},e.unstable_scheduleCallback=function(T,I,N){var B=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?B+N:B):N=B,T){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=N+V,T={id:c++,callback:I,priorityLevel:T,startTime:N,expirationTime:V,sortIndex:-1},N>B?(T.sortIndex=N,n(u,T),t(l)===null&&T===t(u)&&(m?(f(O),O=-1):m=!0,Me(k,N-B))):(T.sortIndex=V,n(l,T),g||y||(g=!0,ee(x))),T},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(T){var I=h;return function(){var N=h;h=I;try{return T.apply(this,arguments)}finally{h=N}}}})(kp);bp.exports=kp;var cg=bp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg=S,sn=cg;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wp=new Set,xa={};function er(e,n){zr(e,n),zr(e+"Capture",n)}function zr(e,n){for(xa[e]=n,e=0;e<n.length;e++)wp.add(n[e])}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hs=Object.prototype.hasOwnProperty,fg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jc={},ed={};function pg(e){return hs.call(ed,e)?!0:hs.call(Jc,e)?!1:fg.test(e)?ed[e]=!0:(Jc[e]=!0,!1)}function mg(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hg(e,n,t,r){if(n===null||typeof n>"u"||mg(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function We(e,n,t,r,a,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];je[n]=new We(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var Lu=/[\-:]([a-z])/g;function $u(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Lu,$u);je[n]=new We(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Lu,$u);je[n]=new We(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Lu,$u);je[n]=new We(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fu(e,n,t,r){var a=je.hasOwnProperty(n)?je[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(hg(n,t,a,r)&&(t=null),r||a===null?pg(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var tt=dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),lr=Symbol.for("react.portal"),sr=Symbol.for("react.fragment"),Vu=Symbol.for("react.strict_mode"),gs=Symbol.for("react.profiler"),xp=Symbol.for("react.provider"),Sp=Symbol.for("react.context"),Uu=Symbol.for("react.forward_ref"),vs=Symbol.for("react.suspense"),ys=Symbol.for("react.suspense_list"),Hu=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),Cp=Symbol.for("react.offscreen"),nd=Symbol.iterator;function Hr(e){return e===null||typeof e!="object"?null:(e=nd&&e[nd]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,wl;function oa(e){if(wl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);wl=n&&n[1]||""}return`
`+wl+e}var xl=!1;function Sl(e,n){if(!e||xl)return"";xl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=r.stack.split(`
`),i=a.length-1,s=o.length-1;1<=i&&0<=s&&a[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(a[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||a[i]!==o[s]){var l=`
`+a[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{xl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?oa(e):""}function gg(e){switch(e.tag){case 5:return oa(e.type);case 16:return oa("Lazy");case 13:return oa("Suspense");case 19:return oa("SuspenseList");case 0:case 2:case 15:return e=Sl(e.type,!1),e;case 11:return e=Sl(e.type.render,!1),e;case 1:return e=Sl(e.type,!0),e;default:return""}}function bs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sr:return"Fragment";case lr:return"Portal";case gs:return"Profiler";case Vu:return"StrictMode";case vs:return"Suspense";case ys:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sp:return(e.displayName||"Context")+".Consumer";case xp:return(e._context.displayName||"Context")+".Provider";case Uu:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hu:return n=e.displayName||null,n!==null?n:bs(e.type)||"Memo";case ct:n=e._payload,e=e._init;try{return bs(e(n))}catch{}}return null}function vg(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bs(n);case 8:return n===Vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Op(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function yg(e){var n=Op(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function io(e){e._valueTracker||(e._valueTracker=yg(e))}function Pp(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Op(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ti(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ks(e,n){var t=n.checked;return ce({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function td(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Pt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Tp(e,n){n=n.checked,n!=null&&Fu(e,"checked",n,!1)}function ws(e,n){Tp(e,n);var t=Pt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?xs(e,n.type,t):n.hasOwnProperty("defaultValue")&&xs(e,n.type,Pt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function rd(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function xs(e,n,t){(n!=="number"||ti(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var ia=Array.isArray;function kr(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Pt(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Ss(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return ce({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ad(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(ia(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Pt(t)}}function Ep(e,n){var t=Pt(n.value),r=Pt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function od(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function zp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cs(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?zp(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lo,Mp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=lo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Sa(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bg=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(e){bg.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),fa[n]=fa[e]})});function Ap(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||fa.hasOwnProperty(e)&&fa[e]?(""+n).trim():n+"px"}function _p(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=Ap(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var kg=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Os(e,n){if(n){if(kg[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function Ps(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ts=null;function Bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Es=null,wr=null,xr=null;function id(e){if(e=Ka(e)){if(typeof Es!="function")throw Error(P(280));var n=e.stateNode;n&&(n=Wi(n),Es(e.stateNode,e.type,n))}}function Ip(e){wr?xr?xr.push(e):xr=[e]:wr=e}function Dp(){if(wr){var e=wr,n=xr;if(xr=wr=null,id(e),n)for(e=0;e<n.length;e++)id(n[e])}}function jp(e,n){return e(n)}function Np(){}var Cl=!1;function Rp(e,n,t){if(Cl)return e(n,t);Cl=!0;try{return jp(e,n,t)}finally{Cl=!1,(wr!==null||xr!==null)&&(Np(),Dp())}}function Ca(e,n){var t=e.stateNode;if(t===null)return null;var r=Wi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var zs=!1;if(Xn)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){zs=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{zs=!1}function wg(e,n,t,r,a,o,i,s,l){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(c){this.onError(c)}}var pa=!1,ri=null,ai=!1,Ms=null,xg={onError:function(e){pa=!0,ri=e}};function Sg(e,n,t,r,a,o,i,s,l){pa=!1,ri=null,wg.apply(xg,arguments)}function Cg(e,n,t,r,a,o,i,s,l){if(Sg.apply(this,arguments),pa){if(pa){var u=ri;pa=!1,ri=null}else throw Error(P(198));ai||(ai=!0,Ms=u)}}function nr(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Lp(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ld(e){if(nr(e)!==e)throw Error(P(188))}function Og(e){var n=e.alternate;if(!n){if(n=nr(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===t)return ld(a),e;if(o===r)return ld(a),n;o=o.sibling}throw Error(P(188))}if(t.return!==r.return)t=a,r=o;else{for(var i=!1,s=a.child;s;){if(s===t){i=!0,t=a,r=o;break}if(s===r){i=!0,r=a,t=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===t){i=!0,t=o,r=a;break}if(s===r){i=!0,r=o,t=a;break}s=s.sibling}if(!i)throw Error(P(189))}}if(t.alternate!==r)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function $p(e){return e=Og(e),e!==null?Fp(e):null}function Fp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Fp(e);if(n!==null)return n;e=e.sibling}return null}var Vp=sn.unstable_scheduleCallback,sd=sn.unstable_cancelCallback,Pg=sn.unstable_shouldYield,Tg=sn.unstable_requestPaint,me=sn.unstable_now,Eg=sn.unstable_getCurrentPriorityLevel,qu=sn.unstable_ImmediatePriority,Up=sn.unstable_UserBlockingPriority,oi=sn.unstable_NormalPriority,zg=sn.unstable_LowPriority,Hp=sn.unstable_IdlePriority,Ui=null,jn=null;function Mg(e){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(Ui,e,void 0,(e.current.flags&128)===128)}catch{}}var Tn=Math.clz32?Math.clz32:Ig,Ag=Math.log,_g=Math.LN2;function Ig(e){return e>>>=0,e===0?32:31-(Ag(e)/_g|0)|0}var so=64,uo=4194304;function la(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ii(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var s=i&~a;s!==0?r=la(s):(o&=i,o!==0&&(r=la(o)))}else i=t&~a,i!==0?r=la(i):o!==0&&(r=la(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,o=n&-n,a>=o||a===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Tn(n),a=1<<t,r|=e[t],n&=~a;return r}function Dg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jg(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Tn(o),s=1<<i,l=a[i];l===-1?(!(s&t)||s&r)&&(a[i]=Dg(s,n)):l<=n&&(e.expiredLanes|=s),o&=~s}}function As(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bp(){var e=so;return so<<=1,!(so&4194240)&&(so=64),e}function Ol(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Wa(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Tn(n),e[n]=t}function Ng(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Tn(t),o=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~o}}function Wu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Tn(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var Z=0;function qp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wp,Gu,Gp,Kp,Yp,_s=!1,co=[],vt=null,yt=null,bt=null,Oa=new Map,Pa=new Map,ft=[],Rg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ud(e,n){switch(e){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":yt=null;break;case"mouseover":case"mouseout":bt=null;break;case"pointerover":case"pointerout":Oa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pa.delete(n.pointerId)}}function qr(e,n,t,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},n!==null&&(n=Ka(n),n!==null&&Gu(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function Lg(e,n,t,r,a){switch(n){case"focusin":return vt=qr(vt,e,n,t,r,a),!0;case"dragenter":return yt=qr(yt,e,n,t,r,a),!0;case"mouseover":return bt=qr(bt,e,n,t,r,a),!0;case"pointerover":var o=a.pointerId;return Oa.set(o,qr(Oa.get(o)||null,e,n,t,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Pa.set(o,qr(Pa.get(o)||null,e,n,t,r,a)),!0}return!1}function Qp(e){var n=$t(e.target);if(n!==null){var t=nr(n);if(t!==null){if(n=t.tag,n===13){if(n=Lp(t),n!==null){e.blockedOn=n,Yp(e.priority,function(){Gp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Is(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ts=r,t.target.dispatchEvent(r),Ts=null}else return n=Ka(t),n!==null&&Gu(n),e.blockedOn=t,!1;n.shift()}return!0}function cd(e,n,t){Fo(e)&&t.delete(n)}function $g(){_s=!1,vt!==null&&Fo(vt)&&(vt=null),yt!==null&&Fo(yt)&&(yt=null),bt!==null&&Fo(bt)&&(bt=null),Oa.forEach(cd),Pa.forEach(cd)}function Wr(e,n){e.blockedOn===n&&(e.blockedOn=null,_s||(_s=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,$g)))}function Ta(e){function n(a){return Wr(a,e)}if(0<co.length){Wr(co[0],e);for(var t=1;t<co.length;t++){var r=co[t];r.blockedOn===e&&(r.blockedOn=null)}}for(vt!==null&&Wr(vt,e),yt!==null&&Wr(yt,e),bt!==null&&Wr(bt,e),Oa.forEach(n),Pa.forEach(n),t=0;t<ft.length;t++)r=ft[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<ft.length&&(t=ft[0],t.blockedOn===null);)Qp(t),t.blockedOn===null&&ft.shift()}var Sr=tt.ReactCurrentBatchConfig,li=!0;function Fg(e,n,t,r){var a=Z,o=Sr.transition;Sr.transition=null;try{Z=1,Ku(e,n,t,r)}finally{Z=a,Sr.transition=o}}function Vg(e,n,t,r){var a=Z,o=Sr.transition;Sr.transition=null;try{Z=4,Ku(e,n,t,r)}finally{Z=a,Sr.transition=o}}function Ku(e,n,t,r){if(li){var a=Is(e,n,t,r);if(a===null)jl(e,n,r,si,t),ud(e,r);else if(Lg(a,e,n,t,r))r.stopPropagation();else if(ud(e,r),n&4&&-1<Rg.indexOf(e)){for(;a!==null;){var o=Ka(a);if(o!==null&&Wp(o),o=Is(e,n,t,r),o===null&&jl(e,n,r,si,t),o===a)break;a=o}a!==null&&r.stopPropagation()}else jl(e,n,r,null,t)}}var si=null;function Is(e,n,t,r){if(si=null,e=Bu(r),e=$t(e),e!==null)if(n=nr(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Lp(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return si=e,null}function Xp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Eg()){case qu:return 1;case Up:return 4;case oi:case zg:return 16;case Hp:return 536870912;default:return 16}default:return 16}}var ht=null,Yu=null,Vo=null;function Zp(){if(Vo)return Vo;var e,n=Yu,t=n.length,r,a="value"in ht?ht.value:ht.textContent,o=a.length;for(e=0;e<t&&n[e]===a[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===a[o-r];r++);return Vo=a.slice(e,1<r?1-r:void 0)}function Uo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fo(){return!0}function dd(){return!1}function cn(e){function n(t,r,a,o,i){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fo:dd,this.isPropagationStopped=dd,this}return ce(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),n}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qu=cn($r),Ga=ce({},$r,{view:0,detail:0}),Ug=cn(Ga),Pl,Tl,Gr,Hi=ce({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gr&&(Gr&&e.type==="mousemove"?(Pl=e.screenX-Gr.screenX,Tl=e.screenY-Gr.screenY):Tl=Pl=0,Gr=e),Pl)},movementY:function(e){return"movementY"in e?e.movementY:Tl}}),fd=cn(Hi),Hg=ce({},Hi,{dataTransfer:0}),Bg=cn(Hg),qg=ce({},Ga,{relatedTarget:0}),El=cn(qg),Wg=ce({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),Gg=cn(Wg),Kg=ce({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yg=cn(Kg),Qg=ce({},$r,{data:0}),pd=cn(Qg),Xg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e1(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Jg[e])?!!n[e]:!1}function Xu(){return e1}var n1=ce({},Ga,{key:function(e){if(e.key){var n=Xg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Uo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(e){return e.type==="keypress"?Uo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Uo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),t1=cn(n1),r1=ce({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),md=cn(r1),a1=ce({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),o1=cn(a1),i1=ce({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),l1=cn(i1),s1=ce({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),u1=cn(s1),c1=[9,13,27,32],Zu=Xn&&"CompositionEvent"in window,ma=null;Xn&&"documentMode"in document&&(ma=document.documentMode);var d1=Xn&&"TextEvent"in window&&!ma,Jp=Xn&&(!Zu||ma&&8<ma&&11>=ma),hd=" ",gd=!1;function e0(e,n){switch(e){case"keyup":return c1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function f1(e,n){switch(e){case"compositionend":return n0(n);case"keypress":return n.which!==32?null:(gd=!0,hd);case"textInput":return e=n.data,e===hd&&gd?null:e;default:return null}}function p1(e,n){if(ur)return e==="compositionend"||!Zu&&e0(e,n)?(e=Zp(),Vo=Yu=ht=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jp&&n.locale!=="ko"?null:n.data;default:return null}}var m1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!m1[e.type]:n==="textarea"}function t0(e,n,t,r){Ip(r),n=ui(n,"onChange"),0<n.length&&(t=new Qu("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var ha=null,Ea=null;function h1(e){p0(e,0)}function Bi(e){var n=fr(e);if(Pp(n))return e}function g1(e,n){if(e==="change")return n}var r0=!1;if(Xn){var zl;if(Xn){var Ml="oninput"in document;if(!Ml){var yd=document.createElement("div");yd.setAttribute("oninput","return;"),Ml=typeof yd.oninput=="function"}zl=Ml}else zl=!1;r0=zl&&(!document.documentMode||9<document.documentMode)}function bd(){ha&&(ha.detachEvent("onpropertychange",a0),Ea=ha=null)}function a0(e){if(e.propertyName==="value"&&Bi(Ea)){var n=[];t0(n,Ea,e,Bu(e)),Rp(h1,n)}}function v1(e,n,t){e==="focusin"?(bd(),ha=n,Ea=t,ha.attachEvent("onpropertychange",a0)):e==="focusout"&&bd()}function y1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bi(Ea)}function b1(e,n){if(e==="click")return Bi(n)}function k1(e,n){if(e==="input"||e==="change")return Bi(n)}function w1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var zn=typeof Object.is=="function"?Object.is:w1;function za(e,n){if(zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!hs.call(n,a)||!zn(e[a],n[a]))return!1}return!0}function kd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wd(e,n){var t=kd(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=kd(t)}}function o0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?o0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function i0(){for(var e=window,n=ti();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ti(e.document)}return n}function Ju(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function x1(e){var n=i0(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&o0(t.ownerDocument.documentElement,t)){if(r!==null&&Ju(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=wd(t,o);var i=wd(t,r);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var S1=Xn&&"documentMode"in document&&11>=document.documentMode,cr=null,Ds=null,ga=null,js=!1;function xd(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;js||cr==null||cr!==ti(r)||(r=cr,"selectionStart"in r&&Ju(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ga&&za(ga,r)||(ga=r,r=ui(Ds,"onSelect"),0<r.length&&(n=new Qu("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=cr)))}function po(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var dr={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},Al={},l0={};Xn&&(l0=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function qi(e){if(Al[e])return Al[e];if(!dr[e])return e;var n=dr[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in l0)return Al[e]=n[t];return e}var s0=qi("animationend"),u0=qi("animationiteration"),c0=qi("animationstart"),d0=qi("transitionend"),f0=new Map,Sd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,n){f0.set(e,n),er(n,[e])}for(var _l=0;_l<Sd.length;_l++){var Il=Sd[_l],C1=Il.toLowerCase(),O1=Il[0].toUpperCase()+Il.slice(1);Mt(C1,"on"+O1)}Mt(s0,"onAnimationEnd");Mt(u0,"onAnimationIteration");Mt(c0,"onAnimationStart");Mt("dblclick","onDoubleClick");Mt("focusin","onFocus");Mt("focusout","onBlur");Mt(d0,"onTransitionEnd");zr("onMouseEnter",["mouseout","mouseover"]);zr("onMouseLeave",["mouseout","mouseover"]);zr("onPointerEnter",["pointerout","pointerover"]);zr("onPointerLeave",["pointerout","pointerover"]);er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));er("onBeforeInput",["compositionend","keypress","textInput","paste"]);er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P1=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Cd(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Cg(r,n,void 0,e),e.currentTarget=null}function p0(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var s=r[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&a.isPropagationStopped())break e;Cd(a,s,u),o=l}else for(i=0;i<r.length;i++){if(s=r[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&a.isPropagationStopped())break e;Cd(a,s,u),o=l}}}if(ai)throw e=Ms,ai=!1,Ms=null,e}function re(e,n){var t=n[Fs];t===void 0&&(t=n[Fs]=new Set);var r=e+"__bubble";t.has(r)||(m0(n,e,2,!1),t.add(r))}function Dl(e,n,t){var r=0;n&&(r|=4),m0(t,e,r,n)}var mo="_reactListening"+Math.random().toString(36).slice(2);function Ma(e){if(!e[mo]){e[mo]=!0,wp.forEach(function(t){t!=="selectionchange"&&(P1.has(t)||Dl(t,!1,e),Dl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[mo]||(n[mo]=!0,Dl("selectionchange",!1,n))}}function m0(e,n,t,r){switch(Xp(n)){case 1:var a=Fg;break;case 4:a=Vg;break;default:a=Ku}t=a.bind(null,n,t,e),a=void 0,!zs||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function jl(e,n,t,r,a){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;i=i.return}for(;s!==null;){if(i=$t(s),i===null)return;if(l=i.tag,l===5||l===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Rp(function(){var u=o,c=Bu(t),d=[];e:{var h=f0.get(e);if(h!==void 0){var y=Qu,g=e;switch(e){case"keypress":if(Uo(t)===0)break e;case"keydown":case"keyup":y=t1;break;case"focusin":g="focus",y=El;break;case"focusout":g="blur",y=El;break;case"beforeblur":case"afterblur":y=El;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Bg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=o1;break;case s0:case u0:case c0:y=Gg;break;case d0:y=l1;break;case"scroll":y=Ug;break;case"wheel":y=u1;break;case"copy":case"cut":case"paste":y=Yg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=md}var m=(n&4)!==0,b=!m&&e==="scroll",f=m?h!==null?h+"Capture":null:h;m=[];for(var p=u,v;p!==null;){v=p;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,f!==null&&(k=Ca(p,f),k!=null&&m.push(Aa(p,k,v)))),b)break;p=p.return}0<m.length&&(h=new y(h,g,null,t,c),d.push({event:h,listeners:m}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&t!==Ts&&(g=t.relatedTarget||t.fromElement)&&($t(g)||g[Zn]))break e;if((y||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,y?(g=t.relatedTarget||t.toElement,y=u,g=g?$t(g):null,g!==null&&(b=nr(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(m=fd,k="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(m=md,k="onPointerLeave",f="onPointerEnter",p="pointer"),b=y==null?h:fr(y),v=g==null?h:fr(g),h=new m(k,p+"leave",y,t,c),h.target=b,h.relatedTarget=v,k=null,$t(c)===u&&(m=new m(f,p+"enter",g,t,c),m.target=v,m.relatedTarget=b,k=m),b=k,y&&g)n:{for(m=y,f=g,p=0,v=m;v;v=rr(v))p++;for(v=0,k=f;k;k=rr(k))v++;for(;0<p-v;)m=rr(m),p--;for(;0<v-p;)f=rr(f),v--;for(;p--;){if(m===f||f!==null&&m===f.alternate)break n;m=rr(m),f=rr(f)}m=null}else m=null;y!==null&&Od(d,h,y,m,!1),g!==null&&b!==null&&Od(d,b,g,m,!0)}}e:{if(h=u?fr(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var x=g1;else if(vd(h))if(r0)x=k1;else{x=y1;var C=v1}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=b1);if(x&&(x=x(e,u))){t0(d,x,t,c);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&xs(h,"number",h.value)}switch(C=u?fr(u):window,e){case"focusin":(vd(C)||C.contentEditable==="true")&&(cr=C,Ds=u,ga=null);break;case"focusout":ga=Ds=cr=null;break;case"mousedown":js=!0;break;case"contextmenu":case"mouseup":case"dragend":js=!1,xd(d,t,c);break;case"selectionchange":if(S1)break;case"keydown":case"keyup":xd(d,t,c)}var w;if(Zu)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ur?e0(e,t)&&(O="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(O="onCompositionStart");O&&(Jp&&t.locale!=="ko"&&(ur||O!=="onCompositionStart"?O==="onCompositionEnd"&&ur&&(w=Zp()):(ht=c,Yu="value"in ht?ht.value:ht.textContent,ur=!0)),C=ui(u,O),0<C.length&&(O=new pd(O,e,null,t,c),d.push({event:O,listeners:C}),w?O.data=w:(w=n0(t),w!==null&&(O.data=w)))),(w=d1?f1(e,t):p1(e,t))&&(u=ui(u,"onBeforeInput"),0<u.length&&(c=new pd("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=w))}p0(d,n)})}function Aa(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ui(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Ca(e,t),o!=null&&r.unshift(Aa(e,o,a)),o=Ca(e,n),o!=null&&r.push(Aa(e,o,a))),e=e.return}return r}function rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Od(e,n,t,r,a){for(var o=n._reactName,i=[];t!==null&&t!==r;){var s=t,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,a?(l=Ca(t,o),l!=null&&i.unshift(Aa(t,l,s))):a||(l=Ca(t,o),l!=null&&i.push(Aa(t,l,s)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var T1=/\r\n?/g,E1=/\u0000|\uFFFD/g;function Pd(e){return(typeof e=="string"?e:""+e).replace(T1,`
`).replace(E1,"")}function ho(e,n,t){if(n=Pd(n),Pd(e)!==n&&t)throw Error(P(425))}function ci(){}var Ns=null,Rs=null;function Ls(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $s=typeof setTimeout=="function"?setTimeout:void 0,z1=typeof clearTimeout=="function"?clearTimeout:void 0,Td=typeof Promise=="function"?Promise:void 0,M1=typeof queueMicrotask=="function"?queueMicrotask:typeof Td<"u"?function(e){return Td.resolve(null).then(e).catch(A1)}:$s;function A1(e){setTimeout(function(){throw e})}function Nl(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),Ta(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);Ta(n)}function kt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ed(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),Dn="__reactFiber$"+Fr,_a="__reactProps$"+Fr,Zn="__reactContainer$"+Fr,Fs="__reactEvents$"+Fr,_1="__reactListeners$"+Fr,I1="__reactHandles$"+Fr;function $t(e){var n=e[Dn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Zn]||t[Dn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ed(e);e!==null;){if(t=e[Dn])return t;e=Ed(e)}return n}e=t,t=e.parentNode}return null}function Ka(e){return e=e[Dn]||e[Zn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Wi(e){return e[_a]||null}var Vs=[],pr=-1;function At(e){return{current:e}}function ae(e){0>pr||(e.current=Vs[pr],Vs[pr]=null,pr--)}function ne(e,n){pr++,Vs[pr]=e.current,e.current=n}var Tt={},Fe=At(Tt),Qe=At(!1),Gt=Tt;function Mr(e,n){var t=e.type.contextTypes;if(!t)return Tt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in t)a[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Xe(e){return e=e.childContextTypes,e!=null}function di(){ae(Qe),ae(Fe)}function zd(e,n,t){if(Fe.current!==Tt)throw Error(P(168));ne(Fe,n),ne(Qe,t)}function h0(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(P(108,vg(e)||"Unknown",a));return ce({},t,r)}function fi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tt,Gt=Fe.current,ne(Fe,e),ne(Qe,Qe.current),!0}function Md(e,n,t){var r=e.stateNode;if(!r)throw Error(P(169));t?(e=h0(e,n,Gt),r.__reactInternalMemoizedMergedChildContext=e,ae(Qe),ae(Fe),ne(Fe,e)):ae(Qe),ne(Qe,t)}var Bn=null,Gi=!1,Rl=!1;function g0(e){Bn===null?Bn=[e]:Bn.push(e)}function D1(e){Gi=!0,g0(e)}function _t(){if(!Rl&&Bn!==null){Rl=!0;var e=0,n=Z;try{var t=Bn;for(Z=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Bn=null,Gi=!1}catch(a){throw Bn!==null&&(Bn=Bn.slice(e+1)),Vp(qu,_t),a}finally{Z=n,Rl=!1}}return null}var mr=[],hr=0,pi=null,mi=0,pn=[],mn=0,Kt=null,qn=1,Wn="";function Nt(e,n){mr[hr++]=mi,mr[hr++]=pi,pi=e,mi=n}function v0(e,n,t){pn[mn++]=qn,pn[mn++]=Wn,pn[mn++]=Kt,Kt=e;var r=qn;e=Wn;var a=32-Tn(r)-1;r&=~(1<<a),t+=1;var o=32-Tn(n)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,qn=1<<32-Tn(n)+a|t<<a|r,Wn=o+e}else qn=1<<o|t<<a|r,Wn=e}function ec(e){e.return!==null&&(Nt(e,1),v0(e,1,0))}function nc(e){for(;e===pi;)pi=mr[--hr],mr[hr]=null,mi=mr[--hr],mr[hr]=null;for(;e===Kt;)Kt=pn[--mn],pn[mn]=null,Wn=pn[--mn],pn[mn]=null,qn=pn[--mn],pn[mn]=null}var on=null,rn=null,ie=!1,On=null;function y0(e,n){var t=hn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ad(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,on=e,rn=kt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,on=e,rn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Kt!==null?{id:qn,overflow:Wn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=hn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,on=e,rn=null,!0):!1;default:return!1}}function Us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hs(e){if(ie){var n=rn;if(n){var t=n;if(!Ad(e,n)){if(Us(e))throw Error(P(418));n=kt(t.nextSibling);var r=on;n&&Ad(e,n)?y0(r,t):(e.flags=e.flags&-4097|2,ie=!1,on=e)}}else{if(Us(e))throw Error(P(418));e.flags=e.flags&-4097|2,ie=!1,on=e}}}function _d(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;on=e}function go(e){if(e!==on)return!1;if(!ie)return _d(e),ie=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ls(e.type,e.memoizedProps)),n&&(n=rn)){if(Us(e))throw b0(),Error(P(418));for(;n;)y0(e,n),n=kt(n.nextSibling)}if(_d(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){rn=kt(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}rn=null}}else rn=on?kt(e.stateNode.nextSibling):null;return!0}function b0(){for(var e=rn;e;)e=kt(e.nextSibling)}function Ar(){rn=on=null,ie=!1}function tc(e){On===null?On=[e]:On.push(e)}var j1=tt.ReactCurrentBatchConfig;function Kr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var r=t.stateNode}if(!r)throw Error(P(147,e));var a=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var s=a.refs;i===null?delete s[o]:s[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function vo(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Id(e){var n=e._init;return n(e._payload)}function k0(e){function n(f,p){if(e){var v=f.deletions;v===null?(f.deletions=[p],f.flags|=16):v.push(p)}}function t(f,p){if(!e)return null;for(;p!==null;)n(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function a(f,p){return f=Ct(f,p),f.index=0,f.sibling=null,f}function o(f,p,v){return f.index=v,e?(v=f.alternate,v!==null?(v=v.index,v<p?(f.flags|=2,p):v):(f.flags|=2,p)):(f.flags|=1048576,p)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,p,v,k){return p===null||p.tag!==6?(p=Bl(v,f.mode,k),p.return=f,p):(p=a(p,v),p.return=f,p)}function l(f,p,v,k){var x=v.type;return x===sr?c(f,p,v.props.children,k,v.key):p!==null&&(p.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ct&&Id(x)===p.type)?(k=a(p,v.props),k.ref=Kr(f,p,v),k.return=f,k):(k=Yo(v.type,v.key,v.props,null,f.mode,k),k.ref=Kr(f,p,v),k.return=f,k)}function u(f,p,v,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=ql(v,f.mode,k),p.return=f,p):(p=a(p,v.children||[]),p.return=f,p)}function c(f,p,v,k,x){return p===null||p.tag!==7?(p=qt(v,f.mode,k,x),p.return=f,p):(p=a(p,v),p.return=f,p)}function d(f,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Bl(""+p,f.mode,v),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case oo:return v=Yo(p.type,p.key,p.props,null,f.mode,v),v.ref=Kr(f,null,p),v.return=f,v;case lr:return p=ql(p,f.mode,v),p.return=f,p;case ct:var k=p._init;return d(f,k(p._payload),v)}if(ia(p)||Hr(p))return p=qt(p,f.mode,v,null),p.return=f,p;vo(f,p)}return null}function h(f,p,v,k){var x=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return x!==null?null:s(f,p,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case oo:return v.key===x?l(f,p,v,k):null;case lr:return v.key===x?u(f,p,v,k):null;case ct:return x=v._init,h(f,p,x(v._payload),k)}if(ia(v)||Hr(v))return x!==null?null:c(f,p,v,k,null);vo(f,v)}return null}function y(f,p,v,k,x){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(v)||null,s(p,f,""+k,x);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case oo:return f=f.get(k.key===null?v:k.key)||null,l(p,f,k,x);case lr:return f=f.get(k.key===null?v:k.key)||null,u(p,f,k,x);case ct:var C=k._init;return y(f,p,v,C(k._payload),x)}if(ia(k)||Hr(k))return f=f.get(v)||null,c(p,f,k,x,null);vo(p,k)}return null}function g(f,p,v,k){for(var x=null,C=null,w=p,O=p=0,A=null;w!==null&&O<v.length;O++){w.index>O?(A=w,w=null):A=w.sibling;var _=h(f,w,v[O],k);if(_===null){w===null&&(w=A);break}e&&w&&_.alternate===null&&n(f,w),p=o(_,p,O),C===null?x=_:C.sibling=_,C=_,w=A}if(O===v.length)return t(f,w),ie&&Nt(f,O),x;if(w===null){for(;O<v.length;O++)w=d(f,v[O],k),w!==null&&(p=o(w,p,O),C===null?x=w:C.sibling=w,C=w);return ie&&Nt(f,O),x}for(w=r(f,w);O<v.length;O++)A=y(w,f,O,v[O],k),A!==null&&(e&&A.alternate!==null&&w.delete(A.key===null?O:A.key),p=o(A,p,O),C===null?x=A:C.sibling=A,C=A);return e&&w.forEach(function(Y){return n(f,Y)}),ie&&Nt(f,O),x}function m(f,p,v,k){var x=Hr(v);if(typeof x!="function")throw Error(P(150));if(v=x.call(v),v==null)throw Error(P(151));for(var C=x=null,w=p,O=p=0,A=null,_=v.next();w!==null&&!_.done;O++,_=v.next()){w.index>O?(A=w,w=null):A=w.sibling;var Y=h(f,w,_.value,k);if(Y===null){w===null&&(w=A);break}e&&w&&Y.alternate===null&&n(f,w),p=o(Y,p,O),C===null?x=Y:C.sibling=Y,C=Y,w=A}if(_.done)return t(f,w),ie&&Nt(f,O),x;if(w===null){for(;!_.done;O++,_=v.next())_=d(f,_.value,k),_!==null&&(p=o(_,p,O),C===null?x=_:C.sibling=_,C=_);return ie&&Nt(f,O),x}for(w=r(f,w);!_.done;O++,_=v.next())_=y(w,f,O,_.value,k),_!==null&&(e&&_.alternate!==null&&w.delete(_.key===null?O:_.key),p=o(_,p,O),C===null?x=_:C.sibling=_,C=_);return e&&w.forEach(function(L){return n(f,L)}),ie&&Nt(f,O),x}function b(f,p,v,k){if(typeof v=="object"&&v!==null&&v.type===sr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case oo:e:{for(var x=v.key,C=p;C!==null;){if(C.key===x){if(x=v.type,x===sr){if(C.tag===7){t(f,C.sibling),p=a(C,v.props.children),p.return=f,f=p;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ct&&Id(x)===C.type){t(f,C.sibling),p=a(C,v.props),p.ref=Kr(f,C,v),p.return=f,f=p;break e}t(f,C);break}else n(f,C);C=C.sibling}v.type===sr?(p=qt(v.props.children,f.mode,k,v.key),p.return=f,f=p):(k=Yo(v.type,v.key,v.props,null,f.mode,k),k.ref=Kr(f,p,v),k.return=f,f=k)}return i(f);case lr:e:{for(C=v.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){t(f,p.sibling),p=a(p,v.children||[]),p.return=f,f=p;break e}else{t(f,p);break}else n(f,p);p=p.sibling}p=ql(v,f.mode,k),p.return=f,f=p}return i(f);case ct:return C=v._init,b(f,p,C(v._payload),k)}if(ia(v))return g(f,p,v,k);if(Hr(v))return m(f,p,v,k);vo(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(t(f,p.sibling),p=a(p,v),p.return=f,f=p):(t(f,p),p=Bl(v,f.mode,k),p.return=f,f=p),i(f)):t(f,p)}return b}var _r=k0(!0),w0=k0(!1),hi=At(null),gi=null,gr=null,rc=null;function ac(){rc=gr=gi=null}function oc(e){var n=hi.current;ae(hi),e._currentValue=n}function Bs(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Cr(e,n){gi=e,rc=gr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ye=!0),e.firstContext=null)}function vn(e){var n=e._currentValue;if(rc!==e)if(e={context:e,memoizedValue:n,next:null},gr===null){if(gi===null)throw Error(P(308));gr=e,gi.dependencies={lanes:0,firstContext:e}}else gr=gr.next=e;return n}var Ft=null;function ic(e){Ft===null?Ft=[e]:Ft.push(e)}function x0(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,ic(n)):(t.next=a.next,a.next=t),n.interleaved=t,Jn(e,r)}function Jn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var dt=!1;function lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function S0(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function wt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,Jn(e,t)}return a=r.interleaved,a===null?(n.next=n,ic(r)):(n.next=a.next,a.next=n),r.interleaved=n,Jn(e,t)}function Ho(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Wu(e,t)}}function Dd(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?a=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?a=o=n:o=o.next=n}else a=o=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function vi(e,n,t,r){var a=e.updateQueue;dt=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?o=u:i.next=u,i=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==i&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=a.baseState;i=0,c=u=l=null,s=o;do{var h=s.lane,y=s.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,m=s;switch(h=n,y=t,m.tag){case 1:if(g=m.payload,typeof g=="function"){d=g.call(y,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,h=typeof g=="function"?g.call(y,d,h):g,h==null)break e;d=ce({},d,h);break e;case 2:dt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[s]:h.push(s))}else y={eventTime:y,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,i|=h;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;h=s,s=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);if(c===null&&(l=d),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=c,n=a.shared.interleaved,n!==null){a=n;do i|=a.lane,a=a.next;while(a!==n)}else o===null&&(a.shared.lanes=0);Qt|=i,e.lanes=i,e.memoizedState=d}}function jd(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(P(191,a));a.call(r)}}}var Ya={},Nn=At(Ya),Ia=At(Ya),Da=At(Ya);function Vt(e){if(e===Ya)throw Error(P(174));return e}function sc(e,n){switch(ne(Da,n),ne(Ia,e),ne(Nn,Ya),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Cs(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Cs(n,e)}ae(Nn),ne(Nn,n)}function Ir(){ae(Nn),ae(Ia),ae(Da)}function C0(e){Vt(Da.current);var n=Vt(Nn.current),t=Cs(n,e.type);n!==t&&(ne(Ia,e),ne(Nn,t))}function uc(e){Ia.current===e&&(ae(Nn),ae(Ia))}var se=At(0);function yi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ll=[];function cc(){for(var e=0;e<Ll.length;e++)Ll[e]._workInProgressVersionPrimary=null;Ll.length=0}var Bo=tt.ReactCurrentDispatcher,$l=tt.ReactCurrentBatchConfig,Yt=0,ue=null,be=null,Ce=null,bi=!1,va=!1,ja=0,N1=0;function Ne(){throw Error(P(321))}function dc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!zn(e[t],n[t]))return!1;return!0}function fc(e,n,t,r,a,o){if(Yt=o,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Bo.current=e===null||e.memoizedState===null?F1:V1,e=t(r,a),va){o=0;do{if(va=!1,ja=0,25<=o)throw Error(P(301));o+=1,Ce=be=null,n.updateQueue=null,Bo.current=U1,e=t(r,a)}while(va)}if(Bo.current=ki,n=be!==null&&be.next!==null,Yt=0,Ce=be=ue=null,bi=!1,n)throw Error(P(300));return e}function pc(){var e=ja!==0;return ja=0,e}function An(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ue.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function yn(){if(be===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var n=Ce===null?ue.memoizedState:Ce.next;if(n!==null)Ce=n,be=e;else{if(e===null)throw Error(P(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ce===null?ue.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function Na(e,n){return typeof n=="function"?n(e):n}function Fl(e){var n=yn(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=be,a=r.baseQueue,o=t.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}r.baseQueue=a=o,t.pending=null}if(a!==null){o=a.next,r=r.baseState;var s=i=null,l=null,u=o;do{var c=u.lane;if((Yt&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,i=r):l=l.next=d,ue.lanes|=c,Qt|=c}u=u.next}while(u!==null&&u!==o);l===null?i=r:l.next=s,zn(r,n.memoizedState)||(Ye=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=l,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do o=a.lane,ue.lanes|=o,Qt|=o,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Vl(e){var n=yn(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,o=n.memoizedState;if(a!==null){t.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);zn(o,n.memoizedState)||(Ye=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function O0(){}function P0(e,n){var t=ue,r=yn(),a=n(),o=!zn(r.memoizedState,a);if(o&&(r.memoizedState=a,Ye=!0),r=r.queue,mc(z0.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Ce!==null&&Ce.memoizedState.tag&1){if(t.flags|=2048,Ra(9,E0.bind(null,t,r,a,n),void 0,null),Pe===null)throw Error(P(349));Yt&30||T0(t,n,a)}return a}function T0(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ue.updateQueue,n===null?(n={lastEffect:null,stores:null},ue.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function E0(e,n,t,r){n.value=t,n.getSnapshot=r,M0(n)&&A0(e)}function z0(e,n,t){return t(function(){M0(n)&&A0(e)})}function M0(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!zn(e,t)}catch{return!0}}function A0(e){var n=Jn(e,1);n!==null&&En(n,e,1,-1)}function Nd(e){var n=An();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:e},n.queue=e,e=e.dispatch=$1.bind(null,ue,e),[n.memoizedState,e]}function Ra(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ue.updateQueue,n===null?(n={lastEffect:null,stores:null},ue.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function _0(){return yn().memoizedState}function qo(e,n,t,r){var a=An();ue.flags|=e,a.memoizedState=Ra(1|n,t,void 0,r===void 0?null:r)}function Ki(e,n,t,r){var a=yn();r=r===void 0?null:r;var o=void 0;if(be!==null){var i=be.memoizedState;if(o=i.destroy,r!==null&&dc(r,i.deps)){a.memoizedState=Ra(n,t,o,r);return}}ue.flags|=e,a.memoizedState=Ra(1|n,t,o,r)}function Rd(e,n){return qo(8390656,8,e,n)}function mc(e,n){return Ki(2048,8,e,n)}function I0(e,n){return Ki(4,2,e,n)}function D0(e,n){return Ki(4,4,e,n)}function j0(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function N0(e,n,t){return t=t!=null?t.concat([e]):null,Ki(4,4,j0.bind(null,n,e),t)}function hc(){}function R0(e,n){var t=yn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&dc(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function L0(e,n){var t=yn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&dc(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function $0(e,n,t){return Yt&21?(zn(t,n)||(t=Bp(),ue.lanes|=t,Qt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=t)}function R1(e,n){var t=Z;Z=t!==0&&4>t?t:4,e(!0);var r=$l.transition;$l.transition={};try{e(!1),n()}finally{Z=t,$l.transition=r}}function F0(){return yn().memoizedState}function L1(e,n,t){var r=St(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},V0(e))U0(n,t);else if(t=x0(e,n,t,r),t!==null){var a=Be();En(t,e,r,a),H0(t,n,r)}}function $1(e,n,t){var r=St(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(V0(e))U0(n,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,s=o(i,t);if(a.hasEagerState=!0,a.eagerState=s,zn(s,i)){var l=n.interleaved;l===null?(a.next=a,ic(n)):(a.next=l.next,l.next=a),n.interleaved=a;return}}catch{}finally{}t=x0(e,n,a,r),t!==null&&(a=Be(),En(t,e,r,a),H0(t,n,r))}}function V0(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function U0(e,n){va=bi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function H0(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Wu(e,t)}}var ki={readContext:vn,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},F1={readContext:vn,useCallback:function(e,n){return An().memoizedState=[e,n===void 0?null:n],e},useContext:vn,useEffect:Rd,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,qo(4194308,4,j0.bind(null,n,e),t)},useLayoutEffect:function(e,n){return qo(4194308,4,e,n)},useInsertionEffect:function(e,n){return qo(4,2,e,n)},useMemo:function(e,n){var t=An();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=An();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=L1.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var n=An();return e={current:e},n.memoizedState=e},useState:Nd,useDebugValue:hc,useDeferredValue:function(e){return An().memoizedState=e},useTransition:function(){var e=Nd(!1),n=e[0];return e=R1.bind(null,e[1]),An().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ue,a=An();if(ie){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),Pe===null)throw Error(P(349));Yt&30||T0(r,n,t)}a.memoizedState=t;var o={value:t,getSnapshot:n};return a.queue=o,Rd(z0.bind(null,r,o,e),[e]),r.flags|=2048,Ra(9,E0.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=An(),n=Pe.identifierPrefix;if(ie){var t=Wn,r=qn;t=(r&~(1<<32-Tn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=ja++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=N1++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},V1={readContext:vn,useCallback:R0,useContext:vn,useEffect:mc,useImperativeHandle:N0,useInsertionEffect:I0,useLayoutEffect:D0,useMemo:L0,useReducer:Fl,useRef:_0,useState:function(){return Fl(Na)},useDebugValue:hc,useDeferredValue:function(e){var n=yn();return $0(n,be.memoizedState,e)},useTransition:function(){var e=Fl(Na)[0],n=yn().memoizedState;return[e,n]},useMutableSource:O0,useSyncExternalStore:P0,useId:F0,unstable_isNewReconciler:!1},U1={readContext:vn,useCallback:R0,useContext:vn,useEffect:mc,useImperativeHandle:N0,useInsertionEffect:I0,useLayoutEffect:D0,useMemo:L0,useReducer:Vl,useRef:_0,useState:function(){return Vl(Na)},useDebugValue:hc,useDeferredValue:function(e){var n=yn();return be===null?n.memoizedState=e:$0(n,be.memoizedState,e)},useTransition:function(){var e=Vl(Na)[0],n=yn().memoizedState;return[e,n]},useMutableSource:O0,useSyncExternalStore:P0,useId:F0,unstable_isNewReconciler:!1};function xn(e,n){if(e&&e.defaultProps){n=ce({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function qs(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ce({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Yi={isMounted:function(e){return(e=e._reactInternals)?nr(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Be(),a=St(e),o=Yn(r,a);o.payload=n,t!=null&&(o.callback=t),n=wt(e,o,a),n!==null&&(En(n,e,a,r),Ho(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Be(),a=St(e),o=Yn(r,a);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=wt(e,o,a),n!==null&&(En(n,e,a,r),Ho(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Be(),r=St(e),a=Yn(t,r);a.tag=2,n!=null&&(a.callback=n),n=wt(e,a,r),n!==null&&(En(n,e,r,t),Ho(n,e,r))}};function Ld(e,n,t,r,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!za(t,r)||!za(a,o):!0}function B0(e,n,t){var r=!1,a=Tt,o=n.contextType;return typeof o=="object"&&o!==null?o=vn(o):(a=Xe(n)?Gt:Fe.current,r=n.contextTypes,o=(r=r!=null)?Mr(e,a):Tt),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Yi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),n}function $d(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Yi.enqueueReplaceState(n,n.state,null)}function Ws(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},lc(e);var o=n.contextType;typeof o=="object"&&o!==null?a.context=vn(o):(o=Xe(n)?Gt:Fe.current,a.context=Mr(e,o)),a.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(qs(e,n,o,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&Yi.enqueueReplaceState(a,a.state,null),vi(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,n){try{var t="",r=n;do t+=gg(r),r=r.return;while(r);var a=t}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:a,digest:null}}function Ul(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Gs(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var H1=typeof WeakMap=="function"?WeakMap:Map;function q0(e,n,t){t=Yn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){xi||(xi=!0,ru=r),Gs(e,n)},t}function W0(e,n,t){t=Yn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){Gs(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Gs(e,n),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Fd(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new H1;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=rv.bind(null,e,n,t),n.then(e,e))}function Vd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ud(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Yn(-1,1),n.tag=2,wt(t,n,1))),t.lanes|=1),e)}var B1=tt.ReactCurrentOwner,Ye=!1;function Ve(e,n,t,r){n.child=e===null?w0(n,null,t,r):_r(n,e.child,t,r)}function Hd(e,n,t,r,a){t=t.render;var o=n.ref;return Cr(n,a),r=fc(e,n,t,r,o,a),t=pc(),e!==null&&!Ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,et(e,n,a)):(ie&&t&&ec(n),n.flags|=1,Ve(e,n,r,a),n.child)}function Bd(e,n,t,r,a){if(e===null){var o=t.type;return typeof o=="function"&&!Sc(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,G0(e,n,o,r,a)):(e=Yo(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:za,t(i,r)&&e.ref===n.ref)return et(e,n,a)}return n.flags|=1,e=Ct(o,r),e.ref=n.ref,e.return=n,n.child=e}function G0(e,n,t,r,a){if(e!==null){var o=e.memoizedProps;if(za(o,r)&&e.ref===n.ref)if(Ye=!1,n.pendingProps=r=o,(e.lanes&a)!==0)e.flags&131072&&(Ye=!0);else return n.lanes=e.lanes,et(e,n,a)}return Ks(e,n,t,r,a)}function K0(e,n,t){var r=n.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(yr,tn),tn|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ne(yr,tn),tn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,ne(yr,tn),tn|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,ne(yr,tn),tn|=r;return Ve(e,n,a,t),n.child}function Y0(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ks(e,n,t,r,a){var o=Xe(t)?Gt:Fe.current;return o=Mr(n,o),Cr(n,a),t=fc(e,n,t,r,o,a),r=pc(),e!==null&&!Ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,et(e,n,a)):(ie&&r&&ec(n),n.flags|=1,Ve(e,n,t,a),n.child)}function qd(e,n,t,r,a){if(Xe(t)){var o=!0;fi(n)}else o=!1;if(Cr(n,a),n.stateNode===null)Wo(e,n),B0(n,t,r),Ws(n,t,r,a),r=!0;else if(e===null){var i=n.stateNode,s=n.memoizedProps;i.props=s;var l=i.context,u=t.contextType;typeof u=="object"&&u!==null?u=vn(u):(u=Xe(t)?Gt:Fe.current,u=Mr(n,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||l!==u)&&$d(n,i,r,u),dt=!1;var h=n.memoizedState;i.state=h,vi(n,r,i,a),l=n.memoizedState,s!==r||h!==l||Qe.current||dt?(typeof c=="function"&&(qs(n,t,c,r),l=n.memoizedState),(s=dt||Ld(n,t,s,r,h,l,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=l),i.props=r,i.state=l,i.context=u,r=s):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,S0(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:xn(n.type,s),i.props=u,d=n.pendingProps,h=i.context,l=t.contextType,typeof l=="object"&&l!==null?l=vn(l):(l=Xe(t)?Gt:Fe.current,l=Mr(n,l));var y=t.getDerivedStateFromProps;(c=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==d||h!==l)&&$d(n,i,r,l),dt=!1,h=n.memoizedState,i.state=h,vi(n,r,i,a);var g=n.memoizedState;s!==d||h!==g||Qe.current||dt?(typeof y=="function"&&(qs(n,t,y,r),g=n.memoizedState),(u=dt||Ld(n,t,u,r,h,g,l)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,g,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,g,l)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=g),i.props=r,i.state=g,i.context=l,r=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return Ys(e,n,t,r,o,a)}function Ys(e,n,t,r,a,o){Y0(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return a&&Md(n,t,!1),et(e,n,o);r=n.stateNode,B1.current=n;var s=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=_r(n,e.child,null,o),n.child=_r(n,null,s,o)):Ve(e,n,s,o),n.memoizedState=r.state,a&&Md(n,t,!0),n.child}function Q0(e){var n=e.stateNode;n.pendingContext?zd(e,n.pendingContext,n.pendingContext!==n.context):n.context&&zd(e,n.context,!1),sc(e,n.containerInfo)}function Wd(e,n,t,r,a){return Ar(),tc(a),n.flags|=256,Ve(e,n,t,r),n.child}var Qs={dehydrated:null,treeContext:null,retryLane:0};function Xs(e){return{baseLanes:e,cachePool:null,transitions:null}}function X0(e,n,t){var r=n.pendingProps,a=se.current,o=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ne(se,a&1),e===null)return Hs(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Zi(i,r,0,null),e=qt(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Xs(t),n.memoizedState=Qs,e):gc(n,i));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return q1(e,n,i,r,s,a,t);if(o){o=r.fallback,i=n.mode,a=e.child,s=a.sibling;var l={mode:"hidden",children:r.children};return!(i&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=l,n.deletions=null):(r=Ct(a,l),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?o=Ct(s,o):(o=qt(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?Xs(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=Qs,r}return o=e.child,e=o.sibling,r=Ct(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function gc(e,n){return n=Zi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function yo(e,n,t,r){return r!==null&&tc(r),_r(n,e.child,null,t),e=gc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function q1(e,n,t,r,a,o,i){if(t)return n.flags&256?(n.flags&=-257,r=Ul(Error(P(422))),yo(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,a=n.mode,r=Zi({mode:"visible",children:r.children},a,0,null),o=qt(o,a,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&_r(n,e.child,null,i),n.child.memoizedState=Xs(i),n.memoizedState=Qs,o);if(!(n.mode&1))return yo(e,n,i,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(P(419)),r=Ul(o,r,void 0),yo(e,n,i,r)}if(s=(i&e.childLanes)!==0,Ye||s){if(r=Pe,r!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Jn(e,a),En(r,e,a,-1))}return xc(),r=Ul(Error(P(421))),yo(e,n,i,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=av.bind(null,e),a._reactRetry=n,null):(e=o.treeContext,rn=kt(a.nextSibling),on=n,ie=!0,On=null,e!==null&&(pn[mn++]=qn,pn[mn++]=Wn,pn[mn++]=Kt,qn=e.id,Wn=e.overflow,Kt=n),n=gc(n,r.children),n.flags|=4096,n)}function Gd(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Bs(e.return,n,t)}function Hl(e,n,t,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=a)}function Z0(e,n,t){var r=n.pendingProps,a=r.revealOrder,o=r.tail;if(Ve(e,n,r.children,t),r=se.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gd(e,t,n);else if(e.tag===19)Gd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(se,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&yi(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Hl(n,!1,a,t,o);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&yi(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Hl(n,!0,t,null,o);break;case"together":Hl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Wo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function et(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Qt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=Ct(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Ct(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function W1(e,n,t){switch(n.tag){case 3:Q0(n),Ar();break;case 5:C0(n);break;case 1:Xe(n.type)&&fi(n);break;case 4:sc(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;ne(hi,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ne(se,se.current&1),n.flags|=128,null):t&n.child.childLanes?X0(e,n,t):(ne(se,se.current&1),e=et(e,n,t),e!==null?e.sibling:null);ne(se,se.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Z0(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ne(se,se.current),r)break;return null;case 22:case 23:return n.lanes=0,K0(e,n,t)}return et(e,n,t)}var J0,Zs,em,nm;J0=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Zs=function(){};em=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,Vt(Nn.current);var o=null;switch(t){case"input":a=ks(e,a),r=ks(e,r),o=[];break;case"select":a=ce({},a,{value:void 0}),r=ce({},r,{value:void 0}),o=[];break;case"textarea":a=Ss(e,a),r=Ss(e,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ci)}Os(t,r);var i;t=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var s=a[u];for(i in s)s.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xa.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(t||(t={}),t[i]=l[i])}else t||(o||(o=[]),o.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&re("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};nm=function(e,n,t,r){t!==r&&(n.flags|=4)};function Yr(e,n){if(!ie)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function G1(e,n,t){var r=n.pendingProps;switch(nc(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(n),null;case 1:return Xe(n.type)&&di(),Re(n),null;case 3:return r=n.stateNode,Ir(),ae(Qe),ae(Fe),cc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(go(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,On!==null&&(iu(On),On=null))),Zs(e,n),Re(n),null;case 5:uc(n);var a=Vt(Da.current);if(t=n.type,e!==null&&n.stateNode!=null)em(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(P(166));return Re(n),null}if(e=Vt(Nn.current),go(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Dn]=n,r[_a]=o,e=(n.mode&1)!==0,t){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(a=0;a<sa.length;a++)re(sa[a],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":td(r,o),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},re("invalid",r);break;case"textarea":ad(r,o),re("invalid",r)}Os(t,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ho(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ho(r.textContent,s,e),a=["children",""+s]):xa.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&re("scroll",r)}switch(t){case"input":io(r),rd(r,o,!0);break;case"textarea":io(r),od(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ci)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zp(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Dn]=n,e[_a]=r,J0(e,n,!1,!1),n.stateNode=e;e:{switch(i=Ps(t,r),t){case"dialog":re("cancel",e),re("close",e),a=r;break;case"iframe":case"object":case"embed":re("load",e),a=r;break;case"video":case"audio":for(a=0;a<sa.length;a++)re(sa[a],e);a=r;break;case"source":re("error",e),a=r;break;case"img":case"image":case"link":re("error",e),re("load",e),a=r;break;case"details":re("toggle",e),a=r;break;case"input":td(e,r),a=ks(e,r),re("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ce({},r,{value:void 0}),re("invalid",e);break;case"textarea":ad(e,r),a=Ss(e,r),re("invalid",e);break;default:a=r}Os(t,a),s=a;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?_p(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mp(e,l)):o==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Sa(e,l):typeof l=="number"&&Sa(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(xa.hasOwnProperty(o)?l!=null&&o==="onScroll"&&re("scroll",e):l!=null&&Fu(e,o,l,i))}switch(t){case"input":io(e),rd(e,r,!1);break;case"textarea":io(e),od(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?kr(e,!!r.multiple,o,!1):r.defaultValue!=null&&kr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ci)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Re(n),null;case 6:if(e&&n.stateNode!=null)nm(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(P(166));if(t=Vt(Da.current),Vt(Nn.current),go(n)){if(r=n.stateNode,t=n.memoizedProps,r[Dn]=n,(o=r.nodeValue!==t)&&(e=on,e!==null))switch(e.tag){case 3:ho(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ho(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Dn]=n,n.stateNode=r}return Re(n),null;case 13:if(ae(se),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&rn!==null&&n.mode&1&&!(n.flags&128))b0(),Ar(),n.flags|=98560,o=!1;else if(o=go(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[Dn]=n}else Ar(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Re(n),o=!1}else On!==null&&(iu(On),On=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||se.current&1?ke===0&&(ke=3):xc())),n.updateQueue!==null&&(n.flags|=4),Re(n),null);case 4:return Ir(),Zs(e,n),e===null&&Ma(n.stateNode.containerInfo),Re(n),null;case 10:return oc(n.type._context),Re(n),null;case 17:return Xe(n.type)&&di(),Re(n),null;case 19:if(ae(se),o=n.memoizedState,o===null)return Re(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)Yr(o,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=yi(e),i!==null){for(n.flags|=128,Yr(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ne(se,se.current&1|2),n.child}e=e.sibling}o.tail!==null&&me()>jr&&(n.flags|=128,r=!0,Yr(o,!1),n.lanes=4194304)}else{if(!r)if(e=yi(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Yr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!ie)return Re(n),null}else 2*me()-o.renderingStartTime>jr&&t!==1073741824&&(n.flags|=128,r=!0,Yr(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=me(),n.sibling=null,t=se.current,ne(se,r?t&1|2:t&1),n):(Re(n),null);case 22:case 23:return wc(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?tn&1073741824&&(Re(n),n.subtreeFlags&6&&(n.flags|=8192)):Re(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function K1(e,n){switch(nc(n),n.tag){case 1:return Xe(n.type)&&di(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ir(),ae(Qe),ae(Fe),cc(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return uc(n),null;case 13:if(ae(se),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));Ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ae(se),null;case 4:return Ir(),null;case 10:return oc(n.type._context),null;case 22:case 23:return wc(),null;case 24:return null;default:return null}}var bo=!1,$e=!1,Y1=typeof WeakSet=="function"?WeakSet:Set,z=null;function vr(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){de(e,n,r)}else t.current=null}function Js(e,n,t){try{t()}catch(r){de(e,n,r)}}var Kd=!1;function Q1(e,n){if(Ns=li,e=i0(),Ju(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,s=-1,l=-1,u=0,c=0,d=e,h=null;n:for(;;){for(var y;d!==t||a!==0&&d.nodeType!==3||(s=i+a),d!==o||r!==0&&d.nodeType!==3||(l=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(y=d.firstChild)!==null;)h=d,d=y;for(;;){if(d===e)break n;if(h===t&&++u===a&&(s=i),h===o&&++c===r&&(l=i),(y=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=y}t=s===-1||l===-1?null:{start:s,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Rs={focusedElem:e,selectionRange:t},li=!1,z=n;z!==null;)if(n=z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,z=e;else for(;z!==null;){n=z;try{var g=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,b=g.memoizedState,f=n.stateNode,p=f.getSnapshotBeforeUpdate(n.elementType===n.type?m:xn(n.type,m),b);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(k){de(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,z=e;break}z=n.return}return g=Kd,Kd=!1,g}function ya(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&Js(n,t,o)}a=a.next}while(a!==r)}}function Qi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function eu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function tm(e){var n=e.alternate;n!==null&&(e.alternate=null,tm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Dn],delete n[_a],delete n[Fs],delete n[_1],delete n[I1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rm(e){return e.tag===5||e.tag===3||e.tag===4}function Yd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ci));else if(r!==4&&(e=e.child,e!==null))for(nu(e,n,t),e=e.sibling;e!==null;)nu(e,n,t),e=e.sibling}function tu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(tu(e,n,t),e=e.sibling;e!==null;)tu(e,n,t),e=e.sibling}var _e=null,Sn=!1;function it(e,n,t){for(t=t.child;t!==null;)am(e,n,t),t=t.sibling}function am(e,n,t){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(Ui,t)}catch{}switch(t.tag){case 5:$e||vr(t,n);case 6:var r=_e,a=Sn;_e=null,it(e,n,t),_e=r,Sn=a,_e!==null&&(Sn?(e=_e,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):_e.removeChild(t.stateNode));break;case 18:_e!==null&&(Sn?(e=_e,t=t.stateNode,e.nodeType===8?Nl(e.parentNode,t):e.nodeType===1&&Nl(e,t),Ta(e)):Nl(_e,t.stateNode));break;case 4:r=_e,a=Sn,_e=t.stateNode.containerInfo,Sn=!0,it(e,n,t),_e=r,Sn=a;break;case 0:case 11:case 14:case 15:if(!$e&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Js(t,n,i),a=a.next}while(a!==r)}it(e,n,t);break;case 1:if(!$e&&(vr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){de(t,n,s)}it(e,n,t);break;case 21:it(e,n,t);break;case 22:t.mode&1?($e=(r=$e)||t.memoizedState!==null,it(e,n,t),$e=r):it(e,n,t);break;default:it(e,n,t)}}function Qd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Y1),n.forEach(function(r){var a=ov.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function bn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var o=e,i=n,s=i;e:for(;s!==null;){switch(s.tag){case 5:_e=s.stateNode,Sn=!1;break e;case 3:_e=s.stateNode.containerInfo,Sn=!0;break e;case 4:_e=s.stateNode.containerInfo,Sn=!0;break e}s=s.return}if(_e===null)throw Error(P(160));am(o,i,a),_e=null,Sn=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(u){de(a,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)om(n,e),n=n.sibling}function om(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bn(n,e),Mn(e),r&4){try{ya(3,e,e.return),Qi(3,e)}catch(m){de(e,e.return,m)}try{ya(5,e,e.return)}catch(m){de(e,e.return,m)}}break;case 1:bn(n,e),Mn(e),r&512&&t!==null&&vr(t,t.return);break;case 5:if(bn(n,e),Mn(e),r&512&&t!==null&&vr(t,t.return),e.flags&32){var a=e.stateNode;try{Sa(a,"")}catch(m){de(e,e.return,m)}}if(r&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Tp(a,o),Ps(s,i);var u=Ps(s,o);for(i=0;i<l.length;i+=2){var c=l[i],d=l[i+1];c==="style"?_p(a,d):c==="dangerouslySetInnerHTML"?Mp(a,d):c==="children"?Sa(a,d):Fu(a,c,d,u)}switch(s){case"input":ws(a,o);break;case"textarea":Ep(a,o);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?kr(a,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?kr(a,!!o.multiple,o.defaultValue,!0):kr(a,!!o.multiple,o.multiple?[]:"",!1))}a[_a]=o}catch(m){de(e,e.return,m)}}break;case 6:if(bn(n,e),Mn(e),r&4){if(e.stateNode===null)throw Error(P(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(m){de(e,e.return,m)}}break;case 3:if(bn(n,e),Mn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ta(n.containerInfo)}catch(m){de(e,e.return,m)}break;case 4:bn(n,e),Mn(e);break;case 13:bn(n,e),Mn(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(bc=me())),r&4&&Qd(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?($e=(u=$e)||c,bn(n,e),$e=u):bn(n,e),Mn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(z=e,c=e.child;c!==null;){for(d=z=c;z!==null;){switch(h=z,y=h.child,h.tag){case 0:case 11:case 14:case 15:ya(4,h,h.return);break;case 1:vr(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,g.props=n.memoizedProps,g.state=n.memoizedState,g.componentWillUnmount()}catch(m){de(r,t,m)}}break;case 5:vr(h,h.return);break;case 22:if(h.memoizedState!==null){Zd(d);continue}}y!==null?(y.return=h,z=y):Zd(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{a=d.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,l=d.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Ap("display",i))}catch(m){de(e,e.return,m)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(m){de(e,e.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:bn(n,e),Mn(e),r&4&&Qd(e);break;case 21:break;default:bn(n,e),Mn(e)}}function Mn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(rm(t)){var r=t;break e}t=t.return}throw Error(P(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Sa(a,""),r.flags&=-33);var o=Yd(e);tu(e,o,a);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Yd(e);nu(e,s,i);break;default:throw Error(P(161))}}catch(l){de(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function X1(e,n,t){z=e,im(e)}function im(e,n,t){for(var r=(e.mode&1)!==0;z!==null;){var a=z,o=a.child;if(a.tag===22&&r){var i=a.memoizedState!==null||bo;if(!i){var s=a.alternate,l=s!==null&&s.memoizedState!==null||$e;s=bo;var u=$e;if(bo=i,($e=l)&&!u)for(z=a;z!==null;)i=z,l=i.child,i.tag===22&&i.memoizedState!==null?Jd(a):l!==null?(l.return=i,z=l):Jd(a);for(;o!==null;)z=o,im(o),o=o.sibling;z=a,bo=s,$e=u}Xd(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,z=o):Xd(e)}}function Xd(e){for(;z!==null;){var n=z;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:$e||Qi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!$e)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:xn(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&jd(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}jd(n,i,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ta(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}$e||n.flags&512&&eu(n)}catch(h){de(n,n.return,h)}}if(n===e){z=null;break}if(t=n.sibling,t!==null){t.return=n.return,z=t;break}z=n.return}}function Zd(e){for(;z!==null;){var n=z;if(n===e){z=null;break}var t=n.sibling;if(t!==null){t.return=n.return,z=t;break}z=n.return}}function Jd(e){for(;z!==null;){var n=z;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Qi(4,n)}catch(l){de(n,t,l)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(l){de(n,a,l)}}var o=n.return;try{eu(n)}catch(l){de(n,o,l)}break;case 5:var i=n.return;try{eu(n)}catch(l){de(n,i,l)}}}catch(l){de(n,n.return,l)}if(n===e){z=null;break}var s=n.sibling;if(s!==null){s.return=n.return,z=s;break}z=n.return}}var Z1=Math.ceil,wi=tt.ReactCurrentDispatcher,vc=tt.ReactCurrentOwner,gn=tt.ReactCurrentBatchConfig,q=0,Pe=null,ve=null,De=0,tn=0,yr=At(0),ke=0,La=null,Qt=0,Xi=0,yc=0,ba=null,Ke=null,bc=0,jr=1/0,Un=null,xi=!1,ru=null,xt=null,ko=!1,gt=null,Si=0,ka=0,au=null,Go=-1,Ko=0;function Be(){return q&6?me():Go!==-1?Go:Go=me()}function St(e){return e.mode&1?q&2&&De!==0?De&-De:j1.transition!==null?(Ko===0&&(Ko=Bp()),Ko):(e=Z,e!==0||(e=window.event,e=e===void 0?16:Xp(e.type)),e):1}function En(e,n,t,r){if(50<ka)throw ka=0,au=null,Error(P(185));Wa(e,t,r),(!(q&2)||e!==Pe)&&(e===Pe&&(!(q&2)&&(Xi|=t),ke===4&&pt(e,De)),Ze(e,r),t===1&&q===0&&!(n.mode&1)&&(jr=me()+500,Gi&&_t()))}function Ze(e,n){var t=e.callbackNode;jg(e,n);var r=ii(e,e===Pe?De:0);if(r===0)t!==null&&sd(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&sd(t),n===1)e.tag===0?D1(ef.bind(null,e)):g0(ef.bind(null,e)),M1(function(){!(q&6)&&_t()}),t=null;else{switch(qp(r)){case 1:t=qu;break;case 4:t=Up;break;case 16:t=oi;break;case 536870912:t=Hp;break;default:t=oi}t=mm(t,lm.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function lm(e,n){if(Go=-1,Ko=0,q&6)throw Error(P(327));var t=e.callbackNode;if(Or()&&e.callbackNode!==t)return null;var r=ii(e,e===Pe?De:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ci(e,r);else{n=r;var a=q;q|=2;var o=um();(Pe!==e||De!==n)&&(Un=null,jr=me()+500,Bt(e,n));do try{nv();break}catch(s){sm(e,s)}while(!0);ac(),wi.current=o,q=a,ve!==null?n=0:(Pe=null,De=0,n=ke)}if(n!==0){if(n===2&&(a=As(e),a!==0&&(r=a,n=ou(e,a))),n===1)throw t=La,Bt(e,0),pt(e,r),Ze(e,me()),t;if(n===6)pt(e,r);else{if(a=e.current.alternate,!(r&30)&&!J1(a)&&(n=Ci(e,r),n===2&&(o=As(e),o!==0&&(r=o,n=ou(e,o))),n===1))throw t=La,Bt(e,0),pt(e,r),Ze(e,me()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(P(345));case 2:Rt(e,Ke,Un);break;case 3:if(pt(e,r),(r&130023424)===r&&(n=bc+500-me(),10<n)){if(ii(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=$s(Rt.bind(null,e,Ke,Un),n);break}Rt(e,Ke,Un);break;case 4:if(pt(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var i=31-Tn(r);o=1<<i,i=n[i],i>a&&(a=i),r&=~o}if(r=a,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Z1(r/1960))-r,10<r){e.timeoutHandle=$s(Rt.bind(null,e,Ke,Un),r);break}Rt(e,Ke,Un);break;case 5:Rt(e,Ke,Un);break;default:throw Error(P(329))}}}return Ze(e,me()),e.callbackNode===t?lm.bind(null,e):null}function ou(e,n){var t=ba;return e.current.memoizedState.isDehydrated&&(Bt(e,n).flags|=256),e=Ci(e,n),e!==2&&(n=Ke,Ke=t,n!==null&&iu(n)),e}function iu(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function J1(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],o=a.getSnapshot;a=a.value;try{if(!zn(o(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function pt(e,n){for(n&=~yc,n&=~Xi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Tn(n),r=1<<t;e[t]=-1,n&=~r}}function ef(e){if(q&6)throw Error(P(327));Or();var n=ii(e,0);if(!(n&1))return Ze(e,me()),null;var t=Ci(e,n);if(e.tag!==0&&t===2){var r=As(e);r!==0&&(n=r,t=ou(e,r))}if(t===1)throw t=La,Bt(e,0),pt(e,n),Ze(e,me()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Rt(e,Ke,Un),Ze(e,me()),null}function kc(e,n){var t=q;q|=1;try{return e(n)}finally{q=t,q===0&&(jr=me()+500,Gi&&_t())}}function Xt(e){gt!==null&&gt.tag===0&&!(q&6)&&Or();var n=q;q|=1;var t=gn.transition,r=Z;try{if(gn.transition=null,Z=1,e)return e()}finally{Z=r,gn.transition=t,q=n,!(q&6)&&_t()}}function wc(){tn=yr.current,ae(yr)}function Bt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,z1(t)),ve!==null)for(t=ve.return;t!==null;){var r=t;switch(nc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&di();break;case 3:Ir(),ae(Qe),ae(Fe),cc();break;case 5:uc(r);break;case 4:Ir();break;case 13:ae(se);break;case 19:ae(se);break;case 10:oc(r.type._context);break;case 22:case 23:wc()}t=t.return}if(Pe=e,ve=e=Ct(e.current,null),De=tn=n,ke=0,La=null,yc=Xi=Qt=0,Ke=ba=null,Ft!==null){for(n=0;n<Ft.length;n++)if(t=Ft[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=a,r.next=i}t.pending=r}Ft=null}return e}function sm(e,n){do{var t=ve;try{if(ac(),Bo.current=ki,bi){for(var r=ue.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}bi=!1}if(Yt=0,Ce=be=ue=null,va=!1,ja=0,vc.current=null,t===null||t.return===null){ke=1,La=n,ve=null;break}e:{var o=e,i=t.return,s=t,l=n;if(n=De,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Vd(i);if(y!==null){y.flags&=-257,Ud(y,i,s,o,n),y.mode&1&&Fd(o,u,n),n=y,l=u;var g=n.updateQueue;if(g===null){var m=new Set;m.add(l),n.updateQueue=m}else g.add(l);break e}else{if(!(n&1)){Fd(o,u,n),xc();break e}l=Error(P(426))}}else if(ie&&s.mode&1){var b=Vd(i);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Ud(b,i,s,o,n),tc(Dr(l,s));break e}}o=l=Dr(l,s),ke!==4&&(ke=2),ba===null?ba=[o]:ba.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=q0(o,l,n);Dd(o,f);break e;case 1:s=l;var p=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(xt===null||!xt.has(v)))){o.flags|=65536,n&=-n,o.lanes|=n;var k=W0(o,s,n);Dd(o,k);break e}}o=o.return}while(o!==null)}dm(t)}catch(x){n=x,ve===t&&t!==null&&(ve=t=t.return);continue}break}while(!0)}function um(){var e=wi.current;return wi.current=ki,e===null?ki:e}function xc(){(ke===0||ke===3||ke===2)&&(ke=4),Pe===null||!(Qt&268435455)&&!(Xi&268435455)||pt(Pe,De)}function Ci(e,n){var t=q;q|=2;var r=um();(Pe!==e||De!==n)&&(Un=null,Bt(e,n));do try{ev();break}catch(a){sm(e,a)}while(!0);if(ac(),q=t,wi.current=r,ve!==null)throw Error(P(261));return Pe=null,De=0,ke}function ev(){for(;ve!==null;)cm(ve)}function nv(){for(;ve!==null&&!Pg();)cm(ve)}function cm(e){var n=pm(e.alternate,e,tn);e.memoizedProps=e.pendingProps,n===null?dm(e):ve=n,vc.current=null}function dm(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=K1(t,n),t!==null){t.flags&=32767,ve=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,ve=null;return}}else if(t=G1(t,n,tn),t!==null){ve=t;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);ke===0&&(ke=5)}function Rt(e,n,t){var r=Z,a=gn.transition;try{gn.transition=null,Z=1,tv(e,n,t,r)}finally{gn.transition=a,Z=r}return null}function tv(e,n,t,r){do Or();while(gt!==null);if(q&6)throw Error(P(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Ng(e,o),e===Pe&&(ve=Pe=null,De=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ko||(ko=!0,mm(oi,function(){return Or(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=gn.transition,gn.transition=null;var i=Z;Z=1;var s=q;q|=4,vc.current=null,Q1(e,t),om(t,e),x1(Rs),li=!!Ns,Rs=Ns=null,e.current=t,X1(t),Tg(),q=s,Z=i,gn.transition=o}else e.current=t;if(ko&&(ko=!1,gt=e,Si=a),o=e.pendingLanes,o===0&&(xt=null),Mg(t.stateNode),Ze(e,me()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(xi)throw xi=!1,e=ru,ru=null,e;return Si&1&&e.tag!==0&&Or(),o=e.pendingLanes,o&1?e===au?ka++:(ka=0,au=e):ka=0,_t(),null}function Or(){if(gt!==null){var e=qp(Si),n=gn.transition,t=Z;try{if(gn.transition=null,Z=16>e?16:e,gt===null)var r=!1;else{if(e=gt,gt=null,Si=0,q&6)throw Error(P(331));var a=q;for(q|=4,z=e.current;z!==null;){var o=z,i=o.child;if(z.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(z=u;z!==null;){var c=z;switch(c.tag){case 0:case 11:case 15:ya(8,c,o)}var d=c.child;if(d!==null)d.return=c,z=d;else for(;z!==null;){c=z;var h=c.sibling,y=c.return;if(tm(c),c===u){z=null;break}if(h!==null){h.return=y,z=h;break}z=y}}}var g=o.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var b=m.sibling;m.sibling=null,m=b}while(m!==null)}}z=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,z=i;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ya(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,z=f;break e}z=o.return}}var p=e.current;for(z=p;z!==null;){i=z;var v=i.child;if(i.subtreeFlags&2064&&v!==null)v.return=i,z=v;else e:for(i=p;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Qi(9,s)}}catch(x){de(s,s.return,x)}if(s===i){z=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,z=k;break e}z=s.return}}if(q=a,_t(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(Ui,e)}catch{}r=!0}return r}finally{Z=t,gn.transition=n}}return!1}function nf(e,n,t){n=Dr(t,n),n=q0(e,n,1),e=wt(e,n,1),n=Be(),e!==null&&(Wa(e,1,n),Ze(e,n))}function de(e,n,t){if(e.tag===3)nf(e,e,t);else for(;n!==null;){if(n.tag===3){nf(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=Dr(t,e),e=W0(n,e,1),n=wt(n,e,1),e=Be(),n!==null&&(Wa(n,1,e),Ze(n,e));break}}n=n.return}}function rv(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Be(),e.pingedLanes|=e.suspendedLanes&t,Pe===e&&(De&t)===t&&(ke===4||ke===3&&(De&130023424)===De&&500>me()-bc?Bt(e,0):yc|=t),Ze(e,n)}function fm(e,n){n===0&&(e.mode&1?(n=uo,uo<<=1,!(uo&130023424)&&(uo=4194304)):n=1);var t=Be();e=Jn(e,n),e!==null&&(Wa(e,n,t),Ze(e,t))}function av(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),fm(e,t)}function ov(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(n),fm(e,t)}var pm;pm=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Qe.current)Ye=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ye=!1,W1(e,n,t);Ye=!!(e.flags&131072)}else Ye=!1,ie&&n.flags&1048576&&v0(n,mi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Wo(e,n),e=n.pendingProps;var a=Mr(n,Fe.current);Cr(n,t),a=fc(null,n,r,e,a,t);var o=pc();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Xe(r)?(o=!0,fi(n)):o=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,lc(n),a.updater=Yi,n.stateNode=a,a._reactInternals=n,Ws(n,r,e,t),n=Ys(null,n,r,!0,o,t)):(n.tag=0,ie&&o&&ec(n),Ve(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Wo(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=lv(r),e=xn(r,e),a){case 0:n=Ks(null,n,r,e,t);break e;case 1:n=qd(null,n,r,e,t);break e;case 11:n=Hd(null,n,r,e,t);break e;case 14:n=Bd(null,n,r,xn(r.type,e),t);break e}throw Error(P(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:xn(r,a),Ks(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:xn(r,a),qd(e,n,r,a,t);case 3:e:{if(Q0(n),e===null)throw Error(P(387));r=n.pendingProps,o=n.memoizedState,a=o.element,S0(e,n),vi(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){a=Dr(Error(P(423)),n),n=Wd(e,n,r,t,a);break e}else if(r!==a){a=Dr(Error(P(424)),n),n=Wd(e,n,r,t,a);break e}else for(rn=kt(n.stateNode.containerInfo.firstChild),on=n,ie=!0,On=null,t=w0(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ar(),r===a){n=et(e,n,t);break e}Ve(e,n,r,t)}n=n.child}return n;case 5:return C0(n),e===null&&Hs(n),r=n.type,a=n.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,Ls(r,a)?i=null:o!==null&&Ls(r,o)&&(n.flags|=32),Y0(e,n),Ve(e,n,i,t),n.child;case 6:return e===null&&Hs(n),null;case 13:return X0(e,n,t);case 4:return sc(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=_r(n,null,r,t):Ve(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:xn(r,a),Hd(e,n,r,a,t);case 7:return Ve(e,n,n.pendingProps,t),n.child;case 8:return Ve(e,n,n.pendingProps.children,t),n.child;case 12:return Ve(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,o=n.memoizedProps,i=a.value,ne(hi,r._currentValue),r._currentValue=i,o!==null)if(zn(o.value,i)){if(o.children===a.children&&!Qe.current){n=et(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Yn(-1,t&-t),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),Bs(o.return,t,n),s.lanes|=t;break}l=l.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(P(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Bs(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Ve(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,Cr(n,t),a=vn(a),r=r(a),n.flags|=1,Ve(e,n,r,t),n.child;case 14:return r=n.type,a=xn(r,n.pendingProps),a=xn(r.type,a),Bd(e,n,r,a,t);case 15:return G0(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:xn(r,a),Wo(e,n),n.tag=1,Xe(r)?(e=!0,fi(n)):e=!1,Cr(n,t),B0(n,r,a),Ws(n,r,a,t),Ys(null,n,r,!0,e,t);case 19:return Z0(e,n,t);case 22:return K0(e,n,t)}throw Error(P(156,n.tag))};function mm(e,n){return Vp(e,n)}function iv(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,n,t,r){return new iv(e,n,t,r)}function Sc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lv(e){if(typeof e=="function")return Sc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Uu)return 11;if(e===Hu)return 14}return 2}function Ct(e,n){var t=e.alternate;return t===null?(t=hn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Yo(e,n,t,r,a,o){var i=2;if(r=e,typeof e=="function")Sc(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case sr:return qt(t.children,a,o,n);case Vu:i=8,a|=8;break;case gs:return e=hn(12,t,n,a|2),e.elementType=gs,e.lanes=o,e;case vs:return e=hn(13,t,n,a),e.elementType=vs,e.lanes=o,e;case ys:return e=hn(19,t,n,a),e.elementType=ys,e.lanes=o,e;case Cp:return Zi(t,a,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xp:i=10;break e;case Sp:i=9;break e;case Uu:i=11;break e;case Hu:i=14;break e;case ct:i=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=hn(i,t,n,a),n.elementType=e,n.type=r,n.lanes=o,n}function qt(e,n,t,r){return e=hn(7,e,r,n),e.lanes=t,e}function Zi(e,n,t,r){return e=hn(22,e,r,n),e.elementType=Cp,e.lanes=t,e.stateNode={isHidden:!1},e}function Bl(e,n,t){return e=hn(6,e,null,n),e.lanes=t,e}function ql(e,n,t){return n=hn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function sv(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ol(0),this.expirationTimes=Ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ol(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Cc(e,n,t,r,a,o,i,s,l){return e=new sv(e,n,t,s,l),n===1?(n=1,o===!0&&(n|=8)):n=0,o=hn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},lc(o),e}function uv(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lr,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function hm(e){if(!e)return Tt;e=e._reactInternals;e:{if(nr(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(Xe(t))return h0(e,t,n)}return n}function gm(e,n,t,r,a,o,i,s,l){return e=Cc(t,r,!0,e,a,o,i,s,l),e.context=hm(null),t=e.current,r=Be(),a=St(t),o=Yn(r,a),o.callback=n??null,wt(t,o,a),e.current.lanes=a,Wa(e,a,r),Ze(e,r),e}function Ji(e,n,t,r){var a=n.current,o=Be(),i=St(a);return t=hm(t),n.context===null?n.context=t:n.pendingContext=t,n=Yn(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=wt(a,n,i),e!==null&&(En(e,a,i,o),Ho(e,a,i)),i}function Oi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function tf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Oc(e,n){tf(e,n),(e=e.alternate)&&tf(e,n)}function cv(){return null}var vm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pc(e){this._internalRoot=e}el.prototype.render=Pc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));Ji(e,n,null,null)};el.prototype.unmount=Pc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Xt(function(){Ji(null,e,null,null)}),n[Zn]=null}};function el(e){this._internalRoot=e}el.prototype.unstable_scheduleHydration=function(e){if(e){var n=Kp();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ft.length&&n!==0&&n<ft[t].priority;t++);ft.splice(t,0,e),t===0&&Qp(e)}};function Tc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rf(){}function dv(e,n,t,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var u=Oi(i);o.call(u)}}var i=gm(n,r,e,0,null,!1,!1,"",rf);return e._reactRootContainer=i,e[Zn]=i.current,Ma(e.nodeType===8?e.parentNode:e),Xt(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var u=Oi(l);s.call(u)}}var l=Cc(e,0,!1,null,null,!1,!1,"",rf);return e._reactRootContainer=l,e[Zn]=l.current,Ma(e.nodeType===8?e.parentNode:e),Xt(function(){Ji(n,l,t,r)}),l}function tl(e,n,t,r,a){var o=t._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var s=a;a=function(){var l=Oi(i);s.call(l)}}Ji(n,i,e,a)}else i=dv(t,n,e,a,r);return Oi(i)}Wp=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=la(n.pendingLanes);t!==0&&(Wu(n,t|1),Ze(n,me()),!(q&6)&&(jr=me()+500,_t()))}break;case 13:Xt(function(){var r=Jn(e,1);if(r!==null){var a=Be();En(r,e,1,a)}}),Oc(e,1)}};Gu=function(e){if(e.tag===13){var n=Jn(e,134217728);if(n!==null){var t=Be();En(n,e,134217728,t)}Oc(e,134217728)}};Gp=function(e){if(e.tag===13){var n=St(e),t=Jn(e,n);if(t!==null){var r=Be();En(t,e,n,r)}Oc(e,n)}};Kp=function(){return Z};Yp=function(e,n){var t=Z;try{return Z=e,n()}finally{Z=t}};Es=function(e,n,t){switch(n){case"input":if(ws(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=Wi(r);if(!a)throw Error(P(90));Pp(r),ws(r,a)}}}break;case"textarea":Ep(e,t);break;case"select":n=t.value,n!=null&&kr(e,!!t.multiple,n,!1)}};jp=kc;Np=Xt;var fv={usingClientEntryPoint:!1,Events:[Ka,fr,Wi,Ip,Dp,kc]},Qr={findFiberByHostInstance:$t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pv={bundleType:Qr.bundleType,version:Qr.version,rendererPackageName:Qr.rendererPackageName,rendererConfig:Qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$p(e),e===null?null:e.stateNode},findFiberByHostInstance:Qr.findFiberByHostInstance||cv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wo.isDisabled&&wo.supportsFiber)try{Ui=wo.inject(pv),jn=wo}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fv;un.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tc(n))throw Error(P(200));return uv(e,n,null,t)};un.createRoot=function(e,n){if(!Tc(e))throw Error(P(299));var t=!1,r="",a=vm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Cc(e,1,!1,null,null,t,!1,r,a),e[Zn]=n.current,Ma(e.nodeType===8?e.parentNode:e),new Pc(n)};un.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=$p(n),e=e===null?null:e.stateNode,e};un.flushSync=function(e){return Xt(e)};un.hydrate=function(e,n,t){if(!nl(n))throw Error(P(200));return tl(null,e,n,!0,t)};un.hydrateRoot=function(e,n,t){if(!Tc(e))throw Error(P(405));var r=t!=null&&t.hydratedSources||null,a=!1,o="",i=vm;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=gm(n,null,e,1,t??null,a,!1,o,i),e[Zn]=n.current,Ma(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new el(n)};un.render=function(e,n,t){if(!nl(n))throw Error(P(200));return tl(null,e,n,!1,t)};un.unmountComponentAtNode=function(e){if(!nl(e))throw Error(P(40));return e._reactRootContainer?(Xt(function(){tl(null,null,e,!1,function(){e._reactRootContainer=null,e[Zn]=null})}),!0):!1};un.unstable_batchedUpdates=kc;un.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!nl(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return tl(e,n,t,!1,r)};un.version="18.3.1-next-f1338f8080-20240426";function ym(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ym)}catch(e){console.error(e)}}ym(),yp.exports=un;var bm=yp.exports,af=bm;ms.createRoot=af.createRoot,ms.hydrateRoot=af.hydrateRoot;function mv(){return E.jsxs("header",{className:"relative bg-gradient-to-r from-[#3D0B0B] to-[#621111] px-6 py-8 mb-8",children:[E.jsx("div",{className:"max-w-7xl mx-auto",children:E.jsx("div",{className:"flex items-start gap-4",children:E.jsxs("div",{className:"flex-1",children:[E.jsx("h1",{className:"text-3xl font-semibold text-[#FDF6E9] mb-3",children:"Mildew Risk Forecast"}),E.jsxs("div",{className:"bg-[#FDF6E9]/20 backdrop-blur-sm rounded-lg p-4 text-[#FDF6E9]/90 space-y-2 text-sm",children:[E.jsx("p",{children:"The Mildew Risk Index predicts the likelihood of mildew development based on environmental conditions."}),E.jsxs("ul",{className:"space-y-1 ml-6 list-disc text-[#FDF6E9]/80",children:[E.jsx("li",{children:"Forecast range: Minimum 1 days, Maximum 16 days"}),E.jsx("li",{children:"Index scale: 0 (Low Risk) to 100 (High Risk)"})]})]})]})})}),E.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-[#FDF6E9]"})]})}function km(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(t=km(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function hv(){for(var e,n,t=0,r="",a=arguments.length;t<a;t++)(e=arguments[t])&&(n=km(e))&&(r&&(r+=" "),r+=n);return r}const Ec="-",gv=e=>{const n=yv(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:i=>{const s=i.split(Ec);return s[0]===""&&s.length!==1&&s.shift(),wm(s,n)||vv(i)},getConflictingClassGroupIds:(i,s)=>{const l=t[i]||[];return s&&r[i]?[...l,...r[i]]:l}}},wm=(e,n)=>{var i;if(e.length===0)return n.classGroupId;const t=e[0],r=n.nextPart.get(t),a=r?wm(e.slice(1),r):void 0;if(a)return a;if(n.validators.length===0)return;const o=e.join(Ec);return(i=n.validators.find(({validator:s})=>s(o)))==null?void 0:i.classGroupId},of=/^\[(.+)\]$/,vv=e=>{if(of.test(e)){const n=of.exec(e)[1],t=n==null?void 0:n.substring(0,n.indexOf(":"));if(t)return"arbitrary.."+t}},yv=e=>{const{theme:n,prefix:t}=e,r={nextPart:new Map,validators:[]};return kv(Object.entries(e.classGroups),t).forEach(([o,i])=>{lu(i,r,o,n)}),r},lu=(e,n,t,r)=>{e.forEach(a=>{if(typeof a=="string"){const o=a===""?n:lf(n,a);o.classGroupId=t;return}if(typeof a=="function"){if(bv(a)){lu(a(r),n,t,r);return}n.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(([o,i])=>{lu(i,lf(n,o),t,r)})})},lf=(e,n)=>{let t=e;return n.split(Ec).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},bv=e=>e.isThemeGetter,kv=(e,n)=>n?e.map(([t,r])=>{const a=r.map(o=>typeof o=="string"?n+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([i,s])=>[n+i,s])):o);return[t,a]}):e,wv=e=>{if(e<1)return{get:()=>{},set:()=>{}};let n=0,t=new Map,r=new Map;const a=(o,i)=>{t.set(o,i),n++,n>e&&(n=0,r=t,t=new Map)};return{get(o){let i=t.get(o);if(i!==void 0)return i;if((i=r.get(o))!==void 0)return a(o,i),i},set(o,i){t.has(o)?t.set(o,i):a(o,i)}}},xm="!",xv=e=>{const{separator:n,experimentalParseClassName:t}=e,r=n.length===1,a=n[0],o=n.length,i=s=>{const l=[];let u=0,c=0,d;for(let b=0;b<s.length;b++){let f=s[b];if(u===0){if(f===a&&(r||s.slice(b,b+o)===n)){l.push(s.slice(c,b)),c=b+o;continue}if(f==="/"){d=b;continue}}f==="["?u++:f==="]"&&u--}const h=l.length===0?s:s.substring(c),y=h.startsWith(xm),g=y?h.substring(1):h,m=d&&d>c?d-c:void 0;return{modifiers:l,hasImportantModifier:y,baseClassName:g,maybePostfixModifierPosition:m}};return t?s=>t({className:s,parseClassName:i}):i},Sv=e=>{if(e.length<=1)return e;const n=[];let t=[];return e.forEach(r=>{r[0]==="["?(n.push(...t.sort(),r),t=[]):t.push(r)}),n.push(...t.sort()),n},Cv=e=>({cache:wv(e.cacheSize),parseClassName:xv(e),...gv(e)}),Ov=/\s+/,Pv=(e,n)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:a}=n,o=[],i=e.trim().split(Ov);let s="";for(let l=i.length-1;l>=0;l-=1){const u=i[l],{modifiers:c,hasImportantModifier:d,baseClassName:h,maybePostfixModifierPosition:y}=t(u);let g=!!y,m=r(g?h.substring(0,y):h);if(!m){if(!g){s=u+(s.length>0?" "+s:s);continue}if(m=r(h),!m){s=u+(s.length>0?" "+s:s);continue}g=!1}const b=Sv(c).join(":"),f=d?b+xm:b,p=f+m;if(o.includes(p))continue;o.push(p);const v=a(m,g);for(let k=0;k<v.length;++k){const x=v[k];o.push(f+x)}s=u+(s.length>0?" "+s:s)}return s};function Tv(){let e=0,n,t,r="";for(;e<arguments.length;)(n=arguments[e++])&&(t=Sm(n))&&(r&&(r+=" "),r+=t);return r}const Sm=e=>{if(typeof e=="string")return e;let n,t="";for(let r=0;r<e.length;r++)e[r]&&(n=Sm(e[r]))&&(t&&(t+=" "),t+=n);return t};function Ev(e,...n){let t,r,a,o=i;function i(l){const u=n.reduce((c,d)=>d(c),e());return t=Cv(u),r=t.cache.get,a=t.cache.set,o=s,s(l)}function s(l){const u=r(l);if(u)return u;const c=Pv(l,t);return a(l,c),c}return function(){return o(Tv.apply(null,arguments))}}const te=e=>{const n=t=>t[e]||[];return n.isThemeGetter=!0,n},Cm=/^\[(?:([a-z-]+):)?(.+)\]$/i,zv=/^\d+\/\d+$/,Mv=new Set(["px","full","screen"]),Av=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,_v=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Iv=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Dv=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,jv=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,$n=e=>Pr(e)||Mv.has(e)||zv.test(e),lt=e=>Vr(e,"length",Hv),Pr=e=>!!e&&!Number.isNaN(Number(e)),Wl=e=>Vr(e,"number",Pr),Xr=e=>!!e&&Number.isInteger(Number(e)),Nv=e=>e.endsWith("%")&&Pr(e.slice(0,-1)),F=e=>Cm.test(e),st=e=>Av.test(e),Rv=new Set(["length","size","percentage"]),Lv=e=>Vr(e,Rv,Om),$v=e=>Vr(e,"position",Om),Fv=new Set(["image","url"]),Vv=e=>Vr(e,Fv,qv),Uv=e=>Vr(e,"",Bv),Zr=()=>!0,Vr=(e,n,t)=>{const r=Cm.exec(e);return r?r[1]?typeof n=="string"?r[1]===n:n.has(r[1]):t(r[2]):!1},Hv=e=>_v.test(e)&&!Iv.test(e),Om=()=>!1,Bv=e=>Dv.test(e),qv=e=>jv.test(e),Wv=()=>{const e=te("colors"),n=te("spacing"),t=te("blur"),r=te("brightness"),a=te("borderColor"),o=te("borderRadius"),i=te("borderSpacing"),s=te("borderWidth"),l=te("contrast"),u=te("grayscale"),c=te("hueRotate"),d=te("invert"),h=te("gap"),y=te("gradientColorStops"),g=te("gradientColorStopPositions"),m=te("inset"),b=te("margin"),f=te("opacity"),p=te("padding"),v=te("saturate"),k=te("scale"),x=te("sepia"),C=te("skew"),w=te("space"),O=te("translate"),A=()=>["auto","contain","none"],_=()=>["auto","hidden","clip","visible","scroll"],Y=()=>["auto",F,n],L=()=>[F,n],xe=()=>["",$n,lt],ze=()=>["auto",Pr,F],le=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ee=()=>["solid","dashed","dotted","double","none"],Me=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],T=()=>["start","end","center","between","around","evenly","stretch"],I=()=>["","0",F],N=()=>["auto","avoid","all","avoid-page","page","left","right","column"],B=()=>[Pr,F];return{cacheSize:500,separator:":",theme:{colors:[Zr],spacing:[$n,lt],blur:["none","",st,F],brightness:B(),borderColor:[e],borderRadius:["none","","full",st,F],borderSpacing:L(),borderWidth:xe(),contrast:B(),grayscale:I(),hueRotate:B(),invert:I(),gap:L(),gradientColorStops:[e],gradientColorStopPositions:[Nv,lt],inset:Y(),margin:Y(),opacity:B(),padding:L(),saturate:B(),scale:B(),sepia:I(),skew:B(),space:L(),translate:L()},classGroups:{aspect:[{aspect:["auto","square","video",F]}],container:["container"],columns:[{columns:[st]}],"break-after":[{"break-after":N()}],"break-before":[{"break-before":N()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...le(),F]}],overflow:[{overflow:_()}],"overflow-x":[{"overflow-x":_()}],"overflow-y":[{"overflow-y":_()}],overscroll:[{overscroll:A()}],"overscroll-x":[{"overscroll-x":A()}],"overscroll-y":[{"overscroll-y":A()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Xr,F]}],basis:[{basis:Y()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",F]}],grow:[{grow:I()}],shrink:[{shrink:I()}],order:[{order:["first","last","none",Xr,F]}],"grid-cols":[{"grid-cols":[Zr]}],"col-start-end":[{col:["auto",{span:["full",Xr,F]},F]}],"col-start":[{"col-start":ze()}],"col-end":[{"col-end":ze()}],"grid-rows":[{"grid-rows":[Zr]}],"row-start-end":[{row:["auto",{span:[Xr,F]},F]}],"row-start":[{"row-start":ze()}],"row-end":[{"row-end":ze()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",F]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",F]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...T()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...T(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...T(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[p]}],px:[{px:[p]}],py:[{py:[p]}],ps:[{ps:[p]}],pe:[{pe:[p]}],pt:[{pt:[p]}],pr:[{pr:[p]}],pb:[{pb:[p]}],pl:[{pl:[p]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[w]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[w]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",F,n]}],"min-w":[{"min-w":[F,n,"min","max","fit"]}],"max-w":[{"max-w":[F,n,"none","full","min","max","fit","prose",{screen:[st]},st]}],h:[{h:[F,n,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[F,n,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[F,n,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[F,n,"auto","min","max","fit"]}],"font-size":[{text:["base",st,lt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Wl]}],"font-family":[{font:[Zr]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",F]}],"line-clamp":[{"line-clamp":["none",Pr,Wl]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",$n,F]}],"list-image":[{"list-image":["none",F]}],"list-style-type":[{list:["none","disc","decimal",F]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ee(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",$n,lt]}],"underline-offset":[{"underline-offset":["auto",$n,F]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",F]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",F]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...le(),$v]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Lv]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Vv]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...ee(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:ee()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-s":[{"border-s":[a]}],"border-color-e":[{"border-e":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...ee()]}],"outline-offset":[{"outline-offset":[$n,F]}],"outline-w":[{outline:[$n,lt]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:xe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[$n,lt]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",st,Uv]}],"shadow-color":[{shadow:[Zr]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...Me(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Me()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",st,F]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[d]}],saturate:[{saturate:[v]}],sepia:[{sepia:[x]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[x]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",F]}],duration:[{duration:B()}],ease:[{ease:["linear","in","out","in-out",F]}],delay:[{delay:B()}],animate:[{animate:["none","spin","ping","pulse","bounce",F]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[k]}],"scale-x":[{"scale-x":[k]}],"scale-y":[{"scale-y":[k]}],rotate:[{rotate:[Xr,F]}],"translate-x":[{"translate-x":[O]}],"translate-y":[{"translate-y":[O]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",F]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",F]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",F]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[$n,lt,Wl]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Gv=Ev(Wv);function It(...e){return Gv(hv(e))}const zc=S.forwardRef(({className:e,...n},t)=>E.jsx("div",{ref:t,className:It("rounded-xl border border-stone-200 bg-white text-stone-950 shadow dark:border-stone-800 dark:bg-stone-950 dark:text-stone-50",e),...n}));zc.displayName="Card";const Pm=S.forwardRef(({className:e,...n},t)=>E.jsx("div",{ref:t,className:It("flex flex-col space-y-1.5 p-6",e),...n}));Pm.displayName="CardHeader";const Tm=S.forwardRef(({className:e,...n},t)=>E.jsx("h3",{ref:t,className:It("font-semibold leading-none tracking-tight",e),...n}));Tm.displayName="CardTitle";const Kv=S.forwardRef(({className:e,...n},t)=>E.jsx("p",{ref:t,className:It("text-sm text-stone-500 dark:text-stone-400",e),...n}));Kv.displayName="CardDescription";const Mc=S.forwardRef(({className:e,...n},t)=>E.jsx("div",{ref:t,className:It("p-6 pt-0",e),...n}));Mc.displayName="CardContent";const Yv=S.forwardRef(({className:e,...n},t)=>E.jsx("div",{ref:t,className:It("flex items-center p-6 pt-0",e),...n}));Yv.displayName="CardFooter";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Em=(...e)=>e.filter((n,t,r)=>!!n&&r.indexOf(n)===t).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=S.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:o,iconNode:i,...s},l)=>S.createElement("svg",{ref:l,...Xv,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:Em("lucide",a),...s},[...i.map(([u,c])=>S.createElement(u,c)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=(e,n)=>{const t=S.forwardRef(({className:r,...a},o)=>S.createElement(Zv,{ref:o,iconNode:n,className:Em(`lucide-${Qv(e)}`,r),...a}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=Qa("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=Qa("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=Qa("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=Qa("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Qa("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),ay=({date:e,curindex:n,cardColor:t,delta:r})=>{const a=o=>{switch(o){case 0:return E.jsx(ry,{className:"w-[3vw] h-[3vw] sm:w-[2vw] sm:h-[2vw] md:w-[1.5vw] md:h-[1.5vw] mr-[1vw]"});case 1:return E.jsx(ey,{className:"w-[3vw] h-[3vw] sm:w-[2vw] sm:h-[2vw] md:w-[1.5vw] md:h-[1.5vw] mr-[1vw]"});case 2:return E.jsx(Jv,{className:"w-[3vw] h-[3vw] sm:w-[2vw] sm:h-[2vw] md:w-[1.5vw] md:h-[1.5vw] mr-[1vw]"})}};return E.jsx(zc,{className:"bg-theme-200border-theme-300 transition-shadow hover:shadow-md",children:E.jsxs(Mc,{className:"p-4",children:[E.jsx("p",{className:"font-medium text-theme-800",children:e}),E.jsxs("div",{className:"mt-2 flex items-center justify-between",children:[E.jsxs("p",{className:"text-2xl font-bold text-theme-700",children:["Index: ",n]}),a(r)]})]})},e)},oy=(e,n)=>{let t=[0,"bg-gray-50"];if(n===null)return t;if(e===n)return t;if(e>n){const r="bg-gradient-to-b from-green-50 to-blue-150";return console.log(r),t=[1,r],t}else return t=[2,"w-full max-w-4xl mx-auto bg-gradient-to-b from-blue-600 to-blue-800 text-white"],t};function iy({items:e}){const n=e.map((t,r)=>{const a=r>0?e[r-1].risk_index:null,[o,i]=oy(t.risk_index,a);return E.jsx(ay,{date:t.date,curindex:t.risk_index,cardColor:i,delta:o},t.date)});return Math.max(...e.map(t=>t.risk_index)),E.jsx(E.Fragment,{children:E.jsx("div",{className:" grid gap-4 md:grid-cols-2 lg:grid-cols-3",children:n})})}const Qo=S.forwardRef(({className:e,type:n,...t},r)=>E.jsx("input",{type:n,className:It("flex h-9 w-full rounded-md border border-stone-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-stone-950 placeholder:text-stone-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-stone-800 dark:file:text-stone-50 dark:placeholder:text-stone-400 dark:focus-visible:ring-stone-300",e),ref:r,...t}));Qo.displayName="Input";function sf(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function ly(...e){return n=>{let t=!1;const r=e.map(a=>{const o=sf(a,n);return!t&&typeof o=="function"&&(t=!0),o});if(t)return()=>{for(let a=0;a<r.length;a++){const o=r[a];typeof o=="function"?o():sf(e[a],null)}}}}var zm=S.forwardRef((e,n)=>{const{children:t,...r}=e,a=S.Children.toArray(t),o=a.find(uy);if(o){const i=o.props.children,s=a.map(l=>l===o?S.Children.count(i)>1?S.Children.only(null):S.isValidElement(i)?i.props.children:null:l);return E.jsx(su,{...r,ref:n,children:S.isValidElement(i)?S.cloneElement(i,void 0,s):null})}return E.jsx(su,{...r,ref:n,children:t})});zm.displayName="Slot";var su=S.forwardRef((e,n)=>{const{children:t,...r}=e;if(S.isValidElement(t)){const a=dy(t);return S.cloneElement(t,{...cy(r,t.props),ref:n?ly(n,a):a})}return S.Children.count(t)>1?S.Children.only(null):null});su.displayName="SlotClone";var sy=({children:e})=>E.jsx(E.Fragment,{children:e});function uy(e){return S.isValidElement(e)&&e.type===sy}function cy(e,n){const t={...n};for(const r in n){const a=e[r],o=n[r];/^on[A-Z]/.test(r)?a&&o?t[r]=(...s)=>{o(...s),a(...s)}:a&&(t[r]=a):r==="style"?t[r]={...a,...o}:r==="className"&&(t[r]=[a,o].filter(Boolean).join(" "))}return{...e,...t}}function dy(e){var r,a;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}var fy=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],py=fy.reduce((e,n)=>{const t=S.forwardRef((r,a)=>{const{asChild:o,...i}=r,s=o?zm:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),E.jsx(s,{...i,ref:a})});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{}),my="Label",Mm=S.forwardRef((e,n)=>E.jsx(py.label,{...e,ref:n,onMouseDown:t=>{var a;t.target.closest("button, input, select, textarea")||((a=e.onMouseDown)==null||a.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));Mm.displayName=my;var Am=Mm;function _m(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=_m(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function hy(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=_m(e))&&(r&&(r+=" "),r+=n);return r}const gy=hy,vy=(e,n)=>t=>gy(e,t==null?void 0:t.class,t==null?void 0:t.className),yy=vy("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Xo=S.forwardRef(({className:e,...n},t)=>E.jsx(Am,{ref:t,className:It(yy(),e),...n}));Xo.displayName=Am.displayName;function we(e,n){n===void 0&&(n={});var t=n.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",t==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}we(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var U=function(){return U=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},U.apply(this,arguments)};function Pi(e){return Pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Pi(e)}var by=/^\s+/,ky=/\s+$/;function M(e,n){if(n=n||{},(e=e||"")instanceof M)return e;if(!(this instanceof M))return new M(e,n);var t=function(r){var a={r:0,g:0,b:0},o=1,i=null,s=null,l=null,u=!1,c=!1;typeof r=="string"&&(r=function(g){g=g.replace(by,"").replace(ky,"").toLowerCase();var m,b=!1;if(uu[g])g=uu[g],b=!0;else if(g=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(m=wn.rgb.exec(g))?{r:m[1],g:m[2],b:m[3]}:(m=wn.rgba.exec(g))?{r:m[1],g:m[2],b:m[3],a:m[4]}:(m=wn.hsl.exec(g))?{h:m[1],s:m[2],l:m[3]}:(m=wn.hsla.exec(g))?{h:m[1],s:m[2],l:m[3],a:m[4]}:(m=wn.hsv.exec(g))?{h:m[1],s:m[2],v:m[3]}:(m=wn.hsva.exec(g))?{h:m[1],s:m[2],v:m[3],a:m[4]}:(m=wn.hex8.exec(g))?{r:nn(m[1]),g:nn(m[2]),b:nn(m[3]),a:mf(m[4]),format:b?"name":"hex8"}:(m=wn.hex6.exec(g))?{r:nn(m[1]),g:nn(m[2]),b:nn(m[3]),format:b?"name":"hex"}:(m=wn.hex4.exec(g))?{r:nn(m[1]+""+m[1]),g:nn(m[2]+""+m[2]),b:nn(m[3]+""+m[3]),a:mf(m[4]+""+m[4]),format:b?"name":"hex8"}:(m=wn.hex3.exec(g))?{r:nn(m[1]+""+m[1]),g:nn(m[2]+""+m[2]),b:nn(m[3]+""+m[3]),format:b?"name":"hex"}:!1}(r)),Pi(r)=="object"&&(Fn(r.r)&&Fn(r.g)&&Fn(r.b)?(d=r.r,h=r.g,y=r.b,a={r:255*oe(d,255),g:255*oe(h,255),b:255*oe(y,255)},u=!0,c=String(r.r).substr(-1)==="%"?"prgb":"rgb"):Fn(r.h)&&Fn(r.s)&&Fn(r.v)?(i=ua(r.s),s=ua(r.v),a=function(g,m,b){g=6*oe(g,360),m=oe(m,100),b=oe(b,100);var f=Math.floor(g),p=g-f,v=b*(1-m),k=b*(1-p*m),x=b*(1-(1-p)*m),C=f%6,w=[b,k,v,v,x,b][C],O=[x,b,b,k,v,v][C],A=[v,v,x,b,b,k][C];return{r:255*w,g:255*O,b:255*A}}(r.h,i,s),u=!0,c="hsv"):Fn(r.h)&&Fn(r.s)&&Fn(r.l)&&(i=ua(r.s),l=ua(r.l),a=function(g,m,b){var f,p,v;function k(w,O,A){return A<0&&(A+=1),A>1&&(A-=1),A<1/6?w+6*(O-w)*A:A<.5?O:A<2/3?w+(O-w)*(2/3-A)*6:w}if(g=oe(g,360),m=oe(m,100),b=oe(b,100),m===0)f=p=v=b;else{var x=b<.5?b*(1+m):b+m-b*m,C=2*b-x;f=k(C,x,g+1/3),p=k(C,x,g),v=k(C,x,g-1/3)}return{r:255*f,g:255*p,b:255*v}}(r.h,i,l),u=!0,c="hsl"),r.hasOwnProperty("a")&&(o=r.a));var d,h,y;return o=Im(o),{ok:u,format:r.format||c,r:Math.min(255,Math.max(a.r,0)),g:Math.min(255,Math.max(a.g,0)),b:Math.min(255,Math.max(a.b,0)),a:o}}(e);this._originalInput=e,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=n.format||t.format,this._gradientType=n.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}function uf(e,n,t){e=oe(e,255),n=oe(n,255),t=oe(t,255);var r,a,o=Math.max(e,n,t),i=Math.min(e,n,t),s=(o+i)/2;if(o==i)r=a=0;else{var l=o-i;switch(a=s>.5?l/(2-o-i):l/(o+i),o){case e:r=(n-t)/l+(n<t?6:0);break;case n:r=(t-e)/l+2;break;case t:r=(e-n)/l+4}r/=6}return{h:r,s:a,l:s}}function cf(e,n,t){e=oe(e,255),n=oe(n,255),t=oe(t,255);var r,a,o=Math.max(e,n,t),i=Math.min(e,n,t),s=o,l=o-i;if(a=o===0?0:l/o,o==i)r=0;else{switch(o){case e:r=(n-t)/l+(n<t?6:0);break;case n:r=(t-e)/l+2;break;case t:r=(e-n)/l+4}r/=6}return{h:r,s:a,v:s}}function df(e,n,t,r){var a=[Pn(Math.round(e).toString(16)),Pn(Math.round(n).toString(16)),Pn(Math.round(t).toString(16))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function ff(e,n,t,r){return[Pn(Dm(r)),Pn(Math.round(e).toString(16)),Pn(Math.round(n).toString(16)),Pn(Math.round(t).toString(16))].join("")}function wy(e,n){n=n===0?0:n||10;var t=M(e).toHsl();return t.s-=n/100,t.s=rl(t.s),M(t)}function xy(e,n){n=n===0?0:n||10;var t=M(e).toHsl();return t.s+=n/100,t.s=rl(t.s),M(t)}function Sy(e){return M(e).desaturate(100)}function Cy(e,n){n=n===0?0:n||10;var t=M(e).toHsl();return t.l+=n/100,t.l=rl(t.l),M(t)}function Oy(e,n){n=n===0?0:n||10;var t=M(e).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(-n/100*255))),t.g=Math.max(0,Math.min(255,t.g-Math.round(-n/100*255))),t.b=Math.max(0,Math.min(255,t.b-Math.round(-n/100*255))),M(t)}function Py(e,n){n=n===0?0:n||10;var t=M(e).toHsl();return t.l-=n/100,t.l=rl(t.l),M(t)}function Ty(e,n){var t=M(e).toHsl(),r=(t.h+n)%360;return t.h=r<0?360+r:r,M(t)}function Ey(e){var n=M(e).toHsl();return n.h=(n.h+180)%360,M(n)}function pf(e,n){if(isNaN(n)||n<=0)throw new Error("Argument to polyad must be a positive number");for(var t=M(e).toHsl(),r=[M(e)],a=360/n,o=1;o<n;o++)r.push(M({h:(t.h+o*a)%360,s:t.s,l:t.l}));return r}function zy(e){var n=M(e).toHsl(),t=n.h;return[M(e),M({h:(t+72)%360,s:n.s,l:n.l}),M({h:(t+216)%360,s:n.s,l:n.l})]}function My(e,n,t){n=n||6,t=t||30;var r=M(e).toHsl(),a=360/t,o=[M(e)];for(r.h=(r.h-(a*n>>1)+720)%360;--n;)r.h=(r.h+a)%360,o.push(M(r));return o}function Ay(e,n){n=n||6;for(var t=M(e).toHsv(),r=t.h,a=t.s,o=t.v,i=[],s=1/n;n--;)i.push(M({h:r,s:a,v:o})),o=(o+s)%1;return i}M.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,n,t,r=this.toRgb();return e=r.r/255,n=r.g/255,t=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))},setAlpha:function(e){return this._a=Im(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=cf(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=cf(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+n+", "+t+"%, "+r+"%)":"hsva("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=uf(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=uf(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+n+", "+t+"%, "+r+"%)":"hsla("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return df(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(n,t,r,a,o){var i=[Pn(Math.round(n).toString(16)),Pn(Math.round(t).toString(16)),Pn(Math.round(r).toString(16)),Pn(Dm(a))];return o&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*oe(this._r,255))+"%",g:Math.round(100*oe(this._g,255))+"%",b:Math.round(100*oe(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*oe(this._r,255))+"%, "+Math.round(100*oe(this._g,255))+"%, "+Math.round(100*oe(this._b,255))+"%)":"rgba("+Math.round(100*oe(this._r,255))+"%, "+Math.round(100*oe(this._g,255))+"%, "+Math.round(100*oe(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(_y[df(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var n="#"+ff(this._r,this._g,this._b,this._a),t=n,r=this._gradientType?"GradientType = 1, ":"";if(e){var a=M(e);t="#"+ff(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+n+",endColorstr="+t+")"},toString:function(e){var n=!!e;e=e||this._format;var t=!1,r=this._a<1&&this._a>=0;return n||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(t=this.toRgbString()),e==="prgb"&&(t=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(t=this.toHexString()),e==="hex3"&&(t=this.toHexString(!0)),e==="hex4"&&(t=this.toHex8String(!0)),e==="hex8"&&(t=this.toHex8String()),e==="name"&&(t=this.toName()),e==="hsl"&&(t=this.toHslString()),e==="hsv"&&(t=this.toHsvString()),t||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return M(this.toString())},_applyModification:function(e,n){var t=e.apply(null,[this].concat([].slice.call(n)));return this._r=t._r,this._g=t._g,this._b=t._b,this.setAlpha(t._a),this},lighten:function(){return this._applyModification(Cy,arguments)},brighten:function(){return this._applyModification(Oy,arguments)},darken:function(){return this._applyModification(Py,arguments)},desaturate:function(){return this._applyModification(wy,arguments)},saturate:function(){return this._applyModification(xy,arguments)},greyscale:function(){return this._applyModification(Sy,arguments)},spin:function(){return this._applyModification(Ty,arguments)},_applyCombination:function(e,n){return e.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(My,arguments)},complement:function(){return this._applyCombination(Ey,arguments)},monochromatic:function(){return this._applyCombination(Ay,arguments)},splitcomplement:function(){return this._applyCombination(zy,arguments)},triad:function(){return this._applyCombination(pf,[3])},tetrad:function(){return this._applyCombination(pf,[4])}},M.fromRatio=function(e,n){if(Pi(e)=="object"){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=r==="a"?e[r]:ua(e[r]));e=t}return M(e,n)},M.equals=function(e,n){return!(!e||!n)&&M(e).toRgbString()==M(n).toRgbString()},M.random=function(){return M.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},M.mix=function(e,n,t){t=t===0?0:t||50;var r=M(e).toRgb(),a=M(n).toRgb(),o=t/100;return M({r:(a.r-r.r)*o+r.r,g:(a.g-r.g)*o+r.g,b:(a.b-r.b)*o+r.b,a:(a.a-r.a)*o+r.a})},M.readability=function(e,n){var t=M(e),r=M(n);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)},M.isReadable=function(e,n,t){var r,a,o=M.readability(e,n);switch(a=!1,(r=function(i){var s,l;return s=((i=i||{level:"AA",size:"small"}).level||"AA").toUpperCase(),l=(i.size||"small").toLowerCase(),s!=="AA"&&s!=="AAA"&&(s="AA"),l!=="small"&&l!=="large"&&(l="small"),{level:s,size:l}}(t)).level+r.size){case"AAsmall":case"AAAlarge":a=o>=4.5;break;case"AAlarge":a=o>=3;break;case"AAAsmall":a=o>=7}return a},M.mostReadable=function(e,n,t){var r,a,o,i,s=null,l=0;a=(t=t||{}).includeFallbackColors,o=t.level,i=t.size;for(var u=0;u<n.length;u++)(r=M.readability(e,n[u]))>l&&(l=r,s=M(n[u]));return M.isReadable(e,s,{level:o,size:i})||!a?s:(t.includeFallbackColors=!1,M.mostReadable(e,["#fff","#000"],t))};var uu=M.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},_y=M.hexNames=function(e){var n={};for(var t in e)e.hasOwnProperty(t)&&(n[e[t]]=t);return n}(uu);function Im(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function oe(e,n){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var t=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(e);return e=Math.min(n,Math.max(0,parseFloat(e))),t&&(e=parseInt(e*n,10)/100),Math.abs(e-n)<1e-6?1:e%n/parseFloat(n)}function rl(e){return Math.min(1,Math.max(0,e))}function nn(e){return parseInt(e,16)}function Pn(e){return e.length==1?"0"+e:""+e}function ua(e){return e<=1&&(e=100*e+"%"),e}function Dm(e){return Math.round(255*parseFloat(e)).toString(16)}function mf(e){return nn(e)/255}var ut,xo,So,wn=(xo="[\\s|\\(]+("+(ut="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+ut+")[,|\\s]+("+ut+")\\s*\\)?",So="[\\s|\\(]+("+ut+")[,|\\s]+("+ut+")[,|\\s]+("+ut+")[,|\\s]+("+ut+")\\s*\\)?",{CSS_UNIT:new RegExp(ut),rgb:new RegExp("rgb"+xo),rgba:new RegExp("rgba"+So),hsl:new RegExp("hsl"+xo),hsla:new RegExp("hsla"+So),hsv:new RegExp("hsv"+xo),hsva:new RegExp("hsva"+So),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Fn(e){return!!wn.CSS_UNIT.exec(e)}var Xa=function(e,n){var t=(typeof e=="string"?parseInt(e):e)||0;if(t>=-5&&t<=5){var r=t,a=parseFloat(n),o=a+r*(a/5)*-1;return(o==0||o<=Number.EPSILON)&&(o=.1),{animationPeriod:o+"s"}}return{animationPeriod:n}},Za=function(e,n){var t=e||{},r="";switch(n){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var a={};if(t.fontSize){var o=t.fontSize;a=function(i,s){var l={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&s.indexOf(u)<0&&(l[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function"){var c=0;for(u=Object.getOwnPropertySymbols(i);c<u.length;c++)s.indexOf(u[c])<0&&Object.prototype.propertyIsEnumerable.call(i,u[c])&&(l[u[c]]=i[u[c]])}return l}(t,["fontSize"]),r=o}return{fontSize:r,styles:a}},Iy={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Ja=function(e){var n=e.className,t=e.text,r=e.textColor,a=e.staticText,o=e.style;return t?X.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(n||"").trim(),style:U(U(U({},a&&Iy),r&&{color:r,mixBlendMode:"unset"}),o&&o)},typeof t=="string"&&t.length?t:"loading"):null},Gn="rgb(50, 205, 50)";function eo(e,n){n===void 0&&(n=0);var t=[];return function r(a,o){return o===void 0&&(o=0),t.push.apply(t,a),t.length<o&&r(t,o),t.slice(0,o)}(e,n)}we(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);M(Gn).toRgb();Array.from({length:4},function(e,n){return"--atom-phase".concat(n+1,"-rgb")});we(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--commet-phase".concat(n+1,"-color")});we(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var Co=Array.from({length:4},function(e,n){return"--OP-annulus-phase".concat(n+1,"-color")}),Dy=function(e){var n,t=Za(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,a=t.fontSize,o=e==null?void 0:e.easing,i=Xa(e==null?void 0:e.speedPlus,"1.5s").animationPeriod,s=function(u){var c={},d=Co.length;if(u instanceof Array){for(var h=eo(u,d),y=0;y<h.length&&!(y>=4);y++)c[Co[y]]=h[y];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var g=0;g<d;g++)c[Co[g]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),g=0;g<d;g++)c[Co[g]]=Gn}return c}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),l=e!=null&&e.dense?4.3:2.9;return X.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:U(U(U(U(U({},a&&{fontSize:a}),i&&{"--rli-animation-duration":i}),o&&{"--rli-animation-function":o}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},X.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},X.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},X.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:l,strokeMiterlimit:"10"})),X.createElement(Ja,{className:"OP-annulus-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};function Gl(e){return e&&e.Math===Math&&e}we(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var ar=Gl(typeof window=="object"&&window)||Gl(typeof self=="object"&&self)||Gl(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function jm(){var e,n;return!((e=ar==null?void 0:ar.crypto)===null||e===void 0)&&e.randomUUID?ar.crypto.randomUUID():!((n=ar==null?void 0:ar.btoa)===null||n===void 0)&&n.name?ar.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var Oo=Array.from({length:4},function(e,n){return"--OP-dotted-phase".concat(n+1,"-color")}),jy=function(e){var n,t=Za(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,a=t.fontSize,o=e==null?void 0:e.easing,i=Xa(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,s=function(u){var c={},d=Oo.length;if(u instanceof Array){for(var h=eo(u,d),y=0;y<h.length&&!(y>=4);y++)c[Oo[y]]=h[y];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var g=0;g<d;g++)c[Oo[g]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),g=0;g<d;g++)c[Oo[g]]=Gn}return c}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),l=e!=null&&e.dense?16:12;return X.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:U(U(U(U(U({},a&&{fontSize:a}),i&&{"--rli-animation-duration":i}),o&&{"--rli-animation-function":o}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},X.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:l}).map(function(u,c){var d=function(g,m,b){if(m===16){var f=360*g/m,p=m-g,v=Number.parseFloat(b)/m*p*-1;return{transform:"rotate(".concat(f,"deg)"),animationDelay:"".concat(v,"s")}}return{transform:"",animationDelay:""}}(c,l,i),h=d.animationDelay,y=d.transform;return X.createElement("span",{key:jm(),className:"rli-d-i-b dot-shape-holder",style:y?{transform:y}:void 0},X.createElement("span",{className:"dot",style:h?{animationDelay:h}:void 0}))}),X.createElement(Ja,{className:"OP-dotted-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};we(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var Po=Array.from({length:4},function(e,n){return"--OP-spokes-phase".concat(n+1,"-color")}),Ny=function(e){var n,t=Za(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,a=t.fontSize,o=e==null?void 0:e.easing,i=Xa(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,s=function(u){var c={},d=Po.length;if(u instanceof Array){for(var h=eo(u,d),y=0;y<h.length&&!(y>=4);y++)c[Po[y]]=h[y];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var g=0;g<d;g++)c[Po[g]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),g=0;g<d;g++)c[Po[g]]=Gn}return c}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),l=e!=null&&e.dense?16:12;return X.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:U(U(U(U(U({},a&&{fontSize:a}),i&&{"--rli-animation-duration":i}),o&&{"--rli-animation-function":o}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},X.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:l},function(u,c){return X.createElement("span",{key:jm(),className:"rli-d-i-b spoke",style:Ry(c,l,i)})})),X.createElement(Ja,{text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};function Ry(e,n,t){if(n===16){var r=n-e,a=Number.parseFloat(t)/n;return{transform:"rotate(".concat(360*e/n,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((r-1)*a*-1,"s")}}}we(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var To=Array.from({length:4},function(e,n){return"--OP-annulus-dual-sectors-phase".concat(n+1,"-color")}),Ly=function(e){var n,t=Za(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,a=t.fontSize,o=e==null?void 0:e.easing,i=Xa(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,s=function(u){var c={},d=To.length;if(u instanceof Array){for(var h=eo(u,d),y=0;y<h.length&&!(y>=4);y++)c[To[y]]=h[y];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var g=0;g<d;g++)c[To[g]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),g=0;g<d;g++)c[To[g]]=Gn}return c}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),l=e.dense?"0.45em":"";return X.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:U(U(U(U(U({},a&&{fontSize:a}),i&&{"--rli-animation-duration":i}),o&&{"--rli-animation-function":o}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},X.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},X.createElement("span",{className:"rli-d-i-b annulus-sectors",style:U({},l&&{borderWidth:l})}),X.createElement(Ja,{className:"OP-annulus-dual-sectors-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};we(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var Jr=Array.from({length:4},function(e,n){return["--OP-annulus-track-phase".concat(n+1,"-color"),"--OP-annulus-sector-phase".concat(n+1,"-color")]}),Eo=function(e){return e===void 0&&(e=1),.25*e},$y=function(e){var n,t=Za(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,a=t.fontSize,o=e==null?void 0:e.easing,i=Xa(e==null?void 0:e.speedPlus,"1s").animationPeriod,s=function(u){var c={},d=Jr.length;if(u instanceof Array){for(var h=eo(u,d),y=0;y<h.length&&!(y>=4);y++){var g=Jr[y];try{if(!(f=M(h[y])).isValid())throw new Error("Invalid Color: ".concat(f.getOriginalInput()));var m=f.setAlpha(Eo(f.getAlpha())).toRgbString(),b=h[y];c[g[0]]=m,c[g[1]]=b}catch{b=Gn,m=(f=M(Gn)).setAlpha(Eo(f.getAlpha())).toRgbString(),c[g[0]]=m,c[g[1]]=b}}return c}try{var f=M(u);if(typeof u!="string")throw new Error("Color String expected");if(!f.isValid())throw new Error("Invalid Color: ".concat(f.getOriginalInput()));b=u,m=f.setAlpha(Eo(f.getAlpha())).toRgbString();for(var p=0;p<d;p++)c[(g=Jr[p])[0]]=m,c[g[1]]=b}catch(v){for(v instanceof Error?console.warn("[".concat(v.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),b=Gn,m=(f=M(Gn)).setAlpha(Eo(f.getAlpha())).toRgbString(),p=0;p<Jr.length;p++)c[(g=Jr[p])[0]]=m,c[g[1]]=b}return c}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:""),l=e.dense?"0.45em":"";return X.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:U(U(U(U(U({},a&&{fontSize:a}),i&&{"--rli-animation-duration":i}),o&&{"--rli-animation-function":o}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},X.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},X.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:U({},l&&{borderWidth:l})}),X.createElement(Ja,{className:"OP-annulus-sector-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))},Fy=function(e){var n=Object(e).variant,t=n===void 0?"disc":n;return t==="dotted"?X.createElement(jy,U({},e)):t==="spokes"?X.createElement(Ny,U({},e)):t==="disc"?X.createElement(Dy,U({},e)):t==="split-disc"?X.createElement(Ly,U({},e)):t==="track-disc"?X.createElement($y,U({},e)):null};we(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--four-square-phase".concat(n+1,"-color")});we(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--mosaic-phase".concat(n+1,"-color")});we(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--riple-phase".concat(n+1,"-color")});we(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-pulsate-phase".concat(n+1,"-color")});we(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-brick-stack-phase".concat(n+1,"-color")});we(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-bob-phase".concat(n+1,"-color")});we(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-bounce-phase".concat(n+1,"-color")});we(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--shape-phase".concat(n+1,"-color")});we(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--trophySpin-phase".concat(n+1,"-color")});we(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--slab-phase".concat(n+1,"-color")});we(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--life-line-phase".concat(n+1,"-color")});function Zt(e){"@babel/helpers - typeof";return Zt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Zt(e)}function Vy(e,n){if(Zt(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(Zt(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Nm(e){var n=Vy(e,"string");return Zt(n)=="symbol"?n:n+""}function ca(e,n,t){return(n=Nm(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function hf(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?hf(Object(t),!0).forEach(function(r){ca(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):hf(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Uy(e){if(Array.isArray(e))return e}function Hy(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,o,i,s=[],l=!0,u=!1;try{if(o=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=o.call(t)).done)&&(s.push(r.value),s.length!==n);l=!0);}catch(c){u=!0,a=c}finally{try{if(!l&&t.return!=null&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw a}}return s}}function cu(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function Rm(e,n){if(e){if(typeof e=="string")return cu(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?cu(e,n):void 0}}function By(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qn(e,n){return Uy(e)||Hy(e,n)||Rm(e,n)||By()}function qy(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function rt(e,n){if(e==null)return{};var t,r,a=qy(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Wy=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Gy(e){var n=e.defaultInputValue,t=n===void 0?"":n,r=e.defaultMenuIsOpen,a=r===void 0?!1:r,o=e.defaultValue,i=o===void 0?null:o,s=e.inputValue,l=e.menuIsOpen,u=e.onChange,c=e.onInputChange,d=e.onMenuClose,h=e.onMenuOpen,y=e.value,g=rt(e,Wy),m=S.useState(s!==void 0?s:t),b=Qn(m,2),f=b[0],p=b[1],v=S.useState(l!==void 0?l:a),k=Qn(v,2),x=k[0],C=k[1],w=S.useState(y!==void 0?y:i),O=Qn(w,2),A=O[0],_=O[1],Y=S.useCallback(function(T,I){typeof u=="function"&&u(T,I),_(T)},[u]),L=S.useCallback(function(T,I){var N;typeof c=="function"&&(N=c(T,I)),p(N!==void 0?N:T)},[c]),xe=S.useCallback(function(){typeof h=="function"&&h(),C(!0)},[h]),ze=S.useCallback(function(){typeof d=="function"&&d(),C(!1)},[d]),le=s!==void 0?s:f,ee=l!==void 0?l:x,Me=y!==void 0?y:A;return j(j({},g),{},{inputValue:le,menuIsOpen:ee,onChange:Y,onInputChange:L,onMenuClose:ze,onMenuOpen:xe,value:Me})}function R(){return R=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},R.apply(null,arguments)}function Ky(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function gf(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Nm(r.key),r)}}function Yy(e,n,t){return n&&gf(e.prototype,n),t&&gf(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function du(e,n){return du=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},du(e,n)}function Qy(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&du(e,n)}function Ti(e){return Ti=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ti(e)}function Lm(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Lm=function(){return!!e})()}function Xy(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Zy(e,n){if(n&&(Zt(n)=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Xy(e)}function Jy(e){var n=Lm();return function(){var t,r=Ti(e);if(n){var a=Ti(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return Zy(this,t)}}function eb(e){if(Array.isArray(e))return cu(e)}function nb(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ac(e){return eb(e)||nb(e)||Rm(e)||tb()}var rb=!1;function ab(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}function ob(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),e.nonce!==void 0&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}var ib=function(){function e(t){var r=this;this._insertTag=function(a){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,o),r.tags.push(a)},this.isSpeedy=t.speedy===void 0?!rb:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(r){r.forEach(this._insertTag)},n.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ob(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var o=ab(a);try{o.insertRule(r,o.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},n.flush=function(){this.tags.forEach(function(r){var a;return(a=r.parentNode)==null?void 0:a.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Le="-ms-",Ei="-moz-",W="-webkit-",$m="comm",_c="rule",Ic="decl",lb="@import",Fm="@keyframes",sb="@layer",ub=Math.abs,al=String.fromCharCode,cb=Object.assign;function db(e,n){return Ie(e,0)^45?(((n<<2^Ie(e,0))<<2^Ie(e,1))<<2^Ie(e,2))<<2^Ie(e,3):0}function Vm(e){return e.trim()}function fb(e,n){return(e=n.exec(e))?e[0]:e}function G(e,n,t){return e.replace(n,t)}function fu(e,n){return e.indexOf(n)}function Ie(e,n){return e.charCodeAt(n)|0}function $a(e,n,t){return e.slice(n,t)}function _n(e){return e.length}function Dc(e){return e.length}function zo(e,n){return n.push(e),e}function pb(e,n){return e.map(n).join("")}var ol=1,Nr=1,Um=0,Je=0,ge=0,Ur="";function il(e,n,t,r,a,o,i){return{value:e,root:n,parent:t,type:r,props:a,children:o,line:ol,column:Nr,length:i,return:""}}function ea(e,n){return cb(il("",null,null,"",null,null,0),e,{length:-e.length},n)}function mb(){return ge}function hb(){return ge=Je>0?Ie(Ur,--Je):0,Nr--,ge===10&&(Nr=1,ol--),ge}function ln(){return ge=Je<Um?Ie(Ur,Je++):0,Nr++,ge===10&&(Nr=1,ol++),ge}function Rn(){return Ie(Ur,Je)}function Zo(){return Je}function no(e,n){return $a(Ur,e,n)}function Fa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Hm(e){return ol=Nr=1,Um=_n(Ur=e),Je=0,[]}function Bm(e){return Ur="",e}function Jo(e){return Vm(no(Je-1,pu(e===91?e+2:e===40?e+1:e)))}function gb(e){for(;(ge=Rn())&&ge<33;)ln();return Fa(e)>2||Fa(ge)>3?"":" "}function vb(e,n){for(;--n&&ln()&&!(ge<48||ge>102||ge>57&&ge<65||ge>70&&ge<97););return no(e,Zo()+(n<6&&Rn()==32&&ln()==32))}function pu(e){for(;ln();)switch(ge){case e:return Je;case 34:case 39:e!==34&&e!==39&&pu(ge);break;case 40:e===41&&pu(e);break;case 92:ln();break}return Je}function yb(e,n){for(;ln()&&e+ge!==57;)if(e+ge===84&&Rn()===47)break;return"/*"+no(n,Je-1)+"*"+al(e===47?e:ln())}function bb(e){for(;!Fa(Rn());)ln();return no(e,Je)}function kb(e){return Bm(ei("",null,null,null,[""],e=Hm(e),0,[0],e))}function ei(e,n,t,r,a,o,i,s,l){for(var u=0,c=0,d=i,h=0,y=0,g=0,m=1,b=1,f=1,p=0,v="",k=a,x=o,C=r,w=v;b;)switch(g=p,p=ln()){case 40:if(g!=108&&Ie(w,d-1)==58){fu(w+=G(Jo(p),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:w+=Jo(p);break;case 9:case 10:case 13:case 32:w+=gb(g);break;case 92:w+=vb(Zo()-1,7);continue;case 47:switch(Rn()){case 42:case 47:zo(wb(yb(ln(),Zo()),n,t),l);break;default:w+="/"}break;case 123*m:s[u++]=_n(w)*f;case 125*m:case 59:case 0:switch(p){case 0:case 125:b=0;case 59+c:f==-1&&(w=G(w,/\f/g,"")),y>0&&_n(w)-d&&zo(y>32?yf(w+";",r,t,d-1):yf(G(w," ","")+";",r,t,d-2),l);break;case 59:w+=";";default:if(zo(C=vf(w,n,t,u,c,a,s,v,k=[],x=[],d),o),p===123)if(c===0)ei(w,n,C,C,k,o,d,s,x);else switch(h===99&&Ie(w,3)===110?100:h){case 100:case 108:case 109:case 115:ei(e,C,C,r&&zo(vf(e,C,C,0,0,a,s,v,a,k=[],d),x),a,x,d,s,r?k:x);break;default:ei(w,C,C,C,[""],x,0,s,x)}}u=c=y=0,m=f=1,v=w="",d=i;break;case 58:d=1+_n(w),y=g;default:if(m<1){if(p==123)--m;else if(p==125&&m++==0&&hb()==125)continue}switch(w+=al(p),p*m){case 38:f=c>0?1:(w+="\f",-1);break;case 44:s[u++]=(_n(w)-1)*f,f=1;break;case 64:Rn()===45&&(w+=Jo(ln())),h=Rn(),c=d=_n(v=w+=bb(Zo())),p++;break;case 45:g===45&&_n(w)==2&&(m=0)}}return o}function vf(e,n,t,r,a,o,i,s,l,u,c){for(var d=a-1,h=a===0?o:[""],y=Dc(h),g=0,m=0,b=0;g<r;++g)for(var f=0,p=$a(e,d+1,d=ub(m=i[g])),v=e;f<y;++f)(v=Vm(m>0?h[f]+" "+p:G(p,/&\f/g,h[f])))&&(l[b++]=v);return il(e,n,t,a===0?_c:s,l,u,c)}function wb(e,n,t){return il(e,n,t,$m,al(mb()),$a(e,2,-2),0)}function yf(e,n,t,r){return il(e,n,t,Ic,$a(e,0,r),$a(e,r+1,-1),r)}function Tr(e,n){for(var t="",r=Dc(e),a=0;a<r;a++)t+=n(e[a],a,e,n)||"";return t}function xb(e,n,t,r){switch(e.type){case sb:if(e.children.length)break;case lb:case Ic:return e.return=e.return||e.value;case $m:return"";case Fm:return e.return=e.value+"{"+Tr(e.children,r)+"}";case _c:e.value=e.props.join(",")}return _n(t=Tr(e.children,r))?e.return=e.value+"{"+t+"}":""}function Sb(e){var n=Dc(e);return function(t,r,a,o){for(var i="",s=0;s<n;s++)i+=e[s](t,r,a,o)||"";return i}}function Cb(e){return function(n){n.root||(n=n.return)&&e(n)}}function Ob(e){var n=Object.create(null);return function(t){return n[t]===void 0&&(n[t]=e(t)),n[t]}}var Pb=function(n,t,r){for(var a=0,o=0;a=o,o=Rn(),a===38&&o===12&&(t[r]=1),!Fa(o);)ln();return no(n,Je)},Tb=function(n,t){var r=-1,a=44;do switch(Fa(a)){case 0:a===38&&Rn()===12&&(t[r]=1),n[r]+=Pb(Je-1,t,r);break;case 2:n[r]+=Jo(a);break;case 4:if(a===44){n[++r]=Rn()===58?"&\f":"",t[r]=n[r].length;break}default:n[r]+=al(a)}while(a=ln());return n},Eb=function(n,t){return Bm(Tb(Hm(n),t))},bf=new WeakMap,zb=function(n){if(!(n.type!=="rule"||!n.parent||n.length<1)){for(var t=n.value,r=n.parent,a=n.column===r.column&&n.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(n.props.length===1&&t.charCodeAt(0)!==58&&!bf.get(r))&&!a){bf.set(n,!0);for(var o=[],i=Eb(t,o),s=r.props,l=0,u=0;l<i.length;l++)for(var c=0;c<s.length;c++,u++)n.props[u]=o[l]?i[l].replace(/&\f/g,s[c]):s[c]+" "+i[l]}}},Mb=function(n){if(n.type==="decl"){var t=n.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(n.return="",n.value="")}};function qm(e,n){switch(db(e,n)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+Ei+e+Le+e+e;case 6828:case 4268:return W+e+Le+e+e;case 6165:return W+e+Le+"flex-"+e+e;case 5187:return W+e+G(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+Le+"flex-$1$2")+e;case 5443:return W+e+Le+"flex-item-"+G(e,/flex-|-self/,"")+e;case 4675:return W+e+Le+"flex-line-pack"+G(e,/align-content|flex-|-self/,"")+e;case 5548:return W+e+Le+G(e,"shrink","negative")+e;case 5292:return W+e+Le+G(e,"basis","preferred-size")+e;case 6060:return W+"box-"+G(e,"-grow","")+W+e+Le+G(e,"grow","positive")+e;case 4554:return W+G(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return G(G(G(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return G(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return G(G(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+Le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4095:case 3583:case 4068:case 2532:return G(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_n(e)-1-n>6)switch(Ie(e,n+1)){case 109:if(Ie(e,n+4)!==45)break;case 102:return G(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+Ei+(Ie(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~fu(e,"stretch")?qm(G(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(Ie(e,n+1)!==115)break;case 6444:switch(Ie(e,_n(e)-3-(~fu(e,"!important")&&10))){case 107:return G(e,":",":"+W)+e;case 101:return G(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+W+(Ie(e,14)===45?"inline-":"")+"box$3$1"+W+"$2$3$1"+Le+"$2box$3")+e}break;case 5936:switch(Ie(e,n+11)){case 114:return W+e+Le+G(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+Le+G(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+Le+G(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return W+e+Le+e+e}return e}var Ab=function(n,t,r,a){if(n.length>-1&&!n.return)switch(n.type){case Ic:n.return=qm(n.value,n.length);break;case Fm:return Tr([ea(n,{value:G(n.value,"@","@"+W)})],a);case _c:if(n.length)return pb(n.props,function(o){switch(fb(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Tr([ea(n,{props:[G(o,/:(read-\w+)/,":"+Ei+"$1")]})],a);case"::placeholder":return Tr([ea(n,{props:[G(o,/:(plac\w+)/,":"+W+"input-$1")]}),ea(n,{props:[G(o,/:(plac\w+)/,":"+Ei+"$1")]}),ea(n,{props:[G(o,/:(plac\w+)/,Le+"input-$1")]})],a)}return""})}},_b=[Ab],Ib=function(n){var t=n.key;if(t==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var b=m.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var a=n.stylisPlugins||_b,o={},i,s=[];i=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(m){for(var b=m.getAttribute("data-emotion").split(" "),f=1;f<b.length;f++)o[b[f]]=!0;s.push(m)});var l,u=[zb,Mb];{var c,d=[xb,Cb(function(m){c.insert(m)})],h=Sb(u.concat(a,d)),y=function(b){return Tr(kb(b),h)};l=function(b,f,p,v){c=p,y(b?b+"{"+f.styles+"}":f.styles),v&&(g.inserted[f.name]=!0)}}var g={key:t,sheet:new ib({key:t,container:i,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:o,registered:{},insert:l};return g.sheet.hydrate(s),g},Wm={exports:{}},J={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee=typeof Symbol=="function"&&Symbol.for,jc=Ee?Symbol.for("react.element"):60103,Nc=Ee?Symbol.for("react.portal"):60106,ll=Ee?Symbol.for("react.fragment"):60107,sl=Ee?Symbol.for("react.strict_mode"):60108,ul=Ee?Symbol.for("react.profiler"):60114,cl=Ee?Symbol.for("react.provider"):60109,dl=Ee?Symbol.for("react.context"):60110,Rc=Ee?Symbol.for("react.async_mode"):60111,fl=Ee?Symbol.for("react.concurrent_mode"):60111,pl=Ee?Symbol.for("react.forward_ref"):60112,ml=Ee?Symbol.for("react.suspense"):60113,Db=Ee?Symbol.for("react.suspense_list"):60120,hl=Ee?Symbol.for("react.memo"):60115,gl=Ee?Symbol.for("react.lazy"):60116,jb=Ee?Symbol.for("react.block"):60121,Nb=Ee?Symbol.for("react.fundamental"):60117,Rb=Ee?Symbol.for("react.responder"):60118,Lb=Ee?Symbol.for("react.scope"):60119;function dn(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case jc:switch(e=e.type,e){case Rc:case fl:case ll:case ul:case sl:case ml:return e;default:switch(e=e&&e.$$typeof,e){case dl:case pl:case gl:case hl:case cl:return e;default:return n}}case Nc:return n}}}function Gm(e){return dn(e)===fl}J.AsyncMode=Rc;J.ConcurrentMode=fl;J.ContextConsumer=dl;J.ContextProvider=cl;J.Element=jc;J.ForwardRef=pl;J.Fragment=ll;J.Lazy=gl;J.Memo=hl;J.Portal=Nc;J.Profiler=ul;J.StrictMode=sl;J.Suspense=ml;J.isAsyncMode=function(e){return Gm(e)||dn(e)===Rc};J.isConcurrentMode=Gm;J.isContextConsumer=function(e){return dn(e)===dl};J.isContextProvider=function(e){return dn(e)===cl};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===jc};J.isForwardRef=function(e){return dn(e)===pl};J.isFragment=function(e){return dn(e)===ll};J.isLazy=function(e){return dn(e)===gl};J.isMemo=function(e){return dn(e)===hl};J.isPortal=function(e){return dn(e)===Nc};J.isProfiler=function(e){return dn(e)===ul};J.isStrictMode=function(e){return dn(e)===sl};J.isSuspense=function(e){return dn(e)===ml};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ll||e===fl||e===ul||e===sl||e===ml||e===Db||typeof e=="object"&&e!==null&&(e.$$typeof===gl||e.$$typeof===hl||e.$$typeof===cl||e.$$typeof===dl||e.$$typeof===pl||e.$$typeof===Nb||e.$$typeof===Rb||e.$$typeof===Lb||e.$$typeof===jb)};J.typeOf=dn;Wm.exports=J;var $b=Wm.exports,Km=$b,Fb={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ym={};Ym[Km.ForwardRef]=Fb;Ym[Km.Memo]=Vb;var Ub=!0;function Hb(e,n,t){var r="";return t.split(" ").forEach(function(a){e[a]!==void 0?n.push(e[a]+";"):a&&(r+=a+" ")}),r}var Qm=function(n,t,r){var a=n.key+"-"+t.name;(r===!1||Ub===!1)&&n.registered[a]===void 0&&(n.registered[a]=t.styles)},Bb=function(n,t,r){Qm(n,t,r);var a=n.key+"-"+t.name;if(n.inserted[t.name]===void 0){var o=t;do n.insert(t===o?"."+a:"",o,n.sheet,!0),o=o.next;while(o!==void 0)}};function qb(e){for(var n=0,t,r=0,a=e.length;a>=4;++r,a-=4)t=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,n=(t&65535)*1540483477+((t>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(a){case 3:n^=(e.charCodeAt(r+2)&255)<<16;case 2:n^=(e.charCodeAt(r+1)&255)<<8;case 1:n^=e.charCodeAt(r)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}var Wb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gb=!1,Kb=/[A-Z]|^ms/g,Yb=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Xm=function(n){return n.charCodeAt(1)===45},kf=function(n){return n!=null&&typeof n!="boolean"},Kl=Ob(function(e){return Xm(e)?e:e.replace(Kb,"-$&").toLowerCase()}),wf=function(n,t){switch(n){case"animation":case"animationName":if(typeof t=="string")return t.replace(Yb,function(r,a,o){return In={name:a,styles:o,next:In},a})}return Wb[n]!==1&&!Xm(n)&&typeof t=="number"&&t!==0?t+"px":t},Qb="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function Va(e,n,t){if(t==null)return"";var r=t;if(r.__emotion_styles!==void 0)return r;switch(typeof t){case"boolean":return"";case"object":{var a=t;if(a.anim===1)return In={name:a.name,styles:a.styles,next:In},a.name;var o=t;if(o.styles!==void 0){var i=o.next;if(i!==void 0)for(;i!==void 0;)In={name:i.name,styles:i.styles,next:In},i=i.next;var s=o.styles+";";return s}return Xb(e,n,t)}case"function":{if(e!==void 0){var l=In,u=t(e);return In=l,Va(e,n,u)}break}}var c=t;return c}function Xb(e,n,t){var r="";if(Array.isArray(t))for(var a=0;a<t.length;a++)r+=Va(e,n,t[a])+";";else for(var o in t){var i=t[o];if(typeof i!="object"){var s=i;kf(s)&&(r+=Kl(o)+":"+wf(o,s)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&Gb)throw new Error(Qb);if(Array.isArray(i)&&typeof i[0]=="string"&&n==null)for(var l=0;l<i.length;l++)kf(i[l])&&(r+=Kl(o)+":"+wf(o,i[l])+";");else{var u=Va(e,n,i);switch(o){case"animation":case"animationName":{r+=Kl(o)+":"+u+";";break}default:r+=o+"{"+u+"}"}}}}return r}var xf=/label:\s*([^\s;{]+)\s*(;|$)/g,In;function Zm(e,n,t){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,a="";In=void 0;var o=e[0];if(o==null||o.raw===void 0)r=!1,a+=Va(t,n,o);else{var i=o;a+=i[0]}for(var s=1;s<e.length;s++)if(a+=Va(t,n,e[s]),r){var l=o;a+=l[s]}xf.lastIndex=0;for(var u="",c;(c=xf.exec(a))!==null;)u+="-"+c[1];var d=qb(a)+u;return{name:d,styles:a,next:In}}var Zb=function(n){return n()},Jb=Zc.useInsertionEffect?Zc.useInsertionEffect:!1,ek=Jb||Zb,nk=!1,Jm=S.createContext(typeof HTMLElement<"u"?Ib({key:"css"}):null);Jm.Provider;var tk=function(n){return S.forwardRef(function(t,r){var a=S.useContext(Jm);return n(t,a,r)})},rk=S.createContext({}),Lc={}.hasOwnProperty,mu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",ak=function(n,t){var r={};for(var a in t)Lc.call(t,a)&&(r[a]=t[a]);return r[mu]=n,r},ok=function(n){var t=n.cache,r=n.serialized,a=n.isStringTag;return Qm(t,r,a),ek(function(){return Bb(t,r,a)}),null},ik=tk(function(e,n,t){var r=e.css;typeof r=="string"&&n.registered[r]!==void 0&&(r=n.registered[r]);var a=e[mu],o=[r],i="";typeof e.className=="string"?i=Hb(n.registered,o,e.className):e.className!=null&&(i=e.className+" ");var s=Zm(o,void 0,S.useContext(rk));i+=n.key+"-"+s.name;var l={};for(var u in e)Lc.call(e,u)&&u!=="css"&&u!==mu&&!nk&&(l[u]=e[u]);return l.className=i,t&&(l.ref=t),S.createElement(S.Fragment,null,S.createElement(ok,{cache:n,serialized:s,isStringTag:typeof a=="string"}),S.createElement(a,l))}),lk=ik,D=function(n,t){var r=arguments;if(t==null||!Lc.call(t,"css"))return S.createElement.apply(void 0,r);var a=r.length,o=new Array(a);o[0]=lk,o[1]=ak(n,t);for(var i=2;i<a;i++)o[i]=r[i];return S.createElement.apply(null,o)};(function(e){var n;n||(n=e.JSX||(e.JSX={}))})(D||(D={}));function $c(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return Zm(n)}function sk(){var e=$c.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function uk(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}const ck=Math.min,dk=Math.max,zi=Math.round,Mo=Math.floor,Mi=e=>({x:e,y:e});function fk(e){const{x:n,y:t,width:r,height:a}=e;return{width:r,height:a,top:t,left:n,right:n+r,bottom:t+a,x:n,y:t}}function vl(){return typeof window<"u"}function eh(e){return th(e)?(e.nodeName||"").toLowerCase():"#document"}function nt(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function nh(e){var n;return(n=(th(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function th(e){return vl()?e instanceof Node||e instanceof nt(e).Node:!1}function pk(e){return vl()?e instanceof Element||e instanceof nt(e).Element:!1}function Fc(e){return vl()?e instanceof HTMLElement||e instanceof nt(e).HTMLElement:!1}function Sf(e){return!vl()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof nt(e).ShadowRoot}function rh(e){const{overflow:n,overflowX:t,overflowY:r,display:a}=Vc(e);return/auto|scroll|overlay|hidden|clip/.test(n+r+t)&&!["inline","contents"].includes(a)}function mk(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function hk(e){return["html","body","#document"].includes(eh(e))}function Vc(e){return nt(e).getComputedStyle(e)}function gk(e){if(eh(e)==="html")return e;const n=e.assignedSlot||e.parentNode||Sf(e)&&e.host||nh(e);return Sf(n)?n.host:n}function ah(e){const n=gk(e);return hk(n)?e.ownerDocument?e.ownerDocument.body:e.body:Fc(n)&&rh(n)?n:ah(n)}function Ai(e,n,t){var r;n===void 0&&(n=[]),t===void 0&&(t=!0);const a=ah(e),o=a===((r=e.ownerDocument)==null?void 0:r.body),i=nt(a);if(o){const s=hu(i);return n.concat(i,i.visualViewport||[],rh(a)?a:[],s&&t?Ai(s):[])}return n.concat(a,Ai(a,[],t))}function hu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function vk(e){const n=Vc(e);let t=parseFloat(n.width)||0,r=parseFloat(n.height)||0;const a=Fc(e),o=a?e.offsetWidth:t,i=a?e.offsetHeight:r,s=zi(t)!==o||zi(r)!==i;return s&&(t=o,r=i),{width:t,height:r,$:s}}function Uc(e){return pk(e)?e:e.contextElement}function Cf(e){const n=Uc(e);if(!Fc(n))return Mi(1);const t=n.getBoundingClientRect(),{width:r,height:a,$:o}=vk(n);let i=(o?zi(t.width):t.width)/r,s=(o?zi(t.height):t.height)/a;return(!i||!Number.isFinite(i))&&(i=1),(!s||!Number.isFinite(s))&&(s=1),{x:i,y:s}}const yk=Mi(0);function bk(e){const n=nt(e);return!mk()||!n.visualViewport?yk:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function kk(e,n,t){return!1}function Of(e,n,t,r){n===void 0&&(n=!1);const a=e.getBoundingClientRect(),o=Uc(e);let i=Mi(1);n&&(i=Cf(e));const s=kk()?bk(o):Mi(0);let l=(a.left+s.x)/i.x,u=(a.top+s.y)/i.y,c=a.width/i.x,d=a.height/i.y;if(o){const h=nt(o),y=r;let g=h,m=hu(g);for(;m&&r&&y!==g;){const b=Cf(m),f=m.getBoundingClientRect(),p=Vc(m),v=f.left+(m.clientLeft+parseFloat(p.paddingLeft))*b.x,k=f.top+(m.clientTop+parseFloat(p.paddingTop))*b.y;l*=b.x,u*=b.y,c*=b.x,d*=b.y,l+=v,u+=k,g=nt(m),m=hu(g)}}return fk({width:c,height:d,x:l,y:u})}function oh(e,n){return e.x===n.x&&e.y===n.y&&e.width===n.width&&e.height===n.height}function wk(e,n){let t=null,r;const a=nh(e);function o(){var s;clearTimeout(r),(s=t)==null||s.disconnect(),t=null}function i(s,l){s===void 0&&(s=!1),l===void 0&&(l=1),o();const u=e.getBoundingClientRect(),{left:c,top:d,width:h,height:y}=u;if(s||n(),!h||!y)return;const g=Mo(d),m=Mo(a.clientWidth-(c+h)),b=Mo(a.clientHeight-(d+y)),f=Mo(c),v={rootMargin:-g+"px "+-m+"px "+-b+"px "+-f+"px",threshold:dk(0,ck(1,l))||1};let k=!0;function x(C){const w=C[0].intersectionRatio;if(w!==l){if(!k)return i();w?i(!1,w):r=setTimeout(()=>{i(!1,1e-7)},1e3)}w===1&&!oh(u,e.getBoundingClientRect())&&i(),k=!1}try{t=new IntersectionObserver(x,{...v,root:a.ownerDocument})}catch{t=new IntersectionObserver(x,v)}t.observe(e)}return i(!0),o}function xk(e,n,t,r){r===void 0&&(r={});const{ancestorScroll:a=!0,ancestorResize:o=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,u=Uc(e),c=a||o?[...u?Ai(u):[],...Ai(n)]:[];c.forEach(f=>{a&&f.addEventListener("scroll",t,{passive:!0}),o&&f.addEventListener("resize",t)});const d=u&&s?wk(u,t):null;let h=-1,y=null;i&&(y=new ResizeObserver(f=>{let[p]=f;p&&p.target===u&&y&&(y.unobserve(n),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var v;(v=y)==null||v.observe(n)})),t()}),u&&!l&&y.observe(u),y.observe(n));let g,m=l?Of(e):null;l&&b();function b(){const f=Of(e);m&&!oh(m,f)&&t(),m=f,g=requestAnimationFrame(b)}return t(),()=>{var f;c.forEach(p=>{a&&p.removeEventListener("scroll",t),o&&p.removeEventListener("resize",t)}),d==null||d(),(f=y)==null||f.disconnect(),y=null,l&&cancelAnimationFrame(g)}}var gu=S.useLayoutEffect,Sk=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],_i=function(){};function Ck(e,n){return n?n[0]==="-"?e+n:e+"__"+n:e}function Ok(e,n){for(var t=arguments.length,r=new Array(t>2?t-2:0),a=2;a<t;a++)r[a-2]=arguments[a];var o=[].concat(r);if(n&&e)for(var i in n)n.hasOwnProperty(i)&&n[i]&&o.push("".concat(Ck(e,i)));return o.filter(function(s){return s}).map(function(s){return String(s).trim()}).join(" ")}var Pf=function(n){return Dk(n)?n.filter(Boolean):Zt(n)==="object"&&n!==null?[n]:[]},ih=function(n){n.className,n.clearValue,n.cx,n.getStyles,n.getClassNames,n.getValue,n.hasValue,n.isMulti,n.isRtl,n.options,n.selectOption,n.selectProps,n.setValue,n.theme;var t=rt(n,Sk);return j({},t)},fe=function(n,t,r){var a=n.cx,o=n.getStyles,i=n.getClassNames,s=n.className;return{css:o(t,n),className:a(r??{},i(t,n),s)}};function yl(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function Pk(e){return yl(e)?window.innerHeight:e.clientHeight}function lh(e){return yl(e)?window.pageYOffset:e.scrollTop}function Ii(e,n){if(yl(e)){window.scrollTo(0,n);return}e.scrollTop=n}function Tk(e){var n=getComputedStyle(e),t=n.position==="absolute",r=/(auto|scroll)/;if(n.position==="fixed")return document.documentElement;for(var a=e;a=a.parentElement;)if(n=getComputedStyle(a),!(t&&n.position==="static")&&r.test(n.overflow+n.overflowY+n.overflowX))return a;return document.documentElement}function Ek(e,n,t,r){return t*((e=e/r-1)*e*e+1)+n}function Ao(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:_i,a=lh(e),o=n-a,i=10,s=0;function l(){s+=i;var u=Ek(s,a,o,t);Ii(e,u),s<t?window.requestAnimationFrame(l):r(e)}l()}function Tf(e,n){var t=e.getBoundingClientRect(),r=n.getBoundingClientRect(),a=n.offsetHeight/3;r.bottom+a>t.bottom?Ii(e,Math.min(n.offsetTop+n.clientHeight-e.offsetHeight+a,e.scrollHeight)):r.top-a<t.top&&Ii(e,Math.max(n.offsetTop-a,0))}function zk(e){var n=e.getBoundingClientRect();return{bottom:n.bottom,height:n.height,left:n.left,right:n.right,top:n.top,width:n.width}}function Ef(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Mk(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var sh=!1,Ak={get passive(){return sh=!0}},_o=typeof window<"u"?window:{};_o.addEventListener&&_o.removeEventListener&&(_o.addEventListener("p",_i,Ak),_o.removeEventListener("p",_i,!1));var _k=sh;function Ik(e){return e!=null}function Dk(e){return Array.isArray(e)}function Io(e,n,t){return e?n:t}var jk=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var o=Object.entries(n).filter(function(i){var s=Qn(i,1),l=s[0];return!r.includes(l)});return o.reduce(function(i,s){var l=Qn(s,2),u=l[0],c=l[1];return i[u]=c,i},{})},Nk=["children","innerProps"],Rk=["children","innerProps"];function Lk(e){var n=e.maxHeight,t=e.menuEl,r=e.minHeight,a=e.placement,o=e.shouldScroll,i=e.isFixedPosition,s=e.controlHeight,l=Tk(t),u={placement:"bottom",maxHeight:n};if(!t||!t.offsetParent)return u;var c=l.getBoundingClientRect(),d=c.height,h=t.getBoundingClientRect(),y=h.bottom,g=h.height,m=h.top,b=t.offsetParent.getBoundingClientRect(),f=b.top,p=i?window.innerHeight:Pk(l),v=lh(l),k=parseInt(getComputedStyle(t).marginBottom,10),x=parseInt(getComputedStyle(t).marginTop,10),C=f-x,w=p-m,O=C+v,A=d-v-m,_=y-p+v+k,Y=v+m-x,L=160;switch(a){case"auto":case"bottom":if(w>=g)return{placement:"bottom",maxHeight:n};if(A>=g&&!i)return o&&Ao(l,_,L),{placement:"bottom",maxHeight:n};if(!i&&A>=r||i&&w>=r){o&&Ao(l,_,L);var xe=i?w-k:A-k;return{placement:"bottom",maxHeight:xe}}if(a==="auto"||i){var ze=n,le=i?C:O;return le>=r&&(ze=Math.min(le-k-s,n)),{placement:"top",maxHeight:ze}}if(a==="bottom")return o&&Ii(l,_),{placement:"bottom",maxHeight:n};break;case"top":if(C>=g)return{placement:"top",maxHeight:n};if(O>=g&&!i)return o&&Ao(l,Y,L),{placement:"top",maxHeight:n};if(!i&&O>=r||i&&C>=r){var ee=n;return(!i&&O>=r||i&&C>=r)&&(ee=i?C-x:O-x),o&&Ao(l,Y,L),{placement:"top",maxHeight:ee}}return{placement:"bottom",maxHeight:n};default:throw new Error('Invalid placement provided "'.concat(a,'".'))}return u}function $k(e){var n={bottom:"top",top:"bottom"};return e?n[e]:"bottom"}var uh=function(n){return n==="auto"?"bottom":n},Fk=function(n,t){var r,a=n.placement,o=n.theme,i=o.borderRadius,s=o.spacing,l=o.colors;return j((r={label:"menu"},ca(r,$k(a),"100%"),ca(r,"position","absolute"),ca(r,"width","100%"),ca(r,"zIndex",1),r),t?{}:{backgroundColor:l.neutral0,borderRadius:i,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:s.menuGutter,marginTop:s.menuGutter})},ch=S.createContext(null),Vk=function(n){var t=n.children,r=n.minMenuHeight,a=n.maxMenuHeight,o=n.menuPlacement,i=n.menuPosition,s=n.menuShouldScrollIntoView,l=n.theme,u=S.useContext(ch)||{},c=u.setPortalPlacement,d=S.useRef(null),h=S.useState(a),y=Qn(h,2),g=y[0],m=y[1],b=S.useState(null),f=Qn(b,2),p=f[0],v=f[1],k=l.spacing.controlHeight;return gu(function(){var x=d.current;if(x){var C=i==="fixed",w=s&&!C,O=Lk({maxHeight:a,menuEl:x,minHeight:r,placement:o,shouldScroll:w,isFixedPosition:C,controlHeight:k});m(O.maxHeight),v(O.placement),c==null||c(O.placement)}},[a,o,i,s,r,c,k]),t({ref:d,placerProps:j(j({},n),{},{placement:p||uh(o),maxHeight:g})})},Uk=function(n){var t=n.children,r=n.innerRef,a=n.innerProps;return D("div",R({},fe(n,"menu",{menu:!0}),{ref:r},a),t)},Hk=Uk,Bk=function(n,t){var r=n.maxHeight,a=n.theme.spacing.baseUnit;return j({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},t?{}:{paddingBottom:a,paddingTop:a})},qk=function(n){var t=n.children,r=n.innerProps,a=n.innerRef,o=n.isMulti;return D("div",R({},fe(n,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:a},r),t)},dh=function(n,t){var r=n.theme,a=r.spacing.baseUnit,o=r.colors;return j({textAlign:"center"},t?{}:{color:o.neutral40,padding:"".concat(a*2,"px ").concat(a*3,"px")})},Wk=dh,Gk=dh,Kk=function(n){var t=n.children,r=t===void 0?"No options":t,a=n.innerProps,o=rt(n,Nk);return D("div",R({},fe(j(j({},o),{},{children:r,innerProps:a}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),a),r)},Yk=function(n){var t=n.children,r=t===void 0?"Loading...":t,a=n.innerProps,o=rt(n,Rk);return D("div",R({},fe(j(j({},o),{},{children:r,innerProps:a}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),a),r)},Qk=function(n){var t=n.rect,r=n.offset,a=n.position;return{left:t.left,position:a,top:r,width:t.width,zIndex:1}},Xk=function(n){var t=n.appendTo,r=n.children,a=n.controlElement,o=n.innerProps,i=n.menuPlacement,s=n.menuPosition,l=S.useRef(null),u=S.useRef(null),c=S.useState(uh(i)),d=Qn(c,2),h=d[0],y=d[1],g=S.useMemo(function(){return{setPortalPlacement:y}},[]),m=S.useState(null),b=Qn(m,2),f=b[0],p=b[1],v=S.useCallback(function(){if(a){var w=zk(a),O=s==="fixed"?0:window.pageYOffset,A=w[h]+O;(A!==(f==null?void 0:f.offset)||w.left!==(f==null?void 0:f.rect.left)||w.width!==(f==null?void 0:f.rect.width))&&p({offset:A,rect:w})}},[a,s,h,f==null?void 0:f.offset,f==null?void 0:f.rect.left,f==null?void 0:f.rect.width]);gu(function(){v()},[v]);var k=S.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),a&&l.current&&(u.current=xk(a,l.current,v,{elementResize:"ResizeObserver"in window}))},[a,v]);gu(function(){k()},[k]);var x=S.useCallback(function(w){l.current=w,k()},[k]);if(!t&&s!=="fixed"||!f)return null;var C=D("div",R({ref:x},fe(j(j({},n),{},{offset:f.offset,position:s,rect:f.rect}),"menuPortal",{"menu-portal":!0}),o),r);return D(ch.Provider,{value:g},t?bm.createPortal(C,t):C)},Zk=function(n){var t=n.isDisabled,r=n.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:t?"none":void 0,position:"relative"}},Jk=function(n){var t=n.children,r=n.innerProps,a=n.isDisabled,o=n.isRtl;return D("div",R({},fe(n,"container",{"--is-disabled":a,"--is-rtl":o}),r),t)},e2=function(n,t){var r=n.theme.spacing,a=n.isMulti,o=n.hasValue,i=n.selectProps.controlShouldRenderValue;return j({alignItems:"center",display:a&&o&&i?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},t?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},n2=function(n){var t=n.children,r=n.innerProps,a=n.isMulti,o=n.hasValue;return D("div",R({},fe(n,"valueContainer",{"value-container":!0,"value-container--is-multi":a,"value-container--has-value":o}),r),t)},t2=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},r2=function(n){var t=n.children,r=n.innerProps;return D("div",R({},fe(n,"indicatorsContainer",{indicators:!0}),r),t)},zf,a2=["size"],o2=["innerProps","isRtl","size"],i2={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},fh=function(n){var t=n.size,r=rt(n,a2);return D("svg",R({height:t,width:t,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:i2},r))},Hc=function(n){return D(fh,R({size:20},n),D("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},ph=function(n){return D(fh,R({size:20},n),D("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},mh=function(n,t){var r=n.isFocused,a=n.theme,o=a.spacing.baseUnit,i=a.colors;return j({label:"indicatorContainer",display:"flex",transition:"color 150ms"},t?{}:{color:r?i.neutral60:i.neutral20,padding:o*2,":hover":{color:r?i.neutral80:i.neutral40}})},l2=mh,s2=function(n){var t=n.children,r=n.innerProps;return D("div",R({},fe(n,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),t||D(ph,null))},u2=mh,c2=function(n){var t=n.children,r=n.innerProps;return D("div",R({},fe(n,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),t||D(Hc,null))},d2=function(n,t){var r=n.isDisabled,a=n.theme,o=a.spacing.baseUnit,i=a.colors;return j({label:"indicatorSeparator",alignSelf:"stretch",width:1},t?{}:{backgroundColor:r?i.neutral10:i.neutral20,marginBottom:o*2,marginTop:o*2})},f2=function(n){var t=n.innerProps;return D("span",R({},t,fe(n,"indicatorSeparator",{"indicator-separator":!0})))},p2=sk(zf||(zf=uk([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),m2=function(n,t){var r=n.isFocused,a=n.size,o=n.theme,i=o.colors,s=o.spacing.baseUnit;return j({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:a,lineHeight:1,marginRight:a,textAlign:"center",verticalAlign:"middle"},t?{}:{color:r?i.neutral60:i.neutral20,padding:s*2})},Yl=function(n){var t=n.delay,r=n.offset;return D("span",{css:$c({animation:"".concat(p2," 1s ease-in-out ").concat(t,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},h2=function(n){var t=n.innerProps,r=n.isRtl,a=n.size,o=a===void 0?4:a,i=rt(n,o2);return D("div",R({},fe(j(j({},i),{},{innerProps:t,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),t),D(Yl,{delay:0,offset:r}),D(Yl,{delay:160,offset:!0}),D(Yl,{delay:320,offset:!r}))},g2=function(n,t){var r=n.isDisabled,a=n.isFocused,o=n.theme,i=o.colors,s=o.borderRadius,l=o.spacing;return j({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:l.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},t?{}:{backgroundColor:r?i.neutral5:i.neutral0,borderColor:r?i.neutral10:a?i.primary:i.neutral20,borderRadius:s,borderStyle:"solid",borderWidth:1,boxShadow:a?"0 0 0 1px ".concat(i.primary):void 0,"&:hover":{borderColor:a?i.primary:i.neutral30}})},v2=function(n){var t=n.children,r=n.isDisabled,a=n.isFocused,o=n.innerRef,i=n.innerProps,s=n.menuIsOpen;return D("div",R({ref:o},fe(n,"control",{control:!0,"control--is-disabled":r,"control--is-focused":a,"control--menu-is-open":s}),i,{"aria-disabled":r||void 0}),t)},y2=v2,b2=["data"],k2=function(n,t){var r=n.theme.spacing;return t?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},w2=function(n){var t=n.children,r=n.cx,a=n.getStyles,o=n.getClassNames,i=n.Heading,s=n.headingProps,l=n.innerProps,u=n.label,c=n.theme,d=n.selectProps;return D("div",R({},fe(n,"group",{group:!0}),l),D(i,R({},s,{selectProps:d,theme:c,getStyles:a,getClassNames:o,cx:r}),u),D("div",null,t))},x2=function(n,t){var r=n.theme,a=r.colors,o=r.spacing;return j({label:"group",cursor:"default",display:"block"},t?{}:{color:a.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},S2=function(n){var t=ih(n);t.data;var r=rt(t,b2);return D("div",R({},fe(n,"groupHeading",{"group-heading":!0}),r))},C2=w2,O2=["innerRef","isDisabled","isHidden","inputClassName"],P2=function(n,t){var r=n.isDisabled,a=n.value,o=n.theme,i=o.spacing,s=o.colors;return j(j({visibility:r?"hidden":"visible",transform:a?"translateZ(0)":""},T2),t?{}:{margin:i.baseUnit/2,paddingBottom:i.baseUnit/2,paddingTop:i.baseUnit/2,color:s.neutral80})},hh={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},T2={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":j({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},hh)},E2=function(n){return j({label:"input",color:"inherit",background:0,opacity:n?0:1,width:"100%"},hh)},z2=function(n){var t=n.cx,r=n.value,a=ih(n),o=a.innerRef,i=a.isDisabled,s=a.isHidden,l=a.inputClassName,u=rt(a,O2);return D("div",R({},fe(n,"input",{"input-container":!0}),{"data-value":r||""}),D("input",R({className:t({input:!0},l),ref:o,style:E2(s),disabled:i},u)))},M2=z2,A2=function(n,t){var r=n.theme,a=r.spacing,o=r.borderRadius,i=r.colors;return j({label:"multiValue",display:"flex",minWidth:0},t?{}:{backgroundColor:i.neutral10,borderRadius:o/2,margin:a.baseUnit/2})},_2=function(n,t){var r=n.theme,a=r.borderRadius,o=r.colors,i=n.cropWithEllipsis;return j({overflow:"hidden",textOverflow:i||i===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},t?{}:{borderRadius:a/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},I2=function(n,t){var r=n.theme,a=r.spacing,o=r.borderRadius,i=r.colors,s=n.isFocused;return j({alignItems:"center",display:"flex"},t?{}:{borderRadius:o/2,backgroundColor:s?i.dangerLight:void 0,paddingLeft:a.baseUnit,paddingRight:a.baseUnit,":hover":{backgroundColor:i.dangerLight,color:i.danger}})},gh=function(n){var t=n.children,r=n.innerProps;return D("div",r,t)},D2=gh,j2=gh;function N2(e){var n=e.children,t=e.innerProps;return D("div",R({role:"button"},t),n||D(Hc,{size:14}))}var R2=function(n){var t=n.children,r=n.components,a=n.data,o=n.innerProps,i=n.isDisabled,s=n.removeProps,l=n.selectProps,u=r.Container,c=r.Label,d=r.Remove;return D(u,{data:a,innerProps:j(j({},fe(n,"multiValue",{"multi-value":!0,"multi-value--is-disabled":i})),o),selectProps:l},D(c,{data:a,innerProps:j({},fe(n,"multiValueLabel",{"multi-value__label":!0})),selectProps:l},t),D(d,{data:a,innerProps:j(j({},fe(n,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(t||"option")},s),selectProps:l}))},L2=R2,$2=function(n,t){var r=n.isDisabled,a=n.isFocused,o=n.isSelected,i=n.theme,s=i.spacing,l=i.colors;return j({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},t?{}:{backgroundColor:o?l.primary:a?l.primary25:"transparent",color:r?l.neutral20:o?l.neutral0:"inherit",padding:"".concat(s.baseUnit*2,"px ").concat(s.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?l.primary:l.primary50}})},F2=function(n){var t=n.children,r=n.isDisabled,a=n.isFocused,o=n.isSelected,i=n.innerRef,s=n.innerProps;return D("div",R({},fe(n,"option",{option:!0,"option--is-disabled":r,"option--is-focused":a,"option--is-selected":o}),{ref:i,"aria-disabled":r},s),t)},V2=F2,U2=function(n,t){var r=n.theme,a=r.spacing,o=r.colors;return j({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},t?{}:{color:o.neutral50,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},H2=function(n){var t=n.children,r=n.innerProps;return D("div",R({},fe(n,"placeholder",{placeholder:!0}),r),t)},B2=H2,q2=function(n,t){var r=n.isDisabled,a=n.theme,o=a.spacing,i=a.colors;return j({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t?{}:{color:r?i.neutral40:i.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},W2=function(n){var t=n.children,r=n.isDisabled,a=n.innerProps;return D("div",R({},fe(n,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),a),t)},G2=W2,K2={ClearIndicator:c2,Control:y2,DropdownIndicator:s2,DownChevron:ph,CrossIcon:Hc,Group:C2,GroupHeading:S2,IndicatorsContainer:r2,IndicatorSeparator:f2,Input:M2,LoadingIndicator:h2,Menu:Hk,MenuList:qk,MenuPortal:Xk,LoadingMessage:Yk,NoOptionsMessage:Kk,MultiValue:L2,MultiValueContainer:D2,MultiValueLabel:j2,MultiValueRemove:N2,Option:V2,Placeholder:B2,SelectContainer:Jk,SingleValue:G2,ValueContainer:n2},Y2=function(n){return j(j({},K2),n.components)},Mf=Number.isNaN||function(n){return typeof n=="number"&&n!==n};function Q2(e,n){return!!(e===n||Mf(e)&&Mf(n))}function X2(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(!Q2(e[t],n[t]))return!1;return!0}function Z2(e,n){n===void 0&&(n=X2);var t=null;function r(){for(var a=[],o=0;o<arguments.length;o++)a[o]=arguments[o];if(t&&t.lastThis===this&&n(a,t.lastArgs))return t.lastResult;var i=e.apply(this,a);return t={lastResult:i,lastArgs:a,lastThis:this},i}return r.clear=function(){t=null},r}var J2={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},ew=function(n){return D("span",R({css:J2},n))},Af=ew,nw={guidance:function(n){var t=n.isSearchable,r=n.isMulti,a=n.tabSelectsValue,o=n.context,i=n.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return i?"".concat(n["aria-label"]||"Select"," is focused ").concat(t?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(n){var t=n.action,r=n.label,a=r===void 0?"":r,o=n.labels,i=n.isDisabled;switch(t){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(a,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return i?"option ".concat(a," is disabled. Select another option."):"option ".concat(a,", selected.");default:return""}},onFocus:function(n){var t=n.context,r=n.focused,a=n.options,o=n.label,i=o===void 0?"":o,s=n.selectValue,l=n.isDisabled,u=n.isSelected,c=n.isAppleDevice,d=function(m,b){return m&&m.length?"".concat(m.indexOf(b)+1," of ").concat(m.length):""};if(t==="value"&&s)return"value ".concat(i," focused, ").concat(d(s,r),".");if(t==="menu"&&c){var h=l?" disabled":"",y="".concat(u?" selected":"").concat(h);return"".concat(i).concat(y,", ").concat(d(a,r),".")}return""},onFilter:function(n){var t=n.inputValue,r=n.resultsMessage;return"".concat(r).concat(t?" for search term "+t:"",".")}},tw=function(n){var t=n.ariaSelection,r=n.focusedOption,a=n.focusedValue,o=n.focusableOptions,i=n.isFocused,s=n.selectValue,l=n.selectProps,u=n.id,c=n.isAppleDevice,d=l.ariaLiveMessages,h=l.getOptionLabel,y=l.inputValue,g=l.isMulti,m=l.isOptionDisabled,b=l.isSearchable,f=l.menuIsOpen,p=l.options,v=l.screenReaderStatus,k=l.tabSelectsValue,x=l.isLoading,C=l["aria-label"],w=l["aria-live"],O=S.useMemo(function(){return j(j({},nw),d||{})},[d]),A=S.useMemo(function(){var le="";if(t&&O.onChange){var ee=t.option,Me=t.options,T=t.removedValue,I=t.removedValues,N=t.value,B=function(Ln){return Array.isArray(Ln)?null:Ln},V=T||ee||B(N),Se=V?h(V):"",Ae=Me||I||void 0,fn=Ae?Ae.map(h):[],ye=j({isDisabled:V&&m(V,s),label:Se,labels:fn},t);le=O.onChange(ye)}return le},[t,O,m,s,h]),_=S.useMemo(function(){var le="",ee=r||a,Me=!!(r&&s&&s.includes(r));if(ee&&O.onFocus){var T={focused:ee,label:h(ee),isDisabled:m(ee,s),isSelected:Me,options:o,context:ee===r?"menu":"value",selectValue:s,isAppleDevice:c};le=O.onFocus(T)}return le},[r,a,h,m,O,o,s,c]),Y=S.useMemo(function(){var le="";if(f&&p.length&&!x&&O.onFilter){var ee=v({count:o.length});le=O.onFilter({inputValue:y,resultsMessage:ee})}return le},[o,y,f,O,p,v,x]),L=(t==null?void 0:t.action)==="initial-input-focus",xe=S.useMemo(function(){var le="";if(O.guidance){var ee=a?"value":f?"menu":"input";le=O.guidance({"aria-label":C,context:ee,isDisabled:r&&m(r,s),isMulti:g,isSearchable:b,tabSelectsValue:k,isInitialFocus:L})}return le},[C,r,a,g,m,b,f,O,s,k,L]),ze=D(S.Fragment,null,D("span",{id:"aria-selection"},A),D("span",{id:"aria-focused"},_),D("span",{id:"aria-results"},Y),D("span",{id:"aria-guidance"},xe));return D(S.Fragment,null,D(Af,{id:u},L&&ze),D(Af,{"aria-live":w,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},i&&!L&&ze))},rw=tw,vu=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],aw=new RegExp("["+vu.map(function(e){return e.letters}).join("")+"]","g"),vh={};for(var Ql=0;Ql<vu.length;Ql++)for(var Xl=vu[Ql],Zl=0;Zl<Xl.letters.length;Zl++)vh[Xl.letters[Zl]]=Xl.base;var yh=function(n){return n.replace(aw,function(t){return vh[t]})},ow=Z2(yh),_f=function(n){return n.replace(/^\s+|\s+$/g,"")},iw=function(n){return"".concat(n.label," ").concat(n.value)},lw=function(n){return function(t,r){if(t.data.__isNew__)return!0;var a=j({ignoreCase:!0,ignoreAccents:!0,stringify:iw,trim:!0,matchFrom:"any"},n),o=a.ignoreCase,i=a.ignoreAccents,s=a.stringify,l=a.trim,u=a.matchFrom,c=l?_f(r):r,d=l?_f(s(t)):s(t);return o&&(c=c.toLowerCase(),d=d.toLowerCase()),i&&(c=ow(c),d=yh(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},sw=["innerRef"];function uw(e){var n=e.innerRef,t=rt(e,sw),r=jk(t,"onExited","in","enter","exit","appear");return D("input",R({ref:n},r,{css:$c({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var cw=function(n){n.cancelable&&n.preventDefault(),n.stopPropagation()};function dw(e){var n=e.isEnabled,t=e.onBottomArrive,r=e.onBottomLeave,a=e.onTopArrive,o=e.onTopLeave,i=S.useRef(!1),s=S.useRef(!1),l=S.useRef(0),u=S.useRef(null),c=S.useCallback(function(b,f){if(u.current!==null){var p=u.current,v=p.scrollTop,k=p.scrollHeight,x=p.clientHeight,C=u.current,w=f>0,O=k-x-v,A=!1;O>f&&i.current&&(r&&r(b),i.current=!1),w&&s.current&&(o&&o(b),s.current=!1),w&&f>O?(t&&!i.current&&t(b),C.scrollTop=k,A=!0,i.current=!0):!w&&-f>v&&(a&&!s.current&&a(b),C.scrollTop=0,A=!0,s.current=!0),A&&cw(b)}},[t,r,a,o]),d=S.useCallback(function(b){c(b,b.deltaY)},[c]),h=S.useCallback(function(b){l.current=b.changedTouches[0].clientY},[]),y=S.useCallback(function(b){var f=l.current-b.changedTouches[0].clientY;c(b,f)},[c]),g=S.useCallback(function(b){if(b){var f=_k?{passive:!1}:!1;b.addEventListener("wheel",d,f),b.addEventListener("touchstart",h,f),b.addEventListener("touchmove",y,f)}},[y,h,d]),m=S.useCallback(function(b){b&&(b.removeEventListener("wheel",d,!1),b.removeEventListener("touchstart",h,!1),b.removeEventListener("touchmove",y,!1))},[y,h,d]);return S.useEffect(function(){if(n){var b=u.current;return g(b),function(){m(b)}}},[n,g,m]),function(b){u.current=b}}var If=["boxSizing","height","overflow","paddingRight","position"],Df={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function jf(e){e.cancelable&&e.preventDefault()}function Nf(e){e.stopPropagation()}function Rf(){var e=this.scrollTop,n=this.scrollHeight,t=e+this.offsetHeight;e===0?this.scrollTop=1:t===n&&(this.scrollTop=e-1)}function Lf(){return"ontouchstart"in window||navigator.maxTouchPoints}var $f=!!(typeof window<"u"&&window.document&&window.document.createElement),na=0,or={capture:!1,passive:!1};function fw(e){var n=e.isEnabled,t=e.accountForScrollbars,r=t===void 0?!0:t,a=S.useRef({}),o=S.useRef(null),i=S.useCallback(function(l){if($f){var u=document.body,c=u&&u.style;if(r&&If.forEach(function(g){var m=c&&c[g];a.current[g]=m}),r&&na<1){var d=parseInt(a.current.paddingRight,10)||0,h=document.body?document.body.clientWidth:0,y=window.innerWidth-h+d||0;Object.keys(Df).forEach(function(g){var m=Df[g];c&&(c[g]=m)}),c&&(c.paddingRight="".concat(y,"px"))}u&&Lf()&&(u.addEventListener("touchmove",jf,or),l&&(l.addEventListener("touchstart",Rf,or),l.addEventListener("touchmove",Nf,or))),na+=1}},[r]),s=S.useCallback(function(l){if($f){var u=document.body,c=u&&u.style;na=Math.max(na-1,0),r&&na<1&&If.forEach(function(d){var h=a.current[d];c&&(c[d]=h)}),u&&Lf()&&(u.removeEventListener("touchmove",jf,or),l&&(l.removeEventListener("touchstart",Rf,or),l.removeEventListener("touchmove",Nf,or)))}},[r]);return S.useEffect(function(){if(n){var l=o.current;return i(l),function(){s(l)}}},[n,i,s]),function(l){o.current=l}}var pw=function(n){var t=n.target;return t.ownerDocument.activeElement&&t.ownerDocument.activeElement.blur()},mw={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function hw(e){var n=e.children,t=e.lockEnabled,r=e.captureEnabled,a=r===void 0?!0:r,o=e.onBottomArrive,i=e.onBottomLeave,s=e.onTopArrive,l=e.onTopLeave,u=dw({isEnabled:a,onBottomArrive:o,onBottomLeave:i,onTopArrive:s,onTopLeave:l}),c=fw({isEnabled:t}),d=function(y){u(y),c(y)};return D(S.Fragment,null,t&&D("div",{onClick:pw,css:mw}),n(d))}var gw={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},vw=function(n){var t=n.name,r=n.onFocus;return D("input",{required:!0,name:t,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:gw,value:"",onChange:function(){}})},yw=vw;function Bc(e){var n;return typeof window<"u"&&window.navigator!=null?e.test(((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.platform)||window.navigator.platform):!1}function bw(){return Bc(/^iPhone/i)}function bh(){return Bc(/^Mac/i)}function kw(){return Bc(/^iPad/i)||bh()&&navigator.maxTouchPoints>1}function ww(){return bw()||kw()}function xw(){return bh()||ww()}var Sw=function(n){return n.label},Cw=function(n){return n.label},Ow=function(n){return n.value},Pw=function(n){return!!n.isDisabled},Tw={clearIndicator:u2,container:Zk,control:g2,dropdownIndicator:l2,group:k2,groupHeading:x2,indicatorsContainer:t2,indicatorSeparator:d2,input:P2,loadingIndicator:m2,loadingMessage:Gk,menu:Fk,menuList:Bk,menuPortal:Qk,multiValue:A2,multiValueLabel:_2,multiValueRemove:I2,noOptionsMessage:Wk,option:$2,placeholder:U2,singleValue:q2,valueContainer:e2},Ew={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},zw=4,kh=4,Mw=38,Aw=kh*2,_w={baseUnit:kh,controlHeight:Mw,menuGutter:Aw},Jl={borderRadius:zw,colors:Ew,spacing:_w},Iw={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ef(),captureMenuScroll:!Ef(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:lw(),formatGroupLabel:Sw,getOptionLabel:Cw,getOptionValue:Ow,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Pw,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Mk(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(n){var t=n.count;return"".concat(t," result").concat(t!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Ff(e,n,t,r){var a=Sh(e,n,t),o=Ch(e,n,t),i=xh(e,n),s=Di(e,n);return{type:"option",data:n,isDisabled:a,isSelected:o,label:i,value:s,index:r}}function ni(e,n){return e.options.map(function(t,r){if("options"in t){var a=t.options.map(function(i,s){return Ff(e,i,n,s)}).filter(function(i){return Uf(e,i)});return a.length>0?{type:"group",data:t,options:a,index:r}:void 0}var o=Ff(e,t,n,r);return Uf(e,o)?o:void 0}).filter(Ik)}function wh(e){return e.reduce(function(n,t){return t.type==="group"?n.push.apply(n,Ac(t.options.map(function(r){return r.data}))):n.push(t.data),n},[])}function Vf(e,n){return e.reduce(function(t,r){return r.type==="group"?t.push.apply(t,Ac(r.options.map(function(a){return{data:a.data,id:"".concat(n,"-").concat(r.index,"-").concat(a.index)}}))):t.push({data:r.data,id:"".concat(n,"-").concat(r.index)}),t},[])}function Dw(e,n){return wh(ni(e,n))}function Uf(e,n){var t=e.inputValue,r=t===void 0?"":t,a=n.data,o=n.isSelected,i=n.label,s=n.value;return(!Ph(e)||!o)&&Oh(e,{label:i,value:s,data:a},r)}function jw(e,n){var t=e.focusedValue,r=e.selectValue,a=r.indexOf(t);if(a>-1){var o=n.indexOf(t);if(o>-1)return t;if(a<n.length)return n[a]}return null}function Nw(e,n){var t=e.focusedOption;return t&&n.indexOf(t)>-1?t:n[0]}var es=function(n,t){var r,a=(r=n.find(function(o){return o.data===t}))===null||r===void 0?void 0:r.id;return a||null},xh=function(n,t){return n.getOptionLabel(t)},Di=function(n,t){return n.getOptionValue(t)};function Sh(e,n,t){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(n,t):!1}function Ch(e,n,t){if(t.indexOf(n)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(n,t);var r=Di(e,n);return t.some(function(a){return Di(e,a)===r})}function Oh(e,n,t){return e.filterOption?e.filterOption(n,t):!0}var Ph=function(n){var t=n.hideSelectedOptions,r=n.isMulti;return t===void 0?r:t},Rw=1,Th=function(e){Qy(t,e);var n=Jy(t);function t(r){var a;if(Ky(this,t),a=n.call(this,r),a.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},a.blockOptionHover=!1,a.isComposing=!1,a.commonProps=void 0,a.initialTouchX=0,a.initialTouchY=0,a.openAfterFocus=!1,a.scrollToFocusedOptionOnUpdate=!1,a.userIsDragging=void 0,a.isAppleDevice=xw(),a.controlRef=null,a.getControlRef=function(l){a.controlRef=l},a.focusedOptionRef=null,a.getFocusedOptionRef=function(l){a.focusedOptionRef=l},a.menuListRef=null,a.getMenuListRef=function(l){a.menuListRef=l},a.inputRef=null,a.getInputRef=function(l){a.inputRef=l},a.focus=a.focusInput,a.blur=a.blurInput,a.onChange=function(l,u){var c=a.props,d=c.onChange,h=c.name;u.name=h,a.ariaOnChange(l,u),d(l,u)},a.setValue=function(l,u,c){var d=a.props,h=d.closeMenuOnSelect,y=d.isMulti,g=d.inputValue;a.onInputChange("",{action:"set-value",prevInputValue:g}),h&&(a.setState({inputIsHiddenAfterUpdate:!y}),a.onMenuClose()),a.setState({clearFocusValueOnUpdate:!0}),a.onChange(l,{action:u,option:c})},a.selectOption=function(l){var u=a.props,c=u.blurInputOnSelect,d=u.isMulti,h=u.name,y=a.state.selectValue,g=d&&a.isOptionSelected(l,y),m=a.isOptionDisabled(l,y);if(g){var b=a.getOptionValue(l);a.setValue(y.filter(function(f){return a.getOptionValue(f)!==b}),"deselect-option",l)}else if(!m)d?a.setValue([].concat(Ac(y),[l]),"select-option",l):a.setValue(l,"select-option");else{a.ariaOnChange(l,{action:"select-option",option:l,name:h});return}c&&a.blurInput()},a.removeValue=function(l){var u=a.props.isMulti,c=a.state.selectValue,d=a.getOptionValue(l),h=c.filter(function(g){return a.getOptionValue(g)!==d}),y=Io(u,h,h[0]||null);a.onChange(y,{action:"remove-value",removedValue:l}),a.focusInput()},a.clearValue=function(){var l=a.state.selectValue;a.onChange(Io(a.props.isMulti,[],null),{action:"clear",removedValues:l})},a.popValue=function(){var l=a.props.isMulti,u=a.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),h=Io(l,d,d[0]||null);c&&a.onChange(h,{action:"pop-value",removedValue:c})},a.getFocusedOptionId=function(l){return es(a.state.focusableOptionsWithIds,l)},a.getFocusableOptionsWithIds=function(){return Vf(ni(a.props,a.state.selectValue),a.getElementId("option"))},a.getValue=function(){return a.state.selectValue},a.cx=function(){for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];return Ok.apply(void 0,[a.props.classNamePrefix].concat(u))},a.getOptionLabel=function(l){return xh(a.props,l)},a.getOptionValue=function(l){return Di(a.props,l)},a.getStyles=function(l,u){var c=a.props.unstyled,d=Tw[l](u,c);d.boxSizing="border-box";var h=a.props.styles[l];return h?h(d,u):d},a.getClassNames=function(l,u){var c,d;return(c=(d=a.props.classNames)[l])===null||c===void 0?void 0:c.call(d,u)},a.getElementId=function(l){return"".concat(a.state.instancePrefix,"-").concat(l)},a.getComponents=function(){return Y2(a.props)},a.buildCategorizedOptions=function(){return ni(a.props,a.state.selectValue)},a.getCategorizedOptions=function(){return a.props.menuIsOpen?a.buildCategorizedOptions():[]},a.buildFocusableOptions=function(){return wh(a.buildCategorizedOptions())},a.getFocusableOptions=function(){return a.props.menuIsOpen?a.buildFocusableOptions():[]},a.ariaOnChange=function(l,u){a.setState({ariaSelection:j({value:l},u)})},a.onMenuMouseDown=function(l){l.button===0&&(l.stopPropagation(),l.preventDefault(),a.focusInput())},a.onMenuMouseMove=function(l){a.blockOptionHover=!1},a.onControlMouseDown=function(l){if(!l.defaultPrevented){var u=a.props.openMenuOnClick;a.state.isFocused?a.props.menuIsOpen?l.target.tagName!=="INPUT"&&l.target.tagName!=="TEXTAREA"&&a.onMenuClose():u&&a.openMenu("first"):(u&&(a.openAfterFocus=!0),a.focusInput()),l.target.tagName!=="INPUT"&&l.target.tagName!=="TEXTAREA"&&l.preventDefault()}},a.onDropdownIndicatorMouseDown=function(l){if(!(l&&l.type==="mousedown"&&l.button!==0)&&!a.props.isDisabled){var u=a.props,c=u.isMulti,d=u.menuIsOpen;a.focusInput(),d?(a.setState({inputIsHiddenAfterUpdate:!c}),a.onMenuClose()):a.openMenu("first"),l.preventDefault()}},a.onClearIndicatorMouseDown=function(l){l&&l.type==="mousedown"&&l.button!==0||(a.clearValue(),l.preventDefault(),a.openAfterFocus=!1,l.type==="touchend"?a.focusInput():setTimeout(function(){return a.focusInput()}))},a.onScroll=function(l){typeof a.props.closeMenuOnScroll=="boolean"?l.target instanceof HTMLElement&&yl(l.target)&&a.props.onMenuClose():typeof a.props.closeMenuOnScroll=="function"&&a.props.closeMenuOnScroll(l)&&a.props.onMenuClose()},a.onCompositionStart=function(){a.isComposing=!0},a.onCompositionEnd=function(){a.isComposing=!1},a.onTouchStart=function(l){var u=l.touches,c=u&&u.item(0);c&&(a.initialTouchX=c.clientX,a.initialTouchY=c.clientY,a.userIsDragging=!1)},a.onTouchMove=function(l){var u=l.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-a.initialTouchX),h=Math.abs(c.clientY-a.initialTouchY),y=5;a.userIsDragging=d>y||h>y}},a.onTouchEnd=function(l){a.userIsDragging||(a.controlRef&&!a.controlRef.contains(l.target)&&a.menuListRef&&!a.menuListRef.contains(l.target)&&a.blurInput(),a.initialTouchX=0,a.initialTouchY=0)},a.onControlTouchEnd=function(l){a.userIsDragging||a.onControlMouseDown(l)},a.onClearIndicatorTouchEnd=function(l){a.userIsDragging||a.onClearIndicatorMouseDown(l)},a.onDropdownIndicatorTouchEnd=function(l){a.userIsDragging||a.onDropdownIndicatorMouseDown(l)},a.handleInputChange=function(l){var u=a.props.inputValue,c=l.currentTarget.value;a.setState({inputIsHiddenAfterUpdate:!1}),a.onInputChange(c,{action:"input-change",prevInputValue:u}),a.props.menuIsOpen||a.onMenuOpen()},a.onInputFocus=function(l){a.props.onFocus&&a.props.onFocus(l),a.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(a.openAfterFocus||a.props.openMenuOnFocus)&&a.openMenu("first"),a.openAfterFocus=!1},a.onInputBlur=function(l){var u=a.props.inputValue;if(a.menuListRef&&a.menuListRef.contains(document.activeElement)){a.inputRef.focus();return}a.props.onBlur&&a.props.onBlur(l),a.onInputChange("",{action:"input-blur",prevInputValue:u}),a.onMenuClose(),a.setState({focusedValue:null,isFocused:!1})},a.onOptionHover=function(l){if(!(a.blockOptionHover||a.state.focusedOption===l)){var u=a.getFocusableOptions(),c=u.indexOf(l);a.setState({focusedOption:l,focusedOptionId:c>-1?a.getFocusedOptionId(l):null})}},a.shouldHideSelectedOptions=function(){return Ph(a.props)},a.onValueInputFocus=function(l){l.preventDefault(),l.stopPropagation(),a.focus()},a.onKeyDown=function(l){var u=a.props,c=u.isMulti,d=u.backspaceRemovesValue,h=u.escapeClearsValue,y=u.inputValue,g=u.isClearable,m=u.isDisabled,b=u.menuIsOpen,f=u.onKeyDown,p=u.tabSelectsValue,v=u.openMenuOnFocus,k=a.state,x=k.focusedOption,C=k.focusedValue,w=k.selectValue;if(!m&&!(typeof f=="function"&&(f(l),l.defaultPrevented))){switch(a.blockOptionHover=!0,l.key){case"ArrowLeft":if(!c||y)return;a.focusValue("previous");break;case"ArrowRight":if(!c||y)return;a.focusValue("next");break;case"Delete":case"Backspace":if(y)return;if(C)a.removeValue(C);else{if(!d)return;c?a.popValue():g&&a.clearValue()}break;case"Tab":if(a.isComposing||l.shiftKey||!b||!p||!x||v&&a.isOptionSelected(x,w))return;a.selectOption(x);break;case"Enter":if(l.keyCode===229)break;if(b){if(!x||a.isComposing)return;a.selectOption(x);break}return;case"Escape":b?(a.setState({inputIsHiddenAfterUpdate:!1}),a.onInputChange("",{action:"menu-close",prevInputValue:y}),a.onMenuClose()):g&&h&&a.clearValue();break;case" ":if(y)return;if(!b){a.openMenu("first");break}if(!x)return;a.selectOption(x);break;case"ArrowUp":b?a.focusOption("up"):a.openMenu("last");break;case"ArrowDown":b?a.focusOption("down"):a.openMenu("first");break;case"PageUp":if(!b)return;a.focusOption("pageup");break;case"PageDown":if(!b)return;a.focusOption("pagedown");break;case"Home":if(!b)return;a.focusOption("first");break;case"End":if(!b)return;a.focusOption("last");break;default:return}l.preventDefault()}},a.state.instancePrefix="react-select-"+(a.props.instanceId||++Rw),a.state.selectValue=Pf(r.value),r.menuIsOpen&&a.state.selectValue.length){var o=a.getFocusableOptionsWithIds(),i=a.buildFocusableOptions(),s=i.indexOf(a.state.selectValue[0]);a.state.focusableOptionsWithIds=o,a.state.focusedOption=i[s],a.state.focusedOptionId=es(o,i[s])}return a}return Yy(t,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Tf(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(a){var o=this.props,i=o.isDisabled,s=o.menuIsOpen,l=this.state.isFocused;(l&&!i&&a.isDisabled||l&&s&&!a.menuIsOpen)&&this.focusInput(),l&&i&&!a.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!l&&!i&&a.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Tf(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(a,o){this.props.onInputChange(a,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(a){var o=this,i=this.state,s=i.selectValue,l=i.isFocused,u=this.buildFocusableOptions(),c=a==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(s[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(l&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(a){var o=this.state,i=o.selectValue,s=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var l=i.indexOf(s);s||(l=-1);var u=i.length-1,c=-1;if(i.length){switch(a){case"previous":l===0?c=0:l===-1?c=u:c=l-1;break;case"next":l>-1&&l<u&&(c=l+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:i[c]})}}}},{key:"focusOption",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,i=this.state.focusedOption,s=this.getFocusableOptions();if(s.length){var l=0,u=s.indexOf(i);i||(u=-1),a==="up"?l=u>0?u-1:s.length-1:a==="down"?l=(u+1)%s.length:a==="pageup"?(l=u-o,l<0&&(l=0)):a==="pagedown"?(l=u+o,l>s.length-1&&(l=s.length-1)):a==="last"&&(l=s.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:s[l],focusedValue:null,focusedOptionId:this.getFocusedOptionId(s[l])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Jl):j(j({},Jl),this.props.theme):Jl}},{key:"getCommonProps",value:function(){var a=this.clearValue,o=this.cx,i=this.getStyles,s=this.getClassNames,l=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,h=d.isMulti,y=d.isRtl,g=d.options,m=this.hasValue();return{clearValue:a,cx:o,getStyles:i,getClassNames:s,getValue:l,hasValue:m,isMulti:h,isRtl:y,options:g,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var a=this.state.selectValue;return a.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var a=this.props,o=a.isClearable,i=a.isMulti;return o===void 0?i:o}},{key:"isOptionDisabled",value:function(a,o){return Sh(this.props,a,o)}},{key:"isOptionSelected",value:function(a,o){return Ch(this.props,a,o)}},{key:"filterOption",value:function(a,o){return Oh(this.props,a,o)}},{key:"formatOptionLabel",value:function(a,o){if(typeof this.props.formatOptionLabel=="function"){var i=this.props.inputValue,s=this.state.selectValue;return this.props.formatOptionLabel(a,{context:o,inputValue:i,selectValue:s})}else return this.getOptionLabel(a)}},{key:"formatGroupLabel",value:function(a){return this.props.formatGroupLabel(a)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var a=this.props,o=a.isDisabled,i=a.isSearchable,s=a.inputId,l=a.inputValue,u=a.tabIndex,c=a.form,d=a.menuIsOpen,h=a.required,y=this.getComponents(),g=y.Input,m=this.state,b=m.inputIsHidden,f=m.ariaSelection,p=this.commonProps,v=s||this.getElementId("input"),k=j(j(j({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":h,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!i&&{"aria-readonly":!0}),this.hasValue()?(f==null?void 0:f.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return i?S.createElement(g,R({},p,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:v,innerRef:this.getInputRef,isDisabled:o,isHidden:b,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:l},k)):S.createElement(uw,R({id:v,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:_i,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:c,value:""},k))}},{key:"renderPlaceholderOrValue",value:function(){var a=this,o=this.getComponents(),i=o.MultiValue,s=o.MultiValueContainer,l=o.MultiValueLabel,u=o.MultiValueRemove,c=o.SingleValue,d=o.Placeholder,h=this.commonProps,y=this.props,g=y.controlShouldRenderValue,m=y.isDisabled,b=y.isMulti,f=y.inputValue,p=y.placeholder,v=this.state,k=v.selectValue,x=v.focusedValue,C=v.isFocused;if(!this.hasValue()||!g)return f?null:S.createElement(d,R({},h,{key:"placeholder",isDisabled:m,isFocused:C,innerProps:{id:this.getElementId("placeholder")}}),p);if(b)return k.map(function(O,A){var _=O===x,Y="".concat(a.getOptionLabel(O),"-").concat(a.getOptionValue(O));return S.createElement(i,R({},h,{components:{Container:s,Label:l,Remove:u},isFocused:_,isDisabled:m,key:Y,index:A,removeProps:{onClick:function(){return a.removeValue(O)},onTouchEnd:function(){return a.removeValue(O)},onMouseDown:function(xe){xe.preventDefault()}},data:O}),a.formatOptionLabel(O,"value"))});if(f)return null;var w=k[0];return S.createElement(c,R({},h,{data:w,isDisabled:m}),this.formatOptionLabel(w,"value"))}},{key:"renderClearIndicator",value:function(){var a=this.getComponents(),o=a.ClearIndicator,i=this.commonProps,s=this.props,l=s.isDisabled,u=s.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||l||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return S.createElement(o,R({},i,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var a=this.getComponents(),o=a.LoadingIndicator,i=this.commonProps,s=this.props,l=s.isDisabled,u=s.isLoading,c=this.state.isFocused;if(!o||!u)return null;var d={"aria-hidden":"true"};return S.createElement(o,R({},i,{innerProps:d,isDisabled:l,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var a=this.getComponents(),o=a.DropdownIndicator,i=a.IndicatorSeparator;if(!o||!i)return null;var s=this.commonProps,l=this.props.isDisabled,u=this.state.isFocused;return S.createElement(i,R({},s,{isDisabled:l,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var a=this.getComponents(),o=a.DropdownIndicator;if(!o)return null;var i=this.commonProps,s=this.props.isDisabled,l=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return S.createElement(o,R({},i,{innerProps:u,isDisabled:s,isFocused:l}))}},{key:"renderMenu",value:function(){var a=this,o=this.getComponents(),i=o.Group,s=o.GroupHeading,l=o.Menu,u=o.MenuList,c=o.MenuPortal,d=o.LoadingMessage,h=o.NoOptionsMessage,y=o.Option,g=this.commonProps,m=this.state.focusedOption,b=this.props,f=b.captureMenuScroll,p=b.inputValue,v=b.isLoading,k=b.loadingMessage,x=b.minMenuHeight,C=b.maxMenuHeight,w=b.menuIsOpen,O=b.menuPlacement,A=b.menuPosition,_=b.menuPortalTarget,Y=b.menuShouldBlockScroll,L=b.menuShouldScrollIntoView,xe=b.noOptionsMessage,ze=b.onMenuScrollToTop,le=b.onMenuScrollToBottom;if(!w)return null;var ee=function(Se,Ae){var fn=Se.type,ye=Se.data,en=Se.isDisabled,Ln=Se.isSelected,ro=Se.label,Lh=Se.value,Wc=m===ye,Gc=en?void 0:function(){return a.onOptionHover(ye)},$h=en?void 0:function(){return a.selectOption(ye)},Kc="".concat(a.getElementId("option"),"-").concat(Ae),Fh={id:Kc,onClick:$h,onMouseMove:Gc,onMouseOver:Gc,tabIndex:-1,role:"option","aria-selected":a.isAppleDevice?void 0:Ln};return S.createElement(y,R({},g,{innerProps:Fh,data:ye,isDisabled:en,isSelected:Ln,key:Kc,label:ro,type:fn,value:Lh,isFocused:Wc,innerRef:Wc?a.getFocusedOptionRef:void 0}),a.formatOptionLabel(Se.data,"menu"))},Me;if(this.hasOptions())Me=this.getCategorizedOptions().map(function(V){if(V.type==="group"){var Se=V.data,Ae=V.options,fn=V.index,ye="".concat(a.getElementId("group"),"-").concat(fn),en="".concat(ye,"-heading");return S.createElement(i,R({},g,{key:ye,data:Se,options:Ae,Heading:s,headingProps:{id:en,data:V.data},label:a.formatGroupLabel(V.data)}),V.options.map(function(Ln){return ee(Ln,"".concat(fn,"-").concat(Ln.index))}))}else if(V.type==="option")return ee(V,"".concat(V.index))});else if(v){var T=k({inputValue:p});if(T===null)return null;Me=S.createElement(d,g,T)}else{var I=xe({inputValue:p});if(I===null)return null;Me=S.createElement(h,g,I)}var N={minMenuHeight:x,maxMenuHeight:C,menuPlacement:O,menuPosition:A,menuShouldScrollIntoView:L},B=S.createElement(Vk,R({},g,N),function(V){var Se=V.ref,Ae=V.placerProps,fn=Ae.placement,ye=Ae.maxHeight;return S.createElement(l,R({},g,N,{innerRef:Se,innerProps:{onMouseDown:a.onMenuMouseDown,onMouseMove:a.onMenuMouseMove},isLoading:v,placement:fn}),S.createElement(hw,{captureEnabled:f,onTopArrive:ze,onBottomArrive:le,lockEnabled:Y},function(en){return S.createElement(u,R({},g,{innerRef:function(ro){a.getMenuListRef(ro),en(ro)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:a.getElementId("listbox")},isLoading:v,maxHeight:ye,focusedOption:m}),Me)}))});return _||A==="fixed"?S.createElement(c,R({},g,{appendTo:_,controlElement:this.controlRef,menuPlacement:O,menuPosition:A}),B):B}},{key:"renderFormField",value:function(){var a=this,o=this.props,i=o.delimiter,s=o.isDisabled,l=o.isMulti,u=o.name,c=o.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!s)return S.createElement(yw,{name:u,onFocus:this.onValueInputFocus});if(!(!u||s))if(l)if(i){var h=d.map(function(m){return a.getOptionValue(m)}).join(i);return S.createElement("input",{name:u,type:"hidden",value:h})}else{var y=d.length>0?d.map(function(m,b){return S.createElement("input",{key:"i-".concat(b),name:u,type:"hidden",value:a.getOptionValue(m)})}):S.createElement("input",{name:u,type:"hidden",value:""});return S.createElement("div",null,y)}else{var g=d[0]?this.getOptionValue(d[0]):"";return S.createElement("input",{name:u,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var a=this.commonProps,o=this.state,i=o.ariaSelection,s=o.focusedOption,l=o.focusedValue,u=o.isFocused,c=o.selectValue,d=this.getFocusableOptions();return S.createElement(rw,R({},a,{id:this.getElementId("live-region"),ariaSelection:i,focusedOption:s,focusedValue:l,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var a=this.getComponents(),o=a.Control,i=a.IndicatorsContainer,s=a.SelectContainer,l=a.ValueContainer,u=this.props,c=u.className,d=u.id,h=u.isDisabled,y=u.menuIsOpen,g=this.state.isFocused,m=this.commonProps=this.getCommonProps();return S.createElement(s,R({},m,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:h,isFocused:g}),this.renderLiveRegion(),S.createElement(o,R({},m,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:h,isFocused:g,menuIsOpen:y}),S.createElement(l,R({},m,{isDisabled:h}),this.renderPlaceholderOrValue(),this.renderInput()),S.createElement(i,R({},m,{isDisabled:h}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(a,o){var i=o.prevProps,s=o.clearFocusValueOnUpdate,l=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,c=o.isFocused,d=o.prevWasFocused,h=o.instancePrefix,y=a.options,g=a.value,m=a.menuIsOpen,b=a.inputValue,f=a.isMulti,p=Pf(g),v={};if(i&&(g!==i.value||y!==i.options||m!==i.menuIsOpen||b!==i.inputValue)){var k=m?Dw(a,p):[],x=m?Vf(ni(a,p),"".concat(h,"-option")):[],C=s?jw(o,p):null,w=Nw(o,k),O=es(x,w);v={selectValue:p,focusedOption:w,focusedOptionId:O,focusableOptionsWithIds:x,focusedValue:C,clearFocusValueOnUpdate:!1}}var A=l!=null&&a!==i?{inputIsHidden:l,inputIsHiddenAfterUpdate:void 0}:{},_=u,Y=c&&d;return c&&!Y&&(_={value:Io(f,p,p[0]||null),options:p,action:"initial-input-focus"},Y=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(_=null),j(j(j({},v),A),{},{prevProps:a,ariaSelection:_,prevWasFocused:Y})}}]),t}(S.Component);Th.defaultProps=Iw;var Lw=S.forwardRef(function(e,n){var t=Gy(e);return S.createElement(Th,R({ref:n},t))}),$w=Lw;const Fw=60*60*1e3,Hf=(e,n,t)=>{const[r,a]=e.split("/"),[o,i]=a.split(":");return Date.UTC(t,r-1,o,i)-n*Fw},Eh=(e,n,t,r,a)=>{const o=new Date(e).getUTCFullYear(),i=Hf(n,a,o),s=Hf(t,r,o);return e>=i&&e<s},Vw=e=>{let t=e.timezones[e.tz];if(t===void 0)return console.warn("Warning: couldn't find timezone "+e.tz),0;if(t.dst===void 0)return t.offset;let r=t.offset,a=t.offset+1;t.hem==="n"&&(a=r-1);let o=t.dst.split("->");return Eh(e.epoch,o[0],o[1],r,a)===!0?r:a},Bf={"9|s":"2/dili,2/jayapura","9|n":"2/chita,2/khandyga,2/pyongyang,2/seoul,2/tokyo,2/yakutsk,11/palau,japan,rok","9.5|s|04/06:03->10/05:04":"4/adelaide,4/broken_hill,4/south,4/yancowinna","9.5|s":"4/darwin,4/north","8|s|03/13:01->10/02:00":"12/casey","8|s":"2/kuala_lumpur,2/makassar,2/singapore,4/perth,2/ujung_pandang,4/west,singapore","8|n":"2/brunei,2/hong_kong,2/irkutsk,2/kuching,2/macau,2/manila,2/shanghai,2/taipei,2/ulaanbaatar,2/chongqing,2/chungking,2/harbin,2/macao,2/ulan_bator,2/choibalsan,hongkong,prc,roc","8.75|s":"4/eucla","7|s":"12/davis,2/jakarta,9/christmas","7|n":"2/bangkok,2/barnaul,2/hovd,2/krasnoyarsk,2/novokuznetsk,2/novosibirsk,2/phnom_penh,2/pontianak,2/ho_chi_minh,2/tomsk,2/vientiane,2/saigon","6|s":"12/vostok","6|n":"2/almaty,2/bishkek,2/dhaka,2/omsk,2/qyzylorda,2/qostanay,2/thimphu,2/urumqi,9/chagos,2/dacca,2/kashgar,2/thimbu","6.5|n":"2/yangon,9/cocos,2/rangoon","5|s":"12/mawson,9/kerguelen","5|n":"2/aqtau,2/aqtobe,2/ashgabat,2/atyrau,2/dushanbe,2/karachi,2/oral,2/samarkand,2/tashkent,2/yekaterinburg,9/maldives,2/ashkhabad","5.75|n":"2/kathmandu,2/katmandu","5.5|n":"2/kolkata,2/colombo,2/calcutta","4|s":"9/reunion","4|n":"2/baku,2/dubai,2/muscat,2/tbilisi,2/yerevan,8/astrakhan,8/samara,8/saratov,8/ulyanovsk,8/volgograd,9/mahe,9/mauritius,2/volgograd","4.5|n":"2/kabul","3|s":"12/syowa,9/antananarivo","3|n|04/25:02->10/30:24":"0/cairo,egypt","3|n|04/12:04->10/25:02":"2/gaza,2/hebron","3|n|03/30:05->10/26:04":"2/famagusta,2/nicosia,8/athens,8/bucharest,8/helsinki,8/kyiv,8/mariehamn,8/riga,8/sofia,8/tallinn,8/uzhgorod,8/vilnius,8/zaporozhye,8/nicosia,8/kiev,eet","3|n|03/30:04->10/26:03":"8/chisinau,8/tiraspol","3|n|03/30:02->10/25:24":"2/beirut","3|n|03/28:04->10/26:02":"2/jerusalem,2/tel_aviv,israel","3|n":"0/addis_ababa,0/asmara,0/asmera,0/dar_es_salaam,0/djibouti,0/juba,0/kampala,0/mogadishu,0/nairobi,2/aden,2/amman,2/baghdad,2/bahrain,2/damascus,2/kuwait,2/qatar,2/riyadh,8/istanbul,8/kirov,8/minsk,8/moscow,8/simferopol,9/comoro,9/mayotte,2/istanbul,turkey,w-su","3.5|n":"2/tehran,iran","2|s|03/30:04->10/26:02":"12/troll","2|s":"0/gaborone,0/harare,0/johannesburg,0/lubumbashi,0/lusaka,0/maputo,0/maseru,0/mbabane","2|n|03/30:04->10/26:03":"0/ceuta,arctic/longyearbyen,8/amsterdam,8/andorra,8/belgrade,8/berlin,8/bratislava,8/brussels,8/budapest,8/busingen,8/copenhagen,8/gibraltar,8/ljubljana,8/luxembourg,8/madrid,8/malta,8/monaco,8/oslo,8/paris,8/podgorica,8/prague,8/rome,8/san_marino,8/sarajevo,8/skopje,8/stockholm,8/tirane,8/vaduz,8/vatican,8/vienna,8/warsaw,8/zagreb,8/zurich,3/jan_mayen,poland,cet,met","2|n":"0/blantyre,0/bujumbura,0/khartoum,0/kigali,0/tripoli,8/kaliningrad,libya","1|s":"0/brazzaville,0/kinshasa,0/luanda,0/windhoek","1|n|03/30:03->10/26:02":"3/canary,3/faroe,3/madeira,8/dublin,8/guernsey,8/isle_of_man,8/jersey,8/lisbon,8/london,3/faeroe,eire,8/belfast,gb-eire,gb,portugal,wet","1|n":"0/algiers,0/bangui,0/douala,0/lagos,0/libreville,0/malabo,0/ndjamena,0/niamey,0/porto-novo,0/tunis","14|n":"11/kiritimati","13|s":"11/apia,11/tongatapu","13|n":"11/enderbury,11/kanton,11/fakaofo","12|s|04/06:03->09/28:04":"12/mcmurdo,11/auckland,12/south_pole,nz","12|s":"11/fiji","12|n":"2/anadyr,2/kamchatka,2/srednekolymsk,11/funafuti,11/kwajalein,11/majuro,11/nauru,11/tarawa,11/wake,11/wallis,kwajalein","12.75|s|04/06:03->04/06:02":"11/chatham,nz-chat","11|s|04/06:03->10/05:04":"12/macquarie","11|s":"11/bougainville","11|n":"2/magadan,2/sakhalin,11/efate,11/guadalcanal,11/kosrae,11/noumea,11/pohnpei,11/ponape","11.5|n|04/06:03->10/05:04":"11/norfolk","10|s|04/06:03->10/05:04":"4/currie,4/hobart,4/melbourne,4/sydney,4/act,4/canberra,4/nsw,4/tasmania,4/victoria","10|s":"12/dumontdurville,4/brisbane,4/lindeman,11/port_moresby,4/queensland","10|n":"2/ust-nera,2/vladivostok,11/guam,11/saipan,11/chuuk,11/truk,11/yap","10.5|s|04/06:01->10/05:02":"4/lord_howe,4/lhi","0|s|02/23:03->04/06:04":"0/casablanca,0/el_aaiun","0|n|03/30:02->10/26:01":"3/azores","0|n|03/30:01->10/25:24":"1/scoresbysund","0|n":"0/abidjan,0/accra,0/bamako,0/banjul,0/bissau,0/conakry,0/dakar,0/freetown,0/lome,0/monrovia,0/nouakchott,0/ouagadougou,0/sao_tome,1/danmarkshavn,3/reykjavik,3/st_helena,13/gmt,13/utc,0/timbuktu,13/greenwich,13/uct,13/universal,13/zulu,gmt-0,gmt+0,gmt0,greenwich,iceland,uct,universal,utc,zulu,13/unknown,factory","-9|n|03/09:04->11/02:02":"1/adak,1/atka,us/aleutian","-9|n":"11/gambier","-9.5|n":"11/marquesas","-8|n|03/09:04->11/02:02":"1/anchorage,1/juneau,1/metlakatla,1/nome,1/sitka,1/yakutat,us/alaska","-8|n":"11/pitcairn","-7|n|03/09:04->11/02:02":"1/los_angeles,1/santa_isabel,1/tijuana,1/vancouver,1/ensenada,6/pacific,10/bajanorte,us/pacific-new,us/pacific","-7|n":"1/creston,1/dawson,1/dawson_creek,1/fort_nelson,1/hermosillo,1/mazatlan,1/phoenix,1/whitehorse,6/yukon,10/bajasur,us/arizona,mst","-6|s|04/05:22->09/06:24":"11/easter,7/easterisland","-6|n|04/07:02->10/27:02":"1/merida","-6|n|03/09:04->11/02:02":"1/boise,1/cambridge_bay,1/denver,1/edmonton,1/inuvik,1/north_dakota,1/ojinaga,1/ciudad_juarez,1/yellowknife,1/shiprock,6/mountain,navajo,us/mountain","-6|n":"1/bahia_banderas,1/belize,1/chihuahua,1/costa_rica,1/el_salvador,1/guatemala,1/managua,1/mexico_city,1/monterrey,1/regina,1/swift_current,1/tegucigalpa,11/galapagos,6/east-saskatchewan,6/saskatchewan,10/general","-5|s":"1/lima,1/rio_branco,1/porto_acre,5/acre","-5|n|03/09:04->11/02:02":"1/chicago,1/matamoros,1/menominee,1/rainy_river,1/rankin_inlet,1/resolute,1/winnipeg,1/indiana/knox,1/indiana/tell_city,1/north_dakota/beulah,1/north_dakota/center,1/north_dakota/new_salem,1/knox_in,6/central,us/central,us/indiana-starke","-5|n":"1/bogota,1/cancun,1/cayman,1/coral_harbour,1/eirunepe,1/guayaquil,1/jamaica,1/panama,1/atikokan,jamaica,est","-4|s|04/05:24->09/07:02":"1/santiago,7/continental","-4|s|03/22:24->10/05:02":"1/asuncion","-4|s":"1/campo_grande,1/cuiaba,1/la_paz,1/manaus,5/west","-4|n|03/09:04->11/02:02":"1/detroit,1/grand_turk,1/indiana,1/indianapolis,1/iqaluit,1/kentucky,1/louisville,1/montreal,1/nassau,1/new_york,1/nipigon,1/pangnirtung,1/port-au-prince,1/thunder_bay,1/toronto,1/indiana/marengo,1/indiana/petersburg,1/indiana/vevay,1/indiana/vincennes,1/indiana/winamac,1/kentucky/monticello,1/fort_wayne,1/indiana/indianapolis,1/kentucky/louisville,6/eastern,us/east-indiana,us/eastern,us/michigan","-4|n|03/09:02->11/02:01":"1/havana,cuba","-4|n":"1/anguilla,1/antigua,1/aruba,1/barbados,1/blanc-sablon,1/boa_vista,1/caracas,1/curacao,1/dominica,1/grenada,1/guadeloupe,1/guyana,1/kralendijk,1/lower_princes,1/marigot,1/martinique,1/montserrat,1/port_of_spain,1/porto_velho,1/puerto_rico,1/santo_domingo,1/st_barthelemy,1/st_kitts,1/st_lucia,1/st_thomas,1/st_vincent,1/tortola,1/virgin","-3|s":"1/argentina,1/buenos_aires,1/catamarca,1/cordoba,1/fortaleza,1/jujuy,1/mendoza,1/montevideo,1/punta_arenas,1/sao_paulo,12/palmer,12/rothera,3/stanley,1/argentina/la_rioja,1/argentina/rio_gallegos,1/argentina/salta,1/argentina/san_juan,1/argentina/san_luis,1/argentina/tucuman,1/argentina/ushuaia,1/argentina/comodrivadavia,1/argentina/buenos_aires,1/argentina/catamarca,1/argentina/cordoba,1/argentina/jujuy,1/argentina/mendoza,1/argentina/rosario,1/rosario,5/east","-3|n|03/09:04->11/02:02":"1/glace_bay,1/goose_bay,1/halifax,1/moncton,1/thule,3/bermuda,6/atlantic","-3|n":"1/araguaina,1/bahia,1/belem,1/cayenne,1/maceio,1/paramaribo,1/recife,1/santarem","-2|n|03/09:04->11/02:02":"1/miquelon","-2|n":"1/noronha,3/south_georgia,5/denoronha","-2.5|n|03/09:04->11/02:02":"1/st_johns,6/newfoundland","-1|n|03/30:01->10/25:24":"1/nuuk,1/godthab","-1|n":"3/cape_verde","-11|n":"11/midway,11/niue,11/pago_pago,11/samoa,us/samoa","-10|n":"11/honolulu,11/johnston,11/rarotonga,11/tahiti,us/hawaii,hst"},Uw=["africa","america","asia","atlantic","australia","brazil","canada","chile","europe","indian","mexico","pacific","antarctica","etc"];let Rr={};Object.keys(Bf).forEach(e=>{let n=e.split("|"),t={offset:Number(n[0]),hem:n[1]};n[2]&&(t.dst=n[2]),Bf[e].split(",").forEach(a=>{a=a.replace(/(^[0-9]+)\//,(o,i)=>(i=Number(i),Uw[i]+"/")),Rr[a]=t})});Rr.utc={offset:0,hem:"n"};for(let e=-14;e<=14;e+=.5){let n=e;n>0&&(n="+"+n);let t="etc/gmt"+n;Rr[t]={offset:e*-1,hem:"n"},t="utc/gmt"+n,Rr[t]={offset:e*-1,hem:"n"}}const Hw="utc",Bw=()=>{if(typeof Intl>"u"||typeof Intl.DateTimeFormat>"u")return null;let e=Intl.DateTimeFormat();if(typeof e>"u"||typeof e.resolvedOptions>"u")return null;let n=e.resolvedOptions().timeZone;return n?n.toLowerCase():null},qw=()=>{let e=Bw();return e===null?Hw:e},Ww=/(-?[0-9]+)h(rs)?/i,Gw=/(-?[0-9]+)/,Kw=/utc([\-+]?[0-9]+)/i,Yw=/gmt([\-+]?[0-9]+)/i,Do=function(e){return e=Number(e),e>=-13&&e<=13?(e=e*-1,e=(e>0?"+":"")+e,"etc/gmt"+e):null},Qw=function(e){let n=e.match(Ww);if(n!==null||(n=e.match(Kw),n!==null))return Do(n[1]);if(n=e.match(Yw),n!==null){let t=Number(n[1])*-1;return Do(t)}return n=e.match(Gw),n!==null?Do(n[1]):null};let jo=qw();const qf=Object.keys(Rr).reduce((e,n)=>{let t=n.split("/")[1]||"";return t=t.replace(/_/g," "),e[t]=n,e},{}),Xw=e=>(e=e.replace(/ time/g,""),e=e.replace(/ (standard|daylight|summer)/g,""),e=e.replace(/\b(east|west|north|south)ern/g,"$1"),e=e.replace(/\b(africa|america|australia)n/g,"$1"),e=e.replace(/\beuropean/g,"europe"),e=e.replace(/islands/g,"island"),e),ji=(e,n)=>{if(!e)return n.hasOwnProperty(jo)||(console.warn(`Unrecognized IANA id '${jo}'. Setting fallback tz to UTC.`),jo="utc"),jo;typeof e!="string"&&console.error("Timezone must be a string - recieved: '",e,`'
`);let t=e.trim();if(t=t.toLowerCase(),n.hasOwnProperty(t)===!0||(t=Xw(t),n.hasOwnProperty(t)===!0))return t;if(qf.hasOwnProperty(t)===!0)return qf[t];if(/[0-9]/.test(t)===!0){let r=Qw(t);if(r)return r}throw new Error("Spacetime: Cannot find timezone named: '"+e+"'. Please enter an IANA timezone id.")};function to(e){return e%4===0&&e%100!==0||e%400===0}function zh(e){return Object.prototype.toString.call(e)==="[object Date]"&&!isNaN(e.valueOf())}function Zw(e){return Object.prototype.toString.call(e)==="[object Array]"}function mt(e){return Object.prototype.toString.call(e)==="[object Object]"}function Jw(e){return Object.prototype.toString.call(e)==="[object Boolean]"}function $(e,n=2){let t="0";return e=e+"",e.length>=n?e:new Array(n-e.length+1).join(t)+e}function e5(e){return e?e[0].toUpperCase()+e.substr(1):""}function Vn(e){let n=e%10,t=e%100;return n===1&&t!==11?e+"st":n===2&&t!==12?e+"nd":n===3&&t!==13?e+"rd":e+"th"}function Er(e){return e=String(e),e=e.replace(/([0-9])(st|nd|rd|th)$/i,"$1"),parseInt(e,10)}function tr(e=""){return e=e.toLowerCase().trim(),e=e.replace(/ies$/,"y"),e=e.replace(/s$/,""),e=e.replace(/-/g,""),e==="day"||e==="days"?"date":e==="min"||e==="mins"?"minute":e}function ta(e){return typeof e=="number"?e:zh(e)?e.getTime():e.epoch||e.epoch===0?e.epoch:null}function Lt(e,n){return mt(e)===!1?n.clone().set(e):e}function da(e,n=""){const t=e>0?"+":"-",r=Math.abs(e),a=$(parseInt(""+r,10)),o=$(r%1*60);return`${t}${a}${n}${o}`}const yu={year:new Date().getFullYear(),month:0,date:1},n5=(e,n,t)=>{if(n.length===0)return e;let r=["year","month","date","hour","minute","second","millisecond"];for(let a=0;a<r.length;a++){let o=n[a]||t[r[a]]||yu[r[a]]||0;e=e[r[a]](o)}return e},t5=(e,n,t)=>{if(Object.keys(n).length===0)return e;n=Object.assign({},yu,t,n);let r=Object.keys(n);for(let a=0;a<r.length;a++){let o=r[a];if(e[o]===void 0||typeof e[o]!="function"||n[o]===null||n[o]===void 0||n[o]==="")continue;let i=n[o]||t[o]||yu[o]||0;e=e[o](i)}return e},r5=function(e,n){return n>0&&n<25e8&&e.silent===!1&&(console.warn("  - Warning: You are setting the date to January 1970."),console.warn("       -   did input seconds instead of milliseconds?")),e.epoch=n,e},a5={parseArray:n5,parseObject:t5,parseNumber:r5},jt=function(e){return e.epoch=Date.now(),Object.keys(e._today||{}).forEach(n=>{typeof e[n]=="function"&&(e=e[n](e._today[n]))}),e},Ni={now:e=>jt(e),today:e=>jt(e),tonight:e=>(e=jt(e),e=e.hour(18),e),tomorrow:e=>(e=jt(e),e=e.add(1,"day"),e=e.startOf("day"),e),yesterday:e=>(e=jt(e),e=e.subtract(1,"day"),e=e.startOf("day"),e),christmas:e=>{let n=jt(e).year();return e=e.set([n,11,25,18,0,0]),e},"new years":e=>{let n=jt(e).year();return e=e.set([n,11,31,18,0,0]),e}};Ni["new years eve"]=Ni["new years"];const o5=function(e){return e=e.replace(/\b(mon|tues?|wed|wednes|thur?s?|fri|sat|satur|sun)(day)?\b/i,""),e=e.replace(/([0-9])(th|rd|st|nd)/,"$1"),e=e.replace(/,/g,""),e=e.replace(/ +/g," ").trim(),e};let Q={millisecond:1};Q.second=1e3;Q.minute=6e4;Q.hour=36e5;Q.day=864e5;Q.date=Q.day;Q.month=864e5*29.5;Q.week=6048e5;Q.year=3154e7;Object.keys(Q).forEach(e=>{Q[e+"s"]=Q[e]});const No=(e,n,t,r,a)=>{let o=e.d[t]();if(o===n)return;let i=a===null?null:e.d[a](),s=e.epoch,l=n-o;e.epoch+=Q[r]*l,r==="day"&&Math.abs(l)>28&&n<28&&(e.epoch+=Q.hour),a!==null&&i!==e.d[a]()&&(e.epoch=s);const u=Q[r]/2;for(;e.d[t]()<n;)e.epoch+=u;for(;e.d[t]()>n;)e.epoch-=u;a!==null&&i!==e.d[a]()&&(e.epoch=s)},ns={year:{valid:e=>e>-4e3&&e<4e3,walkTo:(e,n)=>No(e,n,"getFullYear","year",null)},month:{valid:e=>e>=0&&e<=11,walkTo:(e,n)=>{let t=e.d,r=t.getMonth(),a=e.epoch,o=t.getFullYear();if(r===n)return;let i=n-r;for(e.epoch+=Q.day*(i*28),o!==e.d.getFullYear()&&(e.epoch=a);e.d.getMonth()<n;)e.epoch+=Q.day;for(;e.d.getMonth()>n;)e.epoch-=Q.day}},date:{valid:e=>e>0&&e<=31,walkTo:(e,n)=>No(e,n,"getDate","day","getMonth")},hour:{valid:e=>e>=0&&e<24,walkTo:(e,n)=>No(e,n,"getHours","hour","getDate")},minute:{valid:e=>e>=0&&e<60,walkTo:(e,n)=>No(e,n,"getMinutes","minute","getHours")},second:{valid:e=>e>=0&&e<60,walkTo:(e,n)=>{e.epoch=e.seconds(n).epoch}},millisecond:{valid:e=>e>=0&&e<1e3,walkTo:(e,n)=>{e.epoch=e.milliseconds(n).epoch}}},K=(e,n)=>{let t=Object.keys(ns),r=e.clone();for(let a=0;a<t.length;a++){let o=t[a],i=n[o];if(i===void 0&&(i=r[o]()),typeof i=="string"&&(i=parseInt(i,10)),!ns[o].valid(i)){e.epoch=null,e.silent===!1&&console.warn("invalid "+o+": "+i);return}ns[o].walkTo(e,i)}},Jt=[31,28,31,30,31,30,31,31,30,31,30,31];let Ua=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],Ha=["january","february","march","april","may","june","july","august","september","october","november","december"];function i5(){const e={sep:8};for(let n=0;n<Ua.length;n++)e[Ua[n]]=n;for(let n=0;n<Ha.length;n++)e[Ha[n]]=n;return e}function ra(){return Ua}function l5(){return Ha}function Mh(){return i5()}function s5(e){Ua=e.short||Ua,Ha=e.long||Ha}const Ah=(e,n)=>{if(!n)return e;n=n.trim().toLowerCase();let t=0;if(/^[+-]?[0-9]{2}:[0-9]{2}$/.test(n)&&(/:00/.test(n)===!0&&(n=n.replace(/:00/,"")),/:30/.test(n)===!0&&(n=n.replace(/:30/,".5"))),/^[+-]?[0-9]{4}$/.test(n)&&(n=n.replace(/30$/,".5")),t=parseFloat(n),Math.abs(t)>100&&(t=t/100),t===0||n==="Z"||n==="z")return e.tz="etc/gmt",e;t*=-1,t>=0&&(t="+"+t);let r="etc/gmt"+t;return e.timezones[r]&&(e.tz=r),e},u5=function(e=""){return e=String(e),e.length>3?e=e.substring(0,3):e.length===1?e=e+"00":e.length===2&&(e=e+"0"),Number(e)||0},Ue=(e,n="")=>{n=n.replace(/^\s+/,"").toLowerCase();let t=n.match(/([0-9]{1,2}):([0-9]{1,2}):?([0-9]{1,2})?[:.]?([0-9]{1,4})?/);if(t!==null){let[,r,a,o,i]=t;if(r=Number(r),r<0||r>24||(a=Number(a),t[2].length<2||a<0||a>59))return e.startOf("day");e=e.hour(r),e=e.minute(a),e=e.seconds(o||0),e=e.millisecond(u5(i));let s=n.match(/[0-9] ?(am|pm)\b/);return s!==null&&s[1]&&(e=e.ampm(s[1])),e}if(t=n.match(/([0-9]+) ?(am|pm)/),t!==null&&t[1]){let r=Number(t[1]);return r>12||r<1?e.startOf("day"):(e=e.hour(t[1]||0),e=e.ampm(t[2]),e=e.startOf("hour"),e)}return e=e.startOf("day"),e};let Wf=Mh();const He=e=>{if(Jt.hasOwnProperty(e.month)!==!0)return!1;if(e.month===1)return to(e.year)&&e.date<=29?!0:e.date<=28;let n=Jt[e.month]||0;return e.date<=n},Kn=(e="",n)=>{if(e=e.trim(),/^'[0-9][0-9]$/.test(e)===!0){let r=Number(e.replace(/'/,""));return r>50?1900+r:2e3+r}let t=parseInt(e,10);return!t&&n&&(t=n.year),t=t||new Date().getFullYear(),t},Ot=function(e){return e=e.toLowerCase().trim(),e==="sept"?Wf.sep:Wf[e]},c5=[{reg:/^(-?0{0,2}[0-9]{3,4})-([0-9]{1,2})-([0-9]{1,2})[T| ]([0-9.:]+)(Z|[0-9-+:]+)?$/i,parse:(e,n)=>{let t={year:n[1],month:parseInt(n[2],10)-1,date:n[3]};return He(t)===!1?(e.epoch=null,e):(Ah(e,n[5]),K(e,t),e=Ue(e,n[4]),e)}},{reg:/^([0-9]{4})[\-/. ]([0-9]{1,2})[\-/. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,parse:(e,n)=>{let t={year:n[1],month:parseInt(n[2],10)-1,date:parseInt(n[3],10)};return t.month>=12&&(t.date=parseInt(n[2],10),t.month=parseInt(n[3],10)-1),He(t)===!1?(e.epoch=null,e):(K(e,t),e=Ue(e,n[4]),e)}},{reg:/^([0-9]{4})[\-/. ]([a-z]+)[\-/. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,parse:(e,n)=>{let t={year:Kn(n[1],e._today),month:Ot(n[2]),date:Er(n[3]||"")};return He(t)===!1?(e.epoch=null,e):(K(e,t),e=Ue(e,n[4]),e)}}],d5=[{reg:/^([0-9]{1,2})[-/.]([0-9]{1,2})[\-/.]?([0-9]{4})?( [0-9]{1,2}:[0-9]{2}:?[0-9]{0,2} ?(am|pm|gmt))?$/i,parse:(e,n)=>{let t=parseInt(n[1],10)-1,r=parseInt(n[2],10);(e.british||t>=12)&&(r=parseInt(n[1],10),t=parseInt(n[2],10)-1);let a={date:r,month:t,year:Kn(n[3],e._today)||new Date().getFullYear()};return He(a)===!1?(e.epoch=null,e):(K(e,a),e=Ue(e,n[4]),e)}},{reg:/^([a-z]+)[\-/. ]([0-9]{1,2})[\-/. ]?([0-9]{4}|'[0-9]{2})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,parse:(e,n)=>{let t={year:Kn(n[3],e._today),month:Ot(n[1]),date:Er(n[2]||"")};return He(t)===!1?(e.epoch=null,e):(K(e,t),e=Ue(e,n[4]),e)}},{reg:/^([a-z]+) ([0-9]{1,2})( [0-9]{4})?( ([0-9:]+( ?am| ?pm| ?gmt)?))?$/i,parse:(e,n)=>{let t={year:Kn(n[3],e._today),month:Ot(n[1]),date:Er(n[2]||"")};return He(t)===!1?(e.epoch=null,e):(K(e,t),e=Ue(e,n[4]),e)}},{reg:/^([a-z]+) ([0-9]{1,2}) ([0-9]{1,2}:[0-9]{2}:?[0-9]{0,2})( \+[0-9]{4})?( [0-9]{4})?$/i,parse:(e,n)=>{let[,t,r,a,o,i]=n,s={year:Kn(i,e._today),month:Ot(t),date:Er(r||"")};return He(s)===!1?(e.epoch=null,e):(K(e,s),e=Ah(e,o),e=Ue(e,a),e)}}],f5=[{reg:/^([0-9]{1,2})[-/]([a-z]+)[\-/]?([0-9]{4})?$/i,parse:(e,n)=>{let t={year:Kn(n[3],e._today),month:Ot(n[2]),date:Er(n[1]||"")};return He(t)===!1?(e.epoch=null,e):(K(e,t),e=Ue(e,n[4]),e)}},{reg:/^([0-9]{1,2})( [a-z]+)( [0-9]{4}| '[0-9]{2})? ?([0-9]{1,2}:[0-9]{2}:?[0-9]{0,2} ?(am|pm|gmt))?$/i,parse:(e,n)=>{let t={year:Kn(n[3],e._today),month:Ot(n[2]),date:Er(n[1])};return!t.month||He(t)===!1?(e.epoch=null,e):(K(e,t),e=Ue(e,n[4]),e)}},{reg:/^([0-9]{1,2})[. \-/]([a-z]+)[. \-/]([0-9]{4})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,parse:(e,n)=>{let t={date:Number(n[1]),month:Ot(n[2]),year:Number(n[3])};return He(t)===!1?(e.epoch=null,e):(K(e,t),e=e.startOf("day"),e=Ue(e,n[4]),e)}}],p5=[{reg:/^([0-9]{4})[\-/]([0-9]{2})$/,parse:(e,n)=>{let t={year:n[1],month:parseInt(n[2],10)-1,date:1};return He(t)===!1?(e.epoch=null,e):(K(e,t),e=Ue(e,n[4]),e)}},{reg:/^([a-z]+) ([0-9]{4})$/i,parse:(e,n)=>{let t={year:Kn(n[2],e._today),month:Ot(n[1]),date:e._today.date||1};return He(t)===!1?(e.epoch=null,e):(K(e,t),e=Ue(e,n[4]),e)}},{reg:/^(q[0-9])( of)?( [0-9]{4})?/i,parse:(e,n)=>{let t=n[1]||"";e=e.quarter(t);let r=n[3]||"";return r&&(r=r.trim(),e=e.year(r)),e}},{reg:/^(spring|summer|winter|fall|autumn)( of)?( [0-9]{4})?/i,parse:(e,n)=>{let t=n[1]||"";e=e.season(t);let r=n[3]||"";return r&&(r=r.trim(),e=e.year(r)),e}},{reg:/^[0-9,]+ ?b\.?c\.?$/i,parse:(e,n)=>{let t=n[0]||"";t=t.replace(/^([0-9,]+) ?b\.?c\.?$/i,"-$1");let r=new Date,a={year:parseInt(t.trim(),10),month:r.getMonth(),date:r.getDate()};return He(a)===!1?(e.epoch=null,e):(K(e,a),e=Ue(e),e)}},{reg:/^[0-9,]+ ?(a\.?d\.?|c\.?e\.?)$/i,parse:(e,n)=>{let t=n[0]||"";t=t.replace(/,/g,"");let r=new Date,a={year:parseInt(t.trim(),10),month:r.getMonth(),date:r.getDate()};return He(a)===!1?(e.epoch=null,e):(K(e,a),e=Ue(e),e)}},{reg:/^[0-9]{4}( ?a\.?d\.?)?$/i,parse:(e,n)=>{let t=e._today;t.month&&!t.date&&(t.date=1);let r=new Date,a={year:Kn(n[0],t),month:t.month||r.getMonth(),date:t.date||r.getDate()};return He(a)===!1?(e.epoch=null,e):(K(e,a),e=Ue(e),e)}}],ts=[].concat(c5,d5,f5,p5),m5=function(e,n,t){for(let r=0;r<ts.length;r++){let a=n.match(ts[r].reg);if(a){let o=ts[r].parse(e,a,t);if(o!==null&&o.isValid())return o}}return e.silent===!1&&console.warn("Warning: couldn't parse date-string: '"+n+"'"),e.epoch=null,e},{parseArray:h5,parseObject:Gf,parseNumber:g5}=a5,Kf={year:new Date().getFullYear(),month:0,date:1},_h=(e,n)=>{let t=e._today||Kf;if(typeof n=="number")return g5(e,n);if(e.epoch=Date.now(),e._today&&mt(e._today)&&Object.keys(e._today).length>0){let r=Gf(e,t,Kf);r.isValid()&&(e.epoch=r.epoch)}return n==null||n===""?e:zh(n)===!0?(e.epoch=n.getTime(),e):Zw(n)===!0?(e=h5(e,n,t),e):mt(n)===!0?n.epoch?(e.epoch=n.epoch,e.tz=n.tz,e):(e=Gf(e,n,t),e):typeof n!="string"?e:(n=o5(n),Ni.hasOwnProperty(n)===!0?(e=Ni[n](e),e):m5(e,n))};let bu=["sun","mon","tue","wed","thu","fri","sat"],ku=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];function Ba(){return bu}function Ri(){return ku}function v5(e){bu=e.short||bu,ku=e.long||ku}const Yf={mo:1,tu:2,we:3,th:4,fr:5,sa:6,su:7,tues:2,weds:3,wedn:3,thur:4,thurs:4};let Ih=!0;function y5(){return Ih}function b5(e){Ih=e}const Qf=e=>{let n=e.timezone().current.offset;return n?da(n,":"):"Z"},Hn=e=>y5()?e5(e):e,k5=e=>e>=0?$(e,4):(e=Math.abs(e),"-"+$(e,4)),br={day:e=>Hn(e.dayName()),"day-short":e=>Hn(Ba()[e.day()]),"day-number":e=>e.day(),"day-ordinal":e=>Vn(e.day()),"day-pad":e=>$(e.day()),date:e=>e.date(),"date-ordinal":e=>Vn(e.date()),"date-pad":e=>$(e.date()),month:e=>Hn(e.monthName()),"month-short":e=>Hn(ra()[e.month()]),"month-number":e=>e.month(),"month-ordinal":e=>Vn(e.month()),"month-pad":e=>$(e.month()),"iso-month":e=>$(e.month()+1),year:e=>{let n=e.year();return n>0?n:(n=Math.abs(n),n+" BC")},"year-short":e=>{let n=e.year();return n>0?`'${String(e.year()).substr(2,4)}`:(n=Math.abs(n),n+" BC")},"iso-year":e=>{let n=e.year(),t=n<0,r=$(Math.abs(n),4);return t&&(r=$(r,6),r="-"+r),r},time:e=>e.time(),"time-24":e=>`${e.hour24()}:${$(e.minute())}`,hour:e=>e.hour12(),"hour-pad":e=>$(e.hour12()),"hour-24":e=>e.hour24(),"hour-24-pad":e=>$(e.hour24()),minute:e=>e.minute(),"minute-pad":e=>$(e.minute()),second:e=>e.second(),"second-pad":e=>$(e.second()),millisecond:e=>e.millisecond(),"millisecond-pad":e=>$(e.millisecond(),3),ampm:e=>e.ampm(),AMPM:e=>e.ampm().toUpperCase(),quarter:e=>"Q"+e.quarter(),season:e=>e.season(),era:e=>e.era(),json:e=>e.json(),timezone:e=>e.timezone().name,offset:e=>Qf(e),numeric:e=>`${e.year()}/${$(e.month()+1)}/${$(e.date())}`,"numeric-us":e=>`${$(e.month()+1)}/${$(e.date())}/${e.year()}`,"numeric-uk":e=>`${$(e.date())}/${$(e.month()+1)}/${e.year()}`,"mm/dd":e=>`${$(e.month()+1)}/${$(e.date())}`,iso:e=>{let n=e.format("iso-year"),t=$(e.month()+1),r=$(e.date()),a=$(e.h24()),o=$(e.minute()),i=$(e.second()),s=$(e.millisecond(),3),l=Qf(e);return`${n}-${t}-${r}T${a}:${o}:${i}.${s}${l}`},"iso-short":e=>{let n=$(e.month()+1),t=$(e.date());return`${k5(e.year())}-${n}-${t}`},"iso-utc":e=>new Date(e.epoch).toISOString(),nice:e=>`${ra()[e.month()]} ${Vn(e.date())}, ${e.time()}`,"nice-24":e=>`${ra()[e.month()]} ${Vn(e.date())}, ${e.hour24()}:${$(e.minute())}`,"nice-year":e=>`${ra()[e.month()]} ${Vn(e.date())}, ${e.year()}`,"nice-day":e=>`${Ba()[e.day()]} ${Hn(ra()[e.month()])} ${Vn(e.date())}`,"nice-full":e=>`${e.dayName()} ${Hn(e.monthName())} ${Vn(e.date())}, ${e.time()}`,"nice-full-24":e=>`${e.dayName()} ${Hn(e.monthName())} ${Vn(e.date())}, ${e.hour24()}:${$(e.minute())}`},Xf={"day-name":"day","month-name":"month","iso 8601":"iso","time-h24":"time-24","time-12":"time","time-h12":"time",tz:"timezone","day-num":"day-number","month-num":"month-number","month-iso":"iso-month","year-iso":"iso-year","nice-short":"nice","nice-short-24":"nice-24",mdy:"numeric-us",dmy:"numeric-uk",ymd:"numeric","yyyy/mm/dd":"numeric","mm/dd/yyyy":"numeric-us","dd/mm/yyyy":"numeric-us","little-endian":"numeric-uk","big-endian":"numeric","day-nice":"nice-day"};Object.keys(Xf).forEach(e=>br[e]=br[Xf[e]]);const rs=(e,n="")=>{if(e.isValid()!==!0)return"";if(br.hasOwnProperty(n)){let t=br[n](e)||"";return n!=="json"&&(t=String(t),n.toLowerCase()!=="ampm"&&(t=Hn(t))),t}if(n.indexOf("{")!==-1){let t=/\{(.+?)\}/g;return n=n.replace(t,(r,a)=>{if(a=a.trim(),a!=="AMPM"&&(a=a.toLowerCase()),br.hasOwnProperty(a)){let o=String(br[a](e));return a.toLowerCase()!=="ampm"?Hn(o):o}return""}),n}return e.format("iso-short")},Li={G:e=>e.era(),GG:e=>e.era(),GGG:e=>e.era(),GGGG:e=>e.era()==="AD"?"Anno Domini":"Before Christ",y:e=>e.year(),yy:e=>$(Number(String(e.year()).substr(2,4))),yyy:e=>e.year(),yyyy:e=>e.year(),yyyyy:e=>"0"+e.year(),Q:e=>e.quarter(),QQ:e=>e.quarter(),QQQ:e=>e.quarter(),QQQQ:e=>e.quarter(),M:e=>e.month()+1,MM:e=>$(e.month()+1),MMM:e=>e.format("month-short"),MMMM:e=>e.format("month"),w:e=>e.week(),ww:e=>$(e.week()),d:e=>e.date(),dd:e=>$(e.date()),D:e=>e.dayOfYear(),DD:e=>$(e.dayOfYear()),DDD:e=>$(e.dayOfYear(),3),E:e=>e.format("day-short"),EE:e=>e.format("day-short"),EEE:e=>e.format("day-short"),EEEE:e=>e.format("day"),EEEEE:e=>e.format("day")[0],e:e=>e.day(),ee:e=>e.day(),eee:e=>e.format("day-short"),eeee:e=>e.format("day"),eeeee:e=>e.format("day")[0],a:e=>e.ampm().toUpperCase(),aa:e=>e.ampm().toUpperCase(),aaa:e=>e.ampm().toUpperCase(),aaaa:e=>e.ampm().toUpperCase(),h:e=>e.h12(),hh:e=>$(e.h12()),H:e=>e.hour(),HH:e=>$(e.hour()),m:e=>e.minute(),mm:e=>$(e.minute()),s:e=>e.second(),ss:e=>$(e.second()),SSS:e=>$(e.millisecond(),3),A:e=>e.epoch-e.startOf("day").epoch,z:e=>e.timezone().name,zz:e=>e.timezone().name,zzz:e=>e.timezone().name,zzzz:e=>e.timezone().name,Z:e=>da(e.timezone().current.offset),ZZ:e=>da(e.timezone().current.offset),ZZZ:e=>da(e.timezone().current.offset),ZZZZ:e=>da(e.timezone().current.offset,":")},at=(e,n,t)=>{let r=e,a=n;for(let o=0;o<t;o+=1)Li[r]=Li[a],r+=e,a+=n};at("q","Q",4);at("L","M",4);at("Y","y",4);at("c","e",4);at("k","H",2);at("K","h",2);at("S","s",2);at("v","z",4);at("V","Z",4);const w5=function(e){for(let n=0;n<e.length;n+=1)if(e[n]==="'")for(let t=n+1;t<e.length;t+=1){if(e[t]&&(e[n]+=e[t]),e[t]==="'"){e[t]=null;break}e[t]=null}return e.filter(n=>n)},x5=function(e){for(let n=0;n<e.length;n+=1){let t=e[n];for(let r=n+1;r<e.length&&e[r]===t;r+=1)e[n]+=e[r],e[r]=null}return e=e.filter(n=>n),e=e.map(n=>(n==="''"&&(n="'"),n)),e},S5=(e,n)=>{let t=n.split("");return t=w5(t),t=x5(t),t.reduce((r,a)=>(Li[a]!==void 0?r+=Li[a](e)||"":(/^'.+'$/.test(a)&&(a=a.replace(/'/g,"")),r+=a),r),"")},C5=["year","season","quarter","month","week","day","quarterHour","hour","minute"],Zf=function(e,n){let t=e.clone().startOf(n),a=e.clone().endOf(n).epoch-t.epoch,o=(e.epoch-t.epoch)/a;return parseFloat(o.toFixed(2))},O5=(e,n)=>{if(n)return n=tr(n),Zf(e,n);let t={};return C5.forEach(r=>{t[r]=Zf(e,r)}),t},P5=(e,n)=>{let t=e.progress();return n=tr(n),n==="quarterhour"&&(n="quarterHour"),t[n]!==void 0?(t[n]>.5&&(e=e.add(1,n)),e=e.startOf(n)):e.silent===!1&&console.warn("no known unit '"+n+"'"),e},Jf=(e,n,t)=>{let r=0;for(e=e.clone();e.isBefore(n);)e=e.add(1,t),r+=1;return e.isAfter(n,t)&&(r-=1),r},as=(e,n,t)=>e.isBefore(n)?Jf(e,n,t):Jf(n,e,t)*-1,T5=(e,n)=>{let t=n.year()-e.year();return e=e.year(n.year()),e.isAfter(n)&&(t-=1),t},E5=function(e,n){let t=n.epoch-e.epoch,r={milliseconds:t,seconds:parseInt(t/1e3,10)};r.minutes=parseInt(r.seconds/60,10),r.hours=parseInt(r.minutes/60,10);let a=e.clone();return r.years=T5(a,n),a=e.add(r.years,"year"),r.months=r.years*12,a=e.add(r.months,"month"),r.months+=as(a,n,"month"),r.quarters=r.years*4,r.quarters+=parseInt(r.months%12/3,10),r.weeks=r.years*52,a=e.add(r.weeks,"week"),r.weeks+=as(a,n,"week"),r.days=r.weeks*7,a=e.add(r.days,"day"),r.days+=as(a,n,"day"),r},z5=function(e){return Object.keys(e).forEach(n=>{e[n]*=-1}),e},M5=function(e,n,t){n=Lt(n,e);let r=!1;if(e.isAfter(n)){let o=e;e=n,n=o,r=!0}let a=E5(e,n);return r&&(a=z5(a)),t?(t=tr(t),/s$/.test(t)!==!0&&(t+="s"),t==="dates"&&(t="days"),a[t]):a},ir=e=>Math.abs(e)||0,A5=function(e){let n="P";return n+=ir(e.years)+"Y",n+=ir(e.months)+"M",n+=ir(e.days)+"DT",n+=ir(e.hours)+"H",n+=ir(e.minutes)+"M",n+=ir(e.seconds)+"S",n};function _5(e,n){const t=e.isBefore(n),r=t?n:e;let a=t?e:n;a=a.clone();const o={years:0,months:0,days:0,hours:0,minutes:0,seconds:0};return Object.keys(o).forEach(i=>{if(a.isSame(r,i))return;let s=a.diff(r,i);a=a.add(s,i),o[i]=s}),t&&Object.keys(o).forEach(i=>{o[i]!==0&&(o[i]*=-1)}),o}let Ge={second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years"};function ep(e){return Ge[e]||""}function I5(e={}){Ge={second:e.second||Ge.second,seconds:e.seconds||Ge.seconds,minute:e.minute||Ge.minute,minutes:e.minutes||Ge.minutes,hour:e.hour||Ge.hour,hours:e.hours||Ge.hours,day:e.day||Ge.day,days:e.days||Ge.days,month:e.month||Ge.month,months:e.months||Ge.months,year:e.year||Ge.year,years:e.years||Ge.years}}let wu="past",xu="future",Su="present",Cu="now",Ou="almost",Pu="over",Tu=e=>`${e} ago`,Eu=e=>`in ${e}`;function os(e){return Tu(e)}function is(e){return Eu(e)}function D5(){return wu}function j5(){return xu}function N5(){return Su}function ls(){return Cu}function R5(){return Ou}function L5(){return Pu}function $5(e){Tu=e.pastDistance||Tu,Eu=e.futureDistance||Eu,wu=e.past||wu,xu=e.future||xu,Su=e.present||Su,Cu=e.now||Cu,Ou=e.almost||Ou,Pu=e.over||Pu}const np={months:{almost:10,over:4},days:{almost:25,over:10},hours:{almost:20,over:8},minutes:{almost:50,over:20},seconds:{almost:50,over:20}};function tp(e,n){return e===1?e+" "+ep(n.slice(0,-1)):e+" "+ep(n)}const F5=function(e){let n=null,t=null,r=[],a=[];return Object.keys(e).forEach((o,i,s)=>{const l=Math.abs(e[o]);if(l===0)return;r.push(l+o[0]);const u=tp(l,o);if(a.push(u),!n){if(n=u,t=u,i>4)return;const c=s[i+1],d=Math.abs(e[c]);d>np[c].almost?(n=tp(l+1,o),t=R5()+" "+n):d>np[c].over&&(t=L5()+" "+u)}}),{qualified:t,rounded:n,abbreviated:r,englishValues:a}},V5=(e,n)=>{n=Lt(n,e);const t=_5(e,n);if(Object.keys(t).every(d=>!t[d])===!0)return{diff:t,rounded:ls(),qualified:ls(),precise:ls(),abbreviated:[],iso:"P0Y0M0DT0H0M0S",direction:N5()};let a,o=j5(),{rounded:i,qualified:s,englishValues:l,abbreviated:u}=F5(t);a=l.splice(0,2).join(", "),e.isAfter(n)===!0?(i=os(i),s=os(s),a=os(a),o=D5()):(i=is(i),s=is(s),a=is(a));let c=A5(t);return{diff:t,rounded:i,qualified:s,precise:a,abbreviated:u,iso:c,direction:o}},U5=[["spring",2,1],["summer",5,1],["fall",8,1],["autumn",8,1],["winter",11,1]],H5=[["fall",2,1],["autumn",2,1],["winter",5,1],["spring",8,1],["summer",11,1]],Cn={north:U5,south:H5},Ut=[null,[0,1],[3,1],[6,1],[9,1]],Wt={second:e=>(K(e,{millisecond:0}),e),minute:e=>(K(e,{second:0,millisecond:0}),e),quarterhour:e=>{let n=e.minutes();return n>=45?e=e.minutes(45):n>=30?e=e.minutes(30):n>=15?e=e.minutes(15):e=e.minutes(0),K(e,{second:0,millisecond:0}),e},hour:e=>(K(e,{minute:0,second:0,millisecond:0}),e),day:e=>(K(e,{hour:0,minute:0,second:0,millisecond:0}),e),week:e=>{let n=e.clone();return e=e.day(e._weekStart),e.isAfter(n)&&(e=e.subtract(1,"week")),K(e,{hour:0,minute:0,second:0,millisecond:0}),e},month:e=>(K(e,{date:1,hour:0,minute:0,second:0,millisecond:0}),e),quarter:e=>{let n=e.quarter();return Ut[n]&&K(e,{month:Ut[n][0],date:Ut[n][1],hour:0,minute:0,second:0,millisecond:0}),e},season:e=>{let n=e.season(),t="north";e.hemisphere()==="South"&&(t="south");for(let r=0;r<Cn[t].length;r++)if(Cn[t][r][0]===n){let a=e.year();return n==="winter"&&e.month()<3&&(a-=1),K(e,{year:a,month:Cn[t][r][1],date:Cn[t][r][2],hour:0,minute:0,second:0,millisecond:0}),e}return e},year:e=>(K(e,{month:0,date:1,hour:0,minute:0,second:0,millisecond:0}),e),decade:e=>{e=e.startOf("year");let n=e.year(),t=parseInt(n/10,10)*10;return e=e.year(t),e},century:e=>{e=e.startOf("year");let n=e.year(),t=parseInt(n/100,10)*100;return e=e.year(t),e}};Wt.date=Wt.day;const B5=(e,n)=>{let t=e.clone();return n=tr(n),Wt[n]?Wt[n](t):n==="summer"||n==="winter"?(t=t.season(n),Wt.season(t)):t},q5=(e,n)=>{let t=e.clone();return n=tr(n),Wt[n]&&(t=Wt[n](t),t=t.add(1,n),t=t.subtract(1,"millisecond")),t},W5=function(e){return!!(Ba().find(n=>n===e)||Ri().find(n=>n===e))},G5=function(e,n,t,r=1){if(!n||!t)return[];if(n=tr(n),t=e.clone().set(t),e.isAfter(t)){let i=e;e=t,t=i}if(e.diff(t,n)<r)return[];let a=e.clone();W5(n)?(a=a.next(n),n="week"):a.startOf(n).isBefore(e)&&(a=a.next(n));let o=[];for(;a.isBefore(t);)o.push(a),a=a.add(r,n);return o},K5=e=>e?e.split("->"):[],Y5=e=>(e=e[0].toUpperCase()+e.substr(1),e=e.replace(/[/_-]([a-z])/gi,n=>n.toUpperCase()),e=e.replace(/_(of|es)_/i,n=>n.toLowerCase()),e=e.replace(/\/gmt/i,"/GMT"),e=e.replace(/\/Dumontdurville$/i,"/DumontDUrville"),e=e.replace(/\/Mcmurdo$/i,"/McMurdo"),e=e.replace(/\/Port-au-prince$/i,"/Port-au-Prince"),e),aa=e=>{let n=e.timezones,t=e.tz;if(n.hasOwnProperty(t)===!1&&(t=ji(e.tz,n)),t===null)return e.silent===!1&&console.warn("Warn: could not find given or local timezone - '"+e.tz+"'"),{current:{epochShift:0}};let r=n[t],a={name:Y5(t),hasDst:!!r.dst,default_offset:r.offset,hemisphere:r.hem==="s"?"South":"North",current:{}};if(a.hasDst){let s=K5(r.dst);a.change={start:s[0],back:s[1]}}let o=r.offset,i=o;return a.hasDst===!0&&(a.hemisphere==="North"?i=o-1:i=r.offset+1),a.hasDst===!1?(a.current.offset=o,a.current.isDST=!1):Eh(e.epoch,a.change.start,a.change.back,o,i)===!0?(a.current.offset=o,a.current.isDST=a.hemisphere==="North"):(a.current.offset=i,a.current.isDST=a.hemisphere==="South"),a},Q5=["century","decade","year","month","date","day","hour","minute","second","millisecond"],Et={set:function(e,n){let t=this.clone();return t=_h(t,e),n&&(this.tz=ji(n)),t},timezone:function(){return aa(this)},isDST:function(){return aa(this).current.isDST},hasDST:function(){return aa(this).hasDst},offset:function(){return aa(this).current.offset*60},hemisphere:function(){return aa(this).hemisphere},format:function(e){return rs(this,e)},unixFmt:function(e){return S5(this,e)},startOf:function(e){return B5(this,e)},endOf:function(e){return q5(this,e)},leapYear:function(){let e=this.year();return to(e)},progress:function(e){return O5(this,e)},nearest:function(e){return P5(this,e)},diff:function(e,n){return M5(this,e,n)},since:function(e){return e||(e=this.clone().set()),V5(this,e)},next:function(e){return this.add(1,e).startOf(e)},last:function(e){return this.subtract(1,e).startOf(e)},isValid:function(){return!this.epoch&&this.epoch!==0?!1:!isNaN(this.d.getTime())},goto:function(e){let n=this.clone();return n.tz=ji(e,n.timezones),n},every:function(e,n,t){if(typeof e=="object"&&typeof n=="string"){let r=n;n=e,e=r}return G5(this,e,n,t)},isAwake:function(){let e=this.hour();return!(e<8||e>22)},isAsleep:function(){return!this.isAwake()},daysInMonth:function(){switch(this.month()){case 0:return 31;case 1:return this.leapYear()?29:28;case 2:return 31;case 3:return 30;case 4:return 31;case 5:return 30;case 6:return 31;case 7:return 31;case 8:return 30;case 9:return 31;case 10:return 30;case 11:return 31;default:throw new Error("Invalid Month state.")}},log:function(){return console.log(""),console.log(rs(this,"nice-short")),this},logYear:function(){return console.log(""),console.log(rs(this,"full-short")),this},json:function(){return Q5.reduce((e,n)=>(e[n]=this[n](),e),{})},debug:function(){let e=this.timezone(),n=this.format("MM")+" "+this.format("date-ordinal")+" "+this.year();return n+=`
     - `+this.format("time"),console.log(`

`,n+`
     - `+e.name+" ("+e.current.offset+")"),this},from:function(e){return e=this.clone().set(e),e.since(this)},fromNow:function(){return this.clone().set(Date.now()).since(this)},weekStart:function(e){if(typeof e=="number")return this._weekStart=e,this;if(typeof e=="string"){e=e.toLowerCase().trim();let n=Ba().indexOf(e);n===-1&&(n=Ri().indexOf(e)),n===-1&&(n=1),this._weekStart=n}else console.warn("Spacetime Error: Cannot understand .weekStart() input:",e);return this}};Et.inDST=Et.isDST;Et.round=Et.nearest;Et.each=Et.every;const ot=e=>(typeof e=="string"&&(e=parseInt(e,10)),e),ss=["year","month","date","hour","minute","second","millisecond"],qc=(e,n,t)=>{let r=ss.indexOf(t),a=ss.slice(r,ss.length);for(let o=0;o<a.length;o++){let i=n[a[o]]();e[a[o]](i)}return e},Dt=function(e,n,t,r){return t===!0&&e.isBefore(n)?e=e.add(1,r):t===!1&&e.isAfter(n)&&(e=e.minus(1,r)),e},X5=function(e,n){n=ot(n);let r=e.millisecond()-n;return e.epoch-r},Z5=function(e,n,t){n=ot(n);let r=e.clone(),o=(e.second()-n)*Q.second;return e.epoch=e.epoch-o,e=Dt(e,r,t,"minute"),e.epoch},rp=function(e,n,t){n=ot(n);let r=e.clone(),o=(e.minute()-n)*Q.minute;return e.epoch-=o,qc(e,r,"second"),e=Dt(e,r,t,"hour"),e.epoch},us=function(e,n,t){n=ot(n),n>=24?n=24:n<0&&(n=0);let r=e.clone(),a=e.hour()-n,o=a*Q.hour;return e.epoch-=o,e.date()!==r.date()&&(e=r.clone(),a>1&&(a-=1),a<1&&(a+=1),o=a*Q.hour,e.epoch-=o),K(e,{hour:n}),qc(e,r,"minute"),e=Dt(e,r,t,"day"),e.epoch},J5=function(e,n,t){let r=n.match(/([0-9]{1,2})[:h]([0-9]{1,2})(:[0-9]{1,2})? ?(am|pm)?/);if(!r){if(r=n.match(/([0-9]{1,2}) ?(am|pm)/),!r)return e.epoch;r.splice(2,0,"0"),r.splice(3,0,"")}let a=!1,o=parseInt(r[1],10),i=parseInt(r[2],10);i>=60&&(i=59),o>12&&(a=!0),a===!1&&(r[4]==="am"&&o===12&&(o=0),r[4]==="pm"&&o<12&&(o+=12)),r[3]=r[3]||"",r[3]=r[3].replace(/:/,"");let s=parseInt(r[3],10)||0,l=e.clone();return e=e.hour(o),e=e.minute(i),e=e.second(s),e=e.millisecond(0),e=Dt(e,l,t,"day"),e.epoch},ex=function(e,n,t){if(n=ot(n),n>28){let a=e.month(),o=Jt[a];a===1&&n===29&&to(e.year())&&(o=29),n>o&&(n=o)}n<=0&&(n=1);let r=e.clone();return K(e,{date:n}),e=Dt(e,r,t,"month"),e.epoch},nx=function(e,n,t){typeof n=="string"&&(n==="sept"&&(n="sep"),n=Mh()[n.toLowerCase()]),n=ot(n),n>=12&&(n=11),n<=0&&(n=0);let r=e.date();r>Jt[n]&&(r=Jt[n]);let a=e.clone();return K(e,{month:n,d:r}),e=Dt(e,a,t,"year"),e.epoch},cs=function(e,n){return typeof n=="string"&&/^'[0-9]{2}$/.test(n)&&(n=n.replace(/'/,"").trim(),n=Number(n),n>30?n=1900+n:n=2e3+n),n=ot(n),K(e,{year:n}),e.epoch},tx=function(e,n,t){let r=e.clone();return n=ot(n),e=e.month(0),e=e.date(1),e=e.day("monday"),e.monthName()==="december"&&e.date()>=28&&(e=e.add(1,"week")),n-=1,e=e.add(n,"weeks"),e=Dt(e,r,t,"year"),e.epoch},rx=function(e,n,t){n=ot(n);let r=e.clone();return n-=1,n<=0?n=0:n>=365&&(to(e.year())?n=365:n=364),e=e.startOf("year"),e=e.add(n,"day"),qc(e,r,"hour"),e=Dt(e,r,t,"year"),e.epoch};let zu="am",Mu="pm";function ax(){return zu}function ox(){return Mu}function ix(e){zu=e.am||zu,Mu=e.pm||Mu}const lx={millisecond:function(e){if(e!==void 0){let n=this.clone();return n.epoch=X5(n,e),n}return this.d.getMilliseconds()},second:function(e,n){if(e!==void 0){let t=this.clone();return t.epoch=Z5(t,e,n),t}return this.d.getSeconds()},minute:function(e,n){if(e!==void 0){let t=this.clone();return t.epoch=rp(t,e,n),t}return this.d.getMinutes()},hour:function(e,n){let t=this.d;if(e!==void 0){let r=this.clone();return r.epoch=us(r,e,n),r}return t.getHours()},hourFloat:function(e,n){if(e!==void 0){let o=this.clone(),i=e%1;i=i*60;let s=parseInt(e,10);return o.epoch=us(o,s,n),o.epoch=rp(o,i,n),o}let t=this.d,r=t.getHours(),a=t.getMinutes();return a=a/60,r+a},hour12:function(e,n){let t=this.d;if(e!==void 0){let a=this.clone();e=""+e;let o=e.match(/^([0-9]+)(am|pm)$/);if(o){let i=parseInt(o[1],10);o[2]==="pm"&&(i+=12),a.epoch=us(a,i,n)}return a}let r=t.getHours();return r>12&&(r=r-12),r===0&&(r=12),r},time:function(e,n){if(e!==void 0){let t=this.clone();return e=e.toLowerCase().trim(),t.epoch=J5(t,e,n),t}return`${this.h12()}:${$(this.minute())}${this.ampm()}`},ampm:function(e,n){let t=ax(),r=this.hour();if(r>=12&&(t=ox()),typeof e!="string")return t;let a=this.clone();return e=e.toLowerCase().trim(),r>=12&&e==="am"?(r-=12,a.hour(r,n)):r<12&&e==="pm"?(r+=12,a.hour(r,n)):a},dayTime:function(e,n){if(e!==void 0){const r={morning:"7:00",breakfast:"7:00",noon:"12:00",lunch:"12:00",afternoon:"14:00",evening:"18:00",dinner:"18:00",night:"23:00",midnight:"00:00"};let a=this.clone();return e=e||"",e=e.toLowerCase(),r.hasOwnProperty(e)===!0&&(a=a.time(r[e],n)),a}let t=this.hour();return t<6?"night":t<12?"morning":t<17?"afternoon":t<22?"evening":"night"},iso:function(e){return e!==void 0?this.set(e):this.format("iso")}},sx={date:function(e,n){if(e!==void 0){let t=this.clone();return e=parseInt(e,10),e&&(t.epoch=ex(t,e,n)),t}return this.d.getDate()},day:function(e,n){if(e===void 0)return this.d.getDay();let t=this.clone(),r=e;typeof e=="string"&&(e=e.toLowerCase(),Yf.hasOwnProperty(e)?r=Yf[e]:(r=Ba().indexOf(e),r===-1&&(r=Ri().indexOf(e))));let o=this.d.getDay()-r;n===!0&&o>0&&(o=o-7),n===!1&&o<0&&(o=o+7);let i=this.subtract(o,"days");return K(i,{hour:t.hour(),minute:t.minute(),second:t.second()}),i},dayName:function(e,n){if(e===void 0)return Ri()[this.day()];let t=this.clone();return t=t.day(e,n),t}},ap=e=>(e=e.minute(0),e=e.second(0),e=e.millisecond(1),e),ux={dayOfYear:function(e,n){if(e!==void 0){let o=this.clone();return o.epoch=rx(o,e,n),o}let t=0,r=this.d.getMonth(),a;for(let o=1;o<=r;o++)a=new Date,a.setDate(1),a.setFullYear(this.d.getFullYear()),a.setHours(1),a.setMinutes(1),a.setMonth(o),a.setHours(-2),t+=a.getDate();return t+this.d.getDate()},week:function(e,n){if(e!==void 0){let s=this.clone();return s.epoch=tx(this,e,n),s=ap(s),s}let t=this.clone();t=t.month(0),t=t.date(1),t=ap(t),t=t.day("monday"),t.month()===11&&t.date()>=25&&(t=t.add(1,"week"));let r=1;t.date()===1&&(r=0),t=t.minus(2,"hours");const a=this.epoch;if(t.epoch>a)return 1;let o=0,i=this.month()*4;for(t.epoch+=Q.week*i,o+=i;o<=52;o++){if(t.epoch>a)return o+r;t=t.add(1,"week")}return 52},month:function(e,n){if(e!==void 0){let t=this.clone();return t.epoch=nx(t,e,n),t}return this.d.getMonth()},monthName:function(e,n){if(e!==void 0){let t=this.clone();return t=t.month(e,n),t}return l5()[this.month()]},quarter:function(e,n){if(e!==void 0&&(typeof e=="string"&&(e=e.replace(/^q/i,""),e=parseInt(e,10)),Ut[e])){let r=this.clone(),a=Ut[e][0];return r=r.month(a,n),r=r.date(1,n),r=r.startOf("day"),r}let t=this.d.getMonth();for(let r=1;r<Ut.length;r++)if(t<Ut[r][0])return r-1;return 4},season:function(e,n){let t="north";if(this.hemisphere()==="South"&&(t="south"),e!==void 0){let a=this.clone();for(let o=0;o<Cn[t].length;o++)e===Cn[t][o][0]&&(a=a.month(Cn[t][o][1],n),a=a.date(1),a=a.startOf("day"));return a}let r=this.d.getMonth();for(let a=0;a<Cn[t].length-1;a++)if(r>=Cn[t][a][1]&&r<Cn[t][a+1][1])return Cn[t][a][0];return t==="north"?"winter":"summer"},year:function(e){if(e!==void 0){let n=this.clone();return n.epoch=cs(n,e),n}return this.d.getFullYear()},era:function(e){if(e!==void 0){let n=this.clone();e=e.toLowerCase();let t=n.d.getFullYear();return e==="bc"&&t>0&&(n.epoch=cs(n,t*-1)),e==="ad"&&t<0&&(n.epoch=cs(n,t*-1)),n}return this.d.getFullYear()<0?"BC":"AD"},decade:function(e){if(e!==void 0){if(e=String(e),e=e.replace(/([0-9])'?s$/,"$1"),e=e.replace(/([0-9])(th|rd|st|nd)/,"$1"),!e)return console.warn("Spacetime: Invalid decade input"),this;e.length===2&&/[0-9][0-9]/.test(e)&&(e="19"+e);let n=Number(e);return isNaN(n)?this:(n=Math.floor(n/10)*10,this.year(n))}return this.startOf("decade").year()},century:function(e){if(e!==void 0){typeof e=="string"&&(e=e.replace(/([0-9])(th|rd|st|nd)/,"$1"),e=e.replace(/([0-9]+) ?(b\.?c\.?|a\.?d\.?)/i,(r,a,o)=>(o.match(/b\.?c\.?/i)&&(a="-"+a),a)),e=e.replace(/c$/,""));let t=Number(e);return isNaN(e)?(console.warn("Spacetime: Invalid century input"),this):(t===0&&(t=1),t>=0?t=(t-1)*100:t=(t+1)*100,this.year(t))}let n=this.startOf("century").year();return n=Math.floor(n/100),n<0?n-1:n+1},millenium:function(e){if(e!==void 0){if(typeof e=="string"&&(e=e.replace(/([0-9])(th|rd|st|nd)/,"$1"),e=Number(e),isNaN(e)))return console.warn("Spacetime: Invalid millenium input"),this;e>0&&(e-=1);let t=e*1e3;return t===0&&(t=1),this.year(t)}let n=Math.floor(this.year()/1e3);return n>=0&&(n+=1),n}},Te=Object.assign({},lx,sx,ux);Te.milliseconds=Te.millisecond;Te.seconds=Te.second;Te.minutes=Te.minute;Te.hours=Te.hour;Te.hour24=Te.hour;Te.h12=Te.hour12;Te.h24=Te.hour24;Te.days=Te.day;const cx=e=>{Object.keys(Te).forEach(n=>{e.prototype[n]=Te[n]})},Au=function(e,n){return e===1&&to(n)?29:Jt[e]},dx=(e,n)=>{if(e.month>0){let t=parseInt(e.month/12,10);e.year=n.year()+t,e.month=e.month%12}else if(e.month<0){let t=Math.abs(e.month),r=parseInt(t/12,10);t%12!==0&&(r+=1),e.year=n.year()-r,e.month=e.month%12,e.month=e.month+12,e.month===12&&(e.month=0)}return e},fx=(e,n,t)=>{e.year=n.year(),e.month=n.month();let r=n.date();for(e.date=r-Math.abs(t);e.date<1;){e.month-=1,e.month<0&&(e.month=11,e.year-=1);let a=Au(e.month,e.year);e.date+=a}return e},px=(e,n,t)=>{let r=n.year(),a=n.month(),o=Au(a,r);for(;t>o;)t-=o,a+=1,a>=12&&(a-=12,r+=1),o=Au(a,r);return e.month=a,e.date=t,e},mx=dx,hx=px,gx=fx,kn=["millisecond","second","minute","hour","date","month"];let zt={second:kn.slice(0,1),minute:kn.slice(0,2),quarterhour:kn.slice(0,2),hour:kn.slice(0,3),date:kn.slice(0,4),month:kn.slice(0,4),quarter:kn.slice(0,4),season:kn.slice(0,4),year:kn,decade:kn,century:kn};zt.week=zt.hour;zt.season=zt.date;zt.quarter=zt.date;const vx={year:!0,quarter:!0,season:!0,month:!0,week:!0,date:!0},yx={month:!0,quarter:!0,season:!0,year:!0},bx=e=>{e.prototype.add=function(n,t){let r=this.clone();if(!t||n===0)return r;let a=this.clone();if(t=tr(t),t==="millisecond")return r.epoch+=n,r;t==="fortnight"&&(n*=2,t="week"),Q[t]?r.epoch+=Q[t]*n:t==="week"||t==="weekend"?r.epoch+=Q.day*(n*7):t==="quarter"||t==="season"?r.epoch+=Q.month*(n*3):t==="quarterhour"&&(r.epoch+=Q.minute*15*n);let o={};if(zt[t]&&zt[t].forEach(i=>{o[i]=a[i]()}),vx[t]){const i=a.timezone().current.offset-r.timezone().current.offset;r.epoch+=i*3600*1e3}if(t==="month"&&(o.month=a.month()+n,o=mx(o,a)),t==="week"){let i=a.date()+n*7;i<=28&&i>1&&(o.date=i)}if(t==="weekend"&&r.dayName()!=="saturday")r=r.day("saturday",!0);else if(t==="date"){if(n<0)o=gx(o,a,n);else{let i=a.date()+n;o=hx(o,a,i)}n!==0&&a.isSame(r,"day")&&(o.date=a.date()+n)}else if(t==="quarter"){if(o.month=a.month()+n*3,o.year=a.year(),o.month<0){let i=Math.floor(o.month/12),s=o.month+Math.abs(i)*12;o.month=s,o.year+=i}else if(o.month>=12){let i=Math.floor(o.month/12);o.month=o.month%12,o.year+=i}o.date=a.date()}else if(t==="year"){let i=a.year()+n,s=r.year();if(s<i){let l=Math.floor(n/4)||1;r.epoch+=Math.abs(Q.day*l)}else if(s>i){let l=Math.floor(n/4)||1;r.epoch+=Q.day*l}}else t==="decade"?o.year=r.year()+10:t==="century"&&(o.year=r.year()+100);if(yx[t]){let i=Jt[o.month];o.date=a.date(),o.date>i&&(o.date=i)}return Object.keys(o).length>1&&K(r,o),r},e.prototype.subtract=function(n,t){return this.clone().add(n*-1,t)},e.prototype.minus=e.prototype.subtract,e.prototype.plus=e.prototype.add},wa={millisecond:e=>e.epoch,second:e=>[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second()].join("-"),minute:e=>[e.year(),e.month(),e.date(),e.hour(),e.minute()].join("-"),hour:e=>[e.year(),e.month(),e.date(),e.hour()].join("-"),day:e=>[e.year(),e.month(),e.date()].join("-"),week:e=>[e.year(),e.week()].join("-"),month:e=>[e.year(),e.month()].join("-"),quarter:e=>[e.year(),e.quarter()].join("-"),year:e=>e.year()};wa.date=wa.day;const kx=e=>{e.prototype.isSame=function(n,t,r=!0){let a=this;if(!t)return null;if(typeof n=="string"&&typeof t=="object"){let o=n;n=t,t=o}return(typeof n=="string"||typeof n=="number")&&(n=new e(n,this.timezone.name)),t=t.replace(/s$/,""),r===!0&&a.tz!==n.tz&&(n=n.clone(),n.tz=a.tz),wa[t]?wa[t](a)===wa[t](n):null}},wx=e=>{const n={isAfter:function(t){t=Lt(t,this);let r=ta(t);return r===null?null:this.epoch>r},isBefore:function(t){t=Lt(t,this);let r=ta(t);return r===null?null:this.epoch<r},isEqual:function(t){t=Lt(t,this);let r=ta(t);return r===null?null:this.epoch===r},isBetween:function(t,r,a=!1){t=Lt(t,this),r=Lt(r,this);let o=ta(t);if(o===null)return null;let i=ta(r);return i===null?null:a?this.isBetween(t,r)||this.isEqual(t)||this.isEqual(r):o<this.epoch&&this.epoch<i}};Object.keys(n).forEach(t=>{e.prototype[t]=n[t]})},xx=e=>{const n={i18n:function(t){return mt(t.days)&&v5(t.days),mt(t.months)&&s5(t.months),Jw(t.useTitleCase)&&b5(t.useTitleCase),mt(t.ampm)&&ix(t.ampm),mt(t.distance)&&$5(t.distance),mt(t.units)&&I5(t.units),this}};Object.keys(n).forEach(t=>{e.prototype[t]=n[t]})};let ds=Rr;const pe=function(e,n,t={}){this.epoch=null,this.tz=ji(n,ds),this.silent=typeof t.silent<"u"?t.silent:!0,this.british=t.dmy||t.british,this._weekStart=1,t.weekStart!==void 0&&(this._weekStart=t.weekStart),this._today={},t.today!==void 0&&(this._today=t.today),Object.defineProperty(this,"d",{get:function(){let a=Vw(this),i=(new Date(this.epoch).getTimezoneOffset()||0)+a*60;i=i*60*1e3;let s=this.epoch+i;return new Date(s)}}),Object.defineProperty(this,"timezones",{get:()=>ds,set:a=>(ds=a,a)});let r=_h(this,e);this.epoch=r.epoch,r.tz&&(this.tz=r.tz)};Object.keys(Et).forEach(e=>{pe.prototype[e]=Et[e]});pe.prototype.clone=function(){return new pe(this.epoch,this.tz,{silent:this.silent,weekStart:this._weekStart,today:this._today,parsers:this.parsers})};pe.prototype.toLocalDate=function(){return this.toNativeDate()};pe.prototype.toNativeDate=function(){return new Date(this.epoch)};cx(pe);bx(pe);kx(pe);wx(pe);xx(pe);const Sx=(e,n)=>{let t=new pe(null),r=new pe(null);t=t.time(e),n?r=r.time(n):r=t.add(59,"minutes");let a=t.hour(),o=r.hour();return Object.keys(t.timezones).filter(s=>{if(s.indexOf("/")===-1)return!1;let l=new pe(null,s),u=l.hour();return u>=a&&u<=o?!(u===a&&l.minute()<t.minute()||u===o&&l.minute()>r.minute()):!1})},Cx="7.7.0",Oe=(e,n,t)=>new pe(e,n,t),bl=function(e){let n=e._today||{};return Object.keys(n).forEach(t=>{e=e[t](n[t])}),e};Oe.now=(e,n)=>{let t=new pe(new Date().getTime(),e,n);return t=bl(t),t};Oe.today=(e,n)=>{let t=new pe(new Date().getTime(),e,n);return t=bl(t),t.startOf("day")};Oe.tomorrow=(e,n)=>{let t=new pe(new Date().getTime(),e,n);return t=bl(t),t.add(1,"day").startOf("day")};Oe.yesterday=(e,n)=>{let t=new pe(new Date().getTime(),e,n);return t=bl(t),t.subtract(1,"day").startOf("day")};Oe.extend=function(e={}){return Object.keys(e).forEach(n=>{pe.prototype[n]=e[n]}),this};Oe.timezones=function(){return new pe().timezones};Oe.max=function(e,n){let t=new pe(null,e,n);return t.epoch=864e13,t};Oe.min=function(e,n){let t=new pe(null,e,n);return t.epoch=-864e13,t};Oe.whereIts=Sx;Oe.version=Cx;Oe.plugin=Oe.extend;const Ht=36,_u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",op=_u.split("").reduce(function(e,n,t){return e[n]=t,e},{}),Ox=function(e){if(_u[e]!==void 0)return _u[e];let n=1,t=Ht,r="";for(;e>=t;e-=t,n++,t*=Ht);for(;n--;){const a=e%Ht;r=String.fromCharCode((a<10?48:55)+a)+r,e=(e-a)/Ht}return r},Px=function(e){if(op[e]!==void 0)return op[e];let n=0,t=1,r=Ht,a=1;for(;t<e.length;n+=r,t++,r*=Ht);for(let o=e.length-1;o>=0;o--,a*=Ht){let i=e.charCodeAt(o)-48;i>10&&(i-=7),n+=i*a}return n};var Iu={toAlphaCode:Ox,fromAlphaCode:Px};const Tx=function(e){const n=new RegExp("([0-9A-Z]+):([0-9A-Z]+)");for(let t=0;t<e.nodes.length;t++){const r=n.exec(e.nodes[t]);if(!r){e.symCount=t;break}e.syms[Iu.fromAlphaCode(r[1])]=Iu.fromAlphaCode(r[2])}e.nodes=e.nodes.slice(e.symCount,e.nodes.length)};var Ex=Tx;const zx=function(e,n,t){const r=Iu.fromAlphaCode(n);return r<e.symCount?e.syms[r]:t+r+1-e.symCount},Mx=function(e){const n=[],t=(r,a)=>{let o=e.nodes[r];o[0]==="!"&&(n.push(a),o=o.slice(1));const i=o.split(/([A-Z0-9,]+)/g);for(let s=0;s<i.length;s+=2){const l=i[s],u=i[s+1];if(!l)continue;const c=a+l;if(u===","||u===void 0){n.push(c);continue}const d=zx(e,u,r);t(d,c)}};return t(0,""),n},Ax=function(e){const n={nodes:e.split(";"),syms:[],symCount:0};return e.match(":")&&Ex(n),Mx(n)};var _x=Ax;const Ix=function(e){if(!e)return{};const n=e.split("|").reduce((r,a)=>{const o=a.split("¦");return r[o[0]]=o[1],r},{}),t={};return Object.keys(n).forEach(function(r){const a=_x(n[r]);r==="true"&&(r=!0);for(let o=0;o<a.length;o++){const i=a[o];t.hasOwnProperty(i)===!0?Array.isArray(t[i])===!1?t[i]=[t[i],r]:t[i].push(r):t[i]=r}}),t};var Dx=Ix;let jx={usa:"2nd-sun-mar-2h|1st-sun-nov-2h",mex:"1st-sun-apr-2h|last-sun-oct-2h",eu0:"last-sun-mar-0h|last-sun-oct-1h",eu1:"last-sun-mar-1h|last-sun-oct-2h",eu2:"last-sun-mar-2h|last-sun-oct-3h",eu3:"last-sun-mar-3h|last-sun-oct-4h",green:"last-sat-mar-22h|last-sat-oct-23h",aus:"1st-sun-apr-3h|1st-sun-oct-2h",lhow:"1st-sun-apr-2h|1st-sun-oct-2h",chat:"1st-sun-apr-3h|last-sun-sep-2h",nz:"1st-sun-apr-3h|last-sun-sep-2h",ant:"2nd-sun-mar-0h|1st-sun-oct-0h",troll:"3rd-sun-mar-1h|last-sun-oct-3h",jord:"last-fri-feb-0h|last-fri-oct-1h",leb:"last-sun-mar-0h|last-sun-oct-0h",syr:"last-fri-mar-0h|last-fri-oct-0h",isr:"last-fri-mar-2h|last-sun-oct-2h",pal:"last-sun-mar-0h|last-fri-oct-1h",saha:"last-sun-mar-3h|1st-sun-may-2h",par:"last-sun-mar-0h|1st-sun-oct-0h",cuba:"2nd-sun-mar-0h|1st-sun-nov-1h",chile:"1st-sun-apr-0h|1st-sun-sep-0h",east:"1st-sat-apr-22h|1st-sat-sep-22h",fiji:"3rd-sun-jan-3h|2nd-sun-nov-2h"};var Nx=jx,fs={Africa:{Abidjan:["true¦a5bouake,coordinated universal4daloa,g1san ped0utc,yamoussouk0zulu;ro;h0mt,reenwich mean2;!a0;!na; ti3;b4frica0tlantic/st_helena;!/0;accra,ba1conakry,dakar,freetown,lo0nouakchott,ouagadougou,timbuktu;me;mako,njul;idjan,obo","Greenwich Mean","n"],Algiers:["true¦a8b6c3dz2or5s1t0;ebessa,iaret;etif,idi bel abbes;!a;e0hlef,onstantine;ntral europe0t;an;a0iskra,lida,oumerdas;b ezzouar,tna;frica,lg0nnaba;eria,iers","Central European","n"],Bissau:["true¦africa,b2coordinated universal1g0utc,zulu;mt,nb,reenwich mean0uinea b1w; time;issau","Greenwich Mean","n"],Cairo:["true¦a6bani suwayf,c5damanhur,e2giza,halw8i1kafr ad dawwar,luxor,new c5port said,qina,s0tanta,zagazig;hibin al kawm,ohag,uez;dku,smail8;astern europe5et,g0;!y0;!pt;airo;frica,l2s0;w0yut;an; 1exandr0;ia;fayyum,m0;a0inya;hallah al kubra,nsurah","Eastern European","n"],Casablanca:["true¦aCcasablanDfBkenitAm6oujda angad,rabat,sa4t1we0;stern europe2t;angier,e0;ma7tou0;an;fi,le0;! al jadida;a1ekn4o0;hammedia,rocco;!r0;!rakesh;ra;es;fri0gadir,l hoceima;ca","Morocco Standard","n","saha"],Ceuta:["true¦africa,brussels,c0europe central,madrid,paris,romance;e0openhagen;ntral european,t,uta0;!melilla","Central European","n","eu2"],El_Aaiun:["true¦afri3casablan3e2laayoune,morocco,we0;stern 0t;european,sahara;h,l_aaiun,sh;ca","Morocco Standard","n","saha"],Johannesburg:["true¦africaIbEcAd9east londBharare,johannesHk7newcastDp6r5s3tembisa,uitenhage,v2w1za0;!f;elkom,itbank;anderbijlpark,ereeniging;ast,o0prings;uth africa,weto;andBichards bay,oodepoort;aarl,ietermaritzAort elizabeth,retoria;lerk0ruger0;sdorp;iepsloot,urb5;a1enturi0;on;pe town,rletonvil0;le;enoni,loemfontein,o1rakp0;an;ks0tshabelo;burg;! southern,/m0;aseru,babane","South Africa","s"],Juba:["true¦a3c2juba,s0winejok;outh sudan,s0;!d;at,entral a0;frica","Central Africa","n"],Khartoum:["true¦a7c6el 5k3ny4omdurm2port sud2s0wad medani;d0inga,ud1;!n;an;ass0hartoum,osti;ala;dae3fasher,obeid;at,entral af1;d damaz1f0l qadarif;rica;in","Central Africa","n"],Lagos:["true¦aVbTcReQgPiLjKkaIlGmDnnewi,oAport harcourt,s9u7w0zar8; c3a2est0; 0ern3;a3c1;rBst,t;entral0; a0;frica;gep,muah0yo;ia;a7hagamu,okoto;kDn1w0yo;er3o;do,itsha;a0in5ubi;idugu0kurdi;ri;agos,ek0;ki;du0no,tsi0;na;imeLos;badan,jebu ode,k1l0seHwo;a orangun,eDor7;eHi8ot ekp0;ene;ombe,usau;bute ikorodu,fon alaaye,nugu;alabar,d,hakwama,o0;d,ngo;auchi,en0;in;b8do7frica1ku0tani;re;! western,/0;b2douala,kinsha1l0malabo,niamey,porto-novo;ibre2uanda;sa;angui,razza0;ville; ekiti;a,eoku1u0;ja;ta","West Africa","n"],Maputo:["true¦africa7beiCc6ma4na2quelimaAwindhoek,z0;imbabwe,w0;!e;ca2m0;ibia,pu1;puto,to0;la;at,entral africa,himoio;! central,/0;b2gaboro1hara4kigali,lu0;bumbashi,saka;ne;lanty1ujumbu0;ra;re","Central Africa","s"],Monrovia:["true¦africa,coordinated universal3g2l0monrov1utc,zulu;br,iber0r;ia;mt,reenwich mean0; time","Greenwich Mean","n"],Nairobi:["true¦africa8e4indian/2kisumu,m1na0thika,yt;irobi,kuru;a1ombasa,yt;antananarivo,comoro,ma0;yotte; 2a0ldoret;st0t; 0ern 0;africa;! eastern,/0;a1d0kampala,mogadishu;ar_es_salaam,jibouti;ddis_ababa,sm0;a0e0;ra","East Africa","n"],Ndjamena:["true¦africaAchad,n8t7w0; c3a2est0; 0ern3;a3c1;st,t;entral0; a0;frica;cd,d;'d0d0;jamena;! western","West Africa","n"],Sao_Tome:["true¦africa,coordinated universal5g4s0utc,zulu;ao1t0;!p; 0_0;to2;mt,reenwich mean0; ti0;me","Greenwich Mean","n"],Tripoli:["true¦a4benghazi,e3l1misrat5t0zawi2;arhuna,ripoli;by,ib0y;ya;astern european,et;frica,l khums,z zawiy0;ah","Eastern European","n"],Tunis:["true¦africa,ce3sfax,t0;n,un0;!is0;!ia;ntral european,t","Central European","n"],Windhoek:["true¦africa3c2na0windhoek;!m0;!ibia;at,entral africa;! central","Central Africa","s"]},America:{Adak:["true¦a1h0nwt,us/aleutian;awaii s3dt,st;dak,leutian0merica/atka;! 0;islands,s0;tandard time","Aleutian Standard","n","usa"],Anchorage:["true¦a0us/alaska;h6k5laska0merica,nchorage;! 1n0;! s1;s0t1;tandard t0;ime;dt,st,t;dt,st","Alaska","n","usa"],Araguaina:["true¦araguaina,br1e0palmas,tocantins; south america s4ast south america;a0t;silia0zil;! 0;s0t1;tandard t0;ime","Brasilia","n"],"Argentina/Buenos_Aires":["true¦a0buenos 4;merica/2r0;!g0;!e2;arge1buenos_0;aires;ntina","Argentina","s"],"Argentina/Catamarca":["true¦a0c2;merica/0rgentina;argentina/comodrivadavia,c0;atamarca","Argentina","s"],"Argentina/Cordoba":["true¦a0c2;merica/0rgentina;c0rosario;ordoba","Argentina","s"],"Argentina/Jujuy":["true¦a0j1;merica/j0rgentina;ujuy","Argentina","s"],"Argentina/La_Rioja":["true¦ar1b0city of b0la rioja;uenos aires;gentina0st,t;! 0;standard t0t0;ime","Argentina","s"],"Argentina/Mendoza":["true¦a0m1;merica/m0rgentina;endoza","Argentina","s"],"Argentina/Rio_Gallegos":["true¦ar1b0city of b0rio_gallegos;uenos aires;gentina0st,t;! 0;standard t0t0;ime","Argentina","s"],"Argentina/Salta":["true¦ar1b0city of b0salta;uenos aires;gentina0st,t;! 0;standard t0t0;ime","Argentina","s"],"Argentina/San_Juan":["true¦ar1b0city of b0san juan;uenos aires;gentina0st,t;! time","Argentina","s"],"Argentina/San_Luis":["true¦ar1b0city of b0san luis;uenos aires;gentina0st,t;! time","Argentina","s"],"Argentina/Tucuman":["true¦ar1b0city of b0tucuman;uenos aires;gentina0st,t;! time","Argentina","s"],"Argentina/Ushuaia":["true¦ar1b0city of b0ushuaia;uenos aires;gentina0st,t;! time","Argentina","s"],Asuncion:["true¦asuncion,c3p0san lorenzo;araguay1ry,y0;!st,t;! time;apiata,iudad del este","Paraguay","s","par"],Bahia:["true¦b2camacari,e1feira de santa0itabu0salvador,vitoria da conquista;na; south america s5ast south america;ahia,r0;a0t;silia0zil;! 0;s0t1;tandard t0;ime","Brasilia","n"],Bahia_Banderas:["true¦bah7c2guadalajara,m0;exico0onterrey;! city;entral 0st;mexic0standard 2;an,o0;! 0;time;ia_0ía de 0;banderas","Central Mexico","n","mex"],Barbados:["true¦a1b0;arbados,b,rb;st,tlantic standard time","Atlantic","n"],Belem:["true¦ananindeua,b2e1macapa,par0;auapebas,á east amapá; south america s5ast south america;elem,r0;a0t;silia0zil;! 0;s0t1;tandard t0;ime","Brasilia","n"],Belize:["true¦b1c0;entral standard time,st;elize,lz,z","Central","n"],Boa_Vista:["true¦am3boa vista,c0roraima;entral brazil0uiaba;!ian0;! s3;azon0t;! 0;s0t1;tandard t0;ime","Amazon","n"],Bogota:["true¦armenGbBc7dosquebradas,floridablanca,i6m5neiva,p3s1v0;alledupar,illavicencio;anta marCincelejo,o0;acha,ledad;a0erei9opayan;lmi8sto;anizales,edellin,onterA;bague,taguei;a2o0ucu6;!l0st,t;!omb6;li,rtagena;arran3ello,ogo2u0;caramanga,enaventu0;ra;ta;cabermeja,quilla;ia","Colombia","n"],Boise:["true¦america4boise,idaho,m0;ountain0pt,st,t;! 0;id,standard t0t0;ime;! mountain","Mountain","n","usa"],Cambridge_Bay:["true¦america4cambridge bay,m0;ddt,ountain0st,t;! 0;standard t0t0;ime;! mountain","Mountain","n","usa"],Campo_Grande:["true¦am0brazil,campo grande,mato grosso do sul;azon standard time,t","Amazon","s"],Cancun:["true¦cancun,e0mexico,quintana roo;astern standard time,st","Eastern","n"],Caracas:["true¦alto barinKbarJcDguaBm8p7san6turmeFv0;alencia,e0;!n0t;!ezuela0;! 0n;standard t0t0;ime; cristobal,ta teresa del tuy;eta4uerto la cruz;a0ucumpiz;raca0turin;ibo,y;ren8ti0;re;a4iudad 2o1u0;a,m2;ro;bolivar,guay0;ana;bim1rac1;in0quisimeto,uta;as","Venezuela","n"],Cayenne:["true¦cayenne,french guiana3g0;f1u0;f,iana;!t;! time","French Guiana","n"],Chicago:["true¦aWbTcRdQfort worth,gPhOiMk00lJmCn8o7plano,s4t2us1wi0;chiGsconsW;/02a;ex0ulsa;!as;a0hreveport,ou4t 1;int 0n antonio;louGpaul;klahoXmaha,verland park;ashLe1or0;th dako7;braska,w 0;orleans,south me6;adisMe5i1o0;biHntgomery;lwaukee,nne1ss0;issippi,ouri;apol6so0;ta;mph4;aredo,i0ouisiana,ubb1;ncoln,ttle r0;ock;llino0owa,rving;is;oustAunts5;arland,rand prairie;allAes moines;dt,entral0hicago,orpus christi,st,t;! time;aton rouge,rowns0;vil0;le;laba8m5r1ust0;in;k1lingt0;on;ans0;as;arillo,erica0;! 0;central;ma","Central","n","usa"],Chihuahua:["true¦chihuahua,h5la paz,m0;azatlan,exic1ountain 0;mexico,standard time (mexico);an pacific1o0;! pacific;! time;ep0np0p0;mx","Mexican Pacific","n","mex"],Costa_Rica:["true¦c0sjmt;entral standard time,osta rica,r0st;!i","Central","n"],Cuiaba:["true¦am0brazil,cuiaba,mato grosso,varzea grande;azon standard time,t","Amazon","s"],Danmarkshavn:["true¦coordinated universal2d1g0utc,zulu;mt,reenwich mean1;anmarkshavn,enmark; time","Greenwich Mean","n"],Dawson:["true¦canada,dawson,m2y0;d0pt,wt;dt,t;ountain standard time,st","Mountain","n"],Dawson_Creek:["true¦canada,dawson creek,m1p0;pt,wt;ountain standard time,st,t","Mountain","n"],Denver:["true¦a5colorado springs,denver,el paso,m1navajo,salt lake,us0;/6a;dt,ountain0st,t;! 0;standard t0t0;ime;lbuquerque,merica0urora;! 0/shiprock;mountain","Mountain","n","usa"],Detroit:["true¦america4detroit,e0grand rapids,us/michigan;astern0pt,st,t,wt;! 0;mi,standard t0t0;ime;! eastern","Eastern","n","usa"],Edmonton:["true¦a6ca4edmonton,m0;ountain0st,t;! 0;standard t0t0;ime;lgary,nada0;!/1;lberta,merica 0;mountain","Mountain","n","usa"],Eirunepe:["true¦a0brazil,eirunepe;c0mazonas west;re0t;! 0;standard t0t0;ime","Acre","n"],El_Salvador:["true¦c2el1s0;an0lv,oyapango,v; salvador;entral standard time,st","Central","n"],Fort_Nelson:["true¦british columbia,canada,fort nelson,m0;ountain standard time,st,t","Mountain","n"],Fortaleza:["true¦br5ca4e3fortaleza,imperatriz,j2m0natal,sao luis,teresina;a0ossoro;picernpb,racanau;oao pessoa,uazeiro do norte; south america s5ast south america;mpina grande,ucaia;a0t;silia0zil;! 0;s0t1;tandard t0;ime","Brasilia","s"],Glace_Bay:["true¦a1ca0glace_bay;nada,pe breton;st,t0;!lantic0;! 0;standard t0t0;ime","Atlantic","n","usa"],Goose_Bay:["true¦a0canada,goose_bay,labrador,npt;st,t0;!lantic0;! 0;standard t0t0;ime","Atlantic","n","usa"],Grand_Turk:["true¦america eastern,e2grand turk,kmt,t0;c0urks and caicos;!a;astern0st,t;! 0;standard t0t0;ime","Eastern","n","usa"],Guatemala:["true¦c2g0mixco,villa nueva;t0uatemala;!m;entral standard time,st","Central","n"],Guayaquil:["true¦cuenca,ec2guayaquil,ma1q0santo domingo de los colorados;mt,uito;chala,nta;!t,u0;!ador0;! 0;mainland,time","Ecuador","n"],Guyana:["true¦g0;eorgetown,uy1y0;!t;!ana0;! time","Guyana","n"],Halifax:["true¦a4ca2halifax,n1p0;ei,rince edward island;ew brunswick,ova scotia;!nada0;!/atlantic;dt,st,t0;!lantic0;! 0;ns,standard t0t0;ime","Atlantic","n","usa"],Havana:["true¦arroyo naranjo,bBc3diez de octubre,guantanDh1las tunas,pinar del rio,sant0;a clara,iago de cuba;avana,cu,e0n0olguin;cu;amaguey,i5u0;!b0;!a0;! 0;standard t0t0;ime;e0udad camilo cie0;nfueg1;ay1oyer0;os;amo","Cuba","n","cuba"],Hermosillo:["true¦ciudad obregon,h1mexic0nogales,sonora;an pacific standard time,o;ermosillo,npmx","Mexican Pacific","n"],"Indiana/Indianapolis":["true¦america2crawford,dadukmn,eastern in,i4p0star1us/east-indiana;erry,i0ulaski;ke;!/0;fort_wayne,i0;ndiana0;!polis","Eastern","n","usa"],"Indiana/Knox":["true¦america1c0indiana,knox,us/indiana-starke;entral standard time,st;!/knox_in","Central","n","usa"],"Indiana/Marengo":["true¦america,e0indiana,marengo;astern standard time,st","Eastern","n","usa"],"Indiana/Petersburg":["true¦america,e0indiana,petersburg;astern standard time,st","Eastern","n","usa"],"Indiana/Tell_City":["true¦america,c0indiana,tell_city;entral standard time,st","Central","n","usa"],"Indiana/Vevay":["true¦america,e0indiana,vevay;astern standard time,st","Eastern","n","usa"],"Indiana/Vincennes":["true¦america,e0indiana,vincennes;astern standard time,st","Eastern","n","usa"],"Indiana/Winamac":["true¦america,e0indiana,winamac;astern standard time,st","Eastern","n","usa"],Inuvik:["true¦america mountain,canada,inuvik,m0pddt;ountain0st,t;! 0;standard t0t0;ime","Mountain","n","usa"],Iqaluit:["true¦america eastern,canada,e0iqaluit;astern0ddt,st,t;! 0;standard t0t0;ime","Eastern","n","usa"],Jamaica:["true¦e3j1k0new k0;ingston;am0m;!aica;astern standard time,st","Eastern","n"],Juneau:["true¦a0juneau;k5laska0merica;! 1n0;! s1;juneau area,s0t1;tandard t0;ime;st,t","Alaska","n","usa"],"Kentucky/Louisville":["true¦america0eastern 4k3l2wayne;!/0;k1l0;ouisville;entuc0;ky","Eastern","n","usa"],"Kentucky/Monticello":["true¦america,e0kentucky,monticello;astern standard time,st","Eastern","n","usa"],La_Paz:["true¦bo1cochabamba,la paz,oruro,s0;anta cruz de la sierra,ucre;!l0t;!ivia0;! time","Bolivia","s"],Lima:["true¦arequiDc9huancCi8juliaca,lima,p2sant1t0;acna,rujillo;a anita   los ficus,iago de sur8;e0iura,ucallA;!r0t;!u0;! 0;standard t0t0;ime;ca,quitos;allao,hi1us0;co;cl0mbote;ayo;pa","Peru","s"],Los_Angeles:["true¦a05ba03c00fWgarden grove,hTirviSlMmoJnIoFp9r8s1tacoma,us0washington state;/06a;a1eattle,f,p0tocktTunrise manor;okaPringH;cramenHn0; 1ta 0;aTclariV;bernardiRdiego,fran0jo4;!cisco;ancho cucamonga,ePiver7;a0dt,ort7st,t;cific1radi0;se;! 0;standard t0t0;ime;ak1cean0regFxnard;side;land;evada,orth las8;des1reno0; valley;to;a3o0;ng6s0; 0_0;angeles;!s0; vegas;ne;enders1untington0; beach;on;onta2re0;mont,s0;no;na;ali1hula vis0;ta;!f1;ja calif0kersfield;ornia;merica0naheim;! 0;pacific","Pacific","n","usa"],Maceio:["true¦a6br1e0maceio; south america s3ast south america;asilia0t;! 0;s0t1;tandard t0;ime;lagoassergipe,racaju","Brasilia","n"],Managua:["true¦c3man2ni0;!c0;!ar0;agua;entral standard time,st","Central","n"],Manaus:["true¦am4brazil3c0manaus;entral brazil0uiaba;!ian0;! s5;!/we2;azon0t;! 1as ea0;st;s0t1;tandard t0;ime","Amazon","s"],Martinique:["true¦a3f1m0;a1q,tq;fmt,ort de france,rench ma0;rtinique;st,tlantic standard time","Atlantic","n"],Matamoros:["true¦america central,c2heroica ma1m0nuevo laredo,reynosa;a0exico;tamoros;entral0st,t;! 0;standard t0t0;ime","Central","n","usa"],Mazatlan:["true¦cAh8l7m0tep4;azatlAexic1ountain 0;mexico,standard time (mexico);an pacific 2o0;! pacif0/bajasur;ic;standard t0t0;ime;a paz,os mochis;np0p0;mx;hihuahua,uliac0;an","Mexican Pacific","n","mex"],Menominee:["true¦america4c0menominee,wisconsin;entral0st,t;! 0;standard t0t0;ime;! central","Central","n","usa"],Merida:["true¦c3guadalajara,m0;e0onterrey;rida,xico0;! city;ampeche4entral 0st;mexic0standard 2;an,o0;! 0;time;!yucatán","Central Mexico","n","mex"],Metlakatla:["true¦a0metlakatla;k5laska0merica;! 1n0;! s1;annette island,s0t1;tandard t0;ime;st,t","Alaska","n","usa"],Mexico_City:["true¦a0Lb0JcYduran0Cecatepec de morel0AguThSiQjalis0Nleon de los alda06mInHoGpEqDs9t4uruap04v2x1yucat04za0;catec0Cpop03;alapa de enriqu0Pi0Lochimil0L;e0illahermosa;nustiano carranza,racruz;a3e7la1o0uxt03;luUna02;huac,l0quepaque,xca01;nepant00pW;bas0Emaulip04pachuZ;an0oledad de graciano sanch0H; luis potosi,t0;a maria chimal0iago de q1;huQ;ueretaG;achuca de soIoza rica de7ue0;bSrto vallar04;axaJjo de agua;aucalpan07icolas romeCuevo le06;agdalena contrerUex4i2o0x;nterrey,rel0;ia,os;choHguel0; h5;!ico0;! 0/general,_0;city;rap5xtapalu9zta0;cUpalapa;idalJ;a1erre0stavo adolfo made0;ro;dalajara,naj0;ua0;to;ampeche,eFhiCiudad Ao3st,u0wt;au1ernava0;ca;htemoc,titlan izcalli;a4l2yo0;ac0;an;i0onia del valle;ma;cEhui0tzacoalc2;la;lopez mate0nezahualcoyotl;os;ap1lpancin0;go;as;laya,ntral 0;mexic0standard 2;an,o0;! 0;time;enito6uenavis0;ta;capulco3guascalientes,lvaro obreg2zcapotz0;al0;co;on; de0; juar0;ez","Central Mexico","n","mex"],Miquelon:["true¦hBmAp8s0;aint pierre2pm,t pierre 0;& miquelon 0a5;s2t3;! 0;a2s0;tandard t0;ime;nd1;ierre0m; m0;iquelon;npm,pm","St. Pierre & Miquelon","n","usa"],Moncton:["true¦a0canada,hepm,moncton,new brunswick;st,t0;!lantic0;! 0;standard t0t0;ime","Atlantic","n","usa"],Monterrey:["true¦c8g6m3sa1t0victoria de durango;ampico,orreon;ltillo,n0; nicolas de los garza,ta catarina;exico1on0;clova,terrey;! city;omez palacio,uadal0;ajara,upe;entral 1iudad 0st;apodaca,general escobedo,madero,victoria;mexic0standard 2;an,o0;! 0;time","Central Mexico","n","mex"],Montevideo:["true¦montevideo5u0;r1y0;!st,t;uguay0y;! 0;s1t2;! s0;tandard t0;ime","Uruguay","s"],New_York:["true¦a0Rb0Oc0Hd0Ge0Bf07g05hialeah,i02j00kZlexingtonYmUnMoKpIquHrDsAt7u5v3w0yonkers;ashington1est 0inston salem,orcD;raEvirgin04;! dc;ermont,irginia0;! beach;nited states,s0;!/0Ma;a0enne1he bronx,oleD;llaha0mpa;ssee;outh 1t0; petersburg,aten3;bo0CcC;a2hode1ichmo06och0;ester; is03;lei2;eens,intana roo;ennsylvanNhiladelphNittsbur0rovidence;gh;hio,rlan0;do;ew3or1y0;!c;folk,th c0;aroliE; 1_yo0a0port news;rk;hampshiXje8york0;! staT;a1eads,i0;ami,chig1;ine,nhatt0ryMssachusetts;an;! fayetO;entucky,nox9;acks2e0;rsey;ndia1r0;on5;na;eorg0reensboro;ia;ayette1l0ort lauderda2;!orida;vil0;le;ast0dt,st,t; flatbush,ern0;! 0;standard t0t0;ime;elawa9urham;ape coral,h3incinnati,leve1o0;lumbus,nnecticut;la0;nd;a0esapeake;rlot0ttanooga;te;altimo1o0rooklyn,uffalo;st4;re;kr2merica0tlanta;! 0;eastern;on","Eastern","n","usa"],Nipigon:["true¦america eastern,canada,e0nipigon;astern0st,t;! 0;standard t0t0;ime","Eastern","n","usa"],Nome:["true¦a0no5;k5laska0merica;! 1n0;! s1;s0ti1west;tandard ti0;me;st,t","Alaska","n","usa"],Noronha:["true¦atlantic islands,brazil3f0n4;ernando de noronha 0nt;standard t0t0;ime;!/den0;oronha","Fernando de Noronha","n"],"North_Dakota/Beulah":["true¦america,beulah,c0north dakota;entral standard time,st","Central","n","usa"],"North_Dakota/Center":["true¦america,c1merc0north dakota,oliv0;er;ent0st;er,ral standard time","Central","n","usa"],"North_Dakota/New_Salem":["true¦america,c1n0;ew_salem,orth dakota;entral standard time,st","Central","n","usa"],Nuuk:["true¦america3g1nuuk,wg0;st,t;l,r0;eenland,l;!/godthab","West Greenland","n","green"],Ojinaga:["true¦america5c4m0ojinaga;ountain0st,t;! 0;standard t0t0;ime;hihuahua,iudad juarez;! mountain","Mountain","n","usa"],Panama:["true¦a3coral h,e2pa0san miguelito;!n0;!ama;astern standard time,st;merica/0t2;at1c0;aym1oral_harbour;ikok0;an","Eastern","n"],Pangnirtung:["true¦a4baffin island,canada,e0nunavit,pangnirtung;astern0st,t;! 0;standard t0t0;ime;ddt,merica eastern","Eastern","n","usa"],Paramaribo:["true¦paramaribo,s0;r2ur0;!iname0;! time;!t","Suriname","n"],Phoenix:["true¦aAc8g6idaho,m4n3phoenix,s2t1u0wyoming;s/arAtah;empe,ucsC;cottsd4inaloa,onora;ayarit,ew mexico;aryv2esa,o0st,t,wt;nta6untain standard time;ilbert,lend0;ale;h0olorado;andler,ihuahua;merica2r0;izo0;na;!/crest0;on","Mountain","n"],"Port-au-Prince":["true¦america eastern,cAe6h4p0;etionville,ort0; 0-au-1;au 0de paix;prince;aiti,t0;!i;astern0st,t;! 0;standard t0t0;ime;arrefour,roix des bouquets","Eastern","n","usa"],Porto_Velho:["true¦am5brazil,c2porto0rondônia; 0_0;velho;entral brazil0uiaba;!ian0;! s3;azon0t;! 0;s0t1;tandard t0;ime","Amazon","n"],Puerto_Rico:["true¦a2bayam9p0;r0uerto rico;!i;merica0st,tlantic standard time;!/0;a5blanc-sabl4curacao,dominica,g3kralendijk,lower_princes,m2port_of_spa1st_0torto7virg1;barthelemy,kitts,lucia,thomas,vincent;in;arigot,ontserrat;renada,uadeloupe;on;n0ruba;guil0tigua;la","Atlantic","n"],Punta_Arenas:["true¦c0punta arenas,region of magallanes;hile0lt;! standard time","Chile","s"],Rainy_River:["true¦america4c0ft frances,rainy river;entral0st,t;! 0;standard t0t0;ime;! central","Central","n","usa"],Rankin_Inlet:["true¦america4c0rankin inlet;ddt,entral0st,t;! 0;standard t0t0;ime;! central","Central","n","usa"],Recife:["true¦aAbr4caruaru,e3jaboatao2olinda,p0;aulista,e0;rnambuco,trolina;! dos guararapes; south america s4ast south a6;a0t;silia0zil;! 0;s0t1;tandard t0;ime;merica","Brasilia","n"],Regina:["true¦c2regina,s0;askat0k;c2oon;anada0entral standard time,st;!/saskatc0;hewan","Central","n"],Resolute:["true¦america4c0resolute;entral0st,t;! 0;standard t0t0;ime;! central","Central","n","usa"],Rio_Branco:["true¦a1brazil0rio branco;!/1;c1merica/porto_0;acre;re0t;! 0;standard t0t0;ime","Acre","s"],Santarem:["true¦br1e0pará west,santarem; south america s4ast south america;a0t;silia0zil;! 0;s0t1;tandard t0;ime","Brasilia","n"],Santiago:["true¦aAc4iquique,la pintana,puente alto,rancagua,san3t1v0;alparaiso,ina del mar;alca0emuco;!huano; bernardo,tiago;h1l0oncepcion;!st,t;ile0l;! 0/continental;standard t0t0;ime;ntofagasta,rica","Chile","s","chile"],Santo_Domingo:["true¦a8bella vista,do6la romana,s0;an0dmt; pedro de macoris,t0;iago de los caballeros,o domingo0;! 0;e0oe0;ste;!m0;!inican republic;st,tlantic standard time","Atlantic","n"],Sao_Paulo:["true¦a16b0Tc0Md0Je0Hf0Fg0Ahortol09i05j02l01mXnVosasco,pLriFs4ta3uber2v0;i0olta redon1A;amao,la velha,tor16;a0Ml06;boao da ser00uba10;a2e1oroNu0;maLzano;rXte lago0L;nt4o 0;bernardo do campo,carl03jo0leopolLpaulo,vicE;ao de meriti,se0;! do0; rio p8s camp00;a 1o0; andDs;barbara d'oes0Pluz0Tmar0T;beirao 3o0;! 0;cla0de janei0g6ver7;ro;das nev07p0;reto;asso fun8e7iraci6lanalti0Oo4r0;aia g1esidente prud0;en0G;ran0;de;nta grossa,rto aleg0;re;caW;lotYtro0F;do;iteroi,ov0;aJo hamburgo;a1o0;gi das cruzSntes clarD;ri0ua;l07n6;imei2ondri08;acarei,oinville,u0;iz de fo0ndi9;ra;ndaia2patin1ta0;bor6pevi,quaquece1;ga;tuG;andY;o3ravat2uaru0;ja,lh0;os;ai;iSvernador valadarC;loria5oz do0ran2; iguacu; south america sHast south ameri0mbu;ca;i0uque de caxi8;adema,vi0;noN;a1o0uriti2;ntagem,tK;choeiro de itapemirDmp1no3rapicui0scavel,xias do sul;ba;in1os dos goytacaz0;es;as;aBe7lumenau,r0;!a0st,t;!silia1zil0;!/east;! 0;s0t1;tandard t0;ime;l1t0;im;ford roxo,o horizon0;te;rueri,uru;lvora4merica3na2parecida de goi0;an0;ia;polis;na;da","Brasilia","s"],Scoresbysund:["true¦e3greenland2h0ittoqqortoormiit,scoresbysund;e0neg;eg,g;! eastern;ast greenland1g0;st,t;! 0;standard t0t0;ime","East Greenland","n","eu0"],Sitka:["true¦a0sitka;k6laska0merica;! 1n0;! st2;s0t2;itka area,t0;andard t0;ime;st,t","Alaska","n","usa"],St_Johns:["true¦canada7h5n0st johns;d3ewfoundland0st,t;! 0;labrador,standard t0t0;ime;dt,t;e0n0tn;tn;!/newfoundland","Newfoundland","n","usa"],Swift_Current:["true¦c1s0;askatchewan,wift current;anada,entral standard time,st","Central","n"],Tegucigalpa:["true¦c2h0san pedro sula,tegucigalpa;n0onduras;!d;entral standard time,st","Central","n"],Thule:["true¦a0pituffik,thule;st,t0;!lantic0;! 0;standard t0t0;ime","Atlantic","n","usa"],Thunder_Bay:["true¦canada,e0thunder bay;astern0st,t;! time","Eastern","n","usa"],Tijuana:["true¦america8baja california,eAh6mexic4p0tijuana;acific0st,t;! 0;standard t0t0;ime;ali,o0;!/bajanorte;e0n0;nomx; pacific,/0;e0santa_isabel;nsenada","Pacific","n","usa"],Toronto:["true¦americaGbEcaBe7gatineIhamilFkitchener,l4m3nepe2o0quebec,richmond hill,toronto,vaugh2windsor;n5sh0tt0;awa;an;arkham,ississauga,oF;avFon0;don on0gueuil;tario;astern0st,t;! 0;standard t0t0;ime;!n0;!ada0;!/7;arrie,ramp0;ton; 4/0;mo1nass0;au;ntre0;al;eastern","Eastern","n","usa"],Vancouver:["true¦america 9b7ca5ladn4okanagan,p1surrey,v0yukon;ancouv3ictor7;acific0st,t;! 0;bc,standard time;er;!nada0;!/2;ritish columb0urnaby;ia;pacific","Pacific","n","usa"],Whitehorse:["true¦canada1m0whitehorse,yst;ountain standard time,st;!/yukon","Mountain","n"],Winnipeg:["true¦america 7c2m1w0;est m0innipeg;anitoba;anada3entral0st,t;! 0;standard t0t0;ime;!/0;central","Central","n","usa"],Yakutat:["true¦a0y4;k6laska0merica;! 1n0;! s2;s1t2y0;akutat;tandard t0;ime;st,t","Alaska","n","usa"],Yellowknife:["true¦america mountain,canada,m0yellowknife;ountain0st,t;! 0;standard t0t0;ime","Mountain","n","usa"]},Antarctica:{Casey:["true¦antarctica,cas0;ey,t","Casey","s","ant"],Davis:["true¦a1dav0;is,t;ntarctica,q,ta","Davis","s"],Macquarie:["true¦a2canberra,eastern australia6m0sydney;acquarie0elbourne;! island;e4ntarctica,us0; east0tralia eastern;!ern0;! standard0; time;st,t","Eastern Australia","s","aus"],Mawson:["true¦antarctica,maw0;son,t","Mawson","s"],Rothera:["true¦a1b0city of b0rothera;uenos aires;ntarctica1r0;gentina,st,t;!/palmer","Argentina","s"],Troll:["true¦antarctica,g2troll0;! 0;research station,t1;mt,reenwich mean t0;ime","Troll","s","troll"],Vostok:["true¦antarctica,vost0;!ok","Vostok","s"]},Asia:{Almaty:["true¦a6central asia,east kazakhstan time,k2nur sultan,p1s0taraz,ust kamenogorsk;emey,hymkent;avlodar,etropavl;a0z;ragandy,z0;!akhstan0;! eastern;lm1s0;ia,tana;a0t; ata,ty","East Kazakhstan","n"],Amman:["true¦a2eet,irbid,jo0russeifa,wadi as sir,zarqa;!r0;!d1;mm0sia;an","Eastern European","n","jord"],Anadyr:["true¦a0petropavlovsk kamchatsky;na0sia;dyr0t;! time","Anadyr","n"],Aqtau:["true¦a1kazakhstan western,mangghystaū/mankis3tashkent,west 0;asia,kazakhstan5;lm2q1s0;hgabat,ia;tau;a0t; ata,-ata0; time","West Kazakhstan","n"],Aqtobe:["true¦a1kazakhstan western,tashkent,west 0;asia,kazakhstan5;kto5lm2qt1s0;hgabat,ia;o3ö3;a0t; ata,-ata0; time;be","West Kazakhstan","n"],Ashgabat:["true¦as4t0;km,m2urkmen0;a4istan0;! time;!st,t;hga1ia0;!/ashkhabad;bat","Turkmenistan","n"],Atyrau:["true¦a1gur'yev,kazakhstan western,tashkent,west 0;asia,kazakhstan6;lm3s2t0;irau,yra0;u,ū;hgabat,ia;a0t; ata,-ata0; time","West Kazakhstan","n"],Baghdad:["true¦a6ba5dihok,erbil,i3k2mosul,na1r0;amadi,iyadh;jaf,sirC;arbala,irkuk,uwait;q,r0;aq,q;ghdad,sr9;bu ghurayb,d diw6l 5rab1s0; sulaym5ia,t;!i0;a0c;!n0;! time;amar2basrah al qadim2falluj2hill2kut,mawsil al jadid2;an0;iy0;ah","Arabian","n"],Baku:["true¦a0baku,ganja,lankaran,sumqayit;sia,z0;!e0t;!rbaijan0;! time","Azerbaijan","n"],Bangkok:["true¦asiaAbangkok,ch7h5i3jakarta,mueang nontha8na2pak kret,s0udon thani;amut prakan,e0i racha,outh east0; asia;khon ratchasima,m di9;ct,ndochina0;! time;a0ue;iphong,noi,t y2;iang m1on 0;buri;ai;!/0;phnom_pe0vientiane;nh","Indochina","n"],Barnaul:["true¦a3b2kra0north a3;snoyarsk0t;! time;arnaul,iysk;sia","Krasnoyarsk","n"],Beirut:["true¦asia,bei3e2l0ra's bay3;b0ebanon;!n;astern european time,et,urope eastern;rut","Eastern European","n","leb"],Bishkek:["true¦asia,bishkek,k0osh;g2yrgy0;stan,zstan0;! time;!t,z","Kyrgyzstan","n"],Brunei:["true¦asia,b0;dt,n2r0;n,unei0;! darussalam time;!t","Brunei Darussalam","n"],Chita:["true¦asia,chita,yak0;t,utsk0;! time","Yakutsk","n"],Choibalsan:["true¦as2choibalsan,dornodsükhbaatar,mongol2ula0;anbaatar0t;! time;ia","Ulaanbaatar","n"],Colombo:["true¦as6c4dehiwala mount lavin6i2kolkata,lk1m0new delhi,sri lanka;oratuwa,umb4;!a;ndia0st;! time,n;henn0olombo;ai;ia","India","n"],Damascus:["true¦a4d3eet,h2latak5sy0;!r0;!ia;am3oms;amascus,eir ez zor;leppo,r raqq1s0;ia;ah","Eastern European","n","syr"],Dhaka:["true¦asiaGbDcBd9jess8khul7mymensingh,na4pa3ra2s1t0;angail,ungi;aid8hib4ylhet;jshahi,ng7;b3ltan,r naogaon;gar5r0t3;ayan0singdi;ganj;na;ore;haka,inaj0;pur;hattogram,o0;milla,x's bazar;a0d,gd,ogra,st;gerhat,ngladesh0rishal;! time;!/dacca","Bangladesh","n"],Dili:["true¦asia,dili,east timor1tl0;!s,t;! time","East Timor","s"],Dubai:["true¦a5dubai,g3mus1om0ras al khaim2sharj2;!an,n;aff0c5;ah;st,ulf0;! time;bu dhabi,jm2rabi2sia0;!/musc0;at;an","Gulf","n"],Dushanbe:["true¦asia,dushanbe,t0;ajikistan1j0;!k,t;! time","Tajikistan","n"],Famagusta:["true¦asia,e0famagusta,northern cyprus;astern european time,et,urope eastern","Eastern European","n","eu3"],Gaza:["true¦asia,eet,gaza2p0;alestine,s0;!e;! strip","Eastern European","n","pal"],Hebron:["true¦asia,e0hebron,west bank;ast jerusalem,et","Eastern European","n","pal"],Ho_Chi_Minh:["true¦asia7bien hoa,can tho,da 5ho3nha tr6qui nh8rach gia,sa dec,thi xa phu my,v0;ietnam1n0ung tau;!m;! south; chi 0_chi_0;minh;lat,n0;ang;!/saig0;on","Indochina","n"],Hong_Kong:["true¦asia,h0kowloon,tsuen wan;k3ong0; kong1_k0k0;ong;! time;!g,st,t","Hong Kong","n"],Hovd:["true¦as4bayan-ölgiigovi-altaihovduvszavkhan,hov2west0; 0ern 0;mongol2;d0t;! time;ia","Hovd","n"],Irkutsk:["true¦a2brat3irk0north asia east,ulan ude;t,utsk0;! time;ngar0sia;sk","Irkutsk","n"],Jakarta:["true¦aZbTcRdepQiNjKkediri,lJmGpArengasdengklQs4t2w0yogyakM;est0ib; indoneXern indonesia time;a0egal;n4sikmal3;ema4itubondo,outh tan3u0;kabumi,medaSra0;b0kF;aya;ge0;raO;a4e1robolinggo,urw0;akAokerto;ka1ma0rcut;laKtangsiantar;long2nbaru;daIl3mulaIruI;a1ed0;an;diun,laF;embaE;a0ember;k0mbi,vasumatra;arta;d1ndonesia0;! western;!n;ok;i0urug;ampea,bino5leungsir,mahi,putat,rebon;a1e0injai,ogor;kasi,ngkulu;nd0tam;a0u1; aceh,r lampu0;ng;sia","Western Indonesia","s"],Jayapura:["true¦a2east1indonesia eastern,jayapura,m0new guinea,wit;alukus,oluccas; indones1ern indonesia time;mbon,s0;ia","Eastern Indonesia","s"],Jerusalem:["true¦as7beersheba,haifa,i2j0petah tiqwa,rishon leziyyon,tel 9west je1;e0mt;rusalem;d3l,s0;r0t;!ael0;! time;dt,t;hdod,ia0;!/tel_0;aviv","Israel","n","isr"],Kabul:["true¦a1herat,jalalabad,ka0mazar e sharif;bul,ndahar;f0sia;!g0t;!hanistan0;! time","Afghanistan","n"],Kamchatka:["true¦a2kamchatka,pet0;ropavlovsk0t; kamchatsky,-kamchatski time;nadyr,sia","Petropavlovsk-Kamchatski","n"],Karachi:["true¦asia,bLchiniKdera ghaziIfaisalHgujraGhyderHislamHjhang sadr,kElaDm8nawabshah,okaBp4quetta,ra3s0;a1h0ialkJukkN;ahkIekhupu9;ddiqEhiwal,rgodha;him yarEwalpindi;ak1eshawar,k0;!t;!istan0;! time;a3i1u0;lt9zaffar7;ngo0rpur khas;ra;lir cantonment,rd6;hore,rkana;a0otli;moke,rachi,s8;n5t;abad; kh0;an;ot;a1himber,ure0;wala;hawalp0ttagram;ur","Pakistan","n"],Kathmandu:["true¦asia3biratnagar,kath4n1p0;atan,okhara;epal,p0;!l,t;!/kat0;mandu","Nepal","n"],Khandyga:["true¦asia,khandyga,yak0;t,utsk0;! time","Yakutsk","n"],Kolkata:["true¦0:3D;1:3L;2:2D;3:3M;4:3J;a35b2Dc24d1We1Uf1Sg1Fh1Ci18j13k0Pl0Km0Cn05odis3KpVquthbull3DrNsFt9u8v5warang2Myamun1P;a6el1Ui5;jayawa2Vsakha0HzianagC;doda2Orana11;daip0jja23lhasn1ttar pradesh;a8eXh7iru5umk0;chirap0Mnelve2p5vottiy0;a39p0;ane,iruvananthapur0Noothuku2Yriss0;mb5njo1X;ar0L;aBecunder4h9i8lst,o7r1Fu5;jan37r5;at,endr1C;l2Znip2N;k3liguKngrau2rJ;ahj1Zi5ri2Oya0L;mo1Mvaji07;har1Xlem,mbh24ng2t04ug0Y;a6e0Eoh5;iItak;ebare2i9j7m5nc1Gtl0Aurke37;ag5g5p0;und08;a5kot;hmund26sth2A;ch0p0;a9imp8roddat0u5;ducher23n5rn17;a5e;sa;ri;li,n7rbha6t5;ia2Vna;ni;chku2Ti5;ha2Gp21;a7e6izam4o5;i1Vwrang2B;l0Sw del0Y;di2Kg7i0Ejaf2Fn5re2Oshik,vi mumb15;ded,g5;i,loi j1V;ercoil,p0;a8eerut,irz25o7u5yso0Y;lugu,mb10rwa1Izaffar5;n1p0;nghyr,rad4;chili7d6harasht1Fleg07n5thu1Fu;ga0Iip0;hya,ur0V;patnG;a7u5;cknow,dhia5;na;l bahadur5t0; n1;aDhaBo8u5;kat6lt5rno1P;a2i;pal2;l5rWta,zhikode;h1Nka1Kl5;am;nd5ragp0;wa;kina13l8marOnp0r5shmir,tih3;i6na5ol ba18;l,tV;mn1;lakuric03y11;a6han5odNunagadh;si;b0Rip0l6m5;mu,n1shedp0;andh3gGna;chalkaranji,mph0In5st;!d5;!ia5o00;! time,n;a6is3ospet,u5;b2g2;o0Hp0ridw3;aChazi4o9reater noi0Mu6wali5y04;or;jar0OlbarQnt0rg6wa5;ha12;aon;rak6sa5;ba;hp0;juw8n5ya;dh6g5;an1;in1;aka;ar5iroz4;id4rukh4;l5taw0M;loF;aAe8h6indigul,ombOurg5;!ap0;anb0Uul5;ia;hra dun,l5was;hi;rbhan5vange8;ga;a09h8o5uttack;ch6imbato5;re;in;a6enn5;ai;nd5pL;a5i0C;!nn1;aNeKhBi9or7rahm04u5;landshahr,rh5;anp0;iv2;li;d3har sharif,jZkan07l5;asp0imoC;aAi7op6u5;baneshw3sav5;al;l6wan5;di,i;ai,wa6;g6ratp0tpa5vn1yand3;ra;alp0;l5ngaluru;gaum,la5;ry;hAli,r6thin5;da;a6ddham5eilly;an;n1s5;at;a6rai5;gh;ramp0;gQhmLizawl,jmKkoRlHmDnantCrrBs6urang4va5;di;ans8ia5;!/ca5;lcut5;ta;ol;ah;ap0;arnath,batt0r5;ava5its3o9;ti;ur;appuz6i5lah4w3;garh;ha;er;adn1ed4;ab5;ad;ag3;ar;arta5ra;la","India","n"],Krasnoyarsk:["true¦a2kra0north a2;snoyarsk0t;! time;sia","Krasnoyarsk","n"],Kuala_Lumpur:["true¦aHbukit mertajGgeorge town,ipoh,johor bahFk8m4petali3s0taipiE;e1hah alFu0;ba1ngai petani;paBremb7;ng jaya;ala1y0;!s,t;cca,ysia0;! time;ampung baru suba5la5ota bha6ua0;la1nt0;an; 0_l1;l0terengganu;umpur;ng;ru;am;lor setar,sia","Malaysia","s"],Kuching:["true¦asia,k4m2s0tawau;a0ibu;bahsarawak,ndakan;alaysia0iri,yt;! time;ota kinabalu,uching","Malaysia","n"],Macau:["true¦asia6beiji5c2hong ko5m0urumqi;ac0o;!au;h0st;ina0ongqi1;! time;ng;!/macao","China","n"],Magadan:["true¦asia,mag0;adan0t;! time","Magadan","n"],Makassar:["true¦asiaBba8c5denpa4indonesia central,k3l2ma1palu,s0wita;amarinda,ulawesi;kas2nado,taram;abuan bajo,oa jan7;endari,up8;sar;e0ity of bal3;lebesbalinusa,ntral indonesia0;! time;l0njarmasin;ikpap0;an;!/ujung_pand0;ang","Central Indonesia","s"],Manila:["true¦a04bWcRdaPgeneral santOiMlJmCnaBoAp4quezIsan1ta0zamboanga;clobZguig,rlac,ytE; 1t0;a ro2ol;fernando,jose del monte,pab02;a3h1uerto prince0;sa;!ilippine0l,st,t; time,s;gadiRnalanoy,s0;ay,ig;longapo,rmoc;ga,votQ;a0eycauayN;balacat,gugpo poblaci4kati,l3n0;da1ila,silingLtamp0;ay;luyong,ue;ingDol6;on;a1egaspi,i0ucena;bertad,pa;pu lapu,s p4;l0mus;igCoiI;os;smar0v5;inB;a0ebu,otabato;b1gayan de oro,in5l0;amba,ooc6;anatu5uy0;ao;a4inan2u0;d0tu2;ta;!gon0;an;co1guio,tang0;as;lod,or;n0sia;geles,tipo0;lo","Philippine","n"],Nicosia:["true¦a5cy3e0n2;astern european time,et,urope0; eastern,/n0;ico2;!p0;!rus;sia","Eastern European","n","eu3"],Novokuznetsk:["true¦a5k2no0prokop'yev1;rth a4vokuznet0;sk;emerovo,ra0;snoyarsk0t;! time;sia","Krasnoyarsk","n"],Novosibirsk:["true¦as3no0siber3;rth central as2v0;osibirsk0t;! time;ia","Novosibirsk","n"],Omsk:["true¦asia,oms0;k0t;! time","Omsk","n"],Oral:["true¦a2kazakhstan western,oral,tashkent,west 0;asia,kazakhstan0;! 4;lm1s0;hgabat,ia;a0t; ata,-ata 0;time","West Kazakhstan","n"],Pontianak:["true¦asia,b2indonesia western,pontianak,tanjung pinang,w0;est0ib; b0ern indonesia time;orneo","Western Indonesia","n"],Pyongyang:["true¦asia,chongjin,h7k4n3p2s0won8;ariw0eoul,inuiAunch'0;on;rk,yongya7;amp'o,orth korea;a1orea0p,st;!n time;eso3nggye;a1ungnam,ye0;san;e1mhu0;ng;ju","Korean","n"],Qatar:["true¦a2doha,kuwait,qa0riyadh;!t0;!ar;r2s0;ia0t;!/bahrain; rayyan,ab0;!i0;a0c;!n0;! time","Arabian","n"],Qostanay:["true¦a2central asia,east kazakhstan time,k0qo1;azakhstan eastern,o0;stanay;lmt,s0;ia,tana","East Kazakhstan","n"],Qyzylorda:["true¦a4k1qy2tashkent,west 0;asia,kazakhstan7;azakhstan western,y0zyl-1;zyl0;orda;lm1s0;hgabat,ia;a0t; ata,-ata0; time","West Kazakhstan","n"],Riyadh:["true¦a9burayd8dammam,ha7jedd8k6me5najran,riyadh,s4ta3y0;anbu,e0;!m0;!en;'if,buk;ultan3yot;cca,dina;hamis mush6uw6;'il,far al batin;ah;bha,l 8ntarctica/syowa,rab4s0;ia0t;!/0;aden,kuw0;ait;!i0;a0c;!n0;! time;hufuf,jubayl,kharj,mubarraz","Arabian","n"],Sakhalin:["true¦asia,sak0yuzhno sakhalinsk;halin0t;! 0;island,time","Sakhalin","n"],Samarkand:["true¦asia,bukhara,nukus,qarshi,samarkand,uz0;bekistan0t;! 0;time,west","Uzbekistan","n"],Seoul:["true¦aPbuMchHdaeGgChwaseoRiBjeAk7m6pohaFrok,s2u1wonJy0;aCeosu;ijeongbuQlsL;e1outh korea,u0;nEwH;joAo0;ngnamMul;asGokpo;imhae,or0r,st,wangmyo7;!ea0;!n time;ju,on8;cCksBn6;angneu2oyaEu1wa0;ng5;mi,ns8riD;ng;gu,je4;angw3eon2in1un0;che2;ju;an,gju7;on;c1s0;an;heon3;n0sia;san1ya0;ng0; si","Korean","n"],Shanghai:["true¦0:3J;1:36;2:34;3:37;4:3D;a3Cb31c2Nd2He30f2Cg26h1Qji1Ek1Bl0Ym0Wn0Tordos,p0Pq0Lrizh10s08t01u3FwSxLyEz5;aoCh6i5ouc3unyi;bo,go0;a7en6ouk2u5; c3h31maWzh2;g2Vj1Izh2;b1Vng5o3E;jiakou5zh2;! shi xuanhua qu;ya0z27;an9i7u5;ci,e18n5;c3fu;b4c9n5ya0;cZgk2;c3g5ji,t2Q;j17qu1sh16zh2;i6uc5;ha0;a6n5uyi0;di,gt2Lh1Gi0pu,t2Lx13ya0;m17n5;!g5ni0t0Eya0;t1ya0;aBe9u5;h6so0w1Cx5zh2;i,ue;a5u;i,n;i0Hn5;sh1zh2;fang5nxi1;di1;a8i6ong5;chuans0XhDli02sh1;an5eli0;j4sh10;i6ng5;gu,sh1;an,hec1Wyu1zh2;anmi0hAi8u5;i5zh2;h5zh2;ua;c5pi0;hu1;a7en6i5uangya14;jiaz15qi,y1;gli,ya0zh0G;n6o5s0I;gu1xi0;g5t2;h1Pqiu,rKyu;i5uan1J;aFn5o14qih1Y;g5huangdH;dGh1L;an0Ting7rc,u5;ti1yang5;! H;ding0QxZ;an5eijYingbo;ch5ji0ni0to0ya0;a0o0;entoug2ianRuda5;njU;aEi8u5;anc3o6qi5;ao;he,ya0;a7jPn5upansh02;fTxia 5yi;chengguanI;n0Do5;c3y5;a0u1;i0Wn5ohek2;g5zh2;fa0;ai6un5;mi0sh1;fe0yu1;'1aAe9l4n6u5xi;jCt0U;an,c3g5i0zh2;de5li0zh2;zhE;ya0;musi,n8o5xi0;j6z5;uo;ia0;g5shG;m7xi;aGeCkt,oBu5;a6i0Dlan ergi,m5n1;en;i7ng5y4;ga0s5;hi;'1b9n1;hhot,ng ko0;bi,f7ga0ng5ze;sh5ya0;ui;ei;i7n5rb4;d1g5;u,zh2;c3k2l0F;a9u5;an6i5li;l4ya0zh2;g5k2;do0yu1zh2;nsu,opi0;en7o6u5;ji1shQx4zh2;sh1;d2g5;hua0;a6eNong5;gu1hR;d6lian5ndo0qi0to0;!g;o5uk2;nghN;angHh5n,st,t;aAen7i5n,oZuG;fe0na5;! time;g5zh2;d5zho0;e,u;ng6o5;ya0zh2;ch7de,sh6zh5;i,ou;a,u;un;zh2;a9e5;i6n5;gbu,xi;'1h5ji0;ai;i7o5yan nur;di0t2;ou;c3sh1y4;an;he0;nDsia5;!/5;ch8harb4kashg6u5;rumqi;ar;in;o5ungki0;ng5;qi0;da,qi0sh5ya0;an,un;ng","China","n"],Singapore:["true¦asia,kuala lumpur,s0woodlands;g0ingapore;!p,t","Singapore","s"],Srednekolymsk:["true¦asia,chokurdakh,sre0;dnekolymsk,t","Srednekolymsk","n"],Taipei:["true¦asia,banqiao,cst,h7k5roc,t0;a1w0;!n;i0oyu1;ch2n0pei,w0;an;aohsi0eel0;ung;sinchu,ualien","Taipei","n"],Tashkent:["true¦a3namangan,qo`q4tashkent,uz0;!b0t;!ekistan0;! east;ndij0sia;on","Uzbekistan","n"],Tbilisi:["true¦asia,ge1kuta0tbil0;isi;!o0t;!rgia0;!n","Georgia","n"],Tehran:["true¦aQbMgorgWhamViKkCmaBn8orumiy7pasragad branch,q4rasht,s2t1varam6yazd,za0;hedVnjV;abHehrU;a0hirRirjT;bzevar,nandEri,v3;a0om;rchak,zv0;in;eh;a0eyshabur;jaf0zar0;ab4;layer,shh3;a4erman3ho0;meyni sDrram0wy;ab0sC;ad;!shah;h1r0;aj;riz;r0sfahB;!an,dt,n,st;a2irjand,o0uk9;jnu0ruje0;rd;b3ndar abbas;b4hv3m2r1sia,zads0;hahr;ak,dabil;ol;az;ad0;an","Iran","n"],Thimphu:["true¦asia2b0thimphu;hutan,t0;!n;!/thimbu","Bhutan","n"],Tokyo:["true¦0:11;1:1A;2:10;a18ch16fu0Zgifu14h0Oi0Ij0FkZmTnMoKsFt9u8waka05y3;a6o3;k3no;kaic1Co3;ha2su0;maKo;ji,tsun0F;aka7o3sukuba;k5makom05y3;a2o3;hOna0ta;oro03us0Qyo;m0Jrazu0sa1tsu1;a5end00hi4o0u3;i10zu0;monose1zuo0;ita2k3ppoLsebo;ai,u06;dawa05i0Wka3sa0t0E;ya2za1;a6eyaga0Qi3umazu;i4shi3; tokyo0Inomiya ha2;ga0R;g3ha,ra0G;a3oX;no,o0sa1;a5i3orio0;na3to,yaza1;mirinkOto;chiDeb4tsu3;do,m8ya2;as0J;aBi9o7u3y6;mam5r4shi3;ro;ashi1e,ume;oto;be,c0Dfu,ri3shigaK;ya2;shiwa3takyushu;da;gosVkogawacho honmKmirenjaku,na8s5wa3;g3sa1;oe,uc07;hi01u3;g3kabe;ai;zaY;ap4dt,oetJp3st;!n;an;bara1chi4ta3wa1zu3;mi;ha5n3;omi3;ya;ra;a8i3oncho;meBr4t3;acR;a4os3;a1hi2;kaNtsu0;chi5kodate,mam3;at3;su;nohe,o3;ji;ji8ku3;i6o0s3ya2;hi2;ma;ka; sD;!sa7;i3ofu;ba,g6;geoshimo,k7mag5njo,omori,s3tsugi;ahika3ia;wa;asa1;ki;as4i3;ta;hi","Japan","n"],Tomsk:["true¦asia,oms0tomsk;k,t","Omsk","n"],Ulaanbaatar:["true¦asia3m1ula0;anbaatar,n 3t;n0ongolia;!g;!/ulan_0;bator","Ulaanbaatar","n"],"Ust-Nera":["true¦asia,ust-nera,vla0;divostok,t","Vladivostok","n"],Vladivostok:["true¦asia,k1vla0;divostok,t;habarovsk0omsomolsk on amur;! vtoroy","Vladivostok","n"],Yakutsk:["true¦asia,blagoveshchen1yak0;t,ut0;sk","Yakutsk","n"],Yangon:["true¦asia4b3kyain seikgyi township,m0nay pyi taw,pathein,sittwe,yang5;a1eiktila,m0onywa;!r,t;ndalay,wlamyine;ago,urma;!/rango0;on","Myanmar","n"],Yekaterinburg:["true¦asia,chelyabin7eka5k4magnitogor7nizhn3or2perm,s1tyumen,ufa,yek0zlatoust;a4t;terlitamak,urgut;e3sk;evartov3y tagil;amensk ural'skiy,urgan;teri0;nburg;sk","Yekaterinburg","n"],Yerevan:["true¦a0caucasus,yerevan;m2rm0s1;!en0;ia;!t","Armenia","n"]},Atlantic:{Azores:["true¦a0hmt;tlantic,zo0;res,st,t","Azores","n","eu0"],Bermuda:["true¦a2b0;ermuda,m0;!u;st,t0;!lantic","Atlantic","n","usa"],Canary:["true¦atlantic,canary1europe western,las palmas de gran canaria,santa cruz de tenerife,we0;stern european,t;! islands","Western European","n","eu1"],Cape_Verde:["true¦atlantic,c0;a1pv,v0;!t;bo verde0pe verde;! is","Cape Verde","n"],Faroe:["true¦atlantic2f0;aroe0o,ro;! islands;!/faeroe","Western European","n","eu1"],Madeira:["true¦atlantic,europe western,madeira1we0;stern european,t;! islands","Western European","n","eu1"],Reykjavik:["true¦atlantic,coordinated universal3g2i0reykjavik,utc,zulu;celand,s0;!l;mt,reenwich mean0; time","Greenwich Mean","n"],South_Georgia:["true¦atlantic,gs1s0;gs,outh georgia;!t","South Georgia","n"],Stanley:["true¦atlantic,f0stanley;alkland1k0lk;!st,t;! island0;!s","Falkland Islands","s"]},Australia:{Adelaide:["true¦a2cen0south 1; 0tral 0;australia;c2delaide,ustralia0;! 0/south,n 0;central;dt,st,t","Central Australia","s","aus"],Brisbane:["true¦a1brisbane0gold coa5logan,q4townsville;! time;e3ustralia0;!/q1n east0;!ern;ueensland;st","Brisbane","s"],Broken_Hill:["true¦a1broken_hill,cen0y3; australia standard time,tral australia;c2delaide,ustralia0;! central,/y0;ancowinna;st,t","Central Australia","s","aus"],Darwin:["true¦a0darwin,northern territory;cst,ustralia0;!/north,n central","Australian Central","s"],Eucla:["true¦a0cw4eucla;cw4us0; central w1tralia0;!n central western;!e0;st;dt,st,t","Australian Central Western","s"],Hobart:["true¦a0canberra,eastern austral5hobart,king island,melbourne,sydney,t4;e8us0; east5tralia0;! 3/0n 3;currie,t0;asman0;ia;easte1;!e0;rn;dt,st,t","Eastern Australia","s","aus"],Lindeman:["true¦a0brisbane time,lindeman,whitsunday islands;est,ustralia0;!n eastern","Brisbane","s"],Lord_Howe:["true¦australia3l0;h1ord howe0;! island;dt,st,t;!/lhi","Lord Howe","s","lhow"],Melbourne:["true¦a0canberra,eastern austral4geelong,melbourne,sydney,v3;e7us0; east4tralia0;! 2/v0n 2;ictor0;ia;easte1;!e0;rn;dt,st,t","Eastern Australia","s","aus"],Perth:["true¦a4perth,w0; 2est0; 1ern australia0;! time;australia;ustralia1w0;dt,st,t;! weste1/west,n west0;!e0;rn","Western Australia","s"],Sydney:["true¦a0c5eastern australia time,melbourne,new south wales,sydney,wollongong;e8u0;!s0;! east4tralia0;! 2/0n 2;act,c0nsw;anberra;easte1;!e0;rn;dt,st,t","Eastern Australia","s","aus"]},Etc:{GMT:["true¦coordinated universal3etc2g0utc,zulu;mt,reenwich0;! mean1;!/greenwich; time","Greenwich Mean","n"],UTC:["true¦coordinated universal7etc2g1u0z4;ct,n5tc;mt,reenwich mean5;!/0;u1z0;ulu;ct,n0;iversal; time","Greenwich Mean","n"]},Europe:{Amsterdam:["true¦a9brussels,c6e4groning7madrid,n2paris,ro1t0utrecht;he hague,ilburg;mance,t9;etherlands,l0;!d;indhov2urope0;! central;e1openhag0;en;ntral european,st,t;lmere stad,m0;s0t;terdam","Central European","n","eu2"],Andorra:["true¦a3brussels,c1europe0madrid,paris,romance;! central;e0openhagen;ntral european,st,t;d,nd0;!orra","Central European","n","eu2"],Astrakhan:["true¦astrakh1europe,m0russi1st petersburg,volgograd time;oscow,sk;an","Moscow","n"],Athens:["true¦athens,e1gr0thessaloniki;!c,eece;astern european,et,urope0;! eastern","Eastern European","n","eu3"],Belgrade:["true¦b9c7europe3madrid,n2p1romance,s0;i,lovenia,vn;aris,risti4;is,ovi sad;! central,/0;ljublja1podgorica,s0zagreb;arajevo,kopje;na;e0openhagen;ntral european,st,t;elgrade,russels","Central European","n","eu2"],Brussels:["true¦antwerp6b3c1europe0gent,liege,madrid,paris,romance;! central;e0harleroi,openhag4;ntral european,st,t;e0mt,russels;!l0;!gium;en","Central European","n","eu2"],Bucharest:["true¦b5c4e2gala1iasi,oradea,ploies1ro0timisoara;!mania,u;ti;astern european,et,urope0;! eastern;luj napoca,onstanta,raiova;ra0ucharest;ila,sov","Eastern European","n","eu3"],Budapest:["true¦b6c3debrec4europe2hu0madrid,paris,romance;!n0;!gary;! central;e1openhag0;en;ntral european,st,t;russels,udapest","Central European","n","eu2"],Busingen:["true¦b5c3de2europe1germa0madrid,paris,romance,saxo0;ny;! central,/berlin;!u;e0openhag3;ntral european,st,t;avaria,r0using1;em0ussels;en","Central European","n","eu2"],Chisinau:["true¦chisinau,e2m0;d0oldova;!a;astern european,et,urope0;! eastern,/tiraspol","Eastern European","n","eu2"],Copenhagen:["true¦arhus,brussels,c2d1europe0madrid,paris,romance;! central;enmark,k,nk;e0mt,openhagen;ntral european,st,t","Central European","n","eu2"],Dublin:["true¦ace,british8cork,d7e6g5i3l0tse,waterford;i0ond1;merick,sb0;on;e,r0st;eland,l;alway,mt,reenwich mean2;dinburgh,ire,urope;mt,ublin; time","Irish","n","eu1"],Gibraltar:["true¦b5c3europe2gi0madrid,paris,romance;!b0;!raltar;! central;e0openhagen;ntral european,st,t;dst,russels,st","Central European","n","eu2"],Helsinki:["true¦e3fi1helsinki,t0vantaa;ampere,urku;!n0;!land;astern european,et,spoo,urope0;! eastern,/mariehamn","Eastern European","n","eu3"],Istanbul:["true¦aYbScQdOeKgJiHkFmBosmAs4t1u0v07zeytinburnu;eskuedWmr9;arsus,r1ur0;!kZ;!abzon,t;a3i1ultan0;beyJgazi;sIv0;as,erek;msun,n0;cakteBliurfa;aniye;a1er0uratpaH;kezefendi,sin;l0niF;atQte6;a0irikkale,onPutahP;hramanmaras,rabaglGyseS;sJzmi0;r,t;aziantep,ebze;lazig,rzurum,s1uro0;pe;en0kiC;l8yurt;eniz0iyarbakB;li;ankaEor0;lu,um;a1ur0;sa;gcil2hcelievl1likes5sak4t0;ikent,mB;er;ar;d7n4rnavutko3sia/is2ta0;seh0;ir;tanbul;ey;kara,ta0;k0l0;ya;a1iyam0;an;na,paza0;ri","Turkey","n"],Kaliningrad:["true¦e0kaliningrad;astern european,et,urope","Eastern European","n"],Kiev:["true¦bila tserkLcherIdGeDhorlCivano frankivHk8l7m5odessa,poltaLriv4sumy,ternopil,u2vinnyts1z0;aporizhzh0hytomyr;ya;a,kr0;!ai0;ne;a0ykolayE;ki5riu8;ut9vC;amyanske,h1iev,r0yB;emenchuk,opyv1yvyy rih;ark9erson,mel0;nytskyy;ivka;astern european,et,urope0;! eastern,/simfero0;pol;nipro,onet0;sk;kasy,ni0;h0vtsi;iv;va","Eastern European","n","eu3"],Kirov:["true¦europe,kirov,m0russian,st petersburg,volgograd time;oscow,sk","Moscow","n"],Lisbon:["true¦amadora,europe5lisbon,p2we0;st0t;! europe,ern european;ort0rt,t;o,ugal0;! mainland;! western","Western European","n","eu1"],London:["true¦a0Ob0Ac07d03eXgThRiOj00kingston upon hull,lJmHnBoxSp9reading,s1w0yF;arwick0Aig00olverha7;heffield,o3t2u1w0;an4iH;ffolk,nderland,rr0IsYttL;afNoke on tre0C;meZuth0;a1end on 0;sea;mptG;ly0orts0restF;mouth;ew4o0;r0ttinghamT;th0wC; y0amptonR;orkV;castle upon tyne,port;ancheQi0;dlan4lton keynes;ancaRdn,e2i1o0ut5;nd4;ncolnPsb3verW;e0icesterJ;ds;psw1slingt0;on;ich;ampJert0;fordI;b2l1mt0reenwich mean M;! standard L;asgow,oucesterF;!-eF;dinburgh,s4urope0;!/0;belNguernsMisle_of_m1j0;ersL;an;sex;erby2o1u0;blin,dlH;rset;!sh5;a1ity of westmin0oventry,rawlE;ster;mbridge1rdiff;eAir9lack7r2st,uckingham0;sh0;ire;adford,e3i0;st4tish0;! 0;time;nt;po0;ol;kenhead,mingham;l1xl0;ey;fast;berdeen,rchway","British","n","eu1"],Luxembourg:["true¦brussels,c3europe2lu0madrid,paris,romance;!x0;!embourg;! central;e0openhagen;ntral european,st,t","Central European","n","eu2"],Madrid:["true¦aRbOcJeGfuenDgCjerez de la frontera,lBm8ovieFp6romance,s1terrassa,v0wemt,zaragoza;alladol9igo;a1evilla,pain0;! mainland;badell,n0; sebastiHt0; marti,ander,s montjuic;a0uente de vallecas;lma,mpIris;a0ostolLurcK;dr0laga;id;atiJeganI;asteiz/vitorGijon,ran1;carral el par1labr0;ada;do;ixample,lche,s1urope0;! centr2;!p;a3e1iudad line0openhagen;al;ntral europe0st,t;an;rabanchel,stello de la pla7;a0ilbao,russels,urgos;da0rce0sque;lo4; coru3l0;cala de henar1icante,mer0;ia;es;na","Central European","n","eu2"],Malta:["true¦brussels,c3europe2m0paris,romance;a0lt,t;drid,lta;! central;e0openhagen;ntral european,st,t","Central European","n","eu2"],Minsk:["true¦b4europe,h3m1russian,st petersburg,v0;iteb4olgograd time;ahily0in3osc0sk;ow;omyel,rodna;abruy0elarus,lr,rest,y;sk","Moscow","n"],Monaco:["true¦brussels,c3europe2m0paris,romance;adrid,c0onaco;!o;! central;e0openhagen;ntral european,st,t","Central European","n","eu2"],Moscow:["true¦ar0Db0Ac07dzerzh06europe,fet,grozn05ivano04kYlipet0FmRnNorel,pKrFs8t6v2w-su,y0zelenograd;a0oshkar oW;roslavl,sene02;asyl'evsky ostrIelikiMladi2o0ykhino zhulebT;l0ronezh;gograd Pogda;kavkaz,m08;a0uQver;ganrog,mbD;a4ever3hakhty,molen06ochi,t0yktyvkR; 4a0;ryy osk0vrop0;ol;nSodvT;int 0rX;petersburg;ostov na donu,u1y0;azLbP;!s0;!sia0;!n;e1odolUsk0;ov;nza,trozavodS;a2izhn0ovorossiyR;ekamQi0;y novM;berezhnyye chelny,l'chik;a3dst,oscow1s0urmJ;d,k;! 0;time;khachka1r'0;ino;la;a2himki,ostroma,rasno0urG;d0gvargeisky;ar;l1z0;an;ininsk5uga;vo;yy;in8;entraln1he0;boksary,repovets;iy;el1ry0;an3;gorod;khangel'1mav0;ir;sk","Moscow","n"],Oslo:["true¦a6b5c3europe2madrid,oslo,paris,romance,s0;j0valbard and jan 6;!m;! central;e0openhag4;ntral european,st,t;erg2russels;rctic/longyearby1tlantic/jan_0;may0;en","Central European","n","eu2"],Paris:["true¦bIcFeuropeEfrBl9m7n5paris,r3s0toulouH;aint 1t0; 0rasbourg;etienne;e0oman9;ims,nn1;ant0i7ormandy;es;a0et,ontpellier;drid,rsei1;e havre,i0yon;lle;!a0;!n0;ce;! central;e0openhagen;ntral european,rgy pontoi0st,t;se;ordeaux,russels","Central European","n","eu2"],Prague:["true¦br6c4europe2madrid,ostr3p1romance,s0;k,lovakia,vk;aris,mt,rague;! central,/bratisl0;ava;e0openhagen;ntral european,st,t;no,ussels","Central European","n","eu2"],Riga:["true¦e2kalt,l0riga;atvia,st,v0;!a;ast2e1urope0;! eastern;st,t; europe,ern european","Eastern European","n","eu3"],Rome:["true¦bIcEeuropeCfloreBgenoa,mAnaples,p7r5sicily,t3v0;a0eroK;!t0;!ican city;aran4rieste,u0;rin,scany;mt,om0;a4e;a1ra0;to;dova,lermo,ris;adrid,essiAil6;nce;! central,/0;san_marino,vatic3;atan5e1o0;penhagen,rsica;ntral europe0st,t;an;ari,olog2r0;esc0ussels;ia;na","Central European","n","eu2"],Samara:["true¦europe,izhevsk,s0togliatti on the volga;am0yzran;ara,t","Samara","n"],Saratov:["true¦balakovo,europe,izhevsk,sa0;m0ratov;ara,t","Samara","n"],Sofia:["true¦b2e0imt,plovdiv,sof4varna;astern european,et,urope0;! eastern;g2u0;lgar0rgas;ia;!r","Eastern European","n","eu3"],Stockholm:["true¦brussels,c5europe4goeteborg,ma3paris,romance,s0;e1tockholm,we0;!d4;!t;drid,lmoe;! central;e1openhag0;en;ntral european,st,t","Central European","n","eu2"],Tallinn:["true¦e0tallinn;astern european,e2st1urope0;! eastern;!onia;!t","Eastern European","n","eu3"],Tirane:["true¦al4brussels,c2europe1madrid,paris,romance,tiran0;a,e;! central;e0openhagen;ntral european,st,t;!b0;!ania","Central European","n","eu2"],Ulyanovsk:["true¦europe,m0russian,st petersburg,ulyanovsk,volgograd 2;oscow0sk;! 0;time","Moscow","n"],Uzhgorod:["true¦e0ruthenia,uzhgorod;astern european,et,urope0;! eastern","Eastern European","n","eu3"],Vienna:["true¦a4brussels,c1donaustadt,europe0favorit2graz,linz,madrid,paris,romance,vienna;! central;e1openhag0;en;ntral european,st,t;t,u0;stria,t","Central European","n","eu2"],Vilnius:["true¦e3k2l0vilnius;ithuania,t0;!u;aunas,laipeda;astern european,et,urope0;! eastern","Eastern European","n","eu3"],Volgograd:["true¦europe,m2russian,st petersburg,vol0;gograd0t,zhskiy;! time;oscow,sk","Moscow","n"],Warsaw:["true¦bKcHeuropeGgCkAl8m7p4r3s2torun,w0zabrze;ars0rocl0;aw;osnowiec,zczec6;adIomanA;aris,l,o0raga poludnie;l0znD;!and;adrid,okot3;odz,ubl0;in;ato2iel3rak0;ow;d2li0;wi0;ce;ansk,ynia;! central;e0openhagen,zestochowa;ntral europe0st,t;an;i2russels,y0;dgoszcz,t0;om;alystok,elsko biala","Central European","n","eu2"],Zaporozhye:["true¦e3luhansk2sevastopol,zapor0;izhia lugansk,ozh0;'ye,ye;! east;astern european,et,urope0;! eastern","Eastern European","n","eu3"],Zurich:["true¦brussels,c4europe2geneve,li0madrid,paris,romance,swiss time,zurich;!e0;!chtenstein;! central,/0;busin1vaduz;e1openha0;gen;ntral european,st,t","Central European","n","eu2"]},Indian:{Chagos:["true¦british indian ocean territory,c4i0;ndian1o0;!t;! 0;c0ocean;hagos","Indian Ocean","n"],Christmas:["true¦c0indian;hristmas1x0;!r,t;! island","Christmas Island","s"],Cocos:["true¦c0indian;c2ocos0;! island0;!s;!k,t","Cocos Islands","n"],Kerguelen:["true¦a5french southern2indian,kerguelen1tf0;!t;!st paul4;! 0;& antarctic time,and antarctic0;! lands;msterdam0tf; island","French Southern & Antarctic","s"],Mahe:["true¦indian,mahe,s0;c0eychelles,yc;!t","Seychelles","n"],Maldives:["true¦indian,m0;aldives,dv,v0;!t","Maldives","n"],Mauritius:["true¦indian,m0port louis;auritius,u0;!s,t","Mauritius","n"],Reunion:["true¦indian,r0;e0éu1;t,u0;nion","Réunion","s"]},Pacific:{Apia:["true¦apia,pacific,s2w0;est s1s0;!m,t;amoa","West Samoa","s"],Auckland:["true¦a2christchurch,manukau,n0pacific,wellington;ew zea2orth shore,z0;!dt,l,mt,st,t;ntarctica/1uck0;land;mcmurdo,south_pole","New Zealand","s","nz"],Bougainville:["true¦bougainville,guinea2p0;a0gt;cific,pua new guinea;!n","Papua New Guinea","s"],Chatham:["true¦cha0nz-chat,pacific;dt,st,t0;!ham0;! 0;islands,time","Chatham","s","chat"],Chuuk:["true¦chu2pacific0;!/0;truk,y2;t,uk0;!/truky0;ap","Chuuk","n"],Easter:["true¦chile/easter4e0pacific;as0mt;st,t0;!er0;! 0;island","Easter Island","s","east"],Efate:["true¦efate,pacific,v0;anuatu,u0;!t","Vanuatu","n"],Fakaofo:["true¦fakaofo,pacific,t0;k0okelau;!l,t","Tokelau","n"],Fiji:["true¦f0pacific;iji,j0;!i,st,t","Fiji","s","fiji"],Funafuti:["true¦funafuti,pacific,t0;uv1v0;!t;!alu","Tuvalu","n"],Galapagos:["true¦co1gal0pacific;apagos,t,ápagos islands;lombia,st,t","Colombia","n"],Gambier:["true¦gam0pacific;bier0t;! islands","Gambier","n"],Guadalcanal:["true¦guadalcanal,pacific,s0;b1lb,olomon0;! islands;!t","Solomon Islands","n"],Guam:["true¦ch5guam,m4northern mariana islands,p2west0; 0ern 0;pacific;acific0ort moresby;!/saipan;np,p;amorro,st","Chamorro","n"],Honolulu:["true¦aleutian4h1pacific0us/hawaii;!/johnston;a0onolulu,st;dt,st,t,waii0;! aleutian;! islands","Hawaii-Aleutian","n"],Kanton:["true¦kanton,p0;acific1ho0;enix islands,t;!/enderbury","Phoenix Islands","n"],Kiritimati:["true¦ki1lin0pacific;e islands,t;!r0;!i0;bati,timati0;! island","Line Islands","n"],Kosrae:["true¦kos0pacific;rae,t","Kosrae","n"],Kwajalein:["true¦kwajalein,m0pacific;arshall islands,ht","Marshall Islands","n"],Majuro:["true¦m0pacific;a1h0;!l,t;juro,rshall islands","Marshall Islands","n"],Marquesas:["true¦mar0pacific;quesas0t;! islands","Marquesas","n"],Nauru:["true¦n0pacific;auru,r0;!t,u","Nauru","n"],Niue:["true¦n0pacific;iu1u0;!t;!e","Niue","n"],Norfolk:["true¦n0pacific;f1orfolk0;! island;!dt,k,t","Norfolk Island","n","aus"],Noumea:["true¦n0pacific;c0ew caledonia,oumea;!l,t","New Caledonia","n"],Pago_Pago:["true¦m5pa1s0us/sa4;a3st;cific0go_pago;!/0;m1sa0;moa;idway","Samoa","n"],Palau:["true¦p0;a1lw,w0;!t;cific,lau","Palau","n"],Pitcairn:["true¦p0;acific,cn,itcairn,n,st","Pitcairn","n"],Pohnpei:["true¦french polynesia,p0;acific1f,o0yf;hnpei0nt;!/ponape","Ponape","n"],Port_Moresby:["true¦antarctica/dumontd6dumont-d'6guinea5p0;a3g2ng,ort0; 0_0;moresby;!t;cific,pua new guinea;!n;urville","Papua New Guinea","s"],Rarotonga:["true¦c0pacific,rarotonga;k2o0;k,ok0;! islands;!t","Cook Islands","n"],Tahiti:["true¦pacific,society islands,tah0;iti,t","Tahiti","n"],Tarawa:["true¦gil0pacific,tarawa;bert islands,t","Gilbert Islands","n"],Tongatapu:["true¦nuku'alofa,pacific,to0;!n0t;!ga0;!tapu","Tonga","s"],Wake:["true¦pacific,u2wak0;e0t;! island;m0s minor outlying islands;!i","Wake Island","n"],Wallis:["true¦pacific,w0;allis1f0lf;!t;! 0;&0and0; futuna","Wallis & Futuna","n"]}},Rx={"gmt+0":["Etc/GMT"],"gmt-0":["Etc/GMT"],gmt0:["Etc/GMT"],"etc/gmt+0":["Etc/GMT"],"etc/gmt-0":["Etc/GMT"],"etc/gmt0":["Etc/GMT"],"msk+00":["Europe/Moscow"],"msk-01 - kaliningrad":["Europe/Kaliningrad"],"msk+00 - moscow area":["Europe/Moscow"],"msk+00 - crimea":["Europe/Kiev"],"msk+00 - volgograd":["Europe/Volgograd"],"msk+00 - kirov":["Europe/Kirov"],"msk+01 - astrakhan":["Europe/Astrakhan"],"msk+01 - saratov":["Europe/Saratov"],"msk+01 - ulyanovsk":["Europe/Ulyanovsk"],"msk+01 - samaraudmurtia":["Europe/Samara"],"msk+02 - urals":["Asia/Yekaterinburg"],"msk+03":["Asia/Omsk"],"msk+04 - novosibirsk":["Asia/Novosibirsk"],"msk+04 - altai":["Asia/Barnaul"],"msk+04":["Asia/Tomsk"],"msk+04 - kemerovo":["Asia/Novokuznetsk"],"msk+04 - krasnoyarsk area":["Asia/Krasnoyarsk"],"msk+05 - irkutskburyatia":["Asia/Irkutsk"],"msk+06 - zabaykalsky":["Asia/Chita"],"msk+06 - lena river":["Asia/Yakutsk"],"msk+06 - tomponskyust-maysky":["Asia/Khandyga"],"msk+07 - amur river":["Asia/Vladivostok"],"msk+07 - oymyakonsky":["Asia/Ust-Nera"],"msk+08 - magadan":["Asia/Magadan"],"msk+08 - sakhalin island":["Asia/Sakhalin"],"msk+08 - sakha (e) north kuril is":["Asia/Srednekolymsk"],"msk+09":["Asia/Kamchatka"],"msk+09 - bering sea":["Asia/Anadyr"],"russia time zone 11":["Asia/Anadyr"],"russia time zone 10":["Asia/Srednekolymsk"],"russia time zone 3":["Europe/Samara"],"coordinated universal time-09":["Pacific/Gambier"],"utc-09":["Pacific/Gambier"],"coordinated universal time-08":["Pacific/Pitcairn"]};const Lx=function(e){for(let n=0;n<=14;n+=1)e[`Etc/GMT-${n}`]={offset:n,meta:`gmt-${n}`,hem:"n"},e[`Etc/GMT+${n}`]={offset:n*-1,meta:`gmt+${n}`,hem:"n"}};var $x=Lx;let an={},he=Object.assign({},Rx);Object.keys(fs).forEach(e=>{Object.keys(fs[e]).forEach(n=>{let[t,r,a,o]=fs[e][n],i=`${e}/${n}`;an[i]={meta:r,hem:a};let s=Object.keys(Dx(t));s.forEach(l=>{if(he[l]=he[l]||[],he[l].push(i),l.match(/\//)){let u=l.split(/\//),c=u[u.length-1].toLowerCase();he[c]=he[c]||[],he[c].push(i)}}),an[i].wordCount=s.length,o&&(an[i].dst=Nx[o].split(/\|/))})});$x(an);const Fx=function(e){let n={};for(let t=0;t<e.length;t+=1)n[e[t]]=!0;return Object.keys(n)};Object.keys(he).forEach(e=>{he[e].length>1&&(he[e]=Fx(he[e]),he[e]=he[e].sort((n,t)=>an[n].wordCount>an[t].wordCount?-1:an[n].wordCount<an[t].wordCount?1:0))});const Vx=e=>(e=e.toLowerCase(),e=e.replace(/^in /g,""),e=e.replace(/ time/g,""),e=e.replace(/ (standard|daylight|summer)/g,""),e=e.replace(/ - .*/g,""),e=e.replace(/, .*/g,""),e=e.replace(/\./g,""),e.trim()),Ux=function(e){return e=e.replace(/\b(east|west|north|south)ern/g,"$1"),e=e.replace(/\b(africa|america|australia)n/g,"$1"),e=e.replace(/\beuropean/g,"europe"),e=e.replace(/\islands/g,"island"),e=e.replace(/.*\//g,""),e.trim()},Hx=function(e){return e=e.replace(/\(.*\)/,""),e=e.replace(/  +/g," "),e.trim()};var ps={one:Vx,two:Ux,three:Hx};const Bx=/^([-+]?[0-9]+)h(r?s)?$/i,qx=/^([-+]?[0-9]+)$/,Wx=/utc([\-+]?[0-9]+)$/i,Gx=/gmt([\-+]?[0-9]+)$/i,Ro=function(e){return e=Number(e),e>-13&&e<13?(e=e*-1,e=(e>0?"+":"")+e,"Etc/GMT"+e):null},Kx=function(e){let n=e.match(Bx);if(n!==null||(n=e.match(Wx),n!==null))return Ro(n[1]);if(n=e.match(Gx),n!==null){let t=Number(n[1])*-1;return Ro(t)}return n=e.match(qx),n!==null?Ro(n[1]):null};var Yx=Kx;const Qx=function(e){if(an.hasOwnProperty(e))return e;if(he.hasOwnProperty(e))return he[e];if(/[0-9]/.test(e)){let n=Yx(e);if(n)return[n]}return e=ps.one(e),he.hasOwnProperty(e)||(e=ps.two(e),he.hasOwnProperty(e))||(e=ps.three(e),he.hasOwnProperty(e))?he[e]:null};var Xx=Qx,$i={India:{std:["IST",5.5],long:"(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi"},China:{std:["CST",8],long:"(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi"},"Central European":{std:["CET",1],dst:["CEST",2,"Central European Summer Time"],long:"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris"},Atlantic:{dupe:!0,std:["AST",-4],dst:["ADT",-3],long:"(UTC-04:00) Atlantic Time (Canada)"},"Greenwich Mean":{std:["GMT",0],long:"(UTC) Coordinated Universal Time"},"Eastern European":{std:["EET",2],dst:["EEST",3,"Eastern European Summer Time"]},Central:{dupe:!0,std:["CST",-6],dst:["CDT",-5],long:"(UTC-06:00) Central Time (US & Canada)"},Eastern:{std:["EST",-5],dst:["EDT",-4],long:"(UTC-05:00) Eastern Time (US & Canada)"},Argentina:{std:["ART",-3],long:"(UTC-03:00) City of Buenos Aires"},"East Africa":{std:["EAT",3],long:"(UTC+03:00) Nairobi"},"West Africa":{std:["WAT",1],long:"(UTC+01:00) West Central Africa"},Moscow:{std:["MSK",3],long:"(UTC+03:00) Moscow, St. Petersburg"},Brasilia:{std:["BRT",-3],long:"(UTC-03:00) Brasilia"},Mountain:{std:["MST",-7],dst:["MDT",-6],long:"(UTC-07:00) Mountain Time (US & Canada)"},"Central Africa":{std:["CAT",2],long:"(UTC+02:00) Windhoek"},Arabian:{std:["AST",3],long:"(UTC+03:00) Kuwait, Riyadh"},Alaska:{std:["AKST",-9],dst:["AKDT",-8],long:"(UTC-09:00) Alaska"},British:{std:["GMT",0],dst:["BST",1,"British Summer Time"],long:"(UTC+00:00) Dublin, Edinburgh, Lisbon, London"},Irish:{std:["GMT",0],dst:["IST",1,"Irish Standard Time"]},"West Kazakhstan":{std:["ALMT",5],long:"(UTC+05:00) Ashgabat, Tashkent"},"Eastern Australia":{std:["AEST",10],dst:["AEDT",11,"Australian Eastern Daylight Time"],long:"(UTC+10:00) Canberra, Melbourne, Sydney"},"Western European":{std:["WET",0],dst:["WEST",1,"Western European Summer Time"]},Indochina:{std:["ICT",7],long:"(UTC+07:00) Bangkok, Hanoi, Jakarta"},"Central Mexico":{long:"(UTC-06:00) Guadalajara, Mexico City, Monterrey",std:["CST",-6],dst:["CDT",-5,"Central Daylight Time"]},"South Africa":{std:["SAST",2],long:"(UTC+02:00) Harare, Pretoria"},Krasnoyarsk:{std:["KRAT",7],long:"(UTC+07:00) Krasnoyarsk"},Yakutsk:{std:["YAKT",9],long:"(UTC+09:00) Yakutsk"},Pacific:{std:["PST",-8],dst:["PDT",-7],long:"(UTC-08:00) Pacific Time (US & Canada)"},Amazon:{std:["AMT",-4],long:"(UTC-04:00) Cuiaba"},"Morocco Standard":{offset:1,long:"(UTC+00:00) Casablanca",std:["WET",1],dst:["WEST",0,"Western European Summer Time"]},Gulf:{std:["GST",4],long:"(UTC+04:00) Abu Dhabi, Muscat"},Samara:{std:["SAMT",4],long:"(UTC+04:00) Izhevsk, Samara"},Uzbekistan:{std:["UZT",5]},"East Kazakhstan":{std:["ALMT",6],long:"(UTC+06:00) Astana"},Omsk:{std:["OMST",6],long:"(UTC+06:00) Omsk"},"Western Indonesia":{std:["WIB",7]},Ulaanbaatar:{std:["ULAT",8],long:"(UTC+08:00) Ulaanbaatar"},Malaysia:{std:["MYT",8]},Korean:{std:["KST",9],long:"(UTC+09:00) Seoul"},"Central Australia":{std:["ACST",9.5],dst:["ACDT",10.5,"Australian Central Daylight Time"],long:"(UTC+09:30) Adelaide"},Brisbane:{dupe:!0,std:["AEST",10]},Vladivostok:{std:["VLAT",10],long:"(UTC+10:00) Vladivostok"},Chamorro:{std:["ChST",10],long:"(UTC+10:00) Guam, Port Moresby"},"Papua New Guinea":{std:["PGT",11]},"New Zealand":{std:["NZST",12],dst:["NZDT",13],long:"(UTC+12:00) Auckland, Wellington"},"Marshall Islands":{std:["MHT",12]},Samoa:{std:["SST",-11],long:"(UTC+13:00) Samoa"},"Hawaii-Aleutian":{std:["HAST",-9],dst:["HADT",-8],long:"(UTC-09:00) Aleutian Islands"},"Mexican Pacific":{std:["HNPMX",-7],dst:["HEPMX",-6],long:"(UTC-07:00) Chihuahua, La Paz, Mazatlan"},Colombia:{std:["COT",-5]},Acre:{std:["ACT",-5]},Chile:{dupe:!0,std:["CLT",-3],dst:["CLST",-4,"Chile Summer Time"]},Troll:{dupe:!0,std:["GMT",0]},"East Greenland":{std:["HNEG",0],dst:["HEEG",1,"East Greenland Summer Time"]},Israel:{std:["IST",2],dst:["IDT",3],long:"(UTC+02:00) Jerusalem"},Syowa:{std:["SYOT",3]},Turkey:{std:["TRT",3],long:"(UTC+03:00) Istanbul"},Iran:{std:["IRST",3.5],dst:["IRDT",4.5],long:"(UTC+03:30) Tehran"},Azerbaijan:{std:["AZT",4],long:"(UTC+04:00) Baku"},Georgia:{std:["GET",4],long:"(UTC+04:00) Tbilisi"},Armenia:{std:["AMT",4],long:"(UTC+04:00) Yerevan"},Seychelles:{std:["SCT",4]},Mauritius:{std:["MUT",4],long:"(UTC+04:00) Port Louis"},Réunion:{std:["RET",4]},Afghanistan:{std:["AFT",4.5],long:"(UTC+04:30) Kabul"},Mawson:{std:["MAWT",5]},Turkmenistan:{std:["TMT",5]},Tajikistan:{std:["TJT",5]},Pakistan:{std:["PKT",5],long:"(UTC+05:00) Islamabad, Karachi"},Yekaterinburg:{std:["YEKT",5],long:"(UTC+05:00) Ekaterinburg"},"French Southern & Antarctic":{std:["TFT",5]},Maldives:{std:["MVT",5]},Nepal:{std:["NPT",5.75],long:"(UTC+05:45) Kathmandu"},Vostok:{std:["MSK+4",6]},Kyrgyzstan:{std:["KGT",6]},Bangladesh:{std:["BST",6],long:"(UTC+06:00) Dhaka"},Bhutan:{std:["BT",6]},"Indian Ocean":{std:["IOT",6]},Myanmar:{std:["MMT",6.5],long:"(UTC+06:30) Yangon (Rangoon)"},"Cocos Islands":{std:["CCT",6.5]},Davis:{std:["DAVT",7]},Hovd:{std:["HOVT",7],long:"(UTC+07:00) Hovd"},Novosibirsk:{std:["NOVT",7],long:"(UTC+07:00) Novosibirsk"},"Christmas Island":{std:["CXT",7]},"Brunei Darussalam":{std:["BNT",8]},"Hong Kong":{std:["HKT",8]},Irkutsk:{std:["IRKT",8],long:"(UTC+08:00) Irkutsk"},"Central Indonesia":{std:["WITA",8]},Philippine:{std:["PHST",8]},Singapore:{std:["SGT",8],long:"(UTC+08:00) Kuala Lumpur, Singapore"},Taipei:{std:["CST",8],long:"(UTC+08:00) Taipei"},"Western Australia":{std:["AWST",8],long:"(UTC+08:00) Perth"},"Australian Central Western":{std:["ACWST",8.75],long:"(UTC+08:45) Eucla"},"East Timor":{std:["TLT",9]},"Eastern Indonesia":{std:["WIT",9]},Japan:{std:["JST",9],long:"(UTC+09:00) Osaka, Sapporo, Tokyo"},Palau:{std:["PWT",9]},"Australian Central":{dupe:!0,std:["ACST",9.5]},"Dumont-d’Urville":{std:["CLST",10]},Chuuk:{std:["CHUT",10]},"Lord Howe":{std:["LHST",10.5],dst:["LHDT",11.5],long:"(UTC+10:30) Lord Howe Island"},Casey:{std:["CAST",11],dst:["CAST",8,"Casey Summer Time"]},Magadan:{std:["MAGT",11],long:"(UTC+11:00) Magadan"},Sakhalin:{std:["SAKT",11],long:"(UTC+11:00) Sakhalin"},Srednekolymsk:{std:["SRET",11],long:"(UTC+11:00) Chokurdakh"},Vanuatu:{std:["VUT",11]},"Solomon Islands":{std:["SBT",11]},Kosrae:{std:["KOST",11]},"New Caledonia":{std:["NCT",11]},Ponape:{std:["PONT",11]},Anadyr:{std:["ANAT",12],long:"(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky"},"Petropavlovsk-Kamchatski":{std:["PETT",12],long:"(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky"},Fiji:{std:["FJT",12],dst:["FJT",13,"Fiji Summer Time"],long:"(UTC+12:00) Fiji"},Tuvalu:{std:["TVT",12]},Nauru:{std:["NRT",12]},"Norfolk Island":{std:["NFT",12],dst:["NFDT",11],long:"(UTC+11:00) Norfolk Island"},"Gilbert Islands":{std:["GILT",12]},"Wake Island":{std:["WAKT",12]},"Wallis & Futuna":{std:["WFT",12]},Chatham:{std:["CHAST",12.75],dst:["CHADT",13.75],long:"(UTC+12:45) Chatham Islands"},"West Samoa":{std:["WST",13],dst:["WST",14,"West Samoa Summer Time"]},"Phoenix Islands":{std:["PHOT",13]},Tokelau:{std:["TKT",13]},Tonga:{std:["TOT",13],long:"(UTC+13:00) Nuku'alofa"},"Line Islands":{std:["LINT",14],long:"(UTC+14:00) Kiritimati Island"},Niue:{std:["NUT",-11]},"Cook Islands":{std:["CKT",-10]},Tahiti:{std:["TAHT",-10]},Marquesas:{std:["MART",-9.5],long:"(UTC-09:30) Marquesas Islands"},"Aleutian Standard":{iso:"(UTC-10:00) Aleutian Islands",std:["HST",-10],dst:["HDT",-9,"Hawaii Daylight Time"]},Gambier:{std:["GAMT",-9],long:"(UTC-09:00) Coordinated Universal Time-09"},Pitcairn:{std:["PST",-8],long:"(UTC-08:00) Coordinated Universal Time-08"},"Northwest Mexico":{std:["HNNOMX",-6],dst:["HENOMX",-5],long:"(UTC-08:00) Baja California"},"Easter Island":{std:["EAST",-6],dst:["EASST",-5,"Easter Island Summer Time"],long:"(UTC-06:00) Easter Island"},Ecuador:{std:["ECT",-5]},Cuba:{std:["HNCU",-5],dst:["HECU",-4],long:"(UTC-05:00) Havana"},Peru:{std:["PET",-5]},Paraguay:{std:["PYT",-4],dst:["PYST",-3,"Paraguay Summer Time"],long:"(UTC-04:00) Asuncion"},Venezuela:{std:["VET",-4],long:"(UTC-04:00) Caracas"},Guyana:{std:["GYT",-4]},Bolivia:{std:["BOT",-4]},Newfoundland:{std:["HNTN",-3.5],dst:["HETN",-2.5],long:"(UTC-03:30) Newfoundland"},"French Guiana":{std:["GFT",-3]},"West Greenland":{std:["WGT",-3],dst:["WGST",-2,"West Greenland Summer Time"],long:"(UTC-03:00) Greenland"},"St. Pierre & Miquelon":{std:["HNPM",-3],dst:["HEPM",-2],long:"(UTC-03:00) Saint Pierre and Miquelon"},Uruguay:{std:["UYT",-3],long:"(UTC-03:00) Montevideo"},Suriname:{std:["SRT",-3]},"Falkland Islands":{std:["FKST",-3]},"Fernando de Noronha":{std:["FNT",-2]},"South Georgia":{std:["GST",-2]},Azores:{std:["AZOT",-1],dst:["AZOST",0,"Azores Summer Time"],long:"(UTC-01:00) Azores"},"Cape Verde":{std:["CVT",-1],long:"(UTC-01:00) Cabo Verde Is."}};for(let e=0;e<=14;e+=1)$i[`gmt-${e}`]={name:`Etc/GMT-${e}`,std:[`GMT-${e}`,e],long:`(UTC-${e}:00) Coordinated Universal Time`},$i[`gmt+${e}`]={name:`Etc/GMT+${e}`,std:[`GMT+${e}`,-e],long:`(UTC+${e}:00) Coordinated Universal Time`};const Zx=function(e){if(!e)return null;if(!an[e])return console.error(`missing id ${e}`),null;let n=an[e].meta;$i[n]||console.error(`missing tz-meta ${n}`);let t=$i[n]||{},r=null;if(an[e].dst&&t.dst){let[l,u,c]=t.dst;c=c||`${n} Daylight Time`;let[d,h]=an[e].dst||[];r={abbr:l,offset:u,name:c,start:d,end:h}}let[a,o]=t.std,i=t.name||`${n} Time`,s=t.long||`(UTC+${o}:00) ${i}`;return{name:i,iana:e,standard:{abbr:a,offset:o,name:t.name||`${n} Standard Time`},daylight:r||null,long:s}};var Jx=Zx,eS="1.5.2";const Dh=function(e){let n=Xx(e)||[];return typeof n=="string"&&(n=[n]),n=n.map(t=>Jx(t)),n};Dh.prototype.version=eS;var nS=Object.defineProperty,Fi=Object.getOwnPropertySymbols,jh=Object.prototype.hasOwnProperty,Nh=Object.prototype.propertyIsEnumerable,ip=(e,n,t)=>n in e?nS(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,tS=(e,n)=>{for(var t in n||(n={}))jh.call(n,t)&&ip(e,t,n[t]);if(Fi)for(var t of Fi(n))Nh.call(n,t)&&ip(e,t,n[t]);return e},rS=(e,n)=>{var t={};for(var r in e)jh.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&Fi)for(var r of Fi(e))n.indexOf(r)<0&&Nh.call(e,r)&&(t[r]=e[r]);return t},aS={"Pacific/Midway":"Midway Island, Samoa","Pacific/Honolulu":"Hawaii","America/Juneau":"Alaska","America/Boise":"Mountain Time","America/Dawson":"Dawson, Yukon","America/Chihuahua":"Chihuahua, La Paz, Mazatlan","America/Phoenix":"Arizona","America/Chicago":"Central Time","America/Regina":"Saskatchewan","America/Mexico_City":"Guadalajara, Mexico City, Monterrey","America/Belize":"Central America","America/Detroit":"Eastern Time","America/Bogota":"Bogota, Lima, Quito","America/Caracas":"Caracas, La Paz","America/Santiago":"Santiago","America/St_Johns":"Newfoundland and Labrador","America/Sao_Paulo":"Brasilia","America/Tijuana":"Tijuana","America/Montevideo":"Montevideo","America/Argentina/Buenos_Aires":"Buenos Aires, Georgetown","America/Godthab":"Greenland","America/Los_Angeles":"Pacific Time","Atlantic/Azores":"Azores","Atlantic/Cape_Verde":"Cape Verde Islands",GMT:"UTC","Europe/London":"Edinburgh, London","Europe/Dublin":"Dublin","Europe/Lisbon":"Lisbon","Africa/Casablanca":"Casablanca, Monrovia","Atlantic/Canary":"Canary Islands","Europe/Belgrade":"Belgrade, Bratislava, Budapest, Ljubljana, Prague","Europe/Sarajevo":"Sarajevo, Skopje, Warsaw, Zagreb","Europe/Brussels":"Brussels, Copenhagen, Madrid, Paris","Europe/Amsterdam":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna","Africa/Algiers":"West Central Africa","Europe/Bucharest":"Bucharest","Africa/Cairo":"Cairo","Europe/Helsinki":"Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius","Europe/Athens":"Athens","Asia/Jerusalem":"Jerusalem","Africa/Harare":"Harare, Pretoria","Europe/Moscow":"Istanbul, Minsk, Moscow, St. Petersburg, Volgograd","Asia/Kuwait":"Kuwait, Riyadh","Africa/Nairobi":"Nairobi","Asia/Baghdad":"Baghdad","Asia/Tehran":"Tehran","Asia/Dubai":"Abu Dhabi, Muscat","Asia/Baku":"Baku, Tbilisi, Yerevan","Asia/Kabul":"Kabul","Asia/Yekaterinburg":"Ekaterinburg","Asia/Karachi":"Islamabad, Karachi, Tashkent","Asia/Kolkata":"Chennai, Kolkata, Mumbai, New Delhi","Asia/Kathmandu":"Kathmandu","Asia/Dhaka":"Astana, Dhaka","Asia/Colombo":"Sri Jayawardenepura","Asia/Almaty":"Almaty, Novosibirsk","Asia/Rangoon":"Yangon Rangoon","Asia/Bangkok":"Bangkok, Hanoi, Jakarta","Asia/Krasnoyarsk":"Krasnoyarsk","Asia/Shanghai":"Beijing, Chongqing, Hong Kong SAR, Urumqi","Asia/Kuala_Lumpur":"Kuala Lumpur, Singapore","Asia/Taipei":"Taipei","Australia/Perth":"Perth","Asia/Irkutsk":"Irkutsk, Ulaanbaatar","Asia/Seoul":"Seoul","Asia/Tokyo":"Osaka, Sapporo, Tokyo","Asia/Yakutsk":"Yakutsk","Australia/Darwin":"Darwin","Australia/Adelaide":"Adelaide","Australia/Sydney":"Canberra, Melbourne, Sydney","Australia/Brisbane":"Brisbane","Australia/Hobart":"Hobart","Asia/Vladivostok":"Vladivostok","Pacific/Guam":"Guam, Port Moresby","Asia/Magadan":"Magadan, Solomon Islands, New Caledonia","Asia/Kamchatka":"Kamchatka, Marshall Islands","Pacific/Fiji":"Fiji Islands","Pacific/Auckland":"Auckland, Wellington","Pacific/Tongatapu":"Nuku'alofa"},Rh=aS;function oS({timezones:e=Rh,labelStyle:n="original",displayValue:t="GMT",currentDatetime:r}){const a=S.useMemo(()=>Object.entries(e).map(l=>{var u,c,d,h;try{const y=(r?Oe(r):Oe.now()).goto(l[0]),g=y.isDST()?"daylight":"standard",m=y.timezone(),b=Dh(l[0]),f=(c=(u=b==null?void 0:b[0])==null?void 0:u[g])==null?void 0:c.abbr,p=(h=(d=b==null?void 0:b[0])==null?void 0:d[g])==null?void 0:h.name,v=m.current.offset*60,k=`${v/60^0}:${v%60===0?"00":Math.abs(v%60)}`,x=`(${t}${k.includes("-")?k:`+${k}`}) ${l[1]}`;let C="";switch(n){case"original":C=x;break;case"altName":C=`${x} ${p?`(${p})`:""}`;break;case"abbrev":C=`${x} ${f?`(${f})`:""}`;break;case"offsetHidden":C=`${x.replace(/^\(.*?\)\s*/,"")}`;break;default:C=`${x}`}return{value:m.name,label:C,offset:m.current.offset,abbrev:f,altName:p}}catch{return null}}).filter(Boolean).sort((l,u)=>l.offset-u.offset),[n,e,r]),o=l=>{var u,c;let d;try{d=(r?Oe(r):Oe.now()).goto(l)}catch{d=(r?Oe(r):Oe.now()).goto("GMT")}return(c=(u=a.filter(h=>h.offset===d.timezone().current.offset).map(h=>{let y=0;return d.timezones[h.value.toLowerCase()]&&!!d.timezones[h.value.toLowerCase()].dst===d.timezone().hasDst?(h.value.toLowerCase().indexOf(d.tz.substring(d.tz.indexOf("/")+1))!==-1&&(y+=8),h.label.toLowerCase().indexOf(d.tz.substring(d.tz.indexOf("/")+1))!==-1&&(y+=4),h.value.toLowerCase().indexOf(d.tz.substring(0,d.tz.indexOf("/")))!==-1&&(y+=2),y+=1):h.value==="GMT"&&(y+=1),{tz:h,score:y}}).sort((h,y)=>y.score-h.score))==null?void 0:u[0])==null?void 0:c.tz};function i(l){return typeof l=="object"&&!Array.isArray(l)&&l!==null}return{options:a,parseTimezone:l=>typeof l=="string"?a.find(u=>u.value===l)||l.indexOf("/")!==-1&&o(l):i(l)&&!l.label?a.find(u=>u.value===l.value):l}}var iS=e=>{var n=e,{value:t,onBlur:r,onChange:a,labelStyle:o,displayValue:i,timezones:s,currentDatetime:l}=n,u=rS(n,["value","onBlur","onChange","labelStyle","displayValue","timezones","currentDatetime"]);const{options:c,parseTimezone:d}=oS({timezones:s,labelStyle:o,displayValue:i,currentDatetime:l}),h=y=>{a&&a(y)};return E.jsx($w,tS({value:d(t),onChange:h,options:c,onBlur:r},u))};function lS({onSubmit:e,position:n,setPosition:t,days:r,setDays:a,timezone:o,setTimezone:i,isLoading:s}){const l=d=>{d.preventDefault(),e(n.lat,n.lng,r)},u=()=>{a(Math.min(16,r+1))},c=()=>{a(Math.max(1,r-1))};return E.jsxs("form",{onSubmit:l,className:" space-y-6 rounded-l ",children:[E.jsxs("div",{className:"relative ",children:[E.jsx(Xo,{htmlFor:"latitude",className:" text-sm font-medium text-theme-medium mb-1 block ",children:"Latitude"}),E.jsx(Qo,{id:"lat",type:"number",step:"0.01",min:"-90",max:"90",className:"border-theme-medium/20 focus-visible:ring-theme-medium bg-white",value:n.lat,onChange:d=>t({...n,lat:parseFloat(d.target.value)}),required:!0})]}),E.jsxs("div",{className:"relative",children:[E.jsx(Xo,{htmlFor:"longitude",className:"text-sm font-medium text-theme-medium mb-1 block",children:"Longitude"}),E.jsx(Qo,{id:"lng",type:"number",step:"0.01",min:"-180",max:"180",className:"border-theme-medium/20 focus-visible:ring-theme-medium bg-white",value:n.lng,onChange:d=>t({...n,lng:parseFloat(d.target.value)}),required:!0})]}),E.jsxs("div",{className:"relative",children:[E.jsx(Xo,{htmlFor:"days",className:"text-sm font-medium text-theme-medium mb-1 block",children:"Days"}),E.jsxs("div",{className:"relative",children:[E.jsx(Qo,{id:"days",type:"number",value:r,onChange:d=>a(parseInt(d.target.value)),className:"border-theme-medium/20 focus-visible:ring-theme-medium bg-white pr-10",required:!0}),E.jsxs("div",{className:"absolute right-2 top-1/2 -translate-y-1/2 flex flex-col ",children:[E.jsx("button",{type:"button",onClick:u,className:" border-0 p-0 text-stone-400/[0.6] bg-transparent hover:text-stone-600 transition-colors p-1 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0",children:E.jsx(ty,{className:"h-5 w-5"})}),E.jsx("button",{type:"button",onClick:c,className:" border-0 p-0 text-stone-400/[0.6] bg-transparent hover:text-stone-600 transition-colors p-1 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 ","aria-label":"Increase days",children:E.jsx(ny,{className:"h-5 w-5"})})]})]})]}),E.jsxs("div",{className:"relative",children:[E.jsx("label",{htmlFor:"timezone",className:"text-sm font-medium text-theme-medium mb-1 block",children:"Time Zone"}),E.jsx(iS,{value:o,onChange:d=>i(d.value),timezones:Rh,required:!0})]}),s?E.jsx("div",{className:"flex justify-center items-center",children:E.jsx(Fy,{color:"#580d0f",size:"small",text:"Loading",textColor:"#580d0f"})}):E.jsx("button",{type:"submit",className:`w-full rounded-lg bg-theme-dark px-4 py-3 font-medium text-white transition-colors 
                hover:bg-theme-dark/90 focus:outline-none focus:ring-0 focus:ring-theme-dark `,children:"Get Forecast"})]})}function sS(){const[e,n]=S.useState([]);Math.max(...e.map(h=>h.risk_index));const[t,r]=S.useState({lat:10.14,lng:-100.29}),[a,o]=S.useState(7),[i,s]=S.useState("GMT-10"),[l,u]=S.useState(!1);S.useEffect(()=>{document.title="Mildew Index"},[]);const c=()=>{const h={lat:t.lat,long:t.lng,timezone:i,days:a};console.log(h),u(!0);try{const y=fetch("/mildex_forecast",{method:"POST",headers:{accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(h)}).then(g=>g.json()).then(g=>{n(g),console.log(g),u(!1)}).catch(g=>{console.log(g),u(!1)})}catch(y){console.log(y),u(!1)}},d=(h,y,g)=>{r({lat:h,lng:y}),o(g),c()};return E.jsx(E.Fragment,{children:E.jsx("div",{className:"min-h-screen bg-theme-light p-8",children:E.jsxs("div",{className:"mx-auto  max-w-7xl",children:[E.jsx(mv,{}),E.jsxs("div",{className:`grid gap-8 ${e.length<=0?"grid-cols-1":"md:grid-cols-[400px,1fr]"}`,children:[E.jsxs(zc,{className:"bg-theme-light shadow-md border border-theme-medium/20",children:[E.jsx(Pm,{children:E.jsx(Tm,{className:"text-theme-dark",children:"Location Details"})}),E.jsx(Mc,{className:"",children:E.jsx(lS,{onSubmit:d,position:t,setPosition:r,days:a,setDays:o,timezone:i,setTimezone:s,isLoading:l})})]}),e.length>0&&E.jsx(iy,{items:e})]})]})})})}ms.createRoot(document.getElementById("root")).render(E.jsx(X.StrictMode,{children:E.jsx(sS,{})}));
