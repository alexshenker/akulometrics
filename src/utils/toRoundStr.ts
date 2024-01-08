const toRoundStr = (n: number) => {
  return n.toLocaleString("en-US", { maximumFractionDigits: 10 });
};

export default toRoundStr;
