var head;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function rotateLL(node, k) {
  var head = null;
  let index = 0;
  var prev = null;
  var curr = node;

  // traverse till k
  while (index != k) {
    prev = curr;
    curr = curr.next;
    index++;
  }

  // make k.next = null and set head to k+1 or curr element
  prev.next = null;
  head = curr;

  // traverse till last node
  while (curr.next != null) {
    curr = curr.next;
  }

  // make last nodes next to very first value of ll
  curr.next = node;

  return head;
}

function printLL(node) {
  let arr = [];
  while (node != null) {
    arr.push(node.value);
    node = node.next;
  }
  console.log(arr.join(" -> "));
}

// driver code
head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

console.log("Given LL: ");
printLL(head);

head = rotateLL(head, 4);

console.log("Rotated LL: ");
printLL(head);

// TC = O(n)
// SC = O(1)