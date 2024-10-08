import { BenefitModel } from '~/lib/types/benefits'
import { formatCounter } from './utils'
import Button from '~/components/atoms/button'
import ArrowUpRightIcon from '~/assets/icons/arrow-up-right'
import Card from '~/components/atoms/card'
import CardButton from '~/components/atoms/card-button'

type BenefitProps = {
  benefit: BenefitModel
  counter: number
}

export default function Benefit(props: BenefitProps) {
  const benefit = () => props.benefit

  return (
    <Card class="flex flex-col items-end gap-8 px-8 py-7">
      <span class="text-5xl font-bold">{formatCounter(props.counter)}</span>
      <div class="flex flex-col gap-2 self-start">
        <h3 class="text-xl font-semibold">{benefit().heading}</h3>
        <p class="text-sm">{benefit().description}</p>
      </div>
      <CardButton href={benefit().slug} class="p-2">
        <ArrowUpRightIcon class="h-7 w-7 text-orange-50" />
      </CardButton>
    </Card>
  )
}
