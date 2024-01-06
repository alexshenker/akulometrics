import { Distance } from "./type";

const meters = (units: number) => ({
  to: (to: Distance) => {
    switch (to) {
      case "mm":
        return units * 1000;
      case "cm":
        return units * 100;
      case "m":
        return units;
      case "km":
        return units / 1000;
      case "in":
        return units * 39.3701;
      case "ft":
        return units * 3.28084;
      case "yd":
        return units * 0.9144;
      case "mi":
        return units / 1609.34;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default meters;
