'use client'

import { motion } from 'framer-motion'

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-primary">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg text-foreground/80 leading-relaxed"
        >
          <p>
            <span className="font-semibold text-foreground">An engineer by qualification, an educator by passion, and a researcher at heart.</span>
          </p>

          <p>
            Welcome to my corner of the digital world, where research, education and technology intersect in exciting and meaningful ways. With a background in Computer Science Engineering and seven years of experience as a dedicated Tech Educator and Researcher, I've had the privilege of leading nearly 9500 coding sessions globally, inspiring learners of all ages to embrace the world of technology.
          </p>

          <p>
            My journey from engineering to research has been driven by a passion for making complex ideas accessible and engaging. I believe education should be dynamic, enjoyable, and deeply human. Whether it's breaking down coding concepts or guiding learners through advanced tech, my goal is to ignite curiosity and foster a love for learning.
          </p>

          <p>
            When I'm not teaching, I'm immersed in research projects that blend innovation with education. Every session I lead is not just a lesson, but an experience. Let's learn, build, and discover together.
          </p>
        </motion.div>

        {/* Key values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
        >
          {[
            { title: 'Innovative', desc: 'Cutting-edge teaching methods' },
            { title: 'Accessible', desc: 'Learning for all age groups' },
            { title: 'Research-Driven', desc: 'Evidence-based education' },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-background border border-border hover:border-accent transition-colors"
            >
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/60">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
