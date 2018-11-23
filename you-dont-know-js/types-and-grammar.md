# Types and Grammar


## Built-in Types

- null      // primitive
- undefined // primitive
- boolean   // primitive
- number    // primitive
- string    // primitive
- object    // non-primitive
- symbol    // primitive


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

when **typeOf** returns **undefined** it means
  - identifier is undefined
  - identifier is undeclared

Note: identifier can hold any value types, from 

undefined
  - non-declared
  - non-defined
Safety guard
  - handles gracefully
  - default/ provided impl for a utility - to check whether a program is available
