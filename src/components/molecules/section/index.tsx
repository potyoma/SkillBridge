import { children, ParentProps, Show } from "solid-js";
import { JSX } from "solid-js";
import SecondaryButton from "~/components/atoms/secondary-button";

type SectionProps = ParentProps & {
  heading: string;
  description: string;
  href?: string;
  action?: JSX.Element;
};

export default function Section(props: SectionProps) {
  const safeChildren = children(() => props.children);
  const safeAction = children(() => props.action);

  return (
    <section class="flex flex-col gap-8">
      <div class="flex flex-col gap-3 items-start">
        <h2 class="text-3xl font-semibold">{props.heading}</h2>
        <p class="text-sm">{props.description}</p>
        <Show when={!!props.href}>
          <SecondaryButton href={props.href}>View All</SecondaryButton>
        </Show>
        <Show when={!!props.action}>
          <div class="flex w-full justify-center">{safeAction()}</div>
        </Show>
      </div>
      <div>{safeChildren()}</div>
    </section>
  );
}
