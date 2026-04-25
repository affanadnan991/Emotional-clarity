'use client'

import { useRef, useState, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { cn } from '@/lib/cn'

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const gainRef = useRef<GainNode | null>(null)
  const oscillatorsRef = useRef<OscillatorNode[]>([])
  const isMountedRef = useRef(true)

  useEffect(() => {
    return () => {
      isMountedRef.current = false
      // Cleanup audio on unmount
      if (audioCtxRef.current && oscillatorsRef.current.length > 0) {
        oscillatorsRef.current.forEach((osc) => {
          try {
            osc.stop()
          } catch (e) {
            // Already stopped
          }
        })
      }
    }
  }, [])

  const createAmbient = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext
      const ctx = new AudioCtx()
      
      const masterGain = ctx.createGain()
      masterGain.gain.setValueAtTime(0, ctx.currentTime)
      masterGain.connect(ctx.destination)

      // Beautiful ambient chords - A minor pentatonic
      const frequencies = [
        { freq: 55, amp: 0.08 }, // A2
        { freq: 110, amp: 0.06 }, // A3
        { freq: 138.59, amp: 0.05 }, // C4
        { freq: 164.81, amp: 0.04 }, // E4
        { freq: 220, amp: 0.03 }, // A4
      ]

      frequencies.forEach(({ freq, amp }) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()

        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, ctx.currentTime)
        gain.gain.setValueAtTime(amp, ctx.currentTime)

        osc.connect(gain)
        gain.connect(masterGain)
        osc.start(ctx.currentTime)

        oscillatorsRef.current.push(osc)
      })

      audioCtxRef.current = ctx
      gainRef.current = masterGain
    } catch (error) {
      console.error('Audio initialization failed:', error)
    }
  }

  const toggle = async () => {
    try {
      // For browser autoplay policy compliance
      if (!audioCtxRef.current) {
        createAmbient()
      }

      const gain = gainRef.current
      const ctx = audioCtxRef.current

      if (!gain || !ctx) {
        console.error('Audio context not initialized')
        return
      }

      const next = !playing

      gain.gain.cancelScheduledValues(ctx.currentTime)

      if (next) {
        // Fade in to 0.12
        gain.gain.setTargetAtTime(0.12, ctx.currentTime, 0.3)
      } else {
        // Fade out
        gain.gain.setTargetAtTime(0, ctx.currentTime, 0.5)
      }

      if (isMountedRef.current) {
        setPlaying(next)
      }
    } catch (error) {
      console.error('Toggle failed:', error)
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={playing ? 'Mute ambient sound' : 'Play ambient sound'}
      title={playing ? 'Mute ambient sound' : 'Play ambient sound'}
      className={cn(
        'fixed bottom-8 right-8 z-50 md:bottom-12 md:right-12',
        'w-11 h-11 rounded-full',
        'flex items-center justify-center',
        'border border-[rgba(160,170,210,0.2)]',
        'bg-[rgba(10,14,28,0.7)]',
        'text-[#5a6278]',
        'cursor-pointer transition-all duration-300',
        'hover:border-[rgba(160,170,210,0.4)]',
        'hover:text-[#9098b8]',
        'hover:scale-110',
        'backdrop-blur-md',
        'active:scale-95'
      )}
    >
      {playing ? (
        <Volume2 className="w-5 h-5" />
      ) : (
        <VolumeX className="w-5 h-5" />
      )}
    </button>
  )
}

