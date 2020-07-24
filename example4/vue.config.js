const isProduction = process.env.NODE_ENV === 'production';
const path = require('path');

module.exports = {
  pluginOptions: {
    dll: {
      entry: ['vue', 'vue-meta', 'vue-router', 'vuex'],
      // /**
      //  * the directory path where the vendor files will be generated in
      //  * when running vue-cli-service dll
      //  */
      output: path.join(__dirname, './public/dll'),
      // // If you only want to open `dll plugin` during production build,
      // // you can use the following config:
      open: isProduction,
      // // !! Recommended configuration
      cacheFilePath: path.resolve(__dirname, './public'),
    },
  },
};
