export default function GradientBg() {
  return (
    <div className="fixed inset-0 -z-10 min-h-screen w-full bg-[#0a0e27]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background:
              'radial-gradient(circle, rgba(88,94,234,0.4) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl animate-pulse"
          style={{
            background:
              'radial-gradient(circle, rgba(160,170,210,0.3) 0%, transparent 70%)',
            animationDelay: '1s',
          }}
        />
        <div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background:
              'radial-gradient(circle, rgba(100,120,180,0.2) 0%, transparent 70%)',
            animationDelay: '2s',
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(160,170,210,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(160,170,210,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}
