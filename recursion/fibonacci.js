// Fibonacci sequence using recursion

function fib(n) {
  if (n <= 1) return n; // Base case: if n is 0 or 1, return n
  return fib(n - 1) + fib(n - 2); // Recursive case: sum of the two preceding numbers
  // Time Complexity: O(2^n) due to the exponential growth of recursive calls
  // Space Complexity: O(n) due to the recursive stack
}

console.log(fib(5)); // Output: 5 (0, 1, 1, 2, 3, 5)
