import { JSX, splitProps, children } from "solid-js";
import { twMerge } from "tailwind-merge";
import Button from "../button";

export default function PrimaryButton(
  props: JSX.ButtonHTMLAttributes<HTMLButtonElement> &
    JSX.AnchorHTMLAttributes<HTMLAnchorElement>
) {
  const safeChildren = children(() => props.children);
  const [localProps, restProps] = splitProps(props, ["class"]);

  return (
    <Button
      class={twMerge("bg-orange-50 text-white py-3", localProps.class)}
      {...restProps}
    >
      {safeChildren()}
    </Button>
  );
}
