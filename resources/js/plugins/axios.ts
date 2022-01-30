import Vue from 'vue'

import axios, { AxiosStatic, AxiosError } from 'axios'

import router from '../router'

declare global {
    interface Window {
        axios: AxiosStatic
    }
}

Vue.prototype.$http = window.axios = axios

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.withCredentials = true

window.axios.interceptors.response.use((response: any) => {
    return response
}, (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
       // window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname.slice(1))
        // const redirect = encodeURIComponent(window.location.pathname.slice(1))
        router.push({ 'name': 'Login', params: { redirect : '/' + encodeURIComponent(window.location.pathname.slice(1)) }})
    }
    return Promise.reject(error)
})
