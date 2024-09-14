const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./app');

const PORT = process.env.PORT || 5500;

const connectMongoDB = async () => {
	try {
		await mongoose
			.connect(process.env.MONGODB_URI)
			.then(() => console.log('Database Connected!'));
	} catch (error) {
		console.log('Database Error!', error);
	}

	server.listen(PORT, () => {
		console.log(`Server is running on PORT, ${PORT} ....`);
	});
};

connectMongoDB();
