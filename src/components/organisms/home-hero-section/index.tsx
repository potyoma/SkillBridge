import PrimaryButton from '~/components/atoms/primary-button'
import SecondaryButton from '~/components/atoms/secondary-button'
import HeroSection from '~/components/molecules/hero-section'
import Clients from '../../molecules/clients'
import HeroVideo from '../../molecules/hero-video'

export default function HomeHeroSection() {
  return (
    <div class="flex flex-col gap-7">
      <HeroSection>
        <HeroSection.Header>
          <h2>
            <span class="text-orange-50">Unlock</span> Your Creative Potential
          </h2>
        </HeroSection.Header>
        <HeroSection.Content>
          <h3 class="text-2xl font-medium">
            with Online Design and Development Courses.
          </h3>
          <p class="text-sm">
            Learn from Industry Experts and Enhance Your Skills.
          </p>
        </HeroSection.Content>
        <HeroSection.Ctas>
          <PrimaryButton href="#">Explore Courses</PrimaryButton>
          <SecondaryButton href="#">View Pricing</SecondaryButton>
        </HeroSection.Ctas>
      </HeroSection>
      <Clients />
      <HeroVideo class="max-h-60 w-full" />
    </div>
  )
}
