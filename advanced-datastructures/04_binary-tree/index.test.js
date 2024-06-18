
const bst = createBinarySearchTree();

bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

let levelOrderTraverseArr = [];
for(let data of bst.bfs()) {
  levelOrderTraverseArr.push(data);
};
console.log(levelOrderTraverseArr);
let serialized = bst.serialize()
console.log('serialize', serialized);
let bst1 = bst.deserialize(serialized);
//bst.delete(34);
//console.log('traverse', bst.levelOrderTraversal());

//let searchRes = bst.search(45)
//console.log('search', searchRes.data);

//let appendArr = (arr) => (data) => arr.push(data);
//
//let preOrderResult = [];
//bst.preOrderTraversal(appendArr(preOrderResult))
//console.log(preOrderResult);
//let inOrderResult = [];
//bst.inOrderTraversal(appendArr(inOrderResult))
//console.log(inOrderResult);

levelOrderTraverseArr = [];
for(let data of bst1.bfs()) {
  levelOrderTraverseArr.push(data);
};
console.log(levelOrderTraverseArr);

console.log(bst.levelOrderGroup());



