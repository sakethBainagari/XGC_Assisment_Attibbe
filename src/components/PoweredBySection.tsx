import { useEffect, useState } from "react";

const PoweredBySection = () => {
  const [rotationStates, setRotationStates] = useState([0, 0, 0, 0, 0]);

  // Company logos data with multiple faces for cube effect
  const companies = [
    {
      name: "Yieldteq",
      faces: [
        <div className="text-gray-700 font-semibold text-lg flex items-center">
          <div className="w-6 h-6 bg-gray-800 mr-2 flex items-center justify-center">
            <div className="w-3 h-3 bg-white transform rotate-45"></div>
          </div>
          Yieldteq
        </div>,
        <div className="text-gray-600 font-bold text-xl">Y</div>,
        <div className="text-gray-700 font-medium text-base">YIELD</div>,
        <div className="text-gray-800 font-semibold text-lg">TEQ</div>
      ]
    },
    {
      name: "PLUGANDPLAY",
      faces: [
        <div className="text-gray-900 font-bold text-lg tracking-wider">PLUGANDPLAY</div>,
        <div className="text-gray-800 font-black text-xl">P&P</div>,
        <div className="text-gray-700 font-bold text-base">PLUG</div>,
        <div className="text-gray-900 font-bold text-base">PLAY</div>
      ]
    },
    {
      name: "rwa.xyz",
      faces: [
        <div className="text-gray-900 font-semibold text-lg flex items-center">
          <div className="w-6 h-6 border-2 border-gray-900 rounded-full mr-2 flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
          </div>
          rwa<span className="font-normal">.xyz</span>
        </div>,
        <div className="text-gray-800 font-bold text-xl">RWA</div>,
        <div className="text-gray-700 font-medium text-lg">.xyz</div>,
        <div className="text-gray-900 font-semibold text-base">REAL WORLD</div>
      ]
    },
    {
      name: "SECURITIZE",
      faces: [
        <div className="text-gray-900 font-semibold text-lg flex items-center">
          <div className="w-6 h-6 border-2 border-gray-900 rounded-full mr-2 flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
          </div>
          SECURITIZE
        </div>,
        <div className="text-gray-800 font-bold text-xl">SEC</div>,
        <div className="text-gray-700 font-medium text-base">SECURE</div>,
        <div className="text-gray-900 font-semibold text-base">TOKENIZE</div>
      ]
    },
    {
      name: "ankr",
      faces: [
        <div className="text-blue-500 font-bold text-xl flex items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full mr-2 flex items-center justify-center">
            <div className="text-white font-bold text-sm">a</div>
          </div>
          ankr
        </div>,
        <div className="text-blue-600 font-black text-2xl">A</div>,
        <div className="text-blue-400 font-bold text-lg">ANKR</div>,
        <div className="text-blue-500 font-medium text-base">NETWORK</div>
      ]
    }
  ];

  // Individual rotation effect for each logo every 3 seconds
  useEffect(() => {
    const intervals = companies.map((_, index) => {
      return setInterval(() => {
        setRotationStates(prev => {
          const newStates = [...prev];
          newStates[index] = (newStates[index] + 1) % 4;
          return newStates;
        });
      }, 3000 + (index * 600)); // Stagger the rotations slightly
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [companies.length]);

  return (
    <section className="relative py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Powered by XDC
          </h2>
        </div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {companies.map((company, index) => (
            <div key={company.name} className="flex items-center justify-center h-16">
              <div 
                className="relative w-full h-full flex items-center justify-center"
                style={{ perspective: '1000px' }}
              >
                <div
                  className="relative w-full h-16 transition-transform duration-700 ease-in-out"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotateX(${rotationStates[index] * 90}deg)`
                  }}
                >
                  {/* Four faces of the cube */}
                  {company.faces.map((face, faceIndex) => (
                    <div
                      key={faceIndex}
                      className="absolute inset-0 flex items-center justify-center backface-hidden"
                      style={{
                        transform: `rotateX(${faceIndex * 90}deg) translateZ(32px)`,
                        backfaceVisibility: 'hidden'
                      }}
                    >
                      {face}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoweredBySection;
