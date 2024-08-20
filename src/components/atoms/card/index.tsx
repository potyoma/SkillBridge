import { ParentProps } from "solid-js";
import { twMerge } from "tailwind-merge";

type CardProps = ParentProps & {
  class?: string;
};

export default function Card(props: CardProps) {
  return (
    <div
      class={twMerge(
        "p-5 bg-white border border-white-95 rounded-lg",
        props.class
      )}
    >
      {props.children}
    </div>
  );
}
