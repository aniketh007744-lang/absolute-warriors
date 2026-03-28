import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import GallerySection from "@/components/GallerySection";
import PlansSection from "@/components/PlansSection";
import AuthSection from "@/components/AuthSection";
import DashboardSection from "@/components/DashboardSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {

  // ✅ GET USER FROM LOCAL STORAGE
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* 🔥 MAIN CONTENT */}
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <GallerySection />
      <PlansSection />

      {/* 🔐 SHOW AUTH ONLY IF NOT LOGGED IN */}
      {!user && <AuthSection />}

      {/* 👤 SHOW DASHBOARD IF LOGGED IN */}
      {user && <DashboardSection />}

      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;