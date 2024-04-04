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
  toArray, 
  fromArray
}

