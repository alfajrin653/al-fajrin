import { projects, tools } from '../data'

export default function Skills({ activeTool, onPick }) {
  return (
    <section className="border-y-[3px] border-black bg-mint">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2 className="text-4xl font-extrabold leading-none tracking-[-0.03em] md:text-6xl">My toolbox</h2>
        <p className="mt-4 max-w-lg text-xl leading-snug">
          Pick a tool and I'll highlight the projects where I used it.
        </p>

        <ul className="mt-9 flex flex-wrap gap-3">
          {tools.map((t, i) => {
            const on = activeTool === t
            return (
              <li key={t}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => {
                    onPick(on ? null : t)
                    if (!on) document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`rounded-full border-[3px] border-black px-5 py-2.5 text-xl font-bold shadow-[4px_4px_0_#000] transition-transform hover:-translate-y-1 hover:shadow-[4px_8px_0_#000] active:translate-y-1 active:shadow-none ${
                    on ? 'bg-blue text-white' : 'bg-white'
                  } ${i % 2 ? 'hover:rotate-2' : 'hover:-rotate-2'}`}
                >
                  {t}
                  <span className={`ml-2 rounded-full px-2 py-0.5 text-sm ${on ? 'bg-white text-black' : 'bg-white'}`}></span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
