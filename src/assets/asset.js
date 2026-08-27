import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaGithub
} from "react-icons/fa";


// ==================== PROJECTS ====================

export const Projects = [
    {
        title: "Cosmetic Products",
        description: "A cosmetic products website.",
        image: "/src/assets/cosmetic.png.png",
        tech: ["HTML", "CSS", "JavaScript"],

        demoLink: "http://127.0.0.1:5500/index.html",
        githubLink: "https://github.com/nayab32/cosmetic-project",
    },

    {
        title: "Pet Care Clinic",
        description: "A website for a pet care clinic.",
        image: "/src/assets/pet clinic.png.png",
        tech: ["HTML", "CSS", "JavaScript"],

        demoLink: "http://127.0.0.1:5500/",
        githubLink: "https://github.com/nayab32/pet-clinic",
    },

    {
        title: "Currency Converter",
        description: "A currency converter using API.",
        image: "/src/assets/currency convertor.png.png",
        tech: ["HTML", "CSS", "JavaScript", "API"],

        demoLink: "http://127.0.0.1:5500/index.html",
        githubLink: "https://github.com/nayab32/currency-convertor",
    },

    {
        title: "Learn Coding",
        description: "A website for learning coding and programming.",
        image: "/src/assets/learncoding.png.png",
        tech: ["HTML", "CSS", "JavaScript"],

        demoLink: "http://127.0.0.1:5500/#about",
        githubLink: "https://github.com/nayab32/Bootstrap",
    },
];


// ==================== SKILLS ====================

export const skills = [
    {
        icon: FaHtml5,
        title: "HTML",
        description:
            "Building the structure of modern and responsive websites.",
        technologies: ["HTML5", "Semantic HTML"]
    },

    {
        icon: FaCss3Alt,
        title: "CSS",
        description:
            "Creating attractive and responsive website designs.",
        technologies: ["CSS", "Responsive Design"]
    },

    {
        icon: FaJs,
        title: "JavaScript",
        description:
            "Adding interactive and dynamic functionality to websites.",
        technologies: ["JavaScript", "ES6+"]
    },

    {
        icon: FaReact,
        title: "React",
        description:
            "Building modern and reusable user interfaces.",
        technologies: ["React", "JSX"]
    },

    {
        icon: FaGitAlt,
        title: "Git",
        description:
            "Managing and tracking changes in projects.",
        technologies: ["Git", "Version Control"]
    },

    {
        icon: FaGithub,
        title: "GitHub",
        description:
            "Hosting and collaborating on software projects.",
        technologies: ["GitHub", "Repositories"]
    }
];


// ==================== EXPERIENCE ====================

export const workData = [
    {
        title: "Frontend Developer",
        company: "Personal Projects",
        duration: "2025 - Present",
        description:
            "Developing responsive and interactive websites using modern frontend technologies.",
        technologies: ["HTML", "CSS", "JavaScript", "React"]
    },

    {
        title: "Web Development",
        company: "Portfolio Projects",
        duration: "2025 - Present",
        description:
            "Created different web projects including cosmetic products, pet care clinic, currency converter, and learning websites.",
        technologies: ["HTML", "CSS", "JavaScript", "API"]
    },

    {
        title: "React Developer",
        company: "Portfolio Development",
        duration: "2026",
        description:
            "Building reusable React components and modern user interfaces with Tailwind CSS and Framer Motion.",
        technologies: ["React", "Tailwind CSS", "Framer Motion"]
    }
];