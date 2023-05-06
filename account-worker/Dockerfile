FROM node:19-slim

WORKDIR /home/node/app
COPY package*.json ./
RUN npm ci


COPY . .

RUN chown -R node:node /home/node/app
USER node

CMD ["npm", "run", "start:dev"]