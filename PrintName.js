function PrintName(n) {
  if (n == 0) return;
  console.log("Tommy");
  PrintName(n - 1);
}
module.exports = { PrintName };
