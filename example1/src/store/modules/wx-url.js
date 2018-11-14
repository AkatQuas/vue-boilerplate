import { GETTERS, MUTATIONS } from '../types';

// for wx share url
export default {
    state: {
        [GETTERS.WXURL]: ''
    },
    getters: {
        [GETTERS.WXURL]: state => state[GETTERS.WXURL]
    },
    mutations: {
        [MUTATIONS.SETWXURLIOS]: (state, payload) => {
            state[GETTERS.WXURL] = payload;
        }
    }
};

/*

// after importing wxjssdk in index.html
// register or invoke the function

const makeWXShare = () => {
    const vm = this;
    vm.$http.get(
        api.WXJSSDK +
        '?jsapis=onMenuShareTimeline,onMenuShareAppMessage&url=' +
        encodeURIComponent(vm.isIOS ? vm.$store.getters[GETTERS.WXURL] : location.href)
    ).then(({ data }) => {
        wx.config(data.config);
        const share = {
            title: '',
            link: '',
            desc: '',
            imgUrl: '',
            success: _ => false,
            cancel: _ => false
        };
        const js_apis = [
            {
                name: 'onMenuShareTimeline',
                keys: ['title', 'link', 'imgUrl', 'success', 'cancel']
            },
            {
                name: 'onMenuShareAppMessage',
                keys: ['title', 'desc', 'link', 'imgUrl', 'success', 'cancel']
            }
        ];
        js_apis.forEach(o => {
            const conf = {};
            o.keys.forEach(k => {
                conf[k] = share[k];
            });
            wx[o.name](conf);
        });
    });
}

*/