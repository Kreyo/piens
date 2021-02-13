FROM node:14

# Create an application directory
RUN mkdir -p /app

# The /app directory should act as the main application directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY api/package*.json ./

# Bundle app source
COPY api/ .

RUN npm install

EXPOSE 3001
CMD [ "npm", "start" ]
