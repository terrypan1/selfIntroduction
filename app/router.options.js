//自定義router
const customRoutes = [
    {
        path: '/testViews',
        name: 'defineprops',
        component: () => import('../pages/test.vue')
    }
]

export default {
    //_routes 可以理解成全部的router
    routes: (_routes) => _routes.concat(customRoutes)
}