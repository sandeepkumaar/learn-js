function maxHeapify(arr, maxIndex, large) {
  let newLarge = large;
  let left = 2 * large + 1;
  let right = 2 * large + 2;

  if(left < maxIndex && arr[left] > arr[newLarge]) {
    newLarge = left;
  }
  if(right < maxIndex && arr[right] > arr[newLarge]) {
    newLarge = right;
  };

  // swap arr if there is a new largeIndex value
  if(large !== newLarge) {
     [arr[large], arr[newLarge]] = [arr[newLarge], arr[large]]
    maxHeapify(arr, maxIndex, newLarge);
  }
}

function sort(arr) {
  let maxIndex = arr.length;
  // last parent
  for(let i = Math.floor(maxIndex/2) - 1; i >=0; i--) {
    maxHeapify(arr, maxIndex, i);
  };

  for(let i = maxIndex - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]
    maxHeapify(arr, i, 0);
  };
  return arr;

};

let x = [4, 6, 3,7, 1, 8,5 ];
let arr = sort(x);
console.log(x);

