import Admin from '@/views/admin/index.vue';
import Apps from '@/views/admin/apps.vue';
import Login from '@/views/login.vue';

export const ROUTE_NAME = {
    LOGIN: 'login',
    APPS: 'apps',
    MIDDLEWARES: 'middlewares',
    NOT_FOUND: 'not-found'
};

const test = process.env.NODE_ENV === 'development' ? [
    {
        path: '/test',
        component: require('@/views/misc/test.vue').default
    }
] : [];

const routes = test.concat([
    {
        path: '/',
        redirect: { name: ROUTE_NAME.APPS }
    },
    {
        path: '/login_page',
        name: ROUTE_NAME.LOGIN,
        component: Login
    },
    {
        path: '/admin',
        component: Admin,
        redirect: { name: ROUTE_NAME.APPS },
        children: [
            {
                path: 'apps',
                name: ROUTE_NAME.APPS,
                component: Apps,
                meta: { requireAuth: true }
            },
            {
                path: 'middlewares',
                name: ROUTE_NAME.MIDDLEWARES,
                component: () => import(/* webpackChunkName: "mids" */ '@/views/admin/mids.vue'),
                meta: { requireAuth: true }
            },
        ]

    },
    {
        path: '/404',
        name: ROUTE_NAME.NOT_FOUND,
        component: () => import(/* webpackChunkName: "not-found" */ '@/views/misc/not-found.vue')
    },
    {
        path: '**',
        redirect: { name: ROUTE_NAME.NOT_FOUND }
    }
]);

export default routes;
