import React from "react";
import { motion } from "framer-motion";
import { Projects } from "../assets/asset.js";
import ProjectCard from "./ProjectCard";

const ProjectsSection = ({ darkMode }) => {
    return (
        <motion.div
            id="projects"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className={`
                w-full
                min-h-screen
                pt-12
                pb-12
                scroll-mt-[70px]
                transition-colors
                duration-300
                ${
                    darkMode
                        ? "bg-gradient-to-r from-[#161310] via-[#1e1915] to-[#161310]"
                        : "bg-gradient-to-r from-[#f8f5f0] via-[#ffffff] to-[#f8f5f0]"
                }
            `}
        >

            <div className="container mx-auto px-6">

                {/* HEADING */}

                <div className="text-center mb-10">

                    <h2
                        className={`
                            text-3xl
                            md:text-4xl
                            font-bold
                            ${
                                darkMode
                                    ? "text-white"
                                    : "text-[#161310]"
                            }
                        `}
                    >
                        My{" "}
                        <span className="text-[#f0a83a]">
                            Projects
                        </span>
                    </h2>

                    <p
                        className={`
                            mt-2
                            ${
                                darkMode
                                    ? "text-[#a89a85]"
                                    : "text-[#75695d]"
                            }
                        `}
                    >
                        Some of the projects I have created
                    </p>

                </div>


                {/* PROJECT GRID */}

                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3
                        gap-6
                        max-w-5xl
                        mx-auto
                    "
                >

                    {Projects.map((project, index) => (

                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1
                            }}
                            viewport={{
                                once: false,
                                amount: 0.2
                            }}
                        >

                            <ProjectCard
                                {...project}
                                darkMode={darkMode}
                            />

                        </motion.div>

                    ))}

                </div>

            </div>

        </motion.div>
    );
};

export default ProjectsSection;