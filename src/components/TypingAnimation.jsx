import { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [displayText, setDisplayText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    "Full Stack Engineer",
    "DevOps Enthusiast",
    "Systems Programmer",
    "Game Dev Explorer",
  ];

  useEffect(() => {
    const currentText = texts[lineIndex];
    if (charIndex <= currentText.length) {
      const t = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex));
        setCharIndex(c => c + 1);
      }, 80);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIndex(l => (l + 1) % texts.length);
        setCharIndex(0);
      }, 2200);
      return () => clearTimeout(t);
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="flex items-center gap-1 justify-center lg:justify-start">
      <span className="text-xl md:text-2xl font-semibold text-gray-300">
        {displayText}
      </span>
      <span className="inline-block w-0.5 h-6 md:h-7 bg-indigo-400 animate-pulse rounded-full" />
    </div>
  );
};

export default TypingAnimation;
