import { children, ParentProps } from "solid-js";
import ArrowLongRight from "~/assets/icons/arrow-long-right";
import PrimaryButton from "~/components/atoms/primary-button";

type BannerCtaProps = ParentProps & {
  href: string;
};

export default function BannerCta(props: BannerCtaProps) {
  const safeChildren = children(() => props.children);

  return (
    <PrimaryButton
      href={props.href}
      target="_blank"
      class="flex gap-3 px-2 text-sm"
    >
      {safeChildren()}
      <ArrowLongRight class="w-5 h-5" />
    </PrimaryButton>
  );
}
