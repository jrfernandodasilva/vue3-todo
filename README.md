# To Do List

## Project setup
```bash
yarn install
```

## Run project with a single command
```bash
yarn dev
```

### Compiles and hot-reloads for development (separated)
```bash
yarn serve
```

### Compiles and minifies for production
```bash
yarn build
```

### Lints and fixes files
```bash
yarn lint
```

### Run api (separated)
```bash
yarn json-server
```
> Json Server docs - https://github.com/typicode/json-server

## Docker Compose

### Build
```bash
docker compose build app-prod
```

### Run
```bash
# development mode with hot reload
# access: http://localhost:8080
docker compose up -d app

# production mode with static build files
# access: http://localhost:8001
docker compose up -d app-prod
```

## Docker

### Build
```bash
docker build -t vue3-todo:unstable . --no-cache
```

### Run
```bash
# without volume
docker run -d -p 8080:80 --name vue3-todo-app vue3-todo:unstable

# with volume
docker run -d -p 8080:80 -v $(pwd):/app --name vue3-todo-app vue3-todo:unstable
```

### Access container
```bash
docker exec -it vue3-todo-app sh 
```

### See logs
```bash
docker logs vue3-todo-app
```

### Stop and remove
```bash
docker stop vue3-todo-app && docker rm vue3-todo-app
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Node Version Requirement

This project requires a minimum Node version of 18.

## Technologies Used

- [Vue 3](https://vuejs.orgs) - The Progressive JavaScript Framework
- [Vuex](https://vuex.vuejs.org) - Vuex is a state management pattern + library for Vue.js applications
- [Vue I18n](https://vue-i18n.intlify.dev) - Internationalization plugin for Vue.js
- [VueUse](https://vueuse.org) - Collection of Vue Composition Utilities
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework packed 
- [@kyvg/vue3-notification](https://kyvg.github.io/vue3-notification/?ref=madewithvuejs.com) - Trigger notifications for Vue.js
- [JSON Server](https://github.com/typicode/json-server/tree/v0) - Get a full fake REST API with zero coding in less than 30 seconds

## Link to the App
[Vue 3 Todo App](https://jrfernandodasilva.github.io/vue3-todo/)
