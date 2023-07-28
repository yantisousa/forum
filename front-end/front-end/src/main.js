/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import store from '../../src/store/vuex'
import ClassicEditor from '@ckeditor/ckeditor5-vue'


const app = createApp(App)
app.use(ClassicEditor)
app.use(store)
registerPlugins(app)

app.mount('#app')
