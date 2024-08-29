import { ParentProps } from 'solid-js'
import AbstractLines from '~/assets/icons/abstract-lines'
import LightningSolidIcon from '~/assets/icons/lightning-solid'

export default function HeroSectionHeader(props: ParentProps) {
  return (
    <div class="text-md relative flex w-full items-center gap-5 rounded-md border-white-95 bg-white p-4 font-semibold">
      <AbstractLines class="absolute -left-2 -top-3" />
      <div class="rounded-md bg-orange-95 p-2">
        <LightningSolidIcon class="h-6 w-6" />
      </div>
      {props.children}
    </div>
  )
}
