const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Function to download an image from URL and save it locally
async function downloadImage(url, filename) {
    try {
        console.log(`Downloading image from: ${url}`);
        
        const response = await axios.get(url, {
            responseType: 'arraybuffer',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.9',
                'Referer': 'https://www.nike.com/'
            },
            timeout: 15000
        });

        // Ensure the directory exists
        const dir = path.join(__dirname, 'public/images/products');
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        // Save the image
        const filepath = path.join(dir, filename);
        fs.writeFileSync(filepath, response.data);
        
        console.log(`✅ Image saved successfully: ${filepath}`);
        console.log(`📏 File size: ${response.data.length} bytes`);
        
        return true;
    } catch (error) {
        console.error(`❌ Failed to download image: ${error.message}`);
        return false;
    }
}

// Example usage
async function main() {
    console.log('🖼️  Product Image Downloader\n');
    
    // Example: Download the Nike Tech Fleece image
    const imageUrl = 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/08906f18-828b-47a0-a461-6d6b59c4c800/M+NK+TCH+FLC+HOODIE.png';
    const filename = 'nike-tech-fleece-hoodie.png';
    
    await downloadImage(imageUrl, filename);
    
    console.log('\n📝 Usage:');
    console.log('node download-images.js');
    console.log('\nTo download more images, modify the imageUrl and filename variables in this script.');
    console.log('\n💡 Production Note:');
    console.log('- Images will be served from: https://your-app.herokuapp.com/images/products/filename.png');
    console.log('- Use relative URLs in React: /images/products/filename.png');
}

if (require.main === module) {
    main().catch(console.error);
}

module.exports = { downloadImage }; 