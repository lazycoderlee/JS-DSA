// Function to calculate the sum of an array of numbers using recursion

let array = [5, 4, 3, 0, 2, 1];
function sum(n) {
  if (n == 0) return array[n]; // Base case: if n is 0, return the first element
  return array[n] + sum(n - 1); // Recursive case: add the current element to the sum of the previous elements
}

console.log(sum(array.length - 1));

function sumArrRecursive(arr, index) {
  if (index >= arr.length) return 0; // Base case: if index is out of bounds, return 0
  return arr[index] + sumArrRecursive(arr, index + 1); // Recursive case: add the current element to the sum of the next elements
}

console.log(sumArrRecursive([1, 2, 3], 0));
