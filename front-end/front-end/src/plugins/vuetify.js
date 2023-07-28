/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      defaultFontFamily: 'ui-sans-serif',
      dark: {
        colors: {
          primary: '#42a5f5', // Cor principal
          secondary: '#66bb6a', // Cor secundária
          accent: '#ff4081', // Cor acentuada
          error: '#f44336', // Cor de erro
          warning: '#ffc107', // Cor de aviso
          info: '#2196f3', // Cor de informação
          success: '#4caf50', // Cor de sucesso
          background: "#212121"
          
        },
      },
    },
  },
})
