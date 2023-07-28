<template>
    <v-card :title="dadosDoUsuarioQuePublicou.name" :prepend-avatar="dadosDoUsuarioQuePublicou.image" variant="tonal">
        <v-card-text>
            <div style="font-weight: bold; font-size: 20px; color: #42A5F5;" v-html="post.assunto">

            </div>
        </v-card-text>
        <v-card-text>
            <div v-html="post.descricao">

            </div>
        </v-card-text>

        <v-card-actions>
            <v-btn @click="ExibirComentarios()">Respostas <i class="bi bi-chevron-down"></i></v-btn>
            <v-row>
                <v-col clas>
                    <v-btn v-if="displayCurtida" @click="curtir(post.id)"><i class="bi bi-hand-thumbs-up"></i>{{ gostei
                    }}</v-btn>
                    <v-btn v-if="displayNaoCurtida" @click="descurtir(post.id)"><i class="bi bi-hand-thumbs-up-fill"></i>{{
                        gostei }}</v-btn>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>

    <v-card v-if="comentarios.length > 0" style="width: 90%; border:none" class="mt-3 mx-auto" variant="outlined">
        <v-row>
            <v-col xs="10" sm="10" md="10" cols="12" class="mx-auto">
                <v-card v-for="comentario in comentarios" :key="comentario.id" :subtitle="formatarData(new
                    Date(comentario.created_at).toLocaleDateString())" style="border: none;"
                    :prepend-avatar="comentario.user_relacionamento.image" class="mt-3 mb-3 bg-grey-lighten-3"
                    :title="comentario.user_relacionamento.name" variant="outlined">
                    <v-card-text>{{ comentario.descricao }}</v-card-text>
                    <v-card-text>

                    </v-card-text>
                    <v-card-actions>
                        <!-- <v-btn @click="teste()"><i class="bi bi-hand-thumbs-up"></i>{{ gostei }}</v-btn>
                        <v-btn><i class="bi bi-hand-thumbs-down"></i>0</v-btn> -->
                        <v-btn @click="ExibirComentariosRespondidos(comentario.id, comentarios)">COMENTAR <v-chip
                                draggable color="success" class="ms-2">
                                {{ comentario.respostas_comentarios_relacionamento_count }}
                            </v-chip> </v-btn>
                        <v-row v-if="store.state.usuario.id == comentario.user_id">
                            <v-col cols="1" class="text-start">
                                <v-btn @click="ExcluirComentario(comentario.id, comentario.post_id)"><i class="bi bi-trash3-fill"></i></v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>




                    <v-card :id="`respostaComentarios-${comentario.id}`" v-if="comentarios.length > 0"
                        style="width: 90%; border: none; display: none" class="mt-3 mx-auto" variant="outlined">
                        <v-row>
                            <v-col cols="10" class="mx-auto">
                                <v-card v-for="comentario in comentariosRespostas" :key="comentario.id" :subtitle="formatarData(new
                                    Date(comentario.created_at).toLocaleDateString())" style="border: none;"
                                    :prepend-avatar="comentario.user_relacionamento.image" :text="comentario.descricao"
                                    class="mt-3 mb-3 bg-grey-lighten-3" :title="comentario.user_relacionamento.name"
                                    variant="tonal">
                                    <v-card-actions>
                                    </v-card-actions>
                                </v-card>

                            </v-col>
                        </v-row>
                    </v-card>





                    <div style="display: none;" :id="`responderComentario-${comentario.id}`">
                        <form v-if="store.state.usuario.length != 0 || store.state.usuario.length > 0"
                            @submit.prevent="ResponderComentario(comentario.id)">

                            <v-row class="mt-3">
                                    <v-avatar class="mt-5 ms-6" :image="store.state.usuario.image"></v-avatar>
                                <v-col xs="10" sm="10" md="10" cols="7" class="ms-3">
                                    <v-text-field v-model="respostaComentario" variant="outlined"
                                        label="Adicionar resposta"></v-text-field>
                                </v-col>
                                <v-btn type="submit" icon="" class="mt-4 bg-white"><i class="bi bi-send-fill"
                                        style="font-size: 20px;"></i></v-btn>
                            </v-row>
                        </form>
                    </div>
                </v-card>

            </v-col>
        </v-row>
    </v-card>
    <form @submit.prevent="comentar()">
        <v-row v-if="store.state.usuario.length != 0 || store.state.usuario.length > 0" class="mt-3">
            <v-avatar class="mt-5" :image="store.state.usuario.image"></v-avatar>
            <v-col>
                <v-text-field v-model="resposta" variant="outlined" label="Adicionar resposta"></v-text-field>
            </v-col>
            <v-btn type="submit" icon="" class="mt-4"><i class="bi bi-send-fill" style="font-size: 20px;"></i></v-btn>
        </v-row>
    </form>
    <template>
        <div class="text-center ma-2">
            <v-snackbar timeout="2000" v-model="snackbar">
                {{ text }}

                <template v-slot:actions>
                    <v-btn color="pink" variant="text" @click="snackbar = false">
                    </v-btn>
                </template>
            </v-snackbar>
        </div>
    </template>
