

import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile-png.jpeg";

const Hero = ({ darkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            id="home"
            className={`
                min-h-screen
                flex
                items-center
                pt-20
                pb-16
                transition-colors
                duration-300
                ${
                    darkMode
                        ? "bg-gradient-to-r from-[#161310] via-[#1e1915] to-[#161310]"
                        : "bg-gradient-to-r from-[#f8f5f0] via-[#ffffff] to-[#f8f5f0]"
                }
            `}
        >

            <div className="container mx-auto px-10 flex flex-col md:flex-row
            items-center justify-between gap-4">

                {/* left side content */}
                <div className="md:w-1/2 mb-10 md:mb-0 md:ml-8">

                    <h1
                        className={`
                            text-4xl
                            md:text-6xl
                            font-bold
                            mb-4
                            ${
                                darkMode
                                    ? "text-white"
                                    : "text-[#161310]"
                            }
                        `}
                    >
                        Hi, I'm{" "}
                        <span className="text-[#f0a83a]">
                            IQRA NAYAB
                        </span>
                    </h1>


                    <h2
                        className={`
                            text-2xl
                            md:text-4xl
                            font-semibold
                            mb-6
                            typewriter
                            ${
                                darkMode
                                    ? "text-white"
                                    : "text-[#161310]"
                            }
                        `}
                    >
                        Full Stack Developer
                    </h2>


                    <p
                        className={`
                            text-lg
                            mb-8
                            ${
                                darkMode
                                    ? "text-[#a89a85]"
                                    : "text-[#75695d]"
                            }
                        `}
                    >
                        I create stunning web experiences with modern technologies
                        and innovative design
                    </p>


                    <div className="flex space-x-4">

                        <a
                            href="#project"
                            className="
                                px-6
                                py-3
                                bg-[#f0a83a]
                                text-[#161310]
                                rounded-lg
                                font-medium
                                hover:bg-[#d99527]
                                transition
                                duration-300
                            "
                        >
                            View Work
                        </a>


                        <a
                            href="#contact"
                            className="
                                px-6
                                py-3
                                border
                                border-[#f0a83a]
                                rounded-lg
                                font-medium
                                hover:bg-[#f0a83a]/20
                                transition
                                duration-300
                            "
                        >
                            Contact Me
                        </a>

                    </div>

                </div>


                {/* right side image */}
                <div className="md:w-1/2 flex justify-center md:translate-x-16">

                    <div className="relative w-64 h-64 md:w-80 md:h-80">

                        <div
                            className="
                                absolute
                                inset-0
                                rounded-full
                                bg-gradient-to-r
                                from-[#2b241d]
                                via-[#f0a83a]
                                to-[#d99527]
                                opacity-70
                            "
                        >

                            {/* Profile Image Animation - SAME AS YOUR ORIGINAL */}
                            <motion.img
                                animate={{ y: [0, -25, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut"
                                }}
                                className="
                                    relative
                                    rounded-full
                                    w-64
                                    h-64
                                    md:w-80
                                    md:h-80
                                    object-cover
                                    z-10
                                "
                                src={profileImg}
                                alt="Profile"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </motion.div>
    );
};

export default Hero;