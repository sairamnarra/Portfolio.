import { useState } from 'react';
import { GraduationCap, Briefcase, Code, Award, Check, Eye } from 'lucide-react';
import { EDUCATIONS, EXPERIENCES, SKILL_CATEGORIES } from '../data/portfolioData.ts';
import type { Certificate } from '../types/index.ts';

type ActiveTab = 'education' | 'skills' | 'experience';

interface AboutProps {
  onOpenCertificate?: (certificate: Certificate) => void;
}

export default function About({ onOpenCertificate }: AboutProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('education');

  return (
    <section id="about" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Background & Foundation
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-display">
            About Me
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I am an MCA graduate and aspiring software engineer specializing in backend engineering, data analysis, and applied machine learning. My engineering approach centers around writing clean, maintainable code, solving complex architectural challenges through structured logic, and delivering software that reliably solves real problems.
          </p>
        </div>

        {/* Tab Controls with Smooth Interactive Transitions */}
        <div className="inline-flex p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl mb-8 border border-zinc-200 dark:border-zinc-800 shadow-xs">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 active:scale-95 ${
              activeTab === 'education'
                ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 shadow-xs font-semibold'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50'
            }`}
            type="button"
          >
            <GraduationCap className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
            Education & Honors
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 active:scale-95 ${
              activeTab === 'skills'
                ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 shadow-xs font-semibold'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50'
            }`}
            type="button"
          >
            <Code className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
            Technical Stack
          </button>

          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 active:scale-95 ${
              activeTab === 'experience'
                ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 shadow-xs font-semibold'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50'
            }`}
            type="button"
          >
            <Briefcase className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
            Internships
          </button>
        </div>

        {/* Tab 1: Education */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            {EDUCATIONS.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-semibold text-base sm:text-lg text-zinc-900 dark:text-zinc-100 font-display group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                        {edu.score} {edu.scoreType}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                    <span>{edu.period}</span>
                    {edu.honor && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-700 dark:text-emerald-400 font-medium inline-flex items-center gap-1">
                          <Award className="w-3.5 h-3.5" />
                          {edu.honor}
                        </span>
                      </>
                    )}
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Technical Skills with Interactive Cards */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100 font-display mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
                  {cat.description}
                </p>

                <ul className="space-y-3.5">
                  {cat.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-center justify-between text-sm py-1 px-1.5 -mx-1.5 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors"
                    >
                      <span className="font-medium text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Internships */}
        {activeTab === 'experience' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 font-display group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-blue-700 dark:text-blue-400">
                      {exp.organization}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 tabular-nums">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="space-y-2 mb-5">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300">Technologies:</span>
                  {exp.techStack.map((tech, tIdx) => (
                    <span key={tIdx}>
                      {tech}{tIdx < exp.techStack.length - 1 ? ' ·' : ''}
                    </span>
                  ))}
                </div>

                {exp.certificate && onOpenCertificate && (
                  <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-2">
                    <button
                      onClick={() => onOpenCertificate(exp.certificate!)}
                      className="group/btn inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-all duration-150 hover:-translate-y-0.5 hover:shadow-xs active:translate-y-0"
                      type="button"
                    >
                      <Eye className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:scale-115" />
                      View Credential
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
