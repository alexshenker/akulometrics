import { Mass } from "./type";

const ounces = (units: number) => ({
  to: (to: Mass) => {
    switch (to) {
      case "mg":
        return units * 28349.5;
      case "g":
        return units * 28.3495;
      case "kg":
        return units / 35.274;
      case "oz":
        return units;
      case "lb":
        return units / 16;
      case "t (metric)":
        return units / 35274;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default ounces;
