
function createNode(value, next=null) {
  return {
    value,
    next, // reference
  }
};

let proto = {
  [Symbol.iterator]() {
    let currentNode = this.head;
    return {
      next() {
        if(currentNode !== null) {
          let value = currentNode;
          currentNode = currentNode.next;
          return { value, done: false};
        } else {
          return { done: true } 
        }
      }
    }
  }
}
const createLinkedList = function(arr = [], opts) {

  // opts to specify the behavior stack, queue on list
  // constructor
  let size = 0;
  let {head, tail} =  arr.reduce((acc, item) => {
    let {head, tail} = acc;
    if(head == null) {
      head = createNode(item, null);
      tail = head;
    } else {
      let node = createNode(item)
      tail.next = node;
      tail = node;
    }
    size++;
    return { head, tail };
  }, {head: null, tail: null});

  let insertFirst = function(value) {
    let node = createNode(value, this.head);
    this.head = node;
    if(!this.size) {
      this.tail = node;
    };
    return node;
  };

  let insertLast =  function(value) {
    if(!this.size) return insertFirst.call(this,value);
    let node = createNode(value);
    this.tail.next = node;
    this.tail = node;
    return node;
  };
  let insertAt =  function(value, index) {
    let prevNode = this.at(index - 1);
    if(prevNode === null) throw Error(`Invalid Index: ${index}`);
    let currentNode = prevNode.next;
    prevNode.next = createNode(value, currentNode);
    return prevNode.next
  };

  return Object.assign(Object.create(proto), {
    head,
    tail,
    size,
    at: function (index) {
      let currentIndex = 0;
      for (const node of this) {
        if (currentIndex === index) {
          return node; }
        currentIndex++;
      }
      return null; // Index out of range
    },
    insert: function(value, index) {
      let node = null
      if(index == undefined) {  // append
        node = insertLast.call(this, value);
      } else if(index == 0) { // prepend
        node = insertFirst.call(this, value)
      } else { 
        node = insertAt.call(this, value, index);
      }
      if(node) this.size += 1;
      return node;
    },
    deleteAt: function(index) {
    },
    delete: function(condition) {
    },
    find: function(condition) {
    },


  })
}

let linkedList = createLinkedList();
linkedList.insert('a'); // append at start
linkedList.insert('b'); // append
linkedList.insert('c', 1); // insertAt
linkedList.insert('d', 0); // prepend

console.log('at', linkedList.at(2).value);

for(let node of linkedList) {
  console.log(node.value);
}
