export const sampleActionTesting = (num) => {
  console.log(num);
  return {
    type: "TESTING",
    payload: num,
  };
};
