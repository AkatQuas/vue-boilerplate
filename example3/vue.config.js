module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();

        svgRule
            .use('vue-svg-loader')
            .loader('vue-svg-loader');
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://10.20.9.19:8888/jx/',
            }
        }
    }
};
