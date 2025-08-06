import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import manImage from '../assets/man.png';
import { useEffect, useRef, useState } from 'react';

const SolutionsSection = () => {
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
    <section ref={sectionRef} className="relative min-h-screen bg-blue-50 px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Visual and Call-to-Action */}
          <div className="relative">
            {/* Arch-shaped frame with illustration */}
            <div className={`bg-white rounded-lg p-6 max-w-xs shadow-sm transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              {/* Arch-shaped container */}
              <div className="relative mb-4">
                <div className="w-full h-64 bg-gray-100 rounded-t-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={manImage} 
                    alt="Person working on laptop" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Text below illustration */}
              <div className={`text-center transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Get Started</h3>
                <p className="text-lg italic text-gray-600 font-light">With XDC</p>
              </div>
            </div>
          </div>

          {/* Right Column - Three Solution Categories */}
          <div className="space-y-12">
            {/* Enterprise Section */}
            <div className="space-y-4">
              <h2 className="text-4xl font-normal text-gray-900 mb-4">Enterprise</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                The XDC Network is a groundbreaking blockchain with impressive speed, 
                scalability, low fees, and military-grade security. Using XDC Network, businesses 
                can improve their record keeping, exchange data and transfer assets more 
                efficiently and more securely.
              </p>
              <div className="group bg-transparent border border-gray-400 rounded px-6 py-3 inline-block hover:bg-gray-100 transition-colors cursor-pointer relative overflow-hidden">
                <span className="flex items-center text-gray-800">
                  <span className="transform transition-transform duration-300 group-hover:translate-x-48">
                    →
                  </span>
                  <span className="transform transition-transform duration-300 group-hover:-translate-x-8 text-sm font-medium ml-3">
                    Explore Enterprise Solutions
                  </span>
                </span>
              </div>
            </div>

            {/* Trade Finance Section */}
            <div className="space-y-4">
              <h2 className="text-4xl font-normal text-gray-900 mb-4">Trade Finance</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                The XDC Network sets a benchmark for digitizing trade finance by enabling the 
                tokenization of diverse trade finance instruments and assets.
              </p>
              <div className="group bg-transparent border border-gray-400 rounded px-6 py-3 inline-block hover:bg-gray-100 transition-colors cursor-pointer relative overflow-hidden">
                <span className="flex items-center text-gray-800">
                  <span className="transform transition-transform duration-300 group-hover:translate-x-32">
                    →
                  </span>
                  <span className="transform transition-transform duration-300 group-hover:-translate-x-6 text-sm font-medium ml-3">
                    Explore TradeFi
                  </span>
                </span>
              </div>
            </div>

            {/* Developers & Creators Section */}
            <div className="space-y-4">
              <h2 className="text-4xl font-normal text-gray-900 mb-4">Developers & Creators</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                The XDC Network is an enterprise-grade, open-source and EVM-compatible Layer 
                1 blockchain. Geared to accommodate any EVM tool set, developers can carry their 
                skills from other chains onto the XDC Network.
              </p>
              <div className="group bg-transparent border border-gray-400 rounded px-6 py-3 inline-block hover:bg-gray-100 transition-colors cursor-pointer relative overflow-hidden">
                <span className="flex items-center text-gray-800">
                  <span className="transform transition-transform duration-300 group-hover:translate-x-40">
                    →
                  </span>
                  <span className="transform transition-transform duration-300 group-hover:-translate-x-8 text-sm font-medium ml-3">
                    Start creating with XDC
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
