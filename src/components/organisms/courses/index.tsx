import { For } from "solid-js";
import Course from "~/components/molecules/course";
import Section from "~/components/molecules/section";
import { courses } from "./consts";

export default function Courses() {
  return (
    <Section
      heading="Our Courses"
      description="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
      href="#"
    >
      <ul class="flex flex-col gap-2.5">
        <For each={courses}>{course => <Course course={course} />}</For>
      </ul>
    </Section>
  );
}
