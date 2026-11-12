import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Navbar({ darkMode, onToggleDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Handle scroll detection and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const sections = ['about', 'projects', 'certificates', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certificates', href: '#certificates', id: 'certificates' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200/90 dark:border-zinc-800/90 shadow-xs'
            : 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xs border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          {/* Logo Wordmark with subtle hover effect */}
          <a
            href="#"
            onClick={(e) => handleSmoothScroll(e, '#')}
            className="group text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 whitespace-nowrap shrink-0 font-display transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
            aria-label="Narra Sairam Portfolio Homepage"
          >
            <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5">
              NARRA SAIRAM<span className="text-blue-600 dark:text-blue-400 group-hover:animate-pulse">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`transition-all duration-200 whitespace-nowrap py-1 relative focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xs ${
                    isActive
                      ? 'text-zinc-950 dark:text-white font-semibold after:w-full'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:-translate-y-0.5'
                  } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300 ${
                    isActive ? 'after:w-full' : 'after:w-0'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onToggleDarkMode}
              className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              type="button"
            >
              {darkMode ? <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45" /> : <Moon className="w-4 h-4 transition-transform duration-300 rotate-0 hover:-rotate-12" />}
            </button>

            <a
              href={PERSONAL_INFO.resumePreviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 whitespace-nowrap shrink-0 shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <FileText className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" />
              Resume
              <ArrowUpRight className="w-3 h-3 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger & Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleDarkMode}
              className="p-2.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors active:scale-95"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              type="button"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-all duration-150 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              type="button"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Portaled Mobile Navigation: Completely free of header stacking context */}
      {mobileMenuOpen && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[100] md:hidden"
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Deep blur backdrop over the whole screen */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xl transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* 100% Solid Opaque Drawer Sheet: No text behind can ever mix or bleed through */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-[320px] bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between shadow-2xl z-[101]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800">
                <span className="font-display font-bold text-base text-zinc-900 dark:text-zinc-100">
                  Navigation Menu
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors active:scale-95 cursor-pointer"
                  aria-label="Close navigation menu"
                  type="button"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links with High Contrast */}
              <div className="py-6 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className={`min-h-12 px-4 flex items-center justify-between text-base font-semibold rounded-xl transition-all duration-150 active:scale-98 ${
                        isActive
                          ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400'
                          : 'text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.resumePreviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-11 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-150 active:scale-98 shadow-sm"
              >
                <FileText className="w-4 h-4" />
                Preview Full Resume
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.resumeDownloadUrl}
                className="w-full min-h-11 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all duration-150 active:scale-98"
              >
                Download ATS PDF
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
