function ReverseAnArray(n, i, j) {
  if (i >= j) {
    return n;
  }
  [n[i], n[j]] = [n[j], n[i]];
  return ReverseAnArray(n, i + 1, j - 1);
}
module.exports = { ReverseAnArray };
