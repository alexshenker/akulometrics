import { Mass } from "./type";

const metricTons = (units: number) => ({
  to: (to: Mass) => {
    switch (to) {
      case "mg":
        return units * (1000 * (1000 * 1000));
      case "g":
        return units * (1000 * 1000);
      case "kg":
        return units * 1000;
      case "oz":
        return units * 35274;
      case "lb":
        return units * 2204.6226218;
      case "t (metric)":
        return units;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default metricTons;
