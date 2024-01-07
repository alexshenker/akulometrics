import { Distance } from "./type";

const kilometers = (units: number) => ({
  to: (to: Distance) => {
    switch (to) {
      case "mm":
        return units * (1000 * 1000);
      case "cm":
        return units * (100 * 1000);
      case "m":
        return units * 1000;
      case "km":
        return units;
      case "in":
        return units * 39370.1;
      case "ft":
        return units * 3280.84;
      case "yd":
        return units * 1093.61;
      case "mi":
        return units / 1.60934;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default kilometers;
