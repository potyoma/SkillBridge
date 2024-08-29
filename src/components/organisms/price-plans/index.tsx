import { For } from 'solid-js'
import { pricePlans } from './consts'
import PricePlanCard from '../price-plan-card'
import { Regularity } from '~/lib/types/price-plan'

type PricePlansProps = {
  regularity: Regularity
}

export default function PricePlans(props: PricePlansProps) {
  return (
    <div class="flex flex-col gap-7 rounded-md bg-white p-5">
      <For each={pricePlans}>
        {(plan) => <PricePlanCard regularity={props.regularity} plan={plan} />}
      </For>
    </div>
  )
}
