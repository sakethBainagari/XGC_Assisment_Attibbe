import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
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
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-light text-foreground mb-12 leading-tight">
          Success Depends on
          <br />
          <span className="text-primary">Your Network</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          A fast and secure blockchain that supports trade finance, real-world asset (RWA) tokenization, and enterprise applications.
        </p>

        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-4 text-lg font-medium"
        >
          → Get started with XDC
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;