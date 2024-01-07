import { Distance } from "./distance/type";
import { Mass } from "./mass/type";
import { Volume } from "./volume/type";

const unitToLabel: Record<Distance | Mass | Volume, string> = {
  mm: "Millimeters",
  cm: "Centimeters",
  m: "Meters",
  km: "Kilometers",
  ft: "Feet",
  in: "Inches",
  mi: "Miles",
  yd: "Yards",
  mg: "Milligrams",
  g: "Grams",
  kg: "Kilograms",
  "t (metric)": "Metric tons",
  oz: "Ounces",
  lb: "Pounds",
  mL: "Milliliters",
  L: "Liters",
  "fl oz": "Florid ounces",
  pt: "Pints",
  qt: "Quarts",
  gal: "Gallons",
};

export default unitToLabel;
