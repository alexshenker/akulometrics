import { Converter } from "../convert";
import { Mass } from "./type";

const pounds: Converter<Mass> = (units: number) => ({
  to: (to: Mass) => {
    switch (to) {
      case "mg":
        return units * 453592;
      case "g":
        return units * 453.592;
      case "kg":
        return units * 0.453592;
      case "oz":
        return units * 16;
      case "lb":
        return units;
      case "t (metric)":
        return units / 2204.62;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default pounds;
