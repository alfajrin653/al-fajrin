import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

export default function App() {
  // Tool yang dipilih di "My toolbox" menyorot project terkait di "Selected work".
  const [activeTool, setActiveTool] = useState(null)

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Projects activeTool={activeTool} onClear={() => setActiveTool(null)} />
        <Skills activeTool={activeTool} onPick={setActiveTool} />
        <About />
        <Services />
      </main>
      <Contact />
    </>
  )
}
