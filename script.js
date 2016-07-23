function foo() {
  for (let i = 0; i < 4; i++){
    console.log(i);
  }

  for (let i = 0; i < 4; i++){
    console.log(i);
  }
}

class Hello {
  constructor (name) {
    this.name = name;
  }

  speak () {
    return `Hello World my name is ${this.name}`;
  }
}

class World extends Hello {
  constructor(name,age){
    super(name);
    this.age = age;
  }

  speak () {
    return super.speak() + `. I am ${this.age}, and I am ready to take you on!`;
  }
}

var me = new World("Tevin",22);

me.speak();
