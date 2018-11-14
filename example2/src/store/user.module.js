import { ACTIONS, GETTERS, MUTATIONS } from './types';
import { API, getData, postData } from '../http';

export default {
    state: {
        [GETTERS.USER_NAME]: false,
        [GETTERS.USER_AUTH]: false
    },
    getters: {
        [GETTERS.USER_AUTH]: state => state[GETTERS.USER_AUTH],
        [GETTERS.USER_NAME]: state => state[GETTERS.USER_NAME]
    },
    actions: {
        [ACTIONS.USER_LOGIN]: ({ commit }, { username, password }) => {
            return postData(API.LOGIN, { loginName: username, password });
        },
        [ACTIONS.USER_LOGOUT]: ({ commit, getters }) => {
            return getData(API.LOGOUT, { authorization: getters[GETTERS.USER_AUTH] }).then(() => {
                commit(MUTATIONS.USER_SET_NAME, null);
                commit(MUTATIONS.USER_SET_AUTH, null);
            });
        }

    },
    mutations: {
        [MUTATIONS.USER_SET_NAME]: (state, payload) => state[GETTERS.USER_NAME] = payload,
        [MUTATIONS.USER_SET_AUTH]: (state, payload) => state[GETTERS.USER_AUTH] = payload
    }
};