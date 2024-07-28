/**
 * create a map expose set, get
 * for both get and set - delete the key and set it again - to bring to the bottom
 * to pick the top order - use map.keys().next().value;
*/
function createLRUCache(capacity) {
  const cache = new Map();

  function get(key) {
    if (!cache.has(key)) return -1;

    const value = cache.get(key);
    cache.delete(key);
    cache.set(key, value);
    return value;
  }

  function put(key, value) {
    if (cache.has(key)) {
      cache.delete(key);
    }
    cache.set(key, value);
    if (cache.size > capacity) {
      cache.delete(cache.keys().next().value);  // Remove the least recently used item
    }
  }

  return { get, put };
}

// Usage example
const lruCache = createLRUCache(3);
lruCache.put(1, 1);
lruCache.put(2, 2);
console.log(lruCache.get(1));    // returns 1
lruCache.put(3, 3);
lruCache.put(4, 4);
console.log(lruCache.get(2));    // returns -1 (not found)
console.log(lruCache.get(3));    // returns 3
console.log(lruCache.get(4));    // returns 4
