import React from "react";
import Hero from "../components/homepage/Hero";
import Services from "../components/homepage/Services";
import About from "../components/homepage/About";
import Skills from "../components/homepage/Skills";
import Experience from "../components/homepage/Experience";
import Portfolio from "../components/homepage/Portfolio";
import Contact from "../components/homepage/contact";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Home;