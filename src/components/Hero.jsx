import { profile } from '../data'
import ProximityText from './ProximityText'
import Sticker from './Sticker'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-[3px] border-black bg-lemon">
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-14 md:pb-28 md:pt-20">
        <p className="mb-8 inline-flex items-center gap-3 rounded-full border-[3px] border-black bg-white px-4 py-2 text-base font-bold shadow-[4px_4px_0_#000]">
          <span className="pulse-dot inline-block h-3 w-3 rounded-full bg-[#00a86b]" />
          {profile.availability}
        </p>

        <ProximityText
          text={profile.headline}
          className="max-w-5xl text-[clamp(3rem,9.5vw,8.25rem)] font-extrabold leading-[0.95] tracking-[-0.035em]"
        />

        <p className="mt-8 max-w-xl text-xl leading-snug md:text-2xl">{profile.intro}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href={profile.links.upwork} target="_blank" rel="noreferrer" className="btn btn-blue">
            Hire me on Upwork
          </a>
          <a href="#work" className="btn">
            See my work
          </a>
        </div>

        <p className="mt-6 text-base font-medium">Move your cursor over the headline. Drag the stickers.</p>

        {/* Stiker yang bisa diseret */}
        <Sticker rotate={-8} className="right-[6%] top-[8%] hidden sm:block">
          <div className="h-36 w-36 overflow-hidden rounded-2xl border-[3px] border-black bg-white p-2 pb-8 shadow-[6px_6px_0_#000] md:h-44 md:w-44">
            <img src={profile.photo} alt="" draggable="false" className="h-full w-full rounded-lg border-2 border-black object-cover" />
          </div>
        </Sticker>

        <Sticker rotate={12} className="bottom-[10%] right-[12%] hidden sm:block">
          <div className="relative grid h-36 w-36 place-items-center md:h-40 md:w-40">
            <svg viewBox="0 0 200 200" className="spin-slow absolute inset-0 h-full w-full" fill="#3a4dff" stroke="#000" strokeWidth="6" strokeLinejoin="round">
              <path d="M100 6l24 22 31-9 8 31 31 8-9 31 22 24-22 24 9 31-31 8-8 31-31-9-24 22-24-22-31 9-8-31-31-8 9-31L6 100l22-24-9-31 31-8 8-31 31 9z" />
            </svg>
            <span className="relative text-center text-lg font-extrabold leading-tight text-white">
              React +<br />Tailwind
            </span>
          </div>
        </Sticker>

        <Sticker rotate={-4} className="bottom-[8%] left-[46%] hidden md:block">
          <span className="inline-block rounded-full border-[3px] border-black bg-mint px-5 py-3 text-lg font-bold shadow-[5px_5px_0_#000]">
            Replies in 24 hours
          </span>
        </Sticker>

        <Sticker rotate={6} className="right-[30%] top-[4%] hidden lg:block">
          <span className="inline-block rounded-xl border-[3px] border-black bg-pink px-4 py-2 text-lg font-bold shadow-[5px_5px_0_#000]">
            Fast on mobile
          </span>
        </Sticker>
      </div>
    </section>
  )
}
