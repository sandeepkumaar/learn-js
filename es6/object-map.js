/**

 * Object to Map
 * Object.entries({});
 * Object.fromEntries(Map);
*/

let o = { name: 'sandeep', age: 24 }

let mapObj = new Map(Object.entries(o));

o = Object.fromEntries(mapObj);



/**
 * Array to Map
 * Array.entries() ==> Iterator
 * Array.from(Map);
*/
let arr = [{name: 'sandeep', age: 24, city: 'chn'}, {name: 'navin', age: 20, city: 'cbe'}, {name: 'sandeep', age: 0}];
let map = new Map();
for(const [key, value] of arr.entries()) {
  let {name} = value;
  map.set(name, value);
};

Array.from(map);



/**
 * Array to Set
 * new Set([]);
 * Array.from(set);
*/
let arr = [1, 2, 3];
let set = new Set(arr);
arr = Array.from(set);



