'use client'

import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 bg-[#080b14]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-[500px]"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <AlertCircle className="w-16 h-16 text-[#a8b4d4] mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-light text-4xl text-[#e8eaf0] mb-4"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[15px] text-[#5a6278] mb-8"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(160,170,210,0.25)] bg-transparent text-[#a8b4d4] text-[13px] tracking-[0.12em] uppercase font-sans hover:bg-[rgba(160,170,210,0.08)] hover:border-[rgba(160,170,210,0.5)] hover:text-[#d0d8f0] transition-all duration-300"
        >
          Return Home
        </motion.a>
      </motion.div>
    </main>
  )
}
