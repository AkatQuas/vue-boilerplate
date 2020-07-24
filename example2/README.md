# example-web

This project use a `noopPromise` to interrupt the http promise chain. I only know it will work since that JavaScript use duck typing to check whether the object is a promise, [how is it implemented](./src/http.js#75).

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```
