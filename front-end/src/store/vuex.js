import { createStore } from 'vuex'
export default createStore({
  state: {
    usuario: []
  },
  mutations: {
    'INSERE_USUARIO'(state, usuario) {
      state.usuario = usuario
    }
  }
})