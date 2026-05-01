import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MyLogo from '../assets/magoboDevsLogo.png';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#tech-stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function NavBar() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${sections[i]}`);
          return;
        }
      }
      setActive('');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop — floating pill */}
      <motion.nav
        className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 items-center gap-1 px-2 py-2 rounded-full border border-white/10 bg-[#0a0a0f]/70 backdrop-blur-xl shadow-xl shadow-black/30"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Logo mark */}
        <a href="/" className="flex items-center gap-2 px-3 mr-2 border-r border-white/10">
          <img src={MyLogo} className="h-7 w-7 object-contain" alt="Logo" />
          <span className="text-sm font-semibold text-white whitespace-nowrap">MagoboDevs</span>
        </a>

        {/* Nav links with sliding active pill */}
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 z-10"
            style={{ color: active === link.href ? '#fff' : 'rgb(156,163,175)' }}
          >
            {active === link.href && (
              <motion.span
                layoutId="pill"
                className="absolute inset-0 bg-indigo-600/80 rounded-full -z-10"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            {link.label}
          </a>
        ))}
      </motion.nav>

      {/* Mobile — top bar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/10">
        <a href="/" className="flex items-center gap-2">
          <img src={MyLogo} className="h-8 w-8 object-contain" alt="Logo" />
          <span className="text-sm font-semibold text-white">MagoboDevs</span>
        </a>

        <button
          onClick={() => setMenuOpen(o => !o)}
          className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-5 h-px bg-gray-300 rounded-full origin-center"
            animate={menuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-5 h-px bg-gray-300 rounded-full"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block w-5 h-px bg-gray-300 rounded-full origin-center"
            animate={menuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed top-[57px] left-0 right-0 z-40 bg-[#0d0d18]/95 backdrop-blur-md border-b border-white/10 px-5 py-4 flex flex-col gap-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active === link.href
                    ? 'bg-indigo-600/30 text-indigo-300'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
