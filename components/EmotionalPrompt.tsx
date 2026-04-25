'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Heart, ThumbsUp } from 'lucide-react'

interface EmotionalPromptProps {
  question: string
  section: string
}

export default function EmotionalPrompt({ question, section }: EmotionalPromptProps) {
  const ref = useRef(null)
  const [responded, setResponded] = useState(false)
  const [hearts, setHearts] = useState<Array<{ id: number; x: number }>>([])
  const inView = useInView(ref, { once: false, margin: '0px 0px -50px 0px' })

  const handleYes = () => {
    setResponded(true)
    
    // Create multiple hearts
    for (let i = 0; i < 3; i++) {
      const id = Date.now() + i
      const x = Math.random() * 100 - 50
      setHearts(prev => [...prev, { id, x }])
      
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== id))
      }, 1200)
    }

    setTimeout(() => setResponded(false), 2000)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mt-12 md:mt-16 py-8 px-4 md:px-6 rounded-lg border border-[rgba(160,170,210,0.1)] bg-[rgba(100,110,160,0.05)] backdrop-blur-sm"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[13px] md:text-[14px] text-[#5a6278] italic"
        >
          {question}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleYes}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(160,170,210,0.3)] bg-[rgba(160,170,210,0.08)] hover:bg-[rgba(160,170,210,0.15)] text-[#a8b4d4] text-[12px] cursor-pointer transition-all duration-300 whitespace-nowrap"
        >
          <Heart className={`w-4 h-4 ${responded ? 'fill-current' : ''}`} />
          <span>I relate</span>
        </motion.button>
      </div>

      {/* Heart particles animation */}
      <AnimatePresence>
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, y: 0, x: heart.x }}
            animate={{ opacity: 0, y: -60, x: heart.x + 20 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="fixed pointer-events-none"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Heart className="w-5 h-5 fill-[#d0b8f0] text-[#d0b8f0]" />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}
