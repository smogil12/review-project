# Review Project

A sample Express.js web application with a modern HTML structure.

## Features

- Express.js server with static file serving
- Modern HTML5 semantic structure
- Responsive CSS design
- API endpoints for health checks
- Development mode with auto-reload

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Or start the production server:
```bash
npm start
```

## Usage

- **Development**: Run `npm run dev` for auto-reload during development
- **Production**: Run `npm start` for production server
- **Health Check**: Visit `/api/health` to check server status

## Project Structure

```
review-project/
├── index.html          # Main HTML file
├── server.js           # Express server
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## Available Endpoints

- `GET /` - Serves the main HTML page
- `GET /api/health` - Health check endpoint
- Static files are served from the root directory

## Development

The server runs on `http://localhost:3000` by default. You can change the port by setting the `PORT` environment variable.

## Dependencies

- **express**: Web framework for Node.js
- **nodemon**: Development dependency for auto-reloading (dev mode only) 