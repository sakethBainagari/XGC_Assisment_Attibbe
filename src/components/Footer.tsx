import { ArrowRight } from "lucide-react";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Sign-up and Navigation */}
        <div className="grid lg:grid-cols-5 gap-12 mb-8">
          {/* Sign up Section */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
              Sign up for important XDC Network announcements & developments at XDC Foundation.
            </h3>
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full py-3 px-4 border-b-2 border-gray-300 bg-transparent text-gray-800 placeholder:text-gray-500 focus:border-gray-800 focus:outline-none"
                />
              </div>
              <button className="flex items-center justify-center w-12 h-12 text-gray-800 hover:text-gray-600 transition-colors duration-300">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="w-full h-px bg-gray-300 mt-2"></div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-3 gap-8">
              {/* ABOUT XDC Column */}
              <div>
                <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">
                  ABOUT XDC
                </h4>
                <ul className="space-y-2">
                  <li>
                    <div className="group cursor-pointer" style={{ perspective: '1000px' }}>
                      <div className="relative w-full h-8 transition-transform duration-1000 ease-in-out" 
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
                        <div className="absolute inset-0 flex items-center" 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">History</a>
                        </div>
                        <div className="absolute inset-0 flex items-center" 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'rotateX(90deg) translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">History</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="group cursor-pointer" style={{ perspective: '1000px' }}>
                      <div className="relative w-full h-8 transition-transform duration-1000 ease-in-out" 
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
                        <div className="absolute inset-0 flex items-center" 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Disclaimer & Terms of Use</a>
                        </div>
                        <div className="absolute inset-0 flex items-center" 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'rotateX(90deg) translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Disclaimer & Terms of Use</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="group cursor-pointer" style={{ perspective: '1000px' }}>
                      <div className="relative w-full h-8 transition-transform duration-1000 ease-in-out" 
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
                        <div className="absolute inset-0 flex items-center" 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Privacy Policy</a>
                        </div>
                        <div className="absolute inset-0 flex items-center" 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'rotateX(90deg) translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Privacy Policy</a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* RESOURCES Column */}
              <div>
                <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">
                  RESOURCES
                </h4>
                <ul className="space-y-2">
                  <li>
                    <div className="group cursor-pointer" style={{ perspective: '1000px' }}>
                      <div className="relative w-full h-8 transition-transform duration-1000 ease-in-out" 
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
                        <div className="absolute inset-0 flex items-center " 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Brand Assets</a>
                        </div>
                        <div className="absolute inset-0 flex items-center " 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'rotateX(90deg) translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Brand Assets</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="group cursor-pointer" style={{ perspective: '1000px' }}>
                      <div className="relative w-full h-8 transition-transform duration-1000 ease-in-out" 
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
                        <div className="absolute inset-0 flex items-center " 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Get in touch</a>
                        </div>
                        <div className="absolute inset-0 flex items-center " 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'rotateX(90deg) translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Get in touch</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="group cursor-pointer" style={{ perspective: '1000px' }}>
                      <div className="relative w-full h-8 transition-transform duration-1000 ease-in-out" 
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
                        <div className="absolute inset-0 flex items-center " 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Project PR</a>
                        </div>
                        <div className="absolute inset-0 flex items-center " 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'rotateX(90deg) translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Project PR</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="group cursor-pointer" style={{ perspective: '1000px' }}>
                      <div className="relative w-full h-8 transition-transform duration-1000 ease-in-out" 
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
                        <div className="absolute inset-0 flex items-center " 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Support</a>
                        </div>
                        <div className="absolute inset-0 flex items-center " 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'rotateX(90deg) translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Help Center</a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* USE XDC Column */}
              <div>
                <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">
                  USE XDC
                </h4>
                <ul className="space-y-2">
                  <li>
                    <div className="group cursor-pointer" style={{ perspective: '1000px' }}>
                      <div className="relative w-full h-8 transition-transform duration-1000 ease-in-out" 
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
                        <div className="absolute inset-0 flex items-center " 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Ecosystem</a>
                        </div>
                        <div className="absolute inset-0 flex items-center " 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'rotateX(90deg) translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">DApps</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="group cursor-pointer" style={{ perspective: '1000px' }}>
                      <div className="relative w-full h-8 transition-transform duration-1000 ease-in-out" 
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
                        <div className="absolute inset-0 flex items-center " 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">XDC.dev</a>
                        </div>
                        <div className="absolute inset-0 flex items-center " 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'rotateX(90deg) translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Developer Hub</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="group cursor-pointer" style={{ perspective: '1000px' }}>
                      <div className="relative w-full h-8 transition-transform duration-1000 ease-in-out" 
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
                        <div className="absolute inset-0 flex items-center " 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">XDC Network</a>
                        </div>
                        <div className="absolute inset-0 flex items-center " 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'rotateX(90deg) translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Blockchain Explorer</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="group cursor-pointer" style={{ perspective: '1000px' }}>
                      <div className="relative w-full h-8 transition-transform duration-1000 ease-in-out" 
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
                        <div className="absolute inset-0 flex items-center " 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Forum</a>
                        </div>
                        <div className="absolute inset-0 flex items-center " 
                             style={{ 
                               backfaceVisibility: 'hidden',
                               transform: 'rotateX(90deg) translateZ(16px)'
                             }}>
                          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Forum</a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Separator */}
        <div className="w-full h-px bg-gray-300 mb-8"></div>

        {/* Social Media Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-4">
            <span className="text-gray-800 font-bold">Stay tuned on</span>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">YouTube</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">X</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">GitHub</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Spotify</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">iHeart</a>
            </div>
          </div>
        </div>

        {/* Horizontal Separator */}
        <div className="w-full h-px bg-gray-300 mb-8"></div>

        {/* Copyright Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <span className="text-gray-600">
            ©2025 XDC Foundation, All Rights Reserved
          </span>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Terms & Conditions</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
