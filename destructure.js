var array = ["hello","my","friend"];

var [a, b, c] = array;

console.log(a,b,c);

var todo = {
  description: "Hello"
  //completed: false
};

// var {description: message, completed} = todo;
//
// console.log(message,completed, todo);

function getTodoStatus({completed}) {
  if(typeof completed === 'boolean'){
    return [`Todo is ${completed ? '':'not'} completed`];
  } else {
      return [undefined, {error: 'Invalid item'}];
  }
}

var [response,error] = getTodoStatus(todo);
if(error){
  console.log(error.error);
} else {
  console.log(response);
}
