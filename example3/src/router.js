import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';
import Essays from './views/essays.vue';
import Essay from './views/essay.vue';
// import Me from './views/me.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Home,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: Essays
                // },
                // {
                //     path: 'me',
                //     name: 'me',
                //     component: Me
                }
            ]
        },
        {
            path: '/essay/:id',
            name: 'essay',
            component: Essay
        },
        // {
        //     path: '/feedback',
        //     name: 'feedback',
        //     component: () => import(/* webpackChunkName: "feedback" */ './views/feedback.vue')
        // },
        {
            path: '**',
            name: 'not-found',
            component: () => import(/* webpackChunkName: "not-found" */ './views/not-found.vue')
        }
    ]
});

router.beforeEach((t, f, next) => {
   next();
});

export default router;
