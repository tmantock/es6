function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = 0;
}

Person.prototype.growOlder = function(years) {
    if(typeof years === 'number')
        this.age += years
}

var me = new Person('John', 'Doe');

me.growOlder(5);

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  var a = resolveAfter2Seconds(20);
  var b = resolveAfter2Seconds(30);
  return x + await a + await b;
}

add1(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});

async function add2(x) {
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add2(10).then(v => {
  console.log(v);  // prints 60 after 4 seconds.
});

let myPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        if(!true) {
            resolve("Promised!");
        } else {
            reject("Failed");
        }
    }, 1000);
});

myPromise
    .then((success) => {
        console.log(success);
    })
    .catch((reason) => {
        console.log(reason);
    });

function* foo() {
  var index = 0;
  while (index <= 2)
    yield index++;
}

var iterator = foo();
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }