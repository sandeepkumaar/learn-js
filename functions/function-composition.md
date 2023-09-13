## Functional Programming
> Programming paradigm, where programs are constructed by *applying* and *composing* functions.

Key features: 
- function as first-class citizens - meaning treated as values.
- Pure functions
- Immutability
- Composability

## Pure function
Pure function is a function that returns the same result for the same input at any time, not affected by the application 
state or any external factors.
```
function add(a, b) {
  return a + b;
}
```
> Q: Why Pure functions? 
> A: Pure functions allow to a program to behave deterministically, allowing it to be independent(loosely coupled), 
> easilty testable and also composable to extend the functionality.

> Note: Encapsulate Imperative code and hack away the logic in to declarative code to minimize the imperativeness
Pure functions helps to hack away the logic 

## Immutablity
Object whose data or properties cannot change once initialised is called an immutale object.  
Concept of creating immutables is called Immutability.  

Why Immutability? 
Any state changes or changes in the program should be known to other programs using it. Mutating objects properties
directly makes other programs not know the object has changed from its state.   
This leads unpredictable behaviour. Especially in threaded programming where object is shared by multiple threads mutating 
the object.  
With Immutablity, state changes are done by creating an new object and pass it explicitly. The programs will also know 
the object has changed by looking at the reference. (react work this way)


## Curry function
Curry function allows us to partially take some inputs and returns a function. The returned function can then be
called with differnt inputs. Basically used for function re-use with different context.
```
function add(a) {
  return function(b) {
    return a + b;
  }
};
let add10 = add(10);
let add3 = add(3);
add10(5) // 15
add3(5) // 8
``` 

## Composing functions
Composing function is similar to unix-style programming, where individual programs like `cat`, `ls`, `grep` can be composed
togther through the `|` pipe. they communicate with each other with a common data type ie. streams/stream of bytes.

In functions, Independent pure functions can be composed using composing techniques. if all the functions take the same type of data.
Objects are generic. so its more preferred.

```
let add1 = (x) => x + 1;
let double = (x) => 2 * x;
let multiply10 = (x) => x * 10;

let pipedFn = pipe(add1, double, multiply10);
pipedFn(1) // 40;
```
This allows us to compose differnt behaviours for an object. This also complies with the programming principle

> Favour composition over inheritance

## Factories
See object composition in objects folder


## TODO
functors and categories
monads


