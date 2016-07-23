function add(a,b) {
  console.log(a+b);
  return a + b;
}

var numbers = [4,22];
add(...numbers);

var groupA = [33,99];
var groupB = [11];
var unified = [0,...groupA,...groupB,100];
unified.push(...[55,33]);
console.log(unified);

function greetUsers(group,...names) {
  names.forEach(function (name) {
    console.log(`Hello ${name}. You're a part of the ${group} group`);
  });
}

greetUsers('developers','Jonny','Erica','Bill');
