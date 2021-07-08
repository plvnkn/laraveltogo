export default {
    path: '/',
    name: 'App',
    component: () => import(/* webpackChunkName: "app" */ './views/index.vue'),
}
