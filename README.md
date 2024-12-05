# TaskSphere

TaskSphere is a NestJS-based project that provides a modular, scalable, and maintainable backend architecture. The application utilizes MongoDB as the database and Prisma as the ORM to handle schema management and database operations.

# Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [License](#license)

---

# Features

- Modular architecture for scalability
- Built with *NestJS* for efficient and structured backend development
- Integration with *Prisma ORM* for database management
- MongoDB as the database
- Pre-configured with *ESLint* and *Prettier* for code quality and consistency
- Testing setup with *Jest*

---

# Getting Started

# Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v7 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or hosted on a cloud service like Atlas)

# Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/tasksphere.git
   cd tasksphere
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   Create a `.env` file in the project root and configure the following variables:
   ```env
   DATABASE_URL=mongodb://<username>:<password>@localhost:27017/tasksphere
   ```

4. Pull the database schema using Prisma:
   ```bash
   npm run prisma:pull
   ```

5. Generate the Prisma client:
   ```bash
   npm run prisma:generate
   ```

---

# Running the Application

# Development Mode
```bash
npm run start:dev
```

# Production Mode
```bash
npm run build
npm start
```

# Debug Mode
```bash
npm run start:debug
```

The server will start at `http://localhost:3000`.

---

# Project Structure

```
src/
├── modules/
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── dto/
│   │   └── auth.module.ts
│   ├── tasks/
│   │   ├── tasks.controller.ts
│   │   ├── tasks.service.ts
│   │   ├── dto/
│   │   └── tasks.module.ts
│   ├── categories/
│   │   ├── categories.controller.ts
│   │   ├── categories.service.ts
│   │   ├── dto/
│   │   └── categories.module.ts
│   └── users/
│       ├── users.controller.ts
│       ├── users.service.ts
│       ├── dto/
│       └── users.module.ts
├── shared/  # Shared utilities and database connections
├── main.ts  # Application entry point
└── app.module.ts
```

---

# Scripts

The following scripts are available in `package.json`:

- *Build the project*: `npm run build`
- *Start the application*: `npm run start`
- *Development mode*: `npm run start:dev`
- *Run linting*: `npm run lint`
- *Run tests*: `npm run test`
- *Prisma commands*:
  - Pull schema from database: `npm run prisma:pull`
  - Generate Prisma client: `npm run prisma:generate`

---

# Technologies Used

- *Node.js*: JavaScript runtime
- *NestJS*: Framework for building scalable server-side applications
- *Prisma*: ORM for schema management
- *MongoDB*: NoSQL database
- *ESLint*: Code linting tool
- *Prettier*: Code formatting tool
- *Jest*: Testing framework

---

# License

This project is licensed under the *UNLICENSED* license. For more details, see the [LICENSE](LICENSE) file.

---

# Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request.  

For any questions or feedback, please contact the author.

---

Replace `<your-username>` in the repository URL with your GitHub username and customize the details further if needed.