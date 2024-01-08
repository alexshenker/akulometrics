import { useMemo, useState } from "react";
import styles from "./Dropdown.module.css";
import Space from "../Space";
import ChevronUp from "../icons/ChevronUp";
import ChevronDown from "../icons/ChevronDown";

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

  const options = useMemo(() => {
    return props.options.filter((o) => o.label !== props.value?.label);
  }, [props.options, props.value?.label]);

  return (
    <div className={styles.container} onMouseLeave={() => setShowMenu(false)}>
      <div className={styles.head} onClick={() => setShowMenu(!showMenu)}>
        <div>{props.value?.label ?? props.placeholder ?? ""}</div>
        {showMenu ? <ChevronUp /> : <ChevronDown />}
      </div>

      {showMenu && (
        <div className={styles.menuContainer}>
          <Space height="3px" />

          <div className={styles.menu}>
            {props.options.length === 0 && (
              <div className={styles.option}>Empty</div>
            )}

            {options.map((o) => {
              return (
                <div
                  key={o.label}
                  className={styles.option}
                  onClick={() => {
                    props.onChange(o);
                    setShowMenu(false);
                  }}
                >
                  {o.label}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
