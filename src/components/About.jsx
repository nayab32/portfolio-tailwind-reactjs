import React from "react";
import {motion} from "framer-motion";
import profileImg from "../assets/profile-png.jpeg";
import { FaCode, FaReact, FaJs, FaCss3Alt } from "react-icons/fa";


const aboutInfo = [
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "I enjoy creating modern, responsive, and user-friendly websites. I focus on writing clean code and building websites that work smoothly on different screen sizes.",
  },
  {
    icon: FaReact,
    title: "React Development",
    description:
      "I use React to build interactive and reusable user interfaces. I’m learning how to create dynamic components and organize applications in a clean and efficient way.",
  },
  {
    icon: FaJs,
    title: "JavaScript",
    description:
      "I use JavaScript to add functionality and interactivity to websites. I’m continuously improving my understanding of JavaScript through practice and real-world projects.",
  },
  {
    icon: FaCss3Alt,
    title: "CSS",
    description:
      "I use CSS to create attractive, responsive, and well-structured designs. I enjoy working with layouts, animations, colors, and modern styling techniques.",
  },
];
const About = () => {
return(
    <motion.div 
    
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.6, ease:'easeOut'}}
              viewport={{once:true}}  
              id="about"
              className="py-20 bg-dark-200"
              >
              <div className="container mx-0 px-6">
              {/* Heading*/}
              <h2 className="text-3xl font-bold text-center mb-4">About
              <span className="text-purple">Me</span>
              </h2>
              <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">I’m a passionate web developer
                 who loves creating modern, responsive, 
                 and user-friendly websites.</p>
                       
              {/* image+journey*/}
              <div className="flex flex-col md:flex-row item-center gap-12">
                            
              {/* image*/}
             <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-[500px] h-[500px] rounded-2xl object-cover"
            src={profileImg}
             alt="Profile"
            />


              </div>
              {/*text content*/}
              <motion.div 
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1,y:0}}
             transition={{duration:0.9, ease:'easeOut'}}
             viewport={{once:false, amount:0.2}} 
             className="md:w-1/2">
            <div className="rounded-2xl p-8">
             <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-gray-300 mb-6">My web development journey started with curiosity and a desire
              to learn new skills. I began exploring HTML, CSS, JavaScript,
              React, and Tailwind CSS, learning step by step through practice
              and projects.</p>

            <p className="text-gray-300 mb-12">The journey has not always been easy, but every challenge has helped
             me improve. I’m still learning, building projects, and working toward 
             becoming a confident and skilled web developer.</p>

            {/* cards*/}
           {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
            aboutInfo.map((data, index)=>(
           <div key={index} className="bg-dark-300 rounded-2xl p-6 transition-transform
            duration-300 hover:-translate-y-2 cursor-pointer">
           <div className="text-purple text-4xl mb-4">
         <data.icon/>  
         </div>
        <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
        <p className="text-gray-400">{data.description}</p>
        </div>
                ))
                    }

       </div> */}

        </div>
        </motion.div>
        </div>

        </div>
       
      
    </motion.div>
)
}
export default About;