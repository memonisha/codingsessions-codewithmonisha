'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function Instructor() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">Meet Your Instructor</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-accent to-secondary rounded-full mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center p-8">
                {/* Profile section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="md:col-span-1"
                >
                  <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border-2 border-accent/30 relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MONISHA_SHARMA-fVnZc4tZcwrwwgWrTEcKRDwMrPtMM8.jpg"
                      alt="Monisha Sharma"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-center text-primary mb-2">Er. Monisha Sharma</h3>
                  <p className="text-center text-foreground/70 italic">
                    "Teaching technology with empathy, curiosity, and purpose."
                  </p>
                </motion.div>

                {/* Info section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="md:col-span-2 space-y-4"
                >
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary text-lg">Background</h4>
                    <p className="text-foreground/70 leading-relaxed">
                      Computer Science Engineer with 7+ years of dedicated experience in technology education and research. Passionate about making complex concepts accessible to learners of all ages.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary text-lg">Teaching Philosophy</h4>
                    <p className="text-foreground/70 leading-relaxed">
                      Education should be dynamic, enjoyable, and deeply human. Every session is designed to ignite curiosity and foster a genuine love for learning.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary text-lg">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Web Development', 'AI/ML', 'Game Development', 'Data Science', 'Python', 'Java', 'C# and Unity', 'R Programming', 'SQL', 'JavaScript', 'AR/VR', 'Cloud Computing', 'Blockchain Technology', 'Database Design'].map(
                        (skill) => (
                          <motion.span
                            key={skill}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 bg-secondary/20 text-primary rounded-full text-sm font-medium"
                          >
                            {skill}
                          </motion.span>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
