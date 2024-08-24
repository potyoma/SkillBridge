import {
  PricePlan,
  PricePlanFeature,
  PricePlanFeatures,
  RegularityType,
} from "~/lib/types/price-plan";

export const pricePlans: PricePlan[] = [
  {
    name: "Free Plan",
    prices: {
      [RegularityType.monthly]: {
        amount: 0,
        currency: "USD",
      },
      [RegularityType.yearly]: {
        amount: 0,
        currency: "USD",
      },
    },
    features: {
      [PricePlanFeatures.freeCourses]: true,
      [PricePlanFeatures.limitedMaterials]: true,
      [PricePlanFeatures.communitySupport]: true,
      [PricePlanFeatures.noCertification]: true,
      [PricePlanFeatures.ads]: true,
      [PricePlanFeatures.proForums]: false,
      [PricePlanFeatures.earlyAccess]: false,
    },
  },
  {
    name: "Pro plan",
    prices: {
      [RegularityType.monthly]: {
        amount: 79,
        currency: "USD",
      },
      [RegularityType.yearly]: {
        amount: 840,
        currency: "USD",
      },
    },
    features: {
      [PricePlanFeatures.unlimitedAccess]: true,
      [PricePlanFeatures.unlimitedMaterials]: true,
      [PricePlanFeatures.prioritySupport]: true,
      [PricePlanFeatures.certification]: true,
      [PricePlanFeatures.adFree]: true,
      [PricePlanFeatures.proForums]: true,
      [PricePlanFeatures.earlyAccess]: true,
    },
  },
];
