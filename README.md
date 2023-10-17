# Simple CRUD Application

A basic CRUD (Create, Read, Update, Delete) application built with Node.js, Express, MySQL for the backend, and React with Styled Components for the frontend.

## Table of Contents

- [Simple CRUD Application](#simple-crud-application)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Usage](#usage)

## Features

- Create, Read, Update, and Delete operations for managing data.
- A simple and user-friendly interface built with React and Styled Components.
- Backend server using Node.js and Express.
- Database storage and retrieval using MySQL.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your system.
- MySQL database server up and running.
- Git for version control (optional).

## Getting Started

Clone the repository to your local machine:

```git clone https://github.com/Pedrobourguignon/full-stack-CRUD.git```

## Backend Setup
- Navigate to the backend directory:
```cd api```

- Install the backend dependencies:
```yarn``` or ```yarn add cors express mysql nodemon dotenv```

- Create a .env file in the backend directory and configure your MySQL database connection:
```makefile
DB_HOST=your-mysql-host
DB_USER=your-mysql-username
DB_PASSWORD=your-mysql-password
DB_NAME=your-mysql-database
```

- Start the backend server:
```yarn start```

The backend should be running on http://localhost:3001

## Frontend Setup

- Navigate to the frontend directory:
```cd ../frontend```

- Install the frontend dependencies:
```yarn``` or ```yarn add styled-components axios react-icons react-toastify```

- Start the frontend development server:
```yarn start```

The React app should open in your browser at http://localhost:3000

## Usage
- Access the frontend in your browser by navigating to http://localhost:3000.
- Use the application to perform CRUD operations on your data.
- Enjoy managing your data with this simple CRUD app!