###################
# Build and serve for local development
###################

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV PORT=3000
ENV VERSION=v1

EXPOSE ${PORT}

CMD ["node", "dist/server.js"]