<template>
    <v-col>
        <form @submit.prevent="cadastrar()">
            <v-col class="text-center">
                <h1 id="text-login">Faça seu cadastro</h1>
            </v-col>
            <v-col style="margin-top: 150px;" class="mx-auto" md="4">
                <v-text-field v-model="nome" type="text" label="Nome:" variant="underlined">
                </v-text-field>
            </v-col>
            <v-col class="mx-auto" md="4">
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
                <v-btn type="submit" class="bg-green" style="width: 100%;">Cadastrar</v-btn>
            </v-col>
            <v-col class="mx-auto text-start" cols="12" md="4">
                Já possui conta? <router-link to="/user/login" style="text-decoration: none;">Entre aqui</router-link>
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
export default defineComponent({
    name: 'CadastroUser',
    data() {
        return {
            snackbar: false,
            text: '',
            nome: '',
            email: '',
            senha: '',
        }
    },
    methods: {
        cadastrar() {
            http.post('/usuario/store', {
                image: 'https://conexaodev.portfolioyansousa.com/back-end/public/assets/avatar.jpeg',
                name: this.nome,
                email: this.email,
                password: this.senha
            }).then(response => {
                console.log(response.data);
                this.$router.push('/user/login')
            }).catch(() => {
                this.snackbar = true
                this.text = "Erro ao cadastrar!"
            })
        }
    }
})
</script>
