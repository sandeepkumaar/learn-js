## Summary

Everything in JS in objects. This allows the language to
pass around anything

Function as objects
Built-in Functions
Constructing Object
  - literal
  - Functions

Autoboxing in js for primitives/ literal
immutable
Autoboxing

Properties on Object

Access
- .
- [] // computed

Arrays are objects

Duplicating objects

Property Descriptors
- Writable
- configurable
- Enumerable






class in general // copies
inheritance
polymorphism

behaviour // interfaces


Prototypes

Behavior delegation Pattern
// delegate prototypes
// prototype cloning
// Flyweight Pattern
// Object creation
// factories

Modularity // encapuslation // interface







Two forms
- literal form // preferred
- constructor form

## Language Types:
- string
- number
- boolean
- null
- undefined
- object // non-primitive or complex


> null is a primitive. The fact that `typeOf(null)` returns *object* is because of the **bug** in the language. Unfortunately
this is irreversible as too much code is dependent on it

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

These *Built-in functions* can be used as a *constructor* to get
a newly constructed object.


> Everything in JavaScript is an object.

Even these *Built-in Functions* acts as objects and have properties within them


## Note:
All **primitive types** are **immutable**. This is in contrast to Java where the language provides
us the option to create primitives either mutable, immutable.
Eg: StringBuffer() mutable.

```
val strLiteral = "im a string";
typeOf strLiteral; // "string"
strLiteral instanceOf String // false


val strObject = new String("im a string");
typeOf strObject; // "object"
strObject instanceOf String; // true

```

### Note : typeOf vs instanceOf
Both are keywords in JS.
typeOf returns the *type* as in *language types* see above
instanceOf returns the **Constructor Function** that is used to
construct the object.

See "Constructed Function"
In JS there in no **Constructor Function** that gives a Constructed object.
It can be only by making a function constructable by calling it
with `new` keyword which makes it a **Constructed Function**

Note: presence of `this` has no effect on making Constructed Functions
