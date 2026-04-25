'use client'

import { motion } from 'framer-motion'
import { useEmotionalSync } from '@/lib/EmotionalSyncContext'

export default function ScrollProgress() {
  const { emotionalState } = useEmotionalSync()

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#d0b8f0] via-[#a8b4d4] to-[#6b7490] z-50"
      animate={{
        width: `${emotionalState}%`,
        opacity: emotionalState > 0 ? 0.8 : 0,
      }}
      transition={{ duration: 0.3 }}
    />
  )
}
