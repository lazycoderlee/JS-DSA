// Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed.
// If the reversed value overflows the 32-bit signed integer range, return 0.

function reverseInteger(x) {
  let xCopy = x;
  x = Math.abs(x);
  let rev = 0;
  while (x > 0) {
    let last = x % 10;
    rev = rev * 10 + last;
    x = Math.floor(x / 10);
  }
  if (rev > 2 ** 31 - 1) return 0;
  return xCopy < 0 ? -rev : rev;
}

console.log('reverseInteger:', reverseInteger(123)); // 321
