const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001; // Backend on 3001, React dev server on 3000

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from React build directory
app.use(express.static(path.join(__dirname, 'client/build')));

// API routes
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Backend server running on http://localhost:${PORT}`);
    console.log(`🔍 Health check available at http://localhost:${PORT}/api/health`);
    console.log(`⚛️  React dev server should run on http://localhost:3000`);
    console.log(`📱 Full-stack app will be available at http://localhost:3000`);
}); 