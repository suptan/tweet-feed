FROM node:10

RUN npm install -g npm-check-updates
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install 
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
