import centimeters from "./distance/centimeters";
import feet from "./distance/feet";
import inches from "./distance/inches";
import kilometers from "./distance/kilometers";
import meters from "./distance/meters";
import miles from "./distance/miles";
import millimeters from "./distance/millimeters";
import { Distance } from "./distance/type";
import yards from "./distance/yards";
import grams from "./mass/grams";
import kilograms from "./mass/kilograms";
import metricTons from "./mass/metricTons";
import milligrams from "./mass/milligrams";
import ounces from "./mass/ounces";
import pounds from "./mass/pounds";
import { Mass } from "./mass/type";
import celsius from "./temperature/celsius";
import fahrenheit from "./temperature/fahrenheit";
import kelvin from "./temperature/kelvin";
import { Temperature } from "./temperature/type";
import { UnitType } from "./types";
import floridOunces from "./volume/floridOunces";
import gallons from "./volume/gallons";
import liters from "./volume/liters";
import milliliters from "./volume/milliliters";
import pints from "./volume/pints";
import quarts from "./volume/quarts";
import { Volume } from "./volume/type";

export type Converter<T extends UnitType> = (unit: number) => {
  to: (type: T) => number;
};

export type Convert = {
  distance: Record<Distance, Converter<Distance>>;
  mass: Record<Mass, Converter<Mass>>;
  volume: Record<Volume, Converter<Volume>>;
  temperature: Record<Temperature, Converter<Temperature>>;
};

const convert: Convert = {
  distance: {
    mm: millimeters,
    cm: centimeters,
    m: meters,
    km: kilometers,
    ft: feet,
    in: inches,
    mi: miles,
    yd: yards,
  },
  mass: {
    mg: milligrams,
    g: grams,
    kg: kilograms,
    "t (metric)": metricTons,
    oz: ounces,
    lb: pounds,
  },
  volume: {
    mL: milliliters,
    L: liters,
    "fl oz": floridOunces,
    pt: pints,
    qt: quarts,
    gal: gallons,
  },
  temperature: {
    C: celsius,
    F: fahrenheit,
    K: kelvin,
  },
};

export default convert;
