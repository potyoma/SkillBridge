import { createSignal } from "solid-js";
import RadioSelect, {
  RadioSelectOption,
} from "~/components/atoms/radio-select";
import Section from "~/components/molecules/section";
import { Regularity, RegularityType } from "~/lib/types/price-plan";
import PricePlans from "../price-plans";

const options: RadioSelectOption[] = [
  { value: RegularityType.monthly, label: "Monthly" },
  { value: RegularityType.yearly, label: "Yearly" },
];

export default function Pricing() {
  const [option, setOption] = createSignal(options[0]);

  return (
    <Section
      heading="Our Pricing"
      description="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
      action={
        <RadioSelect
          options={options}
          onSelect={setOption}
          selected={option()}
          name="pricing-type"
        />
      }
    >
      <PricePlans regularity={option().value as Regularity} />
    </Section>
  );
}
