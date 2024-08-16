export const CourseLevels = {
  Beginner: "Beginner",
  Intermediate: "Intermediate",
  Advanced: "Advanced",
} as const;

export type CourseLevel = (typeof CourseLevels)[keyof typeof CourseLevels];

export type CourseModel = {
  name: string;
  description: string;
  author: string;
  cover: string;
  coverAlt: string;
  lengthWeeks: number;
  level: CourseLevel;
  slug: string;
};
