# Article Publishing Platform

## Introduction
This project is a backend system designed to simulate an article publishing platform similar to Medium. It allows users to sign up, sign in, publish articles, follow tags or other publishers, and view a feed of articles based on their interests.

## Prerequisites
Before you begin, ensure you have met the following requirements:
* You have installed [Node.js](https://nodejs.org/) and npm.
* You have a basic understanding of JavaScript and Node.js.
* You have installed MongoDB or have access to a MongoDB database.

## Technologies Used
- Node.js
- Express.js for server management
- MongoDB for database management
- Mongoose for database schema modeling
- JWT for authentication
- Bcrypt for password hashing

## Setup and Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/yourrepositoryname.git
```

2. Navigate to the project directory:
```bash
cd yourDirectoryName
```

3. Install dependencies:
```bash
npm install
```

4. Run the application:
```bash
npm start
```


## Key Decisions and Rationale
- **Choice of Node.js and Express**: Node.js was chosen for its non-blocking I/O which is suitable for I/O heavy tasks like network calls and database operations. Express is used to simplify the server creation and routing process.
- **Using MongoDB and Mongoose**: MongoDB provides a flexible schema which is ideal for a content-driven application like an article publishing platform. Mongoose is used to model the application data in MongoDB neatly.
- **Authentication Mechanism**: JWT was chosen for stateless authentication which scales better for distributed systems. Bcrypt is used for securely hashing and storing passwords.
- **Project Structure**: Adopted a feature-based directory structure (`controllers`, `models`, `routes`, etc.) to encapsulate related logic and promote modularity and ease of navigation.
- **Error Handling Strategy**: Structured error handling was implemented to provide clear error messages and make the API user-friendly.

## Contributing
Contributions to the project are welcome. To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
5. Push to the branch (`git push origin feature/AmazingFeature`).
6. Open a pull request.

## AI Help
ChatGpt was used to write the readme file as well as it was asked some question about the logic as this project was challenging in under 24 hours

## Contact
Shawki Ghorab -  shawkighorab@gmail.com

