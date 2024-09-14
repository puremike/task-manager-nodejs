const taskSchema = require('../models/tasks');
const notFoundErr = require('../errors/notfounderr');

// Create Task
const createTask = async (req, res) => {
	try {
		const task = await taskSchema.create(req.body);
		return res.status(201).json({task});
	} catch (error) {
		console.log('error creating task', error);
	}
};

// Get All Tasks
const getAllTasks = async (req, res) => {
	try {
		const tasks = await taskSchema.find();
		return res.status(200).json({tasks});
	} catch (error) {
		console.log('error getting task', error);
	}
};

// Get Task by ID
const getTask = async (req, res, next) => {
	try {
		const {id} = req.params;
		const task = await taskSchema.findById(id);
		if (!task) {
			return notFoundErr(id, next); // Pass error to error middleware
		}
		return res.status(200).json({task});
	} catch (error) {
		next(error); // Forward any other errors to the error middleware
	}
};

// Update Task
const updateTask = async (req, res, next) => {
	try {
		const {id} = req.params;
		const task = await taskSchema.findByIdAndUpdate(id, req.body, {
			new: true,
			runValidators: true, // Run schema validators on update
		});
		if (!task) {
			return notFoundErr(id, next);
		}
		return res.status(200).json({task});
	} catch (error) {
		next(error);
	}
};

// Delete Task
const deleteTask = async (req, res, next) => {
	try {
		const {id} = req.params;
		const task = await taskSchema.findByIdAndDelete(id);
		if (!task) {
			return notFoundErr(id, next);
		}
		return res.status(204).send({task});
	} catch (error) {
		next(error);
	}
};

module.exports = {getAllTasks, getTask, createTask, updateTask, deleteTask};
