<template>
    <v-row v-if="display" class="mt-12">
        {{ buscaLinguagemAtual }}
        <v-col cols="7" class="text-center">
            <h3>Perguntas frequentes sobre {{ linguagem.nome }}</h3>
        </v-col>
        <v-col class="ms-12 d-md-block d-sm-none d-xs-none">
            <v-chip-group>
                <v-chip style="cursor: pointer;" class="ma-2" @click="busca(linguagem.id)" color="primary">
                    Todos
                </v-chip>
                <v-chip style="cursor: pointer;" v-for="framework in linguagem.framework_relacionamento" :key="framework.id"
                    class="ma-2" @click="ExibirPorFramework(framework.id)" color="primary">
                    {{ framework.nome }}
                </v-chip>
            </v-chip-group>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-select :change="BuscaPostsPeloId()" v-model="selectLinguagem" class="selectLinguagens" :items="linguagens"
                item-title="nome" item-value="id" variant="underlined"></v-select>
        </v-col>
    </v-row>
    <v-navigation-drawer  id="linguagens">
        <v-list  class="mt-10 text-center" variant="tonal">
            <v-list-item append-icon="teste" @click="busca(linguagem.id)" v-for="(linguagem, i) in linguagens" :key="i"
                :value="linguagem" color="primary" variant="plain">
                <v-list-item-title v-text="linguagem.nome"></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-row>
        <v-col cols="12" class="mx-auto">
            <v-col class="mt-15 d-block" v-for="post in posts" :key="post.id">
                <router-link :to="`/coments/stack/${post.id}`" style="text-decoration: none; "
                    class="custom-link bg-grey-darken-3">
                    <v-card id="card" prepend-avatar="" variant="tonal" v-if="posts.length > 0">
                        <v-card-title class="custom-title-color">{{ post.assunto }}</v-card-title>
                        <v-card-subtitle>{{ post.linguagem_relacionamento.nome }}</v-card-subtitle>

                        <v-card-text>
                            <div v-html="post.descricao"></div>
                        </v-card-text>
                        <v-row>
                            <v-col class="mb-4"><i class="bi bi-calendar ms-4"></i> {{ formatarData(new
                                Date(post.created_at).toLocaleDateString()) }}</v-col>

                        </v-row>


                    </v-card>
                </router-link>
            </v-col>
            <v-col style="height: 100vh;" v-if="posts.length < 1" cols="12" class="mt-15 mx-auto d-block">
                <v-col class="mx-auto">
                    Ainda não tem questões
                </v-col>
            </v-col>
        </v-col>
    </v-row>
</template>
<script>
import { defineComponent } from 'vue';
import http from '../../api/axios'
export default defineComponent({
    name: 'IndexStack',
    components: {
    },
    data() {
        return {

            id: this.$route.params.id,
            textoPrincipal: '',
            linguagem: [],
            posts: [],
            linguagens: [],
            navigation: [
                {
                    title: 'Home',
                    value: 1,
                },
            ],
            selectLinguagem: '',
            display: false
        }
    },
    mounted() {
        this.indexLinguagens(),
            this.getAll()
    },
    methods: {
        formatarData(data) {
            return data
        },
        indexLinguagens() {
            http.get('/linguagem/index').then(response => {
                this.linguagens = response.data
            }).catch(() => {

            })
        },
        busca(id) {
            this.display = true
            console.log(id);
            http.get(`/posts/index/${id}`).then(response => {
                this.posts = response.data
            }).catch(() => {

            })
            http.get(`/linguagem/show/${id}`).then(response => {
                this.linguagem = response.data
            }).catch(() => {

            })
            this.textoPrincipal = `Questôes sobre ${this.linguagem.nome}`

        },
        BuscaPostsPeloId() {
            http.get(`/posts/index/${this.selectLinguagem}`).then(response => {
                this.posts = response.data
            }).catch(() => {

            })
            http.get(`/linguagem/show/${this.selectLinguagem}`).then(response => {
                this.linguagem = response.data
            }).catch(() => {

            })
            
        },
        BuscaLinguagemPeloId() {
            http.get(`/linguagem/show/${this.selectLinguagem}`).then(response => {
                this.linguagem = response.data
            }).catch(() => {

            })
        },
        ExibirPorFramework(id) {
            console.log(id);
            http.get(`/posts/framework/${id}`).then(response => {
                this.posts = response.data
            }).catch(() => {

            })
        },
        getAll() {
            http.get('/posts/getAll').then(response => {
                this.posts = response.data
            }).catch(() => {

            })
        }

    },

    // computed: {
    //     buscaLinguagemAtual() {
    //         http.get(`/linguagem/show/${this.$route.params.id}`).then(response => {
    //             this.linguagem = response.data
    //         })
    //     }
    // },
})

</script>
<style scoped>
.custom-title-color {
    color:
        #42A5F5;
    font-family: 'Poppins', sans-serif;
    /* Substitua pela cor desejada para o título */
}

@media (max-width: 1500px) {
    #linguagens {
        display: none;
    }

}

@media (min-width: 1500px) {
    .selectLinguagens {
        display: none;
    }
}

.footer {
    display: none;
}
</style>    