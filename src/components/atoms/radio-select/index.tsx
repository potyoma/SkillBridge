import { createUniqueId, For, JSX } from "solid-js";

export type RadioSelectOption = {
  value: string | number | string[] | undefined;
  label: string;
};

type RadioSelectProps = {
  options: RadioSelectOption[];
  selected?: RadioSelectOption;
  onSelect?: (option: RadioSelectOption) => void;
  name: string;
};

export default function RadioSelect(props: RadioSelectProps) {
  const handleChange = (option: RadioSelectOption) => {
    props.onSelect?.(option);
  };

  return (
    <fieldset class="flex p-6 border border-white-95 rounded-lg bg-white">
      <For each={props.options}>
        {option => {
          const id = createUniqueId();

          return (
            <div>
              <input
                class="appearance-none peer"
                type="radio"
                id={id}
                name={props.name}
                value={option.value}
                checked={option.value === props.selected?.value}
                onChange={[handleChange, option]}
              />
              <label
                for={id}
                class="py-3 px-6 rounded-lg transition-colors duration-300 ease-out peer-checked:bg-orange-50 peer-checked:text-white"
              >
                {option.label}
              </label>
            </div>
          );
        }}
      </For>
    </fieldset>
  );
}
