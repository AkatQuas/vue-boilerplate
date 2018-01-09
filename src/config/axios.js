import axios from 'axios';
// import store from '../store/index';
// import { MUTATIONS } from '../store/types';


axios.defaults.baseURL = process.env.API_HOST;

// axios 配置
axios.defaults.timeout = 5000;

// http request 拦截器
axios.interceptors.request.use(
    config => {
        // if ( store.getters.token ) {
        //     config.headers.Authorization = store.getters.token;
        // }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        // if ( response.headers.authorization ) {
        //     store.commit(MUTATIONS.SETTOKEN, response.headers.authorization);
        // }
        return response.data;
    },
    error => {
        for (let x in error) {
            console.log('http-error', x, error[x]);
        }
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // store.commit(MUTATIONS.CLEARTOKEN);
                    // router.replace({
                    //     name: 'Login',
                    //     query: { redirect: router.currentRoute.path }
                    // });
                    break;
            }
            return Promise.reject(error.response);
        }
        //500 no response
        return Promise.reject({ data: { message: '服务器错误！' } });
    });

export default axios;
