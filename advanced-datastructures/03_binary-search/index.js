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


export function binarySearch(arr=[], data, compareFn=(a,b) => a-b) {
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
