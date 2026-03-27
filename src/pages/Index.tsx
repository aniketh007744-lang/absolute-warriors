import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import PlansSection from "@/components/PlansSection";
import AuthSection from "@/components/AuthSection";
import DashboardSection from "@/components/DashboardSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <FacilitiesSection />
    <PlansSection />
    <AuthSection />
    <DashboardSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
