// Importing necessary modules and configuring server settings.
const express = require('express');
const ejs = require('ejs');
const multer = require('multer');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/dbConnection');

// Loading environment variables and establishing a connection to the database.
dotenv.config();
connectDB();

// Creating an instance of the Express application.
const app = express();
app.set('view engine', 'ejs');

// Configuring the path for serving static files (uploaded images).
const uploadsPath = path.join(__dirname, 'public');
app.use(express.static(uploadsPath));

// Setting the views directory and defining the application port.
app.set('views', __dirname + '/views');
const port = process.env.PORT || 5000;

// Middleware for parsing JSON in request bodies.
app.use(express.json());

// Route for the home page.
app.get('/', (req, res) => {
    res.render('index');
});

// Routes for user authentication and image uploads.
app.use('/auth', require('./routes/userRoutes'));
app.use('/upload', require('./routes/uploadRoutes'));

// Error handling middleware to handle server errors.
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { error: 'Internal server error' });
});

// Starting the server and listening on the specified port.
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
