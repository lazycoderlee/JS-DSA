function removeElement(nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  console.log(nums, 'removeElement Array');
  return x;
}
// Time complexity O(n)
// Space complexity O(n)

console.log(removeElement([0, 2, 4, 5, 2, 3, 2], 2));
