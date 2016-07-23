class Person {
  constructor(name){
    this.name = typeof name === 'string' ?  Person.capitalize(name) : this.name = 'Anonymous';
  }

  set name (value){
    this._name = Person.capitalize(value);
  }

  get name (){
    return this._name;
  }
  print() {
    console.log(`Hello I am ${this.name}.`);
  }

  static capitalize (word) {
    return word[0].toUpperCase() + word.slice(1);
  }
}

class Employee extends Person {
  constructor(name,job="unemployed"){
    super(name);
    this.job = job;
  }

  print() {
    console.log(`Hello I am ${this.name} and I am a ${this.job}.`);
  }

  printSuper(){
    super.print();
  }
}

var troy = new Person('troy');
var adam = new Employee('adam','driver');
adam.print();
adam.printSuper();
troy.name = 'Harry';
troy.print();

var jane = new Person();

jane.print();

console.log(Person.capitalize('henry'));
