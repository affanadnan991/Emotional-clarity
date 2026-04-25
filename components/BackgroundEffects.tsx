'use client'

export default function BackgroundEffects() {
  return (
    <>
      {/* Large orb - top left */}
      <div
        className="fixed rounded-full pointer-events-none orb orb-1"
        style={{
          width: 'clamp(200px, 40vw, 420px)',
          height: 'clamp(200px, 40vw, 420px)',
          background: '#3b2f7a',
          top: '-10%',
          left: '-8%',
          filter: 'blur(80px)',
          opacity: 0.18,
          animation: 'drift 18s ease-in-out infinite alternate',
        }}
      />
      {/* Medium orb - right side */}
      <div
        className="fixed rounded-full pointer-events-none orb orb-2"
        style={{
          width: 'clamp(150px, 35vw, 360px)',
          height: 'clamp(150px, 35vw, 360px)',
          background: '#1a3a5c',
          top: '40%',
          right: '-10%',
          filter: 'blur(80px)',
          opacity: 0.18,
          animation: 'drift 18s ease-in-out infinite alternate',
          animationDelay: '-6s',
        }}
      />
      {/* Small orb - bottom left */}
      <div
        className="fixed rounded-full pointer-events-none orb orb-3"
        style={{
          width: 'clamp(120px, 30vw, 280px)',
          height: 'clamp(120px, 30vw, 280px)',
          background: '#2e1b5e',
          bottom: '10%',
          left: '20%',
          filter: 'blur(80px)',
          opacity: 0.18,
          animation: 'drift 18s ease-in-out infinite alternate',
          animationDelay: '-12s',
        }}
      />
    </>
  )
}