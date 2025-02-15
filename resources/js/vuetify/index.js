import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: '#3f51b5',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#bd9999',
            },
            // dark: {
            //     primary: '#3f51b5',
            //     secondary: '#b0bec5',
            //     accent: '#8c9eff',
            //     error: '#bd9999',
            // },
        },
    },
}

export default new Vuetify(opts)

