require('./utils/hotcss');
import Vue from 'vue';
import VueAxios from 'vue-axios';
import App from './App.vue';
import axios from './config/axios';
import mixin from './mixin';

import router from './router';
import store from './store';

Vue.use(VueAxios, axios);

Vue.mixin(mixin);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
});
