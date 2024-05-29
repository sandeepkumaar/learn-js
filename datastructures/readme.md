## Iterators
- Iterable is an object containing the list which implements the Iterator method
- Iterator method is a function that returns an object following Iterator protocol

- Iterator protocol is an object implementing below methods which returns IteratorResult
- next: () => { value: any, done: boolean } // IteratorResult
- [return]: (value) => {value: value, done: true} - caller tells to stop the iteration with return value
- [throw]: (exeption) => {value: any, done: true} - caller tells there is an exception

check js for examples
```
We already have builtin iterables
- Array
- Set
- Object
- Map 
- WeakSet 
- WeakMap
- string
- regexp,
- Generator

> Note: 2 ways to iterate over the elements
- Calling next()
- Using for..of loop which internally calls next()

> Note: Difference between normal array methods vs itertors
> Iterator Object is *lazy initialized*. meaning it gets the value only when we call the next()
> for...of constructor calls the next function of iterator for each loop.
> unlike array methods like filter, map, they create a new array and run to completion. 

## Note: 
In future, iterables will have helper methods like `filter, map etc` like arrays.


