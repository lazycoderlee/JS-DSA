function reverseString(str) {
  let len = str.length;
  let halfLen = Math.floor(len / 2);
  for (let i = 0; i < halfLen; i++) {
    let temp = str[i];
    str[i] = str[len - 1 - i];
    str[len - 1 - i] = temp;
  }
  return str;
}

console.log(reverseString(['h', 'e', 'l', 'l', '0'])); // Output: "olleh"
