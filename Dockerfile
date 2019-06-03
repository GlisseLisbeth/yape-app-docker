FROM node:10-alpine

LABEL maintaner="glisselisbeth@gmail.com"

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "npm", "start" ]