# README.md

# MERN Docker App

This project is a basic MERN (MongoDB, Express, React, Node.js) application that implements CRUD operations and is hosted in Docker containers.

## Project Structure

```
mern-docker-app
├── client                # React frontend
│   ├── src
│   │   ├── components    # React components for CRUD operations
│   │   ├── App.tsx       # Main application component
│   │   └── index.tsx     # Entry point for the React application
│   ├── package.json      # Client-side dependencies and scripts
│   ├── tsconfig.json     # TypeScript configuration for client
│   └── Dockerfile        # Dockerfile for client
├── server                # Node.js backend
│   ├── src
│   │   ├── models        # Mongoose models
│   │   ├── routes        # API routes for CRUD operations
│   │   ├── app.ts       # Express application setup
│   │   └── index.ts      # Entry point for the server
│   ├── package.json      # Server-side dependencies and scripts
│   ├── tsconfig.json     # TypeScript configuration for server
│   └── Dockerfile        # Dockerfile for server
├── docker-compose.yml     # Docker Compose configuration
└── README.md             # Project documentation
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd mern-docker-app
   ```

2. Build and run the application using Docker Compose:
   ```
   docker-compose up --build
   ```

3. Access the application at `http://localhost:3000`.

## Features

- Create, Read, Update, and Delete (CRUD) operations for items.
- Dockerized frontend and backend for easy deployment.
- TypeScript support for both client and server.

## License

This project is licensed under the MIT License.