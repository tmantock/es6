var map = new Map();

map.set('name','Tevin');
map.set('age',23);

var x = map.get('name');

var a = map.has('age');

map.delete('age');

console.log(x,a);

map.clear();

console.log(map.size);
