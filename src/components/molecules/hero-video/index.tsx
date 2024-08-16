import { twMerge } from "tailwind-merge";

type HeroVideoProps = { class?: string };

export default function HeroVideo(props: HeroVideoProps) {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/Zgrm7reyc_A?si=D5I1GOQ5U7I74anW"
      title="YouTube video player"
      // @ts-ignore
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      class={twMerge("rounded-lg", props.class)}
    ></iframe>
  );
}
