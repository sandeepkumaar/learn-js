
let proto = {
  search(value) {
    let compare = this.compare;
    for (let node of this) {
      if(compare(node.value, value) == 0) {
        return node;
      };
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
    let node = createNode(value, this.head);
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
    const node = createNode(value, null)
    this.tail.next = node;
    this.tail = node;
    this.size++;
    return node;
  },

  insert(value, index) {
    // prepend
    if(this.head === null || index == 0) {
      return this.unshift(value);
    }
    // append
    if(index == undefined || index > this.size) {
      return this.push(value);
    };

    // insert at 
    let node = createNode(value);
    let prevNode = this.at(index - 1)
    let currentNode = prevNode.next;
    prevNode.next = node;
    node.next = currentNode;
    this.size++;
    return node;
  },
  //delete: () => {},
  //reverse: () => {},
  //[Symbol.iterator]() {
  //  let currentNode = this.head;
  //  return {
  //    next: function() {
  //      if(currentNode !== null ) {
  //        let value = currentNode;
  //        currentNode = currentNode.next;
  //        return { value, done: false }
  //      }
  //      return { value: null, done: true }
  //    }
  //  }
  //},
  *[Symbol.iterator]() {
    let currentNode = this.head;
    while(currentNode !== null) {
      let value = currentNode;
      currentNode = currentNode.next;
      yield value;
    }
  }
};

export function createNode(value, next=null) {
  return {
    value,
    next
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


