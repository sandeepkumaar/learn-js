## Composing Software

- function composition
- object composition

## DAO of Immutability

### Immutability
Preserve history

### Separation
- **Logic** is a thought // Abstraction
- **Effects** are action // state mutation

Don't perform *effects* and *logic* together.
Separate them.

>Object-oriented programming makes code understandable by encapsulating moving parts.
Functional programming makes code understandable by minimizing moving parts.
  — Michael Feathers, author of Working with Legacy Code, via Twitter

Functional programming minimizes the moving parts/ code causing effects

### Composition
outputs of one is fed as input to another
```
ls dir | grep 'word'
```
To achieve this we need the interface to accept a common type. Here it is simply
streams

Plan for composition

### Conservation
Wise reuse their tools/functions as much

 Wise programmers lift functions to work on many data types,
 or *wrap data* to make it look like what the function is *expecting*



### Flow
Allow data to flow freely through functions


## Functional programming in JS
- Purity by convention
- Immutability // one-level, immutable.js mori.js for all levels
- Recursion   // tail-call optimisation


Causing mutation is a needed behaviour. We need to separate the
mutable behaviour/ moving parts / effects


##  Pure function

A Function may serve as
- Mapping // () => ()
- Procedure // imperative, effects
- I/O // Async calls


Pure function:
- () => ()
- produce no side-effects, it cannot alter any external state passed as arguments
instead in returns a new modified object.
Or the argument passed should be immutable

Dont mutate the passed object
Pass only immutable values = primitives, immutable objects


## Higher order functions


## Curry and Function composition

## Abstraction and Composition


## Object composition


## Factory functions

## Functional mixins
