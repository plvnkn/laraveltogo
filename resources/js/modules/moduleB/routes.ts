export default {
    path: '/moduleB',
    name: 'ModuleB',
    component: () => import(/* webpackChunkName: "moduleB" */ './views/index.vue'),
    children: [
        {
            path: 'ChildB',
            name: 'ChildB'
        }
    ]
}
