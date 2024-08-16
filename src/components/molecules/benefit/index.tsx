import { BenefitModel } from "~/lib/types/benefits";
import { formatCounter } from "./utils";
import Button from "~/components/atoms/button";
import ArrowUpRightIcon from "~/assets/icons/arrow-up-right";

type BenefitProps = {
  benefit: BenefitModel;
  counter: number;
};

export default function Benefit(props: BenefitProps) {
  const benefit = props.benefit;

  return (
    <div class="flex flex-col items-end gap-8 p-8 bg-white border border-white-95 rounded-lg">
      <span class="text-5xl font-bold">{formatCounter(props.counter)}</span>
      <div class="self-start flex flex-col gap-2">
        <h3 class="font-semibold text-xl">{benefit.heading}</h3>
        <p class="text-sm">{benefit.description}</p>
      </div>
      <Button
        href={benefit.slug}
        class="bg-white-97 border p-2 border-white-95"
      >
        <ArrowUpRightIcon class="h-7 w-7 text-orange-50" />
      </Button>
    </div>
  );
}
