import { profile } from '../data'

const links = [
  ['Work', '#work'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Contact', '#contact'],
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-black bg-paper">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="text-xl font-extrabold tracking-tight">
          {profile.name}
        </a>
        <ul className="hidden items-center gap-7 text-lg font-semibold md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="underline-offset-4 hover:underline hover:decoration-[3px]">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href={profile.links.upwork} target="_blank" rel="noreferrer" className="btn btn-blue !px-4 !py-2.5 !text-base">
          Hire me
        </a>
      </nav>
    </header>
  )
}
