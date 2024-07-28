/**
 * For insert and delete we need to find the index/element on which we need to move towards
 * for insert - last index + 1 ie. arr.length
 * for delete - current index and move i + 1 to i
*/
/**
 * [0, 1, 2, 3, 4, 5] - insert at index 3
 * use i + 1 ie. arr.length as the place to move the elements
 * shift all elements from behind untill index 3 is reached. 
 * on index 3 insert the element
 * skip the rest
*/
export const insert = function(arr, index, value) {
  if(index > arr.length || index < 0) throw Error('Index out of bounds');
  for(let i = arr.length; i > 0 ; i--) {
    if(i > index) {
      arr[i] = arr[i - 1];  // i = arr.length which is 1 more than index
    } else if(i == index) {
      arr[i] = value;
    } else {
      break;
    }
  }
  
  return arr;
};

export const search = function(arr, value) {
  for(let i = 0; i < arr.length; i++) {
    if(value === arr[i]) {
      return i;
    }
  };
  return -1;
};

/**
 * For delete, 
 * find the index where the value is present
 * start from that index and replace with next value until len-1
 * reduce the length-- so last element is skipped
*/
export const deleteArr = function(arr, value) {
  let deleteIndex = search(arr, value);
  console.log(deleteIndex)
  if(deleteIndex == -1) return arr;

  for(let i = deleteIndex; i < arr.length -1; i++) {
    arr[i] = arr[i + 1]
  };
  arr.length--;
  return arr;
};

/**
 * reverse
 * two pointers - start, end - swap
*/

export const reverse = function(arr) {
  let start = 0;
  let end = arr.length - 1;
  while(start < end) {
    let a = arr[start]
    let b = arr[end];
    // swap
    arr[start] = b;
    arr[end] = a;
    // iterate
    start++;
    end--;
  }
  return arr;
}

