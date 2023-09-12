/**
 * @param { array } arr
 * @param { string } value
 * @returns { array } 
*/
function getSequenceByValue(arr, value) {
  return arr.filter((item, index) => {
    return Math.floor(item) === Math.floor(value); 
  })

};


/**
 * Test
*/
//let input = [1.0, 1.2, 1.4, 3.0, 3.5, 3.6, 3.8, 4.9];
//let result = getSequenceByValue(input, 3); // [3.0, 3.5, 3.6, 3.8];
//
//console.log(result);
import{ 
  binarySearchComparator, 
  binarySearchLeftComparator, 
  binarySearchRightComparator,
} from '../binary-search.js';
import getComparator from '../comparator.js';

let comparator = getComparator((_a, _b) => {
  let a = Math.floor(_a);
  let b = Math.floor(_b);
  if(a === b) return 0;
  return a < b ? -1 : 1;
})
function findRelatedNumberSequence(arr, value) {
  //let index = binarySearchComparator(arr, value, comparator);
  let leftIndex = binarySearchLeftComparator(arr, value, comparator);
  let rightIndex = binarySearchRightComparator(arr, value, comparator);
  return [leftIndex, rightIndex];

}


//function findNumbersWithSameWholePart(input, index) {
//  const target = Math.floor(input[index]); // Get the whole number part
//  const leftIndex = binarySearchLeft(input, target);
//  const rightIndex = binarySearchRight(input, target);
//
//  return input.slice(leftIndex, rightIndex + 1);
//}

const input = [1.0, 1.2, 3.1, 3.5, 3.6, 3.7, 3.8, 3.9, 4.9];
const result = findRelatedNumberSequence(input, 3);

console.log(result);

//const index = 5; // Index of the number 3.6
//
//const result = findNumbersWithSameWholePart(input, index);
//console.log(result); // Output: [3, 3.5, 3.6, 3.8]
