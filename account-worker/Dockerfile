FROM node:19-slim

WORKDIR /home/node/app
COPY package.json package-lock.json ./
RUN npm install

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN chown -R node:node /home/node/app
USER node

CMD ["npm", "run", "start"]