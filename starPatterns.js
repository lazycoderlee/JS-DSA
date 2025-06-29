// Pattern 1: Print nxn Star Square
// Output:
// * * * *
// * * * *
// * * * *
// * * * *

let n = 4;
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j < n; j++) {
    row += '*';
  }
  console.log(row);
}

// Pattern 2: Right-Angled Star Triangle
// Output:
// *
// * *
// * * *
// * * * *

let n2 = 4;
for (let i = 0; i < n2; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}

// Pattern 3: Print a Right-Angled Number Triangle
// Output:
// 1
// 1 2
// 1 2 3
// 1 2 3 4

let n3 = 4;
for (let i = 0; i < n3; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row += j + 1;
  }
  console.log(row);
}

// Pattern 4: Print a Right-Angled Triangle of Repeated Numbers
// Output:
// 1
// 2 2
// 3 3 3
// 4 4 4 4

let n4 = 4;
for (let i = 0; i < n4; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row += i + 1;
  }
  console.log(row);
}

// Pattern 5: Print a Reverse Right-Angled Triangle of Increasing Numbers
// Output:
// 1 2 3 4
// 1 2 3
// 1 2
// 1

let n5 = 4;
for (let i = 0; i < n5; i++) {
  let row = '';
  for (let j = 0; j < n5 - i; j++) {
    row += j + 1;
  }
  console.log(row);
}

// Pattern 6: Print a Right-Aligned Right-Angled Triangle of Stars
// Output:
//       *
//     * *
//   * * *
// * * * *

let n6 = 4;
for (let i = 0; i < n6; i++) {
  let row = '';
  for (let j = 0; j < n6 - (i + 1); j++) {
    row += ' ';
  }
  for (let k = 0; k < i + 1; k++) {
    row += '*';
  }
  console.log(row);
}

// Pattern 7: Print a Right-Angled Triangle of Alternating 1s and 0s
// Output:
// 1
// 1 0
// 1 0 1
// 1 0 1 0

let n7 = 4;
for (let i = 0; i < n7; i++) {
  let row = '';
  let toggle = 1;
  for (let j = 0; j < i + 1; j++) {
    row += toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}

// Pattern 8: Right-Angled Triangle of Alternating 1s and 0s (Global Toggle)
// Output:
// 1
// 0 1
// 0 1 0
// 1 0 1 0

let n8 = 4;
let toggle = 1;
for (let i = 0; i < n8; i++) {
  let row = '';
  for (let j = 0; j < i + 1; j++) {
    row += toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}
