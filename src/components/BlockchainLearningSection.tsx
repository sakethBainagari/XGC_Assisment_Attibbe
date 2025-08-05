import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import blockImage from '../assets/block.png';

const BlockchainLearningSection = () => {
  return (
    <section className="py-16 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Top Right Navigation */}
        <div className="absolute top-8 right-8 flex items-center space-x-4 z-10">
          <button className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-400 hover:border-gray-600 transition-colors duration-300">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <span className="text-sm font-medium text-gray-600">1 / 4</span>
          <button className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-400 hover:border-gray-600 transition-colors duration-300">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Section - Visual Graphic */}
          <div className="relative h-[600px] lg:h-[700px] overflow-hidden rounded-lg">
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
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Blockchain Learning
              </h2>
              <p className="text-xl lg:text-2xl italic text-gray-700">
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
              
              <button className="group flex items-center space-x-3 text-gray-900 hover:text-cyan-600 transition-colors duration-300">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span className="text-lg font-medium">What is a blockchain?</span>
              </button>
              
              <div className="w-full h-px bg-gray-300"></div>
              
              <button className="group flex items-center space-x-3 text-gray-900 hover:text-cyan-600 transition-colors duration-300">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span className="text-lg font-medium">Explore the Network</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainLearningSection; 