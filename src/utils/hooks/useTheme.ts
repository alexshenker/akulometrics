import { useContext } from "react";
import { themeCtx, ThemeCtx } from "../../providers/ThemeProvider";

const useTheme = () => {
  return useContext(themeCtx) as ThemeCtx;
};

export default useTheme;
