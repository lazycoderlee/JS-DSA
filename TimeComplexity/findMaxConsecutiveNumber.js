function findMaxConsecutiveNumber(nums) {
  let cCount = 0;
  let mCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      cCount++;
      if (mCount < cCount) {
        mCount++;
      }
    } else {
      mCount = Math.max(cCount, mCount);
      cCount = 0;
    }
  }
  return Math.max(cCount, mCount);
}

console.log(
  'findMaxConsecutiveNumber:',
  findMaxConsecutiveNumber([1, 1, 0, 1, 1, 1])
); // Output: 3
