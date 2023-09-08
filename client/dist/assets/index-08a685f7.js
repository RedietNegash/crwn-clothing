function BN(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jS={exports:{}},nf={},BS={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ec=Symbol.for("react.element"),zN=Symbol.for("react.portal"),qN=Symbol.for("react.fragment"),GN=Symbol.for("react.strict_mode"),WN=Symbol.for("react.profiler"),KN=Symbol.for("react.provider"),HN=Symbol.for("react.context"),QN=Symbol.for("react.forward_ref"),YN=Symbol.for("react.suspense"),XN=Symbol.for("react.memo"),JN=Symbol.for("react.lazy"),zE=Symbol.iterator;function ZN(t){return t===null||typeof t!="object"?null:(t=zE&&t[zE]||t["@@iterator"],typeof t=="function"?t:null)}var zS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qS=Object.assign,GS={};function ka(t,e,n){this.props=t,this.context=e,this.refs=GS,this.updater=n||zS}ka.prototype.isReactComponent={};ka.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ka.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function WS(){}WS.prototype=ka.prototype;function gv(t,e,n){this.props=t,this.context=e,this.refs=GS,this.updater=n||zS}var yv=gv.prototype=new WS;yv.constructor=gv;qS(yv,ka.prototype);yv.isPureReactComponent=!0;var qE=Array.isArray,KS=Object.prototype.hasOwnProperty,vv={current:null},HS={key:!0,ref:!0,__self:!0,__source:!0};function QS(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)KS.call(e,r)&&!HS.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ec,type:t,key:s,ref:o,props:i,_owner:vv.current}}function eD(t,e){return{$$typeof:ec,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _v(t){return typeof t=="object"&&t!==null&&t.$$typeof===ec}function tD(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var GE=/\/+/g;function em(t,e){return typeof t=="object"&&t!==null&&t.key!=null?tD(""+t.key):e.toString(36)}function pd(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ec:case zN:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+em(o,0):r,qE(i)?(n="",t!=null&&(n=t.replace(GE,"$&/")+"/"),pd(i,e,n,"",function(l){return l})):i!=null&&(_v(i)&&(i=eD(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(GE,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",qE(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+em(s,a);o+=pd(s,e,n,u,i)}else if(u=ZN(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+em(s,a++),o+=pd(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Lc(t,e,n){if(t==null)return t;var r=[],i=0;return pd(t,r,"","",function(s){return e.call(n,s,i++)}),r}function nD(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},md={transition:null},rD={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:md,ReactCurrentOwner:vv};se.Children={map:Lc,forEach:function(t,e,n){Lc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Lc(t,function(){e++}),e},toArray:function(t){return Lc(t,function(e){return e})||[]},only:function(t){if(!_v(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=ka;se.Fragment=qN;se.Profiler=WN;se.PureComponent=gv;se.StrictMode=GN;se.Suspense=YN;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rD;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=qS({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vv.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)KS.call(e,u)&&!HS.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:ec,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:HN,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:KN,_context:t},t.Consumer=t};se.createElement=QS;se.createFactory=function(t){var e=QS.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:QN,render:t}};se.isValidElement=_v;se.lazy=function(t){return{$$typeof:JN,_payload:{_status:-1,_result:t},_init:nD}};se.memo=function(t,e){return{$$typeof:XN,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=md.transition;md.transition={};try{t()}finally{md.transition=e}};se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};se.useCallback=function(t,e){return Yt.current.useCallback(t,e)};se.useContext=function(t){return Yt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};se.useEffect=function(t,e){return Yt.current.useEffect(t,e)};se.useId=function(){return Yt.current.useId()};se.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return Yt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};se.useRef=function(t){return Yt.current.useRef(t)};se.useState=function(t){return Yt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return Yt.current.useTransition()};se.version="18.2.0";BS.exports=se;var b=BS.exports;const ea=mv(b),iD=BN({__proto__:null,default:ea},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sD=b,oD=Symbol.for("react.element"),aD=Symbol.for("react.fragment"),uD=Object.prototype.hasOwnProperty,lD=sD.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cD={key:!0,ref:!0,__self:!0,__source:!0};function YS(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)uD.call(e,r)&&!cD.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:oD,type:t,key:s,ref:o,props:i,_owner:lD.current}}nf.Fragment=aD;nf.jsx=YS;nf.jsxs=YS;jS.exports=nf;var k=jS.exports,dg={},XS={exports:{}},In={},JS={exports:{}},ZS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,H){var Q=F.length;F.push(H);e:for(;0<Q;){var E=Q-1>>>1,P=F[E];if(0<i(P,H))F[E]=H,F[Q]=P,Q=E;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],Q=F.pop();if(Q!==H){F[0]=Q;e:for(var E=0,P=F.length,T=P>>>1;E<T;){var O=2*(E+1)-1,q=F[O],K=O+1,Y=F[K];if(0>i(q,Q))K<P&&0>i(Y,q)?(F[E]=Y,F[K]=Q,E=K):(F[E]=q,F[O]=Q,E=O);else if(K<P&&0>i(Y,Q))F[E]=Y,F[K]=Q,E=K;else break e}}return H}function i(F,H){var Q=F.sortIndex-H.sortIndex;return Q!==0?Q:F.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],l=[],c=1,d=null,h=3,f=!1,v=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(F){for(var H=n(l);H!==null;){if(H.callback===null)r(l);else if(H.startTime<=F)r(l),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(l)}}function _(F){if(y=!1,g(F),!v)if(n(u)!==null)v=!0,fn(I);else{var H=n(l);H!==null&&We(_,H.startTime-F)}}function I(F,H){v=!1,y&&(y=!1,m(L),L=-1),f=!0;var Q=h;try{for(g(H),d=n(u);d!==null&&(!(d.expirationTime>H)||F&&!De());){var E=d.callback;if(typeof E=="function"){d.callback=null,h=d.priorityLevel;var P=E(d.expirationTime<=H);H=t.unstable_now(),typeof P=="function"?d.callback=P:d===n(u)&&r(u),g(H)}else r(u);d=n(u)}if(d!==null)var T=!0;else{var O=n(l);O!==null&&We(_,O.startTime-H),T=!1}return T}finally{d=null,h=Q,f=!1}}var S=!1,C=null,L=-1,J=5,z=-1;function De(){return!(t.unstable_now()-z<J)}function Ue(){if(C!==null){var F=t.unstable_now();z=F;var H=!0;try{H=C(!0,F)}finally{H?Ut():(S=!1,C=null)}}else S=!1}var Ut;if(typeof p=="function")Ut=function(){p(Ue)};else if(typeof MessageChannel<"u"){var Tr=new MessageChannel,st=Tr.port2;Tr.port1.onmessage=Ue,Ut=function(){st.postMessage(null)}}else Ut=function(){w(Ue,0)};function fn(F){C=F,S||(S=!0,Ut())}function We(F,H){L=w(function(){F(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){v||f||(v=!0,fn(I))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(F){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var Q=h;h=H;try{return F()}finally{h=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Q=h;h=F;try{return H()}finally{h=Q}},t.unstable_scheduleCallback=function(F,H,Q){var E=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?E+Q:E):Q=E,F){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=Q+P,F={id:c++,callback:H,priorityLevel:F,startTime:Q,expirationTime:P,sortIndex:-1},Q>E?(F.sortIndex=Q,e(l,F),n(u)===null&&F===n(l)&&(y?(m(L),L=-1):y=!0,We(_,Q-E))):(F.sortIndex=P,e(u,F),v||f||(v=!0,fn(I))),F},t.unstable_shouldYield=De,t.unstable_wrapCallback=function(F){var H=h;return function(){var Q=h;h=H;try{return F.apply(this,arguments)}finally{h=Q}}}})(ZS);JS.exports=ZS;var dD=JS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e1=b,_n=dD;function D(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t1=new Set,rl={};function eo(t,e){ta(t,e),ta(t+"Capture",e)}function ta(t,e){for(rl[t]=e,t=0;t<e.length;t++)t1.add(e[t])}var $r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hg=Object.prototype.hasOwnProperty,hD=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,WE={},KE={};function fD(t){return hg.call(KE,t)?!0:hg.call(WE,t)?!1:hD.test(t)?KE[t]=!0:(WE[t]=!0,!1)}function pD(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mD(t,e,n,r){if(e===null||typeof e>"u"||pD(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){bt[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];bt[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){bt[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){bt[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){bt[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){bt[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){bt[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){bt[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){bt[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var wv=/[\-:]([a-z])/g;function Ev(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wv,Ev);bt[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wv,Ev);bt[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wv,Ev);bt[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){bt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){bt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Iv(t,e,n,r){var i=bt.hasOwnProperty(e)?bt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mD(e,n,i,r)&&(n=null),r||i===null?fD(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wr=e1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mc=Symbol.for("react.element"),To=Symbol.for("react.portal"),So=Symbol.for("react.fragment"),Tv=Symbol.for("react.strict_mode"),fg=Symbol.for("react.profiler"),n1=Symbol.for("react.provider"),r1=Symbol.for("react.context"),Sv=Symbol.for("react.forward_ref"),pg=Symbol.for("react.suspense"),mg=Symbol.for("react.suspense_list"),Av=Symbol.for("react.memo"),oi=Symbol.for("react.lazy"),i1=Symbol.for("react.offscreen"),HE=Symbol.iterator;function nu(t){return t===null||typeof t!="object"?null:(t=HE&&t[HE]||t["@@iterator"],typeof t=="function"?t:null)}var Fe=Object.assign,tm;function Tu(t){if(tm===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tm=e&&e[1]||""}return`
`+tm+t}var nm=!1;function rm(t,e){if(!t||nm)return"";nm=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{nm=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Tu(t):""}function gD(t){switch(t.tag){case 5:return Tu(t.type);case 16:return Tu("Lazy");case 13:return Tu("Suspense");case 19:return Tu("SuspenseList");case 0:case 2:case 15:return t=rm(t.type,!1),t;case 11:return t=rm(t.type.render,!1),t;case 1:return t=rm(t.type,!0),t;default:return""}}function gg(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case So:return"Fragment";case To:return"Portal";case fg:return"Profiler";case Tv:return"StrictMode";case pg:return"Suspense";case mg:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case r1:return(t.displayName||"Context")+".Consumer";case n1:return(t._context.displayName||"Context")+".Provider";case Sv:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Av:return e=t.displayName||null,e!==null?e:gg(t.type)||"Memo";case oi:e=t._payload,t=t._init;try{return gg(t(e))}catch{}}return null}function yD(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gg(e);case 8:return e===Tv?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function s1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vD(t){var e=s1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fc(t){t._valueTracker||(t._valueTracker=vD(t))}function o1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=s1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Yd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yg(t,e){var n=e.checked;return Fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function QE(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=bi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function a1(t,e){e=e.checked,e!=null&&Iv(t,"checked",e,!1)}function vg(t,e){a1(t,e);var n=bi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_g(t,e.type,n):e.hasOwnProperty("defaultValue")&&_g(t,e.type,bi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function YE(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _g(t,e,n){(e!=="number"||Yd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Su=Array.isArray;function $o(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+bi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function wg(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(D(91));return Fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function XE(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(D(92));if(Su(n)){if(1<n.length)throw Error(D(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:bi(n)}}function u1(t,e){var n=bi(e.value),r=bi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function JE(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function l1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eg(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?l1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $c,c1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($c=$c||document.createElement("div"),$c.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$c.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function il(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_D=["Webkit","ms","Moz","O"];Object.keys(Vu).forEach(function(t){_D.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vu[e]=Vu[t]})});function d1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vu.hasOwnProperty(t)&&Vu[t]?(""+e).trim():e+"px"}function h1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=d1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var wD=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ig(t,e){if(e){if(wD[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(D(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(D(61))}if(e.style!=null&&typeof e.style!="object")throw Error(D(62))}}function Tg(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sg=null;function Rv(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ag=null,Uo=null,jo=null;function ZE(t){if(t=rc(t)){if(typeof Ag!="function")throw Error(D(280));var e=t.stateNode;e&&(e=uf(e),Ag(t.stateNode,t.type,e))}}function f1(t){Uo?jo?jo.push(t):jo=[t]:Uo=t}function p1(){if(Uo){var t=Uo,e=jo;if(jo=Uo=null,ZE(t),e)for(t=0;t<e.length;t++)ZE(e[t])}}function m1(t,e){return t(e)}function g1(){}var im=!1;function y1(t,e,n){if(im)return t(e,n);im=!0;try{return m1(t,e,n)}finally{im=!1,(Uo!==null||jo!==null)&&(g1(),p1())}}function sl(t,e){var n=t.stateNode;if(n===null)return null;var r=uf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(D(231,e,typeof n));return n}var Rg=!1;if($r)try{var ru={};Object.defineProperty(ru,"passive",{get:function(){Rg=!0}}),window.addEventListener("test",ru,ru),window.removeEventListener("test",ru,ru)}catch{Rg=!1}function ED(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var Lu=!1,Xd=null,Jd=!1,Pg=null,ID={onError:function(t){Lu=!0,Xd=t}};function TD(t,e,n,r,i,s,o,a,u){Lu=!1,Xd=null,ED.apply(ID,arguments)}function SD(t,e,n,r,i,s,o,a,u){if(TD.apply(this,arguments),Lu){if(Lu){var l=Xd;Lu=!1,Xd=null}else throw Error(D(198));Jd||(Jd=!0,Pg=l)}}function to(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function v1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function eI(t){if(to(t)!==t)throw Error(D(188))}function AD(t){var e=t.alternate;if(!e){if(e=to(t),e===null)throw Error(D(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return eI(i),t;if(s===r)return eI(i),e;s=s.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?t:e}function _1(t){return t=AD(t),t!==null?w1(t):null}function w1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=w1(t);if(e!==null)return e;t=t.sibling}return null}var E1=_n.unstable_scheduleCallback,tI=_n.unstable_cancelCallback,RD=_n.unstable_shouldYield,PD=_n.unstable_requestPaint,He=_n.unstable_now,CD=_n.unstable_getCurrentPriorityLevel,Pv=_n.unstable_ImmediatePriority,I1=_n.unstable_UserBlockingPriority,Zd=_n.unstable_NormalPriority,kD=_n.unstable_LowPriority,T1=_n.unstable_IdlePriority,rf=null,mr=null;function bD(t){if(mr&&typeof mr.onCommitFiberRoot=="function")try{mr.onCommitFiberRoot(rf,t,void 0,(t.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:DD,xD=Math.log,ND=Math.LN2;function DD(t){return t>>>=0,t===0?32:31-(xD(t)/ND|0)|0}var Uc=64,jc=4194304;function Au(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function eh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Au(a):(s&=o,s!==0&&(r=Au(s)))}else o=n&~i,o!==0?r=Au(o):s!==0&&(r=Au(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Gn(e),i=1<<n,r|=t[n],e&=~i;return r}function OD(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VD(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=OD(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Cg(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function S1(){var t=Uc;return Uc<<=1,!(Uc&4194240)&&(Uc=64),t}function sm(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function tc(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gn(e),t[e]=n}function LD(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Gn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Cv(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Gn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function A1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var R1,kv,P1,C1,k1,kg=!1,Bc=[],yi=null,vi=null,_i=null,ol=new Map,al=new Map,ui=[],MD="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nI(t,e){switch(t){case"focusin":case"focusout":yi=null;break;case"dragenter":case"dragleave":vi=null;break;case"mouseover":case"mouseout":_i=null;break;case"pointerover":case"pointerout":ol.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(e.pointerId)}}function iu(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=rc(e),e!==null&&kv(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function FD(t,e,n,r,i){switch(e){case"focusin":return yi=iu(yi,t,e,n,r,i),!0;case"dragenter":return vi=iu(vi,t,e,n,r,i),!0;case"mouseover":return _i=iu(_i,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ol.set(s,iu(ol.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,al.set(s,iu(al.get(s)||null,t,e,n,r,i)),!0}return!1}function b1(t){var e=gs(t.target);if(e!==null){var n=to(e);if(n!==null){if(e=n.tag,e===13){if(e=v1(n),e!==null){t.blockedOn=e,k1(t.priority,function(){P1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gd(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bg(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sg=r,n.target.dispatchEvent(r),Sg=null}else return e=rc(n),e!==null&&kv(e),t.blockedOn=n,!1;e.shift()}return!0}function rI(t,e,n){gd(t)&&n.delete(e)}function $D(){kg=!1,yi!==null&&gd(yi)&&(yi=null),vi!==null&&gd(vi)&&(vi=null),_i!==null&&gd(_i)&&(_i=null),ol.forEach(rI),al.forEach(rI)}function su(t,e){t.blockedOn===e&&(t.blockedOn=null,kg||(kg=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,$D)))}function ul(t){function e(i){return su(i,t)}if(0<Bc.length){su(Bc[0],t);for(var n=1;n<Bc.length;n++){var r=Bc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yi!==null&&su(yi,t),vi!==null&&su(vi,t),_i!==null&&su(_i,t),ol.forEach(e),al.forEach(e),n=0;n<ui.length;n++)r=ui[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ui.length&&(n=ui[0],n.blockedOn===null);)b1(n),n.blockedOn===null&&ui.shift()}var Bo=Wr.ReactCurrentBatchConfig,th=!0;function UD(t,e,n,r){var i=pe,s=Bo.transition;Bo.transition=null;try{pe=1,bv(t,e,n,r)}finally{pe=i,Bo.transition=s}}function jD(t,e,n,r){var i=pe,s=Bo.transition;Bo.transition=null;try{pe=4,bv(t,e,n,r)}finally{pe=i,Bo.transition=s}}function bv(t,e,n,r){if(th){var i=bg(t,e,n,r);if(i===null)mm(t,e,r,nh,n),nI(t,r);else if(FD(i,t,e,n,r))r.stopPropagation();else if(nI(t,r),e&4&&-1<MD.indexOf(t)){for(;i!==null;){var s=rc(i);if(s!==null&&R1(s),s=bg(t,e,n,r),s===null&&mm(t,e,r,nh,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mm(t,e,r,null,n)}}var nh=null;function bg(t,e,n,r){if(nh=null,t=Rv(r),t=gs(t),t!==null)if(e=to(t),e===null)t=null;else if(n=e.tag,n===13){if(t=v1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nh=t,null}function x1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(CD()){case Pv:return 1;case I1:return 4;case Zd:case kD:return 16;case T1:return 536870912;default:return 16}default:return 16}}var hi=null,xv=null,yd=null;function N1(){if(yd)return yd;var t,e=xv,n=e.length,r,i="value"in hi?hi.value:hi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return yd=i.slice(t,1<r?1-r:void 0)}function vd(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zc(){return!0}function iI(){return!1}function Tn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zc:iI,this.isPropagationStopped=iI,this}return Fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zc)},persist:function(){},isPersistent:zc}),e}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nv=Tn(ba),nc=Fe({},ba,{view:0,detail:0}),BD=Tn(nc),om,am,ou,sf=Fe({},nc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dv,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ou&&(ou&&t.type==="mousemove"?(om=t.screenX-ou.screenX,am=t.screenY-ou.screenY):am=om=0,ou=t),om)},movementY:function(t){return"movementY"in t?t.movementY:am}}),sI=Tn(sf),zD=Fe({},sf,{dataTransfer:0}),qD=Tn(zD),GD=Fe({},nc,{relatedTarget:0}),um=Tn(GD),WD=Fe({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),KD=Tn(WD),HD=Fe({},ba,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),QD=Tn(HD),YD=Fe({},ba,{data:0}),oI=Tn(YD),XD={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JD={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ZD={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eO(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ZD[t])?!!e[t]:!1}function Dv(){return eO}var tO=Fe({},nc,{key:function(t){if(t.key){var e=XD[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vd(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?JD[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dv,charCode:function(t){return t.type==="keypress"?vd(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vd(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nO=Tn(tO),rO=Fe({},sf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),aI=Tn(rO),iO=Fe({},nc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dv}),sO=Tn(iO),oO=Fe({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),aO=Tn(oO),uO=Fe({},sf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lO=Tn(uO),cO=[9,13,27,32],Ov=$r&&"CompositionEvent"in window,Mu=null;$r&&"documentMode"in document&&(Mu=document.documentMode);var dO=$r&&"TextEvent"in window&&!Mu,D1=$r&&(!Ov||Mu&&8<Mu&&11>=Mu),uI=String.fromCharCode(32),lI=!1;function O1(t,e){switch(t){case"keyup":return cO.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function V1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ao=!1;function hO(t,e){switch(t){case"compositionend":return V1(e);case"keypress":return e.which!==32?null:(lI=!0,uI);case"textInput":return t=e.data,t===uI&&lI?null:t;default:return null}}function fO(t,e){if(Ao)return t==="compositionend"||!Ov&&O1(t,e)?(t=N1(),yd=xv=hi=null,Ao=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return D1&&e.locale!=="ko"?null:e.data;default:return null}}var pO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cI(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!pO[t.type]:e==="textarea"}function L1(t,e,n,r){f1(r),e=rh(e,"onChange"),0<e.length&&(n=new Nv("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fu=null,ll=null;function mO(t){K1(t,0)}function of(t){var e=Co(t);if(o1(e))return t}function gO(t,e){if(t==="change")return e}var M1=!1;if($r){var lm;if($r){var cm="oninput"in document;if(!cm){var dI=document.createElement("div");dI.setAttribute("oninput","return;"),cm=typeof dI.oninput=="function"}lm=cm}else lm=!1;M1=lm&&(!document.documentMode||9<document.documentMode)}function hI(){Fu&&(Fu.detachEvent("onpropertychange",F1),ll=Fu=null)}function F1(t){if(t.propertyName==="value"&&of(ll)){var e=[];L1(e,ll,t,Rv(t)),y1(mO,e)}}function yO(t,e,n){t==="focusin"?(hI(),Fu=e,ll=n,Fu.attachEvent("onpropertychange",F1)):t==="focusout"&&hI()}function vO(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return of(ll)}function _O(t,e){if(t==="click")return of(e)}function wO(t,e){if(t==="input"||t==="change")return of(e)}function EO(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:EO;function cl(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hg.call(e,i)||!Hn(t[i],e[i]))return!1}return!0}function fI(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pI(t,e){var n=fI(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fI(n)}}function $1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function U1(){for(var t=window,e=Yd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yd(t.document)}return e}function Vv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IO(t){var e=U1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$1(n.ownerDocument.documentElement,n)){if(r!==null&&Vv(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=pI(n,s);var o=pI(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var TO=$r&&"documentMode"in document&&11>=document.documentMode,Ro=null,xg=null,$u=null,Ng=!1;function mI(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ng||Ro==null||Ro!==Yd(r)||(r=Ro,"selectionStart"in r&&Vv(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$u&&cl($u,r)||($u=r,r=rh(xg,"onSelect"),0<r.length&&(e=new Nv("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ro)))}function qc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Po={animationend:qc("Animation","AnimationEnd"),animationiteration:qc("Animation","AnimationIteration"),animationstart:qc("Animation","AnimationStart"),transitionend:qc("Transition","TransitionEnd")},dm={},j1={};$r&&(j1=document.createElement("div").style,"AnimationEvent"in window||(delete Po.animationend.animation,delete Po.animationiteration.animation,delete Po.animationstart.animation),"TransitionEvent"in window||delete Po.transitionend.transition);function af(t){if(dm[t])return dm[t];if(!Po[t])return t;var e=Po[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in j1)return dm[t]=e[n];return t}var B1=af("animationend"),z1=af("animationiteration"),q1=af("animationstart"),G1=af("transitionend"),W1=new Map,gI="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gi(t,e){W1.set(t,e),eo(e,[t])}for(var hm=0;hm<gI.length;hm++){var fm=gI[hm],SO=fm.toLowerCase(),AO=fm[0].toUpperCase()+fm.slice(1);Gi(SO,"on"+AO)}Gi(B1,"onAnimationEnd");Gi(z1,"onAnimationIteration");Gi(q1,"onAnimationStart");Gi("dblclick","onDoubleClick");Gi("focusin","onFocus");Gi("focusout","onBlur");Gi(G1,"onTransitionEnd");ta("onMouseEnter",["mouseout","mouseover"]);ta("onMouseLeave",["mouseout","mouseover"]);ta("onPointerEnter",["pointerout","pointerover"]);ta("onPointerLeave",["pointerout","pointerover"]);eo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));eo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));eo("onBeforeInput",["compositionend","keypress","textInput","paste"]);eo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));eo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));eo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ru="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RO=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ru));function yI(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,SD(r,e,void 0,t),t.currentTarget=null}function K1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;yI(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;yI(i,a,l),s=u}}}if(Jd)throw t=Pg,Jd=!1,Pg=null,t}function Te(t,e){var n=e[Mg];n===void 0&&(n=e[Mg]=new Set);var r=t+"__bubble";n.has(r)||(H1(e,t,2,!1),n.add(r))}function pm(t,e,n){var r=0;e&&(r|=4),H1(n,t,r,e)}var Gc="_reactListening"+Math.random().toString(36).slice(2);function dl(t){if(!t[Gc]){t[Gc]=!0,t1.forEach(function(n){n!=="selectionchange"&&(RO.has(n)||pm(n,!1,t),pm(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gc]||(e[Gc]=!0,pm("selectionchange",!1,e))}}function H1(t,e,n,r){switch(x1(e)){case 1:var i=UD;break;case 4:i=jD;break;default:i=bv}n=i.bind(null,e,n,t),i=void 0,!Rg||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mm(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=gs(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}y1(function(){var l=s,c=Rv(n),d=[];e:{var h=W1.get(t);if(h!==void 0){var f=Nv,v=t;switch(t){case"keypress":if(vd(n)===0)break e;case"keydown":case"keyup":f=nO;break;case"focusin":v="focus",f=um;break;case"focusout":v="blur",f=um;break;case"beforeblur":case"afterblur":f=um;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=sI;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=qD;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=sO;break;case B1:case z1:case q1:f=KD;break;case G1:f=aO;break;case"scroll":f=BD;break;case"wheel":f=lO;break;case"copy":case"cut":case"paste":f=QD;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=aI}var y=(e&4)!==0,w=!y&&t==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var p=l,g;p!==null;){g=p;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,m!==null&&(_=sl(p,m),_!=null&&y.push(hl(p,_,g)))),w)break;p=p.return}0<y.length&&(h=new f(h,v,null,n,c),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",h&&n!==Sg&&(v=n.relatedTarget||n.fromElement)&&(gs(v)||v[Ur]))break e;if((f||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,f?(v=n.relatedTarget||n.toElement,f=l,v=v?gs(v):null,v!==null&&(w=to(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(f=null,v=l),f!==v)){if(y=sI,_="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=aI,_="onPointerLeave",m="onPointerEnter",p="pointer"),w=f==null?h:Co(f),g=v==null?h:Co(v),h=new y(_,p+"leave",f,n,c),h.target=w,h.relatedTarget=g,_=null,gs(c)===l&&(y=new y(m,p+"enter",v,n,c),y.target=g,y.relatedTarget=w,_=y),w=_,f&&v)t:{for(y=f,m=v,p=0,g=y;g;g=fo(g))p++;for(g=0,_=m;_;_=fo(_))g++;for(;0<p-g;)y=fo(y),p--;for(;0<g-p;)m=fo(m),g--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=fo(y),m=fo(m)}y=null}else y=null;f!==null&&vI(d,h,f,y,!1),v!==null&&w!==null&&vI(d,w,v,y,!0)}}e:{if(h=l?Co(l):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var I=gO;else if(cI(h))if(M1)I=wO;else{I=vO;var S=yO}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=_O);if(I&&(I=I(t,l))){L1(d,I,n,c);break e}S&&S(t,h,l),t==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&_g(h,"number",h.value)}switch(S=l?Co(l):window,t){case"focusin":(cI(S)||S.contentEditable==="true")&&(Ro=S,xg=l,$u=null);break;case"focusout":$u=xg=Ro=null;break;case"mousedown":Ng=!0;break;case"contextmenu":case"mouseup":case"dragend":Ng=!1,mI(d,n,c);break;case"selectionchange":if(TO)break;case"keydown":case"keyup":mI(d,n,c)}var C;if(Ov)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Ao?O1(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(D1&&n.locale!=="ko"&&(Ao||L!=="onCompositionStart"?L==="onCompositionEnd"&&Ao&&(C=N1()):(hi=c,xv="value"in hi?hi.value:hi.textContent,Ao=!0)),S=rh(l,L),0<S.length&&(L=new oI(L,t,null,n,c),d.push({event:L,listeners:S}),C?L.data=C:(C=V1(n),C!==null&&(L.data=C)))),(C=dO?hO(t,n):fO(t,n))&&(l=rh(l,"onBeforeInput"),0<l.length&&(c=new oI("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:l}),c.data=C))}K1(d,e)})}function hl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=sl(t,n),s!=null&&r.unshift(hl(t,s,i)),s=sl(t,e),s!=null&&r.push(hl(t,s,i))),t=t.return}return r}function fo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vI(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=sl(n,s),u!=null&&o.unshift(hl(n,u,a))):i||(u=sl(n,s),u!=null&&o.push(hl(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var PO=/\r\n?/g,CO=/\u0000|\uFFFD/g;function _I(t){return(typeof t=="string"?t:""+t).replace(PO,`
`).replace(CO,"")}function Wc(t,e,n){if(e=_I(e),_I(t)!==e&&n)throw Error(D(425))}function ih(){}var Dg=null,Og=null;function Vg(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lg=typeof setTimeout=="function"?setTimeout:void 0,kO=typeof clearTimeout=="function"?clearTimeout:void 0,wI=typeof Promise=="function"?Promise:void 0,bO=typeof queueMicrotask=="function"?queueMicrotask:typeof wI<"u"?function(t){return wI.resolve(null).then(t).catch(xO)}:Lg;function xO(t){setTimeout(function(){throw t})}function gm(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ul(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ul(e)}function wi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function EI(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xa=Math.random().toString(36).slice(2),rr="__reactFiber$"+xa,fl="__reactProps$"+xa,Ur="__reactContainer$"+xa,Mg="__reactEvents$"+xa,NO="__reactListeners$"+xa,DO="__reactHandles$"+xa;function gs(t){var e=t[rr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ur]||n[rr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=EI(t);t!==null;){if(n=t[rr])return n;t=EI(t)}return e}t=n,n=t.parentNode}return null}function rc(t){return t=t[rr]||t[Ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Co(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function uf(t){return t[fl]||null}var Fg=[],ko=-1;function Wi(t){return{current:t}}function Pe(t){0>ko||(t.current=Fg[ko],Fg[ko]=null,ko--)}function Ee(t,e){ko++,Fg[ko]=t.current,t.current=e}var xi={},$t=Wi(xi),un=Wi(!1),Ls=xi;function na(t,e){var n=t.type.contextTypes;if(!n)return xi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ln(t){return t=t.childContextTypes,t!=null}function sh(){Pe(un),Pe($t)}function II(t,e,n){if($t.current!==xi)throw Error(D(168));Ee($t,e),Ee(un,n)}function Q1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(D(108,yD(t)||"Unknown",i));return Fe({},n,r)}function oh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xi,Ls=$t.current,Ee($t,t),Ee(un,un.current),!0}function TI(t,e,n){var r=t.stateNode;if(!r)throw Error(D(169));n?(t=Q1(t,e,Ls),r.__reactInternalMemoizedMergedChildContext=t,Pe(un),Pe($t),Ee($t,t)):Pe(un),Ee(un,n)}var Cr=null,lf=!1,ym=!1;function Y1(t){Cr===null?Cr=[t]:Cr.push(t)}function OO(t){lf=!0,Y1(t)}function Ki(){if(!ym&&Cr!==null){ym=!0;var t=0,e=pe;try{var n=Cr;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Cr=null,lf=!1}catch(i){throw Cr!==null&&(Cr=Cr.slice(t+1)),E1(Pv,Ki),i}finally{pe=e,ym=!1}}return null}var bo=[],xo=0,ah=null,uh=0,Rn=[],Pn=0,Ms=null,br=1,xr="";function os(t,e){bo[xo++]=uh,bo[xo++]=ah,ah=t,uh=e}function X1(t,e,n){Rn[Pn++]=br,Rn[Pn++]=xr,Rn[Pn++]=Ms,Ms=t;var r=br;t=xr;var i=32-Gn(r)-1;r&=~(1<<i),n+=1;var s=32-Gn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,br=1<<32-Gn(e)+i|n<<i|r,xr=s+t}else br=1<<s|n<<i|r,xr=t}function Lv(t){t.return!==null&&(os(t,1),X1(t,1,0))}function Mv(t){for(;t===ah;)ah=bo[--xo],bo[xo]=null,uh=bo[--xo],bo[xo]=null;for(;t===Ms;)Ms=Rn[--Pn],Rn[Pn]=null,xr=Rn[--Pn],Rn[Pn]=null,br=Rn[--Pn],Rn[Pn]=null}var vn=null,gn=null,be=!1,zn=null;function J1(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function SI(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,gn=wi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ms!==null?{id:br,overflow:xr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,gn=null,!0):!1;default:return!1}}function $g(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ug(t){if(be){var e=gn;if(e){var n=e;if(!SI(t,e)){if($g(t))throw Error(D(418));e=wi(n.nextSibling);var r=vn;e&&SI(t,e)?J1(r,n):(t.flags=t.flags&-4097|2,be=!1,vn=t)}}else{if($g(t))throw Error(D(418));t.flags=t.flags&-4097|2,be=!1,vn=t}}}function AI(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function Kc(t){if(t!==vn)return!1;if(!be)return AI(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vg(t.type,t.memoizedProps)),e&&(e=gn)){if($g(t))throw Z1(),Error(D(418));for(;e;)J1(t,e),e=wi(e.nextSibling)}if(AI(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=wi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=vn?wi(t.stateNode.nextSibling):null;return!0}function Z1(){for(var t=gn;t;)t=wi(t.nextSibling)}function ra(){gn=vn=null,be=!1}function Fv(t){zn===null?zn=[t]:zn.push(t)}var VO=Wr.ReactCurrentBatchConfig;function jn(t,e){if(t&&t.defaultProps){e=Fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var lh=Wi(null),ch=null,No=null,$v=null;function Uv(){$v=No=ch=null}function jv(t){var e=lh.current;Pe(lh),t._currentValue=e}function jg(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zo(t,e){ch=t,$v=No=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if($v!==t)if(t={context:t,memoizedValue:e,next:null},No===null){if(ch===null)throw Error(D(308));No=t,ch.dependencies={lanes:0,firstContext:t}}else No=No.next=t;return e}var ys=null;function Bv(t){ys===null?ys=[t]:ys.push(t)}function eA(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bv(e)):(n.next=i.next,i.next=n),e.interleaved=n,jr(t,r)}function jr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ai=!1;function zv(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tA(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Lr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ei(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jr(t,n)}return i=r.interleaved,i===null?(e.next=e,Bv(r)):(e.next=i.next,i.next=e),r.interleaved=e,jr(t,n)}function _d(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cv(t,n)}}function RI(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function dh(t,e,n,r){var i=t.updateQueue;ai=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(s!==null){var d=i.baseState;o=0,c=l=u=null,a=s;do{var h=a.lane,f=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(h=e,f=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(f,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(f,d,h):v,h==null)break e;d=Fe({},d,h);break e;case 2:ai=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=f,u=d):c=c.next=f,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(u=d),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);$s|=o,t.lanes=o,t.memoizedState=d}}function PI(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var nA=new e1.Component().refs;function Bg(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cf={isMounted:function(t){return(t=t._reactInternals)?to(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Wt(),i=Ti(t),s=Lr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ei(t,s,i),e!==null&&(Wn(e,t,i,r),_d(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Wt(),i=Ti(t),s=Lr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ei(t,s,i),e!==null&&(Wn(e,t,i,r),_d(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Wt(),r=Ti(t),i=Lr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ei(t,i,r),e!==null&&(Wn(e,t,r,n),_d(e,t,r))}};function CI(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!cl(n,r)||!cl(i,s):!0}function rA(t,e,n){var r=!1,i=xi,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(i=ln(e)?Ls:$t.current,r=e.contextTypes,s=(r=r!=null)?na(t,i):xi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function kI(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&cf.enqueueReplaceState(e,e.state,null)}function zg(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=nA,zv(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dn(s):(s=ln(e)?Ls:$t.current,i.context=na(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bg(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&cf.enqueueReplaceState(i,i.state,null),dh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function au(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===nA&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,t))}return t}function Hc(t,e){throw t=Object.prototype.toString.call(e),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bI(t){var e=t._init;return e(t._payload)}function iA(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Si(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,_){return p===null||p.tag!==6?(p=Sm(g,m.mode,_),p.return=m,p):(p=i(p,g),p.return=m,p)}function u(m,p,g,_){var I=g.type;return I===So?c(m,p,g.props.children,_,g.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===oi&&bI(I)===p.type)?(_=i(p,g.props),_.ref=au(m,p,g),_.return=m,_):(_=Ad(g.type,g.key,g.props,null,m.mode,_),_.ref=au(m,p,g),_.return=m,_)}function l(m,p,g,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Am(g,m.mode,_),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function c(m,p,g,_,I){return p===null||p.tag!==7?(p=Ps(g,m.mode,_,I),p.return=m,p):(p=i(p,g),p.return=m,p)}function d(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Sm(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Mc:return g=Ad(p.type,p.key,p.props,null,m.mode,g),g.ref=au(m,null,p),g.return=m,g;case To:return p=Am(p,m.mode,g),p.return=m,p;case oi:var _=p._init;return d(m,_(p._payload),g)}if(Su(p)||nu(p))return p=Ps(p,m.mode,g,null),p.return=m,p;Hc(m,p)}return null}function h(m,p,g,_){var I=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:a(m,p,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Mc:return g.key===I?u(m,p,g,_):null;case To:return g.key===I?l(m,p,g,_):null;case oi:return I=g._init,h(m,p,I(g._payload),_)}if(Su(g)||nu(g))return I!==null?null:c(m,p,g,_,null);Hc(m,g)}return null}function f(m,p,g,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(g)||null,a(p,m,""+_,I);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Mc:return m=m.get(_.key===null?g:_.key)||null,u(p,m,_,I);case To:return m=m.get(_.key===null?g:_.key)||null,l(p,m,_,I);case oi:var S=_._init;return f(m,p,g,S(_._payload),I)}if(Su(_)||nu(_))return m=m.get(g)||null,c(p,m,_,I,null);Hc(p,_)}return null}function v(m,p,g,_){for(var I=null,S=null,C=p,L=p=0,J=null;C!==null&&L<g.length;L++){C.index>L?(J=C,C=null):J=C.sibling;var z=h(m,C,g[L],_);if(z===null){C===null&&(C=J);break}t&&C&&z.alternate===null&&e(m,C),p=s(z,p,L),S===null?I=z:S.sibling=z,S=z,C=J}if(L===g.length)return n(m,C),be&&os(m,L),I;if(C===null){for(;L<g.length;L++)C=d(m,g[L],_),C!==null&&(p=s(C,p,L),S===null?I=C:S.sibling=C,S=C);return be&&os(m,L),I}for(C=r(m,C);L<g.length;L++)J=f(C,m,L,g[L],_),J!==null&&(t&&J.alternate!==null&&C.delete(J.key===null?L:J.key),p=s(J,p,L),S===null?I=J:S.sibling=J,S=J);return t&&C.forEach(function(De){return e(m,De)}),be&&os(m,L),I}function y(m,p,g,_){var I=nu(g);if(typeof I!="function")throw Error(D(150));if(g=I.call(g),g==null)throw Error(D(151));for(var S=I=null,C=p,L=p=0,J=null,z=g.next();C!==null&&!z.done;L++,z=g.next()){C.index>L?(J=C,C=null):J=C.sibling;var De=h(m,C,z.value,_);if(De===null){C===null&&(C=J);break}t&&C&&De.alternate===null&&e(m,C),p=s(De,p,L),S===null?I=De:S.sibling=De,S=De,C=J}if(z.done)return n(m,C),be&&os(m,L),I;if(C===null){for(;!z.done;L++,z=g.next())z=d(m,z.value,_),z!==null&&(p=s(z,p,L),S===null?I=z:S.sibling=z,S=z);return be&&os(m,L),I}for(C=r(m,C);!z.done;L++,z=g.next())z=f(C,m,L,z.value,_),z!==null&&(t&&z.alternate!==null&&C.delete(z.key===null?L:z.key),p=s(z,p,L),S===null?I=z:S.sibling=z,S=z);return t&&C.forEach(function(Ue){return e(m,Ue)}),be&&os(m,L),I}function w(m,p,g,_){if(typeof g=="object"&&g!==null&&g.type===So&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Mc:e:{for(var I=g.key,S=p;S!==null;){if(S.key===I){if(I=g.type,I===So){if(S.tag===7){n(m,S.sibling),p=i(S,g.props.children),p.return=m,m=p;break e}}else if(S.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===oi&&bI(I)===S.type){n(m,S.sibling),p=i(S,g.props),p.ref=au(m,S,g),p.return=m,m=p;break e}n(m,S);break}else e(m,S);S=S.sibling}g.type===So?(p=Ps(g.props.children,m.mode,_,g.key),p.return=m,m=p):(_=Ad(g.type,g.key,g.props,null,m.mode,_),_.ref=au(m,p,g),_.return=m,m=_)}return o(m);case To:e:{for(S=g.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Am(g,m.mode,_),p.return=m,m=p}return o(m);case oi:return S=g._init,w(m,p,S(g._payload),_)}if(Su(g))return v(m,p,g,_);if(nu(g))return y(m,p,g,_);Hc(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Sm(g,m.mode,_),p.return=m,m=p),o(m)):n(m,p)}return w}var ia=iA(!0),sA=iA(!1),ic={},gr=Wi(ic),pl=Wi(ic),ml=Wi(ic);function vs(t){if(t===ic)throw Error(D(174));return t}function qv(t,e){switch(Ee(ml,e),Ee(pl,t),Ee(gr,ic),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Eg(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Eg(e,t)}Pe(gr),Ee(gr,e)}function sa(){Pe(gr),Pe(pl),Pe(ml)}function oA(t){vs(ml.current);var e=vs(gr.current),n=Eg(e,t.type);e!==n&&(Ee(pl,t),Ee(gr,n))}function Gv(t){pl.current===t&&(Pe(gr),Pe(pl))}var Oe=Wi(0);function hh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vm=[];function Wv(){for(var t=0;t<vm.length;t++)vm[t]._workInProgressVersionPrimary=null;vm.length=0}var wd=Wr.ReactCurrentDispatcher,_m=Wr.ReactCurrentBatchConfig,Fs=0,Le=null,ot=null,dt=null,fh=!1,Uu=!1,gl=0,LO=0;function Nt(){throw Error(D(321))}function Kv(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function Hv(t,e,n,r,i,s){if(Fs=s,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wd.current=t===null||t.memoizedState===null?UO:jO,t=n(r,i),Uu){s=0;do{if(Uu=!1,gl=0,25<=s)throw Error(D(301));s+=1,dt=ot=null,e.updateQueue=null,wd.current=BO,t=n(r,i)}while(Uu)}if(wd.current=ph,e=ot!==null&&ot.next!==null,Fs=0,dt=ot=Le=null,fh=!1,e)throw Error(D(300));return t}function Qv(){var t=gl!==0;return gl=0,t}function tr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Le.memoizedState=dt=t:dt=dt.next=t,dt}function On(){if(ot===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=ot.next;var e=dt===null?Le.memoizedState:dt.next;if(e!==null)dt=e,ot=t;else{if(t===null)throw Error(D(310));ot=t,t={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},dt===null?Le.memoizedState=dt=t:dt=dt.next=t}return dt}function yl(t,e){return typeof e=="function"?e(t):e}function wm(t){var e=On(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=ot,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((Fs&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:t(r,l.action);else{var d={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=d,o=r):u=u.next=d,Le.lanes|=c,$s|=c}l=l.next}while(l!==null&&l!==s);u===null?o=r:u.next=a,Hn(r,e.memoizedState)||(nn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Le.lanes|=s,$s|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Em(t){var e=On(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Hn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function aA(){}function uA(t,e){var n=Le,r=On(),i=e(),s=!Hn(r.memoizedState,i);if(s&&(r.memoizedState=i,nn=!0),r=r.queue,Yv(dA.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,vl(9,cA.bind(null,n,r,i,e),void 0,null),pt===null)throw Error(D(349));Fs&30||lA(n,e,i)}return i}function lA(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cA(t,e,n,r){e.value=n,e.getSnapshot=r,hA(e)&&fA(t)}function dA(t,e,n){return n(function(){hA(e)&&fA(t)})}function hA(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function fA(t){var e=jr(t,1);e!==null&&Wn(e,t,1,-1)}function xI(t){var e=tr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:t},e.queue=t,t=t.dispatch=$O.bind(null,Le,t),[e.memoizedState,t]}function vl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function pA(){return On().memoizedState}function Ed(t,e,n,r){var i=tr();Le.flags|=t,i.memoizedState=vl(1|e,n,void 0,r===void 0?null:r)}function df(t,e,n,r){var i=On();r=r===void 0?null:r;var s=void 0;if(ot!==null){var o=ot.memoizedState;if(s=o.destroy,r!==null&&Kv(r,o.deps)){i.memoizedState=vl(e,n,s,r);return}}Le.flags|=t,i.memoizedState=vl(1|e,n,s,r)}function NI(t,e){return Ed(8390656,8,t,e)}function Yv(t,e){return df(2048,8,t,e)}function mA(t,e){return df(4,2,t,e)}function gA(t,e){return df(4,4,t,e)}function yA(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vA(t,e,n){return n=n!=null?n.concat([t]):null,df(4,4,yA.bind(null,e,t),n)}function Xv(){}function _A(t,e){var n=On();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kv(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function wA(t,e){var n=On();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kv(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function EA(t,e,n){return Fs&21?(Hn(n,e)||(n=S1(),Le.lanes|=n,$s|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function MO(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=_m.transition;_m.transition={};try{t(!1),e()}finally{pe=n,_m.transition=r}}function IA(){return On().memoizedState}function FO(t,e,n){var r=Ti(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},TA(t))SA(e,n);else if(n=eA(t,e,n,r),n!==null){var i=Wt();Wn(n,t,r,i),AA(n,e,r)}}function $O(t,e,n){var r=Ti(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(TA(t))SA(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Hn(a,o)){var u=e.interleaved;u===null?(i.next=i,Bv(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=eA(t,e,i,r),n!==null&&(i=Wt(),Wn(n,t,r,i),AA(n,e,r))}}function TA(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function SA(t,e){Uu=fh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function AA(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cv(t,n)}}var ph={readContext:Dn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},UO={readContext:Dn,useCallback:function(t,e){return tr().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:NI,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ed(4194308,4,yA.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ed(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ed(4,2,t,e)},useMemo:function(t,e){var n=tr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=FO.bind(null,Le,t),[r.memoizedState,t]},useRef:function(t){var e=tr();return t={current:t},e.memoizedState=t},useState:xI,useDebugValue:Xv,useDeferredValue:function(t){return tr().memoizedState=t},useTransition:function(){var t=xI(!1),e=t[0];return t=MO.bind(null,t[1]),tr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Le,i=tr();if(be){if(n===void 0)throw Error(D(407));n=n()}else{if(n=e(),pt===null)throw Error(D(349));Fs&30||lA(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,NI(dA.bind(null,r,s,t),[t]),r.flags|=2048,vl(9,cA.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tr(),e=pt.identifierPrefix;if(be){var n=xr,r=br;n=(r&~(1<<32-Gn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=gl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=LO++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jO={readContext:Dn,useCallback:_A,useContext:Dn,useEffect:Yv,useImperativeHandle:vA,useInsertionEffect:mA,useLayoutEffect:gA,useMemo:wA,useReducer:wm,useRef:pA,useState:function(){return wm(yl)},useDebugValue:Xv,useDeferredValue:function(t){var e=On();return EA(e,ot.memoizedState,t)},useTransition:function(){var t=wm(yl)[0],e=On().memoizedState;return[t,e]},useMutableSource:aA,useSyncExternalStore:uA,useId:IA,unstable_isNewReconciler:!1},BO={readContext:Dn,useCallback:_A,useContext:Dn,useEffect:Yv,useImperativeHandle:vA,useInsertionEffect:mA,useLayoutEffect:gA,useMemo:wA,useReducer:Em,useRef:pA,useState:function(){return Em(yl)},useDebugValue:Xv,useDeferredValue:function(t){var e=On();return ot===null?e.memoizedState=t:EA(e,ot.memoizedState,t)},useTransition:function(){var t=Em(yl)[0],e=On().memoizedState;return[t,e]},useMutableSource:aA,useSyncExternalStore:uA,useId:IA,unstable_isNewReconciler:!1};function oa(t,e){try{var n="",r=e;do n+=gD(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Im(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qg(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zO=typeof WeakMap=="function"?WeakMap:Map;function RA(t,e,n){n=Lr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gh||(gh=!0,ey=r),qg(t,e)},n}function PA(t,e,n){n=Lr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qg(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qg(t,e),typeof r!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function DI(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zO;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=rV.bind(null,t,e,n),e.then(t,t))}function OI(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function VI(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Lr(-1,1),e.tag=2,Ei(n,e,1))),n.lanes|=1),t)}var qO=Wr.ReactCurrentOwner,nn=!1;function jt(t,e,n,r){e.child=t===null?sA(e,null,n,r):ia(e,t.child,n,r)}function LI(t,e,n,r,i){n=n.render;var s=e.ref;return zo(e,i),r=Hv(t,e,n,r,s,i),n=Qv(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Br(t,e,i)):(be&&n&&Lv(e),e.flags|=1,jt(t,e,r,i),e.child)}function MI(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!s_(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,CA(t,e,s,r,i)):(t=Ad(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:cl,n(o,r)&&t.ref===e.ref)return Br(t,e,i)}return e.flags|=1,t=Si(s,r),t.ref=e.ref,t.return=e,e.child=t}function CA(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(cl(s,r)&&t.ref===e.ref)if(nn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Br(t,e,i)}return Gg(t,e,n,r,i)}function kA(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Oo,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(Oo,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(Oo,pn),pn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ee(Oo,pn),pn|=r;return jt(t,e,i,n),e.child}function bA(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gg(t,e,n,r,i){var s=ln(n)?Ls:$t.current;return s=na(e,s),zo(e,i),n=Hv(t,e,n,r,s,i),r=Qv(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Br(t,e,i)):(be&&r&&Lv(e),e.flags|=1,jt(t,e,n,i),e.child)}function FI(t,e,n,r,i){if(ln(n)){var s=!0;oh(e)}else s=!1;if(zo(e,i),e.stateNode===null)Id(t,e),rA(e,n,r),zg(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Dn(l):(l=ln(n)?Ls:$t.current,l=na(e,l));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&kI(e,o,r,l),ai=!1;var h=e.memoizedState;o.state=h,dh(e,r,o,i),u=e.memoizedState,a!==r||h!==u||un.current||ai?(typeof c=="function"&&(Bg(e,n,c,r),u=e.memoizedState),(a=ai||CI(e,n,a,r,h,u,l))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,tA(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:jn(e.type,a),o.props=l,d=e.pendingProps,h=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dn(u):(u=ln(n)?Ls:$t.current,u=na(e,u));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==u)&&kI(e,o,r,u),ai=!1,h=e.memoizedState,o.state=h,dh(e,r,o,i);var v=e.memoizedState;a!==d||h!==v||un.current||ai?(typeof f=="function"&&(Bg(e,n,f,r),v=e.memoizedState),(l=ai||CI(e,n,l,r,h,v,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Wg(t,e,n,r,s,i)}function Wg(t,e,n,r,i,s){bA(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&TI(e,n,!1),Br(t,e,s);r=e.stateNode,qO.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ia(e,t.child,null,s),e.child=ia(e,null,a,s)):jt(t,e,a,s),e.memoizedState=r.state,i&&TI(e,n,!0),e.child}function xA(t){var e=t.stateNode;e.pendingContext?II(t,e.pendingContext,e.pendingContext!==e.context):e.context&&II(t,e.context,!1),qv(t,e.containerInfo)}function $I(t,e,n,r,i){return ra(),Fv(i),e.flags|=256,jt(t,e,n,r),e.child}var Kg={dehydrated:null,treeContext:null,retryLane:0};function Hg(t){return{baseLanes:t,cachePool:null,transitions:null}}function NA(t,e,n){var r=e.pendingProps,i=Oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(Oe,i&1),t===null)return Ug(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pf(o,r,0,null),t=Ps(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hg(n),e.memoizedState=Kg,t):Jv(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return GO(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Si(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Si(a,s):(s=Ps(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hg(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Kg,r}return s=t.child,t=s.sibling,r=Si(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jv(t,e){return e=pf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qc(t,e,n,r){return r!==null&&Fv(r),ia(e,t.child,null,n),t=Jv(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function GO(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Im(Error(D(422))),Qc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=pf({mode:"visible",children:r.children},i,0,null),s=Ps(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ia(e,t.child,null,o),e.child.memoizedState=Hg(o),e.memoizedState=Kg,s);if(!(e.mode&1))return Qc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(D(419)),r=Im(s,r,void 0),Qc(t,e,o,r)}if(a=(o&t.childLanes)!==0,nn||a){if(r=pt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jr(t,i),Wn(r,t,i,-1))}return i_(),r=Im(Error(D(421))),Qc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=iV.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gn=wi(i.nextSibling),vn=e,be=!0,zn=null,t!==null&&(Rn[Pn++]=br,Rn[Pn++]=xr,Rn[Pn++]=Ms,br=t.id,xr=t.overflow,Ms=e),e=Jv(e,r.children),e.flags|=4096,e)}function UI(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),jg(t.return,e,n)}function Tm(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function DA(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(jt(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&UI(t,n,e);else if(t.tag===19)UI(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&hh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Tm(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&hh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Tm(e,!0,n,null,s);break;case"together":Tm(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Id(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Br(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$s|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(D(153));if(e.child!==null){for(t=e.child,n=Si(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Si(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WO(t,e,n){switch(e.tag){case 3:xA(e),ra();break;case 5:oA(e);break;case 1:ln(e.type)&&oh(e);break;case 4:qv(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ee(lh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?NA(t,e,n):(Ee(Oe,Oe.current&1),t=Br(t,e,n),t!==null?t.sibling:null);Ee(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return DA(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,kA(t,e,n)}return Br(t,e,n)}var OA,Qg,VA,LA;OA=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qg=function(){};VA=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,vs(gr.current);var s=null;switch(n){case"input":i=yg(t,i),r=yg(t,r),s=[];break;case"select":i=Fe({},i,{value:void 0}),r=Fe({},r,{value:void 0}),s=[];break;case"textarea":i=wg(t,i),r=wg(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ih)}Ig(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(rl.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(rl.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&Te("scroll",t),s||a===u||(s=[])):(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};LA=function(t,e,n,r){n!==r&&(e.flags|=4)};function uu(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function KO(t,e,n){var r=e.pendingProps;switch(Mv(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return ln(e.type)&&sh(),Dt(e),null;case 3:return r=e.stateNode,sa(),Pe(un),Pe($t),Wv(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Kc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zn!==null&&(ry(zn),zn=null))),Qg(t,e),Dt(e),null;case 5:Gv(e);var i=vs(ml.current);if(n=e.type,t!==null&&e.stateNode!=null)VA(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(D(166));return Dt(e),null}if(t=vs(gr.current),Kc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rr]=e,r[fl]=s,t=(e.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<Ru.length;i++)Te(Ru[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":QE(r,s),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Te("invalid",r);break;case"textarea":XE(r,s),Te("invalid",r)}Ig(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wc(r.textContent,a,t),i=["children",""+a]):rl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Te("scroll",r)}switch(n){case"input":Fc(r),YE(r,s,!0);break;case"textarea":Fc(r),JE(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ih)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=l1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rr]=e,t[fl]=r,OA(t,e,!1,!1),e.stateNode=t;e:{switch(o=Tg(n,r),n){case"dialog":Te("cancel",t),Te("close",t),i=r;break;case"iframe":case"object":case"embed":Te("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ru.length;i++)Te(Ru[i],t);i=r;break;case"source":Te("error",t),i=r;break;case"img":case"image":case"link":Te("error",t),Te("load",t),i=r;break;case"details":Te("toggle",t),i=r;break;case"input":QE(t,r),i=yg(t,r),Te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Fe({},r,{value:void 0}),Te("invalid",t);break;case"textarea":XE(t,r),i=wg(t,r),Te("invalid",t);break;default:i=r}Ig(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?h1(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&c1(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&il(t,u):typeof u=="number"&&il(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(rl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Te("scroll",t):u!=null&&Iv(t,s,u,o))}switch(n){case"input":Fc(t),YE(t,r,!1);break;case"textarea":Fc(t),JE(t);break;case"option":r.value!=null&&t.setAttribute("value",""+bi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?$o(t,!!r.multiple,s,!1):r.defaultValue!=null&&$o(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ih)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Dt(e),null;case 6:if(t&&e.stateNode!=null)LA(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(D(166));if(n=vs(ml.current),vs(gr.current),Kc(e)){if(r=e.stateNode,n=e.memoizedProps,r[rr]=e,(s=r.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:Wc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rr]=e,e.stateNode=r}return Dt(e),null;case 13:if(Pe(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&gn!==null&&e.mode&1&&!(e.flags&128))Z1(),ra(),e.flags|=98560,s=!1;else if(s=Kc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(D(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[rr]=e}else ra(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Dt(e),s=!1}else zn!==null&&(ry(zn),zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?at===0&&(at=3):i_())),e.updateQueue!==null&&(e.flags|=4),Dt(e),null);case 4:return sa(),Qg(t,e),t===null&&dl(e.stateNode.containerInfo),Dt(e),null;case 10:return jv(e.type._context),Dt(e),null;case 17:return ln(e.type)&&sh(),Dt(e),null;case 19:if(Pe(Oe),s=e.memoizedState,s===null)return Dt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)uu(s,!1);else{if(at!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hh(t),o!==null){for(e.flags|=128,uu(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(Oe,Oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&He()>aa&&(e.flags|=128,r=!0,uu(s,!1),e.lanes=4194304)}else{if(!r)if(t=hh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),uu(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!be)return Dt(e),null}else 2*He()-s.renderingStartTime>aa&&n!==1073741824&&(e.flags|=128,r=!0,uu(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=He(),e.sibling=null,n=Oe.current,Ee(Oe,r?n&1|2:n&1),e):(Dt(e),null);case 22:case 23:return r_(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?pn&1073741824&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),null;case 24:return null;case 25:return null}throw Error(D(156,e.tag))}function HO(t,e){switch(Mv(e),e.tag){case 1:return ln(e.type)&&sh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return sa(),Pe(un),Pe($t),Wv(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gv(e),null;case 13:if(Pe(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(D(340));ra()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(Oe),null;case 4:return sa(),null;case 10:return jv(e.type._context),null;case 22:case 23:return r_(),null;case 24:return null;default:return null}}var Yc=!1,Lt=!1,QO=typeof WeakSet=="function"?WeakSet:Set,B=null;function Do(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Be(t,e,r)}else n.current=null}function Yg(t,e,n){try{n()}catch(r){Be(t,e,r)}}var jI=!1;function YO(t,e){if(Dg=th,t=U1(),Vv(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,d=t,h=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(u=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===t)break t;if(h===n&&++l===i&&(a=o),h===s&&++c===r&&(u=o),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Og={focusedElem:t,selectionRange:n},th=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,w=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:jn(e.type,y),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(_){Be(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return v=jI,jI=!1,v}function ju(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Yg(e,n,s)}i=i.next}while(i!==r)}}function hf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xg(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function MA(t){var e=t.alternate;e!==null&&(t.alternate=null,MA(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rr],delete e[fl],delete e[Mg],delete e[NO],delete e[DO])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function FA(t){return t.tag===5||t.tag===3||t.tag===4}function BI(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||FA(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ih));else if(r!==4&&(t=t.child,t!==null))for(Jg(t,e,n),t=t.sibling;t!==null;)Jg(t,e,n),t=t.sibling}function Zg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Zg(t,e,n),t=t.sibling;t!==null;)Zg(t,e,n),t=t.sibling}var Tt=null,Bn=!1;function ei(t,e,n){for(n=n.child;n!==null;)$A(t,e,n),n=n.sibling}function $A(t,e,n){if(mr&&typeof mr.onCommitFiberUnmount=="function")try{mr.onCommitFiberUnmount(rf,n)}catch{}switch(n.tag){case 5:Lt||Do(n,e);case 6:var r=Tt,i=Bn;Tt=null,ei(t,e,n),Tt=r,Bn=i,Tt!==null&&(Bn?(t=Tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Tt.removeChild(n.stateNode));break;case 18:Tt!==null&&(Bn?(t=Tt,n=n.stateNode,t.nodeType===8?gm(t.parentNode,n):t.nodeType===1&&gm(t,n),ul(t)):gm(Tt,n.stateNode));break;case 4:r=Tt,i=Bn,Tt=n.stateNode.containerInfo,Bn=!0,ei(t,e,n),Tt=r,Bn=i;break;case 0:case 11:case 14:case 15:if(!Lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Yg(n,e,o),i=i.next}while(i!==r)}ei(t,e,n);break;case 1:if(!Lt&&(Do(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Be(n,e,a)}ei(t,e,n);break;case 21:ei(t,e,n);break;case 22:n.mode&1?(Lt=(r=Lt)||n.memoizedState!==null,ei(t,e,n),Lt=r):ei(t,e,n);break;default:ei(t,e,n)}}function zI(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new QO),e.forEach(function(r){var i=sV.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Tt=a.stateNode,Bn=!1;break e;case 3:Tt=a.stateNode.containerInfo,Bn=!0;break e;case 4:Tt=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(Tt===null)throw Error(D(160));$A(s,o,i),Tt=null,Bn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){Be(i,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)UA(e,t),e=e.sibling}function UA(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),er(t),r&4){try{ju(3,t,t.return),hf(3,t)}catch(y){Be(t,t.return,y)}try{ju(5,t,t.return)}catch(y){Be(t,t.return,y)}}break;case 1:Un(e,t),er(t),r&512&&n!==null&&Do(n,n.return);break;case 5:if(Un(e,t),er(t),r&512&&n!==null&&Do(n,n.return),t.flags&32){var i=t.stateNode;try{il(i,"")}catch(y){Be(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&a1(i,s),Tg(a,o);var l=Tg(a,s);for(o=0;o<u.length;o+=2){var c=u[o],d=u[o+1];c==="style"?h1(i,d):c==="dangerouslySetInnerHTML"?c1(i,d):c==="children"?il(i,d):Iv(i,c,d,l)}switch(a){case"input":vg(i,s);break;case"textarea":u1(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?$o(i,!!s.multiple,f,!1):h!==!!s.multiple&&(s.defaultValue!=null?$o(i,!!s.multiple,s.defaultValue,!0):$o(i,!!s.multiple,s.multiple?[]:"",!1))}i[fl]=s}catch(y){Be(t,t.return,y)}}break;case 6:if(Un(e,t),er(t),r&4){if(t.stateNode===null)throw Error(D(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){Be(t,t.return,y)}}break;case 3:if(Un(e,t),er(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ul(e.containerInfo)}catch(y){Be(t,t.return,y)}break;case 4:Un(e,t),er(t);break;case 13:Un(e,t),er(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(t_=He())),r&4&&zI(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Lt=(l=Lt)||c,Un(e,t),Lt=l):Un(e,t),er(t),r&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!c&&t.mode&1)for(B=t,c=t.child;c!==null;){for(d=B=c;B!==null;){switch(h=B,f=h.child,h.tag){case 0:case 11:case 14:case 15:ju(4,h,h.return);break;case 1:Do(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Be(r,n,y)}}break;case 5:Do(h,h.return);break;case 22:if(h.memoizedState!==null){GI(d);continue}}f!==null?(f.return=h,B=f):GI(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,l?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,u=d.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=d1("display",o))}catch(y){Be(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(y){Be(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Un(e,t),er(t),r&4&&zI(t);break;case 21:break;default:Un(e,t),er(t)}}function er(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(FA(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(il(i,""),r.flags&=-33);var s=BI(t);Zg(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=BI(t);Jg(t,a,o);break;default:throw Error(D(161))}}catch(u){Be(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function XO(t,e,n){B=t,jA(t)}function jA(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Yc;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Lt;a=Yc;var l=Lt;if(Yc=o,(Lt=u)&&!l)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?WI(i):u!==null?(u.return=o,B=u):WI(i);for(;s!==null;)B=s,jA(s),s=s.sibling;B=i,Yc=a,Lt=l}qI(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):qI(t)}}function qI(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Lt||hf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&PI(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}PI(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ul(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Lt||e.flags&512&&Xg(e)}catch(h){Be(e,e.return,h)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function GI(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function WI(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hf(4,e)}catch(u){Be(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Be(e,i,u)}}var s=e.return;try{Xg(e)}catch(u){Be(e,s,u)}break;case 5:var o=e.return;try{Xg(e)}catch(u){Be(e,o,u)}}}catch(u){Be(e,e.return,u)}if(e===t){B=null;break}var a=e.sibling;if(a!==null){a.return=e.return,B=a;break}B=e.return}}var JO=Math.ceil,mh=Wr.ReactCurrentDispatcher,Zv=Wr.ReactCurrentOwner,Nn=Wr.ReactCurrentBatchConfig,le=0,pt=null,rt=null,Pt=0,pn=0,Oo=Wi(0),at=0,_l=null,$s=0,ff=0,e_=0,Bu=null,tn=null,t_=0,aa=1/0,Rr=null,gh=!1,ey=null,Ii=null,Xc=!1,fi=null,yh=0,zu=0,ty=null,Td=-1,Sd=0;function Wt(){return le&6?He():Td!==-1?Td:Td=He()}function Ti(t){return t.mode&1?le&2&&Pt!==0?Pt&-Pt:VO.transition!==null?(Sd===0&&(Sd=S1()),Sd):(t=pe,t!==0||(t=window.event,t=t===void 0?16:x1(t.type)),t):1}function Wn(t,e,n,r){if(50<zu)throw zu=0,ty=null,Error(D(185));tc(t,n,r),(!(le&2)||t!==pt)&&(t===pt&&(!(le&2)&&(ff|=n),at===4&&li(t,Pt)),cn(t,r),n===1&&le===0&&!(e.mode&1)&&(aa=He()+500,lf&&Ki()))}function cn(t,e){var n=t.callbackNode;VD(t,e);var r=eh(t,t===pt?Pt:0);if(r===0)n!==null&&tI(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&tI(n),e===1)t.tag===0?OO(KI.bind(null,t)):Y1(KI.bind(null,t)),bO(function(){!(le&6)&&Ki()}),n=null;else{switch(A1(r)){case 1:n=Pv;break;case 4:n=I1;break;case 16:n=Zd;break;case 536870912:n=T1;break;default:n=Zd}n=QA(n,BA.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function BA(t,e){if(Td=-1,Sd=0,le&6)throw Error(D(327));var n=t.callbackNode;if(qo()&&t.callbackNode!==n)return null;var r=eh(t,t===pt?Pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vh(t,r);else{e=r;var i=le;le|=2;var s=qA();(pt!==t||Pt!==e)&&(Rr=null,aa=He()+500,Rs(t,e));do try{tV();break}catch(a){zA(t,a)}while(1);Uv(),mh.current=s,le=i,rt!==null?e=0:(pt=null,Pt=0,e=at)}if(e!==0){if(e===2&&(i=Cg(t),i!==0&&(r=i,e=ny(t,i))),e===1)throw n=_l,Rs(t,0),li(t,r),cn(t,He()),n;if(e===6)li(t,r);else{if(i=t.current.alternate,!(r&30)&&!ZO(i)&&(e=vh(t,r),e===2&&(s=Cg(t),s!==0&&(r=s,e=ny(t,s))),e===1))throw n=_l,Rs(t,0),li(t,r),cn(t,He()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(D(345));case 2:as(t,tn,Rr);break;case 3:if(li(t,r),(r&130023424)===r&&(e=t_+500-He(),10<e)){if(eh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Lg(as.bind(null,t,tn,Rr),e);break}as(t,tn,Rr);break;case 4:if(li(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Gn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*JO(r/1960))-r,10<r){t.timeoutHandle=Lg(as.bind(null,t,tn,Rr),r);break}as(t,tn,Rr);break;case 5:as(t,tn,Rr);break;default:throw Error(D(329))}}}return cn(t,He()),t.callbackNode===n?BA.bind(null,t):null}function ny(t,e){var n=Bu;return t.current.memoizedState.isDehydrated&&(Rs(t,e).flags|=256),t=vh(t,e),t!==2&&(e=tn,tn=n,e!==null&&ry(e)),t}function ry(t){tn===null?tn=t:tn.push.apply(tn,t)}function ZO(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function li(t,e){for(e&=~e_,e&=~ff,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gn(e),r=1<<n;t[n]=-1,e&=~r}}function KI(t){if(le&6)throw Error(D(327));qo();var e=eh(t,0);if(!(e&1))return cn(t,He()),null;var n=vh(t,e);if(t.tag!==0&&n===2){var r=Cg(t);r!==0&&(e=r,n=ny(t,r))}if(n===1)throw n=_l,Rs(t,0),li(t,e),cn(t,He()),n;if(n===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,as(t,tn,Rr),cn(t,He()),null}function n_(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(aa=He()+500,lf&&Ki())}}function Us(t){fi!==null&&fi.tag===0&&!(le&6)&&qo();var e=le;le|=1;var n=Nn.transition,r=pe;try{if(Nn.transition=null,pe=1,t)return t()}finally{pe=r,Nn.transition=n,le=e,!(le&6)&&Ki()}}function r_(){pn=Oo.current,Pe(Oo)}function Rs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,kO(n)),rt!==null)for(n=rt.return;n!==null;){var r=n;switch(Mv(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sh();break;case 3:sa(),Pe(un),Pe($t),Wv();break;case 5:Gv(r);break;case 4:sa();break;case 13:Pe(Oe);break;case 19:Pe(Oe);break;case 10:jv(r.type._context);break;case 22:case 23:r_()}n=n.return}if(pt=t,rt=t=Si(t.current,null),Pt=pn=e,at=0,_l=null,e_=ff=$s=0,tn=Bu=null,ys!==null){for(e=0;e<ys.length;e++)if(n=ys[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ys=null}return t}function zA(t,e){do{var n=rt;try{if(Uv(),wd.current=ph,fh){for(var r=Le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fh=!1}if(Fs=0,dt=ot=Le=null,Uu=!1,gl=0,Zv.current=null,n===null||n.return===null){at=1,_l=e,rt=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Pt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=OI(o);if(f!==null){f.flags&=-257,VI(f,o,a,s,e),f.mode&1&&DI(s,l,e),e=f,u=l;var v=e.updateQueue;if(v===null){var y=new Set;y.add(u),e.updateQueue=y}else v.add(u);break e}else{if(!(e&1)){DI(s,l,e),i_();break e}u=Error(D(426))}}else if(be&&a.mode&1){var w=OI(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),VI(w,o,a,s,e),Fv(oa(u,a));break e}}s=u=oa(u,a),at!==4&&(at=2),Bu===null?Bu=[s]:Bu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=RA(s,u,e);RI(s,m);break e;case 1:a=u;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ii===null||!Ii.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=PA(s,a,e);RI(s,_);break e}}s=s.return}while(s!==null)}WA(n)}catch(I){e=I,rt===n&&n!==null&&(rt=n=n.return);continue}break}while(1)}function qA(){var t=mh.current;return mh.current=ph,t===null?ph:t}function i_(){(at===0||at===3||at===2)&&(at=4),pt===null||!($s&268435455)&&!(ff&268435455)||li(pt,Pt)}function vh(t,e){var n=le;le|=2;var r=qA();(pt!==t||Pt!==e)&&(Rr=null,Rs(t,e));do try{eV();break}catch(i){zA(t,i)}while(1);if(Uv(),le=n,mh.current=r,rt!==null)throw Error(D(261));return pt=null,Pt=0,at}function eV(){for(;rt!==null;)GA(rt)}function tV(){for(;rt!==null&&!RD();)GA(rt)}function GA(t){var e=HA(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?WA(t):rt=e,Zv.current=null}function WA(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=HO(n,e),n!==null){n.flags&=32767,rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{at=6,rt=null;return}}else if(n=KO(n,e,pn),n!==null){rt=n;return}if(e=e.sibling,e!==null){rt=e;return}rt=e=t}while(e!==null);at===0&&(at=5)}function as(t,e,n){var r=pe,i=Nn.transition;try{Nn.transition=null,pe=1,nV(t,e,n,r)}finally{Nn.transition=i,pe=r}return null}function nV(t,e,n,r){do qo();while(fi!==null);if(le&6)throw Error(D(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(LD(t,s),t===pt&&(rt=pt=null,Pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xc||(Xc=!0,QA(Zd,function(){return qo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nn.transition,Nn.transition=null;var o=pe;pe=1;var a=le;le|=4,Zv.current=null,YO(t,n),UA(n,t),IO(Og),th=!!Dg,Og=Dg=null,t.current=n,XO(n),PD(),le=a,pe=o,Nn.transition=s}else t.current=n;if(Xc&&(Xc=!1,fi=t,yh=i),s=t.pendingLanes,s===0&&(Ii=null),bD(n.stateNode),cn(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gh)throw gh=!1,t=ey,ey=null,t;return yh&1&&t.tag!==0&&qo(),s=t.pendingLanes,s&1?t===ty?zu++:(zu=0,ty=t):zu=0,Ki(),null}function qo(){if(fi!==null){var t=A1(yh),e=Nn.transition,n=pe;try{if(Nn.transition=null,pe=16>t?16:t,fi===null)var r=!1;else{if(t=fi,fi=null,yh=0,le&6)throw Error(D(331));var i=le;for(le|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(B=l;B!==null;){var c=B;switch(c.tag){case 0:case 11:case 15:ju(8,c,s)}var d=c.child;if(d!==null)d.return=c,B=d;else for(;B!==null;){c=B;var h=c.sibling,f=c.return;if(MA(c),c===l){B=null;break}if(h!==null){h.return=f,B=h;break}B=f}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ju(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,B=m;break e}B=s.return}}var p=t.current;for(B=p;B!==null;){o=B;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,B=g;else e:for(o=p;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hf(9,a)}}catch(I){Be(a,a.return,I)}if(a===o){B=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,B=_;break e}B=a.return}}if(le=i,Ki(),mr&&typeof mr.onPostCommitFiberRoot=="function")try{mr.onPostCommitFiberRoot(rf,t)}catch{}r=!0}return r}finally{pe=n,Nn.transition=e}}return!1}function HI(t,e,n){e=oa(n,e),e=RA(t,e,1),t=Ei(t,e,1),e=Wt(),t!==null&&(tc(t,1,e),cn(t,e))}function Be(t,e,n){if(t.tag===3)HI(t,t,n);else for(;e!==null;){if(e.tag===3){HI(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ii===null||!Ii.has(r))){t=oa(n,t),t=PA(e,t,1),e=Ei(e,t,1),t=Wt(),e!==null&&(tc(e,1,t),cn(e,t));break}}e=e.return}}function rV(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&n,pt===t&&(Pt&n)===n&&(at===4||at===3&&(Pt&130023424)===Pt&&500>He()-t_?Rs(t,0):e_|=n),cn(t,e)}function KA(t,e){e===0&&(t.mode&1?(e=jc,jc<<=1,!(jc&130023424)&&(jc=4194304)):e=1);var n=Wt();t=jr(t,e),t!==null&&(tc(t,e,n),cn(t,n))}function iV(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),KA(t,n)}function sV(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(e),KA(t,n)}var HA;HA=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,WO(t,e,n);nn=!!(t.flags&131072)}else nn=!1,be&&e.flags&1048576&&X1(e,uh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Id(t,e),t=e.pendingProps;var i=na(e,$t.current);zo(e,n),i=Hv(null,e,r,t,i,n);var s=Qv();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(r)?(s=!0,oh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zv(e),i.updater=cf,e.stateNode=i,i._reactInternals=e,zg(e,r,t,n),e=Wg(null,e,r,!0,s,n)):(e.tag=0,be&&s&&Lv(e),jt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Id(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=aV(r),t=jn(r,t),i){case 0:e=Gg(null,e,r,t,n);break e;case 1:e=FI(null,e,r,t,n);break e;case 11:e=LI(null,e,r,t,n);break e;case 14:e=MI(null,e,r,jn(r.type,t),n);break e}throw Error(D(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),Gg(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),FI(t,e,r,i,n);case 3:e:{if(xA(e),t===null)throw Error(D(387));r=e.pendingProps,s=e.memoizedState,i=s.element,tA(t,e),dh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=oa(Error(D(423)),e),e=$I(t,e,r,n,i);break e}else if(r!==i){i=oa(Error(D(424)),e),e=$I(t,e,r,n,i);break e}else for(gn=wi(e.stateNode.containerInfo.firstChild),vn=e,be=!0,zn=null,n=sA(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ra(),r===i){e=Br(t,e,n);break e}jt(t,e,r,n)}e=e.child}return e;case 5:return oA(e),t===null&&Ug(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vg(r,i)?o=null:s!==null&&Vg(r,s)&&(e.flags|=32),bA(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&Ug(e),null;case 13:return NA(t,e,n);case 4:return qv(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ia(e,null,r,n):jt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),LI(t,e,r,i,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ee(lh,r._currentValue),r._currentValue=o,s!==null)if(Hn(s.value,o)){if(s.children===i.children&&!un.current){e=Br(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Lr(-1,n&-n),u.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),jg(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(D(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),jg(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,zo(e,n),i=Dn(i),r=r(i),e.flags|=1,jt(t,e,r,n),e.child;case 14:return r=e.type,i=jn(r,e.pendingProps),i=jn(r.type,i),MI(t,e,r,i,n);case 15:return CA(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),Id(t,e),e.tag=1,ln(r)?(t=!0,oh(e)):t=!1,zo(e,n),rA(e,r,i),zg(e,r,i,n),Wg(null,e,r,!0,t,n);case 19:return DA(t,e,n);case 22:return kA(t,e,n)}throw Error(D(156,e.tag))};function QA(t,e){return E1(t,e)}function oV(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,r){return new oV(t,e,n,r)}function s_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aV(t){if(typeof t=="function")return s_(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sv)return 11;if(t===Av)return 14}return 2}function Si(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ad(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")s_(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case So:return Ps(n.children,i,s,e);case Tv:o=8,i|=8;break;case fg:return t=bn(12,n,e,i|2),t.elementType=fg,t.lanes=s,t;case pg:return t=bn(13,n,e,i),t.elementType=pg,t.lanes=s,t;case mg:return t=bn(19,n,e,i),t.elementType=mg,t.lanes=s,t;case i1:return pf(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case n1:o=10;break e;case r1:o=9;break e;case Sv:o=11;break e;case Av:o=14;break e;case oi:o=16,r=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return e=bn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ps(t,e,n,r){return t=bn(7,t,r,e),t.lanes=n,t}function pf(t,e,n,r){return t=bn(22,t,r,e),t.elementType=i1,t.lanes=n,t.stateNode={isHidden:!1},t}function Sm(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function Am(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uV(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sm(0),this.expirationTimes=sm(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sm(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function o_(t,e,n,r,i,s,o,a,u){return t=new uV(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zv(s),t}function lV(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:To,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function YA(t){if(!t)return xi;t=t._reactInternals;e:{if(to(t)!==t||t.tag!==1)throw Error(D(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(D(171))}if(t.tag===1){var n=t.type;if(ln(n))return Q1(t,n,e)}return e}function XA(t,e,n,r,i,s,o,a,u){return t=o_(n,r,!0,t,i,s,o,a,u),t.context=YA(null),n=t.current,r=Wt(),i=Ti(n),s=Lr(r,i),s.callback=e??null,Ei(n,s,i),t.current.lanes=i,tc(t,i,r),cn(t,r),t}function mf(t,e,n,r){var i=e.current,s=Wt(),o=Ti(i);return n=YA(n),e.context===null?e.context=n:e.pendingContext=n,e=Lr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ei(i,e,o),t!==null&&(Wn(t,i,o,s),_d(t,i,o)),o}function _h(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function QI(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function a_(t,e){QI(t,e),(t=t.alternate)&&QI(t,e)}function cV(){return null}var JA=typeof reportError=="function"?reportError:function(t){console.error(t)};function u_(t){this._internalRoot=t}gf.prototype.render=u_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(D(409));mf(t,e,null,null)};gf.prototype.unmount=u_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Us(function(){mf(null,t,null,null)}),e[Ur]=null}};function gf(t){this._internalRoot=t}gf.prototype.unstable_scheduleHydration=function(t){if(t){var e=C1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ui.length&&e!==0&&e<ui[n].priority;n++);ui.splice(n,0,t),n===0&&b1(t)}};function l_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function YI(){}function dV(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var l=_h(o);s.call(l)}}var o=XA(e,r,t,0,null,!1,!1,"",YI);return t._reactRootContainer=o,t[Ur]=o.current,dl(t.nodeType===8?t.parentNode:t),Us(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=_h(u);a.call(l)}}var u=o_(t,0,!1,null,null,!1,!1,"",YI);return t._reactRootContainer=u,t[Ur]=u.current,dl(t.nodeType===8?t.parentNode:t),Us(function(){mf(e,u,n,r)}),u}function vf(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=_h(o);a.call(u)}}mf(e,o,t,i)}else o=dV(n,e,t,i,r);return _h(o)}R1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Au(e.pendingLanes);n!==0&&(Cv(e,n|1),cn(e,He()),!(le&6)&&(aa=He()+500,Ki()))}break;case 13:Us(function(){var r=jr(t,1);if(r!==null){var i=Wt();Wn(r,t,1,i)}}),a_(t,1)}};kv=function(t){if(t.tag===13){var e=jr(t,134217728);if(e!==null){var n=Wt();Wn(e,t,134217728,n)}a_(t,134217728)}};P1=function(t){if(t.tag===13){var e=Ti(t),n=jr(t,e);if(n!==null){var r=Wt();Wn(n,t,e,r)}a_(t,e)}};C1=function(){return pe};k1=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Ag=function(t,e,n){switch(e){case"input":if(vg(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=uf(r);if(!i)throw Error(D(90));o1(r),vg(r,i)}}}break;case"textarea":u1(t,n);break;case"select":e=n.value,e!=null&&$o(t,!!n.multiple,e,!1)}};m1=n_;g1=Us;var hV={usingClientEntryPoint:!1,Events:[rc,Co,uf,f1,p1,n_]},lu={findFiberByHostInstance:gs,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},fV={bundleType:lu.bundleType,version:lu.version,rendererPackageName:lu.rendererPackageName,rendererConfig:lu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_1(t),t===null?null:t.stateNode},findFiberByHostInstance:lu.findFiberByHostInstance||cV,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jc.isDisabled&&Jc.supportsFiber)try{rf=Jc.inject(fV),mr=Jc}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hV;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!l_(e))throw Error(D(200));return lV(t,e,null,n)};In.createRoot=function(t,e){if(!l_(t))throw Error(D(299));var n=!1,r="",i=JA;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=o_(t,1,!1,null,null,n,!1,r,i),t[Ur]=e.current,dl(t.nodeType===8?t.parentNode:t),new u_(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=_1(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return Us(t)};In.hydrate=function(t,e,n){if(!yf(e))throw Error(D(200));return vf(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!l_(t))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=JA;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=XA(e,null,t,1,n??null,i,!1,s,o),t[Ur]=e.current,dl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gf(e)};In.render=function(t,e,n){if(!yf(e))throw Error(D(200));return vf(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!yf(t))throw Error(D(40));return t._reactRootContainer?(Us(function(){vf(null,null,t,!1,function(){t._reactRootContainer=null,t[Ur]=null})}),!0):!1};In.unstable_batchedUpdates=n_;In.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yf(n))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return vf(t,e,n,!1,r)};In.version="18.2.0-next-9e3b772b8-20220608";function ZA(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ZA)}catch(t){console.error(t)}}ZA(),XS.exports=In;var eR=XS.exports,XI=eR;dg.createRoot=XI.createRoot,dg.hydrateRoot=XI.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wl(){return wl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wl.apply(this,arguments)}var pi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pi||(pi={}));const JI="popstate";function pV(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return iy("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:wh(i)}return gV(e,n,null,t)}function Xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function c_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mV(){return Math.random().toString(36).substr(2,8)}function ZI(t,e){return{usr:t.state,key:t.key,idx:e}}function iy(t,e,n,r){return n===void 0&&(n=null),wl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Na(e):e,{state:n,key:e&&e.key||r||mV()})}function wh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Na(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function gV(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=pi.Pop,u=null,l=c();l==null&&(l=0,o.replaceState(wl({},o.state,{idx:l}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=pi.Pop;let w=c(),m=w==null?null:w-l;l=w,u&&u({action:a,location:y.location,delta:m})}function h(w,m){a=pi.Push;let p=iy(y.location,w,m);n&&n(p,w),l=c()+1;let g=ZI(p,l),_=y.createHref(p);try{o.pushState(g,"",_)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(_)}s&&u&&u({action:a,location:y.location,delta:1})}function f(w,m){a=pi.Replace;let p=iy(y.location,w,m);n&&n(p,w),l=c();let g=ZI(p,l),_=y.createHref(p);o.replaceState(g,"",_),s&&u&&u({action:a,location:y.location,delta:0})}function v(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:wh(w);return Xe(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return a},get location(){return t(i,o)},listen(w){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(JI,d),u=w,()=>{i.removeEventListener(JI,d),u=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let m=v(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:f,go(w){return o.go(w)}};return y}var e0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(e0||(e0={}));function yV(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Na(e):e,i=d_(r.pathname||"/",n);if(i==null)return null;let s=tR(t);vV(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=PV(s[a],bV(i));return o}function tR(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Xe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let l=Ai([r,u.relativePath]),c=n.concat(u);s.children&&s.children.length>0&&(Xe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),tR(s.children,e,c,l)),!(s.path==null&&!s.index)&&e.push({path:l,score:AV(l,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of nR(s.path))i(s,o,u)}),e}function nR(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=nR(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function vV(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:RV(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const _V=/^:\w+$/,wV=3,EV=2,IV=1,TV=10,SV=-2,t0=t=>t==="*";function AV(t,e){let n=t.split("/"),r=n.length;return n.some(t0)&&(r+=SV),e&&(r+=EV),n.filter(i=>!t0(i)).reduce((i,s)=>i+(_V.test(s)?wV:s===""?IV:TV),r)}function RV(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function PV(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,l=i==="/"?e:e.slice(i.length)||"/",c=CV({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},l);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Ai([i,c.pathname]),pathnameBase:OV(Ai([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Ai([i,c.pathnameBase]))}return s}function CV(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=kV(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((l,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return l[c]=xV(a[d]||"",c),l},{}),pathname:s,pathnameBase:o,pattern:t}}function kV(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),c_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function bV(t){try{return decodeURI(t)}catch(e){return c_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xV(t,e){try{return decodeURIComponent(t)}catch(n){return c_(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function d_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function NV(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Na(t):t;return{pathname:n?n.startsWith("/")?n:DV(n,e):e,search:VV(r),hash:LV(i)}}function DV(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rm(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function h_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function f_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Na(t):(i=wl({},t),Xe(!i.pathname||!i.pathname.includes("?"),Rm("?","pathname","search",i)),Xe(!i.pathname||!i.pathname.includes("#"),Rm("#","pathname","hash",i)),Xe(!i.search||!i.search.includes("#"),Rm("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let u=NV(i,a),l=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(l||c)&&(u.pathname+="/"),u}const Ai=t=>t.join("/").replace(/\/\/+/g,"/"),OV=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),VV=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,LV=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function MV(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const rR=["post","put","patch","delete"];new Set(rR);const FV=["get",...rR];new Set(FV);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eh(){return Eh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Eh.apply(this,arguments)}const p_=b.createContext(null),$V=b.createContext(null),Da=b.createContext(null),_f=b.createContext(null),Kr=b.createContext({outlet:null,matches:[],isDataRoute:!1}),iR=b.createContext(null);function UV(t,e){let{relative:n}=e===void 0?{}:e;Oa()||Xe(!1);let{basename:r,navigator:i}=b.useContext(Da),{hash:s,pathname:o,search:a}=aR(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Ai([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Oa(){return b.useContext(_f)!=null}function sc(){return Oa()||Xe(!1),b.useContext(_f).location}function sR(t){b.useContext(Da).static||b.useLayoutEffect(t)}function m_(){let{isDataRoute:t}=b.useContext(Kr);return t?ZV():jV()}function jV(){Oa()||Xe(!1);let t=b.useContext(p_),{basename:e,navigator:n}=b.useContext(Da),{matches:r}=b.useContext(Kr),{pathname:i}=sc(),s=JSON.stringify(h_(r).map(u=>u.pathnameBase)),o=b.useRef(!1);return sR(()=>{o.current=!0}),b.useCallback(function(u,l){if(l===void 0&&(l={}),!o.current)return;if(typeof u=="number"){n.go(u);return}let c=f_(u,JSON.parse(s),i,l.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Ai([e,c.pathname])),(l.replace?n.replace:n.push)(c,l.state,l)},[e,n,s,i,t])}function oR(){let{matches:t}=b.useContext(Kr),e=t[t.length-1];return e?e.params:{}}function aR(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=b.useContext(Kr),{pathname:i}=sc(),s=JSON.stringify(h_(r).map(o=>o.pathnameBase));return b.useMemo(()=>f_(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function BV(t,e){return zV(t,e)}function zV(t,e,n){Oa()||Xe(!1);let{navigator:r}=b.useContext(Da),{matches:i}=b.useContext(Kr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let u=sc(),l;if(e){var c;let y=typeof e=="string"?Na(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||Xe(!1),l=y}else l=u;let d=l.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",f=yV(t,{pathname:h}),v=HV(f&&f.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Ai([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Ai([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&v?b.createElement(_f.Provider,{value:{location:Eh({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:pi.Pop}},v):v}function qV(){let t=JV(),e=MV(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,s)}const GV=b.createElement(qV,null);class WV extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?b.createElement(Kr.Provider,{value:this.props.routeContext},b.createElement(iR.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function KV(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(p_);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Kr.Provider,{value:e},r)}function HV(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id]));a>=0||Xe(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,u,l)=>{let c=u.route.id?o==null?void 0:o[u.route.id]:null,d=null;n&&(d=u.route.errorElement||GV);let h=e.concat(s.slice(0,l+1)),f=()=>{let v;return c?v=d:u.route.Component?v=b.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=a,b.createElement(KV,{match:u,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:v})};return n&&(u.route.ErrorBoundary||u.route.errorElement||l===0)?b.createElement(WV,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var sy;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(sy||(sy={}));var El;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(El||(El={}));function QV(t){let e=b.useContext(p_);return e||Xe(!1),e}function YV(t){let e=b.useContext($V);return e||Xe(!1),e}function XV(t){let e=b.useContext(Kr);return e||Xe(!1),e}function uR(t){let e=XV(),n=e.matches[e.matches.length-1];return n.route.id||Xe(!1),n.route.id}function JV(){var t;let e=b.useContext(iR),n=YV(El.UseRouteError),r=uR(El.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function ZV(){let{router:t}=QV(sy.UseNavigateStable),e=uR(El.UseNavigateStable),n=b.useRef(!1);return sR(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Eh({fromRouteId:e},s)))},[t,e])}function eL(t){let{to:e,replace:n,state:r,relative:i}=t;Oa()||Xe(!1);let{matches:s}=b.useContext(Kr),{pathname:o}=sc(),a=m_(),u=f_(e,h_(s).map(c=>c.pathnameBase),o,i==="path"),l=JSON.stringify(u);return b.useEffect(()=>a(JSON.parse(l),{replace:n,state:r,relative:i}),[a,l,i,n,r]),null}function _s(t){Xe(!1)}function tL(t){let{basename:e="/",children:n=null,location:r,navigationType:i=pi.Pop,navigator:s,static:o=!1}=t;Oa()&&Xe(!1);let a=e.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Na(r));let{pathname:l="/",search:c="",hash:d="",state:h=null,key:f="default"}=r,v=b.useMemo(()=>{let y=d_(l,a);return y==null?null:{location:{pathname:y,search:c,hash:d,state:h,key:f},navigationType:i}},[a,l,c,d,h,f,i]);return v==null?null:b.createElement(Da.Provider,{value:u},b.createElement(_f.Provider,{children:n,value:v}))}function lR(t){let{children:e,location:n}=t;return BV(oy(e),n)}var n0;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(n0||(n0={}));new Promise(()=>{});function oy(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,oy(r.props.children,s));return}r.type!==_s&&Xe(!1),!r.props.index||!r.props.children||Xe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=oy(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ay(){return ay=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ay.apply(this,arguments)}function nL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function rL(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function iL(t,e){return t.button===0&&(!e||e==="_self")&&!rL(t)}const sL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],oL="startTransition",r0=iD[oL];function aL(t){let{basename:e,children:n,future:r,window:i}=t,s=b.useRef();s.current==null&&(s.current=pV({window:i,v5Compat:!0}));let o=s.current,[a,u]=b.useState({action:o.action,location:o.location}),{v7_startTransition:l}=r||{},c=b.useCallback(d=>{l&&r0?r0(()=>u(d)):u(d)},[u,l]);return b.useLayoutEffect(()=>o.listen(c),[o,c]),b.createElement(tL,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const uL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cR=b.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:l,preventScrollReset:c}=e,d=nL(e,sL),{basename:h}=b.useContext(Da),f,v=!1;if(typeof l=="string"&&lL.test(l)&&(f=l,uL))try{let p=new URL(window.location.href),g=l.startsWith("//")?new URL(p.protocol+l):new URL(l),_=d_(g.pathname,h);g.origin===p.origin&&_!=null?l=_+g.search+g.hash:v=!0}catch{}let y=UV(l,{relative:i}),w=cL(l,{replace:o,state:a,target:u,preventScrollReset:c,relative:i});function m(p){r&&r(p),p.defaultPrevented||w(p)}return b.createElement("a",ay({},d,{href:f||y,onClick:v||s?r:m,ref:n,target:u}))});var i0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(i0||(i0={}));var s0;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(s0||(s0={}));function cL(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=m_(),u=sc(),l=aR(t,{relative:o});return b.useCallback(c=>{if(iL(c,n)){c.preventDefault();let d=r!==void 0?r:wh(u)===wh(l);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[u,a,l,r,i,n,t,s,o])}var dR={exports:{}},hR={};/**
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
 */var wf=b,EL=fR;function IL(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var TL=typeof Object.is=="function"?Object.is:IL,SL=EL.useSyncExternalStore,AL=wf.useRef,RL=wf.useEffect,PL=wf.useMemo,CL=wf.useDebugValue;wL.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=AL(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=PL(function(){function u(f){if(!l){if(l=!0,c=f,f=r(f),i!==void 0&&o.hasValue){var v=o.value;if(i(v,f))return d=v}return d=f}if(v=d,TL(c,f))return v;var y=r(f);return i!==void 0&&i(v,y)?v:(c=f,d=y)}var l=!1,c,d,h=n===void 0?null:n;return[function(){return u(e())},h===null?void 0:function(){return u(h())}]},[e,n,r,i]);var a=SL(t,s[0],s[1]);return RL(function(){o.hasValue=!0,o.value=a},[a]),CL(a),a};function kL(t){t()}let pR=kL;const bL=t=>pR=t,xL=()=>pR,o0=Symbol.for("react-redux-context"),a0=typeof globalThis<"u"?globalThis:{};function NL(){var t;if(!b.createContext)return{};const e=(t=a0[o0])!=null?t:a0[o0]=new Map;let n=e.get(b.createContext);return n||(n=b.createContext(null),e.set(b.createContext,n)),n}const mR=NL(),DL=()=>{throw new Error("uSES not initialized!")};function Ri(){return Ri=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ri.apply(this,arguments)}function g_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var gR={exports:{}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yt=typeof Symbol=="function"&&Symbol.for,y_=yt?Symbol.for("react.element"):60103,v_=yt?Symbol.for("react.portal"):60106,Ef=yt?Symbol.for("react.fragment"):60107,If=yt?Symbol.for("react.strict_mode"):60108,Tf=yt?Symbol.for("react.profiler"):60114,Sf=yt?Symbol.for("react.provider"):60109,Af=yt?Symbol.for("react.context"):60110,__=yt?Symbol.for("react.async_mode"):60111,Rf=yt?Symbol.for("react.concurrent_mode"):60111,Pf=yt?Symbol.for("react.forward_ref"):60112,Cf=yt?Symbol.for("react.suspense"):60113,OL=yt?Symbol.for("react.suspense_list"):60120,kf=yt?Symbol.for("react.memo"):60115,bf=yt?Symbol.for("react.lazy"):60116,VL=yt?Symbol.for("react.block"):60121,LL=yt?Symbol.for("react.fundamental"):60117,ML=yt?Symbol.for("react.responder"):60118,FL=yt?Symbol.for("react.scope"):60119;function Sn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case y_:switch(t=t.type,t){case __:case Rf:case Ef:case Tf:case If:case Cf:return t;default:switch(t=t&&t.$$typeof,t){case Af:case Pf:case bf:case kf:case Sf:return t;default:return e}}case v_:return e}}}function yR(t){return Sn(t)===Rf}ge.AsyncMode=__;ge.ConcurrentMode=Rf;ge.ContextConsumer=Af;ge.ContextProvider=Sf;ge.Element=y_;ge.ForwardRef=Pf;ge.Fragment=Ef;ge.Lazy=bf;ge.Memo=kf;ge.Portal=v_;ge.Profiler=Tf;ge.StrictMode=If;ge.Suspense=Cf;ge.isAsyncMode=function(t){return yR(t)||Sn(t)===__};ge.isConcurrentMode=yR;ge.isContextConsumer=function(t){return Sn(t)===Af};ge.isContextProvider=function(t){return Sn(t)===Sf};ge.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===y_};ge.isForwardRef=function(t){return Sn(t)===Pf};ge.isFragment=function(t){return Sn(t)===Ef};ge.isLazy=function(t){return Sn(t)===bf};ge.isMemo=function(t){return Sn(t)===kf};ge.isPortal=function(t){return Sn(t)===v_};ge.isProfiler=function(t){return Sn(t)===Tf};ge.isStrictMode=function(t){return Sn(t)===If};ge.isSuspense=function(t){return Sn(t)===Cf};ge.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Ef||t===Rf||t===Tf||t===If||t===Cf||t===OL||typeof t=="object"&&t!==null&&(t.$$typeof===bf||t.$$typeof===kf||t.$$typeof===Sf||t.$$typeof===Af||t.$$typeof===Pf||t.$$typeof===LL||t.$$typeof===ML||t.$$typeof===FL||t.$$typeof===VL)};ge.typeOf=Sn;gR.exports=ge;var $L=gR.exports,w_=$L,UL={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jL={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},BL={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vR={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},E_={};E_[w_.ForwardRef]=BL;E_[w_.Memo]=vR;function u0(t){return w_.isMemo(t)?vR:E_[t.$$typeof]||UL}var zL=Object.defineProperty,qL=Object.getOwnPropertyNames,l0=Object.getOwnPropertySymbols,GL=Object.getOwnPropertyDescriptor,WL=Object.getPrototypeOf,c0=Object.prototype;function _R(t,e,n){if(typeof e!="string"){if(c0){var r=WL(e);r&&r!==c0&&_R(t,r,n)}var i=qL(e);l0&&(i=i.concat(l0(e)));for(var s=u0(t),o=u0(e),a=0;a<i.length;++a){var u=i[a];if(!jL[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var l=GL(e,u);try{zL(t,u,l)}catch{}}}}return t}var KL=_R;const d0=mv(KL);var wR={exports:{}},ye={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_=Symbol.for("react.element"),T_=Symbol.for("react.portal"),xf=Symbol.for("react.fragment"),Nf=Symbol.for("react.strict_mode"),Df=Symbol.for("react.profiler"),Of=Symbol.for("react.provider"),Vf=Symbol.for("react.context"),HL=Symbol.for("react.server_context"),Lf=Symbol.for("react.forward_ref"),Mf=Symbol.for("react.suspense"),Ff=Symbol.for("react.suspense_list"),$f=Symbol.for("react.memo"),Uf=Symbol.for("react.lazy"),QL=Symbol.for("react.offscreen"),ER;ER=Symbol.for("react.module.reference");function Fn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case I_:switch(t=t.type,t){case xf:case Df:case Nf:case Mf:case Ff:return t;default:switch(t=t&&t.$$typeof,t){case HL:case Vf:case Lf:case Uf:case $f:case Of:return t;default:return e}}case T_:return e}}}ye.ContextConsumer=Vf;ye.ContextProvider=Of;ye.Element=I_;ye.ForwardRef=Lf;ye.Fragment=xf;ye.Lazy=Uf;ye.Memo=$f;ye.Portal=T_;ye.Profiler=Df;ye.StrictMode=Nf;ye.Suspense=Mf;ye.SuspenseList=Ff;ye.isAsyncMode=function(){return!1};ye.isConcurrentMode=function(){return!1};ye.isContextConsumer=function(t){return Fn(t)===Vf};ye.isContextProvider=function(t){return Fn(t)===Of};ye.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===I_};ye.isForwardRef=function(t){return Fn(t)===Lf};ye.isFragment=function(t){return Fn(t)===xf};ye.isLazy=function(t){return Fn(t)===Uf};ye.isMemo=function(t){return Fn(t)===$f};ye.isPortal=function(t){return Fn(t)===T_};ye.isProfiler=function(t){return Fn(t)===Df};ye.isStrictMode=function(t){return Fn(t)===Nf};ye.isSuspense=function(t){return Fn(t)===Mf};ye.isSuspenseList=function(t){return Fn(t)===Ff};ye.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===xf||t===Df||t===Nf||t===Mf||t===Ff||t===QL||typeof t=="object"&&t!==null&&(t.$$typeof===Uf||t.$$typeof===$f||t.$$typeof===Of||t.$$typeof===Vf||t.$$typeof===Lf||t.$$typeof===ER||t.getModuleId!==void 0)};ye.typeOf=Fn;wR.exports=ye;var YL=wR.exports;const XL=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function JL(t,e,n,r,{areStatesEqual:i,areOwnPropsEqual:s,areStatePropsEqual:o}){let a=!1,u,l,c,d,h;function f(p,g){return u=p,l=g,c=t(u,l),d=e(r,l),h=n(c,d,l),a=!0,h}function v(){return c=t(u,l),e.dependsOnOwnProps&&(d=e(r,l)),h=n(c,d,l),h}function y(){return t.dependsOnOwnProps&&(c=t(u,l)),e.dependsOnOwnProps&&(d=e(r,l)),h=n(c,d,l),h}function w(){const p=t(u,l),g=!o(p,c);return c=p,g&&(h=n(c,d,l)),h}function m(p,g){const _=!s(g,l),I=!i(p,u,g,l);return u=p,l=g,_&&I?v():_?y():I?w():h}return function(g,_){return a?m(g,_):f(g,_)}}function ZL(t,e){let{initMapStateToProps:n,initMapDispatchToProps:r,initMergeProps:i}=e,s=g_(e,XL);const o=n(t,s),a=r(t,s),u=i(t,s);return JL(o,a,u,t,s)}function eM(t,e){const n={};for(const r in t){const i=t[r];typeof i=="function"&&(n[r]=(...s)=>e(i(...s)))}return n}function uy(t){return function(n){const r=t(n);function i(){return r}return i.dependsOnOwnProps=!1,i}}function h0(t){return t.dependsOnOwnProps?!!t.dependsOnOwnProps:t.length!==1}function IR(t,e){return function(r,{displayName:i}){const s=function(a,u){return s.dependsOnOwnProps?s.mapToProps(a,u):s.mapToProps(a,void 0)};return s.dependsOnOwnProps=!0,s.mapToProps=function(a,u){s.mapToProps=t,s.dependsOnOwnProps=h0(t);let l=s(a,u);return typeof l=="function"&&(s.mapToProps=l,s.dependsOnOwnProps=h0(l),l=s(a,u)),l},s}}function S_(t,e){return(n,r)=>{throw new Error(`Invalid value of type ${typeof t} for ${e} argument when connecting component ${r.wrappedComponentName}.`)}}function tM(t){return t&&typeof t=="object"?uy(e=>eM(t,e)):t?typeof t=="function"?IR(t):S_(t,"mapDispatchToProps"):uy(e=>({dispatch:e}))}function nM(t){return t?typeof t=="function"?IR(t):S_(t,"mapStateToProps"):uy(()=>({}))}function rM(t,e,n){return Ri({},n,t,e)}function iM(t){return function(n,{displayName:r,areMergedPropsEqual:i}){let s=!1,o;return function(u,l,c){const d=t(u,l,c);return s?i(d,o)||(o=d):(s=!0,o=d),o}}}function sM(t){return t?typeof t=="function"?iM(t):S_(t,"mergeProps"):()=>rM}function oM(){const t=xL();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const f0={notify(){},get:()=>[]};function TR(t,e){let n,r=f0;function i(d){return u(),r.subscribe(d)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return!!n}function u(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=oM())}function l(){n&&(n(),n=void 0,r.clear(),r=f0)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:u,tryUnsubscribe:l,getListeners:()=>r};return c}const aM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ih=aM?b.useLayoutEffect:b.useEffect;function p0(t,e){return t===e?t!==0||e!==0||1/t===1/e:t!==t&&e!==e}function Cm(t,e){if(p0(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(!Object.prototype.hasOwnProperty.call(e,n[i])||!p0(t[n[i]],e[n[i]]))return!1;return!0}const uM=["reactReduxForwardedRef"];let SR=DL;const lM=t=>{SR=t},cM=[null,null];function dM(t,e,n){Ih(()=>t(...e),n)}function hM(t,e,n,r,i,s){t.current=r,n.current=!1,i.current&&(i.current=null,s())}function fM(t,e,n,r,i,s,o,a,u,l,c){if(!t)return()=>{};let d=!1,h=null;const f=()=>{if(d||!a.current)return;const y=e.getState();let w,m;try{w=r(y,i.current)}catch(p){m=p,h=p}m||(h=null),w===s.current?o.current||l():(s.current=w,u.current=w,o.current=!0,c())};return n.onStateChange=f,n.trySubscribe(),f(),()=>{if(d=!0,n.tryUnsubscribe(),n.onStateChange=null,h)throw h}}function pM(t,e){return t===e}function An(t,e,n,{pure:r,areStatesEqual:i=pM,areOwnPropsEqual:s=Cm,areStatePropsEqual:o=Cm,areMergedPropsEqual:a=Cm,forwardRef:u=!1,context:l=mR}={}){const c=l,d=nM(t),h=tM(e),f=sM(n),v=!!t;return w=>{const m=w.displayName||w.name||"Component",p=`Connect(${m})`,g={shouldHandleStateChanges:v,displayName:p,wrappedComponentName:m,WrappedComponent:w,initMapStateToProps:d,initMapDispatchToProps:h,initMergeProps:f,areStatesEqual:i,areStatePropsEqual:o,areOwnPropsEqual:s,areMergedPropsEqual:a};function _(C){const[L,J,z]=b.useMemo(()=>{const{reactReduxForwardedRef:_e}=C,Et=g_(C,uM);return[C.context,_e,Et]},[C]),De=b.useMemo(()=>L&&L.Consumer&&YL.isContextConsumer(b.createElement(L.Consumer,null))?L:c,[L,c]),Ue=b.useContext(De),Ut=!!C.store&&!!C.store.getState&&!!C.store.dispatch,Tr=!!Ue&&!!Ue.store,st=Ut?C.store:Ue.store,fn=Tr?Ue.getServerState:st.getState,We=b.useMemo(()=>ZL(st.dispatch,g),[st]),[F,H]=b.useMemo(()=>{if(!v)return cM;const _e=TR(st,Ut?void 0:Ue.subscription),Et=_e.notifyNestedSubs.bind(_e);return[_e,Et]},[st,Ut,Ue]),Q=b.useMemo(()=>Ut?Ue:Ri({},Ue,{subscription:F}),[Ut,Ue,F]),E=b.useRef(),P=b.useRef(z),T=b.useRef(),O=b.useRef(!1);b.useRef(!1);const q=b.useRef(!1),K=b.useRef();Ih(()=>(q.current=!0,()=>{q.current=!1}),[]);const Y=b.useMemo(()=>()=>T.current&&z===P.current?T.current:We(st.getState(),z),[st,z]),ne=b.useMemo(()=>Et=>F?fM(v,st,F,We,P,E,O,q,T,H,Et):()=>{},[F]);dM(hM,[P,E,O,z,T,H]);let je;try{je=SR(ne,Y,fn?()=>We(fn(),z):Y)}catch(_e){throw K.current&&(_e.message+=`
The error may be correlated with this previous error:
${K.current.stack}

`),_e}Ih(()=>{K.current=void 0,T.current=void 0,E.current=je});const ke=b.useMemo(()=>b.createElement(w,Ri({},je,{ref:J})),[J,w,je]);return b.useMemo(()=>v?b.createElement(De.Provider,{value:Q},ke):ke,[De,ke,Q])}const S=b.memo(_);if(S.WrappedComponent=w,S.displayName=_.displayName=p,u){const L=b.forwardRef(function(z,De){return b.createElement(S,Ri({},z,{reactReduxForwardedRef:De}))});return L.displayName=p,L.WrappedComponent=w,d0(L,w)}return d0(S,w)}}function mM({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",noopCheck:s="once"}){const o=b.useMemo(()=>{const l=TR(t);return{store:t,subscription:l,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:s}},[t,r,i,s]),a=b.useMemo(()=>t.getState(),[t]);Ih(()=>{const{subscription:l}=o;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),a!==t.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[o,a]);const u=e||mR;return b.createElement(u.Provider,{value:o},n)}lM(fR.useSyncExternalStore);bL(eR.unstable_batchedUpdates);function Rd(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Rd=function(n){return typeof n}:Rd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Rd(t)}function gM(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function yM(t,e,n){return e&&m0(t.prototype,e),n&&m0(t,n),t}function vM(t,e){return e&&(Rd(e)==="object"||typeof e=="function")?e:Pd(t)}function ly(t){return ly=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ly(t)}function Pd(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _M(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&cy(t,e)}function cy(t,e){return cy=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},cy(t,e)}function Cd(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var AR=function(t){_M(e,t);function e(){var n,r;gM(this,e);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=vM(this,(n=ly(e)).call.apply(n,[this].concat(s))),Cd(Pd(r),"state",{bootstrapped:!1}),Cd(Pd(r),"_unsubscribe",void 0),Cd(Pd(r),"handlePersistorState",function(){var a=r.props.persistor,u=a.getState(),l=u.bootstrapped;l&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return yM(e,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),e}(b.PureComponent);Cd(AR,"defaultProps",{children:null,loading:null});function Il(t){"@babel/helpers - typeof";return Il=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Il(t)}function wM(t,e){if(Il(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Il(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function EM(t){var e=wM(t,"string");return Il(e)==="symbol"?e:String(e)}function IM(t,e,n){return e=EM(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function y0(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?g0(Object(n),!0).forEach(function(r){IM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Vt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var v0=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),km=function(){return Math.random().toString(36).substring(7).split("").join(".")},Th={INIT:"@@redux/INIT"+km(),REPLACE:"@@redux/REPLACE"+km(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+km()}};function TM(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function A_(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Vt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Vt(1));return n(A_)(t,e)}if(typeof t!="function")throw new Error(Vt(2));var i=t,s=e,o=[],a=o,u=!1;function l(){a===o&&(a=o.slice())}function c(){if(u)throw new Error(Vt(3));return s}function d(y){if(typeof y!="function")throw new Error(Vt(4));if(u)throw new Error(Vt(5));var w=!0;return l(),a.push(y),function(){if(w){if(u)throw new Error(Vt(6));w=!1,l();var p=a.indexOf(y);a.splice(p,1),o=null}}}function h(y){if(!TM(y))throw new Error(Vt(7));if(typeof y.type>"u")throw new Error(Vt(8));if(u)throw new Error(Vt(9));try{u=!0,s=i(s,y)}finally{u=!1}for(var w=o=a,m=0;m<w.length;m++){var p=w[m];p()}return y}function f(y){if(typeof y!="function")throw new Error(Vt(10));i=y,h({type:Th.REPLACE})}function v(){var y,w=d;return y={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(Vt(11));function g(){p.next&&p.next(c())}g();var _=w(g);return{unsubscribe:_}}},y[v0]=function(){return this},y}return h({type:Th.INIT}),r={dispatch:h,subscribe:d,getState:c,replaceReducer:f},r[v0]=v,r}function SM(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:Th.INIT});if(typeof r>"u")throw new Error(Vt(12));if(typeof n(void 0,{type:Th.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Vt(13))})}function AM(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{SM(n)}catch(a){o=a}return function(u,l){if(u===void 0&&(u={}),o)throw o;for(var c=!1,d={},h=0;h<s.length;h++){var f=s[h],v=n[f],y=u[f],w=v(y,l);if(typeof w>"u")throw l&&l.type,new Error(Vt(14));d[f]=w,c=c||w!==y}return c=c||s.length!==Object.keys(u).length,c?d:u}}function RR(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function RM(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(Vt(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(u){return u(o)});return s=RR.apply(void 0,a)(i.dispatch),y0(y0({},i),{},{dispatch:s})}}}var R_="persist:",PR="persist/FLUSH",P_="persist/REHYDRATE",CR="persist/PAUSE",kR="persist/PERSIST",bR="persist/PURGE",xR="persist/REGISTER",PM=-1;function kd(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?kd=function(n){return typeof n}:kd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},kd(t)}function _0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function CM(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_0(n,!0).forEach(function(r){kM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_0(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function kM(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function bM(t,e,n,r){r.debug;var i=CM({},n);return t&&kd(t)==="object"&&Object.keys(t).forEach(function(s){s!=="_persist"&&e[s]===n[s]&&(i[s]=t[s])}),i}function xM(t){var e=t.blacklist||null,n=t.whitelist||null,r=t.transforms||[],i=t.throttle||0,s="".concat(t.keyPrefix!==void 0?t.keyPrefix:R_).concat(t.key),o=t.storage,a;t.serialize===!1?a=function(I){return I}:typeof t.serialize=="function"?a=t.serialize:a=NM;var u=t.writeFailHandler||null,l={},c={},d=[],h=null,f=null,v=function(I){Object.keys(I).forEach(function(S){m(S)&&l[S]!==I[S]&&d.indexOf(S)===-1&&d.push(S)}),Object.keys(l).forEach(function(S){I[S]===void 0&&m(S)&&d.indexOf(S)===-1&&l[S]!==void 0&&d.push(S)}),h===null&&(h=setInterval(y,i)),l=I};function y(){if(d.length===0){h&&clearInterval(h),h=null;return}var _=d.shift(),I=r.reduce(function(S,C){return C.in(S,_,l)},l[_]);if(I!==void 0)try{c[_]=a(I)}catch(S){console.error("redux-persist/createPersistoid: error serializing state",S)}else delete c[_];d.length===0&&w()}function w(){Object.keys(c).forEach(function(_){l[_]===void 0&&delete c[_]}),f=o.setItem(s,a(c)).catch(p)}function m(_){return!(n&&n.indexOf(_)===-1&&_!=="_persist"||e&&e.indexOf(_)!==-1)}function p(_){u&&u(_)}var g=function(){for(;d.length!==0;)y();return f||Promise.resolve()};return{update:v,flush:g}}function NM(t){return JSON.stringify(t)}function DM(t){var e=t.transforms||[],n="".concat(t.keyPrefix!==void 0?t.keyPrefix:R_).concat(t.key),r=t.storage;t.debug;var i;return t.deserialize===!1?i=function(o){return o}:typeof t.deserialize=="function"?i=t.deserialize:i=OM,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(u){o[u]=e.reduceRight(function(l,c){return c.out(l,u,a)},i(a[u]))}),o}catch(u){throw u}else return})}function OM(t){return JSON.parse(t)}function VM(t){var e=t.storage,n="".concat(t.keyPrefix!==void 0?t.keyPrefix:R_).concat(t.key);return e.removeItem(n,LM)}function LM(t){}function w0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ar(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?w0(n,!0).forEach(function(r){MM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w0(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function MM(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function FM(t,e){if(t==null)return{};var n=$M(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function $M(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var UM=5e3;function jM(t,e){var n=t.version!==void 0?t.version:PM;t.debug;var r=t.stateReconciler===void 0?bM:t.stateReconciler,i=t.getStoredState||DM,s=t.timeout!==void 0?t.timeout:UM,o=null,a=!1,u=!0,l=function(d){return d._persist.rehydrated&&o&&!u&&o.update(d),d};return function(c,d){var h=c||{},f=h._persist,v=FM(h,["_persist"]),y=v;if(d.type===kR){var w=!1,m=function(L,J){w||(d.rehydrate(t.key,L,J),w=!0)};if(s&&setTimeout(function(){!w&&m(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(t.key,'"')))},s),u=!1,o||(o=xM(t)),f)return Ar({},e(y,d),{_persist:f});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(t.key),i(t).then(function(C){var L=t.migrate||function(J,z){return Promise.resolve(J)};L(C,n).then(function(J){m(J)},function(J){m(void 0,J)})},function(C){m(void 0,C)}),Ar({},e(y,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===bR)return a=!0,d.result(VM(t)),Ar({},e(y,d),{_persist:f});if(d.type===PR)return d.result(o&&o.flush()),Ar({},e(y,d),{_persist:f});if(d.type===CR)u=!0;else if(d.type===P_){if(a)return Ar({},y,{_persist:Ar({},f,{rehydrated:!0})});if(d.key===t.key){var p=e(y,d),g=d.payload,_=r!==!1&&g!==void 0?r(g,c,p,t):p,I=Ar({},_,{_persist:Ar({},f,{rehydrated:!0})});return l(I)}}}if(!f)return e(c,d);var S=e(y,d);return S===y?c:l(Ar({},S,{_persist:f}))}}function E0(t){return qM(t)||zM(t)||BM()}function BM(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function zM(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function qM(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function I0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function dy(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?I0(n,!0).forEach(function(r){GM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I0(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function GM(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var NR={registry:[],bootstrapped:!1},WM=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:NR,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case xR:return dy({},e,{registry:[].concat(E0(e.registry),[n.key])});case P_:var r=e.registry.indexOf(n.key),i=E0(e.registry);return i.splice(r,1),dy({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function KM(t,e,n){var r=n||!1,i=A_(WM,NR,e&&e.enhancer?e.enhancer:void 0),s=function(l){i.dispatch({type:xR,key:l})},o=function(l,c,d){var h={type:P_,payload:c,err:d,key:l};t.dispatch(h),i.dispatch(h),r&&a.getState().bootstrapped&&(r(),r=!1)},a=dy({},i,{purge:function(){var l=[];return t.dispatch({type:bR,result:function(d){l.push(d)}}),Promise.all(l)},flush:function(){var l=[];return t.dispatch({type:PR,result:function(d){l.push(d)}}),Promise.all(l)},pause:function(){t.dispatch({type:CR})},persist:function(){t.dispatch({type:kR,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}var hy={exports:{}};(function(t,e){(function(n,r){r(e)})(tu,function(n){function r(E,P){E.super_=P,E.prototype=Object.create(P.prototype,{constructor:{value:E,enumerable:!1,writable:!0,configurable:!0}})}function i(E,P){Object.defineProperty(this,"kind",{value:E,enumerable:!0}),P&&P.length&&Object.defineProperty(this,"path",{value:P,enumerable:!0})}function s(E,P,T){s.super_.call(this,"E",E),Object.defineProperty(this,"lhs",{value:P,enumerable:!0}),Object.defineProperty(this,"rhs",{value:T,enumerable:!0})}function o(E,P){o.super_.call(this,"N",E),Object.defineProperty(this,"rhs",{value:P,enumerable:!0})}function a(E,P){a.super_.call(this,"D",E),Object.defineProperty(this,"lhs",{value:P,enumerable:!0})}function u(E,P,T){u.super_.call(this,"A",E),Object.defineProperty(this,"index",{value:P,enumerable:!0}),Object.defineProperty(this,"item",{value:T,enumerable:!0})}function l(E,P,T){var O=E.slice((T||P)+1||E.length);return E.length=P<0?E.length+P:P,E.push.apply(E,O),E}function c(E){var P=typeof E>"u"?"undefined":st(E);return P!=="object"?P:E===Math?"math":E===null?"null":Array.isArray(E)?"array":Object.prototype.toString.call(E)==="[object Date]"?"date":typeof E.toString=="function"&&/^\/.*\//.test(E.toString())?"regexp":"object"}function d(E,P,T,O,q,K,Y){q=q||[],Y=Y||[];var ne=q.slice(0);if(typeof K<"u"){if(O){if(typeof O=="function"&&O(ne,K))return;if((typeof O>"u"?"undefined":st(O))==="object"){if(O.prefilter&&O.prefilter(ne,K))return;if(O.normalize){var je=O.normalize(ne,K,E,P);je&&(E=je[0],P=je[1])}}}ne.push(K)}c(E)==="regexp"&&c(P)==="regexp"&&(E=E.toString(),P=P.toString());var ke=typeof E>"u"?"undefined":st(E),Jt=typeof P>"u"?"undefined":st(P),_e=ke!=="undefined"||Y&&Y[Y.length-1].lhs&&Y[Y.length-1].lhs.hasOwnProperty(K),Et=Jt!=="undefined"||Y&&Y[Y.length-1].rhs&&Y[Y.length-1].rhs.hasOwnProperty(K);if(!_e&&Et)T(new o(ne,P));else if(!Et&&_e)T(new a(ne,E));else if(c(E)!==c(P))T(new s(ne,E,P));else if(c(E)==="date"&&E-P!==0)T(new s(ne,E,P));else if(ke==="object"&&E!==null&&P!==null)if(Y.filter(function(Ke){return Ke.lhs===E}).length)E!==P&&T(new s(ne,E,P));else{if(Y.push({lhs:E,rhs:P}),Array.isArray(E)){var we;for(E.length,we=0;we<E.length;we++)we>=P.length?T(new u(ne,we,new a(void 0,E[we]))):d(E[we],P[we],T,O,ne,we,Y);for(;we<P.length;)T(new u(ne,we,new o(void 0,P[we++])))}else{var rs=Object.keys(E),Sr=Object.keys(P);rs.forEach(function(Ke,ho){var Ja=Sr.indexOf(Ke);Ja>=0?(d(E[Ke],P[Ke],T,O,ne,Ke,Y),Sr=l(Sr,Ja)):d(E[Ke],void 0,T,O,ne,Ke,Y)}),Sr.forEach(function(Ke){d(void 0,P[Ke],T,O,ne,Ke,Y)})}Y.length=Y.length-1}else E!==P&&(ke==="number"&&isNaN(E)&&isNaN(P)||T(new s(ne,E,P)))}function h(E,P,T,O){return O=O||[],d(E,P,function(q){q&&O.push(q)},T),O.length?O:void 0}function f(E,P,T){if(T.path&&T.path.length){var O,q=E[P],K=T.path.length-1;for(O=0;O<K;O++)q=q[T.path[O]];switch(T.kind){case"A":f(q[T.path[O]],T.index,T.item);break;case"D":delete q[T.path[O]];break;case"E":case"N":q[T.path[O]]=T.rhs}}else switch(T.kind){case"A":f(E[P],T.index,T.item);break;case"D":E=l(E,P);break;case"E":case"N":E[P]=T.rhs}return E}function v(E,P,T){if(E&&P&&T&&T.kind){for(var O=E,q=-1,K=T.path?T.path.length-1:0;++q<K;)typeof O[T.path[q]]>"u"&&(O[T.path[q]]=typeof T.path[q]=="number"?[]:{}),O=O[T.path[q]];switch(T.kind){case"A":f(T.path?O[T.path[q]]:O,T.index,T.item);break;case"D":delete O[T.path[q]];break;case"E":case"N":O[T.path[q]]=T.rhs}}}function y(E,P,T){if(T.path&&T.path.length){var O,q=E[P],K=T.path.length-1;for(O=0;O<K;O++)q=q[T.path[O]];switch(T.kind){case"A":y(q[T.path[O]],T.index,T.item);break;case"D":q[T.path[O]]=T.lhs;break;case"E":q[T.path[O]]=T.lhs;break;case"N":delete q[T.path[O]]}}else switch(T.kind){case"A":y(E[P],T.index,T.item);break;case"D":E[P]=T.lhs;break;case"E":E[P]=T.lhs;break;case"N":E=l(E,P)}return E}function w(E,P,T){if(E&&P&&T&&T.kind){var O,q,K=E;for(q=T.path.length-1,O=0;O<q;O++)typeof K[T.path[O]]>"u"&&(K[T.path[O]]={}),K=K[T.path[O]];switch(T.kind){case"A":y(K[T.path[O]],T.index,T.item);break;case"D":K[T.path[O]]=T.lhs;break;case"E":K[T.path[O]]=T.lhs;break;case"N":delete K[T.path[O]]}}}function m(E,P,T){if(E&&P){var O=function(q){T&&!T(E,P,q)||v(E,P,q)};d(E,P,O)}}function p(E){return"color: "+F[E].color+"; font-weight: bold"}function g(E){var P=E.kind,T=E.path,O=E.lhs,q=E.rhs,K=E.index,Y=E.item;switch(P){case"E":return[T.join("."),O,"→",q];case"N":return[T.join("."),q];case"D":return[T.join(".")];case"A":return[T.join(".")+"["+K+"]",Y];default:return[]}}function _(E,P,T,O){var q=h(E,P);try{O?T.groupCollapsed("diff"):T.group("diff")}catch{T.log("diff")}q?q.forEach(function(K){var Y=K.kind,ne=g(K);T.log.apply(T,["%c "+F[Y].text,p(Y)].concat(fn(ne)))}):T.log("—— no diff ——");try{T.groupEnd()}catch{T.log("—— diff end —— ")}}function I(E,P,T,O){switch(typeof E>"u"?"undefined":st(E)){case"object":return typeof E[O]=="function"?E[O].apply(E,fn(T)):E[O];case"function":return E(P);default:return E}}function S(E){var P=E.timestamp,T=E.duration;return function(O,q,K){var Y=["action"];return Y.push("%c"+String(O.type)),P&&Y.push("%c@ "+q),T&&Y.push("%c(in "+K.toFixed(2)+" ms)"),Y.join(" ")}}function C(E,P){var T=P.logger,O=P.actionTransformer,q=P.titleFormatter,K=q===void 0?S(P):q,Y=P.collapsed,ne=P.colors,je=P.level,ke=P.diff,Jt=typeof P.titleFormatter>"u";E.forEach(function(_e,Et){var we=_e.started,rs=_e.startedTime,Sr=_e.action,Ke=_e.prevState,ho=_e.error,Ja=_e.took,is=_e.nextState,Qp=E[Et+1];Qp&&(is=Qp.prevState,Ja=Qp.started-we);var Zn=O(Sr),BE=typeof Y=="function"?Y(function(){return is},Sr,_e):Y,VN=Ut(rs),LN=ne.title?"color: "+ne.title(Zn)+";":"",Za=["color: gray; font-weight: lighter;"];Za.push(LN),P.timestamp&&Za.push("color: gray; font-weight: lighter;"),P.duration&&Za.push("color: gray; font-weight: lighter;");var eu=K(Zn,VN,Ja);try{BE?ne.title&&Jt?T.groupCollapsed.apply(T,["%c "+eu].concat(Za)):T.groupCollapsed(eu):ne.title&&Jt?T.group.apply(T,["%c "+eu].concat(Za)):T.group(eu)}catch{T.log(eu)}var Yp=I(je,Zn,[Ke],"prevState"),Xp=I(je,Zn,[Zn],"action"),Jp=I(je,Zn,[ho,Ke],"error"),Zp=I(je,Zn,[is],"nextState");if(Yp)if(ne.prevState){var MN="color: "+ne.prevState(Ke)+"; font-weight: bold";T[Yp]("%c prev state",MN,Ke)}else T[Yp]("prev state",Ke);if(Xp)if(ne.action){var FN="color: "+ne.action(Zn)+"; font-weight: bold";T[Xp]("%c action    ",FN,Zn)}else T[Xp]("action    ",Zn);if(ho&&Jp)if(ne.error){var $N="color: "+ne.error(ho,Ke)+"; font-weight: bold;";T[Jp]("%c error     ",$N,ho)}else T[Jp]("error     ",ho);if(Zp)if(ne.nextState){var UN="color: "+ne.nextState(is)+"; font-weight: bold";T[Zp]("%c next state",UN,is)}else T[Zp]("next state",is);ke&&_(Ke,is,T,BE);try{T.groupEnd()}catch{T.log("—— log end ——")}})}function L(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},P=Object.assign({},H,E),T=P.logger,O=P.stateTransformer,q=P.errorTransformer,K=P.predicate,Y=P.logErrors,ne=P.diffPredicate;if(typeof T>"u")return function(){return function(ke){return function(Jt){return ke(Jt)}}};if(E.getState&&E.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
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
`),function(){return function(ke){return function(Jt){return ke(Jt)}}};var je=[];return function(ke){var Jt=ke.getState;return function(_e){return function(Et){if(typeof K=="function"&&!K(Jt,Et))return _e(Et);var we={};je.push(we),we.started=Tr.now(),we.startedTime=new Date,we.prevState=O(Jt()),we.action=Et;var rs=void 0;if(Y)try{rs=_e(Et)}catch(Ke){we.error=q(Ke)}else rs=_e(Et);we.took=Tr.now()-we.started,we.nextState=O(Jt());var Sr=P.diff&&typeof ne=="function"?ne(Jt,Et):P.diff;if(C(je,Object.assign({},P,{diff:Sr})),je.length=0,we.error)throw we.error;return rs}}}}var J,z,De=function(E,P){return new Array(P+1).join(E)},Ue=function(E,P){return De("0",P-E.toString().length)+E},Ut=function(E){return Ue(E.getHours(),2)+":"+Ue(E.getMinutes(),2)+":"+Ue(E.getSeconds(),2)+"."+Ue(E.getMilliseconds(),3)},Tr=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,st=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},fn=function(E){if(Array.isArray(E)){for(var P=0,T=Array(E.length);P<E.length;P++)T[P]=E[P];return T}return Array.from(E)},We=[];J=(typeof tu>"u"?"undefined":st(tu))==="object"&&tu?tu:typeof window<"u"?window:{},z=J.DeepDiff,z&&We.push(function(){typeof z<"u"&&J.DeepDiff===h&&(J.DeepDiff=z,z=void 0)}),r(s,i),r(o,i),r(a,i),r(u,i),Object.defineProperties(h,{diff:{value:h,enumerable:!0},observableDiff:{value:d,enumerable:!0},applyDiff:{value:m,enumerable:!0},applyChange:{value:v,enumerable:!0},revertChange:{value:w,enumerable:!0},isConflict:{value:function(){return typeof z<"u"},enumerable:!0},noConflict:{value:function(){return We&&(We.forEach(function(E){E()}),We=null),h},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},H={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(E){return E},actionTransformer:function(E){return E},errorTransformer:function(E){return E},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},Q=function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},P=E.dispatch,T=E.getState;return typeof P=="function"||typeof T=="function"?L()({dispatch:P,getState:T}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};n.defaults=H,n.createLogger=L,n.logger=Q,n.default=Q,Object.defineProperty(n,"__esModule",{value:!0})})})(hy,hy.exports);var HM=hy.exports;const QM=mv(HM);var Jn=function(e){return"@@redux-saga/"+e},YM=Jn("CANCEL_PROMISE"),DR=Jn("CHANNEL_END"),OR=Jn("IO"),T0=Jn("MATCH"),VR=Jn("MULTICAST"),LR=Jn("SAGA_ACTION"),MR=Jn("SELF_CANCELLATION"),XM=Jn("TASK"),Go=Jn("TASK_CANCEL"),FR=Jn("TERMINATE"),JM=Jn("LOCATION"),$R=function(e){return e==null},bd=function(e){return e!=null},dn=function(e){return typeof e=="function"},C_=function(e){return typeof e=="string"},Hi=Array.isArray,jf=function(e){return e&&dn(e.then)},k_=function(e){return e&&dn(e.next)&&dn(e.throw)},S0=function t(e){return e&&(C_(e)||jR(e)||dn(e)||Hi(e)&&e.every(t))},b_=function(e){return e&&dn(e.take)&&dn(e.close)},UR=function(e){return dn(e)&&e.hasOwnProperty("toString")},jR=function(e){return!!e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype},ZM=function(e){return b_(e)&&e[VR]},e2=function(e){return function(){return e}},t2=e2(!0),qt=function(){},n2=function(e){return e},x_=function(e,n){Ri(e,n),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(n).forEach(function(r){e[r]=n[r]})},r2=function(e,n){var r;return(r=[]).concat.apply(r,n.map(e))};function Bf(t,e){var n=t.indexOf(e);n>=0&&t.splice(n,1)}function i2(t){var e=!1;return function(){e||(e=!0,t())}}var s2=function(e){throw e},o2=function(e){return{value:e,done:!0}};function fy(t,e,n){e===void 0&&(e=s2),n===void 0&&(n="iterator");var r={meta:{name:n},next:t,throw:e,return:o2,isSagaIterator:!0};return typeof Symbol<"u"&&(r[Symbol.iterator]=function(){return r}),r}function a2(t,e){var n=e.sagaStack;console.error(t),console.error(n)}var BR=function(e){return Array.apply(null,new Array(e))},u2=function(e){return function(n){return e(Object.defineProperty(n,LR,{value:!0}))}},zR=function(e){return e===FR},qR=function(e){return e===Go},GR=function(e){return zR(e)||qR(e)};function WR(t,e){var n=Object.keys(t),r=n.length,i=0,s,o=Hi(t)?BR(r):{},a={};function u(){i===r&&(s=!0,e(o))}return n.forEach(function(l){var c=function(h,f){s||(f||GR(h)?(e.cancel(),e(h,f)):(o[l]=h,i++,u()))};c.cancel=qt,a[l]=c}),e.cancel=function(){s||(s=!0,n.forEach(function(l){return a[l].cancel()}))},a}function N_(t){return{name:t.name||"anonymous",location:KR(t)}}function KR(t){return t[JM]}var l2="Channel's Buffer overflow!",c2=1,d2=3,HR=4;function h2(t,e){t===void 0&&(t=10);var n=new Array(t),r=0,i=0,s=0,o=function(c){n[i]=c,i=(i+1)%t,r++},a=function(){if(r!=0){var c=n[s];return n[s]=null,r--,s=(s+1)%t,c}},u=function(){for(var c=[];r;)c.push(a());return c};return{isEmpty:function(){return r==0},put:function(c){if(r<t)o(c);else{var d;switch(e){case c2:throw new Error(l2);case d2:n[i]=c,i=(i+1)%t,s=i;break;case HR:d=2*t,n=u(),r=n.length,i=n.length,s=0,n.length=d,t=d,o(c);break}}},take:a,flush:u}}var f2=function(e){return h2(e,HR)},xd="TAKE",QR="PUT",YR="ALL",p2="RACE",XR="CALL",m2="CPS",JR="FORK",g2="JOIN",ZR="CANCEL",y2="SELECT",v2="ACTION_CHANNEL",_2="CANCELLED",w2="FLUSH",E2="GET_CONTEXT",I2="SET_CONTEXT",Pi=function(e,n){var r;return r={},r[OR]=!0,r.combinator=!1,r.type=e,r.payload=n,r};function eP(t,e){if(t===void 0&&(t="*"),S0(t))return bd(e)&&console.warn("take(pattern) takes one argument but two were provided. Consider passing an array for listening to several action types"),Pi(xd,{pattern:t});if(ZM(t)&&bd(e)&&S0(e))return Pi(xd,{channel:t,pattern:e});if(b_(t))return bd(e)&&console.warn("take(channel) takes one argument but two were provided. Second argument is ignored."),Pi(xd,{channel:t})}function Vn(t,e){return $R(e)&&(e=t,t=void 0),Pi(QR,{channel:t,action:e})}function D_(t){var e=Pi(YR,t);return e.combinator=!0,e}function tP(t,e){var n=null,r;return dn(t)?r=t:(Hi(t)?(n=t[0],r=t[1]):(n=t.context,r=t.fn),n&&C_(r)&&dn(n[r])&&(r=n[r])),{context:n,fn:r,args:e}}function Cn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Pi(XR,tP(t,n))}function zf(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Pi(JR,tP(t,n))}function T2(t){return t===void 0&&(t=MR),Pi(ZR,t)}function S2(){var t={};return t.promise=new Promise(function(e,n){t.resolve=e,t.reject=n}),t}var nP=[],qf=0;function A2(t){try{O_(),t()}finally{sP()}}function rP(t){nP.push(t),qf||(O_(),oP())}function iP(t){try{return O_(),t()}finally{oP()}}function O_(){qf++}function sP(){qf--}function oP(){sP();for(var t;!qf&&(t=nP.shift())!==void 0;)A2(t)}var R2=function(e){return function(n){return e.some(function(r){return V_(r)(n)})}},P2=function(e){return function(n){return e(n)}},A0=function(e){return function(n){return n.type===String(e)}},C2=function(e){return function(n){return n.type===e}},aP=function(){return t2};function V_(t){var e=t==="*"?aP:C_(t)?A0:Hi(t)?R2:UR(t)?A0:dn(t)?P2:jR(t)?C2:null;if(e===null)throw new Error("invalid pattern: "+t);return e(t)}var qu={type:DR},L_=function(e){return e&&e.type===DR};function k2(t){t===void 0&&(t=f2());var e=!1,n=[];function r(a){if(!e){if(n.length===0)return t.put(a);var u=n.shift();u(a)}}function i(a){e&&t.isEmpty()?a(qu):t.isEmpty()?(n.push(a),a.cancel=function(){Bf(n,a)}):a(t.take())}function s(a){if(e&&t.isEmpty()){a(qu);return}a(t.flush())}function o(){if(!e){e=!0;var a=n;n=[];for(var u=0,l=a.length;u<l;u++){var c=a[u];c(qu)}}}return{take:i,put:r,flush:s,close:o}}function b2(){var t,e=!1,n=[],r=n,i=function(){r===n&&(r=n.slice())},s=function(){e=!0;var a=n=r;r=[],a.forEach(function(u){u(qu)})};return t={},t[VR]=!0,t.put=function(a){if(!e){if(L_(a)){s();return}for(var u=n=r,l=0,c=u.length;l<c;l++){var d=u[l];d[T0](a)&&(d.cancel(),d(a))}}},t.take=function(a,u){if(u===void 0&&(u=aP),e){a(qu);return}a[T0]=u,i(),r.push(a),a.cancel=i2(function(){i(),Bf(r,a)})},t.close=s,t}function uP(){var t=b2(),e=t.put;return t.put=function(n){if(n[LR]){e(n);return}rP(function(){e(n)})},t}var cs=0,kr=1,Nd=2,lP=3;function M_(t,e){var n=t[YM];dn(n)&&(e.cancel=n),t.then(e,function(r){e(r,!0)})}var oc=0,cP=function(){return++oc},It;function x2(t,e){return t.isSagaIterator?{name:t.meta.name}:N_(e)}function N2(t){var e=t.context,n=t.fn,r=t.args;try{var i=n.apply(e,r);if(k_(i))return i;var s=!1,o=function(u){return s?{value:u,done:!0}:(s=!0,{value:i,done:!jf(i)})};return fy(o)}catch(a){return fy(function(){throw a})}}function D2(t,e,n){var r=e.channel,i=e.action,s=e.resolve;rP(function(){var o;try{o=(r?r.put:t.dispatch)(i)}catch(a){n(a,!0);return}s&&jf(o)?M_(o,n):n(o)})}function O2(t,e,n){var r=e.channel,i=r===void 0?t.channel:r,s=e.pattern,o=e.maybe,a=function(l){if(l instanceof Error){n(l,!0);return}if(L_(l)&&!o){n(FR);return}n(l)};try{i.take(a,bd(s)?V_(s):null)}catch(u){n(u,!0);return}n.cancel=a.cancel}function V2(t,e,n,r){var i=e.context,s=e.fn,o=e.args,a=r.task;try{var u=s.apply(i,o);if(jf(u)){M_(u,n);return}if(k_(u)){Gf(t,u,a.context,oc,N_(s),!1,n);return}n(u)}catch(l){n(l,!0)}}function L2(t,e,n){var r=e.context,i=e.fn,s=e.args;try{var o=function(u,l){$R(u)?n(l):n(u,!0)};i.apply(r,s.concat(o)),o.cancel&&(n.cancel=o.cancel)}catch(a){n(a,!0)}}function M2(t,e,n,r){var i=e.context,s=e.fn,o=e.args,a=e.detached,u=r.task,l=N2({context:i,fn:s,args:o}),c=x2(l,s);iP(function(){var d=Gf(t,l,u.context,oc,c,a,void 0);a?n(d):d.isRunning()?(u.queue.addTask(d),n(d)):d.isAborted()?u.queue.abort(d.error()):n(d)})}function F2(t,e,n,r){var i=r.task,s=function(u,l){if(u.isRunning()){var c={task:i,cb:l};l.cancel=function(){u.isRunning()&&Bf(u.joiners,c)},u.joiners.push(c)}else u.isAborted()?l(u.error(),!0):l(u.result())};if(Hi(e)){if(e.length===0){n([]);return}var o=WR(e,n);e.forEach(function(a,u){s(a,o[u])})}else s(e,n)}function bm(t){t.isRunning()&&t.cancel()}function $2(t,e,n,r){var i=r.task;e===MR?bm(i):Hi(e)?e.forEach(bm):bm(e),n()}function U2(t,e,n,r){var i=r.digestEffect,s=oc,o=Object.keys(e);if(o.length===0){n(Hi(e)?[]:{});return}var a=WR(e,n);o.forEach(function(u){i(e[u],s,a[u],u)})}function j2(t,e,n,r){var i=r.digestEffect,s=oc,o=Object.keys(e),a=Hi(e)?BR(o.length):{},u={},l=!1;o.forEach(function(c){var d=function(f,v){l||(v||GR(f)?(n.cancel(),n(f,v)):(n.cancel(),l=!0,a[c]=f,n(a)))};d.cancel=qt,u[c]=d}),n.cancel=function(){l||(l=!0,o.forEach(function(c){return u[c].cancel()}))},o.forEach(function(c){l||i(e[c],s,u[c],c)})}function B2(t,e,n){var r=e.selector,i=e.args;try{var s=r.apply(void 0,[t.getState()].concat(i));n(s)}catch(o){n(o,!0)}}function z2(t,e,n){var r=e.pattern,i=e.buffer,s=k2(i),o=V_(r),a=function l(c){L_(c)||t.channel.take(l,o),s.put(c)},u=s.close;s.close=function(){a.cancel(),u()},t.channel.take(a,o),n(s)}function q2(t,e,n,r){var i=r.task;n(i.isCancelled())}function G2(t,e,n){e.flush(n)}function W2(t,e,n,r){var i=r.task;n(i.context[e])}function K2(t,e,n,r){var i=r.task;x_(i.context,e),n()}var H2=(It={},It[xd]=O2,It[QR]=D2,It[YR]=U2,It[p2]=j2,It[XR]=V2,It[m2]=L2,It[JR]=M2,It[g2]=F2,It[ZR]=$2,It[y2]=B2,It[v2]=z2,It[_2]=q2,It[w2]=G2,It[E2]=W2,It[I2]=K2,It);function Q2(t,e,n){var r=[],i,s=!1;u(t);var o=function(){return r};function a(c){e(),l(),n(c,!0)}function u(c){r.push(c),c.cont=function(d,h){s||(Bf(r,c),c.cont=qt,h?a(d):(c===t&&(i=d),r.length||(s=!0,n(i))))}}function l(){s||(s=!0,r.forEach(function(c){c.cont=qt,c.cancel()}),r=[])}return{addTask:u,cancelAll:l,abort:a,getTasks:o}}function dP(t,e){return t+"?"+e}function Y2(t){var e=KR(t);if(e){var n=e.code,r=e.fileName,i=e.lineNumber,s=n+"  "+dP(r,i);return s}return""}function R0(t){var e=t.name,n=t.location;return n?e+"  "+dP(n.fileName,n.lineNumber):e}function X2(t){var e=r2(function(n){return n.cancelledTasks},t);return e.length?["Tasks cancelled due to error:"].concat(e).join(`
`):""}var F_=null,Gu=[],J2=function(e){e.crashedEffect=F_,Gu.push(e)},hP=function(){F_=null,Gu.length=0},Z2=function(e){F_=e},eF=function(){var e=Gu[0],n=Gu.slice(1),r=e.crashedEffect?Y2(e.crashedEffect):null,i="The above error occurred in task "+R0(e.meta)+(r?` 
 when executing effect `+r:"");return[i].concat(n.map(function(s){return"    created by "+R0(s.meta)}),[X2(Gu)]).join(`
`)};function tF(t,e,n,r,i,s,o){var a;o===void 0&&(o=qt);var u=cs,l,c,d=null,h=[],f=Object.create(n),v=Q2(e,function(){h.push.apply(h,v.getTasks().map(function(I){return I.meta.name}))},w);function y(){u===cs&&(u=kr,v.cancelAll(),w(Go,!1))}function w(_,I){if(!I)_===Go?u=kr:u!==kr&&(u=lP),l=_,d&&d.resolve(_);else{if(u=Nd,J2({meta:i,cancelledTasks:h}),g.isRoot){var S=eF();hP(),t.onError(_,{sagaStack:S})}c=_,d&&d.reject(_)}g.cont(_,I),g.joiners.forEach(function(C){C.cb(_,I)}),g.joiners=null}function m(_){x_(f,_)}function p(){return d||(d=S2(),u===Nd?d.reject(c):u!==cs&&d.resolve(l)),d.promise}var g=(a={},a[XM]=!0,a.id=r,a.meta=i,a.isRoot=s,a.context=f,a.joiners=[],a.queue=v,a.cancel=y,a.cont=o,a.end=w,a.setContext=m,a.toPromise=p,a.isRunning=function(){return u===cs},a.isCancelled=function(){return u===kr||u===cs&&e.status===kr},a.isAborted=function(){return u===Nd},a.result=function(){return l},a.error=function(){return c},a);return g}function Gf(t,e,n,r,i,s,o){var a=t.finalizeRunEffect(f);h.cancel=qt;var u={meta:i,cancel:d,status:cs},l=tF(t,u,n,r,i,s,o),c={task:l,digestEffect:v};function d(){u.status===cs&&(u.status=kr,h(Go))}return o&&(o.cancel=l.cancel),h(),l;function h(y,w){try{var m;w?(m=e.throw(y),hP()):qR(y)?(u.status=kr,h.cancel(),m=dn(e.return)?e.return(Go):{done:!0,value:Go}):zR(y)?m=dn(e.return)?e.return():{done:!0}:m=e.next(y),m.done?(u.status!==kr&&(u.status=lP),u.cont(m.value)):v(m.value,r,h)}catch(p){if(u.status===kr)throw p;u.status=Nd,u.cont(p,!0)}}function f(y,w,m){if(jf(y))M_(y,m);else if(k_(y))Gf(t,y,l.context,w,i,!1,m);else if(y&&y[OR]){var p=H2[y.type];p(t,y.payload,m,c)}else m(y)}function v(y,w,m,p){p===void 0&&(p="");var g=cP();t.sagaMonitor&&t.sagaMonitor.effectTriggered({effectId:g,parentEffectId:w,label:p,effect:y});var _;function I(S,C){_||(_=!0,m.cancel=qt,t.sagaMonitor&&(C?t.sagaMonitor.effectRejected(g,S):t.sagaMonitor.effectResolved(g,S)),C&&Z2(y),m(S,C))}I.cancel=qt,m.cancel=function(){_||(_=!0,I.cancel(),I.cancel=qt,t.sagaMonitor&&t.sagaMonitor.effectCancelled(g))},a(y,g,I)}}function nF(t,e){for(var n=t.channel,r=n===void 0?uP():n,i=t.dispatch,s=t.getState,o=t.context,a=o===void 0?{}:o,u=t.sagaMonitor,l=t.effectMiddlewares,c=t.onError,d=c===void 0?a2:c,h=arguments.length,f=new Array(h>2?h-2:0),v=2;v<h;v++)f[v-2]=arguments[v];var y=e.apply(void 0,f),w=cP();u&&(u.rootSagaStarted=u.rootSagaStarted||qt,u.effectTriggered=u.effectTriggered||qt,u.effectResolved=u.effectResolved||qt,u.effectRejected=u.effectRejected||qt,u.effectCancelled=u.effectCancelled||qt,u.actionDispatched=u.actionDispatched||qt,u.rootSagaStarted({effectId:w,saga:e,args:f}));var m;if(l){var p=RR.apply(void 0,l);m=function(I){return function(S,C,L){var J=function(De){return I(De,C,L)};return p(J)(S)}}}else m=n2;var g={channel:r,dispatch:u2(i),getState:s,sagaMonitor:u,onError:d,finalizeRunEffect:m};return iP(function(){var _=Gf(g,y,a,w,N_(e),!0,void 0);return u&&u.effectResolved(w,_),_})}function rF(t){var e=t===void 0?{}:t,n=e.context,r=n===void 0?{}:n,i=e.channel,s=i===void 0?uP():i,o=e.sagaMonitor,a=g_(e,["context","channel","sagaMonitor"]),u;function l(c){var d=c.getState,h=c.dispatch;return u=nF.bind(null,Ri({},a,{context:r,channel:s,dispatch:h,getState:d,sagaMonitor:o})),function(f){return function(v){o&&o.actionDispatched&&o.actionDispatched(v);var y=f(v);return s.put(v),y}}}return l.run=function(){return u.apply(void 0,arguments)},l.setContext=function(c){x_(r,c)},l}var P0=function(e){return{done:!0,value:e}},xm={};function fP(t){return b_(t)?"channel":UR(t)?String(t):dn(t)?t.name:String(t)}function pP(t,e,n){var r,i,s,o=e;function a(u,l){if(o===xm)return P0(u);if(l&&!i)throw o=xm,l;r&&r(u);var c=l?t[i](l):t[o]();return o=c.nextState,s=c.effect,r=c.stateUpdater,i=c.errorState,o===xm?P0(u):s}return fy(a,function(u){return a(null,u)},n)}function iF(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s={done:!1,value:eP(t)},o=function(c){return{done:!1,value:zf.apply(void 0,[e].concat(r,[c]))}},a,u=function(c){return a=c};return pP({q1:function(){return{nextState:"q2",effect:s,stateUpdater:u}},q2:function(){return{nextState:"q1",effect:o(a)}}},"q1","takeEvery("+fP(t)+", "+e.name+")")}function sF(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s={done:!1,value:eP(t)},o=function(f){return{done:!1,value:zf.apply(void 0,[e].concat(r,[f]))}},a=function(f){return{done:!1,value:T2(f)}},u,l,c=function(f){return u=f},d=function(f){return l=f};return pP({q1:function(){return{nextState:"q2",effect:s,stateUpdater:d}},q2:function(){return u?{nextState:"q3",effect:a(u)}:{nextState:"q1",effect:o(l),stateUpdater:c}},q3:function(){return{nextState:"q1",effect:o(l),stateUpdater:c}}},"q1","takeLatest("+fP(t)+", "+e.name+")")}function oF(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return zf.apply(void 0,[iF,t,e].concat(r))}function Va(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return zf.apply(void 0,[sF,t,e].concat(r))}/**
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
 */const mP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},aF=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gP={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,f=l&63;u||(f=64,o||(h=64)),r.push(n[c],n[d],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mP(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aF(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||d==null)throw new uF;const h=s<<2|a>>4;if(r.push(h),l!==64){const f=a<<4&240|l>>2;if(r.push(f),d!==64){const v=l<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uF extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lF=function(t){const e=mP(t);return gP.encodeByteArray(e,!0)},Sh=function(t){return lF(t).replace(/\./g,"")},yP=function(t){try{return gP.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ah(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!cF(n)||(t[n]=Ah(t[n],e[n]));return t}function cF(t){return t!=="__proto__"}/**
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
 */function dF(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hF=()=>dF().__FIREBASE_DEFAULTS__,fF=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pF=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yP(t[1]);return e&&JSON.parse(e)},$_=()=>{try{return hF()||fF()||pF()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vP=()=>{var t;return(t=$_())===null||t===void 0?void 0:t.config},mF=t=>{var e;return(e=$_())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class gF{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function yF(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Sh(JSON.stringify(n)),Sh(JSON.stringify(o)),a].join(".")}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vF(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function U_(){var t;const e=(t=$_())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _F(){return typeof self=="object"&&self.self===self}function _P(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function j_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wP(){const t=$e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wF(){return!U_()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Tl(){try{return typeof indexedDB=="object"}catch{return!1}}function EF(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const IF="FirebaseError";class Kt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=IF,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,no.prototype.create)}}class no{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?TF(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Kt(i,a,r)}}function TF(t,e){return t.replace(SF,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const SF=/\{\$([^}]+)}/g;/**
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
 */function C0(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function AF(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function py(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(k0(s)&&k0(o)){if(!py(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function k0(t){return t!==null&&typeof t=="object"}/**
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
 */function La(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Pu(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function EP(t,e){const n=new RF(t,e);return n.subscribe.bind(n)}class RF{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");PF(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Nm),i.error===void 0&&(i.error=Nm),i.complete===void 0&&(i.complete=Nm);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PF(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nm(){}/**
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
 */class CF{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gF;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bF(e))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=us){return this.instances.has(e)}getOptions(e=us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kF(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=us){return this.component?this.component.multipleInstances?e:us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kF(t){return t===us?void 0:t}function bF(t){return t.instantiationMode==="EAGER"}/**
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
 */class xF{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CF(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const B_=[];var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const IP={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},NF=ae.INFO,DF={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},OF=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=DF[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wf{constructor(e){this.name=e,this._logLevel=NF,this._logHandler=OF,this._userLogHandler=null,B_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}function VF(t){B_.forEach(e=>{e.setLogLevel(t)})}function LF(t,e){for(const n of B_){let r=null;e&&e.level&&(r=IP[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:ae[s].toLowerCase(),message:a,args:o,type:i.name})}}}const MF=(t,e)=>e.some(n=>t instanceof n);let b0,x0;function FF(){return b0||(b0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $F(){return x0||(x0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const TP=new WeakMap,my=new WeakMap,SP=new WeakMap,Dm=new WeakMap,z_=new WeakMap;function UF(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ci(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&TP.set(n,t)}).catch(()=>{}),z_.set(e,t),e}function jF(t){if(my.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});my.set(t,e)}let gy={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return my.get(t);if(e==="objectStoreNames")return t.objectStoreNames||SP.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ci(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BF(t){gy=t(gy)}function zF(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Om(this),e,...n);return SP.set(r,e.sort?e.sort():[e]),Ci(r)}:$F().includes(t)?function(...e){return t.apply(Om(this),e),Ci(TP.get(this))}:function(...e){return Ci(t.apply(Om(this),e))}}function qF(t){return typeof t=="function"?zF(t):(t instanceof IDBTransaction&&jF(t),MF(t,FF())?new Proxy(t,gy):t)}function Ci(t){if(t instanceof IDBRequest)return UF(t);if(Dm.has(t))return Dm.get(t);const e=qF(t);return e!==t&&(Dm.set(t,e),z_.set(e,t)),e}const Om=t=>z_.get(t);function GF(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ci(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ci(o.result),u.oldVersion,u.newVersion,Ci(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const WF=["get","getKey","getAll","getAllKeys","count"],KF=["put","add","delete","clear"],Vm=new Map;function N0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vm.get(e))return Vm.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=KF.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||WF.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return Vm.set(e,s),s}BF(t=>({...t,get:(e,n,r)=>N0(e,n)||t.get(e,n,r),has:(e,n)=>!!N0(e,n)||t.has(e,n)}));/**
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
 */class HF{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QF(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QF(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yy="@firebase/app",D0="0.9.14";/**
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
 */const js=new Wf("@firebase/app"),YF="@firebase/app-compat",XF="@firebase/analytics-compat",JF="@firebase/analytics",ZF="@firebase/app-check-compat",e$="@firebase/app-check",t$="@firebase/auth",n$="@firebase/auth-compat",r$="@firebase/database",i$="@firebase/database-compat",s$="@firebase/functions",o$="@firebase/functions-compat",a$="@firebase/installations",u$="@firebase/installations-compat",l$="@firebase/messaging",c$="@firebase/messaging-compat",d$="@firebase/performance",h$="@firebase/performance-compat",f$="@firebase/remote-config",p$="@firebase/remote-config-compat",m$="@firebase/storage",g$="@firebase/storage-compat",y$="@firebase/firestore",v$="@firebase/firestore-compat",_$="firebase",w$="10.0.0";/**
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
 */const Ni="[DEFAULT]",E$={[yy]:"fire-core",[YF]:"fire-core-compat",[JF]:"fire-analytics",[XF]:"fire-analytics-compat",[e$]:"fire-app-check",[ZF]:"fire-app-check-compat",[t$]:"fire-auth",[n$]:"fire-auth-compat",[r$]:"fire-rtdb",[i$]:"fire-rtdb-compat",[s$]:"fire-fn",[o$]:"fire-fn-compat",[a$]:"fire-iid",[u$]:"fire-iid-compat",[l$]:"fire-fcm",[c$]:"fire-fcm-compat",[d$]:"fire-perf",[h$]:"fire-perf-compat",[f$]:"fire-rc",[p$]:"fire-rc-compat",[m$]:"fire-gcs",[g$]:"fire-gcs-compat",[y$]:"fire-fst",[v$]:"fire-fst-compat","fire-js":"fire-js",[_$]:"fire-js-all"};/**
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
 */const Di=new Map,Sl=new Map;function Rh(t,e){try{t.container.addComponent(e)}catch(n){js.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function AP(t,e){t.container.addOrOverwriteComponent(e)}function Oi(t){const e=t.name;if(Sl.has(e))return js.debug(`There were multiple attempts to register component ${e}.`),!1;Sl.set(e,t);for(const n of Di.values())Rh(n,t);return!0}function RP(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function I$(t,e,n=Ni){RP(t,e).clearInstance(n)}function T$(){Sl.clear()}/**
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
 */const S$={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mr=new no("app","Firebase",S$);/**
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
 */let A$=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mr.create("app-deleted",{appName:this._name})}};/**
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
 */const Qi=w$;function q_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ni,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Mr.create("bad-app-name",{appName:String(i)});if(n||(n=vP()),!n)throw Mr.create("no-options");const s=Di.get(i);if(s){if(py(n,s.options)&&py(r,s.config))return s;throw Mr.create("duplicate-app",{appName:i})}const o=new xF(i);for(const u of Sl.values())o.addComponent(u);const a=new A$(n,r,o);return Di.set(i,a),a}function R$(t=Ni){const e=Di.get(t);if(!e&&t===Ni&&vP())return q_();if(!e)throw Mr.create("no-app",{appName:t});return e}function P$(){return Array.from(Di.values())}async function PP(t){const e=t.name;Di.has(e)&&(Di.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function yr(t,e,n){var r;let i=(r=E$[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),js.warn(a.join(" "));return}Oi(new _r(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function CP(t,e){if(t!==null&&typeof t!="function")throw Mr.create("invalid-log-argument");LF(t,e)}function kP(t){VF(t)}/**
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
 */const C$="firebase-heartbeat-database",k$=1,Al="firebase-heartbeat-store";let Lm=null;function bP(){return Lm||(Lm=GF(C$,k$,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Al)}}}).catch(t=>{throw Mr.create("idb-open",{originalErrorMessage:t.message})})),Lm}async function b$(t){try{return await(await bP()).transaction(Al).objectStore(Al).get(xP(t))}catch(e){if(e instanceof Kt)js.warn(e.message);else{const n=Mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});js.warn(n.message)}}}async function O0(t,e){try{const r=(await bP()).transaction(Al,"readwrite");await r.objectStore(Al).put(e,xP(t)),await r.done}catch(n){if(n instanceof Kt)js.warn(n.message);else{const r=Mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});js.warn(r.message)}}}function xP(t){return`${t.name}!${t.options.appId}`}/**
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
 */const x$=1024,N$=30*24*60*60*1e3;class D${constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new V$(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=V0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=N$}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=V0(),{heartbeatsToSend:n,unsentEntries:r}=O$(this._heartbeatsCache.heartbeats),i=Sh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function V0(){return new Date().toISOString().substring(0,10)}function O$(t,e=x$){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),L0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),L0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class V${constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tl()?EF().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await b$(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return O0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return O0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function L0(t){return Sh(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function L$(t){Oi(new _r("platform-logger",e=>new HF(e),"PRIVATE")),Oi(new _r("heartbeat",e=>new D$(e),"PRIVATE")),yr(yy,D0,t),yr(yy,D0,"esm2017"),yr("fire-js","")}L$("");const M$=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Kt,SDK_VERSION:Qi,_DEFAULT_ENTRY_NAME:Ni,_addComponent:Rh,_addOrOverwriteComponent:AP,_apps:Di,_clearComponents:T$,_components:Sl,_getProvider:RP,_registerComponent:Oi,_removeServiceInstance:I$,deleteApp:PP,getApp:R$,getApps:P$,initializeApp:q_,onLog:CP,registerVersion:yr,setLogLevel:kP},Symbol.toStringTag,{value:"Module"}));/**
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
 */class F${constructor(e,n){this._delegate=e,this.firebase=n,Rh(e,new _r("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),PP(this._delegate)))}_getService(e,n=Ni){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ni){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Rh(this._delegate,e)}_addOrOverwriteComponent(e){AP(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const $$={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},M0=new no("app-compat","Firebase",$$);/**
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
 */function U$(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:yr,setLogLevel:kP,onLog:CP,apps:null,SDK_VERSION:Qi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:M$}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Ni,!C0(e,l))throw M0.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const d=q_(l,c);if(C0(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,d=c.replace("-compat","");if(Oi(l)&&l.type==="PUBLIC"){const h=(f=i())=>{if(typeof f[d]!="function")throw M0.create("invalid-app-argument",{appName:c});return f[d]()};l.serviceProps!==void 0&&Ah(h,l.serviceProps),n[d]=h,t.prototype[d]=function(...f){return this._getService.bind(this,c).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?n[d]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
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
 */function NP(){const t=U$(F$);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:NP,extendNamespace:e,createSubscribe:EP,ErrorFactory:no,deepExtend:Ah});function e(n){Ah(t,n)}return t}const j$=NP();/**
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
 */const F0=new Wf("@firebase/app-compat"),B$="@firebase/app-compat",z$="0.2.14";/**
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
 */function q$(t){yr(B$,z$,t)}/**
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
 */if(_F()&&self.firebase!==void 0){F0.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&F0.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Hr=j$;q$();var G$="firebase",W$="10.0.0";/**
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
 */Hr.registerVersion(G$,W$,"app-compat");var K$=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,G_=G_||{},Z=K$||self;function Kf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ac(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function H$(t){return Object.prototype.hasOwnProperty.call(t,Mm)&&t[Mm]||(t[Mm]=++Q$)}var Mm="closure_uid_"+(1e9*Math.random()>>>0),Q$=0;function Y$(t,e,n){return t.call.apply(t.bind,arguments)}function X$(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Mt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Mt=Y$:Mt=X$,Mt.apply(null,arguments)}function Zc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function vt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Yi(){this.s=this.s,this.o=this.o}var J$=0;Yi.prototype.s=!1;Yi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),J$!=0)&&H$(this)};Yi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const DP=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function W_(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function $0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Kf(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ft.prototype.h=function(){this.defaultPrevented=!0};var Z$=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",()=>{},e),Z.removeEventListener("test",()=>{},e)}catch{}return t}();function Rl(t){return/^[\s\xa0]*$/.test(t)}function Hf(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function ir(t){return Hf().indexOf(t)!=-1}function K_(t){return K_[" "](t),t}K_[" "]=function(){};function eU(t,e){var n=WU;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var tU=ir("Opera"),la=ir("Trident")||ir("MSIE"),OP=ir("Edge"),vy=OP||la,VP=ir("Gecko")&&!(Hf().toLowerCase().indexOf("webkit")!=-1&&!ir("Edge"))&&!(ir("Trident")||ir("MSIE"))&&!ir("Edge"),nU=Hf().toLowerCase().indexOf("webkit")!=-1&&!ir("Edge");function LP(){var t=Z.document;return t?t.documentMode:void 0}var _y;e:{var Fm="",$m=function(){var t=Hf();if(VP)return/rv:([^\);]+)(\)|;)/.exec(t);if(OP)return/Edge\/([\d\.]+)/.exec(t);if(la)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(nU)return/WebKit\/(\S+)/.exec(t);if(tU)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($m&&(Fm=$m?$m[1]:""),la){var Um=LP();if(Um!=null&&Um>parseFloat(Fm)){_y=String(Um);break e}}_y=Fm}var wy;if(Z.document&&la){var U0=LP();wy=U0||parseInt(_y,10)||void 0}else wy=void 0;var rU=wy;function Pl(t,e){if(Ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(VP){e:{try{K_(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:iU[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Pl.$.h.call(this)}}vt(Pl,Ft);var iU={2:"touch",3:"pen",4:"mouse"};Pl.prototype.h=function(){Pl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var uc="closure_listenable_"+(1e6*Math.random()|0),sU=0;function oU(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++sU,this.fa=this.ia=!1}function Qf(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function H_(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function aU(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function MP(t){const e={};for(const n in t)e[n]=t[n];return e}const j0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function FP(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<j0.length;s++)n=j0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Yf(t){this.src=t,this.g={},this.h=0}Yf.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Iy(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new oU(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Ey(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=DP(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Qf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Iy(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Q_="closure_lm_"+(1e6*Math.random()|0),jm={};function $P(t,e,n,r,i){if(r&&r.once)return jP(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)$P(t,e[s],n,r,i);return null}return n=J_(n),t&&t[uc]?t.O(e,n,ac(r)?!!r.capture:!!r,i):UP(t,e,n,!1,r,i)}function UP(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ac(i)?!!i.capture:!!i,a=X_(t);if(a||(t[Q_]=a=new Yf(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=uU(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Z$||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(zP(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function uU(){function t(n){return e.call(t.src,t.listener,n)}const e=lU;return t}function jP(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)jP(t,e[s],n,r,i);return null}return n=J_(n),t&&t[uc]?t.P(e,n,ac(r)?!!r.capture:!!r,i):UP(t,e,n,!0,r,i)}function BP(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)BP(t,e[s],n,r,i);else r=ac(r)?!!r.capture:!!r,n=J_(n),t&&t[uc]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Iy(s,n,r,i),-1<n&&(Qf(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=X_(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Iy(e,n,r,i)),(n=-1<t?e[t]:null)&&Y_(n))}function Y_(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[uc])Ey(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(zP(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=X_(e))?(Ey(n,t),n.h==0&&(n.src=null,e[Q_]=null)):Qf(t)}}}function zP(t){return t in jm?jm[t]:jm[t]="on"+t}function lU(t,e){if(t.fa)t=!0;else{e=new Pl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Y_(t),t=n.call(r,e)}return t}function X_(t){return t=t[Q_],t instanceof Yf?t:null}var Bm="__closure_events_fn_"+(1e9*Math.random()>>>0);function J_(t){return typeof t=="function"?t:(t[Bm]||(t[Bm]=function(e){return t.handleEvent(e)}),t[Bm])}function gt(){Yi.call(this),this.i=new Yf(this),this.S=this,this.J=null}vt(gt,Yi);gt.prototype[uc]=!0;gt.prototype.removeEventListener=function(t,e,n,r){BP(this,t,e,n,r)};function Ct(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ft(e,t);else if(e instanceof Ft)e.target=e.target||t;else{var i=e;e=new Ft(r,t),FP(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ed(o,r,!0,e)&&i}if(o=e.g=t,i=ed(o,r,!0,e)&&i,i=ed(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ed(o,r,!1,e)&&i}gt.prototype.N=function(){if(gt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Qf(n[r]);delete t.g[e],t.h--}}this.J=null};gt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};gt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ed(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Ey(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Z_=Z.JSON.stringify;class cU{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function dU(){var t=ew;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class hU{constructor(){this.h=this.g=null}add(e,n){const r=qP.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var qP=new cU(()=>new fU,t=>t.reset());class fU{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function pU(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function mU(t){Z.setTimeout(()=>{throw t},0)}let Cl,kl=!1,ew=new hU,GP=()=>{const t=Z.Promise.resolve(void 0);Cl=()=>{t.then(gU)}};var gU=()=>{for(var t;t=dU();){try{t.h.call(t.g)}catch(n){mU(n)}var e=qP;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}kl=!1};function Xf(t,e){gt.call(this),this.h=t||1,this.g=e||Z,this.j=Mt(this.qb,this),this.l=Date.now()}vt(Xf,gt);U=Xf.prototype;U.ga=!1;U.T=null;U.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ct(this,"tick"),this.ga&&(tw(this),this.start()))}};U.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function tw(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}U.N=function(){Xf.$.N.call(this),tw(this),delete this.g};function nw(t,e,n){if(typeof t=="function")n&&(t=Mt(t,n));else if(t&&typeof t.handleEvent=="function")t=Mt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function WP(t){t.g=nw(()=>{t.g=null,t.i&&(t.i=!1,WP(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class yU extends Yi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:WP(this)}N(){super.N(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bl(t){Yi.call(this),this.h=t,this.g={}}vt(bl,Yi);var B0=[];function KP(t,e,n,r){Array.isArray(n)||(n&&(B0[0]=n.toString()),n=B0);for(var i=0;i<n.length;i++){var s=$P(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function HP(t){H_(t.g,function(e,n){this.g.hasOwnProperty(n)&&Y_(e)},t),t.g={}}bl.prototype.N=function(){bl.$.N.call(this),HP(this)};bl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Jf(){this.g=!0}Jf.prototype.Ea=function(){this.g=!1};function vU(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function _U(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Lo(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+EU(t,n)+(r?" "+r:"")})}function wU(t,e){t.info(function(){return"TIMEOUT: "+e})}Jf.prototype.info=function(){};function EU(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Z_(n)}catch{return e}}var ro={},z0=null;function Zf(){return z0=z0||new gt}ro.Ta="serverreachability";function QP(t){Ft.call(this,ro.Ta,t)}vt(QP,Ft);function xl(t){const e=Zf();Ct(e,new QP(e))}ro.STAT_EVENT="statevent";function YP(t,e){Ft.call(this,ro.STAT_EVENT,t),this.stat=e}vt(YP,Ft);function Gt(t){const e=Zf();Ct(e,new YP(e,t))}ro.Ua="timingevent";function XP(t,e){Ft.call(this,ro.Ua,t),this.size=e}vt(XP,Ft);function lc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var ep={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},JP={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function rw(){}rw.prototype.h=null;function q0(t){return t.h||(t.h=t.i())}function ZP(){}var cc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function iw(){Ft.call(this,"d")}vt(iw,Ft);function sw(){Ft.call(this,"c")}vt(sw,Ft);var Ty;function tp(){}vt(tp,rw);tp.prototype.g=function(){return new XMLHttpRequest};tp.prototype.i=function(){return{}};Ty=new tp;function dc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new bl(this),this.P=IU,t=vy?125:void 0,this.V=new Xf(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new eC}function eC(){this.i=null,this.g="",this.h=!1}var IU=45e3,Sy={},Ph={};U=dc.prototype;U.setTimeout=function(t){this.P=t};function Ay(t,e,n){t.L=1,t.v=rp(zr(e)),t.s=n,t.S=!0,tC(t,null)}function tC(t,e){t.G=Date.now(),hc(t),t.A=zr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),lC(n.i,"t",r),t.C=0,n=t.l.J,t.h=new eC,t.g=bC(t.l,n?e:null,!t.s),0<t.O&&(t.M=new yU(Mt(t.Pa,t,t.g),t.O)),KP(t.U,t.g,"readystatechange",t.nb),e=t.I?MP(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),xl(),vU(t.j,t.u,t.A,t.m,t.W,t.s)}U.nb=function(t){t=t.target;const e=this.M;e&&cr(t)==3?e.l():this.Pa(t)};U.Pa=function(t){try{if(t==this.g)e:{const c=cr(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||vy||this.g&&(this.h.h||this.g.ja()||H0(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?xl(3):xl(2)),np(this);var n=this.g.da();this.ca=n;t:if(nC(this)){var r=H0(this.g);t="";var i=r.length,s=cr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ws(this),Wu(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,_U(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rl(a)){var l=a;break t}}l=null}if(n=l)Lo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ry(this,n);else{this.i=!1,this.o=3,Gt(12),ws(this),Wu(this);break e}}this.S?(rC(this,c,o),vy&&this.i&&c==3&&(KP(this.U,this.V,"tick",this.mb),this.V.start())):(Lo(this.j,this.m,o,null),Ry(this,o)),c==4&&ws(this),this.i&&!this.J&&(c==4?RC(this.l,this):(this.i=!1,hc(this)))}else zU(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Gt(12)):(this.o=0,Gt(13)),ws(this),Wu(this)}}}catch{}finally{}};function nC(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function rC(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=TU(t,n),i==Ph){e==4&&(t.o=4,Gt(14),r=!1),Lo(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Sy){t.o=4,Gt(15),Lo(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Lo(t.j,t.m,i,null),Ry(t,i);nC(t)&&i!=Ph&&i!=Sy&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Gt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),dw(e),e.M=!0,Gt(11))):(Lo(t.j,t.m,n,"[Invalid Chunked Response]"),ws(t),Wu(t))}U.mb=function(){if(this.g){var t=cr(this.g),e=this.g.ja();this.C<e.length&&(np(this),rC(this,t,e),this.i&&t!=4&&hc(this))}};function TU(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ph:(n=Number(e.substring(n,r)),isNaN(n)?Sy:(r+=1,r+n>e.length?Ph:(e=e.slice(r,r+n),t.C=r+n,e)))}U.cancel=function(){this.J=!0,ws(this)};function hc(t){t.Y=Date.now()+t.P,iC(t,t.P)}function iC(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=lc(Mt(t.lb,t),e)}function np(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}U.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(wU(this.j,this.A),this.L!=2&&(xl(),Gt(17)),ws(this),this.o=2,Wu(this)):iC(this,this.Y-t)};function Wu(t){t.l.H==0||t.J||RC(t.l,t)}function ws(t){np(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,tw(t.V),HP(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ry(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Py(n.i,t))){if(!t.K&&Py(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)bh(n),op(n);else break e;cw(n),Gt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=lc(Mt(n.ib,n),6e3));if(1>=hC(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Es(n,11)}else if((t.K||n.g==t)&&bh(n),!Rl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const c=l[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=l[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const v=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ow(s,s.h),s.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Ae(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=kC(r,r.J?r.pa:null,r.Y),o.K){fC(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(np(a),hc(a)),r.g=o}else SC(r);0<n.j.length&&ap(n)}else l[0]!="stop"&&l[0]!="close"||Es(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Es(n,7):lw(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}xl(4)}catch{}}function SU(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Kf(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function AU(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Kf(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function sC(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Kf(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=AU(t),r=SU(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var oC=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function RU(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Cs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Cs){this.h=t.h,Ch(this,t.j),this.s=t.s,this.g=t.g,kh(this,t.m),this.l=t.l;var e=t.i,n=new Nl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),G0(this,n),this.o=t.o}else t&&(e=String(t).match(oC))?(this.h=!1,Ch(this,e[1]||"",!0),this.s=Cu(e[2]||""),this.g=Cu(e[3]||"",!0),kh(this,e[4]),this.l=Cu(e[5]||"",!0),G0(this,e[6]||"",!0),this.o=Cu(e[7]||"")):(this.h=!1,this.i=new Nl(null,this.h))}Cs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ku(e,W0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ku(e,W0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ku(n,n.charAt(0)=="/"?kU:CU,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ku(n,xU)),t.join("")};function zr(t){return new Cs(t)}function Ch(t,e,n){t.j=n?Cu(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function kh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function G0(t,e,n){e instanceof Nl?(t.i=e,NU(t.i,t.h)):(n||(e=ku(e,bU)),t.i=new Nl(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function rp(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Cu(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ku(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,PU),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function PU(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var W0=/[#\/\?@]/g,CU=/[#\?:]/g,kU=/[#\?]/g,bU=/[#\?@]/g,xU=/#/g;function Nl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xi(t){t.g||(t.g=new Map,t.h=0,t.i&&RU(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Nl.prototype;U.add=function(t,e){Xi(this),this.i=null,t=Ma(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function aC(t,e){Xi(t),e=Ma(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function uC(t,e){return Xi(t),e=Ma(t,e),t.g.has(e)}U.forEach=function(t,e){Xi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};U.ta=function(){Xi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};U.Z=function(t){Xi(this);let e=[];if(typeof t=="string")uC(this,t)&&(e=e.concat(this.g.get(Ma(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Xi(this),this.i=null,t=Ma(this,t),uC(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function lC(t,e,n){aC(t,e),0<n.length&&(t.i=null,t.g.set(Ma(t,e),W_(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ma(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function NU(t,e){e&&!t.j&&(Xi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(aC(this,r),lC(this,i,n))},t)),t.j=e}var DU=class{constructor(t,e){this.g=t,this.map=e}};function cC(t){this.l=t||OU,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ka&&Z.g.Ka()&&Z.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var OU=10;function dC(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function hC(t){return t.h?1:t.g?t.g.size:0}function Py(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ow(t,e){t.g?t.g.add(e):t.h=e}function fC(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cC.prototype.cancel=function(){if(this.i=pC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function pC(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return W_(t.i)}var VU=class{stringify(t){return Z.JSON.stringify(t,void 0)}parse(t){return Z.JSON.parse(t,void 0)}};function LU(){this.g=new VU}function MU(t,e,n){const r=n||"";try{sC(t,function(i,s){let o=i;ac(i)&&(o=Z_(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function FU(t,e){const n=new Jf;if(Z.Image){const r=new Image;r.onload=Zc(td,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Zc(td,n,r,"TestLoadImage: error",!1,e),r.onabort=Zc(td,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Zc(td,n,r,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function td(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function fc(t){this.l=t.fc||null,this.j=t.ob||!1}vt(fc,rw);fc.prototype.g=function(){return new ip(this.l,this.j)};fc.prototype.i=function(t){return function(){return t}}({});function ip(t,e){gt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=aw,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vt(ip,gt);var aw=0;U=ip.prototype;U.open=function(t,e){if(this.readyState!=aw)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Dl(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pc(this)),this.readyState=aw};U.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Dl(this)),this.g&&(this.readyState=3,Dl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mC(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function mC(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}U.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?pc(this):Dl(this),this.readyState==3&&mC(this)}};U.Za=function(t){this.g&&(this.response=this.responseText=t,pc(this))};U.Ya=function(t){this.g&&(this.response=t,pc(this))};U.ka=function(){this.g&&pc(this)};function pc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Dl(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Dl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ip.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var $U=Z.JSON.parse;function qe(t){gt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=gC,this.L=this.M=!1}vt(qe,gt);var gC="",UU=/^https?$/i,jU=["POST","PUT"];U=qe.prototype;U.Oa=function(t){this.M=t};U.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ty.g(),this.C=this.u?q0(this.u):q0(Ty),this.g.onreadystatechange=Mt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){K0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Z.FormData&&t instanceof Z.FormData,!(0<=DP(jU,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{_C(this),0<this.B&&((this.L=BU(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Mt(this.ua,this)):this.A=nw(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){K0(this,s)}};function BU(t){return la&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.ua=function(){typeof G_<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ct(this,"timeout"),this.abort(8))};function K0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,yC(t),sp(t)}function yC(t){t.F||(t.F=!0,Ct(t,"complete"),Ct(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ct(this,"complete"),Ct(this,"abort"),sp(this))};U.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),sp(this,!0)),qe.$.N.call(this)};U.La=function(){this.s||(this.G||this.v||this.l?vC(this):this.kb())};U.kb=function(){vC(this)};function vC(t){if(t.h&&typeof G_<"u"&&(!t.C[1]||cr(t)!=4||t.da()!=2)){if(t.v&&cr(t)==4)nw(t.La,0,t);else if(Ct(t,"readystatechange"),cr(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(oC)[1]||null;!i&&Z.self&&Z.self.location&&(i=Z.self.location.protocol.slice(0,-1)),r=!UU.test(i?i.toLowerCase():"")}n=r}if(n)Ct(t,"complete"),Ct(t,"success");else{t.m=6;try{var s=2<cr(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",yC(t)}}finally{sp(t)}}}}function sp(t,e){if(t.g){_C(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function _C(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}U.isActive=function(){return!!this.g};function cr(t){return t.g?t.g.readyState:0}U.da=function(){try{return 2<cr(this)?this.g.status:-1}catch{return-1}};U.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),$U(e)}};function H0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case gC:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function zU(t){const e={};t=(t.g&&2<=cr(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Rl(t[r]))continue;var n=pU(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}aU(e,function(r){return r.join(", ")})}U.Ia=function(){return this.m};U.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function wC(t){let e="";return H_(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function uw(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=wC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function cu(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function EC(t){this.Ga=0,this.j=[],this.l=new Jf,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=cu("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=cu("baseRetryDelayMs",5e3,t),this.hb=cu("retryDelaySeedMs",1e4,t),this.eb=cu("forwardChannelMaxRetries",2,t),this.xa=cu("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cC(t&&t.concurrentRequestLimit),this.Ja=new LU,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}U=EC.prototype;U.ra=8;U.H=1;function lw(t){if(IC(t),t.H==3){var e=t.W++,n=zr(t.I);if(Ae(n,"SID",t.K),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),mc(t,n),e=new dc(t,t.l,e),e.L=2,e.v=rp(zr(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon)try{n=Z.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=bC(e.l,null),e.g.ha(e.v)),e.G=Date.now(),hc(e)}CC(t)}function op(t){t.g&&(dw(t),t.g.cancel(),t.g=null)}function IC(t){op(t),t.u&&(Z.clearTimeout(t.u),t.u=null),bh(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function ap(t){if(!dC(t.i)&&!t.m){t.m=!0;var e=t.Na;Cl||GP(),kl||(Cl(),kl=!0),ew.add(e,t),t.C=0}}function qU(t,e){return hC(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=lc(Mt(t.Na,t,e),PC(t,t.C)),t.C++,!0)}U.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new dc(this,this.l,t);let s=this.s;if(this.U&&(s?(s=MP(s),FP(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=TC(this,i,e),n=zr(this.I),Ae(n,"RID",t),Ae(n,"CVER",22),this.F&&Ae(n,"X-HTTP-Session-Id",this.F),mc(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(wC(s)))+"&"+e:this.o&&uw(n,this.o,s)),ow(this.i,i),this.bb&&Ae(n,"TYPE","init"),this.P?(Ae(n,"$req",e),Ae(n,"SID","null"),i.aa=!0,Ay(i,n,null)):Ay(i,n,e),this.H=2}}else this.H==3&&(t?Q0(this,t):this.j.length==0||dC(this.i)||Q0(this))};function Q0(t,e){var n;e?n=e.m:n=t.W++;const r=zr(t.I);Ae(r,"SID",t.K),Ae(r,"RID",n),Ae(r,"AID",t.V),mc(t,r),t.o&&t.s&&uw(r,t.o,t.s),n=new dc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=TC(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ow(t.i,n),Ay(n,r,e)}function mc(t,e){t.na&&H_(t.na,function(n,r){Ae(e,r,n)}),t.h&&sC({},function(n,r){Ae(e,r,n)})}function TC(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Mt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].g;const c=i[u].map;if(l-=s,0>l)s=Math.max(0,i[u].g-100),a=!1;else try{MU(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function SC(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Cl||GP(),kl||(Cl(),kl=!0),ew.add(e,t),t.A=0}}function cw(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=lc(Mt(t.Ma,t),PC(t,t.A)),t.A++,!0)}U.Ma=function(){if(this.u=null,AC(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=lc(Mt(this.jb,this),t)}};U.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Gt(10),op(this),AC(this))};function dw(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function AC(t){t.g=new dc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=zr(t.wa);Ae(e,"RID","rpc"),Ae(e,"SID",t.K),Ae(e,"AID",t.V),Ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ae(e,"TO",t.qa),Ae(e,"TYPE","xmlhttp"),mc(t,e),t.o&&t.s&&uw(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=rp(zr(e)),n.s=null,n.S=!0,tC(n,t)}U.ib=function(){this.v!=null&&(this.v=null,op(this),cw(this),Gt(19))};function bh(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function RC(t,e){var n=null;if(t.g==e){bh(t),dw(t),t.g=null;var r=2}else if(Py(t.i,e))n=e.F,fC(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Zf(),Ct(r,new XP(r,n)),ap(t)}else SC(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&qU(t,e)||r==2&&cw(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Es(t,5);break;case 4:Es(t,10);break;case 3:Es(t,6);break;default:Es(t,2)}}}function PC(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Es(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Mt(t.pb,t);n||(n=new Cs("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||Ch(n,"https"),rp(n)),FU(n.toString(),r)}else Gt(2);t.H=0,t.h&&t.h.za(e),CC(t),IC(t)}U.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Gt(2)):(this.l.info("Failed to ping google.com"),Gt(1))};function CC(t){if(t.H=0,t.ma=[],t.h){const e=pC(t.i);(e.length!=0||t.j.length!=0)&&($0(t.ma,e),$0(t.ma,t.j),t.i.i.length=0,W_(t.j),t.j.length=0),t.h.ya()}}function kC(t,e,n){var r=n instanceof Cs?zr(n):new Cs(n);if(r.g!="")e&&(r.g=e+"."+r.g),kh(r,r.m);else{var i=Z.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Cs(null);r&&Ch(s,r),e&&(s.g=e),i&&kh(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ae(r,n,e),Ae(r,"VER",t.ra),mc(t,r),r}function bC(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new qe(new fc({ob:!0})):new qe(t.va),e.Oa(t.J),e}U.isActive=function(){return!!this.h&&this.h.isActive(this)};function xC(){}U=xC.prototype;U.Ba=function(){};U.Aa=function(){};U.za=function(){};U.ya=function(){};U.isActive=function(){return!0};U.Va=function(){};function xh(){if(la&&!(10<=Number(rU)))throw Error("Environmental error: no available transport.")}xh.prototype.g=function(t,e){return new wn(t,e)};function wn(t,e){gt.call(this),this.g=new EC(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Rl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Rl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Fa(this)}vt(wn,gt);wn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Gt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=kC(t,null,t.Y),ap(t)};wn.prototype.close=function(){lw(this.g)};wn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Z_(t),t=n);e.j.push(new DU(e.fb++,t)),e.H==3&&ap(e)};wn.prototype.N=function(){this.g.h=null,delete this.j,lw(this.g),delete this.g,wn.$.N.call(this)};function NC(t){iw.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}vt(NC,iw);function DC(){sw.call(this),this.status=1}vt(DC,sw);function Fa(t){this.g=t}vt(Fa,xC);Fa.prototype.Ba=function(){Ct(this.g,"a")};Fa.prototype.Aa=function(t){Ct(this.g,new NC(t))};Fa.prototype.za=function(t){Ct(this.g,new DC)};Fa.prototype.ya=function(){Ct(this.g,"b")};function GU(){this.blockSize=-1}function Qn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}vt(Qn,GU);Qn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function zm(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Qn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)zm(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){zm(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){zm(this,r),i=0;break}}this.h=i,this.i+=e};Qn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function me(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var WU={};function hw(t){return-128<=t&&128>t?eU(t,function(e){return new me([e|0],0>e?-1:0)}):new me([t|0],0>t?-1:0)}function dr(t){if(isNaN(t)||!isFinite(t))return Wo;if(0>t)return At(dr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Cy;return new me(e,0)}function OC(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return At(OC(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=dr(Math.pow(e,8)),r=Wo,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=dr(Math.pow(e,s)),r=r.R(s).add(dr(o))):(r=r.R(n),r=r.add(dr(o)))}return r}var Cy=4294967296,Wo=hw(0),ky=hw(1),Y0=hw(16777216);U=me.prototype;U.ea=function(){if(kn(this))return-At(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Cy+r)*e,e*=Cy}return t};U.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Nr(this))return"0";if(kn(this))return"-"+At(this).toString(t);for(var e=dr(Math.pow(t,6)),n=this,r="";;){var i=Dh(n,e).g;n=Nh(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Nr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};U.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Nr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function kn(t){return t.h==-1}U.X=function(t){return t=Nh(this,t),kn(t)?-1:Nr(t)?0:1};function At(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new me(n,~t.h).add(ky)}U.abs=function(){return kn(this)?At(this):this};U.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new me(n,n[n.length-1]&-2147483648?-1:0)};function Nh(t,e){return t.add(At(e))}U.R=function(t){if(Nr(this)||Nr(t))return Wo;if(kn(this))return kn(t)?At(this).R(At(t)):At(At(this).R(t));if(kn(t))return At(this.R(At(t)));if(0>this.X(Y0)&&0>t.X(Y0))return dr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,u=t.D(i)&65535;n[2*r+2*i]+=o*u,nd(n,2*r+2*i),n[2*r+2*i+1]+=s*u,nd(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,nd(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,nd(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new me(n,0)};function nd(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function du(t,e){this.g=t,this.h=e}function Dh(t,e){if(Nr(e))throw Error("division by zero");if(Nr(t))return new du(Wo,Wo);if(kn(t))return e=Dh(At(t),e),new du(At(e.g),At(e.h));if(kn(e))return e=Dh(t,At(e)),new du(At(e.g),e.h);if(30<t.g.length){if(kn(t)||kn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ky,r=e;0>=r.X(t);)n=X0(n),r=X0(r);var i=po(n,1),s=po(r,1);for(r=po(r,2),n=po(n,2);!Nr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=po(r,1),n=po(n,1)}return e=Nh(t,i.R(e)),new du(i,e)}for(i=Wo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=dr(n),o=s.R(e);kn(o)||0<o.X(t);)n-=r,s=dr(n),o=s.R(e);Nr(s)&&(s=ky),i=i.add(s),t=Nh(t,o)}return new du(i,t)}U.gb=function(t){return Dh(this,t).h};U.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new me(n,this.h&t.h)};U.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new me(n,this.h|t.h)};U.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new me(n,this.h^t.h)};function X0(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new me(n,t.h)}function po(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new me(i,t.h)}xh.prototype.createWebChannel=xh.prototype.g;wn.prototype.send=wn.prototype.u;wn.prototype.open=wn.prototype.m;wn.prototype.close=wn.prototype.close;ep.NO_ERROR=0;ep.TIMEOUT=8;ep.HTTP_ERROR=6;JP.COMPLETE="complete";ZP.EventType=cc;cc.OPEN="a";cc.CLOSE="b";cc.ERROR="c";cc.MESSAGE="d";gt.prototype.listen=gt.prototype.O;qe.prototype.listenOnce=qe.prototype.P;qe.prototype.getLastError=qe.prototype.Sa;qe.prototype.getLastErrorCode=qe.prototype.Ia;qe.prototype.getStatus=qe.prototype.da;qe.prototype.getResponseJson=qe.prototype.Wa;qe.prototype.getResponseText=qe.prototype.ja;qe.prototype.send=qe.prototype.ha;qe.prototype.setWithCredentials=qe.prototype.Oa;Qn.prototype.digest=Qn.prototype.l;Qn.prototype.reset=Qn.prototype.reset;Qn.prototype.update=Qn.prototype.j;me.prototype.add=me.prototype.add;me.prototype.multiply=me.prototype.R;me.prototype.modulo=me.prototype.gb;me.prototype.compare=me.prototype.X;me.prototype.toNumber=me.prototype.ea;me.prototype.toString=me.prototype.toString;me.prototype.getBits=me.prototype.D;me.fromNumber=dr;me.fromString=OC;var KU=function(){return new xh},HU=function(){return Zf()},qm=ep,QU=JP,YU=ro,J0={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},XU=fc,rd=ZP,JU=qe,ZU=Qn,Ko=me;const Z0="@firebase/firestore";/**
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
 */let ht=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
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
 */let $a="10.0.0";/**
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
 */const Vi=new Wf("@firebase/firestore");function by(){return Vi.logLevel}function e4(t){Vi.setLogLevel(t)}function N(t,...e){if(Vi.logLevel<=ae.DEBUG){const n=e.map(fw);Vi.debug(`Firestore (${$a}): ${t}`,...n)}}function Qe(t,...e){if(Vi.logLevel<=ae.ERROR){const n=e.map(fw);Vi.error(`Firestore (${$a}): ${t}`,...n)}}function Yn(t,...e){if(Vi.logLevel<=ae.WARN){const n=e.map(fw);Vi.warn(`Firestore (${$a}): ${t}`,...n)}}function fw(t){if(typeof t=="string")return t;try{/**
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
 */function j(t="Unexpected state"){const e=`FIRESTORE (${$a}) INTERNAL ASSERTION FAILED: `+t;throw Qe(e),new Error(e)}function W(t,e){t||j()}function t4(t,e){t||j()}function $(t,e){return t}/**
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
 */class mt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class VC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class n4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class r4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class i4{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new mt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new mt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string"),new VC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new ht(e)}}class s4{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class o4{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new s4(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class a4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class u4{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(W(typeof n.token=="string"),this.R=n.token,new a4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function l4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class LC{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=l4(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function ca(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function MC(t){return t+"\0"}/**
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
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ne(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new Ne(0,0))}static max(){return new G(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ol{constructor(e,n,r){n===void 0?n=0:n>e.length&&j(),r===void 0?r=e.length-n:r>e.length-n&&j(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ol.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ol?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ue extends Ol{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const c4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Ol{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return c4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new x(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new x(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new x(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
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
 */class FC{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function xy(t){return t.fields.find(e=>e.kind===2)}function ls(t){return t.fields.filter(e=>e.kind!==2)}FC.UNKNOWN_ID=-1;class d4{constructor(e,n){this.fieldPath=e,this.kind=n}}class Oh{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Oh(0,En.min())}}function $C(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new En(i,M.empty(),e)}function UC(t){return new En(t.readTime,t.key,-1)}class En{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new En(G.min(),M.empty(),-1)}static max(){return new En(G.max(),M.empty(),-1)}}function pw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const jC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ji(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==jC)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class up{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.m=new mt,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{n.error?this.m.reject(new Ku(e,n.error)):this.m.resolve()},this.transaction.onerror=r=>{const i=mw(r.target.error);this.m.reject(new Ku(e,i))}}static open(e,n,r,i){try{return new up(n,e.transaction(i,r))}catch(s){throw new Ku(n,s)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new f4(n)}}class qn{constructor(e,n,r){this.name=e,this.version=n,this.S=r,qn.D($e())===12.2&&Qe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),ds(window.indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Tl())return!1;if(qn.C())return!0;const e=$e(),n=qn.D(e),r=0<n&&n<10,i=qn.F(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Ku(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new x(R.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new x(R.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ku(e,o))},i.onupgradeneeded=s=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.B(o,i.transaction,s.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const a=up.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(l=>(a.p(),l)).catch(l=>(a.abort(l),A.reject(l))).toPromise();return u.catch(()=>{}),await a.g,u}catch(a){const u=a,l=u.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class h4{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return ds(this.q.delete())}}class Ku extends x{constructor(e,n){super(R.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Zi(t){return t.name==="IndexedDbTransactionError"}class f4{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(N("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ds(r)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),ds(this.store.add(e))}get(e){return ds(this.store.get(e)).next(n=>(n===void 0&&(n=null),N("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),ds(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),ds(this.store.count())}G(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.j(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new A((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new A((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){N("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.j(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.j(i,n)}X(e){const n=this.cursor({});return new A((r,i)=>{n.onerror=s=>{const o=mw(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(e,n){const r=[];return new A((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new h4(a),l=n(a.primaryKey,a.value,u);if(l instanceof A){const c=l.catch(d=>(u.done(),A.reject(d)));r.push(c)}u.isDone?i():u.U===null?a.continue():a.continue(u.U)}}).next(()=>A.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ds(t){return new A((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=mw(r.target.error);n(i)}})}let eT=!1;function mw(t){const e=qn.D($e());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return eT||(eT=!0,setTimeout(()=>{throw r},0)),r}}return t}class p4{constructor(e,n){this.asyncQueue=e,this.ee=n,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){N("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{N("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(n){Zi(n)?N("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Ji(n)}await this.te(6e4)})}}class m4{constructor(e,n){this.localStore=e,this.persistence=n}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.re(n,e))}re(e,n){const r=new Set;let i=n,s=!0;return A.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return N("IndexBackiller",`Processing collection: ${o}`),this.ie(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ie(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(i,s)).next(a=>(N("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}se(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=UC(s);pw(o,r)>0&&(r=o)}),new En(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class rn{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}rn.ae=-1;function gc(t){return t==null}function Vl(t){return t===0&&1/t==-1/0}function zC(t){return typeof t=="number"&&Number.isInteger(t)&&!Vl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ht(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=tT(e)),e=g4(t.get(n),e);return tT(e)}function g4(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function tT(t){return t+""}function hr(t){const e=t.length;if(W(e>=2),e===2)return W(t.charAt(0)===""&&t.charAt(1)===""),ue.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&j(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:j()}s=o+2}return new ue(r)}/**
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
 */const nT=["userId","batchId"];/**
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
 */function Dd(t,e){return[t,Ht(e)]}function qC(t,e,n){return[t,Ht(e),n]}const y4={},v4=["prefixPath","collectionGroup","readTime","documentId"],_4=["prefixPath","collectionGroup","documentId"],w4=["collectionGroup","readTime","prefixPath","documentId"],E4=["canonicalId","targetId"],I4=["targetId","path"],T4=["path","targetId"],S4=["collectionId","parent"],A4=["indexId","uid"],R4=["uid","sequenceNumber"],P4=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],C4=["indexId","uid","orderedDocumentKey"],k4=["userId","collectionPath","documentId"],b4=["userId","collectionPath","largestBatchId"],x4=["userId","collectionGroup","largestBatchId"],GC=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],N4=[...GC,"documentOverlays"],WC=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],KC=WC,D4=[...KC,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Ny extends BC{constructor(e,n){super(),this.ue=e,this.currentSequenceNumber=n}}function _t(t,e){const n=$(t);return qn.O(n.ue,e)}/**
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
 */function rT(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function io(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function HC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||St.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new id(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new id(this.root,e,this.comparator,!1)}getReverseIterator(){return new id(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new id(this.root,e,this.comparator,!0)}}class id{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??St.RED,this.left=i??St.EMPTY,this.right=s??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new St(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return St.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(e,n,r,i,s){return this}insert(e,n,r){return new St(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ce{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new iT(this.data.getIterator())}getIteratorFrom(e){return new iT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ce(this.comparator);return n.data=e,n}}class iT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function mo(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class sn{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new sn([])}unionWith(e){let n=new Ce(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ca(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class QC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function O4(){return typeof atob<"u"}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new QC("Invalid base64 string: "+s):s}}(e);return new ut(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const V4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Li(t){if(W(!!t),typeof t=="string"){let e=0;const n=V4.exec(t);if(W(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mi(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
 */function lp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gw(t){const e=t.mapValue.fields.__previous_value__;return lp(e)?gw(e):e}function Ll(t){const e=Li(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
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
 */class L4{constructor(e,n,r,i,s,o,a,u,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l}}class Fi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const mi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Od={nullValue:"NULL_VALUE"};function Bs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lp(t)?4:YC(t)?9007199254740991:10:j()}function wr(t,e){if(t===e)return!0;const n=Bs(t);if(n!==Bs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ll(t).isEqual(Ll(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Li(i.timestampValue),a=Li(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Mi(i.bytesValue).isEqual(Mi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ze(i.geoPointValue.latitude)===ze(s.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ze(i.integerValue)===ze(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ze(i.doubleValue),a=ze(s.doubleValue);return o===a?Vl(o)===Vl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ca(t.arrayValue.values||[],e.arrayValue.values||[],wr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(rT(o)!==rT(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!wr(o[u],a[u])))return!1;return!0}(t,e);default:return j()}}function Ml(t,e){return(t.values||[]).find(n=>wr(n,e))!==void 0}function $i(t,e){if(t===e)return 0;const n=Bs(t),r=Bs(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ze(s.integerValue||s.doubleValue),u=ze(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return sT(t.timestampValue,e.timestampValue);case 4:return sT(Ll(t),Ll(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Mi(s),u=Mi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){const c=ee(a[l],u[l]);if(c!==0)return c}return ee(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ee(ze(s.latitude),ze(o.latitude));return a!==0?a:ee(ze(s.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let l=0;l<a.length&&l<u.length;++l){const c=$i(a[l],u[l]);if(c)return c}return ee(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===mi.mapValue&&o===mi.mapValue)return 0;if(s===mi.mapValue)return 1;if(o===mi.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),l=o.fields||{},c=Object.keys(l);u.sort(),c.sort();for(let d=0;d<u.length&&d<c.length;++d){const h=ee(u[d],c[d]);if(h!==0)return h;const f=$i(a[u[d]],l[c[d]]);if(f!==0)return f}return ee(u.length,c.length)}(t.mapValue,e.mapValue);default:throw j()}}function sT(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=Li(t),r=Li(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function da(t){return Dy(t)}function Dy(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Li(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Mi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return M.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Dy(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Dy(n.fields[o])}`;return i+"}"}(t.mapValue):j()}function zs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Oy(t){return!!t&&"integerValue"in t}function Fl(t){return!!t&&"arrayValue"in t}function oT(t){return!!t&&"nullValue"in t}function aT(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vd(t){return!!t&&"mapValue"in t}function Hu(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return io(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hu(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hu(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function M4(t){return"nullValue"in t?Od:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?zs(Fi.empty(),M.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:j()}function F4(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?zs(Fi.empty(),M.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?mi:j()}function uT(t,e){const n=$i(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function lT(t,e){const n=$i(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Vd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hu(n)}setAll(e){let n=Ye.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Hu(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Vd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Vd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){io(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Rt(Hu(this.value))}}function XC(t){const e=[];return io(t.fields,(n,r)=>{const i=new Ye([n]);if(Vd(r)){const s=XC(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new sn(e)}/**
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
 */class Re{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Re(e,0,G.min(),G.min(),G.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,i){return new Re(e,1,n,G.min(),r,i,0)}static newNoDocument(e,n){return new Re(e,2,n,G.min(),G.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new Re(e,3,n,G.min(),G.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ui{constructor(e,n){this.position=e,this.inclusive=n}}function cT(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=$i(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function dT(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ho{constructor(e,n="asc"){this.field=e,this.dir=n}}function $4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class JC{}class ie extends JC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new U4(e,n,r):n==="array-contains"?new z4(e,r):n==="in"?new ik(e,r):n==="not-in"?new q4(e,r):n==="array-contains-any"?new G4(e,r):new ie(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new j4(e,r):new B4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($i(n,this.value)):n!==null&&Bs(this.value)===Bs(n)&&this.matchesComparison($i(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class fe extends JC{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new fe(e,n)}matches(e){return ha(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function ha(t){return t.op==="and"}function Vy(t){return t.op==="or"}function yw(t){return ZC(t)&&ha(t)}function ZC(t){for(const e of t.filters)if(e instanceof fe)return!1;return!0}function Ly(t){if(t instanceof ie)return t.field.canonicalString()+t.op.toString()+da(t.value);if(yw(t))return t.filters.map(e=>Ly(e)).join(",");{const e=t.filters.map(n=>Ly(n)).join(",");return`${t.op}(${e})`}}function ek(t,e){return t instanceof ie?function(r,i){return i instanceof ie&&r.op===i.op&&r.field.isEqual(i.field)&&wr(r.value,i.value)}(t,e):t instanceof fe?function(r,i){return i instanceof fe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ek(o,i.filters[a]),!0):!1}(t,e):void j()}function tk(t,e){const n=t.filters.concat(e);return fe.create(n,t.op)}function nk(t){return t instanceof ie?function(n){return`${n.field.canonicalString()} ${n.op} ${da(n.value)}`}(t):t instanceof fe?function(n){return n.op.toString()+" {"+n.getFilters().map(nk).join(" ,")+"}"}(t):"Filter"}class U4 extends ie{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class j4 extends ie{constructor(e,n){super(e,"in",n),this.keys=rk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class B4 extends ie{constructor(e,n){super(e,"not-in",n),this.keys=rk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class z4 extends ie{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fl(n)&&Ml(n.arrayValue,this.value)}}class ik extends ie{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ml(this.value.arrayValue,n)}}class q4 extends ie{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ml(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ml(this.value.arrayValue,n)}}class G4 extends ie{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ml(this.value.arrayValue,r))}}/**
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
 */class W4{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function My(t,e=null,n=[],r=[],i=null,s=null,o=null){return new W4(t,e,n,r,i,s,o)}function qs(t){const e=$(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ly(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),gc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>da(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>da(r)).join(",")),e.he=n}return e.he}function yc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$4(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ek(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dT(t.startAt,e.startAt)&&dT(t.endAt,e.endAt)}function Vh(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Lh(t,e){return t.filters.filter(n=>n instanceof ie&&n.field.isEqual(e))}function hT(t,e,n){let r=Od,i=!0;for(const s of Lh(t,e)){let o=Od,a=!0;switch(s.op){case"<":case"<=":o=M4(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Od}uT({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];uT({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function fT(t,e,n){let r=mi,i=!0;for(const s of Lh(t,e)){let o=mi,a=!0;switch(s.op){case">=":case">":o=F4(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=mi}lT({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];lT({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Qr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function sk(t,e,n,r,i,s,o,a){return new Qr(t,e,n,r,i,s,o,a)}function Ua(t){return new Qr(t)}function pT(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function cp(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function _w(t){return t.collectionGroup!==null}function ks(t){const e=$(t);if(e.Pe===null){e.Pe=[];const n=cp(e),r=vw(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ho(n)),e.Pe.push(new Ho(Ye.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ho(Ye.keyField(),s))}}}return e.Pe}function hn(t){const e=$(t);if(!e.Ie)if(e.limitType==="F")e.Ie=My(e.path,e.collectionGroup,ks(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ks(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ho(s.field,o))}const r=e.endAt?new Ui(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ui(e.startAt.position,e.startAt.inclusive):null;e.Ie=My(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function Fy(t,e){e.getFirstInequalityField(),cp(t);const n=t.filters.concat([e]);return new Qr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Mh(t,e,n){return new Qr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vc(t,e){return yc(hn(t),hn(e))&&t.limitType===e.limitType}function ok(t){return`${qs(hn(t))}|lt:${t.limitType}`}function $y(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>nk(i)).join(", ")}]`),gc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>da(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>da(i)).join(",")),`Target(${r})`}(hn(t))}; limitType=${t.limitType})`}function _c(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):M.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ks(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const l=cT(o,a,u);return o.inclusive?l<=0:l<0}(r.startAt,ks(r),i)||r.endAt&&!function(o,a,u){const l=cT(o,a,u);return o.inclusive?l>=0:l>0}(r.endAt,ks(r),i))}(t,e)}function ak(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uk(t){return(e,n)=>{let r=!1;for(const i of ks(t)){const s=K4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function K4(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),l=a.data.field(s);return u!==null&&l!==null?$i(u,l):j()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
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
 */class es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){io(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return HC(this.inner)}size(){return this.innerSize}}/**
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
 */const H4=new Ie(M.comparator);function on(){return H4}const lk=new Ie(M.comparator);function bu(...t){let e=lk;for(const n of t)e=e.insert(n.key,n);return e}function ck(t){let e=lk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function fr(){return Qu()}function dk(){return Qu()}function Qu(){return new es(t=>t.toString(),(t,e)=>t.isEqual(e))}const Q4=new Ie(M.comparator),Y4=new Ce(M.comparator);function te(...t){let e=Y4;for(const n of t)e=e.add(n);return e}const X4=new Ce(ee);function ww(){return X4}/**
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
 */function hk(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vl(e)?"-0":e}}function fk(t){return{integerValue:""+t}}function pk(t,e){return zC(e)?fk(e):hk(t,e)}/**
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
 */class dp{constructor(){this._=void 0}}function J4(t,e,n){return t instanceof fa?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&lp(s)&&(s=gw(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Gs?gk(t,e):t instanceof Ws?yk(t,e):function(i,s){const o=mk(i,s),a=mT(o)+mT(i.Te);return Oy(o)&&Oy(i.Te)?fk(a):hk(i.serializer,a)}(t,e)}function Z4(t,e,n){return t instanceof Gs?gk(t,e):t instanceof Ws?yk(t,e):n}function mk(t,e){return t instanceof pa?function(r){return Oy(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class fa extends dp{}class Gs extends dp{constructor(e){super(),this.elements=e}}function gk(t,e){const n=vk(e);for(const r of t.elements)n.some(i=>wr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ws extends dp{constructor(e){super(),this.elements=e}}function yk(t,e){let n=vk(e);for(const r of t.elements)n=n.filter(i=>!wr(i,r));return{arrayValue:{values:n}}}class pa extends dp{constructor(e,n){super(),this.serializer=e,this.Te=n}}function mT(t){return ze(t.integerValue||t.doubleValue)}function vk(t){return Fl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class wc{constructor(e,n){this.field=e,this.transform=n}}function ej(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Gs&&i instanceof Gs||r instanceof Ws&&i instanceof Ws?ca(r.elements,i.elements,wr):r instanceof pa&&i instanceof pa?wr(r.Te,i.Te):r instanceof fa&&i instanceof fa}(t.transform,e.transform)}class tj{constructor(e,n){this.version=e,this.transformResults=n}}class xe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xe}static exists(e){return new xe(void 0,e)}static updateTime(e){return new xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ld(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hp{}function _k(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ba(t.key,xe.none()):new ja(t.key,t.data,xe.none());{const n=t.data,r=Rt.empty();let i=new Ce(Ye.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Yr(t.key,r,new sn(i.toArray()),xe.none())}}function nj(t,e,n){t instanceof ja?function(i,s,o){const a=i.value.clone(),u=yT(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Yr?function(i,s,o){if(!Ld(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=yT(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(wk(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Yu(t,e,n,r){return t instanceof ja?function(s,o,a,u){if(!Ld(s.precondition,o))return a;const l=s.value.clone(),c=vT(s.fieldTransforms,u,o);return l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Yr?function(s,o,a,u){if(!Ld(s.precondition,o))return a;const l=vT(s.fieldTransforms,u,o),c=o.data;return c.setAll(wk(s)),c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Ld(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function rj(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=mk(r.transform,i||null);s!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,s))}return n||null}function gT(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ca(r,i,(s,o)=>ej(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ja extends hp{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Yr extends hp{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yT(t,e,n){const r=new Map;W(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Z4(o,a,n[i]))}return r}function vT(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,J4(s,o,e))}return r}class Ba extends hp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ew extends hp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Iw{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&nj(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Yu(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Yu(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=dk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=_k(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&ca(this.mutations,e.mutations,(n,r)=>gT(n,r))&&ca(this.baseMutations,e.baseMutations,(n,r)=>gT(n,r))}}class Tw{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){W(e.mutations.length===r.length);let i=function(){return Q4}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Tw(e,n,r,i)}}/**
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
 */class Sw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ij{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var et,oe;function Ek(t){switch(t){default:return j();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function Ik(t){if(t===void 0)return Qe("GRPC error has no .code"),R.UNKNOWN;switch(t){case et.OK:return R.OK;case et.CANCELLED:return R.CANCELLED;case et.UNKNOWN:return R.UNKNOWN;case et.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case et.INTERNAL:return R.INTERNAL;case et.UNAVAILABLE:return R.UNAVAILABLE;case et.UNAUTHENTICATED:return R.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case et.NOT_FOUND:return R.NOT_FOUND;case et.ALREADY_EXISTS:return R.ALREADY_EXISTS;case et.PERMISSION_DENIED:return R.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case et.ABORTED:return R.ABORTED;case et.OUT_OF_RANGE:return R.OUT_OF_RANGE;case et.UNIMPLEMENTED:return R.UNIMPLEMENTED;case et.DATA_LOSS:return R.DATA_LOSS;default:return j()}}(oe=et||(et={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Aw{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return sd}static getOrCreateInstance(){return sd===null&&(sd=new Aw),sd}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let sd=null;/**
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
 */function Tk(){return new TextEncoder}/**
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
 */const sj=new Ko([4294967295,4294967295],0);function _T(t){const e=Tk().encode(t),n=new ZU;return n.update(e),new Uint8Array(n.digest())}function wT(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ko([n,r],0),new Ko([i,s],0)]}class Rw{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xu(`Invalid padding: ${n}`);if(r<0)throw new xu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xu(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xu(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Ko.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(Ko.fromNumber(r)));return i.compare(sj)===1&&(i=new Ko([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=_T(e),[r,i]=wT(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Rw(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=_T(e),[r,i]=wT(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ec{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ic.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ec(G.min(),i,new Ie(ee),on(),te())}}class Ic{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ic(r,n,te(),te(),te())}}/**
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
 */class Md{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class Sk{constructor(e,n){this.targetId=e,this.pe=n}}class Ak{constructor(e,n,r=ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ET{constructor(){this.ye=0,this.we=TT(),this.Se=ut.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=te(),n=te(),r=te();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:j()}}),new Ic(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=TT()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class oj{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=on(),this.$e=IT(),this.Ue=new Ie(ee)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:j()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Vh(a))if(s===0){const u=new M(a.path);this.ze(i,u,Re.newNoDocument(u,G.min()))}else W(s===1);else{const u=this.et(i);if(u!==s){const l=this.tt(e,u);if(l.status!==0){this.Ye(i);const c=l.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(n=Aw.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(d,h,f,v){var y,w,m,p,g,_;const I={localCacheCount:f,existenceFilterCount:v.count},S=v.unchangedNames;return S&&(I.bloomFilter={applied:d===0,hashCount:(y=S==null?void 0:S.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(p=(m=(w=S==null?void 0:S.bits)===null||w===void 0?void 0:w.bitmap)===null||m===void 0?void 0:m.length)!==null&&p!==void 0?p:0,padding:(_=(g=S==null?void 0:S.bits)===null||g===void 0?void 0:g.padding)!==null&&_!==void 0?_:0},h&&(I.bloomFilter.mightContain=h)),I}(l.status,(r=l.nt)!==null&&r!==void 0?r:null,u,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let u,l;try{u=Mi(s).toUint8Array()}catch(d){if(d instanceof QC)return Yn("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw d}try{l=new Rw(u,o,a)}catch(d){return Yn(d instanceof xu?"BloomFilter error: ":"Applying bloom filter failed: ",d),{status:1}}const c=d=>{const h=this.qe.rt();return l.mightContain(`projects/${h.projectId}/databases/${h.database}/documents/${d}`)};return l.de===0?{status:1}:{status:i===n-this.it(e.targetId,c)?0:2,nt:c}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Vh(a.target)){const u=new M(a.target.path);this.Ke.get(u)!==null||this.ot(o,u)||this.ze(o,u,Re.newNoDocument(u,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=te();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Xe(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new Ec(e,n,this.Ue,this.Ke,r);return this.Ke=on(),this.$e=IT(),this.Ue=new Ie(ee),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new ET,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Ce(ee),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new ET),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function IT(){return new Ie(M.comparator)}function TT(){return new Ie(M.comparator)}const aj=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),uj=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),lj=(()=>({and:"AND",or:"OR"}))();class cj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Uy(t,e){return t.useProto3Json||gc(e)?e:{value:e}}function ma(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rk(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dj(t,e){return ma(t,e.toTimestamp())}function Je(t){return W(!!t),G.fromTimestamp(function(n){const r=Li(n);return new Ne(r.seconds,r.nanos)}(t))}function Pw(t,e){return function(r){return new ue(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Pk(t){const e=ue.fromString(t);return W(Lk(e)),e}function $l(t,e){return Pw(t.databaseId,e.path)}function vr(t,e){const n=Pk(e);if(n.get(1)!==t.databaseId.projectId)throw new x(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(kk(n))}function jy(t,e){return Pw(t.databaseId,e)}function Ck(t){const e=Pk(t);return e.length===4?ue.emptyPath():kk(e)}function Ul(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kk(t){return W(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ST(t,e,n){return{name:$l(t,e),fields:n.value.mapValue.fields}}function bk(t,e,n){const r=vr(t,e.name),i=Je(e.updateTime),s=e.createTime?Je(e.createTime):G.min(),o=new Rt({mapValue:{fields:e.fields}}),a=Re.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function hj(t,e){return"found"in e?function(r,i){W(!!i.found),i.found.name,i.found.updateTime;const s=vr(r,i.found.name),o=Je(i.found.updateTime),a=i.found.createTime?Je(i.found.createTime):G.min(),u=new Rt({mapValue:{fields:i.found.fields}});return Re.newFoundDocument(s,o,a,u)}(t,e):"missing"in e?function(r,i){W(!!i.missing),W(!!i.readTime);const s=vr(r,i.missing),o=Je(i.readTime);return Re.newNoDocument(s,o)}(t,e):j()}function fj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,c){return l.useProto3Json?(W(c===void 0||typeof c=="string"),ut.fromBase64String(c||"")):(W(c===void 0||c instanceof Uint8Array),ut.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?R.UNKNOWN:Ik(l.code);return new x(c,l.message||"")}(o);n=new Ak(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=vr(t,r.document.name),s=Je(r.document.updateTime),o=r.document.createTime?Je(r.document.createTime):G.min(),a=new Rt({mapValue:{fields:r.document.fields}}),u=Re.newFoundDocument(i,s,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];n=new Md(l,c,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=vr(t,r.document),s=r.readTime?Je(r.readTime):G.min(),o=Re.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Md([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=vr(t,r.document),s=r.removedTargetIds||[];n=new Md([],s,i,null)}else{if(!("filter"in e))return j();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ij(i,s),a=r.targetId;n=new Sk(a,o)}}return n}function jl(t,e){let n;if(e instanceof ja)n={update:ST(t,e.key,e.value)};else if(e instanceof Ba)n={delete:$l(t,e.key)};else if(e instanceof Yr)n={update:ST(t,e.key,e.data),updateMask:_j(e.fieldMask)};else{if(!(e instanceof Ew))return j();n={verify:$l(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof fa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Gs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ws)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof pa)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw j()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:dj(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:j()}(t,e.precondition)),n}function By(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?xe.updateTime(Je(s.updateTime)):s.exists!==void 0?xe.exists(s.exists):xe.none()}(e.currentDocument):xe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)W(a.setToServerValue==="REQUEST_TIME"),u=new fa;else if("appendMissingElements"in a){const c=a.appendMissingElements.values||[];u=new Gs(c)}else if("removeAllFromArray"in a){const c=a.removeAllFromArray.values||[];u=new Ws(c)}else"increment"in a?u=new pa(o,a.increment):j();const l=Ye.fromServerFormat(a.fieldPath);return new wc(l,u)}(t,i)):[];if(e.update){e.update.name;const i=vr(t,e.update.name),s=new Rt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const l=u.fieldPaths||[];return new sn(l.map(c=>Ye.fromServerFormat(c)))}(e.updateMask);return new Yr(i,s,o,n,r)}return new ja(i,s,n,r)}if(e.delete){const i=vr(t,e.delete);return new Ba(i,n)}if(e.verify){const i=vr(t,e.verify);return new Ew(i,n)}return j()}function pj(t,e){return t&&t.length>0?(W(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Je(i.updateTime):Je(s);return o.isEqual(G.min())&&(o=Je(s)),new tj(o,i.transformResults||[])}(n,e))):[]}function xk(t,e){return{documents:[jy(t,e.path)]}}function Nk(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=jy(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=jy(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return Vk(fe.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(d){return{field:wo(d.field),direction:gj(d.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Uy(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function Dk(t){let e=Ck(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){W(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const h=Ok(d);return h instanceof fe&&yw(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(h=>function(v){return new Ho(Eo(v.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(d){let h;return h=typeof d=="object"?d.value:d,gc(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(d){const h=!!d.before,f=d.values||[];return new Ui(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(d){const h=!d.before,f=d.values||[];return new Ui(f,h)}(n.endAt)),sk(e,i,o,s,a,"F",u,l)}function mj(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ok(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Eo(n.unaryFilter.field);return ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Eo(n.unaryFilter.field);return ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Eo(n.unaryFilter.field);return ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Eo(n.unaryFilter.field);return ie.create(o,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(t):t.fieldFilter!==void 0?function(n){return ie.create(Eo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fe.create(n.compositeFilter.filters.map(r=>Ok(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return j()}}(n.compositeFilter.op))}(t):j()}function gj(t){return aj[t]}function yj(t){return uj[t]}function vj(t){return lj[t]}function wo(t){return{fieldPath:t.canonicalString()}}function Eo(t){return Ye.fromServerFormat(t.fieldPath)}function Vk(t){return t instanceof ie?function(n){if(n.op==="=="){if(aT(n.value))return{unaryFilter:{field:wo(n.field),op:"IS_NAN"}};if(oT(n.value))return{unaryFilter:{field:wo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(aT(n.value))return{unaryFilter:{field:wo(n.field),op:"IS_NOT_NAN"}};if(oT(n.value))return{unaryFilter:{field:wo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wo(n.field),op:yj(n.op),value:n.value}}}(t):t instanceof fe?function(n){const r=n.getFilters().map(i=>Vk(i));return r.length===1?r[0]:{compositeFilter:{op:vj(n.op),filters:r}}}(t):j()}function _j(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Lk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Dr{constructor(e,n,r,i,s=G.min(),o=G.min(),a=ut.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Mk{constructor(e){this.ct=e}}function wj(t,e){let n;if(e.document)n=bk(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=M.fromSegments(e.noDocument.path),i=Hs(e.noDocument.readTime);n=Re.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return j();{const r=M.fromSegments(e.unknownDocument.path),i=Hs(e.unknownDocument.version);n=Re.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Ne(i[0],i[1]);return G.fromTimestamp(s)}(e.readTime)),n}function AT(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Fh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:$l(s,o.key),fields:o.data.value.mapValue.fields,updateTime:ma(s,o.version.toTimestamp()),createTime:ma(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ks(e.version)};else{if(!e.isUnknownDocument())return j();r.unknownDocument={path:n.path.toArray(),version:Ks(e.version)}}return r}function Fh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ks(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Hs(t){const e=new Ne(t.seconds,t.nanoseconds);return G.fromTimestamp(e)}function hs(t,e){const n=(e.baseMutations||[]).map(s=>By(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>By(t.ct,s)),i=Ne.fromMillis(e.localWriteTimeMs);return new Iw(e.batchId,i,n,r)}function Nu(t){const e=Hs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Hs(t.lastLimboFreeSnapshotVersion):G.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return W(s.documents.length===1),hn(Ua(Ck(s.documents[0])))}(t.query):function(s){return hn(Dk(s))}(t.query),new Dr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,ut.fromBase64String(t.resumeToken))}function Fk(t,e){const n=Ks(e.snapshotVersion),r=Ks(e.lastLimboFreeSnapshotVersion);let i;i=Vh(e.target)?xk(t.ct,e.target):Nk(t.ct,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:qs(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Cw(t){const e=Dk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Mh(e,e.limit,"L"):e}function Gm(t,e){return new Sw(e.largestBatchId,By(t.ct,e.overlayMutation))}function RT(t,e){const n=e.path.lastSegment();return[t,Ht(e.path.popLast()),n]}function PT(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Ks(r.readTime),documentKey:Ht(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class Ej{getBundleMetadata(e,n){return CT(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Hs(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return CT(e).put(function(i){return{bundleId:i.id,createTime:Ks(Je(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return kT(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Cw(s.bundledQuery),readTime:Hs(s.readTime)}}(r)})}saveNamedQuery(e,n){return kT(e).put(function(i){return{name:i.name,readTime:Ks(Je(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function CT(t){return _t(t,"bundles")}function kT(t){return _t(t,"namedQueries")}/**
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
 */class fp{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new fp(e,r)}getOverlay(e,n){return hu(e).get(RT(this.userId,n)).next(r=>r?Gm(this.serializer,r):null)}getOverlays(e,n){const r=fr();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Sw(n,o);i.push(this.ht(e,a))}),A.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Ht(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(hu(e).J("collectionPathOverlayIndex",a))}),A.waitFor(s)}getOverlaysForCollection(e,n,r){const i=fr(),s=Ht(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return hu(e).G("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const l=Gm(this.serializer,u);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=fr();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return hu(e).Z({index:"collectionGroupOverlayIndex",range:a},(u,l,c)=>{const d=Gm(this.serializer,l);s.size()<i||d.largestBatchId===o?(s.set(d.getKey(),d),o=d.largestBatchId):c.done()}).next(()=>s)}ht(e,n){return hu(e).put(function(i,s,o){const[a,u,l]=RT(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:l,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:jl(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function hu(t){return _t(t,"documentOverlays")}/**
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
 */class fs{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(ze(e.integerValue));else if("doubleValue"in e){const r=ze(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),Vl(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(Mi(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?YC(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):j()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),M.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}fs.bt=new fs;function Ij(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function bT(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=Ij(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class Tj{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.vt(r.value),r=n.next();this.Ct()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.vt(r);else if(r<2048)this.vt(960|r>>>6),this.vt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.vt(480|r>>>12),this.vt(128|63&r>>>6),this.vt(128|63&r);else{const i=n.codePointAt(0);this.vt(240|i>>>18),this.vt(128|63&i>>>12),this.vt(128|63&i>>>6),this.vt(128|63&i)}}this.Ct()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Bt(e){const n=this.Lt(e),r=bT(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Lt(e),r=bT(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}vt(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}Ct(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class Sj{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class Aj{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class fu{constructor(){this.Gt=new Tj,this.zt=new Sj(this.Gt),this.jt=new Aj(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class ps{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ps(this.indexId,this.documentKey,this.arrayValue,r)}}function ti(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=xT(t.arrayValue,e.arrayValue),n!==0?n:(n=xT(t.directionalValue,e.directionalValue),n!==0?n:M.comparator(t.documentKey,e.documentKey)))}function xT(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class Rj{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=r:this.Zt.push(r)}}en(e){W(e.collectionGroup===this.collectionId);const n=xy(e);if(n!==void 0&&!this.tn(n))return!1;const r=ls(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt!==void 0){if(!i.has(this.Xt.field.canonicalString())){const a=r[s];if(!this.nn(this.Xt,a)||!this.rn(this.Yt[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}tn(e){for(const n of this.Zt)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}rn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function $k(t){var e,n;if(W(t instanceof ie||t instanceof fe),t instanceof ie){if(t instanceof ik){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ie.create(t.field,"==",s)))||[];return fe.create(i,"or")}return t}const r=t.filters.map(i=>$k(i));return fe.create(r,t.op)}function Pj(t){if(t.getFilters().length===0)return[];const e=Gy($k(t));return W(Uk(e)),zy(e)||qy(e)?[e]:e.getFilters()}function zy(t){return t instanceof ie}function qy(t){return t instanceof fe&&yw(t)}function Uk(t){return zy(t)||qy(t)||function(n){if(n instanceof fe&&Vy(n)){for(const r of n.getFilters())if(!zy(r)&&!qy(r))return!1;return!0}return!1}(t)}function Gy(t){if(W(t instanceof ie||t instanceof fe),t instanceof ie)return t;if(t.filters.length===1)return Gy(t.filters[0]);const e=t.filters.map(r=>Gy(r));let n=fe.create(e,t.op);return n=$h(n),Uk(n)?n:(W(n instanceof fe),W(ha(n)),W(n.filters.length>1),n.filters.reduce((r,i)=>kw(r,i)))}function kw(t,e){let n;return W(t instanceof ie||t instanceof fe),W(e instanceof ie||e instanceof fe),n=t instanceof ie?e instanceof ie?function(i,s){return fe.create([i,s],"and")}(t,e):NT(t,e):e instanceof ie?NT(e,t):function(i,s){if(W(i.filters.length>0&&s.filters.length>0),ha(i)&&ha(s))return tk(i,s.getFilters());const o=Vy(i)?i:s,a=Vy(i)?s:i,u=o.filters.map(l=>kw(l,a));return fe.create(u,"or")}(t,e),$h(n)}function NT(t,e){if(ha(e))return tk(e,t.getFilters());{const n=e.filters.map(r=>kw(t,r));return fe.create(n,"or")}}function $h(t){if(W(t instanceof ie||t instanceof fe),t instanceof ie)return t;const e=t.getFilters();if(e.length===1)return $h(e[0]);if(ZC(t))return t;const n=e.map(i=>$h(i)),r=[];return n.forEach(i=>{i instanceof ie?r.push(i):i instanceof fe&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:fe.create(r,t.op)}/**
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
 */class Cj{constructor(){this.sn=new bw}addToCollectionParentIndex(e,n){return this.sn.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(En.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(En.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class bw{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ce(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ce(ue.comparator)).toArray()}}/**
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
 */const od=new Uint8Array(0);class kj{constructor(e,n){this.user=e,this.databaseId=n,this.on=new bw,this._n=new es(r=>qs(r),(r,i)=>yc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.on.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.on.add(n)});const s={collectionId:r,parent:Ht(i)};return DT(e).put(s)}return A.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[MC(n),""],!1,!0);return DT(e).G(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(hr(o.parent))}return r})}addFieldIndex(e,n){const r=ad(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=mu(e);return s.next(a=>{o.put(PT(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=ad(e),i=mu(e),s=pu(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=pu(e);let i=!0;const s=new Map;return A.forEach(this.an(n),o=>this.un(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=te();const a=[];return A.forEach(s,(u,l)=>{N("IndexedDbIndexManager",`Using index ${function(g){return`id=${g.indexId}|cg=${g.collectionGroup}|f=${g.fields.map(_=>`${_.fieldPath}:${_.kind}`).join(",")}`}(u)} to execute ${qs(n)}`);const c=function(g,_){const I=xy(_);if(I===void 0)return null;for(const S of Lh(g,I.fieldPath))switch(S.op){case"array-contains-any":return S.value.arrayValue.values||[];case"array-contains":return[S.value]}return null}(l,u),d=function(g,_){const I=new Map;for(const S of ls(_))for(const C of Lh(g,S.fieldPath))switch(C.op){case"==":case"in":I.set(S.fieldPath.canonicalString(),C.value);break;case"not-in":case"!=":return I.set(S.fieldPath.canonicalString(),C.value),Array.from(I.values())}return null}(l,u),h=function(g,_){const I=[];let S=!0;for(const C of ls(_)){const L=C.kind===0?hT(g,C.fieldPath,g.startAt):fT(g,C.fieldPath,g.startAt);I.push(L.value),S&&(S=L.inclusive)}return new Ui(I,S)}(l,u),f=function(g,_){const I=[];let S=!0;for(const C of ls(_)){const L=C.kind===0?fT(g,C.fieldPath,g.endAt):hT(g,C.fieldPath,g.endAt);I.push(L.value),S&&(S=L.inclusive)}return new Ui(I,S)}(l,u),v=this.cn(u,l,h),y=this.cn(u,l,f),w=this.ln(u,l,d),m=this.hn(u.indexId,c,v,h.inclusive,y,f.inclusive,w);return A.forEach(m,p=>r.H(p,n.limit).next(g=>{g.forEach(_=>{const I=M.fromSegments(_.documentKey);o.has(I)||(o=o.add(I),a.push(I))})}))}).next(()=>a)}return A.resolve(null)})}an(e){let n=this._n.get(e);return n||(e.filters.length===0?n=[e]:n=Pj(fe.create(e.filters,"and")).map(r=>My(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this._n.set(e,n),n)}hn(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),l=u/(n!=null?n.length:1),c=[];for(let d=0;d<u;++d){const h=n?this.Pn(n[d/l]):od,f=this.In(e,h,r[d%l],i),v=this.Tn(e,h,s[d%l],o),y=a.map(w=>this.In(e,h,w,!0));c.push(...this.createRange(f,v,y))}return c}In(e,n,r,i){const s=new ps(e,M.empty(),n,r);return i?s:s.Jt()}Tn(e,n,r,i){const s=new ps(e,M.empty(),n,r);return i?s.Jt():s}un(e,n){const r=new Rj(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.an(n);return A.forEach(i,s=>this.un(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let l=new Ce(Ye.comparator),c=!1;for(const d of u.filters)for(const h of d.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?c=!0:l=l.add(h.field));for(const d of u.orderBy)d.field.isKeyField()||(l=l.add(d.field));return l.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}En(e,n){const r=new fu;for(const i of ls(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);fs.bt.Pt(s,o)}return r.Wt()}Pn(e){const n=new fu;return fs.bt.Pt(e,n.Ht(0)),n.Wt()}dn(e,n){const r=new fu;return fs.bt.Pt(zs(this.databaseId,n),r.Ht(function(s){const o=ls(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}ln(e,n,r){if(r===null)return[];let i=[];i.push(new fu);let s=0;for(const o of ls(e)){const a=r[s++];for(const u of i)if(this.An(n,o.fieldPath)&&Fl(a))i=this.Rn(i,o,a);else{const l=u.Ht(o.kind);fs.bt.Pt(a,l)}}return this.Vn(i)}cn(e,n,r){return this.ln(e,n,r.position)}Vn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}Rn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new fu;u.seed(a.Wt()),fs.bt.Pt(o,u.Ht(n.kind)),s.push(u)}return s}An(e,n){return!!e.filters.find(r=>r instanceof ie&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=ad(e),i=mu(e);return(n?r.G("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.G()).next(s=>{const o=[];return A.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(c,d){const h=d?new Oh(d.sequenceNumber,new En(Hs(d.readTime),new M(hr(d.documentKey)),d.largestBatchId)):Oh.empty(),f=c.fields.map(([v,y])=>new d4(Ye.fromServerFormat(v),y));return new FC(c.indexId,c.collectionGroup,f,h)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ee(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=ad(e),s=mu(e);return this.mn(e).next(o=>i.G("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>A.forEach(a,u=>s.put(PT(u.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return A.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),A.forEach(a,u=>this.fn(e,i,u).next(l=>{const c=this.gn(s,u);return l.isEqual(c)?A.resolve():this.pn(e,s,u,l,c)}))))})}yn(e,n,r,i){return pu(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.dn(r,n.key),documentKey:n.key.path.toArray()})}wn(e,n,r,i){return pu(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.dn(r,n.key),n.key.path.toArray()])}fn(e,n,r){const i=pu(e);let s=new Ce(ti);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.dn(r,n)])},(o,a)=>{s=s.add(new ps(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}gn(e,n){let r=new Ce(ti);const i=this.En(n,e);if(i==null)return r;const s=xy(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Fl(o))for(const a of o.arrayValue.values||[])r=r.add(new ps(n.indexId,e.key,this.Pn(a),i))}else r=r.add(new ps(n.indexId,e.key,od,i));return r}pn(e,n,r,i,s){N("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(u,l,c,d,h){const f=u.getIterator(),v=l.getIterator();let y=mo(f),w=mo(v);for(;y||w;){let m=!1,p=!1;if(y&&w){const g=c(y,w);g<0?p=!0:g>0&&(m=!0)}else y!=null?p=!0:m=!0;m?(d(w),w=mo(v)):p?(h(y),y=mo(f)):(y=mo(f),w=mo(v))}}(i,s,ti,a=>{o.push(this.yn(e,n,r,a))},a=>{o.push(this.wn(e,n,r,a))}),A.waitFor(o)}mn(e){let n=1;return mu(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>ti(o,a)).filter((o,a,u)=>!a||ti(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=ti(o,e),u=ti(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&u<0)i.push(o),i.push(o.Jt());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Sn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,od,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,od,[]];s.push(IDBKeyRange.bound(a,u))}return s}Sn(e,n){return ti(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(OT)}getMinOffset(e,n){return A.mapArray(this.an(n),r=>this.un(e,r).next(i=>i||j())).next(OT)}}function DT(t){return _t(t,"collectionParents")}function pu(t){return _t(t,"indexEntries")}function ad(t){return _t(t,"indexConfiguration")}function mu(t){return _t(t,"indexState")}function OT(t){W(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;pw(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new En(e.readTime,e.documentKey,n)}/**
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
 */const VT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Zt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function jk(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Z({range:o},(c,d,h)=>(a++,h.delete()));s.push(u.next(()=>{W(a===1)}));const l=[];for(const c of n.mutations){const d=qC(e,c.key.path,n.batchId);s.push(i.delete(d)),l.push(c.key)}return A.waitFor(s).next(()=>l)}function Uh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw j();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(41943040,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);class pp{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.bn={}}static lt(e,n,r,i){W(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new pp(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ni(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Io(e),o=ni(e);return o.add({}).next(a=>{W(typeof a=="number");const u=new Iw(a,n,r,i),l=function(f,v,y){const w=y.baseMutations.map(p=>jl(f.ct,p)),m=y.mutations.map(p=>jl(f.ct,p));return{userId:v,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:w,mutations:m}}(this.serializer,this.userId,u),c=[];let d=new Ce((h,f)=>ee(h.canonicalString(),f.canonicalString()));for(const h of i){const f=qC(this.userId,h.key.path,a);d=d.add(h.key.path.popLast()),c.push(o.put(l)),c.push(s.put(f,y4))}return d.forEach(h=>{c.push(this.indexManager.addToCollectionParentIndex(e,h))}),e.addOnCommittedListener(()=>{this.bn[a]=u.keys()}),A.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return ni(e).get(n).next(r=>r?(W(r.userId===this.userId),hs(this.serializer,r)):null)}Dn(e,n){return this.bn[n]?A.resolve(this.bn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.bn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return ni(e).Z({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(W(a.batchId>=r),s=hs(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return ni(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ni(e).G("userMutationsIndex",n).next(r=>r.map(i=>hs(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Dd(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Io(e).Z({range:i},(o,a,u)=>{const[l,c,d]=o,h=hr(c);if(l===this.userId&&n.path.isEqual(h))return ni(e).get(d).next(f=>{if(!f)throw j();W(f.userId===this.userId),s.push(hs(this.serializer,f))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ce(ee);const i=[];return n.forEach(s=>{const o=Dd(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Io(e).Z({range:a},(l,c,d)=>{const[h,f,v]=l,y=hr(f);h===this.userId&&s.path.isEqual(y)?r=r.add(v):d.done()});i.push(u)}),A.waitFor(i).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Dd(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ce(ee);return Io(e).Z({range:o},(u,l,c)=>{const[d,h,f]=u,v=hr(h);d===this.userId&&r.isPrefixOf(v)?v.length===i&&(a=a.add(f)):c.done()}).next(()=>this.vn(e,a))}vn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(ni(e).get(s).next(o=>{if(o===null)throw j();W(o.userId===this.userId),r.push(hs(this.serializer,o))}))}),A.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return jk(e.ue,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Cn(n.batchId)}),A.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return A.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Io(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=hr(s[1]);i.push(u)}else a.done()}).next(()=>{W(i.length===0)})})}containsKey(e,n){return Bk(e,this.userId,n)}Fn(e){return zk(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Bk(t,e,n){const r=Dd(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Io(t).Z({range:s,Y:!0},(a,u,l)=>{const[c,d,h]=a;c===e&&d===i&&(o=!0),l.done()}).next(()=>o)}function ni(t){return _t(t,"mutations")}function Io(t){return _t(t,"documentMutations")}function zk(t){return _t(t,"mutationQueues")}/**
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
 */class bj{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Nn(e).next(n=>{const r=new Qs(n.highestTargetId);return n.highestTargetId=r.next(),this.Bn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Nn(e).next(n=>G.fromTimestamp(new Ne(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Nn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Nn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Bn(e,i)))}addTargetData(e,n){return this.Ln(e,n).next(()=>this.Nn(e).next(r=>(r.targetCount+=1,this.kn(n,r),this.Bn(e,r))))}updateTargetData(e,n){return this.Ln(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>go(e).delete(n.targetId)).next(()=>this.Nn(e)).next(r=>(W(r.targetCount>0),r.targetCount-=1,this.Bn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return go(e).Z((o,a)=>{const u=Nu(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>A.waitFor(s)).next(()=>i)}forEachTarget(e,n){return go(e).Z((r,i)=>{const s=Nu(i);n(s)})}Nn(e){return LT(e).get("targetGlobalKey").next(n=>(W(n!==null),n))}Bn(e,n){return LT(e).put("targetGlobalKey",n)}Ln(e,n){return go(e).put(Fk(this.serializer,n))}kn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Nn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=qs(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return go(e).Z({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const l=Nu(a);yc(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=ci(e);return n.forEach(o=>{const a=Ht(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),A.waitFor(i)}removeMatchingKeys(e,n,r){const i=ci(e);return A.forEach(n,s=>{const o=Ht(s.path);return A.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=ci(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=ci(e);let s=te();return i.Z({range:r,Y:!0},(o,a,u)=>{const l=hr(o[1]),c=new M(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Ht(n.path),i=IDBKeyRange.bound([r],[MC(r)],!1,!0);let s=0;return ci(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}ut(e,n){return go(e).get(n).next(r=>r?Nu(r):null)}}function go(t){return _t(t,"targets")}function LT(t){return _t(t,"targetGlobal")}function ci(t){return _t(t,"targetDocuments")}/**
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
 */function MT([t,e],[n,r]){const i=ee(t,n);return i===0?ee(e,r):i}class xj{constructor(e){this.qn=e,this.buffer=new Ce(MT),this.Qn=0}Kn(){return++this.Qn}$n(e){const n=[e,this.Kn()];if(this.buffer.size<this.qn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();MT(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Nj{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Un=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Wn(6e4)}stop(){this.Un&&(this.Un.cancel(),this.Un=null)}get started(){return this.Un!==null}Wn(e){N("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Un=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Un=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Zi(n)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ji(n)}await this.Wn(3e5)})}}class Dj{constructor(e,n){this.Gn=e,this.params=n}calculateTargetCount(e,n){return this.Gn.zn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return A.resolve(rn.ae);const r=new xj(n);return this.Gn.forEachTarget(e,i=>r.$n(i.sequenceNumber)).next(()=>this.Gn.jn(e,i=>r.$n(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Gn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Gn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(VT)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),VT):this.Hn(e,n))}getCacheSize(e){return this.Gn.getCacheSize(e)}Hn(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(l=Date.now(),by()<=ae.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${d} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function Oj(t,e){return new Dj(t,e)}/**
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
 */class Vj{constructor(e,n){this.db=e,this.garbageCollector=Oj(this,n)}zn(e){const n=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Jn(e){let n=0;return this.jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}jn(e,n){return this.Yn(e,(r,i)=>n(i))}addReference(e,n,r){return ud(e,r)}removeReference(e,n,r){return ud(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return ud(e,n)}Zn(e,n){return function(i,s){let o=!1;return zk(i).X(a=>Bk(i,a,s).next(u=>(u&&(o=!0),A.resolve(!u)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=n){const u=this.Zn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,G.min()),ci(e).delete(function(d){return[0,Ht(d.path)]}(o))))});i.push(u)}}).next(()=>A.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return ud(e,n)}Yn(e,n){const r=ci(e);let i,s=rn.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==rn.ae&&n(new M(hr(i)),s),s=l,i=u):s=rn.ae}).next(()=>{s!==rn.ae&&n(new M(hr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ud(t,e){return ci(t).put(function(r,i){return{targetId:0,path:Ht(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class qk{constructor(){this.changes=new es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Lj{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ss(e).put(r)}removeEntry(e,n,r){return ss(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Fh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Xn(e,r)))}getEntry(e,n){let r=Re.newInvalidDocument(n);return ss(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(gu(n))},(i,s)=>{r=this.er(n,s)}).next(()=>r)}tr(e,n){let r={size:0,document:Re.newInvalidDocument(n)};return ss(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(gu(n))},(i,s)=>{r={document:this.er(n,s),size:Uh(s)}}).next(()=>r)}getEntries(e,n){let r=on();return this.nr(e,n,(i,s)=>{const o=this.er(i,s);r=r.insert(i,o)}).next(()=>r)}rr(e,n){let r=on(),i=new Ie(M.comparator);return this.nr(e,n,(s,o)=>{const a=this.er(s,o);r=r.insert(s,a),i=i.insert(s,Uh(o))}).next(()=>({documents:r,ir:i}))}nr(e,n,r){if(n.isEmpty())return A.resolve();let i=new Ce(UT);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(gu(i.first()),gu(i.last())),o=i.getIterator();let a=o.getNext();return ss(e).Z({index:"documentKeyIndex",range:s},(u,l,c)=>{const d=M.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&UT(a,d)<0;)r(a,null),a=o.getNext();a&&a.isEqual(d)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?c.W(gu(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),Fh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ss(e).G(IDBKeyRange.bound(o,a,!0)).next(u=>{let l=on();for(const c of u){const d=this.er(M.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);d.isFoundDocument()&&(_c(n,d)||i.has(d.key))&&(l=l.insert(d.key,d))}return l})}getAllFromCollectionGroup(e,n,r,i){let s=on();const o=$T(n,r),a=$T(n,En.max());return ss(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,l,c)=>{const d=this.er(M.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(d.key,d),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new Mj(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return FT(e).get("remoteDocumentGlobalKey").next(n=>(W(!!n),n))}Xn(e,n){return FT(e).put("remoteDocumentGlobalKey",n)}er(e,n){if(n){const r=wj(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(G.min())))return r}return Re.newInvalidDocument(e)}}function Gk(t){return new Lj(t)}class Mj extends qk{constructor(e,n){super(),this.sr=e,this.trackRemovals=n,this._r=new es(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Ce((s,o)=>ee(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this._r.get(s);if(n.push(this.sr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=AT(this.sr.serializer,o);i=i.add(s.path.popLast());const l=Uh(u);r+=l-a.size,n.push(this.sr.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=AT(this.sr.serializer,o.convertToNoDocument(G.min()));n.push(this.sr.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.sr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.sr.updateMetadata(e,r)),A.waitFor(n)}getFromCache(e,n){return this.sr.tr(e,n).next(r=>(this._r.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.sr.rr(e,n).next(({documents:r,ir:i})=>(i.forEach((s,o)=>{this._r.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function FT(t){return _t(t,"remoteDocumentGlobal")}function ss(t){return _t(t,"remoteDocumentsV14")}function gu(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function $T(t,e){const n=e.documentKey.path.toArray();return[t,Fh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function UT(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ee(n[s],r[s]),i)return i;return i=ee(n.length,r.length),i||(i=ee(n[n.length-2],r[r.length-2]),i||ee(n[n.length-1],r[r.length-1]))}/**
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
 */class Fj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Wk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Yu(r.mutation,i,sn.empty(),Ne.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=fr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=bu();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=on();const o=Qu(),a=function(){return Qu()}();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof Yr)?s=s.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),Yu(c.mutation,l,c.mutation.getFieldMask(),Ne.now())):o.set(l.key,sn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var d;return a.set(l,new Fj(c,(d=o.get(l))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Qu();let i=new Ie((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||sn.empty();c=a.applyToLocalView(l,c),r.set(u,c);const d=(i.get(a.batchId)||te()).add(u);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,d=dk();c.forEach(h=>{if(!s.has(h)){const f=_k(n.get(h),r.get(h));f!==null&&d.set(h,f),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,d))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return M.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_w(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):A.resolve(fr());let a=-1,u=s;return o.next(l=>A.forEach(l,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?A.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{u=u.insert(c,h)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,te())).next(c=>({batchId:a,changes:ck(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(r=>{let i=bu();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=bu();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const u=function(c,d){return new Qr(d,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,u)=>{const l=u.getKey();s.get(l)===null&&(s=s.insert(l,Re.newInvalidDocument(l)))});let o=bu();return s.forEach((a,u)=>{const l=i.get(a);l!==void 0&&Yu(l.mutation,u,sn.empty(),Ne.now()),_c(n,u)&&(o=o.insert(a,u))}),o})}}/**
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
 */class $j{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return A.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Je(i.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:Cw(i.bundledQuery),readTime:Je(i.readTime)}}(n)),A.resolve()}}/**
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
 */class Uj{constructor(){this.overlays=new Ie(M.comparator),this.cr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=fr();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=fr(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=fr(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=fr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return A.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Sw(n,r));let s=this.cr.get(n);s===void 0&&(s=te(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
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
 */class xw{constructor(){this.lr=new Ce(ct.hr),this.Pr=new Ce(ct.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new ct(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new M(new ue([])),r=new ct(n,e),i=new ct(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new M(new ue([])),r=new ct(n,e),i=new ct(n,e+1);let s=te();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ct(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return M.comparator(e.key,n.key)||ee(e.mr,n.mr)}static Ir(e,n){return ee(e.mr,n.mr)||M.comparator(e.key,n.key)}}/**
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
 */class jj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Ce(ct.hr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Iw(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new ct(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),i=new ct(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ce(ee);return n.forEach(i=>{const s=new ct(i,0),o=new ct(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),A.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new ct(new M(s),0);let a=new Ce(ee);return this.pr.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.mr)),!0)},o),A.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){W(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return A.forEach(n.mutations,i=>{const s=new ct(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new ct(n,0),i=this.pr.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Bj{constructor(e){this.Dr=e,this.docs=function(){return new Ie(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(n))}getEntries(e,n){let r=on();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Re.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=on();const o=n.path,a=new M(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||pw(UC(c),r)<=0||(i.has(c.key)||_c(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,n,r,i){j()}vr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zj(this)}getSize(e){return A.resolve(this.size)}}class zj extends qk{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class qj{constructor(e){this.persistence=e,this.Cr=new es(n=>qs(n),yc),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new xw,this.targetCount=0,this.Or=Qs.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),A.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Qs(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Ln(n),A.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Mr.containsKey(n))}}/**
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
 */class Kk{constructor(e,n){this.Nr={},this.overlays={},this.Br=new rn(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new qj(this),this.indexManager=new Cj,this.remoteDocumentCache=function(i){return new Bj(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new Mk(n),this.Qr=new $j(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Uj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new jj(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){N("MemoryPersistence","Starting transaction:",e);const i=new Gj(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return A.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class Gj extends BC{constructor(e){super(),this.currentSequenceNumber=e}}class mp{constructor(e){this.persistence=e,this.Wr=new xw,this.Gr=null}static zr(e){return new mp(e)}get jr(){if(this.Gr)return this.Gr;throw j()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),A.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.jr,r=>{const i=M.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,G.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return A.or([()=>A.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class Wj{constructor(e){this.serializer=e}B(e,n,r,i){const s=new up("createOrUpgrade",n);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nT,{unique:!0}),u.createObjectStore("documentMutations")}(e),jT(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=A.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),jT(e)),o=o.next(()=>function(u){const l=u.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:G.min().toTimestamp(),targetCount:0};return l.put("targetGlobalKey",c)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,l){return l.store("mutations").G().next(c=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nT,{unique:!0});const d=l.store("mutations"),h=c.map(f=>d.put(f));return A.waitFor(h)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Yr(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.Zr(s)))),r<7&&i>=7&&(o=o.next(()=>this.Xr(s))),r<8&&i>=8&&(o=o.next(()=>this.ei(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ti(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const l=u.createObjectStore("documentOverlays",{keyPath:k4});l.createIndex("collectionPathOverlayIndex",b4,{unique:!1}),l.createIndex("collectionGroupOverlayIndex",x4,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const l=u.createObjectStore("remoteDocumentsV14",{keyPath:v4});l.createIndex("documentKeyIndex",_4),l.createIndex("collectionGroupIndex",w4)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ri(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:A4}).createIndex("sequenceNumberIndex",R4,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:P4}).createIndex("documentKeyIndex",C4,{unique:!1})}(e))),o}Zr(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=Uh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Yr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.G().next(i=>A.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>A.forEach(a,u=>{W(u.userId===s.userId);const l=hs(this.serializer,u);return jk(e,s.userId,l).next(()=>{})}))}))}Xr(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const u=new ue(o),l=function(d){return[0,Ht(d)]}(u);s.push(n.get(l).next(c=>c?A.resolve():(d=>n.put({targetId:0,path:Ht(d),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>A.waitFor(s))})}ei(e,n){e.createObjectStore("collectionParents",{keyPath:S4});const r=n.store("collectionParents"),i=new bw,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Ht(u)})}};return n.store("remoteDocuments").Z({Y:!0},(o,a)=>{const u=new ue(o);return s(u.popLast())}).next(()=>n.store("documentMutations").Z({Y:!0},([o,a,u],l)=>{const c=hr(a);return s(c.popLast())}))}ti(e){const n=e.store("targets");return n.Z((r,i)=>{const s=Nu(i),o=Fk(this.serializer,s);return n.put(o)})}ni(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),u=function(d){return d.document?new M(ue.fromString(d.document.name).popFirst(5)):d.noDocument?M.fromSegments(d.noDocument.path):d.unknownDocument?M.fromSegments(d.unknownDocument.path):j()}(o).path.toArray(),l={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>A.waitFor(i))}ri(e,n){const r=n.store("mutations"),i=Gk(this.serializer),s=new Kk(mp.zr,this.serializer.ct);return r.G().next(o=>{const a=new Map;return o.forEach(u=>{var l;let c=(l=a.get(u.userId))!==null&&l!==void 0?l:te();hs(this.serializer,u).keys().forEach(d=>c=c.add(d)),a.set(u.userId,c)}),A.forEach(a,(u,l)=>{const c=new ht(l),d=fp.lt(this.serializer,c),h=s.getIndexManager(c),f=pp.lt(c,this.serializer,h,s.referenceDelegate);return new Wk(i,f,d,h).recalculateAndSaveOverlaysForDocumentKeys(new Ny(n,rn.ae),u).next()})})}}function jT(t){t.createObjectStore("targetDocuments",{keyPath:I4}).createIndex("documentTargetsIndex",T4,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",E4,{unique:!0}),t.createObjectStore("targetGlobal")}const Wm="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Nw{constructor(e,n,r,i,s,o,a,u,l,c,d=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.si=l,this.oi=c,this._i=d,this.Br=null,this.Lr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ai=null,this.inForeground=!1,this.ui=null,this.ci=null,this.li=Number.NEGATIVE_INFINITY,this.hi=h=>Promise.resolve(),!Nw.v())throw new x(R.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Vj(this,i),this.Pi=n+"main",this.serializer=new Mk(u),this.Ii=new qn(this.Pi,this._i,new Wj(this.serializer)),this.kr=new bj(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Gk(this.serializer),this.Qr=new Ej,this.window&&this.window.localStorage?this.Ti=this.window.localStorage:(this.Ti=null,c===!1&&Qe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ei().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new x(R.FAILED_PRECONDITION,Wm);return this.di(),this.Ai(),this.Ri(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.kr.getHighestSequenceNumber(e))}).then(e=>{this.Br=new rn(e,this.si)}).then(()=>{this.Lr=!0}).catch(e=>(this.Ii&&this.Ii.close(),Promise.reject(e)))}Vi(e){return this.hi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ii.k(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.Ei()}))}Ei(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ld(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.mi(e).next(n=>{n||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)))})}).next(()=>this.fi(e)).next(n=>this.isPrimary&&!n?this.gi(e).next(()=>!1):!!n&&this.pi(e).next(()=>!0))).catch(e=>{if(Zi(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.hi(e)),this.isPrimary=e})}mi(e){return yu(e).get("owner").next(n=>A.resolve(this.yi(n)))}wi(e){return ld(e).delete(this.clientId)}async Si(){if(this.isPrimary&&!this.bi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=_t(n,"clientMetadata");return r.G().next(i=>{const s=this.Di(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return A.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ti)for(const n of e)this.Ti.removeItem(this.vi(n.clientId))}}Ri(){this.ci=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ei().then(()=>this.Si()).then(()=>this.Ri()))}yi(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.oi?A.resolve(!0):yu(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)){if(this.yi(n)&&this.networkEnabled)return!0;if(!this.yi(n)){if(!n.allowTabSynchronization)throw new x(R.FAILED_PRECONDITION,Wm);return!1}}return!(!this.networkEnabled||!this.inForeground)||ld(e).G().next(r=>this.Di(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&N("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Lr=!1,this.Fi(),this.ci&&(this.ci.cancel(),this.ci=null),this.Mi(),this.xi(),await this.Ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Ny(e,rn.ae);return this.gi(n).next(()=>this.wi(n))}),this.Ii.close(),this.Oi()}Di(e,n){return e.filter(r=>this.bi(r.updateTimeMs,n)&&!this.Ci(r.clientId))}Ni(){return this.runTransaction("getActiveClients","readonly",e=>ld(e).G().next(n=>this.Di(n,18e5).map(r=>r.clientId)))}get started(){return this.Lr}getMutationQueue(e,n){return pp.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new kj(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return fp.lt(this.serializer,e)}getBundleCache(){return this.Qr}runTransaction(e,n,r){N("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(u){return u===15?D4:u===14?KC:u===13?WC:u===12?N4:u===11?GC:void j()}(this._i);let o;return this.Ii.runTransaction(e,i,s,a=>(o=new Ny(a,this.Br?this.Br.next():rn.ae),n==="readwrite-primary"?this.mi(o).next(u=>!!u||this.fi(o)).next(u=>{if(!u)throw Qe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)),new x(R.FAILED_PRECONDITION,jC);return r(o)}).next(u=>this.pi(o).next(()=>u)):this.Bi(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Bi(e){return yu(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)&&!this.yi(n)&&!(this.oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new x(R.FAILED_PRECONDITION,Wm)})}pi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return yu(e).put("owner",n)}static v(){return qn.v()}gi(e){const n=yu(e);return n.get("owner").next(r=>this.yi(r)?(N("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):A.resolve())}bi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Qe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}di(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ui=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ei()))},this.document.addEventListener("visibilitychange",this.ui),this.inForeground=this.document.visibilityState==="visible")}Mi(){this.ui&&(this.document.removeEventListener("visibilitychange",this.ui),this.ui=null)}Ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ai=()=>{this.Fi();const n=/(?:Version|Mobile)\/1[456]/;wF()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ai))}xi(){this.ai&&(this.window.removeEventListener("pagehide",this.ai),this.ai=null)}Ci(e){var n;try{const r=((n=this.Ti)===null||n===void 0?void 0:n.getItem(this.vi(e)))!==null;return N("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Qe("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Fi(){if(this.Ti)try{this.Ti.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){Qe("Failed to set zombie client id.",e)}}Oi(){if(this.Ti)try{this.Ti.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function yu(t){return _t(t,"owner")}function ld(t){return _t(t,"clientMetadata")}function Dw(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Ow{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ow(e,n.fromCache,r,i)}}/**
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
 */class Hk{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(pT(n))return A.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Mh(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.Gi(n,a);return this.zi(n,l,o,u.readTime)?this.$i(e,Mh(n,null,"F")):this.ji(e,l,n,u)}))})))}Ui(e,n,r,i){return pT(n)||i.isEqual(G.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(by()<=ae.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$y(n)),this.ji(e,o,n,$C(i,-1)))})}Gi(e,n){let r=new Ce(uk(e));return n.forEach((i,s)=>{_c(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return by()<=ae.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",$y(n)),this.Ki.getDocumentsMatchingQuery(e,n,En.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Kj{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Ie(ee),this.Yi=new es(s=>qs(s),yc),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wk(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function Qk(t,e,n,r){return new Kj(t,e,n,r)}async function Yk(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=te();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({ts:l,removedBatchIds:o,addedBatchIds:a}))})})}function Hj(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,u,l,c){const d=l.batch,h=d.keys();let f=A.resolve();return h.forEach(v=>{f=f.next(()=>c.getEntry(u,v)).next(y=>{const w=l.docVersions.get(v);W(w!==null),y.version.compareTo(w)<0&&(d.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),c.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(u,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=te();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(u=u.add(a.batch.mutations[l].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Xk(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function Qj(t,e){const n=$(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.kr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.kr.addMatchingKeys(s,c.addedDocuments,d)));let f=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?f=f.withResumeToken(ut.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(d,f),function(y,w,m){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(h,f,c)&&a.push(n.kr.updateTargetData(s,f))});let u=on(),l=te();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Jk(s,o,e.documentUpdates).next(c=>{u=c.ns,l=c.rs})),!r.isEqual(G.min())){const c=n.kr.getLastRemoteSnapshotVersion(s).next(d=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.Ji=i,s))}function Jk(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=on();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(G.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{ns:o,rs:i}})}function Yj(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ga(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new Dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function ya(t,e,n){const r=$(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Zi(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function jh(t,e,n){const r=$(t);let i=G.min(),s=te();return r.persistence.runTransaction("Execute query","readonly",o=>function(u,l,c){const d=$(u),h=d.Yi.get(c);return h!==void 0?A.resolve(d.Ji.get(h)):d.kr.getTargetData(l,c)}(r,o,hn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:G.min(),n?s:te())).next(a=>(tb(r,ak(e),a),{documents:a,ss:s})))}function Zk(t,e){const n=$(t),r=$(n.kr),i=n.Ji.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ut(s,e).next(o=>o?o.target:null))}function eb(t,e){const n=$(t),r=n.Zi.get(e)||G.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Xi.getAllFromCollectionGroup(i,e,$C(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(tb(n,e,i),i))}function tb(t,e,n){let r=t.Zi.get(e)||G.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}async function Xj(t,e,n,r){const i=$(t);let s=te(),o=on();for(const l of n){const c=e.os(l.metadata.name);l.document&&(s=s.add(c));const d=e._s(l);d.setReadTime(e.us(l.metadata.readTime)),o=o.insert(c,d)}const a=i.Xi.newChangeBuffer({trackRemovals:!0}),u=await ga(i,function(c){return hn(Ua(ue.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>Jk(l,a,o).next(c=>(a.apply(l),c)).next(c=>i.kr.removeMatchingKeysForTargetId(l,u.targetId).next(()=>i.kr.addMatchingKeys(l,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,c.ns,c.rs)).next(()=>c.ns)))}async function Jj(t,e,n=te()){const r=await ga(t,hn(Cw(e.bundledQuery))),i=$(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Je(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Qr.saveNamedQuery(s,e);const a=r.withResumeToken(ut.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.kr.updateTargetData(s,a).next(()=>i.kr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.kr.addMatchingKeys(s,n,r.targetId)).next(()=>i.Qr.saveNamedQuery(s,e))})}function BT(t,e){return`firestore_clients_${t}_${e}`}function zT(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Km(t,e){return`firestore_targets_${t}_${e}`}class Bh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static cs(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new x(i.error.code,i.error.message))),o?new Bh(e,n,i.state,s):(Qe("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Xu{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static cs(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new x(r.error.code,r.error.message))),s?new Xu(e,r.state,i):(Qe("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class zh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static cs(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=ww();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=zC(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new zh(e,s):(Qe("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Vw{constructor(e,n){this.clientId=e,this.onlineState=n}static cs(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Vw(n.clientId,n.onlineState):(Qe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Wy{constructor(){this.activeTargetIds=ww()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Hm{constructor(e,n,r,i,s){this.window=e,this.ii=n,this.persistenceKey=r,this.Is=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ts=this.Es.bind(this),this.ds=new Ie(ee),this.started=!1,this.As=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Rs=BT(this.persistenceKey,this.Is),this.Vs=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.ds=this.ds.insert(this.Is,new Wy),this.fs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.ps=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.ys=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.ws=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ts)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ni();for(const r of e){if(r===this.Is)continue;const i=this.getItem(BT(this.persistenceKey,r));if(i){const s=zh.cs(r,i);s&&(this.ds=this.ds.insert(s.clientId,s))}}this.Ss();const n=this.storage.getItem(this.ys);if(n){const r=this.bs(n);r&&this.Ds(r)}for(const r of this.As)this.Es(r);this.As=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.vs(this.ds)}isActiveQueryTarget(e){let n=!1;return this.ds.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Cs(e,"pending")}updateMutationState(e,n,r){this.Cs(e,n,r),this.Fs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Km(this.persistenceKey,e));if(r){const i=Xu.cs(e,r);i&&(n=i.state)}}return this.Ms.hs(e),this.Ss(),n}removeLocalQueryTarget(e){this.Ms.Ps(e),this.Ss()}isLocalQueryTarget(e){return this.Ms.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Km(this.persistenceKey,e))}updateQueryState(e,n,r){this.xs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Fs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Os(e)}notifyBundleLoaded(e){this.Ns(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ts),this.removeItem(this.Rs),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return N("SharedClientState","READ",e,n),n}setItem(e,n){N("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){N("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Es(e){const n=e;if(n.storageArea===this.storage){if(N("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Rs)return void Qe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.fs.test(n.key)){if(n.newValue==null){const r=this.Bs(n.key);return this.Ls(r,null)}{const r=this.ks(n.key,n.newValue);if(r)return this.Ls(r.clientId,r)}}else if(this.gs.test(n.key)){if(n.newValue!==null){const r=this.qs(n.key,n.newValue);if(r)return this.Qs(r)}}else if(this.ps.test(n.key)){if(n.newValue!==null){const r=this.Ks(n.key,n.newValue);if(r)return this.$s(r)}}else if(n.key===this.ys){if(n.newValue!==null){const r=this.bs(n.newValue);if(r)return this.Ds(r)}}else if(n.key===this.Vs){const r=function(s){let o=rn.ae;if(s!=null)try{const a=JSON.parse(s);W(typeof a=="number"),o=a}catch(a){Qe("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==rn.ae&&this.sequenceNumberHandler(r)}else if(n.key===this.ws){const r=this.Us(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ws(i)))}}}else this.As.push(n)})}}get Ms(){return this.ds.get(this.Is)}Ss(){this.setItem(this.Rs,this.Ms.ls())}Cs(e,n,r){const i=new Bh(this.currentUser,e,n,r),s=zT(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ls())}Fs(e){const n=zT(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Os(e){const n={clientId:this.Is,onlineState:e};this.storage.setItem(this.ys,JSON.stringify(n))}xs(e,n,r){const i=Km(this.persistenceKey,e),s=new Xu(e,n,r);this.setItem(i,s.ls())}Ns(e){const n=JSON.stringify(Array.from(e));this.setItem(this.ws,n)}Bs(e){const n=this.fs.exec(e);return n?n[1]:null}ks(e,n){const r=this.Bs(e);return zh.cs(r,n)}qs(e,n){const r=this.gs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Bh.cs(new ht(s),i,n)}Ks(e,n){const r=this.ps.exec(e),i=Number(r[1]);return Xu.cs(i,n)}bs(e){return Vw.cs(e)}Us(e){return JSON.parse(e)}async Qs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Gs(e.batchId,e.state,e.error);N("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}$s(e){return this.syncEngine.zs(e.targetId,e.state,e.error)}Ls(e,n){const r=n?this.ds.insert(e,n):this.ds.remove(e),i=this.vs(this.ds),s=this.vs(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.js(o,a).then(()=>{this.ds=r})}Ds(e){this.ds.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}vs(e){let n=ww();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class nb{constructor(){this.Hs=new Wy,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Wy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Zj{Ys(e){}shutdown(){}}/**
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
 */class qT{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let cd=null;function Qm(){return cd===null?cd=function(){return 268435456+Math.round(2147483648*Math.random())}():cd++,"0x"+cd.toString(16)}/**
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
 */const eB={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class tB{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const Ot="WebChannelConnection";class nB extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http";this.To=r+"://"+n.host,this.Eo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get Ao(){return!1}Ro(n,r,i,s,o){const a=Qm(),u=this.Vo(n,r);N("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const l={};return this.mo(l,s,o),this.fo(n,u,l,i).then(c=>(N("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Yn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",u,"request:",i),c})}po(n,r,i,s,o,a){return this.Ro(n,r,i,s,o)}mo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$a}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Vo(n,r){const i=eB[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}fo(e,n,r,i){const s=Qm();return new Promise((o,a)=>{const u=new JU;u.setWithCredentials(!0),u.listenOnce(QU.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case qm.NO_ERROR:const c=u.getResponseJson();N(Ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case qm.TIMEOUT:N(Ot,`RPC '${e}' ${s} timed out`),a(new x(R.DEADLINE_EXCEEDED,"Request time out"));break;case qm.HTTP_ERROR:const d=u.getStatus();if(N(Ot,`RPC '${e}' ${s} failed with status:`,d,"response text:",u.getResponseText()),d>0){let h=u.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const v=function(w){const m=w.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(m)>=0?m:R.UNKNOWN}(f.status);a(new x(v,f.message))}else a(new x(R.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new x(R.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{N(Ot,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);N(Ot,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",l,r,15)})}yo(e,n,r){const i=Qm(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=KU(),a=HU(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.xmlHttpFactory=new XU({})),this.mo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const c=s.join("");N(Ot,`Creating RPC '${e}' stream ${i}: ${c}`,u);const d=o.createWebChannel(c,u);let h=!1,f=!1;const v=new tB({so:w=>{f?N(Ot,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(h||(N(Ot,`Opening RPC '${e}' stream ${i} transport.`),d.open(),h=!0),N(Ot,`RPC '${e}' stream ${i} sending:`,w),d.send(w))},oo:()=>d.close()}),y=(w,m,p)=>{w.listen(m,g=>{try{p(g)}catch(_){setTimeout(()=>{throw _},0)}})};return y(d,rd.EventType.OPEN,()=>{f||N(Ot,`RPC '${e}' stream ${i} transport opened.`)}),y(d,rd.EventType.CLOSE,()=>{f||(f=!0,N(Ot,`RPC '${e}' stream ${i} transport closed`),v.Po())}),y(d,rd.EventType.ERROR,w=>{f||(f=!0,Yn(Ot,`RPC '${e}' stream ${i} transport errored:`,w),v.Po(new x(R.UNAVAILABLE,"The operation could not be completed")))}),y(d,rd.EventType.MESSAGE,w=>{var m;if(!f){const p=w.data[0];W(!!p);const g=p,_=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(_){N(Ot,`RPC '${e}' stream ${i} received error:`,_);const I=_.status;let S=function(J){const z=et[J];if(z!==void 0)return Ik(z)}(I),C=_.message;S===void 0&&(S=R.INTERNAL,C="Unknown error status: "+I+" with message "+_.message),f=!0,v.Po(new x(S,C)),d.close()}else N(Ot,`RPC '${e}' stream ${i} received:`,p),v.Io(p)}}),y(a,YU.STAT_EVENT,w=>{w.stat===J0.PROXY?N(Ot,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===J0.NOPROXY&&N(Ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.ho()},0),v}}/**
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
 */function rb(){return typeof window<"u"?window:null}function Fd(){return typeof document<"u"?document:null}/**
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
 */function Tc(t){return new cj(t,!0)}/**
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
 */class Lw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.wo=r,this.So=i,this.bo=s,this.Do=0,this.vo=null,this.Co=Date.now(),this.reset()}reset(){this.Do=0}Fo(){this.Do=this.bo}Mo(e){this.cancel();const n=Math.floor(this.Do+this.xo()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Do} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.vo=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.Do*=this.So,this.Do<this.wo&&(this.Do=this.wo),this.Do>this.bo&&(this.Do=this.bo)}Oo(){this.vo!==null&&(this.vo.skipDelay(),this.vo=null)}cancel(){this.vo!==null&&(this.vo.cancel(),this.vo=null)}xo(){return(Math.random()-.5)*this.Do}}/**
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
 */class ib{constructor(e,n,r,i,s,o,a,u){this.ii=e,this.No=r,this.Bo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Lo=0,this.ko=null,this.qo=null,this.stream=null,this.Qo=new Lw(e,n)}Ko(){return this.state===1||this.state===5||this.$o()}$o(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Uo()}async stop(){this.Ko()&&await this.close(0)}Wo(){this.state=0,this.Qo.reset()}Go(){this.$o()&&this.ko===null&&(this.ko=this.ii.enqueueAfterDelay(this.No,6e4,()=>this.zo()))}jo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.$o())return this.close(0)}Ho(){this.ko&&(this.ko.cancel(),this.ko=null)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}async close(e,n){this.Ho(),this.Jo(),this.Qo.cancel(),this.Lo++,e!==4?this.Qo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(Qe(n.toString()),Qe("Using maximum backoff delay to prevent overloading the backend."),this.Qo.Fo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Yo(){}auth(){this.state=1;const e=this.Zo(this.Lo),n=this.Lo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Lo===n&&this.Xo(r,i)},r=>{e(()=>{const i=new x(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.e_(i)})})}Xo(e,n){const r=this.Zo(this.Lo);this.stream=this.t_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.qo=this.ii.enqueueAfterDelay(this.Bo,1e4,()=>(this.$o()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.e_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Uo(){this.state=5,this.Qo.Mo(async()=>{this.state=0,this.start()})}e_(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Zo(e){return n=>{this.ii.enqueueAndForget(()=>this.Lo===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rB extends ib{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}t_(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.Qo.reset();const n=fj(this.serializer,e),r=function(s){if(!("targetChange"in s))return G.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?Je(o.readTime):G.min()}(e);return this.listener.n_(n,r)}r_(e){const n={};n.database=Ul(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Vh(u)?{documents:xk(s,u)}:{query:Nk(s,u)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Rk(s,o.resumeToken);const l=Uy(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(G.min())>0){a.readTime=ma(s,o.snapshotVersion.toTimestamp());const l=Uy(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=mj(this.serializer,e);r&&(n.labels=r),this.jo(n)}i_(e){const n={};n.database=Ul(this.serializer),n.removeTarget=e,this.jo(n)}}class iB extends ib{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.s_=!1}get o_(){return this.s_}start(){this.s_=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.s_&&this.__([])}t_(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.s_){this.Qo.reset();const n=pj(e.writeResults,e.commitTime),r=Je(e.commitTime);return this.listener.a_(r,n)}return W(!e.writeResults||e.writeResults.length===0),this.s_=!0,this.listener.u_()}c_(){const e={};e.database=Ul(this.serializer),this.jo(e)}__(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>jl(this.serializer,r))};this.jo(n)}}/**
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
 */class sB extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.l_=!1}h_(){if(this.l_)throw new x(R.FAILED_PRECONDITION,"The client has already been terminated.")}Ro(e,n,r){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(R.UNKNOWN,i.toString())})}po(e,n,r,i){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.po(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(R.UNKNOWN,s.toString())})}terminate(){this.l_=!0}}class oB{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.I_=0,this.T_=null,this.E_=!0}d_(){this.I_===0&&(this.A_("Unknown"),this.T_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.T_=null,this.R_("Backend didn't respond within 10 seconds."),this.A_("Offline"),Promise.resolve())))}V_(e){this.state==="Online"?this.A_("Unknown"):(this.I_++,this.I_>=1&&(this.m_(),this.R_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.A_("Offline")))}set(e){this.m_(),this.I_=0,e==="Online"&&(this.E_=!1),this.A_(e)}A_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}R_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.E_?(Qe(n),this.E_=!1):N("OnlineStateTracker",n)}m_(){this.T_!==null&&(this.T_.cancel(),this.T_=null)}}/**
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
 */class aB{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.f_=[],this.g_=new Map,this.p_=new Set,this.y_=[],this.w_=s,this.w_.Ys(o=>{r.enqueueAndForget(async()=>{ts(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(u){const l=$(u);l.p_.add(4),await za(l),l.S_.set("Unknown"),l.p_.delete(4),await Sc(l)}(this))})}),this.S_=new oB(r,i)}}async function Sc(t){if(ts(t))for(const e of t.y_)await e(!0)}async function za(t){for(const e of t.y_)await e(!1)}function gp(t,e){const n=$(t);n.g_.has(e.targetId)||(n.g_.set(e.targetId,e),$w(n)?Fw(n):Ga(n).$o()&&Mw(n,e))}function Bl(t,e){const n=$(t),r=Ga(n);n.g_.delete(e),r.$o()&&sb(n,e),n.g_.size===0&&(r.$o()?r.Go():ts(n)&&n.S_.set("Unknown"))}function Mw(t,e){if(t.b_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ga(t).r_(e)}function sb(t,e){t.b_.Be(e),Ga(t).i_(e)}function Fw(t){t.b_=new oj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.g_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Ga(t).start(),t.S_.d_()}function $w(t){return ts(t)&&!Ga(t).Ko()&&t.g_.size>0}function ts(t){return $(t).p_.size===0}function ob(t){t.b_=void 0}async function uB(t){t.g_.forEach((e,n)=>{Mw(t,e)})}async function lB(t,e){ob(t),$w(t)?(t.S_.V_(e),Fw(t)):t.S_.set("Unknown")}async function cB(t,e,n){if(t.S_.set("Online"),e instanceof Ak&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.g_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.g_.delete(a),i.b_.removeTarget(a))}(t,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qh(t,r)}else if(e instanceof Md?t.b_.We(e):e instanceof Sk?t.b_.Ze(e):t.b_.je(e),!n.isEqual(G.min()))try{const r=await Xk(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.b_.st(o);return a.targetChanges.forEach((u,l)=>{if(u.resumeToken.approximateByteSize()>0){const c=s.g_.get(l);c&&s.g_.set(l,c.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,l)=>{const c=s.g_.get(u);if(!c)return;s.g_.set(u,c.withResumeToken(ut.EMPTY_BYTE_STRING,c.snapshotVersion)),sb(s,u);const d=new Dr(c.target,u,l,c.sequenceNumber);Mw(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await qh(t,r)}}async function qh(t,e,n){if(!Zi(e))throw e;t.p_.add(1),await za(t),t.S_.set("Offline"),n||(n=()=>Xk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.p_.delete(1),await Sc(t)})}function ab(t,e){return e().catch(n=>qh(t,n,e))}async function qa(t){const e=$(t),n=ji(e);let r=e.f_.length>0?e.f_[e.f_.length-1].batchId:-1;for(;dB(e);)try{const i=await Yj(e.localStore,r);if(i===null){e.f_.length===0&&n.Go();break}r=i.batchId,hB(e,i)}catch(i){await qh(e,i)}ub(e)&&lb(e)}function dB(t){return ts(t)&&t.f_.length<10}function hB(t,e){t.f_.push(e);const n=ji(t);n.$o()&&n.o_&&n.__(e.mutations)}function ub(t){return ts(t)&&!ji(t).Ko()&&t.f_.length>0}function lb(t){ji(t).start()}async function fB(t){ji(t).c_()}async function pB(t){const e=ji(t);for(const n of t.f_)e.__(n.mutations)}async function mB(t,e,n){const r=t.f_.shift(),i=Tw.from(r,e,n);await ab(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await qa(t)}async function gB(t,e){e&&ji(t).o_&&await async function(r,i){if(function(o){return Ek(o)&&o!==R.ABORTED}(i.code)){const s=r.f_.shift();ji(r).Wo(),await ab(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await qa(r)}}(t,e),ub(t)&&lb(t)}async function GT(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=ts(n);n.p_.add(3),await za(n),r&&n.S_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.p_.delete(3),await Sc(n)}async function Ky(t,e){const n=$(t);e?(n.p_.delete(2),await Sc(n)):e||(n.p_.add(2),await za(n),n.S_.set("Unknown"))}function Ga(t){return t.D_||(t.D_=function(n,r,i){const s=$(n);return s.h_(),new rB(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:uB.bind(null,t),uo:lB.bind(null,t),n_:cB.bind(null,t)}),t.y_.push(async e=>{e?(t.D_.Wo(),$w(t)?Fw(t):t.S_.set("Unknown")):(await t.D_.stop(),ob(t))})),t.D_}function ji(t){return t.v_||(t.v_=function(n,r,i){const s=$(n);return s.h_(),new iB(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:fB.bind(null,t),uo:gB.bind(null,t),u_:pB.bind(null,t),a_:mB.bind(null,t)}),t.y_.push(async e=>{e?(t.v_.Wo(),await qa(t)):(await t.v_.stop(),t.f_.length>0&&(N("RemoteStore",`Stopping write stream with ${t.f_.length} pending writes`),t.f_=[]))})),t.v_}/**
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
 */class Uw{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Uw(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wa(t,e){if(Qe("AsyncQueue",`${e}: ${t}`),Zi(t))return new x(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Qo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=bu(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new Qo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class WT{constructor(){this.C_=new Ie(M.comparator)}track(e){const n=e.doc.key,r=this.C_.get(n);r?e.type!==0&&r.type===3?this.C_=this.C_.insert(n,e):e.type===3&&r.type!==1?this.C_=this.C_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.C_=this.C_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.C_=this.C_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.C_=this.C_.remove(n):e.type===1&&r.type===2?this.C_=this.C_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.C_=this.C_.insert(n,{type:2,doc:e.doc}):j():this.C_=this.C_.insert(n,e)}F_(){const e=[];return this.C_.inorderTraversal((n,r)=>{e.push(r)}),e}}class va{constructor(e,n,r,i,s,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new va(e,n,Qo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class yB{constructor(){this.M_=void 0,this.listeners=[]}}class vB{constructor(){this.queries=new es(e=>ok(e),vc),this.onlineState="Unknown",this.x_=new Set}}async function jw(t,e){const n=$(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new yB),i)try{s.M_=await n.onListen(r)}catch(o){const a=Wa(o,`Initialization of query '${$y(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.O_(n.onlineState),s.M_&&e.N_(s.M_)&&zw(n)}async function Bw(t,e){const n=$(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function _B(t,e){const n=$(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.N_(i)&&(r=!0);o.M_=i}}r&&zw(n)}function wB(t,e,n){const r=$(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function zw(t){t.x_.forEach(e=>{e.next()})}class qw{constructor(e,n,r){this.query=e,this.B_=n,this.L_=!1,this.k_=null,this.onlineState="Unknown",this.options=r||{}}N_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new va(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.L_?this.q_(e)&&(this.B_.next(e),n=!0):this.Q_(e,this.onlineState)&&(this.K_(e),n=!0),this.k_=e,n}onError(e){this.B_.error(e)}O_(e){this.onlineState=e;let n=!1;return this.k_&&!this.L_&&this.Q_(this.k_,e)&&(this.K_(this.k_),n=!0),n}Q_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.U_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}q_(e){if(e.docChanges.length>0)return!0;const n=this.k_&&this.k_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}K_(e){e=va.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.L_=!0,this.B_.next(e)}}/**
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
 */class EB{constructor(e,n){this.W_=e,this.byteLength=n}G_(){return"metadata"in this.W_}}/**
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
 */class KT{constructor(e){this.serializer=e}os(e){return vr(this.serializer,e)}_s(e){return e.metadata.exists?bk(this.serializer,e.document,!1):Re.newNoDocument(this.os(e.metadata.name),this.us(e.metadata.readTime))}us(e){return Je(e)}}class IB{constructor(e,n,r){this.z_=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=cb(e)}j_(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.W_.namedQuery)this.queries.push(e.W_.namedQuery);else if(e.W_.documentMetadata){this.documents.push({metadata:e.W_.documentMetadata}),e.W_.documentMetadata.exists||++n;const r=ue.fromString(e.W_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.W_.document&&(this.documents[this.documents.length-1].document=e.W_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}H_(e){const n=new Map,r=new KT(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.os(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||te()).add(s);n.set(o,a)}}return n}async complete(){const e=await Xj(this.localStore,new KT(this.serializer),this.documents,this.z_.id),n=this.H_(this.documents);for(const r of this.queries)await Jj(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,J_:this.collectionGroups,Y_:e}}}function cb(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class db{constructor(e){this.key=e}}class hb{constructor(e){this.key=e}}class fb{constructor(e,n){this.query=e,this.Z_=n,this.X_=null,this.hasCachedResults=!1,this.current=!1,this.ea=te(),this.mutatedKeys=te(),this.ta=uk(e),this.na=new Qo(this.ta)}get ra(){return this.Z_}ia(e,n){const r=n?n.sa:new WT,i=n?n.na:this.na;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),f=_c(this.query,d)?d:null,v=!!h&&this.mutatedKeys.has(h.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;h&&f?h.data.isEqual(f.data)?v!==y&&(r.track({type:3,doc:f}),w=!0):this.oa(h,f)||(r.track({type:2,doc:f}),w=!0,(u&&this.ta(f,u)>0||l&&this.ta(f,l)<0)&&(a=!0)):!h&&f?(r.track({type:0,doc:f}),w=!0):h&&!f&&(r.track({type:1,doc:h}),w=!0,(u||l)&&(a=!0)),w&&(f?(o=o.add(f),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{na:o,sa:r,zi:a,mutatedKeys:s}}oa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.na;this.na=e.na,this.mutatedKeys=e.mutatedKeys;const s=e.sa.F_();s.sort((l,c)=>function(h,f){const v=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return v(h)-v(f)}(l.type,c.type)||this.ta(l.doc,c.doc)),this._a(r);const o=n?this.aa():[],a=this.ea.size===0&&this.current?1:0,u=a!==this.X_;return this.X_=a,s.length!==0||u?{snapshot:new va(this.query,e.na,i,s,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ua:o}:{ua:o}}O_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({na:this.na,sa:new WT,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ua:[]}}ca(e){return!this.Z_.has(e)&&!!this.na.has(e)&&!this.na.get(e).hasLocalMutations}_a(e){e&&(e.addedDocuments.forEach(n=>this.Z_=this.Z_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Z_=this.Z_.delete(n)),this.current=e.current)}aa(){if(!this.current)return[];const e=this.ea;this.ea=te(),this.na.forEach(r=>{this.ca(r.key)&&(this.ea=this.ea.add(r.key))});const n=[];return e.forEach(r=>{this.ea.has(r)||n.push(new hb(r))}),this.ea.forEach(r=>{e.has(r)||n.push(new db(r))}),n}la(e){this.Z_=e.ss,this.ea=te();const n=this.ia(e.documents);return this.applyChanges(n,!0)}ha(){return va.fromInitialDocuments(this.query,this.na,this.mutatedKeys,this.X_===0,this.hasCachedResults)}}class TB{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class SB{constructor(e){this.key=e,this.Pa=!1}}class AB{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ia={},this.Ta=new es(a=>ok(a),vc),this.Ea=new Map,this.da=new Set,this.Aa=new Ie(M.comparator),this.Ra=new Map,this.Va=new xw,this.ma={},this.fa=new Map,this.ga=Qs.On(),this.onlineState="Unknown",this.pa=void 0}get isPrimaryClient(){return this.pa===!0}}async function RB(t,e){const n=Qw(t);let r,i;const s=n.Ta.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ha();else{const o=await ga(n.localStore,hn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Gw(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&gp(n.remoteStore,o)}return i}async function Gw(t,e,n,r,i){t.ya=(d,h,f)=>async function(y,w,m,p){let g=w.view.ia(m);g.zi&&(g=await jh(y.localStore,w.query,!1).then(({documents:S})=>w.view.ia(S,g)));const _=p&&p.targetChanges.get(w.targetId),I=w.view.applyChanges(g,y.isPrimaryClient,_);return Hy(y,w.targetId,I.ua),I.snapshot}(t,d,h,f);const s=await jh(t.localStore,e,!0),o=new fb(e,s.ss),a=o.ia(s.documents),u=Ic.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);Hy(t,n,l.ua);const c=new TB(e,n,o);return t.Ta.set(e,c),t.Ea.has(n)?t.Ea.get(n).push(e):t.Ea.set(n,[e]),l.snapshot}async function PB(t,e){const n=$(t),r=n.Ta.get(e),i=n.Ea.get(r.targetId);if(i.length>1)return n.Ea.set(r.targetId,i.filter(s=>!vc(s,e))),void n.Ta.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ya(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Bl(n.remoteStore,r.targetId),_a(n,r.targetId)}).catch(Ji)):(_a(n,r.targetId),await ya(n.localStore,r.targetId,!0))}async function CB(t,e,n){const r=Yw(t);try{const i=await function(o,a){const u=$(o),l=Ne.now(),c=a.reduce((f,v)=>f.add(v.key),te());let d,h;return u.persistence.runTransaction("Locally write mutations","readwrite",f=>{let v=on(),y=te();return u.Xi.getEntries(f,c).next(w=>{v=w,v.forEach((m,p)=>{p.isValidDocument()||(y=y.add(m))})}).next(()=>u.localDocuments.getOverlayedDocuments(f,v)).next(w=>{d=w;const m=[];for(const p of a){const g=rj(p,d.get(p.key).overlayedDocument);g!=null&&m.push(new Yr(p.key,g,XC(g.value.mapValue),xe.exists(!0)))}return u.mutationQueue.addMutationBatch(f,l,m,a)}).next(w=>{h=w;const m=w.applyToLocalDocumentSet(d,y);return u.documentOverlayCache.saveOverlays(f,w.batchId,m)})}).then(()=>({batchId:h.batchId,changes:ck(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let l=o.ma[o.currentUser.toKey()];l||(l=new Ie(ee)),l=l.insert(a,u),o.ma[o.currentUser.toKey()]=l}(r,i.batchId,n),await Xr(r,i.changes),await qa(r.remoteStore)}catch(i){const s=Wa(i,"Failed to persist write");n.reject(s)}}async function pb(t,e){const n=$(t);try{const r=await Qj(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ra.get(s);o&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Pa=!0:i.modifiedDocuments.size>0?W(o.Pa):i.removedDocuments.size>0&&(W(o.Pa),o.Pa=!1))}),await Xr(n,r,e)}catch(r){await Ji(r)}}function HT(t,e,n){const r=$(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ta.forEach((s,o)=>{const a=o.view.O_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=$(o);u.onlineState=a;let l=!1;u.queries.forEach((c,d)=>{for(const h of d.listeners)h.O_(a)&&(l=!0)}),l&&zw(u)}(r.eventManager,e),i.length&&r.Ia.n_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kB(t,e,n){const r=$(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ra.get(e),s=i&&i.key;if(s){let o=new Ie(M.comparator);o=o.insert(s,Re.newNoDocument(s,G.min()));const a=te().add(s),u=new Ec(G.min(),new Map,new Ie(ee),o,a);await pb(r,u),r.Aa=r.Aa.remove(s),r.Ra.delete(e),Hw(r)}else await ya(r.localStore,e,!1).then(()=>_a(r,e,n)).catch(Ji)}async function bB(t,e){const n=$(t),r=e.batch.batchId;try{const i=await Hj(n.localStore,e);Kw(n,r,null),Ww(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xr(n,i)}catch(i){await Ji(i)}}async function xB(t,e,n){const r=$(t);try{const i=await function(o,a){const u=$(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return u.mutationQueue.lookupMutationBatch(l,a).next(d=>(W(d!==null),c=d.keys(),u.mutationQueue.removeMutationBatch(l,d))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,c,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>u.localDocuments.getDocuments(l,c))})}(r.localStore,e);Kw(r,e,n),Ww(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xr(r,i)}catch(i){await Ji(i)}}async function NB(t,e){const n=$(t);ts(n.remoteStore)||N("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=$(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(n.localStore);if(r===-1)return void e.resolve();const i=n.fa.get(r)||[];i.push(e),n.fa.set(r,i)}catch(r){const i=Wa(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Ww(t,e){(t.fa.get(e)||[]).forEach(n=>{n.resolve()}),t.fa.delete(e)}function Kw(t,e,n){const r=$(t);let i=r.ma[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ma[r.currentUser.toKey()]=i}}function _a(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ea.get(e))t.Ta.delete(r),n&&t.Ia.wa(r,n);t.Ea.delete(e),t.isPrimaryClient&&t.Va.Ar(e).forEach(r=>{t.Va.containsKey(r)||mb(t,r)})}function mb(t,e){t.da.delete(e.path.canonicalString());const n=t.Aa.get(e);n!==null&&(Bl(t.remoteStore,n),t.Aa=t.Aa.remove(e),t.Ra.delete(n),Hw(t))}function Hy(t,e,n){for(const r of n)r instanceof db?(t.Va.addReference(r.key,e),DB(t,r)):r instanceof hb?(N("SyncEngine","Document no longer in limbo: "+r.key),t.Va.removeReference(r.key,e),t.Va.containsKey(r.key)||mb(t,r.key)):j()}function DB(t,e){const n=e.key,r=n.path.canonicalString();t.Aa.get(n)||t.da.has(r)||(N("SyncEngine","New document in limbo: "+n),t.da.add(r),Hw(t))}function Hw(t){for(;t.da.size>0&&t.Aa.size<t.maxConcurrentLimboResolutions;){const e=t.da.values().next().value;t.da.delete(e);const n=new M(ue.fromString(e)),r=t.ga.next();t.Ra.set(r,new SB(n)),t.Aa=t.Aa.insert(n,r),gp(t.remoteStore,new Dr(hn(Ua(n.path)),r,"TargetPurposeLimboResolution",rn.ae))}}async function Xr(t,e,n){const r=$(t),i=[],s=[],o=[];r.Ta.isEmpty()||(r.Ta.forEach((a,u)=>{o.push(r.ya(u,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=Ow.qi(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.Ia.n_(i),await async function(u,l){const c=$(u);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>A.forEach(l,h=>A.forEach(h.Li,f=>c.persistence.referenceDelegate.addReference(d,h.targetId,f)).next(()=>A.forEach(h.ki,f=>c.persistence.referenceDelegate.removeReference(d,h.targetId,f)))))}catch(d){if(!Zi(d))throw d;N("LocalStore","Failed to update sequence numbers: "+d)}for(const d of l){const h=d.targetId;if(!d.fromCache){const f=c.Ji.get(h),v=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(v);c.Ji=c.Ji.insert(h,y)}}}(r.localStore,s))}async function OB(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await Yk(n.localStore,e);n.currentUser=e,function(s,o){s.fa.forEach(a=>{a.forEach(u=>{u.reject(new x(R.CANCELLED,o))})}),s.fa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xr(n,r.ts)}}function VB(t,e){const n=$(t),r=n.Ra.get(e);if(r&&r.Pa)return te().add(r.key);{let i=te();const s=n.Ea.get(e);if(!s)return i;for(const o of s){const a=n.Ta.get(o);i=i.unionWith(a.view.ra)}return i}}async function LB(t,e){const n=$(t),r=await jh(n.localStore,e.query,!0),i=e.view.la(r);return n.isPrimaryClient&&Hy(n,e.targetId,i.ua),i}async function MB(t,e){const n=$(t);return eb(n.localStore,e).then(r=>Xr(n,r))}async function FB(t,e,n,r){const i=$(t),s=await function(a,u){const l=$(a),c=$(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",d=>c.Dn(d,u).next(h=>h?l.localDocuments.getDocuments(d,h):A.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await qa(i.remoteStore):n==="acknowledged"||n==="rejected"?(Kw(i,e,r||null),Ww(i,e),function(a,u){$($(a).mutationQueue).Cn(u)}(i.localStore,e)):j(),await Xr(i,s)):N("SyncEngine","Cannot apply mutation batch with id: "+e)}async function $B(t,e){const n=$(t);if(Qw(n),Yw(n),e===!0&&n.pa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await QT(n,r.toArray());n.pa=!0,await Ky(n.remoteStore,!0);for(const s of i)gp(n.remoteStore,s)}else if(e===!1&&n.pa!==!1){const r=[];let i=Promise.resolve();n.Ea.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(_a(n,o),ya(n.localStore,o,!0))),Bl(n.remoteStore,o)}),await i,await QT(n,r),function(o){const a=$(o);a.Ra.forEach((u,l)=>{Bl(a.remoteStore,l)}),a.Va.Rr(),a.Ra=new Map,a.Aa=new Ie(M.comparator)}(n),n.pa=!1,await Ky(n.remoteStore,!1)}}async function QT(t,e,n){const r=$(t),i=[],s=[];for(const o of e){let a;const u=r.Ea.get(o);if(u&&u.length!==0){a=await ga(r.localStore,hn(u[0]));for(const l of u){const c=r.Ta.get(l),d=await LB(r,c);d.snapshot&&s.push(d.snapshot)}}else{const l=await Zk(r.localStore,o);a=await ga(r.localStore,l),await Gw(r,gb(l),o,!1,a.resumeToken)}i.push(a)}return r.Ia.n_(s),i}function gb(t){return sk(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function UB(t){return function(n){return $($(n).persistence).Ni()}($(t).localStore)}async function jB(t,e,n,r){const i=$(t);if(i.pa)return void N("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ea.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await eb(i.localStore,ak(s[0])),a=Ec.createSynthesizedRemoteEventForCurrentChange(e,n==="current",ut.EMPTY_BYTE_STRING);await Xr(i,o,a);break}case"rejected":await ya(i.localStore,e,!0),_a(i,e,r);break;default:j()}}async function BB(t,e,n){const r=Qw(t);if(r.pa){for(const i of e){if(r.Ea.has(i)){N("SyncEngine","Adding an already active target "+i);continue}const s=await Zk(r.localStore,i),o=await ga(r.localStore,s);await Gw(r,gb(s),o.targetId,!1,o.resumeToken),gp(r.remoteStore,o)}for(const i of n)r.Ea.has(i)&&await ya(r.localStore,i,!1).then(()=>{Bl(r.remoteStore,i),_a(r,i)}).catch(Ji)}}function Qw(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VB.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kB.bind(null,e),e.Ia.n_=_B.bind(null,e.eventManager),e.Ia.wa=wB.bind(null,e.eventManager),e}function Yw(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bB.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xB.bind(null,e),e}function zB(t,e,n){const r=$(t);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(f,v){const y=$(f),w=Je(v.createTime);return y.persistence.runTransaction("hasNewerBundle","readonly",m=>y.Qr.getBundleMetadata(m,v.id)).then(m=>!!m&&m.createTime.compareTo(w)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(cb(u));const l=new IB(u,s.localStore,o.serializer);let c=await o.Sa();for(;c;){const h=await l.j_(c);h&&a._updateProgress(h),c=await o.Sa()}const d=await l.complete();return await Xr(s,d.Y_,void 0),await function(f,v){const y=$(f);return y.persistence.runTransaction("Save bundle","readwrite",w=>y.Qr.saveBundleMetadata(w,v))}(s.localStore,u),a._completeWith(d.progress),Promise.resolve(d.J_)}catch(u){return Yn("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Qy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Tc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Qk(this.persistence,new Hk,e.initialUser,this.serializer)}createPersistence(e){return new Kk(mp.zr,this.serializer)}createSharedClientState(e){return new nb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yb extends Qy{constructor(e,n,r){super(),this.ba=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ba.initialize(this,e),await Yw(this.ba.syncEngine),await qa(this.ba.remoteStore),await this.persistence.Vi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return Qk(this.persistence,new Hk,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new Nj(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new m4(n,this.persistence);return new p4(e.asyncQueue,r)}createPersistence(e){const n=Dw(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new Nw(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,rb(),Fd(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new nb}}class qB extends yb{constructor(e,n){super(e,n,!1),this.ba=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.ba.syncEngine;this.sharedClientState instanceof Hm&&(this.sharedClientState.syncEngine={Gs:FB.bind(null,n),zs:jB.bind(null,n),js:BB.bind(null,n),Ni:UB.bind(null,n),Ws:MB.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Vi(async r=>{await $B(this.ba.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=rb();if(!Hm.v(n))throw new x(R.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Dw(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Hm(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Xw{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>HT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OB.bind(null,this.syncEngine),await Ky(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vB}()}createDatastore(e){const n=Tc(e.databaseInfo.databaseId),r=function(s){return new nB(s)}(e.databaseInfo);return function(s,o,a,u){return new sB(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new aB(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>HT(this.syncEngine,n,0),function(){return qT.v()?new qT:new Zj}())}createSyncEngine(e,n){return function(i,s,o,a,u,l,c){const d=new AB(i,s,o,a,u,l);return c&&(d.pa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=$(n);N("RemoteStore","RemoteStore shutting down."),r.p_.add(5),await za(r),r.w_.shutdown(),r.S_.set("Unknown")}(this.remoteStore)}}/**
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
 */function YT(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class yp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Da(this.observer.next,e)}error(e){this.observer.error?this.Da(this.observer.error,e):Qe("Uncaught Error in snapshot listener:",e.toString())}va(){this.muted=!0}Da(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class GB{constructor(e,n){this.Ca=e,this.serializer=n,this.metadata=new mt,this.buffer=new Uint8Array,this.Fa=function(){return new TextDecoder("utf-8")}(),this.Ma().then(r=>{r&&r.G_()?this.metadata.resolve(r.W_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.W_)}`))},r=>this.metadata.reject(r))}close(){return this.Ca.cancel()}async getMetadata(){return this.metadata.promise}async Sa(){return await this.getMetadata(),this.Ma()}async Ma(){const e=await this.xa();if(e===null)return null;const n=this.Fa.decode(e),r=Number(n);isNaN(r)&&this.Oa(`length string (${n}) is not valid number`);const i=await this.Na(r);return new EB(JSON.parse(i),e.length+r)}Ba(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async xa(){for(;this.Ba()<0&&!await this.La(););if(this.buffer.length===0)return null;const e=this.Ba();e<0&&this.Oa("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Na(e){for(;this.buffer.length<e;)await this.La()&&this.Oa("Reached the end of bundle when more is expected.");const n=this.Fa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Oa(e){throw this.Ca.cancel(),new Error(`Invalid bundle format: ${e}`)}async La(){const e=await this.Ca.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class WB{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new x(R.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,s){const o=$(i),a=Ul(o.serializer)+"/documents",u={documents:s.map(h=>$l(o.serializer,h))},l=await o.po("BatchGetDocuments",a,u,s.length),c=new Map;l.forEach(h=>{const f=hj(o.serializer,h);c.set(f.key.toString(),f)});const d=[];return s.forEach(h=>{const f=c.get(h.toString());W(!!f),d.push(f)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ba(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=M.fromPath(r);this.mutations.push(new Ew(i,this.precondition(i)))}),await async function(r,i){const s=$(r),o=Ul(s.serializer)+"/documents",a={writes:i.map(u=>jl(s.serializer,u))};await s.Ro("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw j();n=G.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new x(R.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(G.min())?xe.exists(!1):xe.updateTime(n):xe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(G.min()))throw new x(R.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return xe.updateTime(n)}return xe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class KB{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.ka=r.maxAttempts,this.Qo=new Lw(this.asyncQueue,"transaction_retry")}run(){this.ka-=1,this.qa()}qa(){this.Qo.Mo(async()=>{const e=new WB(this.datastore),n=this.Qa(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ka(i)}))}).catch(r=>{this.Ka(r)})})}Qa(e){try{const n=this.updateFunction(e);return!gc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Ka(e){this.ka>0&&this.$a(e)?(this.ka-=1,this.asyncQueue.enqueueAndForget(()=>(this.qa(),Promise.resolve()))):this.deferred.reject(e)}$a(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!Ek(n)}return!1}}/**
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
 */class HB{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ht.UNAUTHENTICATED,this.clientId=LC.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{N("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(N("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wa(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $d(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Yk(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Yy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Jw(t);N("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>GT(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>GT(e.remoteStore,s)),t._onlineComponents=e}function vb(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Jw(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await $d(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!vb(n))throw n;Yn("Error using user provided cache. Falling back to memory cache: "+n),await $d(t,new Qy)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await $d(t,new Qy);return t._offlineComponents}async function vp(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await Yy(t,t._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await Yy(t,new Xw))),t._onlineComponents}function _b(t){return Jw(t).then(e=>e.persistence)}function Zw(t){return Jw(t).then(e=>e.localStore)}function wb(t){return vp(t).then(e=>e.remoteStore)}function eE(t){return vp(t).then(e=>e.syncEngine)}function QB(t){return vp(t).then(e=>e.datastore)}async function wa(t){const e=await vp(t),n=e.eventManager;return n.onListen=RB.bind(null,e.syncEngine),n.onUnlisten=PB.bind(null,e.syncEngine),n}function YB(t){return t.asyncQueue.enqueue(async()=>{const e=await _b(t),n=await wb(t);return e.setNetworkEnabled(!0),function(i){const s=$(i);return s.p_.delete(0),Sc(s)}(n)})}function XB(t){return t.asyncQueue.enqueue(async()=>{const e=await _b(t),n=await wb(t);return e.setNetworkEnabled(!1),async function(i){const s=$(i);s.p_.add(0),await za(s),s.S_.set("Offline")}(n)})}function JB(t,e){const n=new mt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(l,c){const d=$(l);return d.persistence.runTransaction("read document","readonly",h=>d.localDocuments.getDocument(h,c))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new x(R.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=Wa(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await Zw(t),e,n)),n.promise}function Eb(t,e,n={}){const r=new mt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,l){const c=new yp({next:h=>{o.enqueueAndForget(()=>Bw(s,d));const f=h.docs.has(a);!f&&h.fromCache?l.reject(new x(R.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&u&&u.source==="server"?l.reject(new x(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),d=new qw(Ua(a.path),c,{includeMetadataChanges:!0,U_:!0});return jw(s,d)}(await wa(t),t.asyncQueue,e,n,r)),r.promise}function ZB(t,e){const n=new mt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await jh(i,s,!0),u=new fb(s,a.ss),l=u.ia(a.documents),c=u.applyChanges(l,!1);o.resolve(c.snapshot)}catch(a){const u=Wa(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await Zw(t),e,n)),n.promise}function Ib(t,e,n={}){const r=new mt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,l){const c=new yp({next:h=>{o.enqueueAndForget(()=>Bw(s,d)),h.fromCache&&u.source==="server"?l.reject(new x(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),d=new qw(a,c,{includeMetadataChanges:!0,U_:!0});return jw(s,d)}(await wa(t),t.asyncQueue,e,n,r)),r.promise}function ez(t,e){const n=new yp(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){$(i).x_.add(s),s.next()}(await wa(t),n)),()=>{n.va(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){$(i).x_.delete(s)}(await wa(t),n))}}function tz(t,e,n,r){const i=function(o,a){let u;return u=typeof o=="string"?Tk().encode(o):o,function(c,d){return new GB(c,d)}(function(c,d){if(c instanceof Uint8Array)return YT(c,d);if(c instanceof ArrayBuffer)return YT(new Uint8Array(c),d);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(n,Tc(e));t.asyncQueue.enqueueAndForget(async()=>{zB(await eE(t),i,r)})}function nz(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=$(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Qr.getNamedQuery(o,i))}(await Zw(t),e))}/**
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
 */function Tb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const XT=new Map;/**
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
 */function tE(t,e,n){if(!n)throw new x(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Sb(t,e,n,r){if(e===!0&&r===!0)throw new x(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function JT(t){if(!M.isDocumentKey(t))throw new x(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ZT(t){if(M.isDocumentKey(t))throw new x(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _p(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function ce(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_p(t);throw new x(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Ab(t,e){if(e<=0)throw new x(R.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class eS{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tb((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ac{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eS({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eS(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new n4;switch(r.type){case"firstParty":return new o4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=XT.get(n);r&&(N("ComponentProvider","Removing Datastore"),XT.delete(n),r.terminate())}(this),Promise.resolve()}}function rz(t,e,n,r={}){var i;const s=(t=ce(t,Ac))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Yn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=ht.MOCK_USER;else{a=yF(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new x(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ht(l)}t._authCredentials=new r4(new VC(a,u))}}/**
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
 */let Qt=class Rb{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rb(this.firestore,e,this._query)}},Me=class Pb{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ki(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pb(this.firestore,e,this._key)}},ki=class Cb extends Qt{constructor(e,n,r){super(e,n,Ua(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new M(e))}withConverter(e){return new Cb(this.firestore,e,this._path)}};function kb(t,e,...n){if(t=X(t),tE("collection","path",e),t instanceof Ac){const r=ue.fromString(e,...n);return ZT(r),new ki(t,null,r)}{if(!(t instanceof Me||t instanceof ki))throw new x(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return ZT(r),new ki(t.firestore,null,r)}}function iz(t,e){if(t=ce(t,Ac),tE("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new x(R.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Qt(t,null,function(r){return new Qr(ue.emptyPath(),r)}(e))}function Gh(t,e,...n){if(t=X(t),arguments.length===1&&(e=LC.V()),tE("doc","path",e),t instanceof Ac){const r=ue.fromString(e,...n);return JT(r),new Me(t,null,new M(r))}{if(!(t instanceof Me||t instanceof ki))throw new x(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return JT(r),new Me(t.firestore,t instanceof ki?t.converter:null,new M(r))}}function bb(t,e){return t=X(t),e=X(e),(t instanceof Me||t instanceof ki)&&(e instanceof Me||e instanceof ki)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function xb(t,e){return t=X(t),e=X(e),t instanceof Qt&&e instanceof Qt&&t.firestore===e.firestore&&vc(t._query,e._query)&&t.converter===e.converter}/**
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
 */class sz{constructor(){this.Ua=Promise.resolve(),this.Wa=[],this.Ga=!1,this.za=[],this.ja=null,this.Ha=!1,this.Ja=!1,this.Ya=[],this.Qo=new Lw(this,"async_queue_retry"),this.Za=()=>{const n=Fd();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Qo.Oo()};const e=Fd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Za)}get isShuttingDown(){return this.Ga}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xa(),this.eu(e)}enterRestrictedMode(e){if(!this.Ga){this.Ga=!0,this.Ja=e||!1;const n=Fd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Za)}}enqueue(e){if(this.Xa(),this.Ga)return new Promise(()=>{});const n=new mt;return this.eu(()=>this.Ga&&this.Ja?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Wa.push(e),this.tu()))}async tu(){if(this.Wa.length!==0){try{await this.Wa[0](),this.Wa.shift(),this.Qo.reset()}catch(e){if(!Zi(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Wa.length>0&&this.Qo.Mo(()=>this.tu())}}eu(e){const n=this.Ua.then(()=>(this.Ha=!0,e().catch(r=>{this.ja=r,this.Ha=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Qe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ha=!1,r))));return this.Ua=n,n}enqueueAfterDelay(e,n,r){this.Xa(),this.Ya.indexOf(e)>-1&&(n=0);const i=Uw.createAndSchedule(this,e,n,r,s=>this.nu(s));return this.za.push(i),i}Xa(){this.ja&&j()}verifyOperationInProgress(){}async ru(){let e;do e=this.Ua,await e;while(e!==this.Ua)}iu(e){for(const n of this.za)if(n.timerId===e)return!0;return!1}su(e){return this.ru().then(()=>{this.za.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.za)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ru()})}ou(e){this.Ya.push(e)}nu(e){const n=this.za.indexOf(e);this.za.splice(n,1)}}function Xy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class oz{constructor(){this._progressObserver={},this._taskCompletionResolver=new mt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const az=-1;let Ge=class extends Ac{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new sz}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Nb(this),this._firestoreClient.terminate()}};function wt(t){return t._firestoreClient||Nb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Nb(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,l,c){return new L4(a,u,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Tb(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new HB(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function uz(t,e){Ob(t=ce(t,Ge));const n=wt(t);if(n._uninitializedComponentsProvider)throw new x(R.FAILED_PRECONDITION,"SDK cache is already specified.");Yn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new Xw;return Db(n,i,new yb(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function lz(t){Ob(t=ce(t,Ge));const e=wt(t);if(e._uninitializedComponentsProvider)throw new x(R.FAILED_PRECONDITION,"SDK cache is already specified.");Yn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new Xw;return Db(e,r,new qB(r,n.cacheSizeBytes))}function Db(t,e,n){const r=new mt;return t.asyncQueue.enqueue(async()=>{try{await $d(t,n),await Yy(t,e),r.resolve()}catch(i){const s=i;if(!vb(s))throw s;Yn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function cz(t){if(t._initialized&&!t._terminated)throw new x(R.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new mt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!qn.v())return Promise.resolve();const i=r+"main";await qn.delete(i)}(Dw(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function dz(t){return function(n){const r=new mt;return n.asyncQueue.enqueueAndForget(async()=>NB(await eE(n),r)),r.promise}(wt(t=ce(t,Ge)))}function hz(t){return YB(wt(t=ce(t,Ge)))}function fz(t){return XB(wt(t=ce(t,Ge)))}function pz(t,e){const n=wt(t=ce(t,Ge)),r=new oz;return tz(n,t._databaseId,e,r),r}function mz(t,e){return nz(wt(t=ce(t,Ge)),e).then(n=>n?new Qt(t,null,n.query):null)}function Ob(t){if(t._initialized||t._terminated)throw new x(R.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Er(ut.fromBase64String(e))}catch(n){throw new x(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Er(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let Bi=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let so=class{constructor(e){this._methodName=e}};/**
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
 */class wp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
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
 */const gz=/^__.*__$/;class yz{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ja(e,this.data,n,this.fieldTransforms)}}class Vb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Yr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Lb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class Ep{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this._u(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get au(){return this.settings.au}uu(e){return new Ep(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.uu({path:r,lu:!1});return i.hu(e),i}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.uu({path:r,lu:!1});return i._u(),i}Iu(e){return this.uu({path:void 0,lu:!0})}Tu(e){return Wh(e,this.settings.methodName,this.settings.Eu||!1,this.path,this.settings.du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}_u(){if(this.path)for(let e=0;e<this.path.length;e++)this.hu(this.path.get(e))}hu(e){if(e.length===0)throw this.Tu("Document fields must not be empty");if(Lb(this.au)&&gz.test(e))throw this.Tu('Document fields cannot begin and end with "__"')}}class vz{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Tc(e)}Au(e,n,r,i=!1){return new Ep({au:e,methodName:n,du:r,path:Ye.emptyPath(),lu:!1,Eu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oo(t){const e=t._freezeSettings(),n=Tc(t._databaseId);return new vz(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ip(t,e,n,r,i,s={}){const o=t.Au(s.merge||s.mergeFields?2:0,e,n,i);sE("Data must be an object, but it was:",o,r);const a=$b(r,o);let u,l;if(s.merge)u=new sn(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=Jy(e,d,n);if(!o.contains(h))throw new x(R.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);jb(c,h)||c.push(h)}u=new sn(c),l=o.fieldTransforms.filter(d=>u.covers(d.field))}else u=null,l=o.fieldTransforms;return new yz(new Rt(a),u,l)}class Rc extends so{_toFieldTransform(e){if(e.au!==2)throw e.au===1?e.Tu(`${this._methodName}() can only appear at the top level of your update data`):e.Tu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Rc}}function Mb(t,e,n){return new Ep({au:3,du:e.settings.du,methodName:t._methodName,lu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class nE extends so{_toFieldTransform(e){return new wc(e.path,new fa)}isEqual(e){return e instanceof nE}}class _z extends so{constructor(e,n){super(e),this.Ru=n}_toFieldTransform(e){const n=Mb(this,e,!0),r=this.Ru.map(s=>ao(s,n)),i=new Gs(r);return new wc(e.path,i)}isEqual(e){return this===e}}class wz extends so{constructor(e,n){super(e),this.Ru=n}_toFieldTransform(e){const n=Mb(this,e,!0),r=this.Ru.map(s=>ao(s,n)),i=new Ws(r);return new wc(e.path,i)}isEqual(e){return this===e}}class Ez extends so{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=new pa(e.serializer,pk(e.serializer,this.Vu));return new wc(e.path,n)}isEqual(e){return this===e}}function rE(t,e,n,r){const i=t.Au(1,e,n);sE("Data must be an object, but it was:",i,r);const s=[],o=Rt.empty();io(r,(u,l)=>{const c=oE(e,u,n);l=X(l);const d=i.Pu(c);if(l instanceof Rc)s.push(c);else{const h=ao(l,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new sn(s);return new Vb(o,a,i.fieldTransforms)}function iE(t,e,n,r,i,s){const o=t.Au(1,e,n),a=[Jy(e,r,n)],u=[i];if(s.length%2!=0)throw new x(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Jy(e,s[h])),u.push(s[h+1]);const l=[],c=Rt.empty();for(let h=a.length-1;h>=0;--h)if(!jb(l,a[h])){const f=a[h];let v=u[h];v=X(v);const y=o.Pu(f);if(v instanceof Rc)l.push(f);else{const w=ao(v,y);w!=null&&(l.push(f),c.set(f,w))}}const d=new sn(l);return new Vb(c,d,o.fieldTransforms)}function Fb(t,e,n,r=!1){return ao(n,t.Au(r?4:3,e))}function ao(t,e){if(Ub(t=X(t)))return sE("Unsupported field value:",e,t),$b(t,e);if(t instanceof so)return function(r,i){if(!Lb(i.au))throw i.Tu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Tu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.lu&&e.au!==4)throw e.Tu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=ao(a,i.Iu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=X(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ne.fromDate(r);return{timestampValue:ma(i.serializer,s)}}if(r instanceof Ne){const s=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ma(i.serializer,s)}}if(r instanceof wp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Er)return{bytesValue:Rk(i.serializer,r._byteString)};if(r instanceof Me){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Tu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Pw(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Tu(`Unsupported field value: ${_p(r)}`)}(t,e)}function $b(t,e){const n={};return HC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):io(t,(r,i)=>{const s=ao(i,e.cu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Ub(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof wp||t instanceof Er||t instanceof Me||t instanceof so)}function sE(t,e,n){if(!Ub(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=_p(n);throw r==="an object"?e.Tu(t+" a custom object"):e.Tu(t+" "+r)}}function Jy(t,e,n){if((e=X(e))instanceof Bi)return e._internalPath;if(typeof e=="string")return oE(t,e);throw Wh("Field path arguments must be of type string or ",t,!1,void 0,n)}const Iz=new RegExp("[~\\*/\\[\\]]");function oE(t,e,n){if(e.search(Iz)>=0)throw Wh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bi(...e.split("."))._internalPath}catch{throw Wh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new x(R.INVALID_ARGUMENT,a+t+u)}function jb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class zl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Tz(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Tz extends zl{data(){return super.data()}}function Tp(t,e){return typeof e=="string"?oE(t,e):e instanceof Bi?e._internalPath:e._delegate._internalPath}/**
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
 */function Bb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class aE{}class Pc extends aE{}function ri(t,e,...n){let r=[];e instanceof aE&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof uE).length,a=s.filter(u=>u instanceof Sp).length;if(o>1||o>0&&a>0)throw new x(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Sp extends Pc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Sp(e,n,r)}_apply(e){const n=this._parse(e);return qb(e._query,n),new Qt(e.firestore,e.converter,Fy(e._query,n))}_parse(e){const n=oo(e.firestore);return function(s,o,a,u,l,c,d){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new x(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){nS(d,c);const f=[];for(const v of d)f.push(tS(u,s,v));h={arrayValue:{values:f}}}else h=tS(u,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||nS(d,c),h=Fb(a,o,d,c==="in"||c==="not-in");return ie.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Sz(t,e,n){const r=e,i=Tp("where",t);return Sp._create(i,r,n)}class uE extends aE{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new uE(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:fe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)qb(o,u),o=Fy(o,u)}(e._query,n),new Qt(e.firestore,e.converter,Fy(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lE extends Pc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new lE(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new x(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new x(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Ho(s,o);return function(l,c){if(vw(l)===null){const d=cp(l);d!==null&&Gb(l,d,c.field)}}(i,a),a}(e._query,this._field,this._direction);return new Qt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Qr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Az(t,e="asc"){const n=e,r=Tp("orderBy",t);return lE._create(r,n)}class Ap extends Pc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Ap(e,n,r)}_apply(e){return new Qt(e.firestore,e.converter,Mh(e._query,this._limit,this._limitType))}}function Rz(t){return Ab("limit",t),Ap._create("limit",t,"F")}function Pz(t){return Ab("limitToLast",t),Ap._create("limitToLast",t,"L")}class Rp extends Pc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Rp(e,n,r)}_apply(e){const n=zb(e,this.type,this._docOrFields,this._inclusive);return new Qt(e.firestore,e.converter,function(i,s){return new Qr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function Cz(...t){return Rp._create("startAt",t,!0)}function kz(...t){return Rp._create("startAfter",t,!1)}class Pp extends Pc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Pp(e,n,r)}_apply(e){const n=zb(e,this.type,this._docOrFields,this._inclusive);return new Qt(e.firestore,e.converter,function(i,s){return new Qr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function bz(...t){return Pp._create("endBefore",t,!1)}function xz(...t){return Pp._create("endAt",t,!0)}function zb(t,e,n,r){if(n[0]=X(n[0]),n[0]instanceof zl)return function(s,o,a,u,l){if(!u)throw new x(R.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const d of ks(s))if(d.field.isKeyField())c.push(zs(o,u.key));else{const h=u.data.field(d.field);if(lp(h))throw new x(R.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=d.field.canonicalString();throw new x(R.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}c.push(h)}return new Ui(c,l)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=oo(t.firestore);return function(o,a,u,l,c,d){const h=o.explicitOrderBy;if(c.length>h.length)throw new x(R.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let v=0;v<c.length;v++){const y=c[v];if(h[v].field.isKeyField()){if(typeof y!="string")throw new x(R.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof y}`);if(!_w(o)&&y.indexOf("/")!==-1)throw new x(R.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${y}' contains a slash.`);const w=o.path.child(ue.fromString(y));if(!M.isDocumentKey(w))throw new x(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const m=new M(w);f.push(zs(a,m))}else{const w=Fb(u,l,y);f.push(w)}}return new Ui(f,d)}(t._query,t.firestore._databaseId,i,e,n,r)}}function tS(t,e,n){if(typeof(n=X(n))=="string"){if(n==="")throw new x(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_w(e)&&n.indexOf("/")!==-1)throw new x(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!M.isDocumentKey(r))throw new x(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zs(t,new M(r))}if(n instanceof Me)return zs(t,n._key);throw new x(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_p(n)}.`)}function nS(t,e){if(!Array.isArray(t)||t.length===0)throw new x(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qb(t,e){if(e.isInequality()){const r=cp(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new x(R.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=vw(t);s!==null&&Gb(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Gb(t,e,n){if(!n.isEqual(e))throw new x(R.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class cE{convertValue(e,n="none"){switch(Bs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw j()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return io(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new wp(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gw(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ll(e));default:return null}}convertTimestamp(e){const n=Li(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);W(Lk(r));const i=new Fi(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||Qe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Cp(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Nz extends cE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Er(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}/**
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
 */class Is{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let qr=class extends zl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ju(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Tp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},Ju=class extends qr{data(e={}){return super.data(e)}},zi=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Is(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ju(this._firestore,this._userDataWriter,r.key,r,new Is(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Ju(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Is(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Ju(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Is(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:Dz(a.type),doc:u,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function Dz(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}function Wb(t,e){return t instanceof qr&&e instanceof qr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof zi&&e instanceof zi&&t._firestore===e._firestore&&xb(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function Oz(t){t=ce(t,Me);const e=ce(t.firestore,Ge);return Eb(wt(e),t._key).then(n=>dE(e,t,n))}class uo extends cE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Er(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}function Vz(t){t=ce(t,Me);const e=ce(t.firestore,Ge),n=wt(e),r=new uo(e);return JB(n,t._key).then(i=>new qr(e,r,t._key,i,new Is(i!==null&&i.hasLocalMutations,!0),t.converter))}function Lz(t){t=ce(t,Me);const e=ce(t.firestore,Ge);return Eb(wt(e),t._key,{source:"server"}).then(n=>dE(e,t,n))}function Mz(t){t=ce(t,Qt);const e=ce(t.firestore,Ge),n=wt(e),r=new uo(e);return Bb(t._query),Ib(n,t._query).then(i=>new zi(e,r,t,i))}function Fz(t){t=ce(t,Qt);const e=ce(t.firestore,Ge),n=wt(e),r=new uo(e);return ZB(n,t._query).then(i=>new zi(e,r,t,i))}function $z(t){t=ce(t,Qt);const e=ce(t.firestore,Ge),n=wt(e),r=new uo(e);return Ib(n,t._query,{source:"server"}).then(i=>new zi(e,r,t,i))}function rS(t,e,n){t=ce(t,Me);const r=ce(t.firestore,Ge),i=Cp(t.converter,e,n);return Cc(r,[Ip(oo(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,xe.none())])}function iS(t,e,n,...r){t=ce(t,Me);const i=ce(t.firestore,Ge),s=oo(i);let o;return o=typeof(e=X(e))=="string"||e instanceof Bi?iE(s,"updateDoc",t._key,e,n,r):rE(s,"updateDoc",t._key,e),Cc(i,[o.toMutation(t._key,xe.exists(!0))])}function Uz(t){return Cc(ce(t.firestore,Ge),[new Ba(t._key,xe.none())])}function jz(t,e){const n=ce(t.firestore,Ge),r=Gh(t),i=Cp(t.converter,e);return Cc(n,[Ip(oo(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,xe.exists(!1))]).then(()=>r)}function Kb(t,...e){var n,r,i;t=X(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Xy(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Xy(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let u,l,c;if(t instanceof Me)l=ce(t.firestore,Ge),c=Ua(t._key.path),u={next:d=>{e[o]&&e[o](dE(l,t,d))},error:e[o+1],complete:e[o+2]};else{const d=ce(t,Qt);l=ce(d.firestore,Ge),c=d._query;const h=new uo(l);u={next:f=>{e[o]&&e[o](new zi(l,h,d,f))},error:e[o+1],complete:e[o+2]},Bb(t._query)}return function(h,f,v,y){const w=new yp(y),m=new qw(f,w,v);return h.asyncQueue.enqueueAndForget(async()=>jw(await wa(h),m)),()=>{w.va(),h.asyncQueue.enqueueAndForget(async()=>Bw(await wa(h),m))}}(wt(l),c,a,u)}function Bz(t,e){return ez(wt(t=ce(t,Ge)),Xy(e)?e:{next:e})}function Cc(t,e){return function(r,i){const s=new mt;return r.asyncQueue.enqueueAndForget(async()=>CB(await eE(r),i,s)),s.promise}(wt(t),e)}function dE(t,e,n){const r=n.docs.get(e._key),i=new uo(t);return new qr(t,i,e._key,r,new Is(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const zz={maxAttempts:5};/**
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
 */let qz=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=oo(e)}set(e,n,r){this._verifyNotCommitted();const i=di(e,this._firestore),s=Cp(i.converter,n,r),o=Ip(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,xe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=di(e,this._firestore);let o;return o=typeof(n=X(n))=="string"||n instanceof Bi?iE(this._dataReader,"WriteBatch.update",s._key,n,r,i):rE(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,xe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=di(e,this._firestore);return this._mutations=this._mutations.concat(new Ba(n._key,xe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(R.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function di(t,e){if((t=X(t)).firestore!==e)throw new x(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */let Gz=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=oo(n)}get(n){const r=di(n,this._firestore),i=new Nz(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return j();const o=s[0];if(o.isFoundDocument())return new zl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new zl(this._firestore,i,r._key,null,r.converter);throw j()})}set(n,r,i){const s=di(n,this._firestore),o=Cp(s.converter,r,i),a=Ip(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=di(n,this._firestore);let a;return a=typeof(r=X(r))=="string"||r instanceof Bi?iE(this._dataReader,"Transaction.update",o._key,r,i,s):rE(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=di(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=di(e,this._firestore),r=new uo(this._firestore);return super.get(e).then(i=>new qr(this._firestore,r,n._key,i._document,new Is(!1,!1),n.converter))}};function Wz(t,e,n){t=ce(t,Ge);const r=Object.assign(Object.assign({},zz),n);return function(s){if(s.maxAttempts<1)throw new x(R.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new mt;return s.asyncQueue.enqueueAndForget(async()=>{const l=await QB(s);new KB(s.asyncQueue,l,a,o,u).run()}),u.promise}(wt(t),i=>e(new Gz(t,i)),r)}/**
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
 */function Kz(){return new Rc("deleteField")}function Hz(){return new nE("serverTimestamp")}function Qz(...t){return new _z("arrayUnion",t)}function Yz(...t){return new wz("arrayRemove",t)}function Xz(t){return new Ez("increment",t)}(function(e,n=!0){(function(i){$a=i})(Qi),Oi(new _r("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ge(new i4(r.getProvider("auth-internal")),new u4(r.getProvider("app-check-internal")),function(l,c){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new x(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fi(l.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),yr(Z0,"4.0.0",e),yr(Z0,"4.0.0","esm2017")})();const Jz="@firebase/firestore-compat",Zz="0.3.13";/**
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
 */function hE(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new x("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function sS(){if(typeof Uint8Array>"u")throw new x("unimplemented","Uint8Arrays are not available in this environment.")}function oS(){if(!O4())throw new x("unimplemented","Blobs are unavailable in Firestore in this environment.")}class ql{constructor(e){this._delegate=e}static fromBase64String(e){return oS(),new ql(Er.fromBase64String(e))}static fromUint8Array(e){return sS(),new ql(Er.fromUint8Array(e))}toBase64(){return oS(),this._delegate.toBase64()}toUint8Array(){return sS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Zy(t){return e3(t,["next","error","complete"])}function e3(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class t3{enableIndexedDbPersistence(e,n){return uz(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return lz(e._delegate)}clearIndexedDbPersistence(e){return cz(e._delegate)}}class Hb{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Fi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Yn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){rz(this._delegate,e,n,r)}enableNetwork(){return hz(this._delegate)}disableNetwork(){return fz(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Sb("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return dz(this._delegate)}onSnapshotsInSync(e){return Bz(this._delegate,e)}get app(){if(!this._appCompat)throw new x("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ea(this,kb(this._delegate,e))}catch(n){throw zt(n,"collection()","Firestore.collection()")}}doc(e){try{return new xn(this,Gh(this._delegate,e))}catch(n){throw zt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Bt(this,iz(this._delegate,e))}catch(n){throw zt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Wz(this._delegate,n=>e(new Qb(this,n)))}batch(){return wt(this._delegate),new Yb(new qz(this._delegate,e=>Cc(this._delegate,e)))}loadBundle(e){return pz(this._delegate,e)}namedQuery(e){return mz(this._delegate,e).then(n=>n?new Bt(this,n):null)}}class kp extends cE{constructor(e){super(),this.firestore=e}convertBytes(e){return new ql(new Er(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return xn.forKey(n,this.firestore,null)}}function n3(t){e4(t)}class Qb{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new kp(e)}get(e){const n=Ts(e);return this._delegate.get(n).then(r=>new Gl(this._firestore,new qr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Ts(e);return r?(hE("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ts(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ts(e);return this._delegate.delete(n),this}}class Yb{constructor(e){this._delegate=e}set(e,n,r){const i=Ts(e);return r?(hE("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ts(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ts(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Ys{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Ju(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Wl(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Ys.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Ys(e,new kp(e),n),i.set(n,s)),s}}Ys.INSTANCES=new WeakMap;class xn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new kp(e)}static forPath(e,n,r){if(e.length%2!==0)throw new x("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new xn(n,new Me(n._delegate,r,new M(e)))}static forKey(e,n,r){return new xn(n,new Me(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Ea(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ea(this.firestore,kb(this._delegate,e))}catch(n){throw zt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=X(e),e instanceof Me?bb(this._delegate,e):!1}set(e,n){n=hE("DocumentReference.set",n);try{return n?rS(this._delegate,e,n):rS(this._delegate,e)}catch(r){throw zt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?iS(this._delegate,e):iS(this._delegate,e,n,...r)}catch(i){throw zt(i,"updateDoc()","DocumentReference.update()")}}delete(){return Uz(this._delegate)}onSnapshot(...e){const n=Xb(e),r=Jb(e,i=>new Gl(this.firestore,new qr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Kb(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Vz(this._delegate):(e==null?void 0:e.source)==="server"?n=Lz(this._delegate):n=Oz(this._delegate),n.then(r=>new Gl(this.firestore,new qr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new xn(this.firestore,e?this._delegate.withConverter(Ys.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function zt(t,e,n){return t.message=t.message.replace(e,n),t}function Xb(t){for(const e of t)if(typeof e=="object"&&!Zy(e))return e;return{}}function Jb(t,e){var n,r;let i;return Zy(t[0])?i=t[0]:Zy(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Gl{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new xn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return Wb(this._delegate,e._delegate)}}class Wl extends Gl{data(e){const n=this._delegate.data(e);return t4(n!==void 0),n}}class Bt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new kp(e)}where(e,n,r){try{return new Bt(this.firestore,ri(this._delegate,Sz(e,n,r)))}catch(i){throw zt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Bt(this.firestore,ri(this._delegate,Az(e,n)))}catch(r){throw zt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Bt(this.firestore,ri(this._delegate,Rz(e)))}catch(n){throw zt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Bt(this.firestore,ri(this._delegate,Pz(e)))}catch(n){throw zt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Bt(this.firestore,ri(this._delegate,Cz(...e)))}catch(n){throw zt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Bt(this.firestore,ri(this._delegate,kz(...e)))}catch(n){throw zt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Bt(this.firestore,ri(this._delegate,bz(...e)))}catch(n){throw zt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Bt(this.firestore,ri(this._delegate,xz(...e)))}catch(n){throw zt(n,"endAt()","Query.endAt()")}}isEqual(e){return xb(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Fz(this._delegate):(e==null?void 0:e.source)==="server"?n=$z(this._delegate):n=Mz(this._delegate),n.then(r=>new ev(this.firestore,new zi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=Xb(e),r=Jb(e,i=>new ev(this.firestore,new zi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Kb(this._delegate,n,r)}withConverter(e){return new Bt(this.firestore,e?this._delegate.withConverter(Ys.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class r3{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Wl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ev{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Bt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Wl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new r3(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Wl(this._firestore,r))})}isEqual(e){return Wb(this._delegate,e._delegate)}}class Ea extends Bt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new xn(this.firestore,e):null}doc(e){try{return e===void 0?new xn(this.firestore,Gh(this._delegate)):new xn(this.firestore,Gh(this._delegate,e))}catch(n){throw zt(n,"doc()","CollectionReference.doc()")}}add(e){return jz(this._delegate,e).then(n=>new xn(this.firestore,n))}isEqual(e){return bb(this._delegate,e._delegate)}withConverter(e){return new Ea(this.firestore,e?this._delegate.withConverter(Ys.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ts(t){return ce(t,Me)}/**
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
 */class fE{constructor(...e){this._delegate=new Bi(...e)}static documentId(){return new fE(Ye.keyField().canonicalString())}isEqual(e){return e=X(e),e instanceof Bi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class ms{constructor(e){this._delegate=e}static serverTimestamp(){const e=Hz();return e._methodName="FieldValue.serverTimestamp",new ms(e)}static delete(){const e=Kz();return e._methodName="FieldValue.delete",new ms(e)}static arrayUnion(...e){const n=Qz(...e);return n._methodName="FieldValue.arrayUnion",new ms(n)}static arrayRemove(...e){const n=Yz(...e);return n._methodName="FieldValue.arrayRemove",new ms(n)}static increment(e){const n=Xz(e);return n._methodName="FieldValue.increment",new ms(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const i3={Firestore:Hb,GeoPoint:wp,Timestamp:Ne,Blob:ql,Transaction:Qb,WriteBatch:Yb,DocumentReference:xn,DocumentSnapshot:Gl,Query:Bt,QueryDocumentSnapshot:Wl,QuerySnapshot:ev,CollectionReference:Ea,FieldPath:fE,FieldValue:ms,setLogLevel:n3,CACHE_SIZE_UNLIMITED:az};function s3(t,e){t.INTERNAL.registerComponent(new _r("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},i3)))}/**
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
 */function o3(t){s3(t,(e,n)=>new Hb(e,n,new t3)),t.registerVersion(Jz,Zz)}o3(Hr);var an=function(){return an=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},an.apply(this,arguments)};function pE(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Kh(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}const vu={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},yo={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function a3(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend."}}function Zb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u3=a3,l3=Zb,ex=new no("auth","Firebase",Zb());/**
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
 */const Hh=new Wf("@firebase/auth");function c3(t,...e){Hh.logLevel<=ae.WARN&&Hh.warn(`Auth (${Qi}): ${t}`,...e)}function Ud(t,...e){Hh.logLevel<=ae.ERROR&&Hh.error(`Auth (${Qi}): ${t}`,...e)}/**
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
 */function xt(t,...e){throw mE(t,...e)}function kt(t,...e){return mE(t,...e)}function tx(t,e,n){const r=Object.assign(Object.assign({},l3()),{[e]:n});return new no("auth","Firebase",r).create(e,{appName:t.name})}function Ka(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&xt(t,"argument-error"),tx(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mE(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ex.create(t,...e)}function V(t,e,...n){if(!t)throw mE(e,...n)}function pr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ud(e),new Error(e)}function Xn(t,e){t||pr(e)}/**
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
 */function Kl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gE(){return aS()==="http:"||aS()==="https:"}function aS(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function d3(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gE()||_P()||"connection"in navigator)?navigator.onLine:!0}function h3(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class kc{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xn(n>e,"Short delay should be less than long delay!"),this.isMobile=vF()||j_()}get(){return d3()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yE(t,e){Xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class nx{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const f3={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const p3=new kc(3e4,6e4);function it(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function lt(t,e,n,r,i={}){return rx(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=La(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),nx.fetch()(ix(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function rx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},f3),e);try{const i=new m3(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Du(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Du(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Du(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Du(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw tx(t,c,l);xt(t,c)}}catch(i){if(i instanceof Kt)throw i;xt(t,"network-request-failed",{message:String(i)})}}async function Jr(t,e,n,r,i={}){const s=await lt(t,e,n,r,i);return"mfaPendingCredential"in s&&xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ix(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?yE(t.config,i):`${t.config.apiScheme}://${i}`}class m3{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kt(this.auth,"network-request-failed")),p3.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Du(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function g3(t,e){return lt(t,"POST","/v1/accounts:delete",e)}async function y3(t,e){return lt(t,"POST","/v1/accounts:update",e)}async function v3(t,e){return lt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zu(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _3(t,e=!1){const n=X(t),r=await n.getIdToken(e),i=bp(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Zu(Ym(i.auth_time)),issuedAtTime:Zu(Ym(i.iat)),expirationTime:Zu(Ym(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ym(t){return Number(t)*1e3}function bp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ud("JWT malformed, contained fewer than 3 sections"),null;try{const i=yP(n);return i?JSON.parse(i):(Ud("Failed to decode base64 JWT payload"),null)}catch(i){return Ud("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function w3(t){const e=bp(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Gr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Kt&&E3(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function E3({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class I3{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sx{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zu(this.lastLoginAt),this.creationTime=Zu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Gr(t,v3(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?A3(s.providerUserInfo):[],a=S3(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sx(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function T3(t){const e=X(t);await Hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function S3(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function A3(t){return t.map(e=>{var{providerId:n}=e,r=pE(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function R3(t,e){const n=await rx(t,{},async()=>{const r=La({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ix(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nx.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ql{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):w3(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await R3(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ql;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ql,this.toJSON())}_performRefresh(){return pr("not implemented")}}/**
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
 */function ii(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bs{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=pE(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new I3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sx(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Gr(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _3(this,e)}reload(){return T3(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gr(this,g3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,m=(l=n.createdAt)!==null&&l!==void 0?l:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:_,isAnonymous:I,providerData:S,stsTokenManager:C}=n;V(g&&C,e,"internal-error");const L=Ql.fromJSON(this.name,C);V(typeof g=="string",e,"internal-error"),ii(d,e.name),ii(h,e.name),V(typeof _=="boolean",e,"internal-error"),V(typeof I=="boolean",e,"internal-error"),ii(f,e.name),ii(v,e.name),ii(y,e.name),ii(w,e.name),ii(m,e.name),ii(p,e.name);const J=new bs({uid:g,auth:e,email:h,emailVerified:_,displayName:d,isAnonymous:I,photoURL:v,phoneNumber:f,tenantId:y,stsTokenManager:L,createdAt:m,lastLoginAt:p});return S&&Array.isArray(S)&&(J.providerData=S.map(z=>Object.assign({},z))),w&&(J._redirectEventId=w),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ql;i.updateFromServerResponse(n);const s=new bs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Hl(s),s}}/**
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
 */const uS=new Map;function yn(t){Xn(t instanceof Function,"Expected a class definition");let e=uS.get(t);return e?(Xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uS.set(t,e),e)}/**
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
 */class ox{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ox.type="NONE";const Ia=ox;/**
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
 */function xs(t,e,n){return`firebase:${t}:${e}:${n}`}class Yo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xs(this.userKey,i.apiKey,s),this.fullPersistenceKey=xs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yo(yn(Ia),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||yn(Ia);const o=xs(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const d=bs._fromJSON(e,c);l!==s&&(a=d),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Yo(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Yo(s,e,r))}}/**
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
 */function lS(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ax(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cx(e))return"Blackberry";if(dx(e))return"Webos";if(vE(e))return"Safari";if((e.includes("chrome/")||ux(e))&&!e.includes("edge/"))return"Chrome";if(bc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ax(t=$e()){return/firefox\//i.test(t)}function vE(t=$e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ux(t=$e()){return/crios\//i.test(t)}function lx(t=$e()){return/iemobile/i.test(t)}function bc(t=$e()){return/android/i.test(t)}function cx(t=$e()){return/blackberry/i.test(t)}function dx(t=$e()){return/webos/i.test(t)}function Ha(t=$e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function P3(t=$e()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function C3(t=$e()){var e;return Ha(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function k3(){return wP()&&document.documentMode===10}function hx(t=$e()){return Ha(t)||bc(t)||dx(t)||cx(t)||/windows phone/i.test(t)||lx(t)}function b3(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function fx(t,e=[]){let n;switch(t){case"Browser":n=lS($e());break;case"Worker":n=`${lS($e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qi}/${r}`}/**
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
 */async function x3(t){return(await lt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function px(t,e){return lt(t,"GET","/v2/recaptchaConfig",it(t,e))}/**
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
 */function cS(t){return t!==void 0&&t.getResponse!==void 0}function dS(t){return t!==void 0&&t.enterprise!==void 0}class mx{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function N3(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _E(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",N3().appendChild(r)})}function gx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const D3="https://www.google.com/recaptcha/enterprise.js?render=",O3="recaptcha-enterprise",V3="NO_RECAPTCHA";class yx{constructor(e){this.type=O3,this.auth=Ze(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{px(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new mx(u);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;dS(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(V3)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&dS(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}_E(D3+a).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function qi(t,e,n,r=!1){const i=new yx(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class L3{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class M3{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hS(this),this.idTokenSubscription=new hS(this),this.beforeStateQueue=new L3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ex,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Yo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=h3()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?X(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}async initializeRecaptchaConfig(){const e=await px(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new mx(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new yx(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new no("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Yo.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&c3(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ze(t){return X(t)}class hS{constructor(e){this.auth=e,this.observer=null,this.addObserver=EP(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function F3(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $3(t,e,n){const r=Ze(t);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=vx(e),{host:o,port:a}=U3(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||j3()}function vx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function U3(t){const e=vx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fS(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:fS(o)}}}function fS(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function j3(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Qa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pr("not implemented")}_getIdTokenResponse(e){return pr("not implemented")}_linkToIdToken(e,n){return pr("not implemented")}_getReauthenticationResolver(e){return pr("not implemented")}}/**
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
 */async function _x(t,e){return lt(t,"POST","/v1/accounts:resetPassword",it(t,e))}async function wx(t,e){return lt(t,"POST","/v1/accounts:update",e)}async function B3(t,e){return lt(t,"POST","/v1/accounts:update",it(t,e))}/**
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
 */async function Xm(t,e){return Jr(t,"POST","/v1/accounts:signInWithPassword",it(t,e))}async function xp(t,e){return lt(t,"POST","/v1/accounts:sendOobCode",it(t,e))}async function z3(t,e){return xp(t,e)}async function Jm(t,e){return xp(t,e)}async function Zm(t,e){return xp(t,e)}async function q3(t,e){return xp(t,e)}/**
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
 */async function G3(t,e){return Jr(t,"POST","/v1/accounts:signInWithEmailLink",it(t,e))}async function W3(t,e){return Jr(t,"POST","/v1/accounts:signInWithEmailLink",it(t,e))}/**
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
 */class Yl extends Qa{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Yl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Yl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await qi(e,r,"signInWithPassword");return Xm(e,i)}else return Xm(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await qi(e,r,"signInWithPassword");return Xm(e,s)}else return Promise.reject(i)});case"emailLink":return G3(e,{email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return wx(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return W3(e,{idToken:n,email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Fr(t,e){return Jr(t,"POST","/v1/accounts:signInWithIdp",it(t,e))}/**
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
 */const K3="http://localhost";class Ir extends Qa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=pE(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ir(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fr(e,n)}buildRequest(){const e={requestUri:K3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=La(n)}return e}}/**
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
 */async function H3(t,e){return lt(t,"POST","/v1/accounts:sendVerificationCode",it(t,e))}async function Q3(t,e){return Jr(t,"POST","/v1/accounts:signInWithPhoneNumber",it(t,e))}async function Y3(t,e){const n=await Jr(t,"POST","/v1/accounts:signInWithPhoneNumber",it(t,e));if(n.temporaryProof)throw Du(t,"account-exists-with-different-credential",n);return n}const X3={USER_NOT_FOUND:"user-not-found"};async function J3(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Jr(t,"POST","/v1/accounts:signInWithPhoneNumber",it(t,n),X3)}/**
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
 */class Ns extends Qa{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ns({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ns({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Q3(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Y3(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return J3(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ns({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function Z3(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function e5(t){const e=Vo(Pu(t)).link,n=e?Vo(Pu(e)).deep_link_id:null,r=Vo(Pu(t)).deep_link_id;return(r?Vo(Pu(r)).link:null)||r||n||e||t}class Np{constructor(e){var n,r,i,s,o,a;const u=Vo(Pu(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,d=Z3((i=u.mode)!==null&&i!==void 0?i:null);V(l&&c&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=e5(e);try{return new Np(n)}catch{return null}}}/**
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
 */class ns{constructor(){this.providerId=ns.PROVIDER_ID}static credential(e,n){return Yl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Np.parseLink(n);return V(r,"argument-error"),Yl._fromEmailAndCode(e,r.code,r.tenantId)}}ns.PROVIDER_ID="password";ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ya extends Zr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Xo extends Ya{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return V("providerId"in n&&"signInMethod"in n,"argument-error"),Ir._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return V(e.idToken||e.accessToken,"argument-error"),Ir._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Xo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Xo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Xo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class sr extends Ya{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class or extends Ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return or.credential(n,r)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
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
 */class ar extends Ya{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
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
 */const t5="http://localhost";class Ta extends Qa{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Ta(r,s)}static _create(e,n){return new Ta(e,n)}buildRequest(){return{requestUri:t5,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const n5="saml.";class Qh extends Zr{constructor(e){V(e.startsWith(n5),"argument-error"),super(e)}static credentialFromResult(e){return Qh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Qh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Ta.fromJSON(e);return V(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Ta._create(r,n)}catch{return null}}}/**
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
 */class ur extends Ya{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.TWITTER_SIGN_IN_METHOD="twitter.com";ur.PROVIDER_ID="twitter.com";/**
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
 */async function jd(t,e){return Jr(t,"POST","/v1/accounts:signUp",it(t,e))}/**
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
 */class Ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await bs._fromIdTokenResponse(e,r,i),o=pS(r);return new Ln({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=pS(r);return new Ln({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function pS(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function r5(t){var e;const n=Ze(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ln({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await jd(n,{returnSecureToken:!0}),i=await Ln._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Yh extends Kt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Yh(e,n,r,i)}}function Ex(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yh._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function Ix(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function i5(t,e){const n=X(t);await Dp(!0,n,e);const{providerUserInfo:r}=await y3(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Ix(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function wE(t,e,n=!1){const r=await Gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ln._forOperation(t,"link",r)}async function Dp(t,e,n){await Hl(e);const r=Ix(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";V(r.has(n)===t,e.auth,i)}/**
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
 */async function Tx(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Gr(t,Ex(r,i,e,t),n);V(s.idToken,r,"internal-error");const o=bp(s.idToken);V(o,r,"internal-error");const{sub:a}=o;return V(t.uid===a,r,"user-mismatch"),Ln._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xt(r,"user-mismatch"),s}}/**
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
 */async function Sx(t,e,n=!1){const r="signIn",i=await Ex(t,r,e),s=await Ln._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Op(t,e){return Sx(Ze(t),e)}async function Ax(t,e){const n=X(t);return await Dp(!1,n,e.providerId),wE(n,e)}async function Rx(t,e){return Tx(X(t),e)}/**
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
 */async function s5(t,e){return Jr(t,"POST","/v1/accounts:signInWithCustomToken",it(t,e))}/**
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
 */async function o5(t,e){const n=Ze(t),r=await s5(n,{token:e,returnSecureToken:!0}),i=await Ln._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class xc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?EE._fromServerResponse(e,n):"totpInfo"in n?IE._fromServerResponse(e,n):xt(e,"internal-error")}}class EE extends xc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new EE(n)}}class IE extends xc{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new IE(n)}}/**
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
 */function Jo(t,e,n){var r;V(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),V(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(V(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(V(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function a5(t,e,n){var r;const i=Ze(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await qi(i,s,"getOobCode",!0);n&&Jo(i,o,n),await Jm(i,o)}else n&&Jo(i,s,n),await Jm(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await qi(i,s,"getOobCode",!0);n&&Jo(i,a,n),await Jm(i,a)}else return Promise.reject(o)})}async function u5(t,e,n){await _x(X(t),{oobCode:e,newPassword:n})}async function l5(t,e){await B3(X(t),{oobCode:e})}async function Px(t,e){const n=X(t),r=await _x(n,{oobCode:e}),i=r.requestType;switch(V(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":V(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":V(r.mfaInfo,n,"internal-error");default:V(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=xc._fromServerResponse(Ze(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function c5(t,e){const{data:n}=await Px(X(t),e);return n.email}async function d5(t,e,n){var r;const i=Ze(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await qi(i,s,"signUpPassword");o=jd(i,l)}else o=jd(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await qi(i,s,"signUpPassword");return jd(i,c)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),u=await Ln._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(u.user),u}function h5(t,e,n){return Op(X(t),ns.credential(e,n))}/**
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
 */async function f5(t,e,n){var r;const i=Ze(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,u){V(u.handleCodeInApp,i,"argument-error"),u&&Jo(i,a,u)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await qi(i,s,"getOobCode",!0);o(a,n),await Zm(i,a)}else o(s,n),await Zm(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const u=await qi(i,s,"getOobCode",!0);o(u,n),await Zm(i,u)}else return Promise.reject(a)})}function p5(t,e){const n=Np.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function m5(t,e,n){const r=X(t),i=ns.credentialWithLink(e,n||Kl());return V(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Op(r,i)}/**
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
 */async function g5(t,e){return lt(t,"POST","/v1/accounts:createAuthUri",it(t,e))}/**
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
 */async function y5(t,e){const n=gE()?Kl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await g5(X(t),r);return i||[]}async function v5(t,e){const n=X(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Jo(n.auth,i,e);const{email:s}=await z3(n.auth,i);s!==t.email&&await t.reload()}async function _5(t,e,n){const r=X(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Jo(r.auth,s,n);const{email:o}=await q3(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function w5(t,e){return lt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function E5(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=X(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Gr(r,w5(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function I5(t,e){return Cx(X(t),e,null)}function T5(t,e){return Cx(X(t),null,e)}async function Cx(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Gr(t,wx(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function S5(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=bp(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Zo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new A5(s,i);case"github.com":return new R5(s,i);case"google.com":return new P5(s,i);case"twitter.com":return new C5(s,i,t.screenName||null);case"custom":case"anonymous":return new Zo(s,null);default:return new Zo(s,r,i)}}class Zo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class kx extends Zo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class A5 extends Zo{constructor(e,n){super(e,"facebook.com",n)}}class R5 extends kx{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class P5 extends Zo{constructor(e,n){super(e,"google.com",n)}}class C5 extends kx{constructor(e,n,r){super(e,"twitter.com",n,r)}}function k5(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:S5(n)}/**
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
 */class TE{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ze(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>xc._fromServerResponse(r,a));V(i.mfaPendingCredential,r,"internal-error");const o=Ss._fromMfaPendingCredential(i.mfaPendingCredential);return new TE(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const c=await Ln._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return V(n.user,r,"internal-error"),Ln._forOperation(n.user,n.operationType,l);default:xt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function b5(t,e){var n;const r=X(t),i=e;return V(e.customData.operationType,r,"argument-error"),V((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),TE._fromError(r,i)}/**
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
 */function x5(t,e){return lt(t,"POST","/v2/accounts/mfaEnrollment:start",it(t,e))}function N5(t,e){return lt(t,"POST","/v2/accounts/mfaEnrollment:finalize",it(t,e))}function D5(t,e){return lt(t,"POST","/v2/accounts/mfaEnrollment:withdraw",it(t,e))}class SE{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>xc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new SE(e)}async getSession(){return Ss._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Gr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Gr(this.user,D5(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const eg=new WeakMap;function O5(t){const e=X(t);return eg.has(e)||eg.set(e,SE._fromUser(e)),eg.get(e)}const Xh="__sak";/**
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
 */class bx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xh,"1"),this.storage.removeItem(Xh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function V5(){const t=$e();return vE(t)||Ha(t)}const L5=1e3,M5=10;class xx extends bx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=V5()&&b3(),this.fallbackToPolling=hx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);k3()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,M5):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},L5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xx.type="LOCAL";const AE=xx;/**
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
 */class Nx extends bx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Nx.type="SESSION";const Xs=Nx;/**
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
 */function F5(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vp{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Vp(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await F5(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vp.receivers=[];/**
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
 */function Nc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $5{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Nc("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tt(){return window}function U5(t){tt().location.href=t}/**
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
 */function RE(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function j5(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function B5(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function z5(){return RE()?self:null}/**
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
 */const Dx="firebaseLocalStorageDb",q5=1,Jh="firebaseLocalStorage",Ox="fbase_key";class Dc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lp(t,e){return t.transaction([Jh],e?"readwrite":"readonly").objectStore(Jh)}function G5(){const t=indexedDB.deleteDatabase(Dx);return new Dc(t).toPromise()}function tv(){const t=indexedDB.open(Dx,q5);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jh,{keyPath:Ox})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jh)?e(r):(r.close(),await G5(),e(await tv()))})})}async function mS(t,e,n){const r=Lp(t,!0).put({[Ox]:e,value:n});return new Dc(r).toPromise()}async function W5(t,e){const n=Lp(t,!1).get(e),r=await new Dc(n).toPromise();return r===void 0?null:r.value}function gS(t,e){const n=Lp(t,!0).delete(e);return new Dc(n).toPromise()}const K5=800,H5=3;class Vx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tv(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>H5)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return RE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vp._getInstance(z5()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await j5(),!this.activeServiceWorker)return;this.sender=new $5(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||B5()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tv();return await mS(e,Xh,"1"),await gS(e,Xh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mS(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>W5(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gS(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Lp(i,!1).getAll();return new Dc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),K5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vx.type="LOCAL";const Xl=Vx;/**
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
 */function Q5(t,e){return lt(t,"POST","/v2/accounts/mfaSignIn:start",it(t,e))}function Y5(t,e){return lt(t,"POST","/v2/accounts/mfaSignIn:finalize",it(t,e))}/**
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
 */const X5=500,J5=6e4,dd=1e12;class Z5{constructor(e){this.auth=e,this.counter=dd,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new e9(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||dd;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||dd;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||dd;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class e9{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;V(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=t9(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},J5)},X5))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function t9(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const tg=gx("rcb"),n9=new kc(3e4,6e4),r9="https://www.google.com/recaptcha/api.js?";class i9{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=tt().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return V(s9(n),e,"argument-error"),this.shouldResolveImmediately(n)&&cS(tt().grecaptcha)?Promise.resolve(tt().grecaptcha):new Promise((r,i)=>{const s=tt().setTimeout(()=>{i(kt(e,"network-request-failed"))},n9.get());tt()[tg]=()=>{tt().clearTimeout(s),delete tt()[tg];const a=tt().grecaptcha;if(!a||!cS(a)){i(kt(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const d=u(l,c);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${r9}?${La({onload:tg,render:"explicit",hl:n})}`;_E(o).catch(()=>{clearTimeout(s),i(kt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=tt().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function s9(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class o9{async load(e){return new Z5(e)}clearedOneInstance(){}}/**
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
 */const Lx="recaptcha",a9={theme:"light",type:"image"};let u9=class{constructor(e,n,r=Object.assign({},a9)){this.parameters=r,this.type=Lx,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ze(e),this.isInvisible=this.parameters.size==="invisible",V(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;V(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new o9:new i9,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){V(!this.parameters.sitekey,this.auth,"argument-error"),V(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),V(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=tt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){V(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){V(gE()&&!RE(),this.auth,"internal-error"),await l9(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await x3(this.auth);V(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return V(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function l9(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class PE{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ns._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function c9(t,e,n){const r=Ze(t),i=await Mp(r,e,X(n));return new PE(i,s=>Op(r,s))}async function d9(t,e,n){const r=X(t);await Dp(!1,r,"phone");const i=await Mp(r.auth,e,X(n));return new PE(i,s=>Ax(r,s))}async function h9(t,e,n){const r=X(t),i=await Mp(r.auth,e,X(n));return new PE(i,s=>Rx(r,s))}async function Mp(t,e,n){var r;const i=await n.verify();try{V(typeof i=="string",t,"argument-error"),V(n.type===Lx,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return V(o.type==="enroll",t,"internal-error"),(await x5(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{V(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return V(a,t,"missing-multi-factor-info"),(await Q5(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await H3(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function f9(t,e){await wE(X(t),e)}/**
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
 */let Js=class Bd{constructor(e){this.providerId=Bd.PROVIDER_ID,this.auth=Ze(e)}verifyPhoneNumber(e,n){return Mp(this.auth,e,X(n))}static credential(e,n){return Ns._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Bd.credentialFromTaggedObject(n)}static credentialFromError(e){return Bd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ns._fromTokenResponse(n,r):null}};Js.PROVIDER_ID="phone";Js.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function lo(t,e){return e?yn(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class CE extends Qa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function p9(t){return Sx(t.auth,new CE(t),t.bypassAuthState)}function m9(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),Tx(n,new CE(t),t.bypassAuthState)}async function g9(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),wE(n,new CE(t),t.bypassAuthState)}/**
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
 */class Mx{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return p9;case"linkViaPopup":case"linkViaRedirect":return g9;case"reauthViaPopup":case"reauthViaRedirect":return m9;default:xt(this.auth,"internal-error")}}resolve(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const y9=new kc(2e3,1e4);async function v9(t,e,n){const r=Ze(t);Ka(t,e,Zr);const i=lo(r,n);return new Or(r,"signInViaPopup",e,i).executeNotNull()}async function _9(t,e,n){const r=X(t);Ka(r.auth,e,Zr);const i=lo(r.auth,n);return new Or(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function w9(t,e,n){const r=X(t);Ka(r.auth,e,Zr);const i=lo(r.auth,n);return new Or(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Or extends Mx{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Xn(this.filter.length===1,"Popup operations only handle one event");const e=Nc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,y9.get())};e()}}Or.currentPopupAction=null;/**
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
 */const E9="pendingRedirect",el=new Map;class I9 extends Mx{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=el.get(this.auth._key());if(!e){try{const r=await T9(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}el.set(this.auth._key(),e)}return this.bypassAuthState||el.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function T9(t,e){const n=$x(e),r=Fx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function kE(t,e){return Fx(t)._set($x(e),"true")}function S9(){el.clear()}function bE(t,e){el.set(t._key(),e)}function Fx(t){return yn(t._redirectPersistence)}function $x(t){return xs(E9,t.config.apiKey,t.name)}/**
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
 */function A9(t,e,n){return R9(t,e,n)}async function R9(t,e,n){const r=Ze(t);Ka(t,e,Zr),await r._initializationPromise;const i=lo(r,n);return await kE(i,r),i._openRedirect(r,e,"signInViaRedirect")}function P9(t,e,n){return C9(t,e,n)}async function C9(t,e,n){const r=X(t);Ka(r.auth,e,Zr),await r.auth._initializationPromise;const i=lo(r.auth,n);await kE(i,r.auth);const s=await Ux(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function k9(t,e,n){return b9(t,e,n)}async function b9(t,e,n){const r=X(t);Ka(r.auth,e,Zr),await r.auth._initializationPromise;const i=lo(r.auth,n);await Dp(!1,r,e.providerId),await kE(i,r.auth);const s=await Ux(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function x9(t,e){return await Ze(t)._initializationPromise,Fp(t,e,!1)}async function Fp(t,e,n=!1){const r=Ze(t),i=lo(r,e),o=await new I9(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Ux(t){const e=Nc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const N9=10*60*1e3;class jx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!D9(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Bx(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N9&&this.cachedEventUids.clear(),this.cachedEventUids.has(yS(e))}saveEventToCache(e){this.cachedEventUids.add(yS(e)),this.lastProcessedEventTime=Date.now()}}function yS(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bx({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function D9(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bx(t);default:return!1}}/**
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
 */async function zx(t,e={}){return lt(t,"GET","/v1/projects",e)}/**
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
 */const O9=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,V9=/^https?/;async function L9(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zx(t);for(const n of e)try{if(M9(n))return}catch{}xt(t,"unauthorized-domain")}function M9(t){const e=Kl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!V9.test(n))return!1;if(O9.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const F9=new kc(3e4,6e4);function vS(){const t=tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $9(t){return new Promise((e,n)=>{var r,i,s;function o(){vS(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vS(),n(kt(t,"network-request-failed"))},timeout:F9.get()})}if(!((i=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tt().gapi)===null||s===void 0)&&s.load)o();else{const a=gx("iframefcb");return tt()[a]=()=>{gapi.load?o():n(kt(t,"network-request-failed"))},_E(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw zd=null,e})}let zd=null;function U9(t){return zd=zd||$9(t),zd}/**
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
 */const j9=new kc(5e3,15e3),B9="__/auth/iframe",z9="emulator/auth/iframe",q9={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},G9=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function W9(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yE(e,z9):`https://${t.config.authDomain}/${B9}`,r={apiKey:e.apiKey,appName:t.name,v:Qi},i=G9.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${La(r).slice(1)}`}async function K9(t){const e=await U9(t),n=tt().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:W9(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:q9,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=kt(t,"network-request-failed"),a=tt().setTimeout(()=>{s(o)},j9.get());function u(){tt().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const H9={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Q9=500,Y9=600,X9="_blank",J9="http://localhost";class _S{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Z9(t,e,n,r=Q9,i=Y9){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},H9),{width:r.toString(),height:i.toString(),top:s,left:o}),l=$e().toLowerCase();n&&(a=ux(l)?X9:n),ax(l)&&(e=e||J9,u.scrollbars="yes");const c=Object.entries(u).reduce((h,[f,v])=>`${h}${f}=${v},`,"");if(C3(l)&&a!=="_self")return e6(e||"",a),new _S(null);const d=window.open(e||"",a,c);V(d,t,"popup-blocked");try{d.focus()}catch{}return new _S(d)}function e6(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const t6="__/auth/handler",n6="emulator/auth/handler",r6=encodeURIComponent("fac");async function nv(t,e,n,r,i,s){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qi,eventId:i};if(e instanceof Zr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",AF(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Ya){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const u=await t._getAppCheckToken(),l=u?`#${r6}=${encodeURIComponent(u)}`:"";return`${i6(t)}?${La(a).slice(1)}${l}`}function i6({config:t}){return t.emulator?yE(t,n6):`https://${t.authDomain}/${t6}`}/**
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
 */const ng="webStorageSupport";class s6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xs,this._completeRedirectFn=Fp,this._overrideRedirectResult=bE}async _openPopup(e,n,r,i){var s;Xn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await nv(e,n,r,Kl(),i);return Z9(e,o,Nc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await nv(e,n,r,Kl(),i);return U5(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await K9(e),r=new jx(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ng,{type:ng},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ng];o!==void 0&&n(!!o),xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=L9(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hx()||vE()||Ha()}}const o6=s6;class a6{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return pr("unexpected MultiFactorSessionType")}}}class xE extends a6{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new xE(e)}_finalizeEnroll(e,n,r){return N5(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return Y5(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class qx{constructor(){}static assertion(e){return xE._fromCredential(e)}}qx.FACTOR_ID="phone";var wS="@firebase/auth",ES="1.0.0";/**
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
 */class u6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function l6(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function c6(t){Oi(new _r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fx(t)},l=new M3(r,i,s,u);return F3(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Oi(new _r("auth-internal",e=>{const n=Ze(e.getProvider("auth").getImmediate());return(r=>new u6(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yr(wS,ES,l6(t)),yr(wS,ES,"esm2017")}/**
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
 */const d6=5*60;mF("authIdTokenMaxAge");c6("Browser");/**
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
 */const h6=2e3;async function f6(t,e,n){var r;const{BuildInfo:i}=Zs();Xn(e.sessionId,"AuthEvent did not contain a session ID");const s=await v6(e.sessionId),o={};return Ha()?o.ibi=i.packageName:bc()?o.apn=i.packageName:xt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,nv(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function p6(t){const{BuildInfo:e}=Zs(),n={};Ha()?n.iosBundleId=e.packageName:bc()?n.androidPackageName=e.packageName:xt(t,"operation-not-supported-in-this-environment"),await zx(t,n)}function m6(t){const{cordova:e}=Zs();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,P3()?"_blank":"_system","location=yes"),n(i)})})}async function g6(t,e,n){const{cordova:r}=Zs();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var d;s();const h=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(kt(t,"redirect-cancelled-by-user"))},h6))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),bc()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function y6(t){var e,n,r,i,s,o,a,u,l,c;const d=Zs();V(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),V(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),V(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),V(typeof((u=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),V(typeof((c=(l=d==null?void 0:d.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function v6(t){const e=_6(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function _6(t){if(Xn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const w6=20;class E6 extends jx{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function I6(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:A6(),postBody:null,tenantId:t.tenantId,error:kt(t,"no-auth-event")}}function T6(t,e){return rv()._set(iv(t),e)}async function IS(t){const e=await rv()._get(iv(t));return e&&await rv()._remove(iv(t)),e}function S6(t,e){var n,r;const i=P6(e);if(i.includes("/__/auth/callback")){const s=qd(i),o=s.firebaseError?R6(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?kt(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function A6(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<w6;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function rv(){return yn(AE)}function iv(t){return xs("authEvent",t.config.apiKey,t.name)}function R6(t){try{return JSON.parse(t)}catch{return null}}function P6(t){const e=qd(t),n=e.link?decodeURIComponent(e.link):void 0,r=qd(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return qd(i).link||i||r||n||t}function qd(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Vo(n.join("?"))}/**
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
 */const C6=500;class k6{constructor(){this._redirectPersistence=Xs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Fp,this._overrideRedirectResult=bE}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new E6(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){xt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){y6(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),S9(),await this._originValidation(e);const o=I6(e,r,i);await T6(e,o);const a=await f6(e,o,n),u=await m6(a);return g6(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=p6(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Zs(),o=setTimeout(async()=>{await IS(e),n.onEvent(TS())},C6),a=async c=>{clearTimeout(o);const d=await IS(e);let h=null;d&&(c!=null&&c.url)&&(h=S6(d,c.url)),n.onEvent(h||TS())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;Zs().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(d){console.error(d)}}}}const b6=k6;function TS(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:kt("no-auth-event")}}/**
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
 */function x6(t,e){Ze(t)._logFramework(e)}var N6="@firebase/auth-compat",D6="0.4.3";/**
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
 */const O6=1e3;function tl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function V6(){return tl()==="http:"||tl()==="https:"}function Gx(t=$e()){return!!((tl()==="file:"||tl()==="ionic:"||tl()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function L6(){return j_()||U_()}function M6(){return wP()&&(document==null?void 0:document.documentMode)===11}function F6(t=$e()){return/Edge\/\d+/.test(t)}function $6(t=$e()){return M6()||F6(t)}function Wx(){try{const t=self.localStorage,e=Nc();if(t)return t.setItem(e,"1"),t.removeItem(e),$6()?Tl():!0}catch{return NE()&&Tl()}return!1}function NE(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function rg(){return(V6()||_P()||Gx())&&!L6()&&Wx()&&!NE()}function Kx(){return Gx()&&typeof document<"u"}async function U6(){return Kx()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},O6);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function j6(){return typeof window<"u"?window:null}/**
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
 */const mn={LOCAL:"local",NONE:"none",SESSION:"session"},_u=V,Hx="persistence";function B6(t,e){if(_u(Object.values(mn).includes(e),t,"invalid-persistence-type"),j_()){_u(e!==mn.SESSION,t,"unsupported-persistence-type");return}if(U_()){_u(e===mn.NONE,t,"unsupported-persistence-type");return}if(NE()){_u(e===mn.NONE||e===mn.LOCAL&&Tl(),t,"unsupported-persistence-type");return}_u(e===mn.NONE||Wx(),t,"unsupported-persistence-type")}async function sv(t){await t._initializationPromise;const e=Qx(),n=xs(Hx,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function z6(t,e){const n=Qx();if(!n)return[];const r=xs(Hx,t,e);switch(n.getItem(r)){case mn.NONE:return[Ia];case mn.LOCAL:return[Xl,Xs];case mn.SESSION:return[Xs];default:return[]}}function Qx(){var t;try{return((t=j6())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const q6=V;class gi{constructor(){this.browserResolver=yn(o6),this.cordovaResolver=yn(b6),this.underlyingResolver=null,this._redirectPersistence=Xs,this._completeRedirectFn=Fp,this._overrideRedirectResult=bE}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Kx()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return q6(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await U6();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Yx(t){return t.unwrap()}function G6(t){return t.wrapped()}/**
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
 */function W6(t){return Xx(t)}function K6(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new H6(t,b5(t,e))}else if(r){const i=Xx(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Xx(t){const{_tokenResponse:e}=t instanceof Kt?t.customData:t;if(!e)return null;if(!(t instanceof Kt)&&"temporaryProof"in e&&"phoneNumber"in e)return Js.credentialFromResult(t);const n=e.providerId;if(!n||n===vu.PASSWORD)return null;let r;switch(n){case vu.GOOGLE:r=or;break;case vu.FACEBOOK:r=sr;break;case vu.GITHUB:r=ar;break;case vu.TWITTER:r=ur;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Ta._create(n,a):Ir._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Xo(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof Kt?r.credentialFromError(t):r.credentialFromResult(t)}function en(t,e){return e.catch(n=>{throw n instanceof Kt&&K6(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:W6(n),additionalUserInfo:k5(n),user:Vr.getOrCreate(i)}})}async function ov(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>en(t,n.confirm(r))}}class H6{constructor(e,n){this.resolver=n,this.auth=G6(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return en(Yx(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Vr{constructor(e){this._delegate=e,this.multiFactor=O5(e)}static getOrCreate(e){return Vr.USER_MAP.has(e)||Vr.USER_MAP.set(e,new Vr(e)),Vr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return en(this.auth,Ax(this._delegate,e))}async linkWithPhoneNumber(e,n){return ov(this.auth,d9(this._delegate,e,n))}async linkWithPopup(e){return en(this.auth,w9(this._delegate,e,gi))}async linkWithRedirect(e){return await sv(Ze(this.auth)),k9(this._delegate,e,gi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return en(this.auth,Rx(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return ov(this.auth,h9(this._delegate,e,n))}reauthenticateWithPopup(e){return en(this.auth,_9(this._delegate,e,gi))}async reauthenticateWithRedirect(e){return await sv(Ze(this.auth)),P9(this._delegate,e,gi)}sendEmailVerification(e){return v5(this._delegate,e)}async unlink(e){return await i5(this._delegate,e),this}updateEmail(e){return I5(this._delegate,e)}updatePassword(e){return T5(this._delegate,e)}updatePhoneNumber(e){return f9(this._delegate,e)}updateProfile(e){return E5(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return _5(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Vr.USER_MAP=new WeakMap;/**
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
 */const wu=V;class av{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;wu(r,"invalid-api-key",{appName:e.name}),wu(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?gi:void 0;this._delegate=n.initialize({options:{persistence:Q6(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(u3),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Vr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){$3(this._delegate,e,n)}applyActionCode(e){return l5(this._delegate,e)}checkActionCode(e){return Px(this._delegate,e)}confirmPasswordReset(e,n){return u5(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return en(this._delegate,d5(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return y5(this._delegate,e)}isSignInWithEmailLink(e){return p5(this._delegate,e)}async getRedirectResult(){wu(rg(),this._delegate,"operation-not-supported-in-this-environment");const e=await x9(this._delegate,gi);return e?en(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){x6(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=SS(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=SS(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return f5(this._delegate,e,n)}sendPasswordResetEmail(e,n){return a5(this._delegate,e,n||void 0)}async setPersistence(e){B6(this._delegate,e);let n;switch(e){case mn.SESSION:n=Xs;break;case mn.LOCAL:n=await yn(Xl)._isAvailable()?Xl:AE;break;case mn.NONE:n=Ia;break;default:return xt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return en(this._delegate,r5(this._delegate))}signInWithCredential(e){return en(this._delegate,Op(this._delegate,e))}signInWithCustomToken(e){return en(this._delegate,o5(this._delegate,e))}signInWithEmailAndPassword(e,n){return en(this._delegate,h5(this._delegate,e,n))}signInWithEmailLink(e,n){return en(this._delegate,m5(this._delegate,e,n))}signInWithPhoneNumber(e,n){return ov(this._delegate,c9(this._delegate,e,n))}async signInWithPopup(e){return wu(rg(),this._delegate,"operation-not-supported-in-this-environment"),en(this._delegate,v9(this._delegate,e,gi))}async signInWithRedirect(e){return wu(rg(),this._delegate,"operation-not-supported-in-this-environment"),await sv(this._delegate),A9(this._delegate,e,gi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return c5(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}av.Persistence=mn;function SS(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Vr.getOrCreate(o)),error:e,complete:n}}function Q6(t,e){const n=z6(t,e);if(typeof self<"u"&&!n.includes(Xl)&&n.push(Xl),typeof window<"u")for(const r of[AE,Xs])n.includes(r)||n.push(r);return n.includes(Ia)||n.push(Ia),n}/**
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
 */class DE{constructor(){this.providerId="phone",this._delegate=new Js(Yx(Hr.auth()))}static credential(e,n){return Js.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}DE.PHONE_SIGN_IN_METHOD=Js.PHONE_SIGN_IN_METHOD;DE.PROVIDER_ID=Js.PROVIDER_ID;/**
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
 */const Y6=V;class X6{constructor(e,n,r=Hr.app()){var i;Y6((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new u9(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const J6="auth-compat";function Z6(t){t.INTERNAL.registerComponent(new _r(J6,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new av(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:yo.EMAIL_SIGNIN,PASSWORD_RESET:yo.PASSWORD_RESET,RECOVER_EMAIL:yo.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:yo.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:yo.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:yo.VERIFY_EMAIL}},EmailAuthProvider:ns,FacebookAuthProvider:sr,GithubAuthProvider:ar,GoogleAuthProvider:or,OAuthProvider:Xo,SAMLAuthProvider:Qh,PhoneAuthProvider:DE,PhoneMultiFactorGenerator:qx,RecaptchaVerifier:X6,TwitterAuthProvider:ur,Auth:av,AuthCredential:Qa,Error:Kt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(N6,D6)}Z6(Hr);const eq={apiKey:"AIzaSyDz07SI1g2ZXvHikqrlH0VUY5sTxbkRCO8",authDomain:"crwn-clothing-69d58.firebaseapp.com",projectId:"crwn-clothing-69d58",storageBucket:"crwn-clothing-69d58.appspot.com",messagingSenderId:"58040636901",appId:"1:58040636901:web:e586b0245c6ad70bbd4b0c",measurementId:"G-VCHP4LV66Y"},tq=async(t,e)=>{if(!t)return;const n=Jx.doc(`users/${t.uid}`);if(!(await n.get()).exists){const{displayName:i,email:s}=t,o=new Date;try{await n.set({displayName:i,email:s,createdAt:o,...e})}catch(a){console.log("error creating user",a.message)}}return n},nq=t=>t.docs.map(n=>{const{title:r,items:i}=n.data();return{routeName:encodeURI(r.toLowerCase()),id:n.id,title:r,items:i}}).reduce((n,r)=>(n[r.title.toLowerCase()]=r,n),{}),rq=()=>new promise((t,e)=>{const n=Oc.onAuthStateChanged(r=>{n(),t(r)},e)});Hr.initializeApp(eq);const Oc=Hr.auth(),Jx=Hr.firestore(),Zx=new Hr.auth.GoogleAuthProvider;Zx.setCustomParameters({prompt:"select_account"});const Ds={FETCH_COLLECTIONS_START:"  FETCH-COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"    FETCH_COLLECTIONS_FAILURE"},iq=()=>({type:Ds.FETCH_COLLECTIONS_START}),sq=t=>({type:Ds.FETCH_COLLECTIONS_SUCCESS,payload:t}),oq=t=>({type:Ds.FETCH_COLLECTIONS_FAILURE,payload:t});function*aq(){yield console.log("i am fired");try{const t=Jx.collection("collections");console.log(t);const e=yield t.get(),n=yield Cn(nq,e);yield Vn(sq(n))}catch(t){yield Vn(oq(t.messsage))}}function*uq(){yield oF(Ds.FETCH_COLLECTIONS_START,aq)}const Ve={GOOGLE_SIGN_IN_START:"GOOLE_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:" SIGN_UP_SUCCESS",SIGN_UP_FAILURE:" SIGN_UP_FAILURE"},lq=()=>({type:Ve.GOOGLE_SIGN_IN_START}),cq=t=>({type:Ve.SIGN_IN_SUCCESS,payload:t}),$p=t=>({type:Ve.SIGN_IN_FAILURE,payload:t}),dq=t=>({type:Ve.EMAIL_SIGN_IN_START,payload:t}),hq=()=>({type:Ve.CHECK_USER_SESSION}),fq=()=>({type:Ve.SIGN_OUT_START}),pq=()=>({type:Ve.SIGN_OUT_SUCCESS}),mq=t=>({type:Ve.SIGN_OUT_FAILURE,payload:t}),gq=t=>({type:Ve.SIGN_UP_START,payload:t}),yq=({user:t,additionalData:e})=>({type:Ve.SIGN_UP_SUCCESS,payload:{user:t,additionalData:e}}),vq=t=>({type:Ve.SIGN_UP_FAILURE,payload:t});function*Up(t,e){try{const r=yield(yield Cn(tq,t,e)).get();yield Vn(cq({id:r.id,...r.data()}))}catch(n){yield Vn($p(n))}}function*_q(){try{const{user:t}=yield Oc.signInWithPopup(Zx);yield Up(t)}catch(t){yield Vn($p(t))}}function*wq({payload:{email:t,password:e}}){try{const{user:n}=yield Oc.signInWithEmailAndPassword(t,e);yield Up(n)}catch(n){yield Vn($p(n))}}function*Eq(){try{const t=yield rq();if(!t)return;yield Up(t)}catch(t){yield Vn($p(t))}}function*Iq(){try{yield Oc.signOut(),yield Vn(pq())}catch{yield Vn(mq())}}function*Tq({payload:{email:t,password:e,displayName:n}}){try{const{user:r}=yield Oc.createUserWithEmailAndPassword(t,e);yield Vn(yq({user:r,additionalData:{displayName:n}}))}catch(r){yield Vn(vq(r))}}function*Sq({payload:{user:t,additionalData:e}}){yield Up(t,e)}function*Aq(){yield Va(Ve.GOOGLE_SIGN_IN_START,_q)}function*Rq(){yield Va(Ve.EMAIL_SIGN_IN_START,wq)}function*Pq(){yield Va(Ve.SIGN_OUT_START,Iq)}function*Cq(){yield Va(Ve.SIGN_UP_START,Tq)}function*kq(){yield Va(Ve.SIGN_UP_SUCCESS,Sq)}function*bq(){yield D_([Cn(Aq),Cn(Rq),Cn(Eq),Cn(Pq),Cn(Cq),Cn(kq)])}const lr={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:" CLEAR_CART"},eN=()=>({type:lr.TOGGLE_CART_HIDDEN}),tN=t=>({type:lr.ADD_ITEM,payload:t}),xq=t=>({type:lr.REMOVE_ITEM,payload:t}),Nq=t=>({type:lr.CLEAR_ITEM_FROM_CART,payload:t}),Dq=()=>({type:lr.CLEAR_CART});function*Oq(){yield Vn(Dq())}function*Vq(){yield Va(Ve.SIGN_OUT_SUCCESS,Oq)}function*Lq(){yield D_([Cn(Vq)])}function*Mq(){yield D_([Cn(uq),Cn(bq),Cn(Lq)])}const Fq=({item:{imageUrl:t,price:e,name:n,quantity:r}})=>k.jsxs("div",{className:"cart-item",children:[k.jsx("img",{src:t,alt:"item"}),k.jsxs("div",{className:"item-details",children:[k.jsx("span",{className:"name",children:n}),k.jsxs("span",{className:"price",children:[r," x $",e]})]})]}),$q=(t,e)=>t.find(r=>r.id===e.id)?t.map(r=>r.id===e.id?{...r,quantity:r.quantity+1}:r):[...t,{...e,quantity:1}],Uq=(t,e)=>t.find(r=>r.id===e.id).quantity===1?t.filter(r=>r.id!==e.id):t.map(r=>r.id===e.id?{...r,quantity:r.quantity-1}:r),jq={hidden:!0,cartItems:[]},Bq=(t=jq,e)=>{switch(e.type){case lr.TOGGLE_CART_HIDDEN:return{...t,hidden:!t.hidden};case lr.ADD_ITEM:return{...t,cartItems:$q(t.cartItems,e.payload)};case lr.CLEAR_ITEM_FROM_CART:return{...t,cartItems:t.cartItems.filter(n=>n.id!==e.payload.id)};case lr.REMOVE_ITEM:return{...t,cartItems:Uq(t.cartItems,e.payload)};case lr.CLEAR_CART:return{...t,cartItems:[]};default:return t}};var OE={},VE={};VE.__esModule=!0;VE.default=Gq;function Gd(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Gd=function(n){return typeof n}:Gd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Gd(t)}function ig(){}var zq={getItem:ig,setItem:ig,removeItem:ig};function qq(t){if((typeof self>"u"?"undefined":Gd(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function Gq(t){var e="".concat(t,"Storage");return qq(e)?self[e]:zq}OE.__esModule=!0;OE.default=Hq;var Wq=Kq(VE);function Kq(t){return t&&t.__esModule?t:{default:t}}function Hq(t){var e=(0,Wq.default)(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}var nN=void 0,Qq=Yq(OE);function Yq(t){return t&&t.__esModule?t:{default:t}}var Xq=(0,Qq.default)("local");nN=Xq;const Jq={currentUser:null,error:null},Zq=(t=Jq,e)=>{switch(e.type){case Ve.SET_CURRENT_USER:return{...t,currentUser:e.payload};case Ve.SIGN_IN_SUCCESS:return{...t,currentUser:e.payload,error:null};case Ve.SIGN_OUT_SUCCESS:return{...t,currentUser:null,error:null};case Ve.SIGN_OUT_FAILURE:case Ve.SIGN_IN_FAILURE:case Ve.SIGN_UP_FAILURE:return{...t,error:e.payload};default:return t}},eG={sections:[{title:"hats",imageUrl:"../../src/assets/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"../../src/assets/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"../../src/assets/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"../../src/assets/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"../../src/assets/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},tG=(t=eG,e)=>{switch(e.type){default:return t}},nG={collections:null,isFetching:!1,errorMessage:void 0},rG=(t=nG,e)=>{switch(e.type){case Ds.FETCH_COLLECTIONS_START:return{...t,isFetching:!0};case Ds.FETCH_COLLECTIONS_SUCCESS:return{...t,isFetching:!1,collections:e.payload};case Ds.FETCH_COLLECTIONS_FAILURE:return{...t,isFetching:!1,errorMessage:e.payload};default:return t}},iG={key:"root",storage:nN,whitelist:["cart"]},sG=AM({user:Zq,cart:Bq,directory:tG,shop:rG}),oG=jM(iG,sG),rN=rF(),aG=[QM,rN],iN=A_(oG,RM(...aG));rN.run(Mq);const uG=KM(iN);var Zh="NOT_FOUND";function lG(t){var e;return{get:function(r){return e&&t(e.key,r)?e.value:Zh},put:function(r,i){e={key:r,value:i}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}function cG(t,e){var n=[];function r(a){var u=n.findIndex(function(c){return e(a,c.key)});if(u>-1){var l=n[u];return u>0&&(n.splice(u,1),n.unshift(l)),l.value}return Zh}function i(a,u){r(a)===Zh&&(n.unshift({key:a,value:u}),n.length>t&&n.pop())}function s(){return n}function o(){n=[]}return{get:r,put:i,getEntries:s,clear:o}}var dG=function(e,n){return e===n};function hG(t){return function(n,r){if(n===null||r===null||n.length!==r.length)return!1;for(var i=n.length,s=0;s<i;s++)if(!t(n[s],r[s]))return!1;return!0}}function fG(t,e){var n=typeof e=="object"?e:{equalityCheck:e},r=n.equalityCheck,i=r===void 0?dG:r,s=n.maxSize,o=s===void 0?1:s,a=n.resultEqualityCheck,u=hG(i),l=o===1?lG(u):cG(o,u);function c(){var d=l.get(arguments);if(d===Zh){if(d=t.apply(null,arguments),a){var h=l.getEntries(),f=h.find(function(v){return a(v.value,d)});f&&(d=f.value)}l.put(arguments,d)}return d}return c.clearCache=function(){return l.clear()},c}function pG(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every(function(r){return typeof r=="function"})){var n=e.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function mG(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=function(){for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];var l=0,c,d={memoizeOptions:void 0},h=a.pop();if(typeof h=="object"&&(d=h,h=a.pop()),typeof h!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof h+"]");var f=d,v=f.memoizeOptions,y=v===void 0?n:v,w=Array.isArray(y)?y:[y],m=pG(a),p=t.apply(void 0,[function(){return l++,h.apply(null,arguments)}].concat(w)),g=t(function(){for(var I=[],S=m.length,C=0;C<S;C++)I.push(m[C].apply(null,arguments));return c=p.apply(null,I),c});return Object.assign(g,{resultFunc:h,memoizedResultFunc:p,dependencies:m,lastResult:function(){return c},recomputations:function(){return l},resetRecomputations:function(){return l=0}}),g};return i}var $n=mG(fG),co=function(e,n){if(n===void 0&&(n=$n),typeof e!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof e));var r=Object.keys(e),i=n(r.map(function(s){return e[s]}),function(){for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return o.reduce(function(u,l,c){return u[r[c]]=l,u},{})});return i};const LE=t=>t.shop,sN=$n([LE],t=>t.collections),gG=t=>$n([sN],e=>e?e[t]:null),yG=$n([sN],t=>t?Object.keys(t).map(e=>t[e]):[]),vG=$n([LE],t=>t.isFetching),_G=$n([LE],t=>!!t.collections);var Se="-ms-",nl="-moz-",he="-webkit-",oN="comm",jp="rule",ME="decl",wG="@import",aN="@keyframes",EG="@layer",IG=Math.abs,FE=String.fromCharCode,uv=Object.assign;function TG(t,e){return ft(t,0)^45?(((e<<2^ft(t,0))<<2^ft(t,1))<<2^ft(t,2))<<2^ft(t,3):0}function uN(t){return t.trim()}function Pr(t,e){return(t=e.exec(t))?t[0]:t}function re(t,e,n){return t.replace(e,n)}function Wd(t,e){return t.indexOf(e)}function ft(t,e){return t.charCodeAt(e)|0}function Sa(t,e,n){return t.slice(e,n)}function nr(t){return t.length}function lN(t){return t.length}function Ou(t,e){return e.push(t),t}function SG(t,e){return t.map(e).join("")}function AS(t,e){return t.filter(function(n){return!Pr(n,e)})}var Bp=1,Aa=1,cN=0,Mn=0,nt=0,Xa="";function zp(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Bp,column:Aa,length:o,return:"",siblings:a}}function si(t,e){return uv(zp("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function vo(t){for(;t.root;)t=si(t.root,{children:[t]});Ou(t,t.siblings)}function AG(){return nt}function RG(){return nt=Mn>0?ft(Xa,--Mn):0,Aa--,nt===10&&(Aa=1,Bp--),nt}function Kn(){return nt=Mn<cN?ft(Xa,Mn++):0,Aa++,nt===10&&(Aa=1,Bp++),nt}function Os(){return ft(Xa,Mn)}function Kd(){return Mn}function qp(t,e){return Sa(Xa,t,e)}function lv(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function PG(t){return Bp=Aa=1,cN=nr(Xa=t),Mn=0,[]}function CG(t){return Xa="",t}function sg(t){return uN(qp(Mn-1,cv(t===91?t+2:t===40?t+1:t)))}function kG(t){for(;(nt=Os())&&nt<33;)Kn();return lv(t)>2||lv(nt)>3?"":" "}function bG(t,e){for(;--e&&Kn()&&!(nt<48||nt>102||nt>57&&nt<65||nt>70&&nt<97););return qp(t,Kd()+(e<6&&Os()==32&&Kn()==32))}function cv(t){for(;Kn();)switch(nt){case t:return Mn;case 34:case 39:t!==34&&t!==39&&cv(nt);break;case 40:t===41&&cv(t);break;case 92:Kn();break}return Mn}function xG(t,e){for(;Kn()&&t+nt!==47+10;)if(t+nt===42+42&&Os()===47)break;return"/*"+qp(e,Mn-1)+"*"+FE(t===47?t:Kn())}function NG(t){for(;!lv(Os());)Kn();return qp(t,Mn)}function DG(t){return CG(Hd("",null,null,null,[""],t=PG(t),0,[0],t))}function Hd(t,e,n,r,i,s,o,a,u){for(var l=0,c=0,d=o,h=0,f=0,v=0,y=1,w=1,m=1,p=0,g="",_=i,I=s,S=r,C=g;w;)switch(v=p,p=Kn()){case 40:if(v!=108&&ft(C,d-1)==58){Wd(C+=re(sg(p),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:C+=sg(p);break;case 9:case 10:case 13:case 32:C+=kG(v);break;case 92:C+=bG(Kd()-1,7);continue;case 47:switch(Os()){case 42:case 47:Ou(OG(xG(Kn(),Kd()),e,n,u),u);break;default:C+="/"}break;case 123*y:a[l++]=nr(C)*m;case 125*y:case 59:case 0:switch(p){case 0:case 125:w=0;case 59+c:m==-1&&(C=re(C,/\f/g,"")),f>0&&nr(C)-d&&Ou(f>32?PS(C+";",r,n,d-1,u):PS(re(C," ","")+";",r,n,d-2,u),u);break;case 59:C+=";";default:if(Ou(S=RS(C,e,n,l,c,i,a,g,_=[],I=[],d,s),s),p===123)if(c===0)Hd(C,e,S,S,_,s,d,a,I);else switch(h===99&&ft(C,3)===110?100:h){case 100:case 108:case 109:case 115:Hd(t,S,S,r&&Ou(RS(t,S,S,0,0,i,a,g,i,_=[],d,I),I),i,I,d,a,r?_:I);break;default:Hd(C,S,S,S,[""],I,0,a,I)}}l=c=f=0,y=m=1,g=C="",d=o;break;case 58:d=1+nr(C),f=v;default:if(y<1){if(p==123)--y;else if(p==125&&y++==0&&RG()==125)continue}switch(C+=FE(p),p*y){case 38:m=c>0?1:(C+="\f",-1);break;case 44:a[l++]=(nr(C)-1)*m,m=1;break;case 64:Os()===45&&(C+=sg(Kn())),h=Os(),c=d=nr(g=C+=NG(Kd())),p++;break;case 45:v===45&&nr(C)==2&&(y=0)}}return s}function RS(t,e,n,r,i,s,o,a,u,l,c,d){for(var h=i-1,f=i===0?s:[""],v=lN(f),y=0,w=0,m=0;y<r;++y)for(var p=0,g=Sa(t,h+1,h=IG(w=o[y])),_=t;p<v;++p)(_=uN(w>0?f[p]+" "+g:re(g,/&\f/g,f[p])))&&(u[m++]=_);return zp(t,e,n,i===0?jp:a,u,l,c,d)}function OG(t,e,n,r){return zp(t,e,n,oN,FE(AG()),Sa(t,2,-2),0,r)}function PS(t,e,n,r,i){return zp(t,e,n,ME,Sa(t,0,r),Sa(t,r+1,-1),r,i)}function dN(t,e,n){switch(TG(t,e)){case 5103:return he+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return he+t+t;case 4789:return nl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return he+t+nl+t+Se+t+t;case 5936:switch(ft(t,e+11)){case 114:return he+t+Se+re(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return he+t+Se+re(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return he+t+Se+re(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return he+t+Se+t+t;case 6165:return he+t+Se+"flex-"+t+t;case 5187:return he+t+re(t,/(\w+).+(:[^]+)/,he+"box-$1$2"+Se+"flex-$1$2")+t;case 5443:return he+t+Se+"flex-item-"+re(t,/flex-|-self/g,"")+(Pr(t,/flex-|baseline/)?"":Se+"grid-row-"+re(t,/flex-|-self/g,""))+t;case 4675:return he+t+Se+"flex-line-pack"+re(t,/align-content|flex-|-self/g,"")+t;case 5548:return he+t+Se+re(t,"shrink","negative")+t;case 5292:return he+t+Se+re(t,"basis","preferred-size")+t;case 6060:return he+"box-"+re(t,"-grow","")+he+t+Se+re(t,"grow","positive")+t;case 4554:return he+re(t,/([^-])(transform)/g,"$1"+he+"$2")+t;case 6187:return re(re(re(t,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),t,"")+t;case 5495:case 3959:return re(t,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return re(re(t,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+Se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+he+t+t;case 4200:if(!Pr(t,/flex-|baseline/))return Se+"grid-column-align"+Sa(t,e)+t;break;case 2592:case 3360:return Se+re(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Pr(r.props,/grid-\w+-end/)})?~Wd(t+(n=n[e].value),"span")?t:Se+re(t,"-start","")+t+Se+"grid-row-span:"+(~Wd(n,"span")?Pr(n,/\d+/):+Pr(n,/\d+/)-+Pr(t,/\d+/))+";":Se+re(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Pr(r.props,/grid-\w+-start/)})?t:Se+re(re(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return re(t,/(.+)-inline(.+)/,he+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nr(t)-1-e>6)switch(ft(t,e+1)){case 109:if(ft(t,e+4)!==45)break;case 102:return re(t,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+nl+(ft(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Wd(t,"stretch")?dN(re(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return re(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,u,l){return Se+i+":"+s+l+(o?Se+i+"-span:"+(a?u:+u-+s)+l:"")+t});case 4949:if(ft(t,e+6)===121)return re(t,":",":"+he)+t;break;case 6444:switch(ft(t,ft(t,14)===45?18:11)){case 120:return re(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(ft(t,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+Se+"$2box$3")+t;case 100:return re(t,":",":"+Se)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(t,"scroll-","scroll-snap-")+t}return t}function ef(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function VG(t,e,n,r){switch(t.type){case EG:if(t.children.length)break;case wG:case ME:return t.return=t.return||t.value;case oN:return"";case aN:return t.return=t.value+"{"+ef(t.children,r)+"}";case jp:if(!nr(t.value=t.props.join(",")))return""}return nr(n=ef(t.children,r))?t.return=t.value+"{"+n+"}":""}function LG(t){var e=lN(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function MG(t){return function(e){e.root||(e=e.return)&&t(e)}}function FG(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case ME:t.return=dN(t.value,t.length,n);return;case aN:return ef([si(t,{value:re(t.value,"@","@"+he)})],r);case jp:if(t.length)return SG(n=t.props,function(i){switch(Pr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":vo(si(t,{props:[re(i,/:(read-\w+)/,":"+nl+"$1")]})),vo(si(t,{props:[i]})),uv(t,{props:AS(n,r)});break;case"::placeholder":vo(si(t,{props:[re(i,/:(plac\w+)/,":"+he+"input-$1")]})),vo(si(t,{props:[re(i,/:(plac\w+)/,":"+nl+"$1")]})),vo(si(t,{props:[re(i,/:(plac\w+)/,Se+"input-$1")]})),vo(si(t,{props:[i]})),uv(t,{props:AS(n,r)});break}return""})}}var $G={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ra=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",$E=typeof window<"u"&&"HTMLElement"in window,UG=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Gp=Object.freeze([]),Pa=Object.freeze({});function jG(t,e,n){return n===void 0&&(n=Pa),t.theme!==n.theme&&t.theme||e||n.theme}var hN=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),BG=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zG=/(^-|-$)/g;function CS(t){return t.replace(BG,"-").replace(zG,"")}var qG=/(a)(d)/gi,kS=function(t){return String.fromCharCode(t+(t>25?39:97))};function dv(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=kS(e%52)+n;return(kS(e%52)+n).replace(qG,"$1-$2")}var og,Mo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},fN=function(t){return Mo(5381,t)};function GG(t){return dv(fN(t)>>>0)}function WG(t){return t.displayName||t.name||"Component"}function ag(t){return typeof t=="string"&&!0}var pN=typeof Symbol=="function"&&Symbol.for,mN=pN?Symbol.for("react.memo"):60115,KG=pN?Symbol.for("react.forward_ref"):60112,HG={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},QG={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gN={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},YG=((og={})[KG]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},og[mN]=gN,og);function bS(t){return("type"in(e=t)&&e.type.$$typeof)===mN?gN:"$$typeof"in t?YG[t.$$typeof]:HG;var e}var XG=Object.defineProperty,JG=Object.getOwnPropertyNames,xS=Object.getOwnPropertySymbols,ZG=Object.getOwnPropertyDescriptor,eW=Object.getPrototypeOf,NS=Object.prototype;function yN(t,e,n){if(typeof e!="string"){if(NS){var r=eW(e);r&&r!==NS&&yN(t,r,n)}var i=JG(e);xS&&(i=i.concat(xS(e)));for(var s=bS(t),o=bS(e),a=0;a<i.length;++a){var u=i[a];if(!(u in QG||n&&n[u]||o&&u in o||s&&u in s)){var l=ZG(e,u);try{XG(t,u,l)}catch{}}}}return t}function Ca(t){return typeof t=="function"}function UE(t){return typeof t=="object"&&"styledComponentId"in t}function As(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function DS(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function Jl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function hv(t,e,n){if(n===void 0&&(n=!1),!n&&!Jl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=hv(t[r],e[r]);else if(Jl(e))for(var r in e)t[r]=hv(t[r],e[r]);return t}function jE(t,e){Object.defineProperty(t,"toString",{value:e})}function Vc(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var tW=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Vc(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),Qd=new Map,tf=new Map,ug=1,hd=function(t){if(Qd.has(t))return Qd.get(t);for(;tf.has(ug);)ug++;var e=ug++;return Qd.set(t,e),tf.set(e,t),e},nW=function(t,e){Qd.set(t,e),tf.set(e,t)},rW="style[".concat(Ra,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),iW=new RegExp("^".concat(Ra,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),sW=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},oW=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var u=a.match(iW);if(u){var l=0|parseInt(u[1],10),c=u[2];l!==0&&(nW(c,l),sW(t,c,u[3]),t.getTag().insertRules(l,i)),i.length=0}else i.push(a)}}};function aW(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vN=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(Ra,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ra,"active"),r.setAttribute("data-styled-version","6.0.7");var o=aW();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},uW=function(){function t(e){this.element=vN(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Vc(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),lW=function(){function t(e){this.element=vN(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),cW=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),OS=$E,dW={isServer:!$E,useCSSOMInjection:!UG},_N=function(){function t(e,n,r){e===void 0&&(e=Pa),n===void 0&&(n={});var i=this;this.options=an(an({},dW),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&$E&&OS&&(OS=!1,function(s){for(var o=document.querySelectorAll(rW),a=0,u=o.length;a<u;a++){var l=o[a];l&&l.getAttribute(Ra)!=="active"&&(oW(s,l),l.parentNode&&l.parentNode.removeChild(l))}}(this)),jE(this,function(){return function(s){for(var o=s.getTag(),a=o.length,u="",l=function(d){var h=function(m){return tf.get(m)}(d);if(h===void 0)return"continue";var f=s.names.get(h),v=o.getGroup(d);if(f===void 0||v.length===0)return"continue";var y="".concat(Ra,".g").concat(d,'[id="').concat(h,'"]'),w="";f!==void 0&&f.forEach(function(m){m.length>0&&(w+="".concat(m,","))}),u+="".concat(v).concat(y,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)l(c);return u}(i)})}return t.registerId=function(e){return hd(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(an(an({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new cW(i):r?new uW(i):new lW(i)}(this.options),new tW(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(hd(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(hd(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(hd(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),hW=/&/g,fW=/^\s*\/\/.*$/gm;function wN(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=wN(n.children,e)),n})}function pW(t){var e,n,r,i=t===void 0?Pa:t,s=i.options,o=s===void 0?Pa:s,a=i.plugins,u=a===void 0?Gp:a,l=function(h,f,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):h},c=u.slice();c.push(function(h){h.type===jp&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(hW,n).replace(r,l))}),o.prefix&&c.push(FG),c.push(VG);var d=function(h,f,v,y){f===void 0&&(f=""),v===void 0&&(v=""),y===void 0&&(y="&"),e=y,n=f,r=new RegExp("\\".concat(n,"\\b"),"g");var w=h.replace(fW,""),m=DG(v||f?"".concat(v," ").concat(f," { ").concat(w," }"):w);o.namespace&&(m=wN(m,o.namespace));var p=[];return ef(m,LG(c.concat(MG(function(g){return p.push(g)})))),p};return d.hash=u.length?u.reduce(function(h,f){return f.name||Vc(15),Mo(h,f.name)},5381).toString():"",d}var mW=new _N,fv=pW(),EN=ea.createContext({shouldForwardProp:void 0,styleSheet:mW,stylis:fv});EN.Consumer;ea.createContext(void 0);function VS(){return b.useContext(EN)}var gW=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=fv);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,jE(this,function(){throw Vc(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=fv),this.name+e.hash},t}(),yW=function(t){return t>="A"&&t<="Z"};function LS(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;yW(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var IN=function(t){return t==null||t===!1||t===""},TN=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!IN(s)&&(Array.isArray(s)&&s.isCss||Ca(s)?r.push("".concat(LS(i),":"),s,";"):Jl(s)?r.push.apply(r,Kh(Kh(["".concat(i," {")],TN(s),!1),["}"],!1)):r.push("".concat(LS(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in $G||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Vs(t,e,n,r){if(IN(t))return[];if(UE(t))return[".".concat(t.styledComponentId)];if(Ca(t)){if(!Ca(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Vs(i,e,n,r)}var s;return t instanceof gW?n?(t.inject(n,r),[t.getName(r)]):[t]:Jl(t)?TN(t):Array.isArray(t)?Array.prototype.concat.apply(Gp,t.map(function(o){return Vs(o,e,n,r)})):[t.toString()]}function vW(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ca(n)&&!UE(n))return!1}return!0}var _W=fN("6.0.7"),wW=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&vW(e),this.componentId=n,this.baseHash=Mo(_W,n),this.baseStyle=r,_N.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=As(i,this.staticRulesId);else{var s=DS(Vs(this.rules,e,n,r)),o=dv(Mo(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=As(i,o),this.staticRulesId=o}else{for(var u=Mo(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")l+=d;else if(d){var h=DS(Vs(d,e,n,r));u=Mo(u,h),l+=h}}if(l){var f=dv(u>>>0);n.hasNameForId(this.componentId,f)||n.insertRules(this.componentId,f,r(l,".".concat(f),void 0,this.componentId)),i=As(i,f)}}return i},t}(),SN=ea.createContext(void 0);SN.Consumer;var lg={};function EW(t,e,n){var r=UE(t),i=t,s=!ag(t),o=e.attrs,a=o===void 0?Gp:o,u=e.componentId,l=u===void 0?function(g,_){var I=typeof g!="string"?"sc":CS(g);lg[I]=(lg[I]||0)+1;var S="".concat(I,"-").concat(GG("6.0.7"+I+lg[I]));return _?"".concat(_,"-").concat(S):S}(e.displayName,e.parentComponentId):u,c=e.displayName;c===void 0&&function(g){return ag(g)?"styled.".concat(g):"Styled(".concat(WG(g),")")}(t);var d=e.displayName&&e.componentId?"".concat(CS(e.displayName),"-").concat(e.componentId):e.componentId||l,h=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,f=e.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(e.shouldForwardProp){var y=e.shouldForwardProp;f=function(g,_){return v(g,_)&&y(g,_)}}else f=v}var w=new wW(n,d,r?i.componentStyle:void 0);function m(g,_){return function(I,S,C){var L=I.attrs,J=I.componentStyle,z=I.defaultProps,De=I.foldedComponentIds,Ue=I.styledComponentId,Ut=I.target,Tr=ea.useContext(SN),st=VS(),fn=I.shouldForwardProp||st.shouldForwardProp,We=function(T,O,q){for(var K,Y=an(an({},O),{className:void 0,theme:q}),ne=0;ne<T.length;ne+=1){var je=Ca(K=T[ne])?K(Y):K;for(var ke in je)Y[ke]=ke==="className"?As(Y[ke],je[ke]):ke==="style"?an(an({},Y[ke]),je[ke]):je[ke]}return O.className&&(Y.className=As(Y.className,O.className)),Y}(L,S,jG(S,Tr,z)||Pa),F=We.as||Ut,H={};for(var Q in We)We[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"||(Q==="forwardedAs"?H.as=We.forwardedAs:fn&&!fn(Q,F)||(H[Q]=We[Q]));var E=function(T,O){var q=VS(),K=T.generateAndInjectStyles(O,q.styleSheet,q.stylis);return K}(J,We),P=As(De,Ue);return E&&(P+=" "+E),We.className&&(P+=" "+We.className),H[ag(F)&&!hN.has(F)?"class":"className"]=P,H.ref=C,b.createElement(F,H)}(p,g,_)}var p=ea.forwardRef(m);return p.attrs=h,p.componentStyle=w,p.shouldForwardProp=f,p.foldedComponentIds=r?As(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=d,p.target=r?i.target:t,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(_){for(var I=[],S=1;S<arguments.length;S++)I[S-1]=arguments[S];for(var C=0,L=I;C<L.length;C++)hv(_,L[C],!0);return _}({},i.defaultProps,g):g}}),jE(p,function(){return".".concat(p.styledComponentId)}),s&&yN(p,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function MS(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var FS=function(t){return Object.assign(t,{isCss:!0})};function Wp(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ca(t)||Jl(t)){var r=t;return FS(Vs(MS(Gp,Kh([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Vs(i):FS(Vs(MS(i,e)))}function pv(t,e,n){if(n===void 0&&(n=Pa),!e)throw Vc(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Wp.apply(void 0,Kh([i],s,!1)))};return r.attrs=function(i){return pv(t,e,an(an({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return pv(t,e,an(an({},n),i))},r}var AN=function(t){return pv(EW,t)},ve=AN;hN.forEach(function(t){ve[t]=AN(t)});const IW=Wp`
background-color: black;
color: white;
border: none;
    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
     
    }
`,TW=Wp`

    background-color: white;
    color: black;
    border: 1px solid black;
   
 
    &:hover{
      background-color: black;
      color: white;
      border: none;
    }
  
  

`,SW=Wp`

    background-color: #4285f4;
    color: white;
    // width: 500px;
    // margin-left: 20px;
    
        &:hover{
      background-color: #357ae8;
      border:none ;
    }
  
`,AW=t=>t.isGoogleSignIn?SW:t.inverted?TW:IW,RW=ve.button`
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

    
${AW}
`,Zl=({children:t,...e})=>k.jsx(RW,{...e,children:t}),PW=ve.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }

      button {
        opacity: unset;
        display:none;
      }
    }
  }
`,CW=ve(Zl)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px ;
  }
`,kW=ve.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({imageUrl:t})=>`url(${t})`};
`,bW=ve.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`,xW=ve.span`
  width: 90%;
  margin-bottom: 15px;
`,NW=ve.span`
  width: 10%;
  text-align: right;
`,DW=({item:t,addItem:e})=>{const{name:n,price:r,imageUrl:i}=t;return k.jsxs(PW,{children:[k.jsx(kW,{className:"image",imageUrl:i}),k.jsxs(bW,{children:[k.jsx(xW,{children:n}),k.jsx(NW,{children:r})]}),k.jsx(CW,{onClick:()=>e(t),inverted:!0,children:"Add to cart"})]})},OW=t=>({addItem:e=>t(tN(e))}),RN=An(null,OW)(DW),VW=ve.div`
  display: flex;
  flex-direction: column;
`,LW=ve.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`,MW=ve.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }
`,FW=({collection:t})=>{const{title:e,items:n}=t;return k.jsxs(VW,{children:[k.jsx(LW,{children:e}),k.jsx(MW,{children:n.map(r=>k.jsx(RN,{item:r},r.id))})]})},$W=t=>({collection:gG(oR().collectionId)(t)}),UW=An($W)(FW);const jW=({title:t,items:e})=>k.jsxs("div",{className:"collection-preview",children:[k.jsx("h1",{className:"title",children:t.toUpperCase()}),k.jsx("div",{className:"preview",children:e.filter((n,r)=>r<4).map(n=>k.jsx(RN,{item:n},n.id))})]});const BW=({collections:t})=>k.jsx("div",{className:"collections-overview",children:t.map(({id:e,...n})=>k.jsx(jW,{...n},e))}),zW=co({collections:yG}),qW=An(zW)(BW),GW=ve.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,WW=ve.div`
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
`,PN=t=>({isLoading:n,...r})=>n?k.jsx(GW,{children:k.jsx(WW,{})}):k.jsx(t,{...r}),KW=PN(qW),HW=PN(UW),QW=({fetchCollectionsStart:t,isCollectionFetching:e,isCollectionsLoaded:n})=>(b.useEffect(()=>{t()},[t]),oR(),k.jsx("div",{className:"shop-page",children:k.jsxs(lR,{children:[k.jsx(_s,{path:"/",element:k.jsx(KW,{isLoading:e})}),k.jsx(_s,{path:"/:collectionId",element:k.jsx(HW,{isLoading:!n})})]})})),YW=t=>({isCollectionFetching:vG(t),isCollectionsLoaded:_G(t)}),XW=t=>({fetchCollectionsStart:()=>t(iq())}),JW=An(YW,XW)(QW),ZW=t=>t.directory,eK=$n([ZW],t=>t.sections),tK=ve.div`
	height: ${({size:t})=>t?"380px":"240px"};
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;

	&:hover {
		cursor: pointer;

		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		& .content {
			opacity: 0.9;
		}
	}

	&:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`,nK=ve.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({imageUrl:t})=>`url(${t})`};
`,rK=ve.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  
  @media screen and (max-width: 800px) 
  {
     padding:10px;
      
  }
`,iK=ve.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`,sK=ve.span`
  font-weight: lighter;
  font-size: 16px;
`;const oK=({title:t,imageUrl:e,size:n,history:r,linkUrl:i,match:s})=>k.jsxs(tK,{size:n,onClick:()=>r.push(`${s.url}${i}`),children:[k.jsx(nK,{className:"background-image",imageUrl:e}),k.jsxs(rK,{className:"content",children:[k.jsx(iK,{children:t.toUpperCase()}),k.jsx(sK,{children:"SHOP NOW"})]})]});const aK=({sections:t})=>k.jsx("div",{className:"directory-menu",children:t.map(({title:e,imageUrl:n,size:r,id:i,linkUrl:s})=>k.jsx(oK,{title:e,imageUrl:n,size:r,linkUrl:s},i))}),uK=co({sections:eK}),lK=An(uK)(aK),cK=ve.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`,dK=()=>k.jsx(cK,{children:k.jsx(lK,{})}),CN=t=>t.cart,Kp=$n([CN],t=>t.cartItems),hK=$n([CN],t=>t.hidden),fK=$n([Kp],t=>t.reduce((e,n)=>e+n.quantity,0)),pK=$n([Kp],t=>t.reduce((e,n)=>e+n.quantity*n.price,0));const mK=({toggleCartHidden:t,itemCount:e})=>k.jsx("div",{className:"cart-icon",onClick:t,children:k.jsx("span",{className:"item-count",children:e})}),gK=t=>({toggleCartHidden:()=>t(eN())}),yK=co({itemCount:fK}),vK=An(yK,gK)(mK),_K=ve.div`
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

`,wK=ve.div`
height: 240px;
display: flex;
flex-direction: column;
overflow: scroll;
`,EK=ve(Zl)`
padding:0;
margin-top:auto;
`,IK=ve.span`
font-size: 18px;
margin: 50px auto;
`;const TK=({cartItems:t,dispatch:e})=>{const n=m_();return k.jsxs(_K,{children:[k.jsx(wK,{children:t.length?t.map(r=>k.jsx(Fq,{item:r},r.id)):k.jsx(IK,{children:"Your cart is empty"})}),k.jsx(EK,{onClick:()=>{n("/checkout"),e(eN())},children:"GO TO CHECKOUT"})]})},SK=co({cartItems:Kp}),AK=An(SK)(TK),RK=t=>t.user,kN=$n([RK],t=>t.currentUser),PK=ve.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 80px;

  @media screen and (max-width:800px){
    height:60px;
    padding:10px;
    margin-bottom:20px;
    padding: 0 80px;

  }
`,CK=ve(cR)`
  height: 100%;
  width: 70px;
  padding: 25px;
  
  @media screen and (max-width:800px){
   width:50px;
   padding:0;

  }
`,kK=ve.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width:800px){
    width:80%;
  }

`,fd=ve(cR)`
     padding:10px 15px;
     cursor: pointer;
     color:black;
     text-decoration:none;
`,bK=({currentUser:t,hidden:e,signOutStart:n})=>k.jsxs(PK,{children:[k.jsx(CK,{to:"/",children:"CROWN"}),k.jsxs(kK,{children:[k.jsx(fd,{to:"/shop",children:"SHOP"}),k.jsx(fd,{to:"/shop",children:"CONTACT"}),t?k.jsx(fd,{as:"div",onClick:n,children:"SIGN OUT"}):k.jsx(fd,{to:"/signin",children:"SIGN IN"}),k.jsx(vK,{})]}),e?null:k.jsx(AK,{})]}),xK=co({currentUser:kN,hidden:hK}),NK=t=>({signOutStart:()=>t(fq())}),DK=An(xK,NK)(bK);const Fo=({handleChange:t,label:e,...n})=>k.jsxs("div",{className:"group",children:[k.jsx("input",{className:"form-input",onChange:t,...n}),e?k.jsxs("label",{className:`${n.value.length?"shrink ":""} form-input-label`,children:[" ",e]}):null]});const OK=({emailSignInStart:t,googleSignInStart:e})=>{const[n,r]=b.useState({email:"",password:""}),{email:i,password:s}=n,o=async u=>{u.preventDefault(),t(i,s)},a=u=>{const{value:l,name:c}=u.target;r({...n,[c]:l})};return k.jsxs("div",{className:"sign-in",children:[k.jsx("h2",{children:"I already have an account"}),k.jsx("span",{children:"sign in with your email and password"}),k.jsxs("form",{onSubmit:o,children:[k.jsx(Fo,{name:"email",type:"email",value:i,label:"email",required:!0,handleChange:a}),k.jsx(Fo,{name:"password",type:"password",value:s,label:"password",required:!0,handleChange:a}),k.jsxs("div",{className:"buttons",children:[k.jsxs(Zl,{type:"submit",onClick:o,children:[" ","Sign in"]}),k.jsxs(Zl,{type:"button",onClick:e,isGoogleSignIn:!0,children:[" ","Sign in with Google"," "]})]})]})]})},VK=t=>({googleSignInStart:()=>t(lq()),emailSignInStart:(e,n)=>t(dq({email:e,password:n}))}),LK=An(null,VK)(OK);const MK=({signUpStart:t})=>{const[e,n]=b.useState({displayName:"",email:"",password:"",confirmPassword:""}),{displayName:r,email:i,password:s,confirmPassword:o}=e,a=async l=>{if(l.preventDefault(),s!==o){alert("Passwords don't match");return}t({displayName:r,email:i,password:s})},u=l=>{const{name:c,value:d}=l.target;n({...e,[c]:d})};return k.jsxs("div",{className:"sign-up",children:[k.jsx("h2",{className:"title",children:"I do not have an account"}),k.jsx("span",{children:"Sign up with your email and password"}),k.jsxs("form",{className:"sign-up-form",onSubmit:a,children:[k.jsx(Fo,{type:"text",name:"displayName",value:r,onChange:u,label:"Display Name",required:!0}),k.jsx(Fo,{type:"email",name:"email",value:i,onChange:u,label:"Email",required:!0}),k.jsx(Fo,{type:"password",name:"password",value:s,onChange:u,label:"Password",required:!0}),k.jsx(Fo,{type:"password",name:"confirmPassword",value:o,onChange:u,label:"Confirm Password",required:!0}),k.jsx(Zl,{type:"submit",children:"SIGN UP"})]})]})},FK=t=>({signUpStart:e=>t(gq(e))}),$K=An(null,FK)(MK);const UK=()=>k.jsxs("div",{className:"sign-in-and-sign-up",children:[k.jsx(LK,{}),k.jsx($K,{})]});var bN={},xN={exports:{}},jK="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",BK=jK,zK=BK;function NN(){}function DN(){}DN.resetWarningCache=NN;var qK=function(){function t(r,i,s,o,a,u){if(u!==zK){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:DN,resetWarningCache:NN};return n.PropTypes=n,n};xN.exports=qK();var GK=xN.exports;Object.defineProperty(bN,"__esModule",{value:!0});var Eu=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},WK=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),KK=b,_o=ON(KK),HK=GK,de=ON(HK);function ON(t){return t&&t.__esModule?t:{default:t}}function cg(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function QK(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function YK(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function XK(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Iu=!1,$S=!1,US=!1,Hp=function(t){XK(e,t);function e(n){QK(this,e);var r=YK(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return r.onScriptLoaded=function(){e.stripeHandler||(e.stripeHandler=StripeCheckout.configure({key:r.props.stripeKey}),r.hasPendingClick&&r.showStripeDialog())},r.onScriptError=function(){for(var i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];r.hideLoadingDialog(),r.props.onScriptError&&r.props.onScriptError.apply(r,s)},r.onClosed=function(){for(var i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];r._isMounted&&r.setState({open:!1}),r.props.closed&&r.props.closed.apply(r,s)},r.onOpened=function(){for(var i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];r.setState({open:!0}),r.props.opened&&r.props.opened.apply(r,s)},r.getConfig=function(){return["token","image","name","description","amount","locale","currency","panelLabel","zipCode","shippingAddress","billingAddress","email","allowRememberMe","bitcoin","alipay","alipayReusable"].reduce(function(i,s){return Eu({},i,r.props.hasOwnProperty(s)&&cg({},s,r.props[s]))},{opened:r.onOpened,closed:r.onClosed})},r.onClick=function(){if(!r.props.disabled)if(US)try{throw new Error("Tried to call onClick, but StripeCheckout failed to load")}catch{}else e.stripeHandler?r.showStripeDialog():(r.showLoadingDialog(),r.hasPendingClick=!0)},r.handleOnMouseDown=function(){r.setState({buttonActive:!0})},r.handleOnMouseUp=function(){r.setState({buttonActive:!1})},r.state={open:!1,buttonActive:!1},r}return WK(e,[{key:"componentDidMount",value:function(){var r=this;if(this._isMounted=!0,!$S&&!Iu){Iu=!0;var i=document.createElement("script");typeof this.props.onScriptTagCreated=="function"&&this.props.onScriptTagCreated(i),i.src="https://checkout.stripe.com/checkout.js",i.async=1,this.loadPromise=function(){var s=!1,o=new Promise(function(u,l){i.onload=function(){$S=!0,Iu=!1,u(),r.onScriptLoaded()},i.onerror=function(c){US=!0,Iu=!1,l(c),r.onScriptError(c)}}),a=new Promise(function(u,l){o.then(function(){return s?l({isCanceled:!0}):u()}),o.catch(function(c){return l(s?{isCanceled:!0}:c)})});return{promise:a,cancel:function(){s=!0}}}(),this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError),document.body.appendChild(i)}}},{key:"componentDidUpdate",value:function(){Iu||this.updateStripeHandler()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.loadPromise&&this.loadPromise.cancel(),e.stripeHandler&&this.state.open&&e.stripeHandler.close()}},{key:"updateStripeHandler",value:function(){(!e.stripeHandler||this.props.reconfigureOnUpdate)&&(e.stripeHandler=StripeCheckout.configure({key:this.props.stripeKey}))}},{key:"showLoadingDialog",value:function(){if(this.props.showLoadingDialog){for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];this.props.showLoadingDialog.apply(this,i)}}},{key:"hideLoadingDialog",value:function(){if(this.props.hideLoadingDialog){for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];this.props.hideLoadingDialog.apply(this,i)}}},{key:"showStripeDialog",value:function(){this.hideLoadingDialog(),e.stripeHandler.open(this.getConfig())}},{key:"renderDefaultStripeButton",value:function(){return _o.default.createElement("button",Eu({},cg({},this.props.triggerEvent,this.onClick),{className:this.props.className,onMouseDown:this.handleOnMouseDown,onFocus:this.handleOnMouseDown,onMouseUp:this.handleOnMouseUp,onMouseOut:this.handleOnMouseUp,onBlur:this.handleOnMouseUp,style:Eu({},{overflow:"hidden",display:"inline-block",background:"linear-gradient(#28a0e5,#015e94)",border:0,padding:1,textDecoration:"none",borderRadius:5,boxShadow:"0 1px 0 rgba(0,0,0,0.2)",cursor:"pointer",visibility:"visible",userSelect:"none"},this.state.buttonActive&&{background:"#005d93"},this.props.style)}),_o.default.createElement("span",{style:Eu({},{backgroundImage:"linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",color:"#fff",fontWeight:"bold",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",textShadow:"0 -1px 0 rgba(0,0,0,0.25)",borderRadius:4},this.state.buttonActive&&{color:"#eee",boxShadow:"inset 0 1px 0 rgba(0,0,0,0.1)",backgroundImage:"linear-gradient(#008cdd,#008cdd 85%,#239adf)"},this.props.textStyle)},this.props.label))}},{key:"renderDisabledButton",value:function(){return _o.default.createElement("button",{disabled:!0,style:{background:"rgba(0,0,0,0.2)",overflow:"hidden",display:"inline-block",border:0,padding:1,textDecoration:"none",borderRadius:5,userSelect:"none"}},_o.default.createElement("span",{style:{boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",borderRadius:4,color:"#999",background:"#f8f9fa",textShadow:"0 1px 0 rgba(255,255,255,0.5)"}},this.props.label))}},{key:"render",value:function(){this.props.desktopShowModal===!0&&!this.state.open?this.onClick():this.props.desktopShowModal===!1&&this.state.open&&e.stripeHandler.close();var r=this.props.ComponentClass;return this.props.children?_o.default.createElement(r,Eu({},cg({},this.props.triggerEvent,this.onClick),{children:this.props.children})):this.props.disabled?this.renderDisabledButton():this.renderDefaultStripeButton()}}]),e}(_o.default.Component);Hp.defaultProps={className:"StripeCheckout",label:"Pay With Card",locale:"auto",ComponentClass:"span",reconfigureOnUpdate:!1,triggerEvent:"onClick"};Hp.propTypes={desktopShowModal:de.default.bool,triggerEvent:de.default.oneOf(["onClick","onTouchTap","onTouchStart"]),label:de.default.string,style:de.default.object,textStyle:de.default.object,disabled:de.default.bool,ComponentClass:de.default.string,showLoadingDialog:de.default.func,hideLoadingDialog:de.default.func,onScriptError:de.default.func,onScriptTagCreated:de.default.func,reconfigureOnUpdate:de.default.bool,stripeKey:de.default.string.isRequired,token:de.default.func.isRequired,name:de.default.string,description:de.default.string,image:de.default.string,amount:de.default.number,locale:de.default.oneOf(["auto","zh","da","nl","en","fr","de","it","ja","no","es","sv"]),currency:de.default.oneOf(["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BIF","BMD","BND","BOB","BRL","BSD","BWP","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ETB","EUR","FJD","FKP","GBP","GEL","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","ISK","JMD","JPY","KES","KGS","KHR","KMF","KRW","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","MAD","MDL","MGA","MKD","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SZL","THB","TJS","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMW"]),panelLabel:de.default.string,zipCode:de.default.bool,billingAddress:de.default.bool,shippingAddress:de.default.bool,email:de.default.string,allowRememberMe:de.default.bool,bitcoin:de.default.bool,alipay:de.default.oneOf(["auto",!0,!1]),alipayReusable:de.default.bool,opened:de.default.func,closed:de.default.func};Hp._isMounted=!1;var JK=bN.default=Hp;const ZK=({price:t})=>{const e=t*100,n="pk_test_51NQrwfIlXxtnNnAT28DBTBPxNFn2Cc034zhzV5q3kkz1lCOWlb1YUWiPuUDWeCJKgn6VGmWCNM0QIredOsannUcT00rZq0Op8Y",r=i=>{fetch("http://localhost:5000/payment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:e,token:i})}).then(s=>{if(!s.ok)throw new Error("Payment Error");if(s.status===204){console.log("Payment successful");return}return s.json()}).then(s=>{}).catch(s=>{console.error("Payment Error: ",s),alert("There was an issue with your payment!")})};return k.jsx(JK,{label:"Pay Now",name:"CRWN Clothing Ltd.",image:"https://svgshare.com/i/CUz.svg",description:`Your total is $${t}`,amount:e,panelLabel:"Pay Now",token:r,stripeKey:n})};const eH=({cartItem:t,clearItem:e,addItem:n,removeItem:r})=>{const{name:i,imageUrl:s,price:o,quantity:a}=t;return k.jsxs("div",{className:"checkout-item",children:[k.jsx("div",{className:"image-container",children:k.jsx("img",{src:s,alt:"item"})}),k.jsx("span",{className:"name",children:i}),k.jsxs("span",{className:"quantity",children:[k.jsx("div",{className:"arrow",onClick:()=>r(t),children:k.jsx("i",{className:"fa-solid fa-chevron-left"})}),k.jsx("span",{className:"value",children:a}),k.jsx("div",{className:"arrow",onClick:()=>n(t),children:k.jsx("i",{className:"fa-solid fa-chevron-right"})})]}),k.jsx("span",{className:"price",children:o}),k.jsx("div",{className:"remove-button",onClick:()=>e(t),children:" X "})]})},tH=t=>({clearItem:e=>t(Nq(e)),addItem:e=>t(tN(e)),removeItem:e=>t(xq(e))}),nH=An(null,tH)(eH);const rH=({cartItems:t,total:e})=>k.jsxs("div",{className:"checkout-page",children:[k.jsxs("div",{className:"checkout-header",children:[k.jsx("div",{className:"header-block",children:k.jsx("span",{children:"Product"})}),k.jsx("div",{className:"header-block",children:k.jsx("span",{children:"Description"})}),k.jsx("div",{className:"header-block",children:k.jsx("span",{children:"Quantity"})}),k.jsx("div",{className:"header-block",children:k.jsx("span",{children:"Price"})}),k.jsx("div",{className:"header-block",children:k.jsx("span",{children:"Remove"})})]}),t.map(n=>k.jsx(nH,{cartItem:n},n.id)),k.jsxs("div",{className:"total",children:[k.jsxs("span",{children:["TOTAL: $",e," "]}),k.jsx(ZK,{price:e}),k.jsxs("div",{className:"test-warning",children:["*please use the following test credit card for payments*",k.jsx("br",{}),"4242 4242 4242 4242 - Exp:01/25 - CVV:123"]})]})]}),iH=co({cartItems:Kp,total:pK}),sH=An(iH)(rH);const oH=({checkUserSession:t,currentUser:e})=>(b.useEffect(()=>{t()},[t]),k.jsxs(k.Fragment,{children:[k.jsx(DK,{}),k.jsxs(lR,{children:[k.jsx(_s,{path:"/",element:k.jsx(dK,{})}),k.jsx(_s,{path:"/shop/*",element:k.jsx(JW,{})}),"//Route automatically passes 3 objects to shoppage",k.jsx(_s,{exact:!0,path:"/checkout",element:k.jsx(sH,{})}),k.jsx(_s,{exact:!0,path:"/signin",element:e?k.jsx(eL,{to:"/",replace:!0}):k.jsx(UK,{})})]})]})),aH=co({currentUser:kN}),uH=t=>({checkUserSession:()=>t(hq())}),lH=An(aH,uH)(oH);dg.createRoot(document.getElementById("root")).render(k.jsx(mM,{store:iN,children:k.jsx(aL,{children:k.jsx(AR,{persistor:uG,children:k.jsx(lH,{})})})}));
