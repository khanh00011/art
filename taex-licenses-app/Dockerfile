FROM node:16
WORKDIR /app
COPY . .
RUN npm install
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
