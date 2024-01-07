import { Converter } from "../convert";
import { Distance } from "./type";

const yards: Converter<Distance> = (units: number) => ({
  to: (to: Distance) => {
    switch (to) {
      case "mm":
        return units * 914.4;
      case "cm":
        return units * 91.44;
      case "m":
        return units * 0.9144;
      case "km":
        return units / 1093.61;
      case "in":
        return units * 36;
      case "ft":
        return units * 3;
      case "yd":
        return units;
      case "mi":
        return units * 1760;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default yards;
