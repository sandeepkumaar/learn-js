/**
 * To find words of similar chars. sort all chars in specfic order and check for equality. 
 * Group words that match. 
 * Group using Map(), Array[]. Map checks for matches and also contains the group index to which it needs to update.
 * This pattern is used when we want to group anything based on a previous values
*/


function groupAnagrams(strs) {
  // to keep track of existing values and thier group index
  let map = new Map();
  let group = [];
  for( let str of strs) {
    // sort as new array
    let sorted = str.split('').sort().join();
    if(map.has(sorted)) {
      let groupIndex = map.get(sorted);
      group[groupIndex].push(str);
    } else {
      // creat a new group.
      let groupIndex = group.push([str]) - 1;
      map.set(sorted, groupIndex);
    }
  };
  return group;

};

let strs = ["eat","tea","tan","ate","nat","bat"];

let result = groupAnagrams(strs);

console.log(result);
