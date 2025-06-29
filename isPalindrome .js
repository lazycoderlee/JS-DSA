// Write a function isPalindrome(x) that takes an integer x and returns true
// if it reads the same backward and forward; otherwise false.

function isPalindrome(x) {
  if (x < 0) return false;
  let xCopy = x;
  let rev = 0;
  while (x > 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }
  return rev === xCopy;
}

console.log('isPalindrome:', isPalindrome(121));
