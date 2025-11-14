import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroDrone from "@/assets/hero-drone.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroDrone} 
          alt="Advanced drone technology" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--neon-blue) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon-blue) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="inline-block">
            <span className="text-sm font-semibold tracking-wider text-primary uppercase animate-pulse-glow px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
              Advanced Technology Solutions
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Innovating the Future with{" "}
            <span className="text-gradient glow-text">
              Intelligent Drone
            </span>{" "}
            & Tech Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering expertise in drone technology, agricultural automation, 
            industrial solutions, and cutting-edge software development
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
            >
              Explore Our Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/* <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg"
            >
              Contact Us
            </Button> */}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            {[
              { value: "2+", label: "Patents" },
              { value: "15+", label: "Projects" },
              { value: "2+", label: "Clients" },
              { value: "5+", label: "Awards" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
