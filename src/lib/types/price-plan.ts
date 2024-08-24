export const RegularityType = {
  monthly: "monthly",
  yearly: "yearly",
} as const;

export type Regularity = (typeof RegularityType)[keyof typeof RegularityType];

export type Price = {
  amount: number;
  currency: string;
};

export const PricePlanFeatures = {
  freeCourses: "freeCourses",
  limitedMaterials: "limitedMaterials",
  communitySupport: "communitySupport",
  certification: "certification",
  adFree: "adFree",
  proForums: "proForums",
  earlyAccess: "earlyAccess",
  unlimitedAccess: "unlimitedAccess",
  unlimitedMaterials: "unlimitedMaterials",
  prioritySupport: "prioritySupport",
  noCertification: "noCertification",
  ads: "ads",
} as const;

export type PricePlanFeature =
  (typeof PricePlanFeatures)[keyof typeof PricePlanFeatures];

export type PricePlan = {
  name: string;
  features: Partial<Record<PricePlanFeature, boolean>>;
  prices: Record<Regularity, Price>;
};
