<template>
  <v-list>
    <v-list-item v-for="(linguagem, i) in linguagens" :key="i" :value="linguagem" color="primary" variant="plain">
      <router-link @click="busca(linguagem.id)" :posts="posts" style="text-decoration: none;  color: white;"
        :to="`/show/stack/${linguagem.id}`">
        <v-list-item-title v-text="linguagem.nome"></v-list-item-title>
      </router-link>
    </v-list-item>
  </v-list>
</template>
  
<script >
import { defineComponent } from 'vue';
import http from '../api/axios.js'
export default defineComponent({
  name: 'Navigation',
  data() {
    return {
      linguagens: [],
      posts: [],
      navigation: [
        {
          title: 'Home',
          value: 1,
        },
      ],

    }
  },
  mounted() {
    this.indexLinguagens()
  },
  methods: {
    async busca(id) {
      await http.get(`/posts/index/${id}`).then(response => {
        this.posts = response.data
      })
      console.log(this.posts);
    },
    indexLinguagens() {
      http.get('/linguagem/index').then(response => {
        this.linguagens = response.data
      })
    },

  },
})
</script>
  