/**
 * search(x) - O(log n) * insert(x) - O(log n) * delete(x) - O(log n)
*/
function createNode(data) {
  return {
    data,
    left: null,
    right: null
  }
};
/**
 * Recursive backtracking
 * Recursively traverse the tree for the null spot, add the node and backtrack
*/
const insertNode = function(parent, node) {
  // exit condition
  if(parent == null) {
    return node;
  };

  if(node.data < parent.data) {
    parent.left = insertNode(parent.left, node);
  } else {
    parent.right = insertNode(parent.right, node);
  }
  return parent;
};

let search = function(parent, data) {
  if(parent == null || parent.data == data) {
    return parent;
  };
  if(data < parent.data) {
    return search(parent.left, data);
  } else {
    return search(parent.right, data);
  }
};

const minValueNode = function(node) {
  let current = node;
  while(current.left !== null) {
    current = node.left
  };
  return current;
};

let deleteNode = function(node, data) {
  if(node === null) return node; // return null to backtrack
  if(node.data === data) { // data 
    // case 1: Leaf - node with no child -> return null
    // case 2: node with one child -> return child to link
    // case 3: node with 2 child
    if(node.left === null) {
      return node.right; // this also may be null, which is handled at first null condition
    } else if(node.right === null) {
      return node.left
    } else {
      //case 3: get the minimum value node in right tree; which is left traversal
      node.data = minValueNode(node.right).data;
      // delete the swapped data from right subtree
      node.right = deleteNode(node.right, node.data);
      return node;
    };
  }

  // traverse
  if(data < node.data) {
    node.left = deleteNode(node.left, data);
  } else {
    node.right = deleteNode(node.right, data);
  };
  return node;

}
const preOrder = function(node, cb) {
  if(node === null) return node;
  // process data first
  cb(node.data);
  preOrder(node.left, cb);
  preOrder(node.right, cb);
};
// sorted for binary search tree
const inOrder = function(node, cb) {
  if(node === null) return node;
  inOrder(node.left, cb);
  // process data in middle
  cb(node.data);
  inOrder(node.right, cb);
};

const postOrder = function(node, cb) {
  if(node === null) return node;
  postOrder(node.left, cb);
  postOrder(node.right, cb);
  // process data at last
  cb(node.data);
};

const inOrderGenerator = function*(node) {
  if(node === null) return;
  yield* inOrderGenerator(node.left);
  yield node.data;
  yield* inOrderGenerator(node.right);
}



function createBinarySearchTree(tree=null) {
  return {
    root: tree,
    insert: function(data) {
      let node = createNode(data);
      this.root = insertNode(this.root, node);
    },
    search: function(data) {
     return search(this.root, data);
    },
    delete: function(data) {
      if(this.root == null) {
        return this.root;
      };
      this.root = deleteNode(this.root, data);
    },
    /**
     * add root node, left node, right node in queue
     * shift queue to visit(process) 
     * iterate till queue is empty
    */
    levelOrderTraversal: function*() {
      if(this.root === null) {
        return;
      };
      let queue = [];
      queue.push(this.root);
      while(queue.length) {
        let node = queue.shift();

        // actual operation
        yield node.data;

        // skip empty childs
        if(node.left !== null) {
          queue.push(node.left);
        }
        if(node.right !== null) {
          queue.push(node.right);
        };
      };
    },
    levelOrderGroup: function() {
      if(this.root === null) {
        return;
      };
      let queue = [];
      queue.push(this.root);
      let group = [];
      let leftToRight = true;
      while(queue.length) {
        let levelSize = queue.length
        let acc = [];

        // actual operation
        for(let i=0; i < levelSize; i++) {
          let node = queue.shift();
          acc.push(node.data);
          // skip empty childs
          if(node.left !== null) {
            queue.push(node.left);
          }
          if(node.right !== null) {
            queue.push(node.right);
          };
        };
        if(leftToRight) {
          group.push(acc);
        } else {
          group.push(acc.reverse());
        };
        leftToRight = !leftToRight;
      };
      return group;
    },


    preOrderTraversal: function(cb) {
      return preOrder(this.root, cb);
    },
    inOrderTraversal: function(cb) {
      return inOrder(this.root, cb);
    },
    postOrderTraversal: function(cb) {
      return postOrder(this.root, cb);
    },
    [Symbol.iterator]() {
      return inOrderGenerator(this.root);
    },
    bfs: function() {
      return {
        ...this,
        [Symbol.iterator]() {
          return this.levelOrderTraversal(this.root);
        }
      }
    },
    /**
     * using levelOrder
    */
    serialize: function() {
      if(this.root === null) return this.root;
      let queue = [this.root];
      let serialized = [];
      while(queue.length) {
        let node = queue.shift();
        if(node === null) {
          serialized.push(null);
        } else {
          serialized.push(node.data);
          queue.push(node.left)
          queue.push(node.right)
        }
      }
      return serialized;
      
    },
    /**
     * deserialize using same levelOrder. 
    */
    deserialize: function(arr=[]) {
      if(!arr.length) return null;
      // setup root node
      let root = createNode(arr[0]);
      let queue = [root];
      let index = 1;
      while(queue.length) {
        let node = queue.shift();
        // add i and i+1 to left and rigt node
        // skip nulls
        // use queue to reconstruct

        if(index < arr.length && arr[index] !== null) {
          node.left = createNode(arr[index]);
          queue.push(node.left)
        }
        // i+1
        index++;
        if(index < arr.length && arr[index] !== null) {
          node.right = createNode(arr[index]);
          queue.push(node.right)
        }
        index++;
      };
      return createBinarySearchTree(root);
    }
  }

};

