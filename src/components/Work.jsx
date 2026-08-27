import React from "react";
import { motion } from "framer-motion";
import { workData } from "../assets/asset.js";

const Work = ({ darkMode }) => {

    return (
        <motion.div
            id="experience"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className={`
                w-full
                min-h-screen
                pt-20
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
                            Experience
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
                        My development journey and experience
                    </p>

                </div>


                {/* EXPERIENCE */}

                <div className="max-w-4xl mx-auto space-y-6">

                    {workData.map((work, index) => (

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
                            className={`
                                rounded-xl
                                p-6
                                border
                                transition-colors
                                duration-300
                                ${
                                    darkMode
                                        ? "bg-[#1e1915] border-[#2b241d]"
                                        : "bg-[#f3eee7] border-[#ddd3c5]"
                                }
                            `}
                        >

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">

                                <h3
                                    className={`
                                        text-xl
                                        font-bold
                                        ${
                                            darkMode
                                                ? "text-white"
                                                : "text-[#161310]"
                                        }
                                    `}
                                >
                                    {work.title}
                                </h3>

                                <span className="text-[#f0a83a] text-sm font-semibold">
                                    {work.duration}
                                </span>

                            </div>


                            <h4 className="text-[#f0a83a] text-sm font-semibold mb-3">
                                {work.company}
                            </h4>


                            <p
                                className={`
                                    text-sm
                                    leading-6
                                    mb-4
                                    ${
                                        darkMode
                                            ? "text-[#a89a85]"
                                            : "text-[#75695d]"
                                    }
                                `}
                            >
                                {work.description}
                            </p>


                            <div className="flex flex-wrap gap-2">

                                {work.technologies.map(
                                    (technology, techIndex) => (

                                        <span
                                            key={techIndex}
                                            className={`
                                                px-3
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

                    ))}

                </div>

            </div>

        </motion.div>
    );
};

export default Work;