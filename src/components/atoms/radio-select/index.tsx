import { createUniqueId, For, JSX } from 'solid-js'

export type RadioSelectOption = {
  value: string | number | string[] | undefined
  label: string
}

type RadioSelectProps = {
  options: RadioSelectOption[]
  selected?: RadioSelectOption
  onSelect?: (option: RadioSelectOption) => void
  name: string
}

export default function RadioSelect(props: RadioSelectProps) {
  const handleChange = (option: RadioSelectOption) => {
    props.onSelect?.(option)
  }

  return (
    <fieldset class="flex rounded-lg border border-white-95 bg-white p-6">
      <For each={props.options}>
        {(option) => {
          const id = createUniqueId()

          return (
            <div>
              <input
                class="peer appearance-none"
                type="radio"
                id={id}
                name={props.name}
                value={option.value}
                checked={option.value === props.selected?.value}
                onChange={[handleChange, option]}
              />
              <label
                for={id}
                class="rounded-lg px-6 py-3 transition-colors duration-300 ease-out peer-checked:bg-orange-50 peer-checked:text-white"
              >
                {option.label}
              </label>
            </div>
          )
        }}
      </For>
    </fieldset>
  )
}
