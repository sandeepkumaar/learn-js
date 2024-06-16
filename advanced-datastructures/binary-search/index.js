/**
 * search(x): O(log n)
 * insert(x): O(log n) + shift = O(n)
 * delete(x): O(log n) + shift = O(n)
 *
 * If Array is in ASC - compareFn: (a,b) => a - b;
 * DESC - compareFn: (a,b) => b - a;
 *
 * Find last Index or First Index of possible duplicate values
*/


function binarySearch(arr=[], data, compareFn=(a,b) => a-b) {
  let start = 0;
  let end = arr.length -1;
  let resultIndex = -1

  while(start <= end) {
    let mid = Math.floor((start + end)/2);
    let comparison = compareFn(arr[mid], data);
    if(comparison == 0) {
      resultIndex = mid; 
      //break;
      // to find last index for duplicate data
      //start = mid + 1;
      // to find the first index for duplicate data
      end = mid - 1;
    } else if(comparison < 0) {
      start = mid + 1;
    } else {
      end = mid -1;
    };
  }

  return resultIndex;

};
let arr = [92, 14, 1, 27, 16, 15, 21, 98, 21, 21, 21];

/*
let sortedArr = [...arr].sort();
console.log('sortedArray', sortedArr);
let index = binarySearch(arr, 16)
console.log('result', index, arr[index]);
*/
{/*
let nodes = arr.map((item,key) => ({ key ,data: item}));
let compareFn = (a, b) => {
  return b.data - a.data
}
nodes.sort(compareFn);
console.log(nodes);

let result = binarySearch(nodes, {data: 21}, compareFn)
console.log(result);
*/}

let x = [10, 9, 8, 7, 6, 5, 4];
console.log(binarySearch(x, 8, (a, b) => b - a));



