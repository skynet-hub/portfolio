import React from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const AboutSection = () => {
  return (
    <section id="about" className="w-full px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-indigo-600">Me</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From numbers to code – crafting digital excellence with analytical precision
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Introduction Text */}
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  The Code Alchemist
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  I'm a <span className="text-indigo-600 font-semibold">software engineering student</span> and <span className="text-indigo-600 font-semibold">Bachelor of Accounting Science graduate from Wits</span>, currently leveling up with a <span className="text-indigo-600 font-semibold">Bachelor of Computer Science at IU</span>. 
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  My unique blend of <span className="text-indigo-600 font-semibold">financial acumen</span> and <span className="text-indigo-600 font-semibold">technical expertise</span> allows me to build applications that are not just technically sound, but also business-smart and strategically viable.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  I thrive on turning <span className="text-indigo-600 font-semibold">complex challenges</span> into elegant, scalable solutions that deliver real value. When I'm not debugging code, you'll find me exploring cutting-edge technologies or contributing to projects that push boundaries.
                </p>
              </div>
            </ScrollAnimation>

            {/* Educational Journey */}
            <ScrollAnimation direction="right" delay={0.4}>
              <div className="bg-linear-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4">🎓 My Academic Arsenal</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 shrink-0"></div>
                    <p className="text-gray-700"><span className="font-semibold">Wits University:</span> Bachelor of Accounting Science - Mastered the language of business</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 shrink-0"></div>
                    <p className="text-gray-700"><span className="font-semibold">IU University:</span> Bachelor of Computer Science - Conquering the digital realm</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 shrink-0"></div>
                    <p className="text-gray-700"><span className="font-semibold">Self-Taught Mastery:</span> 20+ projects building real-world applications</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Side - Stats & Personality */}
          <div className="space-y-8">
            {/* Unique Value Propositions */}
            <ScrollAnimation direction="left" delay={0.3}>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { 
                    icon: "🔍", 
                    title: "Analytical Mindset", 
                    desc: "Accounting background gives me razor-sharp problem-solving skills",
                    color: "from-blue-500 to-blue-600"
                  },
                  { 
                    icon: "⚡", 
                    title: "Rapid Learner", 
                    desc: "Mastered two complex fields - finance and computer science",
                    color: "from-green-500 to-green-600"
                  },
                  { 
                    icon: "🎯", 
                    title: "Business + Tech", 
                    desc: "Builds solutions that make both technical and business sense",
                    color: "from-purple-500 to-purple-600"
                  },
                  { 
                    icon: "🚀", 
                    title: "Future-Ready", 
                    desc: "Constantly evolving with the latest technologies and trends",
                    color: "from-orange-500 to-orange-600"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all group"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl shrink-0">{item.icon}</div>
                      <div>
                        <h4 className={`font-bold text-lg bg-linear-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollAnimation>

            {/* Spicy Fact */}
            <ScrollAnimation direction="left" delay={0.5}>
              <div className="text-center p-6 bg-linear-to-br from-gray-900 to-indigo-900 rounded-2xl text-white">
                <h4 className="text-xl font-bold mb-3">💡 Did You Know?</h4>
                <p className="text-indigo-200">
                  I can analyze your balance sheet in the morning and deploy your full-stack application by evening. 
                  <span className="block font-semibold text-white mt-1">That's the power of a finance-tech hybrid!</span>
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Philosophy Section */}
        <ScrollAnimation direction="up" delay={0.7}>
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                My <span className="text-indigo-600">Mantra</span>
              </h3>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-indigo-100">
                <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
                  "I bridge the gap between <span className="text-indigo-600 font-semibold">spreadsheets and codebases</span>, 
                  transforming <span className="text-indigo-600 font-semibold">financial logic into digital innovation</span>. 
                  Every application I build is not just functional – it's financially intelligent, 
                  technically robust, and strategically positioned for success."
                </p>
                <div className="mt-6 text-sm text-gray-500 font-medium">
                  #FinanceMeetsTech #CodeWithPurpose #DigitalTransformation
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Fun Tech Facts */}
        <ScrollAnimation direction="up" delay={0.9}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { stat: "1K+", label: "Cups of Coffee While Coding" },
              { stat: "∞", label: "Curiosity for New Tech" },
              { stat: "24/7", label: "Passion for Problem-Solving" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-indigo-50 to-white rounded-xl border border-indigo-100"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-indigo-600">{item.stat}</div>
                <div className="text-gray-600 text-sm mt-2">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>

      </div>
    </section>
  );
};

export default AboutSection;