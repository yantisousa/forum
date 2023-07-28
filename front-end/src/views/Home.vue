<template>
    <v-row>
        <v-col v-if="store.state.usuario.length != []" md="6" sm="12" xs="12" cols="12" class="mx-auto">
            <v-card :title="store.state.usuario.name" :prepend-avatar="store.state.usuario.image" variant="outlined"
                class="bg-grey-lighten-3" style="border: none;">
                <div class="text-center">
                    <v-dialog v-model="dialog" width="auto">
                        <template v-slot:activator="{ props }">
                            <!-- <v-btn
                          color="primary"
                          v-bind="props"
                        >
                          Open Dialog
                        </v-btn> -->
                            <v-col><v-btn @click="buscarLinguagens()" v-bind="props" color="primary">Adicionar uma
                                    publicação</v-btn></v-col>

                        </template>

                        <v-card>
                            <form @submit.prevent="salvar()">
                                <v-card-text>
                                    <v-col>
                                        <v-text-field v-model="assunto" label="Assunto:"
                                            variant="underlined"></v-text-field>
                                    </v-col>
                                    <div id="app">
                                        <ckeditor style="color: black !important" :editor="editor" v-model="editorData"
                                            :config="editorConfig"></ckeditor>
                                    </div>
                                    <v-col>
                                        <v-select label="Sobre qual categoria de programação é esse post?"
                                            v-model="selectedId" :items="linguagens" item-title="nome" item-value="id"
                                            :change="handleSelection()" variant="underlined"></v-select>
                                    </v-col>
                                    <v-col>
                                        <v-select label="É um framework? (Opcional)" v-model="selectedFramework"
                                            :items="frameworks" item-title="nome" item-value="id"
                                            variant="underlined"></v-select>
                                    </v-col>
                                    <v-col>
                                        <v-btn color="primary" width="100%" type="submit">Salvar</v-btn>

                                    </v-col>
                                </v-card-text>
                            </form>

                            <v-card-actions>
                                <v-btn color="primary" block @click="dialog = false">Fechar</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>
            </v-card>
        </v-col>
    </v-row>
    <v-row md="12" sm="12" xs="12" cols="12" style="width: 100%;">
        <v-col md="6" xs="12" cols="12" class="mx-auto mt-6">
            <h2>Top 10 questões mais curtidas</h2>
        </v-col>
    </v-row>

    <v-row>
        <v-col md="10" sm="12" xs="12" cols="12" class="mx-auto mb-12">
            <v-col cols="12" class="mt-15  d-block" v-for="post in posts" :key="post.id">
                <router-link :to="`/coments/stack/${post.id}`" style="text-decoration: none; "
                    class="custom-link bg-grey-darken-3">
                    <v-card id="card" prepend-avatar="" variant="tonal">
                        <v-card-title class="custom-title-color"><span style="color:orange;">{{ posts.indexOf(post) + 1 }} -
                                {{ post.assunto }}</span></v-card-title>
                        <v-card-subtitle>{{ post.linguagem_relacionamento.nome }}</v-card-subtitle>
                        <v-card-text>
                            <div v-html="post.descricao"></div>
                        </v-card-text>
                        <v-row>
                            <v-col class=" mb-4"><i class="bi bi-calendar ms-4"></i> {{ formatarData(new
                                Date(post.created_at).toLocaleDateString()) }}</v-col>
                            <v-col class="text-end mr-12">
                                {{ post.curtidas_relacionamento_count }} <i class="bi bi-heart-fill"></i>
                            </v-col>
                        </v-row>
                    </v-card>
                </router-link>
            </v-col>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
                <div class="d-flex flex-column fill-height justify-center align-center text-white">
                    <h1 class="text-h4 font-weight-thin mb-4">
                        ConexãoDev
                    </h1>
                    <h4 class="subheading text-center">
                        "Bug não é erro, é uma oportunidade de aprendizado."
                    </h4>
                </div>
            </v-parallax>

        </v-col>
    </v-row>
    <v-row>
        <v-col md="12" sm="12" xs="12" cols="12" class="mx-auto mt-12 mb-12">
            <v-timeline side="end">
                <v-timeline-item v-for="item in items" :key="item.id" :dot-color="item.color" size="small">
                    <v-alert :value="true" :color="item.color">
                        {{ item.text }}
                    </v-alert>
                </v-timeline-item>
            </v-timeline>
        </v-col>
    </v-row>
    <!-- ALERTA -->
    <div class="text-center">
        <v-snackbar v-model="snackbar" :timeout="2000">
            {{ text }}

            <template v-slot:actions>
                <v-btn color="green" variant="text" @click="snackbar = false">
                    Fechar
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { defineComponent } from 'vue';
import http from '../api/axios'
import { useStore } from 'vuex';
export default defineComponent({
    name: 'HomeViewFull',

    data() {
        return {

            snackbar: false,
            text: 'My timeout is set to 2000.',
            timeout: 2000,
            items: [
                {
                    id: 1,
                    color: 'success',
                    icon: '1',
                    text: 'Explore o Conhecimento Coletivo: Tire Suas Dúvidas, Compartilhe Seus Insights e Conecte-se com Desenvolvedores de Todo o Mundo!'
                },
                {
                    id: 2,
                    color: 'warning',
                    icon: '2',
                    text: 'Uma Comunidade de Mentores e Aprendizes: Encontre Orientação, Compartilhe Conhecimento e Supere Barreiras em Programação.'
                },
            ],
            dialog: false,
            editor: ClassicEditor,
            editorData: '',
            editorConfig: {
                // The configuration of the editor.
            },
            linguagens: [],
            frameworks: [],
            posts: [],
            assunto: '',
            selectedId: null,
            selectedFramework: null,
            token: ''
        }
    },
    mounted() {
        this.getAll(),
        this.VerificarUsuarioLogado()
    },
    methods: {
        async VerificarUsuarioLogado() {
            let token = localStorage.getItem('token');
            this.token = token
            await http.get('/usuario/show',
                {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    }
                }
            ).then(response => {
                this.store.commit('INSERE_USUARIO', response.data)
            }).catch(() => {
                this.store.commit('INSERE_USUARIO', [])
            })
        },
        getAll() {
            http.get('/posts/getAll').then(response => {
                this.posts = response.data
            })
        },
        formatarData(data) {
            return data
        },
        salvar() {
            http.post('/posts/store', {
                linguagens_id: this.selectedId,
                frameworks_id: this.selectedFramework,
                assunto: this.assunto,
                descricao: this.editorData
            },
                {
                    headers: {
                        'Authorization': 'Bearer ' + this.token,
                        'Content-Type': 'application/json'
                    }
                }
            ).then(() => {
                this.dialog = false
                this.selectedId = null
                this.selectedFramework = null
                this.assunto = ""
                this.editorData = ""
                this.snackbar = true
                this.text = "Publicação concluída!"
            }).catch(()=> {
                
            })
        },
        async buscarLinguagens() {
            await http.get('/linguagem/index').then(response => {
                this.linguagens = response.data
            })
            console.log(this.linguagens);
        },
        handleSelection() {
            http.get(`/linguagem/show/${this.selectedId}`).then(response => {
                this.frameworks = response.data.framework_relacionamento
            })
        }
    },
    setup() {
        const store = useStore()
        return {
            store
        }
    }

})
</script>
<style>
body {
    background-color: grey;
}

.ck.ck-editor {
    position: relative;
    color: black;
}
</style>