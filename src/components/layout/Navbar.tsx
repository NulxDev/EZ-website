import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const links = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/a-propos' },
  { name: 'Services', path: '/services' },
  { name: 'Pourquoi nous ?', path: '/pourquoi-nous' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const navBg = scrolled ? 'bg-white shadow-md text-zinc-900' : (isHome ? 'bg-transparent text-white' : 'bg-white shadow-sm text-zinc-900');
  const logoColor = scrolled ? 'text-accent' : (isHome ? 'text-white' : 'text-accent');

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-[var(--color-navy)] flex items-center justify-center text-white rounded font-serif text-xl">
                EZ
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-xl tracking-wider uppercase">Select Concept</span>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-80">Construction Résidentielle</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-widest uppercase hover:text-[var(--color-accent)] transition-colors ${location.pathname === link.path ? 'text-[var(--color-accent)] font-semibold' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[var(--color-navy)] text-white px-6 py-3 text-sm tracking-widest uppercase hover:bg-[var(--color-accent)] transition-colors"
            >
              Obtenir un devis
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-inherit hover:text-[var(--color-accent)] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white text-zinc-900 border-t"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-3 py-4 text-base uppercase tracking-wider border-b border-zinc-100 hover:text-[var(--color-accent)]"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block text-center mt-6 bg-[var(--color-navy)] text-white px-6 py-4 text-sm tracking-widest uppercase hover:bg-[var(--color-accent)] transition-colors"
              >
                Obtenir un devis
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
