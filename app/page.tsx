'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Impact from '@/components/Impact'
import Courses from '@/components/Courses'
import LearningPathways from '@/components/LearningPathways'
import Instructor from '@/components/Instructor'
import VideoIntroduction from '@/components/VideoIntroduction'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'

export default function Page() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or system preference
    const saved = localStorage.getItem('theme')
    if (saved) {
      setIsDark(saved === 'dark')
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl bg-accent"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl bg-secondary"></div>
      </div>

      <div className="relative z-10">
        <Navigation onThemeToggle={toggleTheme} isDark={isDark} />
        <Hero />
        <About />
        <Impact />
        <Courses />
        <LearningPathways />
        <Instructor />
        <VideoIntroduction />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
