import { ExternalLink, Github, BookOpen } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData.ts';

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Engineered Systems
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-display">
            Featured Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A selection of production-tested applications spanning predictive machine learning, natural language processing, and automated data pipelines.
          </p>
        </div>

        {/* Project Cards Grid with Lift & Hover Interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Media Preview Container with Smooth Zoom */}
              <div className="relative aspect-16/9 bg-zinc-100 dark:bg-zinc-800 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 font-display group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {project.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Stack Metadata */}
                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 mb-6 flex flex-wrap items-center gap-x-2 text-xs text-zinc-500 dark:text-zinc-400">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="font-mono text-[11px] hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
                        {tag}{tIdx < project.tags.length - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>

                  {/* Action Links with Hover Micro-Interactions */}
                  <div className="flex items-center gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-150 shadow-xs"
                      >
                        Live Application
                        <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 hover:-translate-y-0.5 hover:shadow-xs active:translate-y-0 transition-all duration-150"
                      >
                        <Github className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:scale-110" />
                        Source Code
                      </a>
                    )}

                    {project.publicationUrl && (
                      <a
                        href={project.publicationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 rounded-xl transition-all duration-150 shadow-xs"
                      >
                        <BookOpen className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:scale-110" />
                        View Publication DOI
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
