
// Example tree structure
let tree = {
  node: 1,
  attrs: { attr1: 'value1', attr2: 'value2' },
  children: [
    {
      node: 2,
      attrs: { attr3: 'value3' },
      children: [],
    },
    {
      node: 3,
      attrs: { attr4: 'value4' },
      children: [
        {
          node: 4,
          attrs: { attr5: 'value5' },
          children: [],
        },
      ],
    },
  ],
};

// Define a class that implements Symbol.iterator for tree traversal
class TreeIterator {
  constructor(root) {
    this.root = root;
  }

  // Implementing the iterator protocol
  *[Symbol.iterator]() {
    let stack = [];
    stack.push(this.root);

    while (stack.length > 0) {
      let node = stack.pop();
      yield node;

      if (node.children) {
        for (let child of node.children.reverse()) {
          stack.push(child);
        }
      }
    }
  }
}

// Example usage:
let treeIterator = new TreeIterator(tree);

// Iterate over all nodes in the tree using for...of loop
for (let node of treeIterator) {
  console.log(node);
}
