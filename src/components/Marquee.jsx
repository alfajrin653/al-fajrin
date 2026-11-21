import { marquee } from '../data'

export default function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="marquee overflow-hidden border-b-[3px] border-black bg-blue py-4 text-white" aria-hidden="true">
      <div className="marquee-track">
        {items.map((text, i) => (
          <span key={i} className="flex items-center whitespace-nowrap text-3xl font-extrabold tracking-tight md:text-4xl">
            <span className="px-6">{text}</span>
            <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 fill-lemon" aria-hidden="true">
              <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  )
}
