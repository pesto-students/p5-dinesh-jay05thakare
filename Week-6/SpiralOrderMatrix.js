let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const n = matrix.length;
const m = matrix[0].length;

let row_start = 0;
let row_end = n - 1;
let col_start = 0;
let col_end = m - 1;

while (row_start <= row_end && col_start <= col_end) {
  // 1
  for (let col = col_start; col <= col_end; col++) {
    console.log(matrix[row_start][col] + " ");
  }
  row_start++;

  // 2
  for (let row = row_start; row <= row_end; row++) {
    console.log(matrix[row][col_end] + " ");
  }
  col_end--;

  // 3
  for (let col = col_end; col >= col_start; col--) {
    console.log(matrix[row_end][col] + " ");
  }
  row_end--;

  // 4
  for (let row = row_end; row >= row_start; row--) {
    console.log(matrix[row][col_start] + " ");
  }
  col_start++;
}

// TC = O(n^2)
// SC = O(1)
