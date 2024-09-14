const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const taskSchema = new Schema({
	name: {
		type: 'String',
		required: [true, 'task name must be provided'],
		trim: true,
		maxLength: [30, "task name can't exceed 30 characters"],
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

module.exports = model('Task', taskSchema);
