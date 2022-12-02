class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  peek() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }
  isEmpty() {
    return this.items.length == 0;
  }
}

let root;

function levelOrderTraversal(root) {
  let q = new Queue();
  if (root.value == null) {
    return;
  }
  q.push(root);
  while (!q.isEmpty()) {
    let curr = q.pop();
    console.log(curr.value);
    if (curr.left != null) {
      q.push(curr.left);
    }
    if (curr.right != null) {
      q.push(curr.right);
    }
  }
}

root = new Node();
// root.left = new Node(9);
// root.right = new Node(20);
// root.right.left = new Node(15);
// root.right.right = new Node(7);

levelOrderTraversal(root);
