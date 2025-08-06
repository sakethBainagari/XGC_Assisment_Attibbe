import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import blockImage from '../assets/block.png';

const BlockchainLearningSection = () => {
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
  return (
    <section ref={sectionRef} className="py-16 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Section - Visual Graphic */}
          <div className={`relative h-[600px] lg:h-[700px] overflow-hidden rounded-lg transition-all duration-1000 ${
            isVisible 
              ? 'transform translate-y-0 opacity-100' 
              : 'transform translate-y-20 opacity-0'
          }`}>
            {/* Background with digital particles effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-cyan-800 to-teal-800">
              {/* Digital particles/noise effect */}
              <div className="absolute inset-0 opacity-30">
                {[...Array(80)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Block image - clean overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={blockImage} 
                  alt="Blockchain portal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div>
              <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-2 transition-all duration-700 ${
                isVisible 
                  ? 'transform translate-x-0 opacity-100' 
                  : 'transform translate-x-20 opacity-0'
              }`}>
                Blockchain Learning
              </h2>
              <p className={`text-xl lg:text-2xl italic text-gray-700 transition-all duration-700 delay-200 ${
                isVisible 
                  ? 'transform translate-x-0 opacity-100' 
                  : 'transform translate-x-20 opacity-0'
              }`}>
                Open for Everyone
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Our community encourages collaboration between a diverse range of developers, participants, and stakeholders in the expanding XDC ecosystem.
            </p>

            {/* Navigation Links */}
            <div className="space-y-4">
              <div className="w-full h-px bg-gray-300"></div>
              
              <button className="group flex items-center space-x-3 text-gray-900 hover:text-cyan-600 transition-colors duration-300 relative overflow-hidden w-80">
                <span className="flex items-center space-x-3">
                  <span className="transform transition-transform duration-300 group-hover:translate-x-48">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                  <span className="transform transition-transform duration-300 group-hover:-translate-x-8 text-lg font-medium">
                    What is a blockchain?
                  </span>
                </span>
              </button>
              
              <div className="w-full h-px bg-gray-300"></div>
              
              <button className="group flex items-center space-x-3 text-gray-900 hover:text-cyan-600 transition-colors duration-300 relative overflow-hidden w-80">
                <span className="flex items-center space-x-3">
                  <span className="transform transition-transform duration-300 group-hover:translate-x-48">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                  <span className="transform transition-transform duration-300 group-hover:-translate-x-8 text-lg font-medium">
                    Explore the Network
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainLearningSection; 