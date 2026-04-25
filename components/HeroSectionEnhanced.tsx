'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { cn } from '@/lib/cn'
import { useEffect, useRef, useState } from 'react'

const TypedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (!isTyping) {
      setIsTyping(true)
      let index = 0

      const type = () => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1))
          index++
          timeout = setTimeout(type, 30)
        } else {
          setIsTyping(false)
        }
      }

      timeout = setTimeout(type, delay)
    }

    return () => clearTimeout(timeout)
  }, [text, delay])

  return <>{displayedText}</>
}

export default function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const backgroundImage = useMotionTemplate`radial-gradient(
    600px at ${mouseX}px ${mouseY}px,
    rgba(160, 170, 210, 0.15),
    transparent 80%
  )`

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  const scrollToStory = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })
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
      className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 py-16 md:py-20 overflow-hidden"
      aria-label="Hero section with main message"
      onMouseMove={handleMouseMove}
    >
      {/* Cursor-based glow effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 opacity-30"
        style={{ backgroundImage }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[750px] relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="text-[9px] md:text-[10px] tracking-[0.28em] uppercase text-[#3d4560] mb-8 md:mb-10 font-sans px-2"
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
          className="font-display font-light text-[clamp(2rem,7vw,4.2rem)] leading-[1.15] text-[#e8eaf0] max-w-[700px] mb-5 md:mb-7 px-2 md:px-0"
        >
          <span className="inline-block">
            <TypedText text="Some things are better said" delay={500} />
          </span>
          <br />
          with{' '}
          <em className="italic text-[#a8b4d4] inline-block">
            <TypedText text="honesty" delay={1200} />,
          </em>{' '}
          not noise.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-[13px] md:text-[15px] text-[#5a6278] tracking-[0.04em] mb-10 md:mb-14 font-sans px-4 md:px-0"
        >
          <TypedText text="This is not pressure. Just clarity." delay={1800} />
        </motion.p>

        <motion.button
          variants={itemVariants}
          onClick={scrollToStory}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            'group inline-flex items-center gap-3 px-8 md:px-9 py-3 md:py-3.5 rounded-full',
            'border border-[rgba(160,170,210,0.25)] bg-transparent',
            'text-[#a8b4d4] text-[12px] md:text-[13px] tracking-[0.12em] uppercase font-sans',
            'cursor-pointer transition-all duration-300',
            'hover:bg-[rgba(160,170,210,0.08)] hover:border-[rgba(160,170,210,0.5)]',
            'hover:text-[#d0d8f0] focus:outline-none focus:ring-2 focus:ring-[rgba(160,170,210,0.3)]',
            'active:scale-95'
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
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[11px] text-[#3d4560] tracking-[0.1em] uppercase">
            Scroll
          </span>
          <div className="w-px h-6 bg-gradient-to-b from-[rgba(160,170,210,0.4)] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
