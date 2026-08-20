import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/skills";
import Projects from "../components/projects";
const Home=()=>{
    return(
        <div>
            <Hero />
            <About />
            <Skills />
            <Projects />
        </div>
    )
}
export default Home;