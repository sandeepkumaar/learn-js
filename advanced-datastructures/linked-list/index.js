function createNode(value, next=null) {
  return {
    value,
    next, // reference
  }
};

function construct(arr) {
  return arr.reduce((acc, item) => {
    if(acc.head == null) {
      acc.head = createNode(item, null);
      acc.tail = acc.head;
    } else {
      let node = createNode(item)
      acc.tail.next = node;
      acc.tail = node;
    }
    acc.size++;
    return acc;
  }, {head: null, tail: null, size: 0});
};

const nodeIterator = function(iterable) {
  return {
    ...iterable,
    [Symbol.iterator]() {
      let currentNode = iterable.head;
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
};

const atNode = function(index, linkedList) {
  if(index < 0) {
    index = linkedList.size + index;
  }
  let currentIndex = 0;
  for (const node of nodeIterator(linkedList)) {
    if (currentIndex === index) {
      return node; 
    }
    currentIndex++;
  }
  return null; // Index out of range

}

const toArray = function(head, tail) {
  let currentNode = head;
  let arr = [];
  while(currentNode !== tail.next) {
    arr.push(currentNode.value);
    currentNode = currentNode.next;
  };
  return arr;
};

const linkedListProto = {
  at: function (index) {
    let node = atNode(index, this);
    return node?.value;
    /*
    if(index < 0) {
      index = this.size + index;
    }
    let currentIndex = 0;
    for (const node of nodeIterator(this)) {
      if (currentIndex === index) {
        return node; 
      }
      currentIndex++;
    }
    return null; // Index out of range
    */
  },
  unshift: function(value) {
    let node = createNode(value, this.head);
    this.head = node;
    if(!this.size) {
      this.tail = node;
    };
    this.size++;
    return node.value;

  },
  shift: function() {
    let head = this.head;
    let newHead = head.next;
    head.next = null;
    this.head = newHead;
    return head.value;
  },
  push: function(value) {
    if(!this.size) return this.unshift(value);

    let node = createNode(value);
    this.tail.next = node;
    this.tail = node;
    this.size++;
    return node.value
  },
  pop: function() {
    if(!this.size) return null;
    let node = atNode(this.size - 2, this)
    let lastNode = node.next;
    node.next = null;
    this.tail = node;
    this.size--;
    return lastNode.value;
  },

  /*
   * delete: prevNode.next -> List[start + deletecount]
   * insert: prevNode.next -> newNodes -> endNode
   * iterate and set the prevNode, endNode
   * handle Edgecase
   */
  splice: function(start=0, deleteCount=0, ...values) {
    let prevNode = null;
    let endNode = null;
    let index = 0;
    let newList  = construct(values);
    console.log('splice values', newList.size);
    for(const node of this) {
      if(index == start - 1) {
        prevNode = node;
      };
      if(index == start + deleteCount) {
        endNode = node;
        break;
      };
      index++;
    };

    if(prevNode && endNode) {
      if(newList.size) {
        prevNode.next = newList.head;
        newList.next = endNode;
      } else {
        prevNode.next = endNode;
      }
    } else if(prevNode == null && endNode) {
      if(newList.size) {
        this.head = newList.head;
        newList.next = endNode;
      } else {
        // [1, 2, 3].splice(0,1);
        // [1,2,3].splice(0,0);
        this.head = endNode;
      }
    } else if(prevNode && endNode == null) {
      if(newList.size) {
        this.head = newList.head;
        this.tail = newList.tail;
      } else {
        // [1,2, 3].splice(1, 5)
        prevNode.next = null;
      }
    } else if(prevNode == null && endNode == null) {
      if(newList.size) {
        this.head = newList.head;
        this.tail = newList.tail;
      }
    }
    // size calculation
    let deletableSize = this.size - start;
    let remainingSize  = Math.abs(deletableSize - deleteCount);
    this.size = start + remainingSize + newList.size;

    return this;
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
  // TODO: return value instead of node
  [Symbol.iterator]() {
    let currentNode = this.head;
    return {
      next() {
        if(currentNode !== null) {
          let value = currentNode?.value;
          currentNode = currentNode.next;
          return { value, done: false};
        } else {
          return { done: true } 
        }
      }
    }
  }

}

export default function createLinkedList(arr = []) {
  // opts to specify the behavior stack, queue on list
  // constructor
  let {head= null, tail= null, size= 0} = construct(arr);   // object
  let linkedList = {
    head, 
    tail,
    size,
  };

  return Object.assign(
    Object.create(linkedListProto),
    linkedList
  )

};

