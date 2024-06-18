function createNode() {
  return {
    children: new Map(),
    isEndOfWord: false,
  }
};

function createTrie() {
  const root = createNode();

  return {
    insert(word) {
      let node = root;
      // iterate all the chars
      // if char is present in Map, update node with the char's trie for further iteration
      // if char is not present, add in map and iterate on that path
      for(let ch of word) {
        if(!node.children.has(ch)) {
          node.children.set(ch, createTrie())
        } 
        node = node.children.get(ch);
      }
      node.isEndOfWord = true;
    },
    search(word) {
      let node = root;
      for(let ch of word) {
        if(!node.children.has(ch)) {
          return false
        };
        node = node.children.get(ch);
      }
      return node;
    },
    startsWith(prefix) {
      let node = root;
      for(let ch of prefix) {
        if(!node.children.has(ch)) {
          return false;
        };
        node = node.children.get(ch);
      };
      return true;
    },
    getAllWordsWithPrefix(prefix) {
      function dfs(currentNode, currentPrefix) {
        if(currentNode.isEndOfWord) {
          words.push(currentPrefix);
        }
        for(let [ch, childNode] of node) {
          dfs(childNode, prefix + ch);
        }
      };

      let words = [];
      let node = this.search(prefix);
      if(node) {
        dfs(node, prefix, words);
      }
      return words;
    }
    
  }
}
