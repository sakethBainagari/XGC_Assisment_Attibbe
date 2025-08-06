import { Button } from "./ui/button";
import { ArrowRight, ChevronUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Diamond icon */}
            <div className="w-6 h-6 border-2 border-black transform rotate-45"></div>
            
            {/* Main description */}
            <p className={`text-2xl md:text-3xl lg:text-4xl leading-relaxed text-black font-light transition-all duration-1000 ${
              isVisible 
                ? 'transform translate-x-0 opacity-100' 
                : 'transform translate-x-20 opacity-0'
            }`}>
              XDC Network is an enterprise-grade, open-source blockchain protocol. An EVM-compatible 
              chain with smart contract capabilities, it is uniquely suited to revolutionize, decentralize, 
              and liquify the trade finance industry through the tokenization of real-world assets and 
              financial instruments.
            </p>

            {/* Explore button */}
            <Button 
              size="lg"
              className="group bg-transparent border-2 hover:bg-transparent transition-all duration-300 px-8 py-4 relative overflow-hidden"
              style={{
                borderColor: 'black',
                color: 'black',
                fontFamily: '"Editorial New","Untitled Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 400,
                fontSize: '21px',
                lineHeight: '21px',
                fontStyle: 'normal'
              }}
            >
              <span className="flex items-center space-x-3">
                <span className="transform transition-transform duration-300 group-hover:translate-x-48">
                  →
                </span>
                <span className="transform transition-transform duration-300 group-hover:-translate-x-8">
                  Explore the Network
                </span>
              </span>
            </Button>
          </div>

          {/* Right Column - Blockchain Info */}
          <div className="lg:pt-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-6 h-6 border-2 border-black transform rotate-45"></div>
              
              {/* 3D Flip Card for "WHAT IS A BLOCKCHAIN?" */}
              <div className="group cursor-pointer" style={{ perspective: '1000px' }}>
                <div className="relative w-64 h-12 transition-transform duration-1000 ease-in-out group-hover:rotateX-90" 
                     style={{ 
                       transformStyle: 'preserve-3d',
                       transform: 'rotateX(0deg)'
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.transform = 'rotateX(90deg)';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.transform = 'rotateX(0deg)';
                     }}
                >
                  {/* Front face */}
                  <div className="absolute inset-0 flex items-center justify-center bg-white border-2 border-gray-300 rounded shadow-md" 
                       style={{ 
                         backfaceVisibility: 'hidden',
                         transform: 'translateZ(24px)'
                       }}>
                    <h3 className="text-lg font-medium text-black tracking-wider px-4">
                      WHAT IS A BLOCKCHAIN?
                    </h3>
                  </div>
                  
                  {/* Top face */}
                  <div className="absolute inset-0 flex items-center justify-center bg-white border-2 border-gray-300 rounded shadow-md" 
                       style={{ 
                         backfaceVisibility: 'hidden',
                         transform: 'rotateX(90deg) translateZ(24px)'
                       }}>
                    <h3 className="text-lg font-medium text-black tracking-wider px-4">
                      WHAT IS A BLOCKCHAIN?
                    </h3>
                  </div>
                  
                  {/* Bottom face */}
                  <div className="absolute inset-0 flex items-center justify-center bg-white border-2 border-gray-300 rounded shadow-md" 
                       style={{ 
                         backfaceVisibility: 'hidden',
                         transform: 'rotateX(-90deg) translateZ(24px)'
                       }}>
                    <h3 className="text-lg font-medium text-black tracking-wider px-4">
                      WHAT IS A BLOCKCHAIN?
                    </h3>
                  </div>
                  
                  {/* Back face */}
                  <div className="absolute inset-0 flex items-center justify-center bg-white border-2 border-gray-300 rounded shadow-md" 
                       style={{ 
                         backfaceVisibility: 'hidden',
                         transform: 'rotateX(180deg) translateZ(24px)'
                       }}>
                    <h3 className="text-lg font-medium text-black tracking-wider px-4">
                      WHAT IS A BLOCKCHAIN?
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 z-30"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </section>
  );
};

export default AboutSection;