const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-D-cto2sG.js","assets/_plugin-vue_export-helper-DriX6Rb3.js","assets/Input-r4oU9v6i.js","assets/light-DSL3c_9v.js","assets/use-locale-DpKLYzZb.js","assets/Empty-DN-kMviJ.js","assets/Home-ZjMtFN5u.css","assets/Post-Br-PLfof.js","assets/marked.esm-Ccg6WR5l.js","assets/Post-avwSayVI.css","assets/Archives-Dk3S-tBe.js","assets/Archives-DWedOkIk.css","assets/Tags-B1cF3TUt.js","assets/Tags-CWJ8N4lw.css","assets/TagPosts-BKOiTO8W.js","assets/TagPosts-DubLi5vD.css","assets/Links-Wd-7R67m.js","assets/Links-BpxmWLef.css","assets/Guestbook-C46X-sU0.js","assets/Guestbook-BILVZ_gT.css","assets/About-C3_WQ6bK.js","assets/About-CzLVydyt.css","assets/AI-AUd3pqlb.js","assets/AI-1Bt0ZlXS.css"])))=>i.map(i=>d[i]);
import{$ as e,A as t,B as n,C as r,Ct as i,D as a,Dt as o,E as s,F as c,G as l,H as u,I as d,J as f,K as p,M as m,N as h,O as g,P as _,Q as v,R as y,S as b,St as x,T as S,U as C,V as w,W as T,X as E,Y as D,Z as O,_ as k,_t as A,a as j,at as M,b as ee,bt as te,c as ne,ct as re,d as N,dt as ie,et as ae,f as oe,ft as se,gt as ce,h as le,ht as ue,i as de,it as fe,j as pe,k as me,l as he,lt as ge,m as _e,mt as ve,n as ye,nt as P,o as be,ot as F,pt as xe,q as Se,r as Ce,rt as we,s as Te,st as Ee,t as De,tt as Oe,u as I,ut as ke,v as Ae,vt as je,w as L,wt as Me,x as Ne,xt as Pe,y as R,yt as Fe,z as Ie}from"./_plugin-vue_export-helper-DriX6Rb3.js";import{$ as Le,A as Re,B as ze,C as Be,D as Ve,E as He,F as Ue,G as We,H as Ge,J as Ke,K as z,L as qe,M as Je,N as Ye,O as Xe,P as Ze,Q as Qe,R as $e,S as et,T as tt,U as B,V as nt,W as V,X as rt,Y as H,Z as it,_ as at,a as ot,b as st,c as ct,d as lt,et as ut,f as dt,g as ft,h as pt,i as U,j as mt,k as ht,l as gt,m as _t,n as vt,o as yt,p as bt,q as W,r as xt,s as St,t as Ct,u as wt,v as Tt,w as Et,x as Dt,y as Ot,z as G}from"./light-DSL3c_9v.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var kt=void 0,At=typeof window<`u`&&window.trustedTypes;if(At)try{kt=At.createPolicy(`vue`,{createHTML:e=>e})}catch{}var jt=kt?e=>kt.createHTML(e):e=>e,Mt=`http://www.w3.org/2000/svg`,Nt=`http://www.w3.org/1998/Math/MathML`,Pt=typeof document<`u`?document:null,Ft=Pt&&Pt.createElement(`template`),It={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Pt.createElementNS(Mt,e):t===`mathml`?Pt.createElementNS(Nt,e):n?Pt.createElement(e,{is:n}):Pt.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Pt.createTextNode(e),createComment:e=>Pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ft.innerHTML=jt(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ft.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Lt=`transition`,Rt=`animation`,zt=Symbol(`_vtc`),Bt={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Vt=ie({},Ce,Bt),Ht=(e=>(e.displayName=`Transition`,e.props=Vt,e))((e,{slots:t})=>b(ye,Gt(e),t)),Ut=(e,t=[])=>{ue(e)?e.forEach(e=>e(...t)):e&&e(...t)},Wt=e=>e?ue(e)?e.some(e=>e.length>1):e.length>1:!1;function Gt(e){let t={};for(let n in e)n in Bt||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:c=a,appearActiveClass:l=o,appearToClass:u=s,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=Kt(i),h=m&&m[0],g=m&&m[1],{onBeforeEnter:_,onEnter:v,onEnterCancelled:y,onLeave:b,onLeaveCancelled:x,onBeforeAppear:S=_,onAppear:C=v,onAppearCancelled:w=y}=t,T=(e,t,n,r)=>{e._enterCancelled=r,Yt(e,t?u:s),Yt(e,t?l:o),n&&n()},E=(e,t)=>{e._isLeaving=!1,Yt(e,d),Yt(e,p),Yt(e,f),t&&t()},D=e=>(t,n)=>{let i=e?C:v,o=()=>T(t,e,n);Ut(i,[t,o]),Xt(()=>{Yt(t,e?c:a),Jt(t,e?u:s),Wt(i)||Qt(t,r,h,o)})};return ie(t,{onBeforeEnter(e){Ut(_,[e]),Jt(e,a),Jt(e,o)},onBeforeAppear(e){Ut(S,[e]),Jt(e,c),Jt(e,l)},onEnter:D(!1),onAppear:D(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>E(e,t);Jt(e,d),e._enterCancelled?(Jt(e,f),nn(e)):(nn(e),Jt(e,f)),Xt(()=>{e._isLeaving&&(Yt(e,d),Jt(e,p),Wt(b)||Qt(e,r,g,n))}),Ut(b,[e,n])},onEnterCancelled(e){T(e,!1,void 0,!0),Ut(y,[e])},onAppearCancelled(e){T(e,!0,void 0,!0),Ut(w,[e])},onLeaveCancelled(e){E(e),Ut(x,[e])}})}function Kt(e){if(e==null)return null;if(je(e))return[qt(e.enter),qt(e.leave)];{let t=qt(e);return[t,t]}}function qt(e){return o(e)}function Jt(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[zt]||(e[zt]=new Set)).add(t)}function Yt(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[zt];n&&(n.delete(t),n.size||(e[zt]=void 0))}function Xt(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var Zt=0;function Qt(e,t,n,r){let i=e._endId=++Zt,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=$t(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function $t(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${Lt}Delay`),a=r(`${Lt}Duration`),o=en(i,a),s=r(`${Rt}Delay`),c=r(`${Rt}Duration`),l=en(s,c),u=null,d=0,f=0;t===Lt?o>0&&(u=Lt,d=o,f=a.length):t===Rt?l>0&&(u=Rt,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?Lt:Rt:null,f=u?u===Lt?a.length:c.length:0);let p=u===Lt&&/\b(?:transform|all)(?:,|$)/.test(r(`${Lt}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function en(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>tn(t)+tn(e[n])))}function tn(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function nn(e){return(e?e.ownerDocument:document).body.offsetHeight}function rn(e,t,n){let r=e[zt];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var an=Symbol(`_vod`),on=Symbol(`_vsh`),sn={name:`show`,beforeMount(e,{value:t},{transition:n}){e[an]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):cn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),cn(e,!0),r.enter(e)):r.leave(e,()=>{cn(e,!1)}):cn(e,t))},beforeUnmount(e,{value:t}){cn(e,t)}};function cn(e,t){e.style.display=t?e[an]:`none`,e[on]=!t}var ln=Symbol(``),un=/(?:^|;)\s*display\s*:/;function dn(e,t,n){let r=e.style,i=Pe(n),a=!1;if(n&&!i){if(t)if(Pe(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??pn(r,t,``)}else for(let e in t)n[e]??pn(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?pn(r,i,``):_n(e,i,!Pe(t)&&t?t[i]:void 0,o)||pn(r,i,o)}}else if(i){if(t!==n){let e=r[ln];e&&(n+=`;`+e),r.cssText=n,a=un.test(n)}}else t&&e.removeAttribute(`style`);an in e&&(e[an]=a?r.display:``,e[on]&&(r.display=`none`))}var fn=/\s*!important$/;function pn(e,t,n){if(ue(n))n.forEach(n=>pn(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=gn(e,t);fn.test(n)?e.setProperty(se(r),n.replace(fn,``),`important`):e[r]=n}}var mn=[`Webkit`,`Moz`,`ms`],hn={};function gn(e,t){let n=hn[t];if(n)return n;let r=ge(t);if(r!==`filter`&&r in e)return hn[t]=r;r=ke(r);for(let n=0;n<mn.length;n++){let i=mn[n]+r;if(i in e)return hn[t]=i}return t}function _n(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&Pe(r)&&n===r}var vn=`http://www.w3.org/1999/xlink`;function yn(e,t,n,r,i,a=te(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(vn,t.slice(6,t.length)):e.setAttributeNS(vn,t,n):n==null||a&&!xe(n)?e.removeAttribute(t):e.setAttribute(t,a?``:x(n)?String(n):n)}function bn(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?jt(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=xe(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function xn(e,t,n,r){e.addEventListener(t,n,r)}function Sn(e,t,n,r){e.removeEventListener(t,n,r)}var Cn=Symbol(`_vei`);function wn(e,t,n,r,i=null){let a=e[Cn]||(e[Cn]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=En(t);r?xn(e,n,a[t]=An(r,i),s):o&&(Sn(e,n,o,s),a[t]=void 0)}}var Tn=/(?:Once|Passive|Capture)$/;function En(e){let t;if(Tn.test(e)){t={};let n;for(;n=e.match(Tn);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):se(e.slice(2)),t]}var Dn=0,On=Promise.resolve(),kn=()=>Dn||=(On.then(()=>Dn=0),Date.now());function An(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(ue(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&ne(e,t,5,a)}}else ne(r,t,5,[e])};return n.value=e,n.attached=kn(),n}var jn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Mn=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?rn(e,r,o):t===`style`?dn(e,n,r):Fe(t)?A(t)||wn(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):Nn(e,t,r,o))?(bn(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&yn(e,t,r,o,a,t!==`value`)):e._isVueCE&&(Pn(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Pe(r)))?bn(e,ge(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),yn(e,t,r,o))};function Nn(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&jn(t)&&ce(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return jn(t)&&Pe(n)?!1:t in e}function Pn(e,t){let n=e._def.props;if(!n)return!1;let r=ge(t);return Array.isArray(n)?n.some(e=>ge(e)===r):Object.keys(n).some(e=>ge(e)===r)}var Fn=new WeakMap,In=new WeakMap,Ln=Symbol(`_moveCb`),Rn=Symbol(`_enterCb`),zn=(e=>(delete e.props.mode,e))({name:`TransitionGroup`,props:ie({},Vt,{tag:String,moveClass:String}),setup(e,{slots:t}){let n=ee(),r=C(),i,a;return _(()=>{if(!i.length)return;let t=e.moveClass||`${e.name||`v`}-move`;if(!Wn(i[0].el,n.vnode.el,t)){i=[];return}i.forEach(Bn),i.forEach(Vn);let r=i.filter(Hn);nn(n.vnode.el),r.forEach(e=>{let n=e.el,r=n.style;Jt(n,t),r.transform=r.webkitTransform=r.transitionDuration=``;let i=n[Ln]=e=>{e&&e.target!==n||(!e||e.propertyName.endsWith(`transform`))&&(n.removeEventListener(`transitionend`,i),n[Ln]=null,Yt(n,t))};n.addEventListener(`transitionend`,i)}),i=[]}),()=>{let o=M(e),s=Gt(o),c=o.tag||j;if(i=[],a)for(let e=0;e<a.length;e++){let t=a[e];t.el&&t.el instanceof Element&&!t.el[on]&&(i.push(t),u(t,w(t,s,r,n)),Fn.set(t,Un(t.el)))}a=t.default?Ne(t.default()):[];for(let e=0;e<a.length;e++){let t=a[e];t.key!=null&&u(t,w(t,s,r,n))}return Ae(c,null,a)}}});function Bn(e){let t=e.el;t[Ln]&&t[Ln](),t[Rn]&&t[Rn]()}function Vn(e){In.set(e,Un(e.el))}function Hn(e){let t=Fn.get(e),n=In.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){let t=e.el,n=t.style,a=t.getBoundingClientRect(),o=1,s=1;return t.offsetWidth&&(o=a.width/t.offsetWidth),t.offsetHeight&&(s=a.height/t.offsetHeight),(!Number.isFinite(o)||o===0)&&(o=1),(!Number.isFinite(s)||s===0)&&(s=1),Math.abs(o-1)<.01&&(o=1),Math.abs(s-1)<.01&&(s=1),n.transform=n.webkitTransform=`translate(${r/o}px,${i/s}px)`,n.transitionDuration=`0s`,e}}function Un(e){let t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function Wn(e,t,n){let r=e.cloneNode(),i=e[zt];i&&i.forEach(e=>{e.split(/\s+/).forEach(e=>e&&r.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&r.classList.add(e)),r.style.display=`none`;let a=t.nodeType===1?t:t.parentNode;a.appendChild(r);let{hasTransform:o}=$t(r);return a.removeChild(r),o}var Gn=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return ue(t)?e=>ve(t,e):t};function Kn(e){e.target.composing=!0}function qn(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var Jn=Symbol(`_assign`);function Yn(e,t,n){return t&&(e=e.trim()),n&&(e=i(e)),e}var Xn={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[Jn]=Gn(i);let a=r||i.props&&i.props.type===`number`;xn(e,t?`change`:`input`,t=>{t.target.composing||e[Jn](Yn(e.value,n,a))}),(n||a)&&xn(e,`change`,()=>{e.value=Yn(e.value,n,a)}),t||(xn(e,`compositionstart`,Kn),xn(e,`compositionend`,qn),xn(e,`change`,qn))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:a,number:o}},s){if(e[Jn]=Gn(s),e.composing)return;let c=(o||e.type===`number`)&&!/^0\d/.test(e.value)?i(e.value):e.value,l=t??``;if(c===l)return;let u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!==`range`&&(r&&t===n||a&&e.value.trim()===l)||(e.value=l)}},Zn=ie({patchProp:Mn},It),Qn;function $n(){return Qn||=le(Zn)}var er=((...e)=>{let t=$n().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=nr(e);if(!r)return;let i=t._component;!ce(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,tr(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function tr(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function nr(e){return Pe(e)?document.querySelector(e):e}var rr=typeof window<`u`,ir,ar=e=>ir=e,or=Symbol();function sr(e){return e&&typeof e==`object`&&Object.prototype.toString.call(e)===`[object Object]`&&typeof e.toJSON!=`function`}var cr;(function(e){e.direct=`direct`,e.patchObject=`patch object`,e.patchFunction=`patch function`})(cr||={});var lr=typeof window==`object`&&window.window===window?window:typeof self==`object`&&self.self===self?self:typeof global==`object`&&global.global===global?global:typeof globalThis==`object`?globalThis:{HTMLElement:null};function ur(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([`﻿`,e],{type:e.type}):e}function dr(e,t,n){let r=new XMLHttpRequest;r.open(`GET`,e),r.responseType=`blob`,r.onload=function(){gr(r.response,t,n)},r.onerror=function(){console.error(`could not download file`)},r.send()}function fr(e){let t=new XMLHttpRequest;t.open(`HEAD`,e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function pr(e){try{e.dispatchEvent(new MouseEvent(`click`))}catch{let t=new MouseEvent(`click`,{bubbles:!0,cancelable:!0,view:window,detail:0,screenX:80,screenY:20,clientX:80,clientY:20,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null});e.dispatchEvent(t)}}var mr=typeof navigator==`object`?navigator:{userAgent:``},hr=/Macintosh/.test(mr.userAgent)&&/AppleWebKit/.test(mr.userAgent)&&!/Safari/.test(mr.userAgent),gr=rr?typeof HTMLAnchorElement<`u`&&`download`in HTMLAnchorElement.prototype&&!hr?_r:`msSaveOrOpenBlob`in mr?vr:yr:()=>{};function _r(e,t=`download`,n){let r=document.createElement(`a`);r.download=t,r.rel=`noopener`,typeof e==`string`?(r.href=e,r.origin===location.origin?pr(r):fr(r.href)?dr(e,t,n):(r.target=`_blank`,pr(r))):(r.href=URL.createObjectURL(e),setTimeout(function(){URL.revokeObjectURL(r.href)},4e4),setTimeout(function(){pr(r)},0))}function vr(e,t=`download`,n){if(typeof e==`string`)if(fr(e))dr(e,t,n);else{let t=document.createElement(`a`);t.href=e,t.target=`_blank`,setTimeout(function(){pr(t)})}else navigator.msSaveOrOpenBlob(ur(e,n),t)}function yr(e,t,n,r){if(r||=open(``,`_blank`),r&&(r.document.title=r.document.body.innerText=`downloading...`),typeof e==`string`)return dr(e,t,n);let i=e.type===`application/octet-stream`,a=/constructor/i.test(String(lr.HTMLElement))||`safari`in lr,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&a||hr)&&typeof FileReader<`u`){let t=new FileReader;t.onloadend=function(){let e=t.result;if(typeof e!=`string`)throw r=null,Error(`Wrong reader.result type`);e=o?e:e.replace(/^data:[^;]*;/,`data:attachment/file;`),r?r.location.href=e:location.assign(e),r=null},t.readAsDataURL(e)}else{let t=URL.createObjectURL(e);r?r.location.assign(t):location.href=t,r=null,setTimeout(function(){URL.revokeObjectURL(t)},4e4)}}var{assign:br}=Object;function xr(){let e=f(!0),t=e.run(()=>P({})),n=[],r=[],i=v({install(e){ar(i),i._a=e,e.provide(or,i),e.config.globalProperties.$pinia=i,r.forEach(e=>n.push(e)),r=[]},use(e){return this._a?n.push(e):r.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}var Sr=()=>{};function Cr(t,n,r,i=Sr){t.add(n);let a=()=>{t.delete(n)&&i()};return!r&&D()&&e(a),a}function wr(e,...t){e.forEach(e=>{e(...t)})}var Tr=e=>e(),Er=Symbol(),Dr=Symbol();function Or(e,t){e instanceof Map&&t instanceof Map?t.forEach((t,n)=>e.set(n,t)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(let n in t){if(!t.hasOwnProperty(n))continue;let r=t[n],i=e[n];sr(i)&&sr(r)&&e.hasOwnProperty(n)&&!O(r)&&!E(r)?e[n]=Or(i,r):e[n]=r}return e}var kr=Symbol();function Ar(e){return!sr(e)||!Object.prototype.hasOwnProperty.call(e,kr)}var{assign:jr}=Object;function Mr(e){return!!(O(e)&&e.effect)}function Nr(e,t,n,r){let{state:i,actions:a,getters:o}=t,s=n.state.value[e],c;function l(){return s||(n.state.value[e]=i?i():{}),jr(Ee(n.state.value[e]),a,Object.keys(o||{}).reduce((t,r)=>(t[r]=v(I(()=>{ar(n);let t=n._s.get(e);return o[r].call(t,t)})),t),{}))}return c=Pr(e,l,t,n,r,!0),c}function Pr(e,t,n={},r,i,o){let s,c=jr({actions:{}},n),l={deep:!0},u,d,p=new Set,m=new Set,h=r.state.value[e];!o&&!h&&(r.state.value[e]={}),P({});let g;function _(t){let n;u=d=!1,typeof t==`function`?(t(r.state.value[e]),n={type:cr.patchFunction,storeId:e,events:void 0}):(Or(r.state.value[e],t),n={type:cr.patchObject,payload:t,storeId:e,events:void 0});let i=g=Symbol();a().then(()=>{g===i&&(u=!0)}),d=!0,wr(p,n,r.state.value[e])}let v=o?function(){let{state:e}=n,t=e?e():{};this.$patch(e=>{jr(e,t)})}:Sr;function y(){s.stop(),p.clear(),m.clear(),r._s.delete(e)}let b=(t,n=``)=>{if(Er in t)return t[Dr]=n,t;let i=function(){ar(r);let n=Array.from(arguments),a=new Set,o=new Set;function s(e){a.add(e)}function c(e){o.add(e)}wr(m,{args:n,name:i[Dr],store:x,after:s,onError:c});let l;try{l=t.apply(this&&this.$id===e?this:x,n)}catch(e){throw wr(o,e),e}return l instanceof Promise?l.then(e=>(wr(a,e),e)).catch(e=>(wr(o,e),Promise.reject(e))):(wr(a,l),l)};return i[Er]=!0,i[Dr]=n,i},x=ae({_p:r,$id:e,$onAction:Cr.bind(null,m),$patch:_,$reset:v,$subscribe(t,n={}){let i=Cr(p,t,n.detached,()=>a()),a=s.run(()=>T(()=>r.state.value[e],r=>{(n.flush===`sync`?d:u)&&t({storeId:e,type:cr.direct,events:void 0},r)},jr({},l,n)));return i},$dispose:y});r._s.set(e,x);let S=(r._a&&r._a.runWithContext||Tr)(()=>r._e.run(()=>(s=f()).run(()=>t({action:b}))));for(let t in S){let n=S[t];O(n)&&!Mr(n)||E(n)?o||(h&&Ar(n)&&(O(n)?n.value=h[t]:Or(n,h[t])),r.state.value[e][t]=n):typeof n==`function`&&(S[t]=b(n,t),c.actions[t]=n)}return jr(x,S),jr(M(x),S),Object.defineProperty(x,"$state",{get:()=>r.state.value[e],set:e=>{_(t=>{jr(t,e)})}}),r._p.forEach(e=>{jr(x,s.run(()=>e({store:x,app:r._a,pinia:r,options:c})))}),h&&o&&n.hydrate&&n.hydrate(x.$state,h),u=!0,d=!0,x}function Fr(e,t,n){let i,a=typeof t==`function`;i=a?n:t;function o(n,o){let s=r();return n||=s?L(or,null):null,n&&ar(n),n=ir,n._s.has(e)||(a?Pr(e,t,i,n):Nr(e,i,n)),n._s.get(e)}return o.$id=e,o}function Ir(e){let t=M(e),n={};for(let r in t){let i=t[r];i.effect?n[r]=I({get:()=>e[r],set(t){e[r]=t}}):(O(i)||E(i))&&(n[r]=F(e,r))}return n}function Lr(e,t){if(e===void 0)return!1;if(t){let{context:{ids:n}}=t;return n.has(e)}return ut(e)!==null}var Rr=[],zr=new WeakMap;function Br(){Rr.forEach(e=>e(...zr.get(e))),Rr=[]}function Vr(e,...t){zr.set(e,t),!Rr.includes(e)&&Rr.push(e)===1&&requestAnimationFrame(Br)}function Hr(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}function Ur(e){return e.composedPath()[0]||null}function Wr(e){return typeof e==`string`?e.endsWith(`px`)?Number(e.slice(0,e.length-2)):Number(e):e}function Gr(e){if(e!=null)return typeof e==`number`?`${e}px`:e.endsWith(`px`)?e:`${e}px`}function Kr(e,t){let n=e.trim().split(/\s+/g),r={top:n[0]};switch(n.length){case 1:r.right=n[0],r.bottom=n[0],r.left=n[0];break;case 2:r.right=n[1],r.left=n[1],r.bottom=n[0];break;case 3:r.right=n[1],r.bottom=n[2],r.left=n[1];break;case 4:r.right=n[1],r.bottom=n[2],r.left=n[3];break;default:throw Error(`[seemly/getMargin]:`+e+` is not a valid value.`)}return t===void 0?r:r[t]}function qr(e=8){return Math.random().toString(16).slice(2,2+e)}function Jr(e){return e.composedPath()[0]}var Yr={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function Xr(e,t,n){if(e===`mousemoveoutside`){let e=e=>{t.contains(Jr(e))||n(e)};return{mousemove:e,touchstart:e}}else if(e===`clickoutside`){let e=!1,r=n=>{e=!t.contains(Jr(n))},i=r=>{e&&(t.contains(Jr(r))||n(r))};return{mousedown:r,mouseup:i,touchstart:r,touchend:i}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function Zr(e,t,n){let r=Yr[e],i=r.get(t);i===void 0&&r.set(t,i=new WeakMap);let a=i.get(n);return a===void 0&&i.set(n,a=Xr(e,t,n)),a}function Qr(e,t,n,r){if(e===`mousemoveoutside`||e===`clickoutside`){let i=Zr(e,t,n);return Object.keys(i).forEach(e=>{K(e,document,i[e],r)}),!0}return!1}function $r(e,t,n,r){if(e===`mousemoveoutside`||e===`clickoutside`){let i=Zr(e,t,n);return Object.keys(i).forEach(e=>{q(e,document,i[e],r)}),!0}return!1}function ei(){if(typeof window>`u`)return{on:()=>{},off:()=>{}};let e=new WeakMap,t=new WeakMap;function n(){e.set(this,!0)}function r(){e.set(this,!0),t.set(this,!0)}function i(e,t,n){let r=e[t];return e[t]=function(){return n.apply(e,arguments),r.apply(e,arguments)},e}function a(e,t){e[t]=Event.prototype[t]}let o=new WeakMap,s=Object.getOwnPropertyDescriptor(Event.prototype,`currentTarget`);function c(){return o.get(this)??null}function l(e,t){s!==void 0&&Object.defineProperty(e,"currentTarget",{configurable:!0,enumerable:!0,get:t??s.get})}let u={bubble:{},capture:{}},d={};function f(){let s=function(s){let{type:d,eventPhase:f,bubbles:p}=s,m=Jr(s);if(f===2)return;let h=f===1?`capture`:`bubble`,g=m,_=[];for(;g===null&&(g=window),_.push(g),g!==window;)g=g.parentNode||null;let v=u.capture[d],y=u.bubble[d];if(i(s,`stopPropagation`,n),i(s,`stopImmediatePropagation`,r),l(s,c),h===`capture`){if(v===void 0)return;for(let n=_.length-1;n>=0&&!e.has(s);--n){let e=_[n],r=v.get(e);if(r!==void 0){o.set(s,e);for(let e of r){if(t.has(s))break;e(s)}}if(n===0&&!p&&y!==void 0){let n=y.get(e);if(n!==void 0)for(let e of n){if(t.has(s))break;e(s)}}}}else if(h===`bubble`){if(y===void 0)return;for(let n=0;n<_.length&&!e.has(s);++n){let e=_[n],r=y.get(e);if(r!==void 0){o.set(s,e);for(let e of r){if(t.has(s))break;e(s)}}}}a(s,`stopPropagation`),a(s,`stopImmediatePropagation`),l(s)};return s.displayName=`evtdUnifiedHandler`,s}function p(){let e=function(e){let{type:t,eventPhase:n}=e;if(n!==2)return;let r=d[t];r!==void 0&&r.forEach(t=>t(e))};return e.displayName=`evtdUnifiedWindowEventHandler`,e}let m=f(),h=p();function g(e,t){let n=u[e];return n[t]===void 0&&(n[t]=new Map,window.addEventListener(t,m,e===`capture`)),n[t]}function _(e){return d[e]===void 0&&(d[e]=new Set,window.addEventListener(e,h)),d[e]}function v(e,t){let n=e.get(t);return n===void 0&&e.set(t,n=new Set),n}function y(e,t,n,r){let i=u[t][n];if(i!==void 0){let t=i.get(e);if(t!==void 0&&t.has(r))return!0}return!1}function b(e,t){let n=d[e];return!!(n!==void 0&&n.has(t))}function x(e,t,n,r){let i;if(i=typeof r==`object`&&r.once===!0?a=>{S(e,t,i,r),n(a)}:n,Qr(e,t,i,r))return;let a=v(g(r===!0||typeof r==`object`&&r.capture===!0?`capture`:`bubble`,e),t);if(a.has(i)||a.add(i),t===window){let t=_(e);t.has(i)||t.add(i)}}function S(e,t,n,r){if($r(e,t,n,r))return;let i=r===!0||typeof r==`object`&&r.capture===!0,a=i?`capture`:`bubble`,o=g(a,e),s=v(o,t);if(t===window&&!y(t,i?`bubble`:`capture`,e,n)&&b(e,n)){let t=d[e];t.delete(n),t.size===0&&(window.removeEventListener(e,h),d[e]=void 0)}s.has(n)&&s.delete(n),s.size===0&&o.delete(t),o.size===0&&(window.removeEventListener(e,m,a===`capture`),u[a][e]=void 0)}return{on:x,off:S}}var{on:K,off:q}=ei();function ti(e){let t=P(!!e.value);if(t.value)return Oe(t);let n=T(e,e=>{e&&(t.value=!0,n())});return Oe(t)}function ni(e){let t=I(e),n=P(t.value);return T(t,e=>{n.value=e}),typeof e==`function`?n:{__v_isRef:!0,get value(){return n.value},set value(t){e.set(t)}}}function ri(){return ee()!==null}var ii=typeof window<`u`,ai=ii?document?.fonts?.ready:void 0,oi=!1;ai===void 0?oi=!0:ai.then(()=>{oi=!0});function si(e){if(oi)return;let n=!1;m(()=>{oi||ai?.then(()=>{n||e()})}),t(()=>{n=!0})}var ci=P(null);function li(e){if(e.clientX>0||e.clientY>0)ci.value={x:e.clientX,y:e.clientY};else{let{target:t}=e;if(t instanceof Element){let{left:e,top:n,width:r,height:i}=t.getBoundingClientRect();e>0||n>0?ci.value={x:e+r/2,y:n+i/2}:ci.value={x:0,y:0}}else ci.value=null}}var ui=0,di=!0;function fi(){if(!ii)return Oe(P(null));ui===0&&K(`click`,document,li,!0);let e=()=>{ui+=1};return(di&&=ri())?(me(e),t(()=>{--ui,ui===0&&q(`click`,document,li,!0)})):e(),Oe(ci)}var pi=P(void 0),mi=0;function hi(){pi.value=Date.now()}var gi=!0;function _i(e){if(!ii)return Oe(P(!1));let n=P(!1),r=null;function i(){r!==null&&window.clearTimeout(r)}function a(){i(),n.value=!0,r=window.setTimeout(()=>{n.value=!1},e)}mi===0&&K(`click`,window,hi,!0);let o=()=>{mi+=1,K(`click`,window,a,!0)};return(gi&&=ri())?(me(o),t(()=>{--mi,mi===0&&q(`click`,window,hi,!0),q(`click`,window,a,!0),i()})):o(),Oe(n)}function vi(e,t){return T(e,e=>{e!==void 0&&(t.value=e)}),I(()=>e.value===void 0?t.value:e.value)}function yi(){let e=P(!1);return m(()=>{e.value=!0}),Oe(e)}function bi(e,t){return I(()=>{for(let n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}var xi=(typeof window>`u`?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1)&&!window.MSStream;function Si(){return xi}function Ci(e={},n){let r=ae({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:i,keyup:a}=e,o=e=>{switch(e.key){case`Control`:r.ctrl=!0;break;case`Meta`:r.command=!0,r.win=!0;break;case`Shift`:r.shift=!0;break;case`Tab`:r.tab=!0;break}i!==void 0&&Object.keys(i).forEach(t=>{if(t!==e.key)return;let n=i[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},s=e=>{switch(e.key){case`Control`:r.ctrl=!1;break;case`Meta`:r.command=!1,r.win=!1;break;case`Shift`:r.shift=!1;break;case`Tab`:r.tab=!1;break}a!==void 0&&Object.keys(a).forEach(t=>{if(t!==e.key)return;let n=a[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},c=()=>{(n===void 0||n.value)&&(K(`keydown`,document,o),K(`keyup`,document,s)),n!==void 0&&T(n,e=>{e?(K(`keydown`,document,o),K(`keyup`,document,s)):(q(`keydown`,document,o),q(`keyup`,document,s))})};return ri()?(me(c),t(()=>{(n===void 0||n.value)&&(q(`keydown`,document,o),q(`keyup`,document,s))})):c(),Oe(r)}G(`n-internal-select-menu`);var wi=G(`n-internal-select-menu-body`),Ti=G(`n-drawer-body`);G(`n-drawer`);var Ei=G(`n-modal-body`),Di=G(`n-modal-provider`),Oi=G(`n-modal`),ki=G(`n-popover-body`),Ai=`__disabled__`;function ji(e){let n=L(Ei,null),r=L(Ti,null),i=L(ki,null),a=L(wi,null),o=P();if(typeof document<`u`){o.value=document.fullscreenElement;let e=()=>{o.value=document.fullscreenElement};m(()=>{K(`fullscreenchange`,document,e)}),t(()=>{q(`fullscreenchange`,document,e)})}return ni(()=>{let{to:t}=e;return t===void 0?n?.value?n.value.$el??n.value:r?.value?r.value:i?.value?i.value:a?.value?a.value:t??(o.value||`body`):t===!1?Ai:t===!0?o.value||`body`:t})}ji.tdkey=Ai,ji.propTo={type:[String,Object,Boolean],default:void 0};function Mi(e,t,n){if(!t)return e;let r=P(e.value),i=null;return T(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}var Ni=typeof document<`u`&&typeof window<`u`,Pi=P(!1);function Fi(){Pi.value=!0}function Ii(){Pi.value=!1}var Li=0;function Ri(){return Ni&&(me(()=>{Li||(window.addEventListener(`compositionstart`,Fi),window.addEventListener(`compositionend`,Ii)),Li++}),t(()=>{Li<=1?(window.removeEventListener(`compositionstart`,Fi),window.removeEventListener(`compositionend`,Ii),Li=0):Li--})),Pi}var zi=0,Bi=``,Vi=``,Hi=``,Ui=``,Wi=P(`0px`);function Gi(e){if(typeof document>`u`)return;let n=document.documentElement,r,i=!1,a=()=>{n.style.marginRight=Bi,n.style.overflow=Vi,n.style.overflowX=Hi,n.style.overflowY=Ui,Wi.value=`0px`};m(()=>{r=T(e,e=>{if(e){if(!zi){let e=window.innerWidth-n.offsetWidth;e>0&&(Bi=n.style.marginRight,n.style.marginRight=`${e}px`,Wi.value=`${e}px`),Vi=n.style.overflow,Hi=n.style.overflowX,Ui=n.style.overflowY,n.style.overflow=`hidden`,n.style.overflowX=`hidden`,n.style.overflowY=`hidden`}i=!0,zi++}else zi--,zi||a(),i=!1},{immediate:!0})}),t(()=>{r?.(),i&&=(zi--,zi||a(),!1)})}function Ki(e){let t={isDeactivated:!1},n=!1;return g(()=>{if(t.isDeactivated=!1,!n){n=!0;return}e()}),pe(()=>{t.isDeactivated=!0,n||=!0}),t}function qi(e,t,n=`default`){let r=t[n];if(r===void 0)throw Error(`[vueuc/${e}]: slot[${n}] is empty.`);return r()}function Ji(e,t=!0,n=[]){return e.forEach(e=>{if(e!==null){if(typeof e!=`object`){(typeof e==`string`||typeof e==`number`)&&n.push(k(String(e)));return}if(Array.isArray(e)){Ji(e,t,n);return}if(e.type===j){if(e.children===null)return;Array.isArray(e.children)&&Ji(e.children,t,n)}else e.type!==de&&n.push(e)}}),n}function Yi(e,t,n=`default`){let r=t[n];if(r===void 0)throw Error(`[vueuc/${e}]: slot[${n}] is empty.`);let i=Ji(r());if(i.length===1)return i[0];throw Error(`[vueuc/${e}]: slot[${n}] should have exactly one child.`)}var Xi=null;function Zi(){if(Xi===null&&(Xi=document.getElementById(`v-binder-view-measurer`),Xi===null)){Xi=document.createElement(`div`),Xi.id=`v-binder-view-measurer`;let{style:e}=Xi;e.position=`fixed`,e.left=`0`,e.right=`0`,e.top=`0`,e.bottom=`0`,e.pointerEvents=`none`,e.visibility=`hidden`,document.body.appendChild(Xi)}return Xi.getBoundingClientRect()}function Qi(e,t){let n=Zi();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function $i(e){let t=e.getBoundingClientRect(),n=Zi();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function ea(e){return e.nodeType===9?null:e.parentNode}function ta(e){if(e===null)return null;let t=ea(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){let{overflow:e,overflowX:n,overflowY:r}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(e+r+n))return t}return ta(t)}var na=R({name:`Binder`,props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){d(`VBinder`,ee()?.proxy);let n=L(`VBinder`,null),r=P(null),i=t=>{r.value=t,n&&e.syncTargetWithParent&&n.setTargetRef(t)},a=[],o=()=>{let e=r.value;for(;e=ta(e),e!==null;)a.push(e);for(let e of a)K(`scroll`,e,f,!0)},s=()=>{for(let e of a)q(`scroll`,e,f,!0);a=[]},c=new Set,l=e=>{c.size===0&&o(),c.has(e)||c.add(e)},u=e=>{c.has(e)&&c.delete(e),c.size===0&&s()},f=()=>{Vr(p)},p=()=>{c.forEach(e=>e())},m=new Set,h=e=>{m.size===0&&K(`resize`,window,_),m.has(e)||m.add(e)},g=e=>{m.has(e)&&m.delete(e),m.size===0&&q(`resize`,window,_)},_=()=>{m.forEach(e=>e())};return t(()=>{q(`resize`,window,_),s()}),{targetRef:r,setTargetRef:i,addScrollListener:l,removeScrollListener:u,addResizeListener:h,removeResizeListener:g}},render(){return qi(`binder`,this.$slots)}}),ra=R({name:`Target`,setup(){let{setTargetRef:e,syncTarget:t}=L(`VBinder`);return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){let{syncTarget:e,setTargetDirective:t}=this;return e?Se(Yi(`follower`,this.$slots),[[t]]):Yi(`follower`,this.$slots)}}),ia=`@@mmoContext`,aa={mounted(e,{value:t}){e[ia]={handler:void 0},typeof t==`function`&&(e[ia].handler=t,K(`mousemoveoutside`,e,t))},updated(e,{value:t}){let n=e[ia];typeof t==`function`?n.handler?n.handler!==t&&(q(`mousemoveoutside`,e,n.handler),n.handler=t,K(`mousemoveoutside`,e,t)):(e[ia].handler=t,K(`mousemoveoutside`,e,t)):n.handler&&=(q(`mousemoveoutside`,e,n.handler),void 0)},unmounted(e){let{handler:t}=e[ia];t&&q(`mousemoveoutside`,e,t),e[ia].handler=void 0}},oa=`@@coContext`,sa={mounted(e,{value:t,modifiers:n}){e[oa]={handler:void 0},typeof t==`function`&&(e[oa].handler=t,K(`clickoutside`,e,t,{capture:n.capture}))},updated(e,{value:t,modifiers:n}){let r=e[oa];typeof t==`function`?r.handler?r.handler!==t&&(q(`clickoutside`,e,r.handler,{capture:n.capture}),r.handler=t,K(`clickoutside`,e,t,{capture:n.capture})):(e[oa].handler=t,K(`clickoutside`,e,t,{capture:n.capture})):r.handler&&=(q(`clickoutside`,e,r.handler,{capture:n.capture}),void 0)},unmounted(e,{modifiers:t}){let{handler:n}=e[oa];n&&q(`clickoutside`,e,n,{capture:t.capture}),e[oa].handler=void 0}};function ca(e,t){console.error(`[vdirs/${e}]: ${t}`)}var la=new class{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(e,t){let{elementZIndex:n}=this;if(t!==void 0){e.style.zIndex=`${t}`,n.delete(e);return}let{nextZIndex:r}=this;n.has(e)&&n.get(e)+1===this.nextZIndex||(e.style.zIndex=`${r}`,n.set(e,r),this.nextZIndex=r+1,this.squashState())}unregister(e,t){let{elementZIndex:n}=this;n.has(e)?n.delete(e):t===void 0&&ca(`z-index-manager/unregister-element`,`Element not found when unregistering.`),this.squashState()}squashState(){let{elementCount:e}=this;e||(this.nextZIndex=2e3),this.nextZIndex-e>2500&&this.rearrange()}rearrange(){let e=Array.from(this.elementZIndex.entries());e.sort((e,t)=>e[1]-t[1]),this.nextZIndex=2e3,e.forEach(e=>{let t=e[0],n=this.nextZIndex++;`${n}`!==t.style.zIndex&&(t.style.zIndex=`${n}`)})}},ua=`@@ziContext`,da={mounted(e,t){let{value:n={}}=t,{zIndex:r,enabled:i}=n;e[ua]={enabled:!!i,initialized:!1},i&&(la.ensureZIndex(e,r),e[ua].initialized=!0)},updated(e,t){let{value:n={}}=t,{zIndex:r,enabled:i}=n,a=e[ua].enabled;i&&!a&&(la.ensureZIndex(e,r),e[ua].initialized=!0),e[ua].enabled=!!i},unmounted(e,t){if(!e[ua].initialized)return;let{value:n={}}=t,{zIndex:r}=n;la.unregister(e,r)}};function fa(e,t){console.error(`[vueuc/${e}]: ${t}`)}var{c:pa}=Qe(),ma=`vueuc-style`;function ha(e){return typeof e==`string`?document.querySelector(e):e()||null}var ga=R({name:`LazyTeleport`,props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:ti(F(e,`show`)),mergedTo:I(()=>{let{to:t}=e;return t??`body`})}},render(){return this.showTeleport?this.disabled?qi(`lazy-teleport`,this.$slots):b(be,{disabled:this.disabled,to:this.mergedTo},qi(`lazy-teleport`,this.$slots)):null}}),_a={top:`bottom`,bottom:`top`,left:`right`,right:`left`},va={start:`end`,center:`center`,end:`start`},ya={top:`height`,bottom:`height`,left:`width`,right:`width`},ba={"bottom-start":`top left`,bottom:`top center`,"bottom-end":`top right`,"top-start":`bottom left`,top:`bottom center`,"top-end":`bottom right`,"right-start":`top left`,right:`center left`,"right-end":`bottom left`,"left-start":`top right`,left:`center right`,"left-end":`bottom right`},xa={"bottom-start":`bottom left`,bottom:`bottom center`,"bottom-end":`bottom right`,"top-start":`top left`,top:`top center`,"top-end":`top right`,"right-start":`top right`,right:`center right`,"right-end":`bottom right`,"left-start":`top left`,left:`center left`,"left-end":`bottom left`},Sa={"bottom-start":`right`,"bottom-end":`left`,"top-start":`right`,"top-end":`left`,"right-start":`bottom`,"right-end":`top`,"left-start":`bottom`,"left-end":`top`},Ca={top:!0,bottom:!1,left:!0,right:!1},wa={top:`end`,bottom:`start`,left:`end`,right:`start`};function Ta(e,t,n,r,i,a){if(!i||a)return{placement:e,top:0,left:0};let[o,s]=e.split(`-`),c=s??`center`,l={top:0,left:0},u=(e,i,a)=>{let o=0,s=0,c=n[e]-t[i]-t[e];return c>0&&r&&(a?s=Ca[i]?c:-c:o=Ca[i]?c:-c),{left:o,top:s}},d=o===`left`||o===`right`;if(c!==`center`){let r=Sa[e],i=_a[r],a=ya[r];if(n[a]>t[a]){if(t[r]+t[a]<n[a]){let e=(n[a]-t[a])/2;t[r]<e||t[i]<e?t[r]<t[i]?(c=va[s],l=u(a,i,d)):l=u(a,r,d):c=`center`}}else n[a]<t[a]&&t[i]<0&&t[r]>t[i]&&(c=va[s])}else{let e=o===`bottom`||o===`top`?`left`:`top`,r=_a[e],i=ya[e],a=(n[i]-t[i])/2;(t[e]<a||t[r]<a)&&(t[e]>t[r]?(c=wa[e],l=u(i,e,d)):(c=wa[r],l=u(i,r,d)))}let f=o;return t[o]<n[ya[o]]&&t[o]<t[_a[o]]&&(f=_a[o]),{placement:c===`center`?f:`${f}-${c}`,left:l.left,top:l.top}}function Ea(e,t){return t?xa[e]:ba[e]}function Da(e,t,n,r,i,a){if(a)switch(e){case`bottom-start`:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:`translateY(-100%)`};case`bottom-end`:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:`translateX(-100%) translateY(-100%)`};case`top-start`:return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:``};case`top-end`:return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:`translateX(-100%)`};case`right-start`:return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:`translateX(-100%)`};case`right-end`:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:`translateX(-100%) translateY(-100%)`};case`left-start`:return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:``};case`left-end`:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:`translateY(-100%)`};case`top`:return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:`translateX(-50%)`};case`right`:return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:`translateX(-100%) translateY(-50%)`};case`left`:return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:`translateY(-50%)`};default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:`translateX(-50%) translateY(-100%)`}}switch(e){case`bottom-start`:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:``};case`bottom-end`:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:`translateX(-100%)`};case`top-start`:return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:`translateY(-100%)`};case`top-end`:return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:`translateX(-100%) translateY(-100%)`};case`right-start`:return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:``};case`right-end`:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:`translateY(-100%)`};case`left-start`:return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:`translateX(-100%)`};case`left-end`:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:`translateX(-100%) translateY(-100%)`};case`top`:return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+i)}px`,transform:`translateY(-100%) translateX(-50%)`};case`right`:return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:`translateY(-50%)`};case`left`:return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:`translateY(-50%) translateX(-100%)`};default:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+i)}px`,transform:`translateX(-50%)`}}}var Oa=pa([pa(`.v-binder-follower-container`,{position:`absolute`,left:`0`,right:`0`,top:`0`,height:`0`,pointerEvents:`none`,zIndex:`auto`}),pa(`.v-binder-follower-content`,{position:`absolute`,zIndex:`auto`},[pa(`> *`,{pointerEvents:`all`})])]),ka=R({name:`Follower`,inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:`bottom`},syncTrigger:{type:Array,default:[`resize`,`scroll`]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){let n=L(`VBinder`),r=ni(()=>e.enabled===void 0?e.show:e.enabled),i=P(null),o=P(null),s=()=>{let{syncTrigger:t}=e;t.includes(`scroll`)&&n.addScrollListener(u),t.includes(`resize`)&&n.addResizeListener(u)},c=()=>{n.removeScrollListener(u),n.removeResizeListener(u)};m(()=>{r.value&&(u(),s())});let l=$e();Oa.mount({id:`vueuc/binder`,head:!0,anchorMetaName:ma,ssr:l}),t(()=>{c()}),si(()=>{r.value&&u()});let u=()=>{if(!r.value)return;let t=i.value;if(t===null)return;let a=n.targetRef,{x:s,y:c,overlap:l}=e,u=s!==void 0&&c!==void 0?Qi(s,c):$i(a);t.style.setProperty(`--v-target-width`,`${Math.round(u.width)}px`),t.style.setProperty(`--v-target-height`,`${Math.round(u.height)}px`);let{width:d,minWidth:f,placement:p,internalShift:m,flip:h}=e;t.setAttribute(`v-placement`,p),l?t.setAttribute(`v-overlap`,``):t.removeAttribute(`v-overlap`);let{style:g}=t;d===`target`?g.width=`${u.width}px`:d===void 0?g.width=``:g.width=d,f===`target`?g.minWidth=`${u.width}px`:f===void 0?g.minWidth=``:g.minWidth=f;let _=$i(t),v=$i(o.value),{left:y,top:b,placement:x}=Ta(p,u,_,m,h,l),S=Ea(x,l),{left:C,top:w,transform:T}=Da(x,v,u,b,y,l);t.setAttribute(`v-placement`,x),t.style.setProperty(`--v-offset-left`,`${Math.round(y)}px`),t.style.setProperty(`--v-offset-top`,`${Math.round(b)}px`),t.style.transform=`translateX(${C}) translateY(${w}) ${T}`,t.style.setProperty(`--v-transform-origin`,S),t.style.transformOrigin=S};T(r,e=>{e?(s(),d()):c()});let d=()=>{a().then(u).catch(e=>console.error(e))};[`placement`,`x`,`y`,`internalShift`,`flip`,`width`,`overlap`,`minWidth`].forEach(t=>{T(F(e,t),u)}),[`teleportDisabled`].forEach(t=>{T(F(e,t),d)}),T(F(e,`syncTrigger`),e=>{e.includes(`resize`)?n.addResizeListener(u):n.removeResizeListener(u),e.includes(`scroll`)?n.addScrollListener(u):n.removeScrollListener(u)});let f=yi();return{VBinder:n,mergedEnabled:r,offsetContainerRef:o,followerRef:i,mergedTo:ni(()=>{let{to:t}=e;if(t!==void 0)return t;f.value}),syncPosition:u}},render(){return b(ga,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e;let t=b(`div`,{class:[`v-binder-follower-container`,this.containerClass],ref:`offsetContainerRef`},[b(`div`,{class:`v-binder-follower-content`,ref:`followerRef`},(e=this.$slots).default?.call(e))]);return this.zindexable?Se(t,[[da,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}}),Aa=[],ja=function(){return Aa.some(function(e){return e.activeTargets.length>0})},Ma=function(){return Aa.some(function(e){return e.skippedTargets.length>0})},Na=`ResizeObserver loop completed with undelivered notifications.`,Pa=function(){var e;typeof ErrorEvent==`function`?e=new ErrorEvent(`error`,{message:Na}):(e=document.createEvent(`Event`),e.initEvent(`error`,!1,!1),e.message=Na),window.dispatchEvent(e)},Fa;(function(e){e.BORDER_BOX=`border-box`,e.CONTENT_BOX=`content-box`,e.DEVICE_PIXEL_CONTENT_BOX=`device-pixel-content-box`})(Fa||={});var Ia=function(e){return Object.freeze(e)},La=function(){function e(e,t){this.inlineSize=e,this.blockSize=t,Ia(this)}return e}(),Ra=function(){function e(e,t,n,r){return this.x=e,this.y=t,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Ia(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),za=function(e){return e instanceof SVGElement&&`getBBox`in e},Ba=function(e){if(za(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e,a=i.offsetWidth,o=i.offsetHeight;return!(a||o||e.getClientRects().length)},Va=function(e){if(e instanceof Element)return!0;var t=e?.ownerDocument?.defaultView;return!!(t&&e instanceof t.Element)},Ha=function(e){switch(e.tagName){case`INPUT`:if(e.type!==`image`)break;case`VIDEO`:case`AUDIO`:case`EMBED`:case`OBJECT`:case`CANVAS`:case`IFRAME`:case`IMG`:return!0}return!1},Ua=typeof window<`u`?window:{},Wa=new WeakMap,Ga=/auto|scroll/,Ka=/^tb|vertical/,qa=/msie|trident/i.test(Ua.navigator&&Ua.navigator.userAgent),Ja=function(e){return parseFloat(e||`0`)},Ya=function(e,t,n){return e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=!1),new La((n?t:e)||0,(n?e:t)||0)},Xa=Ia({devicePixelContentBoxSize:Ya(),borderBoxSize:Ya(),contentBoxSize:Ya(),contentRect:new Ra(0,0,0,0)}),Za=function(e,t){if(t===void 0&&(t=!1),Wa.has(e)&&!t)return Wa.get(e);if(Ba(e))return Wa.set(e,Xa),Xa;var n=getComputedStyle(e),r=za(e)&&e.ownerSVGElement&&e.getBBox(),i=!qa&&n.boxSizing===`border-box`,a=Ka.test(n.writingMode||``),o=!r&&Ga.test(n.overflowY||``),s=!r&&Ga.test(n.overflowX||``),c=r?0:Ja(n.paddingTop),l=r?0:Ja(n.paddingRight),u=r?0:Ja(n.paddingBottom),d=r?0:Ja(n.paddingLeft),f=r?0:Ja(n.borderTopWidth),p=r?0:Ja(n.borderRightWidth),m=r?0:Ja(n.borderBottomWidth),h=r?0:Ja(n.borderLeftWidth),g=d+l,_=c+u,v=h+p,y=f+m,b=s?e.offsetHeight-y-e.clientHeight:0,x=o?e.offsetWidth-v-e.clientWidth:0,S=i?g+v:0,C=i?_+y:0,w=r?r.width:Ja(n.width)-S-x,T=r?r.height:Ja(n.height)-C-b,E=w+g+x+v,D=T+_+b+y,O=Ia({devicePixelContentBoxSize:Ya(Math.round(w*devicePixelRatio),Math.round(T*devicePixelRatio),a),borderBoxSize:Ya(E,D,a),contentBoxSize:Ya(w,T,a),contentRect:new Ra(d,c,w,T)});return Wa.set(e,O),O},Qa=function(e,t,n){var r=Za(e,n),i=r.borderBoxSize,a=r.contentBoxSize,o=r.devicePixelContentBoxSize;switch(t){case Fa.DEVICE_PIXEL_CONTENT_BOX:return o;case Fa.BORDER_BOX:return i;default:return a}},$a=function(){function e(e){var t=Za(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=Ia([t.borderBoxSize]),this.contentBoxSize=Ia([t.contentBoxSize]),this.devicePixelContentBoxSize=Ia([t.devicePixelContentBoxSize])}return e}(),eo=function(e){if(Ba(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},to=function(){var e=1/0,t=[];Aa.forEach(function(n){if(n.activeTargets.length!==0){var r=[];n.activeTargets.forEach(function(t){var n=new $a(t.target),i=eo(t.target);r.push(n),t.lastReportedSize=Qa(t.target,t.observedBox),i<e&&(e=i)}),t.push(function(){n.callback.call(n.observer,r,n.observer)}),n.activeTargets.splice(0,n.activeTargets.length)}});for(var n=0,r=t;n<r.length;n++){var i=r[n];i()}return e},no=function(e){Aa.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(n){n.isActive()&&(eo(n.target)>e?t.activeTargets.push(n):t.skippedTargets.push(n))})})},ro=function(){var e=0;for(no(e);ja();)e=to(),no(e);return Ma()&&Pa(),e>0},io,ao=[],oo=function(){return ao.splice(0).forEach(function(e){return e()})},so=function(e){if(!io){var t=0,n=document.createTextNode(``);new MutationObserver(function(){return oo()}).observe(n,{characterData:!0}),io=function(){n.textContent=`${t?t--:t++}`}}ao.push(e),io()},co=function(e){so(function(){requestAnimationFrame(e)})},lo=0,uo=function(){return!!lo},fo=250,po={attributes:!0,characterData:!0,childList:!0,subtree:!0},mo=[`resize`,`load`,`transitionend`,`animationend`,`animationstart`,`animationiteration`,`keyup`,`keydown`,`mouseup`,`mousedown`,`mouseover`,`mouseout`,`blur`,`focus`],ho=function(e){return e===void 0&&(e=0),Date.now()+e},go=!1,_o=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(e===void 0&&(e=fo),!go){go=!0;var n=ho(e);co(function(){var r=!1;try{r=ro()}finally{if(go=!1,e=n-ho(),!uo())return;r?t.run(1e3):e>0?t.run(e):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,po)};document.body?t():Ua.addEventListener(`DOMContentLoaded`,t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),mo.forEach(function(t){return Ua.addEventListener(t,e.listener,!0)}))},e.prototype.stop=function(){var e=this;this.stopped||=(this.observer&&this.observer.disconnect(),mo.forEach(function(t){return Ua.removeEventListener(t,e.listener,!0)}),!0)},e}()),vo=function(e){!lo&&e>0&&_o.start(),lo+=e,!lo&&_o.stop()},yo=function(e){return!za(e)&&!Ha(e)&&getComputedStyle(e).display===`inline`},bo=function(){function e(e,t){this.target=e,this.observedBox=t||Fa.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e=Qa(this.target,this.observedBox,!0);return yo(this.target)&&(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},e}(),xo=function(){function e(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t}return e}(),So=new WeakMap,Co=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},wo=function(){function e(){}return e.connect=function(e,t){var n=new xo(e,t);So.set(e,n)},e.observe=function(e,t,n){var r=So.get(e),i=r.observationTargets.length===0;Co(r.observationTargets,t)<0&&(i&&Aa.push(r),r.observationTargets.push(new bo(t,n&&n.box)),vo(1),_o.schedule())},e.unobserve=function(e,t){var n=So.get(e),r=Co(n.observationTargets,t),i=n.observationTargets.length===1;r>=0&&(i&&Aa.splice(Aa.indexOf(n),1),n.observationTargets.splice(r,1),vo(-1))},e.disconnect=function(e){var t=this,n=So.get(e);n.observationTargets.slice().forEach(function(n){return t.unobserve(e,n.target)}),n.activeTargets.splice(0,n.activeTargets.length)},e}(),To=function(){function e(e){if(arguments.length===0)throw TypeError(`Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.`);if(typeof e!=`function`)throw TypeError(`Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.`);wo.connect(this,e)}return e.prototype.observe=function(e,t){if(arguments.length===0)throw TypeError(`Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.`);if(!Va(e))throw TypeError(`Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element`);wo.observe(this,e,t)},e.prototype.unobserve=function(e){if(arguments.length===0)throw TypeError(`Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.`);if(!Va(e))throw TypeError(`Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element`);wo.unobserve(this,e)},e.prototype.disconnect=function(){wo.disconnect(this)},e.toString=function(){return`function ResizeObserver () { [polyfill code] }`},e}(),Eo=new class{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<`u`&&window.ResizeObserver||To)(this.handleResize),this.elHandlersMap=new Map}handleResize(e){for(let t of e){let e=this.elHandlersMap.get(t.target);e!==void 0&&e(t)}}registerHandler(e,t){this.elHandlersMap.set(e,t),this.observer.observe(e)}unregisterHandler(e){this.elHandlersMap.has(e)&&(this.elHandlersMap.delete(e),this.observer.unobserve(e))}},Do=R({name:`ResizeObserver`,props:{onResize:Function},setup(e){let n=!1,r=ee().proxy;function i(t){let{onResize:n}=e;n!==void 0&&n(t)}m(()=>{let e=r.$el;if(e===void 0){fa(`resize-observer`,`$el does not exist.`);return}if(e.nextElementSibling!==e.nextSibling&&e.nodeType===3&&e.nodeValue!==``){fa(`resize-observer`,`$el can not be observed (it may be a text node).`);return}e.nextElementSibling!==null&&(Eo.registerHandler(e.nextElementSibling,i),n=!0)}),t(()=>{n&&Eo.unregisterHandler(r.$el.nextElementSibling)})},render(){return y(this.$slots,`default`)}}),Oo=`v-hidden`,ko=pa(`[v-hidden]`,{display:`none!important`}),Ao=R({name:`Overflow`,props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){let n=P(null),r=P(null);function i(i){let{value:a}=n,{getCounter:o,getTail:s}=e,c;if(c=o===void 0?r.value:o(),!a||!c)return;c.hasAttribute(Oo)&&c.removeAttribute(Oo);let{children:l}=a;if(i.showAllItemsBeforeCalculate)for(let e of l)e.hasAttribute(Oo)&&e.removeAttribute(Oo);let u=a.offsetWidth,d=[],f=t.tail?s?.():null,p=f?f.offsetWidth:0,m=!1,h=a.children.length-+!!t.tail;for(let t=0;t<h-1;++t){if(t<0)continue;let n=l[t];if(m){n.hasAttribute(Oo)||n.setAttribute(Oo,``);continue}else n.hasAttribute(Oo)&&n.removeAttribute(Oo);let r=n.offsetWidth;if(p+=r,d[t]=r,p>u){let{updateCounter:n}=e;for(let r=t;r>=0;--r){let i=h-1-r;n===void 0?c.textContent=`${i}`:n(i);let a=c.offsetWidth;if(p-=d[r],p+a<=u||r===0){m=!0,t=r-1,f&&(t===-1?(f.style.maxWidth=`${u-a}px`,f.style.boxSizing=`border-box`):f.style.maxWidth=``);let{onUpdateCount:n}=e;n&&n(i);break}}}}let{onUpdateOverflow:g}=e;m?g!==void 0&&g(!0):(g!==void 0&&g(!1),c.setAttribute(Oo,``))}let a=$e();return ko.mount({id:`vueuc/overflow`,head:!0,anchorMetaName:ma,ssr:a}),m(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:r,sync:i}},render(){let{$slots:e}=this;return a(()=>this.sync({showAllItemsBeforeCalculate:!1})),b(`div`,{class:`v-overflow`,ref:`selfRef`},[y(e,`default`),e.counter?e.counter():b(`span`,{style:{display:`inline-block`},ref:`counterRef`}),e.tail?e.tail():null])}});function jo(e){return e instanceof HTMLElement}function Mo(e){for(let t=0;t<e.childNodes.length;t++){let n=e.childNodes[t];if(jo(n)&&(Po(n)||Mo(n)))return!0}return!1}function No(e){for(let t=e.childNodes.length-1;t>=0;t--){let n=e.childNodes[t];if(jo(n)&&(Po(n)||No(n)))return!0}return!1}function Po(e){if(!Fo(e))return!1;try{e.focus({preventScroll:!0})}catch{}return document.activeElement===e}function Fo(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute(`tabIndex`)!==null)return!0;if(e.getAttribute(`disabled`))return!1;switch(e.nodeName){case`A`:return!!e.href&&e.rel!==`ignore`;case`INPUT`:return e.type!==`hidden`&&e.type!==`file`;case`SELECT`:case`TEXTAREA`:return!0;default:return!1}}var Io=[],Lo=R({name:`FocusTrap`,props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:[String,Function],finalFocusTo:[String,Function],returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){let n=qr(),r=P(null),i=P(null),a=!1,o=!1,s=typeof document>`u`?null:document.activeElement;function c(){return Io[Io.length-1]===n}function l(t){var n;t.code===`Escape`&&c()&&((n=e.onEsc)==null||n.call(e,t))}m(()=>{T(()=>e.active,e=>{e?(f(),K(`keydown`,document,l)):(q(`keydown`,document,l),a&&p())},{immediate:!0})}),t(()=>{q(`keydown`,document,l),a&&p()});function u(e){if(!o&&c()){let t=d();if(t===null||t.contains(Ur(e)))return;h(`first`)}}function d(){let e=r.value;if(e===null)return null;let t=e;for(;t=t.nextSibling,!(t===null||t instanceof Element&&t.tagName===`DIV`););return t}function f(){var t;if(!e.disabled){if(Io.push(n),e.autoFocus){let{initialFocusTo:n}=e;n===void 0?h(`first`):(t=ha(n))==null||t.focus({preventScroll:!0})}a=!0,document.addEventListener(`focus`,u,!0)}}function p(){var t;if(e.disabled||(document.removeEventListener(`focus`,u,!0),Io=Io.filter(e=>e!==n),c()))return;let{finalFocusTo:r}=e;r===void 0?e.returnFocusOnDeactivated&&s instanceof HTMLElement&&(o=!0,s.focus({preventScroll:!0}),o=!1):(t=ha(r))==null||t.focus({preventScroll:!0})}function h(t){if(c()&&e.active){let e=r.value,n=i.value;if(e!==null&&n!==null){let r=d();if(r==null||r===n){o=!0,e.focus({preventScroll:!0}),o=!1;return}o=!0;let i=t===`first`?Mo(r):No(r);o=!1,i||(o=!0,e.focus({preventScroll:!0}),o=!1)}}}function g(e){if(o)return;let t=d();t!==null&&(e.relatedTarget!==null&&t.contains(e.relatedTarget)?h(`last`):h(`first`))}function _(e){o||(e.relatedTarget!==null&&e.relatedTarget===r.value?h(`last`):h(`first`))}return{focusableStartRef:r,focusableEndRef:i,focusableStyle:`position: absolute; height: 0; width: 0;`,handleStartFocus:g,handleEndFocus:_}},render(){let{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();let{active:t,focusableStyle:n}=this;return b(j,null,[b(`div`,{"aria-hidden":`true`,tabindex:t?`0`:`-1`,ref:`focusableStartRef`,style:n,onFocus:this.handleStartFocus}),e(),b(`div`,{"aria-hidden":`true`,style:n,ref:`focusableEndRef`,tabindex:t?`0`:`-1`,onFocus:this.handleEndFocus})])}});function Ro(e){return e.replace(/#|\(|\)|,|\s|\./g,`_`)}var zo=/^(\d|\.)+$/,Bo=/(\d|\.)+/;function Vo(e,{c:t=1,offset:n=0,attachPx:r=!0}={}){if(typeof e==`number`){let r=(e+n)*t;return r===0?`0`:`${r}px`}else if(typeof e==`string`)if(zo.test(e)){let i=(Number(e)+n)*t;return r?i===0?`0`:`${i}px`:`${i}`}else{let r=Bo.exec(e);return r?e.replace(Bo,String((Number(r[0])+n)*t)):e}return e}function Ho(e){let{left:t,right:n,top:r,bottom:i}=Kr(e);return`${r} ${t} ${i} ${n}`}var Uo;function Wo(){return Uo===void 0&&(Uo=navigator.userAgent.includes(`Node.js`)||navigator.userAgent.includes(`jsdom`)),Uo}var Go=new WeakSet;function Ko(e){return!Go.has(e)}function J(e,...t){if(Array.isArray(e))e.forEach(e=>J(e,...t));else return e(...t)}function qo(e){return t=>{t?e.value=t.$el:e.value=null}}function Jo(e,t=!0,n=[]){return e.forEach(e=>{if(e!==null){if(typeof e!=`object`){(typeof e==`string`||typeof e==`number`)&&n.push(k(String(e)));return}if(Array.isArray(e)){Jo(e,t,n);return}if(e.type===j){if(e.children===null)return;Array.isArray(e.children)&&Jo(e.children,t,n)}else{if(e.type===de&&t)return;n.push(e)}}}),n}function Yo(e,t=`default`,n=void 0){let r=e[t];if(!r)return qe(`getFirstSlotVNode`,`slot[${t}] is empty`),null;let i=Jo(r(n));return i.length===1?i[0]:(qe(`getFirstSlotVNode`,`slot[${t}] should have exactly one child`),null)}function Xo(e,t,n){if(!t)return null;let r=Jo(t(n));return r.length===1?r[0]:(qe(`getFirstSlotVNode`,`slot[${e}] should have exactly one child`),null)}function Zo(e,t=[],n){let r={};return t.forEach(t=>{r[t]=e[t]}),Object.assign(r,n)}function Qo(e){return Object.keys(e)}function $o(e,t=[],n){let r={};return Object.getOwnPropertyNames(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),Object.assign(r,n)}function Y(e,...t){return typeof e==`function`?e(...t):typeof e==`string`?k(e):typeof e==`number`?k(String(e)):null}function es(e){return e.some(e=>S(e)?!(e.type===de||e.type===j&&!es(e.children)):!0)?e:null}function ts(e,t){return e&&es(e())||t()}function ns(e,t,n){return e&&es(e(t))||n(t)}function rs(e,t){return t(e&&es(e())||null)}function is(e){return!(e&&es(e()))}var as=R({render(){var e;return(e=this.$slots).default?.call(e)}}),os=G(`n-form-item`);function ss(e,{defaultSize:n=`medium`,mergedSize:r,mergedDisabled:i}={}){let a=L(os,null);d(os,null);let o=I(r?()=>r(a):()=>{let{size:t}=e;if(t)return t;if(a){let{mergedSize:e}=a;if(e.value!==void 0)return e.value}return n}),s=I(i?()=>i(a):()=>{let{disabled:t}=e;return t===void 0?a?a.disabled.value:!1:t}),c=I(()=>{let{status:t}=e;return t||a?.mergedValidationStatus.value});return t(()=>{a&&a.restoreValidation()}),{mergedSizeRef:o,mergedDisabledRef:s,mergedStatusRef:c,nTriggerFormBlur(){a&&a.handleContentBlur()},nTriggerFormChange(){a&&a.handleContentChange()},nTriggerFormFocus(){a&&a.handleContentFocus()},nTriggerFormInput(){a&&a.handleContentInput()}}}var cs=`[object Symbol]`;function ls(e){return typeof e==`symbol`||ht(e)&&Re(e)==cs}function us(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var ds=1/0,fs=mt?mt.prototype:void 0,ps=fs?fs.toString:void 0;function ms(e){if(typeof e==`string`)return e;if(Xe(e))return us(e,ms)+``;if(ls(e))return ps?ps.call(e):``;var t=e+``;return t==`0`&&1/e==-ds?`-0`:t}var hs=Et(Je,`WeakMap`),gs=_t(Object.keys,Object),_s=Object.prototype.hasOwnProperty;function vs(e){if(!Ot(e))return gs(e);var t=[];for(var n in Object(e))_s.call(e,n)&&n!=`constructor`&&t.push(n);return t}function ys(e){return st(e)?pt(e):vs(e)}var bs=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,xs=/^\w*$/;function Ss(e,t){if(Xe(e))return!1;var n=typeof e;return n==`number`||n==`symbol`||n==`boolean`||e==null||ls(e)?!0:xs.test(e)||!bs.test(e)||t!=null&&e in Object(t)}var Cs=`Expected a function`;function ws(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw TypeError(Cs);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(ws.Cache||dt),n}ws.Cache=dt;var Ts=500;function Es(e){var t=ws(e,function(e){return n.size===Ts&&n.clear(),e}),n=t.cache;return t}var Ds=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Os=/\\(\\)?/g,ks=Es(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(``),e.replace(Ds,function(e,n,r,i){t.push(r?i.replace(Os,`$1`):n||e)}),t});function As(e){return e==null?``:ms(e)}function js(e,t){return Xe(e)?e:Ss(e,t)?[e]:ks(As(e))}var Ms=1/0;function Ns(e){if(typeof e==`string`||ls(e))return e;var t=e+``;return t==`0`&&1/e==-Ms?`-0`:t}function Ps(e,t){t=js(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[Ns(t[n++])];return n&&n==r?e:void 0}function Fs(e,t,n){var r=e==null?void 0:Ps(e,t);return r===void 0?n:r}function Is(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function Ls(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++r<i;)a[r]=e[r+t];return a}function Rs(e,t,n){var r=e.length;return n=n===void 0?r:n,!t&&n>=r?e:Ls(e,t,n)}var zs=RegExp(`[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]`);function Bs(e){return zs.test(e)}function Vs(e){return e.split(``)}var Hs=`\\ud800-\\udfff`,Us=`\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff`,Ws=`\\ufe0e\\ufe0f`,Gs=`[`+Hs+`]`,Ks=`[`+Us+`]`,qs=`\\ud83c[\\udffb-\\udfff]`,Js=`(?:`+Ks+`|`+qs+`)`,Ys=`[^`+Hs+`]`,Xs=`(?:\\ud83c[\\udde6-\\uddff]){2}`,Zs=`[\\ud800-\\udbff][\\udc00-\\udfff]`,Qs=`\\u200d`,$s=Js+`?`,ec=`[`+Ws+`]?`,tc=`(?:`+Qs+`(?:`+[Ys,Xs,Zs].join(`|`)+`)`+ec+$s+`)*`,nc=ec+$s+tc,rc=`(?:`+[Ys+Ks+`?`,Ks,Xs,Zs,Gs].join(`|`)+`)`,ic=RegExp(qs+`(?=`+qs+`)|`+rc+nc,`g`);function ac(e){return e.match(ic)||[]}function oc(e){return Bs(e)?ac(e):Vs(e)}function sc(e){return function(t){t=As(t);var n=Bs(t)?oc(t):void 0,r=n?n[0]:t.charAt(0),i=n?Rs(n,1).join(``):t.slice(1);return r[e]()+i}}var cc=sc(`toUpperCase`);function lc(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function uc(){return[]}var dc=Object.prototype.propertyIsEnumerable,fc=Object.getOwnPropertySymbols,pc=fc?function(e){return e==null?[]:(e=Object(e),lc(fc(e),function(t){return dc.call(e,t)}))}:uc;function mc(e,t,n){var r=t(e);return Xe(e)?r:Is(r,n(e))}function hc(e){return mc(e,ys,pc)}var gc=Et(Je,`DataView`),_c=Et(Je,`Promise`),vc=Et(Je,`Set`),yc=`[object Map]`,bc=`[object Object]`,xc=`[object Promise]`,Sc=`[object Set]`,Cc=`[object WeakMap]`,wc=`[object DataView]`,Tc=tt(gc),Ec=tt(bt),Dc=tt(_c),Oc=tt(vc),kc=tt(hs),Ac=Re;(gc&&Ac(new gc(new ArrayBuffer(1)))!=wc||bt&&Ac(new bt)!=yc||_c&&Ac(_c.resolve())!=xc||vc&&Ac(new vc)!=Sc||hs&&Ac(new hs)!=Cc)&&(Ac=function(e){var t=Re(e),n=t==bc?e.constructor:void 0,r=n?tt(n):``;if(r)switch(r){case Tc:return wc;case Ec:return yc;case Dc:return xc;case Oc:return Sc;case kc:return Cc}return t});var jc=Ac,Mc=`__lodash_hash_undefined__`;function Nc(e){return this.__data__.set(e,Mc),this}function Pc(e){return this.__data__.has(e)}function Fc(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new dt;++t<n;)this.add(e[t])}Fc.prototype.add=Fc.prototype.push=Nc,Fc.prototype.has=Pc;function Ic(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function Lc(e,t){return e.has(t)}var Rc=1,zc=2;function Bc(e,t,n,r,i,a){var o=n&Rc,s=e.length,c=t.length;if(s!=c&&!(o&&c>s))return!1;var l=a.get(e),u=a.get(t);if(l&&u)return l==t&&u==e;var d=-1,f=!0,p=n&zc?new Fc:void 0;for(a.set(e,t),a.set(t,e);++d<s;){var m=e[d],h=t[d];if(r)var g=o?r(h,m,d,t,e,a):r(m,h,d,e,t,a);if(g!==void 0){if(g)continue;f=!1;break}if(p){if(!Ic(t,function(e,t){if(!Lc(p,t)&&(m===e||i(m,e,n,r,a)))return p.push(t)})){f=!1;break}}else if(!(m===h||i(m,h,n,r,a))){f=!1;break}}return a.delete(e),a.delete(t),f}function Vc(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function Hc(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}var Uc=1,Wc=2,Gc=`[object Boolean]`,Kc=`[object Date]`,qc=`[object Error]`,Jc=`[object Map]`,Yc=`[object Number]`,Xc=`[object RegExp]`,Zc=`[object Set]`,Qc=`[object String]`,$c=`[object Symbol]`,el=`[object ArrayBuffer]`,tl=`[object DataView]`,nl=mt?mt.prototype:void 0,rl=nl?nl.valueOf:void 0;function il(e,t,n,r,i,a,o){switch(n){case tl:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case el:return!(e.byteLength!=t.byteLength||!a(new wt(e),new wt(t)));case Gc:case Kc:case Yc:return et(+e,+t);case qc:return e.name==t.name&&e.message==t.message;case Xc:case Qc:return e==t+``;case Jc:var s=Vc;case Zc:var c=r&Uc;if(s||=Hc,e.size!=t.size&&!c)return!1;var l=o.get(e);if(l)return l==t;r|=Wc,o.set(e,t);var u=Bc(s(e),s(t),r,i,a,o);return o.delete(e),u;case $c:if(rl)return rl.call(e)==rl.call(t)}return!1}var al=1,ol=Object.prototype.hasOwnProperty;function sl(e,t,n,r,i,a){var o=n&al,s=hc(e),c=s.length;if(c!=hc(t).length&&!o)return!1;for(var l=c;l--;){var u=s[l];if(!(o?u in t:ol.call(t,u)))return!1}var d=a.get(e),f=a.get(t);if(d&&f)return d==t&&f==e;var p=!0;a.set(e,t),a.set(t,e);for(var m=o;++l<c;){u=s[l];var h=e[u],g=t[u];if(r)var _=o?r(g,h,u,t,e,a):r(h,g,u,e,t,a);if(!(_===void 0?h===g||i(h,g,n,r,a):_)){p=!1;break}m||=u==`constructor`}if(p&&!m){var v=e.constructor,y=t.constructor;v!=y&&`constructor`in e&&`constructor`in t&&!(typeof v==`function`&&v instanceof v&&typeof y==`function`&&y instanceof y)&&(p=!1)}return a.delete(e),a.delete(t),p}var cl=1,ll=`[object Arguments]`,ul=`[object Array]`,dl=`[object Object]`,fl=Object.prototype.hasOwnProperty;function pl(e,t,n,r,i,a){var o=Xe(e),s=Xe(t),c=o?ul:jc(e),l=s?ul:jc(t);c=c==ll?dl:c,l=l==ll?dl:l;var u=c==dl,d=l==dl,f=c==l;if(f&&at(e)){if(!at(t))return!1;o=!0,u=!1}if(f&&!u)return a||=new lt,o||ft(e)?Bc(e,t,n,r,i,a):il(e,t,c,n,r,i,a);if(!(n&cl)){var p=u&&fl.call(e,`__wrapped__`),m=d&&fl.call(t,`__wrapped__`);if(p||m){var h=p?e.value():e,g=m?t.value():t;return a||=new lt,i(h,g,n,r,a)}}return f?(a||=new lt,sl(e,t,n,r,i,a)):!1}function ml(e,t,n,r,i){return e===t?!0:e==null||t==null||!ht(e)&&!ht(t)?e!==e&&t!==t:pl(e,t,n,r,ml,i)}var hl=1,gl=2;function _l(e,t,n,r){var i=n.length,a=i,o=!r;if(e==null)return!a;for(e=Object(e);i--;){var s=n[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){s=n[i];var c=s[0],l=e[c],u=s[1];if(o&&s[2]){if(l===void 0&&!(c in e))return!1}else{var d=new lt;if(r)var f=r(l,u,c,e,t,d);if(!(f===void 0?ml(u,l,hl|gl,r,d):f))return!1}}return!0}function vl(e){return e===e&&!Ve(e)}function yl(e){for(var t=ys(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,vl(i)]}return t}function bl(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function xl(e){var t=yl(e);return t.length==1&&t[0][2]?bl(t[0][0],t[0][1]):function(n){return n===e||_l(n,e,t)}}function Sl(e,t){return e!=null&&t in Object(e)}function Cl(e,t,n){t=js(t,e);for(var r=-1,i=t.length,a=!1;++r<i;){var o=Ns(t[r]);if(!(a=e!=null&&n(e,o)))break;e=e[o]}return a||++r!=i?a:(i=e==null?0:e.length,!!i&&Dt(i)&&Be(o,i)&&(Xe(e)||Tt(e)))}function wl(e,t){return e!=null&&Cl(e,t,Sl)}var Tl=1,El=2;function Dl(e,t){return Ss(e)&&vl(t)?bl(Ns(e),t):function(n){var r=Fs(n,e);return r===void 0&&r===t?wl(n,e):ml(t,r,Tl|El)}}function Ol(e){return function(t){return t?.[e]}}function kl(e){return function(t){return Ps(t,e)}}function Al(e){return Ss(e)?Ol(Ns(e)):kl(e)}function jl(e){return typeof e==`function`?e:e==null?He:typeof e==`object`?Xe(e)?Dl(e[0],e[1]):xl(e):Al(e)}function Ml(e,t){return e&&gt(e,t,ys)}function Nl(e,t){return function(n,r){if(n==null)return n;if(!st(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=Object(n);(t?a--:++a<i)&&r(o[a],a,o)!==!1;);return n}}var Pl=Nl(Ml);function Fl(e,t){var n=-1,r=st(e)?Array(e.length):[];return Pl(e,function(e,i,a){r[++n]=t(e,i,a)}),r}function Il(e,t){return(Xe(e)?us:Fl)(e,jl(t,3))}function Ll(e,t,n){if(!t)return;let r=$e(),i=I(()=>{let{value:n}=t;if(!n)return;let r=n[e];if(r)return r}),a=L(Ue,null),o=()=>{l(()=>{let{value:t}=n,o=`${t}${e}Rtl`;if(Lr(o,r))return;let{value:s}=i;s&&s.style.mount({id:o,head:!0,anchorMetaName:St,props:{bPrefix:t?`.${t}-`:void 0},ssr:r,parent:a?.styleMountTarget})})};return r?o():me(o),i}var Rl=R({name:`BaseIconSwitchTransition`,setup(e,{slots:t}){let n=yi();return()=>b(Ht,{name:`icon-switch-transition`,appear:n.value},t)}});function zl(e,t){let n=R({render(){return t()}});return R({name:cc(e),setup(){let t=L(Ue,null)?.mergedIconsRef;return()=>{let r=t?.value?.[e];return r?r():b(n,null)}}})}var Bl=R({name:`ChevronDownFilled`,render(){return b(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},b(`path`,{d:`M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z`,fill:`currentColor`}))}}),Vl=R({name:`ChevronRight`,render(){return b(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},b(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`}))}}),Hl=zl(`close`,()=>b(`svg`,{viewBox:`0 0 12 12`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0},b(`g`,{stroke:`none`,"stroke-width":`1`,fill:`none`,"fill-rule":`evenodd`},b(`g`,{fill:`currentColor`,"fill-rule":`nonzero`},b(`path`,{d:`M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z`}))))),Ul=zl(`error`,()=>b(`svg`,{viewBox:`0 0 48 48`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`},b(`g`,{stroke:`none`,"stroke-width":`1`,"fill-rule":`evenodd`},b(`g`,{"fill-rule":`nonzero`},b(`path`,{d:`M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z`}))))),Wl=zl(`info`,()=>b(`svg`,{viewBox:`0 0 28 28`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`},b(`g`,{stroke:`none`,"stroke-width":`1`,"fill-rule":`evenodd`},b(`g`,{"fill-rule":`nonzero`},b(`path`,{d:`M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z`}))))),Gl=zl(`success`,()=>b(`svg`,{viewBox:`0 0 48 48`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`},b(`g`,{stroke:`none`,"stroke-width":`1`,"fill-rule":`evenodd`},b(`g`,{"fill-rule":`nonzero`},b(`path`,{d:`M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z`}))))),Kl=zl(`warning`,()=>b(`svg`,{viewBox:`0 0 24 24`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`},b(`g`,{stroke:`none`,"stroke-width":`1`,"fill-rule":`evenodd`},b(`g`,{"fill-rule":`nonzero`},b(`path`,{d:`M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z`}))))),{cubicBezierEaseInOut:ql}=yt;function Jl({originalTransform:e=``,left:t=0,top:n=0,transition:r=`all .3s ${ql} !important`}={}){return[B(`&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to`,{transform:`${e} scale(0.75)`,left:t,top:n,opacity:0}),B(`&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from`,{transform:`scale(1) ${e}`,left:t,top:n,opacity:1}),B(`&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active`,{transformOrigin:`center`,position:`absolute`,left:t,top:n,transition:r})]}var Yl=V(`base-close`,`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[W(`absolute`,`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),B(`&::before`,`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),Ke(`disabled`,[B(`&:hover`,`
 color: var(--n-close-icon-color-hover);
 `),B(`&:hover::before`,`
 background-color: var(--n-close-color-hover);
 `),B(`&:focus::before`,`
 background-color: var(--n-close-color-hover);
 `),B(`&:active`,`
 color: var(--n-close-icon-color-pressed);
 `),B(`&:active::before`,`
 background-color: var(--n-close-color-pressed);
 `)]),W(`disabled`,`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),W(`round`,[B(`&::before`,`
 border-radius: 50%;
 `)])]),Xl=R({name:`BaseClose`,props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return ot(`-base-close`,Yl,F(e,`clsPrefix`)),()=>{let{clsPrefix:t,disabled:n,absolute:r,round:i,isButtonTag:a}=e;return b(a?`button`:`div`,{type:a?`button`:void 0,tabindex:n||!e.focusable?-1:0,"aria-disabled":n,"aria-label":`close`,role:a?void 0:`button`,disabled:n,class:[`${t}-base-close`,r&&`${t}-base-close--absolute`,n&&`${t}-base-close--disabled`,i&&`${t}-base-close--round`],onMousedown:t=>{e.focusable||t.preventDefault()},onClick:e.onClick},b(vt,{clsPrefix:t},{default:()=>b(Hl,null)}))}}}),Zl=R({name:`FadeInExpandTransition`,props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:t}){function n(t){e.width?t.style.maxWidth=`${t.offsetWidth}px`:t.style.maxHeight=`${t.offsetHeight}px`,t.offsetWidth}function r(t){e.width?t.style.maxWidth=`0`:t.style.maxHeight=`0`,t.offsetWidth;let{onLeave:n}=e;n&&n()}function i(t){e.width?t.style.maxWidth=``:t.style.maxHeight=``;let{onAfterLeave:n}=e;n&&n()}function a(t){if(t.style.transition=`none`,e.width){let e=t.offsetWidth;t.style.maxWidth=`0`,t.offsetWidth,t.style.transition=``,t.style.maxWidth=`${e}px`}else if(e.reverse)t.style.maxHeight=`${t.offsetHeight}px`,t.offsetHeight,t.style.transition=``,t.style.maxHeight=`0`;else{let e=t.offsetHeight;t.style.maxHeight=`0`,t.offsetWidth,t.style.transition=``,t.style.maxHeight=`${e}px`}t.offsetWidth}function o(t){var n;e.width?t.style.maxWidth=``:e.reverse||(t.style.maxHeight=``),(n=e.onAfterEnter)==null||n.call(e)}return()=>{let{group:s,width:c,appear:l,mode:u}=e,d=s?zn:Ht,f={name:c?`fade-in-width-expand-transition`:`fade-in-height-expand-transition`,appear:l,onEnter:a,onAfterEnter:o,onBeforeLeave:n,onLeave:r,onAfterLeave:i};return s||(f.mode=u),b(d,f,t)}}}),Ql=B([B(`@keyframes rotator`,`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),V(`base-loading`,`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[z(`transition-wrapper`,`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[Jl()]),z(`placeholder`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Jl({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),z(`container`,`
 animation: rotator 3s linear infinite both;
 `,[z(`icon`,`
 height: 1em;
 width: 1em;
 `)])])]),$l=`1.6s`,eu=R({name:`BaseLoading`,props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0}},{strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},scale:{type:Number,default:1},radius:{type:Number,default:100}}),setup(e){ot(`-base-loading`,Ql,F(e,`clsPrefix`))},render(){let{clsPrefix:e,radius:t,strokeWidth:n,stroke:r,scale:i}=this,a=t/i;return b(`div`,{class:`${e}-base-loading`,role:`img`,"aria-label":`loading`},b(Rl,null,{default:()=>this.show?b(`div`,{key:`icon`,class:`${e}-base-loading__transition-wrapper`},b(`div`,{class:`${e}-base-loading__container`},b(`svg`,{class:`${e}-base-loading__icon`,viewBox:`0 0 ${2*a} ${2*a}`,xmlns:`http://www.w3.org/2000/svg`,style:{color:r}},b(`g`,null,b(`animateTransform`,{attributeName:`transform`,type:`rotate`,values:`0 ${a} ${a};270 ${a} ${a}`,begin:`0s`,dur:$l,fill:`freeze`,repeatCount:`indefinite`}),b(`circle`,{class:`${e}-base-loading__icon`,fill:`none`,stroke:`currentColor`,"stroke-width":n,"stroke-linecap":`round`,cx:a,cy:a,r:t-n/2,"stroke-dasharray":5.67*t,"stroke-dashoffset":18.48*t},b(`animateTransform`,{attributeName:`transform`,type:`rotate`,values:`0 ${a} ${a};135 ${a} ${a};450 ${a} ${a}`,begin:`0s`,dur:$l,fill:`freeze`,repeatCount:`indefinite`}),b(`animate`,{attributeName:`stroke-dashoffset`,values:`${5.67*t};${1.42*t};${5.67*t}`,begin:`0s`,dur:$l,fill:`freeze`,repeatCount:`indefinite`})))))):b(`div`,{key:`placeholder`,class:`${e}-base-loading__placeholder`},this.$slots)}))}}),{cubicBezierEaseInOut:tu}=yt;function nu({name:e=`fade-in`,enterDuration:t=`0.2s`,leaveDuration:n=`0.2s`,enterCubicBezier:r=tu,leaveCubicBezier:i=tu}={}){return[B(`&.${e}-transition-enter-active`,{transition:`all ${t} ${r}!important`}),B(`&.${e}-transition-leave-active`,{transition:`all ${n} ${i}!important`}),B(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),B(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}var ru={railInsetHorizontalBottom:`auto 2px 4px 2px`,railInsetHorizontalTop:`4px 2px auto 2px`,railInsetVerticalRight:`2px 4px 2px auto`,railInsetVerticalLeft:`2px auto 2px 4px`,railColor:`transparent`};function iu(e){let{scrollbarColor:t,scrollbarColorHover:n,scrollbarHeight:r,scrollbarWidth:i,scrollbarBorderRadius:a}=e;return Object.assign(Object.assign({},ru),{height:r,width:i,borderRadius:a,color:t,colorHover:n})}var au={name:`Scrollbar`,common:Ct,self:iu},ou=V(`scrollbar`,`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[B(`>`,[V(`scrollbar-container`,`
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `,[B(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `),B(`>`,[V(`scrollbar-content`,`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),B(`>, +`,[V(`scrollbar-rail`,`
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `,[W(`horizontal`,`
 height: var(--n-scrollbar-height);
 `,[B(`>`,[z(`scrollbar`,`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),W(`horizontal--top`,`
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `),W(`horizontal--bottom`,`
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `),W(`vertical`,`
 width: var(--n-scrollbar-width);
 `,[B(`>`,[z(`scrollbar`,`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),W(`vertical--left`,`
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `),W(`vertical--right`,`
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `),W(`disabled`,[B(`>`,[z(`scrollbar`,`pointer-events: none;`)])]),B(`>`,[z(`scrollbar`,`
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[nu(),B(`&:hover`,`background-color: var(--n-scrollbar-color-hover);`)])])])])]),su=R({name:`Scrollbar`,props:Object.assign(Object.assign({},U.props),{duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:`hover`},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean,internalExposeWidthCssVar:Boolean,yPlacement:{type:String,default:`right`},xPlacement:{type:String,default:`bottom`}}),inheritAttrs:!1,setup(e){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=Ze(e),a=Ll(`Scrollbar`,i,n),o=P(null),s=P(null),c=P(null),u=P(null),d=P(null),f=P(null),p=P(null),h=P(null),g=P(null),_=P(null),v=P(null),y=P(0),b=P(0),x=P(!1),S=P(!1),C=!1,w=!1,T,E,D=0,O=0,k=0,A=0,j=Si(),M=U(`Scrollbar`,`-scrollbar`,ou,au,e,n),ee=I(()=>{let{value:e}=h,{value:t}=f,{value:n}=_;return e===null||t===null||n===null?0:Math.min(e,n*e/t+Wr(M.value.self.width)*1.5)}),te=I(()=>`${ee.value}px`),ne=I(()=>{let{value:e}=g,{value:t}=p,{value:n}=v;return e===null||t===null||n===null?0:n*e/t+Wr(M.value.self.height)*1.5}),re=I(()=>`${ne.value}px`),N=I(()=>{let{value:e}=h,{value:t}=y,{value:n}=f,{value:r}=_;if(e===null||n===null||r===null)return 0;{let i=n-e;return i?t/i*(r-ee.value):0}}),ie=I(()=>`${N.value}px`),ae=I(()=>{let{value:e}=g,{value:t}=b,{value:n}=p,{value:r}=v;if(e===null||n===null||r===null)return 0;{let i=n-e;return i?t/i*(r-ne.value):0}}),oe=I(()=>`${ae.value}px`),se=I(()=>{let{value:e}=h,{value:t}=f;return e!==null&&t!==null&&t>e}),ce=I(()=>{let{value:e}=g,{value:t}=p;return e!==null&&t!==null&&t>e}),le=I(()=>{let{trigger:t}=e;return t===`none`||x.value}),ue=I(()=>{let{trigger:t}=e;return t===`none`||S.value}),de=I(()=>{let{container:t}=e;return t?t():s.value}),fe=I(()=>{let{content:t}=e;return t?t():c.value}),pe=(t,n)=>{if(!e.scrollable)return;if(typeof t==`number`){ve(t,n??0,0,!1,`auto`);return}let{left:r,top:i,index:a,elSize:o,position:s,behavior:c,el:l,debounce:u=!0}=t;(r!==void 0||i!==void 0)&&ve(r??0,i??0,0,!1,c),l===void 0?a!==void 0&&o!==void 0?ve(0,a*o,o,u,c):s===`bottom`?ve(0,2**53-1,0,!1,c):s===`top`&&ve(0,0,0,!1,c):ve(0,l.offsetTop,l.offsetHeight,u,c)},me=Ki(()=>{e.container||pe({top:y.value,left:b.value})}),he=()=>{me.isDeactivated||ke()},ge=t=>{if(me.isDeactivated)return;let{onResize:n}=e;n&&n(t),ke()},_e=(t,n)=>{if(!e.scrollable)return;let{value:r}=de;r&&(typeof t==`object`?r.scrollBy(t):r.scrollBy(t,n||0))};function ve(e,t,n,r,i){let{value:a}=de;if(a){if(r){let{scrollTop:r,offsetHeight:o}=a;if(t>r){t+n<=r+o||a.scrollTo({left:e,top:t+n-o,behavior:i});return}}a.scrollTo({left:e,top:t,behavior:i})}}function ye(){Ce(),we(),ke()}function be(){F()}function F(){xe(),Se()}function xe(){E!==void 0&&window.clearTimeout(E),E=window.setTimeout(()=>{S.value=!1},e.duration)}function Se(){T!==void 0&&window.clearTimeout(T),T=window.setTimeout(()=>{x.value=!1},e.duration)}function Ce(){T!==void 0&&window.clearTimeout(T),x.value=!0}function we(){E!==void 0&&window.clearTimeout(E),S.value=!0}function Te(t){let{onScroll:n}=e;n&&n(t),Ee()}function Ee(){let{value:e}=de;e&&(y.value=e.scrollTop,b.value=e.scrollLeft*(a?.value?-1:1))}function De(){let{value:e}=fe;e&&(f.value=e.offsetHeight,p.value=e.offsetWidth);let{value:t}=de;t&&(h.value=t.offsetHeight,g.value=t.offsetWidth);let{value:n}=d,{value:r}=u;n&&(v.value=n.offsetWidth),r&&(_.value=r.offsetHeight)}function Oe(){let{value:e}=de;e&&(y.value=e.scrollTop,b.value=e.scrollLeft*(a?.value?-1:1),h.value=e.offsetHeight,g.value=e.offsetWidth,f.value=e.scrollHeight,p.value=e.scrollWidth);let{value:t}=d,{value:n}=u;t&&(v.value=t.offsetWidth),n&&(_.value=n.offsetHeight)}function ke(){e.scrollable&&(e.useUnifiedContainer?Oe():(De(),Ee()))}function Ae(e){return!o.value?.contains(Ur(e))}function je(e){e.preventDefault(),e.stopPropagation(),w=!0,K(`mousemove`,window,L,!0),K(`mouseup`,window,Me,!0),O=b.value,k=a?.value?window.innerWidth-e.clientX:e.clientX}function L(t){if(!w)return;T!==void 0&&window.clearTimeout(T),E!==void 0&&window.clearTimeout(E);let{value:n}=g,{value:r}=p,{value:i}=ne;if(n===null||r===null)return;let o=(a?.value?window.innerWidth-t.clientX-k:t.clientX-k)*(r-n)/(n-i),s=r-n,c=O+o;c=Math.min(s,c),c=Math.max(c,0);let{value:l}=de;if(l){l.scrollLeft=c*(a?.value?-1:1);let{internalOnUpdateScrollLeft:t}=e;t&&t(c)}}function Me(e){e.preventDefault(),e.stopPropagation(),q(`mousemove`,window,L,!0),q(`mouseup`,window,Me,!0),w=!1,ke(),Ae(e)&&F()}function Ne(e){e.preventDefault(),e.stopPropagation(),C=!0,K(`mousemove`,window,Pe,!0),K(`mouseup`,window,R,!0),D=y.value,A=e.clientY}function Pe(e){if(!C)return;T!==void 0&&window.clearTimeout(T),E!==void 0&&window.clearTimeout(E);let{value:t}=h,{value:n}=f,{value:r}=ee;if(t===null||n===null)return;let i=(e.clientY-A)*(n-t)/(t-r),a=n-t,o=D+i;o=Math.min(a,o),o=Math.max(o,0);let{value:s}=de;s&&(s.scrollTop=o)}function R(e){e.preventDefault(),e.stopPropagation(),q(`mousemove`,window,Pe,!0),q(`mouseup`,window,R,!0),C=!1,ke(),Ae(e)&&F()}l(()=>{let{value:e}=ce,{value:t}=se,{value:r}=n,{value:i}=d,{value:a}=u;i&&(e?i.classList.remove(`${r}-scrollbar-rail--disabled`):i.classList.add(`${r}-scrollbar-rail--disabled`)),a&&(t?a.classList.remove(`${r}-scrollbar-rail--disabled`):a.classList.add(`${r}-scrollbar-rail--disabled`))}),m(()=>{e.container||ke()}),t(()=>{T!==void 0&&window.clearTimeout(T),E!==void 0&&window.clearTimeout(E),q(`mousemove`,window,Pe,!0),q(`mouseup`,window,R,!0)});let Fe=I(()=>{let{common:{cubicBezierEaseInOut:e},self:{color:t,colorHover:n,height:r,width:i,borderRadius:o,railInsetHorizontalTop:s,railInsetHorizontalBottom:c,railInsetVerticalRight:l,railInsetVerticalLeft:u,railColor:d}}=M.value,{top:f,right:p,bottom:m,left:h}=Kr(s),{top:g,right:_,bottom:v,left:y}=Kr(c),{top:b,right:x,bottom:S,left:C}=Kr(a?.value?Ho(l):l),{top:w,right:T,bottom:E,left:D}=Kr(a?.value?Ho(u):u);return{"--n-scrollbar-bezier":e,"--n-scrollbar-color":t,"--n-scrollbar-color-hover":n,"--n-scrollbar-border-radius":o,"--n-scrollbar-width":i,"--n-scrollbar-height":r,"--n-scrollbar-rail-top-horizontal-top":f,"--n-scrollbar-rail-right-horizontal-top":p,"--n-scrollbar-rail-bottom-horizontal-top":m,"--n-scrollbar-rail-left-horizontal-top":h,"--n-scrollbar-rail-top-horizontal-bottom":g,"--n-scrollbar-rail-right-horizontal-bottom":_,"--n-scrollbar-rail-bottom-horizontal-bottom":v,"--n-scrollbar-rail-left-horizontal-bottom":y,"--n-scrollbar-rail-top-vertical-right":b,"--n-scrollbar-rail-right-vertical-right":x,"--n-scrollbar-rail-bottom-vertical-right":S,"--n-scrollbar-rail-left-vertical-right":C,"--n-scrollbar-rail-top-vertical-left":w,"--n-scrollbar-rail-right-vertical-left":T,"--n-scrollbar-rail-bottom-vertical-left":E,"--n-scrollbar-rail-left-vertical-left":D,"--n-scrollbar-rail-color":d}}),Ie=r?Ye(`scrollbar`,void 0,Fe,e):void 0;return Object.assign(Object.assign({},{scrollTo:pe,scrollBy:_e,sync:ke,syncUnifiedContainer:Oe,handleMouseEnterWrapper:ye,handleMouseLeaveWrapper:be}),{mergedClsPrefix:n,rtlEnabled:a,containerScrollTop:y,wrapperRef:o,containerRef:s,contentRef:c,yRailRef:u,xRailRef:d,needYBar:se,needXBar:ce,yBarSizePx:te,xBarSizePx:re,yBarTopPx:ie,xBarLeftPx:oe,isShowXBar:le,isShowYBar:ue,isIos:j,handleScroll:Te,handleContentResize:he,handleContainerResize:ge,handleYScrollMouseDown:Ne,handleXScrollMouseDown:je,containerWidth:g,cssVars:r?void 0:Fe,themeClass:Ie?.themeClass,onRender:Ie?.onRender})},render(){let{$slots:e,mergedClsPrefix:t,triggerDisplayManually:n,rtlEnabled:r,internalHoistYRail:i,yPlacement:a,xPlacement:o,xScrollable:c}=this;if(!this.scrollable)return e.default?.call(e);let l=this.trigger===`none`,u=(e,n)=>b(`div`,{ref:`yRailRef`,class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--vertical`,`${t}-scrollbar-rail--vertical--${a}`,e],"data-scrollbar-rail":!0,style:[n||``,this.verticalRailStyle],"aria-hidden":!0},b(l?as:Ht,l?null:{name:`fade-in-transition`},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?b(`div`,{class:`${t}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),d=()=>{var a;return(a=this.onRender)==null||a.call(this),b(`div`,s(this.$attrs,{role:`none`,ref:`wrapperRef`,class:[`${t}-scrollbar`,this.themeClass,r&&`${t}-scrollbar--rtl`],style:this.cssVars,onMouseenter:n?void 0:this.handleMouseEnterWrapper,onMouseleave:n?void 0:this.handleMouseLeaveWrapper}),[this.container?e.default?.call(e):b(`div`,{role:`none`,ref:`containerRef`,class:[`${t}-scrollbar-container`,this.containerClass],style:[this.containerStyle,this.internalExposeWidthCssVar?{"--n-scrollbar-current-width":Gr(this.containerWidth)}:void 0],onScroll:this.handleScroll,onWheel:this.onWheel},b(Do,{onResize:this.handleContentResize},{default:()=>b(`div`,{ref:`contentRef`,role:`none`,style:[{width:this.xScrollable?`fit-content`:null},this.contentStyle],class:[`${t}-scrollbar-content`,this.contentClass]},e)})),i?null:u(void 0,void 0),c&&b(`div`,{ref:`xRailRef`,class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--horizontal`,`${t}-scrollbar-rail--horizontal--${o}`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},b(l?as:Ht,l?null:{name:`fade-in-transition`},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?b(`div`,{class:`${t}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:r?this.xBarLeftPx:void 0,left:r?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},f=this.container?d():b(Do,{onResize:this.handleContainerResize},{default:d});return i?b(j,null,f,u(this.themeClass,this.cssVars)):f}}),cu=su;function lu(e){return Array.isArray(e)?e:[e]}var uu={STOP:`STOP`};function du(e,t){let n=t(e);e.children!==void 0&&n!==uu.STOP&&e.children.forEach(e=>du(e,t))}function fu(e,t={}){let{preserveGroup:n=!1}=t,r=[],i=n?e=>{e.isLeaf||(r.push(e.key),a(e.children))}:e=>{e.isLeaf||(e.isGroup||r.push(e.key),a(e.children))};function a(e){e.forEach(i)}return a(e),r}function pu(e,t){let{isLeaf:n}=e;return n===void 0?!t(e):n}function mu(e){return e.children}function hu(e){return e.key}function gu(){return!1}function _u(e,t){let{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function vu(e){return e.disabled===!0}function yu(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function bu(e){return e==null?[]:Array.isArray(e)?e:e.checkedKeys??[]}function xu(e){return e==null||Array.isArray(e)?[]:e.indeterminateKeys??[]}function Su(e,t){let n=new Set(e);return t.forEach(e=>{n.has(e)||n.add(e)}),Array.from(n)}function Cu(e,t){let n=new Set(e);return t.forEach(e=>{n.has(e)&&n.delete(e)}),Array.from(n)}function wu(e){return e?.type===`group`}var Tu=class extends Error{constructor(){super(),this.message=`SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.`}};function Eu(e,t,n,r){return Au(t.concat(e),n,r,!1)}function Du(e,t){let n=new Set;return e.forEach(e=>{let r=t.treeNodeMap.get(e);if(r!==void 0){let e=r.parent;for(;e!==null&&!(e.disabled||n.has(e.key));)n.add(e.key),e=e.parent}}),n}function Ou(e,t,n,r){let i=Au(t,n,r,!1),a=Au(e,n,r,!0),o=Du(e,n),s=[];return i.forEach(e=>{(a.has(e)||o.has(e))&&s.push(e)}),s.forEach(e=>i.delete(e)),i}function ku(e,t){let{checkedKeys:n,keysToCheck:r,keysToUncheck:i,indeterminateKeys:a,cascade:o,leafOnly:s,checkStrategy:c,allowNotLoaded:l}=e;if(!o)return r===void 0?i===void 0?{checkedKeys:Array.from(n),indeterminateKeys:Array.from(a)}:{checkedKeys:Cu(n,i),indeterminateKeys:Array.from(a)}:{checkedKeys:Su(n,r),indeterminateKeys:Array.from(a)};let{levelTreeNodeMap:u}=t,d;d=i===void 0?r===void 0?Au(n,t,l,!1):Eu(r,n,t,l):Ou(i,n,t,l);let f=c===`parent`,p=c===`child`||s,m=d,h=new Set,g=Math.max.apply(null,Array.from(u.keys()));for(let e=g;e>=0;--e){let t=e===0,n=u.get(e);for(let e of n){if(e.isLeaf)continue;let{key:n,shallowLoaded:r}=e;if(p&&r&&e.children.forEach(e=>{!e.disabled&&!e.isLeaf&&e.shallowLoaded&&m.has(e.key)&&m.delete(e.key)}),e.disabled||!r)continue;let i=!0,a=!1,o=!0;for(let t of e.children){let e=t.key;if(!t.disabled){if(o&&=!1,m.has(e))a=!0;else if(h.has(e)){a=!0,i=!1;break}else if(i=!1,a)break}}i&&!o?(f&&e.children.forEach(e=>{!e.disabled&&m.has(e.key)&&m.delete(e.key)}),m.add(n)):a&&h.add(n),t&&p&&m.has(n)&&m.delete(n)}}return{checkedKeys:Array.from(m),indeterminateKeys:Array.from(h)}}function Au(e,t,n,r){let{treeNodeMap:i,getChildren:a}=t,o=new Set,s=new Set(e);return e.forEach(e=>{let t=i.get(e);t!==void 0&&du(t,e=>{if(e.disabled)return uu.STOP;let{key:t}=e;if(!o.has(t)&&(o.add(t),s.add(t),yu(e.rawNode,a))){if(r)return uu.STOP;if(!n)throw new Tu}})}),s}function ju(e,{includeGroup:t=!1,includeSelf:n=!0},r){let i=r.treeNodeMap,a=e==null?null:i.get(e)??null,o={keyPath:[],treeNodePath:[],treeNode:a};if(a?.ignored)return o.treeNode=null,o;for(;a;)!a.ignored&&(t||!a.isGroup)&&o.treeNodePath.push(a),a=a.parent;return o.treeNodePath.reverse(),n||o.treeNodePath.pop(),o.keyPath=o.treeNodePath.map(e=>e.key),o}function Mu(e){if(e.length===0)return null;let t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function Nu(e,t){let n=e.siblings,r=n.length,{index:i}=e;return t?n[(i+1)%r]:i===n.length-1?null:n[i+1]}function Pu(e,t,{loop:n=!1,includeDisabled:r=!1}={}){let i=t===`prev`?Fu:Nu,a={reverse:t===`prev`},o=!1,s=null;function c(t){if(t!==null){if(t===e){if(!o)o=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!t.disabled||r)&&!t.ignored&&!t.isGroup){s=t;return}if(t.isGroup){let e=Lu(t,a);e===null?c(i(t,n)):s=e}else{let e=i(t,!1);if(e!==null)c(e);else{let e=Iu(t);e?.isGroup?c(i(e,n)):n&&c(i(t,!0))}}}}return c(e),s}function Fu(e,t){let n=e.siblings,r=n.length,{index:i}=e;return t?n[(i-1+r)%r]:i===0?null:n[i-1]}function Iu(e){return e.parent}function Lu(e,t={}){let{reverse:n=!1}=t,{children:r}=e;if(r){let{length:e}=r,i=n?e-1:0,a=n?-1:e,o=n?-1:1;for(let e=i;e!==a;e+=o){let n=r[e];if(!n.disabled&&!n.ignored)if(n.isGroup){let e=Lu(n,t);if(e!==null)return e}else return n}}return null}var Ru={getChild(){return this.ignored?null:Lu(this)},getParent(){let{parent:e}=this;return e?.isGroup?e.getParent():e},getNext(e={}){return Pu(this,`next`,e)},getPrev(e={}){return Pu(this,`prev`,e)}};function zu(e,t){let n=t?new Set(t):void 0,r=[];function i(e){e.forEach(e=>{r.push(e),!(e.isLeaf||!e.children||e.ignored)&&(e.isGroup||n===void 0||n.has(e.key))&&i(e.children)})}return i(e),r}function Bu(e,t){let n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function Vu(e,t,n,r,i,a=null,o=0){let s=[];return e.forEach((c,l)=>{var u;let d=Object.create(r);if(d.rawNode=c,d.siblings=s,d.level=o,d.index=l,d.isFirstChild=l===0,d.isLastChild=l+1===e.length,d.parent=a,!d.ignored){let e=i(c);Array.isArray(e)&&(d.children=Vu(e,t,n,r,i,d,o+1))}s.push(d),t.set(d.key,d),n.has(o)||n.set(o,[]),(u=n.get(o))==null||u.push(d)}),s}function Hu(e,t={}){let n=new Map,r=new Map,{getDisabled:i=vu,getIgnored:a=gu,getIsGroup:o=wu,getKey:s=hu}=t,c=t.getChildren??mu,l=t.ignoreEmptyChildren?e=>{let t=c(e);return Array.isArray(t)?t.length?t:null:t}:c,u=Vu(e,n,r,Object.assign({get key(){return s(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return o(this.rawNode)},get isLeaf(){return pu(this.rawNode,l)},get shallowLoaded(){return _u(this.rawNode,l)},get ignored(){return a(this.rawNode)},contains(e){return Bu(this,e)}},Ru),l);function d(e){if(e==null)return null;let t=n.get(e);return t&&!t.isGroup&&!t.ignored?t:null}function f(e){if(e==null)return null;let t=n.get(e);return t&&!t.ignored?t:null}function p(e,t){let n=f(e);return n?n.getPrev(t):null}function m(e,t){let n=f(e);return n?n.getNext(t):null}function h(e){let t=f(e);return t?t.getParent():null}function g(e){let t=f(e);return t?t.getChild():null}let _={treeNodes:u,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:l,getFlattenedNodes(e){return zu(u,e)},getNode:d,getPrev:p,getNext:m,getParent:h,getChild:g,getFirstAvailableNode(){return Mu(u)},getPath(e,t={}){return ju(e,t,_)},getCheckedKeys(e,t={}){let{cascade:n=!0,leafOnly:r=!1,checkStrategy:i=`all`,allowNotLoaded:a=!1}=t;return ku({checkedKeys:bu(e),indeterminateKeys:xu(e),cascade:n,leafOnly:r,checkStrategy:i,allowNotLoaded:a},_)},check(e,t,n={}){let{cascade:r=!0,leafOnly:i=!1,checkStrategy:a=`all`,allowNotLoaded:o=!1}=n;return ku({checkedKeys:bu(t),indeterminateKeys:xu(t),keysToCheck:e==null?[]:lu(e),cascade:r,leafOnly:i,checkStrategy:a,allowNotLoaded:o},_)},uncheck(e,t,n={}){let{cascade:r=!0,leafOnly:i=!1,checkStrategy:a=`all`,allowNotLoaded:o=!1}=n;return ku({checkedKeys:bu(t),indeterminateKeys:xu(t),keysToUncheck:e==null?[]:lu(e),cascade:r,leafOnly:i,checkStrategy:a,allowNotLoaded:o},_)},getNonLeafKeys(e={}){return fu(u,e)}};return _}var{cubicBezierEaseIn:Uu,cubicBezierEaseOut:Wu}=yt;function Gu({transformOrigin:e=`inherit`,duration:t=`.2s`,enterScale:n=`.9`,originalTransform:r=``,originalTransition:i=``}={}){return[B(`&.fade-in-scale-up-transition-leave-active`,{transformOrigin:e,transition:`opacity ${t} ${Uu}, transform ${t} ${Uu} ${i&&`,${i}`}`}),B(`&.fade-in-scale-up-transition-enter-active`,{transformOrigin:e,transition:`opacity ${t} ${Wu}, transform ${t} ${Wu} ${i&&`,${i}`}`}),B(`&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to`,{opacity:0,transform:`${r} scale(${n})`}),B(`&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to`,{opacity:1,transform:`${r} scale(1)`})]}var Ku={space:`6px`,spaceArrow:`10px`,arrowOffset:`10px`,arrowOffsetVertical:`10px`,arrowHeight:`6px`,padding:`8px 14px`};function qu(e){let{boxShadow2:t,popoverColor:n,textColor2:r,borderRadius:i,fontSize:a,dividerColor:o}=e;return Object.assign(Object.assign({},Ku),{fontSize:a,borderRadius:i,color:n,dividerColor:o,textColor:r,boxShadow:t})}var Ju=xt({name:`Popover`,common:Ct,peers:{Scrollbar:au},self:qu}),Yu={top:`bottom`,bottom:`top`,left:`right`,right:`left`},X=`var(--n-arrow-height) * 1.414`,Xu=B([V(`popover`,`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[B(`>`,[V(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),Ke(`raw`,`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[Ke(`scrollable`,[Ke(`show-header-or-footer`,`padding: var(--n-padding);`)])]),z(`header`,`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),z(`footer`,`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),W(`scrollable, show-header-or-footer`,[z(`content`,`
 padding: var(--n-padding);
 `)])]),V(`popover-shared`,`
 transform-origin: inherit;
 `,[V(`popover-arrow-wrapper`,`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[V(`popover-arrow`,`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${X});
 height: calc(${X});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),B(`&.popover-transition-enter-from, &.popover-transition-leave-to`,`
 opacity: 0;
 transform: scale(.85);
 `),B(`&.popover-transition-enter-to, &.popover-transition-leave-from`,`
 transform: scale(1);
 opacity: 1;
 `),B(`&.popover-transition-enter-active`,`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),B(`&.popover-transition-leave-active`,`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),Qu(`top-start`,`
 top: calc(${X} / -2);
 left: calc(${Zu(`top-start`)} - var(--v-offset-left));
 `),Qu(`top`,`
 top: calc(${X} / -2);
 transform: translateX(calc(${X} / -2)) rotate(45deg);
 left: 50%;
 `),Qu(`top-end`,`
 top: calc(${X} / -2);
 right: calc(${Zu(`top-end`)} + var(--v-offset-left));
 `),Qu(`bottom-start`,`
 bottom: calc(${X} / -2);
 left: calc(${Zu(`bottom-start`)} - var(--v-offset-left));
 `),Qu(`bottom`,`
 bottom: calc(${X} / -2);
 transform: translateX(calc(${X} / -2)) rotate(45deg);
 left: 50%;
 `),Qu(`bottom-end`,`
 bottom: calc(${X} / -2);
 right: calc(${Zu(`bottom-end`)} + var(--v-offset-left));
 `),Qu(`left-start`,`
 left: calc(${X} / -2);
 top: calc(${Zu(`left-start`)} - var(--v-offset-top));
 `),Qu(`left`,`
 left: calc(${X} / -2);
 transform: translateY(calc(${X} / -2)) rotate(45deg);
 top: 50%;
 `),Qu(`left-end`,`
 left: calc(${X} / -2);
 bottom: calc(${Zu(`left-end`)} + var(--v-offset-top));
 `),Qu(`right-start`,`
 right: calc(${X} / -2);
 top: calc(${Zu(`right-start`)} - var(--v-offset-top));
 `),Qu(`right`,`
 right: calc(${X} / -2);
 transform: translateY(calc(${X} / -2)) rotate(45deg);
 top: 50%;
 `),Qu(`right-end`,`
 right: calc(${X} / -2);
 bottom: calc(${Zu(`right-end`)} + var(--v-offset-top));
 `),...Il({top:[`right-start`,`left-start`],right:[`top-end`,`bottom-end`],bottom:[`right-end`,`left-end`],left:[`top-start`,`bottom-start`]},(e,t)=>{let n=[`right`,`left`].includes(t),r=n?`width`:`height`;return e.map(e=>{let i=e.split(`-`)[1]===`end`,a=`calc((${`var(--v-target-${r}, 0px)`} - ${X}) / 2)`,o=Zu(e);return B(`[v-placement="${e}"] >`,[V(`popover-shared`,[W(`center-arrow`,[V(`popover-arrow`,`${t}: calc(max(${a}, ${o}) ${i?`+`:`-`} var(--v-offset-${n?`left`:`top`}));`)])])])})})]);function Zu(e){return[`top`,`bottom`].includes(e.split(`-`)[0])?`var(--n-arrow-offset)`:`var(--n-arrow-offset-vertical)`}function Qu(e,t){let n=e.split(`-`)[0],r=[`top`,`bottom`].includes(n)?`height: var(--n-space-arrow);`:`width: var(--n-space-arrow);`;return B(`[v-placement="${e}"] >`,[V(`popover-shared`,`
 margin-${Yu[n]}: var(--n-space);
 `,[W(`show-arrow`,`
 margin-${Yu[n]}: var(--n-space-arrow);
 `),W(`overlap`,`
 margin: 0;
 `),We(`popover-arrow-wrapper`,`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${Yu[n]}: auto;
 ${r}
 `,[V(`popover-arrow`,t)])])])}var $u=Object.assign(Object.assign({},U.props),{to:ji.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number});function ed({arrowClass:e,arrowStyle:t,arrowWrapperClass:n,arrowWrapperStyle:r,clsPrefix:i}){return b(`div`,{key:`__popover-arrow__`,style:r,class:[`${i}-popover-arrow-wrapper`,n]},b(`div`,{class:[`${i}-popover-arrow`,e],style:t}))}var td=R({name:`PopoverBody`,inheritAttrs:!1,props:$u,setup(e,{slots:n,attrs:r}){let{namespaceRef:i,mergedClsPrefixRef:a,inlineThemeDisabled:o,mergedRtlRef:c}=Ze(e),u=U(`Popover`,`-popover`,Xu,Ju,e,a),f=Ll(`Popover`,c,a),p=P(null),m=L(`NPopover`),h=P(null),g=P(e.show),_=P(!1);l(()=>{let{show:t}=e;t&&!Wo()&&!e.internalDeactivateImmediately&&(_.value=!0)});let v=I(()=>{let{trigger:t,onClickoutside:n}=e,r=[],{positionManuallyRef:{value:i}}=m;return i||(t===`click`&&!n&&r.push([sa,O,void 0,{capture:!0}]),t===`hover`&&r.push([aa,D])),n&&r.push([sa,O,void 0,{capture:!0}]),(e.displayDirective===`show`||e.animated&&_.value)&&r.push([sn,e.show]),r}),y=I(()=>{let{common:{cubicBezierEaseInOut:e,cubicBezierEaseIn:t,cubicBezierEaseOut:n},self:{space:r,spaceArrow:i,padding:a,fontSize:o,textColor:s,dividerColor:c,color:l,boxShadow:d,borderRadius:f,arrowHeight:p,arrowOffset:m,arrowOffsetVertical:h}}=u.value;return{"--n-box-shadow":d,"--n-bezier":e,"--n-bezier-ease-in":t,"--n-bezier-ease-out":n,"--n-font-size":o,"--n-text-color":s,"--n-color":l,"--n-divider-color":c,"--n-border-radius":f,"--n-arrow-height":p,"--n-arrow-offset":m,"--n-arrow-offset-vertical":h,"--n-padding":a,"--n-space":r,"--n-space-arrow":i}}),x=I(()=>{let t=e.width===`trigger`?void 0:Vo(e.width),n=[];t&&n.push({width:t});let{maxWidth:r,minWidth:i}=e;return r&&n.push({maxWidth:Vo(r)}),i&&n.push({maxWidth:Vo(i)}),o||n.push(y.value),n}),S=o?Ye(`popover`,void 0,y,e):void 0;m.setBodyInstance({syncPosition:C}),t(()=>{m.setBodyInstance(null)}),T(F(e,`show`),t=>{e.animated||(t?g.value=!0:g.value=!1)});function C(){var e;(e=p.value)==null||e.syncPosition()}function w(t){e.trigger===`hover`&&e.keepAliveOnHover&&e.show&&m.handleMouseEnter(t)}function E(t){e.trigger===`hover`&&e.keepAliveOnHover&&m.handleMouseLeave(t)}function D(t){e.trigger===`hover`&&!k().contains(Ur(t))&&m.handleMouseMoveOutside(t)}function O(t){(e.trigger===`click`&&!k().contains(Ur(t))||e.onClickoutside)&&m.handleClickOutside(t)}function k(){return m.getTriggerElement()}d(ki,h),d(Ti,null),d(Ei,null);function A(){if(S?.onRender(),!(e.displayDirective===`show`||e.show||e.animated&&_.value))return null;let t,i=m.internalRenderBodyRef.value,{value:o}=a;if(i)t=i([`${o}-popover-shared`,f?.value&&`${o}-popover--rtl`,S?.themeClass.value,e.overlap&&`${o}-popover-shared--overlap`,e.showArrow&&`${o}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${o}-popover-shared--center-arrow`],h,x.value,w,E);else{let{value:i}=m.extraClassRef,{internalTrapFocus:a}=e,c=!is(n.header)||!is(n.footer),l=()=>{let t=c?b(j,null,rs(n.header,t=>t?b(`div`,{class:[`${o}-popover__header`,e.headerClass],style:e.headerStyle},t):null),rs(n.default,t=>t?b(`div`,{class:[`${o}-popover__content`,e.contentClass],style:e.contentStyle},n):null),rs(n.footer,t=>t?b(`div`,{class:[`${o}-popover__footer`,e.footerClass],style:e.footerStyle},t):null)):e.scrollable?n.default?.call(n):b(`div`,{class:[`${o}-popover__content`,e.contentClass],style:e.contentStyle},n);return[e.scrollable?b(cu,{themeOverrides:u.value.peerOverrides.Scrollbar,theme:u.value.peers.Scrollbar,contentClass:c?void 0:`${o}-popover__content ${e.contentClass??``}`,contentStyle:c?void 0:e.contentStyle},{default:()=>t}):t,e.showArrow?ed({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:o}):null]};t=b(`div`,s({class:[`${o}-popover`,`${o}-popover-shared`,f?.value&&`${o}-popover--rtl`,S?.themeClass.value,i.map(e=>`${o}-${e}`),{[`${o}-popover--scrollable`]:e.scrollable,[`${o}-popover--show-header-or-footer`]:c,[`${o}-popover--raw`]:e.raw,[`${o}-popover-shared--overlap`]:e.overlap,[`${o}-popover-shared--show-arrow`]:e.showArrow,[`${o}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:h,style:x.value,onKeydown:m.handleKeydown,onMouseenter:w,onMouseleave:E},r),a?b(Lo,{active:e.show,autoFocus:!0},{default:l}):l())}return Se(t,v.value)}return{displayed:_,namespace:i,isMounted:m.isMountedRef,zIndex:m.zIndexRef,followerRef:p,adjustedTo:ji(e),followerEnabled:g,renderContentNode:A}},render(){return b(ka,{ref:`followerRef`,zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width===`trigger`?`target`:void 0,teleportDisabled:this.adjustedTo===ji.tdkey},{default:()=>this.animated?b(Ht,{name:`popover-transition`,appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)==null||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),nd=Object.keys($u),rd={focus:[`onFocus`,`onBlur`],click:[`onClick`],hover:[`onMouseenter`,`onMouseleave`],manual:[],nested:[`onFocus`,`onBlur`,`onMouseenter`,`onMouseleave`,`onClick`]};function id(e,t,n){rd[t].forEach(t=>{e.props?e.props=Object.assign({},e.props):e.props={};let r=e.props[t],i=n[t];r?e.props[t]=(...e)=>{r(...e),i(...e)}:e.props[t]=i})}var ad={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:`hover`},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:`top`},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:`if`},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:ji.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},od=R({name:`Popover`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},U.props),ad),{internalOnAfterLeave:Function,internalRenderBody:Function}),slots:Object,__popover__:!0,setup(e){let t=yi(),n=P(null),r=I(()=>e.show),i=P(e.defaultShow),a=vi(r,i),o=ni(()=>e.disabled?!1:a.value),s=()=>{if(e.disabled)return!0;let{getDisabled:t}=e;return!!t?.()},c=()=>s()?!1:a.value,u=bi(e,[`arrow`,`showArrow`]),f=I(()=>e.overlap?!1:u.value),p=null,m=P(null),h=P(null),g=ni(()=>e.x!==void 0&&e.y!==void 0);function _(t){let{"onUpdate:show":n,onUpdateShow:r,onShow:a,onHide:o}=e;i.value=t,n&&J(n,t),r&&J(r,t),t&&a&&J(a,!0),t&&o&&J(o,!1)}function v(){p&&p.syncPosition()}function y(){let{value:e}=m;e&&(window.clearTimeout(e),m.value=null)}function b(){let{value:e}=h;e&&(window.clearTimeout(e),h.value=null)}function x(){let t=s();if(e.trigger===`focus`&&!t){if(c())return;_(!0)}}function S(){let t=s();if(e.trigger===`focus`&&!t){if(!c())return;_(!1)}}function C(){let t=s();if(e.trigger===`hover`&&!t){if(b(),m.value!==null||c())return;let t=()=>{_(!0),m.value=null},{delay:n}=e;n===0?t():m.value=window.setTimeout(t,n)}}function w(){let t=s();if(e.trigger===`hover`&&!t){if(y(),h.value!==null||!c())return;let t=()=>{_(!1),h.value=null},{duration:n}=e;n===0?t():h.value=window.setTimeout(t,n)}}function T(){w()}function E(t){var n;c()&&(e.trigger===`click`&&(y(),b(),_(!1)),(n=e.onClickoutside)==null||n.call(e,t))}function D(){e.trigger===`click`&&!s()&&(y(),b(),_(!c()))}function O(t){e.internalTrapFocus&&t.key===`Escape`&&(y(),b(),_(!1))}function k(e){i.value=e}function A(){return n.value?.targetRef}function j(e){p=e}return d(`NPopover`,{getTriggerElement:A,handleKeydown:O,handleMouseEnter:C,handleMouseLeave:w,handleClickOutside:E,handleMouseMoveOutside:T,setBodyInstance:j,positionManuallyRef:g,isMountedRef:t,zIndexRef:F(e,`zIndex`),extraClassRef:F(e,`internalExtraClass`),internalRenderBodyRef:F(e,`internalRenderBody`)}),l(()=>{a.value&&s()&&_(!1)}),{binderInstRef:n,positionManually:g,mergedShowConsideringDisabledProp:o,uncontrolledShow:i,mergedShowArrow:f,getMergedShow:c,setShow:k,handleClick:D,handleMouseEnter:C,handleMouseLeave:w,handleFocus:x,handleBlur:S,syncPosition:v}},render(){let{positionManually:e,$slots:t}=this,n,r=!1;if(!e&&(n=Yo(t,`trigger`),n)){n=he(n),n=n.type===Te?b(`span`,[n]):n;let t={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(n.type?.__popover__)r=!0,n.props||={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]},n.props.internalSyncTargetWithParent=!0,n.props.internalInheritedEventHandlers?n.props.internalInheritedEventHandlers=[t,...n.props.internalInheritedEventHandlers]:n.props.internalInheritedEventHandlers=[t];else{let{internalInheritedEventHandlers:r}=this,i=[t,...r];id(n,r?`nested`:e?`manual`:this.trigger,{onBlur:e=>{i.forEach(t=>{t.onBlur(e)})},onFocus:e=>{i.forEach(t=>{t.onFocus(e)})},onClick:e=>{i.forEach(t=>{t.onClick(e)})},onMouseenter:e=>{i.forEach(t=>{t.onMouseenter(e)})},onMouseleave:e=>{i.forEach(t=>{t.onMouseleave(e)})}})}}return b(na,{ref:`binderInstRef`,syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;let t=this.getMergedShow();return[this.internalTrapFocus&&t?Se(b(`div`,{style:{position:`fixed`,top:0,right:0,bottom:0,left:0}}),[[da,{enabled:t,zIndex:this.zIndex}]]):null,e?null:b(ra,null,{default:()=>n}),b(td,Zo(this.$props,nd,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:t})),{default:()=>{var e;return(e=this.$slots).default?.call(e)},header:()=>{var e;return(e=this.$slots).header?.call(e)},footer:()=>{var e;return(e=this.$slots).footer?.call(e)}})]}})}}),{cubicBezierEaseInOut:sd}=yt;function cd({duration:e=`.2s`,delay:t=`.1s`}={}){return[B(`&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to`,{opacity:1}),B(`&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from`,`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),B(`&.fade-in-width-expand-transition-leave-active`,`
 overflow: hidden;
 transition:
 opacity ${e} ${sd},
 max-width ${e} ${sd} ${t},
 margin-left ${e} ${sd} ${t},
 margin-right ${e} ${sd} ${t};
 `),B(`&.fade-in-width-expand-transition-enter-active`,`
 overflow: hidden;
 transition:
 opacity ${e} ${sd} ${t},
 max-width ${e} ${sd},
 margin-left ${e} ${sd},
 margin-right ${e} ${sd};
 `)]}var ld=V(`base-wave`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),ud=R({name:`BaseWave`,props:{clsPrefix:{type:String,required:!0}},setup(e){ot(`-base-wave`,ld,F(e,`clsPrefix`));let n=P(null),r=P(!1),i=null;return t(()=>{i!==null&&window.clearTimeout(i)}),{active:r,selfRef:n,play(){i!==null&&(window.clearTimeout(i),r.value=!1,i=null),a(()=>{var e;(e=n.value)==null||e.offsetHeight,r.value=!0,i=window.setTimeout(()=>{r.value=!1,i=null},1e3)})}}},render(){let{clsPrefix:e}=this;return b(`div`,{ref:`selfRef`,"aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:dd,cubicBezierEaseOut:fd,cubicBezierEaseIn:pd}=yt;function md({overflow:e=`hidden`,duration:t=`.3s`,originalTransition:n=``,leavingDelay:r=`0s`,foldPadding:i=!1,enterToProps:a=void 0,leaveToProps:o=void 0,reverse:s=!1}={}){let c=s?`leave`:`enter`,l=s?`enter`:`leave`;return[B(`&.fade-in-height-expand-transition-${l}-from,
 &.fade-in-height-expand-transition-${c}-to`,Object.assign(Object.assign({},a),{opacity:1})),B(`&.fade-in-height-expand-transition-${l}-to,
 &.fade-in-height-expand-transition-${c}-from`,Object.assign(Object.assign({},o),{opacity:0,marginTop:`0 !important`,marginBottom:`0 !important`,paddingTop:i?`0 !important`:void 0,paddingBottom:i?`0 !important`:void 0})),B(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${dd} ${r},
 opacity ${t} ${fd} ${r},
 margin-top ${t} ${dd} ${r},
 margin-bottom ${t} ${dd} ${r},
 padding-top ${t} ${dd} ${r},
 padding-bottom ${t} ${dd} ${r}
 ${n?`,${n}`:``}
 `),B(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${dd},
 opacity ${t} ${pd},
 margin-top ${t} ${dd},
 margin-bottom ${t} ${dd},
 padding-top ${t} ${dd},
 padding-bottom ${t} ${dd}
 ${n?`,${n}`:``}
 `)]}var hd=Ni&&`chrome`in window;Ni&&navigator.userAgent.includes(`Firefox`);var gd=Ni&&navigator.userAgent.includes(`Safari`)&&!hd;function _d(e){return nt(e,[255,255,255,.16])}function vd(e){return nt(e,[0,0,0,.12])}var yd=G(`n-button-group`),bd={paddingTiny:`0 6px`,paddingSmall:`0 10px`,paddingMedium:`0 14px`,paddingLarge:`0 18px`,paddingRoundTiny:`0 10px`,paddingRoundSmall:`0 14px`,paddingRoundMedium:`0 18px`,paddingRoundLarge:`0 22px`,iconMarginTiny:`6px`,iconMarginSmall:`6px`,iconMarginMedium:`6px`,iconMarginLarge:`6px`,iconSizeTiny:`14px`,iconSizeSmall:`18px`,iconSizeMedium:`18px`,iconSizeLarge:`20px`,rippleDuration:`.6s`};function xd(e){let{heightTiny:t,heightSmall:n,heightMedium:r,heightLarge:i,borderRadius:a,fontSizeTiny:o,fontSizeSmall:s,fontSizeMedium:c,fontSizeLarge:l,opacityDisabled:u,textColor2:d,textColor3:f,primaryColorHover:p,primaryColorPressed:m,borderColor:h,primaryColor:g,baseColor:_,infoColor:v,infoColorHover:y,infoColorPressed:b,successColor:x,successColorHover:S,successColorPressed:C,warningColor:w,warningColorHover:T,warningColorPressed:E,errorColor:D,errorColorHover:O,errorColorPressed:k,fontWeight:A,buttonColor2:j,buttonColor2Hover:M,buttonColor2Pressed:ee,fontWeightStrong:te}=e;return Object.assign(Object.assign({},bd),{heightTiny:t,heightSmall:n,heightMedium:r,heightLarge:i,borderRadiusTiny:a,borderRadiusSmall:a,borderRadiusMedium:a,borderRadiusLarge:a,fontSizeTiny:o,fontSizeSmall:s,fontSizeMedium:c,fontSizeLarge:l,opacityDisabled:u,colorOpacitySecondary:`0.16`,colorOpacitySecondaryHover:`0.22`,colorOpacitySecondaryPressed:`0.28`,colorSecondary:j,colorSecondaryHover:M,colorSecondaryPressed:ee,colorTertiary:j,colorTertiaryHover:M,colorTertiaryPressed:ee,colorQuaternary:`#0000`,colorQuaternaryHover:M,colorQuaternaryPressed:ee,color:`#0000`,colorHover:`#0000`,colorPressed:`#0000`,colorFocus:`#0000`,colorDisabled:`#0000`,textColor:d,textColorTertiary:f,textColorHover:p,textColorPressed:m,textColorFocus:p,textColorDisabled:d,textColorText:d,textColorTextHover:p,textColorTextPressed:m,textColorTextFocus:p,textColorTextDisabled:d,textColorGhost:d,textColorGhostHover:p,textColorGhostPressed:m,textColorGhostFocus:p,textColorGhostDisabled:d,border:`1px solid ${h}`,borderHover:`1px solid ${p}`,borderPressed:`1px solid ${m}`,borderFocus:`1px solid ${p}`,borderDisabled:`1px solid ${h}`,rippleColor:g,colorPrimary:g,colorHoverPrimary:p,colorPressedPrimary:m,colorFocusPrimary:p,colorDisabledPrimary:g,textColorPrimary:_,textColorHoverPrimary:_,textColorPressedPrimary:_,textColorFocusPrimary:_,textColorDisabledPrimary:_,textColorTextPrimary:g,textColorTextHoverPrimary:p,textColorTextPressedPrimary:m,textColorTextFocusPrimary:p,textColorTextDisabledPrimary:d,textColorGhostPrimary:g,textColorGhostHoverPrimary:p,textColorGhostPressedPrimary:m,textColorGhostFocusPrimary:p,textColorGhostDisabledPrimary:g,borderPrimary:`1px solid ${g}`,borderHoverPrimary:`1px solid ${p}`,borderPressedPrimary:`1px solid ${m}`,borderFocusPrimary:`1px solid ${p}`,borderDisabledPrimary:`1px solid ${g}`,rippleColorPrimary:g,colorInfo:v,colorHoverInfo:y,colorPressedInfo:b,colorFocusInfo:y,colorDisabledInfo:v,textColorInfo:_,textColorHoverInfo:_,textColorPressedInfo:_,textColorFocusInfo:_,textColorDisabledInfo:_,textColorTextInfo:v,textColorTextHoverInfo:y,textColorTextPressedInfo:b,textColorTextFocusInfo:y,textColorTextDisabledInfo:d,textColorGhostInfo:v,textColorGhostHoverInfo:y,textColorGhostPressedInfo:b,textColorGhostFocusInfo:y,textColorGhostDisabledInfo:v,borderInfo:`1px solid ${v}`,borderHoverInfo:`1px solid ${y}`,borderPressedInfo:`1px solid ${b}`,borderFocusInfo:`1px solid ${y}`,borderDisabledInfo:`1px solid ${v}`,rippleColorInfo:v,colorSuccess:x,colorHoverSuccess:S,colorPressedSuccess:C,colorFocusSuccess:S,colorDisabledSuccess:x,textColorSuccess:_,textColorHoverSuccess:_,textColorPressedSuccess:_,textColorFocusSuccess:_,textColorDisabledSuccess:_,textColorTextSuccess:x,textColorTextHoverSuccess:S,textColorTextPressedSuccess:C,textColorTextFocusSuccess:S,textColorTextDisabledSuccess:d,textColorGhostSuccess:x,textColorGhostHoverSuccess:S,textColorGhostPressedSuccess:C,textColorGhostFocusSuccess:S,textColorGhostDisabledSuccess:x,borderSuccess:`1px solid ${x}`,borderHoverSuccess:`1px solid ${S}`,borderPressedSuccess:`1px solid ${C}`,borderFocusSuccess:`1px solid ${S}`,borderDisabledSuccess:`1px solid ${x}`,rippleColorSuccess:x,colorWarning:w,colorHoverWarning:T,colorPressedWarning:E,colorFocusWarning:T,colorDisabledWarning:w,textColorWarning:_,textColorHoverWarning:_,textColorPressedWarning:_,textColorFocusWarning:_,textColorDisabledWarning:_,textColorTextWarning:w,textColorTextHoverWarning:T,textColorTextPressedWarning:E,textColorTextFocusWarning:T,textColorTextDisabledWarning:d,textColorGhostWarning:w,textColorGhostHoverWarning:T,textColorGhostPressedWarning:E,textColorGhostFocusWarning:T,textColorGhostDisabledWarning:w,borderWarning:`1px solid ${w}`,borderHoverWarning:`1px solid ${T}`,borderPressedWarning:`1px solid ${E}`,borderFocusWarning:`1px solid ${T}`,borderDisabledWarning:`1px solid ${w}`,rippleColorWarning:w,colorError:D,colorHoverError:O,colorPressedError:k,colorFocusError:O,colorDisabledError:D,textColorError:_,textColorHoverError:_,textColorPressedError:_,textColorFocusError:_,textColorDisabledError:_,textColorTextError:D,textColorTextHoverError:O,textColorTextPressedError:k,textColorTextFocusError:O,textColorTextDisabledError:d,textColorGhostError:D,textColorGhostHoverError:O,textColorGhostPressedError:k,textColorGhostFocusError:O,textColorGhostDisabledError:D,borderError:`1px solid ${D}`,borderHoverError:`1px solid ${O}`,borderPressedError:`1px solid ${k}`,borderFocusError:`1px solid ${O}`,borderDisabledError:`1px solid ${D}`,rippleColorError:D,waveOpacity:`0.6`,fontWeight:A,fontWeightStrong:te})}var Sd={name:`Button`,common:Ct,self:xd},Cd=B([V(`button`,`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[W(`color`,[z(`border`,{borderColor:`var(--n-border-color)`}),W(`disabled`,[z(`border`,{borderColor:`var(--n-border-color-disabled)`})]),Ke(`disabled`,[B(`&:focus`,[z(`state-border`,{borderColor:`var(--n-border-color-focus)`})]),B(`&:hover`,[z(`state-border`,{borderColor:`var(--n-border-color-hover)`})]),B(`&:active`,[z(`state-border`,{borderColor:`var(--n-border-color-pressed)`})]),W(`pressed`,[z(`state-border`,{borderColor:`var(--n-border-color-pressed)`})])])]),W(`disabled`,{backgroundColor:`var(--n-color-disabled)`,color:`var(--n-text-color-disabled)`},[z(`border`,{border:`var(--n-border-disabled)`})]),Ke(`disabled`,[B(`&:focus`,{backgroundColor:`var(--n-color-focus)`,color:`var(--n-text-color-focus)`},[z(`state-border`,{border:`var(--n-border-focus)`})]),B(`&:hover`,{backgroundColor:`var(--n-color-hover)`,color:`var(--n-text-color-hover)`},[z(`state-border`,{border:`var(--n-border-hover)`})]),B(`&:active`,{backgroundColor:`var(--n-color-pressed)`,color:`var(--n-text-color-pressed)`},[z(`state-border`,{border:`var(--n-border-pressed)`})]),W(`pressed`,{backgroundColor:`var(--n-color-pressed)`,color:`var(--n-text-color-pressed)`},[z(`state-border`,{border:`var(--n-border-pressed)`})])]),W(`loading`,`cursor: wait;`),V(`base-wave`,`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[W(`active`,{zIndex:1,animationName:`button-wave-spread, button-wave-opacity`})]),Ni&&`MozBoxSizing`in document.createElement(`div`).style?B(`&::moz-focus-inner`,{border:0}):null,z(`border, state-border`,`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),z(`border`,`
 border: var(--n-border);
 `),z(`state-border`,`
 border: var(--n-border);
 border-color: #0000;
 z-index: 1;
 `),z(`icon`,`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[V(`icon-slot`,`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Jl({top:`50%`,originalTransform:`translateY(-50%)`})]),cd()]),z(`content`,`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[B(`~`,[z(`icon`,{margin:`var(--n-icon-margin)`,marginRight:0})])]),W(`block`,`
 display: flex;
 width: 100%;
 `),W(`dashed`,[z(`border, state-border`,{borderStyle:`dashed !important`})]),W(`disabled`,{cursor:`not-allowed`,opacity:`var(--n-opacity-disabled)`})]),B(`@keyframes button-wave-spread`,{from:{boxShadow:`0 0 0.5px 0 var(--n-ripple-color)`},to:{boxShadow:`0 0 0.5px 4.5px var(--n-ripple-color)`}}),B(`@keyframes button-wave-opacity`,{from:{opacity:`var(--n-wave-opacity)`},to:{opacity:0}})]),wd=R({name:`Button`,props:Object.assign(Object.assign({},U.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:`button`},type:{type:String,default:`default`},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:`left`},attrType:{type:String,default:`button`},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!gd},spinProps:Object}),slots:Object,setup(e){let t=P(null),n=P(null),r=P(!1),i=ni(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),a=L(yd,{}),{inlineThemeDisabled:o,mergedClsPrefixRef:s,mergedRtlRef:c,mergedComponentPropsRef:l}=Ze(e),{mergedSizeRef:u}=ss({},{defaultSize:`medium`,mergedSize:t=>{let{size:n}=e;if(n)return n;let{size:r}=a;if(r)return r;let{mergedSize:i}=t||{};return i?i.value:l?.value?.Button?.size||`medium`}}),d=I(()=>e.focusable&&!e.disabled),f=n=>{var r;d.value||n.preventDefault(),!e.nativeFocusBehavior&&(n.preventDefault(),!e.disabled&&d.value&&((r=t.value)==null||r.focus({preventScroll:!0})))},p=t=>{var r;if(!e.disabled&&!e.loading){let{onClick:i}=e;i&&J(i,t),e.text||(r=n.value)==null||r.play()}},m=t=>{switch(t.key){case`Enter`:if(!e.keyboard)return;r.value=!1}},h=t=>{switch(t.key){case`Enter`:if(!e.keyboard||e.loading){t.preventDefault();return}r.value=!0}},g=()=>{r.value=!1},_=U(`Button`,`-button`,Cd,Sd,e,s),v=Ll(`Button`,c,s),y=I(()=>{let{common:{cubicBezierEaseInOut:t,cubicBezierEaseOut:n},self:r}=_.value,{rippleDuration:i,opacityDisabled:a,fontWeight:o,fontWeightStrong:s}=r,c=u.value,{dashed:l,type:d,ghost:f,text:p,color:m,round:h,circle:g,textColor:v,secondary:y,tertiary:b,quaternary:x,strong:S}=e,C={"--n-font-weight":S?s:o},w={"--n-color":`initial`,"--n-color-hover":`initial`,"--n-color-pressed":`initial`,"--n-color-focus":`initial`,"--n-color-disabled":`initial`,"--n-ripple-color":`initial`,"--n-text-color":`initial`,"--n-text-color-hover":`initial`,"--n-text-color-pressed":`initial`,"--n-text-color-focus":`initial`,"--n-text-color-disabled":`initial`},T=d===`tertiary`,E=d==="default",D=T?`default`:d;if(p){let e=v||m;w={"--n-color":`#0000`,"--n-color-hover":`#0000`,"--n-color-pressed":`#0000`,"--n-color-focus":`#0000`,"--n-color-disabled":`#0000`,"--n-ripple-color":`#0000`,"--n-text-color":e||r[H(`textColorText`,D)],"--n-text-color-hover":e?_d(e):r[H(`textColorTextHover`,D)],"--n-text-color-pressed":e?vd(e):r[H(`textColorTextPressed`,D)],"--n-text-color-focus":e?_d(e):r[H(`textColorTextHover`,D)],"--n-text-color-disabled":e||r[H(`textColorTextDisabled`,D)]}}else if(f||l){let e=v||m;w={"--n-color":`#0000`,"--n-color-hover":`#0000`,"--n-color-pressed":`#0000`,"--n-color-focus":`#0000`,"--n-color-disabled":`#0000`,"--n-ripple-color":m||r[H(`rippleColor`,D)],"--n-text-color":e||r[H(`textColorGhost`,D)],"--n-text-color-hover":e?_d(e):r[H(`textColorGhostHover`,D)],"--n-text-color-pressed":e?vd(e):r[H(`textColorGhostPressed`,D)],"--n-text-color-focus":e?_d(e):r[H(`textColorGhostHover`,D)],"--n-text-color-disabled":e||r[H(`textColorGhostDisabled`,D)]}}else if(y){let e=E?r.textColor:T?r.textColorTertiary:r[H(`color`,D)],t=m||e,n=d!=="default"&&d!==`tertiary`;w={"--n-color":n?ze(t,{alpha:Number(r.colorOpacitySecondary)}):r.colorSecondary,"--n-color-hover":n?ze(t,{alpha:Number(r.colorOpacitySecondaryHover)}):r.colorSecondaryHover,"--n-color-pressed":n?ze(t,{alpha:Number(r.colorOpacitySecondaryPressed)}):r.colorSecondaryPressed,"--n-color-focus":n?ze(t,{alpha:Number(r.colorOpacitySecondaryHover)}):r.colorSecondaryHover,"--n-color-disabled":r.colorSecondary,"--n-ripple-color":`#0000`,"--n-text-color":t,"--n-text-color-hover":t,"--n-text-color-pressed":t,"--n-text-color-focus":t,"--n-text-color-disabled":t}}else if(b||x){let e=E?r.textColor:T?r.textColorTertiary:r[H(`color`,D)],t=m||e;b?(w[`--n-color`]=r.colorTertiary,w[`--n-color-hover`]=r.colorTertiaryHover,w[`--n-color-pressed`]=r.colorTertiaryPressed,w[`--n-color-focus`]=r.colorSecondaryHover,w[`--n-color-disabled`]=r.colorTertiary):(w[`--n-color`]=r.colorQuaternary,w[`--n-color-hover`]=r.colorQuaternaryHover,w[`--n-color-pressed`]=r.colorQuaternaryPressed,w[`--n-color-focus`]=r.colorQuaternaryHover,w[`--n-color-disabled`]=r.colorQuaternary),w[`--n-ripple-color`]=`#0000`,w[`--n-text-color`]=t,w[`--n-text-color-hover`]=t,w[`--n-text-color-pressed`]=t,w[`--n-text-color-focus`]=t,w[`--n-text-color-disabled`]=t}else w={"--n-color":m||r[H(`color`,D)],"--n-color-hover":m?_d(m):r[H(`colorHover`,D)],"--n-color-pressed":m?vd(m):r[H(`colorPressed`,D)],"--n-color-focus":m?_d(m):r[H(`colorFocus`,D)],"--n-color-disabled":m||r[H(`colorDisabled`,D)],"--n-ripple-color":m||r[H(`rippleColor`,D)],"--n-text-color":v||(m?r.textColorPrimary:T?r.textColorTertiary:r[H(`textColor`,D)]),"--n-text-color-hover":v||(m?r.textColorHoverPrimary:r[H(`textColorHover`,D)]),"--n-text-color-pressed":v||(m?r.textColorPressedPrimary:r[H(`textColorPressed`,D)]),"--n-text-color-focus":v||(m?r.textColorFocusPrimary:r[H(`textColorFocus`,D)]),"--n-text-color-disabled":v||(m?r.textColorDisabledPrimary:r[H(`textColorDisabled`,D)])};let O={"--n-border":`initial`,"--n-border-hover":`initial`,"--n-border-pressed":`initial`,"--n-border-focus":`initial`,"--n-border-disabled":`initial`};O=p?{"--n-border":`none`,"--n-border-hover":`none`,"--n-border-pressed":`none`,"--n-border-focus":`none`,"--n-border-disabled":`none`}:{"--n-border":r[H(`border`,D)],"--n-border-hover":r[H(`borderHover`,D)],"--n-border-pressed":r[H(`borderPressed`,D)],"--n-border-focus":r[H(`borderFocus`,D)],"--n-border-disabled":r[H(`borderDisabled`,D)]};let{[H(`height`,c)]:k,[H(`fontSize`,c)]:A,[H(`padding`,c)]:j,[H(`paddingRound`,c)]:M,[H(`iconSize`,c)]:ee,[H(`borderRadius`,c)]:te,[H(`iconMargin`,c)]:ne,waveOpacity:re}=r,N={"--n-width":g&&!p?k:`initial`,"--n-height":p?`initial`:k,"--n-font-size":A,"--n-padding":g||p?`initial`:h?M:j,"--n-icon-size":ee,"--n-icon-margin":ne,"--n-border-radius":p?`initial`:g||h?k:te};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":t,"--n-bezier-ease-out":n,"--n-ripple-duration":i,"--n-opacity-disabled":a,"--n-wave-opacity":re},C),w),O),N)}),b=o?Ye(`button`,I(()=>{let t=``,{dashed:n,type:r,ghost:i,text:a,color:o,round:s,circle:c,textColor:l,secondary:d,tertiary:f,quaternary:p,strong:m}=e;n&&(t+=`a`),i&&(t+=`b`),a&&(t+=`c`),s&&(t+=`d`),c&&(t+=`e`),d&&(t+=`f`),f&&(t+=`g`),p&&(t+=`h`),m&&(t+=`i`),o&&(t+=`j${Ro(o)}`),l&&(t+=`k${Ro(l)}`);let{value:h}=u;return t+=`l${h[0]}`,t+=`m${r[0]}`,t}),y,e):void 0;return{selfElRef:t,waveElRef:n,mergedClsPrefix:s,mergedFocusable:d,mergedSize:u,showBorder:i,enterPressed:r,rtlEnabled:v,handleMousedown:f,handleKeydown:h,handleBlur:g,handleKeyup:m,handleClick:p,customColorCssVars:I(()=>{let{color:t}=e;if(!t)return null;let n=_d(t);return{"--n-border-color":t,"--n-border-color-hover":n,"--n-border-color-pressed":vd(t),"--n-border-color-focus":n,"--n-border-color-disabled":t}}),cssVars:o?void 0:y,themeClass:b?.themeClass,onRender:b?.onRender}},render(){let{mergedClsPrefix:e,tag:t,onRender:n}=this;n?.();let r=rs(this.$slots.default,t=>t&&b(`span`,{class:`${e}-button__content`},t));return b(t,{ref:`selfElRef`,class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement===`right`&&r,b(Zl,{width:!0},{default:()=>rs(this.$slots.icon,t=>(this.loading||this.renderIcon||t)&&b(`span`,{class:`${e}-button__icon`,style:{margin:is(this.$slots.default)?`0`:``}},b(Rl,null,{default:()=>this.loading?b(eu,Object.assign({clsPrefix:e,key:`loading`,class:`${e}-icon-slot`,strokeWidth:20},this.spinProps)):b(`div`,{key:`icon`,class:`${e}-icon-slot`,role:`none`},this.renderIcon?this.renderIcon():t)})))}),this.iconPlacement===`left`&&r,this.text?null:b(ud,{ref:`waveElRef`,clsPrefix:e}),this.showBorder?b(`div`,{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?b(`div`,{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),Td={paddingSmall:`12px 16px 12px`,paddingMedium:`19px 24px 20px`,paddingLarge:`23px 32px 24px`,paddingHuge:`27px 40px 28px`,titleFontSizeSmall:`16px`,titleFontSizeMedium:`18px`,titleFontSizeLarge:`18px`,titleFontSizeHuge:`18px`,closeIconSize:`18px`,closeSize:`22px`};function Ed(e){let{primaryColor:t,borderRadius:n,lineHeight:r,fontSize:i,cardColor:a,textColor2:o,textColor1:s,dividerColor:c,fontWeightStrong:l,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,closeColorHover:p,closeColorPressed:m,modalColor:h,boxShadow1:g,popoverColor:_,actionColor:v}=e;return Object.assign(Object.assign({},Td),{lineHeight:r,color:a,colorModal:h,colorPopover:_,colorTarget:t,colorEmbedded:v,colorEmbeddedModal:v,colorEmbeddedPopover:v,textColor:o,titleTextColor:s,borderColor:c,actionColor:v,titleFontWeight:l,closeColorHover:p,closeColorPressed:m,closeBorderRadius:n,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,fontSizeSmall:i,fontSizeMedium:i,fontSizeLarge:i,fontSizeHuge:i,boxShadow:g,borderRadius:n})}var Dd={name:`Card`,common:Ct,self:Ed},Od=V(`card-content`,`
 flex: 1;
 min-width: 0;
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
`),kd=B([V(`card`,`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Ge({background:`var(--n-color-modal)`}),W(`hoverable`,[B(`&:hover`,`box-shadow: var(--n-box-shadow);`)]),W(`content-segmented`,[B(`>`,[V(`card-content`,`
 padding-top: var(--n-padding-bottom);
 `),z(`content-scrollbar`,[B(`>`,[V(`scrollbar-container`,[B(`>`,[V(`card-content`,`
 padding-top: var(--n-padding-bottom);
 `)])])])])])]),W(`content-soft-segmented`,[B(`>`,[V(`card-content`,`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `),z(`content-scrollbar`,[B(`>`,[V(`scrollbar-container`,[B(`>`,[V(`card-content`,`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])])])])])]),W(`footer-segmented`,[B(`>`,[z(`footer`,`
 padding-top: var(--n-padding-bottom);
 `)])]),W(`footer-soft-segmented`,[B(`>`,[z(`footer`,`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),B(`>`,[V(`card-header`,`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[z(`main`,`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),z(`extra`,`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),z(`close`,`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),z(`action`,`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),Od,V(`card-content`,[B(`&:first-child`,`
 padding-top: var(--n-padding-bottom);
 `)]),z(`content-scrollbar`,`
 display: flex;
 flex-direction: column;
 `,[B(`>`,[V(`scrollbar-container`,[B(`>`,[Od])])]),B(`&:first-child >`,[V(`scrollbar-container`,[B(`>`,[V(`card-content`,`
 padding-top: var(--n-padding-bottom);
 `)])])])]),z(`footer`,`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[B(`&:first-child`,`
 padding-top: var(--n-padding-bottom);
 `)]),z(`action`,`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),V(`card-cover`,`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[B(`img`,`
 display: block;
 width: 100%;
 `)]),W(`bordered`,`
 border: 1px solid var(--n-border-color);
 `,[B(`&:target`,`border-color: var(--n-color-target);`)]),W(`action-segmented`,[B(`>`,[z(`action`,[B(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)])])]),W(`content-segmented, content-soft-segmented`,[B(`>`,[V(`card-content`,`
 transition: border-color 0.3s var(--n-bezier);
 `,[B(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)]),z(`content-scrollbar`,`
 transition: border-color 0.3s var(--n-bezier);
 `,[B(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)])])]),W(`footer-segmented, footer-soft-segmented`,[B(`>`,[z(`footer`,`
 transition: border-color 0.3s var(--n-bezier);
 `,[B(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)])])]),W(`embedded`,`
 background-color: var(--n-color-embedded);
 `)]),rt(V(`card`,`
 background: var(--n-color-modal);
 `,[W(`embedded`,`
 background-color: var(--n-color-embedded-modal);
 `)])),it(V(`card`,`
 background: var(--n-color-popover);
 `,[W(`embedded`,`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Ad={title:[String,Function],contentClass:String,contentStyle:[Object,String],contentScrollable:Boolean,headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:String,bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:`div`},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function,closeFocusable:Boolean},jd=Qo(Ad),Md=R({name:`Card`,props:Object.assign(Object.assign({},U.props),Ad),slots:Object,setup(e){let t=()=>{let{onClose:t}=e;t&&J(t)},{inlineThemeDisabled:n,mergedClsPrefixRef:r,mergedRtlRef:i,mergedComponentPropsRef:a}=Ze(e),o=U(`Card`,`-card`,kd,Dd,e,r),s=Ll(`Card`,i,r),c=I(()=>e.size||a?.value?.Card?.size||`medium`),l=I(()=>{let e=c.value,{self:{color:t,colorModal:n,colorTarget:r,textColor:i,titleTextColor:a,titleFontWeight:s,borderColor:l,actionColor:u,borderRadius:d,lineHeight:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,closeColorHover:g,closeColorPressed:_,closeBorderRadius:v,closeIconSize:y,closeSize:b,boxShadow:x,colorPopover:S,colorEmbedded:C,colorEmbeddedModal:w,colorEmbeddedPopover:T,[H(`padding`,e)]:E,[H(`fontSize`,e)]:D,[H(`titleFontSize`,e)]:O},common:{cubicBezierEaseInOut:k}}=o.value,{top:A,left:j,bottom:M}=Kr(E);return{"--n-bezier":k,"--n-border-radius":d,"--n-color":t,"--n-color-modal":n,"--n-color-popover":S,"--n-color-embedded":C,"--n-color-embedded-modal":w,"--n-color-embedded-popover":T,"--n-color-target":r,"--n-text-color":i,"--n-line-height":f,"--n-action-color":u,"--n-title-text-color":a,"--n-title-font-weight":s,"--n-close-icon-color":p,"--n-close-icon-color-hover":m,"--n-close-icon-color-pressed":h,"--n-close-color-hover":g,"--n-close-color-pressed":_,"--n-border-color":l,"--n-box-shadow":x,"--n-padding-top":A,"--n-padding-bottom":M,"--n-padding-left":j,"--n-font-size":D,"--n-title-font-size":O,"--n-close-size":b,"--n-close-icon-size":y,"--n-close-border-radius":v}}),u=n?Ye(`card`,I(()=>c.value[0]),l,e):void 0;return{rtlEnabled:s,mergedClsPrefix:r,mergedTheme:o,handleCloseClick:t,cssVars:n?void 0:l,themeClass:u?.themeClass,onRender:u?.onRender}},render(){let{segmented:e,bordered:t,hoverable:n,mergedClsPrefix:r,rtlEnabled:i,onRender:a,embedded:o,tag:s,$slots:c}=this;return a?.(),b(s,{class:[`${r}-card`,this.themeClass,o&&`${r}-card--embedded`,{[`${r}-card--rtl`]:i,[`${r}-card--content-scrollable`]:this.contentScrollable,[`${r}-card--content${typeof e!=`boolean`&&e.content===`soft`?`-soft`:``}-segmented`]:e===!0||e!==!1&&e.content,[`${r}-card--footer${typeof e!=`boolean`&&e.footer===`soft`?`-soft`:``}-segmented`]:e===!0||e!==!1&&e.footer,[`${r}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${r}-card--bordered`]:t,[`${r}-card--hoverable`]:n}],style:this.cssVars,role:this.role},rs(c.cover,e=>{let t=this.cover?es([this.cover()]):e;return t&&b(`div`,{class:`${r}-card-cover`,role:`none`},t)}),rs(c.header,e=>{let{title:t}=this,n=t?es(typeof t==`function`?[t()]:[t]):e;return n||this.closable?b(`div`,{class:[`${r}-card-header`,this.headerClass],style:this.headerStyle,role:`heading`},b(`div`,{class:`${r}-card-header__main`,role:`heading`},n),rs(c[`header-extra`],e=>{let t=this.headerExtra?es([this.headerExtra()]):e;return t&&b(`div`,{class:[`${r}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},t)}),this.closable&&b(Xl,{clsPrefix:r,class:`${r}-card-header__close`,onClick:this.handleCloseClick,focusable:this.closeFocusable,absolute:!0})):null}),rs(c.default,e=>{let{content:t}=this,n=t?es(typeof t==`function`?[t()]:[t]):e;return n?this.contentScrollable?b(su,{class:`${r}-card__content-scrollbar`,contentClass:[`${r}-card-content`,this.contentClass],contentStyle:this.contentStyle},n):b(`div`,{class:[`${r}-card-content`,this.contentClass],style:this.contentStyle,role:`none`},n):null}),rs(c.footer,e=>{let t=this.footer?es([this.footer()]):e;return t&&b(`div`,{class:[`${r}-card__footer`,this.footerClass],style:this.footerStyle,role:`none`},t)}),rs(c.action,e=>{let t=this.action?es([this.action()]):e;return t&&b(`div`,{class:`${r}-card__action`,role:`none`},t)}))}}),Nd=R({name:`ConfigProvider`,alias:[`App`],props:{abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:`div`},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,styleMountTarget:Object,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(qe(`config-provider`,"`as` is deprecated, please use `tag` instead."),!0),default:void 0}},setup(e){let t=L(Ue,null),n=I(()=>{let{theme:n}=e;if(n===null)return;let r=t?.mergedThemeRef.value;return n===void 0?r:r===void 0?n:Object.assign({},r,n)}),r=I(()=>{let{themeOverrides:n}=e;if(n!==null){if(n===void 0)return t?.mergedThemeOverridesRef.value;{let e=t?.mergedThemeOverridesRef.value;return e===void 0?n:ct({},e,n)}}}),i=ni(()=>{let{namespace:n}=e;return n===void 0?t?.mergedNamespaceRef.value:n}),a=ni(()=>{let{bordered:n}=e;return n===void 0?t?.mergedBorderedRef.value:n}),o=I(()=>{let{icons:n}=e;return n===void 0?t?.mergedIconsRef.value:n}),s=I(()=>{let{componentOptions:n}=e;return n===void 0?t?.mergedComponentPropsRef.value:n}),c=I(()=>{let{clsPrefix:n}=e;return n===void 0?t?t.mergedClsPrefixRef.value:`n`:n}),l=I(()=>{var n;let{rtl:r}=e;if(r===void 0)return t?.mergedRtlRef.value;let i={};for(let e of r)i[e.name]=v(e),(n=e.peers)==null||n.forEach(e=>{e.name in i||(i[e.name]=v(e))});return i}),u=I(()=>e.breakpoints||t?.mergedBreakpointsRef.value),f=e.inlineThemeDisabled||t?.inlineThemeDisabled,p=e.preflightStyleDisabled||t?.preflightStyleDisabled,m=e.styleMountTarget||t?.styleMountTarget;return d(Ue,{mergedThemeHashRef:I(()=>{let{value:e}=n,{value:t}=r,i=t&&Object.keys(t).length!==0,a=e?.name;return a?i?`${a}-${Le(JSON.stringify(r.value))}`:a:i?Le(JSON.stringify(r.value)):``}),mergedBreakpointsRef:u,mergedRtlRef:l,mergedIconsRef:o,mergedComponentPropsRef:s,mergedBorderedRef:a,mergedNamespaceRef:i,mergedClsPrefixRef:c,mergedLocaleRef:I(()=>{let{locale:n}=e;if(n!==null)return n===void 0?t?.mergedLocaleRef.value:n}),mergedDateLocaleRef:I(()=>{let{dateLocale:n}=e;if(n!==null)return n===void 0?t?.mergedDateLocaleRef.value:n}),mergedHljsRef:I(()=>{let{hljs:n}=e;return n===void 0?t?.mergedHljsRef.value:n}),mergedKatexRef:I(()=>{let{katex:n}=e;return n===void 0?t?.mergedKatexRef.value:n}),mergedThemeRef:n,mergedThemeOverridesRef:r,inlineThemeDisabled:f||!1,preflightStyleDisabled:p||!1,styleMountTarget:m}),{mergedClsPrefix:c,mergedBordered:a,mergedNamespace:i,mergedTheme:n,mergedThemeOverrides:r}},render(){var e,t;return this.abstract?(t=this.$slots).default?.call(t):b(this.as||this.tag,{class:`${this.mergedClsPrefix||`n`}-config-provider`},(e=this.$slots).default?.call(e))}}),Pd={padding:`4px 0`,optionIconSizeSmall:`14px`,optionIconSizeMedium:`16px`,optionIconSizeLarge:`16px`,optionIconSizeHuge:`18px`,optionSuffixWidthSmall:`14px`,optionSuffixWidthMedium:`14px`,optionSuffixWidthLarge:`16px`,optionSuffixWidthHuge:`16px`,optionIconSuffixWidthSmall:`32px`,optionIconSuffixWidthMedium:`32px`,optionIconSuffixWidthLarge:`36px`,optionIconSuffixWidthHuge:`36px`,optionPrefixWidthSmall:`14px`,optionPrefixWidthMedium:`14px`,optionPrefixWidthLarge:`16px`,optionPrefixWidthHuge:`16px`,optionIconPrefixWidthSmall:`36px`,optionIconPrefixWidthMedium:`36px`,optionIconPrefixWidthLarge:`40px`,optionIconPrefixWidthHuge:`40px`};function Fd(e){let{primaryColor:t,textColor2:n,dividerColor:r,hoverColor:i,popoverColor:a,invertedColor:o,borderRadius:s,fontSizeSmall:c,fontSizeMedium:l,fontSizeLarge:u,fontSizeHuge:d,heightSmall:f,heightMedium:p,heightLarge:m,heightHuge:h,textColor3:g,opacityDisabled:_}=e;return Object.assign(Object.assign({},Pd),{optionHeightSmall:f,optionHeightMedium:p,optionHeightLarge:m,optionHeightHuge:h,borderRadius:s,fontSizeSmall:c,fontSizeMedium:l,fontSizeLarge:u,fontSizeHuge:d,optionTextColor:n,optionTextColorHover:n,optionTextColorActive:t,optionTextColorChildActive:t,color:a,dividerColor:r,suffixColor:n,prefixColor:n,optionColorHover:i,optionColorActive:ze(t,{alpha:.1}),groupHeaderTextColor:g,optionTextColorInverted:`#BBB`,optionTextColorHoverInverted:`#FFF`,optionTextColorActiveInverted:`#FFF`,optionTextColorChildActiveInverted:`#FFF`,colorInverted:o,dividerColorInverted:`#BBB`,suffixColorInverted:`#BBB`,prefixColorInverted:`#BBB`,optionColorHoverInverted:t,optionColorActiveInverted:t,groupHeaderTextColorInverted:`#AAA`,optionOpacityDisabled:_})}var Id=xt({name:`Dropdown`,common:Ct,peers:{Popover:Ju},self:Fd}),Ld={padding:`8px 14px`};function Rd(e){let{borderRadius:t,boxShadow2:n,baseColor:r}=e;return Object.assign(Object.assign({},Ld),{borderRadius:t,boxShadow:n,color:nt(r,`rgba(0, 0, 0, .85)`),textColor:r})}var zd=xt({name:`Tooltip`,common:Ct,peers:{Popover:Ju},self:Rd}),Bd=R({name:`Tooltip`,props:Object.assign(Object.assign({},ad),U.props),slots:Object,__popover__:!0,setup(e){let{mergedClsPrefixRef:t}=Ze(e),n=U(`Tooltip`,`-tooltip`,void 0,zd,e,t),r=P(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(e){r.value.setShow(e)}}),{popoverRef:r,mergedTheme:n,popoverThemeOverrides:I(()=>n.value.self)})},render(){let{mergedTheme:e,internalExtraClass:t}=this;return b(od,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat(`tooltip`),ref:`popoverRef`}),this.$slots)}}),Vd=G(`n-dropdown-menu`),Hd=G(`n-dropdown`),Ud=G(`n-dropdown-option`),Wd=R({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return b(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),Gd=R({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=L(Vd),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=L(Hd);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:o}=this.tmNode,s=b(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(o)),b(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},b(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},Y(o.icon)),b(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(o):Y(o.title??o[this.labelField])),b(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:o}):s}});function Kd(e){let{textColorBase:t,opacity1:n,opacity2:r,opacity3:i,opacity4:a,opacity5:o}=e;return{color:t,opacity1Depth:n,opacity2Depth:r,opacity3Depth:i,opacity4Depth:a,opacity5Depth:o}}var qd={name:`Icon`,common:Ct,self:Kd},Jd=V(`icon`,`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[W(`color-transition`,{transition:`color .3s var(--n-bezier)`}),W(`depth`,{color:`var(--n-color)`},[B(`svg`,{opacity:`var(--n-opacity)`,transition:`opacity .3s var(--n-bezier)`})]),B(`svg`,{height:`1em`,width:`1em`})]),Yd=R({_n_icon__:!0,name:`Icon`,inheritAttrs:!1,props:Object.assign(Object.assign({},U.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Ze(e),r=U(`Icon`,`-icon`,Jd,qd,e,t),i=I(()=>{let{depth:t}=e,{common:{cubicBezierEaseInOut:n},self:i}=r.value;if(t!==void 0){let{color:e,[`opacity${t}Depth`]:r}=i;return{"--n-bezier":n,"--n-color":e,"--n-opacity":r}}return{"--n-bezier":n,"--n-color":``,"--n-opacity":``}}),a=n?Ye(`icon`,I(()=>`${e.depth||`d`}`),i,e):void 0;return{mergedClsPrefix:t,mergedStyle:I(()=>{let{size:t,color:n}=e;return{fontSize:Vo(t),color:n}}),cssVars:n?void 0:i,themeClass:a?.themeClass,onRender:a?.onRender}},render(){let{$parent:e,depth:t,mergedClsPrefix:n,component:r,onRender:i,themeClass:a}=this;return e?.$options?._n_icon__&&qe(`icon`,"don't wrap `n-icon` inside `n-icon`"),i?.(),b(`i`,s(this.$attrs,{role:`img`,class:[`${n}-icon`,a,{[`${n}-icon--depth`]:t,[`${n}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?b(r):this.$slots)}});function Xd(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function Zd(e){return e.type===`group`}function Qd(e){return e.type===`divider`}function $d(e){return e.type===`render`}var ef=R({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=L(Hd),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:a,activeKeyPathRef:o,animatedRef:s,mergedShowRef:c,renderLabelRef:l,renderIconRef:u,labelFieldRef:f,childrenFieldRef:p,renderOptionRef:m,nodePropsRef:h,menuPropsRef:g}=t,_=L(Ud,null),v=L(Vd),y=L(ki),b=I(()=>e.tmNode.rawNode),x=I(()=>{let{value:t}=p;return Xd(e.tmNode.rawNode,t)}),S=I(()=>{let{disabled:t}=e.tmNode;return t}),C=Mi(I(()=>{if(!x.value)return!1;let{key:t,disabled:o}=e.tmNode;if(o)return!1;let{value:s}=n,{value:c}=r,{value:l}=i,{value:u}=a;return s===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,I(()=>r.value===null&&!s.value)),w=I(()=>!!_?.enteringSubmenuRef.value),T=P(!1);d(Ud,{enteringSubmenuRef:T});function E(){T.value=!0}function D(){T.value=!1}function O(){let{parentKey:t,tmNode:a}=e;a.disabled||c.value&&(i.value=t,r.value=null,n.value=a.key)}function k(){let{tmNode:t}=e;t.disabled||c.value&&n.value!==t.key&&O()}function A(t){if(e.tmNode.disabled||!c.value)return;let{relatedTarget:r}=t;r&&!Hr({target:r},`dropdownOption`)&&!Hr({target:r},`scrollbarRail`)&&(n.value=null)}function j(){let{value:n}=x,{tmNode:r}=e;c.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:f,renderLabel:l,renderIcon:u,siblingHasIcon:v.showIconRef,siblingHasSubmenu:v.hasSubmenuRef,menuProps:g,popoverBody:y,animated:s,mergedShowSubmenu:I(()=>C.value&&!w.value),rawNode:b,hasSubmenu:x,pending:ni(()=>{let{value:t}=a,{key:n}=e.tmNode;return t.includes(n)}),childActive:ni(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:ni(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:S,renderOption:m,nodeProps:h,handleClick:j,handleMouseMove:k,handleMouseEnter:O,handleMouseLeave:A,handleSubmenuBeforeEnter:E,handleSubmenuAfterEnter:D}},render(){let{animated:e,rawNode:t,mergedShowSubmenu:n,clsPrefix:r,siblingHasIcon:i,siblingHasSubmenu:a,renderLabel:o,renderIcon:c,renderOption:l,nodeProps:u,props:d,scrollable:f}=this,p=null;if(n){let e=this.menuProps?.call(this,t,t.children);p=b(rf,Object.assign({},e,{clsPrefix:r,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let m={class:[`${r}-dropdown-option-body`,this.pending&&`${r}-dropdown-option-body--pending`,this.active&&`${r}-dropdown-option-body--active`,this.childActive&&`${r}-dropdown-option-body--child-active`,this.mergedDisabled&&`${r}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},h=u?.(t),g=b(`div`,Object.assign({class:[`${r}-dropdown-option`,h?.class],"data-dropdown-option":!0},h),b(`div`,s(m,d),[b(`div`,{class:[`${r}-dropdown-option-body__prefix`,i&&`${r}-dropdown-option-body__prefix--show-icon`]},[c?c(t):Y(t.icon)]),b(`div`,{"data-dropdown-option":!0,class:`${r}-dropdown-option-body__label`},o?o(t):Y(t[this.labelField]??t.title)),b(`div`,{"data-dropdown-option":!0,class:[`${r}-dropdown-option-body__suffix`,a&&`${r}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?b(Yd,null,{default:()=>b(Vl,null)}):null)]),this.hasSubmenu?b(na,null,{default:()=>[b(ra,null,{default:()=>b(`div`,{class:`${r}-dropdown-offset-container`},b(ka,{show:this.mergedShowSubmenu,placement:this.placement,to:f&&this.popoverBody||void 0,teleportDisabled:!f},{default:()=>b(`div`,{class:`${r}-dropdown-menu-wrapper`},e?b(Ht,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>p}):p)}))})]}):null);return l?l({node:g,option:t}):g}}),tf=R({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:r}=e;return b(j,null,b(Gd,{clsPrefix:n,tmNode:e,key:e.key}),r?.map(e=>{let{rawNode:r}=e;return r.show===!1?null:Qd(r)?b(Wd,{clsPrefix:n,key:e.key}):e.isGroup?(qe(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):b(ef,{clsPrefix:n,tmNode:e,parentKey:t,key:e.key})}))}}),nf=R({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return b(`div`,t,[e?.()])}}),rf=R({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:t,childrenFieldRef:n}=L(Hd);d(Vd,{showIconRef:I(()=>{let n=t.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>n?n(e):e.icon);let{rawNode:t}=e;return n?n(t):t.icon})}),hasSubmenuRef:I(()=>{let{value:t}=n;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>Xd(e,t));let{rawNode:n}=e;return Xd(n,t)})})});let r=P(null);return d(Ei,null),d(Ti,null),d(ki,r),{bodyRef:r}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:$d(i)?b(nf,{tmNode:r,key:r.key}):Qd(i)?b(Wd,{clsPrefix:t,key:r.key}):Zd(i)?b(tf,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):b(ef,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return b(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?b(cu,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?ed({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),af=V(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Gu(),V(`dropdown-option`,`
 position: relative;
 `,[B(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[B(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),V(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[B(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),Ke(`disabled`,[W(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[z(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),B(`&::before`,`background-color: var(--n-option-color-hover);`)]),W(`active`,`
 color: var(--n-option-text-color-active);
 `,[z(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),B(`&::before`,`background-color: var(--n-option-color-active);`)]),W(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[z(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),W(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),W(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[z(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[W(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),z(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[W(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),V(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),z(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),z(`suffix`,`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[W(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),V(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),V(`dropdown-menu`,`pointer-events: all;`)]),V(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),V(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),V(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),B(`>`,[V(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),Ke(`scrollable`,`
 padding: var(--n-padding);
 `),W(`scrollable`,[z(`content`,`
 padding: var(--n-padding);
 `)])]),of={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},sf=Object.keys(ad),cf=R({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},ad),of),U.props),setup(e){let t=P(!1),n=vi(F(e,`show`),t),r=I(()=>{let{keyField:t,childrenField:n}=e;return Hu(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),i=I(()=>r.value.treeNodes),a=P(null),o=P(null),s=P(null),c=I(()=>a.value??o.value??s.value??null),l=I(()=>r.value.getPath(c.value).keyPath),u=I(()=>r.value.getPath(e.value).keyPath),f=ni(()=>e.keyboard&&n.value);Ci({keydown:{ArrowUp:{prevent:!0,handler:w},ArrowRight:{prevent:!0,handler:C},ArrowDown:{prevent:!0,handler:E},ArrowLeft:{prevent:!0,handler:S},Enter:{prevent:!0,handler:D},Escape:x}},f);let{mergedClsPrefixRef:p,inlineThemeDisabled:m,mergedComponentPropsRef:h}=Ze(e),g=I(()=>e.size||h?.value?.Dropdown?.size||`medium`),_=U(`Dropdown`,`-dropdown`,af,Id,e,p);d(Hd,{labelFieldRef:F(e,`labelField`),childrenFieldRef:F(e,`childrenField`),renderLabelRef:F(e,`renderLabel`),renderIconRef:F(e,`renderIcon`),hoverKeyRef:a,keyboardKeyRef:o,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:l,activeKeyPathRef:u,animatedRef:F(e,`animated`),mergedShowRef:n,nodePropsRef:F(e,`nodeProps`),renderOptionRef:F(e,`renderOption`),menuPropsRef:F(e,`menuProps`),doSelect:v,doUpdateShow:y}),T(n,t=>{!e.animated&&!t&&b()});function v(t,n){let{onSelect:r}=e;r&&J(r,t,n)}function y(n){let{"onUpdate:show":r,onUpdateShow:i}=e;r&&J(r,n),i&&J(i,n),t.value=n}function b(){a.value=null,o.value=null,s.value=null}function x(){y(!1)}function S(){k(`left`)}function C(){k(`right`)}function w(){k(`up`)}function E(){k(`down`)}function D(){let e=O();e?.isLeaf&&n.value&&(v(e.key,e.rawNode),y(!1))}function O(){let{value:e}=r,{value:t}=c;return!e||t===null?null:e.getNode(t)??null}function k(e){let{value:t}=c,{value:{getFirstAvailableNode:n}}=r,i=null;if(t===null){let e=n();e!==null&&(i=e.key)}else{let t=O();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(i=n.key)}}i!==null&&(a.value=null,o.value=i)}let A=I(()=>{let{inverted:t}=e,n=g.value,{common:{cubicBezierEaseInOut:r},self:i}=_.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[H(`optionIconSuffixWidth`,n)]:l,[H(`optionSuffixWidth`,n)]:u,[H(`optionIconPrefixWidth`,n)]:d,[H(`optionPrefixWidth`,n)]:f,[H(`fontSize`,n)]:p,[H(`optionHeight`,n)]:m,[H(`optionIconSize`,n)]:h}=i,v={"--n-bezier":r,"--n-font-size":p,"--n-padding":a,"--n-border-radius":s,"--n-option-height":m,"--n-option-prefix-width":f,"--n-option-icon-prefix-width":d,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":h,"--n-divider-color":o,"--n-option-opacity-disabled":c};return t?(v[`--n-color`]=i.colorInverted,v[`--n-option-color-hover`]=i.optionColorHoverInverted,v[`--n-option-color-active`]=i.optionColorActiveInverted,v[`--n-option-text-color`]=i.optionTextColorInverted,v[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,v[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,v[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,v[`--n-prefix-color`]=i.prefixColorInverted,v[`--n-suffix-color`]=i.suffixColorInverted,v[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(v[`--n-color`]=i.color,v[`--n-option-color-hover`]=i.optionColorHover,v[`--n-option-color-active`]=i.optionColorActive,v[`--n-option-text-color`]=i.optionTextColor,v[`--n-option-text-color-hover`]=i.optionTextColorHover,v[`--n-option-text-color-active`]=i.optionTextColorActive,v[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,v[`--n-prefix-color`]=i.prefixColor,v[`--n-suffix-color`]=i.suffixColor,v[`--n-group-header-text-color`]=i.groupHeaderTextColor),v}),j=m?Ye(`dropdown`,I(()=>`${g.value[0]}${e.inverted?`i`:``}`),A,e):void 0;return{mergedClsPrefix:p,mergedTheme:_,mergedSize:g,tmNodes:i,mergedShow:n,handleAfterLeave:()=>{e.animated&&b()},doUpdateShow:y,cssVars:m?void 0:A,themeClass:j?.themeClass,onRender:j?.onRender}},render(){let e=(e,t,n,r,i)=>{var a;let{mergedClsPrefix:o,menuProps:c}=this;(a=this.onRender)==null||a.call(this);let l=c?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},u={ref:qo(t),class:[e,`${o}-dropdown`,`${o}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:o,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:i};return b(rf,s(this.$attrs,u,l))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return b(od,Object.assign({},Zo(this.$props,sf),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}}),lf=G(`n-dialog-provider`),uf=G(`n-dialog-api`),df=G(`n-dialog-reactive-list`),ff={titleFontSize:`18px`,padding:`16px 28px 20px 28px`,iconSize:`28px`,actionSpace:`12px`,contentMargin:`8px 0 16px 0`,iconMargin:`0 4px 0 0`,iconMarginIconTop:`4px 0 8px 0`,closeSize:`22px`,closeIconSize:`18px`,closeMargin:`20px 26px 0 0`,closeMarginIconTop:`10px 16px 0 0`};function pf(e){let{textColor1:t,textColor2:n,modalColor:r,closeIconColor:i,closeIconColorHover:a,closeIconColorPressed:o,closeColorHover:s,closeColorPressed:c,infoColor:l,successColor:u,warningColor:d,errorColor:f,primaryColor:p,dividerColor:m,borderRadius:h,fontWeightStrong:g,lineHeight:_,fontSize:v}=e;return Object.assign(Object.assign({},ff),{fontSize:v,lineHeight:_,border:`1px solid ${m}`,titleTextColor:t,textColor:n,color:r,closeColorHover:s,closeColorPressed:c,closeIconColor:i,closeIconColorHover:a,closeIconColorPressed:o,closeBorderRadius:h,iconColor:p,iconColorInfo:l,iconColorSuccess:u,iconColorWarning:d,iconColorError:f,borderRadius:h,titleFontWeight:g})}var mf=xt({name:`Dialog`,common:Ct,peers:{Button:Sd},self:pf}),hf={icon:Function,type:{type:String,default:`default`},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,titleClass:[String,Array],titleStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],actionClass:[String,Array],actionStyle:[String,Object],onPositiveClick:Function,onNegativeClick:Function,onClose:Function,closeFocusable:Boolean},gf=Qo(hf),_f=B([V(`dialog`,`
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[z(`icon`,`
 color: var(--n-icon-color);
 `),W(`bordered`,`
 border: var(--n-border);
 `),W(`icon-top`,[z(`close`,`
 margin: var(--n-close-margin);
 `),z(`icon`,`
 margin: var(--n-icon-margin);
 `),z(`content`,`
 text-align: center;
 `),z(`title`,`
 justify-content: center;
 `),z(`action`,`
 justify-content: center;
 `)]),W(`icon-left`,[z(`icon`,`
 margin: var(--n-icon-margin);
 `),W(`closable`,[z(`title`,`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),z(`close`,`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),z(`content`,`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[W(`last`,`margin-bottom: 0;`)]),z(`action`,`
 display: flex;
 justify-content: flex-end;
 `,[B(`> *:not(:last-child)`,`
 margin-right: var(--n-action-space);
 `)]),z(`icon`,`
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `),z(`title`,`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),V(`dialog-icon-container`,`
 display: flex;
 justify-content: center;
 `)]),rt(V(`dialog`,`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),V(`dialog`,[Ge(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),vf={default:()=>b(Wl,null),info:()=>b(Wl,null),success:()=>b(Gl,null),warning:()=>b(Kl,null),error:()=>b(Ul,null)},yf=R({name:`Dialog`,alias:[`NimbusConfirmCard`,`Confirm`],props:Object.assign(Object.assign({},U.props),hf),slots:Object,setup(e){let{mergedComponentPropsRef:t,mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=Ze(e),a=Ll(`Dialog`,i,n),o=I(()=>{let{iconPlacement:n}=e;return n||t?.value?.Dialog?.iconPlacement||`left`});function s(t){let{onPositiveClick:n}=e;n&&n(t)}function c(t){let{onNegativeClick:n}=e;n&&n(t)}function l(){let{onClose:t}=e;t&&t()}let u=U(`Dialog`,`-dialog`,_f,mf,e,n),d=I(()=>{let{type:t}=e,n=o.value,{common:{cubicBezierEaseInOut:r},self:{fontSize:i,lineHeight:a,border:s,titleTextColor:c,textColor:l,color:d,closeBorderRadius:f,closeColorHover:p,closeColorPressed:m,closeIconColor:h,closeIconColorHover:g,closeIconColorPressed:_,closeIconSize:v,borderRadius:y,titleFontWeight:b,titleFontSize:x,padding:S,iconSize:C,actionSpace:w,contentMargin:T,closeSize:E,[n===`top`?`iconMarginIconTop`:`iconMargin`]:D,[n===`top`?`closeMarginIconTop`:`closeMargin`]:O,[H(`iconColor`,t)]:k}}=u.value,A=Kr(D);return{"--n-font-size":i,"--n-icon-color":k,"--n-bezier":r,"--n-close-margin":O,"--n-icon-margin-top":A.top,"--n-icon-margin-right":A.right,"--n-icon-margin-bottom":A.bottom,"--n-icon-margin-left":A.left,"--n-icon-size":C,"--n-close-size":E,"--n-close-icon-size":v,"--n-close-border-radius":f,"--n-close-color-hover":p,"--n-close-color-pressed":m,"--n-close-icon-color":h,"--n-close-icon-color-hover":g,"--n-close-icon-color-pressed":_,"--n-color":d,"--n-text-color":l,"--n-border-radius":y,"--n-padding":S,"--n-line-height":a,"--n-border":s,"--n-content-margin":T,"--n-title-font-size":x,"--n-title-font-weight":b,"--n-title-text-color":c,"--n-action-space":w}}),f=r?Ye(`dialog`,I(()=>`${e.type[0]}${o.value[0]}`),d,e):void 0;return{mergedClsPrefix:n,rtlEnabled:a,mergedIconPlacement:o,mergedTheme:u,handlePositiveClick:s,handleNegativeClick:c,handleCloseClick:l,cssVars:r?void 0:d,themeClass:f?.themeClass,onRender:f?.onRender}},render(){var e;let{bordered:t,mergedIconPlacement:n,cssVars:r,closable:i,showIcon:a,title:o,content:s,action:c,negativeText:l,positiveText:u,positiveButtonProps:d,negativeButtonProps:f,handlePositiveClick:p,handleNegativeClick:m,mergedTheme:h,loading:g,type:_,mergedClsPrefix:v}=this;(e=this.onRender)==null||e.call(this);let y=a?b(vt,{clsPrefix:v,class:`${v}-dialog__icon`},{default:()=>rs(this.$slots.icon,e=>e||(this.icon?Y(this.icon):vf[this.type]()))}):null,x=rs(this.$slots.action,e=>e||u||l||c?b(`div`,{class:[`${v}-dialog__action`,this.actionClass],style:this.actionStyle},e||(c?[Y(c)]:[this.negativeText&&b(wd,Object.assign({theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,ghost:!0,size:`small`,onClick:m},f),{default:()=>Y(this.negativeText)}),this.positiveText&&b(wd,Object.assign({theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,size:`small`,type:_==="default"?`primary`:_,disabled:g,loading:g,onClick:p},d),{default:()=>Y(this.positiveText)})])):null);return b(`div`,{class:[`${v}-dialog`,this.themeClass,this.closable&&`${v}-dialog--closable`,`${v}-dialog--icon-${n}`,t&&`${v}-dialog--bordered`,this.rtlEnabled&&`${v}-dialog--rtl`],style:r,role:`dialog`},i?rs(this.$slots.close,e=>{let t=[`${v}-dialog__close`,this.rtlEnabled&&`${v}-dialog--rtl`];return e?b(`div`,{class:t},e):b(Xl,{focusable:this.closeFocusable,clsPrefix:v,class:t,onClick:this.handleCloseClick})}):null,a&&n===`top`?b(`div`,{class:`${v}-dialog-icon-container`},y):null,b(`div`,{class:[`${v}-dialog__title`,this.titleClass],style:this.titleStyle},a&&n===`left`?y:null,ts(this.$slots.header,()=>[Y(o)])),b(`div`,{class:[`${v}-dialog__content`,x?``:`${v}-dialog__content--last`,this.contentClass],style:this.contentStyle},ts(this.$slots.default,()=>[Y(s)])),x)}});function bf(e){let{modalColor:t,textColor2:n,boxShadow3:r}=e;return{color:t,textColor:n,boxShadow:r}}var xf=xt({name:`Modal`,common:Ct,peers:{Scrollbar:au,Dialog:mf,Card:Dd},self:bf}),Sf=`n-draggable`;function Cf(e,t){let n,r=I(()=>e.value!==!1),i=I(()=>r.value?Sf:``),a=I(()=>{let t=e.value;return t===!0||t===!1?!0:t?t.bounds!==`none`:!0});function o(e){let r=e.querySelector(`.${Sf}`);if(!r||!i.value)return;let o=0,s=0,c=0,l=0,u=0,d=0,f,p=null,m=null;function h(t){t.preventDefault(),f=t;let{x:n,y:r,right:i,bottom:a}=e.getBoundingClientRect();s=n,l=r,o=window.innerWidth-i,c=window.innerHeight-a;let{left:p,top:m}=e.style;u=+m.slice(0,-2),d=+p.slice(0,-2)}function g(){m&&=(e.style.top=`${m.y}px`,e.style.left=`${m.x}px`,null),p=null}function _(e){if(!f)return;let{clientX:t,clientY:n}=f,r=e.clientX-t,i=e.clientY-n;a.value&&(r>o?r=o:-r>s&&(r=-s),i>c?i=c:-i>l&&(i=-l)),m={x:r+d,y:i+u},p||=requestAnimationFrame(g)}function v(){f=void 0,p&&=(cancelAnimationFrame(p),null),m&&=(e.style.top=`${m.y}px`,e.style.left=`${m.x}px`,null),t.onEnd(e)}K(`mousedown`,r,h),K(`mousemove`,window,_),K(`mouseup`,window,v),n=()=>{p&&cancelAnimationFrame(p),q(`mousedown`,r,h),q(`mousemove`,window,_),q(`mouseup`,window,v)}}function s(){n&&=(n(),void 0)}return h(s),{stopDrag:s,startDrag:o,draggableRef:r,draggableClassRef:i}}var wf=Object.assign(Object.assign({},Ad),hf),Tf=Qo(wf),Ef=R({name:`ModalBody`,inheritAttrs:!1,slots:Object,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean,draggable:{type:[Boolean,Object],default:!1},maskHidden:Boolean},wf),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){let t=P(null),n=P(null),r=P(e.show),i=P(null),o=P(null),s=L(Oi),c=null;T(F(e,`show`),e=>{e&&(c=s.getMousePosition())},{immediate:!0});let{stopDrag:l,startDrag:u,draggableRef:f,draggableClassRef:p}=Cf(F(e,`draggable`),{onEnd:e=>{_(e)}}),m=I(()=>Me([e.titleClass,p.value])),h=I(()=>Me([e.headerClass,p.value]));T(F(e,`show`),e=>{e&&(r.value=!0)}),Gi(I(()=>e.blockScroll&&r.value));function g(){if(s.transformOriginRef.value===`center`)return``;let{value:e}=i,{value:t}=o;return e===null||t===null?``:n.value?`${e}px ${t+n.value.containerScrollTop}px`:``}function _(e){if(s.transformOriginRef.value===`center`||!c||!n.value)return;let t=n.value.containerScrollTop,{offsetLeft:r,offsetTop:a}=e,l=c.y;i.value=-(r-c.x),o.value=-(a-l-t),e.style.transformOrigin=g()}function v(e){a(()=>{_(e)})}function y(t){t.style.transformOrigin=g(),e.onBeforeLeave()}function b(t){let n=t;f.value&&u(n),e.onAfterEnter&&e.onAfterEnter(n)}function x(){r.value=!1,i.value=null,o.value=null,l(),e.onAfterLeave()}function S(){let{onClose:t}=e;t&&t()}function C(){e.onNegativeClick()}function w(){e.onPositiveClick()}let E=P(null);return T(E,e=>{e&&a(()=>{let n=e.el;n&&t.value!==n&&(t.value=n)})}),d(Ei,t),d(Ti,null),d(ki,null),{mergedTheme:s.mergedThemeRef,appear:s.appearRef,isMounted:s.isMountedRef,mergedClsPrefix:s.mergedClsPrefixRef,bodyRef:t,scrollbarRef:n,draggableClass:p,displayed:r,childNodeRef:E,cardHeaderClass:h,dialogTitleClass:m,handlePositiveClick:w,handleNegativeClick:C,handleCloseClick:S,handleAfterEnter:b,handleAfterLeave:x,handleBeforeLeave:y,handleEnter:v}},render(){let{$slots:e,$attrs:t,handleEnter:n,handleAfterEnter:r,handleAfterLeave:i,handleBeforeLeave:a,preset:o,mergedClsPrefix:c}=this,l=null;if(!o){if(l=Xo(`default`,e.default,{draggableClass:this.draggableClass}),!l){qe(`modal`,`default slot is empty`);return}l=he(l),l.props=s({class:`${c}-modal`},t,l.props||{})}return this.displayDirective===`show`||this.displayed||this.show?Se(b(`div`,{role:`none`,class:[`${c}-modal-body-wrapper`,this.maskHidden&&`${c}-modal-body-wrapper--mask-hidden`]},b(su,{ref:`scrollbarRef`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${c}-modal-scroll-content`},{default:()=>[this.renderMask?.call(this),b(Lo,{disabled:!this.trapFocus||this.maskHidden,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>b(Ht,{name:`fade-in-scale-up-transition`,appear:this.appear??this.isMounted,onEnter:n,onAfterEnter:r,onAfterLeave:i,onBeforeLeave:a},{default:()=>{let t=[[sn,this.show]],{onClickoutside:n}=this;return n&&t.push([sa,this.onClickoutside,void 0,{capture:!0}]),Se(this.preset===`confirm`||this.preset===`dialog`?b(yf,Object.assign({},this.$attrs,{class:[`${c}-modal`,this.$attrs.class],ref:`bodyRef`,theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},Zo(this.$props,gf),{titleClass:this.dialogTitleClass,"aria-modal":`true`}),e):this.preset===`card`?b(Md,Object.assign({},this.$attrs,{ref:`bodyRef`,class:[`${c}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},Zo(this.$props,jd),{headerClass:this.cardHeaderClass,"aria-modal":`true`,role:`dialog`}),e):this.childNodeRef=l,t)}})})]})),[[sn,this.displayDirective===`if`||this.displayed||this.show]]):null}}),Df=B([V(`modal-container`,`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),V(`modal-mask`,`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[nu({enterDuration:`.25s`,leaveDuration:`.25s`,enterCubicBezier:`var(--n-bezier-ease-out)`,leaveCubicBezier:`var(--n-bezier-ease-out)`})]),V(`modal-body-wrapper`,`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[V(`modal-scroll-content`,`
 min-height: 100%;
 display: flex;
 position: relative;
 `),W(`mask-hidden`,`pointer-events: none;`,[V(`modal-scroll-content`,[B(`> *`,`
 pointer-events: all;
 `)])])]),V(`modal`,`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[Gu({duration:`.25s`,enterScale:`.5`}),B(`.${Sf}`,`
 cursor: move;
 user-select: none;
 `)])]),Of=R({name:`Modal`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign(Object.assign({},U.props),{show:Boolean,showMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:`if`},transformOrigin:{type:String,default:`mouse`},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),wf),{draggable:[Boolean,Object],onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalModal:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function,unstableShowMask:{type:Boolean,default:void 0}}),slots:Object,setup(e){let t=P(null),{mergedClsPrefixRef:n,namespaceRef:r,inlineThemeDisabled:i}=Ze(e),a=U(`Modal`,`-modal`,Df,xf,e,n),o=_i(64),s=fi(),c=yi(),l=e.internalDialog?L(lf,null):null,u=e.internalModal?L(Di,null):null,f=Ri();function p(t){let{onUpdateShow:n,"onUpdate:show":r,onHide:i}=e;n&&J(n,t),r&&J(r,t),i&&!t&&i(t)}function m(){let{onClose:t}=e;t?Promise.resolve(t()).then(e=>{e!==!1&&p(!1)}):p(!1)}function h(){let{onPositiveClick:t}=e;t?Promise.resolve(t()).then(e=>{e!==!1&&p(!1)}):p(!1)}function g(){let{onNegativeClick:t}=e;t?Promise.resolve(t()).then(e=>{e!==!1&&p(!1)}):p(!1)}function _(){let{onBeforeLeave:t,onBeforeHide:n}=e;t&&J(t),n&&n()}function v(){let{onAfterLeave:t,onAfterHide:n}=e;t&&J(t),n&&n()}function y(n){let{onMaskClick:r}=e;r&&r(n),e.maskClosable&&t.value?.contains(Ur(n))&&p(!1)}function b(t){var n;(n=e.onEsc)==null||n.call(e),e.show&&e.closeOnEsc&&Ko(t)&&(f.value||p(!1))}d(Oi,{getMousePosition:()=>{let e=l||u;if(e){let{clickedRef:t,clickedPositionRef:n}=e;if(t.value&&n.value)return n.value}return o.value?s.value:null},mergedClsPrefixRef:n,mergedThemeRef:a,isMountedRef:c,appearRef:F(e,`internalAppear`),transformOriginRef:F(e,`transformOrigin`)});let x=I(()=>{let{common:{cubicBezierEaseOut:e},self:{boxShadow:t,color:n,textColor:r}}=a.value;return{"--n-bezier-ease-out":e,"--n-box-shadow":t,"--n-color":n,"--n-text-color":r}}),S=i?Ye(`theme-class`,void 0,x,e):void 0;return{mergedClsPrefix:n,namespace:r,isMounted:c,containerRef:t,presetProps:I(()=>Zo(e,Tf)),handleEsc:b,handleAfterLeave:v,handleClickoutside:y,handleBeforeLeave:_,doUpdateShow:p,handleNegativeClick:g,handlePositiveClick:h,handleCloseClick:m,cssVars:i?void 0:x,themeClass:S?.themeClass,onRender:S?.onRender}},render(){let{mergedClsPrefix:e}=this;return b(ga,{to:this.to,show:this.show},{default:()=>{var t;(t=this.onRender)==null||t.call(this);let{showMask:n}=this;return Se(b(`div`,{role:`none`,ref:`containerRef`,class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},b(Ef,Object.assign({style:this.overlayStyle},this.$attrs,{ref:`bodyWrapper`,displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,draggable:this.draggable,blockScroll:this.blockScroll,maskHidden:!n},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:n?void 0:this.handleClickoutside,renderMask:n?()=>b(Ht,{name:`fade-in-transition`,key:`mask`,appear:this.internalAppear??this.isMounted},{default:()=>this.show?b(`div`,{"aria-hidden":!0,ref:`containerRef`,class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null}):void 0}),this.$slots)),[[da,{zIndex:this.zIndex,enabled:this.show}]])}})}}),kf=Object.assign(Object.assign({},hf),{onAfterEnter:Function,onAfterLeave:Function,transformOrigin:String,blockScroll:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},internalStyle:[String,Object],maskClosable:{type:Boolean,default:!0},zIndex:Number,onPositiveClick:Function,onNegativeClick:Function,onClose:Function,onMaskClick:Function,draggable:[Boolean,Object]}),Af=R({name:`DialogEnvironment`,props:Object.assign(Object.assign({},kf),{internalKey:{type:String,required:!0},to:[String,Object],onInternalAfterLeave:{type:Function,required:!0}}),setup(e){let t=P(!0);function n(){let{onInternalAfterLeave:t,internalKey:n,onAfterLeave:r}=e;t&&t(n),r&&r()}function r(t){let{onPositiveClick:n}=e;n?Promise.resolve(n(t)).then(e=>{e!==!1&&c()}):c()}function i(t){let{onNegativeClick:n}=e;n?Promise.resolve(n(t)).then(e=>{e!==!1&&c()}):c()}function a(){let{onClose:t}=e;t?Promise.resolve(t()).then(e=>{e!==!1&&c()}):c()}function o(t){let{onMaskClick:n,maskClosable:r}=e;n&&(n(t),r&&c())}function s(){let{onEsc:t}=e;t&&t()}function c(){t.value=!1}function l(e){t.value=e}return{show:t,hide:c,handleUpdateShow:l,handleAfterLeave:n,handleCloseClick:a,handleNegativeClick:i,handlePositiveClick:r,handleMaskClick:o,handleEsc:s}},render(){let{handlePositiveClick:e,handleUpdateShow:t,handleNegativeClick:n,handleCloseClick:r,handleAfterLeave:i,handleMaskClick:a,handleEsc:o,to:s,zIndex:c,maskClosable:l,show:u}=this;return b(Of,{show:u,onUpdateShow:t,onMaskClick:a,onEsc:o,to:s,zIndex:c,maskClosable:l,onAfterEnter:this.onAfterEnter,onAfterLeave:i,closeOnEsc:this.closeOnEsc,blockScroll:this.blockScroll,autoFocus:this.autoFocus,transformOrigin:this.transformOrigin,draggable:this.draggable,internalAppear:!0,internalDialog:!0},{default:({draggableClass:t})=>b(yf,Object.assign({},Zo(this.$props,gf),{titleClass:Me([this.titleClass,t]),style:this.internalStyle,onClose:r,onNegativeClick:n,onPositiveClick:e}))})}}),jf=R({name:`DialogProvider`,props:{injectionKey:String,to:[String,Object]},setup(){let e=P([]),t={};function n(n={}){let r=qr(),i=ae(Object.assign(Object.assign({},n),{key:r,destroy:()=>{var e;(e=t[`n-dialog-${r}`])==null||e.hide()}}));return e.value.push(i),i}let r=[`info`,`success`,`warning`,`error`].map(e=>t=>n(Object.assign(Object.assign({},t),{type:e})));function i(t){let{value:n}=e;n.splice(n.findIndex(e=>e.key===t),1)}function a(){Object.values(t).forEach(e=>{e?.hide()})}let o={create:n,destroyAll:a,info:r[0],success:r[1],warning:r[2],error:r[3]};return d(uf,o),d(lf,{clickedRef:_i(64),clickedPositionRef:fi()}),d(df,e),Object.assign(Object.assign({},o),{dialogList:e,dialogInstRefs:t,handleAfterLeave:i})},render(){var e;return b(j,null,[this.dialogList.map(e=>b(Af,$o(e,[`destroy`,`style`],{internalStyle:e.style,to:this.to,ref:t=>{t===null?delete this.dialogInstRefs[`n-dialog-${e.key}`]:this.dialogInstRefs[`n-dialog-${e.key}`]=t},internalKey:e.key,onInternalAfterLeave:this.handleAfterLeave}))),(e=this.$slots).default?.call(e)])}}),Mf=G(`n-message-api`),Nf=G(`n-message-provider`),Pf={margin:`0 0 8px 0`,padding:`10px 20px`,maxWidth:`720px`,minWidth:`420px`,iconMargin:`0 10px 0 0`,closeMargin:`0 0 0 10px`,closeSize:`20px`,closeIconSize:`16px`,iconSize:`20px`,fontSize:`14px`};function Ff(e){let{textColor2:t,closeIconColor:n,closeIconColorHover:r,closeIconColorPressed:i,infoColor:a,successColor:o,errorColor:s,warningColor:c,popoverColor:l,boxShadow2:u,primaryColor:d,lineHeight:f,borderRadius:p,closeColorHover:m,closeColorPressed:h}=e;return Object.assign(Object.assign({},Pf),{closeBorderRadius:p,textColor:t,textColorInfo:t,textColorSuccess:t,textColorError:t,textColorWarning:t,textColorLoading:t,color:l,colorInfo:l,colorSuccess:l,colorError:l,colorWarning:l,colorLoading:l,boxShadow:u,boxShadowInfo:u,boxShadowSuccess:u,boxShadowError:u,boxShadowWarning:u,boxShadowLoading:u,iconColor:t,iconColorInfo:a,iconColorSuccess:o,iconColorWarning:c,iconColorError:s,iconColorLoading:d,closeColorHover:m,closeColorPressed:h,closeIconColor:n,closeIconColorHover:r,closeIconColorPressed:i,closeColorHoverInfo:m,closeColorPressedInfo:h,closeIconColorInfo:n,closeIconColorHoverInfo:r,closeIconColorPressedInfo:i,closeColorHoverSuccess:m,closeColorPressedSuccess:h,closeIconColorSuccess:n,closeIconColorHoverSuccess:r,closeIconColorPressedSuccess:i,closeColorHoverError:m,closeColorPressedError:h,closeIconColorError:n,closeIconColorHoverError:r,closeIconColorPressedError:i,closeColorHoverWarning:m,closeColorPressedWarning:h,closeIconColorWarning:n,closeIconColorHoverWarning:r,closeIconColorPressedWarning:i,closeColorHoverLoading:m,closeColorPressedLoading:h,closeIconColorLoading:n,closeIconColorHoverLoading:r,closeIconColorPressedLoading:i,loadingColor:d,lineHeight:f,borderRadius:p,border:`0`})}var If={name:`Message`,common:Ct,self:Ff},Lf={icon:Function,type:{type:String,default:`info`},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,spinProps:Object,onClose:Function,onMouseenter:Function,onMouseleave:Function},Rf=B([V(`message-wrapper`,`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[md({overflow:`visible`,originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.85)`}})]),V(`message`,`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 border: var(--n-border);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `,[z(`content`,`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),z(`icon`,`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[[`default`,`info`,`success`,`warning`,`error`,`loading`].map(e=>W(`${e}-type`,[B(`> *`,`
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])),B(`> *`,`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[Jl()])]),z(`close`,`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[B(`&:hover`,`
 color: var(--n-close-icon-color-hover);
 `),B(`&:active`,`
 color: var(--n-close-icon-color-pressed);
 `)])]),V(`message-container`,`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[W(`top`,`
 top: 12px;
 left: 0;
 right: 0;
 `),W(`top-left`,`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),W(`top-right`,`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),W(`bottom`,`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),W(`bottom-left`,`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),W(`bottom-right`,`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]),zf={info:()=>b(Wl,null),success:()=>b(Gl,null),warning:()=>b(Kl,null),error:()=>b(Ul,null),default:()=>null},Bf=R({name:`Message`,props:Object.assign(Object.assign({},Lf),{render:Function}),setup(e){let{inlineThemeDisabled:t,mergedRtlRef:n}=Ze(e),{props:r,mergedClsPrefixRef:i}=L(Nf),a=Ll(`Message`,n,i),o=U(`Message`,`-message`,Rf,If,r,i),s=I(()=>{let{type:t}=e,{common:{cubicBezierEaseInOut:n},self:{padding:r,margin:i,maxWidth:a,iconMargin:s,closeMargin:c,closeSize:l,iconSize:u,fontSize:d,lineHeight:f,borderRadius:p,border:m,iconColorInfo:h,iconColorSuccess:g,iconColorWarning:_,iconColorError:v,iconColorLoading:y,closeIconSize:b,closeBorderRadius:x,[H(`textColor`,t)]:S,[H(`boxShadow`,t)]:C,[H(`color`,t)]:w,[H(`closeColorHover`,t)]:T,[H(`closeColorPressed`,t)]:E,[H(`closeIconColor`,t)]:D,[H(`closeIconColorPressed`,t)]:O,[H(`closeIconColorHover`,t)]:k}}=o.value;return{"--n-bezier":n,"--n-margin":i,"--n-padding":r,"--n-max-width":a,"--n-font-size":d,"--n-icon-margin":s,"--n-icon-size":u,"--n-close-icon-size":b,"--n-close-border-radius":x,"--n-close-size":l,"--n-close-margin":c,"--n-text-color":S,"--n-color":w,"--n-box-shadow":C,"--n-icon-color-info":h,"--n-icon-color-success":g,"--n-icon-color-warning":_,"--n-icon-color-error":v,"--n-icon-color-loading":y,"--n-close-color-hover":T,"--n-close-color-pressed":E,"--n-close-icon-color":D,"--n-close-icon-color-pressed":O,"--n-close-icon-color-hover":k,"--n-line-height":f,"--n-border-radius":p,"--n-border":m}}),c=t?Ye(`message`,I(()=>e.type[0]),s,{}):void 0;return{mergedClsPrefix:i,rtlEnabled:a,messageProviderProps:r,handleClose(){var t;(t=e.onClose)==null||t.call(e)},cssVars:t?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender,placement:r.placement}},render(){let{render:e,type:t,closable:n,content:r,mergedClsPrefix:i,cssVars:a,themeClass:o,onRender:s,icon:c,handleClose:l,showIcon:u}=this;s?.();let d;return b(`div`,{class:[`${i}-message-wrapper`,o],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith(`top`)?`flex-start`:`flex-end`},a]},e?e(this.$props):b(`div`,{class:[`${i}-message ${i}-message--${t}-type`,this.rtlEnabled&&`${i}-message--rtl`]},(d=Vf(c,t,i,this.spinProps))&&u?b(`div`,{class:`${i}-message__icon ${i}-message__icon--${t}-type`},b(Rl,null,{default:()=>d})):null,b(`div`,{class:`${i}-message__content`},Y(r)),n?b(Xl,{clsPrefix:i,class:`${i}-message__close`,onClick:l,absolute:!0}):null))}});function Vf(e,t,n,r){if(typeof e==`function`)return e();{let e=t===`loading`?b(eu,Object.assign({clsPrefix:n,strokeWidth:24,scale:.85},r)):zf[t]();return e?b(vt,{clsPrefix:n,key:t},{default:()=>e}):null}}var Hf=R({name:`MessageEnvironment`,props:Object.assign(Object.assign({},Lf),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(e){let t=null,n=P(!0);m(()=>{r()});function r(){let{duration:n}=e;n&&(t=window.setTimeout(o,n))}function i(e){e.currentTarget===e.target&&t!==null&&(window.clearTimeout(t),t=null)}function a(e){e.currentTarget===e.target&&r()}function o(){let{onHide:r}=e;n.value=!1,t&&=(window.clearTimeout(t),null),r&&r()}function s(){let{onClose:t}=e;t&&t(),o()}function c(){let{onAfterLeave:t,onInternalAfterLeave:n,onAfterHide:r,internalKey:i}=e;t&&t(),n&&n(i),r&&r()}function l(){o()}return{show:n,hide:o,handleClose:s,handleAfterLeave:c,handleMouseleave:a,handleMouseenter:i,deactivate:l}},render(){return b(Zl,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?b(Bf,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,spinProps:this.spinProps,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}}),Uf=R({name:`MessageProvider`,props:Object.assign(Object.assign({},U.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:`top`},closable:Boolean,containerClass:String,containerStyle:[String,Object]}),setup(e){let{mergedClsPrefixRef:t}=Ze(e),n=P([]),r=P({}),i={create(e,t){return a(e,Object.assign({type:`default`},t))},info(e,t){return a(e,Object.assign(Object.assign({},t),{type:`info`}))},success(e,t){return a(e,Object.assign(Object.assign({},t),{type:`success`}))},warning(e,t){return a(e,Object.assign(Object.assign({},t),{type:`warning`}))},error(e,t){return a(e,Object.assign(Object.assign({},t),{type:`error`}))},loading(e,t){return a(e,Object.assign(Object.assign({},t),{type:`loading`}))},destroyAll:s};d(Nf,{props:e,mergedClsPrefixRef:t}),d(Mf,i);function a(t,i){let a=qr(),o=ae(Object.assign(Object.assign({},i),{content:t,key:a,destroy:()=>{var e;(e=r.value[a])==null||e.hide()}})),{max:s}=e;return s&&n.value.length>=s&&n.value.shift(),n.value.push(o),o}function o(e){n.value.splice(n.value.findIndex(t=>t.key===e),1),delete r.value[e]}function s(){Object.values(r.value).forEach(e=>{e.hide()})}return Object.assign({mergedClsPrefix:t,messageRefs:r,messageList:n,handleAfterLeave:o},i)},render(){var e;return b(j,null,(e=this.$slots).default?.call(e),this.messageList.length?b(be,{to:this.to??`body`},b(`div`,{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`,this.containerClass],key:`message-container`,style:this.containerStyle},this.messageList.map(e=>b(Hf,Object.assign({ref:t=>{t&&(this.messageRefs[e.key]=t)},internalKey:e.key,onInternalAfterLeave:this.handleAfterLeave},$o(e,[`destroy`],void 0),{duration:e.duration===void 0?this.duration:e.duration,keepAliveOnHover:e.keepAliveOnHover===void 0?this.keepAliveOnHover:e.keepAliveOnHover,closable:e.closable===void 0?this.closable:e.closable}))))):null)}});function Wf(e){let{baseColor:t,textColor2:n,bodyColor:r,cardColor:i,dividerColor:a,actionColor:o,scrollbarColor:s,scrollbarColorHover:c,invertedColor:l}=e;return{textColor:n,textColorInverted:`#FFF`,color:r,colorEmbedded:o,headerColor:i,headerColorInverted:l,footerColor:o,footerColorInverted:l,headerBorderColor:a,headerBorderColorInverted:l,footerBorderColor:a,footerBorderColorInverted:l,siderBorderColor:a,siderBorderColorInverted:l,siderColor:i,siderColorInverted:l,siderToggleButtonBorder:`1px solid ${a}`,siderToggleButtonColor:t,siderToggleButtonIconColor:n,siderToggleButtonIconColorInverted:n,siderToggleBarColor:nt(r,s),siderToggleBarColorHover:nt(r,c),__invertScrollbar:`true`}}var Gf=xt({name:`Layout`,common:Ct,peers:{Scrollbar:au},self:Wf});function Kf(e,t,n,r){return{itemColorHoverInverted:`#0000`,itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:n,itemTextColorChildActiveInverted:n,itemTextColorChildActiveHoverInverted:n,itemTextColorActiveInverted:n,itemTextColorActiveHoverInverted:n,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:n,itemTextColorChildActiveHorizontalInverted:n,itemTextColorChildActiveHoverHorizontalInverted:n,itemTextColorActiveHorizontalInverted:n,itemTextColorActiveHoverHorizontalInverted:n,itemIconColorInverted:e,itemIconColorHoverInverted:n,itemIconColorActiveInverted:n,itemIconColorActiveHoverInverted:n,itemIconColorChildActiveInverted:n,itemIconColorChildActiveHoverInverted:n,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:n,itemIconColorActiveHorizontalInverted:n,itemIconColorActiveHoverHorizontalInverted:n,itemIconColorChildActiveHorizontalInverted:n,itemIconColorChildActiveHoverHorizontalInverted:n,arrowColorInverted:e,arrowColorHoverInverted:n,arrowColorActiveInverted:n,arrowColorActiveHoverInverted:n,arrowColorChildActiveInverted:n,arrowColorChildActiveHoverInverted:n,groupTextColorInverted:r}}function qf(e){let{borderRadius:t,textColor3:n,primaryColor:r,textColor2:i,textColor1:a,fontSize:o,dividerColor:s,hoverColor:c,primaryColorHover:l}=e;return Object.assign({borderRadius:t,color:`#0000`,groupTextColor:n,itemColorHover:c,itemColorActive:ze(r,{alpha:.1}),itemColorActiveHover:ze(r,{alpha:.1}),itemColorActiveCollapsed:ze(r,{alpha:.1}),itemTextColor:i,itemTextColorHover:i,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:i,itemTextColorHoverHorizontal:l,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:a,itemIconColorHover:a,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:a,itemIconColorHorizontal:a,itemIconColorHoverHorizontal:l,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:`42px`,arrowColor:i,arrowColorHover:i,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:`#0000`,borderColorHorizontal:`#0000`,fontSize:o,dividerColor:s},Kf(`#BBB`,r,`#FFF`,`#AAA`))}var Jf=xt({name:`Menu`,common:Ct,peers:{Tooltip:zd,Dropdown:Id},self:qf}),Yf=G(`n-layout-sider`),Xf={type:String,default:`static`},Zf=V(`layout`,`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[V(`layout-scroll-container`,`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),W(`absolute-positioned`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Qf={embedded:Boolean,position:Xf,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:``},hasSider:Boolean,siderPlacement:{type:String,default:`left`}},$f=G(`n-layout`);function ep(e){return R({name:e?`LayoutContent`:`Layout`,props:Object.assign(Object.assign({},U.props),Qf),setup(e){let t=P(null),n=P(null),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=Ze(e),a=U(`Layout`,`-layout`,Zf,Gf,e,r);function o(r,i){if(e.nativeScrollbar){let{value:e}=t;e&&(i===void 0?e.scrollTo(r):e.scrollTo(r,i))}else{let{value:e}=n;e&&e.scrollTo(r,i)}}d($f,e);let s=0,c=0,l=t=>{var n;let r=t.target;s=r.scrollLeft,c=r.scrollTop,(n=e.onScroll)==null||n.call(e,t)};Ki(()=>{if(e.nativeScrollbar){let e=t.value;e&&(e.scrollTop=c,e.scrollLeft=s)}});let u={display:`flex`,flexWrap:`nowrap`,width:`100%`,flexDirection:`row`},f={scrollTo:o},p=I(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=a.value;return{"--n-bezier":t,"--n-color":e.embedded?n.colorEmbedded:n.color,"--n-text-color":n.textColor}}),m=i?Ye(`layout`,I(()=>e.embedded?`e`:``),p,e):void 0;return Object.assign({mergedClsPrefix:r,scrollableElRef:t,scrollbarInstRef:n,hasSiderStyle:u,mergedTheme:a,handleNativeElScroll:l,cssVars:i?void 0:p,themeClass:m?.themeClass,onRender:m?.onRender},f)},render(){var t;let{mergedClsPrefix:n,hasSider:r}=this;(t=this.onRender)==null||t.call(this);let i=r?this.hasSiderStyle:void 0;return b(`div`,{class:[this.themeClass,e&&`${n}-layout-content`,`${n}-layout`,`${n}-layout--${this.position}-positioned`],style:this.cssVars},this.nativeScrollbar?b(`div`,{ref:`scrollableElRef`,class:[`${n}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):b(su,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:`scrollbarInstRef`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,i]}),this.$slots))}})}var tp=ep(!1),np=ep(!0),rp=V(`layout-sider`,`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[W(`bordered`,[z(`border`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),z(`left-placement`,[W(`bordered`,[z(`border`,`
 right: 0;
 `)])]),W(`right-placement`,`
 justify-content: flex-start;
 `,[W(`bordered`,[z(`border`,`
 left: 0;
 `)]),W(`collapsed`,[V(`layout-toggle-button`,[V(`base-icon`,`
 transform: rotate(180deg);
 `)]),V(`layout-toggle-bar`,[B(`&:hover`,[z(`top`,{transform:`rotate(-12deg) scale(1.15) translateY(-2px)`}),z(`bottom`,{transform:`rotate(12deg) scale(1.15) translateY(2px)`})])])]),V(`layout-toggle-button`,`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[V(`base-icon`,`
 transform: rotate(0);
 `)]),V(`layout-toggle-bar`,`
 left: -28px;
 transform: rotate(180deg);
 `,[B(`&:hover`,[z(`top`,{transform:`rotate(12deg) scale(1.15) translateY(-2px)`}),z(`bottom`,{transform:`rotate(-12deg) scale(1.15) translateY(2px)`})])])]),W(`collapsed`,[V(`layout-toggle-bar`,[B(`&:hover`,[z(`top`,{transform:`rotate(-12deg) scale(1.15) translateY(-2px)`}),z(`bottom`,{transform:`rotate(12deg) scale(1.15) translateY(2px)`})])]),V(`layout-toggle-button`,[V(`base-icon`,`
 transform: rotate(0);
 `)])]),V(`layout-toggle-button`,`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[V(`base-icon`,`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),V(`layout-toggle-bar`,`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[z(`top, bottom`,`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),z(`bottom`,`
 position: absolute;
 top: 34px;
 `),B(`&:hover`,[z(`top`,{transform:`rotate(12deg) scale(1.15) translateY(-2px)`}),z(`bottom`,{transform:`rotate(-12deg) scale(1.15) translateY(2px)`})]),z(`top, bottom`,{backgroundColor:`var(--n-toggle-bar-color)`}),B(`&:hover`,[z(`top, bottom`,{backgroundColor:`var(--n-toggle-bar-color-hover)`})])]),z(`border`,`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),V(`layout-sider-scroll-container`,`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),W(`show-content`,[V(`layout-sider-scroll-container`,{opacity:1})]),W(`absolute-positioned`,`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),ip=R({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){let{clsPrefix:e}=this;return b(`div`,{onClick:this.onClick,class:`${e}-layout-toggle-bar`},b(`div`,{class:`${e}-layout-toggle-bar__top`}),b(`div`,{class:`${e}-layout-toggle-bar__bottom`}))}}),ap=R({name:`LayoutToggleButton`,props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){let{clsPrefix:e}=this;return b(`div`,{class:`${e}-layout-toggle-button`,onClick:this.onClick},b(vt,{clsPrefix:e},{default:()=>b(Vl,null)}))}}),op={position:Xf,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:``},collapseMode:{type:String,default:`transform`},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},sp=R({name:`LayoutSider`,props:Object.assign(Object.assign({},U.props),op),setup(e){let t=L($f),n=P(null),r=P(null),i=P(e.defaultCollapsed),a=vi(F(e,`collapsed`),i),o=I(()=>Vo(a.value?e.collapsedWidth:e.width)),s=I(()=>e.collapseMode===`transform`?{minWidth:Vo(e.width)}:{}),c=I(()=>t?t.siderPlacement:`left`);function l(t,i){if(e.nativeScrollbar){let{value:e}=n;e&&(i===void 0?e.scrollTo(t):e.scrollTo(t,i))}else{let{value:e}=r;e&&e.scrollTo(t,i)}}function u(){let{"onUpdate:collapsed":t,onUpdateCollapsed:n,onExpand:r,onCollapse:o}=e,{value:s}=a;n&&J(n,!s),t&&J(t,!s),i.value=!s,s?r&&J(r):o&&J(o)}let f=0,p=0,m=t=>{var n;let r=t.target;f=r.scrollLeft,p=r.scrollTop,(n=e.onScroll)==null||n.call(e,t)};Ki(()=>{if(e.nativeScrollbar){let e=n.value;e&&(e.scrollTop=p,e.scrollLeft=f)}}),d(Yf,{collapsedRef:a,collapseModeRef:F(e,`collapseMode`)});let{mergedClsPrefixRef:h,inlineThemeDisabled:g}=Ze(e),_=U(`Layout`,`-layout-sider`,rp,Gf,e,h);function v(t){var n,r;t.propertyName===`max-width`&&(a.value?(n=e.onAfterLeave)==null||n.call(e):(r=e.onAfterEnter)==null||r.call(e))}let y={scrollTo:l},b=I(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=_.value,{siderToggleButtonColor:r,siderToggleButtonBorder:i,siderToggleBarColor:a,siderToggleBarColorHover:o}=n,s={"--n-bezier":t,"--n-toggle-button-color":r,"--n-toggle-button-border":i,"--n-toggle-bar-color":a,"--n-toggle-bar-color-hover":o};return e.inverted?(s[`--n-color`]=n.siderColorInverted,s[`--n-text-color`]=n.textColorInverted,s[`--n-border-color`]=n.siderBorderColorInverted,s[`--n-toggle-button-icon-color`]=n.siderToggleButtonIconColorInverted,s.__invertScrollbar=n.__invertScrollbar):(s[`--n-color`]=n.siderColor,s[`--n-text-color`]=n.textColor,s[`--n-border-color`]=n.siderBorderColor,s[`--n-toggle-button-icon-color`]=n.siderToggleButtonIconColor),s}),x=g?Ye(`layout-sider`,I(()=>e.inverted?`a`:`b`),b,e):void 0;return Object.assign({scrollableElRef:n,scrollbarInstRef:r,mergedClsPrefix:h,mergedTheme:_,styleMaxWidth:o,mergedCollapsed:a,scrollContainerStyle:s,siderPlacement:c,handleNativeElScroll:m,handleTransitionend:v,handleTriggerClick:u,inlineThemeDisabled:g,cssVars:b,themeClass:x?.themeClass,onRender:x?.onRender},y)},render(){var e;let{mergedClsPrefix:t,mergedCollapsed:n,showTrigger:r}=this;return(e=this.onRender)==null||e.call(this),b(`aside`,{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,n&&`${t}-layout-sider--collapsed`,(!n||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:Vo(this.width)}]},this.nativeScrollbar?b(`div`,{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:`auto`},this.contentStyle],ref:`scrollableElRef`},this.$slots):b(su,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:`scrollbarInstRef`,style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar===`true`?{colorHover:`rgba(255, 255, 255, .4)`,color:`rgba(255, 255, 255, .3)`}:void 0}),this.$slots),r?b(r===`bar`?ip:ap,{clsPrefix:t,class:n?this.collapsedTriggerClass:this.triggerClass,style:n?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?b(`div`,{class:`${t}-layout-sider__border`}):null)}}),cp=G(`n-menu`),lp=G(`n-submenu`),up=G(`n-menu-item-group`),dp=[B(`&::before`,`background-color: var(--n-item-color-hover);`),z(`arrow`,`
 color: var(--n-arrow-color-hover);
 `),z(`icon`,`
 color: var(--n-item-icon-color-hover);
 `),V(`menu-item-content-header`,`
 color: var(--n-item-text-color-hover);
 `,[B(`a`,`
 color: var(--n-item-text-color-hover);
 `),z(`extra`,`
 color: var(--n-item-text-color-hover);
 `)])],fp=[z(`icon`,`
 color: var(--n-item-icon-color-hover-horizontal);
 `),V(`menu-item-content-header`,`
 color: var(--n-item-text-color-hover-horizontal);
 `,[B(`a`,`
 color: var(--n-item-text-color-hover-horizontal);
 `),z(`extra`,`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],pp=B([V(`menu`,`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[W(`horizontal`,`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[V(`submenu`,`margin: 0;`),V(`menu-item`,`margin: 0;`),V(`menu-item-content`,`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[B(`&::before`,`display: none;`),W(`selected`,`border-bottom: 2px solid var(--n-border-color-horizontal)`)]),V(`menu-item-content`,[W(`selected`,[z(`icon`,`color: var(--n-item-icon-color-active-horizontal);`),V(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-horizontal);
 `,[B(`a`,`color: var(--n-item-text-color-active-horizontal);`),z(`extra`,`color: var(--n-item-text-color-active-horizontal);`)])]),W(`child-active`,`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[V(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[B(`a`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `),z(`extra`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),z(`icon`,`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),Ke(`disabled`,[Ke(`selected, child-active`,[B(`&:focus-within`,fp)]),W(`selected`,[mp(null,[z(`icon`,`color: var(--n-item-icon-color-active-hover-horizontal);`),V(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[B(`a`,`color: var(--n-item-text-color-active-hover-horizontal);`),z(`extra`,`color: var(--n-item-text-color-active-hover-horizontal);`)])])]),W(`child-active`,[mp(null,[z(`icon`,`color: var(--n-item-icon-color-child-active-hover-horizontal);`),V(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[B(`a`,`color: var(--n-item-text-color-child-active-hover-horizontal);`),z(`extra`,`color: var(--n-item-text-color-child-active-hover-horizontal);`)])])]),mp(`border-bottom: 2px solid var(--n-border-color-horizontal);`,fp)]),V(`menu-item-content-header`,[B(`a`,`color: var(--n-item-text-color-horizontal);`)])])]),Ke(`responsive`,[V(`menu-item-content-header`,`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),W(`collapsed`,[V(`menu-item-content`,[W(`selected`,[B(`&::before`,`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),V(`menu-item-content-header`,`opacity: 0;`),z(`arrow`,`opacity: 0;`),z(`icon`,`color: var(--n-item-icon-color-collapsed);`)])]),V(`menu-item`,`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),V(`menu-item-content`,`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[B(`> *`,`z-index: 1;`),B(`&::before`,`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),W(`disabled`,`
 opacity: .45;
 cursor: not-allowed;
 `),W(`collapsed`,[z(`arrow`,`transform: rotate(0);`)]),W(`selected`,[B(`&::before`,`background-color: var(--n-item-color-active);`),z(`arrow`,`color: var(--n-arrow-color-active);`),z(`icon`,`color: var(--n-item-icon-color-active);`),V(`menu-item-content-header`,`
 color: var(--n-item-text-color-active);
 `,[B(`a`,`color: var(--n-item-text-color-active);`),z(`extra`,`color: var(--n-item-text-color-active);`)])]),W(`child-active`,[V(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active);
 `,[B(`a`,`
 color: var(--n-item-text-color-child-active);
 `),z(`extra`,`
 color: var(--n-item-text-color-child-active);
 `)]),z(`arrow`,`
 color: var(--n-arrow-color-child-active);
 `),z(`icon`,`
 color: var(--n-item-icon-color-child-active);
 `)]),Ke(`disabled`,[Ke(`selected, child-active`,[B(`&:focus-within`,dp)]),W(`selected`,[mp(null,[z(`arrow`,`color: var(--n-arrow-color-active-hover);`),z(`icon`,`color: var(--n-item-icon-color-active-hover);`),V(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-hover);
 `,[B(`a`,`color: var(--n-item-text-color-active-hover);`),z(`extra`,`color: var(--n-item-text-color-active-hover);`)])])]),W(`child-active`,[mp(null,[z(`arrow`,`color: var(--n-arrow-color-child-active-hover);`),z(`icon`,`color: var(--n-item-icon-color-child-active-hover);`),V(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-hover);
 `,[B(`a`,`color: var(--n-item-text-color-child-active-hover);`),z(`extra`,`color: var(--n-item-text-color-child-active-hover);`)])])]),W(`selected`,[mp(null,[B(`&::before`,`background-color: var(--n-item-color-active-hover);`)])]),mp(null,dp)]),z(`icon`,`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),z(`arrow`,`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),V(`menu-item-content-header`,`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[B(`a`,`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[B(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),z(`extra`,`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),V(`submenu`,`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[V(`menu-item-content`,`
 height: var(--n-item-height);
 `),V(`submenu-children`,`
 overflow: hidden;
 padding: 0;
 `,[md({duration:`.2s`})])]),V(`menu-item-group`,[V(`menu-item-group-title`,`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),V(`menu-tooltip`,[B(`a`,`
 color: inherit;
 text-decoration: none;
 `)]),V(`menu-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function mp(e,t){return[W(`hover`,e,t),B(`&:hover`,e,t)]}var hp=R({name:`MenuOptionContent`,props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){let{props:t}=L(cp);return{menuProps:t,style:I(()=>{let{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:I(()=>{let{maxIconSize:t,activeIconSize:n,iconMarginRight:r}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){let{clsPrefix:e,tmNode:t,menuProps:{renderIcon:n,renderLabel:r,renderExtra:i,expandIcon:a}}=this,o=n?n(t.rawNode):Y(this.icon);return b(`div`,{onClick:e=>{var t;(t=this.onClick)==null||t.call(this,e)},role:`none`,class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},o&&b(`div`,{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:`none`},[o]),b(`div`,{class:`${e}-menu-item-content-header`,role:`none`},this.isEllipsisPlaceholder?this.title:r?r(t.rawNode):Y(this.title),this.extra||i?b(`span`,{class:`${e}-menu-item-content-header__extra`},` `,i?i(t.rawNode):Y(this.extra)):null),this.showArrow?b(vt,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(t.rawNode):b(Bl,null)}):null)}}),gp=8;function _p(e){let t=L(cp),{props:n,mergedCollapsedRef:r}=t,i=L(lp,null),a=L(up,null),o=I(()=>n.mode===`horizontal`),s=I(()=>o.value?n.dropdownPlacement:`tmNodes`in e?`right-start`:`right`),c=I(()=>Math.max(n.collapsedIconSize??n.iconSize,n.iconSize));return{dropdownPlacement:s,activeIconSize:I(()=>!o.value&&e.root&&r.value?n.collapsedIconSize??n.iconSize:n.iconSize),maxIconSize:c,paddingLeft:I(()=>{if(o.value)return;let{collapsedWidth:t,indent:s,rootIndent:l}=n,{root:u,isGroup:d}=e,f=l===void 0?s:l;return u?r.value?t/2-c.value/2:f:a&&typeof a.paddingLeftRef.value==`number`?s/2+a.paddingLeftRef.value:i&&typeof i.paddingLeftRef.value==`number`?(d?s/2:s)+i.paddingLeftRef.value:0}),iconMarginRight:I(()=>{let{collapsedWidth:t,indent:i,rootIndent:a}=n,{value:s}=c,{root:l}=e;return o.value||!l||!r.value?gp:(a===void 0?i:a)+s+gp-(t+s)/2}),NMenu:t,NSubmenu:i,NMenuOptionGroup:a}}var vp={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},yp=R({name:`MenuDivider`,setup(){let{mergedClsPrefixRef:e,isHorizontalRef:t}=L(cp);return()=>t.value?null:b(`div`,{class:`${e.value}-menu-divider`})}}),bp=Object.assign(Object.assign({},vp),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),xp=Qo(bp),Sp=R({name:`MenuOption`,props:bp,setup(e){let t=_p(e),{NSubmenu:n,NMenu:r,NMenuOptionGroup:i}=t,{props:a,mergedClsPrefixRef:o,mergedCollapsedRef:s}=r,c=n?n.mergedDisabledRef:i?i.mergedDisabledRef:{value:!1},l=I(()=>c.value||e.disabled);function u(t){let{onClick:n}=e;n&&n(t)}function d(t){l.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),u(t))}return{mergedClsPrefix:o,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:a,dropdownEnabled:ni(()=>e.root&&s.value&&a.mode!==`horizontal`&&!l.value),selected:ni(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:l,handleClick:d}},render(){let{mergedClsPrefix:e,mergedTheme:t,tmNode:n,menuProps:{renderLabel:r,nodeProps:i}}=this,a=i?.(n.rawNode);return b(`div`,Object.assign({},a,{role:`menuitem`,class:[`${e}-menu-item`,a?.class]}),b(Bd,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:`hover`,placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:[`menu-tooltip`]},{default:()=>r?r(n.rawNode):Y(this.title),trigger:()=>b(hp,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Cp=Object.assign(Object.assign({},vp),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),wp=Qo(Cp),Tp=R({name:`MenuOptionGroup`,props:Cp,setup(e){let t=_p(e),{NSubmenu:n}=t,r=I(()=>n?.mergedDisabledRef.value?!0:e.tmNode.disabled);d(up,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:r});let{mergedClsPrefixRef:i,props:a}=L(cp);return function(){let{value:n}=i,r=t.paddingLeft.value,{nodeProps:o}=a,s=o?.(e.tmNode.rawNode);return b(`div`,{class:`${n}-menu-item-group`,role:`group`},b(`div`,Object.assign({},s,{class:[`${n}-menu-item-group-title`,s?.class],style:[s?.style||``,r===void 0?``:`padding-left: ${r}px;`]}),Y(e.title),e.extra?b(j,null,` `,Y(e.extra)):null),b(`div`,null,e.tmNodes.map(e=>Op(e,a))))}}});function Ep(e){return e.type===`divider`||e.type===`render`}function Dp(e){return e.type===`divider`}function Op(e,t){let{rawNode:n}=e,{show:r}=n;if(r===!1)return null;if(Ep(n))return Dp(n)?b(yp,Object.assign({key:e.key},n.props)):null;let{labelField:i}=t,{key:a,level:o,isGroup:s}=e,c=Object.assign(Object.assign({},n),{title:n.title||n[i],extra:n.titleExtra||n.extra,key:a,internalKey:a,level:o,root:o===0,isGroup:s});return e.children?e.isGroup?b(Tp,Zo(c,wp,{tmNode:e,tmNodes:e.children,key:a})):b(jp,Zo(c,Ap,{key:a,rawNodes:n[t.childrenField],tmNodes:e.children,tmNode:e})):b(Sp,Zo(c,xp,{key:a,tmNode:e}))}var kp=Object.assign(Object.assign({},vp),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),Ap=Qo(kp),jp=R({name:`Submenu`,props:kp,setup(e){let t=_p(e),{NMenu:n,NSubmenu:r}=t,{props:i,mergedCollapsedRef:a,mergedThemeRef:o}=n,s=I(()=>{let{disabled:t}=e;return r?.mergedDisabledRef.value||i.disabled?!0:t}),c=P(!1);d(lp,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:s}),d(up,null);function l(){let{onClick:t}=e;t&&t()}function u(){s.value||(a.value||n.toggleExpand(e.internalKey),l())}function f(e){c.value=e}return{menuProps:i,mergedTheme:o,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:c,paddingLeft:t.paddingLeft,mergedDisabled:s,mergedValue:n.mergedValueRef,childActive:ni(()=>e.virtualChildActive??n.activePathRef.value.includes(e.internalKey)),collapsed:I(()=>i.mode===`horizontal`?!1:a.value?!0:!n.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:I(()=>!s.value&&(i.mode===`horizontal`||a.value)),handlePopoverShowChange:f,handleClick:u}},render(){let{mergedClsPrefix:e,menuProps:{renderIcon:t,renderLabel:n}}=this,r=()=>{let{isHorizontal:e,paddingLeft:t,collapsed:n,mergedDisabled:r,maxIconSize:i,activeIconSize:a,title:o,childActive:s,icon:c,handleClick:l,menuProps:{nodeProps:u},dropdownShow:d,iconMarginRight:f,tmNode:p,mergedClsPrefix:m,isEllipsisPlaceholder:h,extra:g}=this,_=u?.(p.rawNode);return b(`div`,Object.assign({},_,{class:[`${m}-menu-item`,_?.class],role:`menuitem`}),b(hp,{tmNode:p,paddingLeft:t,collapsed:n,disabled:r,iconMarginRight:f,maxIconSize:i,activeIconSize:a,title:o,extra:g,showArrow:!e,childActive:s,clsPrefix:m,icon:c,hover:d,onClick:l,isEllipsisPlaceholder:h}))},i=()=>b(Zl,null,{default:()=>{let{tmNodes:t,collapsed:n}=this;return n?null:b(`div`,{class:`${e}-submenu-children`,role:`menu`},t.map(e=>Op(e,this.menuProps)))}});return this.root?b(cf,Object.assign({size:`large`,trigger:`hover`},this.menuProps?.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:`14px`,optionIconSizeLarge:`18px`},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:n}),{default:()=>b(`div`,{class:`${e}-submenu`,role:`menu`,"aria-expanded":!this.collapsed,id:this.domId},r(),this.isHorizontal?null:i())}):b(`div`,{class:`${e}-submenu`,role:`menu`,"aria-expanded":!this.collapsed,id:this.domId},r(),i())}}),Mp=R({name:`Menu`,inheritAttrs:!1,props:Object.assign(Object.assign({},U.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},disabledField:{type:String,default:`disabled`},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:`vertical`},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:`bottom`},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Ze(e),r=U(`Menu`,`-menu`,pp,Jf,e,t),i=L(Yf,null),a=I(()=>{let{collapsed:t}=e;if(t!==void 0)return t;if(i){let{collapseModeRef:e,collapsedRef:t}=i;if(e.value===`width`)return t.value??!1}return!1}),o=I(()=>{let{keyField:t,childrenField:n,disabledField:r}=e;return Hu(e.items||e.options,{getIgnored(e){return Ep(e)},getChildren(e){return e[n]},getDisabled(e){return e[r]},getKey(e){return e[t]??e.name}})}),s=I(()=>new Set(o.value.treeNodes.map(e=>e.key))),{watchProps:c}=e,u=P(null);c?.includes(`defaultValue`)?l(()=>{u.value=e.defaultValue}):u.value=e.defaultValue;let f=vi(F(e,`value`),u),p=P([]),m=()=>{p.value=e.defaultExpandAll?o.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||o.value.getPath(f.value,{includeSelf:!1}).keyPath};c?.includes(`defaultExpandedKeys`)?l(m):m();let h=bi(e,[`expandedNames`,`expandedKeys`]),g=vi(h,p),_=I(()=>o.value.treeNodes),v=I(()=>o.value.getPath(f.value).keyPath);d(cp,{props:e,mergedCollapsedRef:a,mergedThemeRef:r,mergedValueRef:f,mergedExpandedKeysRef:g,activePathRef:v,mergedClsPrefixRef:t,isHorizontalRef:I(()=>e.mode===`horizontal`),invertedRef:F(e,`inverted`),doSelect:y,toggleExpand:S});function y(t,n){let{"onUpdate:value":r,onUpdateValue:i,onSelect:a}=e;i&&J(i,t,n),r&&J(r,t,n),a&&J(a,t,n),u.value=t}function x(t){let{"onUpdate:expandedKeys":n,onUpdateExpandedKeys:r,onExpandedNamesChange:i,onOpenNamesChange:a}=e;n&&J(n,t),r&&J(r,t),i&&J(i,t),a&&J(a,t),p.value=t}function S(t){let n=Array.from(g.value),r=n.findIndex(e=>e===t);if(~r)n.splice(r,1);else{if(e.accordion&&s.value.has(t)){let e=n.findIndex(e=>s.value.has(e));e>-1&&n.splice(e,1)}n.push(t)}x(n)}let C=t=>{let n=o.value.getPath(t??f.value,{includeSelf:!1}).keyPath;if(!n.length)return;let r=Array.from(g.value),i=new Set([...r,...n]);e.accordion&&s.value.forEach(e=>{i.has(e)&&!n.includes(e)&&i.delete(e)}),x(Array.from(i))},w=I(()=>{let{inverted:t}=e,{common:{cubicBezierEaseInOut:n},self:i}=r.value,{borderRadius:a,borderColorHorizontal:o,fontSize:s,itemHeight:c,dividerColor:l}=i,u={"--n-divider-color":l,"--n-bezier":n,"--n-font-size":s,"--n-border-color-horizontal":o,"--n-border-radius":a,"--n-item-height":c};return t?(u[`--n-group-text-color`]=i.groupTextColorInverted,u[`--n-color`]=i.colorInverted,u[`--n-item-text-color`]=i.itemTextColorInverted,u[`--n-item-text-color-hover`]=i.itemTextColorHoverInverted,u[`--n-item-text-color-active`]=i.itemTextColorActiveInverted,u[`--n-item-text-color-child-active`]=i.itemTextColorChildActiveInverted,u[`--n-item-text-color-child-active-hover`]=i.itemTextColorChildActiveInverted,u[`--n-item-text-color-active-hover`]=i.itemTextColorActiveHoverInverted,u[`--n-item-icon-color`]=i.itemIconColorInverted,u[`--n-item-icon-color-hover`]=i.itemIconColorHoverInverted,u[`--n-item-icon-color-active`]=i.itemIconColorActiveInverted,u[`--n-item-icon-color-active-hover`]=i.itemIconColorActiveHoverInverted,u[`--n-item-icon-color-child-active`]=i.itemIconColorChildActiveInverted,u[`--n-item-icon-color-child-active-hover`]=i.itemIconColorChildActiveHoverInverted,u[`--n-item-icon-color-collapsed`]=i.itemIconColorCollapsedInverted,u[`--n-item-text-color-horizontal`]=i.itemTextColorHorizontalInverted,u[`--n-item-text-color-hover-horizontal`]=i.itemTextColorHoverHorizontalInverted,u[`--n-item-text-color-active-horizontal`]=i.itemTextColorActiveHorizontalInverted,u[`--n-item-text-color-child-active-horizontal`]=i.itemTextColorChildActiveHorizontalInverted,u[`--n-item-text-color-child-active-hover-horizontal`]=i.itemTextColorChildActiveHoverHorizontalInverted,u[`--n-item-text-color-active-hover-horizontal`]=i.itemTextColorActiveHoverHorizontalInverted,u[`--n-item-icon-color-horizontal`]=i.itemIconColorHorizontalInverted,u[`--n-item-icon-color-hover-horizontal`]=i.itemIconColorHoverHorizontalInverted,u[`--n-item-icon-color-active-horizontal`]=i.itemIconColorActiveHorizontalInverted,u[`--n-item-icon-color-active-hover-horizontal`]=i.itemIconColorActiveHoverHorizontalInverted,u[`--n-item-icon-color-child-active-horizontal`]=i.itemIconColorChildActiveHorizontalInverted,u[`--n-item-icon-color-child-active-hover-horizontal`]=i.itemIconColorChildActiveHoverHorizontalInverted,u[`--n-arrow-color`]=i.arrowColorInverted,u[`--n-arrow-color-hover`]=i.arrowColorHoverInverted,u[`--n-arrow-color-active`]=i.arrowColorActiveInverted,u[`--n-arrow-color-active-hover`]=i.arrowColorActiveHoverInverted,u[`--n-arrow-color-child-active`]=i.arrowColorChildActiveInverted,u[`--n-arrow-color-child-active-hover`]=i.arrowColorChildActiveHoverInverted,u[`--n-item-color-hover`]=i.itemColorHoverInverted,u[`--n-item-color-active`]=i.itemColorActiveInverted,u[`--n-item-color-active-hover`]=i.itemColorActiveHoverInverted,u[`--n-item-color-active-collapsed`]=i.itemColorActiveCollapsedInverted):(u[`--n-group-text-color`]=i.groupTextColor,u[`--n-color`]=i.color,u[`--n-item-text-color`]=i.itemTextColor,u[`--n-item-text-color-hover`]=i.itemTextColorHover,u[`--n-item-text-color-active`]=i.itemTextColorActive,u[`--n-item-text-color-child-active`]=i.itemTextColorChildActive,u[`--n-item-text-color-child-active-hover`]=i.itemTextColorChildActiveHover,u[`--n-item-text-color-active-hover`]=i.itemTextColorActiveHover,u[`--n-item-icon-color`]=i.itemIconColor,u[`--n-item-icon-color-hover`]=i.itemIconColorHover,u[`--n-item-icon-color-active`]=i.itemIconColorActive,u[`--n-item-icon-color-active-hover`]=i.itemIconColorActiveHover,u[`--n-item-icon-color-child-active`]=i.itemIconColorChildActive,u[`--n-item-icon-color-child-active-hover`]=i.itemIconColorChildActiveHover,u[`--n-item-icon-color-collapsed`]=i.itemIconColorCollapsed,u[`--n-item-text-color-horizontal`]=i.itemTextColorHorizontal,u[`--n-item-text-color-hover-horizontal`]=i.itemTextColorHoverHorizontal,u[`--n-item-text-color-active-horizontal`]=i.itemTextColorActiveHorizontal,u[`--n-item-text-color-child-active-horizontal`]=i.itemTextColorChildActiveHorizontal,u[`--n-item-text-color-child-active-hover-horizontal`]=i.itemTextColorChildActiveHoverHorizontal,u[`--n-item-text-color-active-hover-horizontal`]=i.itemTextColorActiveHoverHorizontal,u[`--n-item-icon-color-horizontal`]=i.itemIconColorHorizontal,u[`--n-item-icon-color-hover-horizontal`]=i.itemIconColorHoverHorizontal,u[`--n-item-icon-color-active-horizontal`]=i.itemIconColorActiveHorizontal,u[`--n-item-icon-color-active-hover-horizontal`]=i.itemIconColorActiveHoverHorizontal,u[`--n-item-icon-color-child-active-horizontal`]=i.itemIconColorChildActiveHorizontal,u[`--n-item-icon-color-child-active-hover-horizontal`]=i.itemIconColorChildActiveHoverHorizontal,u[`--n-arrow-color`]=i.arrowColor,u[`--n-arrow-color-hover`]=i.arrowColorHover,u[`--n-arrow-color-active`]=i.arrowColorActive,u[`--n-arrow-color-active-hover`]=i.arrowColorActiveHover,u[`--n-arrow-color-child-active`]=i.arrowColorChildActive,u[`--n-arrow-color-child-active-hover`]=i.arrowColorChildActiveHover,u[`--n-item-color-hover`]=i.itemColorHover,u[`--n-item-color-active`]=i.itemColorActive,u[`--n-item-color-active-hover`]=i.itemColorActiveHover,u[`--n-item-color-active-collapsed`]=i.itemColorActiveCollapsed),u}),T=n?Ye(`menu`,I(()=>e.inverted?`a`:`b`),w,e):void 0,E=qr(),D=P(null),O=P(null),k=!0,A=()=>{var e;k?k=!1:(e=D.value)==null||e.sync({showAllItemsBeforeCalculate:!0})};function j(){return document.getElementById(E)}let M=P(-1);function ee(t){M.value=e.options.length-t}function te(e){e||(M.value=-1)}let ne=I(()=>{let t=M.value;return{children:t===-1?[]:e.options.slice(t)}}),re=I(()=>{let{childrenField:t,disabledField:n,keyField:r}=e;return Hu([ne.value],{getIgnored(e){return Ep(e)},getChildren(e){return e[t]},getDisabled(e){return e[n]},getKey(e){return e[r]??e.name}})}),N=I(()=>Hu([{}]).treeNodes[0]);function ie(){if(M.value===-1)return b(jp,{root:!0,level:0,key:`__ellpisisGroupPlaceholder__`,internalKey:`__ellpisisGroupPlaceholder__`,title:`···`,tmNode:N.value,domId:E,isEllipsisPlaceholder:!0});let e=re.value.treeNodes[0],t=v.value;return b(jp,{level:0,root:!0,key:`__ellpisisGroup__`,internalKey:`__ellpisisGroup__`,title:`···`,virtualChildActive:!!e.children?.some(e=>t.includes(e.key)),tmNode:e,domId:E,rawNodes:e.rawNode.children||[],tmNodes:e.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:t,controlledExpandedKeys:h,uncontrolledExpanededKeys:p,mergedExpandedKeys:g,uncontrolledValue:u,mergedValue:f,activePath:v,tmNodes:_,mergedTheme:r,mergedCollapsed:a,cssVars:n?void 0:w,themeClass:T?.themeClass,overflowRef:D,counterRef:O,updateCounter:()=>{},onResize:A,onUpdateOverflow:te,onUpdateCount:ee,renderCounter:ie,getCounter:j,onRender:T?.onRender,showOption:C,deriveResponsiveState:A}},render(){let{mergedClsPrefix:e,mode:t,themeClass:n,onRender:r}=this;r?.();let i=()=>this.tmNodes.map(e=>Op(e,this.$props)),a=t===`horizontal`&&this.responsive,o=()=>b(`div`,s(this.$attrs,{role:t===`horizontal`?`menubar`:`menu`,class:[`${e}-menu`,n,`${e}-menu--${t}`,a&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),a?b(Ao,{ref:`overflowRef`,onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:i,counter:this.renderCounter}):i());return a?b(Do,{onResize:this.onResize},{default:o}):o()}}),Np={};function Pp(e,t){let n=Ie(`router-view`),r=Uf,i=jf,a=Nd;return c(),oe(a,null,{default:p(()=>[Ae(i,null,{default:p(()=>[Ae(r,null,{default:p(()=>[Ae(n)]),_:1})]),_:1})]),_:1})}var Fp=De(Np,[[`render`,Pp]]),Ip=typeof document<`u`;function Lp(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Rp(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&Lp(e.default)}var Z=Object.assign;function zp(e,t){let n={};for(let r in t){let i=t[r];n[r]=Vp(i)?i.map(e):e(i)}return n}var Bp=()=>{},Vp=Array.isArray;function Hp(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var Up=/#/g,Wp=/&/g,Gp=/\//g,Kp=/=/g,qp=/\?/g,Jp=/\+/g,Yp=/%5B/g,Xp=/%5D/g,Zp=/%5E/g,Qp=/%60/g,$p=/%7B/g,em=/%7C/g,tm=/%7D/g,nm=/%20/g;function rm(e){return e==null?``:encodeURI(``+e).replace(em,`|`).replace(Yp,`[`).replace(Xp,`]`)}function im(e){return rm(e).replace($p,`{`).replace(tm,`}`).replace(Zp,`^`)}function am(e){return rm(e).replace(Jp,`%2B`).replace(nm,`+`).replace(Up,`%23`).replace(Wp,`%26`).replace(Qp,"`").replace($p,`{`).replace(tm,`}`).replace(Zp,`^`)}function om(e){return am(e).replace(Kp,`%3D`)}function sm(e){return rm(e).replace(Up,`%23`).replace(qp,`%3F`)}function cm(e){return sm(e).replace(Gp,`%2F`)}function lm(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var um=/\/$/,dm=e=>e.replace(um,``);function fm(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=bm(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:lm(o)}}function pm(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function mm(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function hm(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&gm(t.matched[r],n.matched[i])&&_m(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function gm(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function _m(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!vm(e[n],t[n]))return!1;return!0}function vm(e,t){return Vp(e)?ym(e,t):Vp(t)?ym(t,e):e?.valueOf()===t?.valueOf()}function ym(e,t){return Vp(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function bm(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var xm={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},Sm=function(e){return e.pop=`pop`,e.push=`push`,e}({}),Cm=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function wm(e){if(!e)if(Ip){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^\/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),dm(e)}var Tm=/^[^#]+#/;function Em(e,t){return e.replace(Tm,`#`)+t}function Dm(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Om=()=>({left:window.scrollX,top:window.scrollY});function km(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Dm(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Am(e,t){return(history.state?history.state.position-t:-1)+e}var jm=new Map;function Mm(e,t){jm.set(e,t)}function Nm(e){let t=jm.get(e);return jm.delete(e),t}function Pm(e){return typeof e==`string`||e&&typeof e==`object`}function Fm(e){return typeof e==`string`||typeof e==`symbol`}var Q=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),Im=Symbol(``);Q.MATCHER_NOT_FOUND,Q.NAVIGATION_GUARD_REDIRECT,Q.NAVIGATION_ABORTED,Q.NAVIGATION_CANCELLED,Q.NAVIGATION_DUPLICATED;function Lm(e,t){return Z(Error(),{type:e,[Im]:!0},t)}function Rm(e,t){return e instanceof Error&&Im in e&&(t==null||!!(e.type&t))}function zm(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(Jp,` `),i=r.indexOf(`=`),a=lm(i<0?r:r.slice(0,i)),o=i<0?null:lm(r.slice(i+1));if(a in t){let e=t[a];Vp(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Bm(e){let t=``;for(let n in e){let r=e[n];if(n=om(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(Vp(r)?r.map(e=>e&&am(e)):[r&&am(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Vm(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Vp(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}var Hm=Symbol(``),Um=Symbol(``),Wm=Symbol(``),Gm=Symbol(``),Km=Symbol(``);function qm(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Jm(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(Lm(Q.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):Pm(e)?c(Lm(Q.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function Ym(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(Lp(s)){let c=(s.__vccOpts||s)[t];c&&a.push(Jm(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Rp(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&Jm(c,n,r,o,e,i)()}))}}return a}function Xm(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>gm(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>gm(e,s))||i.push(s))}return[n,r,i]}var Zm=()=>location.protocol+`//`+location.host;function Qm(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),mm(n,``)}return mm(n,e)+r+i}function $m(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=Qm(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:Sm.pop,direction:u?u>0?Cm.forward:Cm.back:Cm.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(Z({},e.state,{scroll:Om()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function eh(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Om():null}}function th(e){let{history:t,location:n}=window,r={value:Qm(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:Zm()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,Z({},t.state,eh(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=Z({},i.value,t.state,{forward:e,scroll:Om()});a(o.current,o,!0),a(e,Z({},eh(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function nh(e){e=wm(e);let t=th(e),n=$m(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=Z({location:``,base:e,go:r,createHref:Em.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}var rh=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),$=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}($||{}),ih={type:rh.Static,value:``},ah=/[a-zA-Z0-9_]/;function oh(e){if(!e)return[[]];if(e===`/`)return[[ih]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=$.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===$.Static?a.push({type:rh.Static,value:l}):n===$.Param||n===$.ParamRegExp||n===$.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:rh.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;){if(c=e[s++],c===`\\`&&n!==$.ParamRegExp){r=n,n=$.EscapeNext;continue}switch(n){case $.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=$.Param):f();break;case $.EscapeNext:f(),n=r;break;case $.Param:c===`(`?n=$.ParamRegExp:ah.test(c)?f():(d(),n=$.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case $.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=$.ParamRegExpEnd:u+=c;break;case $.ParamRegExpEnd:d(),n=$.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}}return n===$.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var sh=`[^/]+?`,ch={sensitive:!1,strict:!1,start:!0,end:!0},lh=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}(lh||{}),uh=/[.+*?^${}()[\]/\\]/g;function dh(e,t){let n=Z({},ch,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[lh.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=lh.Segment+(n.sensitive?lh.BonusCaseSensitive:0);if(o.type===rh.Static)r||(i+=`/`),i+=o.value.replace(uh,`\\$&`),s+=lh.Static;else if(o.type===rh.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||sh;if(u!==sh){s+=lh.BonusCustomRegExp;try{`${u}`}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=lh.Dynamic,c&&(s+=lh.BonusOptional),n&&(s+=lh.BonusRepeatable),u===`.*`&&(s+=lh.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=lh.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===rh.Static)n+=e.value;else if(e.type===rh.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Vp(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Vp(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function fh(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===lh.Static+lh.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===lh.Static+lh.Segment?1:-1:0}function ph(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=fh(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(mh(r))return 1;if(mh(i))return-1}return i.length-r.length}function mh(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var hh={strict:!1,end:!0,sensitive:!1};function gh(e,t,n){let r=Z(dh(oh(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function _h(e,t){let n=[],r=new Map;t=Hp(hh,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=yh(e);s.aliasOf=r&&r.record;let l=Hp(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(yh(Z({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=gh(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!xh(d)&&o(e.name)),Th(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Bp}function o(e){if(Fm(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=Ch(e,n);n.splice(t,0,e),e.record.name&&!xh(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw Lm(Q.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=Z(vh(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&vh(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Lm(Q.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=Z({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:Sh(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function vh(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function yh(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:bh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function bh(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function xh(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Sh(e){return e.reduce((e,t)=>Z(e,t.meta),{})}function Ch(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;ph(e,t[i])<0?r=i:n=i+1}let i=wh(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function wh(e){let t=e;for(;t=t.parent;)if(Th(t)&&ph(e,t)===0)return t}function Th({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Eh(e){let t=L(Wm),n=L(Gm),r=I(()=>{let n=re(e.to);return t.resolve(n)}),i=I(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(gm.bind(null,i));if(o>-1)return o;let s=jh(e[t-2]);return t>1&&jh(i)===s&&a[a.length-1].path!==s?a.findIndex(gm.bind(null,e[t-2])):o}),a=I(()=>i.value>-1&&Ah(n.params,r.value.params)),o=I(()=>i.value>-1&&i.value===n.matched.length-1&&_m(n.params,r.value.params));function s(n={}){if(kh(n)){let n=t[re(e.replace)?`replace`:`push`](re(e.to)).catch(Bp);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:I(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function Dh(e){return e.length===1?e[0]:e}var Oh=R({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:Eh,setup(e,{slots:t}){let n=ae(Eh(e)),{options:r}=L(Wm),i=I(()=>({[Mh(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[Mh(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&Dh(t.default(n));return e.custom?r:b(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function kh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ah(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Vp(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function jh(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var Mh=(e,t,n)=>e??t??n,Nh=R({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=L(Km),i=I(()=>e.route||r.value),a=L(Um,0),o=I(()=>{let e=re(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=I(()=>i.value.matched[o.value]);d(Um,I(()=>o.value+1)),d(Hm,s),d(Km,i);let c=P();return T(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!gm(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return Ph(n.default,{Component:l,route:r});let u=o.props[a],d=b(l,Z({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return Ph(n.default,{Component:d,route:r})||d}}});function Ph(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Fh=Nh;function Ih(e){let t=_h(e.routes,e),n=e.parseQuery||zm,r=e.stringifyQuery||Bm,i=e.history,o=qm(),s=qm(),c=qm(),l=fe(xm),u=xm;Ip&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let d=zp.bind(null,e=>``+e),f=zp.bind(null,cm),p=zp.bind(null,lm);function m(e,n){let r,i;return Fm(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function h(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function g(){return t.getRoutes().map(e=>e.record)}function _(e){return!!t.getRecordMatcher(e)}function v(e,a){if(a=Z({},a||l.value),typeof e==`string`){let r=fm(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return Z(r,o,{params:p(o.params),hash:lm(r.hash),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=Z({},e,{path:fm(n,e.path,a.path).path});else{let t=Z({},e.params);for(let e in t)t[e]??delete t[e];o=Z({},e,{params:f(t)}),a.params=f(a.params)}let s=t.resolve(o,a),c=e.hash||``;s.params=d(p(s.params));let u=pm(r,Z({},e,{hash:im(c),path:s.path})),m=i.createHref(u);return Z({fullPath:u,hash:c,query:r===Bm?Vm(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function y(e){return typeof e==`string`?fm(n,e,l.value.path):Z({},e)}function b(e,t){if(u!==e)return Lm(Q.NAVIGATION_CANCELLED,{from:t,to:e})}function x(e){return w(e)}function S(e){return x(Z(y(e),{replace:!0}))}function C(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=y(i):{path:i},i.params={}),Z({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function w(e,t){let n=u=v(e),i=l.value,a=e.state,o=e.force,s=e.replace===!0,c=C(n,i);if(c)return w(Z(y(c),{state:typeof c==`object`?Z({},a,c.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&hm(r,i,n)&&(f=Lm(Q.NAVIGATION_DUPLICATED,{to:d,from:i}),ae(i,i,!0,!1)),(f?Promise.resolve(f):D(d,i)).catch(e=>Rm(e)?Rm(e,Q.NAVIGATION_GUARD_REDIRECT)?e:ie(e):ne(e,d,i)).then(e=>{if(e){if(Rm(e,Q.NAVIGATION_GUARD_REDIRECT))return w(Z({replace:s},y(e.to),{state:typeof e.to==`object`?Z({},a,e.to.state):a,force:o}),t||d)}else e=k(d,i,!0,s,a);return O(d,i,e),e})}function T(e,t){let n=b(e,t);return n?Promise.reject(n):Promise.resolve()}function E(e){let t=ce.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function D(e,t){let n,[r,i,a]=Xm(e,t);n=Ym(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(Jm(r,e,t))});let c=T.bind(null,e,t);return n.push(c),ue(n).then(()=>{n=[];for(let r of o.list())n.push(Jm(r,e,t));return n.push(c),ue(n)}).then(()=>{n=Ym(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(Jm(r,e,t))});return n.push(c),ue(n)}).then(()=>{n=[];for(let r of a)if(r.beforeEnter)if(Vp(r.beforeEnter))for(let i of r.beforeEnter)n.push(Jm(i,e,t));else n.push(Jm(r.beforeEnter,e,t));return n.push(c),ue(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Ym(a,`beforeRouteEnter`,e,t,E),n.push(c),ue(n))).then(()=>{n=[];for(let r of s.list())n.push(Jm(r,e,t));return n.push(c),ue(n)}).catch(e=>Rm(e,Q.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function O(e,t,n){c.list().forEach(r=>E(()=>r(e,t,n)))}function k(e,t,n,r,a){let o=b(e,t);if(o)return o;let s=t===xm,c=Ip?history.state:{};n&&(r||s?i.replace(e.fullPath,Z({scroll:s&&c&&c.scroll},a)):i.push(e.fullPath,a)),l.value=e,ae(e,t,n,s),ie()}let A;function j(){A||=i.listen((e,t,n)=>{if(!le.listening)return;let r=v(e),a=C(r,le.currentRoute.value);if(a){w(Z(a,{replace:!0,force:!0}),r).catch(Bp);return}u=r;let o=l.value;Ip&&Mm(Am(o.fullPath,n.delta),Om()),D(r,o).catch(e=>Rm(e,Q.NAVIGATION_ABORTED|Q.NAVIGATION_CANCELLED)?e:Rm(e,Q.NAVIGATION_GUARD_REDIRECT)?(w(Z(y(e.to),{force:!0}),r).then(e=>{Rm(e,Q.NAVIGATION_ABORTED|Q.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===Sm.pop&&i.go(-1,!1)}).catch(Bp),Promise.reject()):(n.delta&&i.go(-n.delta,!1),ne(e,r,o))).then(e=>{e||=k(r,o,!1),e&&(n.delta&&!Rm(e,Q.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===Sm.pop&&Rm(e,Q.NAVIGATION_ABORTED|Q.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),O(r,o,e)}).catch(Bp)})}let M=qm(),ee=qm(),te;function ne(e,t,n){ie(e);let r=ee.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function N(){return te&&l.value!==xm?Promise.resolve():new Promise((e,t)=>{M.add([e,t])})}function ie(e){return te||(te=!e,j(),M.list().forEach(([t,n])=>e?n(e):t()),M.reset()),e}function ae(t,n,r,i){let{scrollBehavior:o}=e;if(!Ip||!o)return Promise.resolve();let s=!r&&Nm(Am(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return a().then(()=>o(t,n,s)).then(e=>e&&km(e)).catch(e=>ne(e,t,n))}let oe=e=>i.go(e),se,ce=new Set,le={currentRoute:l,listening:!0,addRoute:m,removeRoute:h,clearRoutes:t.clearRoutes,hasRoute:_,getRoutes:g,resolve:v,options:e,push:x,replace:S,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:o.add,beforeResolve:s.add,afterEach:c.add,onError:ee.add,isReady:N,install(e){e.component(`RouterLink`,Oh),e.component(`RouterView`,Fh),e.config.globalProperties.$router=le,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>re(l)}),Ip&&!se&&l.value===xm&&(se=!0,x(i.location).catch(e=>{}));let t={};for(let e in xm)Object.defineProperty(t,e,{get:()=>l.value[e],enumerable:!0});e.provide(Wm,le),e.provide(Gm,we(t)),e.provide(Km,l);let n=e.unmount;ce.add(e),e.unmount=function(){ce.delete(e),ce.size<1&&(u=xm,A&&A(),A=null,l.value=xm,se=!1,te=!1),n()}}};function ue(e){return e.reduce((e,t)=>e.then(()=>E(t)),Promise.resolve())}return le}function Lh(){return L(Wm)}function Rh(e){return L(Gm)}var zh=`---\r
title: Promise手写 — 手写Promise A+规范\r
date: 2026-06-15\r
tags: [Basic]\r
summary: 从零手写 Promise A+ 规范，涵盖状态管理、then/catch/finally、静态方法 all/allSettled/race 的完整实现。\r
---\r
\r
**Promise手写**\r
\r
## Promise实现状态的变化\r
\r
1. 根据ES6新添加的类属性，定义一个MyPromise的类\r
\r
\`\`\`javascript\r
class MyPromise{\r
   /**\r
   * 创建一个Promise\r
   * @param {Function} executor 任务执行器，立即执行\r
   */\r
    constructor(executor){\r
		executor()\r
	}\r
}\r
\`\`\`\r
\r
2. executor这个函数需要传递两个参数_resolve, _reject\r
\r
\`\`\`javascript\r
  /**\r
   * 标记当前任务完成\r
   * @param {any} data // 成功的数据\r
   */\r
  _resolve(data) {\r
  }\r
\r
  /**\r
   * 标记当前任务失败\r
   * @param {any} reason 失败的数据\r
   */\r
  _reject(reason) {\r
  }\r
\`\`\`\r
\r
3. 给我们的promise设置一些属性一个是状态state，一个是数据value\r
\r
\`\`\`javascript\r
class MyPromise{\r
   /**\r
   * 创建一个Promise\r
   * @param {Function} executor 任务执行器，立即执行\r
   */\r
    constructor(executor){\r
        this._state = PENDING; // 状态\r
    	this._value = undefined; // 数据\r
		executor(this._resolve, this._reject);\r
	}\r
}\r
\`\`\`\r
\r
4. 对任务完成或失败进行处理\r
\r
\`\`\`javascript\r
  /**\r
   * 标记当前任务完成\r
   * @param {any} data // 成功的数据\r
   */\r
  _resolve(data) {\r
      this._state = 'fulfilled';\r
      this._value = data;\r
  }\r
\r
  /**\r
   * 标记当前任务失败\r
   * @param {any} reason 失败的数据\r
   */\r
  _reject(reason) {\r
      this._state = 'rejected';\r
      this._value = reason;\r
  }\r
\`\`\`\r
\r
此时的整体代码如下\r
\r
\`\`\`javascript\r
class MyPromise{\r
    constructor(executor){\r
        this._state = 'pending'\r
        this._value = undefined\r
        executor(this._resolve, this._reject)\r
    }\r
    _resolve(data){\r
        this._state = 'fulfilled'\r
        this._value = data\r
	}\r
    _reject(reason){\r
        this._state = 'rejected'\r
        this._value = reason\r
    }\r
}\r
\r
// 测试案例\r
const pro = new MyPromise((resolve, reject)=>{\r
    resolve(1)\r
})\r
console.log(pro)\r
\`\`\`\r
\r
这时你会发现运行不了(Cannot set property '_state' of undefined)，原因是resolve和reject中的this读取不到，为undefined。this的指向取决于如何调用它，这里是直接调用的resolve，按理说this指的是全局变量，但是因为使用的是ES6的class，导致是在严格模式下的，此时this指向的是undefined，也就造成这样的问题，但是我希望this指向的是当前创造的对象，那么我们可以对executor中进行这样的修改\r
\r
\`\`\`javascript\r
executor(this._resolve.bind(this), this._reject.bind(this))\r
\`\`\`\r
\r
此时打印出来的结果为 ： MyPromise{ _state: 'fulfilled', _value: 1}\r
\r
5. 接下优化一下代码，把'pending','fulfilled','rejected'三种状态记录一下，同时提取resolve和reject中的更改任务状态\r
\r
\`\`\`javascript\r
// 记录Promise的三种状态\r
const PENDING = 'pending';\r
const FULFILLED = 'fulfilled';\r
const REJECTED = 'rejected';\r
\r
_changeState(newState, value) {\r
    if (this._state !== PENDING) {\r
      // 目前状态已经更改\r
      return;\r
    }\r
    this._state = newState;\r
    this._value = value;\r
}\r
\r
_resolve(data) {\r
  this._changeState(FULFILLED, data);\r
}\r
/**\r
* 标记当前任务失败\r
* @param {any} reason 任务失败的相关数据\r
*/\r
 _reject(reason) {\r
  this._changeState(REJECTED, reason);\r
}\r
\`\`\`\r
\r
6. 如果在Promise执行过程中报错了，状态应该自动变为reject，我们可以直接看Promise执行过程中的函数是否出现错误，如果出现错误了，直接帮你调用reject，示例代码如下\r
\r
\`\`\`javascript\r
constructor(executor) {\r
    this._state = PENDING; // 状态\r
    this._value = undefined; // 数据\r
    try {\r
      executor(this._resolve.bind(this), this._reject.bind(this));\r
    } catch (error) {\r
      this._reject(error);\r
    }\r
}\r
\`\`\`\r
\r
ok到此我们手写的Promise实现状态变化的功能也就实现了整体代码如下\r
\r
\`\`\`javascript\r
// 记录Promise的三种状态\r
const PENDING = "pending";\r
const FULFILLED = "fulfilled";\r
const REJECTED = "rejected";\r
\r
class MyPromise {\r
    \r
  constructor(executor) {\r
    this._state = PENDING; // 状态\r
    this._value = undefined; // 数据\r
    try {\r
      executor(this._resolve.bind(this), this._reject.bind(this));\r
    } catch (error) {\r
      this._reject(error);\r
    }\r
  }\r
    \r
  /**\r
   * 更改任务状态\r
   * @param {String} newState 新状态\r
   * @param {any} value 相关数据\r
   */\r
  _changeState(newState, value) {\r
    if (this._state !== PENDING) {\r
      // 目前状态已经更改\r
      return;\r
    }\r
    this._state = newState;\r
    this._value = value;\r
  }\r
  /**\r
   * 标记当前任务成功\r
   * @param {any} data 任务成功的相关数据\r
   */\r
  _resolve(data) {\r
    this._changeState(FULFILLED, data);\r
  }\r
    \r
  /**\r
   * 标记当前任务失败\r
   * @param {any} reason 任务失败的相关数据\r
   */\r
  _reject(reason) {\r
    this._changeState(REJECTED, reason);\r
  }\r
}\r
\r
\`\`\`\r
\r
## 创建then函数\r
\r
1. 由于then函数比较复杂，先搭个架子。我们首先要思考两个东西，1.有什么参数传入 2.返回什么值\r
\r
\`\`\`javascript\r
\r
  /**\r
   * promise A+规范的then\r
   * @param {Function} onFulfilled\r
   * @param {Function} onRejected\r
   * @returns\r
   */\r
  then(onFulfilled, onRejected) {\r
    return new MyPromise((resolve, reject) => {\r
    });\r
  }\r
\r
\r
// 参数有两个 1. data， 2. reason\r
// 返回值还是一个promise\r
const pro = new Promsie((resolve, reject)=>{\r
    resolve(1)\r
})\r
pro.then(\r
    (data) => { console.log(data) },\r
	(reason) => { console.log(reason) }\r
)\r
\`\`\`\r
\r
2. 接下来我们要想一个比较深层次的问题，这个then函数到底要做什么？\r
\r
   我们再详细的描述一下then函数: 当处于成功状态时处理resolve中的事情，当失败的时候处理reject中的事情\r
\r
   then函数中的回调函数不会立即执行，会把函数放到微队列当中\r
\r
   如何把函数放到微队列当中呢，这是一个值得思考的问题。\r
\r
   我们需要创建一个微队列，并判断当前环境是node环境还是浏览器环境还是其他环境\r
\r
\`\`\`javascript\r
/**\r
 * 创建一个微队列\r
 * @param {Function} callback\r
 */\r
function runMicroTask(callback) {\r
  // 判断node环境\r
  if (process && process.nextTick) {\r
    process.nextTick(callback);\r
  } else if (MutationObserver) {\r
    // 判断浏览器环境\r
    const p = document.createElement("p");\r
    const observer = new MutationObserver(callback);\r
    observer.observe(p, {\r
      childList: true,\r
    });\r
    p.innerHTML = "1";\r
  } else {\r
    setTimeout(callback, 0);\r
  }\r
}\r
\`\`\`\r
\r
测试一下\r
\r
\`\`\`javascript\r
setTimeout(() => {\r
  console.log(1)   \r
})\r
runMicroTask(() => {\r
    console.log(2)\r
})\r
console.log(3)\r
// 最终的打印结果应该是3 2 1\r
\`\`\`\r
\r
3. 到现在我们手写的Promise的整体代码为\r
\r
\`\`\`javascript\r
// 记录Promise的三种状态\r
const PENDING = "pending";\r
const FULFILLED = "fulfilled";\r
const REJECTED = "rejected";\r
\r
/**\r
 * 创建一个微队列\r
 * @param {Function} callback\r
 */\r
function runMicroTask(callback) {\r
  // 判断node环境\r
  if (process && process.nextTick) {\r
    process.nextTick(callback);\r
  } else if (MutationObserver) {\r
    // 判断浏览器环境\r
    const p = document.createElement("p");\r
    const observer = new MutationObserver(callback);\r
    observer.observe(p, {\r
      childList: true,\r
    });\r
    p.innerHTML = "1";\r
  } else {\r
    setTimeout(callback, 0);\r
  }\r
}\r
\r
class MyPromise {\r
    \r
  constructor(executor) {\r
    this._state = PENDING; // 状态\r
    this._value = undefined; // 数据\r
    try {\r
      executor(this._resolve.bind(this), this._reject.bind(this));\r
    } catch (error) {\r
      this._reject(error);\r
    }\r
  }\r
    \r
  /**\r
   * 更改任务状态\r
   * @param {String} newState 新状态\r
   * @param {any} value 相关数据\r
   */\r
  _changeState(newState, value) {\r
    if (this._state !== PENDING) {\r
      // 目前状态已经更改\r
      return;\r
    }\r
    this._state = newState;\r
    this._value = value;\r
  }\r
    \r
  /**\r
   * 标记当前任务成功\r
   * @param {any} data 任务成功的相关数据\r
   */\r
  _resolve(data) {\r
    this._changeState(FULFILLED, data);\r
  }\r
    \r
  /**\r
   * 标记当前任务失败\r
   * @param {any} reason 任务失败的相关数据\r
   */\r
  _reject(reason) {\r
    this._changeState(REJECTED, reason);\r
  }\r
    \r
  /**\r
   * promise A+规范的then\r
   * @param {Function} onFulfilled\r
   * @param {Function} onRejected\r
   * @returns\r
   */\r
  then(onFulfilled, onRejected) {\r
    return new MyPromise((resolve, reject) => {\r
    });\r
  }\r
}\r
\r
\`\`\`\r
\r
## Promise执行队列\r
\r
1. 我们首先要知道then函数中的回调函数是否立即执行(不是，应该放到微队列里面执行)\r
\r
   是否立即放到微队列里面(其实也不是，如果这些函数立即放到微队列里，那一定是这些函数先执行，正确的应该是先等状态确定后再放到微队列里然后依次执行这写函数)\r
\r
   因此我们需要一个队列去存放这些then函数\r
\r
\`\`\`javascript\r
this._handlers = [] // 处理函数形成的队列\r
\`\`\`\r
\r
2. 接下来我们再调用then函数的时候把onfulfilled和rejected放到队列里也就是这样\r
\r
\`\`\`javascript\r
  then(onFulfilled, onRejected) {\r
    this._handlers.push(onFulfilled, onRejected)\r
    return new MyPromise((resolve, reject) => {\r
    });\r
  }\r
\`\`\`\r
\r
如果这样做的话就产生问题了，我们并不知道存放的函数的状态，因此handlers里面存的应该是一个一个的对象，我们把这件事单独抽离出来一个函数\r
\r
\`\`\`javascript\r
  /**\r
   * 向处理队列中添加一个函数\r
   * @param {Function} executor 添加的函数\r
   * @param {String} state 该函数什么状态下执行\r
   * @param {Function} resolve 让then函数返回的Promise成功\r
   * @param {Function} reject 让then函数返回的Promise失败\r
   */\r
  _pushHandler(executor, state, resolve, reject) {\r
    this._handlers.push({\r
      executor,\r
      state,\r
      resolve,\r
      reject,\r
    });\r
  }\r
\`\`\`\r
\r
此时的then函数为\r
\r
\`\`\`javascript\r
/**\r
 * Promise A+规范的then\r
 * @param {Function} onFulfilled\r
 * @param {Function} onRejected\r
 */\r
then(onFulfilled, onRejected) {\r
  return new MyPromise((resolve, reject) => {\r
    this._pushHandler(onFulfilled, FULFILLED, resolve, reject);\r
    this._pushHandler(onRejected, REJECTED, resolve, reject);\r
  });\r
}\r
\`\`\`\r
\r
3. 整体代码为\r
\r
\`\`\`javascript\r
// 记录Promise的三种状态\r
const PENDING = "pending";\r
const FULFILLED = "fulfilled";\r
const REJECTED = "rejected";\r
\r
/**\r
 * 创建一个微队列\r
 * @param {Function} callback\r
 */\r
function runMicroTask(callback) {\r
  // 判断node环境\r
  if (process && process.nextTick) {\r
    process.nextTick(callback);\r
  } else if (MutationObserver) {\r
    // 判断浏览器环境\r
    const p = document.createElement("p");\r
    const observer = new MutationObserver(callback);\r
    observer.observe(p, {\r
      childList: true,\r
    });\r
    p.innerHTML = "1";\r
  } else {\r
    setTimeout(callback, 0);\r
  }\r
}\r
\r
class MyPromise {\r
    \r
  constructor(executor) {\r
    this._state = PENDING; // 状态\r
    this._value = undefined; // 数据\r
    this._handlers = [] // 处理函数形成的队列\r
    try {\r
      executor(this._resolve.bind(this), this._reject.bind(this));\r
    } catch (error) {\r
      this._reject(error);\r
    }\r
  }\r
    \r
  /**\r
   * 更改任务状态\r
   * @param {String} newState 新状态\r
   * @param {any} value 相关数据\r
   */\r
  _changeState(newState, value) {\r
    if (this._state !== PENDING) {\r
      // 目前状态已经更改\r
      return;\r
    }\r
    this._state = newState;\r
    this._value = value;\r
  }\r
    \r
  /**\r
   * 标记当前任务成功\r
   * @param {any} data 任务成功的相关数据\r
   */\r
  _resolve(data) {\r
    this._changeState(FULFILLED, data);\r
  }\r
    \r
  /**\r
   * 标记当前任务失败\r
   * @param {any} reason 任务失败的相关数据\r
   */\r
  _reject(reason) {\r
    this._changeState(REJECTED, reason);\r
  }\r
  \r
   /**\r
   * 向处理队列中添加一个函数\r
   * @param {Function} executor 添加的函数\r
   * @param {String} state 该函数什么状态下执行\r
   * @param {Function} resolve 让then函数返回的Promise成功\r
   * @param {Function} reject 让then函数返回的Promise失败\r
   */\r
  _pushHandler(executor, state, resolve, reject) {\r
    this._handlers.push({\r
      executor,\r
      state,\r
      resolve,\r
      reject,\r
    });\r
  }\r
    \r
  /**\r
   * promise A+规范的then\r
   * @param {Function} onFulfilled\r
   * @param {Function} onRejected\r
   * @returns\r
   */\r
  then(onFulfilled, onRejected) {\r
    return new MyPromise((resolve, reject) => {\r
    	this._pushHandler(onFulfilled, FULFILLED, resolve, reject);\r
    	this._pushHandler(onRejected, REJECTED, resolve, reject);\r
    });\r
  }\r
}\r
\r
\`\`\`\r
\r
## 遍历执行队列\r
\r
1. 创建一个执行队列的函数\r
\r
\`\`\`javascript\r
/**\r
 * 根据实际情况，执行队列\r
*/\r
_runHandlers(){\r
    if(this._state === PENDING){\r
        // 任务正在挂起\r
        return \r
    }\r
}\r
\`\`\`\r
\r
2. 状态变化执行队列\r
\r
\`\`\`javascript\r
/**\r
 * 更改任务状态\r
 * @param {String} newState 新状态\r
 * @param {any} value 相关数据\r
 */\r
_changeState(newState, value) {\r
  if (this._state !== PENDING) {\r
    // 目前状态已经更改\r
    return;\r
  }\r
  // 下面这个判断是为了处理value为Promise的情况\r
  if (isPromise(value)) {\r
    value.then(this._resolve.bind(this), this._reject.bind(this));\r
    return;\r
  }\r
  this._state = newState;\r
  this._value = value;\r
  this._runHandlers(); // 状态变化，执行队列\r
}\r
// 其中的isPromise函数是这样的，就是判断一个对象是否为Promise\r
function isPromise(obj){\r
    return !!(obj && typeof obj === 'object' && typeof obj.then === 'function')\r
}\r
\`\`\`\r
\r
3. 在then函数中执行队列\r
\r
\`\`\`javascript\r
  then(onFulfilled, onRejected) {\r
    return new MyPromise((resolve, reject) => {\r
    	this._pushHandler(onFulfilled, FULFILLED, resolve, reject);\r
    	this._pushHandler(onRejected, REJECTED, resolve, reject);\r
        this._runHandlers() // 执行队列\r
    });\r
  }\r
\`\`\`\r
\r
4. 如果现在的状态不是挂起，要么成功要么失败，这个时候要把队列拿出来一个一个的去看，怎么拿出来一个一个看呢？\r
\r
\`\`\`javascript\r
/**\r
 * 根据实际情况处理一个队列\r
 * @returns\r
 */\r
_runHander() {\r
  if (this._state === PENDING) {\r
    // 当前任务正在挂起\r
    return;\r
  }\r
  while (this._handlers[0]) {\r
    const hander = this._handlers[0];\r
    this._runOneHander(hander);\r
    this._handlers.shift();\r
  }\r
}\r
/**\r
 * 处理一个handler\r
 * @param {Object} handler\r
 */\r
_runOneHander(handler) {}\r
\`\`\`\r
\r
5. 现在的整体代码为\r
\r
\`\`\`javascript\r
// 记录Promise的三种状态\r
const PENDING = "pending";\r
const FULFILLED = "fulfilled";\r
const REJECTED = "rejected";\r
\r
/**\r
 * 创建一个微队列\r
 * @param {Function} callback\r
 */\r
function runMicroTask(callback) {\r
  // 判断node环境\r
  if (process && process.nextTick) {\r
    process.nextTick(callback);\r
  } else if (MutationObserver) {\r
    // 判断浏览器环境\r
    const p = document.createElement("p");\r
    const observer = new MutationObserver(callback);\r
    observer.observe(p, {\r
      childList: true,\r
    });\r
    p.innerHTML = "1";\r
  } else {\r
    setTimeout(callback, 0);\r
  }\r
}\r
\r
// 判断一个对象是否为Promise\r
function isPromise(obj){\r
    return !!(obj && typeof obj === 'object' && typeof obj.then === 'function')\r
}\r
\r
class MyPromise {\r
    \r
  constructor(executor) {\r
    this._state = PENDING; // 状态\r
    this._value = undefined; // 数据\r
    this._handlers = [] // 处理函数形成的队列\r
    try {\r
      executor(this._resolve.bind(this), this._reject.bind(this));\r
    } catch (error) {\r
      this._reject(error);\r
    }\r
  }\r
    \r
  /**\r
   * 更改任务状态\r
   * @param {String} newState 新状态\r
   * @param {any} value 相关数据\r
   */\r
  _changeState(newState, value) {\r
    if (this._state !== PENDING) {\r
      // 目前状态已经更改\r
      return;\r
    }\r
      // 下面这个判断是为了处理value为Promise的情况\r
    if (isPromise(value)) {\r
      value.then(this._resolve.bind(this), this._reject.bind(this));\r
      return;\r
    }\r
    this._state = newState;\r
    this._value = value;\r
    this._runHandlers(); // 状态变化，执行队列\r
  }\r
    \r
  /**\r
   * 标记当前任务成功\r
   * @param {any} data 任务成功的相关数据\r
   */\r
  _resolve(data) {\r
    this._changeState(FULFILLED, data);\r
  }\r
    \r
  /**\r
   * 标记当前任务失败\r
   * @param {any} reason 任务失败的相关数据\r
   */\r
  _reject(reason) {\r
    this._changeState(REJECTED, reason);\r
  }\r
  \r
   /**\r
   * 向处理队列中添加一个函数\r
   * @param {Function} executor 添加的函数\r
   * @param {String} state 该函数什么状态下执行\r
   * @param {Function} resolve 让then函数返回的Promise成功\r
   * @param {Function} reject 让then函数返回的Promise失败\r
   */\r
  _pushHandler(executor, state, resolve, reject) {\r
    this._handlers.push({\r
      executor,\r
      state,\r
      resolve,\r
      reject,\r
    });\r
  }\r
  \r
  /**\r
  * 根据实际情况处理一个队列\r
  * @returns\r
  */\r
 _runHander() {\r
   if (this._state === PENDING) {\r
     // 当前任务正在挂起\r
     return;\r
   }\r
   while (this._handlers[0]) {\r
     const hander = this._handlers[0];\r
     this._runOneHander(hander);\r
     this._handlers.shift();\r
   }\r
 }\r
    \r
   /**\r
   * 处理一个handler\r
   * @param {Object} handler\r
   */\r
  _runOneHander(handler) {}\r
    \r
  /**\r
   * promise A+规范的then\r
   * @param {Function} onFulfilled\r
   * @param {Function} onRejected\r
   * @returns\r
   */\r
  then(onFulfilled, onRejected) {\r
    return new MyPromise((resolve, reject) => {\r
    	this._pushHandler(onFulfilled, FULFILLED, resolve, reject);\r
    	this._pushHandler(onRejected, REJECTED, resolve, reject);\r
        this._runHandlers() // 执行队列\r
    });\r
  }\r
}\r
\r
\`\`\`\r
\r
## 完成核心代码\r
\r
实现上面的_runHandler方法\r
\r
\`\`\`javascript\r
/**\r
 * 处理一个handler\r
 * @param {Object} handler\r
 */\r
_runOneHandler({ executor, state, resolve, reject }) {\r
  runMicroTask(() => {\r
    if (this._state !== state) {\r
      // 状态不一致，透传当前的值到下一个Promise\r
      if (this._state === FULFILLED) {\r
        resolve(this._value);\r
      } else {\r
        reject(this._value);\r
      }\r
      return\r
    }\r
    if (typeof executor !== 'function') {\r
      // 传递后续处理并非一个函数\r
      this._state === FULFILLED ? resolve(this._value) : reject(this._value);\r
      return;\r
    }\r
    try {\r
      const result = executor(this._value);\r
      if (isPromise(result)) {\r
        result.then(resolve, reject);\r
      } else {\r
        resolve(result);\r
      }\r
    } catch (error) {\r
      reject(error);\r
      console.error(error);\r
    }\r
  });\r
}\r
\`\`\`\r
\r
## 完整的代码\r
\r
到此，我们手写的Promise A+规范就结束了\r
\r
\`\`\`javascript\r
// 记录Promise的三种状态\r
const PENDING = "pending";\r
const FULFILLED = "fulfilled";\r
const REJECTED = "rejected";\r
\r
/**\r
 * 创建一个微队列\r
 * @param {Function} callback\r
 */\r
function runMicroTask(callback) {\r
  // 判断node环境\r
  if (process && process.nextTick) {\r
    process.nextTick(callback);\r
  } else if (MutationObserver) {\r
    // 判断浏览器环境\r
    const p = document.createElement("p");\r
    const observer = new MutationObserver(callback);\r
    observer.observe(p, {\r
      childList: true,\r
    });\r
    p.innerHTML = "1";\r
  } else {\r
    setTimeout(callback, 0);\r
  }\r
}\r
\r
// 判断一个对象是否为Promise\r
function isPromise(obj) {\r
  return !!(obj && typeof obj === "object" && typeof obj.then === "function");\r
}\r
\r
class MyPromise {\r
    \r
  constructor(executor) {\r
    this._state = PENDING; // 状态\r
    this._value = undefined; // 数据\r
    this._handlers = []; // 处理函数形成的队列\r
    try {\r
      executor(this._resolve.bind(this), this._reject.bind(this));\r
    } catch (error) {\r
      this._reject(error);\r
      console.error(error);\r
    }\r
  }\r
\r
  /**\r
   * 更改任务状态\r
   * @param {String} newState 新状态\r
   * @param {any} value 相关数据\r
   */\r
  _changeState(newState, value) {\r
    if (this._state !== PENDING) {\r
      // 目前状态已经更改\r
      return;\r
    }\r
    // 下面这个判断是为了处理value为Promise的情况\r
    if (isPromise(value)) {\r
      value.then(this._resolve.bind(this), this._reject.bind(this));\r
      return;\r
    }\r
    this._state = newState;\r
    this._value = value;\r
    this._runHandlers(); // 状态变化，执行队列\r
  }\r
\r
  /**\r
   * 标记当前任务成功\r
   * @param {any} data 任务成功的相关数据\r
   */\r
  _resolve(data) {\r
    this._changeState(FULFILLED, data);\r
  }\r
\r
  /**\r
   * 标记当前任务失败\r
   * @param {any} reason 任务失败的相关数据\r
   */\r
  _reject(reason) {\r
    this._changeState(REJECTED, reason);\r
  }\r
\r
  /**\r
   * 向处理队列中添加一个函数\r
   * @param {Function} executor 添加的函数\r
   * @param {String} state 该函数什么状态下执行\r
   * @param {Function} resolve 让then函数返回的Promise成功\r
   * @param {Function} reject 让then函数返回的Promise失败\r
   */\r
  _pushHandler(executor, state, resolve, reject) {\r
    this._handlers.push({\r
      executor,\r
      state,\r
      resolve,\r
      reject,\r
    });\r
  }\r
\r
  /**\r
   * 根据实际情况处理一个队列\r
   * @returns\r
   */\r
  _runHandlers() {\r
    if (this._state === PENDING) {\r
      // 当前任务正在挂起\r
      return;\r
    }\r
    while (this._handlers[0]) {\r
      const handler = this._handlers[0];\r
      this._runOneHandler(handler);\r
      this._handlers.shift();\r
    }\r
  }\r
\r
  /**\r
   * 处理一个handler\r
   * @param {Object} handler\r
   */\r
  _runOneHandler({ executor, state, resolve, reject }) {\r
    runMicroTask(() => {\r
      if (this._state !== state) {\r
        // 状态不一致，透传当前的值到下一个Promise\r
      	if (this._state === FULFILLED) {\r
        	resolve(this._value);\r
      	} else {\r
        	reject(this._value);\r
      	}\r
        return;\r
      }\r
      if (typeof executor !== "function") {\r
        // 传递后续处理并非一个函数\r
        this._state === FULFILLED ? resolve(this._value) : reject(this._value);\r
        return;\r
      }\r
      try {\r
        const result = executor(this._value);\r
        if (isPromise(result)) {\r
          result.then(resolve, reject);\r
        } else {\r
          resolve(result);\r
        }\r
      } catch (error) {\r
        reject(error);\r
        console.error(error);\r
      }\r
    });\r
  }\r
\r
  /**\r
   * promise A+规范的then\r
   * @param {Function} onFulfilled\r
   * @param {Function} onRejected\r
   * @returns\r
   */\r
  then(onFulfilled, onRejected) {\r
    return new MyPromise((resolve, reject) => {\r
      this._pushHandler(onFulfilled, FULFILLED, resolve, reject);\r
      this._pushHandler(onRejected, REJECTED, resolve, reject);\r
      this._runHandlers(); // 执行队列\r
    });\r
  }\r
}\r
\r
\`\`\`\r
\r
## 手写catch和finally\r
\r
当我们手写完Promise A+规范后发现手写catch和finally很简单了\r
\r
\`\`\`javascript\r
/**\r
 * 仅处理失败时候的场景\r
 * @param {Function} onRejected\r
 */\r
catch(onRejected) {\r
  return this.then(null, onRejected);\r
}\r
/**\r
 * 无论是成功还是失败时都会回调\r
 * @param {Function} onSettled\r
 * @returns\r
 */\r
finally(onSettled) {\r
  return this.then(\r
    (data) => {\r
      onSettled();\r
      return data;\r
    },\r
    (reason) => {\r
      onSettled();\r
      throw reason;\r
    },\r
  );\r
}\r
\`\`\`\r
\r
面试的时候如果直接叫手写catch和finally方法，可以直接使用ES6给我们提供的Promise\r
\r
\`\`\`javascript\r
Promise.prototype.catch = function(onReject){\r
    return this.then(null, onReject)\r
}\r
\r
Promise.protopyte.finally = function(onSettled){\r
    return this.then(\r
        (data) => { onSettled(), return data },\r
        (reason) => { onSettled(), throw reason }\r
    )\r
}\r
\`\`\`\r
\r
## 手写resolve和reject\r
\r
如果你已经手写了自己的Promise，那么在你的类中添加两个静态方法\r
\r
\`\`\`javascript\r
static resolve(data) {\r
  if (data instanceof MyPromise) {\r
    return data;\r
  }\r
  return new MyPromise((resolve, reject) => {\r
    if (isPromise(data)) {\r
      data.then(resolve, reject);\r
    } else {\r
      resolve(data);\r
    }\r
  });\r
}\r
static reject(reason) {\r
  return new MyPromise((resolve, reject) => {\r
    reject(reason);\r
  });\r
}\r
\`\`\`\r
\r
如果面试直接让你实现resolve和reject可以直接用ES6提供的Promise\r
\r
\`\`\`javascript\r
// 判断一个对象是否为Promise\r
function isPromise(obj) {\r
  return !!(obj && typeof obj === "object" && typeof obj.then === "function");\r
}\r
\r
Promise.resolve = function(data){\r
  if (data instanceof Promise) {\r
    return data;\r
  }\r
  return new Promise((resolve, reject) => {\r
    if (isPromise(data)) {\r
      data.then(resolve, reject);\r
    } else {\r
      resolve(data);\r
    }\r
  });    \r
}\r
\r
Promise.reject = function(reason){\r
  return new MyPromise((resolve, reject) => {\r
    reject(reason);\r
  });    \r
}\r
\`\`\`\r
\r
## 手写Promise.all方法\r
\r
注意，Promise.all()，里面的参数是可以传递迭代器(iterator)的，但是不是所有的迭代器都支持for循环，所以推荐使用forof循环\r
\r
\`\`\`javascript\r
/**\r
   * 得到一个新的Promise\r
   * 该Promise的状态取决于proms的执行\r
   * proms是一个迭代器，包含多个Promise\r
   * 全部Promise成功，则返回的Promise成功，数据为所有Promise成功的数据，并且顺序是按照传入的顺序排列\r
   * 只要有一个Promise失败，则返回的Promise失败，原因是第一个失败的Promise的原因\r
   * @param {iterator} proms\r
   */\r
  static all(proms) {\r
    return new MyPromise((resolve, reject) => {\r
      try {\r
        const result = [];\r
        let count = 0; // Promise的总数\r
        let fulfilledCount = 0; // 完成的数量\r
        for (const p of proms) {\r
          let i = count;\r
          count++;\r
          MyPromise.resolve(p).then((data) => {\r
            fulfilledCount++;\r
            result[i] = data;\r
            if (fulfilledCount === count) {\r
              // 当前是最后一个Promise完成了\r
              resolve(result);\r
            }\r
          }, reject);\r
        }\r
        if (count === 0) {\r
          resolve(result);\r
        }\r
      } catch (error) {\r
        reject(error);\r
        console.error(error);\r
      }\r
    });\r
  }\r
\`\`\`\r
\r
## 手写Promise.allSettled方法\r
\r
注意，Promise.allSettled方法实现的Promise一定是成功的\r
\r
\`\`\`javascript\r
/**\r
 * 等待所有的Promise有结果之后\r
 * 该方法返回的Promise完成\r
 * 并且按照顺序将所有结果汇总\r
 * @param {iterator} proms\r
 */\r
static allSettled(proms) {\r
  const ps = [];\r
  for (const p of proms) {\r
    ps.push(\r
      MyPromise.resolve(p).then\r
        (value) => ({\r
          status: FULFILLED,\r
          value,\r
        }),\r
        (reason) => ({\r
          status: REJECTED,\r
          reason,\r
        })\r
      )\r
    );\r
  }\r
  return MyPromise.all(ps);\r
}\r
\`\`\`\r
\r
## 手写Promise.race方法\r
\r
\`\`\`javascript\r
/**\r
 * 返回的Promise与第一个有结果的一致\r
 * @param {iterator} proms\r
 */\r
static race(proms) {\r
  return new MyPromise((resolve, reject) => {\r
    for (const p of proms) {\r
      MyPromise.resolve(p).then(resolve, reject);\r
    }\r
  });\r
}\r
\`\`\`\r
\r
## TOTAL\r
\r
\`\`\`javascript\r
// 记录Promise的三种状态\r
const PENDING = "pending";\r
const FULFILLED = "fulfilled";\r
const REJECTED = "rejected";\r
\r
/**\r
 * 运行一个微队列任务\r
 * 把传递的函数放到微队列中\r
 * @param {Function} callback\r
 */\r
function runMicroTask(callback) {\r
  // 判断node环境\r
  // 为了避免「变量未定义」的错误，这里最好加上前缀globalThis\r
  // globalThis是一个关键字，指代全局对象，浏览器环境为window，node环境为global\r
  if (globalThis.process && globalThis.process.nextTick) {\r
    process.nextTick(callback);\r
  } else if (globalThis.MutationObserver) {\r
    const p = document.createElement("p");\r
    const observer = new MutationObserver(callback);\r
    observer.observe(p, {\r
      childList: true, // 观察该元素内部的变化\r
    });\r
    p.innerHTML = "1";\r
  } else {\r
    setTimeout(callback, 0);\r
  }\r
}\r
\r
/**\r
 * 判断一个数据是否是Promise对象\r
 * @param {any} obj\r
 * @returns\r
 */\r
function isPromise(obj) {\r
  return !!(obj && typeof obj === "object" && typeof obj.then === "function");\r
}\r
\r
class MyPromise {\r
  /**\r
   * 创建一个Promise\r
   * @param {Function} executor 任务执行器，立即执行\r
   */\r
  constructor(executor) {\r
    this._state = PENDING; // 状态\r
    this._value = undefined; // 数据\r
    this._handlers = []; // 处理函数形成的队列\r
    try {\r
      executor(this._resolve.bind(this), this._reject.bind(this));\r
    } catch (error) {\r
      this._reject(error);\r
      console.error(error);\r
    }\r
  }\r
\r
  /**\r
   * 向处理队列中添加一个函数\r
   * @param {Function} executor 添加的函数\r
   * @param {String} state 该函数什么状态下执行\r
   * @param {Function} resolve 让then函数返回的Promise成功\r
   * @param {Function} reject 让then函数返回的Promise失败\r
   */\r
  _pushHandler(executor, state, resolve, reject) {\r
    this._handlers.push({\r
      executor,\r
      state,\r
      resolve,\r
      reject,\r
    });\r
  }\r
\r
  /**\r
   * 根据实际情况，执行队列\r
   */\r
  _runHandlers() {\r
    if (this._state === PENDING) {\r
      // 目前任务仍在挂起\r
      return;\r
    }\r
    while (this._handlers[0]) {\r
      const handler = this._handlers[0];\r
      this._runOneHandler(handler);\r
      this._handlers.shift();\r
    }\r
  }\r
\r
  /**\r
   * 处理一个handler\r
   * @param {Object} handler\r
   */\r
  _runOneHandler({ executor, state, resolve, reject }) {\r
    runMicroTask(() => {\r
      if (this._state !== state) {\r
        // 状态不一致，不处理\r
        return;\r
      }\r
\r
      if (typeof executor !== "function") {\r
        // 传递后续处理并非一个函数\r
        this._state === FULFILLED ? resolve(this._value) : reject(this._value);\r
        return;\r
      }\r
      try {\r
        const result = executor(this._value);\r
        if (isPromise(result)) {\r
          result.then(resolve, reject);\r
        } else {\r
          resolve(result);\r
        }\r
      } catch (error) {\r
        reject(error);\r
        console.error(error);\r
      }\r
    });\r
  }\r
\r
  /**\r
   * Promise A+规范的then\r
   * @param {Function} onFulfilled\r
   * @param {Function} onRejected\r
   */\r
  then(onFulfilled, onRejected) {\r
    return new MyPromise((resolve, reject) => {\r
      this._pushHandler(onFulfilled, FULFILLED, resolve, reject);\r
      this._pushHandler(onRejected, REJECTED, resolve, reject);\r
      this._runHandlers(); // 执行队列\r
    });\r
  }\r
\r
  /**\r
   * 仅处理失败的场景\r
   * @param {Function} onRejected\r
   */\r
  catch(onRejected) {\r
    return this.then(null, onRejected);\r
  }\r
\r
  /**\r
   * 无论成功还是失败都会执行回调\r
   * @param {Function} onSettled\r
   */\r
  finally(onSettled) {\r
    return this.then(\r
      (data) => {\r
        onSettled();\r
        return data;\r
      },\r
      (reason) => {\r
        onSettled();\r
        throw reason;\r
      },\r
    );\r
  }\r
\r
  /**\r
   * 更改任务状态\r
   * @param {String} newState 新状态\r
   * @param {any} value 相关数据\r
   */\r
  _changeState(newState, value) {\r
    if (this._state !== PENDING) {\r
      // 目前状态已经更改\r
      return;\r
    }\r
    // 下面这个判断是为了处理value为Promise的情况\r
    // 这一段代码课程中没有涉及，特此注释说明\r
    if (isPromise(value)) {\r
      value.then(this._resolve.bind(this), this._reject.bind(this));\r
      return;\r
    }\r
    this._state = newState;\r
    this._value = value;\r
    this._runHandlers(); // 状态变化，执行队列\r
  }\r
\r
  /**\r
   * 标记当前任务完成\r
   * @param {any} data 任务完成的相关数据\r
   */\r
  _resolve(data) {\r
    this._changeState(FULFILLED, data);\r
  }\r
\r
  /**\r
   * 标记当前任务失败\r
   * @param {any} reason 任务失败的相关数据\r
   */\r
  _reject(reason) {\r
    this._changeState(REJECTED, reason);\r
  }\r
\r
  /**\r
   * 返回一个已完成的Promise\r
   * 特殊情况：\r
   * 1. 传递的data本身就是ES6的Promise对象\r
   * 2. 传递的data是PromiseLike（Promise A+），返回新的Promise，状态和其保持一致即可\r
   * @param {any} data\r
   */\r
  static resolve(data) {\r
    if (data instanceof MyPromise) {\r
      return data;\r
    }\r
    return new MyPromise((resolve, reject) => {\r
      if (isPromise(data)) {\r
        data.then(resolve, reject);\r
      } else {\r
        resolve(data);\r
      }\r
    });\r
  }\r
\r
  /**\r
   * 得到一个被拒绝的Promise\r
   * @param {any}} reason\r
   */\r
  static reject(reason) {\r
    return new MyPromise((resolve, reject) => {\r
      reject(reason);\r
    });\r
  }\r
\r
  /**\r
   * 得到一个新的Promise\r
   * 该Promise的状态取决于proms的执行\r
   * proms是一个迭代器，包含多个Promise\r
   * 全部Promise成功，则返回的Promise成功，数据为所有Promise成功的数据，并且顺序是按照传入的顺序排列\r
   * 只要有一个Promise失败，则返回的Promise失败，原因是第一个失败的Promise的原因\r
   * @param {iterator} proms\r
   */\r
  static all(proms) {\r
    return new MyPromise((resolve, reject) => {\r
      try {\r
        const results = [];\r
        let count = 0; // Promise的总数\r
        let fulfilledCount = 0; // 已完成的数量\r
        for (const p of proms) {\r
          let i = count;\r
          count++;\r
          MyPromise.resolve(p).then((data) => {\r
            fulfilledCount++;\r
            results[i] = data;\r
            if (fulfilledCount === count) {\r
              // 当前是最后一个Promise完成了\r
              resolve(results);\r
            }\r
          }, reject);\r
        }\r
        if (count === 0) {\r
          resolve(results);\r
        }\r
      } catch (error) {\r
        reject(error);\r
        console.error(error);\r
      }\r
    });\r
  }\r
\r
  /**\r
   * 等待所有的Promise有结果之后\r
   * 该方法返回的Promise完成\r
   * 并且按照顺序将所有结果汇总\r
   * @param {iterator} proms\r
   */\r
  static allSettled(proms) {\r
    const ps = [];\r
    for (const p of proms) {\r
      ps.push(\r
        MyPromise.resolve(p).then(\r
          (value) => ({\r
            status: FULFILLED,\r
            value,\r
          }),\r
          (reason) => ({\r
            status: REJECTED,\r
            reason,\r
          }),\r
        ),\r
      );\r
    }\r
    return MyPromise.all(ps);\r
  }\r
\r
  /**\r
   * 返回的Promise与第一个有结果的一致\r
   * @param {iterator} proms\r
   */\r
  static race(proms) {\r
    return new MyPromise((resolve, reject) => {\r
      for (const p of proms) {\r
        MyPromise.resolve(p).then(resolve, reject);\r
      }\r
    });\r
  }\r
}\r
\r
\`\`\`\r
\r
\r
\r
------\r
\r
至此Promise的手写结束\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
`,Bh=`---
title: CSS 布局技巧：Flex 与 Grid 实战
date: 2026-06-13
tags: [Basic]
summary: 梳理 Flexbox 和 Grid 的核心用法与常见布局模式。
---

## Flexbox 核心概念

Flex 解决的是一维布局问题——要么横向、要么纵向。

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
\`\`\`

### 常用布局模式

- **导航栏**：两端对齐 + 居中
- **卡片列表**：\`flex-wrap: wrap\` + \`gap\`
- **垂直居中**：\`align-items: center\` + \`justify-content: center\`

## Grid 核心概念

Grid 解决的是二维布局——行和列同时控制。

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
\`\`\`

### Grid  vs Flex

| 场景 | 选择 |
|------|------|
| 一维排列（导航、列表） | Flexbox |
| 二维布局（页面、仪表盘） | Grid |
| 响应式卡片 | Grid（auto-fill） |

## 小结

两者不是互斥的，实际项目中经常混用——外层用 Grid 分区域，内层用 Flex 排列内容。
`,Vh=`---
title: Hello World — 我的第一篇博客
date: 2026-06-10
tags: [Basic]
summary: 这是博客的第一篇文章，记录搭建过程与所思所想。
---

## 为什么写博客

写博客是我一直想做的事情。与其在各种平台上零散地发布内容，不如拥有一个属于自己的空间。

### 技术选型

这个博客使用 **Vue 3 + TypeScript + Vite** 构建，UI 组件库是 **Naive UI**，文章直接用 Markdown 编写。

\`\`\`typescript
// 项目技术栈
const stack = {
  framework: 'Vue 3',
  language: 'TypeScript',
  build: 'Vite',
  ui: 'Naive UI',
  posts: 'Markdown',
}
\`\`\`

## 计划写什么

我会在这里记录：

- 前端开发中的技巧与踩坑
- 开源项目的使用心得
- 偶尔的生活随笔

> 种一棵树最好的时间是十年前，其次是现在。
`,Hh=`---\r
title: 流式接口的调用\r
date: 2026-06-14\r
tags: [Basic]\r
summary: 详解流式接口调用实现，涵盖fetch stream、ReadableStream处理及中止控制器用法。\r
---\r
\r
## 流式接口的调用\r
\r
\`\`\`js\r
async function fetchStream(url, data, onChunk, onComplete, onError){\r
    // 中止的请求控制器\r
    const controller = new AbortController()\r
    // 发起一个请求\r
    const response = await fetch(\`http://.../\${url}\`,{\r
        methods: "POST",\r
        headers: {\r
            "content-Type": "application/json"\r
		}\r
        body: JSON.stringify(data),\r
        signal: controller.signal // controller中有一个signal属性\r
    })\r
    \r
    // 获取响应体的可读流读取器\r
    const reader = response.body.getReader()\r
    // 将二进制流数据解码为文本\r
    const decoder = new TextDecoder()\r
    \r
    // 流数据解码\r
    while(true){\r
        const {done, value} = await reader.read()\r
        if(done) break\r
        const chunk = decoder.decode(value, {stream: true})\r
        const lines = chunk.split("/n").filter(line => line.trim()) \r
        for(const line of lines){\r
            if(line.startWith("data: ")){\r
                const jsonStr = line.subString(6)\r
                const jsonData = JSON.parse(jsonStr)\r
                // 返回每一块数据\r
                if(jsonData.type === 'chunk'){\r
                    onChunk(jsonData.content)\r
                }else if(jsonData.done){\r
                    onComplete()\r
                }else if(jsonData.error){\r
                    onError(jsonData.error)\r
                }\r
			}\r
        }\r
    }\r
    controller.abort()\r
}\r
\`\`\`\r
\r
## 流式接口的使用\r
\r
\`\`\`js\r
const message = ref([])\r
const isStreaming = ref(false)\r
\r
// 获取ai响应\r
const getAIresponse = (userMessage) =>{\r
    isStream.value = true\r
    message.value.push({\r
        id: Date.now() + 1,\r
        role: "ai",\r
        content: "",\r
        timestamp: new Date().toISOString()\r
    })\r
    let fullResponse = ''\r
    fetchStream(\r
        "chat", \r
        { message: userMessage }, \r
        (chunk) =>{\r
        	fullResponse += chunk\r
        	const lastMsg = message.value[message.value.length - 1]\r
        	if(lastMsg && lastMsg,role === "ai"){\r
            	lastMsg.content = fullResponse\r
        	}\r
        	scrollToButtom()\r
    	},\r
       	() =>{\r
        	// AI返回完成\r
            isStreaming.value = false\r
            scrollToButtom()\r
     	},\r
        (errMsg) =>{\r
            const lastMsg = message.value[message.value.length - 1]\r
            if(lastMsg && lastMsg.role === "ai"){\r
                lastMsg.content = \`抱歉，ai发生错误: \${errMsg}\`\r
            }\r
            isStreaming.value = false\r
            showToast("ai回复失败")\r
            scrollToButtom()\r
        }\r
    )\r
}\r
\r
\`\`\`\r
\r
`,Uh=`---
title: Vue 3 Composition API 实践指南
date: 2026-06-14
tags: [Frame]
summary: 深入理解 Composition API 的设计思想与实战技巧。
---

## 从 Options API 到 Composition API

Vue 3 引入的 Composition API 并不是为了替代 Options API，而是提供了一种更灵活的代码组织方式。

### Setup 语法糖

\`<script setup>\` 是目前最简洁的写法：

\`\`\`vue
<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)

function increment() {
  count.value++
}
<\/script>

<template>
  <button @click="increment">
    Count: {{ count }} (doubled: {{ doubled }})
  </button>
</template>
\`\`\`

### 自定义 Hook

逻辑复用的最佳方式：

\`\`\`typescript
// useCounter.ts
export function useCounter(initial = 0) {
  const count = ref(initial)
  const doubled = computed(() => count.value * 2)

  function increment() { count.value++ }
  function decrement() { count.value-- }

  return { count, doubled, increment, decrement }
}
\`\`\`

## 与 TypeScript 的配合

Composition API 天然适合 TypeScript，类型推导非常流畅：

\`\`\`typescript
interface Post {
  title: string
  date: string
  tags: string[]
}

const posts = ref<Post[]>([])
// 完美的类型提示
\`\`\`

## 小结

- Composition API ≠ 更好的 Options API，而是解决不同问题
- \`<script setup>\` + TypeScript 是推荐组合
- 善用自定义 Hook 抽离逻辑
`,Wh=`---\r
title: Vue中reactive的简单实现\r
date: 2026-06-15\r
tags: [Frame]\r
summary: 深入理解Vue响应式原理，手写reactive、依赖收集track与触发更新trigger的实现。\r
---\r
\r
## vue中reactive的简单实现\r
\r
要想实现vue中的reactive，首先我们要了解响应式的原理，其实就是Proxy +  **依赖收集（track）** 与 **触发更新（trigger）**。\r
\r
由于我是在node.js中使用的**ES Modules**\r
\r
第一步:\r
\r
\`\`\`bash\r
npm init\r
\`\`\`\r
\r
在生成的package.json中添加type属性，并设值为module\r
\r
\`\`\`json\r
{\r
  "name": "demo4",\r
  "version": "1.0.0",\r
  "description": "",\r
  "type": "module", // 加入这一属性\r
  "main": "index.js",\r
  "scripts": {\r
    "test": "echo \\"Error: no test specified\\" && exit 1"\r
  },\r
  "keywords": [],\r
  "author": "",\r
  "license": "ISC",\r
  "packageManager": "pnpm@10.28.2"\r
}\r
\r
\`\`\`\r
\r
在当前文件目录下创建reactive.js文件，该文件就是我们要实现的reactive。\r
\r
创建一个handlers的文件夹，在handlers文件加下创建index.js文件和一个behavior的文件夹，在behavior文件夹下面创建getHandler.js, setHandler.js, hasHandler.js, ownKeysHandler.js, deleteHandler.js。在index.js默认导出的是一个对象如下代码示例\r
\r
\`\`\`js\r
import getHandler from "./behavior/getHandler.js";\r
import setHandler from "./behavior/setHandler.js";\r
import hasHandler from "./behavior/hasHandler.js";\r
import ownKeysHandler from "./behavior/ownKeysHandler.js";\r
import deleteHandler from "./behavior/deleteHandler.js";\r
\r
export default {\r
  get: getHandler,\r
  set: setHandler,\r
  has: hasHandler,\r
  ownKeys: ownKeysHandler,\r
  deleteProperty: deleteHandler,\r
};\r
\r
\`\`\`\r
\r
在 Vue 3 的 \`reactive\` 实现中，\`handlers\` 是一个**捕获器对象**，它定义了代理对象 \`proxy\` 对各种操作（如属性读取、赋值、删除等）的自定义行为。正是通过这个对象，Vue 实现了依赖收集（\`track\`）和触发更新（\`trigger\`）\r
\r
\r
\r
接下来在与reactive.js同级目录下创建一个utils.js的文件，用来存储需要用到的通用方法。\r
\r
判断target是否为一个对象\r
\r
\`\`\`js\r
// 判断是否为一个对象\r
export function isObject(value) {\r
  return typeof value === "object" && value !== null;\r
}\r
\r
\`\`\`\r
\r
然后准备工作做的差不多了, 在reactive.js中写下面的代码\r
\r
\`\`\`js\r
import handlers from "./handlers/index.js";\r
import { isObject } from "./utils.js"; \r
\r
const proxyMap = new WeakMap();\r
\r
export default function reactive(target) {\r
  // 判断target是否为一个对象\r
  if (!isObject(target)) {\r
    return target;\r
  }\r
\r
  if (proxyMap.has(target)) {\r
    return proxyMap.get(target);\r
  }\r
\r
  const proxy = new Proxy(target, handlers);\r
\r
  proxyMap.set(target, proxy);\r
\r
  return proxy;\r
}\r
\r
\`\`\`\r
\r
# WeakMap vs Map 的关键区别\r
\r
\r
\r
| 特性             | Map                                   | WeakMap                                                    |\r
| ---------------- | ------------------------------------- | ---------------------------------------------------------- |\r
| **键的类型**     | 任意值（对象、原始类型）              | **只能是对象**                                             |\r
| **对键的引用**   | **强引用**                            | **弱引用**                                                 |\r
| **垃圾回收影响** | 只要 Map 存在，键对象就不会被 GC 回收 | 键对象若没有其他引用，可被 GC 回收，WeakMap 自动删除该条目 |\r
| **可迭代性**     | 可迭代，有 \`size\`、\`forEach\` 等方法   | 不可迭代，无 \`size\`，无法获取所有键                        |\r
\r
## 2. 为什么这里必须用 WeakMap？\r
\r
\`proxyMap\` 的作用是**缓存原始对象 → 代理对象**的映射，避免重复代理。\r
\r
- 如果用 \`Map\`：当你不再需要原始对象 \`target\` 时（比如 \`target = null\`），由于 \`proxyMap\` 中仍然持有 \`target\` 这个键（强引用），垃圾回收器无法回收 \`target\` 对象。**内存会一直保留**，导致内存泄漏。\r
- 如果用 \`WeakMap\`：键是弱引用，当 \`target\` 没有其他引用时（如变量被置空、函数执行完毕），垃圾回收器可以回收 \`target\`，同时 \`WeakMap\` 中对应的条目会自动消失。**不会造成内存泄漏**。\r
\r
## 3. 实际场景举例\r
\r
js\r
\r
\`\`\`\r
let obj = { a: 1 };\r
const rObj = reactive(obj);      // proxyMap 中存入 { obj → rObj }\r
obj = null;                      // 原对象不再被使用\r
\r
// 如果 proxyMap 是 Map -> obj 仍然被 Map 引用，无法回收，内存泄漏\r
// 如果 proxyMap 是 WeakMap -> obj 可以被回收，WeakMap 自动清理条目\r
\`\`\`\r
\r
在大型应用或长期运行的 Node.js 服务中，这种区别至关重要。\r
\r
## 4. 为什么不直接用 Map 并手动删除？\r
\r
理论上你可以在不需要时调用 \`proxyMap.delete(target)\`，但：\r
\r
- 开发者容易忘记手动删除，导致泄漏。\r
- 响应式系统内部无法知道外部何时不再需要原始对象。\r
- \`WeakMap\` 自动管理，零成本、更安全。\r
\r
## 5. 其他细节\r
\r
- \`WeakMap\` 的键必须是对象，而 \`target\` 正好是对象（\`reactive\` 只代理对象，原始值直接返回），类型匹配。\r
- \`WeakMap\` 不可迭代，此处不需要遍历，只需要通过 \`target\` 精确查找代理，完全满足需求。\r
\r
**结论**：用 \`WeakMap\` 是为了让不再使用的原始对象能被垃圾回收，防止内存泄漏，这也是 Vue 3 响应式系统设计的精妙之处。\r
\r
\r
\r
然后就是核心，创建一个effect的文件夹，在文件夹里面有两个文件，一个是track.js另一个是trigger.js，分别代表依赖收集和派发更新\r
\r
先在utils.js文件中新增trackOpType，表定义跟踪操作类型\r
\r
\`\`\`js\r
// 判断是否为一个对象\r
export function isObject(value) {\r
  return typeof value === "object" && value !== null;\r
}\r
\r
// 定义跟踪操作类型\r
export const trackOpType = {\r
  GET: "get",\r
  HAS: "has",\r
  ITERATE: "iterate",\r
};\r
\r
\`\`\`\r
\r
下面是track.js中的代码\r
\r
\`\`\`js\r
// 依赖收集\r
import { trackOpType } from "../utils.js";\r
\r
// 控制是否进行依赖收集\r
let activeEffect = true;\r
\r
// 暂停依赖收集\r
export function pauseTracking() {\r
  activeEffect = false;\r
}\r
\r
// 恢复依赖收集\r
export function resumeTracking() {\r
  activeEffect = true;\r
}\r
\r
export default function track(target, key, type) {\r
  // 先进性依赖收集的判断，如果当前不需要进行依赖收集，则直接返回\r
  if (!activeEffect) {\r
    return;\r
  }\r
\r
  // 追踪迭代操作时，key为ITERATE_KEY\r
  if (type === trackOpType.ITERATE) {\r
    console.log(\`追踪器: 代理对象的\${key}属性的\${type}属性被追踪\`);\r
    return;\r
  }\r
\r
  console.log(\`追踪器: 代理对象的\${key}属性的\${type}属性被追踪\`);\r
}\r
\r
\`\`\`\r
\r
下面是trigger.js中的代码\r
\r
\`\`\`js\r
// 派发更新\r
export default function trigger(target, key, type) {\r
  console.log(\`触发器: 代理对象的\${key}属性的\${type}属性被拦截\`);\r
}\r
\r
\`\`\`\r
\r
ok, 接下来该分别实现getHandler.js, setHandler.js, hasHandler.js, ownKeysHandler.js, deleteHandler.js文件中的内容。\r
\r
首先先实现getHandler.js文件\r
\r
\`\`\`js\r
import track from "../../effect/track.js";\r
import { trackOpType, isObject } from "../../utils.js";\r
import reactive from "../../reactive.js";\r
\r
export default function (target, key) {\r
  // 拦截到get操作后需要进行的一些操作, 就是依赖收集\r
  track(target, key, trackOpType.GET);\r
\r
  const result = Reflect.get(target, key);\r
\r
  // 如果获取到的结果是一个对象, 则需要继续进行代理\r
  if (isObject(result)) {\r
    return reactive(result);\r
  }\r
\r
  return result;\r
}\r
\r
\`\`\`\r
\r
接下来是实现setHandler.js文件\r
\r
\`\`\`js\r
import trigger from "../../effect/trigger.js";\r
import { triggerOpType, hasChange } from "../../utils.js";\r
\r
export default function set(target, key, value) {\r
  // 先判断key属性是否是已有属性，如果是已有属性，则是修改操作，否则是新增操作\r
  const hasKey = target.hasOwnProperty(key)\r
    ? triggerOpType.SET\r
    : triggerOpType.ADD;\r
\r
  // 先存target的旧值，方便下面的新旧值比较，如果新值等于旧值，触发器就不用触发\r
  const oldValue = target[key];\r
\r
  const result = Reflect.set(target, key, value);\r
\r
  // 判断新旧值是否相等\r
  if (hasChange(oldValue, value)) {\r
    trigger(target, key, hasKey);\r
  }\r
\r
  return result;\r
}\r
\r
\`\`\`\r
\r
此时的utils.js文件又新增了一些内容\r
\r
\`\`\`js\r
// 判断是否为一个对象\r
export function isObject(value) {\r
  return typeof value === "object" && value !== null;\r
}\r
\r
// 判断新旧值是否相等\r
export function hasChange(oldValue, newValue) {\r
  return !Object.is(oldValue, newValue);\r
}\r
\r
// 定义跟踪操作类型\r
export const trackOpType = {\r
  GET: "get",\r
  HAS: "has",\r
  ITERATE: "iterate",\r
};\r
\r
// 定义触发操作类型\r
export const triggerOpType = {\r
  SET: "set",\r
  ADD: "add",\r
  DELETE: "delete",\r
};\r
\r
\`\`\`\r
\r
接下来就是实现hasHandler.js文件\r
\r
\`\`\`js\r
import track from "../../effect/track.js";\r
import { trackOpType } from "../../utils.js";\r
\r
export default function (target, key) {\r
  track(target, key, trackOpType.HAS);\r
  const result = Reflect.has(target, key);\r
  return result;\r
}\r
\r
\`\`\`\r
\r
接下来就是实现ownKeysHandler.js文件\r
\r
\`\`\`js\r
import track from "../../effect/track.js";\r
import { trackOpType } from "../../utils.js";\r
\r
export default function (target) {\r
  track(target, undefined, trackOpType.ITERATE);\r
  const result = Reflect.ownKeys(target);\r
  return result;\r
}\r
\r
\`\`\`\r
\r
接下来就是实现deleteHandler.js文件\r
\r
\`\`\`js\r
import trigger from "../../effect/trigger.js";\r
import { triggerOpType } from "../../utils.js";\r
\r
export default function (target, key) {\r
  // 先判断target中是否存在key属性\r
  const hasKey = target.hasOwnProperty(key);\r
\r
  const result = Reflect.deleteProperty(target, key);\r
\r
  // 如果删除成功，并且target中存在key属性，则说明是删除操作，触发器需要触发\r
  if (result && hasKey) {\r
    trigger(target, key, triggerOpType.DELETE);\r
  }\r
\r
  return result;\r
}\r
\r
\`\`\`\r
\r
至此reactive的功能完成的差不多了，但是，还没有出处理当target为数组的情况，对于数组的处理，相对来说比较复杂，没关系，一点一点的去实现\r
\r
\r
\r
\r
\r
\r
\r
`,Gh=`---
title: 低代码问卷系统 — 面试讲解文档
date: 2026-06-16
tags: [Project]
summary: 低代码问卷系统项目完整讲解，涵盖架构设计、核心模块与技术选型，适合面试场景。
---

# 低代码问卷系统 — 面试讲解文档

## 一、项目概述

**项目名称**：低代码问卷系统（LowCode Survey Builder）

**项目定位**：一个基于 **Vue 3 + TypeScript** 的低代码/零代码问卷构建平台。用户无需编写任何代码，通过点击和拖拽即可快速搭建各类问卷表单，支持题目编辑、样式配置、数据持久化、在线发布和 PDF 导出。

**技术栈**：

| 层级 | 技术选型 |
|------|----------|
| 前端框架 | Vue 3 (Composition API + \`<script setup>\`) + TypeScript |
| 构建工具 | Vite 6 |
| UI 组件库 | Element Plus (中文版) |
| 状态管理 | Pinia |
| 路由 | Vue Router 4 |
| 客户端数据库 | Dexie.js (IndexedDB 封装) |
| 拖拽排序 | vuedraggable (Vue 3) |
| 事件总线 | mitt |
| 后端服务 | Express.js + multer |
| 图标库 | Font Awesome + Element Plus Icons |
| CSS 预处理 | SCSS (Sass Embedded) |

**核心功能**：
- 6 大类、25+ 种问卷题目组件（单选/多选/下拉/图片选择/文本输入/评分/日期/个人信息/联系方式等）
- 可视化画布编辑：点击添加题目、拖拽排序、实时样式调整
- 每个题目支持 10+ 种样式属性编辑（标题、描述、对齐方式、字号、粗细、斜体、颜色等）
- 问卷数据存入浏览器 IndexedDB，支持离线操作
- 问卷预览、PDF 导出（\`window.print\`）、在线答题链接生成
- 组件市场页面：预览每种题型的渲染效果

---

## 二、项目架构

### 2.1 整体目录结构

\`\`\`
lowCode/
├── server/                    # Express 后端服务
│   ├── server.js              # 图片上传 + 静态资源服务
│   └── uploads/               # 上传图片存储目录
└── wenjuan/                   # Vue 前端主项目
    ├── src/
    │   ├── components/        # 组件目录
    │   │   ├── Common/        # 通用组件 (Header 等)
    │   │   ├── Editor/        # 编辑器组件 (SurveyComGroup, SurveyComItem)
    │   │   └── SurveyComs/    # 问卷业务组件
    │   │       ├── Common/    # 公共渲染组件 (MaterialsHeader)
    │   │       ├── EditItems/ # 编辑组件 (TitleEditor, OptionsEditor...)
    │   │       └── Materials/ # 物料组件 (单选/多选/输入/评分...)
    │   ├── configs/           # 配置文件
    │   │   ├── componentMap.ts          # 组件名→组件实例映射表
    │   │   ├── SurveyGroupConfig.ts     # 题型分组配置
    │   │   └── defaultStatus/           # 各题型的默认状态工厂函数
    │   ├── db/                # IndexedDB 数据库层
    │   ├── router/            # 路由配置
    │   ├── stores/            # Pinia 状态管理
    │   ├── types/             # TypeScript 类型定义
    │   ├── utils/             # 工具函数
    │   └── views/             # 页面视图
    │       ├── EditorView/    # 编辑器页面 (LeftSide/Center/RightSide)
    │       ├── MaterialsView/ # 组件市场页面
    │       ├── HomeView.vue   # 首页（问卷列表）
    │       ├── Preview.vue    # 预览页
    │       └── QuizView.vue   # 在线答题页
    └── vite.config.ts         # Vite 配置（含代理配置）
\`\`\`

### 2.2 页面路由设计

| 路由路径 | 页面名称 | 功能说明 |
|----------|----------|----------|
| \`/\` | 首页 | 问卷列表（创建、编辑、删除、查看） |
| \`/materials\` | 组件市场 | 按分组预览所有可用题型组件 |
| \`/editor/:id?\` | 编辑器 | 三栏布局（题型面板 + 画布 + 属性面板） |
| \`/preview/:id\` | 预览页 | 问卷预览 + PDF导出 + 生在线答题链接 |
| \`/quiz/:id\` | 答题页 | 面向用户的在线答题页面 |

### 2.3 编辑器三栏布局

\`\`\`
┌─────────────────────────────────────────────────────┐
│                     Header (重置/保存)               │
├──────────┬──────────────────────┬───────────────────┤
│  LeftSide│       Center         │     RightSide     │
│ ┌──────┐ │   ┌──────────────┐   │  ┌─────────────┐ │
│ │ 题型  │ │   │   画布区域    │   │  │  属性编辑面板 │ │
│ │ 大纲  │ │   │ ┌────────┐  │    │  │ ┌─────────┐ │ │
│ │      │ │   │ │ 题目1  │  │     │  │ │标题编辑器 │ │ │
│ │      │ │   │ │ 题目2  │  │     │  │ │描述编辑器 │ │ │
│ │      │ │   │ │ 题目3  │  │     │  │ │选项编辑器 │ │ │
│ │      │ │   │ │  ...   │  │    │  │ │对齐编辑器 │ │ │
│ │      │ │   │ └────────┘  │    │  │ │字号编辑器 │ │ │
│ └──────┘ │   └──────────────┘   │  │ └─────────┘ │ │
│          │   支持拖拽排序         │  └─────────────┘ │
└──────────┴──────────────────────┴───────────────────┘
\`\`\`

---

## 三、核心设计思想

### 3.1 "组件即配置"架构 (Component-as-Config)

这是整个项目最核心的设计模式。**每个问卷题目都是一份 JSON 配置对象**，这份配置描述了：
- 该题目用哪个**业务组件**来渲染
- 该题目有哪些**可编辑属性**（标题、描述、选项、样式等）
- 每个可编辑属性由哪个**编辑组件**来控制

\`\`\`typescript
// 核心数据结构 Status
interface Status {
  type: VueComType;      // 业务组件（用于渲染题目外观）
  name: Material | string; // 题目类型名称（如 'single-select'）
  id: string;             // 唯一标识
  status: {               // 可编辑属性的集合
    [key: string]: TextProps | OptionsProps;
  };
}

// 文本类型属性（如标题、描述、颜色）
interface TextProps {
  id: string;
  isShow: boolean;       // 控制该编辑器是否在属性面板显示
  name: string;          // 编辑组件名称
  editCom: VueComType;   // 编辑组件实例
  status: string;        // 当前值
}

// 选项类型属性（如对齐方式、字号、粗细、选项列表）
interface OptionsProps {
  id: string;
  isShow: boolean;
  name: string;
  editCom: VueComType;
  status: string[] | ValueStatusArr | PicTitleDescStatusArr;
  currentStatus: number;  // 当前选中项的索引
}
\`\`\`

**设计优势**：
1. **数据驱动渲染**：整个问状态是一份纯 JSON 对象，可以直接序列化存入 IndexedDB
2. **高度可扩展**：新增一个题型只需写一个默认配置工厂函数 + 对应的业务组件和编辑组件
3. **编辑器和渲染器解耦**：同一个题目在画布中由业务组件渲染，在属性面板由编辑组件控制，互不影响

### 3.2 双 Store 架构

| Store | 职责 | 关键状态 |
|-------|------|----------|
| \`useEditorStore\` | 管理画布上的问卷数据 | \`coms[]\`（题目数组）、\`currentComponentIndex\`、\`surveyCount\` |
| \`useMaterialStore\` | 管理组件市场的素材模板 | \`currentMaterialCom\`、\`coms\`（所有题型模板的 Map） |

**为什么分两个 Store？**
- \`useEditorStore\` 存储的是**用户正在编辑的问卷实例数据**，支持增删改查
- \`useMaterialStore\` 存储的是**不可变的组件模板数据**，类似于"组件工厂"，每次添加到画布时都基于模板创建一个新的实例

### 3.3 组件映射表模式 (Component Map)

\`\`\`typescript
// configs/componentMap.ts
export const componentMap: ComponentMap = {
  // 业务组件
  'single-select': markRaw(SingleSelect),
  'multi-select': markRaw(MultiSelect),
  'text-note': markRaw(TextNote),
  // ... 30+ 组件
  // 编辑组件
  'title-editor': markRaw(TitleEditor),
  'options-editor': markRaw(OptionsEditor),
  // ... 10+ 编辑组件
};
\`\`\`

使用 \`markRaw()\` 标记组件使其不被 Vue 响应式系统代理，因为组件实例不需要响应式追踪，可以显著提升性能。

组件映射表使得**动态组件渲染**变得极其简洁：
\`\`\`vue
<!-- 画布中动态渲染题目 -->
<component :is="com.type" :status="com.status" />

<!-- 属性面板中动态渲染编辑器 -->
<component :is="item.editCom" :config-key="key" v-bind="item" />
\`\`\`

---

## 四、数据流设计

### 4.1 添加题目的完整流程

\`\`\`
用户点击「单选」按钮
  │
  ▼
SurveyComItem.addSurveyCom()
  │
  ├─ 调用 defaultStatusMap['single-select']() 获取默认配置
  ├─ 调用 updateInitStatusBeforeAdd() 设置个性化初始值
  ├─ 调用 editorStore.addCom(newStatus) 添加到画布
  │     ├─ coms.push(newStatus)
  │     ├─ surveyCount++ (判断是题目类型)
  │     └─ currentComponentIndex = -1
  └─ EventBus.emit('scrollToBottom') 滚动画布到底部
\`\`\`

### 4.2 属性编辑的数据流

\`\`\`
用户在属性面板修改「标题字号」
  │
  ▼
editCom 组件 emit('updateStatus', 'titleSize', 1)
  │
  ▼
RightSide.vue 的 updateStatus(configKey, payload)
  │
  ├─ 根据 configKey 判断是文本属性还是选项属性
  ├─ 从 currentCom.status[configKey] 拿到目标属性对象
  └─ 调用对应的 store action
       │
       ├─ setCurrentStatus(optionProps, payload)  // 更新 currentStatus
       └─ 或 setTextStatus(textProps, payload)    // 更新 status 值
  │
  ▼
业务组件通过 computed() 响应式更新渲染
\`\`\`

### 4.3 数据持久化流程

\`\`\`
保存问卷
  │
  ├─ JSON.parse(JSON.stringify(store.coms))  // 深拷贝，剥离 Vue 响应式代理
  └─ db.survey.add({ createDate, updateDate, title, surveyCount, coms })
       │
       └─ 存入 IndexedDB (通过 Dexie.js)
\`\`\`

**关键处理**：\`restoreComponentStatus()\` 函数在从 IndexedDB 读取数据时，根据序列化数据中的 \`name\` 字段从 \`componentMap\` 重新绑定组件实例，因为 Vue 组件实例不能被 JSON 序列化。

---

## 五、组件体系

### 5.1 业务组件（25 种题型）

| 分组 | 组件 | 说明 |
|------|------|------|
| **选择题** | SingleSelect | 单选题（Radio） |
| | MultiSelect | 多选题（Checkbox） |
| | OptionSelect | 下拉选择题（Select） |
| | SinglePicSelect | 图片单选题 |
| | MultiPicSelect | 图片多选题 |
| **文本输入** | TextInput | 文本输入（单行/多行） |
| **高级题型** | RateScore | 评价/打分（星级评分） |
| | DateTime | 日期/时间选择器 |
| **备注说明** | TextNote | 备注说明文本（标题/段落模式） |
| **个人信息** | personal-info-name | 姓名 |
| | personal-info-gender | 性别 |
| | personal-info-age | 年龄 |
| | personal-info-education | 学历 |
| | ... | 共 12 种个人信息字段 |
| **联系方式** | personal-info-tel | 手机号 |
| | personal-info-email | 邮箱 |
| | ... | 共 5 种联系方式字段 |

### 5.2 编辑组件（12 种属性编辑器）

| 编辑器 | 控制的属性 | 实现方式 |
|--------|-----------|----------|
| TitleEditor | 标题文本 | \`el-input\` |
| DescEditor | 描述文本 | \`el-input\` textarea |
| OptionsEditor | 选项列表（增删改） | \`el-input\` + 动态列表 |
| PicOptionsEditor | 图片选项（含上传） | 文件上传 + 图片预览 |
| PositionEditor | 对齐方式 | 按钮组（左对齐/居中） |
| SizeEditor | 字号 | 按钮组（大/中/小） |
| WeightEditor | 字体粗细 | 按钮组（加粗/正常） |
| ItalicEditor | 斜体 | 按钮组（斜体/正常） |
| ColorEditor | 字体颜色 | \`el-color-picker\` |
| TextTypeEditor | 文本类型（标题/段落） | 按钮组切换 |
| TextInputTypeEditor | 输入框类型（单行/多行） | 按钮组 |
| DateTimeTypeEditor | 日期类型（年/月/日/周） | 按钮组 |
| RateTextEditor | 评分文本 + 是否显示文本 | 文本编辑 + 开关 |

### 5.3 公共组件

- **MaterialsHeader**：统一的题目头部渲染组件（编号 + 标题 + 描述 + 全部样式），所有业务组件共用
- **PicItem**：图片选项的通用渲染组件
- **EditPannel**：属性编辑面板容器，根据 \`isShow\` 过滤显示哪些编辑器

---

## 六、技术亮点

### 6.1 TypeScript 类型安全体系

项目中使用了丰富的 TypeScript 类型守卫（Type Guards）来确保运行时类型安全：

\`\`\`typescript
// 类型谓词函数确保类型安全
export function isSurveyComName(value: string): value is SurveyComName {
  return SurveyComNameArr.includes(value as SurveyComName)
}

export function IsOptionsStatus(status): status is OptionsStatus {
  return 'options' in status
}

export function isStringArray(status: StatusArray): status is string[] {
  return Array.isArray(status) && typeof status[0] === 'string'
}
\`\`\`

### 6.2 IndexedDB 客户端持久化

使用 Dexie.js 对 IndexedDB 进行了简洁封装：

\`\`\`typescript
class SurveyDateBase extends Dexie {
  survey!: Table<SurveyDBData, number>;
  constructor() {
    super('SurveyDateBase');
    this.version(1).stores({
      survey: '++id, createDate, updateDate, title, SurveyCount, com'
    });
  }
}
\`\`\`

优势：**离线可用**、无需后端数据库、数据完全存于用户浏览器。

### 6.3 mitt 事件总线解耦

用于大纲面板与画布之间的通信：

\`\`\`typescript
// 事件类型定义
type Events = {
  scrollToBottom: void;    // 添加题目后滚动到底部
  scrollToCenter: number;  // 大纲点击后滚动到对应题目
};
\`\`\`

### 6.4 动态组件 + provide/inject

属性面板通过 \`provide('updateStatus', updateStatus)\` 向所有编辑组件注入统一的属性更新方法，编辑组件无需关心具体业务逻辑，只需 emit 配置键和新值即可。

### 6.5 PDF 导出方案

利用浏览器原生的 \`window.print()\` + CSS \`@media print\` 实现 PDF 导出：

\`\`\`css
@media print {
  .no-print { display: none; }  /* 隐藏按钮等交互元素 */
  .no-border { border: none; box-shadow: none; }  /* 清理边框阴影 */
}
\`\`\`

并实现了 \`isUseForPDF()\` 函数来校验哪些组件类型支持 PDF 导出。

### 6.6 vuedraggable 拖拽排序

画布和大纲都集成了拖拽排序功能，用户可以直接拖拽题目调整顺序，底层直接操作 \`store.coms\` 数组。

### 6.7 图片上传

后端使用 Express + multer 处理图片上传，前端在 PicOptionsEditor 中集成上传功能，支持图片选择组件自定义配图。

---

## 七、项目难点与解决方案

### 7.1 组件实例的序列化与反序列化

**难点**：Vue 组件实例不能被 \`JSON.stringify\` 序列化，但问卷数据需要存入 IndexedDB。

**解决**：
- 保存时：使用 \`JSON.parse(JSON.stringify(coms))\` 深拷贝，组件引用自然丢失
- 加载时：\`restoreComponentStatus()\` 根据 \`name\` 字段从 \`componentMap\` 重新绑定组件实例

\`\`\`typescript
export const restoreComponentStatus = (coms: Status[]) => {
  coms.forEach((com) => {
    com.type = componentMap[com.name];
    for (const key in com.status) {
      com.status[key].editCom = componentMap[com.status[key].name];
    }
  });
};
\`\`\`

### 7.2 编辑组件显隐控制

**难点**：不同类型的题目有不同的属性编辑需求。例如"备注说明"的标题编辑在默认为"段落"模式时应该隐藏。

**解决**：每个编辑属性都有 \`isShow\` 布尔字段，EditPannel 通过 \`v-if="item.isShow"\` 控制渲染。切换标题/段落模式时，\`changeEditorIsShowStatus()\` 函数批量翻转所有相关编辑器的 \`isShow\` 状态。

### 7.3 个人信息组件的复用

**难点**：姓名、手机号、邮箱等 17 种个人信息字段，底层使用的组件相同（TextInput 或 SingleSelect），但默认标题和选项内容各不相同。

**解决**：通过 \`updateInitStatusBeforeAdd()\` 函数，在将组件模板添加到画布前，根据材料名称动态修改初始状态（标题文本、选项内容等），实现了**组件复用 + 数据差异化**。

---

## 八、个人贡献与技术成长

### 技术栈掌握
- **Vue 3 全家桶**：Composition API、Pinia、Vue Router 的深入实践
- **TypeScript**：泛型、类型守卫、联合类型、类型谓词函数的高级应用
- **工程化**：Vite 配置、ESLint + Prettier 代码规范、路径别名
- **浏览器存储**：IndexedDB（Dexie.js）的实际应用
- **前端架构设计**：组件即配置模式、数据驱动渲染、插件化编辑器系统

### 架构能力
- 设计了**双 Store 架构**分离模板数据和实例数据
- 设计了**组件映射表**模式实现动态组件的集中管理
- 设计了**可扩展的题型注册机制**：新增题型只需创建默认配置 + 业务组件 + 编辑组件，无需修改核心逻辑

### 工程化意识
- 完整的 TypeScript 类型定义体系（8 个类型文件）
- 使用 \`markRaw()\` 优化响应式性能
- 使用 \`v-if\` / \`v-show\` 的合理场景选择
- CSS \`@media print\` 实现打印友好

---

## 九、项目扩展方向（面试时可提及的思考）

1. **后端 API 完善**：QuizView 中引用了 \`/api/getQuiz/:id\`、\`/api/submitAnswers\`、\`/api/saveQuiz\` 等接口，目前 server.js 中仅实现了图片上传，后续可完善问卷数据的服务端存储和答案收集
2. **组件市场预览优化**：当前个人信息类组件在组件市场中没有体现个性化标题，可进一步优化初始化逻辑
3. **撤销/重做**：可引入命令模式或快照机制实现编辑器的撤销/重做功能
4. **协作编辑**：基于 WebSocket 或 CRDT 实现多人实时协作编辑
5. **表单校验**：在线答题页面可增加必填校验、格式校验等
6. **数据分析**：收集答题数据后可增加统计分析看板
`,Kh=`---\r
title: 常见js手写题\r
date: 2026-06-21\r
tags: [Project]\r
summary: 前端面试一些常见面试手写题。\r
---\r
\r
### 常见js手写题\r
\r
防抖函数\r
\r
\`\`\`js\r
function debounce(fn, delay, immediate = false) {\r
  const timer = null;\r
  return function (...args) {\r
    const callNow = immediate && !timer;\r
    clearTimeout(timer);\r
    timer = setTimeout(() => {\r
      timer = null;\r
      if (!immediate) fn.apply(this, args);\r
    }, delay);\r
    if (callNow) {\r
      fn.apply(this, args);\r
    }\r
  };\r
}\r
\`\`\`\r
\r
节流函数\r
\r
\`\`\`js\r
function throttle(fn, wait) {\r
  let lastTime = 0;\r
  return function (...args) {\r
    const nowTime = Date.now();\r
    if (nowTime - lasttime >= wait) {\r
      fn.apply(this, args);\r
      lastTime = nowTime;\r
    }\r
  };\r
}\r
\`\`\`\r
\r
flat\r
\r
\`\`\`js\r
// 栈\r
function flatten(arr){\r
    const result = []\r
    const stack = [...arr]\r
    while(stack.length > 0){\r
        const val = stack.pop()\r
        if(Array.isArray(val)){\r
            stack.push(...val)\r
        }else {\r
            result.push(val)\r
        }\r
    }\r
    return result.reverse()\r
}\r
\r
// 迭代器\r
fucntion* flatten(arr){\r
    for(const item of arr){\r
        if(Array.isArray(item)){\r
            yield* flatten(item)\r
        }else{\r
            yield item\r
        }\r
    }\r
}\r
\r
// 递归\r
function flatten(arr){\r
    const result = []\r
    for(const item of arr){\r
        if(Array.isArray(item)){\r
            result.push(...flatten(item))\r
        }else{\r
            result.push(item)\r
        }\r
    }\r
}\r
\r
const arr = [1, [2, [3, 4]], 5];\r
console.log(flatten(arr)); // [1, 2, 3, 4, 5]\r
\`\`\`\r
\r
instanceOf函数\r
\r
\`\`\`js\r
function MyInstanceOf(left, right) {\r
  if (typeof left !== "object" || left === null) {\r
    return false;\r
  }\r
\r
  const proto = Object.getPrototypeOf(left);\r
  const prototype = right.prototype;\r
\r
  while (proto) {\r
    if (proto === prototype) {\r
      return true;\r
    }\r
    proto = Object.getPrototypeOf(proto);\r
  }\r
\r
  return false;\r
}\r
\r
console.log(myInstanceof([], Array)); // true\r
\`\`\`\r
\r
手写Bind\r
\r
\`\`\`js\r
Fucntion.prototype.MyBind = function (ctx, ...args){\r
    const fn = this\r
    return function (...restArgs){\r
        // 判断是否是new进行调用\r
        if(new.tagret){\r
            return new fn.apply(ctx, [...args, ...restArgs])\r
        }\r
        return fn.apply(ctx, [...args, ...restArgs])\r
    }\r
}\r
\`\`\`\r
\r
手写call\r
\r
\`\`\`js\r
Function.prototype.MyCall = function (ctx, ...args) {\r
  ctx = ctx === null || ctx === undefined ? globalThis : Object(ctx);\r
  const fn = this;\r
  const key = Symbol();\r
  Object.defineProperty(ctx, key, {\r
    value: fn,\r
    enumerable: false,\r
  });\r
  const result = ctx[key](...args);\r
  delete ctx[key];\r
  return result;\r
};\r
\`\`\`\r
\r
new关键字\r
\r
\`\`\`js\r
function myNew(Constructor, ...args) {\r
  // 1. 类型检查：必须是函数\r
  if (typeof Constructor !== "function") {\r
    throw new TypeError(\`\${Constructor} is not a constructor\`);\r
  }\r
\r
  // 2. 使用 Reflect.construct 模拟 new 操作\r
  // 它会自动：\r
  //    - 创建一个新对象，并链接到 Constructor.prototype\r
  //    - 以 new 的方式调用 Constructor（对 class 合法）\r
  //    - 如果构造函数返回对象，则返回该对象；否则返回新创建的对象\r
  try {\r
    return Reflect.construct(Constructor, args);\r
  } catch (e) {\r
    // 如果 Constructor 是箭头函数或其他不可构造的值，会抛出 TypeError\r
    throw new TypeError(\r
      \`\${Constructor.name || "Constructor"} is not a constructor\`,\r
    );\r
  }\r
}\r
\r
// class Person {\r
//   constructor(name, age) {\r
//     this.name = name;\r
//     this.age = age;\r
//   }\r
// }\r
\r
function Person(name, age) {\r
  this.name = name;\r
  this.age = age;\r
}\r
\r
Person.prototype.sayHello = function () {\r
  console.log(\`Hello, I'm \${this.name}, \${this.age} years old.\`);\r
};\r
\r
const p = myNew(Person, "Alice", 18);\r
console.log(p.name);\r
console.log(p.age);\r
p.sayHello();\r
\r
console.log(p instanceof Person);\r
\`\`\`\r
\r
Promise手写\r
\r
\`\`\`js\r
// 记录Promise的三种状态\r
const PENDING = "pending";\r
const FULFILLED = "fulfilled";\r
const REJECTED = "rejected";\r
\r
/**\r
 * 运行一个微队列任务\r
 * 把传递的函数放到微队列中\r
 * @param {Function} callback\r
 */\r
function runMicroTask(callback) {\r
  // 判断node环境\r
  // 为了避免「变量未定义」的错误，这里最好加上前缀globalThis\r
  // globalThis是一个关键字，指代全局对象，浏览器环境为window，node环境为global\r
  if (globalThis.process && globalThis.process.nextTick) {\r
    process.nextTick(callback);\r
  } else if (globalThis.MutationObserver) {\r
    const p = document.createElement("p");\r
    const observer = new MutationObserver(callback);\r
    observer.observe(p, {\r
      childList: true, // 观察该元素内部的变化\r
    });\r
    p.innerHTML = "1";\r
  } else {\r
    setTimeout(callback, 0);\r
  }\r
}\r
\r
/**\r
 * 判断一个数据是否是Promise对象\r
 * @param {any} obj\r
 * @returns\r
 */\r
function isPromise(obj) {\r
  return !!(obj && typeof obj === "object" && typeof obj.then === "function");\r
}\r
\r
class MyPromise {\r
  /**\r
   * 创建一个Promise\r
   * @param {Function} executor 任务执行器，立即执行\r
   */\r
  constructor(executor) {\r
    this._state = PENDING; // 状态\r
    this._value = undefined; // 数据\r
    this._handlers = []; // 处理函数形成的队列\r
    try {\r
      executor(this._resolve.bind(this), this._reject.bind(this));\r
    } catch (error) {\r
      this._reject(error);\r
      console.error(error);\r
    }\r
  }\r
\r
  /**\r
   * 向处理队列中添加一个函数\r
   * @param {Function} executor 添加的函数\r
   * @param {String} state 该函数什么状态下执行\r
   * @param {Function} resolve 让then函数返回的Promise成功\r
   * @param {Function} reject 让then函数返回的Promise失败\r
   */\r
  _pushHandler(executor, state, resolve, reject) {\r
    this._handlers.push({\r
      executor,\r
      state,\r
      resolve,\r
      reject,\r
    });\r
  }\r
\r
  /**\r
   * 根据实际情况，执行队列\r
   */\r
  _runHandlers() {\r
    if (this._state === PENDING) {\r
      // 目前任务仍在挂起\r
      return;\r
    }\r
    while (this._handlers[0]) {\r
      const handler = this._handlers[0];\r
      this._runOneHandler(handler);\r
      this._handlers.shift();\r
    }\r
  }\r
\r
  /**\r
   * 处理一个handler\r
   * @param {Object} handler\r
   */\r
  _runOneHandler({ executor, state, resolve, reject }) {\r
    runMicroTask(() => {\r
      if (this._state !== state) {\r
        // 状态不一致，不处理\r
        return;\r
      }\r
\r
      if (typeof executor !== "function") {\r
        // 传递后续处理并非一个函数\r
        this._state === FULFILLED ? resolve(this._value) : reject(this._value);\r
        return;\r
      }\r
      try {\r
        const result = executor(this._value);\r
        if (isPromise(result)) {\r
          result.then(resolve, reject);\r
        } else {\r
          resolve(result);\r
        }\r
      } catch (error) {\r
        reject(error);\r
        console.error(error);\r
      }\r
    });\r
  }\r
\r
  /**\r
   * Promise A+规范的then\r
   * @param {Function} onFulfilled\r
   * @param {Function} onRejected\r
   */\r
  then(onFulfilled, onRejected) {\r
    return new MyPromise((resolve, reject) => {\r
      this._pushHandler(onFulfilled, FULFILLED, resolve, reject);\r
      this._pushHandler(onRejected, REJECTED, resolve, reject);\r
      this._runHandlers(); // 执行队列\r
    });\r
  }\r
\r
  /**\r
   * 仅处理失败的场景\r
   * @param {Function} onRejected\r
   */\r
  catch(onRejected) {\r
    return this.then(null, onRejected);\r
  }\r
\r
  /**\r
   * 无论成功还是失败都会执行回调\r
   * @param {Function} onSettled\r
   */\r
  finally(onSettled) {\r
    return this.then(\r
      (data) => {\r
        onSettled();\r
        return data;\r
      },\r
      (reason) => {\r
        onSettled();\r
        throw reason;\r
      },\r
    );\r
  }\r
\r
  /**\r
   * 更改任务状态\r
   * @param {String} newState 新状态\r
   * @param {any} value 相关数据\r
   */\r
  _changeState(newState, value) {\r
    if (this._state !== PENDING) {\r
      // 目前状态已经更改\r
      return;\r
    }\r
    // 下面这个判断是为了处理value为Promise的情况\r
    // 这一段代码课程中没有涉及，特此注释说明\r
    if (isPromise(value)) {\r
      value.then(this._resolve.bind(this), this._reject.bind(this));\r
      return;\r
    }\r
    this._state = newState;\r
    this._value = value;\r
    this._runHandlers(); // 状态变化，执行队列\r
  }\r
\r
  /**\r
   * 标记当前任务完成\r
   * @param {any} data 任务完成的相关数据\r
   */\r
  _resolve(data) {\r
    this._changeState(FULFILLED, data);\r
  }\r
\r
  /**\r
   * 标记当前任务失败\r
   * @param {any} reason 任务失败的相关数据\r
   */\r
  _reject(reason) {\r
    this._changeState(REJECTED, reason);\r
  }\r
\r
  /**\r
   * 返回一个已完成的Promise\r
   * 特殊情况：\r
   * 1. 传递的data本身就是ES6的Promise对象\r
   * 2. 传递的data是PromiseLike（Promise A+），返回新的Promise，状态和其保持一致即可\r
   * @param {any} data\r
   */\r
  static resolve(data) {\r
    if (data instanceof MyPromise) {\r
      return data;\r
    }\r
    return new MyPromise((resolve, reject) => {\r
      if (isPromise(data)) {\r
        data.then(resolve, reject);\r
      } else {\r
        resolve(data);\r
      }\r
    });\r
  }\r
\r
  /**\r
   * 得到一个被拒绝的Promise\r
   * @param {any}} reason\r
   */\r
  static reject(reason) {\r
    return new MyPromise((resolve, reject) => {\r
      reject(reason);\r
    });\r
  }\r
\r
  /**\r
   * 得到一个新的Promise\r
   * 该Promise的状态取决于proms的执行\r
   * proms是一个迭代器，包含多个Promise\r
   * 全部Promise成功，则返回的Promise成功，数据为所有Promise成功的数据，并且顺序是按照传入的顺序排列\r
   * 只要有一个Promise失败，则返回的Promise失败，原因是第一个失败的Promise的原因\r
   * @param {iterator} proms\r
   */\r
  static all(proms) {\r
    return new MyPromise((resolve, reject) => {\r
      try {\r
        const results = [];\r
        let count = 0; // Promise的总数\r
        let fulfilledCount = 0; // 已完成的数量\r
        for (const p of proms) {\r
          let i = count;\r
          count++;\r
          MyPromise.resolve(p).then((data) => {\r
            fulfilledCount++;\r
            results[i] = data;\r
            if (fulfilledCount === count) {\r
              // 当前是最后一个Promise完成了\r
              resolve(results);\r
            }\r
          }, reject);\r
        }\r
        if (count === 0) {\r
          resolve(results);\r
        }\r
      } catch (error) {\r
        reject(error);\r
        console.error(error);\r
      }\r
    });\r
  }\r
\r
  /**\r
   * 等待所有的Promise有结果之后\r
   * 该方法返回的Promise完成\r
   * 并且按照顺序将所有结果汇总\r
   * @param {iterator} proms\r
   */\r
  static allSettled(proms) {\r
    const ps = [];\r
    for (const p of proms) {\r
      ps.push(\r
        MyPromise.resolve(p).then(\r
          (value) => ({\r
            status: FULFILLED,\r
            value,\r
          }),\r
          (reason) => ({\r
            status: REJECTED,\r
            reason,\r
          }),\r
        ),\r
      );\r
    }\r
    return MyPromise.all(ps);\r
  }\r
\r
  /**\r
   * 返回的Promise与第一个有结果的一致\r
   * @param {iterator} proms\r
   */\r
  static race(proms) {\r
    return new MyPromise((resolve, reject) => {\r
      for (const p of proms) {\r
        MyPromise.resolve(p).then(resolve, reject);\r
      }\r
    });\r
  }\r
}\r
\`\`\`\r
`;function qh(e){let t=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);if(!t)return{attributes:{},body:e};let n=t[1],r=e.slice(t[0].length),i={};for(let e of n.split(/\r?\n/)){let t=e.indexOf(`:`);if(t===-1)continue;let n=e.slice(0,t).trim(),r=e.slice(t+1).trim();r.startsWith(`[`)&&r.endsWith(`]`)?i[n]=r.slice(1,-1).split(`,`).map(e=>e.trim()).filter(Boolean):i[n]=r}return{attributes:i,body:r}}var Jh=Object.assign({"/src/posts/Basic/Promise手写.md":zh,"/src/posts/Basic/css-layout-tricks.md":Bh,"/src/posts/Basic/hello-world.md":Vh,"/src/posts/Basic/流式接口的调用.md":Hh,"/src/posts/Frame/vue3-composition-api.md":Uh,"/src/posts/Frame/vue中reactive的简单实现.md":Wh,"/src/posts/Project/低代码问卷系统-面试讲解文档.md":Gh,"/src/posts/Project/常见js手写题.md":Kh}),Yh=null;function Xh(){return Yh||(Yh=Object.entries(Jh).map(([e,t])=>{let n=(e.split(`/`).pop()??``).replace(/\.md$/,``),{attributes:r,body:i}=qh(t);return{...r,slug:n,content:i}}).sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime()),Yh)}function Zh(e){return Xh().find(t=>t.slug===e)}function Qh(){let e=new Set;for(let t of Xh())for(let n of t.tags)e.add(n);return Array.from(e).sort()}var $h=`/MyBlog/imgs/shantian.jpg`,eg=Fr(`avatar`,()=>{let e=P($h);function t(t){e.value=t;try{localStorage.setItem(`blog-avatar`,t)}catch{}}function n(){try{let t=localStorage.getItem(`blog-avatar`);t&&(e.value=t)}catch{}}return{avatarSrc:e,setAvatar:t,loadAvatar:n}}),tg={class:`sidebar-header`},ng={class:`avatar-wrap`},rg=[`src`],ig={class:`avatar-modal`},ag={class:`avatar-preview-large`},og=[`src`],sg={width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,style:{"vertical-align":`-4px`,"margin-right":`5px`}},cg=De(R({__name:`MainLayout`,setup(e){let t=Lh(),r=Rh(),i=eg(),{avatarSrc:a}=Ir(i),o=P(!1),s=P(null);function l(){o.value=!0}function u(){s.value?.click()}function d(e){let t=e.target,n=t.files?.[0];if(!n)return;let r=new FileReader;r.onload=()=>{i.setAvatar(r.result)},r.readAsDataURL(n),t.value=``}m(()=>{i.loadAvatar()});let f=[{label:`首页`,key:`home`},{label:`归档`,key:`archives`},{label:`标签`,key:`tags`,children:Qh().map(e=>({label:e,key:`tag-${e}`}))},{label:`友链`,key:`links`},{label:`留言`,key:`guestbook`},{label:`关于`,key:`about`},{label:`AI助理`,key:`ai`}],h=I(()=>r.path===`/`?`home`:r.path===`/archives`?`archives`:r.path===`/links`?`links`:r.path===`/guestbook`?`guestbook`:r.path===`/about`?`about`:r.path===`/tags`?`tags`:r.path===`/ai`?`ai`:r.path.startsWith(`/tag/`)?`tag-${r.params.tag}`:null),g={home:`/`,archives:`/archives`,tags:`/tags`,links:`/links`,guestbook:`/guestbook`,about:`/about`,ai:`/ai`};function _(e){if(g[e])t.push(g[e]);else if(e.startsWith(`tag-`)){let n=e.replace(`tag-`,``);t.push(`/tag/${n}`)}}return(e,t)=>{let r=Ie(`router-link`),i=Mp,m=sp,g=Ie(`router-view`),v=np,y=tp,b=wd,x=Of;return c(),_e(j,null,[t[6]||=N(`a`,{href:`#main-content`,class:`skip-link`},`跳到主要内容`,-1),Ae(y,{"has-sider":``,class:`app-layout`},{default:p(()=>[Ae(m,{bordered:``,"collapse-mode":`transform`,"collapsed-width":0,width:260,class:`sidebar`},{default:p(()=>[N(`div`,tg,[N(`div`,{class:`avatar-container`,onClick:l},[N(`div`,ng,[N(`img`,{class:`avatar`,src:re(a),alt:`avatar`},null,8,rg)])]),Ae(r,{to:`/`,class:`blog-name`},{default:p(()=>[...t[1]||=[k(`一只做梦的鱼`,-1)]]),_:1}),t[2]||=N(`p`,{class:`blog-desc`},`记录技术与生活`,-1)]),Ae(i,{value:re(h),options:f,"root-indent":20,indent:12,"onUpdate:value":_},null,8,[`value`]),t[3]||=N(`div`,{class:`sidebar-footer`},[N(`span`,{class:`footer-text`},`Powered by Vue 3`)],-1)]),_:1}),Ae(v,{id:`main-content`,class:`content`},{default:p(()=>[Ae(g,null,{default:p(({Component:e})=>[Ae(Ht,{name:`page`,mode:`out-in`},{default:p(()=>[(c(),oe(n(e)))]),_:2},1024)]),_:1})]),_:1})]),_:1}),Ae(x,{show:re(o),"onUpdate:show":t[0]||=e=>O(o)?o.value=e:null,"mask-closable":!0,"transform-origin":`center`},{default:p(()=>[N(`div`,ig,[N(`div`,ag,[N(`img`,{src:re(a),alt:`avatar preview`},null,8,og)]),Ae(b,{type:`primary`,round:``,size:`large`,class:`change-avatar-btn`,onClick:u},{default:p(()=>[(c(),_e(`svg`,sg,[...t[4]||=[N(`path`,{d:`M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z`},null,-1),N(`circle`,{cx:`12`,cy:`13`,r:`4`},null,-1)]])),t[5]||=k(`更换头像 `,-1)]),_:1})])]),_:1},8,[`show`]),N(`input`,{ref_key:`fileInputRef`,ref:s,type:`file`,accept:`image/*`,style:{display:`none`},onChange:d},null,544)],64)}}}),[[`__scopeId`,`data-v-a08bda72`]]),lg=`modulepreload`,ug=function(e){return`/MyBlog/`+e},dg={},fg=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=ug(t,n),t in dg)return;dg[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:lg,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},pg=[{path:`/`,component:cg,children:[{path:``,name:`Home`,component:()=>fg(()=>import(`./Home-D-cto2sG.js`),__vite__mapDeps([0,1,2,3,4,5,6]))},{path:`post/:slug`,name:`Post`,component:()=>fg(()=>import(`./Post-Br-PLfof.js`),__vite__mapDeps([7,1,3,8,5,4,9]))},{path:`archives`,name:`Archives`,component:()=>fg(()=>import(`./Archives-Dk3S-tBe.js`),__vite__mapDeps([10,1,5,3,4,11]))},{path:`tags`,name:`Tags`,component:()=>fg(()=>import(`./Tags-B1cF3TUt.js`),__vite__mapDeps([12,1,13]))},{path:`tag/:tag`,name:`Tag`,component:()=>fg(()=>import(`./TagPosts-BKOiTO8W.js`),__vite__mapDeps([14,1,5,3,4,15]))},{path:`links`,name:`Links`,component:()=>fg(()=>import(`./Links-Wd-7R67m.js`),__vite__mapDeps([16,1,17]))},{path:`guestbook`,name:`Guestbook`,component:()=>fg(()=>import(`./Guestbook-C46X-sU0.js`),__vite__mapDeps([18,1,3,2,4,19]))},{path:`about`,name:`About`,component:()=>fg(()=>import(`./About-C3_WQ6bK.js`),__vite__mapDeps([20,1,21]))},{path:`ai`,name:`AI`,component:()=>fg(()=>import(`./AI-AUd3pqlb.js`),__vite__mapDeps([22,1,8,23]))}]}],mg=Ih({history:nh(`/MyBlog/`),routes:pg}),hg=er(Fp);hg.use(xr()),hg.use(mg),hg.mount(`#app`);export{Fr as A,Ro as C,q as D,ni as E,Xn as M,K as O,J as S,vi as T,Ll as _,Lh as a,ns as b,wd as c,au as d,eu as f,Rl as g,zl as h,Rh as i,Ir as j,Kr as k,gd as l,Jl as m,Qh as n,Mf as o,Xl as p,Zh as r,uf as s,Xh as t,su as u,ss as v,Do as w,rs as x,ts as y};