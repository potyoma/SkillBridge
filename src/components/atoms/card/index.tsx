import { ParentProps } from 'solid-js'
import { twMerge } from 'tailwind-merge'

type CardProps = ParentProps & {
  class?: string
}

export default function Card(props: CardProps) {
  return (
    <div
      class={twMerge(
        'rounded-lg border border-white-95 bg-white p-5',
        props.class,
      )}
    >
      {props.children}
    </div>
  )
}
