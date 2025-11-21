import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';
import ProfileImage from '../assets/dave.jpg';
import ScrollAnimation from './ScrollAnimation';

const HeroSection = () => {
  return (
   <div className="min-h-screen flex items-center justify-center px-4 md:px-8 md:pt-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Left side - Text content with animations */}
          <div className="flex-1 text-center lg:text-left space-y-4 md:space-y-6">
            
            {/* Introduction with scroll animation */}
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="space-y-2">
                <p className="text-xl md:text-2xl font-medium text-indigo-500 mb-2">
                  Hello, I'm
                </p>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 leading-tight">
                  <span className="bg-linear-to-r from-gray-900 to-indigo-600 bg-clip-text text-transparent">
                    Magobo Lesaomako
                  </span>
                </h1>
              </div>
            </ScrollAnimation>

            {/* Typing Animation with animation */}
            <ScrollAnimation direction="up" delay={0.4}>
              <div className="my-2 md:my-0 min-h-20 flex items-center">
                <TypingAnimation />
              </div>
            </ScrollAnimation>

            {/* CTA Buttons with animation */}
            <ScrollAnimation direction="up" delay={0.6}>
              <div className="mt-6 md:mt-4">
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                  <motion.a
                    href='https://github.com/skynet-hub' 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 md:px-8 md:py-4 bg-indigo-600 text-white font-bold rounded-xl 
                             shadow-2xl hover:bg-indigo-700 hover:shadow-3xl transition-all 
                             duration-300 border-2 border-indigo-600 text-sm md:text-base"
                  >
                    View My Work
                  </motion.a>
                  <motion.a
                    href='/Magobo_Lesaomako.pdf'
                    download="Magobo_Lesaomako_resume.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 md:px-8 md:py-4 bg-transparent text-indigo-600 font-bold rounded-xl 
                             shadow-lg hover:shadow-xl transition-all duration-300 border-2 
                             border-indigo-600 hover:bg-indigo-50 text-sm md:text-base"
                  >
                    Download CV
                  </motion.a>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right side - Profile image with animation */}
          <ScrollAnimation direction="left" delay={0.5}>
            <div className="flex-1 flex justify-center lg:justify-end mt-6 md:mt-0">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-linear-to-br from-indigo-400 to-purple-600 rounded-full shadow-2xl flex items-center justify-center overflow-hidden p-1">
                  <motion.img 
                    src={ProfileImage} 
                    alt="Magobo Lesaomako" 
                    className="w-full h-full object-cover rounded-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Floating elements */}
                <motion.div 
                  className="hidden md:block absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="hidden md:block absolute -bottom-6 -left-6 w-12 h-12 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div 
                  className="hidden md:block absolute top-1/2 -right-12 w-6 h-6 bg-red-400 rounded-full"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Scroll indicator with animation */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </div>
            <p className="text-gray-500 text-sm mt-2">Scroll to explore</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default HeroSection;