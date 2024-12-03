# Kitter - Web Application

A web application built with Node.js, Express, and MongoDB that includes user authentication and contact form functionality.

## Features

- User Registration & Login
  - Register with username, email, and password
  - Login using either username or email
  - Secure password hashing using bcrypt

- Contact Form
  - Submit contact information
  - Store contact submissions in MongoDB
  - Includes name, email, phone, and message fields

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```
npm install
```

3. Create a `.env` file and configure your environment variables:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/kitterDB
```

## Project Structure

```
kitter/
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── login.css
│   │   └── register.css
│   └── js/
│       ├── login.js
│       └── register.js
├── views/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   └── contact.html
├── server.js
├── package.json
└── README.md
```

## Dependencies

- express
- mongoose
- bcrypt
- body-parser

## Running the Application

1. Start MongoDB:

```bash
mongod
```

2. Run the application:

```bash
node server.js
```

3. Access the application at:
```
http://localhost:3000
```

## API Endpoints

- `POST /register` - Register a new user
- `POST /login` - User login
- `POST /contact` - Submit contact form

## Database Schemas

### User Schema
- fullname (String)
- username (String, unique)
- email (String, unique)
- password (String, hashed)

### Contact Schema
- firstName (String)
- lastName (String)
- email (String)
- phoneNumber (String)
- message (String)
- dateSubmitted (Date)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
```

This README.md provides:
- Project overview
- Installation instructions
- Project structure
- API endpoints
- Database schemas
- Contributing guidelines

You can customize it further based on your specific project needs and requirements.