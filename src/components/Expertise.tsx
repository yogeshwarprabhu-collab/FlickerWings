import { Card } from "@/components/ui/card";
import { Cpu, Sprout, Factory, Code } from "lucide-react";

export const Expertise = () => {
  const domains = [
    {
      icon: Cpu,
      title: "Drone Technology / UAS",
      description: "Advanced UAV design, manufacturing, and tactical communication systems",
      gradient: "from-teal-200 to-teal-300"
    },
    {
      icon: Sprout,
      title: "Agritech Solutions",
      description: "Precision agriculture with automated spraying and monitoring systems",
      gradient: "from-teal-100 to-teal-200"
    },
    {
      icon: Factory,
      title: "Industrial Innovation",
      description: "Custom drone builds for commercial and industrial applications",
      gradient: "from-teal-300 to-teal-400"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Full-stack solutions with modern technologies and frameworks",
      gradient: "from-teal-200 to-teal-300"
    }
  ];

  return (
    <section id="solutions" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Multi-Domain <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions across cutting-edge technology sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover-glow group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${domain.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <domain.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{domain.title}</h3>
              <p className="text-muted-foreground">{domain.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
