// Connect to MongoDB using mongoose and log the successful connection.
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONOGO_URL);
        console.log('Database connected:', connect.connection.host, connect.connection.name);
    } catch (error) {
        // Log any connection errors and exit the process if unsuccessful.
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;
