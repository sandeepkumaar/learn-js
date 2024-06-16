
// Function to traverse the DOM tree using DFS (pre-order traversal)
function traverseDOM(node) {
  if (node === null || node === undefined) {
    return;
  }

  // Process current node
  console.log(node);

  // Recursively traverse children
  node = node.firstChild;
  while (node) {
    traverseDOM(node);
    node = node.nextSibling;
  }
}

// Start traversal from the root of the DOM tree
traverseDOM(document.documentElement);


// Function to traverse the DOM tree using BFS (level-order traversal)
function traverseDOMBFS(root) {
  if (!root) return;

  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node);

    let child = node.firstElementChild;
    while (child) {
      queue.push(child);
      child = child.nextElementSibling;
    }
  }
}

// Start traversal from the root of the DOM tree
traverseDOMBFS(document.documentElement);
