FROM node:22.13.1
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview"]
