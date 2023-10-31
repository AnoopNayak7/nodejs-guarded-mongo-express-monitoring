# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /home/anayak/Desktop/Mylearning/nodejs-monitoring/strat_backbone

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the service's port
EXPOSE 3001

# Define the command to run your service
CMD [ "node", "app.js" ]
