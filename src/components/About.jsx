import React from "react";
import { motion } from "framer-motion";

const About = ({ darkMode }) => {
    return (
        <motion.div
            id="about"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className={`
                w-full
                min-h-screen
                pt-16
                pb-8
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

                <div className="text-center mb-7">

                    <h2
                        className={`
                            text-2xl
                            md:text-3xl
                            font-bold
                            ${
                                darkMode
                                    ? "text-white"
                                    : "text-[#161310]"
                            }
                        `}
                    >
                        About{" "}
                        <span className="text-[#f0a83a]">
                            Me
                        </span>
                    </h2>

                </div>


                {/* Main About Section */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">

                    {/* Image */}

                    <div className="flex justify-center">

                        <motion.div
                            animate={{
                                y: [0, -8, 0, 8, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="
                                w-52
                                h-64
                                rounded-2xl
                                overflow-hidden
                                border-2
                                border-[#f0a83a]
                            "
                        >

                            {/* KEEP YOUR ORIGINAL PROFILE IMAGE PATH HERE */}

                            <img
                                src="/src/assets/profile-png.jpeg"
                                alt="Iqra Nayab"
                                className="w-full h-full object-cover"
                            />

                        </motion.div>

                    </div>


                    {/* Text */}

                    <div>

                        <h3
                            className={`
                                text-xl
                                font-bold
                                mb-3
                                ${
                                    darkMode
                                        ? "text-white"
                                        : "text-[#161310]"
                                }
                            `}
                        >
                            Frontend Developer
                        </h3>

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
                            I am a passionate frontend developer who
                            enjoys creating beautiful, responsive and
                            user-friendly websites.
                        </p>

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
                            I work with HTML, CSS, JavaScript, React,
                            Git, GitHub and modern web technologies to
                            build interactive web experiences.
                        </p>

                    </div>

                </div>

            </div>

        </motion.div>
    );
};

export default About;