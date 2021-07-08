import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const requireModule = require.context('./modules', true, /state\.ts|mutations\.ts|getters\.ts|actions\.ts$/)
const modules: any = {}

requireModule.keys().forEach(fileName => {
    // Replace ./ and .ts
    const path = fileName.replace(/(\.\/|\.ts|store\/)/g, '')
    const [moduleName, imported] = path.split('/')

    if (!modules[moduleName]) {
        modules[moduleName] = {
            namespaced: true
        }
    }

    modules[moduleName][imported] = requireModule(fileName).default
})

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules
})