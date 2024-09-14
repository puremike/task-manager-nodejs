const errorHandler = (err, req, res, next) => {
	let statusCode = err.statusCode || 500;
	let message = err.message;

	// Send JSON response with status and message
	res.status(statusCode).json({
		status: 'error',
		message: message,
	});
};

module.exports = errorHandler;
