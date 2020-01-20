FROM node:10-alpine

WORKDIR /var/www
RUN apk add --no-cache bash 
RUN npm install -g npm@6.7.0
RUN chown -R node:node .

USER node

EXPOSE 3333