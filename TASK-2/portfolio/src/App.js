import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

const App = () => {
  return (
      <main>
        <Router>
        <Navbar />
        <About/>
        <Skills/>
        <Projects/>
        <Resume/>
        <Contact/>
        <Footer/>
        </Router>
      </main>
  );
};

export default App;
