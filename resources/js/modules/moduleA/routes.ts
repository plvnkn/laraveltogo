export default {
    path: '/moduleA',
    name: 'ModuleA',
    component: () => import(/* webpackChunkName: "app" */ './views/index.vue'),
}
