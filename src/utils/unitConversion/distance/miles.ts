import { Converter } from "../convert";
import { Distance } from "./type";

const miles: Converter<Distance> = (units: number) => ({
  to: (to: Distance) => {
    switch (to) {
      case "mm":
        return units * 1609344;
      case "cm":
        return units * 160934.4;
      case "m":
        return units * 1609.344;
      case "km":
        return units * 1.609344;
      case "in":
        return units * 63360;
      case "ft":
        return units * 5280;
      case "yd":
        return units * 1760;
      case "mi":
        return units;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default miles;
