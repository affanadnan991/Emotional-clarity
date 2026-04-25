'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useEmotionalSync } from '@/lib/EmotionalSyncContext'

export default function PersonalTouchSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })
  const { increaseState } = useEmotionalSync()

  if (inView) {
    increaseState(5)
  }

  return (
    <section
      id="personal"
      className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:py-24"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[700px] w-full"
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(160,170,210,0.2)] bg-[rgba(160,170,210,0.05)] text-[#3d4560] text-[11px] tracking-[0.2em] uppercase mb-4 font-sans"
          >
            The Real Question
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-[clamp(2rem,6vw,3rem)] font-light text-[#e8eaf0] mb-4"
          >
            Why you?
          </motion.h2>
        </motion.div>

        {/* Personal content */}
        <div className="space-y-8">
          {/* Point 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="px-6 py-6 md:p-8 rounded-lg border border-[rgba(160,170,210,0.15)] bg-[rgba(100,110,160,0.05)] backdrop-blur-sm"
          >
            <h3 className="font-display text-[18px] md:text-[20px] font-light text-[#d0b8f0] mb-2">
              Your simplicity
            </h3>
            <p className="text-[13px] md:text-[14px] text-[#5a6278] leading-relaxed">
              Tumhari clarity aur simplicity wo cheez thi jo baaki sab se alag thi. 
              No pretense. No unnecessary complexity. Just... real.
            </p>
          </motion.div>

          {/* Point 2 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="px-6 py-6 md:p-8 rounded-lg border border-[rgba(160,170,210,0.15)] bg-[rgba(100,110,160,0.05)] backdrop-blur-sm"
          >
            <h3 className="font-display text-[18px] md:text-[20px] font-light text-[#d0b8f0] mb-2">
              The conversations
            </h3>
            <p className="text-[13px] md:text-[14px] text-[#5a6278] leading-relaxed">
              Hamne jab baat ki, wo substantive thi. Deep. Not surface level. 
              You asked the right questions. You listened. That matters.
            </p>
          </motion.div>

          {/* Point 3 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="px-6 py-6 md:p-8 rounded-lg border border-[rgba(160,170,210,0.15)] bg-[rgba(100,110,160,0.05)] backdrop-blur-sm"
          >
            <h3 className="font-display text-[18px] md:text-[20px] font-light text-[#d0b8f0] mb-2">
              Your growth potential
            </h3>
            <p className="text-[13px] md:text-[14px] text-[#5a6278] leading-relaxed">
              Tum sirf present nahi ho — tum growing bhi ho. Tum seekhne ke liye open ho. 
              That's rare. That's attractive. That's worth acknowledging.
            </p>
          </motion.div>
        </div>

        {/* Closing thought */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="text-center text-[13px] md:text-[14px] text-[#3d4560] mt-12 italic"
        >
          This isn't about perfection. It's about connection. And with you, that felt real.
        </motion.p>
      </motion.div>
    </section>
  )
}
