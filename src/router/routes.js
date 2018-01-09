const _import = process.env.NODE_ENV === 'development' ? file => require('@/views/' + file + '.vue').default : file => () => import('@/views/' + file + '.vue');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: _import('home')
    },
    {
        path: '*',
        name: 'Page404',
        component: _import('error/404')
    }
];

export {
    routes
};
