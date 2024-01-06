import { Volume } from "./type";

const quarts = (units: number) => ({
  to: (to: Volume) => {
    switch (to) {
      case "mL":
        return units * 946.353;
      case "L":
        return units * 0.946353;
      case "fl oz":
        return units * 32;
      case "pt":
        return units * 2;
      case "qt":
        return units;
      case "gal":
        return units / 4;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default quarts;
