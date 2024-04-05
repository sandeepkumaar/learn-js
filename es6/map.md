## Map

Map is a *specialized* datastructure for Objects

Properties: 
- Unlike Objects which has prototype and other hidden props, Map doesn't have any making it ideal to store key-value data 
- Map's key can be of any type; Objects only support string & Symbol types
- Mutations in Map is more efficient than objects. infact we need to avoid mutations on objects for v8
- Size is performant and simple
- Iterations are performant and simple
- Key order is maintained. object's key order is not trustable

Map take an iterable with key,value pair(*entries*) and returns an iterable *entries*
```
var map = new Map([[0, 'a'], [1: 'b']]);
or
var map = new Map(['a', 'b'].entries());
map.set(3, c) // O(1)
map.get(3) // O(1)
map.delete(0) // O(1)
map.has(0) // O(1)
map.size() // O(1)
map.clear() // O(1)
map.keys() // Iterable with 'key'
map.value() // Iterable with 'values'
map.entries() // Iterable with 'key;values'
// special
map.groupby() // latest version. static method returns Map. Groupby based on keys other than strings
```
Note: All Iterables have `.entries()` method for interop/compatibility with Map constructor


### When to use Map over Objects
Use objects when you want to maintain a relationship between objects, patterns - singleton, factories etc

Use Map when you purely operate on data. eg: user data, computational logics etc.


## WeakMap
WeakMap is designed for a special case where we need to automatically garbage collect objects/data when its no more referenced
by the code.

Example
```
let obj = {name: 's'}
let arr = [obj];
obj = null;
console.log(arr) //  [{name: 's'}] - not garbage collected
```
The above is the default behaviour. To allow devs to cleanup the Map entries when its no more used is done through WeakMap
construct.  
Unlike Map, WeakMap keys should be objects - meaning key should be a reference for an object/value

```
let connectionObj = { url: 'xxx', pwd: 'yyy'}
let client = 'client obj with methods'
let weakMap = new WeakMap();
weakMap.set(connectionObj, client);
weakMap.has(connectionObj); // true
connectionObj = null;
weakMap.has(connectionObj); // false
```
JS runtime takes care of gcing the value, we will only know it when we use one of weakMap methods. Also to make WeakMap more
reliable, ie reflect the gced results, WeakMap doesn't have any iterator methods (keys, values, entries, size)

```
weakMap.set(); 
weakMap.get(); 
weakMap.has();
weakMap.delete();
```

### Use Case
- Caching
- Singleton pattern





