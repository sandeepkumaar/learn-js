/**
 * Summary
*/




let node = {
  next: null, // reference to next element
  value: undefined // current node value
};

function createLinkedList(comparator) {
  // states
  let head = null;
  let tail = null;

  // add
  let prepend = function(value) {
    // create Default Node { value: value, next: null };
    // if firstNode ie. head=null. tail = null
    // then update head = node, tail = node
    // else make the new node to reference current head node 
    // and make the current node as head. 

    // to simplify.  for prepend
    // always make the new Node as head. for any conditions
    // and reference the current head.

  };
  let append = function(value) {
    // create newNode
    // copy current tail in temp and make new node as tail.
    // if tempNode is null, then assign head as newNode
    // else tempNode refers to new Node
  };
  let insert = function(value, index) {
    // create newNode
    // if index = 0; prepend
    let currentNode = findByIndex(index -1);
    let tempNode = currentNode.next;
    currentNode.next = newNode;
    newNode.next = tempNode;


  };

  // remove
  let deleteAny = function(value) {
    //let node = find(value);
    // find wont work since we need the previous node to make the link
    let node = head;
    if(node.value == value) {
      head = node.next;
      return;
    }
    let currentNode = node;
    let nextNode = node.next;
    let deletedNode = null
    while(nextNode) {
      if(nextNode.value == value) {
        deletedNode = nextNode;
        currentNode.next = nextNode.next;
      };
      nextNode = nextNode.next;
    }
    return deletedNode;
  };

  let deleteTail = function() {
    let deleteNode = tail;
    let currentNode = head;
    let nextNode = head.next;
    while(nextNode !== deleteNode) {
      currentNode = nextNode;
      nextNode = nextNode.next;
    };
    currentNode.next = null // remove nextNode reference
    return deleteNode;

  };
  let deleteHead = function() {
    let deleteNode = head;
    let head = head.next;
  };

  // get
  let find = function(value, predicate) {
    let node = head;
    while(node) {
      if(node.value == value) return node;
      node = node.next;
    }
    return null;
  }
  let findByIndex = function(index) {
    // iterate from head upto index times
    let count = 0;
    let node = head;
    while(node && index != count) {
      node = node.next;
      count ++ 
    };
    if(!node) {
      throw Error('No Node in the given index');
    }
    return node;
  }

  // common
  let fromArray = function() {
    arr.forEach(value => append(value));
  };

  let toArray = function() {
    let node = head;
    let arr  = [];
    while(node) {
      arr.push(node.value);
      node = node.next;
    };
  }

  let reverse = function() {
    let currentNode = head;
    let prevNode = null;
    let nextNode = null
    while(currentNode) {
      nextNode = currentNode.next // store the value in temp
      // current node points to previous node
      currentNode.next = prev
      // assign current node as prev so next node can refer to it.
      prev = currentNode;
      // for iteration
      currentNode = nextNode;
    };
    let temptail = tail;
    tail = head;
    head = prev || tempTail;
  }

  let reverseDouble = function() {
    let currentNode = head;
    let lastNode = null;
    //let nextNode = null;
    while(currentNode) {
      let nextNode = currentNode.next // store the value in temp
      let prevNode = currentNode.previous
      
      // switch the previous and next
      currentNode.next = prevNode;
      currentNode.prev = nextNode;

      // to know the last/tail node when loop exits 
      lastNode = currentNode;
      // for iteration
      currentNode = nextNode;
    };
    tail = head;
    head = lastNode;
  }

  return {
    // states
    head, 
    tail,
    // add
    prepend, // O(1)
    append, // O(1)
    insert, // O(n)
    // remove
    deleteAny, // O(n)
    deleteHead,  // O(1)
    deleteTail, // O(n), O(1) 
    // get
    find, //O(n)
    findByIndex, // O(n)
    // commong
    fromArray, 
    toArray,
    reverse, //??
  }
}

