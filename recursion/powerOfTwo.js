// Function to check if a number is a power of two using recursion
function powerOfTwo(n) {
  if (n == 1) return true; // Base case: 1 is a power of two
  else if (n < 1 || n % 2 != 0) return false;
  return powerOfTwo(n / 2); // Recursive case: divide n by 2 and check again
  // Time Complexity: O(log n)
  // Space Complexity: O(log n) due to recursive stack
}

console.log(powerOfTwo(16)); // Output: true
console.log(powerOfTwo(18)); // Output: false
