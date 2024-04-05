/**
 * Set 
*/
function isSuperSet(array, subArray) {
  let set = new Set(array);
  for(const item of subArray) {
    if(!set.has(item)) return false
  };
  return true;

};


function union(arr1, arr2) {
  let unionArr = [...arr1, arr2];
  return new Set(unionArr);

};

function intersection(arr1, arr2) {
  let set = new Set(arr1);
  let intersectionSet = new Set();
  for(const item of arr2) {
    if(set.has(item)) intersectionSet.add(item);
  }
  return intersectionSet
};

function difference(arr1, arr2) {
  let set = new Set(arr1);
  for(const item of arr2) {
    set.delete(item);
  }
  return set;
};

function symmetricDifference(arr1, arr2) {
  let set = new Set(arr1);
  for(const item of arr2) {
    let bool = set.delete(item);
    if(!bool) {
      set.add(item);
    };
  }
}

// conversions
/**
 * Object to Map
 * Map([[key, value], [key, value]]);
*/
let o = { name: 'sandeep', age: 24 }
let map = new Map(Object.entries(o));
o = Object.fromEntries(map);


/**
 * Array to Map
 * Map to Array ; Array.from(map);
*/
let arr = ['a', 'b', 'c'];
let map = new Map();
for(const [key, value] of arr.entries()) {
  map.set(key, value);
}

let arr = [{name: 'sandeep', age: 24, city: 'chn'}, {name: 'navin', age: 20, city: 'cbe'}, {name: 'sandeep', age: 0}];
let map = new Map();
for(const [key, value] of arr.entries()) {
  let {name} = value;
  map.set(name, value);
};

Array.from(map);


/**
 * Array to Set
 * Set to Array 
*/
let arr = [1, 2, 3];
let set = new Set(arr);
arr = Array.from(set);




