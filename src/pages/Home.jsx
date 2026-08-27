import React from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Work from "../components/Work";
import Contact from "../components/Contact";

const Home = ({ darkMode }) => {

    return (
        <div>

            <Hero darkMode={darkMode} />

            <About darkMode={darkMode} />

            <Skills darkMode={darkMode} />

            <Projects darkMode={darkMode} />

            <Work darkMode={darkMode} />

            <Contact darkMode={darkMode} />

        </div>
    );
};

export default Home;