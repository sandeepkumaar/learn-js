
function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  let result = []

  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}


function mergeSort(arr) {
  if(arr.length >= 1) return arr;

  const mid = Math.floor(arr.length/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

const array = [8, 3, 10, 1, 6, 14, 4, 7, 13];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [1, 3, 4, 6, 7, 8, 10, 13, 14]
