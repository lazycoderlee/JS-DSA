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

function binarySearch(nums, target) {
  let left = 0; // Initialize left pointer
  let right = nums.length - 1; // Initialize right pointer

  while (right >= left) {
    // Continue while the search space is valid
    let middle = Math.floor(left + right) / 2; // Calculate the middle index
    if (target === nums[middle]) {
      // If the target is found
      return middle;
    } else if (target < nums[middle]) {
      // If the target is less than the middle element
      // Adjust the right pointer to search in the left half
      right = middle - 1;
    } else {
      // If the target is greater than the middle element
      // Adjust the left pointer to search in the right half
      left = middle + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-1, 2, 5, 6, 10, 12, 15], 15));
