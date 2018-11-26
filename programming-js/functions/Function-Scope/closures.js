/*
Closures
	A closure stores function state, even after the function has returned
	This technique is commonly used to give objects data privacy
	
	Privileged Methods?
		is an exposed method that has access to private data
	In JS,
	any exposed method defined within the closure scope is privileged
	
Note:
	In addition to data privacy benefits, closures are an essential ingredient 
	in language that supports first-class functions, because they give you access 
	to outer scope variables from inside of your lambdas
	
*/


//Factory
var o = function o () {
	//Private variable
	var data = 1;
	var get;
	get = function get ()  {
		
	};
	return {
		//Privileged methods
		get : get
	};
	
};

//
var obj = o();
console.log(obj.get();



/*

*/

(function () {
	var arr = [];
	var count = 1;
	var delay = 20;
	var timer;
	var complete;
	
	//Asynchoronous recursion
	timer = function timer () {
		//Async
		setTimeout(function inner(){
			arr.push(count);
			if (count < 3) {
				count += 1;
				timer();
			}else{
				complete();
			}
		},delay)
	};
	
	
	function testSuite(){
		complete = function complete () {
			console.log('complete',arr);
		}
		
		timer();
		
		console.log('Array should be empty until the first time',arr.length);
	}

	
testSuite();

}());


/*
How JS executes the above code

IIFE creates an isolated scope all variables declared inside is isolated
JS interprets the code and hoist the respective variables

testSuite() gets called
assigns the complete function
calls the timer ();
testSuite has access to timer since timer is declared/hoisted at the top of the 
scope

timer() inturn has access to variables declared outside
inner() a lambda has access to the variables which were accessible by the timer()

Hence timer() is a closure and inner() is the lambda that has access to 
timer's variables

Here setTimeout executes asynchronously
Which means its enclosing function timer() has already executed leaving the lambda
alive and outside which has access to timer's state

Note:
timer() //is an example of Asynchoronous recursion
timer is called 3 times
The exit condition call another method from the timer's scope (complete())

*/
