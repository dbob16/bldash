FROM node:24 AS builder

COPY app /app
WORKDIR /app
RUN npm install && \
  npm run build

FROM nginx:1.29 AS deploy

COPY --from=builder /app/dist /app
WORKDIR /app
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
