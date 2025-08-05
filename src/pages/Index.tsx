import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ParallaxReveal from "@/components/ParallaxReveal";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import PoweredBySection from "@/components/PoweredBySection";
import RWASection from "@/components/RWASection";
import WhatsHappeningSection from "@/components/WhatsHappeningSection";
import BlockchainLearningSection from "@/components/BlockchainLearningSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ParallaxReveal />
      <AboutSection />
      <SolutionsSection />
      <PoweredBySection />
      <RWASection />
      <WhatsHappeningSection />
      <BlockchainLearningSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
