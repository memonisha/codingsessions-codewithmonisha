'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useState, useRef } from 'react'

export default function VideoIntroduction() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayClick = () => {
    setIsPlaying(true)
    // ensure the video element actually starts playing
    videoRef.current?.play().catch(() => {
      /* ignore playback errors (autoplay policy, etc.) */
    })
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">
            Hello there 👋🏻
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
  
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden border border-border/50 aspect-video flex items-center justify-center group cursor-pointer"
            onClick={handlePlayClick}
          >
            {/* Placeholder Video Container */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls={isPlaying}
              autoPlay={isPlaying}
              poster="/video-thumbnail.jpg"
            >
              <source src="/abc.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Button Overlay */}
            {!isPlaying && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="bg-primary text-primary-foreground rounded-full p-6 sm:p-8"
                >
                  <Play size={32} fill="currentColor" />
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary/20 rounded-full blur-2xl" />
        </motion.div>

        {/* CTA After Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Ready to start your coding journey? Let's work together to build your skills and confidence in programming.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
          >
            Start Learning Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
