import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { DroneTechnology } from "@/components/DroneTechnology";
import { AgritechSolutions } from "@/components/AgritechSolutions";
import { Commercial } from "@/components/Commercial";
import { SoftwareDev } from "@/components/SoftwareDev";
import { Awards } from "@/components/Awards";
import { RnD } from "@/components/RnD";
import { Training } from "@/components/Training";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="home">
        <Hero />
        <Expertise />
        <DroneTechnology />
        <AgritechSolutions />
        <Commercial />
        <SoftwareDev />
        <Awards />
        <RnD />
        <Training />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
