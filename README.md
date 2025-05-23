# MERN CRUD App with Docker

This is a simple MERN (MongoDB, Express, React, Node.js) stack application with basic CRUD operations. It uses Docker Compose to manage the services.

## 📦 Project Structure

```
/backend          # Node.js + Express API
/frontend         # React single page application (Vite)
/mongo            # MongoDB container
docker-compose.yml
```

## 🛠️ Features

- Add, list, and delete items
- React frontend SPA (Vite)
- Express + MongoDB backend API
- MongoDB container
- Docker Compose for service orchestration

## 🚀 How to Run

1. Clone the repo:
   ```bash
   git clone <your-repo-url>
   cd mern-crud-app
   ```

2. Build and start containers:
   ```bash
   docker-compose up --build
   ```

3. Access the app:
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000/api/items](http://localhost:5000/api/items)
- MongoDB: `mongodb://localhost:27017/merncrud`

## 📜 API Endpoints

- `GET /api/items` - fetch all items
- `POST /api/items` - add new item `{ name: "Item Name" }`
- `DELETE /api/items/:id` - delete item by ID

## 📝 License

MIT
