// Importing necessary modules for handling image uploads and gallery display.
const express = require('express');
const router = express.Router();
const { uploadImages, getUploadedImages } = require('../controllers/uploadController');

// Defining routes for image uploads and gallery display.
router.post('/images', uploadImages);
router.get('/gallery', getUploadedImages);

// Exporting the router to make it available for use in other parts of the application.
module.exports = router;
