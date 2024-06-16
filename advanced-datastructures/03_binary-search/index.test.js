import test from 'node:test';
import assert from 'node:assert/strict';
import {
  binarySearch,
  //binarySearchLeft,
  //binarySearchRight,

} from './index.js';

const compare = (a='', b='') => a.localeCompare(b);
let arr = ['a', 'b','c', 'c','d',  'd',  'd', 'd', 'd', 'e', 'e', 'e', 'e', 'f', 'f']

test('binarySearch', () => {
  let index1 = binarySearch(arr, 'd', compare);
  assert.equal(index1, 4);
  let index2 = binarySearch(arr, 'e', compare);
  assert.equal(index2, 9);
})


/*
let arr = [92, 14, 1, 27, 16, 15, 21, 98, 21, 21, 21];
let sortedArr = [...arr].sort();
console.log('sortedArray', sortedArr);
let index = binarySearch(arr, 16)
console.log('result', index, arr[index]);
let nodes = arr.map((item,key) => ({ key ,data: item}));
let compareFn = (a, b) => {
  return b.data - a.data
}
nodes.sort(compareFn);
console.log(nodes);

let result = binarySearch(nodes, {data: 21}, compareFn)
console.log(result);

*/


