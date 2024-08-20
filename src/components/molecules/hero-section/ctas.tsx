import { ParentProps } from "solid-js";

export default function HeroSectionCtas(props: ParentProps) {
  return (
    <div class="flex w-full justify-center gap-5 items-center mt-6">
      {props.children}
    </div>
  );
}
