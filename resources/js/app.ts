import Vue from 'vue'
import Vuetify from '@/plugins/vuetify'
import Main from './Main.vue'


const app = new Vue({
    vuetify: Vuetify,
    render: h => h(Main),
}).$mount('#app')
