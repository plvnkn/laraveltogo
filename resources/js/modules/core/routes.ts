export default [
    {
        alias: '/',
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "main" */ './views/Dashboard.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue'),
    }
]