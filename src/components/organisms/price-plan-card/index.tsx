import { For } from "solid-js";
import {
  PricePlan,
  PricePlanFeature,
  Regularity,
  RegularityType,
} from "~/lib/types/price-plan";
import { featuresDictionary } from "./consts";
import CheckIcon from "~/assets/icons/check";
import XMarkIcon from "~/assets/icons/x-mark";
import { twMerge } from "tailwind-merge";
import PrimaryButton from "~/components/atoms/primary-button";

type PricePlanCardProps = {
  plan: PricePlan;
  regularity: Regularity;
};

export default function PricePlanCard(props: PricePlanCardProps) {
  const plan = () => props.plan;
  const price = () => plan().prices[props.regularity];
  const features = () => plan().features;

  const formattedPrice = () =>
    Intl.NumberFormat("en", {
      style: "currency",
      currency: price().currency,
      roundingMode: "ceil",
      trailingZeroDisplay: "stripIfInteger",
    }).format(price().amount);

  return (
    <div class="rounded-md bg-white-99 border-white-95 px-5 py-8 flex flex-col gap-8 items-center">
      <span class="rounded-md bg-orange-90 border border-orange-70 text-center text-gray-10 py-2 px-6 w-full">
        {plan().name}
      </span>
      <span>
        <span class="text-gray-15 text-5xl font-semibold">
          {formattedPrice()}
        </span>
        <span>
          /{props.regularity === RegularityType.monthly ? "month" : "year"}
        </span>
      </span>
      <div>
        <div class="flex flex-col items-center gap-5 p-5 border-white-95 rounded-t-md bg-white">
          <h3 class="text-gray-15 font-medium text-lg">Available Features</h3>
          <For each={Object.keys(features())}>
            {feature => {
              const checked = () => features()[feature as PricePlanFeature];
              return (
                <div class="flex gap-3 items-start text-gray-30 rounded-md border border-white-95 p-3">
                  <span
                    class={twMerge(
                      "rounded-md p-2 text-gray-15",
                      checked() ? "bg-orange-95" : "border border-white-95"
                    )}
                  >
                    {checked() ? (
                      <CheckIcon class="w-4 h-4" />
                    ) : (
                      <XMarkIcon class="w-4 h-4" />
                    )}
                  </span>
                  {featuresDictionary[feature as PricePlanFeature]}
                </div>
              );
            }}
          </For>
        </div>
        <PrimaryButton href="#" class="w-full rounded-t-none">
          Get Started
        </PrimaryButton>
      </div>
    </div>
  );
}
