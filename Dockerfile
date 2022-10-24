FROM node:14-stretch
EXPOSE 1004
WORKDIR /WTA-739-CLST
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install
CMD ["npm", "run", "start"]