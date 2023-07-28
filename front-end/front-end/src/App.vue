<template>
  <v-app theme="dark">
    <NavBar />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer class="footer" >
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
import Navigation from './components/Navigation.vue';
import http from './api/axios';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    Navigation
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
.footer {
  background-image: linear-gradient(180deg,
      hsl(0deg 0% 13%) 0%,
      hsl(217deg 9% 15%) 34%,
      hsl(216deg 17% 17%) 46%,
      hsl(215deg 24% 19%) 55%,
      hsl(213deg 31% 21%) 63%,
      hsl(212deg 37% 23%) 71%,
      hsl(211deg 43% 25%) 78%,
      hsl(210deg 50% 26%) 85%,
      hsl(209deg 58% 27%) 93%,
      hsl(207deg 67% 28%) 100%);
    }
</style>