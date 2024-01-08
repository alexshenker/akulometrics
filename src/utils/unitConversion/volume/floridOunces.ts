import { Converter } from "../convert";
import { Volume } from "./type";

const floridOunces: Converter<Volume> = (units: number) => ({
  to: (to: Volume) => {
    switch (to) {
      case "mL":
        return units * 29.5735;
      case "L":
        return units / 1000;
      case "fl oz":
        return units;
      case "pt":
        return units / 473.176;
      case "qt":
        return units / 946.353;
      case "gal":
        return units / 3785.41;
      default: {
        const x: never = to;
        throw new Error(`Unexpected value ${x}`);
      }
    }
  },
});

export default floridOunces;
