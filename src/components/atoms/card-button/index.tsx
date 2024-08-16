import { children } from "solid-js";
import Button, { ButtonProps } from "../button";
import { twMerge } from "tailwind-merge";

export default function CardButton(props: ButtonProps) {
  const safeChildren = children(() => props.children);

  return (
    <Button
      {...props}
      class={twMerge(
        "border border-white-95 py-3.5 bg-white-97 text-gray-15",
        props.class
      )}
    >
      {safeChildren()}
    </Button>
  );
}
