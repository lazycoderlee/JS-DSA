// This function sorts an array using the merge sort algorithm.

function sortArray(arr) {
  if (arr.length <= 1) return arr; // Base case: if the array has one or no elements, it is already sorted
  let mid = Math.floor(arr.length / 2); // Find the middle index
  let left = sortArray(arr.slice(0, mid)); // Recursively sort the left half
  let right = sortArray(arr.slice(mid)); // Recursively sort the right half
  return merge(left, right); // Merge the sorted halves
}

// Helper function to merge two sorted arrays
function merge(left, right) {
  let res = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]); // If left element is smaller, add it to the result
      i++;
    } else {
      res.push(right[j]); // If right element is smaller or equal, add it to the result
      j++;
    }
  }
  return [...res, ...left.slice(i), ...right.slice(j)]; // Add any remaining elements from both halves
}

// Time Complexity: O(n log n)
// Space Complexity: O(n)

console.log(sortArray([-1, 2, 5, 3, 4, 7, 9, 0, -12, 6])); // Output: [-12, -1, 0, 2, 3, 4, 5, 6, 7, 9]
