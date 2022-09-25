let arr = [1, 2, 0, 0, 2, 1, 0];
console.log(arr);

let zero = 0;
let one = 0;
let two = 0;

for (let el in arr) {
  if (arr[el] == 0) {
    zero++;
  } else if (arr[el] == 1) {
    one++;
  } else if (arr[el] == 2) {
    two++;
  } else {
    throw "invalid entry";
  }
}

for (let el in arr) {
  if (zero > 0) {
    arr[el] = 0;
    zero--;
  } else if (one > 0) {
    arr[el] = 1;
    one--;
  } else {
    arr[el] = 2;
    two--;
  }
}

console.log(arr);
