import { GETTERS, MUTATIONS, TOKEN } from '../types';

export default {
    state: {
        token: null
    },
    getters: {
        [GETTERS.TOKEN]: state => state.token
    },
    mutations: {
        [MUTATIONS.SETTOKEN]: (state, payload) => {
            localStorage.setItem(TOKEN, payload);
            state.token = payload;
        },
        [MUTATIONS.CLEARTOKEN]: state => {
            localStorage.removeItem(TOKEN);
            state.token = null;
        }
    }
};
