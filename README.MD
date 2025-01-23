
# Todo List App

This project is a Full-Stack Todo List application built using Next.js, Express.js, Prisma, MySQL, and TypeScript. The frontend uses Tailwind CSS for styling. The app allows users to create, edit, mark as completed, and delete tasks.

---

## Features
- Add tasks with a title and optional color.
- Edit existing tasks.
- Mark tasks as completed or not completed.
- Delete tasks with a confirmation prompt.
- View all tasks with a summary of completed tasks.

---

## Prerequisites

Before you start, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or later)
- [Docker](https://www.docker.com/)
- [npm](https://www.npmjs.com/)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Rename the `.env.example` file to `.env`:
     ```bash
     mv .env.example .env
     ```
   - Update `.env` with your database credentials if necessary.

4. Start the MySQL database using Docker:
   ```bash
   docker-compose up -d
   ```

5. Apply Prisma migrations to set up the database schema:
   ```bash
   npx prisma migrate dev --name init
   ```

---

## Running the Application

### Development Mode

1. Start the backend server:
   ```bash
   npm run dev
   ```

### Production Mode

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

---

## API Endpoints

The backend provides the following REST API endpoints:

### Tasks
- `GET /tasks` - Fetch all tasks.
- `POST /tasks` - Create a new task.
- `PUT /tasks/:id` - Update an existing task.
- `DELETE /tasks/:id` - Delete a task.
