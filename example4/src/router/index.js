import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import { RouteNames } from './route-names';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: RouteNames.Home,
    component: Home,
  },
  {
    path: '/about',
    name: RouteNames.About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/join',
    name: RouteNames.Join,
    component: () => import(/* webpackChunkName: "join" */ '../views/Join.vue'),
  },
  {
    path: '/post',
    component: () => import(/* webpackChunkName: "post" */ '../views/Post/Post.vue'),
    children: [
      {
        path: '',
        name: RouteNames.Post,
        component: () => import(/* webpackChunkName: "post" */ '../views/Post/PostList.vue'),
      },
      {
        path: ':slug',
        component: () => import(/* webpackChunkName: "post" */ '../views/Post/PostDetail.vue'),
      },
    ],
  },
  {
    path: '/async-callback',
    name: RouteNames.AsyncCallback,
    component: () => import(/* webpackChunkName: "async-callback" */ '../views/AsyncCallback.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
