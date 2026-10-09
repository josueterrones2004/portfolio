import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";

import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Timeline from "./sections/Timeline";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import NegociosLanding from "./pages/NegociosLanding";

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/negocios") {
    return <NegociosLanding />;
  }

  return (
    <>
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
    </>
  );
}

export default App;
