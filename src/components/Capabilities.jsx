import { capabilities } from '../data'

const tilt = ['md:-rotate-1', 'md:rotate-1 md:translate-y-6', 'md:-rotate-1']


 const process = [
  {
    title: 'Understand',
    text: 'I start by understanding the goal, users, requirements, and technical constraints of the project.',
  },
  {
    title: 'Build',
    text: 'I turn the idea or design into a working interface, connecting it with APIs and backend services when needed.',
  },
  {
    title: 'Refine',
    text: 'I test the result, improve responsiveness and usability, and refine the details before delivery.',
  },
]



export default function Capabilities() {
  return (
    <section id="capabilities" className="border-y-[3px] border-black bg-lemon/60">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <h2 className="text-5xl font-extrabold leading-none tracking-[-0.03em] md:text-7xl">
          What I do
        </h2>

        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {capabilities.map((item, i) => (
            <li
              key={item.title}
              className={`card flex flex-col p-7 transition-transform duration-300 hover:rotate-0 ${item.color} ${tilt[i % 3]}`}
            >
              <h3 className="text-3xl font-extrabold leading-tight tracking-[-0.02em]">
                {item.title}
              </h3>

              <p className="mt-4 flex-1 text-lg leading-snug">
                {item.text}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border-2 border-black bg-white px-3 py-1 text-sm font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-24">
          <h3 className="text-3xl font-extrabold tracking-[-0.02em] md:text-4xl">
            How I work
          </h3>

          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {process.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-[3px] border-black bg-white text-xl font-extrabold shadow-[3px_3px_0_#000]">
                  {i + 1}
                </span>

                <div>
                  <p className="text-2xl font-bold">{step.title}</p>
                  <p className="mt-1 text-lg leading-snug">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}