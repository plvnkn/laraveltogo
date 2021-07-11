export default {
    path: 'finances',
    name: 'Finances',
    component: () => import(/* webpackChunkName: "finances" */ './views/index.vue'),
}