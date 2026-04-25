'use client'

import { useRef } from 'react'
import * as React from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, Heart } from 'lucide-react'

const TypedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = React.useState('')

  React.useEffect(() => {
    let timeout: NodeJS.Timeout
    let index = 0

    const type = () => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
        timeout = setTimeout(type, 40)
      }
    }

    timeout = setTimeout(type, delay)
    return () => clearTimeout(timeout)
  }, [text, delay])

  return <>{displayedText}</>
}

export default function ClosingSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })

  return (
    <section
      id="closing"
      className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:py-24"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center flex flex-col items-center max-w-[650px]"
      >
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Sparkles className="w-7 h-7 text-[#a8b4d4]" />
        </motion.div>

        {/* Main message with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <p className="font-display font-light italic text-[clamp(1.6rem,5vw,3rem)] text-[rgba(160,170,200,0.6)] leading-relaxed">
            <TypedText
              text="Ayesha, whatever you decide…"
              delay={300}
            />
          </p>
          <p className="font-display font-light italic text-[clamp(1.6rem,5vw,3rem)] text-[#d0b8f0] mt-4">
            <TypedText
              text="I respect it completely."
              delay={1500}
            />
          </p>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[14px] md:text-[15px] text-[#5a6278] leading-[1.8] mb-8 max-w-[500px]"
        >
          This whole thing was just me being honest.
          <br />
          <span className="text-[13px]">
            No expectations. No pressure. Just… clarity.
          </span>
        </motion.p>

        {/* Heart and closing divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2, type: 'spring' }}
          className="flex items-center gap-3 justify-center"
        >
          <div className="w-1 h-1 rounded-full bg-[rgba(100,120,180,0.4)]" />
          <Heart className="w-5 h-5 text-[#d0b8f0] fill-[#d0b8f0]" />
          <div className="w-1 h-1 rounded-full bg-[rgba(100,120,180,0.4)]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
