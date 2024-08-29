import { For } from 'solid-js'
import {
  PricePlan,
  PricePlanFeature,
  Regularity,
  RegularityType,
} from '~/lib/types/price-plan'
import { featuresDictionary } from './consts'
import CheckIcon from '~/assets/icons/check'
import XMarkIcon from '~/assets/icons/x-mark'
import { twMerge } from 'tailwind-merge'
import PrimaryButton from '~/components/atoms/primary-button'

type PricePlanCardProps = {
  plan: PricePlan
  regularity: Regularity
}

export default function PricePlanCard(props: PricePlanCardProps) {
  const plan = () => props.plan
  const price = () => plan().prices[props.regularity]
  const features = () => plan().features

  const formattedPrice = () =>
    Intl.NumberFormat('en', {
      style: 'currency',
      currency: price().currency,
      roundingMode: 'ceil',
      trailingZeroDisplay: 'stripIfInteger',
    }).format(price().amount)

  return (
    <div class="flex flex-col items-center gap-8 rounded-md border-white-95 bg-white-99 px-5 py-8">
      <span class="w-full rounded-md border border-orange-70 bg-orange-90 px-6 py-2 text-center text-gray-10">
        {plan().name}
      </span>
      <span>
        <span class="text-5xl font-semibold text-gray-15">
          {formattedPrice()}
        </span>
        <span>
          /{props.regularity === RegularityType.monthly ? 'month' : 'year'}
        </span>
      </span>
      <div>
        <div class="flex flex-col items-center gap-5 rounded-t-md border-white-95 bg-white p-5">
          <h3 class="text-lg font-medium text-gray-15">Available Features</h3>
          <For each={Object.keys(features())}>
            {(feature) => {
              const checked = () => features()[feature as PricePlanFeature]
              return (
                <div class="flex items-start gap-3 rounded-md border border-white-95 p-3 text-gray-30">
                  <span
                    class={twMerge(
                      'rounded-md p-2 text-gray-15',
                      checked() ? 'bg-orange-95' : 'border border-white-95',
                    )}
                  >
                    {checked() ? (
                      <CheckIcon class="h-4 w-4" />
                    ) : (
                      <XMarkIcon class="h-4 w-4" />
                    )}
                  </span>
                  {featuresDictionary[feature as PricePlanFeature]}
                </div>
              )
            }}
          </For>
        </div>
        <PrimaryButton href="#" class="w-full rounded-t-none">
          Get Started
        </PrimaryButton>
      </div>
    </div>
  )
}
