import { Distance } from "./type";

const feet = (units: number) => ({
  to: (to: Distance) => {
    switch (to) {
      case "mm":
        return units * 304.8;
      case "cm":
        return units * 30.48;
      case "m":
        return units / 3.281;
      case "km":
        return units / 3281;
      case "in":
        return units * 12;
      case "ft":
        return units;
      case "yd":
        return units * 3;
      case "mi":
        return units / 5280;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default feet;
