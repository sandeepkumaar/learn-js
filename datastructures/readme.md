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

### Set
Set is used when the there are more mutations happening. It takes a Unique values, Order is maintained, does not have index.
```
Set {
  add, O(1)
  delete, // O(1)
  has, // O(1)
  forEach,
  values|keys|entries // iterator
}
```
In future, Iteration will have helper methods like we have for array filter, map, etc.

Note: has(), delete() (finding elements with value) is faster than array.includes() or arary, objectaccess methods 
Some useful util method


## Object vs Map
Object has prototypes and inherited properties
```
let proto = {
  name: 'sandeep' // enumerable but not own enumerable (inherited);
}
let person = Object.assign(Object.create(proto), { 
  age: 24 // enumerable and own-enumerable
})
```
- Object.keys(), Object.values() - all enumerate only Own-Enumerable properties - only age
- `in`, `for( in ) {}`  - enumerable both own as well as inherited properties


> Note:  Unlike Arrays which is *iterable*, Objects are not Iterable by default and there is no Iterator conversion
> methods available. Object.keys() and values() return Array which can be iterated.

### Map
Objects are used for inheritance/delegation or composition. 
Map are for data which needs be added, modified often.

Iterations are reliable in Map since it does not deal with enumerable vs own-enumerable properties.
Also finding in Map and Iterations are faster than Object.

#### Constructor
```
new Map([
 [key, value], 
 []
])
```


#### Methods
- set(key, value)
- get(key)
- delete(value)
- clear() //all
- has(key) 

Iterations (iterable) for .. of
- entries [key, value]
- values
- keys
- forEach(fn(key, value, map); // transform


## GroupBy in Map

## Conversions between Array, Object to Map, Set


