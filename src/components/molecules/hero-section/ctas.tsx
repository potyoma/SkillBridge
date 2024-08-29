import { ParentProps } from 'solid-js'

export default function HeroSectionCtas(props: ParentProps) {
  return (
    <div class="mt-6 flex w-full items-center justify-center gap-5">
      {props.children}
    </div>
  )
}
