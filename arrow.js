var people = ['Tevin','Vikram','John','Adrianna'];

people.forEach((name) => {
  console.log("hello");
  console.log(name);
});

var add = (a,b) => a+b;
var add = (a,b) => { return a + b; };

console.log(add(3,9));

var person = {
  name: 'Tevin',
  likes: ['Games','Programming'],
  generateGreeter: function () {
    return () => {
      console.log(this.name);
    };
  }
};

person.generateGreeter()();
