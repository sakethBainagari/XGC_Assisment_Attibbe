import { Button } from "./ui/button";
import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBlackBg, setShowBlackBg] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showText, setShowText] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animation sequence - made faster
          setTimeout(() => setShowBlackBg(true), 300); // Black background after 300ms
          setTimeout(() => setShowButton(true), 1000);  // Button after 1s
          setTimeout(() => setShowHeader(true), 1800);  // Header after 1.8s (after button)
          setTimeout(() => setShowText(true), 2500);    // Text after 2.5s
        }
      },
      {
        threshold: 0.1
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
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-green-200">
      {/* Black background that slides up from bottom */}
      <div className={`absolute inset-0 bg-black transform transition-transform duration-1000 ease-out ${
        showBlackBg ? 'translate-y-0' : 'translate-y-full'
      }`}></div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 z-5">
        {/* Animated dots */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/6 w-1 h-1 bg-primary rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse delay-500"></div>
        
        {/* Network visualization at bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-20">
          <div className="w-96 h-96 border border-primary/30 rounded-full relative">
            <div className="absolute inset-8 border border-primary/20 rounded-full">
              <div className="absolute inset-8 border border-primary/10 rounded-full"></div>
            </div>
            {/* Network nodes */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full"></div>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Heading - comes from bottom after button */}
        <h1 className={`mb-12 custom-selection transform transition-all duration-1000 ${
          showHeader ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
            style={{
              fontFamily: '"Editorial New", serif',
              fontWeight: 400,
              fontSize: '128px',
              lineHeight: '128px',
              fontStyle: 'normal',
              color: 'rgb(159, 243, 255)'
            }}>
          Success Depends on
          <br />
          <span style={{ color: 'rgb(159, 243, 255)' }}>Your Network</span>
        </h1>

        {/* Subtitle - comes from bottom */}
        <p className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed custom-selection transform transition-all duration-1000 ${
          showText ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          A fast and secure blockchain that supports trade finance, real-world asset (RWA) tokenization, and enterprise applications.
        </p>

        {/* CTA Button - comes from bottom */}
        <Button 
          size="lg" 
          className={`group bg-transparent border-2 hover:bg-transparent transition-all duration-300 px-8 py-4 relative overflow-hidden transform duration-1000 ${
            showButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{
            borderColor: 'rgb(159, 243, 255)',
            color: 'rgb(159, 243, 255)',
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
              Get started with XDC
            </span>
          </span>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;