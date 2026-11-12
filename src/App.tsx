import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Certificates from './components/Certificates.tsx';
import Experience from './components/Experience.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import CertificateModal from './components/CertificateModal.tsx';
import type { Certificate } from './types/index.ts';

export default function App() {
  const [activeModalCert, setActiveModalCert] = useState<Certificate | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-200 flex flex-col font-sans selection:bg-zinc-800 selection:text-white dark:selection:bg-zinc-200 dark:selection:text-zinc-900">
      <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

      <main className="flex-1">
        <Hero />
        <About onOpenCertificate={setActiveModalCert} />
        <Projects />
        <Certificates onOpenCertificate={setActiveModalCert} />
        <Experience onOpenCertificate={setActiveModalCert} />
        <Contact />
      </main>

      <Footer />

      {/* Global Browser-Compatible Certificate Credential Modal */}
      <CertificateModal
        certificate={activeModalCert}
        onClose={() => setActiveModalCert(null)}
      />
    </div>
  );
}
