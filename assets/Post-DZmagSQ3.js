import{t as e}from"./MarkdownRender-D0akvfE6.js";import{D as t,Et as n,F as r,I as i,K as a,L as o,M as s,N as c,S as l,Tt as u,W as d,_ as f,a as p,ct as m,d as h,f as g,m as _,nt as v,ot as y,p as b,t as x,u as S,v as C,wt as w,y as T,z as E}from"./_plugin-vue_export-helper-DriX6Rb3.js";import{B as D,G as O,J as k,K as A,N as j,P as M,X as N,Y as P,Z as F,i as I,t as L,z as R}from"./light-DAv4VyBg.js";import{t as z}from"./Empty-CN35B23K.js";import{E as B,M as V,T as ee,a as H,b as U,f as W,g as G,i as K,r as q,w as J}from"./index-CnsHyFQ9.js";function Y(e){let{textColor2:t,primaryColorHover:n,primaryColorPressed:r,primaryColor:i,infoColor:a,successColor:o,warningColor:s,errorColor:c,baseColor:l,borderColor:u,opacityDisabled:d,tagColor:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,borderRadiusSmall:g,fontSizeMini:_,fontSizeTiny:v,fontSizeSmall:y,fontSizeMedium:b,heightMini:x,heightTiny:S,heightSmall:C,heightMedium:w,closeColorHover:T,closeColorPressed:E,buttonColor2Hover:O,buttonColor2Pressed:k,fontWeightStrong:A}=e;return Object.assign(Object.assign({},W),{closeBorderRadius:g,heightTiny:x,heightSmall:S,heightMedium:C,heightLarge:w,borderRadius:g,opacityDisabled:d,fontSizeTiny:_,fontSizeSmall:v,fontSizeMedium:y,fontSizeLarge:b,fontWeightStrong:A,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:l,colorCheckable:`#0000`,colorHoverCheckable:O,colorPressedCheckable:k,colorChecked:i,colorCheckedHover:n,colorCheckedPressed:r,border:`1px solid ${u}`,textColor:t,color:f,colorBordered:`rgb(250, 250, 252)`,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,closeColorHover:T,closeColorPressed:E,borderPrimary:`1px solid ${D(i,{alpha:.3})}`,textColorPrimary:i,colorPrimary:D(i,{alpha:.12}),colorBorderedPrimary:D(i,{alpha:.1}),closeIconColorPrimary:i,closeIconColorHoverPrimary:i,closeIconColorPressedPrimary:i,closeColorHoverPrimary:D(i,{alpha:.12}),closeColorPressedPrimary:D(i,{alpha:.18}),borderInfo:`1px solid ${D(a,{alpha:.3})}`,textColorInfo:a,colorInfo:D(a,{alpha:.12}),colorBorderedInfo:D(a,{alpha:.1}),closeIconColorInfo:a,closeIconColorHoverInfo:a,closeIconColorPressedInfo:a,closeColorHoverInfo:D(a,{alpha:.12}),closeColorPressedInfo:D(a,{alpha:.18}),borderSuccess:`1px solid ${D(o,{alpha:.3})}`,textColorSuccess:o,colorSuccess:D(o,{alpha:.12}),colorBorderedSuccess:D(o,{alpha:.1}),closeIconColorSuccess:o,closeIconColorHoverSuccess:o,closeIconColorPressedSuccess:o,closeColorHoverSuccess:D(o,{alpha:.12}),closeColorPressedSuccess:D(o,{alpha:.18}),borderWarning:`1px solid ${D(s,{alpha:.35})}`,textColorWarning:s,colorWarning:D(s,{alpha:.15}),colorBorderedWarning:D(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:D(s,{alpha:.12}),closeColorPressedWarning:D(s,{alpha:.18}),borderError:`1px solid ${D(c,{alpha:.23})}`,textColorError:c,colorError:D(c,{alpha:.1}),colorBorderedError:D(c,{alpha:.08}),closeIconColorError:c,closeIconColorHoverError:c,closeIconColorPressedError:c,closeColorHoverError:D(c,{alpha:.12}),closeColorPressedError:D(c,{alpha:.18})})}var X={name:`Tag`,common:L,self:Y},Z={color:Object,type:{type:String,default:`default`},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},Q=A(`tag`,`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[P(`strong`,`
 font-weight: var(--n-font-weight-strong);
 `),k(`border`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),k(`icon`,`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),k(`avatar`,`
 display: flex;
 margin: 0 6px 0 0;
 `),k(`close`,`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),P(`round`,`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[k(`icon`,`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),k(`avatar`,`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),P(`closable`,`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),P(`icon, avatar`,[P(`round`,`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),P(`disabled`,`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),P(`checkable`,`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[N(`disabled`,[O(`&:hover`,`background-color: var(--n-color-hover-checkable);`,[N(`checked`,`color: var(--n-text-color-hover-checkable);`)]),O(`&:active`,`background-color: var(--n-color-pressed-checkable);`,[N(`checked`,`color: var(--n-text-color-pressed-checkable);`)])]),P(`checked`,`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[N(`disabled`,[O(`&:hover`,`background-color: var(--n-color-checked-hover);`),O(`&:active`,`background-color: var(--n-color-checked-pressed);`)])])])]),te=Object.assign(Object.assign(Object.assign({},I.props),Z),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),ne=R(`n-tag`),re=T({name:`Tag`,props:te,slots:Object,setup(e){let t=v(null),{mergedBorderedRef:n,mergedClsPrefixRef:r,inlineThemeDisabled:a,mergedRtlRef:o,mergedComponentPropsRef:s}=M(e),c=S(()=>e.size||s?.value?.Tag?.size||`medium`),l=I(`Tag`,`-tag`,Q,X,e,r);i(ne,{roundRef:y(e,`round`)});function u(){if(!e.disabled&&e.checkable){let{checked:t,onCheckedChange:n,onUpdateChecked:r,"onUpdate:checked":i}=e;r&&r(!t),i&&i(!t),n&&n(!t)}}function d(t){if(e.triggerClickOnClose||t.stopPropagation(),!e.disabled){let{onClose:n}=e;n&&ee(n,t)}}let f={setTextContent(e){let{value:n}=t;n&&(n.textContent=e)}},p=U(`Tag`,o,r),m=S(()=>{let{type:t,color:{color:r,textColor:i}={}}=e,a=c.value,{common:{cubicBezierEaseInOut:o},self:{padding:s,closeMargin:u,borderRadius:d,opacityDisabled:f,textColorCheckable:p,textColorHoverCheckable:m,textColorPressedCheckable:h,textColorChecked:g,colorCheckable:_,colorHoverCheckable:v,colorPressedCheckable:y,colorChecked:b,colorCheckedHover:x,colorCheckedPressed:S,closeBorderRadius:C,fontWeightStrong:w,[F(`colorBordered`,t)]:T,[F(`closeSize`,a)]:E,[F(`closeIconSize`,a)]:D,[F(`fontSize`,a)]:O,[F(`height`,a)]:k,[F(`color`,t)]:A,[F(`textColor`,t)]:j,[F(`border`,t)]:M,[F(`closeIconColor`,t)]:N,[F(`closeIconColorHover`,t)]:P,[F(`closeIconColorPressed`,t)]:I,[F(`closeColorHover`,t)]:L,[F(`closeColorPressed`,t)]:R}}=l.value,z=V(u);return{"--n-font-weight-strong":w,"--n-avatar-size-override":`calc(${k} - 8px)`,"--n-bezier":o,"--n-border-radius":d,"--n-border":M,"--n-close-icon-size":D,"--n-close-color-pressed":R,"--n-close-color-hover":L,"--n-close-border-radius":C,"--n-close-icon-color":N,"--n-close-icon-color-hover":P,"--n-close-icon-color-pressed":I,"--n-close-icon-color-disabled":N,"--n-close-margin-top":z.top,"--n-close-margin-right":z.right,"--n-close-margin-bottom":z.bottom,"--n-close-margin-left":z.left,"--n-close-size":E,"--n-color":r||(n.value?T:A),"--n-color-checkable":_,"--n-color-checked":b,"--n-color-checked-hover":x,"--n-color-checked-pressed":S,"--n-color-hover-checkable":v,"--n-color-pressed-checkable":y,"--n-font-size":O,"--n-height":k,"--n-opacity-disabled":f,"--n-padding":s,"--n-text-color":i||j,"--n-text-color-checkable":p,"--n-text-color-checked":g,"--n-text-color-hover-checkable":m,"--n-text-color-pressed-checkable":h}}),h=a?j(`tag`,S(()=>{let t=``,{type:r,color:{color:i,textColor:a}={}}=e;return t+=r[0],t+=c.value[0],i&&(t+=`a${B(i)}`),a&&(t+=`b${B(a)}`),n.value&&(t+=`c`),t}),m,e):void 0;return Object.assign(Object.assign({},f),{rtlEnabled:p,mergedClsPrefix:r,contentRef:t,mergedBordered:n,handleClick:u,handleCloseClick:d,cssVars:a?void 0:m,themeClass:h?.themeClass,onRender:h?.onRender})},render(){var e;let{mergedClsPrefix:t,rtlEnabled:n,closable:r,color:{borderColor:i}={},round:a,onRender:o,$slots:s}=this;o?.();let c=J(s.avatar,e=>e&&l(`div`,{class:`${t}-tag__avatar`},e)),u=J(s.icon,e=>e&&l(`div`,{class:`${t}-tag__icon`},e));return l(`div`,{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:n,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:a,[`${t}-tag--avatar`]:c,[`${t}-tag--icon`]:u,[`${t}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},u||c,l(`span`,{class:`${t}-tag__content`,ref:`contentRef`},(e=this.$slots).default?.call(e)),!this.checkable&&r?l(G,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:a,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?l(`div`,{class:`${t}-tag__border`,style:{borderColor:i}}):null)}}),ie={key:0,class:`post-body`},ae={class:`content-area`},oe={class:`post-header`},se={class:`post-title`},ce={class:`post-meta`},le={class:`post-date`},ue={class:`post-tags`},de={class:`content-wrapper`},fe={key:0,class:`related-section`},pe={class:`related-grid`},me={class:`related-post-title`},$={class:`related-post-summary`},he={class:`related-post-tags`},ge={key:0,class:`toc-sidebar`},_e={class:`toc-nav`},ve={class:`toc-list`},ye=[`onClick`],be=x(T({__name:`Post`,setup(i){let l=H(),y=S(()=>l.params.slug),x=S(()=>q(y.value)),T=v(null),D=v(``),O=S(()=>T.value?.headings??[]),k=S(()=>K(y.value,3)),A=null;function j(){M(),t(()=>{let e=document.querySelectorAll(`.post-content h1, .post-content h2, .post-content h3`);e.length!==0&&(A=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){D.value=t.target.id;break}},{rootMargin:`-80px 0px -60% 0px`}),e.forEach(e=>A.observe(e)))})}function M(){A&&=(A.disconnect(),null)}function N(e){let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})}function P(e){return new Date(e).toLocaleDateString(`zh-CN`,{year:`numeric`,month:`long`,day:`numeric`})}let F=v(null),I=v(0),L=null;function R(e){let t=e.parentElement;for(;t;){let e=window.getComputedStyle(t).overflowY;if(e===`auto`||e===`scroll`)return t;t=t.parentElement}return null}function B(){if(!L)return;let e=L.scrollTop,t=L.scrollHeight-L.clientHeight;I.value=t>0?e/t*100:0}return s(()=>{t(()=>{j(),F.value&&(L=R(F.value),L?.addEventListener(`scroll`,B,{passive:!0}))})}),c(()=>{M(),L?.removeEventListener(`scroll`,B)}),d(y,()=>{I.value=0,t(j)}),(t,i)=>{let s=re,c=E(`router-link`),l=z;return r(),_(`div`,{ref_key:`postPageRef`,ref:F,class:`post-page`},[h(`div`,{class:`reading-progress`,style:u({width:`${m(I)}%`})},null,4),m(x)?(r(),_(`div`,ie,[h(`div`,ae,[h(`header`,oe,[h(`h1`,se,n(m(x).title),1),h(`div`,ce,[h(`span`,le,n(P(m(x).date)),1),h(`span`,ue,[(r(!0),_(p,null,o(m(x).tags,e=>(r(),g(s,{key:e,size:`small`,bordered:!1},{default:a(()=>[f(n(e),1)]),_:2},1024))),128))])])]),h(`main`,de,[(r(),g(e,{key:m(y),ref_key:`mdRef`,ref:T,content:m(x).content},null,8,[`content`]))]),m(k).length>0?(r(),_(`section`,fe,[i[0]||=h(`h3`,{class:`related-title`},`相关推荐`,-1),h(`div`,pe,[(r(!0),_(p,null,o(m(k),e=>(r(),_(`article`,{key:e.slug,class:`related-card`},[C(c,{to:`/post/${e.slug}`,class:`related-link`},{default:a(()=>[h(`h4`,me,n(e.title),1),h(`p`,$,n(e.summary),1),h(`div`,he,[(r(!0),_(p,null,o(e.tags,e=>(r(),g(s,{key:e,size:`tiny`,bordered:!1},{default:a(()=>[f(n(e),1)]),_:2},1024))),128))])]),_:2},1032,[`to`])]))),128))])])):b(``,!0)]),m(O).length>0?(r(),_(`aside`,ge,[h(`nav`,_e,[i[1]||=h(`h4`,{class:`toc-title`},`目录`,-1),h(`ul`,ve,[(r(!0),_(p,null,o(m(O),e=>(r(),_(`li`,{key:e.id,class:w([`toc-item`,`toc-level-${e.level}`,{active:m(D)===e.id}]),onClick:t=>N(e.id)},n(e.text),11,ye))),128))])])])):b(``,!0)])):(r(),g(l,{key:1,description:`文章不存在`,class:`not-found`}))],512)}}}),[[`__scopeId`,`data-v-9b769172`]]);export{be as default};