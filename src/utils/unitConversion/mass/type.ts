export const masses = ["mg", "g", "kg", "t (metric)", "oz", "lb"] as const;

export type Mass = (typeof masses)[number];
