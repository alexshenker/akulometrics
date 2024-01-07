import { Converter } from "../convert";
import { Mass } from "./type";

const kilograms: Converter<Mass> = (units: number) => ({
  to: (to: Mass) => {
    switch (to) {
      case "mg":
        return units * (1000 * 1000);
      case "g":
        return units * 1000;
      case "kg":
        return units;
      case "oz":
        return units * 35.274;
      case "lb":
        return units * 2.20462;
      case "t (metric)":
        return units / 1000;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default kilograms;
