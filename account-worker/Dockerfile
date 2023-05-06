FROM node:19-slim

WORKDIR /home/node/app
COPY package*.json ./
RUN npm install --only=production


COPY . .


CMD [ "npm", "start" ]