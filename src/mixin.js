// todo the whole config is required here
export default {
    methods: {
        timeToGo (route) {
            setTimeout(() => {
                this.$router.push(route);
            }, 1000);
        },
        // todo
        staticRes: f => process.env.NODE_ENV === 'development' ? `/static/${f}` : `/static/${f}`
    },
    computed: {
        isIOS () {
            return -1 !== navigator.userAgent.toLowerCase().indexOf('iphone') || -1 !== navigator.userAgent.toLowerCase().indexOf('ipad');
        }
    }
};
