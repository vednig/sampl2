'use client'

import { useState }              from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project, ProjectCategory } from '@/types/content'
import { ProjectCard }           from '@/components/ui/ProjectCard'
import { cn }                    from '@/lib/utils'

const CATEGORIES: Array<'All' | ProjectCategory> = [
  'All', 'Residential', 'Commercial', 'Interior', 'Cultural',
]

interface ProjectFilterProps {
  projects: Project[]
}

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [active, setActive] = useState<'All' | ProjectCategory>('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active)

  return (
    <>
      {/* Filter bar */}
      <div className="sticky top-16 md:top-20 z-30 bg-[#f8f7f5]/95 backdrop-blur-md border-b border-stone-200">
        <div className="px-8 md:px-16 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  'shrink-0 px-5 py-2 text-xs tracking-wide3 uppercase transition-all duration-200',
                  active === cat
                    ? 'bg-stone-900 text-stone-50'
                    : 'text-stone-500 hover:text-stone-900'
                )}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-xs text-stone-400 shrink-0 pl-6 font-mono">
              {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="px-8 md:px-16 max-w-screen-2xl mx-auto py-20 md:py-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: -8  }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} variant="default" index={i} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}
