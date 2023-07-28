import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/vuex'
import vuetify from './plugins/vuetify'
import CKEditor from '@ckeditor/ckeditor5-vue'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(CKEditor)
  .use(store)
  .use(vuetify)
  .mount('#app')
