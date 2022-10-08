var head;

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

function isLoop(node){
  let slow = head;
  let fast = head.next;

  while(slow != fast){
    if(fast == null || fast.next == null){
      return false;
    }

    fast = fast.next.next;
    slow = slow.next;
  }
  return true;
}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);

// creates loop 7 -> 3
head.next.next.next.next.next.next.next = head.next.next;

console.log(isLoop(head));