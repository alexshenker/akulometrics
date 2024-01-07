const stringToNum = (val: string) => {
  if (val === "" || isNaN(Number(val))) {
    return null;
  }

  return parseFloat(val);
};

export default stringToNum;
