'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { cn } from '@/lib/cn'

export default function HeroSection() {
  const scrollToStory = () => {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 py-20"
      aria-label="Hero section with main message"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[750px]"
      >
        <motion.div
          variants={itemVariants}
          className="text-[10px] tracking-[0.28em] uppercase text-[#3d4560] mb-10 font-sans"
        >
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(160,170,210,0.2)] bg-[rgba(160,170,210,0.05)] hover:border-[rgba(160,170,210,0.4)] hover:bg-[rgba(160,170,210,0.1)] transition-all duration-300"
          >
            <Sparkles className="w-3 h-3" />
            A message with clarity
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-display font-light text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.15] text-[#e8eaf0] max-w-[700px] mb-7"
        >
          Some things are better said
          <br />
          with <em className="italic text-[#a8b4d4]">honesty</em>, not noise.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-[15px] text-[#5a6278] tracking-[0.04em] mb-14 font-sans"
        >
          This is not pressure. Just clarity.
        </motion.p>

        <motion.button
          variants={itemVariants}
          onClick={scrollToStory}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            'group inline-flex items-center gap-3 px-9 py-3.5 rounded-full',
            'border border-[rgba(160,170,210,0.25)] bg-transparent',
            'text-[#a8b4d4] text-[13px] tracking-[0.12em] uppercase font-sans',
            'cursor-pointer transition-all duration-300',
            'hover:bg-[rgba(160,170,210,0.08)] hover:border-[rgba(160,170,210,0.5)]',
            'hover:text-[#d0d8f0] focus:outline-none focus:ring-2 focus:ring-[rgba(160,170,210,0.3)]'
          )}
          aria-label="Scroll to story section"
        >
          Continue
          <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#3d4560]"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}