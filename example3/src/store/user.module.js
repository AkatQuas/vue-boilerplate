import { ACTIONS, GETTERS, MUTATIONS } from './types';
import { getData } from '../http/index';
import { API } from '../http';

export default {
    state: {
        [GETTERS.USER]: null
    },
    getters: {
        [GETTERS.USER]: state => state[GETTERS.USER]
    },
    mutations: {
        [MUTATIONS.USER_SET]: (state, paylod) => {
            state[GETTERS.USER] = paylod;
        }

    },
    actions: {
        [ACTIONS.USER_FETCH]: ({ commit }) => {
            //todo
            getData(API.USER_INFO).then().catch();
        }
    }
};