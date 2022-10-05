var head;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLL(node) {
  var prev = null;
  var curr = node;
  var next = null;

  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  node = prev;
  return node;
}

function printLL(node) {
  let arr = [];
  while (node != null) {
    arr.push(node.value);
    node = node.next;
  }
  console.log(arr.join(" -> "));
}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log("Given LL: ");
printLL(head);

head = reverseLL(head);

console.log("Reversed LL: ");
printLL(head);
