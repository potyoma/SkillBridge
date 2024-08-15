import { children, ParentProps } from "solid-js";

export default function HeroSectionCtas(props: ParentProps) {
  const safeChildren = children(() => props.children);

  return <div>{safeChildren()}</div>;
}