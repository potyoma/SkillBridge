import { ParentProps } from 'solid-js'

export default function Badge(props: ParentProps) {
  return (
    <span class="rounded-md border border-white-95 bg-white px-2 py-1 text-sm">
      {props.children}
    </span>
  )
}
