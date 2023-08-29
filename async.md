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

### Analogy
Java Restaurant Model
One Cash Register
Customers are queued to order
Cashier takes the request gives it to worker, waits till the worker gives back the
item and then serve the customer who is waiting for his order.
Here until the first customer is served, other customers had to wait.

To quickly serve requests, Java Restaurant has many Cash Registers with Cashiers.
Customers are split between the Cash Registers
Problem is this can lead to sharing of resources between CashRegisters.
They need to lock and unlock the resource

JS Restaurant model
Java Restaurant Model
One Cash Register
Customers are queued to order
The Cashier takes the request and gives it to worker. The Cashier gives a receipt back to the
Customer and is ready to take requests from next customer.
This way both Customer or Cashier wont wait until an order is received.
When the order is done cashier serves the Customer.

For Huge Customer queues, JS Restaurant wont add a new Cash Register instead it will increase the
workers.

This disallows the sharing of resources - Kitchen

In callbacks way, Customer requests an order and provide details what to do with the order. Customer
does not get any receipt or acknowledgement of what would happen to his Order.

Promises provide receipt to the requesting customer. Now the customer can reason and do future tasks
once he gets the actual order.

Callbacks drawbacks
	- callback hell - callback within callbacks
	- Inversion of Control

	
### Promise Properties
reject, resolve events
immutable
chainable
composable
resolve once

### Promise in terms of event loop

### Things to look
passing params
Thenable typing

### Error handling

### Best practice
Promise patterns




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
