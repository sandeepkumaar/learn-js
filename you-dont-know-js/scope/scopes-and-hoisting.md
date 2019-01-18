## Summary

Functional approach, ie. treating *functions* as *building blocks* (scope)
skips most of the nuances associated with JS scopes.

- immutability with `const`
- expressions over statements removes the need for blocks
  - `for loop`, `if` statements are replaced with functional expressions
- type inference to forget about hoisting
- treating functional expression as values
- closures


## Context
- Variable - Identifier - Value in programming language
- Declaration vs Definition // programming language
- Statement vs Expressions // programming language

### What is a scope?


Definition - Wiki
>In computer programming, the scope of a name binding – an association of a name to an entity, such as a variable – is the region of a computer program where the binding is valid: where the name can be used to refer to the entity. Such a region is referred to as a scope block. In other parts of the program the name may refer to a different entity (it may have a different binding), or to nothing at all (it may be unbound).

**Scope is the region**  

Our challenge will be to find/assess the **scope** of a name-binding/variable/identifier
on different cases

### How JS compiles
Before looking how a *scope of a variable* is predicted, we will see how *js engine*
compiles the code we write.

> Yes, JS engine compiles and interprets
> JS engines (browser/nodejs) compiles code on the fly giving
both the advantage of Compilation and Interpretation

see Compilation vs Intrepretation in *...programming-languages*

During the Compilation phase all **variable declaration** and
**Function declaration** are **hoisted** to the *top of its scope*

> Function declaration: declaring a identifier *with the function body*  
> Variable declaration: declaring a identifier without any value.  
> by default it has the value `undefined`


> `var` statement is initialised with value `undefined`  
> `let` `const` statements are not initialised with `undefined` until
their *definition is evaluated* during *interpretation*

```
let x;
// after compilation
let x = undefined;
```
```
function do_something() {
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2;
}
```

### Hoisting Order
1. Function Declaration
2. Variable Declaration

>functional expression are treated as values. They need to be
*assigned* to a identifier *declared*

Eg:
```
// code
var x = 10;
let y;
function y() {
  return 50
}

// compilation
function y() { return 50 } // function declaration hoisted
var x = undefined;  // variable declaration
let y // temporal dead zone, not assigned with undefined


x = 10;
y = undefined;

//

```
### What *creates* a Scope
- Blocks     // {}, for loops, if statements
- functions  // of any type

Blocks and functions creates a scope for variables and function
declarations.

*Blocks* can be seen as a **subset** of *function* scope. Because every function
has a block surrounding it.
is this true for arrow functions ?


### Identifiers declared with var, let, const keyword
The keywords describes different behaviour of the *storage space*  

> wkt, bigger the scope for a variable, more the variable gets misused.
Eg: Global scoped variables.


We would always prefer variables with  
- limited scope. *encapsulation*
- limited mutations. *immutable* // mutation of the value/reference(objects)


var, let, const can be seen as order of strictness to the above requirements   
`var < let < const`

#### var
 - function scoped
 - mutable : re-declared and re-defined

#### let
  - block scope // less coverage than var
  - mutable : only re-defined

#### const
  - block scope
  - immutable // declared and defined only once

> See let, const behaviour with hoisting  
> if const holds the reference of an object. The object properties can
be mutated.


### Scope of a closure
**Closure** is a *record/structure* storing a **function** together with an **environment**  - wiki

This happens when a function returns another function.
The environment is variables from the enclosing function.
or *the environment is the enclosing functions environment*

the returning function/s has the ability to access the environment


>local variables/bindings in a function are recreated every time when it is called.

This allows us to get different environments for the same functionality - Important


```
function environment(custom) {
  var env = 10 + custom;

  return {
    getEnv: function() {
      return env
    };
  };
};

var env1 = environment(100);
var env2 = environment(200);

// functions with customised environments

```
