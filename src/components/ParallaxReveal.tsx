import { useEffect, useState } from "react";

const ParallaxReveal = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      
      // Calculate scroll progress (0 to 1)
      const progress = Math.min(scrollTop / (documentHeight * 0.6), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate the reveal height based on scroll progress
  const revealHeight = Math.min(scrollProgress * 100, 100);
  
  // Calculate the clip-path for the reveal effect - starting smaller
  const clipPath = `circle(${5 + revealHeight * 1.8}% at 50% 100%)`;

  return (
    <section className="relative h-[150vh] overflow-hidden">
      {/* Fixed container for the parallax effect - hide when scroll is complete */}
      {scrollProgress < 0.95 && (
        <div className="fixed bottom-0 left-0 w-full h-screen z-0">
          {/* Forest background image with reveal effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-100 ease-out"
            style={{
              backgroundImage: `url('/lovable-uploads/668aff21-9655-4d2e-9359-444b60b36d46.png')`,
              clipPath: clipPath,
              transform: `translateY(${(1 - scrollProgress) * 20}px) scale(${1 + scrollProgress * 0.1})`
            }}
          >
            {/* Overlay to blend with dark theme */}
            <div className="absolute inset-0 bg-background/20"></div>
          </div>

          {/* Initial small arc shape when not scrolled */}
          {scrollProgress < 0.05 && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div 
                className="w-32 h-16 bg-primary/10 rounded-t-full border-t-2 border-primary/30"
                style={{
                  clipPath: "ellipse(40% 100% at 50% 100%)"
                }}
              ></div>
            </div>
          )}
        </div>
      )}

      {/* Spacer to create scroll distance */}
      <div className="h-full"></div>
    </section>
  );
};

export default ParallaxReveal;