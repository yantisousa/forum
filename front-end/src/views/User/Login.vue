<template>
    <v-col>

        <form @submit.prevent="login()">
            <v-col class="text-center">
                <h1 id="text-login">Faça seu login</h1>
            </v-col>
            <v-col style="margin-top: 150px;" class="mx-auto" md="4">
                <v-text-field v-model="email" type="email" label="Email:" variant="underlined">
                </v-text-field>
            </v-col>
            <v-col class="mx-auto" md="4">
                <v-text-field v-model="senha" type="password" label="Senha:" variant="underlined">
                </v-text-field>
            </v-col>
            <v-col class="mx-auto" md="4">
                <v-checkbox required label="Aceitar termos de uso"></v-checkbox>
            </v-col>
            <v-col class="mx-auto" md="4">
                <v-btn type="submit" class="bg-green" style="width: 100%;">Entrar</v-btn>
            </v-col>
            <v-col class="mx-auto text-start" cols="12" md="4">
                Não possui conta? <router-link to="/user/cadastro" style="text-decoration: none;">Se cadastre
                    aqui</router-link>
            </v-col>
        </form>
    </v-col>
    <div class="text-center">
        <v-snackbar v-model="snackbar" :timeout="2000">
            {{ text }}

            <template v-slot:actions>
                <v-btn color="red" variant="text" @click="snackbar = false">
                    Fechar
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>
<script >
import { defineComponent } from 'vue';
import http from '../../api/axios.js'
import { useStore } from 'vuex';
export default defineComponent({
    name: 'LoginUser',
    data() {
        return {
            snackbar: false,
            text: '',
            nome: '',
            email: '',
            senha: '',
            tokenAuth: ''
        }
    },
    mounted() {
        this.token()
    },
    methods: {
        token() {
            http.get('https://conexaodev.portfolioyansousa.com/back-end/public/sanctum/csrf-cookie').then(response => {
                this.tokenAuth = response.data
            });
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
                console.log(this.store);
                this.store.commit('INSERE_USUARIO', response.data)
            }).catch(function () {

            })
        },
        login() {
            http.post('/usuario/login', {
                email: this.email,
                password: this.senha,
            },
                {
                    headers: {
                        'Authorization': 'Bearer ' + this.tokenAuth,
                        'Content-Type': 'application/json'
                    }
                }
            ).then(response => {
                localStorage.setItem('token', response.data)
                let token = localStorage.getItem('token');
                this.tokenAutenticacao = token
                this.usuario()
                this.$router.push('/')

            }).catch(() => {
                this.snackbar = true
                this.text = "Email ou senha incorretos!"
            })
        },
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
#text-login {
    font-family: 'Poppins', sans-serif;
}
</style>