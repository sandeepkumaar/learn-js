## Iterators
Iterable : object containing sequence of values
Iterator : method on the iterable which helps to move the next node in the iterable. simliar to linkedList. 
It returns a object with `value, next()` which is used to iterate

```
let iteratorNode = {
  next(),
  value,
  index, // based on Iterables index will be availble or not
}
```

Object/Array becomes iterable when it implements `Symbol.iterator] iterator
```
let iterable = {
  // custom iterator
  [Symbol.iterator]() {
    return {
      value,
      next
    }
  }
}
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


