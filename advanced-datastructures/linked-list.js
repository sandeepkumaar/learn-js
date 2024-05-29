
function createNode(value, next=null) {
  return {
    value,
    next, // reference
  }
};

function createLinkedList(arr=[]) {
  // create & link nodes
  let iterable = null;
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

  // Function to find node at a given index
  let findAt = function (index) {
    let currentIndex = 0;
    for (const node of this) {
      if (currentIndex === index) {
        return node;
      }
      currentIndex++;
    }
    return null; // Index out of range
  };


  let insertFirst = function(value) {
    let node = createNode(value, head);
    head = node;
    if(!size) {
      tail = node;
    };
    return node;

  };
  let insertLast = function(value) {
    if(!size) return insertFirst(value);
    let node = createNode(value);
    tail.next = node;
    tail = node;
    return node;
  };

  let insertAt = function(value, index) {
    let prevNode = findAt.call(this, index - 1);
    if(prevNode === null) throw Error(`Invalid Index: ${index}`);
    let currentNode = prevNode.next;
    prevNode.next = createNode(value, currentNode);
    return prevNode.next
  }

  let insert = function(value, index) {
    let node = null

    if(index == undefined) {  // append
      node = insertLast(value);
    } else if(index == 0) { // prepend
      node = insertFirst(value)
    } else { 
      node = insertAt(value, index);
    }
    if(node) size++;
    return node;
  }
 
  let reverse = function() {
    let prevNode = null;
    for(let currentNode of this) {
      currentNode.next = prevNode;
      prevNode = currentNode;
    };
    tail = head;
    head = prevNode;
    return this;
  };

  return {
    head,
    tail,
    size,
    findAt,
    insert,
    reverse,
    [Symbol.iterator]() {
      let currentNode = head;
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
  };
};


//let linkedList = createLinkedList(['a', 'b', 'c']);
let linkedList = createLinkedList();
//let linkedListIterator = linkedList[Symbol.iterator]();
//console.log(linkedListIterator.next());
//console.log(linkedListIterator.next());
//console.log(linkedListIterator.next());
//console.log(linkedListIterator.next());
//console.log(linkedListIterator.next());

//console.log(linkedList.findAt(1));

//for(let node of linkedList.reverse()) {
//  console.log(node.value);
//}
let find = linkedList.findAt;
//linkedList.insertAt('z', 0);
linkedList.insert('a');
console.log('find', find(0));
console.log('size', linkedList.size);
for(let node of linkedList) {
  console.log(node.value);
};



/*
linkedList.insertAt('', 0);
linkedList.removeAt('', 0);
linkedList.updateAt('', 0);
linkedList.findAt(condition);

linkedList.find(condition);
linkedList.count()
linkedList.sort()
linkedList.map()
linkedList.filter()
linkedList.reduce()
linkedList.reverse()
*/
