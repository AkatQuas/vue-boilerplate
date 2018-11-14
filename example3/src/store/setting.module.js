import { ACTIONS, GETTERS, MUTATIONS } from './types';
import { getData } from '@/http';
import { API } from '../http';

const l = [{ 'code': '100', 'value': 'IT' }, { 'code': '100101', 'value': '云计算/大数据' }, {
    'code': '100102',
    'value': '人工智能'
}, { 'code': '100103', 'value': '区块链' }, { 'code': '100104', 'value': '前端' }, {
    'code': '100105',
    'value': '后端'
}, { 'code': '100106', 'value': '数据库' }, { 'code': '100107', 'value': '移动开发' }, {
    'code': '100108',
    'value': '游戏开发'
}, { 'code': '100109', 'value': '运维' }, { 'code': '100110', 'value': '架构' }, {
    'code': '100111',
    'value': '编程语言'
}, { 'code': '100112', 'value': '计算机基础' }, { 'code': '100113', 'value': '研发管理' }, {
    'code': '100114',
    'value': '物联网'
}, { 'code': '100115', 'value': '游戏开发' }, { 'code': '100116', 'value': '安全' }, {
    'code': '100117',
    'value': '软件与服务'
}, { 'code': '100118', 'value': '互联网' }];

export default {
    state: {
        [GETTERS.SETTING]: null,
        [GETTERS.SETTING_ACTIVE]: null,
        [GETTERS.SETTING_ME]: null
    },
    getters: {
        [GETTERS.SETTING]: state => state[GETTERS.SETTING],
        [GETTERS.SETTING_ACTIVE]: state => state[GETTERS.SETTING_ACTIVE],
        [GETTERS.SETTING_ME]: state => state[GETTERS.SETTING_ME]
    },
    mutations: {
        [MUTATIONS.SETTING_SET]: (state, payload) => {
            state[GETTERS.SETTING] = payload;
        },
        [MUTATIONS.SETTING_ACTIVE_SET]: (state, payload) => {
            state[GETTERS.SETTING_ACTIVE] = payload;
        },
        [MUTATIONS.SETTING_ME_SET]: (state, payload) => {
            const mySetting = localStorage.getItem(GETTERS.SETTING_ME);
            state[GETTERS.SETTING_ME] = mySetting ? JSON.parse(mySetting) : payload;
        },
        [MUTATIONS.SETTING_ME_TOGGLE]: (state, payload) => {
            const index = state[GETTERS.SETTING_ME].findIndex(item => item.code === payload.code);
            if (index < 0) {
                state[GETTERS.SETTING_ME].push(payload);
            } else {
                state[GETTERS.SETTING_ME].splice(index, 1);
            }
        },
        [MUTATIONS.SETTING_ME_SAVE]: state => {
            state[GETTERS.SETTING_ME] = state[GETTERS.SETTING_ME].sort((a, b) => a.code - b.code);
            localStorage.setItem(GETTERS.SETTING_ME, JSON.stringify(state[GETTERS.SETTING_ME]));
        }
    },
    actions: {
        [ACTIONS.SETTING_FETCH]: ({ commit, getters }, payload = {}) => {
            const { force } = payload;
            const data = getters[GETTERS.SETTING];
            if (!data || force) {
                // todo initialize
                commit(MUTATIONS.SETTING_SET, l);
                commit(MUTATIONS.SETTING_ACTIVE_SET, l[0].code);
                commit(MUTATIONS.SETTING_ME_SET, l);
                commit(MUTATIONS.SETTING_ME_SAVE);
                return;
                getData(API.SETTING).then(res => {
                    console.log(res);
                });
            }
        }
    }

};