const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let maxSum = 0;

let currSum = 0;

for (let i of arr) {
  currSum = currSum + i;
  if (currSum > maxSum) {
    maxSum = currSum;
  }
  if (currSum < 0) {
    currSum = 0;
  }
}

console.log(maxSum);

// TC = O(N)
// SC = O(1)
