import { splitProps } from 'solid-js'
import Button, { ButtonProps } from '../button'
import { twMerge } from 'tailwind-merge'

export default function SecondaryButton(props: ButtonProps) {
  const [localProps, restProps] = splitProps(props, ['class'])

  return (
    <Button
      class={twMerge(
        'border-white-95 bg-white py-2.5 text-gray-15',
        localProps.class,
      )}
      {...restProps}
    >
      {props.children}
    </Button>
  )
}
