import Badge from "~/components/atoms/badge";
import Card from "~/components/atoms/card";
import SecondaryButton from "~/components/atoms/secondary-button";
import { CourseModel } from "~/lib/types/courses";

type CourseProps = {
  course: CourseModel;
};

export default function Course(props: CourseProps) {
  const course = props.course;

  return (
    <Card class="flex flex-col gap-3">
      <img src={course.cover} alt={course.coverAlt} />
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2.5">
          <div class="flex gap-2.5">
            <Badge>{course.lengthWeeks} Weeks</Badge>
            <Badge>{course.level}</Badge>
          </div>
          <h4 class="font-medium">By {course.author}</h4>
        </div>
        <div class="flex flex-col gap-2.5">
          <h2 class="font-semibold text-lg">{course.name}</h2>
          <p class="text-sm">{course.description}</p>
        </div>
      </div>
      <SecondaryButton
        class="border border-white-95 bg-white-97 text-black"
        href={course.slug}
      >
        Get it Now
      </SecondaryButton>
    </Card>
  );
}
