import BackgroundEffects from '@/components/BackgroundEffects'
import ParticleCanvas from '@/components/ParticleCanvas'
import HeroSection from '@/components/HeroSection'
import StorySection from '@/components/StorySection'
import IntentSection from '@/components/IntentSection'
import ChoiceSection from '@/components/ChoiceSection'
import ClosingSection from '@/components/ClosingSection'
import MusicToggle from '@/components/MusicToggle'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen bg-[#080b14]">
        {/* Background effects */}
        <BackgroundEffects />

        {/* Particle layer */}
        <ParticleCanvas />

        {/* Page sections */}
        <HeroSection />
        <StorySection />
        <IntentSection />
        <ChoiceSection />
        <ClosingSection />

        {/* Ambient music toggle */}
        <MusicToggle />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
