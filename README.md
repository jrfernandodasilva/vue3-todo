# To Do List

[![License](https://img.shields.io/github/license/jrfernandodasilva/vue3-todo.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Vue.js](https://img.shields.io/badge/Vue.js-v3.2.13-green.svg?style=flat-square)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=flat&logo=google-chrome&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
[![Downloads](https://img.shields.io/github/downloads/jrfernandodasilva/golang-roadmap/total.svg?v1)](https://github.com/jrfernandodasilva/golang-roadmap/releases)
[![Contributors](https://img.shields.io/github/contributors/jrfernandodasilva/vue3-todo.svg)](https://github.com/jrfernandodasilva/vue3-todo/graphs/contributors)
[![Documentation](https://img.shields.io/badge/docs-latest-blue.svg)](https://github.com/jrfernandodasilva/vue3-todo/wiki)
[![Last Update](https://img.shields.io/github/last-commit/jrfernandodasilva/vue3-todo.svg)](https://github.com/jrfernandodasilva/vue3-todo/commits/main)

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
- [@vue/cli-plugin-pwa](https://cli.vuejs.org/core-plugins/pwa.html) - Plugin for Vue CLI that helps you create Progressive Web Apps (PWAs)
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework packed 
- [@kyvg/vue3-notification](https://kyvg.github.io/vue3-notification/?ref=madewithvuejs.com) - Trigger notifications for Vue.js
- [JSON Server](https://github.com/typicode/json-server/tree/v0) - Get a full fake REST API with zero coding in less than 30 seconds

## Link to the App
[Vue 3 Todo App](https://jrfernandodasilva.github.io/vue3-todo/)
