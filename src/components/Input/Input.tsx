import styles from "./Input.module.css";

type Props = {
  value: string | null;
  onChange: (s: string) => void;
};

const Input = (props: Props): JSX.Element => {
  return (
    <input
      className={styles.input}
      type={"text"}
      value={props.value ?? ""}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};

export default Input;
