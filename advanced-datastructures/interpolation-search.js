
/**
 * [ 5, 10, 15, 20, 25, 30]
 * leftIndex = 0;
 * rightIndex = 6
 * condition 0 < 6
 * rangeDelta = 30 - 5 => 25
 * indexDelta = 0 - 6 => 6
 * valueDelta = 25 - 5 => 20 
 * middleIndex = 0 + (20 * 6) / 25 ==> 5
*/
function interpolationSearch(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while(leftIndex <= rightIndex) {
    // last element - first element
    let rangeDelta =  arr[rightIndex] - arr[leftIndex];
    // value - firstElement
    let valueDelta =  value - arr[leftIndex];
    // lastIndex - firstIndex
    let indexDelta = rightIndex - leftIndex;

    if(!valueDelta) { 
      // not found -1 
      return -1
    };

    if(!rangeDelta) {
      // gives the search index
      return arr[leftIndex] == value ? leftIndex : -1
    };
    // actual core formula - (valueDelta/rangDelta) * indexDelta
    let middleIndex = leftIndex + Math.floor((valueDelta/rangeDelta) * indexDelta);

    if(arr[middleIndex] === value) return middleIndex;

    if(arr[middleIndex] < value) {
      leftIndex = middleIndex + 1;

    } else {
      rightIndex = middleIndex - 1;
    }

  }
  return -1;
}