</template>
<script>
import { defineComponent } from 'vue';
import http from '../../api/axios'
import { useStore } from 'vuex';
export default defineComponent({
    name: 'ShowComents',
    data() {
        return {
            snackbar: false,
            text: `Hello, I'm a snackbar`,
            post: {},
            gostei: '',
            deslike: 0,
            comentarios: [],
            resposta: '',
            token: '',
            comentariosRespostas: [],
            displayCurtida: true,
            displayNaoCurtida: false,
            quantidadeComentarioRespondido: 0,
            editComentario: "",
            dadosDoUsuarioQuePublicou: {}
        }
    },
    mounted() {
        this.buscaToken(),
        this.ExibirPost()
    },
    methods: {
        async VerificarSeUsuarioCurtiuPost() {
            await http.get(`/curtidas/verificar/${this.post.id}`,
                {
                    headers:
                    {
                        'Authorization': 'Bearer ' + this.token,
                        'Content-Type': 'application/json'
                    }
                }).then(response => {
                    if (response.data == 1) {
                        this.displayNaoCurtida = true
                        this.displayCurtida = false
                    } else {
                        this.displayNaoCurtida = false
                        this.displayCurtida = true
                    }
                }).catch(function(){
                
            })
        },
        buscaToken() {
            let token = localStorage.getItem('token')
            this.token = token
        },
        teste() {
            this.gostei++
            console.log(this.store.state.usuario.length);
        },
        async ExibirComentarios() {
            await http.get(`/comentarios/index/${this.post.id}`).then(response => {
                this.comentarios = response.data
            }).catch(function(){
                
            })

        },
        formatarData(data) {
            return data
        },
        async comentar() {
            await http.post(`/comentarios/store/${this.post.id}`, {
                descricao: this.resposta
            },
                {
                    headers:
                    {
                        'Authorization': 'Bearer ' + this.token,
                        'Content-Type': 'application/json'
                    }
                }


            ).then(response => {
                this.comentarios = response.data
                this.resposta = ''
                this.snackbar = true
                this.text = "Comentário enviado!"
            }).catch(function(){
                
            })
        },
        ExibirInputDeRespostaComentario(id) {
            let divBotaoResponder = document.getElementById(`responderComentario-${id}`)
            divBotaoResponder.style.display = 'block'
        },
        ResponderComentario(id) {
            http.post(`/resposta/comentarios/store/${id}`, {
                descricao: this.respostaComentario
            },
                {
                    headers:
                    {
                        'Authorization': 'Bearer ' + this.token,
                        'Content-Type': 'application/json'
                    }
                }
            ).then(response => {
                console.log(response.data);
                this.comentariosRespostas = response.data
            }).catch(function(){
                
            })
            this.snackbar = true
            this.text = "Comentário enviado!"
            this.respostaComentario = " "
            this.ExibirInputDeRespostaComentario(id)
        },
        ExibirComentariosRespondidos(id, comentarios) {
            // x
            let comentariosParaFechar = comentarios.filter(coment => coment.id != id)
            for (let i = 0; i < comentariosParaFechar.length; i++) {
                let fechar = document.getElementById(`respostaComentarios-${comentariosParaFechar[i].id}`)
                let divBotaoResponder = document.getElementById(`responderComentario-${comentariosParaFechar[i].id}`)
                divBotaoResponder.style.display = 'none'
                fechar.style.display = 'none'

            }
            this.comentariosRespostas = []
            let botaoRespostasComentarios = document.getElementById(`respostaComentarios-${id}`)
            botaoRespostasComentarios.style.display = 'block'
            http.get(`/resposta/comentarios/index/${id}`).then(response => {
                this.comentariosRespostas = response.data
            }).catch(function(){
                
            })
            this.ExibirInputDeRespostaComentario(id)
        },
        curtir(id) {
            http.post(`/curtidas/${id}`,
                {

                },
                {
                    headers:
                    {
                        'Authorization': 'Bearer ' + this.token,
                        'Content-Type': 'application/json'
                    }
                }
            ).then(response => {
                console.log(response.data[0].curtidas_relacionamento_count);
                this.gostei = response.data[0].curtidas_relacionamento_count
                this.displayNaoCurtida = true
                this.displayCurtida = false
            }).catch(function(){
                
            })
        },
        descurtir(id) {
            http.delete(`/curtidas/destroy/${id}`,
                {
                    headers:
                    {
                        'Authorization': 'Bearer ' + this.token,
                        'Content-Type': 'application/json'
                    }
                }
            ).then(response => {
                console.log(response.data[0].curtidas_relacionamento_count);
                this.gostei = response.data[0].curtidas_relacionamento_count
                this.displayCurtida = true
                this.displayNaoCurtida = false
            }).catch(function(){
                
            })
        },
        async curtidas() {
            await http.get(`/curtidas/post/${this.post.id}`,
                {
                    headers: {
                        'Authorization': 'Bearer ' + this.token,
                        'Content-Type': 'application/json'
                    }
                }).then(response => {
                    this.gostei = response.data[0].curtidas_relacionamento_count
                }).catch(function(){
                
            })
        },

        ExcluirComentario(comentario, post) {
            http.delete(`/comentario/destroy/${comentario}/${post}`, {
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                this.comentarios = response.data
                this.snackbar = true
                this.text = "Comentário excluído"
            }).catch(function(){
                
            })
        },
        ExibirPost() {
            http.get(`/posts/show/${this.$route.params.id}`,
                {

                },
                {
                    headers:
                    {
                        'Authorization': 'Bearer ' + this.token,
                        'Content-Type': 'application/json'
                    }
                }
            ).then(response => {
                this.post = response.data
                this.dadosDoUsuarioQuePublicou =  this.post.user_relacionamento
                this.curtidas()
                this.VerificarSeUsuarioCurtiuPost()
            }).catch(function(){
                
            })
        },
    },
    //preciso ver o post
    computed: {

        // ExibirPost() {
        //     http.get(`/posts/show/${this.$route.params.id}`,
        //         {

        //         },
        //         {
        //             headers:
        //             {
        //                 'Authorization': 'Bearer ' + this.token,
        //                 'Content-Type': 'application/json'
        //             }
        //         }
        //     ).then(response => {
        //         this.post = response.data
        //         this.curtidas()
        //         this.VerificarSeUsuarioCurtiuPost()
        //     })
        // },
    },
    setup() {
        const store = useStore()
        console.log(store);
        return {
            store
        }
    }
})


</script>