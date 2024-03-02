function SumOfFirstNNum(n) {
  if (n === 0) {
    return 0;
  }
  return n + SumOfFirstNNum(n - 1);
}

module.exports = { SumOfFirstNNum };
