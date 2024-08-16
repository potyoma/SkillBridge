import { children, ParentProps } from "solid-js";

export default function Badge(props: ParentProps) {
  const safeChildren = children(() => props.children);

  return (
    <span class="text-sm bg-white rounded-md border border-white-95 py-1 px-2">
      {safeChildren()}
    </span>
  );
}
