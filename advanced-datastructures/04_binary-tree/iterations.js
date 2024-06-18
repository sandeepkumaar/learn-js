
// Define a class for a TreeNode
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Define the BinarySearchTree class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a data element into the BST
  insert(data) {
    let newNode = new TreeNode(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          break;
        } else {
          current = current.left;
        }
      } else if (data > current.data) {
        if (current.right === null) {
          current.right = newNode;
          break;
        } else {
          current = current.right;
        }
      } else {
        // Duplicate keys are not allowed in BST
        return;
      }
    }
  }

  // Delete a data element from the BST
  delete(data) {
    this.root = this._deleteNode(this.root, data);
  }

  // Helper function to delete a node from the BST
  _deleteNode(root, data) {
    if (root === null) {
      return root;
    }

    let parent = null;
    let current = root;
    while (current !== null && current.data !== data) {
      parent = current;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    if (current === null) {
      // Node with data not found
      return root;
    }

    // Case 1: Node to be deleted has no children (leaf node)
    if (current.left === null && current.right === null) {
      if (parent === null) {
        return null; // Deleting the root
      }
      if (parent.left === current) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    // Case 2: Node to be deleted has only one child
    else if (current.left === null) {
      if (parent === null) {
        return current.right; // Deleting the root
      }
      if (parent.left === current) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    } else if (current.right === null) {
      if (parent === null) {
        return current.left; // Deleting the root
      }
      if (parent.left === current) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    }
    // Case 3: Node to be deleted has two children
    else {
      let successor = this._findMinNode(current.right);
      current.data = successor.data;
      current.right = this._deleteNode(current.right, successor.data);
    }

    return root;
  }

  // Helper function to find the node with minimum data value in a subtree
  _findMinNode(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  // Search for a data element in the BST
  search(data) {
    let current = this.root;
    while (current !== null) {
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  // Perform level order (breadth-first) traversal of the BST
  levelOrderTraversal() {
    if (this.root === null) {
      return;
    }

    let queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let node = queue.shift();
      console.log(node.data);

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }

  // Perform depth-first traversal (in-order, pre-order, post-order) of the BST
  depthFirstTraversal(order) {
    if (this.root === null) {
      return;
    }

    let stack = [];
    let current = this.root;

    while (true) {
      while (current !== null) {
        stack.push(current);
        current = current.left;
      }

      if (stack.length === 0) {
        break;
      }

      current = stack.pop();
      console.log(current.data);

      current = current.right;
    }
  }
}

// Example usage:
let bst = new BinarySearchTree();

bst.insert(50);
bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(70);
bst.insert(60);
bst.insert(80);

console.log("Level order traversal (Breadth-first):");
bst.levelOrderTraversal(); // Outputs: 50, 30, 70, 20, 40, 60, 80

console.log("\nIn-order traversal (Depth-first):");
bst.depthFirstTraversal("in-order"); // Outputs: 20, 30, 40, 50, 60, 70, 80

console.log("\nPre-order traversal (Depth-first):");
bst.depthFirstTraversal("pre-order"); // Outputs: 50, 30, 20, 40, 70, 60, 80

console.log("\nPost-order traversal (Depth-first):");
bst.depthFirstTraversal("post-order"); // Outputs: 20, 40, 30, 60, 80, 70, 50

// Example of search and delete operations
let dataToSearch = 40;
let result = bst.search(dataToSearch);
if (result !== null) {
  console.log(`Data ${dataToSearch} found in the BST.`);
} else {
  console.log(`Data ${dataToSearch} not found in the BST.`);
}

bst.delete(30);
console.log("\nIn-order traversal after deletion of 30:");
bst.depthFirstTraversal("in-order"); // Outputs: 20, 40, 50, 60, 70, 80
