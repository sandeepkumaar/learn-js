
function createNode(value, next) {
  return {
    value,
    next, // reference
  }
};

let node1 = createNode('a', null);
let node2 = createNode('b', null);
let node3 = createNode('c', null);

node1.next = node2;
node2.next = node3;

let iterator = {
  head: node1,
  next() {
    if(this.head != null) {
      let value = this.head.value;
      this.head = this.head.next;
      return { value, done: false } 
    } else {
      return { done: true }
    }
  }
};

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());



let iterable = {
  head: node1,
  [Symbol.iterator]() {
    let currentNode = this.head;
    let next = function() {
      if(currentNode != null) {
        let value = currentNode.value;
        currentNode = currentNode.next;
        return { value, done: false } 
      } else {
        return { done: true }
      }
    };
    return { next };
  }

};
let linkIterator = iterable[Symbol.iterator]();

console.log(linkIterator.next());
console.log(linkIterator.next());
console.log(linkIterator.next());
console.log(linkIterator.next());

for(let item of iterable) {
  console.log(item);
}





