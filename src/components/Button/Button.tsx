import { PropsWithChildren } from 'react'
import styles from './Button.module.css'

interface Props {
    onClick: () => void;
}

const Button = (props: PropsWithChildren<Props>): JSX.Element => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
