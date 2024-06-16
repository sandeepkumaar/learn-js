/**
 * Iterable is an object containing the list which implements the Iterator method
 * Iterator method is a function that returns an object following Iterator protocol
 *
 * Iterator protocol is an object implementing below methods which returns IteratorResult
 * next: () => { value: any, done: boolean } // IteratorResult
 * [return]: (value) => {value: value, done: true} - caller tells to stop the iteration with return value
 * [throw]: (exeption) => {value: any, done: true} - caller tells there is an exception
 * 
*/

function rangeIterator(start=0, end=Infinity, step=1) {
  let iterationCount = 0;
  return {
    next: function() {
      if(start < end) {
        let value = start;
        start = start + step;
        iterationCount++;
        return { value, done: false }
      }
      return {value: iterationCount, done: true}
    }
  }
};

let iterator = rangeIterator(1, 10, 3);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/**
 * Using Symbol
*/
function rangeSymbolIterator(start=0, end=Infinity, step=1) {
  let iterationCount = 0;
  return {
    next: function() {
      if(start < end) {
        let value = start;
        start = start + step;
        iterationCount++;
        return { value, done: false }
      }
      return {value: iterationCount, done: true}
    },
    [Symbol.iterator]() {
      return this;
    }
  }
};

for (let item of rangeSymbolIterator(1, 10, 3)) {
  console.log('rangeSymbolIterator', item);
}

/**
 * Using Generator
*/
function* rangeGenerator(start=0, end=Infinity, step=1) {
  let iterationCount = 0;
  for(let i=start; i < end; i += step) {
    yield i;
  };
  return iterationCount;
};

for (let item of rangeGenerator(1, 10, 3)) {
  console.log('rangeGenerator', item);
};
