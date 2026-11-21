import { useEffect, useRef } from 'react'

const COLORS = ['#3a4dff', '#ff6a3d', '#ff2e93', '#00a86b']
const RADIUS = 150

// Setiap huruf melompat, berputar, dan berganti warna saat kursor atau jari mendekat.
export default function ProximityText({ text, className = '' }) {
  const root = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = root.current
    const slots = [...el.querySelectorAll('[data-slot]')]
    const inners = slots.map((s) => s.firstElementChild)
    let raf = 0
    let x = 0
    let y = 0

    const paint = () => {
      raf = 0
      slots.forEach((slot, i) => {
        const r = slot.getBoundingClientRect()
        const dx = x - (r.left + r.width / 2)
        const dy = y - (r.top + r.height / 2)
        const t = Math.max(0, 1 - Math.hypot(dx, dy) / RADIUS)
        const dir = i % 2 === 0 ? 1 : -1
        const inner = inners[i]
        inner.style.transform = t
          ? `translateY(${-t * 22}px) rotate(${dir * t * 14}deg) scale(${1 + t * 0.28})`
          : ''
        inner.style.color = t > 0.35 ? COLORS[i % COLORS.length] : ''
      })
    }

    const move = (e) => {
      x = e.clientX
      y = e.clientY
      if (!raf) raf = requestAnimationFrame(paint)
    }
    const reset = () => {
      x = -9999
      y = -9999
      if (!raf) raf = requestAnimationFrame(paint)
    }

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerleave', reset)
    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', reset)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [text])

  return (
    <h1 ref={root} aria-label={text} className={className}>
      {text.split(' ').map((word, w) => (
        <span key={w} aria-hidden="true" className="inline-block whitespace-nowrap">
          {[...word].map((ch, i) => (
            <span key={i} data-slot className="inline-block">
              <span
                className="inline-block"
                style={{ transition: 'transform .3s cubic-bezier(.3,1.7,.5,1), color .2s' }}
              >
                {ch}
              </span>
            </span>
          ))}
          {' '}
        </span>
      ))}
    </h1>
  )
}
