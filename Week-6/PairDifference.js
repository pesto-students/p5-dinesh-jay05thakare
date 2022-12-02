const A = [10, 1, 7, 80, 2, 1, 16];
const B = 78;

let x = B + A[0];

for (let el of A) {
  let set = new Set(A);
  if (set.has(x)) {
    console.log(1);
    return 1;
  } else {
    x = B + el;
  }

  if (el == A[A.length - 1]) {
    console.log(0);
    return 0;
  }
}

// TC = O(n)
// SC = O(n)
