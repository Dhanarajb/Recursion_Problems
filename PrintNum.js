function PrintNum(n) {
  if (n == 0) return;
  console.log(n);
  PrintNum(n - 1);
}
module.exports = { PrintNum };
