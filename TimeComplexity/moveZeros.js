function moveZeros(nums) {
  let lastNonZeroIndex = 0; // Pointer for the position of the last non-zero element
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndex] = nums[i];
      lastNonZeroIndex++;
    }
  }
  // Fill the rest of the array with zeros
  for (let i = lastNonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
}

console.log('moveZeros:', moveZeros([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
