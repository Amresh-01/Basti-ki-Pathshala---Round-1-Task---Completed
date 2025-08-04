import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VolunteerForm from "@/components/VolunteerForm";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleVolunteerClick = () => {
    setActiveSection("volunteer");
  };

  const renderSection = () => {
    switch (activeSection) {
      case "volunteer":
        return <VolunteerForm />;
      case "about":
        return <AboutSection />;
      default:
        return <HeroSection onVolunteerClick={handleVolunteerClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      {renderSection()}
    </div>
  );
};

export default Index;