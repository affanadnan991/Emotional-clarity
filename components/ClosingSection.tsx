'use client'

import { useRef } from 'react'
import * as React from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Sparkles, Heart } from 'lucide-react'
import { useEmotionalSync } from '@/lib/EmotionalSyncContext'

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
  const { emotionalState } = useEmotionalSync()

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
              text="Ayesha, whatever you decide—"
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
          className="text-[13px] md:text-[14px] text-[#5a6278] leading-[1.8] mb-8 max-w-[550px]"
        >
          Your space. Your growth. Your timeline. That matters more than anything I could say here.
        </motion.p>

        {/* Final message - human and real */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="px-5 md:px-8 py-5 md:py-6 rounded-lg border border-[rgba(160,170,210,0.2)] bg-[rgba(100,110,160,0.08)] backdrop-blur-sm mb-8 max-w-[550px]"
        >
          <p className="text-[13px] md:text-[14px] text-[#a8b4d4] leading-relaxed">
            Agar tum yahan tak pohanche ho… to bas itna kehna tha ke main serious hoon. 
            <br />
            <span className="block mt-3 text-[#5a6278] italic">
              Lekin tumhari khushi aur khud par trust — wo sab se zyada important hai.
            </span>
          </p>
        </motion.div>

        {/* Hidden unlock message - shows at high emotional state */}
        <AnimatePresence>
          {emotionalState > 85 && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="px-6 md:px-8 py-6 md:py-7 rounded-lg border border-[rgba(208,184,240,0.3)] bg-[rgba(208,184,240,0.08)] backdrop-blur-sm max-w-[550px]"
            >
              <p className="text-[12px] md:text-[13px] text-[#d0b8f0] italic leading-relaxed mb-2">
                ✨ You made it this far...
              </p>
              <p className="text-[13px] md:text-[14px] text-[#c4cade] leading-relaxed">
                "Now everything feels a little clearer... doesn't it?"
              </p>
              <p className="text-[11px] md:text-[12px] text-[#5a6278] mt-3 italic">
                That was the whole point.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Heart and closing divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 2, type: 'spring' }}
          className="flex items-center gap-3 justify-center mt-8 md:mt-10"
        >
          <div className="w-1 h-1 rounded-full bg-[rgba(100,120,180,0.4)]" />
          <Heart className="w-5 h-5 text-[#d0b8f0] fill-[#d0b8f0]" />
          <div className="w-1 h-1 rounded-full bg-[rgba(100,120,180,0.4)]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
