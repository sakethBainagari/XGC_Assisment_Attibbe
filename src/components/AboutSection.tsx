import { Button } from "./ui/button";
import { ArrowRight, ChevronUp } from "lucide-react";

const AboutSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-muted px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Diamond icon */}
            <div className="w-6 h-6 border-2 border-foreground transform rotate-45"></div>
            
            {/* Main description */}
            <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground font-light">
              XDC Network is an enterprise-grade, open-source blockchain protocol. An EVM-compatible 
              chain with smart contract capabilities, it is uniquely suited to revolutionize, decentralize, 
              and liquify the trade finance industry through the tokenization of real-world assets and 
              financial instruments.
            </p>

            {/* Explore button */}
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 px-8 py-4"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Explore the Network
            </Button>
          </div>

          {/* Right Column - Blockchain Info */}
          <div className="lg:pt-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-6 h-6 border-2 border-foreground transform rotate-45"></div>
              <h3 className="text-lg font-medium text-foreground tracking-wider">
                WHAT IS A BLOCKCHAIN?
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center hover:bg-foreground/90 transition-all duration-300 z-30"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </section>
  );
};

export default AboutSection;