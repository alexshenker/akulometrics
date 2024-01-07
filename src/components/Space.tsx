interface Props {
  height?: string;
}

const Space = (props: Props): JSX.Element => {
  return (
    <div
      style={{
        height: props.height ?? "10px",
        minHeight: props.height ?? "10px",
      }}
    />
  );
};

export default Space;
