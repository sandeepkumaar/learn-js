/**
 * returns the indexes 
*/

function twoSum(arr, target) {
  let map = {};

  for(let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if(complement in map){
      let index1 = i;
      let index2 = map[complement]
      return [index1, index2]
    };

    // store the current value with index for future matches
    map[arr[i]] = i;

  }

};

// Example usage:
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
