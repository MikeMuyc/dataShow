import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import { LoadingBar, Modal } from 'iview';




import VueOl from '@suc/vue-ol';
Vue.use(VueOl);


import plugin from "./utils/suc-plugin";
Vue.use(plugin);
//element组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import 'iview/dist/styles/iview.css';
import './styles/index.scss';
import './styles/main.scss';




//滚动条优化插件
// @ts-ignore
import VuePerfectScrollbar from './plugins/perfect-scrollbar'
Vue.use(VuePerfectScrollbar);

Vue.config.productionTip = false;

Vue.prototype.$Modal=Modal;

router.beforeEach((to:any, from:any, next:any) => {
    LoadingBar.start();
    next();
});

router.afterEach(() => {
    LoadingBar.finish();
});


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
