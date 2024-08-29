import { ParentProps } from 'solid-js'

export default function HeroSectionContent(props: ParentProps) {
  return (
    <div class="flex max-w-72 flex-col items-center gap-5 text-center">
      {props.children}
    </div>
  )
}
