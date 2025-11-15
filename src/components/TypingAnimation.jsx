import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [displayText, setDisplayText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  const texts = [
    "Software Engineering Student",
    "Aspiring Full Stack Engineer", 
    "Aspiring DevOps Engineer",
    "Always Learning New Things"
  ];

  useEffect(() => {
    const currentText = texts[lineIndex];
    
    if (charIndex <= currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex));
        setCharIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLineIndex(prev => (prev + 1) % texts.length);
        setCharIndex(0);
        setDisplayText('');
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, texts]);

  return (
    <div className="font-semibold w-full">
      <div className="text-center lg:text-left leading-tight w-full">
        <span className="text-2xl md:text-3xl lg:text-4xl bg-linear-to-r from-gray-700 to-indigo-600 bg-clip-text text-transparent">
          {displayText}
          <span className="animate-pulse ml-1 text-indigo-600">|</span>
        </span>
      </div>
    </div>
  );
};

export default TypingAnimation;