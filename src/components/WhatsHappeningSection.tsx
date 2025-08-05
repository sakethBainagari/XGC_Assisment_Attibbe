import { useState } from "react";
import wh1 from '../assets/wh1.png';
import wh2 from '../assets/wh2.png';
import wh3 from '../assets/wh3.png';
import wh4 from '../assets/wh4.png';
import wh5 from '../assets/wh5.png';

const WhatsHappeningSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalArticles = 123;

  // Get current articles based on slide number
  const getCurrentArticles = () => {
    // For slides 1-5, use specific images
    if (currentSlide <= 5) {
      const images = [wh1, wh2, wh3, wh4, wh5];
      const imageIndex = (currentSlide - 1) % 5;
      
      return [
        {
          id: currentSlide * 2 - 1,
          image: images[imageIndex],
          tags: "#RWA, #TOKENIZATION, #TRADEFINANCE",
          title: "XDC Network Caps Six Years of Live Mainnet",
          imageAlt: "Six years milestone with deer illustration"
        },
        {
          id: currentSlide * 2,
          image: images[(imageIndex + 1) % 5],
          tags: "#RWA, #XDC, #TOKENIZATION",
          title: "Brazil's VERT Capital to Tokenize $1B in Real-World Assets on XDC Network",
          imageAlt: "Brazil flag"
        }
      ];
    } else {
      // For slides 6-123, use wh5 image
      return [
        {
          id: currentSlide * 2 - 1,
          image: wh5,
          tags: "#RWA, #TOKENIZATION, #TRADEFINANCE",
          title: "XDC Network Caps Six Years of Live Mainnet",
          imageAlt: "Six years milestone with deer illustration"
        },
        {
          id: currentSlide * 2,
          image: wh5,
          tags: "#RWA, #XDC, #TOKENIZATION",
          title: "Brazil's VERT Capital to Tokenize $1B in Real-World Assets on XDC Network",
          imageAlt: "Brazil flag"
        }
      ];
    }
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev < totalArticles ? prev + 1 : 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev > 1 ? prev - 1 : 1)); // Stop at 1
  };

  const currentArticles = getCurrentArticles();

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header with exact layout from screenshot */}
        <div className="flex items-start justify-between mb-12">
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What's Happening
            </h2>
            <div className="w-full h-px bg-gray-900"></div>
          </div>
          
          {/* Counter - exact positioning */}
          <div className="flex items-center space-x-4 ml-8">
            <div className="text-3xl lg:text-4xl font-bold text-gray-900">
              {currentSlide}/{totalArticles}
            </div>
          </div>
        </div>

        {/* Articles Grid - exactly 2 articles side by side */}
        <div className="grid grid-cols-2 gap-12">
          {currentArticles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              {/* Article Layout - Image on left, content on right */}
              <div className="flex space-x-6">
                {/* Article Image - Square format */}
                <div className="relative w-48 h-48 flex-shrink-0 overflow-hidden bg-gray-200">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="flex-1 space-y-3">
                  {/* Tags */}
                  <div className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                    {article.tags}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                    {article.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Navigation - exact positioning */}
        <div className="flex justify-end items-center space-x-4 mt-8">
          {/* Navigation Arrows */}
          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 1}
              className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-400 hover:border-gray-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <svg 
                className="w-5 h-5 text-gray-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-400 hover:border-gray-600 transition-colors duration-300"
              aria-label="Next slide"
            >
              <svg 
                className="w-5 h-5 text-gray-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsHappeningSection;
