const arr = [1, 2, 2, 3];

let set = new Set(arr);

function hasDuplicates() {
  if (set.size != arr.length) {
    return false;
  } else {
    return true;
  }
}

console.log(hasDuplicates());
