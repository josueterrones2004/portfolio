import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import IntroScreen from "./components/IntroScreen";
import OverlayScrollbar from "./components/OverlayScrollbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Timeline from "./sections/Timeline";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <IntroScreen />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <OverlayScrollbar />
    </>
  );
}

export default App;