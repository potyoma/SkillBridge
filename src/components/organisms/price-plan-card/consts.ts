import { PricePlanFeature } from '~/lib/types/price-plan'

export const featuresDictionary: Record<PricePlanFeature, string> = {
  freeCourses: 'Access to selected free courses.',
  unlimitedAccess: 'Unlimited access to all courses.',
  limitedMaterials: 'Limited course materials and resources.',
  unlimitedMaterials: 'Unlimited course materials and resources.',
  communitySupport: 'Basic community support.',
  prioritySupport: 'Priority support from instructors.',
  noCertification: 'No certification upon completion.',
  certification: 'Course completion certificates.',
  ads: 'Ad-supported platform.',
  adFree: 'Ad-free experience.',
  proForums: 'Access to exclusive Pro Plan community forums.',
  earlyAccess: 'Early access to new courses and updates.',
}
