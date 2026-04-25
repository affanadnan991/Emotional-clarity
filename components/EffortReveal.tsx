'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useEmotionalSync } from '@/lib/EmotionalSyncContext'

export default function EffortReveal() {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)
  const [hoverTime, setHoverTime] = useState(0)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })
  const { increaseState } = useEmotionalSync()

  const handleMouseEnter = () => {
    setHoverTime(0)
    const interval = setInterval(() => {
      setHoverTime((prev) => {
        if (prev >= 2000) {
          setRevealed(true)
          clearInterval(interval)
          increaseState(15)
          return 2000
        }
        return prev + 50
      })
    }, 50)

    return () => clearInterval(interval)
  }

  const handleMouseLeave = () => {
    setHoverTime(0)
  }

  if (inView && !revealed) {
    increaseState(2)
  }

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:py-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-[600px] w-full text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[13px] md:text-[14px] text-[#5a6278] mb-8 italic"
        >
          (There's something I want you to know...)
        </motion.p>

        <motion.div
          ref={ref}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 md:p-10 rounded-lg border-2 border-dashed border-[rgba(160,170,210,0.3)] bg-[rgba(100,110,160,0.08)] backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-[rgba(160,170,210,0.5)]"
        >
          {!revealed ? (
            <>
              <motion.p
                className="text-[14px] md:text-[15px] text-[#a8b4d4] font-medium"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Hold or hover for 2 seconds...
              </motion.p>

              {/* Progress bar */}
              {hoverTime > 0 && (
                <motion.div
                  className="mt-4 h-1 bg-gradient-to-r from-[#d0b8f0] to-[#a8b4d4] rounded-full"
                  animate={{ width: `${(hoverTime / 2000) * 100}%` }}
                  transition={{ duration: 0 }}
                />
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[14px] md:text-[15px] text-[#d0b8f0] leading-relaxed mb-4">
                "Isay banane me time laga.
              </p>
              <p className="text-[14px] md:text-[15px] text-[#d0b8f0] leading-relaxed mb-6">
                Lekin main chahta tha ke baat sahi tareeke se pohanche."
              </p>
              <p className="text-[12px] md:text-[13px] text-[#5a6278] italic">
                That's what this is. Effort + intention.
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}
