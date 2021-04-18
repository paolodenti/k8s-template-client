# Test Vue SPA for K8s template

Vue.js SPA frontend template for [https://github.com/paolodenti/k8s-template](https://github.com/paolodenti/k8s-template)

## Environment variables

`VUE_APP_REST_API`: for local development, rest api server, defaults to empty string.

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
#
# or if pointing to an external API
# VUE_APP_REST_API="<your rest api url>" npm run build
# e.g. 
# VUE_APP_REST_API="http://192.168.10.80:8080/somepath" npm run build
```

### Build Docker container

```bash
docker build -t paolodenti/k8s-template-client .
#
# or if pointing to an external API
# docker build -t paolodenti/k8s-template-client --build-arg VUE_APP_REST_API="<your rest api url>" .
# e.g. 
# docker build -t paolodenti/k8s-template-client --build-arg VUE_APP_REST_API="http://192.168.10.80:8080/somepath" .
```
