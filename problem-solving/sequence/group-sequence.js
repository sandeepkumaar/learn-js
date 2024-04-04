/**
 * @param {string} str
 * @param {function} predicate
 * false - add to existing group
 * true - close the grp and create a new grp
*/
function groupSequence(str, predicate) {
  let sets = []; // groups
  let set = new Set(); // group

  // iterator
  for(const s of str) {
    if(predicate(s, set)) {
      sets.push(set);
      set = new Set([s]);
    } else {
      set.add(s);
    };
  };
  sets.push(set);
  return sets;
};

let result = groupSequence('sandeep', function(value, currentSet) {
  return value === 'a';
});
//console.log(result);

let arr = [{name: 'sandeep', age: 24, city: 'chn'}, {name: 'navin', age: 20, city: 'cbe'}, {name: 'sandeep', age: 0}];

function uniqueMap(arr, fn) {
  let map = new Map();
  for(const [key, value] of arr.entries()) {
    let key = cb(value);
    map.set(key, value);
  }
  return map;
};

console.log(uniqueMap(arr, () => {

}));
