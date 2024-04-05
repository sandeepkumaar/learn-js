/**
 * Array as an Iterable
 * Array can be made an iterable using the for..of construct
 * Array.values() ; Array[Symbol.iterator] - returns iterable with values
 * Array.keys() - iterable with keys/index
 * Array.entries() - iterable with key, value
 * Note: 
 * Prefer direct for..of for iterating values or use .entries();
*/

var x = ['a', 'b', 'c'];
for(const item of x) console.log(item); // a, b, c
{
  var iterable = x.values()
  var iterable = x[Symbol.iterator]();
  for(let i of iterable) console.log(i); // a, b, c
}

{
  var iterable = x.keys();
  for(let i of iterable) console.log(i); // 0, 1, 2
}

{
  var iterable = x.entries();
  for(let [index, value] of iterable) console.log({index, value}); // {index: 0, value: 'a'}, {}, {}
}




