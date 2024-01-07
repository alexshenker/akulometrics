export const distances = [
  "mm",
  "cm",
  "m",
  "km",
  "in",
  "ft",
  "yd",
  "mi",
] as const;

export type Distance = (typeof distances)[number];
