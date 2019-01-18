## Functions as Building Blocks

Refer: Mathematical functions from ..programming-language

## Function as object
Just like objects when you declare a function a *reference* is created for
that function and can be *stored* in a *Identifier*  
This makes **functions** in js **First-Class**  
Meaning they can be passed around just like objects.

This also supports the notion of saying that everything in JS is *objects*


> Note: Javascript is **pass by value** or pass by copy

Here when we say *functions* are passed around we mean their *reference/value/copy/identifier*
passed around.

> Since function are objects, they are stored in heap??

>local variables/bindings in a function are recreated every time when it is called.


## How to define a function ?
JS allows us to define function in two ways
  - function declaration  // statements
  - function expression   // expressions

> We always tend to prefer expression over statements
> See Expression vs Statements in .....


### Function Declaration
```
function action(a, b) {
  // do something
  // mutate
  // may or may not return a value
}
```
action // identifier holding the reference

[see function declaration and hoisting](../scope/scopes-and-hoisting.md)

### Function Expressions
Prefer Named function expression over anonymous functions

advantages
  - debugging - stack trace
  - recursive calls


## Function Representations
Functions in JS can represent the following *behaviours*  


- IIFE
- contextual functions // method context // this
- lambdas
- arrow functions
- closures
- Higher-order functions

We will see what their behaviour is and where is can fit

### IIFE
Module/ Encapsulation / scope


### Contextual functions
see : this and functions


### Lambdas
**Lambda** is a function that is used as **data**.Period.  
They can passed as an **argument** to an function or returned as a value from
a function

> Note: Lambda functions can be *defined* both as a anonymous/expression function
or function declaration

```
var sum = function sum() {
  var result = 0;
	//forEach takes an Lambda as an argument
  [5, 5, 5].forEach(
			//lambda //here as an argument
			// lambda which is a closure and anonymous function
			function addTo(number) {
				result += number;
			}
		);

  return result;
};

```

#### Important points to note
Lambda are used as
  - callback function with `this`(optional) setting the context/environment // see contextual functions
  - closure with the function and returned function's env
  - composing functions


Lambda as callback for higher-order functions Eg: array map, filter  

Lambda can be returned from function(Higher-orderfunctions) they carry the
implicit **environment** of the enclosing **function/higher-order function**  

Lambda for composing functions, partial currying, other functional tricks/constructs


### arrow functions
Arrow function is a **stripped out** version of lambda.  
Arrow functions **does not** have it own
  - this
  - arguments
  - super
  - new.target

> if at all these statements (this, super,...) are coded within the arrow functions
they take corresponding statements from the enclosing function (lexical scope)

#### this
Arrow functions does not have its own `this`. If `this` defined in the
function refers to the `this` in enclosing function (lexical scope)

#### arguments
> arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function. - MDN

`arguments` array will not be available in arrow functions they get it from
enclosing function (lexical scope)

#### super
> The super keyword is used to access and call functions on an object's parent. - mdn

#### new.target
> The new.target property lets you detect whether a function or constructor was called using the new operator - mdn

All the above limitations makes the arrow functions fit for **simple expressions**
that returns results without any influence from external factors/environment

```
var x = (input) => { output }
```
>It expresses something like “this input (the parameters) produces this result (the body)”.

[Arrow function MDN ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)


### Closures
[See here ](../scope/scopes-and-hoisting.md#scope-of-a-closure)

### Higher order functions
Any function that takes a lambda or returns a lambda or does both is a
higher-order function. Period.


## Function scope
[See here](../scope/scopes-and-hoisting.md)


## Method/Function Design
- Named parameters
- Function polymorphism
- Generics and Collections
- Method Chaining and Fluent APIS

## Functional Programming
pure functions
### Composing software


//


Polymorphic code can work with values of different shapes, as long as they support the interface it expects.
