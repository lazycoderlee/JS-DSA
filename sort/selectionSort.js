// This function sorts an array using the selection sort algorithm.

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

// Time Complexity: O(n^2)
// Space Complexity: O(1)

console.log(selectionSort([-1, 0, -10, 6, 2, 19, 8])); // Output: [-10, -1, 0, 2, 6, 8, 19]
