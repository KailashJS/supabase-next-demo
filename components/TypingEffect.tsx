"use client"
import { useEffect, useState } from 'react';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const fullText = "Hello, this is a typing effect!";
  const typingSpeed = 100; // Adjust the typing speed here

  useEffect(() => {
    let index = 0;
    const type = () => {
      if (index < fullText.length) {
        setText(prev => prev + fullText.charAt(index));
        index++;
        setTimeout(type, typingSpeed);
      }
    };
    type();
  }, []);

  return (
    <p className="text-base font-medium typing-animation">{text}</p>
  );
};

export default TypingEffect;

