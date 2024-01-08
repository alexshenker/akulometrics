import { Converter } from "../convert";
import { Volume } from "./type";

const floridOunces: Converter<Volume> = (units: number) => ({
  to: (to: Volume) => {
    switch (to) {
      case "mL":
        return units * 29.5735;
      case "L":
        return units / 33.814;
      case "fl oz":
        return units;
      case "pt":
        return units / 16;
      case "qt":
        return units / 32;
      case "gal":
        return units / 128;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default floridOunces;
