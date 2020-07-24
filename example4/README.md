# example4

## Featured Libraries

- [vue-meta](https://github.com/nuxt/vue-meta) for adding meta tags, especially
  _Keywords-Description-Title_ tags.

It would add some tags like
`<meta data-vue-meta="1" data-vmid="description" name="description" content="The home page of posts">`.
However it won't change the original tags in the html file such as
`<meta name="keywords" content="initial keywords,akatquas,vue project">` or
`<meta name="description" content="initial description,akatquas build a vue project">`.

- Using [vue-cli-plugin-dll](https://github.com/fingerpan/vue-cli-plugin-dll) to
  bundle the common dependencies into dll file. You'd better build dll files
  before build the project.

- Using [spa-prerendere](https://github.com/ecowebhosting/spa-prerenderer#usage)
  to generate SEO-friendly static html files.

> You might need set the puppeteer download registry using
>
> ```bash
> $ npm config set puppeteer_download_host=https://npm.taobao.org/mirrors
> ```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
