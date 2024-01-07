import { Converter } from "../convert";
import { Distance } from "./type";

const inches: Converter<Distance> = (units: number) => ({
  to: (to) => {
    switch (to) {
      case "mm":
        return units * 25.4;
      case "cm":
        return units * 2.54;
      case "m":
        return units / 39.37;
      case "km":
        return units / 39370;
      case "in":
        return units;
      case "ft":
        return units / 12;
      case "yd":
        return units / 36;
      case "mi":
        return units / 63360;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default inches;
