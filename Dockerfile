FROM node:lts-alpine3.15 AS dev
WORKDIR /usr/app
COPY . .
RUN npm install

FROM dev AS baseprod
ENV NODE_ENV="production"
RUN npm run build
RUN npm install

FROM node:lts-alpine3.15 AS prod
WORKDIR /usr/app
COPY --from=baseprod /usr/app/.next .next
COPY --from=baseprod /usr/app/package.json .
COPY --from=baseprod /usr/app/node_modules node_modules
ENV NODE_ENV="production"
CMD ["npm", "start"]