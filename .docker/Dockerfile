FROM node:10-alpine

RUN apk --no-cache add --virtual builds-deps build-base python

WORKDIR /var/www

COPY package.json /var/www

COPY . /var/www

RUN chown -R node:node .
USER node

RUN npm install --no-optional
RUN npm run start

EXPOSE 3333