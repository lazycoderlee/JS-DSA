function removeDuplicates(n) {
  let k = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] > n[k]) {
      k = k + 1;
      n[k] = n[i];
    }
  }
  console.log(n, 'Array');
  return k + 1;
}
// Time complexity O(n)
// Space complexity O(n)

console.log(removeDuplicates([-2, -2, 0, 0, 1, 2, 2, 3, 4, 4, 5, 6]));
