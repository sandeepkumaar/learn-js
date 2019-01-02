# Objective
`this` and its behaviours with functions  
How they can be used for Unix style programming  
Gotchas  
Best practices


```
/**
 * Different ways to call a function
 */
var student_1 = {
  name: "sandeep",
  age: 26,
  toUpperCase: function toUpperCase() {
    return this.name.toUpperCase()
  }
};

var student_2 = {
  name: "Navin",
  age: 23,
  toUpperCase: function toUpperCase() {
    return this.name.toUpperCase()
  }
}

student_1.toUpperCase() // "SANDEEP"
student_2.toUpperCase() // "NAVIN"


/**
 * toUpperCase method acts like a util
 * meaning they are pure and don't mutate the state
 * so toUpperCase() can be reuesed
 */

 var student_1 = {
  name: "sandeep",
  age: 26,
 };

 var student_2 = {
   name: "Navin",
   age: 23,
 };

function toUpperCaseArg(context) {
   return context.name.toUpperCase()
}

toUpperCaseArg(student_1) // SANDEEP
toUpperCaseArg(student_2) // NAVIN

//
function toUpperCaseThis() {
   return this.name.toUpperCase()
}

toUpperCaseThis.call(student_1) // SANDEEP
toUpperCaseThis.call(student_2) // NAVIN
```

## What is **`this`** in JS functions ?
**`this`** inside a function represents the *context* on which the function definition may operate  
**context** is the object that invokes the function.Period
```
obj.foo() // foo has obj's context
foo.call(obj)  // foo is called with obj's context
```
Different context can be passed to a function


#### Q : Is **`this`** does not represent the lexical scope or instance ?
Unlike most class oriented programming languages, *`this`* does not refer to the *instance scope / Lexicl scope*   
In JS `this` simply refers to the *object* (context) that invoked the function

#### Q : What if a function with **`this`** is called without a object?
A Global/window object is passed as context.   
It should be avoided as it would pollute *global scope*


#### Q : Ok, we now know that *`this`* behaves differently in JS and it has got some advantages to it(which we will see later) What if i want to refer to the lexical scope/ instance ?
self scope is useful
  - for referencing other properties in the scope/instance
  - self in functions can be used for recursion

//TODO

#### Note : functions are special objects - ref: Types and grammar
When we say objects it can have properties. Hence functions can have properties  
Functions are used to construct instances.  
Programmers use **`this`** to refer to the instance scope. But what **`this`** really do is takes the *context* from the *invoking object*  
// TODO : how `this` behaves in function constructor


## How **`this`** in JS is useful
Typically a function takes *context* and other variables from the *arguments* its passed.  
But Thinking in Unix style commands
```
ls [options] [args] // context is the directory on which `ls` is executed.
```
This makes `ls` context *independent*

The similar behaviour can be achieved in js functions using `this`
> Providing context through `this` leads to cleaner api, rather than passing the context as argument


#### Q : Runtime Context binding is Fine. But will it have any performance hickups
V8 requires us pass same object types to functions for optimized behaviour. We will also prefer the same.  
But this does not stop us from writing  *utils* that may be used elsewhere.


### Lets see the different ways on how to *set/bind* the context for the function
#### Default Binding/context
When a function invoked directly, `this` is *bound* to global scope

```
var foo = function foo() {
  console.log(this.a);
  console.log(this.x.a);
}

var a = 2;
var x = {
    a: 2
}

foo() // 2
// This works when foo and x are globals
```

We should avoid default binding it would pollute global scope


#### Implicit Binding
```

var foo = function foo() {
  console.log(this.a);
}

var x = {
    a: 2,
    foo: foo
}

// Implicitly bound
x.foo() // 2

```
#### Note :
Simply *Declaring* the function/method inside an object does not bound the function with that object.It is when the function is called with that object.

```
var bar = x.foo; // reference to x's foo

bar() // undefined // global binding

```
### Explict binding using call()

```
foo.call(x) // Explicitly bounding the foo's context to x
```

