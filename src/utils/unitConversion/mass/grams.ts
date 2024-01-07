import { Converter } from "../convert";
import { Mass } from "./type";

const grams: Converter<Mass> = (units: number) => ({
  to: (to: Mass) => {
    switch (to) {
      case "mg":
        return units * 1000;
      case "g":
        return units;
      case "kg":
        return units / 1000;
      case "oz":
        return units / 28.3495;
      case "lb":
        return units / 453.592;
      case "t (metric)":
        return units / (1000 / 1000);
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default grams;
