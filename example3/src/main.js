import Vue from 'vue';
import App from './App.vue';
import './utils/hotcss';
import './assets/reset.css';
import './assets/iakit.h5.css';

import NavBack from './components/nav-back.vue';
import TypeButton from './components/type-button.vue';
import Cell from './components/cell.vue';
import PlainTitle from './components/plain-title.vue';

import router from './router';
import store from './store';


Vue.config.productionTip = false;


Vue.component(NavBack.name, NavBack);
Vue.component(TypeButton.name, TypeButton);
Vue.component(Cell.name, Cell);
Vue.component(PlainTitle.name, PlainTitle);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
