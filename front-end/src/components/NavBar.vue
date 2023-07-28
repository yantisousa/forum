<template>
    <v-app-bar :transparent="true" class="custom-component transparent lighten-1">
        <v-app-bar-title @click="MudarTab()"><router-link style="text-decoration: none;" to="/"> <span
                    style="color: white;">Conexão</span><span style="color: #42A5F5;">Dev</span>
                <i class="bi bi-cup-hot ms-1 " style="color: #42A5F5;"></i>
            </router-link></v-app-bar-title>

        <v-tabs v-model="tab">
            <router-link to="/">
                <v-tab id="nav" style="text-decoration: none; color: white;" :value="1">Inicio</v-tab>
            </router-link>
            <router-link style="text-decoration: none; color: white;" to="/show/stack/1">
                <v-tab id="questoes" :value="2">Questôes</v-tab>
            </router-link>
        </v-tabs>

        <v-btn id="nav" v-if="store.state.usuario.length == []" v-bind="props">

            <router-link @click="tab = null" to="/user/login" style="text-decoration: none; color: white;">Entrar
                <i class="bi bi-chevron-down"></i></router-link>
        </v-btn>
        <router-link  @click="tab = null" to="/user/login" style="text-decoration: none; color: white; ">
        <v-btn id="btn-entrar"   sclass="bg-primary mr-3 ml-3"  v-if="store.state.usuario.length == []" v-bind="props">

                Entrar
            </v-btn>
        </router-link>
        <router-link  @click="tab = null" id="nav" to="/user/cadastro">
            <v-btn v-if="store.state.usuario.length == []" class="bg-primary mr-4">
                Cadastro
            </v-btn>
        </router-link>
        <div id="nav" v-if="store.state.usuario.length != []" class="d-flex justify-space-around">
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn class="mr-2" color="primary" v-bind="props">
                        {{ store.state.usuario.name }}
                    </v-btn>
                </template>
                <v-list>
                    <router-link style="text-decoration: none; color: white" @click="tab = null"
                        :to="`/usuario/config/${store.state.usuario.id}`">
                        <v-list-item value="1">
                            <v-list-item-title  @click="tab = null">Configurações</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <v-list-item  value="2" @click="logout()">
                        <v-list-item-title>Sair</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </v-app-bar>
</template>
<script >
import { defineComponent } from 'vue';
import http from '../api/axios'
import { useStore } from 'vuex';
export default defineComponent({
    name: 'NavBar',
    data() {
        return {
            tab: null,
            nome: '',
            email: '',
            senha: '',
            tokeAutentificador: '',
            tokenAutenticacao: '',
            items: [
                { title: 'Configurações' },
                { title: 'Sair' },

            ],
        }
    },
    mounted() {
        // this.token(),
        this.VerificarUsuarioLogado()
    },
    methods: {
        MudarTab() {
            this.tab = 1
        },
        VerificarUsuarioLogado() {
            let token = localStorage.getItem('token');
            this.tokenAutenticacao = token
        },
        // token() {
        //     http.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
        //         this.tokeAutentificador = response.data
        //     }).catch(function(){

        //     })
        //     ;
        // },
        login() {
            http.post('/usuario/login', {
                email: this.email,
                password: this.senha,
            },
                {
                    headers: {
                        'Authorization': 'Bearer ' + this.tokeAutentificador,
                        'Content-Type': 'application/json'
                    }
                }
            ).then(response => {
                localStorage.setItem('token', response.data)
                let token = localStorage.getItem('token');
                this.tokenAutenticacao = token
                this.usuario()
            })
        },
        async usuario() {
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
            })
        },
        logout() {
            console.log(this.tokeAutentificador);
            http.get('/usuario/logout',
                {
                    headers: {
                        'Authorization': 'Bearer ' + this.tokenAutenticacao,
                        'Content-Type': 'application/json'
                    }
                }
            ).then(() => {
                localStorage.removeItem('token');
                this.tokenAutenticacao = null
                this.store.commit('INSERE_USUARIO', [])
                this.$router.push('/')
            }).catch(() => {
          
            })
            this.tab = null
        }
    },
    setup() {
        const store = useStore();
        return {
            store
        }
    }
})
</script>
<style>
@media (max-width: 600px) {
    #nav {
        display: none;
    }
    #questoes {
        width: 10px;
    }
    
}
@media (min-width: 600px){
    #btn-entrar {
        display: none;
    }
}
</style>