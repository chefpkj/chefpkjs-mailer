FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm i
RUN npm i nodemon
COPY . .
EXPOSE 8800
CMD ["npm", "start"]