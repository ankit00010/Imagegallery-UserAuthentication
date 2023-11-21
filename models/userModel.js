// Importing necessary modules for user schema and password hashing.
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Defining the user schema with required fields.
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Hashing the password before saving it to the database using a pre-save hook.
userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
});

// Creating the User model based on the defined schema.
const User = mongoose.model('User', userSchema);

// Exporting the User model to make it available for use in other parts of the application.
module.exports = User;
