'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [totalSlides, setTotalSlides] = useState(1)

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'sesi1', label: 'Sesi 1' },
    { id: 'sesi2', label: 'Sesi 2' },
    { id: 'sesi3', label: 'Sesi 3' },
    { id: 'closing', label: 'Closing' },
  ]

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Detect active section and calculate slide progress
  useEffect(() => {
    const handleScroll = () => {
      const allSections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 150

      // 1) Hitung progress berdasarkan semua section (slide per slide)
      let slideIndex = 0
      allSections.forEach((section, idx) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          slideIndex = idx
        }
      })
      setCurrentSlideIndex(slideIndex)
      setTotalSlides(allSections.length || 1)

      // 2) Tentukan activeSection berdasarkan anchor utama di navbar
      const anchorElements = sections
        .map((s) => document.getElementById(s.id))
        .filter((el) => el !== null)

      if (anchorElements.length === 0) return

      let activeId = sections[0].id

      anchorElements.forEach((el, idx) => {
        const top = el.offsetTop
        const nextTop = idx < anchorElements.length - 1
          ? anchorElements[idx + 1].offsetTop
          : document.body.scrollHeight

        if (scrollPosition >= top && scrollPosition < nextTop) {
          activeId = sections[idx].id
        }
      })

      setActiveSection(activeId)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mouse move for glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/30 shadow-2xl shadow-purple-500/20'
          : 'bg-slate-900/50 backdrop-blur-md border-b border-purple-500/10'
      }`}
    >
      {/* Animated gradient line on top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
        <motion.div
          className="h-full bg-linear-to-r from-transparent via-blue-500 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo with Blur Reveal Effect */}
          <motion.button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-7 h-7 text-purple-400 group-hover:text-yellow-400 transition-colors duration-300 relative z-10" />
            </motion.div>
            
            <span className="text-xl font-bold relative z-10">
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Optimize Your Campus Life
              </span>
            </span>
          </motion.button>

          {/* Navigation with Magnetic Effect */}
          <div className="flex items-center gap-2">
            {sections.map((section, index) => {
              const isActive = activeSection === section.id
              
              return (
                <MagneticButton
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  isActive={isActive}
                  label={section.label}
                  index={index}
                />
              )
            })}
          </div>

        </div>
      </div>

      {/* Animated Progress Bar - Based on Total Slides */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800/50 overflow-hidden">
        <motion.div
          className="h-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"
          initial={{ width: '0%' }}
          animate={{
            width: `${((currentSlideIndex + 1) / totalSlides) * 100}%`
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ opacity: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.nav>
  )
}

// Magnetic Button Component with React Bits style
function MagneticButton({ onClick, isActive, label, index }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.button
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        x: position.x,
        y: position.y 
      }}
      transition={{ 
        opacity: { delay: index * 0.1 },
        y: { delay: index * 0.1 },
        x: { type: 'spring', stiffness: 150, damping: 15 },
        y: { type: 'spring', stiffness: 150, damping: 15 }
      }}
      className="relative px-5 py-2.5 rounded-lg font-medium text-sm overflow-hidden"
    >
      {/* Active State - Gradient Background */}
      {isActive && (
        <>
          <motion.div
            layoutId="activeBackground"
            className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg"
            initial={false}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-500 rounded-lg"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </>
      )}

      {/* Hover State - Glass Effect */}
      {!isActive && isHovered && (
        <motion.div
          className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        />
      )}

      {/* Text */}
      <span className={`relative z-10 transition-colors duration-300 ${
        isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
      }`}>
        {label}
      </span>

      {/* Shimmer on hover */}
      {isHovered && !isActive && (
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ opacity: 0.2 }}
        />
      )}

      {/* Bottom indicator for active */}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-linear-to-r from-blue-400 to-purple-400 rounded-full"
          initial={false}
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
    </motion.button>
  )
}