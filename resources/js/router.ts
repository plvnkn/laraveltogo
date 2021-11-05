import Vue from 'vue'
import VueRouter from 'vue-router'


import Core from '@/modules/core/routes'
import ModuleA from '@/modules/moduleA/routes'
import ModuleB from '@/modules/moduleB/routes'

Vue.use(VueRouter)

const routes = Array.prototype.concat([
    ModuleA,
    ModuleB,
    Core
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
