import Vue from 'vue';
import Vuex from 'vuex';
import setting from './setting.module';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        setting
    }
});
