function Palindrome(n) {
  if (n.length === 0 || n.length === 1) return true;
  if (n[0] !== n[n.length - 1]) return false;
  return Palindrome(n.slice(1, -1));
}
module.exports = { Palindrome };
