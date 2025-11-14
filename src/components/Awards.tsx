import { Card } from "@/components/ui/card";
import { Award, Trophy, Star, Zap } from "lucide-react";

export const Awards = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "MEITY Grant Winner",
      description: "Recognized by the Ministry of Electronics & IT for innovation",
      color: "from-teal-200 to-teal-300"
    },
    {
      icon: Award,
      title: "Indigenous Tech Leader",
      description: "Pioneering drone technology development in India",
      color: "from-teal-100 to-teal-200"
    },
    {
      icon: Star,
      title: "UAV Innovation Awards",
      description: "Multiple accolades for groundbreaking UAV technologies",
      color: "from-teal-300 to-teal-400"
    },
    {
      icon: Zap,
      title: "National Race Champions",
      description: "Winners of prestigious national-level drone competitions",
      color: "from-teal-200 to-teal-300"
    }
  ];

  return (
    <section id="awards" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Awards & <span className="text-gradient">Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrated excellence in drone innovation and technology leadership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover-glow group cursor-pointer text-center animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                <achievement.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{achievement.title}</h3>
              <p className="text-muted-foreground">{achievement.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
