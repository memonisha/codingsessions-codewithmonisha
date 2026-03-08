'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Download } from 'lucide-react'

const courses = [
  {
    id: 0,
    title: 'AI for Smart Learning',
    emoji: '🧠',
    description: 'A future ready course designed for learners of all age groups who want to use AI effectively in their studies, work, and creative pursuits. Sessions are personalized to each learner’s age, interests, and goals, helping them master the art of using AI tools, prompts, and workflows intelligently in their own domain.',
  },
  {
    id: -1,
    title: 'Coding Foundations',
    emoji: '💻',
    description: 'A fun and engaging introduction to the world of coding, perfect for young learners aged 6 to10 or more, with no prior experience. Through games, puzzles, and creative challenges using visual tools like Blockly, students discover the core principles of programming while building simple apps and projects. Each lesson helps learners create something they can proudly showcase, making their first steps into coding both exciting and rewarding.',
  },
  {
    id: 1,
    title: 'Web Development',
    emoji: '🌐',
    description: 'Master the art of building dynamic and responsive websites, from HTML & CSS basics to advanced JavaScript frameworks and backend development. Explore modern frameworks like React and Node.js, and build full-stack applications with databases and APIs.',
  },
  {
    id: 2,
    title: 'Artificial Intelligence & Machine Learning',
    emoji: '🤖',
    description: 'Explore AI & ML foundations by building neural networks from scratch and creating intelligent systems that recognize patterns and make predictions. Dive into deep learning, computer vision, natural language processing, and real-world applications like recommendation systems.',
  },
  {
    id: 3,
    title: 'C# and Unity Game Development',
    emoji: '🎮',
    description: 'Learn C# and Unity essentials to build immersive 2D and 3D games from scratch. Create interactive game mechanics, physics simulations, and publish your games to multiple platforms.',
  },
  {
    id: 4,
    title: 'AP / IB Computer Science',
    emoji: '📚',
    description: 'Comprehensive exam prep covering algorithms, data structures, OOP, and problem-solving for high school students. Prepare for college-level programming with hands-on projects in computational thinking and software development.',
  },
  {
    id: 5,
    title: 'Java (Core + Advanced)',
    emoji: '☕',
    description: 'From core Java to advanced concepts and web development using Java frameworks. Build enterprise applications, Android apps, and explore Spring Boot for scalable web services.',
  },
  {
    id: 6,
    title: 'Python Fundamentals',
    emoji: '🐍',
    description: 'Beginner-friendly Python programming, from simple scripts to real-world applications. Learn data manipulation, automation scripts, web scraping, and create projects like chatbots and data analyzers.',
  },
  {
    id: 7,
    title: 'Data Science & Data Visualization',
    emoji: '📊',
    description: 'Data analysis, statistical modeling, and visualization to turn data into meaningful insights using R and Python. Build machine learning models, create interactive dashboards, and explore big data tools for predictive analytics.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
  hover: {
    y: -8,
    transition: { duration: 0.3 },
  },
}

export default function Courses() {
  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">Courses Offered</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive learning pathways designed to inspire, educate, and empower
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {courses.map((course) => (
            <motion.div key={course.id} variants={cardVariants} whileHover="hover">
              <Card className="h-full border-border hover:border-accent transition-colors cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{course.emoji}</div>
                    <ArrowRight
                      className="text-accent opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                      size={24}
                    />
                  </div>
                  <CardTitle className="text-xl text-primary">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70 leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-foreground/70 mb-6">Interested in a course?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              Reach Out Today
              <ArrowRight size={20} />
            </motion.button>
            <motion.a
              href="https://drive.google.com/file/d/1QVDc13bXsieN88gmVFhxrNX2hs-K_g7G/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              Download Course Pathways
              <Download size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
