import React from "react";

const ProjectCard = ({
    title,
    description,
    image,
    tech,
    demoLink,
    githubLink,
    darkMode
}) => {

    return (
        <div
            className={`
                w-full
                h-full
                min-h-[300px]
                rounded-xl
                overflow-hidden
                flex
                flex-col
                hover:-translate-y-2
                transition
                duration-300
                ${
                    darkMode
                        ? "bg-[#1e1915]"
                        : "bg-[#f3eee7]"
                }
            `}
        >

            {/* PROJECT IMAGE */}

            <img
                src={image}
                alt={title}
                className="w-full h-32 object-cover"
            />


            {/* PROJECT CONTENT */}

            <div className="p-4 flex flex-col flex-1">

                {/* TITLE */}

                <h3
                    className={`
                        text-base
                        font-bold
                        mb-2
                        ${
                            darkMode
                                ? "text-white"
                                : "text-[#161310]"
                        }
                    `}
                >
                    {title}
                </h3>


                {/* DESCRIPTION */}

                <p
                    className={`
                        text-xs
                        mb-3
                        leading-5
                        ${
                            darkMode
                                ? "text-[#a89a85]"
                                : "text-[#75695d]"
                        }
                    `}
                >
                    {description}
                </p>


                {/* TECHNOLOGIES */}

                <div className="flex flex-wrap gap-1 mb-4">

                    {tech?.map((item, index) => (

                        <span
                            key={index}
                            className="
                                px-2
                                py-1
                                text-[10px]
                                rounded-full
                                bg-[#f0a83a]/20
                                text-[#f0a83a]
                            "
                        >
                            {item}
                        </span>

                    ))}

                </div>


                {/* BUTTONS */}

                <div className="flex gap-2 mt-auto">

                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            flex-1
                            text-center
                            px-2
                            py-2
                            rounded-md
                            bg-[#f0a83a]
                            text-[#161310]
                            text-xs
                            font-semibold
                            hover:bg-[#d99527]
                            transition
                        "
                    >
                        View Demo
                    </a>


                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            flex-1
                            text-center
                            px-2
                            py-2
                            rounded-md
                            border
                            border-[#e8654a]
                            text-[#e8654a]
                            text-xs
                            hover:bg-[#e8654a]
                            hover:text-white
                            transition
                        "
                    >
                        GitHub
                    </a>

                </div>

            </div>

        </div>
    );
};

export default ProjectCard;