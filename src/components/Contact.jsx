import React from "react";
import { motion } from "framer-motion";
import {
    FaLocationDot,
    FaEnvelope,
    FaPhone,
    FaGithub,
    FaLinkedin
} from "react-icons/fa6";

const Contact = ({ darkMode }) => {
    return (
        <motion.div
            id="contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className={`
                w-full
                min-h-screen
                pt-10
                pb-6
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

            <div className="container mx-auto px-4">

                {/* Heading */}

                <h2
                    className={`
                        text-xl
                        md:text-2xl
                        font-bold
                        text-center
                        mb-2
                        ${
                            darkMode
                                ? "text-white"
                                : "text-[#161310]"
                        }
                    `}
                >
                    Get In
                    <span className="text-[#f0a83a]">
                        {" "}Touch
                    </span>
                </h2>

                <p
                    className={`
                        text-center
                        max-w-md
                        mx-auto
                        mb-7
                        text-xs
                        ${
                            darkMode
                                ? "text-[#a89a85]"
                                : "text-[#75695d]"
                        }
                    `}
                >
                    Have a project in mind or want to collaborate? Let's talk!
                </p>


                {/* Main Contact Section */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">

                    {/* LEFT SIDE - FORM */}

                    <div>

                        <form className="space-y-3">

                            {/* Name */}

                            <div>

                                <label
                                    htmlFor="name"
                                    className={`
                                        block
                                        mb-1
                                        text-xs
                                        ${
                                            darkMode
                                                ? "text-[#c9beb2]"
                                                : "text-[#75695d]"
                                        }
                                    `}
                                >
                                    Your Name
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    className={`
                                        w-full
                                        rounded-md
                                        px-3
                                        py-2
                                        text-sm
                                        outline-none
                                        border
                                        ${
                                            darkMode
                                                ? "bg-[#1e1915] border-[#2b241d] text-white"
                                                : "bg-white border-[#ddd3c5] text-[#161310]"
                                        }
                                    `}
                                />

                            </div>


                            {/* Email */}

                            <div>

                                <label
                                    htmlFor="email"
                                    className={`
                                        block
                                        mb-1
                                        text-xs
                                        ${
                                            darkMode
                                                ? "text-[#c9beb2]"
                                                : "text-[#75695d]"
                                        }
                                    `}
                                >
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    className={`
                                        w-full
                                        rounded-md
                                        px-3
                                        py-2
                                        text-sm
                                        outline-none
                                        border
                                        ${
                                            darkMode
                                                ? "bg-[#1e1915] border-[#2b241d] text-white"
                                                : "bg-white border-[#ddd3c5] text-[#161310]"
                                        }
                                    `}
                                />

                            </div>


                            {/* Message */}

                            <div>

                                <label
                                    htmlFor="message"
                                    className={`
                                        block
                                        mb-1
                                        text-xs
                                        ${
                                            darkMode
                                                ? "text-[#c9beb2]"
                                                : "text-[#75695d]"
                                        }
                                    `}
                                >
                                    Your Message
                                </label>

                                <textarea
                                    id="message"
                                    className={`
                                        w-full
                                        h-24
                                        rounded-md
                                        px-3
                                        py-2
                                        text-sm
                                        outline-none
                                        resize-none
                                        border
                                        ${
                                            darkMode
                                                ? "bg-[#1e1915] border-[#2b241d] text-white"
                                                : "bg-white border-[#ddd3c5] text-[#161310]"
                                        }
                                    `}
                                ></textarea>

                            </div>


                            {/* Send Button */}

                            <button
                                type="submit"
                                className="
                                    w-full
                                    px-4
                                    py-2
                                    bg-[#f0a83a]
                                    text-[#161310]
                                    rounded-md
                                    text-sm
                                    font-semibold
                                    hover:bg-[#d99527]
                                    transition
                                    duration-300
                                    cursor-pointer
                                "
                            >
                                Send
                            </button>

                        </form>

                    </div>


                    {/* RIGHT SIDE - CONTACT INFORMATION */}

                    <div className="flex flex-col justify-center pl-4 lg:pl-8">

                        {/* Location */}

                        <div className="flex items-start gap-3 mb-6">

                            <FaLocationDot className="text-[#f0a83a] text-lg mt-1" />

                            <div>

                                <h3
                                    className={`
                                        text-sm
                                        font-semibold
                                        mb-1
                                        ${
                                            darkMode
                                                ? "text-white"
                                                : "text-[#161310]"
                                        }
                                    `}
                                >
                                    Location
                                </h3>

                                <p
                                    className={`
                                        text-xs
                                        ${
                                            darkMode
                                                ? "text-[#a89a85]"
                                                : "text-[#75695d]"
                                        }
                                    `}
                                >
                                    Peshawar, Pakistan
                                </p>

                            </div>

                        </div>


                        {/* Email */}

                        <div className="flex items-start gap-3 mb-6">

                            <FaEnvelope className="text-[#f0a83a] text-lg mt-1" />

                            <div>

                                <h3
                                    className={`
                                        text-sm
                                        font-semibold
                                        mb-1
                                        ${
                                            darkMode
                                                ? "text-white"
                                                : "text-[#161310]"
                                        }
                                    `}
                                >
                                    Email
                                </h3>

                                <p
                                    className={`
                                        text-xs
                                        ${
                                            darkMode
                                                ? "text-[#a89a85]"
                                                : "text-[#75695d]"
                                        }
                                    `}
                                >
                                    nayabiqra32@gmail.com
                                </p>

                            </div>

                        </div>


                        {/* Phone */}

                        <div className="flex items-start gap-3 mb-6">

                            <FaPhone className="text-[#f0a83a] text-lg mt-1" />

                            <div>

                                <h3
                                    className={`
                                        text-sm
                                        font-semibold
                                        mb-1
                                        ${
                                            darkMode
                                                ? "text-white"
                                                : "text-[#161310]"
                                        }
                                    `}
                                >
                                    Phone
                                </h3>

                                <p
                                    className={`
                                        text-xs
                                        ${
                                            darkMode
                                                ? "text-[#a89a85]"
                                                : "text-[#75695d]"
                                        }
                                    `}
                                >
                                    +92 300 1234567
                                </p>

                            </div>

                        </div>


                        {/* Follow Me */}

                        <div>

                            <h3
                                className={`
                                    text-sm
                                    font-semibold
                                    mb-3
                                    ${
                                        darkMode
                                            ? "text-white"
                                            : "text-[#161310]"
                                    }
                                `}
                            >
                                Follow Me
                            </h3>

                            <div className="flex gap-3">

                                {/* GitHub */}

                                <a
                                    href="https://github.com/nayab32"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        w-9
                                        h-9
                                        rounded-full
                                        bg-[#1e1915]
                                        flex
                                        items-center
                                        justify-center
                                        hover:bg-[#f0a83a]
                                        transition
                                        duration-300
                                    "
                                >
                                    <FaGithub className="text-white text-base" />
                                </a>


                                {/* LinkedIn */}

                                <a
                                    href="https://www.linkedin.com/in/iqra-nayyab-149341243/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        w-9
                                        h-9
                                        rounded-full
                                        bg-[#1e1915]
                                        flex
                                        items-center
                                        justify-center
                                        hover:bg-[#f0a83a]
                                        transition
                                        duration-300
                                    "
                                >
                                    <FaLinkedin className="text-white text-base" />
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </motion.div>
    );
};

export default Contact;