import React, { useState } from "react";
import { FaBars, FaXmark, FaMoon, FaSun } from "react-icons/fa6";

const Navbar = ({ darkMode, toggleTheme }) => {

    const [showMenu, setShowMenu] = useState(false);

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <nav
            className={`
                fixed
                top-0
                left-0
                w-full
                z-50
                backdrop-blur-sm
                py-4
                px-8
                shadow-lg
                transition-colors
                duration-300

                ${
                    darkMode
                        ? "bg-[#0f0d0b]/90"
                        : "bg-white/90"
                }
            `}
        >

            <div className="container mx-auto flex items-center justify-between">

                {/* LOGO */}

                <a
                    href="#home"
                    onClick={closeMenu}
                    className="text-3xl font-bold"
                >

                    <span
                        className={
                            darkMode
                                ? "text-white"
                                : "text-[#161310]"
                        }
                    >
                        Iqra
                    </span>

                    <span className="text-[#f0a83a]">
                        Nayab
                    </span>

                    <div className="w-6 h-6 bg-[#f0a83a] rounded-full mt-2"></div>

                </a>


                {/* DESKTOP MENU */}

                <div className="hidden md:flex items-center gap-8">

                    <a
                        href="#home"
                        className={`
                            transition
                            ${
                                darkMode
                                    ? "text-[#c9beb2] hover:text-[#f0a83a]"
                                    : "text-[#75695d] hover:text-[#f0a83a]"
                            }
                        `}
                    >
                        Home
                    </a>


                    <a
                        href="#about"
                        className={`
                            transition
                            ${
                                darkMode
                                    ? "text-[#c9beb2] hover:text-[#f0a83a]"
                                    : "text-[#75695d] hover:text-[#f0a83a]"
                            }
                        `}
                    >
                        About
                    </a>


                    <a
                        href="#skills"
                        className={`
                            transition
                            ${
                                darkMode
                                    ? "text-[#c9beb2] hover:text-[#f0a83a]"
                                    : "text-[#75695d] hover:text-[#f0a83a]"
                            }
                        `}
                    >
                        Skills
                    </a>


                    <a
                        href="#projects"
                        className={`
                            transition
                            ${
                                darkMode
                                    ? "text-[#c9beb2] hover:text-[#f0a83a]"
                                    : "text-[#75695d] hover:text-[#f0a83a]"
                            }
                        `}
                    >
                        Project
                    </a>


                    <a
                        href="#experience"
                        className={`
                            transition
                            ${
                                darkMode
                                    ? "text-[#c9beb2] hover:text-[#f0a83a]"
                                    : "text-[#75695d] hover:text-[#f0a83a]"
                            }
                        `}
                    >
                        Experience
                    </a>


                    <a
                        href="#contact"
                        className={`
                            transition
                            ${
                                darkMode
                                    ? "text-[#c9beb2] hover:text-[#f0a83a]"
                                    : "text-[#75695d] hover:text-[#f0a83a]"
                            }
                        `}
                    >
                        Contact
                    </a>


                    {/* THEME BUTTON */}

                    <button
                        onClick={toggleTheme}
                        className="
                            w-10
                            h-10
                            rounded-full
                            flex
                            items-center
                            justify-center
                            bg-[#f0a83a]
                            text-[#161310]
                            hover:scale-110
                            transition
                            duration-300
                            cursor-pointer
                        "
                        aria-label="Toggle dark and light mode"
                    >

                        {darkMode ? (
                            <FaMoon className="text-lg" />
                        ) : (
                            <FaSun className="text-lg" />
                        )}

                    </button>

                </div>


                {/* MOBILE BUTTONS */}

                <div className="flex items-center gap-3 md:hidden">

                    {/* THEME BUTTON */}

                    <button
                        onClick={toggleTheme}
                        className="
                            w-9
                            h-9
                            rounded-full
                            flex
                            items-center
                            justify-center
                            bg-[#f0a83a]
                            text-[#161310]
                            cursor-pointer
                        "
                        aria-label="Toggle dark and light mode"
                    >

                        {darkMode ? (
                            <FaMoon />
                        ) : (
                            <FaSun />
                        )}

                    </button>


                    {/* MENU BUTTON */}

                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className={`
                            text-2xl
                            ${
                                darkMode
                                    ? "text-white"
                                    : "text-[#161310]"
                            }
                        `}
                    >

                        {showMenu ? (
                            <FaXmark />
                        ) : (
                            <FaBars />
                        )}

                    </button>

                </div>

            </div>


            {/* MOBILE MENU */}

            {showMenu && (

                <div
                    className={`
                        md:hidden
                        flex
                        flex-col
                        gap-4
                        mt-4
                        px-4
                        pb-4
                        ${
                            darkMode
                                ? "bg-[#0f0d0b]"
                                : "bg-white"
                        }
                    `}
                >

                    <a
                        href="#home"
                        onClick={closeMenu}
                        className={
                            darkMode
                                ? "text-[#c9beb2]"
                                : "text-[#75695d]"
                        }
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        onClick={closeMenu}
                        className={
                            darkMode
                                ? "text-[#c9beb2]"
                                : "text-[#75695d]"
                        }
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        onClick={closeMenu}
                        className={
                            darkMode
                                ? "text-[#c9beb2]"
                                : "text-[#75695d]"
                        }
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        onClick={closeMenu}
                        className={
                            darkMode
                                ? "text-[#c9beb2]"
                                : "text-[#75695d]"
                        }
                    >
                        Project
                    </a>

                    <a
                        href="#experience"
                        onClick={closeMenu}
                        className={
                            darkMode
                                ? "text-[#c9beb2]"
                                : "text-[#75695d]"
                        }
                    >
                        Experience
                    </a>

                    <a
                        href="#contact"
                        onClick={closeMenu}
                        className={
                            darkMode
                                ? "text-[#c9beb2]"
                                : "text-[#75695d]"
                        }
                    >
                        Contact
                    </a>

                </div>

            )}

        </nav>
    );
};

export default Navbar;