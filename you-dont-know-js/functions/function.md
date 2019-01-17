## Functions as Building Blocks

Refer: Mathematical functions

## Function as object
Just like objects when you declare a function a *reference* is created for
that function and can be *stored* in a *Identifier*  
This makes **functions** in js **First-Class**  
Meaning they can be passed around just like objects.

This also with  holds the notion of saying that everything in JS is *objects*


> Note: Javascript is **pass by value** or pass by copy

Here when we say *functions* are passed around we mean their *reference/value/copy/identifier*
passed around.

> Since function are objects, they are stored in heap??

## How to define a function ?
JS allows us to define function in two ways
  - function declaration  // statements
  - function expression   // expressions

> We always tend to prefer expression over statements
> See Expression vs Statements in .....


### Function Declaration
```
function sum(a, b) {
  return a + b
}
```
sum // identifier holding the reference
#### Behaviours
-


### Function Expressions

- Function declaration
- Function expression
- Named Function expression

- lambdas
- iife
- contextual functions // method context

// arrow functions
```
var x = (input) => { output }
```
> a function is an expression
>It expresses something like “this input (the parameters) produces this result (the body)”.



## Function scope
What is a scope?
JS scopes?

- Hoisting
- Closure

## Method/Function Design
- Named parameters
- Function polymorphism
- Generics and Collections
- Method Chaining and Fluent APIS

## Functional Programming
pure functions
### Composing software


//
local variables/bindings in a function are recreated every time when it is called

Polymorphic code can work with values of different shapes, as long as they support the interface it expects.
