import { Volume } from "./type";

const pints = (units: number) => ({
  to: (to: Volume) => {
    switch (to) {
      case "mL":
        return units * 473.176;
      case "L":
        return units * 0.473176;
      case "fl oz":
        return units * 16;
      case "pt":
        return units;
      case "qt":
        return units / 2;
      case "gal":
        return units / 8;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default pints;
