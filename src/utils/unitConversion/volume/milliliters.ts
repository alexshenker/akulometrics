import { Converter } from "../convert";
import { Volume } from "./type";

const milliliters: Converter<Volume> = (units: number) => ({
  to: (to: Volume) => {
    switch (to) {
      case "mL":
        return units;
      case "L":
        return units / 1000;
      case "fl oz":
        return units / 29.5735;
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

export default milliliters;
