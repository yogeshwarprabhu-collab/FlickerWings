import { Card } from "@/components/ui/card";
import { Lightbulb, Radio, Battery, Cog } from "lucide-react";

export const RnD = () => {
  const focus = [
    {
      icon: Lightbulb,
      title: "Payload Optimization",
      description: "Advanced research in maximizing drone carrying capacity and efficiency"
    },
    {
      icon: Radio,
      title: "Communication Systems",
      description: "Developing next-generation secure tactical communication protocols"
    },
    {
      icon: Battery,
      title: "Tactical Endurance",
      description: "Enhancing flight duration and operational range for extended missions"
    },
    {
      icon: Cog,
      title: "Industrial & Agritech Automation",
      description: "Pioneering automated solutions for industry and agriculture"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            R&D <span className="text-gradient">Focus</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pushing boundaries through continuous research and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focus.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-gradient hover-glow group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-teal-200 via-teal-300 to-teal-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
