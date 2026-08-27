import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {

    // Dark mode by default
    const [darkMode, setDarkMode] = useState(true);

    // Load saved theme
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "light") {
            setDarkMode(false);
        } else {
            setDarkMode(true);
        }
    }, []);

    // Change theme
    const toggleTheme = () => {
        setDarkMode((previousMode) => {

            const newMode = !previousMode;

            if (newMode) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }

            return newMode;
        });
    };

    return (
        <div
            className={
                darkMode
                    ? "bg-[#161310] text-white min-h-screen"
                    : "bg-[#ffffff] text-[#161310] min-h-screen"
            }
        >

            <Navbar
                darkMode={darkMode}
                toggleTheme={toggleTheme}
            />

            <Routes>

                <Route
                    path="/"
                    element={
                        <Home darkMode={darkMode} />
                    }
                />

            </Routes>

        </div>
    );
};

export default App;