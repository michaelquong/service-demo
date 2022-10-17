FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

ADD src ./src

EXPOSE 3000

ENTRYPOINT ["npm"]
CMD ["start"]