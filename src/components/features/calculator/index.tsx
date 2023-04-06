import CatCalculator from "@/components/features/calculator/CatCalculator";
import DogCalculator from "./DogCalculator";
import { useState } from "react";
import { SegmentedControl } from "@mantine/core";

export default function CalculatorTemplate() {
  const [value, setValue] = useState("react");

  return (
    <div>
      <SegmentedControl
        value={value}
        onChange={setValue}
        data={[
          { label: "猫", value: "cat" },
          { label: "犬", value: "ng" },
        ]}
      />
      <div>{value === "cat" ? <CatCalculator /> : <DogCalculator />}</div>
    </div>
  );
}
