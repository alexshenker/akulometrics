import { Distance } from "./type";

const centimeters = (units: number) => ({
  to: (to: Distance) => {
    switch (to) {
      case "mm":
        return units * 10;
      case "cm":
        return units;
      case "m":
        return units / 100;
      case "km":
        return units * (100 * 1000);
      case "in":
        return units / 2.54;
      case "ft":
        return units / 30.48;
      case "yd":
        return units / 91.44;
      case "mi":
        return units / 160934.4;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default centimeters;
