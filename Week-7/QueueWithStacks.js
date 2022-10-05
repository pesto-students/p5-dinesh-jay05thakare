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

let s1 = new Stack();
let s2 = new Stack();

function queuePush(x) {
  s1.push(x);
}

function queuePop() {
  let pop = -1;
  while (!s1.isEmpty()) {
    let curr = s1.pop();
    s2.push(curr);
  }
  
  pop = s2.pop();

  while (!s2.isEmpty()) {
    let curr = s2.pop();
    s1.push(curr);
  }

  console.log(pop);
  return pop;
}

queuePush(1);
queuePush(2);
queuePush(3);
console.log(s1);

queuePop();
console.log(s1);

