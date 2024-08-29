import { CourseLevels, CourseModel } from '~/lib/types/courses'

export const courses: CourseModel[] = [
  {
    name: 'Web Design Fundamentals',
    description:
      'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
    author: 'John Smith',
    lengthWeeks: 4,
    level: CourseLevels.Beginner,
    cover: '/images/courses/Image.png',
    coverAlt: 'A man writing on a note.',
    slug: '#',
  },
  {
    name: 'UI/UX Design',
    description:
      'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.',
    author: 'Emily Johnson',
    lengthWeeks: 6,
    level: CourseLevels.Intermediate,
    cover: '/images/courses/Image-1.png',
    coverAlt: 'A man wireframing.',
    slug: '#',
  },
  {
    name: 'Mobile App Development',
    description:
      'Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.',
    author: 'David Brown',
    lengthWeeks: 8,
    level: CourseLevels.Intermediate,
    cover: '/images/courses/Image-2.png',
    coverAlt: 'A smartphone, a notebook, glasses, and notes on a table.',
    slug: '#',
  },
  {
    name: 'Graphic Design for Beginners',
    description:
      'Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.',
    author: 'Sarah Thompson',
    lengthWeeks: 10,
    level: CourseLevels.Beginner,
    cover: '/images/courses/Image-4.png',
    coverAlt:
      'Hands holding a color pallete, a keyboard, a notebook and a glass of coffee.',
    slug: '#',
  },
  {
    name: 'Font-End Web Development',
    description:
      'Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.',
    author: 'Michael Adams',
    lengthWeeks: 10,
    level: CourseLevels.Intermediate,
    cover: '/images/courses/Image-5.png',
    coverAlt: 'A young ginger woman writing code on a laptop.',
    slug: '#',
  },
  {
    name: 'Advanced JavaScript',
    description:
      'Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.',
    author: 'Jennifer Wilson',
    lengthWeeks: 6,
    level: CourseLevels.Advanced,
    cover: '/images/courses/Image-6.png',
    coverAlt: 'A young brunette woman writing code on a computer.',
    slug: '#',
  },
]
