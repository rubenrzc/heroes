FROM node:latest as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build


FROM nginx:latest

COPY --from=build-step /app/dist/heroes /usr/share/nginx/html

EXPOSE 80

## Comando para correr el contenedor docker run -d -it -p 80:80 heroes
