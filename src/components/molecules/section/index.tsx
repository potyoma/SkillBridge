import { children, ParentProps } from "solid-js";
import SecondaryButton from "~/components/atoms/secondary-button";

type SectionProps = ParentProps & {
  heading: string;
  description: string;
  href: string;
};

export default function Section(props: SectionProps) {
  const safeChildren = children(() => props.children);

  return (
    <section class="flex flex-col gap-8">
      <div class="flex flex-col gap-3 items-start">
        <h2 class="text-3xl font-semibold">{props.heading}</h2>
        <p class="text-sm">{props.description}</p>
        <SecondaryButton href={props.href}>View All</SecondaryButton>
      </div>
      <div>{safeChildren()}</div>
    </section>
  );
}
