import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
        gblue: '#1D6A81',
        pink: '#d72c84',
        bg: '#E3FFED'
      }
    }
  }
})
