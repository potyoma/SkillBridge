import { ParentProps } from 'solid-js'
import HeroSectionContent from './content'
import HeroSectionCtas from './ctas'
import HeroSectionHeader from './header'

function HeroSection(props: ParentProps) {
  return <div class="flex flex-col items-center gap-5">{props.children}</div>
}

HeroSection.Header = HeroSectionHeader
HeroSection.Content = HeroSectionContent
HeroSection.Ctas = HeroSectionCtas

export default HeroSection
