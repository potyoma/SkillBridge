import { ParentProps } from "solid-js";

export default function HeroSectionContent(props: ParentProps) {
  return (
    <div class="flex flex-col items-center text-center gap-5 max-w-72">
      {props.children}
    </div>
  );
}
