# Task Manager API

A simple REST API to create and manage tasks. Built with Node.js, 
Express, and MongoDB. Has a small vanilla JS frontend to interact 
with the API directly from the browser.

---

## Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- Vanilla JS (frontend)

---

## Getting Started

clone the repo and install dependencies

    git clone https://github.com/SugarJonnyy/task-manager-api
    cd task-manager-api
    npm install

create a `.env` file in the root:

    MONGO_URI=your_mongodb_connection_string
    PORT=3000

then run it:

    npm start

---

## API Endpoints

| Method | Endpoint         | What it does        |
|--------|------------------|---------------------|
| GET    | /api/v1/tasks    | get all tasks       |
| POST   | /api/v1/tasks    | create a task       |
| GET    | /api/v1/tasks/:id| get single task     |
| PATCH  | /api/v1/tasks/:id| update a task       |
| DELETE | /api/v1/tasks/:id| delete a task       |

---

## Project Structure

    controllers/   — route logic lives here
    models/        — mongoose schema
    router/        — express routes
    middleware/    — error handling
    public/        — vanilla js frontend