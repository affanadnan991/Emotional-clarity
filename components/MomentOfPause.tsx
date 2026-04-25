'use client'

import { useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useEmotionalSync } from '@/lib/EmotionalSyncContext'

export default function MomentOfPause() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' })
  const { increaseState } = useEmotionalSync()

  // Increase emotional state when this section is viewed
  if (inView) {
    setTimeout(() => increaseState(10), 100)
  }

  return (
    <section
      ref={ref}
      className="relative z-20 h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden"
    >
      {/* Dimming overlay */}
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="fixed inset-0 bg-black/40 z-10 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-20 text-center max-w-[700px]"
      >
        {/* First line */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display font-light text-[clamp(2rem,6vw,3.5rem)] leading-relaxed text-[#e8eaf0] mb-8"
        >
          Main jaldbaazi me nahi hoon.
        </motion.h2>

        {/* Breathing space */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="h-12"
        />

        {/* Second line */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="font-display font-light text-[clamp(1.8rem,5vw,3rem)] italic text-[#a8b4d4]"
        >
          Bas thora develop hona chahta hoon.
        </motion.h3>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="text-[13px] md:text-[14px] text-[#5a6278] mt-12 max-w-[500px] mx-auto"
        >
          No rush. No pressure. Just honesty.
        </motion.p>
      </motion.div>
    </section>
  )
}
