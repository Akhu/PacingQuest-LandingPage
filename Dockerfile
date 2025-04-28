FROM node:lts-alpine as runtime
ARG SITE

COPY . /app
WORKDIR /app

RUN npm install
ENV SITE=$SITE
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

CMD node ./dist/server/entry.mjs