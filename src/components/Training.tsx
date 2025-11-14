import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Building } from "lucide-react";

export const Training = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Engineering Internships",
      description: "Hands-on experience with cutting-edge drone technology and real-world projects"
    },
    {
      icon: Users,
      title: "Technical Mentorship",
      description: "Expert guidance from industry professionals in UAV development and innovation"
    },
    {
      icon: Building,
      title: "College & Industry Collaboration",
      description: "Partnerships with academic institutions and industry leaders for knowledge exchange"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Training & <span className="text-gradient">Support</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering the next generation of drone technology innovators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover-glow group cursor-pointer animate-slide-up text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-teal-200 to-teal-300 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <program.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{program.title}</h3>
              <p className="text-muted-foreground">{program.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center animate-slide-up" style={{ animationDelay: "300ms" }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
            Join Our Training Program
          </Button>
        </div>
      </div>
    </section>
  );
};
