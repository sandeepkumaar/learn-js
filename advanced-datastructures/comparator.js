export function defaultCompare(a, b) {
  if(a === b) return 0;
  return a < b ? -1 : 1
};




export default function getComparator(compareFn=defaultCompare, {desc=false}={}) {
  let compare = compareFn;
  // change inputs for array sorted in descending
  if(desc)  {
    compare = (a, b) => compareFn(b, a);
  }

  let equal = function(a, b) {
    return compare(a, b) === 0;
  };
  let lessThan =  function(a, b) {
    return compare(a, b) < 0;
  };
  let greaterThan = (a, b) => {
    return compare(a, b) > 0;
  };

  let lessThanOrEqual = (a, b) => {
    return lessThan(a, b) || equal(a, b);
  };
  let greaterThanOrEqual = (a, b) => {
    return greatedThan(a, b) || equal(a, b);
  };


  return {
    equal,
    lessThan,
    greaterThan,
    lessThanOrEqual,
    greaterThanOrEqual,
    compare,
  }

}
/**
 * Test
*/

let input = [3, 4, 2, 1]
let comparatorAsc = getComparator(undefined, { desc: false});
let comparatorDesc = getComparator(undefined, { desc: true});
let result = input.sort(comparatorAsc.compare); // ascending - default
//console.log(result);

