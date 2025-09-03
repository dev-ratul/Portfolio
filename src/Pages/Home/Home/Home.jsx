import React from "react";
import HeroSec from "../../../Components/HeroSec/HeroSec";
import AboutMe from "../About/About";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Projects from "../Project/Projects";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="">
      <HeroSec></HeroSec>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <AboutMe></AboutMe>
    </div>
  );
};

export default Home;
