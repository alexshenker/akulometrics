import { Converter } from "../convert";
import { Temperature } from "./type";

const fahrenheit: Converter<Temperature> = (units: number) => ({
  to: (to: Temperature) => {
    switch (to) {
      case "C":
        return (units - 32) * (9 / 5);
      case "F":
        return units;
      case "K":
        return (units - 32) * (9 / 5) + 273.15;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default fahrenheit;
