import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, Html, useProgress } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import * as THREE from "three";

// Tunables for final look
const MODEL_SCALE = 260;   // large but realistic
const CAMERA_Z = 1.8;      // camera distance
const CAMERA_FOV = 60;     // field of view
const CANVAS_WIDTH = "46%"; // width of the canvas (right side)
const CANVAS_HEIGHT = "68%"; // vertical size of the canvas area

function LoaderHUD() {
  const { active, progress } = useProgress();
  return (
    <Html center>
      <div style={{
        padding: 8,
        background: "rgba(0,0,0,0.6)",
        color: "#fff",
        borderRadius: 8,
        fontSize: 13
      }}>
        {active ? `Loading ${Math.round(progress)}%` : "Preparing 3D"}
      </div>
    </Html>
  );
}

const DroneModel = () => {
  const { scene } = useGLTF("/models/Flying drone_.glb");

  const prepared = useMemo(() => {
    if (!scene) return null;
    const cloned = scene.clone(true);

    // scale to a large but reasonable size
    cloned.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);

    // center geometry
    const box = new THREE.Box3().setFromObject(cloned);
    const center = box.getCenter(new THREE.Vector3());
    cloned.position.x = -center.x;
    cloned.position.y = -center.y;
    cloned.position.z = -center.z;

    // rotate slightly so the drone faces viewer nicely
    cloned.rotation.set(-0.15, 0.6, 0);

    // nudge slightly right and up so it sits in right-center (tweak if needed)
    cloned.position.x += 0.12;
    cloned.position.y += 0.12;
    cloned.position.z += 0.05;

    // ensure visible materials
    cloned.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material) {
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach((m: any) => {
            m.side = THREE.FrontSide;
            if (m.transparent !== undefined) m.transparent = false;
            if (m.opacity !== undefined) m.opacity = 1;
          });
        }
      }
    });

    return cloned;
  }, [scene]);

  if (!prepared) return null;
  return <primitive object={prepared} />;
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-visible pt-28">
      {/* Animated grid background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `linear-gradient(hsl(var(--neon-blue) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon-blue) / 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-8 items-start min-h-[70vh] lg:min-h-[68vh] py-8">
          {/* Left: text */}
          <div className="space-y-8 text-left animate-fade-in z-20">
            <div className="inline-block">
              <span className="text-sm font-semibold tracking-wider text-primary uppercase animate-pulse-glow px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
                Advanced Technology Solutions
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Innovating the Future with{" "}
              <span className="text-gradient glow-text">Intelligent Drone</span> & Tech Solutions
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Pioneering expertise in drone technology, agricultural automation, industrial solutions,
              and cutting-edge software development
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg w-fit">
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              {[
                { value: "2+", label: "Patents" },
                { value: "15+", label: "Projects" },
                { value: "2+", label: "Clients" },
                { value: "5+", label: "Awards" },
              ].map((stat, i) => (
                <div key={i} className="space-y-2 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column (leave empty to maintain grid) */}
          <div className="relative h-[520px] md:h-[620px] lg:h-[800px]" />
        </div>
      </div>

      {/* Absolute, centered-right canvas (vertically centered) */}
      <div
        className="absolute z-30 pointer-events-none"
        style={{
          width: CANVAS_WIDTH,
          height: CANVAS_HEIGHT,
          top: "50%",
          right: "3%",
          transform: "translateY(-50%)",
          maxWidth: "1200px"
        }}
      >
        <div className="relative w-full h-full mx-auto rounded-2xl overflow-visible">
          <Canvas
            camera={{ position: [0, 0.6, CAMERA_Z], fov: CAMERA_FOV }}
            gl={{ antialias: true, alpha: true }}
            style={{ width: "100%", height: "100%" }}
          >
            <Suspense fallback={<LoaderHUD />}>
              <ambientLight intensity={1.2} />
              <directionalLight position={[10, 12, 8]} intensity={2.0} />
              <directionalLight position={[-8, 6, -6]} intensity={0.8} />
              <pointLight position={[0, 5, 6]} intensity={0.9} />

              <DroneModel />

              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={true}
                autoRotate
                autoRotateSpeed={0.25}
                minPolarAngle={Math.PI / 3.5}
                maxPolarAngle={Math.PI / 1.6}
                // keep the controls looking at the model
                target={[0.2, 0.25, 0]}
              />
              <Environment preset="sunset" />
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-float pointer-events-auto">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
