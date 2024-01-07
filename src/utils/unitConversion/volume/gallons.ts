import { Converter } from "../convert";
import { Volume } from "./type";

const gallons: Converter<Volume> = (units: number) => ({
  to: (to: Volume) => {
    switch (to) {
      case "mL":
        return units * 3785.41;
      case "L":
        return units * 3.78541;
      case "fl oz":
        return units * 128;
      case "pt":
        return units * 8;
      case "qt":
        return units * 4;
      case "gal":
        return units;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default gallons;
