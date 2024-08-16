import { children, JSX, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";

export type ButtonProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement> &
  JSX.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  const [localProps, restProps] = splitProps(props, ["class"]);

  const safeChildren = children(() => props.children);

  const isAnchor = !!props.href;

  const className = twMerge(
    "flex items-center justify-center px-6 py-2 rounded-md text-sm",
    localProps.class
  );

  return isAnchor ? (
    <a class={className} {...restProps}>
      {safeChildren()}
    </a>
  ) : (
    <button class={className} {...restProps}>
      {safeChildren()}
    </button>
  );
}