We cannot expect developers to supply the context(implicit or explicit) everytime
a function with `this` is called. This can easily pollute global space and leads to unexpected results

Also the above code expects `foo, x` to be in the same scope to use foo()
Ie. we cannot pass around the foo *alone* elsewhere and expect it to run
within `x` context. We need to pass the `x` as well

To overcome these we need to *hardbind* the function with a context before
making the function available for calling. Also allowing the function to be
reused with different context

#### Hardbinding
```
var bar = function() {
  return foo.call(x) // returns foo reference with x as context
}

```
Now `bar` function can be passed around anywhere and runs with `x` context
`x` is available as closure

The above expects us to have a functions like `bar` for binding the function
with different context

```
// helper util
var bindFunctionWithContext = function(f, context) {
  return function() {
    return f.call(context)
  }
}

var bar = bindFunctionWithContext(foo,x);
```
We have a built-in method that does the job of `bindFunctionWithContext`

```
var bar = foo.bind(x);
// bar function composed of foo and x
var choc = foo.bind(y);

```
This way we can reuse `foo` with different context and also *creates a function*
that hardbinds/compose which can be passed around

#### Note:
This is very useful feature when we want our function to operate on a
*argument/s*  within the provided *context*

Like, `cp arg1 arg2` executed on a given context.  
Where   
cp - function  
      arg1,ar2,.. parameters passed to cp function  

```
// el as in list elements
// foo takes an el and appends it to a string provided by context
function foo(el) {
  return this.id + el;
}

var context_1 = {
  id: "sandeep"
}

var context_2 = {
  id: "navin"
}

var sBind = foo.bind(context_1);
var nBind = foo.bind(context_2);

var list = [1, 2 ,3];

list.map(sBind); //
list.map(nBind); //

```
Here
  - foo() api is cleaner   
  - foo can be bound to any contexts
  - map's lambda simple

Since this pattern is used often, some built-in methods allows to
pass the context which would internally bind the function

```
// [].map(f, thisArg)
list.map(foo, context_1)

```

#### Minor Note :
API: call(thisArg, arg1, arg2,...)
call binds `thisArg` to function's this and passes other parameters as addional contexts

This is also know as **currying** where a function takes multiple contexts and
returns a function that is invoked with params



## `this` in arrow functions - acts as Lexical this
We know that arrow functions are used as *lambdas*.
And *lambdas* can be passed around with them carrying an implicit environment
known thru *closures*  
These implicit environment corresponds to function's environment that returned it.
We would prefer the *lambda* to only have the *context* from the *returning function or higher-order function*

Hence `this` inside a lambda will bind to the **Lexically** `this` in the *enclosing function/ higher-order function*  
Also, we cannot ovverride the bind made by the lambda through any means

**Lexically** `this` means lambda should see the lexical this of the enclosing function

Consider,
```

var x = {
  a: 2
}
var y = {
  a: 3
}

```
Arrow function #1
```

function foo() {
  return () => {
    return this.a; //Lexical scope of lambda is "foo"
  }
}

foo.call(x)();  //2
foo.call(y)();  //3
```

Arrow function #2
```
function fooLexical() {
  var lambda = () => {
    return this.a;
  };
  return lambda
}

var bar = fooLexical.call(x); // bar holds the lambda returned by foo

bar.call(y) // 2, even though called with different context
```

Arrow function #3
```
var lambda = () => {
  return this.a;  // Scope of lambda is now global
}

function fooNonLexical() {
 return lambda; // lambda has no lexical scope , calls the global scope even after binded
}

lambda() || lambda.call(x); //undefined
fooNonLexical()() || fooNonLexical.call(x)(); //undefined
```

This is not true for *named functions or anonymous functions*
```
function fooNamed() {
  return function() {
    return this.a;
  }
}

var bar = fooNamed.call(x)

bar() // undefined global
bar.call(y) // 3 y's context
```


### objects
### Class Objects
### Prototypes
### Behaviour delegation
