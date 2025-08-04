import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, HandHeart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

interface HeroSectionProps {
  onVolunteerClick: () => void;
}

const HeroSection = ({ onVolunteerClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }} // ✅ FIXED: use .src
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-transparent"></div>

        {/* Text content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight text-center">
              Basti Ki Pathshala Foundation
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our mission to provide quality education and skill development to underserved
              communities, creating pathways to brighter futures for children and families.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                variant="warm"
                size="hero"
                onClick={onVolunteerClick}
                className="w-full sm:w-auto"
              >
                Become a Volunteer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="hero"
                className="w-full sm:w-auto bg-background/20 border-primary-foreground/30 text-primary-foreground hover:bg-background/30"
              >
                Learn Our Impact
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-primary-foreground">
              <div className="flex flex-col items-center animate-float">
                <Users className="h-8 w-8 mb-2 text-secondary" />
                <div className="text-3xl font-bold">1,900+</div>
                <div className="text-sm opacity-90">Interns</div>
              </div>

              <div className="flex flex-col items-center animate-float" style={{ animationDelay: "1s" }}>
                <Heart className="h-8 w-8 mb-2 text-secondary" />
                <div className="text-3xl font-bold">30,000+</div>
                <div className="text-sm opacity-90">Children Educated</div>
              </div>

              <div className="flex flex-col items-center animate-float" style={{ animationDelay: "2s" }}>
                <HandHeart className="h-8 w-8 mb-2 text-secondary" />
                <div className="text-3xl font-bold">10,000+</div>
                <div className="text-sm opacity-90">Supporters</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;