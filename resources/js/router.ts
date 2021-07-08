import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '@/modules/app/routes'
import Finances from '@/modules/finances/routes'


Vue.use(VueRouter)

const routes = Array.prototype.concat([
    App,
    Finances,
])

const router = new VueRouter({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes
})

export default router
