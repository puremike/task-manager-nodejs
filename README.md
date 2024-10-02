# Task Manager

A simple task manager application built with HTML, Node.js and MongoDB. This application allows users to create, read, update, and delete tasks.

## Table of Contents

- [Features](#Features)
- [Technologies](#Technologies)
- [Installation](#Installation)
- [API Endpoints](#API Endpoints)
- [Example Task Object](#Example TaskObject)
- [Running Test](#Running Test)
- [License](#License)

## Features

- **Create Task**: Add new tasks with a title, description, and status.
- **Read Task**: View a list of all tasks or individual task details.
- **Update Task**: Modify existing tasks by updating title, description, or status.
- **Delete Task**: Remove tasks that are no longer needed.

## Technologies

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **HTTP Client**: Postman (or any tool for testing API endpoints)
- **Dependencies**:
  - Mongoose (for MongoDB object modeling)
  - Express (for server-side framework)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/puremike/task-manager-nodejs.git
    cd task-manager-nodejs
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root of your project and add the following:

   ```bash
   MONGODB_URL=<your-mongodb-connection-string>
   PORT=5500
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:5500`.

## API Endpoints

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/tasks`     | Get all tasks           |
| GET    | `/tasks/:id` | Get a task by ID        |
| POST   | `/tasks`     | Create a new task       |
| PATCH  | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete a task by ID     |

## Example Task Object

```json
{
	"name": "First Task",
	"completed": "pending"
}
```

## Running Test

To run tests, you can add a testing framework like Jest or Mocha. Follow the steps below for setting up tests:

1. Install the testing dependencies:
   `npm install --save-dev jest`

2. Add your tests in the package.json script:
   `"test": "jest"`,

3. Start the test:
   `npm test`

## License

This project is licensed under the MIT License. See the LICENSE file for details.
