//
import "./App.css";
import Aos from "aos";
import Header from "./components/Header/Header";
// import Footer from './components/Footer/Footer';
import { useEffect } from "react";
import Hero from "./components/UI/Hero";
import Projects from "./components/UI/Projects";
import Contact from "./components/UI/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/UI/About";
import Skills from "./components/UI/Skills";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
