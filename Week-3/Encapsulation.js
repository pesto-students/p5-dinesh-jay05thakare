function createStack() {
  // items array is accessible only inside createstack function
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    }
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.push(5);
console.log(stack.pop());
console.log(stack.items); //items array is not accessible here