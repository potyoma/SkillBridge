import { children, splitProps } from "solid-js";
import Button, { ButtonProps } from "../button";
import { twMerge } from "tailwind-merge";

export default function SecondaryButton(props: ButtonProps) {
  const safeChildren = children(() => props.children);
  const [localProps, restProps] = splitProps(props, ["class"]);

  return (
    <Button
      class={twMerge("bg-white text-gray-15 py-2.5 border-white-95", localProps.class)}
      {...restProps}
    >
      {safeChildren()}
    </Button>
  );
}
