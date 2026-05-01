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
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Rust", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" },
    { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "Bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
    { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  ];

  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section id="tech-stack" className="w-full px-4 md:px-8 py-8 md:py-14">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-xs font-mono mb-4">[ 02 ] tech stack</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Tech <span className="text-indigo-400">Stack</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
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
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />
          </div>
        </ScrollAnimation>

        {/* Categories - Updated with all technologies */}
        <ScrollAnimation direction="up" delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              {
                title: "Frontend",
                skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Next.js"],
                color: "from-blue-500 to-blue-600",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              },
              {
                title: "Backend & Systems",
                skills: ["Node.js", "Python", "Java", "C#", "C++", "Rust", "Express", "Flask", "MongoDB", "PostgreSQL", "SQLite"],
                color: "from-green-500 to-green-600",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/><path d="M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6"/></svg>
              },
              {
                title: "DevOps & Tools",
                skills: ["Docker", "Git", "Bash", "Linux", "CI/CD"],
                color: "from-purple-500 to-purple-600",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-indigo-500/40 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10 text-white`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm font-medium border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Currently Exploring */}
        <ScrollAnimation direction="up" delay={0.6}>
          <div className="mt-10">
            <h3 className="text-center text-lg font-semibold text-gray-400 mb-6">🚀 Currently Exploring</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Game Development", sub: "React + Unreal Engine / C++", color: "from-orange-500/20 to-red-500/20", border: "border-orange-500/30", text: "text-orange-300" },
                { label: "Systems Programming", sub: "Rust & low-level C++", color: "from-yellow-500/20 to-orange-500/20", border: "border-yellow-500/30", text: "text-yellow-300" },
                { label: "DevOps Engineering", sub: "CI/CD, Docker, Cloud infra", color: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-500/30", text: "text-cyan-300" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`bg-gradient-to-br ${item.color} border ${item.border} rounded-xl p-4 text-center`}
                  whileHover={{ scale: 1.03, y: -3 }}
                >
                  <div className={`font-bold ${item.text} mb-1`}>{item.label}</div>
                  <div className="text-gray-400 text-sm">{item.sub}</div>
                  <div className="mt-2 inline-block px-2 py-0.5 bg-white/10 rounded-full text-xs text-gray-400">In Progress</div>
                </motion.div>
              ))}
            </div>
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
      className="shrink-0 flex flex-col items-center justify-center w-24 h-24 bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-indigo-500/40"
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
      <span className="text-xs font-medium text-gray-400 text-center">
        {tech.name}
      </span>
    </motion.div>
  );
};

export default TechStack;