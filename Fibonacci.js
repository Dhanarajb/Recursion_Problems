function Fib(n) {
  if (n === 1) return 1;
  if (n === 0) return 0;
  return Fib(n - 1) + Fib(n - 2);
}
module.exports = { Fib };
