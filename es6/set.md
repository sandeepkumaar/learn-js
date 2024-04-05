## Set

Set is a *specialized* datastructure for arrays.
Properties: 
- stores only unique values
- order is maintained (array also maintains order, but this is more trustable)
- does not have index (unlike arrays)
- adding, deleting, finding is O(1) - faster than arrays. 
- mutations like add, delete automatically adjusts the size - which is manual in arrays
- by default an iterable - used in for..of
- (limited support) Also has special methods like union, difference, intersection, etc which resembles mathematical set.

This makes Set an ideal candidate for doing mutations and lookup cases

```
let set = new Set([1, 2, 3]); // Set(3) {1, 2, 3}
Set {
  add, O(1)
  delete, // O(1)
  has, // O(1)
  size, // O(1)
  clear,
  forEach,
  values|keys|Symbol.iterator // returns values as iterable
  entries // returns index, value (both same) as iterable - for compatibility with Map
  /*special set methods*/
  union,
  intersection,
  ...//mathematical set methods
  
}
```


### Constructor/Initialise
Takes an  `Iterable` returns an `Iterable` with values
```
@type {Iteratable}
let set = new Set([iterable]);
```


## WeakSet
Check WeakMap. similar to WeakMap. except it doesn't require the keys

```
let obj = { name: 's'}
let ws = new WeakSet([obj]);
ws.has(obj) // true
obj = null;
ws.has(obj) // false
```
