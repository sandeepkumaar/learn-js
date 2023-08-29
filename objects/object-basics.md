## Summary
JS has the most flexible and expressive *object* system with
- Prototypal inheritance
- Dynamic object extension
- Closures

Quick explanation :
// todo


## Creating Objects
Just like functions(see function-basics), Objects in js are created through
  - Constructor form // explicit, not preferred
  - literal form  // implicit

The above *form* along with the help of *functions* we can
create as many objects by invoking the function  

see: Built-in functions - types and grammar. for constructor form

### Construtor form
```
var employee = new Object();
employee.name = sandeep;
```

```
function Employee(_name) {
  this.name = _name;
}

var emp1 = new Employee("sandeep")
var emp2 = new Employee("navin")
```

Constructor form, creates a prototype object with the *constructor function ref*
and attaches it as the *immediate* prototype.

![Constructor prototpes](../../snaps/constructor-proto.png)


prototypes are available under `__proto__`  


We can add properties to the immediate prototype as shown

![Constructor prototpes](../../snaps/constructor-proto-property.png)

#### Note #1:
assigning a new prototype wont work, it fails silently. This behaviour
may be due to `Property Descriptors` making it immutable

```
foo.prototype = {} // nothing happens
```

#### Note #2: instanceOf
`instanceOf` operator checks for **constructor function** in the prototype
chain. If found it returns true.
wkt, *constructor function reference* is added by the `new` operator.  

For literals, they are *implicitly* created from **Object constructor function**
Hence they have *Object function ref*

> Note: when Constructors are called without `new`, `this` will point to global scope.




### literal object aka singleton
```
var employee = {
  name: "sandeep"
}
```
![Constructor prototpes](../../snaps/literal-proto.png)

object literals are *implicitly* created from the **Object built-in function**
So they have *Object constructor function ref* in their *prototype* chain  

> Also, similar to java, all objects has `Object` prototype in the top of the chain

To create many objects of that construct, we use functions

> wkt, local variables/bindings in a function are recreated every time when it is called.

```
function createEmployee(_name) {
  return {
    name: _name
  }
}

var emp1 = createEmployee("sandeep");
var emp2 = createEmployee("navin");
```

## Object properties
hasOwnProperty
getPrototypeOf

## Property Descriptors
// todo



