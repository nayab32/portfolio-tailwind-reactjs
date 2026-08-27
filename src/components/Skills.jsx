import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/asset.js";

const Skills = ({ darkMode }) => {

    return (
        <motion.div
            id="skills"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className={`
                w-full
                min-h-screen
                pt-16
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

                {/* Heading */}

                <div className="text-center mb-8">

                    <h2
                        className={`
                            text-3xl
                            md:text-4xl
                            font-bold
                            mb-2
                            ${
                                darkMode
                                    ? "text-white"
                                    : "text-[#161310]"
                            }
                        `}
                    >
                        My{" "}
                        <span className="text-[#f0a83a]">
                            Skills
                        </span>
                    </h2>

                    <p
                        className={`
                            text-sm
                            md:text-base
                            max-w-md
                            mx-auto
                            ${
                                darkMode
                                    ? "text-[#a89a85]"
                                    : "text-[#75695d]"
                            }
                        `}
                    >
                        Technologies I work with to bring ideas to life
                    </p>

                </div>


                {/* Skills Grid */}

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

                    {skills.map((skill, index) => {

                        const Icon = skill.icon;

                        return (

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
                                    delay: index * 0.08
                                }}
                                viewport={{
                                    once: false,
                                    amount: 0.2
                                }}
                            >

                                <motion.div
                                    animate={{
                                        y: [0, -6, 0, 6, 0]
                                    }}
                                    transition={{
                                        duration: 3.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.3
                                    }}
                                    whileHover={{
                                        scale: 1.03
                                    }}
                                    className={`
                                        w-full
                                        min-h-[190px]
                                        rounded-xl
                                        p-5
                                        border
                                        cursor-pointer
                                        transition-all
                                        duration-300

                                        ${
                                            darkMode
                                                ? "bg-[#1e1915] border-[#2b241d] hover:border-[#f0a83a]"
                                                : "bg-[#f3eee7] border-[#ddd3c5] hover:border-[#f0a83a]"
                                        }
                                    `}
                                >

                                    {/* Icon + Title */}

                                    <div className="flex items-center gap-3 mb-4">

                                        <div
                                            className={`
                                                w-12
                                                h-12
                                                rounded-lg
                                                flex
                                                items-center
                                                justify-center
                                                ${
                                                    darkMode
                                                        ? "bg-[#161310]"
                                                        : "bg-white"
                                                }
                                            `}
                                        >

                                            <Icon className="text-[#f0a83a] text-2xl" />

                                        </div>


                                        <h3
                                            className={`
                                                text-xl
                                                font-semibold
                                                ${
                                                    darkMode
                                                        ? "text-white"
                                                        : "text-[#161310]"
                                                }
                                            `}
                                        >
                                            {skill.title}
                                        </h3>

                                    </div>


                                    {/* Description */}

                                    <p
                                        className={`
                                            text-sm
                                            leading-6
                                            ${
                                                darkMode
                                                    ? "text-[#a89a85]"
                                                    : "text-[#75695d]"
                                            }
                                        `}
                                    >
                                        {skill.description}
                                    </p>


                                    {/* Technology Tags */}

                                    <div className="flex flex-wrap gap-2 mt-4">

                                        {skill.technologies.map(
                                            (technology, techIndex) => (

                                                <span
                                                    key={techIndex}
                                                    className={`
                                                        px-2.5
                                                        py-1
                                                        rounded-full
                                                        text-xs
                                                        ${
                                                            darkMode
                                                                ? "bg-[#161310] border border-[#2b241d] text-[#c9beb2]"
                                                                : "bg-white border border-[#ddd3c5] text-[#75695d]"
                                                        }
                                                    `}
                                                >
                                                    {technology}
                                                </span>

                                            )
                                        )}

                                    </div>

                                </motion.div>

                            </motion.div>

                        );
                    })}

                </div>

            </div>

        </motion.div>
    );
};

export default Skills;