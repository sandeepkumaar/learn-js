/**
 * Recurse Object - Deep
*/

const recurseObject = function(obj, kCb, vCb) {

  let newObj = Array.isArray(obj) ? [] : [];
  for(const [key, value] of Object.entries(obj)){
    let newKey = typeof kCb === 'function' ? kCb(key) : key;
    let newValue = typeof value === 'object' 
      ? recurseObject(value, kCb, vCb) 
      : typeof vCb === 'function' ? vCb(value) : value;
    newObj[newKey] = newValue
  }
  return newObj;

}
/**
 * Test
*/

let keyCb = (key) => key + 1;
let valCb = (val) => val + 1;

//console.log(recurseObject({
//  name: 'sk',
//  age: 24,
//  nested: {
//    name: 'nk',
//    age: 4
//  }
//}, keyCb, valCb));
//

console.log(recurseObject([
  1,
  2,
  {
    name: 'sk',
    age: 24
  }
], undefined, valCb));
