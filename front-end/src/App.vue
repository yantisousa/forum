<template>
  <v-app theme="dark">
    <NavBar />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer class="footer">
      <v-row>
        <v-col class="text-center">
          <span style="color: black;"> <b>Termos de uso</b> </span><br>
          Todos os direitos reservados © 2023
        </v-col>
      </v-row>

    </v-footer>
  </v-app>
</template>

<script >
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue'
import http from './api/axios';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'App',
  components: {
    NavBar,
  },
  mounted() {
    this.VerificarUsuarioLogado()
  },
  methods: {
    async VerificarUsuarioLogado() {
      let token = localStorage.getItem('token');
      await http.get('/usuario/show',
        {
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }
      ).then(response => {
        this.store.commit('INSERE_USUARIO', response.data)
      }).catch(function () {
        
      })
    },
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

</style>