
// Merge function to merge two sorted arrays
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare each element and merge them in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++; // Move the left array index
    } else {
      result.push(right[rightIndex]);
      rightIndex++; // Move the right array index
    }
  }

  // Concatenate the remaining elements
  // (one of these will be empty because we exited the loop)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Merge Sort function
function mergeSort(array) {
  if (array.length <= 1) {
    return array; // Base case: arrays with 0 or 1 element are already sorted
  }

  const middle = Math.floor(array.length / 2); // Find the middle index
  const left = array.slice(0, middle); // Divide the array into left half
  const right = array.slice(middle); // and right half

  // Recursively sort both halves and merge them
  return merge(mergeSort(left), mergeSort(right));
}

// Example usage
const array = [8, 3, 10, 1, 6, 14, 4, 7, 13];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [1, 3, 4, 6, 7, 8, 10, 13, 14]
