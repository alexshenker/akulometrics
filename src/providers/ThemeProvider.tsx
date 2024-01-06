import { PropsWithChildren, createContext, useState } from "react";
import getSystemTheme from "../utils/getSystemTheme";

export type Theme = "light" | "dark";

export interface ThemeCtx {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

export const themeCtx = createContext<ThemeCtx | null>(null);

const ThemeProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(getSystemTheme());

  return (
    <themeCtx.Provider value={{ theme, setTheme }}>
      {children}
    </themeCtx.Provider>
  );
};

export default ThemeProvider;
