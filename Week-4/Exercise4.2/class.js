var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

// TODO: create the class Teacher and a method teach
const Teacher = function() {

};

// Object.setPrototypeOf(Teacher, Person);
Teacher.prototype = new Person();
// console.log(Object.getPrototypeOf(Teacher));

Teacher.prototype.teach = function(subject){
  return console.log(this.name + ' is now teaching ' + subject);
}


var him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");
