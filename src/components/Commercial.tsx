import { Card } from "@/components/ui/card";
import { Building2, Rocket, Wrench } from "lucide-react";

export const Commercial = () => {
  const partners = [
    { name: "Yahor Powers", type: "Energy Solutions" },
    { name: "Grey Bored", type: "Industrial Partner" },
    { name: "International Clients", type: "Global Reach" }
  ];

  const capabilities = [
    {
      icon: Building2,
      title: "Custom Drone Builds",
      description: "Tailored UAV solutions for specific industrial requirements"
    },
    {
      icon: Rocket,
      title: "Rapid Prototyping",
      description: "Fast development cycles from concept to deployment"
    },
    {
      icon: Wrench,
      title: "Field Deployment",
      description: "Complete integration and on-site implementation support"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Commercial & <span className="text-gradient">Industrial Strength</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading organizations for custom drone solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Partners */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Trusted Partners</h3>
            <div className="space-y-4">
              {partners.map((partner, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover-glow group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-1">{partner.name}</h4>
                      <p className="text-sm text-muted-foreground">{partner.type}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-bold mb-6">Our Capabilities</h3>
            <div className="space-y-4">
              {capabilities.map((capability, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover-glow group cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-200 to-teal-300 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <capability.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{capability.title}</h4>
                      <p className="text-muted-foreground">{capability.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
