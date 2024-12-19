# Use Node.js LTS image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
