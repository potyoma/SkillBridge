import Button from "~/components/atoms/button";
import Logo from "~/components/atoms/logo";
import PrimaryButton from "~/components/atoms/primary-cta";
import HeaderMenuButton from "~/components/molecules/header-menu-button";

export default function Header() {
  return (
    <header class="flex justify-between items-center p-3">
      <Logo />
      <div class="flex items-center gap-2">
        <Button href="#">Sign up</Button>
        <PrimaryButton href="#">Login</PrimaryButton>
        <HeaderMenuButton />
      </div>
    </header>
  );
}
