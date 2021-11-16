export default {
    path: '/moduleA',
    name: 'ModuleA',
    component: () => import(/* webpackChunkName: "moduleA" */ './views/index.vue'),
}
