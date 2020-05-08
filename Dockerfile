# Stage 1
FROM node:latest as node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm clean-install
COPY . .
RUN npm run build

# Stage 2
FROM nginx:1.13.12-alpine
COPY --from=node /usr/src/app/dist/account-management-client /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf