# Specify a base image
FROM node:alpine3.14

# Create a work directory for the application
WORKDIR /usr/app

# Install some dependencies
COPY ./package.json ./
RUN yarn install

# Changes won't affect the code above ^ unless something within package.json changes!!!!!

# Copy files from the root directory to the container 
COPY ./ ./

# Setup a default command
CMD ["yarn", "start"]

# PORT FORWARDING IS STRICTLY RUNTIME, SHOULD NOT BE DECLARED HERE