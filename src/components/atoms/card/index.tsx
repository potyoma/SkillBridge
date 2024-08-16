import { children, ParentProps } from "solid-js";
import { twMerge } from "tailwind-merge";

type CardProps = ParentProps & {
  class?: string;
};

export default function Card(props: CardProps) {
  const safeChildren = children(() => props.children);

  return (
    <div
      class={twMerge(
        "p-5 bg-white border border-white-95 rounded-lg",
        props.class
      )}
    >
      {safeChildren()}
    </div>
  );
}
