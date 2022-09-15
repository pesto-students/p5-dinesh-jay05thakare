// BIND
console.log('BIND')

function sum(a, b){
  return this.a + this.b;
}

console.log(sum());
console.log(sum(10, 12));

const sumB = sum.bind({a:40, b:20});
console.log(sumB());


// CALL
console.log()
console.log('CALL')

function greet(){
  // this = obj
  console.log(this.animal, 'sleeps between', this.sleepDuration);
}

var dogs = {
  animal: 'dogs', sleepDuration: '2 to 6 hours'
};

var cats = {
  animal: 'cats', sleepDuration: '8 to 12 hours'
};

greet.call(dogs);
greet.call(cats);


// APPLY
console.log()
console.log('APPLY');

var numbers = [4,2,5,99,10,45];

var max = Math.max.apply(null, numbers);
console.log('Max is ' + max);

var min = Math.min.apply(null, numbers);
console.log('Min is ' + min);