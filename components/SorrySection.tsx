'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useEmotionalSync } from '@/lib/EmotionalSyncContext'

const TypedParagraph = ({
  text,
  delay = 0,
}: {
  text: string
  delay?: number
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let index = 0

    const type = () => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
        timeout = setTimeout(type, 30)
      } else {
        setIsComplete(true)
      }
    }

    timeout = setTimeout(type, delay)
    return () => clearTimeout(timeout)
  }, [text, delay])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayedText}
      {!isComplete && <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>|</motion.span>}
    </motion.span>
  )
}

export default function SorrySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })
  const { increaseState } = useEmotionalSync()
  const [partsRevealed, setPartsRevealed] = useState(0)

  useEffect(() => {
    if (inView) {
      increaseState(6)
    }
  }, [inView, increaseState])

  const paragraphs = [
    {
      text: 'Mujhe sorry kehna chahta hoon.',
      delay: 300,
      bigGap: true,
      highlight: true,
    },
    {
      text: 'Utne time ke liye jab main disappear tha. Har message ke liye jo reply nahi aya. Har moment ke liye jab tum alone feel kar rahi thi.',
      delay: 2500,
      bigGap: true,
      highlight: false,
    },
    {
      text: 'Tumhe sab se pehle deserve karta tha consistency aur communication. Balke main sirf confusion de gaya.',
      delay: 6000,
      bigGap: true,
      highlight: false,
    },
    {
      text: 'Agar main differently handle karta to shayad hum aaj alag jagah hote. Lekin main yeh sab appreciate karta hoon — tumhari patience, tumhari understanding.',
      delay: 9500,
      bigGap: true,
      highlight: false,
    },
    {
      text: 'Jo time gaya, wo nahi aa sakta. Lekin jo aage hai — usmein main different ban sakta hoon. Better ban sakta hoon.',
      delay: 13200,
      bigGap: true,
      highlight: false,
    },
    {
      text: 'Aapka belief, aapka innocence, aapka way of loving — yeh sab bohot precious hai. Aur main usko safe rakhna chahta hoon. Truly.',
      delay: 16800,
      bigGap: true,
      highlight: false,
    },
    {
      text: 'Isbar agar tum mujhe chance do, to main prove karoon gaa — not through grand gestures, but through everyday consistency.',
      delay: 20400,
      bigGap: true,
      highlight: false,
    },
    {
      text: 'Aur agar nahi bhi do, to mujhe wo accept hai. Bas jaan na chahta hoon ke tum okay ho. Ke tum happy ho. Ke tum finally, clear ho.',
      delay: 24200,
      bigGap: true,
      highlight: false,
    },
    {
      text: 'Kyunke yeh sab meri asal sorry thee — tumhe clear hona. Tumhe answer dena.',
      delay: 27800,
      bigGap: false,
      highlight: true,
    },
  ]

  return (
    <section
      id="sorry"
      className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:py-24"
    >
      {/* Soft background gradient */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.3 } : {}}
          transition={{ duration: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-r from-[#d0b8f0] via-[#a8b4d4] to-[#6b7490] rounded-full blur-[150px] opacity-5"
        />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-[700px] w-full"
      >
        {/* Section intro with heart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[rgba(208,184,240,0.3)]" />
          <Heart className="w-5 h-5 text-[#d0b8f0]" />
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[rgba(208,184,240,0.3)]" />
        </motion.div>

        {/* Paragraphs with typing */}
        <div className="space-y-6 md:space-y-8">
          {paragraphs.map((para, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: para.delay / 1000 }}
              onAnimationComplete={() => {
                if (inView) {
                  setPartsRevealed(idx + 1)
                }
              }}
              className={para.bigGap ? 'pb-4' : 'pb-0'}
            >
              <p
                className={`text-[13px] md:text-[15px] leading-[1.8] ${
                  para.highlight
                    ? 'text-[#d0b8f0] font-medium'
                    : 'text-[#a8b4d4]'
                }`}
              >
                {inView && <TypedParagraph text={para.text} delay={para.delay} />}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing divider with heart */}
        <AnimatePresence>
          {partsRevealed === paragraphs.length && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center gap-3 pt-10 md:pt-12"
            >
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[rgba(100,120,180,0.4)]" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-[#d0b8f0]"
              />
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[rgba(100,120,180,0.4)]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reflection at bottom */}
        <AnimatePresence>
          {partsRevealed === paragraphs.length && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center text-[12px] md:text-[13px] text-[#5a6278] italic pt-8 max-w-[600px] mx-auto"
            >
              Sorry karna tha Aur ab bas chahta hoon ke tum jaano ke main sharminda hoon — sach mein.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
