import Vue from 'vue'

import store from './store'
import i18n from '@/plugins/i18n'
import Main from '@/modules/core/views/Main.vue'

import(/* webpackChunkName: "lodash" */ /* webpackPrefetch: true */ '@/plugins/lodash')

import(/* webpackChunkName: "validation" */ /* webpackPrefetch: true */ '@/plugins/validation')

const axiosPromise = import(/* webpackChunkName: "axios" */ /* webpackPreload: true */ '@/plugins/axios')
const momentPromise = import(/* webpackChunkName: "moment" */ /* webpackPrefetch: true */ '@/plugins/moment')
const vuetifyPromise = import(/* webpackChunkName: "vuetify" */ /* webpackPreload: true */ '@/plugins/vuetify')
const routerPromise = import(/* webpackChunkName: "router" */ /* webpackPreload: true */ './router')

init()

async function init (): Promise<void> {
    await axiosPromise
    await momentPromise
    const { default: router } = await routerPromise
    const { default: vuetify } = await vuetifyPromise

    new Vue({
        i18n,
        router,
        store,
        vuetify,
        render: h => h(Main),
        data: () => ({
            version: process.env.MIX_APP_VERSION
        })
    }).$mount('#app')
}
