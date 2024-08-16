import MainLayout from "~/components/layouts/main-layout";
import Benefits from "~/components/organisms/benefits";
import Courses from "~/components/organisms/courses";
import HomeHeroSection from "~/components/organisms/home-hero-section";
import Testimonials from "~/components/organisms/testimonials";

export default function Home() {
  return (
    <MainLayout>
      <div class="pt-6 flex flex-col gap-12">
        <HomeHeroSection />
        <Benefits />
        <Courses />
        <Testimonials />
      </div>
    </MainLayout>
  );
}
