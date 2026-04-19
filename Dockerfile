FROM node:25-alpine

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

#//RUN npm run migrate

CMD ["node", "dist/main.js"]

#//keyin terminalda wsl        / T

#//docker build -t uzchess:0.1.0 .    / T

#//docker image ls  / yaratilgan docerni ko'rish    /T

