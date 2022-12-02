class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root;

function validateBST(root) {
  if (root == null) {
    return true;
  }

  if (
    (root.left != null && root.value < root.left.value) ||
    (root.right != null && root.value > root.right.value)
  ) {
    return false;
  }

  if (!validateBST(root.left) || !validateBST(root.right)) {
    return false;
  }
  
  return true;
}

root = new Node(5);
root.left = new Node(1);
root.right = new Node(3);

// root.right.left = new Node(3);
// root.right.right = new Node(6);

console.log(validateBST(root));
