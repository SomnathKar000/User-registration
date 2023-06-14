# User Registration Web Application

This is a web application that allows users to register, login, and manage their personal details, including changing their name and password. The application follows the given use cases and handles error scenarios. It is implemented using Node.js, ReactJS, and MongoDB.

## Features

- User registration via email, name, and password.
- User login via email and password.
- Display of personal details on the main page after login.
- Ability to change name and password details.
- User logout functionality.
- Proper error handling, including handling wrong password scenarios.

## Technology Stack

- Frontend: ReactJS, Material-UI
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)
- Password Encryption: bcrypt.js

## Installation

1. Clone the repository: `git clone https://github.com/SomnathKar000/User-registration`
2. Navigate to the project directory: `cd User-registration`
3. Change the directory to the backend folder: `cd backend`
4. Install the backend dependencies: `npm install`
5. Return to the previous directory: `cd ..`
6. Install the frontend dependencies: `npm install`

## Environment Variables

1. Create an `.env` file in the root directory of the project.
2. Define the following environment variables in the `.env` file:
   - `DB_URL=<your-db-url>` : The MongoDB URL for connecting to the database.
   - `JWT_SECRET_KEY=<your-secret-key>` : The secret key used for authentication.

## Usage

1. Start the backend server: `npm start` (from the project backend directory)
2. Start the frontend server: `npm start` (from the project root directory)
3. Open the application in your browser: `http://localhost:3000`

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## Contact

For more information or questions, feel free to reach out:

- Email: somnathkar2023@gmail.com
- LinkedIn: [Somnath Kar](https://www.linkedin.com/in/somnath-kar-aa73aa1a3)
- GitHub: [SomnathKar000](https://github.com/SomnathKar000)

