const _import = process.env.NODE_ENV === 'development' ? file => require('@/views/' + file + '.vue').default : file => () => import('@/views/' + file + '.vue');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: _import('home')
    },
    (process.env.NODE_ENV === 'development' ? {
        path: '/test',
        name: 'Test',
        component: _import('misc/test')
    } : {
        path: '/test',
        redirect: { name: 'Page404' }
    }),
    {
        path: '/page404',
        name: 'Page404',
        component: _import('misc/404')
    },
    {
        path: '*',
        redirect: { name: 'Page404' }
    }
];

export {
    routes
};
