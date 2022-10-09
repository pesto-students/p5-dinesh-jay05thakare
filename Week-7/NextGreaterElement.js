class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    return this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }
}

function nextGreater(arr) {
  let stack = new Stack();
  let result = [];
  let n = arr.length;

  for (let i = n - 1; i >= 0; i--) {
    if (stack.isEmpty()) {
      result.push(-1);
      stack.push(arr[i]);
    } else if (arr[i] < stack.peek()) {
      result.push(stack.peek());
      stack.push(arr[i]);
    } else {
      stack.pop();
      i++;
    }
  }

  return result.reverse();
}

let arr = [6, 8, 0, 1, 3];

console.log(nextGreater(arr));

// TC = O(N)
// SC = O(N)
