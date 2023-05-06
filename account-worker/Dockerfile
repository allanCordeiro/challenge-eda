FROM node:19-slim

WORKDIR /home/node/app
COPY package*.json ./
RUN npm install 
ENV PATH="./node_modules/.bin:$PATH"


COPY . .


CMD [ "npm", "start" ]