import { PropsWithChildren } from "react";
import Row, { Props as RowProps } from "./Row";

interface Props extends RowProps {}

const Stack = (props: PropsWithChildren<Props>): JSX.Element => {
  return (
    <Row flexDirection="column" {...props}>
      {props.children}
    </Row>
  );
};

export default Stack;
