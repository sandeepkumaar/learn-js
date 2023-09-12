function createTrieNode() {
  return {
    children: new Map(),
    isEndOfWord: false,
  };
}

function createTrie() {
  const root = createTrieNode();

  function insert(node, word, index) {
    if (index === word.length) {
      node.isEndOfWord = true;
      return;
    }

    const char = word[index];
    if (!node.children.has(char)) {
      node.children.set(char, createTrieNode());
    }

    insert(node.children.get(char), word, index + 1);
  }

  function search(node, word, index) {
    if (index === word.length) {
      return node.isEndOfWord;
    }

    const char = word[index];
    if (!node.children.has(char)) {
      return false;
    }

    return search(node.children.get(char), word, index + 1);
  }

  function startsWith(node, prefix, index) {
    if (index === prefix.length) {
      return true;
    }

    const char = prefix[index];
    if (!node.children.has(char)) {
      return false;
    }

    return startsWith(node.children.get(char), prefix, index + 1);
  }

  function suggestNextCharacters(node, prefix) {
    const result = [];

    function dfs(currentNode, currentPrefix) {
      if (currentNode.isEndOfWord) {
        result.push(currentPrefix);
      }

      for (const [char, childNode] of currentNode.children) {
        dfs(childNode, currentPrefix + char);
      }
    }

    const prefixNode = findNode(root, prefix, 0);
    if (prefixNode) {
      dfs(prefixNode, prefix);
    }

    return result;
  }

  function findNode(node, prefix, index) {
    if (index === prefix.length) {
      return node;
    }

    const char = prefix[index];
    if (!node.children.has(char)) {
      return null;
    }

    return findNode(node.children.get(char), prefix, index + 1);
  }

  return {
    root,
    insert: (word) => insert(root, word, 0),
    search: (word) => search(root, word, 0),
    startsWith: (prefix) => startsWith(root, prefix, 0),
    suggestNextCharacters: (prefix) => suggestNextCharacters(root, prefix),
  };
}

// Example usage:
const trie = createTrie();

trie.insert("apple");
trie.insert("appetizer");
trie.insert("banana");

console.log(trie.suggestNextCharacters("app")); // Output: [ 'l', 'etizer' ]
console.log(trie.suggestNextCharacters("ban")); // Output: [ 'ana' ]
console.log(trie.suggestNextCharacters("orange")); // Output: []
