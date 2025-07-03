function binarySearch(arr, target) {
  // Step 1: Initialize pointers
  let low = 0;
  let high = arr.length - 1;

  // Step 2: Loop while the search space is valid
  while (low <= high) {
    // Step 3: Calculate the middle index
    let mid = Math.floor((low + high) / 2);

    // Step 4: Compare the middle element with the target
    if (arr[mid] === target) {
      return mid; // Found the target, return its index
    } else if (arr[mid] < target) {
      // Target is in the right half, adjust 'low'
      low = mid + 1;
    } else {
      // Target is in the left half, adjust 'high'
      high = mid - 1;
    }
  }

  // Step 5: Target not found
  return -1;
}
