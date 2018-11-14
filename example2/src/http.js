import axios from 'axios';
import { Notification } from 'element-ui';
import store from './store';
import router from './router';
import { ROUTE_NAME } from './router/route';
import { GETTERS, MUTATIONS } from './store/types';

/*
 https://stackoverflow.com/a/43402123
 memory leak?
*/
const noopPromise = {
    then: () => noopPromise,
    catch: () => noopPromise
};

export const API = {
    LOGIN: '/login',
    LOGOUT: '/loginOut',
};

const _instance = axios.create({
    baseURL: '/example',
    timeout: 5000
});

_instance.interceptors.request.use(
    config => {
        const auth = store.getters[GETTERS.USER_AUTH];
        const name = store.getters[GETTERS.USER_NAME];
        if (name && auth) {
            config.headers['authorization'] = auth;
            config.headers['loginname'] = name;
        }
        return config;
    },
    error => Promise.reject(error)
);

_instance.interceptors.response.use(
    response => {
        const auth = response.headers.authorization;
        const name = response.headers.loginname;
        if (auth && name) {
            store.commit(MUTATIONS.USER_SET_AUTH, auth);
            store.commit(MUTATIONS.USER_SET_NAME, name);
        }
        const { data } = response;
        return response;
        if (data.code === '0') {
            return data.result;
        } else {
            Notification.error({
                title: '业务操作失败',
                message: data.message
            });

            return noopPromise;
        }
    },
    error => {
        if (error['response']) {
            const { status, data } = error['response'];
            switch (status) {
            case 401:
                return router.replace({
                    name: ROUTE_NAME.LOGIN
                });
            default:
                Notification.error({
                    title: '服务器返回了一个错误！',
                    dangerouslyUseHTMLString: true,
                    message: `状态码：${status}<br>错误信息：${data.message}`
                });
                return noopPromise;
            }
        }

        Notification.error({
            title: '错误',
            message: '服务器500！'
        });

        return noopPromise;
    }
);

export const getData = (url, params = {}) => _instance.get(url, { params });

export const postData = (url, params = {}) => _instance.post(url, params);

export const deleteData = (url) => _instance.delete(url);

export default _instance;
