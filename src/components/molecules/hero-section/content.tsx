import { children, ParentProps } from "solid-js";

export default function HeroSectionContent(props: ParentProps) {
  const safeChildren = children(() => props.children);

  return <div>{safeChildren()}</div>;
}
