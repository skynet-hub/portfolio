import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const traits = [
  {
    icon: '🔍',
    title: 'Analytical Mindset',
    desc: 'Accounting background gives me razor-sharp problem-solving skills',
    color: 'from-blue-500 to-indigo-500',
    border: 'hover:border-blue-500/40',
  },
  {
    icon: '⚡',
    title: 'Rapid Learner',
    desc: 'Picked up finance, CS, systems programming and DevOps in parallel',
    color: 'from-green-500 to-emerald-500',
    border: 'hover:border-green-500/40',
  },
  {
    icon: '🎯',
    title: 'Business + Tech',
    desc: 'Builds solutions that make technical and business sense',
    color: 'from-purple-500 to-violet-500',
    border: 'hover:border-purple-500/40',
  },
  {
    icon: '🚀',
    title: 'Future-Ready',
    desc: 'Exploring game dev, systems programming and cloud infrastructure',
    color: 'from-orange-500 to-rose-500',
    border: 'hover:border-orange-500/40',
  },
];

const timeline = [
  {
    year: '2016',
    title: 'BSc Actuarial Science',
    place: 'University of Pretoria · 6 months',
    active: false,
  },
  {
    year: '2017 – 2020',
    title: 'BAccSci',
    place: 'University of the Witwatersrand',
    active: false,
  },
  {
    year: '2024 – 2025',
    title: 'WeThinkCode_',
    place: 'Software Engineering Programme',
    active: false,
  },
  {
    year: 'Ongoing',
    title: 'Self-Taught Engineering',
    place: '20+ projects · DevOps · Game Dev',
    active: true,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="w-full px-6 md:px-12 py-8 md:py-14 relative">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-xs font-mono mb-4">
              [ 01 ] about
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              About <span className="text-indigo-400">Me</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Finance graduate turned software engineer — I bring analytical precision to every line of code I write.
              Currently exploring <span className="text-indigo-400 font-medium">systems programming</span>, DevOps and game development while building full-stack applications.
            </p>
          </div>
        </ScrollAnimation>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 lg:divide-x lg:divide-white/5">

          {/* Left — Education timeline */}
          <ScrollAnimation direction="right" delay={0.2}>
            <div className="lg:pr-8">
              <p className="text-xs font-mono text-indigo-400 tracking-widest uppercase mb-6">Education</p>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-indigo-500/20 to-transparent" />

                <div className="space-y-8">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-6 pl-10 relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.5 }}
                    >
                      {/* Dot */}
                      <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        item.active
                          ? 'border-indigo-500 bg-indigo-500/20'
                          : 'border-white/20 bg-white/5'
                      }`}>
                        {item.active && (
                          <motion.div
                            className="w-2 h-2 bg-indigo-400 rounded-full"
                            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </div>

                      <div>
                        <span className="text-xs font-mono text-indigo-400/70">{item.year}</span>
                        <h4 className="text-white font-semibold mt-0.5">{item.title}</h4>
                        <p className="text-gray-500 text-sm mt-0.5">{item.place}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right — 2x2 trait grid */}
          <ScrollAnimation direction="left" delay={0.3}>
            <div className="lg:pl-8">
              <p className="text-xs font-mono text-indigo-400 tracking-widest uppercase mb-6">What I bring</p>
              <div className="grid grid-cols-2 gap-4">
                {traits.map((item, i) => (
                  <motion.div
                    key={i}
                    className={`p-4 bg-white/5 border border-white/10 rounded-xl ${item.border} transition-all duration-300 cursor-default`}
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="text-xl mb-3">{item.icon}</div>
                    <h4 className={`text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Bottom — single standout line */}
        <ScrollAnimation direction="up" delay={0.4}>
          <div className="mt-12 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-gray-500 text-sm italic text-center px-4">
              "Finance meets code — building things that are both technically sound and business-smart."
            </p>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </ScrollAnimation>

      </div>
    </section>
  );
};

export default AboutSection;
