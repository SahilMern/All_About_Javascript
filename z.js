const findFactoprial = (num) => {
  if (num < 0) {
    console.log("err");
    return false;
  }
  if (num == 0 || num == 1) {
    return 1;
  }
  return num * findFactoprial(num-1)
};
console.log(findFactoprial(5));
