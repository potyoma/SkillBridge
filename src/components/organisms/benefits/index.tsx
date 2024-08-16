import SecondaryButton from "~/components/atoms/secondary-button";
import Section from "~/components/molecules/section";
import { benefits } from "./consts";
import { For } from "solid-js";
import Benefit from "~/components/molecules/benefit";

export default function Benefits() {
  return (
    <Section
      heading="Benefits"
      description="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in."
      href="#"
    >
      <ul class="flex flex-col gap-3">
        <For each={benefits}>
          {(benefit, index) => (
            <li>
              <Benefit benefit={benefit} counter={index() + 1} />
            </li>
          )}
        </For>
      </ul>
    </Section>
  );
}
