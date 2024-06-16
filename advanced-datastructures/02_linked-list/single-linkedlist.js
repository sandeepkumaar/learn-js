
let proto = {
  //search: () => {},
  //insert: () => {},
  //delete: () => {},
  //reverse: () => {},
  [Symbol.iterator]() {
  },

};

export function createNode(value, next=null) {
  return {
    value,
    next
  }
}


export default function createLinkedList(arr=[]) {
  const {head, tail, size} = arr.reduce((acc, item) => {
    if(head === null && tail == null) {
      acc.head = createNode(value, null)
      acc.tail = acc.head;
    } else {
      let node = createNode(value, null);
      acc.tail.next = node;
      acc.tail = node;
    }
    acc.size++;
    return acc;
  }, {
    head: null,
    tail: null,
    size: 0
  })

  return Object.assign(
    Object.create(proto),
    {
      head,
      tail,
      size,
    }
  )

}
