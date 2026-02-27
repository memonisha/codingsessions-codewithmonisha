'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Star, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Romy Derman',
    role: 'Parent of Emilia',
    content:
      'My daughter Emilia has been coding for a year and a half and loves every moment of the lessons! Monisha is highly skilled at being an inspiring teacher. She keeps Emilia focused and interested while constantly steering her in the right direction. Well done Monisha for making coding fun!',
    rating: 5,
    avatar: '👨‍👩‍👧',
    verificationImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-PuIcqcK0vsTbOqGMBgpwBba8DfHuiI.jpeg',
    source: 'BYJU\'s FutureSchool Review',
  },
  {
    id: 2,
    name: 'J Lin',
    role: 'Parent of Sean & Cinty',
    content:
      'My kids (Sean and Cinty) like the coding classes so much. We\'d especially like to thank their teacher "Monisha Sharma". She is absolutely one of the best. My kids like her teaching style and energetic attitude.',
    rating: 5,
    avatar: '👨‍👩‍👧‍👦',
    verificationImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-X6IUWUEcS7R3SaOPPU5LRGykzwzUWg.jpeg',
    source: 'BYJU\'s FutureSchool Review',
  },
  {
    id: 3,
    name: 'Nataliia Zablotska',
    role: 'Software Engineer, Adult Learner',
    content:
      'From our very first session, it was evident that Monisha was the coding mentor I was seeking—exceptionally knowledgeable, creative and genuinely passionate about teaching. Her ability to dissect complex concepts into digestible, actionable steps made each session highly productive. I wholeheartedly recommend her to anyone seeking a highly skilled, exceptionally competent, and truly inspiring tech professional!',
    rating: 5,
    avatar: '👩‍💼',
    verificationImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NataliaFeedback-ZeDudgoSg3MbWyrilK6G4jiwLj3sYL.jpg',
    source: 'LinkedIn Testimonial',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<(typeof testimonials)[0] | null>(null)

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">Testimonials</h2>
          <p className="text-lg text-foreground/70">
            Feedback from learners and their parents around the world
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              variants={cardVariants}
              whileHover={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation()
                setSelectedTestimonial(testimonial)
              }}
              className="cursor-pointer"
            >
              <Card className="h-full border-border hover:border-accent transition-colors">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star size={18} className="fill-accent text-accent" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial content */}
                  <p className="text-foreground/80 mb-6 italic leading-relaxed">"{testimonial.content}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTestimonial(null)}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-lg shadow-xl max-w-md w-full overflow-hidden"
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedTestimonial(null)
                  }}
                  className="p-1 hover:bg-muted rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} className="text-foreground" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="px-6 pb-6">
                {/* Verification Image */}
                {selectedTestimonial.verificationImage && (
                  <div className="mb-6 relative w-full h-auto bg-muted rounded-lg overflow-hidden">
                    <Image
                      src={selectedTestimonial.verificationImage}
                      alt={`${selectedTestimonial.name} verification`}
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                )}

                {/* Testimonial Details */}
                <div className="mb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{selectedTestimonial.avatar}</div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{selectedTestimonial.name}</h3>
                      <p className="text-sm text-foreground/60">{selectedTestimonial.role}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: selectedTestimonial.rating }).map((_, i) => (
                      <Star key={i} size={18} className="fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground/80 italic leading-relaxed">"{selectedTestimonial.content}"</p>
                </div>

                {/* Verified Badge */}
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm text-foreground/60 text-center">✓ Verified Testimonial</p>
                  {selectedTestimonial.source && (
                    <p className="text-xs text-foreground/50 text-center mt-1">{selectedTestimonial.source}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
