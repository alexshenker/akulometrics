import { useState } from "react";
import styles from "./Dropdown.module.css";
import Space from "../Space";

interface Option {
  label: string;
}

interface Props<T extends Option> {
  value: T | null;
  options: readonly T[];
  onChange: (val: T | null) => void;
  placeholder?: string;
}

const Dropdown = <T extends Option>(props: Props<T>): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.container} onMouseLeave={() => setShowMenu(false)}>
      <div className={styles.head} onClick={() => setShowMenu(!showMenu)}>
        {props.value?.label ?? props.placeholder ?? ""}
      </div>

      {showMenu && (
        <>
          <Space height={"3px"} />
          <div className={styles.menu}>
            {props.options.map((o) => {
              return (
                <div
                  className={styles.option}
                  onClick={() => props.onChange(o)}
                >
                  {o.label}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
