const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const errorHandler = require('./middlewares/task-error-handler');

const tasks = require('./routes/tasks');
const notFoundPage = require('./middlewares/notfoundpage');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
// Routes
app.use('/api/v1/tasks', tasks);
app.use(notFoundPage);

// Use the custom error handler middleware (after the routes)
app.use(errorHandler);

module.exports = app;
