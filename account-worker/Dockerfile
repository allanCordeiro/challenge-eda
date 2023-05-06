FROM node:19-slim

WORKDIR /home/node/app
COPY package*.json ./
RUN npm install


COPY . .

RUN chown -R node:node /home/node/app
USER node
RUN npm run build

CMD ["npm", "run", "start:dev"]