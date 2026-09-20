# Gym Management System

A React-based frontend application for gym management with user authentication features.

## Overview

This is a modern web application built with React 19 that provides user authentication (login and signup) functionality for a gym management system. The application communicates with a backend API to handle user authentication and session management.

## Tech Stack

- **React 19** - UI framework
- **Axios** - HTTP client for API requests
- **Create React App** - Build tooling and development environment

## Features

- User Login with username and password
- User Registration with username, email, password, phone number, and address
- Token-based authentication using localStorage
- Responsive form components

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API running on `http://127.0.0.1:8000`

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mygym
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## Backend Requirements

This frontend expects a backend API to be running at `http://127.0.0.1:8000` with the following endpoints:

- `POST /api/login/` - User authentication
- `POST /api/signup/` - User registration

Both endpoints should return a JSON response with a `token` field.

## Project Structure

```
mygym/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Login/
│   │   │   └── Login.js
│   │   ├── Signup/
│   │   │   └── Signup.js
│   │   └── 404.html
│   ├── App.js
│   ├── index.js
│   └── App.css
├── package.json
└── README.md
```

## Available Scripts

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`

Launches the test runner in interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder

### `npm run eject`

**Note: This is a one-way operation.** Ejects from Create React App and copies all configuration files into the project.

## License

MIT Release - Check LICENSE file for details