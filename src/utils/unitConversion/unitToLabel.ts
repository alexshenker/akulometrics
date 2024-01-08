import { UnitType } from "./types";

const unitToLabel: Record<UnitType, string> = {
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
  C: "°Celsius",
  F: "°Fahrenheit",
  K: "°Kelvin",
};

export default unitToLabel;
