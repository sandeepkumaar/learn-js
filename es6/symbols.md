## Symbols

symbols are **unique identifier** of prmitive data type like null, undefined, string, number  
symbols are created from Symbol(string) constructor returning a unique identifier. 

## Properties of symbol: 
- Symbol constructor produces a unique value irrespective of what is being passed
```
let a = Symbol('a')
let aa = Symbol('a');
a === aa; // false
```
- Symbol constructors are invoked *without* `new` keyword

- Symbols on object are not *enumerable* - this allows symbols to be a cadidate for built-in implementations which needs 
to be hidden from normal code
- symbols are used as keys in an objects. along with strings
```
var obj = {
  name: 'sandeep'
};
var id = Symbol('id'); // returns a unique identifier which can be used as object key
//obj[id] = '1234'
or 
var obj = {
  name: 'sandeep',
  [id]: '1234'
};
for(x in obj) console.log(x) // name // id not enumerable
obj['id'] = 'abc'; // cannot override as id is an identifier (some hashed value)
```

Ability of symbols to produce unique identifier has few usecases. 

## Symbols as hidden properties, extend the exising objects
## Symbols as built-in methods
As JS grows and having to add new functionalities. we cant introduce new methods, properties for each new functionalities.
Eg: Consider we are introducing `iterator` method for array objects. what if apps have custom extended arrays with `iterator`

```
array.iterator = // custom implementation
```
Introducing new methods this way might break existing functionality. so inorder to safely add methods/properties - symbols are used.


### Built-in Symbols or Symbol (static) Properties or Symbol well-knowns
> Note: to denote well known/built-in symbols - @@ is used. Symbol.iterator == @@iterator

- Symbol.asyncIterator
- Symbol.prototype.description
- Symbol.hasInstance
- Symbol.isConcatSpreadable
- Symbol.iterator
- Symbol.match
- Symbol.matchAll
- Symbol.replace
- Symbol.search
- Symbol.species
- Symbol.split
- Symbol.toPrimitive
- Symbol.toStringTag
- Symbol.unscopables

These symbols are added as built-ins to extend the functionalities. Eg: Array

### Custom Symbol
Using any builtin symbol on any objects, function will extend those behaviours
```
let iterable = {
  // custom iterator
  [Symbol.iterator]() {
    return {
      value,
      next
    }
  }
}
```

### Override built-ins/symbols
```
let obj = {};

let obj1 = {
  toString: () => 'sandeep'
};

let obj2 = {
  [Symbol.toStringTag]: 'sandeep' 
}

console.log(obj + ' xxx'); // [object Object] xxx
console.log(obj1 + ' xxx'); // sandeep xxx
console.log(obj2 + ' xxx'); // [object sandeep] xxx
// prototype
Object.prototype.toString(obj1) // [object Object]  - toString()  override is ignored
Object.prototype.toString(obj2) // [object sandeep]  - toString()  override is ignored

```
`+` invokes the obj's toString method which inturn invokes Symbol.toStringTag's builtin implementation

Now overriding toString() directly is risky and it changes the builtin behaviour completely. other internal methods
still depends on the builtin implementation may run into undesired behaviour. so its always better to use Symbols to override 
any builtin implementations.


## Symbol Global registry
TODO

## Symbols and Weakmap

## Summary

Symbols are unique identifiers which cannot be created again. which makes it a candidate to add the functionalities without
disturbing the existing properties.  
This also makes it a good candidate for ECMAScript Standard to introduce additional functionalities without breaking changes  
For developers, symbols are opt-in, allowing us to extend any objects/functions with builtin/custom behaviours with the confidence of not accidentally overriding any other work.  


