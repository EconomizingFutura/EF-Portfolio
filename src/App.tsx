import { useEffect, useRef } from "react";
import { AppRouter } from "./router";
import Lenis from "@studio-freight/lenis";
import "./style.css";
// import HeroSection from "./sections/HeroSections";
function App() {
  const container = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // return <ReactForms />;
  // return <HeroSection />;
  return (
    <main ref={container} className="max-w-[1640px] mx-auto">
      <AppRouter />
    </main>
  );
}

export default App;
