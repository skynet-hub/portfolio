import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';
import ProfileImage from '../assets/dave.jpg';
import CV from '../assets/Magobo_Lesaomako.pdf';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-24 pb-12 relative overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Breathing glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-indigo-400/40 rounded-full pointer-events-none"
          style={{ left: `${8 + i * 8}%`, top: `${20 + (i % 5) * 15}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
        />
      ))}

      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left — text */}
          <div className="flex-1 flex flex-col gap-5 text-center lg:text-left">

            {/* Greeting */}
            <motion.p
              className="text-base md:text-lg font-medium text-indigo-400 tracking-widest uppercase"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                Magobo
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-indigo-200 to-white bg-clip-text text-transparent">
                Lesaomako
              </span>
            </motion.h1>

            {/* Typing animation — same visual weight as name subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <TypingAnimation />
            </motion.div>

            {/* Short tagline */}
            <motion.p
              className="text-gray-400 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              From balance sheets to codebases — I build software that makes both technical and business sense.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <motion.a
                href="https://github.com/skynet-hub"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-7 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 border border-indigo-500 transition-all duration-300 text-sm md:text-base"
              >
                View My Work
              </motion.a>
              <motion.a
                href={CV}
                download="Magobo_Lesaomako_resume.pdf"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-7 py-3 bg-transparent text-indigo-400 font-semibold rounded-xl border border-indigo-500/50 hover:border-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 text-sm md:text-base"
              >
                Download CV
              </motion.a>
            </motion.div>
          </div>

          {/* Right — profile image */}
          <motion.div
            className="flex-shrink-0 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              {/* Image */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-full glow-ring overflow-hidden p-[3px]">
                <img
                  src={ProfileImage}
                  alt="Magobo Lesaomako"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating tech badges */}
              <motion.div
                className="hidden md:flex absolute -top-4 -right-4 bg-[#0d0d18] border border-indigo-500/40 rounded-lg px-3 py-1.5 text-xs text-indigo-300 font-mono items-center gap-1.5"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                &lt;/dev&gt;
              </motion.div>
              <motion.div
                className="hidden md:flex absolute -bottom-4 -left-4 bg-[#0d0d18] border border-purple-500/40 rounded-lg px-3 py-1.5 text-xs text-purple-300 font-mono items-center gap-1.5"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                rust &amp; c++
              </motion.div>
              <motion.div
                className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-14 bg-[#0d0d18] border border-green-500/40 rounded-lg px-3 py-1.5 text-xs text-green-300 font-mono items-center gap-1.5"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                devops
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 border border-gray-600 rounded-full flex justify-center pt-1.5">
            <motion.div
              className="w-0.5 h-2 bg-indigo-400 rounded-full"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <p className="text-gray-600 text-xs tracking-widest uppercase">Scroll</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
