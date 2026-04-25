'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useEmotionalSync } from '@/lib/EmotionalSyncContext'

const TypedParagraph = ({
  text,
  delay = 0,
  isPause = false,
}: {
  text: string
  delay?: number
  isPause?: boolean
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
        timeout = setTimeout(type, isPause ? 25 : 35)
      } else {
        setIsComplete(true)
      }
    }

    timeout = setTimeout(type, delay)
    return () => clearTimeout(timeout)
  }, [text, delay, isPause])

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

export default function HonestConversation() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })
  const { increaseState } = useEmotionalSync()
  const [partsRevealed, setPartsRevealed] = useState(0)

  useEffect(() => {
    if (inView) {
      increaseState(8)
    }
  }, [inView, increaseState])

  const paragraphs = [
    {
      text: 'Mujhe kuch clearly kehna hai.',
      delay: 300,
      bigGap: true,
    },
    {
      text: 'Hamara jo distance hai — wo tumhara fault nahi tha. Mera tha.',
      delay: 2500,
      bigGap: true,
    },
    {
      text: 'Mujhe pata hai main disappear ho gaya tha kuch time ke liye. Isliye nahi ke mujhe care nahi thi, balke isliye ke zindagi bohot complicated ho gayi. Main apne responsibilities ko properly handle nahi kar paya.',
      delay: 4200,
      bigGap: false,
    },
    {
      text: 'Mere saath apne issues the, cheezain unstable thi, aur honestly… main us position mein nahi tha jahan main Aapse proper tarah communicate kar sakta tha.',
      delay: 8500,
      bigGap: true,
    },
    {
      text: 'Abhi bhi mera sab kuch sorted nahi hai — mere paas apna phone bhi nahi hai abhi. Apne bhai ka use kar raha hoon bas connected rahne ke liye.',
      delay: 11200,
      bigGap: true,
    },
    {
      text: 'Lekin yeh sab kuch ek simple truth ko change nahi karta: Mujhe Aapse baat karna chahta hoon. Main still karna chahta hoon.',
      delay: 15200,
      bigGap: true,
    },
    {
      text: 'Main apne career ko bhi seriously leta hoon. Kabhi kabhi shayad us wajah se distance aur barh gaya — lekin iska matlab yeh nahi ke tum matter nahi karti thi.',
      delay: 18500,
      bigGap: true,
    },
    {
      text: 'Lekin sab kuch ke baad, ek cheez constant rahi — Ap ke ilawa kisi or ko galti se bhi nahi dekhna, Honestly.',
      delay: 23500,
      bigGap: true,
    },
    {
      text: 'Aap genuinely alag hen. Multi-talented, kind, aur Apka jo quiet innocence hai wo rare hai. Apka simplicity — wo sab se alag hai, ALLAH PAK AAP KO MAZEED KAMIABIAAN ATA FARMAY, AMEEN.',
      delay: 26200,
      bigGap: true,
    },
    {
      text: 'Yeh sab main isliye nahi keh raha ke tumhe impress karun. Bas isliye keh raha hoon kyun ke yeh baat pehle kehni chahiye thi.',
      delay: 30500,
      bigGap: true,
    },
    {
      text: 'No excuses. Sirf sach.',
      delay: 35000,
      bigGap: false,
    },
  ]

  return (
    <section
      id="honest"
      className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:py-24"
    >
      <div className="absolute inset-0 -z-10">
        {/* Subtle glow background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.4 } : {}}
          transition={{ duration: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-r from-[#d0b8f0] to-[#a8b4d4] rounded-full blur-[150px] opacity-5"
        />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-[700px] w-full"
      >
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(160,170,210,0.2)] bg-[rgba(160,170,210,0.05)] text-[#3d4560] text-[10px] tracking-[0.2em] uppercase mb-8 font-sans"
        >
          Asli Baat
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
                  para.text.includes('clearly') || para.text.includes('Bass clarity')
                    ? 'text-[#d0b8f0] font-medium'
                    : para.text.includes('distance') || para.text.includes('disappear') || para.text.includes('apne') || para.text.includes('chahta') || para.text.includes('Tera') || para.text.includes('Yeh mera')
                      ? 'text-[#a8b4d4] italic'
                      : 'text-[#a8b4d4]'
                }`}
              >
                {inView && <TypedParagraph text={para.text} delay={para.delay} />}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider after all text */}
        <AnimatePresence>
          {partsRevealed === paragraphs.length && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center gap-3 pt-10 md:pt-12"
            >
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[rgba(100,120,180,0.4)]" />
              <div className="w-2 h-2 rounded-full bg-[#a8b4d4] opacity-50" />
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[rgba(100,120,180,0.4)]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Emotional note at bottom */}
        <AnimatePresence>
          {partsRevealed === paragraphs.length && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center text-[12px] md:text-[13px] text-[#5a6278] italic pt-8"
            >
              Ab sab kuch samajh aana chahiye.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
