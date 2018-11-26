/**
Note:
	var x; 					//declaration
	var x = 5; 			//assignment
	function x(){		//declaration
		
	}
	 
x is the identifier

Javascript build its execution environment in two passes
	- Declaratin pass 
			Scans for all Variable and Function Declaration and creates Identifiers
			
	- Execution pass
			what happens here?
			After the first pass, all declared functions are available, but variables
			are still undefined
	

*/

//
var x = 1;
(function () {
	console.log('inner scope',x) //undefined
	var x = 2;
}());
console.log('outer scope',x);  // 1
//the above is similar to 
var x = 1;
function y () {
	console.log(x); 
	var x = 2;
}
y();

//The above code is interpreted by Javascript as follows
var x = 1;
(function () {
	var x; 		//Variable Declaration is hoisted and x is undefined
	console.log(x);
	x=2; 			//Initialization is still down here
}());

//Now instead of variable we ll substitute functions as values

var x = 1; //x is the indentifier

function number () { //number is the identifier
	return 1;
}


//function declaration as values/lambdas

function number () {
	return 1;
}

(function () {
	console.log('Inner scope',number()); // 2
	function number () {
		return 2;
	}
}());

console.log('Outer scope',number()); // 1


//function expression 
 
function number () {
	return 1;
}

(function () {
	console.log('inner scope before',number());  // Error
	var number = function number () {
		return 2;
	};
	console.log('inner scope after',number());  // 1
}());
console.log('outer scope',number());  				// 1

/*
Note:
Function expression in js is treated as varibles

*/


/*
Solution:
If you declare all of our variables at the top of our function,
and define our functions before you try to use them 
This practice can substantially reduce scope-related bugs

*/

/*
Javascript Execution style
Note:
We know that JS is an interpreter language meaning it executes code 
line by line
Eg:

console.log(x);
var x=2;

Is interpreted as 

var x;
console.log(x);
x=2;

Output: undefined

Executes in two passes
1. Interprets and arranges the code in the executable manner 
2. Executes the interpreted code in the linear fashion (Single thread)

Eg:

var x=2;
function y(){
	return 2;
}
y();
var a = 'a';
z();
function z(){
	console.log();
	var x=3;
	//do something else
	function (){};
	return 3;
}


The above code is Interpreted and Executed as

var x; // Variable is hoisted but undefined
function y(){   //funciton is hoisted with implementation
}
function z(){ //hoisted
	var x;					//Hoisted at this scope
	function (){};  //Hosited at this scope
	console.log();
	x=3;
	return 3;
}
x=2;
x();
z();



*/





