# Project Title

User Authentication and Authorization System


## Description

This project is a simple yet robust user authentication and authorization system built with Node.js and Express. It provides secure user registration and login functionality, incorporating industry-standard practices such as password hashing with bcrypt. The system utilizes an Express server, EJS templates for dynamic views, and MongoDB for data 
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

Run the following code in your terminal to install all necessary dependencies:

npm install express bcrypt ejs mongoose nodemon


## Usage

To start the server, cd to the project folder and run this code in the terminal:
nodemon src/index.js


## Features

- User Registration: Securely register users with hashed passwords, preventing unauthorized access to sensitive information.

- User Login: Authenticate users with their credentials, comparing hashed passwords for enhanced security.

- Error Handling: Implement robust error handling to provide clear feedback to users in case of registration or login issues.

- Static File Serving: Serve static files, such as CSS or client-side scripts, from the "public" directory for a polished user interface.

## Contributing

I welcome contributions! Feel free to submit bug reports, feature requests, or enhancements.

# Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/awesome-feature`)
3. Make changes and commit (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT LISCENCE - see the [LICENSE.md](LICENSE.md) file for details.
