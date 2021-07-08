import Vue from 'vue'

import axios, { AxiosStatic, AxiosError } from 'axios'

declare global {
    interface Window {
        axios: AxiosStatic
    }
}

Vue.prototype.$http = window.axios = axios

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.withCredentials = true
