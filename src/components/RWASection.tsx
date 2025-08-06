import deerImage from '../assets/deer .png';
import { useEffect, useRef, useState } from 'react';

const RWASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen px-6 py-24 overflow-hidden bg-fixed" 
             style={{
               backgroundImage: `url(${deerImage})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center center',
               backgroundRepeat: 'no-repeat',
               backgroundAttachment: 'fixed',
               minHeight: '100vh',
               height: 'auto'
             }}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-1/4 w-32 h-32 border border-white/20 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-40 right-1/3 w-16 h-16 border border-white/15 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 border border-white/25 rounded-full animate-pulse opacity-35" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-1/6 w-8 h-8 border border-white/20 rounded-full animate-pulse opacity-30" style={{animationDelay: '3s'}}></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/4 right-1/6 w-2 h-20 bg-white/10 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/5 w-1 h-16 bg-white/15 rounded-full opacity-25"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 className={`text-5xl lg:text-6xl font-light text-white leading-tight transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              The RWA and trade finance blockchain is steadily building for lasting success
            </h1>

            {/* Subheading */}
            <div className="space-y-4">
              <h2 className={`text-2xl lg:text-3xl font-light text-white opacity-90 transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-x-0 opacity-90' : '-translate-x-20 opacity-0'
              }`}>
                XDC Network Caps Six Years of Live Mainnet
              </h2>
              
              {/* Divider line */}
              <div className={`w-16 h-0.5 bg-white opacity-60 transform transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-x-0 opacity-60' : '-translate-x-20 opacity-0'
              }`}></div>
            </div>

            {/* Read Now Button */}
            <div className="pt-4">
              <button className="group flex items-center space-x-3 text-white hover:text-gray-200 transition-colors duration-300">
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-lg font-light tracking-wide">READ NOW</span>
              </button>
            </div>
          </div>

          {/* Right Column - Complementary Content */}
          <div className="relative flex items-center justify-center">
            {/* Background text overlay */}
            <div className="text-center space-y-4 opacity-20">
              <div className="text-8xl lg:text-9xl font-bold text-white/10 leading-none">
                6
              </div>
              <div className="text-2xl lg:text-3xl font-light text-white/20 tracking-widest">
                YEARS OF
              </div>
              <div className="text-2xl lg:text-3xl font-light text-white/20 tracking-widest">
                MAINNET
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white opacity-20"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white opacity-20"></div>
    </section>
  );
};

export default RWASection;
