import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CoursesSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
};

export default Index;
