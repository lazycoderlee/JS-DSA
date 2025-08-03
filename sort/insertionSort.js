// This function sorts an array using the insertion sort algorithm.

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let curr = arr[i]; // Current element to be inserted
    // Find the position where current element should be inserted
    let prev = i - 1; // Start from the previous element
    // Shift elements of arr[0..i-1], that are greater than curr,
    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev]; // Move the larger element one position ahead
      prev--; // Move to the previous element
    }
    arr[prev + 1] = curr; // Insert the current element at its correct position
  }
  return arr;
}

// Time Complexity: O(n^2)
// Space Complexity: O(1)

console.log(insertionSort([-1, 3, 4, 2, 9, 0])); // Output: [-1, 0, 2, 3, 4, 9]
