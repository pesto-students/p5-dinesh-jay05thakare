// Output will be
// Count is 0
// Reason being when createIncrement() is assigned and called,
// the message = 'Count is ${count}' where count at that instance is 0, is set to Count is 0
// when increment() function is called thrice, count becomes 3
// but when log() is called and console.log(message) is requested, message is still 'Count is 0', it isnt 'count is 3'.
// if createIncrement() is called again then message will become 'count is 3'

function createIncrement(){
  let count = 0;

  function increment(){
    count++;
  }

  let message = `Count is ${count}`;

  function log(){
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); //What is logged?