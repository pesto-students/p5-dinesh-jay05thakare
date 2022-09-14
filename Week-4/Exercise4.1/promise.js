function getNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

const n = getNumber();
const x = 5;

console.log('Random number generates is: ' + n);

const divisible = new Promise(function (resolve, reject) {
  if (n % x === 0) {
    return reject("divisible by " + x);
  } else {
    return resolve("not divisible by " + x);
  }
})
  .then(console.log)
  .catch(console.log)
  .finally(console.log("Checked divisibility!"));

