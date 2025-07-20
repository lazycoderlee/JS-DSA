// This function finds the single number in an array where every other number appears twice.
// It uses the XOR operation which has a time complexity of O(n) and space complexity of
// O(1). The XOR operation has the property that a ^ a = 0 and a ^ 0 = a, which allows us to
// effectively cancel out the numbers that appear twice.

function singleNumberWithXor(nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
}

console.log(singleNumberWithXor([1, 2, 3, 2, 4, 1, 3])); // Output: 4, since 4 is the only number that appears once

// This function finds the single number in an array where every other number appears twice.
// It uses a hash map to count occurrences of each number, which has a time complexity of O(n)
// and space complexity of O(n). It iterates through the array to build the hash map
// and then iterates through the map to find the number that appears only once.

function singleNumber(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === 1) {
      return nums[i];
    }
  }
}

console.log(singleNumber([1, 2, 3, 2, 4, 1, 3]));
