FROM node:14.21.0-slim as node
ARG BUILD
WORKDIR /app
COPY package.json /app/
RUN apt-get update
RUN npm install -g @angular/cli@13.3.3
#RUN npm i npm@latest -g
COPY ./ /app/

RUN npm install
RUN ng build $BUILD

# Stage 02
FROM nginx:1.13
COPY --from=node /app/dist/web /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
#Timezone
RUN ln -fs /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime && dpkg-reconfigure --frontend noninteractive tzdata
