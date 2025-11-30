import React from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const TechStack = () => {
  const technologies = [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
    { name: "Bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" }
  ];

  const duplicatedTech = [...technologies, ...technologies];

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
              {duplicatedTech.map((tech, index) => (
                <TechItem 
                  key={index} 
                  tech={tech} 
                  gradient="from-indigo-400 to-purple-600"
                  hoverY={-8}
                />
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
              {duplicatedTech.map((tech, index) => (
                <TechItem 
                  key={index} 
                  tech={tech} 
                  gradient="from-green-400 to-blue-600"
                  hoverY={8}
                />
              ))}
            </motion.div>

            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-linear-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 w-32 h-full bg-linear-to-l from-white to-transparent z-10" />
          </div>
        </ScrollAnimation>

        {/* Categories - Updated with all technologies */}
        <ScrollAnimation direction="up" delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Frontend",
                skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Next.js"],
                color: "from-blue-500 to-blue-600",
                icon: "💻"
              },
              {
                title: "Backend",
                skills: ["Node.js", "Python", "Java", "C#", "Express", "Flask", "MongoDB", "PostgreSQL", "SQLite"],
                color: "from-green-500 to-green-600",
                icon: "⚙️"
              },
              {
                title: "Tools",
                skills: ["Git", "Docker", "Bash"],
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

// Separate component for tech items to handle image loading state properly
const TechItem = ({ tech, gradient, hoverY }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <motion.div
      className="shrink-0 flex flex-col items-center justify-center w-24 h-24 bg-white rounded-2xl shadow-lg border border-gray-200 p-4"
      whileHover={{ 
        scale: 1.15,
        y: hoverY,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-12 h-12 mb-2 flex items-center justify-center">
        {!imgError ? (
          <img 
            src={tech.logo} 
            alt={tech.name}
            className="w-full h-full object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-linear-to-br ${gradient} rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
            {tech.name.slice(0, 2)}
          </div>
        )}
      </div>
      <span className="text-xs font-medium text-gray-600 text-center">
        {tech.name}
      </span>
    </motion.div>
  );
};

export default TechStack;