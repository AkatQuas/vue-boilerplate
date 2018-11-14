import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css/normalize.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import PaginationTable from './components/pagination-table';

Vue.use(ElementUI);

Vue.component(PaginationTable.name, PaginationTable);

Vue.config.productionTip = false;

window.VOID_FUNC = () => {
};

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
