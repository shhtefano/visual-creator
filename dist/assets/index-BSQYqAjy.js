var G_=Object.defineProperty;var W_=(t,e,n)=>e in t?G_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Q=(t,e,n)=>W_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function X_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ag={exports:{}},Hc={},Rg={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko=Symbol.for("react.element"),q_=Symbol.for("react.portal"),$_=Symbol.for("react.fragment"),Y_=Symbol.for("react.strict_mode"),K_=Symbol.for("react.profiler"),Z_=Symbol.for("react.provider"),Q_=Symbol.for("react.context"),J_=Symbol.for("react.forward_ref"),e1=Symbol.for("react.suspense"),t1=Symbol.for("react.memo"),n1=Symbol.for("react.lazy"),Yp=Symbol.iterator;function i1(t){return t===null||typeof t!="object"?null:(t=Yp&&t[Yp]||t["@@iterator"],typeof t=="function"?t:null)}var Pg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ng=Object.assign,Dg={};function wa(t,e,n){this.props=t,this.context=e,this.refs=Dg,this.updater=n||Pg}wa.prototype.isReactComponent={};wa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ig(){}Ig.prototype=wa.prototype;function mf(t,e,n){this.props=t,this.context=e,this.refs=Dg,this.updater=n||Pg}var gf=mf.prototype=new Ig;gf.constructor=mf;Ng(gf,wa.prototype);gf.isPureReactComponent=!0;var Kp=Array.isArray,Lg=Object.prototype.hasOwnProperty,vf={current:null},Ug={key:!0,ref:!0,__self:!0,__source:!0};function Fg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Lg.call(e,i)&&!Ug.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:ko,type:t,key:s,ref:a,props:r,_owner:vf.current}}function r1(t,e){return{$$typeof:ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ko}function s1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zp=/\/+/g;function du(t,e){return typeof t=="object"&&t!==null&&t.key!=null?s1(""+t.key):e.toString(36)}function Ol(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case ko:case q_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+du(a,0):i,Kp(r)?(n="",t!=null&&(n=t.replace(Zp,"$&/")+"/"),Ol(r,e,n,"",function(c){return c})):r!=null&&(xf(r)&&(r=r1(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Zp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Kp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+du(s,o);a+=Ol(s,e,n,l,r)}else if(l=i1(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+du(s,o++),a+=Ol(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ko(t,e,n){if(t==null)return t;var i=[],r=0;return Ol(t,i,"","",function(s){return e.call(n,s,r++)}),i}function a1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gn={current:null},Bl={transition:null},o1={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:Bl,ReactCurrentOwner:vf};function kg(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:Ko,forEach:function(t,e,n){Ko(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ko(t,function(){e++}),e},toArray:function(t){return Ko(t,function(e){return e})||[]},only:function(t){if(!xf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=wa;$e.Fragment=$_;$e.Profiler=K_;$e.PureComponent=mf;$e.StrictMode=Y_;$e.Suspense=e1;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o1;$e.act=kg;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ng({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=vf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Lg.call(e,l)&&!Ug.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:ko,type:t.type,key:r,ref:s,props:i,_owner:a}};$e.createContext=function(t){return t={$$typeof:Q_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Z_,_context:t},t.Consumer=t};$e.createElement=Fg;$e.createFactory=function(t){var e=Fg.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:J_,render:t}};$e.isValidElement=xf;$e.lazy=function(t){return{$$typeof:n1,_payload:{_status:-1,_result:t},_init:a1}};$e.memo=function(t,e){return{$$typeof:t1,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=Bl.transition;Bl.transition={};try{t()}finally{Bl.transition=e}};$e.unstable_act=kg;$e.useCallback=function(t,e){return gn.current.useCallback(t,e)};$e.useContext=function(t){return gn.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return gn.current.useDeferredValue(t)};$e.useEffect=function(t,e){return gn.current.useEffect(t,e)};$e.useId=function(){return gn.current.useId()};$e.useImperativeHandle=function(t,e,n){return gn.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return gn.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return gn.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return gn.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return gn.current.useReducer(t,e,n)};$e.useRef=function(t){return gn.current.useRef(t)};$e.useState=function(t){return gn.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return gn.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return gn.current.useTransition()};$e.version="18.3.1";Rg.exports=$e;var qe=Rg.exports;const zl=X_(qe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l1=qe,c1=Symbol.for("react.element"),u1=Symbol.for("react.fragment"),d1=Object.prototype.hasOwnProperty,h1=l1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f1={key:!0,ref:!0,__self:!0,__source:!0};function Og(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)d1.call(e,i)&&!f1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:c1,type:t,key:s,ref:a,props:r,_owner:h1.current}}Hc.Fragment=u1;Hc.jsx=Og;Hc.jsxs=Og;Ag.exports=Hc;var d=Ag.exports,yd={},Bg={exports:{}},Bn={},zg={exports:{}},jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,G){var $=D.length;D.push(G);e:for(;0<$;){var ne=$-1>>>1,ce=D[ne];if(0<r(ce,G))D[ne]=G,D[$]=ce,$=ne;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var G=D[0],$=D.pop();if($!==G){D[0]=$;e:for(var ne=0,ce=D.length,Se=ce>>>1;ne<Se;){var Y=2*(ne+1)-1,ie=D[Y],ue=Y+1,le=D[ue];if(0>r(ie,$))ue<ce&&0>r(le,ie)?(D[ne]=le,D[ue]=$,ne=ue):(D[ne]=ie,D[Y]=$,ne=Y);else if(ue<ce&&0>r(le,$))D[ne]=le,D[ue]=$,ne=ue;else break e}}return G}function r(D,G){var $=D.sortIndex-G.sortIndex;return $!==0?$:D.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,p=null,h=3,m=!1,y=!1,v=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var G=n(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=D)i(c),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(c)}}function M(D){if(v=!1,_(D),!y)if(n(l)!==null)y=!0,H(A);else{var G=n(c);G!==null&&K(M,G.startTime-D)}}function A(D,G){y=!1,v&&(v=!1,u(R),R=-1),m=!0;var $=h;try{for(_(G),p=n(l);p!==null&&(!(p.expirationTime>G)||D&&!N());){var ne=p.callback;if(typeof ne=="function"){p.callback=null,h=p.priorityLevel;var ce=ne(p.expirationTime<=G);G=t.unstable_now(),typeof ce=="function"?p.callback=ce:p===n(l)&&i(l),_(G)}else i(l);p=n(l)}if(p!==null)var Se=!0;else{var Y=n(c);Y!==null&&K(M,Y.startTime-G),Se=!1}return Se}finally{p=null,h=$,m=!1}}var T=!1,C=null,R=-1,w=5,S=-1;function N(){return!(t.unstable_now()-S<w)}function V(){if(C!==null){var D=t.unstable_now();S=D;var G=!0;try{G=C(!0,D)}finally{G?j():(T=!1,C=null)}}else T=!1}var j;if(typeof x=="function")j=function(){x(V)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,B=I.port2;I.port1.onmessage=V,j=function(){B.postMessage(null)}}else j=function(){g(V,0)};function H(D){C=D,T||(T=!0,j())}function K(D,G){R=g(function(){D(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,H(A))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var G=3;break;default:G=h}var $=h;h=G;try{return D()}finally{h=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=h;h=D;try{return G()}finally{h=$}},t.unstable_scheduleCallback=function(D,G,$){var ne=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ne+$:ne):$=ne,D){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=$+ce,D={id:f++,callback:G,priorityLevel:D,startTime:$,expirationTime:ce,sortIndex:-1},$>ne?(D.sortIndex=$,e(c,D),n(l)===null&&D===n(c)&&(v?(u(R),R=-1):v=!0,K(M,$-ne))):(D.sortIndex=ce,e(l,D),y||m||(y=!0,H(A))),D},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(D){var G=h;return function(){var $=h;h=G;try{return D.apply(this,arguments)}finally{h=$}}}})(jg);zg.exports=jg;var p1=zg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m1=qe,On=p1;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vg=new Set,vo={};function ms(t,e){aa(t,e),aa(t+"Capture",e)}function aa(t,e){for(vo[t]=e,t=0;t<e.length;t++)Vg.add(e[t])}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_d=Object.prototype.hasOwnProperty,g1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qp={},Jp={};function v1(t){return _d.call(Jp,t)?!0:_d.call(Qp,t)?!1:g1.test(t)?Jp[t]=!0:(Qp[t]=!0,!1)}function x1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function y1(t,e,n,i){if(e===null||typeof e>"u"||x1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nn[t]=new vn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nn[e]=new vn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nn[t]=new vn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nn[t]=new vn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nn[t]=new vn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nn[t]=new vn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nn[t]=new vn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nn[t]=new vn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nn[t]=new vn(t,5,!1,t.toLowerCase(),null,!1,!1)});var yf=/[\-:]([a-z])/g;function _f(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yf,_f);nn[e]=new vn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yf,_f);nn[e]=new vn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yf,_f);nn[e]=new vn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nn[t]=new vn(t,1,!1,t.toLowerCase(),null,!1,!1)});nn.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nn[t]=new vn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mf(t,e,n,i){var r=nn.hasOwnProperty(e)?nn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(y1(e,n,r,i)&&(n=null),i||r===null?v1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var nr=m1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zo=Symbol.for("react.element"),Fs=Symbol.for("react.portal"),ks=Symbol.for("react.fragment"),Sf=Symbol.for("react.strict_mode"),Md=Symbol.for("react.profiler"),Hg=Symbol.for("react.provider"),Gg=Symbol.for("react.context"),wf=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),wd=Symbol.for("react.suspense_list"),bf=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),Wg=Symbol.for("react.offscreen"),em=Symbol.iterator;function Da(t){return t===null||typeof t!="object"?null:(t=em&&t[em]||t["@@iterator"],typeof t=="function"?t:null)}var Pt=Object.assign,hu;function $a(t){if(hu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hu=e&&e[1]||""}return`
`+hu+t}var fu=!1;function pu(t,e){if(!t||fu)return"";fu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{fu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$a(t):""}function _1(t){switch(t.tag){case 5:return $a(t.type);case 16:return $a("Lazy");case 13:return $a("Suspense");case 19:return $a("SuspenseList");case 0:case 2:case 15:return t=pu(t.type,!1),t;case 11:return t=pu(t.type.render,!1),t;case 1:return t=pu(t.type,!0),t;default:return""}}function bd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ks:return"Fragment";case Fs:return"Portal";case Md:return"Profiler";case Sf:return"StrictMode";case Sd:return"Suspense";case wd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gg:return(t.displayName||"Context")+".Consumer";case Hg:return(t._context.displayName||"Context")+".Provider";case wf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bf:return e=t.displayName||null,e!==null?e:bd(t.type)||"Memo";case hr:e=t._payload,t=t._init;try{return bd(t(e))}catch{}}return null}function M1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bd(e);case 8:return e===Sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function S1(t){var e=Xg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qo(t){t._valueTracker||(t._valueTracker=S1(t))}function qg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Xg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function lc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ed(t,e){var n=e.checked;return Pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function tm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $g(t,e){e=e.checked,e!=null&&Mf(t,"checked",e,!1)}function Td(t,e){$g(t,e);var n=Rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cd(t,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function nm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cd(t,e,n){(e!=="number"||lc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ya=Array.isArray;function Ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ad(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function im(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Ya(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rr(n)}}function Yg(t,e){var n=Rr(e.value),i=Rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function rm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Kg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Kg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Jo,Zg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Jo=Jo||document.createElement("div"),Jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Jo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var no={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w1=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(t){w1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),no[e]=no[t]})});function Qg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||no.hasOwnProperty(t)&&no[t]?(""+e).trim():e+"px"}function Jg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Qg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var b1=Pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pd(t,e){if(e){if(b1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Nd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dd=null;function Ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Id=null,Zs=null,Qs=null;function sm(t){if(t=zo(t)){if(typeof Id!="function")throw Error(se(280));var e=t.stateNode;e&&(e=$c(e),Id(t.stateNode,t.type,e))}}function ev(t){Zs?Qs?Qs.push(t):Qs=[t]:Zs=t}function tv(){if(Zs){var t=Zs,e=Qs;if(Qs=Zs=null,sm(t),e)for(t=0;t<e.length;t++)sm(e[t])}}function nv(t,e){return t(e)}function iv(){}var mu=!1;function rv(t,e,n){if(mu)return t(e,n);mu=!0;try{return nv(t,e,n)}finally{mu=!1,(Zs!==null||Qs!==null)&&(iv(),tv())}}function yo(t,e){var n=t.stateNode;if(n===null)return null;var i=$c(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Ld=!1;if(Zi)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){Ld=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{Ld=!1}function E1(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var io=!1,cc=null,uc=!1,Ud=null,T1={onError:function(t){io=!0,cc=t}};function C1(t,e,n,i,r,s,a,o,l){io=!1,cc=null,E1.apply(T1,arguments)}function A1(t,e,n,i,r,s,a,o,l){if(C1.apply(this,arguments),io){if(io){var c=cc;io=!1,cc=null}else throw Error(se(198));uc||(uc=!0,Ud=c)}}function gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function am(t){if(gs(t)!==t)throw Error(se(188))}function R1(t){var e=t.alternate;if(!e){if(e=gs(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return am(r),t;if(s===i)return am(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function av(t){return t=R1(t),t!==null?ov(t):null}function ov(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ov(t);if(e!==null)return e;t=t.sibling}return null}var lv=On.unstable_scheduleCallback,om=On.unstable_cancelCallback,P1=On.unstable_shouldYield,N1=On.unstable_requestPaint,Lt=On.unstable_now,D1=On.unstable_getCurrentPriorityLevel,Tf=On.unstable_ImmediatePriority,cv=On.unstable_UserBlockingPriority,dc=On.unstable_NormalPriority,I1=On.unstable_LowPriority,uv=On.unstable_IdlePriority,Gc=null,Ei=null;function L1(t){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(Gc,t,void 0,(t.current.flags&128)===128)}catch{}}var fi=Math.clz32?Math.clz32:k1,U1=Math.log,F1=Math.LN2;function k1(t){return t>>>=0,t===0?32:31-(U1(t)/F1|0)|0}var el=64,tl=4194304;function Ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ka(o):(s&=a,s!==0&&(i=Ka(s)))}else a=n&~r,a!==0?i=Ka(a):s!==0&&(i=Ka(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-fi(e),r=1<<n,i|=t[n],e&=~r;return i}function O1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function B1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-fi(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=O1(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Fd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dv(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fi(e),t[e]=n}function z1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-fi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Cf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-fi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ht=0;function hv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var fv,Af,pv,mv,gv,kd=!1,nl=[],_r=null,Mr=null,Sr=null,_o=new Map,Mo=new Map,pr=[],j1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lm(t,e){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":_o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(e.pointerId)}}function La(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=zo(e),e!==null&&Af(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function V1(t,e,n,i,r){switch(e){case"focusin":return _r=La(_r,t,e,n,i,r),!0;case"dragenter":return Mr=La(Mr,t,e,n,i,r),!0;case"mouseover":return Sr=La(Sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return _o.set(s,La(_o.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Mo.set(s,La(Mo.get(s)||null,t,e,n,i,r)),!0}return!1}function vv(t){var e=Jr(t.target);if(e!==null){var n=gs(e);if(n!==null){if(e=n.tag,e===13){if(e=sv(n),e!==null){t.blockedOn=e,gv(t.priority,function(){pv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Dd=i,n.target.dispatchEvent(i),Dd=null}else return e=zo(n),e!==null&&Af(e),t.blockedOn=n,!1;e.shift()}return!0}function cm(t,e,n){jl(t)&&n.delete(e)}function H1(){kd=!1,_r!==null&&jl(_r)&&(_r=null),Mr!==null&&jl(Mr)&&(Mr=null),Sr!==null&&jl(Sr)&&(Sr=null),_o.forEach(cm),Mo.forEach(cm)}function Ua(t,e){t.blockedOn===e&&(t.blockedOn=null,kd||(kd=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,H1)))}function So(t){function e(r){return Ua(r,t)}if(0<nl.length){Ua(nl[0],t);for(var n=1;n<nl.length;n++){var i=nl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(_r!==null&&Ua(_r,t),Mr!==null&&Ua(Mr,t),Sr!==null&&Ua(Sr,t),_o.forEach(e),Mo.forEach(e),n=0;n<pr.length;n++)i=pr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)vv(n),n.blockedOn===null&&pr.shift()}var Js=nr.ReactCurrentBatchConfig,fc=!0;function G1(t,e,n,i){var r=ht,s=Js.transition;Js.transition=null;try{ht=1,Rf(t,e,n,i)}finally{ht=r,Js.transition=s}}function W1(t,e,n,i){var r=ht,s=Js.transition;Js.transition=null;try{ht=4,Rf(t,e,n,i)}finally{ht=r,Js.transition=s}}function Rf(t,e,n,i){if(fc){var r=Od(t,e,n,i);if(r===null)Tu(t,e,i,pc,n),lm(t,i);else if(V1(r,t,e,n,i))i.stopPropagation();else if(lm(t,i),e&4&&-1<j1.indexOf(t)){for(;r!==null;){var s=zo(r);if(s!==null&&fv(s),s=Od(t,e,n,i),s===null&&Tu(t,e,i,pc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Tu(t,e,i,null,n)}}var pc=null;function Od(t,e,n,i){if(pc=null,t=Ef(i),t=Jr(t),t!==null)if(e=gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pc=t,null}function xv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D1()){case Tf:return 1;case cv:return 4;case dc:case I1:return 16;case uv:return 536870912;default:return 16}default:return 16}}var vr=null,Pf=null,Vl=null;function yv(){if(Vl)return Vl;var t,e=Pf,n=e.length,i,r="value"in vr?vr.value:vr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Vl=r.slice(t,1<i?1-i:void 0)}function Hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function il(){return!0}function um(){return!1}function zn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?il:um,this.isPropagationStopped=um,this}return Pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),e}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nf=zn(ba),Bo=Pt({},ba,{view:0,detail:0}),X1=zn(Bo),vu,xu,Fa,Wc=Pt({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Df,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fa&&(Fa&&t.type==="mousemove"?(vu=t.screenX-Fa.screenX,xu=t.screenY-Fa.screenY):xu=vu=0,Fa=t),vu)},movementY:function(t){return"movementY"in t?t.movementY:xu}}),dm=zn(Wc),q1=Pt({},Wc,{dataTransfer:0}),$1=zn(q1),Y1=Pt({},Bo,{relatedTarget:0}),yu=zn(Y1),K1=Pt({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),Z1=zn(K1),Q1=Pt({},ba,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),J1=zn(Q1),eM=Pt({},ba,{data:0}),hm=zn(eM),tM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iM[t])?!!e[t]:!1}function Df(){return rM}var sM=Pt({},Bo,{key:function(t){if(t.key){var e=tM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Df,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),aM=zn(sM),oM=Pt({},Wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fm=zn(oM),lM=Pt({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Df}),cM=zn(lM),uM=Pt({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),dM=zn(uM),hM=Pt({},Wc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fM=zn(hM),pM=[9,13,27,32],If=Zi&&"CompositionEvent"in window,ro=null;Zi&&"documentMode"in document&&(ro=document.documentMode);var mM=Zi&&"TextEvent"in window&&!ro,_v=Zi&&(!If||ro&&8<ro&&11>=ro),pm=" ",mm=!1;function Mv(t,e){switch(t){case"keyup":return pM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function gM(t,e){switch(t){case"compositionend":return Sv(e);case"keypress":return e.which!==32?null:(mm=!0,pm);case"textInput":return t=e.data,t===pm&&mm?null:t;default:return null}}function vM(t,e){if(Os)return t==="compositionend"||!If&&Mv(t,e)?(t=yv(),Vl=Pf=vr=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _v&&e.locale!=="ko"?null:e.data;default:return null}}var xM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xM[t.type]:e==="textarea"}function wv(t,e,n,i){ev(i),e=mc(e,"onChange"),0<e.length&&(n=new Nf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var so=null,wo=null;function yM(t){Lv(t,0)}function Xc(t){var e=js(t);if(qg(e))return t}function _M(t,e){if(t==="change")return e}var bv=!1;if(Zi){var _u;if(Zi){var Mu="oninput"in document;if(!Mu){var vm=document.createElement("div");vm.setAttribute("oninput","return;"),Mu=typeof vm.oninput=="function"}_u=Mu}else _u=!1;bv=_u&&(!document.documentMode||9<document.documentMode)}function xm(){so&&(so.detachEvent("onpropertychange",Ev),wo=so=null)}function Ev(t){if(t.propertyName==="value"&&Xc(wo)){var e=[];wv(e,wo,t,Ef(t)),rv(yM,e)}}function MM(t,e,n){t==="focusin"?(xm(),so=e,wo=n,so.attachEvent("onpropertychange",Ev)):t==="focusout"&&xm()}function SM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xc(wo)}function wM(t,e){if(t==="click")return Xc(e)}function bM(t,e){if(t==="input"||t==="change")return Xc(e)}function EM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gi=typeof Object.is=="function"?Object.is:EM;function bo(t,e){if(gi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!_d.call(e,r)||!gi(t[r],e[r]))return!1}return!0}function ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _m(t,e){var n=ym(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ym(n)}}function Tv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cv(){for(var t=window,e=lc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=lc(t.document)}return e}function Lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function TM(t){var e=Cv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tv(n.ownerDocument.documentElement,n)){if(i!==null&&Lf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=_m(n,s);var a=_m(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CM=Zi&&"documentMode"in document&&11>=document.documentMode,Bs=null,Bd=null,ao=null,zd=!1;function Mm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zd||Bs==null||Bs!==lc(i)||(i=Bs,"selectionStart"in i&&Lf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ao&&bo(ao,i)||(ao=i,i=mc(Bd,"onSelect"),0<i.length&&(e=new Nf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Bs)))}function rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zs={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},Su={},Av={};Zi&&(Av=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function qc(t){if(Su[t])return Su[t];if(!zs[t])return t;var e=zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Av)return Su[t]=e[n];return t}var Rv=qc("animationend"),Pv=qc("animationiteration"),Nv=qc("animationstart"),Dv=qc("transitionend"),Iv=new Map,Sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){Iv.set(t,e),ms(e,[t])}for(var wu=0;wu<Sm.length;wu++){var bu=Sm[wu],AM=bu.toLowerCase(),RM=bu[0].toUpperCase()+bu.slice(1);Dr(AM,"on"+RM)}Dr(Rv,"onAnimationEnd");Dr(Pv,"onAnimationIteration");Dr(Nv,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(Dv,"onTransitionEnd");aa("onMouseEnter",["mouseout","mouseover"]);aa("onMouseLeave",["mouseout","mouseover"]);aa("onPointerEnter",["pointerout","pointerover"]);aa("onPointerLeave",["pointerout","pointerover"]);ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Za));function wm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,A1(i,e,void 0,t),t.currentTarget=null}function Lv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;wm(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;wm(r,o,c),s=l}}}if(uc)throw t=Ud,uc=!1,Ud=null,t}function Mt(t,e){var n=e[Wd];n===void 0&&(n=e[Wd]=new Set);var i=t+"__bubble";n.has(i)||(Uv(e,t,2,!1),n.add(i))}function Eu(t,e,n){var i=0;e&&(i|=4),Uv(n,t,i,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function Eo(t){if(!t[sl]){t[sl]=!0,Vg.forEach(function(n){n!=="selectionchange"&&(PM.has(n)||Eu(n,!1,t),Eu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,Eu("selectionchange",!1,e))}}function Uv(t,e,n,i){switch(xv(e)){case 1:var r=G1;break;case 4:r=W1;break;default:r=Rf}n=r.bind(null,e,n,t),r=void 0,!Ld||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Tu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Jr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}rv(function(){var c=s,f=Ef(n),p=[];e:{var h=Iv.get(t);if(h!==void 0){var m=Nf,y=t;switch(t){case"keypress":if(Hl(n)===0)break e;case"keydown":case"keyup":m=aM;break;case"focusin":y="focus",m=yu;break;case"focusout":y="blur",m=yu;break;case"beforeblur":case"afterblur":m=yu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=$1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=cM;break;case Rv:case Pv:case Nv:m=Z1;break;case Dv:m=dM;break;case"scroll":m=X1;break;case"wheel":m=fM;break;case"copy":case"cut":case"paste":m=J1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=fm}var v=(e&4)!==0,g=!v&&t==="scroll",u=v?h!==null?h+"Capture":null:h;v=[];for(var x=c,_;x!==null;){_=x;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,u!==null&&(M=yo(x,u),M!=null&&v.push(To(x,M,_)))),g)break;x=x.return}0<v.length&&(h=new m(h,y,null,n,f),p.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Dd&&(y=n.relatedTarget||n.fromElement)&&(Jr(y)||y[Qi]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=c,y=y?Jr(y):null,y!==null&&(g=gs(y),y!==g||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=c),m!==y)){if(v=dm,M="onMouseLeave",u="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(v=fm,M="onPointerLeave",u="onPointerEnter",x="pointer"),g=m==null?h:js(m),_=y==null?h:js(y),h=new v(M,x+"leave",m,n,f),h.target=g,h.relatedTarget=_,M=null,Jr(f)===c&&(v=new v(u,x+"enter",y,n,f),v.target=_,v.relatedTarget=g,M=v),g=M,m&&y)t:{for(v=m,u=y,x=0,_=v;_;_=ys(_))x++;for(_=0,M=u;M;M=ys(M))_++;for(;0<x-_;)v=ys(v),x--;for(;0<_-x;)u=ys(u),_--;for(;x--;){if(v===u||u!==null&&v===u.alternate)break t;v=ys(v),u=ys(u)}v=null}else v=null;m!==null&&bm(p,h,m,v,!1),y!==null&&g!==null&&bm(p,g,y,v,!0)}}e:{if(h=c?js(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var A=_M;else if(gm(h))if(bv)A=bM;else{A=SM;var T=MM}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=wM);if(A&&(A=A(t,c))){wv(p,A,n,f);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Cd(h,"number",h.value)}switch(T=c?js(c):window,t){case"focusin":(gm(T)||T.contentEditable==="true")&&(Bs=T,Bd=c,ao=null);break;case"focusout":ao=Bd=Bs=null;break;case"mousedown":zd=!0;break;case"contextmenu":case"mouseup":case"dragend":zd=!1,Mm(p,n,f);break;case"selectionchange":if(CM)break;case"keydown":case"keyup":Mm(p,n,f)}var C;if(If)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Os?Mv(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(_v&&n.locale!=="ko"&&(Os||R!=="onCompositionStart"?R==="onCompositionEnd"&&Os&&(C=yv()):(vr=f,Pf="value"in vr?vr.value:vr.textContent,Os=!0)),T=mc(c,R),0<T.length&&(R=new hm(R,t,null,n,f),p.push({event:R,listeners:T}),C?R.data=C:(C=Sv(n),C!==null&&(R.data=C)))),(C=mM?gM(t,n):vM(t,n))&&(c=mc(c,"onBeforeInput"),0<c.length&&(f=new hm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=C))}Lv(p,e)})}function To(t,e,n){return{instance:t,listener:e,currentTarget:n}}function mc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=yo(t,n),s!=null&&i.unshift(To(t,s,r)),s=yo(t,e),s!=null&&i.push(To(t,s,r))),t=t.return}return i}function ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bm(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=yo(n,s),l!=null&&a.unshift(To(n,l,o))):r||(l=yo(n,s),l!=null&&a.push(To(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var NM=/\r\n?/g,DM=/\u0000|\uFFFD/g;function Em(t){return(typeof t=="string"?t:""+t).replace(NM,`
`).replace(DM,"")}function al(t,e,n){if(e=Em(e),Em(t)!==e&&n)throw Error(se(425))}function gc(){}var jd=null,Vd=null;function Hd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gd=typeof setTimeout=="function"?setTimeout:void 0,IM=typeof clearTimeout=="function"?clearTimeout:void 0,Tm=typeof Promise=="function"?Promise:void 0,LM=typeof queueMicrotask=="function"?queueMicrotask:typeof Tm<"u"?function(t){return Tm.resolve(null).then(t).catch(UM)}:Gd;function UM(t){setTimeout(function(){throw t})}function Cu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),So(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);So(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ea=Math.random().toString(36).slice(2),wi="__reactFiber$"+Ea,Co="__reactProps$"+Ea,Qi="__reactContainer$"+Ea,Wd="__reactEvents$"+Ea,FM="__reactListeners$"+Ea,kM="__reactHandles$"+Ea;function Jr(t){var e=t[wi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qi]||n[wi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cm(t);t!==null;){if(n=t[wi])return n;t=Cm(t)}return e}t=n,n=t.parentNode}return null}function zo(t){return t=t[wi]||t[Qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function $c(t){return t[Co]||null}var Xd=[],Vs=-1;function Ir(t){return{current:t}}function St(t){0>Vs||(t.current=Xd[Vs],Xd[Vs]=null,Vs--)}function vt(t,e){Vs++,Xd[Vs]=t.current,t.current=e}var Pr={},un=Ir(Pr),wn=Ir(!1),ls=Pr;function oa(t,e){var n=t.type.contextTypes;if(!n)return Pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function bn(t){return t=t.childContextTypes,t!=null}function vc(){St(wn),St(un)}function Am(t,e,n){if(un.current!==Pr)throw Error(se(168));vt(un,e),vt(wn,n)}function Fv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,M1(t)||"Unknown",r));return Pt({},n,i)}function xc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,ls=un.current,vt(un,t),vt(wn,wn.current),!0}function Rm(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Fv(t,e,ls),i.__reactInternalMemoizedMergedChildContext=t,St(wn),St(un),vt(un,t)):St(wn),vt(wn,n)}var ji=null,Yc=!1,Au=!1;function kv(t){ji===null?ji=[t]:ji.push(t)}function OM(t){Yc=!0,kv(t)}function Lr(){if(!Au&&ji!==null){Au=!0;var t=0,e=ht;try{var n=ji;for(ht=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ji=null,Yc=!1}catch(r){throw ji!==null&&(ji=ji.slice(t+1)),lv(Tf,Lr),r}finally{ht=e,Au=!1}}return null}var Hs=[],Gs=0,yc=null,_c=0,Xn=[],qn=0,cs=null,Vi=1,Hi="";function Hr(t,e){Hs[Gs++]=_c,Hs[Gs++]=yc,yc=t,_c=e}function Ov(t,e,n){Xn[qn++]=Vi,Xn[qn++]=Hi,Xn[qn++]=cs,cs=t;var i=Vi;t=Hi;var r=32-fi(i)-1;i&=~(1<<r),n+=1;var s=32-fi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Vi=1<<32-fi(e)+r|n<<r|i,Hi=s+t}else Vi=1<<s|n<<r|i,Hi=t}function Uf(t){t.return!==null&&(Hr(t,1),Ov(t,1,0))}function Ff(t){for(;t===yc;)yc=Hs[--Gs],Hs[Gs]=null,_c=Hs[--Gs],Hs[Gs]=null;for(;t===cs;)cs=Xn[--qn],Xn[qn]=null,Hi=Xn[--qn],Xn[qn]=null,Vi=Xn[--qn],Xn[qn]=null}var kn=null,Un=null,Et=!1,ci=null;function Bv(t,e){var n=$n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kn=t,Un=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kn=t,Un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=cs!==null?{id:Vi,overflow:Hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kn=t,Un=null,!0):!1;default:return!1}}function qd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $d(t){if(Et){var e=Un;if(e){var n=e;if(!Pm(t,e)){if(qd(t))throw Error(se(418));e=wr(n.nextSibling);var i=kn;e&&Pm(t,e)?Bv(i,n):(t.flags=t.flags&-4097|2,Et=!1,kn=t)}}else{if(qd(t))throw Error(se(418));t.flags=t.flags&-4097|2,Et=!1,kn=t}}}function Nm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function ol(t){if(t!==kn)return!1;if(!Et)return Nm(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hd(t.type,t.memoizedProps)),e&&(e=Un)){if(qd(t))throw zv(),Error(se(418));for(;e;)Bv(t,e),e=wr(e.nextSibling)}if(Nm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Un=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Un=null}}else Un=kn?wr(t.stateNode.nextSibling):null;return!0}function zv(){for(var t=Un;t;)t=wr(t.nextSibling)}function la(){Un=kn=null,Et=!1}function kf(t){ci===null?ci=[t]:ci.push(t)}var BM=nr.ReactCurrentBatchConfig;function ka(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dm(t){var e=t._init;return e(t._payload)}function jv(t){function e(u,x){if(t){var _=u.deletions;_===null?(u.deletions=[x],u.flags|=16):_.push(x)}}function n(u,x){if(!t)return null;for(;x!==null;)e(u,x),x=x.sibling;return null}function i(u,x){for(u=new Map;x!==null;)x.key!==null?u.set(x.key,x):u.set(x.index,x),x=x.sibling;return u}function r(u,x){return u=Cr(u,x),u.index=0,u.sibling=null,u}function s(u,x,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<x?(u.flags|=2,x):_):(u.flags|=2,x)):(u.flags|=1048576,x)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,x,_,M){return x===null||x.tag!==6?(x=Uu(_,u.mode,M),x.return=u,x):(x=r(x,_),x.return=u,x)}function l(u,x,_,M){var A=_.type;return A===ks?f(u,x,_.props.children,M,_.key):x!==null&&(x.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===hr&&Dm(A)===x.type)?(M=r(x,_.props),M.ref=ka(u,x,_),M.return=u,M):(M=Kl(_.type,_.key,_.props,null,u.mode,M),M.ref=ka(u,x,_),M.return=u,M)}function c(u,x,_,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=Fu(_,u.mode,M),x.return=u,x):(x=r(x,_.children||[]),x.return=u,x)}function f(u,x,_,M,A){return x===null||x.tag!==7?(x=as(_,u.mode,M,A),x.return=u,x):(x=r(x,_),x.return=u,x)}function p(u,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Uu(""+x,u.mode,_),x.return=u,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zo:return _=Kl(x.type,x.key,x.props,null,u.mode,_),_.ref=ka(u,null,x),_.return=u,_;case Fs:return x=Fu(x,u.mode,_),x.return=u,x;case hr:var M=x._init;return p(u,M(x._payload),_)}if(Ya(x)||Da(x))return x=as(x,u.mode,_,null),x.return=u,x;ll(u,x)}return null}function h(u,x,_,M){var A=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:o(u,x,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Zo:return _.key===A?l(u,x,_,M):null;case Fs:return _.key===A?c(u,x,_,M):null;case hr:return A=_._init,h(u,x,A(_._payload),M)}if(Ya(_)||Da(_))return A!==null?null:f(u,x,_,M,null);ll(u,_)}return null}function m(u,x,_,M,A){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(_)||null,o(x,u,""+M,A);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Zo:return u=u.get(M.key===null?_:M.key)||null,l(x,u,M,A);case Fs:return u=u.get(M.key===null?_:M.key)||null,c(x,u,M,A);case hr:var T=M._init;return m(u,x,_,T(M._payload),A)}if(Ya(M)||Da(M))return u=u.get(_)||null,f(x,u,M,A,null);ll(x,M)}return null}function y(u,x,_,M){for(var A=null,T=null,C=x,R=x=0,w=null;C!==null&&R<_.length;R++){C.index>R?(w=C,C=null):w=C.sibling;var S=h(u,C,_[R],M);if(S===null){C===null&&(C=w);break}t&&C&&S.alternate===null&&e(u,C),x=s(S,x,R),T===null?A=S:T.sibling=S,T=S,C=w}if(R===_.length)return n(u,C),Et&&Hr(u,R),A;if(C===null){for(;R<_.length;R++)C=p(u,_[R],M),C!==null&&(x=s(C,x,R),T===null?A=C:T.sibling=C,T=C);return Et&&Hr(u,R),A}for(C=i(u,C);R<_.length;R++)w=m(C,u,R,_[R],M),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?R:w.key),x=s(w,x,R),T===null?A=w:T.sibling=w,T=w);return t&&C.forEach(function(N){return e(u,N)}),Et&&Hr(u,R),A}function v(u,x,_,M){var A=Da(_);if(typeof A!="function")throw Error(se(150));if(_=A.call(_),_==null)throw Error(se(151));for(var T=A=null,C=x,R=x=0,w=null,S=_.next();C!==null&&!S.done;R++,S=_.next()){C.index>R?(w=C,C=null):w=C.sibling;var N=h(u,C,S.value,M);if(N===null){C===null&&(C=w);break}t&&C&&N.alternate===null&&e(u,C),x=s(N,x,R),T===null?A=N:T.sibling=N,T=N,C=w}if(S.done)return n(u,C),Et&&Hr(u,R),A;if(C===null){for(;!S.done;R++,S=_.next())S=p(u,S.value,M),S!==null&&(x=s(S,x,R),T===null?A=S:T.sibling=S,T=S);return Et&&Hr(u,R),A}for(C=i(u,C);!S.done;R++,S=_.next())S=m(C,u,R,S.value,M),S!==null&&(t&&S.alternate!==null&&C.delete(S.key===null?R:S.key),x=s(S,x,R),T===null?A=S:T.sibling=S,T=S);return t&&C.forEach(function(V){return e(u,V)}),Et&&Hr(u,R),A}function g(u,x,_,M){if(typeof _=="object"&&_!==null&&_.type===ks&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Zo:e:{for(var A=_.key,T=x;T!==null;){if(T.key===A){if(A=_.type,A===ks){if(T.tag===7){n(u,T.sibling),x=r(T,_.props.children),x.return=u,u=x;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===hr&&Dm(A)===T.type){n(u,T.sibling),x=r(T,_.props),x.ref=ka(u,T,_),x.return=u,u=x;break e}n(u,T);break}else e(u,T);T=T.sibling}_.type===ks?(x=as(_.props.children,u.mode,M,_.key),x.return=u,u=x):(M=Kl(_.type,_.key,_.props,null,u.mode,M),M.ref=ka(u,x,_),M.return=u,u=M)}return a(u);case Fs:e:{for(T=_.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){n(u,x.sibling),x=r(x,_.children||[]),x.return=u,u=x;break e}else{n(u,x);break}else e(u,x);x=x.sibling}x=Fu(_,u.mode,M),x.return=u,u=x}return a(u);case hr:return T=_._init,g(u,x,T(_._payload),M)}if(Ya(_))return y(u,x,_,M);if(Da(_))return v(u,x,_,M);ll(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,x!==null&&x.tag===6?(n(u,x.sibling),x=r(x,_),x.return=u,u=x):(n(u,x),x=Uu(_,u.mode,M),x.return=u,u=x),a(u)):n(u,x)}return g}var ca=jv(!0),Vv=jv(!1),Mc=Ir(null),Sc=null,Ws=null,Of=null;function Bf(){Of=Ws=Sc=null}function zf(t){var e=Mc.current;St(Mc),t._currentValue=e}function Yd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ea(t,e){Sc=t,Of=Ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Sn=!0),t.firstContext=null)}function Qn(t){var e=t._currentValue;if(Of!==t)if(t={context:t,memoizedValue:e,next:null},Ws===null){if(Sc===null)throw Error(se(308));Ws=t,Sc.dependencies={lanes:0,firstContext:t}}else Ws=Ws.next=t;return e}var es=null;function jf(t){es===null?es=[t]:es.push(t)}function Hv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,jf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ji(t,i)}function Ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function Vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function br(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ji(t,n)}return r=i.interleaved,r===null?(e.next=e,jf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ji(t,n)}function Gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Cf(t,n)}}function Im(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wc(t,e,n,i){var r=t.updateQueue;fr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,f=c=l=null,o=s;do{var h=o.lane,m=o.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,v=o;switch(h=e,m=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){p=y.call(m,p,h);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(m,p,h):y,h==null)break e;p=Pt({},p,h);break e;case 2:fr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else m={eventTime:m,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=m,l=p):f=f.next=m,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ds|=a,t.lanes=a,t.memoizedState=p}}function Lm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var jo={},Ti=Ir(jo),Ao=Ir(jo),Ro=Ir(jo);function ts(t){if(t===jo)throw Error(se(174));return t}function Hf(t,e){switch(vt(Ro,e),vt(Ao,t),vt(Ti,jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rd(e,t)}St(Ti),vt(Ti,e)}function ua(){St(Ti),St(Ao),St(Ro)}function Wv(t){ts(Ro.current);var e=ts(Ti.current),n=Rd(e,t.type);e!==n&&(vt(Ao,t),vt(Ti,n))}function Gf(t){Ao.current===t&&(St(Ti),St(Ao))}var At=Ir(0);function bc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ru=[];function Wf(){for(var t=0;t<Ru.length;t++)Ru[t]._workInProgressVersionPrimary=null;Ru.length=0}var Wl=nr.ReactCurrentDispatcher,Pu=nr.ReactCurrentBatchConfig,us=0,Rt=null,Bt=null,$t=null,Ec=!1,oo=!1,Po=0,zM=0;function sn(){throw Error(se(321))}function Xf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gi(t[n],e[n]))return!1;return!0}function qf(t,e,n,i,r,s){if(us=s,Rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wl.current=t===null||t.memoizedState===null?GM:WM,t=n(i,r),oo){s=0;do{if(oo=!1,Po=0,25<=s)throw Error(se(301));s+=1,$t=Bt=null,e.updateQueue=null,Wl.current=XM,t=n(i,r)}while(oo)}if(Wl.current=Tc,e=Bt!==null&&Bt.next!==null,us=0,$t=Bt=Rt=null,Ec=!1,e)throw Error(se(300));return t}function $f(){var t=Po!==0;return Po=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?Rt.memoizedState=$t=t:$t=$t.next=t,$t}function Jn(){if(Bt===null){var t=Rt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=$t===null?Rt.memoizedState:$t.next;if(e!==null)$t=e,Bt=t;else{if(t===null)throw Error(se(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},$t===null?Rt.memoizedState=$t=t:$t=$t.next=t}return $t}function No(t,e){return typeof e=="function"?e(t):e}function Nu(t){var e=Jn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((us&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,Rt.lanes|=f,ds|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,gi(i,e.memoizedState)||(Sn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Rt.lanes|=s,ds|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Du(t){var e=Jn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);gi(s,e.memoizedState)||(Sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Xv(){}function qv(t,e){var n=Rt,i=Jn(),r=e(),s=!gi(i.memoizedState,r);if(s&&(i.memoizedState=r,Sn=!0),i=i.queue,Yf(Kv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||$t!==null&&$t.memoizedState.tag&1){if(n.flags|=2048,Do(9,Yv.bind(null,n,i,r,e),void 0,null),Kt===null)throw Error(se(349));us&30||$v(n,e,r)}return r}function $v(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Yv(t,e,n,i){e.value=n,e.getSnapshot=i,Zv(e)&&Qv(t)}function Kv(t,e,n){return n(function(){Zv(e)&&Qv(t)})}function Zv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gi(t,n)}catch{return!0}}function Qv(t){var e=Ji(t,1);e!==null&&pi(e,t,1,-1)}function Um(t){var e=_i();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:t},e.queue=t,t=t.dispatch=HM.bind(null,Rt,t),[e.memoizedState,t]}function Do(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Jv(){return Jn().memoizedState}function Xl(t,e,n,i){var r=_i();Rt.flags|=t,r.memoizedState=Do(1|e,n,void 0,i===void 0?null:i)}function Kc(t,e,n,i){var r=Jn();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var a=Bt.memoizedState;if(s=a.destroy,i!==null&&Xf(i,a.deps)){r.memoizedState=Do(e,n,s,i);return}}Rt.flags|=t,r.memoizedState=Do(1|e,n,s,i)}function Fm(t,e){return Xl(8390656,8,t,e)}function Yf(t,e){return Kc(2048,8,t,e)}function ex(t,e){return Kc(4,2,t,e)}function tx(t,e){return Kc(4,4,t,e)}function nx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ix(t,e,n){return n=n!=null?n.concat([t]):null,Kc(4,4,nx.bind(null,e,t),n)}function Kf(){}function rx(t,e){var n=Jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function sx(t,e){var n=Jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ax(t,e,n){return us&21?(gi(n,e)||(n=dv(),Rt.lanes|=n,ds|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Sn=!0),t.memoizedState=n)}function jM(t,e){var n=ht;ht=n!==0&&4>n?n:4,t(!0);var i=Pu.transition;Pu.transition={};try{t(!1),e()}finally{ht=n,Pu.transition=i}}function ox(){return Jn().memoizedState}function VM(t,e,n){var i=Tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},lx(t))cx(e,n);else if(n=Hv(t,e,n,i),n!==null){var r=pn();pi(n,t,i,r),ux(n,e,i)}}function HM(t,e,n){var i=Tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(lx(t))cx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,gi(o,a)){var l=e.interleaved;l===null?(r.next=r,jf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Hv(t,e,r,i),n!==null&&(r=pn(),pi(n,t,i,r),ux(n,e,i))}}function lx(t){var e=t.alternate;return t===Rt||e!==null&&e===Rt}function cx(t,e){oo=Ec=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ux(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Cf(t,n)}}var Tc={readContext:Qn,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},GM={readContext:Qn,useCallback:function(t,e){return _i().memoizedState=[t,e===void 0?null:e],t},useContext:Qn,useEffect:Fm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4194308,4,nx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xl(4,2,t,e)},useMemo:function(t,e){var n=_i();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=_i();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=VM.bind(null,Rt,t),[i.memoizedState,t]},useRef:function(t){var e=_i();return t={current:t},e.memoizedState=t},useState:Um,useDebugValue:Kf,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=Um(!1),e=t[0];return t=jM.bind(null,t[1]),_i().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Rt,r=_i();if(Et){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Kt===null)throw Error(se(349));us&30||$v(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Fm(Kv.bind(null,i,s,t),[t]),i.flags|=2048,Do(9,Yv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=_i(),e=Kt.identifierPrefix;if(Et){var n=Hi,i=Vi;n=(i&~(1<<32-fi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Po++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},WM={readContext:Qn,useCallback:rx,useContext:Qn,useEffect:Yf,useImperativeHandle:ix,useInsertionEffect:ex,useLayoutEffect:tx,useMemo:sx,useReducer:Nu,useRef:Jv,useState:function(){return Nu(No)},useDebugValue:Kf,useDeferredValue:function(t){var e=Jn();return ax(e,Bt.memoizedState,t)},useTransition:function(){var t=Nu(No)[0],e=Jn().memoizedState;return[t,e]},useMutableSource:Xv,useSyncExternalStore:qv,useId:ox,unstable_isNewReconciler:!1},XM={readContext:Qn,useCallback:rx,useContext:Qn,useEffect:Yf,useImperativeHandle:ix,useInsertionEffect:ex,useLayoutEffect:tx,useMemo:sx,useReducer:Du,useRef:Jv,useState:function(){return Du(No)},useDebugValue:Kf,useDeferredValue:function(t){var e=Jn();return Bt===null?e.memoizedState=t:ax(e,Bt.memoizedState,t)},useTransition:function(){var t=Du(No)[0],e=Jn().memoizedState;return[t,e]},useMutableSource:Xv,useSyncExternalStore:qv,useId:ox,unstable_isNewReconciler:!1};function ai(t,e){if(t&&t.defaultProps){e=Pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Kd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zc={isMounted:function(t){return(t=t._reactInternals)?gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=pn(),r=Tr(t),s=Xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(pi(e,t,r,i),Gl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=pn(),r=Tr(t),s=Xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(pi(e,t,r,i),Gl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pn(),i=Tr(t),r=Xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=br(t,r,i),e!==null&&(pi(e,t,i,n),Gl(e,t,i))}};function km(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!bo(n,i)||!bo(r,s):!0}function dx(t,e,n){var i=!1,r=Pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Qn(s):(r=bn(e)?ls:un.current,i=e.contextTypes,s=(i=i!=null)?oa(t,r):Pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Om(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Zc.enqueueReplaceState(e,e.state,null)}function Zd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Vf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Qn(s):(s=bn(e)?ls:un.current,r.context=oa(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Zc.enqueueReplaceState(r,r.state,null),wc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function da(t,e){try{var n="",i=e;do n+=_1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Iu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qM=typeof WeakMap=="function"?WeakMap:Map;function hx(t,e,n){n=Xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ac||(Ac=!0,lh=i),Qd(t,e)},n}function fx(t,e,n){n=Xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Qd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qd(t,e),typeof i!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Bm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new qM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=oS.bind(null,t,e,n),e.then(t,t))}function zm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xi(-1,1),e.tag=2,br(n,e,1))),n.lanes|=1),t)}var $M=nr.ReactCurrentOwner,Sn=!1;function hn(t,e,n,i){e.child=t===null?Vv(e,null,n,i):ca(e,t.child,n,i)}function Vm(t,e,n,i,r){n=n.render;var s=e.ref;return ea(e,r),i=qf(t,e,n,i,s,r),n=$f(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(Et&&n&&Uf(e),e.flags|=1,hn(t,e,i,r),e.child)}function Hm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!rp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,px(t,e,s,i,r)):(t=Kl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:bo,n(a,i)&&t.ref===e.ref)return er(t,e,r)}return e.flags|=1,t=Cr(s,i),t.ref=e.ref,t.return=e,e.child=t}function px(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(bo(s,i)&&t.ref===e.ref)if(Sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Sn=!0);else return e.lanes=t.lanes,er(t,e,r)}return Jd(t,e,n,i,r)}function mx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(qs,Nn),Nn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,vt(qs,Nn),Nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,vt(qs,Nn),Nn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,vt(qs,Nn),Nn|=i;return hn(t,e,r,n),e.child}function gx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jd(t,e,n,i,r){var s=bn(n)?ls:un.current;return s=oa(e,s),ea(e,r),n=qf(t,e,n,i,s,r),i=$f(),t!==null&&!Sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(Et&&i&&Uf(e),e.flags|=1,hn(t,e,n,r),e.child)}function Gm(t,e,n,i,r){if(bn(n)){var s=!0;xc(e)}else s=!1;if(ea(e,r),e.stateNode===null)ql(t,e),dx(e,n,i),Zd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Qn(c):(c=bn(n)?ls:un.current,c=oa(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Om(e,a,i,c),fr=!1;var h=e.memoizedState;a.state=h,wc(e,i,a,r),l=e.memoizedState,o!==i||h!==l||wn.current||fr?(typeof f=="function"&&(Kd(e,n,f,i),l=e.memoizedState),(o=fr||km(e,n,o,i,h,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Gv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:ai(e.type,o),a.props=c,p=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Qn(l):(l=bn(n)?ls:un.current,l=oa(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||h!==l)&&Om(e,a,i,l),fr=!1,h=e.memoizedState,a.state=h,wc(e,i,a,r);var y=e.memoizedState;o!==p||h!==y||wn.current||fr?(typeof m=="function"&&(Kd(e,n,m,i),y=e.memoizedState),(c=fr||km(e,n,c,i,h,y,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,y,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),a.props=i,a.state=y,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return eh(t,e,n,i,s,r)}function eh(t,e,n,i,r,s){gx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Rm(e,n,!1),er(t,e,s);i=e.stateNode,$M.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ca(e,t.child,null,s),e.child=ca(e,null,o,s)):hn(t,e,o,s),e.memoizedState=i.state,r&&Rm(e,n,!0),e.child}function vx(t){var e=t.stateNode;e.pendingContext?Am(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Am(t,e.context,!1),Hf(t,e.containerInfo)}function Wm(t,e,n,i,r){return la(),kf(r),e.flags|=256,hn(t,e,n,i),e.child}var th={dehydrated:null,treeContext:null,retryLane:0};function nh(t){return{baseLanes:t,cachePool:null,transitions:null}}function xx(t,e,n){var i=e.pendingProps,r=At.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),vt(At,r&1),t===null)return $d(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=eu(a,i,0,null),t=as(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nh(n),e.memoizedState=th,t):Zf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return YM(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Cr(o,s):(s=as(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?nh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=th,i}return s=t.child,t=s.sibling,i=Cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Zf(t,e){return e=eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cl(t,e,n,i){return i!==null&&kf(i),ca(e,t.child,null,n),t=Zf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YM(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Iu(Error(se(422))),cl(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=eu({mode:"visible",children:i.children},r,0,null),s=as(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ca(e,t.child,null,a),e.child.memoizedState=nh(a),e.memoizedState=th,s);if(!(e.mode&1))return cl(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=Iu(s,i,void 0),cl(t,e,a,i)}if(o=(a&t.childLanes)!==0,Sn||o){if(i=Kt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ji(t,r),pi(i,t,r,-1))}return ip(),i=Iu(Error(se(421))),cl(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=lS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Un=wr(r.nextSibling),kn=e,Et=!0,ci=null,t!==null&&(Xn[qn++]=Vi,Xn[qn++]=Hi,Xn[qn++]=cs,Vi=t.id,Hi=t.overflow,cs=e),e=Zf(e,i.children),e.flags|=4096,e)}function Xm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Yd(t.return,e,n)}function Lu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function yx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(hn(t,e,i.children,n),i=At.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xm(t,n,e);else if(t.tag===19)Xm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(vt(At,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&bc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Lu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&bc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Lu(e,!0,n,null,s);break;case"together":Lu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ql(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ds|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function KM(t,e,n){switch(e.tag){case 3:vx(e),la();break;case 5:Wv(e);break;case 1:bn(e.type)&&xc(e);break;case 4:Hf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;vt(Mc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(vt(At,At.current&1),e.flags|=128,null):n&e.child.childLanes?xx(t,e,n):(vt(At,At.current&1),t=er(t,e,n),t!==null?t.sibling:null);vt(At,At.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return yx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vt(At,At.current),i)break;return null;case 22:case 23:return e.lanes=0,mx(t,e,n)}return er(t,e,n)}var _x,ih,Mx,Sx;_x=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ih=function(){};Mx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ts(Ti.current);var s=null;switch(n){case"input":r=Ed(t,r),i=Ed(t,i),s=[];break;case"select":r=Pt({},r,{value:void 0}),i=Pt({},i,{value:void 0}),s=[];break;case"textarea":r=Ad(t,r),i=Ad(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=gc)}Pd(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Mt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Sx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Oa(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function an(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ZM(t,e,n){var i=e.pendingProps;switch(Ff(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(e),null;case 1:return bn(e.type)&&vc(),an(e),null;case 3:return i=e.stateNode,ua(),St(wn),St(un),Wf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ol(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ci!==null&&(dh(ci),ci=null))),ih(t,e),an(e),null;case 5:Gf(e);var r=ts(Ro.current);if(n=e.type,t!==null&&e.stateNode!=null)Mx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return an(e),null}if(t=ts(Ti.current),ol(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[wi]=e,i[Co]=s,t=(e.mode&1)!==0,n){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(r=0;r<Za.length;r++)Mt(Za[r],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":tm(i,s),Mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Mt("invalid",i);break;case"textarea":im(i,s),Mt("invalid",i)}Pd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&al(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&al(i.textContent,o,t),r=["children",""+o]):vo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Mt("scroll",i)}switch(n){case"input":Qo(i),nm(i,s,!0);break;case"textarea":Qo(i),rm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=gc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Kg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[wi]=e,t[Co]=i,_x(t,e,!1,!1),e.stateNode=t;e:{switch(a=Nd(n,i),n){case"dialog":Mt("cancel",t),Mt("close",t),r=i;break;case"iframe":case"object":case"embed":Mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Za.length;r++)Mt(Za[r],t);r=i;break;case"source":Mt("error",t),r=i;break;case"img":case"image":case"link":Mt("error",t),Mt("load",t),r=i;break;case"details":Mt("toggle",t),r=i;break;case"input":tm(t,i),r=Ed(t,i),Mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Pt({},i,{value:void 0}),Mt("invalid",t);break;case"textarea":im(t,i),r=Ad(t,i),Mt("invalid",t);break;default:r=i}Pd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Jg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xo(t,l):typeof l=="number"&&xo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Mt("scroll",t):l!=null&&Mf(t,s,l,a))}switch(n){case"input":Qo(t),nm(t,i,!1);break;case"textarea":Qo(t),rm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Rr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=gc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return an(e),null;case 6:if(t&&e.stateNode!=null)Sx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=ts(Ro.current),ts(Ti.current),ol(e)){if(i=e.stateNode,n=e.memoizedProps,i[wi]=e,(s=i.nodeValue!==n)&&(t=kn,t!==null))switch(t.tag){case 3:al(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&al(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[wi]=e,e.stateNode=i}return an(e),null;case 13:if(St(At),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&Un!==null&&e.mode&1&&!(e.flags&128))zv(),la(),e.flags|=98560,s=!1;else if(s=ol(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[wi]=e}else la(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;an(e),s=!1}else ci!==null&&(dh(ci),ci=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||At.current&1?jt===0&&(jt=3):ip())),e.updateQueue!==null&&(e.flags|=4),an(e),null);case 4:return ua(),ih(t,e),t===null&&Eo(e.stateNode.containerInfo),an(e),null;case 10:return zf(e.type._context),an(e),null;case 17:return bn(e.type)&&vc(),an(e),null;case 19:if(St(At),s=e.memoizedState,s===null)return an(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Oa(s,!1);else{if(jt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=bc(t),a!==null){for(e.flags|=128,Oa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return vt(At,At.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>ha&&(e.flags|=128,i=!0,Oa(s,!1),e.lanes=4194304)}else{if(!i)if(t=bc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Oa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Et)return an(e),null}else 2*Lt()-s.renderingStartTime>ha&&n!==1073741824&&(e.flags|=128,i=!0,Oa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=At.current,vt(At,i?n&1|2:n&1),e):(an(e),null);case 22:case 23:return np(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Nn&1073741824&&(an(e),e.subtreeFlags&6&&(e.flags|=8192)):an(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function QM(t,e){switch(Ff(e),e.tag){case 1:return bn(e.type)&&vc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ua(),St(wn),St(un),Wf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gf(e),null;case 13:if(St(At),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));la()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return St(At),null;case 4:return ua(),null;case 10:return zf(e.type._context),null;case 22:case 23:return np(),null;case 24:return null;default:return null}}var ul=!1,cn=!1,JM=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Dt(t,e,i)}else n.current=null}function rh(t,e,n){try{n()}catch(i){Dt(t,e,i)}}var qm=!1;function eS(t,e){if(jd=fc,t=Cv(),Lf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,p=t,h=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)h=p,p=m;for(;;){if(p===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++f===i&&(l=a),(m=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vd={focusedElem:t,selectionRange:n},fc=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,g=y.memoizedState,u=e.stateNode,x=u.getSnapshotBeforeUpdate(e.elementType===e.type?v:ai(e.type,v),g);u.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(M){Dt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return y=qm,qm=!1,y}function lo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&rh(e,n,s)}r=r.next}while(r!==i)}}function Qc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function sh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wx(t){var e=t.alternate;e!==null&&(t.alternate=null,wx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wi],delete e[Co],delete e[Wd],delete e[FM],delete e[kM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bx(t){return t.tag===5||t.tag===3||t.tag===4}function $m(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ah(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gc));else if(i!==4&&(t=t.child,t!==null))for(ah(t,e,n),t=t.sibling;t!==null;)ah(t,e,n),t=t.sibling}function oh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(oh(t,e,n),t=t.sibling;t!==null;)oh(t,e,n),t=t.sibling}var Qt=null,oi=!1;function sr(t,e,n){for(n=n.child;n!==null;)Ex(t,e,n),n=n.sibling}function Ex(t,e,n){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(Gc,n)}catch{}switch(n.tag){case 5:cn||Xs(n,e);case 6:var i=Qt,r=oi;Qt=null,sr(t,e,n),Qt=i,oi=r,Qt!==null&&(oi?(t=Qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qt.removeChild(n.stateNode));break;case 18:Qt!==null&&(oi?(t=Qt,n=n.stateNode,t.nodeType===8?Cu(t.parentNode,n):t.nodeType===1&&Cu(t,n),So(t)):Cu(Qt,n.stateNode));break;case 4:i=Qt,r=oi,Qt=n.stateNode.containerInfo,oi=!0,sr(t,e,n),Qt=i,oi=r;break;case 0:case 11:case 14:case 15:if(!cn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&rh(n,e,a),r=r.next}while(r!==i)}sr(t,e,n);break;case 1:if(!cn&&(Xs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Dt(n,e,o)}sr(t,e,n);break;case 21:sr(t,e,n);break;case 22:n.mode&1?(cn=(i=cn)||n.memoizedState!==null,sr(t,e,n),cn=i):sr(t,e,n);break;default:sr(t,e,n)}}function Ym(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new JM),e.forEach(function(i){var r=cS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ni(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Qt=o.stateNode,oi=!1;break e;case 3:Qt=o.stateNode.containerInfo,oi=!0;break e;case 4:Qt=o.stateNode.containerInfo,oi=!0;break e}o=o.return}if(Qt===null)throw Error(se(160));Ex(s,a,r),Qt=null,oi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Dt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tx(e,t),e=e.sibling}function Tx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(e,t),xi(t),i&4){try{lo(3,t,t.return),Qc(3,t)}catch(v){Dt(t,t.return,v)}try{lo(5,t,t.return)}catch(v){Dt(t,t.return,v)}}break;case 1:ni(e,t),xi(t),i&512&&n!==null&&Xs(n,n.return);break;case 5:if(ni(e,t),xi(t),i&512&&n!==null&&Xs(n,n.return),t.flags&32){var r=t.stateNode;try{xo(r,"")}catch(v){Dt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&$g(r,s),Nd(o,a);var c=Nd(o,s);for(a=0;a<l.length;a+=2){var f=l[a],p=l[a+1];f==="style"?Jg(r,p):f==="dangerouslySetInnerHTML"?Zg(r,p):f==="children"?xo(r,p):Mf(r,f,p,c)}switch(o){case"input":Td(r,s);break;case"textarea":Yg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ks(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ks(r,!!s.multiple,s.defaultValue,!0):Ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[Co]=s}catch(v){Dt(t,t.return,v)}}break;case 6:if(ni(e,t),xi(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){Dt(t,t.return,v)}}break;case 3:if(ni(e,t),xi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{So(e.containerInfo)}catch(v){Dt(t,t.return,v)}break;case 4:ni(e,t),xi(t);break;case 13:ni(e,t),xi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ep=Lt())),i&4&&Ym(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(cn=(c=cn)||f,ni(e,t),cn=c):ni(e,t),xi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(xe=t,f=t.child;f!==null;){for(p=xe=f;xe!==null;){switch(h=xe,m=h.child,h.tag){case 0:case 11:case 14:case 15:lo(4,h,h.return);break;case 1:Xs(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){Dt(i,n,v)}}break;case 5:Xs(h,h.return);break;case 22:if(h.memoizedState!==null){Zm(p);continue}}m!==null?(m.return=h,xe=m):Zm(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Qg("display",a))}catch(v){Dt(t,t.return,v)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(v){Dt(t,t.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ni(e,t),xi(t),i&4&&Ym(t);break;case 21:break;default:ni(e,t),xi(t)}}function xi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bx(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xo(r,""),i.flags&=-33);var s=$m(t);oh(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=$m(t);ah(t,o,a);break;default:throw Error(se(161))}}catch(l){Dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tS(t,e,n){xe=t,Cx(t)}function Cx(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ul;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||cn;o=ul;var c=cn;if(ul=a,(cn=l)&&!c)for(xe=r;xe!==null;)a=xe,l=a.child,a.tag===22&&a.memoizedState!==null?Qm(r):l!==null?(l.return=a,xe=l):Qm(r);for(;s!==null;)xe=s,Cx(s),s=s.sibling;xe=r,ul=o,cn=c}Km(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):Km(t)}}function Km(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:cn||Qc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!cn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ai(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Lm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Lm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&So(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}cn||e.flags&512&&sh(e)}catch(h){Dt(e,e.return,h)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Zm(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Qm(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qc(4,e)}catch(l){Dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Dt(e,r,l)}}var s=e.return;try{sh(e)}catch(l){Dt(e,s,l)}break;case 5:var a=e.return;try{sh(e)}catch(l){Dt(e,a,l)}}}catch(l){Dt(e,e.return,l)}if(e===t){xe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,xe=o;break}xe=e.return}}var nS=Math.ceil,Cc=nr.ReactCurrentDispatcher,Qf=nr.ReactCurrentOwner,Kn=nr.ReactCurrentBatchConfig,it=0,Kt=null,Ft=null,tn=0,Nn=0,qs=Ir(0),jt=0,Io=null,ds=0,Jc=0,Jf=0,co=null,_n=null,ep=0,ha=1/0,zi=null,Ac=!1,lh=null,Er=null,dl=!1,xr=null,Rc=0,uo=0,ch=null,$l=-1,Yl=0;function pn(){return it&6?Lt():$l!==-1?$l:$l=Lt()}function Tr(t){return t.mode&1?it&2&&tn!==0?tn&-tn:BM.transition!==null?(Yl===0&&(Yl=dv()),Yl):(t=ht,t!==0||(t=window.event,t=t===void 0?16:xv(t.type)),t):1}function pi(t,e,n,i){if(50<uo)throw uo=0,ch=null,Error(se(185));Oo(t,n,i),(!(it&2)||t!==Kt)&&(t===Kt&&(!(it&2)&&(Jc|=n),jt===4&&mr(t,tn)),En(t,i),n===1&&it===0&&!(e.mode&1)&&(ha=Lt()+500,Yc&&Lr()))}function En(t,e){var n=t.callbackNode;B1(t,e);var i=hc(t,t===Kt?tn:0);if(i===0)n!==null&&om(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&om(n),e===1)t.tag===0?OM(Jm.bind(null,t)):kv(Jm.bind(null,t)),LM(function(){!(it&6)&&Lr()}),n=null;else{switch(hv(i)){case 1:n=Tf;break;case 4:n=cv;break;case 16:n=dc;break;case 536870912:n=uv;break;default:n=dc}n=Ux(n,Ax.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ax(t,e){if($l=-1,Yl=0,it&6)throw Error(se(327));var n=t.callbackNode;if(ta()&&t.callbackNode!==n)return null;var i=hc(t,t===Kt?tn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Pc(t,i);else{e=i;var r=it;it|=2;var s=Px();(Kt!==t||tn!==e)&&(zi=null,ha=Lt()+500,ss(t,e));do try{sS();break}catch(o){Rx(t,o)}while(!0);Bf(),Cc.current=s,it=r,Ft!==null?e=0:(Kt=null,tn=0,e=jt)}if(e!==0){if(e===2&&(r=Fd(t),r!==0&&(i=r,e=uh(t,r))),e===1)throw n=Io,ss(t,0),mr(t,i),En(t,Lt()),n;if(e===6)mr(t,i);else{if(r=t.current.alternate,!(i&30)&&!iS(r)&&(e=Pc(t,i),e===2&&(s=Fd(t),s!==0&&(i=s,e=uh(t,s))),e===1))throw n=Io,ss(t,0),mr(t,i),En(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Gr(t,_n,zi);break;case 3:if(mr(t,i),(i&130023424)===i&&(e=ep+500-Lt(),10<e)){if(hc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){pn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Gd(Gr.bind(null,t,_n,zi),e);break}Gr(t,_n,zi);break;case 4:if(mr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-fi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*nS(i/1960))-i,10<i){t.timeoutHandle=Gd(Gr.bind(null,t,_n,zi),i);break}Gr(t,_n,zi);break;case 5:Gr(t,_n,zi);break;default:throw Error(se(329))}}}return En(t,Lt()),t.callbackNode===n?Ax.bind(null,t):null}function uh(t,e){var n=co;return t.current.memoizedState.isDehydrated&&(ss(t,e).flags|=256),t=Pc(t,e),t!==2&&(e=_n,_n=n,e!==null&&dh(e)),t}function dh(t){_n===null?_n=t:_n.push.apply(_n,t)}function iS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!gi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~Jf,e&=~Jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fi(e),i=1<<n;t[n]=-1,e&=~i}}function Jm(t){if(it&6)throw Error(se(327));ta();var e=hc(t,0);if(!(e&1))return En(t,Lt()),null;var n=Pc(t,e);if(t.tag!==0&&n===2){var i=Fd(t);i!==0&&(e=i,n=uh(t,i))}if(n===1)throw n=Io,ss(t,0),mr(t,e),En(t,Lt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,_n,zi),En(t,Lt()),null}function tp(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(ha=Lt()+500,Yc&&Lr())}}function hs(t){xr!==null&&xr.tag===0&&!(it&6)&&ta();var e=it;it|=1;var n=Kn.transition,i=ht;try{if(Kn.transition=null,ht=1,t)return t()}finally{ht=i,Kn.transition=n,it=e,!(it&6)&&Lr()}}function np(){Nn=qs.current,St(qs)}function ss(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,IM(n)),Ft!==null)for(n=Ft.return;n!==null;){var i=n;switch(Ff(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vc();break;case 3:ua(),St(wn),St(un),Wf();break;case 5:Gf(i);break;case 4:ua();break;case 13:St(At);break;case 19:St(At);break;case 10:zf(i.type._context);break;case 22:case 23:np()}n=n.return}if(Kt=t,Ft=t=Cr(t.current,null),tn=Nn=e,jt=0,Io=null,Jf=Jc=ds=0,_n=co=null,es!==null){for(e=0;e<es.length;e++)if(n=es[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}es=null}return t}function Rx(t,e){do{var n=Ft;try{if(Bf(),Wl.current=Tc,Ec){for(var i=Rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ec=!1}if(us=0,$t=Bt=Rt=null,oo=!1,Po=0,Qf.current=null,n===null||n.return===null){jt=1,Io=e,Ft=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=tn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=zm(a);if(m!==null){m.flags&=-257,jm(m,a,o,s,e),m.mode&1&&Bm(s,c,e),e=m,l=c;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Bm(s,c,e),ip();break e}l=Error(se(426))}}else if(Et&&o.mode&1){var g=zm(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),jm(g,a,o,s,e),kf(da(l,o));break e}}s=l=da(l,o),jt!==4&&(jt=2),co===null?co=[s]:co.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=hx(s,l,e);Im(s,u);break e;case 1:o=l;var x=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Er===null||!Er.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=fx(s,o,e);Im(s,M);break e}}s=s.return}while(s!==null)}Dx(n)}catch(A){e=A,Ft===n&&n!==null&&(Ft=n=n.return);continue}break}while(!0)}function Px(){var t=Cc.current;return Cc.current=Tc,t===null?Tc:t}function ip(){(jt===0||jt===3||jt===2)&&(jt=4),Kt===null||!(ds&268435455)&&!(Jc&268435455)||mr(Kt,tn)}function Pc(t,e){var n=it;it|=2;var i=Px();(Kt!==t||tn!==e)&&(zi=null,ss(t,e));do try{rS();break}catch(r){Rx(t,r)}while(!0);if(Bf(),it=n,Cc.current=i,Ft!==null)throw Error(se(261));return Kt=null,tn=0,jt}function rS(){for(;Ft!==null;)Nx(Ft)}function sS(){for(;Ft!==null&&!P1();)Nx(Ft)}function Nx(t){var e=Lx(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,e===null?Dx(t):Ft=e,Qf.current=null}function Dx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=QM(n,e),n!==null){n.flags&=32767,Ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jt=6,Ft=null;return}}else if(n=ZM(n,e,Nn),n!==null){Ft=n;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);jt===0&&(jt=5)}function Gr(t,e,n){var i=ht,r=Kn.transition;try{Kn.transition=null,ht=1,aS(t,e,n,i)}finally{Kn.transition=r,ht=i}return null}function aS(t,e,n,i){do ta();while(xr!==null);if(it&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(z1(t,s),t===Kt&&(Ft=Kt=null,tn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,Ux(dc,function(){return ta(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kn.transition,Kn.transition=null;var a=ht;ht=1;var o=it;it|=4,Qf.current=null,eS(t,n),Tx(n,t),TM(Vd),fc=!!jd,Vd=jd=null,t.current=n,tS(n),N1(),it=o,ht=a,Kn.transition=s}else t.current=n;if(dl&&(dl=!1,xr=t,Rc=r),s=t.pendingLanes,s===0&&(Er=null),L1(n.stateNode),En(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ac)throw Ac=!1,t=lh,lh=null,t;return Rc&1&&t.tag!==0&&ta(),s=t.pendingLanes,s&1?t===ch?uo++:(uo=0,ch=t):uo=0,Lr(),null}function ta(){if(xr!==null){var t=hv(Rc),e=Kn.transition,n=ht;try{if(Kn.transition=null,ht=16>t?16:t,xr===null)var i=!1;else{if(t=xr,xr=null,Rc=0,it&6)throw Error(se(331));var r=it;for(it|=4,xe=t.current;xe!==null;){var s=xe,a=s.child;if(xe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(xe=c;xe!==null;){var f=xe;switch(f.tag){case 0:case 11:case 15:lo(8,f,s)}var p=f.child;if(p!==null)p.return=f,xe=p;else for(;xe!==null;){f=xe;var h=f.sibling,m=f.return;if(wx(f),f===c){xe=null;break}if(h!==null){h.return=m,xe=h;break}xe=m}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var g=v.sibling;v.sibling=null,v=g}while(v!==null)}}xe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,xe=a;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:lo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,xe=u;break e}xe=s.return}}var x=t.current;for(xe=x;xe!==null;){a=xe;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,xe=_;else e:for(a=x;xe!==null;){if(o=xe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Qc(9,o)}}catch(A){Dt(o,o.return,A)}if(o===a){xe=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,xe=M;break e}xe=o.return}}if(it=r,Lr(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(Gc,t)}catch{}i=!0}return i}finally{ht=n,Kn.transition=e}}return!1}function e0(t,e,n){e=da(n,e),e=hx(t,e,1),t=br(t,e,1),e=pn(),t!==null&&(Oo(t,1,e),En(t,e))}function Dt(t,e,n){if(t.tag===3)e0(t,t,n);else for(;e!==null;){if(e.tag===3){e0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Er===null||!Er.has(i))){t=da(n,t),t=fx(e,t,1),e=br(e,t,1),t=pn(),e!==null&&(Oo(e,1,t),En(e,t));break}}e=e.return}}function oS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=pn(),t.pingedLanes|=t.suspendedLanes&n,Kt===t&&(tn&n)===n&&(jt===4||jt===3&&(tn&130023424)===tn&&500>Lt()-ep?ss(t,0):Jf|=n),En(t,e)}function Ix(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=pn();t=Ji(t,e),t!==null&&(Oo(t,e,n),En(t,n))}function lS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ix(t,n)}function cS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Ix(t,n)}var Lx;Lx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wn.current)Sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Sn=!1,KM(t,e,n);Sn=!!(t.flags&131072)}else Sn=!1,Et&&e.flags&1048576&&Ov(e,_c,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ql(t,e),t=e.pendingProps;var r=oa(e,un.current);ea(e,n),r=qf(null,e,i,t,r,n);var s=$f();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bn(i)?(s=!0,xc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Vf(e),r.updater=Zc,e.stateNode=r,r._reactInternals=e,Zd(e,i,t,n),e=eh(null,e,i,!0,s,n)):(e.tag=0,Et&&s&&Uf(e),hn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ql(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=dS(i),t=ai(i,t),r){case 0:e=Jd(null,e,i,t,n);break e;case 1:e=Gm(null,e,i,t,n);break e;case 11:e=Vm(null,e,i,t,n);break e;case 14:e=Hm(null,e,i,ai(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Jd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Gm(t,e,i,r,n);case 3:e:{if(vx(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Gv(t,e),wc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=da(Error(se(423)),e),e=Wm(t,e,i,n,r);break e}else if(i!==r){r=da(Error(se(424)),e),e=Wm(t,e,i,n,r);break e}else for(Un=wr(e.stateNode.containerInfo.firstChild),kn=e,Et=!0,ci=null,n=Vv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(la(),i===r){e=er(t,e,n);break e}hn(t,e,i,n)}e=e.child}return e;case 5:return Wv(e),t===null&&$d(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Hd(i,r)?a=null:s!==null&&Hd(i,s)&&(e.flags|=32),gx(t,e),hn(t,e,a,n),e.child;case 6:return t===null&&$d(e),null;case 13:return xx(t,e,n);case 4:return Hf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ca(e,null,i,n):hn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Vm(t,e,i,r,n);case 7:return hn(t,e,e.pendingProps,n),e.child;case 8:return hn(t,e,e.pendingProps.children,n),e.child;case 12:return hn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,vt(Mc,i._currentValue),i._currentValue=a,s!==null)if(gi(s.value,a)){if(s.children===r.children&&!wn.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Xi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Yd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}hn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ea(e,n),r=Qn(r),i=i(r),e.flags|=1,hn(t,e,i,n),e.child;case 14:return i=e.type,r=ai(i,e.pendingProps),r=ai(i.type,r),Hm(t,e,i,r,n);case 15:return px(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),ql(t,e),e.tag=1,bn(i)?(t=!0,xc(e)):t=!1,ea(e,n),dx(e,i,r),Zd(e,i,r,n),eh(null,e,i,!0,t,n);case 19:return yx(t,e,n);case 22:return mx(t,e,n)}throw Error(se(156,e.tag))};function Ux(t,e){return lv(t,e)}function uS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,e,n,i){return new uS(t,e,n,i)}function rp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dS(t){if(typeof t=="function")return rp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wf)return 11;if(t===bf)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=$n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Kl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")rp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ks:return as(n.children,r,s,e);case Sf:a=8,r|=8;break;case Md:return t=$n(12,n,e,r|2),t.elementType=Md,t.lanes=s,t;case Sd:return t=$n(13,n,e,r),t.elementType=Sd,t.lanes=s,t;case wd:return t=$n(19,n,e,r),t.elementType=wd,t.lanes=s,t;case Wg:return eu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hg:a=10;break e;case Gg:a=9;break e;case wf:a=11;break e;case bf:a=14;break e;case hr:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=$n(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function as(t,e,n,i){return t=$n(7,t,i,e),t.lanes=n,t}function eu(t,e,n,i){return t=$n(22,t,i,e),t.elementType=Wg,t.lanes=n,t.stateNode={isHidden:!1},t}function Uu(t,e,n){return t=$n(6,t,null,e),t.lanes=n,t}function Fu(t,e,n){return e=$n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gu(0),this.expirationTimes=gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function sp(t,e,n,i,r,s,a,o,l){return t=new hS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vf(s),t}function fS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Fx(t){if(!t)return Pr;t=t._reactInternals;e:{if(gs(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(bn(n))return Fv(t,n,e)}return e}function kx(t,e,n,i,r,s,a,o,l){return t=sp(n,i,!0,t,r,s,a,o,l),t.context=Fx(null),n=t.current,i=pn(),r=Tr(n),s=Xi(i,r),s.callback=e??null,br(n,s,r),t.current.lanes=r,Oo(t,r,i),En(t,i),t}function tu(t,e,n,i){var r=e.current,s=pn(),a=Tr(r);return n=Fx(n),e.context===null?e.context=n:e.pendingContext=n,e=Xi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=br(r,e,a),t!==null&&(pi(t,r,a,s),Gl(t,r,a)),a}function Nc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function t0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ap(t,e){t0(t,e),(t=t.alternate)&&t0(t,e)}function pS(){return null}var Ox=typeof reportError=="function"?reportError:function(t){console.error(t)};function op(t){this._internalRoot=t}nu.prototype.render=op.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));tu(t,e,null,null)};nu.prototype.unmount=op.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hs(function(){tu(null,t,null,null)}),e[Qi]=null}};function nu(t){this._internalRoot=t}nu.prototype.unstable_scheduleHydration=function(t){if(t){var e=mv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&vv(t)}};function lp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function n0(){}function mS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Nc(a);s.call(c)}}var a=kx(e,i,t,0,null,!1,!1,"",n0);return t._reactRootContainer=a,t[Qi]=a.current,Eo(t.nodeType===8?t.parentNode:t),hs(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Nc(l);o.call(c)}}var l=sp(t,0,!1,null,null,!1,!1,"",n0);return t._reactRootContainer=l,t[Qi]=l.current,Eo(t.nodeType===8?t.parentNode:t),hs(function(){tu(e,l,n,i)}),l}function ru(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Nc(a);o.call(l)}}tu(e,a,t,r)}else a=mS(n,e,t,r,i);return Nc(a)}fv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ka(e.pendingLanes);n!==0&&(Cf(e,n|1),En(e,Lt()),!(it&6)&&(ha=Lt()+500,Lr()))}break;case 13:hs(function(){var i=Ji(t,1);if(i!==null){var r=pn();pi(i,t,1,r)}}),ap(t,1)}};Af=function(t){if(t.tag===13){var e=Ji(t,134217728);if(e!==null){var n=pn();pi(e,t,134217728,n)}ap(t,134217728)}};pv=function(t){if(t.tag===13){var e=Tr(t),n=Ji(t,e);if(n!==null){var i=pn();pi(n,t,e,i)}ap(t,e)}};mv=function(){return ht};gv=function(t,e){var n=ht;try{return ht=t,e()}finally{ht=n}};Id=function(t,e,n){switch(e){case"input":if(Td(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=$c(i);if(!r)throw Error(se(90));qg(i),Td(i,r)}}}break;case"textarea":Yg(t,n);break;case"select":e=n.value,e!=null&&Ks(t,!!n.multiple,e,!1)}};nv=tp;iv=hs;var gS={usingClientEntryPoint:!1,Events:[zo,js,$c,ev,tv,tp]},Ba={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vS={bundleType:Ba.bundleType,version:Ba.version,rendererPackageName:Ba.rendererPackageName,rendererConfig:Ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=av(t),t===null?null:t.stateNode},findFiberByHostInstance:Ba.findFiberByHostInstance||pS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{Gc=hl.inject(vS),Ei=hl}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gS;Bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lp(e))throw Error(se(200));return fS(t,e,null,n)};Bn.createRoot=function(t,e){if(!lp(t))throw Error(se(299));var n=!1,i="",r=Ox;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=sp(t,1,!1,null,null,n,!1,i,r),t[Qi]=e.current,Eo(t.nodeType===8?t.parentNode:t),new op(e)};Bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=av(e),t=t===null?null:t.stateNode,t};Bn.flushSync=function(t){return hs(t)};Bn.hydrate=function(t,e,n){if(!iu(e))throw Error(se(200));return ru(null,t,e,!0,n)};Bn.hydrateRoot=function(t,e,n){if(!lp(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Ox;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=kx(e,null,t,1,n??null,r,!1,s,a),t[Qi]=e.current,Eo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nu(e)};Bn.render=function(t,e,n){if(!iu(e))throw Error(se(200));return ru(null,t,e,!1,n)};Bn.unmountComponentAtNode=function(t){if(!iu(t))throw Error(se(40));return t._reactRootContainer?(hs(function(){ru(null,null,t,!1,function(){t._reactRootContainer=null,t[Qi]=null})}),!0):!1};Bn.unstable_batchedUpdates=tp;Bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!iu(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return ru(t,e,n,!1,i)};Bn.version="18.3.1-next-f1338f8080-20240426";function Bx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bx)}catch(t){console.error(t)}}Bx(),Bg.exports=Bn;var xS=Bg.exports,i0=xS;yd.createRoot=i0.createRoot,yd.hydrateRoot=i0.hydrateRoot;/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function _S(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:yS(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=t=>{const e=MS(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
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
 */function ku(t){return t!=null}function wS(t,e={}){var h,m;const n=e.attributeNames??{},i=y=>n[y]??y,r=t.size??t.width??Fr.width,s=t.size??t.height??Fr.height,a=((h=t.aliases)==null?void 0:h.filter(y=>typeof y=="string"&&y.trim()!=="").map(y=>`lucide-${y}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...a],l=((m=e.className)==null?void 0:m.split(" ").filter(Boolean))??[],c=e.includeDefaultClasses===!1?hh(...l):hh("lucide",...o,...l),f=e.absoluteStrokeWidth?Number(e.strokeWidth??Fr["stroke-width"])*Number(t.size??t.width??Fr.width)/Number(e.size??e.width??Fr.width):e.strokeWidth??Fr["stroke-width"];return["svg",{...Object.entries(Fr).reduce((y,[v,g])=>(y[i(v)]=g,y),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&ku(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&ku(e.width)&&{[i("width")]:e.width},..."height"in e&&ku(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:f,...c&&{[i("class")]:c},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(y=>{const[v,g,u]=y,x=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...g}:g;return u?[v,x,u]:[v,x]})]}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function bS(t,e={}){return wS(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},TS=qe.createContext({}),CS=()=>qe.useContext(TS),AS=qe.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:o="",children:l,iconNode:c=[],icon:f={node:c,aliases:[],size:24},...p},h)=>{const{size:m=24,strokeWidth:y=2,absoluteStrokeWidth:v=!1,nonScalingStroke:g=!1,color:u="currentColor",className:x=""}=CS()??{},_=!!l||ES(p),[M,A,T=[]]=bS(f,{color:t??u,width:n??e??m,height:i??e??m,strokeWidth:r??y,absoluteStrokeWidth:s??v,nonScalingStroke:a??g,className:hh(x,o),hasA11yProp:_,attributes:p});return qe.createElement(M,{ref:h,...A},[...T.map(([C,R])=>qe.createElement(C,R)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Xe(t,e=[],n=[]){const i=typeof t=="string"?_S(t,e,n):t,r=qe.forwardRef(({className:s,...a},o)=>qe.createElement(AS,{ref:o,icon:i,className:s,...a}));return i.name&&(r.displayName=SS(i.name)),r}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};zx.node;const fh=Xe(zx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};jx.node;const ph=Xe(jx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx={name:"chart-no-axes-column",size:24,node:[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V3",key:"1lcnhd"}],["path",{d:"M19 21V9",key:"unv183"}]],aliases:["bar-chart-2"]};Vx.node;const mh=Xe(Vx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};Hx.node;const RS=Xe(Hx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};Gx.node;const PS=Xe(Gx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Wx.node;const Xx=Xe(Wx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx={name:"circle-exclamation-point",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle","circle-alert"]};qx.node;const r0=Xe(qx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x={name:"circle-plus",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],aliases:["plus-circle"]};$x.node;const s0=Xe($x);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};Yx.node;const NS=Xe(Yx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};Kx.node;const DS=Xe(Kx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};Zx.node;const Qx=Xe(Zx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx={name:"eighth-notes",size:24,node:[["path",{d:"M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19",key:"uy6ho8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}],["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}]],aliases:["music"]};Jx.node;const IS=Xe(Jx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey={name:"eye-off",size:24,node:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};ey.node;const LS=Xe(ey);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};ty.node;const ny=Xe(ty);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy={name:"file-down",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]};iy.node;const US=Xe(iy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry={name:"file-up",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]};ry.node;const FS=Xe(ry);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy={name:"film",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]};sy.node;const a0=Xe(sy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay={name:"image",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]};ay.node;const gh=Xe(ay);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};oy.node;const cp=Xe(oy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly={name:"loader-circle",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],aliases:["loader-2"]};ly.node;const kS=Xe(ly);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy={name:"move",size:24,node:[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]};cy.node;const OS=Xe(cy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};uy.node;const dy=Xe(uy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};hy.node;const BS=Xe(hy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};fy.node;const zS=Xe(fy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};py.node;const jS=Xe(py);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};my.node;const gy=Xe(my);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};vy.node;const fa=Xe(vy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy={name:"repeat",size:24,node:[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]};xy.node;const VS=Xe(xy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy={name:"save",size:24,node:[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]};yy.node;const _y=Xe(yy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};My.node;const Sy=Xe(My);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};wy.node;const ui=Xe(wy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by={name:"square",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]};by.node;const HS=Xe(by);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};Ey.node;const GS=Xe(Ey);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};Ty.node;const Dc=Xe(Ty);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy={name:"triangle-exclamation-point",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle","triangle-alert"]};Cy.node;const WS=Xe(Cy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};Ay.node;const Ry=Xe(Ay);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Py.node;const XS=Xe(Py);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Ny.node;const qS=Xe(Ny);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Dy.node;const Iy=Xe(Dy);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};Ly.node;const Uy=Xe(Ly),o0=t=>{let e;const n=new Set,i=(c,f)=>{const p=typeof c=="function"?c(e):c;if(!Object.is(p,e)){const h=e;e=f??(typeof p!="object"||p===null)?p:Object.assign({},e,p),n.forEach(m=>m(e,h))}},r=()=>e,o={setState:i,getState:r,getInitialState:()=>l,subscribe:c=>(n.add(c),()=>n.delete(c))},l=e=t(i,r,o);return o},$S=t=>t?o0(t):o0,YS=t=>t;function KS(t,e=YS){const n=zl.useSyncExternalStore(t.subscribe,zl.useCallback(()=>e(t.getState()),[t,e]),()=>e(t.getInitialState()));return zl.useDebugValue(n),n}const l0=t=>{const e=$S(t),n=i=>KS(e,i);return Object.assign(n,e),n},ZS=t=>t?l0(t):l0;class QS{constructor(e){Q(this,"config");Q(this,"prevSpectrum",null);Q(this,"smoothedBands",{subBass:0,bass:0,lowMid:0,mid:0,highMid:0,treble:0});Q(this,"smoothedRms",0);Q(this,"smoothedPeak",0);Q(this,"fluxHistory",[]);Q(this,"maxFluxHistory",40);Q(this,"lastBeatTime",-1);Q(this,"beatIntervals",[]);Q(this,"estimatedBpm",120);Q(this,"bpmConfidence",.5);Q(this,"beatPhase",0);Q(this,"isBpmLocked",!1);this.config={fftSize:2048,smoothingTimeConstant:.8,minDecibels:-90,maxDecibels:-10,attackSmoothing:.2,decaySmoothing:.85,beatSensitivity:1.5,beatCooldownSeconds:.18,...e}}setBpm(e){e>=40&&e<=260&&(this.estimatedBpm=Math.round(e),this.bpmConfidence=1,this.isBpmLocked=!0)}getBpm(){return this.estimatedBpm}unlockBpm(){this.isBpmLocked=!1}updateConfig(e){this.config={...this.config,...e}}freqToBin(e,n,i){const r=i/2,s=Math.round(e*i/n);return Math.max(0,Math.min(r-1,s))}getBandEnergy(e,n,i,r){const s=e.length*2,a=this.freqToBin(i,n,s),o=Math.max(a+1,this.freqToBin(r,n,s));let l=0;for(let f=a;f<o;f++)l+=e[f];const c=l/(o-a);return Math.max(0,Math.min(1,c))}calculateRms(e){let n=0;for(let i=0;i<e.length;i++){const r=e[i];n+=r*r}return Math.min(1,Math.sqrt(n/e.length)*1.8)}calculatePeak(e){let n=0;for(let i=0;i<e.length;i++){const r=Math.abs(e[i]);r>n&&(n=r)}return Math.min(1,n)}smoothValue(e,n){const i=n>=e?1-this.config.attackSmoothing:1-this.config.decaySmoothing;return e+(n-e)*i}processBeat(e,n,i){let r=0;if(this.prevSpectrum&&this.prevSpectrum.length===e.length){const y=Math.floor(e.length*.45);for(let v=0;v<y;v++){const g=e[v]-this.prevSpectrum[v];g>0&&(r+=g)}r/=y}this.fluxHistory.push(r),this.fluxHistory.length>this.maxFluxHistory&&this.fluxHistory.shift();let s=0;for(const y of this.fluxHistory)s+=y;s/=this.fluxHistory.length||1;let a=0;for(const y of this.fluxHistory){const v=y-s;a+=v*v}const o=Math.sqrt(a/(this.fluxHistory.length||1)),l=s+o*this.config.beatSensitivity,c=n-this.lastBeatTime,f=c>=this.config.beatCooldownSeconds;let p=!1,h=0;if(r>l&&r>.05&&f&&i>.25){if(p=!0,h=Math.min(1,(r-l)/(o||1)+i*.5),this.lastBeatTime>0){const y=c;if(y>=.25&&y<=1.5){this.beatIntervals.push(y),this.beatIntervals.length>10&&this.beatIntervals.shift();let v=0;for(const u of this.beatIntervals)v+=u;v/=this.beatIntervals.length;const g=Math.round(60/v);!this.isBpmLocked&&g>=60&&g<=200&&(this.estimatedBpm=Math.round(this.estimatedBpm*.8+g*.2),this.bpmConfidence=Math.min(1,this.beatIntervals.length/10))}}this.lastBeatTime=n}const m=60/this.estimatedBpm;return this.lastBeatTime>0?this.beatPhase=(n-this.lastBeatTime)%m/m:this.beatPhase=n%m/m,{isBeat:p,beatIntensity:p?h:Math.max(0,this.smoothValue(0,h)),beatPhase:this.beatPhase,bpm:this.estimatedBpm,bpmConfidence:this.bpmConfidence,timeSinceLastBeat:c,spectralFlux:r}}analyze(e,n,i,r){const s=this.getBandEnergy(e,i,20,60),a=this.getBandEnergy(e,i,60,250),o=this.getBandEnergy(e,i,250,500),l=this.getBandEnergy(e,i,500,2e3),c=this.getBandEnergy(e,i,2e3,4e3),f=this.getBandEnergy(e,i,4e3,18e3);this.smoothedBands.subBass=this.smoothValue(this.smoothedBands.subBass,s),this.smoothedBands.bass=this.smoothValue(this.smoothedBands.bass,a),this.smoothedBands.lowMid=this.smoothValue(this.smoothedBands.lowMid,o),this.smoothedBands.mid=this.smoothValue(this.smoothedBands.mid,l),this.smoothedBands.highMid=this.smoothValue(this.smoothedBands.highMid,c),this.smoothedBands.treble=this.smoothValue(this.smoothedBands.treble,f);const p=this.calculateRms(n),h=this.calculatePeak(n);this.smoothedRms=this.smoothValue(this.smoothedRms,p),this.smoothedPeak=this.smoothValue(this.smoothedPeak,h);const m=this.processBeat(e,r,this.smoothedBands.bass);return(!this.prevSpectrum||this.prevSpectrum.length!==e.length)&&(this.prevSpectrum=new Float32Array(e.length)),this.prevSpectrum.set(e),{bands:{...this.smoothedBands},rms:this.smoothedRms,peak:this.smoothedPeak,beat:m}}reset(){this.prevSpectrum=null,this.smoothedBands={subBass:0,bass:0,lowMid:0,mid:0,highMid:0,treble:0},this.smoothedRms=0,this.smoothedPeak=0,this.fluxHistory=[],this.lastBeatTime=-1,this.beatIntervals=[]}}class JS{constructor(){Q(this,"audioContext",null);Q(this,"audioBuffer",null);Q(this,"sourceNode",null);Q(this,"gainNode",null);Q(this,"analyserNode",null);Q(this,"frequencyAnalyzer");Q(this,"metadata",null);Q(this,"volume",.8);Q(this,"playbackStartTime",0);Q(this,"pauseOffset",0);Q(this,"_isPlaying",!1);Q(this,"freqByteData",new Uint8Array(1024));Q(this,"timeByteData",new Uint8Array(1024));Q(this,"normSpectrum",new Float32Array(512));Q(this,"normWaveform",new Float32Array(1024));Q(this,"fftCosTable",null);Q(this,"fftSinTable",null);Q(this,"hannWindowTable",null);this.frequencyAnalyzer=new QS}async init(){if(!this.audioContext){const e=window.AudioContext||window.webkitAudioContext;this.audioContext=new e,this.gainNode=this.audioContext.createGain(),this.gainNode.gain.value=this.volume,this.analyserNode=this.audioContext.createAnalyser(),this.analyserNode.fftSize=2048,this.analyserNode.smoothingTimeConstant=.75,this.analyserNode.minDecibels=-90,this.analyserNode.maxDecibels=-10,this.gainNode.connect(this.analyserNode),this.analyserNode.connect(this.audioContext.destination),this.freqByteData=new Uint8Array(this.analyserNode.frequencyBinCount),this.timeByteData=new Uint8Array(this.analyserNode.fftSize),this.normSpectrum=new Float32Array(this.analyserNode.frequencyBinCount),this.normWaveform=new Float32Array(this.analyserNode.fftSize),this.initFftTables(2048)}this.audioContext.state==="suspended"&&await this.audioContext.resume()}initFftTables(e){this.fftCosTable=new Float32Array(e/2),this.fftSinTable=new Float32Array(e/2),this.hannWindowTable=new Float32Array(e);for(let n=0;n<e/2;n++)this.fftCosTable[n]=Math.cos(-2*Math.PI*n/e),this.fftSinTable[n]=Math.sin(-2*Math.PI*n/e);for(let n=0;n<e;n++)this.hannWindowTable[n]=.5*(1-Math.cos(2*Math.PI*n/(e-1)))}async loadAudioFile(e){if(await this.init(),!this.audioContext)throw new Error("AudioContext not initialized");this.stop();const n=await e.arrayBuffer();return this.audioBuffer=await this.audioContext.decodeAudioData(n.slice(0)),this.metadata={id:`audio-${Date.now()}`,fileName:e instanceof File?e.name:"Sample_Electronic_Track.wav",mimeType:e.type||"audio/mpeg",duration:this.audioBuffer.duration,sampleRate:this.audioBuffer.sampleRate,numberOfChannels:this.audioBuffer.numberOfChannels,fileSizeBytes:e.size},this.pauseOffset=0,this.frequencyAnalyzer.reset(),this.metadata}async generateDemoTrack(){if(await this.init(),!this.audioContext)throw new Error("AudioContext not initialized");this.stop();const e=this.audioContext.sampleRate,n=30,i=Math.floor(e*n),r=this.audioContext.createBuffer(2,i,e),s=r.getChannelData(0),a=r.getChannelData(1),l=60/128;for(let c=0;c<i;c++){const f=c/e,p=f/l,h=Math.floor(p),m=p-h,y=p*4%1;let v=0;const g=m*l;if(g<.22){const V=140*Math.exp(-g*28)+45,j=Math.max(0,1-g*4.5);v+=Math.sin(2*Math.PI*V*g)*j*.7}const u=h%4;if(u===1||u===3){const V=m*l;if(V<.25){const j=(Math.random()*2-1)*Math.exp(-V*14),I=Math.sin(2*Math.PI*220*V)*Math.exp(-V*18);v+=(j*.4+I*.3)*.6}}const _=y*(l/4);if(_<.06){const j=(Math.floor(p*4)%2===1?.35:.15)*Math.exp(-_*45);v+=(Math.random()*2-1)*j}const M=Math.floor(h/4)%4,T=[55,65.41,73.42,65.41][M],C=Math.exp(-_*12),R=_*T*2%2-1;v+=R*C*.35;const w=[220,261.63,329.63,440,523.25],S=w[Math.floor(p*2)%w.length],N=Math.sin(2*Math.PI*S*f);v+=N*.12*(.8+.2*Math.sin(f*3)),v=Math.max(-.95,Math.min(.95,v)),s[c]=v,a[c]=v}return this.audioBuffer=r,this.metadata={id:`demo-${Date.now()}`,fileName:"Electro_Drive_128BPM_Demo.wav",mimeType:"audio/wav",duration:n,sampleRate:e,numberOfChannels:2,fileSizeBytes:i*4},this.pauseOffset=0,this.frequencyAnalyzer.reset(),this.metadata}play(e){!this.audioBuffer||!this.audioContext||!this.gainNode||(this._isPlaying&&this.pause(),e!==void 0&&(this.pauseOffset=Math.max(0,Math.min(e,this.audioBuffer.duration))),this.sourceNode=this.audioContext.createBufferSource(),this.sourceNode.buffer=this.audioBuffer,this.sourceNode.connect(this.gainNode),this.sourceNode.onended=()=>{this._isPlaying&&this.getCurrentTime()>=this.getDuration()&&(this._isPlaying=!1,this.pauseOffset=0)},this.playbackStartTime=this.audioContext.currentTime-this.pauseOffset,this.sourceNode.start(0,this.pauseOffset),this._isPlaying=!0)}pause(){if(this._isPlaying){if(this.sourceNode){try{this.sourceNode.stop(),this.sourceNode.disconnect()}catch{}this.sourceNode=null}this.pauseOffset=this.getCurrentTime(),this._isPlaying=!1}}stop(){this.pause(),this.pauseOffset=0}seek(e){const n=this._isPlaying;n&&this.pause();const i=this.getDuration();this.pauseOffset=Math.max(0,Math.min(e,i)),n&&this.play(this.pauseOffset)}setVolume(e){var n;this.volume=Math.max(0,Math.min(1,e)),this.gainNode&&this.gainNode.gain.setValueAtTime(this.volume,((n=this.audioContext)==null?void 0:n.currentTime)||0)}getCurrentTime(){if(!this.audioBuffer)return 0;if(!this._isPlaying)return this.pauseOffset;if(!this.audioContext)return 0;const e=this.audioContext.currentTime-this.playbackStartTime;return Math.min(e,this.audioBuffer.duration)}getDuration(){return this.audioBuffer?this.audioBuffer.duration:0}isPlaying(){return this._isPlaying}getAudioBuffer(){return this.audioBuffer}getAudioContext(){return this.audioContext}connectMediaStreamDestination(){if(!this.audioContext||!this.gainNode)return null;const e=this.audioContext.createMediaStreamDestination();return this.gainNode.connect(e),e}disconnectMediaStreamDestination(e){if(this.gainNode&&e)try{this.gainNode.disconnect(e)}catch{}}async detectBpmFromBuffer(){if(!this.audioBuffer)return 128;const e=this.audioBuffer.getChannelData(0),n=this.audioBuffer.sampleRate,i=this.audioBuffer.duration,r=Math.floor(Math.min(5,i*.1)*n),s=Math.floor(Math.min(45,i*.8)*n),a=Math.min(e.length,r+s),o=512,l=Math.floor((a-r)/o);if(l<200)return 128;const c=new Float32Array(l);let f=0;for(let y=0;y<l;y++){const v=r+y*o;let g=0;for(let _=0;_<o;_+=2){const M=e[v+_]||0;g+=M*M}const u=Math.sqrt(g/(o/2)),x=Math.max(0,u-f);c[y]=x,f=u}const p=n/o;let h=128,m=-1;for(let y=70;y<=180;y++){const v=Math.round(60*p/y);if(v<=0||v>=l/2)continue;let g=0;const u=l-v;for(let M=0;M<u;M++)g+=c[M]*c[M+v];g/=u;const x=1-Math.abs(y-128)*.0015,_=g*x;_>m&&(m=_,h=y)}return this.frequencyAnalyzer.setBpm(h),h}setManualBpm(e){this.frequencyAnalyzer.setBpm(e)}multiplyBpm(e){const n=Math.round(this.frequencyAnalyzer.getBpm()*e);return this.frequencyAnalyzer.setBpm(n),n}getRealtimeAnalysis(){var o;const e={timestamp:this.getCurrentTime(),bands:{subBass:0,bass:0,lowMid:0,mid:0,highMid:0,treble:0},spectrum:this.normSpectrum,waveform:this.normWaveform,rms:0,peak:0,beat:{isBeat:!1,beatIntensity:0,beatPhase:0,bpm:120,bpmConfidence:0,timeSinceLastBeat:0,spectralFlux:0}};if(!this.analyserNode||!this._isPlaying)return e;this.analyserNode.getByteFrequencyData(this.freqByteData),this.analyserNode.getByteTimeDomainData(this.timeByteData);const n=this.freqByteData.length;for(let l=0;l<n;l++)this.normSpectrum[l]=this.freqByteData[l]/255;const i=this.timeByteData.length;for(let l=0;l<i;l++)this.normWaveform[l]=(this.timeByteData[l]-128)/128;const r=this.getCurrentTime(),s=((o=this.audioContext)==null?void 0:o.sampleRate)||44100,a=this.frequencyAnalyzer.analyze(this.normSpectrum,this.normWaveform,s,r);return{timestamp:r,bands:a.bands,spectrum:this.normSpectrum,waveform:this.normWaveform,rms:a.rms,peak:a.peak,beat:a.beat}}getOfflineAnalysis(e,n=.046){if(!this.audioBuffer)return this.getRealtimeAnalysis();const i=this.audioBuffer.sampleRate,r=2048,s=Math.floor(e*i),a=Math.floor(r/2),o=s-a,l=this.audioBuffer.getChannelData(0),c=l.length,f=new Float32Array(r),p=new Float32Array(r),h=new Float32Array(r);for(let g=0;g<r;g++){const u=o+g,x=u>=0&&u<c?l[u]:0;f[g]=x;const _=this.hannWindowTable?this.hannWindowTable[g]:1;p[g]=x*_,h[g]=0}this.cooleyTukeyFft(p,h);const m=r/2,y=new Float32Array(m);for(let g=0;g<m;g++){const u=Math.sqrt(p[g]*p[g]+h[g]*h[g])/(r/4);y[g]=Math.min(1,u*2.5)}const v=this.frequencyAnalyzer.analyze(y,f,i,e);return{timestamp:e,bands:v.bands,spectrum:y,waveform:f,rms:v.rms,peak:v.peak,beat:v.beat}}cooleyTukeyFft(e,n){const i=e.length;let r=0;for(let a=0;a<i-1;a++){if(a<r){const l=e[a];e[a]=e[r],e[r]=l;const c=n[a];n[a]=n[r],n[r]=c}let o=i>>1;for(;o<=r;)r-=o,o>>=1;r+=o}let s=1;for(;s<i;){const a=s<<1;for(let o=0;o<s;o++){const l=-Math.PI*o/s,c=Math.cos(l),f=Math.sin(l);for(let p=o;p<i;p+=a){const h=p+s,m=c*e[h]-f*n[h],y=c*n[h]+f*e[h];e[h]=e[p]-m,n[h]=n[p]-y,e[p]+=m,n[p]+=y}}s=a}}dispose(){this.stop(),this.audioContext&&(this.audioContext.close(),this.audioContext=null),this.audioBuffer=null,this.metadata=null}}const ct=new JS;var up=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},L=(t,e,n)=>(up(t,e,"read from private field"),n?n.call(t):e.get(t)),We=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},Yt=(t,e,n,i)=>(up(t,e,"write to private field"),e.set(t,n),n),ew=(t,e,n,i)=>({set _(r){Yt(t,e,r)},get _(){return L(t,e,i)}}),Ye=(t,e,n)=>(up(t,e,"access private method"),n),et=new Uint8Array(8),Ri=new DataView(et.buffer),zt=t=>[(t%256+256)%256],at=t=>(Ri.setUint16(0,t,!1),[et[0],et[1]]),tw=t=>(Ri.setInt16(0,t,!1),[et[0],et[1]]),Fy=t=>(Ri.setUint32(0,t,!1),[et[1],et[2],et[3]]),ve=t=>(Ri.setUint32(0,t,!1),[et[0],et[1],et[2],et[3]]),nw=t=>(Ri.setInt32(0,t,!1),[et[0],et[1],et[2],et[3]]),fs=t=>(Ri.setUint32(0,Math.floor(t/2**32),!1),Ri.setUint32(4,t,!1),[et[0],et[1],et[2],et[3],et[4],et[5],et[6],et[7]]),dp=t=>(Ri.setInt16(0,2**8*t,!1),[et[0],et[1]]),Mi=t=>(Ri.setInt32(0,2**16*t,!1),[et[0],et[1],et[2],et[3]]),Ou=t=>(Ri.setInt32(0,2**30*t,!1),[et[0],et[1],et[2],et[3]]),Gn=(t,e=!1)=>{let n=Array(t.length).fill(null).map((i,r)=>t.charCodeAt(r));return e&&n.push(0),n},Ic=t=>t&&t[t.length-1],hp=t=>{let e;for(let n of t)(!e||n.presentationTimestamp>e.presentationTimestamp)&&(e=n);return e},Ci=(t,e,n=!0)=>{let i=t*e;return n?Math.round(i):i},ky=t=>{let e=t*(Math.PI/180),n=Math.cos(e),i=Math.sin(e);return[n,i,0,-i,n,0,0,0,1]},Oy=ky(0),By=t=>[Mi(t[0]),Mi(t[1]),Ou(t[2]),Mi(t[3]),Mi(t[4]),Ou(t[5]),Mi(t[6]),Mi(t[7]),Ou(t[8])],ho=t=>!t||typeof t!="object"?t:Array.isArray(t)?t.map(ho):Object.fromEntries(Object.entries(t).map(([e,n])=>[e,ho(n)])),pa=t=>t>=0&&t<2**32,Ot=(t,e,n)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:n}),bt=(t,e,n,i,r)=>Ot(t,[zt(e),Fy(n),i??[]],r),iw=t=>{let e=512;return t.fragmented?Ot("ftyp",[Gn("iso5"),ve(e),Gn("iso5"),Gn("iso6"),Gn("mp41")]):Ot("ftyp",[Gn("isom"),ve(e),Gn("isom"),t.holdsAvc?Gn("avc1"):[],Gn("mp41")])},vh=t=>({type:"mdat",largeSize:t}),rw=t=>({type:"free",size:t}),Zl=(t,e,n=!1)=>Ot("moov",null,[sw(e,t),...t.map(i=>aw(i,e)),n?kw(t):null]),sw=(t,e)=>{let n=Ci(Math.max(0,...e.filter(a=>a.samples.length>0).map(a=>{const o=hp(a.samples);return o.presentationTimestamp+o.duration})),_h),i=Math.max(...e.map(a=>a.id))+1,r=!pa(t)||!pa(n),s=r?fs:ve;return bt("mvhd",+r,0,[s(t),s(t),ve(_h),s(n),Mi(1),dp(1),Array(10).fill(0),By(Oy),Array(24).fill(0),ve(i)])},aw=(t,e)=>Ot("trak",null,[ow(t,e),lw(t,e)]),ow=(t,e)=>{let n=hp(t.samples),i=Ci(n?n.presentationTimestamp+n.duration:0,_h),r=!pa(e)||!pa(i),s=r?fs:ve,a;return t.info.type==="video"?a=typeof t.info.rotation=="number"?ky(t.info.rotation):t.info.rotation:a=Oy,bt("tkhd",+r,3,[s(e),s(e),ve(t.id),ve(0),s(i),Array(8).fill(0),at(0),at(0),dp(t.info.type==="audio"?1:0),at(0),By(a),Mi(t.info.type==="video"?t.info.width:0),Mi(t.info.type==="video"?t.info.height:0)])},lw=(t,e)=>Ot("mdia",null,[cw(t,e),uw(t.info.type==="video"?"vide":"soun"),dw(t)]),cw=(t,e)=>{let n=hp(t.samples),i=Ci(n?n.presentationTimestamp+n.duration:0,t.timescale),r=!pa(e)||!pa(i),s=r?fs:ve;return bt("mdhd",+r,0,[s(e),s(e),ve(t.timescale),s(i),at(21956),at(0)])},uw=t=>bt("hdlr",0,0,[Gn("mhlr"),Gn(t),ve(0),ve(0),ve(0),Gn("mp4-muxer-hdlr",!0)]),dw=t=>Ot("minf",null,[t.info.type==="video"?hw():fw(),pw(),vw(t)]),hw=()=>bt("vmhd",0,1,[at(0),at(0),at(0),at(0)]),fw=()=>bt("smhd",0,0,[at(0),at(0)]),pw=()=>Ot("dinf",null,[mw()]),mw=()=>bt("dref",0,0,[ve(1)],[gw()]),gw=()=>bt("url ",0,1),vw=t=>{const e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(n=>n.sampleCompositionTimeOffset!==0);return Ot("stbl",null,[xw(t),Nw(t),Dw(t),Iw(t),Lw(t),Uw(t),e?Fw(t):null])},xw=t=>bt("stsd",0,0,[ve(1)],[t.info.type==="video"?yw(qw[t.info.codec],t):Aw(Yw[t.info.codec],t)]),yw=(t,e)=>Ot(t,[Array(6).fill(0),at(1),at(0),at(0),Array(12).fill(0),at(e.info.width),at(e.info.height),ve(4718592),ve(4718592),ve(0),at(1),Array(32).fill(0),at(24),tw(65535)],[$w[e.info.codec](e),e.info.decoderConfig.colorSpace?ww(e):null]),_w={bt709:1,bt470bg:5,smpte170m:6},Mw={bt709:1,smpte170m:6,"iec61966-2-1":13},Sw={rgb:0,bt709:1,bt470bg:5,smpte170m:6},ww=t=>Ot("colr",[Gn("nclx"),at(_w[t.info.decoderConfig.colorSpace.primaries]),at(Mw[t.info.decoderConfig.colorSpace.transfer]),at(Sw[t.info.decoderConfig.colorSpace.matrix]),zt((t.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),bw=t=>t.info.decoderConfig&&Ot("avcC",[...new Uint8Array(t.info.decoderConfig.description)]),Ew=t=>t.info.decoderConfig&&Ot("hvcC",[...new Uint8Array(t.info.decoderConfig.description)]),Tw=t=>{if(!t.info.decoderConfig)return null;let e=t.info.decoderConfig;if(!e.colorSpace)throw new Error("'colorSpace' is required in the decoder config for VP9.");let n=e.codec.split("."),i=Number(n[1]),r=Number(n[2]),o=(Number(n[3])<<4)+(0<<1)+Number(e.colorSpace.fullRange);return bt("vpcC",1,0,[zt(i),zt(r),zt(o),zt(2),zt(2),zt(2),at(0)])},Cw=()=>{let n=(1<<7)+1;return Ot("av1C",[n,0,0,0])},Aw=(t,e)=>Ot(t,[Array(6).fill(0),at(1),at(0),at(0),ve(0),at(e.info.numberOfChannels),at(16),at(0),at(0),Mi(e.info.sampleRate)],[Kw[e.info.codec](e)]),Rw=t=>{let e=new Uint8Array(t.info.decoderConfig.description);return bt("esds",0,0,[ve(58753152),zt(32+e.byteLength),at(1),zt(0),ve(75530368),zt(18+e.byteLength),zt(64),zt(21),Fy(0),ve(130071),ve(130071),ve(92307584),zt(e.byteLength),...e,ve(109084800),zt(1),zt(2)])},Pw=t=>{var r;let e=3840,n=0;const i=(r=t.info.decoderConfig)==null?void 0:r.description;if(i){if(i.byteLength<18)throw new TypeError("Invalid decoder description provided for Opus; must be at least 18 bytes long.");const s=ArrayBuffer.isView(i)?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(i);e=s.getUint16(10,!0),n=s.getInt16(14,!0)}return Ot("dOps",[zt(0),zt(t.info.numberOfChannels),at(e),ve(t.info.sampleRate),dp(n),zt(0)])},Nw=t=>bt("stts",0,0,[ve(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[ve(e.sampleCount),ve(e.sampleDelta)])]),Dw=t=>{if(t.samples.every(n=>n.type==="key"))return null;let e=[...t.samples.entries()].filter(([,n])=>n.type==="key");return bt("stss",0,0,[ve(e.length),e.map(([n])=>ve(n+1))])},Iw=t=>bt("stsc",0,0,[ve(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[ve(e.firstChunk),ve(e.samplesPerChunk),ve(1)])]),Lw=t=>bt("stsz",0,0,[ve(0),ve(t.samples.length),t.samples.map(e=>ve(e.size))]),Uw=t=>t.finalizedChunks.length>0&&Ic(t.finalizedChunks).offset>=2**32?bt("co64",0,0,[ve(t.finalizedChunks.length),t.finalizedChunks.map(e=>fs(e.offset))]):bt("stco",0,0,[ve(t.finalizedChunks.length),t.finalizedChunks.map(e=>ve(e.offset))]),Fw=t=>bt("ctts",0,0,[ve(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[ve(e.sampleCount),ve(e.sampleCompositionTimeOffset)])]),kw=t=>Ot("mvex",null,t.map(Ow)),Ow=t=>bt("trex",0,0,[ve(t.id),ve(1),ve(0),ve(0),ve(0)]),c0=(t,e)=>Ot("moof",null,[Bw(t),...e.map(zw)]),Bw=t=>bt("mfhd",0,0,[ve(t)]),zy=t=>{let e=0,n=0,i=0,r=0,s=t.type==="delta";return n|=+s,s?e|=1:e|=2,e<<24|n<<16|i<<8|r},zw=t=>Ot("traf",null,[jw(t),Vw(t),Hw(t)]),jw=t=>{let e=0;e|=8,e|=16,e|=32,e|=131072;let n=t.currentChunk.samples[1]??t.currentChunk.samples[0],i={duration:n.timescaleUnitsToNextSample,size:n.size,flags:zy(n)};return bt("tfhd",0,e,[ve(t.id),ve(i.duration),ve(i.size),ve(i.flags)])},Vw=t=>bt("tfdt",1,0,[fs(Ci(t.currentChunk.startTimestamp,t.timescale))]),Hw=t=>{let e=t.currentChunk.samples.map(v=>v.timescaleUnitsToNextSample),n=t.currentChunk.samples.map(v=>v.size),i=t.currentChunk.samples.map(zy),r=t.currentChunk.samples.map(v=>Ci(v.presentationTimestamp-v.decodeTimestamp,t.timescale)),s=new Set(e),a=new Set(n),o=new Set(i),l=new Set(r),c=o.size===2&&i[0]!==i[1],f=s.size>1,p=a.size>1,h=!c&&o.size>1,m=l.size>1||[...l].some(v=>v!==0),y=0;return y|=1,y|=4*+c,y|=256*+f,y|=512*+p,y|=1024*+h,y|=2048*+m,bt("trun",1,y,[ve(t.currentChunk.samples.length),ve(t.currentChunk.offset-t.currentChunk.moofOffset||0),c?ve(i[0]):[],t.currentChunk.samples.map((v,g)=>[f?ve(e[g]):[],p?ve(n[g]):[],h?ve(i[g]):[],m?nw(r[g]):[]])])},Gw=t=>Ot("mfra",null,[...t.map(Ww),Xw()]),Ww=(t,e)=>bt("tfra",1,0,[ve(t.id),ve(63),ve(t.finalizedChunks.length),t.finalizedChunks.map(i=>[fs(Ci(i.startTimestamp,t.timescale)),fs(i.moofOffset),ve(e+1),ve(1),ve(1)])]),Xw=()=>bt("mfro",0,0,[ve(0)]),qw={avc:"avc1",hevc:"hvc1",vp9:"vp09",av1:"av01"},$w={avc:bw,hevc:Ew,vp9:Tw,av1:Cw},Yw={aac:"mp4a",opus:"Opus"},Kw={aac:Rw,opus:Pw},su=class{},jy=class extends su{constructor(){super(...arguments),this.buffer=null}},Vy=class extends su{constructor(t){if(super(),this.options=t,typeof t!="object")throw new TypeError("StreamTarget requires an options object to be passed to its constructor.");if(t.onData){if(typeof t.onData!="function")throw new TypeError("options.onData, when provided, must be a function.");if(t.onData.length<2)throw new TypeError("options.onData, when provided, must be a function that takes in at least two arguments (data and position). Ignoring the position argument, which specifies the byte offset at which the data is to be written, can lead to broken outputs.")}if(t.chunked!==void 0&&typeof t.chunked!="boolean")throw new TypeError("options.chunked, when provided, must be a boolean.");if(t.chunkSize!==void 0&&(!Number.isInteger(t.chunkSize)||t.chunkSize<1024))throw new TypeError("options.chunkSize, when provided, must be an integer and not smaller than 1024.")}},Zw=class extends su{constructor(t,e){if(super(),this.stream=t,this.options=e,!(t instanceof FileSystemWritableFileStream))throw new TypeError("FileSystemWritableFileStreamTarget requires a FileSystemWritableFileStream instance.");if(e!==void 0&&typeof e!="object")throw new TypeError("FileSystemWritableFileStreamTarget's options, when provided, must be an object.");if(e&&e.chunkSize!==void 0&&(!Number.isInteger(e.chunkSize)||e.chunkSize<=0))throw new TypeError("options.chunkSize, when provided, must be a positive integer")}},Wr,Ls,Hy=class{constructor(){this.pos=0,We(this,Wr,new Uint8Array(8)),We(this,Ls,new DataView(L(this,Wr).buffer)),this.offsets=new WeakMap}seek(t){this.pos=t}writeU32(t){L(this,Ls).setUint32(0,t,!1),this.write(L(this,Wr).subarray(0,4))}writeU64(t){L(this,Ls).setUint32(0,Math.floor(t/2**32),!1),L(this,Ls).setUint32(4,t,!1),this.write(L(this,Wr).subarray(0,8))}writeAscii(t){for(let e=0;e<t.length;e++)L(this,Ls).setUint8(e%8,t.charCodeAt(e)),e%8===7&&this.write(L(this,Wr));t.length%8!==0&&this.write(L(this,Wr).subarray(0,t.length%8))}writeBox(t){if(this.offsets.set(t,this.pos),t.contents&&!t.children)this.writeBoxHeader(t,t.size??t.contents.byteLength+8),this.write(t.contents);else{let e=this.pos;if(this.writeBoxHeader(t,0),t.contents&&this.write(t.contents),t.children)for(let r of t.children)r&&this.writeBox(r);let n=this.pos,i=t.size??n-e;this.seek(e),this.writeBoxHeader(t,i),this.seek(n)}}writeBoxHeader(t,e){this.writeU32(t.largeSize?1:e),this.writeAscii(t.type),t.largeSize&&this.writeU64(e)}measureBoxHeader(t){return 8+(t.largeSize?8:0)}patchBox(t){let e=this.pos;this.seek(this.offsets.get(t)),this.writeBox(t),this.seek(e)}measureBox(t){if(t.contents&&!t.children)return this.measureBoxHeader(t)+t.contents.byteLength;{let e=this.measureBoxHeader(t);if(t.contents&&(e+=t.contents.byteLength),t.children)for(let n of t.children)n&&(e+=this.measureBox(n));return e}}};Wr=new WeakMap;Ls=new WeakMap;var Ql,os,Lo,Qa,Jl,xh,Qw=class extends Hy{constructor(t){super(),We(this,Jl),We(this,Ql,void 0),We(this,os,new ArrayBuffer(2**16)),We(this,Lo,new Uint8Array(L(this,os))),We(this,Qa,0),Yt(this,Ql,t)}write(t){Ye(this,Jl,xh).call(this,this.pos+t.byteLength),L(this,Lo).set(t,this.pos),this.pos+=t.byteLength,Yt(this,Qa,Math.max(L(this,Qa),this.pos))}finalize(){Ye(this,Jl,xh).call(this,this.pos),L(this,Ql).buffer=L(this,os).slice(0,Math.max(L(this,Qa),this.pos))}};Ql=new WeakMap;os=new WeakMap;Lo=new WeakMap;Qa=new WeakMap;Jl=new WeakSet;xh=function(t){let e=L(this,os).byteLength;for(;e<t;)e*=2;if(e===L(this,os).byteLength)return;let n=new ArrayBuffer(e),i=new Uint8Array(n);i.set(L(this,Lo),0),Yt(this,os,n),Yt(this,Lo,i)};var Jw=2**24,eb=2,fo,Xr,Ja,qi,In,Lc,yh,fp,Gy,pp,Wy,po,Uc,mp=class extends Hy{constructor(t){var e,n;super(),We(this,Lc),We(this,fp),We(this,pp),We(this,po),We(this,fo,void 0),We(this,Xr,[]),We(this,Ja,void 0),We(this,qi,void 0),We(this,In,[]),Yt(this,fo,t),Yt(this,Ja,((e=t.options)==null?void 0:e.chunked)??!1),Yt(this,qi,((n=t.options)==null?void 0:n.chunkSize)??Jw)}write(t){L(this,Xr).push({data:t.slice(),start:this.pos}),this.pos+=t.byteLength}flush(){var n,i;if(L(this,Xr).length===0)return;let t=[],e=[...L(this,Xr)].sort((r,s)=>r.start-s.start);t.push({start:e[0].start,size:e[0].data.byteLength});for(let r=1;r<e.length;r++){let s=t[t.length-1],a=e[r];a.start<=s.start+s.size?s.size=Math.max(s.size,a.start+a.data.byteLength-s.start):t.push({start:a.start,size:a.data.byteLength})}for(let r of t){r.data=new Uint8Array(r.size);for(let s of L(this,Xr))r.start<=s.start&&s.start<r.start+r.size&&r.data.set(s.data,s.start-r.start);L(this,Ja)?(Ye(this,Lc,yh).call(this,r.data,r.start),Ye(this,po,Uc).call(this)):(i=(n=L(this,fo).options).onData)==null||i.call(n,r.data,r.start)}L(this,Xr).length=0}finalize(){L(this,Ja)&&Ye(this,po,Uc).call(this,!0)}};fo=new WeakMap;Xr=new WeakMap;Ja=new WeakMap;qi=new WeakMap;In=new WeakMap;Lc=new WeakSet;yh=function(t,e){let n=L(this,In).findIndex(o=>o.start<=e&&e<o.start+L(this,qi));n===-1&&(n=Ye(this,pp,Wy).call(this,e));let i=L(this,In)[n],r=e-i.start,s=t.subarray(0,Math.min(L(this,qi)-r,t.byteLength));i.data.set(s,r);let a={start:r,end:r+s.byteLength};if(Ye(this,fp,Gy).call(this,i,a),i.written[0].start===0&&i.written[0].end===L(this,qi)&&(i.shouldFlush=!0),L(this,In).length>eb){for(let o=0;o<L(this,In).length-1;o++)L(this,In)[o].shouldFlush=!0;Ye(this,po,Uc).call(this)}s.byteLength<t.byteLength&&Ye(this,Lc,yh).call(this,t.subarray(s.byteLength),e+s.byteLength)};fp=new WeakSet;Gy=function(t,e){let n=0,i=t.written.length-1,r=-1;for(;n<=i;){let s=Math.floor(n+(i-n+1)/2);t.written[s].start<=e.start?(n=s+1,r=s):i=s-1}for(t.written.splice(r+1,0,e),(r===-1||t.written[r].end<e.start)&&r++;r<t.written.length-1&&t.written[r].end>=t.written[r+1].start;)t.written[r].end=Math.max(t.written[r].end,t.written[r+1].end),t.written.splice(r+1,1)};pp=new WeakSet;Wy=function(t){let n={start:Math.floor(t/L(this,qi))*L(this,qi),data:new Uint8Array(L(this,qi)),written:[],shouldFlush:!1};return L(this,In).push(n),L(this,In).sort((i,r)=>i.start-r.start),L(this,In).indexOf(n)};po=new WeakSet;Uc=function(t=!1){var e,n;for(let i=0;i<L(this,In).length;i++){let r=L(this,In)[i];if(!(!r.shouldFlush&&!t)){for(let s of r.written)(n=(e=L(this,fo).options).onData)==null||n.call(e,r.data.subarray(s.start,s.end),r.start+s.start);L(this,In).splice(i--,1)}}};var tb=class extends mp{constructor(t){var e;super(new Vy({onData:(n,i)=>t.stream.write({type:"write",data:n,position:i}),chunked:!0,chunkSize:(e=t.options)==null?void 0:e.chunkSize}))}},_h=1e3,nb=["avc","hevc","vp9","av1"],ib=["aac","opus"],rb=2082844800,sb=["strict","offset","cross-track-offset"],Pe,Ue,Fc,Pn,Jt,qt,$s,na,gp,qr,$r,mo,Mh,Xy,Sh,qy,vp,$y,wh,Yy,xp,Ky,ec,bh,yi,Oi,yp,Zy,go,kc,Oc,_p,ma,Vo,tc,Eh,ab=class{constructor(t){if(We(this,Mh),We(this,Sh),We(this,vp),We(this,wh),We(this,xp),We(this,ec),We(this,yi),We(this,yp),We(this,go),We(this,Oc),We(this,ma),We(this,tc),We(this,Pe,void 0),We(this,Ue,void 0),We(this,Fc,void 0),We(this,Pn,void 0),We(this,Jt,null),We(this,qt,null),We(this,$s,Math.floor(Date.now()/1e3)+rb),We(this,na,[]),We(this,gp,1),We(this,qr,[]),We(this,$r,[]),We(this,mo,!1),Ye(this,Mh,Xy).call(this,t),t.video=ho(t.video),t.audio=ho(t.audio),t.fastStart=ho(t.fastStart),this.target=t.target,Yt(this,Pe,{firstTimestampBehavior:"strict",...t}),t.target instanceof jy)Yt(this,Ue,new Qw(t.target));else if(t.target instanceof Vy)Yt(this,Ue,new mp(t.target));else if(t.target instanceof Zw)Yt(this,Ue,new tb(t.target));else throw new Error(`Invalid target: ${t.target}`);Ye(this,wh,Yy).call(this),Ye(this,Sh,qy).call(this)}addVideoChunk(t,e,n,i){if(!(t instanceof EncodedVideoChunk))throw new TypeError("addVideoChunk's first argument (sample) must be of type EncodedVideoChunk.");if(e&&typeof e!="object")throw new TypeError("addVideoChunk's second argument (meta), when provided, must be an object.");if(n!==void 0&&(!Number.isFinite(n)||n<0))throw new TypeError("addVideoChunk's third argument (timestamp), when provided, must be a non-negative real number.");if(i!==void 0&&!Number.isFinite(i))throw new TypeError("addVideoChunk's fourth argument (compositionTimeOffset), when provided, must be a real number.");let r=new Uint8Array(t.byteLength);t.copyTo(r),this.addVideoChunkRaw(r,t.type,n??t.timestamp,t.duration,e,i)}addVideoChunkRaw(t,e,n,i,r,s){if(!(t instanceof Uint8Array))throw new TypeError("addVideoChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addVideoChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(n)||n<0)throw new TypeError("addVideoChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(i)||i<0)throw new TypeError("addVideoChunkRaw's fourth argument (duration) must be a non-negative real number.");if(r&&typeof r!="object")throw new TypeError("addVideoChunkRaw's fifth argument (meta), when provided, must be an object.");if(s!==void 0&&!Number.isFinite(s))throw new TypeError("addVideoChunkRaw's sixth argument (compositionTimeOffset), when provided, must be a real number.");if(Ye(this,tc,Eh).call(this),!L(this,Pe).video)throw new Error("No video track declared.");if(typeof L(this,Pe).fastStart=="object"&&L(this,Jt).samples.length===L(this,Pe).fastStart.expectedVideoChunks)throw new Error(`Cannot add more video chunks than specified in 'fastStart' (${L(this,Pe).fastStart.expectedVideoChunks}).`);let a=Ye(this,ec,bh).call(this,L(this,Jt),t,e,n,i,r,s);if(L(this,Pe).fastStart==="fragmented"&&L(this,qt)){for(;L(this,$r).length>0&&L(this,$r)[0].decodeTimestamp<=a.decodeTimestamp;){let o=L(this,$r).shift();Ye(this,yi,Oi).call(this,L(this,qt),o)}a.decodeTimestamp<=L(this,qt).lastDecodeTimestamp?Ye(this,yi,Oi).call(this,L(this,Jt),a):L(this,qr).push(a)}else Ye(this,yi,Oi).call(this,L(this,Jt),a)}addAudioChunk(t,e,n){if(!(t instanceof EncodedAudioChunk))throw new TypeError("addAudioChunk's first argument (sample) must be of type EncodedAudioChunk.");if(e&&typeof e!="object")throw new TypeError("addAudioChunk's second argument (meta), when provided, must be an object.");if(n!==void 0&&(!Number.isFinite(n)||n<0))throw new TypeError("addAudioChunk's third argument (timestamp), when provided, must be a non-negative real number.");let i=new Uint8Array(t.byteLength);t.copyTo(i),this.addAudioChunkRaw(i,t.type,n??t.timestamp,t.duration,e)}addAudioChunkRaw(t,e,n,i,r){if(!(t instanceof Uint8Array))throw new TypeError("addAudioChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addAudioChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(n)||n<0)throw new TypeError("addAudioChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(i)||i<0)throw new TypeError("addAudioChunkRaw's fourth argument (duration) must be a non-negative real number.");if(r&&typeof r!="object")throw new TypeError("addAudioChunkRaw's fifth argument (meta), when provided, must be an object.");if(Ye(this,tc,Eh).call(this),!L(this,Pe).audio)throw new Error("No audio track declared.");if(typeof L(this,Pe).fastStart=="object"&&L(this,qt).samples.length===L(this,Pe).fastStart.expectedAudioChunks)throw new Error(`Cannot add more audio chunks than specified in 'fastStart' (${L(this,Pe).fastStart.expectedAudioChunks}).`);let s=Ye(this,ec,bh).call(this,L(this,qt),t,e,n,i,r);if(L(this,Pe).fastStart==="fragmented"&&L(this,Jt)){for(;L(this,qr).length>0&&L(this,qr)[0].decodeTimestamp<=s.decodeTimestamp;){let a=L(this,qr).shift();Ye(this,yi,Oi).call(this,L(this,Jt),a)}s.decodeTimestamp<=L(this,Jt).lastDecodeTimestamp?Ye(this,yi,Oi).call(this,L(this,qt),s):L(this,$r).push(s)}else Ye(this,yi,Oi).call(this,L(this,qt),s)}finalize(){if(L(this,mo))throw new Error("Cannot finalize a muxer more than once.");if(L(this,Pe).fastStart==="fragmented"){for(let e of L(this,qr))Ye(this,yi,Oi).call(this,L(this,Jt),e);for(let e of L(this,$r))Ye(this,yi,Oi).call(this,L(this,qt),e);Ye(this,Oc,_p).call(this,!1)}else L(this,Jt)&&Ye(this,go,kc).call(this,L(this,Jt)),L(this,qt)&&Ye(this,go,kc).call(this,L(this,qt));let t=[L(this,Jt),L(this,qt)].filter(Boolean);if(L(this,Pe).fastStart==="in-memory"){let e;for(let i=0;i<2;i++){let r=Zl(t,L(this,$s)),s=L(this,Ue).measureBox(r);e=L(this,Ue).measureBox(L(this,Pn));let a=L(this,Ue).pos+s+e;for(let o of L(this,na)){o.offset=a;for(let{data:l}of o.samples)a+=l.byteLength,e+=l.byteLength}if(a<2**32)break;e>=2**32&&(L(this,Pn).largeSize=!0)}let n=Zl(t,L(this,$s));L(this,Ue).writeBox(n),L(this,Pn).size=e,L(this,Ue).writeBox(L(this,Pn));for(let i of L(this,na))for(let r of i.samples)L(this,Ue).write(r.data),r.data=null}else if(L(this,Pe).fastStart==="fragmented"){let e=L(this,Ue).pos,n=Gw(t);L(this,Ue).writeBox(n);let i=L(this,Ue).pos-e;L(this,Ue).seek(L(this,Ue).pos-4),L(this,Ue).writeU32(i)}else{let e=L(this,Ue).offsets.get(L(this,Pn)),n=L(this,Ue).pos-e;L(this,Pn).size=n,L(this,Pn).largeSize=n>=2**32,L(this,Ue).patchBox(L(this,Pn));let i=Zl(t,L(this,$s));if(typeof L(this,Pe).fastStart=="object"){L(this,Ue).seek(L(this,Fc)),L(this,Ue).writeBox(i);let r=e-L(this,Ue).pos;L(this,Ue).writeBox(rw(r))}else L(this,Ue).writeBox(i)}Ye(this,ma,Vo).call(this),L(this,Ue).finalize(),Yt(this,mo,!0)}};Pe=new WeakMap;Ue=new WeakMap;Fc=new WeakMap;Pn=new WeakMap;Jt=new WeakMap;qt=new WeakMap;$s=new WeakMap;na=new WeakMap;gp=new WeakMap;qr=new WeakMap;$r=new WeakMap;mo=new WeakMap;Mh=new WeakSet;Xy=function(t){if(typeof t!="object")throw new TypeError("The muxer requires an options object to be passed to its constructor.");if(!(t.target instanceof su))throw new TypeError("The target must be provided and an instance of Target.");if(t.video){if(!nb.includes(t.video.codec))throw new TypeError(`Unsupported video codec: ${t.video.codec}`);if(!Number.isInteger(t.video.width)||t.video.width<=0)throw new TypeError(`Invalid video width: ${t.video.width}. Must be a positive integer.`);if(!Number.isInteger(t.video.height)||t.video.height<=0)throw new TypeError(`Invalid video height: ${t.video.height}. Must be a positive integer.`);const e=t.video.rotation;if(typeof e=="number"&&![0,90,180,270].includes(e))throw new TypeError(`Invalid video rotation: ${e}. Has to be 0, 90, 180 or 270.`);if(Array.isArray(e)&&(e.length!==9||e.some(n=>typeof n!="number")))throw new TypeError(`Invalid video transformation matrix: ${e.join()}`);if(t.video.frameRate!==void 0&&(!Number.isInteger(t.video.frameRate)||t.video.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${t.video.frameRate}. Must be a positive integer.`)}if(t.audio){if(!ib.includes(t.audio.codec))throw new TypeError(`Unsupported audio codec: ${t.audio.codec}`);if(!Number.isInteger(t.audio.numberOfChannels)||t.audio.numberOfChannels<=0)throw new TypeError(`Invalid number of audio channels: ${t.audio.numberOfChannels}. Must be a positive integer.`);if(!Number.isInteger(t.audio.sampleRate)||t.audio.sampleRate<=0)throw new TypeError(`Invalid audio sample rate: ${t.audio.sampleRate}. Must be a positive integer.`)}if(t.firstTimestampBehavior&&!sb.includes(t.firstTimestampBehavior))throw new TypeError(`Invalid first timestamp behavior: ${t.firstTimestampBehavior}`);if(typeof t.fastStart=="object"){if(t.video){if(t.fastStart.expectedVideoChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedVideoChunks'.");if(!Number.isInteger(t.fastStart.expectedVideoChunks)||t.fastStart.expectedVideoChunks<0)throw new TypeError("'expectedVideoChunks' must be a non-negative integer.")}if(t.audio){if(t.fastStart.expectedAudioChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedAudioChunks'.");if(!Number.isInteger(t.fastStart.expectedAudioChunks)||t.fastStart.expectedAudioChunks<0)throw new TypeError("'expectedAudioChunks' must be a non-negative integer.")}}else if(![!1,"in-memory","fragmented"].includes(t.fastStart))throw new TypeError("'fastStart' option must be false, 'in-memory', 'fragmented' or an object.");if(t.minFragmentDuration!==void 0&&(!Number.isFinite(t.minFragmentDuration)||t.minFragmentDuration<0))throw new TypeError("'minFragmentDuration' must be a non-negative number.")};Sh=new WeakSet;qy=function(){var t;if(L(this,Ue).writeBox(iw({holdsAvc:((t=L(this,Pe).video)==null?void 0:t.codec)==="avc",fragmented:L(this,Pe).fastStart==="fragmented"})),Yt(this,Fc,L(this,Ue).pos),L(this,Pe).fastStart==="in-memory")Yt(this,Pn,vh(!1));else if(L(this,Pe).fastStart!=="fragmented"){if(typeof L(this,Pe).fastStart=="object"){let e=Ye(this,vp,$y).call(this);L(this,Ue).seek(L(this,Ue).pos+e)}Yt(this,Pn,vh(!0)),L(this,Ue).writeBox(L(this,Pn))}Ye(this,ma,Vo).call(this)};vp=new WeakSet;$y=function(){if(typeof L(this,Pe).fastStart!="object")return;let t=0,e=[L(this,Pe).fastStart.expectedVideoChunks,L(this,Pe).fastStart.expectedAudioChunks];for(let n of e)n&&(t+=8*Math.ceil(2/3*n),t+=4*n,t+=12*Math.ceil(2/3*n),t+=4*n,t+=8*n);return t+=4096,t};wh=new WeakSet;Yy=function(){if(L(this,Pe).video&&Yt(this,Jt,{id:1,info:{type:"video",codec:L(this,Pe).video.codec,width:L(this,Pe).video.width,height:L(this,Pe).video.height,rotation:L(this,Pe).video.rotation??0,decoderConfig:null},timescale:L(this,Pe).video.frameRate??57600,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),L(this,Pe).audio&&(Yt(this,qt,{id:L(this,Pe).video?2:1,info:{type:"audio",codec:L(this,Pe).audio.codec,numberOfChannels:L(this,Pe).audio.numberOfChannels,sampleRate:L(this,Pe).audio.sampleRate,decoderConfig:null},timescale:L(this,Pe).audio.sampleRate,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),L(this,Pe).audio.codec==="aac")){let t=Ye(this,xp,Ky).call(this,2,L(this,Pe).audio.sampleRate,L(this,Pe).audio.numberOfChannels);L(this,qt).info.decoderConfig={codec:L(this,Pe).audio.codec,description:t,numberOfChannels:L(this,Pe).audio.numberOfChannels,sampleRate:L(this,Pe).audio.sampleRate}}};xp=new WeakSet;Ky=function(t,e,n){let r=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350].indexOf(e),s=n,a="";a+=t.toString(2).padStart(5,"0"),a+=r.toString(2).padStart(4,"0"),r===15&&(a+=e.toString(2).padStart(24,"0")),a+=s.toString(2).padStart(4,"0");let o=Math.ceil(a.length/8)*8;a=a.padEnd(o,"0");let l=new Uint8Array(a.length/8);for(let c=0;c<a.length;c+=8)l[c/8]=parseInt(a.slice(c,c+8),2);return l};ec=new WeakSet;bh=function(t,e,n,i,r,s,a){let o=i/1e6,l=(i-(a??0))/1e6,c=r/1e6,f=Ye(this,yp,Zy).call(this,o,l,t);return o=f.presentationTimestamp,l=f.decodeTimestamp,s!=null&&s.decoderConfig&&(t.info.decoderConfig===null?t.info.decoderConfig=s.decoderConfig:Object.assign(t.info.decoderConfig,s.decoderConfig)),{presentationTimestamp:o,decodeTimestamp:l,duration:c,data:e,size:e.byteLength,type:n,timescaleUnitsToNextSample:Ci(c,t.timescale)}};yi=new WeakSet;Oi=function(t,e){L(this,Pe).fastStart!=="fragmented"&&t.samples.push(e);const n=Ci(e.presentationTimestamp-e.decodeTimestamp,t.timescale);if(t.lastTimescaleUnits!==null){let r=Ci(e.decodeTimestamp,t.timescale,!1),s=Math.round(r-t.lastTimescaleUnits);if(t.lastTimescaleUnits+=s,t.lastSample.timescaleUnitsToNextSample=s,L(this,Pe).fastStart!=="fragmented"){let a=Ic(t.timeToSampleTable);a.sampleCount===1?(a.sampleDelta=s,a.sampleCount++):a.sampleDelta===s?a.sampleCount++:(a.sampleCount--,t.timeToSampleTable.push({sampleCount:2,sampleDelta:s}));const o=Ic(t.compositionTimeOffsetTable);o.sampleCompositionTimeOffset===n?o.sampleCount++:t.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:n})}}else t.lastTimescaleUnits=0,L(this,Pe).fastStart!=="fragmented"&&(t.timeToSampleTable.push({sampleCount:1,sampleDelta:Ci(e.duration,t.timescale)}),t.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:n}));t.lastSample=e;let i=!1;if(!t.currentChunk)i=!0;else{let r=e.presentationTimestamp-t.currentChunk.startTimestamp;if(L(this,Pe).fastStart==="fragmented"){let s=L(this,Jt)??L(this,qt);const a=L(this,Pe).minFragmentDuration??1;t===s&&e.type==="key"&&r>=a&&(i=!0,Ye(this,Oc,_p).call(this))}else i=r>=.5}i&&(t.currentChunk&&Ye(this,go,kc).call(this,t),t.currentChunk={startTimestamp:e.presentationTimestamp,samples:[]}),t.currentChunk.samples.push(e)};yp=new WeakSet;Zy=function(t,e,n){var a,o;const i=L(this,Pe).firstTimestampBehavior==="strict",r=n.lastDecodeTimestamp===-1;if(i&&r&&e!==0)throw new Error(`The first chunk for your media track must have a timestamp of 0 (received DTS=${e}).Non-zero first timestamps are often caused by directly piping frames or audio data from a MediaStreamTrack into the encoder. Their timestamps are typically relative to the age of thedocument, which is probably what you want.

If you want to offset all timestamps of a track such that the first one is zero, set firstTimestampBehavior: 'offset' in the options.
`);if(L(this,Pe).firstTimestampBehavior==="offset"||L(this,Pe).firstTimestampBehavior==="cross-track-offset"){n.firstDecodeTimestamp===void 0&&(n.firstDecodeTimestamp=e);let l;L(this,Pe).firstTimestampBehavior==="offset"?l=n.firstDecodeTimestamp:l=Math.min(((a=L(this,Jt))==null?void 0:a.firstDecodeTimestamp)??1/0,((o=L(this,qt))==null?void 0:o.firstDecodeTimestamp)??1/0),e-=l,t-=l}if(e<n.lastDecodeTimestamp)throw new Error(`Timestamps must be monotonically increasing (DTS went from ${n.lastDecodeTimestamp*1e6} to ${e*1e6}).`);return n.lastDecodeTimestamp=e,{presentationTimestamp:t,decodeTimestamp:e}};go=new WeakSet;kc=function(t){if(L(this,Pe).fastStart==="fragmented")throw new Error("Can't finalize individual chunks if 'fastStart' is set to 'fragmented'.");if(t.currentChunk){if(t.finalizedChunks.push(t.currentChunk),L(this,na).push(t.currentChunk),(t.compactlyCodedChunkTable.length===0||Ic(t.compactlyCodedChunkTable).samplesPerChunk!==t.currentChunk.samples.length)&&t.compactlyCodedChunkTable.push({firstChunk:t.finalizedChunks.length,samplesPerChunk:t.currentChunk.samples.length}),L(this,Pe).fastStart==="in-memory"){t.currentChunk.offset=0;return}t.currentChunk.offset=L(this,Ue).pos;for(let e of t.currentChunk.samples)L(this,Ue).write(e.data),e.data=null;Ye(this,ma,Vo).call(this)}};Oc=new WeakSet;_p=function(t=!0){if(L(this,Pe).fastStart!=="fragmented")throw new Error("Can't finalize a fragment unless 'fastStart' is set to 'fragmented'.");let e=[L(this,Jt),L(this,qt)].filter(o=>o&&o.currentChunk);if(e.length===0)return;let n=ew(this,gp)._++;if(n===1){let o=Zl(e,L(this,$s),!0);L(this,Ue).writeBox(o)}let i=L(this,Ue).pos,r=c0(n,e);L(this,Ue).writeBox(r);{let o=vh(!1),l=0;for(let f of e)for(let p of f.currentChunk.samples)l+=p.size;let c=L(this,Ue).measureBox(o)+l;c>=2**32&&(o.largeSize=!0,c=L(this,Ue).measureBox(o)+l),o.size=c,L(this,Ue).writeBox(o)}for(let o of e){o.currentChunk.offset=L(this,Ue).pos,o.currentChunk.moofOffset=i;for(let l of o.currentChunk.samples)L(this,Ue).write(l.data),l.data=null}let s=L(this,Ue).pos;L(this,Ue).seek(L(this,Ue).offsets.get(r));let a=c0(n,e);L(this,Ue).writeBox(a),L(this,Ue).seek(s);for(let o of e)o.finalizedChunks.push(o.currentChunk),L(this,na).push(o.currentChunk),o.currentChunk=null;t&&Ye(this,ma,Vo).call(this)};ma=new WeakSet;Vo=function(){L(this,Ue)instanceof mp&&L(this,Ue).flush()};tc=new WeakSet;Eh=function(){if(L(this,mo))throw new Error("Cannot add new video or audio chunks after the file has been finalized.")};const ob={"16:9":{"720p":{width:1280,height:720},"1080p":{width:1920,height:1080},"1440p":{width:2560,height:1440},"4k":{width:3840,height:2160}},"9:16":{"720p":{width:720,height:1280},"1080p":{width:1080,height:1920},"1440p":{width:1440,height:2560},"4k":{width:2160,height:3840}},"1:1":{"720p":{width:720,height:720},"1080p":{width:1080,height:1080},"1440p":{width:1440,height:1440},"4k":{width:2160,height:2160}}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mp="170",lb=0,u0=1,cb=2,Qy=1,ub=2,Bi=3,Nr=0,Tn=1,Ln=2,$i=0,Fn=1,fn=2,d0=3,h0=4,db=5,Zr=100,hb=101,fb=102,pb=103,mb=104,gb=200,vb=201,xb=202,yb=203,Th=204,Ch=205,_b=206,Mb=207,Sb=208,wb=209,bb=210,Eb=211,Tb=212,Cb=213,Ab=214,Ah=0,Rh=1,Ph=2,ga=3,Nh=4,Dh=5,Ih=6,Lh=7,Jy=0,Rb=1,Pb=2,Ar=0,e_=1,t_=2,n_=3,Sp=4,Nb=5,i_=6,r_=7,s_=300,va=301,xa=302,Uh=303,Fh=304,au=306,kh=1e3,ns=1001,Oh=1002,mi=1003,Db=1004,fl=1005,bi=1006,Bu=1007,is=1008,tr=1009,a_=1010,o_=1011,Uo=1012,wp=1013,ps=1014,Gi=1015,Ai=1016,bp=1017,Ep=1018,ya=1020,l_=35902,c_=1021,u_=1022,Yn=1023,d_=1024,h_=1025,ia=1026,_a=1027,f_=1028,Tp=1029,p_=1030,Cp=1031,Ap=1033,nc=33776,ic=33777,rc=33778,sc=33779,Bh=35840,zh=35841,jh=35842,Vh=35843,Hh=36196,Gh=37492,Wh=37496,Xh=37808,qh=37809,$h=37810,Yh=37811,Kh=37812,Zh=37813,Qh=37814,Jh=37815,ef=37816,tf=37817,nf=37818,rf=37819,sf=37820,af=37821,ac=36492,of=36494,lf=36495,m_=36283,cf=36284,uf=36285,df=36286,Ib=3200,Lb=3201,g_=0,Ub=1,gr="",Wn="srgb",Ta="srgb-linear",ou="linear",dt="srgb",_s=7680,f0=519,Fb=512,kb=513,Ob=514,v_=515,Bb=516,zb=517,jb=518,Vb=519,p0=35044,m0="300 es",Wi=2e3,Bc=2001;class Ca{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zu=Math.PI/180,hf=180/Math.PI;function Ho(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[t&255]+on[t>>8&255]+on[t>>16&255]+on[t>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function Mn(t,e,n){return Math.max(e,Math.min(n,t))}function Hb(t,e){return(t%e+e)%e}function ju(t,e,n){return(1-n)*t+n*e}function za(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function yn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,n=0){Fe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],h=i[2],m=i[5],y=i[8],v=r[0],g=r[3],u=r[6],x=r[1],_=r[4],M=r[7],A=r[2],T=r[5],C=r[8];return s[0]=a*v+o*x+l*A,s[3]=a*g+o*_+l*T,s[6]=a*u+o*M+l*C,s[1]=c*v+f*x+p*A,s[4]=c*g+f*_+p*T,s[7]=c*u+f*M+p*C,s[2]=h*v+m*x+y*A,s[5]=h*g+m*_+y*T,s[8]=h*u+m*M+y*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=f*a-o*c,h=o*l-f*s,m=c*s-a*l,y=n*p+i*h+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return e[0]=p*v,e[1]=(r*c-f*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-o*n)*v,e[6]=m*v,e[7]=(i*l-c*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Vu.makeScale(e,n)),this}rotate(e){return this.premultiply(Vu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Vu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vu=new Ve;function x_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Gb(){const t=zc("canvas");return t.style.display="block",t}const g0={};function eo(t){t in g0||(g0[t]=!0,console.warn(t))}function Wb(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Xb(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qb(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Je={enabled:!0,workingColorSpace:Ta,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===dt&&(t.r=Yi(t.r),t.g=Yi(t.g),t.b=Yi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===dt&&(t.r=ra(t.r),t.g=ra(t.g),t.b=ra(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===gr?ou:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Yi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ra(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const v0=[.64,.33,.3,.6,.15,.06],x0=[.2126,.7152,.0722],y0=[.3127,.329],_0=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),M0=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[Ta]:{primaries:v0,whitePoint:y0,transfer:ou,toXYZ:_0,fromXYZ:M0,luminanceCoefficients:x0,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:v0,whitePoint:y0,transfer:dt,toXYZ:_0,fromXYZ:M0,luminanceCoefficients:x0,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}});let Ms;class $b{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=zc("canvas")),Ms.width=e.width,Ms.height=e.height;const i=Ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Yi(n[i]/255)*255):n[i]=Yi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yb=0;class y_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Hu(r[a].image)):s.push(Hu(r[a]))}else s=Hu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Hu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$b.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kb=0;class mn extends Ca{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=ns,r=ns,s=bi,a=is,o=Yn,l=tr,c=mn.DEFAULT_ANISOTROPY,f=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kb++}),this.uuid=Ho(),this.name="",this.source=new y_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kh:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case Oh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kh:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case Oh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=s_;mn.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,n=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],p=l[8],h=l[1],m=l[5],y=l[9],v=l[2],g=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(p-v)<.01&&Math.abs(y-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+v)<.1&&Math.abs(y+g)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(m+1)/2,A=(u+1)/2,T=(f+h)/4,C=(p+v)/4,R=(y+g)/4;return _>M&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=C/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=R/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=R/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-y)*(g-y)+(p-v)*(p-v)+(h-f)*(h-f));return Math.abs(x)<.001&&(x=1),this.x=(g-y)/x,this.y=(p-v)/x,this.z=(h-f)/x,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zb extends Ca{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new pt(0,0,e,n),this.scissorTest=!1,this.viewport=new pt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new y_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Zb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class __ extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=mi,this.minFilter=mi,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qb extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=mi,this.minFilter=mi,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],p=i[r+3];const h=s[a+0],m=s[a+1],y=s[a+2],v=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=y,e[n+3]=v;return}if(p!==v||l!==h||c!==m||f!==y){let g=1-o;const u=l*h+c*m+f*y+p*v,x=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const A=Math.sqrt(_),T=Math.atan2(A,u*x);g=Math.sin(g*T)/A,o=Math.sin(o*T)/A}const M=o*x;if(l=l*g+h*M,c=c*g+m*M,f=f*g+y*M,p=p*g+v*M,g===1-o){const A=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=A,c*=A,f*=A,p*=A}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],p=s[a],h=s[a+1],m=s[a+2],y=s[a+3];return e[n]=o*y+f*p+l*m-c*h,e[n+1]=l*y+f*h+c*p-o*m,e[n+2]=c*y+f*m+o*h-l*p,e[n+3]=f*y-o*p-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),p=o(s/2),h=l(i/2),m=l(r/2),y=l(s/2);switch(a){case"XYZ":this._x=h*f*p+c*m*y,this._y=c*m*p-h*f*y,this._z=c*f*y+h*m*p,this._w=c*f*p-h*m*y;break;case"YXZ":this._x=h*f*p+c*m*y,this._y=c*m*p-h*f*y,this._z=c*f*y-h*m*p,this._w=c*f*p+h*m*y;break;case"ZXY":this._x=h*f*p-c*m*y,this._y=c*m*p+h*f*y,this._z=c*f*y+h*m*p,this._w=c*f*p-h*m*y;break;case"ZYX":this._x=h*f*p-c*m*y,this._y=c*m*p+h*f*y,this._z=c*f*y-h*m*p,this._w=c*f*p+h*m*y;break;case"YZX":this._x=h*f*p+c*m*y,this._y=c*m*p+h*f*y,this._z=c*f*y-h*m*p,this._w=c*f*p-h*m*y;break;case"XZY":this._x=h*f*p-c*m*y,this._y=c*m*p-h*f*y,this._z=c*f*y+h*m*p,this._w=c*f*p+h*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],h=i+o+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),p=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=a*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(S0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(S0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*c+a*p-o*f,this.y=i+l*f+o*c-s*p,this.z=r+l*p+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gu.copy(this).projectOnVector(e),this.sub(Gu)}reflect(e){return this.sub(Gu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gu=new U,S0=new Go;class Wo{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ii):ii.fromBufferAttribute(s,a),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pl.copy(i.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ja),ml.subVectors(this.max,ja),Ss.subVectors(e.a,ja),ws.subVectors(e.b,ja),bs.subVectors(e.c,ja),ar.subVectors(ws,Ss),or.subVectors(bs,ws),kr.subVectors(Ss,bs);let n=[0,-ar.z,ar.y,0,-or.z,or.y,0,-kr.z,kr.y,ar.z,0,-ar.x,or.z,0,-or.x,kr.z,0,-kr.x,-ar.y,ar.x,0,-or.y,or.x,0,-kr.y,kr.x,0];return!Wu(n,Ss,ws,bs,ml)||(n=[1,0,0,0,1,0,0,0,1],!Wu(n,Ss,ws,bs,ml))?!1:(gl.crossVectors(ar,or),n=[gl.x,gl.y,gl.z],Wu(n,Ss,ws,bs,ml))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new U,new U,new U,new U,new U,new U,new U,new U],ii=new U,pl=new Wo,Ss=new U,ws=new U,bs=new U,ar=new U,or=new U,kr=new U,ja=new U,ml=new U,gl=new U,Or=new U;function Wu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Or.fromArray(t,s);const o=r.x*Math.abs(Or.x)+r.y*Math.abs(Or.y)+r.z*Math.abs(Or.z),l=e.dot(Or),c=n.dot(Or),f=i.dot(Or);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Jb=new Wo,Va=new U,Xu=new U;class Xo{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Jb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);const n=Va.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Va,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(Xu)),this.expandByPoint(Va.copy(e.center).sub(Xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new U,qu=new U,vl=new U,lr=new U,$u=new U,xl=new U,Yu=new U;class Rp{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){qu.copy(e).add(n).multiplyScalar(.5),vl.copy(n).sub(e).normalize(),lr.copy(this.origin).sub(qu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(vl),o=lr.dot(this.direction),l=-lr.dot(vl),c=lr.lengthSq(),f=Math.abs(1-a*a);let p,h,m,y;if(f>0)if(p=a*l-o,h=a*o-l,y=s*f,p>=0)if(h>=-y)if(h<=y){const v=1/f;p*=v,h*=v,m=p*(p+a*h+2*o)+h*(a*p+h+2*l)+c}else h=s,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*l)+c;else h<=-y?(p=Math.max(0,-(-a*s+o)),h=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c):h<=y?(p=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(p=Math.max(0,-(a*s+o)),h=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c);else h=a>0?-s:s,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(qu).addScaledVector(vl,h),m}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,i,r,s){$u.subVectors(n,e),xl.subVectors(i,e),Yu.crossVectors($u,xl);let a=this.direction.dot(Yu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;lr.subVectors(this.origin,e);const l=o*this.direction.dot(xl.crossVectors(lr,xl));if(l<0)return null;const c=o*this.direction.dot($u.cross(lr));if(c<0||l+c>a)return null;const f=-o*lr.dot(Yu);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,n,i,r,s,a,o,l,c,f,p,h,m,y,v,g){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,p,h,m,y,v,g)}set(e,n,i,r,s,a,o,l,c,f,p,h,m,y,v,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=p,u[14]=h,u[3]=m,u[7]=y,u[11]=v,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Es.setFromMatrixColumn(e,0).length(),s=1/Es.setFromMatrixColumn(e,1).length(),a=1/Es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=a*f,m=a*p,y=o*f,v=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=m+y*c,n[5]=h-v*c,n[9]=-o*l,n[2]=v-h*c,n[6]=y+m*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*f,m=l*p,y=c*f,v=c*p;n[0]=h+v*o,n[4]=y*o-m,n[8]=a*c,n[1]=a*p,n[5]=a*f,n[9]=-o,n[2]=m*o-y,n[6]=v+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*f,m=l*p,y=c*f,v=c*p;n[0]=h-v*o,n[4]=-a*p,n[8]=y+m*o,n[1]=m+y*o,n[5]=a*f,n[9]=v-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*f,m=a*p,y=o*f,v=o*p;n[0]=l*f,n[4]=y*c-m,n[8]=h*c+v,n[1]=l*p,n[5]=v*c+h,n[9]=m*c-y,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,y=o*l,v=o*c;n[0]=l*f,n[4]=v-h*p,n[8]=y*p+m,n[1]=p,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=m*p+y,n[10]=h-v*p}else if(e.order==="XZY"){const h=a*l,m=a*c,y=o*l,v=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=h*p+v,n[5]=a*f,n[9]=m*p-y,n[2]=y*p-m,n[6]=o*f,n[10]=v*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eE,e,tE)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),cr.crossVectors(i,An),cr.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),cr.crossVectors(i,An)),cr.normalize(),yl.crossVectors(An,cr),r[0]=cr.x,r[4]=yl.x,r[8]=An.x,r[1]=cr.y,r[5]=yl.y,r[9]=An.y,r[2]=cr.z,r[6]=yl.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],h=i[9],m=i[13],y=i[2],v=i[6],g=i[10],u=i[14],x=i[3],_=i[7],M=i[11],A=i[15],T=r[0],C=r[4],R=r[8],w=r[12],S=r[1],N=r[5],V=r[9],j=r[13],I=r[2],B=r[6],H=r[10],K=r[14],D=r[3],G=r[7],$=r[11],ne=r[15];return s[0]=a*T+o*S+l*I+c*D,s[4]=a*C+o*N+l*B+c*G,s[8]=a*R+o*V+l*H+c*$,s[12]=a*w+o*j+l*K+c*ne,s[1]=f*T+p*S+h*I+m*D,s[5]=f*C+p*N+h*B+m*G,s[9]=f*R+p*V+h*H+m*$,s[13]=f*w+p*j+h*K+m*ne,s[2]=y*T+v*S+g*I+u*D,s[6]=y*C+v*N+g*B+u*G,s[10]=y*R+v*V+g*H+u*$,s[14]=y*w+v*j+g*K+u*ne,s[3]=x*T+_*S+M*I+A*D,s[7]=x*C+_*N+M*B+A*G,s[11]=x*R+_*V+M*H+A*$,s[15]=x*w+_*j+M*K+A*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],p=e[6],h=e[10],m=e[14],y=e[3],v=e[7],g=e[11],u=e[15];return y*(+s*l*p-r*c*p-s*o*h+i*c*h+r*o*m-i*l*m)+v*(+n*l*m-n*c*h+s*a*h-r*a*m+r*c*f-s*l*f)+g*(+n*c*p-n*o*m-s*a*p+i*a*m+s*o*f-i*c*f)+u*(-r*o*f-n*l*p+n*o*h+r*a*p-i*a*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=e[9],h=e[10],m=e[11],y=e[12],v=e[13],g=e[14],u=e[15],x=p*g*c-v*h*c+v*l*m-o*g*m-p*l*u+o*h*u,_=y*h*c-f*g*c-y*l*m+a*g*m+f*l*u-a*h*u,M=f*v*c-y*p*c+y*o*m-a*v*m-f*o*u+a*p*u,A=y*p*l-f*v*l-y*o*h+a*v*h+f*o*g-a*p*g,T=n*x+i*_+r*M+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=x*C,e[1]=(v*h*s-p*g*s-v*r*m+i*g*m+p*r*u-i*h*u)*C,e[2]=(o*g*s-v*l*s+v*r*c-i*g*c-o*r*u+i*l*u)*C,e[3]=(p*l*s-o*h*s-p*r*c+i*h*c+o*r*m-i*l*m)*C,e[4]=_*C,e[5]=(f*g*s-y*h*s+y*r*m-n*g*m-f*r*u+n*h*u)*C,e[6]=(y*l*s-a*g*s-y*r*c+n*g*c+a*r*u-n*l*u)*C,e[7]=(a*h*s-f*l*s+f*r*c-n*h*c-a*r*m+n*l*m)*C,e[8]=M*C,e[9]=(y*p*s-f*v*s-y*i*m+n*v*m+f*i*u-n*p*u)*C,e[10]=(a*v*s-y*o*s+y*i*c-n*v*c-a*i*u+n*o*u)*C,e[11]=(f*o*s-a*p*s-f*i*c+n*p*c+a*i*m-n*o*m)*C,e[12]=A*C,e[13]=(f*v*r-y*p*r+y*i*h-n*v*h-f*i*g+n*p*g)*C,e[14]=(y*o*r-a*v*r-y*i*l+n*v*l+a*i*g-n*o*g)*C,e[15]=(a*p*r-f*o*r+f*i*l-n*p*l-a*i*h+n*o*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,p=o+o,h=s*c,m=s*f,y=s*p,v=a*f,g=a*p,u=o*p,x=l*c,_=l*f,M=l*p,A=i.x,T=i.y,C=i.z;return r[0]=(1-(v+u))*A,r[1]=(m+M)*A,r[2]=(y-_)*A,r[3]=0,r[4]=(m-M)*T,r[5]=(1-(h+u))*T,r[6]=(g+x)*T,r[7]=0,r[8]=(y+_)*C,r[9]=(g-x)*C,r[10]=(1-(h+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Es.set(r[0],r[1],r[2]).length();const a=Es.set(r[4],r[5],r[6]).length(),o=Es.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);const c=1/s,f=1/a,p=1/o;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=f,ri.elements[5]*=f,ri.elements[6]*=f,ri.elements[8]*=p,ri.elements[9]*=p,ri.elements[10]*=p,n.setFromRotationMatrix(ri),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Wi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),p=(n+e)/(n-e),h=(i+r)/(i-r);let m,y;if(o===Wi)m=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Bc)m=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Wi){const l=this.elements,c=1/(n-e),f=1/(i-r),p=1/(a-s),h=(n+e)*c,m=(i+r)*f;let y,v;if(o===Wi)y=(a+s)*p,v=-2*p;else if(o===Bc)y=s*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Es=new U,ri=new wt,eE=new U(0,0,0),tE=new U(1,1,1),cr=new U,yl=new U,An=new U,w0=new wt,b0=new Go;class Pi{constructor(e=0,n=0,i=0,r=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],p=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return w0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(w0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return b0.setFromEuler(this),this.setFromQuaternion(b0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class M_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nE=0;const E0=new U,Ts=new Go,Ui=new wt,_l=new U,Ha=new U,iE=new U,rE=new Go,T0=new U(1,0,0),C0=new U(0,1,0),A0=new U(0,0,1),R0={type:"added"},sE={type:"removed"},Cs={type:"childadded",child:null},Ku={type:"childremoved",child:null};class Zt extends Ca{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new U,n=new Pi,i=new Go,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ve}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new M_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(T0,e)}rotateY(e){return this.rotateOnAxis(C0,e)}rotateZ(e){return this.rotateOnAxis(A0,e)}translateOnAxis(e,n){return E0.copy(e).applyQuaternion(this.quaternion),this.position.add(E0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(T0,e)}translateY(e){return this.translateOnAxis(C0,e)}translateZ(e){return this.translateOnAxis(A0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_l.copy(e):_l.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Ha,_l,this.up):Ui.lookAt(_l,Ha,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),Ts.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(R0),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(sE),Ku.child=e,this.dispatchEvent(Ku),Ku.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(R0),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,e,iE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,rE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),p=a(e.shapes),h=a(e.skeletons),m=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Zt.DEFAULT_UP=new U(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new U,Fi=new U,Zu=new U,ki=new U,As=new U,Rs=new U,P0=new U,Qu=new U,Ju=new U,ed=new U,td=new pt,nd=new pt,id=new pt;class di{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),si.subVectors(e,n),r.cross(si);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){si.subVectors(r,n),Fi.subVectors(i,n),Zu.subVectors(e,n);const a=si.dot(si),o=si.dot(Fi),l=si.dot(Zu),c=Fi.dot(Fi),f=Fi.dot(Zu),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const h=1/p,m=(c*l-o*f)*h,y=(a*f-o*l)*h;return s.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return td.setScalar(0),nd.setScalar(0),id.setScalar(0),td.fromBufferAttribute(e,n),nd.fromBufferAttribute(e,i),id.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(td,s.x),a.addScaledVector(nd,s.y),a.addScaledVector(id,s.z),a}static isFrontFacing(e,n,i,r){return si.subVectors(i,n),Fi.subVectors(e,n),si.cross(Fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),si.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return di.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return di.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;As.subVectors(r,i),Rs.subVectors(s,i),Qu.subVectors(e,i);const l=As.dot(Qu),c=Rs.dot(Qu);if(l<=0&&c<=0)return n.copy(i);Ju.subVectors(e,r);const f=As.dot(Ju),p=Rs.dot(Ju);if(f>=0&&p<=f)return n.copy(r);const h=l*p-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(As,a);ed.subVectors(e,s);const m=As.dot(ed),y=Rs.dot(ed);if(y>=0&&m<=y)return n.copy(s);const v=m*c-l*y;if(v<=0&&c>=0&&y<=0)return o=c/(c-y),n.copy(i).addScaledVector(Rs,o);const g=f*y-m*p;if(g<=0&&p-f>=0&&m-y>=0)return P0.subVectors(s,r),o=(p-f)/(p-f+(m-y)),n.copy(r).addScaledVector(P0,o);const u=1/(g+v+h);return a=v*u,o=h*u,n.copy(i).addScaledVector(As,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const S_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function rd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ne{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=Hb(e,1),n=Mn(n,0,1),i=Mn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=rd(a,s,e+1/3),this.g=rd(a,s,e),this.b=rd(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=S_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return Je.fromWorkingColorSpace(ln.copy(this),e),Math.round(Mn(ln.r*255,0,255))*65536+Math.round(Mn(ln.g*255,0,255))*256+Math.round(Mn(ln.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(ln.copy(this),n);const i=ln.r,r=ln.g,s=ln.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=f<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(ln.copy(this),n),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Wn){Je.fromWorkingColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,r=ln.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+n,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ur),e.getHSL(Ml);const i=ju(ur.h,Ml.h,n),r=ju(ur.s,Ml.s,n),s=ju(ur.l,Ml.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Ne;Ne.NAMES=S_;let aE=0;class vs extends Ca{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=Ho(),this.name="",this.blending=Fn,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=Ch,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fn&&(i.blending=this.blending),this.side!==Nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Th&&(i.blendSrc=this.blendSrc),this.blendDst!==Ch&&(i.blendDst=this.blendDst),this.blendEquation!==Zr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ga&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==f0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yr extends vs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Jy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new U,Sl=new Fe;class ft{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=p0,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sl.fromBufferAttribute(this,n),Sl.applyMatrix3(e),this.setXY(n,Sl.x,Sl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=za(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=yn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=za(n,this.array)),n}setX(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=za(n,this.array)),n}setY(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=za(n,this.array)),n}setZ(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=za(n,this.array)),n}setW(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),r=yn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),r=yn(r,this.array),s=yn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==p0&&(e.usage=this.usage),e}}class w_ extends ft{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class b_ extends ft{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Tt extends ft{constructor(e,n,i){super(new Float32Array(e),n,i)}}let oE=0;const Hn=new wt,sd=new Zt,Ps=new U,Rn=new Wo,Ga=new Wo,Xt=new U;class kt extends Ca{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x_(e)?b_:w_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return sd.lookAt(e),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ga.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(Rn.min,Ga.min),Rn.expandByPoint(Xt),Xt.addVectors(Rn.max,Ga.max),Rn.expandByPoint(Xt)):(Rn.expandByPoint(Ga.min),Rn.expandByPoint(Ga.max))}Rn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Xt.fromBufferAttribute(o,c),l&&(Ps.fromBufferAttribute(e,c),Xt.add(Ps)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new U,l[R]=new U;const c=new U,f=new U,p=new U,h=new Fe,m=new Fe,y=new Fe,v=new U,g=new U;function u(R,w,S){c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,w),p.fromBufferAttribute(i,S),h.fromBufferAttribute(s,R),m.fromBufferAttribute(s,w),y.fromBufferAttribute(s,S),f.sub(c),p.sub(c),m.sub(h),y.sub(h);const N=1/(m.x*y.y-y.x*m.y);isFinite(N)&&(v.copy(f).multiplyScalar(y.y).addScaledVector(p,-m.y).multiplyScalar(N),g.copy(p).multiplyScalar(m.x).addScaledVector(f,-y.x).multiplyScalar(N),o[R].add(v),o[w].add(v),o[S].add(v),l[R].add(g),l[w].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,w=x.length;R<w;++R){const S=x[R],N=S.start,V=S.count;for(let j=N,I=N+V;j<I;j+=3)u(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const _=new U,M=new U,A=new U,T=new U;function C(R){A.fromBufferAttribute(r,R),T.copy(A);const w=o[R];_.copy(w),_.sub(A.multiplyScalar(A.dot(w))).normalize(),M.crossVectors(T,w);const N=M.dot(l[R])<0?-1:1;a.setXYZW(R,_.x,_.y,_.z,N)}for(let R=0,w=x.length;R<w;++R){const S=x[R],N=S.start,V=S.count;for(let j=N,I=N+V;j<I;j+=3)C(e.getX(j+0)),C(e.getX(j+1)),C(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ft(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,f=new U,p=new U;if(e)for(let h=0,m=e.count;h<m;h+=3){const y=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,g),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(f),l.add(f),c.add(f),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,p=o.normalized,h=new c.constructor(l.length*f);let m=0,y=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*f;for(let u=0;u<f;u++)h[y++]=c[m++]}return new ft(h,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new kt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,p=c.length;f<p;f++){const h=c[f],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let p=0,h=c.length;p<h;p++){const m=c[p];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],p=s[c];for(let h=0,m=p.length;h<m;h++)f.push(p[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const N0=new wt,Br=new Rp,wl=new Xo,D0=new U,bl=new U,El=new U,Tl=new U,ad=new U,Cl=new U,I0=new U,Al=new U;class Vt extends Zt{constructor(e=new kt,n=new yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Cl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],p=s[l];f!==0&&(ad.fromBufferAttribute(p,e),a?Cl.addScaledVector(ad,f):Cl.addScaledVector(ad.sub(n),f))}n.add(Cl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(s),Br.copy(e.ray).recast(e.near),!(wl.containsPoint(Br.origin)===!1&&(Br.intersectSphere(wl,D0)===null||Br.origin.distanceToSquared(D0)>(e.far-e.near)**2))&&(N0.copy(s).invert(),Br.copy(e.ray).applyMatrix4(N0),!(i.boundingBox!==null&&Br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,v=h.length;y<v;y++){const g=h[y],u=a[g.materialIndex],x=Math.max(g.start,m.start),_=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let M=x,A=_;M<A;M+=3){const T=o.getX(M),C=o.getX(M+1),R=o.getX(M+2);r=Rl(this,u,e,i,c,f,p,T,C,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let g=y,u=v;g<u;g+=3){const x=o.getX(g),_=o.getX(g+1),M=o.getX(g+2);r=Rl(this,a,e,i,c,f,p,x,_,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,v=h.length;y<v;y++){const g=h[y],u=a[g.materialIndex],x=Math.max(g.start,m.start),_=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let M=x,A=_;M<A;M+=3){const T=M,C=M+1,R=M+2;r=Rl(this,u,e,i,c,f,p,T,C,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let g=y,u=v;g<u;g+=3){const x=g,_=g+1,M=g+2;r=Rl(this,a,e,i,c,f,p,x,_,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function lE(t,e,n,i,r,s,a,o){let l;if(e.side===Tn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Nr,o),l===null)return null;Al.copy(o),Al.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Al);return c<n.near||c>n.far?null:{distance:c,point:Al.clone(),object:t}}function Rl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,bl),t.getVertexPosition(l,El),t.getVertexPosition(c,Tl);const f=lE(t,e,n,i,bl,El,Tl,I0);if(f){const p=new U;di.getBarycoord(I0,bl,El,Tl,p),r&&(f.uv=di.getInterpolatedAttribute(r,o,l,c,p,new Fe)),s&&(f.uv1=di.getInterpolatedAttribute(s,o,l,c,p,new Fe)),a&&(f.normal=di.getInterpolatedAttribute(a,o,l,c,p,new U),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new U,materialIndex:0};di.getNormal(bl,El,Tl,h.normal),f.face=h,f.barycoord=p}return f}class Ki extends kt{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],p=[];let h=0,m=0;y("z","y","x",-1,-1,i,n,e,a,s,0),y("z","y","x",1,-1,i,n,-e,a,s,1),y("x","z","y",1,1,e,i,n,r,a,2),y("x","z","y",1,-1,e,i,-n,r,a,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(p,2));function y(v,g,u,x,_,M,A,T,C,R,w){const S=M/C,N=A/R,V=M/2,j=A/2,I=T/2,B=C+1,H=R+1;let K=0,D=0;const G=new U;for(let $=0;$<H;$++){const ne=$*N-j;for(let ce=0;ce<B;ce++){const Se=ce*S-V;G[v]=Se*x,G[g]=ne*_,G[u]=I,c.push(G.x,G.y,G.z),G[v]=0,G[g]=0,G[u]=T>0?1:-1,f.push(G.x,G.y,G.z),p.push(ce/C),p.push(1-$/R),K+=1}}for(let $=0;$<R;$++)for(let ne=0;ne<C;ne++){const ce=h+ne+B*$,Se=h+ne+B*($+1),Y=h+(ne+1)+B*($+1),ie=h+(ne+1)+B*$;l.push(ce,Se,ie),l.push(Se,Y,ie),D+=6}o.addGroup(m,D,w),m+=D,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ma(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function dn(t){const e={};for(let n=0;n<t.length;n++){const i=Ma(t[n]);for(const r in i)e[r]=i[r]}return e}function cE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function E_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Fo={clone:Ma,merge:dn};var uE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ht extends vs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uE,this.fragmentShader=dE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ma(e.uniforms),this.uniformsGroups=cE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class T_ extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new U,L0=new Fe,U0=new Fe;class Dn extends T_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hf*2*Math.atan(Math.tan(zu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,n){return this.getViewBounds(e,L0,U0),n.subVectors(U0,L0)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=-90,Ds=1;class hE extends Zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(Ns,Ds,e,n);r.layers=this.layers,this.add(r);const s=new Dn(Ns,Ds,e,n);s.layers=this.layers,this.add(s);const a=new Dn(Ns,Ds,e,n);a.layers=this.layers,this.add(a);const o=new Dn(Ns,Ds,e,n);o.layers=this.layers,this.add(o);const l=new Dn(Ns,Ds,e,n);l.layers=this.layers,this.add(l);const c=new Dn(Ns,Ds,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(p,h,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class C_ extends mn{constructor(e,n,i,r,s,a,o,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:va,super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fE extends Zn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new C_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ki(5,5,5),s=new Ht({name:"CubemapFromEquirect",uniforms:Ma(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:$i});s.uniforms.tEquirect.value=n;const a=new Vt(r,s),o=n.minFilter;return n.minFilter===is&&(n.minFilter=bi),new hE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const od=new U,pE=new U,mE=new Ve;class Yr{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=od.subVectors(i,n).cross(pE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(od),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||mE.getNormalMatrix(e),r=this.coplanarPoint(od).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new Xo,Pl=new U;class Pp{constructor(e=new Yr,n=new Yr,i=new Yr,r=new Yr,s=new Yr,a=new Yr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Wi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],f=r[5],p=r[6],h=r[7],m=r[8],y=r[9],v=r[10],g=r[11],u=r[12],x=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,g-m,M-u).normalize(),i[1].setComponents(l+s,h+c,g+m,M+u).normalize(),i[2].setComponents(l+a,h+f,g+y,M+x).normalize(),i[3].setComponents(l-a,h-f,g-y,M-x).normalize(),i[4].setComponents(l-o,h-p,g-v,M-_).normalize(),n===Wi)i[5].setComponents(l+o,h+p,g+v,M+_).normalize();else if(n===Bc)i[5].setComponents(o,p,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Pl.x=r.normal.x>0?e.max.x:e.min.x,Pl.y=r.normal.y>0?e.max.y:e.min.y,Pl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function A_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function gE(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,p=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const f=l.array,p=l.updateRanges;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,f);else{p.sort((m,y)=>m.start-y.start);let h=0;for(let m=1;m<p.length;m++){const y=p[h],v=p[m];v.start<=y.start+y.count+1?y.count=Math.max(y.count,v.start+v.count-y.start):(++h,p[h]=v)}p.length=h+1;for(let m=0,y=p.length;m<y;m++){const v=p[m];t.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class qo extends kt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,p=e/o,h=n/l,m=[],y=[],v=[],g=[];for(let u=0;u<f;u++){const x=u*h-a;for(let _=0;_<c;_++){const M=_*p-s;y.push(M,-x,0),v.push(0,0,1),g.push(_/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<o;x++){const _=x+c*u,M=x+c*(u+1),A=x+1+c*(u+1),T=x+1+c*u;m.push(_,M,T),m.push(M,A,T)}this.setIndex(m),this.setAttribute("position",new Tt(y,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.width,e.height,e.widthSegments,e.heightSegments)}}var vE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xE=`#ifdef USE_ALPHAHASH
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
#endif`,yE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_E=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ME=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wE=`#ifdef USE_AOMAP
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
#endif`,bE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EE=`#ifdef USE_BATCHING
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
#endif`,TE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PE=`#ifdef USE_IRIDESCENCE
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
#endif`,NE=`#ifdef USE_BUMPMAP
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
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zE=`#define PI 3.141592653589793
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
} // validated`,jE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VE=`vec3 transformedNormal = objectNormal;
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
#endif`,HE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qE="gl_FragColor = linearToOutputTexel( gl_FragColor );",$E=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YE=`#ifdef USE_ENVMAP
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
#endif`,KE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZE=`#ifdef USE_ENVMAP
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
#endif`,QE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JE=`#ifdef USE_ENVMAP
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
#endif`,e2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r2=`#ifdef USE_GRADIENTMAP
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
}`,s2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l2=`uniform bool receiveShadow;
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
#endif`,c2=`#ifdef USE_ENVMAP
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
#endif`,u2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p2=`PhysicalMaterial material;
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
#endif`,m2=`struct PhysicalMaterial {
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
}`,g2=`
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
#endif`,v2=`#if defined( RE_IndirectDiffuse )
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
#endif`,x2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T2=`#if defined( USE_POINTS_UV )
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
#endif`,C2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D2=`#ifdef USE_MORPHTARGETS
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
#endif`,I2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B2=`#ifdef USE_NORMALMAP
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
#endif`,z2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tT=`float getShadowMask() {
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
}`,nT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iT=`#ifdef USE_SKINNING
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
#endif`,rT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sT=`#ifdef USE_SKINNING
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
#endif`,aT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uT=`#ifdef USE_TRANSMISSION
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
#endif`,dT=`#ifdef USE_TRANSMISSION
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
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vT=`uniform sampler2D t2D;
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
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`#include <common>
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
}`,wT=`#if DEPTH_PACKING == 3200
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
}`,bT=`#define DISTANCE
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
}`,ET=`#define DISTANCE
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
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`uniform float scale;
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
}`,RT=`uniform vec3 diffuse;
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
}`,PT=`#include <common>
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
}`,NT=`uniform vec3 diffuse;
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
}`,DT=`#define LAMBERT
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
}`,IT=`#define LAMBERT
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
}`,LT=`#define MATCAP
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
}`,UT=`#define MATCAP
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
}`,FT=`#define NORMAL
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
}`,kT=`#define NORMAL
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
}`,OT=`#define PHONG
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
}`,BT=`#define PHONG
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
}`,zT=`#define STANDARD
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
}`,jT=`#define STANDARD
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
}`,VT=`#define TOON
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
}`,HT=`#define TOON
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
}`,GT=`uniform float size;
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
}`,WT=`uniform vec3 diffuse;
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
}`,XT=`#include <common>
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
}`,qT=`uniform vec3 color;
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
}`,$T=`uniform float rotation;
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
}`,YT=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:vE,alphahash_pars_fragment:xE,alphamap_fragment:yE,alphamap_pars_fragment:_E,alphatest_fragment:ME,alphatest_pars_fragment:SE,aomap_fragment:wE,aomap_pars_fragment:bE,batching_pars_vertex:EE,batching_vertex:TE,begin_vertex:CE,beginnormal_vertex:AE,bsdfs:RE,iridescence_fragment:PE,bumpmap_pars_fragment:NE,clipping_planes_fragment:DE,clipping_planes_pars_fragment:IE,clipping_planes_pars_vertex:LE,clipping_planes_vertex:UE,color_fragment:FE,color_pars_fragment:kE,color_pars_vertex:OE,color_vertex:BE,common:zE,cube_uv_reflection_fragment:jE,defaultnormal_vertex:VE,displacementmap_pars_vertex:HE,displacementmap_vertex:GE,emissivemap_fragment:WE,emissivemap_pars_fragment:XE,colorspace_fragment:qE,colorspace_pars_fragment:$E,envmap_fragment:YE,envmap_common_pars_fragment:KE,envmap_pars_fragment:ZE,envmap_pars_vertex:QE,envmap_physical_pars_fragment:c2,envmap_vertex:JE,fog_vertex:e2,fog_pars_vertex:t2,fog_fragment:n2,fog_pars_fragment:i2,gradientmap_pars_fragment:r2,lightmap_pars_fragment:s2,lights_lambert_fragment:a2,lights_lambert_pars_fragment:o2,lights_pars_begin:l2,lights_toon_fragment:u2,lights_toon_pars_fragment:d2,lights_phong_fragment:h2,lights_phong_pars_fragment:f2,lights_physical_fragment:p2,lights_physical_pars_fragment:m2,lights_fragment_begin:g2,lights_fragment_maps:v2,lights_fragment_end:x2,logdepthbuf_fragment:y2,logdepthbuf_pars_fragment:_2,logdepthbuf_pars_vertex:M2,logdepthbuf_vertex:S2,map_fragment:w2,map_pars_fragment:b2,map_particle_fragment:E2,map_particle_pars_fragment:T2,metalnessmap_fragment:C2,metalnessmap_pars_fragment:A2,morphinstance_vertex:R2,morphcolor_vertex:P2,morphnormal_vertex:N2,morphtarget_pars_vertex:D2,morphtarget_vertex:I2,normal_fragment_begin:L2,normal_fragment_maps:U2,normal_pars_fragment:F2,normal_pars_vertex:k2,normal_vertex:O2,normalmap_pars_fragment:B2,clearcoat_normal_fragment_begin:z2,clearcoat_normal_fragment_maps:j2,clearcoat_pars_fragment:V2,iridescence_pars_fragment:H2,opaque_fragment:G2,packing:W2,premultiplied_alpha_fragment:X2,project_vertex:q2,dithering_fragment:$2,dithering_pars_fragment:Y2,roughnessmap_fragment:K2,roughnessmap_pars_fragment:Z2,shadowmap_pars_fragment:Q2,shadowmap_pars_vertex:J2,shadowmap_vertex:eT,shadowmask_pars_fragment:tT,skinbase_vertex:nT,skinning_pars_vertex:iT,skinning_vertex:rT,skinnormal_vertex:sT,specularmap_fragment:aT,specularmap_pars_fragment:oT,tonemapping_fragment:lT,tonemapping_pars_fragment:cT,transmission_fragment:uT,transmission_pars_fragment:dT,uv_pars_fragment:hT,uv_pars_vertex:fT,uv_vertex:pT,worldpos_vertex:mT,background_vert:gT,background_frag:vT,backgroundCube_vert:xT,backgroundCube_frag:yT,cube_vert:_T,cube_frag:MT,depth_vert:ST,depth_frag:wT,distanceRGBA_vert:bT,distanceRGBA_frag:ET,equirect_vert:TT,equirect_frag:CT,linedashed_vert:AT,linedashed_frag:RT,meshbasic_vert:PT,meshbasic_frag:NT,meshlambert_vert:DT,meshlambert_frag:IT,meshmatcap_vert:LT,meshmatcap_frag:UT,meshnormal_vert:FT,meshnormal_frag:kT,meshphong_vert:OT,meshphong_frag:BT,meshphysical_vert:zT,meshphysical_frag:jT,meshtoon_vert:VT,meshtoon_frag:HT,points_vert:GT,points_frag:WT,shadow_vert:XT,shadow_frag:qT,sprite_vert:$T,sprite_frag:YT},de={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Si={basic:{uniforms:dn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:dn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:dn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:dn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:dn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:dn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:dn([de.points,de.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:dn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:dn([de.common,de.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:dn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:dn([de.sprite,de.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:dn([de.common,de.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:dn([de.lights,de.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Si.physical={uniforms:dn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Nl={r:0,b:0,g:0},jr=new Pi,KT=new wt;function ZT(t,e,n,i,r,s,a){const o=new Ne(0);let l=s===!0?0:1,c,f,p=null,h=0,m=null;function y(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?n:e).get(_)),_}function v(x){let _=!1;const M=y(x);M===null?u(o,l):M&&M.isColor&&(u(M,1),_=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(x,_){const M=y(_);M&&(M.isCubeTexture||M.mapping===au)?(f===void 0&&(f=new Vt(new Ki(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Ma(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),jr.copy(_.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(KT.makeRotationFromEuler(jr)),f.material.toneMapped=Je.getTransfer(M.colorSpace)!==dt,(p!==M||h!==M.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,p=M,h=M.version,m=t.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Vt(new qo(2,2),new Ht({name:"BackgroundMaterial",uniforms:Ma(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Je.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||h!==M.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,p=M,h=M.version,m=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,_){x.getRGB(Nl,E_(t)),i.buffers.color.setClear(Nl.r,Nl.g,Nl.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),l=_,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(o,l)},render:v,addToRenderList:g}}function QT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(S,N,V,j,I){let B=!1;const H=p(j,V,N);s!==H&&(s=H,c(s.object)),B=m(S,j,V,I),B&&y(S,j,V,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,M(S,N,V,j),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function p(S,N,V){const j=V.wireframe===!0;let I=i[S.id];I===void 0&&(I={},i[S.id]=I);let B=I[N.id];B===void 0&&(B={},I[N.id]=B);let H=B[j];return H===void 0&&(H=h(l()),B[j]=H),H}function h(S){const N=[],V=[],j=[];for(let I=0;I<n;I++)N[I]=0,V[I]=0,j[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:j,object:S,attributes:{},index:null}}function m(S,N,V,j){const I=s.attributes,B=N.attributes;let H=0;const K=V.getAttributes();for(const D in K)if(K[D].location>=0){const $=I[D];let ne=B[D];if(ne===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),$===void 0||$.attribute!==ne||ne&&$.data!==ne.data)return!0;H++}return s.attributesNum!==H||s.index!==j}function y(S,N,V,j){const I={},B=N.attributes;let H=0;const K=V.getAttributes();for(const D in K)if(K[D].location>=0){let $=B[D];$===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&($=S.instanceColor));const ne={};ne.attribute=$,$&&$.data&&(ne.data=$.data),I[D]=ne,H++}s.attributes=I,s.attributesNum=H,s.index=j}function v(){const S=s.newAttributes;for(let N=0,V=S.length;N<V;N++)S[N]=0}function g(S){u(S,0)}function u(S,N){const V=s.newAttributes,j=s.enabledAttributes,I=s.attributeDivisors;V[S]=1,j[S]===0&&(t.enableVertexAttribArray(S),j[S]=1),I[S]!==N&&(t.vertexAttribDivisor(S,N),I[S]=N)}function x(){const S=s.newAttributes,N=s.enabledAttributes;for(let V=0,j=N.length;V<j;V++)N[V]!==S[V]&&(t.disableVertexAttribArray(V),N[V]=0)}function _(S,N,V,j,I,B,H){H===!0?t.vertexAttribIPointer(S,N,V,I,B):t.vertexAttribPointer(S,N,V,j,I,B)}function M(S,N,V,j){v();const I=j.attributes,B=V.getAttributes(),H=N.defaultAttributeValues;for(const K in B){const D=B[K];if(D.location>=0){let G=I[K];if(G===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(G=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(G=S.instanceColor)),G!==void 0){const $=G.normalized,ne=G.itemSize,ce=e.get(G);if(ce===void 0)continue;const Se=ce.buffer,Y=ce.type,ie=ce.bytesPerElement,ue=Y===t.INT||Y===t.UNSIGNED_INT||G.gpuType===wp;if(G.isInterleavedBufferAttribute){const le=G.data,Te=le.stride,Ce=G.offset;if(le.isInstancedInterleavedBuffer){for(let Oe=0;Oe<D.locationSize;Oe++)u(D.location+Oe,le.meshPerAttribute);S.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Oe=0;Oe<D.locationSize;Oe++)g(D.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let Oe=0;Oe<D.locationSize;Oe++)_(D.location+Oe,ne/D.locationSize,Y,$,Te*ie,(Ce+ne/D.locationSize*Oe)*ie,ue)}else{if(G.isInstancedBufferAttribute){for(let le=0;le<D.locationSize;le++)u(D.location+le,G.meshPerAttribute);S.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let le=0;le<D.locationSize;le++)g(D.location+le);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let le=0;le<D.locationSize;le++)_(D.location+le,ne/D.locationSize,Y,$,ne*ie,ne/D.locationSize*le*ie,ue)}}else if(H!==void 0){const $=H[K];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(D.location,$);break;case 3:t.vertexAttrib3fv(D.location,$);break;case 4:t.vertexAttrib4fv(D.location,$);break;default:t.vertexAttrib1fv(D.location,$)}}}}x()}function A(){R();for(const S in i){const N=i[S];for(const V in N){const j=N[V];for(const I in j)f(j[I].object),delete j[I];delete N[V]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const N=i[S.id];for(const V in N){const j=N[V];for(const I in j)f(j[I].object),delete j[I];delete N[V]}delete i[S.id]}function C(S){for(const N in i){const V=i[N];if(V[S.id]===void 0)continue;const j=V[S.id];for(const I in j)f(j[I].object),delete j[I];delete V[S.id]}}function R(){w(),a=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function JT(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function a(c,f,p){p!==0&&(t.drawArraysInstanced(i,c,f,p),n.update(f,i,p))}function o(c,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,p);let m=0;for(let y=0;y<p;y++)m+=f[y];n.update(m,i,1)}function l(c,f,p,h){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<c.length;y++)a(c[y],f[y],h[y]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,p);let y=0;for(let v=0;v<p;v++)y+=f[v]*h[v];n.update(y,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function eC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Yn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const R=C===Ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==tr&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Gi&&!R)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=y>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:y,maxTextureSize:v,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:A,maxSamples:T}}function tC(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Yr,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||i!==0||r;return r=h,i=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=f(p,h,0)},this.setState=function(p,h,m){const y=p.clippingPlanes,v=p.clipIntersection,g=p.clipShadows,u=t.get(p);if(!r||y===null||y.length===0||s&&!g)s?f(null):c();else{const x=s?0:i,_=x*4;let M=u.clippingState||null;l.value=M,M=f(y,h,_,m);for(let A=0;A!==_;++A)M[A]=n[A];u.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,m,y){const v=p!==null?p.length:0;let g=null;if(v!==0){if(g=l.value,y!==!0||g===null){const u=m+v*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<u)&&(g=new Float32Array(u));for(let _=0,M=m;_!==v;++_,M+=4)a.copy(p[_]).applyMatrix4(x,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function nC(t){let e=new WeakMap;function n(a,o){return o===Uh?a.mapping=va:o===Fh&&(a.mapping=xa),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Uh||o===Fh)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new fE(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Np extends T_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ys=4,F0=[.125,.215,.35,.446,.526,.582],Qr=20,ld=new Np,k0=new Ne;let cd=null,ud=0,dd=0,hd=!1;const Kr=(1+Math.sqrt(5))/2,Is=1/Kr,O0=[new U(-Kr,Is,0),new U(Kr,Is,0),new U(-Is,0,Kr),new U(Is,0,Kr),new U(0,Kr,-Is),new U(0,Kr,Is),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class B0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),dd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=j0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cd,ud,dd),this._renderer.xr.enabled=hd,e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===va||e.mapping===xa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),dd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Ai,format:Yn,colorSpace:Ta,depthBuffer:!1},r=z0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iC(s)),this._blurMaterial=rC(s,e,n)}return r}_compileMaterial(e){const n=new Vt(this._lodPlanes[0],e);this._renderer.compile(n,ld)}_sceneToCubeUV(e,n,i,r){const o=new Dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,h=f.toneMapping;f.getClearColor(k0),f.toneMapping=Ar,f.autoClear=!1;const m=new yr({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),y=new Vt(new Ki,m);let v=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,v=!0):(m.color.copy(k0),v=!0);for(let u=0;u<6;u++){const x=u%3;x===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):x===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const _=this._cubeSize;Dl(r,x*_,u>2?_:0,_,_),f.setRenderTarget(r),v&&f.render(y,o),f.render(e,o)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=h,f.autoClear=p,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===va||e.mapping===xa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=V0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=j0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Vt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Dl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ld)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=O0[(r-s-1)%O0.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Vt(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Qr-1),v=s/y,g=isFinite(s)?1+Math.floor(f*v):Qr;g>Qr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Qr}`);const u=[];let x=0;for(let C=0;C<Qr;++C){const R=C/v,w=Math.exp(-R*R/2);u.push(w),C===0?x+=w:C<g&&(x+=2*w)}for(let C=0;C<u.length;C++)u[C]=u[C]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=y,h.mipInt.value=_-i;const M=this._sizeLods[r],A=3*M*(r>_-Ys?r-_+Ys:0),T=4*(this._cubeSize-M);Dl(n,A,T,3*M,2*M),l.setRenderTarget(n),l.render(p,ld)}}function iC(t){const e=[],n=[],i=[];let r=t;const s=t-Ys+1+F0.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Ys?l=F0[a-t+Ys-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,p=1+c,h=[f,f,p,f,p,p,f,f,p,p,f,p],m=6,y=6,v=3,g=2,u=1,x=new Float32Array(v*y*m),_=new Float32Array(g*y*m),M=new Float32Array(u*y*m);for(let T=0;T<m;T++){const C=T%3*2/3-1,R=T>2?0:-1,w=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];x.set(w,v*y*T),_.set(h,g*y*T);const S=[T,T,T,T,T,T];M.set(S,u*y*T)}const A=new kt;A.setAttribute("position",new ft(x,v)),A.setAttribute("uv",new ft(_,g)),A.setAttribute("faceIndex",new ft(M,u)),e.push(A),r>Ys&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function z0(t,e,n){const i=new Zn(t,e,n);return i.texture.mapping=au,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function rC(t,e,n){const i=new Float32Array(Qr),r=new U(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dp(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function j0(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dp(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function V0(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Dp(){return`

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
	`}function sC(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Uh||l===Fh,f=l===va||l===xa;if(c||f){let p=e.get(o);const h=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new B0(t)),p=c?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||f&&m&&r(m)?(n===null&&(n=new B0(t)),p=c?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function aC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&eo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function oC(t,e,n,i){const r={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const v=h.morphAttributes[y];for(let g=0,u=v.length;g<u;g++)e.remove(v[g])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(p,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const y in m){const v=m[y];for(let g=0,u=v.length;g<u;g++)e.update(v[g],t.ARRAY_BUFFER)}}function c(p){const h=[],m=p.index,y=p.attributes.position;let v=0;if(m!==null){const x=m.array;v=m.version;for(let _=0,M=x.length;_<M;_+=3){const A=x[_+0],T=x[_+1],C=x[_+2];h.push(A,T,T,C,C,A)}}else if(y!==void 0){const x=y.array;v=y.version;for(let _=0,M=x.length/3-1;_<M;_+=3){const A=_+0,T=_+1,C=_+2;h.push(A,T,T,C,C,A)}}else return;const g=new(x_(h)?b_:w_)(h,1);g.version=v;const u=s.get(p);u&&e.remove(u),s.set(p,g)}function f(p){const h=s.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function lC(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*a),n.update(m,i,1)}function c(h,m,y){y!==0&&(t.drawElementsInstanced(i,m,s,h*a,y),n.update(m,i,y))}function f(h,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,y);let g=0;for(let u=0;u<y;u++)g+=m[u];n.update(g,i,1)}function p(h,m,y,v){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<h.length;u++)c(h[u]/a,m[u],v[u]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,v,0,y);let u=0;for(let x=0;x<y;x++)u+=m[x]*v[x];n.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function cC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function uC(t,e,n){const i=new WeakMap,r=new pt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0;let h=i.get(o);if(h===void 0||h.count!==p){let S=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var m=S;h!==void 0&&h.texture.dispose();const y=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;y===!0&&(M=1),v===!0&&(M=2),g===!0&&(M=3);let A=o.attributes.position.count*M,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*T*4*p),R=new __(C,A,T,p);R.type=Gi,R.needsUpdate=!0;const w=M*4;for(let N=0;N<p;N++){const V=u[N],j=x[N],I=_[N],B=A*T*4*N;for(let H=0;H<V.count;H++){const K=H*w;y===!0&&(r.fromBufferAttribute(V,H),C[B+K+0]=r.x,C[B+K+1]=r.y,C[B+K+2]=r.z,C[B+K+3]=0),v===!0&&(r.fromBufferAttribute(j,H),C[B+K+4]=r.x,C[B+K+5]=r.y,C[B+K+6]=r.z,C[B+K+7]=0),g===!0&&(r.fromBufferAttribute(I,H),C[B+K+8]=r.x,C[B+K+9]=r.y,C[B+K+10]=r.z,C[B+K+11]=I.itemSize===4?r.w:1)}}h={count:p,texture:R,size:new Fe(A,T)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let y=0;for(let g=0;g<c.length;g++)y+=c[g];const v=o.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function dC(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,p=e.get(l,f);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class R_ extends mn{constructor(e,n,i,r,s,a,o,l,c,f=ia){if(f!==ia&&f!==_a)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ia&&(i=ps),i===void 0&&f===_a&&(i=ya),super(null,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:mi,this.minFilter=l!==void 0?l:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const P_=new mn,H0=new R_(1,1),N_=new __,D_=new Qb,I_=new C_,G0=[],W0=[],X0=new Float32Array(16),q0=new Float32Array(9),$0=new Float32Array(4);function Aa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=G0[r];if(s===void 0&&(s=new Float32Array(r),G0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function lu(t,e){let n=W0[e];n===void 0&&(n=new Int32Array(e),W0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function hC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function fC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2fv(this.addr,e),Wt(n,e)}}function pC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Gt(n,e))return;t.uniform3fv(this.addr,e),Wt(n,e)}}function mC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4fv(this.addr,e),Wt(n,e)}}function gC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;$0.set(i),t.uniformMatrix2fv(this.addr,!1,$0),Wt(n,i)}}function vC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;q0.set(i),t.uniformMatrix3fv(this.addr,!1,q0),Wt(n,i)}}function xC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;X0.set(i),t.uniformMatrix4fv(this.addr,!1,X0),Wt(n,i)}}function yC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _C(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2iv(this.addr,e),Wt(n,e)}}function MC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3iv(this.addr,e),Wt(n,e)}}function SC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4iv(this.addr,e),Wt(n,e)}}function wC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function bC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2uiv(this.addr,e),Wt(n,e)}}function EC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3uiv(this.addr,e),Wt(n,e)}}function TC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4uiv(this.addr,e),Wt(n,e)}}function CC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(H0.compareFunction=v_,s=H0):s=P_,n.setTexture2D(e||s,r)}function AC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||D_,r)}function RC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||I_,r)}function PC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||N_,r)}function NC(t){switch(t){case 5126:return hC;case 35664:return fC;case 35665:return pC;case 35666:return mC;case 35674:return gC;case 35675:return vC;case 35676:return xC;case 5124:case 35670:return yC;case 35667:case 35671:return _C;case 35668:case 35672:return MC;case 35669:case 35673:return SC;case 5125:return wC;case 36294:return bC;case 36295:return EC;case 36296:return TC;case 35678:case 36198:case 36298:case 36306:case 35682:return CC;case 35679:case 36299:case 36307:return AC;case 35680:case 36300:case 36308:case 36293:return RC;case 36289:case 36303:case 36311:case 36292:return PC}}function DC(t,e){t.uniform1fv(this.addr,e)}function IC(t,e){const n=Aa(e,this.size,2);t.uniform2fv(this.addr,n)}function LC(t,e){const n=Aa(e,this.size,3);t.uniform3fv(this.addr,n)}function UC(t,e){const n=Aa(e,this.size,4);t.uniform4fv(this.addr,n)}function FC(t,e){const n=Aa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function kC(t,e){const n=Aa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function OC(t,e){const n=Aa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function BC(t,e){t.uniform1iv(this.addr,e)}function zC(t,e){t.uniform2iv(this.addr,e)}function jC(t,e){t.uniform3iv(this.addr,e)}function VC(t,e){t.uniform4iv(this.addr,e)}function HC(t,e){t.uniform1uiv(this.addr,e)}function GC(t,e){t.uniform2uiv(this.addr,e)}function WC(t,e){t.uniform3uiv(this.addr,e)}function XC(t,e){t.uniform4uiv(this.addr,e)}function qC(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||P_,s[a])}function $C(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||D_,s[a])}function YC(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||I_,s[a])}function KC(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||N_,s[a])}function ZC(t){switch(t){case 5126:return DC;case 35664:return IC;case 35665:return LC;case 35666:return UC;case 35674:return FC;case 35675:return kC;case 35676:return OC;case 5124:case 35670:return BC;case 35667:case 35671:return zC;case 35668:case 35672:return jC;case 35669:case 35673:return VC;case 5125:return HC;case 36294:return GC;case 36295:return WC;case 36296:return XC;case 35678:case 36198:case 36298:case 36306:case 35682:return qC;case 35679:case 36299:case 36307:return $C;case 35680:case 36300:case 36308:case 36293:return YC;case 36289:case 36303:case 36311:case 36292:return KC}}class QC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=NC(n.type)}}class JC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ZC(n.type)}}class eA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const fd=/(\w+)(\])?(\[|\.)?/g;function Y0(t,e){t.seq.push(e),t.map[e.id]=e}function tA(t,e,n){const i=t.name,r=i.length;for(fd.lastIndex=0;;){const s=fd.exec(i),a=fd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Y0(n,c===void 0?new QC(o,t,e):new JC(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new eA(o),Y0(n,p)),n=p}}}class oc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);tA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function K0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const nA=37297;let iA=0;function rA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Z0=new Ve;function sA(t){Je._getMatrix(Z0,Je.workingColorSpace,t);const e=`mat3( ${Z0.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case ou:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Q0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+rA(t.getShaderSource(e),a)}else return r}function aA(t,e){const n=sA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function oA(t,e){let n;switch(e){case e_:n="Linear";break;case t_:n="Reinhard";break;case n_:n="Cineon";break;case Sp:n="ACESFilmic";break;case i_:n="AgX";break;case r_:n="Neutral";break;case Nb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Il=new U;function lA(){Je.getLuminanceCoefficients(Il);const t=Il.x.toFixed(4),e=Il.y.toFixed(4),n=Il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function uA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function dA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function to(t){return t!==""}function J0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(t){return t.replace(hA,pA)}const fA=new Map;function pA(t,e){let n=Ge[e];if(n===void 0){const i=fA.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ff(n)}const mA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tg(t){return t.replace(mA,gA)}function gA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ng(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function vA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Qy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ub?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function xA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case va:case xa:e="ENVMAP_TYPE_CUBE";break;case au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case xa:e="ENVMAP_MODE_REFRACTION";break}return e}function _A(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Jy:e="ENVMAP_BLENDING_MULTIPLY";break;case Rb:e="ENVMAP_BLENDING_MIX";break;case Pb:e="ENVMAP_BLENDING_ADD";break}return e}function MA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function SA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=vA(n),c=xA(n),f=yA(n),p=_A(n),h=MA(n),m=cA(n),y=uA(s),v=r.createProgram();let g,u,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(to).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(to).join(`
`),u.length>0&&(u+=`
`)):(g=[ng(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),u=[ng(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ar?"#define TONE_MAPPING":"",n.toneMapping!==Ar?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Ar?oA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,aA("linearToOutputTexel",n.outputColorSpace),lA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(to).join(`
`)),a=ff(a),a=J0(a,n),a=eg(a,n),o=ff(o),o=J0(o,n),o=eg(o,n),a=tg(a),o=tg(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===m0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===m0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=x+g+a,M=x+u+o,A=K0(r,r.VERTEX_SHADER,_),T=K0(r,r.FRAGMENT_SHADER,M);r.attachShader(v,A),r.attachShader(v,T),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(N){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(v).trim(),j=r.getShaderInfoLog(A).trim(),I=r.getShaderInfoLog(T).trim();let B=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,A,T);else{const K=Q0(r,A,"vertex"),D=Q0(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+K+`
`+D)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(j===""||I==="")&&(H=!1);H&&(N.diagnostics={runnable:B,programLog:V,vertexShader:{log:j,prefix:g},fragmentShader:{log:I,prefix:u}})}r.deleteShader(A),r.deleteShader(T),R=new oc(r,v),w=dA(r,v)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,nA)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}let wA=0;class bA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new EA(e),n.set(e,i)),i}}class EA{constructor(e){this.id=wA++,this.code=e,this.usedTimes=0}}function TA(t,e,n,i,r,s,a){const o=new M_,l=new bA,c=new Set,f=[],p=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,S,N,V,j){const I=V.fog,B=j.geometry,H=w.isMeshStandardMaterial?V.environment:null,K=(w.isMeshStandardMaterial?n:e).get(w.envMap||H),D=K&&K.mapping===au?K.image.height:null,G=y[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const $=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=$!==void 0?$.length:0;let ce=0;B.morphAttributes.position!==void 0&&(ce=1),B.morphAttributes.normal!==void 0&&(ce=2),B.morphAttributes.color!==void 0&&(ce=3);let Se,Y,ie,ue;if(G){const ut=Si[G];Se=ut.vertexShader,Y=ut.fragmentShader}else Se=w.vertexShader,Y=w.fragmentShader,l.update(w),ie=l.getVertexShaderID(w),ue=l.getFragmentShaderID(w);const le=t.getRenderTarget(),Te=t.state.buffers.depth.getReversed(),Ce=j.isInstancedMesh===!0,Oe=j.isBatchedMesh===!0,Ct=!!w.map,tt=!!w.matcap,It=!!K,z=!!w.aoMap,jn=!!w.lightMap,Ke=!!w.bumpMap,Ze=!!w.normalMap,Ie=!!w.displacementMap,xt=!!w.emissiveMap,De=!!w.metalnessMap,P=!!w.roughnessMap,b=w.anisotropy>0,W=w.clearcoat>0,ee=w.dispersion>0,re=w.iridescence>0,J=w.sheen>0,Ae=w.transmission>0,fe=b&&!!w.anisotropyMap,ye=W&&!!w.clearcoatMap,nt=W&&!!w.clearcoatNormalMap,ae=W&&!!w.clearcoatRoughnessMap,_e=re&&!!w.iridescenceMap,Le=re&&!!w.iridescenceThicknessMap,ke=J&&!!w.sheenColorMap,Me=J&&!!w.sheenRoughnessMap,Qe=!!w.specularMap,He=!!w.specularColorMap,mt=!!w.specularIntensityMap,F=Ae&&!!w.transmissionMap,he=Ae&&!!w.thicknessMap,Z=!!w.gradientMap,te=!!w.alphaMap,ge=w.alphaTest>0,pe=!!w.alphaHash,ze=!!w.extensions;let Nt=Ar;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Nt=t.toneMapping);const rn={shaderID:G,shaderType:w.type,shaderName:w.name,vertexShader:Se,fragmentShader:Y,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:ue,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Oe,batchingColor:Oe&&j._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&j.instanceColor!==null,instancingMorph:Ce&&j.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ta,alphaToCoverage:!!w.alphaToCoverage,map:Ct,matcap:tt,envMap:It,envMapMode:It&&K.mapping,envMapCubeUVHeight:D,aoMap:z,lightMap:jn,bumpMap:Ke,normalMap:Ze,displacementMap:h&&Ie,emissiveMap:xt,normalMapObjectSpace:Ze&&w.normalMapType===Ub,normalMapTangentSpace:Ze&&w.normalMapType===g_,metalnessMap:De,roughnessMap:P,anisotropy:b,anisotropyMap:fe,clearcoat:W,clearcoatMap:ye,clearcoatNormalMap:nt,clearcoatRoughnessMap:ae,dispersion:ee,iridescence:re,iridescenceMap:_e,iridescenceThicknessMap:Le,sheen:J,sheenColorMap:ke,sheenRoughnessMap:Me,specularMap:Qe,specularColorMap:He,specularIntensityMap:mt,transmission:Ae,transmissionMap:F,thicknessMap:he,gradientMap:Z,opaque:w.transparent===!1&&w.blending===Fn&&w.alphaToCoverage===!1,alphaMap:te,alphaTest:ge,alphaHash:pe,combine:w.combine,mapUv:Ct&&v(w.map.channel),aoMapUv:z&&v(w.aoMap.channel),lightMapUv:jn&&v(w.lightMap.channel),bumpMapUv:Ke&&v(w.bumpMap.channel),normalMapUv:Ze&&v(w.normalMap.channel),displacementMapUv:Ie&&v(w.displacementMap.channel),emissiveMapUv:xt&&v(w.emissiveMap.channel),metalnessMapUv:De&&v(w.metalnessMap.channel),roughnessMapUv:P&&v(w.roughnessMap.channel),anisotropyMapUv:fe&&v(w.anisotropyMap.channel),clearcoatMapUv:ye&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:nt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(w.sheenRoughnessMap.channel),specularMapUv:Qe&&v(w.specularMap.channel),specularColorMapUv:He&&v(w.specularColorMap.channel),specularIntensityMapUv:mt&&v(w.specularIntensityMap.channel),transmissionMapUv:F&&v(w.transmissionMap.channel),thicknessMapUv:he&&v(w.thicknessMap.channel),alphaMapUv:te&&v(w.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ze||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!B.attributes.uv&&(Ct||te),fog:!!I,useFog:w.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Te,skinning:j.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Ct&&w.map.isVideoTexture===!0&&Je.getTransfer(w.map.colorSpace)===dt,decodeVideoTextureEmissive:xt&&w.emissiveMap.isVideoTexture===!0&&Je.getTransfer(w.emissiveMap.colorSpace)===dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ln,flipSided:w.side===Tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ze&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&w.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return rn.vertexUv1s=c.has(1),rn.vertexUv2s=c.has(2),rn.vertexUv3s=c.has(3),c.clear(),rn}function u(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)S.push(N),S.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(x(S,w),_(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function x(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function _(w,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),w.push(o.mask)}function M(w){const S=y[w.type];let N;if(S){const V=Si[S];N=Fo.clone(V.uniforms)}else N=w.uniforms;return N}function A(w,S){let N;for(let V=0,j=f.length;V<j;V++){const I=f[V];if(I.cacheKey===S){N=I,++N.usedTimes;break}}return N===void 0&&(N=new SA(t,S,w,s),f.push(N)),N}function T(w){if(--w.usedTimes===0){const S=f.indexOf(w);f[S]=f[f.length-1],f.pop(),w.destroy()}}function C(w){l.remove(w)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:M,acquireProgram:A,releaseProgram:T,releaseShaderCache:C,programs:f,dispose:R}}function CA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function AA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ig(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function rg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,h,m,y,v,g){let u=t[e];return u===void 0?(u={id:p.id,object:p,geometry:h,material:m,groupOrder:y,renderOrder:p.renderOrder,z:v,group:g},t[e]=u):(u.id=p.id,u.object=p,u.geometry=h,u.material=m,u.groupOrder=y,u.renderOrder=p.renderOrder,u.z=v,u.group=g),e++,u}function o(p,h,m,y,v,g){const u=a(p,h,m,y,v,g);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(p,h,m,y,v,g){const u=a(p,h,m,y,v,g);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(p,h){n.length>1&&n.sort(p||AA),i.length>1&&i.sort(h||ig),r.length>1&&r.sort(h||ig)}function f(){for(let p=e,h=t.length;p<h;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function RA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new rg,t.set(i,[a])):r>=s.length?(a=new rg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function PA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Ne};break;case"SpotLight":n={position:new U,direction:new U,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":n={color:new Ne,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function NA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let DA=0;function IA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function LA(t){const e=new PA,n=NA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new wt,a=new wt;function o(c){let f=0,p=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,y=0,v=0,g=0,u=0,x=0,_=0,M=0,A=0,T=0,C=0;c.sort(IA);for(let w=0,S=c.length;w<S;w++){const N=c[w],V=N.color,j=N.intensity,I=N.distance,B=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=V.r*j,p+=V.g*j,h+=V.b*j;else if(N.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(N.sh.coefficients[H],j);C++}else if(N.isDirectionalLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const K=N.shadow,D=n.get(N);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=B,i.directionalShadowMatrix[m]=N.shadow.matrix,x++}i.directional[m]=H,m++}else if(N.isSpotLight){const H=e.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(V).multiplyScalar(j),H.distance=I,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,i.spot[v]=H;const K=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,K.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[v]=K.matrix,N.castShadow){const D=n.get(N);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.spotShadow[v]=D,i.spotShadowMap[v]=B,M++}v++}else if(N.isRectAreaLight){const H=e.get(N);H.color.copy(V).multiplyScalar(j),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),i.rectArea[g]=H,g++}else if(N.isPointLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),H.distance=N.distance,H.decay=N.decay,N.castShadow){const K=N.shadow,D=n.get(N);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,D.shadowCameraNear=K.camera.near,D.shadowCameraFar=K.camera.far,i.pointShadow[y]=D,i.pointShadowMap[y]=B,i.pointShadowMatrix[y]=N.shadow.matrix,_++}i.point[y]=H,y++}else if(N.isHemisphereLight){const H=e.get(N);H.skyColor.copy(N.color).multiplyScalar(j),H.groundColor.copy(N.groundColor).multiplyScalar(j),i.hemi[u]=H,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==m||R.pointLength!==y||R.spotLength!==v||R.rectAreaLength!==g||R.hemiLength!==u||R.numDirectionalShadows!==x||R.numPointShadows!==_||R.numSpotShadows!==M||R.numSpotMaps!==A||R.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=g,i.point.length=y,i.hemi.length=u,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,R.directionalLength=m,R.pointLength=y,R.spotLength=v,R.rectAreaLength=g,R.hemiLength=u,R.numDirectionalShadows=x,R.numPointShadows=_,R.numSpotShadows=M,R.numSpotMaps=A,R.numLightProbes=C,i.version=DA++)}function l(c,f){let p=0,h=0,m=0,y=0,v=0;const g=f.matrixWorldInverse;for(let u=0,x=c.length;u<x;u++){const _=c[u];if(_.isDirectionalLight){const M=i.directional[p];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(_.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),m++}else if(_.isRectAreaLight){const M=i.rectArea[y];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(_.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),h++}else if(_.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function sg(t){const e=new LA(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function o(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function UA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new sg(t),e.set(r,[o])):s>=a.length?(o=new sg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class FA extends vs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ib,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kA extends vs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const OA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BA=`uniform sampler2D shadow_pass;
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
}`;function zA(t,e,n){let i=new Pp;const r=new Fe,s=new Fe,a=new pt,o=new FA({depthPacking:Lb}),l=new kA,c={},f=n.maxTextureSize,p={[Nr]:Tn,[Tn]:Nr,[Ln]:Ln},h=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:OA,fragmentShader:BA}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const y=new kt;y.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Vt(y,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qy;let u=this.type;this.render=function(T,C,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),V=t.state;V.setBlending($i),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const j=u!==Bi&&this.type===Bi,I=u===Bi&&this.type!==Bi;for(let B=0,H=T.length;B<H;B++){const K=T[B],D=K.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const G=D.getFrameExtents();if(r.multiply(G),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/G.x),r.x=s.x*G.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/G.y),r.y=s.y*G.y,D.mapSize.y=s.y)),D.map===null||j===!0||I===!0){const ne=this.type!==Bi?{minFilter:mi,magFilter:mi}:{};D.map!==null&&D.map.dispose(),D.map=new Zn(r.x,r.y,ne),D.map.texture.name=K.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const $=D.getViewportCount();for(let ne=0;ne<$;ne++){const ce=D.getViewport(ne);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),V.viewport(a),D.updateMatrices(K,ne),i=D.getFrustum(),M(C,R,D.camera,K,this.type)}D.isPointLightShadow!==!0&&this.type===Bi&&x(D,R),D.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(w,S,N)};function x(T,C){const R=e.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Zn(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,R,h,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,R,m,v,null)}function _(T,C,R,w){let S=null;const N=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)S=N;else if(S=R.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=S.uuid,j=C.uuid;let I=c[V];I===void 0&&(I={},c[V]=I);let B=I[j];B===void 0&&(B=S.clone(),I[j]=B,C.addEventListener("dispose",A)),S=B}if(S.visible=C.visible,S.wireframe=C.wireframe,w===Bi?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:p[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=t.properties.get(S);V.light=R}return S}function M(T,C,R,w,S){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Bi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const j=e.update(T),I=T.material;if(Array.isArray(I)){const B=j.groups;for(let H=0,K=B.length;H<K;H++){const D=B[H],G=I[D.materialIndex];if(G&&G.visible){const $=_(T,G,w,S);T.onBeforeShadow(t,T,C,R,j,$,D),t.renderBufferDirect(R,null,j,$,T,D),T.onAfterShadow(t,T,C,R,j,$,D)}}}else if(I.visible){const B=_(T,I,w,S);T.onBeforeShadow(t,T,C,R,j,B,null),t.renderBufferDirect(R,null,j,B,T,null),T.onAfterShadow(t,T,C,R,j,B,null)}}const V=T.children;for(let j=0,I=V.length;j<I;j++)M(V[j],C,R,w,S)}function A(T){T.target.removeEventListener("dispose",A);for(const R in c){const w=c[R],S=T.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const jA={[Ah]:Rh,[Ph]:Ih,[Nh]:Lh,[ga]:Dh,[Rh]:Ah,[Ih]:Ph,[Lh]:Nh,[Dh]:ga};function VA(t,e){function n(){let F=!1;const he=new pt;let Z=null;const te=new pt(0,0,0,0);return{setMask:function(ge){Z!==ge&&!F&&(t.colorMask(ge,ge,ge,ge),Z=ge)},setLocked:function(ge){F=ge},setClear:function(ge,pe,ze,Nt,rn){rn===!0&&(ge*=Nt,pe*=Nt,ze*=Nt),he.set(ge,pe,ze,Nt),te.equals(he)===!1&&(t.clearColor(ge,pe,ze,Nt),te.copy(he))},reset:function(){F=!1,Z=null,te.set(-1,0,0,0)}}}function i(){let F=!1,he=!1,Z=null,te=null,ge=null;return{setReversed:function(pe){if(he!==pe){const ze=e.get("EXT_clip_control");he?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const Nt=ge;ge=null,this.setClear(Nt)}he=pe},getReversed:function(){return he},setTest:function(pe){pe?le(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(pe){Z!==pe&&!F&&(t.depthMask(pe),Z=pe)},setFunc:function(pe){if(he&&(pe=jA[pe]),te!==pe){switch(pe){case Ah:t.depthFunc(t.NEVER);break;case Rh:t.depthFunc(t.ALWAYS);break;case Ph:t.depthFunc(t.LESS);break;case ga:t.depthFunc(t.LEQUAL);break;case Nh:t.depthFunc(t.EQUAL);break;case Dh:t.depthFunc(t.GEQUAL);break;case Ih:t.depthFunc(t.GREATER);break;case Lh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=pe}},setLocked:function(pe){F=pe},setClear:function(pe){ge!==pe&&(he&&(pe=1-pe),t.clearDepth(pe),ge=pe)},reset:function(){F=!1,Z=null,te=null,ge=null,he=!1}}}function r(){let F=!1,he=null,Z=null,te=null,ge=null,pe=null,ze=null,Nt=null,rn=null;return{setTest:function(ut){F||(ut?le(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(ut){he!==ut&&!F&&(t.stencilMask(ut),he=ut)},setFunc:function(ut,ei,Ni){(Z!==ut||te!==ei||ge!==Ni)&&(t.stencilFunc(ut,ei,Ni),Z=ut,te=ei,ge=Ni)},setOp:function(ut,ei,Ni){(pe!==ut||ze!==ei||Nt!==Ni)&&(t.stencilOp(ut,ei,Ni),pe=ut,ze=ei,Nt=Ni)},setLocked:function(ut){F=ut},setClear:function(ut){rn!==ut&&(t.clearStencil(ut),rn=ut)},reset:function(){F=!1,he=null,Z=null,te=null,ge=null,pe=null,ze=null,Nt=null,rn=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},p={},h=new WeakMap,m=[],y=null,v=!1,g=null,u=null,x=null,_=null,M=null,A=null,T=null,C=new Ne(0,0,0),R=0,w=!1,S=null,N=null,V=null,j=null,I=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,K=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(D)[1]),H=K>=1):D.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),H=K>=2);let G=null,$={};const ne=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),Se=new pt().fromArray(ne),Y=new pt().fromArray(ce);function ie(F,he,Z,te){const ge=new Uint8Array(4),pe=t.createTexture();t.bindTexture(F,pe),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ze=0;ze<Z;ze++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(he+ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return pe}const ue={};ue[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(t.DEPTH_TEST),a.setFunc(ga),Ke(!1),Ze(u0),le(t.CULL_FACE),z($i);function le(F){f[F]!==!0&&(t.enable(F),f[F]=!0)}function Te(F){f[F]!==!1&&(t.disable(F),f[F]=!1)}function Ce(F,he){return p[F]!==he?(t.bindFramebuffer(F,he),p[F]=he,F===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=he),F===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Oe(F,he){let Z=m,te=!1;if(F){Z=h.get(he),Z===void 0&&(Z=[],h.set(he,Z));const ge=F.textures;if(Z.length!==ge.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,ze=ge.length;pe<ze;pe++)Z[pe]=t.COLOR_ATTACHMENT0+pe;Z.length=ge.length,te=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,te=!0);te&&t.drawBuffers(Z)}function Ct(F){return y!==F?(t.useProgram(F),y=F,!0):!1}const tt={[Zr]:t.FUNC_ADD,[hb]:t.FUNC_SUBTRACT,[fb]:t.FUNC_REVERSE_SUBTRACT};tt[pb]=t.MIN,tt[mb]=t.MAX;const It={[gb]:t.ZERO,[vb]:t.ONE,[xb]:t.SRC_COLOR,[Th]:t.SRC_ALPHA,[bb]:t.SRC_ALPHA_SATURATE,[Sb]:t.DST_COLOR,[_b]:t.DST_ALPHA,[yb]:t.ONE_MINUS_SRC_COLOR,[Ch]:t.ONE_MINUS_SRC_ALPHA,[wb]:t.ONE_MINUS_DST_COLOR,[Mb]:t.ONE_MINUS_DST_ALPHA,[Eb]:t.CONSTANT_COLOR,[Tb]:t.ONE_MINUS_CONSTANT_COLOR,[Cb]:t.CONSTANT_ALPHA,[Ab]:t.ONE_MINUS_CONSTANT_ALPHA};function z(F,he,Z,te,ge,pe,ze,Nt,rn,ut){if(F===$i){v===!0&&(Te(t.BLEND),v=!1);return}if(v===!1&&(le(t.BLEND),v=!0),F!==db){if(F!==g||ut!==w){if((u!==Zr||M!==Zr)&&(t.blendEquation(t.FUNC_ADD),u=Zr,M=Zr),ut)switch(F){case Fn:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fn:t.blendFunc(t.ONE,t.ONE);break;case d0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case h0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Fn:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fn:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case d0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case h0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,_=null,A=null,T=null,C.set(0,0,0),R=0,g=F,w=ut}return}ge=ge||he,pe=pe||Z,ze=ze||te,(he!==u||ge!==M)&&(t.blendEquationSeparate(tt[he],tt[ge]),u=he,M=ge),(Z!==x||te!==_||pe!==A||ze!==T)&&(t.blendFuncSeparate(It[Z],It[te],It[pe],It[ze]),x=Z,_=te,A=pe,T=ze),(Nt.equals(C)===!1||rn!==R)&&(t.blendColor(Nt.r,Nt.g,Nt.b,rn),C.copy(Nt),R=rn),g=F,w=!1}function jn(F,he){F.side===Ln?Te(t.CULL_FACE):le(t.CULL_FACE);let Z=F.side===Tn;he&&(Z=!Z),Ke(Z),F.blending===Fn&&F.transparent===!1?z($i):z(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const te=F.stencilWrite;o.setTest(te),te&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),xt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(F){S!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),S=F)}function Ze(F){F!==lb?(le(t.CULL_FACE),F!==N&&(F===u0?t.cullFace(t.BACK):F===cb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),N=F}function Ie(F){F!==V&&(H&&t.lineWidth(F),V=F)}function xt(F,he,Z){F?(le(t.POLYGON_OFFSET_FILL),(j!==he||I!==Z)&&(t.polygonOffset(he,Z),j=he,I=Z)):Te(t.POLYGON_OFFSET_FILL)}function De(F){F?le(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function P(F){F===void 0&&(F=t.TEXTURE0+B-1),G!==F&&(t.activeTexture(F),G=F)}function b(F,he,Z){Z===void 0&&(G===null?Z=t.TEXTURE0+B-1:Z=G);let te=$[Z];te===void 0&&(te={type:void 0,texture:void 0},$[Z]=te),(te.type!==F||te.texture!==he)&&(G!==Z&&(t.activeTexture(Z),G=Z),t.bindTexture(F,he||ue[F]),te.type=F,te.texture=he)}function W(){const F=$[G];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(F){Se.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Se.copy(F))}function Me(F){Y.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function Qe(F,he){let Z=c.get(he);Z===void 0&&(Z=new WeakMap,c.set(he,Z));let te=Z.get(F);te===void 0&&(te=t.getUniformBlockIndex(he,F.name),Z.set(F,te))}function He(F,he){const te=c.get(he).get(F);l.get(he)!==te&&(t.uniformBlockBinding(he,te,F.__bindingPointIndex),l.set(he,te))}function mt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},G=null,$={},p={},h=new WeakMap,m=[],y=null,v=!1,g=null,u=null,x=null,_=null,M=null,A=null,T=null,C=new Ne(0,0,0),R=0,w=!1,S=null,N=null,V=null,j=null,I=null,Se.set(0,0,t.canvas.width,t.canvas.height),Y.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:Te,bindFramebuffer:Ce,drawBuffers:Oe,useProgram:Ct,setBlending:z,setMaterial:jn,setFlipSided:Ke,setCullFace:Ze,setLineWidth:Ie,setPolygonOffset:xt,setScissorTest:De,activeTexture:P,bindTexture:b,unbindTexture:W,compressedTexImage2D:ee,compressedTexImage3D:re,texImage2D:_e,texImage3D:Le,updateUBOMapping:Qe,uniformBlockBinding:He,texStorage2D:nt,texStorage3D:ae,texSubImage2D:J,texSubImage3D:Ae,compressedTexSubImage2D:fe,compressedTexSubImage3D:ye,scissor:ke,viewport:Me,reset:mt}}function ag(t,e,n,i){const r=HA(i);switch(n){case c_:return t*e;case d_:return t*e;case h_:return t*e*2;case f_:return t*e/r.components*r.byteLength;case Tp:return t*e/r.components*r.byteLength;case p_:return t*e*2/r.components*r.byteLength;case Cp:return t*e*2/r.components*r.byteLength;case u_:return t*e*3/r.components*r.byteLength;case Yn:return t*e*4/r.components*r.byteLength;case Ap:return t*e*4/r.components*r.byteLength;case nc:case ic:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rc:case sc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zh:case Vh:return Math.max(t,16)*Math.max(e,8)/4;case Bh:case jh:return Math.max(t,8)*Math.max(e,8)/2;case Hh:case Gh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case $h:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ef:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case tf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case nf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case rf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case sf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case af:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ac:case of:case lf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case m_:case cf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case uf:case df:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function HA(t){switch(t){case tr:case a_:return{byteLength:1,components:1};case Uo:case o_:case Ai:return{byteLength:2,components:1};case bp:case Ep:return{byteLength:2,components:4};case ps:case wp:case Gi:return{byteLength:4,components:1};case l_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function GA(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,f=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,b){return m?new OffscreenCanvas(P,b):zc("canvas")}function v(P,b,W){let ee=1;const re=De(P);if((re.width>W||re.height>W)&&(ee=W/Math.max(re.width,re.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(ee*re.width),Ae=Math.floor(ee*re.height);p===void 0&&(p=y(J,Ae));const fe=b?y(J,Ae):p;return fe.width=J,fe.height=Ae,fe.getContext("2d").drawImage(P,0,0,J,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+J+"x"+Ae+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function g(P){return P.generateMipmaps}function u(P){t.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(P,b,W,ee,re=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=b;if(b===t.RED&&(W===t.FLOAT&&(J=t.R32F),W===t.HALF_FLOAT&&(J=t.R16F),W===t.UNSIGNED_BYTE&&(J=t.R8)),b===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(J=t.R8UI),W===t.UNSIGNED_SHORT&&(J=t.R16UI),W===t.UNSIGNED_INT&&(J=t.R32UI),W===t.BYTE&&(J=t.R8I),W===t.SHORT&&(J=t.R16I),W===t.INT&&(J=t.R32I)),b===t.RG&&(W===t.FLOAT&&(J=t.RG32F),W===t.HALF_FLOAT&&(J=t.RG16F),W===t.UNSIGNED_BYTE&&(J=t.RG8)),b===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(J=t.RG8UI),W===t.UNSIGNED_SHORT&&(J=t.RG16UI),W===t.UNSIGNED_INT&&(J=t.RG32UI),W===t.BYTE&&(J=t.RG8I),W===t.SHORT&&(J=t.RG16I),W===t.INT&&(J=t.RG32I)),b===t.RGB_INTEGER&&(W===t.UNSIGNED_BYTE&&(J=t.RGB8UI),W===t.UNSIGNED_SHORT&&(J=t.RGB16UI),W===t.UNSIGNED_INT&&(J=t.RGB32UI),W===t.BYTE&&(J=t.RGB8I),W===t.SHORT&&(J=t.RGB16I),W===t.INT&&(J=t.RGB32I)),b===t.RGBA_INTEGER&&(W===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),W===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),W===t.UNSIGNED_INT&&(J=t.RGBA32UI),W===t.BYTE&&(J=t.RGBA8I),W===t.SHORT&&(J=t.RGBA16I),W===t.INT&&(J=t.RGBA32I)),b===t.RGB&&W===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),b===t.RGBA){const Ae=re?ou:Je.getTransfer(ee);W===t.FLOAT&&(J=t.RGBA32F),W===t.HALF_FLOAT&&(J=t.RGBA16F),W===t.UNSIGNED_BYTE&&(J=Ae===dt?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(P,b){let W;return P?b===null||b===ps||b===ya?W=t.DEPTH24_STENCIL8:b===Gi?W=t.DEPTH32F_STENCIL8:b===Uo&&(W=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ps||b===ya?W=t.DEPTH_COMPONENT24:b===Gi?W=t.DEPTH_COMPONENT32F:b===Uo&&(W=t.DEPTH_COMPONENT16),W}function A(P,b){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==mi&&P.minFilter!==bi?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function T(P){const b=P.target;b.removeEventListener("dispose",T),R(b),b.isVideoTexture&&f.delete(b)}function C(P){const b=P.target;b.removeEventListener("dispose",C),S(b)}function R(P){const b=i.get(P);if(b.__webglInit===void 0)return;const W=P.source,ee=h.get(W);if(ee){const re=ee[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&w(P),Object.keys(ee).length===0&&h.delete(W)}i.remove(P)}function w(P){const b=i.get(P);t.deleteTexture(b.__webglTexture);const W=P.source,ee=h.get(W);delete ee[b.__cacheKey],a.memory.textures--}function S(P){const b=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let re=0;re<b.__webglFramebuffer[ee].length;re++)t.deleteFramebuffer(b.__webglFramebuffer[ee][re]);else t.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)t.deleteFramebuffer(b.__webglFramebuffer[ee]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=P.textures;for(let ee=0,re=W.length;ee<re;ee++){const J=i.get(W[ee]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(W[ee])}i.remove(P)}let N=0;function V(){N=0}function j(){const P=N;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),N+=1,P}function I(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function B(P,b){const W=i.get(P);if(P.isVideoTexture&&Ie(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(W,P,b);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+b)}function H(P,b){const W=i.get(P);if(P.version>0&&W.__version!==P.version){Y(W,P,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+b)}function K(P,b){const W=i.get(P);if(P.version>0&&W.__version!==P.version){Y(W,P,b);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+b)}function D(P,b){const W=i.get(P);if(P.version>0&&W.__version!==P.version){ie(W,P,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+b)}const G={[kh]:t.REPEAT,[ns]:t.CLAMP_TO_EDGE,[Oh]:t.MIRRORED_REPEAT},$={[mi]:t.NEAREST,[Db]:t.NEAREST_MIPMAP_NEAREST,[fl]:t.NEAREST_MIPMAP_LINEAR,[bi]:t.LINEAR,[Bu]:t.LINEAR_MIPMAP_NEAREST,[is]:t.LINEAR_MIPMAP_LINEAR},ne={[Fb]:t.NEVER,[Vb]:t.ALWAYS,[kb]:t.LESS,[v_]:t.LEQUAL,[Ob]:t.EQUAL,[jb]:t.GEQUAL,[Bb]:t.GREATER,[zb]:t.NOTEQUAL};function ce(P,b){if(b.type===Gi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===bi||b.magFilter===Bu||b.magFilter===fl||b.magFilter===is||b.minFilter===bi||b.minFilter===Bu||b.minFilter===fl||b.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,G[b.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,G[b.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,G[b.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,$[b.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,$[b.minFilter]),b.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ne[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===mi||b.minFilter!==fl&&b.minFilter!==is||b.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Se(P,b){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",T));const ee=b.source;let re=h.get(ee);re===void 0&&(re={},h.set(ee,re));const J=I(b);if(J!==P.__cacheKey){re[J]===void 0&&(re[J]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,W=!0),re[J].usedTimes++;const Ae=re[P.__cacheKey];Ae!==void 0&&(re[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&w(b)),P.__cacheKey=J,P.__webglTexture=re[J].texture}return W}function Y(P,b,W){let ee=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=t.TEXTURE_3D);const re=Se(P,b),J=b.source;n.bindTexture(ee,P.__webglTexture,t.TEXTURE0+W);const Ae=i.get(J);if(J.version!==Ae.__version||re===!0){n.activeTexture(t.TEXTURE0+W);const fe=Je.getPrimaries(Je.workingColorSpace),ye=b.colorSpace===gr?null:Je.getPrimaries(b.colorSpace),nt=b.colorSpace===gr||fe===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ae=v(b.image,!1,r.maxTextureSize);ae=xt(b,ae);const _e=s.convert(b.format,b.colorSpace),Le=s.convert(b.type);let ke=_(b.internalFormat,_e,Le,b.colorSpace,b.isVideoTexture);ce(ee,b);let Me;const Qe=b.mipmaps,He=b.isVideoTexture!==!0,mt=Ae.__version===void 0||re===!0,F=J.dataReady,he=A(b,ae);if(b.isDepthTexture)ke=M(b.format===_a,b.type),mt&&(He?n.texStorage2D(t.TEXTURE_2D,1,ke,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,ke,ae.width,ae.height,0,_e,Le,null));else if(b.isDataTexture)if(Qe.length>0){He&&mt&&n.texStorage2D(t.TEXTURE_2D,he,ke,Qe[0].width,Qe[0].height);for(let Z=0,te=Qe.length;Z<te;Z++)Me=Qe[Z],He?F&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Me.width,Me.height,_e,Le,Me.data):n.texImage2D(t.TEXTURE_2D,Z,ke,Me.width,Me.height,0,_e,Le,Me.data);b.generateMipmaps=!1}else He?(mt&&n.texStorage2D(t.TEXTURE_2D,he,ke,ae.width,ae.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,_e,Le,ae.data)):n.texImage2D(t.TEXTURE_2D,0,ke,ae.width,ae.height,0,_e,Le,ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){He&&mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,ke,Qe[0].width,Qe[0].height,ae.depth);for(let Z=0,te=Qe.length;Z<te;Z++)if(Me=Qe[Z],b.format!==Yn)if(_e!==null)if(He){if(F)if(b.layerUpdates.size>0){const ge=ag(Me.width,Me.height,b.format,b.type);for(const pe of b.layerUpdates){const ze=Me.data.subarray(pe*ge/Me.data.BYTES_PER_ELEMENT,(pe+1)*ge/Me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,pe,Me.width,Me.height,1,_e,ze)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,Me.width,Me.height,ae.depth,_e,Me.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,ke,Me.width,Me.height,ae.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,Me.width,Me.height,ae.depth,_e,Le,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,ke,Me.width,Me.height,ae.depth,0,_e,Le,Me.data)}else{He&&mt&&n.texStorage2D(t.TEXTURE_2D,he,ke,Qe[0].width,Qe[0].height);for(let Z=0,te=Qe.length;Z<te;Z++)Me=Qe[Z],b.format!==Yn?_e!==null?He?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,Me.width,Me.height,_e,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,ke,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?F&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Me.width,Me.height,_e,Le,Me.data):n.texImage2D(t.TEXTURE_2D,Z,ke,Me.width,Me.height,0,_e,Le,Me.data)}else if(b.isDataArrayTexture)if(He){if(mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,ke,ae.width,ae.height,ae.depth),F)if(b.layerUpdates.size>0){const Z=ag(ae.width,ae.height,b.format,b.type);for(const te of b.layerUpdates){const ge=ae.data.subarray(te*Z/ae.data.BYTES_PER_ELEMENT,(te+1)*Z/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,_e,Le,ge)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,_e,Le,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,ae.width,ae.height,ae.depth,0,_e,Le,ae.data);else if(b.isData3DTexture)He?(mt&&n.texStorage3D(t.TEXTURE_3D,he,ke,ae.width,ae.height,ae.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,_e,Le,ae.data)):n.texImage3D(t.TEXTURE_3D,0,ke,ae.width,ae.height,ae.depth,0,_e,Le,ae.data);else if(b.isFramebufferTexture){if(mt)if(He)n.texStorage2D(t.TEXTURE_2D,he,ke,ae.width,ae.height);else{let Z=ae.width,te=ae.height;for(let ge=0;ge<he;ge++)n.texImage2D(t.TEXTURE_2D,ge,ke,Z,te,0,_e,Le,null),Z>>=1,te>>=1}}else if(Qe.length>0){if(He&&mt){const Z=De(Qe[0]);n.texStorage2D(t.TEXTURE_2D,he,ke,Z.width,Z.height)}for(let Z=0,te=Qe.length;Z<te;Z++)Me=Qe[Z],He?F&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,_e,Le,Me):n.texImage2D(t.TEXTURE_2D,Z,ke,_e,Le,Me);b.generateMipmaps=!1}else if(He){if(mt){const Z=De(ae);n.texStorage2D(t.TEXTURE_2D,he,ke,Z.width,Z.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Le,ae)}else n.texImage2D(t.TEXTURE_2D,0,ke,_e,Le,ae);g(b)&&u(ee),Ae.__version=J.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ie(P,b,W){if(b.image.length!==6)return;const ee=Se(P,b),re=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+W);const J=i.get(re);if(re.version!==J.__version||ee===!0){n.activeTexture(t.TEXTURE0+W);const Ae=Je.getPrimaries(Je.workingColorSpace),fe=b.colorSpace===gr?null:Je.getPrimaries(b.colorSpace),ye=b.colorSpace===gr||Ae===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const nt=b.isCompressedTexture||b.image[0].isCompressedTexture,ae=b.image[0]&&b.image[0].isDataTexture,_e=[];for(let te=0;te<6;te++)!nt&&!ae?_e[te]=v(b.image[te],!0,r.maxCubemapSize):_e[te]=ae?b.image[te].image:b.image[te],_e[te]=xt(b,_e[te]);const Le=_e[0],ke=s.convert(b.format,b.colorSpace),Me=s.convert(b.type),Qe=_(b.internalFormat,ke,Me,b.colorSpace),He=b.isVideoTexture!==!0,mt=J.__version===void 0||ee===!0,F=re.dataReady;let he=A(b,Le);ce(t.TEXTURE_CUBE_MAP,b);let Z;if(nt){He&&mt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Qe,Le.width,Le.height);for(let te=0;te<6;te++){Z=_e[te].mipmaps;for(let ge=0;ge<Z.length;ge++){const pe=Z[ge];b.format!==Yn?ke!==null?He?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,0,0,pe.width,pe.height,ke,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,Qe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,0,0,pe.width,pe.height,ke,Me,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,Qe,pe.width,pe.height,0,ke,Me,pe.data)}}}else{if(Z=b.mipmaps,He&&mt){Z.length>0&&he++;const te=De(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Qe,te.width,te.height)}for(let te=0;te<6;te++)if(ae){He?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e[te].width,_e[te].height,ke,Me,_e[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Qe,_e[te].width,_e[te].height,0,ke,Me,_e[te].data);for(let ge=0;ge<Z.length;ge++){const ze=Z[ge].image[te].image;He?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,0,0,ze.width,ze.height,ke,Me,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,Qe,ze.width,ze.height,0,ke,Me,ze.data)}}else{He?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ke,Me,_e[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Qe,ke,Me,_e[te]);for(let ge=0;ge<Z.length;ge++){const pe=Z[ge];He?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,0,0,ke,Me,pe.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,Qe,ke,Me,pe.image[te])}}}g(b)&&u(t.TEXTURE_CUBE_MAP),J.__version=re.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ue(P,b,W,ee,re,J){const Ae=s.convert(W.format,W.colorSpace),fe=s.convert(W.type),ye=_(W.internalFormat,Ae,fe,W.colorSpace),nt=i.get(b),ae=i.get(W);if(ae.__renderTarget=b,!nt.__hasExternalTextures){const _e=Math.max(1,b.width>>J),Le=Math.max(1,b.height>>J);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,J,ye,_e,Le,b.depth,0,Ae,fe,null):n.texImage2D(re,J,ye,_e,Le,0,Ae,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Ze(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,re,ae.__webglTexture,0,Ke(b)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,re,ae.__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(P,b,W){if(t.bindRenderbuffer(t.RENDERBUFFER,P),b.depthBuffer){const ee=b.depthTexture,re=ee&&ee.isDepthTexture?ee.type:null,J=M(b.stencilBuffer,re),Ae=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=Ke(b);Ze(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,J,b.width,b.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,J,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,J,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,P)}else{const ee=b.textures;for(let re=0;re<ee.length;re++){const J=ee[re],Ae=s.convert(J.format,J.colorSpace),fe=s.convert(J.type),ye=_(J.internalFormat,Ae,fe,J.colorSpace),nt=Ke(b);W&&Ze(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,nt,ye,b.width,b.height):Ze(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,nt,ye,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,ye,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(b.depthTexture);ee.__renderTarget=b,(!ee.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),B(b.depthTexture,0);const re=ee.__webglTexture,J=Ke(b);if(b.depthTexture.format===ia)Ze(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(b.depthTexture.format===_a)Ze(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ce(P){const b=i.get(P),W=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const ee=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ee){const re=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ee.removeEventListener("dispose",re)};ee.addEventListener("dispose",re),b.__depthDisposeCallback=re}b.__boundDepthTexture=ee}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Te(b.__webglFramebuffer,P)}else if(W){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]===void 0)b.__webglDepthbuffer[ee]=t.createRenderbuffer(),le(b.__webglDepthbuffer[ee],P,!1);else{const re=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),le(b.__webglDepthbuffer,P,!1);else{const ee=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,re)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(P,b,W){const ee=i.get(P);b!==void 0&&ue(ee.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Ce(P)}function Ct(P){const b=P.texture,W=i.get(P),ee=i.get(b);P.addEventListener("dispose",C);const re=P.textures,J=P.isWebGLCubeRenderTarget===!0,Ae=re.length>1;if(Ae||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=b.version,a.memory.textures++),J){W.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[fe]=[];for(let ye=0;ye<b.mipmaps.length;ye++)W.__webglFramebuffer[fe][ye]=t.createFramebuffer()}else W.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)W.__webglFramebuffer[fe]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let fe=0,ye=re.length;fe<ye;fe++){const nt=i.get(re[fe]);nt.__webglTexture===void 0&&(nt.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&Ze(P)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){const ye=re[fe];W.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[fe]);const nt=s.convert(ye.format,ye.colorSpace),ae=s.convert(ye.type),_e=_(ye.internalFormat,nt,ae,ye.colorSpace,P.isXRRenderTarget===!0),Le=Ke(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,_e,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,W.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),le(W.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),ce(t.TEXTURE_CUBE_MAP,b);for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)ue(W.__webglFramebuffer[fe][ye],P,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else ue(W.__webglFramebuffer[fe],P,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(b)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let fe=0,ye=re.length;fe<ye;fe++){const nt=re[fe],ae=i.get(nt);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),ce(t.TEXTURE_2D,nt),ue(W.__webglFramebuffer,P,nt,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),g(nt)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,ee.__webglTexture),ce(fe,b),b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)ue(W.__webglFramebuffer[ye],P,b,t.COLOR_ATTACHMENT0,fe,ye);else ue(W.__webglFramebuffer,P,b,t.COLOR_ATTACHMENT0,fe,0);g(b)&&u(fe),n.unbindTexture()}P.depthBuffer&&Ce(P)}function tt(P){const b=P.textures;for(let W=0,ee=b.length;W<ee;W++){const re=b[W];if(g(re)){const J=x(P),Ae=i.get(re).__webglTexture;n.bindTexture(J,Ae),u(J),n.unbindTexture()}}}const It=[],z=[];function jn(P){if(P.samples>0){if(Ze(P)===!1){const b=P.textures,W=P.width,ee=P.height;let re=t.COLOR_BUFFER_BIT;const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(P),fe=b.length>1;if(fe)for(let ye=0;ye<b.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ye]);const nt=i.get(b[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,nt,0)}t.blitFramebuffer(0,0,W,ee,0,0,W,ee,re,t.NEAREST),l===!0&&(It.length=0,z.length=0,It.push(t.COLOR_ATTACHMENT0+ye),P.depthBuffer&&P.resolveDepthBuffer===!1&&(It.push(J),z.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,z)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,It))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<b.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ye]);const nt=i.get(b[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,nt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function Ke(P){return Math.min(r.maxSamples,P.samples)}function Ze(P){const b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ie(P){const b=a.render.frame;f.get(P)!==b&&(f.set(P,b),P.update())}function xt(P,b){const W=P.colorSpace,ee=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Ta&&W!==gr&&(Je.getTransfer(W)===dt?(ee!==Yn||re!==tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}function De(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=V,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=D,this.rebindTextures=Oe,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=jn,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ze}function WA(t,e){function n(i,r=gr){let s;const a=Je.getTransfer(r);if(i===tr)return t.UNSIGNED_BYTE;if(i===bp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ep)return t.UNSIGNED_SHORT_5_5_5_1;if(i===l_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===a_)return t.BYTE;if(i===o_)return t.SHORT;if(i===Uo)return t.UNSIGNED_SHORT;if(i===wp)return t.INT;if(i===ps)return t.UNSIGNED_INT;if(i===Gi)return t.FLOAT;if(i===Ai)return t.HALF_FLOAT;if(i===c_)return t.ALPHA;if(i===u_)return t.RGB;if(i===Yn)return t.RGBA;if(i===d_)return t.LUMINANCE;if(i===h_)return t.LUMINANCE_ALPHA;if(i===ia)return t.DEPTH_COMPONENT;if(i===_a)return t.DEPTH_STENCIL;if(i===f_)return t.RED;if(i===Tp)return t.RED_INTEGER;if(i===p_)return t.RG;if(i===Cp)return t.RG_INTEGER;if(i===Ap)return t.RGBA_INTEGER;if(i===nc||i===ic||i===rc||i===sc)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===nc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===nc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bh||i===zh||i===jh||i===Vh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hh||i===Gh||i===Wh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hh||i===Gh)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xh||i===qh||i===$h||i===Yh||i===Kh||i===Zh||i===Qh||i===Jh||i===ef||i===tf||i===nf||i===rf||i===sf||i===af)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Xh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$h)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jh)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ef)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===af)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ac||i===of||i===lf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ac)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===of)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===m_||i===cf||i===uf||i===df)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ac)return s.COMPRESSED_RED_RGTC1_EXT;if(i===cf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===df)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ya?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class XA extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hi extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qA={type:"move"};class pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),u=this._getHandJoint(c,v);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=f.position.distanceTo(p.position),m=.02,y=.005;c.inputState.pinching&&h>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const $A=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YA=`
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

}`;class KA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new mn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ht({vertexShader:$A,fragmentShader:YA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vt(new qo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZA extends Ca{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,p=null,h=null,m=null,y=null;const v=new KA,g=n.getContextAttributes();let u=null,x=null;const _=[],M=[],A=new Fe;let T=null;const C=new Dn;C.viewport=new pt;const R=new Dn;R.viewport=new pt;const w=[C,R],S=new XA;let N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=_[Y];return ie===void 0&&(ie=new pd,_[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=_[Y];return ie===void 0&&(ie=new pd,_[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=_[Y];return ie===void 0&&(ie=new pd,_[Y]=ie),ie.getHandSpace()};function j(Y){const ie=M.indexOf(Y.inputSource);if(ie===-1)return;const ue=_[ie];ue!==void 0&&(ue.update(Y.inputSource,Y.frame,c||a),ue.dispatchEvent({type:Y.type,data:Y.inputSource}))}function I(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",B);for(let Y=0;Y<_.length;Y++){const ie=M[Y];ie!==null&&(M[Y]=null,_[Y].disconnect(ie))}N=null,V=null,v.reset(),e.setRenderTarget(u),m=null,h=null,p=null,r=null,x=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",I),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Zn(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:tr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ie=null,ue=null,le=null;g.depth&&(le=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=g.stencil?_a:ia,ue=g.stencil?ya:ps);const Te={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(Te),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Zn(h.textureWidth,h.textureHeight,{format:Yn,type:tr,depthTexture:new R_(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Se.setContext(r),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function B(Y){for(let ie=0;ie<Y.removed.length;ie++){const ue=Y.removed[ie],le=M.indexOf(ue);le>=0&&(M[le]=null,_[le].disconnect(ue))}for(let ie=0;ie<Y.added.length;ie++){const ue=Y.added[ie];let le=M.indexOf(ue);if(le===-1){for(let Ce=0;Ce<_.length;Ce++)if(Ce>=M.length){M.push(ue),le=Ce;break}else if(M[Ce]===null){M[Ce]=ue,le=Ce;break}if(le===-1)break}const Te=_[le];Te&&Te.connect(ue)}}const H=new U,K=new U;function D(Y,ie,ue){H.setFromMatrixPosition(ie.matrixWorld),K.setFromMatrixPosition(ue.matrixWorld);const le=H.distanceTo(K),Te=ie.projectionMatrix.elements,Ce=ue.projectionMatrix.elements,Oe=Te[14]/(Te[10]-1),Ct=Te[14]/(Te[10]+1),tt=(Te[9]+1)/Te[5],It=(Te[9]-1)/Te[5],z=(Te[8]-1)/Te[0],jn=(Ce[8]+1)/Ce[0],Ke=Oe*z,Ze=Oe*jn,Ie=le/(-z+jn),xt=Ie*-z;if(ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(xt),Y.translateZ(Ie),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Te[10]===-1)Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const De=Oe+Ie,P=Ct+Ie,b=Ke-xt,W=Ze+(le-xt),ee=tt*Ct/P*De,re=It*Ct/P*De;Y.projectionMatrix.makePerspective(b,W,ee,re,De,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function G(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ie=Y.near,ue=Y.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(ue=v.depthFar)),S.near=R.near=C.near=ie,S.far=R.far=C.far=ue,(N!==S.near||V!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,V=S.far),C.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,S.layers.mask=C.layers.mask|R.layers.mask;const le=Y.parent,Te=S.cameras;G(S,le);for(let Ce=0;Ce<Te.length;Ce++)G(Te[Ce],le);Te.length===2?D(S,C,R):S.projectionMatrix.copy(C.projectionMatrix),$(Y,S,le)};function $(Y,ie,ue){ue===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(ue.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=hf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ne=null;function ce(Y,ie){if(f=ie.getViewerPose(c||a),y=ie,f!==null){const ue=f.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let le=!1;ue.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let Ce=0;Ce<ue.length;Ce++){const Oe=ue[Ce];let Ct=null;if(m!==null)Ct=m.getViewport(Oe);else{const It=p.getViewSubImage(h,Oe);Ct=It.viewport,Ce===0&&(e.setRenderTargetTextures(x,It.colorTexture,h.ignoreDepthValues?void 0:It.depthStencilTexture),e.setRenderTarget(x))}let tt=w[Ce];tt===void 0&&(tt=new Dn,tt.layers.enable(Ce),tt.viewport=new pt,w[Ce]=tt),tt.matrix.fromArray(Oe.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Oe.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Ce===0&&(S.matrix.copy(tt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(tt)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ce=p.getDepthInformation(ue[0]);Ce&&Ce.isValid&&Ce.texture&&v.init(e,Ce,r.renderState)}}for(let ue=0;ue<_.length;ue++){const le=M[ue],Te=_[ue];le!==null&&Te!==void 0&&Te.update(le,ie,c||a)}ne&&ne(Y,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),y=null}const Se=new A_;Se.setAnimationLoop(ce),this.setAnimationLoop=function(Y){ne=Y},this.dispose=function(){}}}const Vr=new Pi,QA=new wt;function JA(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,E_(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,x,_,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),p(g,u)):u.isMeshPhongMaterial?(s(g,u),f(g,u)):u.isMeshStandardMaterial?(s(g,u),h(g,u),u.isMeshPhysicalMaterial&&m(g,u,M)):u.isMeshMatcapMaterial?(s(g,u),y(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),v(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,x,_):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Tn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Tn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const x=e.get(u),_=x.envMap,M=x.envMapRotation;_&&(g.envMap.value=_,Vr.copy(M),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),g.envMapRotation.value.setFromMatrix4(QA.makeRotationFromEuler(Vr)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,x,_){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*x,g.scale.value=_*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function p(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function h(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,x){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Tn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,u){u.matcap&&(g.matcap.value=u.matcap)}function v(g,u){const x=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eR(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const M=_.program;i.uniformBlockBinding(x,M)}function c(x,_){let M=r[x.id];M===void 0&&(y(x),M=f(x),r[x.id]=M,x.addEventListener("dispose",g));const A=_.program;i.updateUBOMapping(x,A);const T=e.render.frame;s[x.id]!==T&&(h(x),s[x.id]=T)}function f(x){const _=p();x.__bindingPointIndex=_;const M=t.createBuffer(),A=x.__size,T=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,A,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function p(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const _=r[x.id],M=x.uniforms,A=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,C=M.length;T<C;T++){const R=Array.isArray(M[T])?M[T]:[M[T]];for(let w=0,S=R.length;w<S;w++){const N=R[w];if(m(N,T,w,A)===!0){const V=N.__offset,j=Array.isArray(N.value)?N.value:[N.value];let I=0;for(let B=0;B<j.length;B++){const H=j[B],K=v(H);typeof H=="number"||typeof H=="boolean"?(N.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,V+I,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=0,N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=0,N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=0):(H.toArray(N.__data,I),I+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(x,_,M,A){const T=x.value,C=_+"_"+M;if(A[C]===void 0)return typeof T=="number"||typeof T=="boolean"?A[C]=T:A[C]=T.clone(),!0;{const R=A[C];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return A[C]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function y(x){const _=x.uniforms;let M=0;const A=16;for(let C=0,R=_.length;C<R;C++){const w=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,N=w.length;S<N;S++){const V=w[S],j=Array.isArray(V.value)?V.value:[V.value];for(let I=0,B=j.length;I<B;I++){const H=j[I],K=v(H),D=M%A,G=D%K.boundary,$=D+G;M+=G,$!==0&&A-$<K.storage&&(M+=A-$),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=K.storage}}}const T=M%A;return T>0&&(M+=A-T),x.__size=M,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function g(x){const _=x.target;_.removeEventListener("dispose",g);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const x in r)t.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class og{constructor(e={}){const{canvas:n=Gb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const y=new Uint32Array(4),v=new Int32Array(4);let g=null,u=null;const x=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this.toneMapping=Ar,this.toneMappingExposure=1;const M=this;let A=!1,T=0,C=0,R=null,w=-1,S=null;const N=new pt,V=new pt;let j=null;const I=new Ne(0);let B=0,H=n.width,K=n.height,D=1,G=null,$=null;const ne=new pt(0,0,H,K),ce=new pt(0,0,H,K);let Se=!1;const Y=new Pp;let ie=!1,ue=!1;const le=new wt,Te=new wt,Ce=new U,Oe=new pt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function It(){return R===null?D:1}let z=i;function jn(E,k){return n.getContext(E,k)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Mp}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",pe,!1),z===null){const k="webgl2";if(z=jn(k,E),z===null)throw jn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ke,Ze,Ie,xt,De,P,b,W,ee,re,J,Ae,fe,ye,nt,ae,_e,Le,ke,Me,Qe,He,mt,F;function he(){Ke=new aC(z),Ke.init(),He=new WA(z,Ke),Ze=new eC(z,Ke,e,He),Ie=new VA(z,Ke),Ze.reverseDepthBuffer&&h&&Ie.buffers.depth.setReversed(!0),xt=new cC(z),De=new CA,P=new GA(z,Ke,Ie,De,Ze,He,xt),b=new nC(M),W=new sC(M),ee=new gE(z),mt=new QT(z,ee),re=new oC(z,ee,xt,mt),J=new dC(z,re,ee,xt),ke=new uC(z,Ze,P),ae=new tC(De),Ae=new TA(M,b,W,Ke,Ze,mt,ae),fe=new JA(M,De),ye=new RA,nt=new UA(Ke),Le=new ZT(M,b,W,Ie,J,m,l),_e=new zA(M,J,Ze),F=new eR(z,xt,Ze,Ie),Me=new JT(z,Ke,xt),Qe=new lC(z,Ke,xt),xt.programs=Ae.programs,M.capabilities=Ze,M.extensions=Ke,M.properties=De,M.renderLists=ye,M.shadowMap=_e,M.state=Ie,M.info=xt}he();const Z=new ZA(M,z);this.xr=Z,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=Ke.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ke.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(E){E!==void 0&&(D=E,this.setSize(H,K,!1))},this.getSize=function(E){return E.set(H,K)},this.setSize=function(E,k,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,K=k,n.width=Math.floor(E*D),n.height=Math.floor(k*D),X===!0&&(n.style.width=E+"px",n.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(H*D,K*D).floor()},this.setDrawingBufferSize=function(E,k,X){H=E,K=k,D=X,n.width=Math.floor(E*X),n.height=Math.floor(k*X),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(N)},this.getViewport=function(E){return E.copy(ne)},this.setViewport=function(E,k,X,q){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,k,X,q),Ie.viewport(N.copy(ne).multiplyScalar(D).round())},this.getScissor=function(E){return E.copy(ce)},this.setScissor=function(E,k,X,q){E.isVector4?ce.set(E.x,E.y,E.z,E.w):ce.set(E,k,X,q),Ie.scissor(V.copy(ce).multiplyScalar(D).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(E){Ie.setScissorTest(Se=E)},this.setOpaqueSort=function(E){G=E},this.setTransparentSort=function(E){$=E},this.getClearColor=function(E){return E.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(E=!0,k=!0,X=!0){let q=0;if(E){let O=!1;if(R!==null){const oe=R.texture.format;O=oe===Ap||oe===Cp||oe===Tp}if(O){const oe=R.texture.type,me=oe===tr||oe===ps||oe===Uo||oe===ya||oe===bp||oe===Ep,we=Le.getClearColor(),be=Le.getClearAlpha(),Be=we.r,je=we.g,Ee=we.b;me?(y[0]=Be,y[1]=je,y[2]=Ee,y[3]=be,z.clearBufferuiv(z.COLOR,0,y)):(v[0]=Be,v[1]=je,v[2]=Ee,v[3]=be,z.clearBufferiv(z.COLOR,0,v))}else q|=z.COLOR_BUFFER_BIT}k&&(q|=z.DEPTH_BUFFER_BIT),X&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),ye.dispose(),nt.dispose(),De.dispose(),b.dispose(),W.dispose(),J.dispose(),mt.dispose(),F.dispose(),Ae.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",jp),Z.removeEventListener("sessionend",Vp),Ur.stop()};function te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=xt.autoReset,k=_e.enabled,X=_e.autoUpdate,q=_e.needsUpdate,O=_e.type;he(),xt.autoReset=E,_e.enabled=k,_e.autoUpdate=X,_e.needsUpdate=q,_e.type=O}function pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ze(E){const k=E.target;k.removeEventListener("dispose",ze),Nt(k)}function Nt(E){rn(E),De.remove(E)}function rn(E){const k=De.get(E).programs;k!==void 0&&(k.forEach(function(X){Ae.releaseProgram(X)}),E.isShaderMaterial&&Ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,X,q,O,oe){k===null&&(k=Ct);const me=O.isMesh&&O.matrixWorld.determinant()<0,we=j_(E,k,X,q,O);Ie.setMaterial(q,me);let be=X.index,Be=1;if(q.wireframe===!0){if(be=re.getWireframeAttribute(X),be===void 0)return;Be=2}const je=X.drawRange,Ee=X.attributes.position;let rt=je.start*Be,gt=(je.start+je.count)*Be;oe!==null&&(rt=Math.max(rt,oe.start*Be),gt=Math.min(gt,(oe.start+oe.count)*Be)),be!==null?(rt=Math.max(rt,0),gt=Math.min(gt,be.count)):Ee!=null&&(rt=Math.max(rt,0),gt=Math.min(gt,Ee.count));const yt=gt-rt;if(yt<0||yt===1/0)return;mt.setup(O,q,we,X,be);let xn,ot=Me;if(be!==null&&(xn=ee.get(be),ot=Qe,ot.setIndex(xn)),O.isMesh)q.wireframe===!0?(Ie.setLineWidth(q.wireframeLinewidth*It()),ot.setMode(z.LINES)):ot.setMode(z.TRIANGLES);else if(O.isLine){let Re=q.linewidth;Re===void 0&&(Re=1),Ie.setLineWidth(Re*It()),O.isLineSegments?ot.setMode(z.LINES):O.isLineLoop?ot.setMode(z.LINE_LOOP):ot.setMode(z.LINE_STRIP)}else O.isPoints?ot.setMode(z.POINTS):O.isSprite&&ot.setMode(z.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ot.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))ot.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Re=O._multiDrawStarts,Di=O._multiDrawCounts,lt=O._multiDrawCount,ti=be?ee.get(be).bytesPerElement:1,xs=De.get(q).currentProgram.getUniforms();for(let Cn=0;Cn<lt;Cn++)xs.setValue(z,"_gl_DrawID",Cn),ot.render(Re[Cn]/ti,Di[Cn])}else if(O.isInstancedMesh)ot.renderInstances(rt,yt,O.count);else if(X.isInstancedBufferGeometry){const Re=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Di=Math.min(X.instanceCount,Re);ot.renderInstances(rt,yt,Di)}else ot.render(rt,yt)};function ut(E,k,X){E.transparent===!0&&E.side===Ln&&E.forceSinglePass===!1?(E.side=Tn,E.needsUpdate=!0,Yo(E,k,X),E.side=Nr,E.needsUpdate=!0,Yo(E,k,X),E.side=Ln):Yo(E,k,X)}this.compile=function(E,k,X=null){X===null&&(X=E),u=nt.get(X),u.init(k),_.push(u),X.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),E!==X&&E.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();const q=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const oe=O.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){const we=oe[me];ut(we,X,O),q.add(we)}else ut(oe,X,O),q.add(oe)}),_.pop(),u=null,q},this.compileAsync=function(E,k,X=null){const q=this.compile(E,k,X);return new Promise(O=>{function oe(){if(q.forEach(function(me){De.get(me).currentProgram.isReady()&&q.delete(me)}),q.size===0){O(E);return}setTimeout(oe,10)}Ke.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let ei=null;function Ni(E){ei&&ei(E)}function jp(){Ur.stop()}function Vp(){Ur.start()}const Ur=new A_;Ur.setAnimationLoop(Ni),typeof self<"u"&&Ur.setContext(self),this.setAnimationLoop=function(E){ei=E,Z.setAnimationLoop(E),E===null?Ur.stop():Ur.start()},Z.addEventListener("sessionstart",jp),Z.addEventListener("sessionend",Vp),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(k),k=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,k,R),u=nt.get(E,_.length),u.init(k),_.push(u),Te.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(Te),ue=this.localClippingEnabled,ie=ae.init(this.clippingPlanes,ue),g=ye.get(E,x.length),g.init(),x.push(g),Z.enabled===!0&&Z.isPresenting===!0){const oe=M.xr.getDepthSensingMesh();oe!==null&&uu(oe,k,-1/0,M.sortObjects)}uu(E,k,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(G,$),tt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,tt&&Le.addToRenderList(g,E),this.info.render.frame++,ie===!0&&ae.beginShadows();const X=u.state.shadowsArray;_e.render(X,E,k),ie===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,O=g.transmissive;if(u.setupLights(),k.isArrayCamera){const oe=k.cameras;if(O.length>0)for(let me=0,we=oe.length;me<we;me++){const be=oe[me];Gp(q,O,E,be)}tt&&Le.render(E);for(let me=0,we=oe.length;me<we;me++){const be=oe[me];Hp(g,E,be,be.viewport)}}else O.length>0&&Gp(q,O,E,k),tt&&Le.render(E),Hp(g,E,k);R!==null&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(M,E,k),mt.resetDefaultState(),w=-1,S=null,_.pop(),_.length>0?(u=_[_.length-1],ie===!0&&ae.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function uu(E,k,X,q){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){q&&Oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Te);const me=J.update(E),we=E.material;we.visible&&g.push(E,me,we,X,Oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){const me=J.update(E),we=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Oe.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Oe.copy(me.boundingSphere.center)),Oe.applyMatrix4(E.matrixWorld).applyMatrix4(Te)),Array.isArray(we)){const be=me.groups;for(let Be=0,je=be.length;Be<je;Be++){const Ee=be[Be],rt=we[Ee.materialIndex];rt&&rt.visible&&g.push(E,me,rt,X,Oe.z,Ee)}}else we.visible&&g.push(E,me,we,X,Oe.z,null)}}const oe=E.children;for(let me=0,we=oe.length;me<we;me++)uu(oe[me],k,X,q)}function Hp(E,k,X,q){const O=E.opaque,oe=E.transmissive,me=E.transparent;u.setupLightsView(X),ie===!0&&ae.setGlobalState(M.clippingPlanes,X),q&&Ie.viewport(N.copy(q)),O.length>0&&$o(O,k,X),oe.length>0&&$o(oe,k,X),me.length>0&&$o(me,k,X),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Gp(E,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[q.id]===void 0&&(u.state.transmissionRenderTarget[q.id]=new Zn(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?Ai:tr,minFilter:is,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const oe=u.state.transmissionRenderTarget[q.id],me=q.viewport||N;oe.setSize(me.z,me.w);const we=M.getRenderTarget();M.setRenderTarget(oe),M.getClearColor(I),B=M.getClearAlpha(),B<1&&M.setClearColor(16777215,.5),M.clear(),tt&&Le.render(X);const be=M.toneMapping;M.toneMapping=Ar;const Be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),u.setupLightsView(q),ie===!0&&ae.setGlobalState(M.clippingPlanes,q),$o(E,X,q),P.updateMultisampleRenderTarget(oe),P.updateRenderTargetMipmap(oe),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Ee=0,rt=k.length;Ee<rt;Ee++){const gt=k[Ee],yt=gt.object,xn=gt.geometry,ot=gt.material,Re=gt.group;if(ot.side===Ln&&yt.layers.test(q.layers)){const Di=ot.side;ot.side=Tn,ot.needsUpdate=!0,Wp(yt,X,q,xn,ot,Re),ot.side=Di,ot.needsUpdate=!0,je=!0}}je===!0&&(P.updateMultisampleRenderTarget(oe),P.updateRenderTargetMipmap(oe))}M.setRenderTarget(we),M.setClearColor(I,B),Be!==void 0&&(q.viewport=Be),M.toneMapping=be}function $o(E,k,X){const q=k.isScene===!0?k.overrideMaterial:null;for(let O=0,oe=E.length;O<oe;O++){const me=E[O],we=me.object,be=me.geometry,Be=q===null?me.material:q,je=me.group;we.layers.test(X.layers)&&Wp(we,k,X,be,Be,je)}}function Wp(E,k,X,q,O,oe){E.onBeforeRender(M,k,X,q,O,oe),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(M,k,X,q,E,oe),O.transparent===!0&&O.side===Ln&&O.forceSinglePass===!1?(O.side=Tn,O.needsUpdate=!0,M.renderBufferDirect(X,k,q,O,E,oe),O.side=Nr,O.needsUpdate=!0,M.renderBufferDirect(X,k,q,O,E,oe),O.side=Ln):M.renderBufferDirect(X,k,q,O,E,oe),E.onAfterRender(M,k,X,q,O,oe)}function Yo(E,k,X){k.isScene!==!0&&(k=Ct);const q=De.get(E),O=u.state.lights,oe=u.state.shadowsArray,me=O.state.version,we=Ae.getParameters(E,O.state,oe,k,X),be=Ae.getProgramCacheKey(we);let Be=q.programs;q.environment=E.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(E.isMeshStandardMaterial?W:b).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",ze),Be=new Map,q.programs=Be);let je=Be.get(be);if(je!==void 0){if(q.currentProgram===je&&q.lightsStateVersion===me)return qp(E,we),je}else we.uniforms=Ae.getUniforms(E),E.onBeforeCompile(we,M),je=Ae.acquireProgram(we,be),Be.set(be,je),q.uniforms=we.uniforms;const Ee=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ee.clippingPlanes=ae.uniform),qp(E,we),q.needsLights=H_(E),q.lightsStateVersion=me,q.needsLights&&(Ee.ambientLightColor.value=O.state.ambient,Ee.lightProbe.value=O.state.probe,Ee.directionalLights.value=O.state.directional,Ee.directionalLightShadows.value=O.state.directionalShadow,Ee.spotLights.value=O.state.spot,Ee.spotLightShadows.value=O.state.spotShadow,Ee.rectAreaLights.value=O.state.rectArea,Ee.ltc_1.value=O.state.rectAreaLTC1,Ee.ltc_2.value=O.state.rectAreaLTC2,Ee.pointLights.value=O.state.point,Ee.pointLightShadows.value=O.state.pointShadow,Ee.hemisphereLights.value=O.state.hemi,Ee.directionalShadowMap.value=O.state.directionalShadowMap,Ee.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ee.spotShadowMap.value=O.state.spotShadowMap,Ee.spotLightMatrix.value=O.state.spotLightMatrix,Ee.spotLightMap.value=O.state.spotLightMap,Ee.pointShadowMap.value=O.state.pointShadowMap,Ee.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=je,q.uniformsList=null,je}function Xp(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=oc.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function qp(E,k){const X=De.get(E);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function j_(E,k,X,q,O){k.isScene!==!0&&(k=Ct),P.resetTextureUnits();const oe=k.fog,me=q.isMeshStandardMaterial?k.environment:null,we=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ta,be=(q.isMeshStandardMaterial?W:b).get(q.envMap||me),Be=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,je=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ee=!!X.morphAttributes.position,rt=!!X.morphAttributes.normal,gt=!!X.morphAttributes.color;let yt=Ar;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(yt=M.toneMapping);const xn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ot=xn!==void 0?xn.length:0,Re=De.get(q),Di=u.state.lights;if(ie===!0&&(ue===!0||E!==S)){const Vn=E===S&&q.id===w;ae.setState(q,E,Vn)}let lt=!1;q.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Di.state.version||Re.outputColorSpace!==we||O.isBatchedMesh&&Re.batching===!1||!O.isBatchedMesh&&Re.batching===!0||O.isBatchedMesh&&Re.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Re.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Re.instancing===!1||!O.isInstancedMesh&&Re.instancing===!0||O.isSkinnedMesh&&Re.skinning===!1||!O.isSkinnedMesh&&Re.skinning===!0||O.isInstancedMesh&&Re.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Re.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Re.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Re.instancingMorph===!1&&O.morphTexture!==null||Re.envMap!==be||q.fog===!0&&Re.fog!==oe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ae.numPlanes||Re.numIntersection!==ae.numIntersection)||Re.vertexAlphas!==Be||Re.vertexTangents!==je||Re.morphTargets!==Ee||Re.morphNormals!==rt||Re.morphColors!==gt||Re.toneMapping!==yt||Re.morphTargetsCount!==ot)&&(lt=!0):(lt=!0,Re.__version=q.version);let ti=Re.currentProgram;lt===!0&&(ti=Yo(q,k,O));let xs=!1,Cn=!1,Pa=!1;const _t=ti.getUniforms(),vi=Re.uniforms;if(Ie.useProgram(ti.program)&&(xs=!0,Cn=!0,Pa=!0),q.id!==w&&(w=q.id,Cn=!0),xs||S!==E){Ie.buffers.depth.getReversed()?(le.copy(E.projectionMatrix),Xb(le),qb(le),_t.setValue(z,"projectionMatrix",le)):_t.setValue(z,"projectionMatrix",E.projectionMatrix),_t.setValue(z,"viewMatrix",E.matrixWorldInverse);const ir=_t.map.cameraPosition;ir!==void 0&&ir.setValue(z,Ce.setFromMatrixPosition(E.matrixWorld)),Ze.logarithmicDepthBuffer&&_t.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&_t.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Cn=!0,Pa=!0)}if(O.isSkinnedMesh){_t.setOptional(z,O,"bindMatrix"),_t.setOptional(z,O,"bindMatrixInverse");const Vn=O.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),_t.setValue(z,"boneTexture",Vn.boneTexture,P))}O.isBatchedMesh&&(_t.setOptional(z,O,"batchingTexture"),_t.setValue(z,"batchingTexture",O._matricesTexture,P),_t.setOptional(z,O,"batchingIdTexture"),_t.setValue(z,"batchingIdTexture",O._indirectTexture,P),_t.setOptional(z,O,"batchingColorTexture"),O._colorsTexture!==null&&_t.setValue(z,"batchingColorTexture",O._colorsTexture,P));const Na=X.morphAttributes;if((Na.position!==void 0||Na.normal!==void 0||Na.color!==void 0)&&ke.update(O,X,ti),(Cn||Re.receiveShadow!==O.receiveShadow)&&(Re.receiveShadow=O.receiveShadow,_t.setValue(z,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(vi.envMap.value=be,vi.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(vi.envMapIntensity.value=k.environmentIntensity),Cn&&(_t.setValue(z,"toneMappingExposure",M.toneMappingExposure),Re.needsLights&&V_(vi,Pa),oe&&q.fog===!0&&fe.refreshFogUniforms(vi,oe),fe.refreshMaterialUniforms(vi,q,D,K,u.state.transmissionRenderTarget[E.id]),oc.upload(z,Xp(Re),vi,P)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(oc.upload(z,Xp(Re),vi,P),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&_t.setValue(z,"center",O.center),_t.setValue(z,"modelViewMatrix",O.modelViewMatrix),_t.setValue(z,"normalMatrix",O.normalMatrix),_t.setValue(z,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Vn=q.uniformsGroups;for(let ir=0,rr=Vn.length;ir<rr;ir++){const $p=Vn[ir];F.update($p,ti),F.bind($p,ti)}}return ti}function V_(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function H_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,k,X){De.get(E.texture).__webglTexture=k,De.get(E.depthTexture).__webglTexture=X;const q=De.get(E);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const X=De.get(E);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,X=0){R=E,T=k,C=X;let q=!0,O=null,oe=!1,me=!1;if(E){const be=De.get(E);if(be.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(z.FRAMEBUFFER,null),q=!1;else if(be.__webglFramebuffer===void 0)P.setupRenderTarget(E);else if(be.__hasExternalTextures)P.rebindTextures(E,De.get(E.texture).__webglTexture,De.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ee=E.depthTexture;if(be.__boundDepthTexture!==Ee){if(Ee!==null&&De.has(Ee)&&(E.width!==Ee.image.width||E.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(E)}}const Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(me=!0);const je=De.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(je[k])?O=je[k][X]:O=je[k],oe=!0):E.samples>0&&P.useMultisampledRTT(E)===!1?O=De.get(E).__webglMultisampledFramebuffer:Array.isArray(je)?O=je[X]:O=je,N.copy(E.viewport),V.copy(E.scissor),j=E.scissorTest}else N.copy(ne).multiplyScalar(D).floor(),V.copy(ce).multiplyScalar(D).floor(),j=Se;if(Ie.bindFramebuffer(z.FRAMEBUFFER,O)&&q&&Ie.drawBuffers(E,O),Ie.viewport(N),Ie.scissor(V),Ie.setScissorTest(j),oe){const be=De.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,be.__webglTexture,X)}else if(me){const be=De.get(E.texture),Be=k||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,be.__webglTexture,X||0,Be)}w=-1},this.readRenderTargetPixels=function(E,k,X,q,O,oe,me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){Ie.bindFramebuffer(z.FRAMEBUFFER,we);try{const be=E.texture,Be=be.format,je=be.type;if(!Ze.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-q&&X>=0&&X<=E.height-O&&z.readPixels(k,X,q,O,He.convert(Be),He.convert(je),oe)}finally{const be=R!==null?De.get(R).__webglFramebuffer:null;Ie.bindFramebuffer(z.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(E,k,X,q,O,oe,me){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){const be=E.texture,Be=be.format,je=be.type;if(!Ze.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-q&&X>=0&&X<=E.height-O){Ie.bindFramebuffer(z.FRAMEBUFFER,we);const Ee=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ee),z.bufferData(z.PIXEL_PACK_BUFFER,oe.byteLength,z.STREAM_READ),z.readPixels(k,X,q,O,He.convert(Be),He.convert(je),0);const rt=R!==null?De.get(R).__webglFramebuffer:null;Ie.bindFramebuffer(z.FRAMEBUFFER,rt);const gt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Wb(z,gt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ee),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,oe),z.deleteBuffer(Ee),z.deleteSync(gt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,X=0){E.isTexture!==!0&&(eo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const q=Math.pow(2,-X),O=Math.floor(E.image.width*q),oe=Math.floor(E.image.height*q),me=k!==null?k.x:0,we=k!==null?k.y:0;P.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,X,0,0,me,we,O,oe),Ie.unbindTexture()},this.copyTextureToTexture=function(E,k,X=null,q=null,O=0){E.isTexture!==!0&&(eo("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,E=arguments[1],k=arguments[2],O=arguments[3]||0,X=null);let oe,me,we,be,Be,je,Ee,rt,gt;const yt=E.isCompressedTexture?E.mipmaps[O]:E.image;X!==null?(oe=X.max.x-X.min.x,me=X.max.y-X.min.y,we=X.isBox3?X.max.z-X.min.z:1,be=X.min.x,Be=X.min.y,je=X.isBox3?X.min.z:0):(oe=yt.width,me=yt.height,we=yt.depth||1,be=0,Be=0,je=0),q!==null?(Ee=q.x,rt=q.y,gt=q.z):(Ee=0,rt=0,gt=0);const xn=He.convert(k.format),ot=He.convert(k.type);let Re;k.isData3DTexture?(P.setTexture3D(k,0),Re=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(P.setTexture2DArray(k,0),Re=z.TEXTURE_2D_ARRAY):(P.setTexture2D(k,0),Re=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);const Di=z.getParameter(z.UNPACK_ROW_LENGTH),lt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ti=z.getParameter(z.UNPACK_SKIP_PIXELS),xs=z.getParameter(z.UNPACK_SKIP_ROWS),Cn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,yt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,yt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,be),z.pixelStorei(z.UNPACK_SKIP_ROWS,Be),z.pixelStorei(z.UNPACK_SKIP_IMAGES,je);const Pa=E.isDataArrayTexture||E.isData3DTexture,_t=k.isDataArrayTexture||k.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const vi=De.get(E),Na=De.get(k),Vn=De.get(vi.__renderTarget),ir=De.get(Na.__renderTarget);Ie.bindFramebuffer(z.READ_FRAMEBUFFER,Vn.__webglFramebuffer),Ie.bindFramebuffer(z.DRAW_FRAMEBUFFER,ir.__webglFramebuffer);for(let rr=0;rr<we;rr++)Pa&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,De.get(E).__webglTexture,O,je+rr),E.isDepthTexture?(_t&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,De.get(k).__webglTexture,O,gt+rr),z.blitFramebuffer(be,Be,oe,me,Ee,rt,oe,me,z.DEPTH_BUFFER_BIT,z.NEAREST)):_t?z.copyTexSubImage3D(Re,O,Ee,rt,gt+rr,be,Be,oe,me):z.copyTexSubImage2D(Re,O,Ee,rt,gt+rr,be,Be,oe,me);Ie.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else _t?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Re,O,Ee,rt,gt,oe,me,we,xn,ot,yt.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(Re,O,Ee,rt,gt,oe,me,we,xn,yt.data):z.texSubImage3D(Re,O,Ee,rt,gt,oe,me,we,xn,ot,yt):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,O,Ee,rt,oe,me,xn,ot,yt.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,O,Ee,rt,yt.width,yt.height,xn,yt.data):z.texSubImage2D(z.TEXTURE_2D,O,Ee,rt,oe,me,xn,ot,yt);z.pixelStorei(z.UNPACK_ROW_LENGTH,Di),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,lt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ti),z.pixelStorei(z.UNPACK_SKIP_ROWS,xs),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Cn),O===0&&k.generateMipmaps&&z.generateMipmap(Re),Ie.unbindTexture()},this.copyTextureToTexture3D=function(E,k,X=null,q=null,O=0){return E.isTexture!==!0&&(eo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,E=arguments[2],k=arguments[3],O=arguments[4]||0),eo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,X,q,O)},this.initRenderTarget=function(E){De.get(E).__webglFramebuffer===void 0&&P.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),Ie.unbindTexture()},this.resetState=function(){T=0,C=0,R=null,Ie.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}class tR extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Ip extends vs{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jc=new U,Vc=new U,lg=new wt,Wa=new Rp,Ll=new Xo,md=new U,cg=new U;class nR extends Zt{constructor(e=new kt,n=new Ip){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)jc.fromBufferAttribute(n,r-1),Vc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=jc.distanceTo(Vc);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ll.copy(i.boundingSphere),Ll.applyMatrix4(r),Ll.radius+=s,e.ray.intersectsSphere(Ll)===!1)return;lg.copy(r).invert(),Wa.copy(e.ray).applyMatrix4(lg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const m=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count);for(let v=m,g=y-1;v<g;v+=c){const u=f.getX(v),x=f.getX(v+1),_=Ul(this,e,Wa,l,u,x);_&&n.push(_)}if(this.isLineLoop){const v=f.getX(y-1),g=f.getX(m),u=Ul(this,e,Wa,l,v,g);u&&n.push(u)}}else{const m=Math.max(0,a.start),y=Math.min(h.count,a.start+a.count);for(let v=m,g=y-1;v<g;v+=c){const u=Ul(this,e,Wa,l,v,v+1);u&&n.push(u)}if(this.isLineLoop){const v=Ul(this,e,Wa,l,y-1,m);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ul(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(jc.fromBufferAttribute(a,r),Vc.fromBufferAttribute(a,s),n.distanceSqToSegment(jc,Vc,md,cg)>i)return;md.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(md);if(!(l<e.near||l>e.far))return{distance:l,point:cg.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const ug=new U,dg=new U;class L_ extends nR{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)ug.fromBufferAttribute(n,r),dg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ug.distanceTo(dg);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class U_ extends vs{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hg=new wt,pf=new Rp,Fl=new Xo,kl=new U;class iR extends Zt{constructor(e=new kt,n=new U_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(r),Fl.radius+=s,e.ray.intersectsSphere(Fl)===!1)return;hg.copy(r).invert(),pf.copy(e.ray).applyMatrix4(hg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let y=h,v=m;y<v;y++){const g=c.getX(y);kl.fromBufferAttribute(p,g),fg(kl,g,l,r,e,n,this)}}else{const h=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let y=h,v=m;y<v;y++)kl.fromBufferAttribute(p,y),fg(kl,y,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function fg(t,e,n,i,r,s,a){const o=pf.distanceSqToPoint(t);if(o<n){const l=new U;pf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class rR extends mn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cu extends kt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),f(),this.setAttribute("position",new Tt(s,3)),this.setAttribute("normal",new Tt(s.slice(),3)),this.setAttribute("uv",new Tt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const _=new U,M=new U,A=new U;for(let T=0;T<n.length;T+=3)m(n[T+0],_),m(n[T+1],M),m(n[T+2],A),l(_,M,A,x)}function l(x,_,M,A){const T=A+1,C=[];for(let R=0;R<=T;R++){C[R]=[];const w=x.clone().lerp(M,R/T),S=_.clone().lerp(M,R/T),N=T-R;for(let V=0;V<=N;V++)V===0&&R===T?C[R][V]=w:C[R][V]=w.clone().lerp(S,V/N)}for(let R=0;R<T;R++)for(let w=0;w<2*(T-R)-1;w++){const S=Math.floor(w/2);w%2===0?(h(C[R][S+1]),h(C[R+1][S]),h(C[R][S])):(h(C[R][S+1]),h(C[R+1][S+1]),h(C[R+1][S]))}}function c(x){const _=new U;for(let M=0;M<s.length;M+=3)_.x=s[M+0],_.y=s[M+1],_.z=s[M+2],_.normalize().multiplyScalar(x),s[M+0]=_.x,s[M+1]=_.y,s[M+2]=_.z}function f(){const x=new U;for(let _=0;_<s.length;_+=3){x.x=s[_+0],x.y=s[_+1],x.z=s[_+2];const M=g(x)/2/Math.PI+.5,A=u(x)/Math.PI+.5;a.push(M,1-A)}y(),p()}function p(){for(let x=0;x<a.length;x+=6){const _=a[x+0],M=a[x+2],A=a[x+4],T=Math.max(_,M,A),C=Math.min(_,M,A);T>.9&&C<.1&&(_<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function h(x){s.push(x.x,x.y,x.z)}function m(x,_){const M=x*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function y(){const x=new U,_=new U,M=new U,A=new U,T=new Fe,C=new Fe,R=new Fe;for(let w=0,S=0;w<s.length;w+=9,S+=6){x.set(s[w+0],s[w+1],s[w+2]),_.set(s[w+3],s[w+4],s[w+5]),M.set(s[w+6],s[w+7],s[w+8]),T.set(a[S+0],a[S+1]),C.set(a[S+2],a[S+3]),R.set(a[S+4],a[S+5]),A.copy(x).add(_).add(M).divideScalar(3);const N=g(A);v(T,S+0,x,N),v(C,S+2,_,N),v(R,S+4,M,N)}}function v(x,_,M,A){A<0&&x.x===1&&(a[_]=x.x-1),M.x===0&&M.z===0&&(a[_]=A/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function u(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.vertices,e.indices,e.radius,e.details)}}class Lp extends cu{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Lp(e.radius,e.detail)}}class Up extends cu{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Up(e.radius,e.detail)}}class Fp extends kt{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],f=[];let p=e;const h=(n-e)/r,m=new U,y=new Fe;for(let v=0;v<=r;v++){for(let g=0;g<=i;g++){const u=s+g/i*a;m.x=p*Math.cos(u),m.y=p*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),y.x=(m.x/n+1)/2,y.y=(m.y/n+1)/2,f.push(y.x,y.y)}p+=h}for(let v=0;v<r;v++){const g=v*(i+1);for(let u=0;u<i;u++){const x=u+g,_=x,M=x+i+1,A=x+i+2,T=x+1;o.push(_,M,T),o.push(M,A,T)}}this.setIndex(o),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class kp extends kt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],p=new U,h=new U,m=[],y=[],v=[],g=[];for(let u=0;u<=i;u++){const x=[],_=u/i;let M=0;u===0&&a===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let A=0;A<=n;A++){const T=A/n;p.x=-e*Math.cos(r+T*s)*Math.sin(a+_*o),p.y=e*Math.cos(a+_*o),p.z=e*Math.sin(r+T*s)*Math.sin(a+_*o),y.push(p.x,p.y,p.z),h.copy(p).normalize(),v.push(h.x,h.y,h.z),g.push(T+M,1-_),x.push(c++)}f.push(x)}for(let u=0;u<i;u++)for(let x=0;x<n;x++){const _=f[u][x+1],M=f[u][x],A=f[u+1][x],T=f[u+1][x+1];(u!==0||a>0)&&m.push(_,M,T),(u!==i-1||l<Math.PI)&&m.push(M,A,T)}this.setIndex(m),this.setAttribute("position",new Tt(y,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Op extends kt{constructor(e=1,n=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],c=[],f=[],p=new U,h=new U,m=new U,y=new U,v=new U,g=new U,u=new U;for(let _=0;_<=i;++_){const M=_/i*s*Math.PI*2;x(M,s,a,e,m),x(M+.01,s,a,e,y),g.subVectors(y,m),u.addVectors(y,m),v.crossVectors(g,u),u.crossVectors(v,g),v.normalize(),u.normalize();for(let A=0;A<=r;++A){const T=A/r*Math.PI*2,C=-n*Math.cos(T),R=n*Math.sin(T);p.x=m.x+(C*u.x+R*v.x),p.y=m.y+(C*u.y+R*v.y),p.z=m.z+(C*u.z+R*v.z),l.push(p.x,p.y,p.z),h.subVectors(p,m).normalize(),c.push(h.x,h.y,h.z),f.push(_/i),f.push(A/r)}}for(let _=1;_<=i;_++)for(let M=1;M<=r;M++){const A=(r+1)*(_-1)+(M-1),T=(r+1)*_+(M-1),C=(r+1)*_+M,R=(r+1)*(_-1)+M;o.push(A,T,R),o.push(T,C,R)}this.setIndex(o),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(f,2));function x(_,M,A,T,C){const R=Math.cos(_),w=Math.sin(_),S=A/M*_,N=Math.cos(S);C.x=T*(2+N)*.5*R,C.y=T*(2+N)*w*.5,C.z=T*Math.sin(S)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Op(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class sR extends kt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,r=new U,s=new U;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,f=l.length;c<f;++c){const p=l[c],h=p.start,m=p.count;for(let y=h,v=h+m;y<v;y+=3)for(let g=0;g<3;g++){const u=o.getX(y+g),x=o.getX(y+(g+1)%3);r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,x),pg(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const f=3*o+c,p=3*o+(c+1)%3;r.fromBufferAttribute(a,f),s.fromBufferAttribute(a,p),pg(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new Tt(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function pg(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}class aR extends Ht{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class mg extends vs{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=g_,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bp extends Zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const gd=new wt,gg=new U,vg=new U;class F_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pp,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;gg.setFromMatrixPosition(e.matrixWorld),n.position.copy(gg),vg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(vg),n.updateMatrixWorld(),gd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xg=new wt,Xa=new U,vd=new U;class oR extends F_{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Xa.setFromMatrixPosition(e.matrixWorld),i.position.copy(Xa),vd.copy(i.position),vd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(vd),i.updateMatrixWorld(),r.makeTranslation(-Xa.x,-Xa.y,-Xa.z),xg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xg)}}class lR extends Bp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new oR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cR extends F_{constructor(){super(new Np(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uR extends Bp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new cR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dR extends Bp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class k_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=yg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function yg(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mp);const O_={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ra{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const hR=new Np(-1,1,1,-1,0,1);class fR extends kt{constructor(){super(),this.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Tt([0,2,0,0,2,0],2))}}const pR=new fR;class zp{constructor(e){this._mesh=new Vt(pR,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,hR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class mR extends Ra{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fo.clone(e.uniforms),this.material=new Ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new zp(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _g extends Ra{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class gR extends Ra{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class vR{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Fe);this._width=i.width,this._height=i.height,n=new Zn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ai}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mR(O_),this.copyPass.material.blending=$i,this.clock=new k_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_g!==void 0&&(a instanceof _g?i=!0:a instanceof gR&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class xR extends Ra{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const yR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Sa extends Ra{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Fe(e.x,e.y):new Fe(256,256),this.clearColor=new Ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Zn(s,a,{type:Ai}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const h=new Zn(s,a,{type:Ai});h.texture.name="UnrealBloomPass.h"+p,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const m=new Zn(s,a,{type:Ai});m.texture.name="UnrealBloomPass.v"+p,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),a=Math.round(a/2)}const o=yR;this.highPassUniforms=Fo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ht({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new Fe(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=O_;this.copyUniforms=Fo.clone(f.uniforms),this.blendMaterial=new Ht({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:fn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ne,this.oldClearAlpha=1,this.basic=new yr,this.fsQuad=new zp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Fe(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Sa.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Sa.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ht({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Fe(.5,.5)},direction:{value:new Fe(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Sa.BlurDirectionX=new Fe(1,0);Sa.BlurDirectionY=new Fe(0,1);const _R={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class MR extends Ra{constructor(){super();const e=_R;this.uniforms=Fo.clone(e.uniforms),this.material=new aR({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new zp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===e_?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===t_?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===n_?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Sp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===i_?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===r_&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const SR=`
varying vec2 vUv;
void main() {
  vUv = uv;
  // Fullscreen quad at z = -10 (behind all 3D content, edge-to-edge NDC)
  gl_Position = vec4(position.xy, 0.9999, 1.0);
}
`,wR=`
uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform int uMode; // 0=solid, 1=gradient, 2=nebula, 3=synthwaveGrid, 4=tunnel, 5=aurora, 6=matrixRain, 7=retroCRT
uniform float uBass;
uniform float uMid;
uniform float uTreble;
uniform float uGrainIntensity;
uniform float uVignetteStrength;
uniform float uGradientAngle;
uniform float uShowStars; // 0.0 or 1.0
uniform float uStarDensity; // 0.1 to 1.0
uniform float uStarSpeed; // 0.1 to 3.0
uniform float uSeed; // Unique procedural random seed
uniform float uGridDensity; // 10.0 to 60.0
uniform float uScanlineIntensity; // 0.0 to 1.0
varying vec2 vUv;

// Pseudo-random noise for film grain & stardust
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// High-frequency triangular dither to guarantee zero 8-bit/OLED color banding
float getDither(vec2 coord) {
  return (fract(sin(dot(coord, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 128.0;
}

// Sub-pixel, aspect-ratio corrected, seedable micro-starfield
float getStardust(vec2 uv, float time, float treble, float aspect, float seed, float density, float speed) {
  float gridSize = 100.0 * max(0.2, density);
  vec2 p = vec2(uv.x * gridSize * max(1.0, aspect), uv.y * gridSize * max(1.0, 1.0 / aspect));
  vec2 id = floor(p);
  vec2 f = fract(p) - 0.5;

  // Seedable pseudo-random hash
  float h = fract(sin(dot(id + vec2(seed * 17.13, seed * 31.41), vec2(127.1, 311.7))) * 43758.5453123);

  if (h > 0.93) {
    float dist = length(f);
    // Smooth Gaussian sub-pixel circular glint
    float glint = exp(-dist * dist * 42.0);
    float twinkle = sin(time * speed * (2.2 + h * 3.8) + h * 6.28) * 0.5 + 0.5;
    return glint * (0.35 + 0.65 * twinkle) * (1.0 + treble * 1.2);
  }
  return 0.0;
}

// 2D Simplex/Perlin Noise approximation
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / max(1.0, uResolution.y);
  vec3 finalColor = uColorA;

  // Aspect-corrected radial coordinates from screen center
  vec2 radialCoord = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);
  float centerDist = length(radialCoord);

  if (uMode == 0) {
    // 0: Minimal Solid Studio (Clean obsidian, audio-reactive soft backlight, zero noise)
    float radial = exp(-centerDist * centerDist * 3.2);
    finalColor = mix(uColorA, uColorB * 0.42, radial * (0.35 + uBass * 0.4));
  } else if (uMode == 1) {
    // 1: Directional Studio Gradient (Linear gradient with angle and audio modulation)
    float rad = radians(uGradientAngle);
    vec2 dir = vec2(cos(rad), sin(rad));
    float t = dot(uv - 0.5, dir) + 0.5;
    t = clamp(t, 0.0, 1.0);
    // Subtle audio wave modulation
    t += sin(t * 6.28 + uTime * 1.5) * 0.03 * (uMid + uBass);
    t = clamp(t, 0.0, 1.0);
    finalColor = mix(uColorA, uColorB, t);
    finalColor += uColorC * (0.06 + uBass * 0.09) * (1.0 - t);
  } else if (uMode == 2) {
    // 2: Animated Cosmic Deep Nebula (Multi-octave fluid space plasma)
    vec2 p = vec2(radialCoord.x * 2.8, radialCoord.y * 2.8) + vec2(sin(uSeed), cos(uSeed * 1.3));
    float t = uTime * 0.22;
    float n1 = snoise(p + vec2(t * 0.35, -t * 0.25));
    float n2 = snoise(p * 2.2 - vec2(t * 0.45, t * 0.35) + vec2(n1 * 1.5));
    float n3 = snoise(p * 4.4 + vec2(n2 * 0.7, -t * 0.25));
    float nebula = clamp(n1 * 0.45 + n2 * 0.35 + n3 * 0.2 + 0.5, 0.0, 1.0);

    // Audio-reactive central plasma flare
    nebula += (uBass * 0.45 + uMid * 0.25) * (1.0 - smoothstep(0.0, 0.75, centerDist));

    finalColor = mix(uColorA, uColorB, nebula);
    finalColor += uColorC * pow(nebula, 2.6) * (0.9 + uMid * 0.9);
  } else if (uMode == 3) {
    // 3: Retro Synthwave Cyber Grid (Outrun perspective floor grid & raster sun)
    vec2 p = uv;
    p.y = 1.0 - p.y;
    if (p.y > 0.485) {
      // Sky gradient with horizon glow
      float skyT = (p.y - 0.485) * 1.94;
      finalColor = mix(uColorB * 0.45, uColorA, skyT);

      // Retro Sun (aspect-corrected circular raster)
      vec2 sunUv = vec2((p.x - 0.5) * aspect, (p.y - 0.52) * 1.7);
      float sunDist = length(sunUv);
      if (sunDist < 0.28) {
        float sunIntensity = smoothstep(0.28, 0.04, sunDist);
        float raster = step(0.3, fract(p.y * 36.0 + uTime * 0.5));
        finalColor += uColorC * sunIntensity * raster * (1.0 + uBass * 0.6);
      }
    } else {
      // Perspective Floor Grid with depth antialiasing
      float depth = 1.0 / max(0.001, (0.49 - p.y));
      float density = max(12.0, uGridDensity);
      vec2 gridUv = vec2((p.x - 0.5) * depth * (density * 0.018) * aspect, depth * 0.16 + uTime * (1.2 + uBass * 1.4));
      vec2 grid = abs(fract(gridUv - 0.5) - 0.5) / fwidth(gridUv);
      float line = min(grid.x, grid.y);
      float gridIntensity = 1.0 - min(line, 1.0);
      float fade = smoothstep(0.485, 0.0, p.y);

      finalColor = mix(uColorA, uColorB * 1.35, gridIntensity * fade * (0.85 + uTreble * 0.85));
    }
  } else if (uMode == 4) {
    // 4: Hypnotic Warp Tunnel (Infinite perspective cyber tunnel & neon vortex)
    vec2 p = radialCoord;
    float r = length(p);
    float theta = atan(p.y, p.x);
    float tunnelDepth = 1.0 / max(0.02, r);
    float speed = uTime * (1.6 + uBass * 2.2);

    float rings = sin(tunnelDepth * 2.6 - speed * 4.0) * 0.5 + 0.5;
    float spirals = sin(theta * 6.0 + tunnelDepth * 1.2 - speed * 2.0) * 0.5 + 0.5;
    float tunnelPattern = smoothstep(0.32, 0.95, rings * 0.6 + spirals * 0.55);
    float depthFade = clamp(r * 2.2, 0.0, 1.0);

    finalColor = mix(uColorA, uColorB * 1.5, tunnelPattern * depthFade * (0.8 + uTreble * 0.8));
    finalColor += uColorC * (1.0 - depthFade) * (0.45 + uBass * 0.65); // Central light flare
  } else if (uMode == 5) {
    // 5: Liquid Aurora Waves (Flowing organic iridescent ribbons)
    vec2 p = uv;
    float wave1 = sin(p.x * 4.5 + uTime * 1.3 + uSeed) * 0.12 * (1.0 + uBass * 0.5);
    float wave2 = cos(p.x * 7.5 - uTime * 0.85 + uSeed * 1.7) * 0.08 * (1.0 + uMid * 0.6);
    float wave3 = sin(p.x * 12.0 + uTime * 1.6) * 0.04 * (1.0 + uTreble * 0.8);
    float auroraY = p.y + wave1 + wave2 + wave3;

    float band1 = exp(-pow((auroraY - 0.45) * 4.2, 2.0));
    float band2 = exp(-pow((auroraY - 0.62) * 5.0, 2.0));
    float band3 = exp(-pow((auroraY - 0.28) * 4.8, 2.0));

    finalColor = uColorA;
    finalColor += uColorB * band1 * (1.0 + uBass * 0.7);
    finalColor += uColorC * band2 * (1.1 + uMid * 0.8);
    finalColor += mix(uColorB, uColorC, 0.5) * band3 * 0.6;
  } else if (uMode == 6) {
    // 6: Cyber Matrix Rain (Cascading digital data streams & code sparkles)
    float cols = max(24.0, uGridDensity * 1.1);
    vec2 gridUv = vec2(uv.x * cols, uv.y);
    float colId = floor(gridUv.x) + uSeed * 37.0;

    float colHash = fract(sin(colId * 78.233) * 43758.5453);
    float colSpeed = 0.9 + colHash * 1.5 + uBass * 1.2;
    float streamY = fract(gridUv.y * 3.5 - uTime * colSpeed);
    float trail = pow(1.0 - streamY, 3.5);
    float dropHead = smoothstep(0.06, 0.0, streamY);
    float code = step(0.35, fract(sin(dot(floor(vec2(gridUv.x, uv.y * 55.0)), vec2(12.9898, 78.233))) * 43758.5453));

    float streamIntensity = (trail * 0.7 + dropHead * 1.6) * code * (0.8 + uTreble * 0.9);
    finalColor = mix(uColorA, uColorB * 1.6, streamIntensity);
    finalColor += uColorC * dropHead * streamIntensity * 1.3;
  } else if (uMode == 7) {
    // 7: Analog VHS / CRT Studio (Screen curvature, phosphor scanlines, subtle tape glow)
    vec2 crtUv = uv * 2.0 - 1.0;
    crtUv += crtUv * dot(crtUv, crtUv) * 0.035;
    vec2 normCrt = crtUv * 0.5 + 0.5;

    float scanlines = sin(normCrt.y * uResolution.y * 1.2) * 0.5 + 0.5;
    float scanIntensity = mix(1.0, 0.65 + scanlines * 0.35, max(0.1, uScanlineIntensity));

    finalColor = mix(uColorA, uColorB * 0.35, centerDist * 0.55);
    finalColor *= scanIntensity;
    finalColor += uColorC * (0.04 + uBass * 0.07);
  }

  // 1. Audio-reactive ambient backlight / atmosphere breathing
  float ambientPulse = exp(-centerDist * centerDist * 3.0);
  finalColor += uColorB * ambientPulse * (0.15 + uBass * 0.25);

  // 2. Procedural twinkling micro-stardust (ONLY if enabled by showStars toggle)
  if (uShowStars > 0.5) {
    float stars = getStardust(uv, uTime, uTreble, aspect, uSeed, uStarDensity, uStarSpeed);
    finalColor += vec3(stars) * mix(vec3(1.0), uColorC, 0.55);
  }

  // 3. Smooth non-destructive vignette (gentle corner falloff, never cuts off sides)
  vec2 vigCoord = vec2((uv.x - 0.5) * min(1.0, aspect * 1.4), (uv.y - 0.5) * min(1.0, (1.0 / aspect) * 1.4));
  float vigDist = length(vigCoord);
  float vignette = 1.0 - smoothstep(0.45, 0.95, vigDist) * (uVignetteStrength * 0.7);
  finalColor *= clamp(vignette, 0.1, 1.0);

  // 4. Subtle cinematic film grain noise
  if (uGrainIntensity > 0.001) {
    float grain = (random(uv + vec2(uTime * 8.0, -uTime * 6.0)) - 0.5) * uGrainIntensity * 0.25;
    finalColor += vec3(grain);
  }

  // 5. High-frequency triangular dither to guarantee ZERO banding on OLED / 8-bit screens
  finalColor += vec3(getDither(gl_FragCoord.xy));

  gl_FragColor = vec4(clamp(finalColor, 0.0, 1.0), 1.0);
}
`;class bR{constructor(e){Q(this,"config");Q(this,"group");Q(this,"quadMesh",null);Q(this,"material",null);Q(this,"geometry",null);this.config=e,this.group=new hi}getModeIndex(e){switch(e){case"solid":return 0;case"gradient":return 1;case"animatedNebula":return 2;case"synthwaveGrid":return 3;case"hypnoticTunnel":return 4;case"liquidAurora":return 5;case"digitalRain":return 6;case"retroCRT":return 7;default:return 1}}init(e){this.geometry=new qo(2,2);const n=this.getModeIndex(this.config.mode);this.material=new Ht({vertexShader:SR,fragmentShader:wR,uniforms:{uResolution:{value:new Fe(e.width,e.height)},uTime:{value:0},uColorA:{value:new Ne(this.config.primaryColor)},uColorB:{value:new Ne(this.config.secondaryColor)},uColorC:{value:new Ne(this.config.accentColor||"#ff007f")},uMode:{value:n},uBass:{value:0},uMid:{value:0},uTreble:{value:0},uGrainIntensity:{value:this.config.grainIntensity??.2},uVignetteStrength:{value:this.config.vignetteStrength??.45},uGradientAngle:{value:this.config.gradientAngle??45},uShowStars:{value:this.config.showStars?1:0},uStarDensity:{value:this.config.starDensity??.35},uStarSpeed:{value:this.config.starSpeed??1},uSeed:{value:this.config.seed??42},uGridDensity:{value:this.config.gridDensity??32},uScanlineIntensity:{value:this.config.scanlineIntensity??.45}},depthWrite:!1,depthTest:!1}),this.quadMesh=new Vt(this.geometry,this.material),this.quadMesh.renderOrder=-1e3,this.group.add(this.quadMesh),e.scene.add(this.group)}update(e,n,i){var o,l,c,f;if(!this.material||!this.config.enabled)return;const r=this.material.uniforms,s=this.config.animationSpeed??1;r.uTime.value=i*s;const a=this.config.reactivityIntensity??1;if(r.uBass.value=(((o=e.bands)==null?void 0:o.bass)||0)*a,r.uMid.value=(((l=e.bands)==null?void 0:l.mid)||0)*a,r.uTreble.value=(((c=e.bands)==null?void 0:c.treble)||0)*a,this.config.audioReactiveZoom>0&&this.quadMesh){const p=1+(((f=e.bands)==null?void 0:f.bass)||0)*this.config.audioReactiveZoom*.1;this.quadMesh.scale.set(p,p,1)}}resize(e,n,i){this.material&&this.material.uniforms.uResolution.value.set(e*i,n*i)}updateConfig(e){if(this.config={...this.config,...e},this.material){const n=this.material.uniforms;n.uColorA.value.set(this.config.primaryColor),n.uColorB.value.set(this.config.secondaryColor),n.uColorC.value.set(this.config.accentColor||"#ff007f"),n.uMode.value=this.getModeIndex(this.config.mode),n.uGrainIntensity.value=this.config.grainIntensity??.2,n.uVignetteStrength.value=this.config.vignetteStrength??.45,n.uGradientAngle.value=this.config.gradientAngle??45,n.uShowStars.value=this.config.showStars?1:0,n.uStarDensity.value=this.config.starDensity??.35,n.uStarSpeed.value=this.config.starSpeed??1,n.uSeed.value=this.config.seed??42,n.uGridDensity.value=this.config.gridDensity??32,n.uScanlineIntensity.value=this.config.scanlineIntensity??.45}this.group.visible=this.config.enabled??!0}dispose(){this.quadMesh&&(this.group.remove(this.quadMesh),this.quadMesh=null),this.geometry&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null),this.group.parent&&this.group.parent.remove(this.group)}}class ER{constructor(e){Q(this,"config");Q(this,"group");Q(this,"mesh",null);Q(this,"wireframeMesh",null);Q(this,"geometry",null);Q(this,"originalPositions",null);Q(this,"normals",null);this.config=e,this.group=new hi}init(e){this.rebuildMesh(),this.applyTransform(),e.scene.add(this.group)}rebuildMesh(){this.mesh&&(this.group.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh=null),this.wireframeMesh&&(this.group.remove(this.wireframeMesh),this.wireframeMesh.geometry.dispose(),this.wireframeMesh.material.dispose(),this.wireframeMesh=null);let e;const n=this.config.shape,i=Math.min(4,Math.max(0,this.config.subdivisions));n==="icosahedron"||n==="morphingGeosphere"?e=new Up(2,i+1):n==="torusKnot"?e=new Op(1.6,.45,100,16):n==="dodecahedron"?e=new Lp(2,i):n==="cyberCube"?e=new Ki(2.6,2.6,2.6,i+2,i+2,i+2):e=new kp(2,32,32),e.computeVertexNormals(),this.geometry=e;const r=e.getAttribute("position");this.originalPositions=new Float32Array(r.array);const s=e.getAttribute("normal");this.normals=new Float32Array(s.array);const a=new Ne(this.config.primaryColor),o=new Ne(this.config.accentColor);let l;if(this.config.shadingStyle==="wireframe"?l=new yr({color:a,wireframe:!0,transparent:!0,opacity:this.config.opacity,blending:this.config.blendMode==="additive"?fn:Fn}):this.config.shadingStyle==="faceted"?l=new mg({color:a,roughness:this.config.metallicRoughness,metalness:.5,flatShading:!0,transparent:!0,opacity:this.config.opacity,emissive:o,emissiveIntensity:this.config.glowIntensity*.3}):l=new mg({color:a,roughness:.2,metalness:.85,transparent:!0,opacity:this.config.opacity,emissive:o,emissiveIntensity:.2+this.config.glowIntensity*.4}),this.mesh=new Vt(this.geometry,l),this.group.add(this.mesh),this.config.shadingStyle!=="wireframe"){const c=new sR(this.geometry),f=new Ip({color:o,transparent:!0,opacity:this.config.opacity*.35,blending:fn});this.wireframeMesh=new L_(c,f),this.group.add(this.wireframeMesh)}}applyTransform(){const[e,n,i]=this.config.transform.position,[r,s,a]=this.config.transform.rotation,[o,l,c]=this.config.transform.scale;this.group.position.set(e,n,i),this.group.rotation.set(r,s,a),this.group.scale.set(o,l,c),this.group.visible=this.config.enabled}update(e,n,i){if(!this.geometry||!this.mesh||!this.config.enabled)return;const[r,s,a]=this.config.rotationSpeed,o=1+e.bands.mid*1.5;this.mesh.rotation.x+=r*n*o,this.mesh.rotation.y+=s*n*o,this.mesh.rotation.z+=a*n*o,this.wireframeMesh&&this.wireframeMesh.rotation.copy(this.mesh.rotation);const c=1+e.bands.bass*this.config.pulseIntensity*.45,[f,p,h]=this.config.transform.scale;if(this.group.scale.set(f*c,p*c,h*c),this.originalPositions&&this.normals&&this.config.noiseDistortion>0){let m=0;this.config.distortionBand==="bass"?m=e.bands.bass:this.config.distortionBand==="mid"?m=e.bands.mid:this.config.distortionBand==="treble"?m=e.bands.treble:m=e.rms;const y=this.config.noiseDistortion*m*.8,v=this.geometry.getAttribute("position"),g=v.array,u=this.originalPositions,x=this.normals,_=u.length/3;for(let M=0;M<_;M++){const A=u[M*3],T=u[M*3+1],C=u[M*3+2],R=x[M*3],w=x[M*3+1],S=x[M*3+2],V=Math.sin(A*2.5+i*3)*Math.cos(T*2.5+i*2.5)*Math.sin(C*2.5+i*2)*y;g[M*3]=A+R*V,g[M*3+1]=T+w*V,g[M*3+2]=C+S*V}v.needsUpdate=!0,this.geometry.computeVertexNormals()}}resize(e,n,i){}updateConfig(e){const n=e.shape&&e.shape!==this.config.shape,i=e.shadingStyle&&e.shadingStyle!==this.config.shadingStyle,r=e.subdivisions!==void 0&&e.subdivisions!==this.config.subdivisions;if(this.config={...this.config,...e},this.applyTransform(),n||i||r)this.rebuildMesh();else if(this.mesh){const s=this.mesh.material;s.color&&s.color.set(this.config.primaryColor),s.emissive&&s.emissive.set(this.config.accentColor),s.opacity=this.config.opacity,s.needsUpdate=!0}}dispose(){this.mesh&&(this.group.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh=null),this.wireframeMesh&&(this.group.remove(this.wireframeMesh),this.wireframeMesh.geometry.dispose(),this.wireframeMesh.material.dispose(),this.wireframeMesh=null),this.group.parent&&this.group.parent.remove(this.group)}}class TR{constructor(e){Q(this,"config");Q(this,"group");Q(this,"points",null);Q(this,"geometry",null);Q(this,"material",null);Q(this,"particleTexture",null);Q(this,"positions",new Float32Array(0));Q(this,"colors",new Float32Array(0));Q(this,"particleState",[]);Q(this,"linesMesh",null);Q(this,"linesGeometry",null);Q(this,"linesMaterial",null);Q(this,"linePositions",new Float32Array(2e3*6));this.config=e,this.group=new hi}init(e){this.createPointTexture(),this.rebuildParticles(),this.applyTransform(),e.scene.add(this.group)}createPointTexture(){if(this.particleTexture)return;const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d"),i=n.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.35,"rgba(255, 255, 255, 0.85)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=i,n.fillRect(0,0,64,64),this.particleTexture=new rR(e)}rebuildParticles(){this.points&&(this.group.remove(this.points),this.points=null),this.geometry&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null),this.linesMesh&&(this.group.remove(this.linesMesh),this.linesMesh=null),this.linesGeometry&&(this.linesGeometry.dispose(),this.linesGeometry=null),this.linesMaterial&&(this.linesMaterial.dispose(),this.linesMaterial=null);const e=Math.max(10,Math.min(1e4,this.config.count||1e3));this.positions=new Float32Array(e*3),this.colors=new Float32Array(e*3),this.particleState=[];const n=new Ne(this.config.color||"#00f0ff"),i=new Ne(this.config.secondaryColor||"#ff007f"),r=Math.max(.5,this.config.dispersion||4.5);for(let s=0;s<e;s++){const a=Math.random()*Math.PI*2,o=Math.acos(Math.random()*2-1),l=Math.pow(Math.random(),.5)*r,c=l*Math.sin(o)*Math.cos(a),f=l*Math.sin(o)*Math.sin(a),p=l*Math.cos(o);this.positions[s*3]=c,this.positions[s*3+1]=f,this.positions[s*3+2]=p;const h=Math.random(),m=n.clone().lerp(i,h);this.colors[s*3]=m.r,this.colors[s*3+1]=m.g,this.colors[s*3+2]=m.b,this.particleState.push({ox:c,oy:f,oz:p,vx:(Math.random()-.5)*.1,vy:(Math.random()-.5)*.1,vz:(Math.random()-.5)*.1})}this.geometry=new kt,this.geometry.setAttribute("position",new ft(this.positions,3)),this.geometry.setAttribute("color",new ft(this.colors,3)),this.material=new U_({size:(this.config.size||1.2)*.08,vertexColors:!0,map:this.particleTexture||void 0,transparent:!0,opacity:this.config.opacity??.85,blending:this.config.blendMode==="additive"?fn:Fn,depthWrite:!1}),this.points=new iR(this.geometry,this.material),this.group.add(this.points),this.config.connectLines&&(this.linePositions=new Float32Array(2e3*6),this.linesGeometry=new kt,this.linesGeometry.setAttribute("position",new ft(this.linePositions,3)),this.linesMaterial=new Ip({color:new Ne(this.config.color||"#00f0ff"),transparent:!0,opacity:this.config.connectionOpacity??.3,blending:fn,depthWrite:!1}),this.linesMesh=new L_(this.linesGeometry,this.linesMaterial),this.group.add(this.linesMesh))}applyTransform(){var f,p,h;const[e,n,i]=((f=this.config.transform)==null?void 0:f.position)||[0,0,0],[r,s,a]=((p=this.config.transform)==null?void 0:p.rotation)||[0,0,0],[o,l,c]=((h=this.config.transform)==null?void 0:h.scale)||[1,1,1];this.group.position.set(e,n,i),this.group.rotation.set(r,s,a),this.group.scale.set(o,l,c),this.group.visible=this.config.enabled??!0}update(e,n,i){var p,h,m,y;if(!this.geometry||!this.config.enabled)return;const r=Math.min(this.config.count||1e3,this.particleState.length,Math.floor(this.positions.length/3));if(r===0)return;const s=this.positions;(p=e.bands)!=null&&p.bass;const a=((h=e.bands)==null?void 0:h.treble)||0,o=((m=e.beat)==null?void 0:m.isBeat)||!1,l=((y=e.beat)==null?void 0:y.beatIntensity)||0,c=(this.config.speed||1)*(.8+(e.rms||0)*1.5),f=o?l*(this.config.beatExplosionForce||3.5)*4:0;this.material&&(this.material.size=(this.config.size||1.2)*.08*(1+a*(this.config.trebleTwinkle||1.5)*.6));for(let v=0;v<r;v++){const g=this.particleState[v];if(!g)continue;let u=s[v*3],x=s[v*3+1],_=s[v*3+2];if((!Number.isFinite(u)||!Number.isFinite(x)||!Number.isFinite(_))&&(u=g.ox,x=g.oy,_=g.oz),this.config.behavior==="ambientVortex"){const M=c*n*1.5,A=Math.cos(M),T=Math.sin(M),C=u*A-x*T,R=u*T+x*A;u=C,x=R,_+=Math.sin(i*2+v)*n*c*.5}else if(this.config.behavior==="radialExplosion"){const M=Math.sqrt(u*u+x*x+_*_)||1,A=u/M,T=x/M,C=_/M;f>0&&(g.vx+=A*f*.35,g.vy+=T*f*.35,g.vz+=C*f*.35),u+=g.vx*n,x+=g.vy*n,_+=g.vz*n,g.vx=g.vx*.92+(g.ox-u)*.05,g.vy=g.vy*.92+(g.oy-x)*.05,g.vz=g.vz*.92+(g.oz-_)*.05}else{u+=Math.sin(x*.5+i*c)*n*.8,x+=Math.cos(u*.5+i*c)*n*.8,_+=Math.sin(i*c+v)*n*.4;const M=(this.config.dispersion||4.5)*1.5;u>M&&(u=-M),u<-M&&(u=M),x>M&&(x=-M),x<-M&&(x=M)}s[v*3]=u,s[v*3+1]=x,s[v*3+2]=_}if(this.geometry.attributes.position.needsUpdate=!0,this.config.connectLines&&this.linesGeometry&&this.linesMesh){let v=0;const g=1e3,u=this.config.connectionDistance||.8,x=u*u,_=Math.max(1,Math.floor(r/150));for(let M=0;M<r;M+=_){const A=s[M*3],T=s[M*3+1],C=s[M*3+2];for(let R=M+_;R<r;R+=_){const w=s[R*3],S=s[R*3+1],N=s[R*3+2],V=w-A,j=S-T,I=N-C;V*V+j*j+I*I<x&&v<g*6&&(this.linePositions[v++]=A,this.linePositions[v++]=T,this.linePositions[v++]=C,this.linePositions[v++]=w,this.linePositions[v++]=S,this.linePositions[v++]=N)}}this.linesGeometry.setDrawRange(0,v/3),this.linesGeometry.attributes.position.needsUpdate=!0}}resize(e,n,i){}updateConfig(e){const n=e.count!==void 0&&e.count!==this.config.count,i=e.connectLines!==void 0&&e.connectLines!==this.config.connectLines,r=e.color&&e.color!==this.config.color||e.secondaryColor&&e.secondaryColor!==this.config.secondaryColor;this.config={...this.config,...e},this.applyTransform(),n||i||r?this.rebuildParticles():this.material&&(this.material.opacity=this.config.opacity??.85,this.material.size=(this.config.size||1.2)*.08,this.material.blending=this.config.blendMode==="additive"?fn:Fn,this.material.needsUpdate=!0)}dispose(){this.points&&(this.group.remove(this.points),this.points=null),this.geometry&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null),this.linesMesh&&(this.group.remove(this.linesMesh),this.linesMesh=null),this.linesGeometry&&(this.linesGeometry.dispose(),this.linesGeometry=null),this.linesMaterial&&(this.linesMaterial.dispose(),this.linesMaterial=null),this.particleTexture&&(this.particleTexture.dispose(),this.particleTexture=null),this.group.parent&&this.group.parent.remove(this.group)}}class CR{constructor(e){Q(this,"config");Q(this,"group");Q(this,"barsGroup");Q(this,"peakMarkersGroup");Q(this,"barMeshes",[]);Q(this,"peakMeshes",[]);Q(this,"peakValues",[]);Q(this,"barMaterial",null);Q(this,"peakMaterial",null);Q(this,"currentAspect",16/9);this.config=e,this.group=new hi,this.barsGroup=new hi,this.peakMarkersGroup=new hi,this.group.add(this.barsGroup),this.group.add(this.peakMarkersGroup)}init(e){this.currentAspect=e.width/(e.height||1),this.rebuildMeshes(),this.applyTransform(),e.scene.add(this.group)}resize(e,n,i){const r=e/(n||1);Math.abs(r-this.currentAspect)>.05&&(this.currentAspect=r,this.rebuildMeshes())}rebuildMeshes(){for(const s of this.barMeshes)this.barsGroup.remove(s),s.geometry.dispose();for(const s of this.peakMeshes)this.peakMarkersGroup.remove(s),s.geometry.dispose();this.barMeshes=[],this.peakMeshes=[],this.peakValues=[];const e=this.config.barCount;this.peakValues=new Array(e).fill(0);const n=new Ne(this.config.primaryColor),i=new Ne(this.config.secondaryColor),r=this.currentAspect||16/9;if(this.config.mode==="verticalBars"){let s=8;r<.8?s=4.2:r<1.3&&(s=6.4);const a=s/e,o=a*this.config.barWidth;for(let l=0;l<e;l++){const c=l/(e-1||1),f=n.clone().lerp(i,c),p=new Ki(o,1,.1);p.translate(0,.5,0);const h=new yr({color:f,transparent:!0,opacity:this.config.opacity,blending:this.config.blendMode==="additive"?fn:Fn}),m=new Vt(p,h),y=-s/2+l*a+a/2;m.position.set(y,0,0),this.barsGroup.add(m),this.barMeshes.push(m);const v=new Ki(o,.06,.1),g=new yr({color:i,transparent:!0,opacity:this.config.opacity*.9}),u=new Vt(v,g);u.position.set(y,0,0),u.visible=this.config.showPeaks,this.peakMarkersGroup.add(u),this.peakMeshes.push(u)}}else if(this.config.mode==="circularRadial"){const s=r<.8?Math.min(this.config.innerRadius,1.2):this.config.innerRadius,a=.08;for(let o=0;o<e;o++){const l=o/e*Math.PI*2,c=Math.abs(Math.sin(l)),f=n.clone().lerp(i,c),p=new Ki(a,1,.08);p.translate(0,.5,0);const h=new yr({color:f,transparent:!0,opacity:this.config.opacity,blending:this.config.blendMode==="additive"?fn:Fn}),m=new Vt(p,h);m.position.set(Math.cos(l)*s,Math.sin(l)*s,0),m.rotation.z=l-Math.PI/2,this.barsGroup.add(m),this.barMeshes.push(m)}}else if(this.config.mode==="radialRings"){const s=Math.min(16,e);for(let a=0;a<s;a++){const o=a/(s-1||1),l=n.clone().lerp(i,o),c=new Fp(.8+a*.25,.85+a*.25,64),f=new yr({color:l,side:Ln,transparent:!0,opacity:this.config.opacity,blending:this.config.blendMode==="additive"?fn:Fn}),p=new Vt(c,f);this.barsGroup.add(p),this.barMeshes.push(p)}}}applyTransform(){const[e,n,i]=this.config.transform.position,[r,s,a]=this.config.transform.rotation,[o,l,c]=this.config.transform.scale;this.group.position.set(e,n,i),this.group.rotation.set(r,s,a),this.group.scale.set(o,l,c),this.group.visible=this.config.enabled}update(e,n,i){if(!this.config.enabled)return;const r=e.spectrum,s=this.barMeshes.length;if(s===0)return;const a=this.config.maxHeight,o=r.length;this.config.mode==="circularRadial"&&(this.barsGroup.rotation.z+=n*.2*(1+e.bands.bass*.5));for(let l=0;l<s;l++){let c=0;if(this.config.logarithmicScale){const m=Math.floor(Math.pow(l/s,2)*(o-1));c=r[m]||0}else{const m=Math.floor(l/s*(o*.8));c=r[m]||0}const f=1+l/s*1.8;c=Math.min(1,c*f);const p=Math.max(.04,c*a),h=this.barMeshes[l];if(this.config.mode==="verticalBars"){if(h.scale.set(1,p,1),this.config.showPeaks&&this.peakMeshes[l]){const m=this.peakMeshes[l];p>=this.peakValues[l]?this.peakValues[l]=p:this.peakValues[l]=Math.max(.04,this.peakValues[l]-n*this.config.peakDecaySpeed*2.5),m.position.y=this.peakValues[l]+.04,m.visible=!0}}else if(this.config.mode==="circularRadial")h.scale.set(1,p,1);else if(this.config.mode==="radialRings"){const m=1+c*.4;h.scale.set(m,m,1)}}}updateConfig(e){const n=e.mode&&e.mode!==this.config.mode,i=e.barCount&&e.barCount!==this.config.barCount;if(this.config={...this.config,...e},this.applyTransform(),n||i)this.rebuildMeshes();else{const r=new Ne(this.config.primaryColor),s=new Ne(this.config.secondaryColor);for(let a=0;a<this.barMeshes.length;a++){const o=this.barMeshes[a],l=a/(this.barMeshes.length-1||1),c=r.clone().lerp(s,l),f=o.material;f.color=c,f.opacity=this.config.opacity,f.blending=this.config.blendMode==="additive"?fn:Fn,f.needsUpdate=!0}}}dispose(){for(const e of this.barMeshes)this.barsGroup.remove(e),e.geometry.dispose(),e.material.dispose();for(const e of this.peakMeshes)this.peakMarkersGroup.remove(e),e.geometry.dispose(),e.material.dispose();this.barMeshes=[],this.peakMeshes=[],this.group.parent&&this.group.parent.remove(this.group)}}const xd=`
attribute vec3 aColor;
attribute float aVCoord; // -1.0 (bottom) to +1.0 (top)
varying vec3 vColor;
varying float vVCoord;
varying vec2 vUv;

void main() {
  vColor = aColor;
  vVCoord = aVCoord;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,AR=`
uniform float uOpacity;
uniform float uGlowIntensity;
varying vec3 vColor;
varying float vVCoord;
varying vec2 vUv;

void main() {
  float distFromCenter = abs(vVCoord); // 0.0 at center, 1.0 at edge
  
  // 1. Ultra-bright neon/white core in the center of the ribbon
  float coreIntensity = exp(-distFromCenter * distFromCenter * 14.0);
  vec3 coreColor = mix(vColor, vec3(1.0), coreIntensity * 0.85);

  // 2. Smooth exponential luminous falloff toward outer edges (antialiasing)
  float alphaFalloff = exp(-distFromCenter * distFromCenter * 3.2);
  alphaFalloff *= smoothstep(1.0, 0.75, distFromCenter);

  // 3. Boost overall radiance with glow intensity
  vec3 finalColor = coreColor * (1.0 + uGlowIntensity * 0.6);
  float finalAlpha = alphaFalloff * uOpacity;

  gl_FragColor = vec4(finalColor, finalAlpha);
}
`,Mg=`
uniform float uOpacity;
varying vec3 vColor;
varying float vVCoord;

void main() {
  float distFromCenter = abs(vVCoord);
  // Very soft diffuse atmospheric halo
  float halo = exp(-distFromCenter * distFromCenter * 2.0);
  halo *= (1.0 - smoothstep(0.7, 1.0, distFromCenter));
  
  gl_FragColor = vec4(vColor * 1.2, halo * uOpacity * 0.45);
}
`;class Sg{constructor(e){Q(this,"config");Q(this,"group");Q(this,"ribbonMesh",null);Q(this,"ribbonGeometry",null);Q(this,"ribbonMaterial",null);Q(this,"haloMesh",null);Q(this,"haloGeometry",null);Q(this,"haloMaterial",null);Q(this,"mirrorMesh",null);Q(this,"mirrorGeometry",null);Q(this,"mirrorMaterial",null);Q(this,"positions",new Float32Array(0));Q(this,"haloPositions",new Float32Array(0));Q(this,"mirrorPositions",new Float32Array(0));Q(this,"colors",new Float32Array(0));Q(this,"smoothedWave",new Float32Array(0));Q(this,"sampleCount",256);Q(this,"currentAspect",16/9);this.config=e,this.group=new hi}init(e){this.currentAspect=e.width/(e.height||1),this.rebuildWaveform(),this.applyTransform(),e.scene.add(this.group)}rebuildWaveform(){this.ribbonMesh&&(this.group.remove(this.ribbonMesh),this.ribbonMesh.geometry.dispose(),this.ribbonMesh=null),this.haloMesh&&(this.group.remove(this.haloMesh),this.haloMesh.geometry.dispose(),this.haloMesh=null),this.mirrorMesh&&(this.group.remove(this.mirrorMesh),this.mirrorMesh.geometry.dispose(),this.mirrorMesh=null),this.sampleCount=Math.max(64,Math.min(1024,this.config.sampleCount||256));const e=this.sampleCount;this.smoothedWave=new Float32Array(e);const n=e*2;this.positions=new Float32Array(n*3),this.haloPositions=new Float32Array(n*3),this.mirrorPositions=new Float32Array(n*3),this.colors=new Float32Array(n*3);const i=new Float32Array(n*2),r=new Float32Array(n);for(let o=0;o<e;o++){const l=o/(e-1),c=o*2,f=o*2+1;i[c*2]=l,i[c*2+1]=1,r[c]=1,i[f*2]=l,i[f*2+1]=0,r[f]=-1}const s=e-1,a=new Uint16Array(s*6);for(let o=0;o<s;o++){const l=o*2,c=o*2+1,f=(o+1)*2,p=(o+1)*2+1,h=o*6;a[h]=l,a[h+1]=c,a[h+2]=f,a[h+3]=f,a[h+4]=c,a[h+5]=p}this.ribbonGeometry=new kt,this.ribbonGeometry.setAttribute("position",new ft(this.positions,3)),this.ribbonGeometry.setAttribute("aColor",new ft(this.colors,3)),this.ribbonGeometry.setAttribute("uv",new ft(i,2)),this.ribbonGeometry.setAttribute("aVCoord",new ft(r,1)),this.ribbonGeometry.setIndex(new ft(a,1)),this.ribbonMaterial=new Ht({vertexShader:xd,fragmentShader:AR,uniforms:{uOpacity:{value:this.config.opacity??1},uGlowIntensity:{value:this.config.glowIntensity??2}},transparent:!0,blending:fn,depthWrite:!1,side:Ln}),this.ribbonMesh=new Vt(this.ribbonGeometry,this.ribbonMaterial),this.group.add(this.ribbonMesh),this.haloGeometry=new kt,this.haloGeometry.setAttribute("position",new ft(this.haloPositions,3)),this.haloGeometry.setAttribute("aColor",new ft(this.colors,3)),this.haloGeometry.setAttribute("uv",new ft(i,2)),this.haloGeometry.setAttribute("aVCoord",new ft(r,1)),this.haloGeometry.setIndex(new ft(a,1)),this.haloMaterial=new Ht({vertexShader:xd,fragmentShader:Mg,uniforms:{uOpacity:{value:this.config.opacity??1}},transparent:!0,blending:fn,depthWrite:!1,side:Ln}),this.haloMesh=new Vt(this.haloGeometry,this.haloMaterial),this.group.add(this.haloMesh),this.mirrorGeometry=new kt,this.mirrorGeometry.setAttribute("position",new ft(this.mirrorPositions,3)),this.mirrorGeometry.setAttribute("aColor",new ft(this.colors,3)),this.mirrorGeometry.setAttribute("uv",new ft(i,2)),this.mirrorGeometry.setAttribute("aVCoord",new ft(r,1)),this.mirrorGeometry.setIndex(new ft(a,1)),this.mirrorMaterial=new Ht({vertexShader:xd,fragmentShader:Mg,uniforms:{uOpacity:{value:(this.config.opacity??1)*.4}},transparent:!0,blending:fn,depthWrite:!1,side:Ln}),this.mirrorMesh=new Vt(this.mirrorGeometry,this.mirrorMaterial),this.group.add(this.mirrorMesh)}applyTransform(){var f,p,h;const[e,n,i]=((f=this.config.transform)==null?void 0:f.position)||[0,0,0],[r,s,a]=((p=this.config.transform)==null?void 0:p.rotation)||[0,0,0],[o,l,c]=((h=this.config.transform)==null?void 0:h.scale)||[1,1,1];this.group.position.set(e,n,i),this.group.rotation.set(r,s,a),this.group.scale.set(o,l,c),this.group.visible=this.config.enabled??!0}update(e,n,i){var C,R;if(!this.ribbonGeometry||!this.config.enabled)return;const r=e.waveform||new Float32Array(1024),s=this.sampleCount,a=r.length;if(a===0||s===0)return;const o=a/s,l=((C=e.bands)==null?void 0:C.bass)||0,c=((R=e.bands)==null?void 0:R.treble)||0,f=(this.config.amplitude||1.6)*(1+l*(this.config.displacementIntensity||1)*.65),h=Math.max(.04,Math.min(.5,(this.config.thickness||3)*.025))*.5*(1+l*.25),m=h*2.8,y=new Ne(this.config.primaryColor||"#00f0ff"),v=new Ne(this.config.secondaryColor||"#ff007f"),g=new Float32Array(s);for(let w=0;w<s;w++){let S=0,N=0;const V=[.05,.1,.2,.3,.2,.1,.05];for(let j=-3;j<=3;j++){const I=Math.max(0,Math.min(a-1,Math.floor((w+j)*o))),B=V[j+3];S+=(r[I]||0)*B,N+=B}g[w]=S/N}const u=Math.max(.2,Math.min(.85,this.config.waveformSmoothing??.65));for(let w=0;w<s;w++)this.smoothedWave[w]+=(g[w]-this.smoothedWave[w])*(1-u*.65);const x=this.positions,_=this.haloPositions,M=this.mirrorPositions,A=this.colors,T=this.currentAspect||16/9;if(this.config.mode==="circular"){const w=T<.8?Math.min(this.config.radius||2,1.6):this.config.radius||2;for(let S=0;S<s;S++){const N=S/s*Math.PI*2,V=this.smoothedWave[S]*f*(.85+l*.4),j=Math.max(.2,w+V),I=Math.cos(N)*j,B=Math.sin(N)*j,H=Math.sin(N*3+i*2)*(l*.2),K=Math.cos(N),D=Math.sin(N),G=S*2,$=S*2+1;x[G*3]=I+K*h,x[G*3+1]=B+D*h,x[G*3+2]=H,x[$*3]=I-K*h,x[$*3+1]=B-D*h,x[$*3+2]=H,_[G*3]=I+K*m,_[G*3+1]=B+D*m,_[G*3+2]=H,_[$*3]=I-K*m,_[$*3+1]=B-D*m,_[$*3+2]=H;const ne=Math.max(.1,w*.6-V*.5);M[G*3]=Math.cos(N)*ne+K*h*.7,M[G*3+1]=Math.sin(N)*ne+D*h*.7,M[G*3+2]=H*.5,M[$*3]=Math.cos(N)*ne-K*h*.7,M[$*3+1]=Math.sin(N)*ne-D*h*.7,M[$*3+2]=H*.5;const ce=(Math.sin(N)+1)*.5,Se=y.clone().lerp(v,ce);A[G*3]=Se.r,A[G*3+1]=Se.g,A[G*3+2]=Se.b,A[$*3]=Se.r,A[$*3+1]=Se.g,A[$*3+2]=Se.b}}else if(this.config.mode==="ribbon3d"){const w=T<.8?4.2:T<1.3?6.5:8.5;for(let S=0;S<s;S++){const N=S/(s-1),V=this.smoothedWave[S]*f,j=(N-.5)*w,I=Math.sin(N*Math.PI*3+i*2.5)*.4+V,B=Math.cos(N*Math.PI*2+i*1.8)*(this.config.depth3D||1),H=Math.cos(N*Math.PI*2),K=Math.sin(N*Math.PI*2),D=S*2,G=S*2+1;x[D*3]=j,x[D*3+1]=I+H*h,x[D*3+2]=B+K*h,x[G*3]=j,x[G*3+1]=I-H*h,x[G*3+2]=B-K*h,_[D*3]=j,_[D*3+1]=I+H*m,_[D*3+2]=B+K*m,_[G*3]=j,_[G*3+1]=I-H*m,_[G*3+2]=B-K*m,M[D*3]=j,M[D*3+1]=-I+H*h*.6,M[D*3+2]=-B*.5,M[G*3]=j,M[G*3+1]=-I-H*h*.6,M[G*3+2]=-B*.5;const $=y.clone().lerp(v,N);A[D*3]=$.r,A[D*3+1]=$.g,A[D*3+2]=$.b,A[G*3]=$.r,A[G*3+1]=$.g,A[G*3+2]=$.b}}else{let w=5.2;T<.8?w=2.15:T<1.3&&(w=3.65);for(let S=0;S<s;S++){const N=S/(s-1)*2-1,V=N*w,j=Math.sin(S/(s-1)*Math.PI),B=this.smoothedWave[S]*f*j,H=Math.sin(N*4+i*1.5)*(l*.15);let K=1,D=0;if(S>0&&S<s-1){const ue=this.smoothedWave[S+1]*f*Math.sin((S+1)/(s-1)*Math.PI),le=this.smoothedWave[S-1]*f*Math.sin((S-1)/(s-1)*Math.PI),Te=2/(s-1)*w,Ce=ue-le,Oe=Math.sqrt(Te*Te+Ce*Ce)||1;K=Te/Oe,D=Ce/Oe}const G=-D,$=K,ne=S*2,ce=S*2+1;x[ne*3]=V+G*h,x[ne*3+1]=B+$*h,x[ne*3+2]=H,x[ce*3]=V-G*h,x[ce*3+1]=B-$*h,x[ce*3+2]=H,_[ne*3]=V+G*m,_[ne*3+1]=B+$*m,_[ne*3+2]=H,_[ce*3]=V-G*m,_[ce*3+1]=B-$*m,_[ce*3+2]=H;const Se=-B*.45-.2;M[ne*3]=V,M[ne*3+1]=Se+h*.7,M[ne*3+2]=H*.5,M[ce*3]=V,M[ce*3+1]=Se-h*.7,M[ce*3+2]=H*.5;const Y=S/(s-1),ie=y.clone().lerp(v,Y);A[ne*3]=ie.r,A[ne*3+1]=ie.g,A[ne*3+2]=ie.b,A[ce*3]=ie.r,A[ce*3+1]=ie.g,A[ce*3+2]=ie.b}}this.ribbonGeometry.attributes.position.needsUpdate=!0,this.ribbonGeometry.attributes.aColor.needsUpdate=!0,this.haloGeometry&&(this.haloGeometry.attributes.position.needsUpdate=!0,this.haloGeometry.attributes.aColor.needsUpdate=!0),this.mirrorGeometry&&(this.mirrorGeometry.attributes.position.needsUpdate=!0,this.mirrorGeometry.attributes.aColor.needsUpdate=!0),this.ribbonMaterial&&(this.ribbonMaterial.uniforms.uOpacity.value=this.config.opacity??1,this.ribbonMaterial.uniforms.uGlowIntensity.value=(this.config.glowIntensity??2)*(1+c*.4)),this.haloMaterial&&(this.haloMaterial.uniforms.uOpacity.value=(this.config.opacity??1)*(1+l*.3))}resize(e,n,i){this.currentAspect=e/(n||1)}updateConfig(e){const n=e.sampleCount!==void 0&&e.sampleCount!==this.config.sampleCount,i=e.mode!==void 0&&e.mode!==this.config.mode;this.config={...this.config,...e},this.applyTransform(),(n||i)&&this.rebuildWaveform()}dispose(){this.ribbonMesh&&(this.group.remove(this.ribbonMesh),this.ribbonMesh.geometry.dispose(),this.ribbonMesh=null),this.haloMesh&&(this.group.remove(this.haloMesh),this.haloMesh.geometry.dispose(),this.haloMesh=null),this.mirrorMesh&&(this.group.remove(this.mirrorMesh),this.mirrorMesh.geometry.dispose(),this.mirrorMesh=null),this.ribbonMaterial&&(this.ribbonMaterial.dispose(),this.ribbonMaterial=null),this.haloMaterial&&(this.haloMaterial.dispose(),this.haloMaterial=null),this.mirrorMaterial&&(this.mirrorMaterial.dispose(),this.mirrorMaterial=null),this.group.parent&&this.group.parent.remove(this.group)}}class RR{constructor(){Q(this,"renderer",null);Q(this,"scene");Q(this,"camera");Q(this,"container",null);Q(this,"canvas",null);Q(this,"composer",null);Q(this,"bloomPass",null);Q(this,"postProcessingSettings",{bloomIntensity:1.5,bloomRadius:.5,bloomThreshold:.3,chromaticAberration:.005,grainIntensity:.15,vignetteIntensity:.4,toneMappingExposure:1.1});Q(this,"modulesMap",new Map);Q(this,"activeLayers",[]);Q(this,"clock",new k_);Q(this,"width",1280);Q(this,"height",720);Q(this,"savedWidth",1280);Q(this,"savedHeight",720);Q(this,"pixelRatio",1);Q(this,"aspectRatio","16:9");Q(this,"isExporting",!1);Q(this,"cameraAngleX",0);Q(this,"cameraAngleY",0);Q(this,"targetAngleX",0);Q(this,"targetAngleY",0);Q(this,"cameraDistance",7);Q(this,"targetDistance",7);Q(this,"ambientLight");Q(this,"dirLight1");Q(this,"dirLight2");this.scene=new tR,this.camera=new Dn(60,16/9,.1,1e3),this.camera.position.set(0,0,7),this.ambientLight=new dR(16777215,.6),this.scene.add(this.ambientLight),this.dirLight1=new uR(61695,1.2),this.dirLight1.position.set(5,5,5),this.scene.add(this.dirLight1),this.dirLight2=new lR(16711807,1.5,20),this.dirLight2.position.set(-5,-3,3),this.scene.add(this.dirLight2)}orbitCamera(e,n){this.targetAngleX+=e*.006,this.targetAngleY=Math.max(-1.3,Math.min(1.3,this.targetAngleY+n*.006))}zoomCamera(e){this.targetDistance=Math.max(3.5,Math.min(16,this.targetDistance+e*.005))}resetCamera(){this.targetAngleX=0,this.targetAngleY=0,this.cameraAngleX=0,this.cameraAngleY=0,this.targetDistance=7,this.cameraDistance=7,this.camera.position.set(0,0,7),this.camera.lookAt(0,0,0)}updateCameraPosition(e=0){this.cameraAngleX+=(this.targetAngleX-this.cameraAngleX)*.12,this.cameraAngleY+=(this.targetAngleY-this.cameraAngleY)*.12,this.cameraDistance+=(this.targetDistance-this.cameraDistance)*.12;const n=this.cameraDistance-e*.25,i=Math.cos(this.cameraAngleY);this.camera.position.x=n*Math.sin(this.cameraAngleX)*i,this.camera.position.y=n*Math.sin(this.cameraAngleY),this.camera.position.z=n*Math.cos(this.cameraAngleX)*i,this.camera.lookAt(0,0,0)}mount(e,n){this.container=e;const i=e.getBoundingClientRect();this.width=Math.max(300,Math.floor(i.width||1280)),this.height=Math.max(200,Math.floor(i.height||720)),this.savedWidth=this.width,this.savedHeight=this.height,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),n?(this.canvas=n,this.renderer=new og({canvas:n,antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"})):(this.renderer=new og({antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.canvas=this.renderer.domElement,e.appendChild(this.canvas)),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setClearColor(0,0),this.setupPostProcessing(this.width,this.height),this.updateCameraAspect();const r=this.getRenderContext();for(const s of this.modulesMap.values())s.init(r);this.clock.start()}setupPostProcessing(e,n){if(this.renderer)try{this.renderer.toneMapping=Sp,this.renderer.toneMappingExposure=this.postProcessingSettings.toneMappingExposure||1.15;const i=new Zn(e,n,{type:Ai,samples:4,format:Yn});this.composer=new vR(this.renderer,i),this.composer.setSize(e,n);const r=new xR(this.scene,this.camera);this.composer.addPass(r),this.bloomPass=new Sa(new Fe(e,n),this.postProcessingSettings.bloomIntensity,this.postProcessingSettings.bloomRadius,this.postProcessingSettings.bloomThreshold),this.composer.addPass(this.bloomPass);const s=new MR;this.composer.addPass(s)}catch(i){console.warn("Post-processing setup failed, using standard rendering:",i),this.composer=null,this.bloomPass=null}}updatePostProcessing(e){this.postProcessingSettings={...this.postProcessingSettings,...e},this.bloomPass&&(e.bloomIntensity!==void 0&&(this.bloomPass.strength=e.bloomIntensity),e.bloomRadius!==void 0&&(this.bloomPass.radius=e.bloomRadius),e.bloomThreshold!==void 0&&(this.bloomPass.threshold=e.bloomThreshold))}getRenderContext(){return{scene:this.scene,camera:this.camera,renderer:this.renderer,width:this.width,height:this.height,aspectRatio:this.camera.aspect}}getCanvas(){return this.canvas}setAspectRatio(e){this.aspectRatio=e,this.updateCameraAspect()}updateCameraAspect(){const e=this.width/(this.height||1);this.camera.aspect=e,this.camera.updateProjectionMatrix(),e<.8?this.targetDistance=7.6:e<1.2?this.targetDistance=7.2:this.targetDistance=7,this.cameraDistance=this.targetDistance,this.updateCameraPosition()}resize(e,n){if(!this.isExporting){this.width=e,this.height=n,this.savedWidth=e,this.savedHeight=n,this.renderer&&(this.renderer.setSize(e,n),this.renderer.setPixelRatio(this.pixelRatio)),this.composer&&this.composer.setSize(e,n),this.bloomPass&&this.bloomPass.resolution.set(e,n),this.updateCameraAspect();for(const i of this.modulesMap.values())i.resize(e,n,this.pixelRatio)}}setExportMode(e,n,i,r){if(this.isExporting=e,!!this.renderer)if(e&&n&&i){r&&(this.aspectRatio=r),this.width=n,this.height=i,this.renderer.setPixelRatio(1),this.renderer.setSize(n,i,!1),this.setupPostProcessing(n,i),this.updateCameraAspect();for(const s of this.modulesMap.values())s.resize(n,i,1)}else{this.width=this.savedWidth,this.height=this.savedHeight,this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.savedWidth,this.savedHeight),this.setupPostProcessing(this.savedWidth,this.savedHeight),this.updateCameraAspect();for(const s of this.modulesMap.values())s.resize(this.savedWidth,this.savedHeight,this.pixelRatio)}}createModuleInstance(e){switch(e.type){case"waveform":return new Sg(e);case"spectrum":return new CR(e);case"particles":return new TR(e);case"geometry":return new ER(e);case"background":return new bR(e);default:return new Sg(e)}}syncLayers(e){this.activeLayers=e;const n=new Set(e.map(r=>r.id));for(const[r,s]of this.modulesMap.entries())n.has(r)||(s.dispose(),this.modulesMap.delete(r));const i=this.getRenderContext();for(const r of e){let s=this.modulesMap.get(r.id);!s||s.config.type!==r.type?(s&&(s.dispose(),this.modulesMap.delete(r.id)),s=this.createModuleInstance(r),this.renderer&&s.init(i),this.modulesMap.set(r.id,s)):s.updateConfig(r)}}renderPreviewFrame(e){var s,a;if(!this.renderer||this.isExporting)return;const n=this.clock.getDelta(),i=this.clock.getElapsedTime(),r=((s=e.bands)==null?void 0:s.bass)||0;this.dirLight1.intensity=1+r*.8,this.dirLight2.intensity=1.2+(((a=e.bands)==null?void 0:a.treble)||0)*1;for(const o of this.activeLayers){const l=this.modulesMap.get(o.id);l&&o.enabled&&l.update(e,n,i)}this.composer&&this.postProcessingSettings.bloomIntensity>.05?this.composer.render():this.renderer.render(this.scene,this.camera)}renderOfflineFrame(e,n,i,r=60){var l,c;if(!this.renderer)return;const s=1/r,a=n,o=((l=e.bands)==null?void 0:l.bass)||0;this.dirLight1.intensity=1+o*.8,this.dirLight2.intensity=1.2+(((c=e.bands)==null?void 0:c.treble)||0)*1;for(const f of this.activeLayers){const p=this.modulesMap.get(f.id);p&&f.enabled&&p.update(e,s,a)}this.composer&&this.postProcessingSettings.bloomIntensity>.05?this.composer.render():this.renderer.render(this.scene,this.camera)}dispose(){for(const e of this.modulesMap.values())e.dispose();this.modulesMap.clear(),this.composer&&(this.composer.dispose(),this.composer=null),this.renderer&&(this.renderer.dispose(),this.canvas&&this.canvas.parentElement&&this.canvas.parentElement.removeChild(this.canvas),this.renderer=null,this.canvas=null)}}const st=new RR;class PR{constructor(){Q(this,"isCancelled",!1)}isWebCodecsSupported(){return typeof window<"u"&&typeof window.VideoEncoder=="function"&&typeof window.VideoFrame=="function"}cancelExport(){this.isCancelled=!0}async startExport(e,n){this.isCancelled=!1;const i=performance.now(),r=ob[e.aspectRatio][e.resolution],s=r.width%2===0?r.width:r.width-1,a=r.height%2===0?r.height:r.height-1,o=e.fps||30,l=ct.getDuration(),c=Math.max(0,e.startTime||0),f=e.endTime>c?e.endTime:l>0?l:10,p=Math.max(1,f-c),h=Math.max(1,Math.floor(p*o)),m={status:"preparing",progress:0,currentFrame:0,totalFrames:h,elapsedTimeSeconds:0,estimatedTimeRemainingSeconds:0,renderingFps:0};n({...m}),st.setExportMode(!0,s,a,e.aspectRatio);try{if(this.isWebCodecsSupported())try{return await this.exportWithWebCodecs(e,s,a,o,c,h,i,m,n)}catch(y){if(console.warn("WebCodecs export failed:",y),this.isCancelled||m.currentFrame>0)throw y;return await this.exportWithMediaRecorder(e,s,a,o,c,p,m,n)}else return await this.exportWithMediaRecorder(e,s,a,o,c,p,m,n)}catch(y){throw m.status="error",m.errorMessage=y.message||"An error occurred during video export",n({...m}),y}finally{st.setExportMode(!1)}}async exportWithWebCodecs(e,n,i,r,s,a,o,l,c){const f=window.VideoEncoder,p=["avc1.640034","avc1.640033","avc1.64002a","avc1.640028","avc1.4d002a","avc1.420034","vp09.00.41.08","vp8"];let h="avc1.640028",m=!1;for(const I of p)try{const B=await f.isConfigSupported({codec:I,width:n,height:i,bitrate:e.bitrate||2e7,framerate:r});if(B&&B.supported){h=I,m=!0;break}}catch{}if(!m)throw new Error(`No compatible video codec supported for ${n}x${i}`);const y=ct.getAudioBuffer(),v=window.AudioEncoder,g=window.AudioData;let u=!1;if(e.includeAudio!==!1&&y&&typeof v=="function"&&typeof g=="function")try{const I=await v.isConfigSupported({codec:"mp4a.40.2",sampleRate:y.sampleRate,numberOfChannels:Math.min(2,y.numberOfChannels),bitrate:192e3});I&&I.supported&&(u=!0)}catch(I){console.warn("AudioEncoder AAC config check:",I)}const x=new jy,_=h.startsWith("avc"),M=new ab({target:x,video:{codec:_?"avc":"vp9",width:n,height:i},audio:u&&y?{codec:"aac",numberOfChannels:Math.min(2,y.numberOfChannels),sampleRate:y.sampleRate}:void 0,fastStart:!1,firstTimestampBehavior:"offset"});let A=null;const T=new f({output:(I,B)=>{try{M.addVideoChunk(I,B)}catch(H){A=H}},error:I=>{A=I}}),C={codec:h,width:n,height:i,bitrate:e.bitrate||2e7,bitrateMode:"variable",framerate:r,hardwareAcceleration:"prefer-hardware"};if(_&&(C.avc={format:"avc"}),T.configure(C),u&&y)try{let I=0;const B=new v({output:(ue,le)=>{try{M.addAudioChunk(ue,le),I++}catch(Te){console.warn("Audio chunk mux error:",Te)}},error:ue=>{console.warn("AudioEncoder warning:",ue)}});B.configure({codec:"mp4a.40.2",sampleRate:y.sampleRate,numberOfChannels:Math.min(2,y.numberOfChannels),bitrate:192e3});const H=y.sampleRate,K=Math.min(2,y.numberOfChannels),D=Math.floor(s*H),G=Math.floor(a/r*H),$=Math.min(y.length,D+G),ne=y.getChannelData(0),ce=y.numberOfChannels>1?y.getChannelData(1):ne,Se=1024;let Y=D,ie=0;for(;Y<$&&!this.isCancelled;){const ue=new Float32Array(Se*K);for(let Ce=0;Ce<Se;Ce++){const Oe=Y+Ce;Oe<$?(ue[Ce]=ne[Oe],K>1&&(ue[Se+Ce]=ce[Oe])):(ue[Ce]=0,K>1&&(ue[Se+Ce]=0))}const le=Math.floor(ie/H*1e6),Te=new g({format:"f32-planar",sampleRate:H,numberOfFrames:Se,numberOfChannels:K,timestamp:le,data:ue});B.encode(Te),Te.close(),Y+=Se,ie+=Se,B.encodeQueueSize>20&&await new Promise(Ce=>setTimeout(Ce,0))}await B.flush(),B.close(),console.log(`Audio successfully encoded: ${I} AAC chunks added to MP4.`)}catch(I){console.warn("Audio encoding failed, proceeding with video only:",I)}l.status="renderingFrames",c({...l});const R=1e6/r,w=window.VideoFrame,S=st.getCanvas();if(!S)throw new Error("Render canvas not available");for(let I=0;I<a;I++){if(this.isCancelled)throw l.status="cancelled",c({...l}),new Error("Export cancelled by user");if(A)throw A;const B=s+I/r,H=ct.getOfflineAnalysis(B);st.renderOfflineFrame(H,B,I,r);const K=new w(S,{timestamp:I*R,duration:R}),D=I%(r*2)===0;for(T.encode(K,{keyFrame:D}),K.close();T.encodeQueueSize>5;)await new Promise(Y=>setTimeout(Y,4));const $=(performance.now()-o)/1e3,ne=I>0?I/$:r,Se=(a-I)/(ne||1);l.currentFrame=I+1,l.progress=(I+1)/a,l.elapsedTimeSeconds=$,l.estimatedTimeRemainingSeconds=Se,l.renderingFps=ne,(I%2===0||I===a-1)&&(c({...l}),await new Promise(Y=>setTimeout(Y,0)))}l.status="muxingAudio",c({...l}),await new Promise(I=>setTimeout(I,30)),await Promise.race([T.flush(),new Promise((I,B)=>setTimeout(()=>B(new Error("Video encoder flush timed out")),25e3))]),T.close();try{M.finalize()}catch(I){throw console.error("Muxer finalize error:",I),new Error(`Failed to finalize MP4 file: ${I.message||"Muxing error"}`)}const N=x.buffer;if(!N||N.byteLength===0)throw new Error("Generated MP4 file is empty");const V=new Blob([N],{type:"video/mp4"}),j=URL.createObjectURL(V);l.status="completed",l.progress=1,l.outputBlobUrl=j,l.fileSizeBytes=V.size,c({...l});try{const I=document.createElement("a");I.href=j,I.download=`${e.outputFileName||"visualization"}.mp4`,document.body.appendChild(I),I.click(),setTimeout(()=>{I.parentNode&&document.body.removeChild(I)},500)}catch(I){console.warn("Auto download trigger error (user can still click button):",I)}return V}async exportWithMediaRecorder(e,n,i,r,s,a,o,l){const c=st.getCanvas();if(!c)throw new Error("Canvas not found");const f=c.captureStream(r),p=ct.connectMediaStreamDestination();p&&p.stream.getAudioTracks().length>0&&f.addTrack(p.stream.getAudioTracks()[0]);const h=MediaRecorder.isTypeSupported('video/mp4; codecs="avc1.424028"')?"video/mp4":"video/webm;codecs=vp9",m=new MediaRecorder(f,{mimeType:h,videoBitsPerSecond:e.bitrate||1e7}),y=[];return m.ondataavailable=v=>{v.data&&v.data.size>0&&y.push(v.data)},new Promise((v,g)=>{const u=performance.now(),x=()=>{p&&ct.disconnectMediaStreamDestination(p)};m.onstop=()=>{x();const M=new Blob(y,{type:h});o.status="completed",o.progress=1,o.outputBlobUrl=URL.createObjectURL(M),o.fileSizeBytes=M.size,l({...o}),v(M)},m.onerror=M=>{x(),o.status="error",o.errorMessage="MediaRecorder error occurred during export",l({...o}),g(M)},m.start(100),ct.play(s);const _=setInterval(()=>{const M=ct.getCurrentTime(),A=(performance.now()-u)/1e3,T=Math.min(1,(M-s)/a),C=Math.max(0,a-(M-s));o.progress=T,o.status="renderingFrames",o.currentFrame=Math.floor(T*a*r),o.elapsedTimeSeconds=A,o.estimatedTimeRemainingSeconds=C,o.renderingFps=r,l({...o}),(M>=s+a||this.isCancelled)&&(clearInterval(_),ct.pause(),m.stop())},100)})}}const wg=new PR,li=[{id:"preset-cyberpunk",name:"Cyber Horizon 2077",category:"cyberpunk",description:"80s Synthwave grid horizon, audio-reactive wireframe torus & graphic equalizer",isBuiltIn:!0,updatedAt:Date.now(),palette:{id:"pal-cyber",name:"Cyberpunk Neon",primary:"#fcee0a",secondary:"#ff007f",accent:"#00f0ff",background:"#0a0017",glow:"#fcee0a"},reactivity:{masterSensitivity:1.35,bassSensitivity:1.45,midSensitivity:1.1,trebleSensitivity:1.25,globalSmoothing:.74,autoGainControl:!0},postProcessing:{bloomIntensity:2.2,bloomRadius:.65,bloomThreshold:.22,chromaticAberration:.008,grainIntensity:.18,vignetteIntensity:.42,toneMappingExposure:1.15},layers:[{id:"layer-bg-cyber",name:"Synthwave Horizon Grid",type:"background",enabled:!0,opacity:1,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"synthwaveGrid",primaryColor:"#0a0017",secondaryColor:"#ff007f",accentColor:"#fcee0a",gradientAngle:0,grainIntensity:.2,vignetteStrength:.45,animationSpeed:1.2,audioReactiveZoom:.5,mediaBlur:0},{id:"layer-geom-cyber",name:"Wireframe Torus Knot",type:"geometry",enabled:!0,opacity:.95,blendMode:"additive",transform:{position:[0,.5,0],rotation:[.4,0,0],scale:[1.1,1.1,1.1]},reactivityMappings:[],shape:"torusKnot",shadingStyle:"wireframe",subdivisions:2,wireframeThickness:1.8,noiseDistortion:.7,distortionBand:"bass",rotationSpeed:[.2,.45,.15],pulseIntensity:.9,primaryColor:"#fcee0a",accentColor:"#00f0ff",metallicRoughness:.25,glowIntensity:2.2},{id:"layer-spec-cyber",name:"Graphic Equalizer Bars",type:"spectrum",enabled:!0,opacity:.9,blendMode:"additive",transform:{position:[0,-1.8,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"verticalBars",barCount:48,barWidth:.75,maxHeight:1.8,innerRadius:1.2,minFrequencyHz:20,maxFrequencyHz:16e3,logarithmicScale:!0,primaryColor:"#ff007f",secondaryColor:"#00f0ff",barRoundness:.5,glowIntensity:1.8,mirror:!0,showPeaks:!0,peakDecaySpeed:1.5}]},{id:"preset-neon",name:"Deep Space Nebula",category:"neon",description:"Swirling raymarched cosmic clouds, 3D wave ribbon, and starry particle vortex",isBuiltIn:!0,updatedAt:Date.now(),palette:{id:"pal-nebula",name:"Cosmic Violet",primary:"#00f0ff",secondary:"#8b5cf6",accent:"#ec4899",background:"#05060f",glow:"#00f0ff"},reactivity:{masterSensitivity:1.2,bassSensitivity:1.35,midSensitivity:1.1,trebleSensitivity:1.2,globalSmoothing:.8,autoGainControl:!0},postProcessing:{bloomIntensity:1.9,bloomRadius:.65,bloomThreshold:.28,chromaticAberration:.005,grainIntensity:.15,vignetteIntensity:.45,toneMappingExposure:1.1},layers:[{id:"layer-bg-nebula",name:"Cosmic Nebula",type:"background",enabled:!0,opacity:1,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"animatedNebula",primaryColor:"#05060f",secondaryColor:"#1d0b38",accentColor:"#00f0ff",gradientAngle:45,grainIntensity:.2,vignetteStrength:.5,animationSpeed:1,audioReactiveZoom:.5,mediaBlur:0},{id:"layer-particles-nebula",name:"Ambient Stellar Vortex",type:"particles",enabled:!0,opacity:.88,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],count:1600,size:1.3,speed:1.1,behavior:"ambientVortex",dispersion:4.8,color:"#00f0ff",secondaryColor:"#8b5cf6",connectLines:!0,connectionDistance:.85,connectionOpacity:.28,beatExplosionForce:3.2,trebleTwinkle:2.2,lifetime:4,particleShape:"circle"},{id:"layer-waveform-nebula",name:"3D Wave Ribbon",type:"waveform",enabled:!0,opacity:1,blendMode:"additive",transform:{position:[0,0,0],rotation:[.25,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"ribbon3d",thickness:2.4,amplitude:1.6,sampleCount:384,glowIntensity:2.4,primaryColor:"#00f0ff",secondaryColor:"#ec4899",colorGradientType:"linear",radius:1.8,depth3D:1.1,waveformSmoothing:.2,displacementIntensity:1.3,mirror:!1}]},{id:"preset-darktechno",name:"Industrial Rave",category:"darkTechno",description:"Aggressive circular oscilloscope with fiery amber bass shockwaves and underground club aesthetic",isBuiltIn:!0,updatedAt:Date.now(),palette:{id:"pal-techno",name:"Industrial Fire",primary:"#f59e0b",secondary:"#ffffff",accent:"#ef4444",background:"#05070a",glow:"#f59e0b"},reactivity:{masterSensitivity:1.5,bassSensitivity:1.8,midSensitivity:.85,trebleSensitivity:1,globalSmoothing:.68,autoGainControl:!0},postProcessing:{bloomIntensity:1.6,bloomRadius:.52,bloomThreshold:.38,chromaticAberration:.004,grainIntensity:.35,vignetteIntensity:.68,toneMappingExposure:1.08},layers:[{id:"layer-bg-techno",name:"Industrial Slate Gradient",type:"background",enabled:!0,opacity:1,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"gradient",primaryColor:"#05070a",secondaryColor:"#1e293b",accentColor:"#f59e0b",gradientAngle:135,grainIntensity:.38,vignetteStrength:.72,animationSpeed:.8,audioReactiveZoom:.65,mediaBlur:0},{id:"layer-particles-techno",name:"Amber Shockwave Particles",type:"particles",enabled:!0,opacity:.95,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],count:2e3,size:1.4,speed:1.6,behavior:"radialExplosion",dispersion:5.2,color:"#f59e0b",secondaryColor:"#ef4444",connectLines:!0,connectionDistance:.75,connectionOpacity:.3,beatExplosionForce:5.5,trebleTwinkle:1.2,lifetime:3.5,particleShape:"circle"},{id:"layer-wf-techno",name:"Bass Ring Oscilloscope",type:"waveform",enabled:!0,opacity:1,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"circular",thickness:3.2,amplitude:1.9,sampleCount:256,glowIntensity:2.2,primaryColor:"#f59e0b",secondaryColor:"#ffffff",colorGradientType:"radial",radius:1.7,depth3D:0,waveformSmoothing:.15,displacementIntensity:1.7,mirror:!1}]},{id:"preset-liquid",name:"Liquid Hologram",category:"liquid",description:"Iridescent Simplex-deformed geosphere with concentric frequency rings & dreamy glow",isBuiltIn:!0,updatedAt:Date.now(),palette:{id:"pal-liquid",name:"Iridescent Lagoon",primary:"#06b6d4",secondary:"#8b5cf6",accent:"#ec4899",background:"#040d1a",glow:"#06b6d4"},reactivity:{masterSensitivity:1.15,bassSensitivity:1.25,midSensitivity:1.35,trebleSensitivity:1.05,globalSmoothing:.82,autoGainControl:!0},postProcessing:{bloomIntensity:1.5,bloomRadius:.65,bloomThreshold:.32,chromaticAberration:.006,grainIntensity:.1,vignetteIntensity:.35,toneMappingExposure:1.2},layers:[{id:"layer-bg-liquid",name:"Liquid Aurora",type:"background",enabled:!0,opacity:1,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"liquidAurora",primaryColor:"#040d1a",secondaryColor:"#2e1065",accentColor:"#06b6d4",gradientAngle:60,grainIntensity:.15,vignetteStrength:.45,showStars:!0,starDensity:.25,animationSpeed:.7,audioReactiveZoom:.35,mediaBlur:0},{id:"layer-geom-liquid",name:"Morphing Geosphere",type:"geometry",enabled:!0,opacity:.95,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1.15,1.15,1.15]},reactivityMappings:[],shape:"morphingGeosphere",shadingStyle:"metallicPBR",subdivisions:3,wireframeThickness:1,noiseDistortion:.95,distortionBand:"mid",rotationSpeed:[.15,.28,.1],pulseIntensity:.75,primaryColor:"#06b6d4",accentColor:"#8b5cf6",metallicRoughness:.18,glowIntensity:1.6},{id:"layer-spec-liquid",name:"Concentric Rings",type:"spectrum",enabled:!0,opacity:.8,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"radialRings",barCount:16,barWidth:.8,maxHeight:1.5,innerRadius:1.4,minFrequencyHz:20,maxFrequencyHz:16e3,logarithmicScale:!0,primaryColor:"#06b6d4",secondaryColor:"#ec4899",barRoundness:.5,glowIntensity:1.5,mirror:!1,showPeaks:!1,peakDecaySpeed:1}]},{id:"preset-minimal",name:"Minimalist Studio",category:"minimal",description:"Clean obsidian studio aesthetic with razor-sharp mirrored waveform and understated tape grain",isBuiltIn:!0,updatedAt:Date.now(),palette:{id:"pal-minimal",name:"Monochrome Slate",primary:"#ffffff",secondary:"#64748b",accent:"#94a3b8",background:"#08090d",glow:"#ffffff"},reactivity:{masterSensitivity:1,bassSensitivity:1,midSensitivity:.9,trebleSensitivity:.95,globalSmoothing:.86,autoGainControl:!0},postProcessing:{bloomIntensity:.7,bloomRadius:.38,bloomThreshold:.6,chromaticAberration:0,grainIntensity:.22,vignetteIntensity:.58,toneMappingExposure:1},layers:[{id:"layer-bg-min",name:"Obsidian Studio Atmosphere",type:"background",enabled:!0,opacity:1,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"solid",primaryColor:"#090d16",secondaryColor:"#1e1b4b",accentColor:"#00f0ff",gradientAngle:45,grainIntensity:.12,vignetteStrength:.45,showStars:!1,starDensity:.2,animationSpeed:.5,audioReactiveZoom:0,mediaBlur:0},{id:"layer-wf-min",name:"Liquid Glowing Ribbon Waveform",type:"waveform",enabled:!0,opacity:1,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"horizontal",thickness:3.8,amplitude:1.6,sampleCount:384,glowIntensity:2.8,primaryColor:"#00f0ff",secondaryColor:"#ec4899",colorGradientType:"linear",radius:2,depth3D:0,waveformSmoothing:.65,displacementIntensity:1.1,mirror:!0}]},{id:"preset-hyperspace",name:"Warp Speed Hyperspace",category:"futuristic",description:"Infinite hyperspace warp tunnel with audio-reactive cylindrical neon spirals and particle explosion",isBuiltIn:!0,updatedAt:Date.now(),palette:{id:"pal-hyperspace",name:"Cyber Indigo",primary:"#00f0ff",secondary:"#ec4899",accent:"#8b5cf6",background:"#04020f",glow:"#00f0ff"},reactivity:{masterSensitivity:1.3,bassSensitivity:1.5,midSensitivity:1.1,trebleSensitivity:1.25,globalSmoothing:.72,autoGainControl:!0},postProcessing:{bloomIntensity:2,bloomRadius:.6,bloomThreshold:.25,chromaticAberration:.008,grainIntensity:.15,vignetteIntensity:.45,toneMappingExposure:1.15},layers:[{id:"layer-bg-warp",name:"Hyperspace Warp Tunnel",type:"background",enabled:!0,opacity:1,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"hypnoticTunnel",primaryColor:"#04020f",secondaryColor:"#2b0938",accentColor:"#00f0ff",gradientAngle:0,grainIntensity:.18,vignetteStrength:.5,animationSpeed:1.3,audioReactiveZoom:.55,showStars:!0,starDensity:.35,starSpeed:1.4,gridDensity:36,mediaBlur:0},{id:"layer-particles-warp",name:"Hyperspace Starlight Stars",type:"particles",enabled:!0,opacity:.9,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],count:1400,size:1.2,speed:1.8,behavior:"ambientVortex",dispersion:4.5,color:"#00f0ff",secondaryColor:"#ec4899",connectLines:!0,connectionDistance:.8,connectionOpacity:.35,beatExplosionForce:4.2,trebleTwinkle:2,lifetime:4,particleShape:"circle"},{id:"layer-wf-warp",name:"Neon Core Ring Waveform",type:"waveform",enabled:!0,opacity:1,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"circular",thickness:3.4,amplitude:1.8,sampleCount:256,glowIntensity:2.4,primaryColor:"#00f0ff",secondaryColor:"#ec4899",colorGradientType:"radial",radius:1.8,depth3D:0,waveformSmoothing:.55,displacementIntensity:1.4,mirror:!1}]},{id:"preset-matrix",name:"Matrix Cyberstream",category:"cyberpunk",description:"Cascading digital code streams with wireframe geometry and equalizing spectrum bars",isBuiltIn:!0,updatedAt:Date.now(),palette:{id:"pal-matrix",name:"Cyber Emerald",primary:"#00ff66",secondary:"#00f0ff",accent:"#22c55e",background:"#020904",glow:"#00ff66"},reactivity:{masterSensitivity:1.25,bassSensitivity:1.35,midSensitivity:1.15,trebleSensitivity:1.4,globalSmoothing:.75,autoGainControl:!0},postProcessing:{bloomIntensity:1.8,bloomRadius:.55,bloomThreshold:.28,chromaticAberration:.006,grainIntensity:.2,vignetteIntensity:.45,toneMappingExposure:1.1},layers:[{id:"layer-bg-matrix",name:"Digital Matrix Rain",type:"background",enabled:!0,opacity:1,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"digitalRain",primaryColor:"#020904",secondaryColor:"#003b14",accentColor:"#00ff66",gradientAngle:0,grainIntensity:.15,vignetteStrength:.45,animationSpeed:1.1,audioReactiveZoom:.35,showStars:!1,gridDensity:36,mediaBlur:0},{id:"layer-geom-matrix",name:"Cyber Data Cube",type:"geometry",enabled:!0,opacity:.9,blendMode:"additive",transform:{position:[0,.4,0],rotation:[.5,.4,.2],scale:[1.1,1.1,1.1]},reactivityMappings:[],shape:"cyberCube",shadingStyle:"wireframe",subdivisions:2,wireframeThickness:1.8,noiseDistortion:.8,distortionBand:"mid",rotationSpeed:[.25,.4,.15],pulseIntensity:.8,primaryColor:"#00ff66",accentColor:"#00f0ff",metallicRoughness:.2,glowIntensity:2},{id:"layer-spec-matrix",name:"Cyber Spectrum Bars",type:"spectrum",enabled:!0,opacity:.9,blendMode:"additive",transform:{position:[0,-1.8,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"verticalBars",barCount:44,barWidth:.75,maxHeight:1.6,innerRadius:1.2,minFrequencyHz:20,maxFrequencyHz:16e3,logarithmicScale:!0,primaryColor:"#00ff66",secondaryColor:"#00f0ff",barRoundness:.5,glowIntensity:1.8,mirror:!0,showPeaks:!0,peakDecaySpeed:1.4}]},{id:"preset-retrovhs",name:"Retro VHS Studio",category:"minimal",description:"Analog cathode ray tube scanlines, phosphor glow, warm amber ribbon and vinyl tape grain",isBuiltIn:!0,updatedAt:Date.now(),palette:{id:"pal-retrovhs",name:"Analog Amber",primary:"#f59e0b",secondary:"#a855f7",accent:"#fbbf24",background:"#09070f",glow:"#f59e0b"},reactivity:{masterSensitivity:1.1,bassSensitivity:1.2,midSensitivity:1,trebleSensitivity:1,globalSmoothing:.82,autoGainControl:!0},postProcessing:{bloomIntensity:1.3,bloomRadius:.45,bloomThreshold:.4,chromaticAberration:.007,grainIntensity:.26,vignetteIntensity:.55,toneMappingExposure:1.05},layers:[{id:"layer-bg-crt",name:"Phosphor CRT Background",type:"background",enabled:!0,opacity:1,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"retroCRT",primaryColor:"#09070f",secondaryColor:"#1f132e",accentColor:"#f59e0b",gradientAngle:0,grainIntensity:.24,vignetteStrength:.52,animationSpeed:.8,audioReactiveZoom:.25,scanlineIntensity:.5,showStars:!1,mediaBlur:0},{id:"layer-wf-crt",name:"Warm Neon Ribbon",type:"waveform",enabled:!0,opacity:1,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"horizontal",thickness:3.5,amplitude:1.6,sampleCount:320,glowIntensity:2.2,primaryColor:"#f59e0b",secondaryColor:"#a855f7",colorGradientType:"linear",radius:2,depth3D:0,waveformSmoothing:.7,displacementIntensity:1.1,mirror:!0}]}];function NR(){const t=Math.floor(Math.random()*360),e=["complementary","analogous","triadic","neon"],n=e[Math.floor(Math.random()*e.length)];let i=t,r=(t+180)%360,s=(t+90)%360;n==="analogous"?(r=(t+35)%360,s=(t-35+360)%360):n==="triadic"?(r=(t+120)%360,s=(t+240)%360):n==="neon"&&(i=185,r=325,s=270);const a=rs(i,95,55),o=rs(r,90,55),l=rs(s,90,60),c=["solid","gradient","animatedNebula","synthwaveGrid","hypnoticTunnel","liquidAurora","digitalRain","retroCRT"],f=c[Math.floor(Math.random()*c.length)],p=f==="animatedNebula"||f==="hypnoticTunnel"?!0:f==="solid"||f==="retroCRT"?!1:Math.random()>.65,h=["waveform","spectrum"],m=h[Math.floor(Math.random()*h.length)],y=[];if(y.push({id:`rand-bg-${Date.now()}`,name:"Background Layer",type:"background",enabled:!0,opacity:1,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:f,primaryColor:"#080a12",secondaryColor:rs(i,70,15),accentColor:l,gradientAngle:Math.floor(Math.random()*360),grainIntensity:.12+Math.random()*.18,vignetteStrength:.35+Math.random()*.3,animationSpeed:.7+Math.random()*.6,audioReactiveZoom:.2+Math.random()*.4,showStars:p,starDensity:.2+Math.random()*.4,starSpeed:.8+Math.random()*.8,seed:parseFloat((Math.random()*1e3).toFixed(2)),gridDensity:Math.floor(20+Math.random()*26),scanlineIntensity:.3+Math.random()*.4,mediaBlur:0}),Math.random()>.3){const v=["ambientVortex","radialExplosion","flowField"];y.push({id:`rand-part-${Date.now()}`,name:"Ambient Particles",type:"particles",enabled:!0,opacity:.85,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],count:800+Math.floor(Math.random()*800),size:1+Math.random()*.6,speed:.8+Math.random()*.8,behavior:v[Math.floor(Math.random()*v.length)],dispersion:4+Math.random()*1.5,color:a,secondaryColor:o,connectLines:Math.random()>.5,connectionDistance:.8,connectionOpacity:.3,beatExplosionForce:2.5+Math.random()*2.5,trebleTwinkle:1.5+Math.random()*1,lifetime:3.5,particleShape:"circle"})}if(m==="waveform"){const v=["horizontal","circular","ribbon3d"];y.push({id:`rand-wf-${Date.now()}`,name:"Reactive Waveform",type:"waveform",enabled:!0,opacity:1,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:v[Math.floor(Math.random()*v.length)],thickness:2+Math.random()*1.5,amplitude:1.2+Math.random()*.6,sampleCount:256,glowIntensity:1.5+Math.random()*1.5,primaryColor:a,secondaryColor:o,colorGradientType:"radial",radius:1.6+Math.random()*.4,depth3D:.8,waveformSmoothing:.2,displacementIntensity:1+Math.random()*.5,mirror:Math.random()>.5})}else y.push({id:`rand-spec-${Date.now()}`,name:"Reactive Spectrum",type:"spectrum",enabled:!0,opacity:.95,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:Math.random()>.5?"circularRadial":"verticalBars",barCount:32+Math.floor(Math.random()*32),barWidth:.7+Math.random()*.2,maxHeight:1.5+Math.random()*.5,innerRadius:1.3,minFrequencyHz:20,maxFrequencyHz:16e3,logarithmicScale:!0,primaryColor:a,secondaryColor:o,barRoundness:.5,glowIntensity:1.8,mirror:!0,showPeaks:!0,peakDecaySpeed:1.5});return{id:`rand-preset-${Date.now()}`,name:`Generative ${n.toUpperCase()} #${Math.floor(Math.random()*900+100)}`,category:"abstract",description:`Aesthetically constrained generative preset with ${n} palette`,isBuiltIn:!1,updatedAt:Date.now(),palette:{id:`pal-rand-${Date.now()}`,name:"Generative Palette",primary:a,secondary:o,accent:l,background:"#080a12",glow:a},reactivity:{masterSensitivity:1+Math.random()*.4,bassSensitivity:1.1+Math.random()*.5,midSensitivity:.9+Math.random()*.3,trebleSensitivity:1+Math.random()*.3,globalSmoothing:.78+Math.random()*.1,autoGainControl:!0},postProcessing:{bloomIntensity:1.2+Math.random()*1,bloomRadius:.5+Math.random()*.3,bloomThreshold:.3+Math.random()*.2,chromaticAberration:.003+Math.random()*.004,grainIntensity:.12+Math.random()*.15,vignetteIntensity:.35+Math.random()*.25,toneMappingExposure:1.05+Math.random()*.2},layers:y}}function DR(t){if(t.type==="waveform"){const e=["circular","horizontal","ribbon3d"];return{mode:e[Math.floor(Math.random()*e.length)],amplitude:parseFloat((1+Math.random()*1.6).toFixed(1)),thickness:parseFloat((2.5+Math.random()*4.5).toFixed(1)),waveformSmoothing:parseFloat((.5+Math.random()*.35).toFixed(2)),glowIntensity:parseFloat((2+Math.random()*2).toFixed(1)),sampleCount:[128,256,384,512][Math.floor(Math.random()*4)],radius:parseFloat((1.4+Math.random()*1.2).toFixed(1)),depth3D:parseFloat((.5+Math.random()*1.2).toFixed(1)),displacementIntensity:parseFloat((.8+Math.random()*1.4).toFixed(1)),mirror:Math.random()>.4}}else if(t.type==="spectrum"){const e=["verticalBars","circularRadial","radialRings"];return{mode:e[Math.floor(Math.random()*e.length)],barCount:[24,32,48,64][Math.floor(Math.random()*4)],barWidth:parseFloat((.4+Math.random()*.55).toFixed(2)),maxHeight:parseFloat((1+Math.random()*1.8).toFixed(1)),innerRadius:parseFloat((.8+Math.random()*1.4).toFixed(1)),showPeaks:Math.random()>.4,mirror:Math.random()>.5}}else if(t.type==="particles"){const e=["ambientVortex","radialExplosion","flowField"];return{behavior:e[Math.floor(Math.random()*e.length)],count:Math.floor(600+Math.random()*2e3),size:parseFloat((.8+Math.random()*1.2).toFixed(1)),speed:parseFloat((.6+Math.random()*1.4).toFixed(1)),dispersion:parseFloat((3+Math.random()*3.5).toFixed(1)),beatExplosionForce:parseFloat((2+Math.random()*4.5).toFixed(1)),trebleTwinkle:parseFloat((1+Math.random()*2).toFixed(1)),connectLines:Math.random()>.6,connectionDistance:parseFloat((.6+Math.random()*1).toFixed(1))}}else if(t.type==="geometry"){const e=["icosahedron","torusKnot","morphingGeosphere","cyberCube","dodecahedron"],n=["wireframe","faceted","metallicPBR"],i=["bass","mid","treble","rms"];return{shape:e[Math.floor(Math.random()*e.length)],shadingStyle:n[Math.floor(Math.random()*n.length)],noiseDistortion:parseFloat((.3+Math.random()*1).toFixed(2)),distortionBand:i[Math.floor(Math.random()*i.length)],pulseIntensity:parseFloat((.4+Math.random()*1.4).toFixed(2)),rotationSpeed:[parseFloat((Math.random()*.6-.3).toFixed(2)),parseFloat((.2+Math.random()*.8).toFixed(2)),parseFloat((Math.random()*.4-.2).toFixed(2))]}}else if(t.type==="background"){const e=["solid","gradient","animatedNebula","synthwaveGrid","hypnoticTunnel","liquidAurora","digitalRain","retroCRT"],n=e[Math.floor(Math.random()*e.length)],i=n==="animatedNebula"||n==="hypnoticTunnel"?!0:n==="solid"||n==="retroCRT"?!1:Math.random()>.65;return{mode:n,seed:parseFloat((Math.random()*1e3).toFixed(2)),showStars:i,starDensity:parseFloat((.2+Math.random()*.5).toFixed(2)),starSpeed:parseFloat((.6+Math.random()*1.4).toFixed(1)),gridDensity:Math.floor(20+Math.random()*28),scanlineIntensity:parseFloat((.25+Math.random()*.5).toFixed(2)),gradientAngle:Math.floor(Math.random()*360),animationSpeed:parseFloat((.6+Math.random()*1.2).toFixed(1)),audioReactiveZoom:parseFloat((.1+Math.random()*.6).toFixed(1)),grainIntensity:parseFloat((.08+Math.random()*.22).toFixed(2)),vignetteStrength:parseFloat((.3+Math.random()*.35).toFixed(2))}}return{}}function IR(t){const e=Math.floor(Math.random()*360),n=Math.random()>.5?180:120,i=rs(e,95,55),r=rs((e+n)%360,90,55),s=rs((e+90)%360,90,60),a={opacity:parseFloat((.8+Math.random()*.2).toFixed(2)),blendMode:Math.random()>.3?"additive":"normal"};return"color"in t&&(a.color=i,a.secondaryColor=r),"primaryColor"in t&&(a.primaryColor=i),"secondaryColor"in t&&(a.secondaryColor=r),"accentColor"in t&&(a.accentColor=s),a}function LR(){return{masterSensitivity:parseFloat((.9+Math.random()*.8).toFixed(2)),bassSensitivity:parseFloat((1+Math.random()*1.2).toFixed(2)),midSensitivity:parseFloat((.8+Math.random()*.7).toFixed(2)),trebleSensitivity:parseFloat((.8+Math.random()*.8).toFixed(2)),globalSmoothing:parseFloat((.72+Math.random()*.16).toFixed(2))}}function UR(){return{bloomIntensity:parseFloat((.9+Math.random()*1.8).toFixed(1)),bloomRadius:parseFloat((.35+Math.random()*.45).toFixed(2)),bloomThreshold:parseFloat((.2+Math.random()*.3).toFixed(2)),grainIntensity:parseFloat((.1+Math.random()*.25).toFixed(2)),vignetteIntensity:parseFloat((.3+Math.random()*.35).toFixed(2))}}function rs(t,e,n){n/=100;const i=e*Math.min(n,1-n)/100,r=s=>{const a=(s+t/30)%12,o=n-i*Math.max(Math.min(a-3,9-a,1),-1);return Math.round(255*o).toString(16).padStart(2,"0")};return`#${r(0)}${r(8)}${r(4)}`}const B_="audio_reactive_studio_presets_v2",z_="audio_reactive_studio_last_preset_id";function FR(){if(typeof window>"u")return JSON.parse(JSON.stringify(li));try{const t=localStorage.getItem(B_);if(!t)return sa(li),JSON.parse(JSON.stringify(li));const e=JSON.parse(t);if(!Array.isArray(e)||e.length===0)return sa(li),JSON.parse(JSON.stringify(li));const n=e.filter(s=>!s.isBuiltIn),i=new Set(n.map(s=>s.id)),r=[];for(const s of li)r.push(JSON.parse(JSON.stringify(s)));for(const s of n)r.push(s);return r}catch(t){return console.warn("Failed to load presets from localStorage, using default presets:",t),JSON.parse(JSON.stringify(li))}}function sa(t){if(!(typeof window>"u"))try{localStorage.setItem(B_,JSON.stringify(t))}catch(e){console.error("Failed to save presets to localStorage:",e)}}function qa(t){if(!(typeof window>"u"))try{localStorage.setItem(z_,t)}catch{}}function kR(){if(typeof window>"u")return null;try{return localStorage.getItem(z_)}catch{return null}}function OR(){const t=JSON.parse(JSON.stringify(li));return sa(t),t}function bg(t,e){let n="#00f0ff",i="#ff007f",r="#fcee0a",s="#080810",a="#00f0ff";for(const o of t){const l=o;l.primaryColor&&(n=l.primaryColor),l.secondaryColor&&(i=l.secondaryColor),l.accentColor&&(r=l.accentColor),l.glowColor&&(a=l.glowColor),o.type==="background"&&l.primaryColor&&(s=l.primaryColor)}return{id:`pal-${Date.now()}`,name:e,primary:n,secondary:i,accent:r,background:s,glow:a}}const Eg=FR(),Tg=kR(),Us=(Tg?Eg.find(t=>t.id===Tg):null)||Eg[0]||li[0],Cg={id:`proj-${Date.now()}`,name:Us.name,version:"1.0.0",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),aspectRatio:"16:9",previewQuality:"1080p",reactivity:{...Us.reactivity},postProcessing:{...Us.postProcessing},layers:JSON.parse(JSON.stringify(Us.layers)),activePresetId:Us.id},en=ZS((t,e)=>{var n;return{project:Cg,isProjectDirty:!1,audioMetadata:null,audioBuffer:null,isPlaying:!1,currentTime:0,duration:0,volume:.8,isMuted:!1,isLooping:!0,currentAudioData:null,availablePresets:[...li],activePreset:Us,selectedLayerId:((n=Cg.layers[0])==null?void 0:n.id)||null,activeInspectorTab:"visual",showGridGuides:!1,canvasScaleMode:"fit",isExportModalOpen:!1,exportProgress:null,loadAudioFile:async i=>{try{const r=await ct.loadAudioFile(i);t({audioMetadata:r,audioBuffer:ct.getAudioBuffer(),duration:r.duration,currentTime:0,isPlaying:!1}),st.syncLayers(e().project.layers),ct.detectBpmFromBuffer().catch(()=>{})}catch(r){console.error("Failed to load audio file:",r)}},play:()=>{ct.play(),t({isPlaying:!0})},pause:()=>{ct.pause(),t({isPlaying:!1,currentTime:ct.getCurrentTime()})},stop:()=>{ct.stop(),t({isPlaying:!1,currentTime:0})},seek:i=>{ct.seek(i),t({currentTime:i})},setVolume:i=>{ct.setVolume(i),t({volume:i,isMuted:i===0})},toggleMute:()=>{!e().isMuted?(ct.setVolume(0),t({isMuted:!0})):(ct.setVolume(e().volume||.8),t({isMuted:!1}))},toggleLoop:()=>{t(i=>({isLooping:!i.isLooping}))},updateCurrentTime:i=>{t({currentTime:i})},setAudioAnalysisData:i=>{t({currentAudioData:i})},recheckBpm:async()=>{const i=await ct.detectBpmFromBuffer(),r=e().currentAudioData;return r&&t({currentAudioData:{...r,beat:{...r.beat,bpm:i,bpmConfidence:1}}}),i},setManualBpm:i=>{ct.setManualBpm(i);const r=e().currentAudioData;r&&t({currentAudioData:{...r,beat:{...r.beat,bpm:i,bpmConfidence:1}}})},multiplyBpm:i=>{const r=ct.multiplyBpm(i),s=e().currentAudioData;s&&t({currentAudioData:{...s,beat:{...s.beat,bpm:r,bpmConfidence:1}}})},addLayer:i=>{const r=`layer-${i}-${Date.now()}`;let s;i==="waveform"?s={id:r,name:"Waveform Layer",type:"waveform",enabled:!0,opacity:1,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"circular",thickness:2,amplitude:1.5,sampleCount:256,glowIntensity:2,primaryColor:"#00f0ff",secondaryColor:"#ff007f",colorGradientType:"radial",radius:1.8,depth3D:.5,waveformSmoothing:.2,displacementIntensity:1.2,mirror:!1}:i==="spectrum"?s={id:r,name:"Frequency Spectrum",type:"spectrum",enabled:!0,opacity:.9,blendMode:"additive",transform:{position:[0,-1.5,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"verticalBars",barCount:40,barWidth:.8,maxHeight:1.8,innerRadius:1.2,minFrequencyHz:20,maxFrequencyHz:16e3,logarithmicScale:!0,primaryColor:"#00f0ff",secondaryColor:"#a855f7",barRoundness:.5,glowIntensity:1.8,mirror:!0,showPeaks:!0,peakDecaySpeed:1.5}:i==="particles"?s={id:r,name:"Particle System",type:"particles",enabled:!0,opacity:.85,blendMode:"additive",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],count:1e3,size:1.2,speed:1,behavior:"ambientVortex",dispersion:4.5,color:"#00f0ff",secondaryColor:"#ff007f",connectLines:!1,connectionDistance:.8,connectionOpacity:.3,beatExplosionForce:3.5,trebleTwinkle:1.8,lifetime:4,particleShape:"circle"}:i==="geometry"?s={id:r,name:"3D Geometry",type:"geometry",enabled:!0,opacity:.9,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],shape:"icosahedron",shadingStyle:"faceted",subdivisions:2,wireframeThickness:1.5,noiseDistortion:.6,distortionBand:"bass",rotationSpeed:[.2,.4,.1],pulseIntensity:.7,primaryColor:"#00f0ff",accentColor:"#ff007f",metallicRoughness:.3,glowIntensity:1.5}:s={id:r,name:"Background Layer",type:"background",enabled:!0,opacity:1,blendMode:"normal",transform:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},reactivityMappings:[],mode:"animatedNebula",primaryColor:"#070814",secondaryColor:"#1a052b",accentColor:"#00f0ff",gradientAngle:45,grainIntensity:.2,vignetteStrength:.5,animationSpeed:1,audioReactiveZoom:.4,showStars:!0,starDensity:.35,starSpeed:1,seed:42,gridDensity:32,scanlineIntensity:.45,reactivityIntensity:1,mediaBlur:0};const a=[...e().project.layers,s];return t({project:{...e().project,layers:a},selectedLayerId:r,activeInspectorTab:"visual",isProjectDirty:!0}),st.syncLayers(a),r},removeLayer:i=>{var a;const r=e().project.layers.filter(o=>o.id!==i),s=e().selectedLayerId===i?((a=r[0])==null?void 0:a.id)||null:e().selectedLayerId;t({project:{...e().project,layers:r},selectedLayerId:s,isProjectDirty:!0}),st.syncLayers(r)},duplicateLayer:i=>{const r=e().project.layers.find(l=>l.id===i);if(!r)return"";const s=`layer-${r.type}-${Date.now()}`,a={...JSON.parse(JSON.stringify(r)),id:s,name:`${r.name} (Copy)`},o=[...e().project.layers,a];return t({project:{...e().project,layers:o},selectedLayerId:s,activeInspectorTab:"visual",isProjectDirty:!0}),st.syncLayers(o),s},reorderLayers:(i,r)=>{const s=[...e().project.layers],[a]=s.splice(i,1);s.splice(r,0,a),t({project:{...e().project,layers:s},isProjectDirty:!0}),st.syncLayers(s)},updateLayerConfig:(i,r)=>{const s=e().project.layers.map(a=>a.id===i?{...a,...r}:a);t({project:{...e().project,layers:s},isProjectDirty:!0}),st.syncLayers(s)},toggleLayerEnabled:i=>{const r=e().project.layers.map(s=>s.id===i?{...s,enabled:!s.enabled}:s);t({project:{...e().project,layers:r},isProjectDirty:!0}),st.syncLayers(r)},setSelectedLayerId:i=>{t(r=>({selectedLayerId:i,activeInspectorTab:r.activeInspectorTab==="global"?"visual":r.activeInspectorTab}))},setAspectRatio:i=>{st.setAspectRatio(i),t(r=>({project:{...r.project,aspectRatio:i},isProjectDirty:!0}))},setPreviewQuality:i=>{t(r=>({project:{...r.project,previewQuality:i},isProjectDirty:!0}))},updateGlobalReactivity:i=>{t(r=>({project:{...r.project,reactivity:{...r.project.reactivity,...i}},isProjectDirty:!0}))},updatePostProcessing:i=>{st.updatePostProcessing(i),t(r=>({project:{...r.project,postProcessing:{...r.project.postProcessing,...i}},isProjectDirty:!0}))},setProjectName:i=>{t(r=>({project:{...r.project,name:i},isProjectDirty:!0}))},applyPreset:i=>{const r=e().availablePresets.find(a=>a.id===i);if(!r)return;const s=JSON.parse(JSON.stringify(r.layers));st.syncLayers(s),st.updatePostProcessing(r.postProcessing),qa(r.id),t(a=>{var o;return{activePreset:r,project:{...a.project,name:r.name,reactivity:{...r.reactivity},postProcessing:{...r.postProcessing},layers:s,activePresetId:r.id},selectedLayerId:((o=s[0])==null?void 0:o.id)||null,activeInspectorTab:"visual",isProjectDirty:!1}})},updateActivePreset:()=>{const i=e(),r=i.activePreset;if(!r)return null;const s=JSON.parse(JSON.stringify(i.project.layers)),a=bg(s,r.name),o={...r,updatedAt:Date.now(),palette:a,reactivity:{...i.project.reactivity},postProcessing:{...i.project.postProcessing},layers:s},l=i.availablePresets.map(c=>c.id===r.id?o:c);return sa(l),qa(o.id),t({activePreset:o,availablePresets:l,isProjectDirty:!1}),o},saveCurrentAsPreset:(i,r="custom")=>{const s=e(),a=JSON.parse(JSON.stringify(s.project.layers)),o=bg(a,`${i} Palette`),l={id:`custom-preset-${Date.now()}`,name:i,category:r,description:"Custom user visual preset",isBuiltIn:!1,updatedAt:Date.now(),palette:o,reactivity:{...s.project.reactivity},postProcessing:{...s.project.postProcessing},layers:a},c=[...s.availablePresets,l];return sa(c),qa(l.id),t(f=>({availablePresets:c,activePreset:l,project:{...f.project,name:l.name,activePresetId:l.id},isProjectDirty:!1})),l},deletePreset:i=>{var o;const r=e(),s=r.availablePresets.filter(l=>l.id!==i),a=s.length>0?s:JSON.parse(JSON.stringify(li));if(sa(a),((o=r.activePreset)==null?void 0:o.id)===i){const l=a[0],c=JSON.parse(JSON.stringify(l.layers));st.syncLayers(c),st.updatePostProcessing(l.postProcessing),qa(l.id),t(f=>{var p;return{availablePresets:a,activePreset:l,project:{...f.project,name:l.name,reactivity:{...l.reactivity},postProcessing:{...l.postProcessing},layers:c,activePresetId:l.id},selectedLayerId:((p=c[0])==null?void 0:p.id)||null,isProjectDirty:!1}})}else t({availablePresets:a})},deleteUserPreset:i=>{e().deletePreset(i)},resetAllPresetsToDefault:()=>{const i=OR(),r=i[0],s=JSON.parse(JSON.stringify(r.layers));st.syncLayers(s),st.updatePostProcessing(r.postProcessing),qa(r.id),t(a=>{var o;return{availablePresets:i,activePreset:r,project:{...a.project,name:r.name,reactivity:{...r.reactivity},postProcessing:{...r.postProcessing},layers:s,activePresetId:r.id},selectedLayerId:((o=s[0])==null?void 0:o.id)||null,isProjectDirty:!1}})},randomizeParameters:()=>{const i=NR();st.syncLayers(i.layers),st.updatePostProcessing(i.postProcessing),t(r=>{var s;return{activePreset:i,project:{...r.project,reactivity:{...i.reactivity},postProcessing:{...i.postProcessing},layers:i.layers,activePresetId:i.id},selectedLayerId:((s=i.layers[0])==null?void 0:s.id)||null,activeInspectorTab:"visual",isProjectDirty:!0}})},setActiveInspectorTab:i=>t({activeInspectorTab:i}),setShowGridGuides:i=>t({showGridGuides:i}),setCanvasScaleMode:i=>t({canvasScaleMode:i}),setIsExportModalOpen:i=>t({isExportModalOpen:i}),setExportProgress:i=>t({exportProgress:i}),startExport:async i=>{try{return await wg.startExport(i,s=>{t({exportProgress:s})})}catch(r){throw console.error("Export failed:",r),r}},cancelExport:()=>{wg.cancelExport(),t({exportProgress:null})}}}),BR=[{id:"custom",label:"Custom"},{id:"cyberpunk",label:"Cyberpunk"},{id:"neon",label:"Neon"},{id:"darkTechno",label:"Dark Techno"},{id:"minimal",label:"Minimal"},{id:"liquid",label:"Liquid"},{id:"organic",label:"Organic"},{id:"futuristic",label:"Futuristic"},{id:"abstract",label:"Abstract"}],zR=({isOpen:t,mode:e,onClose:n})=>{const{activePreset:i,saveCurrentAsPreset:r,updateActivePreset:s,deletePreset:a,project:o}=en(),[l,c]=qe.useState("update"),[f,p]=qe.useState(""),[h,m]=qe.useState("custom"),[y,v]=qe.useState(null);if(qe.useEffect(()=>{t&&(v(null),i?(p(`${i.name} (Copy)`),m(i.category||"custom"),c("update")):(p(`${o.name||"My Visual"} Preset`),c("new")))},[t,i,o.name]),!t)return null;const g=()=>{const _=s();_&&(v(`Successfully updated "${_.name}"!`),setTimeout(()=>{n()},750))},u=_=>{if(_.preventDefault(),!f.trim())return;const M=r(f.trim(),h);v(`Successfully saved new preset "${M.name}"!`),setTimeout(()=>{n()},750)},x=()=>{i&&(i.name,a(i.id),n())};return d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in",children:d.jsxs("div",{className:"bg-studio-900 border border-studio-750 rounded-2xl w-full max-w-md shadow-2xl shadow-black/80 overflow-hidden text-slate-200",children:[d.jsxs("div",{className:"px-5 py-4 border-b border-studio-800 flex items-center justify-between bg-studio-950/60",children:[d.jsxs("div",{className:"flex items-center space-x-2.5",children:[d.jsx("div",{className:`p-2 rounded-lg ${e==="delete"?"bg-rose-500/20 text-rose-400":"bg-cyan-500/20 text-studio-accent"}`,children:e==="delete"?d.jsx(Dc,{className:"w-5 h-5"}):d.jsx(_y,{className:"w-5 h-5"})}),d.jsxs("div",{children:[d.jsx("h2",{className:"text-sm font-bold text-white tracking-wide",children:e==="delete"?"Delete Preset":"Preset Management"}),d.jsx("p",{className:"text-[11px] text-slate-400",children:e==="delete"?"Permanently remove preset from storage":"Update current preset or create a new custom preset"})]})]}),d.jsx("button",{onClick:n,className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-studio-800 transition-colors",children:d.jsx(Iy,{className:"w-4 h-4"})})]}),y?d.jsxs("div",{className:"p-8 flex flex-col items-center justify-center text-center space-y-3",children:[d.jsx(Xx,{className:"w-12 h-12 text-emerald-400 animate-bounce"}),d.jsx("p",{className:"text-sm font-semibold text-emerald-300",children:y}),d.jsx("p",{className:"text-xs text-slate-400",children:"Saved permanently in LocalStorage."})]}):e==="delete"?d.jsxs("div",{className:"p-6 space-y-5",children:[d.jsxs("div",{className:"bg-rose-950/30 border border-rose-800/50 rounded-xl p-4 flex items-start space-x-3 text-xs text-rose-200",children:[d.jsx(WS,{className:"w-5 h-5 text-rose-400 shrink-0 mt-0.5"}),d.jsxs("div",{children:[d.jsx("p",{className:"font-semibold text-rose-300",children:"Permanent Action"}),d.jsxs("p",{className:"mt-1 text-slate-300 leading-relaxed",children:["Are you sure you want to delete preset"," ",d.jsxs("span",{className:"font-bold text-white",children:['"',i==null?void 0:i.name,'"']}),"? It will be permanently removed from your studio storage."]})]})]}),d.jsxs("div",{className:"flex items-center justify-end space-x-3 pt-2",children:[d.jsx("button",{type:"button",onClick:n,className:"px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-studio-800 transition-colors",children:"Cancel"}),d.jsxs("button",{type:"button",onClick:x,className:"flex items-center space-x-1.5 bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-lg shadow-rose-600/30 transition-all active:scale-95",children:[d.jsx(Dc,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Delete Preset"})]})]})]}):d.jsxs("div",{className:"p-5 space-y-5",children:[d.jsxs("div",{className:"grid grid-cols-2 p-1 bg-studio-950 rounded-xl border border-studio-800",children:[d.jsxs("button",{type:"button",onClick:()=>c("update"),className:`flex items-center justify-center space-x-2 py-2 rounded-lg text-xs font-bold transition-all ${l==="update"?"bg-studio-800 text-white shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[d.jsx(fa,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Update Active"})]}),d.jsxs("button",{type:"button",onClick:()=>c("new"),className:`flex items-center justify-center space-x-2 py-2 rounded-lg text-xs font-bold transition-all ${l==="new"?"bg-studio-800 text-white shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[d.jsx(s0,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Save as New"})]})]}),l==="update"?d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"bg-studio-950/80 rounded-xl p-4 border border-studio-800/80 space-y-2.5",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-xs text-slate-400 font-medium",children:"Target Preset:"}),d.jsx("span",{className:"text-xs font-bold text-studio-accent px-2 py-0.5 bg-cyan-950/50 border border-cyan-800/50 rounded-full",children:(i==null?void 0:i.name)||"Current"})]}),d.jsxs("div",{className:"flex items-center space-x-4 text-[11px] text-slate-400 pt-1 border-t border-studio-850",children:[d.jsxs("span",{className:"flex items-center gap-1",children:[d.jsx(cp,{className:"w-3 h-3 text-slate-400"}),o.layers.length," Layers"]}),d.jsxs("span",{className:"flex items-center gap-1",children:[d.jsx(dy,{className:"w-3 h-3 text-slate-400"}),i!=null&&i.isBuiltIn?"Standard Template":"Custom Preset"]})]}),d.jsxs("p",{className:"text-[11px] text-slate-400 leading-relaxed pt-1",children:["This will overwrite ",d.jsx("span",{className:"text-slate-200 font-medium",children:i==null?void 0:i.name})," with your active layer parameters, colors, audio reactivity curves, and bloom settings permanently."]})]}),d.jsxs("div",{className:"flex items-center justify-end space-x-2.5 pt-2",children:[d.jsx("button",{type:"button",onClick:n,className:"px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-studio-800 transition-colors",children:"Cancel"}),d.jsxs("button",{type:"button",onClick:g,className:"flex items-center space-x-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-md shadow-cyan-500/20 transition-all active:scale-95",children:[d.jsx(fa,{className:"w-3.5 h-3.5 stroke-[2.5]"}),d.jsx("span",{children:"Update Preset"})]})]})]}):d.jsxs("form",{onSubmit:u,className:"space-y-4",children:[d.jsxs("div",{className:"space-y-1.5",children:[d.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Preset Title"}),d.jsx("input",{type:"text",required:!0,value:f,onChange:_=>p(_.target.value),placeholder:"e.g. Neon Cyber Odyssey",className:"w-full bg-studio-950 border border-studio-750 focus:border-studio-accent rounded-lg px-3 py-2 text-xs font-medium text-white outline-none transition-colors"})]}),d.jsxs("div",{className:"space-y-1.5",children:[d.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Category Archetype"}),d.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:BR.map(_=>d.jsx("button",{type:"button",onClick:()=>m(_.id),className:`py-1.5 px-2 rounded-lg text-[11px] font-semibold border transition-all truncate ${h===_.id?"bg-studio-accent text-slate-950 border-studio-accent shadow-sm":"bg-studio-950 text-slate-400 border-studio-800 hover:border-studio-700 hover:text-slate-200"}`,children:_.label},_.id))})]}),d.jsxs("div",{className:"flex items-center justify-end space-x-2.5 pt-2",children:[d.jsx("button",{type:"button",onClick:n,className:"px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-studio-800 transition-colors",children:"Cancel"}),d.jsxs("button",{type:"submit",disabled:!f.trim(),className:"flex items-center space-x-1.5 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-md shadow-pink-500/20 transition-all disabled:opacity-50 active:scale-95",children:[d.jsx(s0,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Save New Preset"})]})]})]})]})]})})},jR=()=>{const{project:t,availablePresets:e,activePreset:n,applyPreset:i,randomizeParameters:r,setAspectRatio:s,setProjectName:a,setIsExportModalOpen:o,audioMetadata:l}=en(),[c,f]=qe.useState(!1),[p,h]=qe.useState("save"),m=qe.useRef(null),y=M=>{i(M.target.value)},v=M=>{s(M)},g=()=>{h("save"),f(!0)},u=()=>{h("delete"),f(!0)},x=()=>{const M="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t,null,2)),A=document.createElement("a");A.href=M,A.download=`${t.name.replace(/\s+/g,"_")}_project.json`,document.body.appendChild(A),A.click(),document.body.removeChild(A)},_=M=>{var C;const A=(C=M.target.files)==null?void 0:C[0];if(!A)return;const T=new FileReader;T.onload=R=>{var w,S;try{const N=JSON.parse((w=R.target)==null?void 0:w.result);N&&N.layers&&(en.setState({project:N,selectedLayerId:((S=N.layers[0])==null?void 0:S.id)||null}),st.syncLayers(N.layers),st.updatePostProcessing(N.postProcessing||{}))}catch{alert("Invalid project JSON file")}},T.readAsText(A)};return d.jsxs("header",{className:"h-14 bg-studio-900 border-b border-studio-800 px-4 flex items-center justify-between select-none z-30",children:[d.jsx("input",{ref:m,type:"file",accept:".json,application/json",onChange:_,className:"hidden"}),d.jsxs("div",{className:"flex items-center space-x-3.5",children:[d.jsxs("div",{className:"flex items-center space-x-2",children:[d.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-studio-accent to-pink-500 flex items-center justify-center shadow-lg shadow-cyan-500/20",children:d.jsx(cp,{className:"w-4 h-4 text-black font-bold"})}),d.jsx("div",{children:d.jsxs("h1",{className:"text-sm font-bold tracking-wider text-slate-100 flex items-center gap-1.5",children:[d.jsx("span",{children:"VISUAL"}),d.jsx("span",{className:"text-studio-accent",children:"STUDIO"})]})})]}),d.jsx("div",{className:"h-5 w-px bg-studio-750"}),d.jsx("input",{type:"text",value:t.name,onChange:M=>a(M.target.value),className:"bg-transparent hover:bg-studio-850 focus:bg-studio-850 px-2.5 py-1 rounded text-xs font-medium text-slate-300 hover:text-slate-100 focus:text-white border border-transparent focus:border-studio-700 transition-all outline-none w-44",placeholder:"Project Title"}),d.jsxs("div",{className:"flex items-center space-x-1 border-l border-studio-800 pl-2",children:[d.jsx("button",{onClick:()=>{var M;return(M=m.current)==null?void 0:M.click()},title:"Import Project from JSON file",className:"p-1.5 rounded hover:bg-studio-800 text-slate-400 hover:text-slate-200 transition-colors",children:d.jsx(FS,{className:"w-3.5 h-3.5"})}),d.jsx("button",{onClick:x,title:"Export Project to JSON file",className:"p-1.5 rounded hover:bg-studio-800 text-slate-400 hover:text-slate-200 transition-colors",children:d.jsx(US,{className:"w-3.5 h-3.5"})})]}),l&&d.jsxs("div",{className:"hidden lg:flex items-center space-x-1.5 text-xs text-studio-accent bg-studio-950/80 px-2.5 py-1 rounded-full border border-studio-800",children:[d.jsx(IS,{className:"w-3 h-3 animate-pulse"}),d.jsx("span",{className:"truncate max-w-[160px]",children:l.fileName})]})]}),d.jsxs("div",{className:"flex items-center space-x-2.5",children:[d.jsxs("div",{className:"flex items-center space-x-1.5 bg-studio-950 px-2.5 py-1 rounded-lg border border-studio-800",children:[d.jsx(Sy,{className:"w-3.5 h-3.5 text-slate-400"}),d.jsx("span",{className:"text-xs text-slate-400 font-medium",children:"Template:"}),d.jsx("select",{value:(n==null?void 0:n.id)||"",onChange:y,"aria-label":"Preset Selection",className:"bg-transparent text-xs font-bold text-studio-accent outline-none cursor-pointer pr-1 transition-colors max-w-[150px] truncate",children:e.map(M=>d.jsxs("option",{value:M.id,className:"bg-studio-900 text-slate-200 font-normal",children:[M.name," ",M.isBuiltIn?"":"(Custom)"]},M.id))}),d.jsx("button",{onClick:g,title:`Save or update preset "${(n==null?void 0:n.name)||""}"`,className:"p-1 hover:bg-studio-800 text-slate-400 hover:text-studio-accent rounded transition-colors ml-0.5",children:d.jsx(_y,{className:"w-3.5 h-3.5"})}),d.jsx("button",{onClick:u,disabled:e.length<=1,title:e.length<=1?"Cannot delete the only available preset":`Delete preset "${(n==null?void 0:n.name)||""}"`,className:"p-1 hover:bg-rose-950/40 text-slate-400 hover:text-rose-400 disabled:opacity-25 disabled:cursor-not-allowed rounded transition-colors",children:d.jsx(Dc,{className:"w-3.5 h-3.5"})})]}),d.jsxs("button",{onClick:r,title:"Generate full cohesive random preset",className:"flex items-center space-x-1.5 bg-gradient-to-r from-purple-900/60 to-pink-900/60 hover:from-purple-800/80 hover:to-pink-800/80 text-pink-300 hover:text-pink-100 border border-pink-700/50 hover:border-pink-500 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-all active:scale-95",children:[d.jsx(ui,{className:"w-3.5 h-3.5 text-pink-400 animate-spin-slow"}),d.jsx("span",{children:"Randomize All"})]})]}),d.jsxs("div",{className:"flex items-center space-x-3",children:[d.jsxs("div",{className:"flex items-center bg-studio-950 p-0.5 rounded-lg border border-studio-800 text-xs",children:[d.jsx("button",{onClick:()=>v("16:9"),className:`px-2.5 py-1 rounded-md font-medium transition-all ${t.aspectRatio==="16:9"?"bg-studio-700 text-white shadow-sm":"text-slate-400 hover:text-slate-200"}`,title:"16:9 Landscape (YouTube)",children:"16:9"}),d.jsx("button",{onClick:()=>v("9:16"),className:`px-2.5 py-1 rounded-md font-medium transition-all ${t.aspectRatio==="9:16"?"bg-studio-700 text-white shadow-sm":"text-slate-400 hover:text-slate-200"}`,title:"9:16 Vertical (Reels / TikTok / Shorts)",children:"9:16"}),d.jsx("button",{onClick:()=>v("1:1"),className:`px-2.5 py-1 rounded-md font-medium transition-all ${t.aspectRatio==="1:1"?"bg-studio-700 text-white shadow-sm":"text-slate-400 hover:text-slate-200"}`,title:"1:1 Square (Instagram Post)",children:"1:1"})]}),d.jsxs("button",{onClick:()=>o(!0),className:"flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-95",children:[d.jsx(Qx,{className:"w-3.5 h-3.5 stroke-[2.5]"}),d.jsx("span",{children:"Export Video"})]})]}),d.jsx(zR,{isOpen:c,mode:p,onClose:()=>f(!1)})]})},VR=()=>{const{project:t,selectedLayerId:e,setSelectedLayerId:n,addLayer:i,removeLayer:r,duplicateLayer:s,reorderLayers:a,toggleLayerEnabled:o}=en(),[l,c]=qe.useState(!1),f=h=>{switch(h){case"waveform":return d.jsx(fh,{className:"w-3.5 h-3.5 text-cyan-400"});case"spectrum":return d.jsx(mh,{className:"w-3.5 h-3.5 text-purple-400"});case"particles":return d.jsx(ui,{className:"w-3.5 h-3.5 text-pink-400"});case"geometry":return d.jsx(ph,{className:"w-3.5 h-3.5 text-amber-400"});case"background":return d.jsx(gh,{className:"w-3.5 h-3.5 text-emerald-400"})}},p=h=>{i(h),c(!1)};return d.jsxs("aside",{className:"w-64 bg-studio-900 border-r border-studio-800 flex flex-col h-full select-none z-20",children:[d.jsxs("div",{className:"h-11 px-3.5 border-b border-studio-800 flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center space-x-2 text-xs font-bold text-slate-200 tracking-wider",children:[d.jsx(cp,{className:"w-4 h-4 text-studio-accent"}),d.jsx("span",{children:"VISUAL LAYERS"}),d.jsx("span",{className:"text-[10px] bg-studio-800 text-slate-400 px-1.5 py-0.2 rounded-full",children:t.layers.length})]}),d.jsxs("div",{className:"relative",children:[d.jsxs("button",{onClick:()=>c(!l),className:"flex items-center space-x-1 bg-studio-800 hover:bg-studio-700 text-slate-200 hover:text-white px-2 py-1 rounded text-xs font-semibold transition-colors",children:[d.jsx(jS,{className:"w-3.5 h-3.5 text-studio-accent"}),d.jsx("span",{children:"Add"})]}),l&&d.jsxs("div",{className:"absolute right-0 mt-1.5 w-48 bg-studio-850 border border-studio-700 rounded-lg shadow-xl py-1 z-50",children:[d.jsxs("button",{onClick:()=>p("waveform"),className:"w-full px-3 py-1.5 text-left text-xs text-slate-200 hover:bg-studio-750 flex items-center space-x-2",children:[d.jsx(fh,{className:"w-3.5 h-3.5 text-cyan-400"}),d.jsx("span",{children:"Waveform Visualizer"})]}),d.jsxs("button",{onClick:()=>p("spectrum"),className:"w-full px-3 py-1.5 text-left text-xs text-slate-200 hover:bg-studio-750 flex items-center space-x-2",children:[d.jsx(mh,{className:"w-3.5 h-3.5 text-purple-400"}),d.jsx("span",{children:"Frequency Spectrum"})]}),d.jsxs("button",{onClick:()=>p("particles"),className:"w-full px-3 py-1.5 text-left text-xs text-slate-200 hover:bg-studio-750 flex items-center space-x-2",children:[d.jsx(ui,{className:"w-3.5 h-3.5 text-pink-400"}),d.jsx("span",{children:"Particle System"})]}),d.jsxs("button",{onClick:()=>p("geometry"),className:"w-full px-3 py-1.5 text-left text-xs text-slate-200 hover:bg-studio-750 flex items-center space-x-2",children:[d.jsx(ph,{className:"w-3.5 h-3.5 text-amber-400"}),d.jsx("span",{children:"3D Geometry"})]}),d.jsxs("button",{onClick:()=>p("background"),className:"w-full px-3 py-1.5 text-left text-xs text-slate-200 hover:bg-studio-750 flex items-center space-x-2",children:[d.jsx(gh,{className:"w-3.5 h-3.5 text-emerald-400"}),d.jsx("span",{children:"Background Effect"})]})]})]})]}),d.jsx("div",{className:"flex-1 overflow-y-auto p-2 space-y-1.5",children:t.layers.length===0?d.jsx("div",{className:"text-center py-10 px-4 text-slate-500 text-xs",children:'No layers active. Click "+ Add" above to add a visual module.'}):t.layers.map((h,m)=>({layer:h,index:m})).reverse().map(({layer:h,index:m})=>{const y=e===h.id;return d.jsxs("div",{onClick:()=>n(h.id),className:`group relative rounded-lg border px-2.5 py-2 flex items-center justify-between cursor-pointer transition-all ${y?"bg-studio-800/90 border-studio-accent/70 shadow-sm shadow-studio-accent/10":"bg-studio-850/60 hover:bg-studio-850 border-studio-800/80 hover:border-studio-750"}`,children:[d.jsxs("div",{className:"flex items-center space-x-2.5 min-w-0 flex-1",children:[d.jsx("div",{className:"p-1 rounded bg-studio-950/60 border border-studio-800",children:f(h.type)}),d.jsxs("div",{className:"truncate",children:[d.jsx("div",{className:"text-xs font-semibold text-slate-200 truncate leading-tight",children:h.name}),d.jsx("div",{className:"text-[10px] text-slate-400 uppercase tracking-wider font-mono",children:h.type})]})]}),d.jsxs("div",{className:"flex items-center space-x-1 text-slate-400",children:[d.jsxs("div",{className:"flex flex-col",children:[d.jsx("button",{disabled:m===t.layers.length-1,onClick:v=>{v.stopPropagation(),a(m,m+1)},title:"Move layer up",className:"p-0.5 hover:text-white disabled:opacity-20 transition-opacity",children:d.jsx(PS,{className:"w-3 h-3"})}),d.jsx("button",{disabled:m===0,onClick:v=>{v.stopPropagation(),a(m,m-1)},title:"Move layer down",className:"p-0.5 hover:text-white disabled:opacity-20 transition-opacity",children:d.jsx(RS,{className:"w-3 h-3"})})]}),d.jsx("button",{onClick:v=>{v.stopPropagation(),o(h.id)},title:h.enabled?"Hide layer":"Show layer",className:`p-1 rounded hover:bg-studio-750 transition-colors ${h.enabled?"text-slate-300 hover:text-white":"text-slate-600"}`,children:h.enabled?d.jsx(ny,{className:"w-3.5 h-3.5"}):d.jsx(LS,{className:"w-3.5 h-3.5"})}),d.jsx("button",{onClick:v=>{v.stopPropagation(),s(h.id)},title:"Duplicate layer",className:"p-1 rounded hover:bg-studio-750 hover:text-white transition-colors opacity-0 group-hover:opacity-100",children:d.jsx(DS,{className:"w-3 h-3"})}),d.jsx("button",{onClick:v=>{v.stopPropagation(),r(h.id)},title:"Delete layer",className:"p-1 rounded hover:bg-red-950/60 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100",children:d.jsx(Dc,{className:"w-3 h-3"})})]})]},h.id)})})]})},HR=()=>{var c,f,p,h,m,y;const{project:t,selectedLayerId:e,activeInspectorTab:n,setActiveInspectorTab:i,updateLayerConfig:r,updateGlobalReactivity:s,updatePostProcessing:a}=en(),o=t.layers.find(v=>v.id===e),l=v=>{switch(v){case"waveform":return d.jsx(fh,{className:"w-4 h-4 text-cyan-400"});case"spectrum":return d.jsx(mh,{className:"w-4 h-4 text-purple-400"});case"particles":return d.jsx(ui,{className:"w-4 h-4 text-pink-400"});case"geometry":return d.jsx(ph,{className:"w-4 h-4 text-amber-400"});case"background":return d.jsx(gh,{className:"w-4 h-4 text-emerald-400"})}};return!o&&n!=="global"?d.jsxs("aside",{className:"w-80 bg-studio-900 border-l border-studio-800 flex flex-col h-full p-6 text-center select-none text-slate-500 text-xs justify-center items-center",children:[d.jsx(Sy,{className:"w-8 h-8 mb-2 opacity-30 text-studio-accent"}),d.jsx("p",{className:"font-semibold text-slate-400",children:"No Layer Selected"}),d.jsx("p",{className:"mt-1 text-[11px] text-slate-600",children:"Select a layer from the left stack to edit its properties."}),d.jsx("button",{onClick:()=>i("global"),className:"mt-4 px-3 py-1.5 rounded-lg bg-studio-800 text-slate-300 hover:text-white text-xs font-semibold border border-studio-700",children:"Open Global Optics & Bloom"})]}):d.jsxs("aside",{className:"w-80 bg-studio-900 border-l border-studio-800 flex flex-col h-full select-none z-20",children:[o&&d.jsxs("div",{className:"px-3.5 py-2.5 bg-studio-950/70 border-b border-studio-800 flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center space-x-2 min-w-0",children:[d.jsx("div",{className:"p-1 rounded bg-studio-900 border border-studio-750",children:l(o.type)}),d.jsxs("div",{className:"truncate",children:[d.jsx("span",{className:"text-xs font-bold text-white block truncate leading-tight",children:o.name}),d.jsxs("span",{className:"text-[10px] text-slate-400 uppercase tracking-wider font-mono",children:[o.type," layer"]})]})]}),d.jsxs("label",{className:"flex items-center space-x-1.5 text-[11px] text-slate-400 cursor-pointer",children:[d.jsx("input",{type:"checkbox",checked:o.enabled,onChange:v=>r(o.id,{enabled:v.target.checked}),className:"rounded border-studio-700 bg-studio-950 text-studio-accent"}),d.jsx("span",{children:"Active"})]})]}),d.jsx("div",{className:"h-10 border-b border-studio-800 px-2 flex items-center justify-between bg-studio-900",children:d.jsxs("div",{className:"flex space-x-1",children:[d.jsxs("button",{onClick:()=>i("visual"),className:`px-2.5 py-1 rounded text-xs font-semibold flex items-center space-x-1.5 transition-all ${n==="visual"?"bg-studio-800 text-studio-accent shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[d.jsx(ny,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Visual"})]}),d.jsxs("button",{onClick:()=>i("appearance"),className:`px-2.5 py-1 rounded text-xs font-semibold flex items-center space-x-1.5 transition-all ${n==="appearance"?"bg-studio-800 text-studio-accent shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[d.jsx(dy,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Style"})]}),d.jsxs("button",{onClick:()=>i("reactivity"),className:`px-2.5 py-1 rounded text-xs font-semibold flex items-center space-x-1.5 transition-all ${n==="reactivity"?"bg-studio-800 text-studio-accent shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[d.jsx(Uy,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Audio"})]}),d.jsxs("button",{onClick:()=>i("global"),className:`px-2.5 py-1 rounded text-xs font-semibold flex items-center space-x-1.5 transition-all ${n==="global"?"bg-studio-800 text-studio-accent shadow-sm":"text-slate-400 hover:text-slate-200"}`,title:"Global Post-Processing & Optics",children:[d.jsx(GS,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Global"})]})]})}),d.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-5 text-xs text-slate-300",children:[n==="visual"&&o&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex items-center justify-between border-b border-studio-800 pb-2",children:[d.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"Visual Geometry"}),d.jsxs("button",{onClick:()=>{const v=DR(o);r(o.id,v)},className:"flex items-center space-x-1.5 px-2 py-1 rounded bg-studio-800 hover:bg-studio-750 text-studio-accent border border-studio-700 font-semibold text-[11px] transition-all active:scale-95 shadow-sm",title:"Randomize shape and visual properties for this layer",children:[d.jsx(ui,{className:"w-3 h-3 text-studio-accent"}),d.jsx("span",{children:"Randomize Visual"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1",children:"Layer Name"}),d.jsx("input",{type:"text",value:o.name,onChange:v=>r(o.id,{name:v.target.value}),className:"w-full bg-studio-950 border border-studio-800 focus:border-studio-accent rounded-lg px-3 py-1.5 text-xs text-slate-100 outline-none"})]}),o.type==="waveform"&&d.jsx(GR,{config:o,onChange:v=>r(o.id,v)}),o.type==="spectrum"&&d.jsx(WR,{config:o,onChange:v=>r(o.id,v)}),o.type==="particles"&&d.jsx(XR,{config:o,onChange:v=>r(o.id,v)}),o.type==="geometry"&&d.jsx(qR,{config:o,onChange:v=>r(o.id,v)}),o.type==="background"&&d.jsx($R,{config:o,onChange:v=>r(o.id,v)})]}),n==="appearance"&&o&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex items-center justify-between border-b border-studio-800 pb-2",children:[d.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"Colors & Material"}),d.jsxs("button",{onClick:()=>{const v=IR(o);r(o.id,v)},className:"flex items-center space-x-1.5 px-2 py-1 rounded bg-studio-800 hover:bg-studio-750 text-pink-400 border border-studio-700 font-semibold text-[11px] transition-all active:scale-95 shadow-sm",title:"Randomize colors and styling for this layer",children:[d.jsx(ui,{className:"w-3 h-3 text-pink-400"}),d.jsx("span",{children:"Randomize Style"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-[11px] text-slate-400 block mb-1.5 font-medium",children:"Quick Color Palettes"}),d.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{name:"Neon Cyber",p:"#00f0ff",s:"#ff007f",a:"#a855f7"},{name:"Cyber Acid",p:"#fcee0a",s:"#ff007f",a:"#00f0ff"},{name:"Amber Rave",p:"#f59e0b",s:"#ef4444",a:"#94a3b8"},{name:"Deep Violet",p:"#8b5cf6",s:"#06b6d4",a:"#ec4899"},{name:"Emerald",p:"#10b981",s:"#06b6d4",a:"#3b82f6"},{name:"Monochrome",p:"#ffffff",s:"#64748b",a:"#94a3b8"}].map(v=>d.jsxs("button",{onClick:()=>{const g={};"color"in o&&(g.color=v.p),"primaryColor"in o&&(g.primaryColor=v.p),"secondaryColor"in o&&(g.secondaryColor=v.s),"accentColor"in o&&(g.accentColor=v.a),r(o.id,g)},className:"flex items-center space-x-1.5 px-2 py-1.5 rounded-lg bg-studio-950 hover:bg-studio-800 border border-studio-800 hover:border-studio-700 text-left transition-all",children:[d.jsxs("div",{className:"flex -space-x-1",children:[d.jsx("div",{className:"w-2.5 h-2.5 rounded-full border border-black",style:{backgroundColor:v.p}}),d.jsx("div",{className:"w-2.5 h-2.5 rounded-full border border-black",style:{backgroundColor:v.s}})]}),d.jsx("span",{className:"text-[10px] text-slate-300 truncate",children:v.name})]},v.name))})]}),("primaryColor"in o||"color"in o)&&d.jsxs("div",{children:[d.jsx("label",{className:"text-xs mb-1 block",children:"Primary Color"}),d.jsxs("div",{className:"flex items-center space-x-2",children:[d.jsx("input",{type:"color",value:o.primaryColor||o.color||"#00f0ff",onChange:v=>{"color"in o?r(o.id,{color:v.target.value}):r(o.id,{primaryColor:v.target.value})},className:"w-8 h-8 rounded border border-studio-700 bg-transparent cursor-pointer"}),d.jsx("input",{type:"text",value:o.primaryColor||o.color||"#00f0ff",onChange:v=>{"color"in o?r(o.id,{color:v.target.value}):r(o.id,{primaryColor:v.target.value})},className:"flex-1 bg-studio-950 border border-studio-800 rounded px-2.5 py-1 text-xs font-mono"})]})]}),"secondaryColor"in o&&d.jsxs("div",{children:[d.jsx("label",{className:"text-xs mb-1 block",children:"Secondary Color"}),d.jsxs("div",{className:"flex items-center space-x-2",children:[d.jsx("input",{type:"color",value:o.secondaryColor||"#ff007f",onChange:v=>r(o.id,{secondaryColor:v.target.value}),className:"w-8 h-8 rounded border border-studio-700 bg-transparent cursor-pointer"}),d.jsx("input",{type:"text",value:o.secondaryColor||"#ff007f",onChange:v=>r(o.id,{secondaryColor:v.target.value}),className:"flex-1 bg-studio-950 border border-studio-800 rounded px-2.5 py-1 text-xs font-mono"})]})]}),"accentColor"in o&&d.jsxs("div",{children:[d.jsx("label",{className:"text-xs mb-1 block",children:"Accent Rim Color"}),d.jsxs("div",{className:"flex items-center space-x-2",children:[d.jsx("input",{type:"color",value:o.accentColor||"#a855f7",onChange:v=>r(o.id,{accentColor:v.target.value}),className:"w-8 h-8 rounded border border-studio-700 bg-transparent cursor-pointer"}),d.jsx("input",{type:"text",value:o.accentColor||"#a855f7",onChange:v=>r(o.id,{accentColor:v.target.value}),className:"flex-1 bg-studio-950 border border-studio-800 rounded px-2.5 py-1 text-xs font-mono"})]})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Layer Opacity"}),d.jsxs("span",{className:"font-mono text-studio-accent",children:[((o.opacity??1)*100).toFixed(0),"%"]})]}),d.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.02",value:o.opacity??1,onChange:v=>r(o.id,{opacity:parseFloat(v.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-xs mb-1 block",children:"Layer Blend Mode"}),d.jsxs("select",{value:o.blendMode||"normal",onChange:v=>r(o.id,{blendMode:v.target.value}),className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none",children:[d.jsx("option",{value:"normal",children:"Normal"}),d.jsx("option",{value:"additive",children:"Additive (Glowing)"}),d.jsx("option",{value:"screen",children:"Screen"})]})]}),d.jsxs("div",{className:"pt-3 border-t border-studio-800",children:[d.jsxs("div",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5",children:[d.jsx(OS,{className:"w-3.5 h-3.5 text-studio-accent"}),d.jsx("span",{children:"Spatial Transform"})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-[11px] mb-1",children:[d.jsx("span",{children:"Pos X"}),d.jsx("span",{className:"font-mono text-studio-accent",children:((c=o.transform)==null?void 0:c.position[0].toFixed(1))||"0.0"})]}),d.jsx("input",{type:"range",min:"-6.0",max:"6.0",step:"0.1",value:((f=o.transform)==null?void 0:f.position[0])||0,onChange:v=>{var u,x;const g=[parseFloat(v.target.value),((u=o.transform)==null?void 0:u.position[1])||0,((x=o.transform)==null?void 0:x.position[2])||0];r(o.id,{transform:{...o.transform,position:g}})},className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-[11px] mb-1",children:[d.jsx("span",{children:"Pos Y"}),d.jsx("span",{className:"font-mono text-studio-accent",children:((p=o.transform)==null?void 0:p.position[1].toFixed(1))||"0.0"})]}),d.jsx("input",{type:"range",min:"-6.0",max:"6.0",step:"0.1",value:((h=o.transform)==null?void 0:h.position[1])||0,onChange:v=>{var u,x;const g=[((u=o.transform)==null?void 0:u.position[0])||0,parseFloat(v.target.value),((x=o.transform)==null?void 0:x.position[2])||0];r(o.id,{transform:{...o.transform,position:g}})},className:"w-full"})]})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-[11px] mb-1",children:[d.jsx("span",{children:"Scale"}),d.jsxs("span",{className:"font-mono text-studio-accent",children:[((m=o.transform)==null?void 0:m.scale[0].toFixed(2))||"1.00","x"]})]}),d.jsx("input",{type:"range",min:"0.2",max:"3.0",step:"0.05",value:((y=o.transform)==null?void 0:y.scale[0])||1,onChange:v=>{const g=parseFloat(v.target.value),u=[g,g,g];r(o.id,{transform:{...o.transform,scale:u}})},className:"w-full"})]})]})]}),n==="reactivity"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex items-center justify-between border-b border-studio-800 pb-2",children:[d.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"Audio Sensitivities"}),d.jsxs("button",{onClick:()=>{const v=LR();s(v)},className:"flex items-center space-x-1.5 px-2 py-1 rounded bg-studio-800 hover:bg-studio-750 text-purple-400 border border-studio-700 font-semibold text-[11px] transition-all active:scale-95 shadow-sm",title:"Randomize audio sensitivities",children:[d.jsx(ui,{className:"w-3 h-3 text-purple-400"}),d.jsx("span",{children:"Randomize Audio"})]})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Master Sensitivity"}),d.jsxs("span",{className:"font-mono text-studio-accent",children:[t.reactivity.masterSensitivity.toFixed(2),"x"]})]}),d.jsx("input",{type:"range",min:"0.1",max:"3.0",step:"0.05",value:t.reactivity.masterSensitivity,onChange:v=>s({masterSensitivity:parseFloat(v.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Bass / Kick Reactivity"}),d.jsxs("span",{className:"font-mono text-studio-accent",children:[t.reactivity.bassSensitivity.toFixed(2),"x"]})]}),d.jsx("input",{type:"range",min:"0.2",max:"3.0",step:"0.05",value:t.reactivity.bassSensitivity,onChange:v=>s({bassSensitivity:parseFloat(v.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Mid-Range Reactivity"}),d.jsxs("span",{className:"font-mono text-studio-accent",children:[t.reactivity.midSensitivity.toFixed(2),"x"]})]}),d.jsx("input",{type:"range",min:"0.2",max:"3.0",step:"0.05",value:t.reactivity.midSensitivity,onChange:v=>s({midSensitivity:parseFloat(v.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Treble / Highs Reactivity"}),d.jsxs("span",{className:"font-mono text-studio-accent",children:[t.reactivity.trebleSensitivity.toFixed(2),"x"]})]}),d.jsx("input",{type:"range",min:"0.2",max:"3.0",step:"0.05",value:t.reactivity.trebleSensitivity,onChange:v=>s({trebleSensitivity:parseFloat(v.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Temporal Smoothing"}),d.jsxs("span",{className:"font-mono text-studio-accent",children:[(t.reactivity.globalSmoothing*100).toFixed(0),"%"]})]}),d.jsx("input",{type:"range",min:"0.1",max:"0.95",step:"0.01",value:t.reactivity.globalSmoothing,onChange:v=>s({globalSmoothing:parseFloat(v.target.value)}),className:"w-full"})]})]}),n==="global"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex items-center justify-between border-b border-studio-800 pb-2",children:[d.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"Post-Processing & Bloom Glow"}),d.jsxs("button",{onClick:()=>{const v=UR();a(v)},className:"flex items-center space-x-1.5 px-2 py-1 rounded bg-studio-800 hover:bg-studio-750 text-amber-400 border border-studio-700 font-semibold text-[11px] transition-all active:scale-95 shadow-sm",title:"Randomize bloom, grain, and optics",children:[d.jsx(ui,{className:"w-3 h-3 text-amber-400"}),d.jsx("span",{children:"Randomize Optics"})]})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Bloom Glow Intensity"}),d.jsx("span",{className:"font-mono text-studio-accent",children:t.postProcessing.bloomIntensity.toFixed(1)})]}),d.jsx("input",{type:"range",min:"0.0",max:"4.0",step:"0.1",value:t.postProcessing.bloomIntensity,onChange:v=>a({bloomIntensity:parseFloat(v.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Bloom Diffusion Radius"}),d.jsx("span",{className:"font-mono text-studio-accent",children:t.postProcessing.bloomRadius.toFixed(2)})]}),d.jsx("input",{type:"range",min:"0.1",max:"1.5",step:"0.05",value:t.postProcessing.bloomRadius,onChange:v=>a({bloomRadius:parseFloat(v.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Film Grain Noise"}),d.jsxs("span",{className:"font-mono text-studio-accent",children:[(t.postProcessing.grainIntensity*100).toFixed(0),"%"]})]}),d.jsx("input",{type:"range",min:"0.0",max:"0.8",step:"0.02",value:t.postProcessing.grainIntensity,onChange:v=>a({grainIntensity:parseFloat(v.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Vignette Border Darkening"}),d.jsxs("span",{className:"font-mono text-studio-accent",children:[(t.postProcessing.vignetteIntensity*100).toFixed(0),"%"]})]}),d.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.05",value:t.postProcessing.vignetteIntensity,onChange:v=>a({vignetteIntensity:parseFloat(v.target.value)}),className:"w-full"})]})]})]})]})},GR=({config:t,onChange:e})=>d.jsxs("div",{className:"space-y-3 pt-2",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-xs mb-1 block",children:"Geometry Layout"}),d.jsxs("select",{value:t.mode,onChange:n=>e({mode:n.target.value}),className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none",children:[d.jsx("option",{value:"circular",children:"Circular Oscilloscope"}),d.jsx("option",{value:"horizontal",children:"Horizontal Wave"}),d.jsx("option",{value:"ribbon3d",children:"3D Ribbon Wave"})]})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Amplitude"}),d.jsx("span",{className:"font-mono text-studio-accent",children:(t.amplitude||1.5).toFixed(1)})]}),d.jsx("input",{type:"range",min:"0.2",max:"3.5",step:"0.1",value:t.amplitude||1.5,onChange:n=>e({amplitude:parseFloat(n.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Ribbon Thickness"}),d.jsx("span",{className:"font-mono text-studio-accent",children:(t.thickness||3).toFixed(1)})]}),d.jsx("input",{type:"range",min:"0.5",max:"12.0",step:"0.5",value:t.thickness||3,onChange:n=>e({thickness:parseFloat(n.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Waveform Fluid Smoothing"}),d.jsxs("span",{className:"font-mono text-studio-accent",children:[Math.round((t.waveformSmoothing??.65)*100),"%"]})]}),d.jsx("input",{type:"range",min:"0.1",max:"0.95",step:"0.05",value:t.waveformSmoothing??.65,onChange:n=>e({waveformSmoothing:parseFloat(n.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Glow & Core Radiance"}),d.jsxs("span",{className:"font-mono text-studio-accent",children:[(t.glowIntensity??2.2).toFixed(1),"x"]})]}),d.jsx("input",{type:"range",min:"0.5",max:"5.0",step:"0.2",value:t.glowIntensity??2.2,onChange:n=>e({glowIntensity:parseFloat(n.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Sample Density"}),d.jsx("span",{className:"font-mono text-studio-accent",children:t.sampleCount||256})]}),d.jsx("input",{type:"range",min:"64",max:"512",step:"64",value:t.sampleCount||256,onChange:n=>e({sampleCount:parseInt(n.target.value)}),className:"w-full"})]}),t.mode==="circular"&&d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Circle Radius"}),d.jsx("span",{className:"font-mono text-studio-accent",children:(t.radius||1.8).toFixed(1)})]}),d.jsx("input",{type:"range",min:"0.8",max:"3.5",step:"0.1",value:t.radius||1.8,onChange:n=>e({radius:parseFloat(n.target.value)}),className:"w-full"})]}),t.mode==="ribbon3d"&&d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"3D Ribbon Depth"}),d.jsx("span",{className:"font-mono text-studio-accent",children:(t.depth3D||.8).toFixed(1)})]}),d.jsx("input",{type:"range",min:"0.2",max:"2.5",step:"0.1",value:t.depth3D||.8,onChange:n=>e({depth3D:parseFloat(n.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Displacement Intensity"}),d.jsx("span",{className:"font-mono text-studio-accent",children:(t.displacementIntensity||1).toFixed(1)})]}),d.jsx("input",{type:"range",min:"0.0",max:"3.0",step:"0.1",value:t.displacementIntensity||1,onChange:n=>e({displacementIntensity:parseFloat(n.target.value)}),className:"w-full"})]})]}),WR=({config:t,onChange:e})=>d.jsxs("div",{className:"space-y-3 pt-2",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-xs mb-1 block",children:"Display Mode"}),d.jsxs("select",{value:t.mode,onChange:n=>e({mode:n.target.value}),className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none",children:[d.jsx("option",{value:"verticalBars",children:"Vertical Equalizer Bars"}),d.jsx("option",{value:"circularRadial",children:"Circular Radial Spikes"}),d.jsx("option",{value:"radialRings",children:"Concentric Frequency Rings"})]})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Bar Count"}),d.jsx("span",{className:"font-mono text-studio-accent",children:t.barCount})]}),d.jsx("input",{type:"range",min:"16",max:"96",step:"8",value:t.barCount,onChange:n=>e({barCount:parseInt(n.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Bar Width Ratio"}),d.jsxs("span",{className:"font-mono text-studio-accent",children:[((t.barWidth||.8)*100).toFixed(0),"%"]})]}),d.jsx("input",{type:"range",min:"0.2",max:"1.0",step:"0.05",value:t.barWidth||.8,onChange:n=>e({barWidth:parseFloat(n.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Max Height"}),d.jsx("span",{className:"font-mono text-studio-accent",children:t.maxHeight.toFixed(1)})]}),d.jsx("input",{type:"range",min:"0.5",max:"3.5",step:"0.1",value:t.maxHeight,onChange:n=>e({maxHeight:parseFloat(n.target.value)}),className:"w-full"})]}),t.mode==="circularRadial"&&d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Inner Circle Radius"}),d.jsx("span",{className:"font-mono text-studio-accent",children:(t.innerRadius||1.2).toFixed(1)})]}),d.jsx("input",{type:"range",min:"0.5",max:"3.0",step:"0.1",value:t.innerRadius||1.2,onChange:n=>e({innerRadius:parseFloat(n.target.value)}),className:"w-full"})]}),d.jsxs("div",{className:"flex items-center space-x-2 pt-1",children:[d.jsx("input",{type:"checkbox",id:"showPeaks",checked:t.showPeaks,onChange:n=>e({showPeaks:n.target.checked}),className:"rounded border-studio-700 bg-studio-950 text-studio-accent"}),d.jsx("label",{htmlFor:"showPeaks",className:"text-xs text-slate-300 cursor-pointer",children:"Show floating peak indicators"})]})]}),XR=({config:t,onChange:e})=>d.jsxs("div",{className:"space-y-3 pt-2",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-xs mb-1 block",children:"Motion Pattern"}),d.jsxs("select",{value:t.behavior||"ambientVortex",onChange:n=>e({behavior:n.target.value}),className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none",children:[d.jsx("option",{value:"ambientVortex",children:"Ambient Vortex Spiral"}),d.jsx("option",{value:"radialExplosion",children:"Bass Kick Shockwaves"}),d.jsx("option",{value:"flowField",children:"3D Noise Flow Field"})]})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Particle Count"}),d.jsx("span",{className:"font-mono text-studio-accent",children:t.count||1e3})]}),d.jsx("input",{type:"range",min:"100",max:"4000",step:"100",value:t.count||1e3,onChange:n=>e({count:parseInt(n.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Particle Size"}),d.jsx("span",{className:"font-mono text-studio-accent",children:(t.size||1.2).toFixed(1)})]}),d.jsx("input",{type:"range",min:"0.2",max:"3.5",step:"0.1",value:t.size||1.2,onChange:n=>e({size:parseFloat(n.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Movement Speed"}),d.jsx("span",{className:"font-mono text-studio-accent",children:(t.speed||1).toFixed(1)})]}),d.jsx("input",{type:"range",min:"0.2",max:"3.0",step:"0.1",value:t.speed||1,onChange:n=>e({speed:parseFloat(n.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Spatial Dispersion"}),d.jsx("span",{className:"font-mono text-studio-accent",children:(t.dispersion||4.5).toFixed(1)})]}),d.jsx("input",{type:"range",min:"1.0",max:"8.0",step:"0.5",value:t.dispersion||4.5,onChange:n=>e({dispersion:parseFloat(n.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Bass Explosion Impulse"}),d.jsx("span",{className:"font-mono text-studio-accent",children:(t.beatExplosionForce||3.5).toFixed(1)})]}),d.jsx("input",{type:"range",min:"0.0",max:"8.0",step:"0.5",value:t.beatExplosionForce||3.5,onChange:n=>e({beatExplosionForce:parseFloat(n.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Treble Twinkle Shimmer"}),d.jsx("span",{className:"font-mono text-studio-accent",children:(t.trebleTwinkle||1.5).toFixed(1)})]}),d.jsx("input",{type:"range",min:"0.0",max:"4.0",step:"0.2",value:t.trebleTwinkle||1.5,onChange:n=>e({trebleTwinkle:parseFloat(n.target.value)}),className:"w-full"})]}),d.jsxs("div",{className:"flex items-center space-x-2 pt-1",children:[d.jsx("input",{type:"checkbox",id:"connectLines",checked:t.connectLines||!1,onChange:n=>e({connectLines:n.target.checked}),className:"rounded border-studio-700 bg-studio-950 text-studio-accent"}),d.jsx("label",{htmlFor:"connectLines",className:"text-xs text-slate-300 cursor-pointer",children:"Enable Constellation Connection Lines"})]})]}),qR=({config:t,onChange:e})=>{var n,i;return d.jsxs("div",{className:"space-y-3 pt-2",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-xs mb-1 block",children:"Geometric Polyhedron"}),d.jsxs("select",{value:t.shape,onChange:r=>e({shape:r.target.value}),className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none",children:[d.jsx("option",{value:"icosahedron",children:"Icosahedron"}),d.jsx("option",{value:"torusKnot",children:"Torus Knot"}),d.jsx("option",{value:"morphingGeosphere",children:"Morphing Geosphere"}),d.jsx("option",{value:"dodecahedron",children:"Dodecahedron"}),d.jsx("option",{value:"cyberCube",children:"Cyber Cube"}),d.jsx("option",{value:"sphere",children:"Sphere"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-xs mb-1 block",children:"Material Shading"}),d.jsxs("select",{value:t.shadingStyle,onChange:r=>e({shadingStyle:r.target.value}),className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none",children:[d.jsx("option",{value:"wireframe",children:"Wireframe Holographic"}),d.jsx("option",{value:"faceted",children:"Faceted Low-Poly"}),d.jsx("option",{value:"metallicPBR",children:"Metallic PBR"})]})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Audio Noise Distortion"}),d.jsx("span",{className:"font-mono text-studio-accent",children:(t.noiseDistortion||.6).toFixed(2)})]}),d.jsx("input",{type:"range",min:"0.0",max:"1.5",step:"0.05",value:t.noiseDistortion||.6,onChange:r=>e({noiseDistortion:parseFloat(r.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-xs mb-1 block",children:"Distortion Driving Band"}),d.jsxs("select",{value:t.distortionBand||"bass",onChange:r=>e({distortionBand:r.target.value}),className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none",children:[d.jsx("option",{value:"bass",children:"Bass / Kick"}),d.jsx("option",{value:"mid",children:"Mid-Range / Synths"}),d.jsx("option",{value:"treble",children:"Treble / Cymbals"}),d.jsx("option",{value:"rms",children:"Overall Energy (RMS)"})]})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Bass Pulse Intensity"}),d.jsx("span",{className:"font-mono text-studio-accent",children:(t.pulseIntensity||.7).toFixed(2)})]}),d.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:t.pulseIntensity||.7,onChange:r=>e({pulseIntensity:parseFloat(r.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Rotation Speed"}),d.jsx("span",{className:"font-mono text-studio-accent",children:(((n=t.rotationSpeed)==null?void 0:n[1])||.4).toFixed(2)})]}),d.jsx("input",{type:"range",min:"0.0",max:"1.5",step:"0.05",value:((i=t.rotationSpeed)==null?void 0:i[1])||.4,onChange:r=>{const s=parseFloat(r.target.value);e({rotationSpeed:[s*.5,s,s*.25]})},className:"w-full"})]})]})},$R=({config:t,onChange:e})=>{const n=t.showStars??(t.mode==="animatedNebula"||t.mode==="hypnoticTunnel"||t.mode==="liquidAurora");return d.jsxs("div",{className:"space-y-4 pt-2",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-xs mb-1 block font-medium text-slate-300",children:"Background Style"}),d.jsxs("select",{value:t.mode,onChange:i=>{const r=i.target.value,s=r==="animatedNebula"||r==="hypnoticTunnel"||r==="liquidAurora"?!0:r==="solid"||r==="retroCRT"?!1:t.showStars??!1;e({mode:r,showStars:s})},className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-2.5 py-2 text-xs text-slate-200 outline-none focus:border-studio-accent font-medium",children:[d.jsx("option",{value:"solid",children:"Minimal Solid Studio"}),d.jsx("option",{value:"gradient",children:"Directional Studio Gradient"}),d.jsx("option",{value:"animatedNebula",children:"Animated Cosmic Nebula"}),d.jsx("option",{value:"synthwaveGrid",children:"Synthwave Cyber Grid"}),d.jsx("option",{value:"hypnoticTunnel",children:"Hypnotic Warp Tunnel"}),d.jsx("option",{value:"liquidAurora",children:"Liquid Aurora Waves"}),d.jsx("option",{value:"digitalRain",children:"Cyber Matrix Rain"}),d.jsx("option",{value:"retroCRT",children:"Analog VHS / CRT Studio"})]})]}),t.mode==="gradient"&&d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Gradient Angle"}),d.jsxs("span",{className:"font-mono text-studio-accent",children:[t.gradientAngle??45,"°"]})]}),d.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:t.gradientAngle??45,onChange:i=>e({gradientAngle:parseInt(i.target.value)}),className:"w-full"})]}),(t.mode==="synthwaveGrid"||t.mode==="hypnoticTunnel"||t.mode==="digitalRain")&&d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:t.mode==="digitalRain"?"Matrix Column Density":"Grid / Tunnel Density"}),d.jsx("span",{className:"font-mono text-studio-accent",children:t.gridDensity??32})]}),d.jsx("input",{type:"range",min:"12",max:"60",step:"2",value:t.gridDensity??32,onChange:i=>e({gridDensity:parseInt(i.target.value)}),className:"w-full"})]}),t.mode==="retroCRT"&&d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Scanline Intensity"}),d.jsxs("span",{className:"font-mono text-studio-accent",children:[Math.round((t.scanlineIntensity??.45)*100),"%"]})]}),d.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.05",value:t.scanlineIntensity??.45,onChange:i=>e({scanlineIntensity:parseFloat(i.target.value)}),className:"w-full"})]}),d.jsxs("div",{className:"p-3 bg-studio-950/70 rounded-xl border border-studio-800/80 space-y-3",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("label",{className:"text-xs font-semibold text-slate-200 flex items-center gap-1.5 cursor-pointer",children:[d.jsx(ui,{className:"w-3.5 h-3.5 text-cyan-400"}),d.jsx("span",{children:"Twinkling Starfield"})]}),d.jsx("input",{type:"checkbox",checked:n,onChange:i=>e({showStars:i.target.checked}),className:"rounded bg-studio-900 border-studio-700 text-cyan-500 focus:ring-0 cursor-pointer w-4 h-4"})]}),n&&d.jsxs("div",{className:"space-y-2.5 pt-1 border-t border-studio-800/60",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-[11px] mb-1 text-slate-400",children:[d.jsx("span",{children:"Star Density"}),d.jsxs("span",{className:"font-mono text-cyan-400",children:[Math.round((t.starDensity??.35)*100),"%"]})]}),d.jsx("input",{type:"range",min:"0.1",max:"1.0",step:"0.05",value:t.starDensity??.35,onChange:i=>e({starDensity:parseFloat(i.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-[11px] mb-1 text-slate-400",children:[d.jsx("span",{children:"Twinkle Speed"}),d.jsxs("span",{className:"font-mono text-cyan-400",children:[(t.starSpeed??1).toFixed(1),"x"]})]}),d.jsx("input",{type:"range",min:"0.2",max:"3.0",step:"0.1",value:t.starSpeed??1,onChange:i=>e({starSpeed:parseFloat(i.target.value)}),className:"w-full"})]}),d.jsxs("button",{onClick:()=>e({seed:parseFloat((Math.random()*1e3).toFixed(2))}),className:"w-full flex items-center justify-center space-x-1.5 py-1.5 px-2 bg-studio-900 hover:bg-studio-850 text-slate-300 hover:text-white rounded-lg text-[11px] font-medium border border-studio-750 transition-colors",children:[d.jsx(fa,{className:"w-3 h-3 text-cyan-400"}),d.jsx("span",{children:"Shuffle Star Pattern (New Seed)"})]})]})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Animation Speed"}),d.jsxs("span",{className:"font-mono text-studio-accent",children:[(t.animationSpeed??1).toFixed(1),"x"]})]}),d.jsx("input",{type:"range",min:"0.1",max:"3.0",step:"0.1",value:t.animationSpeed??1,onChange:i=>e({animationSpeed:parseFloat(i.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Audio Reactive Zoom Pulse"}),d.jsx("span",{className:"font-mono text-studio-accent",children:(t.audioReactiveZoom??.4).toFixed(1)})]}),d.jsx("input",{type:"range",min:"0.0",max:"1.5",step:"0.1",value:t.audioReactiveZoom??.4,onChange:i=>e({audioReactiveZoom:parseFloat(i.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Audio Reactivity Intensity"}),d.jsxs("span",{className:"font-mono text-studio-accent",children:[(t.reactivityIntensity??1).toFixed(1),"x"]})]}),d.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:t.reactivityIntensity??1,onChange:i=>e({reactivityIntensity:parseFloat(i.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Film Grain Intensity"}),d.jsxs("span",{className:"font-mono text-studio-accent",children:[Math.round((t.grainIntensity??.2)*100),"%"]})]}),d.jsx("input",{type:"range",min:"0.0",max:"0.8",step:"0.02",value:t.grainIntensity??.2,onChange:i=>e({grainIntensity:parseFloat(i.target.value)}),className:"w-full"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[d.jsx("span",{children:"Vignette Edge Darkening"}),d.jsxs("span",{className:"font-mono text-studio-accent",children:[Math.round((t.vignetteStrength??.45)*100),"%"]})]}),d.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.05",value:t.vignetteStrength??.45,onChange:i=>e({vignetteStrength:parseFloat(i.target.value)}),className:"w-full"})]}),d.jsxs("button",{onClick:()=>e({seed:parseFloat((Math.random()*1e3).toFixed(2))}),className:"w-full flex items-center justify-center space-x-1.5 py-2 px-3 bg-studio-900/90 hover:bg-studio-800 text-slate-300 hover:text-white rounded-lg text-xs font-semibold border border-studio-750 transition-all hover:scale-[1.01]",children:[d.jsx(fa,{className:"w-3.5 h-3.5 text-studio-accent"}),d.jsx("span",{children:"Reshuffle Procedural Seed"})]})]})},YR=()=>{var V,j;const{isPlaying:t,currentTime:e,duration:n,volume:i,isMuted:r,isLooping:s,play:a,pause:o,stop:l,seek:c,setVolume:f,toggleMute:p,toggleLoop:h,loadAudioFile:m,currentAudioData:y,audioBuffer:v}=en(),g=qe.useRef(null),u=qe.useRef(null),[x,_]=qe.useState(null),[M,A]=qe.useState(!1),T=I=>{if(isNaN(I)||I<0)return"00:00";const B=Math.floor(I/60),H=Math.floor(I%60);return`${B.toString().padStart(2,"0")}:${H.toString().padStart(2,"0")}`};qe.useEffect(()=>{if(!v){_(null);return}const I=v.getChannelData(0),B=I.length,H=350,K=Math.floor(B/H),D=new Float32Array(H);for(let G=0;G<H;G++){const $=G*K,ne=Math.min($+K,B);let ce=0;for(let Se=$;Se<ne;Se+=4){const Y=Math.abs(I[Se]);Y>ce&&(ce=Y)}D[G]=Math.min(1,ce*1.4)}_(D)},[v]),qe.useEffect(()=>{const I=u.current;if(!I)return;const B=I.getContext("2d");if(!B)return;const H=I.width,K=I.height;if(B.clearRect(0,0,H,K),!x){B.strokeStyle="#1e293b",B.lineWidth=2,B.beginPath(),B.moveTo(0,K/2),B.lineTo(H,K/2),B.stroke();return}const G=(n>0?Math.min(1,e/n):0)*H,$=x.length,ne=H/$,ce=K/2;for(let Se=0;Se<$;Se++){const Y=Se*ne,ie=Math.max(2,x[Se]*(K*.88)),ue=ce-ie/2;if(Y<=G){const le=Y/H;B.fillStyle=le<.5?"#00f0ff":"#ff007f"}else B.fillStyle="#334155";B.fillRect(Y,ue,Math.max(1,ne-1),ie)}n>0&&(B.fillStyle="#ffffff",B.shadowColor="#00f0ff",B.shadowBlur=8,B.fillRect(G-1,0,2,K),B.shadowBlur=0)},[x,e,n]);const C=I=>{if(!n)return;const B=I.currentTarget.getBoundingClientRect(),H=I.clientX-B.left,K=Math.max(0,Math.min(1,H/B.width));c(K*n)},R=I=>{var H;const B=(H=I.target.files)==null?void 0:H[0];B&&m(B)},w=async()=>{try{const I=await ct.generateDemoTrack();en.setState({audioMetadata:I,audioBuffer:ct.getAudioBuffer(),duration:I.duration,currentTime:0,isPlaying:!1}),a()}catch(I){console.error("Failed to generate demo track:",I)}},S=((V=y==null?void 0:y.beat)==null?void 0:V.isBeat)||!1,N=((j=y==null?void 0:y.beat)==null?void 0:j.bpm)||128;return d.jsxs("footer",{className:"h-16 bg-studio-900 border-t border-studio-800 px-4 flex items-center justify-between select-none z-30",children:[d.jsx("input",{ref:g,type:"file",accept:"audio/*",onChange:R,className:"hidden"}),d.jsxs("div",{className:"flex items-center space-x-3",children:[d.jsx("button",{onClick:t?o:a,disabled:n===0,className:`w-9 h-9 rounded-full flex items-center justify-center transition-all ${n===0?"bg-studio-800 text-slate-600 cursor-not-allowed":t?"bg-studio-accent text-slate-950 shadow-md shadow-studio-accent/30 hover:scale-105 active:scale-95":"bg-white text-slate-950 shadow-md hover:scale-105 active:scale-95"}`,title:t?"Pause (Space)":"Play (Space)",children:t?d.jsx(BS,{className:"w-4 h-4 fill-current"}):d.jsx(zS,{className:"w-4 h-4 fill-current ml-0.5"})}),d.jsx("button",{onClick:l,disabled:n===0,className:"p-2 rounded-lg text-slate-400 hover:text-white hover:bg-studio-800 disabled:opacity-20 transition-all",title:"Stop and return to start",children:d.jsx(HS,{className:"w-4 h-4 fill-current"})}),d.jsx("button",{onClick:h,className:`p-2 rounded-lg transition-all ${s?"text-studio-accent bg-studio-800/80":"text-slate-500 hover:text-slate-300 hover:bg-studio-800"}`,title:s?"Looping enabled":"Looping disabled",children:d.jsx(VS,{className:"w-4 h-4"})}),d.jsxs("div",{className:"font-mono text-xs text-slate-300 tracking-wider",children:[d.jsx("span",{className:"text-white font-semibold",children:T(e)}),d.jsx("span",{className:"text-slate-600 mx-1",children:"/"}),d.jsx("span",{className:"text-slate-400",children:T(n)})]}),d.jsxs("div",{className:"hidden sm:flex items-center space-x-2 pl-2 border-l border-studio-800",children:[d.jsx("div",{className:`w-3 h-3 rounded-full border transition-all duration-75 ${S?"bg-studio-neonPink border-pink-300 scale-125 shadow-md shadow-pink-500/80":"bg-studio-950 border-studio-700 scale-100"}`,title:"Real-time Beat Transient Detection"}),d.jsxs("div",{className:"flex items-center space-x-1.5 text-[11px] font-mono text-slate-300 bg-studio-950 px-2 py-1 rounded-md border border-studio-800",children:[d.jsx(Uy,{className:"w-3 h-3 text-studio-neonPink"}),d.jsxs("button",{onClick:()=>{const I=prompt("Enter exact BPM (e.g. 128, 140, 174):",`${N}`);if(I){const B=parseInt(I);!isNaN(B)&&B>=40&&B<=240&&en.getState().setManualBpm(B)}},className:"font-bold hover:text-studio-accent transition-colors cursor-pointer",title:"Click to manually edit BPM",children:[N," BPM"]}),d.jsx("button",{onClick:async()=>{A(!0);try{await en.getState().recheckBpm()}finally{A(!1)}},disabled:M||n===0,className:"p-0.5 text-slate-400 hover:text-studio-accent transition-colors disabled:opacity-30 ml-1",title:"Re-analyze track to calculate accurate BPM",children:d.jsx(fa,{className:`w-3 h-3 ${M?"animate-spin text-studio-accent":""}`})}),d.jsx("button",{onClick:()=>en.getState().multiplyBpm(.5),className:"px-1 text-[9px] text-slate-500 hover:text-slate-200 rounded hover:bg-studio-850",title:"Half-time (BPM / 2)",children:"/2"}),d.jsx("button",{onClick:()=>en.getState().multiplyBpm(2),className:"px-1 text-[9px] text-slate-500 hover:text-slate-200 rounded hover:bg-studio-850",title:"Double-time (BPM * 2)",children:"x2"})]})]})]}),d.jsx("div",{className:"flex-1 max-w-2xl mx-6",children:d.jsx("div",{onClick:C,className:"h-10 flex items-center cursor-pointer group relative bg-studio-950/80 rounded-lg px-2 border border-studio-800/80 hover:border-studio-700 transition-colors",title:"Click to seek",children:d.jsx("canvas",{ref:u,width:600,height:32,className:"w-full h-8 block"})})}),d.jsxs("div",{className:"flex items-center space-x-3",children:[d.jsxs("button",{onClick:()=>{var I;return(I=g.current)==null?void 0:I.click()},className:"flex items-center space-x-1.5 bg-studio-800 hover:bg-studio-750 text-slate-200 hover:text-white px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-studio-700 transition-all",title:"Upload audio track (MP3, WAV, FLAC, OGG)",children:[d.jsx(Ry,{className:"w-3.5 h-3.5 text-studio-accent"}),d.jsx("span",{children:"Upload Audio"})]}),d.jsxs("button",{onClick:w,className:"flex items-center space-x-1.5 bg-gradient-to-r from-purple-950 to-indigo-950 hover:from-purple-900 hover:to-indigo-900 text-purple-300 hover:text-purple-100 border border-purple-800/60 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all",title:"Load high-energy electronic synthesizer demo loop",children:[d.jsx(gy,{className:"w-3.5 h-3.5 text-purple-400"}),d.jsx("span",{children:"Demo Loop"})]}),d.jsxs("div",{className:"flex items-center space-x-2 pl-2 border-l border-studio-800",children:[d.jsx("button",{onClick:p,className:"text-slate-400 hover:text-white transition-colors",children:r||i===0?d.jsx(qS,{className:"w-4 h-4"}):d.jsx(XS,{className:"w-4 h-4"})}),d.jsx("input",{type:"range",min:"0",max:"1",step:"0.02",value:r?0:i,onChange:I=>f(parseFloat(I.target.value)),className:"w-16",title:"Volume"})]})]})]})},KR=()=>{const t=qe.useRef(null),e=qe.useRef(null),[n,i]=qe.useState({width:1280,height:720}),{project:r,isPlaying:s,duration:a,isLooping:o,loadAudioFile:l,play:c,updateCurrentTime:f,setAudioAnalysisData:p}=en(),h=qe.useCallback(()=>{if(!t.current)return;const g=t.current.getBoundingClientRect(),u=32,x=Math.max(200,g.width-u),_=Math.max(150,g.height-u);let M=16/9;r.aspectRatio==="9:16"?M=9/16:r.aspectRatio==="1:1"&&(M=1);let A,T;x/_>M?(T=Math.floor(_),A=Math.floor(T*M)):(A=Math.floor(x),T=Math.floor(A/M)),i({width:A,height:T}),st.resize(A,T),st.setAspectRatio(r.aspectRatio)},[r.aspectRatio]);qe.useEffect(()=>{if(!t.current||!e.current)return;st.mount(t.current,e.current),st.syncLayers(r.layers),st.setAspectRatio(r.aspectRatio),h();const g=new ResizeObserver(()=>{h()});g.observe(t.current);let u;const x=()=>{const _=ct.getRealtimeAnalysis();if(st.renderPreviewFrame(_),ct.isPlaying()){const M=ct.getCurrentTime();f(M),p(_),o&&a>0&&M>=a-.05&&ct.seek(0)}u=requestAnimationFrame(x)};return u=requestAnimationFrame(x),()=>{cancelAnimationFrame(u),g.disconnect()}},[]),qe.useEffect(()=>{h()},[r.aspectRatio,h]),qe.useEffect(()=>{st.syncLayers(r.layers)},[r.layers]);const m=g=>{g.preventDefault();const u=g.dataTransfer.files[0];u&&u.type.startsWith("audio/")&&l(u)},y=g=>{g.preventDefault()},v=async()=>{try{const g=await ct.generateDemoTrack();en.setState({audioMetadata:g,audioBuffer:ct.getAudioBuffer(),duration:g.duration,currentTime:0,isPlaying:!1}),c()}catch(g){console.error(g)}};return d.jsx("main",{ref:t,onDrop:m,onDragOver:y,className:"flex-1 bg-studio-950 flex items-center justify-center p-4 relative overflow-hidden select-none",children:d.jsxs("div",{style:{width:`${n.width}px`,height:`${n.height}px`},className:"relative shadow-2xl shadow-black/90 rounded-xl overflow-hidden border border-studio-800/80 bg-black flex items-center justify-center transition-all duration-150",children:[d.jsx("canvas",{ref:e,className:"w-full h-full block"}),a===0&&d.jsxs("div",{className:"absolute inset-0 bg-studio-950/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-10",children:[d.jsx("div",{className:"w-14 h-14 rounded-2xl bg-studio-900 border border-studio-750 flex items-center justify-center mb-4 shadow-xl shadow-cyan-500/10",children:d.jsx(ui,{className:"w-7 h-7 text-studio-accent animate-pulse"})}),d.jsx("h2",{className:"text-base font-bold text-white tracking-wide",children:"Audio-Reactive Visual Studio"}),d.jsx("p",{className:"text-xs text-slate-400 max-w-xs mt-1 mb-5 leading-relaxed",children:"Drop an MP3 or WAV audio track here, or load the electronic synthesizer demo loop to start visualizing."}),d.jsxs("div",{className:"flex items-center space-x-3",children:[d.jsxs("button",{onClick:v,className:"flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95",children:[d.jsx(gy,{className:"w-4 h-4"}),d.jsx("span",{children:"Load Demo Track"})]}),d.jsxs("label",{className:"flex items-center space-x-2 bg-studio-800 hover:bg-studio-700 text-slate-200 hover:text-white px-4 py-2 rounded-lg text-xs font-semibold border border-studio-700 cursor-pointer transition-all hover:scale-105",children:[d.jsx(Ry,{className:"w-4 h-4 text-studio-accent"}),d.jsx("span",{children:"Upload Audio"}),d.jsx("input",{type:"file",accept:"audio/*",onChange:g=>{var x;const u=(x=g.target.files)==null?void 0:x[0];u&&l(u)},className:"hidden"})]})]})]})]})})},ZR=()=>{const{isExportModalOpen:t,setIsExportModalOpen:e,project:n,duration:i,exportProgress:r,startExport:s,cancelExport:a}=en(),[o,l]=qe.useState(n.aspectRatio),[c,f]=qe.useState("1080p"),[p,h]=qe.useState(30),[m,y]=qe.useState(n.name.replace(/\s+/g,"_")),[v,g]=qe.useState("full");if(!t)return null;const u=r&&(r.status==="preparing"||r.status==="renderingFrames"||r.status==="encodingVideo"||r.status==="muxingAudio"),x=(r==null?void 0:r.status)==="completed",_=(r==null?void 0:r.status)==="error",M=i>0?i:10,A=v==="30s"?Math.min(30,M):v==="60s"?Math.min(60,M):M,T=async()=>{const w={aspectRatio:o,resolution:c,fps:p,format:"mp4",bitrate:c==="4k"?5e7:c==="1440p"?32e6:c==="1080p"?2e7:12e6,startTime:0,endTime:A,includeAudio:i>0,outputFileName:m||"visual_output"};try{await s(w)}catch(S){console.error("Export failed:",S)}},C=()=>{if(r!=null&&r.outputBlobUrl){const w=document.createElement("a");w.href=r.outputBlobUrl,w.download=`${m||"visualization"}.mp4`,document.body.appendChild(w),w.click(),document.body.removeChild(w)}},R=()=>{en.setState({exportProgress:null})};return d.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 select-none animate-fade-in",children:d.jsxs("div",{className:"bg-studio-900 border border-studio-750 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col",children:[d.jsxs("div",{className:"px-6 py-4 border-b border-studio-800 flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center space-x-2.5",children:[d.jsx("div",{className:"w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-studio-accent",children:d.jsx(a0,{className:"w-4 h-4"})}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-sm font-bold text-white tracking-wide",children:"Export Video"}),d.jsx("p",{className:"text-[11px] text-slate-400",children:"Deterministic, frame-accurate offline MP4 rendering"})]})]}),!u&&d.jsx("button",{onClick:()=>{R(),e(!1)},className:"text-slate-400 hover:text-white p-1 rounded-lg hover:bg-studio-800 transition-colors",children:d.jsx(Iy,{className:"w-5 h-5"})})]}),d.jsxs("div",{className:"p-6 space-y-5 text-xs text-slate-300",children:[_&&r&&d.jsxs("div",{className:"space-y-4 py-4 text-center",children:[d.jsx("div",{className:"inline-flex p-3 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 mb-1",children:d.jsx(r0,{className:"w-8 h-8"})}),d.jsxs("div",{children:[d.jsx("h4",{className:"text-sm font-bold text-white",children:"Export Failed"}),d.jsx("p",{className:"text-xs text-red-400 mt-1 max-w-sm mx-auto",children:r.errorMessage||"An error occurred during video encoding."}),d.jsx("p",{className:"text-[11px] text-slate-500 mt-2",children:"Try selecting 720p or 1080p with 30 FPS for maximum hardware compatibility."})]}),d.jsx("div",{className:"flex items-center justify-center space-x-3 pt-2",children:d.jsxs("button",{onClick:R,className:"flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-studio-800 hover:bg-studio-700 text-slate-200 font-semibold transition-colors",children:[d.jsx(fa,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Adjust Settings"})]})})]}),u&&r&&d.jsxs("div",{className:"space-y-4 py-4 text-center",children:[d.jsx("div",{className:"inline-flex p-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-studio-accent animate-pulse mb-1",children:d.jsx(kS,{className:"w-8 h-8 animate-spin"})}),d.jsxs("div",{children:[d.jsxs("div",{className:"text-sm font-bold text-white capitalize",children:[r.status==="preparing"&&"Preparing Offscreen Pipeline...",r.status==="renderingFrames"&&"Rendering Deterministic Frames...",r.status==="muxingAudio"&&"Finalizing MP4 & Preparing Download..."]}),d.jsx("div",{className:"text-xs text-slate-400 mt-1",children:r.status==="muxingAudio"?d.jsx("span",{className:"text-cyan-400 animate-pulse font-medium",children:"Assembling video & synchronized audio tracks... download will begin in a moment."}):d.jsxs("span",{children:["Frame ",r.currentFrame," of ",r.totalFrames," (",(r.progress*100).toFixed(1),"%)"]})})]}),d.jsx("div",{className:"w-full bg-studio-950 h-2.5 rounded-full overflow-hidden border border-studio-800",children:d.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full transition-all duration-150",style:{width:`${Math.min(100,Math.max(2,r.progress*100))}%`}})}),d.jsxs("div",{className:"grid grid-cols-2 gap-3 text-[11px] text-slate-400 font-mono bg-studio-950 p-3 rounded-xl border border-studio-800",children:[d.jsxs("div",{className:"flex items-center justify-center space-x-1",children:[d.jsx(NS,{className:"w-3.5 h-3.5 text-cyan-400"}),d.jsxs("span",{children:["ETA: ",r.estimatedTimeRemainingSeconds>0?`${r.estimatedTimeRemainingSeconds.toFixed(0)}s`:"Calculating..."]})]}),d.jsxs("div",{children:["Speed: ",r.renderingFps.toFixed(0)," FPS"]})]}),d.jsx("button",{onClick:a,className:"px-4 py-1.5 rounded-lg bg-red-950/60 border border-red-800/80 text-red-300 hover:text-white text-xs font-semibold",children:"Cancel Export"})]}),x&&r&&d.jsxs("div",{className:"space-y-4 py-4 text-center",children:[d.jsx("div",{className:"inline-flex p-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-1",children:d.jsx(Xx,{className:"w-8 h-8"})}),d.jsxs("div",{children:[d.jsx("h4",{className:"text-sm font-bold text-white",children:"Export Completed Successfully!"}),d.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Your deterministic audio-reactive MP4 video is ready for download."}),r.fileSizeBytes&&d.jsxs("p",{className:"text-[11px] font-mono text-cyan-400 mt-1",children:["Size: ",(r.fileSizeBytes/(1024*1024)).toFixed(2)," MB"]})]}),d.jsxs("div",{className:"flex items-center justify-center space-x-3 pt-2",children:[d.jsxs("button",{onClick:C,className:"flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-emerald-500/20",children:[d.jsx(Qx,{className:"w-4 h-4 stroke-[2.5]"}),d.jsx("span",{children:"Download MP4"})]}),d.jsx("button",{onClick:()=>{R(),e(!1)},className:"px-4 py-2.5 rounded-xl bg-studio-800 hover:bg-studio-700 text-slate-300 font-semibold",children:"Close"})]})]}),!u&&!x&&!_&&d.jsxs(d.Fragment,{children:[i===0&&d.jsxs("div",{className:"bg-amber-950/40 border border-amber-800/60 rounded-xl p-3 text-amber-300 text-xs flex items-center space-x-2",children:[d.jsx(r0,{className:"w-4 h-4 flex-shrink-0 text-amber-400"}),d.jsx("span",{children:"No audio file is loaded. Export will generate a 10-second sample animation video."})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-slate-400 text-[11px] font-bold uppercase tracking-wider block mb-1",children:"File Name"}),d.jsxs("div",{className:"flex items-center space-x-2",children:[d.jsx("input",{type:"text",value:m,onChange:w=>y(w.target.value),className:"flex-1 bg-studio-950 border border-studio-800 rounded-lg px-3 py-2 text-white outline-none focus:border-cyan-500",placeholder:"my_visualization"}),d.jsx("span",{className:"text-slate-500 font-mono",children:".mp4"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-slate-400 text-[11px] font-bold uppercase tracking-wider block mb-1.5",children:"Aspect Ratio"}),d.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[d.jsx("button",{onClick:()=>l("16:9"),className:`py-2 rounded-lg font-semibold border transition-all text-center ${o==="16:9"?"bg-studio-800 border-cyan-500 text-cyan-400 shadow-sm":"bg-studio-950 border-studio-800 text-slate-400 hover:text-white"}`,children:"16:9 (YouTube)"}),d.jsx("button",{onClick:()=>l("9:16"),className:`py-2 rounded-lg font-semibold border transition-all text-center ${o==="9:16"?"bg-studio-800 border-cyan-500 text-cyan-400 shadow-sm":"bg-studio-950 border-studio-800 text-slate-400 hover:text-white"}`,children:"9:16 (Shorts/Reels)"}),d.jsx("button",{onClick:()=>l("1:1"),className:`py-2 rounded-lg font-semibold border transition-all text-center ${o==="1:1"?"bg-studio-800 border-cyan-500 text-cyan-400 shadow-sm":"bg-studio-950 border-studio-800 text-slate-400 hover:text-white"}`,children:"1:1 (Square)"})]})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[d.jsx("label",{className:"text-slate-400 text-[11px] font-bold uppercase tracking-wider",children:"Clip Duration"}),d.jsxs("span",{className:"text-[11px] font-mono text-cyan-400",children:[Math.floor(A/60),":",Math.floor(A%60).toString().padStart(2,"0")," ","(",Math.floor(A*p)," frames)"]})]}),d.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[d.jsxs("button",{onClick:()=>g("full"),className:`py-2 px-2 rounded-lg font-semibold border transition-all text-center text-xs truncate ${v==="full"?"bg-studio-800 border-cyan-500 text-cyan-400 shadow-sm":"bg-studio-950 border-studio-800 text-slate-400 hover:text-white"}`,children:["Full Track (",Math.floor(M/60),":",Math.floor(M%60).toString().padStart(2,"0"),")"]}),d.jsx("button",{onClick:()=>g("30s"),className:`py-2 px-2 rounded-lg font-semibold border transition-all text-center text-xs truncate ${v==="30s"?"bg-studio-800 border-cyan-500 text-cyan-400 shadow-sm":"bg-studio-950 border-studio-800 text-slate-400 hover:text-white"}`,children:"30s (Reel / TikTok)"}),d.jsx("button",{onClick:()=>g("60s"),className:`py-2 px-2 rounded-lg font-semibold border transition-all text-center text-xs truncate ${v==="60s"?"bg-studio-800 border-cyan-500 text-cyan-400 shadow-sm":"bg-studio-950 border-studio-800 text-slate-400 hover:text-white"}`,children:"60s (YouTube Short)"})]})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-slate-400 text-[11px] font-bold uppercase tracking-wider block mb-1",children:"Resolution"}),d.jsxs("select",{value:c,onChange:w=>f(w.target.value),className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-3 py-2 text-white outline-none cursor-pointer",children:[d.jsx("option",{value:"720p",children:"720p HD (Fast)"}),d.jsx("option",{value:"1080p",children:"1080p Full HD (Recommended)"}),d.jsx("option",{value:"1440p",children:"1440p 2K QHD"}),d.jsx("option",{value:"4k",children:"4K Ultra HD"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-slate-400 text-[11px] font-bold uppercase tracking-wider block mb-1",children:"Frame Rate"}),d.jsxs("select",{value:p,onChange:w=>h(parseInt(w.target.value)),className:"w-full bg-studio-950 border border-studio-800 rounded-lg px-3 py-2 text-white outline-none cursor-pointer",children:[d.jsx("option",{value:24,children:"24 FPS (Cinematic)"}),d.jsx("option",{value:30,children:"30 FPS (Standard - Recommended)"}),d.jsx("option",{value:60,children:"60 FPS (Ultra Smooth)"})]})]})]}),d.jsxs("div",{className:"bg-studio-950 p-3 rounded-xl border border-studio-800 text-[11px] text-slate-400 space-y-1",children:[d.jsxs("div",{className:"flex items-center space-x-1.5 text-cyan-400 font-semibold",children:[d.jsx(ui,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Deterministic In-Browser Rendering"})]}),d.jsx("p",{children:"Frames are computed deterministically from exact audio sample slices. Zero dropped frames, perfect audio/video synchronization."})]}),d.jsxs("div",{className:"flex items-center justify-end space-x-3 pt-3 border-t border-studio-800",children:[d.jsx("button",{onClick:()=>e(!1),className:"px-4 py-2 rounded-lg bg-studio-800 hover:bg-studio-750 text-slate-300 font-semibold",children:"Cancel"}),d.jsxs("button",{onClick:T,className:"flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 px-5 py-2 rounded-lg font-bold shadow-lg shadow-cyan-500/20 active:scale-95",children:[d.jsx(a0,{className:"w-4 h-4 stroke-[2.5]"}),d.jsx("span",{children:"Start Export"})]})]})]})]})]})})},QR=()=>(qe.useEffect(()=>{const t=e=>{const n=e.target;if(!(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.tagName==="SELECT")))if(e.code==="Space"){e.preventDefault();const i=en.getState();i.duration>0&&(i.isPlaying?i.pause():i.play())}else e.code==="KeyR"&&!e.ctrlKey&&!e.metaKey&&en.getState().randomizeParameters()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[]),d.jsxs("div",{className:"flex flex-col h-screen w-screen overflow-hidden bg-studio-950 text-slate-100 select-none",children:[d.jsx(jR,{}),d.jsxs("div",{className:"flex flex-1 overflow-hidden relative",children:[d.jsx(VR,{}),d.jsx(KR,{}),d.jsx(HR,{})]}),d.jsx(YR,{}),d.jsx(ZR,{})]})),JR=()=>d.jsx(QR,{});yd.createRoot(document.getElementById("root")).render(d.jsx(zl.StrictMode,{children:d.jsx(JR,{})}));
