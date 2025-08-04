import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // ✅ à garder ici

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> {/* ✅ Ajouté à l'intérieur du return */}
    </div>
  );
}
import Blog from "./components/Blog";

// ...

<Blog />

export default App;
