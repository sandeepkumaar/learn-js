/**
 * Binary search is an optimised search techinique which relies on the sort order of the array
 * Sorting enables a prediction where the element can be and split the array into binary buckets. 
 * one having the element, another doesn't
*/

import getComparator from './comparator.js';



export default function binarySearch(arr, value) {
  let left = 0;
  let right= arr.length - 1;
  let resultIndex = -1;
  
  while(left <= right) {
    let middleIndex = Math.floor((left + right)/2) 
    if(arr[middleIndex] == value) {
      resultIndex = middleIndex;
      break;
    };
    if(arr[middleIndex] < value) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  };
  return resultIndex;

}
/**
 * Test
*/
//console.log(binarySearch([1,2,3, 4, 5,  6, 7], 4));


export function binarySearchComparator(arr, value, comparator) {
  let left = 0;
  let right= arr.length - 1;
  let resultIndex = -1;
  
  while(left <= right) { let middleIndex = Math.floor((left + right)/2) 
    if(comparator.equal(arr[middleIndex], value)) {
      resultIndex = middleIndex;
      break;
    };
    if(comparator.lessThan(arr[middleIndex], value)) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  };
  return resultIndex;

}
/**
 * Test
*/
//const comparatorAsc = getComparator();
//const comparatorDesc = getComparator(undefined, {desc: true});
//console.log(binarySearchComparator([1,2,3, 4, 5, 5, 5, 6, 7], 5, comparatorAsc));
//console.log(binarySearchComparator([1,2,3, 4, 5, 5, 5, 6, 7].reverse(), 5, comparatorAsc));


export function binarySearchLeft(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let resultIndex = -1;
  while(left <= right) {
    let middleIndex = Math.floor((left + rigth)/2)
    if(arr[middleIndex] === value) {
      resultIndex = middleIndex;
      right = middleIndex - 1;
    } else if(arr[middleIndex] < value) {
      left = middleIndex + 1;
    } else {
      right = middleIndex -1;
    };
  };
  return resultIndex;
}

export function binarySearchLeftComparator(arr, value, comparator) {
  let left = 0;
  let right = arr.length - 1;
  let resultIndex = -1;
  while(left <= right) {
    let middleIndex = Math.floor((left + right)/2)
    if(comparator.equal(arr[middleIndex], value)) {
      resultIndex = middleIndex;
      right = middleIndex - 1;
    } else if(comparator.lessThan(arr[middleIndex], value)) {
      left = middleIndex + 1;
    } else {
      right = middleIndex -1;
    };
  };
  return resultIndex;
}

export function binarySearchRight(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let resultIndex = -1;
  while(left <= right) {
    let middleIndex = Math.floor((left + right)/2)
    if(arr[middleIndex] === value) {
      result = middleIndex;
      left = middleIndex + 1;
    } else if(arr[middleIndex] < value) {
      left = middleIndex + 1;
    } else {
      right = middleIndex -1;
    };
  };
  return resultIndex;
}

export function binarySearchRightComparator(arr, value, comparator) {
  let left = 0;
  let right = arr.length - 1;
  let resultIndex = -1;
  while(left <= right) {
    let middleIndex = Math.floor((left + right)/2)
    if(comparator.equal(arr[middleIndex], value)) {
      resultIndex = middleIndex;
      left = middleIndex + 1;
    } else if(comparator.lessThan(arr[middleIndex], value)) {
      left = middleIndex + 1;
    } else {
      right = middleIndex -1;
    };
  };
  return resultIndex;
}
