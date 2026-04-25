'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

type Choice = 'time' | 'talk' | null

const responses = {
  time: {
    main: "That's okay. I'll respect that.",
    sub: 'Take all the time you need. This will still be here.',
    color: 'rgba(80,90,120,0.15)',
    border: 'rgba(100,110,150,0.15)',
    text: '#6b7490',
  },
  talk: {
    main: "I'm glad. Reach out whenever you're ready.",
    sub: 'No pressure on timing. Just - I\'m here, and I mean it.',
    color: 'rgba(80,110,160,0.12)',
    border: 'rgba(100,140,200,0.2)',
    text: '#7a90b8',
  },
}

export default function ChoiceSection() {
  const [choice, setChoice] = useState<Choice>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  return (
    <section
      id="choice"
      className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div ref={ref} className="text-center max-w-[500px] w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display font-light text-[clamp(1.5rem,3vw,2.2rem)] text-[#c4cade] mb-3"
        >
          What feels right to you?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[13px] text-[#424a62] tracking-[0.04em] mb-12 font-sans"
        >
          There's no wrong answer here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-5 justify-center flex-wrap"
        >
          <button
            onClick={() => setChoice('time')}
            className={`px-8 py-3 rounded-full font-sans text-[13px] tracking-[0.08em] border border-[rgba(160,170,210,0.2)] bg-transparent text-[#8a94b0] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(160,170,210,0.35)] hover:text-[#c0c8e0] ${
              choice !== null && choice !== 'time' ? 'opacity-30' : ''
            }`}
          >
            I need time
          </button>

          <button
            onClick={() => setChoice('talk')}
            className={`px-8 py-3 rounded-full font-sans text-[13px] tracking-[0.08em] border border-[rgba(130,150,220,0.3)] bg-[rgba(100,120,200,0.12)] text-[#a0aed0] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:bg-[rgba(100,120,200,0.2)] hover:border-[rgba(130,150,220,0.5)] hover:text-[#c8d4f0] ${
              choice !== null && choice !== 'talk' ? 'opacity-30' : ''
            }`}
          >
            Let's talk
          </button>
        </motion.div>

        <AnimatePresence>
          {choice && (
            <motion.div
              key={choice}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6 }}
              className="mt-10 px-8 py-6 rounded-[14px] font-sans text-[15px] leading-[1.7]"
              style={{
                background: responses[choice].color,
                border: `1px solid ${responses[choice].border}`,
                color: responses[choice].text,
              }}
            >
              {responses[choice].main}
              <span
                className="block mt-2 text-[13px] opacity-60"
              >
                {responses[choice].sub}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
