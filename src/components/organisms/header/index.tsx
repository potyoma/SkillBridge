import Button from '~/components/atoms/button'
import Logo from '~/components/atoms/logo'
import PrimaryButton from '~/components/atoms/primary-button'
import BannerCta from '~/components/molecules/banner-cta'
import HeaderMenuButton from '~/components/molecules/header-menu-button'

export default function Header() {
  return (
    <div class="flex flex-col px-3 pt-5">
      <BannerCta href="https://potyoma.xyz">
        Demo 🌟 Need a website? Contact me
      </BannerCta>
      <header class="flex items-center justify-between border-b border-b-white-95 py-3">
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
  )
}
