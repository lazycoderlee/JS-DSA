// Function to calculate the sum of odd numbers in an array using recursion

let array = [5, 4, 3, 0, 2, 1]; // Global array
function sum(n) {
  // 'n' starts as array.length - 1 and decreases
  let isOdd = array[n] % 2 != 0; // Accesses array[n] first
  let valueToAdd = isOdd ? array[n] : 0;
  if (n == 0) return valueToAdd; // Base case: stops when n reaches 0
  return valueToAdd + sum(n - 1);
}

console.log(sum(array.length - 1)); // Initial call with the last index

function sumArrRecursive(arr, index) {
  // PROBLEM HERE: These lines execute *before* the base case check.
  let isOdd = arr[index] % 2 != 0; // Tries to access arr[index] potentially out-of-bounds
  let check = isOdd ? arr[index] : 0;

  if (index >= arr.length) return check; // Base case: checks if index is out of bounds

  return check + sumArrRecursive(arr, index + 1);
}

console.log(sumArrRecursive([1, 2, 3], 0)); // Initial call with the first index
