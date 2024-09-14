const taskSchema = require('../models/tasks');
const notFoundErr = require('../errors/notfounderr');
const asyncWrapper = require('../middlewares/asyncwrapper');

// Create Task
const createTask = asyncWrapper(async (req, res) => {
	const task = await taskSchema.create(req.body);
	return res.status(201).json({task});
});

// Get All Tasks
const getAllTasks = asyncWrapper(async (req, res) => {
	const tasks = await taskSchema.find();
	return res.status(200).json({tasks});
});

// Get Task by ID
const getTask = asyncWrapper(async (req, res, next) => {
	const {id} = req.params;
	const task = await taskSchema.findById(id);
	if (!task) {
		return notFoundErr(id, next); // Pass error to error middleware
	}
	return res.status(200).json({task});
});

// Update Task
const updateTask = asyncWrapper(async (req, res, next) => {
	const {id} = req.params;
	const task = await taskSchema.findByIdAndUpdate(id, req.body, {
		new: true,
		runValidators: true, // Run schema validators on update
	});
	if (!task) {
		return notFoundErr(id, next);
	}
	return res.status(200).json({task});
});

// Delete Task
const deleteTask = asyncWrapper(async (req, res, next) => {
	const {id} = req.params;
	const task = await taskSchema.findByIdAndDelete(id);
	if (!task) {
		return notFoundErr(id, next);
	}
	return res.status(204).send({task});
});

module.exports = {getAllTasks, getTask, createTask, updateTask, deleteTask};
