'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function LearningPathways() {
  const pathways = [
    {
      title: 'Custom & Personalized 1:1 Sessions',
      description: 'Science and Math tutoring tailored to individual learning styles',
      features: [
        'Adaptive learning approach',
        'All age groups welcome',
        'Flexible scheduling',
        'Progress tracking',
      ],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl bg-secondary"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">Additional Learning Pathways</h2>
          <p className="text-lg text-foreground/70">Beyond courses, personalized learning experiences</p>
        </motion.div>

        {pathways.map((pathway, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-border hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{pathway.title}</CardTitle>
                <CardDescription className="text-lg text-foreground/70">
                  {pathway.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pathway.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                      <span className="text-foreground/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
