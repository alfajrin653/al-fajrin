import { process, services } from '../data'

const tilt = ['md:-rotate-1', 'md:rotate-1 md:translate-y-6', 'md:-rotate-1']

export default function Services() {
  return (
    <section id="services" className="border-y-[3px] border-black bg-lemon/60">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <h2 className="text-5xl font-extrabold leading-none tracking-[-0.03em] md:text-7xl">How I can help</h2>

        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <li
              key={s.title}
              className={`card flex flex-col p-7 transition-transform duration-300 hover:rotate-0 ${s.color} ${tilt[i % 3]}`}
            >
              <h3 className="text-3xl font-extrabold leading-tight tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-4 flex-1 text-lg leading-snug">{s.text}</p>
              <p className="mt-8 text-lg font-bold">
                {s.price}, ready in {s.time}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-24">
          <h3 className="text-3xl font-extrabold tracking-[-0.02em] md:text-4xl">How we'll work together</h3>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {process.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-[3px] border-black bg-white text-xl font-extrabold shadow-[3px_3px_0_#000]">
                  {i + 1}
                </span>
                <div>
                  <p className="text-2xl font-bold">{step.title}</p>
                  <p className="mt-1 text-lg leading-snug">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
