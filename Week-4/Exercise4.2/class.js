var Person = function () {};

 Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

// TODO: create the class Teacher and a method teach
function Teacher() {
  teach: this.teach;
}

Object.setPrototypeOf(Teacher, Person);

var him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");
