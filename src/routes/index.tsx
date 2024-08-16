import MainLayout from "~/components/layouts/main-layout";
import Benefits from "~/components/organisms/benefits";
import HomeHeroSection from "~/components/organisms/home-hero-section";

export default function Home() {
  return (
    <MainLayout>
      <div class="pt-6 flex flex-col gap-8">
        <HomeHeroSection />
        <Benefits />
      </div>
    </MainLayout>
  );
}
