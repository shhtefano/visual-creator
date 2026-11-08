var H_=Object.defineProperty;var G_=(t,e,n)=>e in t?H_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var te=(t,e,n)=>G_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function W_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Eg={exports:{}},Hc={},Tg={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=Symbol.for("react.element"),X_=Symbol.for("react.portal"),$_=Symbol.for("react.fragment"),q_=Symbol.for("react.strict_mode"),Y_=Symbol.for("react.profiler"),K_=Symbol.for("react.provider"),Z_=Symbol.for("react.context"),Q_=Symbol.for("react.forward_ref"),J_=Symbol.for("react.suspense"),e1=Symbol.for("react.memo"),t1=Symbol.for("react.lazy"),$p=Symbol.iterator;function n1(t){return t===null||typeof t!="object"?null:(t=$p&&t[$p]||t["@@iterator"],typeof t=="function"?t:null)}var Cg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ag=Object.assign,Rg={};function Sa(t,e,n){this.props=t,this.context=e,this.refs=Rg,this.updater=n||Cg}Sa.prototype.isReactComponent={};Sa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Sa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Pg(){}Pg.prototype=Sa.prototype;function mf(t,e,n){this.props=t,this.context=e,this.refs=Rg,this.updater=n||Cg}var gf=mf.prototype=new Pg;gf.constructor=mf;Ag(gf,Sa.prototype);gf.isPureReactComponent=!0;var qp=Array.isArray,Ng=Object.prototype.hasOwnProperty,vf={current:null},Dg={key:!0,ref:!0,__self:!0,__source:!0};function Lg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Ng.call(e,i)&&!Dg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Fo,type:t,key:s,ref:a,props:r,_owner:vf.current}}function i1(t,e){return{$$typeof:Fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fo}function r1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yp=/\/+/g;function hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?r1(""+t.key):e.toString(36)}function kl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Fo:case X_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+hu(a,0):i,qp(r)?(n="",t!=null&&(n=t.replace(Yp,"$&/")+"/"),kl(r,e,n,"",function(c){return c})):r!=null&&(xf(r)&&(r=i1(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Yp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",qp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+hu(s,o);a+=kl(s,e,n,l,r)}else if(l=n1(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+hu(s,o++),a+=kl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Yo(t,e,n){if(t==null)return t;var i=[],r=0;return kl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function s1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gn={current:null},Ol={transition:null},a1={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:vf};function Ig(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:Yo,forEach:function(t,e,n){Yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yo(t,function(){e++}),e},toArray:function(t){return Yo(t,function(e){return e})||[]},only:function(t){if(!xf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=Sa;$e.Fragment=$_;$e.Profiler=Y_;$e.PureComponent=mf;$e.StrictMode=q_;$e.Suspense=J_;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a1;$e.act=Ig;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ag({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=vf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Ng.call(e,l)&&!Dg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Fo,type:t.type,key:r,ref:s,props:i,_owner:a}};$e.createContext=function(t){return t={$$typeof:Z_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:K_,_context:t},t.Consumer=t};$e.createElement=Lg;$e.createFactory=function(t){var e=Lg.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:Q_,render:t}};$e.isValidElement=xf;$e.lazy=function(t){return{$$typeof:t1,_payload:{_status:-1,_result:t},_init:s1}};$e.memo=function(t,e){return{$$typeof:e1,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=Ol.transition;Ol.transition={};try{t()}finally{Ol.transition=e}};$e.unstable_act=Ig;$e.useCallback=function(t,e){return gn.current.useCallback(t,e)};$e.useContext=function(t){return gn.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return gn.current.useDeferredValue(t)};$e.useEffect=function(t,e){return gn.current.useEffect(t,e)};$e.useId=function(){return gn.current.useId()};$e.useImperativeHandle=function(t,e,n){return gn.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return gn.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return gn.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return gn.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return gn.current.useReducer(t,e,n)};$e.useRef=function(t){return gn.current.useRef(t)};$e.useState=function(t){return gn.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return gn.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return gn.current.useTransition()};$e.version="18.3.1";Tg.exports=$e;var Ye=Tg.exports;const Bl=W_(Ye);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1=Ye,l1=Symbol.for("react.element"),c1=Symbol.for("react.fragment"),u1=Object.prototype.hasOwnProperty,d1=o1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h1={key:!0,ref:!0,__self:!0,__source:!0};function Ug(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)u1.call(e,i)&&!h1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:l1,type:t,key:s,ref:a,props:r,_owner:d1.current}}Hc.Fragment=c1;Hc.jsx=Ug;Hc.jsxs=Ug;Eg.exports=Hc;var p=Eg.exports,yd={},Fg={exports:{}},On={},kg={exports:{}},Og={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,q){var Z=L.length;L.push(q);e:for(;0<Z;){var oe=Z-1>>>1,ue=L[oe];if(0<r(ue,q))L[oe]=q,L[Z]=ue,Z=oe;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var q=L[0],Z=L.pop();if(Z!==q){L[0]=Z;e:for(var oe=0,ue=L.length,Ne=ue>>>1;oe<Ne;){var $=2*(oe+1)-1,ne=L[$],he=$+1,le=L[he];if(0>r(ne,Z))he<ue&&0>r(le,ne)?(L[oe]=le,L[he]=Z,oe=he):(L[oe]=ne,L[$]=Z,oe=$);else if(he<ue&&0>r(le,Z))L[oe]=le,L[he]=Z,oe=he;else break e}}return q}function r(L,q){var Z=L.sortIndex-q.sortIndex;return Z!==0?Z:L.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,f=null,d=3,g=!1,x=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(L){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=L)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function M(L){if(v=!1,_(L),!x)if(n(l)!==null)x=!0,X(A);else{var q=n(c);q!==null&&K(M,q.startTime-L)}}function A(L,q){x=!1,v&&(v=!1,u(R),R=-1),g=!0;var Z=d;try{for(_(q),f=n(l);f!==null&&(!(f.expirationTime>q)||L&&!N());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,d=f.priorityLevel;var ue=oe(f.expirationTime<=q);q=t.unstable_now(),typeof ue=="function"?f.callback=ue:f===n(l)&&i(l),_(q)}else i(l);f=n(l)}if(f!==null)var Ne=!0;else{var $=n(c);$!==null&&K(M,$.startTime-q),Ne=!1}return Ne}finally{f=null,d=Z,g=!1}}var T=!1,C=null,R=-1,w=5,S=-1;function N(){return!(t.unstable_now()-S<w)}function V(){if(C!==null){var L=t.unstable_now();S=L;var q=!0;try{q=C(!0,L)}finally{q?I():(T=!1,C=null)}}else T=!1}var I;if(typeof y=="function")I=function(){y(V)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,H=z.port2;z.port1.onmessage=V,I=function(){H.postMessage(null)}}else I=function(){m(V,0)};function X(L){C=L,T||(T=!0,I())}function K(L,q){R=m(function(){L(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,X(A))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var q=3;break;default:q=d}var Z=d;d=q;try{return L()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=d;d=L;try{return q()}finally{d=Z}},t.unstable_scheduleCallback=function(L,q,Z){var oe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?oe+Z:oe):Z=oe,L){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=Z+ue,L={id:h++,callback:q,priorityLevel:L,startTime:Z,expirationTime:ue,sortIndex:-1},Z>oe?(L.sortIndex=Z,e(c,L),n(l)===null&&L===n(c)&&(v?(u(R),R=-1):v=!0,K(M,Z-oe))):(L.sortIndex=ue,e(l,L),x||g||(x=!0,X(A))),L},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(L){var q=d;return function(){var Z=d;d=q;try{return L.apply(this,arguments)}finally{d=Z}}}})(Og);kg.exports=Og;var f1=kg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p1=Ye,kn=f1;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bg=new Set,go={};function ms(t,e){aa(t,e),aa(t+"Capture",e)}function aa(t,e){for(go[t]=e,t=0;t<e.length;t++)Bg.add(e[t])}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_d=Object.prototype.hasOwnProperty,m1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kp={},Zp={};function g1(t){return _d.call(Zp,t)?!0:_d.call(Kp,t)?!1:m1.test(t)?Zp[t]=!0:(Kp[t]=!0,!1)}function v1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function x1(t,e,n,i){if(e===null||typeof e>"u"||v1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Jt[t]=new vn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Jt[e]=new vn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Jt[t]=new vn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Jt[t]=new vn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Jt[t]=new vn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Jt[t]=new vn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Jt[t]=new vn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Jt[t]=new vn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Jt[t]=new vn(t,5,!1,t.toLowerCase(),null,!1,!1)});var yf=/[\-:]([a-z])/g;function _f(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yf,_f);Jt[e]=new vn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yf,_f);Jt[e]=new vn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yf,_f);Jt[e]=new vn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Jt[t]=new vn(t,1,!1,t.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Jt[t]=new vn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mf(t,e,n,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(x1(e,n,r,i)&&(n=null),i||r===null?g1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var nr=p1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ko=Symbol.for("react.element"),Fs=Symbol.for("react.portal"),ks=Symbol.for("react.fragment"),Sf=Symbol.for("react.strict_mode"),Md=Symbol.for("react.profiler"),zg=Symbol.for("react.provider"),jg=Symbol.for("react.context"),wf=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),wd=Symbol.for("react.suspense_list"),bf=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),Vg=Symbol.for("react.offscreen"),Qp=Symbol.iterator;function Na(t){return t===null||typeof t!="object"?null:(t=Qp&&t[Qp]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Object.assign,fu;function $a(t){if(fu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);fu=e&&e[1]||""}return`
`+fu+t}var pu=!1;function mu(t,e){if(!t||pu)return"";pu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{pu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$a(t):""}function y1(t){switch(t.tag){case 5:return $a(t.type);case 16:return $a("Lazy");case 13:return $a("Suspense");case 19:return $a("SuspenseList");case 0:case 2:case 15:return t=mu(t.type,!1),t;case 11:return t=mu(t.type.render,!1),t;case 1:return t=mu(t.type,!0),t;default:return""}}function bd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ks:return"Fragment";case Fs:return"Portal";case Md:return"Profiler";case Sf:return"StrictMode";case Sd:return"Suspense";case wd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jg:return(t.displayName||"Context")+".Consumer";case zg:return(t._context.displayName||"Context")+".Provider";case wf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bf:return e=t.displayName||null,e!==null?e:bd(t.type)||"Memo";case hr:e=t._payload,t=t._init;try{return bd(t(e))}catch{}}return null}function _1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bd(e);case 8:return e===Sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function M1(t){var e=Hg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zo(t){t._valueTracker||(t._valueTracker=M1(t))}function Gg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Hg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ed(t,e){var n=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wg(t,e){e=e.checked,e!=null&&Mf(t,"checked",e,!1)}function Td(t,e){Wg(t,e);var n=Rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cd(t,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function em(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cd(t,e,n){(e!=="number"||oc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qa=Array.isArray;function Ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ad(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function tm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(qa(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rr(n)}}function Xg(t,e){var n=Rr(e.value),i=Rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function nm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $g(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$g(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qo,qg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var to={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},S1=["Webkit","ms","Moz","O"];Object.keys(to).forEach(function(t){S1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),to[e]=to[t]})});function Yg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||to.hasOwnProperty(t)&&to[t]?(""+e).trim():e+"px"}function Kg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Yg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var w1=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pd(t,e){if(e){if(w1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Nd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dd=null;function Ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ld=null,Zs=null,Qs=null;function im(t){if(t=Bo(t)){if(typeof Ld!="function")throw Error(re(280));var e=t.stateNode;e&&(e=qc(e),Ld(t.stateNode,t.type,e))}}function Zg(t){Zs?Qs?Qs.push(t):Qs=[t]:Zs=t}function Qg(){if(Zs){var t=Zs,e=Qs;if(Qs=Zs=null,im(t),e)for(t=0;t<e.length;t++)im(e[t])}}function Jg(t,e){return t(e)}function ev(){}var gu=!1;function tv(t,e,n){if(gu)return t(e,n);gu=!0;try{return Jg(t,e,n)}finally{gu=!1,(Zs!==null||Qs!==null)&&(ev(),Qg())}}function xo(t,e){var n=t.stateNode;if(n===null)return null;var i=qc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Id=!1;if(Zi)try{var Da={};Object.defineProperty(Da,"passive",{get:function(){Id=!0}}),window.addEventListener("test",Da,Da),window.removeEventListener("test",Da,Da)}catch{Id=!1}function b1(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var no=!1,lc=null,cc=!1,Ud=null,E1={onError:function(t){no=!0,lc=t}};function T1(t,e,n,i,r,s,a,o,l){no=!1,lc=null,b1.apply(E1,arguments)}function C1(t,e,n,i,r,s,a,o,l){if(T1.apply(this,arguments),no){if(no){var c=lc;no=!1,lc=null}else throw Error(re(198));cc||(cc=!0,Ud=c)}}function gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function nv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function rm(t){if(gs(t)!==t)throw Error(re(188))}function A1(t){var e=t.alternate;if(!e){if(e=gs(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return rm(r),t;if(s===i)return rm(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function iv(t){return t=A1(t),t!==null?rv(t):null}function rv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rv(t);if(e!==null)return e;t=t.sibling}return null}var sv=kn.unstable_scheduleCallback,sm=kn.unstable_cancelCallback,R1=kn.unstable_shouldYield,P1=kn.unstable_requestPaint,Lt=kn.unstable_now,N1=kn.unstable_getCurrentPriorityLevel,Tf=kn.unstable_ImmediatePriority,av=kn.unstable_UserBlockingPriority,uc=kn.unstable_NormalPriority,D1=kn.unstable_LowPriority,ov=kn.unstable_IdlePriority,Gc=null,Ei=null;function L1(t){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(Gc,t,void 0,(t.current.flags&128)===128)}catch{}}var ui=Math.clz32?Math.clz32:F1,I1=Math.log,U1=Math.LN2;function F1(t){return t>>>=0,t===0?32:31-(I1(t)/U1|0)|0}var Jo=64,el=4194304;function Ya(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ya(o):(s&=a,s!==0&&(i=Ya(s)))}else a=n&~r,a!==0?i=Ya(a):s!==0&&(i=Ya(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ui(e),r=1<<n,i|=t[n],e&=~r;return i}function k1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ui(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=k1(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Fd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lv(){var t=Jo;return Jo<<=1,!(Jo&4194240)&&(Jo=64),t}function vu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ko(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ui(e),t[e]=n}function B1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ui(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Cf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ui(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ht=0;function cv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uv,Af,dv,hv,fv,kd=!1,tl=[],_r=null,Mr=null,Sr=null,yo=new Map,_o=new Map,pr=[],z1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function am(t,e){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(e.pointerId)}}function La(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Bo(e),e!==null&&Af(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function j1(t,e,n,i,r){switch(e){case"focusin":return _r=La(_r,t,e,n,i,r),!0;case"dragenter":return Mr=La(Mr,t,e,n,i,r),!0;case"mouseover":return Sr=La(Sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return yo.set(s,La(yo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,_o.set(s,La(_o.get(s)||null,t,e,n,i,r)),!0}return!1}function pv(t){var e=Jr(t.target);if(e!==null){var n=gs(e);if(n!==null){if(e=n.tag,e===13){if(e=nv(n),e!==null){t.blockedOn=e,fv(t.priority,function(){dv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Dd=i,n.target.dispatchEvent(i),Dd=null}else return e=Bo(n),e!==null&&Af(e),t.blockedOn=n,!1;e.shift()}return!0}function om(t,e,n){zl(t)&&n.delete(e)}function V1(){kd=!1,_r!==null&&zl(_r)&&(_r=null),Mr!==null&&zl(Mr)&&(Mr=null),Sr!==null&&zl(Sr)&&(Sr=null),yo.forEach(om),_o.forEach(om)}function Ia(t,e){t.blockedOn===e&&(t.blockedOn=null,kd||(kd=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,V1)))}function Mo(t){function e(r){return Ia(r,t)}if(0<tl.length){Ia(tl[0],t);for(var n=1;n<tl.length;n++){var i=tl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(_r!==null&&Ia(_r,t),Mr!==null&&Ia(Mr,t),Sr!==null&&Ia(Sr,t),yo.forEach(e),_o.forEach(e),n=0;n<pr.length;n++)i=pr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)pv(n),n.blockedOn===null&&pr.shift()}var Js=nr.ReactCurrentBatchConfig,hc=!0;function H1(t,e,n,i){var r=ht,s=Js.transition;Js.transition=null;try{ht=1,Rf(t,e,n,i)}finally{ht=r,Js.transition=s}}function G1(t,e,n,i){var r=ht,s=Js.transition;Js.transition=null;try{ht=4,Rf(t,e,n,i)}finally{ht=r,Js.transition=s}}function Rf(t,e,n,i){if(hc){var r=Od(t,e,n,i);if(r===null)Cu(t,e,i,fc,n),am(t,i);else if(j1(r,t,e,n,i))i.stopPropagation();else if(am(t,i),e&4&&-1<z1.indexOf(t)){for(;r!==null;){var s=Bo(r);if(s!==null&&uv(s),s=Od(t,e,n,i),s===null&&Cu(t,e,i,fc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Cu(t,e,i,null,n)}}var fc=null;function Od(t,e,n,i){if(fc=null,t=Ef(i),t=Jr(t),t!==null)if(e=gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=nv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fc=t,null}function mv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N1()){case Tf:return 1;case av:return 4;case uc:case D1:return 16;case ov:return 536870912;default:return 16}default:return 16}}var vr=null,Pf=null,jl=null;function gv(){if(jl)return jl;var t,e=Pf,n=e.length,i,r="value"in vr?vr.value:vr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return jl=r.slice(t,1<i?1-i:void 0)}function Vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function lm(){return!1}function Bn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?nl:lm,this.isPropagationStopped=lm,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),e}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nf=Bn(wa),Oo=Rt({},wa,{view:0,detail:0}),W1=Bn(Oo),xu,yu,Ua,Wc=Rt({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Df,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ua&&(Ua&&t.type==="mousemove"?(xu=t.screenX-Ua.screenX,yu=t.screenY-Ua.screenY):yu=xu=0,Ua=t),xu)},movementY:function(t){return"movementY"in t?t.movementY:yu}}),cm=Bn(Wc),X1=Rt({},Wc,{dataTransfer:0}),$1=Bn(X1),q1=Rt({},Oo,{relatedTarget:0}),_u=Bn(q1),Y1=Rt({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),K1=Bn(Y1),Z1=Rt({},wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Q1=Bn(Z1),J1=Rt({},wa,{data:0}),um=Bn(J1),eM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nM[t])?!!e[t]:!1}function Df(){return iM}var rM=Rt({},Oo,{key:function(t){if(t.key){var e=eM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Df,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sM=Bn(rM),aM=Rt({},Wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dm=Bn(aM),oM=Rt({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Df}),lM=Bn(oM),cM=Rt({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),uM=Bn(cM),dM=Rt({},Wc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hM=Bn(dM),fM=[9,13,27,32],Lf=Zi&&"CompositionEvent"in window,io=null;Zi&&"documentMode"in document&&(io=document.documentMode);var pM=Zi&&"TextEvent"in window&&!io,vv=Zi&&(!Lf||io&&8<io&&11>=io),hm=" ",fm=!1;function xv(t,e){switch(t){case"keyup":return fM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function mM(t,e){switch(t){case"compositionend":return yv(e);case"keypress":return e.which!==32?null:(fm=!0,hm);case"textInput":return t=e.data,t===hm&&fm?null:t;default:return null}}function gM(t,e){if(Os)return t==="compositionend"||!Lf&&xv(t,e)?(t=gv(),jl=Pf=vr=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vv&&e.locale!=="ko"?null:e.data;default:return null}}var vM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vM[t.type]:e==="textarea"}function _v(t,e,n,i){Zg(i),e=pc(e,"onChange"),0<e.length&&(n=new Nf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ro=null,So=null;function xM(t){Nv(t,0)}function Xc(t){var e=js(t);if(Gg(e))return t}function yM(t,e){if(t==="change")return e}var Mv=!1;if(Zi){var Mu;if(Zi){var Su="oninput"in document;if(!Su){var mm=document.createElement("div");mm.setAttribute("oninput","return;"),Su=typeof mm.oninput=="function"}Mu=Su}else Mu=!1;Mv=Mu&&(!document.documentMode||9<document.documentMode)}function gm(){ro&&(ro.detachEvent("onpropertychange",Sv),So=ro=null)}function Sv(t){if(t.propertyName==="value"&&Xc(So)){var e=[];_v(e,So,t,Ef(t)),tv(xM,e)}}function _M(t,e,n){t==="focusin"?(gm(),ro=e,So=n,ro.attachEvent("onpropertychange",Sv)):t==="focusout"&&gm()}function MM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xc(So)}function SM(t,e){if(t==="click")return Xc(e)}function wM(t,e){if(t==="input"||t==="change")return Xc(e)}function bM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pi=typeof Object.is=="function"?Object.is:bM;function wo(t,e){if(pi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!_d.call(e,r)||!pi(t[r],e[r]))return!1}return!0}function vm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xm(t,e){var n=vm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vm(n)}}function wv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bv(){for(var t=window,e=oc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=oc(t.document)}return e}function If(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function EM(t){var e=bv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&wv(n.ownerDocument.documentElement,n)){if(i!==null&&If(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=xm(n,s);var a=xm(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var TM=Zi&&"documentMode"in document&&11>=document.documentMode,Bs=null,Bd=null,so=null,zd=!1;function ym(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zd||Bs==null||Bs!==oc(i)||(i=Bs,"selectionStart"in i&&If(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),so&&wo(so,i)||(so=i,i=pc(Bd,"onSelect"),0<i.length&&(e=new Nf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Bs)))}function il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zs={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},wu={},Ev={};Zi&&(Ev=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function $c(t){if(wu[t])return wu[t];if(!zs[t])return t;var e=zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ev)return wu[t]=e[n];return t}var Tv=$c("animationend"),Cv=$c("animationiteration"),Av=$c("animationstart"),Rv=$c("transitionend"),Pv=new Map,_m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){Pv.set(t,e),ms(e,[t])}for(var bu=0;bu<_m.length;bu++){var Eu=_m[bu],CM=Eu.toLowerCase(),AM=Eu[0].toUpperCase()+Eu.slice(1);Dr(CM,"on"+AM)}Dr(Tv,"onAnimationEnd");Dr(Cv,"onAnimationIteration");Dr(Av,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(Rv,"onTransitionEnd");aa("onMouseEnter",["mouseout","mouseover"]);aa("onMouseLeave",["mouseout","mouseover"]);aa("onPointerEnter",["pointerout","pointerover"]);aa("onPointerLeave",["pointerout","pointerover"]);ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ka));function Mm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,C1(i,e,void 0,t),t.currentTarget=null}function Nv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Mm(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Mm(r,o,c),s=l}}}if(cc)throw t=Ud,cc=!1,Ud=null,t}function _t(t,e){var n=e[Wd];n===void 0&&(n=e[Wd]=new Set);var i=t+"__bubble";n.has(i)||(Dv(e,t,2,!1),n.add(i))}function Tu(t,e,n){var i=0;e&&(i|=4),Dv(n,t,i,e)}var rl="_reactListening"+Math.random().toString(36).slice(2);function bo(t){if(!t[rl]){t[rl]=!0,Bg.forEach(function(n){n!=="selectionchange"&&(RM.has(n)||Tu(n,!1,t),Tu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rl]||(e[rl]=!0,Tu("selectionchange",!1,e))}}function Dv(t,e,n,i){switch(mv(e)){case 1:var r=H1;break;case 4:r=G1;break;default:r=Rf}n=r.bind(null,e,n,t),r=void 0,!Id||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Cu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Jr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}tv(function(){var c=s,h=Ef(n),f=[];e:{var d=Pv.get(t);if(d!==void 0){var g=Nf,x=t;switch(t){case"keypress":if(Vl(n)===0)break e;case"keydown":case"keyup":g=sM;break;case"focusin":x="focus",g=_u;break;case"focusout":x="blur",g=_u;break;case"beforeblur":case"afterblur":g=_u;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=$1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=lM;break;case Tv:case Cv:case Av:g=K1;break;case Rv:g=uM;break;case"scroll":g=W1;break;case"wheel":g=hM;break;case"copy":case"cut":case"paste":g=Q1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=dm}var v=(e&4)!==0,m=!v&&t==="scroll",u=v?d!==null?d+"Capture":null:d;v=[];for(var y=c,_;y!==null;){_=y;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,u!==null&&(M=xo(y,u),M!=null&&v.push(Eo(y,M,_)))),m)break;y=y.return}0<v.length&&(d=new g(d,x,null,n,h),f.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Dd&&(x=n.relatedTarget||n.fromElement)&&(Jr(x)||x[Qi]))break e;if((g||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?Jr(x):null,x!==null&&(m=gs(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(v=cm,M="onMouseLeave",u="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(v=dm,M="onPointerLeave",u="onPointerEnter",y="pointer"),m=g==null?d:js(g),_=x==null?d:js(x),d=new v(M,y+"leave",g,n,h),d.target=m,d.relatedTarget=_,M=null,Jr(h)===c&&(v=new v(u,y+"enter",x,n,h),v.target=_,v.relatedTarget=m,M=v),m=M,g&&x)t:{for(v=g,u=x,y=0,_=v;_;_=ys(_))y++;for(_=0,M=u;M;M=ys(M))_++;for(;0<y-_;)v=ys(v),y--;for(;0<_-y;)u=ys(u),_--;for(;y--;){if(v===u||u!==null&&v===u.alternate)break t;v=ys(v),u=ys(u)}v=null}else v=null;g!==null&&Sm(f,d,g,v,!1),x!==null&&m!==null&&Sm(f,m,x,v,!0)}}e:{if(d=c?js(c):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var A=yM;else if(pm(d))if(Mv)A=wM;else{A=MM;var T=_M}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=SM);if(A&&(A=A(t,c))){_v(f,A,n,h);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Cd(d,"number",d.value)}switch(T=c?js(c):window,t){case"focusin":(pm(T)||T.contentEditable==="true")&&(Bs=T,Bd=c,so=null);break;case"focusout":so=Bd=Bs=null;break;case"mousedown":zd=!0;break;case"contextmenu":case"mouseup":case"dragend":zd=!1,ym(f,n,h);break;case"selectionchange":if(TM)break;case"keydown":case"keyup":ym(f,n,h)}var C;if(Lf)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Os?xv(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(vv&&n.locale!=="ko"&&(Os||R!=="onCompositionStart"?R==="onCompositionEnd"&&Os&&(C=gv()):(vr=h,Pf="value"in vr?vr.value:vr.textContent,Os=!0)),T=pc(c,R),0<T.length&&(R=new um(R,t,null,n,h),f.push({event:R,listeners:T}),C?R.data=C:(C=yv(n),C!==null&&(R.data=C)))),(C=pM?mM(t,n):gM(t,n))&&(c=pc(c,"onBeforeInput"),0<c.length&&(h=new um("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=C))}Nv(f,e)})}function Eo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=xo(t,n),s!=null&&i.unshift(Eo(t,s,r)),s=xo(t,e),s!=null&&i.push(Eo(t,s,r))),t=t.return}return i}function ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sm(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=xo(n,s),l!=null&&a.unshift(Eo(n,l,o))):r||(l=xo(n,s),l!=null&&a.push(Eo(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var PM=/\r\n?/g,NM=/\u0000|\uFFFD/g;function wm(t){return(typeof t=="string"?t:""+t).replace(PM,`
`).replace(NM,"")}function sl(t,e,n){if(e=wm(e),wm(t)!==e&&n)throw Error(re(425))}function mc(){}var jd=null,Vd=null;function Hd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gd=typeof setTimeout=="function"?setTimeout:void 0,DM=typeof clearTimeout=="function"?clearTimeout:void 0,bm=typeof Promise=="function"?Promise:void 0,LM=typeof queueMicrotask=="function"?queueMicrotask:typeof bm<"u"?function(t){return bm.resolve(null).then(t).catch(IM)}:Gd;function IM(t){setTimeout(function(){throw t})}function Au(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Mo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Mo(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Em(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ba=Math.random().toString(36).slice(2),Mi="__reactFiber$"+ba,To="__reactProps$"+ba,Qi="__reactContainer$"+ba,Wd="__reactEvents$"+ba,UM="__reactListeners$"+ba,FM="__reactHandles$"+ba;function Jr(t){var e=t[Mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qi]||n[Mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Em(t);t!==null;){if(n=t[Mi])return n;t=Em(t)}return e}t=n,n=t.parentNode}return null}function Bo(t){return t=t[Mi]||t[Qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function qc(t){return t[To]||null}var Xd=[],Vs=-1;function Lr(t){return{current:t}}function Mt(t){0>Vs||(t.current=Xd[Vs],Xd[Vs]=null,Vs--)}function gt(t,e){Vs++,Xd[Vs]=t.current,t.current=e}var Pr={},cn=Lr(Pr),bn=Lr(!1),ls=Pr;function oa(t,e){var n=t.type.contextTypes;if(!n)return Pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function En(t){return t=t.childContextTypes,t!=null}function gc(){Mt(bn),Mt(cn)}function Tm(t,e,n){if(cn.current!==Pr)throw Error(re(168));gt(cn,e),gt(bn,n)}function Lv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,_1(t)||"Unknown",r));return Rt({},n,i)}function vc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,ls=cn.current,gt(cn,t),gt(bn,bn.current),!0}function Cm(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Lv(t,e,ls),i.__reactInternalMemoizedMergedChildContext=t,Mt(bn),Mt(cn),gt(cn,t)):Mt(bn),gt(bn,n)}var zi=null,Yc=!1,Ru=!1;function Iv(t){zi===null?zi=[t]:zi.push(t)}function kM(t){Yc=!0,Iv(t)}function Ir(){if(!Ru&&zi!==null){Ru=!0;var t=0,e=ht;try{var n=zi;for(ht=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}zi=null,Yc=!1}catch(r){throw zi!==null&&(zi=zi.slice(t+1)),sv(Tf,Ir),r}finally{ht=e,Ru=!1}}return null}var Hs=[],Gs=0,xc=null,yc=0,Wn=[],Xn=0,cs=null,ji=1,Vi="";function Hr(t,e){Hs[Gs++]=yc,Hs[Gs++]=xc,xc=t,yc=e}function Uv(t,e,n){Wn[Xn++]=ji,Wn[Xn++]=Vi,Wn[Xn++]=cs,cs=t;var i=ji;t=Vi;var r=32-ui(i)-1;i&=~(1<<r),n+=1;var s=32-ui(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ji=1<<32-ui(e)+r|n<<r|i,Vi=s+t}else ji=1<<s|n<<r|i,Vi=t}function Uf(t){t.return!==null&&(Hr(t,1),Uv(t,1,0))}function Ff(t){for(;t===xc;)xc=Hs[--Gs],Hs[Gs]=null,yc=Hs[--Gs],Hs[Gs]=null;for(;t===cs;)cs=Wn[--Xn],Wn[Xn]=null,Vi=Wn[--Xn],Wn[Xn]=null,ji=Wn[--Xn],Wn[Xn]=null}var Fn=null,Un=null,bt=!1,ai=null;function Fv(t,e){var n=$n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Am(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Fn=t,Un=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Fn=t,Un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=cs!==null?{id:ji,overflow:Vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Fn=t,Un=null,!0):!1;default:return!1}}function $d(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qd(t){if(bt){var e=Un;if(e){var n=e;if(!Am(t,e)){if($d(t))throw Error(re(418));e=wr(n.nextSibling);var i=Fn;e&&Am(t,e)?Fv(i,n):(t.flags=t.flags&-4097|2,bt=!1,Fn=t)}}else{if($d(t))throw Error(re(418));t.flags=t.flags&-4097|2,bt=!1,Fn=t}}}function Rm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function al(t){if(t!==Fn)return!1;if(!bt)return Rm(t),bt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hd(t.type,t.memoizedProps)),e&&(e=Un)){if($d(t))throw kv(),Error(re(418));for(;e;)Fv(t,e),e=wr(e.nextSibling)}if(Rm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Un=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Un=null}}else Un=Fn?wr(t.stateNode.nextSibling):null;return!0}function kv(){for(var t=Un;t;)t=wr(t.nextSibling)}function la(){Un=Fn=null,bt=!1}function kf(t){ai===null?ai=[t]:ai.push(t)}var OM=nr.ReactCurrentBatchConfig;function Fa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Pm(t){var e=t._init;return e(t._payload)}function Ov(t){function e(u,y){if(t){var _=u.deletions;_===null?(u.deletions=[y],u.flags|=16):_.push(y)}}function n(u,y){if(!t)return null;for(;y!==null;)e(u,y),y=y.sibling;return null}function i(u,y){for(u=new Map;y!==null;)y.key!==null?u.set(y.key,y):u.set(y.index,y),y=y.sibling;return u}function r(u,y){return u=Cr(u,y),u.index=0,u.sibling=null,u}function s(u,y,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<y?(u.flags|=2,y):_):(u.flags|=2,y)):(u.flags|=1048576,y)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,y,_,M){return y===null||y.tag!==6?(y=Fu(_,u.mode,M),y.return=u,y):(y=r(y,_),y.return=u,y)}function l(u,y,_,M){var A=_.type;return A===ks?h(u,y,_.props.children,M,_.key):y!==null&&(y.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===hr&&Pm(A)===y.type)?(M=r(y,_.props),M.ref=Fa(u,y,_),M.return=u,M):(M=Yl(_.type,_.key,_.props,null,u.mode,M),M.ref=Fa(u,y,_),M.return=u,M)}function c(u,y,_,M){return y===null||y.tag!==4||y.stateNode.containerInfo!==_.containerInfo||y.stateNode.implementation!==_.implementation?(y=ku(_,u.mode,M),y.return=u,y):(y=r(y,_.children||[]),y.return=u,y)}function h(u,y,_,M,A){return y===null||y.tag!==7?(y=as(_,u.mode,M,A),y.return=u,y):(y=r(y,_),y.return=u,y)}function f(u,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Fu(""+y,u.mode,_),y.return=u,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ko:return _=Yl(y.type,y.key,y.props,null,u.mode,_),_.ref=Fa(u,null,y),_.return=u,_;case Fs:return y=ku(y,u.mode,_),y.return=u,y;case hr:var M=y._init;return f(u,M(y._payload),_)}if(qa(y)||Na(y))return y=as(y,u.mode,_,null),y.return=u,y;ol(u,y)}return null}function d(u,y,_,M){var A=y!==null?y.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:o(u,y,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ko:return _.key===A?l(u,y,_,M):null;case Fs:return _.key===A?c(u,y,_,M):null;case hr:return A=_._init,d(u,y,A(_._payload),M)}if(qa(_)||Na(_))return A!==null?null:h(u,y,_,M,null);ol(u,_)}return null}function g(u,y,_,M,A){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(_)||null,o(y,u,""+M,A);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ko:return u=u.get(M.key===null?_:M.key)||null,l(y,u,M,A);case Fs:return u=u.get(M.key===null?_:M.key)||null,c(y,u,M,A);case hr:var T=M._init;return g(u,y,_,T(M._payload),A)}if(qa(M)||Na(M))return u=u.get(_)||null,h(y,u,M,A,null);ol(y,M)}return null}function x(u,y,_,M){for(var A=null,T=null,C=y,R=y=0,w=null;C!==null&&R<_.length;R++){C.index>R?(w=C,C=null):w=C.sibling;var S=d(u,C,_[R],M);if(S===null){C===null&&(C=w);break}t&&C&&S.alternate===null&&e(u,C),y=s(S,y,R),T===null?A=S:T.sibling=S,T=S,C=w}if(R===_.length)return n(u,C),bt&&Hr(u,R),A;if(C===null){for(;R<_.length;R++)C=f(u,_[R],M),C!==null&&(y=s(C,y,R),T===null?A=C:T.sibling=C,T=C);return bt&&Hr(u,R),A}for(C=i(u,C);R<_.length;R++)w=g(C,u,R,_[R],M),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?R:w.key),y=s(w,y,R),T===null?A=w:T.sibling=w,T=w);return t&&C.forEach(function(N){return e(u,N)}),bt&&Hr(u,R),A}function v(u,y,_,M){var A=Na(_);if(typeof A!="function")throw Error(re(150));if(_=A.call(_),_==null)throw Error(re(151));for(var T=A=null,C=y,R=y=0,w=null,S=_.next();C!==null&&!S.done;R++,S=_.next()){C.index>R?(w=C,C=null):w=C.sibling;var N=d(u,C,S.value,M);if(N===null){C===null&&(C=w);break}t&&C&&N.alternate===null&&e(u,C),y=s(N,y,R),T===null?A=N:T.sibling=N,T=N,C=w}if(S.done)return n(u,C),bt&&Hr(u,R),A;if(C===null){for(;!S.done;R++,S=_.next())S=f(u,S.value,M),S!==null&&(y=s(S,y,R),T===null?A=S:T.sibling=S,T=S);return bt&&Hr(u,R),A}for(C=i(u,C);!S.done;R++,S=_.next())S=g(C,u,R,S.value,M),S!==null&&(t&&S.alternate!==null&&C.delete(S.key===null?R:S.key),y=s(S,y,R),T===null?A=S:T.sibling=S,T=S);return t&&C.forEach(function(V){return e(u,V)}),bt&&Hr(u,R),A}function m(u,y,_,M){if(typeof _=="object"&&_!==null&&_.type===ks&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ko:e:{for(var A=_.key,T=y;T!==null;){if(T.key===A){if(A=_.type,A===ks){if(T.tag===7){n(u,T.sibling),y=r(T,_.props.children),y.return=u,u=y;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===hr&&Pm(A)===T.type){n(u,T.sibling),y=r(T,_.props),y.ref=Fa(u,T,_),y.return=u,u=y;break e}n(u,T);break}else e(u,T);T=T.sibling}_.type===ks?(y=as(_.props.children,u.mode,M,_.key),y.return=u,u=y):(M=Yl(_.type,_.key,_.props,null,u.mode,M),M.ref=Fa(u,y,_),M.return=u,u=M)}return a(u);case Fs:e:{for(T=_.key;y!==null;){if(y.key===T)if(y.tag===4&&y.stateNode.containerInfo===_.containerInfo&&y.stateNode.implementation===_.implementation){n(u,y.sibling),y=r(y,_.children||[]),y.return=u,u=y;break e}else{n(u,y);break}else e(u,y);y=y.sibling}y=ku(_,u.mode,M),y.return=u,u=y}return a(u);case hr:return T=_._init,m(u,y,T(_._payload),M)}if(qa(_))return x(u,y,_,M);if(Na(_))return v(u,y,_,M);ol(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,y!==null&&y.tag===6?(n(u,y.sibling),y=r(y,_),y.return=u,u=y):(n(u,y),y=Fu(_,u.mode,M),y.return=u,u=y),a(u)):n(u,y)}return m}var ca=Ov(!0),Bv=Ov(!1),_c=Lr(null),Mc=null,Ws=null,Of=null;function Bf(){Of=Ws=Mc=null}function zf(t){var e=_c.current;Mt(_c),t._currentValue=e}function Yd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ea(t,e){Mc=t,Of=Ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Sn=!0),t.firstContext=null)}function Yn(t){var e=t._currentValue;if(Of!==t)if(t={context:t,memoizedValue:e,next:null},Ws===null){if(Mc===null)throw Error(re(308));Ws=t,Mc.dependencies={lanes:0,firstContext:t}}else Ws=Ws.next=t;return e}var es=null;function jf(t){es===null?es=[t]:es.push(t)}function zv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,jf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ji(t,i)}function Ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function Vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function br(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ji(t,n)}return r=i.interleaved,r===null?(e.next=e,jf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ji(t,n)}function Hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Cf(t,n)}}function Nm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Sc(t,e,n,i){var r=t.updateQueue;fr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,h=c=l=null,o=s;do{var d=o.lane,g=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,v=o;switch(d=e,g=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){f=x.call(g,f,d);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,d=typeof x=="function"?x.call(g,f,d):x,d==null)break e;f=Rt({},f,d);break e;case 2:fr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else g={eventTime:g,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=g,l=f):h=h.next=g,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ds|=a,t.lanes=a,t.memoizedState=f}}function Dm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var zo={},Ti=Lr(zo),Co=Lr(zo),Ao=Lr(zo);function ts(t){if(t===zo)throw Error(re(174));return t}function Hf(t,e){switch(gt(Ao,e),gt(Co,t),gt(Ti,zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rd(e,t)}Mt(Ti),gt(Ti,e)}function ua(){Mt(Ti),Mt(Co),Mt(Ao)}function Vv(t){ts(Ao.current);var e=ts(Ti.current),n=Rd(e,t.type);e!==n&&(gt(Co,t),gt(Ti,n))}function Gf(t){Co.current===t&&(Mt(Ti),Mt(Co))}var Ct=Lr(0);function wc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pu=[];function Wf(){for(var t=0;t<Pu.length;t++)Pu[t]._workInProgressVersionPrimary=null;Pu.length=0}var Gl=nr.ReactCurrentDispatcher,Nu=nr.ReactCurrentBatchConfig,us=0,At=null,kt=null,Gt=null,bc=!1,ao=!1,Ro=0,BM=0;function tn(){throw Error(re(321))}function Xf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pi(t[n],e[n]))return!1;return!0}function $f(t,e,n,i,r,s){if(us=s,At=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Gl.current=t===null||t.memoizedState===null?HM:GM,t=n(i,r),ao){s=0;do{if(ao=!1,Ro=0,25<=s)throw Error(re(301));s+=1,Gt=kt=null,e.updateQueue=null,Gl.current=WM,t=n(i,r)}while(ao)}if(Gl.current=Ec,e=kt!==null&&kt.next!==null,us=0,Gt=kt=At=null,bc=!1,e)throw Error(re(300));return t}function qf(){var t=Ro!==0;return Ro=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?At.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Kn(){if(kt===null){var t=At.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=Gt===null?At.memoizedState:Gt.next;if(e!==null)Gt=e,kt=t;else{if(t===null)throw Error(re(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Gt===null?At.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function Po(t,e){return typeof e=="function"?e(t):e}function Du(t){var e=Kn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((us&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,At.lanes|=h,ds|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,pi(i,e.memoizedState)||(Sn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,At.lanes|=s,ds|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lu(t){var e=Kn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);pi(s,e.memoizedState)||(Sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Hv(){}function Gv(t,e){var n=At,i=Kn(),r=e(),s=!pi(i.memoizedState,r);if(s&&(i.memoizedState=r,Sn=!0),i=i.queue,Yf($v.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,No(9,Xv.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(re(349));us&30||Wv(n,e,r)}return r}function Wv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Xv(t,e,n,i){e.value=n,e.getSnapshot=i,qv(e)&&Yv(t)}function $v(t,e,n){return n(function(){qv(e)&&Yv(t)})}function qv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pi(t,n)}catch{return!0}}function Yv(t){var e=Ji(t,1);e!==null&&di(e,t,1,-1)}function Lm(t){var e=xi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:t},e.queue=t,t=t.dispatch=VM.bind(null,At,t),[e.memoizedState,t]}function No(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Kv(){return Kn().memoizedState}function Wl(t,e,n,i){var r=xi();At.flags|=t,r.memoizedState=No(1|e,n,void 0,i===void 0?null:i)}function Kc(t,e,n,i){var r=Kn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var a=kt.memoizedState;if(s=a.destroy,i!==null&&Xf(i,a.deps)){r.memoizedState=No(e,n,s,i);return}}At.flags|=t,r.memoizedState=No(1|e,n,s,i)}function Im(t,e){return Wl(8390656,8,t,e)}function Yf(t,e){return Kc(2048,8,t,e)}function Zv(t,e){return Kc(4,2,t,e)}function Qv(t,e){return Kc(4,4,t,e)}function Jv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ex(t,e,n){return n=n!=null?n.concat([t]):null,Kc(4,4,Jv.bind(null,e,t),n)}function Kf(){}function tx(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function nx(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ix(t,e,n){return us&21?(pi(n,e)||(n=lv(),At.lanes|=n,ds|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Sn=!0),t.memoizedState=n)}function zM(t,e){var n=ht;ht=n!==0&&4>n?n:4,t(!0);var i=Nu.transition;Nu.transition={};try{t(!1),e()}finally{ht=n,Nu.transition=i}}function rx(){return Kn().memoizedState}function jM(t,e,n){var i=Tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},sx(t))ax(e,n);else if(n=zv(t,e,n,i),n!==null){var r=fn();di(n,t,i,r),ox(n,e,i)}}function VM(t,e,n){var i=Tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(sx(t))ax(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,pi(o,a)){var l=e.interleaved;l===null?(r.next=r,jf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=zv(t,e,r,i),n!==null&&(r=fn(),di(n,t,i,r),ox(n,e,i))}}function sx(t){var e=t.alternate;return t===At||e!==null&&e===At}function ax(t,e){ao=bc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ox(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Cf(t,n)}}var Ec={readContext:Yn,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},HM={readContext:Yn,useCallback:function(t,e){return xi().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:Im,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4194308,4,Jv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wl(4,2,t,e)},useMemo:function(t,e){var n=xi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=xi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=jM.bind(null,At,t),[i.memoizedState,t]},useRef:function(t){var e=xi();return t={current:t},e.memoizedState=t},useState:Lm,useDebugValue:Kf,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=Lm(!1),e=t[0];return t=zM.bind(null,t[1]),xi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=At,r=xi();if(bt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Xt===null)throw Error(re(349));us&30||Wv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Im($v.bind(null,i,s,t),[t]),i.flags|=2048,No(9,Xv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=xi(),e=Xt.identifierPrefix;if(bt){var n=Vi,i=ji;n=(i&~(1<<32-ui(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ro++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=BM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},GM={readContext:Yn,useCallback:tx,useContext:Yn,useEffect:Yf,useImperativeHandle:ex,useInsertionEffect:Zv,useLayoutEffect:Qv,useMemo:nx,useReducer:Du,useRef:Kv,useState:function(){return Du(Po)},useDebugValue:Kf,useDeferredValue:function(t){var e=Kn();return ix(e,kt.memoizedState,t)},useTransition:function(){var t=Du(Po)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:Hv,useSyncExternalStore:Gv,useId:rx,unstable_isNewReconciler:!1},WM={readContext:Yn,useCallback:tx,useContext:Yn,useEffect:Yf,useImperativeHandle:ex,useInsertionEffect:Zv,useLayoutEffect:Qv,useMemo:nx,useReducer:Lu,useRef:Kv,useState:function(){return Lu(Po)},useDebugValue:Kf,useDeferredValue:function(t){var e=Kn();return kt===null?e.memoizedState=t:ix(e,kt.memoizedState,t)},useTransition:function(){var t=Lu(Po)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:Hv,useSyncExternalStore:Gv,useId:rx,unstable_isNewReconciler:!1};function ii(t,e){if(t&&t.defaultProps){e=Rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Kd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zc={isMounted:function(t){return(t=t._reactInternals)?gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=Tr(t),s=Wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(di(e,t,r,i),Hl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=Tr(t),s=Wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(di(e,t,r,i),Hl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=Tr(t),r=Wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=br(t,r,i),e!==null&&(di(e,t,i,n),Hl(e,t,i))}};function Um(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!wo(n,i)||!wo(r,s):!0}function lx(t,e,n){var i=!1,r=Pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yn(s):(r=En(e)?ls:cn.current,i=e.contextTypes,s=(i=i!=null)?oa(t,r):Pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Fm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Zc.enqueueReplaceState(e,e.state,null)}function Zd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Vf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Yn(s):(s=En(e)?ls:cn.current,r.context=oa(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Zc.enqueueReplaceState(r,r.state,null),Sc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function da(t,e){try{var n="",i=e;do n+=y1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Iu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var XM=typeof WeakMap=="function"?WeakMap:Map;function cx(t,e,n){n=Wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Cc||(Cc=!0,lh=i),Qd(t,e)},n}function ux(t,e,n){n=Wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Qd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qd(t,e),typeof i!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function km(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new XM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=aS.bind(null,t,e,n),e.then(t,t))}function Om(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wi(-1,1),e.tag=2,br(n,e,1))),n.lanes|=1),t)}var $M=nr.ReactCurrentOwner,Sn=!1;function dn(t,e,n,i){e.child=t===null?Bv(e,null,n,i):ca(e,t.child,n,i)}function zm(t,e,n,i,r){n=n.render;var s=e.ref;return ea(e,r),i=$f(t,e,n,i,s,r),n=qf(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(bt&&n&&Uf(e),e.flags|=1,dn(t,e,i,r),e.child)}function jm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!rp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dx(t,e,s,i,r)):(t=Yl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:wo,n(a,i)&&t.ref===e.ref)return er(t,e,r)}return e.flags|=1,t=Cr(s,i),t.ref=e.ref,t.return=e,e.child=t}function dx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(wo(s,i)&&t.ref===e.ref)if(Sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Sn=!0);else return e.lanes=t.lanes,er(t,e,r)}return Jd(t,e,n,i,r)}function hx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt($s,Dn),Dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,gt($s,Dn),Dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,gt($s,Dn),Dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,gt($s,Dn),Dn|=i;return dn(t,e,r,n),e.child}function fx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jd(t,e,n,i,r){var s=En(n)?ls:cn.current;return s=oa(e,s),ea(e,r),n=$f(t,e,n,i,s,r),i=qf(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(bt&&i&&Uf(e),e.flags|=1,dn(t,e,n,r),e.child)}function Vm(t,e,n,i,r){if(En(n)){var s=!0;vc(e)}else s=!1;if(ea(e,r),e.stateNode===null)Xl(t,e),lx(e,n,i),Zd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yn(c):(c=En(n)?ls:cn.current,c=oa(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Fm(e,a,i,c),fr=!1;var d=e.memoizedState;a.state=d,Sc(e,i,a,r),l=e.memoizedState,o!==i||d!==l||bn.current||fr?(typeof h=="function"&&(Kd(e,n,h,i),l=e.memoizedState),(o=fr||Um(e,n,o,i,d,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,jv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:ii(e.type,o),a.props=c,f=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yn(l):(l=En(n)?ls:cn.current,l=oa(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||d!==l)&&Fm(e,a,i,l),fr=!1,d=e.memoizedState,a.state=d,Sc(e,i,a,r);var x=e.memoizedState;o!==f||d!==x||bn.current||fr?(typeof g=="function"&&(Kd(e,n,g,i),x=e.memoizedState),(c=fr||Um(e,n,c,i,d,x,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return eh(t,e,n,i,s,r)}function eh(t,e,n,i,r,s){fx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Cm(e,n,!1),er(t,e,s);i=e.stateNode,$M.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ca(e,t.child,null,s),e.child=ca(e,null,o,s)):dn(t,e,o,s),e.memoizedState=i.state,r&&Cm(e,n,!0),e.child}function px(t){var e=t.stateNode;e.pendingContext?Tm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tm(t,e.context,!1),Hf(t,e.containerInfo)}function Hm(t,e,n,i,r){return la(),kf(r),e.flags|=256,dn(t,e,n,i),e.child}var th={dehydrated:null,treeContext:null,retryLane:0};function nh(t){return{baseLanes:t,cachePool:null,transitions:null}}function mx(t,e,n){var i=e.pendingProps,r=Ct.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),gt(Ct,r&1),t===null)return qd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=eu(a,i,0,null),t=as(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nh(n),e.memoizedState=th,t):Zf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return qM(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Cr(o,s):(s=as(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?nh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=th,i}return s=t.child,t=s.sibling,i=Cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Zf(t,e){return e=eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ll(t,e,n,i){return i!==null&&kf(i),ca(e,t.child,null,n),t=Zf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qM(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Iu(Error(re(422))),ll(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=eu({mode:"visible",children:i.children},r,0,null),s=as(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ca(e,t.child,null,a),e.child.memoizedState=nh(a),e.memoizedState=th,s);if(!(e.mode&1))return ll(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=Iu(s,i,void 0),ll(t,e,a,i)}if(o=(a&t.childLanes)!==0,Sn||o){if(i=Xt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ji(t,r),di(i,t,r,-1))}return ip(),i=Iu(Error(re(421))),ll(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=oS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Un=wr(r.nextSibling),Fn=e,bt=!0,ai=null,t!==null&&(Wn[Xn++]=ji,Wn[Xn++]=Vi,Wn[Xn++]=cs,ji=t.id,Vi=t.overflow,cs=e),e=Zf(e,i.children),e.flags|=4096,e)}function Gm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Yd(t.return,e,n)}function Uu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function gx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(t,e,i.children,n),i=Ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gm(t,n,e);else if(t.tag===19)Gm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(gt(Ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&wc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Uu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&wc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Uu(e,!0,n,null,s);break;case"together":Uu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ds|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function YM(t,e,n){switch(e.tag){case 3:px(e),la();break;case 5:Vv(e);break;case 1:En(e.type)&&vc(e);break;case 4:Hf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(_c,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(Ct,Ct.current&1),e.flags|=128,null):n&e.child.childLanes?mx(t,e,n):(gt(Ct,Ct.current&1),t=er(t,e,n),t!==null?t.sibling:null);gt(Ct,Ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return gx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(Ct,Ct.current),i)break;return null;case 22:case 23:return e.lanes=0,hx(t,e,n)}return er(t,e,n)}var vx,ih,xx,yx;vx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ih=function(){};xx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ts(Ti.current);var s=null;switch(n){case"input":r=Ed(t,r),i=Ed(t,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=Ad(t,r),i=Ad(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=mc)}Pd(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(go.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(go.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};yx=function(t,e,n,i){n!==i&&(e.flags|=4)};function ka(t,e){if(!bt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function nn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function KM(t,e,n){var i=e.pendingProps;switch(Ff(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(e),null;case 1:return En(e.type)&&gc(),nn(e),null;case 3:return i=e.stateNode,ua(),Mt(bn),Mt(cn),Wf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ai!==null&&(dh(ai),ai=null))),ih(t,e),nn(e),null;case 5:Gf(e);var r=ts(Ao.current);if(n=e.type,t!==null&&e.stateNode!=null)xx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return nn(e),null}if(t=ts(Ti.current),al(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Mi]=e,i[To]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<Ka.length;r++)_t(Ka[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":Jp(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":tm(i,s),_t("invalid",i)}Pd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&sl(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&sl(i.textContent,o,t),r=["children",""+o]):go.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&_t("scroll",i)}switch(n){case"input":Zo(i),em(i,s,!0);break;case"textarea":Zo(i),nm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=mc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$g(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Mi]=e,t[To]=i,vx(t,e,!1,!1),e.stateNode=t;e:{switch(a=Nd(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ka.length;r++)_t(Ka[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":Jp(t,i),r=Ed(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),_t("invalid",t);break;case"textarea":tm(t,i),r=Ad(t,i),_t("invalid",t);break;default:r=i}Pd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Kg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&qg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&vo(t,l):typeof l=="number"&&vo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(go.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&Mf(t,s,l,a))}switch(n){case"input":Zo(t),em(t,i,!1);break;case"textarea":Zo(t),nm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Rr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=mc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nn(e),null;case 6:if(t&&e.stateNode!=null)yx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=ts(Ao.current),ts(Ti.current),al(e)){if(i=e.stateNode,n=e.memoizedProps,i[Mi]=e,(s=i.nodeValue!==n)&&(t=Fn,t!==null))switch(t.tag){case 3:sl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Mi]=e,e.stateNode=i}return nn(e),null;case 13:if(Mt(Ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(bt&&Un!==null&&e.mode&1&&!(e.flags&128))kv(),la(),e.flags|=98560,s=!1;else if(s=al(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[Mi]=e}else la(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nn(e),s=!1}else ai!==null&&(dh(ai),ai=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ct.current&1?Bt===0&&(Bt=3):ip())),e.updateQueue!==null&&(e.flags|=4),nn(e),null);case 4:return ua(),ih(t,e),t===null&&bo(e.stateNode.containerInfo),nn(e),null;case 10:return zf(e.type._context),nn(e),null;case 17:return En(e.type)&&gc(),nn(e),null;case 19:if(Mt(Ct),s=e.memoizedState,s===null)return nn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ka(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=wc(t),a!==null){for(e.flags|=128,ka(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return gt(Ct,Ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>ha&&(e.flags|=128,i=!0,ka(s,!1),e.lanes=4194304)}else{if(!i)if(t=wc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ka(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!bt)return nn(e),null}else 2*Lt()-s.renderingStartTime>ha&&n!==1073741824&&(e.flags|=128,i=!0,ka(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=Ct.current,gt(Ct,i?n&1|2:n&1),e):(nn(e),null);case 22:case 23:return np(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Dn&1073741824&&(nn(e),e.subtreeFlags&6&&(e.flags|=8192)):nn(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function ZM(t,e){switch(Ff(e),e.tag){case 1:return En(e.type)&&gc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ua(),Mt(bn),Mt(cn),Wf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gf(e),null;case 13:if(Mt(Ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));la()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Mt(Ct),null;case 4:return ua(),null;case 10:return zf(e.type._context),null;case 22:case 23:return np(),null;case 24:return null;default:return null}}var cl=!1,an=!1,QM=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Nt(t,e,i)}else n.current=null}function rh(t,e,n){try{n()}catch(i){Nt(t,e,i)}}var Wm=!1;function JM(t,e){if(jd=hc,t=bv(),If(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++h===i&&(l=a),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vd={focusedElem:t,selectionRange:n},hc=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,m=x.memoizedState,u=e.stateNode,y=u.getSnapshotBeforeUpdate(e.elementType===e.type?v:ii(e.type,v),m);u.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(M){Nt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return x=Wm,Wm=!1,x}function oo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&rh(e,n,s)}r=r.next}while(r!==i)}}function Qc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function sh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _x(t){var e=t.alternate;e!==null&&(t.alternate=null,_x(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mi],delete e[To],delete e[Wd],delete e[UM],delete e[FM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mx(t){return t.tag===5||t.tag===3||t.tag===4}function Xm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ah(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=mc));else if(i!==4&&(t=t.child,t!==null))for(ah(t,e,n),t=t.sibling;t!==null;)ah(t,e,n),t=t.sibling}function oh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(oh(t,e,n),t=t.sibling;t!==null;)oh(t,e,n),t=t.sibling}var Yt=null,ri=!1;function sr(t,e,n){for(n=n.child;n!==null;)Sx(t,e,n),n=n.sibling}function Sx(t,e,n){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(Gc,n)}catch{}switch(n.tag){case 5:an||Xs(n,e);case 6:var i=Yt,r=ri;Yt=null,sr(t,e,n),Yt=i,ri=r,Yt!==null&&(ri?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(ri?(t=Yt,n=n.stateNode,t.nodeType===8?Au(t.parentNode,n):t.nodeType===1&&Au(t,n),Mo(t)):Au(Yt,n.stateNode));break;case 4:i=Yt,r=ri,Yt=n.stateNode.containerInfo,ri=!0,sr(t,e,n),Yt=i,ri=r;break;case 0:case 11:case 14:case 15:if(!an&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&rh(n,e,a),r=r.next}while(r!==i)}sr(t,e,n);break;case 1:if(!an&&(Xs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Nt(n,e,o)}sr(t,e,n);break;case 21:sr(t,e,n);break;case 22:n.mode&1?(an=(i=an)||n.memoizedState!==null,sr(t,e,n),an=i):sr(t,e,n);break;default:sr(t,e,n)}}function $m(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new QM),e.forEach(function(i){var r=lS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Yt=o.stateNode,ri=!1;break e;case 3:Yt=o.stateNode.containerInfo,ri=!0;break e;case 4:Yt=o.stateNode.containerInfo,ri=!0;break e}o=o.return}if(Yt===null)throw Error(re(160));Sx(s,a,r),Yt=null,ri=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Nt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)wx(e,t),e=e.sibling}function wx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(e,t),gi(t),i&4){try{oo(3,t,t.return),Qc(3,t)}catch(v){Nt(t,t.return,v)}try{oo(5,t,t.return)}catch(v){Nt(t,t.return,v)}}break;case 1:Jn(e,t),gi(t),i&512&&n!==null&&Xs(n,n.return);break;case 5:if(Jn(e,t),gi(t),i&512&&n!==null&&Xs(n,n.return),t.flags&32){var r=t.stateNode;try{vo(r,"")}catch(v){Nt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Wg(r,s),Nd(o,a);var c=Nd(o,s);for(a=0;a<l.length;a+=2){var h=l[a],f=l[a+1];h==="style"?Kg(r,f):h==="dangerouslySetInnerHTML"?qg(r,f):h==="children"?vo(r,f):Mf(r,h,f,c)}switch(o){case"input":Td(r,s);break;case"textarea":Xg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ks(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ks(r,!!s.multiple,s.defaultValue,!0):Ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[To]=s}catch(v){Nt(t,t.return,v)}}break;case 6:if(Jn(e,t),gi(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){Nt(t,t.return,v)}}break;case 3:if(Jn(e,t),gi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(v){Nt(t,t.return,v)}break;case 4:Jn(e,t),gi(t);break;case 13:Jn(e,t),gi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ep=Lt())),i&4&&$m(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(an=(c=an)||h,Jn(e,t),an=c):Jn(e,t),gi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(xe=t,h=t.child;h!==null;){for(f=xe=h;xe!==null;){switch(d=xe,g=d.child,d.tag){case 0:case 11:case 14:case 15:oo(4,d,d.return);break;case 1:Xs(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(v){Nt(i,n,v)}}break;case 5:Xs(d,d.return);break;case 22:if(d.memoizedState!==null){Ym(f);continue}}g!==null?(g.return=d,xe=g):Ym(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Yg("display",a))}catch(v){Nt(t,t.return,v)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){Nt(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Jn(e,t),gi(t),i&4&&$m(t);break;case 21:break;default:Jn(e,t),gi(t)}}function gi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Mx(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(vo(r,""),i.flags&=-33);var s=Xm(t);oh(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Xm(t);ah(t,o,a);break;default:throw Error(re(161))}}catch(l){Nt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function eS(t,e,n){xe=t,bx(t)}function bx(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||cl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||an;o=cl;var c=an;if(cl=a,(an=l)&&!c)for(xe=r;xe!==null;)a=xe,l=a.child,a.tag===22&&a.memoizedState!==null?Km(r):l!==null?(l.return=a,xe=l):Km(r);for(;s!==null;)xe=s,bx(s),s=s.sibling;xe=r,cl=o,an=c}qm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):qm(t)}}function qm(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:an||Qc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!an)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ii(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Mo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}an||e.flags&512&&sh(e)}catch(d){Nt(e,e.return,d)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Ym(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Km(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qc(4,e)}catch(l){Nt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Nt(e,r,l)}}var s=e.return;try{sh(e)}catch(l){Nt(e,s,l)}break;case 5:var a=e.return;try{sh(e)}catch(l){Nt(e,a,l)}}}catch(l){Nt(e,e.return,l)}if(e===t){xe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,xe=o;break}xe=e.return}}var tS=Math.ceil,Tc=nr.ReactCurrentDispatcher,Qf=nr.ReactCurrentOwner,qn=nr.ReactCurrentBatchConfig,it=0,Xt=null,Ut=null,Qt=0,Dn=0,$s=Lr(0),Bt=0,Do=null,ds=0,Jc=0,Jf=0,lo=null,_n=null,ep=0,ha=1/0,Bi=null,Cc=!1,lh=null,Er=null,ul=!1,xr=null,Ac=0,co=0,ch=null,$l=-1,ql=0;function fn(){return it&6?Lt():$l!==-1?$l:$l=Lt()}function Tr(t){return t.mode&1?it&2&&Qt!==0?Qt&-Qt:OM.transition!==null?(ql===0&&(ql=lv()),ql):(t=ht,t!==0||(t=window.event,t=t===void 0?16:mv(t.type)),t):1}function di(t,e,n,i){if(50<co)throw co=0,ch=null,Error(re(185));ko(t,n,i),(!(it&2)||t!==Xt)&&(t===Xt&&(!(it&2)&&(Jc|=n),Bt===4&&mr(t,Qt)),Tn(t,i),n===1&&it===0&&!(e.mode&1)&&(ha=Lt()+500,Yc&&Ir()))}function Tn(t,e){var n=t.callbackNode;O1(t,e);var i=dc(t,t===Xt?Qt:0);if(i===0)n!==null&&sm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&sm(n),e===1)t.tag===0?kM(Zm.bind(null,t)):Iv(Zm.bind(null,t)),LM(function(){!(it&6)&&Ir()}),n=null;else{switch(cv(i)){case 1:n=Tf;break;case 4:n=av;break;case 16:n=uc;break;case 536870912:n=ov;break;default:n=uc}n=Dx(n,Ex.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ex(t,e){if($l=-1,ql=0,it&6)throw Error(re(327));var n=t.callbackNode;if(ta()&&t.callbackNode!==n)return null;var i=dc(t,t===Xt?Qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Rc(t,i);else{e=i;var r=it;it|=2;var s=Cx();(Xt!==t||Qt!==e)&&(Bi=null,ha=Lt()+500,ss(t,e));do try{rS();break}catch(o){Tx(t,o)}while(!0);Bf(),Tc.current=s,it=r,Ut!==null?e=0:(Xt=null,Qt=0,e=Bt)}if(e!==0){if(e===2&&(r=Fd(t),r!==0&&(i=r,e=uh(t,r))),e===1)throw n=Do,ss(t,0),mr(t,i),Tn(t,Lt()),n;if(e===6)mr(t,i);else{if(r=t.current.alternate,!(i&30)&&!nS(r)&&(e=Rc(t,i),e===2&&(s=Fd(t),s!==0&&(i=s,e=uh(t,s))),e===1))throw n=Do,ss(t,0),mr(t,i),Tn(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Gr(t,_n,Bi);break;case 3:if(mr(t,i),(i&130023424)===i&&(e=ep+500-Lt(),10<e)){if(dc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Gd(Gr.bind(null,t,_n,Bi),e);break}Gr(t,_n,Bi);break;case 4:if(mr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ui(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*tS(i/1960))-i,10<i){t.timeoutHandle=Gd(Gr.bind(null,t,_n,Bi),i);break}Gr(t,_n,Bi);break;case 5:Gr(t,_n,Bi);break;default:throw Error(re(329))}}}return Tn(t,Lt()),t.callbackNode===n?Ex.bind(null,t):null}function uh(t,e){var n=lo;return t.current.memoizedState.isDehydrated&&(ss(t,e).flags|=256),t=Rc(t,e),t!==2&&(e=_n,_n=n,e!==null&&dh(e)),t}function dh(t){_n===null?_n=t:_n.push.apply(_n,t)}function nS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!pi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~Jf,e&=~Jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ui(e),i=1<<n;t[n]=-1,e&=~i}}function Zm(t){if(it&6)throw Error(re(327));ta();var e=dc(t,0);if(!(e&1))return Tn(t,Lt()),null;var n=Rc(t,e);if(t.tag!==0&&n===2){var i=Fd(t);i!==0&&(e=i,n=uh(t,i))}if(n===1)throw n=Do,ss(t,0),mr(t,e),Tn(t,Lt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,_n,Bi),Tn(t,Lt()),null}function tp(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(ha=Lt()+500,Yc&&Ir())}}function hs(t){xr!==null&&xr.tag===0&&!(it&6)&&ta();var e=it;it|=1;var n=qn.transition,i=ht;try{if(qn.transition=null,ht=1,t)return t()}finally{ht=i,qn.transition=n,it=e,!(it&6)&&Ir()}}function np(){Dn=$s.current,Mt($s)}function ss(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,DM(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch(Ff(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gc();break;case 3:ua(),Mt(bn),Mt(cn),Wf();break;case 5:Gf(i);break;case 4:ua();break;case 13:Mt(Ct);break;case 19:Mt(Ct);break;case 10:zf(i.type._context);break;case 22:case 23:np()}n=n.return}if(Xt=t,Ut=t=Cr(t.current,null),Qt=Dn=e,Bt=0,Do=null,Jf=Jc=ds=0,_n=lo=null,es!==null){for(e=0;e<es.length;e++)if(n=es[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}es=null}return t}function Tx(t,e){do{var n=Ut;try{if(Bf(),Gl.current=Ec,bc){for(var i=At.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}bc=!1}if(us=0,Gt=kt=At=null,ao=!1,Ro=0,Qf.current=null,n===null||n.return===null){Bt=1,Do=e,Ut=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Qt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Om(a);if(g!==null){g.flags&=-257,Bm(g,a,o,s,e),g.mode&1&&km(s,c,e),e=g,l=c;var x=e.updateQueue;if(x===null){var v=new Set;v.add(l),e.updateQueue=v}else x.add(l);break e}else{if(!(e&1)){km(s,c,e),ip();break e}l=Error(re(426))}}else if(bt&&o.mode&1){var m=Om(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Bm(m,a,o,s,e),kf(da(l,o));break e}}s=l=da(l,o),Bt!==4&&(Bt=2),lo===null?lo=[s]:lo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=cx(s,l,e);Nm(s,u);break e;case 1:o=l;var y=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Er===null||!Er.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=ux(s,o,e);Nm(s,M);break e}}s=s.return}while(s!==null)}Rx(n)}catch(A){e=A,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(!0)}function Cx(){var t=Tc.current;return Tc.current=Ec,t===null?Ec:t}function ip(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Xt===null||!(ds&268435455)&&!(Jc&268435455)||mr(Xt,Qt)}function Rc(t,e){var n=it;it|=2;var i=Cx();(Xt!==t||Qt!==e)&&(Bi=null,ss(t,e));do try{iS();break}catch(r){Tx(t,r)}while(!0);if(Bf(),it=n,Tc.current=i,Ut!==null)throw Error(re(261));return Xt=null,Qt=0,Bt}function iS(){for(;Ut!==null;)Ax(Ut)}function rS(){for(;Ut!==null&&!R1();)Ax(Ut)}function Ax(t){var e=Nx(t.alternate,t,Dn);t.memoizedProps=t.pendingProps,e===null?Rx(t):Ut=e,Qf.current=null}function Rx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ZM(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Ut=null;return}}else if(n=KM(n,e,Dn),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);Bt===0&&(Bt=5)}function Gr(t,e,n){var i=ht,r=qn.transition;try{qn.transition=null,ht=1,sS(t,e,n,i)}finally{qn.transition=r,ht=i}return null}function sS(t,e,n,i){do ta();while(xr!==null);if(it&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(B1(t,s),t===Xt&&(Ut=Xt=null,Qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ul||(ul=!0,Dx(uc,function(){return ta(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qn.transition,qn.transition=null;var a=ht;ht=1;var o=it;it|=4,Qf.current=null,JM(t,n),wx(n,t),EM(Vd),hc=!!jd,Vd=jd=null,t.current=n,eS(n),P1(),it=o,ht=a,qn.transition=s}else t.current=n;if(ul&&(ul=!1,xr=t,Ac=r),s=t.pendingLanes,s===0&&(Er=null),L1(n.stateNode),Tn(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Cc)throw Cc=!1,t=lh,lh=null,t;return Ac&1&&t.tag!==0&&ta(),s=t.pendingLanes,s&1?t===ch?co++:(co=0,ch=t):co=0,Ir(),null}function ta(){if(xr!==null){var t=cv(Ac),e=qn.transition,n=ht;try{if(qn.transition=null,ht=16>t?16:t,xr===null)var i=!1;else{if(t=xr,xr=null,Ac=0,it&6)throw Error(re(331));var r=it;for(it|=4,xe=t.current;xe!==null;){var s=xe,a=s.child;if(xe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(xe=c;xe!==null;){var h=xe;switch(h.tag){case 0:case 11:case 15:oo(8,h,s)}var f=h.child;if(f!==null)f.return=h,xe=f;else for(;xe!==null;){h=xe;var d=h.sibling,g=h.return;if(_x(h),h===c){xe=null;break}if(d!==null){d.return=g,xe=d;break}xe=g}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}xe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,xe=a;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,xe=u;break e}xe=s.return}}var y=t.current;for(xe=y;xe!==null;){a=xe;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,xe=_;else e:for(a=y;xe!==null;){if(o=xe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Qc(9,o)}}catch(A){Nt(o,o.return,A)}if(o===a){xe=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,xe=M;break e}xe=o.return}}if(it=r,Ir(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(Gc,t)}catch{}i=!0}return i}finally{ht=n,qn.transition=e}}return!1}function Qm(t,e,n){e=da(n,e),e=cx(t,e,1),t=br(t,e,1),e=fn(),t!==null&&(ko(t,1,e),Tn(t,e))}function Nt(t,e,n){if(t.tag===3)Qm(t,t,n);else for(;e!==null;){if(e.tag===3){Qm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Er===null||!Er.has(i))){t=da(n,t),t=ux(e,t,1),e=br(e,t,1),t=fn(),e!==null&&(ko(e,1,t),Tn(e,t));break}}e=e.return}}function aS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(Qt&n)===n&&(Bt===4||Bt===3&&(Qt&130023424)===Qt&&500>Lt()-ep?ss(t,0):Jf|=n),Tn(t,e)}function Px(t,e){e===0&&(t.mode&1?(e=el,el<<=1,!(el&130023424)&&(el=4194304)):e=1);var n=fn();t=Ji(t,e),t!==null&&(ko(t,e,n),Tn(t,n))}function oS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Px(t,n)}function lS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),Px(t,n)}var Nx;Nx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bn.current)Sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Sn=!1,YM(t,e,n);Sn=!!(t.flags&131072)}else Sn=!1,bt&&e.flags&1048576&&Uv(e,yc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Xl(t,e),t=e.pendingProps;var r=oa(e,cn.current);ea(e,n),r=$f(null,e,i,t,r,n);var s=qf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(i)?(s=!0,vc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Vf(e),r.updater=Zc,e.stateNode=r,r._reactInternals=e,Zd(e,i,t,n),e=eh(null,e,i,!0,s,n)):(e.tag=0,bt&&s&&Uf(e),dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Xl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=uS(i),t=ii(i,t),r){case 0:e=Jd(null,e,i,t,n);break e;case 1:e=Vm(null,e,i,t,n);break e;case 11:e=zm(null,e,i,t,n);break e;case 14:e=jm(null,e,i,ii(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Jd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Vm(t,e,i,r,n);case 3:e:{if(px(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,jv(t,e),Sc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=da(Error(re(423)),e),e=Hm(t,e,i,n,r);break e}else if(i!==r){r=da(Error(re(424)),e),e=Hm(t,e,i,n,r);break e}else for(Un=wr(e.stateNode.containerInfo.firstChild),Fn=e,bt=!0,ai=null,n=Bv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(la(),i===r){e=er(t,e,n);break e}dn(t,e,i,n)}e=e.child}return e;case 5:return Vv(e),t===null&&qd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Hd(i,r)?a=null:s!==null&&Hd(i,s)&&(e.flags|=32),fx(t,e),dn(t,e,a,n),e.child;case 6:return t===null&&qd(e),null;case 13:return mx(t,e,n);case 4:return Hf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ca(e,null,i,n):dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),zm(t,e,i,r,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,gt(_c,i._currentValue),i._currentValue=a,s!==null)if(pi(s.value,a)){if(s.children===r.children&&!bn.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Yd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ea(e,n),r=Yn(r),i=i(r),e.flags|=1,dn(t,e,i,n),e.child;case 14:return i=e.type,r=ii(i,e.pendingProps),r=ii(i.type,r),jm(t,e,i,r,n);case 15:return dx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Xl(t,e),e.tag=1,En(i)?(t=!0,vc(e)):t=!1,ea(e,n),lx(e,i,r),Zd(e,i,r,n),eh(null,e,i,!0,t,n);case 19:return gx(t,e,n);case 22:return hx(t,e,n)}throw Error(re(156,e.tag))};function Dx(t,e){return sv(t,e)}function cS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,e,n,i){return new cS(t,e,n,i)}function rp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uS(t){if(typeof t=="function")return rp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wf)return 11;if(t===bf)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=$n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")rp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ks:return as(n.children,r,s,e);case Sf:a=8,r|=8;break;case Md:return t=$n(12,n,e,r|2),t.elementType=Md,t.lanes=s,t;case Sd:return t=$n(13,n,e,r),t.elementType=Sd,t.lanes=s,t;case wd:return t=$n(19,n,e,r),t.elementType=wd,t.lanes=s,t;case Vg:return eu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zg:a=10;break e;case jg:a=9;break e;case wf:a=11;break e;case bf:a=14;break e;case hr:a=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=$n(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function as(t,e,n,i){return t=$n(7,t,i,e),t.lanes=n,t}function eu(t,e,n,i){return t=$n(22,t,i,e),t.elementType=Vg,t.lanes=n,t.stateNode={isHidden:!1},t}function Fu(t,e,n){return t=$n(6,t,null,e),t.lanes=n,t}function ku(t,e,n){return e=$n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vu(0),this.expirationTimes=vu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function sp(t,e,n,i,r,s,a,o,l){return t=new dS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vf(s),t}function hS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Lx(t){if(!t)return Pr;t=t._reactInternals;e:{if(gs(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(En(n))return Lv(t,n,e)}return e}function Ix(t,e,n,i,r,s,a,o,l){return t=sp(n,i,!0,t,r,s,a,o,l),t.context=Lx(null),n=t.current,i=fn(),r=Tr(n),s=Wi(i,r),s.callback=e??null,br(n,s,r),t.current.lanes=r,ko(t,r,i),Tn(t,i),t}function tu(t,e,n,i){var r=e.current,s=fn(),a=Tr(r);return n=Lx(n),e.context===null?e.context=n:e.pendingContext=n,e=Wi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=br(r,e,a),t!==null&&(di(t,r,a,s),Hl(t,r,a)),a}function Pc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ap(t,e){Jm(t,e),(t=t.alternate)&&Jm(t,e)}function fS(){return null}var Ux=typeof reportError=="function"?reportError:function(t){console.error(t)};function op(t){this._internalRoot=t}nu.prototype.render=op.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));tu(t,e,null,null)};nu.prototype.unmount=op.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hs(function(){tu(null,t,null,null)}),e[Qi]=null}};function nu(t){this._internalRoot=t}nu.prototype.unstable_scheduleHydration=function(t){if(t){var e=hv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&pv(t)}};function lp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function e0(){}function pS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Pc(a);s.call(c)}}var a=Ix(e,i,t,0,null,!1,!1,"",e0);return t._reactRootContainer=a,t[Qi]=a.current,bo(t.nodeType===8?t.parentNode:t),hs(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Pc(l);o.call(c)}}var l=sp(t,0,!1,null,null,!1,!1,"",e0);return t._reactRootContainer=l,t[Qi]=l.current,bo(t.nodeType===8?t.parentNode:t),hs(function(){tu(e,l,n,i)}),l}function ru(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Pc(a);o.call(l)}}tu(e,a,t,r)}else a=pS(n,e,t,r,i);return Pc(a)}uv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ya(e.pendingLanes);n!==0&&(Cf(e,n|1),Tn(e,Lt()),!(it&6)&&(ha=Lt()+500,Ir()))}break;case 13:hs(function(){var i=Ji(t,1);if(i!==null){var r=fn();di(i,t,1,r)}}),ap(t,1)}};Af=function(t){if(t.tag===13){var e=Ji(t,134217728);if(e!==null){var n=fn();di(e,t,134217728,n)}ap(t,134217728)}};dv=function(t){if(t.tag===13){var e=Tr(t),n=Ji(t,e);if(n!==null){var i=fn();di(n,t,e,i)}ap(t,e)}};hv=function(){return ht};fv=function(t,e){var n=ht;try{return ht=t,e()}finally{ht=n}};Ld=function(t,e,n){switch(e){case"input":if(Td(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=qc(i);if(!r)throw Error(re(90));Gg(i),Td(i,r)}}}break;case"textarea":Xg(t,n);break;case"select":e=n.value,e!=null&&Ks(t,!!n.multiple,e,!1)}};Jg=tp;ev=hs;var mS={usingClientEntryPoint:!1,Events:[Bo,js,qc,Zg,Qg,tp]},Oa={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gS={bundleType:Oa.bundleType,version:Oa.version,rendererPackageName:Oa.rendererPackageName,rendererConfig:Oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=iv(t),t===null?null:t.stateNode},findFiberByHostInstance:Oa.findFiberByHostInstance||fS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{Gc=dl.inject(gS),Ei=dl}catch{}}On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mS;On.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lp(e))throw Error(re(200));return hS(t,e,null,n)};On.createRoot=function(t,e){if(!lp(t))throw Error(re(299));var n=!1,i="",r=Ux;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=sp(t,1,!1,null,null,n,!1,i,r),t[Qi]=e.current,bo(t.nodeType===8?t.parentNode:t),new op(e)};On.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=iv(e),t=t===null?null:t.stateNode,t};On.flushSync=function(t){return hs(t)};On.hydrate=function(t,e,n){if(!iu(e))throw Error(re(200));return ru(null,t,e,!0,n)};On.hydrateRoot=function(t,e,n){if(!lp(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Ux;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Ix(e,null,t,1,n??null,r,!1,s,a),t[Qi]=e.current,bo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nu(e)};On.render=function(t,e,n){if(!iu(e))throw Error(re(200));return ru(null,t,e,!1,n)};On.unmountComponentAtNode=function(t){if(!iu(t))throw Error(re(40));return t._reactRootContainer?(hs(function(){ru(null,null,t,!1,function(){t._reactRootContainer=null,t[Qi]=null})}),!0):!1};On.unstable_batchedUpdates=tp;On.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!iu(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return ru(t,e,n,!1,i)};On.version="18.3.1-next-f1338f8080-20240426";function Fx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fx)}catch(t){console.error(t)}}Fx(),Fg.exports=On;var vS=Fg.exports,t0=vS;yd.createRoot=t0.createRoot,yd.hydrateRoot=t0.hydrateRoot;/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function yS(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:xS(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=t=>{const e=_S(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ou(t){return t!=null}function SS(t,e={}){var d,g;const n=e.attributeNames??{},i=x=>n[x]??x,r=t.size??t.width??Fr.width,s=t.size??t.height??Fr.height,a=((d=t.aliases)==null?void 0:d.filter(x=>typeof x=="string"&&x.trim()!=="").map(x=>`lucide-${x}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...a],l=((g=e.className)==null?void 0:g.split(" ").filter(Boolean))??[],c=e.includeDefaultClasses===!1?hh(...l):hh("lucide",...o,...l),h=e.absoluteStrokeWidth?Number(e.strokeWidth??Fr["stroke-width"])*Number(t.size??t.width??Fr.width)/Number(e.size??e.width??Fr.width):e.strokeWidth??Fr["stroke-width"];return["svg",{...Object.entries(Fr).reduce((x,[v,m])=>(x[i(v)]=m,x),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&Ou(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&Ou(e.width)&&{[i("width")]:e.width},..."height"in e&&Ou(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:h,...c&&{[i("class")]:c},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(x=>{const[v,m,u]=x,y=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...m}:m;return u?[v,y,u]:[v,y]})]}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function wS(t,e={}){return SS(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},ES=Ye.createContext({}),TS=()=>Ye.useContext(ES),CS=Ye.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:o="",children:l,iconNode:c=[],icon:h={node:c,aliases:[],size:24},...f},d)=>{const{size:g=24,strokeWidth:x=2,absoluteStrokeWidth:v=!1,nonScalingStroke:m=!1,color:u="currentColor",className:y=""}=TS()??{},_=!!l||bS(f),[M,A,T=[]]=wS(h,{color:t??u,width:n??e??g,height:i??e??g,strokeWidth:r??x,absoluteStrokeWidth:s??v,nonScalingStroke:a??m,className:hh(y,o),hasA11yProp:_,attributes:f});return Ye.createElement(M,{ref:d,...A},[...T.map(([C,R])=>Ye.createElement(C,R)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function We(t,e=[],n=[]){const i=typeof t=="string"?yS(t,e,n):t,r=Ye.forwardRef(({className:s,...a},o)=>Ye.createElement(CS,{ref:o,icon:i,className:s,...a}));return i.name&&(r.displayName=MS(i.name)),r}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};kx.node;const fh=We(kx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};Ox.node;const ph=We(Ox);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx={name:"chart-no-axes-column",size:24,node:[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V3",key:"1lcnhd"}],["path",{d:"M19 21V9",key:"unv183"}]],aliases:["bar-chart-2"]};Bx.node;const mh=We(Bx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};zx.node;const AS=We(zx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};jx.node;const RS=We(jx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Vx.node;const Hx=We(Vx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx={name:"circle-exclamation-point",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle","circle-alert"]};Gx.node;const n0=We(Gx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx={name:"circle-plus",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],aliases:["plus-circle"]};Wx.node;const i0=We(Wx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};Xx.node;const PS=We(Xx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};$x.node;const NS=We($x);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};qx.node;const Yx=We(qx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx={name:"eighth-notes",size:24,node:[["path",{d:"M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19",key:"uy6ho8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}],["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}]],aliases:["music"]};Kx.node;const DS=We(Kx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx={name:"eye-off",size:24,node:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};Zx.node;const LS=We(Zx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Qx.node;const Jx=We(Qx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey={name:"file-down",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]};ey.node;const IS=We(ey);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty={name:"file-up",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]};ty.node;const US=We(ty);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny={name:"film",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]};ny.node;const r0=We(ny);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy={name:"image",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]};iy.node;const gh=We(iy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};ry.node;const cp=We(ry);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy={name:"loader-circle",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],aliases:["loader-2"]};sy.node;const FS=We(sy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay={name:"move",size:24,node:[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]};ay.node;const kS=We(ay);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};oy.node;const ly=We(oy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};cy.node;const OS=We(cy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};uy.node;const BS=We(uy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};dy.node;const zS=We(dy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};hy.node;const fy=We(hy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};py.node;const Nc=We(py);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my={name:"repeat",size:24,node:[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]};my.node;const jS=We(my);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy={name:"save",size:24,node:[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]};gy.node;const vy=We(gy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};xy.node;const yy=We(xy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};_y.node;const Si=We(_y);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My={name:"square",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]};My.node;const VS=We(My);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};Sy.node;const HS=We(Sy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};wy.node;const Dc=We(wy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by={name:"triangle-exclamation-point",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle","triangle-alert"]};by.node;const GS=We(by);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};Ey.node;const Ty=We(Ey);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Cy.node;const WS=We(Cy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Ay.node;const XS=We(Ay);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Ry.node;const Py=We(Ry);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};Ny.node;const Dy=We(Ny),s0=t=>{let e;const n=new Set,i=(c,h)=>{const f=typeof c=="function"?c(e):c;if(!Object.is(f,e)){const d=e;e=h??(typeof f!="object"||f===null)?f:Object.assign({},e,f),n.forEach(g=>g(e,d))}},r=()=>e,o={setState:i,getState:r,getInitialState:()=>l,subscribe:c=>(n.add(c),()=>n.delete(c))},l=e=t(i,r,o);return o},$S=t=>t?s0(t):s0,qS=t=>t;function YS(t,e=qS){const n=Bl.useSyncExternalStore(t.subscribe,Bl.useCallback(()=>e(t.getState()),[t,e]),()=>e(t.getInitialState()));return Bl.useDebugValue(n),n}const a0=t=>{const e=$S(t),n=i=>YS(e,i);return Object.assign(n,e),n},KS=t=>t?a0(t):a0;class ZS{constructor(e){te(this,"config");te(this,"prevSpectrum",null);te(this,"smoothedBands",{subBass:0,bass:0,lowMid:0,mid:0,highMid:0,treble:0});te(this,"smoothedRms",0);te(this,"smoothedPeak",0);te(this,"fluxHistory",[]);te(this,"maxFluxHistory",40);te(this,"lastBeatTime",-1);te(this,"beatIntervals",[]);te(this,"estimatedBpm",120);te(this,"bpmConfidence",.5);te(this,"beatPhase",0);te(this,"isBpmLocked",!1);this.config={fftSize:2048,smoothingTimeConstant:.8,minDecibels:-90,maxDecibels:-10,attackSmoothing:.2,decaySmoothing:.85,beatSensitivity:1.5,beatCooldownSeconds:.18,...e}}setBpm(e){e>=40&&e<=260&&(this.estimatedBpm=Math.round(e),this.bpmConfidence=1,this.isBpmLocked=!0)}getBpm(){return this.estimatedBpm}unlockBpm(){this.isBpmLocked=!1}updateConfig(e){this.config={...this.config,...e}}freqToBin(e,n,i){const r=i/2,s=Math.round(e*i/n);return Math.max(0,Math.min(r-1,s))}getBandEnergy(e,n,i,r){const s=e.length*2,a=this.freqToBin(i,n,s),o=Math.max(a+1,this.freqToBin(r,n,s));let l=0;for(let h=a;h<o;h++)l+=e[h];const c=l/(o-a);return Math.max(0,Math.min(1,c))}calculateRms(e){let n=0;for(let i=0;i<e.length;i++){const r=e[i];n+=r*r}return Math.min(1,Math.sqrt(n/e.length)*1.8)}calculatePeak(e){let n=0;for(let i=0;i<e.length;i++){const r=Math.abs(e[i]);r>n&&(n=r)}return Math.min(1,n)}smoothValue(e,n){const i=n>=e?1-this.config.attackSmoothing:1-this.config.decaySmoothing;return e+(n-e)*i}processBeat(e,n,i){let r=0;if(this.prevSpectrum&&this.prevSpectrum.length===e.length){const x=Math.floor(e.length*.45);for(let v=0;v<x;v++){const m=e[v]-this.prevSpectrum[v];m>0&&(r+=m)}r/=x}this.fluxHistory.push(r),this.fluxHistory.length>this.maxFluxHistory&&this.fluxHistory.shift();let s=0;for(const x of this.fluxHistory)s+=x;s/=this.fluxHistory.length||1;let a=0;for(const x of this.fluxHistory){const v=x-s;a+=v*v}const o=Math.sqrt(a/(this.fluxHistory.length||1)),l=s+o*this.config.beatSensitivity,c=n-this.lastBeatTime,h=c>=this.config.beatCooldownSeconds;let f=!1,d=0;if(r>l&&r>.05&&h&&i>.25){if(f=!0,d=Math.min(1,(r-l)/(o||1)+i*.5),this.lastBeatTime>0){const x=c;if(x>=.25&&x<=1.5){this.beatIntervals.push(x),this.beatIntervals.length>10&&this.beatIntervals.shift();let v=0;for(const u of this.beatIntervals)v+=u;v/=this.beatIntervals.length;const m=Math.round(60/v);!this.isBpmLocked&&m>=60&&m<=200&&(this.estimatedBpm=Math.round(this.estimatedBpm*.8+m*.2),this.bpmConfidence=Math.min(1,this.beatIntervals.length/10))}}this.lastBeatTime=n}const g=60/this.estimatedBpm;return this.lastBeatTime>0?this.beatPhase=(n-this.lastBeatTime)%g/g:this.beatPhase=n%g/g,{isBeat:f,beatIntensity:f?d:Math.max(0,this.smoothValue(0,d)),beatPhase:this.beatPhase,bpm:this.estimatedBpm,bpmConfidence:this.bpmConfidence,timeSinceLastBeat:c,spectralFlux:r}}analyze(e,n,i,r){const s=this.getBandEnergy(e,i,20,60),a=this.getBandEnergy(e,i,60,250),o=this.getBandEnergy(e,i,250,500),l=this.getBandEnergy(e,i,500,2e3),c=this.getBandEnergy(e,i,2e3,4e3),h=this.getBandEnergy(e,i,4e3,18e3);this.smoothedBands.subBass=this.smoothValue(this.smoothedBands.subBass,s),this.smoothedBands.bass=this.smoothValue(this.smoothedBands.bass,a),this.smoothedBands.lowMid=this.smoothValue(this.smoothedBands.lowMid,o),this.smoothedBands.mid=this.smoothValue(this.smoothedBands.mid,l),this.smoothedBands.highMid=this.smoothValue(this.smoothedBands.highMid,c),this.smoothedBands.treble=this.smoothValue(this.smoothedBands.treble,h);const f=this.calculateRms(n),d=this.calculatePeak(n);this.smoothedRms=this.smoothValue(this.smoothedRms,f),this.smoothedPeak=this.smoothValue(this.smoothedPeak,d);const g=this.processBeat(e,r,this.smoothedBands.bass);return(!this.prevSpectrum||this.prevSpectrum.length!==e.length)&&(this.prevSpectrum=new Float32Array(e.length)),this.prevSpectrum.set(e),{bands:{...this.smoothedBands},rms:this.smoothedRms,peak:this.smoothedPeak,beat:g}}reset(){this.prevSpectrum=null,this.smoothedBands={subBass:0,bass:0,lowMid:0,mid:0,highMid:0,treble:0},this.smoothedRms=0,this.smoothedPeak=0,this.fluxHistory=[],this.lastBeatTime=-1,this.beatIntervals=[]}}class QS{constructor(){te(this,"audioContext",null);te(this,"audioBuffer",null);te(this,"sourceNode",null);te(this,"gainNode",null);te(this,"analyserNode",null);te(this,"frequencyAnalyzer");te(this,"metadata",null);te(this,"volume",.8);te(this,"playbackStartTime",0);te(this,"pauseOffset",0);te(this,"_isPlaying",!1);te(this,"freqByteData",new Uint8Array(1024));te(this,"timeByteData",new Uint8Array(1024));te(this,"normSpectrum",new Float32Array(512));te(this,"normWaveform",new Float32Array(1024));te(this,"fftCosTable",null);te(this,"fftSinTable",null);te(this,"hannWindowTable",null);this.frequencyAnalyzer=new ZS}async init(){if(!this.audioContext){const e=window.AudioContext||window.webkitAudioContext;this.audioContext=new e,this.gainNode=this.audioContext.createGain(),this.gainNode.gain.value=this.volume,this.analyserNode=this.audioContext.createAnalyser(),this.analyserNode.fftSize=2048,this.analyserNode.smoothingTimeConstant=.75,this.analyserNode.minDecibels=-90,this.analyserNode.maxDecibels=-10,this.gainNode.connect(this.analyserNode),this.analyserNode.connect(this.audioContext.destination),this.freqByteData=new Uint8Array(this.analyserNode.frequencyBinCount),this.timeByteData=new Uint8Array(this.analyserNode.fftSize),this.normSpectrum=new Float32Array(this.analyserNode.frequencyBinCount),this.normWaveform=new Float32Array(this.analyserNode.fftSize),this.initFftTables(2048)}this.audioContext.state==="suspended"&&await this.audioContext.resume()}initFftTables(e){this.fftCosTable=new Float32Array(e/2),this.fftSinTable=new Float32Array(e/2),this.hannWindowTable=new Float32Array(e);for(let n=0;n<e/2;n++)this.fftCosTable[n]=Math.cos(-2*Math.PI*n/e),this.fftSinTable[n]=Math.sin(-2*Math.PI*n/e);for(let n=0;n<e;n++)this.hannWindowTable[n]=.5*(1-Math.cos(2*Math.PI*n/(e-1)))}async loadAudioFile(e){if(await this.init(),!this.audioContext)throw new Error("AudioContext not initialized");this.stop();const n=await e.arrayBuffer();return this.audioBuffer=await this.audioContext.decodeAudioData(n.slice(0)),this.metadata={id:`audio-${Date.now()}`,fileName:e instanceof File?e.name:"Sample_Electronic_Track.wav",mimeType:e.type||"audio/mpeg",duration:this.audioBuffer.duration,sampleRate:this.audioBuffer.sampleRate,numberOfChannels:this.audioBuffer.numberOfChannels,fileSizeBytes:e.size},this.pauseOffset=0,this.frequencyAnalyzer.reset(),this.metadata}async generateDemoTrack(){if(await this.init(),!this.audioContext)throw new Error("AudioContext not initialized");this.stop();const e=this.audioContext.sampleRate,n=30,i=Math.floor(e*n),r=this.audioContext.createBuffer(2,i,e),s=r.getChannelData(0),a=r.getChannelData(1),l=60/128;for(let c=0;c<i;c++){const h=c/e,f=h/l,d=Math.floor(f),g=f-d,x=f*4%1;let v=0;const m=g*l;if(m<.22){const V=140*Math.exp(-m*28)+45,I=Math.max(0,1-m*4.5);v+=Math.sin(2*Math.PI*V*m)*I*.7}const u=d%4;if(u===1||u===3){const V=g*l;if(V<.25){const I=(Math.random()*2-1)*Math.exp(-V*14),z=Math.sin(2*Math.PI*220*V)*Math.exp(-V*18);v+=(I*.4+z*.3)*.6}}const _=x*(l/4);if(_<.06){const I=(Math.floor(f*4)%2===1?.35:.15)*Math.exp(-_*45);v+=(Math.random()*2-1)*I}const M=Math.floor(d/4)%4,T=[55,65.41,73.42,65.41][M],C=Math.exp(-_*12),R=_*T*2%2-1;v+=R*C*.35;const w=[220,261.63,329.63,440,523.25],S=w[Math.floor(f*2)%w.length],N=Math.sin(2*Math.PI*S*h);v+=N*.12*(.8+.2*Math.sin(h*3)),v=Math.max(-.95,Math.min(.95,v)),s[c]=v,a[c]=v}return this.audioBuffer=r,this.metadata={id:`demo-${Date.now()}`,fileName:"Electro_Drive_128BPM_Demo.wav",mimeType:"audio/wav",duration:n,sampleRate:e,numberOfChannels:2,fileSizeBytes:i*4},this.pauseOffset=0,this.frequencyAnalyzer.reset(),this.metadata}play(e){!this.audioBuffer||!this.audioContext||!this.gainNode||(this._isPlaying&&this.pause(),e!==void 0&&(this.pauseOffset=Math.max(0,Math.min(e,this.audioBuffer.duration))),this.sourceNode=this.audioContext.createBufferSource(),this.sourceNode.buffer=this.audioBuffer,this.sourceNode.connect(this.gainNode),this.sourceNode.onended=()=>{this._isPlaying&&this.getCurrentTime()>=this.getDuration()&&(this._isPlaying=!1,this.pauseOffset=0)},this.playbackStartTime=this.audioContext.currentTime-this.pauseOffset,this.sourceNode.start(0,this.pauseOffset),this._isPlaying=!0)}pause(){if(this._isPlaying){if(this.sourceNode){try{this.sourceNode.stop(),this.sourceNode.disconnect()}catch{}this.sourceNode=null}this.pauseOffset=this.getCurrentTime(),this._isPlaying=!1}}stop(){this.pause(),this.pauseOffset=0}seek(e){const n=this._isPlaying;n&&this.pause();const i=this.getDuration();this.pauseOffset=Math.max(0,Math.min(e,i)),n&&this.play(this.pauseOffset)}setVolume(e){var n;this.volume=Math.max(0,Math.min(1,e)),this.gainNode&&this.gainNode.gain.setValueAtTime(this.volume,((n=this.audioContext)==null?void 0:n.currentTime)||0)}getCurrentTime(){if(!this.audioBuffer)return 0;if(!this._isPlaying)return this.pauseOffset;if(!this.audioContext)return 0;const e=this.audioContext.currentTime-this.playbackStartTime;return Math.min(e,this.audioBuffer.duration)}getDuration(){return this.audioBuffer?this.audioBuffer.duration:0}isPlaying(){return this._isPlaying}getAudioBuffer(){return this.audioBuffer}getAudioContext(){return this.audioContext}connectMediaStreamDestination(){if(!this.audioContext||!this.gainNode)return null;const e=this.audioContext.createMediaStreamDestination();return this.gainNode.connect(e),e}disconnectMediaStreamDestination(e){if(this.gainNode&&e)try{this.gainNode.disconnect(e)}catch{}}async detectBpmFromBuffer(){if(!this.audioBuffer)return 128;const e=this.audioBuffer.getChannelData(0),n=this.audioBuffer.sampleRate,i=this.audioBuffer.duration,r=Math.floor(Math.min(5,i*.1)*n),s=Math.floor(Math.min(45,i*.8)*n),a=Math.min(e.length,r+s),o=512,l=Math.floor((a-r)/o);if(l<200)return 128;const c=new Float32Array(l);let h=0;for(let x=0;x<l;x++){const v=r+x*o;let m=0;for(let _=0;_<o;_+=2){const M=e[v+_]||0;m+=M*M}const u=Math.sqrt(m/(o/2)),y=Math.max(0,u-h);c[x]=y,h=u}const f=n/o;let d=128,g=-1;for(let x=70;x<=180;x++){const v=Math.round(60*f/x);if(v<=0||v>=l/2)continue;let m=0;const u=l-v;for(let M=0;M<u;M++)m+=c[M]*c[M+v];m/=u;const y=1-Math.abs(x-128)*.0015,_=m*y;_>g&&(g=_,d=x)}return this.frequencyAnalyzer.setBpm(d),d}setManualBpm(e){this.frequencyAnalyzer.setBpm(e)}multiplyBpm(e){const n=Math.round(this.frequencyAnalyzer.getBpm()*e);return this.frequencyAnalyzer.setBpm(n),n}getRealtimeAnalysis(){var o;const e={timestamp:this.getCurrentTime(),bands:{subBass:0,bass:0,lowMid:0,mid:0,highMid:0,treble:0},spectrum:this.normSpectrum,waveform:this.normWaveform,rms:0,peak:0,beat:{isBeat:!1,beatIntensity:0,beatPhase:0,bpm:120,bpmConfidence:0,timeSinceLastBeat:0,spectralFlux:0}};if(!this.analyserNode||!this._isPlaying)return e;this.analyserNode.getByteFrequencyData(this.freqByteData),this.analyserNode.getByteTimeDomainData(this.timeByteData);const n=this.freqByteData.length;for(let l=0;l<n;l++)this.normSpectrum[l]=this.freqByteData[l]/255;const i=this.timeByteData.length;for(let l=0;l<i;l++)this.normWaveform[l]=(this.timeByteData[l]-128)/128;const r=this.getCurrentTime(),s=((o=this.audioContext)==null?void 0:o.sampleRate)||44100,a=this.frequencyAnalyzer.analyze(this.normSpectrum,this.normWaveform,s,r);return{timestamp:r,bands:a.bands,spectrum:this.normSpectrum,waveform:this.normWaveform,rms:a.rms,peak:a.peak,beat:a.beat}}getOfflineAnalysis(e,n=.046){if(!this.audioBuffer)return this.getRealtimeAnalysis();const i=this.audioBuffer.sampleRate,r=2048,s=Math.floor(e*i),a=Math.floor(r/2),o=s-a,l=this.audioBuffer.getChannelData(0),c=l.length,h=new Float32Array(r),f=new Float32Array(r),d=new Float32Array(r);for(let m=0;m<r;m++){const u=o+m,y=u>=0&&u<c?l[u]:0;h[m]=y;const _=this.hannWindowTable?this.hannWindowTable[m]:1;f[m]=y*_,d[m]=0}this.cooleyTukeyFft(f,d);const g=r/2,x=new Float32Array(g);for(let m=0;m<g;m++){const u=Math.sqrt(f[m]*f[m]+d[m]*d[m])/(r/4);x[m]=Math.min(1,u*2.5)}const v=this.frequencyAnalyzer.analyze(x,h,i,e);return{timestamp:e,bands:v.bands,spectrum:x,waveform:h,rms:v.rms,peak:v.peak,beat:v.beat}}cooleyTukeyFft(e,n){const i=e.length;let r=0;for(let a=0;a<i-1;a++){if(a<r){const l=e[a];e[a]=e[r],e[r]=l;const c=n[a];n[a]=n[r],n[r]=c}let o=i>>1;for(;o<=r;)r-=o,o>>=1;r+=o}let s=1;for(;s<i;){const a=s<<1;for(let o=0;o<s;o++){const l=-Math.PI*o/s,c=Math.cos(l),h=Math.sin(l);for(let f=o;f<i;f+=a){const d=f+s,g=c*e[d]-h*n[d],x=c*n[d]+h*e[d];e[d]=e[f]-g,n[d]=n[f]-x,e[f]+=g,n[f]+=x}}s=a}}dispose(){this.stop(),this.audioContext&&(this.audioContext.close(),this.audioContext=null),this.audioBuffer=null,this.metadata=null}}const ct=new QS;var up=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},D=(t,e,n)=>(up(t,e,"read from private field"),n?n.call(t):e.get(t)),Ge=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},Wt=(t,e,n,i)=>(up(t,e,"write to private field"),e.set(t,n),n),JS=(t,e,n,i)=>({set _(r){Wt(t,e,r)},get _(){return D(t,e,i)}}),qe=(t,e,n)=>(up(t,e,"access private method"),n),et=new Uint8Array(8),Ai=new DataView(et.buffer),Ot=t=>[(t%256+256)%256],at=t=>(Ai.setUint16(0,t,!1),[et[0],et[1]]),ew=t=>(Ai.setInt16(0,t,!1),[et[0],et[1]]),Ly=t=>(Ai.setUint32(0,t,!1),[et[1],et[2],et[3]]),ve=t=>(Ai.setUint32(0,t,!1),[et[0],et[1],et[2],et[3]]),tw=t=>(Ai.setInt32(0,t,!1),[et[0],et[1],et[2],et[3]]),fs=t=>(Ai.setUint32(0,Math.floor(t/2**32),!1),Ai.setUint32(4,t,!1),[et[0],et[1],et[2],et[3],et[4],et[5],et[6],et[7]]),dp=t=>(Ai.setInt16(0,2**8*t,!1),[et[0],et[1]]),yi=t=>(Ai.setInt32(0,2**16*t,!1),[et[0],et[1],et[2],et[3]]),Bu=t=>(Ai.setInt32(0,2**30*t,!1),[et[0],et[1],et[2],et[3]]),Hn=(t,e=!1)=>{let n=Array(t.length).fill(null).map((i,r)=>t.charCodeAt(r));return e&&n.push(0),n},Lc=t=>t&&t[t.length-1],hp=t=>{let e;for(let n of t)(!e||n.presentationTimestamp>e.presentationTimestamp)&&(e=n);return e},Ci=(t,e,n=!0)=>{let i=t*e;return n?Math.round(i):i},Iy=t=>{let e=t*(Math.PI/180),n=Math.cos(e),i=Math.sin(e);return[n,i,0,-i,n,0,0,0,1]},Uy=Iy(0),Fy=t=>[yi(t[0]),yi(t[1]),Bu(t[2]),yi(t[3]),yi(t[4]),Bu(t[5]),yi(t[6]),yi(t[7]),Bu(t[8])],uo=t=>!t||typeof t!="object"?t:Array.isArray(t)?t.map(uo):Object.fromEntries(Object.entries(t).map(([e,n])=>[e,uo(n)])),fa=t=>t>=0&&t<2**32,Ft=(t,e,n)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:n}),wt=(t,e,n,i,r)=>Ft(t,[Ot(e),Ly(n),i??[]],r),nw=t=>{let e=512;return t.fragmented?Ft("ftyp",[Hn("iso5"),ve(e),Hn("iso5"),Hn("iso6"),Hn("mp41")]):Ft("ftyp",[Hn("isom"),ve(e),Hn("isom"),t.holdsAvc?Hn("avc1"):[],Hn("mp41")])},vh=t=>({type:"mdat",largeSize:t}),iw=t=>({type:"free",size:t}),Kl=(t,e,n=!1)=>Ft("moov",null,[rw(e,t),...t.map(i=>sw(i,e)),n?Fw(t):null]),rw=(t,e)=>{let n=Ci(Math.max(0,...e.filter(a=>a.samples.length>0).map(a=>{const o=hp(a.samples);return o.presentationTimestamp+o.duration})),_h),i=Math.max(...e.map(a=>a.id))+1,r=!fa(t)||!fa(n),s=r?fs:ve;return wt("mvhd",+r,0,[s(t),s(t),ve(_h),s(n),yi(1),dp(1),Array(10).fill(0),Fy(Uy),Array(24).fill(0),ve(i)])},sw=(t,e)=>Ft("trak",null,[aw(t,e),ow(t,e)]),aw=(t,e)=>{let n=hp(t.samples),i=Ci(n?n.presentationTimestamp+n.duration:0,_h),r=!fa(e)||!fa(i),s=r?fs:ve,a;return t.info.type==="video"?a=typeof t.info.rotation=="number"?Iy(t.info.rotation):t.info.rotation:a=Uy,wt("tkhd",+r,3,[s(e),s(e),ve(t.id),ve(0),s(i),Array(8).fill(0),at(0),at(0),dp(t.info.type==="audio"?1:0),at(0),Fy(a),yi(t.info.type==="video"?t.info.width:0),yi(t.info.type==="video"?t.info.height:0)])},ow=(t,e)=>Ft("mdia",null,[lw(t,e),cw(t.info.type==="video"?"vide":"soun"),uw(t)]),lw=(t,e)=>{let n=hp(t.samples),i=Ci(n?n.presentationTimestamp+n.duration:0,t.timescale),r=!fa(e)||!fa(i),s=r?fs:ve;return wt("mdhd",+r,0,[s(e),s(e),ve(t.timescale),s(i),at(21956),at(0)])},cw=t=>wt("hdlr",0,0,[Hn("mhlr"),Hn(t),ve(0),ve(0),ve(0),Hn("mp4-muxer-hdlr",!0)]),uw=t=>Ft("minf",null,[t.info.type==="video"?dw():hw(),fw(),gw(t)]),dw=()=>wt("vmhd",0,1,[at(0),at(0),at(0),at(0)]),hw=()=>wt("smhd",0,0,[at(0),at(0)]),fw=()=>Ft("dinf",null,[pw()]),pw=()=>wt("dref",0,0,[ve(1)],[mw()]),mw=()=>wt("url ",0,1),gw=t=>{const e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(n=>n.sampleCompositionTimeOffset!==0);return Ft("stbl",null,[vw(t),Pw(t),Nw(t),Dw(t),Lw(t),Iw(t),e?Uw(t):null])},vw=t=>wt("stsd",0,0,[ve(1)],[t.info.type==="video"?xw(Xw[t.info.codec],t):Cw(qw[t.info.codec],t)]),xw=(t,e)=>Ft(t,[Array(6).fill(0),at(1),at(0),at(0),Array(12).fill(0),at(e.info.width),at(e.info.height),ve(4718592),ve(4718592),ve(0),at(1),Array(32).fill(0),at(24),ew(65535)],[$w[e.info.codec](e),e.info.decoderConfig.colorSpace?Sw(e):null]),yw={bt709:1,bt470bg:5,smpte170m:6},_w={bt709:1,smpte170m:6,"iec61966-2-1":13},Mw={rgb:0,bt709:1,bt470bg:5,smpte170m:6},Sw=t=>Ft("colr",[Hn("nclx"),at(yw[t.info.decoderConfig.colorSpace.primaries]),at(_w[t.info.decoderConfig.colorSpace.transfer]),at(Mw[t.info.decoderConfig.colorSpace.matrix]),Ot((t.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),ww=t=>t.info.decoderConfig&&Ft("avcC",[...new Uint8Array(t.info.decoderConfig.description)]),bw=t=>t.info.decoderConfig&&Ft("hvcC",[...new Uint8Array(t.info.decoderConfig.description)]),Ew=t=>{if(!t.info.decoderConfig)return null;let e=t.info.decoderConfig;if(!e.colorSpace)throw new Error("'colorSpace' is required in the decoder config for VP9.");let n=e.codec.split("."),i=Number(n[1]),r=Number(n[2]),o=(Number(n[3])<<4)+(0<<1)+Number(e.colorSpace.fullRange);return wt("vpcC",1,0,[Ot(i),Ot(r),Ot(o),Ot(2),Ot(2),Ot(2),at(0)])},Tw=()=>{let n=(1<<7)+1;return Ft("av1C",[n,0,0,0])},Cw=(t,e)=>Ft(t,[Array(6).fill(0),at(1),at(0),at(0),ve(0),at(e.info.numberOfChannels),at(16),at(0),at(0),yi(e.info.sampleRate)],[Yw[e.info.codec](e)]),Aw=t=>{let e=new Uint8Array(t.info.decoderConfig.description);return wt("esds",0,0,[ve(58753152),Ot(32+e.byteLength),at(1),Ot(0),ve(75530368),Ot(18+e.byteLength),Ot(64),Ot(21),Ly(0),ve(130071),ve(130071),ve(92307584),Ot(e.byteLength),...e,ve(109084800),Ot(1),Ot(2)])},Rw=t=>{var r;let e=3840,n=0;const i=(r=t.info.decoderConfig)==null?void 0:r.description;if(i){if(i.byteLength<18)throw new TypeError("Invalid decoder description provided for Opus; must be at least 18 bytes long.");const s=ArrayBuffer.isView(i)?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(i);e=s.getUint16(10,!0),n=s.getInt16(14,!0)}return Ft("dOps",[Ot(0),Ot(t.info.numberOfChannels),at(e),ve(t.info.sampleRate),dp(n),Ot(0)])},Pw=t=>wt("stts",0,0,[ve(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[ve(e.sampleCount),ve(e.sampleDelta)])]),Nw=t=>{if(t.samples.every(n=>n.type==="key"))return null;let e=[...t.samples.entries()].filter(([,n])=>n.type==="key");return wt("stss",0,0,[ve(e.length),e.map(([n])=>ve(n+1))])},Dw=t=>wt("stsc",0,0,[ve(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[ve(e.firstChunk),ve(e.samplesPerChunk),ve(1)])]),Lw=t=>wt("stsz",0,0,[ve(0),ve(t.samples.length),t.samples.map(e=>ve(e.size))]),Iw=t=>t.finalizedChunks.length>0&&Lc(t.finalizedChunks).offset>=2**32?wt("co64",0,0,[ve(t.finalizedChunks.length),t.finalizedChunks.map(e=>fs(e.offset))]):wt("stco",0,0,[ve(t.finalizedChunks.length),t.finalizedChunks.map(e=>ve(e.offset))]),Uw=t=>wt("ctts",0,0,[ve(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[ve(e.sampleCount),ve(e.sampleCompositionTimeOffset)])]),Fw=t=>Ft("mvex",null,t.map(kw)),kw=t=>wt("trex",0,0,[ve(t.id),ve(1),ve(0),ve(0),ve(0)]),o0=(t,e)=>Ft("moof",null,[Ow(t),...e.map(Bw)]),Ow=t=>wt("mfhd",0,0,[ve(t)]),ky=t=>{let e=0,n=0,i=0,r=0,s=t.type==="delta";return n|=+s,s?e|=1:e|=2,e<<24|n<<16|i<<8|r},Bw=t=>Ft("traf",null,[zw(t),jw(t),Vw(t)]),zw=t=>{let e=0;e|=8,e|=16,e|=32,e|=131072;let n=t.currentChunk.samples[1]??t.currentChunk.samples[0],i={duration:n.timescaleUnitsToNextSample,size:n.size,flags:ky(n)};return wt("tfhd",0,e,[ve(t.id),ve(i.duration),ve(i.size),ve(i.flags)])},jw=t=>wt("tfdt",1,0,[fs(Ci(t.currentChunk.startTimestamp,t.timescale))]),Vw=t=>{let e=t.currentChunk.samples.map(v=>v.timescaleUnitsToNextSample),n=t.currentChunk.samples.map(v=>v.size),i=t.currentChunk.samples.map(ky),r=t.currentChunk.samples.map(v=>Ci(v.presentationTimestamp-v.decodeTimestamp,t.timescale)),s=new Set(e),a=new Set(n),o=new Set(i),l=new Set(r),c=o.size===2&&i[0]!==i[1],h=s.size>1,f=a.size>1,d=!c&&o.size>1,g=l.size>1||[...l].some(v=>v!==0),x=0;return x|=1,x|=4*+c,x|=256*+h,x|=512*+f,x|=1024*+d,x|=2048*+g,wt("trun",1,x,[ve(t.currentChunk.samples.length),ve(t.currentChunk.offset-t.currentChunk.moofOffset||0),c?ve(i[0]):[],t.currentChunk.samples.map((v,m)=>[h?ve(e[m]):[],f?ve(n[m]):[],d?ve(i[m]):[],g?tw(r[m]):[]])])},Hw=t=>Ft("mfra",null,[...t.map(Gw),Ww()]),Gw=(t,e)=>wt("tfra",1,0,[ve(t.id),ve(63),ve(t.finalizedChunks.length),t.finalizedChunks.map(i=>[fs(Ci(i.startTimestamp,t.timescale)),fs(i.moofOffset),ve(e+1),ve(1),ve(1)])]),Ww=()=>wt("mfro",0,0,[ve(0)]),Xw={avc:"avc1",hevc:"hvc1",vp9:"vp09",av1:"av01"},$w={avc:ww,hevc:bw,vp9:Ew,av1:Tw},qw={aac:"mp4a",opus:"Opus"},Yw={aac:Aw,opus:Rw},su=class{},Oy=class extends su{constructor(){super(...arguments),this.buffer=null}},By=class extends su{constructor(t){if(super(),this.options=t,typeof t!="object")throw new TypeError("StreamTarget requires an options object to be passed to its constructor.");if(t.onData){if(typeof t.onData!="function")throw new TypeError("options.onData, when provided, must be a function.");if(t.onData.length<2)throw new TypeError("options.onData, when provided, must be a function that takes in at least two arguments (data and position). Ignoring the position argument, which specifies the byte offset at which the data is to be written, can lead to broken outputs.")}if(t.chunked!==void 0&&typeof t.chunked!="boolean")throw new TypeError("options.chunked, when provided, must be a boolean.");if(t.chunkSize!==void 0&&(!Number.isInteger(t.chunkSize)||t.chunkSize<1024))throw new TypeError("options.chunkSize, when provided, must be an integer and not smaller than 1024.")}},Kw=class extends su{constructor(t,e){if(super(),this.stream=t,this.options=e,!(t instanceof FileSystemWritableFileStream))throw new TypeError("FileSystemWritableFileStreamTarget requires a FileSystemWritableFileStream instance.");if(e!==void 0&&typeof e!="object")throw new TypeError("FileSystemWritableFileStreamTarget's options, when provided, must be an object.");if(e&&e.chunkSize!==void 0&&(!Number.isInteger(e.chunkSize)||e.chunkSize<=0))throw new TypeError("options.chunkSize, when provided, must be a positive integer")}},Wr,Is,zy=class{constructor(){this.pos=0,Ge(this,Wr,new Uint8Array(8)),Ge(this,Is,new DataView(D(this,Wr).buffer)),this.offsets=new WeakMap}seek(t){this.pos=t}writeU32(t){D(this,Is).setUint32(0,t,!1),this.write(D(this,Wr).subarray(0,4))}writeU64(t){D(this,Is).setUint32(0,Math.floor(t/2**32),!1),D(this,Is).setUint32(4,t,!1),this.write(D(this,Wr).subarray(0,8))}writeAscii(t){for(let e=0;e<t.length;e++)D(this,Is).setUint8(e%8,t.charCodeAt(e)),e%8===7&&this.write(D(this,Wr));t.length%8!==0&&this.write(D(this,Wr).subarray(0,t.length%8))}writeBox(t){if(this.offsets.set(t,this.pos),t.contents&&!t.children)this.writeBoxHeader(t,t.size??t.contents.byteLength+8),this.write(t.contents);else{let e=this.pos;if(this.writeBoxHeader(t,0),t.contents&&this.write(t.contents),t.children)for(let r of t.children)r&&this.writeBox(r);let n=this.pos,i=t.size??n-e;this.seek(e),this.writeBoxHeader(t,i),this.seek(n)}}writeBoxHeader(t,e){this.writeU32(t.largeSize?1:e),this.writeAscii(t.type),t.largeSize&&this.writeU64(e)}measureBoxHeader(t){return 8+(t.largeSize?8:0)}patchBox(t){let e=this.pos;this.seek(this.offsets.get(t)),this.writeBox(t),this.seek(e)}measureBox(t){if(t.contents&&!t.children)return this.measureBoxHeader(t)+t.contents.byteLength;{let e=this.measureBoxHeader(t);if(t.contents&&(e+=t.contents.byteLength),t.children)for(let n of t.children)n&&(e+=this.measureBox(n));return e}}};Wr=new WeakMap;Is=new WeakMap;var Zl,os,Lo,Za,Ql,xh,Zw=class extends zy{constructor(t){super(),Ge(this,Ql),Ge(this,Zl,void 0),Ge(this,os,new ArrayBuffer(2**16)),Ge(this,Lo,new Uint8Array(D(this,os))),Ge(this,Za,0),Wt(this,Zl,t)}write(t){qe(this,Ql,xh).call(this,this.pos+t.byteLength),D(this,Lo).set(t,this.pos),this.pos+=t.byteLength,Wt(this,Za,Math.max(D(this,Za),this.pos))}finalize(){qe(this,Ql,xh).call(this,this.pos),D(this,Zl).buffer=D(this,os).slice(0,Math.max(D(this,Za),this.pos))}};Zl=new WeakMap;os=new WeakMap;Lo=new WeakMap;Za=new WeakMap;Ql=new WeakSet;xh=function(t){let e=D(this,os).byteLength;for(;e<t;)e*=2;if(e===D(this,os).byteLength)return;let n=new ArrayBuffer(e),i=new Uint8Array(n);i.set(D(this,Lo),0),Wt(this,os,n),Wt(this,Lo,i)};var Qw=2**24,Jw=2,ho,Xr,Qa,Xi,In,Ic,yh,fp,jy,pp,Vy,fo,Uc,mp=class extends zy{constructor(t){var e,n;super(),Ge(this,Ic),Ge(this,fp),Ge(this,pp),Ge(this,fo),Ge(this,ho,void 0),Ge(this,Xr,[]),Ge(this,Qa,void 0),Ge(this,Xi,void 0),Ge(this,In,[]),Wt(this,ho,t),Wt(this,Qa,((e=t.options)==null?void 0:e.chunked)??!1),Wt(this,Xi,((n=t.options)==null?void 0:n.chunkSize)??Qw)}write(t){D(this,Xr).push({data:t.slice(),start:this.pos}),this.pos+=t.byteLength}flush(){var n,i;if(D(this,Xr).length===0)return;let t=[],e=[...D(this,Xr)].sort((r,s)=>r.start-s.start);t.push({start:e[0].start,size:e[0].data.byteLength});for(let r=1;r<e.length;r++){let s=t[t.length-1],a=e[r];a.start<=s.start+s.size?s.size=Math.max(s.size,a.start+a.data.byteLength-s.start):t.push({start:a.start,size:a.data.byteLength})}for(let r of t){r.data=new Uint8Array(r.size);for(let s of D(this,Xr))r.start<=s.start&&s.start<r.start+r.size&&r.data.set(s.data,s.start-r.start);D(this,Qa)?(qe(this,Ic,yh).call(this,r.data,r.start),qe(this,fo,Uc).call(this)):(i=(n=D(this,ho).options).onData)==null||i.call(n,r.data,r.start)}D(this,Xr).length=0}finalize(){D(this,Qa)&&qe(this,fo,Uc).call(this,!0)}};ho=new WeakMap;Xr=new WeakMap;Qa=new WeakMap;Xi=new WeakMap;In=new WeakMap;Ic=new WeakSet;yh=function(t,e){let n=D(this,In).findIndex(o=>o.start<=e&&e<o.start+D(this,Xi));n===-1&&(n=qe(this,pp,Vy).call(this,e));let i=D(this,In)[n],r=e-i.start,s=t.subarray(0,Math.min(D(this,Xi)-r,t.byteLength));i.data.set(s,r);let a={start:r,end:r+s.byteLength};if(qe(this,fp,jy).call(this,i,a),i.written[0].start===0&&i.written[0].end===D(this,Xi)&&(i.shouldFlush=!0),D(this,In).length>Jw){for(let o=0;o<D(this,In).length-1;o++)D(this,In)[o].shouldFlush=!0;qe(this,fo,Uc).call(this)}s.byteLength<t.byteLength&&qe(this,Ic,yh).call(this,t.subarray(s.byteLength),e+s.byteLength)};fp=new WeakSet;jy=function(t,e){let n=0,i=t.written.length-1,r=-1;for(;n<=i;){let s=Math.floor(n+(i-n+1)/2);t.written[s].start<=e.start?(n=s+1,r=s):i=s-1}for(t.written.splice(r+1,0,e),(r===-1||t.written[r].end<e.start)&&r++;r<t.written.length-1&&t.written[r].end>=t.written[r+1].start;)t.written[r].end=Math.max(t.written[r].end,t.written[r+1].end),t.written.splice(r+1,1)};pp=new WeakSet;Vy=function(t){let n={start:Math.floor(t/D(this,Xi))*D(this,Xi),data:new Uint8Array(D(this,Xi)),written:[],shouldFlush:!1};return D(this,In).push(n),D(this,In).sort((i,r)=>i.start-r.start),D(this,In).indexOf(n)};fo=new WeakSet;Uc=function(t=!1){var e,n;for(let i=0;i<D(this,In).length;i++){let r=D(this,In)[i];if(!(!r.shouldFlush&&!t)){for(let s of r.written)(n=(e=D(this,ho).options).onData)==null||n.call(e,r.data.subarray(s.start,s.end),r.start+s.start);D(this,In).splice(i--,1)}}};var eb=class extends mp{constructor(t){var e;super(new By({onData:(n,i)=>t.stream.write({type:"write",data:n,position:i}),chunked:!0,chunkSize:(e=t.options)==null?void 0:e.chunkSize}))}},_h=1e3,tb=["avc","hevc","vp9","av1"],nb=["aac","opus"],ib=2082844800,rb=["strict","offset","cross-track-offset"],Ae,Ie,Fc,Nn,Kt,Ht,qs,na,gp,$r,qr,po,Mh,Hy,Sh,Gy,vp,Wy,wh,Xy,xp,$y,Jl,bh,vi,ki,yp,qy,mo,kc,Oc,_p,pa,jo,ec,Eh,sb=class{constructor(t){if(Ge(this,Mh),Ge(this,Sh),Ge(this,vp),Ge(this,wh),Ge(this,xp),Ge(this,Jl),Ge(this,vi),Ge(this,yp),Ge(this,mo),Ge(this,Oc),Ge(this,pa),Ge(this,ec),Ge(this,Ae,void 0),Ge(this,Ie,void 0),Ge(this,Fc,void 0),Ge(this,Nn,void 0),Ge(this,Kt,null),Ge(this,Ht,null),Ge(this,qs,Math.floor(Date.now()/1e3)+ib),Ge(this,na,[]),Ge(this,gp,1),Ge(this,$r,[]),Ge(this,qr,[]),Ge(this,po,!1),qe(this,Mh,Hy).call(this,t),t.video=uo(t.video),t.audio=uo(t.audio),t.fastStart=uo(t.fastStart),this.target=t.target,Wt(this,Ae,{firstTimestampBehavior:"strict",...t}),t.target instanceof Oy)Wt(this,Ie,new Zw(t.target));else if(t.target instanceof By)Wt(this,Ie,new mp(t.target));else if(t.target instanceof Kw)Wt(this,Ie,new eb(t.target));else throw new Error(`Invalid target: ${t.target}`);qe(this,wh,Xy).call(this),qe(this,Sh,Gy).call(this)}addVideoChunk(t,e,n,i){if(!(t instanceof EncodedVideoChunk))throw new TypeError("addVideoChunk's first argument (sample) must be of type EncodedVideoChunk.");if(e&&typeof e!="object")throw new TypeError("addVideoChunk's second argument (meta), when provided, must be an object.");if(n!==void 0&&(!Number.isFinite(n)||n<0))throw new TypeError("addVideoChunk's third argument (timestamp), when provided, must be a non-negative real number.");if(i!==void 0&&!Number.isFinite(i))throw new TypeError("addVideoChunk's fourth argument (compositionTimeOffset), when provided, must be a real number.");let r=new Uint8Array(t.byteLength);t.copyTo(r),this.addVideoChunkRaw(r,t.type,n??t.timestamp,t.duration,e,i)}addVideoChunkRaw(t,e,n,i,r,s){if(!(t instanceof Uint8Array))throw new TypeError("addVideoChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addVideoChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(n)||n<0)throw new TypeError("addVideoChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(i)||i<0)throw new TypeError("addVideoChunkRaw's fourth argument (duration) must be a non-negative real number.");if(r&&typeof r!="object")throw new TypeError("addVideoChunkRaw's fifth argument (meta), when provided, must be an object.");if(s!==void 0&&!Number.isFinite(s))throw new TypeError("addVideoChunkRaw's sixth argument (compositionTimeOffset), when provided, must be a real number.");if(qe(this,ec,Eh).call(this),!D(this,Ae).video)throw new Error("No video track declared.");if(typeof D(this,Ae).fastStart=="object"&&D(this,Kt).samples.length===D(this,Ae).fastStart.expectedVideoChunks)throw new Error(`Cannot add more video chunks than specified in 'fastStart' (${D(this,Ae).fastStart.expectedVideoChunks}).`);let a=qe(this,Jl,bh).call(this,D(this,Kt),t,e,n,i,r,s);if(D(this,Ae).fastStart==="fragmented"&&D(this,Ht)){for(;D(this,qr).length>0&&D(this,qr)[0].decodeTimestamp<=a.decodeTimestamp;){let o=D(this,qr).shift();qe(this,vi,ki).call(this,D(this,Ht),o)}a.decodeTimestamp<=D(this,Ht).lastDecodeTimestamp?qe(this,vi,ki).call(this,D(this,Kt),a):D(this,$r).push(a)}else qe(this,vi,ki).call(this,D(this,Kt),a)}addAudioChunk(t,e,n){if(!(t instanceof EncodedAudioChunk))throw new TypeError("addAudioChunk's first argument (sample) must be of type EncodedAudioChunk.");if(e&&typeof e!="object")throw new TypeError("addAudioChunk's second argument (meta), when provided, must be an object.");if(n!==void 0&&(!Number.isFinite(n)||n<0))throw new TypeError("addAudioChunk's third argument (timestamp), when provided, must be a non-negative real number.");let i=new Uint8Array(t.byteLength);t.copyTo(i),this.addAudioChunkRaw(i,t.type,n??t.timestamp,t.duration,e)}addAudioChunkRaw(t,e,n,i,r){if(!(t instanceof Uint8Array))throw new TypeError("addAudioChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addAudioChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(n)||n<0)throw new TypeError("addAudioChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(i)||i<0)throw new TypeError("addAudioChunkRaw's fourth argument (duration) must be a non-negative real number.");if(r&&typeof r!="object")throw new TypeError("addAudioChunkRaw's fifth argument (meta), when provided, must be an object.");if(qe(this,ec,Eh).call(this),!D(this,Ae).audio)throw new Error("No audio track declared.");if(typeof D(this,Ae).fastStart=="object"&&D(this,Ht).samples.length===D(this,Ae).fastStart.expectedAudioChunks)throw new Error(`Cannot add more audio chunks than specified in 'fastStart' (${D(this,Ae).fastStart.expectedAudioChunks}).`);let s=qe(this,Jl,bh).call(this,D(this,Ht),t,e,n,i,r);if(D(this,Ae).fastStart==="fragmented"&&D(this,Kt)){for(;D(this,$r).length>0&&D(this,$r)[0].decodeTimestamp<=s.decodeTimestamp;){let a=D(this,$r).shift();qe(this,vi,ki).call(this,D(this,Kt),a)}s.decodeTimestamp<=D(this,Kt).lastDecodeTimestamp?qe(this,vi,ki).call(this,D(this,Ht),s):D(this,qr).push(s)}else qe(this,vi,ki).call(this,D(this,Ht),s)}finalize(){if(D(this,po))throw new Error("Cannot finalize a muxer more than once.");if(D(this,Ae).fastStart==="fragmented"){for(let e of D(this,$r))qe(this,vi,ki).call(this,D(this,Kt),e);for(let e of D(this,qr))qe(this,vi,ki).call(this,D(this,Ht),e);qe(this,Oc,_p).call(this,!1)}else D(this,Kt)&&qe(this,mo,kc).call(this,D(this,Kt)),D(this,Ht)&&qe(this,mo,kc).call(this,D(this,Ht));let t=[D(this,Kt),D(this,Ht)].filter(Boolean);if(D(this,Ae).fastStart==="in-memory"){let e;for(let i=0;i<2;i++){let r=Kl(t,D(this,qs)),s=D(this,Ie).measureBox(r);e=D(this,Ie).measureBox(D(this,Nn));let a=D(this,Ie).pos+s+e;for(let o of D(this,na)){o.offset=a;for(let{data:l}of o.samples)a+=l.byteLength,e+=l.byteLength}if(a<2**32)break;e>=2**32&&(D(this,Nn).largeSize=!0)}let n=Kl(t,D(this,qs));D(this,Ie).writeBox(n),D(this,Nn).size=e,D(this,Ie).writeBox(D(this,Nn));for(let i of D(this,na))for(let r of i.samples)D(this,Ie).write(r.data),r.data=null}else if(D(this,Ae).fastStart==="fragmented"){let e=D(this,Ie).pos,n=Hw(t);D(this,Ie).writeBox(n);let i=D(this,Ie).pos-e;D(this,Ie).seek(D(this,Ie).pos-4),D(this,Ie).writeU32(i)}else{let e=D(this,Ie).offsets.get(D(this,Nn)),n=D(this,Ie).pos-e;D(this,Nn).size=n,D(this,Nn).largeSize=n>=2**32,D(this,Ie).patchBox(D(this,Nn));let i=Kl(t,D(this,qs));if(typeof D(this,Ae).fastStart=="object"){D(this,Ie).seek(D(this,Fc)),D(this,Ie).writeBox(i);let r=e-D(this,Ie).pos;D(this,Ie).writeBox(iw(r))}else D(this,Ie).writeBox(i)}qe(this,pa,jo).call(this),D(this,Ie).finalize(),Wt(this,po,!0)}};Ae=new WeakMap;Ie=new WeakMap;Fc=new WeakMap;Nn=new WeakMap;Kt=new WeakMap;Ht=new WeakMap;qs=new WeakMap;na=new WeakMap;gp=new WeakMap;$r=new WeakMap;qr=new WeakMap;po=new WeakMap;Mh=new WeakSet;Hy=function(t){if(typeof t!="object")throw new TypeError("The muxer requires an options object to be passed to its constructor.");if(!(t.target instanceof su))throw new TypeError("The target must be provided and an instance of Target.");if(t.video){if(!tb.includes(t.video.codec))throw new TypeError(`Unsupported video codec: ${t.video.codec}`);if(!Number.isInteger(t.video.width)||t.video.width<=0)throw new TypeError(`Invalid video width: ${t.video.width}. Must be a positive integer.`);if(!Number.isInteger(t.video.height)||t.video.height<=0)throw new TypeError(`Invalid video height: ${t.video.height}. Must be a positive integer.`);const e=t.video.rotation;if(typeof e=="number"&&![0,90,180,270].includes(e))throw new TypeError(`Invalid video rotation: ${e}. Has to be 0, 90, 180 or 270.`);if(Array.isArray(e)&&(e.length!==9||e.some(n=>typeof n!="number")))throw new TypeError(`Invalid video transformation matrix: ${e.join()}`);if(t.video.frameRate!==void 0&&(!Number.isInteger(t.video.frameRate)||t.video.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${t.video.frameRate}. Must be a positive integer.`)}if(t.audio){if(!nb.includes(t.audio.codec))throw new TypeError(`Unsupported audio codec: ${t.audio.codec}`);if(!Number.isInteger(t.audio.numberOfChannels)||t.audio.numberOfChannels<=0)throw new TypeError(`Invalid number of audio channels: ${t.audio.numberOfChannels}. Must be a positive integer.`);if(!Number.isInteger(t.audio.sampleRate)||t.audio.sampleRate<=0)throw new TypeError(`Invalid audio sample rate: ${t.audio.sampleRate}. Must be a positive integer.`)}if(t.firstTimestampBehavior&&!rb.includes(t.firstTimestampBehavior))throw new TypeError(`Invalid first timestamp behavior: ${t.firstTimestampBehavior}`);if(typeof t.fastStart=="object"){if(t.video){if(t.fastStart.expectedVideoChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedVideoChunks'.");if(!Number.isInteger(t.fastStart.expectedVideoChunks)||t.fastStart.expectedVideoChunks<0)throw new TypeError("'expectedVideoChunks' must be a non-negative integer.")}if(t.audio){if(t.fastStart.expectedAudioChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedAudioChunks'.");if(!Number.isInteger(t.fastStart.expectedAudioChunks)||t.fastStart.expectedAudioChunks<0)throw new TypeError("'expectedAudioChunks' must be a non-negative integer.")}}else if(![!1,"in-memory","fragmented"].includes(t.fastStart))throw new TypeError("'fastStart' option must be false, 'in-memory', 'fragmented' or an object.");if(t.minFragmentDuration!==void 0&&(!Number.isFinite(t.minFragmentDuration)||t.minFragmentDuration<0))throw new TypeError("'minFragmentDuration' must be a non-negative number.")};Sh=new WeakSet;Gy=function(){var t;if(D(this,Ie).writeBox(nw({holdsAvc:((t=D(this,Ae).video)==null?void 0:t.codec)==="avc",fragmented:D(this,Ae).fastStart==="fragmented"})),Wt(this,Fc,D(this,Ie).pos),D(this,Ae).fastStart==="in-memory")Wt(this,Nn,vh(!1));else if(D(this,Ae).fastStart!=="fragmented"){if(typeof D(this,Ae).fastStart=="object"){let e=qe(this,vp,Wy).call(this);D(this,Ie).seek(D(this,Ie).pos+e)}Wt(this,Nn,vh(!0)),D(this,Ie).writeBox(D(this,Nn))}qe(this,pa,jo).call(this)};vp=new WeakSet;Wy=function(){if(typeof D(this,Ae).fastStart!="object")return;let t=0,e=[D(this,Ae).fastStart.expectedVideoChunks,D(this,Ae).fastStart.expectedAudioChunks];for(let n of e)n&&(t+=8*Math.ceil(2/3*n),t+=4*n,t+=12*Math.ceil(2/3*n),t+=4*n,t+=8*n);return t+=4096,t};wh=new WeakSet;Xy=function(){if(D(this,Ae).video&&Wt(this,Kt,{id:1,info:{type:"video",codec:D(this,Ae).video.codec,width:D(this,Ae).video.width,height:D(this,Ae).video.height,rotation:D(this,Ae).video.rotation??0,decoderConfig:null},timescale:D(this,Ae).video.frameRate??57600,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),D(this,Ae).audio&&(Wt(this,Ht,{id:D(this,Ae).video?2:1,info:{type:"audio",codec:D(this,Ae).audio.codec,numberOfChannels:D(this,Ae).audio.numberOfChannels,sampleRate:D(this,Ae).audio.sampleRate,decoderConfig:null},timescale:D(this,Ae).audio.sampleRate,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),D(this,Ae).audio.codec==="aac")){let t=qe(this,xp,$y).call(this,2,D(this,Ae).audio.sampleRate,D(this,Ae).audio.numberOfChannels);D(this,Ht).info.decoderConfig={codec:D(this,Ae).audio.codec,description:t,numberOfChannels:D(this,Ae).audio.numberOfChannels,sampleRate:D(this,Ae).audio.sampleRate}}};xp=new WeakSet;$y=function(t,e,n){let r=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350].indexOf(e),s=n,a="";a+=t.toString(2).padStart(5,"0"),a+=r.toString(2).padStart(4,"0"),r===15&&(a+=e.toString(2).padStart(24,"0")),a+=s.toString(2).padStart(4,"0");let o=Math.ceil(a.length/8)*8;a=a.padEnd(o,"0");let l=new Uint8Array(a.length/8);for(let c=0;c<a.length;c+=8)l[c/8]=parseInt(a.slice(c,c+8),2);return l};Jl=new WeakSet;bh=function(t,e,n,i,r,s,a){let o=i/1e6,l=(i-(a??0))/1e6,c=r/1e6,h=qe(this,yp,qy).call(this,o,l,t);return o=h.presentationTimestamp,l=h.decodeTimestamp,s!=null&&s.decoderConfig&&(t.info.decoderConfig===null?t.info.decoderConfig=s.decoderConfig:Object.assign(t.info.decoderConfig,s.decoderConfig)),{presentationTimestamp:o,decodeTimestamp:l,duration:c,data:e,size:e.byteLength,type:n,timescaleUnitsToNextSample:Ci(c,t.timescale)}};vi=new WeakSet;ki=function(t,e){D(this,Ae).fastStart!=="fragmented"&&t.samples.push(e);const n=Ci(e.presentationTimestamp-e.decodeTimestamp,t.timescale);if(t.lastTimescaleUnits!==null){let r=Ci(e.decodeTimestamp,t.timescale,!1),s=Math.round(r-t.lastTimescaleUnits);if(t.lastTimescaleUnits+=s,t.lastSample.timescaleUnitsToNextSample=s,D(this,Ae).fastStart!=="fragmented"){let a=Lc(t.timeToSampleTable);a.sampleCount===1?(a.sampleDelta=s,a.sampleCount++):a.sampleDelta===s?a.sampleCount++:(a.sampleCount--,t.timeToSampleTable.push({sampleCount:2,sampleDelta:s}));const o=Lc(t.compositionTimeOffsetTable);o.sampleCompositionTimeOffset===n?o.sampleCount++:t.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:n})}}else t.lastTimescaleUnits=0,D(this,Ae).fastStart!=="fragmented"&&(t.timeToSampleTable.push({sampleCount:1,sampleDelta:Ci(e.duration,t.timescale)}),t.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:n}));t.lastSample=e;let i=!1;if(!t.currentChunk)i=!0;else{let r=e.presentationTimestamp-t.currentChunk.startTimestamp;if(D(this,Ae).fastStart==="fragmented"){let s=D(this,Kt)??D(this,Ht);const a=D(this,Ae).minFragmentDuration??1;t===s&&e.type==="key"&&r>=a&&(i=!0,qe(this,Oc,_p).call(this))}else i=r>=.5}i&&(t.currentChunk&&qe(this,mo,kc).call(this,t),t.currentChunk={startTimestamp:e.presentationTimestamp,samples:[]}),t.currentChunk.samples.push(e)};yp=new WeakSet;qy=function(t,e,n){var a,o;const i=D(this,Ae).firstTimestampBehavior==="strict",r=n.lastDecodeTimestamp===-1;if(i&&r&&e!==0)throw new Error(`The first chunk for your media track must have a timestamp of 0 (received DTS=${e}).Non-zero first timestamps are often caused by directly piping frames or audio data from a MediaStreamTrack into the encoder. Their timestamps are typically relative to the age of thedocument, which is probably what you want.

If you want to offset all timestamps of a track such that the first one is zero, set firstTimestampBehavior: 'offset' in the options.
`);if(D(this,Ae).firstTimestampBehavior==="offset"||D(this,Ae).firstTimestampBehavior==="cross-track-offset"){n.firstDecodeTimestamp===void 0&&(n.firstDecodeTimestamp=e);let l;D(this,Ae).firstTimestampBehavior==="offset"?l=n.firstDecodeTimestamp:l=Math.min(((a=D(this,Kt))==null?void 0:a.firstDecodeTimestamp)??1/0,((o=D(this,Ht))==null?void 0:o.firstDecodeTimestamp)??1/0),e-=l,t-=l}if(e<n.lastDecodeTimestamp)throw new Error(`Timestamps must be monotonically increasing (DTS went from ${n.lastDecodeTimestamp*1e6} to ${e*1e6}).`);return n.lastDecodeTimestamp=e,{presentationTimestamp:t,decodeTimestamp:e}};mo=new WeakSet;kc=function(t){if(D(this,Ae).fastStart==="fragmented")throw new Error("Can't finalize individual chunks if 'fastStart' is set to 'fragmented'.");if(t.currentChunk){if(t.finalizedChunks.push(t.currentChunk),D(this,na).push(t.currentChunk),(t.compactlyCodedChunkTable.length===0||Lc(t.compactlyCodedChunkTable).samplesPerChunk!==t.currentChunk.samples.length)&&t.compactlyCodedChunkTable.push({firstChunk:t.finalizedChunks.length,samplesPerChunk:t.currentChunk.samples.length}),D(this,Ae).fastStart==="in-memory"){t.currentChunk.offset=0;return}t.currentChunk.offset=D(this,Ie).pos;for(let e of t.currentChunk.samples)D(this,Ie).write(e.data),e.data=null;qe(this,pa,jo).call(this)}};Oc=new WeakSet;_p=function(t=!0){if(D(this,Ae).fastStart!=="fragmented")throw new Error("Can't finalize a fragment unless 'fastStart' is set to 'fragmented'.");let e=[D(this,Kt),D(this,Ht)].filter(o=>o&&o.currentChunk);if(e.length===0)return;let n=JS(this,gp)._++;if(n===1){let o=Kl(e,D(this,qs),!0);D(this,Ie).writeBox(o)}let i=D(this,Ie).pos,r=o0(n,e);D(this,Ie).writeBox(r);{let o=vh(!1),l=0;for(let h of e)for(let f of h.currentChunk.samples)l+=f.size;let c=D(this,Ie).measureBox(o)+l;c>=2**32&&(o.largeSize=!0,c=D(this,Ie).measureBox(o)+l),o.size=c,D(this,Ie).writeBox(o)}for(let o of e){o.currentChunk.offset=D(this,Ie).pos,o.currentChunk.moofOffset=i;for(let l of o.currentChunk.samples)D(this,Ie).write(l.data),l.data=null}let s=D(this,Ie).pos;D(this,Ie).seek(D(this,Ie).offsets.get(r));let a=o0(n,e);D(this,Ie).writeBox(a),D(this,Ie).seek(s);for(let o of e)o.finalizedChunks.push(o.currentChunk),D(this,na).push(o.currentChunk),o.currentChunk=null;t&&qe(this,pa,jo).call(this)};pa=new WeakSet;jo=function(){D(this,Ie)instanceof mp&&D(this,Ie).flush()};ec=new WeakSet;Eh=function(){if(D(this,po))throw new Error("Cannot add new video or audio chunks after the file has been finalized.")};const ab={"16:9":{"720p":{width:1280,height:720},"1080p":{width:1920,height:1080},"1440p":{width:2560,height:1440},"4k":{width:3840,height:2160}},"9:16":{"720p":{width:720,height:1280},"1080p":{width:1080,height:1920},"1440p":{width:1440,height:2560},"4k":{width:2160,height:3840}},"1:1":{"720p":{width:720,height:720},"1080p":{width:1080,height:1080},"1440p":{width:1440,height:1440},"4k":{width:2160,height:2160}}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mp="170",ob=0,l0=1,lb=2,Yy=1,cb=2,Oi=3,Nr=0,Cn=1,wi=2,$i=0,hn=1,wn=2,c0=3,u0=4,ub=5,Zr=100,db=101,hb=102,fb=103,pb=104,mb=200,gb=201,vb=202,xb=203,Th=204,Ch=205,yb=206,_b=207,Mb=208,Sb=209,wb=210,bb=211,Eb=212,Tb=213,Cb=214,Ah=0,Rh=1,Ph=2,ma=3,Nh=4,Dh=5,Lh=6,Ih=7,Ky=0,Ab=1,Rb=2,Ar=0,Zy=1,Qy=2,Jy=3,e_=4,Pb=5,t_=6,n_=7,i_=300,ga=301,va=302,Uh=303,Fh=304,au=306,kh=1e3,ns=1001,Oh=1002,hi=1003,Nb=1004,hl=1005,bi=1006,zu=1007,is=1008,tr=1009,r_=1010,s_=1011,Io=1012,Sp=1013,ps=1014,Hi=1015,qi=1016,wp=1017,bp=1018,xa=1020,a_=35902,o_=1021,l_=1022,li=1023,c_=1024,u_=1025,ia=1026,ya=1027,d_=1028,Ep=1029,h_=1030,Tp=1031,Cp=1033,tc=33776,nc=33777,ic=33778,rc=33779,Bh=35840,zh=35841,jh=35842,Vh=35843,Hh=36196,Gh=37492,Wh=37496,Xh=37808,$h=37809,qh=37810,Yh=37811,Kh=37812,Zh=37813,Qh=37814,Jh=37815,ef=37816,tf=37817,nf=37818,rf=37819,sf=37820,af=37821,sc=36492,of=36494,lf=36495,f_=36283,cf=36284,uf=36285,df=36286,Db=3200,Lb=3201,p_=0,Ib=1,gr="",Gn="srgb",Ea="srgb-linear",ou="linear",dt="srgb",_s=7680,d0=519,Ub=512,Fb=513,kb=514,m_=515,Ob=516,Bb=517,zb=518,jb=519,h0=35044,f0="300 es",Gi=2e3,Bc=2001;class Ta{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ju=Math.PI/180,hf=180/Math.PI;function Vo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[t&255]+rn[t>>8&255]+rn[t>>16&255]+rn[t>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[n&63|128]+rn[n>>8&255]+"-"+rn[n>>16&255]+rn[n>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function Mn(t,e,n){return Math.max(e,Math.min(n,t))}function Vb(t,e){return(t%e+e)%e}function Vu(t,e,n){return(1-n)*t+n*e}function Ba(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function yn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,n=0){Ue.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],g=i[5],x=i[8],v=r[0],m=r[3],u=r[6],y=r[1],_=r[4],M=r[7],A=r[2],T=r[5],C=r[8];return s[0]=a*v+o*y+l*A,s[3]=a*m+o*_+l*T,s[6]=a*u+o*M+l*C,s[1]=c*v+h*y+f*A,s[4]=c*m+h*_+f*T,s[7]=c*u+h*M+f*C,s[2]=d*v+g*y+x*A,s[5]=d*m+g*_+x*T,s[8]=d*u+g*M+x*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*s,g=c*s-a*l,x=n*f+i*d+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=f*v,e[1]=(r*c-h*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(h*n-r*l)*v,e[5]=(r*s-o*n)*v,e[6]=g*v,e[7]=(i*l-c*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Hu.makeScale(e,n)),this}rotate(e){return this.premultiply(Hu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Hu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hu=new je;function g_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Hb(){const t=zc("canvas");return t.style.display="block",t}const p0={};function Ja(t){t in p0||(p0[t]=!0,console.warn(t))}function Gb(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Wb(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Xb(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Je={enabled:!0,workingColorSpace:Ea,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===dt&&(t.r=Yi(t.r),t.g=Yi(t.g),t.b=Yi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===dt&&(t.r=ra(t.r),t.g=ra(t.g),t.b=ra(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===gr?ou:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Yi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ra(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const m0=[.64,.33,.3,.6,.15,.06],g0=[.2126,.7152,.0722],v0=[.3127,.329],x0=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),y0=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[Ea]:{primaries:m0,whitePoint:v0,transfer:ou,toXYZ:x0,fromXYZ:y0,luminanceCoefficients:g0,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:m0,whitePoint:v0,transfer:dt,toXYZ:x0,fromXYZ:y0,luminanceCoefficients:g0,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}});let Ms;class $b{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=zc("canvas")),Ms.width=e.width,Ms.height=e.height;const i=Ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Yi(n[i]/255)*255):n[i]=Yi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qb=0;class v_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=Vo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Gu(r[a].image)):s.push(Gu(r[a]))}else s=Gu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Gu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$b.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yb=0;class pn extends Ta{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=ns,r=ns,s=bi,a=is,o=li,l=tr,c=pn.DEFAULT_ANISOTROPY,h=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=Vo(),this.name="",this.source=new v_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==i_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kh:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case Oh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kh:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case Oh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=i_;pn.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,n=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],g=l[5],x=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(g+1)/2,A=(u+1)/2,T=(h+d)/4,C=(f+v)/4,R=(x+m)/4;return _>M&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=C/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=R/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=R/s),this.set(i,r,s,n),this}let y=Math.sqrt((m-x)*(m-x)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-x)/y,this.y=(f-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kb extends Ta{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ft(0,0,e,n),this.scissorTest=!1,this.viewport=new ft(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new v_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends Kb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class x_ extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=hi,this.minFilter=hi,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zb extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=hi,this.minFilter=hi,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3];const d=s[a+0],g=s[a+1],x=s[a+2],v=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f;return}if(o===1){e[n+0]=d,e[n+1]=g,e[n+2]=x,e[n+3]=v;return}if(f!==v||l!==d||c!==g||h!==x){let m=1-o;const u=l*d+c*g+h*x+f*v,y=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const A=Math.sqrt(_),T=Math.atan2(A,u*y);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}const M=o*y;if(l=l*m+d*M,c=c*m+g*M,h=h*m+x*M,f=f*m+v*M,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=A,c*=A,h*=A,f*=A}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],d=s[a+1],g=s[a+2],x=s[a+3];return e[n]=o*x+h*f+l*g-c*d,e[n+1]=l*x+h*d+c*f-o*g,e[n+2]=c*x+h*g+o*d-l*f,e[n+3]=h*x-o*f-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),d=l(i/2),g=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*h*f+c*g*x,this._y=c*g*f-d*h*x,this._z=c*h*x+d*g*f,this._w=c*h*f-d*g*x;break;case"YXZ":this._x=d*h*f+c*g*x,this._y=c*g*f-d*h*x,this._z=c*h*x-d*g*f,this._w=c*h*f+d*g*x;break;case"ZXY":this._x=d*h*f-c*g*x,this._y=c*g*f+d*h*x,this._z=c*h*x+d*g*f,this._w=c*h*f-d*g*x;break;case"ZYX":this._x=d*h*f-c*g*x,this._y=c*g*f+d*h*x,this._z=c*h*x-d*g*f,this._w=c*h*f+d*g*x;break;case"YZX":this._x=d*h*f+c*g*x,this._y=c*g*f+d*h*x,this._z=c*h*x-d*g*f,this._w=c*h*f-d*g*x;break;case"XZY":this._x=d*h*f-c*g*x,this._y=c*g*f-d*h*x,this._z=c*h*x+d*g*f,this._w=c*h*f+d*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],f=n[10],d=i+o+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>f){const g=2*Math.sqrt(1+i-o-f);this._w=(h-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>f){const g=2*Math.sqrt(1+o-i-f);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+f-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wu.copy(this).projectOnVector(e),this.sub(Wu)}reflect(e){return this.sub(Wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wu=new U,_0=new Ho;class Go{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ei):ei.fromBufferAttribute(s,a),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fl.copy(i.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),pl.subVectors(this.max,za),Ss.subVectors(e.a,za),ws.subVectors(e.b,za),bs.subVectors(e.c,za),ar.subVectors(ws,Ss),or.subVectors(bs,ws),kr.subVectors(Ss,bs);let n=[0,-ar.z,ar.y,0,-or.z,or.y,0,-kr.z,kr.y,ar.z,0,-ar.x,or.z,0,-or.x,kr.z,0,-kr.x,-ar.y,ar.x,0,-or.y,or.x,0,-kr.y,kr.x,0];return!Xu(n,Ss,ws,bs,pl)||(n=[1,0,0,0,1,0,0,0,1],!Xu(n,Ss,ws,bs,pl))?!1:(ml.crossVectors(ar,or),n=[ml.x,ml.y,ml.z],Xu(n,Ss,ws,bs,pl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new U,new U,new U,new U,new U,new U,new U,new U],ei=new U,fl=new Go,Ss=new U,ws=new U,bs=new U,ar=new U,or=new U,kr=new U,za=new U,pl=new U,ml=new U,Or=new U;function Xu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Or.fromArray(t,s);const o=r.x*Math.abs(Or.x)+r.y*Math.abs(Or.y)+r.z*Math.abs(Or.z),l=e.dot(Or),c=n.dot(Or),h=i.dot(Or);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Qb=new Go,ja=new U,$u=new U;class Wo{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Qb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ja.subVectors(e,this.center);const n=ja.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ja,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ja.copy(e.center).add($u)),this.expandByPoint(ja.copy(e.center).sub($u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new U,qu=new U,gl=new U,lr=new U,Yu=new U,vl=new U,Ku=new U;class Ap{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){qu.copy(e).add(n).multiplyScalar(.5),gl.copy(n).sub(e).normalize(),lr.copy(this.origin).sub(qu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(gl),o=lr.dot(this.direction),l=-lr.dot(gl),c=lr.lengthSq(),h=Math.abs(1-a*a);let f,d,g,x;if(h>0)if(f=a*l-o,d=a*o-l,x=s*h,f>=0)if(d>=-x)if(d<=x){const v=1/h;f*=v,d*=v,g=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),g=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(qu).addScaledVector(gl,d),g}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,i,r,s){Yu.subVectors(n,e),vl.subVectors(i,e),Ku.crossVectors(Yu,vl);let a=this.direction.dot(Ku),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;lr.subVectors(this.origin,e);const l=o*this.direction.dot(vl.crossVectors(lr,vl));if(l<0)return null;const c=o*this.direction.dot(Yu.cross(lr));if(c<0||l+c>a)return null;const h=-o*lr.dot(Ku);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,i,r,s,a,o,l,c,h,f,d,g,x,v,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,f,d,g,x,v,m)}set(e,n,i,r,s,a,o,l,c,h,f,d,g,x,v,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=g,u[7]=x,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Es.setFromMatrixColumn(e,0).length(),s=1/Es.setFromMatrixColumn(e,1).length(),a=1/Es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,g=a*f,x=o*h,v=o*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=g+x*c,n[5]=d-v*c,n[9]=-o*l,n[2]=v-d*c,n[6]=x+g*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*h,g=l*f,x=c*h,v=c*f;n[0]=d+v*o,n[4]=x*o-g,n[8]=a*c,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=g*o-x,n[6]=v+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*h,g=l*f,x=c*h,v=c*f;n[0]=d-v*o,n[4]=-a*f,n[8]=x+g*o,n[1]=g+x*o,n[5]=a*h,n[9]=v-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*h,g=a*f,x=o*h,v=o*f;n[0]=l*h,n[4]=x*c-g,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=g*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,g=a*c,x=o*l,v=o*c;n[0]=l*h,n[4]=v-d*f,n[8]=x*f+g,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=g*f+x,n[10]=d-v*f}else if(e.order==="XZY"){const d=a*l,g=a*c,x=o*l,v=o*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=d*f+v,n[5]=a*h,n[9]=g*f-x,n[2]=x*f-g,n[6]=o*h,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jb,e,eE)}lookAt(e,n,i){const r=this.elements;return Rn.subVectors(e,n),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),cr.crossVectors(i,Rn),cr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),cr.crossVectors(i,Rn)),cr.normalize(),xl.crossVectors(Rn,cr),r[0]=cr.x,r[4]=xl.x,r[8]=Rn.x,r[1]=cr.y,r[5]=xl.y,r[9]=Rn.y,r[2]=cr.z,r[6]=xl.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],g=i[13],x=i[2],v=i[6],m=i[10],u=i[14],y=i[3],_=i[7],M=i[11],A=i[15],T=r[0],C=r[4],R=r[8],w=r[12],S=r[1],N=r[5],V=r[9],I=r[13],z=r[2],H=r[6],X=r[10],K=r[14],L=r[3],q=r[7],Z=r[11],oe=r[15];return s[0]=a*T+o*S+l*z+c*L,s[4]=a*C+o*N+l*H+c*q,s[8]=a*R+o*V+l*X+c*Z,s[12]=a*w+o*I+l*K+c*oe,s[1]=h*T+f*S+d*z+g*L,s[5]=h*C+f*N+d*H+g*q,s[9]=h*R+f*V+d*X+g*Z,s[13]=h*w+f*I+d*K+g*oe,s[2]=x*T+v*S+m*z+u*L,s[6]=x*C+v*N+m*H+u*q,s[10]=x*R+v*V+m*X+u*Z,s[14]=x*w+v*I+m*K+u*oe,s[3]=y*T+_*S+M*z+A*L,s[7]=y*C+_*N+M*H+A*q,s[11]=y*R+_*V+M*X+A*Z,s[15]=y*w+_*I+M*K+A*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],g=e[14],x=e[3],v=e[7],m=e[11],u=e[15];return x*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*g-i*l*g)+v*(+n*l*g-n*c*d+s*a*d-r*a*g+r*c*h-s*l*h)+m*(+n*c*f-n*o*g-s*a*f+i*a*g+s*o*h-i*c*h)+u*(-r*o*h-n*l*f+n*o*d+r*a*f-i*a*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],g=e[11],x=e[12],v=e[13],m=e[14],u=e[15],y=f*m*c-v*d*c+v*l*g-o*m*g-f*l*u+o*d*u,_=x*d*c-h*m*c-x*l*g+a*m*g+h*l*u-a*d*u,M=h*v*c-x*f*c+x*o*g-a*v*g-h*o*u+a*f*u,A=x*f*l-h*v*l-x*o*d+a*v*d+h*o*m-a*f*m,T=n*y+i*_+r*M+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=y*C,e[1]=(v*d*s-f*m*s-v*r*g+i*m*g+f*r*u-i*d*u)*C,e[2]=(o*m*s-v*l*s+v*r*c-i*m*c-o*r*u+i*l*u)*C,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*g-i*l*g)*C,e[4]=_*C,e[5]=(h*m*s-x*d*s+x*r*g-n*m*g-h*r*u+n*d*u)*C,e[6]=(x*l*s-a*m*s-x*r*c+n*m*c+a*r*u-n*l*u)*C,e[7]=(a*d*s-h*l*s+h*r*c-n*d*c-a*r*g+n*l*g)*C,e[8]=M*C,e[9]=(x*f*s-h*v*s-x*i*g+n*v*g+h*i*u-n*f*u)*C,e[10]=(a*v*s-x*o*s+x*i*c-n*v*c-a*i*u+n*o*u)*C,e[11]=(h*o*s-a*f*s-h*i*c+n*f*c+a*i*g-n*o*g)*C,e[12]=A*C,e[13]=(h*v*r-x*f*r+x*i*d-n*v*d-h*i*m+n*f*m)*C,e[14]=(x*o*r-a*v*r-x*i*l+n*v*l+a*i*m-n*o*m)*C,e[15]=(a*f*r-h*o*r+h*i*l-n*f*l-a*i*d+n*o*d)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,f=o+o,d=s*c,g=s*h,x=s*f,v=a*h,m=a*f,u=o*f,y=l*c,_=l*h,M=l*f,A=i.x,T=i.y,C=i.z;return r[0]=(1-(v+u))*A,r[1]=(g+M)*A,r[2]=(x-_)*A,r[3]=0,r[4]=(g-M)*T,r[5]=(1-(d+u))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(x+_)*C,r[9]=(m-y)*C,r[10]=(1-(d+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Es.set(r[0],r[1],r[2]).length();const a=Es.set(r[4],r[5],r[6]).length(),o=Es.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const c=1/s,h=1/a,f=1/o;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,n.setFromRotationMatrix(ti),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Gi){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let g,x;if(o===Gi)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Bc)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Gi){const l=this.elements,c=1/(n-e),h=1/(i-r),f=1/(a-s),d=(n+e)*c,g=(i+r)*h;let x,v;if(o===Gi)x=(a+s)*f,v=-2*f;else if(o===Bc)x=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Es=new U,ti=new St,Jb=new U(0,0,0),eE=new U(1,1,1),cr=new U,xl=new U,Rn=new U,M0=new St,S0=new Ho;class Ri{constructor(e=0,n=0,i=0,r=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return M0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(M0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return S0.setFromEuler(this),this.setFromQuaternion(S0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class y_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tE=0;const w0=new U,Ts=new Ho,Ii=new St,yl=new U,Va=new U,nE=new U,iE=new Ho,b0=new U(1,0,0),E0=new U(0,1,0),T0=new U(0,0,1),C0={type:"added"},rE={type:"removed"},Cs={type:"childadded",child:null},Zu={type:"childremoved",child:null};class $t extends Ta{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new U,n=new Ri,i=new Ho,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new je}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new y_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(b0,e)}rotateY(e){return this.rotateOnAxis(E0,e)}rotateZ(e){return this.rotateOnAxis(T0,e)}translateOnAxis(e,n){return w0.copy(e).applyQuaternion(this.quaternion),this.position.add(w0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(b0,e)}translateY(e){return this.translateOnAxis(E0,e)}translateZ(e){return this.translateOnAxis(T0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yl.copy(e):yl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Va,yl,this.up):Ii.lookAt(yl,Va,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),Ts.setFromRotationMatrix(Ii),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(C0),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rE),Zu.child=e,this.dispatchEvent(Zu),Zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(C0),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,e,nE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,iE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),g=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new U(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new U,Ui=new U,Qu=new U,Fi=new U,As=new U,Rs=new U,A0=new U,Ju=new U,ed=new U,td=new U,nd=new ft,id=new ft,rd=new ft;class oi{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ni.subVectors(e,n),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ni.subVectors(r,n),Ui.subVectors(i,n),Qu.subVectors(e,n);const a=ni.dot(ni),o=ni.dot(Ui),l=ni.dot(Qu),c=Ui.dot(Ui),h=Ui.dot(Qu),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,g=(c*l-o*h)*d,x=(a*h-o*l)*d;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(a,Fi.y),l.addScaledVector(o,Fi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return nd.setScalar(0),id.setScalar(0),rd.setScalar(0),nd.fromBufferAttribute(e,n),id.fromBufferAttribute(e,i),rd.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(nd,s.x),a.addScaledVector(id,s.y),a.addScaledVector(rd,s.z),a}static isFrontFacing(e,n,i,r){return ni.subVectors(i,n),Ui.subVectors(e,n),ni.cross(Ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ni.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;As.subVectors(r,i),Rs.subVectors(s,i),Ju.subVectors(e,i);const l=As.dot(Ju),c=Rs.dot(Ju);if(l<=0&&c<=0)return n.copy(i);ed.subVectors(e,r);const h=As.dot(ed),f=Rs.dot(ed);if(h>=0&&f<=h)return n.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(As,a);td.subVectors(e,s);const g=As.dot(td),x=Rs.dot(td);if(x>=0&&g<=x)return n.copy(s);const v=g*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(Rs,o);const m=h*x-g*f;if(m<=0&&f-h>=0&&g-x>=0)return A0.subVectors(s,r),o=(f-h)/(f-h+(g-x)),n.copy(r).addScaledVector(A0,o);const u=1/(m+v+d);return a=v*u,o=d*u,n.copy(i).addScaledVector(As,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const __={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},_l={h:0,s:0,l:0};function sd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Re{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=Vb(e,1),n=Mn(n,0,1),i=Mn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=sd(a,s,e+1/3),this.g=sd(a,s,e),this.b=sd(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=__[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Je.fromWorkingColorSpace(sn.copy(this),e),Math.round(Mn(sn.r*255,0,255))*65536+Math.round(Mn(sn.g*255,0,255))*256+Math.round(Mn(sn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(sn.copy(this),n);const i=sn.r,r=sn.g,s=sn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(sn.copy(this),n),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Gn){Je.fromWorkingColorSpace(sn.copy(this),e);const n=sn.r,i=sn.g,r=sn.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+n,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ur),e.getHSL(_l);const i=Vu(ur.h,_l.h,n),r=Vu(ur.s,_l.s,n),s=Vu(ur.l,_l.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new Re;Re.NAMES=__;let sE=0;class vs extends Ta{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=Vo(),this.name="",this.blending=hn,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=Ch,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hn&&(i.blending=this.blending),this.side!==Nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Th&&(i.blendSrc=this.blendSrc),this.blendDst!==Ch&&(i.blendDst=this.blendDst),this.blendEquation!==Zr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ma&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==d0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yr extends vs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Ky,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new U,Ml=new Ue;class mn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=h0,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ml.fromBufferAttribute(this,n),Ml.applyMatrix3(e),this.setXY(n,Ml.x,Ml.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ba(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=yn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ba(n,this.array)),n}setX(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ba(n,this.array)),n}setY(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ba(n,this.array)),n}setZ(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ba(n,this.array)),n}setW(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),r=yn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),r=yn(r,this.array),s=yn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==h0&&(e.usage=this.usage),e}}class M_ extends mn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class S_ extends mn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Et extends mn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let aE=0;const Vn=new St,ad=new $t,Ps=new U,Pn=new Go,Ha=new Go,Vt=new U;class qt extends Ta{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g_(e)?S_:M_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return ad.lookAt(e),ad.updateMatrix(),this.applyMatrix4(ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Et(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ha.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(Pn.min,Ha.min),Pn.expandByPoint(Vt),Vt.addVectors(Pn.max,Ha.max),Pn.expandByPoint(Vt)):(Pn.expandByPoint(Ha.min),Pn.expandByPoint(Ha.max))}Pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Vt.fromBufferAttribute(o,c),l&&(Ps.fromBufferAttribute(e,c),Vt.add(Ps)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new U,l[R]=new U;const c=new U,h=new U,f=new U,d=new Ue,g=new Ue,x=new Ue,v=new U,m=new U;function u(R,w,S){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,w),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,R),g.fromBufferAttribute(s,w),x.fromBufferAttribute(s,S),h.sub(c),f.sub(c),g.sub(d),x.sub(d);const N=1/(g.x*x.y-x.x*g.y);isFinite(N)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(N),m.copy(f).multiplyScalar(g.x).addScaledVector(h,-x.x).multiplyScalar(N),o[R].add(v),o[w].add(v),o[S].add(v),l[R].add(m),l[w].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,w=y.length;R<w;++R){const S=y[R],N=S.start,V=S.count;for(let I=N,z=N+V;I<z;I+=3)u(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const _=new U,M=new U,A=new U,T=new U;function C(R){A.fromBufferAttribute(r,R),T.copy(A);const w=o[R];_.copy(w),_.sub(A.multiplyScalar(A.dot(w))).normalize(),M.crossVectors(T,w);const N=M.dot(l[R])<0?-1:1;a.setXYZW(R,_.x,_.y,_.z,N)}for(let R=0,w=y.length;R<w;++R){const S=y[R],N=S.start,V=S.count;for(let I=N,z=N+V;I<z;I+=3)C(e.getX(I+0)),C(e.getX(I+1)),C(e.getX(I+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,f=new U;if(e)for(let d=0,g=e.count;d<g;d+=3){const x=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Vt.fromBufferAttribute(e,n),Vt.normalize(),e.setXYZ(n,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let g=0,x=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?g=l[v]*o.data.stride+o.offset:g=l[v]*h;for(let u=0;u<h;u++)d[x++]=c[g++]}return new mn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],g=e(d,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const g=c[f];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,g=f.length;d<g;d++)h.push(f[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const R0=new St,Br=new Ap,Sl=new Wo,P0=new U,wl=new U,bl=new U,El=new U,od=new U,Tl=new U,N0=new U,Cl=new U;class on extends $t{constructor(e=new qt,n=new yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Tl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(od.fromBufferAttribute(f,e),a?Tl.addScaledVector(od,h):Tl.addScaledVector(od.sub(n),h))}n.add(Tl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(s),Br.copy(e.ray).recast(e.near),!(Sl.containsPoint(Br.origin)===!1&&(Br.intersectSphere(Sl,P0)===null||Br.origin.distanceToSquared(P0)>(e.far-e.near)**2))&&(R0.copy(s).invert(),Br.copy(e.ray).applyMatrix4(R0),!(i.boundingBox!==null&&Br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const m=d[x],u=a[m.materialIndex],y=Math.max(m.start,g.start),_=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let M=y,A=_;M<A;M+=3){const T=o.getX(M),C=o.getX(M+1),R=o.getX(M+2);r=Al(this,u,e,i,c,h,f,T,C,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),v=Math.min(o.count,g.start+g.count);for(let m=x,u=v;m<u;m+=3){const y=o.getX(m),_=o.getX(m+1),M=o.getX(m+2);r=Al(this,a,e,i,c,h,f,y,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const m=d[x],u=a[m.materialIndex],y=Math.max(m.start,g.start),_=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=y,A=_;M<A;M+=3){const T=M,C=M+1,R=M+2;r=Al(this,u,e,i,c,h,f,T,C,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let m=x,u=v;m<u;m+=3){const y=m,_=m+1,M=m+2;r=Al(this,a,e,i,c,h,f,y,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function oE(t,e,n,i,r,s,a,o){let l;if(e.side===Cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Nr,o),l===null)return null;Cl.copy(o),Cl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Cl);return c<n.near||c>n.far?null:{distance:c,point:Cl.clone(),object:t}}function Al(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,wl),t.getVertexPosition(l,bl),t.getVertexPosition(c,El);const h=oE(t,e,n,i,wl,bl,El,N0);if(h){const f=new U;oi.getBarycoord(N0,wl,bl,El,f),r&&(h.uv=oi.getInterpolatedAttribute(r,o,l,c,f,new Ue)),s&&(h.uv1=oi.getInterpolatedAttribute(s,o,l,c,f,new Ue)),a&&(h.normal=oi.getInterpolatedAttribute(a,o,l,c,f,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};oi.getNormal(wl,bl,El,d.normal),h.face=d,h.barycoord=f}return h}class Ki extends qt{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,g=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(f,2));function x(v,m,u,y,_,M,A,T,C,R,w){const S=M/C,N=A/R,V=M/2,I=A/2,z=T/2,H=C+1,X=R+1;let K=0,L=0;const q=new U;for(let Z=0;Z<X;Z++){const oe=Z*N-I;for(let ue=0;ue<H;ue++){const Ne=ue*S-V;q[v]=Ne*y,q[m]=oe*_,q[u]=z,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[u]=T>0?1:-1,h.push(q.x,q.y,q.z),f.push(ue/C),f.push(1-Z/R),K+=1}}for(let Z=0;Z<R;Z++)for(let oe=0;oe<C;oe++){const ue=d+oe+H*Z,Ne=d+oe+H*(Z+1),$=d+(oe+1)+H*(Z+1),ne=d+(oe+1)+H*Z;l.push(ue,Ne,ne),l.push(Ne,$,ne),L+=6}o.addGroup(g,L,w),g+=L,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _a(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=_a(t[n]);for(const r in i)e[r]=i[r]}return e}function lE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function w_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Uo={clone:_a,merge:un};var cE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends vs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cE,this.fragmentShader=uE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_a(e.uniforms),this.uniformsGroups=lE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class b_ extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Gi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new U,D0=new Ue,L0=new Ue;class Ln extends b_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ju*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hf*2*Math.atan(Math.tan(ju*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,n){return this.getViewBounds(e,D0,L0),n.subVectors(L0,D0)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ju*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=-90,Ds=1;class dE extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(Ns,Ds,e,n);r.layers=this.layers,this.add(r);const s=new Ln(Ns,Ds,e,n);s.layers=this.layers,this.add(s);const a=new Ln(Ns,Ds,e,n);a.layers=this.layers,this.add(a);const o=new Ln(Ns,Ds,e,n);o.layers=this.layers,this.add(o);const l=new Ln(Ns,Ds,e,n);l.layers=this.layers,this.add(l);const c=new Ln(Ns,Ds,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,d,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class E_ extends pn{constructor(e,n,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:ga,super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hE extends fi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new E_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ki(5,5,5),s=new ln({name:"CubemapFromEquirect",uniforms:_a(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:$i});s.uniforms.tEquirect.value=n;const a=new on(r,s),o=n.minFilter;return n.minFilter===is&&(n.minFilter=bi),new dE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const ld=new U,fE=new U,pE=new je;class Yr{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ld.subVectors(i,n).cross(fE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ld),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||pE.getNormalMatrix(e),r=this.coplanarPoint(ld).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new Wo,Rl=new U;class Rp{constructor(e=new Yr,n=new Yr,i=new Yr,r=new Yr,s=new Yr,a=new Yr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Gi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],g=r[8],x=r[9],v=r[10],m=r[11],u=r[12],y=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,m-g,M-u).normalize(),i[1].setComponents(l+s,d+c,m+g,M+u).normalize(),i[2].setComponents(l+a,d+h,m+x,M+y).normalize(),i[3].setComponents(l-a,d-h,m-x,M-y).normalize(),i[4].setComponents(l-o,d-f,m-v,M-_).normalize(),n===Gi)i[5].setComponents(l+o,d+f,m+v,M+_).normalize();else if(n===Bc)i[5].setComponents(o,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Rl.x=r.normal.x>0?e.max.x:e.min.x,Rl.y=r.normal.y>0?e.max.y:e.min.y,Rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function T_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function mE(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,h);else{f.sort((g,x)=>g.start-x.start);let d=0;for(let g=1;g<f.length;g++){const x=f[d],v=f[g];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++d,f[d]=v)}f.length=d+1;for(let g=0,x=f.length;g<x;g++){const v=f[g];t.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Xo extends qt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,d=n/l,g=[],x=[],v=[],m=[];for(let u=0;u<h;u++){const y=u*d-a;for(let _=0;_<c;_++){const M=_*f-s;x.push(M,-y,0),v.push(0,0,1),m.push(_/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<o;y++){const _=y+c*u,M=y+c*(u+1),A=y+1+c*(u+1),T=y+1+c*u;g.push(_,M,T),g.push(M,A,T)}this.setIndex(g),this.setAttribute("position",new Et(x,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.widthSegments,e.heightSegments)}}var gE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vE=`#ifdef USE_ALPHAHASH
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
#endif`,xE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ME=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SE=`#ifdef USE_AOMAP
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
#endif`,wE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bE=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,EE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RE=`#ifdef USE_IRIDESCENCE
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
#endif`,PE=`#ifdef USE_BUMPMAP
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
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,BE=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,zE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jE=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XE="gl_FragColor = linearToOutputTexel( gl_FragColor );",$E=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,YE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KE=`#ifdef USE_ENVMAP
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
#endif`,ZE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,JE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iT=`#ifdef USE_GRADIENTMAP
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
}`,rT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oT=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,lT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,cT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,pT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mT=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_T=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ST=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ET=`#if defined( USE_POINTS_UV )
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
#endif`,TT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NT=`#ifdef USE_MORPHTARGETS
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
#endif`,DT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,IT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,UT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OT=`#ifdef USE_NORMALMAP
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
#endif`,BT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,WT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$T=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,QT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,JT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,eC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,tC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nC=`#ifdef USE_SKINNING
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
#endif`,iC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rC=`#ifdef USE_SKINNING
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
#endif`,sC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cC=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uC=`#ifdef USE_TRANSMISSION
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
#endif`,dC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gC=`uniform sampler2D t2D;
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
}`,vC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_C=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MC=`#include <common>
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
}`,SC=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wC=`#define DISTANCE
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
}`,bC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,EC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CC=`uniform float scale;
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
}`,AC=`uniform vec3 diffuse;
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
}`,RC=`#include <common>
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
}`,PC=`uniform vec3 diffuse;
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
}`,NC=`#define LAMBERT
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
}`,DC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,LC=`#define MATCAP
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
}`,IC=`#define MATCAP
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
}`,UC=`#define NORMAL
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
}`,FC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kC=`#define PHONG
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
}`,OC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,BC=`#define STANDARD
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
}`,zC=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,jC=`#define TOON
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
}`,VC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,HC=`uniform float size;
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
}`,GC=`uniform vec3 diffuse;
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
}`,WC=`#include <common>
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
}`,XC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,$C=`uniform float rotation;
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
}`,qC=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:gE,alphahash_pars_fragment:vE,alphamap_fragment:xE,alphamap_pars_fragment:yE,alphatest_fragment:_E,alphatest_pars_fragment:ME,aomap_fragment:SE,aomap_pars_fragment:wE,batching_pars_vertex:bE,batching_vertex:EE,begin_vertex:TE,beginnormal_vertex:CE,bsdfs:AE,iridescence_fragment:RE,bumpmap_pars_fragment:PE,clipping_planes_fragment:NE,clipping_planes_pars_fragment:DE,clipping_planes_pars_vertex:LE,clipping_planes_vertex:IE,color_fragment:UE,color_pars_fragment:FE,color_pars_vertex:kE,color_vertex:OE,common:BE,cube_uv_reflection_fragment:zE,defaultnormal_vertex:jE,displacementmap_pars_vertex:VE,displacementmap_vertex:HE,emissivemap_fragment:GE,emissivemap_pars_fragment:WE,colorspace_fragment:XE,colorspace_pars_fragment:$E,envmap_fragment:qE,envmap_common_pars_fragment:YE,envmap_pars_fragment:KE,envmap_pars_vertex:ZE,envmap_physical_pars_fragment:lT,envmap_vertex:QE,fog_vertex:JE,fog_pars_vertex:eT,fog_fragment:tT,fog_pars_fragment:nT,gradientmap_pars_fragment:iT,lightmap_pars_fragment:rT,lights_lambert_fragment:sT,lights_lambert_pars_fragment:aT,lights_pars_begin:oT,lights_toon_fragment:cT,lights_toon_pars_fragment:uT,lights_phong_fragment:dT,lights_phong_pars_fragment:hT,lights_physical_fragment:fT,lights_physical_pars_fragment:pT,lights_fragment_begin:mT,lights_fragment_maps:gT,lights_fragment_end:vT,logdepthbuf_fragment:xT,logdepthbuf_pars_fragment:yT,logdepthbuf_pars_vertex:_T,logdepthbuf_vertex:MT,map_fragment:ST,map_pars_fragment:wT,map_particle_fragment:bT,map_particle_pars_fragment:ET,metalnessmap_fragment:TT,metalnessmap_pars_fragment:CT,morphinstance_vertex:AT,morphcolor_vertex:RT,morphnormal_vertex:PT,morphtarget_pars_vertex:NT,morphtarget_vertex:DT,normal_fragment_begin:LT,normal_fragment_maps:IT,normal_pars_fragment:UT,normal_pars_vertex:FT,normal_vertex:kT,normalmap_pars_fragment:OT,clearcoat_normal_fragment_begin:BT,clearcoat_normal_fragment_maps:zT,clearcoat_pars_fragment:jT,iridescence_pars_fragment:VT,opaque_fragment:HT,packing:GT,premultiplied_alpha_fragment:WT,project_vertex:XT,dithering_fragment:$T,dithering_pars_fragment:qT,roughnessmap_fragment:YT,roughnessmap_pars_fragment:KT,shadowmap_pars_fragment:ZT,shadowmap_pars_vertex:QT,shadowmap_vertex:JT,shadowmask_pars_fragment:eC,skinbase_vertex:tC,skinning_pars_vertex:nC,skinning_vertex:iC,skinnormal_vertex:rC,specularmap_fragment:sC,specularmap_pars_fragment:aC,tonemapping_fragment:oC,tonemapping_pars_fragment:lC,transmission_fragment:cC,transmission_pars_fragment:uC,uv_pars_fragment:dC,uv_pars_vertex:hC,uv_vertex:fC,worldpos_vertex:pC,background_vert:mC,background_frag:gC,backgroundCube_vert:vC,backgroundCube_frag:xC,cube_vert:yC,cube_frag:_C,depth_vert:MC,depth_frag:SC,distanceRGBA_vert:wC,distanceRGBA_frag:bC,equirect_vert:EC,equirect_frag:TC,linedashed_vert:CC,linedashed_frag:AC,meshbasic_vert:RC,meshbasic_frag:PC,meshlambert_vert:NC,meshlambert_frag:DC,meshmatcap_vert:LC,meshmatcap_frag:IC,meshnormal_vert:UC,meshnormal_frag:FC,meshphong_vert:kC,meshphong_frag:OC,meshphysical_vert:BC,meshphysical_frag:zC,meshtoon_vert:jC,meshtoon_frag:VC,points_vert:HC,points_frag:GC,shadow_vert:WC,shadow_frag:XC,sprite_vert:$C,sprite_frag:qC},ce={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},_i={basic:{uniforms:un([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:un([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Re(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:un([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:un([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:un([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Re(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:un([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:un([ce.points,ce.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:un([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:un([ce.common,ce.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:un([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:un([ce.sprite,ce.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:un([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:un([ce.lights,ce.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};_i.physical={uniforms:un([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Pl={r:0,b:0,g:0},jr=new Ri,YC=new St;function KC(t,e,n,i,r,s,a){const o=new Re(0);let l=s===!0?0:1,c,h,f=null,d=0,g=null;function x(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?n:e).get(_)),_}function v(y){let _=!1;const M=x(y);M===null?u(o,l):M&&M.isColor&&(u(M,1),_=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(y,_){const M=x(_);M&&(M.isCubeTexture||M.mapping===au)?(h===void 0&&(h=new on(new Ki(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:_a(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),jr.copy(_.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(YC.makeRotationFromEuler(jr)),h.material.toneMapped=Je.getTransfer(M.colorSpace)!==dt,(f!==M||d!==M.version||g!==t.toneMapping)&&(h.material.needsUpdate=!0,f=M,d=M.version,g=t.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new on(new Xo(2,2),new ln({name:"BackgroundMaterial",uniforms:_a(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Je.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,g=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,_){y.getRGB(Pl,w_(t)),i.buffers.color.setClear(Pl.r,Pl.g,Pl.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(o,l)},render:v,addToRenderList:m}}function ZC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(S,N,V,I,z){let H=!1;const X=f(I,V,N);s!==X&&(s=X,c(s.object)),H=g(S,I,V,z),H&&x(S,I,V,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,M(S,N,V,I),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function h(S){return t.deleteVertexArray(S)}function f(S,N,V){const I=V.wireframe===!0;let z=i[S.id];z===void 0&&(z={},i[S.id]=z);let H=z[N.id];H===void 0&&(H={},z[N.id]=H);let X=H[I];return X===void 0&&(X=d(l()),H[I]=X),X}function d(S){const N=[],V=[],I=[];for(let z=0;z<n;z++)N[z]=0,V[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:I,object:S,attributes:{},index:null}}function g(S,N,V,I){const z=s.attributes,H=N.attributes;let X=0;const K=V.getAttributes();for(const L in K)if(K[L].location>=0){const Z=z[L];let oe=H[L];if(oe===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),Z===void 0||Z.attribute!==oe||oe&&Z.data!==oe.data)return!0;X++}return s.attributesNum!==X||s.index!==I}function x(S,N,V,I){const z={},H=N.attributes;let X=0;const K=V.getAttributes();for(const L in K)if(K[L].location>=0){let Z=H[L];Z===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const oe={};oe.attribute=Z,Z&&Z.data&&(oe.data=Z.data),z[L]=oe,X++}s.attributes=z,s.attributesNum=X,s.index=I}function v(){const S=s.newAttributes;for(let N=0,V=S.length;N<V;N++)S[N]=0}function m(S){u(S,0)}function u(S,N){const V=s.newAttributes,I=s.enabledAttributes,z=s.attributeDivisors;V[S]=1,I[S]===0&&(t.enableVertexAttribArray(S),I[S]=1),z[S]!==N&&(t.vertexAttribDivisor(S,N),z[S]=N)}function y(){const S=s.newAttributes,N=s.enabledAttributes;for(let V=0,I=N.length;V<I;V++)N[V]!==S[V]&&(t.disableVertexAttribArray(V),N[V]=0)}function _(S,N,V,I,z,H,X){X===!0?t.vertexAttribIPointer(S,N,V,z,H):t.vertexAttribPointer(S,N,V,I,z,H)}function M(S,N,V,I){v();const z=I.attributes,H=V.getAttributes(),X=N.defaultAttributeValues;for(const K in H){const L=H[K];if(L.location>=0){let q=z[K];if(q===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){const Z=q.normalized,oe=q.itemSize,ue=e.get(q);if(ue===void 0)continue;const Ne=ue.buffer,$=ue.type,ne=ue.bytesPerElement,he=$===t.INT||$===t.UNSIGNED_INT||q.gpuType===Sp;if(q.isInterleavedBufferAttribute){const le=q.data,Ee=le.stride,Fe=q.offset;if(le.isInstancedInterleavedBuffer){for(let Xe=0;Xe<L.locationSize;Xe++)u(L.location+Xe,le.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Xe=0;Xe<L.locationSize;Xe++)m(L.location+Xe);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let Xe=0;Xe<L.locationSize;Xe++)_(L.location+Xe,oe/L.locationSize,$,Z,Ee*ne,(Fe+oe/L.locationSize*Xe)*ne,he)}else{if(q.isInstancedBufferAttribute){for(let le=0;le<L.locationSize;le++)u(L.location+le,q.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let le=0;le<L.locationSize;le++)m(L.location+le);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let le=0;le<L.locationSize;le++)_(L.location+le,oe/L.locationSize,$,Z,oe*ne,oe/L.locationSize*le*ne,he)}}else if(X!==void 0){const Z=X[K];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(L.location,Z);break;case 3:t.vertexAttrib3fv(L.location,Z);break;case 4:t.vertexAttrib4fv(L.location,Z);break;default:t.vertexAttrib1fv(L.location,Z)}}}}y()}function A(){R();for(const S in i){const N=i[S];for(const V in N){const I=N[V];for(const z in I)h(I[z].object),delete I[z];delete N[V]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const N=i[S.id];for(const V in N){const I=N[V];for(const z in I)h(I[z].object),delete I[z];delete N[V]}delete i[S.id]}function C(S){for(const N in i){const V=i[N];if(V[S.id]===void 0)continue;const I=V[S.id];for(const z in I)h(I[z].object),delete I[z];delete V[S.id]}}function R(){w(),a=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function QC(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,f){f!==0&&(t.drawArraysInstanced(i,c,h,f),n.update(h,i,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x];n.update(g,i,1)}function l(c,h,f,d){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<c.length;x++)a(c[x],h[x],d[x]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,f);let x=0;for(let v=0;v<f;v++)x+=h[v]*d[v];n.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function JC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==li&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const R=C===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==tr&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Hi&&!R)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:g,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:A,maxSamples:T}}function e2(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Yr,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const g=f.length!==0||d||i!==0||r;return r=d,i=f.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,g){const x=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||x===null||x.length===0||s&&!m)s?h(null):c();else{const y=s?0:i,_=y*4;let M=u.clippingState||null;l.value=M,M=h(x,d,_,g);for(let A=0;A!==_;++A)M[A]=n[A];u.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,g,x){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,x!==!0||m===null){const u=g+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,M=g;_!==v;++_,M+=4)a.copy(f[_]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function t2(t){let e=new WeakMap;function n(a,o){return o===Uh?a.mapping=ga:o===Fh&&(a.mapping=va),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Uh||o===Fh)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hE(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Pp extends b_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ys=4,I0=[.125,.215,.35,.446,.526,.582],Qr=20,cd=new Pp,U0=new Re;let ud=null,dd=0,hd=0,fd=!1;const Kr=(1+Math.sqrt(5))/2,Ls=1/Kr,F0=[new U(-Kr,Ls,0),new U(Kr,Ls,0),new U(-Ls,0,Kr),new U(Ls,0,Kr),new U(0,Kr,-Ls),new U(0,Kr,Ls),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class k0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ud=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=B0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ud,dd,hd),this._renderer.xr.enabled=fd,e.scissorTest=!1,Nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ga||e.mapping===va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ud=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:qi,format:li,colorSpace:Ea,depthBuffer:!1},r=O0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=O0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n2(s)),this._blurMaterial=i2(s,e,n)}return r}_compileMaterial(e){const n=new on(this._lodPlanes[0],e);this._renderer.compile(n,cd)}_sceneToCubeUV(e,n,i,r){const o=new Ln(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(U0),h.toneMapping=Ar,h.autoClear=!1;const g=new yr({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),x=new on(new Ki,g);let v=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,v=!0):(g.color.copy(U0),v=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):y===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const _=this._cubeSize;Nl(r,y*_,u>2?_:0,_,_),h.setRenderTarget(r),v&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ga||e.mapping===va;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=z0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=B0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new on(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Nl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,cd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=F0[(r-s-1)%F0.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new on(this._lodPlanes[r],c),d=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Qr-1),v=s/x,m=isFinite(s)?1+Math.floor(h*v):Qr;m>Qr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qr}`);const u=[];let y=0;for(let C=0;C<Qr;++C){const R=C/v,w=Math.exp(-R*R/2);u.push(w),C===0?y+=w:C<m&&(y+=2*w)}for(let C=0;C<u.length;C++)u[C]=u[C]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-i;const M=this._sizeLods[r],A=3*M*(r>_-Ys?r-_+Ys:0),T=4*(this._cubeSize-M);Nl(n,A,T,3*M,2*M),l.setRenderTarget(n),l.render(f,cd)}}function n2(t){const e=[],n=[],i=[];let r=t;const s=t-Ys+1+I0.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Ys?l=I0[a-t+Ys-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,x=6,v=3,m=2,u=1,y=new Float32Array(v*x*g),_=new Float32Array(m*x*g),M=new Float32Array(u*x*g);for(let T=0;T<g;T++){const C=T%3*2/3-1,R=T>2?0:-1,w=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];y.set(w,v*x*T),_.set(d,m*x*T);const S=[T,T,T,T,T,T];M.set(S,u*x*T)}const A=new qt;A.setAttribute("position",new mn(y,v)),A.setAttribute("uv",new mn(_,m)),A.setAttribute("faceIndex",new mn(M,u)),e.push(A),r>Ys&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function O0(t,e,n){const i=new fi(t,e,n);return i.texture.mapping=au,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function i2(t,e,n){const i=new Float32Array(Qr),r=new U(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function B0(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Np(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function z0(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Np(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function r2(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Uh||l===Fh,h=l===ga||l===va;if(c||h){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new k0(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const g=o.image;return c&&g&&g.height>0||h&&g&&r(g)?(n===null&&(n=new k0(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function s2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ja("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function a2(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let m=0,u=v.length;m<u;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const x in g){const v=g[x];for(let m=0,u=v.length;m<u;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(f){const d=[],g=f.index,x=f.attributes.position;let v=0;if(g!==null){const y=g.array;v=g.version;for(let _=0,M=y.length;_<M;_+=3){const A=y[_+0],T=y[_+1],C=y[_+2];d.push(A,T,T,C,C,A)}}else if(x!==void 0){const y=x.array;v=x.version;for(let _=0,M=y.length/3-1;_<M;_+=3){const A=_+0,T=_+1,C=_+2;d.push(A,T,T,C,C,A)}}else return;const m=new(g_(d)?S_:M_)(d,1);m.version=v;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function h(f){const d=s.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function o2(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,g){t.drawElements(i,g,s,d*a),n.update(g,i,1)}function c(d,g,x){x!==0&&(t.drawElementsInstanced(i,g,s,d*a,x),n.update(g,i,x))}function h(d,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,d,0,x);let m=0;for(let u=0;u<x;u++)m+=g[u];n.update(m,i,1)}function f(d,g,x,v){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/a,g[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,d,0,v,0,x);let u=0;for(let y=0;y<x;y++)u+=g[y]*v[y];n.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function l2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function c2(t,e,n){const i=new WeakMap,r=new ft;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let S=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var g=S;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;x===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let A=o.attributes.position.count*M,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*T*4*f),R=new x_(C,A,T,f);R.type=Hi,R.needsUpdate=!0;const w=M*4;for(let N=0;N<f;N++){const V=u[N],I=y[N],z=_[N],H=A*T*4*N;for(let X=0;X<V.count;X++){const K=X*w;x===!0&&(r.fromBufferAttribute(V,X),C[H+K+0]=r.x,C[H+K+1]=r.y,C[H+K+2]=r.z,C[H+K+3]=0),v===!0&&(r.fromBufferAttribute(I,X),C[H+K+4]=r.x,C[H+K+5]=r.y,C[H+K+6]=r.z,C[H+K+7]=0),m===!0&&(r.fromBufferAttribute(z,X),C[H+K+8]=r.x,C[H+K+9]=r.y,C[H+K+10]=r.z,C[H+K+11]=z.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new Ue(A,T)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const v=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function u2(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class C_ extends pn{constructor(e,n,i,r,s,a,o,l,c,h=ia){if(h!==ia&&h!==ya)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ia&&(i=ps),i===void 0&&h===ya&&(i=xa),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:hi,this.minFilter=l!==void 0?l:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const A_=new pn,j0=new C_(1,1),R_=new x_,P_=new Zb,N_=new E_,V0=[],H0=[],G0=new Float32Array(16),W0=new Float32Array(9),X0=new Float32Array(4);function Ca(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=V0[r];if(s===void 0&&(s=new Float32Array(r),V0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function lu(t,e){let n=H0[e];n===void 0&&(n=new Int32Array(e),H0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function d2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function h2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),jt(n,e)}}function f2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),jt(n,e)}}function p2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),jt(n,e)}}function m2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(n,e)}else{if(zt(n,i))return;X0.set(i),t.uniformMatrix2fv(this.addr,!1,X0),jt(n,i)}}function g2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(n,e)}else{if(zt(n,i))return;W0.set(i),t.uniformMatrix3fv(this.addr,!1,W0),jt(n,i)}}function v2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(n,e)}else{if(zt(n,i))return;G0.set(i),t.uniformMatrix4fv(this.addr,!1,G0),jt(n,i)}}function x2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function y2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),jt(n,e)}}function _2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),jt(n,e)}}function M2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),jt(n,e)}}function S2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function w2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),jt(n,e)}}function b2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),jt(n,e)}}function E2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),jt(n,e)}}function T2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(j0.compareFunction=m_,s=j0):s=A_,n.setTexture2D(e||s,r)}function C2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||P_,r)}function A2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||N_,r)}function R2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||R_,r)}function P2(t){switch(t){case 5126:return d2;case 35664:return h2;case 35665:return f2;case 35666:return p2;case 35674:return m2;case 35675:return g2;case 35676:return v2;case 5124:case 35670:return x2;case 35667:case 35671:return y2;case 35668:case 35672:return _2;case 35669:case 35673:return M2;case 5125:return S2;case 36294:return w2;case 36295:return b2;case 36296:return E2;case 35678:case 36198:case 36298:case 36306:case 35682:return T2;case 35679:case 36299:case 36307:return C2;case 35680:case 36300:case 36308:case 36293:return A2;case 36289:case 36303:case 36311:case 36292:return R2}}function N2(t,e){t.uniform1fv(this.addr,e)}function D2(t,e){const n=Ca(e,this.size,2);t.uniform2fv(this.addr,n)}function L2(t,e){const n=Ca(e,this.size,3);t.uniform3fv(this.addr,n)}function I2(t,e){const n=Ca(e,this.size,4);t.uniform4fv(this.addr,n)}function U2(t,e){const n=Ca(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function F2(t,e){const n=Ca(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function k2(t,e){const n=Ca(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function O2(t,e){t.uniform1iv(this.addr,e)}function B2(t,e){t.uniform2iv(this.addr,e)}function z2(t,e){t.uniform3iv(this.addr,e)}function j2(t,e){t.uniform4iv(this.addr,e)}function V2(t,e){t.uniform1uiv(this.addr,e)}function H2(t,e){t.uniform2uiv(this.addr,e)}function G2(t,e){t.uniform3uiv(this.addr,e)}function W2(t,e){t.uniform4uiv(this.addr,e)}function X2(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||A_,s[a])}function $2(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||P_,s[a])}function q2(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||N_,s[a])}function Y2(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||R_,s[a])}function K2(t){switch(t){case 5126:return N2;case 35664:return D2;case 35665:return L2;case 35666:return I2;case 35674:return U2;case 35675:return F2;case 35676:return k2;case 5124:case 35670:return O2;case 35667:case 35671:return B2;case 35668:case 35672:return z2;case 35669:case 35673:return j2;case 5125:return V2;case 36294:return H2;case 36295:return G2;case 36296:return W2;case 35678:case 36198:case 36298:case 36306:case 35682:return X2;case 35679:case 36299:case 36307:return $2;case 35680:case 36300:case 36308:case 36293:return q2;case 36289:case 36303:case 36311:case 36292:return Y2}}class Z2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=P2(n.type)}}class Q2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=K2(n.type)}}class J2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const pd=/(\w+)(\])?(\[|\.)?/g;function $0(t,e){t.seq.push(e),t.map[e.id]=e}function eA(t,e,n){const i=t.name,r=i.length;for(pd.lastIndex=0;;){const s=pd.exec(i),a=pd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){$0(n,c===void 0?new Z2(o,t,e):new Q2(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new J2(o),$0(n,f)),n=f}}}class ac{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);eA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function q0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const tA=37297;let nA=0;function iA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Y0=new je;function rA(t){Je._getMatrix(Y0,Je.workingColorSpace,t);const e=`mat3( ${Y0.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case ou:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function K0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+iA(t.getShaderSource(e),a)}else return r}function sA(t,e){const n=rA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function aA(t,e){let n;switch(e){case Zy:n="Linear";break;case Qy:n="Reinhard";break;case Jy:n="Cineon";break;case e_:n="ACESFilmic";break;case t_:n="AgX";break;case n_:n="Neutral";break;case Pb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Dl=new U;function oA(){Je.getLuminanceCoefficients(Dl);const t=Dl.x.toFixed(4),e=Dl.y.toFixed(4),n=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function cA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function uA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function eo(t){return t!==""}function Z0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Q0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(t){return t.replace(dA,fA)}const hA=new Map;function fA(t,e){let n=He[e];if(n===void 0){const i=hA.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ff(n)}const pA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function J0(t){return t.replace(pA,mA)}function mA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function eg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Yy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===cb?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function vA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ga:case va:e="ENVMAP_TYPE_CUBE";break;case au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case va:e="ENVMAP_MODE_REFRACTION";break}return e}function yA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ky:e="ENVMAP_BLENDING_MULTIPLY";break;case Ab:e="ENVMAP_BLENDING_MIX";break;case Rb:e="ENVMAP_BLENDING_ADD";break}return e}function _A(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function MA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=gA(n),c=vA(n),h=xA(n),f=yA(n),d=_A(n),g=lA(n),x=cA(s),v=r.createProgram();let m,u,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(eo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(eo).join(`
`),u.length>0&&(u+=`
`)):(m=[eg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),u=[eg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ar?"#define TONE_MAPPING":"",n.toneMapping!==Ar?He.tonemapping_pars_fragment:"",n.toneMapping!==Ar?aA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,sA("linearToOutputTexel",n.outputColorSpace),oA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(eo).join(`
`)),a=ff(a),a=Z0(a,n),a=Q0(a,n),o=ff(o),o=Z0(o,n),o=Q0(o,n),a=J0(a),o=J0(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===f0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===f0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=y+m+a,M=y+u+o,A=q0(r,r.VERTEX_SHADER,_),T=q0(r,r.FRAGMENT_SHADER,M);r.attachShader(v,A),r.attachShader(v,T),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(N){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(v).trim(),I=r.getShaderInfoLog(A).trim(),z=r.getShaderInfoLog(T).trim();let H=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,A,T);else{const K=K0(r,A,"vertex"),L=K0(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+K+`
`+L)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(I===""||z==="")&&(X=!1);X&&(N.diagnostics={runnable:H,programLog:V,vertexShader:{log:I,prefix:m},fragmentShader:{log:z,prefix:u}})}r.deleteShader(A),r.deleteShader(T),R=new ac(r,v),w=uA(r,v)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,tA)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}let SA=0;class wA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new bA(e),n.set(e,i)),i}}class bA{constructor(e){this.id=SA++,this.code=e,this.usedTimes=0}}function EA(t,e,n,i,r,s,a){const o=new y_,l=new wA,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,N,V,I){const z=V.fog,H=I.geometry,X=w.isMeshStandardMaterial?V.environment:null,K=(w.isMeshStandardMaterial?n:e).get(w.envMap||X),L=K&&K.mapping===au?K.image.height:null,q=x[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const Z=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,oe=Z!==void 0?Z.length:0;let ue=0;H.morphAttributes.position!==void 0&&(ue=1),H.morphAttributes.normal!==void 0&&(ue=2),H.morphAttributes.color!==void 0&&(ue=3);let Ne,$,ne,he;if(q){const ut=_i[q];Ne=ut.vertexShader,$=ut.fragmentShader}else Ne=w.vertexShader,$=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),he=l.getFragmentShaderID(w);const le=t.getRenderTarget(),Ee=t.state.buffers.depth.getReversed(),Fe=I.isInstancedMesh===!0,Xe=I.isBatchedMesh===!0,Tt=!!w.map,tt=!!w.matcap,Dt=!!K,B=!!w.aoMap,zn=!!w.lightMap,Ke=!!w.bumpMap,Ze=!!w.normalMap,De=!!w.displacementMap,vt=!!w.emissiveMap,Pe=!!w.metalnessMap,P=!!w.roughnessMap,b=w.anisotropy>0,j=w.clearcoat>0,J=w.dispersion>0,ie=w.iridescence>0,Q=w.sheen>0,Te=w.transmission>0,fe=b&&!!w.anisotropyMap,ye=j&&!!w.clearcoatMap,nt=j&&!!w.clearcoatNormalMap,se=j&&!!w.clearcoatRoughnessMap,_e=ie&&!!w.iridescenceMap,Le=ie&&!!w.iridescenceThicknessMap,ke=Q&&!!w.sheenColorMap,Me=Q&&!!w.sheenRoughnessMap,Qe=!!w.specularMap,Ve=!!w.specularColorMap,pt=!!w.specularIntensityMap,F=Te&&!!w.transmissionMap,de=Te&&!!w.thicknessMap,Y=!!w.gradientMap,ee=!!w.alphaMap,ge=w.alphaTest>0,pe=!!w.alphaHash,Be=!!w.extensions;let Pt=Ar;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Pt=t.toneMapping);const en={shaderID:q,shaderType:w.type,shaderName:w.name,vertexShader:Ne,fragmentShader:$,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:he,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Xe,batchingColor:Xe&&I._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&I.instanceColor!==null,instancingMorph:Fe&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ea,alphaToCoverage:!!w.alphaToCoverage,map:Tt,matcap:tt,envMap:Dt,envMapMode:Dt&&K.mapping,envMapCubeUVHeight:L,aoMap:B,lightMap:zn,bumpMap:Ke,normalMap:Ze,displacementMap:d&&De,emissiveMap:vt,normalMapObjectSpace:Ze&&w.normalMapType===Ib,normalMapTangentSpace:Ze&&w.normalMapType===p_,metalnessMap:Pe,roughnessMap:P,anisotropy:b,anisotropyMap:fe,clearcoat:j,clearcoatMap:ye,clearcoatNormalMap:nt,clearcoatRoughnessMap:se,dispersion:J,iridescence:ie,iridescenceMap:_e,iridescenceThicknessMap:Le,sheen:Q,sheenColorMap:ke,sheenRoughnessMap:Me,specularMap:Qe,specularColorMap:Ve,specularIntensityMap:pt,transmission:Te,transmissionMap:F,thicknessMap:de,gradientMap:Y,opaque:w.transparent===!1&&w.blending===hn&&w.alphaToCoverage===!1,alphaMap:ee,alphaTest:ge,alphaHash:pe,combine:w.combine,mapUv:Tt&&v(w.map.channel),aoMapUv:B&&v(w.aoMap.channel),lightMapUv:zn&&v(w.lightMap.channel),bumpMapUv:Ke&&v(w.bumpMap.channel),normalMapUv:Ze&&v(w.normalMap.channel),displacementMapUv:De&&v(w.displacementMap.channel),emissiveMapUv:vt&&v(w.emissiveMap.channel),metalnessMapUv:Pe&&v(w.metalnessMap.channel),roughnessMapUv:P&&v(w.roughnessMap.channel),anisotropyMapUv:fe&&v(w.anisotropyMap.channel),clearcoatMapUv:ye&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:nt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(w.sheenRoughnessMap.channel),specularMapUv:Qe&&v(w.specularMap.channel),specularColorMapUv:Ve&&v(w.specularColorMap.channel),specularIntensityMapUv:pt&&v(w.specularIntensityMap.channel),transmissionMapUv:F&&v(w.transmissionMap.channel),thicknessMapUv:de&&v(w.thicknessMap.channel),alphaMapUv:ee&&v(w.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ze||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!H.attributes.uv&&(Tt||ee),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ee,skinning:I.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ue,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Tt&&w.map.isVideoTexture===!0&&Je.getTransfer(w.map.colorSpace)===dt,decodeVideoTextureEmissive:vt&&w.emissiveMap.isVideoTexture===!0&&Je.getTransfer(w.emissiveMap.colorSpace)===dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===wi,flipSided:w.side===Cn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Be&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&w.extensions.multiDraw===!0||Xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return en.vertexUv1s=c.has(1),en.vertexUv2s=c.has(2),en.vertexUv3s=c.has(3),c.clear(),en}function u(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)S.push(N),S.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(y(S,w),_(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function y(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function _(w,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),w.push(o.mask)}function M(w){const S=x[w.type];let N;if(S){const V=_i[S];N=Uo.clone(V.uniforms)}else N=w.uniforms;return N}function A(w,S){let N;for(let V=0,I=h.length;V<I;V++){const z=h[V];if(z.cacheKey===S){N=z,++N.usedTimes;break}}return N===void 0&&(N=new MA(t,S,w,s),h.push(N)),N}function T(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function C(w){l.remove(w)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:A,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:R}}function TA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function CA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function tg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ng(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,d,g,x,v,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:g,groupOrder:x,renderOrder:f.renderOrder,z:v,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=g,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=v,u.group=m),e++,u}function o(f,d,g,x,v,m){const u=a(f,d,g,x,v,m);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(f,d,g,x,v,m){const u=a(f,d,g,x,v,m);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,d){n.length>1&&n.sort(f||CA),i.length>1&&i.sort(d||tg),r.length>1&&r.sort(d||tg)}function h(){for(let f=e,d=t.length;f<d;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function AA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new ng,t.set(i,[a])):r>=s.length?(a=new ng,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function RA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Re};break;case"SpotLight":n={position:new U,direction:new U,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":n={color:new Re,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function PA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let NA=0;function DA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function LA(t){const e=new RA,n=PA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new St,a=new St;function o(c){let h=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let g=0,x=0,v=0,m=0,u=0,y=0,_=0,M=0,A=0,T=0,C=0;c.sort(DA);for(let w=0,S=c.length;w<S;w++){const N=c[w],V=N.color,I=N.intensity,z=N.distance,H=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=V.r*I,f+=V.g*I,d+=V.b*I;else if(N.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(N.sh.coefficients[X],I);C++}else if(N.isDirectionalLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const K=N.shadow,L=n.get(N);L.shadowIntensity=K.intensity,L.shadowBias=K.bias,L.shadowNormalBias=K.normalBias,L.shadowRadius=K.radius,L.shadowMapSize=K.mapSize,i.directionalShadow[g]=L,i.directionalShadowMap[g]=H,i.directionalShadowMatrix[g]=N.shadow.matrix,y++}i.directional[g]=X,g++}else if(N.isSpotLight){const X=e.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(V).multiplyScalar(I),X.distance=z,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,i.spot[v]=X;const K=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,K.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[v]=K.matrix,N.castShadow){const L=n.get(N);L.shadowIntensity=K.intensity,L.shadowBias=K.bias,L.shadowNormalBias=K.normalBias,L.shadowRadius=K.radius,L.shadowMapSize=K.mapSize,i.spotShadow[v]=L,i.spotShadowMap[v]=H,M++}v++}else if(N.isRectAreaLight){const X=e.get(N);X.color.copy(V).multiplyScalar(I),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=X,m++}else if(N.isPointLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){const K=N.shadow,L=n.get(N);L.shadowIntensity=K.intensity,L.shadowBias=K.bias,L.shadowNormalBias=K.normalBias,L.shadowRadius=K.radius,L.shadowMapSize=K.mapSize,L.shadowCameraNear=K.camera.near,L.shadowCameraFar=K.camera.far,i.pointShadow[x]=L,i.pointShadowMap[x]=H,i.pointShadowMatrix[x]=N.shadow.matrix,_++}i.point[x]=X,x++}else if(N.isHemisphereLight){const X=e.get(N);X.skyColor.copy(N.color).multiplyScalar(I),X.groundColor.copy(N.groundColor).multiplyScalar(I),i.hemi[u]=X,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==g||R.pointLength!==x||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==y||R.numPointShadows!==_||R.numSpotShadows!==M||R.numSpotMaps!==A||R.numLightProbes!==C)&&(i.directional.length=g,i.spot.length=v,i.rectArea.length=m,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,R.directionalLength=g,R.pointLength=x,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=y,R.numPointShadows=_,R.numSpotShadows=M,R.numSpotMaps=A,R.numLightProbes=C,i.version=NA++)}function l(c,h){let f=0,d=0,g=0,x=0,v=0;const m=h.matrixWorldInverse;for(let u=0,y=c.length;u<y;u++){const _=c[u];if(_.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(_.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(_.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(_.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function ig(t){const e=new LA(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function IA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ig(t),e.set(r,[o])):s>=a.length?(o=new ig(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class UA extends vs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Db,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FA extends vs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BA(t,e,n){let i=new Rp;const r=new Ue,s=new Ue,a=new ft,o=new UA({depthPacking:Lb}),l=new FA,c={},h=n.maxTextureSize,f={[Nr]:Cn,[Cn]:Nr,[wi]:wi},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:kA,fragmentShader:OA}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const x=new qt;x.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new on(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yy;let u=this.type;this.render=function(T,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),V=t.state;V.setBlending($i),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const I=u!==Oi&&this.type===Oi,z=u===Oi&&this.type!==Oi;for(let H=0,X=T.length;H<X;H++){const K=T[H],L=K.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const q=L.getFrameExtents();if(r.multiply(q),s.copy(L.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/q.x),r.x=s.x*q.x,L.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/q.y),r.y=s.y*q.y,L.mapSize.y=s.y)),L.map===null||I===!0||z===!0){const oe=this.type!==Oi?{minFilter:hi,magFilter:hi}:{};L.map!==null&&L.map.dispose(),L.map=new fi(r.x,r.y,oe),L.map.texture.name=K.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const Z=L.getViewportCount();for(let oe=0;oe<Z;oe++){const ue=L.getViewport(oe);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),V.viewport(a),L.updateMatrices(K,oe),i=L.getFrustum(),M(C,R,L.camera,K,this.type)}L.isPointLightShadow!==!0&&this.type===Oi&&y(L,R),L.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,N)};function y(T,C){const R=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new fi(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,R,d,v,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,R,g,v,null)}function _(T,C,R,w){let S=null;const N=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)S=N;else if(S=R.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=S.uuid,I=C.uuid;let z=c[V];z===void 0&&(z={},c[V]=z);let H=z[I];H===void 0&&(H=S.clone(),z[I]=H,C.addEventListener("dispose",A)),S=H}if(S.visible=C.visible,S.wireframe=C.wireframe,w===Oi?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=t.properties.get(S);V.light=R}return S}function M(T,C,R,w,S){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Oi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const I=e.update(T),z=T.material;if(Array.isArray(z)){const H=I.groups;for(let X=0,K=H.length;X<K;X++){const L=H[X],q=z[L.materialIndex];if(q&&q.visible){const Z=_(T,q,w,S);T.onBeforeShadow(t,T,C,R,I,Z,L),t.renderBufferDirect(R,null,I,Z,T,L),T.onAfterShadow(t,T,C,R,I,Z,L)}}}else if(z.visible){const H=_(T,z,w,S);T.onBeforeShadow(t,T,C,R,I,H,null),t.renderBufferDirect(R,null,I,H,T,null),T.onAfterShadow(t,T,C,R,I,H,null)}}const V=T.children;for(let I=0,z=V.length;I<z;I++)M(V[I],C,R,w,S)}function A(T){T.target.removeEventListener("dispose",A);for(const R in c){const w=c[R],S=T.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const zA={[Ah]:Rh,[Ph]:Lh,[Nh]:Ih,[ma]:Dh,[Rh]:Ah,[Lh]:Ph,[Ih]:Nh,[Dh]:ma};function jA(t,e){function n(){let F=!1;const de=new ft;let Y=null;const ee=new ft(0,0,0,0);return{setMask:function(ge){Y!==ge&&!F&&(t.colorMask(ge,ge,ge,ge),Y=ge)},setLocked:function(ge){F=ge},setClear:function(ge,pe,Be,Pt,en){en===!0&&(ge*=Pt,pe*=Pt,Be*=Pt),de.set(ge,pe,Be,Pt),ee.equals(de)===!1&&(t.clearColor(ge,pe,Be,Pt),ee.copy(de))},reset:function(){F=!1,Y=null,ee.set(-1,0,0,0)}}}function i(){let F=!1,de=!1,Y=null,ee=null,ge=null;return{setReversed:function(pe){if(de!==pe){const Be=e.get("EXT_clip_control");de?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const Pt=ge;ge=null,this.setClear(Pt)}de=pe},getReversed:function(){return de},setTest:function(pe){pe?le(t.DEPTH_TEST):Ee(t.DEPTH_TEST)},setMask:function(pe){Y!==pe&&!F&&(t.depthMask(pe),Y=pe)},setFunc:function(pe){if(de&&(pe=zA[pe]),ee!==pe){switch(pe){case Ah:t.depthFunc(t.NEVER);break;case Rh:t.depthFunc(t.ALWAYS);break;case Ph:t.depthFunc(t.LESS);break;case ma:t.depthFunc(t.LEQUAL);break;case Nh:t.depthFunc(t.EQUAL);break;case Dh:t.depthFunc(t.GEQUAL);break;case Lh:t.depthFunc(t.GREATER);break;case Ih:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=pe}},setLocked:function(pe){F=pe},setClear:function(pe){ge!==pe&&(de&&(pe=1-pe),t.clearDepth(pe),ge=pe)},reset:function(){F=!1,Y=null,ee=null,ge=null,de=!1}}}function r(){let F=!1,de=null,Y=null,ee=null,ge=null,pe=null,Be=null,Pt=null,en=null;return{setTest:function(ut){F||(ut?le(t.STENCIL_TEST):Ee(t.STENCIL_TEST))},setMask:function(ut){de!==ut&&!F&&(t.stencilMask(ut),de=ut)},setFunc:function(ut,Zn,Pi){(Y!==ut||ee!==Zn||ge!==Pi)&&(t.stencilFunc(ut,Zn,Pi),Y=ut,ee=Zn,ge=Pi)},setOp:function(ut,Zn,Pi){(pe!==ut||Be!==Zn||Pt!==Pi)&&(t.stencilOp(ut,Zn,Pi),pe=ut,Be=Zn,Pt=Pi)},setLocked:function(ut){F=ut},setClear:function(ut){en!==ut&&(t.clearStencil(ut),en=ut)},reset:function(){F=!1,de=null,Y=null,ee=null,ge=null,pe=null,Be=null,Pt=null,en=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,g=[],x=null,v=!1,m=null,u=null,y=null,_=null,M=null,A=null,T=null,C=new Re(0,0,0),R=0,w=!1,S=null,N=null,V=null,I=null,z=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(L)[1]),X=K>=1):L.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),X=K>=2);let q=null,Z={};const oe=t.getParameter(t.SCISSOR_BOX),ue=t.getParameter(t.VIEWPORT),Ne=new ft().fromArray(oe),$=new ft().fromArray(ue);function ne(F,de,Y,ee){const ge=new Uint8Array(4),pe=t.createTexture();t.bindTexture(F,pe),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Be=0;Be<Y;Be++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(de+Be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return pe}const he={};he[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(t.DEPTH_TEST),a.setFunc(ma),Ke(!1),Ze(l0),le(t.CULL_FACE),B($i);function le(F){h[F]!==!0&&(t.enable(F),h[F]=!0)}function Ee(F){h[F]!==!1&&(t.disable(F),h[F]=!1)}function Fe(F,de){return f[F]!==de?(t.bindFramebuffer(F,de),f[F]=de,F===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=de),F===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Xe(F,de){let Y=g,ee=!1;if(F){Y=d.get(de),Y===void 0&&(Y=[],d.set(de,Y));const ge=F.textures;if(Y.length!==ge.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,Be=ge.length;pe<Be;pe++)Y[pe]=t.COLOR_ATTACHMENT0+pe;Y.length=ge.length,ee=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,ee=!0);ee&&t.drawBuffers(Y)}function Tt(F){return x!==F?(t.useProgram(F),x=F,!0):!1}const tt={[Zr]:t.FUNC_ADD,[db]:t.FUNC_SUBTRACT,[hb]:t.FUNC_REVERSE_SUBTRACT};tt[fb]=t.MIN,tt[pb]=t.MAX;const Dt={[mb]:t.ZERO,[gb]:t.ONE,[vb]:t.SRC_COLOR,[Th]:t.SRC_ALPHA,[wb]:t.SRC_ALPHA_SATURATE,[Mb]:t.DST_COLOR,[yb]:t.DST_ALPHA,[xb]:t.ONE_MINUS_SRC_COLOR,[Ch]:t.ONE_MINUS_SRC_ALPHA,[Sb]:t.ONE_MINUS_DST_COLOR,[_b]:t.ONE_MINUS_DST_ALPHA,[bb]:t.CONSTANT_COLOR,[Eb]:t.ONE_MINUS_CONSTANT_COLOR,[Tb]:t.CONSTANT_ALPHA,[Cb]:t.ONE_MINUS_CONSTANT_ALPHA};function B(F,de,Y,ee,ge,pe,Be,Pt,en,ut){if(F===$i){v===!0&&(Ee(t.BLEND),v=!1);return}if(v===!1&&(le(t.BLEND),v=!0),F!==ub){if(F!==m||ut!==w){if((u!==Zr||M!==Zr)&&(t.blendEquation(t.FUNC_ADD),u=Zr,M=Zr),ut)switch(F){case hn:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wn:t.blendFunc(t.ONE,t.ONE);break;case c0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case u0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case hn:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wn:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case c0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case u0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,_=null,A=null,T=null,C.set(0,0,0),R=0,m=F,w=ut}return}ge=ge||de,pe=pe||Y,Be=Be||ee,(de!==u||ge!==M)&&(t.blendEquationSeparate(tt[de],tt[ge]),u=de,M=ge),(Y!==y||ee!==_||pe!==A||Be!==T)&&(t.blendFuncSeparate(Dt[Y],Dt[ee],Dt[pe],Dt[Be]),y=Y,_=ee,A=pe,T=Be),(Pt.equals(C)===!1||en!==R)&&(t.blendColor(Pt.r,Pt.g,Pt.b,en),C.copy(Pt),R=en),m=F,w=!1}function zn(F,de){F.side===wi?Ee(t.CULL_FACE):le(t.CULL_FACE);let Y=F.side===Cn;de&&(Y=!Y),Ke(Y),F.blending===hn&&F.transparent===!1?B($i):B(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const ee=F.stencilWrite;o.setTest(ee),ee&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),vt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(F){S!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),S=F)}function Ze(F){F!==ob?(le(t.CULL_FACE),F!==N&&(F===l0?t.cullFace(t.BACK):F===lb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ee(t.CULL_FACE),N=F}function De(F){F!==V&&(X&&t.lineWidth(F),V=F)}function vt(F,de,Y){F?(le(t.POLYGON_OFFSET_FILL),(I!==de||z!==Y)&&(t.polygonOffset(de,Y),I=de,z=Y)):Ee(t.POLYGON_OFFSET_FILL)}function Pe(F){F?le(t.SCISSOR_TEST):Ee(t.SCISSOR_TEST)}function P(F){F===void 0&&(F=t.TEXTURE0+H-1),q!==F&&(t.activeTexture(F),q=F)}function b(F,de,Y){Y===void 0&&(q===null?Y=t.TEXTURE0+H-1:Y=q);let ee=Z[Y];ee===void 0&&(ee={type:void 0,texture:void 0},Z[Y]=ee),(ee.type!==F||ee.texture!==de)&&(q!==Y&&(t.activeTexture(Y),q=Y),t.bindTexture(F,de||he[F]),ee.type=F,ee.texture=de)}function j(){const F=Z[q];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(F){Ne.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Ne.copy(F))}function Me(F){$.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),$.copy(F))}function Qe(F,de){let Y=c.get(de);Y===void 0&&(Y=new WeakMap,c.set(de,Y));let ee=Y.get(F);ee===void 0&&(ee=t.getUniformBlockIndex(de,F.name),Y.set(F,ee))}function Ve(F,de){const ee=c.get(de).get(F);l.get(de)!==ee&&(t.uniformBlockBinding(de,ee,F.__bindingPointIndex),l.set(de,ee))}function pt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},q=null,Z={},f={},d=new WeakMap,g=[],x=null,v=!1,m=null,u=null,y=null,_=null,M=null,A=null,T=null,C=new Re(0,0,0),R=0,w=!1,S=null,N=null,V=null,I=null,z=null,Ne.set(0,0,t.canvas.width,t.canvas.height),$.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:Ee,bindFramebuffer:Fe,drawBuffers:Xe,useProgram:Tt,setBlending:B,setMaterial:zn,setFlipSided:Ke,setCullFace:Ze,setLineWidth:De,setPolygonOffset:vt,setScissorTest:Pe,activeTexture:P,bindTexture:b,unbindTexture:j,compressedTexImage2D:J,compressedTexImage3D:ie,texImage2D:_e,texImage3D:Le,updateUBOMapping:Qe,uniformBlockBinding:Ve,texStorage2D:nt,texStorage3D:se,texSubImage2D:Q,texSubImage3D:Te,compressedTexSubImage2D:fe,compressedTexSubImage3D:ye,scissor:ke,viewport:Me,reset:pt}}function rg(t,e,n,i){const r=VA(i);switch(n){case o_:return t*e;case c_:return t*e;case u_:return t*e*2;case d_:return t*e/r.components*r.byteLength;case Ep:return t*e/r.components*r.byteLength;case h_:return t*e*2/r.components*r.byteLength;case Tp:return t*e*2/r.components*r.byteLength;case l_:return t*e*3/r.components*r.byteLength;case li:return t*e*4/r.components*r.byteLength;case Cp:return t*e*4/r.components*r.byteLength;case tc:case nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ic:case rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zh:case Vh:return Math.max(t,16)*Math.max(e,8)/4;case Bh:case jh:return Math.max(t,8)*Math.max(e,8)/2;case Hh:case Gh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case qh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ef:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case tf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case nf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case rf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case sf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case af:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case sc:case of:case lf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case f_:case cf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case uf:case df:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function VA(t){switch(t){case tr:case r_:return{byteLength:1,components:1};case Io:case s_:case qi:return{byteLength:2,components:1};case wp:case bp:return{byteLength:2,components:4};case ps:case Sp:case Hi:return{byteLength:4,components:1};case a_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function HA(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap;let f;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,b){return g?new OffscreenCanvas(P,b):zc("canvas")}function v(P,b,j){let J=1;const ie=Pe(P);if((ie.width>j||ie.height>j)&&(J=j/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Q=Math.floor(J*ie.width),Te=Math.floor(J*ie.height);f===void 0&&(f=x(Q,Te));const fe=b?x(Q,Te):f;return fe.width=Q,fe.height=Te,fe.getContext("2d").drawImage(P,0,0,Q,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+Te+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function m(P){return P.generateMipmaps}function u(P){t.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(P,b,j,J,ie=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=b;if(b===t.RED&&(j===t.FLOAT&&(Q=t.R32F),j===t.HALF_FLOAT&&(Q=t.R16F),j===t.UNSIGNED_BYTE&&(Q=t.R8)),b===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(Q=t.R8UI),j===t.UNSIGNED_SHORT&&(Q=t.R16UI),j===t.UNSIGNED_INT&&(Q=t.R32UI),j===t.BYTE&&(Q=t.R8I),j===t.SHORT&&(Q=t.R16I),j===t.INT&&(Q=t.R32I)),b===t.RG&&(j===t.FLOAT&&(Q=t.RG32F),j===t.HALF_FLOAT&&(Q=t.RG16F),j===t.UNSIGNED_BYTE&&(Q=t.RG8)),b===t.RG_INTEGER&&(j===t.UNSIGNED_BYTE&&(Q=t.RG8UI),j===t.UNSIGNED_SHORT&&(Q=t.RG16UI),j===t.UNSIGNED_INT&&(Q=t.RG32UI),j===t.BYTE&&(Q=t.RG8I),j===t.SHORT&&(Q=t.RG16I),j===t.INT&&(Q=t.RG32I)),b===t.RGB_INTEGER&&(j===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),j===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),j===t.UNSIGNED_INT&&(Q=t.RGB32UI),j===t.BYTE&&(Q=t.RGB8I),j===t.SHORT&&(Q=t.RGB16I),j===t.INT&&(Q=t.RGB32I)),b===t.RGBA_INTEGER&&(j===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),j===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),j===t.UNSIGNED_INT&&(Q=t.RGBA32UI),j===t.BYTE&&(Q=t.RGBA8I),j===t.SHORT&&(Q=t.RGBA16I),j===t.INT&&(Q=t.RGBA32I)),b===t.RGB&&j===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),b===t.RGBA){const Te=ie?ou:Je.getTransfer(J);j===t.FLOAT&&(Q=t.RGBA32F),j===t.HALF_FLOAT&&(Q=t.RGBA16F),j===t.UNSIGNED_BYTE&&(Q=Te===dt?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(P,b){let j;return P?b===null||b===ps||b===xa?j=t.DEPTH24_STENCIL8:b===Hi?j=t.DEPTH32F_STENCIL8:b===Io&&(j=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ps||b===xa?j=t.DEPTH_COMPONENT24:b===Hi?j=t.DEPTH_COMPONENT32F:b===Io&&(j=t.DEPTH_COMPONENT16),j}function A(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==hi&&P.minFilter!==bi?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function T(P){const b=P.target;b.removeEventListener("dispose",T),R(b),b.isVideoTexture&&h.delete(b)}function C(P){const b=P.target;b.removeEventListener("dispose",C),S(b)}function R(P){const b=i.get(P);if(b.__webglInit===void 0)return;const j=P.source,J=d.get(j);if(J){const ie=J[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(P),Object.keys(J).length===0&&d.delete(j)}i.remove(P)}function w(P){const b=i.get(P);t.deleteTexture(b.__webglTexture);const j=P.source,J=d.get(j);delete J[b.__cacheKey],a.memory.textures--}function S(P){const b=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let ie=0;ie<b.__webglFramebuffer[J].length;ie++)t.deleteFramebuffer(b.__webglFramebuffer[J][ie]);else t.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)t.deleteFramebuffer(b.__webglFramebuffer[J]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=P.textures;for(let J=0,ie=j.length;J<ie;J++){const Q=i.get(j[J]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(j[J])}i.remove(P)}let N=0;function V(){N=0}function I(){const P=N;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),N+=1,P}function z(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function H(P,b){const j=i.get(P);if(P.isVideoTexture&&De(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(j,P,b);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+b)}function X(P,b){const j=i.get(P);if(P.version>0&&j.__version!==P.version){$(j,P,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+b)}function K(P,b){const j=i.get(P);if(P.version>0&&j.__version!==P.version){$(j,P,b);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+b)}function L(P,b){const j=i.get(P);if(P.version>0&&j.__version!==P.version){ne(j,P,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+b)}const q={[kh]:t.REPEAT,[ns]:t.CLAMP_TO_EDGE,[Oh]:t.MIRRORED_REPEAT},Z={[hi]:t.NEAREST,[Nb]:t.NEAREST_MIPMAP_NEAREST,[hl]:t.NEAREST_MIPMAP_LINEAR,[bi]:t.LINEAR,[zu]:t.LINEAR_MIPMAP_NEAREST,[is]:t.LINEAR_MIPMAP_LINEAR},oe={[Ub]:t.NEVER,[jb]:t.ALWAYS,[Fb]:t.LESS,[m_]:t.LEQUAL,[kb]:t.EQUAL,[zb]:t.GEQUAL,[Ob]:t.GREATER,[Bb]:t.NOTEQUAL};function ue(P,b){if(b.type===Hi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===bi||b.magFilter===zu||b.magFilter===hl||b.magFilter===is||b.minFilter===bi||b.minFilter===zu||b.minFilter===hl||b.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,q[b.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,q[b.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,q[b.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,Z[b.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,Z[b.minFilter]),b.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,oe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===hi||b.minFilter!==hl&&b.minFilter!==is||b.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ne(P,b){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",T));const J=b.source;let ie=d.get(J);ie===void 0&&(ie={},d.set(J,ie));const Q=z(b);if(Q!==P.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ie[Q].usedTimes++;const Te=ie[P.__cacheKey];Te!==void 0&&(ie[P.__cacheKey].usedTimes--,Te.usedTimes===0&&w(b)),P.__cacheKey=Q,P.__webglTexture=ie[Q].texture}return j}function $(P,b,j){let J=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=t.TEXTURE_3D);const ie=Ne(P,b),Q=b.source;n.bindTexture(J,P.__webglTexture,t.TEXTURE0+j);const Te=i.get(Q);if(Q.version!==Te.__version||ie===!0){n.activeTexture(t.TEXTURE0+j);const fe=Je.getPrimaries(Je.workingColorSpace),ye=b.colorSpace===gr?null:Je.getPrimaries(b.colorSpace),nt=b.colorSpace===gr||fe===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let se=v(b.image,!1,r.maxTextureSize);se=vt(b,se);const _e=s.convert(b.format,b.colorSpace),Le=s.convert(b.type);let ke=_(b.internalFormat,_e,Le,b.colorSpace,b.isVideoTexture);ue(J,b);let Me;const Qe=b.mipmaps,Ve=b.isVideoTexture!==!0,pt=Te.__version===void 0||ie===!0,F=Q.dataReady,de=A(b,se);if(b.isDepthTexture)ke=M(b.format===ya,b.type),pt&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,ke,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,ke,se.width,se.height,0,_e,Le,null));else if(b.isDataTexture)if(Qe.length>0){Ve&&pt&&n.texStorage2D(t.TEXTURE_2D,de,ke,Qe[0].width,Qe[0].height);for(let Y=0,ee=Qe.length;Y<ee;Y++)Me=Qe[Y],Ve?F&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Me.width,Me.height,_e,Le,Me.data):n.texImage2D(t.TEXTURE_2D,Y,ke,Me.width,Me.height,0,_e,Le,Me.data);b.generateMipmaps=!1}else Ve?(pt&&n.texStorage2D(t.TEXTURE_2D,de,ke,se.width,se.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,_e,Le,se.data)):n.texImage2D(t.TEXTURE_2D,0,ke,se.width,se.height,0,_e,Le,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ve&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ke,Qe[0].width,Qe[0].height,se.depth);for(let Y=0,ee=Qe.length;Y<ee;Y++)if(Me=Qe[Y],b.format!==li)if(_e!==null)if(Ve){if(F)if(b.layerUpdates.size>0){const ge=rg(Me.width,Me.height,b.format,b.type);for(const pe of b.layerUpdates){const Be=Me.data.subarray(pe*ge/Me.data.BYTES_PER_ELEMENT,(pe+1)*ge/Me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,pe,Me.width,Me.height,1,_e,Be)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,Me.width,Me.height,se.depth,_e,Me.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,ke,Me.width,Me.height,se.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,Me.width,Me.height,se.depth,_e,Le,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,ke,Me.width,Me.height,se.depth,0,_e,Le,Me.data)}else{Ve&&pt&&n.texStorage2D(t.TEXTURE_2D,de,ke,Qe[0].width,Qe[0].height);for(let Y=0,ee=Qe.length;Y<ee;Y++)Me=Qe[Y],b.format!==li?_e!==null?Ve?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,Me.width,Me.height,_e,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,ke,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?F&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Me.width,Me.height,_e,Le,Me.data):n.texImage2D(t.TEXTURE_2D,Y,ke,Me.width,Me.height,0,_e,Le,Me.data)}else if(b.isDataArrayTexture)if(Ve){if(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ke,se.width,se.height,se.depth),F)if(b.layerUpdates.size>0){const Y=rg(se.width,se.height,b.format,b.type);for(const ee of b.layerUpdates){const ge=se.data.subarray(ee*Y/se.data.BYTES_PER_ELEMENT,(ee+1)*Y/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,_e,Le,ge)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,_e,Le,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,se.width,se.height,se.depth,0,_e,Le,se.data);else if(b.isData3DTexture)Ve?(pt&&n.texStorage3D(t.TEXTURE_3D,de,ke,se.width,se.height,se.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,_e,Le,se.data)):n.texImage3D(t.TEXTURE_3D,0,ke,se.width,se.height,se.depth,0,_e,Le,se.data);else if(b.isFramebufferTexture){if(pt)if(Ve)n.texStorage2D(t.TEXTURE_2D,de,ke,se.width,se.height);else{let Y=se.width,ee=se.height;for(let ge=0;ge<de;ge++)n.texImage2D(t.TEXTURE_2D,ge,ke,Y,ee,0,_e,Le,null),Y>>=1,ee>>=1}}else if(Qe.length>0){if(Ve&&pt){const Y=Pe(Qe[0]);n.texStorage2D(t.TEXTURE_2D,de,ke,Y.width,Y.height)}for(let Y=0,ee=Qe.length;Y<ee;Y++)Me=Qe[Y],Ve?F&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,_e,Le,Me):n.texImage2D(t.TEXTURE_2D,Y,ke,_e,Le,Me);b.generateMipmaps=!1}else if(Ve){if(pt){const Y=Pe(se);n.texStorage2D(t.TEXTURE_2D,de,ke,Y.width,Y.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Le,se)}else n.texImage2D(t.TEXTURE_2D,0,ke,_e,Le,se);m(b)&&u(J),Te.__version=Q.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ne(P,b,j){if(b.image.length!==6)return;const J=Ne(P,b),ie=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+j);const Q=i.get(ie);if(ie.version!==Q.__version||J===!0){n.activeTexture(t.TEXTURE0+j);const Te=Je.getPrimaries(Je.workingColorSpace),fe=b.colorSpace===gr?null:Je.getPrimaries(b.colorSpace),ye=b.colorSpace===gr||Te===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const nt=b.isCompressedTexture||b.image[0].isCompressedTexture,se=b.image[0]&&b.image[0].isDataTexture,_e=[];for(let ee=0;ee<6;ee++)!nt&&!se?_e[ee]=v(b.image[ee],!0,r.maxCubemapSize):_e[ee]=se?b.image[ee].image:b.image[ee],_e[ee]=vt(b,_e[ee]);const Le=_e[0],ke=s.convert(b.format,b.colorSpace),Me=s.convert(b.type),Qe=_(b.internalFormat,ke,Me,b.colorSpace),Ve=b.isVideoTexture!==!0,pt=Q.__version===void 0||J===!0,F=ie.dataReady;let de=A(b,Le);ue(t.TEXTURE_CUBE_MAP,b);let Y;if(nt){Ve&&pt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Qe,Le.width,Le.height);for(let ee=0;ee<6;ee++){Y=_e[ee].mipmaps;for(let ge=0;ge<Y.length;ge++){const pe=Y[ge];b.format!==li?ke!==null?Ve?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,pe.width,pe.height,ke,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Qe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,pe.width,pe.height,ke,Me,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Qe,pe.width,pe.height,0,ke,Me,pe.data)}}}else{if(Y=b.mipmaps,Ve&&pt){Y.length>0&&de++;const ee=Pe(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){Ve?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,_e[ee].width,_e[ee].height,ke,Me,_e[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,_e[ee].width,_e[ee].height,0,ke,Me,_e[ee].data);for(let ge=0;ge<Y.length;ge++){const Be=Y[ge].image[ee].image;Ve?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,Be.width,Be.height,ke,Me,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Qe,Be.width,Be.height,0,ke,Me,Be.data)}}else{Ve?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ke,Me,_e[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,ke,Me,_e[ee]);for(let ge=0;ge<Y.length;ge++){const pe=Y[ge];Ve?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,ke,Me,pe.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Qe,ke,Me,pe.image[ee])}}}m(b)&&u(t.TEXTURE_CUBE_MAP),Q.__version=ie.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function he(P,b,j,J,ie,Q){const Te=s.convert(j.format,j.colorSpace),fe=s.convert(j.type),ye=_(j.internalFormat,Te,fe,j.colorSpace),nt=i.get(b),se=i.get(j);if(se.__renderTarget=b,!nt.__hasExternalTextures){const _e=Math.max(1,b.width>>Q),Le=Math.max(1,b.height>>Q);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,Q,ye,_e,Le,b.depth,0,Te,fe,null):n.texImage2D(ie,Q,ye,_e,Le,0,Te,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Ze(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ie,se.__webglTexture,0,Ke(b)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ie,se.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(P,b,j){if(t.bindRenderbuffer(t.RENDERBUFFER,P),b.depthBuffer){const J=b.depthTexture,ie=J&&J.isDepthTexture?J.type:null,Q=M(b.stencilBuffer,ie),Te=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=Ke(b);Ze(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,Q,b.width,b.height):j?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,Q,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Q,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,P)}else{const J=b.textures;for(let ie=0;ie<J.length;ie++){const Q=J[ie],Te=s.convert(Q.format,Q.colorSpace),fe=s.convert(Q.type),ye=_(Q.internalFormat,Te,fe,Q.colorSpace),nt=Ke(b);j&&Ze(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,nt,ye,b.width,b.height):Ze(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,nt,ye,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,ye,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ee(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(b.depthTexture);J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H(b.depthTexture,0);const ie=J.__webglTexture,Q=Ke(b);if(b.depthTexture.format===ia)Ze(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(b.depthTexture.format===ya)Ze(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Fe(P){const b=i.get(P),j=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){const ie=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",ie)};J.addEventListener("dispose",ie),b.__depthDisposeCallback=ie}b.__boundDepthTexture=J}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Ee(b.__webglFramebuffer,P)}else if(j){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=t.createRenderbuffer(),le(b.__webglDepthbuffer[J],P,!1);else{const ie=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),le(b.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Xe(P,b,j){const J=i.get(P);b!==void 0&&he(J.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&Fe(P)}function Tt(P){const b=P.texture,j=i.get(P),J=i.get(b);P.addEventListener("dispose",C);const ie=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=b.version,a.memory.textures++),Q){j.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[fe]=[];for(let ye=0;ye<b.mipmaps.length;ye++)j.__webglFramebuffer[fe][ye]=t.createFramebuffer()}else j.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)j.__webglFramebuffer[fe]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(Te)for(let fe=0,ye=ie.length;fe<ye;fe++){const nt=i.get(ie[fe]);nt.__webglTexture===void 0&&(nt.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&Ze(P)===!1){j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const ye=ie[fe];j.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[fe]);const nt=s.convert(ye.format,ye.colorSpace),se=s.convert(ye.type),_e=_(ye.internalFormat,nt,se,ye.colorSpace,P.isXRRenderTarget===!0),Le=Ke(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,_e,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,j.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),le(j.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),ue(t.TEXTURE_CUBE_MAP,b);for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)he(j.__webglFramebuffer[fe][ye],P,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else he(j.__webglFramebuffer[fe],P,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(b)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let fe=0,ye=ie.length;fe<ye;fe++){const nt=ie[fe],se=i.get(nt);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),ue(t.TEXTURE_2D,nt),he(j.__webglFramebuffer,P,nt,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(nt)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,J.__webglTexture),ue(fe,b),b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)he(j.__webglFramebuffer[ye],P,b,t.COLOR_ATTACHMENT0,fe,ye);else he(j.__webglFramebuffer,P,b,t.COLOR_ATTACHMENT0,fe,0);m(b)&&u(fe),n.unbindTexture()}P.depthBuffer&&Fe(P)}function tt(P){const b=P.textures;for(let j=0,J=b.length;j<J;j++){const ie=b[j];if(m(ie)){const Q=y(P),Te=i.get(ie).__webglTexture;n.bindTexture(Q,Te),u(Q),n.unbindTexture()}}}const Dt=[],B=[];function zn(P){if(P.samples>0){if(Ze(P)===!1){const b=P.textures,j=P.width,J=P.height;let ie=t.COLOR_BUFFER_BIT;const Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(P),fe=b.length>1;if(fe)for(let ye=0;ye<b.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ye]);const nt=i.get(b[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,nt,0)}t.blitFramebuffer(0,0,j,J,0,0,j,J,ie,t.NEAREST),l===!0&&(Dt.length=0,B.length=0,Dt.push(t.COLOR_ATTACHMENT0+ye),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Dt.push(Q),B.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,B)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Dt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<b.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ye]);const nt=i.get(b[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,nt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function Ke(P){return Math.min(r.maxSamples,P.samples)}function Ze(P){const b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function De(P){const b=a.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function vt(P,b){const j=P.colorSpace,J=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==Ea&&j!==gr&&(Je.getTransfer(j)===dt?(J!==li||ie!==tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),b}function Pe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=V,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=L,this.rebindTextures=Xe,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=zn,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ze}function GA(t,e){function n(i,r=gr){let s;const a=Je.getTransfer(r);if(i===tr)return t.UNSIGNED_BYTE;if(i===wp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===bp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===a_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===r_)return t.BYTE;if(i===s_)return t.SHORT;if(i===Io)return t.UNSIGNED_SHORT;if(i===Sp)return t.INT;if(i===ps)return t.UNSIGNED_INT;if(i===Hi)return t.FLOAT;if(i===qi)return t.HALF_FLOAT;if(i===o_)return t.ALPHA;if(i===l_)return t.RGB;if(i===li)return t.RGBA;if(i===c_)return t.LUMINANCE;if(i===u_)return t.LUMINANCE_ALPHA;if(i===ia)return t.DEPTH_COMPONENT;if(i===ya)return t.DEPTH_STENCIL;if(i===d_)return t.RED;if(i===Ep)return t.RED_INTEGER;if(i===h_)return t.RG;if(i===Tp)return t.RG_INTEGER;if(i===Cp)return t.RGBA_INTEGER;if(i===tc||i===nc||i===ic||i===rc)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===tc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===tc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bh||i===zh||i===jh||i===Vh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hh||i===Gh||i===Wh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hh||i===Gh)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xh||i===$h||i===qh||i===Yh||i===Kh||i===Zh||i===Qh||i===Jh||i===ef||i===tf||i===nf||i===rf||i===sf||i===af)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Xh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$h)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ef)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===af)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sc||i===of||i===lf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===sc)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===of)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===f_||i===cf||i===uf||i===df)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===sc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===cf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===df)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class WA extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ci extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XA={type:"move"};class md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),g=.02,x=.005;c.inputState.pinching&&d>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(XA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ci;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const $A=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qA=`
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

}`;class YA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new pn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ln({vertexShader:$A,fragmentShader:qA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new on(new Xo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KA extends Ta{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,g=null,x=null;const v=new YA,m=n.getContextAttributes();let u=null,y=null;const _=[],M=[],A=new Ue;let T=null;const C=new Ln;C.viewport=new ft;const R=new Ln;R.viewport=new ft;const w=[C,R],S=new WA;let N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=_[$];return ne===void 0&&(ne=new md,_[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=_[$];return ne===void 0&&(ne=new md,_[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=_[$];return ne===void 0&&(ne=new md,_[$]=ne),ne.getHandSpace()};function I($){const ne=M.indexOf($.inputSource);if(ne===-1)return;const he=_[ne];he!==void 0&&(he.update($.inputSource,$.frame,c||a),he.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",H);for(let $=0;$<_.length;$++){const ne=M[$];ne!==null&&(M[$]=null,_[$].disconnect(ne))}N=null,V=null,v.reset(),e.setRenderTarget(u),g=null,d=null,f=null,r=null,y=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",z),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new fi(g.framebufferWidth,g.framebufferHeight,{format:li,type:tr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,he=null,le=null;m.depth&&(le=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?ya:ia,he=m.stencil?xa:ps);const Ee={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Ee),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new fi(d.textureWidth,d.textureHeight,{format:li,type:tr,depthTexture:new C_(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function H($){for(let ne=0;ne<$.removed.length;ne++){const he=$.removed[ne],le=M.indexOf(he);le>=0&&(M[le]=null,_[le].disconnect(he))}for(let ne=0;ne<$.added.length;ne++){const he=$.added[ne];let le=M.indexOf(he);if(le===-1){for(let Fe=0;Fe<_.length;Fe++)if(Fe>=M.length){M.push(he),le=Fe;break}else if(M[Fe]===null){M[Fe]=he,le=Fe;break}if(le===-1)break}const Ee=_[le];Ee&&Ee.connect(he)}}const X=new U,K=new U;function L($,ne,he){X.setFromMatrixPosition(ne.matrixWorld),K.setFromMatrixPosition(he.matrixWorld);const le=X.distanceTo(K),Ee=ne.projectionMatrix.elements,Fe=he.projectionMatrix.elements,Xe=Ee[14]/(Ee[10]-1),Tt=Ee[14]/(Ee[10]+1),tt=(Ee[9]+1)/Ee[5],Dt=(Ee[9]-1)/Ee[5],B=(Ee[8]-1)/Ee[0],zn=(Fe[8]+1)/Fe[0],Ke=Xe*B,Ze=Xe*zn,De=le/(-B+zn),vt=De*-B;if(ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(vt),$.translateZ(De),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ee[10]===-1)$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Pe=Xe+De,P=Tt+De,b=Ke-vt,j=Ze+(le-vt),J=tt*Tt/P*Pe,ie=Dt*Tt/P*Pe;$.projectionMatrix.makePerspective(b,j,J,ie,Pe,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function q($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ne=$.near,he=$.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(he=v.depthFar)),S.near=R.near=C.near=ne,S.far=R.far=C.far=he,(N!==S.near||V!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,V=S.far),C.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,S.layers.mask=C.layers.mask|R.layers.mask;const le=$.parent,Ee=S.cameras;q(S,le);for(let Fe=0;Fe<Ee.length;Fe++)q(Ee[Fe],le);Ee.length===2?L(S,C,R):S.projectionMatrix.copy(C.projectionMatrix),Z($,S,le)};function Z($,ne,he){he===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(he.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=hf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let oe=null;function ue($,ne){if(h=ne.getViewerPose(c||a),x=ne,h!==null){const he=h.views;g!==null&&(e.setRenderTargetFramebuffer(y,g.framebuffer),e.setRenderTarget(y));let le=!1;he.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let Fe=0;Fe<he.length;Fe++){const Xe=he[Fe];let Tt=null;if(g!==null)Tt=g.getViewport(Xe);else{const Dt=f.getViewSubImage(d,Xe);Tt=Dt.viewport,Fe===0&&(e.setRenderTargetTextures(y,Dt.colorTexture,d.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(y))}let tt=w[Fe];tt===void 0&&(tt=new Ln,tt.layers.enable(Fe),tt.viewport=new ft,w[Fe]=tt),tt.matrix.fromArray(Xe.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Xe.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Fe===0&&(S.matrix.copy(tt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(tt)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const Fe=f.getDepthInformation(he[0]);Fe&&Fe.isValid&&Fe.texture&&v.init(e,Fe,r.renderState)}}for(let he=0;he<_.length;he++){const le=M[he],Ee=_[he];le!==null&&Ee!==void 0&&Ee.update(le,ne,c||a)}oe&&oe($,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),x=null}const Ne=new T_;Ne.setAnimationLoop(ue),this.setAnimationLoop=function($){oe=$},this.dispose=function(){}}}const Vr=new Ri,ZA=new St;function QA(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,w_(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,y,_,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&g(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),x(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,y,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Cn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Cn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const y=e.get(u),_=y.envMap,M=y.envMapRotation;_&&(m.envMap.value=_,Vr.copy(M),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),m.envMapRotation.value.setFromMatrix4(ZA.makeRotationFromEuler(Vr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,y,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*y,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,y){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Cn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const y=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function JA(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const M=_.program;i.uniformBlockBinding(y,M)}function c(y,_){let M=r[y.id];M===void 0&&(x(y),M=h(y),r[y.id]=M,y.addEventListener("dispose",m));const A=_.program;i.updateUBOMapping(y,A);const T=e.render.frame;s[y.id]!==T&&(d(y),s[y.id]=T)}function h(y){const _=f();y.__bindingPointIndex=_;const M=t.createBuffer(),A=y.__size,T=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,A,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=r[y.id],M=y.uniforms,A=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,C=M.length;T<C;T++){const R=Array.isArray(M[T])?M[T]:[M[T]];for(let w=0,S=R.length;w<S;w++){const N=R[w];if(g(N,T,w,A)===!0){const V=N.__offset,I=Array.isArray(N.value)?N.value:[N.value];let z=0;for(let H=0;H<I.length;H++){const X=I[H],K=v(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,V+z,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,z),z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(y,_,M,A){const T=y.value,C=_+"_"+M;if(A[C]===void 0)return typeof T=="number"||typeof T=="boolean"?A[C]=T:A[C]=T.clone(),!0;{const R=A[C];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return A[C]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function x(y){const _=y.uniforms;let M=0;const A=16;for(let C=0,R=_.length;C<R;C++){const w=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,N=w.length;S<N;S++){const V=w[S],I=Array.isArray(V.value)?V.value:[V.value];for(let z=0,H=I.length;z<H;z++){const X=I[z],K=v(X),L=M%A,q=L%K.boundary,Z=L+q;M+=q,Z!==0&&A-Z<K.storage&&(M+=A-Z),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=K.storage}}}const T=M%A;return T>0&&(M+=A-T),y.__size=M,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class sg{constructor(e={}){const{canvas:n=Hb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const x=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const y=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=Ar,this.toneMappingExposure=1;const M=this;let A=!1,T=0,C=0,R=null,w=-1,S=null;const N=new ft,V=new ft;let I=null;const z=new Re(0);let H=0,X=n.width,K=n.height,L=1,q=null,Z=null;const oe=new ft(0,0,X,K),ue=new ft(0,0,X,K);let Ne=!1;const $=new Rp;let ne=!1,he=!1;const le=new St,Ee=new St,Fe=new U,Xe=new ft,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Dt(){return R===null?L:1}let B=i;function zn(E,k){return n.getContext(E,k)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Mp}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",pe,!1),B===null){const k="webgl2";if(B=zn(k,E),B===null)throw zn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ke,Ze,De,vt,Pe,P,b,j,J,ie,Q,Te,fe,ye,nt,se,_e,Le,ke,Me,Qe,Ve,pt,F;function de(){Ke=new s2(B),Ke.init(),Ve=new GA(B,Ke),Ze=new JC(B,Ke,e,Ve),De=new jA(B,Ke),Ze.reverseDepthBuffer&&d&&De.buffers.depth.setReversed(!0),vt=new l2(B),Pe=new TA,P=new HA(B,Ke,De,Pe,Ze,Ve,vt),b=new t2(M),j=new r2(M),J=new mE(B),pt=new ZC(B,J),ie=new a2(B,J,vt,pt),Q=new u2(B,ie,J,vt),ke=new c2(B,Ze,P),se=new e2(Pe),Te=new EA(M,b,j,Ke,Ze,pt,se),fe=new QA(M,Pe),ye=new AA,nt=new IA(Ke),Le=new KC(M,b,j,De,Q,g,l),_e=new BA(M,Q,Ze),F=new JA(B,vt,Ze,De),Me=new QC(B,Ke,vt),Qe=new o2(B,Ke,vt),vt.programs=Te.programs,M.capabilities=Ze,M.extensions=Ke,M.properties=Pe,M.renderLists=ye,M.shadowMap=_e,M.state=De,M.info=vt}de();const Y=new KA(M,B);this.xr=Y,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const E=Ke.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ke.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(E){E!==void 0&&(L=E,this.setSize(X,K,!1))},this.getSize=function(E){return E.set(X,K)},this.setSize=function(E,k,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,K=k,n.width=Math.floor(E*L),n.height=Math.floor(k*L),G===!0&&(n.style.width=E+"px",n.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(X*L,K*L).floor()},this.setDrawingBufferSize=function(E,k,G){X=E,K=k,L=G,n.width=Math.floor(E*G),n.height=Math.floor(k*G),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(N)},this.getViewport=function(E){return E.copy(oe)},this.setViewport=function(E,k,G,W){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,k,G,W),De.viewport(N.copy(oe).multiplyScalar(L).round())},this.getScissor=function(E){return E.copy(ue)},this.setScissor=function(E,k,G,W){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,k,G,W),De.scissor(V.copy(ue).multiplyScalar(L).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(E){De.setScissorTest(Ne=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){Z=E},this.getClearColor=function(E){return E.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(E=!0,k=!0,G=!0){let W=0;if(E){let O=!1;if(R!==null){const ae=R.texture.format;O=ae===Cp||ae===Tp||ae===Ep}if(O){const ae=R.texture.type,me=ae===tr||ae===ps||ae===Io||ae===xa||ae===wp||ae===bp,Se=Le.getClearColor(),we=Le.getClearAlpha(),Oe=Se.r,ze=Se.g,be=Se.b;me?(x[0]=Oe,x[1]=ze,x[2]=be,x[3]=we,B.clearBufferuiv(B.COLOR,0,x)):(v[0]=Oe,v[1]=ze,v[2]=be,v[3]=we,B.clearBufferiv(B.COLOR,0,v))}else W|=B.COLOR_BUFFER_BIT}k&&(W|=B.DEPTH_BUFFER_BIT),G&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),ye.dispose(),nt.dispose(),Pe.dispose(),b.dispose(),j.dispose(),Q.dispose(),pt.dispose(),F.dispose(),Te.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Bp),Y.removeEventListener("sessionend",zp),Ur.stop()};function ee(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=vt.autoReset,k=_e.enabled,G=_e.autoUpdate,W=_e.needsUpdate,O=_e.type;de(),vt.autoReset=E,_e.enabled=k,_e.autoUpdate=G,_e.needsUpdate=W,_e.type=O}function pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Be(E){const k=E.target;k.removeEventListener("dispose",Be),Pt(k)}function Pt(E){en(E),Pe.remove(E)}function en(E){const k=Pe.get(E).programs;k!==void 0&&(k.forEach(function(G){Te.releaseProgram(G)}),E.isShaderMaterial&&Te.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,G,W,O,ae){k===null&&(k=Tt);const me=O.isMesh&&O.matrixWorld.determinant()<0,Se=z_(E,k,G,W,O);De.setMaterial(W,me);let we=G.index,Oe=1;if(W.wireframe===!0){if(we=ie.getWireframeAttribute(G),we===void 0)return;Oe=2}const ze=G.drawRange,be=G.attributes.position;let rt=ze.start*Oe,mt=(ze.start+ze.count)*Oe;ae!==null&&(rt=Math.max(rt,ae.start*Oe),mt=Math.min(mt,(ae.start+ae.count)*Oe)),we!==null?(rt=Math.max(rt,0),mt=Math.min(mt,we.count)):be!=null&&(rt=Math.max(rt,0),mt=Math.min(mt,be.count));const xt=mt-rt;if(xt<0||xt===1/0)return;pt.setup(O,W,Se,G,we);let xn,ot=Me;if(we!==null&&(xn=J.get(we),ot=Qe,ot.setIndex(xn)),O.isMesh)W.wireframe===!0?(De.setLineWidth(W.wireframeLinewidth*Dt()),ot.setMode(B.LINES)):ot.setMode(B.TRIANGLES);else if(O.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),De.setLineWidth(Ce*Dt()),O.isLineSegments?ot.setMode(B.LINES):O.isLineLoop?ot.setMode(B.LINE_LOOP):ot.setMode(B.LINE_STRIP)}else O.isPoints?ot.setMode(B.POINTS):O.isSprite&&ot.setMode(B.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ot.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))ot.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,Ni=O._multiDrawCounts,lt=O._multiDrawCount,Qn=we?J.get(we).bytesPerElement:1,xs=Pe.get(W).currentProgram.getUniforms();for(let An=0;An<lt;An++)xs.setValue(B,"_gl_DrawID",An),ot.render(Ce[An]/Qn,Ni[An])}else if(O.isInstancedMesh)ot.renderInstances(rt,xt,O.count);else if(G.isInstancedBufferGeometry){const Ce=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ni=Math.min(G.instanceCount,Ce);ot.renderInstances(rt,xt,Ni)}else ot.render(rt,xt)};function ut(E,k,G){E.transparent===!0&&E.side===wi&&E.forceSinglePass===!1?(E.side=Cn,E.needsUpdate=!0,qo(E,k,G),E.side=Nr,E.needsUpdate=!0,qo(E,k,G),E.side=wi):qo(E,k,G)}this.compile=function(E,k,G=null){G===null&&(G=E),u=nt.get(G),u.init(k),_.push(u),G.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),E!==G&&E.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();const W=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ae=O.material;if(ae)if(Array.isArray(ae))for(let me=0;me<ae.length;me++){const Se=ae[me];ut(Se,G,O),W.add(Se)}else ut(ae,G,O),W.add(ae)}),_.pop(),u=null,W},this.compileAsync=function(E,k,G=null){const W=this.compile(E,k,G);return new Promise(O=>{function ae(){if(W.forEach(function(me){Pe.get(me).currentProgram.isReady()&&W.delete(me)}),W.size===0){O(E);return}setTimeout(ae,10)}Ke.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Zn=null;function Pi(E){Zn&&Zn(E)}function Bp(){Ur.stop()}function zp(){Ur.start()}const Ur=new T_;Ur.setAnimationLoop(Pi),typeof self<"u"&&Ur.setContext(self),this.setAnimationLoop=function(E){Zn=E,Y.setAnimationLoop(E),E===null?Ur.stop():Ur.start()},Y.addEventListener("sessionstart",Bp),Y.addEventListener("sessionend",zp),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(k),k=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,k,R),u=nt.get(E,_.length),u.init(k),_.push(u),Ee.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),$.setFromProjectionMatrix(Ee),he=this.localClippingEnabled,ne=se.init(this.clippingPlanes,he),m=ye.get(E,y.length),m.init(),y.push(m),Y.enabled===!0&&Y.isPresenting===!0){const ae=M.xr.getDepthSensingMesh();ae!==null&&du(ae,k,-1/0,M.sortObjects)}du(E,k,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(q,Z),tt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,tt&&Le.addToRenderList(m,E),this.info.render.frame++,ne===!0&&se.beginShadows();const G=u.state.shadowsArray;_e.render(G,E,k),ne===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,O=m.transmissive;if(u.setupLights(),k.isArrayCamera){const ae=k.cameras;if(O.length>0)for(let me=0,Se=ae.length;me<Se;me++){const we=ae[me];Vp(W,O,E,we)}tt&&Le.render(E);for(let me=0,Se=ae.length;me<Se;me++){const we=ae[me];jp(m,E,we,we.viewport)}}else O.length>0&&Vp(W,O,E,k),tt&&Le.render(E),jp(m,E,k);R!==null&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(M,E,k),pt.resetDefaultState(),w=-1,S=null,_.pop(),_.length>0?(u=_[_.length-1],ne===!0&&se.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function du(E,k,G,W){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){W&&Xe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ee);const me=Q.update(E),Se=E.material;Se.visible&&m.push(E,me,Se,G,Xe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const me=Q.update(E),Se=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Xe.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Xe.copy(me.boundingSphere.center)),Xe.applyMatrix4(E.matrixWorld).applyMatrix4(Ee)),Array.isArray(Se)){const we=me.groups;for(let Oe=0,ze=we.length;Oe<ze;Oe++){const be=we[Oe],rt=Se[be.materialIndex];rt&&rt.visible&&m.push(E,me,rt,G,Xe.z,be)}}else Se.visible&&m.push(E,me,Se,G,Xe.z,null)}}const ae=E.children;for(let me=0,Se=ae.length;me<Se;me++)du(ae[me],k,G,W)}function jp(E,k,G,W){const O=E.opaque,ae=E.transmissive,me=E.transparent;u.setupLightsView(G),ne===!0&&se.setGlobalState(M.clippingPlanes,G),W&&De.viewport(N.copy(W)),O.length>0&&$o(O,k,G),ae.length>0&&$o(ae,k,G),me.length>0&&$o(me,k,G),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Vp(E,k,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[W.id]===void 0&&(u.state.transmissionRenderTarget[W.id]=new fi(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?qi:tr,minFilter:is,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ae=u.state.transmissionRenderTarget[W.id],me=W.viewport||N;ae.setSize(me.z,me.w);const Se=M.getRenderTarget();M.setRenderTarget(ae),M.getClearColor(z),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear(),tt&&Le.render(G);const we=M.toneMapping;M.toneMapping=Ar;const Oe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),u.setupLightsView(W),ne===!0&&se.setGlobalState(M.clippingPlanes,W),$o(E,G,W),P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let be=0,rt=k.length;be<rt;be++){const mt=k[be],xt=mt.object,xn=mt.geometry,ot=mt.material,Ce=mt.group;if(ot.side===wi&&xt.layers.test(W.layers)){const Ni=ot.side;ot.side=Cn,ot.needsUpdate=!0,Hp(xt,G,W,xn,ot,Ce),ot.side=Ni,ot.needsUpdate=!0,ze=!0}}ze===!0&&(P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae))}M.setRenderTarget(Se),M.setClearColor(z,H),Oe!==void 0&&(W.viewport=Oe),M.toneMapping=we}function $o(E,k,G){const W=k.isScene===!0?k.overrideMaterial:null;for(let O=0,ae=E.length;O<ae;O++){const me=E[O],Se=me.object,we=me.geometry,Oe=W===null?me.material:W,ze=me.group;Se.layers.test(G.layers)&&Hp(Se,k,G,we,Oe,ze)}}function Hp(E,k,G,W,O,ae){E.onBeforeRender(M,k,G,W,O,ae),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(M,k,G,W,E,ae),O.transparent===!0&&O.side===wi&&O.forceSinglePass===!1?(O.side=Cn,O.needsUpdate=!0,M.renderBufferDirect(G,k,W,O,E,ae),O.side=Nr,O.needsUpdate=!0,M.renderBufferDirect(G,k,W,O,E,ae),O.side=wi):M.renderBufferDirect(G,k,W,O,E,ae),E.onAfterRender(M,k,G,W,O,ae)}function qo(E,k,G){k.isScene!==!0&&(k=Tt);const W=Pe.get(E),O=u.state.lights,ae=u.state.shadowsArray,me=O.state.version,Se=Te.getParameters(E,O.state,ae,k,G),we=Te.getProgramCacheKey(Se);let Oe=W.programs;W.environment=E.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(E.isMeshStandardMaterial?j:b).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Oe===void 0&&(E.addEventListener("dispose",Be),Oe=new Map,W.programs=Oe);let ze=Oe.get(we);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===me)return Wp(E,Se),ze}else Se.uniforms=Te.getUniforms(E),E.onBeforeCompile(Se,M),ze=Te.acquireProgram(Se,we),Oe.set(we,ze),W.uniforms=Se.uniforms;const be=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(be.clippingPlanes=se.uniform),Wp(E,Se),W.needsLights=V_(E),W.lightsStateVersion=me,W.needsLights&&(be.ambientLightColor.value=O.state.ambient,be.lightProbe.value=O.state.probe,be.directionalLights.value=O.state.directional,be.directionalLightShadows.value=O.state.directionalShadow,be.spotLights.value=O.state.spot,be.spotLightShadows.value=O.state.spotShadow,be.rectAreaLights.value=O.state.rectArea,be.ltc_1.value=O.state.rectAreaLTC1,be.ltc_2.value=O.state.rectAreaLTC2,be.pointLights.value=O.state.point,be.pointLightShadows.value=O.state.pointShadow,be.hemisphereLights.value=O.state.hemi,be.directionalShadowMap.value=O.state.directionalShadowMap,be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,be.spotShadowMap.value=O.state.spotShadowMap,be.spotLightMatrix.value=O.state.spotLightMatrix,be.spotLightMap.value=O.state.spotLightMap,be.pointShadowMap.value=O.state.pointShadowMap,be.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=ze,W.uniformsList=null,ze}function Gp(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=ac.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Wp(E,k){const G=Pe.get(E);G.outputColorSpace=k.outputColorSpace,G.batching=k.batching,G.batchingColor=k.batchingColor,G.instancing=k.instancing,G.instancingColor=k.instancingColor,G.instancingMorph=k.instancingMorph,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function z_(E,k,G,W,O){k.isScene!==!0&&(k=Tt),P.resetTextureUnits();const ae=k.fog,me=W.isMeshStandardMaterial?k.environment:null,Se=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ea,we=(W.isMeshStandardMaterial?j:b).get(W.envMap||me),Oe=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),be=!!G.morphAttributes.position,rt=!!G.morphAttributes.normal,mt=!!G.morphAttributes.color;let xt=Ar;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(xt=M.toneMapping);const xn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ot=xn!==void 0?xn.length:0,Ce=Pe.get(W),Ni=u.state.lights;if(ne===!0&&(he===!0||E!==S)){const jn=E===S&&W.id===w;se.setState(W,E,jn)}let lt=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Ni.state.version||Ce.outputColorSpace!==Se||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==we||W.fog===!0&&Ce.fog!==ae||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==se.numPlanes||Ce.numIntersection!==se.numIntersection)||Ce.vertexAlphas!==Oe||Ce.vertexTangents!==ze||Ce.morphTargets!==be||Ce.morphNormals!==rt||Ce.morphColors!==mt||Ce.toneMapping!==xt||Ce.morphTargetsCount!==ot)&&(lt=!0):(lt=!0,Ce.__version=W.version);let Qn=Ce.currentProgram;lt===!0&&(Qn=qo(W,k,O));let xs=!1,An=!1,Ra=!1;const yt=Qn.getUniforms(),mi=Ce.uniforms;if(De.useProgram(Qn.program)&&(xs=!0,An=!0,Ra=!0),W.id!==w&&(w=W.id,An=!0),xs||S!==E){De.buffers.depth.getReversed()?(le.copy(E.projectionMatrix),Wb(le),Xb(le),yt.setValue(B,"projectionMatrix",le)):yt.setValue(B,"projectionMatrix",E.projectionMatrix),yt.setValue(B,"viewMatrix",E.matrixWorldInverse);const ir=yt.map.cameraPosition;ir!==void 0&&ir.setValue(B,Fe.setFromMatrixPosition(E.matrixWorld)),Ze.logarithmicDepthBuffer&&yt.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yt.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,An=!0,Ra=!0)}if(O.isSkinnedMesh){yt.setOptional(B,O,"bindMatrix"),yt.setOptional(B,O,"bindMatrixInverse");const jn=O.skeleton;jn&&(jn.boneTexture===null&&jn.computeBoneTexture(),yt.setValue(B,"boneTexture",jn.boneTexture,P))}O.isBatchedMesh&&(yt.setOptional(B,O,"batchingTexture"),yt.setValue(B,"batchingTexture",O._matricesTexture,P),yt.setOptional(B,O,"batchingIdTexture"),yt.setValue(B,"batchingIdTexture",O._indirectTexture,P),yt.setOptional(B,O,"batchingColorTexture"),O._colorsTexture!==null&&yt.setValue(B,"batchingColorTexture",O._colorsTexture,P));const Pa=G.morphAttributes;if((Pa.position!==void 0||Pa.normal!==void 0||Pa.color!==void 0)&&ke.update(O,G,Qn),(An||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,yt.setValue(B,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(mi.envMap.value=we,mi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(mi.envMapIntensity.value=k.environmentIntensity),An&&(yt.setValue(B,"toneMappingExposure",M.toneMappingExposure),Ce.needsLights&&j_(mi,Ra),ae&&W.fog===!0&&fe.refreshFogUniforms(mi,ae),fe.refreshMaterialUniforms(mi,W,L,K,u.state.transmissionRenderTarget[E.id]),ac.upload(B,Gp(Ce),mi,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ac.upload(B,Gp(Ce),mi,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yt.setValue(B,"center",O.center),yt.setValue(B,"modelViewMatrix",O.modelViewMatrix),yt.setValue(B,"normalMatrix",O.normalMatrix),yt.setValue(B,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const jn=W.uniformsGroups;for(let ir=0,rr=jn.length;ir<rr;ir++){const Xp=jn[ir];F.update(Xp,Qn),F.bind(Xp,Qn)}}return Qn}function j_(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function V_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,k,G){Pe.get(E.texture).__webglTexture=k,Pe.get(E.depthTexture).__webglTexture=G;const W=Pe.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const G=Pe.get(E);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,G=0){R=E,T=k,C=G;let W=!0,O=null,ae=!1,me=!1;if(E){const we=Pe.get(E);if(we.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(B.FRAMEBUFFER,null),W=!1;else if(we.__webglFramebuffer===void 0)P.setupRenderTarget(E);else if(we.__hasExternalTextures)P.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const be=E.depthTexture;if(we.__boundDepthTexture!==be){if(be!==null&&Pe.has(be)&&(E.width!==be.image.width||E.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(E)}}const Oe=E.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(me=!0);const ze=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[k])?O=ze[k][G]:O=ze[k],ae=!0):E.samples>0&&P.useMultisampledRTT(E)===!1?O=Pe.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?O=ze[G]:O=ze,N.copy(E.viewport),V.copy(E.scissor),I=E.scissorTest}else N.copy(oe).multiplyScalar(L).floor(),V.copy(ue).multiplyScalar(L).floor(),I=Ne;if(De.bindFramebuffer(B.FRAMEBUFFER,O)&&W&&De.drawBuffers(E,O),De.viewport(N),De.scissor(V),De.setScissorTest(I),ae){const we=Pe.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,we.__webglTexture,G)}else if(me){const we=Pe.get(E.texture),Oe=k||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.__webglTexture,G||0,Oe)}w=-1},this.readRenderTargetPixels=function(E,k,G,W,O,ae,me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){De.bindFramebuffer(B.FRAMEBUFFER,Se);try{const we=E.texture,Oe=we.format,ze=we.type;if(!Ze.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-W&&G>=0&&G<=E.height-O&&B.readPixels(k,G,W,O,Ve.convert(Oe),Ve.convert(ze),ae)}finally{const we=R!==null?Pe.get(R).__webglFramebuffer:null;De.bindFramebuffer(B.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,k,G,W,O,ae,me){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){const we=E.texture,Oe=we.format,ze=we.type;if(!Ze.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-W&&G>=0&&G<=E.height-O){De.bindFramebuffer(B.FRAMEBUFFER,Se);const be=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,be),B.bufferData(B.PIXEL_PACK_BUFFER,ae.byteLength,B.STREAM_READ),B.readPixels(k,G,W,O,Ve.convert(Oe),Ve.convert(ze),0);const rt=R!==null?Pe.get(R).__webglFramebuffer:null;De.bindFramebuffer(B.FRAMEBUFFER,rt);const mt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Gb(B,mt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,be),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ae),B.deleteBuffer(be),B.deleteSync(mt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,G=0){E.isTexture!==!0&&(Ja("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-G),O=Math.floor(E.image.width*W),ae=Math.floor(E.image.height*W),me=k!==null?k.x:0,Se=k!==null?k.y:0;P.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,G,0,0,me,Se,O,ae),De.unbindTexture()},this.copyTextureToTexture=function(E,k,G=null,W=null,O=0){E.isTexture!==!0&&(Ja("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],k=arguments[2],O=arguments[3]||0,G=null);let ae,me,Se,we,Oe,ze,be,rt,mt;const xt=E.isCompressedTexture?E.mipmaps[O]:E.image;G!==null?(ae=G.max.x-G.min.x,me=G.max.y-G.min.y,Se=G.isBox3?G.max.z-G.min.z:1,we=G.min.x,Oe=G.min.y,ze=G.isBox3?G.min.z:0):(ae=xt.width,me=xt.height,Se=xt.depth||1,we=0,Oe=0,ze=0),W!==null?(be=W.x,rt=W.y,mt=W.z):(be=0,rt=0,mt=0);const xn=Ve.convert(k.format),ot=Ve.convert(k.type);let Ce;k.isData3DTexture?(P.setTexture3D(k,0),Ce=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(P.setTexture2DArray(k,0),Ce=B.TEXTURE_2D_ARRAY):(P.setTexture2D(k,0),Ce=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const Ni=B.getParameter(B.UNPACK_ROW_LENGTH),lt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Qn=B.getParameter(B.UNPACK_SKIP_PIXELS),xs=B.getParameter(B.UNPACK_SKIP_ROWS),An=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,xt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,we),B.pixelStorei(B.UNPACK_SKIP_ROWS,Oe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ze);const Ra=E.isDataArrayTexture||E.isData3DTexture,yt=k.isDataArrayTexture||k.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const mi=Pe.get(E),Pa=Pe.get(k),jn=Pe.get(mi.__renderTarget),ir=Pe.get(Pa.__renderTarget);De.bindFramebuffer(B.READ_FRAMEBUFFER,jn.__webglFramebuffer),De.bindFramebuffer(B.DRAW_FRAMEBUFFER,ir.__webglFramebuffer);for(let rr=0;rr<Se;rr++)Ra&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pe.get(E).__webglTexture,O,ze+rr),E.isDepthTexture?(yt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pe.get(k).__webglTexture,O,mt+rr),B.blitFramebuffer(we,Oe,ae,me,be,rt,ae,me,B.DEPTH_BUFFER_BIT,B.NEAREST)):yt?B.copyTexSubImage3D(Ce,O,be,rt,mt+rr,we,Oe,ae,me):B.copyTexSubImage2D(Ce,O,be,rt,mt+rr,we,Oe,ae,me);De.bindFramebuffer(B.READ_FRAMEBUFFER,null),De.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else yt?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(Ce,O,be,rt,mt,ae,me,Se,xn,ot,xt.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(Ce,O,be,rt,mt,ae,me,Se,xn,xt.data):B.texSubImage3D(Ce,O,be,rt,mt,ae,me,Se,xn,ot,xt):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,O,be,rt,ae,me,xn,ot,xt.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,O,be,rt,xt.width,xt.height,xn,xt.data):B.texSubImage2D(B.TEXTURE_2D,O,be,rt,ae,me,xn,ot,xt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ni),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,lt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Qn),B.pixelStorei(B.UNPACK_SKIP_ROWS,xs),B.pixelStorei(B.UNPACK_SKIP_IMAGES,An),O===0&&k.generateMipmaps&&B.generateMipmap(Ce),De.unbindTexture()},this.copyTextureToTexture3D=function(E,k,G=null,W=null,O=0){return E.isTexture!==!0&&(Ja("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,E=arguments[2],k=arguments[3],O=arguments[4]||0),Ja('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,G,W,O)},this.initRenderTarget=function(E){Pe.get(E).__webglFramebuffer===void 0&&P.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),De.unbindTexture()},this.resetState=function(){T=0,C=0,R=null,De.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}class eR extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class cu extends vs{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jc=new U,Vc=new U,ag=new St,Ga=new Ap,Ll=new Wo,gd=new U,og=new U;class D_ extends $t{constructor(e=new qt,n=new cu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)jc.fromBufferAttribute(n,r-1),Vc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=jc.distanceTo(Vc);e.setAttribute("lineDistance",new Et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ll.copy(i.boundingSphere),Ll.applyMatrix4(r),Ll.radius+=s,e.ray.intersectsSphere(Ll)===!1)return;ag.copy(r).invert(),Ga.copy(e.ray).applyMatrix4(ag);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const g=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let v=g,m=x-1;v<m;v+=c){const u=h.getX(v),y=h.getX(v+1),_=Il(this,e,Ga,l,u,y);_&&n.push(_)}if(this.isLineLoop){const v=h.getX(x-1),m=h.getX(g),u=Il(this,e,Ga,l,v,m);u&&n.push(u)}}else{const g=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let v=g,m=x-1;v<m;v+=c){const u=Il(this,e,Ga,l,v,v+1);u&&n.push(u)}if(this.isLineLoop){const v=Il(this,e,Ga,l,x-1,g);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Il(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(jc.fromBufferAttribute(a,r),Vc.fromBufferAttribute(a,s),n.distanceSqToSegment(jc,Vc,gd,og)>i)return;gd.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(gd);if(!(l<e.near||l>e.far))return{distance:l,point:og.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const lg=new U,cg=new U;class L_ extends D_{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)lg.fromBufferAttribute(n,r),cg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+lg.distanceTo(cg);e.setAttribute("lineDistance",new Et(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class I_ extends vs{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ug=new St,pf=new Ap,Ul=new Wo,Fl=new U;class tR extends $t{constructor(e=new qt,n=new I_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(r),Ul.radius+=s,e.ray.intersectsSphere(Ul)===!1)return;ug.copy(r).invert(),pf.copy(e.ray).applyMatrix4(ug);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let x=d,v=g;x<v;x++){const m=c.getX(x);Fl.fromBufferAttribute(f,m),dg(Fl,m,l,r,e,n,this)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=d,v=g;x<v;x++)Fl.fromBufferAttribute(f,x),dg(Fl,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function dg(t,e,n,i,r,s,a){const o=pf.distanceSqToPoint(t);if(o<n){const l=new U;pf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class nR extends pn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class uu extends qt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),h(),this.setAttribute("position",new Et(s,3)),this.setAttribute("normal",new Et(s.slice(),3)),this.setAttribute("uv",new Et(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const _=new U,M=new U,A=new U;for(let T=0;T<n.length;T+=3)g(n[T+0],_),g(n[T+1],M),g(n[T+2],A),l(_,M,A,y)}function l(y,_,M,A){const T=A+1,C=[];for(let R=0;R<=T;R++){C[R]=[];const w=y.clone().lerp(M,R/T),S=_.clone().lerp(M,R/T),N=T-R;for(let V=0;V<=N;V++)V===0&&R===T?C[R][V]=w:C[R][V]=w.clone().lerp(S,V/N)}for(let R=0;R<T;R++)for(let w=0;w<2*(T-R)-1;w++){const S=Math.floor(w/2);w%2===0?(d(C[R][S+1]),d(C[R+1][S]),d(C[R][S])):(d(C[R][S+1]),d(C[R+1][S+1]),d(C[R+1][S]))}}function c(y){const _=new U;for(let M=0;M<s.length;M+=3)_.x=s[M+0],_.y=s[M+1],_.z=s[M+2],_.normalize().multiplyScalar(y),s[M+0]=_.x,s[M+1]=_.y,s[M+2]=_.z}function h(){const y=new U;for(let _=0;_<s.length;_+=3){y.x=s[_+0],y.y=s[_+1],y.z=s[_+2];const M=m(y)/2/Math.PI+.5,A=u(y)/Math.PI+.5;a.push(M,1-A)}x(),f()}function f(){for(let y=0;y<a.length;y+=6){const _=a[y+0],M=a[y+2],A=a[y+4],T=Math.max(_,M,A),C=Math.min(_,M,A);T>.9&&C<.1&&(_<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function g(y,_){const M=y*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function x(){const y=new U,_=new U,M=new U,A=new U,T=new Ue,C=new Ue,R=new Ue;for(let w=0,S=0;w<s.length;w+=9,S+=6){y.set(s[w+0],s[w+1],s[w+2]),_.set(s[w+3],s[w+4],s[w+5]),M.set(s[w+6],s[w+7],s[w+8]),T.set(a[S+0],a[S+1]),C.set(a[S+2],a[S+3]),R.set(a[S+4],a[S+5]),A.copy(y).add(_).add(M).divideScalar(3);const N=m(A);v(T,S+0,y,N),v(C,S+2,_,N),v(R,S+4,M,N)}}function v(y,_,M,A){A<0&&y.x===1&&(a[_]=y.x-1),M.x===0&&M.z===0&&(a[_]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function u(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.vertices,e.indices,e.radius,e.details)}}class Dp extends uu{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Dp(e.radius,e.detail)}}class Lp extends uu{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Lp(e.radius,e.detail)}}class Ip extends qt{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let f=e;const d=(n-e)/r,g=new U,x=new Ue;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const u=s+m/i*a;g.x=f*Math.cos(u),g.y=f*Math.sin(u),l.push(g.x,g.y,g.z),c.push(0,0,1),x.x=(g.x/n+1)/2,x.y=(g.y/n+1)/2,h.push(x.x,x.y)}f+=d}for(let v=0;v<r;v++){const m=v*(i+1);for(let u=0;u<i;u++){const y=u+m,_=y,M=y+i+1,A=y+i+2,T=y+1;o.push(_,M,T),o.push(M,A,T)}}this.setIndex(o),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ip(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Up extends qt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new U,d=new U,g=[],x=[],v=[],m=[];for(let u=0;u<=i;u++){const y=[],_=u/i;let M=0;u===0&&a===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let A=0;A<=n;A++){const T=A/n;f.x=-e*Math.cos(r+T*s)*Math.sin(a+_*o),f.y=e*Math.cos(a+_*o),f.z=e*Math.sin(r+T*s)*Math.sin(a+_*o),x.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(T+M,1-_),y.push(c++)}h.push(y)}for(let u=0;u<i;u++)for(let y=0;y<n;y++){const _=h[u][y+1],M=h[u][y],A=h[u+1][y],T=h[u+1][y+1];(u!==0||a>0)&&g.push(_,M,T),(u!==i-1||l<Math.PI)&&g.push(M,A,T)}this.setIndex(g),this.setAttribute("position",new Et(x,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Up(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fp extends qt{constructor(e=1,n=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],c=[],h=[],f=new U,d=new U,g=new U,x=new U,v=new U,m=new U,u=new U;for(let _=0;_<=i;++_){const M=_/i*s*Math.PI*2;y(M,s,a,e,g),y(M+.01,s,a,e,x),m.subVectors(x,g),u.addVectors(x,g),v.crossVectors(m,u),u.crossVectors(v,m),v.normalize(),u.normalize();for(let A=0;A<=r;++A){const T=A/r*Math.PI*2,C=-n*Math.cos(T),R=n*Math.sin(T);f.x=g.x+(C*u.x+R*v.x),f.y=g.y+(C*u.y+R*v.y),f.z=g.z+(C*u.z+R*v.z),l.push(f.x,f.y,f.z),d.subVectors(f,g).normalize(),c.push(d.x,d.y,d.z),h.push(_/i),h.push(A/r)}}for(let _=1;_<=i;_++)for(let M=1;M<=r;M++){const A=(r+1)*(_-1)+(M-1),T=(r+1)*_+(M-1),C=(r+1)*_+M,R=(r+1)*(_-1)+M;o.push(A,T,R),o.push(T,C,R)}this.setIndex(o),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(h,2));function y(_,M,A,T,C){const R=Math.cos(_),w=Math.sin(_),S=A/M*_,N=Math.cos(S);C.x=T*(2+N)*.5*R,C.y=T*(2+N)*w*.5,C.z=T*Math.sin(S)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fp(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class iR extends qt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,r=new U,s=new U;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const f=l[c],d=f.start,g=f.count;for(let x=d,v=d+g;x<v;x+=3)for(let m=0;m<3;m++){const u=o.getX(x+m),y=o.getX(x+(m+1)%3);r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,y),hg(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,f=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,f),hg(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new Et(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function hg(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}class rR extends ln{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class fg extends vs{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=p_,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kp extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const vd=new St,pg=new U,mg=new U;class U_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rp,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;pg.setFromMatrixPosition(e.matrixWorld),n.position.copy(pg),mg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(mg),n.updateMatrixWorld(),vd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const gg=new St,Wa=new U,xd=new U;class sR extends U_{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Wa.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wa),xd.copy(i.position),xd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(xd),i.updateMatrixWorld(),r.makeTranslation(-Wa.x,-Wa.y,-Wa.z),gg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gg)}}class aR extends kp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new sR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class oR extends U_{constructor(){super(new Pp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lR extends kp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new oR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cR extends kp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class F_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=vg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function vg(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mp);const k_={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Aa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const uR=new Pp(-1,1,1,-1,0,1);class dR extends qt{constructor(){super(),this.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Et([0,2,0,0,2,0],2))}}const hR=new dR;class Op{constructor(e){this._mesh=new on(hR,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,uR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class fR extends Aa{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof ln?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Uo.clone(e.uniforms),this.material=new ln({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Op(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class xg extends Aa{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class pR extends Aa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class mR{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Ue);this._width=i.width,this._height=i.height,n=new fi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fR(k_),this.copyPass.material.blending=$i,this.clock=new F_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}xg!==void 0&&(a instanceof xg?i=!0:a instanceof pR&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class gR extends Aa{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const vR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ma extends Aa{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ue(e.x,e.y):new Ue(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new fi(s,a,{type:qi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new fi(s,a,{type:qi});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const g=new fi(s,a,{type:qi});g.texture.name="UnrealBloomPass.v"+f,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),s=Math.round(s/2),a=Math.round(a/2)}const o=vR;this.highPassUniforms=Uo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ln({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Ue(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=k_;this.copyUniforms=Uo.clone(h.uniforms),this.blendMaterial=new ln({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:wn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new yr,this.fsQuad=new Op(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ue(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ma.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ma.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new ln({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ln({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ma.BlurDirectionX=new Ue(1,0);Ma.BlurDirectionY=new Ue(0,1);const xR={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class yR extends Aa{constructor(){super();const e=xR;this.uniforms=Uo.clone(e.uniforms),this.material=new rR({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Op(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zy?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qy?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jy?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===e_?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===t_?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===n_&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const _R=`
varying vec2 vUv;
void main() {
  vUv = uv;
  // Fullscreen quad at z = -10 (behind all 3D content)
  gl_Position = vec4(position.xy, 0.9999, 1.0);
}
`,MR=`
uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform int uMode; // 0=solid, 1=gradient, 2=nebula, 3=synthwaveGrid
uniform float uBass;
uniform float uMid;
uniform float uTreble;
uniform float uGrainIntensity;
uniform float uVignetteStrength;
uniform float uGradientAngle;
varying vec2 vUv;

// Pseudo-random noise for film grain
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// 2D Simplex/Perlin Noise approximation
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = vUv;
  vec3 finalColor = uColorA;

  if (uMode == 0) {
    // Solid color
    finalColor = uColorA;
  } else if (uMode == 1) {
    // Linear Gradient with angle
    float rad = radians(uGradientAngle);
    vec2 dir = vec2(cos(rad), sin(rad));
    float t = dot(uv - 0.5, dir) + 0.5;
    t = clamp(t, 0.0, 1.0);
    finalColor = mix(uColorA, uColorB, t);
  } else if (uMode == 2) {
    // Animated Cosmic Nebula
    vec2 p = uv * 3.0 - vec2(1.5);
    float t = uTime * 0.25;
    float n1 = snoise(p + vec2(t * 0.4, -t * 0.3));
    float n2 = snoise(p * 2.0 - vec2(t * 0.6, t * 0.5) + vec2(n1 * 1.5));
    float nebula = clamp(n1 * 0.5 + n2 * 0.5 + 0.5, 0.0, 1.0);

    // Audio reactive flare
    nebula += uBass * 0.35 * (1.0 - length(uv - 0.5));

    finalColor = mix(uColorA, uColorB, nebula);
    finalColor += uColorC * pow(nebula, 3.0) * (0.8 + uMid * 0.8);
  } else if (uMode == 3) {
    // Synthwave Cyber Grid
    vec2 p = uv;
    p.y = 1.0 - p.y; // flip y
    if (p.y > 0.5) {
      // Sky gradient
      float skyT = (p.y - 0.5) * 2.0;
      finalColor = mix(uColorB * 0.3, uColorA, skyT);
      // Sun/Glow
      float sunDist = length(vec2(p.x - 0.5, (p.y - 0.55) * 1.8));
      if (sunDist < 0.25) {
        float sunIntensity = smoothstep(0.25, 0.05, sunDist);
        finalColor += uColorC * sunIntensity * (1.0 + uBass * 0.5);
      }
    } else {
      // Perspective Floor Grid
      float depth = 1.0 / (0.501 - p.y);
      vec2 gridUv = vec2((p.x - 0.5) * depth * 0.5, depth * 0.15 + uTime * (1.2 + uBass * 1.5));
      vec2 grid = abs(fract(gridUv - 0.5) - 0.5) / fwidth(gridUv);
      float line = min(grid.x, grid.y);
      float gridIntensity = 1.0 - min(line, 1.0);
      float fade = smoothstep(0.5, 0.0, p.y);

      finalColor = mix(uColorA, uColorB, gridIntensity * fade * (0.8 + uTreble * 0.7));
    }
  }

  // Vignette effect
  vec2 d = uv - vec2(0.5);
  float vignette = 1.0 - dot(d, d) * (uVignetteStrength * 2.5);
  finalColor *= clamp(vignette, 0.0, 1.0);

  // Film Grain Noise
  if (uGrainIntensity > 0.001) {
    float grain = (random(uv + vec2(uTime * 10.0, -uTime * 7.0)) - 0.5) * uGrainIntensity * 0.35;
    finalColor += vec3(grain);
  }

  gl_FragColor = vec4(finalColor, 1.0);
}
`;class SR{constructor(e){te(this,"config");te(this,"group");te(this,"quadMesh",null);te(this,"material",null);te(this,"geometry",null);this.config=e,this.group=new ci}init(e){this.geometry=new Xo(2,2);let n=1;this.config.mode==="solid"?n=0:this.config.mode==="gradient"?n=1:this.config.mode==="animatedNebula"?n=2:this.config.mode==="synthwaveGrid"&&(n=3),this.material=new ln({vertexShader:_R,fragmentShader:MR,uniforms:{uResolution:{value:new Ue(e.width,e.height)},uTime:{value:0},uColorA:{value:new Re(this.config.primaryColor)},uColorB:{value:new Re(this.config.secondaryColor)},uColorC:{value:new Re(this.config.accentColor||"#ff007f")},uMode:{value:n},uBass:{value:0},uMid:{value:0},uTreble:{value:0},uGrainIntensity:{value:this.config.grainIntensity},uVignetteStrength:{value:this.config.vignetteStrength},uGradientAngle:{value:this.config.gradientAngle}},depthWrite:!1,depthTest:!1}),this.quadMesh=new on(this.geometry,this.material),this.quadMesh.renderOrder=-1e3,this.group.add(this.quadMesh),e.scene.add(this.group)}update(e,n,i){if(!this.material||!this.config.enabled)return;const r=this.material.uniforms;if(r.uTime.value=i*this.config.animationSpeed,r.uBass.value=e.bands.bass,r.uMid.value=e.bands.mid,r.uTreble.value=e.bands.treble,this.config.audioReactiveZoom>0&&this.quadMesh){const s=1+e.bands.bass*this.config.audioReactiveZoom*.1;this.quadMesh.scale.set(s,s,1)}}resize(e,n,i){this.material&&this.material.uniforms.uResolution.value.set(e*i,n*i)}updateConfig(e){if(this.config={...this.config,...e},this.material){const n=this.material.uniforms;n.uColorA.value.set(this.config.primaryColor),n.uColorB.value.set(this.config.secondaryColor),n.uColorC.value.set(this.config.accentColor||"#ff007f");let i=1;this.config.mode==="solid"?i=0:this.config.mode==="gradient"?i=1:this.config.mode==="animatedNebula"?i=2:this.config.mode==="synthwaveGrid"&&(i=3),n.uMode.value=i,n.uGrainIntensity.value=this.config.grainIntensity,n.uVignetteStrength.value=this.config.vignetteStrength,n.uGradientAngle.value=this.config.gradientAngle}this.group.visible=this.config.enabled}dispose(){this.quadMesh&&(this.group.remove(this.quadMesh),this.quadMesh=null),this.geometry&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null),this.group.parent&&this.group.parent.remove(this.group)}}class wR{constructor(e){te(this,"config");te(this,"group");te(this,"mesh",null);te(this,"wireframeMesh",null);te(this,"geometry",null);te(this,"originalPositions",null);te(this,"normals",null);this.config=e,this.group=new ci}init(e){this.rebuildMesh(),this.applyTransform(),e.scene.add(this.group)}rebuildMesh(){this.mesh&&(this.group.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh=null),this.wireframeMesh&&(this.group.remove(this.wireframeMesh),this.wireframeMesh.geometry.dispose(),this.wireframeMesh.material.dispose(),this.wireframeMesh=null);let e;const n=this.config.shape,i=Math.min(4,Math.max(0,this.config.subdivisions));n==="icosahedron"||n==="morphingGeosphere"?e=new Lp(2,i+1):n==="torusKnot"?e=new Fp(1.6,.45,100,16):n==="dodecahedron"?e=new Dp(2,i):n==="cyberCube"?e=new Ki(2.6,2.6,2.6,i+2,i+2,i+2):e=new Up(2,32,32),e.computeVertexNormals(),this.geometry=e;const r=e.getAttribute("position");this.originalPositions=new Float32Array(r.array);const s=e.getAttribute("normal");this.normals=new Float32Array(s.array);const a=new Re(this.config.primaryColor),o=new Re(this.config.accentColor);let l;if(this.config.shadingStyle==="wireframe"?l=new yr({color:a,wireframe:!0,transparent:!0,opacity:this.config.opacity,blending:this.config.blendMode==="additive"?wn:hn}):this.config.shadingStyle==="faceted"?l=new fg({color:a,roughness:this.config.metallicRoughness,metalness:.5,flatShading:!0,transparent:!0,opacity:this.config.opacity,emissive:o,emissiveIntensity:this.config.glowIntensity*.3}):l=new fg({color:a,roughness:.2,metalness:.85,transparent:!0,opacity:this.config.opacity,emissive:o,emissiveIntensity:.2+this.config.glowIntensity*.4}),this.mesh=new on(this.geometry,l),this.group.add(this.mesh),this.config.shadingStyle!=="wireframe"){const c=new iR(this.geometry),h=new cu({color:o,transparent:!0,opacity:this.config.opacity*.35,blending:wn});this.wireframeMesh=new L_(c,h),this.group.add(this.wireframeMesh)}}applyTransform(){const[e,n,i]=this.config.transform.position,[r,s,a]=this.config.transform.rotation,[o,l,c]=this.config.transform.scale;this.group.position.set(e,n,i),this.group.rotation.set(r,s,a),this.group.scale.set(o,l,c),this.group.visible=this.config.enabled}update(e,n,i){if(!this.geometry||!this.mesh||!this.config.enabled)return;const[r,s,a]=this.config.rotationSpeed,o=1+e.bands.mid*1.5;this.mesh.rotation.x+=r*n*o,this.mesh.rotation.y+=s*n*o,this.mesh.rotation.z+=a*n*o,this.wireframeMesh&&this.wireframeMesh.rotation.copy(this.mesh.rotation);const c=1+e.bands.bass*this.config.pulseIntensity*.45,[h,f,d]=this.config.transform.scale;if(this.group.scale.set(h*c,f*c,d*c),this.originalPositions&&this.normals&&this.config.noiseDistortion>0){let g=0;this.config.distortionBand==="bass"?g=e.bands.bass:this.config.distortionBand==="mid"?g=e.bands.mid:this.config.distortionBand==="treble"?g=e.bands.treble:g=e.rms;const x=this.config.noiseDistortion*g*.8,v=this.geometry.getAttribute("position"),m=v.array,u=this.originalPositions,y=this.normals,_=u.length/3;for(let M=0;M<_;M++){const A=u[M*3],T=u[M*3+1],C=u[M*3+2],R=y[M*3],w=y[M*3+1],S=y[M*3+2],V=Math.sin(A*2.5+i*3)*Math.cos(T*2.5+i*2.5)*Math.sin(C*2.5+i*2)*x;m[M*3]=A+R*V,m[M*3+1]=T+w*V,m[M*3+2]=C+S*V}v.needsUpdate=!0,this.geometry.computeVertexNormals()}}resize(e,n,i){}updateConfig(e){const n=e.shape&&e.shape!==this.config.shape,i=e.shadingStyle&&e.shadingStyle!==this.config.shadingStyle,r=e.subdivisions!==void 0&&e.subdivisions!==this.config.subdivisions;if(this.config={...this.config,...e},this.applyTransform(),n||i||r)this.rebuildMesh();else if(this.mesh){const s=this.mesh.material;s.color&&s.color.set(this.config.primaryColor),s.emissive&&s.emissive.set(this.config.accentColor),s.opacity=this.config.opacity,s.needsUpdate=!0}}dispose(){this.mesh&&(this.group.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh=null),this.wireframeMesh&&(this.group.remove(this.wireframeMesh),this.wireframeMesh.geometry.dispose(),this.wireframeMesh.material.dispose(),this.wireframeMesh=null),this.group.parent&&this.group.parent.remove(this.group)}}class bR{constructor(e){te(this,"config");te(this,"group");te(this,"points",null);te(this,"geometry",null);te(this,"material",null);te(this,"particleTexture",null);te(this,"positions",new Float32Array(0));te(this,"colors",new Float32Array(0));te(this,"particleState",[]);te(this,"linesMesh",null);te(this,"linesGeometry",null);te(this,"linesMaterial",null);te(this,"linePositions",new Float32Array(2e3*6));this.config=e,this.group=new ci}init(e){this.createPointTexture(),this.rebuildParticles(),this.applyTransform(),e.scene.add(this.group)}createPointTexture(){if(this.particleTexture)return;const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d"),i=n.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.35,"rgba(255, 255, 255, 0.85)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=i,n.fillRect(0,0,64,64),this.particleTexture=new nR(e)}rebuildParticles(){this.points&&(this.group.remove(this.points),this.points=null),this.geometry&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null),this.linesMesh&&(this.group.remove(this.linesMesh),this.linesMesh=null),this.linesGeometry&&(this.linesGeometry.dispose(),this.linesGeometry=null),this.linesMaterial&&(this.linesMaterial.dispose(),this.linesMaterial=null);const e=Math.max(10,Math.min(1e4,this.config.count||1e3));this.positions=new Float32Array(e*3),this.colors=new Float32Array(e*3),this.particleState=[];const n=new Re(this.config.color||"#00f0ff"),i=new Re(this.config.secondaryColor||"#ff007f"),r=Math.max(.5,this.config.dispersion||4.5);for(let s=0;s<e;s++){const a=Math.random()*Math.PI*2,o=Math.acos(Math.random()*2-1),l=Math.pow(Math.random(),.5)*r,c=l*Math.sin(o)*Math.cos(a),h=l*Math.sin(o)*Math.sin(a),f=l*Math.cos(o);this.positions[s*3]=c,this.positions[s*3+1]=h,this.positions[s*3+2]=f;const d=Math.random(),g=n.clone().lerp(i,d);this.colors[s*3]=g.r,this.colors[s*3+1]=g.g,this.colors[s*3+2]=g.b,this.particleState.push({ox:c,oy:h,oz:f,vx:(Math.random()-.5)*.1,vy:(Math.random()-.5)*.1,vz:(Math.random()-.5)*.1})}this.geometry=new qt,this.geometry.setAttribute("position",new mn(this.positions,3)),this.geometry.setAttribute("color",new mn(this.colors,3)),this.material=new I_({size:(this.config.size||1.2)*.08,vertexColors:!0,map:this.particleTexture||void 0,transparent:!0,opacity:this.config.opacity??.85,blending:this.config.blendMode==="additive"?wn:hn,depthWrite:!1}),this.points=new tR(this.geometry,this.material),this.group.add(this.points),this.config.connectLines&&(this.linePositions=new Float32Array(2e3*6),this.linesGeometry=new qt,this.linesGeometry.setAttribute("position",new mn(this.linePositions,3)),this.linesMaterial=new cu({color:new Re(this.config.color||"#00f0ff"),transparent:!0,opacity:this.config.connectionOpacity??.3,blending:wn,depthWrite:!1}),this.linesMesh=new L_(this.linesGeometry,this.linesMaterial),this.group.add(this.linesMesh))}applyTransform(){var h,f,d;const[e,n,i]=((h=this.config.transform)==null?void 0:h.position)||[0,0,0],[r,s,a]=((f=this.config.transform)==null?void 0:f.rotation)||[0,0,0],[o,l,c]=((d=this.config.transform)==null?void 0:d.scale)||[1,1,1];this.group.position.set(e,n,i),this.group.rotation.set(r,s,a),this.group.scale.set(o,l,c),this.group.visible=this.config.enabled??!0}update(e,n,i){var f,d,g,x;if(!this.geometry||!this.config.enabled)return;const r=Math.min(this.config.count||1e3,this.particleState.length,Math.floor(this.positions.length/3));if(r===0)return;const s=this.positions;(f=e.bands)!=null&&f.bass;const a=((d=e.bands)==null?void 0:d.treble)||0,o=((g=e.beat)==null?void 0:g.isBeat)||!1,l=((x=e.beat)==null?void 0:x.beatIntensity)||0,c=(this.config.speed||1)*(.8+(e.rms||0)*1.5),h=o?l*(this.config.beatExplosionForce||3.5)*4:0;this.material&&(this.material.size=(this.config.size||1.2)*.08*(1+a*(this.config.trebleTwinkle||1.5)*.6));for(let v=0;v<r;v++){const m=this.particleState[v];if(!m)continue;let u=s[v*3],y=s[v*3+1],_=s[v*3+2];if((!Number.isFinite(u)||!Number.isFinite(y)||!Number.isFinite(_))&&(u=m.ox,y=m.oy,_=m.oz),this.config.behavior==="ambientVortex"){const M=c*n*1.5,A=Math.cos(M),T=Math.sin(M),C=u*A-y*T,R=u*T+y*A;u=C,y=R,_+=Math.sin(i*2+v)*n*c*.5}else if(this.config.behavior==="radialExplosion"){const M=Math.sqrt(u*u+y*y+_*_)||1,A=u/M,T=y/M,C=_/M;h>0&&(m.vx+=A*h*.35,m.vy+=T*h*.35,m.vz+=C*h*.35),u+=m.vx*n,y+=m.vy*n,_+=m.vz*n,m.vx=m.vx*.92+(m.ox-u)*.05,m.vy=m.vy*.92+(m.oy-y)*.05,m.vz=m.vz*.92+(m.oz-_)*.05}else{u+=Math.sin(y*.5+i*c)*n*.8,y+=Math.cos(u*.5+i*c)*n*.8,_+=Math.sin(i*c+v)*n*.4;const M=(this.config.dispersion||4.5)*1.5;u>M&&(u=-M),u<-M&&(u=M),y>M&&(y=-M),y<-M&&(y=M)}s[v*3]=u,s[v*3+1]=y,s[v*3+2]=_}if(this.geometry.attributes.position.needsUpdate=!0,this.config.connectLines&&this.linesGeometry&&this.linesMesh){let v=0;const m=1e3,u=this.config.connectionDistance||.8,y=u*u,_=Math.max(1,Math.floor(r/150));for(let M=0;M<r;M+=_){const A=s[M*3],T=s[M*3+1],C=s[M*3+2];for(let R=M+_;R<r;R+=_){const w=s[R*3],S=s[R*3+1],N=s[R*3+2],V=w-A,I=S-T,z=N-C;V*V+I*I+z*z<y&&v<m*6&&(this.linePositions[v++]=A,this.linePositions[v++]=T,this.linePositions[v++]=C,this.linePositions[v++]=w,this.linePositions[v++]=S,this.linePositions[v++]=N)}}this.linesGeometry.setDrawRange(0,v/3),this.linesGeometry.attributes.position.needsUpdate=!0}}resize(e,n,i){}updateConfig(e){const n=e.count!==void 0&&e.count!==this.config.count,i=e.connectLines!==void 0&&e.connectLines!==this.config.connectLines,r=e.color&&e.color!==this.config.color||e.secondaryColor&&e.secondaryColor!==this.config.secondaryColor;this.config={...this.config,...e},this.applyTransform(),n||i||r?this.rebuildParticles():this.material&&(this.material.opacity=this.config.opacity??.85,this.material.size=(this.config.size||1.2)*.08,this.material.blending=this.config.blendMode==="additive"?wn:hn,this.material.needsUpdate=!0)}dispose(){this.points&&(this.group.remove(this.points),this.points=null),this.geometry&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null),this.linesMesh&&(this.group.remove(this.linesMesh),this.linesMesh=null),this.linesGeometry&&(this.linesGeometry.dispose(),this.linesGeometry=null),this.linesMaterial&&(this.linesMaterial.dispose(),this.linesMaterial=null),this.particleTexture&&(this.particleTexture.dispose(),this.particleTexture=null),this.group.parent&&this.group.parent.remove(this.group)}}class ER{constructor(e){te(this,"config");te(this,"group");te(this,"barsGroup");te(this,"peakMarkersGroup");te(this,"barMeshes",[]);te(this,"peakMeshes",[]);te(this,"peakValues",[]);te(this,"barMaterial",null);te(this,"peakMaterial",null);this.config=e,this.group=new ci,this.barsGroup=new ci,this.peakMarkersGroup=new ci,this.group.add(this.barsGroup),this.group.add(this.peakMarkersGroup)}init(e){this.rebuildMeshes(),this.applyTransform(),e.scene.add(this.group)}rebuildMeshes(){for(const r of this.barMeshes)this.barsGroup.remove(r),r.geometry.dispose();for(const r of this.peakMeshes)this.peakMarkersGroup.remove(r),r.geometry.dispose();this.barMeshes=[],this.peakMeshes=[],this.peakValues=[];const e=this.config.barCount;this.peakValues=new Array(e).fill(0);const n=new Re(this.config.primaryColor),i=new Re(this.config.secondaryColor);if(this.config.mode==="verticalBars"){const s=8/e,a=s*this.config.barWidth;for(let o=0;o<e;o++){const l=o/(e-1||1),c=n.clone().lerp(i,l),h=new Ki(a,1,.1);h.translate(0,.5,0);const f=new yr({color:c,transparent:!0,opacity:this.config.opacity,blending:this.config.blendMode==="additive"?wn:hn}),d=new on(h,f),g=-8/2+o*s+s/2;d.position.set(g,0,0),this.barsGroup.add(d),this.barMeshes.push(d);const x=new Ki(a,.06,.1),v=new yr({color:i,transparent:!0,opacity:this.config.opacity*.9}),m=new on(x,v);m.position.set(g,0,0),m.visible=this.config.showPeaks,this.peakMarkersGroup.add(m),this.peakMeshes.push(m)}}else if(this.config.mode==="circularRadial"){const r=this.config.innerRadius,s=.08;for(let a=0;a<e;a++){const o=a/e*Math.PI*2,l=Math.abs(Math.sin(o)),c=n.clone().lerp(i,l),h=new Ki(s,1,.08);h.translate(0,.5,0);const f=new yr({color:c,transparent:!0,opacity:this.config.opacity,blending:this.config.blendMode==="additive"?wn:hn}),d=new on(h,f);d.position.set(Math.cos(o)*r,Math.sin(o)*r,0),d.rotation.z=o-Math.PI/2,this.barsGroup.add(d),this.barMeshes.push(d)}}else if(this.config.mode==="radialRings"){const r=Math.min(16,e);for(let s=0;s<r;s++){const a=s/(r-1||1),o=n.clone().lerp(i,a),l=new Ip(.8+s*.25,.85+s*.25,64),c=new yr({color:o,side:wi,transparent:!0,opacity:this.config.opacity,blending:this.config.blendMode==="additive"?wn:hn}),h=new on(l,c);this.barsGroup.add(h),this.barMeshes.push(h)}}}applyTransform(){const[e,n,i]=this.config.transform.position,[r,s,a]=this.config.transform.rotation,[o,l,c]=this.config.transform.scale;this.group.position.set(e,n,i),this.group.rotation.set(r,s,a),this.group.scale.set(o,l,c),this.group.visible=this.config.enabled}update(e,n,i){if(!this.config.enabled)return;const r=e.spectrum,s=this.barMeshes.length;if(s===0)return;const a=this.config.maxHeight,o=r.length;this.config.mode==="circularRadial"&&(this.barsGroup.rotation.z+=n*.2*(1+e.bands.bass*.5));for(let l=0;l<s;l++){let c=0;if(this.config.logarithmicScale){const g=Math.floor(Math.pow(l/s,2)*(o-1));c=r[g]||0}else{const g=Math.floor(l/s*(o*.8));c=r[g]||0}const h=1+l/s*1.8;c=Math.min(1,c*h);const f=Math.max(.04,c*a),d=this.barMeshes[l];if(this.config.mode==="verticalBars"){if(d.scale.set(1,f,1),this.config.showPeaks&&this.peakMeshes[l]){const g=this.peakMeshes[l];f>=this.peakValues[l]?this.peakValues[l]=f:this.peakValues[l]=Math.max(.04,this.peakValues[l]-n*this.config.peakDecaySpeed*2.5),g.position.y=this.peakValues[l]+.04,g.visible=!0}}else if(this.config.mode==="circularRadial")d.scale.set(1,f,1);else if(this.config.mode==="radialRings"){const g=1+c*.4;d.scale.set(g,g,1)}}}resize(e,n,i){}updateConfig(e){const n=e.mode&&e.mode!==this.config.mode,i=e.barCount&&e.barCount!==this.config.barCount;if(this.config={...this.config,...e},this.applyTransform(),n||i)this.rebuildMeshes();else{const r=new Re(this.config.primaryColor),s=new Re(this.config.secondaryColor);for(let a=0;a<this.barMeshes.length;a++){const o=this.barMeshes[a],l=a/(this.barMeshes.length-1||1),c=r.clone().lerp(s,l),h=o.material;h.color=c,h.opacity=this.config.opacity,h.blending=this.config.blendMode==="additive"?wn:hn,h.needsUpdate=!0}}}dispose(){for(const e of this.barMeshes)this.barsGroup.remove(e),e.geometry.dispose(),e.material.dispose();for(const e of this.peakMeshes)this.peakMarkersGroup.remove(e),e.geometry.dispose(),e.material.dispose();this.barMeshes=[],this.peakMeshes=[],this.group.parent&&this.group.parent.remove(this.group)}}class yg{constructor(e){te(this,"config");te(this,"group");te(this,"lineMesh",null);te(this,"geometry",null);te(this,"material",null);te(this,"positions",new Float32Array(0));te(this,"colors",new Float32Array(0));this.config=e,this.group=new ci}init(e){this.rebuildWaveform(),this.applyTransform(),e.scene.add(this.group)}rebuildWaveform(){this.lineMesh&&(this.group.remove(this.lineMesh),this.lineMesh=null),this.geometry&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null);const e=Math.max(32,Math.min(2048,this.config.sampleCount||256));this.positions=new Float32Array(e*3),this.colors=new Float32Array(e*3),this.geometry=new qt,this.geometry.setAttribute("position",new mn(this.positions,3)),this.geometry.setAttribute("color",new mn(this.colors,3)),this.material=new cu({vertexColors:!0,linewidth:this.config.thickness||2,transparent:!0,opacity:this.config.opacity??1,blending:this.config.blendMode==="additive"?wn:hn,depthWrite:!1}),this.lineMesh=new D_(this.geometry,this.material),this.group.add(this.lineMesh)}applyTransform(){var h,f,d;const[e,n,i]=((h=this.config.transform)==null?void 0:h.position)||[0,0,0],[r,s,a]=((f=this.config.transform)==null?void 0:f.rotation)||[0,0,0],[o,l,c]=((d=this.config.transform)==null?void 0:d.scale)||[1,1,1];this.group.position.set(e,n,i),this.group.rotation.set(r,s,a),this.group.scale.set(o,l,c),this.group.visible=this.config.enabled??!0}update(e,n,i){var x;if(!this.geometry||!this.config.enabled)return;const r=e.waveform||new Float32Array(1024),s=this.config.sampleCount||256,a=r.length;if(a===0||s===0)return;const o=a/s,l=((x=e.bands)==null?void 0:x.bass)||0,c=(this.config.amplitude||1.5)*(1+l*(this.config.displacementIntensity||1)*.8),h=new Re(this.config.primaryColor||"#00f0ff"),f=new Re(this.config.secondaryColor||"#ff007f"),d=this.positions,g=this.colors;if(!(d.length<s*3||g.length<s*3)){if(this.config.mode==="horizontal")for(let m=0;m<s;m++){const u=Math.min(a-1,Math.floor(m*o)),y=r[u]||0,M=(m/(s-1)*2-1)*5,A=Math.sin(m/(s-1)*Math.PI),T=y*c*A,C=0;d[m*3]=M,d[m*3+1]=T,d[m*3+2]=C;const R=m/(s-1),w=h.clone().lerp(f,R);g[m*3]=w.r,g[m*3+1]=w.g,g[m*3+2]=w.b}else if(this.config.mode==="circular"){const v=this.config.radius||1.8;for(let m=0;m<s;m++){const u=m/(s-1)*Math.PI*2,y=Math.min(a-1,Math.floor(m*o)),_=r[y]||0,M=Math.max(.1,v+_*c*(.8+l*.5)),A=Math.cos(u)*M,T=Math.sin(u)*M,C=Math.sin(u*4+i*2)*(l*.2);d[m*3]=A,d[m*3+1]=T,d[m*3+2]=C;const R=Math.abs(Math.sin(u)),w=h.clone().lerp(f,R);g[m*3]=w.r,g[m*3+1]=w.g,g[m*3+2]=w.b}}else if(this.config.mode==="ribbon3d")for(let m=0;m<s;m++){const u=m/(s-1),y=Math.min(a-1,Math.floor(m*o)),_=r[y]||0,M=(u-.5)*8,A=Math.sin(u*Math.PI*4+i*3)*.4+_*c,T=Math.cos(u*Math.PI*2+i*2)*(this.config.depth3D||.8);d[m*3]=M,d[m*3+1]=A,d[m*3+2]=T;const C=h.clone().lerp(f,u);g[m*3]=C.r,g[m*3+1]=C.g,g[m*3+2]=C.b}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0}}resize(e,n,i){}updateConfig(e){const n=e.sampleCount!==void 0&&e.sampleCount!==this.config.sampleCount,i=e.mode!==void 0&&e.mode!==this.config.mode;this.config={...this.config,...e},this.applyTransform(),n||i?this.rebuildWaveform():this.material&&(this.material.opacity=this.config.opacity??1,this.material.blending=this.config.blendMode==="additive"?wn:hn,this.material.needsUpdate=!0)}dispose(){this.lineMesh&&(this.group.remove(this.lineMesh),this.lineMesh=null),this.geometry&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null),this.group.parent&&this.group.parent.remove(this.group)}}class TR{constructor(){te(this,"renderer",null);te(this,"scene");te(this,"camera");te(this,"container",null);te(this,"canvas",null);te(this,"composer",null);te(this,"bloomPass",null);te(this,"postProcessingSettings",{bloomIntensity:1.5,bloomRadius:.5,bloomThreshold:.3,chromaticAberration:.005,grainIntensity:.15,vignetteIntensity:.4,toneMappingExposure:1.1});te(this,"modulesMap",new Map);te(this,"activeLayers",[]);te(this,"clock",new F_);te(this,"width",1280);te(this,"height",720);te(this,"savedWidth",1280);te(this,"savedHeight",720);te(this,"pixelRatio",1);te(this,"aspectRatio","16:9");te(this,"isExporting",!1);te(this,"cameraAngleX",0);te(this,"cameraAngleY",0);te(this,"targetAngleX",0);te(this,"targetAngleY",0);te(this,"cameraDistance",7);te(this,"targetDistance",7);te(this,"ambientLight");te(this,"dirLight1");te(this,"dirLight2");this.scene=new eR,this.camera=new Ln(60,16/9,.1,1e3),this.camera.position.set(0,0,7),this.ambientLight=new cR(16777215,.6),this.scene.add(this.ambientLight),this.dirLight1=new lR(61695,1.2),this.dirLight1.position.set(5,5,5),this.scene.add(this.dirLight1),this.dirLight2=new aR(16711807,1.5,20),this.dirLight2.position.set(-5,-3,3),this.scene.add(this.dirLight2)}orbitCamera(e,n){this.targetAngleX+=e*.006,this.targetAngleY=Math.max(-1.3,Math.min(1.3,this.targetAngleY+n*.006))}zoomCamera(e){this.targetDistance=Math.max(3.5,Math.min(16,this.targetDistance+e*.005))}resetCamera(){this.targetAngleX=0,this.targetAngleY=0,this.cameraAngleX=0,this.cameraAngleY=0,this.targetDistance=7,this.cameraDistance=7,this.camera.position.set(0,0,7),this.camera.lookAt(0,0,0)}updateCameraPosition(e=0){this.cameraAngleX+=(this.targetAngleX-this.cameraAngleX)*.12,this.cameraAngleY+=(this.targetAngleY-this.cameraAngleY)*.12,this.cameraDistance+=(this.targetDistance-this.cameraDistance)*.12;const n=this.cameraDistance-e*.25,i=Math.cos(this.cameraAngleY);this.camera.position.x=n*Math.sin(this.cameraAngleX)*i,this.camera.position.y=n*Math.sin(this.cameraAngleY),this.camera.position.z=n*Math.cos(this.cameraAngleX)*i,this.camera.lookAt(0,0,0)}mount(e,n){this.container=e;const i=e.getBoundingClientRect();this.width=Math.max(300,Math.floor(i.width||1280)),this.height=Math.max(200,Math.floor(i.height||720)),this.savedWidth=this.width,this.savedHeight=this.height,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),n?(this.canvas=n,this.renderer=new sg({canvas:n,antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"})):(this.renderer=new sg({antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.canvas=this.renderer.domElement,e.appendChild(this.canvas)),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setClearColor(0,0),this.setupPostProcessing(this.width,this.height),this.updateCameraAspect();const r=this.getRenderContext();for(const s of this.modulesMap.values())s.init(r);this.clock.start()}setupPostProcessing(e,n){if(this.renderer)try{this.composer=new mR(this.renderer),this.composer.setSize(e,n);const i=new gR(this.scene,this.camera);this.composer.addPass(i),this.bloomPass=new Ma(new Ue(e,n),this.postProcessingSettings.bloomIntensity,this.postProcessingSettings.bloomRadius,this.postProcessingSettings.bloomThreshold),this.composer.addPass(this.bloomPass);const r=new yR;this.composer.addPass(r)}catch(i){console.warn("Post-processing setup failed, using standard rendering:",i),this.composer=null,this.bloomPass=null}}updatePostProcessing(e){this.postProcessingSettings={...this.postProcessingSettings,...e},this.bloomPass&&(e.bloomIntensity!==void 0&&(this.bloomPass.strength=e.bloomIntensity),e.bloomRadius!==void 0&&(this.bloomPass.radius=e.bloomRadius),e.bloomThreshold!==void 0&&(this.bloomPass.threshold=e.bloomThreshold))}getRenderContext(){return{scene:this.scene,camera:this.camera,renderer:this.renderer,width:this.width,height:this.height,aspectRatio:this.camera.aspect}}getCanvas(){return this.canvas}setAspectRatio(e){this.aspectRatio=e,this.updateCameraAspect()}updateCameraAspect(){let e=1.7777777777777777;this.aspectRatio==="9:16"?e=9/16:this.aspectRatio==="1:1"&&(e=1),this.camera.aspect=e,this.camera.updateProjectionMatrix()}resize(e,n){if(!this.isExporting){this.width=e,this.height=n,this.savedWidth=e,this.savedHeight=n,this.renderer&&(this.renderer.setSize(e,n),this.renderer.setPixelRatio(this.pixelRatio)),this.composer&&this.composer.setSize(e,n),this.bloomPass&&this.bloomPass.resolution.set(e,n),this.updateCameraAspect();for(const i of this.modulesMap.values())i.resize(e,n,this.pixelRatio)}}setExportMode(e,n,i){if(this.isExporting=e,!!this.renderer)if(e&&n&&i){this.width=n,this.height=i,this.renderer.setPixelRatio(1),this.renderer.setSize(n,i,!1),this.composer&&(this.composer.setPixelRatio(1),this.composer.setSize(n,i)),this.bloomPass&&this.bloomPass.resolution.set(n,i),this.updateCameraAspect();for(const r of this.modulesMap.values())r.resize(n,i,1)}else{this.width=this.savedWidth,this.height=this.savedHeight,this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.savedWidth,this.savedHeight),this.composer&&(this.composer.setPixelRatio(this.pixelRatio),this.composer.setSize(this.savedWidth,this.savedHeight)),this.bloomPass&&this.bloomPass.resolution.set(this.savedWidth,this.savedHeight),this.updateCameraAspect();for(const r of this.modulesMap.values())r.resize(this.savedWidth,this.savedHeight,this.pixelRatio)}}createModuleInstance(e){switch(e.type){case"waveform":return new yg(e);case"spectrum":return new ER(e);case"particles":return new bR(e);case"geometry":return new wR(e);case"background":return new SR(e);default:return new yg(e)}}syncLayers(e){this.activeLayers=e;const n=new Set(e.map(r=>r.id));for(const[r,s]of this.modulesMap.entries())n.has(r)||(s.dispose(),this.modulesMap.delete(r));const i=this.getRenderContext();for(const r of e){let s=this.modulesMap.get(r.id);!s||s.config.type!==r.type?(s&&(s.dispose(),this.modulesMap.delete(r.id)),s=this.createModuleInstance(r),this.renderer&&s.init(i),this.modulesMap.set(r.id,s)):s.updateConfig(r)}}renderPreviewFrame(e){var s,a;if(!this.renderer||this.isExporting)return;const n=this.clock.getDelta(),i=this.clock.getElapsedTime(),r=((s=e.bands)==null?void 0:s.bass)||0;this.dirLight1.intensity=1+r*.8,this.dirLight2.intensity=1.2+(((a=e.bands)==null?void 0:a.treble)||0)*1;for(const o of this.activeLayers){const l=this.modulesMap.get(o.id);l&&o.enabled&&l.update(e,n,i)}this.composer&&this.postProcessingSettings.bloomIntensity>.05?this.composer.render():this.renderer.render(this.scene,this.camera)}renderOfflineFrame(e,n,i,r=60){var l,c;if(!this.renderer)return;const s=1/r,a=n,o=((l=e.bands)==null?void 0:l.bass)||0;this.dirLight1.intensity=1+o*.8,this.dirLight2.intensity=1.2+(((c=e.bands)==null?void 0:c.treble)||0)*1;for(const h of this.activeLayers){const f=this.modulesMap.get(h.id);f&&h.enabled&&f.update(e,s,a)}this.composer&&this.postProcessingSettings.bloomIntensity>.05?this.composer.render():this.renderer.render(this.scene,this.camera)}dispose(){for(const e of this.modulesMap.values())e.dispose();this.modulesMap.clear(),this.composer&&(this.composer.dispose(),this.composer=null),this.renderer&&(this.renderer.dispose(),this.canvas&&this.canvas.parentElement&&this.canvas.parentElement.removeChild(this.canvas),this.renderer=null,this.canvas=null)}}const st=new TR;class CR{constructor(){te(this,"isCancelled",!1)}isWebCodecsSupported(){return typeof window<"u"&&typeof window.VideoEncoder=="function"&&typeof window.VideoFrame=="function"}cancelExport(){this.isCancelled=!0}async startExport(e,n){this.isCancelled=!1;const i=performance.now(),r=ab[e.aspectRatio][e.resolution],s=r.width%2===0?r.width:r.width-1,a=r.height%2===0?r.height:r.height-1,o=e.fps||30,l=ct.getDuration(),c=Math.max(0,e.startTime||0),h=e.endTime>c?e.endTime:l>0?l:10,f=Math.max(1,h-c),d=Math.max(1,Math.floor(f*o)),g={status:"preparing",progress:0,currentFrame:0,totalFrames:d,elapsedTimeSeconds:0,estimatedTimeRemainingSeconds:0,renderingFps:0};n({...g}),st.setExportMode(!0,s,a);try{if(this.isWebCodecsSupported())try{return await this.exportWithWebCodecs(e,s,a,o,c,d,i,g,n)}catch(x){if(console.warn("WebCodecs export failed:",x),this.isCancelled||g.currentFrame>0)throw x;return await this.exportWithMediaRecorder(e,s,a,o,c,f,g,n)}else return await this.exportWithMediaRecorder(e,s,a,o,c,f,g,n)}catch(x){throw g.status="error",g.errorMessage=x.message||"An error occurred during video export",n({...g}),x}finally{st.setExportMode(!1)}}async exportWithWebCodecs(e,n,i,r,s,a,o,l,c){const h=window.VideoEncoder,f=["avc1.420034","avc1.4d002a","avc1.640028","avc1.42E01E","vp8"];let d="avc1.420034",g=!1;for(const I of f)try{const z=await h.isConfigSupported({codec:I,width:n,height:i,bitrate:e.bitrate||12e6,framerate:r});if(z&&z.supported){d=I,g=!0;break}}catch{}if(!g)throw new Error(`No compatible video codec supported for ${n}x${i}`);const x=ct.getAudioBuffer(),v=window.AudioEncoder,m=window.AudioData;let u=!1;if(e.includeAudio!==!1&&x&&typeof v=="function"&&typeof m=="function")try{const I=await v.isConfigSupported({codec:"mp4a.40.2",sampleRate:x.sampleRate,numberOfChannels:Math.min(2,x.numberOfChannels),bitrate:192e3});I&&I.supported&&(u=!0)}catch(I){console.warn("AudioEncoder AAC config check:",I)}const y=new Oy,_=d.startsWith("avc"),M=new sb({target:y,video:{codec:_?"avc":"vp9",width:n,height:i},audio:u&&x?{codec:"aac",numberOfChannels:Math.min(2,x.numberOfChannels),sampleRate:x.sampleRate}:void 0,fastStart:!1,firstTimestampBehavior:"offset"});let A=null;const T=new h({output:(I,z)=>{try{M.addVideoChunk(I,z)}catch(H){A=H}},error:I=>{A=I}});if(T.configure({codec:d,width:n,height:i,bitrate:e.bitrate||12e6,framerate:r}),u&&x)try{let I=0;const z=new v({output:(ne,he)=>{try{M.addAudioChunk(ne,he),I++}catch(le){console.warn("Audio chunk mux error:",le)}},error:ne=>{console.warn("AudioEncoder warning:",ne)}});z.configure({codec:"mp4a.40.2",sampleRate:x.sampleRate,numberOfChannels:Math.min(2,x.numberOfChannels),bitrate:192e3});const H=x.sampleRate,X=Math.min(2,x.numberOfChannels),K=Math.floor(s*H),L=Math.floor(a/r*H),q=Math.min(x.length,K+L),Z=x.getChannelData(0),oe=x.numberOfChannels>1?x.getChannelData(1):Z,ue=1024;let Ne=K,$=0;for(;Ne<q&&!this.isCancelled;){const ne=new Float32Array(ue*X);for(let Ee=0;Ee<ue;Ee++){const Fe=Ne+Ee;Fe<q?(ne[Ee]=Z[Fe],X>1&&(ne[ue+Ee]=oe[Fe])):(ne[Ee]=0,X>1&&(ne[ue+Ee]=0))}const he=Math.floor($/H*1e6),le=new m({format:"f32-planar",sampleRate:H,numberOfFrames:ue,numberOfChannels:X,timestamp:he,data:ne});z.encode(le),le.close(),Ne+=ue,$+=ue,z.encodeQueueSize>20&&await new Promise(Ee=>setTimeout(Ee,0))}await z.flush(),z.close(),console.log(`Audio successfully encoded: ${I} AAC chunks added to MP4.`)}catch(I){console.warn("Audio encoding failed, proceeding with video only:",I)}l.status="renderingFrames",c({...l});const C=1e6/r,R=window.VideoFrame,w=st.getCanvas();if(!w)throw new Error("Render canvas not available");for(let I=0;I<a;I++){if(this.isCancelled)throw l.status="cancelled",c({...l}),new Error("Export cancelled by user");if(A)throw A;const z=s+I/r,H=ct.getOfflineAnalysis(z);st.renderOfflineFrame(H,z,I,r);const X=new R(w,{timestamp:I*C,duration:C}),K=I%(r*2)===0;for(T.encode(X,{keyFrame:K}),X.close();T.encodeQueueSize>5;)await new Promise(Ne=>setTimeout(Ne,4));const q=(performance.now()-o)/1e3,Z=I>0?I/q:r,ue=(a-I)/(Z||1);l.currentFrame=I+1,l.progress=(I+1)/a,l.elapsedTimeSeconds=q,l.estimatedTimeRemainingSeconds=ue,l.renderingFps=Z,(I%2===0||I===a-1)&&(c({...l}),await new Promise(Ne=>setTimeout(Ne,0)))}l.status="muxingAudio",c({...l}),await new Promise(I=>setTimeout(I,30)),await Promise.race([T.flush(),new Promise((I,z)=>setTimeout(()=>z(new Error("Video encoder flush timed out")),25e3))]),T.close();try{M.finalize()}catch(I){throw console.error("Muxer finalize error:",I),new Error(`Failed to finalize MP4 file: ${I.message||"Muxing error"}`)}const S=y.buffer;if(!S||S.byteLength===0)throw new Error("Generated MP4 file is empty");const N=new Blob([S],{type:"video/mp4"}),V=URL.createObjectURL(N);l.status="completed",l.progress=1,l.outputBlobUrl=V,l.fileSizeBytes=N.size,c({...l});try{const I=document.createElement("a");I.href=V,I.download=`${e.outputFileName||"visualization"}.mp4`,document.body.appendChild(I),I.click(),setTimeout(()=>{I.parentNode&&document.body.removeChild(I)},500)}catch(I){console.warn("Auto download trigger error (user can still click button):",I)}return N}async exportWithMediaRecorder(e,n,i,r,s,a,o,l){const c=st.getCanvas();if(!c)throw new Error("Canvas not found");const h=c.captureStream(r),f=ct.connectMediaStreamDestination();f&&f.stream.getAudioTracks().length>0&&h.addTrack(f.stream.getAudioTracks()[0]);const d=MediaRecorder.isTypeSupported('video/mp4; codecs="avc1.424028"')?"video/mp4":"video/webm;codecs=vp9",g=new MediaRecorder(h,{mimeType:d,videoBitsPerSecond:e.bitrate||1e7}),x=[];return g.ondataavailable=v=>{v.data&&v.data.size>0&&x.push(v.data)},new Promise((v,m)=>{const u=performance.now(),y=()=>{f&&ct.disconnectMediaStreamDestination(f)};g.onstop=()=>{y();const M=new Blob(x,{type:d});o.status="completed",o.progress=1,o.outputBlobUrl=URL.createObjectURL(M),o.fileSizeBytes=M.size,l({...o}),v(M)},g.onerror=M=>{y(),o.status="error",o.errorMessage="MediaRecorder error occurred during export",l({...o}),m(M)},g.start(100),ct.play(s);const _=setInterval(()=>{const M=ct.getCurrentTime(),A=(performance.now()-u)/1e3,T=Math.min(1,(M-s)/a),C=Math.max(0,a-(M-s));o.progress=T,o.status="renderingFrames",o.currentFrame=Math.floor(T*a*r),o.elapsedTimeSeconds=A,o.estimatedTimeRemainingSeconds=C,o.renderingFps=r,l({...o}),(M>=s+a||this.isCancelled)&&(clearInterval(_),ct.pause(),g.stop())},100)})}}const _g=new CR,si=[{id:"preset-cyberpunk",name:"Cyber Horizon 2077",category:"cyberpunk",description:"80s Synthwave grid horizon, audio-reactive wireframe torus & graphic equalizer",isBuiltIn:!0,updatedAt:Date.now(),palette:{id:"pal-cyber",name:"Cyberpunk Neon",primary:"#fcee0a",secondary:"#ff007f",accent:"#00f0ff",background:"#0a0017",glow:"#fcee0a"},reactivity:{masterSensitivity:1.35,bassSensitivity:1.45,midSensitivity:1.1,trebleSensitivity:1.25,globalSmoothing:.74,autoGainControl:!0},postProcessing:{bloomIntensity:2.2,bloomRadius:.65,bloomThreshold:.22,chromaticAberration:.008,grainIntensity:.18,vignetteIntensity:.42,toneMappingExposure:1.15},layers:[{id:"layer-bg-cyber",name:"Synthwave Horizon Grid",type:"background",enabled:!0,opacity:1,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"synthwaveGrid",primaryColor:"#0a0017",secondaryColor:"#ff007f",accentColor:"#fcee0a",gradientAngle:0,grainIntensity:.2,vignetteStrength:.45,animationSpeed:1.2,audioReactiveZoom:.5,mediaBlur:0},{id:"layer-geom-cyber",name:"Wireframe Torus Knot",type:"geometry",enabled:!0,opacity:.95,blendMode:"additive",transform:{position:[0,.5,0],rotation:[.4,0,0],scale:[1.1,1.1,1.1]},reactivityMappings:[],shape:"torusKnot",shadingStyle:"wireframe",subdivisions:2,wireframeThickness:1.8,noiseDistortion:.7,distortionBand:"bass",rotationSpeed:[.2,.45,.15],pulseIntensity:.9,primaryColor:"#fcee0a",accentColor:"#00f0ff",metallicRoughness:.25,glowIntensity:2.2},{id:"layer-spec-cyber",name:"Graphic Equalizer Bars",type:"spectrum",enabled:!0,opacity:.9,blendMode:"additive",transform:{position:[0,-1.8,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"verticalBars",barCount:48,barWidth:.75,maxHeight:1.8,innerRadius:1.2,minFrequencyHz:20,maxFrequencyHz:16e3,logarithmicScale:!0,primaryColor:"#ff007f",secondaryColor:"#00f0ff",barRoundness:.5,glowIntensity:1.8,mirror:!0,showPeaks:!0,peakDecaySpeed:1.5}]},{id:"preset-neon",name:"Deep Space Nebula",category:"neon",description:"Swirling raymarched cosmic clouds, 3D wave ribbon, and starry particle vortex",isBuiltIn:!0,updatedAt:Date.now(),palette:{id:"pal-nebula",name:"Cosmic Violet",primary:"#00f0ff",secondary:"#8b5cf6",accent:"#ec4899",background:"#05060f",glow:"#00f0ff"},reactivity:{masterSensitivity:1.2,bassSensitivity:1.35,midSensitivity:1.1,trebleSensitivity:1.2,globalSmoothing:.8,autoGainControl:!0},postProcessing:{bloomIntensity:1.9,bloomRadius:.65,bloomThreshold:.28,chromaticAberration:.005,grainIntensity:.15,vignetteIntensity:.45,toneMappingExposure:1.1},layers:[{id:"layer-bg-nebula",name:"Cosmic Nebula",type:"background",enabled:!0,opacity:1,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"animatedNebula",primaryColor:"#05060f",secondaryColor:"#1d0b38",accentColor:"#00f0ff",gradientAngle:45,grainIntensity:.2,vignetteStrength:.5,animationSpeed:1,audioReactiveZoom:.5,mediaBlur:0},{id:"layer-particles-nebula",name:"Ambient Stellar Vortex",type:"particles",enabled:!0,opacity:.88,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],count:1600,size:1.3,speed:1.1,behavior:"ambientVortex",dispersion:4.8,color:"#00f0ff",secondaryColor:"#8b5cf6",connectLines:!0,connectionDistance:.85,connectionOpacity:.28,beatExplosionForce:3.2,trebleTwinkle:2.2,lifetime:4,particleShape:"circle"},{id:"layer-waveform-nebula",name:"3D Wave Ribbon",type:"waveform",enabled:!0,opacity:1,blendMode:"additive",transform:{position:[0,0,0],rotation:[.25,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"ribbon3d",thickness:2.4,amplitude:1.6,sampleCount:384,glowIntensity:2.4,primaryColor:"#00f0ff",secondaryColor:"#ec4899",colorGradientType:"linear",radius:1.8,depth3D:1.1,waveformSmoothing:.2,displacementIntensity:1.3,mirror:!1}]},{id:"preset-darktechno",name:"Industrial Rave",category:"darkTechno",description:"Aggressive circular oscilloscope with fiery amber bass shockwaves and underground club aesthetic",isBuiltIn:!0,updatedAt:Date.now(),palette:{id:"pal-techno",name:"Industrial Fire",primary:"#f59e0b",secondary:"#ffffff",accent:"#ef4444",background:"#05070a",glow:"#f59e0b"},reactivity:{masterSensitivity:1.5,bassSensitivity:1.8,midSensitivity:.85,trebleSensitivity:1,globalSmoothing:.68,autoGainControl:!0},postProcessing:{bloomIntensity:1.6,bloomRadius:.52,bloomThreshold:.38,chromaticAberration:.004,grainIntensity:.35,vignetteIntensity:.68,toneMappingExposure:1.08},layers:[{id:"layer-bg-techno",name:"Industrial Slate Gradient",type:"background",enabled:!0,opacity:1,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"gradient",primaryColor:"#05070a",secondaryColor:"#1e293b",accentColor:"#f59e0b",gradientAngle:135,grainIntensity:.38,vignetteStrength:.72,animationSpeed:.8,audioReactiveZoom:.65,mediaBlur:0},{id:"layer-particles-techno",name:"Amber Shockwave Particles",type:"particles",enabled:!0,opacity:.95,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],count:2e3,size:1.4,speed:1.6,behavior:"radialExplosion",dispersion:5.2,color:"#f59e0b",secondaryColor:"#ef4444",connectLines:!0,connectionDistance:.75,connectionOpacity:.3,beatExplosionForce:5.5,trebleTwinkle:1.2,lifetime:3.5,particleShape:"circle"},{id:"layer-wf-techno",name:"Bass Ring Oscilloscope",type:"waveform",enabled:!0,opacity:1,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"circular",thickness:3.2,amplitude:1.9,sampleCount:256,glowIntensity:2.2,primaryColor:"#f59e0b",secondaryColor:"#ffffff",colorGradientType:"radial",radius:1.7,depth3D:0,waveformSmoothing:.15,displacementIntensity:1.7,mirror:!1}]},{id:"preset-liquid",name:"Liquid Hologram",category:"liquid",description:"Iridescent Simplex-deformed geosphere with concentric frequency rings & dreamy glow",isBuiltIn:!0,updatedAt:Date.now(),palette:{id:"pal-liquid",name:"Iridescent Lagoon",primary:"#06b6d4",secondary:"#8b5cf6",accent:"#ec4899",background:"#040d1a",glow:"#06b6d4"},reactivity:{masterSensitivity:1.15,bassSensitivity:1.25,midSensitivity:1.35,trebleSensitivity:1.05,globalSmoothing:.82,autoGainControl:!0},postProcessing:{bloomIntensity:1.5,bloomRadius:.65,bloomThreshold:.32,chromaticAberration:.006,grainIntensity:.1,vignetteIntensity:.35,toneMappingExposure:1.2},layers:[{id:"layer-bg-liquid",name:"Liquid Aurora",type:"background",enabled:!0,opacity:1,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"animatedNebula",primaryColor:"#040d1a",secondaryColor:"#2e1065",accentColor:"#06b6d4",gradientAngle:60,grainIntensity:.15,vignetteStrength:.45,animationSpeed:.7,audioReactiveZoom:.35,mediaBlur:0},{id:"layer-geom-liquid",name:"Morphing Geosphere",type:"geometry",enabled:!0,opacity:.95,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1.15,1.15,1.15]},reactivityMappings:[],shape:"morphingGeosphere",shadingStyle:"metallicPBR",subdivisions:3,wireframeThickness:1,noiseDistortion:.95,distortionBand:"mid",rotationSpeed:[.15,.28,.1],pulseIntensity:.75,primaryColor:"#06b6d4",accentColor:"#8b5cf6",metallicRoughness:.18,glowIntensity:1.6},{id:"layer-spec-liquid",name:"Concentric Rings",type:"spectrum",enabled:!0,opacity:.8,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"radialRings",barCount:16,barWidth:.8,maxHeight:1.5,innerRadius:1.4,minFrequencyHz:20,maxFrequencyHz:16e3,logarithmicScale:!0,primaryColor:"#06b6d4",secondaryColor:"#ec4899",barRoundness:.5,glowIntensity:1.5,mirror:!1,showPeaks:!1,peakDecaySpeed:1}]},{id:"preset-minimal",name:"Minimalist Studio",category:"minimal",description:"Clean obsidian studio aesthetic with razor-sharp mirrored waveform and understated tape grain",isBuiltIn:!0,updatedAt:Date.now(),palette:{id:"pal-minimal",name:"Monochrome Slate",primary:"#ffffff",secondary:"#64748b",accent:"#94a3b8",background:"#08090d",glow:"#ffffff"},reactivity:{masterSensitivity:1,bassSensitivity:1,midSensitivity:.9,trebleSensitivity:.95,globalSmoothing:.86,autoGainControl:!0},postProcessing:{bloomIntensity:.7,bloomRadius:.38,bloomThreshold:.6,chromaticAberration:0,grainIntensity:.22,vignetteIntensity:.58,toneMappingExposure:1},layers:[{id:"layer-bg-min",name:"Obsidian Studio Background",type:"background",enabled:!0,opacity:1,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"solid",primaryColor:"#08090d",secondaryColor:"#11141c",accentColor:"#334155",gradientAngle:90,grainIntensity:.25,vignetteStrength:.65,animationSpeed:.5,audioReactiveZoom:0,mediaBlur:0},{id:"layer-wf-min",name:"Mirrored Waveform Line",type:"waveform",enabled:!0,opacity:.95,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"horizontal",thickness:1.6,amplitude:1.6,sampleCount:512,glowIntensity:.9,primaryColor:"#ffffff",secondaryColor:"#64748b",colorGradientType:"linear",radius:2,depth3D:0,waveformSmoothing:.3,displacementIntensity:.8,mirror:!0}]}];function AR(){const t=Math.floor(Math.random()*360),e=["complementary","analogous","triadic","neon"],n=e[Math.floor(Math.random()*e.length)];let i=t,r=(t+180)%360,s=(t+90)%360;n==="analogous"?(r=(t+35)%360,s=(t-35+360)%360):n==="triadic"?(r=(t+120)%360,s=(t+240)%360):n==="neon"&&(i=185,r=325,s=270);const a=rs(i,95,55),o=rs(r,90,55),l=rs(s,90,60),c=["solid","gradient","animatedNebula","synthwaveGrid"],h=c[Math.floor(Math.random()*c.length)],f=["waveform","spectrum"],d=f[Math.floor(Math.random()*f.length)],g=[];if(g.push({id:`rand-bg-${Date.now()}`,name:"Background Layer",type:"background",enabled:!0,opacity:1,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:h,primaryColor:"#080a12",secondaryColor:rs(i,70,15),accentColor:l,gradientAngle:Math.floor(Math.random()*360),grainIntensity:.15+Math.random()*.2,vignetteStrength:.4+Math.random()*.3,animationSpeed:.8+Math.random()*.5,audioReactiveZoom:.3+Math.random()*.3,mediaBlur:0}),Math.random()>.3){const x=["ambientVortex","radialExplosion","flowField"];g.push({id:`rand-part-${Date.now()}`,name:"Ambient Particles",type:"particles",enabled:!0,opacity:.85,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],count:800+Math.floor(Math.random()*800),size:1+Math.random()*.6,speed:.8+Math.random()*.8,behavior:x[Math.floor(Math.random()*x.length)],dispersion:4+Math.random()*1.5,color:a,secondaryColor:o,connectLines:Math.random()>.5,connectionDistance:.8,connectionOpacity:.3,beatExplosionForce:2.5+Math.random()*2.5,trebleTwinkle:1.5+Math.random()*1,lifetime:3.5,particleShape:"circle"})}if(d==="waveform"){const x=["horizontal","circular","ribbon3d"];g.push({id:`rand-wf-${Date.now()}`,name:"Reactive Waveform",type:"waveform",enabled:!0,opacity:1,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:x[Math.floor(Math.random()*x.length)],thickness:2+Math.random()*1.5,amplitude:1.2+Math.random()*.6,sampleCount:256,glowIntensity:1.5+Math.random()*1.5,primaryColor:a,secondaryColor:o,colorGradientType:"radial",radius:1.6+Math.random()*.4,depth3D:.8,waveformSmoothing:.2,displacementIntensity:1+Math.random()*.5,mirror:Math.random()>.5})}else g.push({id:`rand-spec-${Date.now()}`,name:"Reactive Spectrum",type:"spectrum",enabled:!0,opacity:.95,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:Math.random()>.5?"circularRadial":"verticalBars",barCount:32+Math.floor(Math.random()*32),barWidth:.7+Math.random()*.2,maxHeight:1.5+Math.random()*.5,innerRadius:1.3,minFrequencyHz:20,maxFrequencyHz:16e3,logarithmicScale:!0,primaryColor:a,secondaryColor:o,barRoundness:.5,glowIntensity:1.8,mirror:!0,showPeaks:!0,peakDecaySpeed:1.5});return{id:`rand-preset-${Date.now()}`,name:`Generative ${n.toUpperCase()} #${Math.floor(Math.random()*900+100)}`,category:"abstract",description:`Aesthetically constrained generative preset with ${n} palette`,isBuiltIn:!1,updatedAt:Date.now(),palette:{id:`pal-rand-${Date.now()}`,name:"Generative Palette",primary:a,secondary:o,accent:l,background:"#080a12",glow:a},reactivity:{masterSensitivity:1+Math.random()*.4,bassSensitivity:1.1+Math.random()*.5,midSensitivity:.9+Math.random()*.3,trebleSensitivity:1+Math.random()*.3,globalSmoothing:.78+Math.random()*.1,autoGainControl:!0},postProcessing:{bloomIntensity:1.2+Math.random()*1,bloomRadius:.5+Math.random()*.3,bloomThreshold:.3+Math.random()*.2,chromaticAberration:.003+Math.random()*.004,grainIntensity:.12+Math.random()*.15,vignetteIntensity:.35+Math.random()*.25,toneMappingExposure:1.05+Math.random()*.2},layers:g}}function RR(t){if(t.type==="waveform"){const e=["circular","horizontal","ribbon3d"];return{mode:e[Math.floor(Math.random()*e.length)],amplitude:parseFloat((.8+Math.random()*1.8).toFixed(1)),thickness:parseFloat((1.5+Math.random()*3.5).toFixed(1)),sampleCount:[128,256,384,512][Math.floor(Math.random()*4)],radius:parseFloat((1.2+Math.random()*1.4).toFixed(1)),depth3D:parseFloat((.4+Math.random()*1.2).toFixed(1)),displacementIntensity:parseFloat((.5+Math.random()*1.8).toFixed(1)),mirror:Math.random()>.5}}else if(t.type==="spectrum"){const e=["verticalBars","circularRadial","radialRings"];return{mode:e[Math.floor(Math.random()*e.length)],barCount:[24,32,48,64][Math.floor(Math.random()*4)],barWidth:parseFloat((.4+Math.random()*.55).toFixed(2)),maxHeight:parseFloat((1+Math.random()*1.8).toFixed(1)),innerRadius:parseFloat((.8+Math.random()*1.4).toFixed(1)),showPeaks:Math.random()>.4,mirror:Math.random()>.5}}else if(t.type==="particles"){const e=["ambientVortex","radialExplosion","flowField"];return{behavior:e[Math.floor(Math.random()*e.length)],count:Math.floor(600+Math.random()*2e3),size:parseFloat((.8+Math.random()*1.2).toFixed(1)),speed:parseFloat((.6+Math.random()*1.4).toFixed(1)),dispersion:parseFloat((3+Math.random()*3.5).toFixed(1)),beatExplosionForce:parseFloat((2+Math.random()*4.5).toFixed(1)),trebleTwinkle:parseFloat((1+Math.random()*2).toFixed(1)),connectLines:Math.random()>.6,connectionDistance:parseFloat((.6+Math.random()*1).toFixed(1))}}else if(t.type==="geometry"){const e=["icosahedron","torusKnot","morphingGeosphere","cyberCube","dodecahedron"],n=["wireframe","faceted","metallicPBR"],i=["bass","mid","treble","rms"];return{shape:e[Math.floor(Math.random()*e.length)],shadingStyle:n[Math.floor(Math.random()*n.length)],noiseDistortion:parseFloat((.3+Math.random()*1).toFixed(2)),distortionBand:i[Math.floor(Math.random()*i.length)],pulseIntensity:parseFloat((.4+Math.random()*1.4).toFixed(2)),rotationSpeed:[parseFloat((Math.random()*.6-.3).toFixed(2)),parseFloat((.2+Math.random()*.8).toFixed(2)),parseFloat((Math.random()*.4-.2).toFixed(2))]}}else if(t.type==="background"){const e=["animatedNebula","synthwaveGrid","gradient","solid"];return{mode:e[Math.floor(Math.random()*e.length)],gradientAngle:Math.floor(Math.random()*360),animationSpeed:parseFloat((.5+Math.random()*1.5).toFixed(1)),audioReactiveZoom:parseFloat((.2+Math.random()*.8).toFixed(1)),grainIntensity:parseFloat((.1+Math.random()*.3).toFixed(2)),vignetteStrength:parseFloat((.3+Math.random()*.4).toFixed(2))}}return{}}function PR(t){const e=Math.floor(Math.random()*360),n=Math.random()>.5?180:120,i=rs(e,95,55),r=rs((e+n)%360,90,55),s=rs((e+90)%360,90,60),a={opacity:parseFloat((.8+Math.random()*.2).toFixed(2)),blendMode:Math.random()>.3?"additive":"normal"};return"color"in t&&(a.color=i,a.secondaryColor=r),"primaryColor"in t&&(a.primaryColor=i),"secondaryColor"in t&&(a.secondaryColor=r),"accentColor"in t&&(a.accentColor=s),a}function NR(){return{masterSensitivity:parseFloat((.9+Math.random()*.8).toFixed(2)),bassSensitivity:parseFloat((1+Math.random()*1.2).toFixed(2)),midSensitivity:parseFloat((.8+Math.random()*.7).toFixed(2)),trebleSensitivity:parseFloat((.8+Math.random()*.8).toFixed(2)),globalSmoothing:parseFloat((.72+Math.random()*.16).toFixed(2))}}function DR(){return{bloomIntensity:parseFloat((.9+Math.random()*1.8).toFixed(1)),bloomRadius:parseFloat((.35+Math.random()*.45).toFixed(2)),bloomThreshold:parseFloat((.2+Math.random()*.3).toFixed(2)),grainIntensity:parseFloat((.1+Math.random()*.25).toFixed(2)),vignetteIntensity:parseFloat((.3+Math.random()*.35).toFixed(2))}}function rs(t,e,n){n/=100;const i=e*Math.min(n,1-n)/100,r=s=>{const a=(s+t/30)%12,o=n-i*Math.max(Math.min(a-3,9-a,1),-1);return Math.round(255*o).toString(16).padStart(2,"0")};return`#${r(0)}${r(8)}${r(4)}`}const O_="audio_reactive_studio_presets_v2",B_="audio_reactive_studio_last_preset_id";function LR(){if(typeof window>"u")return JSON.parse(JSON.stringify(si));try{const t=localStorage.getItem(O_);if(!t)return sa(si),JSON.parse(JSON.stringify(si));const e=JSON.parse(t);if(!Array.isArray(e)||e.length===0)return sa(si),JSON.parse(JSON.stringify(si));const n=new Set(e.map(r=>r.id)),i=[...e];for(const r of si)n.has(r.id)||i.push(JSON.parse(JSON.stringify(r)));return i}catch(t){return console.warn("Failed to load presets from localStorage, using default presets:",t),JSON.parse(JSON.stringify(si))}}function sa(t){if(!(typeof window>"u"))try{localStorage.setItem(O_,JSON.stringify(t))}catch(e){console.error("Failed to save presets to localStorage:",e)}}function Xa(t){if(!(typeof window>"u"))try{localStorage.setItem(B_,t)}catch{}}function IR(){if(typeof window>"u")return null;try{return localStorage.getItem(B_)}catch{return null}}function UR(){const t=JSON.parse(JSON.stringify(si));return sa(t),t}function Mg(t,e){let n="#00f0ff",i="#ff007f",r="#fcee0a",s="#080810",a="#00f0ff";for(const o of t){const l=o;l.primaryColor&&(n=l.primaryColor),l.secondaryColor&&(i=l.secondaryColor),l.accentColor&&(r=l.accentColor),l.glowColor&&(a=l.glowColor),o.type==="background"&&l.primaryColor&&(s=l.primaryColor)}return{id:`pal-${Date.now()}`,name:e,primary:n,secondary:i,accent:r,background:s,glow:a}}const Sg=LR(),wg=IR(),Us=(wg?Sg.find(t=>t.id===wg):null)||Sg[0]||si[0],bg={id:`proj-${Date.now()}`,name:Us.name,version:"1.0.0",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),aspectRatio:"16:9",previewQuality:"1080p",reactivity:{...Us.reactivity},postProcessing:{...Us.postProcessing},layers:JSON.parse(JSON.stringify(Us.layers)),activePresetId:Us.id},Zt=KS((t,e)=>{var n;return{project:bg,isProjectDirty:!1,audioMetadata:null,audioBuffer:null,isPlaying:!1,currentTime:0,duration:0,volume:.8,isMuted:!1,isLooping:!0,currentAudioData:null,availablePresets:[...si],activePreset:Us,selectedLayerId:((n=bg.layers[0])==null?void 0:n.id)||null,activeInspectorTab:"visual",showGridGuides:!1,canvasScaleMode:"fit",isExportModalOpen:!1,exportProgress:null,loadAudioFile:async i=>{try{const r=await ct.loadAudioFile(i);t({audioMetadata:r,audioBuffer:ct.getAudioBuffer(),duration:r.duration,currentTime:0,isPlaying:!1}),st.syncLayers(e().project.layers),ct.detectBpmFromBuffer().catch(()=>{})}catch(r){console.error("Failed to load audio file:",r)}},play:()=>{ct.play(),t({isPlaying:!0})},pause:()=>{ct.pause(),t({isPlaying:!1,currentTime:ct.getCurrentTime()})},stop:()=>{ct.stop(),t({isPlaying:!1,currentTime:0})},seek:i=>{ct.seek(i),t({currentTime:i})},setVolume:i=>{ct.setVolume(i),t({volume:i,isMuted:i===0})},toggleMute:()=>{!e().isMuted?(ct.setVolume(0),t({isMuted:!0})):(ct.setVolume(e().volume||.8),t({isMuted:!1}))},toggleLoop:()=>{t(i=>({isLooping:!i.isLooping}))},updateCurrentTime:i=>{t({currentTime:i})},setAudioAnalysisData:i=>{t({currentAudioData:i})},recheckBpm:async()=>{const i=await ct.detectBpmFromBuffer(),r=e().currentAudioData;return r&&t({currentAudioData:{...r,beat:{...r.beat,bpm:i,bpmConfidence:1}}}),i},setManualBpm:i=>{ct.setManualBpm(i);const r=e().currentAudioData;r&&t({currentAudioData:{...r,beat:{...r.beat,bpm:i,bpmConfidence:1}}})},multiplyBpm:i=>{const r=ct.multiplyBpm(i),s=e().currentAudioData;s&&t({currentAudioData:{...s,beat:{...s.beat,bpm:r,bpmConfidence:1}}})},addLayer:i=>{const r=`layer-${i}-${Date.now()}`;let s;i==="waveform"?s={id:r,name:"Waveform Layer",type:"waveform",enabled:!0,opacity:1,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"circular",thickness:2,amplitude:1.5,sampleCount:256,glowIntensity:2,primaryColor:"#00f0ff",secondaryColor:"#ff007f",colorGradientType:"radial",radius:1.8,depth3D:.5,waveformSmoothing:.2,displacementIntensity:1.2,mirror:!1}:i==="spectrum"?s={id:r,name:"Frequency Spectrum",type:"spectrum",enabled:!0,opacity:.9,blendMode:"additive",transform:{position:[0,-1.5,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"verticalBars",barCount:40,barWidth:.8,maxHeight:1.8,innerRadius:1.2,minFrequencyHz:20,maxFrequencyHz:16e3,logarithmicScale:!0,primaryColor:"#00f0ff",secondaryColor:"#a855f7",barRoundness:.5,glowIntensity:1.8,mirror:!0,showPeaks:!0,peakDecaySpeed:1.5}:i==="particles"?s={id:r,name:"Particle System",type:"particles",enabled:!0,opacity:.85,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],count:1e3,size:1.2,speed:1,behavior:"ambientVortex",dispersion:4.5,color:"#00f0ff",secondaryColor:"#ff007f",connectLines:!1,connectionDistance:.8,connectionOpacity:.3,beatExplosionForce:3.5,trebleTwinkle:1.8,lifetime:4,particleShape:"circle"}:i==="geometry"?s={id:r,name:"3D Geometry",type:"geometry",enabled:!0,opacity:.9,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],shape:"icosahedron",shadingStyle:"faceted",subdivisions:2,wireframeThickness:1.5,noiseDistortion:.6,distortionBand:"bass",rotationSpeed:[.2,.4,.1],pulseIntensity:.7,primaryColor:"#00f0ff",accentColor:"#ff007f",metallicRoughness:.3,glowIntensity:1.5}:s={id:r,name:"Background Layer",type:"background",enabled:!0,opacity:1,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"animatedNebula",primaryColor:"#070814",secondaryColor:"#1a052b",accentColor:"#00f0ff",gradientAngle:45,grainIntensity:.2,vignetteStrength:.5,animationSpeed:1,audioReactiveZoom:.4,mediaBlur:0};const a=[...e().project.layers,s];return t({project:{...e().project,layers:a},selectedLayerId:r,activeInspectorTab:"visual",isProjectDirty:!0}),st.syncLayers(a),r},removeLayer:i=>{var a;const r=e().project.layers.filter(o=>o.id!==i),s=e().selectedLayerId===i?((a=r[0])==null?void 0:a.id)||null:e().selectedLayerId;t({project:{...e().project,layers:r},selectedLayerId:s,isProjectDirty:!0}),st.syncLayers(r)},duplicateLayer:i=>{const r=e().project.layers.find(l=>l.id===i);if(!r)return"";const s=`layer-${r.type}-${Date.now()}`,a={...JSON.parse(JSON.stringify(r)),id:s,name:`${r.name} (Copy)`},o=[...e().project.layers,a];return t({project:{...e().project,layers:o},selectedLayerId:s,activeInspectorTab:"visual",isProjectDirty:!0}),st.syncLayers(o),s},reorderLayers:(i,r)=>{const s=[...e().project.layers],[a]=s.splice(i,1);s.splice(r,0,a),t({project:{...e().project,layers:s},isProjectDirty:!0}),st.syncLayers(s)},updateLayerConfig:(i,r)=>{const s=e().project.layers.map(a=>a.id===i?{...a,...r}:a);t({project:{...e().project,layers:s},isProjectDirty:!0}),st.syncLayers(s)},toggleLayerEnabled:i=>{const r=e().project.layers.map(s=>s.id===i?{...s,enabled:!s.enabled}:s);t({project:{...e().project,layers:r},isProjectDirty:!0}),st.syncLayers(r)},setSelectedLayerId:i=>{t(r=>({selectedLayerId:i,activeInspectorTab:r.activeInspectorTab==="global"?"visual":r.activeInspectorTab}))},setAspectRatio:i=>{st.setAspectRatio(i),t(r=>({project:{...r.project,aspectRatio:i},isProjectDirty:!0}))},setPreviewQuality:i=>{t(r=>({project:{...r.project,previewQuality:i},isProjectDirty:!0}))},updateGlobalReactivity:i=>{t(r=>({project:{...r.project,reactivity:{...r.project.reactivity,...i}},isProjectDirty:!0}))},updatePostProcessing:i=>{st.updatePostProcessing(i),t(r=>({project:{...r.project,postProcessing:{...r.project.postProcessing,...i}},isProjectDirty:!0}))},setProjectName:i=>{t(r=>({project:{...r.project,name:i},isProjectDirty:!0}))},applyPreset:i=>{const r=e().availablePresets.find(a=>a.id===i);if(!r)return;const s=JSON.parse(JSON.stringify(r.layers));st.syncLayers(s),st.updatePostProcessing(r.postProcessing),Xa(r.id),t(a=>{var o;return{activePreset:r,project:{...a.project,name:r.name,reactivity:{...r.reactivity},postProcessing:{...r.postProcessing},layers:s,activePresetId:r.id},selectedLayerId:((o=s[0])==null?void 0:o.id)||null,activeInspectorTab:"visual",isProjectDirty:!1}})},updateActivePreset:()=>{const i=e(),r=i.activePreset;if(!r)return null;const s=JSON.parse(JSON.stringify(i.project.layers)),a=Mg(s,r.name),o={...r,updatedAt:Date.now(),palette:a,reactivity:{...i.project.reactivity},postProcessing:{...i.project.postProcessing},layers:s},l=i.availablePresets.map(c=>c.id===r.id?o:c);return sa(l),Xa(o.id),t({activePreset:o,availablePresets:l,isProjectDirty:!1}),o},saveCurrentAsPreset:(i,r="custom")=>{const s=e(),a=JSON.parse(JSON.stringify(s.project.layers)),o=Mg(a,`${i} Palette`),l={id:`custom-preset-${Date.now()}`,name:i,category:r,description:"Custom user visual preset",isBuiltIn:!1,updatedAt:Date.now(),palette:o,reactivity:{...s.project.reactivity},postProcessing:{...s.project.postProcessing},layers:a},c=[...s.availablePresets,l];return sa(c),Xa(l.id),t(h=>({availablePresets:c,activePreset:l,project:{...h.project,name:l.name,activePresetId:l.id},isProjectDirty:!1})),l},deletePreset:i=>{var o;const r=e(),s=r.availablePresets.filter(l=>l.id!==i),a=s.length>0?s:JSON.parse(JSON.stringify(si));if(sa(a),((o=r.activePreset)==null?void 0:o.id)===i){const l=a[0],c=JSON.parse(JSON.stringify(l.layers));st.syncLayers(c),st.updatePostProcessing(l.postProcessing),Xa(l.id),t(h=>{var f;return{availablePresets:a,activePreset:l,project:{...h.project,name:l.name,reactivity:{...l.reactivity},postProcessing:{...l.postProcessing},layers:c,activePresetId:l.id},selectedLayerId:((f=c[0])==null?void 0:f.id)||null,isProjectDirty:!1}})}else t({availablePresets:a})},deleteUserPreset:i=>{e().deletePreset(i)},resetAllPresetsToDefault:()=>{const i=UR(),r=i[0],s=JSON.parse(JSON.stringify(r.layers));st.syncLayers(s),st.updatePostProcessing(r.postProcessing),Xa(r.id),t(a=>{var o;return{availablePresets:i,activePreset:r,project:{...a.project,name:r.name,reactivity:{...r.reactivity},postProcessing:{...r.postProcessing},layers:s,activePresetId:r.id},selectedLayerId:((o=s[0])==null?void 0:o.id)||null,isProjectDirty:!1}})},randomizeParameters:()=>{const i=AR();st.syncLayers(i.layers),st.updatePostProcessing(i.postProcessing),t(r=>{var s;return{activePreset:i,project:{...r.project,reactivity:{...i.reactivity},postProcessing:{...i.postProcessing},layers:i.layers,activePresetId:i.id},selectedLayerId:((s=i.layers[0])==null?void 0:s.id)||null,activeInspectorTab:"visual",isProjectDirty:!0}})},setActiveInspectorTab:i=>t({activeInspectorTab:i}),setShowGridGuides:i=>t({showGridGuides:i}),setCanvasScaleMode:i=>t({canvasScaleMode:i}),setIsExportModalOpen:i=>t({isExportModalOpen:i}),setExportProgress:i=>t({exportProgress:i}),startExport:async i=>{try{return await _g.startExport(i,s=>{t({exportProgress:s})})}catch(r){throw console.error("Export failed:",r),r}},cancelExport:()=>{_g.cancelExport(),t({exportProgress:null})}}}),FR=[{id:"custom",label:"Custom"},{id:"cyberpunk",label:"Cyberpunk"},{id:"neon",label:"Neon"},{id:"darkTechno",label:"Dark Techno"},{id:"minimal",label:"Minimal"},{id:"liquid",label:"Liquid"},{id:"organic",label:"Organic"},{id:"futuristic",label:"Futuristic"},{id:"abstract",label:"Abstract"}],kR=({isOpen:t,mode:e,onClose:n})=>{const{activePreset:i,saveCurrentAsPreset:r,updateActivePreset:s,deletePreset:a,project:o}=Zt(),[l,c]=Ye.useState("update"),[h,f]=Ye.useState(""),[d,g]=Ye.useState("custom"),[x,v]=Ye.useState(null);if(Ye.useEffect(()=>{t&&(v(null),i?(f(`${i.name} (Copy)`),g(i.category||"custom"),c("update")):(f(`${o.name||"My Visual"} Preset`),c("new")))},[t,i,o.name]),!t)return null;const m=()=>{const _=s();_&&(v(`Successfully updated "${_.name}"!`),setTimeout(()=>{n()},750))},u=_=>{if(_.preventDefault(),!h.trim())return;const M=r(h.trim(),d);v(`Successfully saved new preset "${M.name}"!`),setTimeout(()=>{n()},750)},y=()=>{i&&(i.name,a(i.id),n())};return p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in",children:p.jsxs("div",{className:"bg-studio-900 border border-studio-750 rounded-2xl w-full max-w-md shadow-2xl shadow-black/80 overflow-hidden text-slate-200",children:[p.jsxs("div",{className:"px-5 py-4 border-b border-studio-800 flex items-center justify-between bg-studio-950/60",children:[p.jsxs("div",{className:"flex items-center space-x-2.5",children:[p.jsx("div",{className:`p-2 rounded-lg ${e==="delete"?"bg-rose-500/20 text-rose-400":"bg-cyan-500/20 text-studio-accent"}`,children:e==="delete"?p.jsx(Dc,{className:"w-5 h-5"}):p.jsx(vy,{className:"w-5 h-5"})}),p.jsxs("div",{children:[p.jsx("h2",{className:"text-sm font-bold text-white tracking-wide",children:e==="delete"?"Delete Preset":"Preset Management"}),p.jsx("p",{className:"text-[11px] text-slate-400",children:e==="delete"?"Permanently remove preset from storage":"Update current preset or create a new custom preset"})]})]}),p.jsx("button",{onClick:n,className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-studio-800 transition-colors",children:p.jsx(Py,{className:"w-4 h-4"})})]}),x?p.jsxs("div",{className:"p-8 flex flex-col items-center justify-center text-center space-y-3",children:[p.jsx(Hx,{className:"w-12 h-12 text-emerald-400 animate-bounce"}),p.jsx("p",{className:"text-sm font-semibold text-emerald-300",children:x}),p.jsx("p",{className:"text-xs text-slate-400",children:"Saved permanently in LocalStorage."})]}):e==="delete"?p.jsxs("div",{className:"p-6 space-y-5",children:[p.jsxs("div",{className:"bg-rose-950/30 border border-rose-800/50 rounded-xl p-4 flex items-start space-x-3 text-xs text-rose-200",children:[p.jsx(GS,{className:"w-5 h-5 text-rose-400 shrink-0 mt-0.5"}),p.jsxs("div",{children:[p.jsx("p",{className:"font-semibold text-rose-300",children:"Permanent Action"}),p.jsxs("p",{className:"mt-1 text-slate-300 leading-relaxed",children:["Are you sure you want to delete preset"," ",p.jsxs("span",{className:"font-bold text-white",children:['"',i==null?void 0:i.name,'"']}),"? It will be permanently removed from your studio storage."]})]})]}),p.jsxs("div",{className:"flex items-center justify-end space-x-3 pt-2",children:[p.jsx("button",{type:"button",onClick:n,className:"px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-studio-800 transition-colors",children:"Cancel"}),p.jsxs("button",{type:"button",onClick:y,className:"flex items-center space-x-1.5 bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-lg shadow-rose-600/30 transition-all active:scale-95",children:[p.jsx(Dc,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Delete Preset"})]})]})]}):p.jsxs("div",{className:"p-5 space-y-5",children:[p.jsxs("div",{className:"grid grid-cols-2 p-1 bg-studio-950 rounded-xl border border-studio-800",children:[p.jsxs("button",{type:"button",onClick:()=>c("update"),className:`flex items-center justify-center space-x-2 py-2 rounded-lg text-xs font-bold transition-all ${l==="update"?"bg-studio-800 text-white shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[p.jsx(Nc,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Update Active"})]}),p.jsxs("button",{type:"button",onClick:()=>c("new"),className:`flex items-center justify-center space-x-2 py-2 rounded-lg text-xs font-bold transition-all ${l==="new"?"bg-studio-800 text-white shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[p.jsx(i0,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Save as New"})]})]}),l==="update"?p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"bg-studio-950/80 rounded-xl p-4 border border-studio-800/80 space-y-2.5",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:"text-xs text-slate-400 font-medium",children:"Target Preset:"}),p.jsx("span",{className:"text-xs font-bold text-studio-accent px-2 py-0.5 bg-cyan-950/50 border border-cyan-800/50 rounded-full",children:(i==null?void 0:i.name)||"Current"})]}),p.jsxs("div",{className:"flex items-center space-x-4 text-[11px] text-slate-400 pt-1 border-t border-studio-850",children:[p.jsxs("span",{className:"flex items-center gap-1",children:[p.jsx(cp,{className:"w-3 h-3 text-slate-400"}),o.layers.length," Layers"]}),p.jsxs("span",{className:"flex items-center gap-1",children:[p.jsx(ly,{className:"w-3 h-3 text-slate-400"}),i!=null&&i.isBuiltIn?"Standard Template":"Custom Preset"]})]}),p.jsxs("p",{className:"text-[11px] text-slate-400 leading-relaxed pt-1",children:["This will overwrite ",p.jsx("span",{className:"text-slate-200 font-medium",children:i==null?void 0:i.name})," with your active layer parameters, colors, audio reactivity curves, and bloom settings permanently."]})]}),p.jsxs("div",{className:"flex items-center justify-end space-x-2.5 pt-2",children:[p.jsx("button",{type:"button",onClick:n,className:"px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-studio-800 transition-colors",children:"Cancel"}),p.jsxs("button",{type:"button",onClick:m,className:"flex items-center space-x-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-md shadow-cyan-500/20 transition-all active:scale-95",children:[p.jsx(Nc,{className:"w-3.5 h-3.5 stroke-[2.5]"}),p.jsx("span",{children:"Update Preset"})]})]})]}):p.jsxs("form",{onSubmit:u,className:"space-y-4",children:[p.jsxs("div",{className:"space-y-1.5",children:[p.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Preset Title"}),p.jsx("input",{type:"text",required:!0,value:h,onChange:_=>f(_.target.value),placeholder:"e.g. Neon Cyber Odyssey",className:"w-full bg-studio-950 border border-studio-750 focus:border-studio-accent rounded-lg px-3 py-2 text-xs font-medium text-white outline-none transition-colors"})]}),p.jsxs("div",{className:"space-y-1.5",children:[p.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Category Archetype"}),p.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:FR.map(_=>p.jsx("button",{type:"button",onClick:()=>g(_.id),className:`py-1.5 px-2 rounded-lg text-[11px] font-semibold border transition-all truncate ${d===_.id?"bg-studio-accent text-slate-950 border-studio-accent shadow-sm":"bg-studio-950 text-slate-400 border-studio-800 hover:border-studio-700 hover:text-slate-200"}`,children:_.label},_.id))})]}),p.jsxs("div",{className:"flex items-center justify-end space-x-2.5 pt-2",children:[p.jsx("button",{type:"button",onClick:n,className:"px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-studio-800 transition-colors",children:"Cancel"}),p.jsxs("button",{type:"submit",disabled:!h.trim(),className:"flex items-center space-x-1.5 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-md shadow-pink-500/20 transition-all disabled:opacity-50 active:scale-95",children:[p.jsx(i0,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Save New Preset"})]})]})]})]})]})})},OR=()=>{const{project:t,availablePresets:e,activePreset:n,applyPreset:i,randomizeParameters:r,setAspectRatio:s,setProjectName:a,setIsExportModalOpen:o,audioMetadata:l}=Zt(),[c,h]=Ye.useState(!1),[f,d]=Ye.useState("save"),g=Ye.useRef(null),x=M=>{i(M.target.value)},v=M=>{s(M)},m=()=>{d("save"),h(!0)},u=()=>{d("delete"),h(!0)},y=()=>{const M="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t,null,2)),A=document.createElement("a");A.href=M,A.download=`${t.name.replace(/\s+/g,"_")}_project.json`,document.body.appendChild(A),A.click(),document.body.removeChild(A)},_=M=>{var C;const A=(C=M.target.files)==null?void 0:C[0];if(!A)return;const T=new FileReader;T.onload=R=>{var w,S;try{const N=JSON.parse((w=R.target)==null?void 0:w.result);N&&N.layers&&(Zt.setState({project:N,selectedLayerId:((S=N.layers[0])==null?void 0:S.id)||null}),st.syncLayers(N.layers),st.updatePostProcessing(N.postProcessing||{}))}catch{alert("Invalid project JSON file")}},T.readAsText(A)};return p.jsxs("header",{className:"h-14 bg-studio-900 border-b border-studio-800 px-4 flex items-center justify-between select-none z-30",children:[p.jsx("input",{ref:g,type:"file",accept:".json,application/json",onChange:_,className:"hidden"}),p.jsxs("div",{className:"flex items-center space-x-3.5",children:[p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-studio-accent to-pink-500 flex items-center justify-center shadow-lg shadow-cyan-500/20",children:p.jsx(cp,{className:"w-4 h-4 text-black font-bold"})}),p.jsx("div",{children:p.jsxs("h1",{className:"text-sm font-bold tracking-wider text-slate-100 flex items-center gap-1.5",children:[p.jsx("span",{children:"VISUAL"}),p.jsx("span",{className:"text-studio-accent",children:"STUDIO"})]})})]}),p.jsx("div",{className:"h-5 w-px bg-studio-750"}),p.jsx("input",{type:"text",value:t.name,onChange:M=>a(M.target.value),className:"bg-transparent hover:bg-studio-850 focus:bg-studio-850 px-2.5 py-1 rounded text-xs font-medium text-slate-300 hover:text-slate-100 focus:text-white border border-transparent focus:border-studio-700 transition-all outline-none w-44",placeholder:"Project Title"}),p.jsxs("div",{className:"flex items-center space-x-1 border-l border-studio-800 pl-2",children:[p.jsx("button",{onClick:()=>{var M;return(M=g.current)==null?void 0:M.click()},title:"Import Project from JSON file",className:"p-1.5 rounded hover:bg-studio-800 text-slate-400 hover:text-slate-200 transition-colors",children:p.jsx(US,{className:"w-3.5 h-3.5"})}),p.jsx("button",{onClick:y,title:"Export Project to JSON file",className:"p-1.5 rounded hover:bg-studio-800 text-slate-400 hover:text-slate-200 transition-colors",children:p.jsx(IS,{className:"w-3.5 h-3.5"})})]}),l&&p.jsxs("div",{className:"hidden lg:flex items-center space-x-1.5 text-xs text-studio-accent bg-studio-950/80 px-2.5 py-1 rounded-full border border-studio-800",children:[p.jsx(DS,{className:"w-3 h-3 animate-pulse"}),p.jsx("span",{className:"truncate max-w-[160px]",children:l.fileName})]})]}),p.jsxs("div",{className:"flex items-center space-x-2.5",children:[p.jsxs("div",{className:"flex items-center space-x-1.5 bg-studio-950 px-2.5 py-1 rounded-lg border border-studio-800",children:[p.jsx(yy,{className:"w-3.5 h-3.5 text-slate-400"}),p.jsx("span",{className:"text-xs text-slate-400 font-medium",children:"Template:"}),p.jsx("select",{value:(n==null?void 0:n.id)||"",onChange:x,"aria-label":"Preset Selection",className:"bg-transparent text-xs font-bold text-studio-accent outline-none cursor-pointer pr-1 transition-colors max-w-[150px] truncate",children:e.map(M=>p.jsxs("option",{value:M.id,className:"bg-studio-900 text-slate-200 font-normal",children:[M.name," ",M.isBuiltIn?"":"(Custom)"]},M.id))}),p.jsx("button",{onClick:m,title:`Save or update preset "${(n==null?void 0:n.name)||""}"`,className:"p-1 hover:bg-studio-800 text-slate-400 hover:text-studio-accent rounded transition-colors ml-0.5",children:p.jsx(vy,{className:"w-3.5 h-3.5"})}),p.jsx("button",{onClick:u,disabled:e.length<=1,title:e.length<=1?"Cannot delete the only available preset":`Delete preset "${(n==null?void 0:n.name)||""}"`,className:"p-1 hover:bg-rose-950/40 text-slate-400 hover:text-rose-400 disabled:opacity-25 disabled:cursor-not-allowed rounded transition-colors",children:p.jsx(Dc,{className:"w-3.5 h-3.5"})})]}),p.jsxs("button",{onClick:r,title:"Generate full cohesive random preset",className:"flex items-center space-x-1.5 bg-gradient-to-r from-purple-900/60 to-pink-900/60 hover:from-purple-800/80 hover:to-pink-800/80 text-pink-300 hover:text-pink-100 border border-pink-700/50 hover:border-pink-500 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-all active:scale-95",children:[p.jsx(Si,{className:"w-3.5 h-3.5 text-pink-400 animate-spin-slow"}),p.jsx("span",{children:"Randomize All"})]})]}),p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsxs("div",{className:"flex items-center bg-studio-950 p-0.5 rounded-lg border border-studio-800 text-xs",children:[p.jsx("button",{onClick:()=>v("16:9"),className:`px-2.5 py-1 rounded-md font-medium transition-all ${t.aspectRatio==="16:9"?"bg-studio-700 text-white shadow-sm":"text-slate-400 hover:text-slate-200"}`,title:"16:9 Landscape (YouTube)",children:"16:9"}),p.jsx("button",{onClick:()=>v("9:16"),className:`px-2.5 py-1 rounded-md font-medium transition-all ${t.aspectRatio==="9:16"?"bg-studio-700 text-white shadow-sm":"text-slate-400 hover:text-slate-200"}`,title:"9:16 Vertical (Reels / TikTok / Shorts)",children:"9:16"}),p.jsx("button",{onClick:()=>v("1:1"),className:`px-2.5 py-1 rounded-md font-medium transition-all ${t.aspectRatio==="1:1"?"bg-studio-700 text-white shadow-sm":"text-slate-400 hover:text-slate-200"}`,title:"1:1 Square (Instagram Post)",children:"1:1"})]}),p.jsxs("button",{onClick:()=>o(!0),className:"flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-95",children:[p.jsx(Yx,{className:"w-3.5 h-3.5 stroke-[2.5]"}),p.jsx("span",{children:"Export Video"})]})]}),p.jsx(kR,{isOpen:c,mode:f,onClose:()=>h(!1)})]})},BR=()=>{const{project:t,selectedLayerId:e,setSelectedLayerId:n,addLayer:i,removeLayer:r,duplicateLayer:s,reorderLayers:a,toggleLayerEnabled:o}=Zt(),[l,c]=Ye.useState(!1),h=d=>{switch(d){case"waveform":return p.jsx(fh,{className:"w-3.5 h-3.5 text-cyan-400"});case"spectrum":return p.jsx(mh,{className:"w-3.5 h-3.5 text-purple-400"});case"particles":return p.jsx(Si,{className:"w-3.5 h-3.5 text-pink-400"});case"geometry":return p.jsx(ph,{className:"w-3.5 h-3.5 text-amber-400"});case"background":return p.jsx(gh,{className:"w-3.5 h-3.5 text-emerald-400"})}},f=d=>{i(d),c(!1)};return p.jsxs("aside",{className:"w-64 bg-studio-900 border-r border-studio-800 flex flex-col h-full select-none z-20",children:[p.jsxs("div",{className:"h-11 px-3.5 border-b border-studio-800 flex items-center justify-between",children:[p.jsxs("div",{className:"flex items-center space-x-2 text-xs font-bold text-slate-200 tracking-wider",children:[p.jsx(cp,{className:"w-4 h-4 text-studio-accent"}),p.jsx("span",{children:"VISUAL LAYERS"}),p.jsx("span",{className:"text-[10px] bg-studio-800 text-slate-400 px-1.5 py-0.2 rounded-full",children:t.layers.length})]}),p.jsxs("div",{className:"relative",children:[p.jsxs("button",{onClick:()=>c(!l),className:"flex items-center space-x-1 bg-studio-800 hover:bg-studio-700 text-slate-200 hover:text-white px-2 py-1 rounded text-xs font-semibold transition-colors",children:[p.jsx(zS,{className:"w-3.5 h-3.5 text-studio-accent"}),p.jsx("span",{children:"Add"})]}),l&&p.jsxs("div",{className:"absolute right-0 mt-1.5 w-48 bg-studio-850 border border-studio-700 rounded-lg shadow-xl py-1 z-50",children:[p.jsxs("button",{onClick:()=>f("waveform"),className:"w-full px-3 py-1.5 text-left text-xs text-slate-200 hover:bg-studio-750 flex items-center space-x-2",children:[p.jsx(fh,{className:"w-3.5 h-3.5 text-cyan-400"}),p.jsx("span",{children:"Waveform Visualizer"})]}),p.jsxs("button",{onClick:()=>f("spectrum"),className:"w-full px-3 py-1.5 text-left text-xs text-slate-200 hover:bg-studio-750 flex items-center space-x-2",children:[p.jsx(mh,{className:"w-3.5 h-3.5 text-purple-400"}),p.jsx("span",{children:"Frequency Spectrum"})]}),p.jsxs("button",{onClick:()=>f("particles"),className:"w-full px-3 py-1.5 text-left text-xs text-slate-200 hover:bg-studio-750 flex items-center space-x-2",children:[p.jsx(Si,{className:"w-3.5 h-3.5 text-pink-400"}),p.jsx("span",{children:"Particle System"})]}),p.jsxs("button",{onClick:()=>f("geometry"),className:"w-full px-3 py-1.5 text-left text-xs text-slate-200 hover:bg-studio-750 flex items-center space-x-2",children:[p.jsx(ph,{className:"w-3.5 h-3.5 text-amber-400"}),p.jsx("span",{children:"3D Geometry"})]}),p.jsxs("button",{onClick:()=>f("background"),className:"w-full px-3 py-1.5 text-left text-xs text-slate-200 hover:bg-studio-750 flex items-center space-x-2",children:[p.jsx(gh,{className:"w-3.5 h-3.5 text-emerald-400"}),p.jsx("span",{children:"Background Effect"})]})]})]})]}),p.jsx("div",{className:"flex-1 overflow-y-auto p-2 space-y-1.5",children:t.layers.length===0?p.jsx("div",{className:"text-center py-10 px-4 text-slate-500 text-xs",children:'No layers active. Click "+ Add" above to add a visual module.'}):t.layers.map((d,g)=>({layer:d,index:g})).reverse().map(({layer:d,index:g})=>{const x=e===d.id;return p.jsxs("div",{onClick:()=>n(d.id),className:`group relative rounded-lg border px-2.5 py-2 flex items-center justify-between cursor-pointer transition-all ${x?"bg-studio-800/90 border-studio-accent/70 shadow-sm shadow-studio-accent/10":"bg-studio-850/60 hover:bg-studio-850 border-studio-800/80 hover:border-studio-750"}`,children:[p.jsxs("div",{className:"flex items-center space-x-2.5 min-w-0 flex-1",children:[p.jsx("div",{className:"p-1 rounded bg-studio-950/60 border border-studio-800",children:h(d.type)}),p.jsxs("div",{className:"truncate",children:[p.jsx("div",{className:"text-xs font-semibold text-slate-200 truncate leading-tight",children:d.name}),p.jsx("div",{className:"text-[10px] text-slate-400 uppercase tracking-wider font-mono",children:d.type})]})]}),p.jsxs("div",{className:"flex items-center space-x-1 text-slate-400",children:[p.jsxs("div",{className:"flex flex-col",children:[p.jsx("button",{disabled:g===t.layers.length-1,onClick:v=>{v.stopPropagation(),a(g,g+1)},title:"Move layer up",className:"p-0.5 hover:text-white disabled:opacity-20 transition-opacity",children:p.jsx(RS,{className:"w-3 h-3"})}),p.jsx("button",{disabled:g===0,onClick:v=>{v.stopPropagation(),a(g,g-1)},title:"Move layer down",className:"p-0.5 hover:text-white disabled:opacity-20 transition-opacity",children:p.jsx(AS,{className:"w-3 h-3"})})]}),p.jsx("button",{onClick:v=>{v.stopPropagation(),o(d.id)},title:d.enabled?"Hide layer":"Show layer",className:`p-1 rounded hover:bg-studio-750 transition-colors ${d.enabled?"text-slate-300 hover:text-white":"text-slate-600"}`,children:d.enabled?p.jsx(Jx,{className:"w-3.5 h-3.5"}):p.jsx(LS,{className:"w-3.5 h-3.5"})}),p.jsx("button",{onClick:v=>{v.stopPropagation(),s(d.id)},title:"Duplicate layer",className:"p-1 rounded hover:bg-studio-750 hover:text-white transition-colors opacity-0 group-hover:opacity-100",children:p.jsx(NS,{className:"w-3 h-3"})}),p.jsx("button",{onClick:v=>{v.stopPropagation(),r(d.id)},title:"Delete layer",className:"p-1 rounded hover:bg-red-950/60 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100",children:p.jsx(Dc,{className:"w-3 h-3"})})]})]},d.id)})})]})},zR=()=>{var c,h,f,d,g,x;const{project:t,selectedLayerId:e,activeInspectorTab:n,setActiveInspectorTab:i,updateLayerConfig:r,updateGlobalReactivity:s,updatePostProcessing:a}=Zt(),o=t.layers.find(v=>v.id===e),l=v=>{switch(v){case"waveform":return p.jsx(fh,{className:"w-4 h-4 text-cyan-400"});case"spectrum":return p.jsx(mh,{className:"w-4 h-4 text-purple-400"});case"particles":return p.jsx(Si,{className:"w-4 h-4 text-pink-400"});case"geometry":return p.jsx(ph,{className:"w-4 h-4 text-amber-400"});case"background":return p.jsx(gh,{className:"w-4 h-4 text-emerald-400"})}};return!o&&n!=="global"?p.jsxs("aside",{className:"w-80 bg-studio-900 border-l border-studio-800 flex flex-col h-full p-6 text-center select-none text-slate-500 text-xs justify-center items-center",children:[p.jsx(yy,{className:"w-8 h-8 mb-2 opacity-30 text-studio-accent"}),p.jsx("p",{className:"font-semibold text-slate-400",children:"No Layer Selected"}),p.jsx("p",{className:"mt-1 text-[11px] text-slate-600",children:"Select a layer from the left stack to edit its properties."}),p.jsx("button",{onClick:()=>i("global"),className:"mt-4 px-3 py-1.5 rounded-lg bg-studio-800 text-slate-300 hover:text-white text-xs font-semibold border border-studio-700",children:"Open Global Optics & Bloom"})]}):p.jsxs("aside",{className:"w-80 bg-studio-900 border-l border-studio-800 flex flex-col h-full select-none z-20",children:[o&&p.jsxs("div",{className:"px-3.5 py-2.5 bg-studio-950/70 border-b border-studio-800 flex items-center justify-between",children:[p.jsxs("div",{className:"flex items-center space-x-2 min-w-0",children:[p.jsx("div",{className:"p-1 rounded bg-studio-900 border border-studio-750",children:l(o.type)}),p.jsxs("div",{className:"truncate",children:[p.jsx("span",{className:"text-xs font-bold text-white block truncate leading-tight",children:o.name}),p.jsxs("span",{className:"text-[10px] text-slate-400 uppercase tracking-wider font-mono",children:[o.type," layer"]})]})]}),p.jsxs("label",{className:"flex items-center space-x-1.5 text-[11px] text-slate-400 cursor-pointer",children:[p.jsx("input",{type:"checkbox",checked:o.enabled,onChange:v=>r(o.id,{enabled:v.target.checked}),className:"rounded border-studio-700 bg-studio-950 text-studio-accent"}),p.jsx("span",{children:"Active"})]})]}),p.jsx("div",{className:"h-10 border-b border-studio-800 px-2 flex items-center justify-between bg-studio-900",children:p.jsxs("div",{className:"flex space-x-1",children:[p.jsxs("button",{onClick:()=>i("visual"),className:`px-2.5 py-1 rounded text-xs font-semibold flex items-center space-x-1.5 transition-all ${n==="visual"?"bg-studio-800 text-studio-accent shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[p.jsx(Jx,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Visual"})]}),p.jsxs("button",{onClick:()=>i("appearance"),className:`px-2.5 py-1 rounded text-xs font-semibold flex items-center space-x-1.5 transition-all ${n==="appearance"?"bg-studio-800 text-studio-accent shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[p.jsx(ly,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Style"})]}),p.jsxs("button",{onClick:()=>i("reactivity"),className:`px-2.5 py-1 rounded text-xs font-semibold flex items-center space-x-1.5 transition-all ${n==="reactivity"?"bg-studio-800 text-studio-accent shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[p.jsx(Dy,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Audio"})]}),p.jsxs("button",{onClick:()=>i("global"),className:`px-2.5 py-1 rounded text-xs font-semibold flex items-center space-x-1.5 transition-all ${n==="global"?"bg-studio-800 text-studio-accent shadow-sm":"text-slate-400 hover:text-slate-200"}`,title:"Global Post-Processing & Optics",children:[p.jsx(HS,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Global"})]})]})}),p.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 text-xs text-slate-300",children:[n==="visual"&&o&&p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-studio-800 pb-2",children:[p.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"Visual Geometry"}),p.jsxs("button",{onClick:()=>{const v=RR(o);r(o.id,v)},className:"flex items-center space-x-1.5 px-2 py-1 rounded bg-studio-800 hover:bg-studio-750 text-studio-accent border border-studio-700 font-semibold text-[11px] transition-all active:scale-95 shadow-sm",title:"Randomize shape and visual properties for this layer",children:[p.jsx(Si,{className:"w-3 h-3 text-studio-accent"}),p.jsx("span",{children:"Randomize Visual"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1",children:"Layer Name"}),p.jsx("input",{type:"text",value:o.name,onChange:v=>r(o.id,{name:v.target.value}),className:"w-full bg-studio-950 border border-studio-800 focus:border-studio-accent rounded-lg px-3 py-1.5 text-xs text-slate-100 outline-none"})]}),o.type==="waveform"&&p.jsx(jR,{config:o,onChange:v=>r(o.id,v)}),o.type==="spectrum"&&p.jsx(VR,{config:o,onChange:v=>r(o.id,v)}),o.type==="particles"&&p.jsx(HR,{config:o,onChange:v=>r(o.id,v)}),o.type==="geometry"&&p.jsx(GR,{config:o,onChange:v=>r(o.id,v)}),o.type==="background"&&p.jsx(WR,{config:o,onChange:v=>r(o.id,v)})]}),n==="appearance"&&o&&p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-studio-800 pb-2",children:[p.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"Colors & Material"}),p.jsxs("button",{onClick:()=>{const v=PR(o);r(o.id,v)},className:"flex items-center space-x-1.5 px-2 py-1 rounded bg-studio-800 hover:bg-studio-750 text-pink-400 border border-studio-700 font-semibold text-[11px] transition-all active:scale-95 shadow-sm",title:"Randomize colors and styling for this layer",children:[p.jsx(Si,{className:"w-3 h-3 text-pink-400"}),p.jsx("span",{children:"Randomize Style"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-[11px] text-slate-400 block mb-1.5 font-medium",children:"Quick Color Palettes"}),p.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{name:"Neon Cyber",p:"#00f0ff",s:"#ff007f",a:"#a855f7"},{name:"Cyber Acid",p:"#fcee0a",s:"#ff007f",a:"#00f0ff"},{name:"Amber Rave",p:"#f59e0b",s:"#ef4444",a:"#94a3b8"},{name:"Deep Violet",p:"#8b5cf6",s:"#06b6d4",a:"#ec4899"},{name:"Emerald",p:"#10b981",s:"#06b6d4",a:"#3b82f6"},{name:"Monochrome",p:"#ffffff",s:"#64748b",a:"#94a3b8"}].map(v=>p.jsxs("button",{onClick:()=>{const m={};"color"in o&&(m.color=v.p),"primaryColor"in o&&(m.primaryColor=v.p),"secondaryColor"in o&&(m.secondaryColor=v.s),"accentColor"in o&&(m.accentColor=v.a),r(o.id,m)},className:"flex items-center space-x-1.5 px-2 py-1.5 rounded-lg bg-studio-950 hover:bg-studio-800 border border-studio-800 hover:border-studio-700 text-left transition-all",children:[p.jsxs("div",{className:"flex -space-x-1",children:[p.jsx("div",{className:"w-2.5 h-2.5 rounded-full border border-black",style:{backgroundColor:v.p}}),p.jsx("div",{className:"w-2.5 h-2.5 rounded-full border border-black",style:{backgroundColor:v.s}})]}),p.jsx("span",{className:"text-[10px] text-slate-300 truncate",children:v.name})]},v.name))})]}),("primaryColor"in o||"color"in o)&&p.jsxs("div",{children:[p.jsx("label",{className:"text-xs mb-1 block",children:"Primary Color"}),p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx("input",{type:"color",value:o.primaryColor||o.color||"#00f0ff",onChange:v=>{"color"in o?r(o.id,{color:v.target.value}):r(o.id,{primaryColor:v.target.value})},className:"w-8 h-8 rounded border border-studio-700 bg-transparent cursor-pointer"}),p.jsx("input",{type:"text",value:o.primaryColor||o.color||"#00f0ff",onChange:v=>{"color"in o?r(o.id,{color:v.target.value}):r(o.id,{primaryColor:v.target.value})},className:"flex-1 bg-studio-950 border border-studio-800 rounded px-2.5 py-1 text-xs font-mono"})]})]}),"secondaryColor"in o&&p.jsxs("div",{children:[p.jsx("label",{className:"text-xs mb-1 block",children:"Secondary Color"}),p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx("input",{type:"color",value:o.secondaryColor||"#ff007f",onChange:v=>r(o.id,{secondaryColor:v.target.value}),className:"w-8 h-8 rounded border border-studio-700 bg-transparent cursor-pointer"}),p.jsx("input",{type:"text",value:o.secondaryColor||"#ff007f",onChange:v=>r(o.id,{secondaryColor:v.target.value}),className:"flex-1 bg-studio-950 border border-studio-800 rounded px-2.5 py-1 text-xs font-mono"})]})]}),"accentColor"in o&&p.jsxs("div",{children:[p.jsx("label",{className:"text-xs mb-1 block",children:"Accent Rim Color"}),p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx("input",{type:"color",value:o.accentColor||"#a855f7",onChange:v=>r(o.id,{accentColor:v.target.value}),className:"w-8 h-8 rounded border border-studio-700 bg-transparent cursor-pointer"}),p.jsx("input",{type:"text",value:o.accentColor||"#a855f7",onChange:v=>r(o.id,{accentColor:v.target.value}),className:"flex-1 bg-studio-950 border border-studio-800 rounded px-2.5 py-1 text-xs font-mono"})]})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Layer Opacity"}),p.jsxs("span",{className:"font-mono text-studio-accent",children:[((o.opacity??1)*100).toFixed(0),"%"]})]}),p.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.02",value:o.opacity??1,onChange:v=>r(o.id,{opacity:parseFloat(v.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs mb-1 block",children:"Layer Blend Mode"}),p.jsxs("select",{value:o.blendMode||"normal",onChange:v=>r(o.id,{blendMode:v.target.value}),className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none",children:[p.jsx("option",{value:"normal",children:"Normal"}),p.jsx("option",{value:"additive",children:"Additive (Glowing)"}),p.jsx("option",{value:"screen",children:"Screen"})]})]}),p.jsxs("div",{className:"pt-3 border-t border-studio-800",children:[p.jsxs("div",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5",children:[p.jsx(kS,{className:"w-3.5 h-3.5 text-studio-accent"}),p.jsx("span",{children:"Spatial Transform"})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-[11px] mb-1",children:[p.jsx("span",{children:"Pos X"}),p.jsx("span",{className:"font-mono text-studio-accent",children:((c=o.transform)==null?void 0:c.position[0].toFixed(1))||"0.0"})]}),p.jsx("input",{type:"range",min:"-6.0",max:"6.0",step:"0.1",value:((h=o.transform)==null?void 0:h.position[0])||0,onChange:v=>{var u,y;const m=[parseFloat(v.target.value),((u=o.transform)==null?void 0:u.position[1])||0,((y=o.transform)==null?void 0:y.position[2])||0];r(o.id,{transform:{...o.transform,position:m}})},className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-[11px] mb-1",children:[p.jsx("span",{children:"Pos Y"}),p.jsx("span",{className:"font-mono text-studio-accent",children:((f=o.transform)==null?void 0:f.position[1].toFixed(1))||"0.0"})]}),p.jsx("input",{type:"range",min:"-6.0",max:"6.0",step:"0.1",value:((d=o.transform)==null?void 0:d.position[1])||0,onChange:v=>{var u,y;const m=[((u=o.transform)==null?void 0:u.position[0])||0,parseFloat(v.target.value),((y=o.transform)==null?void 0:y.position[2])||0];r(o.id,{transform:{...o.transform,position:m}})},className:"w-full"})]})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-[11px] mb-1",children:[p.jsx("span",{children:"Scale"}),p.jsxs("span",{className:"font-mono text-studio-accent",children:[((g=o.transform)==null?void 0:g.scale[0].toFixed(2))||"1.00","x"]})]}),p.jsx("input",{type:"range",min:"0.2",max:"3.0",step:"0.05",value:((x=o.transform)==null?void 0:x.scale[0])||1,onChange:v=>{const m=parseFloat(v.target.value),u=[m,m,m];r(o.id,{transform:{...o.transform,scale:u}})},className:"w-full"})]})]})]}),n==="reactivity"&&p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-studio-800 pb-2",children:[p.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"Audio Sensitivities"}),p.jsxs("button",{onClick:()=>{const v=NR();s(v)},className:"flex items-center space-x-1.5 px-2 py-1 rounded bg-studio-800 hover:bg-studio-750 text-purple-400 border border-studio-700 font-semibold text-[11px] transition-all active:scale-95 shadow-sm",title:"Randomize audio sensitivities",children:[p.jsx(Si,{className:"w-3 h-3 text-purple-400"}),p.jsx("span",{children:"Randomize Audio"})]})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Master Sensitivity"}),p.jsxs("span",{className:"font-mono text-studio-accent",children:[t.reactivity.masterSensitivity.toFixed(2),"x"]})]}),p.jsx("input",{type:"range",min:"0.1",max:"3.0",step:"0.05",value:t.reactivity.masterSensitivity,onChange:v=>s({masterSensitivity:parseFloat(v.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Bass / Kick Reactivity"}),p.jsxs("span",{className:"font-mono text-studio-accent",children:[t.reactivity.bassSensitivity.toFixed(2),"x"]})]}),p.jsx("input",{type:"range",min:"0.2",max:"3.0",step:"0.05",value:t.reactivity.bassSensitivity,onChange:v=>s({bassSensitivity:parseFloat(v.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Mid-Range Reactivity"}),p.jsxs("span",{className:"font-mono text-studio-accent",children:[t.reactivity.midSensitivity.toFixed(2),"x"]})]}),p.jsx("input",{type:"range",min:"0.2",max:"3.0",step:"0.05",value:t.reactivity.midSensitivity,onChange:v=>s({midSensitivity:parseFloat(v.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Treble / Highs Reactivity"}),p.jsxs("span",{className:"font-mono text-studio-accent",children:[t.reactivity.trebleSensitivity.toFixed(2),"x"]})]}),p.jsx("input",{type:"range",min:"0.2",max:"3.0",step:"0.05",value:t.reactivity.trebleSensitivity,onChange:v=>s({trebleSensitivity:parseFloat(v.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Temporal Smoothing"}),p.jsxs("span",{className:"font-mono text-studio-accent",children:[(t.reactivity.globalSmoothing*100).toFixed(0),"%"]})]}),p.jsx("input",{type:"range",min:"0.1",max:"0.95",step:"0.01",value:t.reactivity.globalSmoothing,onChange:v=>s({globalSmoothing:parseFloat(v.target.value)}),className:"w-full"})]})]}),n==="global"&&p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-studio-800 pb-2",children:[p.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"Post-Processing & Bloom Glow"}),p.jsxs("button",{onClick:()=>{const v=DR();a(v)},className:"flex items-center space-x-1.5 px-2 py-1 rounded bg-studio-800 hover:bg-studio-750 text-amber-400 border border-studio-700 font-semibold text-[11px] transition-all active:scale-95 shadow-sm",title:"Randomize bloom, grain, and optics",children:[p.jsx(Si,{className:"w-3 h-3 text-amber-400"}),p.jsx("span",{children:"Randomize Optics"})]})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Bloom Glow Intensity"}),p.jsx("span",{className:"font-mono text-studio-accent",children:t.postProcessing.bloomIntensity.toFixed(1)})]}),p.jsx("input",{type:"range",min:"0.0",max:"4.0",step:"0.1",value:t.postProcessing.bloomIntensity,onChange:v=>a({bloomIntensity:parseFloat(v.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Bloom Diffusion Radius"}),p.jsx("span",{className:"font-mono text-studio-accent",children:t.postProcessing.bloomRadius.toFixed(2)})]}),p.jsx("input",{type:"range",min:"0.1",max:"1.5",step:"0.05",value:t.postProcessing.bloomRadius,onChange:v=>a({bloomRadius:parseFloat(v.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Film Grain Noise"}),p.jsxs("span",{className:"font-mono text-studio-accent",children:[(t.postProcessing.grainIntensity*100).toFixed(0),"%"]})]}),p.jsx("input",{type:"range",min:"0.0",max:"0.8",step:"0.02",value:t.postProcessing.grainIntensity,onChange:v=>a({grainIntensity:parseFloat(v.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Vignette Border Darkening"}),p.jsxs("span",{className:"font-mono text-studio-accent",children:[(t.postProcessing.vignetteIntensity*100).toFixed(0),"%"]})]}),p.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.05",value:t.postProcessing.vignetteIntensity,onChange:v=>a({vignetteIntensity:parseFloat(v.target.value)}),className:"w-full"})]})]})]})]})},jR=({config:t,onChange:e})=>p.jsxs("div",{className:"space-y-3 pt-2",children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-xs mb-1 block",children:"Geometry Layout"}),p.jsxs("select",{value:t.mode,onChange:n=>e({mode:n.target.value}),className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none",children:[p.jsx("option",{value:"circular",children:"Circular Oscilloscope"}),p.jsx("option",{value:"horizontal",children:"Horizontal Wave"}),p.jsx("option",{value:"ribbon3d",children:"3D Ribbon Wave"})]})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Amplitude"}),p.jsx("span",{className:"font-mono text-studio-accent",children:(t.amplitude||1.5).toFixed(1)})]}),p.jsx("input",{type:"range",min:"0.2",max:"3.5",step:"0.1",value:t.amplitude||1.5,onChange:n=>e({amplitude:parseFloat(n.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Line Thickness"}),p.jsxs("span",{className:"font-mono text-studio-accent",children:[(t.thickness||2).toFixed(1),"px"]})]}),p.jsx("input",{type:"range",min:"1.0",max:"6.0",step:"0.5",value:t.thickness||2,onChange:n=>e({thickness:parseFloat(n.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Sample Count"}),p.jsx("span",{className:"font-mono text-studio-accent",children:t.sampleCount||256})]}),p.jsx("input",{type:"range",min:"64",max:"512",step:"64",value:t.sampleCount||256,onChange:n=>e({sampleCount:parseInt(n.target.value)}),className:"w-full"})]}),t.mode==="circular"&&p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Circle Radius"}),p.jsx("span",{className:"font-mono text-studio-accent",children:(t.radius||1.8).toFixed(1)})]}),p.jsx("input",{type:"range",min:"0.8",max:"3.5",step:"0.1",value:t.radius||1.8,onChange:n=>e({radius:parseFloat(n.target.value)}),className:"w-full"})]}),t.mode==="ribbon3d"&&p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"3D Ribbon Depth"}),p.jsx("span",{className:"font-mono text-studio-accent",children:(t.depth3D||.8).toFixed(1)})]}),p.jsx("input",{type:"range",min:"0.2",max:"2.5",step:"0.1",value:t.depth3D||.8,onChange:n=>e({depth3D:parseFloat(n.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Displacement Intensity"}),p.jsx("span",{className:"font-mono text-studio-accent",children:(t.displacementIntensity||1).toFixed(1)})]}),p.jsx("input",{type:"range",min:"0.0",max:"3.0",step:"0.1",value:t.displacementIntensity||1,onChange:n=>e({displacementIntensity:parseFloat(n.target.value)}),className:"w-full"})]})]}),VR=({config:t,onChange:e})=>p.jsxs("div",{className:"space-y-3 pt-2",children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-xs mb-1 block",children:"Display Mode"}),p.jsxs("select",{value:t.mode,onChange:n=>e({mode:n.target.value}),className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none",children:[p.jsx("option",{value:"verticalBars",children:"Vertical Equalizer Bars"}),p.jsx("option",{value:"circularRadial",children:"Circular Radial Spikes"}),p.jsx("option",{value:"radialRings",children:"Concentric Frequency Rings"})]})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Bar Count"}),p.jsx("span",{className:"font-mono text-studio-accent",children:t.barCount})]}),p.jsx("input",{type:"range",min:"16",max:"96",step:"8",value:t.barCount,onChange:n=>e({barCount:parseInt(n.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Bar Width Ratio"}),p.jsxs("span",{className:"font-mono text-studio-accent",children:[((t.barWidth||.8)*100).toFixed(0),"%"]})]}),p.jsx("input",{type:"range",min:"0.2",max:"1.0",step:"0.05",value:t.barWidth||.8,onChange:n=>e({barWidth:parseFloat(n.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Max Height"}),p.jsx("span",{className:"font-mono text-studio-accent",children:t.maxHeight.toFixed(1)})]}),p.jsx("input",{type:"range",min:"0.5",max:"3.5",step:"0.1",value:t.maxHeight,onChange:n=>e({maxHeight:parseFloat(n.target.value)}),className:"w-full"})]}),t.mode==="circularRadial"&&p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Inner Circle Radius"}),p.jsx("span",{className:"font-mono text-studio-accent",children:(t.innerRadius||1.2).toFixed(1)})]}),p.jsx("input",{type:"range",min:"0.5",max:"3.0",step:"0.1",value:t.innerRadius||1.2,onChange:n=>e({innerRadius:parseFloat(n.target.value)}),className:"w-full"})]}),p.jsxs("div",{className:"flex items-center space-x-2 pt-1",children:[p.jsx("input",{type:"checkbox",id:"showPeaks",checked:t.showPeaks,onChange:n=>e({showPeaks:n.target.checked}),className:"rounded border-studio-700 bg-studio-950 text-studio-accent"}),p.jsx("label",{htmlFor:"showPeaks",className:"text-xs text-slate-300 cursor-pointer",children:"Show floating peak indicators"})]})]}),HR=({config:t,onChange:e})=>p.jsxs("div",{className:"space-y-3 pt-2",children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-xs mb-1 block",children:"Motion Pattern"}),p.jsxs("select",{value:t.behavior||"ambientVortex",onChange:n=>e({behavior:n.target.value}),className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none",children:[p.jsx("option",{value:"ambientVortex",children:"Ambient Vortex Spiral"}),p.jsx("option",{value:"radialExplosion",children:"Bass Kick Shockwaves"}),p.jsx("option",{value:"flowField",children:"3D Noise Flow Field"})]})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Particle Count"}),p.jsx("span",{className:"font-mono text-studio-accent",children:t.count||1e3})]}),p.jsx("input",{type:"range",min:"100",max:"4000",step:"100",value:t.count||1e3,onChange:n=>e({count:parseInt(n.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Particle Size"}),p.jsx("span",{className:"font-mono text-studio-accent",children:(t.size||1.2).toFixed(1)})]}),p.jsx("input",{type:"range",min:"0.2",max:"3.5",step:"0.1",value:t.size||1.2,onChange:n=>e({size:parseFloat(n.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Movement Speed"}),p.jsx("span",{className:"font-mono text-studio-accent",children:(t.speed||1).toFixed(1)})]}),p.jsx("input",{type:"range",min:"0.2",max:"3.0",step:"0.1",value:t.speed||1,onChange:n=>e({speed:parseFloat(n.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Spatial Dispersion"}),p.jsx("span",{className:"font-mono text-studio-accent",children:(t.dispersion||4.5).toFixed(1)})]}),p.jsx("input",{type:"range",min:"1.0",max:"8.0",step:"0.5",value:t.dispersion||4.5,onChange:n=>e({dispersion:parseFloat(n.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Bass Explosion Impulse"}),p.jsx("span",{className:"font-mono text-studio-accent",children:(t.beatExplosionForce||3.5).toFixed(1)})]}),p.jsx("input",{type:"range",min:"0.0",max:"8.0",step:"0.5",value:t.beatExplosionForce||3.5,onChange:n=>e({beatExplosionForce:parseFloat(n.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Treble Twinkle Shimmer"}),p.jsx("span",{className:"font-mono text-studio-accent",children:(t.trebleTwinkle||1.5).toFixed(1)})]}),p.jsx("input",{type:"range",min:"0.0",max:"4.0",step:"0.2",value:t.trebleTwinkle||1.5,onChange:n=>e({trebleTwinkle:parseFloat(n.target.value)}),className:"w-full"})]}),p.jsxs("div",{className:"flex items-center space-x-2 pt-1",children:[p.jsx("input",{type:"checkbox",id:"connectLines",checked:t.connectLines||!1,onChange:n=>e({connectLines:n.target.checked}),className:"rounded border-studio-700 bg-studio-950 text-studio-accent"}),p.jsx("label",{htmlFor:"connectLines",className:"text-xs text-slate-300 cursor-pointer",children:"Enable Constellation Connection Lines"})]})]}),GR=({config:t,onChange:e})=>{var n,i;return p.jsxs("div",{className:"space-y-3 pt-2",children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-xs mb-1 block",children:"Geometric Polyhedron"}),p.jsxs("select",{value:t.shape,onChange:r=>e({shape:r.target.value}),className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none",children:[p.jsx("option",{value:"icosahedron",children:"Icosahedron"}),p.jsx("option",{value:"torusKnot",children:"Torus Knot"}),p.jsx("option",{value:"morphingGeosphere",children:"Morphing Geosphere"}),p.jsx("option",{value:"dodecahedron",children:"Dodecahedron"}),p.jsx("option",{value:"cyberCube",children:"Cyber Cube"}),p.jsx("option",{value:"sphere",children:"Sphere"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs mb-1 block",children:"Material Shading"}),p.jsxs("select",{value:t.shadingStyle,onChange:r=>e({shadingStyle:r.target.value}),className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none",children:[p.jsx("option",{value:"wireframe",children:"Wireframe Holographic"}),p.jsx("option",{value:"faceted",children:"Faceted Low-Poly"}),p.jsx("option",{value:"metallicPBR",children:"Metallic PBR"})]})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Audio Noise Distortion"}),p.jsx("span",{className:"font-mono text-studio-accent",children:(t.noiseDistortion||.6).toFixed(2)})]}),p.jsx("input",{type:"range",min:"0.0",max:"1.5",step:"0.05",value:t.noiseDistortion||.6,onChange:r=>e({noiseDistortion:parseFloat(r.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-xs mb-1 block",children:"Distortion Driving Band"}),p.jsxs("select",{value:t.distortionBand||"bass",onChange:r=>e({distortionBand:r.target.value}),className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none",children:[p.jsx("option",{value:"bass",children:"Bass / Kick"}),p.jsx("option",{value:"mid",children:"Mid-Range / Synths"}),p.jsx("option",{value:"treble",children:"Treble / Cymbals"}),p.jsx("option",{value:"rms",children:"Overall Energy (RMS)"})]})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Bass Pulse Intensity"}),p.jsx("span",{className:"font-mono text-studio-accent",children:(t.pulseIntensity||.7).toFixed(2)})]}),p.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:t.pulseIntensity||.7,onChange:r=>e({pulseIntensity:parseFloat(r.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Rotation Speed"}),p.jsx("span",{className:"font-mono text-studio-accent",children:(((n=t.rotationSpeed)==null?void 0:n[1])||.4).toFixed(2)})]}),p.jsx("input",{type:"range",min:"0.0",max:"1.5",step:"0.05",value:((i=t.rotationSpeed)==null?void 0:i[1])||.4,onChange:r=>{const s=parseFloat(r.target.value);e({rotationSpeed:[s*.5,s,s*.25]})},className:"w-full"})]})]})},WR=({config:t,onChange:e})=>p.jsxs("div",{className:"space-y-3 pt-2",children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-xs mb-1 block",children:"Background Mode"}),p.jsxs("select",{value:t.mode,onChange:n=>e({mode:n.target.value}),className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none",children:[p.jsx("option",{value:"animatedNebula",children:"Animated Cosmic Nebula"}),p.jsx("option",{value:"synthwaveGrid",children:"Synthwave Cyber Grid"}),p.jsx("option",{value:"gradient",children:"Directional Gradient"}),p.jsx("option",{value:"solid",children:"Minimal Solid Color"})]})]}),t.mode==="gradient"&&p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Gradient Angle"}),p.jsxs("span",{className:"font-mono text-studio-accent",children:[t.gradientAngle||0,"°"]})]}),p.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:t.gradientAngle||0,onChange:n=>e({gradientAngle:parseInt(n.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Animation Speed"}),p.jsxs("span",{className:"font-mono text-studio-accent",children:[(t.animationSpeed||1).toFixed(1),"x"]})]}),p.jsx("input",{type:"range",min:"0.1",max:"3.0",step:"0.1",value:t.animationSpeed||1,onChange:n=>e({animationSpeed:parseFloat(n.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Audio Reactive Zoom Pulse"}),p.jsx("span",{className:"font-mono text-studio-accent",children:(t.audioReactiveZoom||.4).toFixed(1)})]}),p.jsx("input",{type:"range",min:"0.0",max:"1.5",step:"0.1",value:t.audioReactiveZoom||.4,onChange:n=>e({audioReactiveZoom:parseFloat(n.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Film Grain Intensity"}),p.jsxs("span",{className:"font-mono text-studio-accent",children:[((t.grainIntensity||.2)*100).toFixed(0),"%"]})]}),p.jsx("input",{type:"range",min:"0.0",max:"0.8",step:"0.02",value:t.grainIntensity||.2,onChange:n=>e({grainIntensity:parseFloat(n.target.value)}),className:"w-full"})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{children:"Vignette Edge Darkening"}),p.jsxs("span",{className:"font-mono text-studio-accent",children:[((t.vignetteStrength||.5)*100).toFixed(0),"%"]})]}),p.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.05",value:t.vignetteStrength||.5,onChange:n=>e({vignetteStrength:parseFloat(n.target.value)}),className:"w-full"})]})]}),XR=()=>{var V,I;const{isPlaying:t,currentTime:e,duration:n,volume:i,isMuted:r,isLooping:s,play:a,pause:o,stop:l,seek:c,setVolume:h,toggleMute:f,toggleLoop:d,loadAudioFile:g,currentAudioData:x,audioBuffer:v}=Zt(),m=Ye.useRef(null),u=Ye.useRef(null),[y,_]=Ye.useState(null),[M,A]=Ye.useState(!1),T=z=>{if(isNaN(z)||z<0)return"00:00";const H=Math.floor(z/60),X=Math.floor(z%60);return`${H.toString().padStart(2,"0")}:${X.toString().padStart(2,"0")}`};Ye.useEffect(()=>{if(!v){_(null);return}const z=v.getChannelData(0),H=z.length,X=350,K=Math.floor(H/X),L=new Float32Array(X);for(let q=0;q<X;q++){const Z=q*K,oe=Math.min(Z+K,H);let ue=0;for(let Ne=Z;Ne<oe;Ne+=4){const $=Math.abs(z[Ne]);$>ue&&(ue=$)}L[q]=Math.min(1,ue*1.4)}_(L)},[v]),Ye.useEffect(()=>{const z=u.current;if(!z)return;const H=z.getContext("2d");if(!H)return;const X=z.width,K=z.height;if(H.clearRect(0,0,X,K),!y){H.strokeStyle="#1e293b",H.lineWidth=2,H.beginPath(),H.moveTo(0,K/2),H.lineTo(X,K/2),H.stroke();return}const q=(n>0?Math.min(1,e/n):0)*X,Z=y.length,oe=X/Z,ue=K/2;for(let Ne=0;Ne<Z;Ne++){const $=Ne*oe,ne=Math.max(2,y[Ne]*(K*.88)),he=ue-ne/2;if($<=q){const le=$/X;H.fillStyle=le<.5?"#00f0ff":"#ff007f"}else H.fillStyle="#334155";H.fillRect($,he,Math.max(1,oe-1),ne)}n>0&&(H.fillStyle="#ffffff",H.shadowColor="#00f0ff",H.shadowBlur=8,H.fillRect(q-1,0,2,K),H.shadowBlur=0)},[y,e,n]);const C=z=>{if(!n)return;const H=z.currentTarget.getBoundingClientRect(),X=z.clientX-H.left,K=Math.max(0,Math.min(1,X/H.width));c(K*n)},R=z=>{var X;const H=(X=z.target.files)==null?void 0:X[0];H&&g(H)},w=async()=>{try{const z=await ct.generateDemoTrack();Zt.setState({audioMetadata:z,audioBuffer:ct.getAudioBuffer(),duration:z.duration,currentTime:0,isPlaying:!1}),a()}catch(z){console.error("Failed to generate demo track:",z)}},S=((V=x==null?void 0:x.beat)==null?void 0:V.isBeat)||!1,N=((I=x==null?void 0:x.beat)==null?void 0:I.bpm)||128;return p.jsxs("footer",{className:"h-16 bg-studio-900 border-t border-studio-800 px-4 flex items-center justify-between select-none z-30",children:[p.jsx("input",{ref:m,type:"file",accept:"audio/*",onChange:R,className:"hidden"}),p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx("button",{onClick:t?o:a,disabled:n===0,className:`w-9 h-9 rounded-full flex items-center justify-center transition-all ${n===0?"bg-studio-800 text-slate-600 cursor-not-allowed":t?"bg-studio-accent text-slate-950 shadow-md shadow-studio-accent/30 hover:scale-105 active:scale-95":"bg-white text-slate-950 shadow-md hover:scale-105 active:scale-95"}`,title:t?"Pause (Space)":"Play (Space)",children:t?p.jsx(OS,{className:"w-4 h-4 fill-current"}):p.jsx(BS,{className:"w-4 h-4 fill-current ml-0.5"})}),p.jsx("button",{onClick:l,disabled:n===0,className:"p-2 rounded-lg text-slate-400 hover:text-white hover:bg-studio-800 disabled:opacity-20 transition-all",title:"Stop and return to start",children:p.jsx(VS,{className:"w-4 h-4 fill-current"})}),p.jsx("button",{onClick:d,className:`p-2 rounded-lg transition-all ${s?"text-studio-accent bg-studio-800/80":"text-slate-500 hover:text-slate-300 hover:bg-studio-800"}`,title:s?"Looping enabled":"Looping disabled",children:p.jsx(jS,{className:"w-4 h-4"})}),p.jsxs("div",{className:"font-mono text-xs text-slate-300 tracking-wider",children:[p.jsx("span",{className:"text-white font-semibold",children:T(e)}),p.jsx("span",{className:"text-slate-600 mx-1",children:"/"}),p.jsx("span",{className:"text-slate-400",children:T(n)})]}),p.jsxs("div",{className:"hidden sm:flex items-center space-x-2 pl-2 border-l border-studio-800",children:[p.jsx("div",{className:`w-3 h-3 rounded-full border transition-all duration-75 ${S?"bg-studio-neonPink border-pink-300 scale-125 shadow-md shadow-pink-500/80":"bg-studio-950 border-studio-700 scale-100"}`,title:"Real-time Beat Transient Detection"}),p.jsxs("div",{className:"flex items-center space-x-1.5 text-[11px] font-mono text-slate-300 bg-studio-950 px-2 py-1 rounded-md border border-studio-800",children:[p.jsx(Dy,{className:"w-3 h-3 text-studio-neonPink"}),p.jsxs("button",{onClick:()=>{const z=prompt("Enter exact BPM (e.g. 128, 140, 174):",`${N}`);if(z){const H=parseInt(z);!isNaN(H)&&H>=40&&H<=240&&Zt.getState().setManualBpm(H)}},className:"font-bold hover:text-studio-accent transition-colors cursor-pointer",title:"Click to manually edit BPM",children:[N," BPM"]}),p.jsx("button",{onClick:async()=>{A(!0);try{await Zt.getState().recheckBpm()}finally{A(!1)}},disabled:M||n===0,className:"p-0.5 text-slate-400 hover:text-studio-accent transition-colors disabled:opacity-30 ml-1",title:"Re-analyze track to calculate accurate BPM",children:p.jsx(Nc,{className:`w-3 h-3 ${M?"animate-spin text-studio-accent":""}`})}),p.jsx("button",{onClick:()=>Zt.getState().multiplyBpm(.5),className:"px-1 text-[9px] text-slate-500 hover:text-slate-200 rounded hover:bg-studio-850",title:"Half-time (BPM / 2)",children:"/2"}),p.jsx("button",{onClick:()=>Zt.getState().multiplyBpm(2),className:"px-1 text-[9px] text-slate-500 hover:text-slate-200 rounded hover:bg-studio-850",title:"Double-time (BPM * 2)",children:"x2"})]})]})]}),p.jsx("div",{className:"flex-1 max-w-2xl mx-6",children:p.jsx("div",{onClick:C,className:"h-10 flex items-center cursor-pointer group relative bg-studio-950/80 rounded-lg px-2 border border-studio-800/80 hover:border-studio-700 transition-colors",title:"Click to seek",children:p.jsx("canvas",{ref:u,width:600,height:32,className:"w-full h-8 block"})})}),p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsxs("button",{onClick:()=>{var z;return(z=m.current)==null?void 0:z.click()},className:"flex items-center space-x-1.5 bg-studio-800 hover:bg-studio-750 text-slate-200 hover:text-white px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-studio-700 transition-all",title:"Upload audio track (MP3, WAV, FLAC, OGG)",children:[p.jsx(Ty,{className:"w-3.5 h-3.5 text-studio-accent"}),p.jsx("span",{children:"Upload Audio"})]}),p.jsxs("button",{onClick:w,className:"flex items-center space-x-1.5 bg-gradient-to-r from-purple-950 to-indigo-950 hover:from-purple-900 hover:to-indigo-900 text-purple-300 hover:text-purple-100 border border-purple-800/60 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all",title:"Load high-energy electronic synthesizer demo loop",children:[p.jsx(fy,{className:"w-3.5 h-3.5 text-purple-400"}),p.jsx("span",{children:"Demo Loop"})]}),p.jsxs("div",{className:"flex items-center space-x-2 pl-2 border-l border-studio-800",children:[p.jsx("button",{onClick:f,className:"text-slate-400 hover:text-white transition-colors",children:r||i===0?p.jsx(XS,{className:"w-4 h-4"}):p.jsx(WS,{className:"w-4 h-4"})}),p.jsx("input",{type:"range",min:"0",max:"1",step:"0.02",value:r?0:i,onChange:z=>h(parseFloat(z.target.value)),className:"w-16",title:"Volume"})]})]})]})},$R=()=>{const t=Ye.useRef(null),e=Ye.useRef(null),{project:n,isPlaying:i,duration:r,isLooping:s,loadAudioFile:a,play:o,updateCurrentTime:l,setAudioAnalysisData:c}=Zt();Ye.useEffect(()=>{if(!t.current||!e.current)return;st.mount(t.current,e.current),st.syncLayers(n.layers),st.setAspectRatio(n.aspectRatio);const x=()=>{if(t.current&&e.current){const u=e.current.getBoundingClientRect();st.resize(u.width,u.height)}};window.addEventListener("resize",x),x();let v;const m=()=>{const u=ct.getRealtimeAnalysis();if(st.renderPreviewFrame(u),ct.isPlaying()){const y=ct.getCurrentTime();l(y),c(u),s&&r>0&&y>=r-.05&&ct.seek(0)}v=requestAnimationFrame(m)};return v=requestAnimationFrame(m),()=>{cancelAnimationFrame(v),window.removeEventListener("resize",x)}},[]),Ye.useEffect(()=>{st.setAspectRatio(n.aspectRatio)},[n.aspectRatio]),Ye.useEffect(()=>{st.syncLayers(n.layers)},[n.layers]);const h=x=>{x.preventDefault();const v=x.dataTransfer.files[0];v&&v.type.startsWith("audio/")&&a(v)},f=x=>{x.preventDefault()},d=async()=>{try{const x=await ct.generateDemoTrack();Zt.setState({audioMetadata:x,audioBuffer:ct.getAudioBuffer(),duration:x.duration,currentTime:0,isPlaying:!1}),o()}catch(x){console.error(x)}},g=()=>{switch(n.aspectRatio){case"16:9":return"aspect-video max-w-full max-h-full";case"9:16":return"aspect-[9/16] max-h-full h-full";case"1:1":return"aspect-square max-h-full max-w-full"}};return p.jsx("main",{ref:t,onDrop:h,onDragOver:f,className:"flex-1 bg-studio-950 flex items-center justify-center p-4 relative overflow-hidden select-none",children:p.jsxs("div",{className:`relative shadow-2xl shadow-black/80 rounded-xl overflow-hidden border border-studio-800/80 bg-black flex items-center justify-center ${g()}`,children:[p.jsx("canvas",{ref:e,className:"w-full h-full block object-contain"}),r===0&&p.jsxs("div",{className:"absolute inset-0 bg-studio-950/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-10",children:[p.jsx("div",{className:"w-14 h-14 rounded-2xl bg-studio-900 border border-studio-750 flex items-center justify-center mb-4 shadow-xl shadow-cyan-500/10",children:p.jsx(Si,{className:"w-7 h-7 text-studio-accent animate-pulse"})}),p.jsx("h2",{className:"text-base font-bold text-white tracking-wide",children:"Audio-Reactive Visual Studio"}),p.jsx("p",{className:"text-xs text-slate-400 max-w-xs mt-1 mb-5 leading-relaxed",children:"Drop an MP3 or WAV audio track here, or load the electronic synthesizer demo loop to start visualizing."}),p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsxs("button",{onClick:d,className:"flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95",children:[p.jsx(fy,{className:"w-4 h-4"}),p.jsx("span",{children:"Load Demo Track"})]}),p.jsxs("label",{className:"flex items-center space-x-2 bg-studio-800 hover:bg-studio-700 text-slate-200 hover:text-white px-4 py-2 rounded-lg text-xs font-semibold border border-studio-700 cursor-pointer transition-all hover:scale-105",children:[p.jsx(Ty,{className:"w-4 h-4 text-studio-accent"}),p.jsx("span",{children:"Upload Audio"}),p.jsx("input",{type:"file",accept:"audio/*",onChange:x=>{var m;const v=(m=x.target.files)==null?void 0:m[0];v&&a(v)},className:"hidden"})]})]})]})]})})},qR=()=>{const{isExportModalOpen:t,setIsExportModalOpen:e,project:n,duration:i,exportProgress:r,startExport:s,cancelExport:a}=Zt(),[o,l]=Ye.useState(n.aspectRatio),[c,h]=Ye.useState("1080p"),[f,d]=Ye.useState(30),[g,x]=Ye.useState(n.name.replace(/\s+/g,"_")),[v,m]=Ye.useState("full");if(!t)return null;const u=r&&(r.status==="preparing"||r.status==="renderingFrames"||r.status==="encodingVideo"||r.status==="muxingAudio"),y=(r==null?void 0:r.status)==="completed",_=(r==null?void 0:r.status)==="error",M=i>0?i:10,A=v==="30s"?Math.min(30,M):v==="60s"?Math.min(60,M):M,T=async()=>{const w={aspectRatio:o,resolution:c,fps:f,format:"mp4",bitrate:c==="4k"?24e6:c==="1440p"?16e6:1e7,startTime:0,endTime:A,includeAudio:i>0,outputFileName:g||"visual_output"};try{await s(w)}catch(S){console.error("Export failed:",S)}},C=()=>{if(r!=null&&r.outputBlobUrl){const w=document.createElement("a");w.href=r.outputBlobUrl,w.download=`${g||"visualization"}.mp4`,document.body.appendChild(w),w.click(),document.body.removeChild(w)}},R=()=>{Zt.setState({exportProgress:null})};return p.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 select-none animate-fade-in",children:p.jsxs("div",{className:"bg-studio-900 border border-studio-750 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col",children:[p.jsxs("div",{className:"px-6 py-4 border-b border-studio-800 flex items-center justify-between",children:[p.jsxs("div",{className:"flex items-center space-x-2.5",children:[p.jsx("div",{className:"w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-studio-accent",children:p.jsx(r0,{className:"w-4 h-4"})}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-sm font-bold text-white tracking-wide",children:"Export Video"}),p.jsx("p",{className:"text-[11px] text-slate-400",children:"Deterministic, frame-accurate offline MP4 rendering"})]})]}),!u&&p.jsx("button",{onClick:()=>{R(),e(!1)},className:"text-slate-400 hover:text-white p-1 rounded-lg hover:bg-studio-800 transition-colors",children:p.jsx(Py,{className:"w-5 h-5"})})]}),p.jsxs("div",{className:"p-6 space-y-5 text-xs text-slate-300",children:[_&&r&&p.jsxs("div",{className:"space-y-4 py-4 text-center",children:[p.jsx("div",{className:"inline-flex p-3 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 mb-1",children:p.jsx(n0,{className:"w-8 h-8"})}),p.jsxs("div",{children:[p.jsx("h4",{className:"text-sm font-bold text-white",children:"Export Failed"}),p.jsx("p",{className:"text-xs text-red-400 mt-1 max-w-sm mx-auto",children:r.errorMessage||"An error occurred during video encoding."}),p.jsx("p",{className:"text-[11px] text-slate-500 mt-2",children:"Try selecting 720p or 1080p with 30 FPS for maximum hardware compatibility."})]}),p.jsx("div",{className:"flex items-center justify-center space-x-3 pt-2",children:p.jsxs("button",{onClick:R,className:"flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-studio-800 hover:bg-studio-700 text-slate-200 font-semibold transition-colors",children:[p.jsx(Nc,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Adjust Settings"})]})})]}),u&&r&&p.jsxs("div",{className:"space-y-4 py-4 text-center",children:[p.jsx("div",{className:"inline-flex p-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-studio-accent animate-pulse mb-1",children:p.jsx(FS,{className:"w-8 h-8 animate-spin"})}),p.jsxs("div",{children:[p.jsxs("div",{className:"text-sm font-bold text-white capitalize",children:[r.status==="preparing"&&"Preparing Offscreen Pipeline...",r.status==="renderingFrames"&&"Rendering Deterministic Frames...",r.status==="muxingAudio"&&"Finalizing MP4 & Preparing Download..."]}),p.jsx("div",{className:"text-xs text-slate-400 mt-1",children:r.status==="muxingAudio"?p.jsx("span",{className:"text-cyan-400 animate-pulse font-medium",children:"Assembling video & synchronized audio tracks... download will begin in a moment."}):p.jsxs("span",{children:["Frame ",r.currentFrame," of ",r.totalFrames," (",(r.progress*100).toFixed(1),"%)"]})})]}),p.jsx("div",{className:"w-full bg-studio-950 h-2.5 rounded-full overflow-hidden border border-studio-800",children:p.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full transition-all duration-150",style:{width:`${Math.min(100,Math.max(2,r.progress*100))}%`}})}),p.jsxs("div",{className:"grid grid-cols-2 gap-3 text-[11px] text-slate-400 font-mono bg-studio-950 p-3 rounded-xl border border-studio-800",children:[p.jsxs("div",{className:"flex items-center justify-center space-x-1",children:[p.jsx(PS,{className:"w-3.5 h-3.5 text-cyan-400"}),p.jsxs("span",{children:["ETA: ",r.estimatedTimeRemainingSeconds>0?`${r.estimatedTimeRemainingSeconds.toFixed(0)}s`:"Calculating..."]})]}),p.jsxs("div",{children:["Speed: ",r.renderingFps.toFixed(0)," FPS"]})]}),p.jsx("button",{onClick:a,className:"px-4 py-1.5 rounded-lg bg-red-950/60 border border-red-800/80 text-red-300 hover:text-white text-xs font-semibold",children:"Cancel Export"})]}),y&&r&&p.jsxs("div",{className:"space-y-4 py-4 text-center",children:[p.jsx("div",{className:"inline-flex p-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-1",children:p.jsx(Hx,{className:"w-8 h-8"})}),p.jsxs("div",{children:[p.jsx("h4",{className:"text-sm font-bold text-white",children:"Export Completed Successfully!"}),p.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Your deterministic audio-reactive MP4 video is ready for download."}),r.fileSizeBytes&&p.jsxs("p",{className:"text-[11px] font-mono text-cyan-400 mt-1",children:["Size: ",(r.fileSizeBytes/(1024*1024)).toFixed(2)," MB"]})]}),p.jsxs("div",{className:"flex items-center justify-center space-x-3 pt-2",children:[p.jsxs("button",{onClick:C,className:"flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-emerald-500/20",children:[p.jsx(Yx,{className:"w-4 h-4 stroke-[2.5]"}),p.jsx("span",{children:"Download MP4"})]}),p.jsx("button",{onClick:()=>{R(),e(!1)},className:"px-4 py-2.5 rounded-xl bg-studio-800 hover:bg-studio-700 text-slate-300 font-semibold",children:"Close"})]})]}),!u&&!y&&!_&&p.jsxs(p.Fragment,{children:[i===0&&p.jsxs("div",{className:"bg-amber-950/40 border border-amber-800/60 rounded-xl p-3 text-amber-300 text-xs flex items-center space-x-2",children:[p.jsx(n0,{className:"w-4 h-4 flex-shrink-0 text-amber-400"}),p.jsx("span",{children:"No audio file is loaded. Export will generate a 10-second sample animation video."})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-slate-400 text-[11px] font-bold uppercase tracking-wider block mb-1",children:"File Name"}),p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx("input",{type:"text",value:g,onChange:w=>x(w.target.value),className:"flex-1 bg-studio-950 border border-studio-800 rounded-lg px-3 py-2 text-white outline-none focus:border-cyan-500",placeholder:"my_visualization"}),p.jsx("span",{className:"text-slate-500 font-mono",children:".mp4"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-slate-400 text-[11px] font-bold uppercase tracking-wider block mb-1.5",children:"Aspect Ratio"}),p.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[p.jsx("button",{onClick:()=>l("16:9"),className:`py-2 rounded-lg font-semibold border transition-all text-center ${o==="16:9"?"bg-studio-800 border-cyan-500 text-cyan-400 shadow-sm":"bg-studio-950 border-studio-800 text-slate-400 hover:text-white"}`,children:"16:9 (YouTube)"}),p.jsx("button",{onClick:()=>l("9:16"),className:`py-2 rounded-lg font-semibold border transition-all text-center ${o==="9:16"?"bg-studio-800 border-cyan-500 text-cyan-400 shadow-sm":"bg-studio-950 border-studio-800 text-slate-400 hover:text-white"}`,children:"9:16 (Shorts/Reels)"}),p.jsx("button",{onClick:()=>l("1:1"),className:`py-2 rounded-lg font-semibold border transition-all text-center ${o==="1:1"?"bg-studio-800 border-cyan-500 text-cyan-400 shadow-sm":"bg-studio-950 border-studio-800 text-slate-400 hover:text-white"}`,children:"1:1 (Square)"})]})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[p.jsx("label",{className:"text-slate-400 text-[11px] font-bold uppercase tracking-wider",children:"Clip Duration"}),p.jsxs("span",{className:"text-[11px] font-mono text-cyan-400",children:[Math.floor(A/60),":",Math.floor(A%60).toString().padStart(2,"0")," ","(",Math.floor(A*f)," frames)"]})]}),p.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[p.jsxs("button",{onClick:()=>m("full"),className:`py-2 px-2 rounded-lg font-semibold border transition-all text-center text-xs truncate ${v==="full"?"bg-studio-800 border-cyan-500 text-cyan-400 shadow-sm":"bg-studio-950 border-studio-800 text-slate-400 hover:text-white"}`,children:["Full Track (",Math.floor(M/60),":",Math.floor(M%60).toString().padStart(2,"0"),")"]}),p.jsx("button",{onClick:()=>m("30s"),className:`py-2 px-2 rounded-lg font-semibold border transition-all text-center text-xs truncate ${v==="30s"?"bg-studio-800 border-cyan-500 text-cyan-400 shadow-sm":"bg-studio-950 border-studio-800 text-slate-400 hover:text-white"}`,children:"30s (Reel / TikTok)"}),p.jsx("button",{onClick:()=>m("60s"),className:`py-2 px-2 rounded-lg font-semibold border transition-all text-center text-xs truncate ${v==="60s"?"bg-studio-800 border-cyan-500 text-cyan-400 shadow-sm":"bg-studio-950 border-studio-800 text-slate-400 hover:text-white"}`,children:"60s (YouTube Short)"})]})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-slate-400 text-[11px] font-bold uppercase tracking-wider block mb-1",children:"Resolution"}),p.jsxs("select",{value:c,onChange:w=>h(w.target.value),className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-3 py-2 text-white outline-none cursor-pointer",children:[p.jsx("option",{value:"720p",children:"720p HD (Fast)"}),p.jsx("option",{value:"1080p",children:"1080p Full HD (Recommended)"}),p.jsx("option",{value:"1440p",children:"1440p 2K QHD"}),p.jsx("option",{value:"4k",children:"4K Ultra HD"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-slate-400 text-[11px] font-bold uppercase tracking-wider block mb-1",children:"Frame Rate"}),p.jsxs("select",{value:f,onChange:w=>d(parseInt(w.target.value)),className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-3 py-2 text-white outline-none cursor-pointer",children:[p.jsx("option",{value:24,children:"24 FPS (Cinematic)"}),p.jsx("option",{value:30,children:"30 FPS (Standard - Recommended)"}),p.jsx("option",{value:60,children:"60 FPS (Ultra Smooth)"})]})]})]}),p.jsxs("div",{className:"bg-studio-950 p-3 rounded-xl border border-studio-800 text-[11px] text-slate-400 space-y-1",children:[p.jsxs("div",{className:"flex items-center space-x-1.5 text-cyan-400 font-semibold",children:[p.jsx(Si,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Deterministic In-Browser Rendering"})]}),p.jsx("p",{children:"Frames are computed deterministically from exact audio sample slices. Zero dropped frames, perfect audio/video synchronization."})]}),p.jsxs("div",{className:"flex items-center justify-end space-x-3 pt-3 border-t border-studio-800",children:[p.jsx("button",{onClick:()=>e(!1),className:"px-4 py-2 rounded-lg bg-studio-800 hover:bg-studio-750 text-slate-300 font-semibold",children:"Cancel"}),p.jsxs("button",{onClick:T,className:"flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 px-5 py-2 rounded-lg font-bold shadow-lg shadow-cyan-500/20 active:scale-95",children:[p.jsx(r0,{className:"w-4 h-4 stroke-[2.5]"}),p.jsx("span",{children:"Start Export"})]})]})]})]})]})})},YR=()=>(Ye.useEffect(()=>{const t=e=>{const n=e.target;if(!(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.tagName==="SELECT")))if(e.code==="Space"){e.preventDefault();const i=Zt.getState();i.duration>0&&(i.isPlaying?i.pause():i.play())}else e.code==="KeyR"&&!e.ctrlKey&&!e.metaKey&&Zt.getState().randomizeParameters()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[]),p.jsxs("div",{className:"flex flex-col h-screen w-screen overflow-hidden bg-studio-950 text-slate-100 select-none",children:[p.jsx(OR,{}),p.jsxs("div",{className:"flex flex-1 overflow-hidden relative",children:[p.jsx(BR,{}),p.jsx($R,{}),p.jsx(zR,{})]}),p.jsx(XR,{}),p.jsx(qR,{})]})),KR=()=>p.jsx(YR,{});yd.createRoot(document.getElementById("root")).render(p.jsx(Bl.StrictMode,{children:p.jsx(KR,{})}));
