import { Card } from "@/components/ui/card";
import { Code2, Database, Palette, Smartphone } from "lucide-react";

export const SoftwareDev = () => {
  const services = [
    {
      icon: Database,
      title: "ERP & Management Systems",
      description: "Enterprise resource planning, OMS, and inventory management solutions",
      tech: ["PostgreSQL", "Supabase"]
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge frameworks",
      tech: ["React", "TypeScript", "Vite"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed in Figma for optimal user experience",
      tech: ["Figma", "Design Systems"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications with native performance",
      tech: ["React Native", "PWA"]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Software <span className="text-gradient">Development</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-stack solutions with modern technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover-glow group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-200 to-teal-300 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
