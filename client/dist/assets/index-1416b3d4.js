function BN(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var BS={exports:{}},nf={},zS={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ec=Symbol.for("react.element"),zN=Symbol.for("react.portal"),qN=Symbol.for("react.fragment"),GN=Symbol.for("react.strict_mode"),WN=Symbol.for("react.profiler"),KN=Symbol.for("react.provider"),HN=Symbol.for("react.context"),QN=Symbol.for("react.forward_ref"),YN=Symbol.for("react.suspense"),XN=Symbol.for("react.memo"),JN=Symbol.for("react.lazy"),qE=Symbol.iterator;function ZN(t){return t===null||typeof t!="object"?null:(t=qE&&t[qE]||t["@@iterator"],typeof t=="function"?t:null)}var qS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},GS=Object.assign,WS={};function ka(t,e,n){this.props=t,this.context=e,this.refs=WS,this.updater=n||qS}ka.prototype.isReactComponent={};ka.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ka.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function KS(){}KS.prototype=ka.prototype;function gv(t,e,n){this.props=t,this.context=e,this.refs=WS,this.updater=n||qS}var yv=gv.prototype=new KS;yv.constructor=gv;GS(yv,ka.prototype);yv.isPureReactComponent=!0;var GE=Array.isArray,HS=Object.prototype.hasOwnProperty,vv={current:null},QS={key:!0,ref:!0,__self:!0,__source:!0};function YS(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)HS.call(e,r)&&!QS.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ec,type:t,key:s,ref:o,props:i,_owner:vv.current}}function eD(t,e){return{$$typeof:ec,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _v(t){return typeof t=="object"&&t!==null&&t.$$typeof===ec}function tD(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var WE=/\/+/g;function em(t,e){return typeof t=="object"&&t!==null&&t.key!=null?tD(""+t.key):e.toString(36)}function pd(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ec:case zN:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+em(o,0):r,GE(i)?(n="",t!=null&&(n=t.replace(WE,"$&/")+"/"),pd(i,e,n,"",function(l){return l})):i!=null&&(_v(i)&&(i=eD(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(WE,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",GE(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+em(s,a);o+=pd(s,e,n,u,i)}else if(u=ZN(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+em(s,a++),o+=pd(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Lc(t,e,n){if(t==null)return t;var r=[],i=0;return pd(t,r,"","",function(s){return e.call(n,s,i++)}),r}function nD(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},md={transition:null},rD={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:md,ReactCurrentOwner:vv};se.Children={map:Lc,forEach:function(t,e,n){Lc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Lc(t,function(){e++}),e},toArray:function(t){return Lc(t,function(e){return e})||[]},only:function(t){if(!_v(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=ka;se.Fragment=qN;se.Profiler=WN;se.PureComponent=gv;se.StrictMode=GN;se.Suspense=YN;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rD;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=GS({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vv.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)HS.call(e,u)&&!QS.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:ec,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:HN,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:KN,_context:t},t.Consumer=t};se.createElement=YS;se.createFactory=function(t){var e=YS.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:QN,render:t}};se.isValidElement=_v;se.lazy=function(t){return{$$typeof:JN,_payload:{_status:-1,_result:t},_init:nD}};se.memo=function(t,e){return{$$typeof:XN,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=md.transition;md.transition={};try{t()}finally{md.transition=e}};se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};se.useCallback=function(t,e){return Yt.current.useCallback(t,e)};se.useContext=function(t){return Yt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};se.useEffect=function(t,e){return Yt.current.useEffect(t,e)};se.useId=function(){return Yt.current.useId()};se.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return Yt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};se.useRef=function(t){return Yt.current.useRef(t)};se.useState=function(t){return Yt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return Yt.current.useTransition()};se.version="18.2.0";zS.exports=se;var b=zS.exports;const ea=mv(b),iD=BN({__proto__:null,default:ea},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sD=b,oD=Symbol.for("react.element"),aD=Symbol.for("react.fragment"),uD=Object.prototype.hasOwnProperty,lD=sD.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cD={key:!0,ref:!0,__self:!0,__source:!0};function XS(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)uD.call(e,r)&&!cD.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:oD,type:t,key:s,ref:o,props:i,_owner:lD.current}}nf.Fragment=aD;nf.jsx=XS;nf.jsxs=XS;BS.exports=nf;var k=BS.exports,dg={},JS={exports:{}},In={},ZS={exports:{}},e1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,H){var Q=F.length;F.push(H);e:for(;0<Q;){var E=Q-1>>>1,P=F[E];if(0<i(P,H))F[E]=H,F[Q]=P,Q=E;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],Q=F.pop();if(Q!==H){F[0]=Q;e:for(var E=0,P=F.length,T=P>>>1;E<T;){var O=2*(E+1)-1,q=F[O],K=O+1,Y=F[K];if(0>i(q,Q))K<P&&0>i(Y,q)?(F[E]=Y,F[K]=Q,E=K):(F[E]=q,F[O]=Q,E=O);else if(K<P&&0>i(Y,Q))F[E]=Y,F[K]=Q,E=K;else break e}}return H}function i(F,H){var Q=F.sortIndex-H.sortIndex;return Q!==0?Q:F.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],l=[],c=1,d=null,h=3,f=!1,v=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(F){for(var H=n(l);H!==null;){if(H.callback===null)r(l);else if(H.startTime<=F)r(l),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(l)}}function _(F){if(y=!1,g(F),!v)if(n(u)!==null)v=!0,fn(I);else{var H=n(l);H!==null&&Ge(_,H.startTime-F)}}function I(F,H){v=!1,y&&(y=!1,m(L),L=-1),f=!0;var Q=h;try{for(g(H),d=n(u);d!==null&&(!(d.expirationTime>H)||F&&!Ne());){var E=d.callback;if(typeof E=="function"){d.callback=null,h=d.priorityLevel;var P=E(d.expirationTime<=H);H=t.unstable_now(),typeof P=="function"?d.callback=P:d===n(u)&&r(u),g(H)}else r(u);d=n(u)}if(d!==null)var T=!0;else{var O=n(l);O!==null&&Ge(_,O.startTime-H),T=!1}return T}finally{d=null,h=Q,f=!1}}var S=!1,C=null,L=-1,J=5,z=-1;function Ne(){return!(t.unstable_now()-z<J)}function $e(){if(C!==null){var F=t.unstable_now();z=F;var H=!0;try{H=C(!0,F)}finally{H?Ut():(S=!1,C=null)}}else S=!1}var Ut;if(typeof p=="function")Ut=function(){p($e)};else if(typeof MessageChannel<"u"){var Tr=new MessageChannel,it=Tr.port2;Tr.port1.onmessage=$e,Ut=function(){it.postMessage(null)}}else Ut=function(){w($e,0)};function fn(F){C=F,S||(S=!0,Ut())}function Ge(F,H){L=w(function(){F(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){v||f||(v=!0,fn(I))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(F){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var Q=h;h=H;try{return F()}finally{h=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Q=h;h=F;try{return H()}finally{h=Q}},t.unstable_scheduleCallback=function(F,H,Q){var E=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?E+Q:E):Q=E,F){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=Q+P,F={id:c++,callback:H,priorityLevel:F,startTime:Q,expirationTime:P,sortIndex:-1},Q>E?(F.sortIndex=Q,e(l,F),n(u)===null&&F===n(l)&&(y?(m(L),L=-1):y=!0,Ge(_,Q-E))):(F.sortIndex=P,e(u,F),v||f||(v=!0,fn(I))),F},t.unstable_shouldYield=Ne,t.unstable_wrapCallback=function(F){var H=h;return function(){var Q=h;h=H;try{return F.apply(this,arguments)}finally{h=Q}}}})(e1);ZS.exports=e1;var dD=ZS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t1=b,_n=dD;function D(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n1=new Set,rl={};function eo(t,e){ta(t,e),ta(t+"Capture",e)}function ta(t,e){for(rl[t]=e,t=0;t<e.length;t++)n1.add(e[t])}var $r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hg=Object.prototype.hasOwnProperty,hD=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,KE={},HE={};function fD(t){return hg.call(HE,t)?!0:hg.call(KE,t)?!1:hD.test(t)?HE[t]=!0:(KE[t]=!0,!1)}function pD(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mD(t,e,n,r){if(e===null||typeof e>"u"||pD(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var wv=/[\-:]([a-z])/g;function Ev(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wv,Ev);kt[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wv,Ev);kt[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wv,Ev);kt[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Iv(t,e,n,r){var i=kt.hasOwnProperty(e)?kt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mD(e,n,i,r)&&(n=null),r||i===null?fD(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wr=t1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mc=Symbol.for("react.element"),To=Symbol.for("react.portal"),So=Symbol.for("react.fragment"),Tv=Symbol.for("react.strict_mode"),fg=Symbol.for("react.profiler"),r1=Symbol.for("react.provider"),i1=Symbol.for("react.context"),Sv=Symbol.for("react.forward_ref"),pg=Symbol.for("react.suspense"),mg=Symbol.for("react.suspense_list"),Av=Symbol.for("react.memo"),oi=Symbol.for("react.lazy"),s1=Symbol.for("react.offscreen"),QE=Symbol.iterator;function nu(t){return t===null||typeof t!="object"?null:(t=QE&&t[QE]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,tm;function Tu(t){if(tm===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tm=e&&e[1]||""}return`
`+tm+t}var nm=!1;function rm(t,e){if(!t||nm)return"";nm=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{nm=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Tu(t):""}function gD(t){switch(t.tag){case 5:return Tu(t.type);case 16:return Tu("Lazy");case 13:return Tu("Suspense");case 19:return Tu("SuspenseList");case 0:case 2:case 15:return t=rm(t.type,!1),t;case 11:return t=rm(t.type.render,!1),t;case 1:return t=rm(t.type,!0),t;default:return""}}function gg(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case So:return"Fragment";case To:return"Portal";case fg:return"Profiler";case Tv:return"StrictMode";case pg:return"Suspense";case mg:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case i1:return(t.displayName||"Context")+".Consumer";case r1:return(t._context.displayName||"Context")+".Provider";case Sv:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Av:return e=t.displayName||null,e!==null?e:gg(t.type)||"Memo";case oi:e=t._payload,t=t._init;try{return gg(t(e))}catch{}}return null}function yD(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gg(e);case 8:return e===Tv?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function o1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vD(t){var e=o1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fc(t){t._valueTracker||(t._valueTracker=vD(t))}function a1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=o1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Yd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yg(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function YE(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=bi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function u1(t,e){e=e.checked,e!=null&&Iv(t,"checked",e,!1)}function vg(t,e){u1(t,e);var n=bi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_g(t,e.type,n):e.hasOwnProperty("defaultValue")&&_g(t,e.type,bi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function XE(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _g(t,e,n){(e!=="number"||Yd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Su=Array.isArray;function $o(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+bi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function wg(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(D(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function JE(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(D(92));if(Su(n)){if(1<n.length)throw Error(D(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:bi(n)}}function l1(t,e){var n=bi(e.value),r=bi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ZE(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function c1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eg(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?c1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $c,d1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($c=$c||document.createElement("div"),$c.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$c.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function il(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_D=["Webkit","ms","Moz","O"];Object.keys(Vu).forEach(function(t){_D.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vu[e]=Vu[t]})});function h1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vu.hasOwnProperty(t)&&Vu[t]?(""+e).trim():e+"px"}function f1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=h1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var wD=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ig(t,e){if(e){if(wD[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(D(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(D(61))}if(e.style!=null&&typeof e.style!="object")throw Error(D(62))}}function Tg(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sg=null;function Rv(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ag=null,Uo=null,jo=null;function eI(t){if(t=rc(t)){if(typeof Ag!="function")throw Error(D(280));var e=t.stateNode;e&&(e=uf(e),Ag(t.stateNode,t.type,e))}}function p1(t){Uo?jo?jo.push(t):jo=[t]:Uo=t}function m1(){if(Uo){var t=Uo,e=jo;if(jo=Uo=null,eI(t),e)for(t=0;t<e.length;t++)eI(e[t])}}function g1(t,e){return t(e)}function y1(){}var im=!1;function v1(t,e,n){if(im)return t(e,n);im=!0;try{return g1(t,e,n)}finally{im=!1,(Uo!==null||jo!==null)&&(y1(),m1())}}function sl(t,e){var n=t.stateNode;if(n===null)return null;var r=uf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(D(231,e,typeof n));return n}var Rg=!1;if($r)try{var ru={};Object.defineProperty(ru,"passive",{get:function(){Rg=!0}}),window.addEventListener("test",ru,ru),window.removeEventListener("test",ru,ru)}catch{Rg=!1}function ED(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var Lu=!1,Xd=null,Jd=!1,Pg=null,ID={onError:function(t){Lu=!0,Xd=t}};function TD(t,e,n,r,i,s,o,a,u){Lu=!1,Xd=null,ED.apply(ID,arguments)}function SD(t,e,n,r,i,s,o,a,u){if(TD.apply(this,arguments),Lu){if(Lu){var l=Xd;Lu=!1,Xd=null}else throw Error(D(198));Jd||(Jd=!0,Pg=l)}}function to(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tI(t){if(to(t)!==t)throw Error(D(188))}function AD(t){var e=t.alternate;if(!e){if(e=to(t),e===null)throw Error(D(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return tI(i),t;if(s===r)return tI(i),e;s=s.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?t:e}function w1(t){return t=AD(t),t!==null?E1(t):null}function E1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=E1(t);if(e!==null)return e;t=t.sibling}return null}var I1=_n.unstable_scheduleCallback,nI=_n.unstable_cancelCallback,RD=_n.unstable_shouldYield,PD=_n.unstable_requestPaint,Ke=_n.unstable_now,CD=_n.unstable_getCurrentPriorityLevel,Pv=_n.unstable_ImmediatePriority,T1=_n.unstable_UserBlockingPriority,Zd=_n.unstable_NormalPriority,kD=_n.unstable_LowPriority,S1=_n.unstable_IdlePriority,rf=null,mr=null;function bD(t){if(mr&&typeof mr.onCommitFiberRoot=="function")try{mr.onCommitFiberRoot(rf,t,void 0,(t.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:DD,xD=Math.log,ND=Math.LN2;function DD(t){return t>>>=0,t===0?32:31-(xD(t)/ND|0)|0}var Uc=64,jc=4194304;function Au(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function eh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Au(a):(s&=o,s!==0&&(r=Au(s)))}else o=n&~i,o!==0?r=Au(o):s!==0&&(r=Au(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Gn(e),i=1<<n,r|=t[n],e&=~i;return r}function OD(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VD(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=OD(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Cg(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function A1(){var t=Uc;return Uc<<=1,!(Uc&4194240)&&(Uc=64),t}function sm(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function tc(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gn(e),t[e]=n}function LD(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Gn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Cv(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Gn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function R1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var P1,kv,C1,k1,b1,kg=!1,Bc=[],yi=null,vi=null,_i=null,ol=new Map,al=new Map,ui=[],MD="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rI(t,e){switch(t){case"focusin":case"focusout":yi=null;break;case"dragenter":case"dragleave":vi=null;break;case"mouseover":case"mouseout":_i=null;break;case"pointerover":case"pointerout":ol.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(e.pointerId)}}function iu(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=rc(e),e!==null&&kv(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function FD(t,e,n,r,i){switch(e){case"focusin":return yi=iu(yi,t,e,n,r,i),!0;case"dragenter":return vi=iu(vi,t,e,n,r,i),!0;case"mouseover":return _i=iu(_i,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ol.set(s,iu(ol.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,al.set(s,iu(al.get(s)||null,t,e,n,r,i)),!0}return!1}function x1(t){var e=gs(t.target);if(e!==null){var n=to(e);if(n!==null){if(e=n.tag,e===13){if(e=_1(n),e!==null){t.blockedOn=e,b1(t.priority,function(){C1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gd(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bg(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sg=r,n.target.dispatchEvent(r),Sg=null}else return e=rc(n),e!==null&&kv(e),t.blockedOn=n,!1;e.shift()}return!0}function iI(t,e,n){gd(t)&&n.delete(e)}function $D(){kg=!1,yi!==null&&gd(yi)&&(yi=null),vi!==null&&gd(vi)&&(vi=null),_i!==null&&gd(_i)&&(_i=null),ol.forEach(iI),al.forEach(iI)}function su(t,e){t.blockedOn===e&&(t.blockedOn=null,kg||(kg=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,$D)))}function ul(t){function e(i){return su(i,t)}if(0<Bc.length){su(Bc[0],t);for(var n=1;n<Bc.length;n++){var r=Bc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yi!==null&&su(yi,t),vi!==null&&su(vi,t),_i!==null&&su(_i,t),ol.forEach(e),al.forEach(e),n=0;n<ui.length;n++)r=ui[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ui.length&&(n=ui[0],n.blockedOn===null);)x1(n),n.blockedOn===null&&ui.shift()}var Bo=Wr.ReactCurrentBatchConfig,th=!0;function UD(t,e,n,r){var i=pe,s=Bo.transition;Bo.transition=null;try{pe=1,bv(t,e,n,r)}finally{pe=i,Bo.transition=s}}function jD(t,e,n,r){var i=pe,s=Bo.transition;Bo.transition=null;try{pe=4,bv(t,e,n,r)}finally{pe=i,Bo.transition=s}}function bv(t,e,n,r){if(th){var i=bg(t,e,n,r);if(i===null)mm(t,e,r,nh,n),rI(t,r);else if(FD(i,t,e,n,r))r.stopPropagation();else if(rI(t,r),e&4&&-1<MD.indexOf(t)){for(;i!==null;){var s=rc(i);if(s!==null&&P1(s),s=bg(t,e,n,r),s===null&&mm(t,e,r,nh,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mm(t,e,r,null,n)}}var nh=null;function bg(t,e,n,r){if(nh=null,t=Rv(r),t=gs(t),t!==null)if(e=to(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nh=t,null}function N1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(CD()){case Pv:return 1;case T1:return 4;case Zd:case kD:return 16;case S1:return 536870912;default:return 16}default:return 16}}var hi=null,xv=null,yd=null;function D1(){if(yd)return yd;var t,e=xv,n=e.length,r,i="value"in hi?hi.value:hi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return yd=i.slice(t,1<r?1-r:void 0)}function vd(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zc(){return!0}function sI(){return!1}function Tn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zc:sI,this.isPropagationStopped=sI,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zc)},persist:function(){},isPersistent:zc}),e}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nv=Tn(ba),nc=Me({},ba,{view:0,detail:0}),BD=Tn(nc),om,am,ou,sf=Me({},nc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dv,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ou&&(ou&&t.type==="mousemove"?(om=t.screenX-ou.screenX,am=t.screenY-ou.screenY):am=om=0,ou=t),om)},movementY:function(t){return"movementY"in t?t.movementY:am}}),oI=Tn(sf),zD=Me({},sf,{dataTransfer:0}),qD=Tn(zD),GD=Me({},nc,{relatedTarget:0}),um=Tn(GD),WD=Me({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),KD=Tn(WD),HD=Me({},ba,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),QD=Tn(HD),YD=Me({},ba,{data:0}),aI=Tn(YD),XD={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JD={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ZD={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eO(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ZD[t])?!!e[t]:!1}function Dv(){return eO}var tO=Me({},nc,{key:function(t){if(t.key){var e=XD[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vd(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?JD[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dv,charCode:function(t){return t.type==="keypress"?vd(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vd(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nO=Tn(tO),rO=Me({},sf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uI=Tn(rO),iO=Me({},nc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dv}),sO=Tn(iO),oO=Me({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),aO=Tn(oO),uO=Me({},sf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lO=Tn(uO),cO=[9,13,27,32],Ov=$r&&"CompositionEvent"in window,Mu=null;$r&&"documentMode"in document&&(Mu=document.documentMode);var dO=$r&&"TextEvent"in window&&!Mu,O1=$r&&(!Ov||Mu&&8<Mu&&11>=Mu),lI=String.fromCharCode(32),cI=!1;function V1(t,e){switch(t){case"keyup":return cO.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ao=!1;function hO(t,e){switch(t){case"compositionend":return L1(e);case"keypress":return e.which!==32?null:(cI=!0,lI);case"textInput":return t=e.data,t===lI&&cI?null:t;default:return null}}function fO(t,e){if(Ao)return t==="compositionend"||!Ov&&V1(t,e)?(t=D1(),yd=xv=hi=null,Ao=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return O1&&e.locale!=="ko"?null:e.data;default:return null}}var pO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dI(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!pO[t.type]:e==="textarea"}function M1(t,e,n,r){p1(r),e=rh(e,"onChange"),0<e.length&&(n=new Nv("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fu=null,ll=null;function mO(t){H1(t,0)}function of(t){var e=Co(t);if(a1(e))return t}function gO(t,e){if(t==="change")return e}var F1=!1;if($r){var lm;if($r){var cm="oninput"in document;if(!cm){var hI=document.createElement("div");hI.setAttribute("oninput","return;"),cm=typeof hI.oninput=="function"}lm=cm}else lm=!1;F1=lm&&(!document.documentMode||9<document.documentMode)}function fI(){Fu&&(Fu.detachEvent("onpropertychange",$1),ll=Fu=null)}function $1(t){if(t.propertyName==="value"&&of(ll)){var e=[];M1(e,ll,t,Rv(t)),v1(mO,e)}}function yO(t,e,n){t==="focusin"?(fI(),Fu=e,ll=n,Fu.attachEvent("onpropertychange",$1)):t==="focusout"&&fI()}function vO(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return of(ll)}function _O(t,e){if(t==="click")return of(e)}function wO(t,e){if(t==="input"||t==="change")return of(e)}function EO(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:EO;function cl(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hg.call(e,i)||!Hn(t[i],e[i]))return!1}return!0}function pI(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mI(t,e){var n=pI(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pI(n)}}function U1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?U1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function j1(){for(var t=window,e=Yd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yd(t.document)}return e}function Vv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IO(t){var e=j1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&U1(n.ownerDocument.documentElement,n)){if(r!==null&&Vv(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=mI(n,s);var o=mI(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var TO=$r&&"documentMode"in document&&11>=document.documentMode,Ro=null,xg=null,$u=null,Ng=!1;function gI(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ng||Ro==null||Ro!==Yd(r)||(r=Ro,"selectionStart"in r&&Vv(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$u&&cl($u,r)||($u=r,r=rh(xg,"onSelect"),0<r.length&&(e=new Nv("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ro)))}function qc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Po={animationend:qc("Animation","AnimationEnd"),animationiteration:qc("Animation","AnimationIteration"),animationstart:qc("Animation","AnimationStart"),transitionend:qc("Transition","TransitionEnd")},dm={},B1={};$r&&(B1=document.createElement("div").style,"AnimationEvent"in window||(delete Po.animationend.animation,delete Po.animationiteration.animation,delete Po.animationstart.animation),"TransitionEvent"in window||delete Po.transitionend.transition);function af(t){if(dm[t])return dm[t];if(!Po[t])return t;var e=Po[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in B1)return dm[t]=e[n];return t}var z1=af("animationend"),q1=af("animationiteration"),G1=af("animationstart"),W1=af("transitionend"),K1=new Map,yI="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gi(t,e){K1.set(t,e),eo(e,[t])}for(var hm=0;hm<yI.length;hm++){var fm=yI[hm],SO=fm.toLowerCase(),AO=fm[0].toUpperCase()+fm.slice(1);Gi(SO,"on"+AO)}Gi(z1,"onAnimationEnd");Gi(q1,"onAnimationIteration");Gi(G1,"onAnimationStart");Gi("dblclick","onDoubleClick");Gi("focusin","onFocus");Gi("focusout","onBlur");Gi(W1,"onTransitionEnd");ta("onMouseEnter",["mouseout","mouseover"]);ta("onMouseLeave",["mouseout","mouseover"]);ta("onPointerEnter",["pointerout","pointerover"]);ta("onPointerLeave",["pointerout","pointerover"]);eo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));eo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));eo("onBeforeInput",["compositionend","keypress","textInput","paste"]);eo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));eo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));eo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ru="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RO=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ru));function vI(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,SD(r,e,void 0,t),t.currentTarget=null}function H1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;vI(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;vI(i,a,l),s=u}}}if(Jd)throw t=Pg,Jd=!1,Pg=null,t}function Ie(t,e){var n=e[Mg];n===void 0&&(n=e[Mg]=new Set);var r=t+"__bubble";n.has(r)||(Q1(e,t,2,!1),n.add(r))}function pm(t,e,n){var r=0;e&&(r|=4),Q1(n,t,r,e)}var Gc="_reactListening"+Math.random().toString(36).slice(2);function dl(t){if(!t[Gc]){t[Gc]=!0,n1.forEach(function(n){n!=="selectionchange"&&(RO.has(n)||pm(n,!1,t),pm(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gc]||(e[Gc]=!0,pm("selectionchange",!1,e))}}function Q1(t,e,n,r){switch(N1(e)){case 1:var i=UD;break;case 4:i=jD;break;default:i=bv}n=i.bind(null,e,n,t),i=void 0,!Rg||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mm(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=gs(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}v1(function(){var l=s,c=Rv(n),d=[];e:{var h=K1.get(t);if(h!==void 0){var f=Nv,v=t;switch(t){case"keypress":if(vd(n)===0)break e;case"keydown":case"keyup":f=nO;break;case"focusin":v="focus",f=um;break;case"focusout":v="blur",f=um;break;case"beforeblur":case"afterblur":f=um;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=oI;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=qD;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=sO;break;case z1:case q1:case G1:f=KD;break;case W1:f=aO;break;case"scroll":f=BD;break;case"wheel":f=lO;break;case"copy":case"cut":case"paste":f=QD;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=uI}var y=(e&4)!==0,w=!y&&t==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var p=l,g;p!==null;){g=p;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,m!==null&&(_=sl(p,m),_!=null&&y.push(hl(p,_,g)))),w)break;p=p.return}0<y.length&&(h=new f(h,v,null,n,c),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",h&&n!==Sg&&(v=n.relatedTarget||n.fromElement)&&(gs(v)||v[Ur]))break e;if((f||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,f?(v=n.relatedTarget||n.toElement,f=l,v=v?gs(v):null,v!==null&&(w=to(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(f=null,v=l),f!==v)){if(y=oI,_="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=uI,_="onPointerLeave",m="onPointerEnter",p="pointer"),w=f==null?h:Co(f),g=v==null?h:Co(v),h=new y(_,p+"leave",f,n,c),h.target=w,h.relatedTarget=g,_=null,gs(c)===l&&(y=new y(m,p+"enter",v,n,c),y.target=g,y.relatedTarget=w,_=y),w=_,f&&v)t:{for(y=f,m=v,p=0,g=y;g;g=fo(g))p++;for(g=0,_=m;_;_=fo(_))g++;for(;0<p-g;)y=fo(y),p--;for(;0<g-p;)m=fo(m),g--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=fo(y),m=fo(m)}y=null}else y=null;f!==null&&_I(d,h,f,y,!1),v!==null&&w!==null&&_I(d,w,v,y,!0)}}e:{if(h=l?Co(l):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var I=gO;else if(dI(h))if(F1)I=wO;else{I=vO;var S=yO}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=_O);if(I&&(I=I(t,l))){M1(d,I,n,c);break e}S&&S(t,h,l),t==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&_g(h,"number",h.value)}switch(S=l?Co(l):window,t){case"focusin":(dI(S)||S.contentEditable==="true")&&(Ro=S,xg=l,$u=null);break;case"focusout":$u=xg=Ro=null;break;case"mousedown":Ng=!0;break;case"contextmenu":case"mouseup":case"dragend":Ng=!1,gI(d,n,c);break;case"selectionchange":if(TO)break;case"keydown":case"keyup":gI(d,n,c)}var C;if(Ov)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Ao?V1(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(O1&&n.locale!=="ko"&&(Ao||L!=="onCompositionStart"?L==="onCompositionEnd"&&Ao&&(C=D1()):(hi=c,xv="value"in hi?hi.value:hi.textContent,Ao=!0)),S=rh(l,L),0<S.length&&(L=new aI(L,t,null,n,c),d.push({event:L,listeners:S}),C?L.data=C:(C=L1(n),C!==null&&(L.data=C)))),(C=dO?hO(t,n):fO(t,n))&&(l=rh(l,"onBeforeInput"),0<l.length&&(c=new aI("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:l}),c.data=C))}H1(d,e)})}function hl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=sl(t,n),s!=null&&r.unshift(hl(t,s,i)),s=sl(t,e),s!=null&&r.push(hl(t,s,i))),t=t.return}return r}function fo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _I(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=sl(n,s),u!=null&&o.unshift(hl(n,u,a))):i||(u=sl(n,s),u!=null&&o.push(hl(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var PO=/\r\n?/g,CO=/\u0000|\uFFFD/g;function wI(t){return(typeof t=="string"?t:""+t).replace(PO,`
`).replace(CO,"")}function Wc(t,e,n){if(e=wI(e),wI(t)!==e&&n)throw Error(D(425))}function ih(){}var Dg=null,Og=null;function Vg(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lg=typeof setTimeout=="function"?setTimeout:void 0,kO=typeof clearTimeout=="function"?clearTimeout:void 0,EI=typeof Promise=="function"?Promise:void 0,bO=typeof queueMicrotask=="function"?queueMicrotask:typeof EI<"u"?function(t){return EI.resolve(null).then(t).catch(xO)}:Lg;function xO(t){setTimeout(function(){throw t})}function gm(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ul(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ul(e)}function wi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function II(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xa=Math.random().toString(36).slice(2),rr="__reactFiber$"+xa,fl="__reactProps$"+xa,Ur="__reactContainer$"+xa,Mg="__reactEvents$"+xa,NO="__reactListeners$"+xa,DO="__reactHandles$"+xa;function gs(t){var e=t[rr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ur]||n[rr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=II(t);t!==null;){if(n=t[rr])return n;t=II(t)}return e}t=n,n=t.parentNode}return null}function rc(t){return t=t[rr]||t[Ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Co(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function uf(t){return t[fl]||null}var Fg=[],ko=-1;function Wi(t){return{current:t}}function Re(t){0>ko||(t.current=Fg[ko],Fg[ko]=null,ko--)}function we(t,e){ko++,Fg[ko]=t.current,t.current=e}var xi={},Ft=Wi(xi),un=Wi(!1),Ls=xi;function na(t,e){var n=t.type.contextTypes;if(!n)return xi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ln(t){return t=t.childContextTypes,t!=null}function sh(){Re(un),Re(Ft)}function TI(t,e,n){if(Ft.current!==xi)throw Error(D(168));we(Ft,e),we(un,n)}function Y1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(D(108,yD(t)||"Unknown",i));return Me({},n,r)}function oh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xi,Ls=Ft.current,we(Ft,t),we(un,un.current),!0}function SI(t,e,n){var r=t.stateNode;if(!r)throw Error(D(169));n?(t=Y1(t,e,Ls),r.__reactInternalMemoizedMergedChildContext=t,Re(un),Re(Ft),we(Ft,t)):Re(un),we(un,n)}var Cr=null,lf=!1,ym=!1;function X1(t){Cr===null?Cr=[t]:Cr.push(t)}function OO(t){lf=!0,X1(t)}function Ki(){if(!ym&&Cr!==null){ym=!0;var t=0,e=pe;try{var n=Cr;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Cr=null,lf=!1}catch(i){throw Cr!==null&&(Cr=Cr.slice(t+1)),I1(Pv,Ki),i}finally{pe=e,ym=!1}}return null}var bo=[],xo=0,ah=null,uh=0,Rn=[],Pn=0,Ms=null,br=1,xr="";function os(t,e){bo[xo++]=uh,bo[xo++]=ah,ah=t,uh=e}function J1(t,e,n){Rn[Pn++]=br,Rn[Pn++]=xr,Rn[Pn++]=Ms,Ms=t;var r=br;t=xr;var i=32-Gn(r)-1;r&=~(1<<i),n+=1;var s=32-Gn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,br=1<<32-Gn(e)+i|n<<i|r,xr=s+t}else br=1<<s|n<<i|r,xr=t}function Lv(t){t.return!==null&&(os(t,1),J1(t,1,0))}function Mv(t){for(;t===ah;)ah=bo[--xo],bo[xo]=null,uh=bo[--xo],bo[xo]=null;for(;t===Ms;)Ms=Rn[--Pn],Rn[Pn]=null,xr=Rn[--Pn],Rn[Pn]=null,br=Rn[--Pn],Rn[Pn]=null}var vn=null,gn=null,ke=!1,zn=null;function Z1(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function AI(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,gn=wi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ms!==null?{id:br,overflow:xr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,gn=null,!0):!1;default:return!1}}function $g(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ug(t){if(ke){var e=gn;if(e){var n=e;if(!AI(t,e)){if($g(t))throw Error(D(418));e=wi(n.nextSibling);var r=vn;e&&AI(t,e)?Z1(r,n):(t.flags=t.flags&-4097|2,ke=!1,vn=t)}}else{if($g(t))throw Error(D(418));t.flags=t.flags&-4097|2,ke=!1,vn=t}}}function RI(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function Kc(t){if(t!==vn)return!1;if(!ke)return RI(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vg(t.type,t.memoizedProps)),e&&(e=gn)){if($g(t))throw eA(),Error(D(418));for(;e;)Z1(t,e),e=wi(e.nextSibling)}if(RI(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=wi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=vn?wi(t.stateNode.nextSibling):null;return!0}function eA(){for(var t=gn;t;)t=wi(t.nextSibling)}function ra(){gn=vn=null,ke=!1}function Fv(t){zn===null?zn=[t]:zn.push(t)}var VO=Wr.ReactCurrentBatchConfig;function jn(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var lh=Wi(null),ch=null,No=null,$v=null;function Uv(){$v=No=ch=null}function jv(t){var e=lh.current;Re(lh),t._currentValue=e}function jg(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zo(t,e){ch=t,$v=No=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if($v!==t)if(t={context:t,memoizedValue:e,next:null},No===null){if(ch===null)throw Error(D(308));No=t,ch.dependencies={lanes:0,firstContext:t}}else No=No.next=t;return e}var ys=null;function Bv(t){ys===null?ys=[t]:ys.push(t)}function tA(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bv(e)):(n.next=i.next,i.next=n),e.interleaved=n,jr(t,r)}function jr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ai=!1;function zv(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nA(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Lr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ei(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jr(t,n)}return i=r.interleaved,i===null?(e.next=e,Bv(r)):(e.next=i.next,i.next=e),r.interleaved=e,jr(t,n)}function _d(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cv(t,n)}}function PI(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function dh(t,e,n,r){var i=t.updateQueue;ai=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(s!==null){var d=i.baseState;o=0,c=l=u=null,a=s;do{var h=a.lane,f=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(h=e,f=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(f,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(f,d,h):v,h==null)break e;d=Me({},d,h);break e;case 2:ai=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=f,u=d):c=c.next=f,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(u=d),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);$s|=o,t.lanes=o,t.memoizedState=d}}function CI(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var rA=new t1.Component().refs;function Bg(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cf={isMounted:function(t){return(t=t._reactInternals)?to(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Wt(),i=Ti(t),s=Lr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ei(t,s,i),e!==null&&(Wn(e,t,i,r),_d(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Wt(),i=Ti(t),s=Lr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ei(t,s,i),e!==null&&(Wn(e,t,i,r),_d(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Wt(),r=Ti(t),i=Lr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ei(t,i,r),e!==null&&(Wn(e,t,r,n),_d(e,t,r))}};function kI(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!cl(n,r)||!cl(i,s):!0}function iA(t,e,n){var r=!1,i=xi,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(i=ln(e)?Ls:Ft.current,r=e.contextTypes,s=(r=r!=null)?na(t,i):xi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function bI(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&cf.enqueueReplaceState(e,e.state,null)}function zg(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=rA,zv(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dn(s):(s=ln(e)?Ls:Ft.current,i.context=na(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bg(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&cf.enqueueReplaceState(i,i.state,null),dh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function au(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===rA&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,t))}return t}function Hc(t,e){throw t=Object.prototype.toString.call(e),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xI(t){var e=t._init;return e(t._payload)}function sA(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Si(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,_){return p===null||p.tag!==6?(p=Sm(g,m.mode,_),p.return=m,p):(p=i(p,g),p.return=m,p)}function u(m,p,g,_){var I=g.type;return I===So?c(m,p,g.props.children,_,g.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===oi&&xI(I)===p.type)?(_=i(p,g.props),_.ref=au(m,p,g),_.return=m,_):(_=Ad(g.type,g.key,g.props,null,m.mode,_),_.ref=au(m,p,g),_.return=m,_)}function l(m,p,g,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Am(g,m.mode,_),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function c(m,p,g,_,I){return p===null||p.tag!==7?(p=Ps(g,m.mode,_,I),p.return=m,p):(p=i(p,g),p.return=m,p)}function d(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Sm(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Mc:return g=Ad(p.type,p.key,p.props,null,m.mode,g),g.ref=au(m,null,p),g.return=m,g;case To:return p=Am(p,m.mode,g),p.return=m,p;case oi:var _=p._init;return d(m,_(p._payload),g)}if(Su(p)||nu(p))return p=Ps(p,m.mode,g,null),p.return=m,p;Hc(m,p)}return null}function h(m,p,g,_){var I=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:a(m,p,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Mc:return g.key===I?u(m,p,g,_):null;case To:return g.key===I?l(m,p,g,_):null;case oi:return I=g._init,h(m,p,I(g._payload),_)}if(Su(g)||nu(g))return I!==null?null:c(m,p,g,_,null);Hc(m,g)}return null}function f(m,p,g,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(g)||null,a(p,m,""+_,I);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Mc:return m=m.get(_.key===null?g:_.key)||null,u(p,m,_,I);case To:return m=m.get(_.key===null?g:_.key)||null,l(p,m,_,I);case oi:var S=_._init;return f(m,p,g,S(_._payload),I)}if(Su(_)||nu(_))return m=m.get(g)||null,c(p,m,_,I,null);Hc(p,_)}return null}function v(m,p,g,_){for(var I=null,S=null,C=p,L=p=0,J=null;C!==null&&L<g.length;L++){C.index>L?(J=C,C=null):J=C.sibling;var z=h(m,C,g[L],_);if(z===null){C===null&&(C=J);break}t&&C&&z.alternate===null&&e(m,C),p=s(z,p,L),S===null?I=z:S.sibling=z,S=z,C=J}if(L===g.length)return n(m,C),ke&&os(m,L),I;if(C===null){for(;L<g.length;L++)C=d(m,g[L],_),C!==null&&(p=s(C,p,L),S===null?I=C:S.sibling=C,S=C);return ke&&os(m,L),I}for(C=r(m,C);L<g.length;L++)J=f(C,m,L,g[L],_),J!==null&&(t&&J.alternate!==null&&C.delete(J.key===null?L:J.key),p=s(J,p,L),S===null?I=J:S.sibling=J,S=J);return t&&C.forEach(function(Ne){return e(m,Ne)}),ke&&os(m,L),I}function y(m,p,g,_){var I=nu(g);if(typeof I!="function")throw Error(D(150));if(g=I.call(g),g==null)throw Error(D(151));for(var S=I=null,C=p,L=p=0,J=null,z=g.next();C!==null&&!z.done;L++,z=g.next()){C.index>L?(J=C,C=null):J=C.sibling;var Ne=h(m,C,z.value,_);if(Ne===null){C===null&&(C=J);break}t&&C&&Ne.alternate===null&&e(m,C),p=s(Ne,p,L),S===null?I=Ne:S.sibling=Ne,S=Ne,C=J}if(z.done)return n(m,C),ke&&os(m,L),I;if(C===null){for(;!z.done;L++,z=g.next())z=d(m,z.value,_),z!==null&&(p=s(z,p,L),S===null?I=z:S.sibling=z,S=z);return ke&&os(m,L),I}for(C=r(m,C);!z.done;L++,z=g.next())z=f(C,m,L,z.value,_),z!==null&&(t&&z.alternate!==null&&C.delete(z.key===null?L:z.key),p=s(z,p,L),S===null?I=z:S.sibling=z,S=z);return t&&C.forEach(function($e){return e(m,$e)}),ke&&os(m,L),I}function w(m,p,g,_){if(typeof g=="object"&&g!==null&&g.type===So&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Mc:e:{for(var I=g.key,S=p;S!==null;){if(S.key===I){if(I=g.type,I===So){if(S.tag===7){n(m,S.sibling),p=i(S,g.props.children),p.return=m,m=p;break e}}else if(S.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===oi&&xI(I)===S.type){n(m,S.sibling),p=i(S,g.props),p.ref=au(m,S,g),p.return=m,m=p;break e}n(m,S);break}else e(m,S);S=S.sibling}g.type===So?(p=Ps(g.props.children,m.mode,_,g.key),p.return=m,m=p):(_=Ad(g.type,g.key,g.props,null,m.mode,_),_.ref=au(m,p,g),_.return=m,m=_)}return o(m);case To:e:{for(S=g.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Am(g,m.mode,_),p.return=m,m=p}return o(m);case oi:return S=g._init,w(m,p,S(g._payload),_)}if(Su(g))return v(m,p,g,_);if(nu(g))return y(m,p,g,_);Hc(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Sm(g,m.mode,_),p.return=m,m=p),o(m)):n(m,p)}return w}var ia=sA(!0),oA=sA(!1),ic={},gr=Wi(ic),pl=Wi(ic),ml=Wi(ic);function vs(t){if(t===ic)throw Error(D(174));return t}function qv(t,e){switch(we(ml,e),we(pl,t),we(gr,ic),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Eg(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Eg(e,t)}Re(gr),we(gr,e)}function sa(){Re(gr),Re(pl),Re(ml)}function aA(t){vs(ml.current);var e=vs(gr.current),n=Eg(e,t.type);e!==n&&(we(pl,t),we(gr,n))}function Gv(t){pl.current===t&&(Re(gr),Re(pl))}var De=Wi(0);function hh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vm=[];function Wv(){for(var t=0;t<vm.length;t++)vm[t]._workInProgressVersionPrimary=null;vm.length=0}var wd=Wr.ReactCurrentDispatcher,_m=Wr.ReactCurrentBatchConfig,Fs=0,Ve=null,st=null,ct=null,fh=!1,Uu=!1,gl=0,LO=0;function xt(){throw Error(D(321))}function Kv(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function Hv(t,e,n,r,i,s){if(Fs=s,Ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wd.current=t===null||t.memoizedState===null?UO:jO,t=n(r,i),Uu){s=0;do{if(Uu=!1,gl=0,25<=s)throw Error(D(301));s+=1,ct=st=null,e.updateQueue=null,wd.current=BO,t=n(r,i)}while(Uu)}if(wd.current=ph,e=st!==null&&st.next!==null,Fs=0,ct=st=Ve=null,fh=!1,e)throw Error(D(300));return t}function Qv(){var t=gl!==0;return gl=0,t}function tr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?Ve.memoizedState=ct=t:ct=ct.next=t,ct}function On(){if(st===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=st.next;var e=ct===null?Ve.memoizedState:ct.next;if(e!==null)ct=e,st=t;else{if(t===null)throw Error(D(310));st=t,t={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},ct===null?Ve.memoizedState=ct=t:ct=ct.next=t}return ct}function yl(t,e){return typeof e=="function"?e(t):e}function wm(t){var e=On(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=st,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((Fs&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:t(r,l.action);else{var d={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=d,o=r):u=u.next=d,Ve.lanes|=c,$s|=c}l=l.next}while(l!==null&&l!==s);u===null?o=r:u.next=a,Hn(r,e.memoizedState)||(nn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ve.lanes|=s,$s|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Em(t){var e=On(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Hn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function uA(){}function lA(t,e){var n=Ve,r=On(),i=e(),s=!Hn(r.memoizedState,i);if(s&&(r.memoizedState=i,nn=!0),r=r.queue,Yv(hA.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ct!==null&&ct.memoizedState.tag&1){if(n.flags|=2048,vl(9,dA.bind(null,n,r,i,e),void 0,null),ft===null)throw Error(D(349));Fs&30||cA(n,e,i)}return i}function cA(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function dA(t,e,n,r){e.value=n,e.getSnapshot=r,fA(e)&&pA(t)}function hA(t,e,n){return n(function(){fA(e)&&pA(t)})}function fA(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function pA(t){var e=jr(t,1);e!==null&&Wn(e,t,1,-1)}function NI(t){var e=tr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:t},e.queue=t,t=t.dispatch=$O.bind(null,Ve,t),[e.memoizedState,t]}function vl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function mA(){return On().memoizedState}function Ed(t,e,n,r){var i=tr();Ve.flags|=t,i.memoizedState=vl(1|e,n,void 0,r===void 0?null:r)}function df(t,e,n,r){var i=On();r=r===void 0?null:r;var s=void 0;if(st!==null){var o=st.memoizedState;if(s=o.destroy,r!==null&&Kv(r,o.deps)){i.memoizedState=vl(e,n,s,r);return}}Ve.flags|=t,i.memoizedState=vl(1|e,n,s,r)}function DI(t,e){return Ed(8390656,8,t,e)}function Yv(t,e){return df(2048,8,t,e)}function gA(t,e){return df(4,2,t,e)}function yA(t,e){return df(4,4,t,e)}function vA(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _A(t,e,n){return n=n!=null?n.concat([t]):null,df(4,4,vA.bind(null,e,t),n)}function Xv(){}function wA(t,e){var n=On();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kv(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function EA(t,e){var n=On();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kv(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function IA(t,e,n){return Fs&21?(Hn(n,e)||(n=A1(),Ve.lanes|=n,$s|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function MO(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=_m.transition;_m.transition={};try{t(!1),e()}finally{pe=n,_m.transition=r}}function TA(){return On().memoizedState}function FO(t,e,n){var r=Ti(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},SA(t))AA(e,n);else if(n=tA(t,e,n,r),n!==null){var i=Wt();Wn(n,t,r,i),RA(n,e,r)}}function $O(t,e,n){var r=Ti(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(SA(t))AA(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Hn(a,o)){var u=e.interleaved;u===null?(i.next=i,Bv(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=tA(t,e,i,r),n!==null&&(i=Wt(),Wn(n,t,r,i),RA(n,e,r))}}function SA(t){var e=t.alternate;return t===Ve||e!==null&&e===Ve}function AA(t,e){Uu=fh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function RA(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cv(t,n)}}var ph={readContext:Dn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},UO={readContext:Dn,useCallback:function(t,e){return tr().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:DI,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ed(4194308,4,vA.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ed(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ed(4,2,t,e)},useMemo:function(t,e){var n=tr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=FO.bind(null,Ve,t),[r.memoizedState,t]},useRef:function(t){var e=tr();return t={current:t},e.memoizedState=t},useState:NI,useDebugValue:Xv,useDeferredValue:function(t){return tr().memoizedState=t},useTransition:function(){var t=NI(!1),e=t[0];return t=MO.bind(null,t[1]),tr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ve,i=tr();if(ke){if(n===void 0)throw Error(D(407));n=n()}else{if(n=e(),ft===null)throw Error(D(349));Fs&30||cA(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,DI(hA.bind(null,r,s,t),[t]),r.flags|=2048,vl(9,dA.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tr(),e=ft.identifierPrefix;if(ke){var n=xr,r=br;n=(r&~(1<<32-Gn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=gl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=LO++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jO={readContext:Dn,useCallback:wA,useContext:Dn,useEffect:Yv,useImperativeHandle:_A,useInsertionEffect:gA,useLayoutEffect:yA,useMemo:EA,useReducer:wm,useRef:mA,useState:function(){return wm(yl)},useDebugValue:Xv,useDeferredValue:function(t){var e=On();return IA(e,st.memoizedState,t)},useTransition:function(){var t=wm(yl)[0],e=On().memoizedState;return[t,e]},useMutableSource:uA,useSyncExternalStore:lA,useId:TA,unstable_isNewReconciler:!1},BO={readContext:Dn,useCallback:wA,useContext:Dn,useEffect:Yv,useImperativeHandle:_A,useInsertionEffect:gA,useLayoutEffect:yA,useMemo:EA,useReducer:Em,useRef:mA,useState:function(){return Em(yl)},useDebugValue:Xv,useDeferredValue:function(t){var e=On();return st===null?e.memoizedState=t:IA(e,st.memoizedState,t)},useTransition:function(){var t=Em(yl)[0],e=On().memoizedState;return[t,e]},useMutableSource:uA,useSyncExternalStore:lA,useId:TA,unstable_isNewReconciler:!1};function oa(t,e){try{var n="",r=e;do n+=gD(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Im(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qg(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zO=typeof WeakMap=="function"?WeakMap:Map;function PA(t,e,n){n=Lr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gh||(gh=!0,ey=r),qg(t,e)},n}function CA(t,e,n){n=Lr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qg(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qg(t,e),typeof r!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function OI(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zO;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=rV.bind(null,t,e,n),e.then(t,t))}function VI(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function LI(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Lr(-1,1),e.tag=2,Ei(n,e,1))),n.lanes|=1),t)}var qO=Wr.ReactCurrentOwner,nn=!1;function jt(t,e,n,r){e.child=t===null?oA(e,null,n,r):ia(e,t.child,n,r)}function MI(t,e,n,r,i){n=n.render;var s=e.ref;return zo(e,i),r=Hv(t,e,n,r,s,i),n=Qv(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Br(t,e,i)):(ke&&n&&Lv(e),e.flags|=1,jt(t,e,r,i),e.child)}function FI(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!s_(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kA(t,e,s,r,i)):(t=Ad(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:cl,n(o,r)&&t.ref===e.ref)return Br(t,e,i)}return e.flags|=1,t=Si(s,r),t.ref=e.ref,t.return=e,e.child=t}function kA(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(cl(s,r)&&t.ref===e.ref)if(nn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Br(t,e,i)}return Gg(t,e,n,r,i)}function bA(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Oo,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Oo,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(Oo,pn),pn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(Oo,pn),pn|=r;return jt(t,e,i,n),e.child}function xA(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gg(t,e,n,r,i){var s=ln(n)?Ls:Ft.current;return s=na(e,s),zo(e,i),n=Hv(t,e,n,r,s,i),r=Qv(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Br(t,e,i)):(ke&&r&&Lv(e),e.flags|=1,jt(t,e,n,i),e.child)}function $I(t,e,n,r,i){if(ln(n)){var s=!0;oh(e)}else s=!1;if(zo(e,i),e.stateNode===null)Id(t,e),iA(e,n,r),zg(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Dn(l):(l=ln(n)?Ls:Ft.current,l=na(e,l));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&bI(e,o,r,l),ai=!1;var h=e.memoizedState;o.state=h,dh(e,r,o,i),u=e.memoizedState,a!==r||h!==u||un.current||ai?(typeof c=="function"&&(Bg(e,n,c,r),u=e.memoizedState),(a=ai||kI(e,n,a,r,h,u,l))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,nA(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:jn(e.type,a),o.props=l,d=e.pendingProps,h=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dn(u):(u=ln(n)?Ls:Ft.current,u=na(e,u));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==u)&&bI(e,o,r,u),ai=!1,h=e.memoizedState,o.state=h,dh(e,r,o,i);var v=e.memoizedState;a!==d||h!==v||un.current||ai?(typeof f=="function"&&(Bg(e,n,f,r),v=e.memoizedState),(l=ai||kI(e,n,l,r,h,v,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Wg(t,e,n,r,s,i)}function Wg(t,e,n,r,i,s){xA(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&SI(e,n,!1),Br(t,e,s);r=e.stateNode,qO.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ia(e,t.child,null,s),e.child=ia(e,null,a,s)):jt(t,e,a,s),e.memoizedState=r.state,i&&SI(e,n,!0),e.child}function NA(t){var e=t.stateNode;e.pendingContext?TI(t,e.pendingContext,e.pendingContext!==e.context):e.context&&TI(t,e.context,!1),qv(t,e.containerInfo)}function UI(t,e,n,r,i){return ra(),Fv(i),e.flags|=256,jt(t,e,n,r),e.child}var Kg={dehydrated:null,treeContext:null,retryLane:0};function Hg(t){return{baseLanes:t,cachePool:null,transitions:null}}function DA(t,e,n){var r=e.pendingProps,i=De.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(De,i&1),t===null)return Ug(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pf(o,r,0,null),t=Ps(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hg(n),e.memoizedState=Kg,t):Jv(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return GO(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Si(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Si(a,s):(s=Ps(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hg(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Kg,r}return s=t.child,t=s.sibling,r=Si(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jv(t,e){return e=pf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qc(t,e,n,r){return r!==null&&Fv(r),ia(e,t.child,null,n),t=Jv(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function GO(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Im(Error(D(422))),Qc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=pf({mode:"visible",children:r.children},i,0,null),s=Ps(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ia(e,t.child,null,o),e.child.memoizedState=Hg(o),e.memoizedState=Kg,s);if(!(e.mode&1))return Qc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(D(419)),r=Im(s,r,void 0),Qc(t,e,o,r)}if(a=(o&t.childLanes)!==0,nn||a){if(r=ft,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jr(t,i),Wn(r,t,i,-1))}return i_(),r=Im(Error(D(421))),Qc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=iV.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gn=wi(i.nextSibling),vn=e,ke=!0,zn=null,t!==null&&(Rn[Pn++]=br,Rn[Pn++]=xr,Rn[Pn++]=Ms,br=t.id,xr=t.overflow,Ms=e),e=Jv(e,r.children),e.flags|=4096,e)}function jI(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),jg(t.return,e,n)}function Tm(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function OA(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(jt(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jI(t,n,e);else if(t.tag===19)jI(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(De,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&hh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Tm(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&hh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Tm(e,!0,n,null,s);break;case"together":Tm(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Id(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Br(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$s|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(D(153));if(e.child!==null){for(t=e.child,n=Si(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Si(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WO(t,e,n){switch(e.tag){case 3:NA(e),ra();break;case 5:aA(e);break;case 1:ln(e.type)&&oh(e);break;case 4:qv(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(lh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?DA(t,e,n):(we(De,De.current&1),t=Br(t,e,n),t!==null?t.sibling:null);we(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return OA(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,bA(t,e,n)}return Br(t,e,n)}var VA,Qg,LA,MA;VA=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qg=function(){};LA=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,vs(gr.current);var s=null;switch(n){case"input":i=yg(t,i),r=yg(t,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=wg(t,i),r=wg(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ih)}Ig(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(rl.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(rl.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&Ie("scroll",t),s||a===u||(s=[])):(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};MA=function(t,e,n,r){n!==r&&(e.flags|=4)};function uu(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function KO(t,e,n){var r=e.pendingProps;switch(Mv(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return ln(e.type)&&sh(),Nt(e),null;case 3:return r=e.stateNode,sa(),Re(un),Re(Ft),Wv(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Kc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zn!==null&&(ry(zn),zn=null))),Qg(t,e),Nt(e),null;case 5:Gv(e);var i=vs(ml.current);if(n=e.type,t!==null&&e.stateNode!=null)LA(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(D(166));return Nt(e),null}if(t=vs(gr.current),Kc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rr]=e,r[fl]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<Ru.length;i++)Ie(Ru[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":YE(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":JE(r,s),Ie("invalid",r)}Ig(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wc(r.textContent,a,t),i=["children",""+a]):rl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":Fc(r),XE(r,s,!0);break;case"textarea":Fc(r),ZE(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ih)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=c1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rr]=e,t[fl]=r,VA(t,e,!1,!1),e.stateNode=t;e:{switch(o=Tg(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ru.length;i++)Ie(Ru[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":YE(t,r),i=yg(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":JE(t,r),i=wg(t,r),Ie("invalid",t);break;default:i=r}Ig(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?f1(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&d1(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&il(t,u):typeof u=="number"&&il(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(rl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ie("scroll",t):u!=null&&Iv(t,s,u,o))}switch(n){case"input":Fc(t),XE(t,r,!1);break;case"textarea":Fc(t),ZE(t);break;case"option":r.value!=null&&t.setAttribute("value",""+bi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?$o(t,!!r.multiple,s,!1):r.defaultValue!=null&&$o(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ih)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(t&&e.stateNode!=null)MA(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(D(166));if(n=vs(ml.current),vs(gr.current),Kc(e)){if(r=e.stateNode,n=e.memoizedProps,r[rr]=e,(s=r.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:Wc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rr]=e,e.stateNode=r}return Nt(e),null;case 13:if(Re(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&gn!==null&&e.mode&1&&!(e.flags&128))eA(),ra(),e.flags|=98560,s=!1;else if(s=Kc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(D(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[rr]=e}else ra(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nt(e),s=!1}else zn!==null&&(ry(zn),zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?ot===0&&(ot=3):i_())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return sa(),Qg(t,e),t===null&&dl(e.stateNode.containerInfo),Nt(e),null;case 10:return jv(e.type._context),Nt(e),null;case 17:return ln(e.type)&&sh(),Nt(e),null;case 19:if(Re(De),s=e.memoizedState,s===null)return Nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)uu(s,!1);else{if(ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hh(t),o!==null){for(e.flags|=128,uu(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(De,De.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ke()>aa&&(e.flags|=128,r=!0,uu(s,!1),e.lanes=4194304)}else{if(!r)if(t=hh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),uu(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ke)return Nt(e),null}else 2*Ke()-s.renderingStartTime>aa&&n!==1073741824&&(e.flags|=128,r=!0,uu(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ke(),e.sibling=null,n=De.current,we(De,r?n&1|2:n&1),e):(Nt(e),null);case 22:case 23:return r_(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?pn&1073741824&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error(D(156,e.tag))}function HO(t,e){switch(Mv(e),e.tag){case 1:return ln(e.type)&&sh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return sa(),Re(un),Re(Ft),Wv(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gv(e),null;case 13:if(Re(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(D(340));ra()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(De),null;case 4:return sa(),null;case 10:return jv(e.type._context),null;case 22:case 23:return r_(),null;case 24:return null;default:return null}}var Yc=!1,Vt=!1,QO=typeof WeakSet=="function"?WeakSet:Set,B=null;function Do(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function Yg(t,e,n){try{n()}catch(r){je(t,e,r)}}var BI=!1;function YO(t,e){if(Dg=th,t=j1(),Vv(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,d=t,h=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(u=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===t)break t;if(h===n&&++l===i&&(a=o),h===s&&++c===r&&(u=o),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Og={focusedElem:t,selectionRange:n},th=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,w=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:jn(e.type,y),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(_){je(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return v=BI,BI=!1,v}function ju(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Yg(e,n,s)}i=i.next}while(i!==r)}}function hf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xg(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function FA(t){var e=t.alternate;e!==null&&(t.alternate=null,FA(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rr],delete e[fl],delete e[Mg],delete e[NO],delete e[DO])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $A(t){return t.tag===5||t.tag===3||t.tag===4}function zI(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$A(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ih));else if(r!==4&&(t=t.child,t!==null))for(Jg(t,e,n),t=t.sibling;t!==null;)Jg(t,e,n),t=t.sibling}function Zg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Zg(t,e,n),t=t.sibling;t!==null;)Zg(t,e,n),t=t.sibling}var It=null,Bn=!1;function ei(t,e,n){for(n=n.child;n!==null;)UA(t,e,n),n=n.sibling}function UA(t,e,n){if(mr&&typeof mr.onCommitFiberUnmount=="function")try{mr.onCommitFiberUnmount(rf,n)}catch{}switch(n.tag){case 5:Vt||Do(n,e);case 6:var r=It,i=Bn;It=null,ei(t,e,n),It=r,Bn=i,It!==null&&(Bn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Bn?(t=It,n=n.stateNode,t.nodeType===8?gm(t.parentNode,n):t.nodeType===1&&gm(t,n),ul(t)):gm(It,n.stateNode));break;case 4:r=It,i=Bn,It=n.stateNode.containerInfo,Bn=!0,ei(t,e,n),It=r,Bn=i;break;case 0:case 11:case 14:case 15:if(!Vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Yg(n,e,o),i=i.next}while(i!==r)}ei(t,e,n);break;case 1:if(!Vt&&(Do(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,e,a)}ei(t,e,n);break;case 21:ei(t,e,n);break;case 22:n.mode&1?(Vt=(r=Vt)||n.memoizedState!==null,ei(t,e,n),Vt=r):ei(t,e,n);break;default:ei(t,e,n)}}function qI(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new QO),e.forEach(function(r){var i=sV.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Bn=!1;break e;case 3:It=a.stateNode.containerInfo,Bn=!0;break e;case 4:It=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(It===null)throw Error(D(160));UA(s,o,i),It=null,Bn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){je(i,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jA(e,t),e=e.sibling}function jA(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),er(t),r&4){try{ju(3,t,t.return),hf(3,t)}catch(y){je(t,t.return,y)}try{ju(5,t,t.return)}catch(y){je(t,t.return,y)}}break;case 1:Un(e,t),er(t),r&512&&n!==null&&Do(n,n.return);break;case 5:if(Un(e,t),er(t),r&512&&n!==null&&Do(n,n.return),t.flags&32){var i=t.stateNode;try{il(i,"")}catch(y){je(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&u1(i,s),Tg(a,o);var l=Tg(a,s);for(o=0;o<u.length;o+=2){var c=u[o],d=u[o+1];c==="style"?f1(i,d):c==="dangerouslySetInnerHTML"?d1(i,d):c==="children"?il(i,d):Iv(i,c,d,l)}switch(a){case"input":vg(i,s);break;case"textarea":l1(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?$o(i,!!s.multiple,f,!1):h!==!!s.multiple&&(s.defaultValue!=null?$o(i,!!s.multiple,s.defaultValue,!0):$o(i,!!s.multiple,s.multiple?[]:"",!1))}i[fl]=s}catch(y){je(t,t.return,y)}}break;case 6:if(Un(e,t),er(t),r&4){if(t.stateNode===null)throw Error(D(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){je(t,t.return,y)}}break;case 3:if(Un(e,t),er(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ul(e.containerInfo)}catch(y){je(t,t.return,y)}break;case 4:Un(e,t),er(t);break;case 13:Un(e,t),er(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(t_=Ke())),r&4&&qI(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(l=Vt)||c,Un(e,t),Vt=l):Un(e,t),er(t),r&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!c&&t.mode&1)for(B=t,c=t.child;c!==null;){for(d=B=c;B!==null;){switch(h=B,f=h.child,h.tag){case 0:case 11:case 14:case 15:ju(4,h,h.return);break;case 1:Do(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){je(r,n,y)}}break;case 5:Do(h,h.return);break;case 22:if(h.memoizedState!==null){WI(d);continue}}f!==null?(f.return=h,B=f):WI(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,l?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,u=d.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=h1("display",o))}catch(y){je(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(y){je(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Un(e,t),er(t),r&4&&qI(t);break;case 21:break;default:Un(e,t),er(t)}}function er(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($A(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(il(i,""),r.flags&=-33);var s=zI(t);Zg(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=zI(t);Jg(t,a,o);break;default:throw Error(D(161))}}catch(u){je(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function XO(t,e,n){B=t,BA(t)}function BA(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Yc;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Vt;a=Yc;var l=Vt;if(Yc=o,(Vt=u)&&!l)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?KI(i):u!==null?(u.return=o,B=u):KI(i);for(;s!==null;)B=s,BA(s),s=s.sibling;B=i,Yc=a,Vt=l}GI(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):GI(t)}}function GI(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||hf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&CI(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}CI(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ul(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Vt||e.flags&512&&Xg(e)}catch(h){je(e,e.return,h)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function WI(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function KI(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hf(4,e)}catch(u){je(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){je(e,i,u)}}var s=e.return;try{Xg(e)}catch(u){je(e,s,u)}break;case 5:var o=e.return;try{Xg(e)}catch(u){je(e,o,u)}}}catch(u){je(e,e.return,u)}if(e===t){B=null;break}var a=e.sibling;if(a!==null){a.return=e.return,B=a;break}B=e.return}}var JO=Math.ceil,mh=Wr.ReactCurrentDispatcher,Zv=Wr.ReactCurrentOwner,Nn=Wr.ReactCurrentBatchConfig,le=0,ft=null,nt=null,Rt=0,pn=0,Oo=Wi(0),ot=0,_l=null,$s=0,ff=0,e_=0,Bu=null,tn=null,t_=0,aa=1/0,Rr=null,gh=!1,ey=null,Ii=null,Xc=!1,fi=null,yh=0,zu=0,ty=null,Td=-1,Sd=0;function Wt(){return le&6?Ke():Td!==-1?Td:Td=Ke()}function Ti(t){return t.mode&1?le&2&&Rt!==0?Rt&-Rt:VO.transition!==null?(Sd===0&&(Sd=A1()),Sd):(t=pe,t!==0||(t=window.event,t=t===void 0?16:N1(t.type)),t):1}function Wn(t,e,n,r){if(50<zu)throw zu=0,ty=null,Error(D(185));tc(t,n,r),(!(le&2)||t!==ft)&&(t===ft&&(!(le&2)&&(ff|=n),ot===4&&li(t,Rt)),cn(t,r),n===1&&le===0&&!(e.mode&1)&&(aa=Ke()+500,lf&&Ki()))}function cn(t,e){var n=t.callbackNode;VD(t,e);var r=eh(t,t===ft?Rt:0);if(r===0)n!==null&&nI(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&nI(n),e===1)t.tag===0?OO(HI.bind(null,t)):X1(HI.bind(null,t)),bO(function(){!(le&6)&&Ki()}),n=null;else{switch(R1(r)){case 1:n=Pv;break;case 4:n=T1;break;case 16:n=Zd;break;case 536870912:n=S1;break;default:n=Zd}n=YA(n,zA.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zA(t,e){if(Td=-1,Sd=0,le&6)throw Error(D(327));var n=t.callbackNode;if(qo()&&t.callbackNode!==n)return null;var r=eh(t,t===ft?Rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vh(t,r);else{e=r;var i=le;le|=2;var s=GA();(ft!==t||Rt!==e)&&(Rr=null,aa=Ke()+500,Rs(t,e));do try{tV();break}catch(a){qA(t,a)}while(1);Uv(),mh.current=s,le=i,nt!==null?e=0:(ft=null,Rt=0,e=ot)}if(e!==0){if(e===2&&(i=Cg(t),i!==0&&(r=i,e=ny(t,i))),e===1)throw n=_l,Rs(t,0),li(t,r),cn(t,Ke()),n;if(e===6)li(t,r);else{if(i=t.current.alternate,!(r&30)&&!ZO(i)&&(e=vh(t,r),e===2&&(s=Cg(t),s!==0&&(r=s,e=ny(t,s))),e===1))throw n=_l,Rs(t,0),li(t,r),cn(t,Ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(D(345));case 2:as(t,tn,Rr);break;case 3:if(li(t,r),(r&130023424)===r&&(e=t_+500-Ke(),10<e)){if(eh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Lg(as.bind(null,t,tn,Rr),e);break}as(t,tn,Rr);break;case 4:if(li(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Gn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*JO(r/1960))-r,10<r){t.timeoutHandle=Lg(as.bind(null,t,tn,Rr),r);break}as(t,tn,Rr);break;case 5:as(t,tn,Rr);break;default:throw Error(D(329))}}}return cn(t,Ke()),t.callbackNode===n?zA.bind(null,t):null}function ny(t,e){var n=Bu;return t.current.memoizedState.isDehydrated&&(Rs(t,e).flags|=256),t=vh(t,e),t!==2&&(e=tn,tn=n,e!==null&&ry(e)),t}function ry(t){tn===null?tn=t:tn.push.apply(tn,t)}function ZO(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function li(t,e){for(e&=~e_,e&=~ff,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gn(e),r=1<<n;t[n]=-1,e&=~r}}function HI(t){if(le&6)throw Error(D(327));qo();var e=eh(t,0);if(!(e&1))return cn(t,Ke()),null;var n=vh(t,e);if(t.tag!==0&&n===2){var r=Cg(t);r!==0&&(e=r,n=ny(t,r))}if(n===1)throw n=_l,Rs(t,0),li(t,e),cn(t,Ke()),n;if(n===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,as(t,tn,Rr),cn(t,Ke()),null}function n_(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(aa=Ke()+500,lf&&Ki())}}function Us(t){fi!==null&&fi.tag===0&&!(le&6)&&qo();var e=le;le|=1;var n=Nn.transition,r=pe;try{if(Nn.transition=null,pe=1,t)return t()}finally{pe=r,Nn.transition=n,le=e,!(le&6)&&Ki()}}function r_(){pn=Oo.current,Re(Oo)}function Rs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,kO(n)),nt!==null)for(n=nt.return;n!==null;){var r=n;switch(Mv(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sh();break;case 3:sa(),Re(un),Re(Ft),Wv();break;case 5:Gv(r);break;case 4:sa();break;case 13:Re(De);break;case 19:Re(De);break;case 10:jv(r.type._context);break;case 22:case 23:r_()}n=n.return}if(ft=t,nt=t=Si(t.current,null),Rt=pn=e,ot=0,_l=null,e_=ff=$s=0,tn=Bu=null,ys!==null){for(e=0;e<ys.length;e++)if(n=ys[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ys=null}return t}function qA(t,e){do{var n=nt;try{if(Uv(),wd.current=ph,fh){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fh=!1}if(Fs=0,ct=st=Ve=null,Uu=!1,gl=0,Zv.current=null,n===null||n.return===null){ot=1,_l=e,nt=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Rt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=VI(o);if(f!==null){f.flags&=-257,LI(f,o,a,s,e),f.mode&1&&OI(s,l,e),e=f,u=l;var v=e.updateQueue;if(v===null){var y=new Set;y.add(u),e.updateQueue=y}else v.add(u);break e}else{if(!(e&1)){OI(s,l,e),i_();break e}u=Error(D(426))}}else if(ke&&a.mode&1){var w=VI(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),LI(w,o,a,s,e),Fv(oa(u,a));break e}}s=u=oa(u,a),ot!==4&&(ot=2),Bu===null?Bu=[s]:Bu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=PA(s,u,e);PI(s,m);break e;case 1:a=u;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ii===null||!Ii.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=CA(s,a,e);PI(s,_);break e}}s=s.return}while(s!==null)}KA(n)}catch(I){e=I,nt===n&&n!==null&&(nt=n=n.return);continue}break}while(1)}function GA(){var t=mh.current;return mh.current=ph,t===null?ph:t}function i_(){(ot===0||ot===3||ot===2)&&(ot=4),ft===null||!($s&268435455)&&!(ff&268435455)||li(ft,Rt)}function vh(t,e){var n=le;le|=2;var r=GA();(ft!==t||Rt!==e)&&(Rr=null,Rs(t,e));do try{eV();break}catch(i){qA(t,i)}while(1);if(Uv(),le=n,mh.current=r,nt!==null)throw Error(D(261));return ft=null,Rt=0,ot}function eV(){for(;nt!==null;)WA(nt)}function tV(){for(;nt!==null&&!RD();)WA(nt)}function WA(t){var e=QA(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?KA(t):nt=e,Zv.current=null}function KA(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=HO(n,e),n!==null){n.flags&=32767,nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ot=6,nt=null;return}}else if(n=KO(n,e,pn),n!==null){nt=n;return}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);ot===0&&(ot=5)}function as(t,e,n){var r=pe,i=Nn.transition;try{Nn.transition=null,pe=1,nV(t,e,n,r)}finally{Nn.transition=i,pe=r}return null}function nV(t,e,n,r){do qo();while(fi!==null);if(le&6)throw Error(D(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(LD(t,s),t===ft&&(nt=ft=null,Rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xc||(Xc=!0,YA(Zd,function(){return qo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nn.transition,Nn.transition=null;var o=pe;pe=1;var a=le;le|=4,Zv.current=null,YO(t,n),jA(n,t),IO(Og),th=!!Dg,Og=Dg=null,t.current=n,XO(n),PD(),le=a,pe=o,Nn.transition=s}else t.current=n;if(Xc&&(Xc=!1,fi=t,yh=i),s=t.pendingLanes,s===0&&(Ii=null),bD(n.stateNode),cn(t,Ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gh)throw gh=!1,t=ey,ey=null,t;return yh&1&&t.tag!==0&&qo(),s=t.pendingLanes,s&1?t===ty?zu++:(zu=0,ty=t):zu=0,Ki(),null}function qo(){if(fi!==null){var t=R1(yh),e=Nn.transition,n=pe;try{if(Nn.transition=null,pe=16>t?16:t,fi===null)var r=!1;else{if(t=fi,fi=null,yh=0,le&6)throw Error(D(331));var i=le;for(le|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(B=l;B!==null;){var c=B;switch(c.tag){case 0:case 11:case 15:ju(8,c,s)}var d=c.child;if(d!==null)d.return=c,B=d;else for(;B!==null;){c=B;var h=c.sibling,f=c.return;if(FA(c),c===l){B=null;break}if(h!==null){h.return=f,B=h;break}B=f}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ju(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,B=m;break e}B=s.return}}var p=t.current;for(B=p;B!==null;){o=B;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,B=g;else e:for(o=p;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hf(9,a)}}catch(I){je(a,a.return,I)}if(a===o){B=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,B=_;break e}B=a.return}}if(le=i,Ki(),mr&&typeof mr.onPostCommitFiberRoot=="function")try{mr.onPostCommitFiberRoot(rf,t)}catch{}r=!0}return r}finally{pe=n,Nn.transition=e}}return!1}function QI(t,e,n){e=oa(n,e),e=PA(t,e,1),t=Ei(t,e,1),e=Wt(),t!==null&&(tc(t,1,e),cn(t,e))}function je(t,e,n){if(t.tag===3)QI(t,t,n);else for(;e!==null;){if(e.tag===3){QI(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ii===null||!Ii.has(r))){t=oa(n,t),t=CA(e,t,1),e=Ei(e,t,1),t=Wt(),e!==null&&(tc(e,1,t),cn(e,t));break}}e=e.return}}function rV(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&n,ft===t&&(Rt&n)===n&&(ot===4||ot===3&&(Rt&130023424)===Rt&&500>Ke()-t_?Rs(t,0):e_|=n),cn(t,e)}function HA(t,e){e===0&&(t.mode&1?(e=jc,jc<<=1,!(jc&130023424)&&(jc=4194304)):e=1);var n=Wt();t=jr(t,e),t!==null&&(tc(t,e,n),cn(t,n))}function iV(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),HA(t,n)}function sV(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(e),HA(t,n)}var QA;QA=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,WO(t,e,n);nn=!!(t.flags&131072)}else nn=!1,ke&&e.flags&1048576&&J1(e,uh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Id(t,e),t=e.pendingProps;var i=na(e,Ft.current);zo(e,n),i=Hv(null,e,r,t,i,n);var s=Qv();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(r)?(s=!0,oh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zv(e),i.updater=cf,e.stateNode=i,i._reactInternals=e,zg(e,r,t,n),e=Wg(null,e,r,!0,s,n)):(e.tag=0,ke&&s&&Lv(e),jt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Id(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=aV(r),t=jn(r,t),i){case 0:e=Gg(null,e,r,t,n);break e;case 1:e=$I(null,e,r,t,n);break e;case 11:e=MI(null,e,r,t,n);break e;case 14:e=FI(null,e,r,jn(r.type,t),n);break e}throw Error(D(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),Gg(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),$I(t,e,r,i,n);case 3:e:{if(NA(e),t===null)throw Error(D(387));r=e.pendingProps,s=e.memoizedState,i=s.element,nA(t,e),dh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=oa(Error(D(423)),e),e=UI(t,e,r,n,i);break e}else if(r!==i){i=oa(Error(D(424)),e),e=UI(t,e,r,n,i);break e}else for(gn=wi(e.stateNode.containerInfo.firstChild),vn=e,ke=!0,zn=null,n=oA(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ra(),r===i){e=Br(t,e,n);break e}jt(t,e,r,n)}e=e.child}return e;case 5:return aA(e),t===null&&Ug(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vg(r,i)?o=null:s!==null&&Vg(r,s)&&(e.flags|=32),xA(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&Ug(e),null;case 13:return DA(t,e,n);case 4:return qv(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ia(e,null,r,n):jt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),MI(t,e,r,i,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(lh,r._currentValue),r._currentValue=o,s!==null)if(Hn(s.value,o)){if(s.children===i.children&&!un.current){e=Br(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Lr(-1,n&-n),u.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),jg(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(D(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),jg(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,zo(e,n),i=Dn(i),r=r(i),e.flags|=1,jt(t,e,r,n),e.child;case 14:return r=e.type,i=jn(r,e.pendingProps),i=jn(r.type,i),FI(t,e,r,i,n);case 15:return kA(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),Id(t,e),e.tag=1,ln(r)?(t=!0,oh(e)):t=!1,zo(e,n),iA(e,r,i),zg(e,r,i,n),Wg(null,e,r,!0,t,n);case 19:return OA(t,e,n);case 22:return bA(t,e,n)}throw Error(D(156,e.tag))};function YA(t,e){return I1(t,e)}function oV(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,r){return new oV(t,e,n,r)}function s_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aV(t){if(typeof t=="function")return s_(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sv)return 11;if(t===Av)return 14}return 2}function Si(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ad(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")s_(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case So:return Ps(n.children,i,s,e);case Tv:o=8,i|=8;break;case fg:return t=bn(12,n,e,i|2),t.elementType=fg,t.lanes=s,t;case pg:return t=bn(13,n,e,i),t.elementType=pg,t.lanes=s,t;case mg:return t=bn(19,n,e,i),t.elementType=mg,t.lanes=s,t;case s1:return pf(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case r1:o=10;break e;case i1:o=9;break e;case Sv:o=11;break e;case Av:o=14;break e;case oi:o=16,r=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return e=bn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ps(t,e,n,r){return t=bn(7,t,r,e),t.lanes=n,t}function pf(t,e,n,r){return t=bn(22,t,r,e),t.elementType=s1,t.lanes=n,t.stateNode={isHidden:!1},t}function Sm(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function Am(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uV(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sm(0),this.expirationTimes=sm(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sm(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function o_(t,e,n,r,i,s,o,a,u){return t=new uV(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zv(s),t}function lV(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:To,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function XA(t){if(!t)return xi;t=t._reactInternals;e:{if(to(t)!==t||t.tag!==1)throw Error(D(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(D(171))}if(t.tag===1){var n=t.type;if(ln(n))return Y1(t,n,e)}return e}function JA(t,e,n,r,i,s,o,a,u){return t=o_(n,r,!0,t,i,s,o,a,u),t.context=XA(null),n=t.current,r=Wt(),i=Ti(n),s=Lr(r,i),s.callback=e??null,Ei(n,s,i),t.current.lanes=i,tc(t,i,r),cn(t,r),t}function mf(t,e,n,r){var i=e.current,s=Wt(),o=Ti(i);return n=XA(n),e.context===null?e.context=n:e.pendingContext=n,e=Lr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ei(i,e,o),t!==null&&(Wn(t,i,o,s),_d(t,i,o)),o}function _h(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function YI(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function a_(t,e){YI(t,e),(t=t.alternate)&&YI(t,e)}function cV(){return null}var ZA=typeof reportError=="function"?reportError:function(t){console.error(t)};function u_(t){this._internalRoot=t}gf.prototype.render=u_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(D(409));mf(t,e,null,null)};gf.prototype.unmount=u_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Us(function(){mf(null,t,null,null)}),e[Ur]=null}};function gf(t){this._internalRoot=t}gf.prototype.unstable_scheduleHydration=function(t){if(t){var e=k1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ui.length&&e!==0&&e<ui[n].priority;n++);ui.splice(n,0,t),n===0&&x1(t)}};function l_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function XI(){}function dV(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var l=_h(o);s.call(l)}}var o=JA(e,r,t,0,null,!1,!1,"",XI);return t._reactRootContainer=o,t[Ur]=o.current,dl(t.nodeType===8?t.parentNode:t),Us(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=_h(u);a.call(l)}}var u=o_(t,0,!1,null,null,!1,!1,"",XI);return t._reactRootContainer=u,t[Ur]=u.current,dl(t.nodeType===8?t.parentNode:t),Us(function(){mf(e,u,n,r)}),u}function vf(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=_h(o);a.call(u)}}mf(e,o,t,i)}else o=dV(n,e,t,i,r);return _h(o)}P1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Au(e.pendingLanes);n!==0&&(Cv(e,n|1),cn(e,Ke()),!(le&6)&&(aa=Ke()+500,Ki()))}break;case 13:Us(function(){var r=jr(t,1);if(r!==null){var i=Wt();Wn(r,t,1,i)}}),a_(t,1)}};kv=function(t){if(t.tag===13){var e=jr(t,134217728);if(e!==null){var n=Wt();Wn(e,t,134217728,n)}a_(t,134217728)}};C1=function(t){if(t.tag===13){var e=Ti(t),n=jr(t,e);if(n!==null){var r=Wt();Wn(n,t,e,r)}a_(t,e)}};k1=function(){return pe};b1=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Ag=function(t,e,n){switch(e){case"input":if(vg(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=uf(r);if(!i)throw Error(D(90));a1(r),vg(r,i)}}}break;case"textarea":l1(t,n);break;case"select":e=n.value,e!=null&&$o(t,!!n.multiple,e,!1)}};g1=n_;y1=Us;var hV={usingClientEntryPoint:!1,Events:[rc,Co,uf,p1,m1,n_]},lu={findFiberByHostInstance:gs,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},fV={bundleType:lu.bundleType,version:lu.version,rendererPackageName:lu.rendererPackageName,rendererConfig:lu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=w1(t),t===null?null:t.stateNode},findFiberByHostInstance:lu.findFiberByHostInstance||cV,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jc.isDisabled&&Jc.supportsFiber)try{rf=Jc.inject(fV),mr=Jc}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hV;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!l_(e))throw Error(D(200));return lV(t,e,null,n)};In.createRoot=function(t,e){if(!l_(t))throw Error(D(299));var n=!1,r="",i=ZA;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=o_(t,1,!1,null,null,n,!1,r,i),t[Ur]=e.current,dl(t.nodeType===8?t.parentNode:t),new u_(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=w1(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return Us(t)};In.hydrate=function(t,e,n){if(!yf(e))throw Error(D(200));return vf(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!l_(t))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ZA;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=JA(e,null,t,1,n??null,i,!1,s,o),t[Ur]=e.current,dl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gf(e)};In.render=function(t,e,n){if(!yf(e))throw Error(D(200));return vf(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!yf(t))throw Error(D(40));return t._reactRootContainer?(Us(function(){vf(null,null,t,!1,function(){t._reactRootContainer=null,t[Ur]=null})}),!0):!1};In.unstable_batchedUpdates=n_;In.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yf(n))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return vf(t,e,n,!1,r)};In.version="18.2.0-next-9e3b772b8-20220608";function eR(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eR)}catch(t){console.error(t)}}eR(),JS.exports=In;var tR=JS.exports,JI=tR;dg.createRoot=JI.createRoot,dg.hydrateRoot=JI.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wl(){return wl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wl.apply(this,arguments)}var pi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pi||(pi={}));const ZI="popstate";function pV(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return iy("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:wh(i)}return gV(e,n,null,t)}function Ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function c_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mV(){return Math.random().toString(36).substr(2,8)}function e0(t,e){return{usr:t.state,key:t.key,idx:e}}function iy(t,e,n,r){return n===void 0&&(n=null),wl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Na(e):e,{state:n,key:e&&e.key||r||mV()})}function wh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Na(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function gV(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=pi.Pop,u=null,l=c();l==null&&(l=0,o.replaceState(wl({},o.state,{idx:l}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=pi.Pop;let w=c(),m=w==null?null:w-l;l=w,u&&u({action:a,location:y.location,delta:m})}function h(w,m){a=pi.Push;let p=iy(y.location,w,m);n&&n(p,w),l=c()+1;let g=e0(p,l),_=y.createHref(p);try{o.pushState(g,"",_)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(_)}s&&u&&u({action:a,location:y.location,delta:1})}function f(w,m){a=pi.Replace;let p=iy(y.location,w,m);n&&n(p,w),l=c();let g=e0(p,l),_=y.createHref(p);o.replaceState(g,"",_),s&&u&&u({action:a,location:y.location,delta:0})}function v(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:wh(w);return Ye(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return a},get location(){return t(i,o)},listen(w){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(ZI,d),u=w,()=>{i.removeEventListener(ZI,d),u=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let m=v(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:f,go(w){return o.go(w)}};return y}var t0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(t0||(t0={}));function yV(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Na(e):e,i=d_(r.pathname||"/",n);if(i==null)return null;let s=nR(t);vV(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=PV(s[a],bV(i));return o}function nR(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ye(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let l=Ai([r,u.relativePath]),c=n.concat(u);s.children&&s.children.length>0&&(Ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),nR(s.children,e,c,l)),!(s.path==null&&!s.index)&&e.push({path:l,score:AV(l,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of rR(s.path))i(s,o,u)}),e}function rR(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=rR(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function vV(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:RV(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const _V=/^:\w+$/,wV=3,EV=2,IV=1,TV=10,SV=-2,n0=t=>t==="*";function AV(t,e){let n=t.split("/"),r=n.length;return n.some(n0)&&(r+=SV),e&&(r+=EV),n.filter(i=>!n0(i)).reduce((i,s)=>i+(_V.test(s)?wV:s===""?IV:TV),r)}function RV(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function PV(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,l=i==="/"?e:e.slice(i.length)||"/",c=CV({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},l);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Ai([i,c.pathname]),pathnameBase:OV(Ai([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Ai([i,c.pathnameBase]))}return s}function CV(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=kV(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((l,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return l[c]=xV(a[d]||"",c),l},{}),pathname:s,pathnameBase:o,pattern:t}}function kV(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),c_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function bV(t){try{return decodeURI(t)}catch(e){return c_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xV(t,e){try{return decodeURIComponent(t)}catch(n){return c_(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function d_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function NV(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Na(t):t;return{pathname:n?n.startsWith("/")?n:DV(n,e):e,search:VV(r),hash:LV(i)}}function DV(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rm(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function h_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function f_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Na(t):(i=wl({},t),Ye(!i.pathname||!i.pathname.includes("?"),Rm("?","pathname","search",i)),Ye(!i.pathname||!i.pathname.includes("#"),Rm("#","pathname","hash",i)),Ye(!i.search||!i.search.includes("#"),Rm("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let u=NV(i,a),l=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(l||c)&&(u.pathname+="/"),u}const Ai=t=>t.join("/").replace(/\/\/+/g,"/"),OV=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),VV=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,LV=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function MV(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const iR=["post","put","patch","delete"];new Set(iR);const FV=["get",...iR];new Set(FV);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eh(){return Eh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Eh.apply(this,arguments)}const p_=b.createContext(null),$V=b.createContext(null),Da=b.createContext(null),_f=b.createContext(null),Kr=b.createContext({outlet:null,matches:[],isDataRoute:!1}),sR=b.createContext(null);function UV(t,e){let{relative:n}=e===void 0?{}:e;Oa()||Ye(!1);let{basename:r,navigator:i}=b.useContext(Da),{hash:s,pathname:o,search:a}=uR(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Ai([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Oa(){return b.useContext(_f)!=null}function sc(){return Oa()||Ye(!1),b.useContext(_f).location}function oR(t){b.useContext(Da).static||b.useLayoutEffect(t)}function m_(){let{isDataRoute:t}=b.useContext(Kr);return t?ZV():jV()}function jV(){Oa()||Ye(!1);let t=b.useContext(p_),{basename:e,navigator:n}=b.useContext(Da),{matches:r}=b.useContext(Kr),{pathname:i}=sc(),s=JSON.stringify(h_(r).map(u=>u.pathnameBase)),o=b.useRef(!1);return oR(()=>{o.current=!0}),b.useCallback(function(u,l){if(l===void 0&&(l={}),!o.current)return;if(typeof u=="number"){n.go(u);return}let c=f_(u,JSON.parse(s),i,l.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Ai([e,c.pathname])),(l.replace?n.replace:n.push)(c,l.state,l)},[e,n,s,i,t])}function aR(){let{matches:t}=b.useContext(Kr),e=t[t.length-1];return e?e.params:{}}function uR(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=b.useContext(Kr),{pathname:i}=sc(),s=JSON.stringify(h_(r).map(o=>o.pathnameBase));return b.useMemo(()=>f_(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function BV(t,e){return zV(t,e)}function zV(t,e,n){Oa()||Ye(!1);let{navigator:r}=b.useContext(Da),{matches:i}=b.useContext(Kr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let u=sc(),l;if(e){var c;let y=typeof e=="string"?Na(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||Ye(!1),l=y}else l=u;let d=l.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",f=yV(t,{pathname:h}),v=HV(f&&f.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Ai([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Ai([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&v?b.createElement(_f.Provider,{value:{location:Eh({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:pi.Pop}},v):v}function qV(){let t=JV(),e=MV(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,s)}const GV=b.createElement(qV,null);class WV extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?b.createElement(Kr.Provider,{value:this.props.routeContext},b.createElement(sR.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function KV(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(p_);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Kr.Provider,{value:e},r)}function HV(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id]));a>=0||Ye(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,u,l)=>{let c=u.route.id?o==null?void 0:o[u.route.id]:null,d=null;n&&(d=u.route.errorElement||GV);let h=e.concat(s.slice(0,l+1)),f=()=>{let v;return c?v=d:u.route.Component?v=b.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=a,b.createElement(KV,{match:u,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:v})};return n&&(u.route.ErrorBoundary||u.route.errorElement||l===0)?b.createElement(WV,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var sy;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(sy||(sy={}));var El;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(El||(El={}));function QV(t){let e=b.useContext(p_);return e||Ye(!1),e}function YV(t){let e=b.useContext($V);return e||Ye(!1),e}function XV(t){let e=b.useContext(Kr);return e||Ye(!1),e}function lR(t){let e=XV(),n=e.matches[e.matches.length-1];return n.route.id||Ye(!1),n.route.id}function JV(){var t;let e=b.useContext(sR),n=YV(El.UseRouteError),r=lR(El.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function ZV(){let{router:t}=QV(sy.UseNavigateStable),e=lR(El.UseNavigateStable),n=b.useRef(!1);return oR(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Eh({fromRouteId:e},s)))},[t,e])}function eL(t){let{to:e,replace:n,state:r,relative:i}=t;Oa()||Ye(!1);let{matches:s}=b.useContext(Kr),{pathname:o}=sc(),a=m_(),u=f_(e,h_(s).map(c=>c.pathnameBase),o,i==="path"),l=JSON.stringify(u);return b.useEffect(()=>a(JSON.parse(l),{replace:n,state:r,relative:i}),[a,l,i,n,r]),null}function _s(t){Ye(!1)}function tL(t){let{basename:e="/",children:n=null,location:r,navigationType:i=pi.Pop,navigator:s,static:o=!1}=t;Oa()&&Ye(!1);let a=e.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Na(r));let{pathname:l="/",search:c="",hash:d="",state:h=null,key:f="default"}=r,v=b.useMemo(()=>{let y=d_(l,a);return y==null?null:{location:{pathname:y,search:c,hash:d,state:h,key:f},navigationType:i}},[a,l,c,d,h,f,i]);return v==null?null:b.createElement(Da.Provider,{value:u},b.createElement(_f.Provider,{children:n,value:v}))}function cR(t){let{children:e,location:n}=t;return BV(oy(e),n)}var r0;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(r0||(r0={}));new Promise(()=>{});function oy(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,oy(r.props.children,s));return}r.type!==_s&&Ye(!1),!r.props.index||!r.props.children||Ye(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=oy(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ay(){return ay=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ay.apply(this,arguments)}function nL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function rL(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function iL(t,e){return t.button===0&&(!e||e==="_self")&&!rL(t)}const sL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],oL="startTransition",i0=iD[oL];function aL(t){let{basename:e,children:n,future:r,window:i}=t,s=b.useRef();s.current==null&&(s.current=pV({window:i,v5Compat:!0}));let o=s.current,[a,u]=b.useState({action:o.action,location:o.location}),{v7_startTransition:l}=r||{},c=b.useCallback(d=>{l&&i0?i0(()=>u(d)):u(d)},[u,l]);return b.useLayoutEffect(()=>o.listen(c),[o,c]),b.createElement(tL,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const uL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,g_=b.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:l,preventScrollReset:c}=e,d=nL(e,sL),{basename:h}=b.useContext(Da),f,v=!1;if(typeof l=="string"&&lL.test(l)&&(f=l,uL))try{let p=new URL(window.location.href),g=l.startsWith("//")?new URL(p.protocol+l):new URL(l),_=d_(g.pathname,h);g.origin===p.origin&&_!=null?l=_+g.search+g.hash:v=!0}catch{}let y=UV(l,{relative:i}),w=cL(l,{replace:o,state:a,target:u,preventScrollReset:c,relative:i});function m(p){r&&r(p),p.defaultPrevented||w(p)}return b.createElement("a",ay({},d,{href:f||y,onClick:v||s?r:m,ref:n,target:u}))});var s0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(s0||(s0={}));var o0;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(o0||(o0={}));function cL(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=m_(),u=sc(),l=uR(t,{relative:o});return b.useCallback(c=>{if(iL(c,n)){c.preventDefault();let d=r!==void 0?r:wh(u)===wh(l);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[u,a,l,r,i,n,t,s,o])}var dR={exports:{}},hR={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=b;function dL(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hL=typeof Object.is=="function"?Object.is:dL,fL=ua.useState,pL=ua.useEffect,mL=ua.useLayoutEffect,gL=ua.useDebugValue;function yL(t,e){var n=e(),r=fL({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return mL(function(){i.value=n,i.getSnapshot=e,Pm(i)&&s({inst:i})},[t,n,e]),pL(function(){return Pm(i)&&s({inst:i}),t(function(){Pm(i)&&s({inst:i})})},[t]),gL(n),n}function Pm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hL(t,n)}catch{return!0}}function vL(t,e){return e()}var _L=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?vL:yL;hR.useSyncExternalStore=ua.useSyncExternalStore!==void 0?ua.useSyncExternalStore:_L;dR.exports=hR;var fR=dR.exports,wL={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf=b,EL=fR;function IL(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var TL=typeof Object.is=="function"?Object.is:IL,SL=EL.useSyncExternalStore,AL=wf.useRef,RL=wf.useEffect,PL=wf.useMemo,CL=wf.useDebugValue;wL.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=AL(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=PL(function(){function u(f){if(!l){if(l=!0,c=f,f=r(f),i!==void 0&&o.hasValue){var v=o.value;if(i(v,f))return d=v}return d=f}if(v=d,TL(c,f))return v;var y=r(f);return i!==void 0&&i(v,y)?v:(c=f,d=y)}var l=!1,c,d,h=n===void 0?null:n;return[function(){return u(e())},h===null?void 0:function(){return u(h())}]},[e,n,r,i]);var a=SL(t,s[0],s[1]);return RL(function(){o.hasValue=!0,o.value=a},[a]),CL(a),a};function kL(t){t()}let pR=kL;const bL=t=>pR=t,xL=()=>pR,a0=Symbol.for("react-redux-context"),u0=typeof globalThis<"u"?globalThis:{};function NL(){var t;if(!b.createContext)return{};const e=(t=u0[a0])!=null?t:u0[a0]=new Map;let n=e.get(b.createContext);return n||(n=b.createContext(null),e.set(b.createContext,n)),n}const mR=NL(),DL=()=>{throw new Error("uSES not initialized!")};function Ri(){return Ri=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ri.apply(this,arguments)}function y_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var gR={exports:{}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gt=typeof Symbol=="function"&&Symbol.for,v_=gt?Symbol.for("react.element"):60103,__=gt?Symbol.for("react.portal"):60106,Ef=gt?Symbol.for("react.fragment"):60107,If=gt?Symbol.for("react.strict_mode"):60108,Tf=gt?Symbol.for("react.profiler"):60114,Sf=gt?Symbol.for("react.provider"):60109,Af=gt?Symbol.for("react.context"):60110,w_=gt?Symbol.for("react.async_mode"):60111,Rf=gt?Symbol.for("react.concurrent_mode"):60111,Pf=gt?Symbol.for("react.forward_ref"):60112,Cf=gt?Symbol.for("react.suspense"):60113,OL=gt?Symbol.for("react.suspense_list"):60120,kf=gt?Symbol.for("react.memo"):60115,bf=gt?Symbol.for("react.lazy"):60116,VL=gt?Symbol.for("react.block"):60121,LL=gt?Symbol.for("react.fundamental"):60117,ML=gt?Symbol.for("react.responder"):60118,FL=gt?Symbol.for("react.scope"):60119;function Sn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case v_:switch(t=t.type,t){case w_:case Rf:case Ef:case Tf:case If:case Cf:return t;default:switch(t=t&&t.$$typeof,t){case Af:case Pf:case bf:case kf:case Sf:return t;default:return e}}case __:return e}}}function yR(t){return Sn(t)===Rf}ge.AsyncMode=w_;ge.ConcurrentMode=Rf;ge.ContextConsumer=Af;ge.ContextProvider=Sf;ge.Element=v_;ge.ForwardRef=Pf;ge.Fragment=Ef;ge.Lazy=bf;ge.Memo=kf;ge.Portal=__;ge.Profiler=Tf;ge.StrictMode=If;ge.Suspense=Cf;ge.isAsyncMode=function(t){return yR(t)||Sn(t)===w_};ge.isConcurrentMode=yR;ge.isContextConsumer=function(t){return Sn(t)===Af};ge.isContextProvider=function(t){return Sn(t)===Sf};ge.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===v_};ge.isForwardRef=function(t){return Sn(t)===Pf};ge.isFragment=function(t){return Sn(t)===Ef};ge.isLazy=function(t){return Sn(t)===bf};ge.isMemo=function(t){return Sn(t)===kf};ge.isPortal=function(t){return Sn(t)===__};ge.isProfiler=function(t){return Sn(t)===Tf};ge.isStrictMode=function(t){return Sn(t)===If};ge.isSuspense=function(t){return Sn(t)===Cf};ge.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Ef||t===Rf||t===Tf||t===If||t===Cf||t===OL||typeof t=="object"&&t!==null&&(t.$$typeof===bf||t.$$typeof===kf||t.$$typeof===Sf||t.$$typeof===Af||t.$$typeof===Pf||t.$$typeof===LL||t.$$typeof===ML||t.$$typeof===FL||t.$$typeof===VL)};ge.typeOf=Sn;gR.exports=ge;var $L=gR.exports,E_=$L,UL={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jL={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},BL={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vR={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},I_={};I_[E_.ForwardRef]=BL;I_[E_.Memo]=vR;function l0(t){return E_.isMemo(t)?vR:I_[t.$$typeof]||UL}var zL=Object.defineProperty,qL=Object.getOwnPropertyNames,c0=Object.getOwnPropertySymbols,GL=Object.getOwnPropertyDescriptor,WL=Object.getPrototypeOf,d0=Object.prototype;function _R(t,e,n){if(typeof e!="string"){if(d0){var r=WL(e);r&&r!==d0&&_R(t,r,n)}var i=qL(e);c0&&(i=i.concat(c0(e)));for(var s=l0(t),o=l0(e),a=0;a<i.length;++a){var u=i[a];if(!jL[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var l=GL(e,u);try{zL(t,u,l)}catch{}}}}return t}var KL=_R;const h0=mv(KL);var wR={exports:{}},ye={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_=Symbol.for("react.element"),S_=Symbol.for("react.portal"),xf=Symbol.for("react.fragment"),Nf=Symbol.for("react.strict_mode"),Df=Symbol.for("react.profiler"),Of=Symbol.for("react.provider"),Vf=Symbol.for("react.context"),HL=Symbol.for("react.server_context"),Lf=Symbol.for("react.forward_ref"),Mf=Symbol.for("react.suspense"),Ff=Symbol.for("react.suspense_list"),$f=Symbol.for("react.memo"),Uf=Symbol.for("react.lazy"),QL=Symbol.for("react.offscreen"),ER;ER=Symbol.for("react.module.reference");function Fn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case T_:switch(t=t.type,t){case xf:case Df:case Nf:case Mf:case Ff:return t;default:switch(t=t&&t.$$typeof,t){case HL:case Vf:case Lf:case Uf:case $f:case Of:return t;default:return e}}case S_:return e}}}ye.ContextConsumer=Vf;ye.ContextProvider=Of;ye.Element=T_;ye.ForwardRef=Lf;ye.Fragment=xf;ye.Lazy=Uf;ye.Memo=$f;ye.Portal=S_;ye.Profiler=Df;ye.StrictMode=Nf;ye.Suspense=Mf;ye.SuspenseList=Ff;ye.isAsyncMode=function(){return!1};ye.isConcurrentMode=function(){return!1};ye.isContextConsumer=function(t){return Fn(t)===Vf};ye.isContextProvider=function(t){return Fn(t)===Of};ye.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===T_};ye.isForwardRef=function(t){return Fn(t)===Lf};ye.isFragment=function(t){return Fn(t)===xf};ye.isLazy=function(t){return Fn(t)===Uf};ye.isMemo=function(t){return Fn(t)===$f};ye.isPortal=function(t){return Fn(t)===S_};ye.isProfiler=function(t){return Fn(t)===Df};ye.isStrictMode=function(t){return Fn(t)===Nf};ye.isSuspense=function(t){return Fn(t)===Mf};ye.isSuspenseList=function(t){return Fn(t)===Ff};ye.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===xf||t===Df||t===Nf||t===Mf||t===Ff||t===QL||typeof t=="object"&&t!==null&&(t.$$typeof===Uf||t.$$typeof===$f||t.$$typeof===Of||t.$$typeof===Vf||t.$$typeof===Lf||t.$$typeof===ER||t.getModuleId!==void 0)};ye.typeOf=Fn;wR.exports=ye;var YL=wR.exports;const XL=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function JL(t,e,n,r,{areStatesEqual:i,areOwnPropsEqual:s,areStatePropsEqual:o}){let a=!1,u,l,c,d,h;function f(p,g){return u=p,l=g,c=t(u,l),d=e(r,l),h=n(c,d,l),a=!0,h}function v(){return c=t(u,l),e.dependsOnOwnProps&&(d=e(r,l)),h=n(c,d,l),h}function y(){return t.dependsOnOwnProps&&(c=t(u,l)),e.dependsOnOwnProps&&(d=e(r,l)),h=n(c,d,l),h}function w(){const p=t(u,l),g=!o(p,c);return c=p,g&&(h=n(c,d,l)),h}function m(p,g){const _=!s(g,l),I=!i(p,u,g,l);return u=p,l=g,_&&I?v():_?y():I?w():h}return function(g,_){return a?m(g,_):f(g,_)}}function ZL(t,e){let{initMapStateToProps:n,initMapDispatchToProps:r,initMergeProps:i}=e,s=y_(e,XL);const o=n(t,s),a=r(t,s),u=i(t,s);return JL(o,a,u,t,s)}function eM(t,e){const n={};for(const r in t){const i=t[r];typeof i=="function"&&(n[r]=(...s)=>e(i(...s)))}return n}function uy(t){return function(n){const r=t(n);function i(){return r}return i.dependsOnOwnProps=!1,i}}function f0(t){return t.dependsOnOwnProps?!!t.dependsOnOwnProps:t.length!==1}function IR(t,e){return function(r,{displayName:i}){const s=function(a,u){return s.dependsOnOwnProps?s.mapToProps(a,u):s.mapToProps(a,void 0)};return s.dependsOnOwnProps=!0,s.mapToProps=function(a,u){s.mapToProps=t,s.dependsOnOwnProps=f0(t);let l=s(a,u);return typeof l=="function"&&(s.mapToProps=l,s.dependsOnOwnProps=f0(l),l=s(a,u)),l},s}}function A_(t,e){return(n,r)=>{throw new Error(`Invalid value of type ${typeof t} for ${e} argument when connecting component ${r.wrappedComponentName}.`)}}function tM(t){return t&&typeof t=="object"?uy(e=>eM(t,e)):t?typeof t=="function"?IR(t):A_(t,"mapDispatchToProps"):uy(e=>({dispatch:e}))}function nM(t){return t?typeof t=="function"?IR(t):A_(t,"mapStateToProps"):uy(()=>({}))}function rM(t,e,n){return Ri({},n,t,e)}function iM(t){return function(n,{displayName:r,areMergedPropsEqual:i}){let s=!1,o;return function(u,l,c){const d=t(u,l,c);return s?i(d,o)||(o=d):(s=!0,o=d),o}}}function sM(t){return t?typeof t=="function"?iM(t):A_(t,"mergeProps"):()=>rM}function oM(){const t=xL();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const p0={notify(){},get:()=>[]};function TR(t,e){let n,r=p0;function i(d){return u(),r.subscribe(d)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return!!n}function u(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=oM())}function l(){n&&(n(),n=void 0,r.clear(),r=p0)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:u,tryUnsubscribe:l,getListeners:()=>r};return c}const aM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ih=aM?b.useLayoutEffect:b.useEffect;function m0(t,e){return t===e?t!==0||e!==0||1/t===1/e:t!==t&&e!==e}function Cm(t,e){if(m0(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(!Object.prototype.hasOwnProperty.call(e,n[i])||!m0(t[n[i]],e[n[i]]))return!1;return!0}const uM=["reactReduxForwardedRef"];let SR=DL;const lM=t=>{SR=t},cM=[null,null];function dM(t,e,n){Ih(()=>t(...e),n)}function hM(t,e,n,r,i,s){t.current=r,n.current=!1,i.current&&(i.current=null,s())}function fM(t,e,n,r,i,s,o,a,u,l,c){if(!t)return()=>{};let d=!1,h=null;const f=()=>{if(d||!a.current)return;const y=e.getState();let w,m;try{w=r(y,i.current)}catch(p){m=p,h=p}m||(h=null),w===s.current?o.current||l():(s.current=w,u.current=w,o.current=!0,c())};return n.onStateChange=f,n.trySubscribe(),f(),()=>{if(d=!0,n.tryUnsubscribe(),n.onStateChange=null,h)throw h}}function pM(t,e){return t===e}function An(t,e,n,{pure:r,areStatesEqual:i=pM,areOwnPropsEqual:s=Cm,areStatePropsEqual:o=Cm,areMergedPropsEqual:a=Cm,forwardRef:u=!1,context:l=mR}={}){const c=l,d=nM(t),h=tM(e),f=sM(n),v=!!t;return w=>{const m=w.displayName||w.name||"Component",p=`Connect(${m})`,g={shouldHandleStateChanges:v,displayName:p,wrappedComponentName:m,WrappedComponent:w,initMapStateToProps:d,initMapDispatchToProps:h,initMergeProps:f,areStatesEqual:i,areStatePropsEqual:o,areOwnPropsEqual:s,areMergedPropsEqual:a};function _(C){const[L,J,z]=b.useMemo(()=>{const{reactReduxForwardedRef:ve}=C,wt=y_(C,uM);return[C.context,ve,wt]},[C]),Ne=b.useMemo(()=>L&&L.Consumer&&YL.isContextConsumer(b.createElement(L.Consumer,null))?L:c,[L,c]),$e=b.useContext(Ne),Ut=!!C.store&&!!C.store.getState&&!!C.store.dispatch,Tr=!!$e&&!!$e.store,it=Ut?C.store:$e.store,fn=Tr?$e.getServerState:it.getState,Ge=b.useMemo(()=>ZL(it.dispatch,g),[it]),[F,H]=b.useMemo(()=>{if(!v)return cM;const ve=TR(it,Ut?void 0:$e.subscription),wt=ve.notifyNestedSubs.bind(ve);return[ve,wt]},[it,Ut,$e]),Q=b.useMemo(()=>Ut?$e:Ri({},$e,{subscription:F}),[Ut,$e,F]),E=b.useRef(),P=b.useRef(z),T=b.useRef(),O=b.useRef(!1);b.useRef(!1);const q=b.useRef(!1),K=b.useRef();Ih(()=>(q.current=!0,()=>{q.current=!1}),[]);const Y=b.useMemo(()=>()=>T.current&&z===P.current?T.current:Ge(it.getState(),z),[it,z]),ne=b.useMemo(()=>wt=>F?fM(v,it,F,Ge,P,E,O,q,T,H,wt):()=>{},[F]);dM(hM,[P,E,O,z,T,H]);let Ue;try{Ue=SR(ne,Y,fn?()=>Ge(fn(),z):Y)}catch(ve){throw K.current&&(ve.message+=`
The error may be correlated with this previous error:
${K.current.stack}

`),ve}Ih(()=>{K.current=void 0,T.current=void 0,E.current=Ue});const Ce=b.useMemo(()=>b.createElement(w,Ri({},Ue,{ref:J})),[J,w,Ue]);return b.useMemo(()=>v?b.createElement(Ne.Provider,{value:Q},Ce):Ce,[Ne,Ce,Q])}const S=b.memo(_);if(S.WrappedComponent=w,S.displayName=_.displayName=p,u){const L=b.forwardRef(function(z,Ne){return b.createElement(S,Ri({},z,{reactReduxForwardedRef:Ne}))});return L.displayName=p,L.WrappedComponent=w,h0(L,w)}return h0(S,w)}}function mM({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",noopCheck:s="once"}){const o=b.useMemo(()=>{const l=TR(t);return{store:t,subscription:l,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:s}},[t,r,i,s]),a=b.useMemo(()=>t.getState(),[t]);Ih(()=>{const{subscription:l}=o;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),a!==t.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[o,a]);const u=e||mR;return b.createElement(u.Provider,{value:o},n)}lM(fR.useSyncExternalStore);bL(tR.unstable_batchedUpdates);var Th="NOT_FOUND";function gM(t){var e;return{get:function(r){return e&&t(e.key,r)?e.value:Th},put:function(r,i){e={key:r,value:i}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}function yM(t,e){var n=[];function r(a){var u=n.findIndex(function(c){return e(a,c.key)});if(u>-1){var l=n[u];return u>0&&(n.splice(u,1),n.unshift(l)),l.value}return Th}function i(a,u){r(a)===Th&&(n.unshift({key:a,value:u}),n.length>t&&n.pop())}function s(){return n}function o(){n=[]}return{get:r,put:i,getEntries:s,clear:o}}var vM=function(e,n){return e===n};function _M(t){return function(n,r){if(n===null||r===null||n.length!==r.length)return!1;for(var i=n.length,s=0;s<i;s++)if(!t(n[s],r[s]))return!1;return!0}}function wM(t,e){var n=typeof e=="object"?e:{equalityCheck:e},r=n.equalityCheck,i=r===void 0?vM:r,s=n.maxSize,o=s===void 0?1:s,a=n.resultEqualityCheck,u=_M(i),l=o===1?gM(u):yM(o,u);function c(){var d=l.get(arguments);if(d===Th){if(d=t.apply(null,arguments),a){var h=l.getEntries(),f=h.find(function(v){return a(v.value,d)});f&&(d=f.value)}l.put(arguments,d)}return d}return c.clearCache=function(){return l.clear()},c}function EM(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every(function(r){return typeof r=="function"})){var n=e.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function IM(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=function(){for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];var l=0,c,d={memoizeOptions:void 0},h=a.pop();if(typeof h=="object"&&(d=h,h=a.pop()),typeof h!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof h+"]");var f=d,v=f.memoizeOptions,y=v===void 0?n:v,w=Array.isArray(y)?y:[y],m=EM(a),p=t.apply(void 0,[function(){return l++,h.apply(null,arguments)}].concat(w)),g=t(function(){for(var I=[],S=m.length,C=0;C<S;C++)I.push(m[C].apply(null,arguments));return c=p.apply(null,I),c});return Object.assign(g,{resultFunc:h,memoizedResultFunc:p,dependencies:m,lastResult:function(){return c},recomputations:function(){return l},resetRecomputations:function(){return l=0}}),g};return i}var $n=IM(wM),no=function(e,n){if(n===void 0&&(n=$n),typeof e!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof e));var r=Object.keys(e),i=n(r.map(function(s){return e[s]}),function(){for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return o.reduce(function(u,l,c){return u[r[c]]=l,u},{})});return i};const R_=t=>t.shop,AR=$n([R_],t=>t.collections),TM=t=>$n([AR],e=>e?e[t]:null),SM=$n([AR],t=>t?Object.keys(t).map(e=>t[e]):[]),AM=$n([R_],t=>t.isFetching),RM=$n([R_],t=>!!t.collections),Cs={FETCH_COLLECTIONS_START:"  FETCH-COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"    FETCH_COLLECTIONS_FAILURE"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},PM=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},PR={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,f=l&63;u||(f=64,o||(h=64)),r.push(n[c],n[d],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(RR(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):PM(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||d==null)throw new CM;const h=s<<2|a>>4;if(r.push(h),l!==64){const f=a<<4&240|l>>2;if(r.push(f),d!==64){const v=l<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CM extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kM=function(t){const e=RR(t);return PR.encodeByteArray(e,!0)},Sh=function(t){return kM(t).replace(/\./g,"")},CR=function(t){try{return PR.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ah(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!bM(n)||(t[n]=Ah(t[n],e[n]));return t}function bM(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xM(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NM=()=>xM().__FIREBASE_DEFAULTS__,DM=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},OM=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&CR(t[1]);return e&&JSON.parse(e)},P_=()=>{try{return NM()||DM()||OM()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},kR=()=>{var t;return(t=P_())===null||t===void 0?void 0:t.config},VM=t=>{var e;return(e=P_())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MM(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Sh(JSON.stringify(n)),Sh(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FM(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function C_(){var t;const e=(t=P_())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $M(){return typeof self=="object"&&self.self===self}function bR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function k_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xR(){const t=Fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function UM(){return!C_()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Il(){try{return typeof indexedDB=="object"}catch{return!1}}function jM(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BM="FirebaseError";class Kt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=BM,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ro.prototype.create)}}class ro{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zM(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Kt(i,a,r)}}function zM(t,e){return t.replace(qM,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qM=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function GM(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ly(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(y0(s)&&y0(o)){if(!ly(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function y0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Pu(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function NR(t,e){const n=new WM(t,e);return n.subscribe.bind(n)}class WM{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");KM(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=km),i.error===void 0&&(i.error=km),i.complete===void 0&&(i.complete=km);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KM(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function km(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){return t&&t._delegate?t._delegate:t}class _r{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new LM;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YM(e))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=us){return this.instances.has(e)}getOptions(e=us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:QM(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=us){return this.component?this.component.multipleInstances?e:us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QM(t){return t===us?void 0:t}function YM(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HM(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=[];var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const DR={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},JM=ae.INFO,ZM={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},e2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ZM[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jf{constructor(e){this.name=e,this._logLevel=JM,this._logHandler=e2,this._userLogHandler=null,b_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}function t2(t){b_.forEach(e=>{e.setLogLevel(t)})}function n2(t,e){for(const n of b_){let r=null;e&&e.level&&(r=DR[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:ae[s].toLowerCase(),message:a,args:o,type:i.name})}}}const r2=(t,e)=>e.some(n=>t instanceof n);let v0,_0;function i2(){return v0||(v0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function s2(){return _0||(_0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const OR=new WeakMap,cy=new WeakMap,VR=new WeakMap,bm=new WeakMap,x_=new WeakMap;function o2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Pi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&OR.set(n,t)}).catch(()=>{}),x_.set(e,t),e}function a2(t){if(cy.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cy.set(t,e)}let dy={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cy.get(t);if(e==="objectStoreNames")return t.objectStoreNames||VR.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function u2(t){dy=t(dy)}function l2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xm(this),e,...n);return VR.set(r,e.sort?e.sort():[e]),Pi(r)}:s2().includes(t)?function(...e){return t.apply(xm(this),e),Pi(OR.get(this))}:function(...e){return Pi(t.apply(xm(this),e))}}function c2(t){return typeof t=="function"?l2(t):(t instanceof IDBTransaction&&a2(t),r2(t,i2())?new Proxy(t,dy):t)}function Pi(t){if(t instanceof IDBRequest)return o2(t);if(bm.has(t))return bm.get(t);const e=c2(t);return e!==t&&(bm.set(t,e),x_.set(e,t)),e}const xm=t=>x_.get(t);function d2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Pi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Pi(o.result),u.oldVersion,u.newVersion,Pi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const h2=["get","getKey","getAll","getAllKeys","count"],f2=["put","add","delete","clear"],Nm=new Map;function w0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nm.get(e))return Nm.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=f2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||h2.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return Nm.set(e,s),s}u2(t=>({...t,get:(e,n,r)=>w0(e,n)||t.get(e,n,r),has:(e,n)=>!!w0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(m2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function m2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hy="@firebase/app",E0="0.9.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new jf("@firebase/app"),g2="@firebase/app-compat",y2="@firebase/analytics-compat",v2="@firebase/analytics",_2="@firebase/app-check-compat",w2="@firebase/app-check",E2="@firebase/auth",I2="@firebase/auth-compat",T2="@firebase/database",S2="@firebase/database-compat",A2="@firebase/functions",R2="@firebase/functions-compat",P2="@firebase/installations",C2="@firebase/installations-compat",k2="@firebase/messaging",b2="@firebase/messaging-compat",x2="@firebase/performance",N2="@firebase/performance-compat",D2="@firebase/remote-config",O2="@firebase/remote-config-compat",V2="@firebase/storage",L2="@firebase/storage-compat",M2="@firebase/firestore",F2="@firebase/firestore-compat",$2="firebase",U2="10.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="[DEFAULT]",j2={[hy]:"fire-core",[g2]:"fire-core-compat",[v2]:"fire-analytics",[y2]:"fire-analytics-compat",[w2]:"fire-app-check",[_2]:"fire-app-check-compat",[E2]:"fire-auth",[I2]:"fire-auth-compat",[T2]:"fire-rtdb",[S2]:"fire-rtdb-compat",[A2]:"fire-fn",[R2]:"fire-fn-compat",[P2]:"fire-iid",[C2]:"fire-iid-compat",[k2]:"fire-fcm",[b2]:"fire-fcm-compat",[x2]:"fire-perf",[N2]:"fire-perf-compat",[D2]:"fire-rc",[O2]:"fire-rc-compat",[V2]:"fire-gcs",[L2]:"fire-gcs-compat",[M2]:"fire-fst",[F2]:"fire-fst-compat","fire-js":"fire-js",[$2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new Map,Tl=new Map;function Rh(t,e){try{t.container.addComponent(e)}catch(n){js.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function LR(t,e){t.container.addOrOverwriteComponent(e)}function Oi(t){const e=t.name;if(Tl.has(e))return js.debug(`There were multiple attempts to register component ${e}.`),!1;Tl.set(e,t);for(const n of Di.values())Rh(n,t);return!0}function MR(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function B2(t,e,n=Ni){MR(t,e).clearInstance(n)}function z2(){Tl.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mr=new ro("app","Firebase",q2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G2=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mr.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=U2;function N_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ni,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Mr.create("bad-app-name",{appName:String(i)});if(n||(n=kR()),!n)throw Mr.create("no-options");const s=Di.get(i);if(s){if(ly(n,s.options)&&ly(r,s.config))return s;throw Mr.create("duplicate-app",{appName:i})}const o=new XM(i);for(const u of Tl.values())o.addComponent(u);const a=new G2(n,r,o);return Di.set(i,a),a}function W2(t=Ni){const e=Di.get(t);if(!e&&t===Ni&&kR())return N_();if(!e)throw Mr.create("no-app",{appName:t});return e}function K2(){return Array.from(Di.values())}async function FR(t){const e=t.name;Di.has(e)&&(Di.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function yr(t,e,n){var r;let i=(r=j2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),js.warn(a.join(" "));return}Oi(new _r(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function $R(t,e){if(t!==null&&typeof t!="function")throw Mr.create("invalid-log-argument");n2(t,e)}function UR(t){t2(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2="firebase-heartbeat-database",Q2=1,Sl="firebase-heartbeat-store";let Dm=null;function jR(){return Dm||(Dm=d2(H2,Q2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Sl)}}}).catch(t=>{throw Mr.create("idb-open",{originalErrorMessage:t.message})})),Dm}async function Y2(t){try{return await(await jR()).transaction(Sl).objectStore(Sl).get(BR(t))}catch(e){if(e instanceof Kt)js.warn(e.message);else{const n=Mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});js.warn(n.message)}}}async function I0(t,e){try{const r=(await jR()).transaction(Sl,"readwrite");await r.objectStore(Sl).put(e,BR(t)),await r.done}catch(n){if(n instanceof Kt)js.warn(n.message);else{const r=Mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});js.warn(r.message)}}}function BR(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2=1024,J2=30*24*60*60*1e3;class Z2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tF(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=T0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=J2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=T0(),{heartbeatsToSend:n,unsentEntries:r}=eF(this._heartbeatsCache.heartbeats),i=Sh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function T0(){return new Date().toISOString().substring(0,10)}function eF(t,e=X2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),S0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),S0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tF{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Il()?jM().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Y2(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return I0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return I0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function S0(t){return Sh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nF(t){Oi(new _r("platform-logger",e=>new p2(e),"PRIVATE")),Oi(new _r("heartbeat",e=>new Z2(e),"PRIVATE")),yr(hy,E0,t),yr(hy,E0,"esm2017"),yr("fire-js","")}nF("");const rF=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Kt,SDK_VERSION:Hi,_DEFAULT_ENTRY_NAME:Ni,_addComponent:Rh,_addOrOverwriteComponent:LR,_apps:Di,_clearComponents:z2,_components:Tl,_getProvider:MR,_registerComponent:Oi,_removeServiceInstance:B2,deleteApp:FR,getApp:W2,getApps:K2,initializeApp:N_,onLog:$R,registerVersion:yr,setLogLevel:UR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e,n){this._delegate=e,this.firebase=n,Rh(e,new _r("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),FR(this._delegate)))}_getService(e,n=Ni){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ni){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Rh(this._delegate,e)}_addOrOverwriteComponent(e){LR(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sF={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},A0=new ro("app-compat","Firebase",sF);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oF(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:yr,setLogLevel:UR,onLog:$R,apps:null,SDK_VERSION:Hi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:rF}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Ni,!g0(e,l))throw A0.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const d=N_(l,c);if(g0(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,d=c.replace("-compat","");if(Oi(l)&&l.type==="PUBLIC"){const h=(f=i())=>{if(typeof f[d]!="function")throw A0.create("invalid-app-argument",{appName:c});return f[d]()};l.serviceProps!==void 0&&Ah(h,l.serviceProps),n[d]=h,t.prototype[d]=function(...f){return this._getService.bind(this,c).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?n[d]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zR(){const t=oF(iF);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:zR,extendNamespace:e,createSubscribe:NR,ErrorFactory:ro,deepExtend:Ah});function e(n){Ah(t,n)}return t}const aF=zR();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=new jf("@firebase/app-compat"),uF="@firebase/app-compat",lF="0.2.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cF(t){yr(uF,lF,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if($M()&&self.firebase!==void 0){R0.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&R0.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Hr=aF;cF();var dF="firebase",hF="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hr.registerVersion(dF,hF,"app-compat");var fF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,D_=D_||{},Z=fF||self;function Bf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function oc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pF(t){return Object.prototype.hasOwnProperty.call(t,Om)&&t[Om]||(t[Om]=++mF)}var Om="closure_uid_"+(1e9*Math.random()>>>0),mF=0;function gF(t,e,n){return t.call.apply(t.bind,arguments)}function yF(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Lt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Lt=gF:Lt=yF,Lt.apply(null,arguments)}function Zc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function yt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Qi(){this.s=this.s,this.o=this.o}var vF=0;Qi.prototype.s=!1;Qi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),vF!=0)&&pF(this)};Qi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qR=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function O_(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function P0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Bf(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Mt.prototype.h=function(){this.defaultPrevented=!0};var _F=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",()=>{},e),Z.removeEventListener("test",()=>{},e)}catch{}return t}();function Al(t){return/^[\s\xa0]*$/.test(t)}function zf(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function ir(t){return zf().indexOf(t)!=-1}function V_(t){return V_[" "](t),t}V_[" "]=function(){};function wF(t,e){var n=h$;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var EF=ir("Opera"),la=ir("Trident")||ir("MSIE"),GR=ir("Edge"),fy=GR||la,WR=ir("Gecko")&&!(zf().toLowerCase().indexOf("webkit")!=-1&&!ir("Edge"))&&!(ir("Trident")||ir("MSIE"))&&!ir("Edge"),IF=zf().toLowerCase().indexOf("webkit")!=-1&&!ir("Edge");function KR(){var t=Z.document;return t?t.documentMode:void 0}var py;e:{var Vm="",Lm=function(){var t=zf();if(WR)return/rv:([^\);]+)(\)|;)/.exec(t);if(GR)return/Edge\/([\d\.]+)/.exec(t);if(la)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(IF)return/WebKit\/(\S+)/.exec(t);if(EF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Lm&&(Vm=Lm?Lm[1]:""),la){var Mm=KR();if(Mm!=null&&Mm>parseFloat(Vm)){py=String(Mm);break e}}py=Vm}var my;if(Z.document&&la){var C0=KR();my=C0||parseInt(py,10)||void 0}else my=void 0;var TF=my;function Rl(t,e){if(Mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(WR){e:{try{V_(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:SF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Rl.$.h.call(this)}}yt(Rl,Mt);var SF={2:"touch",3:"pen",4:"mouse"};Rl.prototype.h=function(){Rl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ac="closure_listenable_"+(1e6*Math.random()|0),AF=0;function RF(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++AF,this.fa=this.ia=!1}function qf(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function L_(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function PF(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function HR(t){const e={};for(const n in t)e[n]=t[n];return e}const k0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function QR(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<k0.length;s++)n=k0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Gf(t){this.src=t,this.g={},this.h=0}Gf.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=yy(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new RF(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function gy(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=qR(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(qf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function yy(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var M_="closure_lm_"+(1e6*Math.random()|0),Fm={};function YR(t,e,n,r,i){if(r&&r.once)return JR(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)YR(t,e[s],n,r,i);return null}return n=U_(n),t&&t[ac]?t.O(e,n,oc(r)?!!r.capture:!!r,i):XR(t,e,n,!1,r,i)}function XR(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=oc(i)?!!i.capture:!!i,a=$_(t);if(a||(t[M_]=a=new Gf(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=CF(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)_F||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(eP(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function CF(){function t(n){return e.call(t.src,t.listener,n)}const e=kF;return t}function JR(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)JR(t,e[s],n,r,i);return null}return n=U_(n),t&&t[ac]?t.P(e,n,oc(r)?!!r.capture:!!r,i):XR(t,e,n,!0,r,i)}function ZR(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)ZR(t,e[s],n,r,i);else r=oc(r)?!!r.capture:!!r,n=U_(n),t&&t[ac]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=yy(s,n,r,i),-1<n&&(qf(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=$_(t))&&(e=t.g[e.toString()],t=-1,e&&(t=yy(e,n,r,i)),(n=-1<t?e[t]:null)&&F_(n))}function F_(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ac])gy(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(eP(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=$_(e))?(gy(n,t),n.h==0&&(n.src=null,e[M_]=null)):qf(t)}}}function eP(t){return t in Fm?Fm[t]:Fm[t]="on"+t}function kF(t,e){if(t.fa)t=!0;else{e=new Rl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&F_(t),t=n.call(r,e)}return t}function $_(t){return t=t[M_],t instanceof Gf?t:null}var $m="__closure_events_fn_"+(1e9*Math.random()>>>0);function U_(t){return typeof t=="function"?t:(t[$m]||(t[$m]=function(e){return t.handleEvent(e)}),t[$m])}function mt(){Qi.call(this),this.i=new Gf(this),this.S=this,this.J=null}yt(mt,Qi);mt.prototype[ac]=!0;mt.prototype.removeEventListener=function(t,e,n,r){ZR(this,t,e,n,r)};function Pt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Mt(e,t);else if(e instanceof Mt)e.target=e.target||t;else{var i=e;e=new Mt(r,t),QR(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ed(o,r,!0,e)&&i}if(o=e.g=t,i=ed(o,r,!0,e)&&i,i=ed(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ed(o,r,!1,e)&&i}mt.prototype.N=function(){if(mt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)qf(n[r]);delete t.g[e],t.h--}}this.J=null};mt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};mt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ed(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&gy(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var j_=Z.JSON.stringify;class bF{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function xF(){var t=B_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class NF{constructor(){this.h=this.g=null}add(e,n){const r=tP.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var tP=new bF(()=>new DF,t=>t.reset());class DF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function OF(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function VF(t){Z.setTimeout(()=>{throw t},0)}let Pl,Cl=!1,B_=new NF,nP=()=>{const t=Z.Promise.resolve(void 0);Pl=()=>{t.then(LF)}};var LF=()=>{for(var t;t=xF();){try{t.h.call(t.g)}catch(n){VF(n)}var e=tP;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Cl=!1};function Wf(t,e){mt.call(this),this.h=t||1,this.g=e||Z,this.j=Lt(this.qb,this),this.l=Date.now()}yt(Wf,mt);U=Wf.prototype;U.ga=!1;U.T=null;U.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Pt(this,"tick"),this.ga&&(z_(this),this.start()))}};U.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function z_(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}U.N=function(){Wf.$.N.call(this),z_(this),delete this.g};function q_(t,e,n){if(typeof t=="function")n&&(t=Lt(t,n));else if(t&&typeof t.handleEvent=="function")t=Lt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function rP(t){t.g=q_(()=>{t.g=null,t.i&&(t.i=!1,rP(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class MF extends Qi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rP(this)}N(){super.N(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kl(t){Qi.call(this),this.h=t,this.g={}}yt(kl,Qi);var b0=[];function iP(t,e,n,r){Array.isArray(n)||(n&&(b0[0]=n.toString()),n=b0);for(var i=0;i<n.length;i++){var s=YR(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function sP(t){L_(t.g,function(e,n){this.g.hasOwnProperty(n)&&F_(e)},t),t.g={}}kl.prototype.N=function(){kl.$.N.call(this),sP(this)};kl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Kf(){this.g=!0}Kf.prototype.Ea=function(){this.g=!1};function FF(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function $F(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Lo(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+jF(t,n)+(r?" "+r:"")})}function UF(t,e){t.info(function(){return"TIMEOUT: "+e})}Kf.prototype.info=function(){};function jF(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return j_(n)}catch{return e}}var io={},x0=null;function Hf(){return x0=x0||new mt}io.Ta="serverreachability";function oP(t){Mt.call(this,io.Ta,t)}yt(oP,Mt);function bl(t){const e=Hf();Pt(e,new oP(e))}io.STAT_EVENT="statevent";function aP(t,e){Mt.call(this,io.STAT_EVENT,t),this.stat=e}yt(aP,Mt);function Gt(t){const e=Hf();Pt(e,new aP(e,t))}io.Ua="timingevent";function uP(t,e){Mt.call(this,io.Ua,t),this.size=e}yt(uP,Mt);function uc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var Qf={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},lP={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function G_(){}G_.prototype.h=null;function N0(t){return t.h||(t.h=t.i())}function cP(){}var lc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function W_(){Mt.call(this,"d")}yt(W_,Mt);function K_(){Mt.call(this,"c")}yt(K_,Mt);var vy;function Yf(){}yt(Yf,G_);Yf.prototype.g=function(){return new XMLHttpRequest};Yf.prototype.i=function(){return{}};vy=new Yf;function cc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new kl(this),this.P=BF,t=fy?125:void 0,this.V=new Wf(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new dP}function dP(){this.i=null,this.g="",this.h=!1}var BF=45e3,_y={},Ph={};U=cc.prototype;U.setTimeout=function(t){this.P=t};function wy(t,e,n){t.L=1,t.v=Jf(zr(e)),t.s=n,t.S=!0,hP(t,null)}function hP(t,e){t.G=Date.now(),dc(t),t.A=zr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),wP(n.i,"t",r),t.C=0,n=t.l.J,t.h=new dP,t.g=jP(t.l,n?e:null,!t.s),0<t.O&&(t.M=new MF(Lt(t.Pa,t,t.g),t.O)),iP(t.U,t.g,"readystatechange",t.nb),e=t.I?HR(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),bl(),FF(t.j,t.u,t.A,t.m,t.W,t.s)}U.nb=function(t){t=t.target;const e=this.M;e&&cr(t)==3?e.l():this.Pa(t)};U.Pa=function(t){try{if(t==this.g)e:{const c=cr(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||fy||this.g&&(this.h.h||this.g.ja()||L0(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?bl(3):bl(2)),Xf(this);var n=this.g.da();this.ca=n;t:if(fP(this)){var r=L0(this.g);t="";var i=r.length,s=cr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ws(this),qu(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,$F(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Al(a)){var l=a;break t}}l=null}if(n=l)Lo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ey(this,n);else{this.i=!1,this.o=3,Gt(12),ws(this),qu(this);break e}}this.S?(pP(this,c,o),fy&&this.i&&c==3&&(iP(this.U,this.V,"tick",this.mb),this.V.start())):(Lo(this.j,this.m,o,null),Ey(this,o)),c==4&&ws(this),this.i&&!this.J&&(c==4?MP(this.l,this):(this.i=!1,dc(this)))}else l$(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Gt(12)):(this.o=0,Gt(13)),ws(this),qu(this)}}}catch{}finally{}};function fP(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function pP(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=zF(t,n),i==Ph){e==4&&(t.o=4,Gt(14),r=!1),Lo(t.j,t.m,null,"[Incomplete Response]");break}else if(i==_y){t.o=4,Gt(15),Lo(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Lo(t.j,t.m,i,null),Ey(t,i);fP(t)&&i!=Ph&&i!=_y&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Gt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Z_(e),e.M=!0,Gt(11))):(Lo(t.j,t.m,n,"[Invalid Chunked Response]"),ws(t),qu(t))}U.mb=function(){if(this.g){var t=cr(this.g),e=this.g.ja();this.C<e.length&&(Xf(this),pP(this,t,e),this.i&&t!=4&&dc(this))}};function zF(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ph:(n=Number(e.substring(n,r)),isNaN(n)?_y:(r+=1,r+n>e.length?Ph:(e=e.slice(r,r+n),t.C=r+n,e)))}U.cancel=function(){this.J=!0,ws(this)};function dc(t){t.Y=Date.now()+t.P,mP(t,t.P)}function mP(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=uc(Lt(t.lb,t),e)}function Xf(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}U.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(UF(this.j,this.A),this.L!=2&&(bl(),Gt(17)),ws(this),this.o=2,qu(this)):mP(this,this.Y-t)};function qu(t){t.l.H==0||t.J||MP(t.l,t)}function ws(t){Xf(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,z_(t.V),sP(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ey(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Iy(n.i,t))){if(!t.K&&Iy(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)bh(n),tp(n);else break e;J_(n),Gt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=uc(Lt(n.ib,n),6e3));if(1>=TP(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Es(n,11)}else if((t.K||n.g==t)&&bh(n),!Al(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const c=l[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=l[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const v=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(H_(s,s.h),s.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Se(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=UP(r,r.J?r.pa:null,r.Y),o.K){SP(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(Xf(a),dc(a)),r.g=o}else VP(r);0<n.j.length&&np(n)}else l[0]!="stop"&&l[0]!="close"||Es(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Es(n,7):X_(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}bl(4)}catch{}}function qF(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Bf(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function GF(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Bf(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function gP(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Bf(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=GF(t),r=qF(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var yP=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WF(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ks(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ks){this.h=t.h,Ch(this,t.j),this.s=t.s,this.g=t.g,kh(this,t.m),this.l=t.l;var e=t.i,n=new xl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),D0(this,n),this.o=t.o}else t&&(e=String(t).match(yP))?(this.h=!1,Ch(this,e[1]||"",!0),this.s=Cu(e[2]||""),this.g=Cu(e[3]||"",!0),kh(this,e[4]),this.l=Cu(e[5]||"",!0),D0(this,e[6]||"",!0),this.o=Cu(e[7]||"")):(this.h=!1,this.i=new xl(null,this.h))}ks.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ku(e,O0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ku(e,O0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ku(n,n.charAt(0)=="/"?QF:HF,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ku(n,XF)),t.join("")};function zr(t){return new ks(t)}function Ch(t,e,n){t.j=n?Cu(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function kh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function D0(t,e,n){e instanceof xl?(t.i=e,JF(t.i,t.h)):(n||(e=ku(e,YF)),t.i=new xl(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function Jf(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Cu(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ku(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,KF),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function KF(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var O0=/[#\/\?@]/g,HF=/[#\?:]/g,QF=/[#\?]/g,YF=/[#\?@]/g,XF=/#/g;function xl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Yi(t){t.g||(t.g=new Map,t.h=0,t.i&&WF(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=xl.prototype;U.add=function(t,e){Yi(this),this.i=null,t=La(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function vP(t,e){Yi(t),e=La(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function _P(t,e){return Yi(t),e=La(t,e),t.g.has(e)}U.forEach=function(t,e){Yi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};U.ta=function(){Yi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};U.Z=function(t){Yi(this);let e=[];if(typeof t=="string")_P(this,t)&&(e=e.concat(this.g.get(La(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Yi(this),this.i=null,t=La(this,t),_P(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function wP(t,e,n){vP(t,e),0<n.length&&(t.i=null,t.g.set(La(t,e),O_(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function La(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function JF(t,e){e&&!t.j&&(Yi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(vP(this,r),wP(this,i,n))},t)),t.j=e}var ZF=class{constructor(t,e){this.g=t,this.map=e}};function EP(t){this.l=t||e$,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ka&&Z.g.Ka()&&Z.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var e$=10;function IP(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function TP(t){return t.h?1:t.g?t.g.size:0}function Iy(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function H_(t,e){t.g?t.g.add(e):t.h=e}function SP(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}EP.prototype.cancel=function(){if(this.i=AP(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function AP(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return O_(t.i)}var t$=class{stringify(t){return Z.JSON.stringify(t,void 0)}parse(t){return Z.JSON.parse(t,void 0)}};function n$(){this.g=new t$}function r$(t,e,n){const r=n||"";try{gP(t,function(i,s){let o=i;oc(i)&&(o=j_(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function i$(t,e){const n=new Kf;if(Z.Image){const r=new Image;r.onload=Zc(td,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Zc(td,n,r,"TestLoadImage: error",!1,e),r.onabort=Zc(td,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Zc(td,n,r,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function td(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function hc(t){this.l=t.fc||null,this.j=t.ob||!1}yt(hc,G_);hc.prototype.g=function(){return new Zf(this.l,this.j)};hc.prototype.i=function(t){return function(){return t}}({});function Zf(t,e){mt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Q_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yt(Zf,mt);var Q_=0;U=Zf.prototype;U.open=function(t,e){if(this.readyState!=Q_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Nl(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fc(this)),this.readyState=Q_};U.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Nl(this)),this.g&&(this.readyState=3,Nl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;RP(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function RP(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}U.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?fc(this):Nl(this),this.readyState==3&&RP(this)}};U.Za=function(t){this.g&&(this.response=this.responseText=t,fc(this))};U.Ya=function(t){this.g&&(this.response=t,fc(this))};U.ka=function(){this.g&&fc(this)};function fc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Nl(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Nl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Zf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var s$=Z.JSON.parse;function ze(t){mt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=PP,this.L=this.M=!1}yt(ze,mt);var PP="",o$=/^https?$/i,a$=["POST","PUT"];U=ze.prototype;U.Oa=function(t){this.M=t};U.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():vy.g(),this.C=this.u?N0(this.u):N0(vy),this.g.onreadystatechange=Lt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){V0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Z.FormData&&t instanceof Z.FormData,!(0<=qR(a$,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{bP(this),0<this.B&&((this.L=u$(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Lt(this.ua,this)):this.A=q_(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){V0(this,s)}};function u$(t){return la&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.ua=function(){typeof D_<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pt(this,"timeout"),this.abort(8))};function V0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,CP(t),ep(t)}function CP(t){t.F||(t.F=!0,Pt(t,"complete"),Pt(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pt(this,"complete"),Pt(this,"abort"),ep(this))};U.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ep(this,!0)),ze.$.N.call(this)};U.La=function(){this.s||(this.G||this.v||this.l?kP(this):this.kb())};U.kb=function(){kP(this)};function kP(t){if(t.h&&typeof D_<"u"&&(!t.C[1]||cr(t)!=4||t.da()!=2)){if(t.v&&cr(t)==4)q_(t.La,0,t);else if(Pt(t,"readystatechange"),cr(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(yP)[1]||null;!i&&Z.self&&Z.self.location&&(i=Z.self.location.protocol.slice(0,-1)),r=!o$.test(i?i.toLowerCase():"")}n=r}if(n)Pt(t,"complete"),Pt(t,"success");else{t.m=6;try{var s=2<cr(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",CP(t)}}finally{ep(t)}}}}function ep(t,e){if(t.g){bP(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Pt(t,"ready");try{n.onreadystatechange=r}catch{}}}function bP(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}U.isActive=function(){return!!this.g};function cr(t){return t.g?t.g.readyState:0}U.da=function(){try{return 2<cr(this)?this.g.status:-1}catch{return-1}};U.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),s$(e)}};function L0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case PP:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function l$(t){const e={};t=(t.g&&2<=cr(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Al(t[r]))continue;var n=OF(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}PF(e,function(r){return r.join(", ")})}U.Ia=function(){return this.m};U.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function xP(t){let e="";return L_(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Y_(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=xP(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function cu(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function NP(t){this.Ga=0,this.j=[],this.l=new Kf,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=cu("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=cu("baseRetryDelayMs",5e3,t),this.hb=cu("retryDelaySeedMs",1e4,t),this.eb=cu("forwardChannelMaxRetries",2,t),this.xa=cu("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new EP(t&&t.concurrentRequestLimit),this.Ja=new n$,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}U=NP.prototype;U.ra=8;U.H=1;function X_(t){if(DP(t),t.H==3){var e=t.W++,n=zr(t.I);if(Se(n,"SID",t.K),Se(n,"RID",e),Se(n,"TYPE","terminate"),pc(t,n),e=new cc(t,t.l,e),e.L=2,e.v=Jf(zr(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon)try{n=Z.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=jP(e.l,null),e.g.ha(e.v)),e.G=Date.now(),dc(e)}$P(t)}function tp(t){t.g&&(Z_(t),t.g.cancel(),t.g=null)}function DP(t){tp(t),t.u&&(Z.clearTimeout(t.u),t.u=null),bh(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function np(t){if(!IP(t.i)&&!t.m){t.m=!0;var e=t.Na;Pl||nP(),Cl||(Pl(),Cl=!0),B_.add(e,t),t.C=0}}function c$(t,e){return TP(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=uc(Lt(t.Na,t,e),FP(t,t.C)),t.C++,!0)}U.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new cc(this,this.l,t);let s=this.s;if(this.U&&(s?(s=HR(s),QR(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=OP(this,i,e),n=zr(this.I),Se(n,"RID",t),Se(n,"CVER",22),this.F&&Se(n,"X-HTTP-Session-Id",this.F),pc(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(xP(s)))+"&"+e:this.o&&Y_(n,this.o,s)),H_(this.i,i),this.bb&&Se(n,"TYPE","init"),this.P?(Se(n,"$req",e),Se(n,"SID","null"),i.aa=!0,wy(i,n,null)):wy(i,n,e),this.H=2}}else this.H==3&&(t?M0(this,t):this.j.length==0||IP(this.i)||M0(this))};function M0(t,e){var n;e?n=e.m:n=t.W++;const r=zr(t.I);Se(r,"SID",t.K),Se(r,"RID",n),Se(r,"AID",t.V),pc(t,r),t.o&&t.s&&Y_(r,t.o,t.s),n=new cc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=OP(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),H_(t.i,n),wy(n,r,e)}function pc(t,e){t.na&&L_(t.na,function(n,r){Se(e,r,n)}),t.h&&gP({},function(n,r){Se(e,r,n)})}function OP(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Lt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].g;const c=i[u].map;if(l-=s,0>l)s=Math.max(0,i[u].g-100),a=!1;else try{r$(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function VP(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Pl||nP(),Cl||(Pl(),Cl=!0),B_.add(e,t),t.A=0}}function J_(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=uc(Lt(t.Ma,t),FP(t,t.A)),t.A++,!0)}U.Ma=function(){if(this.u=null,LP(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=uc(Lt(this.jb,this),t)}};U.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Gt(10),tp(this),LP(this))};function Z_(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function LP(t){t.g=new cc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=zr(t.wa);Se(e,"RID","rpc"),Se(e,"SID",t.K),Se(e,"AID",t.V),Se(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Se(e,"TO",t.qa),Se(e,"TYPE","xmlhttp"),pc(t,e),t.o&&t.s&&Y_(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Jf(zr(e)),n.s=null,n.S=!0,hP(n,t)}U.ib=function(){this.v!=null&&(this.v=null,tp(this),J_(this),Gt(19))};function bh(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function MP(t,e){var n=null;if(t.g==e){bh(t),Z_(t),t.g=null;var r=2}else if(Iy(t.i,e))n=e.F,SP(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Hf(),Pt(r,new uP(r,n)),np(t)}else VP(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&c$(t,e)||r==2&&J_(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Es(t,5);break;case 4:Es(t,10);break;case 3:Es(t,6);break;default:Es(t,2)}}}function FP(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Es(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Lt(t.pb,t);n||(n=new ks("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||Ch(n,"https"),Jf(n)),i$(n.toString(),r)}else Gt(2);t.H=0,t.h&&t.h.za(e),$P(t),DP(t)}U.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Gt(2)):(this.l.info("Failed to ping google.com"),Gt(1))};function $P(t){if(t.H=0,t.ma=[],t.h){const e=AP(t.i);(e.length!=0||t.j.length!=0)&&(P0(t.ma,e),P0(t.ma,t.j),t.i.i.length=0,O_(t.j),t.j.length=0),t.h.ya()}}function UP(t,e,n){var r=n instanceof ks?zr(n):new ks(n);if(r.g!="")e&&(r.g=e+"."+r.g),kh(r,r.m);else{var i=Z.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ks(null);r&&Ch(s,r),e&&(s.g=e),i&&kh(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Se(r,n,e),Se(r,"VER",t.ra),pc(t,r),r}function jP(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ze(new hc({ob:!0})):new ze(t.va),e.Oa(t.J),e}U.isActive=function(){return!!this.h&&this.h.isActive(this)};function BP(){}U=BP.prototype;U.Ba=function(){};U.Aa=function(){};U.za=function(){};U.ya=function(){};U.isActive=function(){return!0};U.Va=function(){};function xh(){if(la&&!(10<=Number(TF)))throw Error("Environmental error: no available transport.")}xh.prototype.g=function(t,e){return new wn(t,e)};function wn(t,e){mt.call(this),this.g=new NP(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Al(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Al(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ma(this)}yt(wn,mt);wn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Gt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=UP(t,null,t.Y),np(t)};wn.prototype.close=function(){X_(this.g)};wn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=j_(t),t=n);e.j.push(new ZF(e.fb++,t)),e.H==3&&np(e)};wn.prototype.N=function(){this.g.h=null,delete this.j,X_(this.g),delete this.g,wn.$.N.call(this)};function zP(t){W_.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}yt(zP,W_);function qP(){K_.call(this),this.status=1}yt(qP,K_);function Ma(t){this.g=t}yt(Ma,BP);Ma.prototype.Ba=function(){Pt(this.g,"a")};Ma.prototype.Aa=function(t){Pt(this.g,new zP(t))};Ma.prototype.za=function(t){Pt(this.g,new qP)};Ma.prototype.ya=function(){Pt(this.g,"b")};function d$(){this.blockSize=-1}function Qn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}yt(Qn,d$);Qn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Um(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Qn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Um(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Um(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Um(this,r),i=0;break}}this.h=i,this.i+=e};Qn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function me(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var h$={};function ew(t){return-128<=t&&128>t?wF(t,function(e){return new me([e|0],0>e?-1:0)}):new me([t|0],0>t?-1:0)}function dr(t){if(isNaN(t)||!isFinite(t))return Go;if(0>t)return St(dr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ty;return new me(e,0)}function GP(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return St(GP(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=dr(Math.pow(e,8)),r=Go,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=dr(Math.pow(e,s)),r=r.R(s).add(dr(o))):(r=r.R(n),r=r.add(dr(o)))}return r}var Ty=4294967296,Go=ew(0),Sy=ew(1),F0=ew(16777216);U=me.prototype;U.ea=function(){if(kn(this))return-St(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ty+r)*e,e*=Ty}return t};U.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Nr(this))return"0";if(kn(this))return"-"+St(this).toString(t);for(var e=dr(Math.pow(t,6)),n=this,r="";;){var i=Dh(n,e).g;n=Nh(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Nr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};U.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Nr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function kn(t){return t.h==-1}U.X=function(t){return t=Nh(this,t),kn(t)?-1:Nr(t)?0:1};function St(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new me(n,~t.h).add(Sy)}U.abs=function(){return kn(this)?St(this):this};U.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new me(n,n[n.length-1]&-2147483648?-1:0)};function Nh(t,e){return t.add(St(e))}U.R=function(t){if(Nr(this)||Nr(t))return Go;if(kn(this))return kn(t)?St(this).R(St(t)):St(St(this).R(t));if(kn(t))return St(this.R(St(t)));if(0>this.X(F0)&&0>t.X(F0))return dr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,u=t.D(i)&65535;n[2*r+2*i]+=o*u,nd(n,2*r+2*i),n[2*r+2*i+1]+=s*u,nd(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,nd(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,nd(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new me(n,0)};function nd(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function du(t,e){this.g=t,this.h=e}function Dh(t,e){if(Nr(e))throw Error("division by zero");if(Nr(t))return new du(Go,Go);if(kn(t))return e=Dh(St(t),e),new du(St(e.g),St(e.h));if(kn(e))return e=Dh(t,St(e)),new du(St(e.g),e.h);if(30<t.g.length){if(kn(t)||kn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Sy,r=e;0>=r.X(t);)n=$0(n),r=$0(r);var i=po(n,1),s=po(r,1);for(r=po(r,2),n=po(n,2);!Nr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=po(r,1),n=po(n,1)}return e=Nh(t,i.R(e)),new du(i,e)}for(i=Go;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=dr(n),o=s.R(e);kn(o)||0<o.X(t);)n-=r,s=dr(n),o=s.R(e);Nr(s)&&(s=Sy),i=i.add(s),t=Nh(t,o)}return new du(i,t)}U.gb=function(t){return Dh(this,t).h};U.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new me(n,this.h&t.h)};U.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new me(n,this.h|t.h)};U.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new me(n,this.h^t.h)};function $0(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new me(n,t.h)}function po(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new me(i,t.h)}xh.prototype.createWebChannel=xh.prototype.g;wn.prototype.send=wn.prototype.u;wn.prototype.open=wn.prototype.m;wn.prototype.close=wn.prototype.close;Qf.NO_ERROR=0;Qf.TIMEOUT=8;Qf.HTTP_ERROR=6;lP.COMPLETE="complete";cP.EventType=lc;lc.OPEN="a";lc.CLOSE="b";lc.ERROR="c";lc.MESSAGE="d";mt.prototype.listen=mt.prototype.O;ze.prototype.listenOnce=ze.prototype.P;ze.prototype.getLastError=ze.prototype.Sa;ze.prototype.getLastErrorCode=ze.prototype.Ia;ze.prototype.getStatus=ze.prototype.da;ze.prototype.getResponseJson=ze.prototype.Wa;ze.prototype.getResponseText=ze.prototype.ja;ze.prototype.send=ze.prototype.ha;ze.prototype.setWithCredentials=ze.prototype.Oa;Qn.prototype.digest=Qn.prototype.l;Qn.prototype.reset=Qn.prototype.reset;Qn.prototype.update=Qn.prototype.j;me.prototype.add=me.prototype.add;me.prototype.multiply=me.prototype.R;me.prototype.modulo=me.prototype.gb;me.prototype.compare=me.prototype.X;me.prototype.toNumber=me.prototype.ea;me.prototype.toString=me.prototype.toString;me.prototype.getBits=me.prototype.D;me.fromNumber=dr;me.fromString=GP;var f$=function(){return new xh},p$=function(){return Hf()},jm=Qf,m$=lP,g$=io,U0={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},y$=hc,rd=cP,v$=ze,_$=Qn,Wo=me;const j0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fa="10.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new jf("@firebase/firestore");function Ay(){return Vi.logLevel}function w$(t){Vi.setLogLevel(t)}function N(t,...e){if(Vi.logLevel<=ae.DEBUG){const n=e.map(tw);Vi.debug(`Firestore (${Fa}): ${t}`,...n)}}function He(t,...e){if(Vi.logLevel<=ae.ERROR){const n=e.map(tw);Vi.error(`Firestore (${Fa}): ${t}`,...n)}}function Yn(t,...e){if(Vi.logLevel<=ae.WARN){const n=e.map(tw);Vi.warn(`Firestore (${Fa}): ${t}`,...n)}}function tw(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t="Unexpected state"){const e=`FIRESTORE (${Fa}) INTERNAL ASSERTION FAILED: `+t;throw He(e),new Error(e)}function W(t,e){t||j()}function E$(t,e){t||j()}function $(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Kt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class I${getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class T${constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class S${constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new pt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string"),new WP(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new dt(e)}}class A${constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class R${constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new A$(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class P${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class C${constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(W(typeof n.token=="string"),this.R=n.token,new P$(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k$(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=k$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function ca(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function HP(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new xe(0,0))}static max(){return new G(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n,r){n===void 0?n=0:n>e.length&&j(),r===void 0?r=e.length-n:r>e.length-n&&j(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Dl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Dl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ue extends Dl{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const b$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Dl{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return b$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new x(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new x(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new x(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ue.fromString(e))}static fromName(e){return new M(ue.fromString(e).popFirst(5))}static empty(){return new M(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ue(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Ry(t){return t.fields.find(e=>e.kind===2)}function ls(t){return t.fields.filter(e=>e.kind!==2)}QP.UNKNOWN_ID=-1;class x${constructor(e,n){this.fieldPath=e,this.kind=n}}class Oh{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Oh(0,En.min())}}function YP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new En(i,M.empty(),e)}function XP(t){return new En(t.readTime,t.key,-1)}class En{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new En(G.min(),M.empty(),-1)}static max(){return new En(G.max(),M.empty(),-1)}}function nw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==JP)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new A((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new A((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.m=new pt,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{n.error?this.m.reject(new Gu(e,n.error)):this.m.resolve()},this.transaction.onerror=r=>{const i=rw(r.target.error);this.m.reject(new Gu(e,i))}}static open(e,n,r,i){try{return new rp(n,e.transaction(i,r))}catch(s){throw new Gu(n,s)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new D$(n)}}class qn{constructor(e,n,r){this.name=e,this.version=n,this.S=r,qn.D(Fe())===12.2&&He("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),cs(window.indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Il())return!1;if(qn.C())return!0;const e=Fe(),n=qn.D(e),r=0<n&&n<10,i=qn.F(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Gu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new x(R.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new x(R.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Gu(e,o))},i.onupgradeneeded=s=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.B(o,i.transaction,s.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const a=rp.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(l=>(a.p(),l)).catch(l=>(a.abort(l),A.reject(l))).toPromise();return u.catch(()=>{}),await a.g,u}catch(a){const u=a,l=u.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class N${constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return cs(this.q.delete())}}class Gu extends x{constructor(e,n){super(R.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ji(t){return t.name==="IndexedDbTransactionError"}class D${constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(N("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),cs(r)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),cs(this.store.add(e))}get(e){return cs(this.store.get(e)).next(n=>(n===void 0&&(n=null),N("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),cs(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),cs(this.store.count())}G(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.j(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new A((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new A((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){N("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.j(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.j(i,n)}X(e){const n=this.cursor({});return new A((r,i)=>{n.onerror=s=>{const o=rw(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(e,n){const r=[];return new A((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new N$(a),l=n(a.primaryKey,a.value,u);if(l instanceof A){const c=l.catch(d=>(u.done(),A.reject(d)));r.push(c)}u.isDone?i():u.U===null?a.continue():a.continue(u.U)}}).next(()=>A.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function cs(t){return new A((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=rw(r.target.error);n(i)}})}let B0=!1;function rw(t){const e=qn.D(Fe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return B0||(B0=!0,setTimeout(()=>{throw r},0)),r}}return t}class O${constructor(e,n){this.asyncQueue=e,this.ee=n,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){N("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{N("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(n){Ji(n)?N("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Xi(n)}await this.te(6e4)})}}class V${constructor(e,n){this.localStore=e,this.persistence=n}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.re(n,e))}re(e,n){const r=new Set;let i=n,s=!0;return A.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return N("IndexBackiller",`Processing collection: ${o}`),this.ie(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ie(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(i,s)).next(a=>(N("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}se(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=XP(s);nw(o,r)>0&&(r=o)}),new En(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}rn.ae=-1;function mc(t){return t==null}function Ol(t){return t===0&&1/t==-1/0}function eC(t){return typeof t=="number"&&Number.isInteger(t)&&!Ol(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=z0(e)),e=L$(t.get(n),e);return z0(e)}function L$(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function z0(t){return t+""}function hr(t){const e=t.length;if(W(e>=2),e===2)return W(t.charAt(0)===""&&t.charAt(1)===""),ue.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&j(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:j()}s=o+2}return new ue(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t,e){return[t,Ht(e)]}function tC(t,e,n){return[t,Ht(e),n]}const M$={},F$=["prefixPath","collectionGroup","readTime","documentId"],$$=["prefixPath","collectionGroup","documentId"],U$=["collectionGroup","readTime","prefixPath","documentId"],j$=["canonicalId","targetId"],B$=["targetId","path"],z$=["path","targetId"],q$=["collectionId","parent"],G$=["indexId","uid"],W$=["uid","sequenceNumber"],K$=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],H$=["indexId","uid","orderedDocumentKey"],Q$=["userId","collectionPath","documentId"],Y$=["userId","collectionPath","largestBatchId"],X$=["userId","collectionGroup","largestBatchId"],nC=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],J$=[...nC,"documentOverlays"],rC=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],iC=rC,Z$=[...iC,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py extends ZP{constructor(e,n){super(),this.ue=e,this.currentSequenceNumber=n}}function vt(t,e){const n=$(t);return qn.O(n.ue,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function so(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function sC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Tt.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new id(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new id(this.root,e,this.comparator,!1)}getReverseIterator(){return new id(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new id(this.root,e,this.comparator,!0)}}class id{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Tt.RED,this.left=i??Tt.EMPTY,this.right=s??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Tt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new W0(this.data.getIterator())}getIteratorFrom(e){return new W0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pe(this.comparator);return n.data=e,n}}class W0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function mo(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new sn([])}unionWith(e){let n=new Pe(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ca(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eU(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new oC("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const tU=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Li(t){if(W(!!t),typeof t=="string"){let e=0;const n=tU.exec(t);if(W(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mi(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function iw(t){const e=t.mapValue.fields.__previous_value__;return ip(e)?iw(e):e}function Vl(t){const e=Li(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(e,n,r,i,s,o,a,u,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l}}class Fi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Pd={nullValue:"NULL_VALUE"};function Bs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ip(t)?4:aC(t)?9007199254740991:10:j()}function wr(t,e){if(t===e)return!0;const n=Bs(t);if(n!==Bs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vl(t).isEqual(Vl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Li(i.timestampValue),a=Li(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Mi(i.bytesValue).isEqual(Mi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Be(i.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Be(i.integerValue)===Be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Be(i.doubleValue),a=Be(s.doubleValue);return o===a?Ol(o)===Ol(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ca(t.arrayValue.values||[],e.arrayValue.values||[],wr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(G0(o)!==G0(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!wr(o[u],a[u])))return!1;return!0}(t,e);default:return j()}}function Ll(t,e){return(t.values||[]).find(n=>wr(n,e))!==void 0}function $i(t,e){if(t===e)return 0;const n=Bs(t),r=Bs(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Be(s.integerValue||s.doubleValue),u=Be(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return K0(t.timestampValue,e.timestampValue);case 4:return K0(Vl(t),Vl(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Mi(s),u=Mi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){const c=ee(a[l],u[l]);if(c!==0)return c}return ee(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ee(Be(s.latitude),Be(o.latitude));return a!==0?a:ee(Be(s.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let l=0;l<a.length&&l<u.length;++l){const c=$i(a[l],u[l]);if(c)return c}return ee(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===mi.mapValue&&o===mi.mapValue)return 0;if(s===mi.mapValue)return 1;if(o===mi.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),l=o.fields||{},c=Object.keys(l);u.sort(),c.sort();for(let d=0;d<u.length&&d<c.length;++d){const h=ee(u[d],c[d]);if(h!==0)return h;const f=$i(a[u[d]],l[c[d]]);if(f!==0)return f}return ee(u.length,c.length)}(t.mapValue,e.mapValue);default:throw j()}}function K0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=Li(t),r=Li(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function da(t){return Cy(t)}function Cy(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Li(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Mi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return M.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Cy(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Cy(n.fields[o])}`;return i+"}"}(t.mapValue):j()}function zs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ky(t){return!!t&&"integerValue"in t}function Ml(t){return!!t&&"arrayValue"in t}function H0(t){return!!t&&"nullValue"in t}function Q0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Cd(t){return!!t&&"mapValue"in t}function Wu(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return so(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Wu(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wu(t.arrayValue.values[n]);return e}return Object.assign({},t)}function aC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function rU(t){return"nullValue"in t?Pd:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?zs(Fi.empty(),M.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:j()}function iU(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?zs(Fi.empty(),M.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?mi:j()}function Y0(t,e){const n=$i(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function X0(t,e){const n=$i(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Cd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wu(n)}setAll(e){let n=Qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Wu(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Cd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Cd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){so(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new At(Wu(this.value))}}function uC(t){const e=[];return so(t.fields,(n,r)=>{const i=new Qe([n]);if(Cd(r)){const s=uC(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new sn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ae(e,0,G.min(),G.min(),G.min(),At.empty(),0)}static newFoundDocument(e,n,r,i){return new Ae(e,1,n,G.min(),r,i,0)}static newNoDocument(e,n){return new Ae(e,2,n,G.min(),G.min(),At.empty(),0)}static newUnknownDocument(e,n){return new Ae(e,3,n,G.min(),G.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.position=e,this.inclusive=n}}function J0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=$i(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Z0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n="asc"){this.field=e,this.dir=n}}function sU(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{}class ie extends lC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new oU(e,n,r):n==="array-contains"?new lU(e,r):n==="in"?new mC(e,r):n==="not-in"?new cU(e,r):n==="array-contains-any"?new dU(e,r):new ie(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new aU(e,r):new uU(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($i(n,this.value)):n!==null&&Bs(this.value)===Bs(n)&&this.matchesComparison($i(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class fe extends lC{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new fe(e,n)}matches(e){return ha(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function ha(t){return t.op==="and"}function by(t){return t.op==="or"}function sw(t){return cC(t)&&ha(t)}function cC(t){for(const e of t.filters)if(e instanceof fe)return!1;return!0}function xy(t){if(t instanceof ie)return t.field.canonicalString()+t.op.toString()+da(t.value);if(sw(t))return t.filters.map(e=>xy(e)).join(",");{const e=t.filters.map(n=>xy(n)).join(",");return`${t.op}(${e})`}}function dC(t,e){return t instanceof ie?function(r,i){return i instanceof ie&&r.op===i.op&&r.field.isEqual(i.field)&&wr(r.value,i.value)}(t,e):t instanceof fe?function(r,i){return i instanceof fe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&dC(o,i.filters[a]),!0):!1}(t,e):void j()}function hC(t,e){const n=t.filters.concat(e);return fe.create(n,t.op)}function fC(t){return t instanceof ie?function(n){return`${n.field.canonicalString()} ${n.op} ${da(n.value)}`}(t):t instanceof fe?function(n){return n.op.toString()+" {"+n.getFilters().map(fC).join(" ,")+"}"}(t):"Filter"}class oU extends ie{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class aU extends ie{constructor(e,n){super(e,"in",n),this.keys=pC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class uU extends ie{constructor(e,n){super(e,"not-in",n),this.keys=pC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function pC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class lU extends ie{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ml(n)&&Ll(n.arrayValue,this.value)}}class mC extends ie{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ll(this.value.arrayValue,n)}}class cU extends ie{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ll(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ll(this.value.arrayValue,n)}}class dU extends ie{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ml(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ll(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hU{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Ny(t,e=null,n=[],r=[],i=null,s=null,o=null){return new hU(t,e,n,r,i,s,o)}function qs(t){const e=$(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xy(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),mc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>da(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>da(r)).join(",")),e.he=n}return e.he}function gc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!sU(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!dC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Z0(t.startAt,e.startAt)&&Z0(t.endAt,e.endAt)}function Vh(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Lh(t,e){return t.filters.filter(n=>n instanceof ie&&n.field.isEqual(e))}function eT(t,e,n){let r=Pd,i=!0;for(const s of Lh(t,e)){let o=Pd,a=!0;switch(s.op){case"<":case"<=":o=rU(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Pd}Y0({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Y0({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function tT(t,e,n){let r=mi,i=!0;for(const s of Lh(t,e)){let o=mi,a=!0;switch(s.op){case">=":case">":o=iU(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=mi}X0({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];X0({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function gC(t,e,n,r,i,s,o,a){return new Qr(t,e,n,r,i,s,o,a)}function $a(t){return new Qr(t)}function nT(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ow(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function sp(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function aw(t){return t.collectionGroup!==null}function bs(t){const e=$(t);if(e.Pe===null){e.Pe=[];const n=sp(e),r=ow(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ko(n)),e.Pe.push(new Ko(Qe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ko(Qe.keyField(),s))}}}return e.Pe}function dn(t){const e=$(t);if(!e.Ie)if(e.limitType==="F")e.Ie=Ny(e.path,e.collectionGroup,bs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of bs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ko(s.field,o))}const r=e.endAt?new Ui(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ui(e.startAt.position,e.startAt.inclusive):null;e.Ie=Ny(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function Dy(t,e){e.getFirstInequalityField(),sp(t);const n=t.filters.concat([e]);return new Qr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Mh(t,e,n){return new Qr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yc(t,e){return gc(dn(t),dn(e))&&t.limitType===e.limitType}function yC(t){return`${qs(dn(t))}|lt:${t.limitType}`}function Oy(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>fC(i)).join(", ")}]`),mc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>da(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>da(i)).join(",")),`Target(${r})`}(dn(t))}; limitType=${t.limitType})`}function vc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):M.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of bs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const l=J0(o,a,u);return o.inclusive?l<=0:l<0}(r.startAt,bs(r),i)||r.endAt&&!function(o,a,u){const l=J0(o,a,u);return o.inclusive?l>=0:l>0}(r.endAt,bs(r),i))}(t,e)}function vC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _C(t){return(e,n)=>{let r=!1;for(const i of bs(t)){const s=fU(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function fU(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),l=a.data.field(s);return u!==null&&l!==null?$i(u,l):j()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){so(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return sC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pU=new Ee(M.comparator);function on(){return pU}const wC=new Ee(M.comparator);function bu(...t){let e=wC;for(const n of t)e=e.insert(n.key,n);return e}function EC(t){let e=wC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function fr(){return Ku()}function IC(){return Ku()}function Ku(){return new Zi(t=>t.toString(),(t,e)=>t.isEqual(e))}const mU=new Ee(M.comparator),gU=new Pe(M.comparator);function te(...t){let e=gU;for(const n of t)e=e.add(n);return e}const yU=new Pe(ee);function uw(){return yU}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ol(e)?"-0":e}}function SC(t){return{integerValue:""+t}}function AC(t,e){return eC(e)?SC(e):TC(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this._=void 0}}function vU(t,e,n){return t instanceof fa?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ip(s)&&(s=iw(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Gs?PC(t,e):t instanceof Ws?CC(t,e):function(i,s){const o=RC(i,s),a=rT(o)+rT(i.Te);return ky(o)&&ky(i.Te)?SC(a):TC(i.serializer,a)}(t,e)}function _U(t,e,n){return t instanceof Gs?PC(t,e):t instanceof Ws?CC(t,e):n}function RC(t,e){return t instanceof pa?function(r){return ky(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class fa extends op{}class Gs extends op{constructor(e){super(),this.elements=e}}function PC(t,e){const n=kC(e);for(const r of t.elements)n.some(i=>wr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ws extends op{constructor(e){super(),this.elements=e}}function CC(t,e){let n=kC(e);for(const r of t.elements)n=n.filter(i=>!wr(i,r));return{arrayValue:{values:n}}}class pa extends op{constructor(e,n){super(),this.serializer=e,this.Te=n}}function rT(t){return Be(t.integerValue||t.doubleValue)}function kC(t){return Ml(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n){this.field=e,this.transform=n}}function wU(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Gs&&i instanceof Gs||r instanceof Ws&&i instanceof Ws?ca(r.elements,i.elements,wr):r instanceof pa&&i instanceof pa?wr(r.Te,i.Te):r instanceof fa&&i instanceof fa}(t.transform,e.transform)}class EU{constructor(e,n){this.version=e,this.transformResults=n}}class be{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new be}static exists(e){return new be(void 0,e)}static updateTime(e){return new be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kd(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ap{}function bC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ja(t.key,be.none()):new Ua(t.key,t.data,be.none());{const n=t.data,r=At.empty();let i=new Pe(Qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Yr(t.key,r,new sn(i.toArray()),be.none())}}function IU(t,e,n){t instanceof Ua?function(i,s,o){const a=i.value.clone(),u=sT(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Yr?function(i,s,o){if(!kd(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=sT(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(xC(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Hu(t,e,n,r){return t instanceof Ua?function(s,o,a,u){if(!kd(s.precondition,o))return a;const l=s.value.clone(),c=oT(s.fieldTransforms,u,o);return l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Yr?function(s,o,a,u){if(!kd(s.precondition,o))return a;const l=oT(s.fieldTransforms,u,o),c=o.data;return c.setAll(xC(s)),c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return kd(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function TU(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=RC(r.transform,i||null);s!=null&&(n===null&&(n=At.empty()),n.set(r.field,s))}return n||null}function iT(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ca(r,i,(s,o)=>wU(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ua extends ap{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Yr extends ap{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function xC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function sT(t,e,n){const r=new Map;W(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,_U(o,a,n[i]))}return r}function oT(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,vU(s,o,e))}return r}class ja extends ap{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lw extends ap{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&IU(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Hu(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Hu(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=IC();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=bC(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&ca(this.mutations,e.mutations,(n,r)=>iT(n,r))&&ca(this.baseMutations,e.baseMutations,(n,r)=>iT(n,r))}}class dw{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){W(e.mutations.length===r.length);let i=function(){return mU}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new dw(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SU{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,oe;function NC(t){switch(t){default:return j();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function DC(t){if(t===void 0)return He("GRPC error has no .code"),R.UNKNOWN;switch(t){case Ze.OK:return R.OK;case Ze.CANCELLED:return R.CANCELLED;case Ze.UNKNOWN:return R.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return R.INTERNAL;case Ze.UNAVAILABLE:return R.UNAVAILABLE;case Ze.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Ze.NOT_FOUND:return R.NOT_FOUND;case Ze.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Ze.ABORTED:return R.ABORTED;case Ze.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Ze.DATA_LOSS:return R.DATA_LOSS;default:return j()}}(oe=Ze||(Ze={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return sd}static getOrCreateInstance(){return sd===null&&(sd=new fw),sd}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let sd=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AU=new Wo([4294967295,4294967295],0);function aT(t){const e=OC().encode(t),n=new _$;return n.update(e),new Uint8Array(n.digest())}function uT(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Wo([n,r],0),new Wo([i,s],0)]}class pw{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xu(`Invalid padding: ${n}`);if(r<0)throw new xu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xu(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xu(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Wo.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(Wo.fromNumber(r)));return i.compare(AU)===1&&(i=new Wo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=aT(e),[r,i]=uT(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new pw(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=aT(e),[r,i]=uT(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ec.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new wc(G.min(),i,new Ee(ee),on(),te())}}class Ec{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ec(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class VC{constructor(e,n){this.targetId=e,this.pe=n}}class LC{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class lT{constructor(){this.ye=0,this.we=dT(),this.Se=at.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=te(),n=te(),r=te();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:j()}}),new Ec(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=dT()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class RU{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=on(),this.$e=cT(),this.Ue=new Ee(ee)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:j()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Vh(a))if(s===0){const u=new M(a.path);this.ze(i,u,Ae.newNoDocument(u,G.min()))}else W(s===1);else{const u=this.et(i);if(u!==s){const l=this.tt(e,u);if(l.status!==0){this.Ye(i);const c=l.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(n=fw.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(d,h,f,v){var y,w,m,p,g,_;const I={localCacheCount:f,existenceFilterCount:v.count},S=v.unchangedNames;return S&&(I.bloomFilter={applied:d===0,hashCount:(y=S==null?void 0:S.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(p=(m=(w=S==null?void 0:S.bits)===null||w===void 0?void 0:w.bitmap)===null||m===void 0?void 0:m.length)!==null&&p!==void 0?p:0,padding:(_=(g=S==null?void 0:S.bits)===null||g===void 0?void 0:g.padding)!==null&&_!==void 0?_:0},h&&(I.bloomFilter.mightContain=h)),I}(l.status,(r=l.nt)!==null&&r!==void 0?r:null,u,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let u,l;try{u=Mi(s).toUint8Array()}catch(d){if(d instanceof oC)return Yn("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw d}try{l=new pw(u,o,a)}catch(d){return Yn(d instanceof xu?"BloomFilter error: ":"Applying bloom filter failed: ",d),{status:1}}const c=d=>{const h=this.qe.rt();return l.mightContain(`projects/${h.projectId}/databases/${h.database}/documents/${d}`)};return l.de===0?{status:1}:{status:i===n-this.it(e.targetId,c)?0:2,nt:c}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Vh(a.target)){const u=new M(a.target.path);this.Ke.get(u)!==null||this.ot(o,u)||this.ze(o,u,Ae.newNoDocument(u,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=te();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Xe(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new wc(e,n,this.Ue,this.Ke,r);return this.Ke=on(),this.$e=cT(),this.Ue=new Ee(ee),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new lT,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Pe(ee),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new lT),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function cT(){return new Ee(M.comparator)}function dT(){return new Ee(M.comparator)}const PU=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),CU=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),kU=(()=>({and:"AND",or:"OR"}))();class bU{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vy(t,e){return t.useProto3Json||mc(e)?e:{value:e}}function ma(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function MC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xU(t,e){return ma(t,e.toTimestamp())}function Xe(t){return W(!!t),G.fromTimestamp(function(n){const r=Li(n);return new xe(r.seconds,r.nanos)}(t))}function mw(t,e){return function(r){return new ue(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function FC(t){const e=ue.fromString(t);return W(KC(e)),e}function Fl(t,e){return mw(t.databaseId,e.path)}function vr(t,e){const n=FC(e);if(n.get(1)!==t.databaseId.projectId)throw new x(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(UC(n))}function Ly(t,e){return mw(t.databaseId,e)}function $C(t){const e=FC(t);return e.length===4?ue.emptyPath():UC(e)}function $l(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function UC(t){return W(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hT(t,e,n){return{name:Fl(t,e),fields:n.value.mapValue.fields}}function jC(t,e,n){const r=vr(t,e.name),i=Xe(e.updateTime),s=e.createTime?Xe(e.createTime):G.min(),o=new At({mapValue:{fields:e.fields}}),a=Ae.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function NU(t,e){return"found"in e?function(r,i){W(!!i.found),i.found.name,i.found.updateTime;const s=vr(r,i.found.name),o=Xe(i.found.updateTime),a=i.found.createTime?Xe(i.found.createTime):G.min(),u=new At({mapValue:{fields:i.found.fields}});return Ae.newFoundDocument(s,o,a,u)}(t,e):"missing"in e?function(r,i){W(!!i.missing),W(!!i.readTime);const s=vr(r,i.missing),o=Xe(i.readTime);return Ae.newNoDocument(s,o)}(t,e):j()}function DU(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,c){return l.useProto3Json?(W(c===void 0||typeof c=="string"),at.fromBase64String(c||"")):(W(c===void 0||c instanceof Uint8Array),at.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?R.UNKNOWN:DC(l.code);return new x(c,l.message||"")}(o);n=new LC(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=vr(t,r.document.name),s=Xe(r.document.updateTime),o=r.document.createTime?Xe(r.document.createTime):G.min(),a=new At({mapValue:{fields:r.document.fields}}),u=Ae.newFoundDocument(i,s,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];n=new bd(l,c,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=vr(t,r.document),s=r.readTime?Xe(r.readTime):G.min(),o=Ae.newNoDocument(i,s),a=r.removedTargetIds||[];n=new bd([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=vr(t,r.document),s=r.removedTargetIds||[];n=new bd([],s,i,null)}else{if(!("filter"in e))return j();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new SU(i,s),a=r.targetId;n=new VC(a,o)}}return n}function Ul(t,e){let n;if(e instanceof Ua)n={update:hT(t,e.key,e.value)};else if(e instanceof ja)n={delete:Fl(t,e.key)};else if(e instanceof Yr)n={update:hT(t,e.key,e.data),updateMask:$U(e.fieldMask)};else{if(!(e instanceof lw))return j();n={verify:Fl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof fa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Gs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ws)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof pa)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw j()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:xU(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:j()}(t,e.precondition)),n}function My(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?be.updateTime(Xe(s.updateTime)):s.exists!==void 0?be.exists(s.exists):be.none()}(e.currentDocument):be.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)W(a.setToServerValue==="REQUEST_TIME"),u=new fa;else if("appendMissingElements"in a){const c=a.appendMissingElements.values||[];u=new Gs(c)}else if("removeAllFromArray"in a){const c=a.removeAllFromArray.values||[];u=new Ws(c)}else"increment"in a?u=new pa(o,a.increment):j();const l=Qe.fromServerFormat(a.fieldPath);return new _c(l,u)}(t,i)):[];if(e.update){e.update.name;const i=vr(t,e.update.name),s=new At({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const l=u.fieldPaths||[];return new sn(l.map(c=>Qe.fromServerFormat(c)))}(e.updateMask);return new Yr(i,s,o,n,r)}return new Ua(i,s,n,r)}if(e.delete){const i=vr(t,e.delete);return new ja(i,n)}if(e.verify){const i=vr(t,e.verify);return new lw(i,n)}return j()}function OU(t,e){return t&&t.length>0?(W(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Xe(i.updateTime):Xe(s);return o.isEqual(G.min())&&(o=Xe(s)),new EU(o,i.transformResults||[])}(n,e))):[]}function BC(t,e){return{documents:[Ly(t,e.path)]}}function zC(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ly(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ly(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return WC(fe.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(d){return{field:wo(d.field),direction:LU(d.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Vy(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function qC(t){let e=$C(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){W(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const h=GC(d);return h instanceof fe&&sw(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(h=>function(v){return new Ko(Eo(v.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(d){let h;return h=typeof d=="object"?d.value:d,mc(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(d){const h=!!d.before,f=d.values||[];return new Ui(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(d){const h=!d.before,f=d.values||[];return new Ui(f,h)}(n.endAt)),gC(e,i,o,s,a,"F",u,l)}function VU(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function GC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Eo(n.unaryFilter.field);return ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Eo(n.unaryFilter.field);return ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Eo(n.unaryFilter.field);return ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Eo(n.unaryFilter.field);return ie.create(o,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(t):t.fieldFilter!==void 0?function(n){return ie.create(Eo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fe.create(n.compositeFilter.filters.map(r=>GC(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return j()}}(n.compositeFilter.op))}(t):j()}function LU(t){return PU[t]}function MU(t){return CU[t]}function FU(t){return kU[t]}function wo(t){return{fieldPath:t.canonicalString()}}function Eo(t){return Qe.fromServerFormat(t.fieldPath)}function WC(t){return t instanceof ie?function(n){if(n.op==="=="){if(Q0(n.value))return{unaryFilter:{field:wo(n.field),op:"IS_NAN"}};if(H0(n.value))return{unaryFilter:{field:wo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Q0(n.value))return{unaryFilter:{field:wo(n.field),op:"IS_NOT_NAN"}};if(H0(n.value))return{unaryFilter:{field:wo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wo(n.field),op:MU(n.op),value:n.value}}}(t):t instanceof fe?function(n){const r=n.getFilters().map(i=>WC(i));return r.length===1?r[0]:{compositeFilter:{op:FU(n.op),filters:r}}}(t):j()}function $U(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function KC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,r,i,s=G.min(),o=G.min(),a=at.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.ct=e}}function UU(t,e){let n;if(e.document)n=jC(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=M.fromSegments(e.noDocument.path),i=Hs(e.noDocument.readTime);n=Ae.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return j();{const r=M.fromSegments(e.unknownDocument.path),i=Hs(e.unknownDocument.version);n=Ae.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new xe(i[0],i[1]);return G.fromTimestamp(s)}(e.readTime)),n}function fT(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Fh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Fl(s,o.key),fields:o.data.value.mapValue.fields,updateTime:ma(s,o.version.toTimestamp()),createTime:ma(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ks(e.version)};else{if(!e.isUnknownDocument())return j();r.unknownDocument={path:n.path.toArray(),version:Ks(e.version)}}return r}function Fh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ks(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Hs(t){const e=new xe(t.seconds,t.nanoseconds);return G.fromTimestamp(e)}function ds(t,e){const n=(e.baseMutations||[]).map(s=>My(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>My(t.ct,s)),i=xe.fromMillis(e.localWriteTimeMs);return new cw(e.batchId,i,n,r)}function Nu(t){const e=Hs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Hs(t.lastLimboFreeSnapshotVersion):G.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return W(s.documents.length===1),dn($a($C(s.documents[0])))}(t.query):function(s){return dn(qC(s))}(t.query),new Dr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,at.fromBase64String(t.resumeToken))}function QC(t,e){const n=Ks(e.snapshotVersion),r=Ks(e.lastLimboFreeSnapshotVersion);let i;i=Vh(e.target)?BC(t.ct,e.target):zC(t.ct,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:qs(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function gw(t){const e=qC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Mh(e,e.limit,"L"):e}function Bm(t,e){return new hw(e.largestBatchId,My(t.ct,e.overlayMutation))}function pT(t,e){const n=e.path.lastSegment();return[t,Ht(e.path.popLast()),n]}function mT(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Ks(r.readTime),documentKey:Ht(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jU{getBundleMetadata(e,n){return gT(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Hs(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return gT(e).put(function(i){return{bundleId:i.id,createTime:Ks(Xe(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return yT(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:gw(s.bundledQuery),readTime:Hs(s.readTime)}}(r)})}saveNamedQuery(e,n){return yT(e).put(function(i){return{name:i.name,readTime:Ks(Xe(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function gT(t){return vt(t,"bundles")}function yT(t){return vt(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new up(e,r)}getOverlay(e,n){return hu(e).get(pT(this.userId,n)).next(r=>r?Bm(this.serializer,r):null)}getOverlays(e,n){const r=fr();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new hw(n,o);i.push(this.ht(e,a))}),A.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Ht(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(hu(e).J("collectionPathOverlayIndex",a))}),A.waitFor(s)}getOverlaysForCollection(e,n,r){const i=fr(),s=Ht(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return hu(e).G("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const l=Bm(this.serializer,u);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=fr();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return hu(e).Z({index:"collectionGroupOverlayIndex",range:a},(u,l,c)=>{const d=Bm(this.serializer,l);s.size()<i||d.largestBatchId===o?(s.set(d.getKey(),d),o=d.largestBatchId):c.done()}).next(()=>s)}ht(e,n){return hu(e).put(function(i,s,o){const[a,u,l]=pT(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:l,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ul(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function hu(t){return vt(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Be(e.integerValue));else if("doubleValue"in e){const r=Be(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),Ol(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(Mi(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?aC(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):j()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),M.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}hs.bt=new hs;function BU(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function vT(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=BU(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class zU{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.vt(r.value),r=n.next();this.Ct()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.vt(r);else if(r<2048)this.vt(960|r>>>6),this.vt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.vt(480|r>>>12),this.vt(128|63&r>>>6),this.vt(128|63&r);else{const i=n.codePointAt(0);this.vt(240|i>>>18),this.vt(128|63&i>>>12),this.vt(128|63&i>>>6),this.vt(128|63&i)}}this.Ct()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Bt(e){const n=this.Lt(e),r=vT(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Lt(e),r=vT(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}vt(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}Ct(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class qU{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class GU{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class fu{constructor(){this.Gt=new zU,this.zt=new qU(this.Gt),this.jt=new GU(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new fs(this.indexId,this.documentKey,this.arrayValue,r)}}function ti(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=_T(t.arrayValue,e.arrayValue),n!==0?n:(n=_T(t.directionalValue,e.directionalValue),n!==0?n:M.comparator(t.documentKey,e.documentKey)))}function _T(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WU{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=r:this.Zt.push(r)}}en(e){W(e.collectionGroup===this.collectionId);const n=Ry(e);if(n!==void 0&&!this.tn(n))return!1;const r=ls(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt!==void 0){if(!i.has(this.Xt.field.canonicalString())){const a=r[s];if(!this.nn(this.Xt,a)||!this.rn(this.Yt[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}tn(e){for(const n of this.Zt)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}rn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){var e,n;if(W(t instanceof ie||t instanceof fe),t instanceof ie){if(t instanceof mC){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ie.create(t.field,"==",s)))||[];return fe.create(i,"or")}return t}const r=t.filters.map(i=>YC(i));return fe.create(r,t.op)}function KU(t){if(t.getFilters().length===0)return[];const e=Uy(YC(t));return W(XC(e)),Fy(e)||$y(e)?[e]:e.getFilters()}function Fy(t){return t instanceof ie}function $y(t){return t instanceof fe&&sw(t)}function XC(t){return Fy(t)||$y(t)||function(n){if(n instanceof fe&&by(n)){for(const r of n.getFilters())if(!Fy(r)&&!$y(r))return!1;return!0}return!1}(t)}function Uy(t){if(W(t instanceof ie||t instanceof fe),t instanceof ie)return t;if(t.filters.length===1)return Uy(t.filters[0]);const e=t.filters.map(r=>Uy(r));let n=fe.create(e,t.op);return n=$h(n),XC(n)?n:(W(n instanceof fe),W(ha(n)),W(n.filters.length>1),n.filters.reduce((r,i)=>yw(r,i)))}function yw(t,e){let n;return W(t instanceof ie||t instanceof fe),W(e instanceof ie||e instanceof fe),n=t instanceof ie?e instanceof ie?function(i,s){return fe.create([i,s],"and")}(t,e):wT(t,e):e instanceof ie?wT(e,t):function(i,s){if(W(i.filters.length>0&&s.filters.length>0),ha(i)&&ha(s))return hC(i,s.getFilters());const o=by(i)?i:s,a=by(i)?s:i,u=o.filters.map(l=>yw(l,a));return fe.create(u,"or")}(t,e),$h(n)}function wT(t,e){if(ha(e))return hC(e,t.getFilters());{const n=e.filters.map(r=>yw(t,r));return fe.create(n,"or")}}function $h(t){if(W(t instanceof ie||t instanceof fe),t instanceof ie)return t;const e=t.getFilters();if(e.length===1)return $h(e[0]);if(cC(t))return t;const n=e.map(i=>$h(i)),r=[];return n.forEach(i=>{i instanceof ie?r.push(i):i instanceof fe&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:fe.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HU{constructor(){this.sn=new vw}addToCollectionParentIndex(e,n){return this.sn.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(En.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(En.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class vw{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Pe(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Pe(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=new Uint8Array(0);class QU{constructor(e,n){this.user=e,this.databaseId=n,this.on=new vw,this._n=new Zi(r=>qs(r),(r,i)=>gc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.on.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.on.add(n)});const s={collectionId:r,parent:Ht(i)};return ET(e).put(s)}return A.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[HP(n),""],!1,!0);return ET(e).G(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(hr(o.parent))}return r})}addFieldIndex(e,n){const r=ad(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=mu(e);return s.next(a=>{o.put(mT(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=ad(e),i=mu(e),s=pu(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=pu(e);let i=!0;const s=new Map;return A.forEach(this.an(n),o=>this.un(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=te();const a=[];return A.forEach(s,(u,l)=>{N("IndexedDbIndexManager",`Using index ${function(g){return`id=${g.indexId}|cg=${g.collectionGroup}|f=${g.fields.map(_=>`${_.fieldPath}:${_.kind}`).join(",")}`}(u)} to execute ${qs(n)}`);const c=function(g,_){const I=Ry(_);if(I===void 0)return null;for(const S of Lh(g,I.fieldPath))switch(S.op){case"array-contains-any":return S.value.arrayValue.values||[];case"array-contains":return[S.value]}return null}(l,u),d=function(g,_){const I=new Map;for(const S of ls(_))for(const C of Lh(g,S.fieldPath))switch(C.op){case"==":case"in":I.set(S.fieldPath.canonicalString(),C.value);break;case"not-in":case"!=":return I.set(S.fieldPath.canonicalString(),C.value),Array.from(I.values())}return null}(l,u),h=function(g,_){const I=[];let S=!0;for(const C of ls(_)){const L=C.kind===0?eT(g,C.fieldPath,g.startAt):tT(g,C.fieldPath,g.startAt);I.push(L.value),S&&(S=L.inclusive)}return new Ui(I,S)}(l,u),f=function(g,_){const I=[];let S=!0;for(const C of ls(_)){const L=C.kind===0?tT(g,C.fieldPath,g.endAt):eT(g,C.fieldPath,g.endAt);I.push(L.value),S&&(S=L.inclusive)}return new Ui(I,S)}(l,u),v=this.cn(u,l,h),y=this.cn(u,l,f),w=this.ln(u,l,d),m=this.hn(u.indexId,c,v,h.inclusive,y,f.inclusive,w);return A.forEach(m,p=>r.H(p,n.limit).next(g=>{g.forEach(_=>{const I=M.fromSegments(_.documentKey);o.has(I)||(o=o.add(I),a.push(I))})}))}).next(()=>a)}return A.resolve(null)})}an(e){let n=this._n.get(e);return n||(e.filters.length===0?n=[e]:n=KU(fe.create(e.filters,"and")).map(r=>Ny(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this._n.set(e,n),n)}hn(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),l=u/(n!=null?n.length:1),c=[];for(let d=0;d<u;++d){const h=n?this.Pn(n[d/l]):od,f=this.In(e,h,r[d%l],i),v=this.Tn(e,h,s[d%l],o),y=a.map(w=>this.In(e,h,w,!0));c.push(...this.createRange(f,v,y))}return c}In(e,n,r,i){const s=new fs(e,M.empty(),n,r);return i?s:s.Jt()}Tn(e,n,r,i){const s=new fs(e,M.empty(),n,r);return i?s.Jt():s}un(e,n){const r=new WU(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.an(n);return A.forEach(i,s=>this.un(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let l=new Pe(Qe.comparator),c=!1;for(const d of u.filters)for(const h of d.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?c=!0:l=l.add(h.field));for(const d of u.orderBy)d.field.isKeyField()||(l=l.add(d.field));return l.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}En(e,n){const r=new fu;for(const i of ls(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);hs.bt.Pt(s,o)}return r.Wt()}Pn(e){const n=new fu;return hs.bt.Pt(e,n.Ht(0)),n.Wt()}dn(e,n){const r=new fu;return hs.bt.Pt(zs(this.databaseId,n),r.Ht(function(s){const o=ls(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}ln(e,n,r){if(r===null)return[];let i=[];i.push(new fu);let s=0;for(const o of ls(e)){const a=r[s++];for(const u of i)if(this.An(n,o.fieldPath)&&Ml(a))i=this.Rn(i,o,a);else{const l=u.Ht(o.kind);hs.bt.Pt(a,l)}}return this.Vn(i)}cn(e,n,r){return this.ln(e,n,r.position)}Vn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}Rn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new fu;u.seed(a.Wt()),hs.bt.Pt(o,u.Ht(n.kind)),s.push(u)}return s}An(e,n){return!!e.filters.find(r=>r instanceof ie&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=ad(e),i=mu(e);return(n?r.G("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.G()).next(s=>{const o=[];return A.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(c,d){const h=d?new Oh(d.sequenceNumber,new En(Hs(d.readTime),new M(hr(d.documentKey)),d.largestBatchId)):Oh.empty(),f=c.fields.map(([v,y])=>new x$(Qe.fromServerFormat(v),y));return new QP(c.indexId,c.collectionGroup,f,h)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ee(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=ad(e),s=mu(e);return this.mn(e).next(o=>i.G("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>A.forEach(a,u=>s.put(mT(u.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return A.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),A.forEach(a,u=>this.fn(e,i,u).next(l=>{const c=this.gn(s,u);return l.isEqual(c)?A.resolve():this.pn(e,s,u,l,c)}))))})}yn(e,n,r,i){return pu(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.dn(r,n.key),documentKey:n.key.path.toArray()})}wn(e,n,r,i){return pu(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.dn(r,n.key),n.key.path.toArray()])}fn(e,n,r){const i=pu(e);let s=new Pe(ti);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.dn(r,n)])},(o,a)=>{s=s.add(new fs(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}gn(e,n){let r=new Pe(ti);const i=this.En(n,e);if(i==null)return r;const s=Ry(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Ml(o))for(const a of o.arrayValue.values||[])r=r.add(new fs(n.indexId,e.key,this.Pn(a),i))}else r=r.add(new fs(n.indexId,e.key,od,i));return r}pn(e,n,r,i,s){N("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(u,l,c,d,h){const f=u.getIterator(),v=l.getIterator();let y=mo(f),w=mo(v);for(;y||w;){let m=!1,p=!1;if(y&&w){const g=c(y,w);g<0?p=!0:g>0&&(m=!0)}else y!=null?p=!0:m=!0;m?(d(w),w=mo(v)):p?(h(y),y=mo(f)):(y=mo(f),w=mo(v))}}(i,s,ti,a=>{o.push(this.yn(e,n,r,a))},a=>{o.push(this.wn(e,n,r,a))}),A.waitFor(o)}mn(e){let n=1;return mu(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>ti(o,a)).filter((o,a,u)=>!a||ti(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=ti(o,e),u=ti(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&u<0)i.push(o),i.push(o.Jt());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Sn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,od,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,od,[]];s.push(IDBKeyRange.bound(a,u))}return s}Sn(e,n){return ti(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(IT)}getMinOffset(e,n){return A.mapArray(this.an(n),r=>this.un(e,r).next(i=>i||j())).next(IT)}}function ET(t){return vt(t,"collectionParents")}function pu(t){return vt(t,"indexEntries")}function ad(t){return vt(t,"indexConfiguration")}function mu(t){return vt(t,"indexState")}function IT(t){W(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;nw(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new En(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Zt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Z({range:o},(c,d,h)=>(a++,h.delete()));s.push(u.next(()=>{W(a===1)}));const l=[];for(const c of n.mutations){const d=tC(e,c.key.path,n.batchId);s.push(i.delete(d)),l.push(c.key)}return A.waitFor(s).next(()=>l)}function Uh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw j();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(41943040,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);class lp{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.bn={}}static lt(e,n,r,i){W(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new lp(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ni(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Io(e),o=ni(e);return o.add({}).next(a=>{W(typeof a=="number");const u=new cw(a,n,r,i),l=function(f,v,y){const w=y.baseMutations.map(p=>Ul(f.ct,p)),m=y.mutations.map(p=>Ul(f.ct,p));return{userId:v,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:w,mutations:m}}(this.serializer,this.userId,u),c=[];let d=new Pe((h,f)=>ee(h.canonicalString(),f.canonicalString()));for(const h of i){const f=tC(this.userId,h.key.path,a);d=d.add(h.key.path.popLast()),c.push(o.put(l)),c.push(s.put(f,M$))}return d.forEach(h=>{c.push(this.indexManager.addToCollectionParentIndex(e,h))}),e.addOnCommittedListener(()=>{this.bn[a]=u.keys()}),A.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return ni(e).get(n).next(r=>r?(W(r.userId===this.userId),ds(this.serializer,r)):null)}Dn(e,n){return this.bn[n]?A.resolve(this.bn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.bn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return ni(e).Z({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(W(a.batchId>=r),s=ds(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return ni(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ni(e).G("userMutationsIndex",n).next(r=>r.map(i=>ds(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Rd(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Io(e).Z({range:i},(o,a,u)=>{const[l,c,d]=o,h=hr(c);if(l===this.userId&&n.path.isEqual(h))return ni(e).get(d).next(f=>{if(!f)throw j();W(f.userId===this.userId),s.push(ds(this.serializer,f))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Pe(ee);const i=[];return n.forEach(s=>{const o=Rd(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Io(e).Z({range:a},(l,c,d)=>{const[h,f,v]=l,y=hr(f);h===this.userId&&s.path.isEqual(y)?r=r.add(v):d.done()});i.push(u)}),A.waitFor(i).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Rd(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Pe(ee);return Io(e).Z({range:o},(u,l,c)=>{const[d,h,f]=u,v=hr(h);d===this.userId&&r.isPrefixOf(v)?v.length===i&&(a=a.add(f)):c.done()}).next(()=>this.vn(e,a))}vn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(ni(e).get(s).next(o=>{if(o===null)throw j();W(o.userId===this.userId),r.push(ds(this.serializer,o))}))}),A.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return JC(e.ue,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Cn(n.batchId)}),A.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return A.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Io(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=hr(s[1]);i.push(u)}else a.done()}).next(()=>{W(i.length===0)})})}containsKey(e,n){return ZC(e,this.userId,n)}Fn(e){return ek(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function ZC(t,e,n){const r=Rd(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Io(t).Z({range:s,Y:!0},(a,u,l)=>{const[c,d,h]=a;c===e&&d===i&&(o=!0),l.done()}).next(()=>o)}function ni(t){return vt(t,"mutations")}function Io(t){return vt(t,"documentMutations")}function ek(t){return vt(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Qs(0)}static On(){return new Qs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YU{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Nn(e).next(n=>{const r=new Qs(n.highestTargetId);return n.highestTargetId=r.next(),this.Bn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Nn(e).next(n=>G.fromTimestamp(new xe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Nn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Nn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Bn(e,i)))}addTargetData(e,n){return this.Ln(e,n).next(()=>this.Nn(e).next(r=>(r.targetCount+=1,this.kn(n,r),this.Bn(e,r))))}updateTargetData(e,n){return this.Ln(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>go(e).delete(n.targetId)).next(()=>this.Nn(e)).next(r=>(W(r.targetCount>0),r.targetCount-=1,this.Bn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return go(e).Z((o,a)=>{const u=Nu(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>A.waitFor(s)).next(()=>i)}forEachTarget(e,n){return go(e).Z((r,i)=>{const s=Nu(i);n(s)})}Nn(e){return ST(e).get("targetGlobalKey").next(n=>(W(n!==null),n))}Bn(e,n){return ST(e).put("targetGlobalKey",n)}Ln(e,n){return go(e).put(QC(this.serializer,n))}kn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Nn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=qs(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return go(e).Z({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const l=Nu(a);gc(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=ci(e);return n.forEach(o=>{const a=Ht(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),A.waitFor(i)}removeMatchingKeys(e,n,r){const i=ci(e);return A.forEach(n,s=>{const o=Ht(s.path);return A.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=ci(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=ci(e);let s=te();return i.Z({range:r,Y:!0},(o,a,u)=>{const l=hr(o[1]),c=new M(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Ht(n.path),i=IDBKeyRange.bound([r],[HP(r)],!1,!0);let s=0;return ci(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}ut(e,n){return go(e).get(n).next(r=>r?Nu(r):null)}}function go(t){return vt(t,"targets")}function ST(t){return vt(t,"targetGlobal")}function ci(t){return vt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT([t,e],[n,r]){const i=ee(t,n);return i===0?ee(e,r):i}class XU{constructor(e){this.qn=e,this.buffer=new Pe(AT),this.Qn=0}Kn(){return++this.Qn}$n(e){const n=[e,this.Kn()];if(this.buffer.size<this.qn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();AT(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class JU{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Un=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Wn(6e4)}stop(){this.Un&&(this.Un.cancel(),this.Un=null)}get started(){return this.Un!==null}Wn(e){N("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Un=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Un=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ji(n)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Xi(n)}await this.Wn(3e5)})}}class ZU{constructor(e,n){this.Gn=e,this.params=n}calculateTargetCount(e,n){return this.Gn.zn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return A.resolve(rn.ae);const r=new XU(n);return this.Gn.forEachTarget(e,i=>r.$n(i.sequenceNumber)).next(()=>this.Gn.jn(e,i=>r.$n(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Gn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Gn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(TT)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),TT):this.Hn(e,n))}getCacheSize(e){return this.Gn.getCacheSize(e)}Hn(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(l=Date.now(),Ay()<=ae.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${d} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function e4(t,e){return new ZU(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(e,n){this.db=e,this.garbageCollector=e4(this,n)}zn(e){const n=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Jn(e){let n=0;return this.jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}jn(e,n){return this.Yn(e,(r,i)=>n(i))}addReference(e,n,r){return ud(e,r)}removeReference(e,n,r){return ud(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return ud(e,n)}Zn(e,n){return function(i,s){let o=!1;return ek(i).X(a=>ZC(i,a,s).next(u=>(u&&(o=!0),A.resolve(!u)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=n){const u=this.Zn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,G.min()),ci(e).delete(function(d){return[0,Ht(d.path)]}(o))))});i.push(u)}}).next(()=>A.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return ud(e,n)}Yn(e,n){const r=ci(e);let i,s=rn.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==rn.ae&&n(new M(hr(i)),s),s=l,i=u):s=rn.ae}).next(()=>{s!==rn.ae&&n(new M(hr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ud(t,e){return ci(t).put(function(r,i){return{targetId:0,path:Ht(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this.changes=new Zi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ss(e).put(r)}removeEntry(e,n,r){return ss(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Fh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Xn(e,r)))}getEntry(e,n){let r=Ae.newInvalidDocument(n);return ss(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(gu(n))},(i,s)=>{r=this.er(n,s)}).next(()=>r)}tr(e,n){let r={size:0,document:Ae.newInvalidDocument(n)};return ss(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(gu(n))},(i,s)=>{r={document:this.er(n,s),size:Uh(s)}}).next(()=>r)}getEntries(e,n){let r=on();return this.nr(e,n,(i,s)=>{const o=this.er(i,s);r=r.insert(i,o)}).next(()=>r)}rr(e,n){let r=on(),i=new Ee(M.comparator);return this.nr(e,n,(s,o)=>{const a=this.er(s,o);r=r.insert(s,a),i=i.insert(s,Uh(o))}).next(()=>({documents:r,ir:i}))}nr(e,n,r){if(n.isEmpty())return A.resolve();let i=new Pe(CT);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(gu(i.first()),gu(i.last())),o=i.getIterator();let a=o.getNext();return ss(e).Z({index:"documentKeyIndex",range:s},(u,l,c)=>{const d=M.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&CT(a,d)<0;)r(a,null),a=o.getNext();a&&a.isEqual(d)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?c.W(gu(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),Fh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ss(e).G(IDBKeyRange.bound(o,a,!0)).next(u=>{let l=on();for(const c of u){const d=this.er(M.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);d.isFoundDocument()&&(vc(n,d)||i.has(d.key))&&(l=l.insert(d.key,d))}return l})}getAllFromCollectionGroup(e,n,r,i){let s=on();const o=PT(n,r),a=PT(n,En.max());return ss(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,l,c)=>{const d=this.er(M.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(d.key,d),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new r4(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return RT(e).get("remoteDocumentGlobalKey").next(n=>(W(!!n),n))}Xn(e,n){return RT(e).put("remoteDocumentGlobalKey",n)}er(e,n){if(n){const r=UU(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(G.min())))return r}return Ae.newInvalidDocument(e)}}function nk(t){return new n4(t)}class r4 extends tk{constructor(e,n){super(),this.sr=e,this.trackRemovals=n,this._r=new Zi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Pe((s,o)=>ee(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this._r.get(s);if(n.push(this.sr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=fT(this.sr.serializer,o);i=i.add(s.path.popLast());const l=Uh(u);r+=l-a.size,n.push(this.sr.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=fT(this.sr.serializer,o.convertToNoDocument(G.min()));n.push(this.sr.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.sr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.sr.updateMetadata(e,r)),A.waitFor(n)}getFromCache(e,n){return this.sr.tr(e,n).next(r=>(this._r.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.sr.rr(e,n).next(({documents:r,ir:i})=>(i.forEach((s,o)=>{this._r.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function RT(t){return vt(t,"remoteDocumentGlobal")}function ss(t){return vt(t,"remoteDocumentsV14")}function gu(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function PT(t,e){const n=e.documentKey.path.toArray();return[t,Fh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function CT(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ee(n[s],r[s]),i)return i;return i=ee(n.length,r.length),i||(i=ee(n[n.length-2],r[r.length-2]),i||ee(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Hu(r.mutation,i,sn.empty(),xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=fr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=bu();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=on();const o=Ku(),a=function(){return Ku()}();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof Yr)?s=s.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),Hu(c.mutation,l,c.mutation.getFieldMask(),xe.now())):o.set(l.key,sn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var d;return a.set(l,new i4(c,(d=o.get(l))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ku();let i=new Ee((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||sn.empty();c=a.applyToLocalView(l,c),r.set(u,c);const d=(i.get(a.batchId)||te()).add(u);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,d=IC();c.forEach(h=>{if(!s.has(h)){const f=bC(n.get(h),r.get(h));f!==null&&d.set(h,f),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,d))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return M.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):aw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):A.resolve(fr());let a=-1,u=s;return o.next(l=>A.forEach(l,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?A.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{u=u.insert(c,h)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,te())).next(c=>({batchId:a,changes:EC(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(r=>{let i=bu();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=bu();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const u=function(c,d){return new Qr(d,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,u)=>{const l=u.getKey();s.get(l)===null&&(s=s.insert(l,Ae.newInvalidDocument(l)))});let o=bu();return s.forEach((a,u)=>{const l=i.get(a);l!==void 0&&Hu(l.mutation,u,sn.empty(),xe.now()),vc(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return A.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Xe(i.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:gw(i.bundledQuery),readTime:Xe(i.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(){this.overlays=new Ee(M.comparator),this.cr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=fr();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=fr(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=fr(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=fr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return A.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hw(n,r));let s=this.cr.get(n);s===void 0&&(s=te(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(){this.lr=new Pe(lt.hr),this.Pr=new Pe(lt.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new lt(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new lt(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new M(new ue([])),r=new lt(n,e),i=new lt(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new M(new ue([])),r=new lt(n,e),i=new lt(n,e+1);let s=te();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new lt(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class lt{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return M.comparator(e.key,n.key)||ee(e.mr,n.mr)}static Ir(e,n){return ee(e.mr,n.mr)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Pe(lt.hr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new cw(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new lt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new lt(n,0),i=new lt(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Pe(ee);return n.forEach(i=>{const s=new lt(i,0),o=new lt(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),A.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new lt(new M(s),0);let a=new Pe(ee);return this.pr.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.mr)),!0)},o),A.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){W(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return A.forEach(n.mutations,i=>{const s=new lt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new lt(n,0),i=this.pr.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(e){this.Dr=e,this.docs=function(){return new Ee(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():Ae.newInvalidDocument(n))}getEntries(e,n){let r=on();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ae.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=on();const o=n.path,a=new M(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||nw(XP(c),r)<=0||(i.has(c.key)||vc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,n,r,i){j()}vr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new l4(this)}getSize(e){return A.resolve(this.size)}}class l4 extends tk{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(e){this.persistence=e,this.Cr=new Zi(n=>qs(n),gc),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new _w,this.targetCount=0,this.Or=Qs.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),A.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Qs(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Ln(n),A.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,n){this.Nr={},this.overlays={},this.Br=new rn(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new c4(this),this.indexManager=new HU,this.remoteDocumentCache=function(i){return new u4(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new HC(n),this.Qr=new s4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new o4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new a4(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){N("MemoryPersistence","Starting transaction:",e);const i=new d4(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return A.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class d4 extends ZP{constructor(e){super(),this.currentSequenceNumber=e}}class cp{constructor(e){this.persistence=e,this.Wr=new _w,this.Gr=null}static zr(e){return new cp(e)}get jr(){if(this.Gr)return this.Gr;throw j()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),A.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.jr,r=>{const i=M.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,G.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return A.or([()=>A.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4{constructor(e){this.serializer=e}B(e,n,r,i){const s=new rp("createOrUpgrade",n);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",q0,{unique:!0}),u.createObjectStore("documentMutations")}(e),kT(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=A.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),kT(e)),o=o.next(()=>function(u){const l=u.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:G.min().toTimestamp(),targetCount:0};return l.put("targetGlobalKey",c)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,l){return l.store("mutations").G().next(c=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",q0,{unique:!0});const d=l.store("mutations"),h=c.map(f=>d.put(f));return A.waitFor(h)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Yr(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.Zr(s)))),r<7&&i>=7&&(o=o.next(()=>this.Xr(s))),r<8&&i>=8&&(o=o.next(()=>this.ei(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ti(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const l=u.createObjectStore("documentOverlays",{keyPath:Q$});l.createIndex("collectionPathOverlayIndex",Y$,{unique:!1}),l.createIndex("collectionGroupOverlayIndex",X$,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const l=u.createObjectStore("remoteDocumentsV14",{keyPath:F$});l.createIndex("documentKeyIndex",$$),l.createIndex("collectionGroupIndex",U$)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ri(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:G$}).createIndex("sequenceNumberIndex",W$,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:K$}).createIndex("documentKeyIndex",H$,{unique:!1})}(e))),o}Zr(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=Uh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Yr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.G().next(i=>A.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>A.forEach(a,u=>{W(u.userId===s.userId);const l=ds(this.serializer,u);return JC(e,s.userId,l).next(()=>{})}))}))}Xr(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const u=new ue(o),l=function(d){return[0,Ht(d)]}(u);s.push(n.get(l).next(c=>c?A.resolve():(d=>n.put({targetId:0,path:Ht(d),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>A.waitFor(s))})}ei(e,n){e.createObjectStore("collectionParents",{keyPath:q$});const r=n.store("collectionParents"),i=new vw,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Ht(u)})}};return n.store("remoteDocuments").Z({Y:!0},(o,a)=>{const u=new ue(o);return s(u.popLast())}).next(()=>n.store("documentMutations").Z({Y:!0},([o,a,u],l)=>{const c=hr(a);return s(c.popLast())}))}ti(e){const n=e.store("targets");return n.Z((r,i)=>{const s=Nu(i),o=QC(this.serializer,s);return n.put(o)})}ni(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),u=function(d){return d.document?new M(ue.fromString(d.document.name).popFirst(5)):d.noDocument?M.fromSegments(d.noDocument.path):d.unknownDocument?M.fromSegments(d.unknownDocument.path):j()}(o).path.toArray(),l={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>A.waitFor(i))}ri(e,n){const r=n.store("mutations"),i=nk(this.serializer),s=new ik(cp.zr,this.serializer.ct);return r.G().next(o=>{const a=new Map;return o.forEach(u=>{var l;let c=(l=a.get(u.userId))!==null&&l!==void 0?l:te();ds(this.serializer,u).keys().forEach(d=>c=c.add(d)),a.set(u.userId,c)}),A.forEach(a,(u,l)=>{const c=new dt(l),d=up.lt(this.serializer,c),h=s.getIndexManager(c),f=lp.lt(c,this.serializer,h,s.referenceDelegate);return new rk(i,f,d,h).recalculateAndSaveOverlaysForDocumentKeys(new Py(n,rn.ae),u).next()})})}}function kT(t){t.createObjectStore("targetDocuments",{keyPath:B$}).createIndex("documentTargetsIndex",z$,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",j$,{unique:!0}),t.createObjectStore("targetGlobal")}const zm="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ww{constructor(e,n,r,i,s,o,a,u,l,c,d=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.si=l,this.oi=c,this._i=d,this.Br=null,this.Lr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ai=null,this.inForeground=!1,this.ui=null,this.ci=null,this.li=Number.NEGATIVE_INFINITY,this.hi=h=>Promise.resolve(),!ww.v())throw new x(R.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new t4(this,i),this.Pi=n+"main",this.serializer=new HC(u),this.Ii=new qn(this.Pi,this._i,new h4(this.serializer)),this.kr=new YU(this.referenceDelegate,this.serializer),this.remoteDocumentCache=nk(this.serializer),this.Qr=new jU,this.window&&this.window.localStorage?this.Ti=this.window.localStorage:(this.Ti=null,c===!1&&He("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ei().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new x(R.FAILED_PRECONDITION,zm);return this.di(),this.Ai(),this.Ri(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.kr.getHighestSequenceNumber(e))}).then(e=>{this.Br=new rn(e,this.si)}).then(()=>{this.Lr=!0}).catch(e=>(this.Ii&&this.Ii.close(),Promise.reject(e)))}Vi(e){return this.hi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ii.k(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.Ei()}))}Ei(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ld(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.mi(e).next(n=>{n||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)))})}).next(()=>this.fi(e)).next(n=>this.isPrimary&&!n?this.gi(e).next(()=>!1):!!n&&this.pi(e).next(()=>!0))).catch(e=>{if(Ji(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.hi(e)),this.isPrimary=e})}mi(e){return yu(e).get("owner").next(n=>A.resolve(this.yi(n)))}wi(e){return ld(e).delete(this.clientId)}async Si(){if(this.isPrimary&&!this.bi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=vt(n,"clientMetadata");return r.G().next(i=>{const s=this.Di(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return A.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ti)for(const n of e)this.Ti.removeItem(this.vi(n.clientId))}}Ri(){this.ci=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ei().then(()=>this.Si()).then(()=>this.Ri()))}yi(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.oi?A.resolve(!0):yu(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)){if(this.yi(n)&&this.networkEnabled)return!0;if(!this.yi(n)){if(!n.allowTabSynchronization)throw new x(R.FAILED_PRECONDITION,zm);return!1}}return!(!this.networkEnabled||!this.inForeground)||ld(e).G().next(r=>this.Di(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&N("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Lr=!1,this.Fi(),this.ci&&(this.ci.cancel(),this.ci=null),this.Mi(),this.xi(),await this.Ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Py(e,rn.ae);return this.gi(n).next(()=>this.wi(n))}),this.Ii.close(),this.Oi()}Di(e,n){return e.filter(r=>this.bi(r.updateTimeMs,n)&&!this.Ci(r.clientId))}Ni(){return this.runTransaction("getActiveClients","readonly",e=>ld(e).G().next(n=>this.Di(n,18e5).map(r=>r.clientId)))}get started(){return this.Lr}getMutationQueue(e,n){return lp.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new QU(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return up.lt(this.serializer,e)}getBundleCache(){return this.Qr}runTransaction(e,n,r){N("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(u){return u===15?Z$:u===14?iC:u===13?rC:u===12?J$:u===11?nC:void j()}(this._i);let o;return this.Ii.runTransaction(e,i,s,a=>(o=new Py(a,this.Br?this.Br.next():rn.ae),n==="readwrite-primary"?this.mi(o).next(u=>!!u||this.fi(o)).next(u=>{if(!u)throw He(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)),new x(R.FAILED_PRECONDITION,JP);return r(o)}).next(u=>this.pi(o).next(()=>u)):this.Bi(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Bi(e){return yu(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)&&!this.yi(n)&&!(this.oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new x(R.FAILED_PRECONDITION,zm)})}pi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return yu(e).put("owner",n)}static v(){return qn.v()}gi(e){const n=yu(e);return n.get("owner").next(r=>this.yi(r)?(N("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):A.resolve())}bi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(He(`Detected an update time that is in the future: ${e} > ${r}`),!1))}di(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ui=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ei()))},this.document.addEventListener("visibilitychange",this.ui),this.inForeground=this.document.visibilityState==="visible")}Mi(){this.ui&&(this.document.removeEventListener("visibilitychange",this.ui),this.ui=null)}Ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ai=()=>{this.Fi();const n=/(?:Version|Mobile)\/1[456]/;UM()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ai))}xi(){this.ai&&(this.window.removeEventListener("pagehide",this.ai),this.ai=null)}Ci(e){var n;try{const r=((n=this.Ti)===null||n===void 0?void 0:n.getItem(this.vi(e)))!==null;return N("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return He("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Fi(){if(this.Ti)try{this.Ti.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){He("Failed to set zombie client id.",e)}}Oi(){if(this.Ti)try{this.Ti.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function yu(t){return vt(t,"owner")}function ld(t){return vt(t,"clientMetadata")}function Ew(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Iw(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(nT(n))return A.resolve(null);let r=dn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Mh(n,null,"F"),r=dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.Gi(n,a);return this.zi(n,l,o,u.readTime)?this.$i(e,Mh(n,null,"F")):this.ji(e,l,n,u)}))})))}Ui(e,n,r,i){return nT(n)||i.isEqual(G.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(Ay()<=ae.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Oy(n)),this.ji(e,o,n,YP(i,-1)))})}Gi(e,n){let r=new Pe(_C(e));return n.forEach((i,s)=>{vc(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return Ay()<=ae.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Oy(n)),this.Ki.getDocumentsMatchingQuery(e,n,En.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Ee(ee),this.Yi=new Zi(s=>qs(s),gc),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rk(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function ok(t,e,n,r){return new f4(t,e,n,r)}async function ak(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=te();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({ts:l,removedBatchIds:o,addedBatchIds:a}))})})}function p4(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,u,l,c){const d=l.batch,h=d.keys();let f=A.resolve();return h.forEach(v=>{f=f.next(()=>c.getEntry(u,v)).next(y=>{const w=l.docVersions.get(v);W(w!==null),y.version.compareTo(w)<0&&(d.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),c.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(u,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=te();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(u=u.add(a.batch.mutations[l].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function uk(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function m4(t,e){const n=$(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.kr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.kr.addMatchingKeys(s,c.addedDocuments,d)));let f=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?f=f.withResumeToken(at.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(d,f),function(y,w,m){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(h,f,c)&&a.push(n.kr.updateTargetData(s,f))});let u=on(),l=te();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(lk(s,o,e.documentUpdates).next(c=>{u=c.ns,l=c.rs})),!r.isEqual(G.min())){const c=n.kr.getLastRemoteSnapshotVersion(s).next(d=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.Ji=i,s))}function lk(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=on();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(G.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{ns:o,rs:i}})}function g4(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ga(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new Dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function ya(t,e,n){const r=$(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ji(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function jh(t,e,n){const r=$(t);let i=G.min(),s=te();return r.persistence.runTransaction("Execute query","readonly",o=>function(u,l,c){const d=$(u),h=d.Yi.get(c);return h!==void 0?A.resolve(d.Ji.get(h)):d.kr.getTargetData(l,c)}(r,o,dn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:G.min(),n?s:te())).next(a=>(hk(r,vC(e),a),{documents:a,ss:s})))}function ck(t,e){const n=$(t),r=$(n.kr),i=n.Ji.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ut(s,e).next(o=>o?o.target:null))}function dk(t,e){const n=$(t),r=n.Zi.get(e)||G.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Xi.getAllFromCollectionGroup(i,e,YP(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(hk(n,e,i),i))}function hk(t,e,n){let r=t.Zi.get(e)||G.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}async function y4(t,e,n,r){const i=$(t);let s=te(),o=on();for(const l of n){const c=e.os(l.metadata.name);l.document&&(s=s.add(c));const d=e._s(l);d.setReadTime(e.us(l.metadata.readTime)),o=o.insert(c,d)}const a=i.Xi.newChangeBuffer({trackRemovals:!0}),u=await ga(i,function(c){return dn($a(ue.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>lk(l,a,o).next(c=>(a.apply(l),c)).next(c=>i.kr.removeMatchingKeysForTargetId(l,u.targetId).next(()=>i.kr.addMatchingKeys(l,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,c.ns,c.rs)).next(()=>c.ns)))}async function v4(t,e,n=te()){const r=await ga(t,dn(gw(e.bundledQuery))),i=$(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Xe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Qr.saveNamedQuery(s,e);const a=r.withResumeToken(at.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.kr.updateTargetData(s,a).next(()=>i.kr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.kr.addMatchingKeys(s,n,r.targetId)).next(()=>i.Qr.saveNamedQuery(s,e))})}function bT(t,e){return`firestore_clients_${t}_${e}`}function xT(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function qm(t,e){return`firestore_targets_${t}_${e}`}class Bh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static cs(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new x(i.error.code,i.error.message))),o?new Bh(e,n,i.state,s):(He("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Qu{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static cs(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new x(r.error.code,r.error.message))),s?new Qu(e,r.state,i):(He("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class zh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static cs(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=uw();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=eC(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new zh(e,s):(He("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Tw{constructor(e,n){this.clientId=e,this.onlineState=n}static cs(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Tw(n.clientId,n.onlineState):(He("SharedClientState",`Failed to parse online state: ${e}`),null)}}class jy{constructor(){this.activeTargetIds=uw()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Gm{constructor(e,n,r,i,s){this.window=e,this.ii=n,this.persistenceKey=r,this.Is=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ts=this.Es.bind(this),this.ds=new Ee(ee),this.started=!1,this.As=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Rs=bT(this.persistenceKey,this.Is),this.Vs=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.ds=this.ds.insert(this.Is,new jy),this.fs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.ps=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.ys=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.ws=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ts)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ni();for(const r of e){if(r===this.Is)continue;const i=this.getItem(bT(this.persistenceKey,r));if(i){const s=zh.cs(r,i);s&&(this.ds=this.ds.insert(s.clientId,s))}}this.Ss();const n=this.storage.getItem(this.ys);if(n){const r=this.bs(n);r&&this.Ds(r)}for(const r of this.As)this.Es(r);this.As=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.vs(this.ds)}isActiveQueryTarget(e){let n=!1;return this.ds.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Cs(e,"pending")}updateMutationState(e,n,r){this.Cs(e,n,r),this.Fs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(qm(this.persistenceKey,e));if(r){const i=Qu.cs(e,r);i&&(n=i.state)}}return this.Ms.hs(e),this.Ss(),n}removeLocalQueryTarget(e){this.Ms.Ps(e),this.Ss()}isLocalQueryTarget(e){return this.Ms.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(qm(this.persistenceKey,e))}updateQueryState(e,n,r){this.xs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Fs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Os(e)}notifyBundleLoaded(e){this.Ns(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ts),this.removeItem(this.Rs),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return N("SharedClientState","READ",e,n),n}setItem(e,n){N("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){N("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Es(e){const n=e;if(n.storageArea===this.storage){if(N("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Rs)return void He("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.fs.test(n.key)){if(n.newValue==null){const r=this.Bs(n.key);return this.Ls(r,null)}{const r=this.ks(n.key,n.newValue);if(r)return this.Ls(r.clientId,r)}}else if(this.gs.test(n.key)){if(n.newValue!==null){const r=this.qs(n.key,n.newValue);if(r)return this.Qs(r)}}else if(this.ps.test(n.key)){if(n.newValue!==null){const r=this.Ks(n.key,n.newValue);if(r)return this.$s(r)}}else if(n.key===this.ys){if(n.newValue!==null){const r=this.bs(n.newValue);if(r)return this.Ds(r)}}else if(n.key===this.Vs){const r=function(s){let o=rn.ae;if(s!=null)try{const a=JSON.parse(s);W(typeof a=="number"),o=a}catch(a){He("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==rn.ae&&this.sequenceNumberHandler(r)}else if(n.key===this.ws){const r=this.Us(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ws(i)))}}}else this.As.push(n)})}}get Ms(){return this.ds.get(this.Is)}Ss(){this.setItem(this.Rs,this.Ms.ls())}Cs(e,n,r){const i=new Bh(this.currentUser,e,n,r),s=xT(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ls())}Fs(e){const n=xT(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Os(e){const n={clientId:this.Is,onlineState:e};this.storage.setItem(this.ys,JSON.stringify(n))}xs(e,n,r){const i=qm(this.persistenceKey,e),s=new Qu(e,n,r);this.setItem(i,s.ls())}Ns(e){const n=JSON.stringify(Array.from(e));this.setItem(this.ws,n)}Bs(e){const n=this.fs.exec(e);return n?n[1]:null}ks(e,n){const r=this.Bs(e);return zh.cs(r,n)}qs(e,n){const r=this.gs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Bh.cs(new dt(s),i,n)}Ks(e,n){const r=this.ps.exec(e),i=Number(r[1]);return Qu.cs(i,n)}bs(e){return Tw.cs(e)}Us(e){return JSON.parse(e)}async Qs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Gs(e.batchId,e.state,e.error);N("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}$s(e){return this.syncEngine.zs(e.targetId,e.state,e.error)}Ls(e,n){const r=n?this.ds.insert(e,n):this.ds.remove(e),i=this.vs(this.ds),s=this.vs(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.js(o,a).then(()=>{this.ds=r})}Ds(e){this.ds.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}vs(e){let n=uw();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class fk{constructor(){this.Hs=new jy,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new jy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cd=null;function Wm(){return cd===null?cd=function(){return 268435456+Math.round(2147483648*Math.random())}():cd++,"0x"+cd.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="WebChannelConnection";class I4 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http";this.To=r+"://"+n.host,this.Eo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get Ao(){return!1}Ro(n,r,i,s,o){const a=Wm(),u=this.Vo(n,r);N("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const l={};return this.mo(l,s,o),this.fo(n,u,l,i).then(c=>(N("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Yn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",u,"request:",i),c})}po(n,r,i,s,o,a){return this.Ro(n,r,i,s,o)}mo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Vo(n,r){const i=w4[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}fo(e,n,r,i){const s=Wm();return new Promise((o,a)=>{const u=new v$;u.setWithCredentials(!0),u.listenOnce(m$.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case jm.NO_ERROR:const c=u.getResponseJson();N(Dt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case jm.TIMEOUT:N(Dt,`RPC '${e}' ${s} timed out`),a(new x(R.DEADLINE_EXCEEDED,"Request time out"));break;case jm.HTTP_ERROR:const d=u.getStatus();if(N(Dt,`RPC '${e}' ${s} failed with status:`,d,"response text:",u.getResponseText()),d>0){let h=u.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const v=function(w){const m=w.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(m)>=0?m:R.UNKNOWN}(f.status);a(new x(v,f.message))}else a(new x(R.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new x(R.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{N(Dt,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);N(Dt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",l,r,15)})}yo(e,n,r){const i=Wm(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=f$(),a=p$(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.xmlHttpFactory=new y$({})),this.mo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const c=s.join("");N(Dt,`Creating RPC '${e}' stream ${i}: ${c}`,u);const d=o.createWebChannel(c,u);let h=!1,f=!1;const v=new E4({so:w=>{f?N(Dt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(h||(N(Dt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),h=!0),N(Dt,`RPC '${e}' stream ${i} sending:`,w),d.send(w))},oo:()=>d.close()}),y=(w,m,p)=>{w.listen(m,g=>{try{p(g)}catch(_){setTimeout(()=>{throw _},0)}})};return y(d,rd.EventType.OPEN,()=>{f||N(Dt,`RPC '${e}' stream ${i} transport opened.`)}),y(d,rd.EventType.CLOSE,()=>{f||(f=!0,N(Dt,`RPC '${e}' stream ${i} transport closed`),v.Po())}),y(d,rd.EventType.ERROR,w=>{f||(f=!0,Yn(Dt,`RPC '${e}' stream ${i} transport errored:`,w),v.Po(new x(R.UNAVAILABLE,"The operation could not be completed")))}),y(d,rd.EventType.MESSAGE,w=>{var m;if(!f){const p=w.data[0];W(!!p);const g=p,_=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(_){N(Dt,`RPC '${e}' stream ${i} received error:`,_);const I=_.status;let S=function(J){const z=Ze[J];if(z!==void 0)return DC(z)}(I),C=_.message;S===void 0&&(S=R.INTERNAL,C="Unknown error status: "+I+" with message "+_.message),f=!0,v.Po(new x(S,C)),d.close()}else N(Dt,`RPC '${e}' stream ${i} received:`,p),v.Io(p)}}),y(a,g$.STAT_EVENT,w=>{w.stat===U0.PROXY?N(Dt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===U0.NOPROXY&&N(Dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.ho()},0),v}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(){return typeof window<"u"?window:null}function xd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t){return new bU(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.wo=r,this.So=i,this.bo=s,this.Do=0,this.vo=null,this.Co=Date.now(),this.reset()}reset(){this.Do=0}Fo(){this.Do=this.bo}Mo(e){this.cancel();const n=Math.floor(this.Do+this.xo()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Do} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.vo=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.Do*=this.So,this.Do<this.wo&&(this.Do=this.wo),this.Do>this.bo&&(this.Do=this.bo)}Oo(){this.vo!==null&&(this.vo.skipDelay(),this.vo=null)}cancel(){this.vo!==null&&(this.vo.cancel(),this.vo=null)}xo(){return(Math.random()-.5)*this.Do}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,n,r,i,s,o,a,u){this.ii=e,this.No=r,this.Bo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Lo=0,this.ko=null,this.qo=null,this.stream=null,this.Qo=new Sw(e,n)}Ko(){return this.state===1||this.state===5||this.$o()}$o(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Uo()}async stop(){this.Ko()&&await this.close(0)}Wo(){this.state=0,this.Qo.reset()}Go(){this.$o()&&this.ko===null&&(this.ko=this.ii.enqueueAfterDelay(this.No,6e4,()=>this.zo()))}jo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.$o())return this.close(0)}Ho(){this.ko&&(this.ko.cancel(),this.ko=null)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}async close(e,n){this.Ho(),this.Jo(),this.Qo.cancel(),this.Lo++,e!==4?this.Qo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(He(n.toString()),He("Using maximum backoff delay to prevent overloading the backend."),this.Qo.Fo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Yo(){}auth(){this.state=1;const e=this.Zo(this.Lo),n=this.Lo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Lo===n&&this.Xo(r,i)},r=>{e(()=>{const i=new x(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.e_(i)})})}Xo(e,n){const r=this.Zo(this.Lo);this.stream=this.t_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.qo=this.ii.enqueueAfterDelay(this.Bo,1e4,()=>(this.$o()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.e_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Uo(){this.state=5,this.Qo.Mo(async()=>{this.state=0,this.start()})}e_(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Zo(e){return n=>{this.ii.enqueueAndForget(()=>this.Lo===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class T4 extends mk{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}t_(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.Qo.reset();const n=DU(this.serializer,e),r=function(s){if(!("targetChange"in s))return G.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?Xe(o.readTime):G.min()}(e);return this.listener.n_(n,r)}r_(e){const n={};n.database=$l(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Vh(u)?{documents:BC(s,u)}:{query:zC(s,u)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=MC(s,o.resumeToken);const l=Vy(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(G.min())>0){a.readTime=ma(s,o.snapshotVersion.toTimestamp());const l=Vy(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=VU(this.serializer,e);r&&(n.labels=r),this.jo(n)}i_(e){const n={};n.database=$l(this.serializer),n.removeTarget=e,this.jo(n)}}class S4 extends mk{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.s_=!1}get o_(){return this.s_}start(){this.s_=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.s_&&this.__([])}t_(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.s_){this.Qo.reset();const n=OU(e.writeResults,e.commitTime),r=Xe(e.commitTime);return this.listener.a_(r,n)}return W(!e.writeResults||e.writeResults.length===0),this.s_=!0,this.listener.u_()}c_(){const e={};e.database=$l(this.serializer),this.jo(e)}__(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ul(this.serializer,r))};this.jo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.l_=!1}h_(){if(this.l_)throw new x(R.FAILED_PRECONDITION,"The client has already been terminated.")}Ro(e,n,r){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(R.UNKNOWN,i.toString())})}po(e,n,r,i){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.po(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(R.UNKNOWN,s.toString())})}terminate(){this.l_=!0}}class R4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.I_=0,this.T_=null,this.E_=!0}d_(){this.I_===0&&(this.A_("Unknown"),this.T_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.T_=null,this.R_("Backend didn't respond within 10 seconds."),this.A_("Offline"),Promise.resolve())))}V_(e){this.state==="Online"?this.A_("Unknown"):(this.I_++,this.I_>=1&&(this.m_(),this.R_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.A_("Offline")))}set(e){this.m_(),this.I_=0,e==="Online"&&(this.E_=!1),this.A_(e)}A_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}R_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.E_?(He(n),this.E_=!1):N("OnlineStateTracker",n)}m_(){this.T_!==null&&(this.T_.cancel(),this.T_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.f_=[],this.g_=new Map,this.p_=new Set,this.y_=[],this.w_=s,this.w_.Ys(o=>{r.enqueueAndForget(async()=>{es(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(u){const l=$(u);l.p_.add(4),await Ba(l),l.S_.set("Unknown"),l.p_.delete(4),await Tc(l)}(this))})}),this.S_=new R4(r,i)}}async function Tc(t){if(es(t))for(const e of t.y_)await e(!0)}async function Ba(t){for(const e of t.y_)await e(!1)}function dp(t,e){const n=$(t);n.g_.has(e.targetId)||(n.g_.set(e.targetId,e),Pw(n)?Rw(n):qa(n).$o()&&Aw(n,e))}function jl(t,e){const n=$(t),r=qa(n);n.g_.delete(e),r.$o()&&gk(n,e),n.g_.size===0&&(r.$o()?r.Go():es(n)&&n.S_.set("Unknown"))}function Aw(t,e){if(t.b_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qa(t).r_(e)}function gk(t,e){t.b_.Be(e),qa(t).i_(e)}function Rw(t){t.b_=new RU({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.g_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),qa(t).start(),t.S_.d_()}function Pw(t){return es(t)&&!qa(t).Ko()&&t.g_.size>0}function es(t){return $(t).p_.size===0}function yk(t){t.b_=void 0}async function C4(t){t.g_.forEach((e,n)=>{Aw(t,e)})}async function k4(t,e){yk(t),Pw(t)?(t.S_.V_(e),Rw(t)):t.S_.set("Unknown")}async function b4(t,e,n){if(t.S_.set("Online"),e instanceof LC&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.g_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.g_.delete(a),i.b_.removeTarget(a))}(t,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qh(t,r)}else if(e instanceof bd?t.b_.We(e):e instanceof VC?t.b_.Ze(e):t.b_.je(e),!n.isEqual(G.min()))try{const r=await uk(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.b_.st(o);return a.targetChanges.forEach((u,l)=>{if(u.resumeToken.approximateByteSize()>0){const c=s.g_.get(l);c&&s.g_.set(l,c.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,l)=>{const c=s.g_.get(u);if(!c)return;s.g_.set(u,c.withResumeToken(at.EMPTY_BYTE_STRING,c.snapshotVersion)),gk(s,u);const d=new Dr(c.target,u,l,c.sequenceNumber);Aw(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await qh(t,r)}}async function qh(t,e,n){if(!Ji(e))throw e;t.p_.add(1),await Ba(t),t.S_.set("Offline"),n||(n=()=>uk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.p_.delete(1),await Tc(t)})}function vk(t,e){return e().catch(n=>qh(t,n,e))}async function za(t){const e=$(t),n=ji(e);let r=e.f_.length>0?e.f_[e.f_.length-1].batchId:-1;for(;x4(e);)try{const i=await g4(e.localStore,r);if(i===null){e.f_.length===0&&n.Go();break}r=i.batchId,N4(e,i)}catch(i){await qh(e,i)}_k(e)&&wk(e)}function x4(t){return es(t)&&t.f_.length<10}function N4(t,e){t.f_.push(e);const n=ji(t);n.$o()&&n.o_&&n.__(e.mutations)}function _k(t){return es(t)&&!ji(t).Ko()&&t.f_.length>0}function wk(t){ji(t).start()}async function D4(t){ji(t).c_()}async function O4(t){const e=ji(t);for(const n of t.f_)e.__(n.mutations)}async function V4(t,e,n){const r=t.f_.shift(),i=dw.from(r,e,n);await vk(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await za(t)}async function L4(t,e){e&&ji(t).o_&&await async function(r,i){if(function(o){return NC(o)&&o!==R.ABORTED}(i.code)){const s=r.f_.shift();ji(r).Wo(),await vk(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await za(r)}}(t,e),_k(t)&&wk(t)}async function DT(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=es(n);n.p_.add(3),await Ba(n),r&&n.S_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.p_.delete(3),await Tc(n)}async function By(t,e){const n=$(t);e?(n.p_.delete(2),await Tc(n)):e||(n.p_.add(2),await Ba(n),n.S_.set("Unknown"))}function qa(t){return t.D_||(t.D_=function(n,r,i){const s=$(n);return s.h_(),new T4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:C4.bind(null,t),uo:k4.bind(null,t),n_:b4.bind(null,t)}),t.y_.push(async e=>{e?(t.D_.Wo(),Pw(t)?Rw(t):t.S_.set("Unknown")):(await t.D_.stop(),yk(t))})),t.D_}function ji(t){return t.v_||(t.v_=function(n,r,i){const s=$(n);return s.h_(),new S4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:D4.bind(null,t),uo:L4.bind(null,t),u_:O4.bind(null,t),a_:V4.bind(null,t)}),t.y_.push(async e=>{e?(t.v_.Wo(),await za(t)):(await t.v_.stop(),t.f_.length>0&&(N("RemoteStore",`Stopping write stream with ${t.f_.length} pending writes`),t.f_=[]))})),t.v_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Cw(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ga(t,e){if(He("AsyncQueue",`${e}: ${t}`),Ji(t))return new x(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=bu(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new Ho(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ho)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ho;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(){this.C_=new Ee(M.comparator)}track(e){const n=e.doc.key,r=this.C_.get(n);r?e.type!==0&&r.type===3?this.C_=this.C_.insert(n,e):e.type===3&&r.type!==1?this.C_=this.C_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.C_=this.C_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.C_=this.C_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.C_=this.C_.remove(n):e.type===1&&r.type===2?this.C_=this.C_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.C_=this.C_.insert(n,{type:2,doc:e.doc}):j():this.C_=this.C_.insert(n,e)}F_(){const e=[];return this.C_.inorderTraversal((n,r)=>{e.push(r)}),e}}class va{constructor(e,n,r,i,s,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new va(e,n,Ho.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(){this.M_=void 0,this.listeners=[]}}class F4{constructor(){this.queries=new Zi(e=>yC(e),yc),this.onlineState="Unknown",this.x_=new Set}}async function kw(t,e){const n=$(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new M4),i)try{s.M_=await n.onListen(r)}catch(o){const a=Ga(o,`Initialization of query '${Oy(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.O_(n.onlineState),s.M_&&e.N_(s.M_)&&xw(n)}async function bw(t,e){const n=$(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function $4(t,e){const n=$(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.N_(i)&&(r=!0);o.M_=i}}r&&xw(n)}function U4(t,e,n){const r=$(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function xw(t){t.x_.forEach(e=>{e.next()})}class Nw{constructor(e,n,r){this.query=e,this.B_=n,this.L_=!1,this.k_=null,this.onlineState="Unknown",this.options=r||{}}N_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new va(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.L_?this.q_(e)&&(this.B_.next(e),n=!0):this.Q_(e,this.onlineState)&&(this.K_(e),n=!0),this.k_=e,n}onError(e){this.B_.error(e)}O_(e){this.onlineState=e;let n=!1;return this.k_&&!this.L_&&this.Q_(this.k_,e)&&(this.K_(this.k_),n=!0),n}Q_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.U_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}q_(e){if(e.docChanges.length>0)return!0;const n=this.k_&&this.k_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}K_(e){e=va.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.L_=!0,this.B_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(e,n){this.W_=e,this.byteLength=n}G_(){return"metadata"in this.W_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e){this.serializer=e}os(e){return vr(this.serializer,e)}_s(e){return e.metadata.exists?jC(this.serializer,e.document,!1):Ae.newNoDocument(this.os(e.metadata.name),this.us(e.metadata.readTime))}us(e){return Xe(e)}}class B4{constructor(e,n,r){this.z_=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Ek(e)}j_(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.W_.namedQuery)this.queries.push(e.W_.namedQuery);else if(e.W_.documentMetadata){this.documents.push({metadata:e.W_.documentMetadata}),e.W_.documentMetadata.exists||++n;const r=ue.fromString(e.W_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.W_.document&&(this.documents[this.documents.length-1].document=e.W_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}H_(e){const n=new Map,r=new VT(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.os(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||te()).add(s);n.set(o,a)}}return n}async complete(){const e=await y4(this.localStore,new VT(this.serializer),this.documents,this.z_.id),n=this.H_(this.documents);for(const r of this.queries)await v4(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,J_:this.collectionGroups,Y_:e}}}function Ek(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e){this.key=e}}class Tk{constructor(e){this.key=e}}class Sk{constructor(e,n){this.query=e,this.Z_=n,this.X_=null,this.hasCachedResults=!1,this.current=!1,this.ea=te(),this.mutatedKeys=te(),this.ta=_C(e),this.na=new Ho(this.ta)}get ra(){return this.Z_}ia(e,n){const r=n?n.sa:new OT,i=n?n.na:this.na;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),f=vc(this.query,d)?d:null,v=!!h&&this.mutatedKeys.has(h.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;h&&f?h.data.isEqual(f.data)?v!==y&&(r.track({type:3,doc:f}),w=!0):this.oa(h,f)||(r.track({type:2,doc:f}),w=!0,(u&&this.ta(f,u)>0||l&&this.ta(f,l)<0)&&(a=!0)):!h&&f?(r.track({type:0,doc:f}),w=!0):h&&!f&&(r.track({type:1,doc:h}),w=!0,(u||l)&&(a=!0)),w&&(f?(o=o.add(f),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{na:o,sa:r,zi:a,mutatedKeys:s}}oa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.na;this.na=e.na,this.mutatedKeys=e.mutatedKeys;const s=e.sa.F_();s.sort((l,c)=>function(h,f){const v=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return v(h)-v(f)}(l.type,c.type)||this.ta(l.doc,c.doc)),this._a(r);const o=n?this.aa():[],a=this.ea.size===0&&this.current?1:0,u=a!==this.X_;return this.X_=a,s.length!==0||u?{snapshot:new va(this.query,e.na,i,s,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ua:o}:{ua:o}}O_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({na:this.na,sa:new OT,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ua:[]}}ca(e){return!this.Z_.has(e)&&!!this.na.has(e)&&!this.na.get(e).hasLocalMutations}_a(e){e&&(e.addedDocuments.forEach(n=>this.Z_=this.Z_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Z_=this.Z_.delete(n)),this.current=e.current)}aa(){if(!this.current)return[];const e=this.ea;this.ea=te(),this.na.forEach(r=>{this.ca(r.key)&&(this.ea=this.ea.add(r.key))});const n=[];return e.forEach(r=>{this.ea.has(r)||n.push(new Tk(r))}),this.ea.forEach(r=>{e.has(r)||n.push(new Ik(r))}),n}la(e){this.Z_=e.ss,this.ea=te();const n=this.ia(e.documents);return this.applyChanges(n,!0)}ha(){return va.fromInitialDocuments(this.query,this.na,this.mutatedKeys,this.X_===0,this.hasCachedResults)}}class z4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class q4{constructor(e){this.key=e,this.Pa=!1}}class G4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ia={},this.Ta=new Zi(a=>yC(a),yc),this.Ea=new Map,this.da=new Set,this.Aa=new Ee(M.comparator),this.Ra=new Map,this.Va=new _w,this.ma={},this.fa=new Map,this.ga=Qs.On(),this.onlineState="Unknown",this.pa=void 0}get isPrimaryClient(){return this.pa===!0}}async function W4(t,e){const n=Mw(t);let r,i;const s=n.Ta.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ha();else{const o=await ga(n.localStore,dn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Dw(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&dp(n.remoteStore,o)}return i}async function Dw(t,e,n,r,i){t.ya=(d,h,f)=>async function(y,w,m,p){let g=w.view.ia(m);g.zi&&(g=await jh(y.localStore,w.query,!1).then(({documents:S})=>w.view.ia(S,g)));const _=p&&p.targetChanges.get(w.targetId),I=w.view.applyChanges(g,y.isPrimaryClient,_);return zy(y,w.targetId,I.ua),I.snapshot}(t,d,h,f);const s=await jh(t.localStore,e,!0),o=new Sk(e,s.ss),a=o.ia(s.documents),u=Ec.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);zy(t,n,l.ua);const c=new z4(e,n,o);return t.Ta.set(e,c),t.Ea.has(n)?t.Ea.get(n).push(e):t.Ea.set(n,[e]),l.snapshot}async function K4(t,e){const n=$(t),r=n.Ta.get(e),i=n.Ea.get(r.targetId);if(i.length>1)return n.Ea.set(r.targetId,i.filter(s=>!yc(s,e))),void n.Ta.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ya(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),jl(n.remoteStore,r.targetId),_a(n,r.targetId)}).catch(Xi)):(_a(n,r.targetId),await ya(n.localStore,r.targetId,!0))}async function H4(t,e,n){const r=Fw(t);try{const i=await function(o,a){const u=$(o),l=xe.now(),c=a.reduce((f,v)=>f.add(v.key),te());let d,h;return u.persistence.runTransaction("Locally write mutations","readwrite",f=>{let v=on(),y=te();return u.Xi.getEntries(f,c).next(w=>{v=w,v.forEach((m,p)=>{p.isValidDocument()||(y=y.add(m))})}).next(()=>u.localDocuments.getOverlayedDocuments(f,v)).next(w=>{d=w;const m=[];for(const p of a){const g=TU(p,d.get(p.key).overlayedDocument);g!=null&&m.push(new Yr(p.key,g,uC(g.value.mapValue),be.exists(!0)))}return u.mutationQueue.addMutationBatch(f,l,m,a)}).next(w=>{h=w;const m=w.applyToLocalDocumentSet(d,y);return u.documentOverlayCache.saveOverlays(f,w.batchId,m)})}).then(()=>({batchId:h.batchId,changes:EC(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let l=o.ma[o.currentUser.toKey()];l||(l=new Ee(ee)),l=l.insert(a,u),o.ma[o.currentUser.toKey()]=l}(r,i.batchId,n),await Xr(r,i.changes),await za(r.remoteStore)}catch(i){const s=Ga(i,"Failed to persist write");n.reject(s)}}async function Ak(t,e){const n=$(t);try{const r=await m4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ra.get(s);o&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Pa=!0:i.modifiedDocuments.size>0?W(o.Pa):i.removedDocuments.size>0&&(W(o.Pa),o.Pa=!1))}),await Xr(n,r,e)}catch(r){await Xi(r)}}function LT(t,e,n){const r=$(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ta.forEach((s,o)=>{const a=o.view.O_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=$(o);u.onlineState=a;let l=!1;u.queries.forEach((c,d)=>{for(const h of d.listeners)h.O_(a)&&(l=!0)}),l&&xw(u)}(r.eventManager,e),i.length&&r.Ia.n_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Q4(t,e,n){const r=$(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ra.get(e),s=i&&i.key;if(s){let o=new Ee(M.comparator);o=o.insert(s,Ae.newNoDocument(s,G.min()));const a=te().add(s),u=new wc(G.min(),new Map,new Ee(ee),o,a);await Ak(r,u),r.Aa=r.Aa.remove(s),r.Ra.delete(e),Lw(r)}else await ya(r.localStore,e,!1).then(()=>_a(r,e,n)).catch(Xi)}async function Y4(t,e){const n=$(t),r=e.batch.batchId;try{const i=await p4(n.localStore,e);Vw(n,r,null),Ow(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xr(n,i)}catch(i){await Xi(i)}}async function X4(t,e,n){const r=$(t);try{const i=await function(o,a){const u=$(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return u.mutationQueue.lookupMutationBatch(l,a).next(d=>(W(d!==null),c=d.keys(),u.mutationQueue.removeMutationBatch(l,d))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,c,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>u.localDocuments.getDocuments(l,c))})}(r.localStore,e);Vw(r,e,n),Ow(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xr(r,i)}catch(i){await Xi(i)}}async function J4(t,e){const n=$(t);es(n.remoteStore)||N("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=$(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(n.localStore);if(r===-1)return void e.resolve();const i=n.fa.get(r)||[];i.push(e),n.fa.set(r,i)}catch(r){const i=Ga(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Ow(t,e){(t.fa.get(e)||[]).forEach(n=>{n.resolve()}),t.fa.delete(e)}function Vw(t,e,n){const r=$(t);let i=r.ma[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ma[r.currentUser.toKey()]=i}}function _a(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ea.get(e))t.Ta.delete(r),n&&t.Ia.wa(r,n);t.Ea.delete(e),t.isPrimaryClient&&t.Va.Ar(e).forEach(r=>{t.Va.containsKey(r)||Rk(t,r)})}function Rk(t,e){t.da.delete(e.path.canonicalString());const n=t.Aa.get(e);n!==null&&(jl(t.remoteStore,n),t.Aa=t.Aa.remove(e),t.Ra.delete(n),Lw(t))}function zy(t,e,n){for(const r of n)r instanceof Ik?(t.Va.addReference(r.key,e),Z4(t,r)):r instanceof Tk?(N("SyncEngine","Document no longer in limbo: "+r.key),t.Va.removeReference(r.key,e),t.Va.containsKey(r.key)||Rk(t,r.key)):j()}function Z4(t,e){const n=e.key,r=n.path.canonicalString();t.Aa.get(n)||t.da.has(r)||(N("SyncEngine","New document in limbo: "+n),t.da.add(r),Lw(t))}function Lw(t){for(;t.da.size>0&&t.Aa.size<t.maxConcurrentLimboResolutions;){const e=t.da.values().next().value;t.da.delete(e);const n=new M(ue.fromString(e)),r=t.ga.next();t.Ra.set(r,new q4(n)),t.Aa=t.Aa.insert(n,r),dp(t.remoteStore,new Dr(dn($a(n.path)),r,"TargetPurposeLimboResolution",rn.ae))}}async function Xr(t,e,n){const r=$(t),i=[],s=[],o=[];r.Ta.isEmpty()||(r.Ta.forEach((a,u)=>{o.push(r.ya(u,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=Iw.qi(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.Ia.n_(i),await async function(u,l){const c=$(u);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>A.forEach(l,h=>A.forEach(h.Li,f=>c.persistence.referenceDelegate.addReference(d,h.targetId,f)).next(()=>A.forEach(h.ki,f=>c.persistence.referenceDelegate.removeReference(d,h.targetId,f)))))}catch(d){if(!Ji(d))throw d;N("LocalStore","Failed to update sequence numbers: "+d)}for(const d of l){const h=d.targetId;if(!d.fromCache){const f=c.Ji.get(h),v=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(v);c.Ji=c.Ji.insert(h,y)}}}(r.localStore,s))}async function ej(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await ak(n.localStore,e);n.currentUser=e,function(s,o){s.fa.forEach(a=>{a.forEach(u=>{u.reject(new x(R.CANCELLED,o))})}),s.fa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xr(n,r.ts)}}function tj(t,e){const n=$(t),r=n.Ra.get(e);if(r&&r.Pa)return te().add(r.key);{let i=te();const s=n.Ea.get(e);if(!s)return i;for(const o of s){const a=n.Ta.get(o);i=i.unionWith(a.view.ra)}return i}}async function nj(t,e){const n=$(t),r=await jh(n.localStore,e.query,!0),i=e.view.la(r);return n.isPrimaryClient&&zy(n,e.targetId,i.ua),i}async function rj(t,e){const n=$(t);return dk(n.localStore,e).then(r=>Xr(n,r))}async function ij(t,e,n,r){const i=$(t),s=await function(a,u){const l=$(a),c=$(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",d=>c.Dn(d,u).next(h=>h?l.localDocuments.getDocuments(d,h):A.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await za(i.remoteStore):n==="acknowledged"||n==="rejected"?(Vw(i,e,r||null),Ow(i,e),function(a,u){$($(a).mutationQueue).Cn(u)}(i.localStore,e)):j(),await Xr(i,s)):N("SyncEngine","Cannot apply mutation batch with id: "+e)}async function sj(t,e){const n=$(t);if(Mw(n),Fw(n),e===!0&&n.pa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await MT(n,r.toArray());n.pa=!0,await By(n.remoteStore,!0);for(const s of i)dp(n.remoteStore,s)}else if(e===!1&&n.pa!==!1){const r=[];let i=Promise.resolve();n.Ea.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(_a(n,o),ya(n.localStore,o,!0))),jl(n.remoteStore,o)}),await i,await MT(n,r),function(o){const a=$(o);a.Ra.forEach((u,l)=>{jl(a.remoteStore,l)}),a.Va.Rr(),a.Ra=new Map,a.Aa=new Ee(M.comparator)}(n),n.pa=!1,await By(n.remoteStore,!1)}}async function MT(t,e,n){const r=$(t),i=[],s=[];for(const o of e){let a;const u=r.Ea.get(o);if(u&&u.length!==0){a=await ga(r.localStore,dn(u[0]));for(const l of u){const c=r.Ta.get(l),d=await nj(r,c);d.snapshot&&s.push(d.snapshot)}}else{const l=await ck(r.localStore,o);a=await ga(r.localStore,l),await Dw(r,Pk(l),o,!1,a.resumeToken)}i.push(a)}return r.Ia.n_(s),i}function Pk(t){return gC(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function oj(t){return function(n){return $($(n).persistence).Ni()}($(t).localStore)}async function aj(t,e,n,r){const i=$(t);if(i.pa)return void N("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ea.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await dk(i.localStore,vC(s[0])),a=wc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",at.EMPTY_BYTE_STRING);await Xr(i,o,a);break}case"rejected":await ya(i.localStore,e,!0),_a(i,e,r);break;default:j()}}async function uj(t,e,n){const r=Mw(t);if(r.pa){for(const i of e){if(r.Ea.has(i)){N("SyncEngine","Adding an already active target "+i);continue}const s=await ck(r.localStore,i),o=await ga(r.localStore,s);await Dw(r,Pk(s),o.targetId,!1,o.resumeToken),dp(r.remoteStore,o)}for(const i of n)r.Ea.has(i)&&await ya(r.localStore,i,!1).then(()=>{jl(r.remoteStore,i),_a(r,i)}).catch(Xi)}}function Mw(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ak.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Q4.bind(null,e),e.Ia.n_=$4.bind(null,e.eventManager),e.Ia.wa=U4.bind(null,e.eventManager),e}function Fw(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Y4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=X4.bind(null,e),e}function lj(t,e,n){const r=$(t);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(f,v){const y=$(f),w=Xe(v.createTime);return y.persistence.runTransaction("hasNewerBundle","readonly",m=>y.Qr.getBundleMetadata(m,v.id)).then(m=>!!m&&m.createTime.compareTo(w)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(Ek(u));const l=new B4(u,s.localStore,o.serializer);let c=await o.Sa();for(;c;){const h=await l.j_(c);h&&a._updateProgress(h),c=await o.Sa()}const d=await l.complete();return await Xr(s,d.Y_,void 0),await function(f,v){const y=$(f);return y.persistence.runTransaction("Save bundle","readwrite",w=>y.Qr.saveBundleMetadata(w,v))}(s.localStore,u),a._completeWith(d.progress),Promise.resolve(d.J_)}catch(u){return Yn("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class qy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ic(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ok(this.persistence,new sk,e.initialUser,this.serializer)}createPersistence(e){return new ik(cp.zr,this.serializer)}createSharedClientState(e){return new fk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ck extends qy{constructor(e,n,r){super(),this.ba=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ba.initialize(this,e),await Fw(this.ba.syncEngine),await za(this.ba.remoteStore),await this.persistence.Vi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return ok(this.persistence,new sk,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new JU(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new V$(n,this.persistence);return new O$(e.asyncQueue,r)}createPersistence(e){const n=Ew(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new ww(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,pk(),xd(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new fk}}class cj extends Ck{constructor(e,n){super(e,n,!1),this.ba=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.ba.syncEngine;this.sharedClientState instanceof Gm&&(this.sharedClientState.syncEngine={Gs:ij.bind(null,n),zs:aj.bind(null,n),js:uj.bind(null,n),Ni:oj.bind(null,n),Ws:rj.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Vi(async r=>{await sj(this.ba.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=pk();if(!Gm.v(n))throw new x(R.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Ew(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Gm(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class $w{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>LT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ej.bind(null,this.syncEngine),await By(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new F4}()}createDatastore(e){const n=Ic(e.databaseInfo.databaseId),r=function(s){return new I4(s)}(e.databaseInfo);return function(s,o,a,u){return new A4(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new P4(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>LT(this.syncEngine,n,0),function(){return NT.v()?new NT:new _4}())}createSyncEngine(e,n){return function(i,s,o,a,u,l,c){const d=new G4(i,s,o,a,u,l);return c&&(d.pa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=$(n);N("RemoteStore","RemoteStore shutting down."),r.p_.add(5),await Ba(r),r.w_.shutdown(),r.S_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Da(this.observer.next,e)}error(e){this.observer.error?this.Da(this.observer.error,e):He("Uncaught Error in snapshot listener:",e.toString())}va(){this.muted=!0}Da(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dj{constructor(e,n){this.Ca=e,this.serializer=n,this.metadata=new pt,this.buffer=new Uint8Array,this.Fa=function(){return new TextDecoder("utf-8")}(),this.Ma().then(r=>{r&&r.G_()?this.metadata.resolve(r.W_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.W_)}`))},r=>this.metadata.reject(r))}close(){return this.Ca.cancel()}async getMetadata(){return this.metadata.promise}async Sa(){return await this.getMetadata(),this.Ma()}async Ma(){const e=await this.xa();if(e===null)return null;const n=this.Fa.decode(e),r=Number(n);isNaN(r)&&this.Oa(`length string (${n}) is not valid number`);const i=await this.Na(r);return new j4(JSON.parse(i),e.length+r)}Ba(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async xa(){for(;this.Ba()<0&&!await this.La(););if(this.buffer.length===0)return null;const e=this.Ba();e<0&&this.Oa("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Na(e){for(;this.buffer.length<e;)await this.La()&&this.Oa("Reached the end of bundle when more is expected.");const n=this.Fa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Oa(e){throw this.Ca.cancel(),new Error(`Invalid bundle format: ${e}`)}async La(){const e=await this.Ca.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hj{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new x(R.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,s){const o=$(i),a=$l(o.serializer)+"/documents",u={documents:s.map(h=>Fl(o.serializer,h))},l=await o.po("BatchGetDocuments",a,u,s.length),c=new Map;l.forEach(h=>{const f=NU(o.serializer,h);c.set(f.key.toString(),f)});const d=[];return s.forEach(h=>{const f=c.get(h.toString());W(!!f),d.push(f)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ja(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=M.fromPath(r);this.mutations.push(new lw(i,this.precondition(i)))}),await async function(r,i){const s=$(r),o=$l(s.serializer)+"/documents",a={writes:i.map(u=>Ul(s.serializer,u))};await s.Ro("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw j();n=G.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new x(R.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(G.min())?be.exists(!1):be.updateTime(n):be.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(G.min()))throw new x(R.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return be.updateTime(n)}return be.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fj{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.ka=r.maxAttempts,this.Qo=new Sw(this.asyncQueue,"transaction_retry")}run(){this.ka-=1,this.qa()}qa(){this.Qo.Mo(async()=>{const e=new hj(this.datastore),n=this.Qa(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ka(i)}))}).catch(r=>{this.Ka(r)})})}Qa(e){try{const n=this.updateFunction(e);return!mc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Ka(e){this.ka>0&&this.$a(e)?(this.ka-=1,this.asyncQueue.enqueueAndForget(()=>(this.qa(),Promise.resolve()))):this.deferred.reject(e)}$a(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!NC(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pj{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=KP.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{N("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(N("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ga(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nd(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ak(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Uw(t);N("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>DT(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>DT(e.remoteStore,s)),t._onlineComponents=e}function kk(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Uw(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!kk(n))throw n;Yn("Error using user provided cache. Falling back to memory cache: "+n),await Nd(t,new qy)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await Nd(t,new qy);return t._offlineComponents}async function fp(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await Gy(t,t._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await Gy(t,new $w))),t._onlineComponents}function bk(t){return Uw(t).then(e=>e.persistence)}function jw(t){return Uw(t).then(e=>e.localStore)}function xk(t){return fp(t).then(e=>e.remoteStore)}function Bw(t){return fp(t).then(e=>e.syncEngine)}function mj(t){return fp(t).then(e=>e.datastore)}async function wa(t){const e=await fp(t),n=e.eventManager;return n.onListen=W4.bind(null,e.syncEngine),n.onUnlisten=K4.bind(null,e.syncEngine),n}function gj(t){return t.asyncQueue.enqueue(async()=>{const e=await bk(t),n=await xk(t);return e.setNetworkEnabled(!0),function(i){const s=$(i);return s.p_.delete(0),Tc(s)}(n)})}function yj(t){return t.asyncQueue.enqueue(async()=>{const e=await bk(t),n=await xk(t);return e.setNetworkEnabled(!1),async function(i){const s=$(i);s.p_.add(0),await Ba(s),s.S_.set("Offline")}(n)})}function vj(t,e){const n=new pt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(l,c){const d=$(l);return d.persistence.runTransaction("read document","readonly",h=>d.localDocuments.getDocument(h,c))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new x(R.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=Ga(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await jw(t),e,n)),n.promise}function Nk(t,e,n={}){const r=new pt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,l){const c=new hp({next:h=>{o.enqueueAndForget(()=>bw(s,d));const f=h.docs.has(a);!f&&h.fromCache?l.reject(new x(R.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&u&&u.source==="server"?l.reject(new x(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),d=new Nw($a(a.path),c,{includeMetadataChanges:!0,U_:!0});return kw(s,d)}(await wa(t),t.asyncQueue,e,n,r)),r.promise}function _j(t,e){const n=new pt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await jh(i,s,!0),u=new Sk(s,a.ss),l=u.ia(a.documents),c=u.applyChanges(l,!1);o.resolve(c.snapshot)}catch(a){const u=Ga(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await jw(t),e,n)),n.promise}function Dk(t,e,n={}){const r=new pt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,l){const c=new hp({next:h=>{o.enqueueAndForget(()=>bw(s,d)),h.fromCache&&u.source==="server"?l.reject(new x(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),d=new Nw(a,c,{includeMetadataChanges:!0,U_:!0});return kw(s,d)}(await wa(t),t.asyncQueue,e,n,r)),r.promise}function wj(t,e){const n=new hp(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){$(i).x_.add(s),s.next()}(await wa(t),n)),()=>{n.va(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){$(i).x_.delete(s)}(await wa(t),n))}}function Ej(t,e,n,r){const i=function(o,a){let u;return u=typeof o=="string"?OC().encode(o):o,function(c,d){return new dj(c,d)}(function(c,d){if(c instanceof Uint8Array)return FT(c,d);if(c instanceof ArrayBuffer)return FT(new Uint8Array(c),d);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(n,Ic(e));t.asyncQueue.enqueueAndForget(async()=>{lj(await Bw(t),i,r)})}function Ij(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=$(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Qr.getNamedQuery(o,i))}(await jw(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(t,e,n){if(!n)throw new x(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Vk(t,e,n,r){if(e===!0&&r===!0)throw new x(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function UT(t){if(!M.isDocumentKey(t))throw new x(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jT(t){if(M.isDocumentKey(t))throw new x(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function ce(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pp(t);throw new x(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Lk(t,e){if(e<=0)throw new x(R.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Vk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ok((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new BT({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new BT(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new I$;switch(r.type){case"firstParty":return new R$(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$T.get(n);r&&(N("ComponentProvider","Removing Datastore"),$T.delete(n),r.terminate())}(this),Promise.resolve()}}function Tj(t,e,n,r={}){var i;const s=(t=ce(t,Sc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Yn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=dt.MOCK_USER;else{a=MM(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new x(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new dt(l)}t._authCredentials=new T$(new WP(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qt=class Mk{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mk(this.firestore,e,this._query)}},Le=class Fk{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fk(this.firestore,e,this._key)}},Ci=class $k extends Qt{constructor(e,n,r){super(e,n,$a(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new M(e))}withConverter(e){return new $k(this.firestore,e,this._path)}};function Uk(t,e,...n){if(t=X(t),zw("collection","path",e),t instanceof Sc){const r=ue.fromString(e,...n);return jT(r),new Ci(t,null,r)}{if(!(t instanceof Le||t instanceof Ci))throw new x(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return jT(r),new Ci(t.firestore,null,r)}}function Sj(t,e){if(t=ce(t,Sc),zw("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new x(R.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Qt(t,null,function(r){return new Qr(ue.emptyPath(),r)}(e))}function Gh(t,e,...n){if(t=X(t),arguments.length===1&&(e=KP.V()),zw("doc","path",e),t instanceof Sc){const r=ue.fromString(e,...n);return UT(r),new Le(t,null,new M(r))}{if(!(t instanceof Le||t instanceof Ci))throw new x(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return UT(r),new Le(t.firestore,t instanceof Ci?t.converter:null,new M(r))}}function jk(t,e){return t=X(t),e=X(e),(t instanceof Le||t instanceof Ci)&&(e instanceof Le||e instanceof Ci)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Bk(t,e){return t=X(t),e=X(e),t instanceof Qt&&e instanceof Qt&&t.firestore===e.firestore&&yc(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aj{constructor(){this.Ua=Promise.resolve(),this.Wa=[],this.Ga=!1,this.za=[],this.ja=null,this.Ha=!1,this.Ja=!1,this.Ya=[],this.Qo=new Sw(this,"async_queue_retry"),this.Za=()=>{const n=xd();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Qo.Oo()};const e=xd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Za)}get isShuttingDown(){return this.Ga}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xa(),this.eu(e)}enterRestrictedMode(e){if(!this.Ga){this.Ga=!0,this.Ja=e||!1;const n=xd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Za)}}enqueue(e){if(this.Xa(),this.Ga)return new Promise(()=>{});const n=new pt;return this.eu(()=>this.Ga&&this.Ja?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Wa.push(e),this.tu()))}async tu(){if(this.Wa.length!==0){try{await this.Wa[0](),this.Wa.shift(),this.Qo.reset()}catch(e){if(!Ji(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Wa.length>0&&this.Qo.Mo(()=>this.tu())}}eu(e){const n=this.Ua.then(()=>(this.Ha=!0,e().catch(r=>{this.ja=r,this.Ha=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw He("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ha=!1,r))));return this.Ua=n,n}enqueueAfterDelay(e,n,r){this.Xa(),this.Ya.indexOf(e)>-1&&(n=0);const i=Cw.createAndSchedule(this,e,n,r,s=>this.nu(s));return this.za.push(i),i}Xa(){this.ja&&j()}verifyOperationInProgress(){}async ru(){let e;do e=this.Ua,await e;while(e!==this.Ua)}iu(e){for(const n of this.za)if(n.timerId===e)return!0;return!1}su(e){return this.ru().then(()=>{this.za.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.za)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ru()})}ou(e){this.Ya.push(e)}nu(e){const n=this.za.indexOf(e);this.za.splice(n,1)}}function Wy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Rj{constructor(){this._progressObserver={},this._taskCompletionResolver=new pt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pj=-1;let qe=class extends Sc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Aj}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zk(this),this._firestoreClient.terminate()}};function _t(t){return t._firestoreClient||zk(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zk(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,l,c){return new nU(a,u,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Ok(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new pj(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function Cj(t,e){Gk(t=ce(t,qe));const n=_t(t);if(n._uninitializedComponentsProvider)throw new x(R.FAILED_PRECONDITION,"SDK cache is already specified.");Yn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new $w;return qk(n,i,new Ck(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function kj(t){Gk(t=ce(t,qe));const e=_t(t);if(e._uninitializedComponentsProvider)throw new x(R.FAILED_PRECONDITION,"SDK cache is already specified.");Yn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new $w;return qk(e,r,new cj(r,n.cacheSizeBytes))}function qk(t,e,n){const r=new pt;return t.asyncQueue.enqueue(async()=>{try{await Nd(t,n),await Gy(t,e),r.resolve()}catch(i){const s=i;if(!kk(s))throw s;Yn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function bj(t){if(t._initialized&&!t._terminated)throw new x(R.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new pt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!qn.v())return Promise.resolve();const i=r+"main";await qn.delete(i)}(Ew(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function xj(t){return function(n){const r=new pt;return n.asyncQueue.enqueueAndForget(async()=>J4(await Bw(n),r)),r.promise}(_t(t=ce(t,qe)))}function Nj(t){return gj(_t(t=ce(t,qe)))}function Dj(t){return yj(_t(t=ce(t,qe)))}function Oj(t,e){const n=_t(t=ce(t,qe)),r=new Rj;return Ej(n,t._databaseId,e,r),r}function Vj(t,e){return Ij(_t(t=ce(t,qe)),e).then(n=>n?new Qt(t,null,n.query):null)}function Gk(t){if(t._initialized||t._terminated)throw new x(R.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Er(at.fromBase64String(e))}catch(n){throw new x(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Er(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lj=/^__.*__$/;class Mj{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ua(e,this.data,n,this.fieldTransforms)}}class Wk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Yr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Kk(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class gp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this._u(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get au(){return this.settings.au}uu(e){return new gp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.uu({path:r,lu:!1});return i.hu(e),i}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.uu({path:r,lu:!1});return i._u(),i}Iu(e){return this.uu({path:void 0,lu:!0})}Tu(e){return Wh(e,this.settings.methodName,this.settings.Eu||!1,this.path,this.settings.du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}_u(){if(this.path)for(let e=0;e<this.path.length;e++)this.hu(this.path.get(e))}hu(e){if(e.length===0)throw this.Tu("Document fields must not be empty");if(Kk(this.au)&&Lj.test(e))throw this.Tu('Document fields cannot begin and end with "__"')}}class Fj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ic(e)}Au(e,n,r,i=!1){return new gp({au:e,methodName:n,du:r,path:Qe.emptyPath(),lu:!1,Eu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ao(t){const e=t._freezeSettings(),n=Ic(t._databaseId);return new Fj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yp(t,e,n,r,i,s={}){const o=t.Au(s.merge||s.mergeFields?2:0,e,n,i);Kw("Data must be an object, but it was:",o,r);const a=Yk(r,o);let u,l;if(s.merge)u=new sn(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=Ky(e,d,n);if(!o.contains(h))throw new x(R.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);Jk(c,h)||c.push(h)}u=new sn(c),l=o.fieldTransforms.filter(d=>u.covers(d.field))}else u=null,l=o.fieldTransforms;return new Mj(new At(a),u,l)}class Ac extends oo{_toFieldTransform(e){if(e.au!==2)throw e.au===1?e.Tu(`${this._methodName}() can only appear at the top level of your update data`):e.Tu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ac}}function Hk(t,e,n){return new gp({au:3,du:e.settings.du,methodName:t._methodName,lu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class qw extends oo{_toFieldTransform(e){return new _c(e.path,new fa)}isEqual(e){return e instanceof qw}}class $j extends oo{constructor(e,n){super(e),this.Ru=n}_toFieldTransform(e){const n=Hk(this,e,!0),r=this.Ru.map(s=>uo(s,n)),i=new Gs(r);return new _c(e.path,i)}isEqual(e){return this===e}}class Uj extends oo{constructor(e,n){super(e),this.Ru=n}_toFieldTransform(e){const n=Hk(this,e,!0),r=this.Ru.map(s=>uo(s,n)),i=new Ws(r);return new _c(e.path,i)}isEqual(e){return this===e}}class jj extends oo{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=new pa(e.serializer,AC(e.serializer,this.Vu));return new _c(e.path,n)}isEqual(e){return this===e}}function Gw(t,e,n,r){const i=t.Au(1,e,n);Kw("Data must be an object, but it was:",i,r);const s=[],o=At.empty();so(r,(u,l)=>{const c=Hw(e,u,n);l=X(l);const d=i.Pu(c);if(l instanceof Ac)s.push(c);else{const h=uo(l,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new sn(s);return new Wk(o,a,i.fieldTransforms)}function Ww(t,e,n,r,i,s){const o=t.Au(1,e,n),a=[Ky(e,r,n)],u=[i];if(s.length%2!=0)throw new x(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Ky(e,s[h])),u.push(s[h+1]);const l=[],c=At.empty();for(let h=a.length-1;h>=0;--h)if(!Jk(l,a[h])){const f=a[h];let v=u[h];v=X(v);const y=o.Pu(f);if(v instanceof Ac)l.push(f);else{const w=uo(v,y);w!=null&&(l.push(f),c.set(f,w))}}const d=new sn(l);return new Wk(c,d,o.fieldTransforms)}function Qk(t,e,n,r=!1){return uo(n,t.Au(r?4:3,e))}function uo(t,e){if(Xk(t=X(t)))return Kw("Unsupported field value:",e,t),Yk(t,e);if(t instanceof oo)return function(r,i){if(!Kk(i.au))throw i.Tu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Tu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.lu&&e.au!==4)throw e.Tu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=uo(a,i.Iu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=X(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return AC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=xe.fromDate(r);return{timestampValue:ma(i.serializer,s)}}if(r instanceof xe){const s=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ma(i.serializer,s)}}if(r instanceof mp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Er)return{bytesValue:MC(i.serializer,r._byteString)};if(r instanceof Le){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Tu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:mw(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Tu(`Unsupported field value: ${pp(r)}`)}(t,e)}function Yk(t,e){const n={};return sC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):so(t,(r,i)=>{const s=uo(i,e.cu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Xk(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof mp||t instanceof Er||t instanceof Le||t instanceof oo)}function Kw(t,e,n){if(!Xk(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=pp(n);throw r==="an object"?e.Tu(t+" a custom object"):e.Tu(t+" "+r)}}function Ky(t,e,n){if((e=X(e))instanceof Bi)return e._internalPath;if(typeof e=="string")return Hw(t,e);throw Wh("Field path arguments must be of type string or ",t,!1,void 0,n)}const Bj=new RegExp("[~\\*/\\[\\]]");function Hw(t,e,n){if(e.search(Bj)>=0)throw Wh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bi(...e.split("."))._internalPath}catch{throw Wh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new x(R.INVALID_ARGUMENT,a+t+u)}function Jk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zj extends Bl{data(){return super.data()}}function vp(t,e){return typeof e=="string"?Hw(t,e):e instanceof Bi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qw{}class Rc extends Qw{}function ri(t,e,...n){let r=[];e instanceof Qw&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Yw).length,a=s.filter(u=>u instanceof _p).length;if(o>1||o>0&&a>0)throw new x(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class _p extends Rc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _p(e,n,r)}_apply(e){const n=this._parse(e);return tb(e._query,n),new Qt(e.firestore,e.converter,Dy(e._query,n))}_parse(e){const n=ao(e.firestore);return function(s,o,a,u,l,c,d){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new x(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){qT(d,c);const f=[];for(const v of d)f.push(zT(u,s,v));h={arrayValue:{values:f}}}else h=zT(u,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||qT(d,c),h=Qk(a,o,d,c==="in"||c==="not-in");return ie.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function qj(t,e,n){const r=e,i=vp("where",t);return _p._create(i,r,n)}class Yw extends Qw{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Yw(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:fe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)tb(o,u),o=Dy(o,u)}(e._query,n),new Qt(e.firestore,e.converter,Dy(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xw extends Rc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Xw(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new x(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new x(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Ko(s,o);return function(l,c){if(ow(l)===null){const d=sp(l);d!==null&&nb(l,d,c.field)}}(i,a),a}(e._query,this._field,this._direction);return new Qt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Qr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Gj(t,e="asc"){const n=e,r=vp("orderBy",t);return Xw._create(r,n)}class wp extends Rc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new wp(e,n,r)}_apply(e){return new Qt(e.firestore,e.converter,Mh(e._query,this._limit,this._limitType))}}function Wj(t){return Lk("limit",t),wp._create("limit",t,"F")}function Kj(t){return Lk("limitToLast",t),wp._create("limitToLast",t,"L")}class Ep extends Rc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Ep(e,n,r)}_apply(e){const n=eb(e,this.type,this._docOrFields,this._inclusive);return new Qt(e.firestore,e.converter,function(i,s){return new Qr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function Hj(...t){return Ep._create("startAt",t,!0)}function Qj(...t){return Ep._create("startAfter",t,!1)}class Ip extends Rc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Ip(e,n,r)}_apply(e){const n=eb(e,this.type,this._docOrFields,this._inclusive);return new Qt(e.firestore,e.converter,function(i,s){return new Qr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function Yj(...t){return Ip._create("endBefore",t,!1)}function Xj(...t){return Ip._create("endAt",t,!0)}function eb(t,e,n,r){if(n[0]=X(n[0]),n[0]instanceof Bl)return function(s,o,a,u,l){if(!u)throw new x(R.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const d of bs(s))if(d.field.isKeyField())c.push(zs(o,u.key));else{const h=u.data.field(d.field);if(ip(h))throw new x(R.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=d.field.canonicalString();throw new x(R.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}c.push(h)}return new Ui(c,l)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ao(t.firestore);return function(o,a,u,l,c,d){const h=o.explicitOrderBy;if(c.length>h.length)throw new x(R.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let v=0;v<c.length;v++){const y=c[v];if(h[v].field.isKeyField()){if(typeof y!="string")throw new x(R.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof y}`);if(!aw(o)&&y.indexOf("/")!==-1)throw new x(R.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${y}' contains a slash.`);const w=o.path.child(ue.fromString(y));if(!M.isDocumentKey(w))throw new x(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const m=new M(w);f.push(zs(a,m))}else{const w=Qk(u,l,y);f.push(w)}}return new Ui(f,d)}(t._query,t.firestore._databaseId,i,e,n,r)}}function zT(t,e,n){if(typeof(n=X(n))=="string"){if(n==="")throw new x(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!aw(e)&&n.indexOf("/")!==-1)throw new x(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!M.isDocumentKey(r))throw new x(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zs(t,new M(r))}if(n instanceof Le)return zs(t,n._key);throw new x(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pp(n)}.`)}function qT(t,e){if(!Array.isArray(t)||t.length===0)throw new x(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tb(t,e){if(e.isInequality()){const r=sp(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new x(R.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=ow(t);s!==null&&nb(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function nb(t,e,n){if(!n.isEqual(e))throw new x(R.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Jw{convertValue(e,n="none"){switch(Bs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw j()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return so(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new mp(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=iw(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vl(e));default:return null}}convertTimestamp(e){const n=Li(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);W(KC(r));const i=new Fi(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||He(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Jj extends Jw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Er(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let qr=class extends Bl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},Yu=class extends qr{data(e={}){return super.data(e)}},zi=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Is(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Yu(this._firestore,this._userDataWriter,r.key,r,new Is(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Yu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Is(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Yu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Is(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:Zj(a.type),doc:u,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function Zj(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}function rb(t,e){return t instanceof qr&&e instanceof qr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof zi&&e instanceof zi&&t._firestore===e._firestore&&Bk(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eB(t){t=ce(t,Le);const e=ce(t.firestore,qe);return Nk(_t(e),t._key).then(n=>Zw(e,t,n))}class lo extends Jw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Er(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function tB(t){t=ce(t,Le);const e=ce(t.firestore,qe),n=_t(e),r=new lo(e);return vj(n,t._key).then(i=>new qr(e,r,t._key,i,new Is(i!==null&&i.hasLocalMutations,!0),t.converter))}function nB(t){t=ce(t,Le);const e=ce(t.firestore,qe);return Nk(_t(e),t._key,{source:"server"}).then(n=>Zw(e,t,n))}function rB(t){t=ce(t,Qt);const e=ce(t.firestore,qe),n=_t(e),r=new lo(e);return Zk(t._query),Dk(n,t._query).then(i=>new zi(e,r,t,i))}function iB(t){t=ce(t,Qt);const e=ce(t.firestore,qe),n=_t(e),r=new lo(e);return _j(n,t._query).then(i=>new zi(e,r,t,i))}function sB(t){t=ce(t,Qt);const e=ce(t.firestore,qe),n=_t(e),r=new lo(e);return Dk(n,t._query,{source:"server"}).then(i=>new zi(e,r,t,i))}function GT(t,e,n){t=ce(t,Le);const r=ce(t.firestore,qe),i=Tp(t.converter,e,n);return Pc(r,[yp(ao(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,be.none())])}function WT(t,e,n,...r){t=ce(t,Le);const i=ce(t.firestore,qe),s=ao(i);let o;return o=typeof(e=X(e))=="string"||e instanceof Bi?Ww(s,"updateDoc",t._key,e,n,r):Gw(s,"updateDoc",t._key,e),Pc(i,[o.toMutation(t._key,be.exists(!0))])}function oB(t){return Pc(ce(t.firestore,qe),[new ja(t._key,be.none())])}function aB(t,e){const n=ce(t.firestore,qe),r=Gh(t),i=Tp(t.converter,e);return Pc(n,[yp(ao(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,be.exists(!1))]).then(()=>r)}function ib(t,...e){var n,r,i;t=X(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Wy(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Wy(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let u,l,c;if(t instanceof Le)l=ce(t.firestore,qe),c=$a(t._key.path),u={next:d=>{e[o]&&e[o](Zw(l,t,d))},error:e[o+1],complete:e[o+2]};else{const d=ce(t,Qt);l=ce(d.firestore,qe),c=d._query;const h=new lo(l);u={next:f=>{e[o]&&e[o](new zi(l,h,d,f))},error:e[o+1],complete:e[o+2]},Zk(t._query)}return function(h,f,v,y){const w=new hp(y),m=new Nw(f,w,v);return h.asyncQueue.enqueueAndForget(async()=>kw(await wa(h),m)),()=>{w.va(),h.asyncQueue.enqueueAndForget(async()=>bw(await wa(h),m))}}(_t(l),c,a,u)}function uB(t,e){return wj(_t(t=ce(t,qe)),Wy(e)?e:{next:e})}function Pc(t,e){return function(r,i){const s=new pt;return r.asyncQueue.enqueueAndForget(async()=>H4(await Bw(r),i,s)),s.promise}(_t(t),e)}function Zw(t,e,n){const r=n.docs.get(e._key),i=new lo(t);return new qr(t,i,e._key,r,new Is(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lB={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cB=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ao(e)}set(e,n,r){this._verifyNotCommitted();const i=di(e,this._firestore),s=Tp(i.converter,n,r),o=yp(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,be.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=di(e,this._firestore);let o;return o=typeof(n=X(n))=="string"||n instanceof Bi?Ww(this._dataReader,"WriteBatch.update",s._key,n,r,i):Gw(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,be.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=di(e,this._firestore);return this._mutations=this._mutations.concat(new ja(n._key,be.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(R.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function di(t,e){if((t=X(t)).firestore!==e)throw new x(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dB=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=ao(n)}get(n){const r=di(n,this._firestore),i=new Jj(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return j();const o=s[0];if(o.isFoundDocument())return new Bl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Bl(this._firestore,i,r._key,null,r.converter);throw j()})}set(n,r,i){const s=di(n,this._firestore),o=Tp(s.converter,r,i),a=yp(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=di(n,this._firestore);let a;return a=typeof(r=X(r))=="string"||r instanceof Bi?Ww(this._dataReader,"Transaction.update",o._key,r,i,s):Gw(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=di(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=di(e,this._firestore),r=new lo(this._firestore);return super.get(e).then(i=>new qr(this._firestore,r,n._key,i._document,new Is(!1,!1),n.converter))}};function hB(t,e,n){t=ce(t,qe);const r=Object.assign(Object.assign({},lB),n);return function(s){if(s.maxAttempts<1)throw new x(R.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new pt;return s.asyncQueue.enqueueAndForget(async()=>{const l=await mj(s);new fj(s.asyncQueue,l,a,o,u).run()}),u.promise}(_t(t),i=>e(new dB(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fB(){return new Ac("deleteField")}function pB(){return new qw("serverTimestamp")}function mB(...t){return new $j("arrayUnion",t)}function gB(...t){return new Uj("arrayRemove",t)}function yB(t){return new jj("increment",t)}(function(e,n=!0){(function(i){Fa=i})(Hi),Oi(new _r("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new qe(new S$(r.getProvider("auth-internal")),new C$(r.getProvider("app-check-internal")),function(l,c){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new x(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fi(l.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),yr(j0,"4.0.0",e),yr(j0,"4.0.0","esm2017")})();const vB="@firebase/firestore-compat",_B="0.3.13";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new x("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(){if(typeof Uint8Array>"u")throw new x("unimplemented","Uint8Arrays are not available in this environment.")}function HT(){if(!eU())throw new x("unimplemented","Blobs are unavailable in Firestore in this environment.")}class zl{constructor(e){this._delegate=e}static fromBase64String(e){return HT(),new zl(Er.fromBase64String(e))}static fromUint8Array(e){return KT(),new zl(Er.fromUint8Array(e))}toBase64(){return HT(),this._delegate.toBase64()}toUint8Array(){return KT(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t){return wB(t,["next","error","complete"])}function wB(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EB{enableIndexedDbPersistence(e,n){return Cj(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return kj(e._delegate)}clearIndexedDbPersistence(e){return bj(e._delegate)}}class sb{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Fi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Yn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){Tj(this._delegate,e,n,r)}enableNetwork(){return Nj(this._delegate)}disableNetwork(){return Dj(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Vk("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return xj(this._delegate)}onSnapshotsInSync(e){return uB(this._delegate,e)}get app(){if(!this._appCompat)throw new x("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ea(this,Uk(this._delegate,e))}catch(n){throw zt(n,"collection()","Firestore.collection()")}}doc(e){try{return new xn(this,Gh(this._delegate,e))}catch(n){throw zt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Bt(this,Sj(this._delegate,e))}catch(n){throw zt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return hB(this._delegate,n=>e(new ob(this,n)))}batch(){return _t(this._delegate),new ab(new cB(this._delegate,e=>Pc(this._delegate,e)))}loadBundle(e){return Oj(this._delegate,e)}namedQuery(e){return Vj(this._delegate,e).then(n=>n?new Bt(this,n):null)}}class Sp extends Jw{constructor(e){super(),this.firestore=e}convertBytes(e){return new zl(new Er(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return xn.forKey(n,this.firestore,null)}}function IB(t){w$(t)}class ob{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Sp(e)}get(e){const n=Ts(e);return this._delegate.get(n).then(r=>new ql(this._firestore,new qr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Ts(e);return r?(eE("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ts(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ts(e);return this._delegate.delete(n),this}}class ab{constructor(e){this._delegate=e}set(e,n,r){const i=Ts(e);return r?(eE("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ts(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ts(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Ys{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Yu(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Gl(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Ys.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Ys(e,new Sp(e),n),i.set(n,s)),s}}Ys.INSTANCES=new WeakMap;class xn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Sp(e)}static forPath(e,n,r){if(e.length%2!==0)throw new x("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new xn(n,new Le(n._delegate,r,new M(e)))}static forKey(e,n,r){return new xn(n,new Le(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Ea(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ea(this.firestore,Uk(this._delegate,e))}catch(n){throw zt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=X(e),e instanceof Le?jk(this._delegate,e):!1}set(e,n){n=eE("DocumentReference.set",n);try{return n?GT(this._delegate,e,n):GT(this._delegate,e)}catch(r){throw zt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?WT(this._delegate,e):WT(this._delegate,e,n,...r)}catch(i){throw zt(i,"updateDoc()","DocumentReference.update()")}}delete(){return oB(this._delegate)}onSnapshot(...e){const n=ub(e),r=lb(e,i=>new ql(this.firestore,new qr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return ib(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=tB(this._delegate):(e==null?void 0:e.source)==="server"?n=nB(this._delegate):n=eB(this._delegate),n.then(r=>new ql(this.firestore,new qr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new xn(this.firestore,e?this._delegate.withConverter(Ys.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function zt(t,e,n){return t.message=t.message.replace(e,n),t}function ub(t){for(const e of t)if(typeof e=="object"&&!Hy(e))return e;return{}}function lb(t,e){var n,r;let i;return Hy(t[0])?i=t[0]:Hy(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class ql{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new xn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return rb(this._delegate,e._delegate)}}class Gl extends ql{data(e){const n=this._delegate.data(e);return E$(n!==void 0),n}}class Bt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Sp(e)}where(e,n,r){try{return new Bt(this.firestore,ri(this._delegate,qj(e,n,r)))}catch(i){throw zt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Bt(this.firestore,ri(this._delegate,Gj(e,n)))}catch(r){throw zt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Bt(this.firestore,ri(this._delegate,Wj(e)))}catch(n){throw zt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Bt(this.firestore,ri(this._delegate,Kj(e)))}catch(n){throw zt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Bt(this.firestore,ri(this._delegate,Hj(...e)))}catch(n){throw zt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Bt(this.firestore,ri(this._delegate,Qj(...e)))}catch(n){throw zt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Bt(this.firestore,ri(this._delegate,Yj(...e)))}catch(n){throw zt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Bt(this.firestore,ri(this._delegate,Xj(...e)))}catch(n){throw zt(n,"endAt()","Query.endAt()")}}isEqual(e){return Bk(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=iB(this._delegate):(e==null?void 0:e.source)==="server"?n=sB(this._delegate):n=rB(this._delegate),n.then(r=>new Qy(this.firestore,new zi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=ub(e),r=lb(e,i=>new Qy(this.firestore,new zi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return ib(this._delegate,n,r)}withConverter(e){return new Bt(this.firestore,e?this._delegate.withConverter(Ys.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class TB{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Gl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Qy{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Bt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Gl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new TB(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Gl(this._firestore,r))})}isEqual(e){return rb(this._delegate,e._delegate)}}class Ea extends Bt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new xn(this.firestore,e):null}doc(e){try{return e===void 0?new xn(this.firestore,Gh(this._delegate)):new xn(this.firestore,Gh(this._delegate,e))}catch(n){throw zt(n,"doc()","CollectionReference.doc()")}}add(e){return aB(this._delegate,e).then(n=>new xn(this.firestore,n))}isEqual(e){return jk(this._delegate,e._delegate)}withConverter(e){return new Ea(this.firestore,e?this._delegate.withConverter(Ys.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ts(t){return ce(t,Le)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(...e){this._delegate=new Bi(...e)}static documentId(){return new tE(Qe.keyField().canonicalString())}isEqual(e){return e=X(e),e instanceof Bi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this._delegate=e}static serverTimestamp(){const e=pB();return e._methodName="FieldValue.serverTimestamp",new ps(e)}static delete(){const e=fB();return e._methodName="FieldValue.delete",new ps(e)}static arrayUnion(...e){const n=mB(...e);return n._methodName="FieldValue.arrayUnion",new ps(n)}static arrayRemove(...e){const n=gB(...e);return n._methodName="FieldValue.arrayRemove",new ps(n)}static increment(e){const n=yB(e);return n._methodName="FieldValue.increment",new ps(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SB={Firestore:sb,GeoPoint:mp,Timestamp:xe,Blob:zl,Transaction:ob,WriteBatch:ab,DocumentReference:xn,DocumentSnapshot:ql,Query:Bt,QueryDocumentSnapshot:Gl,QuerySnapshot:Qy,CollectionReference:Ea,FieldPath:tE,FieldValue:ps,setLogLevel:IB,CACHE_SIZE_UNLIMITED:Pj};function AB(t,e){t.INTERNAL.registerComponent(new _r("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},SB)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RB(t){AB(t,(e,n)=>new sb(e,n,new EB)),t.registerVersion(vB,_B)}RB(Hr);var an=function(){return an=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},an.apply(this,arguments)};function nE(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Kh(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}const vu={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},yo={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PB(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend."}}function cb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CB=PB,kB=cb,db=new ro("auth","Firebase",cb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=new jf("@firebase/auth");function bB(t,...e){Hh.logLevel<=ae.WARN&&Hh.warn(`Auth (${Hi}): ${t}`,...e)}function Dd(t,...e){Hh.logLevel<=ae.ERROR&&Hh.error(`Auth (${Hi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw rE(t,...e)}function Ct(t,...e){return rE(t,...e)}function hb(t,e,n){const r=Object.assign(Object.assign({},kB()),{[e]:n});return new ro("auth","Firebase",r).create(e,{appName:t.name})}function Wa(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&bt(t,"argument-error"),hb(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function rE(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return db.create(t,...e)}function V(t,e,...n){if(!t)throw rE(e,...n)}function pr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Dd(e),new Error(e)}function Xn(t,e){t||pr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iE(){return QT()==="http:"||QT()==="https:"}function QT(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xB(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iE()||bR()||"connection"in navigator)?navigator.onLine:!0}function NB(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xn(n>e,"Short delay should be less than long delay!"),this.isMobile=FM()||k_()}get(){return xB()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t,e){Xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DB={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OB=new Cc(3e4,6e4);function rt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ut(t,e,n,r,i={}){return pb(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Va(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),fb.fetch()(mb(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function pb(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},DB),e);try{const i=new VB(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Du(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Du(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Du(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Du(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw hb(t,c,l);bt(t,c)}}catch(i){if(i instanceof Kt)throw i;bt(t,"network-request-failed",{message:String(i)})}}async function Jr(t,e,n,r,i={}){const s=await ut(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function mb(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?sE(t.config,i):`${t.config.apiScheme}://${i}`}class VB{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ct(this.auth,"network-request-failed")),OB.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Du(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ct(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LB(t,e){return ut(t,"POST","/v1/accounts:delete",e)}async function MB(t,e){return ut(t,"POST","/v1/accounts:update",e)}async function FB(t,e){return ut(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $B(t,e=!1){const n=X(t),r=await n.getIdToken(e),i=Ap(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xu(Km(i.auth_time)),issuedAtTime:Xu(Km(i.iat)),expirationTime:Xu(Km(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Km(t){return Number(t)*1e3}function Ap(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Dd("JWT malformed, contained fewer than 3 sections"),null;try{const i=CR(n);return i?JSON.parse(i):(Dd("Failed to decode base64 JWT payload"),null)}catch(i){return Dd("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function UB(t){const e=Ap(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Kt&&jB(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jB({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BB{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xu(this.lastLoginAt),this.creationTime=Xu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Gr(t,FB(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?GB(s.providerUserInfo):[],a=qB(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gb(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function zB(t){const e=X(t);await Kl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qB(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function GB(t){return t.map(e=>{var{providerId:n}=e,r=nE(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WB(t,e){const n=await pb(t,{},async()=>{const r=Va({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=mb(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fb.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):UB(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await WB(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Hl;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hl,this.toJSON())}_performRefresh(){return pr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xs{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=nE(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BB(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gb(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Gr(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $B(this,e)}reload(){return zB(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Kl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gr(this,LB(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,m=(l=n.createdAt)!==null&&l!==void 0?l:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:_,isAnonymous:I,providerData:S,stsTokenManager:C}=n;V(g&&C,e,"internal-error");const L=Hl.fromJSON(this.name,C);V(typeof g=="string",e,"internal-error"),ii(d,e.name),ii(h,e.name),V(typeof _=="boolean",e,"internal-error"),V(typeof I=="boolean",e,"internal-error"),ii(f,e.name),ii(v,e.name),ii(y,e.name),ii(w,e.name),ii(m,e.name),ii(p,e.name);const J=new xs({uid:g,auth:e,email:h,emailVerified:_,displayName:d,isAnonymous:I,photoURL:v,phoneNumber:f,tenantId:y,stsTokenManager:L,createdAt:m,lastLoginAt:p});return S&&Array.isArray(S)&&(J.providerData=S.map(z=>Object.assign({},z))),w&&(J._redirectEventId=w),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new Hl;i.updateFromServerResponse(n);const s=new xs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Kl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=new Map;function yn(t){Xn(t instanceof Function,"Expected a class definition");let e=YT.get(t);return e?(Xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,YT.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yb.type="NONE";const Ia=yb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t,e,n){return`firebase:${t}:${e}:${n}`}class Qo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ns(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ns("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qo(yn(Ia),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||yn(Ia);const o=Ns(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const d=xs._fromJSON(e,c);l!==s&&(a=d),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Qo(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Qo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Eb(e))return"Blackberry";if(Ib(e))return"Webos";if(oE(e))return"Safari";if((e.includes("chrome/")||_b(e))&&!e.includes("edge/"))return"Chrome";if(kc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vb(t=Fe()){return/firefox\//i.test(t)}function oE(t=Fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _b(t=Fe()){return/crios\//i.test(t)}function wb(t=Fe()){return/iemobile/i.test(t)}function kc(t=Fe()){return/android/i.test(t)}function Eb(t=Fe()){return/blackberry/i.test(t)}function Ib(t=Fe()){return/webos/i.test(t)}function Ka(t=Fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KB(t=Fe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function HB(t=Fe()){var e;return Ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QB(){return xR()&&document.documentMode===10}function Tb(t=Fe()){return Ka(t)||kc(t)||Ib(t)||Eb(t)||/windows phone/i.test(t)||wb(t)}function YB(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t,e=[]){let n;switch(t){case"Browser":n=XT(Fe());break;case"Worker":n=`${XT(Fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hi}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XB(t){return(await ut(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Ab(t,e){return ut(t,"GET","/v2/recaptchaConfig",rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(t){return t!==void 0&&t.getResponse!==void 0}function ZT(t){return t!==void 0&&t.enterprise!==void 0}class Rb{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JB(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function aE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ct("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",JB().appendChild(r)})}function Pb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ZB="https://www.google.com/recaptcha/enterprise.js?render=",e3="recaptcha-enterprise",t3="NO_RECAPTCHA";class Cb{constructor(e){this.type=e3,this.auth=Je(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Ab(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Rb(u);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;ZT(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(t3)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ZT(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}aE(ZB+a).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function qi(t,e,n,r=!1){const i=new Cb(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eS(this),this.idTokenSubscription=new eS(this),this.beforeStateQueue=new n3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=db,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NB()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?X(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}async initializeRecaptchaConfig(){const e=await Ab(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Rb(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Cb(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ro("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Qo.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bB(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Je(t){return X(t)}class eS{constructor(e){this.auth=e,this.observer=null,this.addObserver=NR(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function i3(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function s3(t,e,n){const r=Je(t);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=kb(e),{host:o,port:a}=o3(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||a3()}function kb(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function o3(t){const e=kb(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tS(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:tS(o)}}}function tS(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function a3(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pr("not implemented")}_getIdTokenResponse(e){return pr("not implemented")}_linkToIdToken(e,n){return pr("not implemented")}_getReauthenticationResolver(e){return pr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bb(t,e){return ut(t,"POST","/v1/accounts:resetPassword",rt(t,e))}async function xb(t,e){return ut(t,"POST","/v1/accounts:update",e)}async function u3(t,e){return ut(t,"POST","/v1/accounts:update",rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hm(t,e){return Jr(t,"POST","/v1/accounts:signInWithPassword",rt(t,e))}async function Rp(t,e){return ut(t,"POST","/v1/accounts:sendOobCode",rt(t,e))}async function l3(t,e){return Rp(t,e)}async function Qm(t,e){return Rp(t,e)}async function Ym(t,e){return Rp(t,e)}async function c3(t,e){return Rp(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d3(t,e){return Jr(t,"POST","/v1/accounts:signInWithEmailLink",rt(t,e))}async function h3(t,e){return Jr(t,"POST","/v1/accounts:signInWithEmailLink",rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends Ha{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ql(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ql(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await qi(e,r,"signInWithPassword");return Hm(e,i)}else return Hm(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await qi(e,r,"signInWithPassword");return Hm(e,s)}else return Promise.reject(i)});case"emailLink":return d3(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return xb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return h3(e,{idToken:n,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(t,e){return Jr(t,"POST","/v1/accounts:signInWithIdp",rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f3="http://localhost";class Ir extends Ha{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=nE(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ir(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fr(e,n)}buildRequest(){const e={requestUri:f3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Va(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p3(t,e){return ut(t,"POST","/v1/accounts:sendVerificationCode",rt(t,e))}async function m3(t,e){return Jr(t,"POST","/v1/accounts:signInWithPhoneNumber",rt(t,e))}async function g3(t,e){const n=await Jr(t,"POST","/v1/accounts:signInWithPhoneNumber",rt(t,e));if(n.temporaryProof)throw Du(t,"account-exists-with-different-credential",n);return n}const y3={USER_NOT_FOUND:"user-not-found"};async function v3(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Jr(t,"POST","/v1/accounts:signInWithPhoneNumber",rt(t,n),y3)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends Ha{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ds({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ds({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return m3(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return g3(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return v3(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ds({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _3(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function w3(t){const e=Vo(Pu(t)).link,n=e?Vo(Pu(e)).deep_link_id:null,r=Vo(Pu(t)).deep_link_id;return(r?Vo(Pu(r)).link:null)||r||n||e||t}class Pp{constructor(e){var n,r,i,s,o,a;const u=Vo(Pu(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,d=_3((i=u.mode)!==null&&i!==void 0?i:null);V(l&&c&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=w3(e);try{return new Pp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){this.providerId=ts.PROVIDER_ID}static credential(e,n){return Ql._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Pp.parseLink(n);return V(r,"argument-error"),Ql._fromEmailAndCode(e,r.code,r.tenantId)}}ts.PROVIDER_ID="password";ts.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ts.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends Zr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Yo extends Qa{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return V("providerId"in n&&"signInMethod"in n,"argument-error"),Ir._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return V(e.idToken||e.accessToken,"argument-error"),Ir._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Yo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Yo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Yo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Qa{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return or.credential(n,r)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Qa{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E3="http://localhost";class Ta extends Ha{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Ta(r,s)}static _create(e,n){return new Ta(e,n)}buildRequest(){return{requestUri:E3,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I3="saml.";class Qh extends Zr{constructor(e){V(e.startsWith(I3),"argument-error"),super(e)}static credentialFromResult(e){return Qh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Qh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Ta.fromJSON(e);return V(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Ta._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Qa{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.TWITTER_SIGN_IN_METHOD="twitter.com";ur.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Od(t,e){return Jr(t,"POST","/v1/accounts:signUp",rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xs._fromIdTokenResponse(e,r,i),o=nS(r);return new Vn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=nS(r);return new Vn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function nS(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T3(t){var e;const n=Je(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Vn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Od(n,{returnSecureToken:!0}),i=await Vn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh extends Kt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Yh(e,n,r,i)}}function Nb(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yh._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S3(t,e){const n=X(t);await Cp(!0,n,e);const{providerUserInfo:r}=await MB(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Db(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function uE(t,e,n=!1){const r=await Gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vn._forOperation(t,"link",r)}async function Cp(t,e,n){await Kl(e);const r=Db(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";V(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ob(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Gr(t,Nb(r,i,e,t),n);V(s.idToken,r,"internal-error");const o=Ap(s.idToken);V(o,r,"internal-error");const{sub:a}=o;return V(t.uid===a,r,"user-mismatch"),Vn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vb(t,e,n=!1){const r="signIn",i=await Nb(t,r,e),s=await Vn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function kp(t,e){return Vb(Je(t),e)}async function Lb(t,e){const n=X(t);return await Cp(!1,n,e.providerId),uE(n,e)}async function Mb(t,e){return Ob(X(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A3(t,e){return Jr(t,"POST","/v1/accounts:signInWithCustomToken",rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R3(t,e){const n=Je(t),r=await A3(n,{token:e,returnSecureToken:!0}),i=await Vn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?lE._fromServerResponse(e,n):"totpInfo"in n?cE._fromServerResponse(e,n):bt(e,"internal-error")}}class lE extends bc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new lE(n)}}class cE extends bc{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new cE(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t,e,n){var r;V(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),V(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(V(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(V(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P3(t,e,n){var r;const i=Je(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await qi(i,s,"getOobCode",!0);n&&Xo(i,o,n),await Qm(i,o)}else n&&Xo(i,s,n),await Qm(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await qi(i,s,"getOobCode",!0);n&&Xo(i,a,n),await Qm(i,a)}else return Promise.reject(o)})}async function C3(t,e,n){await bb(X(t),{oobCode:e,newPassword:n})}async function k3(t,e){await u3(X(t),{oobCode:e})}async function Fb(t,e){const n=X(t),r=await bb(n,{oobCode:e}),i=r.requestType;switch(V(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":V(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":V(r.mfaInfo,n,"internal-error");default:V(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=bc._fromServerResponse(Je(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function b3(t,e){const{data:n}=await Fb(X(t),e);return n.email}async function x3(t,e,n){var r;const i=Je(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await qi(i,s,"signUpPassword");o=Od(i,l)}else o=Od(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await qi(i,s,"signUpPassword");return Od(i,c)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),u=await Vn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(u.user),u}function N3(t,e,n){return kp(X(t),ts.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D3(t,e,n){var r;const i=Je(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,u){V(u.handleCodeInApp,i,"argument-error"),u&&Xo(i,a,u)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await qi(i,s,"getOobCode",!0);o(a,n),await Ym(i,a)}else o(s,n),await Ym(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const u=await qi(i,s,"getOobCode",!0);o(u,n),await Ym(i,u)}else return Promise.reject(a)})}function O3(t,e){const n=Pp.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function V3(t,e,n){const r=X(t),i=ts.credentialWithLink(e,n||Wl());return V(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),kp(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L3(t,e){return ut(t,"POST","/v1/accounts:createAuthUri",rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M3(t,e){const n=iE()?Wl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await L3(X(t),r);return i||[]}async function F3(t,e){const n=X(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Xo(n.auth,i,e);const{email:s}=await l3(n.auth,i);s!==t.email&&await t.reload()}async function $3(t,e,n){const r=X(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Xo(r.auth,s,n);const{email:o}=await c3(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U3(t,e){return ut(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j3(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=X(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Gr(r,U3(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function B3(t,e){return $b(X(t),e,null)}function z3(t,e){return $b(X(t),null,e)}async function $b(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Gr(t,xb(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q3(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Ap(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Jo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new G3(s,i);case"github.com":return new W3(s,i);case"google.com":return new K3(s,i);case"twitter.com":return new H3(s,i,t.screenName||null);case"custom":case"anonymous":return new Jo(s,null);default:return new Jo(s,r,i)}}class Jo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Ub extends Jo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class G3 extends Jo{constructor(e,n){super(e,"facebook.com",n)}}class W3 extends Ub{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class K3 extends Jo{constructor(e,n){super(e,"google.com",n)}}class H3 extends Ub{constructor(e,n,r){super(e,"twitter.com",n,r)}}function Q3(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:q3(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Ss("enroll",e,n)}static _fromMfaPendingCredential(e){return new Ss("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Ss._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Ss._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Je(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>bc._fromServerResponse(r,a));V(i.mfaPendingCredential,r,"internal-error");const o=Ss._fromMfaPendingCredential(i.mfaPendingCredential);return new dE(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const c=await Vn._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return V(n.user,r,"internal-error"),Vn._forOperation(n.user,n.operationType,l);default:bt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function Y3(t,e){var n;const r=X(t),i=e;return V(e.customData.operationType,r,"argument-error"),V((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),dE._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X3(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:start",rt(t,e))}function J3(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:finalize",rt(t,e))}function Z3(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:withdraw",rt(t,e))}class hE{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>bc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new hE(e)}async getSession(){return Ss._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Gr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Gr(this.user,Z3(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Xm=new WeakMap;function ez(t){const e=X(t);return Xm.has(e)||Xm.set(e,hE._fromUser(e)),Xm.get(e)}const Xh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xh,"1"),this.storage.removeItem(Xh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tz(){const t=Fe();return oE(t)||Ka(t)}const nz=1e3,rz=10;class Bb extends jb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tz()&&YB(),this.fallbackToPolling=Tb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);QB()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,rz):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},nz)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bb.type="LOCAL";const fE=Bb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb extends jb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zb.type="SESSION";const Xs=zb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iz(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bp(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await iz(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bp.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sz{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=xc("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return window}function oz(t){et().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(){return typeof et().WorkerGlobalScope<"u"&&typeof et().importScripts=="function"}async function az(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uz(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lz(){return pE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb="firebaseLocalStorageDb",cz=1,Jh="firebaseLocalStorage",Gb="fbase_key";class Nc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xp(t,e){return t.transaction([Jh],e?"readwrite":"readonly").objectStore(Jh)}function dz(){const t=indexedDB.deleteDatabase(qb);return new Nc(t).toPromise()}function Yy(){const t=indexedDB.open(qb,cz);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jh,{keyPath:Gb})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jh)?e(r):(r.close(),await dz(),e(await Yy()))})})}async function rS(t,e,n){const r=xp(t,!0).put({[Gb]:e,value:n});return new Nc(r).toPromise()}async function hz(t,e){const n=xp(t,!1).get(e),r=await new Nc(n).toPromise();return r===void 0?null:r.value}function iS(t,e){const n=xp(t,!0).delete(e);return new Nc(n).toPromise()}const fz=800,pz=3;class Wb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yy(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pz)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bp._getInstance(lz()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await az(),!this.activeServiceWorker)return;this.sender=new sz(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uz()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yy();return await rS(e,Xh,"1"),await iS(e,Xh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rS(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hz(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>iS(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xp(i,!1).getAll();return new Nc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fz)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wb.type="LOCAL";const Yl=Wb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mz(t,e){return ut(t,"POST","/v2/accounts/mfaSignIn:start",rt(t,e))}function gz(t,e){return ut(t,"POST","/v2/accounts/mfaSignIn:finalize",rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yz=500,vz=6e4,dd=1e12;class _z{constructor(e){this.auth=e,this.counter=dd,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new wz(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||dd;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||dd;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||dd;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class wz{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;V(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Ez(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},vz)},yz))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Ez(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=Pb("rcb"),Iz=new Cc(3e4,6e4),Tz="https://www.google.com/recaptcha/api.js?";class Sz{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=et().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return V(Az(n),e,"argument-error"),this.shouldResolveImmediately(n)&&JT(et().grecaptcha)?Promise.resolve(et().grecaptcha):new Promise((r,i)=>{const s=et().setTimeout(()=>{i(Ct(e,"network-request-failed"))},Iz.get());et()[Jm]=()=>{et().clearTimeout(s),delete et()[Jm];const a=et().grecaptcha;if(!a||!JT(a)){i(Ct(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const d=u(l,c);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${Tz}?${Va({onload:Jm,render:"explicit",hl:n})}`;aE(o).catch(()=>{clearTimeout(s),i(Ct(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=et().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Az(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Rz{async load(e){return new _z(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb="recaptcha",Pz={theme:"light",type:"image"};let Cz=class{constructor(e,n,r=Object.assign({},Pz)){this.parameters=r,this.type=Kb,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Je(e),this.isInvisible=this.parameters.size==="invisible",V(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;V(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Rz:new Sz,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){V(!this.parameters.sitekey,this.auth,"argument-error"),V(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),V(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=et()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){V(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){V(iE()&&!pE(),this.auth,"internal-error"),await kz(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await XB(this.auth);V(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return V(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function kz(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ds._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function bz(t,e,n){const r=Je(t),i=await Np(r,e,X(n));return new mE(i,s=>kp(r,s))}async function xz(t,e,n){const r=X(t);await Cp(!1,r,"phone");const i=await Np(r.auth,e,X(n));return new mE(i,s=>Lb(r,s))}async function Nz(t,e,n){const r=X(t),i=await Np(r.auth,e,X(n));return new mE(i,s=>Mb(r,s))}async function Np(t,e,n){var r;const i=await n.verify();try{V(typeof i=="string",t,"argument-error"),V(n.type===Kb,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return V(o.type==="enroll",t,"internal-error"),(await X3(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{V(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return V(a,t,"missing-multi-factor-info"),(await mz(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await p3(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function Dz(t,e){await uE(X(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Js=class Vd{constructor(e){this.providerId=Vd.PROVIDER_ID,this.auth=Je(e)}verifyPhoneNumber(e,n){return Np(this.auth,e,X(n))}static credential(e,n){return Ds._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Vd.credentialFromTaggedObject(n)}static credentialFromError(e){return Vd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ds._fromTokenResponse(n,r):null}};Js.PROVIDER_ID="phone";Js.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t,e){return e?yn(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE extends Ha{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Oz(t){return Vb(t.auth,new gE(t),t.bypassAuthState)}function Vz(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),Ob(n,new gE(t),t.bypassAuthState)}async function Lz(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),uE(n,new gE(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Oz;case"linkViaPopup":case"linkViaRedirect":return Lz;case"reauthViaPopup":case"reauthViaRedirect":return Vz;default:bt(this.auth,"internal-error")}}resolve(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mz=new Cc(2e3,1e4);async function Fz(t,e,n){const r=Je(t);Wa(t,e,Zr);const i=co(r,n);return new Or(r,"signInViaPopup",e,i).executeNotNull()}async function $z(t,e,n){const r=X(t);Wa(r.auth,e,Zr);const i=co(r.auth,n);return new Or(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function Uz(t,e,n){const r=X(t);Wa(r.auth,e,Zr);const i=co(r.auth,n);return new Or(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Or extends Hb{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Xn(this.filter.length===1,"Popup operations only handle one event");const e=xc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mz.get())};e()}}Or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jz="pendingRedirect",Ju=new Map;class Bz extends Hb{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ju.get(this.auth._key());if(!e){try{const r=await zz(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ju.set(this.auth._key(),e)}return this.bypassAuthState||Ju.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zz(t,e){const n=Yb(e),r=Qb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function yE(t,e){return Qb(t)._set(Yb(e),"true")}function qz(){Ju.clear()}function vE(t,e){Ju.set(t._key(),e)}function Qb(t){return yn(t._redirectPersistence)}function Yb(t){return Ns(jz,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gz(t,e,n){return Wz(t,e,n)}async function Wz(t,e,n){const r=Je(t);Wa(t,e,Zr),await r._initializationPromise;const i=co(r,n);return await yE(i,r),i._openRedirect(r,e,"signInViaRedirect")}function Kz(t,e,n){return Hz(t,e,n)}async function Hz(t,e,n){const r=X(t);Wa(r.auth,e,Zr),await r.auth._initializationPromise;const i=co(r.auth,n);await yE(i,r.auth);const s=await Xb(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function Qz(t,e,n){return Yz(t,e,n)}async function Yz(t,e,n){const r=X(t);Wa(r.auth,e,Zr),await r.auth._initializationPromise;const i=co(r.auth,n);await Cp(!1,r,e.providerId),await yE(i,r.auth);const s=await Xb(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function Xz(t,e){return await Je(t)._initializationPromise,Dp(t,e,!1)}async function Dp(t,e,n=!1){const r=Je(t),i=co(r,e),o=await new Bz(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Xb(t){const e=xc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jz=10*60*1e3;class Jb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zz(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zb(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ct(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jz&&this.cachedEventUids.clear(),this.cachedEventUids.has(sS(e))}saveEventToCache(e){this.cachedEventUids.add(sS(e)),this.lastProcessedEventTime=Date.now()}}function sS(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zz(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zb(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex(t,e={}){return ut(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e5=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,t5=/^https?/;async function n5(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ex(t);for(const n of e)try{if(r5(n))return}catch{}bt(t,"unauthorized-domain")}function r5(t){const e=Wl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!t5.test(n))return!1;if(e5.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i5=new Cc(3e4,6e4);function oS(){const t=et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function s5(t){return new Promise((e,n)=>{var r,i,s;function o(){oS(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oS(),n(Ct(t,"network-request-failed"))},timeout:i5.get()})}if(!((i=(r=et().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=et().gapi)===null||s===void 0)&&s.load)o();else{const a=Pb("iframefcb");return et()[a]=()=>{gapi.load?o():n(Ct(t,"network-request-failed"))},aE(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Ld=null,e})}let Ld=null;function o5(t){return Ld=Ld||s5(t),Ld}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a5=new Cc(5e3,15e3),u5="__/auth/iframe",l5="emulator/auth/iframe",c5={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d5=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function h5(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sE(e,l5):`https://${t.config.authDomain}/${u5}`,r={apiKey:e.apiKey,appName:t.name,v:Hi},i=d5.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Va(r).slice(1)}`}async function f5(t){const e=await o5(t),n=et().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:h5(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:c5,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ct(t,"network-request-failed"),a=et().setTimeout(()=>{s(o)},a5.get());function u(){et().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p5={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},m5=500,g5=600,y5="_blank",v5="http://localhost";class aS{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _5(t,e,n,r=m5,i=g5){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},p5),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Fe().toLowerCase();n&&(a=_b(l)?y5:n),vb(l)&&(e=e||v5,u.scrollbars="yes");const c=Object.entries(u).reduce((h,[f,v])=>`${h}${f}=${v},`,"");if(HB(l)&&a!=="_self")return w5(e||"",a),new aS(null);const d=window.open(e||"",a,c);V(d,t,"popup-blocked");try{d.focus()}catch{}return new aS(d)}function w5(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E5="__/auth/handler",I5="emulator/auth/handler",T5=encodeURIComponent("fac");async function Xy(t,e,n,r,i,s){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hi,eventId:i};if(e instanceof Zr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",GM(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Qa){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const u=await t._getAppCheckToken(),l=u?`#${T5}=${encodeURIComponent(u)}`:"";return`${S5(t)}?${Va(a).slice(1)}${l}`}function S5({config:t}){return t.emulator?sE(t,I5):`https://${t.authDomain}/${E5}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="webStorageSupport";class A5{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xs,this._completeRedirectFn=Dp,this._overrideRedirectResult=vE}async _openPopup(e,n,r,i){var s;Xn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Xy(e,n,r,Wl(),i);return _5(e,o,xc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Xy(e,n,r,Wl(),i);return oz(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await f5(e),r=new Jb(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zm,{type:Zm},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Zm];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=n5(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tb()||oE()||Ka()}}const R5=A5;class P5{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return pr("unexpected MultiFactorSessionType")}}}class _E extends P5{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new _E(e)}_finalizeEnroll(e,n,r){return J3(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return gz(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class tx{constructor(){}static assertion(e){return _E._fromCredential(e)}}tx.FACTOR_ID="phone";var uS="@firebase/auth",lS="1.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C5{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k5(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function b5(t){Oi(new _r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sb(t)},l=new r3(r,i,s,u);return i3(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Oi(new _r("auth-internal",e=>{const n=Je(e.getProvider("auth").getImmediate());return(r=>new C5(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yr(uS,lS,k5(t)),yr(uS,lS,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x5=5*60;VM("authIdTokenMaxAge");b5("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N5=2e3;async function D5(t,e,n){var r;const{BuildInfo:i}=Zs();Xn(e.sessionId,"AuthEvent did not contain a session ID");const s=await F5(e.sessionId),o={};return Ka()?o.ibi=i.packageName:kc()?o.apn=i.packageName:bt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Xy(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function O5(t){const{BuildInfo:e}=Zs(),n={};Ka()?n.iosBundleId=e.packageName:kc()?n.androidPackageName=e.packageName:bt(t,"operation-not-supported-in-this-environment"),await ex(t,n)}function V5(t){const{cordova:e}=Zs();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,KB()?"_blank":"_system","location=yes"),n(i)})})}async function L5(t,e,n){const{cordova:r}=Zs();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var d;s();const h=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(Ct(t,"redirect-cancelled-by-user"))},N5))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),kc()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function M5(t){var e,n,r,i,s,o,a,u,l,c;const d=Zs();V(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),V(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),V(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),V(typeof((u=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),V(typeof((c=(l=d==null?void 0:d.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function F5(t){const e=$5(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function $5(t){if(Xn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U5=20;class j5 extends Jb{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function B5(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:G5(),postBody:null,tenantId:t.tenantId,error:Ct(t,"no-auth-event")}}function z5(t,e){return Jy()._set(Zy(t),e)}async function cS(t){const e=await Jy()._get(Zy(t));return e&&await Jy()._remove(Zy(t)),e}function q5(t,e){var n,r;const i=K5(e);if(i.includes("/__/auth/callback")){const s=Md(i),o=s.firebaseError?W5(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?Ct(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function G5(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<U5;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Jy(){return yn(fE)}function Zy(t){return Ns("authEvent",t.config.apiKey,t.name)}function W5(t){try{return JSON.parse(t)}catch{return null}}function K5(t){const e=Md(t),n=e.link?decodeURIComponent(e.link):void 0,r=Md(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Md(i).link||i||r||n||t}function Md(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Vo(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H5=500;class Q5{constructor(){this._redirectPersistence=Xs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Dp,this._overrideRedirectResult=vE}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new j5(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){bt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){M5(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),qz(),await this._originValidation(e);const o=B5(e,r,i);await z5(e,o);const a=await D5(e,o,n),u=await V5(a);return L5(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=O5(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Zs(),o=setTimeout(async()=>{await cS(e),n.onEvent(dS())},H5),a=async c=>{clearTimeout(o);const d=await cS(e);let h=null;d&&(c!=null&&c.url)&&(h=q5(d,c.url)),n.onEvent(h||dS())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;Zs().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(d){console.error(d)}}}}const Y5=Q5;function dS(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ct("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X5(t,e){Je(t)._logFramework(e)}var J5="@firebase/auth-compat",Z5="0.4.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e9=1e3;function Zu(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function t9(){return Zu()==="http:"||Zu()==="https:"}function nx(t=Fe()){return!!((Zu()==="file:"||Zu()==="ionic:"||Zu()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function n9(){return k_()||C_()}function r9(){return xR()&&(document==null?void 0:document.documentMode)===11}function i9(t=Fe()){return/Edge\/\d+/.test(t)}function s9(t=Fe()){return r9()||i9(t)}function rx(){try{const t=self.localStorage,e=xc();if(t)return t.setItem(e,"1"),t.removeItem(e),s9()?Il():!0}catch{return wE()&&Il()}return!1}function wE(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function eg(){return(t9()||bR()||nx())&&!n9()&&rx()&&!wE()}function ix(){return nx()&&typeof document<"u"}async function o9(){return ix()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},e9);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function a9(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn={LOCAL:"local",NONE:"none",SESSION:"session"},_u=V,sx="persistence";function u9(t,e){if(_u(Object.values(mn).includes(e),t,"invalid-persistence-type"),k_()){_u(e!==mn.SESSION,t,"unsupported-persistence-type");return}if(C_()){_u(e===mn.NONE,t,"unsupported-persistence-type");return}if(wE()){_u(e===mn.NONE||e===mn.LOCAL&&Il(),t,"unsupported-persistence-type");return}_u(e===mn.NONE||rx(),t,"unsupported-persistence-type")}async function ev(t){await t._initializationPromise;const e=ox(),n=Ns(sx,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function l9(t,e){const n=ox();if(!n)return[];const r=Ns(sx,t,e);switch(n.getItem(r)){case mn.NONE:return[Ia];case mn.LOCAL:return[Yl,Xs];case mn.SESSION:return[Xs];default:return[]}}function ox(){var t;try{return((t=a9())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c9=V;class gi{constructor(){this.browserResolver=yn(R5),this.cordovaResolver=yn(Y5),this.underlyingResolver=null,this._redirectPersistence=Xs,this._completeRedirectFn=Dp,this._overrideRedirectResult=vE}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return ix()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return c9(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await o9();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(t){return t.unwrap()}function d9(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h9(t){return ux(t)}function f9(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new p9(t,Y3(t,e))}else if(r){const i=ux(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function ux(t){const{_tokenResponse:e}=t instanceof Kt?t.customData:t;if(!e)return null;if(!(t instanceof Kt)&&"temporaryProof"in e&&"phoneNumber"in e)return Js.credentialFromResult(t);const n=e.providerId;if(!n||n===vu.PASSWORD)return null;let r;switch(n){case vu.GOOGLE:r=or;break;case vu.FACEBOOK:r=sr;break;case vu.GITHUB:r=ar;break;case vu.TWITTER:r=ur;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Ta._create(n,a):Ir._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Yo(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof Kt?r.credentialFromError(t):r.credentialFromResult(t)}function en(t,e){return e.catch(n=>{throw n instanceof Kt&&f9(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:h9(n),additionalUserInfo:Q3(n),user:Vr.getOrCreate(i)}})}async function tv(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>en(t,n.confirm(r))}}class p9{constructor(e,n){this.resolver=n,this.auth=d9(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return en(ax(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this._delegate=e,this.multiFactor=ez(e)}static getOrCreate(e){return Vr.USER_MAP.has(e)||Vr.USER_MAP.set(e,new Vr(e)),Vr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return en(this.auth,Lb(this._delegate,e))}async linkWithPhoneNumber(e,n){return tv(this.auth,xz(this._delegate,e,n))}async linkWithPopup(e){return en(this.auth,Uz(this._delegate,e,gi))}async linkWithRedirect(e){return await ev(Je(this.auth)),Qz(this._delegate,e,gi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return en(this.auth,Mb(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return tv(this.auth,Nz(this._delegate,e,n))}reauthenticateWithPopup(e){return en(this.auth,$z(this._delegate,e,gi))}async reauthenticateWithRedirect(e){return await ev(Je(this.auth)),Kz(this._delegate,e,gi)}sendEmailVerification(e){return F3(this._delegate,e)}async unlink(e){return await S3(this._delegate,e),this}updateEmail(e){return B3(this._delegate,e)}updatePassword(e){return z3(this._delegate,e)}updatePhoneNumber(e){return Dz(this._delegate,e)}updateProfile(e){return j3(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return $3(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Vr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=V;class nv{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;wu(r,"invalid-api-key",{appName:e.name}),wu(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?gi:void 0;this._delegate=n.initialize({options:{persistence:m9(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(CB),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Vr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){s3(this._delegate,e,n)}applyActionCode(e){return k3(this._delegate,e)}checkActionCode(e){return Fb(this._delegate,e)}confirmPasswordReset(e,n){return C3(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return en(this._delegate,x3(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return M3(this._delegate,e)}isSignInWithEmailLink(e){return O3(this._delegate,e)}async getRedirectResult(){wu(eg(),this._delegate,"operation-not-supported-in-this-environment");const e=await Xz(this._delegate,gi);return e?en(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){X5(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=hS(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=hS(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return D3(this._delegate,e,n)}sendPasswordResetEmail(e,n){return P3(this._delegate,e,n||void 0)}async setPersistence(e){u9(this._delegate,e);let n;switch(e){case mn.SESSION:n=Xs;break;case mn.LOCAL:n=await yn(Yl)._isAvailable()?Yl:fE;break;case mn.NONE:n=Ia;break;default:return bt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return en(this._delegate,T3(this._delegate))}signInWithCredential(e){return en(this._delegate,kp(this._delegate,e))}signInWithCustomToken(e){return en(this._delegate,R3(this._delegate,e))}signInWithEmailAndPassword(e,n){return en(this._delegate,N3(this._delegate,e,n))}signInWithEmailLink(e,n){return en(this._delegate,V3(this._delegate,e,n))}signInWithPhoneNumber(e,n){return tv(this._delegate,bz(this._delegate,e,n))}async signInWithPopup(e){return wu(eg(),this._delegate,"operation-not-supported-in-this-environment"),en(this._delegate,Fz(this._delegate,e,gi))}async signInWithRedirect(e){return wu(eg(),this._delegate,"operation-not-supported-in-this-environment"),await ev(this._delegate),Gz(this._delegate,e,gi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return b3(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}nv.Persistence=mn;function hS(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Vr.getOrCreate(o)),error:e,complete:n}}function m9(t,e){const n=l9(t,e);if(typeof self<"u"&&!n.includes(Yl)&&n.push(Yl),typeof window<"u")for(const r of[fE,Xs])n.includes(r)||n.push(r);return n.includes(Ia)||n.push(Ia),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(){this.providerId="phone",this._delegate=new Js(ax(Hr.auth()))}static credential(e,n){return Js.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}EE.PHONE_SIGN_IN_METHOD=Js.PHONE_SIGN_IN_METHOD;EE.PROVIDER_ID=Js.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g9=V;class y9{constructor(e,n,r=Hr.app()){var i;g9((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Cz(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v9="auth-compat";function _9(t){t.INTERNAL.registerComponent(new _r(v9,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new nv(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:yo.EMAIL_SIGNIN,PASSWORD_RESET:yo.PASSWORD_RESET,RECOVER_EMAIL:yo.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:yo.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:yo.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:yo.VERIFY_EMAIL}},EmailAuthProvider:ts,FacebookAuthProvider:sr,GithubAuthProvider:ar,GoogleAuthProvider:or,OAuthProvider:Yo,SAMLAuthProvider:Qh,PhoneAuthProvider:EE,PhoneMultiFactorGenerator:tx,RecaptchaVerifier:y9,TwitterAuthProvider:ur,Auth:nv,AuthCredential:Ha,Error:Kt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(J5,Z5)}_9(Hr);const w9={apiKey:"AIzaSyDz07SI1g2ZXvHikqrlH0VUY5sTxbkRCO8",authDomain:"crwn-clothing-69d58.firebaseapp.com",projectId:"crwn-clothing-69d58",storageBucket:"crwn-clothing-69d58.appspot.com",messagingSenderId:"58040636901",appId:"1:58040636901:web:e586b0245c6ad70bbd4b0c",measurementId:"G-VCHP4LV66Y"},E9=async(t,e)=>{if(!t)return;const n=lx.doc(`users/${t.uid}`);if(!(await n.get()).exists){const{displayName:i,email:s}=t,o=new Date;try{await n.set({displayName:i,email:s,createdAt:o,...e})}catch(a){console.log("error creating user",a.message)}}return n},I9=t=>t.docs.map(n=>{const{title:r,items:i}=n.data();return{routeName:encodeURI(r.toLowerCase()),id:n.id,title:r,items:i}}).reduce((n,r)=>(n[r.title.toLowerCase()]=r,n),{}),T9=()=>new promise((t,e)=>{const n=Dc.onAuthStateChanged(r=>{n(),t(r)},e)});Hr.initializeApp(w9);const Dc=Hr.auth(),lx=Hr.firestore(),cx=new Hr.auth.GoogleAuthProvider;cx.setCustomParameters({prompt:"select_account"});const S9=()=>({type:Cs.FETCH_COLLECTIONS_START}),A9=t=>({type:Cs.FETCH_COLLECTIONS_SUCCESS,payload:t}),R9=t=>({type:Cs.FETCH_COLLECTIONS_FAILURE,payload:t});var Te="-ms-",el="-moz-",he="-webkit-",dx="comm",Op="rule",IE="decl",P9="@import",hx="@keyframes",C9="@layer",k9=Math.abs,TE=String.fromCharCode,rv=Object.assign;function b9(t,e){return ht(t,0)^45?(((e<<2^ht(t,0))<<2^ht(t,1))<<2^ht(t,2))<<2^ht(t,3):0}function fx(t){return t.trim()}function Pr(t,e){return(t=e.exec(t))?t[0]:t}function re(t,e,n){return t.replace(e,n)}function Fd(t,e){return t.indexOf(e)}function ht(t,e){return t.charCodeAt(e)|0}function Sa(t,e,n){return t.slice(e,n)}function nr(t){return t.length}function px(t){return t.length}function Ou(t,e){return e.push(t),t}function x9(t,e){return t.map(e).join("")}function fS(t,e){return t.filter(function(n){return!Pr(n,e)})}var Vp=1,Aa=1,mx=0,Ln=0,tt=0,Ya="";function Lp(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Vp,column:Aa,length:o,return:"",siblings:a}}function si(t,e){return rv(Lp("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function vo(t){for(;t.root;)t=si(t.root,{children:[t]});Ou(t,t.siblings)}function N9(){return tt}function D9(){return tt=Ln>0?ht(Ya,--Ln):0,Aa--,tt===10&&(Aa=1,Vp--),tt}function Kn(){return tt=Ln<mx?ht(Ya,Ln++):0,Aa++,tt===10&&(Aa=1,Vp++),tt}function Os(){return ht(Ya,Ln)}function $d(){return Ln}function Mp(t,e){return Sa(Ya,t,e)}function iv(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function O9(t){return Vp=Aa=1,mx=nr(Ya=t),Ln=0,[]}function V9(t){return Ya="",t}function tg(t){return fx(Mp(Ln-1,sv(t===91?t+2:t===40?t+1:t)))}function L9(t){for(;(tt=Os())&&tt<33;)Kn();return iv(t)>2||iv(tt)>3?"":" "}function M9(t,e){for(;--e&&Kn()&&!(tt<48||tt>102||tt>57&&tt<65||tt>70&&tt<97););return Mp(t,$d()+(e<6&&Os()==32&&Kn()==32))}function sv(t){for(;Kn();)switch(tt){case t:return Ln;case 34:case 39:t!==34&&t!==39&&sv(tt);break;case 40:t===41&&sv(t);break;case 92:Kn();break}return Ln}function F9(t,e){for(;Kn()&&t+tt!==47+10;)if(t+tt===42+42&&Os()===47)break;return"/*"+Mp(e,Ln-1)+"*"+TE(t===47?t:Kn())}function $9(t){for(;!iv(Os());)Kn();return Mp(t,Ln)}function U9(t){return V9(Ud("",null,null,null,[""],t=O9(t),0,[0],t))}function Ud(t,e,n,r,i,s,o,a,u){for(var l=0,c=0,d=o,h=0,f=0,v=0,y=1,w=1,m=1,p=0,g="",_=i,I=s,S=r,C=g;w;)switch(v=p,p=Kn()){case 40:if(v!=108&&ht(C,d-1)==58){Fd(C+=re(tg(p),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:C+=tg(p);break;case 9:case 10:case 13:case 32:C+=L9(v);break;case 92:C+=M9($d()-1,7);continue;case 47:switch(Os()){case 42:case 47:Ou(j9(F9(Kn(),$d()),e,n,u),u);break;default:C+="/"}break;case 123*y:a[l++]=nr(C)*m;case 125*y:case 59:case 0:switch(p){case 0:case 125:w=0;case 59+c:m==-1&&(C=re(C,/\f/g,"")),f>0&&nr(C)-d&&Ou(f>32?mS(C+";",r,n,d-1,u):mS(re(C," ","")+";",r,n,d-2,u),u);break;case 59:C+=";";default:if(Ou(S=pS(C,e,n,l,c,i,a,g,_=[],I=[],d,s),s),p===123)if(c===0)Ud(C,e,S,S,_,s,d,a,I);else switch(h===99&&ht(C,3)===110?100:h){case 100:case 108:case 109:case 115:Ud(t,S,S,r&&Ou(pS(t,S,S,0,0,i,a,g,i,_=[],d,I),I),i,I,d,a,r?_:I);break;default:Ud(C,S,S,S,[""],I,0,a,I)}}l=c=f=0,y=m=1,g=C="",d=o;break;case 58:d=1+nr(C),f=v;default:if(y<1){if(p==123)--y;else if(p==125&&y++==0&&D9()==125)continue}switch(C+=TE(p),p*y){case 38:m=c>0?1:(C+="\f",-1);break;case 44:a[l++]=(nr(C)-1)*m,m=1;break;case 64:Os()===45&&(C+=tg(Kn())),h=Os(),c=d=nr(g=C+=$9($d())),p++;break;case 45:v===45&&nr(C)==2&&(y=0)}}return s}function pS(t,e,n,r,i,s,o,a,u,l,c,d){for(var h=i-1,f=i===0?s:[""],v=px(f),y=0,w=0,m=0;y<r;++y)for(var p=0,g=Sa(t,h+1,h=k9(w=o[y])),_=t;p<v;++p)(_=fx(w>0?f[p]+" "+g:re(g,/&\f/g,f[p])))&&(u[m++]=_);return Lp(t,e,n,i===0?Op:a,u,l,c,d)}function j9(t,e,n,r){return Lp(t,e,n,dx,TE(N9()),Sa(t,2,-2),0,r)}function mS(t,e,n,r,i){return Lp(t,e,n,IE,Sa(t,0,r),Sa(t,r+1,-1),r,i)}function gx(t,e,n){switch(b9(t,e)){case 5103:return he+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return he+t+t;case 4789:return el+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return he+t+el+t+Te+t+t;case 5936:switch(ht(t,e+11)){case 114:return he+t+Te+re(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return he+t+Te+re(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return he+t+Te+re(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return he+t+Te+t+t;case 6165:return he+t+Te+"flex-"+t+t;case 5187:return he+t+re(t,/(\w+).+(:[^]+)/,he+"box-$1$2"+Te+"flex-$1$2")+t;case 5443:return he+t+Te+"flex-item-"+re(t,/flex-|-self/g,"")+(Pr(t,/flex-|baseline/)?"":Te+"grid-row-"+re(t,/flex-|-self/g,""))+t;case 4675:return he+t+Te+"flex-line-pack"+re(t,/align-content|flex-|-self/g,"")+t;case 5548:return he+t+Te+re(t,"shrink","negative")+t;case 5292:return he+t+Te+re(t,"basis","preferred-size")+t;case 6060:return he+"box-"+re(t,"-grow","")+he+t+Te+re(t,"grow","positive")+t;case 4554:return he+re(t,/([^-])(transform)/g,"$1"+he+"$2")+t;case 6187:return re(re(re(t,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),t,"")+t;case 5495:case 3959:return re(t,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return re(re(t,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+Te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+he+t+t;case 4200:if(!Pr(t,/flex-|baseline/))return Te+"grid-column-align"+Sa(t,e)+t;break;case 2592:case 3360:return Te+re(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Pr(r.props,/grid-\w+-end/)})?~Fd(t+(n=n[e].value),"span")?t:Te+re(t,"-start","")+t+Te+"grid-row-span:"+(~Fd(n,"span")?Pr(n,/\d+/):+Pr(n,/\d+/)-+Pr(t,/\d+/))+";":Te+re(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Pr(r.props,/grid-\w+-start/)})?t:Te+re(re(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return re(t,/(.+)-inline(.+)/,he+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nr(t)-1-e>6)switch(ht(t,e+1)){case 109:if(ht(t,e+4)!==45)break;case 102:return re(t,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+el+(ht(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Fd(t,"stretch")?gx(re(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return re(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,u,l){return Te+i+":"+s+l+(o?Te+i+"-span:"+(a?u:+u-+s)+l:"")+t});case 4949:if(ht(t,e+6)===121)return re(t,":",":"+he)+t;break;case 6444:switch(ht(t,ht(t,14)===45?18:11)){case 120:return re(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(ht(t,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+Te+"$2box$3")+t;case 100:return re(t,":",":"+Te)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(t,"scroll-","scroll-snap-")+t}return t}function Zh(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function B9(t,e,n,r){switch(t.type){case C9:if(t.children.length)break;case P9:case IE:return t.return=t.return||t.value;case dx:return"";case hx:return t.return=t.value+"{"+Zh(t.children,r)+"}";case Op:if(!nr(t.value=t.props.join(",")))return""}return nr(n=Zh(t.children,r))?t.return=t.value+"{"+n+"}":""}function z9(t){var e=px(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function q9(t){return function(e){e.root||(e=e.return)&&t(e)}}function G9(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case IE:t.return=gx(t.value,t.length,n);return;case hx:return Zh([si(t,{value:re(t.value,"@","@"+he)})],r);case Op:if(t.length)return x9(n=t.props,function(i){switch(Pr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":vo(si(t,{props:[re(i,/:(read-\w+)/,":"+el+"$1")]})),vo(si(t,{props:[i]})),rv(t,{props:fS(n,r)});break;case"::placeholder":vo(si(t,{props:[re(i,/:(plac\w+)/,":"+he+"input-$1")]})),vo(si(t,{props:[re(i,/:(plac\w+)/,":"+el+"$1")]})),vo(si(t,{props:[re(i,/:(plac\w+)/,Te+"input-$1")]})),vo(si(t,{props:[i]})),rv(t,{props:fS(n,r)});break}return""})}}var W9={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ra=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",SE=typeof window<"u"&&"HTMLElement"in window,K9=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Fp=Object.freeze([]),Pa=Object.freeze({});function H9(t,e,n){return n===void 0&&(n=Pa),t.theme!==n.theme&&t.theme||e||n.theme}var yx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Q9=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Y9=/(^-|-$)/g;function gS(t){return t.replace(Q9,"-").replace(Y9,"")}var X9=/(a)(d)/gi,yS=function(t){return String.fromCharCode(t+(t>25?39:97))};function ov(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=yS(e%52)+n;return(yS(e%52)+n).replace(X9,"$1-$2")}var ng,Mo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},vx=function(t){return Mo(5381,t)};function J9(t){return ov(vx(t)>>>0)}function Z9(t){return t.displayName||t.name||"Component"}function rg(t){return typeof t=="string"&&!0}var _x=typeof Symbol=="function"&&Symbol.for,wx=_x?Symbol.for("react.memo"):60115,e6=_x?Symbol.for("react.forward_ref"):60112,t6={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n6={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ex={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},r6=((ng={})[e6]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ng[wx]=Ex,ng);function vS(t){return("type"in(e=t)&&e.type.$$typeof)===wx?Ex:"$$typeof"in t?r6[t.$$typeof]:t6;var e}var i6=Object.defineProperty,s6=Object.getOwnPropertyNames,_S=Object.getOwnPropertySymbols,o6=Object.getOwnPropertyDescriptor,a6=Object.getPrototypeOf,wS=Object.prototype;function Ix(t,e,n){if(typeof e!="string"){if(wS){var r=a6(e);r&&r!==wS&&Ix(t,r,n)}var i=s6(e);_S&&(i=i.concat(_S(e)));for(var s=vS(t),o=vS(e),a=0;a<i.length;++a){var u=i[a];if(!(u in n6||n&&n[u]||o&&u in o||s&&u in s)){var l=o6(e,u);try{i6(t,u,l)}catch{}}}}return t}function Ca(t){return typeof t=="function"}function AE(t){return typeof t=="object"&&"styledComponentId"in t}function As(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function ES(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function Xl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function av(t,e,n){if(n===void 0&&(n=!1),!n&&!Xl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=av(t[r],e[r]);else if(Xl(e))for(var r in e)t[r]=av(t[r],e[r]);return t}function RE(t,e){Object.defineProperty(t,"toString",{value:e})}function Oc(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var u6=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Oc(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),jd=new Map,ef=new Map,ig=1,hd=function(t){if(jd.has(t))return jd.get(t);for(;ef.has(ig);)ig++;var e=ig++;return jd.set(t,e),ef.set(e,t),e},l6=function(t,e){jd.set(t,e),ef.set(e,t)},c6="style[".concat(Ra,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),d6=new RegExp("^".concat(Ra,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),h6=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},f6=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var u=a.match(d6);if(u){var l=0|parseInt(u[1],10),c=u[2];l!==0&&(l6(c,l),h6(t,c,u[3]),t.getTag().insertRules(l,i)),i.length=0}else i.push(a)}}};function p6(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Tx=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(Ra,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ra,"active"),r.setAttribute("data-styled-version","6.0.7");var o=p6();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},m6=function(){function t(e){this.element=Tx(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Oc(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),g6=function(){function t(e){this.element=Tx(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),y6=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),IS=SE,v6={isServer:!SE,useCSSOMInjection:!K9},Sx=function(){function t(e,n,r){e===void 0&&(e=Pa),n===void 0&&(n={});var i=this;this.options=an(an({},v6),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&SE&&IS&&(IS=!1,function(s){for(var o=document.querySelectorAll(c6),a=0,u=o.length;a<u;a++){var l=o[a];l&&l.getAttribute(Ra)!=="active"&&(f6(s,l),l.parentNode&&l.parentNode.removeChild(l))}}(this)),RE(this,function(){return function(s){for(var o=s.getTag(),a=o.length,u="",l=function(d){var h=function(m){return ef.get(m)}(d);if(h===void 0)return"continue";var f=s.names.get(h),v=o.getGroup(d);if(f===void 0||v.length===0)return"continue";var y="".concat(Ra,".g").concat(d,'[id="').concat(h,'"]'),w="";f!==void 0&&f.forEach(function(m){m.length>0&&(w+="".concat(m,","))}),u+="".concat(v).concat(y,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)l(c);return u}(i)})}return t.registerId=function(e){return hd(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(an(an({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new y6(i):r?new m6(i):new g6(i)}(this.options),new u6(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(hd(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(hd(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(hd(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),_6=/&/g,w6=/^\s*\/\/.*$/gm;function Ax(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ax(n.children,e)),n})}function E6(t){var e,n,r,i=t===void 0?Pa:t,s=i.options,o=s===void 0?Pa:s,a=i.plugins,u=a===void 0?Fp:a,l=function(h,f,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):h},c=u.slice();c.push(function(h){h.type===Op&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(_6,n).replace(r,l))}),o.prefix&&c.push(G9),c.push(B9);var d=function(h,f,v,y){f===void 0&&(f=""),v===void 0&&(v=""),y===void 0&&(y="&"),e=y,n=f,r=new RegExp("\\".concat(n,"\\b"),"g");var w=h.replace(w6,""),m=U9(v||f?"".concat(v," ").concat(f," { ").concat(w," }"):w);o.namespace&&(m=Ax(m,o.namespace));var p=[];return Zh(m,z9(c.concat(q9(function(g){return p.push(g)})))),p};return d.hash=u.length?u.reduce(function(h,f){return f.name||Oc(15),Mo(h,f.name)},5381).toString():"",d}var I6=new Sx,uv=E6(),Rx=ea.createContext({shouldForwardProp:void 0,styleSheet:I6,stylis:uv});Rx.Consumer;ea.createContext(void 0);function TS(){return b.useContext(Rx)}var T6=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=uv);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,RE(this,function(){throw Oc(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=uv),this.name+e.hash},t}(),S6=function(t){return t>="A"&&t<="Z"};function SS(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;S6(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Px=function(t){return t==null||t===!1||t===""},Cx=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!Px(s)&&(Array.isArray(s)&&s.isCss||Ca(s)?r.push("".concat(SS(i),":"),s,";"):Xl(s)?r.push.apply(r,Kh(Kh(["".concat(i," {")],Cx(s),!1),["}"],!1)):r.push("".concat(SS(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in W9||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Vs(t,e,n,r){if(Px(t))return[];if(AE(t))return[".".concat(t.styledComponentId)];if(Ca(t)){if(!Ca(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Vs(i,e,n,r)}var s;return t instanceof T6?n?(t.inject(n,r),[t.getName(r)]):[t]:Xl(t)?Cx(t):Array.isArray(t)?Array.prototype.concat.apply(Fp,t.map(function(o){return Vs(o,e,n,r)})):[t.toString()]}function A6(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ca(n)&&!AE(n))return!1}return!0}var R6=vx("6.0.7"),P6=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&A6(e),this.componentId=n,this.baseHash=Mo(R6,n),this.baseStyle=r,Sx.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=As(i,this.staticRulesId);else{var s=ES(Vs(this.rules,e,n,r)),o=ov(Mo(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=As(i,o),this.staticRulesId=o}else{for(var u=Mo(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")l+=d;else if(d){var h=ES(Vs(d,e,n,r));u=Mo(u,h),l+=h}}if(l){var f=ov(u>>>0);n.hasNameForId(this.componentId,f)||n.insertRules(this.componentId,f,r(l,".".concat(f),void 0,this.componentId)),i=As(i,f)}}return i},t}(),kx=ea.createContext(void 0);kx.Consumer;var sg={};function C6(t,e,n){var r=AE(t),i=t,s=!rg(t),o=e.attrs,a=o===void 0?Fp:o,u=e.componentId,l=u===void 0?function(g,_){var I=typeof g!="string"?"sc":gS(g);sg[I]=(sg[I]||0)+1;var S="".concat(I,"-").concat(J9("6.0.7"+I+sg[I]));return _?"".concat(_,"-").concat(S):S}(e.displayName,e.parentComponentId):u,c=e.displayName;c===void 0&&function(g){return rg(g)?"styled.".concat(g):"Styled(".concat(Z9(g),")")}(t);var d=e.displayName&&e.componentId?"".concat(gS(e.displayName),"-").concat(e.componentId):e.componentId||l,h=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,f=e.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(e.shouldForwardProp){var y=e.shouldForwardProp;f=function(g,_){return v(g,_)&&y(g,_)}}else f=v}var w=new P6(n,d,r?i.componentStyle:void 0);function m(g,_){return function(I,S,C){var L=I.attrs,J=I.componentStyle,z=I.defaultProps,Ne=I.foldedComponentIds,$e=I.styledComponentId,Ut=I.target,Tr=ea.useContext(kx),it=TS(),fn=I.shouldForwardProp||it.shouldForwardProp,Ge=function(T,O,q){for(var K,Y=an(an({},O),{className:void 0,theme:q}),ne=0;ne<T.length;ne+=1){var Ue=Ca(K=T[ne])?K(Y):K;for(var Ce in Ue)Y[Ce]=Ce==="className"?As(Y[Ce],Ue[Ce]):Ce==="style"?an(an({},Y[Ce]),Ue[Ce]):Ue[Ce]}return O.className&&(Y.className=As(Y.className,O.className)),Y}(L,S,H9(S,Tr,z)||Pa),F=Ge.as||Ut,H={};for(var Q in Ge)Ge[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"||(Q==="forwardedAs"?H.as=Ge.forwardedAs:fn&&!fn(Q,F)||(H[Q]=Ge[Q]));var E=function(T,O){var q=TS(),K=T.generateAndInjectStyles(O,q.styleSheet,q.stylis);return K}(J,Ge),P=As(Ne,$e);return E&&(P+=" "+E),Ge.className&&(P+=" "+Ge.className),H[rg(F)&&!yx.has(F)?"class":"className"]=P,H.ref=C,b.createElement(F,H)}(p,g,_)}var p=ea.forwardRef(m);return p.attrs=h,p.componentStyle=w,p.shouldForwardProp=f,p.foldedComponentIds=r?As(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=d,p.target=r?i.target:t,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(_){for(var I=[],S=1;S<arguments.length;S++)I[S-1]=arguments[S];for(var C=0,L=I;C<L.length;C++)av(_,L[C],!0);return _}({},i.defaultProps,g):g}}),RE(p,function(){return".".concat(p.styledComponentId)}),s&&Ix(p,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function AS(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var RS=function(t){return Object.assign(t,{isCss:!0})};function $p(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ca(t)||Xl(t)){var r=t;return RS(Vs(AS(Fp,Kh([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Vs(i):RS(Vs(AS(i,e)))}function lv(t,e,n){if(n===void 0&&(n=Pa),!e)throw Oc(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,$p.apply(void 0,Kh([i],s,!1)))};return r.attrs=function(i){return lv(t,e,an(an({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return lv(t,e,an(an({},n),i))},r}var bx=function(t){return lv(C6,t)},$t=bx;yx.forEach(function(t){$t[t]=bx(t)});const k6=$p`
background-color: black;
color: white;
border: none;
    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
     
    }
`,b6=$p`

    background-color: white;
    color: black;
    border: 1px solid black;
   
 
    &:hover{
      background-color: black;
      color: white;
      border: none;
    }
  
  

`,x6=$p`

    background-color: #4285f4;
    color: white;
    // width: 500px;
    // margin-left: 20px;
    
        &:hover{
      background-color: #357ae8;
      border:none ;
    }
  
`,N6=t=>t.isGoogleSignIn?x6:t.inverted?b6:k6,D6=$t.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 15px;
background-color: black;
color: white;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center;

    
${N6}
`,Jl=({children:t,...e})=>k.jsx(D6,{...e,children:t}),lr={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:" CLEAR_CART"},xx=()=>({type:lr.TOGGLE_CART_HIDDEN}),Nx=t=>({type:lr.ADD_ITEM,payload:t}),O6=t=>({type:lr.REMOVE_ITEM,payload:t}),V6=t=>({type:lr.CLEAR_ITEM_FROM_CART,payload:t}),L6=()=>({type:lr.CLEAR_CART}),M6=({item:t,addItem:e})=>{const{name:n,price:r,imageUrl:i}=t;return k.jsxs("div",{className:"collection-item",children:[k.jsx("div",{className:"image",style:{backgroundImage:`url(${i})`}}),k.jsxs("div",{className:"collection-footer",children:[k.jsx("span",{className:"name",children:n}),k.jsx("span",{className:"price",children:r})]}),k.jsx(Jl,{onClick:()=>e(t),inverted:"true",children:" Add to cart"})]})},F6=t=>({addItem:e=>t(Nx(e))}),Dx=An(null,F6)(M6),$6=$t.div`
  display: flex;
  flex-direction: column;
`,U6=$t.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`,j6=$t.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }
`,B6=({collection:t})=>{const{title:e,items:n}=t;return k.jsxs($6,{children:[k.jsx(U6,{children:e}),k.jsx(j6,{children:n.map(r=>k.jsx(Dx,{item:r},r.id))})]})},z6=t=>({collection:TM(aR().collectionId)(t)}),q6=An(z6)(B6);const G6=({title:t,items:e})=>k.jsxs("div",{className:"collection-preview",children:[k.jsx("h1",{className:"title",children:t.toUpperCase()}),k.jsx("div",{className:"preview",children:e.filter((n,r)=>r<4).map(n=>k.jsx(Dx,{item:n},n.id))})]}),W6=({collections:t})=>k.jsx("div",{className:"collections-overview",children:t.map(({id:e,...n})=>k.jsx(G6,{...n},e))}),K6=no({collections:SM}),H6=An(K6)(W6),Q6=$t.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Y6=$t.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`,Ox=t=>({isLoading:n,...r})=>n?k.jsx(Q6,{children:k.jsx(Y6,{})}):k.jsx(t,{...r}),X6=Ox(H6),J6=Ox(q6),Z6=({fetchCollectionsStart:t,isCollectionFetching:e,isCollectionsLoaded:n})=>(b.useEffect(()=>{t()},[t]),aR(),k.jsx("div",{className:"shop-page",children:k.jsxs(cR,{children:[k.jsx(_s,{path:"/",element:k.jsx(X6,{isLoading:e})}),k.jsx(_s,{path:"/:collectionId",element:k.jsx(J6,{isLoading:!n})})]})})),eq=t=>({isCollectionFetching:AM(t),isCollectionsLoaded:RM(t)}),tq=t=>({fetchCollectionsStart:()=>t(S9())}),nq=An(eq,tq)(Z6),rq=t=>t.directory,iq=$n([rq],t=>t.sections);const sq=({title:t,imageUrl:e,size:n,linkUrl:r})=>k.jsxs(g_,{to:r,className:`menu-item ${n}`,children:[k.jsx("div",{className:"background-image",style:{backgroundImage:`url(${e})`}}),k.jsxs("div",{className:"content",children:[k.jsx("h1",{className:"title",children:t.toUpperCase()}),k.jsx("span",{className:"subtitle",children:"SHOP NOW"})]})]}),oq=({sections:t})=>k.jsx("div",{className:"directory-menu",children:t.map(({title:e,imageUrl:n,size:r,id:i,linkUrl:s})=>k.jsx(sq,{title:e,imageUrl:n,size:r,linkUrl:s},i))}),aq=no({sections:iq}),uq=An(aq)(oq),lq=$t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`,cq=()=>k.jsx(lq,{children:k.jsx(uq,{})}),Vx=t=>t.cart,Up=$n([Vx],t=>t.cartItems),dq=$n([Vx],t=>t.hidden),hq=$n([Up],t=>t.reduce((e,n)=>e+n.quantity,0)),fq=$n([Up],t=>t.reduce((e,n)=>e+n.quantity*n.price,0));const pq=({toggleCartHidden:t,itemCount:e})=>k.jsx("div",{className:"cart-icon",onClick:t,children:k.jsx("span",{className:"item-count",children:e})}),mq=t=>({toggleCartHidden:()=>t(xx())}),gq=no({itemCount:hq}),yq=An(gq,mq)(pq);const vq=({item:{imageUrl:t,price:e,name:n,quantity:r}})=>k.jsxs("div",{className:"cart-item",children:[k.jsx("img",{src:t,alt:"item"}),k.jsxs("div",{className:"item-details",children:[k.jsx("span",{className:"name",children:n}),k.jsxs("span",{className:"price",children:[r," x $",e]})]})]}),_q=$t.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;

`,wq=$t.div`
height: 240px;
display: flex;
flex-direction: column;
overflow: scroll;
`,Eq=$t(Jl)`
padding:0;
margin-top:auto;
`,Iq=$t.span`
font-size: 18px;
margin: 50px auto;
`,Tq=({cartItems:t,dispatch:e})=>{const n=m_();return k.jsxs(_q,{children:[k.jsx(wq,{children:t.length?t.map(r=>k.jsx(vq,{item:r},r.id)):k.jsx(Iq,{children:"Your cart is empty"})}),k.jsx(Eq,{onClick:()=>{n("/checkout"),e(xx())},children:"GO TO CHECKOUT"})]})},Sq=no({cartItems:Up}),Aq=An(Sq)(Tq),Rq=t=>t.user,Lx=$n([Rq],t=>t.currentUser),Pq=$t.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`,Cq=$t(g_)`
  height: 100%;
  width: 70px;
  padding: 25px;
`,kq=$t.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,fd=$t(g_)`
     padding:10px 15px;
     cursor: pointer;
`,Oe={GOOGLE_SIGN_IN_START:"GOOLE_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:" SIGN_UP_SUCCESS",SIGN_UP_FAILURE:" SIGN_UP_FAILURE"},bq=()=>({type:Oe.GOOGLE_SIGN_IN_START}),xq=t=>({type:Oe.SIGN_IN_SUCCESS,payload:t}),jp=t=>({type:Oe.SIGN_IN_FAILURE,payload:t}),Nq=t=>({type:Oe.EMAIL_SIGN_IN_START,payload:t}),Dq=()=>({type:Oe.CHECK_USER_SESSION}),Oq=()=>({type:Oe.SIGN_OUT_START}),Vq=()=>({type:Oe.SIGN_OUT_SUCCESS}),Lq=t=>({type:Oe.SIGN_OUT_FAILURE,payload:t}),Mq=t=>({type:Oe.SIGN_UP_START,payload:t}),Fq=({user:t,additionalData:e})=>({type:Oe.SIGN_UP_SUCCESS,payload:{user:t,additionalData:e}}),$q=t=>({type:Oe.SIGN_UP_FAILURE,payload:t}),Uq=({currentUser:t,hidden:e,signOutStart:n})=>k.jsxs(Pq,{children:[k.jsx(Cq,{to:"/",children:k.jsx("img",{src:"../../assets/4.1 favicon.ico.ico",alt:"crwn-logo"})}),k.jsxs(kq,{children:[k.jsx(fd,{to:"/shop",children:"SHOP"}),k.jsx(fd,{to:"/shop",children:"CONTACT"}),t?k.jsx(fd,{as:"div",onClick:n,children:"SIGN OUT"}):k.jsx(fd,{to:"/signin",children:"SIGN IN"}),k.jsx(yq,{})]}),e?null:k.jsx(Aq,{})]}),jq=no({currentUser:Lx,hidden:dq}),Bq=t=>({signOutStart:()=>t(Oq())}),zq=An(jq,Bq)(Uq);const Fo=({handleChange:t,label:e,...n})=>k.jsxs("div",{className:"group",children:[k.jsx("input",{className:"form-input",onChange:t,...n}),e?k.jsxs("label",{className:`${n.value.length?"shrink ":""} form-input-label`,children:[" ",e]}):null]});const qq=({emailSignInStart:t,googleSignInStart:e})=>{const[n,r]=b.useState({email:"",password:""}),{email:i,password:s}=n,o=async u=>{u.preventDefault(),t(i,s)},a=u=>{const{value:l,name:c}=u.target;r({...n,[c]:l})};return k.jsxs("div",{className:"sign-in",children:[k.jsx("h2",{children:"I already have an account"}),k.jsx("span",{children:"sign in with your email and password"}),k.jsxs("form",{onSubmit:o,children:[k.jsx(Fo,{name:"email",type:"email",value:i,label:"email",required:!0,handleChange:a}),k.jsx(Fo,{name:"password",type:"password",value:s,label:"password",required:!0,handleChange:a}),k.jsxs("div",{className:"buttons",children:[k.jsxs(Jl,{type:"submit",onClick:o,children:[" ","Sign in"]}),k.jsxs(Jl,{type:"button",onClick:e,isGoogleSignIn:!0,children:[" ","Sign in with Google"," "]})]})]})]})},Gq=t=>({googleSignInStart:()=>t(bq()),emailSignInStart:(e,n)=>t(Nq({email:e,password:n}))}),Wq=An(null,Gq)(qq);const Kq=({signUpStart:t})=>{const[e,n]=b.useState({displayName:"",email:"",password:"",confirmPassword:""}),{displayName:r,email:i,password:s,confirmPassword:o}=e,a=async l=>{if(l.preventDefault(),s!==o){alert("Passwords don't match");return}t({displayName:r,email:i,password:s})},u=l=>{const{name:c,value:d}=l.target;n({...e,[c]:d})};return k.jsxs("div",{className:"sign-up",children:[k.jsx("h2",{className:"title",children:"I do not have an account"}),k.jsx("span",{children:"Sign up with your email and password"}),k.jsxs("form",{className:"sign-up-form",onSubmit:a,children:[k.jsx(Fo,{type:"text",name:"displayName",value:r,onChange:u,label:"Display Name",required:!0}),k.jsx(Fo,{type:"email",name:"email",value:i,onChange:u,label:"Email",required:!0}),k.jsx(Fo,{type:"password",name:"password",value:s,onChange:u,label:"Password",required:!0}),k.jsx(Fo,{type:"password",name:"confirmPassword",value:o,onChange:u,label:"Confirm Password",required:!0}),k.jsx(Jl,{type:"submit",children:"SIGN UP"})]})]})},Hq=t=>({signUpStart:e=>t(Mq(e))}),Qq=An(null,Hq)(Kq);const Yq=()=>k.jsxs("div",{className:"sign-in-and-sign-up",children:[k.jsx(Wq,{}),k.jsx(Qq,{})]});var Mx={},Fx={exports:{}},Xq="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Jq=Xq,Zq=Jq;function $x(){}function Ux(){}Ux.resetWarningCache=$x;var eG=function(){function t(r,i,s,o,a,u){if(u!==Zq){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ux,resetWarningCache:$x};return n.PropTypes=n,n};Fx.exports=eG();var tG=Fx.exports;Object.defineProperty(Mx,"__esModule",{value:!0});var Eu=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nG=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),rG=b,_o=jx(rG),iG=tG,de=jx(iG);function jx(t){return t&&t.__esModule?t:{default:t}}function og(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function sG(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function oG(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function aG(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Iu=!1,PS=!1,CS=!1,Bp=function(t){aG(e,t);function e(n){sG(this,e);var r=oG(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return r.onScriptLoaded=function(){e.stripeHandler||(e.stripeHandler=StripeCheckout.configure({key:r.props.stripeKey}),r.hasPendingClick&&r.showStripeDialog())},r.onScriptError=function(){for(var i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];r.hideLoadingDialog(),r.props.onScriptError&&r.props.onScriptError.apply(r,s)},r.onClosed=function(){for(var i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];r._isMounted&&r.setState({open:!1}),r.props.closed&&r.props.closed.apply(r,s)},r.onOpened=function(){for(var i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];r.setState({open:!0}),r.props.opened&&r.props.opened.apply(r,s)},r.getConfig=function(){return["token","image","name","description","amount","locale","currency","panelLabel","zipCode","shippingAddress","billingAddress","email","allowRememberMe","bitcoin","alipay","alipayReusable"].reduce(function(i,s){return Eu({},i,r.props.hasOwnProperty(s)&&og({},s,r.props[s]))},{opened:r.onOpened,closed:r.onClosed})},r.onClick=function(){if(!r.props.disabled)if(CS)try{throw new Error("Tried to call onClick, but StripeCheckout failed to load")}catch{}else e.stripeHandler?r.showStripeDialog():(r.showLoadingDialog(),r.hasPendingClick=!0)},r.handleOnMouseDown=function(){r.setState({buttonActive:!0})},r.handleOnMouseUp=function(){r.setState({buttonActive:!1})},r.state={open:!1,buttonActive:!1},r}return nG(e,[{key:"componentDidMount",value:function(){var r=this;if(this._isMounted=!0,!PS&&!Iu){Iu=!0;var i=document.createElement("script");typeof this.props.onScriptTagCreated=="function"&&this.props.onScriptTagCreated(i),i.src="https://checkout.stripe.com/checkout.js",i.async=1,this.loadPromise=function(){var s=!1,o=new Promise(function(u,l){i.onload=function(){PS=!0,Iu=!1,u(),r.onScriptLoaded()},i.onerror=function(c){CS=!0,Iu=!1,l(c),r.onScriptError(c)}}),a=new Promise(function(u,l){o.then(function(){return s?l({isCanceled:!0}):u()}),o.catch(function(c){return l(s?{isCanceled:!0}:c)})});return{promise:a,cancel:function(){s=!0}}}(),this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError),document.body.appendChild(i)}}},{key:"componentDidUpdate",value:function(){Iu||this.updateStripeHandler()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.loadPromise&&this.loadPromise.cancel(),e.stripeHandler&&this.state.open&&e.stripeHandler.close()}},{key:"updateStripeHandler",value:function(){(!e.stripeHandler||this.props.reconfigureOnUpdate)&&(e.stripeHandler=StripeCheckout.configure({key:this.props.stripeKey}))}},{key:"showLoadingDialog",value:function(){if(this.props.showLoadingDialog){for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];this.props.showLoadingDialog.apply(this,i)}}},{key:"hideLoadingDialog",value:function(){if(this.props.hideLoadingDialog){for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];this.props.hideLoadingDialog.apply(this,i)}}},{key:"showStripeDialog",value:function(){this.hideLoadingDialog(),e.stripeHandler.open(this.getConfig())}},{key:"renderDefaultStripeButton",value:function(){return _o.default.createElement("button",Eu({},og({},this.props.triggerEvent,this.onClick),{className:this.props.className,onMouseDown:this.handleOnMouseDown,onFocus:this.handleOnMouseDown,onMouseUp:this.handleOnMouseUp,onMouseOut:this.handleOnMouseUp,onBlur:this.handleOnMouseUp,style:Eu({},{overflow:"hidden",display:"inline-block",background:"linear-gradient(#28a0e5,#015e94)",border:0,padding:1,textDecoration:"none",borderRadius:5,boxShadow:"0 1px 0 rgba(0,0,0,0.2)",cursor:"pointer",visibility:"visible",userSelect:"none"},this.state.buttonActive&&{background:"#005d93"},this.props.style)}),_o.default.createElement("span",{style:Eu({},{backgroundImage:"linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",color:"#fff",fontWeight:"bold",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",textShadow:"0 -1px 0 rgba(0,0,0,0.25)",borderRadius:4},this.state.buttonActive&&{color:"#eee",boxShadow:"inset 0 1px 0 rgba(0,0,0,0.1)",backgroundImage:"linear-gradient(#008cdd,#008cdd 85%,#239adf)"},this.props.textStyle)},this.props.label))}},{key:"renderDisabledButton",value:function(){return _o.default.createElement("button",{disabled:!0,style:{background:"rgba(0,0,0,0.2)",overflow:"hidden",display:"inline-block",border:0,padding:1,textDecoration:"none",borderRadius:5,userSelect:"none"}},_o.default.createElement("span",{style:{boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",borderRadius:4,color:"#999",background:"#f8f9fa",textShadow:"0 1px 0 rgba(255,255,255,0.5)"}},this.props.label))}},{key:"render",value:function(){this.props.desktopShowModal===!0&&!this.state.open?this.onClick():this.props.desktopShowModal===!1&&this.state.open&&e.stripeHandler.close();var r=this.props.ComponentClass;return this.props.children?_o.default.createElement(r,Eu({},og({},this.props.triggerEvent,this.onClick),{children:this.props.children})):this.props.disabled?this.renderDisabledButton():this.renderDefaultStripeButton()}}]),e}(_o.default.Component);Bp.defaultProps={className:"StripeCheckout",label:"Pay With Card",locale:"auto",ComponentClass:"span",reconfigureOnUpdate:!1,triggerEvent:"onClick"};Bp.propTypes={desktopShowModal:de.default.bool,triggerEvent:de.default.oneOf(["onClick","onTouchTap","onTouchStart"]),label:de.default.string,style:de.default.object,textStyle:de.default.object,disabled:de.default.bool,ComponentClass:de.default.string,showLoadingDialog:de.default.func,hideLoadingDialog:de.default.func,onScriptError:de.default.func,onScriptTagCreated:de.default.func,reconfigureOnUpdate:de.default.bool,stripeKey:de.default.string.isRequired,token:de.default.func.isRequired,name:de.default.string,description:de.default.string,image:de.default.string,amount:de.default.number,locale:de.default.oneOf(["auto","zh","da","nl","en","fr","de","it","ja","no","es","sv"]),currency:de.default.oneOf(["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BIF","BMD","BND","BOB","BRL","BSD","BWP","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ETB","EUR","FJD","FKP","GBP","GEL","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","ISK","JMD","JPY","KES","KGS","KHR","KMF","KRW","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","MAD","MDL","MGA","MKD","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SZL","THB","TJS","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMW"]),panelLabel:de.default.string,zipCode:de.default.bool,billingAddress:de.default.bool,shippingAddress:de.default.bool,email:de.default.string,allowRememberMe:de.default.bool,bitcoin:de.default.bool,alipay:de.default.oneOf(["auto",!0,!1]),alipayReusable:de.default.bool,opened:de.default.func,closed:de.default.func};Bp._isMounted=!1;var uG=Mx.default=Bp;const lG=({price:t})=>{const e=t*100,n="pk_test_51NQrwfIlXxtnNnAT28DBTBPxNFn2Cc034zhzV5q3kkz1lCOWlb1YUWiPuUDWeCJKgn6VGmWCNM0QIredOsannUcT00rZq0Op8Y",r=i=>{fetch("http://localhost:5000/payment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:e,token:i})}).then(s=>{if(!s.ok)throw new Error("Payment Error");if(s.status===204){console.log("Payment successful");return}return s.json()}).then(s=>{}).catch(s=>{console.error("Payment Error: ",s),alert("There was an issue with your payment!")})};return k.jsx(uG,{label:"Pay Now",name:"CRWN Clothing Ltd.",image:"https://svgshare.com/i/CUz.svg",description:`Your total is $${t}`,amount:e,panelLabel:"Pay Now",token:r,stripeKey:n})};const cG=({cartItem:t,clearItem:e,addItem:n,removeItem:r})=>{const{name:i,imageUrl:s,price:o,quantity:a}=t;return k.jsxs("div",{className:"checkout-item",children:[k.jsx("div",{className:"image-container",children:k.jsx("img",{src:s,alt:"item"})}),k.jsx("span",{className:"name",children:i}),k.jsxs("span",{className:"quantity",children:[k.jsx("div",{className:"arrow",onClick:()=>r(t),children:k.jsx("i",{className:"fa-solid fa-chevron-left"})}),k.jsx("span",{className:"value",children:a}),k.jsx("div",{className:"arrow",onClick:()=>n(t),children:k.jsx("i",{className:"fa-solid fa-chevron-right"})})]}),k.jsx("span",{className:"price",children:o}),k.jsx("div",{className:"remove-button",onClick:()=>e(t),children:" X "})]})},dG=t=>({clearItem:e=>t(V6(e)),addItem:e=>t(Nx(e)),removeItem:e=>t(O6(e))}),hG=An(null,dG)(cG);const fG=({cartItems:t,total:e})=>k.jsxs("div",{className:"checkout-page",children:[k.jsxs("div",{className:"checkout-header",children:[k.jsx("div",{className:"header-block",children:k.jsx("span",{children:"Product"})}),k.jsx("div",{className:"header-block",children:k.jsx("span",{children:"Description"})}),k.jsx("div",{className:"header-block",children:k.jsx("span",{children:"Quantity"})}),k.jsx("div",{className:"header-block",children:k.jsx("span",{children:"Price"})}),k.jsx("div",{className:"header-block",children:k.jsx("span",{children:"Remove"})})]}),t.map(n=>k.jsx(hG,{cartItem:n},n.id)),k.jsxs("div",{className:"total",children:[k.jsxs("span",{children:["TOTAL: $",e," "]}),k.jsx(lG,{price:e}),k.jsxs("div",{className:"test-warning",children:["*please use the following test credit card for payments*",k.jsx("br",{}),"4242 4242 4242 4242 - Exp:01/25 - CVV:123"]})]})]}),pG=no({cartItems:Up,total:fq}),mG=An(pG)(fG),gG=({checkUserSession:t,currentUser:e})=>(b.useEffect(()=>{t()},[t]),k.jsxs(k.Fragment,{children:[k.jsx(zq,{}),k.jsxs(cR,{children:[k.jsx(_s,{path:"/",element:k.jsx(cq,{})}),k.jsx(_s,{path:"/shop/*",element:k.jsx(nq,{})}),"//Route automatically passes 3 objects to shoppage",k.jsx(_s,{exact:!0,path:"/checkout",element:k.jsx(mG,{})}),k.jsx(_s,{exact:!0,path:"/signin",element:e?k.jsx(eL,{to:"/",replace:!0}):k.jsx(Yq,{})})]})]})),yG=no({currentUser:Lx}),vG=t=>({checkUserSession:()=>t(Dq())}),_G=An(yG,vG)(gG);function Bd(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Bd=function(n){return typeof n}:Bd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Bd(t)}function wG(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function kS(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function EG(t,e,n){return e&&kS(t.prototype,e),n&&kS(t,n),t}function IG(t,e){return e&&(Bd(e)==="object"||typeof e=="function")?e:zd(t)}function cv(t){return cv=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},cv(t)}function zd(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function TG(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&dv(t,e)}function dv(t,e){return dv=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},dv(t,e)}function qd(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Bx=function(t){TG(e,t);function e(){var n,r;wG(this,e);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=IG(this,(n=cv(e)).call.apply(n,[this].concat(s))),qd(zd(r),"state",{bootstrapped:!1}),qd(zd(r),"_unsubscribe",void 0),qd(zd(r),"handlePersistorState",function(){var a=r.props.persistor,u=a.getState(),l=u.bootstrapped;l&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return EG(e,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),e}(b.PureComponent);qd(Bx,"defaultProps",{children:null,loading:null});function Zl(t){"@babel/helpers - typeof";return Zl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zl(t)}function SG(t,e){if(Zl(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Zl(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function AG(t){var e=SG(t,"string");return Zl(e)==="symbol"?e:String(e)}function RG(t,e,n){return e=AG(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function bS(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function xS(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?bS(Object(n),!0).forEach(function(r){RG(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):bS(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ot(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var NS=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),ag=function(){return Math.random().toString(36).substring(7).split("").join(".")},tf={INIT:"@@redux/INIT"+ag(),REPLACE:"@@redux/REPLACE"+ag(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ag()}};function PG(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function PE(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ot(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ot(1));return n(PE)(t,e)}if(typeof t!="function")throw new Error(Ot(2));var i=t,s=e,o=[],a=o,u=!1;function l(){a===o&&(a=o.slice())}function c(){if(u)throw new Error(Ot(3));return s}function d(y){if(typeof y!="function")throw new Error(Ot(4));if(u)throw new Error(Ot(5));var w=!0;return l(),a.push(y),function(){if(w){if(u)throw new Error(Ot(6));w=!1,l();var p=a.indexOf(y);a.splice(p,1),o=null}}}function h(y){if(!PG(y))throw new Error(Ot(7));if(typeof y.type>"u")throw new Error(Ot(8));if(u)throw new Error(Ot(9));try{u=!0,s=i(s,y)}finally{u=!1}for(var w=o=a,m=0;m<w.length;m++){var p=w[m];p()}return y}function f(y){if(typeof y!="function")throw new Error(Ot(10));i=y,h({type:tf.REPLACE})}function v(){var y,w=d;return y={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(Ot(11));function g(){p.next&&p.next(c())}g();var _=w(g);return{unsubscribe:_}}},y[NS]=function(){return this},y}return h({type:tf.INIT}),r={dispatch:h,subscribe:d,getState:c,replaceReducer:f},r[NS]=v,r}function CG(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:tf.INIT});if(typeof r>"u")throw new Error(Ot(12));if(typeof n(void 0,{type:tf.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ot(13))})}function kG(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{CG(n)}catch(a){o=a}return function(u,l){if(u===void 0&&(u={}),o)throw o;for(var c=!1,d={},h=0;h<s.length;h++){var f=s[h],v=n[f],y=u[f],w=v(y,l);if(typeof w>"u")throw l&&l.type,new Error(Ot(14));d[f]=w,c=c||w!==y}return c=c||s.length!==Object.keys(u).length,c?d:u}}function zx(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function bG(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(Ot(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(u){return u(o)});return s=zx.apply(void 0,a)(i.dispatch),xS(xS({},i),{},{dispatch:s})}}}var CE="persist:",qx="persist/FLUSH",kE="persist/REHYDRATE",Gx="persist/PAUSE",Wx="persist/PERSIST",Kx="persist/PURGE",Hx="persist/REGISTER",xG=-1;function Gd(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Gd=function(n){return typeof n}:Gd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Gd(t)}function DS(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function NG(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?DS(n,!0).forEach(function(r){DG(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):DS(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function DG(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function OG(t,e,n,r){r.debug;var i=NG({},n);return t&&Gd(t)==="object"&&Object.keys(t).forEach(function(s){s!=="_persist"&&e[s]===n[s]&&(i[s]=t[s])}),i}function VG(t){var e=t.blacklist||null,n=t.whitelist||null,r=t.transforms||[],i=t.throttle||0,s="".concat(t.keyPrefix!==void 0?t.keyPrefix:CE).concat(t.key),o=t.storage,a;t.serialize===!1?a=function(I){return I}:typeof t.serialize=="function"?a=t.serialize:a=LG;var u=t.writeFailHandler||null,l={},c={},d=[],h=null,f=null,v=function(I){Object.keys(I).forEach(function(S){m(S)&&l[S]!==I[S]&&d.indexOf(S)===-1&&d.push(S)}),Object.keys(l).forEach(function(S){I[S]===void 0&&m(S)&&d.indexOf(S)===-1&&l[S]!==void 0&&d.push(S)}),h===null&&(h=setInterval(y,i)),l=I};function y(){if(d.length===0){h&&clearInterval(h),h=null;return}var _=d.shift(),I=r.reduce(function(S,C){return C.in(S,_,l)},l[_]);if(I!==void 0)try{c[_]=a(I)}catch(S){console.error("redux-persist/createPersistoid: error serializing state",S)}else delete c[_];d.length===0&&w()}function w(){Object.keys(c).forEach(function(_){l[_]===void 0&&delete c[_]}),f=o.setItem(s,a(c)).catch(p)}function m(_){return!(n&&n.indexOf(_)===-1&&_!=="_persist"||e&&e.indexOf(_)!==-1)}function p(_){u&&u(_)}var g=function(){for(;d.length!==0;)y();return f||Promise.resolve()};return{update:v,flush:g}}function LG(t){return JSON.stringify(t)}function MG(t){var e=t.transforms||[],n="".concat(t.keyPrefix!==void 0?t.keyPrefix:CE).concat(t.key),r=t.storage;t.debug;var i;return t.deserialize===!1?i=function(o){return o}:typeof t.deserialize=="function"?i=t.deserialize:i=FG,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(u){o[u]=e.reduceRight(function(l,c){return c.out(l,u,a)},i(a[u]))}),o}catch(u){throw u}else return})}function FG(t){return JSON.parse(t)}function $G(t){var e=t.storage,n="".concat(t.keyPrefix!==void 0?t.keyPrefix:CE).concat(t.key);return e.removeItem(n,UG)}function UG(t){}function OS(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ar(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?OS(n,!0).forEach(function(r){jG(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):OS(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function jG(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function BG(t,e){if(t==null)return{};var n=zG(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function zG(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var qG=5e3;function GG(t,e){var n=t.version!==void 0?t.version:xG;t.debug;var r=t.stateReconciler===void 0?OG:t.stateReconciler,i=t.getStoredState||MG,s=t.timeout!==void 0?t.timeout:qG,o=null,a=!1,u=!0,l=function(d){return d._persist.rehydrated&&o&&!u&&o.update(d),d};return function(c,d){var h=c||{},f=h._persist,v=BG(h,["_persist"]),y=v;if(d.type===Wx){var w=!1,m=function(L,J){w||(d.rehydrate(t.key,L,J),w=!0)};if(s&&setTimeout(function(){!w&&m(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(t.key,'"')))},s),u=!1,o||(o=VG(t)),f)return Ar({},e(y,d),{_persist:f});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(t.key),i(t).then(function(C){var L=t.migrate||function(J,z){return Promise.resolve(J)};L(C,n).then(function(J){m(J)},function(J){m(void 0,J)})},function(C){m(void 0,C)}),Ar({},e(y,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===Kx)return a=!0,d.result($G(t)),Ar({},e(y,d),{_persist:f});if(d.type===qx)return d.result(o&&o.flush()),Ar({},e(y,d),{_persist:f});if(d.type===Gx)u=!0;else if(d.type===kE){if(a)return Ar({},y,{_persist:Ar({},f,{rehydrated:!0})});if(d.key===t.key){var p=e(y,d),g=d.payload,_=r!==!1&&g!==void 0?r(g,c,p,t):p,I=Ar({},_,{_persist:Ar({},f,{rehydrated:!0})});return l(I)}}}if(!f)return e(c,d);var S=e(y,d);return S===y?c:l(Ar({},S,{_persist:f}))}}function VS(t){return HG(t)||KG(t)||WG()}function WG(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function KG(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function HG(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function LS(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function hv(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?LS(n,!0).forEach(function(r){QG(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):LS(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function QG(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Qx={registry:[],bootstrapped:!1},YG=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Qx,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Hx:return hv({},e,{registry:[].concat(VS(e.registry),[n.key])});case kE:var r=e.registry.indexOf(n.key),i=VS(e.registry);return i.splice(r,1),hv({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function XG(t,e,n){var r=n||!1,i=PE(YG,Qx,e&&e.enhancer?e.enhancer:void 0),s=function(l){i.dispatch({type:Hx,key:l})},o=function(l,c,d){var h={type:kE,payload:c,err:d,key:l};t.dispatch(h),i.dispatch(h),r&&a.getState().bootstrapped&&(r(),r=!1)},a=hv({},i,{purge:function(){var l=[];return t.dispatch({type:Kx,result:function(d){l.push(d)}}),Promise.all(l)},flush:function(){var l=[];return t.dispatch({type:qx,result:function(d){l.push(d)}}),Promise.all(l)},pause:function(){t.dispatch({type:Gx})},persist:function(){t.dispatch({type:Wx,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}var fv={exports:{}};(function(t,e){(function(n,r){r(e)})(tu,function(n){function r(E,P){E.super_=P,E.prototype=Object.create(P.prototype,{constructor:{value:E,enumerable:!1,writable:!0,configurable:!0}})}function i(E,P){Object.defineProperty(this,"kind",{value:E,enumerable:!0}),P&&P.length&&Object.defineProperty(this,"path",{value:P,enumerable:!0})}function s(E,P,T){s.super_.call(this,"E",E),Object.defineProperty(this,"lhs",{value:P,enumerable:!0}),Object.defineProperty(this,"rhs",{value:T,enumerable:!0})}function o(E,P){o.super_.call(this,"N",E),Object.defineProperty(this,"rhs",{value:P,enumerable:!0})}function a(E,P){a.super_.call(this,"D",E),Object.defineProperty(this,"lhs",{value:P,enumerable:!0})}function u(E,P,T){u.super_.call(this,"A",E),Object.defineProperty(this,"index",{value:P,enumerable:!0}),Object.defineProperty(this,"item",{value:T,enumerable:!0})}function l(E,P,T){var O=E.slice((T||P)+1||E.length);return E.length=P<0?E.length+P:P,E.push.apply(E,O),E}function c(E){var P=typeof E>"u"?"undefined":it(E);return P!=="object"?P:E===Math?"math":E===null?"null":Array.isArray(E)?"array":Object.prototype.toString.call(E)==="[object Date]"?"date":typeof E.toString=="function"&&/^\/.*\//.test(E.toString())?"regexp":"object"}function d(E,P,T,O,q,K,Y){q=q||[],Y=Y||[];var ne=q.slice(0);if(typeof K<"u"){if(O){if(typeof O=="function"&&O(ne,K))return;if((typeof O>"u"?"undefined":it(O))==="object"){if(O.prefilter&&O.prefilter(ne,K))return;if(O.normalize){var Ue=O.normalize(ne,K,E,P);Ue&&(E=Ue[0],P=Ue[1])}}}ne.push(K)}c(E)==="regexp"&&c(P)==="regexp"&&(E=E.toString(),P=P.toString());var Ce=typeof E>"u"?"undefined":it(E),Jt=typeof P>"u"?"undefined":it(P),ve=Ce!=="undefined"||Y&&Y[Y.length-1].lhs&&Y[Y.length-1].lhs.hasOwnProperty(K),wt=Jt!=="undefined"||Y&&Y[Y.length-1].rhs&&Y[Y.length-1].rhs.hasOwnProperty(K);if(!ve&&wt)T(new o(ne,P));else if(!wt&&ve)T(new a(ne,E));else if(c(E)!==c(P))T(new s(ne,E,P));else if(c(E)==="date"&&E-P!==0)T(new s(ne,E,P));else if(Ce==="object"&&E!==null&&P!==null)if(Y.filter(function(We){return We.lhs===E}).length)E!==P&&T(new s(ne,E,P));else{if(Y.push({lhs:E,rhs:P}),Array.isArray(E)){var _e;for(E.length,_e=0;_e<E.length;_e++)_e>=P.length?T(new u(ne,_e,new a(void 0,E[_e]))):d(E[_e],P[_e],T,O,ne,_e,Y);for(;_e<P.length;)T(new u(ne,_e,new o(void 0,P[_e++])))}else{var rs=Object.keys(E),Sr=Object.keys(P);rs.forEach(function(We,ho){var Ja=Sr.indexOf(We);Ja>=0?(d(E[We],P[We],T,O,ne,We,Y),Sr=l(Sr,Ja)):d(E[We],void 0,T,O,ne,We,Y)}),Sr.forEach(function(We){d(void 0,P[We],T,O,ne,We,Y)})}Y.length=Y.length-1}else E!==P&&(Ce==="number"&&isNaN(E)&&isNaN(P)||T(new s(ne,E,P)))}function h(E,P,T,O){return O=O||[],d(E,P,function(q){q&&O.push(q)},T),O.length?O:void 0}function f(E,P,T){if(T.path&&T.path.length){var O,q=E[P],K=T.path.length-1;for(O=0;O<K;O++)q=q[T.path[O]];switch(T.kind){case"A":f(q[T.path[O]],T.index,T.item);break;case"D":delete q[T.path[O]];break;case"E":case"N":q[T.path[O]]=T.rhs}}else switch(T.kind){case"A":f(E[P],T.index,T.item);break;case"D":E=l(E,P);break;case"E":case"N":E[P]=T.rhs}return E}function v(E,P,T){if(E&&P&&T&&T.kind){for(var O=E,q=-1,K=T.path?T.path.length-1:0;++q<K;)typeof O[T.path[q]]>"u"&&(O[T.path[q]]=typeof T.path[q]=="number"?[]:{}),O=O[T.path[q]];switch(T.kind){case"A":f(T.path?O[T.path[q]]:O,T.index,T.item);break;case"D":delete O[T.path[q]];break;case"E":case"N":O[T.path[q]]=T.rhs}}}function y(E,P,T){if(T.path&&T.path.length){var O,q=E[P],K=T.path.length-1;for(O=0;O<K;O++)q=q[T.path[O]];switch(T.kind){case"A":y(q[T.path[O]],T.index,T.item);break;case"D":q[T.path[O]]=T.lhs;break;case"E":q[T.path[O]]=T.lhs;break;case"N":delete q[T.path[O]]}}else switch(T.kind){case"A":y(E[P],T.index,T.item);break;case"D":E[P]=T.lhs;break;case"E":E[P]=T.lhs;break;case"N":E=l(E,P)}return E}function w(E,P,T){if(E&&P&&T&&T.kind){var O,q,K=E;for(q=T.path.length-1,O=0;O<q;O++)typeof K[T.path[O]]>"u"&&(K[T.path[O]]={}),K=K[T.path[O]];switch(T.kind){case"A":y(K[T.path[O]],T.index,T.item);break;case"D":K[T.path[O]]=T.lhs;break;case"E":K[T.path[O]]=T.lhs;break;case"N":delete K[T.path[O]]}}}function m(E,P,T){if(E&&P){var O=function(q){T&&!T(E,P,q)||v(E,P,q)};d(E,P,O)}}function p(E){return"color: "+F[E].color+"; font-weight: bold"}function g(E){var P=E.kind,T=E.path,O=E.lhs,q=E.rhs,K=E.index,Y=E.item;switch(P){case"E":return[T.join("."),O,"→",q];case"N":return[T.join("."),q];case"D":return[T.join(".")];case"A":return[T.join(".")+"["+K+"]",Y];default:return[]}}function _(E,P,T,O){var q=h(E,P);try{O?T.groupCollapsed("diff"):T.group("diff")}catch{T.log("diff")}q?q.forEach(function(K){var Y=K.kind,ne=g(K);T.log.apply(T,["%c "+F[Y].text,p(Y)].concat(fn(ne)))}):T.log("—— no diff ——");try{T.groupEnd()}catch{T.log("—— diff end —— ")}}function I(E,P,T,O){switch(typeof E>"u"?"undefined":it(E)){case"object":return typeof E[O]=="function"?E[O].apply(E,fn(T)):E[O];case"function":return E(P);default:return E}}function S(E){var P=E.timestamp,T=E.duration;return function(O,q,K){var Y=["action"];return Y.push("%c"+String(O.type)),P&&Y.push("%c@ "+q),T&&Y.push("%c(in "+K.toFixed(2)+" ms)"),Y.join(" ")}}function C(E,P){var T=P.logger,O=P.actionTransformer,q=P.titleFormatter,K=q===void 0?S(P):q,Y=P.collapsed,ne=P.colors,Ue=P.level,Ce=P.diff,Jt=typeof P.titleFormatter>"u";E.forEach(function(ve,wt){var _e=ve.started,rs=ve.startedTime,Sr=ve.action,We=ve.prevState,ho=ve.error,Ja=ve.took,is=ve.nextState,Qp=E[wt+1];Qp&&(is=Qp.prevState,Ja=Qp.started-_e);var Zn=O(Sr),zE=typeof Y=="function"?Y(function(){return is},Sr,ve):Y,VN=Ut(rs),LN=ne.title?"color: "+ne.title(Zn)+";":"",Za=["color: gray; font-weight: lighter;"];Za.push(LN),P.timestamp&&Za.push("color: gray; font-weight: lighter;"),P.duration&&Za.push("color: gray; font-weight: lighter;");var eu=K(Zn,VN,Ja);try{zE?ne.title&&Jt?T.groupCollapsed.apply(T,["%c "+eu].concat(Za)):T.groupCollapsed(eu):ne.title&&Jt?T.group.apply(T,["%c "+eu].concat(Za)):T.group(eu)}catch{T.log(eu)}var Yp=I(Ue,Zn,[We],"prevState"),Xp=I(Ue,Zn,[Zn],"action"),Jp=I(Ue,Zn,[ho,We],"error"),Zp=I(Ue,Zn,[is],"nextState");if(Yp)if(ne.prevState){var MN="color: "+ne.prevState(We)+"; font-weight: bold";T[Yp]("%c prev state",MN,We)}else T[Yp]("prev state",We);if(Xp)if(ne.action){var FN="color: "+ne.action(Zn)+"; font-weight: bold";T[Xp]("%c action    ",FN,Zn)}else T[Xp]("action    ",Zn);if(ho&&Jp)if(ne.error){var $N="color: "+ne.error(ho,We)+"; font-weight: bold;";T[Jp]("%c error     ",$N,ho)}else T[Jp]("error     ",ho);if(Zp)if(ne.nextState){var UN="color: "+ne.nextState(is)+"; font-weight: bold";T[Zp]("%c next state",UN,is)}else T[Zp]("next state",is);Ce&&_(We,is,T,zE);try{T.groupEnd()}catch{T.log("—— log end ——")}})}function L(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},P=Object.assign({},H,E),T=P.logger,O=P.stateTransformer,q=P.errorTransformer,K=P.predicate,Y=P.logErrors,ne=P.diffPredicate;if(typeof T>"u")return function(){return function(Ce){return function(Jt){return Ce(Jt)}}};if(E.getState&&E.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
// Logger with default options
import { logger } from 'redux-logger'
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
// Or you can create your own logger with custom options http://bit.ly/redux-logger-options
import createLogger from 'redux-logger'
const logger = createLogger({
  // ...options
});
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
`),function(){return function(Ce){return function(Jt){return Ce(Jt)}}};var Ue=[];return function(Ce){var Jt=Ce.getState;return function(ve){return function(wt){if(typeof K=="function"&&!K(Jt,wt))return ve(wt);var _e={};Ue.push(_e),_e.started=Tr.now(),_e.startedTime=new Date,_e.prevState=O(Jt()),_e.action=wt;var rs=void 0;if(Y)try{rs=ve(wt)}catch(We){_e.error=q(We)}else rs=ve(wt);_e.took=Tr.now()-_e.started,_e.nextState=O(Jt());var Sr=P.diff&&typeof ne=="function"?ne(Jt,wt):P.diff;if(C(Ue,Object.assign({},P,{diff:Sr})),Ue.length=0,_e.error)throw _e.error;return rs}}}}var J,z,Ne=function(E,P){return new Array(P+1).join(E)},$e=function(E,P){return Ne("0",P-E.toString().length)+E},Ut=function(E){return $e(E.getHours(),2)+":"+$e(E.getMinutes(),2)+":"+$e(E.getSeconds(),2)+"."+$e(E.getMilliseconds(),3)},Tr=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,it=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},fn=function(E){if(Array.isArray(E)){for(var P=0,T=Array(E.length);P<E.length;P++)T[P]=E[P];return T}return Array.from(E)},Ge=[];J=(typeof tu>"u"?"undefined":it(tu))==="object"&&tu?tu:typeof window<"u"?window:{},z=J.DeepDiff,z&&Ge.push(function(){typeof z<"u"&&J.DeepDiff===h&&(J.DeepDiff=z,z=void 0)}),r(s,i),r(o,i),r(a,i),r(u,i),Object.defineProperties(h,{diff:{value:h,enumerable:!0},observableDiff:{value:d,enumerable:!0},applyDiff:{value:m,enumerable:!0},applyChange:{value:v,enumerable:!0},revertChange:{value:w,enumerable:!0},isConflict:{value:function(){return typeof z<"u"},enumerable:!0},noConflict:{value:function(){return Ge&&(Ge.forEach(function(E){E()}),Ge=null),h},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},H={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(E){return E},actionTransformer:function(E){return E},errorTransformer:function(E){return E},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},Q=function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},P=E.dispatch,T=E.getState;return typeof P=="function"||typeof T=="function"?L()({dispatch:P,getState:T}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};n.defaults=H,n.createLogger=L,n.logger=Q,n.default=Q,Object.defineProperty(n,"__esModule",{value:!0})})})(fv,fv.exports);var JG=fv.exports;const ZG=mv(JG);var Jn=function(e){return"@@redux-saga/"+e},eW=Jn("CANCEL_PROMISE"),Yx=Jn("CHANNEL_END"),Xx=Jn("IO"),MS=Jn("MATCH"),Jx=Jn("MULTICAST"),Zx=Jn("SAGA_ACTION"),eN=Jn("SELF_CANCELLATION"),tW=Jn("TASK"),Zo=Jn("TASK_CANCEL"),tN=Jn("TERMINATE"),nW=Jn("LOCATION"),nN=function(e){return e==null},Wd=function(e){return e!=null},hn=function(e){return typeof e=="function"},bE=function(e){return typeof e=="string"},ns=Array.isArray,zp=function(e){return e&&hn(e.then)},xE=function(e){return e&&hn(e.next)&&hn(e.throw)},FS=function t(e){return e&&(bE(e)||iN(e)||hn(e)||ns(e)&&e.every(t))},NE=function(e){return e&&hn(e.take)&&hn(e.close)},rN=function(e){return hn(e)&&e.hasOwnProperty("toString")},iN=function(e){return!!e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype},rW=function(e){return NE(e)&&e[Jx]},iW=function(e){return function(){return e}},sW=iW(!0),qt=function(){},oW=function(e){return e},DE=function(e,n){Ri(e,n),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(n).forEach(function(r){e[r]=n[r]})},aW=function(e,n){var r;return(r=[]).concat.apply(r,n.map(e))};function qp(t,e){var n=t.indexOf(e);n>=0&&t.splice(n,1)}function uW(t){var e=!1;return function(){e||(e=!0,t())}}var lW=function(e){throw e},cW=function(e){return{value:e,done:!0}};function pv(t,e,n){e===void 0&&(e=lW),n===void 0&&(n="iterator");var r={meta:{name:n},next:t,throw:e,return:cW,isSagaIterator:!0};return typeof Symbol<"u"&&(r[Symbol.iterator]=function(){return r}),r}function dW(t,e){var n=e.sagaStack;console.error(t),console.error(n)}var sN=function(e){return Array.apply(null,new Array(e))},hW=function(e){return function(n){return e(Object.defineProperty(n,Zx,{value:!0}))}},oN=function(e){return e===tN},aN=function(e){return e===Zo},uN=function(e){return oN(e)||aN(e)};function lN(t,e){var n=Object.keys(t),r=n.length,i=0,s,o=ns(t)?sN(r):{},a={};function u(){i===r&&(s=!0,e(o))}return n.forEach(function(l){var c=function(h,f){s||(f||uN(h)?(e.cancel(),e(h,f)):(o[l]=h,i++,u()))};c.cancel=qt,a[l]=c}),e.cancel=function(){s||(s=!0,n.forEach(function(l){return a[l].cancel()}))},a}function OE(t){return{name:t.name||"anonymous",location:cN(t)}}function cN(t){return t[nW]}var fW="Channel's Buffer overflow!",pW=1,mW=3,dN=4;function gW(t,e){t===void 0&&(t=10);var n=new Array(t),r=0,i=0,s=0,o=function(c){n[i]=c,i=(i+1)%t,r++},a=function(){if(r!=0){var c=n[s];return n[s]=null,r--,s=(s+1)%t,c}},u=function(){for(var c=[];r;)c.push(a());return c};return{isEmpty:function(){return r==0},put:function(c){if(r<t)o(c);else{var d;switch(e){case pW:throw new Error(fW);case mW:n[i]=c,i=(i+1)%t,s=i;break;case dN:d=2*t,n=u(),r=n.length,i=n.length,s=0,n.length=d,t=d,o(c);break}}},take:a,flush:u}}var yW=function(e){return gW(e,dN)},Kd="TAKE",hN="PUT",fN="ALL",vW="RACE",pN="CALL",_W="CPS",mN="FORK",wW="JOIN",gN="CANCEL",EW="SELECT",IW="ACTION_CHANNEL",TW="CANCELLED",SW="FLUSH",AW="GET_CONTEXT",RW="SET_CONTEXT",ki=function(e,n){var r;return r={},r[Xx]=!0,r.combinator=!1,r.type=e,r.payload=n,r};function yN(t,e){if(t===void 0&&(t="*"),FS(t))return Wd(e)&&console.warn("take(pattern) takes one argument but two were provided. Consider passing an array for listening to several action types"),ki(Kd,{pattern:t});if(rW(t)&&Wd(e)&&FS(e))return ki(Kd,{channel:t,pattern:e});if(NE(t))return Wd(e)&&console.warn("take(channel) takes one argument but two were provided. Second argument is ignored."),ki(Kd,{channel:t})}function Mn(t,e){return nN(e)&&(e=t,t=void 0),ki(hN,{channel:t,action:e})}function VE(t){var e=ki(fN,t);return e.combinator=!0,e}function vN(t,e){var n=null,r;return hn(t)?r=t:(ns(t)?(n=t[0],r=t[1]):(n=t.context,r=t.fn),n&&bE(r)&&hn(n[r])&&(r=n[r])),{context:n,fn:r,args:e}}function Cn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return ki(pN,vN(t,n))}function Gp(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return ki(mN,vN(t,n))}function PW(t){return t===void 0&&(t=eN),ki(gN,t)}function CW(){var t={};return t.promise=new Promise(function(e,n){t.resolve=e,t.reject=n}),t}var _N=[],Wp=0;function kW(t){try{LE(),t()}finally{IN()}}function wN(t){_N.push(t),Wp||(LE(),TN())}function EN(t){try{return LE(),t()}finally{TN()}}function LE(){Wp++}function IN(){Wp--}function TN(){IN();for(var t;!Wp&&(t=_N.shift())!==void 0;)kW(t)}var bW=function(e){return function(n){return e.some(function(r){return ME(r)(n)})}},xW=function(e){return function(n){return e(n)}},$S=function(e){return function(n){return n.type===String(e)}},NW=function(e){return function(n){return n.type===e}},SN=function(){return sW};function ME(t){var e=t==="*"?SN:bE(t)?$S:ns(t)?bW:rN(t)?$S:hn(t)?xW:iN(t)?NW:null;if(e===null)throw new Error("invalid pattern: "+t);return e(t)}var tl={type:Yx},FE=function(e){return e&&e.type===Yx};function DW(t){t===void 0&&(t=yW());var e=!1,n=[];function r(a){if(!e){if(n.length===0)return t.put(a);var u=n.shift();u(a)}}function i(a){e&&t.isEmpty()?a(tl):t.isEmpty()?(n.push(a),a.cancel=function(){qp(n,a)}):a(t.take())}function s(a){if(e&&t.isEmpty()){a(tl);return}a(t.flush())}function o(){if(!e){e=!0;var a=n;n=[];for(var u=0,l=a.length;u<l;u++){var c=a[u];c(tl)}}}return{take:i,put:r,flush:s,close:o}}function OW(){var t,e=!1,n=[],r=n,i=function(){r===n&&(r=n.slice())},s=function(){e=!0;var a=n=r;r=[],a.forEach(function(u){u(tl)})};return t={},t[Jx]=!0,t.put=function(a){if(!e){if(FE(a)){s();return}for(var u=n=r,l=0,c=u.length;l<c;l++){var d=u[l];d[MS](a)&&(d.cancel(),d(a))}}},t.take=function(a,u){if(u===void 0&&(u=SN),e){a(tl);return}a[MS]=u,i(),r.push(a),a.cancel=uW(function(){i(),qp(r,a)})},t.close=s,t}function AN(){var t=OW(),e=t.put;return t.put=function(n){if(n[Zx]){e(n);return}wN(function(){e(n)})},t}var ms=0,kr=1,Hd=2,RN=3;function $E(t,e){var n=t[eW];hn(n)&&(e.cancel=n),t.then(e,function(r){e(r,!0)})}var Vc=0,PN=function(){return++Vc},Et;function VW(t,e){return t.isSagaIterator?{name:t.meta.name}:OE(e)}function LW(t){var e=t.context,n=t.fn,r=t.args;try{var i=n.apply(e,r);if(xE(i))return i;var s=!1,o=function(u){return s?{value:u,done:!0}:(s=!0,{value:i,done:!zp(i)})};return pv(o)}catch(a){return pv(function(){throw a})}}function MW(t,e,n){var r=e.channel,i=e.action,s=e.resolve;wN(function(){var o;try{o=(r?r.put:t.dispatch)(i)}catch(a){n(a,!0);return}s&&zp(o)?$E(o,n):n(o)})}function FW(t,e,n){var r=e.channel,i=r===void 0?t.channel:r,s=e.pattern,o=e.maybe,a=function(l){if(l instanceof Error){n(l,!0);return}if(FE(l)&&!o){n(tN);return}n(l)};try{i.take(a,Wd(s)?ME(s):null)}catch(u){n(u,!0);return}n.cancel=a.cancel}function $W(t,e,n,r){var i=e.context,s=e.fn,o=e.args,a=r.task;try{var u=s.apply(i,o);if(zp(u)){$E(u,n);return}if(xE(u)){Kp(t,u,a.context,Vc,OE(s),!1,n);return}n(u)}catch(l){n(l,!0)}}function UW(t,e,n){var r=e.context,i=e.fn,s=e.args;try{var o=function(u,l){nN(u)?n(l):n(u,!0)};i.apply(r,s.concat(o)),o.cancel&&(n.cancel=o.cancel)}catch(a){n(a,!0)}}function jW(t,e,n,r){var i=e.context,s=e.fn,o=e.args,a=e.detached,u=r.task,l=LW({context:i,fn:s,args:o}),c=VW(l,s);EN(function(){var d=Kp(t,l,u.context,Vc,c,a,void 0);a?n(d):d.isRunning()?(u.queue.addTask(d),n(d)):d.isAborted()?u.queue.abort(d.error()):n(d)})}function BW(t,e,n,r){var i=r.task,s=function(u,l){if(u.isRunning()){var c={task:i,cb:l};l.cancel=function(){u.isRunning()&&qp(u.joiners,c)},u.joiners.push(c)}else u.isAborted()?l(u.error(),!0):l(u.result())};if(ns(e)){if(e.length===0){n([]);return}var o=lN(e,n);e.forEach(function(a,u){s(a,o[u])})}else s(e,n)}function ug(t){t.isRunning()&&t.cancel()}function zW(t,e,n,r){var i=r.task;e===eN?ug(i):ns(e)?e.forEach(ug):ug(e),n()}function qW(t,e,n,r){var i=r.digestEffect,s=Vc,o=Object.keys(e);if(o.length===0){n(ns(e)?[]:{});return}var a=lN(e,n);o.forEach(function(u){i(e[u],s,a[u],u)})}function GW(t,e,n,r){var i=r.digestEffect,s=Vc,o=Object.keys(e),a=ns(e)?sN(o.length):{},u={},l=!1;o.forEach(function(c){var d=function(f,v){l||(v||uN(f)?(n.cancel(),n(f,v)):(n.cancel(),l=!0,a[c]=f,n(a)))};d.cancel=qt,u[c]=d}),n.cancel=function(){l||(l=!0,o.forEach(function(c){return u[c].cancel()}))},o.forEach(function(c){l||i(e[c],s,u[c],c)})}function WW(t,e,n){var r=e.selector,i=e.args;try{var s=r.apply(void 0,[t.getState()].concat(i));n(s)}catch(o){n(o,!0)}}function KW(t,e,n){var r=e.pattern,i=e.buffer,s=DW(i),o=ME(r),a=function l(c){FE(c)||t.channel.take(l,o),s.put(c)},u=s.close;s.close=function(){a.cancel(),u()},t.channel.take(a,o),n(s)}function HW(t,e,n,r){var i=r.task;n(i.isCancelled())}function QW(t,e,n){e.flush(n)}function YW(t,e,n,r){var i=r.task;n(i.context[e])}function XW(t,e,n,r){var i=r.task;DE(i.context,e),n()}var JW=(Et={},Et[Kd]=FW,Et[hN]=MW,Et[fN]=qW,Et[vW]=GW,Et[pN]=$W,Et[_W]=UW,Et[mN]=jW,Et[wW]=BW,Et[gN]=zW,Et[EW]=WW,Et[IW]=KW,Et[TW]=HW,Et[SW]=QW,Et[AW]=YW,Et[RW]=XW,Et);function ZW(t,e,n){var r=[],i,s=!1;u(t);var o=function(){return r};function a(c){e(),l(),n(c,!0)}function u(c){r.push(c),c.cont=function(d,h){s||(qp(r,c),c.cont=qt,h?a(d):(c===t&&(i=d),r.length||(s=!0,n(i))))}}function l(){s||(s=!0,r.forEach(function(c){c.cont=qt,c.cancel()}),r=[])}return{addTask:u,cancelAll:l,abort:a,getTasks:o}}function CN(t,e){return t+"?"+e}function eK(t){var e=cN(t);if(e){var n=e.code,r=e.fileName,i=e.lineNumber,s=n+"  "+CN(r,i);return s}return""}function US(t){var e=t.name,n=t.location;return n?e+"  "+CN(n.fileName,n.lineNumber):e}function tK(t){var e=aW(function(n){return n.cancelledTasks},t);return e.length?["Tasks cancelled due to error:"].concat(e).join(`
`):""}var UE=null,nl=[],nK=function(e){e.crashedEffect=UE,nl.push(e)},kN=function(){UE=null,nl.length=0},rK=function(e){UE=e},iK=function(){var e=nl[0],n=nl.slice(1),r=e.crashedEffect?eK(e.crashedEffect):null,i="The above error occurred in task "+US(e.meta)+(r?` 
 when executing effect `+r:"");return[i].concat(n.map(function(s){return"    created by "+US(s.meta)}),[tK(nl)]).join(`
`)};function sK(t,e,n,r,i,s,o){var a;o===void 0&&(o=qt);var u=ms,l,c,d=null,h=[],f=Object.create(n),v=ZW(e,function(){h.push.apply(h,v.getTasks().map(function(I){return I.meta.name}))},w);function y(){u===ms&&(u=kr,v.cancelAll(),w(Zo,!1))}function w(_,I){if(!I)_===Zo?u=kr:u!==kr&&(u=RN),l=_,d&&d.resolve(_);else{if(u=Hd,nK({meta:i,cancelledTasks:h}),g.isRoot){var S=iK();kN(),t.onError(_,{sagaStack:S})}c=_,d&&d.reject(_)}g.cont(_,I),g.joiners.forEach(function(C){C.cb(_,I)}),g.joiners=null}function m(_){DE(f,_)}function p(){return d||(d=CW(),u===Hd?d.reject(c):u!==ms&&d.resolve(l)),d.promise}var g=(a={},a[tW]=!0,a.id=r,a.meta=i,a.isRoot=s,a.context=f,a.joiners=[],a.queue=v,a.cancel=y,a.cont=o,a.end=w,a.setContext=m,a.toPromise=p,a.isRunning=function(){return u===ms},a.isCancelled=function(){return u===kr||u===ms&&e.status===kr},a.isAborted=function(){return u===Hd},a.result=function(){return l},a.error=function(){return c},a);return g}function Kp(t,e,n,r,i,s,o){var a=t.finalizeRunEffect(f);h.cancel=qt;var u={meta:i,cancel:d,status:ms},l=sK(t,u,n,r,i,s,o),c={task:l,digestEffect:v};function d(){u.status===ms&&(u.status=kr,h(Zo))}return o&&(o.cancel=l.cancel),h(),l;function h(y,w){try{var m;w?(m=e.throw(y),kN()):aN(y)?(u.status=kr,h.cancel(),m=hn(e.return)?e.return(Zo):{done:!0,value:Zo}):oN(y)?m=hn(e.return)?e.return():{done:!0}:m=e.next(y),m.done?(u.status!==kr&&(u.status=RN),u.cont(m.value)):v(m.value,r,h)}catch(p){if(u.status===kr)throw p;u.status=Hd,u.cont(p,!0)}}function f(y,w,m){if(zp(y))$E(y,m);else if(xE(y))Kp(t,y,l.context,w,i,!1,m);else if(y&&y[Xx]){var p=JW[y.type];p(t,y.payload,m,c)}else m(y)}function v(y,w,m,p){p===void 0&&(p="");var g=PN();t.sagaMonitor&&t.sagaMonitor.effectTriggered({effectId:g,parentEffectId:w,label:p,effect:y});var _;function I(S,C){_||(_=!0,m.cancel=qt,t.sagaMonitor&&(C?t.sagaMonitor.effectRejected(g,S):t.sagaMonitor.effectResolved(g,S)),C&&rK(y),m(S,C))}I.cancel=qt,m.cancel=function(){_||(_=!0,I.cancel(),I.cancel=qt,t.sagaMonitor&&t.sagaMonitor.effectCancelled(g))},a(y,g,I)}}function oK(t,e){for(var n=t.channel,r=n===void 0?AN():n,i=t.dispatch,s=t.getState,o=t.context,a=o===void 0?{}:o,u=t.sagaMonitor,l=t.effectMiddlewares,c=t.onError,d=c===void 0?dW:c,h=arguments.length,f=new Array(h>2?h-2:0),v=2;v<h;v++)f[v-2]=arguments[v];var y=e.apply(void 0,f),w=PN();u&&(u.rootSagaStarted=u.rootSagaStarted||qt,u.effectTriggered=u.effectTriggered||qt,u.effectResolved=u.effectResolved||qt,u.effectRejected=u.effectRejected||qt,u.effectCancelled=u.effectCancelled||qt,u.actionDispatched=u.actionDispatched||qt,u.rootSagaStarted({effectId:w,saga:e,args:f}));var m;if(l){var p=zx.apply(void 0,l);m=function(I){return function(S,C,L){var J=function(Ne){return I(Ne,C,L)};return p(J)(S)}}}else m=oW;var g={channel:r,dispatch:hW(i),getState:s,sagaMonitor:u,onError:d,finalizeRunEffect:m};return EN(function(){var _=Kp(g,y,a,w,OE(e),!0,void 0);return u&&u.effectResolved(w,_),_})}function aK(t){var e=t===void 0?{}:t,n=e.context,r=n===void 0?{}:n,i=e.channel,s=i===void 0?AN():i,o=e.sagaMonitor,a=y_(e,["context","channel","sagaMonitor"]),u;function l(c){var d=c.getState,h=c.dispatch;return u=oK.bind(null,Ri({},a,{context:r,channel:s,dispatch:h,getState:d,sagaMonitor:o})),function(f){return function(v){o&&o.actionDispatched&&o.actionDispatched(v);var y=f(v);return s.put(v),y}}}return l.run=function(){return u.apply(void 0,arguments)},l.setContext=function(c){DE(r,c)},l}var jS=function(e){return{done:!0,value:e}},lg={};function bN(t){return NE(t)?"channel":rN(t)?String(t):hn(t)?t.name:String(t)}function xN(t,e,n){var r,i,s,o=e;function a(u,l){if(o===lg)return jS(u);if(l&&!i)throw o=lg,l;r&&r(u);var c=l?t[i](l):t[o]();return o=c.nextState,s=c.effect,r=c.stateUpdater,i=c.errorState,o===lg?jS(u):s}return pv(a,function(u){return a(null,u)},n)}function uK(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s={done:!1,value:yN(t)},o=function(c){return{done:!1,value:Gp.apply(void 0,[e].concat(r,[c]))}},a,u=function(c){return a=c};return xN({q1:function(){return{nextState:"q2",effect:s,stateUpdater:u}},q2:function(){return{nextState:"q1",effect:o(a)}}},"q1","takeEvery("+bN(t)+", "+e.name+")")}function lK(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s={done:!1,value:yN(t)},o=function(f){return{done:!1,value:Gp.apply(void 0,[e].concat(r,[f]))}},a=function(f){return{done:!1,value:PW(f)}},u,l,c=function(f){return u=f},d=function(f){return l=f};return xN({q1:function(){return{nextState:"q2",effect:s,stateUpdater:d}},q2:function(){return u?{nextState:"q3",effect:a(u)}:{nextState:"q1",effect:o(l),stateUpdater:c}},q3:function(){return{nextState:"q1",effect:o(l),stateUpdater:c}}},"q1","takeLatest("+bN(t)+", "+e.name+")")}function cK(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return Gp.apply(void 0,[uK,t,e].concat(r))}function Xa(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return Gp.apply(void 0,[lK,t,e].concat(r))}function*dK(){yield console.log("i am fired");try{const t=lx.collection("collections");console.log(t);const e=yield t.get(),n=yield Cn(I9,e);yield Mn(A9(n))}catch(t){yield Mn(R9(t.messsage))}}function*hK(){yield cK(Cs.FETCH_COLLECTIONS_START,dK)}function*Hp(t,e){try{const r=yield(yield Cn(E9,t,e)).get();yield Mn(xq({id:r.id,...r.data()}))}catch(n){yield Mn(jp(n))}}function*fK(){try{const{user:t}=yield Dc.signInWithPopup(cx);yield Hp(t)}catch(t){yield Mn(jp(t))}}function*pK({payload:{email:t,password:e}}){try{const{user:n}=yield Dc.signInWithEmailAndPassword(t,e);yield Hp(n)}catch(n){yield Mn(jp(n))}}function*mK(){try{const t=yield T9();if(!t)return;yield Hp(t)}catch(t){yield Mn(jp(t))}}function*gK(){try{yield Dc.signOut(),yield Mn(Vq())}catch{yield Mn(Lq())}}function*yK({payload:{email:t,password:e,displayName:n}}){try{const{user:r}=yield Dc.createUserWithEmailAndPassword(t,e);yield Mn(Fq({user:r,additionalData:{displayName:n}}))}catch(r){yield Mn($q(r))}}function*vK({payload:{user:t,additionalData:e}}){yield Hp(t,e)}function*_K(){yield Xa(Oe.GOOGLE_SIGN_IN_START,fK)}function*wK(){yield Xa(Oe.EMAIL_SIGN_IN_START,pK)}function*EK(){yield Xa(Oe.SIGN_OUT_START,gK)}function*IK(){yield Xa(Oe.SIGN_UP_START,yK)}function*TK(){yield Xa(Oe.SIGN_UP_SUCCESS,vK)}function*SK(){yield VE([Cn(_K),Cn(wK),Cn(mK),Cn(EK),Cn(IK),Cn(TK)])}function*AK(){yield Mn(L6())}function*RK(){yield Xa(Oe.SIGN_OUT_SUCCESS,AK)}function*PK(){yield VE([Cn(RK)])}function*CK(){yield VE([Cn(hK),Cn(SK),Cn(PK)])}const kK=(t,e)=>t.find(r=>r.id===e.id)?t.map(r=>r.id===e.id?{...r,quantity:r.quantity+1}:r):[...t,{...e,quantity:1}],bK=(t,e)=>t.find(r=>r.id===e.id).quantity===1?t.filter(r=>r.id!==e.id):t.map(r=>r.id===e.id?{...r,quantity:r.quantity-1}:r),xK={hidden:!0,cartItems:[]},NK=(t=xK,e)=>{switch(e.type){case lr.TOGGLE_CART_HIDDEN:return{...t,hidden:!t.hidden};case lr.ADD_ITEM:return{...t,cartItems:kK(t.cartItems,e.payload)};case lr.CLEAR_ITEM_FROM_CART:return{...t,cartItems:t.cartItems.filter(n=>n.id!==e.payload.id)};case lr.REMOVE_ITEM:return{...t,cartItems:bK(t.cartItems,e.payload)};case lr.CLEAR_CART:return{...t,cartItems:[]};default:return t}};var jE={},BE={};BE.__esModule=!0;BE.default=VK;function Qd(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Qd=function(n){return typeof n}:Qd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Qd(t)}function cg(){}var DK={getItem:cg,setItem:cg,removeItem:cg};function OK(t){if((typeof self>"u"?"undefined":Qd(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function VK(t){var e="".concat(t,"Storage");return OK(e)?self[e]:DK}jE.__esModule=!0;jE.default=FK;var LK=MK(BE);function MK(t){return t&&t.__esModule?t:{default:t}}function FK(t){var e=(0,LK.default)(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}var NN=void 0,$K=UK(jE);function UK(t){return t&&t.__esModule?t:{default:t}}var jK=(0,$K.default)("local");NN=jK;const BK={currentUser:null,error:null},zK=(t=BK,e)=>{switch(e.type){case Oe.SET_CURRENT_USER:return{...t,currentUser:e.payload};case Oe.SIGN_IN_SUCCESS:return{...t,currentUser:e.payload,error:null};case Oe.SIGN_OUT_SUCCESS:return{...t,currentUser:null,error:null};case Oe.SIGN_OUT_FAILURE:case Oe.SIGN_IN_FAILURE:case Oe.SIGN_UP_FAILURE:return{...t,error:e.payload};default:return t}},qK={sections:[{title:"hats",imageUrl:"../../src/assets/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"../../src/assets/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"../../src/assets/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"../../src/assets/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"../../src/assets/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},GK=(t=qK,e)=>{switch(e.type){default:return t}},WK={collections:null,isFetching:!1,errorMessage:void 0},KK=(t=WK,e)=>{switch(e.type){case Cs.FETCH_COLLECTIONS_START:return{...t,isFetching:!0};case Cs.FETCH_COLLECTIONS_SUCCESS:return{...t,isFetching:!1,collections:e.payload};case Cs.FETCH_COLLECTIONS_FAILURE:return{...t,isFetching:!1,errorMessage:e.payload};default:return t}},HK={key:"root",storage:NN,whitelist:["cart"]},QK=kG({user:zK,cart:NK,directory:GK,shop:KK}),YK=GG(HK,QK),DN=aK(),XK=[ZG,DN],ON=PE(YK,bG(...XK));DN.run(CK);const JK=XG(ON);dg.createRoot(document.getElementById("root")).render(k.jsx(mM,{store:ON,children:k.jsx(aL,{children:k.jsx(Bx,{persistor:JK,children:k.jsx(_G,{})})})}));
