## LinkedList (single, double, circle)
Node and Complexity
```
let singleLinkedNode = {
  next: null,
  value: undefined
};
let doubleLinkedNode = {
  prev: null,
  next: null,
  value: undefined
};
let linkedList = {
  head,
  tail,
  append, // O(1)
  prepend, // O(1)
  insert, // O(n)
  findByValue, // O(n)
  findByIndex, // O(n)
  deleteHead, // O(1)
  deleteTail, // O(n), O(1)
  reverse, // O(n)
  iterate,
  sort,
  toArray, 
  fromArray
}
```

### Difference between single and double
- Iterations for both single and double is same. except single linkedlist is one-way whereas double can be iterated in both 
ways.   
- deleteTail is O(n) for single and O(1) for double

Circle list is when Head and Tail are connected

## Queue
```
let queue = {
  isEmpty: length
  peek: at(0)
  enqueue: push(),
  dequeue: shift()
};
```

## Stack
```
let stack = {
  isEmpty,
  push: push,
  pop: pop,
}
```

## HashMap
```
let hashMap = {
  set,
  get,
  delete,
  has,
  getKeys,
  getValues,
}
```
In JS, LinkedLists, Queue, Stack, HashMap are all avaible through native methods


append ==> push();
prepend ==> unshift();
insert ==> toSpliced();
findByValue ===> find(), findLast(), findIndex(), findLastIndex()
findByIndex, ===> at();
deleteHead, ===> shift()
deleteTail, ===> pop()
reverse, ===> reverse(), toReversed()
replace, ==> toSpliced(index, delete, element), with(index, replaceItem)
pick ===> slice()
merge ===> concat()
boolean ===> some, every, includes
reducer ===> join, reduce
sort ===> toSorted((a,b)=> {})
iterator ===> values, keys, entries, Symbol.Iterator

