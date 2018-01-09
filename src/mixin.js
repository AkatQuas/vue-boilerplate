export default {
    methods: {
        timeToGo( route ) {
            setTimeout(() => {
                this.$router.push(route);
            }, 1000);
        },
        staticRes: f => process.env.NODE_ENV === 'development' ? '/static/' + f : '/static/' + f
    }
};
