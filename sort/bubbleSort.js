// This function sorts an array using the bubble sort algorithm.

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}

//  Time Complexity: O(n^2)
//  Space Complexity: O(1)

console.log(bubbleSort([-2, 8, 0, 4, 3, 2, -8, 10])); // Output: [-8, -2, 0, 2, 3, 4, 8, 10]
