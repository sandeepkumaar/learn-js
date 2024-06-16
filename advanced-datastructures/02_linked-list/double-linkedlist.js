
const proto = {
  search(value) {
    let index = 0;
    let compare = this.compare;
    for (let node of this) {
      if(compare(node.value, value) == 0) {
        return { index, node };
      };
      index++;
    }
    return null;
  },
  at(index) {
    if(index < 0) index = index + this.size;
    let currentIndex = 0;
    for(let node of this) {
      if(index === currentIndex) {
        return node;
      }
      currentIndex++;
    };
    return null;
  },

  // prepend
  unshift(value) {
    let node = createNode(value, this.head, null);
    // if there is already a head. set its prev to node.
    // for head == null  just set the new node
    if(this.head) {
      this.head.prev = node;
    }
    this.head = node;
    if(this.tail == null) {
      this.tail = node;
    };
    this.size++;
    return node;
  },
  // append
  push(value) {
    if(this.head == null) {
      return this.unshift(value);
    };
    const node = createNode(value, null, this.tail)
    this.tail.next = node;
    this.tail = node;
    this.size++;
    return node;
  },

  insert(value, index) {
    // unshift
    if(this.head === null || index == 0) {
      return this.unshift(value);
    }
    // push
    if(index == undefined || index > this.size) {
      return this.push(value);
    };

    // insert at 
    let currentNode = this.at(index)
    let prevNode = currentNode.prev;
    let node = createNode(value, currentNode, prevNode);
    prevNode.next = node;
    currentNode.prev = node;
    this.size++;
    return node;
  },
  shift() {
    if(this.head == null) return null;
    let node = this.head;
    // only one node
    if(this.head.next) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.size--;
    return node;
  },
  pop() {
    if(this.tail == null) return null;
    let currentNode = this.tail;
    let prevNode = currentNode.prev;
    prevNode.next = null;
    this.tail = prevNode;
    this.size--;
    return currentNode;
  },
  delete(value) {
    let compare = this.compare;
    if(this.head == null) return null;
    // shift
    if(compare(this.head.value, value) == 0) return this.shift(); 
    // pop
    if(compare(this.tail.value, value) == 0) return this.pop();

    //// delete any
    let { node: currentNode } = this.search(value);
    let prevNode = currentNode.prev;
    let nextNode = currentNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.size--;
    return currentNode;
  },
  reverse() {
    if(this.head == null) return this.head;
    //let prevNode = null;
    let currentNode = this.head;
    for(let node of this) {
      currentNode = node;
      let nextNode = currentNode.next;
      let prevNode = currentNode.prev;
      currentNode.prev = nextNode;
      currentNode.next = prevNode;
    };
    // swap
    let head = this.head;
    this.head = this.tail;
    this.tail = head;
    return this;
  },
  reverseIterator() {
    return {
      ...this,
      *[Symbol.iterator]() {
        let currentNode = this.tail;
        while(currentNode !== null) {
          let value = currentNode;
          currentNode = currentNode.prev;
          yield value;
        }
      }
    }
  },
  *[Symbol.iterator]() {
    let currentNode = this.head;
    while(currentNode !== null) {
      let value = currentNode;
      currentNode = currentNode.next;
      yield value;
    }
  }
};

export function createNode(value, next=null, prev=null) {
  return {
    value,
    next,
    prev,
  }
}


export default function createLinkedList(arr=[], compare=(a, b) => a - b) {
  const {head, tail, size} = arr.reduce((acc, item) => {
    if(acc.head === null && acc.tail == null) {
      acc.head = createNode(item, null)
      acc.tail = acc.head;
    } else {
      let node = createNode(item, null);
      acc.tail.next = node;
      node.prev = acc.tail;
      acc.tail = node;
    }
    acc.size++;
    return acc;
  }, {
    head: null,
    tail: null,
    size: 0,
    compare,
  })

  return Object.assign(
    Object.create(proto),
    {
      head,
      tail,
      size,
      compare,
    }
  )

};

let linkedList = createLinkedList([1, 2, 3]);

for (let node of linkedList) {
  console.log(node.value);
}


