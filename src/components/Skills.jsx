import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/asset.js";

const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            id="skills"
            className="py-20 bg-dark-100"
        >
            <div className="container mx-auto px-6">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-4">
                    My <span className="text-purple">Skills</span>
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    Technologies I work with to bring ideas to life
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

                    {skills.map((skill, index) => {
                        const Icon = skill.icon;

                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="bg-dark-300 rounded-2xl p-6
                                cursor-pointer"
                            >

                                {/* Icon + Title */}
                                <div className="flex items-center gap-4 mb-4">

                                    <Icon className="text-purple text-5xl" />

                                    <h3 className="text-xl font-semibold text-white">
                                        {skill.title}
                                    </h3>

                                </div>

                                {/* Small Paragraph */}
                                <p className="text-gray-400 mb-4">
                                    {skill.description}
                                </p>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </motion.div>
    );
};

export default Skills;