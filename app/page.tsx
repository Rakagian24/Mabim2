'use client'

import { useEffect } from 'react'
import HeroSection from "./components/sections/HeroSections"
import AboutMeSection from "./components/sections/AboutMeSections"
import Sesi1Section from "./components/sections/Sesi1Sections"
import Sesi2Section from "./components/sections/Sesi2Sections"
import Sesi3Section from "./components/sections/Sesi3Sections"
import ClosingSection from "./components/sections/ClosingSections"
import {
  Slide1KuliahUntukApa,
  Slide2ApaItuPendidikan,
  Slide3KenapaKuliahPenting,
  Slide4GrowthVsFixed,
  Slide5AgarTidakSiaSia,
} from './components/sections/Sesi1AllSlides'
import {
  Slide1BidangInformatika,
  Slide2KampusMengajarkanDasar,
  Slide3TShaped,
  Slide4MenemukanPassion,
  Slide5English,
} from './components/sections/Sesi2AllSlides'
import {
  Slide1DefinisiDanPentingnya,
  Slide2SoftSkillFundamental,
  Slide3HardVsSoft,
  Slide4PersonalBranding,
} from './components/sections/Sesi3AllSlides'

export default function Home() {

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))

      if (sections.length === 0) return

      // Get current section
      const scrollPosition = window.scrollY + 200

      let currentIndex = 0
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentIndex = index
        }
      })

      // Navigate with arrow keys
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault()
        if (currentIndex < sections.length - 1) {
          const nextSection = sections[currentIndex + 1]
          nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        if (currentIndex > 0) {
          const prevSection = sections[currentIndex - 1]
          prevSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <main className="w-full">
      {/* HOME SECTION */}
      <HeroSection />

      {/* ABOUT ME SECTION */}
      <AboutMeSection />

      {/* SESI 1 SECTION */}
      <Sesi1Section />

      {/* <Slide1Judul /> */}
      <Slide1KuliahUntukApa />
      <Slide2ApaItuPendidikan />
      <Slide3KenapaKuliahPenting />
      <Slide4GrowthVsFixed />
      <Slide5AgarTidakSiaSia />

      {/* SESI 2 SECTION */}
      <Sesi2Section />

      <Slide1BidangInformatika />
      <Slide2KampusMengajarkanDasar />
      <Slide3TShaped />
      <Slide4MenemukanPassion />
      <Slide5English />

      {/* SESI 3 SECTION */}
      <Sesi3Section />

      {/* <Slide1Title /> */}
      <Slide1DefinisiDanPentingnya />
      <Slide2SoftSkillFundamental />
      <Slide3HardVsSoft />
      <Slide4PersonalBranding />

      {/* CLOSING SECTION */}
      <ClosingSection />
    </main>
  )
}