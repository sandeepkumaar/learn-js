/**
 * Rotate arr by k
 * Here - basically we need to move the element to k index.
 * Sequence for k=2 and let n represent index position for arr [ 0, 1, 2, 3, 4]
 * index 0 should be moved to index 2 for rotation 2
 * f(0) = 2
 * f(1) = 3
 * f(2) = 4
 * f(3) = 0
 * f(4) = 1 
 * f(0) = 2 // getting repeated after  5 terms
 *
 * f(n) = n + 2 % 5
 * ie. 
 *
 * f(n) = n + k % arr.length
*/

function rotate(arr, k) {
  let len = arr.length;
  k = k % len;
  let rotatedArr = new Array(len);
  for(let i = 0; i < arr.length; i++) {
    let rotatedIndex = (i + k) % len;
    //console.log(i, k, rotatedIndex);
    rotatedArr[rotatedIndex] = arr[i];
  }
  return rotatedArr;
};


let arr = [0, 1, 2, 3, 4, 5];
let k = 2;

let result = rotate(arr, k);
console.log(result);

