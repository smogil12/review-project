import React, { useState, useEffect } from 'react';

// Updated ProductReviews component with Nike Tech Fleece data
const ProductReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSource, setSelectedSource] = useState('all');

  // Mock data for demonstration
  const mockReviews = {
    'dicks-sporting-goods': {
      name: "Dick's Sporting Goods",
      logo: "🏪",
      rating: 4.2,
      reviewCount: 156,
      price: "$89.99",
      availability: "In Stock",
      reviews: [
        { rating: 5, text: "Perfect fit and very comfortable. Great for cold weather.", author: "John D.", date: "2024-01-15" },
        { rating: 4, text: "Good quality but runs a bit small. Size up if in between sizes.", author: "Sarah M.", date: "2024-01-10" },
        { rating: 5, text: "Love the material and warmth. Worth the price.", author: "Mike R.", date: "2024-01-08" }
      ]
    },
    'nike-com': {
      name: "Nike.com",
      logo: "✓",
      rating: 4.4,
      reviewCount: 89,
      price: "$85.00",
      availability: "In Stock",
      reviews: [
        { rating: 5, text: "Excellent quality and fit. Perfect for running in cold weather.", author: "Alex K.", date: "2024-01-14" },
        { rating: 4, text: "Great hoodie, very warm and comfortable.", author: "Lisa T.", date: "2024-01-12" },
        { rating: 5, text: "Best tech fleece I've owned. Highly recommend.", author: "David P.", date: "2024-01-05" }
      ]
    },
    'amazon': {
      name: "Amazon",
      logo: "📦",
      rating: 4.0,
      reviewCount: 234,
      price: "$92.50",
      availability: "In Stock",
      reviews: [
        { rating: 4, text: "Good quality but expensive. Fits as expected.", author: "Robert L.", date: "2024-01-13" },
        { rating: 3, text: "Nice material but the zipper is a bit stiff.", author: "Emma W.", date: "2024-01-11" },
        { rating: 5, text: "Perfect for my needs. Great customer service too.", author: "Chris H.", date: "2024-01-09" }
      ]
    },
    'footlocker': {
      name: "Foot Locker",
      logo: "👟",
      rating: 4.1,
      reviewCount: 67,
      price: "$87.99",
      availability: "Limited Stock",
      reviews: [
        { rating: 4, text: "Solid hoodie, good for everyday wear.", author: "Jennifer B.", date: "2024-01-12" },
        { rating: 5, text: "Love the fit and style. Great purchase.", author: "Tom G.", date: "2024-01-08" },
        { rating: 4, text: "Good quality, runs true to size.", author: "Rachel M.", date: "2024-01-06" }
      ]
    }
  };

  // Product data with Nike Tech Fleece - using reliable placeholder images
  const products = [
    {
      id: 1,
      name: 'Nike Tech Fleece Full-Zip Windrunner Hoodie',
      color: 'Black',
      price: '$85.00',
      href: '#',
      imageSrc: 'https://picsum.photos/400/500?random=1',
      imageAlt: 'Nike Tech Fleece Full-Zip Windrunner Hoodie in Black',
      retailer: 'Nike.com',
      rating: 4.4,
      reviewCount: 89,
    },
    {
      id: 2,
      name: 'Nike Tech Fleece Full-Zip Windrunner Hoodie',
      color: 'Gray Heather',
      price: '$89.99',
      href: '#',
      imageSrc: 'https://picsum.photos/400/500?random=2',
      imageAlt: 'Nike Tech Fleece Full-Zip Windrunner Hoodie in Gray Heather',
      retailer: "Dick's Sporting Goods",
      rating: 4.2,
      reviewCount: 156,
    },
    {
      id: 3,
      name: 'Nike Tech Fleece Full-Zip Windrunner Hoodie',
      color: 'Navy',
      price: '$92.50',
      href: '#',
      imageSrc: 'https://picsum.photos/400/500?random=3',
      imageAlt: 'Nike Tech Fleece Full-Zip Windrunner Hoodie in Navy',
      retailer: 'Amazon',
      rating: 4.0,
      reviewCount: 234,
    },
    {
      id: 4,
      name: 'Nike Tech Fleece Full-Zip Windrunner Hoodie',
      color: 'White',
      price: '$87.99',
      href: '#',
      imageSrc: 'https://picsum.photos/400/500?random=4',
      imageAlt: 'Nike Tech Fleece Full-Zip Windrunner Hoodie in White',
      retailer: 'Foot Locker',
      rating: 4.1,
      reviewCount: 67,
    },
    {
      id: 5,
      name: 'Nike Tech Fleece Full-Zip Windrunner Hoodie',
      color: 'Red',
      price: '$90.00',
      href: '#',
      imageSrc: 'https://picsum.photos/400/500?random=5',
      imageAlt: 'Nike Tech Fleece Full-Zip Windrunner Hoodie in Red',
      retailer: 'Nike.com',
      rating: 4.3,
      reviewCount: 45,
    },
    {
      id: 6,
      name: 'Nike Tech Fleece Full-Zip Windrunner Hoodie',
      color: 'Olive',
      price: '$88.50',
      href: '#',
      imageSrc: 'https://picsum.photos/400/500?random=6',
      imageAlt: 'Nike Tech Fleece Full-Zip Windrunner Hoodie in Olive',
      retailer: 'Amazon',
      rating: 4.1,
      reviewCount: 78,
    },
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setReviews(mockReviews);
      setLoading(false);
    }, 1000);
  }, []);

  const getOverallRating = () => {
    const ratings = Object.values(reviews).map(source => source.rating);
    return (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);
  };

  const getTotalReviews = () => {
    return Object.values(reviews).reduce((total, source) => total + source.reviewCount, 0);
  };

  const getLowestPrice = () => {
    const prices = Object.values(reviews).map(source => parseFloat(source.price.replace('$', '')));
    return Math.min(...prices);
  };

  const renderStars = (rating) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  const filteredReviews = selectedSource === 'all' 
    ? Object.entries(reviews)
    : Object.entries(reviews).filter(([key]) => key === selectedSource);

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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Nike Tech Fleece Collection</h2>
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
                {Object.entries(reviews).map(([key, source]) => (
                  <option key={key} value={key}>{source.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                <img alt={product.imageAlt} src={product.imageSrc} className="size-full object-cover" />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <div className="mt-1 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400 text-xs">{renderStars(product.rating)}</span>
                  <span className="text-xs text-gray-500">({product.reviewCount})</span>
                </div>
              </div>
              <p className="mt-1 text-xs text-blue-600 font-medium">{product.retailer}</p>
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
                </div>

                <div className="p-6">
                  {source.reviews.map((review, index) => (
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