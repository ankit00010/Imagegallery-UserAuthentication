// Importing necessary modules for file upload and path handling.
const multer = require('multer');
const path = require('path');

// Configuring storage settings for multer to store uploaded images.
const storage = multer.diskStorage({
    destination: './public/images/uploaded_images/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Configuring multer for file upload with storage settings and file size limit.
const upload = multer({
    storage: storage,
    limits: { fileSize: 5000000 }
}).single('image');

// Function to handle image upload and respond accordingly.
const uploadImages = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.error('Error uploading image:', err);
            res.status(500).json({ error: 'Error uploading image' });
        } else {
            res.json({ message: 'Image uploaded successfully' });
        }
    });
};

// Importing file system module for directory operations.
const fs = require('fs');

// Function to get the list of uploaded images and render them in the gallery view.
const getUploadedImages = (req, res) => {
    const uploadsPath = path.join(__dirname, '../public/images/uploaded_images');
    fs.readdir(uploadsPath, (err, files) => {
        if (err) {
            console.error('Error reading uploads directory:', err);
            res.status(500).json({ error: 'Error reading uploads directory' });
        } else {
            console.log('List of files:', files);
            res.render('gallery', { images: files });
        }
    });
};

// Exporting functions to make them available for use in other parts of the application.
module.exports = { uploadImages, getUploadedImages };
