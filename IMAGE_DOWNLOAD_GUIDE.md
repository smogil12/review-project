# Product Image Download Guide

This guide explains how to download product images and serve them locally in your application.

## How It Works

1. **Download Images**: Use the `download-images.js` script to download product images from external URLs
2. **Store Locally**: Images are saved in `public/images/products/` directory
3. **Serve Statically**: The Express server serves these images from `/images/products/` endpoint
4. **Use in React**: Reference images using `http://localhost:3001/images/products/filename.png`

## Current Setup

✅ **Nike Tech Fleece Hoodie Image**: Downloaded and working
- **Source**: [Nike CDN](https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/08906f18-828b-47a0-a461-6d6b59c4c800/M+NK+TCH+FLC+HOODIE.png)
- **Local Path**: `public/images/products/nike-tech-fleece-hoodie.png`
- **URL**: `http://localhost:3001/images/products/nike-tech-fleece-hoodie.png`

## How to Download More Images

### Step 1: Find Product Image URLs
Look for product images on retailer websites:
- Nike.com product pages
- Dick's Sporting Goods product pages
- Amazon product pages
- Foot Locker product pages

### Step 2: Download the Image
Edit `download-images.js` and update the variables:

```javascript
const imageUrl = 'YOUR_IMAGE_URL_HERE';
const filename = 'your-product-name.png';
```

Then run:
```bash
node download-images.js
```

### Step 3: Update Product Data
In `client/src/components/ProductReviews.js`, update the product's `imageSrc`:

```javascript
{
  id: 1,
  name: 'Product Name',
  // ... other properties
  imageSrc: 'http://localhost:3001/images/products/your-product-name.png',
  // ... rest of properties
}
```

## Benefits of This Approach

✅ **Fast Loading**: Images load instantly from local server
✅ **No CORS Issues**: No cross-origin problems
✅ **Reliable**: Images always available, no external dependencies
✅ **Cost Effective**: No bandwidth costs for external image requests
✅ **Fallback System**: Still has fallback images if local images fail

## File Structure

```
review-project/
├── public/
│   └── images/
│       └── products/
│           └── nike-tech-fleece-hoodie.png
├── download-images.js
└── IMAGE_DOWNLOAD_GUIDE.md
```

## Server Configuration

The Express server is configured to serve static files:

```javascript
// Serve static files from public directory (for downloaded images)
app.use('/images', express.static(path.join(__dirname, 'public/images')));
```

## Testing Images

Test if an image is accessible:
```bash
curl -I "http://localhost:3001/images/products/nike-tech-fleece-hoodie.png"
```

## Troubleshooting

### Image Not Loading
1. Check if the image file exists in `public/images/products/`
2. Verify the server is running on port 3001
3. Check the image URL in the React component

### Download Fails
1. Check if the source URL is accessible
2. Verify network connectivity
3. Check if the URL requires authentication

### CORS Issues
- Images are served locally, so CORS shouldn't be an issue
- If using external URLs, they go through the image proxy

## Next Steps

1. Download more Nike Tech Fleece images in different colors
2. Add images for other products
3. Consider implementing an image management system
4. Add image optimization (resizing, compression) 