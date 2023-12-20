MERN Stack Login and Signup Project
This repository contains a simple login and signup project built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The project allows users to register, log in, and access protected routes.

Features
User Registration: Users can sign up for an account by providing their email and password.

User Authentication: Secure authentication using JSON Web Tokens (JWT) to protect routes and ensure user identity.

Password Encryption: User passwords are securely hashed and stored in the database using bcrypt.

MongoDB Integration: Data is stored in a MongoDB database, providing a scalable and flexible solution.

React Frontend: The frontend is built using React.js, providing a dynamic and responsive user interface.

Protected Routes: Certain routes are protected and require user authentication to access.

Installation
Prerequisites
Node.js and npm installed on your machine.
MongoDB database (either locally or using a cloud service like MongoDB Atlas).
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/Nitz2611/Mern-login-signup.git
cd Mern-login-signup
Install server dependencies:

bash
Copy code
cd server
npm install
Configure server environment variables:

Create a .env file in the server directory and set the following variables:

env
Copy code
PORT=3001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Install client dependencies:

bash
Copy code
cd ../client
npm install
Configure client environment variables:

Create a .env file in the client directory and set the following variables:

env
Copy code
REACT_APP_API_URL=http://localhost:3001/api
Run the application:

bash
Copy code
# Start the server
cd ../server
npm start

# Start the client
cd ../client
npm start
Visit http://localhost:3000 in your browser to use the application.

Usage
Visit the home page to sign up for a new account or log in if you already have one.
After logging in, you can access protected routes and perform actions available to authenticated users.
Contributing
If you would like to contribute to this project, please open an issue or create a pull request with your proposed changes.

License
This project is not licensed.
