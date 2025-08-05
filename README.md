# Review Project - React + Express Full-Stack

A modern full-stack web application built with React frontend and Express backend.

## Features

- **React Frontend**: Modern component-based UI with hooks
- **Express Backend**: RESTful API with health check endpoints
- **Full-Stack Integration**: Seamless communication between frontend and backend
- **Responsive Design**: Mobile-friendly layout with modern CSS
- **Development Mode**: Hot reloading for both frontend and backend
- **Production Ready**: Optimized build process for deployment

## Project Structure

```
review-project/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/               # React components
│   │   ├── App.js         # Main React component
│   │   ├── App.css        # Styles
│   │   └── index.js       # React entry point
│   └── package.json       # React dependencies
├── server.js              # Express backend server
├── package.json           # Backend dependencies and scripts
└── README.md             # This file
```

## Quick Start

### Development Mode (Recommended)

1. Install all dependencies:
```bash
npm install
npm run install-client
```

2. Start both frontend and backend in development mode:
```bash
npm run dev
```

This will start:
- React dev server on `http://localhost:3000`
- Express backend on `http://localhost:3001`

### Production Mode

1. Build the React app:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

The app will be available at `http://localhost:3001`

## Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run server` - Start only the Express backend with nodemon
- `npm run client` - Start only the React frontend
- `npm run build` - Build the React app for production
- `npm start` - Start the production server

## API Endpoints

- `GET /api/health` - Health check endpoint
- All other routes serve the React app

## Development

### Frontend (React)
- Located in `/client` directory
- Uses modern React hooks (useState, useEffect)
- Responsive CSS with modern design
- Real-time server status display

### Backend (Express)
- RESTful API design
- Static file serving for React build
- Error handling and logging
- Health check endpoint

## Deployment

The app is ready for deployment to platforms like Heroku, Vercel, or any Node.js hosting service. The `heroku-postbuild` script is included for Heroku deployment.

## Technologies Used

- **Frontend**: React, CSS3, HTML5
- **Backend**: Node.js, Express.js
- **Development**: Nodemon, Concurrently
- **Build Tools**: Create React App 