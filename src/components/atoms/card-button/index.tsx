import Button, { ButtonProps } from '../button'
import { twMerge } from 'tailwind-merge'

export default function CardButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      class={twMerge('border border-white-95 bg-white-97 py-3.5', props.class)}
    >
      {props.children}
    </Button>
  )
}
