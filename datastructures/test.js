function sliceByValue1(set, value) {
  //let set = new Set(arr); // S:O(n)
  for(const s of set) {
    if(s === value) {
      set.delete(s);
      break;
    };
    set.delete(s);
  };
  return set;

};


function sliceByValue2(arr, value) {
  let index = arr.indexOf(value); 
  return arr.slice(index + 1); // S:O(n)
};

let input1 = new Set(['s', 'a', 'n', 'd', 'e']);
let input2 = ['s', 'a', 'n', 'd', 'e'];

let result = sliceByValue1(input1, 'n')
console.log(result, input1);
function sliceByValue(inputSet, value) {
  let set = new Set(inputSet); // S:O(n)
  for(const s of set) {
    if(s === value) {
      set.delete(s);
      break;
    };
    set.delete(s);
  };
  return set;

};
///////////////////////////////////

var lengthOfLongestSubstring = function(str) {
  let set = new Set();
  let sets =  [];
  for(const item of str) {
    if(set.has(item)) {
      //console.log('has', item);
      sets.push(set);
      //
      let slicedSet = sliceByValue(set, item);
      set = slicedSet.add(item);
      continue
    } 
    //console.log(item);
    set.add(item)
  };
  sets.push(set);
  let arr = sets
    .map(set => set.size)
  return Math.max(...arr);
    

    
};

console.log(lengthOfLongestSubstring('dvdf'));


