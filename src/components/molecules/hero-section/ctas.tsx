import { children, ParentProps } from "solid-js";

export default function HeroSectionCtas(props: ParentProps) {
  const safeChildren = children(() => props.children);

  return (
    <div class="flex w-full justify-center gap-5 items-center mt-6">
      {safeChildren()}
    </div>
  );
}
