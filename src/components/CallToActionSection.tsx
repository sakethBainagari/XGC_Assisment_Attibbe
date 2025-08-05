import { ArrowRight, ChevronUp } from "lucide-react";

const CallToActionSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-6 bg-blue-50 relative group hover:bg-black transition-all duration-300 cursor-pointer">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Left Side - Text Content */}
          <div className="space-y-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
              Heard enough?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-700 group-hover:text-white transition-colors duration-300">
              Start building with XDC today
            </p>
          </div>

          {/* Right Side - Arrow */}
          <div className="flex items-center">
            <button className="group flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300">
              <ArrowRight className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
            </button>
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

export default CallToActionSection; 