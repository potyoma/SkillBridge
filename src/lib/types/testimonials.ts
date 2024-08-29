export type TestimonialAuthor = {
  avatar: string
  avatarAlt: string
  firstName: string
  lastName: string
}

export type TestimonialModel = {
  text: string
  link: string
  author: TestimonialAuthor
}
