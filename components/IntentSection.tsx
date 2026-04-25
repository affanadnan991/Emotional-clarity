'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/cn'

export default function IntentSection() {
  const ref = useRef(null)
  const [heartClicked, setHeartClicked] = useState(false)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  const handleHeartClick = () => {
    setHeartClicked(true)
    setTimeout(() => setHeartClicked(false), 1500)
  }

  return (
    <section
      id="intent"
      className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:py-24"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className={cn(
          'max-w-[650px] w-full rounded-[20px]',
          'border border-[rgba(160,170,210,0.1)]',
          'p-6 md:p-10 lg:p-14',
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
          className="text-[9px] md:text-[10px] tracking-[0.28em] uppercase text-[#3d4560] font-sans mb-4 md:mb-5 flex items-center gap-2"
        >
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleHeartClick}
            className="cursor-pointer"
            aria-label="Like this message"
          >
            <Heart className={`w-3.5 h-3.5 transition-all ${heartClicked ? 'fill-[#d0b8f0] text-[#d0b8f0]' : 'text-[#a8b4d4]'}`} />
          </motion.button>
          Why this exists
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display font-light text-[clamp(1.6rem,5vw,2.6rem)] leading-[1.2] text-[#d8dce8] mb-6 md:mb-8"
        >
          No games. No pressure.
          <br />
          Just a sincere conversation.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-6 md:w-8 h-px bg-[rgba(100,120,180,0.3)] mb-6 md:mb-7 origin-left"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-sans text-[13px] md:text-[15px] leading-[1.75] md:leading-[1.85] text-[#5a637a] space-y-4"
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

        {/* Heart particle animation */}
        <AnimatePresence>
          {heartClicked && (
            <motion.div
              initial={{ opacity: 1, scale: 1, y: 0 }}
              animate={{ opacity: 0, scale: 2, y: -50 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            >
              <Heart className="w-8 h-8 fill-[#d0b8f0] text-[#d0b8f0]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
