'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock } from 'lucide-react'

const timeline = [
  {
    title: 'We met',
    description: 'Two people, different worlds',
    icon: '✨',
    delay: 0,
  },
  {
    title: 'We talked',
    description: 'Real conversations, honest moments',
    icon: '💬',
    delay: 0.2,
  },
  {
    title: 'We paused',
    description: 'Silence filled the space between us',
    icon: '⏸️',
    delay: 0.4,
  },
  {
    title: 'Now — clarity',
    description: 'This is what honesty looks like',
    icon: '💫',
    delay: 0.6,
  },
]

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: (typeof timeline)[0]
  index: number
  isLast: boolean
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: item.delay }}
      className="relative flex gap-6 pb-8 md:pb-10 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: item.delay + 0.2 }}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[rgba(160,170,210,0.3)] bg-[rgba(160,170,210,0.08)] flex items-center justify-center text-xl md:text-2xl flex-shrink-0"
        >
          {item.icon}
        </motion.div>

        {/* Connecting line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: item.delay + 0.3 }}
            className="absolute top-14 md:top-16 w-0.5 h-16 md:h-20 bg-gradient-to-b from-[rgba(160,170,210,0.3)] to-transparent origin-top"
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: item.delay + 0.2 }}
        className="pt-2"
      >
        <h3 className="font-display text-[18px] md:text-[20px] font-light text-[#d8dce8] mb-1">
          {item.title}
        </h3>
        <p className="text-[13px] md:text-[14px] text-[#5a6278] leading-relaxed">
          {item.description}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function Timeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  return (
    <section
      id="timeline"
      className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:py-24"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[600px] w-full"
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
            <Clock className="w-3.5 h-3.5" />
            Our Journey
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-[28px] md:text-[36px] font-light text-[#e8eaf0] mb-3"
          >
            A Timeline of Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[14px] text-[#5a6278] max-w-[450px] mx-auto"
          >
            Four moments that matter
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {timeline.map((item, i) => (
            <TimelineItem
              key={i}
              item={item}
              index={i}
              isLast={i === timeline.length - 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
