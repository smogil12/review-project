import React, { useState, useEffect } from 'react';

// Utility function to get the correct image URL for development vs production
const getImageUrl = (imagePath) => {
  if (process.env.NODE_ENV === 'production') {
    return imagePath; // Use relative path in production
  } else {
    return `http://localhost:3001${imagePath}`; // Use full URL in development
  }
};

// Updated ProductReviews component with Nike Tech Fleece data
const ProductReviews = () => {

  // Product data with multiple products
  const products = [
    {
      id: 1,
      name: 'Nike Tech Fleece Full-Zip Windrunner Hoodie',
      category: 'Clothing',
      imageSrc: getImageUrl('/images/products/nike-tech-fleece-hoodie.png'),
      fallbackImage: '/api/image-proxy?url=https://picsum.photos/400/500?random=11',
      imageAlt: 'Nike Tech Fleece Full-Zip Windrunner Hoodie',
      reviews: {
        'dicks-sporting-goods': {
          name: "Dick's Sporting Goods",
          logo: "🏪",
          rating: 4.2,
          reviewCount: 156,
          price: "$89.99",
          availability: "In Stock",
          storeUrl: "https://www.dickssportinggoods.com/p/nike-mens-tech-full-zip-windrunner-hoodie-24nikmmnktchflcfznfta/24nikmmnktchflcfznfta",
          reviews: [
            { rating: 5, text: "Perfect fit and very comfortable. Great for cold weather.", author: "John D.", date: "2025-08-05" },
            { rating: 4, text: "Good quality but runs a bit small. Size up if in between sizes.", author: "Sarah M.", date: "2025-08-03" },
            { rating: 5, text: "Love the material and warmth. Worth the price.", author: "Mike R.", date: "2025-08-01" },
            { rating: 4, text: "Great for workouts and casual wear. Highly recommend!", author: "Jessica L.", date: "2025-07-28" },
            { rating: 5, text: "Best hoodie I've ever owned. Perfect for running.", author: "Carlos M.", date: "2025-07-25" }
          ]
        },
        'nike-com': {
          name: "Nike.com",
          logo: "✓",
          rating: 4.4,
          reviewCount: 89,
          price: "$85.00",
          availability: "In Stock",
          storeUrl: "https://www.nike.com/t/sportswear-tech-fleece-windrunner-mens-full-zip-hoodie-rznlBf/FB7921-063",
          reviews: [
            { rating: 5, text: "Excellent quality and fit. Perfect for running in cold weather.", author: "Alex K.", date: "2025-08-04" },
            { rating: 4, text: "Great hoodie, very warm and comfortable.", author: "Lisa T.", date: "2025-08-02" },
            { rating: 5, text: "Best tech fleece I've owned. Highly recommend.", author: "David P.", date: "2025-07-30" },
            { rating: 4, text: "Perfect for morning runs. Lightweight but warm.", author: "Ryan S.", date: "2025-07-27" },
            { rating: 5, text: "Amazing comfort and style. Worth every penny.", author: "Amanda K.", date: "2025-07-24" }
          ]
        },
        'amazon': {
          name: "Amazon",
          logo: "📦",
          rating: 4.0,
          reviewCount: 234,
          price: "$92.50",
          availability: "In Stock",
          storeUrl: "https://www.amazon.com/s?k=nike+tech+fleece+hoodie+men&ref=sr_pg_1",
          reviews: [
            { rating: 4, text: "Good quality but expensive. Fits as expected.", author: "Robert L.", date: "2025-08-03" },
            { rating: 3, text: "Nice material but the zipper is a bit stiff.", author: "Emma W.", date: "2025-08-01" },
            { rating: 5, text: "Perfect for my needs. Great customer service too.", author: "Chris H.", date: "2025-07-29" },
            { rating: 4, text: "Solid purchase. Good for everyday use.", author: "Daniel P.", date: "2025-07-26" },
            { rating: 5, text: "Love this hoodie! Perfect fit and great quality.", author: "Maria G.", date: "2025-07-23" }
          ]
        },
        'footlocker': {
          name: "Foot Locker",
          logo: "👟",
          rating: 4.1,
          reviewCount: 67,
          price: "$87.99",
          availability: "Limited Stock",
          storeUrl: "https://www.footlocker.com/category/mens/clothing/hoodies-sweatshirts.html",
          reviews: [
            { rating: 4, text: "Solid hoodie, good for everyday wear.", author: "Jennifer B.", date: "2025-08-02" },
            { rating: 5, text: "Love the fit and style. Great purchase.", author: "Tom G.", date: "2025-07-30" },
            { rating: 4, text: "Good quality, runs true to size.", author: "Rachel M.", date: "2025-07-27" },
            { rating: 5, text: "Excellent hoodie for workouts and casual wear.", author: "Mark T.", date: "2025-07-25" },
            { rating: 4, text: "Great value for money. Highly recommend!", author: "Sophie L.", date: "2025-07-22" }
          ]
        }
      }
    },
    {
      id: 2,
      name: 'On Cloud 6 Men\'s Running Shoes',
      category: 'Footwear',
      imageSrc: getImageUrl('/images/products/on-cloud-6-shoes.png'),
      fallbackImage: '/api/image-proxy?url=https://picsum.photos/400/500?random=12',
      imageAlt: 'On Cloud 6 Men\'s Running Shoes in Glacier White',
      reviews: {
        'on-running': {
          name: "On Running",
          logo: "🏃",
          rating: 4.6,
          reviewCount: 342,
          price: "$149.99",
          availability: "In Stock",
          storeUrl: "https://www.on-running.com/en-us/mens/cloud-6/3MF10070070",
          reviews: [
            { rating: 5, text: "Incredible comfort and cushioning. Perfect for long runs.", author: "Mark S.", date: "2025-08-05" },
            { rating: 4, text: "Great shoes, very responsive. Good for both road and trail.", author: "Jessica L.", date: "2025-08-03" },
            { rating: 5, text: "Best running shoes I've ever owned. Highly recommend!", author: "Carlos M.", date: "2025-08-01" },
            { rating: 4, text: "Excellent for marathon training. Great cushioning.", author: "Emma R.", date: "2025-07-29" },
            { rating: 5, text: "Perfect fit and amazing comfort for daily runs.", author: "Alex T.", date: "2025-07-26" }
          ]
        },
        'amazon': {
          name: "Amazon",
          logo: "📦",
          rating: 4.3,
          reviewCount: 189,
          price: "$139.99",
          availability: "In Stock",
          storeUrl: "https://www.amazon.com/Cloud-Running-Shoes-Mens-Glacier/dp/B0BQZ6X8KQ",
          reviews: [
            { rating: 4, text: "Excellent running shoes with great arch support.", author: "Ryan T.", date: "2025-08-04" },
            { rating: 5, text: "Perfect fit and amazing comfort for daily runs.", author: "Amanda K.", date: "2025-08-02" },
            { rating: 4, text: "Great quality, runs true to size.", author: "Daniel P.", date: "2025-07-30" },
            { rating: 5, text: "Love these shoes! Perfect for my running style.", author: "Maria G.", date: "2025-07-27" },
            { rating: 4, text: "Solid purchase. Great for both training and racing.", author: "Chris L.", date: "2025-07-24" }
          ]
        },
        'dicks-sporting-goods': {
          name: "Dick's Sporting Goods",
          logo: "🏪",
          rating: 4.4,
          reviewCount: 78,
          price: "$149.99",
          availability: "Limited Stock",
          storeUrl: "https://www.dickssportinggoods.com/p/on-cloud-6-mens-running-shoes-23onmu3MF10070070/23onmu3MF10070070",
          reviews: [
            { rating: 5, text: "Outstanding comfort and performance. Great for marathon training.", author: "Lisa R.", date: "2025-08-03" },
            { rating: 4, text: "Solid running shoes with good cushioning.", author: "Mike J.", date: "2025-08-01" },
            { rating: 5, text: "Love these shoes! Perfect for my running style.", author: "Sarah W.", date: "2025-07-28" },
            { rating: 4, text: "Great for long distance runs. Excellent support.", author: "Kevin M.", date: "2025-07-25" },
            { rating: 5, text: "Best running shoes I've ever worn. Highly recommend!", author: "Sophie K.", date: "2025-07-22" }
          ]
        },
        'footlocker': {
          name: "Foot Locker",
          logo: "👟",
          rating: 4.2,
          reviewCount: 45,
          price: "$144.99",
          availability: "In Stock",
          storeUrl: "https://www.footlocker.com/product/on-cloud-6-mens-running-shoes/3MF10070070.html",
          reviews: [
            { rating: 4, text: "Great running shoes with excellent support.", author: "Tom B.", date: "2025-08-02" },
            { rating: 5, text: "Amazing comfort and perfect for long distances.", author: "Rachel K.", date: "2025-07-30" },
            { rating: 4, text: "Good quality and responsive feel.", author: "David L.", date: "2025-07-27" },
            { rating: 5, text: "Perfect for my daily runs. Great cushioning.", author: "Jennifer M.", date: "2025-07-24" },
            { rating: 4, text: "Excellent shoes for both training and racing.", author: "Brian T.", date: "2025-07-21" }
          ]
        }
      }
    }
  ];

  const [loading, setLoading] = useState(true);
  const [selectedSource, setSelectedSource] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(products[0]); // Default to first product

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Update selected product when it changes
  useEffect(() => {
    setSelectedSource('all'); // Reset filter when product changes
  }, [selectedProduct]);

  const getOverallRating = () => {
    const ratings = Object.values(selectedProduct.reviews).map(source => source.rating);
    return (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);
  };

  const getTotalReviews = () => {
    return Object.values(selectedProduct.reviews).reduce((total, source) => total + source.reviewCount, 0);
  };

  const getLowestPrice = () => {
    const prices = Object.values(selectedProduct.reviews).map(source => parseFloat(source.price.replace('$', '')));
    return Math.min(...prices).toFixed(2);
  };

  const renderStars = (rating) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  // Sort reviews by date (most recent first)
  const sortReviewsByDate = (reviews) => {
    return reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  const filteredReviews = selectedSource === 'all' 
    ? Object.entries(selectedProduct.reviews)
    : Object.entries(selectedProduct.reviews).filter(([key]) => key === selectedSource);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96 text-center">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600">Aggregating reviews from multiple sources...</p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Product Overview Header */}
        <div className="mb-12">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">{selectedProduct.name}</h2>
              <div className="mt-2 flex items-center space-x-4">
                <span className="text-yellow-400 text-lg">{renderStars(getOverallRating())}</span>
                <span className="text-lg font-semibold text-gray-900">{getOverallRating()} out of 5</span>
                <span className="text-gray-500">({getTotalReviews()} total reviews)</span>
                <span className="text-green-600 font-bold">From ${getLowestPrice()}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <select 
                value={selectedSource} 
                onChange={(e) => setSelectedSource(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Retailers</option>
                {Object.entries(selectedProduct.reviews).map(([key, source]) => (
                  <option key={key} value={key}>{source.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-2 md:gap-y-0 lg:gap-x-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`group relative cursor-pointer border-2 rounded-lg p-4 transition-all ${
                selectedProduct.id === product.id 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                <img 
                  alt={product.imageAlt} 
                  src={product.imageSrc} 
                  className="size-full object-cover"
                  onError={(e) => {
                    console.log('Primary image failed to load:', product.imageSrc);
                    if (product.fallbackImage) {
                      e.target.src = product.fallbackImage;
                      e.target.onerror = (fallbackError) => {
                        console.log('Fallback image also failed to load:', product.fallbackImage);
                        fallbackError.target.style.display = 'none';
                        fallbackError.target.nextSibling.style.display = 'flex';
                      };
                    } else {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="size-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 text-gray-600 text-sm" style={{display: 'none'}}>
                  <div className="text-center p-4">
                    <div className="text-3xl mb-3">🏃‍♂️</div>
                    <div className="font-semibold text-gray-800 mb-1">{product.name}</div>
                    <div className="text-xs text-gray-500 mb-2">{product.category}</div>
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-sm text-gray-700 font-semibold">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              <div className="mt-2">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md">
                  Click to view reviews
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Customer Reviews by Retailer</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredReviews.map(([key, source]) => (
              <div key={key} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg">
                        {source.logo}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">{source.name}</h4>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-400">{renderStars(source.rating)}</span>
                      <span className="font-semibold text-gray-900">{source.rating}</span>
                      <span className="text-sm text-gray-500">({source.reviewCount} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-green-600">{source.price}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                      source.availability.toLowerCase().includes('stock') 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {source.availability}
                    </span>
                  </div>
                  
                  {/* Store Link */}
                  <div className="mt-3">
                                        {source.storeUrl && (
                      <a 
                        href={source.storeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 transition-colors"
                        onClick={() => {
                          // Add visual feedback
                          alert(`Opening ${source.name} in a new tab...`);
                        }}
                      >
                        View on {source.name}
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  {sortReviewsByDate(source.reviews).map((review, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-b-0 py-4 last:pb-0">
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="text-yellow-400 text-sm">{renderStars(review.rating)}</span>
                        <span className="font-semibold text-gray-900 text-sm">{review.author}</span>
                        <span className="text-gray-500 text-sm">{review.date}</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aggregation Info */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8 border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Aggregation Info</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            This data is compiled from multiple retail sources to provide you with comprehensive product insights.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-700">
              <span className="text-green-500 mr-3">✓</span>
              Real-time price comparison
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-green-500 mr-3">✓</span>
              Aggregated customer reviews
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-green-500 mr-3">✓</span>
              Stock availability tracking
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-green-500 mr-3">✓</span>
              Overall rating calculation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews; 