import React from "react";
import { motion } from "framer-motion";
import {
    FaLocationDot,
    FaEnvelope,
    FaPhone,
    FaGithub,
    FaLinkedin
} from "react-icons/fa6";

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            id="contact"
            className="py-20 bg-dark-200"
        >
            <div className="container mx-auto px-6">

                {/* Heading */}

                <h2 className="text-3xl font-bold text-center mb-4">
                    Get In
                    <span className="text-purple"> Touch</span>
                </h2>

                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    Have a project in mind or want to collaborate? Let's talk!
                </p>


                {/* Main Contact Section */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* LEFT SIDE - FORM */}

                    <div>

                        <form className="space-y-6">

                            {/* Name */}

                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-gray-300 mb-2"
                                >
                                    Your Name
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                                />
                            </div>


                            {/* Email */}

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-300 mb-2"
                                >
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                                />
                            </div>


                            {/* Message */}

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-gray-300 mb-2"
                                >
                                    Your Message
                                </label>

                                <textarea
                                    id="message"
                                    className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                                ></textarea>
                            </div>


                            {/* Send Button */}

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer"
                            >
                                Send
                            </button>

                        </form>

                    </div>


                    {/* RIGHT SIDE - CONTACT INFORMATION */}

                    <div className="flex flex-col justify-center">


                        {/* Location */}

                        <div className="flex items-start gap-4 mb-8">

                            <FaLocationDot className="text-white text-2xl mt-1" />

                            <div>

                                <h3 className="text-lg font-semibold text-white mb-2">
                                    Location
                                </h3>

                                <p className="text-gray-400">
                                    Your City, Pakistan
                                </p>

                            </div>

                        </div>


                        {/* Email */}

                        <div className="flex items-start gap-4 mb-8">

                            <FaEnvelope className="text-white text-2xl mt-1" />

                            <div>

                                <h3 className="text-lg font-semibold text-white mb-2">
                                    Email
                                </h3>

                                <p className="text-gray-400">
                                    your-email@example.com
                                </p>

                            </div>

                        </div>


                        {/* Phone */}

                        <div className="flex items-start gap-4 mb-10">

                            <FaPhone className="text-white text-2xl mt-1" />

                            <div>

                                <h3 className="text-lg font-semibold text-white mb-2">
                                    Phone
                                </h3>

                                <p className="text-gray-400">
                                    +92 300 1234567
                                </p>

                            </div>

                        </div>


                        {/* Follow Me */}

                        <div>

                            <h3 className="text-lg font-semibold text-white mb-5">
                                Follow Me
                            </h3>

                            <div className="flex gap-4">


                                {/* GitHub */}

                                <a
                                    href="https://github.com/nayab32"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center hover:bg-purple transition duration-300"
                                >
                                    <FaGithub className="text-white text-xl" />
                                </a>


                                {/* LinkedIn */}

                                <a
                                    href="https://www.linkedin.com/in/iqra-nayyab-149341243/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center hover:bg-purple transition duration-300"
                                >
                                    <FaLinkedin className="text-white text-xl" />
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