import Section from "~/components/molecules/section";
import { testimonials } from "./consts";
import Testimonial from "~/components/molecules/testimonial";
import { For } from "solid-js";

export default function Testimonials() {
  return (
    <Section
      heading="Our Testimonials"
      description="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
      href="#"
    >
      <ul class="flex flex-col gap-3">
        <For each={testimonials}>
          {testimonial => (
            <li>
              <Testimonial testimonial={testimonial} />
            </li>
          )}
        </For>
      </ul>
    </Section>
  );
}
