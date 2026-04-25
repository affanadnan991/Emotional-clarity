'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/cn'

export default function IntentSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  return (
    <section
      id="intent"
      className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className={cn(
          'max-w-[600px] w-full rounded-[20px]',
          'border border-[rgba(160,170,210,0.1)]',
          'md:p-14 p-8',
          'hover:border-[rgba(160,170,210,0.2)] transition-all duration-300'
        )}
        style={{
          background: 'rgba(255,255,255,0.025)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[10px] tracking-[0.28em] uppercase text-[#3d4560] font-sans mb-5 flex items-center gap-2"
        >
          <Heart className="w-3 h-3 text-[#a8b4d4]" />
          Why this exists
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display font-light text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.2] text-[#d8dce8] mb-8"
        >
          No games. No pressure.
          <br />
          Just a sincere conversation.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-8 h-px bg-[rgba(100,120,180,0.3)] mb-7 origin-left"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-sans text-[15px] leading-[1.85] text-[#5a637a] space-y-4"
        >
          <p className="hover:text-[#7a8fa8] transition-colors duration-300">
            This wasn't built out of desperation or impulse. It was built out of
            respect — for you, for what was real between us, and for the truth
            that some things deserve more than being left unsaid.
          </p>
          <p className="hover:text-[#7a8fa8] transition-colors duration-300">
            There's no agenda here. No timeline. No manipulation. Just a clear,
            adult acknowledgment that the future matters, growth matters, and
            honest communication matters more than either of us pretending
            otherwise.
          </p>
          <p className="hover:text-[#7a8fa8] transition-colors duration-300">
            Whatever you decide, it will be respected. Fully.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
