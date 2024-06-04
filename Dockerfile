FROM node:20.14.0-alpine as build_stage

LABEL maintainer="jrfernandodasilva <jr.fernandodasilva@gmail.com>"

WORKDIR /app

COPY package.json yarn.lock ./

RUN apk add --no-cache yarn \
    && yarn install --production --frozen-lockfile \
    && yarn add @vue/cli

COPY . .

RUN yarn build

FROM nginx:1.27-alpine

WORKDIR /app

COPY --chown=www-data:www-data --from=build_stage /app/dist .

COPY ./docker/nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
