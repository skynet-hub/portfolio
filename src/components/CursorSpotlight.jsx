import { useEffect, useRef } from 'react';

const CursorSpotlight = () => {
  const spotRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!spotRef.current) return;
      spotRef.current.style.left = `${e.clientX}px`;
      spotRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={spotRef}
      className="pointer-events-none fixed z-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
        transition: 'left 0.12s ease-out, top 0.12s ease-out',
      }}
    />
  );
};

export default CursorSpotlight;
