const arr = [10, 1, 7, 2, 1, 16];

let maxDiff = 0;

let curr = arr[0];

for (let i = 1; i < arr.length; i++) {
  let currMin = arr[i] - curr;
  if (currMin > maxDiff) {
    maxDiff = currMin;
  } else if (currMin <= 0) {
    curr = arr[i];
  }
}

console.log(maxDiff);
