'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  alpha: number
  pulse: number
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []
    let W = 0, H = 0

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = document.body.scrollHeight
    }

    const createParticle = (): Particle => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      alpha: Math.random() * 0.35 + 0.05,
      pulse: Math.random() * Math.PI * 2,
    })

    const resetParticle = (p: Particle) => {
      p.x = Math.random() * W
      p.y = Math.random() * H
      p.r = Math.random() * 1.2 + 0.3
      p.vx = (Math.random() - 0.5) * 0.15
      p.vy = (Math.random() - 0.5) * 0.15
      p.alpha = Math.random() * 0.35 + 0.05
      p.pulse = Math.random() * Math.PI * 2
    }

    resize()
    window.addEventListener('resize', resize)
    for (let i = 0; i < 90; i++) particles.push(createParticle())

    const animate = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.pulse += 0.012
        if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) resetParticle(p)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(140,160,210,${p.alpha + Math.sin(p.pulse) * 0.06})`
        ctx.fill()
      })
      animId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ height: '100%' }}
    />
  )
}
