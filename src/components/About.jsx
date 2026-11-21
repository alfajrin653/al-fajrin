import { about, profile } from '../data'

export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:py-28">
      <div className="relative mx-auto w-full max-w-sm">
        <div className="card -rotate-3 overflow-hidden p-3 transition-transform duration-300 hover:rotate-0">
          <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="aspect-[4/5] w-full rounded-2xl border-[3px] border-black object-cover" />
        </div>
        <span className="absolute -right-4 -top-5 rotate-12 rounded-full border-[3px] border-black bg-lemon px-5 py-2 text-xl font-extrabold shadow-[4px_4px_0_#000]">
          Hi, I'm {profile.name.split(' ')[0]}
        </span>
      </div>

      <div>
        <h2 className="text-5xl font-extrabold leading-none tracking-[-0.03em] md:text-7xl">About me</h2>
        <div className="mt-8 max-w-xl space-y-4 text-xl leading-snug">
          {about.paragraphs.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>

        <dl className="card mt-10 divide-y-[3px] divide-black overflow-hidden !shadow-[6px_6px_0_#000]">
          {about.facts.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[8rem_1fr] gap-4 px-5 py-3.5 text-lg">
              <dt className="font-bold">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
