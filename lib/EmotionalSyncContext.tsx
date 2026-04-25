'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

interface EmotionalSyncContextType {
  emotionalState: number
  increaseState: (amount?: number) => void
  setEmotionalState: (state: number) => void
}

const EmotionalSyncContext = createContext<EmotionalSyncContextType | undefined>(undefined)

export function EmotionalSyncProvider({ children }: { children: React.ReactNode }) {
  const [emotionalState, setEmotionalState] = useState(0)

  const increaseState = useCallback((amount: number = 5) => {
    setEmotionalState((prev) => Math.min(prev + amount, 100))
  }, [])

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = scrollHeight ? (window.scrollY / scrollHeight) * 100 : 0
      
      // Increase emotional state based on scroll
      if (scrollProgress > emotionalState) {
        setEmotionalState(Math.min(scrollProgress, 100))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [emotionalState])

  return (
    <EmotionalSyncContext.Provider value={{ emotionalState, increaseState, setEmotionalState }}>
      {children}
    </EmotionalSyncContext.Provider>
  )
}

export function useEmotionalSync() {
  const context = useContext(EmotionalSyncContext)
  if (!context) {
    throw new Error('useEmotionalSync must be used within EmotionalSyncProvider')
  }
  return context
}
