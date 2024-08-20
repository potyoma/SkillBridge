import Card from "~/components/atoms/card";
import { TestimonialModel } from "~/lib/types/testimonials";
import { formatName } from "./utils";
import CardButton from "~/components/atoms/card-button";

type TestimonialProps = {
  testimonial: TestimonialModel;
};

export default function Testimonial(props: TestimonialProps) {
  const testimonial = () => props.testimonial;
  const author = () => testimonial().author;

  return (
    <Card class="p-0 flex flex-col">
      <p class="p-7 text-sm">{testimonial().text}</p>
      <div class="px-7 py-5 flex justify-between items-center border-t border-t-white-95">
        <div class="flex gap-2 items-center">
          <img src={author().avatar} alt={author().avatarAlt} />
          <h3 class="font-semibold">{formatName(author())}</h3>
        </div>
        <CardButton href={testimonial().link}>Read Full Story</CardButton>
      </div>
    </Card>
  );
}
