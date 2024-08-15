import { children, ParentProps } from "solid-js";

export default function HeroSectionContent(props: ParentProps) {
  const safeChildren = children(() => props.children);

  return (
    <div class="flex flex-col items-center text-center gap-5 max-w-72">
      {safeChildren()}
    </div>
  );
}
