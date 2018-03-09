# vue-boilerplate-js

A boilerplate on Vue^2.5.0, A short one with only the folder structures, config files and package dependencies.

## How to use this boilerplate

**./upload**: for uploading production folder to the on-line server!

```bash
# before using this shell script,
# config your server ip and folder path in 'upload' file

# when need to upload, 'cd' to the project folder,
# and run script

./upload

# choose whether uploading to test server or production server with 'n' or 'y'

```

**./syncf**: for `rsync` files with the project folder in the initial phase.

```bash
# vue-webpack-template don't provide much for development
# so some basic folder structure and useful files
# need to be initialized as well.
# using the command to copy all the initialize them

# only one parameter, the project folder

./syncf PROJECTFOLDER

```

## On responsive design

On [使用Flexible实现手淘H5页面的终端适配](https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html), copying from [imochen hotcss](https://github.com/imochen/hotcss), makes it possible to using `rem` in the stylesheet.

And modified the `src/style/mobile.css`, replacing `px` with `rem`. A lot work is saved!

And `Scss` saves your stylesheet!!!

However, if you need to develop on Desktop browser, be careful using these files. Replacing `src/style/mobile.css` with `src/style/pc.css` is recommended.

## On HTTP Request

[`src/config/axios.js`](./src/config/axios.js) shows a lot of configuration on axios.

Sometimes a proxfy config is required, check the [page](https://webpack.js.org/configuration/dev-server/#devserver-proxy) for the usage on how webpackDevServer use the proxy. And the place where you need to write the config is `config/index.js`, in `dev -> proxyTable` part to configure the usage from above page.

## On Vue-CLI

When generating the project, choose `ESlint`, select whichever config you like.

## Other NPM Packages you may want

From vue-cli:
- `vue-router`

Using --save
- `axios`, `vue-axios` for HTTP Request
- `vuex`

Using --save-dev
- `eslint-plugin-vue`
- `node-sass`, `postcss-loader`, `sass-loader`, `scss-loader`

And other dependencies you want...
