let fibonacci = {
  [Symbol.iterator]() {
    let i = 0;
    let x = 0, y = 1;

    console.log(x);
    console.log(y);

    return {
      next() {
        val = x + y;
        x = y;
        y = val;
        i++;
        return { value: val, done: i > 5 };
      },
    };
  },
};

for (const el of fibonacci) {
  console.log(el);
}
