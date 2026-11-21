import { profile } from '../data'

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t-[3px] border-black bg-blue text-white"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2">
          
          <div>
            <p className="text-lg font-bold uppercase tracking-wide">
              Get in touch
            </p>

            <h2 className="mt-4 text-5xl font-extrabold leading-none tracking-[-0.03em] md:text-7xl">
              Let's build something.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Have a project, idea, or opportunity? Feel free to reach out.
              I'm open to freelance projects and new opportunities.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-5">
            
            <a
              href={`mailto:${profile.email}`}
              className="group border-b-2 border-white/30 pb-4 text-xl font-bold transition hover:border-white"
            >
              <span className="text-sm font-medium text-white/50">
                Email
              </span>
              <span className="mt-1 block">
                {profile.email}
              </span>
            </a>

            <a
              href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="group border-b-2 border-white/30 pb-4 text-xl font-bold transition hover:border-white"
            >
              <span className="text-sm font-medium text-white/50">
                WhatsApp
              </span>
              <span className="mt-1 block">
                {profile.phone}
              </span>
            </a>

            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group border-b-2 border-white/30 pb-4 text-xl font-bold transition hover:border-white"
            >
              <span className="text-sm font-medium text-white/50">
                LinkedIn
              </span>
              <span className="mt-1 block">
                LinkedIn Profile →
              </span>
            </a>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="group border-b-2 border-white/30 pb-4 text-xl font-bold transition hover:border-white"
            >
              <span className="text-sm font-medium text-white/50">
                GitHub
              </span>
              <span className="mt-1 block">
                GitHub Profile →
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}