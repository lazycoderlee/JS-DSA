// Print All Even Numbers in an Array
let arr = [10, 3, 5, 2, 7, 6, 9];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log('Even Numbers', arr[i]);
  }
}

// Count Negative Numbers in an Array
function countNegativeNumbers(arr1) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < 0) {
      count++;
    }
  }
  return count;
}
let arr1 = [2, -6, 4, 8, 1, -9];
console.log('countNegativeNumbers:', countNegativeNumbers(arr1));

// Find the Smallest Number in an Array
function findSmallest(arr2) {
  let smallest = Infinity;
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < smallest) {
      smallest = arr2[i];
    }
  }
  return smallest;
}

let arr2 = [2, -6, 4, 8, 1, -9];
console.log('findSmallest:', findSmallest(arr2));

// Find the Largest Number in an Array
function findLargest(arr3) {
  let largest = -Infinity;
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] > largest) {
      largest = arr3[i];
    }
  }
  return largest;
}
let arr3 = [2, -6, 4, 8, 1, -9];
console.log('findLargest:', findLargest(arr3));

// Find the Second Largest Number in an Array
function secondLargest(arr4) {
  if (arr4.length < 2) return 'Array should have at least two numbers';
  let first = -Infinity,
    second = -Infinity;
  for (let num of arr4) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second === -Infinity ? 'No second largest found' : second;
}
console.log('secondLargest:', sesecondLargest([0, 3, 5, 2, 7, 9]));
