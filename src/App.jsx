import { useCallback, useRef } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import { useResponsive } from "./hooks/useResponsive";
import { ASSETS } from "./constants/assets";

function App() {
  const { isDesktop } = useResponsive();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToSection = useCallback((ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleNavItemSelected = useCallback(
    (section) => {
      switch (section) {
        case "Home":
          scrollToSection(homeRef);
          break;
        case "About":
          scrollToSection(aboutRef);
          break;
        case "Experiences":
          scrollToSection(experienceRef);
          break;
        default:
          break;
      }
    },
    [scrollToSection],
  );

  return (
    <div className="min-h-screen bg-surface">
      <Header onNavItemSelected={handleNavItemSelected} />

      <div
        ref={homeRef}
        className="bg-cover bg-center pt-8 "
        style={{
          backgroundImage: `url(${ASSETS.test3})`,
          paddingLeft: 32,
          paddingRight: isDesktop ? 0 : 32,
        }}
      >
        <Hero />
      </div>

      <div
        ref={aboutRef}
        className="bg-cover bg-center pt-8 "
        style={{ backgroundImage: `url(${ASSETS.test4})` }}
      >
        <About />
      </div>

      <div
        ref={experienceRef}
        className="bg-cover bg-center pt-8 "
        style={{ backgroundImage: `url(${ASSETS.test2})` }}
      >
        <Experience />
      </div>

      <div
        ref={experienceRef}
        className="bg-cover bg-center pt-8 "
        style={{ backgroundImage: `url(${ASSETS.test})` }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default App;
