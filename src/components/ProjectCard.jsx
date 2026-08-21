import React from "react";

const ProjectCard = ({
    title,
    description,
    image,
    tech,
    demoLink,
    githubLink,
}) => {
    return (
        <div className="bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300">

            {/* Project Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-60 object-cover"
            />

            {/* Project Content */}
            <div className="p-6">

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 leading-relaxed">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {tech?.map((item, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-sm rounded-full bg-purple/20 text-purple"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 rounded-lg bg-purple text-white hover:bg-purple/80 transition"
                    >
                        View Demo
                    </a>

                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 rounded-lg border border-purple text-purple hover:bg-purple hover:text-white transition"
                    >
                        GitHub
                    </a>

                </div>

            </div>
        </div>
    );
};

export default ProjectCard;