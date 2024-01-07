import { PropsWithChildren } from "react";

export interface Props {
  gap?: string;
  justifyContent?: React.CSSProperties["justifyContent"];
  flexDirection?: React.CSSProperties["flexDirection"];
  alignItems?: React.CSSProperties["alignItems"];
}

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
