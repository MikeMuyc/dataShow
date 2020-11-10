export default [
    {
        path: 'futureHome',
        name: '未来社区首页',
        component: () => import('../views/futureHome.vue'),
    },
    {
        path: 'dataManage',
        name: '数字化管理',
        component: () => import('../views/dataManage.vue'),
    },
    {
        path: 'health',
        name: '健康场景',
        component: () => import('../views/health.vue'),
    },
    {
        path: 'traffic',
        name: '交通场景',
        component: () => import('../views/traffic.vue'),
    },
    {
        path: 'govern',
        name: '治理场景',
        component: () => import('../views/govern.vue'),
    },


    {
        path: 'neighbor',
        name: '邻里场景',
        component: () => import('../views/neighbor.vue'),
    },
    {
        path: 'lowCarbon',
        name: '低碳场景',
        component: () => import('../views/lowCarbon.vue'),
    },
    {
        path: 'serve',
        name: '服务场景',
        component: () => import('../views/serve.vue'),
    },
    {
        path: 'building',
        name: '建筑场景',
        component: () => import('../views/building.vue'),
    },
    {
        path: 'entrepreneurship',
        name: '创业场景',
        component: () => import('../views/entrepreneurship.vue'),
    },
    {
        path: 'education',
        name: '教育场景',
        component: () => import('../views/education.vue'),
    },

]
