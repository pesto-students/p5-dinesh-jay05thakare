// stack implementation
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0) {
      return "No element in stack";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }
}

// checks if opening and closing brackets are of same type
function isMatch(open, close) {
  if (open == "(" && close == ")") {
    return true;
  } else if (open == "{" && close == "}") {
    return true;
  } else if (open == "[" && close == "]") {
    return true;
  }
  return false;
}

function ParenthesisCheck(exp) {
  let stack = new Stack();
  let open = new Set(["(", "{", "["]); //for has function
  let i = 1; //exp index

  stack.push(exp[0]);

  while (!stack.isEmpty() || i < exp.length) {
    let curr = exp[i];

    // if open barcket then push in stack
    if (open.has(curr)) {
      stack.push(curr);
    } else {
      // if matching barckets then pop from stack else return false
      if (isMatch(stack.peek(), curr)) {
        stack.pop();
      } else {
        return false;
      }
    }
    i++;
  }
  return true;
}

let exp = "[()]{}{()()}";

console.log(ParenthesisCheck(exp));

// TC = O(n)
// SC = O(1)