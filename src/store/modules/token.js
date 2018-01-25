import { GETTERS, MUTATIONS } from '../types';

export default {
    state: {
        [GETTERS.Token]: null
    },
    getters: {
        [GETTERS.Token]: state => state[GETTERS.Token]
    },
    mutations: {
        [MUTATIONS.SetToken]: (state, payload) => {
            localStorage.setItem(GETTERS.Token, payload);
            state[GETTERS.Token] = payload;
        },
        [MUTATIONS.ClearToken]: state => {
            localStorage.removeItem(GETTERS.Token);
            state[GETTERS.Token] = null;
        }
    }
};
