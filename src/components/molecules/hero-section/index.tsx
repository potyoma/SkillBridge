import { children, ParentProps } from "solid-js";
import HeroSectionContent from "./content";
import HeroSectionCtas from "./ctas";
import HeroSectionHeader from "./header";

function HeroSection(props: ParentProps) {
  const safeChildren = children(() => props.children);

  return <div class="flex flex-col items-center gap-5">{safeChildren()}</div>;
}

HeroSection.Header = HeroSectionHeader;
HeroSection.Content = HeroSectionContent;
HeroSection.Ctas = HeroSectionCtas;

export default HeroSection;
