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

window.axios.interceptors.response.use((response: any) => {
    return response
}, (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
        const redirect = encodeURIComponent(window.location.pathname.slice(1))
        window.location.href = '/login?redirect=' + redirect
    }
    return Promise.reject(error)
})
