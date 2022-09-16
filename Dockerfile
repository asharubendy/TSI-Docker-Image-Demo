FROM node
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 1200
CMD ["node","server.js"]
