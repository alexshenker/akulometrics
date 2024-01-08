import useTheme from "../../utils/hooks/useTheme";
import Button from "../Button/Button";
import styles from "./Header.module.css";
import Moon from "../icons/Moon";
import Sun from "../icons/Sun";

const Header = (): JSX.Element => {
  const t = useTheme();

  return (
    <div className={styles.header}>
      <span>
        <strong>AkuloMetrics</strong> - by Aleksey Shenker{" | "}
        <a href="https://github.com/alexshenker/akulometrics">Github</a>
      </span>

      <Button
        onClick={() => t.setTheme(t.theme === "light" ? "dark" : "light")}
      >
        {t.theme === "dark" ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};

export default Header;
