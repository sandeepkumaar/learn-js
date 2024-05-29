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

// Iterator protocol
let arr = ['a', 'b', 'c'];
let iterator = {
  index: 0, // head
  next: function() {
    if(this.index < arr.length) {
      return {
        value: arr[this.index++],
        done: false
      }
    } else {
      return { done: true }
    }

  }
};
console.log('--------- simple Iterator -----------');
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/**
 * Iterable is an object that has the list of items and implements an iterator
 * ie. [Symbol.iterator()]
*/

let iterable = {
  arr: ['a', 'b', 'c'],
  iterator: () => { // Iterable implements Iterator method
    let index = 0;
    let next = function() { 
      // iterator protocol
      if(index < iterable.arr.length) {
        return {
          value: iterable.arr[index++],
          done: false
        }
      } else {
        return { done: true }
      }
    }
    return { // reuturns Iterator Protocol object
      next,
    }
  }
};

let customIterator = iterable.iterator();

console.log('--------- custom Iterator -----------');
console.log(customIterator.next());
console.log(customIterator.next());
console.log(customIterator.next());
console.log(customIterator.next());
console.log(customIterator.next());


/**
 * Using built-in [Symbol.Iterator]() {}
*/
/*
let iterable2 = {
  arr: ['a', 'b', 'c'],
  [Symbol.iterator]() { // Iterable implements Iterator method
    let index = 0;
    let next = function() { 
      // iterator protocol
      if(index < iterable.arr.length) {
        return {
          value: iterable.arr[index++],
          done: false
        }
      } else {
        return { done: true }
      }
    }
    return { // reuturns Iterator Protocol object
      next,
    }
  }
};
*/

let iterable2 = {
  arr: ['a', 'b', 'c'],
  index: 0,
  next: function() { 
    // iterator protocol
    if(this.index < iterable.arr.length) {
      return {
        value: iterable.arr[this.index++],
        done: false
      }
    } else {
      return { done: true }
    }
  },
  [Symbol.iterator]() { // Iterable implements Iterator method
    this.index = 0;
    return this;
  }
};

let builtInIterator = iterable2[Symbol.iterator]();
console.log('--------- builtin Iterator -----------');
console.log(builtInIterator.next(), builtInIterator.index);
console.log(builtInIterator.next(), builtInIterator.index);
console.log(builtInIterator.next(), builtInIterator.index);
console.log(builtInIterator.next(), builtInIterator.index);
console.log(builtInIterator.next(), builtInIterator.index);



console.log('--------- for of  -----------');
for(let item of iterable2) {
  console.log(item);
};
