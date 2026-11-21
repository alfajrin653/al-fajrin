import { useRef, useState } from 'react'
import { projects } from '../data'

function Preview({ project }) {
  return (
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      className="h-full w-full rounded-xl border-[3px] border-black object-cover"
    />
  )
}

export default function Projects({ activeTool, onClear }) {
  const [open, setOpen] = useState(0)
  const label = useRef(null)
  const [showLabel, setShowLabel] = useState(false)

  const follow = (e) => {
    if (e.pointerType !== 'mouse' || !label.current) return
    label.current.style.transform = `translate(${e.clientX + 18}px, ${e.clientY + 18}px)`
  }

  const matches = activeTool ? projects.filter((p) => p.tools.includes(activeTool)).length : projects.length

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-5xl font-extrabold leading-none tracking-[-0.03em] md:text-7xl">Selected work</h2>
        {activeTool && (
          <p className="flex items-center gap-3 text-lg font-semibold">
            {matches} {matches === 1 ? 'project uses' : 'projects use'} {activeTool}
            <button type="button" onClick={onClear} className="btn !px-4 !py-2 !text-base">
              Show all
            </button>
          </p>
        )}
      </div>

      <ul
        className="border-t-[3px] border-black"
        onPointerMove={follow}
        onPointerEnter={(e) => e.pointerType === 'mouse' && setShowLabel(true)}
        onPointerLeave={() => setShowLabel(false)}
      >
        {projects.map((p, i) => {
          const isOpen = open === i
          const dimmed = activeTool && !p.tools.includes(activeTool)
          return (
            <li
              key={p.title}
              className={`border-b-[3px] border-black transition-all duration-300 ${dimmed ? 'opacity-25' : ''} ${isOpen ? p.color : 'hover:bg-white'}`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`project-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 px-2 py-7 text-left md:px-4"
              >
                <span className="text-4xl font-extrabold leading-none tracking-[-0.03em] md:text-6xl">{p.title}</span>
                <span className="hidden shrink-0 text-lg font-semibold sm:block">
                  {p.kind}, {p.year}
                </span>
              </button>

              <div
                id={`project-${i}`}
                className="grid transition-[grid-template-rows] duration-500 ease-out"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <div className={`grid gap-8 px-2 pb-9 md:px-4 ${p.image ? 'md:grid-cols-2' : ''}`}>
                    <div className="space-y-5 text-lg leading-snug">
                      <p className="max-w-md text-xl">{p.summary}</p>
                      <dl className="space-y-3">
                        <div>
                          <dt className="font-bold">My role</dt>
                          <dd>{p.role}</dd>
                        </div>
                        <div>
                          <dt className="font-bold">Result</dt>
                          <dd className="max-w-md">{p.result}</dd>
                        </div>
                      </dl>
                      <ul className="flex flex-wrap gap-2">
                        {p.tools.map((t) => (
                          <li key={t} className="rounded-full border-[3px] border-black bg-white px-3 py-1 text-base font-semibold">
                            {t}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-3 pt-1">
                        {p.link && (
                          <a href={p.link} target="_blank" rel="noreferrer" className="btn !py-3 !text-base">
                            Visit live site
                          </a>
                        )}
                        {p.repo && (
                          <a href={p.repo} target="_blank" rel="noreferrer" className="btn !py-3 !text-base">
                            View code
                          </a>
                        )}
                      </div>
                    </div>
                    {p.image && <Preview project={p} />}
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      {/* Label yang mengikuti kursor, hanya untuk mouse */}
      <span
        ref={label}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-50 hidden rounded-full border-[3px] border-black bg-white px-4 py-1.5 text-base font-bold shadow-[3px_3px_0_#000] transition-opacity duration-150 md:block ${showLabel ? 'opacity-100' : 'opacity-0'}`}
      >
        Click to open
      </span>
    </section>
  )
}