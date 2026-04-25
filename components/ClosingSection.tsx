'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function ClosingSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })

  return (
    <section
      id="closing"
      className="relative z-10 min-h-[60vh] flex items-center justify-center px-6 py-24"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <Sparkles className="w-6 h-6 text-[#a8b4d4]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display font-light italic text-[clamp(1.8rem,4vw,3rem)] text-[rgba(160,170,200,0.55)] mb-6"
        >
          No pressure. Just honesty.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-1 h-1 rounded-full bg-[rgba(100,120,180,0.4)] origin-center"
        />
      </motion.div>
    </section>
  )
}
