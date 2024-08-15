import { children, ParentProps } from "solid-js";
import AbstractLines from "~/assets/icons/abstract-lines";
import LightningSolidIcon from "~/assets/icons/lightning-solid";

export default function HeroSectionHeader(props: ParentProps) {
  const safeChildren = children(() => props.children);

  return (
    <div class="flex gap-5 relative items-center rounded-md border-white-95 bg-white p-4 font-semibold text-md">
      <AbstractLines class="absolute -top-3 -left-2" />
      <div class="bg-orange-95 p-2 rounded-md">
        <LightningSolidIcon class="h-6 w-6" />
      </div>
      {safeChildren()}
    </div>
  );
}
