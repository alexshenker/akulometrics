import { PropsWithChildren } from "react";

export interface Props extends React.CSSProperties {}

const Row = (props: PropsWithChildren<Props>): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        ...props,
      }}
    >
      {props.children}
    </div>
  );
};

export default Row;
