import { createApp } from 'vue'
import App from './App.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/style.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// specific fa icon
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

// Supports weights 100-900
import '@fontsource-variable/montserrat';

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')


/* import font awesome icon component */

/* import specific icons */