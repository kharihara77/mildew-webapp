# Use the official Python base image
FROM node:22.12.0-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file to the working directory
COPY package*.json yarn.lock ./


# Install the dependencies
RUN npm install


# Copy the application code to the working directory
COPY . .

# Exp
ENV PORT 8080
# Run the FastAPI application using uvicorn server
#CMD ["uvicorn", "app.main:app","--host", "0.0.0.0", "--port", 3000]
#CMD exec uvicorn api.app:app --host 0.0.0.0 --port ${PORT}
CMD exec yarn start 