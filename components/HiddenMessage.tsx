'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function HiddenMessage() {
  const [showMessage, setShowMessage] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const hoverTimeRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (dismissed) return

    // Show after 12 seconds
    timeoutRef.current = setTimeout(() => {
      setShowMessage(true)
    }, 12000)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (hoverTimeRef.current) clearTimeout(hoverTimeRef.current)
    }
  }, [dismissed])

  // Also show on extended hover
  const handleMouseEnter = () => {
    if (dismissed) return
    hoverTimeRef.current = setTimeout(() => {
      setShowMessage(true)
    }, 5000)
  }

  const handleMouseLeave = () => {
    if (hoverTimeRef.current) clearTimeout(hoverTimeRef.current)
  }

  return (
    <AnimatePresence>
      {showMessage && !dismissed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 300 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-40 max-w-[320px] md:max-w-[380px]"
        >
          <div className="relative bg-gradient-to-br from-[rgba(160,170,210,0.15)] to-[rgba(100,120,180,0.1)] border border-[rgba(160,170,210,0.3)] backdrop-blur-md rounded-lg p-5 md:p-6 shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setDismissed(true)}
              className="absolute top-3 right-3 p-1 hover:bg-[rgba(160,170,210,0.1)] rounded-full transition-colors"
              aria-label="Close message"
            >
              <X className="w-4 h-4 text-[#5a6278]" />
            </button>

            {/* Animated decoration */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#d0b8f0]"
            />

            {/* Message content */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-[12px] md:text-[13px] text-[#5a6278] leading-relaxed mb-2">
                💫
              </p>
              <p className="text-[14px] md:text-[15px] font-display italic text-[#a8b4d4] leading-relaxed mb-3">
                "Most people would have closed this by now."
              </p>
              <p className="text-[13px] text-[#5a6278] leading-relaxed">
                The fact you're still here means something.
              </p>
              <p className="text-[11px] text-[#3d4560] mt-3 italic opacity-70">
                So let's be honest with each other.
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
