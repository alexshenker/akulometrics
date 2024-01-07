import { Distance } from "./type";

const millimeters = (units: number) => ({
  to: (to: Distance) => {
    switch (to) {
      case "mm":
        return units;
      case "cm":
        return units * 10;
      case "m":
        return units * 1000;
      case "km":
        return units * (1000 * 1000);
      case "in":
        return units * 25.4;
      case "ft":
        return units * 304.8;
      case "yd":
        return units * 914.4;
      case "mi":
        return units * 1609344;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default millimeters;
