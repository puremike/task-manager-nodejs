FROM node:18.20.4-alpine3.20

WORKDIR /taskapi

COPY . .

COPY package*.json .

RUN npm install package.json

EXPOSE 5500

CMD [ "node", "server.js" ]
