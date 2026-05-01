import React from 'react';
import productStoreImage from "../assets/Screenshot from 2025-11-30 12-11-24.png"
import chatappImage from "../assets/Screenshot from 2025-11-30 12-19-14.png"
import EcormmerceImage from "../assets/Screenshot from 2025-11-30 12-23-28.png"
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

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
      title: "Product Store",
      description: "A full-stack product store with CRUD operations built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/skynet-hub/Basic-Product-Store",
      liveUrl: "https://basic-product-store-bc4k.onrender.com/",
      image: productStoreImage
    },
    {
      id: 3,
      title: "Chat Application",
      description: "A real-time full-stack chat application built with React, Node.js, MongoDB and Socket.io for live messaging.", 
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/skynet-hub/chat-app",
      liveUrl: "https://chat-app-ydjp.onrender.com",
      image: chatappImage
    }
  ];

  return (
    <section id="projects" className="w-full px-4 md:px-8 py-8 md:py-14">
      <div className="max-w-6xl mx-auto">
        
        <ScrollAnimation direction="up">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-xs font-mono mb-4">[ 03 ] projects</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My <span className="text-indigo-400">Projects</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.id} direction="up" delay={0.2 * index}>
              <motion.div
                className="bg-white/5 border border-white/10 rounded-xl hover:border-indigo-500/40 transition-all duration-300 overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                {/* Project Image with hover overlay */}
                <div className="relative overflow-hidden h-48 bg-[#0d0d18]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  {/* Hover links overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-600/80 backdrop-blur-sm border border-indigo-500 text-white text-sm font-medium rounded-lg hover:bg-indigo-500 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live
                    </a>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation direction="up" delay={0.6}>
          <div className="text-center mt-8">
            <motion.a
              href="https://github.com/skynet-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-indigo-500/50 text-indigo-400 font-medium rounded-lg hover:bg-indigo-500/10 hover:border-indigo-400 transition-colors"
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