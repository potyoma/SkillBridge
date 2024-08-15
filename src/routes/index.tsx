import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import MainLayout from "~/components/layouts/main-layout";
import HomeHeroSection from "~/components/organisms/home-hero-section";

export default function Home() {
  return (
    <MainLayout>
      <div class="pt-6">
        <HomeHeroSection />
      </div>
    </MainLayout>
  );
}
