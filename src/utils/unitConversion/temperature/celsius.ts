import { Converter } from "../convert";
import { Temperature } from "./type";

const celsius: Converter<Temperature> = (units: number) => ({
  to: (to: Temperature) => {
    switch (to) {
      case "C":
        return units;
      case "F":
        return units * (9 / 5) + 32;
      case "K":
        return units + 273.15;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default celsius;
