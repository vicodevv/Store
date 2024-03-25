# STORE API

This is a REST API for a store. It allows users to register, login, create, update, delete and get products. This API is built with NodeJS, ExpressJS and MongoDB.

## Technologies

This API was developed with the following technologies:

- NodeJS
- ExpressJS
- MongoDB

## Getting Started

Pre-requisites

- Node(LTS version)
- NPM v9.0.0 or higher
- MongoDB

You can get the latest version of NodeJS from [here](https://nodejs.org/en/download/) or you can check the version you have installed on your machine by running the following command in your terminal

```bash
  node -v
```

You can get the latest version of NPM from [here](https://www.npmjs.com/get-npm) or you can check the version you have installed on your machine by running the following command in your terminal

```bash
  npm -v
```

## Installation

Clone the project

```bash
  git clone git@github.com:vicodevv/Store.git
```

Go to the project directory

```bash
  cd Store
```

Install dependencies

```bash
  npm install
```

Run the code

```bash
  npm run start
```

## Testing

To run tests, run the following command

```bash
  npm run test
```

## Docker

This application is Dockerized, allowing for easy deployment in containerized environments.

### Pulling the Docker Image

To run the application using Docker, follow these steps:

#### Step 1: Install Docker

Make sure you have Docker installed on your machine. If not, you can download it from [Docker's official website](https://www.docker.com/get-started).

#### Step 2: Pull the Docker Image

Open a terminal and run the following command to pull the Docker image from Docker Hub:

```bash
docker pull papivic0/store:latest
```

#### Step 3: Run the Docker Container

After pulling the image, run the following command to start the Docker container:

```bash
docker run -p 3000:3000 papivic0/store:latest
```

The application will be available at http://localhost:3000.

## Entity Relationship Diagram

<img src="https://github.com/vicodevv/Store-API/assets/55485439/b329e937-adc9-41a2-ac58-65e1beb3adff" width=800>

## Authentication

This API uses JWT for authentication. To get a token, you need to register and login. The token is valid for 24 hours. You can use the token to access protected routes. To access authenticated routes, set your authorization header to Bearer [ token ]. Read postman documentation for further details.

## Postman Documentation

You can access the postman documentation [here](https://documenter.getpostman.com/view/17026180/2s9YeEcC7e)

## Live Link

The API is hosted on render. You can access it from:

```bash
https://store-3sne.onrender.com
```

Note: Due to the free tier of render, the API may be slow to respond on the first request. Subsequent requests will be faster.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- PORT=your port number
- MONGODB_URI=your mongodb uri
- JWT_SECRET=your jwt secret

## API Reference

| Method | Description                       | Endpoints            |
| :----- | :-------------------------------- | :------------------- |
| POST   | Login a user                      | /auth/login          |
| POST   | Register a user                   | /auth/register       |
| POST   | Create a product                  | /products/create     |
| GET    | Get all products                  | /products/all        |
| GET    | Get a single product              | /products/:id        |
| DELETE | Delete a product                  | /products/delete/:id |
| PUT    | Update a product                  | /products/update/:id |
| GET    | Get the details of logged in user | /user/details        |
| DELETE | Delete the logged in user         | /user/delete         |
| PUT    | Update the loggged in user        | /user/update         |

## Authors

- [@vicodevv](https://www.github.com/vicodevv)

## License

[MIT](https://choosealicense.com/licenses/mit/)
