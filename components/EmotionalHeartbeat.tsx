'use client'

import { motion } from 'framer-motion'
import { useEmotionalSync } from '@/lib/EmotionalSyncContext'

export default function EmotionalHeartbeat() {
  const { emotionalState } = useEmotionalSync()

  // Calculate animation properties based on emotional state
  const animationDuration = emotionalState < 50 ? 1 : 2
  const baseScale = 1 + (100 - emotionalState) * 0.002
  const opacityLevel = 0.6 + emotionalState * 0.004

  return (
    <>
      {/* Main heartbeat pulse - top center */}
      <motion.div
        className="fixed top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
        animate={{
          scale: [1, baseScale, 1],
          opacity: [opacityLevel * 0.3, opacityLevel, opacityLevel * 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: animationDuration,
          ease: 'easeInOut',
        }}
      >
        <div className="w-2 h-2 rounded-full bg-[#d0b8f0]" />
      </motion.div>

      {/* Ambient heartbeat field (behind everything) */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        animate={{
          opacity: [0.01, 0.03, 0.01],
        }}
        transition={{
          repeat: Infinity,
          duration: animationDuration,
          ease: 'easeInOut',
        }}
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            rgba(208, 184, 240, ${emotionalState * 0.002}), 
            transparent 80%)`,
        }}
      />
    </>
  )
}
