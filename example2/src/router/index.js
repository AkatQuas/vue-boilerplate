import Vue from 'vue';
import Router from 'vue-router';
import routes, { ROUTE_NAME } from './route';
import store from '../store';
import { GETTERS } from '../store/types';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const { requireAuth } = to.meta;
    if (!requireAuth || store.getters[GETTERS.USER_NAME]) {
        next();
    } else {
        next({ name: ROUTE_NAME.LOGIN });
    }
});

export default router;
