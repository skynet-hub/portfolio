import React from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const TechStack = () => {
  const technologies = [
    { name: "JavaScript", logo: "/tech-logos/javascript.svg" },
    { name: "React", logo: "/tech-logos/react.svg" },
    { name: "Node.js", logo: "/tech-logos/nodejs.svg" },
    { name: "Python", logo: "/tech-logos/python.svg" },
    { name: "MongoDB", logo: "/tech-logos/mongodb.svg" },
    { name: "Express", logo: "/tech-logos/express.svg" },
    { name: "Firebase", logo: "/tech-logos/firebase.svg" },
    { name: "Tailwind CSS", logo: "/tech-logos/tailwind.svg" },
    { name: "Git", logo: "/tech-logos/git.svg" },
    { name: "HTML5", logo: "/tech-logos/html5.svg" },
    { name: "CSS3", logo: "/tech-logos/css3.svg" },
    { name: "TypeScript", logo: "/tech-logos/typescript.svg" },
    { name: "Next.js", logo: "/tech-logos/nextjs.svg" },
    { name: "PostgreSQL", logo: "/tech-logos/postgresql.svg" },
    { name: "Docker", logo: "/tech-logos/docker.svg" }
   ];

  // For demo purposes, using emojis as placeholders - replace with actual image paths
  const techWithPlaceholders = technologies.map(tech => ({
    ...tech,
    logo: tech.logo // Replace with your actual image paths
  }));

  return (
    <section id="tech-stack" className="w-full px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Tech <span className="text-indigo-600">Stack</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
        </ScrollAnimation>

        {/* Floating Tech Stack Container */}
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="relative overflow-hidden py-8">
            
            {/* Top Row - Moving Right */}
            <motion.div
              className="flex gap-8 mb-8"
              animate={{ x: [0, -1800] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...techWithPlaceholders, ...techWithPlaceholders].map((tech, index) => (
                <motion.div
                  key={index}
                  className="shrink-0 flex flex-col items-center justify-center w-24 h-24 bg-white rounded-2xl shadow-lg border border-gray-200 p-4"
                  whileHover={{ 
                    scale: 1.15,
                    y: -8,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image/Logo */}
                  <div className="w-12 h-12 mb-2 flex items-center justify-center text-2xl">
                    {/* Replace this div with actual img tag when you have logos */}
                    <div className="w-full h-full bg-linear-to-br from-indigo-400 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                      {tech.name.slice(0, 2)}
                    </div>
                    {/* Uncomment when you have actual images: */}
                    {/* <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    /> */}
                   
                  </div>
                  <span className="text-xs font-medium text-gray-600 text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Row - Moving Left */}
            <motion.div
              className="flex gap-8"
              animate={{ x: [-1800, 0] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
            >
              {[...techWithPlaceholders.reverse(), ...techWithPlaceholders.reverse()].map((tech, index) => (
                <motion.div
                  key={index}
                  className="shrink-0 flex flex-col items-center justify-center w-24 h-24 bg-white rounded-2xl shadow-lg border border-gray-200 p-4"
                  whileHover={{ 
                    scale: 1.15,
                    y: 8,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image/Logo */}
                  <div className="w-12 h-12 mb-2 flex items-center justify-center text-2xl">
                    {/* Replace this div with actual img tag when you have logos */}
                    <div className="w-full h-full bg-linear-to-br from-green-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                      {tech.name.slice(0, 2)}
                    </div>
                    {/* Uncomment when you have actual images:
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                    */}
                  </div>
                  <span className="text-xs font-medium text-gray-600 text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-linear-to-r from-gray-100 to-transparent z-10" />
            <div className="absolute right-0 top-0 w-32 h-full bg-linear-to-l from-gray-100 to-transparent z-10" />
          </div>
        </ScrollAnimation>

        {/* Categories */}
        <ScrollAnimation direction="up" delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Frontend",
                skills: ["React", "JavaScript", "TypeScript", 
                    "Tailwind CSS", "HTML5", "CSS3", "Next.js", "bootstrap"],
                color: "from-blue-500 to-blue-600",
                icon: "💻"
              },
              {
                title: "Backend",
                skills: ["Node.js", "Python", "java", "C#","Express", "MongoDB",
                     "PostgreSQL", "SQLite3", "fastApi", "Flask"],
                color: "from-green-500 to-green-600",
                icon: "⚙️"
              },
              {
                title: "Tools",
                skills: ["Git", "Docker", "VS Code", "Conva", "Postman", "Linux Admin",
                     "gitlab CI/CD", "bash"],
                color: "from-purple-500 to-purple-600",
                icon: "🛠️"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className={`text-xl font-bold bg-linear-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>

      </div>
    </section>
  );
};

export default TechStack;