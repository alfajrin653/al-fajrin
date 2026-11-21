import { useRef } from 'react'

// Elemen dekoratif yang bisa diseret dengan mouse atau jari, tetap di dalam induknya.
export default function Sticker({ className = '', rotate = 0, children }) {
  const ref = useRef(null)
  const pos = useRef({ x: 0, y: 0, startX: 0, startY: 0, originX: 0, originY: 0, drag: false })

  const apply = (scale = 1) => {
    const { x, y } = pos.current
    ref.current.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale})`
  }

  const down = (e) => {
    const p = pos.current
    p.drag = true
    p.startX = e.clientX
    p.startY = e.clientY
    p.originX = p.x
    p.originY = p.y
    ref.current.setPointerCapture(e.pointerId)
    ref.current.style.zIndex = 30
    ref.current.style.cursor = 'grabbing'
    apply(1.08)
  }

  const move = (e) => {
    const p = pos.current
    if (!p.drag) return
    p.x = p.originX + e.clientX - p.startX
    p.y = p.originY + e.clientY - p.startY
    apply(1.08)

    // Jaga agar stiker tidak keluar dari area hero.
    const box = ref.current.parentElement.getBoundingClientRect()
    const me = ref.current.getBoundingClientRect()
    if (me.left < box.left) p.x += box.left - me.left
    if (me.right > box.right) p.x -= me.right - box.right
    if (me.top < box.top) p.y += box.top - me.top
    if (me.bottom > box.bottom) p.y -= me.bottom - box.bottom
    apply(1.08)
  }

  const up = () => {
    pos.current.drag = false
    ref.current.style.cursor = 'grab'
    apply(1)
  }

  return (
    <div
      ref={ref}
      aria-hidden="true"
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerCancel={up}
      className={`absolute z-10 cursor-grab select-none ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, touchAction: 'none', transition: 'scale .2s' }}
    >
      {children}
    </div>
  )
}
