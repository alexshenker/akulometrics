import { Converter } from "../convert";
import { Temperature } from "./type";

const kelvin: Converter<Temperature> = (units: number) => ({
  to: (to: Temperature) => {
    switch (to) {
      case "C":
        return units - 273.15;
      case "F":
        return (units - 273.15) * (9 / 5) + 32;
      case "K":
        return units;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default kelvin;
