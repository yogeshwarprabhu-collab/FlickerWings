import { Card } from "@/components/ui/card";
import { Droplets, Sprout, Target, Users, Shield, Activity } from "lucide-react";
import agritechDrone from "@/assets/agritech-drone.jpg";

export const AgritechSolutions = () => {
  const solutions = [
    {
      icon: Droplets,
      title: "Fertilizer & Pesticide Spraying",
      description: "Precision spraying drones for optimal crop treatment"
    },
    {
      icon: Sprout,
      title: "Seed Sowing Automation",
      description: "Advanced seeding drones for efficient planting"
    },
    {
      icon: Target,
      title: "Precision Agriculture",
      description: "Optimized spray patterns for maximum efficiency"
    },
    {
      icon: Users,
      title: "Reduced Manpower",
      description: "Increased acreage coverage with minimal labor"
    },
    {
      icon: Shield,
      title: "Safety Focused",
      description: "Chemical exposure-free operations for workers"
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Data logging and sprayed area tracking"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--neon-cyan)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--electric)) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-float order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-200/20 to-teal-300/20 rounded-2xl blur-3xl" />
            <img
              src={agritechDrone}
              alt="Agricultural drone in field"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>

          {/* Content */}
          <div className="space-y-8 animate-slide-up order-1 lg:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Agricultural <span className="text-gradient">Drone Solutions</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Revolutionizing farming with intelligent automation and precision technology
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {solutions.map((solution, index) => (
                <Card
                  key={index}
                  className="p-4 bg-card border-border hover-glow group cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <solution.icon className="h-8 w-8 text-teal-200 mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold mb-1 text-foreground">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
