const express = require('express');
const path = require('path');
const axios = require('axios');

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

// Image proxy endpoint to handle CORS and hotlink protection
app.get('/api/image-proxy', async (req, res) => {
    try {
        const { url } = req.query;
        
        if (!url) {
            return res.status(400).json({ error: 'URL parameter is required' });
        }

        // Fetch the image from the external URL
        const response = await axios.get(url, {
            responseType: 'arraybuffer',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.9',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1'
            },
            timeout: 10000
        });

        // Set appropriate headers for the image
        res.setHeader('Content-Type', response.headers['content-type'] || 'image/jpeg');
        res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
        res.setHeader('Access-Control-Allow-Origin', '*');
        
        // Send the image data
        res.send(response.data);
        
    } catch (error) {
        console.error('Image proxy error:', error.message);
        res.status(500).json({ 
            error: 'Failed to fetch image',
            message: error.message 
        });
    }
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
    console.log(`🖼️  Image proxy available at http://localhost:${PORT}/api/image-proxy`);
    console.log(`⚛️  React dev server should run on http://localhost:3000`);
    console.log(`📱 Full-stack app will be available at http://localhost:3000`);
}); 