function sayHello (name='world') {
  console.log(`Hello ${name}`);
}

sayHello();
sayHello('cake!');

function greetUser (user = {name: 'Anon'}) {
  console.log(`Hello ${user.name}`);
}

greetUser();
greetUser({name:'Tevin'});
