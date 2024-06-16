
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

// Define a class that implements Symbol.iterator and map method for tree traversal
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

  // Method to recursively clone and modify tree
  map(callback) {
    function cloneNode(node) {
      return {
        ...node,
        node: callback(node.node),
        children: node.children.map(cloneNode),
      };
    }

    return new TreeIterator(cloneNode(this.root));
  }
}

// Example usage:
let treeIterator = new TreeIterator(tree);

// Example usage of map method: Increment node values by 10 and return a new tree
let modifiedTreeIterator = treeIterator.map(value => value + 10);

// Iterate over all nodes in the modified tree using for...of loop
for (let node of modifiedTreeIterator) {
  console.log(node);
}
