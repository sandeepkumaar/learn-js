
// Node constructor function
function TreeNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}
/**
 * Find and empty Node to insert value
*/
const insertNode = function(root, value) {
  if(!root) {
    return TreeNode(value);
  };
  if(value < root.value) {
    root.left = insertNode(root.left, value)
  } else {
    root.right = insertNode(root.right, value)
  }
  return root;

}

const searchNode = function(node, value) {
  if(!node) return false;
  if(value == node.value) {
    return true;
  };
  if(value < node.value) {
    node.left = searchNode(node.left, value);
  } else {
    node.right = searchNode(node.right, value);
  }
};

function BSTree() {
  let root = null;
  let insert = function(value) {
    root = insertNode(root, value);
    return root;
  };
  let searchNode = function(value) {
    return searchNode(root, value);
  }
}

// Binary Search Tree constructor function
function BinarySearchTree() {
  return {
    root: null,

    // Insert a value into the BST
    insert: function (value) {
      this.root = insertNode(this.root, value);
    },

    // Search for a value in the BST
    search: function (value) {
      return searchNode(this.root, value);
    },

    // In-order traversal (returns an array of values in sorted order)
    inOrderTraversal: function () {
      const result = [];
      inOrder(this.root, (value) => result.push(value));
      return result;
    },
  };
}

// Helper function to insert a value into the BST
function insertNode(node, value) {
  if (!node) {
    return TreeNode(value);
  }

  if (value < node.value) {
    node.left = insertNode(node.left, value);
  } else {
    node.right = insertNode(node.right, value);
  }

  return node;
}

// Helper function to search for a value in the BST
function searchNode(node, value) {
  if (!node) {
    return false;
  }

  if (value === node.value) {
    return true;
  }

  if (value < node.value) {
    return searchNode(node.left, value);
  } else {
    return searchNode(node.right, value);
  }
}

// Helper function for in-order traversal
function inOrder(node, callback) {
  if (node) {
    inOrder(node.left, callback);
    callback(node.value);
    inOrder(node.right, callback);
  }
}

// Example usage:
const bst = BinarySearchTree();

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log(bst.search(60)); // Output: true
console.log(bst.search(90)); // Output: false

const sortedValues = bst.inOrderTraversal();
console.log(sortedValues); // Output: [20, 30, 40, 50, 60, 70, 80]
