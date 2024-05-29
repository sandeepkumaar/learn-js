
function createNode(value, next=null) {
  return {
    value,
    next, // reference
  }
};

const constructSingleLinkedList = function() {
  // return object to compose
}

const linkedListProto = {
  at: function (index) {
    let currentIndex = 0;
    for (const node of this) {
      if (currentIndex === index) {
        return node; }
      currentIndex++;
    }
    return null; // Index out of range
  },
  insertFirst: function(value) {
    let node = createNode(value, this.head);
    this.head = node;
    if(!this.size) {
      this.tail = node;
    };
    return node;

  },
  insertLast: function(value) {
    if(!this.size) return this.insertFirst(value);
    let node = createNode(value);
    this.tail.next = node;
    this.tail = node;
    return node;
  },

  insertAt: function(value, index) {
    let prevNode = this.at(index - 1);
    if(prevNode === null) throw Error(`Invalid Index: ${index}`);
    let currentNode = prevNode.next;
    prevNode.next = createNode(value, currentNode);
    return prevNode.next
  },
  reverse: function() {
    let prevNode = null;
    for(let currentNode of this) {
      currentNode.next = prevNode;
      prevNode = currentNode;
    };
    this.tail = this.head;
    this.head = prevNode;
    return this;
  },

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

  // object
  let linkedList = {
    head, 
    tail,
    size,
    insert: function(value, index) {
      let node = null
      if(index == undefined) {  // append
        node = this.insertLast(value);
      } else if(index == 0) { // prepend
        node = this.insertFirst(value)
      } else { 
        node = this.insertAt(value, index);
      }
      if(node) this.size += 1;
      return node;
    }
  };

  return Object.assign(
    Object.create(linkedListProto),
    linkedList
  )

};



//let linkedList = createLinkedList(['a', 'b', 'c']);
//console.log(linkedList.find(1));


let linkedList = createLinkedList();
linkedList.insert('a'); // append at start
linkedList.insert('b'); // append
linkedList.insert('c', 1); // insertAt
linkedList.insert('d', 0); // prepend


for(let node of linkedList) {
  console.log(node.value);
}
linkedList.reverse();
console.log('---------', linkedList.size);
for(let node of linkedList) {
  console.log(node.value);
}
