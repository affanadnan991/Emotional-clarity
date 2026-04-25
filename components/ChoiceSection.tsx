'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'

type Choice = 'time' | 'talk' | null

const responses = {
  time: {
    main: "That's okay. I'll respect that.",
    sub: 'Take all the time you need. This will still be here.',
    color: 'rgba(80,90,120,0.15)',
    border: 'rgba(100,110,150,0.15)',
    text: '#6b7490',
    emoji: '⏳',
  },
  talk: {
    main: "I'm glad. Reach out whenever you're ready.",
    sub: 'No pressure on timing. Just - I\'m here, and I mean it.',
    color: 'rgba(80,110,160,0.12)',
    border: 'rgba(100,140,200,0.2)',
    text: '#7a90b8',
    emoji: '💬',
  },
}

export default function ChoiceSection() {
  const [choice, setChoice] = useState<Choice>(null)
  const [showConfetti, setShowConfetti] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  const handleChoice = (selectedChoice: Choice) => {
    setChoice(selectedChoice)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 1500)
  }

  return (
    <section
      id="choice"
      className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:py-24"
    >
      <div ref={ref} className="text-center max-w-[550px] w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display font-light text-[clamp(1.6rem,5vw,2.2rem)] text-[#c4cade] mb-3 md:mb-4 px-2"
        >
          What feels right to you?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[13px] md:text-[14px] text-[#424a62] tracking-[0.04em] mb-10 md:mb-12 font-sans px-2"
        >
          There's no wrong answer here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-3 md:gap-5 justify-center flex-wrap mb-8 md:mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleChoice('time')}
            className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-sans text-[12px] md:text-[13px] tracking-[0.08em] border border-[rgba(160,170,210,0.2)] bg-transparent text-[#8a94b0] cursor-pointer transition-all duration-300 hover:border-[rgba(160,170,210,0.35)] hover:text-[#c0c8e0] ${
              choice !== null && choice !== 'time' ? 'opacity-30 pointer-events-none' : ''
            }`}
          >
            I need time
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleChoice('talk')}
            className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-sans text-[12px] md:text-[13px] tracking-[0.08em] border border-[rgba(130,150,220,0.3)] bg-[rgba(100,120,200,0.12)] text-[#a0aed0] cursor-pointer transition-all duration-300 hover:bg-[rgba(100,120,200,0.2)] hover:border-[rgba(130,150,220,0.5)] hover:text-[#c8d4f0] ${
              choice !== null && choice !== 'talk' ? 'opacity-30 pointer-events-none' : ''
            }`}
          >
            Let's talk
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {choice && (
            <motion.div
              key={choice}
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="px-5 md:px-8 py-5 md:py-6 rounded-[14px] font-sans text-[14px] md:text-[15px] leading-[1.7] relative"
              style={{
                background: responses[choice].color,
                border: `1px solid ${responses[choice].border}`,
                color: responses[choice].text,
              }}
            >
              {/* Emoji decoration */}
              <div className="absolute top-3 right-4 text-2xl">
                {responses[choice].emoji}
              </div>

              <div className="text-left">
                <p className="font-medium mb-2">
                  {responses[choice].main}
                </p>
                <p className="text-[12px] md:text-[13px] opacity-70">
                  {responses[choice].sub}
                </p>
              </div>

              {/* Heart animation on response */}
              {showConfetti && (
                <motion.div
                  initial={{ opacity: 1, scale: 1, y: 0 }}
                  animate={{ opacity: 0, scale: 0.5, y: -30 }}
                  transition={{ duration: 1 }}
                  className="absolute right-6 top-6"
                >
                  <Heart className="w-5 h-5 fill-current text-[#d0b8f0]" />
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Micro-interaction prompt */}
        {!choice && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[11px] md:text-[12px] text-[#3d4560] mt-8 italic"
          >
            (Pick one — there's no timer on this)
          </motion.p>
        )}
      </div>
    </section>
  )
}
