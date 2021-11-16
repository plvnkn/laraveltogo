export default {
    path: '/user-management',
    name: 'UserManagement',
    component: () => import(/* webpackChunkName: "userManagement" */ './views/index.vue'),
}
