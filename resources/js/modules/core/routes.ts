export default {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "app" */ './views/Login.vue'),
}
