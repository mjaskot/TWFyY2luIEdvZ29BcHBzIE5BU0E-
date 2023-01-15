FROM node:16-alpine

RUN mkdir app

WORKDIR /app

COPY . .

RUN yarn
RUN yarn build

EXPOSE 3000

CMD yarn start
