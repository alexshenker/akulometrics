import { Mass } from "./type";

const milligrams = (units: number) => ({
  to: (to: Mass) => {
    switch (to) {
      case "mg":
        return units;
      case "g":
        return units * 1000;
      case "kg":
        return units * (1000 * 1000);
      case "oz":
        return units / 28349.5;
      case "lb":
        return units / 453592;
      case "t (metric)":
        return units * (1000 * (1000 * 1000));
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default milligrams;
