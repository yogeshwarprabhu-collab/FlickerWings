import { Card } from "@/components/ui/card";
import { Target, Eye, Lightbulb } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 70% 70%, hsl(var(--electric)) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">FlickerWings</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              FlickerWings is an advanced technology startup at the forefront of drone innovation. 
              We specialize in creating cutting-edge UAV solutions that transform industries through 
              intelligent automation, precision technology, and sustainable practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <Card className="p-8 bg-card border-border hover-glow text-center">
              <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-teal-200 to-teal-300 flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To revolutionize industries through innovative drone technology and intelligent automation solutions
              </p>
            </Card>

            <Card className="p-8 bg-card border-border hover-glow text-center">
              <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the global leader in indigenous drone technology and autonomous systems innovation
              </p>
            </Card>

            <Card className="p-8 bg-card border-border hover-glow text-center">
              <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-teal-300 to-teal-400 flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Our Values</h3>
              <p className="text-muted-foreground">
                Innovation, excellence, sustainability, and commitment to advancing technology for a better future
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
