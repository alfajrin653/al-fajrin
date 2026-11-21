import { useState } from 'react'
import { profile } from '../data'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="bg-blue text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <h2 className="max-w-4xl text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
          Got a project in mind? Let's talk.
        </h2>

        <div className="mt-12 flex flex-wrap gap-4">
          <a href={profile.links.upwork} target="_blank" rel="noreferrer" className="btn !bg-lemon">
            Hire me on Upwork
          </a>
          <button type="button" onClick={copy} className="btn">
            Copy my email
          </button>
        </div>

        <p className="mt-6 text-xl">
          Or write to{' '}
          <a href={`mailto:${profile.email}`} className="font-bold underline underline-offset-4">
            {profile.email}
          </a>
        </p>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t-[3px] border-white pt-6 text-lg">
          <p>
            {profile.name}, {profile.location} ({profile.timezone})
          </p>
          <ul className="flex gap-6 font-bold">
            <li>
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.links.upwork} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                Upwork
              </a>
            </li>
          </ul>
        </footer>
      </div>

      {copied && (
        <div
          role="status"
          className="toast fixed bottom-6 left-1/2 z-50 rounded-full border-[3px] border-black bg-mint px-6 py-3 text-lg font-bold text-black shadow-[4px_4px_0_#000]"
        >
          Email copied
        </div>
      )}
    </section>
  )
}
