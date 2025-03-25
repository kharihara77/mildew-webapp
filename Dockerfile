# Use the official Python base image
FROM node:22.12.0-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file to the working directory
COPY package.json yarn.lock ./


# Install the dependencies
RUN npm install


# Copy the application code to the working directory
COPY . ./

RUN yarn build

# Exp

# Run the FastAPI application using uvicorn server

ENTRYPOINT [ "yarn", "start" ]