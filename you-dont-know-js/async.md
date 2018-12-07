# Asynchrony

When talked about concurrency we mentioned about the order-independent units of program that can run concurrently.
All I/O, Networks calls can be seen as order-independent units
and are Asynchronous.  

## Callbacks
Callbacks are function definitions that are executed after the
Asynchronous calls are finished.

Callbacks Shortcomings:
- Inversion of Control. The callback is not called by us but by
the Asynchrony operation.Trust issues.
- Nested callbacks. Callback hell
- Non-sequential code. Hard to reason


## Promises

Analogy

Two major deficiencies with using callbacks *express program Asynchrony* and *manage concurrency*  

Inversion of Control in Callback
```
fetch("http://", function(value) {
	//do something with value passed by the fetch
})
```
fetch is an external api (api that we didn't write). fetch takes our input does its operation and when it
gets the result it calls our callback with that result  
Here control is passed to the fetch() This is IOC


Promise Events
Constructing promise, revealing construtor pattern
Thenable duck typing, how do we know what we get is a promise
any value with then property cannot become a promise
p instance of
p hasProperty

Promise trust





> Promise does *not replace* callbacks. In fact callbacks are the
> fundamental unit of Asynchrony in JS. Promises help us to **reason** about code
> and solves the **Inversion of Control**

### Trustable promise
Promise.resolve()  // non-promise, genuine-promise

How do we know a function intended returns a Promise actually returns a promise

```
// don't just do this:
foo( 42 )
.then( function(v){
	console.log( v );
} );

// instead, do this:
Promise.resolve( foo( 42 ) )
.then( function(v){
	console.log( v );
} );
```
