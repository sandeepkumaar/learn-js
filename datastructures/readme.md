## Iterators

Iterator is a construct that is similar to linkedList having a next() method
```
let iteratorNode = {
  next(),
  value,
  // based on Iterables
  index,
}
```

When a Iterator is defined for a Object/Array it becomes Iterable. It should implement `@@iterator`

We dont need to custom iterables. we can use built-in Iterables like 
- Array
- Set
- Object
- Map 
- WeakSet 
- WeakMap
- string
- regexp,
- Generator

> Note: Construct for iterating all the nodes in the iterable is **for value of iterator**

## Array
By default Array is an iterable.
```
var x = [1, 2, 3];
for(const item of x) {
  console.log(item); // 1, 2, 3
}
```
> Note: Difference between Array Iterator, Set Iterator, Map Iterator, 
> Iterator Object is lazy initialized. meaning it gets the value only when we call the next()
> for...of constructor calls the next function of iterator for each loop.
> unlike array methods like filter, map, they create a new array and run to completion. 
> if are creating [] array and pushing data inside for..of then its similar to [].map().filter()


### Array.values() or Array[Symbol.iterator]()
Both are same. return an iterator having
```
{ 
  next(),
  value,
}
```
### Array.keys() 
{
  next(),
  value, // index(key)
}

### Array.entries()
{
  next(),
  [index, value]
}

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


