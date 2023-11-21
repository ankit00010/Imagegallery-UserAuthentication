# Node.js User Authentication and Image Management

## User Authentication

### Features

- **Register:** Securely register with a unique username, email, and hashed password.
- **Login:** Log in with a registered email and password securely stored in the database.

### Folder Structure

- **config:**
  - Configuration files, including the database connection.

- **controllers:**
  - Logic for handling user registration and login.

- **models:**
  - Mongoose schema definition for the user model.

- **routes:**
  - Routes for user authentication (register and login).

## Image Management

### Features

- **Image Upload:** Utilize Multer middleware to handle image uploads with a file size limit.
- **Gallery Display:** View uploaded images in a responsive gallery layout.

### Folder Structure

- **controllers:**
  - Logic for handling image upload and gallery display.

- **public:**
  - Static files, including uploaded images.

- **routes:**
  - Routes for handling image uploads and gallery display.

- **views:**
  - EJS templates for rendering HTML pages, including the gallery view.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone (https://github.com/ankit00010/Imagegallery-UserAuthentication.git)
 


2.Install dependencies:

 npm install

3.Configure Environment Variables:
Create a .env file in the root directory and add the following variables:
PORT=5000
MONOGO_URL=<your-mongodb-connection-url>

4.Run the application:
npm start


