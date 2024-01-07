export const volumes = ["mL", "L", "fl oz", "pt", "qt", "gal"] as const;

export type Volume = (typeof volumes)[number];
