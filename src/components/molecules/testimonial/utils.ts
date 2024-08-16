import { TestimonialAuthor } from "~/lib/types/testimonials";

export function formatName(author: TestimonialAuthor) {
  return `${author.firstName} ${author.lastName[0]}`;
}
