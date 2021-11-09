# Dockerfile
FROM node:11.13.0-alpine
# create destination directory
RUN mkdir -p /usr/src/comappt
WORKDIR /usr/src/comappt

# update and install dependency
# RUN apk update && apk upgrade
# RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/comappt/
# RUN export NVM_DIR=~/.nvm
# RUN source ~/.nvm/nvm.sh
# RUN nvm install v12.20.1
RUN npm install

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD yarn dev