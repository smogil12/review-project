import React, { useState, useEffect } from 'react';
import './ProductReviews.css';

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
      <div className="loading">
        <div className="spinner"></div>
        <p>Aggregating reviews from multiple sources...</p>
      </div>
    );
  }

  return (
    <div className="product-reviews">
      <div className="product-header">
        <div className="product-info">
          <h1>Nike Tech Fleece Full-Zip Windrunner Hoodie</h1>
          <div className="product-meta">
            <div className="overall-rating">
              <span className="stars">{renderStars(getOverallRating())}</span>
              <span className="rating-text">{getOverallRating()} out of 5</span>
              <span className="review-count">({getTotalReviews()} total reviews)</span>
            </div>
            <div className="price-info">
              <span className="lowest-price">From ${getLowestPrice()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="source-filter">
        <label>Filter by source:</label>
        <select value={selectedSource} onChange={(e) => setSelectedSource(e.target.value)}>
          <option value="all">All Sources</option>
          {Object.entries(reviews).map(([key, source]) => (
            <option key={key} value={key}>{source.name}</option>
          ))}
        </select>
      </div>

      <div className="sources-grid">
        {filteredReviews.map(([key, source]) => (
          <div key={key} className="source-card">
            <div className="source-header">
              <div className="source-info">
                <span className="source-logo">{source.logo}</span>
                <h3>{source.name}</h3>
              </div>
              <div className="source-rating">
                <span className="stars">{renderStars(source.rating)}</span>
                <span className="rating">{source.rating}</span>
                <span className="review-count">({source.reviewCount} reviews)</span>
              </div>
            </div>
            
            <div className="source-details">
              <div className="price-availability">
                <span className="price">{source.price}</span>
                <span className={`availability ${source.availability.toLowerCase().includes('stock') ? 'in-stock' : 'limited'}`}>
                  {source.availability}
                </span>
              </div>
            </div>

            <div className="reviews-list">
              {source.reviews.map((review, index) => (
                <div key={index} className="review-item">
                  <div className="review-header">
                    <span className="stars">{renderStars(review.rating)}</span>
                    <span className="author">{review.author}</span>
                    <span className="date">{review.date}</span>
                  </div>
                  <p className="review-text">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="aggregation-info">
        <h3>Data Aggregation Info</h3>
        <p>This data is compiled from multiple retail sources to provide you with comprehensive product insights.</p>
        <ul>
          <li>Real-time price comparison</li>
          <li>Aggregated customer reviews</li>
          <li>Stock availability tracking</li>
          <li>Overall rating calculation</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductReviews; 