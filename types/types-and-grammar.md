# Types and Grammar

## Built-in Types

- null      // primitive
- undefined // primitive
- boolean   // primitive
- number    // primitive
- string    // primitive
- symbol    // primitive
- object    // non-primitive


```
typeof undefined     === "undefined"; // true
typeof true          === "boolean";   // true
typeof 42            === "number";    // true
typeof "42"          === "string";    // true
typeof { life: 42 }  === "object";    // true

// added in ES6!
typeof Symbol()      === "symbol";    // true

// special case
typeof null === "object"; // true // bug in js

```

>null is the only primitive value that is "falsy" (aka false-like; see Chapter 4)
>but that also returns "object" from the typeof check.

#### Note
> null is sometimes referred to as an object type, but this misconception stems from a bug in the language which causes typeof null to return the string "object" incorrectly (and confusingly). In fact, null is its own primitive type.

### Special objects
  - function // non-primitive //object
  - array    // non-primitive //object

object has properties, hence *function* and *array* also has properties. Eg: length property

```
typeof function a(){ /* .. */ } === "function"; // true
typeof [1,2,3] === "object"; // true

```


## Values as Types

>In JavaScript, variables don't have types -- **values have types**. Variables can hold any value, at any time.

*variable* simply holds values of any types

### Declaration vs Definitions
> Declaration  
> introduces an identifier and describes its type  
> declaration is what the *compiler* needs to accept *references* to that identifier

> Definition  
> instantiates/*implements* this identifier
> It's what the *linker* needs in order to *link references to those entities(values)*.

In JavaScript,  

```
var a;

a; // undefined
b; // ReferenceError: b is not defined
```

Also, when typeof is used on those variables
```
var a;

typeof a; // "undefined"

typeof b; // "undefined"
// reference error is not thrown

```

The above behaviour is treated as a *Safe Guard* rather than a bug/undesired behaviour

We can leverage the above behaviour to handle certain cases

when **typeof** returns **undefined** it means
  - identifier is undefined
  - identifier is undeclared

Note: identifier can hold any value types, from

undefined
  - non-declared
  - non-defined
Safety guard
  - handles gracefully
  - default/ provided impl for a utility - to check whether a program is available



///
## `typeof` operator
Returns the **built-in** type of the operand.Any complex
types are boiled down to built-in type
returns a string

## `instanceOf` operator
checks whether the *object's prototype chain* has the
specified **constructor function**

```
function Foo(_name) {
  this.name = _name;
}
var x = new Foo("sandeep")

// `new` make `Foo` a constructor function

x instanceOf Foo // true

// checks whether `Foo` reference is available in the
`constructor` property
```


## Built-in Functions

- String
- Number
- Boolean
- Object
- Function
- Array
- Date
- RegExp
- Error

These are **Constructor function** that are used to create objects with the help of `new` operator.  

When String, Number, Boolean primitive functions are called with `new` they return `object` type. 
```
let primitiveBool = Boolean(0); // false
let objectBool = new Boolean(0);
objectBool.valueOf() // false
objectBoo.toString() // "false"
```

## JavaScript Primitive vs. Reference Values
- primitive values: pass by value/copy (stack memory)
- objects : pass by reference (Heap memory) 

ref: https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/

> Note: Since Objects are pass by reference, we should careful with **mutations**  which can lead to undeterministic results



