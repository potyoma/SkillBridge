import Button from "~/components/atoms/button";
import Logo from "~/components/atoms/logo";
import PrimaryButton from "~/components/atoms/primary-button";
import BannerCta from "~/components/molecules/banner-cta";
import HeaderMenuButton from "~/components/molecules/header-menu-button";

export default function Header() {
  return (
    <div class="flex flex-col pt-5 px-3">
      <BannerCta href="#">Free Courses 🌟 Sale Ends Soon, Get It Now</BannerCta>
      <header class="flex justify-between items-center py-3 border-b border-b-white-95">
        <Logo />
        <div class="flex items-center gap-5">
          <div class="flex gap-2">
            <Button href="#">Sign up</Button>
            <PrimaryButton href="#">Login</PrimaryButton>
          </div>
          <HeaderMenuButton />
        </div>
      </header>
    </div>
  );
}
