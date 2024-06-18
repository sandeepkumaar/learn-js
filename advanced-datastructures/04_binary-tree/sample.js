
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
    this.root = this._insertRec(this.root, data);
  }

  // Helper function to recursively insert a data element in the BST
  _insertRec(root, data) {
    // If the tree is empty, return a new node
    if (root === null) {
      return new TreeNode(data);
    }

    // Otherwise, recur down the tree
    if (data < root.data) {
      root.left = this._insertRec(root.left, data);
    } else if (data > root.data) {
      root.right = this._insertRec(root.right, data);
    }

    // return the (unchanged) node pointer
    return root;
  }

  // Delete a data element from the BST
  delete(data) {
    this.root = this._deleteRec(this.root, data);
  }

  // Helper function to recursively delete a data element in the BST
  _deleteRec(root, data) {
    // Base case: If the tree is empty
    if (root === null) {
      return root;
    }

    // Otherwise, recur down the tree
    if (data < root.data) {
      root.left = this._deleteRec(root.left, data);
    } else if (data > root.data) {
      root.right = this._deleteRec(root.right, data);
    } else {
      // Case with one child or no child
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      // Case with two children: Get the inorder successor (smallest in the right subtree)
      root.data = this._minValueNode(root.right).data;

      // Delete the inorder successor
      root.right = this._deleteRec(root.right, root.data);
    }

    return root;
  }

  // Helper function to find the node with minimum data value in a subtree
  _minValueNode(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  // Search for a data element in the BST
  search(data) {
    return this._searchRec(this.root, data);
  }

  // Helper function to recursively search for a data element in the BST
  _searchRec(root, data) {
    // Base cases: root is null or data is present at the root
    if (root === null || root.data === data) {
      return root;
    }

    // Data is greater than root's data
    if (data > root.data) {
      return this._searchRec(root.right, data);
    }

    // Data is smaller than root's data
    return this._searchRec(root.left, data);
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
    switch (order) {
      case "in-order":
        this._inOrderRec(this.root);
        break;
      case "pre-order":
        this._preOrderRec(this.root);
        break;
      case "post-order":
        this._postOrderRec(this.root);
        break;
      default:
        console.log("Invalid traversal order.");
    }
  }

  // Helper function for in-order traversal
  _inOrderRec(node) {
    if (node !== null) {
      this._inOrderRec(node.left);
      console.log(node.data);
      this._inOrderRec(node.right);
    }
  }

  // Helper function for pre-order traversal
  _preOrderRec(node) {
    if (node !== null) {
      console.log(node.data);
      this._preOrderRec(node.left);
      this._preOrderRec(node.right);
    }
  }

  // Helper function for post-order traversal
  _postOrderRec(node) {
    if (node !== null) {
      this._postOrderRec(node.left);
      this._postOrderRec(node.right);
      console.log(node.data);
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
