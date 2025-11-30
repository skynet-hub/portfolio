import React from 'react';
import productStoreImage from "../assets/Screenshot from 2025-11-30 12-11-24.png"
import chatappImage from "../assets/Screenshot from 2025-11-30 12-19-14.png"
import EcormmerceImage from "../assets/Screenshot from 2025-11-30 12-23-28.png"
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';
import { image } from 'framer-motion/client';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/skynet-hub/ecommerce-platform",
      liveUrl: "https://yourapp.com",
      image: EcormmerceImage
    },
    {
      id: 2,
      title: "Basic Product Store",
      description: "A full-stack product store built with React, Nodejs, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/skynet-hub/Basic-Product-Store",
      liveUrl: "https://basic-product-store-bc4k.onrender.com/",
      image: productStoreImage
    },
    {
      id: 3,
      title: "basic chat-application",
      description: "A full-stack chat application built with React, Nodejs, and MongoDB and socket.io", 
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/skynet-hub/chat-app",
      liveUrl: "https://chat-app.com",
      image: chatappImage
    }
  ];

  return (
    <section id="projects" className="w-full px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        
        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My <span className="text-indigo-600">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.id} direction="up" delay={0.2 * index}>
              <motion.div
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                {/* Project Image Placeholder with Scale Effect */}
                <div className="relative overflow-hidden">
                  <motion.div 
                    className="w-full h-48 bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center">
                       <img src={project.image} alt="Image of productStore"/>
                    </div>
                  </motion.div>
                  {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                   */}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gray-900 text-white text-center rounded-lg font-medium hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Code
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-indigo-600 text-white text-center rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation direction="up" delay={0.6}>
          <div className="text-center mt-12">
            <motion.a
              href="https://github.com/skynet-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              View More on GitHub
            </motion.a>
          </div>
        </ScrollAnimation>

      </div>
    </section>
  );
};

export default ProjectsSection;