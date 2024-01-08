export const temperatures = ["C", "F", "K"] as const;

export type Temperature = (typeof temperatures)[number];
