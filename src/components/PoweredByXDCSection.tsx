import { useEffect, useState } from "react";

const PoweredByXDCSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Company logos data
  const companies = [
    {
      name: "Yieldteq",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-800 transform rotate-45"></div>
          <span className="text-2xl font-bold text-gray-800">Yieldteq</span>
        </div>
      )
    },
    {
      name: "PLUGANDPLAY",
      logo: (
        <div className="text-2xl font-black text-gray-900">
          PLUGANDPLAY
        </div>
      )
    },
    {
      name: "rwa.xyz",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 border-2 border-gray-800 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
          </div>
          <span className="text-2xl font-bold text-gray-800">rwa<span className="font-normal">.xyz</span></span>
        </div>
      )
    },
    {
      name: "SECURITIZE",
      logo: (
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <span className="text-2xl font-bold text-gray-800">SECURITIZE</span>
        </div>
      )
    },
    {
      name: "ankr",
      logo: (
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <span className="text-2xl font-bold text-blue-500">ankr</span>
        </div>
      )
    }
  ];

  // Auto-rotate logos every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [companies.length]);

  return (
    <section className="relative min-h-screen bg-slate-100 px-6 py-24 flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-6xl lg:text-7xl font-light text-gray-900 mb-24">
          Powered by XDC
        </h2>

        {/* Logo Display Area */}
        <div className="relative h-32 flex items-center justify-center">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                index === currentIndex
                  ? 'opacity-100 scale-100 rotate-0'
                  : index === (currentIndex - 1 + companies.length) % companies.length
                  ? 'opacity-0 scale-90 -rotate-90'
                  : 'opacity-0 scale-110 rotate-90'
              }`}
              style={{
                transform: `
                  ${index === currentIndex ? 'rotate(0deg) scale(1)' : 
                    index === (currentIndex - 1 + companies.length) % companies.length ? 'rotate(-90deg) scale(0.9)' : 
                    'rotate(90deg) scale(1.1)'}
                `,
              }}
            >
              {company.logo}
            </div>
          ))}
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center space-x-3 mt-16">
          {companies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gray-800 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Additional rotating logos in background (subtle) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Decorative rotating elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-300 rounded-full opacity-20 animate-spin"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gray-400 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/6 w-1.5 h-1.5 bg-gray-300 rounded-full opacity-25 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default PoweredByXDCSection;
