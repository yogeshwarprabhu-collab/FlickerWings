import { Card } from "@/components/ui/card";
import { Radio, Shield, Eye, Award, Zap, Lock } from "lucide-react";
import industrialDrone from "@/assets/industrial-drone.jpg";

export const DroneTechnology = () => {
  const features = [
    {
      icon: Zap,
      title: "In-house Design & Manufacturing",
      description: "Complete UAV development from concept to deployment"
    },
    {
      icon: Radio,
      title: "Tactical Communication Systems",
      description: "Advanced tethered UAV solutions for secure operations"
    },
    {
      icon: Eye,
      title: "High-End Surveillance",
      description: "Military-grade surveillance drones with cutting-edge sensors"
    },
    {
      icon: Shield,
      title: "Police Operations",
      description: "Drones deployed for law enforcement and security"
    },
    {
      icon: Award,
      title: "National Champions",
      description: "Winners of prestigious national-level drone races"
    },
    {
      icon: Lock,
      title: "Patented Technologies",
      description: "Two innovative UAV patents for tactical applications"
    }
  ];

  return (
    <section id="technology" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Advanced <span className="text-gradient">Drone Technology</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Pioneering UAV innovation with indigenous technology and tactical excellence
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-4 bg-card border-border hover-glow group cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <feature.icon className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold mb-1 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-200/20 to-teal-300/20 rounded-2xl blur-3xl" />
            <img
              src={industrialDrone}
              alt="Industrial surveillance drone"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
