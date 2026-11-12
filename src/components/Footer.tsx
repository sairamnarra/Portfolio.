import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800/80">
          <div className="text-center md:text-left">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="text-lg font-bold font-display tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              NARRA SAIRAM<span className="text-blue-600 dark:text-blue-400">.</span>
            </a>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Software Engineer & Data Analyst · MCA Graduate
            </p>
          </div>

          {/* Quick Anchor Links with Smooth Transitions */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:-translate-y-0.5 transition-all duration-200"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:-translate-y-0.5 transition-all duration-200"
            >
              Projects
            </a>
            <a
              href="#certificates"
              onClick={(e) => handleSmoothScroll(e, '#certificates')}
              className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:-translate-y-0.5 transition-all duration-200"
            >
              Certificates
            </a>
            <a
              href="#experience"
              onClick={(e) => handleSmoothScroll(e, '#experience')}
              className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:-translate-y-0.5 transition-all duration-200"
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Social Profiles with Micro-Interactions */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/70 dark:hover:bg-zinc-800 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:scale-110 active:scale-95"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-200/70 dark:hover:bg-zinc-800 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:scale-110 active:scale-95"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-zinc-200/70 dark:hover:bg-zinc-800 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:scale-110 active:scale-95"
              aria-label="Send Email"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="group/btn p-2.5 ml-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/70 dark:hover:bg-zinc-800 rounded-xl transition-all duration-200 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
              aria-label="Scroll to top of page"
              title="Back to Top"
              type="button"
            >
              <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover/btn:-translate-y-0.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© {currentYear} Narra Sairam. Built with clean code, TypeScript & Tailwind CSS.</p>
          <p className="text-zinc-400 dark:text-zinc-500">
            Verified Academic & Industry Credentials
          </p>
        </div>
      </div>
    </footer>
  );
}
