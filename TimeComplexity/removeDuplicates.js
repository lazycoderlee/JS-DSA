function removeDuplicates(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  console.log(nums, 'Removed duplicates');
  return x + 1;
}
// Time complexity O(n)
// Space complexity O(n)

console.log(removeDuplicates([-2, -2, 0, 0, 1, 2, 2, 3, 4, 4, 5, 6]));
