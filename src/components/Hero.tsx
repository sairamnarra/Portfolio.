import { useState, useEffect } from 'react';
import { ArrowDown, Download, CheckCircle, ExternalLink, Code2, Database, Award, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

const ANIMATED_ROLES = [
  'Software Engineer',
  'Python Developer',
  'Machine Learning Engineer',
  'Data Analyst',
];

export default function Hero() {
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'complete'>('idle');

  // Typewriter state
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Independent JS-driven blinking cursor (500ms) - ensures reliable blinking across all browsers and reduced-motion settings
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // Seamless Typewriter Animation Loop
  // Loops unconditionally through: 1. Software Engineer -> 2. Python Developer -> 3. Machine Learning Engineer -> 4. Data Analyst
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = ANIMATED_ROLES[roleIndex];

    if (!isDeleting) {
      // Typing phase: 80ms per character (within 70-90ms range)
      if (displayedText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        // Role completely typed: pause for 1.8 seconds (within 1.5-2.0s range)
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      // Deleting phase: 40ms per character (within 35-50ms range)
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, 40);
      } else {
        // Role completely deleted: pause for 350ms before typing next role
        timer = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ANIMATED_ROLES.length);
        }, 350);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const handleDownloadClick = () => {
    if (downloadState !== 'idle') return;
    setDownloadState('downloading');

    // Trigger download in background
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumeDownloadUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadState('complete');
      setTimeout(() => {
        setDownloadState('idle');
      }, 2500);
    }, 1200);
  };

  return (
    <section
      id="home"
      className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Typographic Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start animate-in fade-in slide-in-from-bottom-2 duration-500">
            {/* Clean Subtitle / Availability Kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-4 tracking-wide">
              <span>{PERSONAL_INFO.location}</span>
              <span aria-hidden="true" className="text-zinc-400 dark:text-zinc-600">·</span>
              <span className="text-blue-700 dark:text-blue-400 font-semibold inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to Engineering Opportunities
              </span>
            </div>

            {/* Headline with Typewriter Text Animation */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 font-display leading-[1.15] mb-6">
              Hi, I'm{' '}
              <span className="underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-8 hover:decoration-blue-500 dark:hover:decoration-blue-400 transition-colors duration-300">
                Narra Sairam
              </span>
              .
              <br />
              <span className="block mt-2.5 sm:mt-3 min-h-[1.3em] text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
                {/* Screen-reader accessible full title */}
                <span className="sr-only">
                  Software Engineer, Python Developer, Machine Learning Engineer, Data Analyst
                </span>
                {/* Animated typewriter role in portfolio accent color */}
                <span
                  aria-hidden="true"
                  className="text-blue-600 dark:text-blue-400 font-semibold inline-flex items-center"
                >
                  <span className="inline-block">
                    {displayedText || '\u00A0'}
                  </span>
                  {/* Subtle blinking cursor at the end of the text */}
                  <span
                    className={`inline-block w-[2.5px] sm:w-[3.5px] h-[0.82em] bg-blue-600 dark:bg-blue-400 ml-1.5 rounded-full transition-opacity duration-150 ${
                      cursorVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </span>
            </h1>

            {/* Natural Prose Description */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-xl">
              MCA graduate with strong hands-on expertise in Python backend systems, machine learning pipelines, and SQL databases. I build scalable, production-ready web tools—from fraud detection systems to semantic resume screening engines—emphasizing clean code and verifiable real-world value.
            </p>

            {/* Action Buttons & Social Row */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 shadow-xs"
              >
                View Projects
                <ArrowDown className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>

              <button
                onClick={handleDownloadClick}
                disabled={downloadState === 'downloading'}
                className="group inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
                type="button"
                aria-label="Download ATS Resume PDF"
              >
                {downloadState === 'idle' && (
                  <>
                    <Download className="w-4 h-4 mr-2 text-zinc-600 dark:text-zinc-400 transition-transform duration-200 group-hover:-translate-y-0.5" />
                    Download Resume
                  </>
                )}
                {downloadState === 'downloading' && (
                  <>
                    <span className="inline-block w-4 h-4 mr-2 border-2 border-zinc-400 border-t-zinc-800 dark:border-t-zinc-100 rounded-full animate-spin" />
                    Preparing PDF...
                  </>
                )}
                {downloadState === 'complete' && (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-400">Downloaded</span>
                  </>
                )}
              </button>

              <a
                href="#certificates"
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:translate-x-0.5 transition-all duration-200"
              >
                View Certificates (9)
              </a>

              {/* Social Icons with Micro-Interactions */}
              <div className="flex items-center gap-1.5 ml-0 sm:ml-2 pl-0 sm:pl-3 border-l-0 sm:border-l border-zinc-200 dark:border-zinc-800">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:scale-110 active:scale-95"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:scale-110 active:scale-95"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:scale-110 active:scale-95"
                  aria-label="Email"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Tech Highlights */}
            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 w-full flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">Core Stack:</span>
              <span className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-default">
                <Code2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Python (Flask)
              </span>
              <span className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-default">
                <Database className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> SQL / MySQL
              </span>
              <span className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-default">
                <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Scikit-Learn & ML
              </span>
              <span className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-default">
                Power BI
              </span>
            </div>
          </div>

          {/* Right Column: Real Professional Portrait with Interactive Hover */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-in fade-in duration-700">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              {/* Clean Frame with Subtle Hairline Border and Hover Elevation */}
              <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md aspect-4/5 relative transition-all duration-500 group-hover:shadow-2xl group-hover:border-zinc-300 dark:group-hover:border-zinc-700">
                <img
                  src="/assets/aistudio/profile_09a3a312.png"
                  alt="Narra Sairam - Software Engineer"
                  className="w-full h-full object-cover object-top filter grayscale-15 contrast-105 transition-all duration-500 group-hover:scale-102 group-hover:grayscale-0"
                  loading="eager"
                />
              </div>

              {/* Verified Credential Badge */}
              <div className="mt-3 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 px-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Verified Academic & Industry Portfolio
                </span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-150 hover:translate-x-0.5"
                >
                  LinkedIn Profile
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quantifiable Rigor & Proof Metrics Strip */}
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="flex flex-col p-3 -m-3 rounded-xl hover:bg-zinc-100/70 dark:hover:bg-zinc-900/70 transition-all duration-200 group">
            <span className="text-2xl sm:text-3xl font-bold font-display text-zinc-900 dark:text-zinc-100 tabular-nums group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              8.78
            </span>
            <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 mt-1">
              MCA CGPA
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              Batch Topper Distinction
            </span>
          </div>

          <div className="flex flex-col p-3 -m-3 rounded-xl hover:bg-zinc-100/70 dark:hover:bg-zinc-900/70 transition-all duration-200 group">
            <span className="text-2xl sm:text-3xl font-bold font-display text-zinc-900 dark:text-zinc-100 tabular-nums group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              81%
            </span>
            <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 mt-1">
              Model Accuracy
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              Auto Insurance Fraud Portal
            </span>
          </div>

          <div className="flex flex-col p-3 -m-3 rounded-xl hover:bg-zinc-100/70 dark:hover:bg-zinc-900/70 transition-all duration-200 group">
            <span className="text-2xl sm:text-3xl font-bold font-display text-zinc-900 dark:text-zinc-100 tabular-nums group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              9+
            </span>
            <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 mt-1">
              Industry Certificates
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              Microsoft, AICTE, Edunet, TCS
            </span>
          </div>

          <div className="flex flex-col p-3 -m-3 rounded-xl hover:bg-zinc-100/70 dark:hover:bg-zinc-900/70 transition-all duration-200 group">
            <span className="text-2xl sm:text-3xl font-bold font-display text-zinc-900 dark:text-zinc-100 tabular-nums group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              1
            </span>
            <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 mt-1">
              Published Paper
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              IJRA & Zenodo (DOI Registered)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
