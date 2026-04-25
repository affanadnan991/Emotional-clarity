'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Lightbulb, Compass, BookOpen, Heart } from 'lucide-react'
import { cn } from '@/lib/cn'

const steps = [
  {
    num: '01',
    label: 'reflection',
    text: 'We stopped talking... but not thinking.',
    sub: 'Silence between people does not mean the thoughts go quiet too.',
    icon: Lightbulb,
    color: 'from-blue-500/20 to-transparent',
    emoji: '💭',
  },
  {
    num: '02',
    label: 'context',
    text: 'Life got complicated... but intentions stayed simple.',
    sub: 'Complexity is external. What we actually want — that tends to be far clearer.',
    icon: Compass,
    color: 'from-purple-500/20 to-transparent',
    emoji: '🧭',
  },
  {
    num: '03',
    label: 'truth',
    text: 'Not everything needs urgency. Some things need truth.',
    sub: 'This is one of those things.',
    icon: BookOpen,
    color: 'from-pink-500/20 to-transparent',
    emoji: '📖',
  },
]

function StoryStep({
  step,
  index,
}: {
  step: (typeof steps)[0]
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })
  const [clicked, setClicked] = useState(false)
  const Icon = step.icon

  const handleIconClick = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 600)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: 'easeOut' }}
      className="group"
    >
      <div className="flex gap-4 md:gap-8">
        {/* Icon Column */}
        <motion.div
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleIconClick}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className={cn(
            'w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0',
            'bg-gradient-to-br from-[rgba(160,170,210,0.15)] to-[rgba(100,120,180,0.05)]',
            'border border-[rgba(160,170,210,0.3)]',
            'group-hover:border-[rgba(160,170,210,0.5)]',
            'group-hover:bg-gradient-to-br group-hover:from-[rgba(160,170,210,0.2)] group-hover:to-[rgba(100,120,180,0.1)]',
            'transition-all duration-300 relative cursor-pointer',
            'active:scale-90 md:active:scale-95'
          )}
        >
          <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#a8b4d4] group-hover:text-[#d0d8f0] transition-colors" />
          
          {/* Glow effect */}
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle, rgba(160,170,210,0.2) 0%, transparent 70%)',
              filter: 'blur(8px)'
            }}
          />

          {/* Click emoji animation */}
          {clicked && (
            <motion.div
              initial={{ opacity: 1, scale: 0, y: 0 }}
              animate={{ opacity: 0, scale: 2, y: -30 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="absolute text-lg md:text-xl"
            >
              {step.emoji}
            </motion.div>
          )}
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.1 }}
          className="flex-1 pb-6 md:pb-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.1 }}
            className="text-[9px] md:text-[11px] tracking-[0.3em] text-[#3d4560] uppercase font-sans mb-3 md:mb-4 font-medium"
          >
            <span className="inline-block">{step.num}</span>
            <span className="mx-2 md:mx-3 text-[#5a637a]">—</span>
            <span className="inline-block">{step.label}</span>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.15 }}
            className="w-6 md:w-8 h-px bg-gradient-to-r from-[rgba(160,170,210,0.4)] to-transparent mb-4 md:mb-5 origin-left"
          />

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
            className="font-display font-light text-[clamp(1.3rem,5vw,2.2rem)] leading-[1.3] text-[#d8dce8] group-hover:text-[#e8eaf0] transition-colors duration-300 mb-2 md:mb-3"
          >
            {step.text}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.25 }}
            className="text-[13px] md:text-[14px] text-[#424a62] leading-[1.6] md:leading-[1.7] group-hover:text-[#5a6278] transition-colors duration-300"
          >
            {step.sub}
          </motion.p>
        </motion.div>
      </div>

      {/* Divider line (except for last item) */}
      {index < steps.length - 1 && (
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={inView ? { opacity: 1, scaleY: 1 } : {}}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
          className="mt-6 md:mt-8 ml-6 md:ml-7 h-10 md:h-12 w-px bg-gradient-to-b from-[rgba(160,170,210,0.2)] to-transparent origin-top"
        />
      )}
    </motion.div>
  )
}

export default function StorySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  return (
    <section
      id="story"
      className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:py-24"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[750px] w-full"
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20 text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-3 py-1 text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#3d4560] font-sans mb-3 md:mb-4 border border-[rgba(160,170,210,0.2)] rounded-full"
          >
            The Journey
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display font-light text-[clamp(1.8rem,6vw,3rem)] text-[#e8eaf0] mb-3 md:mb-4"
          >
            How we got here
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[13px] md:text-[15px] text-[#5a6278] max-w-[500px] mx-auto px-2"
          >
            Three phases of realization that led to this moment
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <StoryStep key={i} step={step} index={i} />
          ))}
        </div>

        {/* Personalized closing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-[rgba(160,170,210,0.1)]"
        >
          <div className="text-center px-2">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7, type: 'spring' }}
              className="inline-block mb-4"
            >
              <Heart className="w-6 h-6 md:w-7 md:h-7 text-[#d0b8f0] fill-[#d0b8f0]" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="text-[14px] md:text-[15px] text-[#5a6278] mb-3 leading-relaxed"
            >
              This was written for you, Ayesha. Because sometimes the most honest conversations 
              start with admitting what's been left unsaid.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-[12px] md:text-[13px] text-[#3d4560] italic"
            >
              Click the icons above if you want to feel something ✨
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
