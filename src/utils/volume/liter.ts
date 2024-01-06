import { Volume } from "./type";

const liter = (units: number) => ({
  to: (to: Volume) => {
    switch (to) {
      case "mL":
        return units * 1000;
      case "L":
        return units;
      case "fl oz":
        return units * 33.814;
      case "pt":
        return units / 0.473176;
      case "qt":
        return units / 0.946353;
      case "gal":
        return units / 3.78541;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default liter;
