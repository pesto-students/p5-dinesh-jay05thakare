var Person = function () {name: 'jay'};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

// TODO: create the class Teacher and a method teach
function Teacher() {
  teach = function(subject) {
    return console.log(this.name + 'is now teaching' + subject);
  }
};

Object.setPrototypeOf(Teacher, Person);
console.log(Object.getPrototypeOf(Teacher));

var him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");
