<template>
    <div class="d-flex align-center justify-space-around mb-12">
        <v-avatar style="cursor: pointer;" :image="store.state.usuario.image" size="200">
            <v-icon><i class="bi bi-trash3-fill"></i></v-icon>
        </v-avatar>
    </div>
    <div class="d-flex align-center justify-space-around mb-12">
        <v-btn @click="onButtonClick" :loading="isSelecting" variant="text"><i class="bi bi-pen-fill"></i></v-btn>
    </div>
    <v-row>
        <v-col md="3" xs="12" sm="3" cols="12" class="mx-auto">
            <v-text-field :disabled="true" variant="outlined">
                {{ store.state.usuario.name }}

            </v-text-field>

        </v-col>
    </v-row>
    <v-row>
        <v-col md="3" xs="12" sm="3" cols="12" class="mx-auto">
            <v-text-field :disabled="true" variant="outlined">
                {{ store.state.usuario.email }}
            </v-text-field>
        </v-col>
    </v-row>


    <div class="text-center">
        <v-dialog v-model="dialog" width="400px">
            <template v-slot:activator="{ props }">
                <v-row>
                    <v-col cols="3" class="mx-auto">
                        <v-btn variant="text" v-bind="props">
                            EDITAR DADOS
                        </v-btn>
                    </v-col>
                </v-row>
            </template>

            <v-card>
                <v-card-text>
                    <form @submit.prevent="updateDados()">

                        <v-row>
                            <v-col>
                                <v-text-field variant="outlined" v-model="name">

                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field variant="outlined" v-model="email">
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <v-btn class="bg-green" type="submit" style="width: 100%;">EDITAR</v-btn>
                            </v-col>
                        </v-row>
                    </form>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" block @click="dialog = false">Fechar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>

    <input ref="uploader" class="d-none" type="file" accept="image/*" @change="onFileChanged">
    <template>
  <div class="text-center ma-2">
    <v-btn
      
    >
      Open Snackbar
    </v-btn>
    <v-snackbar
      v-model="snackbar"
      timeout="2000"
      class="text-center"
    >
      <span color="success">{{ text }}</span>

      <template v-slot:actions>
      
      </template>
    </v-snackbar>
  </div>
</template>
</template>
<script>
import { defineComponent } from 'vue';
import http from '@/api/axios';
import { useStore } from 'vuex';
export default defineComponent({
    name: 'ConfigUser',
    data() {
        return {
            snackbar: false,
            text: 'ok',
            dialog: false,
            isSelecting: false,
            selectedFile: null,
            token: null,
            name: '',
            email: '',
            password: ''
        }
    },
    mounted() {
        this.buscaToken(),
            this.usuario()
    },
    methods: {
        usuario() {
            this.name = this.store.state.usuario.name
            this.email = this.store.state.usuario.email
        },
        buscaToken() {
            let token = localStorage.getItem('token')
            this.token = token
        },
        onButtonClick() {
            this.isSelecting = true
            window.addEventListener('focus', () => {
                this.isSelecting = false
            }, { once: true })

            this.$refs.uploader.click()
        },
        onFileChanged(e) {
            this.selectedFile = e.target.files[0]
            const formData = new FormData();
            formData.append('image', this.selectedFile);
            formData.append('name', this.selectedFile.name);
            // console.log(formData);
            http.post('/usuario/upload',
                formData,
                {
                    headers: {
                        'Authorization': 'Bearer ' + this.token,
                        'Content-type': 'multipart/form-data'
                    }
                }).then(response => {
                    this.store.commit('INSERE_USUARIO', response.data)
                    console.log(this.store);
                })
            // do something
        },
        updateDados() {
            http.put('/usuario/update',
                {
                    name: this.name,
                    email: this.email
                },
                {
                    headers: {
                        'Authorization': 'Bearer ' + this.token,
                        'Content-Type': 'application/json'
                    }
                }
            ).then(response => {
                this.snackbar = true
                this.text = "Dados atualizados!"
                this.dialog = false
                this.store.commit('INSERE_USUARIO', response.data)
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