"use strict";(self["webpackChunkforum_frontend"]=self["webpackChunkforum_frontend"]||[]).push([[633],{9307:function(t,e,a){a.r(e),a.d(e,{default:function(){return j}});var o=a(6252),s=a(3577),i=a(9963),n=a(2139),r=a(6673),l=a(9914),c=a(7695),u=a(5911),d=a(6334),m=a(3857),p=a(9003),h=a(3379),f=a(2482),b=a(1146);const _=["innerHTML"],k=(0,o._)("i",{class:"bi bi-chevron-down"},null,-1),y=(0,o._)("i",{class:"bi bi-hand-thumbs-up"},null,-1),w=(0,o._)("i",{class:"bi bi-hand-thumbs-up-fill"},null,-1),C=(0,o._)("i",{class:"bi bi-trash3-fill"},null,-1),g=["id"],v=["onSubmit"],x=(0,o._)("i",{class:"bi bi-send-fill",style:{"font-size":"20px"}},null,-1),W=(0,o._)("i",{class:"bi bi-send-fill",style:{"font-size":"20px"}},null,-1),T={class:"text-center ma-2"};function D(t,e,a,D,V,$){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l._,{variant:"tonal"},{default:(0,o.w5)((()=>[(0,o.Wm)(c.E,{style:{color:"#42A5F5"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(t.post.assunto),1)])),_:1}),(0,o.Wm)(u.Z,null,{default:(0,o.w5)((()=>[(0,o._)("div",{innerHTML:t.post.descricao},null,8,_)])),_:1}),(0,o.Wm)(d.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r.T,{onClick:e[0]||(e[0]=e=>t.ExibirComentarios())},{default:(0,o.w5)((()=>[(0,o.Uk)("Respostas "),k])),_:1}),(0,o.Wm)(p.o,null,{default:(0,o.w5)((()=>[(0,o.Wm)(h.D,{clas:""},{default:(0,o.w5)((()=>[t.displayCurtida?((0,o.wg)(),(0,o.j4)(r.T,{key:0,onClick:e[1]||(e[1]=e=>t.curtir(t.post.id))},{default:(0,o.w5)((()=>[y,(0,o.Uk)((0,s.zw)(t.gostei),1)])),_:1})):(0,o.kq)("",!0),t.displayNaoCurtida?((0,o.wg)(),(0,o.j4)(r.T,{key:1,onClick:e[2]||(e[2]=e=>t.descurtir(t.post.id))},{default:(0,o.w5)((()=>[w,(0,o.Uk)((0,s.zw)(t.gostei),1)])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1}),t.comentarios.length>0?((0,o.wg)(),(0,o.j4)(l._,{key:0,style:{width:"90%",border:"none"},class:"mt-3 mx-auto",variant:"outlined"},{default:(0,o.w5)((()=>[(0,o.Wm)(p.o,null,{default:(0,o.w5)((()=>[(0,o.Wm)(h.D,{xs:"10",sm:"10",md:"10",cols:"12",class:"mx-auto"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.comentarios,(a=>((0,o.wg)(),(0,o.j4)(l._,{key:a.id,subtitle:t.formatarData(new Date(a.created_at).toLocaleDateString()),style:{border:"none"},"prepend-avatar":a.user_relacionamento.image,class:"mt-3 mb-3 bg-grey-lighten-3",title:a.user_relacionamento.name,variant:"outlined"},{default:(0,o.w5)((()=>[(0,o.Wm)(u.Z,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(a.descricao),1)])),_:2},1024),(0,o.Wm)(u.Z),(0,o.Wm)(d.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r.T,{onClick:e=>t.ExibirComentariosRespondidos(a.id,t.comentarios)},{default:(0,o.w5)((()=>[(0,o.Uk)("Comentarios "),(0,o.Wm)(m.v,{draggable:"",color:"success",class:"ms-2"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(a.respostas_comentarios_relacionamento_count),1)])),_:2},1024)])),_:2},1032,["onClick"]),t.store.state.usuario.id==a.user_id?((0,o.wg)(),(0,o.j4)(p.o,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(h.D,{cols:"1",class:"text-start"},{default:(0,o.w5)((()=>[(0,o.Wm)(r.T,{onClick:e=>t.ExcluirComentario(a.id,a.post_id)},{default:(0,o.w5)((()=>[C])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)):(0,o.kq)("",!0)])),_:2},1024),t.comentarios.length>0?((0,o.wg)(),(0,o.j4)(l._,{key:0,id:`respostaComentarios-${a.id}`,style:{width:"90%",border:"none",display:"none"},class:"mt-3 mx-auto",variant:"outlined"},{default:(0,o.w5)((()=>[(0,o.Wm)(p.o,null,{default:(0,o.w5)((()=>[(0,o.Wm)(h.D,{cols:"10",class:"mx-auto"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.comentariosRespostas,(e=>((0,o.wg)(),(0,o.j4)(l._,{key:e.id,subtitle:t.formatarData(new Date(e.created_at).toLocaleDateString()),style:{border:"none"},"prepend-avatar":e.user_relacionamento.image,text:e.descricao,class:"mt-3 mb-3 bg-grey-lighten-3",title:e.user_relacionamento.name,variant:"tonal"},{default:(0,o.w5)((()=>[(0,o.Wm)(d.h)])),_:2},1032,["subtitle","prepend-avatar","text","title"])))),128))])),_:2},1024)])),_:2},1024)])),_:2},1032,["id"])):(0,o.kq)("",!0),(0,o._)("div",{style:{display:"none"},id:`responderComentario-${a.id}`},[0!=t.store.state.usuario.length||t.store.state.usuario.length>0?((0,o.wg)(),(0,o.iD)("form",{key:0,onSubmit:(0,i.iM)((e=>t.ResponderComentario(a.id)),["prevent"])},[(0,o.Wm)(p.o,{class:"mt-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(n.V,{class:"mt-5 ms-6",image:t.store.state.usuario.image},null,8,["image"]),(0,o.Wm)(h.D,{xs:"10",sm:"10",md:"10",cols:"7",class:"ms-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(b.h,{modelValue:t.respostaComentario,"onUpdate:modelValue":e[3]||(e[3]=e=>t.respostaComentario=e),variant:"outlined",label:"Adicionar resposta"},null,8,["modelValue"])])),_:1}),(0,o.Wm)(r.T,{type:"submit",icon:"",class:"mt-4 bg-white"},{default:(0,o.w5)((()=>[x])),_:1})])),_:1})],40,v)):(0,o.kq)("",!0)],8,g)])),_:2},1032,["subtitle","prepend-avatar","title"])))),128))])),_:1})])),_:1})])),_:1})):(0,o.kq)("",!0),(0,o._)("form",{onSubmit:e[5]||(e[5]=(0,i.iM)((e=>t.comentar()),["prevent"]))},[0!=t.store.state.usuario.length||t.store.state.usuario.length>0?((0,o.wg)(),(0,o.j4)(p.o,{key:0,class:"mt-3"},{default:(0,o.w5)((()=>[(0,o.Wm)(n.V,{class:"mt-5",image:t.store.state.usuario.image},null,8,["image"]),(0,o.Wm)(h.D,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b.h,{modelValue:t.resposta,"onUpdate:modelValue":e[4]||(e[4]=e=>t.resposta=e),variant:"outlined",label:"Adicionar resposta"},null,8,["modelValue"])])),_:1}),(0,o.Wm)(r.T,{type:"submit",icon:"",class:"mt-4"},{default:(0,o.w5)((()=>[W])),_:1})])),_:1})):(0,o.kq)("",!0)],32),(0,o._)("template",null,[(0,o._)("div",T,[(0,o.Wm)(f.v,{timeout:"2000",modelValue:t.snackbar,"onUpdate:modelValue":e[7]||(e[7]=e=>t.snackbar=e)},{actions:(0,o.w5)((()=>[(0,o.Wm)(r.T,{color:"pink",variant:"text",onClick:e[6]||(e[6]=e=>t.snackbar=!1)})])),default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(t.text)+" ",1)])),_:1},8,["modelValue"])])])],64)}var V=a(2117),$=a(3907),z=(0,o.aZ)({name:"ShowComents",data(){return{snackbar:!1,text:"Hello, I'm a snackbar",post:[],gostei:"",deslike:0,comentarios:[],resposta:"",token:"",comentariosRespostas:[],displayCurtida:!0,displayNaoCurtida:!1,quantidadeComentarioRespondido:0,editComentario:""}},mounted(){this.buscaToken(),this.ExibirPost()},methods:{async VerificarSeUsuarioCurtiuPost(){await V.Z.get(`/curtidas/verificar/${this.post.id}`,{headers:{Authorization:"Bearer "+this.token,"Content-Type":"application/json"}}).then((t=>{1==t.data?(this.displayNaoCurtida=!0,this.displayCurtida=!1):(this.displayNaoCurtida=!1,this.displayCurtida=!0)})).catch((function(){}))},buscaToken(){let t=localStorage.getItem("token");this.token=t},teste(){this.gostei++,console.log(this.store.state.usuario.length)},async ExibirComentarios(){await V.Z.get(`/comentarios/index/${this.post.id}`).then((t=>{this.comentarios=t.data})).catch((function(){}))},formatarData(t){return t},async comentar(){await V.Z.post(`/comentarios/store/${this.post.id}`,{descricao:this.resposta},{headers:{Authorization:"Bearer "+this.token,"Content-Type":"application/json"}}).then((t=>{this.comentarios=t.data,this.resposta="",this.snackbar=!0,this.text="Comentário enviado!"})).catch((function(){}))},ExibirInputDeRespostaComentario(t){let e=document.getElementById(`responderComentario-${t}`);e.style.display="block"},ResponderComentario(t){V.Z.post(`/resposta/comentarios/store/${t}`,{descricao:this.respostaComentario},{headers:{Authorization:"Bearer "+this.token,"Content-Type":"application/json"}}).then((t=>{console.log(t.data),this.comentariosRespostas=t.data})).catch((function(){})),this.snackbar=!0,this.text="Comentário enviado!",this.respostaComentario=" ",this.ExibirInputDeRespostaComentario(t)},ExibirComentariosRespondidos(t,e){let a=e.filter((e=>e.id!=t));for(let s=0;s<a.length;s++){let t=document.getElementById(`respostaComentarios-${a[s].id}`),e=document.getElementById(`responderComentario-${a[s].id}`);e.style.display="none",t.style.display="none"}this.comentariosRespostas=[];let o=document.getElementById(`respostaComentarios-${t}`);o.style.display="block",V.Z.get(`/resposta/comentarios/index/${t}`).then((t=>{this.comentariosRespostas=t.data})).catch((function(){})),this.ExibirInputDeRespostaComentario(t)},curtir(t){V.Z.post(`/curtidas/${t}`,{},{headers:{Authorization:"Bearer "+this.token,"Content-Type":"application/json"}}).then((t=>{console.log(t.data[0].curtidas_relacionamento_count),this.gostei=t.data[0].curtidas_relacionamento_count,this.displayNaoCurtida=!0,this.displayCurtida=!1})).catch((function(){}))},descurtir(t){V.Z.delete(`/curtidas/destroy/${t}`,{headers:{Authorization:"Bearer "+this.token,"Content-Type":"application/json"}}).then((t=>{console.log(t.data[0].curtidas_relacionamento_count),this.gostei=t.data[0].curtidas_relacionamento_count,this.displayCurtida=!0,this.displayNaoCurtida=!1})).catch((function(){}))},async curtidas(){await V.Z.get(`/curtidas/post/${this.post.id}`,{headers:{Authorization:"Bearer "+this.token,"Content-Type":"application/json"}}).then((t=>{this.gostei=t.data[0].curtidas_relacionamento_count})).catch((function(){}))},ExcluirComentario(t,e){V.Z.delete(`/comentario/destroy/${t}/${e}`,{headers:{Authorization:"Bearer "+this.token,"Content-Type":"application/json"}}).then((t=>{this.comentarios=t.data,this.snackbar=!0,this.text="Comentário excluído"})).catch((function(){}))},ExibirPost(){V.Z.get(`/posts/show/${this.$route.params.id}`,{},{headers:{Authorization:"Bearer "+this.token,"Content-Type":"application/json"}}).then((t=>{this.post=t.data,this.curtidas(),this.VerificarSeUsuarioCurtiuPost()})).catch((function(){}))}},computed:{},setup(){const t=(0,$.oR)();return console.log(t),{store:t}}}),E=a(3744);const S=(0,E.Z)(z,[["render",D]]);var j=S},2482:function(t,e,a){a.d(e,{v:function(){return w}});var o=a(6252),s=a(875),i=a(1929),n=a(9483),r=a(9680),l=a(3632),c=a(1316),u=a(8247),d=a(9084),m=a(2323),p=a(9748),h=a(2262),f=a(6533),b=a(8676),_=a(6719),k=a(3099);const y=(0,f.U)({multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...(0,r.y)({location:"bottom"}),...(0,l.F)(),...(0,u.I)(),...(0,p.bk)(),...(0,m.x$)(),...(0,b.CE)((0,i.B)({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),w=(0,_.ev)()({name:"VSnackbar",props:y(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:a}=e;const f=(0,c.z)(t,"modelValue"),{locationStyles:b}=(0,r.T)(t),{positionClasses:_}=(0,l.K)(t),{scopeId:y}=(0,d.a)(),{themeClasses:w}=(0,m.ER)(t),{colorClasses:C,colorStyles:g,variantClasses:v}=(0,p.c1)(t),{roundedClasses:x}=(0,u.b)(t),W=(0,h.iH)();(0,o.YP)(f,D),(0,o.YP)((()=>t.timeout),D),(0,o.bv)((()=>{f.value&&D()}));let T=-1;function D(){window.clearTimeout(T);const e=Number(t.timeout);f.value&&-1!==e&&(T=window.setTimeout((()=>{f.value=!1}),e))}function V(){window.clearTimeout(T)}return(0,k.L)((()=>{const[e]=i.y.filterProps(t);return(0,o.Wm)(i.y,(0,o.dG)({ref:W,class:["v-snackbar",{"v-snackbar--active":f.value,"v-snackbar--multi-line":t.multiLine&&!t.vertical,"v-snackbar--vertical":t.vertical},_.value,t.class],style:t.style},e,{modelValue:f.value,"onUpdate:modelValue":t=>f.value=t,contentProps:(0,o.dG)({class:["v-snackbar__wrapper",w.value,C.value,x.value,v.value],style:[b.value,g.value],onPointerenter:V,onPointerleave:D},e.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},y),{default:()=>[(0,p.Ux)(!1,"v-snackbar"),a.default&&(0,o.Wm)("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[a.default()]),a.actions&&(0,o.Wm)(s.z,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[(0,o.Wm)("div",{class:"v-snackbar__actions"},[a.actions()])]})],activator:a.activator})})),(0,n.F)({},W)}})}}]);
//# sourceMappingURL=633.d0aa7557.js.map