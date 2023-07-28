"use strict";(self["webpackChunkforum_frontend"]=self["webpackChunkforum_frontend"]||[]).push([[753],{9914:function(e,a,l){l.d(a,{_:function(){return F}});var t=l(6252),n=l(6334),i=l(7563),s=l(7695),d=l(2139),p=l(875),r=l(9e3),o=l(8942),c=l(6596),u=l(6533),v=l(6719),m=l(3099);const f=(0,u.U)({appendAvatar:String,appendIcon:c.lE,prependAvatar:String,prependIcon:c.lE,subtitle:String,title:String,...(0,r.l)(),...(0,o.f)()},"VCardItem"),y=(0,v.ev)()({name:"VCardItem",props:f(),setup(e,a){let{slots:l}=a;return(0,m.L)((()=>{const a=!(!e.prependAvatar&&!e.prependIcon),n=!(!a&&!l.prepend),r=!(!e.appendAvatar&&!e.appendIcon),o=!(!r&&!l.append),c=!(!e.title&&!l.title),u=!(!e.subtitle&&!l.subtitle);return(0,t.Wm)("div",{class:["v-card-item",e.class],style:e.style},[n&&(0,t.Wm)("div",{key:"prepend",class:"v-card-item__prepend"},[l.prepend?(0,t.Wm)(p.z,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},l.prepend):a&&(0,t.Wm)(d.V,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),(0,t.Wm)("div",{class:"v-card-item__content"},[c&&(0,t.Wm)(s.E,{key:"title"},{default:()=>[l.title?.()??e.title]}),u&&(0,t.Wm)(i.Q,{key:"subtitle"},{default:()=>[l.subtitle?.()??e.subtitle]}),l.default?.()]),o&&(0,t.Wm)("div",{key:"append",class:"v-card-item__append"},[l.append?(0,t.Wm)(p.z,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},l.append):r&&(0,t.Wm)(d.V,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])})),{}}});var b=l(5911),g=l(7074),k=l(6454),I=l(4203),C=l(6947),h=l(7689),W=l(9680),A=l(3632),V=l(8247),S=l(3664),x=l(2716),_=l(2323),B=l(9748),E=l(7284);const z=(0,u.U)({appendAvatar:String,appendIcon:c.lE,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:c.lE,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...(0,k.m)(),...(0,r.l)(),...(0,o.f)(),...(0,I.x)(),...(0,C.c)(),...(0,h.fF)(),...(0,W.y)(),...(0,A.F)(),...(0,V.I)(),...(0,S.GN)(),...(0,x.Q)(),...(0,_.x$)(),...(0,B.bk)({variant:"elevated"})},"VCard"),F=(0,v.ev)()({name:"VCard",directives:{Ripple:E.H},props:z(),setup(e,a){let{attrs:l,slots:i}=a;const{themeClasses:s}=(0,_.ER)(e),{borderClasses:d}=(0,k.P)(e),{colorClasses:r,colorStyles:c,variantClasses:u}=(0,B.c1)(e),{densityClasses:v}=(0,o.t)(e),{dimensionStyles:f}=(0,I.$)(e),{elevationClasses:x}=(0,C.Y)(e),{loaderClasses:E}=(0,h.U2)(e),{locationStyles:z}=(0,W.T)(e),{positionClasses:F}=(0,A.K)(e),{roundedClasses:L}=(0,V.b)(e),Q=(0,S.nB)(e,l),U=(0,t.Fl)((()=>!1!==e.link&&Q.isLink.value)),w=(0,t.Fl)((()=>!e.disabled&&!1!==e.link&&(e.link||Q.isClickable.value)));return(0,m.L)((()=>{const a=U.value?"a":e.tag,l=!(!i.title&&!e.title),o=!(!i.subtitle&&!e.subtitle),m=l||o,k=!!(i.append||e.appendAvatar||e.appendIcon),I=!!(i.prepend||e.prependAvatar||e.prependIcon),C=!(!i.image&&!e.image),W=m||I||k,A=!(!i.text&&!e.text);return(0,t.wy)((0,t.Wm)(a,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":w.value},s.value,d.value,r.value,v.value,x.value,E.value,F.value,L.value,u.value,e.class],style:[c.value,f.value,z.value,e.style],href:Q.href.value,onClick:w.value&&Q.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[C&&(0,t.Wm)("div",{key:"image",class:"v-card__image"},[i.image?(0,t.Wm)(p.z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},i.image):(0,t.Wm)(g.f,{key:"image-img",cover:!0,src:e.image},null)]),(0,t.Wm)(h.rD,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:i.loader}),W&&(0,t.Wm)(y,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:i.item,prepend:i.prepend,title:i.title,subtitle:i.subtitle,append:i.append}),A&&(0,t.Wm)(b.Z,{key:"text"},{default:()=>[i.text?.()??e.text]}),i.default?.(),i.actions&&(0,t.Wm)(n.h,null,{default:i.actions}),(0,B.Ux)(w.value,"v-card")]}),[[(0,t.Q2)("ripple"),w.value&&e.ripple]])})),{}}})},6334:function(e,a,l){l.d(a,{h:function(){return p}});var t=l(6252),n=l(9e3),i=l(4405),s=l(6719),d=l(3099);const p=(0,s.ev)()({name:"VCardActions",props:(0,n.l)(),setup(e,a){let{slots:l}=a;return(0,i.AF)({VBtn:{variant:"text"}}),(0,d.L)((()=>(0,t.Wm)("div",{class:["v-card-actions",e.class],style:e.style},[l.default?.()]))),{}}})},7563:function(e,a,l){l.d(a,{Q:function(){return n}});var t=l(5988);const n=(0,t.J)("v-card-subtitle")},5911:function(e,a,l){l.d(a,{Z:function(){return n}});var t=l(5988);const n=(0,t.J)("v-card-text")},7695:function(e,a,l){l.d(a,{E:function(){return n}});var t=l(5988);const n=(0,t.J)("v-card-title")},8884:function(e,a,l){l.d(a,{Nj:function(){return b},I:function(){return f}});var t=l(6252),n=l(9e3),i=l(4405),s=l(6560),d=l(2716),p=l(2323),r=l(9748),o=l(2262),c=l(6533),u=l(8676),v=l(6719),m=l(3099);const f=Symbol.for("vuetify:v-chip-group"),y=(0,c.U)({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:u.vZ},...(0,n.l)(),...(0,s.k4)({selectedClass:"v-chip--selected"}),...(0,d.Q)(),...(0,p.x$)(),...(0,r.bk)({variant:"tonal"})},"VChipGroup"),b=(0,v.ev)()({name:"VChipGroup",props:y(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a;const{themeClasses:n}=(0,p.ER)(e),{isSelected:d,select:r,next:c,prev:u,selected:v}=(0,s._v)(e,f);return(0,i.AF)({VChip:{color:(0,o.Vh)(e,"color"),disabled:(0,o.Vh)(e,"disabled"),filter:(0,o.Vh)(e,"filter"),variant:(0,o.Vh)(e,"variant")}}),(0,m.L)((()=>(0,t.Wm)(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},n.value,e.class],style:e.style},{default:()=>[l.default?.({isSelected:d,select:r,next:c,prev:u,selected:v.value})]}))),{}}})},3857:function(e,a,l){l.d(a,{v:function(){return B}});var t=l(6252),n=l(9963),i=l(8975),s=l(2139),d=l(8884),p=l(875),r=l(7737),o=l(6454),c=l(9e3),u=l(8942),v=l(6947),m=l(6560),f=l(6596),y=l(8475),b=l(1316),g=l(8247),k=l(3664),I=l(2283),C=l(2716),h=l(2323),W=l(9748),A=l(7284),V=l(6533),S=l(8676),x=l(6719);const _=(0,V.U)({activeClass:String,appendAvatar:String,appendIcon:f.lE,closable:Boolean,closeIcon:{type:f.lE,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:f.lE,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:(0,S.as)(),onClickOnce:(0,S.as)(),...(0,o.m)(),...(0,c.l)(),...(0,u.f)(),...(0,v.c)(),...(0,m.YQ)(),...(0,g.I)(),...(0,k.GN)(),...(0,I.Z)(),...(0,C.Q)({tag:"span"}),...(0,h.x$)(),...(0,W.bk)({variant:"tonal"})},"VChip"),B=(0,x.ev)()({name:"VChip",directives:{Ripple:A.H},props:_(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,a){let{attrs:l,emit:c,slots:f}=a;const{t:C}=(0,y.bU)(),{borderClasses:A}=(0,o.P)(e),{colorClasses:V,colorStyles:S,variantClasses:x}=(0,W.c1)(e),{densityClasses:_}=(0,u.t)(e),{elevationClasses:B}=(0,v.Y)(e),{roundedClasses:E}=(0,g.b)(e),{sizeClasses:z}=(0,I.t)(e),{themeClasses:F}=(0,h.ER)(e),L=(0,b.z)(e,"modelValue"),Q=(0,m.Yt)(e,d.I,!1),U=(0,k.nB)(e,l),w=(0,t.Fl)((()=>!1!==e.link&&U.isLink.value)),$=(0,t.Fl)((()=>!e.disabled&&!1!==e.link&&(!!Q||e.link||U.isClickable.value))),Y=(0,t.Fl)((()=>({"aria-label":C(e.closeLabel),onClick(e){L.value=!1,c("click:close",e)}})));function G(e){c("click",e),$.value&&(U.navigate?.(e),Q?.toggle())}function R(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),G(e))}return()=>{const a=U.isLink.value?"a":e.tag,l=!(!e.appendIcon&&!e.appendAvatar),d=!(!l&&!f.append),o=!(!f.close&&!e.closable),c=!(!f.filter&&!e.filter)&&Q,u=!(!e.prependIcon&&!e.prependAvatar),v=!(!u&&!f.prepend),m=!Q||Q.isSelected.value;return L.value&&(0,t.wy)((0,t.Wm)(a,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":$.value,"v-chip--filter":c,"v-chip--pill":e.pill},F.value,A.value,m?V.value:void 0,_.value,B.value,E.value,z.value,x.value,Q?.selectedClass.value,e.class],style:[m?S.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:U.href.value,tabindex:$.value?0:void 0,onClick:G,onKeydown:$.value&&!w.value&&R},{default:()=>[(0,W.Ux)($.value,"v-chip"),c&&(0,t.Wm)(i.Zq,{key:"filter"},{default:()=>[(0,t.wy)((0,t.Wm)("div",{class:"v-chip__filter"},[f.filter?(0,t.wy)((0,t.Wm)(p.z,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},null),[[(0,t.Q2)("slot"),f.filter,"default"]]):(0,t.Wm)(r.t,{key:"filter-icon",icon:e.filterIcon},null)]),[[n.F8,Q.isSelected.value]])]}),v&&(0,t.Wm)("div",{key:"prepend",class:"v-chip__prepend"},[f.prepend?(0,t.Wm)(p.z,{key:"prepend-defaults",disabled:!u,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},f.prepend):(0,t.Wm)(t.HY,null,[e.prependIcon&&(0,t.Wm)(r.t,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&(0,t.Wm)(s.V,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),(0,t.Wm)("div",{class:"v-chip__content"},[f.default?.({isSelected:Q?.isSelected.value,selectedClass:Q?.selectedClass.value,select:Q?.select,toggle:Q?.toggle,value:Q?.value.value,disabled:e.disabled})??e.text]),d&&(0,t.Wm)("div",{key:"append",class:"v-chip__append"},[f.append?(0,t.Wm)(p.z,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},f.append):(0,t.Wm)(t.HY,null,[e.appendIcon&&(0,t.Wm)(r.t,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&(0,t.Wm)(s.V,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),o&&(0,t.Wm)("div",(0,t.dG)({key:"close",class:"v-chip__close"},Y.value),[f.close?(0,t.Wm)(p.z,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},f.close):(0,t.Wm)(r.t,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}),[[(0,t.Q2)("ripple"),$.value&&e.ripple,null]])}}})}}]);
//# sourceMappingURL=753.60bff1ef.js.map