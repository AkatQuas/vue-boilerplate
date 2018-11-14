module.exports = {
    devServer: {
        proxy: {
            '/example': {
                target: 'http://192.168.8.109:8081',
            }
        }
    }
};