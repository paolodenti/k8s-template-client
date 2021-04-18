# Test Vue SPA for K8s template

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
VUE_APP_REST_API="<your rest api url>" npm run build
```

### Build SPA Docker container

#### To use an external api

```bash
docker build -t paolodenti/k8s-template-client --build-arg VUE_APP_REST_API="${VUE_APP_REST_API}" .
```

#### To use the api behind the same proxy/ingress

```bash
docker build -t paolodenti/k8s-template-client .
```
