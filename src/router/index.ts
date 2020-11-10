import Vue from 'vue'
import Router from 'vue-router'
import dataShow from './dataShow';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '',
            redirect: '/dataShow',
        },
        {
            name: '数据展示',
            path: '/dataShow',
            component:() => import('../views/allDataShow/dataShowMng.vue'),
            redirect:'dataShow/futureHome',
            children:[
                ...dataShow,
            ]
        },
        {
            name: '控件下载',
            path: '/download',
            component:() => import('../views/download.vue'),
        },
    ]
})
