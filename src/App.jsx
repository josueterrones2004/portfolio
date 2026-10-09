import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import IntroScreen from "./components/IntroScreen";
import OverlayScrollbar from "./components/OverlayScrollbar";

import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Timeline from "./sections/Timeline";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <IntroScreen />
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
        <About />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <OverlayScrollbar />
    </>
  );
}

export default App;
